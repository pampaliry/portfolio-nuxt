<template>
  <v-app>

    <!-- NAVIGATION -->
    <v-app-bar flat app role="navigation" aria-label="Hlavná navigácia">
      <v-container>
        <v-row align="center" no-gutters>
          <!-- Logo -->
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon
              class="d-sm-none"
              aria-label="Zobraziť navigačné menu"
              @click="drawer = !drawer"
            />
            <v-toolbar-title class="ml-2">
              <LogoRotate aria-hidden="true" />
            </v-toolbar-title>
          </v-col>

          <!-- Desktop menu -->
          <v-col class="d-none d-sm-flex justify-end">
            <v-btn
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              variant="text"
              class="mx-1 text-secondary"
              :aria-label="`Navigácia na stránku ${link.name}`"
            >
              {{ link.name }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- MOBILE DRAWER -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="d-sm-none"
      width="220"
      role="navigation"
      aria-label="Mobilné menu"
    >
      <v-list nav dense>
        <v-list-item
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :aria-label="`Navigácia na stránku ${link.name}`"
          link
          @click="drawer = false"
        >
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- MAIN CONTENT -->
    <v-main role="main">
      <NuxtPage />
    </v-main>

    <!-- FOOTER (minimal version) -->
    <v-footer app class="text-center text-secondary" role="contentinfo">
      <v-container>
        <small>&copy; {{ new Date().getFullYear() }} Matus Matko – Všetky práva vyhradené.</small>
      </v-container>
    </v-footer>

  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const navLinks = [
  { name: 'Domov', path: '/' },
  { name: 'Projekty', path: '/projects' },
  { name: 'Kontakt', path: '/contact' },
]
</script>
