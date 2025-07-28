import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-DCOYHosu.mjs';
import { V as VCard, a as VCardTitle, c as VCardText } from './VCard-VeHGIjMK.mjs';
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
import './VAvatar-DicBVOBd.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VContainer, mergeProps({
    class: "mt-12",
    fluid: ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, { class: "pa-6" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardTitle, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Moje Projekty`);
                              } else {
                                return [
                                  createTextVNode("Moje Projekty")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<a href="http://www.umy-ma.sk" target="_blank"${_scopeId5}>umy-ma.sk</a>`);
                              } else {
                                return [
                                  createVNode("a", {
                                    href: "http://www.umy-ma.sk",
                                    target: "_blank"
                                  }, "umy-ma.sk")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Moje Projekty")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("a", {
                                  href: "http://www.umy-ma.sk",
                                  target: "_blank"
                                }, "umy-ma.sk")
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
                      createVNode(VCard, { class: "pa-6" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Moje Projekty")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("a", {
                                href: "http://www.umy-ma.sk",
                                target: "_blank"
                              }, "umy-ma.sk")
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
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "pa-6" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Moje Projekty")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("a", {
                              href: "http://www.umy-ma.sk",
                              target: "_blank"
                            }, "umy-ma.sk")
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
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "pa-6" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Moje Projekty")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: "http://www.umy-ma.sk",
                            target: "_blank"
                          }, "umy-ma.sk")
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { projects as default };
//# sourceMappingURL=projects-D3D4Yngj.mjs.map
