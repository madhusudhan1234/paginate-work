
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('vue-pagination', require('./components/Pagination.vue'));

const  app = new Vue({
    el: '#app',
    data: {
        users: [],
        pagination: {
            total: 0,
            per_page: 2,
            from: 1,
            to: 0,
            current_page: 1
        },
        offset: 4,
    },
    mounted : function() {
        this.getUsers(this.pagination.current_page);
    },
    methods: {
        getUsers: function(page) {
            var _this = this;
            $.ajax({
                url: '/user/api?page='+page,
                success: function (response) {
                   _this.users = response.data;
                   _this.pagination = response;
                }
            });
        }
    }
    
});
