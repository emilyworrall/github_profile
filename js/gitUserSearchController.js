githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;

  // var access_token = gitAccessToken;
  // var url = 'https://api.github.com/users/' + $('input.username').val() + "?access_token=" + access_token;
  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm, access_token:gitAccessToken  }
    );
  };
}]);
