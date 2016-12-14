$(document).ready(function () {




        $("#createEvaluationButton").on("click", function(){

            var evaluering = {
                comment: $("#inputComment").val(),
                rating: $("#inputRating").val(),
                userId: SDK.Storage.load("id"),
                lectureId: SDK.Storage.load("lectureId")

            };



            SDK.Review.create(evaluering, function(err, succes){

                if (succes) {
                    window.alert("Din evaluering er oprettet");
                    window.location.href = "studentReviews.html";
                    $("#deleteReview").show();

                }

                else if (err) {
                    throw err;
                }
            });

        });

    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });


});
