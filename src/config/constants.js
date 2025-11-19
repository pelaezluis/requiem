// Blog Configuration Constants
export const BLOG_CONFIG = {
  TITLE: 'Cry Love Cry',
  DESCRIPTION: 'Un blog sobre la melancolía y la belleza de los sentimientos',
  AUTHOR: 'Luis',
  VERSION: '1.0.0'
}

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.VUE_APP_API_URL || 'http://localhost:3000',
  TIMEOUT: 10000,
  ENDPOINTS: {
    POSTS: '/posts',
    AUTH: '/auth',
    USERS: '/users'
  }
}

// UI Configuration
export const UI_CONFIG = {
  ANIMATION_DURATION: 400,
  HOVER_DELAY: 200,
  FRAME_SIZE: {
    MIN_WIDTH: 400,
    MAX_WIDTH: 800,
    VIEWPORT_WIDTH: '30vw'
  }
}

// Theme Colors
export const COLORS = {
  PRIMARY: '#8b4513',
  SECONDARY: '#a0522d',
  ACCENT: '#f4d03f',
  BACKGROUND: '#1a1a1a',
  SURFACE: '#2d2d2d',
  TEXT: '#e0e0e0',
  TEXT_SECONDARY: '#b0b0b0'
}

