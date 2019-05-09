import Vue from 'vue'
import Vuex from 'vuex'
import IPBConfig from '../ipb.config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topicId: 0, // e.g. 52794
    page: 0,
    perPage: 0,
    totalPages: 0,
    totalResults: 0,
    statusMessage: "Loading...",
    topic: {},
    posts: {}
  },
  getters: {
    posts: state => {
      return state.posts
    },
    topic: state => {
      return state.topic
    },
    statusMessage: state => {
      return state.statusMessage;
    },
    pageData: state => {
      return {'page': state.page, 'perPage': state.perPage, 'totalPages': state.totalPages, 'totalResults': state.totalResults}
    },
    topicReplyURL: state => {
      return state.topic.url + '#replyForm';
    },
    hasPosts: state => {
      return state.posts.length > 0 ? true : false;
    }
  },
  mutations: {
    setPageData(state, payload) {
      this.state.page = payload.page;
      this.state.perPage = payload.perPage;
      this.state.totalPages = payload.totalPages;
      this.state.totalResults = payload.totalResults;
    },
    setPosts(state, payload) {
      this.state.posts = payload;
    },
    setStatusMessage(state, payload) {
      this.state.statusMessage = payload;
    },
    setPageNumber(state, payload) {
      this.state.page = payload;
    },
    setTopicId(state, payload) {
      this.state.topicId = payload;
    }
  },
  actions: {
    showPage({ commit }, page) {
      commit("setPageNumber", page);
      Vue.http
        .get(
          "forums/topics/" +
          this.state.topicId +
            "/posts?page=" +
            this.state.page +
            "&key=" +
            IPBConfig.API_KEY
        )
        .then(response => {
          return response.json();
        })
        .then(data => {
          const posts = [];
          if (data.results.length > 0) {
            commit("setPageData", {
              page: data.page,
              perPage: data.perPage,
              totalPages: data.totalPages,
              totalResults: data.totalResults
            });
            for (let key in data.results) {
              if(key==0 && data.page==1) {
                commit("setStatusMessage", "No comments have been made.");
              } else {
                posts.push({
                  id: data.results[key].id,
                  content: data.results[key].content,
                  date: data.results[key].date,
                  author: data.results[key].author
                });
              }
            }
            commit("setPosts", posts);
          } else {
            commit("setStatusMessage", "No posts were found.");
          }
        })
        .catch(function(error) {
          if (!error.ok) {
            commit(
              "setStatusMessage",
              "Status " + error.status + ": " + error.statusText
            );
          }
        });
    }
  }
});
