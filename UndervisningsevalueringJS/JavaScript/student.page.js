$(document).ready(function () {




        $("#createEvaluationButton").on("click", function(){
            //Create JSON object
            var evaluering = {
                comment: $("#inputComment").val(),
                rating: $("#inputRating").val()
            };

            //Create book
            SDK.Review.create(evaluering, function(err, data){

                if(err) throw err;

            });

        });

    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });


});/**
 * Created by christianfroslev on 10/11/16.
 */
