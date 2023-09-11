const JokesController = require("../controllers/jokes.contoller");

module.exports = (app) => {
  // Get Requests 
  app.get("/api/test", JokesController.apiTest);

  app.get("/api/jokes", JokesController.allJokes);
  app.get("/api/jokes/:id", JokesController.oneJokes);


  // Post Requests
  app.post("/api/jokes", JokesController.createJokes);
  // Put Requests

  // Patch Requests
  app.patch("/api/jokes/:id" , JokesController.updateJokes);
  //Delete Requests
  app.delete("/api/jokes/:id", JokesController.deleteJokes);
};

// import routes to our server!

// module.export = router;