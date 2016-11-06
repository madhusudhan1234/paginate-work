var VueComponent  = Vue.extend({
  template: 
        '<nav>' +
          '<ul class="pagination">' +
              '<li v-if="pagination.current_page > 1">' +
                  '<a href="#" aria-label="Previous" @click.prevent="changePage(pagination.current_page - 1)">' +
                      '<span aria-hidden="true">«</span>' +
                  '</a>' +
              '</li>' +
              '<li v-for="page in pagesNumber" :class="{\'active\': page == pagination.current_page}">' +
                  '<a href="#" @click.prevent="changePage(page)">{{ page }}</a>' +
              '</li>' +
              '<li v-if="pagination.current_page < pagination.last_page">' +
                  '<a href="#" aria-label="Next" @click.prevent="changePage(pagination.current_page + 1)">' +
                      '<span aria-hidden="true">»</span>' +
                  '</a>' +
              '</li>' +
          '</ul>' +
      '</nav>',

  data: function() {
    return {
      pagination: {
        total: 0, 
        per_page: 2,
        from: 1, 
        to: 0,
        current_page: 1
      },
      offset: 4,
    }
  },

  computed: {
        isActived: function () {
            return this.pagination.current_page;
        },
        pagesNumber: function () {
            if (!this.pagination.to) {
                return [];
            }
            var from = this.pagination.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }
            var to = from + (this.offset * 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }
            var pagesArray = [];
            while (from <= to) {
                pagesArray.push(from);
                from++;
            }
            return pagesArray;
        }
    },

  ready : function(){
      this.getUsers(this.pagination.current_page);
  },

  methods : {

        getUsers: function(page){
          this.$http.get('/user/api?page='+page).then((response) => {
            /*this.$set('users', response.data.data);*/
            this.$set('pagination', response.data);
          });
        },

      changePage: function (page) {
          this.pagination.current_page = page;
          this.getUsers(page);
      }

  }

})

Vue.component('vue-pagination', VueComponent);

new Vue({

  el: '#users',

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

  /*computed: {
        isActived: function () {
            return this.pagination.current_page;
        },
        pagesNumber: function () {
            if (!this.pagination.to) {
                return [];
            }
            var from = this.pagination.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }
            var to = from + (this.offset * 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }
            var pagesArray = [];
            while (from <= to) {
                pagesArray.push(from);
                from++;
            }
            return pagesArray;
        }
    },

*/  
  ready : function(){
  		this.getUsers(this.pagination.current_page);
  },

  methods : {

        getUsers: function(page){
          this.$http.get('/user/api?page='+page).then((response) => {
            this.$set('users', response.data.data);
            /*this.$set('pagination', response.data);*/
          });
        },

      /*changePage: function (page) {
          this.pagination.current_page = page;
          this.getUsers(page);
      }*/

  }

});