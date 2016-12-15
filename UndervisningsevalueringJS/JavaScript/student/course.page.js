// Jf. Admin/course.page.js
$(document).ready(function () {

    SDK.Course.getCourses(function(err, data){
        if(err) throw err;


        var $coursesTableBody = $("#coursesTableBody");
        data.forEach(function (course) {


            $coursesTableBody.append(
                "<tr>" +
                "<td>" + course.code + "</td>" +
                "<td>" + course.displaytext + "</td>" +
                "<td><button id='seeLectures'>" +  "Dine forelæsninger" + "</button></td>" +
                "</tr>");

            $('button[id="seeLectures"]').on("click", function () {
                SDK.Storage.persist("courseName", course.displaytext);
                window.location.href = "studentLectures.html";
                seeLectures.close();
            });
        });

    });

    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });

});