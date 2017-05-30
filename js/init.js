/**
 * Created by uladzimir.yakushkin on 30-May-17.
 */
require.config({
    paths: {
        ko: "lib/knockout-3.4.2",
        appViewModel: "viewModels/appViewModel"
    }
});

require(['ko', 'appViewModel'], function(ko, appViewModel) {
    ko.applyBindings(new appViewModel('leagues'));
});