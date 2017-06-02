/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
define(['ko', 'text!./teams.html', 'leagueModel'], function(ko, template, leagueModel) {
    function TeamsViewModel() {
        this.favorite = ko.observable({'Hull City FC': true});

        this.isSelected = function (name) {
            return this.favorite()[name];
        };

        this.toggleState = function (name) {
            this.favorite()[name] = !this.favorite()[name];
        };



        this.leagues = leagueModel.list;
        this.selectedLeagueName = ko.observable(leagueModel.list()[0]);
        this.selectedLeagueTeams = ko.computed(function() {
            return leagueModel.loadTeams(this.selectedLeagueName());
        }, this);
    }

    return { viewModel: TeamsViewModel, template: template };
});