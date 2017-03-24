from best_stuff import average_driver_quality


def averages(games):
    """
    :param games: a list of games
    :return: averages dictonery
    """
    high_average = low_average = gears_average = hoppers_average = fouls = count = climb_time = climbCount = climb_times = 0.0
    for game in games:
        if game.climbed:
            climb_times += 1
            climb_time += game.climbing_quality
            climbCount += 1
        high_average += game.highgoal
        low_average += game.lowgoal
        gears_average += game.gears
        hoppers_average += game.hoppers
        fouls += game.fouls
        count += 1.0
    statistics = {}
    if climbCount >= 1.0:
        statistics["ClimbTime"] = float(climb_time / climbCount)
    if count >= 1.0:
        statistics["Climb"] = format(float(climb_times / count), '.3f')
        statistics["HighShooting"] = format(float(high_average / count), '.3f')
        statistics["LowShooting"] = format(float(low_average / count), '.3f')
        statistics["Gears"] = format(float(gears_average / count), '.3f')
        statistics["Hoppers"] = format(float(hoppers_average / count), '.3f')
        statistics["Fouls"] = format(float(fouls / count), '.3f')
        statistics["TeamNumber"] = games[0].team
        statistics["DriverAverage"] = average_driver_quality(games)
        return statistics
    # an "empty" object that will not cause nulls
    return {"Climb": 0.0, "HighShooting": 0.0, "LowShooting": 0.0, "Gears": 0.0, "Hoppers": 0.0, "Fouls": 0.0,
            "ClimbTime": 0.0, "TeamNumber": 0.0, "DriverAverage": 0.0}


def best_game(games):
    best = {"high": 0, "low": 0, "gears": 0}
    for game in games:
        best["high"] = game.highgoal if game.highgoal > best["high"] else best["high"]
        best["low"] = game.lowgoal if game.lowgoal > best["low"] else best["low"]
        best["gears"] = game.gears if game.gears > best["gears"] else best["gears"]
    return best


def worst_game(games):
    worst = {"high": float('inf'), "low": float('inf'), "gears": float('inf')}
    for game in games:
        worst["high"] = game.highgoal if game.highgoal < worst["high"] else worst["high"]
        worst["low"] = game.lowgoal if game.lowgoal < worst["low"] else worst["low"]
        worst["gears"] = game.gears if game.gears < worst["gears"] else worst["gears"]
    return worst
