# Noah Hendricks
# 1900219
# ZyLab 10.15

# defined class for specific sports team
class Team:
    # defined function for __init__
    def __init__(self):
        self.team_name = 'none'
        self.team_wins = 0
        self.team_losses = 0

    # defined function for win percentage
    def get_win_percentage(self):
        win_percentage = (self.team_wins / (self.team_wins + self.team_losses))
        return win_percentage

    # defined function for sports info
    def sports_info(self, input_name, input_wins, input_losses):
        self.team_name = input_name
        self.team_wins = input_wins
        self.team_losses = input_losses


if __name__ == "__main__":
    # start of main function
    sports_team = Team()

    name = input()
    wins = int(input())
    losses = int(input())

    sports_team.sports_info(name, wins, losses)

    # if and else statements to recall the teams' record
    if sports_team.get_win_percentage() >= 0.5:
        print('Congratulations, Team', sports_team.team_name, 'has a winning average!')
    else:
        print('Team', sports_team.team_name, 'has a losing average.')
