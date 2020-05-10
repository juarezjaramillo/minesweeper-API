from django.http import HttpResponse

# Create your views here.
from django.template import loader
from drf_yasg.utils import swagger_auto_schema
from rest_framework.viewsets import GenericViewSet

from challenge.models import Board
from challenge.serializers import BoardSerializer


def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render({}, request))


class BoardApi(GenericViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

    def list(self, request, format=None):
        """
            List all boards
        """
        pass

    def retrieve(self, request, pk, format=None):
        """
            Get details of a board
        """
        pass

    def create(self, request, format=None):
        """
            Create and start a new game
        """
        pass

    def destroy(self, request, *args, **kwargs):
        """
            Delete a board
        """
        pass

    def reveal(self, request, *args, **kwargs):
        """
            Reveals a cell
        """

    def flag(self, request, *args, **kwargs):
        pass

    def pause(self, request, *args, **kwargs):
        pass

    def resume(self, request, *args, **kwargs):
        pass

