/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
define(['ko'], function(ko) {
    let leagueAliaces = {
        "English Premier League": 'PL',
        "German 1. Bundesliga": "BL1",
        "Spanish Primera": "PD",
        "Italian Serie A": "SA",
        "French League 1": "EL1"
    };
    let leagueIds = ko.observable({
        "English Premier League": 426,
        "German 1. Bundesliga": 430,
        "Spanish Primera": 436,
        "Italian Serie A": 438,
        "French League 1": 428
    });

    (function () {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            {
                let competitions = JSON.parse(xmlHttp.responseText);
                for (let title in leagueAliaces) {
                    if (leagueAliaces.hasOwnProperty(title)) {
                        leagueIds()[title] = competitions.filter(
                            competition => competition.league === leagueAliaces[title]
                        )[0].id;
                    }
                }
            }
        };
        xmlHttp.open("GET", 'http://api.football-data.org/v1/competitions/', true);
        xmlHttp.setRequestHeader("x-auth-token", 'ea247d3972de4c13b075ae1b61b88d72');
        xmlHttp.setRequestHeader("X-Response-Control", 'minified');
        xmlHttp.send(null);
    })();


    return {
        list: ko.observableArray([
            "English Premier League",
            "German 1. Bundesliga",
            "Spanish Primera",
            "Italian Serie A",
            "French League 1"
        ]),
        loadLeague: leagueTitle => {
            let response = ko.observable();
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                {
                    response(JSON.parse(xmlHttp.responseText));
                    console.log(response);
                }
            };
            xmlHttp.open("GET", `http://api.football-data.org/v1/competitions/${426}/leagueTable`, true);
            xmlHttp.setRequestHeader("x-auth-token", 'ea247d3972de4c13b075ae1b61b88d72');
            xmlHttp.send(null);
            return response;
        }
    }
});