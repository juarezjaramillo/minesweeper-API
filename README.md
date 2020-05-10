# Code challenge

## Technologies:
Backend - Python 3.7 + Django 3

Frontend - Javascript + jQuery

These items were covered
* **Design and implement  a documented RESTful API for the game (think of a mobile app for your API)**
  - Documented using a drf-yasg library
  - Generated a single html file (redoc)
* **Implement an API client library for the API designed above. Ideally, in a different language, of your preference, to the one used for the API**
  - Client generated using the output of drg-yasg library
  - Client was used in the frontend to call the API
* **When a cell with no adjacent mines is revealed, all adjacent squares will be revealed (and repeat)**
* **Ability to 'flag' a cell with a question mark or red flag**
  - Cells were marked with blue color for a flag, red for a mine
* **Detect when game is over**
  - Current detection is based on revealing a mine or revealing all cells (no timeouts)
* **Persistence**
  - SQLite was used to make it easier
* **Ability to start a new game and preserve/resume the old ones**
  - The frontend allows to start a new board and play another among the available ones
* **Ability to select the game parameters: number of rows, columns, and mines**
  - Frontend sends the parameters (currently hardcoded)

These items were NOT covered
* Time tracking
* Ability to support multiple users/accounts

## How to run
```
pip install -r requirements.txt 
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 8000
```


## API documentation
http://localhost:8000/static/redoc-static.html




# Original File

# minesweeper-API
API test

We ask that you complete the following challenge to evaluate your development skills. Please use the programming language and framework discussed during your interview to accomplish the following task.

PLEASE DO NOT FORK THE REPOSITORY. WE NEED A PUBLIC REPOSITORY FOR THE REVIEW. 

## The Game
Develop the classic game of [Minesweeper](https://en.wikipedia.org/wiki/Minesweeper_(video_game))

## Show your work

1.  Create a Public repository ( please dont make a pull request, clone the private repository and create a new plublic one on your profile)
2.  Commit each step of your process so we can follow your thought process.

## What to build
The following is a list of items (prioritized from most important to least important) we wish to see:
* Design and implement  a documented RESTful API for the game (think of a mobile app for your API)
* Implement an API client library for the API designed above. Ideally, in a different language, of your preference, to the one used for the API
* When a cell with no adjacent mines is revealed, all adjacent squares will be revealed (and repeat)
* Ability to 'flag' a cell with a question mark or red flag
* Detect when game is over
* Persistence
* Time tracking
* Ability to start a new game and preserve/resume the old ones
* Ability to select the game parameters: number of rows, columns, and mines
* Ability to support multiple users/accounts
 
## Deliverables we expect:
* URL where the game can be accessed and played (use any platform of your preference: heroku.com, aws.amazon.com, etc)
* Code in a public Github repo
* README file with the decisions taken and important notes

## Time Spent
You need to fully complete the challenge. We suggest not to spend more than 5 days total.  Please make commits as often as possible so we can see the time you spent and please do not make one commit.  We will evaluate the code and time spent.
 
What we want to see is how well you handle yourself given the time you spend on the problem, how you think, and how you prioritize when time is sufficient to solve everything.

Please email your solution as soon as you have completed the challenge or the time is up.
