
$(document).ready(function () {





    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });


});