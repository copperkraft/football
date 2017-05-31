/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
define(['ko', 'text!./teams.html', 'leagueModel'], function(ko, template, leagueModel) {
    function TeamsViewModel() {
        this.leagues = leagueModel.list;
        this.selectedLeagueName = ko.observable(leagueModel.list()[0]);

        this.selectedLeague = ko.computed(function() {
            return leagueModel.loadLeague(this.selectedLeagueName());
        }, this);
    }

    return { viewModel: TeamsViewModel, template: template };
});