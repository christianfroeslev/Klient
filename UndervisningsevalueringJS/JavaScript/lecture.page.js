$(document).ready(function () {

    //Fires on page-load
    SDK.Lecture.getLectures("BALJO1001U_LA_E16",function(err, data){
        if(err) throw err;


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
                "<td class='btn-row'> <button class='btn btn-default evaluering' data-id=" + lecture.id + ">Se evalueringer</button></td>" +
                "</tr>");
        });

    });

    $("#lecturesTableBody").on("click", ".evaluering", function () {
        var id = $(this).data("id");
        window.location.href = "studentEvalueringer.html"
    });

    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });

});