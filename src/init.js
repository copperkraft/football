/**
 * Created by uladzimir.yakushkin on 30-May-17.
 */
require.config({
    paths: {
        ko: "lib/knockout-3.4.2",
        text: 'lib/text',
        appViewModel: "viewModels/appViewModel",
        leagueModel: "models/league.model",
        teamModel: "models/team.model",
        league: "components/league/league",
        teams: "components/teams/teams",
        router: "components/router/router"
    }
});

require(['ko', 'appViewModel', 'league', 'teams', 'router'], function(ko, appViewModel, league, teams, router) {
    ko.components.register('league', league);
    ko.components.register('teams', teams);
    ko.components.register('router', router);
    ko.applyBindings(new appViewModel('leagues'));
});