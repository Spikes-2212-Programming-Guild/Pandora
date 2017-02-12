def best_stuff(games):
    """
    :param games: a list of games
    :return:
    """
    average_hopper = "none"


def average_hopper(games):
    """
    :param games: a list of games
    :return:
    """
    none_hoppers=0
    very_bad_hoppers=0
    bad_hoppers=0
    fine_hoppers=0
    good_hoppers=0
    very_good_hoppers=0
    count=0
    for match in games:
        if match.hoppers_efficiancy == "none":
            none_hoppers+=1
            count+=1
        elif match.hoppers_efficiancy == "very bad":
            very_bad_hoppers+=1
            count += 1
        elif match.hoppers_efficiancy == "bad":
            bad_hoppers+=1
            count += 1
        elif match.hoppers_efficiancy == "fine":
            fine_hoppers+=1
            count += 1
        elif match.hoppers_efficiancy == "good":
            good_hoppers+=1
            count += 1
        else:
            very_good_hoppers+=1
            count += 1
    if count!=0:
        return (0*none_hoppers+1*very_bad_hoppers+2*bad_hoppers+3*fine_hoppers+4*good_hoppers+5*very_good_hoppers)/count
    else:
        return 0


def best_defence(games):
    """
    :param games: a list of games
    :return:
    """
    best_defence="none"
    for game in games:
        if game.defending_quality!=best_defence:
            if game.defending_quality!="none" and best_defence == "none":
                best_defence = game.defending_quality
            elif game.defending_quality=="very good":
                best_defence = "very good"
            elif game.defending_quality=="good" and best_defence!="very good":
                best_defence = "good"
            elif game.defending_quality=="fine" and best_defence!="very good" and best_defence!="good":
                best_defence = "fine"
            elif game.defending_quality=="bad" and best_defence == "none" or best_defence == "very bad":
                best_defence = "bad"
    return best_defence