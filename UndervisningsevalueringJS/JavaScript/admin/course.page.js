$(document).ready(function () {

    //Kalder getCourses metoden
    SDK.Course.getCourses(function(err, data){

        //Hvis ikke korrekt data fundet smid error
        if(err) throw err;

        //Opretter variabel af tabellen med fag
        var $coursesTableBody = $("#coursesTableBody");

        //For-each loop for data fundet i server gennem Json
        data.forEach(function (course) {

            //Append = Indsæt specificeret data
            $coursesTableBody.append(
                "<tr>" +
                "<td>" + course.code + "</td>" +
                "<td>" + course.displaytext + "</td>" +
                "<td><button id='seeLectures'>" +  "Dine forelæsninger" + "</button></td>" +
                "</tr>");

            //On click som anvender course.displaytext som value
            $('button[id="seeLectures"]').on("click", function () {
                SDK.Storage.persist("courseName", course.displaytext);
                window.location.href = "adminLectures.html";
                seeLectures.close();
            });
        });

    });
    //Log ud
    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });

});