define(['ko'], function(ko) {
    return function appViewModel(defaultPage) {

        this.page = ko.observable(defaultPage);
        this.display = true;
    };
});