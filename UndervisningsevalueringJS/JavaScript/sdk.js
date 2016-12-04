var SDK = {

    serverURL: "http://localhost:5040/api",



    request: function (options, cb) {

        //Perform XHR
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

    Course: {
        getCourses: function (cb) {
            SDK.request({method: "GET", url: "/course/" + SDK.Storage.load("id") }, cb);
        }
    },

    Lecture: {
        getLectures: function (courseId, cb) {
            SDK.request({

                url: "/lecture/" + courseId,
                method: "GET"

            }, cb);
            }
        },
    Review: {
        getReviews: function (cb) {
            SDK.request({method: "GET", url: "/review/1"}, cb);
        },
        create: function (data, cb) {
            SDK.request({method: "POST", url: "/student/review", data: data, headers: {authorization: SDK.Storage.load("id")}}, cb);
        }

    },

    logOut:function() {
        SDK.Storage.remove("id");
        SDK.Storage.remove("userType");
    },

    login: function (username, password, cb) {
        this.request({
            data: {
                cbsMail: username,
                password: password
            },
            url: "/login",
            method: "POST"
        }, function (err, data) {

            //On login-error
            if (err) return cb(err);

            SDK.Storage.persist("id", data.id);
            SDK.Storage.persist("userType", data.type);
          //  SDK.Storage.persist("user", data.user);

            cb(null, data);

        });
    },

    Storage: {
        prefix: "StoreSDK",
        persist: function (key, value) {
            window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        load: function (key) {
            var val = window.localStorage.getItem(this.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e){
                return val;
            }
        },
        remove:function (key) {
            window.localStorage.removeItem(this.prefix + key);
        }
    }


};
/*
function encryptDecrypt(input) {
    var key = ['A', 'B', 'C'];
    var out = "";
    for (var i = 0; i < input.length; i++) {
        out += (String.fromCharCode(((input.charAt(i)).charCodeAt(0) ^ (key[i % key.length]).charCodeAt(0))));
    }
    return out;
}
*/