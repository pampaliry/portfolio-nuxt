<script setup lang="ts">
import HandWave from '~/components/HandWave.vue'
</script>

<template>
  <v-container class="py-16" fluid>
    <!-- HERO SEKCIA -->
    <section>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-8" elevation="10" tag="article">
            <v-card-title class="text-center font-weight-bold d-flex justify-center align-center flex-wrap">
              <span class="d-inline-flex align-center">
                <HandWave style="font-size: 1.5rem; margin-right: 0.5rem;" />
                <h1 class="hero-heading">Vitaj na mm-smart.eu</h1>
              </span>
            </v-card-title>

            <v-card-subtitle class="text-center text-grey mt-2">
              Portfolio s reálnym backendom, nasadením a plne responzívnym UI
            </v-card-subtitle>

            <v-card-text class="text-body-1 text-center mt-8">
              <div class="text-justify" style="line-height: 1.8">
                Tento projekt vznikol ako reakcia na pracovnú ponuku pre Vue/Nuxt frontend vývojára. 
                Namiesto tradičného životopisu som sa rozhodol ukázať reálne riešenie – <strong>nasadenú aplikáciu</strong>, ktorá beží na mojom vlastnom serveri 
                (Debian + PM2 + Nginx + Git cron deploy), presne tak, ako by fungovala živá firemná prezentácia.

                <br /><br />

                Mám predchádzajúcu prax ako frontend vývojár v spoločnosti <strong>Railsformers (2022)</strong>, kde som jeden rok vytváral šablóny v HTML/PHP pre firemné CMS. 
                Pracoval som <strong>desktop-first</strong>, používal <strong>Bootstrap</strong>, riešil základy <strong>technického SEO</strong>, jednoduché animácie a základný <strong>deploy</strong>. 
                Dnes sa aktívne posúvam k plnému <strong>fullstack vývoju</strong>, zameranému na <strong>moderný Vue/Nuxt ekosystém</strong>, kde pracujem s komponentovým prístupom, TypeScriptom a DevOps nástrojmi.

                <br /><br />

                Popri webových projektoch rozvíjam aj vlastné technické experimenty, napr. <strong>ESP32-Smarwi Controller</strong> – systém pre inteligentné vetranie založený na DHT senzore, OTA aktualizáciách, HTTP API a backendom v AdonisJS. 
                Kvôli väčšej škálovateľnosti som prešiel z Arduino IDE na <strong>PlatformIO</strong> v prostredí VS Code.

                <br /><br />

                Ako menší vedľajší projekt spomínam aj stránku 
                <a href="http://www.umy-ma.sk" target="_blank" rel="noopener noreferrer">umy-ma.sk</a>, ktorú som vytvoril ako jednoduchú vizitku pre kamarátov pomocou Vite. 
                Napriek minimalistickému prístupu projekt spĺňa požiadavky na rýchle a ekonomické nasadenie.

                <br /><br />

                Mojím cieľom je aktívne pracovať na zmysluplných projektoch, ktoré mi umožnia ďalej rozvíjať svoje schopnosti ako fullstack developer, 
                pracovať s moderným frontendom, backendom, API architektúrou a prípadne aj integrovať IoT.
              </div>
            </v-card-text>

            <!-- CTA TLAČIDLÁ -->
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
    </section>

    <!-- TECH STACK -->
    <section>
      <v-row justify="center" class="mt-12">
        <v-col cols="12" md="10">
          <v-sheet class="pa-6 text-center" color="dark" rounded>
            <h2 class="text-h5 font-weight-medium mb-4">
              Použité technológie na tomto projekte
            </h2>
            <div class="d-flex justify-center flex-wrap my-4">
              <v-chip class="ma-1" color="primary" text-color="white">Vue 3</v-chip>
              <v-chip class="ma-1" color="primary" text-color="white">Nuxt 3</v-chip>
              <v-chip class="ma-1" color="primary" text-color="white">Vuetify 3</v-chip>
              <v-chip class="ma-1" color="primary" text-color="white">TypeScript</v-chip>
              <v-chip class="ma-1" color="primary" text-color="white">PM2</v-chip>
              <v-chip class="ma-1" color="primary" text-color="white">Cron Deploy</v-chip>
              <v-chip class="ma-1" color="primary" text-color="white">Git</v-chip>
              <v-chip class="ma-1" color="primary" text-color="white">Nginx</v-chip>
              <v-chip class="ma-1" color="primary" text-color="white">Debian</v-chip>
              <v-chip class="ma-1" color="primary" text-color="white">Cloudflare</v-chip>
              <v-chip class="ma-1" color="primary" text-color="white">ChatGPT 4.0</v-chip>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<style scoped>
.hero-heading {
  font-size: clamp(1.25rem, 4vw, 2.25rem);
  line-height: 1.3;
  word-break: break-word;
  white-space: normal;
}
.v-card-subtitle {
  white-space: normal;
  overflow: visible;
  font-size: clamp(0.9rem, 2.5vw, 1.25rem) ;
}
</style>
