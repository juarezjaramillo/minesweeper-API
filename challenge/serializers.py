from rest_framework import serializers

from challenge.models import Cell, Board


class CellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cell
        fields = ['row', 'column', 'mine', 'value', 'revealed']
        read_only_fields = ['row', 'column', 'mine', 'value', 'revealed']


class BoardSerializer(serializers.ModelSerializer):
    cells = CellSerializer(many=True, read_only=True)

    class Meta:
        model = Board
        fields = ['id', 'num_rows', 'num_columns', 'num_mines', 'status', 'result',
                  'created', 'last_started', 'cells', 'elapsed']
