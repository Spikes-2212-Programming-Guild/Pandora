from flask import Flask, render_template, redirect, url_for, request
from flask_login import LoginManager, login_required
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from database import db_session, init_db
from teams import Team
from games import Game
from users import User

app = Flask(__name__)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"


@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)


@app.route("/")
def index():
    return render_template('index.html', name="Admin")


# route for handling the login page logic
@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        print request.form.get("formtype")
        if request.form["formtype"] == 'login':
            print"login"
        else:
            signup()
    return render_template('login.html', error=error)


def signup():
    usr = User(request.form['username'], request.form['password'], request.form['email'])
    db_session.add(usr)
    print usr
    return redirect(url_for('games'))


@app.route("/teams")
def teams():
    teams = Team.query.all()
    return render_template("teams.html", teams=teams)


@app.route("/users")
def users():
    usr = User.query.all()
    return render_template("users.html", users=usr)


@app.route("/team/<teamnumber>")
def team_page(teamnumber):
    team = Team.query.filter_by(number='teamnumber').first()
    return render_template('team_page.html', team=team)


@app.route("/games")
def games():
    games = Game.query.all()
    return render_template('games.html', games=games)


@app.route("/game/<gamenumber>")
def game_page(gamenumber):
    game = Game.query.filter_by(number='gamenumber').first()
    return render_template('game_page.html', game)


if __name__ == "__main__":
    # set the secret key.  keep this really secret:
    app.secret_key = 'Spikes2212Spikes2212'
    init_db()
    app.run(debug=True)
