$(document).ready(function () {

    //Fires on page-load
    SDK.Course.getAll(function(err, data){
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
                "<td><div><button><a href" + "Se forelæsninger" + "<td/></div></button" +
                "</tr>");
        });

    });



});