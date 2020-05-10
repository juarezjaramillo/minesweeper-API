from rest_framework import serializers

from challenge.models import Cell, Board
from minesweeperAPI import settings


class CellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cell
        fields = ['row', 'column', 'mine', 'value', 'revealed', 'flagged']
        read_only_fields = ['row', 'column', 'mine', 'value', 'revealed']


class BoardSerializer(serializers.ModelSerializer):
    cells = CellSerializer(many=True, read_only=True)

    class Meta:
        model = Board
        fields = ['id', 'num_rows', 'num_columns', 'num_mines', 'status', 'result',
                  'created', 'last_started', 'cells', 'elapsed']


class NewBoardSerializer(serializers.Serializer):
    num_rows = serializers.IntegerField(min_value=0, default=settings.CHALLENGE_APP['DEFAULT_NUM_ROWS'], required=False,
                                        label='The number of rows in the new board')
    num_columns = serializers.IntegerField(min_value=0, default=settings.CHALLENGE_APP['DEFAULT_NUM_COLUMNS'],
                                           required=False, label='The number of columns in the new board')
    num_mines = serializers.IntegerField(min_value=0, default=settings.CHALLENGE_APP['DEFAULT_NUM_MINES'],
                                         required=False, label='The number of mines in the new board')

    class Meta:
        ref_name = 'NewBoard'


class CellRefSerializer(serializers.Serializer):
    row = serializers.IntegerField(min_value=0, required=True, label='The row of the cell')
    column = serializers.IntegerField(min_value=0, required=True, label='The column of the cell')

    class Meta:
        ref_name = 'CellRef'
