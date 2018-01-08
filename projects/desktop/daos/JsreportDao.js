var Users_schema = require('../models/Users')
var Jsreport_schema = require('../models/Jsreport')

module.exports.get_all_Users = function (callback) {
  Users_schema.find(function (list_of_users, error) {
    if (error) {
      callback(error);
    } else {
      callback(list_of_users);
    }
  });
}

//savejseportuser
module.exports.savejseportuser = function (data, reportname, callback) {
  var Jsreport = new Jsreport_schema({ reportname: reportname, username: data.username })
  Jsreport.save(function (list_of_users, error) {
    if (error) {
      callback(error);
    } else {
      callback(list_of_users);
    }
  });
}

module.exports.findreportid = function (data, reportname, callback) {

  Jsreport_schema.find({reportname:reportname,username:data.username},  function(data, error) {
    if (error) {
      callback(error);
    } else {
      callback(data);
    }
  });
}

module.exports.deletereport = function (reportsid, callback) {
  Jsreport_schema.findByIdAndRemove(reportsid,  function(data, error) {
    if (error) {
      callback(error);
    } else {
      callback(data);
    }
  });
}

module.exports.getjsreport_for_user = function (reportname, callback) {
  Jsreport_schema.find({reportname:reportname},  function(data, error) {
    if (error) {
      callback(error);
    } else {
      callback(data);
    }
  });
}

module.exports.getreport_by_user = function (username, callback) {
  Jsreport_schema.find({username:username},  function(data, error) {
    if (error) {
      callback(error);
    } else {
      callback(data);
    }
  });
}

