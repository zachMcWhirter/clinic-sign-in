function helloWorld(req, res) {
  res.status(200).json({ hello: 'hello' });
}
  
module.exports = {
  helloWorld,
};