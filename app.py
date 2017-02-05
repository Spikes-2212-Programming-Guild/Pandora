from flask import Flask, render_template, redirect, url_for, request, json
# from flask_login import LoginManager, login_required, current_user
from sqlalchemy import create_engine
from sqlalchemy import func, update
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from database import db_session, init_db
from teams import Team
from games import Game, update_game
from users import User
from performances import Results
from user_manager import login_manager
import enums
from statistics import averages

app = Flask(__name__)

login_manager = login_manager()


# login_manager.init_app(app)
# login_manager.login_view = "login"


@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


# @login_manager.user_loader
def load_user(user_id):
    login_manager.login(User.query.filter(User.id == user_id).first().username)


@app.route("/")
# @login_required
def index():
    return render_template('index.html', user=login_manager)


@app.route("/logout")
def logout():
    login_manager.logout()
    return redirect("/login")


# route for handling the login page logic
@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form["formtype"] == 'login':
            username = request.form.get("username")
            user = db_session.query(User).filter(User.username == username,
                                                 User.password == request.form.get("password")).first()
            if user:
                load_user(user.id)
                return (redirect('/'))
            else:
                error = "username does not match password"
        else:
            error = signup()
    return render_template('login.html', error=error)


def signup():
    usr = User(request.form['username'], request.form['password'], request.form['email'])
    error = None
    try:
        db_session.add(usr)
        db_session.flush()
    except:
        error = "username is already in use, try another one"
    print User.query.all()
    load_user(usr.id)
    return error


@app.route("/teams")
def teams():
    teams = Team.query.all()
    return render_template("teams.html", teams=teams)


@app.route("/users")
def users():
    users = User.query.all()
    print users
    return render_template("users.html", users=users)


@app.route("/team/<teamnumber>", methods=["GET", "POST"])
def team_page(teamnumber):
    cur_team = Team.query.filter_by(number=teamnumber).first()
    if request.method == "POST":
        comment = ""
        try:
            comment = request.form["conclusion"]
            db_session.query(Team).filter(Team.number == teamnumber).update({"conclusion": comment},
                                                                            synchronize_session='evaluate')
            db_session.flush()
        except:
            pass
    all_team_games = Results.query.filter_by(team=teamnumber).order_by(Results.number)
    all_games = Results.query.all()
    team_average = averages(all_team_games)
    all_average = averages(all_games)
    return render_template('team2.html', status=login_manager.status, games=all_team_games,
                           team=cur_team, all_average=all_average, team_average=team_average, team_number=teamnumber)


@app.route("/games")
def games():
    games = Game.query.all()
    return render_template('games.html', games=games)


@app.route("/game/<teamnumber>/<gamenumber>")
def game_page(gamenumber, teamnumber):
    game = Results.query.filter_by(number=gamenumber, team=teamnumber).first()
    all_team_games = Results.query.filter_by(team=teamnumber)
    all_games = Results.query.all()
    if all_team_games != None:
        team_average = {}
        high_average = 0
        low_average = 0
        gears_average = 0
        hoppers_average = 0
        fouls = 0
        score = 0
        count = 0
        for games in all_team_games:
            high_average += games.highgoal
            low_average += games.lowgoal
            gears_average += games.gears
            hoppers_average += games.hoppers
            score += games.score
            fouls += games.fouls
            count += 1
        if count != 0:
            team_average["HighShooting"] = high_average / count
            team_average["LowShooting"] = low_average / count
            team_average["Gears"] = gears_average / count
            team_average["Hoppers"] = hoppers_average / count
            team_average["Score"] = score / count
            team_average["Fouls"] = fouls / count

        all_average = {}
        high_average = 0
        low_average = 0
        gears_average = 0
        hoppers_average = 0
        fouls = 0
        score = 0
        count = 0
        for games in all_games:
            high_average += games.highgoal
            low_average += games.lowgoal
            gears_average += games.gears
            hoppers_average += games.hoppers
            score += games.score
            fouls += games.fouls
            count += 1
        if count != 0:
            all_average["HighShooting"] = high_average / count
            all_average["LowShooting"] = low_average / count
            all_average["Gears"] = gears_average / count
            all_average["Hoppers"] = hoppers_average / count
            all_average["Score"] = score / count
            all_average["Fouls"] = fouls / count
    return render_template('game_page.html', game=game, team_average=team_average, all_average=all_average)


@app.route("/newTeam", methods=["GET", "POST"])
def add_team():
    if request.method == 'POST':
        db_session.add(Team(request.form["number"], request.form["name"]))
        db_session.flush()
        return redirect("/teams")
    return render_template("/addTeam.html")


@app.route("/checkIfTeamAndGameExists", methods=["POST"])
def check_if_happened():
    match_exists = Results.query.filter_by(team=request.form["team_number"],
                                           number=request.form["match_number"]).first()
    return json.dumps(match_exists is not None)


@app.route("/showDb")
def show_db():
    game = Results.query.all()
    return render_template('show_db.html', games=game)


@app.route("/scoutingForm", methods=["GET", "POST"])
def scouting_form():
    if request.method == 'GET':
        return render_template('scoutingForm.html', quality=enums.quality, time=enums.time)
    elif request.form["override"] == "False":
        values = {}

        # try:
        values["scoreHigh"] = int(request.form["highFuelScoredSend"]) if request.form["highFuelScoredSend"] else 0
        values["scoreLow"] = int(request.form["lowFuelScoredSend"]) if request.form["lowFuelScoredSend"] else 0
        values["scoreGears"] = int(request.form["gearsScoredSend"]) if request.form["gearsScoredSend"] else 0
        # values["scoreHoppers"] = request.form["scoreHoppers"]
        # values["Hoppers"] = request.form["Hoppers"]
        values["fouls"] = int(request.form["foulsDone"]) if request.form["foulsDone"] else 0
        values["scoreHoppers"] = int(request.form["hoppersUsed"]) if request.form["hoppersUsed"] else 0
        values["Hoppers"] = request.form["hopperCatchingQuality"] if values["scoreHoppers"] > 0 else enums.quality[0]
        if request.form["Defence"] == "False":
            values["qualityDefence"] = "none"
        else:
            values["qualityDefence"] = request.form["qualityDefence"]
        if request.form["High"] == "False":
            values["scoreHigh"] = 0
            values["High"] = "none"
        else:
            values["High"] = request.form["qualityHigh"]
        if request.form["Low"] == "False":
            values["scoreLow"] = 0
        if request.form["Gears"] == "False":
            values["scoreGears"] = 0
            values["Gears"] = "none"
        else:
            values["Gears"] = request.form["qualityGears"]
        if request.form["Climb"] == "False":
            values["Climb"] = "none"
        else:
            values["Climb"] = request.form["qualityClimbing"]
        result = Results(number=request.form["matchNumber"], team=request.form["teamNumber"],
                         highgoal=values["scoreHigh"],
                         lowgoal=values["scoreLow"], gears=values["scoreGears"], hoppers=values["scoreHoppers"],
                         fouls=values["fouls"], highgoal_efficiancy=values["High"],
                         hoppers_efficiency=values["Hoppers"], gears_efficiency=values["Gears"],
                         climbing_quality=values["Climb"], defending_quality=values["qualityDefence"],
                         climbed=request.form["Climb"], defensive=request.form["Defence"],
                         comment=request.form["comment"])
        # try:
        #     update_game(request.form["game"])
        # finally:
        #     print Game.query.filter(Game.number == request.form["game"]).all()
        db_session.add(result)
        db_session.flush()
        return redirect('/')
    elif request.form["override"] == "True":
        overRide = db_session.query(Results).filter_by(team=request.form["teamNumber"],
                                                       number=request.form["matchNumber"]).first()
        db_session.delete(overRide)
        db_session.flush()
        values = {}

        # try:
        values["scoreHigh"] = int(request.form["highFuelScoredSend"]) if request.form["highFuelScoredSend"] else 0
        values["scoreLow"] = int(request.form["lowFuelScoredSend"]) if request.form["lowFuelScoredSend"] else 0
        values["scoreGears"] = int(request.form["gearsScoredSend"]) if request.form["gearsScoredSend"] else 0
        # values["scoreHoppers"] = request.form["scoreHoppers"]
        # values["Hoppers"] = request.form["Hoppers"]
        values["fouls"] = int(request.form["foulsDone"]) if request.form["foulsDone"] else 0
        values["scoreHoppers"] = int(request.form["hoppersUsed"]) if request.form["hoppersUsed"] else 0
        values["Hoppers"] = request.form["hopperCatchingQuality"] if values["scoreHoppers"] > 0 else enums.quality[0]
        # except:
        # values["scoreHigh"] = 0
        # values["scoreLow"] = 0
        # values["scoreGears"] = 0
        # values["scoreHoppers"] = 0
        # values["Hoppers"] = enums.quality[0]
        # values["fouls"] = 0
        # finally:
        if request.form["Defence"] == "False":
            values["qualityDefence"] = "none"
        else:
            values["qualityDefence"] = request.form["qualityDefence"]
        if request.form["High"] == "False":
            values["scoreHigh"] = 0
            values["High"] = "none"
        else:
            values["High"] = request.form["qualityHigh"]
        if request.form["Low"] == "False":
            values["scoreLow"] = 0
        if request.form["Gears"] == "False":
            values["scoreGears"] = 0
            values["Gears"] = "none"
        else:
            values["Gears"] = request.form["qualityGears"]
        if request.form["Climb"] == "False":
            values["Climb"] = "none"
        else:
            values["Climb"] = request.form["qualityClimbing"]
        result = Results(number=request.form["matchNumber"], team=request.form["teamNumber"],
                         highgoal=values["scoreHigh"],
                         lowgoal=values["scoreLow"], gears=values["scoreGears"], hoppers=values["scoreHoppers"],
                         fouls=values["fouls"], highgoal_efficiancy=values["High"],
                         hoppers_efficiency=values["Hoppers"], gears_efficiency=values["Gears"],
                         climbing_quality=values["Climb"], defending_quality=values["qualityDefence"],
                         climbed=request.form["Climb"], defensive=request.form["Defence"],
                         comment=request.form["comment"])
        # try:
        #     update_game(request.form["game"])
        # finally:
        #     print Game.query.filter(Game.number == request.form["game"]).all()
        db_session.add(result)
        db_session.flush()
        return redirect('/')


if __name__ == "__main__":
    # set the secret key.  keep this really secret:
    app.secret_key = 'Spikes2212Spikes2212'
    login_manager.logout()
    init_db()
    app.run(host="0.0.0.0", debug=True)
