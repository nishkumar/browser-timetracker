document.addEventListener("DOMContentLoaded", function(){
  var site = GetURLParameter('site');
  var time = parseInt(GetURLParameter('time'));
  time = Math.round(time/60);

  var msg = 'You have spent ' + time + " minutes on "+ site + " today.";
  document.getElementById("timeSpent").innerHTML = msg;
});

function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
};
