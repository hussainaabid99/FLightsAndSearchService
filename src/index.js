const express = require('express');
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const { Airport, City } = require('./models/index');

const setupAndStartServer = async () => {

          //create the express object
          const app = express();

          app.use(bodyParser.json());
          app.use(bodyParser.urlencoded({ extended: true }));

          app.use('/api', ApiRoutes);

          app.listen(PORT, async () => {
                    console.log(`Server started at ${PORT}`);

                    const airports = await Airport.findAll();
                    console.log(airports);
          })
}

setupAndStartServer();  