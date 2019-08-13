const express = require('express'),
         port = 8000,
      DB_NAME = "movie_db_cool",
           bp = require('body-parser'),
          app = express();

// this is different and new!
app.use(bp.json());
// don't ignore the line above, it's important I swear!
app.use(express.static(__dirname + "/client/dist/client"));

require('./server/utils/mongoose')(DB_NAME);
require('./server/utils/routes')(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});