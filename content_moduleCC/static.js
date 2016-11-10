var http = require('http');
var fs = require('fs');

module.exports = function (request, response){
  if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function(errors, contents){
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.write(contents);
          response.end();
        });
      }
  else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.write(contents);
          response.end();
        });
      }
  else if(request.url === '/cars/new') {
        fs.readFile('views/new.html', 'utf8', function (errors, contents){
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.write(contents);
          response.end();
        });
      }
  else if(request.url === '/stylesheets/my_style_sheet.css'){
      fs.readFile('./stylesheets/my_style_sheet.css', 'utf8', function(errors, contents){
       response.writeHead(200, {'Content-type': 'text/css'});
       response.write(contents);
       response.end();
      })
    }
  else if(request.url == '/images/m3.jpg'){
    fs.readFile('./images/m3.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url == '/images/m5.jpg'){
    fs.readFile('./images/m5.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url == '/images/cat.jpg'){
    fs.readFile('./images/cat.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url == '/images/cateye.jpg'){
    fs.readFile('./images/cateye.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  }
  else{
    response.writeHead(404);
    response.end('File not found!!!');
  }
}
