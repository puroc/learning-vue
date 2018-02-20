new Vue({
    el: '#vue-app',
    data: {
        name: "pud",
        job: "developer",
        company:"<a href='www.srkj.com'>www.srkj.com</a>",
        website:"www.baidu.com"
    },
    methods: {
        greet: function (time) {
            return "Good " + time;
        }
    }
})