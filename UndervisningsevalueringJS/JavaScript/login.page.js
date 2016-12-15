//JQuery
$(document).ready(function () {

    //On-click function
    $("#loginButton").on("click", function(e){

        //Forhindre link fra at følge URL
        e.preventDefault();


        var email = $("#inputEmail").val();
        var pw = $("#inputPassword").val();

        //Kalder login metode som kræver to objekter
        SDK.login(email, pw, function(err, data){


            //On error
            if(err) {
                return $("#loginForm").find(".form-group").addClass("has-error");
            }

            //Login Ok
            $("#loginForm").find(".form-group").addClass("has-success");

            //Finder data type
            if (data.type === "admin" )
                window.location.href = "adminFrontPage.html";


            else if (data.type === "teacher") {
               window.location.href = "teacherFrontPage.html";
            }

            else if (data.type === "student") {
                window.location.href = "studentFrontPage.html";
            }



        });

    });

});

