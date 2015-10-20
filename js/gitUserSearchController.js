githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;

  // var searchResource = $resource('https://api.github.com/search/users');

  // self.doSearch = function() {
  //   self.searchResult = searchResource.get(
  //     { q: self.searchTerm, access_token: gitAccessToken  }
  //   );
  // };

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      })
  };
}]);
