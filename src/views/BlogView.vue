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
import BlogHeader from '@/components/BlogHeader.vue'
import BlogMain from '@/components/BlogMain.vue'

export default {
  name: 'BlogView',
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

/* Mobile optimizations */
@media (max-width: 768px) {
  .blog-container {
    overflow-x: hidden;
  }
}

@media (max-width: 480px) {
  .blog-container {
    overflow-x: hidden;
  }

  .blog-container .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
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
