<template>
  <main class="blog-main">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <!-- No posts message -->
          <EmptyState v-if="!hasPosts" />
          
          <!-- Blog posts grid -->
          <div v-else class="blog-posts">
            <div class="row">
              <div 
                v-for="post in blogPosts" 
                :key="post.id" 
                class="col s12 m6 l4"
              >
                <BlogCard :post="post" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BlogCard from './BlogCard.vue'
import EmptyState from './EmptyState.vue'

export default {
  name: 'BlogMain',
  components: {
    BlogCard,
    EmptyState
  },
  props: {
    blogPosts: {
      type: Array,
      required: true
    },
    hasPosts: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.blog-main {
  padding: 3rem 0;
}

.blog-posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.blog-posts .row {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.blog-posts .col {
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.blog-posts .col .blog-card {
  width: 100%;
  height: 100%;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .blog-main {
    padding: 2rem 0;
  }

  .blog-posts {
    gap: 2.5rem;
  }

  .blog-posts .row {
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  .blog-posts .col {
    width: 100%;
    max-width: 100%;
    flex: 0 0 100%;
  }
}

@media (max-width: 480px) {
  .blog-main {
    padding: 1.5rem 0;
  }

  .blog-posts {
    gap: 3rem;
  }

  .blog-posts .row {
    gap: 3rem;
    margin: 0;
  }

  .blog-posts .col {
    padding: 0;
  }
}
</style>
