<script setup lang="ts">
import HandWave from '~/components/HandWave.vue'
</script>

<template>
  <v-container class="py-16" fluid>
    <!-- HERO SEKCIA -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-8" elevation="10">
          <v-card-title class="text-h3 text-center font-weight-bold">
            <HandWave />  Vitaj na mm-smart.eu
          </v-card-title>
          <v-card-subtitle class="text-center text-grey mt-2">
            Osobný vývojový projekt s reálnym nasadením
          </v-card-subtitle>

          <v-card-text class="text-body-1 text-center mt-8">
            <div class="text-justify" style="line-height: 1.8">
              Tento projekt vznikol ako moja rýchla reakcia na ponuku pre frontend vývojára so stackom Vue 3, Nuxt 3 a Vuetify. 
              Namiesto životopisu som vytvoril plnohodnotnú aplikáciu, ktorá reálne beží na mojom Linuxovom serveri 
              cez PM2, Nginx a Cron-based Git deploy. Celé riešenie je postavené tak, ako by bežala ostrá firemná prezentácia.

              <br /><br />

              Aj keď vtomto portfoliu to nieje úplne vidieť, mám reálnu skúsenosť z IT firmy Railsformers z roku 2022, kde som pracoval ako frontend kóder 1 rok. Tvoril som html/php šablóny pre firemné closed-source CMS. 
              Robil som responzívne stránky, Bootstrap, jednoduché animácie a základy technického SEO a občas aj deploy. Dnes sa však chcem posunúť ďalej 
              – rozvíjať sa ako fullstack vývojár a zároveň pracovať s moderným Vue/Nuxt ekosystémom (ideálne full-js) a rád sa naučím aj tailwind a zaklady šablonovania na Shoptet alebo WP.

              <br /><br />

              Popri webovom vývoji budujem vlastné projekty, napr. projekt ESP32-Smarwi Controller – riadiaci systém pre inteligentné vetranie, 
              ktorý kombinuje senzoriku (DHT), OTA, WiFi API a frontend napojený na backend v AdonisJS. Nedávno som sa rozhodol prejsť 
              z Arduino IDE na plnohodnotný vývoj- PlatformIO vo VS Code, aby bol celý stack robustnejší a ľahšie škálovateľný.

              <br /><br />

              Ako ukážku skromného, ale reálne nasadeného riešenia spomínam aj web <a href="http://www.umy-ma.sk" target="_blank">umy-ma.sk</a>,
              ktorý som vytvoril pre kamarátov ako rýchlu online vizitku začiatkom minulého roka. Nie je to žiadne dizajnové ani SEO víťazstvo, ale je rýchle a lacné riešenie ktoré bolo podla špecifikacie.

              <br /><br />

              Mojím cieľom je pokračovať v reálnom vývoji, nie len v štúdiu – chcem robiť na projektoch, ktoré majú zmysel, posúvajú ma vpred a umožnia mi 
              zdokonaľovať sa v práci s moderným web stackom, backendom, DevOps nástrojmi prípadne aj IoT.
            </div>
          </v-card-text>

          <!-- CTA tlačidlá -->
          <v-card-actions class="justify-center mt-6">
            <v-btn color="secondary" to="/projects" size="large" class="mx-2" variant="outlined">
              Pozri Projekty
            </v-btn>
            <v-btn color="secondary" to="/contact" size="large" class="mx-2">
              Kontaktuj ma
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- TECH STACK – ZOSTÁVA -->
    <v-row justify="center" class="mt-12">
      <v-col cols="12" md="10">
        <v-sheet class="pa-6 text-center" color="dark" rounded>
          <h2 class="text-h5 font-weight-medium mb-4">Použivané technológie na tomto projekte</h2>
          <div class="d-flex justify-center flex-wrap my-4">
            <v-chip class="ma-1" color="primary" text-color="white">Vue 3</v-chip>
            <v-chip class="ma-1" color="primary" text-color="white">Nuxt 3</v-chip>
            <v-chip class="ma-1" color="primary" text-color="white">Vuetify 3</v-chip>
            <v-chip class="ma-1" color="primary" text-color="white">TypeScript</v-chip>
            <v-chip class="ma-1" color="primary" text-color="white">PM2 + Cron Deploy</v-chip>
            <v-chip class="ma-1" color="primary" text-color="white">Git</v-chip>
            <v-chip class="ma-1" color="primary" text-color="white">Nginx</v-chip>
            <v-chip class="ma-1" color="primary" text-color="white">Debian</v-chip>
            <v-chip class="ma-1" color="primary" text-color="white">Cloudflare</v-chip>
            <v-chip class="ma-1" color="primary" text-color="white">ChatGPT 4.0</v-chip>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
