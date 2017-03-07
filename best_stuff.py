class best_stuff():
    """
    :param games: a list of games
    :return:
    """


def average_hopper(games):
    """
    :param games: a list of games
    :return:
    """
    none_hoppers = 0
    very_bad_hoppers = 0
    bad_hoppers = 0
    fine_hoppers = 0
    good_hoppers = 0
    very_good_hoppers = 0
    count = 0
    for match in games:
        if match.hoppers_efficiancy == "none":
            none_hoppers += 1
            count += 1
        elif match.hoppers_efficiancy == "very bad":
            very_bad_hoppers += 1
            count += 1
        elif match.hoppers_efficiancy == "bad":
            bad_hoppers += 1
            count += 1
        elif match.hoppers_efficiancy == "fine":
            fine_hoppers += 1
            count += 1
        elif match.hoppers_efficiancy == "good":
            good_hoppers += 1
            count += 1
        else:
            very_good_hoppers += 1
            count += 1
    if count != 0:
        return (
                   0 * none_hoppers + 1 * very_bad_hoppers + 2 * bad_hoppers + 3 * fine_hoppers + 4 * good_hoppers + 5 * very_good_hoppers) / count
    else:
        return 0


def average_driver_quality(games):
    """
    :param games: a list of games
    :return:
    """
    very_bad_driver = 0
    bad_driver = 0
    fine_driver = 0
    good_driver = 0
    very_good_driver = 0
    count = 0
    for match in games:
        if match.driver_quality == "very bad":
            very_bad_driver += 1
            count += 1
        elif match.driver_quality == "bad":
            bad_driver += 1
            count += 1
        elif match.driver_quality == "fine":
            fine_driver += 1
            count += 1
        elif match.driver_quality == "good":
            good_driver += 1
            count += 1
        else:
            very_good_driver += 1
            count += 1
    if count != 0:
        return (1 * very_bad_driver + 2 * bad_driver + 3 * fine_driver + 4 * good_driver + 5 * very_good_driver) / count
    else:
        return 0


def reliablty_problems(games):
    """
    :param games: a list of games
    :return: number of problems
    """
    count = 0
    if len(games) > 5:
        for i in range(4):
            if games[(len(games)-i)-1].breaking_problem:
                count += 1
            if games[(len(games)-i)-1].unstable_problem:
                count += 1
            if games[(len(games)-i)-1].not_moving_problem:
                count += 1
            if games[(len(games)-i)-1].shutdown_problem:
                count += 1
    else:
        for game in games:
            if game.breaking_problem:
                count += 1
            if game.unstable_problem:
                count += 1
            if game.shutdown_problem:
                count += 1
            if game.not_moving_problem:
                count += 1
    return count


def best_defence(games):
    """
    :param games: a list of games
    :return:
    """
    best_defence = "none"
    for game in games:
        if game.defending_quality != best_defence:
            if game.defending_quality != "none" and best_defence == "none":
                best_defence = game.defending_quality
            elif game.defending_quality == "very good":
                best_defence = "very good"
            elif game.defending_quality == "good" and best_defence != "very good":
                best_defence = "good"
            elif game.defending_quality == "fine" and best_defence != "very good" and best_defence != "good":
                best_defence = "fine"
            elif game.defending_quality == "bad" and best_defence == "none" or best_defence == "very bad":
                best_defence = "bad"
    return best_defence


def average_pilot(games):
    very_bad_pilot = 0
    bad_pilot = 0
    fine_pilot = 0
    good_pilot = 0
    very_good_pilot = 0
    count = 0
    for match in games:
        if match.pilot_quality == "very bad":
            very_bad_pilot += 1
            count += 1
        elif match.pilot_quality == "bad":
            bad_pilot += 1
            count += 1
        elif match.pilot_quality == "fine":
            fine_pilot += 1
            count += 1
        elif match.pilot_quality == "good":
            good_pilot += 1
            count += 1
        else:
            very_good_pilot += 1
            count += 1
    if count != 0:
        return (1 * very_bad_pilot + 2 * bad_pilot + 3 * fine_pilot + 4 * good_pilot + 5 * very_good_pilot) / count
    else:
        return 0
