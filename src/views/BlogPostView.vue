<template>
  <div class="blog-post-container">
    <BlogHeader :blog-title="$store.state.blogTitle" />
    
    <div v-if="post" class="blog-post-content">
      <div class="post-header">
        <button @click="goBack" class="back-button">
          ← Volver
        </button>
        <div class="post-meta">
          <span v-if="isNew" class="new-badge">NUEVO</span>
          <span class="post-date">{{ formattedDate }}</span>
        </div>
      </div>

      <div class="post-image-container">
        <img :src="post.image" :alt="post.title" class="post-image">
      </div>

      <article class="post-article">
        <h1 class="post-title">{{ post.title }}</h1>
        <p class="post-author">Por {{ post.author }}</p>
        
        <div class="post-body" v-html="post.content"></div>
      </article>
    </div>

    <div v-else class="not-found">
      <h2>Entrada no encontrada</h2>
      <router-link to="/" class="back-link">Volver al inicio</router-link>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader.vue'

export default {
  name: 'BlogPostView',
  components: {
    BlogHeader
  },
  computed: {
    postId() {
      return parseInt(this.$route.params.id)
    },
    post() {
      return this.$store.state.blogPosts.find(p => p.id === this.postId)
    },
    isNew() {
      if (!this.post) return false
      const postDate = new Date(this.post.date)
      const today = new Date()
      const diffTime = Math.abs(today - postDate)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays <= 3
    },
    formattedDate() {
      if (!this.post) return ''
      const date = new Date(this.post.date)
      return date.toLocaleDateString('es-ES', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }
  },
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.blog-post-container {
  min-height: 100vh;
  background: #452635;
  color: #e0e0e0;
}

.blog-post-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.back-button {
  background: rgba(212, 175, 55, 0.2);
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: #d4af37;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(212, 175, 55, 0.3);
  border-color: #d4af37;
  transform: translateX(-3px);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.new-badge {
  background: linear-gradient(135deg, #d4af37, #b8941f);
  color: #1a1a1a;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 2px 8px rgba(212, 175, 55, 0.4);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.post-date {
  color: rgba(224, 224, 224, 0.7);
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
}

.post-image-container {
  width: 100%;
  max-width: 500px;
  height: 700px;
  margin: 0 auto 3rem auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.post-article {
  background: #270A16;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.post-title {
  font-size: 2.5rem;
  font-weight: 400;
  color: #d4af37;
  margin: 0 0 1rem 0;
  font-family: 'Georgia', serif;
  letter-spacing: 1px;
  line-height: 1.3;
}

.post-author {
  font-size: 1.1rem;
  color: rgba(224, 224, 224, 0.8);
  margin: 0 0 2.5rem 0;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}

.post-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #e0e0e0;
  font-family: 'Roboto', sans-serif;
}

.post-body :deep(p) {
  margin: 0 0 1.5rem 0;
}

.post-body :deep(p:last-child) {
  margin-bottom: 0;
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.not-found h2 {
  color: #d4af37;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: 'Georgia', serif;
}

.back-link {
  color: #d4af37;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #f0c674;
  text-decoration: underline;
}

/* Mobile */
@media (max-width: 768px) {
  .blog-post-content {
    padding: 1.5rem 1rem;
  }

  .post-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .post-image-container {
    max-width: 400px;
    height: 550px;
    margin-bottom: 2rem;
  }

  .post-article {
    padding: 2rem 1.5rem;
  }

  .post-title {
    font-size: 2rem;
  }

  .post-body {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .blog-post-content {
    padding: 1rem 0.75rem;
  }

  .post-image-container {
    max-width: 100%;
    height: 450px;
    border-radius: 10px;
  }

  .post-article {
    padding: 1.5rem 1rem;
  }

  .post-title {
    font-size: 1.7rem;
  }

  .post-author {
    font-size: 1rem;
  }

  .post-body {
    font-size: 0.95rem;
    line-height: 1.6;
  }
}
</style>

