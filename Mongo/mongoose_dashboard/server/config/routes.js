var cats= require('../controllers/cats.js')
module.exports = function(app){
  app.get('/', function(req, res){
    cats.findall(req, res)
    });
  app.get('/cat/new', function(req, res){
      res.render('new');
  });
  app.get('/cat/:id', function(req, res){
    cats.findid(req,res);
    });
  app.get('/cat/:id/edit', function(req, res){
    cats.findedit(req,res);
    });
  app.post('/cat', function(req, res){
    //Create a new cat!
    cats.create(req,res);
    });
  app.post('/cat/:id', function(req, res){
    cats.update(req,res);
    });
  app.post('/cat/:id/destroy', function(req, res){
    cats.remove(req,res);
    });
}
