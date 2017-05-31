/**
 * Created by uladzimir.yakushkin on 30-May-17.
 */
require.config({
    paths: {
        ko: "lib/knockout-3.4.2",
        text: 'lib/text',
        appViewModel: "viewModels/appViewModel",
        leagueModel: "models/league.model",
        league: "components/league/league",
    }
});

require(['ko', 'appViewModel', 'league'], function(ko, appViewModel, league) {
    ko.components.register('league', league);
    ko.applyBindings(new appViewModel('leagues'));
});