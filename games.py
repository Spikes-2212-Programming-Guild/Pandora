#!py
from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base


class Alliance():
    """
    Alliance object hold 3 teams
    
    :param Team team1: team's Object
    :param Team team2: team's Object
    :param Team team3: team's Object
    """

    def __init__(self, team1, team2, team3):
        self.team1 = team1
        self.team2 = team2
        self.team3 = team3

    def __repr__(self):
        return "Alliance:<team1: %s, team2: %s, team3: %s >" % (self.team1, self.team2, self.team3)


class Game(Base):
    """A Game object.

    :param int number: team's number
    :param Alliance red: red alliance
    :param Alliance red: blue alliance

    """
    __tablename__ = 'games'

    number = Column(Integer, primary_key=True)
    red1 = Column(Integer, ForeignKey('teams.number'))
    red2 = Column(Integer, ForeignKey('teams.number'))
    red3 = Column(Integer, ForeignKey('teams.number'))
    blue1 = Column(Integer, ForeignKey('teams.number'))
    blue2 = Column(Integer, ForeignKey('teams.number'))
    blue3 = Column(Integer, ForeignKey('teams.number'))

    def __init__(self, number, red, blue):
        self.number = number
        self.red1 = red[0]
        self.red2 = red[1]
        self.red3 = red[2]
        self.blue1 = blue[0]
        self.blue2 = blue[1]
        self.blue3 = blue[2]

    def __repr__(self):
        return '<Game #%s>' % (self.number)
