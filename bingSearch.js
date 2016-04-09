var Search = require('bing.search');
var util = require('util');

function BingSearcher() {
  this.searcher = new Search('/AnmMr0GtNaoNnvOaI9Cl8J+0fNeskI1t2T4kK3Skgg');
}

BingSearcher.prototype.search = function(query) {
  this.searcher.composite(query, {top: 5}, function(err, results) {
    console.log(util.inspect(results, 
    {colors: true, depth: null}));
  });
};

exports.BingSearcher = BingSearcher;
