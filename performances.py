#!py
from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, FLOAT, Enum
from database import Base
import enums


def score(highgoal, lowgoal, gears, climbing, fouls):
    gear_ammount = [2, 6, 12]
    #don't ask questions, you will not hear lies
    #TODO make cleaner
    score = (gear_ammount.index(min(gear_ammount, key=lambda x: abs(x - gears))) + 1 if min(gear_ammount,key=lambda x: abs(x - gears)) < gears else 2) * 40
    score += highgoal / 3 + lowgoal / 9 + (50 if climbing else 0)
    score -= 5 * fouls
    return score()


class Performance(Base):
    """ A table representing every game resaults of each group in each game

    """
    __tablename__ = 'results'

    # id fields
    number = Column(Integer, ForeignKey("Game.number"))
    team = Column(Integer, ForeignKey("Team.number"),primary_key=True,autoincrement=False)

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
        self.score = score(highgoal, lowgoal, gears, climbed, fouls)
