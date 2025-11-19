<template>
  <div 
    class="blog-card"
    :class="{ 'is-hovered': isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <div class="card-view">
      <div class="card-image-container">
        <img :src="post.image" :alt="post.title" class="card-image">
        <span v-if="isNew" class="new-badge">NUEVO</span>
        <div class="card-info-overlay" :class="{ 'visible': isHovered }">
          <div class="card-info">
            <h3 class="card-title">{{ post.title }}</h3>
            <p class="card-author">{{ post.author }}</p>
            <p class="card-description">{{ post.description }}</p>
            <router-link :to="`/post/${post.id}`" class="read-button" @click.stop>Leer</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isHovered: false,
      touchTimer: null
    }
  },
  methods: {
    handleTouchStart() {
      // En móvil, activar animación inmediatamente
      this.isHovered = true
      // Limpiar timer si existe
      if (this.touchTimer) {
        clearTimeout(this.touchTimer)
      }
    },
    handleTouchEnd() {
      // En móvil, mantener animación por un momento antes de desactivar
      this.touchTimer = setTimeout(() => {
        this.isHovered = false
      }, 3000) // Mantener visible por 3 segundos después del toque
    }
  },
  beforeUnmount() {
    // Limpiar timer al desmontar el componente
    if (this.touchTimer) {
      clearTimeout(this.touchTimer)
    }
  },
  computed: {
    isNew() {
      if (!this.post.date) return false
      const postDate = new Date(this.post.date)
      const today = new Date()
      // Resetear horas para comparar solo fechas
      today.setHours(0, 0, 0, 0)
      postDate.setHours(0, 0, 0, 0)
      const diffTime = today - postDate
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      // Solo es nuevo si fue publicado hace 3 días o menos (y no en el futuro)
      return diffDays >= 0 && diffDays <= 3
    }
  }
}
</script>

<style scoped>
.blog-card {
  margin: 1.5rem auto;
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 800px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.blog-card.is-hovered {
  transform: translateY(-10px);
}

/* Vista de Tarjeta */
.card-view {
  width: 100%;
  height: 100%;
  min-height: 800px;
  background: transparent;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  position: relative;
}

.blog-card.is-hovered .card-view {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  transform: scale(1.02);
}

.card-image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition: filter 0.5s ease, transform 0.5s ease;
  filter: blur(0px);
}

.blog-card.is-hovered .card-image {
  filter: blur(8px);
  transform: scale(1.05);
}

.card-info-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  z-index: 3;
  padding: 2rem;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

.card-info-overlay.visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.new-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.5);
  animation: pulse 2s infinite;
  z-index: 4;
  white-space: nowrap;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.card-info {
  background: rgba(39, 10, 22, 0.95);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 15px;
  position: relative;
  transition: background 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
}

.blog-card.is-hovered .card-info {
  background: rgba(58, 15, 32, 0.95);
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #f5f5dc;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.blog-card.is-hovered .card-title {
  color: #ffffff;
}

.card-author {
  font-size: 1rem;
  color: #d4af37;
  margin: 0 0 0.8rem 0;
  font-style: italic;
  transition: color 0.3s ease;
}

.blog-card.is-hovered .card-author {
  color: #f0c674;
}

.card-description {
  font-size: 0.9rem;
  color: #e0e0e0;
  margin: 0 0 1rem 0;
  line-height: 1.5;
  transition: color 0.3s ease;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.blog-card.is-hovered .card-description {
  color: #f5f5f5;
}

.read-button {
  display: block;
  text-align: center;
  text-decoration: none;
  background: linear-gradient(135deg, #d4af37, #b8941f);
  color: #1a1a1a;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  align-self: center;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3);
  width: 80%;
  position: relative;
  z-index: 10;
  pointer-events: auto;
}

.read-button:hover {
  background: linear-gradient(135deg, #f0c674, #d4af37);
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(212, 175, 55, 0.6), 0 4px 12px rgba(0, 0, 0, 0.4);
}

.read-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(212, 175, 55, 0.4), 0 1px 5px rgba(0, 0, 0, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .blog-card {
    max-width: 95%;
    margin: 1rem auto;
    height: auto;
    min-height: 650px;
  }

  .card-view {
    min-height: 650px;
  }

  .card-image-container {
    height: 100%;
  }

  .card-info-overlay {
    padding: 1.5rem;
  }

  .card-info {
    padding: 1.2rem;
  }

  .card-title {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
  }

  .card-author {
    font-size: 0.95rem;
    margin-bottom: 0.6rem;
  }

  .card-description {
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
    -webkit-line-clamp: 3;
  }

  .read-button {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
    width: 75%;
  }

  .new-badge {
    font-size: 0.7rem;
    padding: 0.35rem 0.7rem;
    top: 8px;
    right: 8px;
  }
}

@media (max-width: 480px) {
  .blog-card {
    max-width: 100%;
    margin: 0.8rem auto;
    height: auto;
    min-height: 600px;
    padding: 0 0.5rem;
  }

  .card-view {
    min-height: 600px;
    border-radius: 12px;
  }

  .card-image-container {
    height: 100%;
    border-radius: 12px;
  }

  .card-info-overlay {
    padding: 1rem;
  }

  .card-info {
    padding: 1rem;
    border-radius: 12px;
  }

  .card-title {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    line-height: 1.2;
  }

  .card-author {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }

  .card-description {
    font-size: 0.8rem;
    margin-bottom: 0.7rem;
    line-height: 1.4;
    -webkit-line-clamp: 3;
  }

  .read-button {
    padding: 0.55rem 1.2rem;
    font-size: 0.85rem;
    width: 80%;
    margin-top: 0.8rem;
  }

  .new-badge {
    font-size: 0.65rem;
    padding: 0.3rem 0.6rem;
    top: 6px;
    right: 6px;
  }

  .blog-card.is-hovered {
    transform: translateY(-5px);
  }
}
</style>
