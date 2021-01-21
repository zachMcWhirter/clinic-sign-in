function helloWorld(req, res) {
  res.status(200).json({ hello: 'hello from inside healthcheck' });
}
  
module.exports = {
  helloWorld,
};