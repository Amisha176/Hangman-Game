Hangman Game
This is a full stack Hangman game built using React for frontend and Node.js for backend. The game randomly selects a word from a dictionary stored in a SQLite database, and the user has to guess the word using the 26 English alphabets within 6 lives.

Installation
To run the game, you will need to have Node.js and SQLite installed on your computer.

1. Clone this repository to your local machine using git clone.
2. Navigate to the project directory and run npm install to install the necessary dependencies.
3. Run npm run db:init to create and populate the SQLite database with the dictionary of words.
4. Run npm start to start the server and launch the game.
Usage
Once you have started the server and launched the game in your browser, you can start playing Hangman by following these steps:

Click on a letter on the virtual keyboard to guess that letter.
If the letter is correct, it will be revealed in the word. If it is incorrect, you will lose one life.
Keep guessing letters until you either guess the word correctly or run out of lives.
If you guess the word correctly, you win the game! If you run out of lives, you lose the game.

Acknowledgements
We would like to thank the following resources for their help in building this project:

React documentation
Node.js documentation
SQLite documentation
The Odin Project Hangman Tutorial


