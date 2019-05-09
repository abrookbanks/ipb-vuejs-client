<template>
  <div>
      <div v-if="posts.length > 0">
        <transition-group name="fade" tag="div">
          <!-- index + 0 is a work around see: https://github.com/vuejs/eslint-plugin-vue/issues/726#issuecomment-451740732 -->
          <div v-for="(post, index) in posts" :key="index + 0" class="post-body">
            <div class="row">
              <div class="small-3 columns text-center author">
                <h5 v-html="post.author.formattedName"></h5>
                <img :src="post.author.photoUrl"/>
                <div class="info"><span v-html="post.author.primaryGroup.formattedName"></span><br>{{post.author.posts}} posts</div>
              </div>
              <div class="small-9 columns post">
              <small>Posted on {{post.date | moment("MMMM Do YYYY, h:mm:ssa")}}</small>
              <span v-html="post.content"></span>
              </div>
            </div>
          </div>
        </transition-group>
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
    ...mapGetters(["posts", "statusMessage"])
  },
  methods: {
    ...mapMutations(["setStatusMessage"])
  },
  components: {
    Pagination
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
