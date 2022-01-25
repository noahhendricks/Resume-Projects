# Noah Hendricks
# 1900219
# ZyLab 11.27

# defined function for the roster info
def roster_info():
    information = list(players_roster.keys())
    information.sort()
    print('ROSTER')
    for c in information:
        print('Jersey number: %d, Rating: %d' % (c, players_roster[c]))


if __name__ == "__main__":
    # start of main function
    players_roster = {}

    # jersey number formulas and input
    for x in range(5):
        jersey_number = int(input("Enter player %d's jersey number:\n" % (x + 1)))
        players_roster[jersey_number] = int(input("Enter player %d's rating:\n" % (x + 1)))
        print('')

    roster_info()

    while True:
        # menu for entire program
        menu = ('\nMENU\n'
                'a - Add player\n'
                'd - Remove player\n'
                'u - Update player rating\n'
                'r - Output players above a rating\n'
                'o - Output roster\n'
                'q - Quit\n')
        print(menu)

        choice = input('Choose an option:\n')

        # output roster if user selects "o"
        if choice == 'o':
            roster_info()

        # add a player to the roster if user selects "a"
        elif choice == 'a':
            jersey_number = int(input("Enter a new player's jersey number:\n"))
            player_rating = int(input("Enter the player's rating:\n"))
            players_roster[jersey_number] = player_rating

        # remove a player from the roster if user selects "d"
        elif choice == 'd':
            jersey_number = int(input("Enter a new player's jersey number:\n"))
            if jersey_number in list(players_roster.keys()):
                del players_roster[jersey_number]

        # update player rating to the roster if user selects "u"
        elif choice == 'u':
            jersey_number = int(input("Enter a jersey number:\n"))
            player_rating = int(input("Enter a new rating for player:\n"))
            players_roster[jersey_number] = player_rating

        # outputs the players above a certain rating in the roster if user selects "r"
        elif choice == 'r':
            player_rating = int(input('Enter a rating:\n'))
            index = list(players_roster.keys())
            index.sort()
            print('\nABOVE %d' % player_rating)

            for cue in index:
                if players_roster[cue] > player_rating:
                    print('Jersey number: %d, Rating: %d' % (cue, players_roster[cue]))

        # quit menu and end program if user selects "q"
        if choice == 'q':
            break
