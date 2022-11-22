<template>
  <div class="home">
   <PostBlogView :blog="welcome"/>
   <PostBlogView :blog="blog" v-for="(blog, index) in sample" :key="index"/>
 </div>
</template>

<script>
import PostBlogView from '../components/PostBlogView.vue';
export default {
 name: "Home",
 components: { PostBlogView },
 data() {
   return {
     welcome: {
       title: "Welcome",
       postBlog: "The following is a custom example and tutorial on how to setup a simple login page using Vue.js + Vuex and JWT authentication.",
       welcome: true,
       photo: "coding",
     },
     sample: [
       {
         title: "While this",
         blogHTML: "While this does merge in the PR into the master branch",
         blogPhoto: "beautiful-stories",
       },
       {
         title: "While this",
         blogHTML: "While this does merge in the PR into the master branch",
         blogPhoto: "designed-for-everything",
       },
     ]
   }
 }
};
</script>

<style lang="scss" scoped>

</style>
