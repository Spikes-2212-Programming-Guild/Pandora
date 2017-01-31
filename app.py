from flask import Flask, render_template, redirect, url_for, request
# from flask_login import LoginManager, login_required, current_user
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from database import db_session, init_db
from teams import Team
from games import Game,update_game
from users import User
from performances import Results
from user_manager import login_manager
import enums

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


@app.route("/team/<teamnumber>")
def team_page(teamnumber):
    games = Results.query.filter_by(team=teamnumber)
    return render_template('team2.html', games=games)


@app.route("/games")
def games():
    games = Game.query.all()
    return render_template('games.html', games=games)


@app.route("/game/<gamenumber>")
def game_page(gamenumber):
    game = Game.query.filter_by(number=gamenumber).first()
    return render_template('game_page.html', game)


@app.route("/scoutingForm", methods=["GET", "POST"])
def scouting_form():
    if request.method == 'GET':
        return render_template('scoutingForm.html', quality=enums.quality, time=enums.time)
    else:
        values = {}
        for i in request.form:
            print "%s: %s" % (i, request.form[i])
            if request.form[i] == "True":
                print "quality" + i
                values[i] = request.form["quality" + i]
            elif request.form[i] == "False":
                values[i] = enums.quality[0]
        try:
            values["scoreHigh"] = request.form["scoreHigh"]
            values["scoreLow"] = request.form["scoreLow"]
            values["scoreGears"] = request.form["scoreGears"]
            values["scoreHoppers"] = request.form["scoreHoppers"]
            values["Hoppers"] = request.form["Hoppers"]
            values["fouls"] = request.form["fouls"]
        except:
            values["scoreHigh"] = 0
            values["scoreLow"] = 0
            values["scoreGears"] = 0
            values["scoreHoppers"] = 0
            values["Hoppers"] = enums.quality[0]
            values["fouls"] = 0
        finally:
            print values
            result = Results(number=request.form["game"], team=request.form["teamNumber"],
                             highgoal=values["scoreHigh"],
                             lowgoal=values["scoreLow"], gears=values["scoreGears"], hoppers=values["scoreHoppers"],
                             fouls=values["fouls"], highgoal_efficiancy=values["High"],
                             hoppers_efficiency=values["Hoppers"], gears_efficiency=values["Gears"],
                             climbing_quality=values["Climb"], defending_quality=values["Deffence"],
                             climbed=request.form["Climb"], defensive=request.form["Deffence"],
                             comment=request.form["Comment"])
            try:
                update_game(request.form["game"])
            except:
                print Game.query.filter(Game.number==request.form["game"]).all()
            db_session.add(result)
            db_session.flush()
        return redirect('/')


if __name__ == "__main__":
    # set the secret key.  keep this really secret:
    app.secret_key = 'Spikes2212Spikes2212'
    login_manager.logout()
    init_db()
    app.run(debug=True)
