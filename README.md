 # Double Games

The 'Double Games' website is a gaming website that allows users to play a selection of games.
Users have access to playing 'Rock Paper Scissors' which is against the computer (randomized game).
Users also have access playing a two player game - 'tick tac toe'.
The purpose of the website is to provide a user the easy accessibliltiy to navigate to either game.
This project utilizes HTML, CSS and JavaScript.

![Responsice Mockup](https://github.com/MikesCodingCreations/Portfolio1/blob/main/media/bitcoin_info_full_responsive_mockup.png)


### Features 

- __Landing Page__

  - Users are taken to the 'Double Games' landing page when they first navigate to the link.
  - The website uses a simple, Black and 'Spring Green' colour palet. The reason for this choice is that they remind users of simple black and white games with a touch of color.
  - On this section of the site, users have access to information about the website, and the choice of two games by using the directed buttons.

![Landing Page](https://github.com/MikesCodingCreations/Portfolio1/blob/main/media/bitcoin_info_full_navbar.png)


- __Game 1 Section__

  - The game 1 page is a simple human vs computer 'rock paper scissors' game.
  - Users will be able to select their choice of 'rock', 'paper' or 'scissors' by selecting the relevant emoji.
  - Users are also presented with a 'restart' button which will clear the scoreboard and start over.
  - Each round result is calculated using JS functions and loops then displayed on the screen.
  - Points are also added up. Each time the user (human) beats the computer, they gain a point.
  - If the user looses a round, the will lose 1 point.
  - Users may utilize the 'rules' button at the top right of the page to find out how to play.
  - Users can click on the 'Home' button at the top left of the page to navigate back home.

![About Section](https://github.com/MikesCodingCreations/Portfolio1/blob/main/media/bitcoin_info_about_section.png)

- __Game 2 Section__

  - 


![About Section](https://github.com/MikesCodingCreations/Portfolio1/blob/main/media/bitcoin_info_about_section.png)

### Features Left to Implement

- A gallery of images where users can see winning combinations. 

- A 'partnership/user' section detailing entetites that have integrated Bitcoin
- A live API that displays the live price for Bitcoin

## Testing 

- I tested that this site works well on multiple browsers such as Google Chrome, Firefox, Safari and IE.
- I confirm that this website is responsive, lookgs good and functions well on all standard screen sizes using the Google Chrome devtools and the 'am i responsive' website.
- I declare that all sections including the navigation header, nav links, home, about, timeline, contact and footer sections are relatateable and simple to comprehend.
- I can verify that the form works well and relevant fields apply (e.g., email field only accepts email responses).

## Bugs
Solved bugs
- When deploying my project to GitHub pages, i noticed that the CSS file was not correctly linked via the file path as the styles did not apply. Previously the filepath that i had was:
    <link rel="stylesheet" href="assets/style.css">
However, after a few tests, i changed the link to the correct filepath:
    <link rel="stylesheet" href="./assets/style.css">

- When submitting the form, i discorved that the ID of certain fields were not linked and therfore did not match. I quickly changed these to ensure the form was fully connected

- A bug that took a while to solve was the website responsiveness. I had to play around with 'Flexbox Froggy' to fully understand CSS Flexbox layouts to ensure the site was fully responsive on all devices.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official.
- CSS
  - No errors were found when passing through the official. 
- JShnit
  - 

### Unfixed Bugs

N/A

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - XXX

## Credits 

Credits go to the below links for their information on how to build this site and for providing information that has been used such as icons.

# Content 

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

