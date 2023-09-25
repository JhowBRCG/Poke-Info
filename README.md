# PokeInfo

## Table of Contents

- [About the project](#about-the-project)
- [Features](#features)
  - [Theme Switcher](#theme-switcher)
  - [Pokemon list](#pokemon-list)
  - [Search Pokemon](#search-pokemon)
  - [Pokemon Details](#pokemon-details)
- [Built with](#built-with)
- [Run the application](#run-the-application)
- [What I learned](#what-i-learned)
- [Author](#author)

## About the project

The project it's about an application that consumes an API named [PokeAPI ](https://pokeapi.co/). Which provides the data from all the pokemons that currently exist. With the data from the API, they are used in the project to show to the user information about the pokemons, like moves, abilities, types, images and names.

## Features

The aplication have the following features:

### Theme Switcher

The aplication have a theme switcher which the user can change the theme of the page to dark or light just by clicking on the button.

Home light
<img src='src\assets\github\home-day.png'>
Home dark
<img src='src\assets\github\home-night.png'>

### Pokemon List

On the home page there'll be a list loading with ten pokemons, each pokemon it'll be a card witch contain the name, and the types of the pokemon. And at the end of the page there is a button "Load more" which will add ten more pokemons to the list.

<img src='src\assets\github\pokemon-list.png'>

### Search Pokemon

The user will be able to search the pokemon by typing the name or the id of the pokemon.

<img src='src\assets\github\search.gif'>

### Pokemon Details

On each pokemon card the user can click and be sended to another page showing more information about the choose pokemon.

<img src='src\assets\github\details.png'>

## Built with

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

A javascript library used on the entire application to write the HTML and the logic.

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

Responsible for the application styling.

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

This library was used to create the navigation between the pages dinamicaly and without refreshing loadings.

## Run the application

To run the application into you machine, follow the next steps:

1. Clone the repositorie

   ```sh
   git clone https://github.com/JhowBRCG/Poke-info.git
   ```

2. Install the dependencies

   ```sh
   npm install
   ```

3. Initialize the server

   ```sh
   npm run dev
   ```

4. Now you can see the application in real time by putting the url http://localhost:5173/ on the browser of your choice.

## What I learned

When working on this project, I learned a lot of new things,mainly about the React it self and how the components work, like
passing states between them by using the ContextApi which React provides natively. Beyond the React I also learned a lot about the styling, by using the StyledComponents which helped me a lot to styling the entire application and switch the themes. I can't forget about the ReactRouter which was extremely important for this project. Using it, I improved my self a lot in how to create routes dynamically for a better user experience.

## Author

Created by [@jhowbrcg](https://github.com/JhowBRCG) - fell free to contact me!

## License

This project is licensed under [MIT](https://opensource.org/licenses/MIT) license.
