import { createApp } from 'vue'
import App from './App.vue'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid } from '@progress/kendo-vue-grid'
Vue.component('Grid', Grid);

new Vue({
    el: '#app' //id of the container
})

createApp(App).mount('#app')
