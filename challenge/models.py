from django.db import models
from django.db.models import CASCADE

from minesweeperAPI import settings


class Board(models.Model):
    num_rows = models.IntegerField(default=settings.CHALLENGE_APP['DEFAULT_NUM_ROWS'],
                                   help_text='The number of rows in the board',
                                   )
    num_columns = models.IntegerField(default=settings.CHALLENGE_APP['DEFAULT_NUM_COLUMNS'],
                                      help_text='The number of columns in the board')
    num_mines = models.IntegerField(default=settings.CHALLENGE_APP['DEFAULT_NUM_MINES'],
                                    help_text='The number of mines in the board')
    created = models.DateTimeField(auto_now_add=True,
                                   help_text='The date the board was created')
    last_started = models.DateTimeField(auto_now_add=True,
                                        help_text='The date the board was last started or resumed')
    elapsed = models.IntegerField(default=0, help_text='The time the board has been active for playing')
    status_types = (
        (1, "Started"),
        (2, "Paused"),
        (3, "Finished")
    )
    status = models.IntegerField(choices=status_types, default=1,
                                 help_text='The status of the board. Started, Paused or Finished')
    result_types = (
        (1, "Win"),
        (2, "Lose"),
        (3, "Timeout")
    )
    result = models.IntegerField(choices=result_types, blank=True, null=True,
                                 help_text='The result of the board. Win, Lose, Timeout')


class Cell(models.Model):
    mine = models.BooleanField(default=False, blank=False, null=False,
                               help_text='Indicates if the cell contains a mine')
    revealed = models.BooleanField(default=False, blank=False, null=False,
                                   help_text='Indicates if the cell has been revealed')
    value = models.IntegerField(default=None, blank=True, null=True,
                                help_text='The number of adjacent cells that contain a mine')
    board = models.ForeignKey(Board, on_delete=CASCADE, related_name='cells',
                              help_text='The board this cell belongs to')
    row = models.IntegerField(default=0, blank=False, null=False,
                              help_text='The row for the cell inside the board')
    column = models.IntegerField(default=0, blank=False, null=False,
                                 help_text='The column for the cell inside the board')

    class Meta:
        ordering = ['id']  # to always retrieve them ordered
