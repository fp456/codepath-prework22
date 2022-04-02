# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Fernanda Pisconte

Time spent: 10 hours spent in total

Link to project: https://glitch.com/edit/#!/dour-bevel-niece

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Pop up messages to warn the player of the attempts left.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![X]http://g.recordit.co/j0HxXqxyrr.gif
![X]http://g.recordit.co/FmIfrWIbH3.gif
![X]http://g.recordit.co/kYbrH5Aojz.gif


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Canva.com to design assets. the assets
https://www.geeksforgeeks.org/ to clarify some concepts.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I had issues building the timer. At the beginning, I didn’t have a clue of what to do. I thought of using a for loop for each second (1, 2, 3, …) but that didn’t work out very well since it was quite slow. I was not familiar with the methods suggested so I first did some research on them using the resources listed above, saw some examples, and then I made a basic function for a timer using them. This seemed to work okay so I then placed it on the top of the website. It was then that I realized that the timer should start after the sound played, not after clicking the “start” button. I didn't know how to do this but looking at the other functions created before, I realized that I could use the value of the variable “delay” that I already had initiated. Furthermore, I had to reset the timer after the user makes a mistake, makes a correct guess, or when the game starts again. I took a while to think this through and I first wrote some pseudo code on a paper. In the end, I built a function timeroff() to start the counter and also to stop it when needed.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

While working on the project, I learned a lot about web development. I never used Javascript this much. Before I used it to make “night modes” for websites, but that was it, my knowledge was kind of limited. Now, I know that we can use it to build basically anything. I wonder what else we can do with Javascript alone. Is there a way to ask the users for input and then store it and display it on the website? For example, asking users for their names so it can be visible at the top, along with their current score. That’d be great to have for this game.
After completing the project, I took some time to change some fonts, colors, and so on. While doing that, I couldn’t help but wonder if I was doing it correctly. I know that design is very important in web development. After all, we are working with products that will be used directly by the users. What are things we should consider when designing websites? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time, I would implement a store tracker at the top of the screen so the user can see their current score. The score will be based on the number of sequences correctly guessed. Bonus points will be given if it is guessed faster (1-2 seconds before the time is over). 
Likewise, I would change the theme of the game. So far I used some pet pics because that’s what I was first inspired to do. However, now I feel that it would be nice to add more relevance to the game so it can be entertaining and useful to some people. For example, using different sounds of birds to teach players the different species of them, or using recordings of people saying words in different languages.


## Interview Recording URL Link

https://drive.google.com/drive/folders/1Zz4hopGQxmJWxdUX_EtAR9lYeanH4-hh?usp=sharing


## License

    Copyright Fernanda Pisconte

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.