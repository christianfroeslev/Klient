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
                "</tr>");
        });

    });

    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });

});/**
 * Created by christianfroslev on 29/11/16.
 */
