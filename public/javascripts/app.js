// Angular module, defining routes for the app

angular.module('polls', ['pollServices','ui.router']).
	config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/polls')
        $stateProvider
            .state('polls', {
                url: '/polls',
                templateUrl: 'partials/list.html',
                controller: 'PollListCtrl as PollList'
            })
            .state('showPoll', {
                url: '/poll/:pollId',
                templateUrl: 'partials/item.html',
                controller: 'PollItemCtrl as PollItem'
            })
            .state('new', {
                url: '/new',
                templateUrl: 'partials/new.html',
                controller: 'PollNewCtrl as PollNew' })

            // If invalid route, just redirect to the main list view

	}]);
	