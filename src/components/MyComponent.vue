<template>
  <div class="blog-container">
    <!-- Header -->
    <BlogHeader :blog-title="$store.state.blogTitle" />
    
    <!-- Main Content -->
    <BlogMain 
      :blog-posts="$store.state.blogPosts"
      :has-posts="$store.getters.hasPosts"
    />
  </div>
</template>

<script>
import BlogHeader from './BlogHeader.vue'
import BlogMain from './BlogMain.vue'

export default {
  name: 'BlogComponent',
  components: {
    BlogHeader,
    BlogMain
  }
}
</script>

<style>
/* Import Materialize CSS */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.blog-container {
  min-height: 100vh;
  background: #452635;
  color: #e0e0e0;
}

/* Loading animation for images */
.card-image img {
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>