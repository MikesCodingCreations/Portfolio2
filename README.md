<!-- 
Rock Emoji - https://emojipedia.org/rock/
Paper Emoji - https://emojipedia.org/roll-of-paper/
Scissors Emoji - https://emojipedia.org/scissors/
Restart Emoji - https://emojipedia.org/counterclockwise-arrows-button/
Person Emoji - https://emojipedia.org/person/
Computer Eomji - https://emojipedia.org/laptop/
X Emoji - https://emojipedia.org/cross-mark/
O Emoji - https://emojipedia.org/hollow-red-circle/
Favicon - https://icons8.com/icon/cGyNxHk0jrJM/controller

 -->


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

![Nav Bar](https://github.com/MikesCodingCreations/Portfolio1/blob/main/media/bitcoin_info_full_navbar.png)


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

  - The about section will allow the user to quickly and easily understand the main concent of Bitcoin.
  - This user will also be able to use video controls (pause, play, full screen, mute etc.) to preview a short and simply video explansation from an extrernal site of what Bitcoin is. 
  - Further to this, users will be able to navigate to the external link so they may conduct further research on what Bitcoin is via the Bitcoin.org website.

![About Section](https://github.com/MikesCodingCreations/Portfolio1/blob/main/media/bitcoin_info_about_section.png)

### Features Left to Implement

- A gallery of more Bitcoin images
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
  - No errors were returned when passing through the official 
  [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmikescodingcreations.github.io%2FPortfolio1%2F)
  [W3C validator image](https://github.com/MikesCodingCreations/Portfolio1/blob/main/media/bitcoin_info_w3c_validator.png)
- CSS
  - No errors were found when passing through the official 
  [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmikescodingcreations.github.io%2FPortfolio1%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  [Jigsaw validator image](https://github.com/MikesCodingCreations/Portfolio1/blob/main/media/bitcoin_info_jigsaw_validator.png)

### Unfixed Bugs

N/A

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://mikescodingcreations.github.io/Portfolio1/ 


## Credits 

Credits go to the below links for their information on how to build this site and for providing information that has been used such as image, text and video.

# Content 

- Information on the Hero section was taken from the Bitcoin website [Bitcoin] (https://bitcoin.org/en/)
- The text for the about section was taken from Wikipedia [Wikipedia] (https://en.wikipedia.org/wiki/Bitcoin)
- Info for the timeline section (bitcoin price history) was taken from two sites 
    [Statista] (https://www.statista.com/statistics/326707/bitcoin-price-index/) 
    and [Investopedia] (https://www.investopedia.com/articles/forex/121815/bitcoins-price-history.asp)
- Instructions on how to create this site was taken from the CI project 1 course [Link to CI](https://codeinstitute.net/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
- Information on the Bitcoin color code was taken from [Design_Pieces] ( https://www.designpieces.com/palette/bitcoin-colour-palette-hex-and-rgb/#:~:text=The%20Bitcoin%20logo%20comprises%20three,the%20logotype%20text)%20and%20White. )


### Media

- The hero image of Bitcoin was taken from [pngitem] (https://www.pngitem.com/middle/JTbmmo_bitcoin-png-transparent-background-bitcoin-png-png-download/)
- The video in the about section was taken from [The_Guardian] (https://www.theguardian.com/news/video/2014/apr/30/bitcoin-made-simple-video-animation)

---

