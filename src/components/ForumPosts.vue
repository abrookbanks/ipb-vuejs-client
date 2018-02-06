<template>
  <div>
      <div v-if="posts.length > 0">
        <div v-for="(post, index) in posts" :key="index" class="post-body">
          <div class="row">
            <div class="col-xs-5 col-sm-3 col-md-2 text-center author">
              <h5 v-html="post.author.formattedName"></h5>
              <img :src="post.author.photoUrl"/>
              <div class="info"><span v-html="post.author.primaryGroup.formattedName"></span><br>{{post.author.posts}} posts</div>
            </div>
            <div class="ol-xs-7 col-sm-9 col-md-10 post">
            <small>Posted on {{post.date}}</small>
            <span v-html="post.content"></span>
            </div>
          </div>
        </div>
      </div>
      <div v-else>{{statusMessage}}</div>
      <pagination/>
    </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ForumPosts",
  computed: {
    ...mapGetters(["posts", "topic", "statusMessage"])
  },
  methods: {
    ...mapMutations(["setStatusMessage", "setTopicId"])
  },
  components: {
    Pagination
  },
  created() {
    if (this.$route.query.tid) {
      this.setTopicId(this.$route.query.tid);
      this.$store.dispatch("showPage", 1);
    } else {
      this.setStatusMessage("No topic ID specified.");
    }
  }
};
</script>

<style scoped>
.author .info {
  line-height: 20px;
}
.author img {
  width: 100%;
  height: auto;
  max-width: 80px;
}
.post img {
  max-width: 100%;
}
.post-body {
  padding: 10px 0;
}
.post-body:nth-child(odd) {
  background-color: #f9f9f9;
}
</style>
