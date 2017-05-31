/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
define(['ko', 'text!./league.html', 'leagueModel'], function(ko, template, leagueModel) {
    function LeagueViewModel(params) {
        console.log(leagueModel.list());
        setTimeout(leagueModel.loadLeague, 4);
        this.leagues = leagueModel.list;
    }

    return { viewModel: LeagueViewModel, template: template };
});