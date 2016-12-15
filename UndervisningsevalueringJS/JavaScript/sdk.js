var SDK = {

    /**
     * @Path
     */
    serverURL: "http://localhost:5040/api",


    //Sender Ajax XHR fra browseren til serveren
    request: function (options, cb) {

        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(options.data),
            success: function (data, status, xhr) {
                cb(null, data, status, xhr);
            },
            error: function (xhr, status, errorThrown) {
                cb({xhr: xhr, status: status, error: errorThrown});
            }
        });
    },

    //Sender et callback til serverens API
    //"GET"
    Course: {
        getCourses: function (cb) {
            //Tager id'et for personen der er logget ind
            SDK.request({method: "GET", url: "/course/" + SDK.Storage.load("id") }, cb);
        }
    },
    //"GET"
    Lecture: {
        getLectures: function (cb) {
            SDK.request({
                method: "GET",
                url: "/lecture/" + SDK.Storage.load("courseName")}, cb)

            }
            },

    Review: {
        //"GET"
        getReviews: function (cb) {
            SDK.request({method: "GET", url: "/review/" + SDK.Storage.load("lectureId")}, cb);
        },
        //"POST"
        create: function (data, cb) {
            SDK.request({method: "POST", url: "/student/review", data: data }, cb);
        },
        //"DELETE"
        delete: function (data, cb) {
            SDK.request({
                data: {
                    id: data
                },
                method: "DELETE",
                url: "/teacher/review/delete"}, cb);

        }

    },
    //Fjern gemt Storage ved log ud
    logOut:function() {
        SDK.Storage.remove("id");
        SDK.Storage.remove("userType");
        SDK.Storage.remove("courseName");
        SDK.Storage.remove("lectureId");
        SDK.Storage.remove("reviewId");
    },

    //"POST"
    login: function (username, password, cb) {
        //Beder om at finde data der matcher attributter cbsMail + password
        this.request({
            data: {
                cbsMail: username,
                password: password
            },
            url: "/login",
            method: "POST"
        }, function (err, data) {

            //Login error
            if (err) return cb(err);

            //Gemmer fundet id og userType i Storage
            SDK.Storage.persist("id", data.id);
            SDK.Storage.persist("userType", data.type);

            cb(null, data);

        });
    },

    Storage: {
        prefix: "StoreSDK",

        //Gemmer objekt i Storage
        persist: function (key, value) {
            window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },

        //Anvender objekt i Storage ved key forespørgsel
        load: function (key) {
            var val = window.localStorage.getItem(this.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e){
                return val;
            }
        },

        //Fjerner objekt i Storage
        remove:function (key) {
            window.localStorage.removeItem(this.prefix + key);
            }
    }


};
