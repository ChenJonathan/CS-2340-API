var app = require('express')();
var bodyParser = require('body-parser')

require('./api/db');
var User = require('./api/user');
var UserReport = require('./api/user_report');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', function(req, res) {
  console.log('Registering a user');
  User.findOne({name : req.body.name}, function(errFind, user) {
    if(user || errFind) {
      console.log('- User already exists');
      res.status(403);
    } else {
      var newUser = new User({
        name: req.body.name,
        pass: req.body.pass,
        auth: req.body.auth,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
      });
      newUser.save(function(errSave) {
        if(errSave) {
          console.log('- Error saving user');
          res.status(403);
          res.json({});
        } else {
          console.log('- User was added');
          res.status(201);
          res.json({});
        }
      });
    }
  });
});

app.post('/login', function(req, res) {
  console.log('Logging a user in');
  User.findOne({name : req.body.name}, function(errFind, user) {
    if(!errFind && user) {
      if(req.body.pass === user.pass) {
        console.log('- User authenticated');
        res.status(200);
      } else {
        console.log('- Incorrect password');
        res.status(403);
      }
    } else {
      console.log('- User does not exist');
      res.status(403);
    }
  });
});

app.get('/user/:name', function(req, res) {
  console.log('Finding a user');
  User.findOne({name: req.params.name}, function(err, user) {
    if(user) {
      console.log('- User found');
      res.status(200);
      res.json(user);
    } else {
      console.log('- User does not exist');
      res.status(403);
    }
  });
});

app.get('/user_report', function(req, res) {
  console.log('Finding all reports');
  Report.find({}, function(err, reports) {
    if(err) {
      console.log('- Error finding reports');
      res.status(403);
    } else {
      console.log('- Reports found');
      res.status(200);
      res.json(reports);
    }
  });
});

app.post('/user_report/new', function(req, res) {
  console.log('Submitting a new report');
  var newReport = new UserReport({
    location: req.body.location,
    description: req.body.description,
    timestamp: req.body.timestamp,
    user: req.body.user,
    type: req.body.type,
    condition: req.body.condition
  });
  newReport.save(function(err) {
    if(err) {
      console.log('- Error saving report');
      res.status(403);
    } else {
      console.log('- Report was added');
      res.status(201);
    }
  });
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});