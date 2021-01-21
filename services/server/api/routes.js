function addRoutes(app) {
  app.use('/v1/healthcheck', require('./healthcheck'));
}
  
module.exports = addRoutes;