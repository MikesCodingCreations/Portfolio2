 # Double Games
The 'Double Games' website is a gaming website that allows users to play a selection of games.
Users have access to playing 'Rock Paper Scissors' which is against the computer (randomized game).
Users also have access playing a two player game - 'tick tac toe'.
The purpose of the website is to provide a user the easy accessibliltiy to navigate to either game.
This project utilizes HTML, CSS and JavaScript.

![Responsice Mockup](https://github.com/MikesCodingCreations/Portfolio2/blob/main/assets/media/Responsive%20Mockup.png)


### Features 

- __Landing Page__
  - Users are taken to the 'Double Games' landing page when they first navigate to the link.
  - The website uses a simple, Black and 'Spring Green' colour palet. The reason for this choice is that they remind users of simple black and white games with a touch of color.
  - On this section of the site, users have access to information about the website, and the choice of two games by using the directed buttons.

![Landing Page](https://github.com/MikesCodingCreations/Portfolio2/blob/main/assets/media/landingpageonly.png)


- __Game 1 Section__
  - The game 1 page is a simple human vs computer 'rock paper scissors' game.
  - Users will be able to select their choice of 'rock', 'paper' or 'scissors' by selecting the relevant emoji.
  - Users are also presented with a 'restart' button which will clear the scoreboard and start over.
  - Each round result is calculated using JS functions and loops then displayed on the screen.
  - Points are also added up. Each time the user (human) beats the computer, they gain a point.
  - If the user looses a round, the will lose 1 point.
  - Users may utilize the 'rules' button at the top right of the page to find out how to play.
  - Users can click on the 'Home' button at the top left of the page to navigate back home.

![Game 1 Section](https://github.com/MikesCodingCreations/Portfolio2/blob/main/assets/media/game1only.png)

- __Game 2 Section__
  - The game 2 page is a simple human vs human (2 player) 'tic tac toe' game.
  - This is also known as '3 in a row' or 'naughts and crosses'
  - Two users will be able to take turns selecting a space on the 3 x 3 grid.
  - Each user will be either 'X' or 'O'.
  - To win, a user must get 3 of their symbols in a row, column or diagonally.
  - Users are also presented with a 'restart' button presented as a square emoji button that will clear the scoreboard and start over.
  - Each round result is calculated using JS functions and loops then displayed on the screen.
  - Wins are calculated using JS by getting three symbols in a row.
  - If nobody wins, the game is declared a tie and a new game can commence.
  - Users may utilize the 'rules' button at the top right of the page to find out how to play.
  - Users can click on the 'Home' button at the top left of the page to navigate back home.

![Game 2 Section](https://github.com/MikesCodingCreations/Portfolio2/blob/main/assets/media/game2only.png)

- __Game 1 & 2 Rules Section__
  - Users can access the rules section from the game 1 & 2 page using the rules button.
  - This allows users to view rules on how to play the game.
  - Users can remove the rules popup by hovering over the 'x' button at the top right of the popup.

![Game 1 Rules Section](https://github.com/MikesCodingCreations/Portfolio2/blob/main/assets/media/game1rules.png)
![Game 2 Rules Section](https://github.com/MikesCodingCreations/Portfolio2/blob/main/assets/media/game2rules.png)

### Features Left to Implement
- A gallery of images where users can see winning combinations. 
- A footer with more info / links to social sites (this was not implemented as the idea of the website is a simple old style gaming site).
- Implementation of further games i.e memory game or quizes can improve the website to provide more keeping users on the site for longer.
- Would be great to include a video of how each game as well as the rules to inform users further.
- Possibly create a 'light' version of the website where the colours are switches are it is white instead of black.

## Testing 

* Landing Page Testing
- Expetected: 
  - Site should load up with correct styles (fonts, colours etc). 
  - Site should provide information on the purpose.
  - Allow users to navigate to two seperate links/pages.
- Tested by:
  - Tested the landing page by navigating to the main link. 
  - Site works on multiple browsers such as Google Chrome, Firefox, Safari and IE.
  - Testing the links by clicking on them.
  - Tested the site als on different devices. Same outcome.
- Works? Y
- Any known issues? N

* Game 1 testing
- Expected: 
  Site should 
    - Load up with correct styles.
    - Allow users to navigate back home using the home button.
    - Allow users to review the game rules using the rules button.
    - Allow users to play a game of rock paper scissors against the computer.
    - Automatically generate a response when user selects the rock, paper or scissors emoji.
    - Present computer results.
    - Declare round results i.e. user won, lost or tied.
    - Keep score of points.
    - Calculate points based on wins, loses or ties.
    - Allow users to reset the score.
  - Tested by:
    - Navigating to the game from the home screen.
    - Clicking on each emoji, rock, paper and scissors.
    - Identifying score is being updated.
    - Identifying that correct results is displayed after a symbol is selected.
    - Clicking on the restart button to confirm the results are cleared and a new game starts.
- Works? Y
- Any known issues? N
  
* Game 2 testing
- Expected: 
  Site should 
    - Load up with correct styles.
    - Allow users to navigate back home using the home button.
    - Allow users to review the game rules using the rules button.
    - Allow users to play a two player tic tac toe game.
    - Automatically generate a response when each users selects a section of the grid.
    - Present who's turn it is.
    - Present results i.e. X or O wins or Tie.
    - Allow users to reset the score.
  - Tested by:
    - Navigating to the game from the home screen.
    - Clicking on each individual section of the grid.
    - Identifying the turn is being updated.
    - Identifying that correct results is displayed after each user round
    - Clicking on the restart button to confirm the results are cleared and a new game starts.
- Works? Y
- Any known issues? N

## Bugs
Identified Bugs
- Broken CSS/JS links.
  - I noticed that the links to the CSS or JS kept breaking as they were not directed correctly.
  - Solved by researching back on Code Institute site to find the correct folder paths.
Solved: Y

- The computer selection for Game 1 was not updating on the HTML interface.
  - i noticed that each time the user selected rock, paper or scissors, the results for win, loss or tie would display but not the computer results.
  - Solved by updating the JS code where the variable was not named correctly.
Solved: Y

### Validator Testing 

- HTML
  - No errors were returned when passing through W3C Validator.
- CSS
  - No errors were found when passing through Jigsaw Validator. 
- Jshint
  - No major errors found when passing through Jshint Validator.

### Unfixed Bugs
N/A - All known bugs were fixed.

## Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://mikescodingcreations.github.io/Portfolio2/

## Credits 

Credits go to the below links for their information on how to build this site and for providing information that has been used such as icons.

### Media

Rock Emoji - https://emojipedia.org/rock/
Paper Emoji - https://emojipedia.org/roll-of-paper/
Scissors Emoji - https://emojipedia.org/scissors/
Restart Emoji - https://emojipedia.org/counterclockwise-arrows-button/
Person Emoji - https://emojipedia.org/person/
Computer Eomji - https://emojipedia.org/laptop/
X Emoji - https://emojipedia.org/cross-mark/
O Emoji - https://emojipedia.org/hollow-red-circle/
Favicon - https://icons8.com/icon/cGyNxHk0jrJM/controller

