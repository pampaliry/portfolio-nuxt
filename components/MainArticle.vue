<template>
  <v-container>
    <v-row>
      <v-card-text class="text-body-1 text-center mt-8">
              <article class="text-justify" style="line-height: 1.8">
                Tento projekt vznikol ako reakcia na pracovnú ponuku pre Vue/Nuxt frontend vývojára. 
                Namiesto tradičného životopisu som sa rozhodol ukázať reálne riešenie – <strong>nasadenú aplikáciu</strong>, ktorá beží na mojom vlastnom serveri 
                (Debian + PM2 + Nginx + Git cron deploy), presne tak, ako by fungovala živá firemná prezentácia.

                <br><br>

                              Ako súčasť tejto pracovnej ponuky som pripravil aj malý PoC:
                <NuxtLink to="/projects" aria-label="Prejsť Projekty – Live WebSocket demo">
                  WS BPM – Live WebSocket demo
                </NuxtLink>.
                Stránka číta živé čísla z WebSocketu (predvolene verejný stream) a mapuje ich do BPM, 
                aby bolo vidieť prácu s realtime dátami a plynulou vizualizáciou. 
                V produkcii sa dá pripojiť vlastný .NET WebSocket cez <code>runtimeConfig.public.wsUrl</code>.

                <br><br>

                Mám predchádzajúcu prax ako frontend vývojár v spoločnosti <strong>Railsformers (2022)</strong>, kde som jeden rok vytváral šablóny v HTML/PHP pre firemné CMS. 
                Pracoval som <strong>desktop-first</strong>, používal <strong>Bootstrap</strong>, riešil základy <strong>technického SEO</strong>, jednoduché animácie a základný <strong>deploy</strong>. 
                Dnes sa aktívne posúvam k plnému <strong>fullstack vývoju</strong>, zameranému na <strong>moderný Vue/Nuxt ekosystém</strong>, kde pracujem s komponentovým prístupom, TypeScriptom a DevOps nástrojmi.

                <br><br>

                Popri webových projektoch rozvíjam aj vlastné technické experimenty, napr. <strong>ESP32-Smarwi Controller</strong> – systém pre inteligentné vetranie založený na DHT senzore, OTA aktualizáciách, HTTP API a backendom v AdonisJS. 
                Kvôli väčšej škálovateľnosti som prešiel z Arduino IDE na <strong>PlatformIO</strong> v prostredí VS Code.

                <br><br>

                Ako menší vedľajší projekt spomínam aj stránku 
                <a href="http://www.umy-ma.sk" target="_blank" rel="noopener noreferrer" aria-label="Externý odkaz na stránku umy-ma.sk">umy-ma.sk</a>, ktorú som vytvoril ako jednoduchú vizitku pre kamarátov pomocou Vite. 
                Napriek minimalistickému prístupu projekt spĺňa požiadavky na rýchle a ekonomické nasadenie.

                <br><br>
                

                Mojím cieľom je aktívne pracovať na zmysluplných projektoch, ktoré mi umožnia ďalej rozvíjať svoje schopnosti ako fullstack developer, 
                pracovať s moderným frontendom, backendom, API architektúrou a prípadne aj integrovať IoT.
              </article>
            </v-card-text>
    </v-row>
  </v-container>
</template>