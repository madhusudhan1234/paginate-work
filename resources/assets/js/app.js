
require('./bootstrap');

import VuePagination from './components/Pagination.vue';
import axios from 'axios';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};


const  app = new Vue({
    el: '#app',
    data: {
        users: {
            total: 0,
            per_page: 2,
            from: 1,
            to: 0,
            current_page: 1
        },
        offset: 4,
    },
    mounted() {
        this.getUsers();
    },
    components: {
        VuePagination,
    },
    methods: {
        getUsers() {
            axios.get(`/user/api?page=${this.users.current_page}`)
                .then((response) => {
                    this.users = response.data;
                })
                .catch(() => {
                    console.log('handle server error from here');
                });
        }
    }
});
