# A React Hover Menu

## Project Description

A hover menu built with React to handle view generation and pure CSS to handle the hover interactions.

Project was boostrapped with [create-react-app](https://github.com/facebookincubator/create-react-app).

Data is pulled from the local development server using a get request with the axios library.

## Improvements

Improvements I would make with more time on the project:

- Write the data handling resursively. Currently the app handles up to two layers of nesting with any number of items within each as as the challenge asked for, but to make the components more reusable for a larger scale application and to keep the code more maintainable, a recursive solution which navigates any data structure would be preferable.
- More component testing.
- Improve the display for the mobile menu - perhaps have it slide out from the side when user clicks on a hamburger.
- Potentially close menu when a user clicks an item. I looked into this, but it seems very difficult to implement without using JavaScript and the task asked for a CSS only solution.
- More browser testing and responsive testing - I tested in a number of different browsers and screen sizes, but would ideally do more testing.

## Install Instructions

To use on local machine, download or clone repository, navigate to the folder in the command line, run command ````npm install```` to install of the requird node modules, run command ````npm start```` to start the live development server, and then visit localhost:3000 in your browser of choice.