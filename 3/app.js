new Vue({
    el: '#vue-app',
    data: {
        name: "pud",
        job: "developer"
    },
    methods: {
        greet: function (time) {
            return "Good " + time;
        }
    }
})