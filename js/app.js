Vue.createApp({
    data() {
        return {
            color: "#ffffff"
        }
    },
    methods: {
        changeColor() {
            this.color = `#${Math.floor(Math.random() * 16 ** 6).toString(16)}`;
        }
    }
}).mount('#app');