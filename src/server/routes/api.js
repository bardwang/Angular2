/**
 * Created by Bard on 8/11/2017.
 */
const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var dbAccount = mongojs('mongodb://localhost:27017/mongo', ['accounts']);
var dbBook = mongojs('mongodb://localhost:27017/mongo', ['books']);
var dbContact = mongojs('mongodb://localhost:27017/mongo', ['contact']);

// get all accounts
router.get('/accounts', function(req, res, next){
  dbAccount.accounts.find(function(err, tasks){
    if(err){
      res.send(err);
    }
    res.json(tasks);
  })
});

// get single account
router.get('/account/:id', function(req, res, next){
  dbAccount.accounts.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  })
});

// get single account based on email and password
router.get('/accountep/:email&:password', function(req, res, next){
  dbAccount.accounts.findOne({email: req.params.email, password: req.params.password}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  })
});

// get single user account based on email and password
router.get('/accountuep/:email&:password', function(req, res, next){
  dbAccount.accounts.findOne({email: req.params.email, password: req.params.password, role: 'user'}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  })
});

// get single owner account based on email and password
router.get('/accountoep/:email&:password', function(req, res, next){
  dbAccount.accounts.findOne({email: req.params.email, password: req.params.password, role: 'owner'}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  })
});

// get single account based on email
router.get('/accounte/:email', function(req, res, next){
  dbAccount.accounts.findOne({email: req.params.email}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  })
});

// save account
router.post('/account', function(req, res, next){

  var task = req.body;
  if(!task.username || !task.password || !task.email ){
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  }else{
    dbAccount.accounts.save(task, function(err, task){
      if(err){
        res.send(err);
      }
      res.json(task);
    });
  }
});

// delete account
router.delete('/account/:id', function(req, res, next){
  dbAccount.accounts.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  })
});

// get all the bookings
router.get('/books', function(req, res, next){
  dbBook.books.find(function(err, tasks){
    if(err){
      res.send(err);
    }
    res.json(tasks);
  })
});

// get all the bookings based on name, phone, status, code
router.get('/booksf/:data', function(req, res, next){

  var task = req.params.data.split('|');
  var upTask;

  if(task[0] || task[1] || task[2] || task[3]) {
    upTask = {};
  }

  if(task[0]){
    upTask.name = task[0];
  }

  if(task[1]){
    upTask.phone = task[1];
  }

  if(task[2]){
    upTask.status = task[2];
  }

  if(task[3]){
    upTask.code = task[3];
  }

  dbBook.books.find(
    upTask, function(err, task){
      if(err){
        res.send(err);
      }
      res.json(task);
    })
});

// get all the bookings based on pages
router.get('/books/:num', function(req, res, next){
  dbBook.books.find(function(err, tasks){
    if(err){
      res.send(err);
    }
    res.json(tasks);
  })
});

// get single booking based on id
router.get('/booki/:id', function(req, res, next){
  dbBook.books.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  })
});

// get single booking based on date, time, phone
router.get('/book/:date&:time&:phone', function(req, res, next){
  dbBook.books.findOne(
    {date: req.params.date,
      time: req.params.time,
      phone: req.params.phone
  }, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  })
});

// post booking
router.post('/book', function(req, res, next){

  var task = req.body;
  if(!task.date || !task.time || !task.partysize || !task.name || !task.phone || !task.status){
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  }else{
    dbBook.books.save(task, function(err, task){
      if(err){
        res.send(err);
      }
      res.json(task);
    });
  }
});

// delete booking
router.delete('/book/:id', function(req, res, next){
  dbBook.books.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  })
});

// update booking
router.put('/bookupdate/:id', function(req, res, next){

  var task = req.body;
  var upTask;

  if(task.date){
    upTask = {};
    upTask.date = task.date;
  }

  if(task.time){
    upTask.time = task.time;
  }

  if(task.partysize){
    upTask.partysize = task.partysize;
  }

  if(task.name){
    upTask.name = task.name;
  }

  if(task.phone){
    upTask.phone = task.phone;
  }

  if(task.status){
    upTask.status = task.status;
  }

  if(task.area){
    upTask.area = task.area;
  }

  if(task.table){
    upTask.table = task.table;
  }

  if(!upTask){
    res.status(400);
    res.json({
      "error":"Bad Data"
    });
  }else{
    dbBook.books.update({_id: mongojs.ObjectId(req.params.id)},upTask, {}, function(err, task){
      if(err){
        res.send(err);
      }
      res.json(task);
    })
  }
});

// get single info based on title
router.get('/info', function(req, res, next){
  dbContact.contact.findOne({_id: mongojs.ObjectId("599bb331f9ac571f4060cb64")}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  })
});

// update booking
router.put('/info', function(req, res, next){

  var task = req.body;
  var upTask;

  if(task.name){
    upTask = {};
    upTask.name = task.name;
  }

  if(task.address){
    upTask.address = task.address;
  }

  if(task.tel){
    upTask.tel = task.tel;
  }

  if(task.email){
    upTask.email = task.email;
  }

  if(task.content){
    upTask.content = task.content;
  }

  if(!upTask){
    res.status(400);
    res.json({
      "error":"Bad Data"
    });
  }else{
    dbContact.contact.update({_id: mongojs.ObjectId("599bb331f9ac571f4060cb64")},upTask, {}, function(err, task){
      if(err){
        res.send(err);
      }
      res.json(task);
    })
  }
});

module.exports = router;
