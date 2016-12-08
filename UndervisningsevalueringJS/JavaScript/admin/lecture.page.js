/**
 * Created by christianfroslev on 08/12/16.
 */
$(document).ready(function () {

    //Fires on page-load
    SDK.Lecture.getLectures(function (err, data) {
        if (err) throw err;


        /*
         var decrypted = encryptDecrypt(data);
         decrypted = JSON.parse(decrypted);

         */
        var $lecturesTableBody = $("#lecturesTableBody");
        data.forEach(function (lecture) {


            $lecturesTableBody.append(
                "<tr>" +
                "<td>" + lecture.description + "</td>" +
                "<td>" + lecture.startDate + "</td>" +
                "<td>" + lecture.endDate + "</td>" +
                "<td><button id='seeReviews'>" + "Evalueringer" + "</button></td>" +
                "</tr>");

            $('button[id="seeReviews"]').on("click", function () {
                SDK.Storage.persist("lectureId", lecture.id);
                window.location.href = "adminReviews.html";
                seeReviews.close();
            });
        });

    });

    $("#logOutButton").on("click", function () {
        SDK.logOut();
        window.location.href = "login.html";
    });

});