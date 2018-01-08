var dao = require("../daos/JsreportDao");
var async = require("async");

module.exports.get_all_Users = function(callback) {
  dao.get_all_Users(function(list_of_users) {
    callback(list_of_users);
  });
};

module.exports.getjsreport_for_user = function(reportname,callback){
  dao.getjsreport_for_user(reportname,function (list_report){
   callback(list_report)
  });
}

module.exports.getreport_by_user = function(username,callback){
  dao.getreport_by_user(username,function(list_report){
    callback(list_report)
  });
}

module.exports.deletejseportuser = function(list_of_users,callback){
  var reportname = list_of_users.reportname;
  async.forEachOf(
    list_of_users.user,
    function(value, key, callback) {
      dao.findreportid(value, reportname, function(list_of_users) {
        dao.deletereport(value, reportname, function(list_of_users) {
          callback(list_of_users);
        });
      });
    },
    function(err) {
      if (err) console.error(err.message);
      callback();
    }
  );
}

module.exports.savejseportuser = function(list_of_users, callback) {
  var reportname = list_of_users.reportname;
    async.forEachOf(
      list_of_users.user,
      function(value, key, callback) {
        dao.savejseportuser(value, reportname, function(list_of_users) {
          callback(list_of_users);
        });
      },
      function(err) {
        if (err) console.error(err.message);
        callback();
      }
    );
};


