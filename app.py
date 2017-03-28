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
import smtplib
from statistics import averages, best_game, worst_game
from best_stuff import best_defence, average_hopper, reliablty_problems, average_driver_quality, average_pilot
from operator import itemgetter

app = Flask(__name__)

login_manager = login_manager()


# login_manager.init_app(app)
# login_manager.login_view = "login"

# fk u saer
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


@app.route("/getConclusion", methods=["POST"])
def get_conclusion():
    # db_session.flush()
    team = Team.query.filter_by(number=request.form["team_number"]).first()
    return json.dumps(team.conclusion)


@app.route("/tiers")
def tiers_page():
    teams = Team.query.all()
    averages_teams = []
    for idx, team in enumerate(teams):
        averages_teams.append(averages(Results.query.filter_by(team=teams[idx].number).all()))
        averages_teams[idx]["headComment"] = teams[idx].conclusion
    sorted_climb = sorted(averages_teams, key=itemgetter("Climb"), reverse=True)
    sorted_gears = sorted(averages_teams, key=itemgetter('Gears'), reverse=True)
    sorted_high = sorted(averages_teams, key=itemgetter('HighShooting'), reverse=True)
    sorted_low = sorted(averages_teams, key=itemgetter('LowShooting'), reverse=True)
    sorted_driver = sorted(averages_teams, key=itemgetter('DriverAverage'), reverse=True)
    return render_template("tiers.html", sorted_climb=sorted_climb, sorted_gears=sorted_gears, sorted_high=sorted_high,
                           sorted_low=sorted_low, sorted_driver=sorted_driver)


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
            return redirect('/team/' + teamnumber + '')
        except:
            pass
    all_team_matches = Results.query.filter_by(team=teamnumber).order_by(Results.number).all()
    all_matches = Results.query.all()
    team_average = averages(all_team_matches)
    all_average = averages(all_matches)
    best_defences = best_defence(games=all_team_matches)
    average_hoppers = average_hopper(games=all_team_matches)
    reliablty_problem = reliablty_problems(games=all_team_matches)
    average_driver_qualitys = average_driver_quality(games=all_team_matches)
    average_pilot_stats = average_pilot(games=all_team_matches)
    if len(all_team_matches) == 0:
        doMatchExists = "False"
    else:
        doMatchExists = "True"
    return render_template('team2.html', status=login_manager.status, games=all_team_matches,
                           team=cur_team, all_average=all_average, team_average=team_average, team_number=teamnumber,
                           best=best_game(all_team_matches), worst=worst_game(all_team_matches),
                           doGamesExist=doMatchExists, best_defence=best_defences, average_hopper=average_hoppers,
                           reliablty_problem=reliablty_problem, average_driver_qualitys=average_driver_qualitys,
                           average_pilot=average_pilot_stats)


# @app.route("/games")
# def games():
#     games = Game.query.all()
#     return render_template('games.html', games=games)
#
#
# @app.route("/game/<teamnumber>/<gamenumber>")
# def game_page(gamenumber, teamnumber):
#     game = Results.query.filter_by(number=gamenumber, team=teamnumber).first()
#     all_team_games = Results.query.filter_by(team=teamnumber)
#     all_games = Results.query.all()
#     if all_team_games != None:
#         team_average = averages(all_team_games)
#     all_average = averages(all_games)
#     return render_template('game_page.html', game=game, team_average=team_average, all_average=all_average)

@app.route("/newTeam", methods=["GET", "POST"])
def add_team():
    if request.method == 'POST':
        if request.form["shouldOverrideTeam"] == "True":
            db_session.query(Team).filter(Team.number == request.form["number"]).update({"name": request.form["name"]},
                                                                                        synchronize_session='evaluate')
            db_session.flush()
        else:
            db_session.add(Team(request.form["number"], request.form["name"], " "))
            db_session.flush()
        if request.form["WereToRedirect"] == "ScoutingForm":
            return redirect("/scoutingForm")
        else:
            return redirect("/teams")
    return render_template("/addTeam.html")


@app.route("/checkIfTeamAndMatchExists", methods=["POST"])
def check_if_happened():
    match_exists = Results.query.filter_by(team=request.form["team_number"],
                                           number=request.form["match_number"]).first()
    return json.dumps(match_exists is not None)

@app.route("/deleteMatch", methods=["GET","POST"])
def delete_match():
    if request.method == 'POST':
        delete = db_session.query(Results).filter_by(team=request.form["teamNumber"],
                                                     number=request.form["matchNumber"]).first()
        db_session.delete(delete)
        db_session.flush()
        return redirect("/deleteMatch")
    return render_template("/deleteMatch.html")


@app.route("/checkIfTeamExists", methods=["POST"])
def check_if_team_exists():
    team_exists = Team.query.filter_by(number=request.form["team_number"]).first()
    return json.dumps(team_exists is not None)


@app.route("/showDb")
def show_db():
    matches = Results.query.all()
    return render_template('show_db.html', games=matches)


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
        values["Climb"] = int(request.form["qualityClimbing"]) if request.form["qualityClimbing"] else 0
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
        if request.form["Gear"] == "False":
            values["scoreGears"] = 0
            values["Gears"] = "none"
        else:
            values["Gears"] = request.form["qualityGear"]
        if request.form["Climb"] == "False":
            values["didClimb"] = False
            values["failedClimb"] = False
        elif request.form["Climb"] == "True":
            values["didClimb"] = True
            values["failedClimb"] = False
        elif request.form["Climb"] == "TrueFail":
            values["didClimb"] = False
            values["failedClimb"] = True
        if request.form["comment"] != "":
            sender = 'randommailmessage@gmail.com'
            recivers = ['tomervolk13@gmail.com']
            message = "Got a message"
            smtpObj = smtplib.SMTP(host='smtp.gmail.com', port=587)
            smtpObj.ehlo()
            smtpObj.starttls()
            smtpObj.login("randommailmessage", "2212InYourPants")
            smtpObj.sendmail(sender, recivers, message)
        auto = {}
        if request.form["didAuto"] == "False":
            auto["GearsSide"] = False
            auto["GearsMid"] = False
            auto["High"] = False
            auto["Low"] = False
            auto["lineAuto"] = False
        else:
            if request.form["shootingAuto"] == "High":
                auto["High"] = True
                auto["Low"] = False
            elif request.form["shootingAuto"] == "Low":
                auto["High"] = False
                auto["Low"] = True
            else:
                auto["High"] = False
                auto["Low"] = False
            if request.form["gearsAuto"] == "Mid":
                auto["GearsMid"] = True
                auto["GearsSide"] = False
            elif request.form["gearsAuto"] == "Side":
                auto["GearsMid"] = False
                auto["GearsSide"] = True
            else:
                auto["GearsMid"] = False
                auto["GearsSide"] = False
            if request.form["lineAuto"] == "True":
                auto["lineAuto"] = True
            else:
                auto["lineAuto"] = False
        if request.form["Pilot"] == "False":
            values["qualityPilot"] = "none"
        else:
            values["qualityPilot"] = request.form["qualityPilot"]
        problems = {}
        if request.form["shutdownProblem"] == "True":
            problems["shutdownProblem"] = True
        else:
            problems["shutdownProblem"] = False
        if request.form["notMovingProblem"] == "True":
            problems["notMovingProblem"] = True
        else:
            problems["notMovingProblem"] = False
        if request.form["unstableProblem"] == "True":
            problems["unstableProblem"] = True
        else:
            problems["unstableProblem"] = False
        if request.form["breakingProblem"] == "True":
            problems["breakingProblem"] = True
        else:
            problems["breakingProblem"] = False
        booleans = {}
        if request.form["Pilot"] == "False":
            booleans["Pilot"] = False
        else:
            booleans["Pilot"] = True
        if request.form["didAuto"] == "False":
            booleans["didAuto"] = False
        else:
            booleans["didAuto"] = True
        if request.form["Defence"] == "False":
            booleans["Defence"] = False
        else:
            booleans["Defence"] = True
        result = Results(highgoal_auto=auto["High"], lowgoal_auto=auto["Low"],
                         side_gears=auto["GearsSide"], center_gears=auto["GearsMid"],
                         passed_line=auto["lineAuto"], highgoal=values["scoreHigh"],
                         number=request.form["matchNumber"], team=request.form["teamNumber"],
                         lowgoal=values["scoreLow"], gears=values["scoreGears"], hoppers=values["scoreHoppers"],
                         fouls=values["fouls"], highgoal_efficiancy=values["High"],
                         hoppers_efficiency=values["Hoppers"], gears_efficiency=values["Gears"],
                         climbing_quality=values["Climb"], defending_quality=values["qualityDefence"],
                         driver_quality=request.form["qualityDriver"], climbed=values["didClimb"],
                         failed_to_climb=values["failedClimb"],
                         defensive=booleans["Defence"], shutdown_problem=problems["shutdownProblem"],
                         not_moving_problem=problems["notMovingProblem"],
                         unstable_problem=problems["unstableProblem"], pilot=booleans["Pilot"],
                         pilot_quality=values["qualityPilot"], autonomous=booleans["didAuto"],
                         breaking_problem=problems["breakingProblem"], comment=request.form["comment"])
        db_session.add(result)
        db_session.flush()
        return redirect('/scoutingForm')
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
        values["Climb"] = int(request.form["qualityClimbing"]) if request.form["qualityClimbing"] else 0
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
        if request.form["Gear"] == "False":
            values["scoreGears"] = 0
            values["Gears"] = "none"
        else:
            values["Gears"] = request.form["qualityGear"]
        if request.form["Climb"] == "False":
            values["didClimb"] = False
            values["failedClimb"] = False
        elif request.form["Climb"] == "True":
            values["didClimb"] = True
            values["failedClimb"] = False
        elif request.form["Climb"] == "TrueFail":
            values["didClimb"] = False
            values["failedClimb"] = True
        if request.form["comment"] != "":
            sender = 'randommailmessage@gmail.com'
            recivers = ['tomervolk13@gmail.com']
            message = "Got a message"
            smtpObj = smtplib.SMTP(host='smtp.gmail.com', port=587)
            smtpObj.ehlo()
            smtpObj.starttls()
            smtpObj.login("randommailmessage", "2212InYourPants")
            smtpObj.sendmail(sender, recivers, message)
        auto = {}
        if request.form["didAuto"] == "False":
            auto["GearsSide"] = False
            auto["GearsMid"] = False
            auto["High"] = False
            auto["Low"] = False
            auto["lineAuto"] = False
        else:
            if request.form["shootingAuto"] == "High":
                auto["High"] = True
                auto["Low"] = False
            elif request.form["shootingAuto"] == "Low":
                auto["High"] = False
                auto["Low"] = True
            else:
                auto["High"] = False
                auto["Low"] = False
            if request.form["gearsAuto"] == "Mid":
                auto["GearsMid"] = True
                auto["GearsSide"] = False
            elif request.form["gearsAuto"] == "Side":
                auto["GearsMid"] = False
                auto["GearsSide"] = True
            else:
                auto["GearsMid"] = False
                auto["GearsSide"] = False
            if request.form["lineAuto"] == "True":
                auto["lineAuto"] = True
            else:
                auto["lineAuto"] = False
        if request.form["Pilot"] == "False":
            values["qualityPilot"] = "none"
        else:
            values["qualityPilot"] = request.form["qualityPilot"]
        problems = {}
        if request.form["shutdownProblem"] == "True":
            problems["shutdownProblem"] = True
        else:
            problems["shutdownProblem"] = False
        if request.form["notMovingProblem"] == "True":
            problems["notMovingProblem"] = True
        else:
            problems["notMovingProblem"] = False
        if request.form["unstableProblem"] == "True":
            problems["unstableProblem"] = True
        else:
            problems["unstableProblem"] = False
        if request.form["breakingProblem"] == "True":
            problems["breakingProblem"] = True
        else:
            problems["breakingProblem"] = False
        booleans = {}
        if request.form["Pilot"] == "False":
            booleans["Pilot"] = False
        else:
            booleans["Pilot"] = True
        if request.form["didAuto"] == "False":
            booleans["didAuto"] = False
        else:
            booleans["didAuto"] = True
        if request.form["Defence"] == "False":
            booleans["Defence"] = False
        else:
            booleans["Defence"] = True
        result = Results(highgoal_auto=auto["High"], lowgoal_auto=auto["Low"],
                         side_gears=auto["GearsSide"], center_gears=auto["GearsMid"],
                         passed_line=auto["lineAuto"], highgoal=values["scoreHigh"],
                         number=request.form["matchNumber"], team=request.form["teamNumber"],
                         lowgoal=values["scoreLow"], gears=values["scoreGears"], hoppers=values["scoreHoppers"],
                         fouls=values["fouls"], highgoal_efficiancy=values["High"],
                         hoppers_efficiency=values["Hoppers"], gears_efficiency=values["Gears"],
                         climbing_quality=values["Climb"], defending_quality=values["qualityDefence"],
                         driver_quality=request.form["qualityDriver"], climbed=values["didClimb"],
                         failed_to_climb=values["failedClimb"],
                         defensive=booleans["Defence"], shutdown_problem=problems["shutdownProblem"],
                         not_moving_problem=problems["notMovingProblem"],
                         unstable_problem=problems["unstableProblem"], pilot=booleans["Pilot"],
                         pilot_quality=values["qualityPilot"], autonomous=booleans["didAuto"],
                         breaking_problem=problems["breakingProblem"], comment=request.form["comment"])
        db_session.add(result)
        db_session.flush()
        return redirect('/scoutingForm')


@app.before_first_request
def setup():
    app.secret_key = 'Spikes2212Spikes2212'
    login_manager.logout()
    init_db()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
