<template>
  <v-app>
    <v-app-bar flat>
      <v-container>
        <v-row align="center" no-gutters>
          <v-col>
            <v-toolbar-title>Moje Portfólio</v-toolbar-title>
          </v-col>
          <v-col class="text-end">
            <v-btn
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              variant="text"
              class="mx-1 text-secondary"
            >
              {{ link.name }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const navLinks = [
  { name: 'Domov', path: '/' },
  { name: 'Projekty', path: '/projects' },
  { name: 'Kontakt', path: '/contact' }
]
</script>
