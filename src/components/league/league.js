/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
define(['ko', 'text!./league.html', 'leagueModel'], function(ko, template, leagueModel) {
    function LeagueViewModel(params) {
        this.leagues = leagueModel.list;
        this.selectedLeagueName = ko.observable(leagueModel.list()[0]);

        this.selectedLeague = ko.computed(function() {
            return leagueModel.loadLeague(this.selectedLeagueName());
        }, this);
    }

    return { viewModel: LeagueViewModel, template: template };
});