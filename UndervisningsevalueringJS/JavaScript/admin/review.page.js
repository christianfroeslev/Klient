/**
 * Created by christianfroslev on 08/12/16.
 */
$(document).ready(function () {

    //Fires on page-load
    SDK.Review.getReviews(function(err, data){
        if(err) throw err;


        /*
         var decrypted = encryptDecrypt(data);
         decrypted = JSON.parse(decrypted);

         */
        var $reviewsTableBody = $("#reviewsTableBody");
        data.forEach(function (review) {

            $reviewsTableBody.append(
                "<tr>" +
                "<td>" + review.comment + "</td>" +
                "<td>" + review.rating + "</td>" +
                "<td><button id='deleteReview'>" + "Slet evaluering" + "</button></td>" +
                "</tr>");

            $('button[id="deleteReviewButton"]').on("click", function () {
                seeReviews.close();
            });
        });

    });

    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });

});