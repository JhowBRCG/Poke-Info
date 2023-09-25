<h1 align = "center">PokeInfo</h1>

<img src='src\assets\github\home-day.png'>

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

The project's about an application that consumes an API named [PokeAPI ](https://pokeapi.co/). Which provides the data from all the pokemons that currently exist. The data from the API is used in the project to show the user information about the pokemons, like moves, abilities, types, images and names.

## Features

The application has the following features:

### Theme Switcher

The aplication has a theme switcher, with which the user can change the theme of the page to dark or light just by clicking on the button.

Home - _light theme_
<img src='src\assets\github\home-day.png'>
Home - _dark theme_
<img src='src\assets\github\home-night.png'>

### Pokemon List

On the home page there'll be a list loaded with ten pokemons; for each pokemon, there'll be a card that contains the name and type of the pokemon. And at the end of the page, there is a button called "Load more" which will add ten more pokemons to the list.

<img src='src\assets\github\pokemon-list.png'>

### Search Pokemon

The user will be able to search for the pokemon by typing the name or the ID of the pokemon.

<img src='src\assets\github\search.gif'>

### Pokemon Details

On each pokemon card, the user can click and be sent to another page showing more information about the chosen pokemon.

<img src='src\assets\github\details.png'>

## Built with

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

A javascript library used on the entire application to write the HTML and the logic.

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

Responsible for the application styling.

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

This library was used to create the navigation between the pages dynamically and without refreshing loadings.

## Run the application

To run the application on your machine, follow the next steps:

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

4. Now you can see the application in real time by putting the url http://localhost:5173/ in the browser of your choice.

## What I learned

When working on this project, I learned a lot of new things,mainly about **React** itself and how the components work, like
passing states between them by using the **ContextAPI**, which React provides natively. Beyond React, I also learned a lot about styling by using the **StyledComponents**, which helped me a lot to styling the entire application and switch themes. I can't forget about the **ReactRouter** which was extremely important for this project. Using it, I improved myself a lot in how to create routes dynamically for a better user experience.

## Author

Created by [@jhowbrcg](https://github.com/JhowBRCG) - fell free to contact me!

## License

This project is licensed under [MIT](https://opensource.org/licenses/MIT) license.
