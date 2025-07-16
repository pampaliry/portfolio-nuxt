import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, normalizeStyle, normalizeClass, toRef, computed, withDirectives, createElementVNode, vShow, Fragment, toDisplayString, useSSRContext, shallowRef } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc, g as genericComponent, p as propsFactory, q as provideTheme, j as useRender, v as useLocale, w as useProxiedModel, l as makeThemeProps, d as makeComponentProps, E as EventProp, I as IconValue, m as makeDisplayProps, e as useRtl, f as useDisplay, h as useResizeObserver, i as useGoTo, o as deepEqual, s as provideDefaults, k as focusableChildren } from './server.mjs';
import { V as VContainer, a as VRow, b as VCol, u as useBackgroundColor, c as useBorder, d as useDimension, e as useElevation, f as useLocation, g as usePosition, h as useRounded, R as Ripple, i as useDensity, j as useSize, k as useLink, l as useVariant, m as genOverlays, n as VIcon, o as VDefaultsProvider, p as makeTagProps, q as makeRoundedProps, r as makePositionProps, s as makeLocationProps, t as makeElevationProps, v as makeDimensionProps, w as makeBorderProps, x as makeVariantProps, y as makeSizeProps, z as makeRouterProps, A as makeDensityProps } from './VRow-Dd_o8jJm.mjs';
import { V as VCard, a as VCardTitle, b as VCardSubtitle, c as VCardText, d as VCardActions, e as VAvatar } from './VCard-CsJpHSqn.mjs';
import { V as VBtn, u as useGroupItem, a as VExpandXTransition, m as makeGroupItemProps, b as makeGroupProps, c as useGroup, d as VFadeTransition } from './index-DiU10oiO.mjs';
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
import './createSimpleFunctional-0JI4Xxm9.mjs';
import './VImg-GDnS_asi.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "handwave" }, _attrs))} data-v-9b9dc041>\u{1F44B}</span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HandWave.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HandWave = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9b9dc041"]]);
function calculateUpdatedTarget(_ref) {
  let {
    selectedElement,
    containerElement,
    isRtl,
    isHorizontal
  } = _ref;
  const containerSize = getOffsetSize(isHorizontal, containerElement);
  const scrollPosition = getScrollPosition(isHorizontal, isRtl, containerElement);
  const childrenSize = getOffsetSize(isHorizontal, selectedElement);
  const childrenStartPosition = getOffsetPosition(isHorizontal, selectedElement);
  const additionalOffset = childrenSize * 0.4;
  if (scrollPosition > childrenStartPosition) {
    return childrenStartPosition - additionalOffset;
  } else if (scrollPosition + containerSize < childrenStartPosition + childrenSize) {
    return childrenStartPosition - containerSize + childrenSize + additionalOffset;
  }
  return scrollPosition;
}
function getScrollSize(isHorizontal, element) {
  const key = isHorizontal ? "scrollWidth" : "scrollHeight";
  return (element == null ? void 0 : element[key]) || 0;
}
function getClientSize(isHorizontal, element) {
  const key = isHorizontal ? "clientWidth" : "clientHeight";
  return (element == null ? void 0 : element[key]) || 0;
}
function getScrollPosition(isHorizontal, rtl, element) {
  if (!element) {
    return 0;
  }
  const {
    scrollLeft,
    offsetWidth,
    scrollWidth
  } = element;
  if (isHorizontal) {
    return rtl ? scrollWidth - offsetWidth + scrollLeft : scrollLeft;
  }
  return element.scrollTop;
}
function getOffsetSize(isHorizontal, element) {
  const key = isHorizontal ? "offsetWidth" : "offsetHeight";
  return (element == null ? void 0 : element[key]) || 0;
}
function getOffsetPosition(isHorizontal, element) {
  const key = isHorizontal ? "offsetLeft" : "offsetTop";
  return (element == null ? void 0 : element[key]) || 0;
}
const VSlideGroupSymbol = Symbol.for("vuetify:v-slide-group");
const makeVSlideGroupProps = propsFactory({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: VSlideGroupSymbol
  },
  nextIcon: {
    type: IconValue,
    default: "$next"
  },
  prevIcon: {
    type: IconValue,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || ["always", "desktop", "mobile"].includes(v)
  },
  ...makeComponentProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeTagProps(),
  ...makeGroupProps({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup");
const VSlideGroup = genericComponent()({
  name: "VSlideGroup",
  props: makeVSlideGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const group = useGroup(props, props.symbol);
    const isOverflowing = shallowRef(false);
    const scrollOffset = shallowRef(0);
    const containerSize = shallowRef(0);
    shallowRef(0);
    const isHorizontal = computed(() => props.direction === "horizontal");
    const {
      resizeRef: containerRef
    } = useResizeObserver();
    const {
      resizeRef: contentRef
    } = useResizeObserver();
    useGoTo();
    computed(() => {
      return {
        container: containerRef.el,
        duration: 200,
        easing: "easeOutQuart"
      };
    });
    computed(() => {
      if (!group.selected.value.length) return -1;
      return group.items.value.findIndex((item) => item.id === group.selected.value[0]);
    });
    computed(() => {
      if (!group.selected.value.length) return -1;
      return group.items.value.findIndex((item) => item.id === group.selected.value[group.selected.value.length - 1]);
    });
    const isFocused = shallowRef(false);
    function scrollToChildren(children, center) {
      {
        calculateUpdatedTarget({
          containerElement: containerRef.el,
          isHorizontal: isHorizontal.value,
          isRtl: isRtl.value,
          selectedElement: children
        });
      }
    }
    function onScroll(e) {
      const {
        scrollTop,
        scrollLeft
      } = e.target;
      scrollOffset.value = isHorizontal.value ? scrollLeft : scrollTop;
    }
    function onFocusin(e) {
      isFocused.value = true;
      if (!isOverflowing.value || !contentRef.el) return;
      for (const el of e.composedPath()) {
        for (const item of contentRef.el.children) {
          if (item === el) {
            scrollToChildren(item);
            return;
          }
        }
      }
    }
    function onFocusout(e) {
      isFocused.value = false;
    }
    let ignoreFocusEvent = false;
    function onFocus(e) {
      var _a;
      if (!ignoreFocusEvent && !isFocused.value && !(e.relatedTarget && ((_a = contentRef.el) == null ? void 0 : _a.contains(e.relatedTarget)))) focus();
      ignoreFocusEvent = false;
    }
    function onFocusAffixes() {
      ignoreFocusEvent = true;
    }
    function onKeydown(e) {
      if (!contentRef.el) return;
      function toFocus(location) {
        e.preventDefault();
        focus(location);
      }
      if (isHorizontal.value) {
        if (e.key === "ArrowRight") {
          toFocus(isRtl.value ? "prev" : "next");
        } else if (e.key === "ArrowLeft") {
          toFocus(isRtl.value ? "next" : "prev");
        }
      } else {
        if (e.key === "ArrowDown") {
          toFocus("next");
        } else if (e.key === "ArrowUp") {
          toFocus("prev");
        }
      }
      if (e.key === "Home") {
        toFocus("first");
      } else if (e.key === "End") {
        toFocus("last");
      }
    }
    function getSiblingElement(el, location) {
      if (!el) return void 0;
      let sibling = el;
      do {
        sibling = sibling == null ? void 0 : sibling[location === "next" ? "nextElementSibling" : "previousElementSibling"];
      } while (sibling == null ? void 0 : sibling.hasAttribute("disabled"));
      return sibling;
    }
    function focus(location) {
      if (!contentRef.el) return;
      let el;
      if (!location) {
        const focusable = focusableChildren(contentRef.el);
        el = focusable[0];
      } else if (location === "next") {
        el = getSiblingElement(contentRef.el.querySelector(":focus"), location);
        if (!el) return focus("first");
      } else if (location === "prev") {
        el = getSiblingElement(contentRef.el.querySelector(":focus"), location);
        if (!el) return focus("last");
      } else if (location === "first") {
        el = contentRef.el.firstElementChild;
        if (el == null ? void 0 : el.hasAttribute("disabled")) el = getSiblingElement(el, "next");
      } else if (location === "last") {
        el = contentRef.el.lastElementChild;
        if (el == null ? void 0 : el.hasAttribute("disabled")) el = getSiblingElement(el, "prev");
      }
      if (el) {
        el.focus({
          preventScroll: true
        });
      }
    }
    function scrollTo(location) {
      const direction = isHorizontal.value && isRtl.value ? -1 : 1;
      const offsetStep = (location === "prev" ? -direction : direction) * containerSize.value;
      scrollOffset.value + offsetStep;
      if (isHorizontal.value && isRtl.value && containerRef.el) {
        const {
          scrollWidth,
          offsetWidth: containerWidth
        } = containerRef.el;
      }
    }
    const slotProps = computed(() => ({
      next: group.next,
      prev: group.prev,
      select: group.select,
      isSelected: group.isSelected
    }));
    const hasAffixes = computed(() => {
      switch (props.showArrows) {
        // Always show arrows on desktop & mobile
        case "always":
          return true;
        // Always show arrows on desktop
        case "desktop":
          return !mobile.value;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior
        case true:
          return isOverflowing.value || Math.abs(scrollOffset.value) > 0;
        // Always show on mobile
        case "mobile":
          return mobile.value || isOverflowing.value || Math.abs(scrollOffset.value) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop
        default:
          return !mobile.value && (isOverflowing.value || Math.abs(scrollOffset.value) > 0);
      }
    });
    const hasPrev = computed(() => {
      return Math.abs(scrollOffset.value) > 1;
    });
    const hasNext = computed(() => {
      if (!containerRef.value) return false;
      const scrollSize = getScrollSize(isHorizontal.value, containerRef.el);
      const clientSize = getClientSize(isHorizontal.value, containerRef.el);
      const scrollSizeMax = scrollSize - clientSize;
      return scrollSizeMax - Math.abs(scrollOffset.value) > 1;
    });
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-slide-group", {
        "v-slide-group--vertical": !isHorizontal.value,
        "v-slide-group--has-affixes": hasAffixes.value,
        "v-slide-group--is-overflowing": isOverflowing.value
      }, displayClasses.value, props.class]),
      "style": normalizeStyle(props.style),
      "tabindex": isFocused.value || group.selected.value.length ? -1 : 0,
      "onFocus": onFocus
    }, {
      default: () => {
        var _a2, _b2;
        var _a, _b, _c;
        return [hasAffixes.value && createElementVNode("div", {
          "key": "prev",
          "class": normalizeClass(["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !hasPrev.value
          }]),
          "onMousedown": onFocusAffixes,
          "onClick": () => hasPrev.value && scrollTo("prev")
        }, [(_a2 = (_a = slots.prev) == null ? void 0 : _a.call(slots, slotProps.value)) != null ? _a2 : createVNode(VFadeTransition, null, {
          default: () => [createVNode(VIcon, {
            "icon": isRtl.value ? props.nextIcon : props.prevIcon
          }, null)]
        })]), createElementVNode("div", {
          "key": "container",
          "ref": containerRef,
          "class": "v-slide-group__container",
          "onScroll": onScroll
        }, [createElementVNode("div", {
          "ref": contentRef,
          "class": "v-slide-group__content",
          "onFocusin": onFocusin,
          "onFocusout": onFocusout,
          "onKeydown": onKeydown
        }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)])]), hasAffixes.value && createElementVNode("div", {
          "key": "next",
          "class": normalizeClass(["v-slide-group__next", {
            "v-slide-group__next--disabled": !hasNext.value
          }]),
          "onMousedown": onFocusAffixes,
          "onClick": () => hasNext.value && scrollTo("next")
        }, [(_b2 = (_c = slots.next) == null ? void 0 : _c.call(slots, slotProps.value)) != null ? _b2 : createVNode(VFadeTransition, null, {
          default: () => [createVNode(VIcon, {
            "icon": isRtl.value ? props.prevIcon : props.nextIcon
          }, null)]
        })])];
      }
    }));
    return {
      selected: group.selected,
      scrollTo,
      scrollOffset,
      focus,
      hasPrev,
      hasNext
    };
  }
});
const VChipGroupSymbol = Symbol.for("vuetify:v-chip-group");
const makeVChipGroupProps = propsFactory({
  baseColor: String,
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeVSlideGroupProps(),
  ...makeComponentProps(),
  ...makeGroupProps({
    selectedClass: "v-chip--selected"
  }),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "tonal"
  })
}, "VChipGroup");
genericComponent()({
  name: "VChipGroup",
  props: makeVChipGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isSelected,
      select,
      next,
      prev,
      selected
    } = useGroup(props, VChipGroupSymbol);
    provideDefaults({
      VChip: {
        baseColor: toRef(() => props.baseColor),
        color: toRef(() => props.color),
        disabled: toRef(() => props.disabled),
        filter: toRef(() => props.filter),
        variant: toRef(() => props.variant)
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      return createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "class": ["v-chip-group", {
          "v-chip-group--column": props.column
        }, themeClasses.value, props.class],
        "style": props.style
      }), {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected,
            select,
            next,
            prev,
            selected: selected.value
          })];
        }
      });
    });
    return {};
  }
});
const makeVChipProps = propsFactory({
  activeClass: String,
  appendAvatar: String,
  appendIcon: IconValue,
  baseColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: IconValue,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  onClick: EventProp(),
  onClickOnce: EventProp(),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "span"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "tonal"
  })
}, "VChip");
const VChip = genericComponent()({
  name: "VChip",
  directives: {
    vRipple: Ripple
  },
  props: makeVChipProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true,
    "group:selected": (val) => true,
    click: (e) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses
    } = useSize(props);
    const {
      themeClasses
    } = provideTheme(props);
    const isActive = useProxiedModel(props, "modelValue");
    const group = useGroupItem(props, VChipGroupSymbol, false);
    const link = useLink(props, attrs);
    const isLink = toRef(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (!!group || props.link || link.isClickable.value));
    const closeProps = toRef(() => ({
      "aria-label": t(props.closeLabel),
      disabled: props.disabled,
      onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(() => {
      var _a;
      const showColor = !group || group.isSelected.value;
      return {
        color: showColor ? (_a = props.color) != null ? _a : props.baseColor : props.baseColor,
        variant: props.variant
      };
    });
    function onClick(e) {
      var _a;
      emit("click", e);
      if (!isClickable.value) return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      group == null ? void 0 : group.toggle();
    }
    function onKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    }
    return () => {
      var _a;
      const Tag = link.isLink.value ? "a" : props.tag;
      const hasAppendMedia = !!(props.appendIcon || props.appendAvatar);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasClose = !!(slots.close || props.closable);
      const hasFilter = !!(slots.filter || props.filter) && group;
      const hasPrependMedia = !!(props.prependIcon || props.prependAvatar);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      return isActive.value && withDirectives(createVNode(Tag, mergeProps({
        "class": ["v-chip", {
          "v-chip--disabled": props.disabled,
          "v-chip--label": props.label,
          "v-chip--link": isClickable.value,
          "v-chip--filter": hasFilter,
          "v-chip--pill": props.pill,
          [`${props.activeClass}`]: props.activeClass && ((_a = link.isActive) == null ? void 0 : _a.value)
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, group == null ? void 0 : group.selectedClass.value, props.class],
        "style": [colorStyles.value, props.style],
        "disabled": props.disabled || void 0,
        "draggable": props.draggable,
        "tabindex": isClickable.value ? 0 : void 0,
        "onClick": onClick,
        "onKeydown": isClickable.value && !isLink.value && onKeyDown
      }, link.linkProps), {
        default: () => {
          var _a3;
          var _a2;
          return [genOverlays(isClickable.value, "v-chip"), hasFilter && createVNode(VExpandXTransition, {
            "key": "filter"
          }, {
            default: () => [withDirectives(createElementVNode("div", {
              "class": "v-chip__filter"
            }, [!slots.filter ? createVNode(VIcon, {
              "key": "filter-icon",
              "icon": props.filterIcon
            }, null) : createVNode(VDefaultsProvider, {
              "key": "filter-defaults",
              "disabled": !props.filterIcon,
              "defaults": {
                VIcon: {
                  icon: props.filterIcon
                }
              }
            }, slots.filter)]), [[vShow, group.isSelected.value]])]
          }), hasPrepend && createElementVNode("div", {
            "key": "prepend",
            "class": "v-chip__prepend"
          }, [!slots.prepend ? createElementVNode(Fragment, null, [props.prependIcon && createVNode(VIcon, {
            "key": "prepend-icon",
            "icon": props.prependIcon,
            "start": true
          }, null), props.prependAvatar && createVNode(VAvatar, {
            "key": "prepend-avatar",
            "image": props.prependAvatar,
            "start": true
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !hasPrependMedia,
            "defaults": {
              VAvatar: {
                image: props.prependAvatar,
                start: true
              },
              VIcon: {
                icon: props.prependIcon,
                start: true
              }
            }
          }, slots.prepend)]), createElementVNode("div", {
            "class": "v-chip__content",
            "data-no-activator": ""
          }, [(_a3 = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
            isSelected: group == null ? void 0 : group.isSelected.value,
            selectedClass: group == null ? void 0 : group.selectedClass.value,
            select: group == null ? void 0 : group.select,
            toggle: group == null ? void 0 : group.toggle,
            value: group == null ? void 0 : group.value.value,
            disabled: props.disabled
          })) != null ? _a3 : toDisplayString(props.text)]), hasAppend && createElementVNode("div", {
            "key": "append",
            "class": "v-chip__append"
          }, [!slots.append ? createElementVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
            "key": "append-icon",
            "end": true,
            "icon": props.appendIcon
          }, null), props.appendAvatar && createVNode(VAvatar, {
            "key": "append-avatar",
            "end": true,
            "image": props.appendAvatar
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !hasAppendMedia,
            "defaults": {
              VAvatar: {
                end: true,
                image: props.appendAvatar
              },
              VIcon: {
                end: true,
                icon: props.appendIcon
              }
            }
          }, slots.append)]), hasClose && createElementVNode("button", mergeProps({
            "key": "close",
            "class": "v-chip__close",
            "type": "button",
            "data-testid": "close-chip"
          }, closeProps.value), [!slots.close ? createVNode(VIcon, {
            "key": "close-icon",
            "icon": props.closeIcon,
            "size": "x-small"
          }, null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VIcon: {
                icon: props.closeIcon,
                size: "x-small"
              }
            }
          }, slots.close)])];
        }
      }), [[Ripple, isClickable.value && props.ripple, null]]);
    };
  }
});
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "py-16",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
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
                          elevation: "10"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, { class: "text-h3 text-center font-weight-bold" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(HandWave, null, null, _parent6, _scopeId5));
                                    _push6(` Vitaj na mm-smart.eu `);
                                  } else {
                                    return [
                                      createVNode(HandWave),
                                      createTextVNode(" Vitaj na mm-smart.eu ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardSubtitle, { class: "text-center text-grey mt-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Osobn\xFD v\xFDvojov\xFD projekt s re\xE1lnym nasaden\xEDm `);
                                  } else {
                                    return [
                                      createTextVNode(" Osobn\xFD v\xFDvojov\xFD projekt s re\xE1lnym nasaden\xEDm ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "text-body-1 text-center mt-8" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-justify" style="${ssrRenderStyle({ "line-height": "1.8" })}"${_scopeId5}> Tento projekt vznikol ako moja r\xFDchla reakcia na ponuku pre frontend v\xFDvoj\xE1ra so stackom Vue 3, Nuxt 3 a Vuetify. Namiesto \u017Eivotopisu som vytvoril plnohodnotn\xFA aplik\xE1ciu, ktor\xE1 re\xE1lne be\u017E\xED na mojom Linuxovom serveri cez PM2, Nginx a Cron-based Git deploy. Cel\xE9 rie\u0161enie je postaven\xE9 tak, ako by be\u017Eala ostr\xE1 firemn\xE1 prezent\xE1cia. <br${_scopeId5}><br${_scopeId5}> Aj ke\u010F vtomto portfoliu to nieje \xFAplne vidie\u0165, m\xE1m re\xE1lnu sk\xFAsenos\u0165 z IT firmy Railsformers z roku 2022, kde som pracoval ako frontend k\xF3der 1 rok. Tvoril som html/php \u0161abl\xF3ny pre firemn\xE9 closed-source CMS. Robil som responz\xEDvne str\xE1nky, Bootstrap, jednoduch\xE9 anim\xE1cie a z\xE1klady technick\xE9ho SEO a ob\u010Das aj deploy. Dnes sa v\u0161ak chcem posun\xFA\u0165 \u010Falej \u2013 rozv\xEDja\u0165 sa ako fullstack v\xFDvoj\xE1r a z\xE1rove\u0148 pracova\u0165 s modern\xFDm Vue/Nuxt ekosyst\xE9mom (ide\xE1lne full-js) a r\xE1d sa nau\u010D\xEDm aj tailwind a zaklady \u0161ablonovania na Shoptet alebo WP. <br${_scopeId5}><br${_scopeId5}> Popri webovom v\xFDvoji budujem vlastn\xE9 projekty, napr. projekt ESP32-Smarwi Controller \u2013 riadiaci syst\xE9m pre inteligentn\xE9 vetranie, ktor\xFD kombinuje senzoriku (DHT), OTA, WiFi API a frontend napojen\xFD na backend v AdonisJS. Ned\xE1vno som sa rozhodol prejs\u0165 z Arduino IDE na plnohodnotn\xFD v\xFDvoj- PlatformIO vo VS Code, aby bol cel\xFD stack robustnej\u0161\xED a \u013Eah\u0161ie \u0161k\xE1lovate\u013En\xFD. <br${_scopeId5}><br${_scopeId5}> Ako uk\xE1\u017Eku skromn\xE9ho, ale re\xE1lne nasaden\xE9ho rie\u0161enia spom\xEDnam aj web <a href="http://www.umy-ma.sk" target="_blank"${_scopeId5}>umy-ma.sk</a>, ktor\xFD som vytvoril pre kamar\xE1tov ako r\xFDchlu online vizitku za\u010Diatkom minul\xE9ho roka. Nie je to \u017Eiadne dizajnov\xE9 ani SEO v\xED\u0165azstvo, ale je r\xFDchle a lacn\xE9 rie\u0161enie ktor\xE9 bolo podla \u0161pecifikacie. <br${_scopeId5}><br${_scopeId5}> Moj\xEDm cie\u013Eom je pokra\u010Dova\u0165 v re\xE1lnom v\xFDvoji, nie len v \u0161t\xFAdiu \u2013 chcem robi\u0165 na projektoch, ktor\xE9 maj\xFA zmysel, pos\xFAvaj\xFA ma vpred a umo\u017Enia mi zdokona\u013Eova\u0165 sa v pr\xE1ci s modern\xFDm web stackom, backendom, DevOps n\xE1strojmi pr\xEDpadne aj IoT. </div>`);
                                  } else {
                                    return [
                                      createVNode("div", {
                                        class: "text-justify",
                                        style: { "line-height": "1.8" }
                                      }, [
                                        createTextVNode(" Tento projekt vznikol ako moja r\xFDchla reakcia na ponuku pre frontend v\xFDvoj\xE1ra so stackom Vue 3, Nuxt 3 a Vuetify. Namiesto \u017Eivotopisu som vytvoril plnohodnotn\xFA aplik\xE1ciu, ktor\xE1 re\xE1lne be\u017E\xED na mojom Linuxovom serveri cez PM2, Nginx a Cron-based Git deploy. Cel\xE9 rie\u0161enie je postaven\xE9 tak, ako by be\u017Eala ostr\xE1 firemn\xE1 prezent\xE1cia. "),
                                        createVNode("br"),
                                        createVNode("br"),
                                        createTextVNode(" Aj ke\u010F vtomto portfoliu to nieje \xFAplne vidie\u0165, m\xE1m re\xE1lnu sk\xFAsenos\u0165 z IT firmy Railsformers z roku 2022, kde som pracoval ako frontend k\xF3der 1 rok. Tvoril som html/php \u0161abl\xF3ny pre firemn\xE9 closed-source CMS. Robil som responz\xEDvne str\xE1nky, Bootstrap, jednoduch\xE9 anim\xE1cie a z\xE1klady technick\xE9ho SEO a ob\u010Das aj deploy. Dnes sa v\u0161ak chcem posun\xFA\u0165 \u010Falej \u2013 rozv\xEDja\u0165 sa ako fullstack v\xFDvoj\xE1r a z\xE1rove\u0148 pracova\u0165 s modern\xFDm Vue/Nuxt ekosyst\xE9mom (ide\xE1lne full-js) a r\xE1d sa nau\u010D\xEDm aj tailwind a zaklady \u0161ablonovania na Shoptet alebo WP. "),
                                        createVNode("br"),
                                        createVNode("br"),
                                        createTextVNode(" Popri webovom v\xFDvoji budujem vlastn\xE9 projekty, napr. projekt ESP32-Smarwi Controller \u2013 riadiaci syst\xE9m pre inteligentn\xE9 vetranie, ktor\xFD kombinuje senzoriku (DHT), OTA, WiFi API a frontend napojen\xFD na backend v AdonisJS. Ned\xE1vno som sa rozhodol prejs\u0165 z Arduino IDE na plnohodnotn\xFD v\xFDvoj- PlatformIO vo VS Code, aby bol cel\xFD stack robustnej\u0161\xED a \u013Eah\u0161ie \u0161k\xE1lovate\u013En\xFD. "),
                                        createVNode("br"),
                                        createVNode("br"),
                                        createTextVNode(" Ako uk\xE1\u017Eku skromn\xE9ho, ale re\xE1lne nasaden\xE9ho rie\u0161enia spom\xEDnam aj web "),
                                        createVNode("a", {
                                          href: "http://www.umy-ma.sk",
                                          target: "_blank"
                                        }, "umy-ma.sk"),
                                        createTextVNode(", ktor\xFD som vytvoril pre kamar\xE1tov ako r\xFDchlu online vizitku za\u010Diatkom minul\xE9ho roka. Nie je to \u017Eiadne dizajnov\xE9 ani SEO v\xED\u0165azstvo, ale je r\xFDchle a lacn\xE9 rie\u0161enie ktor\xE9 bolo podla \u0161pecifikacie. "),
                                        createVNode("br"),
                                        createVNode("br"),
                                        createTextVNode(" Moj\xEDm cie\u013Eom je pokra\u010Dova\u0165 v re\xE1lnom v\xFDvoji, nie len v \u0161t\xFAdiu \u2013 chcem robi\u0165 na projektoch, ktor\xE9 maj\xFA zmysel, pos\xFAvaj\xFA ma vpred a umo\u017Enia mi zdokona\u013Eova\u0165 sa v pr\xE1ci s modern\xFDm web stackom, backendom, DevOps n\xE1strojmi pr\xEDpadne aj IoT. ")
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
                                      variant: "outlined"
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
                                      class: "mx-2"
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
                                        variant: "outlined"
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
                                        class: "mx-2"
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
                                createVNode(VCardTitle, { class: "text-h3 text-center font-weight-bold" }, {
                                  default: withCtx(() => [
                                    createVNode(HandWave),
                                    createTextVNode(" Vitaj na mm-smart.eu ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, { class: "text-center text-grey mt-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Osobn\xFD v\xFDvojov\xFD projekt s re\xE1lnym nasaden\xEDm ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "text-body-1 text-center mt-8" }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "text-justify",
                                      style: { "line-height": "1.8" }
                                    }, [
                                      createTextVNode(" Tento projekt vznikol ako moja r\xFDchla reakcia na ponuku pre frontend v\xFDvoj\xE1ra so stackom Vue 3, Nuxt 3 a Vuetify. Namiesto \u017Eivotopisu som vytvoril plnohodnotn\xFA aplik\xE1ciu, ktor\xE1 re\xE1lne be\u017E\xED na mojom Linuxovom serveri cez PM2, Nginx a Cron-based Git deploy. Cel\xE9 rie\u0161enie je postaven\xE9 tak, ako by be\u017Eala ostr\xE1 firemn\xE1 prezent\xE1cia. "),
                                      createVNode("br"),
                                      createVNode("br"),
                                      createTextVNode(" Aj ke\u010F vtomto portfoliu to nieje \xFAplne vidie\u0165, m\xE1m re\xE1lnu sk\xFAsenos\u0165 z IT firmy Railsformers z roku 2022, kde som pracoval ako frontend k\xF3der 1 rok. Tvoril som html/php \u0161abl\xF3ny pre firemn\xE9 closed-source CMS. Robil som responz\xEDvne str\xE1nky, Bootstrap, jednoduch\xE9 anim\xE1cie a z\xE1klady technick\xE9ho SEO a ob\u010Das aj deploy. Dnes sa v\u0161ak chcem posun\xFA\u0165 \u010Falej \u2013 rozv\xEDja\u0165 sa ako fullstack v\xFDvoj\xE1r a z\xE1rove\u0148 pracova\u0165 s modern\xFDm Vue/Nuxt ekosyst\xE9mom (ide\xE1lne full-js) a r\xE1d sa nau\u010D\xEDm aj tailwind a zaklady \u0161ablonovania na Shoptet alebo WP. "),
                                      createVNode("br"),
                                      createVNode("br"),
                                      createTextVNode(" Popri webovom v\xFDvoji budujem vlastn\xE9 projekty, napr. projekt ESP32-Smarwi Controller \u2013 riadiaci syst\xE9m pre inteligentn\xE9 vetranie, ktor\xFD kombinuje senzoriku (DHT), OTA, WiFi API a frontend napojen\xFD na backend v AdonisJS. Ned\xE1vno som sa rozhodol prejs\u0165 z Arduino IDE na plnohodnotn\xFD v\xFDvoj- PlatformIO vo VS Code, aby bol cel\xFD stack robustnej\u0161\xED a \u013Eah\u0161ie \u0161k\xE1lovate\u013En\xFD. "),
                                      createVNode("br"),
                                      createVNode("br"),
                                      createTextVNode(" Ako uk\xE1\u017Eku skromn\xE9ho, ale re\xE1lne nasaden\xE9ho rie\u0161enia spom\xEDnam aj web "),
                                      createVNode("a", {
                                        href: "http://www.umy-ma.sk",
                                        target: "_blank"
                                      }, "umy-ma.sk"),
                                      createTextVNode(", ktor\xFD som vytvoril pre kamar\xE1tov ako r\xFDchlu online vizitku za\u010Diatkom minul\xE9ho roka. Nie je to \u017Eiadne dizajnov\xE9 ani SEO v\xED\u0165azstvo, ale je r\xFDchle a lacn\xE9 rie\u0161enie ktor\xE9 bolo podla \u0161pecifikacie. "),
                                      createVNode("br"),
                                      createVNode("br"),
                                      createTextVNode(" Moj\xEDm cie\u013Eom je pokra\u010Dova\u0165 v re\xE1lnom v\xFDvoji, nie len v \u0161t\xFAdiu \u2013 chcem robi\u0165 na projektoch, ktor\xE9 maj\xFA zmysel, pos\xFAvaj\xFA ma vpred a umo\u017Enia mi zdokona\u013Eova\u0165 sa v pr\xE1ci s modern\xFDm web stackom, backendom, DevOps n\xE1strojmi pr\xEDpadne aj IoT. ")
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
                                      variant: "outlined"
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
                                      class: "mx-2"
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
                            elevation: "10"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "text-h3 text-center font-weight-bold" }, {
                                default: withCtx(() => [
                                  createVNode(HandWave),
                                  createTextVNode(" Vitaj na mm-smart.eu ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, { class: "text-center text-grey mt-2" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Osobn\xFD v\xFDvojov\xFD projekt s re\xE1lnym nasaden\xEDm ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "text-body-1 text-center mt-8" }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "text-justify",
                                    style: { "line-height": "1.8" }
                                  }, [
                                    createTextVNode(" Tento projekt vznikol ako moja r\xFDchla reakcia na ponuku pre frontend v\xFDvoj\xE1ra so stackom Vue 3, Nuxt 3 a Vuetify. Namiesto \u017Eivotopisu som vytvoril plnohodnotn\xFA aplik\xE1ciu, ktor\xE1 re\xE1lne be\u017E\xED na mojom Linuxovom serveri cez PM2, Nginx a Cron-based Git deploy. Cel\xE9 rie\u0161enie je postaven\xE9 tak, ako by be\u017Eala ostr\xE1 firemn\xE1 prezent\xE1cia. "),
                                    createVNode("br"),
                                    createVNode("br"),
                                    createTextVNode(" Aj ke\u010F vtomto portfoliu to nieje \xFAplne vidie\u0165, m\xE1m re\xE1lnu sk\xFAsenos\u0165 z IT firmy Railsformers z roku 2022, kde som pracoval ako frontend k\xF3der 1 rok. Tvoril som html/php \u0161abl\xF3ny pre firemn\xE9 closed-source CMS. Robil som responz\xEDvne str\xE1nky, Bootstrap, jednoduch\xE9 anim\xE1cie a z\xE1klady technick\xE9ho SEO a ob\u010Das aj deploy. Dnes sa v\u0161ak chcem posun\xFA\u0165 \u010Falej \u2013 rozv\xEDja\u0165 sa ako fullstack v\xFDvoj\xE1r a z\xE1rove\u0148 pracova\u0165 s modern\xFDm Vue/Nuxt ekosyst\xE9mom (ide\xE1lne full-js) a r\xE1d sa nau\u010D\xEDm aj tailwind a zaklady \u0161ablonovania na Shoptet alebo WP. "),
                                    createVNode("br"),
                                    createVNode("br"),
                                    createTextVNode(" Popri webovom v\xFDvoji budujem vlastn\xE9 projekty, napr. projekt ESP32-Smarwi Controller \u2013 riadiaci syst\xE9m pre inteligentn\xE9 vetranie, ktor\xFD kombinuje senzoriku (DHT), OTA, WiFi API a frontend napojen\xFD na backend v AdonisJS. Ned\xE1vno som sa rozhodol prejs\u0165 z Arduino IDE na plnohodnotn\xFD v\xFDvoj- PlatformIO vo VS Code, aby bol cel\xFD stack robustnej\u0161\xED a \u013Eah\u0161ie \u0161k\xE1lovate\u013En\xFD. "),
                                    createVNode("br"),
                                    createVNode("br"),
                                    createTextVNode(" Ako uk\xE1\u017Eku skromn\xE9ho, ale re\xE1lne nasaden\xE9ho rie\u0161enia spom\xEDnam aj web "),
                                    createVNode("a", {
                                      href: "http://www.umy-ma.sk",
                                      target: "_blank"
                                    }, "umy-ma.sk"),
                                    createTextVNode(", ktor\xFD som vytvoril pre kamar\xE1tov ako r\xFDchlu online vizitku za\u010Diatkom minul\xE9ho roka. Nie je to \u017Eiadne dizajnov\xE9 ani SEO v\xED\u0165azstvo, ale je r\xFDchle a lacn\xE9 rie\u0161enie ktor\xE9 bolo podla \u0161pecifikacie. "),
                                    createVNode("br"),
                                    createVNode("br"),
                                    createTextVNode(" Moj\xEDm cie\u013Eom je pokra\u010Dova\u0165 v re\xE1lnom v\xFDvoji, nie len v \u0161t\xFAdiu \u2013 chcem robi\u0165 na projektoch, ktor\xE9 maj\xFA zmysel, pos\xFAvaj\xFA ma vpred a umo\u017Enia mi zdokona\u013Eova\u0165 sa v pr\xE1ci s modern\xFDm web stackom, backendom, DevOps n\xE1strojmi pr\xEDpadne aj IoT. ")
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
                                    variant: "outlined"
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
                                    class: "mx-2"
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
                          elevation: "10"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "text-h3 text-center font-weight-bold" }, {
                              default: withCtx(() => [
                                createVNode(HandWave),
                                createTextVNode(" Vitaj na mm-smart.eu ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, { class: "text-center text-grey mt-2" }, {
                              default: withCtx(() => [
                                createTextVNode(" Osobn\xFD v\xFDvojov\xFD projekt s re\xE1lnym nasaden\xEDm ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "text-body-1 text-center mt-8" }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "text-justify",
                                  style: { "line-height": "1.8" }
                                }, [
                                  createTextVNode(" Tento projekt vznikol ako moja r\xFDchla reakcia na ponuku pre frontend v\xFDvoj\xE1ra so stackom Vue 3, Nuxt 3 a Vuetify. Namiesto \u017Eivotopisu som vytvoril plnohodnotn\xFA aplik\xE1ciu, ktor\xE1 re\xE1lne be\u017E\xED na mojom Linuxovom serveri cez PM2, Nginx a Cron-based Git deploy. Cel\xE9 rie\u0161enie je postaven\xE9 tak, ako by be\u017Eala ostr\xE1 firemn\xE1 prezent\xE1cia. "),
                                  createVNode("br"),
                                  createVNode("br"),
                                  createTextVNode(" Aj ke\u010F vtomto portfoliu to nieje \xFAplne vidie\u0165, m\xE1m re\xE1lnu sk\xFAsenos\u0165 z IT firmy Railsformers z roku 2022, kde som pracoval ako frontend k\xF3der 1 rok. Tvoril som html/php \u0161abl\xF3ny pre firemn\xE9 closed-source CMS. Robil som responz\xEDvne str\xE1nky, Bootstrap, jednoduch\xE9 anim\xE1cie a z\xE1klady technick\xE9ho SEO a ob\u010Das aj deploy. Dnes sa v\u0161ak chcem posun\xFA\u0165 \u010Falej \u2013 rozv\xEDja\u0165 sa ako fullstack v\xFDvoj\xE1r a z\xE1rove\u0148 pracova\u0165 s modern\xFDm Vue/Nuxt ekosyst\xE9mom (ide\xE1lne full-js) a r\xE1d sa nau\u010D\xEDm aj tailwind a zaklady \u0161ablonovania na Shoptet alebo WP. "),
                                  createVNode("br"),
                                  createVNode("br"),
                                  createTextVNode(" Popri webovom v\xFDvoji budujem vlastn\xE9 projekty, napr. projekt ESP32-Smarwi Controller \u2013 riadiaci syst\xE9m pre inteligentn\xE9 vetranie, ktor\xFD kombinuje senzoriku (DHT), OTA, WiFi API a frontend napojen\xFD na backend v AdonisJS. Ned\xE1vno som sa rozhodol prejs\u0165 z Arduino IDE na plnohodnotn\xFD v\xFDvoj- PlatformIO vo VS Code, aby bol cel\xFD stack robustnej\u0161\xED a \u013Eah\u0161ie \u0161k\xE1lovate\u013En\xFD. "),
                                  createVNode("br"),
                                  createVNode("br"),
                                  createTextVNode(" Ako uk\xE1\u017Eku skromn\xE9ho, ale re\xE1lne nasaden\xE9ho rie\u0161enia spom\xEDnam aj web "),
                                  createVNode("a", {
                                    href: "http://www.umy-ma.sk",
                                    target: "_blank"
                                  }, "umy-ma.sk"),
                                  createTextVNode(", ktor\xFD som vytvoril pre kamar\xE1tov ako r\xFDchlu online vizitku za\u010Diatkom minul\xE9ho roka. Nie je to \u017Eiadne dizajnov\xE9 ani SEO v\xED\u0165azstvo, ale je r\xFDchle a lacn\xE9 rie\u0161enie ktor\xE9 bolo podla \u0161pecifikacie. "),
                                  createVNode("br"),
                                  createVNode("br"),
                                  createTextVNode(" Moj\xEDm cie\u013Eom je pokra\u010Dova\u0165 v re\xE1lnom v\xFDvoji, nie len v \u0161t\xFAdiu \u2013 chcem robi\u0165 na projektoch, ktor\xE9 maj\xFA zmysel, pos\xFAvaj\xFA ma vpred a umo\u017Enia mi zdokona\u013Eova\u0165 sa v pr\xE1ci s modern\xFDm web stackom, backendom, DevOps n\xE1strojmi pr\xEDpadne aj IoT. ")
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
                                  variant: "outlined"
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
                                  class: "mx-2"
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
                              _push5(`<h2 class="text-h5 font-weight-medium mb-4"${_scopeId4}>Pou\u017Eivan\xE9 technol\xF3gie na tomto projekte</h2><div class="d-flex justify-center flex-wrap my-4"${_scopeId4}>`);
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
                                    _push6(`PM2 + Cron Deploy`);
                                  } else {
                                    return [
                                      createTextVNode("PM2 + Cron Deploy")
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
                                createVNode("h2", { class: "text-h5 font-weight-medium mb-4" }, "Pou\u017Eivan\xE9 technol\xF3gie na tomto projekte"),
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
                                      createTextVNode("PM2 + Cron Deploy")
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
                              createVNode("h2", { class: "text-h5 font-weight-medium mb-4" }, "Pou\u017Eivan\xE9 technol\xF3gie na tomto projekte"),
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
                                    createTextVNode("PM2 + Cron Deploy")
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
                            createVNode("h2", { class: "text-h5 font-weight-medium mb-4" }, "Pou\u017Eivan\xE9 technol\xF3gie na tomto projekte"),
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
                                  createTextVNode("PM2 + Cron Deploy")
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
          } else {
            return [
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        class: "pa-8",
                        elevation: "10"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "text-h3 text-center font-weight-bold" }, {
                            default: withCtx(() => [
                              createVNode(HandWave),
                              createTextVNode(" Vitaj na mm-smart.eu ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle, { class: "text-center text-grey mt-2" }, {
                            default: withCtx(() => [
                              createTextVNode(" Osobn\xFD v\xFDvojov\xFD projekt s re\xE1lnym nasaden\xEDm ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "text-body-1 text-center mt-8" }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "text-justify",
                                style: { "line-height": "1.8" }
                              }, [
                                createTextVNode(" Tento projekt vznikol ako moja r\xFDchla reakcia na ponuku pre frontend v\xFDvoj\xE1ra so stackom Vue 3, Nuxt 3 a Vuetify. Namiesto \u017Eivotopisu som vytvoril plnohodnotn\xFA aplik\xE1ciu, ktor\xE1 re\xE1lne be\u017E\xED na mojom Linuxovom serveri cez PM2, Nginx a Cron-based Git deploy. Cel\xE9 rie\u0161enie je postaven\xE9 tak, ako by be\u017Eala ostr\xE1 firemn\xE1 prezent\xE1cia. "),
                                createVNode("br"),
                                createVNode("br"),
                                createTextVNode(" Aj ke\u010F vtomto portfoliu to nieje \xFAplne vidie\u0165, m\xE1m re\xE1lnu sk\xFAsenos\u0165 z IT firmy Railsformers z roku 2022, kde som pracoval ako frontend k\xF3der 1 rok. Tvoril som html/php \u0161abl\xF3ny pre firemn\xE9 closed-source CMS. Robil som responz\xEDvne str\xE1nky, Bootstrap, jednoduch\xE9 anim\xE1cie a z\xE1klady technick\xE9ho SEO a ob\u010Das aj deploy. Dnes sa v\u0161ak chcem posun\xFA\u0165 \u010Falej \u2013 rozv\xEDja\u0165 sa ako fullstack v\xFDvoj\xE1r a z\xE1rove\u0148 pracova\u0165 s modern\xFDm Vue/Nuxt ekosyst\xE9mom (ide\xE1lne full-js) a r\xE1d sa nau\u010D\xEDm aj tailwind a zaklady \u0161ablonovania na Shoptet alebo WP. "),
                                createVNode("br"),
                                createVNode("br"),
                                createTextVNode(" Popri webovom v\xFDvoji budujem vlastn\xE9 projekty, napr. projekt ESP32-Smarwi Controller \u2013 riadiaci syst\xE9m pre inteligentn\xE9 vetranie, ktor\xFD kombinuje senzoriku (DHT), OTA, WiFi API a frontend napojen\xFD na backend v AdonisJS. Ned\xE1vno som sa rozhodol prejs\u0165 z Arduino IDE na plnohodnotn\xFD v\xFDvoj- PlatformIO vo VS Code, aby bol cel\xFD stack robustnej\u0161\xED a \u013Eah\u0161ie \u0161k\xE1lovate\u013En\xFD. "),
                                createVNode("br"),
                                createVNode("br"),
                                createTextVNode(" Ako uk\xE1\u017Eku skromn\xE9ho, ale re\xE1lne nasaden\xE9ho rie\u0161enia spom\xEDnam aj web "),
                                createVNode("a", {
                                  href: "http://www.umy-ma.sk",
                                  target: "_blank"
                                }, "umy-ma.sk"),
                                createTextVNode(", ktor\xFD som vytvoril pre kamar\xE1tov ako r\xFDchlu online vizitku za\u010Diatkom minul\xE9ho roka. Nie je to \u017Eiadne dizajnov\xE9 ani SEO v\xED\u0165azstvo, ale je r\xFDchle a lacn\xE9 rie\u0161enie ktor\xE9 bolo podla \u0161pecifikacie. "),
                                createVNode("br"),
                                createVNode("br"),
                                createTextVNode(" Moj\xEDm cie\u013Eom je pokra\u010Dova\u0165 v re\xE1lnom v\xFDvoji, nie len v \u0161t\xFAdiu \u2013 chcem robi\u0165 na projektoch, ktor\xE9 maj\xFA zmysel, pos\xFAvaj\xFA ma vpred a umo\u017Enia mi zdokona\u013Eova\u0165 sa v pr\xE1ci s modern\xFDm web stackom, backendom, DevOps n\xE1strojmi pr\xEDpadne aj IoT. ")
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
                                variant: "outlined"
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
                                class: "mx-2"
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
              }),
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
                          createVNode("h2", { class: "text-h5 font-weight-medium mb-4" }, "Pou\u017Eivan\xE9 technol\xF3gie na tomto projekte"),
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
                                createTextVNode("PM2 + Cron Deploy")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BGnTYnpu.mjs.map
