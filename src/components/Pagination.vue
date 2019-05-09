<template>
  <div class="row pagination-wrapper">
    <div class="col-md-9 col-sm-8 col-xs-8">
    <nav v-if="pageData.totalPages>1" aria-label="Page navigation">
        <ul class="pagination">
        <li v-if="pageData.page != 1" @click.prevent="showPage(pageData.page - 1)">
            <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li v-for="(pageNumber) in pageData.totalPages" :key="pageNumber" :class="checkCurrentPage(pageNumber)" @click.prevent="showPage(pageNumber)"><a href="#">{{pageNumber}}</a></li>
        <li v-if="pageData.page != pageData.totalPages" @click.prevent="showPage(pageData.page + 1)">
            <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
        </ul>
    </nav>
    </div>
    <div class="col-md-3 col-sm-4 col-xs-4 text-right">
      <a :href="topicReplyURL" target="_parent" class="button success">
        <span v-if="hasPosts">Reply to this thread</span>
        <span v-else>Be the first to comment</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["pageData", "topicReplyURL", "hasPosts"])
  },
  methods: {
    ...mapActions(["showPage"]),
    checkCurrentPage(pageNumber) {
      return {
        active: this.$store.state.page == pageNumber ? true : false
      };
    }
  }
};
</script>

<style scoped>
  .pagination-wrapper {
    margin-top: 10px;
  }
  .pagination {
    margin: 0 !important;
  }
</style>
