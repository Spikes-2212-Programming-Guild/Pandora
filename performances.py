#!py
from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, FLOAT, Enum
from database import Base
import enums


def score(highgoal, lowgoal, gears, climbing, fouls):
    gear_ammount = [2, 6, 12]
    #don't ask questions, you will not hear lies
    #TODO make cleaner
    value=gear_ammount.index(min(gear_ammount, key=lambda x: abs(x - gears)))
    print value
    score = (value + 1 if value < gears else 2) * 40
    score += highgoal / 3 + lowgoal / 9 + (50 if climbing==True else 0)
    score -= 5 * fouls
    return score


class Results(Base):
    """ A table representing every game resaults of each group in each game

    """
    __tablename__ = 'results'

    # id fields
    index= Column(Integer,primary_key=True,autoincrement=True)
    number = Column(Integer, ForeignKey("games.number"))
    team = Column(Integer, ForeignKey("teams.number"))

    # countable fields
    highgoal = Column("high goal", Integer)
    lowgoal = Column("low goal", Integer)
    gears = Column("gears", Integer)
    hoppers = Column("hoppers", Integer)
    fouls = Column("fouls", Integer)

    # efficiency fields
    highgoal_efficiency = Column("high goal efficiency", Enum(*enums.quality))
    hoppers_efficiancy = Column("low goal efficiency", Enum(*enums.quality))
    gears_efficiancy = Column("gears efficiency", Enum(*enums.quality))
    climbing_quality = Column("climbing efficiency", Enum(*enums.time))
    defending_quality = Column("defending efficiency", Enum(*enums.quality))

    # boolean fields
    climbed = Column("climbing", Boolean)
    defensive_robot = Column("defence", Boolean)

    # conclusion fields
    comment = Column("comments", String(1050))
    score = Column("score", Integer)

    def __init__(self, number, team, highgoal, lowgoal, gears, hoppers, fouls, highgoal_efficiancy, hoppers_efficiency,
                 gears_efficiency, climbing_quality, defending_quality, climbed, defensive, comment):
        """
        :param number:
        :type number: int
        :param team:
        :type team: int
        :param highgoal:
        :param lowgoal:
        :param gears:
        :param hoppers:
        :param fouls:
        :param highgoal_efficiancy:
        :param hoppers_efficiency:
        :param gears_efficiency:
        :param climbing_quality:
        :param defending_quality:
        :param climbed:
        :param defensive:
        :param comment:
        """
        self.team=team
        self.number=number
        self.highgoal = highgoal
        self.lowgoal = lowgoal
        self.gears = gears
        self.hoppers = hoppers
        self.fouls = fouls
        self.highgoal_efficiency = highgoal_efficiancy
        self.hoppers_efficiancy = hoppers_efficiency
        self.gears_efficiancy = gears_efficiency
        self.climbing_quality = climbing_quality
        self.defending_quality = defending_quality
        self.climbed = climbed
        self.defensive_robot = defensive
        self.comment = comment
        self.score = score(highgoal=highgoal, lowgoal=lowgoal, gears=gears, climbing=climbed, fouls=fouls)
