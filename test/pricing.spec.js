var request = require("supertest"),
    app = require("../app");

describe('GET /', function(){
  it('expects HTTP response 200', function(done){
    request(app)
        .get('/')
        .expect(200, done);
  });
});