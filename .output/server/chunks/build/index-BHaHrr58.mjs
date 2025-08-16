import { mergeProps, withCtx, createVNode, createTextVNode, normalizeStyle, normalizeClass, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, g as genericComponent, p as propsFactory, d as provideTheme, e as useRender, m as makeThemeProps, f as makeComponentProps } from './server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-Cw_STPlh.mjs';
import { V as VRow, a as VCol, b as VContainer, c as VBtn } from './VBtn-B1WctSWM.mjs';
import { V as VCard, a as VCardTitle, b as VCardText, c as VCardActions } from './VCard-CqzqaKvH.mjs';
import { u as useBackgroundColor, a as useBorder, b as useDimension, c as useElevation, d as useLocation, e as usePosition, f as useRounded, m as makeTagProps, g as makeRoundedProps, h as makePositionProps, i as makeLocationProps, j as makeElevationProps, k as makeDimensionProps, l as makeBorderProps } from './index-7__kU7K4.mjs';
import { V as VChip } from './VChip-Dg-CYuYB.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:module';
import 'ipx';
import 'node:path';
import 'vue-router';
import '@iconify/vue';

const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    class: "handwave",
    "aria-hidden": "true"
  }, _attrs))} data-v-b21e4bcf>\u{1F44B}</span>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HandWave.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-b21e4bcf"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(ssrRenderComponent(VContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCardText, { class: "text-body-1 text-center mt-8" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<article class="text-justify" style="${ssrRenderStyle({ "line-height": "1.8" })}"${_scopeId3}> Tento projekt vznikol ako reakcia na pracovn\xFA ponuku pre Vue/Nuxt frontend v\xFDvoj\xE1ra. Namiesto tradi\u010Dn\xE9ho \u017Eivotopisu som sa rozhodol uk\xE1za\u0165 re\xE1lne rie\u0161enie \u2013 <strong${_scopeId3}>nasaden\xFA aplik\xE1ciu</strong>, ktor\xE1 be\u017E\xED na mojom vlastnom serveri (Debian + PM2 + Nginx + Git cron deploy), presne tak, ako by fungovala \u017Eiv\xE1 firemn\xE1 prezent\xE1cia. <br${_scopeId3}><br${_scopeId3}> Ako s\xFA\u010Das\u0165 tejto pracovnej ponuky som pripravil aj mal\xFD PoC: `);
                    _push4(ssrRenderComponent(_component_NuxtLink, {
                      to: "/projects",
                      "aria-label": "Prejs\u0165 Projekty \u2013 Live WebSocket demo"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` WS BPM \u2013 Live WebSocket demo `);
                        } else {
                          return [
                            createTextVNode(" WS BPM \u2013 Live WebSocket demo ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`. Str\xE1nka \u010D\xEDta \u017Eiv\xE9 \u010D\xEDsla z WebSocketu (predvolene verejn\xFD stream) a mapuje ich do BPM, aby bolo vidie\u0165 pr\xE1cu s realtime d\xE1tami a plynulou vizualiz\xE1ciou. V produkcii sa d\xE1 pripoji\u0165 vlastn\xFD .NET WebSocket cez <code${_scopeId3}>runtimeConfig.public.wsUrl</code>. <br${_scopeId3}><br${_scopeId3}> M\xE1m predch\xE1dzaj\xFAcu prax ako frontend v\xFDvoj\xE1r v spolo\u010Dnosti <strong${_scopeId3}>Railsformers (2022)</strong>, kde som jeden rok vytv\xE1ral \u0161abl\xF3ny v HTML/PHP pre firemn\xE9 CMS. Pracoval som <strong${_scopeId3}>desktop-first</strong>, pou\u017E\xEDval <strong${_scopeId3}>Bootstrap</strong>, rie\u0161il z\xE1klady <strong${_scopeId3}>technick\xE9ho SEO</strong>, jednoduch\xE9 anim\xE1cie a z\xE1kladn\xFD <strong${_scopeId3}>deploy</strong>. Dnes sa akt\xEDvne pos\xFAvam k pln\xE9mu <strong${_scopeId3}>fullstack v\xFDvoju</strong>, zameran\xE9mu na <strong${_scopeId3}>modern\xFD Vue/Nuxt ekosyst\xE9m</strong>, kde pracujem s komponentov\xFDm pr\xEDstupom, TypeScriptom a DevOps n\xE1strojmi. <br${_scopeId3}><br${_scopeId3}> Popri webov\xFDch projektoch rozv\xEDjam aj vlastn\xE9 technick\xE9 experimenty, napr. <strong${_scopeId3}>ESP32-Smarwi Controller</strong> \u2013 syst\xE9m pre inteligentn\xE9 vetranie zalo\u017Een\xFD na DHT senzore, OTA aktualiz\xE1ci\xE1ch, HTTP API a backendom v AdonisJS. Kv\xF4li v\xE4\u010D\u0161ej \u0161k\xE1lovate\u013Enosti som pre\u0161iel z Arduino IDE na <strong${_scopeId3}>PlatformIO</strong> v prostred\xED VS Code. <br${_scopeId3}><br${_scopeId3}> Ako men\u0161\xED ved\u013Eaj\u0161\xED projekt spom\xEDnam aj str\xE1nku <a href="http://www.umy-ma.sk" target="_blank" rel="noopener noreferrer" aria-label="Extern\xFD odkaz na str\xE1nku umy-ma.sk"${_scopeId3}>umy-ma.sk</a>, ktor\xFA som vytvoril ako jednoduch\xFA vizitku pre kamar\xE1tov pomocou Vite. Napriek minimalistick\xE9mu pr\xEDstupu projekt sp\u013A\u0148a po\u017Eiadavky na r\xFDchle a ekonomick\xE9 nasadenie. <br${_scopeId3}><br${_scopeId3}> Moj\xEDm cie\u013Eom je akt\xEDvne pracova\u0165 na zmyslupln\xFDch projektoch, ktor\xE9 mi umo\u017Enia \u010Falej rozv\xEDja\u0165 svoje schopnosti ako fullstack developer, pracova\u0165 s modern\xFDm frontendom, backendom, API architekt\xFArou a pr\xEDpadne aj integrova\u0165 IoT. </article>`);
                  } else {
                    return [
                      createVNode("article", {
                        class: "text-justify",
                        style: { "line-height": "1.8" }
                      }, [
                        createTextVNode(" Tento projekt vznikol ako reakcia na pracovn\xFA ponuku pre Vue/Nuxt frontend v\xFDvoj\xE1ra. Namiesto tradi\u010Dn\xE9ho \u017Eivotopisu som sa rozhodol uk\xE1za\u0165 re\xE1lne rie\u0161enie \u2013 "),
                        createVNode("strong", null, "nasaden\xFA aplik\xE1ciu"),
                        createTextVNode(", ktor\xE1 be\u017E\xED na mojom vlastnom serveri (Debian + PM2 + Nginx + Git cron deploy), presne tak, ako by fungovala \u017Eiv\xE1 firemn\xE1 prezent\xE1cia. "),
                        createVNode("br"),
                        createVNode("br"),
                        createTextVNode(" Ako s\xFA\u010Das\u0165 tejto pracovnej ponuky som pripravil aj mal\xFD PoC: "),
                        createVNode(_component_NuxtLink, {
                          to: "/projects",
                          "aria-label": "Prejs\u0165 Projekty \u2013 Live WebSocket demo"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" WS BPM \u2013 Live WebSocket demo ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(". Str\xE1nka \u010D\xEDta \u017Eiv\xE9 \u010D\xEDsla z WebSocketu (predvolene verejn\xFD stream) a mapuje ich do BPM, aby bolo vidie\u0165 pr\xE1cu s realtime d\xE1tami a plynulou vizualiz\xE1ciou. V produkcii sa d\xE1 pripoji\u0165 vlastn\xFD .NET WebSocket cez "),
                        createVNode("code", null, "runtimeConfig.public.wsUrl"),
                        createTextVNode(". "),
                        createVNode("br"),
                        createVNode("br"),
                        createTextVNode(" M\xE1m predch\xE1dzaj\xFAcu prax ako frontend v\xFDvoj\xE1r v spolo\u010Dnosti "),
                        createVNode("strong", null, "Railsformers (2022)"),
                        createTextVNode(", kde som jeden rok vytv\xE1ral \u0161abl\xF3ny v HTML/PHP pre firemn\xE9 CMS. Pracoval som "),
                        createVNode("strong", null, "desktop-first"),
                        createTextVNode(", pou\u017E\xEDval "),
                        createVNode("strong", null, "Bootstrap"),
                        createTextVNode(", rie\u0161il z\xE1klady "),
                        createVNode("strong", null, "technick\xE9ho SEO"),
                        createTextVNode(", jednoduch\xE9 anim\xE1cie a z\xE1kladn\xFD "),
                        createVNode("strong", null, "deploy"),
                        createTextVNode(". Dnes sa akt\xEDvne pos\xFAvam k pln\xE9mu "),
                        createVNode("strong", null, "fullstack v\xFDvoju"),
                        createTextVNode(", zameran\xE9mu na "),
                        createVNode("strong", null, "modern\xFD Vue/Nuxt ekosyst\xE9m"),
                        createTextVNode(", kde pracujem s komponentov\xFDm pr\xEDstupom, TypeScriptom a DevOps n\xE1strojmi. "),
                        createVNode("br"),
                        createVNode("br"),
                        createTextVNode(" Popri webov\xFDch projektoch rozv\xEDjam aj vlastn\xE9 technick\xE9 experimenty, napr. "),
                        createVNode("strong", null, "ESP32-Smarwi Controller"),
                        createTextVNode(" \u2013 syst\xE9m pre inteligentn\xE9 vetranie zalo\u017Een\xFD na DHT senzore, OTA aktualiz\xE1ci\xE1ch, HTTP API a backendom v AdonisJS. Kv\xF4li v\xE4\u010D\u0161ej \u0161k\xE1lovate\u013Enosti som pre\u0161iel z Arduino IDE na "),
                        createVNode("strong", null, "PlatformIO"),
                        createTextVNode(" v prostred\xED VS Code. "),
                        createVNode("br"),
                        createVNode("br"),
                        createTextVNode(" Ako men\u0161\xED ved\u013Eaj\u0161\xED projekt spom\xEDnam aj str\xE1nku "),
                        createVNode("a", {
                          href: "http://www.umy-ma.sk",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": "Extern\xFD odkaz na str\xE1nku umy-ma.sk"
                        }, "umy-ma.sk"),
                        createTextVNode(", ktor\xFA som vytvoril ako jednoduch\xFA vizitku pre kamar\xE1tov pomocou Vite. Napriek minimalistick\xE9mu pr\xEDstupu projekt sp\u013A\u0148a po\u017Eiadavky na r\xFDchle a ekonomick\xE9 nasadenie. "),
                        createVNode("br"),
                        createVNode("br"),
                        createTextVNode(" Moj\xEDm cie\u013Eom je akt\xEDvne pracova\u0165 na zmyslupln\xFDch projektoch, ktor\xE9 mi umo\u017Enia \u010Falej rozv\xEDja\u0165 svoje schopnosti ako fullstack developer, pracova\u0165 s modern\xFDm frontendom, backendom, API architekt\xFArou a pr\xEDpadne aj integrova\u0165 IoT. ")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCardText, { class: "text-body-1 text-center mt-8" }, {
                  default: withCtx(() => [
                    createVNode("article", {
                      class: "text-justify",
                      style: { "line-height": "1.8" }
                    }, [
                      createTextVNode(" Tento projekt vznikol ako reakcia na pracovn\xFA ponuku pre Vue/Nuxt frontend v\xFDvoj\xE1ra. Namiesto tradi\u010Dn\xE9ho \u017Eivotopisu som sa rozhodol uk\xE1za\u0165 re\xE1lne rie\u0161enie \u2013 "),
                      createVNode("strong", null, "nasaden\xFA aplik\xE1ciu"),
                      createTextVNode(", ktor\xE1 be\u017E\xED na mojom vlastnom serveri (Debian + PM2 + Nginx + Git cron deploy), presne tak, ako by fungovala \u017Eiv\xE1 firemn\xE1 prezent\xE1cia. "),
                      createVNode("br"),
                      createVNode("br"),
                      createTextVNode(" Ako s\xFA\u010Das\u0165 tejto pracovnej ponuky som pripravil aj mal\xFD PoC: "),
                      createVNode(_component_NuxtLink, {
                        to: "/projects",
                        "aria-label": "Prejs\u0165 Projekty \u2013 Live WebSocket demo"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" WS BPM \u2013 Live WebSocket demo ")
                        ]),
                        _: 1
                      }),
                      createTextVNode(". Str\xE1nka \u010D\xEDta \u017Eiv\xE9 \u010D\xEDsla z WebSocketu (predvolene verejn\xFD stream) a mapuje ich do BPM, aby bolo vidie\u0165 pr\xE1cu s realtime d\xE1tami a plynulou vizualiz\xE1ciou. V produkcii sa d\xE1 pripoji\u0165 vlastn\xFD .NET WebSocket cez "),
                      createVNode("code", null, "runtimeConfig.public.wsUrl"),
                      createTextVNode(". "),
                      createVNode("br"),
                      createVNode("br"),
                      createTextVNode(" M\xE1m predch\xE1dzaj\xFAcu prax ako frontend v\xFDvoj\xE1r v spolo\u010Dnosti "),
                      createVNode("strong", null, "Railsformers (2022)"),
                      createTextVNode(", kde som jeden rok vytv\xE1ral \u0161abl\xF3ny v HTML/PHP pre firemn\xE9 CMS. Pracoval som "),
                      createVNode("strong", null, "desktop-first"),
                      createTextVNode(", pou\u017E\xEDval "),
                      createVNode("strong", null, "Bootstrap"),
                      createTextVNode(", rie\u0161il z\xE1klady "),
                      createVNode("strong", null, "technick\xE9ho SEO"),
                      createTextVNode(", jednoduch\xE9 anim\xE1cie a z\xE1kladn\xFD "),
                      createVNode("strong", null, "deploy"),
                      createTextVNode(". Dnes sa akt\xEDvne pos\xFAvam k pln\xE9mu "),
                      createVNode("strong", null, "fullstack v\xFDvoju"),
                      createTextVNode(", zameran\xE9mu na "),
                      createVNode("strong", null, "modern\xFD Vue/Nuxt ekosyst\xE9m"),
                      createTextVNode(", kde pracujem s komponentov\xFDm pr\xEDstupom, TypeScriptom a DevOps n\xE1strojmi. "),
                      createVNode("br"),
                      createVNode("br"),
                      createTextVNode(" Popri webov\xFDch projektoch rozv\xEDjam aj vlastn\xE9 technick\xE9 experimenty, napr. "),
                      createVNode("strong", null, "ESP32-Smarwi Controller"),
                      createTextVNode(" \u2013 syst\xE9m pre inteligentn\xE9 vetranie zalo\u017Een\xFD na DHT senzore, OTA aktualiz\xE1ci\xE1ch, HTTP API a backendom v AdonisJS. Kv\xF4li v\xE4\u010D\u0161ej \u0161k\xE1lovate\u013Enosti som pre\u0161iel z Arduino IDE na "),
                      createVNode("strong", null, "PlatformIO"),
                      createTextVNode(" v prostred\xED VS Code. "),
                      createVNode("br"),
                      createVNode("br"),
                      createTextVNode(" Ako men\u0161\xED ved\u013Eaj\u0161\xED projekt spom\xEDnam aj str\xE1nku "),
                      createVNode("a", {
                        href: "http://www.umy-ma.sk",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Extern\xFD odkaz na str\xE1nku umy-ma.sk"
                      }, "umy-ma.sk"),
                      createTextVNode(", ktor\xFA som vytvoril ako jednoduch\xFA vizitku pre kamar\xE1tov pomocou Vite. Napriek minimalistick\xE9mu pr\xEDstupu projekt sp\u013A\u0148a po\u017Eiadavky na r\xFDchle a ekonomick\xE9 nasadenie. "),
                      createVNode("br"),
                      createVNode("br"),
                      createTextVNode(" Moj\xEDm cie\u013Eom je akt\xEDvne pracova\u0165 na zmyslupln\xFDch projektoch, ktor\xE9 mi umo\u017Enia \u010Falej rozv\xEDja\u0165 svoje schopnosti ako fullstack developer, pracova\u0165 s modern\xFDm frontendom, backendom, API architekt\xFArou a pr\xEDpadne aj integrova\u0165 IoT. ")
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCardText, { class: "text-body-1 text-center mt-8" }, {
                default: withCtx(() => [
                  createVNode("article", {
                    class: "text-justify",
                    style: { "line-height": "1.8" }
                  }, [
                    createTextVNode(" Tento projekt vznikol ako reakcia na pracovn\xFA ponuku pre Vue/Nuxt frontend v\xFDvoj\xE1ra. Namiesto tradi\u010Dn\xE9ho \u017Eivotopisu som sa rozhodol uk\xE1za\u0165 re\xE1lne rie\u0161enie \u2013 "),
                    createVNode("strong", null, "nasaden\xFA aplik\xE1ciu"),
                    createTextVNode(", ktor\xE1 be\u017E\xED na mojom vlastnom serveri (Debian + PM2 + Nginx + Git cron deploy), presne tak, ako by fungovala \u017Eiv\xE1 firemn\xE1 prezent\xE1cia. "),
                    createVNode("br"),
                    createVNode("br"),
                    createTextVNode(" Ako s\xFA\u010Das\u0165 tejto pracovnej ponuky som pripravil aj mal\xFD PoC: "),
                    createVNode(_component_NuxtLink, {
                      to: "/projects",
                      "aria-label": "Prejs\u0165 Projekty \u2013 Live WebSocket demo"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" WS BPM \u2013 Live WebSocket demo ")
                      ]),
                      _: 1
                    }),
                    createTextVNode(". Str\xE1nka \u010D\xEDta \u017Eiv\xE9 \u010D\xEDsla z WebSocketu (predvolene verejn\xFD stream) a mapuje ich do BPM, aby bolo vidie\u0165 pr\xE1cu s realtime d\xE1tami a plynulou vizualiz\xE1ciou. V produkcii sa d\xE1 pripoji\u0165 vlastn\xFD .NET WebSocket cez "),
                    createVNode("code", null, "runtimeConfig.public.wsUrl"),
                    createTextVNode(". "),
                    createVNode("br"),
                    createVNode("br"),
                    createTextVNode(" M\xE1m predch\xE1dzaj\xFAcu prax ako frontend v\xFDvoj\xE1r v spolo\u010Dnosti "),
                    createVNode("strong", null, "Railsformers (2022)"),
                    createTextVNode(", kde som jeden rok vytv\xE1ral \u0161abl\xF3ny v HTML/PHP pre firemn\xE9 CMS. Pracoval som "),
                    createVNode("strong", null, "desktop-first"),
                    createTextVNode(", pou\u017E\xEDval "),
                    createVNode("strong", null, "Bootstrap"),
                    createTextVNode(", rie\u0161il z\xE1klady "),
                    createVNode("strong", null, "technick\xE9ho SEO"),
                    createTextVNode(", jednoduch\xE9 anim\xE1cie a z\xE1kladn\xFD "),
                    createVNode("strong", null, "deploy"),
                    createTextVNode(". Dnes sa akt\xEDvne pos\xFAvam k pln\xE9mu "),
                    createVNode("strong", null, "fullstack v\xFDvoju"),
                    createTextVNode(", zameran\xE9mu na "),
                    createVNode("strong", null, "modern\xFD Vue/Nuxt ekosyst\xE9m"),
                    createTextVNode(", kde pracujem s komponentov\xFDm pr\xEDstupom, TypeScriptom a DevOps n\xE1strojmi. "),
                    createVNode("br"),
                    createVNode("br"),
                    createTextVNode(" Popri webov\xFDch projektoch rozv\xEDjam aj vlastn\xE9 technick\xE9 experimenty, napr. "),
                    createVNode("strong", null, "ESP32-Smarwi Controller"),
                    createTextVNode(" \u2013 syst\xE9m pre inteligentn\xE9 vetranie zalo\u017Een\xFD na DHT senzore, OTA aktualiz\xE1ci\xE1ch, HTTP API a backendom v AdonisJS. Kv\xF4li v\xE4\u010D\u0161ej \u0161k\xE1lovate\u013Enosti som pre\u0161iel z Arduino IDE na "),
                    createVNode("strong", null, "PlatformIO"),
                    createTextVNode(" v prostred\xED VS Code. "),
                    createVNode("br"),
                    createVNode("br"),
                    createTextVNode(" Ako men\u0161\xED ved\u013Eaj\u0161\xED projekt spom\xEDnam aj str\xE1nku "),
                    createVNode("a", {
                      href: "http://www.umy-ma.sk",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": "Extern\xFD odkaz na str\xE1nku umy-ma.sk"
                    }, "umy-ma.sk"),
                    createTextVNode(", ktor\xFA som vytvoril ako jednoduch\xFA vizitku pre kamar\xE1tov pomocou Vite. Napriek minimalistick\xE9mu pr\xEDstupu projekt sp\u013A\u0148a po\u017Eiadavky na r\xFDchle a ekonomick\xE9 nasadenie. "),
                    createVNode("br"),
                    createVNode("br"),
                    createTextVNode(" Moj\xEDm cie\u013Eom je akt\xEDvne pracova\u0165 na zmyslupln\xFDch projektoch, ktor\xE9 mi umo\u017Enia \u010Falej rozv\xEDja\u0165 svoje schopnosti ako fullstack developer, pracova\u0165 s modern\xFDm frontendom, backendom, API architekt\xFArou a pr\xEDpadne aj integrova\u0165 IoT. ")
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainArticle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VContainer, mergeProps({
    class: "mt-12",
    fluid: ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, { justify: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCardActions, { class: "justify-center mt-6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VBtn, {
                      color: "secondary",
                      to: "/projects",
                      size: "large",
                      class: "mx-2",
                      variant: "outlined",
                      "aria-label": "Prejs\u0165 na projekty"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Pozri Projekty `);
                        } else {
                          return [
                            createTextVNode(" Pozri Projekty ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VBtn, {
                      color: "secondary",
                      to: "/contact",
                      size: "large",
                      class: "mx-2",
                      "aria-label": "Kontaktujte ma"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Kontaktuj ma `);
                        } else {
                          return [
                            createTextVNode(" Kontaktuj ma ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VBtn, {
                        color: "secondary",
                        to: "/projects",
                        size: "large",
                        class: "mx-2",
                        variant: "outlined",
                        "aria-label": "Prejs\u0165 na projekty"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Pozri Projekty ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "secondary",
                        to: "/contact",
                        size: "large",
                        class: "mx-2",
                        "aria-label": "Kontaktujte ma"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Kontaktuj ma ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCardActions, { class: "justify-center mt-6" }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      color: "secondary",
                      to: "/projects",
                      size: "large",
                      class: "mx-2",
                      variant: "outlined",
                      "aria-label": "Prejs\u0165 na projekty"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Pozri Projekty ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "secondary",
                      to: "/contact",
                      size: "large",
                      class: "mx-2",
                      "aria-label": "Kontaktujte ma"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Kontaktuj ma ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, { justify: "center" }, {
            default: withCtx(() => [
              createVNode(VCardActions, { class: "justify-center mt-6" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    color: "secondary",
                    to: "/projects",
                    size: "large",
                    class: "mx-2",
                    variant: "outlined",
                    "aria-label": "Prejs\u0165 na projekty"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Pozri Projekty ")
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    color: "secondary",
                    to: "/contact",
                    size: "large",
                    class: "mx-2",
                    "aria-label": "Kontaktujte ma"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Kontaktuj ma ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToAction.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_HandWave = __nuxt_component_0$1;
  const _component_MainArticle = __nuxt_component_1$1;
  const _component_CallToAction = __nuxt_component_2;
  _push(ssrRenderComponent(VCard, mergeProps({
    class: "pa-8",
    elevation: "10",
    "aria-label": "\xDAvodn\xFD popis projektu"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { class: "text-center d-flex justify-center align-center flex-wrap" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="d-inline-flex align-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_HandWave, { style: { "font-size": "1.5rem", "margin-right": "0.5rem" } }, null, _parent3, _scopeId2));
              _push3(`<h1 aria-label="Hlavn\xFD nadpis str\xE1nky"${_scopeId2}>Vitaj na mm-smart.eu</h1></span>`);
            } else {
              return [
                createVNode("span", { class: "d-inline-flex align-center" }, [
                  createVNode(_component_HandWave, { style: { "font-size": "1.5rem", "margin-right": "0.5rem" } }),
                  createVNode("h1", { "aria-label": "Hlavn\xFD nadpis str\xE1nky" }, "Vitaj na mm-smart.eu")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_MainArticle, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CallToAction, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardTitle, { class: "text-center d-flex justify-center align-center flex-wrap" }, {
            default: withCtx(() => [
              createVNode("span", { class: "d-inline-flex align-center" }, [
                createVNode(_component_HandWave, { style: { "font-size": "1.5rem", "margin-right": "0.5rem" } }),
                createVNode("h1", { "aria-label": "Hlavn\xFD nadpis str\xE1nky" }, "Vitaj na mm-smart.eu")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_MainArticle),
          createVNode(_component_CallToAction)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style])
    }, slots));
    return {};
  }
});
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRow, mergeProps({
    justify: "center",
    class: "mt-12"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "10",
          lg: "8"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VSheet, {
                class: "pa-6 text-center",
                color: "dark",
                rounded: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h2 class="text-h5 font-weight-medium mb-4" aria-label="Pou\u017Eit\xE9 technol\xF3gie"${_scopeId3}> Pou\u017Eit\xE9 technol\xF3gie na tomto projekte </h2><div class="d-flex justify-center flex-wrap my-4"${_scopeId3}>`);
                    _push4(ssrRenderComponent(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Vue 3`);
                        } else {
                          return [
                            createTextVNode("Vue 3")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Nuxt 3`);
                        } else {
                          return [
                            createTextVNode("Nuxt 3")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Vuetify 3`);
                        } else {
                          return [
                            createTextVNode("Vuetify 3")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`TypeScript`);
                        } else {
                          return [
                            createTextVNode("TypeScript")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`PM2`);
                        } else {
                          return [
                            createTextVNode("PM2")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Cron Deploy`);
                        } else {
                          return [
                            createTextVNode("Cron Deploy")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Git`);
                        } else {
                          return [
                            createTextVNode("Git")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Nginx`);
                        } else {
                          return [
                            createTextVNode("Nginx")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Debian`);
                        } else {
                          return [
                            createTextVNode("Debian")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Cloudflare`);
                        } else {
                          return [
                            createTextVNode("Cloudflare")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`ChatGPT 4.0`);
                        } else {
                          return [
                            createTextVNode("ChatGPT 4.0")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("h2", {
                        class: "text-h5 font-weight-medium mb-4",
                        "aria-label": "Pou\u017Eit\xE9 technol\xF3gie"
                      }, " Pou\u017Eit\xE9 technol\xF3gie na tomto projekte "),
                      createVNode("div", { class: "d-flex justify-center flex-wrap my-4" }, [
                        createVNode(VChip, {
                          class: "ma-1",
                          color: "primary",
                          "text-color": "white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Vue 3")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, {
                          class: "ma-1",
                          color: "primary",
                          "text-color": "white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Nuxt 3")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, {
                          class: "ma-1",
                          color: "primary",
                          "text-color": "white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Vuetify 3")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, {
                          class: "ma-1",
                          color: "primary",
                          "text-color": "white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("TypeScript")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, {
                          class: "ma-1",
                          color: "primary",
                          "text-color": "white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("PM2")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, {
                          class: "ma-1",
                          color: "primary",
                          "text-color": "white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cron Deploy")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, {
                          class: "ma-1",
                          color: "primary",
                          "text-color": "white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Git")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, {
                          class: "ma-1",
                          color: "primary",
                          "text-color": "white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Nginx")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, {
                          class: "ma-1",
                          color: "primary",
                          "text-color": "white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Debian")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, {
                          class: "ma-1",
                          color: "primary",
                          "text-color": "white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cloudflare")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, {
                          class: "ma-1",
                          color: "primary",
                          "text-color": "white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("ChatGPT 4.0")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VSheet, {
                  class: "pa-6 text-center",
                  color: "dark",
                  rounded: ""
                }, {
                  default: withCtx(() => [
                    createVNode("h2", {
                      class: "text-h5 font-weight-medium mb-4",
                      "aria-label": "Pou\u017Eit\xE9 technol\xF3gie"
                    }, " Pou\u017Eit\xE9 technol\xF3gie na tomto projekte "),
                    createVNode("div", { class: "d-flex justify-center flex-wrap my-4" }, [
                      createVNode(VChip, {
                        class: "ma-1",
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Vue 3")
                        ]),
                        _: 1
                      }),
                      createVNode(VChip, {
                        class: "ma-1",
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Nuxt 3")
                        ]),
                        _: 1
                      }),
                      createVNode(VChip, {
                        class: "ma-1",
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Vuetify 3")
                        ]),
                        _: 1
                      }),
                      createVNode(VChip, {
                        class: "ma-1",
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("TypeScript")
                        ]),
                        _: 1
                      }),
                      createVNode(VChip, {
                        class: "ma-1",
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("PM2")
                        ]),
                        _: 1
                      }),
                      createVNode(VChip, {
                        class: "ma-1",
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cron Deploy")
                        ]),
                        _: 1
                      }),
                      createVNode(VChip, {
                        class: "ma-1",
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Git")
                        ]),
                        _: 1
                      }),
                      createVNode(VChip, {
                        class: "ma-1",
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Nginx")
                        ]),
                        _: 1
                      }),
                      createVNode(VChip, {
                        class: "ma-1",
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Debian")
                        ]),
                        _: 1
                      }),
                      createVNode(VChip, {
                        class: "ma-1",
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cloudflare")
                        ]),
                        _: 1
                      }),
                      createVNode(VChip, {
                        class: "ma-1",
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("ChatGPT 4.0")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCol, {
            cols: "10",
            lg: "8"
          }, {
            default: withCtx(() => [
              createVNode(VSheet, {
                class: "pa-6 text-center",
                color: "dark",
                rounded: ""
              }, {
                default: withCtx(() => [
                  createVNode("h2", {
                    class: "text-h5 font-weight-medium mb-4",
                    "aria-label": "Pou\u017Eit\xE9 technol\xF3gie"
                  }, " Pou\u017Eit\xE9 technol\xF3gie na tomto projekte "),
                  createVNode("div", { class: "d-flex justify-center flex-wrap my-4" }, [
                    createVNode(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Vue 3")
                      ]),
                      _: 1
                    }),
                    createVNode(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Nuxt 3")
                      ]),
                      _: 1
                    }),
                    createVNode(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Vuetify 3")
                      ]),
                      _: 1
                    }),
                    createVNode(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("TypeScript")
                      ]),
                      _: 1
                    }),
                    createVNode(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("PM2")
                      ]),
                      _: 1
                    }),
                    createVNode(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cron Deploy")
                      ]),
                      _: 1
                    }),
                    createVNode(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Git")
                      ]),
                      _: 1
                    }),
                    createVNode(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Nginx")
                      ]),
                      _: 1
                    }),
                    createVNode(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Debian")
                      ]),
                      _: 1
                    }),
                    createVNode(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cloudflare")
                      ]),
                      _: 1
                    }),
                    createVNode(VChip, {
                      class: "ma-1",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("ChatGPT 4.0")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TechnologyStack.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeroSection = __nuxt_component_0;
  const _component_TechnologyStack = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}><section aria-label="\xDAvodn\xE1 prezent\xE1cia projektu">`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(`</section><section aria-label="Zoznam pou\u017Eit\xFDch technol\xF3gi\xED">`);
  _push(ssrRenderComponent(_component_TechnologyStack, null, null, _parent));
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BHaHrr58.mjs.map
