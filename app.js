var CronJob = require('cron').CronJob
  , BingSearcher = require('./bingSearch').BingSearcher;

var bingSearcher = new BingSearcher();

// Every weekday at 11:30 = 00 30 11 * * 1-5
var job = new CronJob('* * * * *', function() {
  /*
   *Run a query
  */
  bingSearcher.search("self driving cars");

  }, function () {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  'America/Denver' /* Time zone of this job. */
);

job.start();
