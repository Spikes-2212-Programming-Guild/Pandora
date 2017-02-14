def averages(games):
    """
    :param games: a list of games
    :return: averages dictonery
    """
    high_average=low_average=gears_average=hoppers_average=fouls=count=0
    for game in games:
        high_average += game.highgoal
        low_average += game.lowgoal
        gears_average += game.gears
        hoppers_average += game.hoppers
        fouls += game.fouls
        count += 1
    if count != 0:
        statistics={}
        statistics["HighShooting"] = high_average / count
        statistics["LowShooting"] = low_average / count
        statistics["Gears"] = gears_average / count
        statistics["Hoppers"] = hoppers_average / count
        statistics["Fouls"] = fouls / count
        return statistics
    # an "empty" object that will not cause nulls
    return {"HighShooting":0,"LowShooting":0,"Gears":0,"Hoppers":0,"Fouls":0}



def best_game(games):
    best={"high":0,"low":0,"gears":0}
    for game in games:
        best["high"]=game.highgoal if game.highgoal>best["high"] else best["high"]
        best["low"]=game.lowgoal if game.lowgoal>best["low"] else best["low"]
        best["gears"]=game.gears if game.gears>best["gears"] else best["gears"]
    return best

def worst_game(games):
    worst={"high":float('inf'),"low":float('inf'),"gears":float('inf')}
    for game in games:
        worst["high"]=game.highgoal if game.highgoal<worst["high"] else worst["high"]
        worst["low"]=game.lowgoal if game.lowgoal<worst["low"] else worst["low"]
        worst["gears"]=game.gears if game.gears<worst["gears"] else worst["gears"]
    return worst