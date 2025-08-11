<template>
  <v-container class="mt-12" fluid>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-6">
          <v-card-title>Moje Projekty</v-card-title>
          <v-card-text class="d-flex flex-column ga-2">
            <a
              href="http://www.umy-ma.sk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otvoriť projekt umy-ma.sk v novom okne"
            >
              umy-ma.sk
            </a>

            <NuxtLink
              to="/ws-bpm"
              aria-label="Otvoriť WS BPM – Live WebSocket demo"
            >
              WS BPM – Live WebSocket demo
            </NuxtLink>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
