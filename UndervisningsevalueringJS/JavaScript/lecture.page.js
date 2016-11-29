$(document).ready(function () {

    //Fires on page-load
    SDK.Lecture.getLectures(function(err, data){
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
                "<td><div><button><a href='studentEvalueringer.html'>" + "Se forelæsninger" + "<td/></div></button>" +
                "<td><div><button><a href='opretEvaluering.html'>" + "Opret evaluering" + "<td/></div></button>" +
                "</tr>");
        });

    });

});