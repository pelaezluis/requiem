<template>
  <nav class="navbar navbar-expand-lg blog-header">
    <div class="container-fluid header-wrapper">
      <router-link class="navbar-brand blog-title" to="/">{{ blogTitle }}</router-link>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNavAltMarkup" 
        aria-controls="navbarNavAltMarkup" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto blog-nav">
          <router-link class="nav-link" to="/">Inicio</router-link>
          <router-link class="nav-link" to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BlogHeader',
  props: {
    blogTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.blog-header {
  background: rgba(39, 10, 22, 0.95) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.2) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 0 !important;
  min-height: 70px;
  height: auto;
}

.header-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.4rem 2rem !important;
  min-height: 70px;
  display: flex;
  align-items: center;
}

.container-fluid.header-wrapper {
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}

.navbar-brand.blog-title {
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
  color: #d4af37 !important;
  font-family: 'Georgia', serif;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  padding: 0 !important;
}

.navbar-brand.blog-title:hover {
  color: #f0c674 !important;
}

.navbar-brand.blog-title.router-link-active {
  color: #d4af37 !important;
}

.navbar-toggler {
  border: 1px solid rgba(212, 175, 55, 0.3) !important;
  padding: 0.25rem 0.5rem;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(212, 175, 55, 0.85)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}

.navbar-collapse {
  background: rgba(39, 10, 22, 0.95);
}

.blog-nav {
  display: flex;
  gap: 0;
  align-items: center;
  background: rgba(39, 10, 22, 0.95) !important;
}

.blog-nav .nav-link {
  color: #e0e0e0 !important;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.6rem 1.5rem !important;
  transition: color 0.3s ease, background 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Roboto', sans-serif;
  background: rgba(39, 10, 22, 0.95) !important;
  position: relative;
  border: none !important;
  box-shadow: none !important;
}

.blog-nav .nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #d4af37;
  transition: width 0.3s ease;
}

.blog-nav .nav-link:hover {
  color: #d4af37 !important;
  background: rgba(58, 15, 32, 0.95) !important;
}

.blog-nav .nav-link:hover::after {
  width: calc(100% - 3rem);
}

.blog-nav .nav-link.router-link-active {
  color: #d4af37 !important;
}

.blog-nav .nav-link.router-link-active::after {
  width: calc(100% - 3rem);
}

/* Mobile */
@media (max-width: 768px) {
  .blog-header {
    min-height: 60px;
  }

  .header-wrapper {
    padding: 1.2rem 1.5rem !important;
    min-height: 60px;
  }

  .navbar-brand.blog-title {
    font-size: 1.5rem;
    letter-spacing: 0.5px;
  }

  .blog-nav .nav-link {
    font-size: 0.9rem;
    padding: 0.5rem 1.2rem !important;
  }

  .blog-nav .nav-link:hover::after {
    width: calc(100% - 2.4rem);
  }
}

@media (max-width: 480px) {
  .blog-header {
    min-height: 55px;
  }

  .header-wrapper {
    padding: 1rem 1rem !important;
    min-height: 55px;
  }

  .navbar-brand.blog-title {
    font-size: 1.3rem;
  }

  .blog-nav .nav-link {
    font-size: 0.85rem;
    padding: 0.4rem 1rem !important;
  }

  .blog-nav .nav-link:hover::after {
    width: calc(100% - 2rem);
  }
}
</style>
