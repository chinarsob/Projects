// const App = Vue.CreateApp({
//     data() {
//         return {
//             myname : 'chinar',
//             Age:35
//         };
//     }
//     });
// App.mount('#assignment');

new Vue({
    el: "#assignment",
    data() {
        return {
            name : 'chinar',
            Age: 16,
            VueLink: './mountain.jpeg'
            
        }
    },   

    methods:
    {
        generateRandom()
        {
            const num = Math.random();
            return num;
        }
    }
});
