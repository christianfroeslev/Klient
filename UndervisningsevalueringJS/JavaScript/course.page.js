$(document).ready(function () {

    //Fires on page-load
    SDK.Course.getCourses(function(err, data){
        if(err) throw err;

/*
        var decrypted = encryptDecrypt(data);
        decrypted = JSON.parse(decrypted);


*/
        var $coursesTableBody = $("#coursesTableBody");
        data.forEach(function (course) {


            $coursesTableBody.append(
                "<tr>" +
                "<td>" + course.code + "</td>" +
                "<td>" + course.displaytext + "</td>" +
                "<td><a role='button' data-course=" + course.displaytext + " class='btn btn-success btn-lg button'> Dine timer</a></td>" +
                "</tr>");
        });

    });

    $("#coursesTableBody").on("click", ".button", function () {
        var course = $(this).data("course");
        window.location.href = "studentLectures.html"
    });

    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });

});