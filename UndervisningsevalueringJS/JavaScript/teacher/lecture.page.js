// Jf. Admin/course.page.js
$(document).ready(function () {

    SDK.Lecture.getLectures(function (err, data) {
        if (err) throw err;

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
                window.location.href = "teacherReviews.html";
                seeReviews.close();
            });
        });

    });

    $("#logOutButton").on("click", function () {
        SDK.logOut();
        window.location.href = "login.html";
    });

});