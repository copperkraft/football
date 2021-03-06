/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
define(['ko', 'text!./teams.html', 'leagueModel'], function(ko, template, leagueModel) {
    function TeamsViewModel() {
        function saveFavorites(name) {
            let currentState = ko.observableArray(localStorage.favorites? JSON.parse(localStorage.favorites) : []);
            if(currentState().some(item => item === name)) {
                currentState.remove(name);
            } else {
                currentState.push(name);
            }

            localStorage.favorites = JSON.stringify(currentState());
        }
        function loadFavorites() {
            return localStorage.favorites? JSON.parse(localStorage.favorites) : [];
        }


        this.favorites = ko.observableArray(loadFavorites());

        this.toggleState = function (name) {
            if(this.favorites().some(item => item === name)) {
                this.favorites.remove(name);
            } else {
                this.favorites.push(name);
            }
            saveFavorites(name);
        };


        this.leagues = leagueModel.list;
        this.selectedLeagueName = ko.observable(leagueModel.list()[0]);
        this.selectedLeagueTeams = ko.computed(function() {
            return leagueModel.loadTeams(this.selectedLeagueName());
        }, this);
    }

    return { viewModel: TeamsViewModel, template: template };
});