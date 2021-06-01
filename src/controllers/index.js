function index(req, res) {
  res.render('index', {
    title: 'CRUD completo - Início',
  });
}
module.exports = {
  index,
};
