# SportSpot

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

SportSpot is an application where sports enthusiasts in NYC can connect virtually to make plans to connect in real life. 

Athetes are always looking for other players to join them and coaches are always looking to find new players to coach. SportSpot was built to bridge that gap. 

The app allows users to browse posts by sport made by other users and create posts of their own. Users can find players to join in a pickup game, a coach to schedule a 1:1 session, and more!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)

## Installation

Run ```npm i``` to install the dependencies.  

Copy the contents of the .env.EXAMPLE file into a new .env file in the root of the directory with personal credentials in order to configure the connection.  

Connect to MySQL by running ```mysql -u root -p``` in the db. Enter your password when prompted.  
 
Then execute the schema by running ```source schema.sql```.  

Outside of the db, run ```node seeds/index.js``` to set up existing data followed by ```node server``` to run the server. 

## Usage

The application has been deployed using Heroku and can be found [here](https://the-sport-spot-team-1.herokuapp.com/).

To access the website, users will need to sign up and create a profile or login to an existing account. 

Users can navigate to any sport offered and view all of the relevant posts. Users can comment on posts they are interested in and connect with other users. 

![sportspot](./assets/images/screenshot.png)

## Technologies

SportSpot uses a number of technologies:

- Node.js Express.js to create the RESTful API
- Handlebars.js as the templating engine
- MySQL and Sequelize ORM for the database
- Passport.js as authentication middleware 
- bcrypt.js to hash passwords

## Credits

Collaborators:
- [ajilakj](https://github.com/Ajilakj)
- [alices9](https://github.com/alices9)
- [ereneedolan](https://github.com/ereneedolan)
- [lcfhines](https://github.com/lcfhines)
- [valeriaalarcon1](https://github.com/valeriaalarcon1)

## License

This application is covered by [MIT License](https://choosealicense.com/licenses/mit/).
