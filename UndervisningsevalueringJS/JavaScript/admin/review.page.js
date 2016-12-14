$(document).ready(function () {

    SDK.Review.getReviews(function(err, data){
        if(err) throw err;

        var $reviewsTableBody = $("#reviewsTableBody");
        data.forEach(function (review) {

            $reviewsTableBody.append(
                "<tr>" +
                "<td>" + review.comment + "</td>" +
                "<td>" + review.rating + "</td>" +
                "<td><button id='deleteReviewButton'>" + "Slet evaluering" + "</button></td>" +
                "</tr>");

            $('button[id="deleteReviewButton"]').on("click", function () {
                SDK.Storage.persist("reviewId", review.id);
                var slet = confirm("Sikker på du ville slette denne evaluering?");
                if (slet == true) {
                    SDK.Review.delete(SDK.Storage.load("reviewId"), function (err) {

                        if (err) throw err;
                        else {
                            window.location.href="adminReviews.html";

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