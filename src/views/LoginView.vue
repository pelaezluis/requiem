<template>
  <div class="login-container">
    <BlogHeader :blog-title="$store.state.blogTitle" />
    <div class="login-content">
      <div class="login-card">
        <h2 class="login-title">{{ isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión' }}</h2>
        
        <form @submit.prevent="handleSubmit" class="login-form">
          <div class="form-group">
            <label for="username">Usuario</label>
            <input 
              type="text" 
              id="username" 
              v-model="formData.username" 
              class="form-input"
              required
              placeholder="Ingresa tu usuario"
            />
          </div>

          <div class="form-group">
            <label for="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              v-model="formData.password" 
              class="form-input"
              required
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <div v-if="isSignUp" class="form-group">
            <label for="confirmPassword">Confirmar Contraseña</label>
            <input 
              type="password" 
              id="confirmPassword" 
              v-model="formData.confirmPassword" 
              class="form-input"
              required
              placeholder="Confirma tu contraseña"
            />
          </div>

          <button type="submit" class="submit-button">
            {{ isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión' }}
          </button>
        </form>

        <div class="toggle-section">
          <p class="toggle-text">
            {{ isSignUp ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?' }}
            <a href="#" @click.prevent="toggleMode" class="toggle-link">
              {{ isSignUp ? 'Iniciar Sesión' : 'Crear Usuario' }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader.vue'

export default {
  name: 'LoginView',
  components: {
    BlogHeader
  },
  data() {
    return {
      isSignUp: false,
      formData: {
        username: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    toggleMode() {
      this.isSignUp = !this.isSignUp
      this.formData = {
        username: '',
        password: '',
        confirmPassword: ''
      }
    },
    handleSubmit() {
      if (this.isSignUp) {
        if (this.formData.password !== this.formData.confirmPassword) {
          alert('Las contraseñas no coinciden')
          return
        }
        // Lógica para crear usuario
        console.log('Crear usuario:', this.formData.username)
        alert('Usuario creado exitosamente')
      } else {
        // Lógica para login
        console.log('Login:', this.formData.username)
        alert('Inicio de sesión exitoso')
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background: #452635;
  display: flex;
  flex-direction: column;
}

.login-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
}

.login-card {
  background: #270A16;
  border-radius: 15px;
  padding: 3rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.login-title {
  font-size: 2rem;
  font-weight: 400;
  color: #d4af37;
  text-align: center;
  margin: 0 0 2rem 0;
  font-family: 'Georgia', serif;
  letter-spacing: 1px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: #e0e0e0;
  font-size: 0.95rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
}

.form-input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: #e0e0e0;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #d4af37;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.form-input::placeholder {
  color: rgba(224, 224, 224, 0.5);
}

.submit-button {
  background: linear-gradient(135deg, #d4af37, #b8941f);
  color: #1a1a1a;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3);
  font-family: 'Roboto', sans-serif;
}

.submit-button:hover {
  background: linear-gradient(135deg, #f0c674, #d4af37);
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(212, 175, 55, 0.6), 0 4px 12px rgba(0, 0, 0, 0.4);
}

.submit-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(212, 175, 55, 0.4), 0 1px 5px rgba(0, 0, 0, 0.3);
}

.toggle-section {
  margin-top: 2rem;
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
}

.toggle-text {
  color: #e0e0e0;
  font-size: 0.95rem;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

.toggle-link {
  color: #d4af37;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  margin-left: 0.5rem;
}

.toggle-link:hover {
  color: #f0c674;
  text-decoration: underline;
}

/* Mobile */
@media (max-width: 768px) {
  .login-content {
    padding: 2rem 1rem;
  }

  .login-card {
    padding: 2rem 1.5rem;
  }

  .login-title {
    font-size: 1.7rem;
  }
}

@media (max-width: 480px) {
  .login-content {
    padding: 1.5rem 1rem;
  }

  .login-card {
    padding: 1.5rem 1rem;
  }

  .login-title {
    font-size: 1.5rem;
  }

  .form-input {
    padding: 0.65rem 0.9rem;
    font-size: 0.95rem;
  }

  .submit-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
}
</style>

