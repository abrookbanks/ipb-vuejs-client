<template>
  <div>
      <div v-if="posts.length > 0">
        <transition-group name="fade" tag="div">
          <div v-for="(post, index) in posts" :key="index" class="post-body">
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
    ...mapGetters(["posts", "topic", "statusMessage"])
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
