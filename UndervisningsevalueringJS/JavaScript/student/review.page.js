$(document).ready(function () {

    SDK.Review.getReviews(function(err, data){
        if(err) throw err;

        var $reviewsTableBody = $("#reviewsTableBody");
        data.forEach(function (review) {

            if (review.userId === SDK.Storage.load("id")) {
                $reviewsTableBody.append(
                    "<tr>" +
                    "<td>" + review.comment + "</td>" +
                    "<td>" + review.rating + "</td>" +
                    "<td><button id='deleteReviewButton'>" + "Slet evaluering" + "</button></td>" +
                    "</tr>");
            }

            else {
                $reviewsTableBody.append(
                    "<tr>" +
                    "<td>" + review.comment + "</td>" +
                    "<td>" + review.rating + "</td>" +
                    "</tr>");
            }


            $('button[id="createReviewButton"]').on("click", function () {
                window.location.href = "createReview.html";
                createReviewButton.close();
            });

            $('button[id="deleteReviewButton"]').on("click", function () {
                SDK.Storage.persist("reviewId", review.id);
                var $slet = confirm("Er du sikker på du vil slette denne evaluering?");
                if ($slet == true) {
                    SDK.Review.delete(SDK.Storage.load("reviewId"), function (err) {
                        if (err) throw err;
                        else {
                            window.location.href="studentReviews.html";
                            deleteReviewButton.close();

                        }

                    })
                }
            });
        });

    });

    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });

});
