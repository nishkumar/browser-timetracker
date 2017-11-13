var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-45267314-2']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

var config = new Config();
var sites = new Sites(config);

function updateClearStatsInterval() {
    var select = document.getElementById("clear_stats_interval");
    var option = select.options[select.selectedIndex];
    config.clearStatsInterval = option.value;
    // TODO(nav): Set nextTimeToClear in Config
    restoreOptions();
}

function updateTimeDisplay() {
    var select = document.getElementById("time_display");
    var option = select.options[select.selectedIndex];
    config.timeDisplayFormat = option.value;
    restoreOptions();
}

function addIgnoredSite() {
    var newSite = document.getElementById("new_ignored_site").value;
    if (newSite.indexOf("http://") != 0 &&
        newSite.indexOf("https://") != 0) {
        alert("Include http:// or https:// prefix.");
        return;
    }

    chrome.extension.sendRequest(
        {action: "addIgnoredSite", site: newSite},
        function (response) {
            restoreOptions();
        });
}

function removeIgnoredSites() {
    var select = document.getElementById("ignored_sites");
    var ignoredSites = [];
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.selected == false) {
            ignoredSites.push(child.value);
        }
    }
    localStorage['ignoredSites'] = JSON.stringify(ignoredSites);
    restoreOptions();
}

// Restores options from localStorage, if available.
function restoreOptions() {
    var ignoredSites = localStorage['ignoredSites'];
    if (!ignoredSites) {
        return;
    }
    ignoredSites = JSON.parse(ignoredSites);
    var select = document.getElementById("ignored_sites");
    select.options.length = 0;
    for (var i in ignoredSites) {
        var option = document.createElement("option");
        option.text = ignoredSites[i];
        option.value = ignoredSites[i];
        select.appendChild(option);
    }

    var clearStatsInterval = config.clearStatsInterval;
    select = document.getElementById("clear_stats_interval");
    for (var i = 0; i < select.options.length; i++) {
        var option = select.options[i];
        if (option.value == clearStatsInterval) {
            option.selected = true;
            break;
        }
    }

    var timeDisplay = config.timeDisplayFormat;
    select = document.getElementById("time_display");
    for (var i = 0; i < select.options.length; i++) {
        var option = select.options[i];
        if (option.value == timeDisplay) {
            option.selected = true;
            break;
        }
    }
}

function download() {
    var csvContent = "data:text/csv;charset=utf-8,";
    var sitesDict = sites.sites;
    var pairs = [];
    for (var site in sitesDict) {
        if (sitesDict.hasOwnProperty(site)) {
            pairs.push(site + "," + sitesDict[site]);
        }
    }
    csvContent += pairs.join("\n");
    window.open(encodeURI(csvContent));
}

function open_modal() {
    document.getElementById('myModal').style.display = "block";
}

function close_modal() {
    document.getElementById('myModal').style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        close_modal();
    }
};

function open_redirect() {
    document.getElementById('label-your-quote').style.display = "none";
    document.getElementById('input-your-quote').style.display = "none";
    document.getElementById('label-dest-site').style.display = "block";
    document.getElementById('input-domain-dest').style.display = "block";
}

function open_quote() {
    document.getElementById('label-dest-site').style.display = "none";
    document.getElementById('input-domain-dest').style.display = "none";
    document.getElementById('label-your-quote').style.display = "block";
    document.getElementById('input-your-quote').style.display = "block";
}

function save_domain_src() {

}

function save_domain_dest() {

}

function input_your_quote() {

}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add_ignored").addEventListener("click", addIgnoredSite);
    document.getElementById("remove_ignored").addEventListener("click", removeIgnoredSites);
    document.getElementById("clear_stats_interval").addEventListener("change", updateClearStatsInterval);
    document.getElementById("time_display").addEventListener("change", updateTimeDisplay);
    document.getElementById("download").addEventListener("click", download);
    document.getElementById("btn-new-rule").addEventListener("click", open_modal);
    document.getElementById("btn-redirect").addEventListener("click", open_redirect);
    document.getElementById("btn-quote").addEventListener("click", open_quote);
    document.getElementsByClassName("close")[0].addEventListener("click", close_modal);
    document.getElementById("input-domain-src").addEventListener("click", save_domain_src);
    document.getElementById("input-domain-dest").addEventListener("click", save_domain_dest);
    document.getElementById("input-your-quote").addEventListener("click", input_your_quote);
    restoreOptions();
});


