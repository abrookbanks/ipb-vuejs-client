<template>
  <div id="app">
    <div v-if="parentUrl == ''">
    {{errorMessage}}
    </div>
    <div v-else>
      <div class="container-fluid">
        <h3>Community Discussion</h3>
        <ForumPosts/>
      </div>
    </div>
  </div>
</template>

<script>
import ForumPosts from "./components/ForumPosts";

export default {
  name: "App",
  data() {
    return {
      parentUrl: "",
      errorMessage: ""
    };
  },
  components: {
    ForumPosts
  },
  created() {
    // Only load from iframe
    if (parent !== window) {
      this.parentUrl = document.referrer;
      // Only load from accepted iframe parent
      if (!this.parentUrl.indexOf(this.$store.state.validDomain)) {
        this.errorMessage = "Access Denied (#2)";
      }
    } else {
      this.errorMessage = "Access Denied (#1)";
    }
  },
  updated() {
    // Once updated message parent iframe height
    parent.postMessage(document.body.scrollHeight, this.parentUrl);
  }
};
</script>

<style>

</style>
