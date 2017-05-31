/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
define(['ko', 'text!./router.html'], function(ko, template) {
    function RouterViewModel() {
        let routedComponents = ko.observable({});
        function route (path, component) {
            routedComponents[path] = {component: component};
        }
        route('league', 'league');
        route('teams', 'teams');

        this.url = ko.observable();

        this.calculateRoute = function () {
            this.url(location.hash.slice(1) || '/');
        };
        this.calculateRoute();
        // Listen on hash change:
        window.addEventListener('hashchange', this.calculateRoute.bind(this));
        // Listen on page load:
        window.addEventListener('load', this.calculateRoute.bind(this));

        this.page = ko.computed(function () {
            if (routedComponents[this.url()]) {
                return this.url();
            }
        }, this);
    }

    return { viewModel: RouterViewModel, template: template };
});