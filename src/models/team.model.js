/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
define(['ko'], function(ko) {
    let loaded = {};
    return {
        loadTeam: href => {
            if (loaded[href]) {
                return loaded[href];
            }
            let response = ko.observable();
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                {
                    response(JSON.parse(xmlHttp.responseText));
                }
            };
            xmlHttp.open("GET", href, true);
            xmlHttp.setRequestHeader("x-auth-token", 'ea247d3972de4c13b075ae1b61b88d72');
            xmlHttp.send(null);

            response.isFavorite = ko.pureComputed({
                read: function () {
                    return localStorage[this.name];
                },
                write: function (value) {
                    localStorage[this.name] = value;
                },
                owner: this
            });

            loaded[href] = response;
            return response;
        }
    }
});