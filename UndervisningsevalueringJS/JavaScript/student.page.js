$(document).ready(function () {

    //Fires on page-load
    SDK.Book.getAll(function (err, data) {
        if (err) throw err;

        function printAuthors(authors) {
            return authors.map(function (author) {
                return author.firstName + " " + author.lastName;
            }).join(", ");
        }

        var $booksTableBody = $("#booksTableBody");
        data.forEach(function (book, i) {

            $booksTableBody.append(
                "<tr>" +
                "<td>" + book.title + "</td>" +
                "<td>" + book.subtitle + "</td>" +
                "<td>" + printAuthors(book.authors) + "</td>" +
                "<td>" + book.publisher.name + "</td>" +
                "<td>Kr. " + book.price + ",-</td>" +
                "</tr>");
        });

    });

    //Fires on page-load
    SDK.User.getAll(function (err, users) {
        if (err) throw err;

        var $usersTableBody = $("#usersTableBody");
        users.forEach(function (user) {

            $usersTableBody.append(
                "<tr>" +
                "<td>" + user.firstName + " " + user.lastName + "</td>" +
                "<td>" + user.username + "</td>" +
                "<td>" + user.email + "</td>" +
                "<td>" + user.id + "</td>" +
                "</tr>");
        });

    });

  //  var currentUser = SDK.User.current();
    // $("#currentUserName").text(currentUser.firstName +  " " + currentUser.lastName);

    /**
     * Add a new Book
     */

        $("#createEvaluationButton").on("click", function(){
            debugger;
            //Create JSON object
            var evaluering = {
                comment: $("#inputComment").val(),
                rating: $("#inputRating").val()
            };

            //Create book
            SDK.Book.create(evaluering, function(err, data){
                if(err) throw err;


            });

        });

    /**
     * Add a new User
     */
    $("#addNewUserButton").on("click", function () {

    });

    $("#logOutLink").on("click", function(){
        SDK.logOut();
        window.location.href = "index.html";
    });


});/**
 * Created by christianfroslev on 10/11/16.
 */
