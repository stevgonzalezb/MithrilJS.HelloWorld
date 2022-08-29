var m = require("mithril")

var User = {
    list: [],
    loadList: async function() {
        const result = await m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true,
        })
        User.list = result.data
    },

    current: {},
    load: async function(id) {
        const result = await m.request({
            method: "GET",
            url: `https://rem-rest-api.herokuapp.com/api/users/${id}`,
            withCredentials: true,
        })
        User.current = result
    },

    save: function() {
        return m.request({
            method: "PUT",
            url: `https://rem-rest-api.herokuapp.com/api/users/${User.current.id}`,
            body: User.current,
            withCredentials: true,
        })
    }
}

module.exports = User;