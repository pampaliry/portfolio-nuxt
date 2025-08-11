import { mergeProps, withCtx, createVNode, createTextVNode, normalizeStyle, normalizeClass, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc, g as genericComponent, p as propsFactory, d as provideTheme, e as useRender, m as makeThemeProps, f as makeComponentProps } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Cw_STPlh.mjs';
import { V as VContainer, a as VRow, b as VCol, u as useBackgroundColor, c as useBorder, d as useDimension, e as useElevation, f as useLocation, g as usePosition, h as useRounded, m as makeTagProps, i as makeRoundedProps, j as makePositionProps, k as makeLocationProps, l as makeElevationProps, n as makeDimensionProps, o as makeBorderProps } from './VRow-CFg7QRFU.mjs';
import { V as VCard, a as VCardTitle, b as VCardText, c as VCardActions } from './VCard-DZwN9Hot.mjs';
import { V as VBtn } from './VBtn-BqXRMu3w.mjs';
import { V as VChip } from './VChip-B4cbLwT3.mjs';
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
import 'ipx';
import 'node:path';
import 'vue-router';
import '@iconify/vue';
import './VAvatar-u1TCwG5o.mjs';
import './index-hDE1NT8a.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    class: "handwave",
    "aria-hidden": "true"
  }, _attrs))} data-v-b21e4bcf>\u{1F44B}</span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HandWave.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b21e4bcf"]]);
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HandWave = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(VContainer, mergeProps({
    class: "py-16",
    fluid: ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section aria-label="\xDAvodn\xE1 prezent\xE1cia projektu"${_scopeId}>`);
        _push2(ssrRenderComponent(VRow, { justify: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, {
                      class: "pa-8",
                      elevation: "10",
                      tag: "article",
                      "aria-label": "\xDAvodn\xFD popis projektu"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardTitle, { class: "text-center font-weight-bold d-flex justify-center align-center flex-wrap" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<span class="d-inline-flex align-center"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_HandWave, { style: { "font-size": "1.5rem", "margin-right": "0.5rem" } }, null, _parent6, _scopeId5));
                                _push6(`<h1 class="hero-heading" aria-label="Hlavn\xFD nadpis str\xE1nky"${_scopeId5}>Vitaj na mm-smart.eu</h1></span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "d-inline-flex align-center" }, [
                                    createVNode(_component_HandWave, { style: { "font-size": "1.5rem", "margin-right": "0.5rem" } }),
                                    createVNode("h1", {
                                      class: "hero-heading",
                                      "aria-label": "Hlavn\xFD nadpis str\xE1nky"
                                    }, "Vitaj na mm-smart.eu")
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, { class: "text-body-1 text-center mt-8" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="text-justify" style="${ssrRenderStyle({ "line-height": "1.8" })}"${_scopeId5}> Tento projekt vznikol ako reakcia na pracovn\xFA ponuku pre Vue/Nuxt frontend v\xFDvoj\xE1ra. Namiesto tradi\u010Dn\xE9ho \u017Eivotopisu som sa rozhodol uk\xE1za\u0165 re\xE1lne rie\u0161enie \u2013 <strong${_scopeId5}>nasaden\xFA aplik\xE1ciu</strong>, ktor\xE1 be\u017E\xED na mojom vlastnom serveri (Debian + PM2 + Nginx + Git cron deploy), presne tak, ako by fungovala \u017Eiv\xE1 firemn\xE1 prezent\xE1cia. <br${_scopeId5}><br${_scopeId5}> M\xE1m predch\xE1dzaj\xFAcu prax ako frontend v\xFDvoj\xE1r v spolo\u010Dnosti <strong${_scopeId5}>Railsformers (2022)</strong>, kde som jeden rok vytv\xE1ral \u0161abl\xF3ny v HTML/PHP pre firemn\xE9 CMS. Pracoval som <strong${_scopeId5}>desktop-first</strong>, pou\u017E\xEDval <strong${_scopeId5}>Bootstrap</strong>, rie\u0161il z\xE1klady <strong${_scopeId5}>technick\xE9ho SEO</strong>, jednoduch\xE9 anim\xE1cie a z\xE1kladn\xFD <strong${_scopeId5}>deploy</strong>. Dnes sa akt\xEDvne pos\xFAvam k pln\xE9mu <strong${_scopeId5}>fullstack v\xFDvoju</strong>, zameran\xE9mu na <strong${_scopeId5}>modern\xFD Vue/Nuxt ekosyst\xE9m</strong>, kde pracujem s komponentov\xFDm pr\xEDstupom, TypeScriptom a DevOps n\xE1strojmi. <br${_scopeId5}><br${_scopeId5}> Popri webov\xFDch projektoch rozv\xEDjam aj vlastn\xE9 technick\xE9 experimenty, napr. <strong${_scopeId5}>ESP32-Smarwi Controller</strong> \u2013 syst\xE9m pre inteligentn\xE9 vetranie zalo\u017Een\xFD na DHT senzore, OTA aktualiz\xE1ci\xE1ch, HTTP API a backendom v AdonisJS. Kv\xF4li v\xE4\u010D\u0161ej \u0161k\xE1lovate\u013Enosti som pre\u0161iel z Arduino IDE na <strong${_scopeId5}>PlatformIO</strong> v prostred\xED VS Code. <br${_scopeId5}><br${_scopeId5}> Ako men\u0161\xED ved\u013Eaj\u0161\xED projekt spom\xEDnam aj str\xE1nku <a href="http://www.umy-ma.sk" target="_blank" rel="noopener noreferrer" aria-label="Extern\xFD odkaz na str\xE1nku umy-ma.sk"${_scopeId5}>umy-ma.sk</a>, ktor\xFA som vytvoril ako jednoduch\xFA vizitku pre kamar\xE1tov pomocou Vite. Napriek minimalistick\xE9mu pr\xEDstupu projekt sp\u013A\u0148a po\u017Eiadavky na r\xFDchle a ekonomick\xE9 nasadenie. <br${_scopeId5}><br${_scopeId5}> Ako s\xFA\u010Das\u0165 tejto pracovnej ponuky som pripravil aj mal\xFD PoC: `);
                                _push6(ssrRenderComponent(_component_NuxtLink, {
                                  to: "/ws-bpm",
                                  "aria-label": "Prejs\u0165 na WS BPM \u2013 Live WebSocket demo"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` WS BPM \u2013 Live WebSocket demo `);
                                    } else {
                                      return [
                                        createTextVNode(" WS BPM \u2013 Live WebSocket demo ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`. Str\xE1nka \u010D\xEDta \u017Eiv\xE9 \u010D\xEDsla z WebSocketu (predvolene verejn\xFD stream) a mapuje ich do BPM, aby bolo vidie\u0165 pr\xE1cu s realtime d\xE1tami a plynulou vizualiz\xE1ciou. V produkcii sa d\xE1 pripoji\u0165 vlastn\xFD .NET WebSocket cez <code${_scopeId5}>runtimeConfig.public.wsUrl</code>. <br${_scopeId5}><br${_scopeId5}> Moj\xEDm cie\u013Eom je akt\xEDvne pracova\u0165 na zmyslupln\xFDch projektoch, ktor\xE9 mi umo\u017Enia \u010Falej rozv\xEDja\u0165 svoje schopnosti ako fullstack developer, pracova\u0165 s modern\xFDm frontendom, backendom, API architekt\xFArou a pr\xEDpadne aj integrova\u0165 IoT. </div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "text-justify",
                                    style: { "line-height": "1.8" }
                                  }, [
                                    createTextVNode(" Tento projekt vznikol ako reakcia na pracovn\xFA ponuku pre Vue/Nuxt frontend v\xFDvoj\xE1ra. Namiesto tradi\u010Dn\xE9ho \u017Eivotopisu som sa rozhodol uk\xE1za\u0165 re\xE1lne rie\u0161enie \u2013 "),
                                    createVNode("strong", null, "nasaden\xFA aplik\xE1ciu"),
                                    createTextVNode(", ktor\xE1 be\u017E\xED na mojom vlastnom serveri (Debian + PM2 + Nginx + Git cron deploy), presne tak, ako by fungovala \u017Eiv\xE1 firemn\xE1 prezent\xE1cia. "),
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
                                    createTextVNode(" Ako s\xFA\u010Das\u0165 tejto pracovnej ponuky som pripravil aj mal\xFD PoC: "),
                                    createVNode(_component_NuxtLink, {
                                      to: "/ws-bpm",
                                      "aria-label": "Prejs\u0165 na WS BPM \u2013 Live WebSocket demo"
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
                                    createTextVNode(" Moj\xEDm cie\u013Eom je akt\xEDvne pracova\u0165 na zmyslupln\xFDch projektoch, ktor\xE9 mi umo\u017Enia \u010Falej rozv\xEDja\u0165 svoje schopnosti ako fullstack developer, pracova\u0165 s modern\xFDm frontendom, backendom, API architekt\xFArou a pr\xEDpadne aj integrova\u0165 IoT. ")
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardActions, { class: "justify-center mt-6" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VBtn, {
                                  color: "secondary",
                                  to: "/projects",
                                  size: "large",
                                  class: "mx-2",
                                  variant: "outlined",
                                  "aria-label": "Prejs\u0165 na projekty"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Pozri Projekty `);
                                    } else {
                                      return [
                                        createTextVNode(" Pozri Projekty ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VBtn, {
                                  color: "secondary",
                                  to: "/contact",
                                  size: "large",
                                  class: "mx-2",
                                  "aria-label": "Kontaktujte ma"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Kontaktuj ma `);
                                    } else {
                                      return [
                                        createTextVNode(" Kontaktuj ma ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
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
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardTitle, { class: "text-center font-weight-bold d-flex justify-center align-center flex-wrap" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "d-inline-flex align-center" }, [
                                  createVNode(_component_HandWave, { style: { "font-size": "1.5rem", "margin-right": "0.5rem" } }),
                                  createVNode("h1", {
                                    class: "hero-heading",
                                    "aria-label": "Hlavn\xFD nadpis str\xE1nky"
                                  }, "Vitaj na mm-smart.eu")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "text-body-1 text-center mt-8" }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "text-justify",
                                  style: { "line-height": "1.8" }
                                }, [
                                  createTextVNode(" Tento projekt vznikol ako reakcia na pracovn\xFA ponuku pre Vue/Nuxt frontend v\xFDvoj\xE1ra. Namiesto tradi\u010Dn\xE9ho \u017Eivotopisu som sa rozhodol uk\xE1za\u0165 re\xE1lne rie\u0161enie \u2013 "),
                                  createVNode("strong", null, "nasaden\xFA aplik\xE1ciu"),
                                  createTextVNode(", ktor\xE1 be\u017E\xED na mojom vlastnom serveri (Debian + PM2 + Nginx + Git cron deploy), presne tak, ako by fungovala \u017Eiv\xE1 firemn\xE1 prezent\xE1cia. "),
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
                                  createTextVNode(" Ako s\xFA\u010Das\u0165 tejto pracovnej ponuky som pripravil aj mal\xFD PoC: "),
                                  createVNode(_component_NuxtLink, {
                                    to: "/ws-bpm",
                                    "aria-label": "Prejs\u0165 na WS BPM \u2013 Live WebSocket demo"
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
                                  createTextVNode(" Moj\xEDm cie\u013Eom je akt\xEDvne pracova\u0165 na zmyslupln\xFDch projektoch, ktor\xE9 mi umo\u017Enia \u010Falej rozv\xEDja\u0165 svoje schopnosti ako fullstack developer, pracova\u0165 s modern\xFDm frontendom, backendom, API architekt\xFArou a pr\xEDpadne aj integrova\u0165 IoT. ")
                                ])
                              ]),
                              _: 1
                            }),
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, {
                        class: "pa-8",
                        elevation: "10",
                        tag: "article",
                        "aria-label": "\xDAvodn\xFD popis projektu"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "text-center font-weight-bold d-flex justify-center align-center flex-wrap" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "d-inline-flex align-center" }, [
                                createVNode(_component_HandWave, { style: { "font-size": "1.5rem", "margin-right": "0.5rem" } }),
                                createVNode("h1", {
                                  class: "hero-heading",
                                  "aria-label": "Hlavn\xFD nadpis str\xE1nky"
                                }, "Vitaj na mm-smart.eu")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "text-body-1 text-center mt-8" }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "text-justify",
                                style: { "line-height": "1.8" }
                              }, [
                                createTextVNode(" Tento projekt vznikol ako reakcia na pracovn\xFA ponuku pre Vue/Nuxt frontend v\xFDvoj\xE1ra. Namiesto tradi\u010Dn\xE9ho \u017Eivotopisu som sa rozhodol uk\xE1za\u0165 re\xE1lne rie\u0161enie \u2013 "),
                                createVNode("strong", null, "nasaden\xFA aplik\xE1ciu"),
                                createTextVNode(", ktor\xE1 be\u017E\xED na mojom vlastnom serveri (Debian + PM2 + Nginx + Git cron deploy), presne tak, ako by fungovala \u017Eiv\xE1 firemn\xE1 prezent\xE1cia. "),
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
                                createTextVNode(" Ako s\xFA\u010Das\u0165 tejto pracovnej ponuky som pripravil aj mal\xFD PoC: "),
                                createVNode(_component_NuxtLink, {
                                  to: "/ws-bpm",
                                  "aria-label": "Prejs\u0165 na WS BPM \u2013 Live WebSocket demo"
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
                                createTextVNode(" Moj\xEDm cie\u013Eom je akt\xEDvne pracova\u0165 na zmyslupln\xFDch projektoch, ktor\xE9 mi umo\u017Enia \u010Falej rozv\xEDja\u0165 svoje schopnosti ako fullstack developer, pracova\u0165 s modern\xFDm frontendom, backendom, API architekt\xFArou a pr\xEDpadne aj integrova\u0165 IoT. ")
                              ])
                            ]),
                            _: 1
                          }),
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  md: "8"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "pa-8",
                      elevation: "10",
                      tag: "article",
                      "aria-label": "\xDAvodn\xFD popis projektu"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "text-center font-weight-bold d-flex justify-center align-center flex-wrap" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "d-inline-flex align-center" }, [
                              createVNode(_component_HandWave, { style: { "font-size": "1.5rem", "margin-right": "0.5rem" } }),
                              createVNode("h1", {
                                class: "hero-heading",
                                "aria-label": "Hlavn\xFD nadpis str\xE1nky"
                              }, "Vitaj na mm-smart.eu")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "text-body-1 text-center mt-8" }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "text-justify",
                              style: { "line-height": "1.8" }
                            }, [
                              createTextVNode(" Tento projekt vznikol ako reakcia na pracovn\xFA ponuku pre Vue/Nuxt frontend v\xFDvoj\xE1ra. Namiesto tradi\u010Dn\xE9ho \u017Eivotopisu som sa rozhodol uk\xE1za\u0165 re\xE1lne rie\u0161enie \u2013 "),
                              createVNode("strong", null, "nasaden\xFA aplik\xE1ciu"),
                              createTextVNode(", ktor\xE1 be\u017E\xED na mojom vlastnom serveri (Debian + PM2 + Nginx + Git cron deploy), presne tak, ako by fungovala \u017Eiv\xE1 firemn\xE1 prezent\xE1cia. "),
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
                              createTextVNode(" Ako s\xFA\u010Das\u0165 tejto pracovnej ponuky som pripravil aj mal\xFD PoC: "),
                              createVNode(_component_NuxtLink, {
                                to: "/ws-bpm",
                                "aria-label": "Prejs\u0165 na WS BPM \u2013 Live WebSocket demo"
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
                              createTextVNode(" Moj\xEDm cie\u013Eom je akt\xEDvne pracova\u0165 na zmyslupln\xFDch projektoch, ktor\xE9 mi umo\u017Enia \u010Falej rozv\xEDja\u0165 svoje schopnosti ako fullstack developer, pracova\u0165 s modern\xFDm frontendom, backendom, API architekt\xFArou a pr\xEDpadne aj integrova\u0165 IoT. ")
                            ])
                          ]),
                          _: 1
                        }),
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
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</section><section aria-label="Zoznam pou\u017Eit\xFDch technol\xF3gi\xED"${_scopeId}>`);
        _push2(ssrRenderComponent(VRow, {
          justify: "center",
          class: "mt-12"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "10"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VSheet, {
                      class: "pa-6 text-center",
                      color: "dark",
                      rounded: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h2 class="text-h5 font-weight-medium mb-4" aria-label="Pou\u017Eit\xE9 technol\xF3gie"${_scopeId4}> Pou\u017Eit\xE9 technol\xF3gie na tomto projekte </h2><div class="d-flex justify-center flex-wrap my-4"${_scopeId4}>`);
                          _push5(ssrRenderComponent(VChip, {
                            class: "ma-1",
                            color: "primary",
                            "text-color": "white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Vue 3`);
                              } else {
                                return [
                                  createTextVNode("Vue 3")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, {
                            class: "ma-1",
                            color: "primary",
                            "text-color": "white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Nuxt 3`);
                              } else {
                                return [
                                  createTextVNode("Nuxt 3")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, {
                            class: "ma-1",
                            color: "primary",
                            "text-color": "white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Vuetify 3`);
                              } else {
                                return [
                                  createTextVNode("Vuetify 3")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, {
                            class: "ma-1",
                            color: "primary",
                            "text-color": "white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`TypeScript`);
                              } else {
                                return [
                                  createTextVNode("TypeScript")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, {
                            class: "ma-1",
                            color: "primary",
                            "text-color": "white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`PM2`);
                              } else {
                                return [
                                  createTextVNode("PM2")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, {
                            class: "ma-1",
                            color: "primary",
                            "text-color": "white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Cron Deploy`);
                              } else {
                                return [
                                  createTextVNode("Cron Deploy")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, {
                            class: "ma-1",
                            color: "primary",
                            "text-color": "white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Git`);
                              } else {
                                return [
                                  createTextVNode("Git")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, {
                            class: "ma-1",
                            color: "primary",
                            "text-color": "white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Nginx`);
                              } else {
                                return [
                                  createTextVNode("Nginx")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, {
                            class: "ma-1",
                            color: "primary",
                            "text-color": "white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Debian`);
                              } else {
                                return [
                                  createTextVNode("Debian")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, {
                            class: "ma-1",
                            color: "primary",
                            "text-color": "white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Cloudflare`);
                              } else {
                                return [
                                  createTextVNode("Cloudflare")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, {
                            class: "ma-1",
                            color: "primary",
                            "text-color": "white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`ChatGPT 4.0`);
                              } else {
                                return [
                                  createTextVNode("ChatGPT 4.0")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div>`);
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
                    }, _parent4, _scopeId3));
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  md: "10"
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
        }, _parent2, _scopeId));
        _push2(`</section>`);
      } else {
        return [
          createVNode("section", { "aria-label": "\xDAvodn\xE1 prezent\xE1cia projektu" }, [
            createVNode(VRow, { justify: "center" }, {
              default: withCtx(() => [
                createVNode(VCol, {
                  cols: "12",
                  md: "8"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "pa-8",
                      elevation: "10",
                      tag: "article",
                      "aria-label": "\xDAvodn\xFD popis projektu"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "text-center font-weight-bold d-flex justify-center align-center flex-wrap" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "d-inline-flex align-center" }, [
                              createVNode(_component_HandWave, { style: { "font-size": "1.5rem", "margin-right": "0.5rem" } }),
                              createVNode("h1", {
                                class: "hero-heading",
                                "aria-label": "Hlavn\xFD nadpis str\xE1nky"
                              }, "Vitaj na mm-smart.eu")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "text-body-1 text-center mt-8" }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "text-justify",
                              style: { "line-height": "1.8" }
                            }, [
                              createTextVNode(" Tento projekt vznikol ako reakcia na pracovn\xFA ponuku pre Vue/Nuxt frontend v\xFDvoj\xE1ra. Namiesto tradi\u010Dn\xE9ho \u017Eivotopisu som sa rozhodol uk\xE1za\u0165 re\xE1lne rie\u0161enie \u2013 "),
                              createVNode("strong", null, "nasaden\xFA aplik\xE1ciu"),
                              createTextVNode(", ktor\xE1 be\u017E\xED na mojom vlastnom serveri (Debian + PM2 + Nginx + Git cron deploy), presne tak, ako by fungovala \u017Eiv\xE1 firemn\xE1 prezent\xE1cia. "),
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
                              createTextVNode(" Ako s\xFA\u010Das\u0165 tejto pracovnej ponuky som pripravil aj mal\xFD PoC: "),
                              createVNode(_component_NuxtLink, {
                                to: "/ws-bpm",
                                "aria-label": "Prejs\u0165 na WS BPM \u2013 Live WebSocket demo"
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
                              createTextVNode(" Moj\xEDm cie\u013Eom je akt\xEDvne pracova\u0165 na zmyslupln\xFDch projektoch, ktor\xE9 mi umo\u017Enia \u010Falej rozv\xEDja\u0165 svoje schopnosti ako fullstack developer, pracova\u0165 s modern\xFDm frontendom, backendom, API architekt\xFArou a pr\xEDpadne aj integrova\u0165 IoT. ")
                            ])
                          ]),
                          _: 1
                        }),
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
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createVNode("section", { "aria-label": "Zoznam pou\u017Eit\xFDch technol\xF3gi\xED" }, [
            createVNode(VRow, {
              justify: "center",
              class: "mt-12"
            }, {
              default: withCtx(() => [
                createVNode(VCol, {
                  cols: "12",
                  md: "10"
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
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BZD0tLBe.mjs.map
