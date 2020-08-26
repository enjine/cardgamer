# Homework

The purpose of this assignment is to figure a few things: your architecture and coding style, interpretation of requirements, and your creativity. We expect that this homework assignment will become a major conversation for our in-person interview.

Please create a javascript class that represents a deck of cards. Please include any methods or properties on the class that you think might be applicable to using a deck of cards. Create the UI for one game that will use this deck of cards. This game can be any game you like, even a game that you created just for this assignment

Requirements:

- Create class that represents a deck of cards
- Create an HTML/CSS UI for a game that interacts with this deck of cards class
- Please make sure there is a valid package.json file in the root of the repo
- Upload this homework to a github repository or a github gist

Have fun!

==================================================

## BUGS

- face-up/face-down/flip implementation results in misrepresentation of a card's orientation and requires forced re-renders to work.

## TODO

- create components for the Dealer, the PlayArea, DiscardPile, etc.. and nest them as children of the Surface component, create styles for the Surface component that correspond to each game and can be applied dynamically as a className using the constructor name of the active Game
- better visual design and gameplay animations
- add background music and sound effects
- add more unit tests
- support any number of players and multiple decks
- make it responsive
- break up CSS files per component

==================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn`

installs all dependencies.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
