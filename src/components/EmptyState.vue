<template>
  <div class="no-posts">
    <div class="antique-mirror-frame">
      <div class="frame-image">
        <div class="empty-image">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Espejo Vacío">
        </div>
        <img src="@/assets/frame_post.png" alt="Marco Antiguo" class="frame-bg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyState'
}
</script>

<style scoped>
.no-posts {
  text-align: center;
  margin: 2rem 0;
}

.antique-mirror-frame {
  margin: 2rem auto;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
}

.frame-image {
  position: relative;
  display: inline-block;
  width: 50vw;
  min-width: 600px;
  max-width: 1200px;
  height: 600px;
}

.frame-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  filter: drop-shadow(0 25px 60px rgba(139, 69, 19, 0.9));
  transition: all 0.4s ease;
  pointer-events: none;
}

.antique-mirror-frame:hover .frame-bg {
  filter: drop-shadow(0 35px 80px rgba(139, 69, 19, 1));
  transform: scale(1.02);
}

.empty-image {
  position: absolute;
  top: 15%;
  left: 15%;
  right: 15%;
  bottom: 15%;
  z-index: 1;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.empty-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  border-radius: 18px;
  filter: grayscale(0.3) sepia(0.2);
}

.antique-mirror-frame:hover .empty-image img {
  transform: scale(1.1);
  filter: grayscale(0.1) sepia(0.1);
}

@media (max-width: 768px) {
  .frame-image {
    width: 90vw;
    min-width: 400px;
    max-width: 800px;
    height: 450px;
  }
  
  .empty-image {
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
  }
}
</style>
