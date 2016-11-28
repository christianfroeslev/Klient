/**
 * Created by christianfroslev on 27/11/16.
 */
$(document).ready(function () {

    //Fires on page-load
    SDK.Lecture.getAll(function(err, data){
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
                "<button>" + "Opret evaluering" + "<button/>" +
                "</tr>");
        });

    });



});