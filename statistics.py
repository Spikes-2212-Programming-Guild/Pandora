def averages(games):
    """
    :param games: a list of games
    :return: averages dictonery
    """
    high_average=low_average=gears_average=hoppers_average=score=fouls=count=0
    for game in games:
        high_average += game.highgoal
        low_average += game.lowgoal
        gears_average += game.gears
        hoppers_average += game.hoppers
        score += game.score
        fouls += game.fouls
        count += 1
    if count != 0:
        statistics={}
        statistics["HighShooting"] = high_average / count
        statistics["LowShooting"] = low_average / count
        statistics["Gears"] = gears_average / count
        statistics["Hoppers"] = hoppers_average / count
        statistics["Score"] = score / count
        statistics["Fouls"] = fouls / count
        return statistics
    # an "empty" object that will not cause nulls
    return {"HighShooting":0,"LowShooting":0,"Gears":0,"Hoppers":0,"Score":0,"Fouls":0}