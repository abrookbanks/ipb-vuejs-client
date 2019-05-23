<template>
  <div id="app" data-tid="49390">
      <h3 id="scroll-to">Community Discussion</h3>
      <ForumPosts/>
  </div>
</template>

<script>
import ForumPosts from "./components/ForumPosts";
import { mapMutations } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapMutations(["setTopicId"])
  },
  components: {
    ForumPosts
  },
  mounted() {
    this.setTopicId(window.topicId);
    this.$store.dispatch("showPage", 1);
  }
};
</script>

<style>

</style>
