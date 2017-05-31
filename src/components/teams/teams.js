/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
define(['ko', 'text!./teams.html', 'leagueModel', 'teamModel'], function(ko, template, leagueModel, teamModel) {
    function TeamsViewModel() {
        this.leagues = leagueModel.list;
        this.selectedLeagueName = ko.observable(leagueModel.list()[0]);

        this.teams = ko.computed(function() {
            return 0;
        }, this);
    }

    return { viewModel: TeamsViewModel, template: template };
});