<template>
    <ul class="pagination">
    <li v-if="pagination.current_page > 1">
        <a href="#" aria-label="Previous" v-on:click.prevent="changePage(pagination.current_page - 1)">
            <span aria-hidden="true">«</span>
            </a>
        </li>
    <li v-for="page in pagesNumber" :class="{'active': page == pagination.current_page}">
        <a href="#" v-on:click.prevent="changePage(page)">{{ page }}</a>
        </li>
    <li v-if="pagination.current_page < pagination.last_page">
        <a href="#" aria-label="Next" v-on:click.prevent="changePage(pagination.current_page + 1)">
            <span aria-hidden="true">»</span>
            </a>
        </li>
    </ul>
</template>
<script>
  export default{
      props: {
      pagination: {
          type: Object,
          required: true
      },
      offset: {
          type: Number,
          default: 4
      }
    },
    computed: {
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
        for (from = 1; from <= to; from++) {
          pagesArray.push(from);
        }
          return pagesArray;
      }
    },
    methods : {
      changePage: function (page) {
        this.pagination.current_page = page;
      }
    }
  }
</script>
