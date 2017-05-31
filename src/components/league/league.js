/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
define(['ko', 'text!./league.html', 'leagueModel'], function(ko, template, leagueModel) {
    function LeagueViewModel(params) {
        this.leagues = leagueModel.list;
        this.selectedLeagueName = ko.observable(leagueModel.list[0]);
        this.selectedLeague = ko.observable();

        this.selectedLeague = leagueModel.loadLeague(this.selectedLeagueName());
        console.log(this.selectedLeague());
        setTimeout(console.log, 4000, this.selectedLeague())
    }

    return { viewModel: LeagueViewModel, template: template };
});