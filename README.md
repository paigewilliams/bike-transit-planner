# **Bike and Transit Route Planner**

# Contributors
### Paige Williams  

[![Netlify Status](https://api.netlify.com/api/v1/badges/bc82a6bf-da09-44dd-8f5a-7dd0043cdbe7/deploy-status)](https://app.netlify.com/sites/hopeful-ritchie-ef1bcf/deploys)
## Description
A web application that helps people in Portland plan their multi-modal trips. The user is able to enter their start and end point, and how many miles they would like to bike. After entering their search, the user can see routes on a map that fit thier criteria. In future iterations I would like to add user authentication and have the user be able to save their search results. I would also like to add metrics on how many miles they biked and the carbon footprint of their route.

## Table of Contents
  1. [MVP](#specs-work)
  2. [Further Exploration](#specs-work1)
  3. [Plan](#plan)
  4. [Component Tree](#component)
  5. [Wireframes](#wireframe)
  6. [Setup on OSX](#setup)
  7. [Technologies Used](#Tech-used)
  8. [Configuration/dependencies](#config-dep)
  9. [MIT License](#mit-lic)


## Minimum Viable Prototype (MVP) <a name="specs-work"></a>

* The user can enter a starting point and an ending point
* The user can enter how many miles they would like to bike
* The user can see a list of possible routes to take to get from their starting point to the end point
* The routes will be displayed in a map

## Further Exploration <a name="specs-work1"></a>

* The user can create an account and save their routes
* Include real time stop information so the user can see when the bus is arriving at the stops on their route
* The user can rate their routes
* Possible analysis on the routes, such charts showing their miles biked or carbon emmissions saved from taking transit and biking

## Plan <a name="plan"></a>

View the plan [here.](https://github.com/paigewilliams/capstone-planning)

## Component Tree <a name="component"></a>

![alt-text](https://github.com/paigewilliams/bike-transit-planner/blob/component-tree/src/assets/capstone-tree.jpg)

## Wireframe <a name="wireframe"></a>

![alt-text](https://github.com/paigewilliams/bike-transit-planner/blob/component-tree/src/assets/wireframe.png)

## Technology Used <a name="Tech-used"></a>

* React
* Redux
* Styled Components
* Jest
* Deck.GL
* [Trimet Trip Planner API](https://developer.trimet.org/ws_docs/tripplanner_ws.shtml)
* [Mapbox](https://www.mapbox.com/)
* Icons from [Good Ware](https://www.flaticon.com/packs/transportation-46)
* Icons made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)

## Setup <a name="setup"></a>
* Install Node.js
* Clone this project with `git clone https://github.com/paigewilliams/bike-transit-planner`
* Navigate to the root directory of the project with `cd bike-transit-planner`
* Create a `.env` file in the root of the directory
* Generate a Mapbox access token
* Save your access token as `API_KEY` in the `.env` file
* Generate a Google Maps geocoder access token
* Save your access token as `GOOGLE_KEY` in the `.env` file
* Run `npm install` to install dependencies
* Run `npm run start` to build and serve the project
* View the project in any browser at `http://localhost:8080/`

## Support and contact details

Paige Williams: [paw145@humboldt.edu](mailto:paw145@humboldt.edu)

## License <a name="mit-lic"></a>

This software is licensed under the MIT license.

Copyright (c) 2018 Paige Williams
