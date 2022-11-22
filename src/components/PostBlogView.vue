<template>
<div class="blog-wrapper">
    <div class="blog-content">
      <div>
       <h2 v-if="blog.welcome">{{ blog.title }}</h2>
       <h2 v-else>{{ blog.title }}</h2>
       <p v-if="blog.welcome">{{blog.postBlog}}</p>
       <p class="content-preview" v-else>{{blog.blogHTML}}</p>
      </div>
    </div>
</div>
</template>

<script>
export default {
    name: "postBlog",
    props: ["blog"],
};

</script>

<style lang="scss" scoped>

</style>