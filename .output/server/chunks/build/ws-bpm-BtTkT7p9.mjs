import { defineComponent, ref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, b as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './v3-BcC2VART.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-CFg7QRFU.mjs';
import { V as VCard, a as VCardTitle, b as VCardText } from './VCard-DZwN9Hot.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './VAvatar-u1TCwG5o.mjs';
import './index-hDE1NT8a.mjs';

const DEFAULT_WS = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const width = 800;
const height = 180;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ws-bpm",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    useHead({
      title: "WS BPM \u2013 Live WebSocket demo",
      meta: [
        { name: "description", content: "\u017Div\xFD WebSocket graf s BPM hodnotou odvodenou z re\xE1lnych d\xE1t." }
      ]
    });
    const cfg = useRuntimeConfig();
    const configuredUrl = typeof ((_a = cfg.public) == null ? void 0 : _a.wsUrl) === "string" ? cfg.public.wsUrl.trim() : "";
    const wsUrl = ref(configuredUrl || DEFAULT_WS);
    const status = ref("disconnected");
    const bpm = ref(72);
    ref(72);
    const canvasRef = ref(null);
    ref(40);
    function shorten(s, head = 36, tail = 18) {
      if (s.length <= head + tail + 1) return s;
      return `${s.slice(0, head)}\u2026${s.slice(-tail)}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "py-12",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "10",
                    lg: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          class: "pa-6",
                          elevation: "8",
                          role: "region",
                          "aria-label": "Live WebSocket BPM"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, { class: "d-flex align-center justify-space-between flex-wrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-h5" data-v-970d7ed6${_scopeId5}>WebSocket BPM (minimal)</span><div class="text-medium-emphasis" aria-live="polite" data-v-970d7ed6${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VChip, {
                                      color: status.value === "connected" ? "green" : status.value === "connecting" ? "orange" : status.value === "error" ? "red" : "grey",
                                      size: "small",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(status.value)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(status.value), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    if (status.value !== "disconnected") {
                                      _push6(`<span data-v-970d7ed6${_scopeId5}><small data-v-970d7ed6${_scopeId5}>WS: <code data-v-970d7ed6${_scopeId5}>${ssrInterpolate(shorten(wsUrl.value))}</code></small></span>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-h5" }, "WebSocket BPM (minimal)"),
                                      createVNode("div", {
                                        class: "text-medium-emphasis",
                                        "aria-live": "polite"
                                      }, [
                                        createVNode(VChip, {
                                          color: status.value === "connected" ? "green" : status.value === "connecting" ? "orange" : status.value === "error" ? "red" : "grey",
                                          size: "small",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(status.value), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["color"]),
                                        status.value !== "disconnected" ? (openBlock(), createBlock("span", { key: 0 }, [
                                          createVNode("small", null, [
                                            createTextVNode("WS: "),
                                            createVNode("code", null, toDisplayString(shorten(wsUrl.value)), 1)
                                          ])
                                        ])) : createCommentVNode("", true)
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex align-center mb-4" data-v-970d7ed6${_scopeId5}><strong data-v-970d7ed6${_scopeId5}>BPM:</strong>`);
                                    _push6(ssrRenderComponent(VChip, {
                                      size: "small",
                                      color: "primary",
                                      class: "ml-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(Math.round(bpm.value))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(Math.round(bpm.value)), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div><div class="chart-wrap" role="img" aria-label="Historick\xFD priebeh BPM z WebSocketu" data-v-970d7ed6${_scopeId5}><canvas class="chart"${ssrRenderAttr("width", width)}${ssrRenderAttr("height", height)} data-v-970d7ed6${_scopeId5}></canvas></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex align-center mb-4" }, [
                                        createVNode("strong", null, "BPM:"),
                                        createVNode(VChip, {
                                          size: "small",
                                          color: "primary",
                                          class: "ml-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(Math.round(bpm.value)), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", {
                                        class: "chart-wrap",
                                        role: "img",
                                        "aria-label": "Historick\xFD priebeh BPM z WebSocketu"
                                      }, [
                                        createVNode("canvas", {
                                          ref_key: "canvasRef",
                                          ref: canvasRef,
                                          class: "chart",
                                          width,
                                          height
                                        }, null, 512)
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, { class: "d-flex align-center justify-space-between flex-wrap" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-h5" }, "WebSocket BPM (minimal)"),
                                    createVNode("div", {
                                      class: "text-medium-emphasis",
                                      "aria-live": "polite"
                                    }, [
                                      createVNode(VChip, {
                                        color: status.value === "connected" ? "green" : status.value === "connecting" ? "orange" : status.value === "error" ? "red" : "grey",
                                        size: "small",
                                        class: "mr-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(status.value), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["color"]),
                                      status.value !== "disconnected" ? (openBlock(), createBlock("span", { key: 0 }, [
                                        createVNode("small", null, [
                                          createTextVNode("WS: "),
                                          createVNode("code", null, toDisplayString(shorten(wsUrl.value)), 1)
                                        ])
                                      ])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center mb-4" }, [
                                      createVNode("strong", null, "BPM:"),
                                      createVNode(VChip, {
                                        size: "small",
                                        color: "primary",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(Math.round(bpm.value)), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", {
                                      class: "chart-wrap",
                                      role: "img",
                                      "aria-label": "Historick\xFD priebeh BPM z WebSocketu"
                                    }, [
                                      createVNode("canvas", {
                                        ref_key: "canvasRef",
                                        ref: canvasRef,
                                        class: "chart",
                                        width,
                                        height
                                      }, null, 512)
                                    ])
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
                            class: "pa-6",
                            elevation: "8",
                            role: "region",
                            "aria-label": "Live WebSocket BPM"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "d-flex align-center justify-space-between flex-wrap" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-h5" }, "WebSocket BPM (minimal)"),
                                  createVNode("div", {
                                    class: "text-medium-emphasis",
                                    "aria-live": "polite"
                                  }, [
                                    createVNode(VChip, {
                                      color: status.value === "connected" ? "green" : status.value === "connecting" ? "orange" : status.value === "error" ? "red" : "grey",
                                      size: "small",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(status.value), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["color"]),
                                    status.value !== "disconnected" ? (openBlock(), createBlock("span", { key: 0 }, [
                                      createVNode("small", null, [
                                        createTextVNode("WS: "),
                                        createVNode("code", null, toDisplayString(shorten(wsUrl.value)), 1)
                                      ])
                                    ])) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex align-center mb-4" }, [
                                    createVNode("strong", null, "BPM:"),
                                    createVNode(VChip, {
                                      size: "small",
                                      color: "primary",
                                      class: "ml-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(Math.round(bpm.value)), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", {
                                    class: "chart-wrap",
                                    role: "img",
                                    "aria-label": "Historick\xFD priebeh BPM z WebSocketu"
                                  }, [
                                    createVNode("canvas", {
                                      ref_key: "canvasRef",
                                      ref: canvasRef,
                                      class: "chart",
                                      width,
                                      height
                                    }, null, 512)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "10",
                      lg: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "pa-6",
                          elevation: "8",
                          role: "region",
                          "aria-label": "Live WebSocket BPM"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "d-flex align-center justify-space-between flex-wrap" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-h5" }, "WebSocket BPM (minimal)"),
                                createVNode("div", {
                                  class: "text-medium-emphasis",
                                  "aria-live": "polite"
                                }, [
                                  createVNode(VChip, {
                                    color: status.value === "connected" ? "green" : status.value === "connecting" ? "orange" : status.value === "error" ? "red" : "grey",
                                    size: "small",
                                    class: "mr-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(status.value), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"]),
                                  status.value !== "disconnected" ? (openBlock(), createBlock("span", { key: 0 }, [
                                    createVNode("small", null, [
                                      createTextVNode("WS: "),
                                      createVNode("code", null, toDisplayString(shorten(wsUrl.value)), 1)
                                    ])
                                  ])) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center mb-4" }, [
                                  createVNode("strong", null, "BPM:"),
                                  createVNode(VChip, {
                                    size: "small",
                                    color: "primary",
                                    class: "ml-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(Math.round(bpm.value)), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", {
                                  class: "chart-wrap",
                                  role: "img",
                                  "aria-label": "Historick\xFD priebeh BPM z WebSocketu"
                                }, [
                                  createVNode("canvas", {
                                    ref_key: "canvasRef",
                                    ref: canvasRef,
                                    class: "chart",
                                    width,
                                    height
                                  }, null, 512)
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
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "10",
                    lg: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        class: "pa-6",
                        elevation: "8",
                        role: "region",
                        "aria-label": "Live WebSocket BPM"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "d-flex align-center justify-space-between flex-wrap" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-h5" }, "WebSocket BPM (minimal)"),
                              createVNode("div", {
                                class: "text-medium-emphasis",
                                "aria-live": "polite"
                              }, [
                                createVNode(VChip, {
                                  color: status.value === "connected" ? "green" : status.value === "connecting" ? "orange" : status.value === "error" ? "red" : "grey",
                                  size: "small",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(status.value), 1)
                                  ]),
                                  _: 1
                                }, 8, ["color"]),
                                status.value !== "disconnected" ? (openBlock(), createBlock("span", { key: 0 }, [
                                  createVNode("small", null, [
                                    createTextVNode("WS: "),
                                    createVNode("code", null, toDisplayString(shorten(wsUrl.value)), 1)
                                  ])
                                ])) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center mb-4" }, [
                                createVNode("strong", null, "BPM:"),
                                createVNode(VChip, {
                                  size: "small",
                                  color: "primary",
                                  class: "ml-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(Math.round(bpm.value)), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", {
                                class: "chart-wrap",
                                role: "img",
                                "aria-label": "Historick\xFD priebeh BPM z WebSocketu"
                              }, [
                                createVNode("canvas", {
                                  ref_key: "canvasRef",
                                  ref: canvasRef,
                                  class: "chart",
                                  width,
                                  height
                                }, null, 512)
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
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ws-bpm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wsBpm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-970d7ed6"]]);

export { wsBpm as default };
//# sourceMappingURL=ws-bpm-BtTkT7p9.mjs.map
