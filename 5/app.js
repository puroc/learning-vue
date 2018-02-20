new Vue({
    el: '#vue-app',
    data: {
        age: 37,
        x: 0,
        y: 0
    },
    methods: {
        add: function (num) {
            this.age += num;
        },
        subtract: function (num) {
            this.age -= num;
        },
        updatexy: function (event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        }

    }
})