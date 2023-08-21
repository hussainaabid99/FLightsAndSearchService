# Welcome to Flights Service

## Project Setup
          - clone the project on your local
          - Execute `npm install` on the same path as of your root directory of the downloaded project
          - Create a `.env` file in the root directory and add the following environment variable
                    - `PORT = 3000`
          - Inside the `src/config` folder create a new fle `config.json` and then add the following piece of json

          ```
          {
  "development": {
    "username": "<Your_DB_Name",
    "password": "<Your_DB_Password>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
          ```
          -Once you added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
          and then execute
          `npx sequelize db:migrate`
        
## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights 
  - A city has many airports but one airport belongs to a city
  - One  airport can have many flights, but a flight belongs to one airport.