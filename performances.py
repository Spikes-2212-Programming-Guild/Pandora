#!py
from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, FLOAT, Enum
from database import Base
import enums


class Results(Base):
    """ A table representing every game resaults of each group in each game

    """
    __tablename__ = 'results'

    # id fields
    index = Column(Integer, primary_key=True, autoincrement=True)
    number = Column("match number", Integer)
    team = Column("team number",Integer)

    # autonomous fields
    autonomous = Column("autonomous", Boolean)
    passed_line = Column("passed line", Boolean)
    center_gears = Column("center gears", Boolean)
    side_gears = Column("side gears", Boolean)
    highgoal_auto = Column("high goal auto", Boolean)
    lowgoal_auto = Column("low goal auto", Boolean)

    # countable fields
    highgoal = Column("high goal", Integer)
    lowgoal = Column("low goal", Integer)
    gears = Column("gears", Integer)
    hoppers = Column("hoppers", Integer)
    fouls = Column("fouls", Integer)
    climbing_quality = Column("climbing efficiency", Integer)

    # efficiency fields
    highgoal_efficiency = Column("high goal efficiency", Enum(*enums.quality))
    hoppers_efficiancy = Column("low goal efficiency", Enum(*enums.quality))
    gears_efficiancy = Column("gears efficiency", Enum(*enums.quality))
    defending_quality = Column("defending efficiency", Enum(*enums.quality))
    driver_quality = Column("driver efficiency", Enum(*enums.quality))
    pilot_quality = Column("pilot efficiency", Enum(*enums.quality))

    # boolean fields
    climbed = Column("climbing", Boolean)
    failed_to_climb = Column("failed climbing", Boolean)
    defensive_robot = Column("defence", Boolean)
    not_moving_problem = Column("not moving", Boolean)
    shutdown_problem = Column("shutdown", Boolean)
    unstable_problem = Column("unstable", Boolean)
    breaking_problem = Column("breaking", Boolean)
    pilot = Column("pilot", Boolean)

    # conclusion fields
    comment = Column("comments", String(1050))

    def __init__(self, number, team, highgoal, lowgoal, gears, hoppers, fouls, highgoal_efficiancy, hoppers_efficiency,
                 gears_efficiency, climbing_quality, defending_quality, driver_quality, climbed, defensive,
                 shutdown_problem, unstable_problem, breaking_problem, comment, passed_line, side_gears,
                 center_gears, highgoal_auto, lowgoal_auto, pilot, pilot_quality, autonomous, not_moving_problem, failed_to_climb):
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
        """
        self.team = team
        self.number = number
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
        self.driver_quality = driver_quality
        self.climbed = climbed
        self.defensive_robot = defensive
        self.shutdown_problem = shutdown_problem
        self.not_moving_problem = not_moving_problem
        self.unstable_problem = unstable_problem
        self.breaking_problem = breaking_problem
        self.comment = comment
        self.passed_line = passed_line
        self.center_gears = center_gears
        self.side_gears = side_gears
        self.lowgoal_auto = lowgoal_auto
        self.highgoal_auto = highgoal_auto
        self.pilot = pilot
        self.pilot_quality = pilot_quality
        self.autonomous = autonomous
        self.failed_to_climb = failed_to_climb
