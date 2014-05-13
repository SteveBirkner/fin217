
/*
 * GET home page.
 */

var mongoose = require('mongoose')
  , Crime = mongoose.model('Crime');


exports.index = function(req, res) {
  res.render('index', {title: 'Homepage'});
  
 /* var crime = new Crime();
      crime.state = 'test';
      crime.kind = 'test';
      crime.namecrime = 'test';
      crime.year = 1999;
      crime.count = 100;
      crime.save(function (err) {
        console.log(err);
      }); */

 /* Course.find({}, function(err, courses) {
    res.render('index', { 
      title: 'Personal Learning Platform', 
      courses: courses 
    });
 }); */
}
