/**
 * Created by christianfroslev on 08/12/16.
 */
$(document).ready(function () {





    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });


});