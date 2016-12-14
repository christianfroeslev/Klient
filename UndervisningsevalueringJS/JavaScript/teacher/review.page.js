
$(document).ready(function () {

    SDK.Review.getReviews(function(err, data){
        if(err) throw err;



        var $reviewsTableBody = $("#reviewsTableBody");
        data.forEach(function (review) {

            $reviewsTableBody.append(
                "<tr>" +
                "<td>" + review.comment + "</td>" +
                "<td>" + review.rating + "</td>" +
                "</tr>");

            $('button[id="createReviewButton"]').on("click", function () {
                window.location.href = "createReview.html";
                seeReviews.close();
            });
        });

    });

    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });

});
