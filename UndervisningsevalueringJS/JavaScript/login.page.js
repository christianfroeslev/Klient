$(document).ready(function () {

    $("#loginButton").on("click", function(e){
        e.preventDefault();

        var email = $("#inputEmail").val();
        var pw = $("#inputPassword").val();


        SDK.login(email, pw, function(err, data){



            //On wrong credentials
            if(err) {
                return $("#loginForm").find(".form-group").addClass("has-error");
            }

            //Login OK!
            $("#loginForm").find(".form-group").addClass("has-success");

            if (data.type === "admin" )
                window.location.href = "opretEvaluering.html";


            else if (data.type === "teacher") {
               window.location.href = "teacherFrontPage.html";
            }

            else if (data.type === "student") {
                window.location.href = "studentForside.html";
            }



        });

    });

});

