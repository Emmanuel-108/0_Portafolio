// JS config file for running front-end tests.
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: 'jsdom'
  }
})
