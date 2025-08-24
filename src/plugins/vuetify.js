/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { VFileUpload } from 'vuetify/labs/VFileUpload'

export default createVuetify({
  components: {
    VFileUpload,
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#806b5a',
          secondary: '#ff8b47',
          accent: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
          success: '#10B981',
          warning: '#F59E0B',
          background: '#fcfbfa',
          surface: '#f5f7ff',
        },
      },
    },
  },
})
