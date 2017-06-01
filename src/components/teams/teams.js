/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
define(['ko', 'text!./teams.html', 'leagueModel'], function(ko, template, leagueModel) {
    function TeamsViewModel() {
        localStorage.favorite = '[]';
        this.leagues = leagueModel.list;
        this.selectedLeagueName = ko.observable(leagueModel.list()[0]);

        this.favorite = ko.observableArray(['name', 'Hull City FC']);

        this.teams = ko.computed(function() {
            return 0;
        }, this);


        this.selectedLeague = ko.computed(function() {
            return leagueModel.loadTeams(this.selectedLeagueName());
        }, this);
    }

    return { viewModel: TeamsViewModel, template: template };
});