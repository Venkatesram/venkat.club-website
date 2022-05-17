/**
 * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 */
!(function (a, b) {
  function c (a, b) {
    var c = a.createElement('p'),
      d = a.getElementsByTagName('head')[0] || a.documentElement
    return (
      (c.innerHTML = 'x<style>' + b + '</style>'),
      d.insertBefore(c.lastChild, d.firstChild)
    )
  }
  function d () {
    var a = t.elements
    return 'string' == typeof a ? a.split(' ') : a
  }
  function e (a, b) {
    var c = t.elements
    'string' != typeof c && (c = c.join(' ')),
      'string' != typeof a && (a = a.join(' ')),
      (t.elements = c + ' ' + a),
      j(b)
  }
  function f (a) {
    var b = s[a[q]]
    return b || ((b = {}), r++, (a[q] = r), (s[r] = b)), b
  }
  function g (a, c, d) {
    if ((c || (c = b), l)) return c.createElement(a)
    d || (d = f(c))
    var e
    return (
      (e = d.cache[a]
        ? d.cache[a].cloneNode()
        : p.test(a)
        ? (d.cache[a] = d.createElem(a)).cloneNode()
        : d.createElem(a)),
      !e.canHaveChildren || o.test(a) || e.tagUrn ? e : d.frag.appendChild(e)
    )
  }
  function h (a, c) {
    if ((a || (a = b), l)) return a.createDocumentFragment()
    c = c || f(a)
    for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++)
      e.createElement(h[g])
    return e
  }
  function i (a, b) {
    b.cache ||
      ((b.cache = {}),
      (b.createElem = a.createElement),
      (b.createFrag = a.createDocumentFragment),
      (b.frag = b.createFrag())),
      (a.createElement = function (c) {
        return t.shivMethods ? g(c, a, b) : b.createElem(c)
      }),
      (a.createDocumentFragment = Function(
        'h,f',
        'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
          d()
            .join()
            .replace(/[\w\-:]+/g, function (a) {
              return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) +
          ');return n}'
      )(t, b.frag))
  }
  function j (a) {
    a || (a = b)
    var d = f(a)
    return (
      !t.shivCSS ||
        k ||
        d.hasCSS ||
        (d.hasCSS = !!c(
          a,
          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}'
        )),
      l || i(a, d),
      a
    )
  }
  var k,
    l,
    m = '3.7.3',
    n = a.html5 || {},
    o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
    p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
    q = '_html5shiv',
    r = 0,
    s = {}
  !(function () {
    try {
      var a = b.createElement('a')
      ;(a.innerHTML = '<xyz></xyz>'),
        (k = 'hidden' in a),
        (l =
          1 == a.childNodes.length ||
          (function () {
            b.createElement('a')
            var a = b.createDocumentFragment()
            return (
              'undefined' == typeof a.cloneNode ||
              'undefined' == typeof a.createDocumentFragment ||
              'undefined' == typeof a.createElement
            )
          })())
    } catch (c) {
      ;(k = !0), (l = !0)
    }
  })()
  var t = {
    elements:
      n.elements ||
      'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
    version: m,
    shivCSS: n.shivCSS !== !1,
    supportsUnknownElements: l,
    shivMethods: n.shivMethods !== !1,
    type: 'default',
    shivDocument: j,
    createElement: g,
    createDocumentFragment: h,
    addElements: e
  }
  ;(a.html5 = t),
    j(b),
    'object' == typeof module && module.exports && (module.exports = t)
})('undefined' != typeof window ? window : this, document)
/*! jQuery UI - v1.12.1 - 2019-11-12
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

;(function (t) {
  'function' == typeof define && define.amd ? define(['jquery'], t) : t(jQuery)
})(function (t) {
  function e (t) {
    for (var e = t.css('visibility'); 'inherit' === e; )
      (t = t.parent()), (e = t.css('visibility'))
    return 'hidden' !== e
  }
  function i (t) {
    for (var e, i; t.length && t[0] !== document; ) {
      if (
        ((e = t.css('position')),
        ('absolute' === e || 'relative' === e || 'fixed' === e) &&
          ((i = parseInt(t.css('zIndex'), 10)), !isNaN(i) && 0 !== i))
      )
        return i
      t = t.parent()
    }
    return 0
  }
  function s () {
    ;(this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = 'ui-datepicker-div'),
      (this._inlineClass = 'ui-datepicker-inline'),
      (this._appendClass = 'ui-datepicker-append'),
      (this._triggerClass = 'ui-datepicker-trigger'),
      (this._dialogClass = 'ui-datepicker-dialog'),
      (this._disableClass = 'ui-datepicker-disabled'),
      (this._unselectableClass = 'ui-datepicker-unselectable'),
      (this._currentClass = 'ui-datepicker-current-day'),
      (this._dayOverClass = 'ui-datepicker-days-cell-over'),
      (this.regional = []),
      (this.regional[''] = {
        closeText: 'Done',
        prevText: 'Prev',
        nextText: 'Next',
        currentText: 'Today',
        monthNames: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        monthNamesShort: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        dayNames: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        weekHeader: 'Wk',
        dateFormat: 'mm/dd/yy',
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ''
      }),
      (this._defaults = {
        showOn: 'focus',
        showAnim: 'fadeIn',
        showOptions: {},
        defaultDate: null,
        appendText: '',
        buttonText: '...',
        buttonImage: '',
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: 'c-10:c+10',
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: null,
        maxDate: null,
        duration: 'fast',
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: '',
        altFormat: '',
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1
      }),
      t.extend(this._defaults, this.regional['']),
      (this.regional.en = t.extend(!0, {}, this.regional[''])),
      (this.regional['en-US'] = t.extend(!0, {}, this.regional.en)),
      (this.dpDiv = n(
        t(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ))
  }
  function n (e) {
    var i =
      'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a'
    return e
      .on('mouseout', i, function () {
        t(this).removeClass('ui-state-hover'),
          -1 !== this.className.indexOf('ui-datepicker-prev') &&
            t(this).removeClass('ui-datepicker-prev-hover'),
          -1 !== this.className.indexOf('ui-datepicker-next') &&
            t(this).removeClass('ui-datepicker-next-hover')
      })
      .on('mouseover', i, o)
  }
  function o () {
    t.datepicker._isDisabledDatepicker(
      p.inline ? p.dpDiv.parent()[0] : p.input[0]
    ) ||
      (t(this)
        .parents('.ui-datepicker-calendar')
        .find('a')
        .removeClass('ui-state-hover'),
      t(this).addClass('ui-state-hover'),
      -1 !== this.className.indexOf('ui-datepicker-prev') &&
        t(this).addClass('ui-datepicker-prev-hover'),
      -1 !== this.className.indexOf('ui-datepicker-next') &&
        t(this).addClass('ui-datepicker-next-hover'))
  }
  function a (e, i) {
    t.extend(e, i)
    for (var s in i) null == i[s] && (e[s] = i[s])
    return e
  }
  function r (t) {
    return function () {
      var e = this.element.val()
      t.apply(this, arguments),
        this._refresh(),
        e !== this.element.val() && this._trigger('change')
    }
  }
  ;(t.ui = t.ui || {}), (t.ui.version = '1.12.1')
  var h = 0,
    l = Array.prototype.slice
  ;(t.cleanData = (function (e) {
    return function (i) {
      var s, n, o
      for (o = 0; null != (n = i[o]); o++)
        try {
          ;(s = t._data(n, 'events')),
            s && s.remove && t(n).triggerHandler('remove')
        } catch (a) {}
      e(i)
    }
  })(t.cleanData)),
    (t.widget = function (e, i, s) {
      var n,
        o,
        a,
        r = {},
        h = e.split('.')[0]
      e = e.split('.')[1]
      var l = h + '-' + e
      return (
        s || ((s = i), (i = t.Widget)),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        (t.expr[':'][l.toLowerCase()] = function (e) {
          return !!t.data(e, l)
        }),
        (t[h] = t[h] || {}),
        (n = t[h][e]),
        (o = t[h][e] = function (t, e) {
          return this._createWidget
            ? (arguments.length && this._createWidget(t, e), void 0)
            : new o(t, e)
        }),
        t.extend(o, n, {
          version: s.version,
          _proto: t.extend({}, s),
          _childConstructors: []
        }),
        (a = new i()),
        (a.options = t.widget.extend({}, a.options)),
        t.each(s, function (e, s) {
          return t.isFunction(s)
            ? ((r[e] = (function () {
                function t () {
                  return i.prototype[e].apply(this, arguments)
                }
                function n (t) {
                  return i.prototype[e].apply(this, t)
                }
                return function () {
                  var e,
                    i = this._super,
                    o = this._superApply
                  return (
                    (this._super = t),
                    (this._superApply = n),
                    (e = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = o),
                    e
                  )
                }
              })()),
              void 0)
            : ((r[e] = s), void 0)
        }),
        (o.prototype = t.widget.extend(
          a,
          { widgetEventPrefix: n ? a.widgetEventPrefix || e : e },
          r,
          { constructor: o, namespace: h, widgetName: e, widgetFullName: l }
        )),
        n
          ? (t.each(n._childConstructors, function (e, i) {
              var s = i.prototype
              t.widget(s.namespace + '.' + s.widgetName, o, i._proto)
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
      )
    }),
    (t.widget.extend = function (e) {
      for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
        for (i in n[o])
          (s = n[o][i]),
            n[o].hasOwnProperty(i) &&
              void 0 !== s &&
              (e[i] = t.isPlainObject(s)
                ? t.isPlainObject(e[i])
                  ? t.widget.extend({}, e[i], s)
                  : t.widget.extend({}, s)
                : s)
      return e
    }),
    (t.widget.bridge = function (e, i) {
      var s = i.prototype.widgetFullName || e
      t.fn[e] = function (n) {
        var o = 'string' == typeof n,
          a = l.call(arguments, 1),
          r = this
        return (
          o
            ? this.length || 'instance' !== n
              ? this.each(function () {
                  var i,
                    o = t.data(this, s)
                  return 'instance' === n
                    ? ((r = o), !1)
                    : o
                    ? t.isFunction(o[n]) && '_' !== n.charAt(0)
                      ? ((i = o[n].apply(o, a)),
                        i !== o && void 0 !== i
                          ? ((r = i && i.jquery ? r.pushStack(i.get()) : i), !1)
                          : void 0)
                      : t.error(
                          "no such method '" +
                            n +
                            "' for " +
                            e +
                            ' widget instance'
                        )
                    : t.error(
                        'cannot call methods on ' +
                          e +
                          ' prior to initialization; ' +
                          "attempted to call method '" +
                          n +
                          "'"
                      )
                })
              : (r = void 0)
            : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))),
              this.each(function () {
                var e = t.data(this, s)
                e
                  ? (e.option(n || {}), e._init && e._init())
                  : t.data(this, s, new i(n, this))
              })),
          r
        )
      }
    }),
    (t.Widget = function () {}),
    (t.Widget._childConstructors = []),
    (t.Widget.prototype = {
      widgetName: 'widget',
      widgetEventPrefix: '',
      defaultElement: '<div>',
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (e, i) {
        ;(i = t(i || this.defaultElement || this)[0]),
          (this.element = t(i)),
          (this.uuid = h++),
          (this.eventNamespace = '.' + this.widgetName + this.uuid),
          (this.bindings = t()),
          (this.hoverable = t()),
          (this.focusable = t()),
          (this.classesElementLookup = {}),
          i !== this &&
            (t.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === i && this.destroy()
              }
            }),
            (this.document = t(i.style ? i.ownerDocument : i.document || i)),
            (this.window = t(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = t.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            e
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger('create', null, this._getCreateEventData()),
          this._init()
      },
      _getCreateOptions: function () {
        return {}
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function () {
        var e = this
        this._destroy(),
          t.each(this.classesElementLookup, function (t, i) {
            e._removeClass(i, t)
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget()
            .off(this.eventNamespace)
            .removeAttr('aria-disabled'),
          this.bindings.off(this.eventNamespace)
      },
      _destroy: t.noop,
      widget: function () {
        return this.element
      },
      option: function (e, i) {
        var s,
          n,
          o,
          a = e
        if (0 === arguments.length) return t.widget.extend({}, this.options)
        if ('string' == typeof e)
          if (((a = {}), (s = e.split('.')), (e = s.shift()), s.length)) {
            for (
              n = a[e] = t.widget.extend({}, this.options[e]), o = 0;
              s.length - 1 > o;
              o++
            )
              (n[s[o]] = n[s[o]] || {}), (n = n[s[o]])
            if (((e = s.pop()), 1 === arguments.length))
              return void 0 === n[e] ? null : n[e]
            n[e] = i
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[e] ? null : this.options[e]
            a[e] = i
          }
        return this._setOptions(a), this
      },
      _setOptions: function (t) {
        var e
        for (e in t) this._setOption(e, t[e])
        return this
      },
      _setOption: function (t, e) {
        return (
          'classes' === t && this._setOptionClasses(e),
          (this.options[t] = e),
          'disabled' === t && this._setOptionDisabled(e),
          this
        )
      },
      _setOptionClasses: function (e) {
        var i, s, n
        for (i in e)
          (n = this.classesElementLookup[i]),
            e[i] !== this.options.classes[i] &&
              n &&
              n.length &&
              ((s = t(n.get())),
              this._removeClass(n, i),
              s.addClass(
                this._classes({ element: s, keys: i, classes: e, add: !0 })
              ))
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + '-disabled',
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, 'ui-state-hover'),
            this._removeClass(this.focusable, null, 'ui-state-focus'))
      },
      enable: function () {
        return this._setOptions({ disabled: !1 })
      },
      disable: function () {
        return this._setOptions({ disabled: !0 })
      },
      _classes: function (e) {
        function i (i, o) {
          var a, r
          for (r = 0; i.length > r; r++)
            (a = n.classesElementLookup[i[r]] || t()),
              (a = e.add
                ? t(t.unique(a.get().concat(e.element.get())))
                : t(a.not(e.element).get())),
              (n.classesElementLookup[i[r]] = a),
              s.push(i[r]),
              o && e.classes[i[r]] && s.push(e.classes[i[r]])
        }
        var s = [],
          n = this
        return (
          (e = t.extend(
            { element: this.element, classes: this.options.classes || {} },
            e
          )),
          this._on(e.element, { remove: '_untrackClassesElement' }),
          e.keys && i(e.keys.match(/\S+/g) || [], !0),
          e.extra && i(e.extra.match(/\S+/g) || []),
          s.join(' ')
        )
      },
      _untrackClassesElement: function (e) {
        var i = this
        t.each(i.classesElementLookup, function (s, n) {
          ;-1 !== t.inArray(e.target, n) &&
            (i.classesElementLookup[s] = t(n.not(e.target).get()))
        })
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1)
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0)
      },
      _toggleClass: function (t, e, i, s) {
        s = 'boolean' == typeof s ? s : i
        var n = 'string' == typeof t || null === t,
          o = {
            extra: n ? e : i,
            keys: n ? t : e,
            element: n ? this.element : t,
            add: s
          }
        return o.element.toggleClass(this._classes(o), s), this
      },
      _on: function (e, i, s) {
        var n,
          o = this
        'boolean' != typeof e && ((s = i), (i = e), (e = !1)),
          s
            ? ((i = n = t(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          t.each(s, function (s, a) {
            function r () {
              return e ||
                (o.options.disabled !== !0 &&
                  !t(this).hasClass('ui-state-disabled'))
                ? ('string' == typeof a ? o[a] : a).apply(o, arguments)
                : void 0
            }
            'string' != typeof a &&
              (r.guid = a.guid = a.guid || r.guid || t.guid++)
            var h = s.match(/^([\w:-]*)\s*(.*)$/),
              l = h[1] + o.eventNamespace,
              u = h[2]
            u ? n.on(l, u, r) : i.on(l, r)
          })
      },
      _off: function (e, i) {
        ;(i =
          (i || '').split(' ').join(this.eventNamespace + ' ') +
          this.eventNamespace),
          e.off(i).off(i),
          (this.bindings = t(this.bindings.not(e).get())),
          (this.focusable = t(this.focusable.not(e).get())),
          (this.hoverable = t(this.hoverable.not(e).get()))
      },
      _delay: function (t, e) {
        function i () {
          return ('string' == typeof t ? s[t] : t).apply(s, arguments)
        }
        var s = this
        return setTimeout(i, e || 0)
      },
      _hoverable: function (e) {
        ;(this.hoverable = this.hoverable.add(e)),
          this._on(e, {
            mouseenter: function (e) {
              this._addClass(t(e.currentTarget), null, 'ui-state-hover')
            },
            mouseleave: function (e) {
              this._removeClass(t(e.currentTarget), null, 'ui-state-hover')
            }
          })
      },
      _focusable: function (e) {
        ;(this.focusable = this.focusable.add(e)),
          this._on(e, {
            focusin: function (e) {
              this._addClass(t(e.currentTarget), null, 'ui-state-focus')
            },
            focusout: function (e) {
              this._removeClass(t(e.currentTarget), null, 'ui-state-focus')
            }
          })
      },
      _trigger: function (e, i, s) {
        var n,
          o,
          a = this.options[e]
        if (
          ((s = s || {}),
          (i = t.Event(i)),
          (i.type = (e === this.widgetEventPrefix
            ? e
            : this.widgetEventPrefix + e
          ).toLowerCase()),
          (i.target = this.element[0]),
          (o = i.originalEvent))
        )
          for (n in o) n in i || (i[n] = o[n])
        return (
          this.element.trigger(i, s),
          !(
            (t.isFunction(a) &&
              a.apply(this.element[0], [i].concat(s)) === !1) ||
            i.isDefaultPrevented()
          )
        )
      }
    }),
    t.each({ show: 'fadeIn', hide: 'fadeOut' }, function (e, i) {
      t.Widget.prototype['_' + e] = function (s, n, o) {
        'string' == typeof n && (n = { effect: n })
        var a,
          r = n ? (n === !0 || 'number' == typeof n ? i : n.effect || i) : e
        ;(n = n || {}),
          'number' == typeof n && (n = { duration: n }),
          (a = !t.isEmptyObject(n)),
          (n.complete = o),
          n.delay && s.delay(n.delay),
          a && t.effects && t.effects.effect[r]
            ? s[e](n)
            : r !== e && s[r]
            ? s[r](n.duration, n.easing, o)
            : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i()
              })
      }
    }),
    t.widget,
    (function () {
      function e (t, e, i) {
        return [
          parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1),
          parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)
        ]
      }
      function i (e, i) {
        return parseInt(t.css(e, i), 10) || 0
      }
      function s (e) {
        var i = e[0]
        return 9 === i.nodeType
          ? {
              width: e.width(),
              height: e.height(),
              offset: { top: 0, left: 0 }
            }
          : t.isWindow(i)
          ? {
              width: e.width(),
              height: e.height(),
              offset: { top: e.scrollTop(), left: e.scrollLeft() }
            }
          : i.preventDefault
          ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
          : {
              width: e.outerWidth(),
              height: e.outerHeight(),
              offset: e.offset()
            }
      }
      var n,
        o = Math.max,
        a = Math.abs,
        r = /left|center|right/,
        h = /top|center|bottom/,
        l = /[\+\-]\d+(\.[\d]+)?%?/,
        u = /^\w+/,
        c = /%$/,
        d = t.fn.position
      ;(t.position = {
        scrollbarWidth: function () {
          if (void 0 !== n) return n
          var e,
            i,
            s = t(
              "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
            ),
            o = s.children()[0]
          return (
            t('body').append(s),
            (e = o.offsetWidth),
            s.css('overflow', 'scroll'),
            (i = o.offsetWidth),
            e === i && (i = s[0].clientWidth),
            s.remove(),
            (n = e - i)
          )
        },
        getScrollInfo: function (e) {
          var i = e.isWindow || e.isDocument ? '' : e.element.css('overflow-x'),
            s = e.isWindow || e.isDocument ? '' : e.element.css('overflow-y'),
            n =
              'scroll' === i ||
              ('auto' === i && e.width < e.element[0].scrollWidth),
            o =
              'scroll' === s ||
              ('auto' === s && e.height < e.element[0].scrollHeight)
          return {
            width: o ? t.position.scrollbarWidth() : 0,
            height: n ? t.position.scrollbarWidth() : 0
          }
        },
        getWithinInfo: function (e) {
          var i = t(e || window),
            s = t.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType,
            o = !s && !n
          return {
            element: i,
            isWindow: s,
            isDocument: n,
            offset: o ? t(e).offset() : { left: 0, top: 0 },
            scrollLeft: i.scrollLeft(),
            scrollTop: i.scrollTop(),
            width: i.outerWidth(),
            height: i.outerHeight()
          }
        }
      }),
        (t.fn.position = function (n) {
          if (!n || !n.of) return d.apply(this, arguments)
          n = t.extend({}, n)
          var c,
            p,
            f,
            m,
            g,
            _,
            v = t(n.of),
            b = t.position.getWithinInfo(n.within),
            y = t.position.getScrollInfo(b),
            w = (n.collision || 'flip').split(' '),
            k = {}
          return (
            (_ = s(v)),
            v[0].preventDefault && (n.at = 'left top'),
            (p = _.width),
            (f = _.height),
            (m = _.offset),
            (g = t.extend({}, m)),
            t.each(['my', 'at'], function () {
              var t,
                e,
                i = (n[this] || '').split(' ')
              1 === i.length &&
                (i = r.test(i[0])
                  ? i.concat(['center'])
                  : h.test(i[0])
                  ? ['center'].concat(i)
                  : ['center', 'center']),
                (i[0] = r.test(i[0]) ? i[0] : 'center'),
                (i[1] = h.test(i[1]) ? i[1] : 'center'),
                (t = l.exec(i[0])),
                (e = l.exec(i[1])),
                (k[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                (n[this] = [u.exec(i[0])[0], u.exec(i[1])[0]])
            }),
            1 === w.length && (w[1] = w[0]),
            'right' === n.at[0]
              ? (g.left += p)
              : 'center' === n.at[0] && (g.left += p / 2),
            'bottom' === n.at[1]
              ? (g.top += f)
              : 'center' === n.at[1] && (g.top += f / 2),
            (c = e(k.at, p, f)),
            (g.left += c[0]),
            (g.top += c[1]),
            this.each(function () {
              var s,
                r,
                h = t(this),
                l = h.outerWidth(),
                u = h.outerHeight(),
                d = i(this, 'marginLeft'),
                _ = i(this, 'marginTop'),
                x = l + d + i(this, 'marginRight') + y.width,
                C = u + _ + i(this, 'marginBottom') + y.height,
                D = t.extend({}, g),
                I = e(k.my, h.outerWidth(), h.outerHeight())
              'right' === n.my[0]
                ? (D.left -= l)
                : 'center' === n.my[0] && (D.left -= l / 2),
                'bottom' === n.my[1]
                  ? (D.top -= u)
                  : 'center' === n.my[1] && (D.top -= u / 2),
                (D.left += I[0]),
                (D.top += I[1]),
                (s = { marginLeft: d, marginTop: _ }),
                t.each(['left', 'top'], function (e, i) {
                  t.ui.position[w[e]] &&
                    t.ui.position[w[e]][i](D, {
                      targetWidth: p,
                      targetHeight: f,
                      elemWidth: l,
                      elemHeight: u,
                      collisionPosition: s,
                      collisionWidth: x,
                      collisionHeight: C,
                      offset: [c[0] + I[0], c[1] + I[1]],
                      my: n.my,
                      at: n.at,
                      within: b,
                      elem: h
                    })
                }),
                n.using &&
                  (r = function (t) {
                    var e = m.left - D.left,
                      i = e + p - l,
                      s = m.top - D.top,
                      r = s + f - u,
                      c = {
                        target: {
                          element: v,
                          left: m.left,
                          top: m.top,
                          width: p,
                          height: f
                        },
                        element: {
                          element: h,
                          left: D.left,
                          top: D.top,
                          width: l,
                          height: u
                        },
                        horizontal: 0 > i ? 'left' : e > 0 ? 'right' : 'center',
                        vertical: 0 > r ? 'top' : s > 0 ? 'bottom' : 'middle'
                      }
                    l > p && p > a(e + i) && (c.horizontal = 'center'),
                      u > f && f > a(s + r) && (c.vertical = 'middle'),
                      (c.important =
                        o(a(e), a(i)) > o(a(s), a(r))
                          ? 'horizontal'
                          : 'vertical'),
                      n.using.call(this, t, c)
                  }),
                h.offset(t.extend(D, { using: r }))
            })
          )
        }),
        (t.ui.position = {
          fit: {
            left: function (t, e) {
              var i,
                s = e.within,
                n = s.isWindow ? s.scrollLeft : s.offset.left,
                a = s.width,
                r = t.left - e.collisionPosition.marginLeft,
                h = n - r,
                l = r + e.collisionWidth - a - n
              e.collisionWidth > a
                ? h > 0 && 0 >= l
                  ? ((i = t.left + h + e.collisionWidth - a - n),
                    (t.left += h - i))
                  : (t.left =
                      l > 0 && 0 >= h
                        ? n
                        : h > l
                        ? n + a - e.collisionWidth
                        : n)
                : h > 0
                ? (t.left += h)
                : l > 0
                ? (t.left -= l)
                : (t.left = o(t.left - r, t.left))
            },
            top: function (t, e) {
              var i,
                s = e.within,
                n = s.isWindow ? s.scrollTop : s.offset.top,
                a = e.within.height,
                r = t.top - e.collisionPosition.marginTop,
                h = n - r,
                l = r + e.collisionHeight - a - n
              e.collisionHeight > a
                ? h > 0 && 0 >= l
                  ? ((i = t.top + h + e.collisionHeight - a - n),
                    (t.top += h - i))
                  : (t.top =
                      l > 0 && 0 >= h
                        ? n
                        : h > l
                        ? n + a - e.collisionHeight
                        : n)
                : h > 0
                ? (t.top += h)
                : l > 0
                ? (t.top -= l)
                : (t.top = o(t.top - r, t.top))
            }
          },
          flip: {
            left: function (t, e) {
              var i,
                s,
                n = e.within,
                o = n.offset.left + n.scrollLeft,
                r = n.width,
                h = n.isWindow ? n.scrollLeft : n.offset.left,
                l = t.left - e.collisionPosition.marginLeft,
                u = l - h,
                c = l + e.collisionWidth - r - h,
                d =
                  'left' === e.my[0]
                    ? -e.elemWidth
                    : 'right' === e.my[0]
                    ? e.elemWidth
                    : 0,
                p =
                  'left' === e.at[0]
                    ? e.targetWidth
                    : 'right' === e.at[0]
                    ? -e.targetWidth
                    : 0,
                f = -2 * e.offset[0]
              0 > u
                ? ((i = t.left + d + p + f + e.collisionWidth - r - o),
                  (0 > i || a(u) > i) && (t.left += d + p + f))
                : c > 0 &&
                  ((s =
                    t.left - e.collisionPosition.marginLeft + d + p + f - h),
                  (s > 0 || c > a(s)) && (t.left += d + p + f))
            },
            top: function (t, e) {
              var i,
                s,
                n = e.within,
                o = n.offset.top + n.scrollTop,
                r = n.height,
                h = n.isWindow ? n.scrollTop : n.offset.top,
                l = t.top - e.collisionPosition.marginTop,
                u = l - h,
                c = l + e.collisionHeight - r - h,
                d = 'top' === e.my[1],
                p = d ? -e.elemHeight : 'bottom' === e.my[1] ? e.elemHeight : 0,
                f =
                  'top' === e.at[1]
                    ? e.targetHeight
                    : 'bottom' === e.at[1]
                    ? -e.targetHeight
                    : 0,
                m = -2 * e.offset[1]
              0 > u
                ? ((s = t.top + p + f + m + e.collisionHeight - r - o),
                  (0 > s || a(u) > s) && (t.top += p + f + m))
                : c > 0 &&
                  ((i = t.top - e.collisionPosition.marginTop + p + f + m - h),
                  (i > 0 || c > a(i)) && (t.top += p + f + m))
            }
          },
          flipfit: {
            left: function () {
              t.ui.position.flip.left.apply(this, arguments),
                t.ui.position.fit.left.apply(this, arguments)
            },
            top: function () {
              t.ui.position.flip.top.apply(this, arguments),
                t.ui.position.fit.top.apply(this, arguments)
            }
          }
        })
    })(),
    t.ui.position,
    t.extend(t.expr[':'], {
      data: t.expr.createPseudo
        ? t.expr.createPseudo(function (e) {
            return function (i) {
              return !!t.data(i, e)
            }
          })
        : function (e, i, s) {
            return !!t.data(e, s[3])
          }
    }),
    t.fn.extend({
      disableSelection: (function () {
        var t =
          'onselectstart' in document.createElement('div')
            ? 'selectstart'
            : 'mousedown'
        return function () {
          return this.on(t + '.ui-disableSelection', function (t) {
            t.preventDefault()
          })
        }
      })(),
      enableSelection: function () {
        return this.off('.ui-disableSelection')
      }
    }),
    (t.ui.focusable = function (i, s) {
      var n,
        o,
        a,
        r,
        h,
        l = i.nodeName.toLowerCase()
      return 'area' === l
        ? ((n = i.parentNode),
          (o = n.name),
          i.href && o && 'map' === n.nodeName.toLowerCase()
            ? ((a = t("img[usemap='#" + o + "']")),
              a.length > 0 && a.is(':visible'))
            : !1)
        : (/^(input|select|textarea|button|object)$/.test(l)
            ? ((r = !i.disabled),
              r && ((h = t(i).closest('fieldset')[0]), h && (r = !h.disabled)))
            : (r = 'a' === l ? i.href || s : s),
          r && t(i).is(':visible') && e(t(i)))
    }),
    t.extend(t.expr[':'], {
      focusable: function (e) {
        return t.ui.focusable(e, null != t.attr(e, 'tabindex'))
      }
    }),
    t.ui.focusable,
    (t.fn.form = function () {
      return 'string' == typeof this[0].form
        ? this.closest('form')
        : t(this[0].form)
    }),
    (t.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = t(this)
        setTimeout(function () {
          var i = e.data('ui-form-reset-instances')
          t.each(i, function () {
            this.refresh()
          })
        })
      },
      _bindFormResetHandler: function () {
        if (((this.form = this.element.form()), this.form.length)) {
          var t = this.form.data('ui-form-reset-instances') || []
          t.length ||
            this.form.on('reset.ui-form-reset', this._formResetHandler),
            t.push(this),
            this.form.data('ui-form-reset-instances', t)
        }
      },
      _unbindFormResetHandler: function () {
        if (this.form.length) {
          var e = this.form.data('ui-form-reset-instances')
          e.splice(t.inArray(this, e), 1),
            e.length
              ? this.form.data('ui-form-reset-instances', e)
              : this.form
                  .removeData('ui-form-reset-instances')
                  .off('reset.ui-form-reset')
        }
      }
    }),
    '1.7' === t.fn.jquery.substring(0, 3) &&
      (t.each(['Width', 'Height'], function (e, i) {
        function s (e, i, s, o) {
          return (
            t.each(n, function () {
              ;(i -= parseFloat(t.css(e, 'padding' + this)) || 0),
                s &&
                  (i -= parseFloat(t.css(e, 'border' + this + 'Width')) || 0),
                o && (i -= parseFloat(t.css(e, 'margin' + this)) || 0)
            }),
            i
          )
        }
        var n = 'Width' === i ? ['Left', 'Right'] : ['Top', 'Bottom'],
          o = i.toLowerCase(),
          a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
          }
        ;(t.fn['inner' + i] = function (e) {
          return void 0 === e
            ? a['inner' + i].call(this)
            : this.each(function () {
                t(this).css(o, s(this, e) + 'px')
              })
        }),
          (t.fn['outer' + i] = function (e, n) {
            return 'number' != typeof e
              ? a['outer' + i].call(this, e)
              : this.each(function () {
                  t(this).css(o, s(this, e, !0, n) + 'px')
                })
          })
      }),
      (t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      })),
    (t.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }),
    (t.ui.escapeSelector = (function () {
      var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g
      return function (e) {
        return e.replace(t, '\\$1')
      }
    })()),
    (t.fn.labels = function () {
      var e, i, s, n, o
      return this[0].labels && this[0].labels.length
        ? this.pushStack(this[0].labels)
        : ((n = this.eq(0).parents('label')),
          (s = this.attr('id')),
          s &&
            ((e = this.eq(0)
              .parents()
              .last()),
            (o = e.add(e.length ? e.siblings() : this.siblings())),
            (i = "label[for='" + t.ui.escapeSelector(s) + "']"),
            (n = n.add(o.find(i).addBack(i)))),
          this.pushStack(n))
    }),
    (t.fn.scrollParent = function (e) {
      var i = this.css('position'),
        s = 'absolute' === i,
        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents()
          .filter(function () {
            var e = t(this)
            return s && 'static' === e.css('position')
              ? !1
              : n.test(
                  e.css('overflow') + e.css('overflow-y') + e.css('overflow-x')
                )
          })
          .eq(0)
      return 'fixed' !== i && o.length
        ? o
        : t(this[0].ownerDocument || document)
    }),
    t.extend(t.expr[':'], {
      tabbable: function (e) {
        var i = t.attr(e, 'tabindex'),
          s = null != i
        return (!s || i >= 0) && t.ui.focusable(e, s)
      }
    }),
    t.fn.extend({
      uniqueId: (function () {
        var t = 0
        return function () {
          return this.each(function () {
            this.id || (this.id = 'ui-id-' + ++t)
          })
        }
      })(),
      removeUniqueId: function () {
        return this.each(function () {
          ;/^ui-id-\d+$/.test(this.id) && t(this).removeAttr('id')
        })
      }
    }),
    (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()))
  var u = !1
  t(document).on('mouseup', function () {
    u = !1
  }),
    t.widget('ui.mouse', {
      version: '1.12.1',
      options: {
        cancel: 'input, textarea, button, select, option',
        distance: 1,
        delay: 0
      },
      _mouseInit: function () {
        var e = this
        this.element
          .on('mousedown.' + this.widgetName, function (t) {
            return e._mouseDown(t)
          })
          .on('click.' + this.widgetName, function (i) {
            return !0 === t.data(i.target, e.widgetName + '.preventClickEvent')
              ? (t.removeData(i.target, e.widgetName + '.preventClickEvent'),
                i.stopImmediatePropagation(),
                !1)
              : void 0
          }),
          (this.started = !1)
      },
      _mouseDestroy: function () {
        this.element.off('.' + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
              .off('mouseup.' + this.widgetName, this._mouseUpDelegate)
      },
      _mouseDown: function (e) {
        if (!u) {
          ;(this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(e),
            (this._mouseDownEvent = e)
          var i = this,
            s = 1 === e.which,
            n =
              'string' == typeof this.options.cancel && e.target.nodeName
                ? t(e.target).closest(this.options.cancel).length
                : !1
          return s && !n && this._mouseCapture(e)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = this._mouseStart(e) !== !1),
              !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 ===
                    t.data(e.target, this.widgetName + '.preventClickEvent') &&
                    t.removeData(
                      e.target,
                      this.widgetName + '.preventClickEvent'
                    ),
                  (this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t)
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t)
                  }),
                  this.document
                    .on('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                    .on('mouseup.' + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (u = !0),
                  !0))
            : !0
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (
            t.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !e.button
          )
            return this._mouseUp(e)
          if (!e.which)
            if (
              e.originalEvent.altKey ||
              e.originalEvent.ctrlKey ||
              e.originalEvent.metaKey ||
              e.originalEvent.shiftKey
            )
              this.ignoreMissingWhich = !0
            else if (!this.ignoreMissingWhich) return this._mouseUp(e)
        }
        return (
          (e.which || e.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, e) !== !1),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted)
        )
      },
      _mouseUp: function (e) {
        this.document
          .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
          .off('mouseup.' + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target &&
              t.data(e.target, this.widgetName + '.preventClickEvent', !0),
            this._mouseStop(e)),
          this._mouseDelayTimer &&
            (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
          (this.ignoreMissingWhich = !1),
          (u = !1),
          e.preventDefault()
      },
      _mouseDistanceMet: function (t) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - t.pageX),
            Math.abs(this._mouseDownEvent.pageY - t.pageY)
          ) >= this.options.distance
        )
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0
      }
    }),
    (t.ui.plugin = {
      add: function (e, i, s) {
        var n,
          o = t.ui[e].prototype
        for (n in s)
          (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([i, s[n]])
      },
      call: function (t, e, i, s) {
        var n,
          o = t.plugins[e]
        if (
          o &&
          (s ||
            (t.element[0].parentNode &&
              11 !== t.element[0].parentNode.nodeType))
        )
          for (n = 0; o.length > n; n++)
            t.options[o[n][0]] && o[n][1].apply(t.element, i)
      }
    }),
    (t.ui.safeActiveElement = function (t) {
      var e
      try {
        e = t.activeElement
      } catch (i) {
        e = t.body
      }
      return e || (e = t.body), e.nodeName || (e = t.body), e
    }),
    (t.ui.safeBlur = function (e) {
      e && 'body' !== e.nodeName.toLowerCase() && t(e).trigger('blur')
    }),
    t.widget('ui.draggable', t.ui.mouse, {
      version: '1.12.1',
      widgetEventPrefix: 'drag',
      options: {
        addClasses: !0,
        appendTo: 'parent',
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: 'auto',
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: 'original',
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: 'default',
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: 'both',
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null
      },
      _create: function () {
        'original' === this.options.helper && this._setPositionRelative(),
          this.options.addClasses && this._addClass('ui-draggable'),
          this._setHandleClassName(),
          this._mouseInit()
      },
      _setOption: function (t, e) {
        this._super(t, e),
          'handle' === t &&
            (this._removeHandleClassName(), this._setHandleClassName())
      },
      _destroy: function () {
        return (this.helper || this.element).is('.ui-draggable-dragging')
          ? ((this.destroyOnClear = !0), void 0)
          : (this._removeHandleClassName(), this._mouseDestroy(), void 0)
      },
      _mouseCapture: function (e) {
        var i = this.options
        return this.helper ||
          i.disabled ||
          t(e.target).closest('.ui-resizable-handle').length > 0
          ? !1
          : ((this.handle = this._getHandle(e)),
            this.handle
              ? (this._blurActiveElement(e),
                this._blockFrames(i.iframeFix === !0 ? 'iframe' : i.iframeFix),
                !0)
              : !1)
      },
      _blockFrames: function (e) {
        this.iframeBlocks = this.document.find(e).map(function () {
          var e = t(this)
          return t('<div>')
            .css('position', 'absolute')
            .appendTo(e.parent())
            .outerWidth(e.outerWidth())
            .outerHeight(e.outerHeight())
            .offset(e.offset())[0]
        })
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks)
      },
      _blurActiveElement: function (e) {
        var i = t.ui.safeActiveElement(this.document[0]),
          s = t(e.target)
        s.closest(i).length || t.ui.safeBlur(i)
      },
      _mouseStart: function (e) {
        var i = this.options
        return (
          (this.helper = this._createHelper(e)),
          this._addClass(this.helper, 'ui-draggable-dragging'),
          this._cacheHelperProportions(),
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css('position')),
          (this.scrollParent = this.helper.scrollParent(!0)),
          (this.offsetParent = this.helper.offsetParent()),
          (this.hasFixedAncestor =
            this.helper.parents().filter(function () {
              return 'fixed' === t(this).css('position')
            }).length > 0),
          (this.positionAbs = this.element.offset()),
          this._refreshOffsets(e),
          (this.originalPosition = this.position = this._generatePosition(
            e,
            !1
          )),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
          this._setContainment(),
          this._trigger('start', e) === !1
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              t.ui.ddmanager &&
                !i.dropBehaviour &&
                t.ui.ddmanager.prepareOffsets(this, e),
              this._mouseDrag(e, !0),
              t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
              !0)
        )
      },
      _refreshOffsets: function (t) {
        ;(this.offset = {
          top: this.positionAbs.top - this.margins.top,
          left: this.positionAbs.left - this.margins.left,
          scroll: !1,
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset()
        }),
          (this.offset.click = {
            left: t.pageX - this.offset.left,
            top: t.pageY - this.offset.top
          })
      },
      _mouseDrag: function (e, i) {
        if (
          (this.hasFixedAncestor &&
            (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(e, !0)),
          (this.positionAbs = this._convertPositionTo('absolute')),
          !i)
        ) {
          var s = this._uiHash()
          if (this._trigger('drag', e, s) === !1)
            return this._mouseUp(new t.Event('mouseup', e)), !1
          this.position = s.position
        }
        return (
          (this.helper[0].style.left = this.position.left + 'px'),
          (this.helper[0].style.top = this.position.top + 'px'),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          !1
        )
      },
      _mouseStop: function (e) {
        var i = this,
          s = !1
        return (
          t.ui.ddmanager &&
            !this.options.dropBehaviour &&
            (s = t.ui.ddmanager.drop(this, e)),
          this.dropped && ((s = this.dropped), (this.dropped = !1)),
          ('invalid' === this.options.revert && !s) ||
          ('valid' === this.options.revert && s) ||
          this.options.revert === !0 ||
          (t.isFunction(this.options.revert) &&
            this.options.revert.call(this.element, s))
            ? t(this.helper).animate(
                this.originalPosition,
                parseInt(this.options.revertDuration, 10),
                function () {
                  i._trigger('stop', e) !== !1 && i._clear()
                }
              )
            : this._trigger('stop', e) !== !1 && this._clear(),
          !1
        )
      },
      _mouseUp: function (e) {
        return (
          this._unblockFrames(),
          t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
          this.handleElement.is(e.target) && this.element.trigger('focus'),
          t.ui.mouse.prototype._mouseUp.call(this, e)
        )
      },
      cancel: function () {
        return (
          this.helper.is('.ui-draggable-dragging')
            ? this._mouseUp(new t.Event('mouseup', { target: this.element[0] }))
            : this._clear(),
          this
        )
      },
      _getHandle: function (e) {
        return this.options.handle
          ? !!t(e.target).closest(this.element.find(this.options.handle)).length
          : !0
      },
      _setHandleClassName: function () {
        ;(this.handleElement = this.options.handle
          ? this.element.find(this.options.handle)
          : this.element),
          this._addClass(this.handleElement, 'ui-draggable-handle')
      },
      _removeHandleClassName: function () {
        this._removeClass(this.handleElement, 'ui-draggable-handle')
      },
      _createHelper: function (e) {
        var i = this.options,
          s = t.isFunction(i.helper),
          n = s
            ? t(i.helper.apply(this.element[0], [e]))
            : 'clone' === i.helper
            ? this.element.clone().removeAttr('id')
            : this.element
        return (
          n.parents('body').length ||
            n.appendTo(
              'parent' === i.appendTo ? this.element[0].parentNode : i.appendTo
            ),
          s && n[0] === this.element[0] && this._setPositionRelative(),
          n[0] === this.element[0] ||
            /(fixed|absolute)/.test(n.css('position')) ||
            n.css('position', 'absolute'),
          n
        )
      },
      _setPositionRelative: function () {
        ;/^(?:r|a|f)/.test(this.element.css('position')) ||
          (this.element[0].style.position = 'relative')
      },
      _adjustOffsetFromHelper: function (e) {
        'string' == typeof e && (e = e.split(' ')),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          'left' in e && (this.offset.click.left = e.left + this.margins.left),
          'right' in e &&
            (this.offset.click.left =
              this.helperProportions.width - e.right + this.margins.left),
          'top' in e && (this.offset.click.top = e.top + this.margins.top),
          'bottom' in e &&
            (this.offset.click.top =
              this.helperProportions.height - e.bottom + this.margins.top)
      },
      _isRootNode: function (t) {
        return /(html|body)/i.test(t.tagName) || t === this.document[0]
      },
      _getParentOffset: function () {
        var e = this.offsetParent.offset(),
          i = this.document[0]
        return (
          'absolute' === this.cssPosition &&
            this.scrollParent[0] !== i &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()),
            (e.top += this.scrollParent.scrollTop())),
          this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
          {
            top:
              e.top +
              (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
            left:
              e.left +
              (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
          }
        )
      },
      _getRelativeOffset: function () {
        if ('relative' !== this.cssPosition) return { top: 0, left: 0 }
        var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0])
        return {
          top:
            t.top -
            (parseInt(this.helper.css('top'), 10) || 0) +
            (e ? 0 : this.scrollParent.scrollTop()),
          left:
            t.left -
            (parseInt(this.helper.css('left'), 10) || 0) +
            (e ? 0 : this.scrollParent.scrollLeft())
        }
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css('marginLeft'), 10) || 0,
          top: parseInt(this.element.css('marginTop'), 10) || 0,
          right: parseInt(this.element.css('marginRight'), 10) || 0,
          bottom: parseInt(this.element.css('marginBottom'), 10) || 0
        }
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight()
        }
      },
      _setContainment: function () {
        var e,
          i,
          s,
          n = this.options,
          o = this.document[0]
        return (
          (this.relativeContainer = null),
          n.containment
            ? 'window' === n.containment
              ? ((this.containment = [
                  t(window).scrollLeft() -
                    this.offset.relative.left -
                    this.offset.parent.left,
                  t(window).scrollTop() -
                    this.offset.relative.top -
                    this.offset.parent.top,
                  t(window).scrollLeft() +
                    t(window).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  t(window).scrollTop() +
                    (t(window).height() || o.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top
                ]),
                void 0)
              : 'document' === n.containment
              ? ((this.containment = [
                  0,
                  0,
                  t(o).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  (t(o).height() || o.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top
                ]),
                void 0)
              : n.containment.constructor === Array
              ? ((this.containment = n.containment), void 0)
              : ('parent' === n.containment &&
                  (n.containment = this.helper[0].parentNode),
                (i = t(n.containment)),
                (s = i[0]),
                s &&
                  ((e = /(scroll|auto)/.test(i.css('overflow'))),
                  (this.containment = [
                    (parseInt(i.css('borderLeftWidth'), 10) || 0) +
                      (parseInt(i.css('paddingLeft'), 10) || 0),
                    (parseInt(i.css('borderTopWidth'), 10) || 0) +
                      (parseInt(i.css('paddingTop'), 10) || 0),
                    (e
                      ? Math.max(s.scrollWidth, s.offsetWidth)
                      : s.offsetWidth) -
                      (parseInt(i.css('borderRightWidth'), 10) || 0) -
                      (parseInt(i.css('paddingRight'), 10) || 0) -
                      this.helperProportions.width -
                      this.margins.left -
                      this.margins.right,
                    (e
                      ? Math.max(s.scrollHeight, s.offsetHeight)
                      : s.offsetHeight) -
                      (parseInt(i.css('borderBottomWidth'), 10) || 0) -
                      (parseInt(i.css('paddingBottom'), 10) || 0) -
                      this.helperProportions.height -
                      this.margins.top -
                      this.margins.bottom
                  ]),
                  (this.relativeContainer = i)),
                void 0)
            : ((this.containment = null), void 0)
        )
      },
      _convertPositionTo: function (t, e) {
        e || (e = this.position)
        var i = 'absolute' === t ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0])
        return {
          top:
            e.top +
            this.offset.relative.top * i +
            this.offset.parent.top * i -
            ('fixed' === this.cssPosition
              ? -this.offset.scroll.top
              : s
              ? 0
              : this.offset.scroll.top) *
              i,
          left:
            e.left +
            this.offset.relative.left * i +
            this.offset.parent.left * i -
            ('fixed' === this.cssPosition
              ? -this.offset.scroll.left
              : s
              ? 0
              : this.offset.scroll.left) *
              i
        }
      },
      _generatePosition: function (t, e) {
        var i,
          s,
          n,
          o,
          a = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          h = t.pageX,
          l = t.pageY
        return (
          (r && this.offset.scroll) ||
            (this.offset.scroll = {
              top: this.scrollParent.scrollTop(),
              left: this.scrollParent.scrollLeft()
            }),
          e &&
            (this.containment &&
              (this.relativeContainer
                ? ((s = this.relativeContainer.offset()),
                  (i = [
                    this.containment[0] + s.left,
                    this.containment[1] + s.top,
                    this.containment[2] + s.left,
                    this.containment[3] + s.top
                  ]))
                : (i = this.containment),
              t.pageX - this.offset.click.left < i[0] &&
                (h = i[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < i[1] &&
                (l = i[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > i[2] &&
                (h = i[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > i[3] &&
                (l = i[3] + this.offset.click.top)),
            a.grid &&
              ((n = a.grid[1]
                ? this.originalPageY +
                  Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1]
                : this.originalPageY),
              (l = i
                ? n - this.offset.click.top >= i[1] ||
                  n - this.offset.click.top > i[3]
                  ? n
                  : n - this.offset.click.top >= i[1]
                  ? n - a.grid[1]
                  : n + a.grid[1]
                : n),
              (o = a.grid[0]
                ? this.originalPageX +
                  Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0]
                : this.originalPageX),
              (h = i
                ? o - this.offset.click.left >= i[0] ||
                  o - this.offset.click.left > i[2]
                  ? o
                  : o - this.offset.click.left >= i[0]
                  ? o - a.grid[0]
                  : o + a.grid[0]
                : o)),
            'y' === a.axis && (h = this.originalPageX),
            'x' === a.axis && (l = this.originalPageY)),
          {
            top:
              l -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ('fixed' === this.cssPosition
                ? -this.offset.scroll.top
                : r
                ? 0
                : this.offset.scroll.top),
            left:
              h -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ('fixed' === this.cssPosition
                ? -this.offset.scroll.left
                : r
                ? 0
                : this.offset.scroll.left)
          }
        )
      },
      _clear: function () {
        this._removeClass(this.helper, 'ui-draggable-dragging'),
          this.helper[0] === this.element[0] ||
            this.cancelHelperRemoval ||
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1),
          this.destroyOnClear && this.destroy()
      },
      _trigger: function (e, i, s) {
        return (
          (s = s || this._uiHash()),
          t.ui.plugin.call(this, e, [i, s, this], !0),
          /^(drag|start|stop)/.test(e) &&
            ((this.positionAbs = this._convertPositionTo('absolute')),
            (s.offset = this.positionAbs)),
          t.Widget.prototype._trigger.call(this, e, i, s)
        )
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs
        }
      }
    }),
    t.ui.plugin.add('draggable', 'connectToSortable', {
      start: function (e, i, s) {
        var n = t.extend({}, i, { item: s.element })
        ;(s.sortables = []),
          t(s.options.connectToSortable).each(function () {
            var i = t(this).sortable('instance')
            i &&
              !i.options.disabled &&
              (s.sortables.push(i),
              i.refreshPositions(),
              i._trigger('activate', e, n))
          })
      },
      stop: function (e, i, s) {
        var n = t.extend({}, i, { item: s.element })
        ;(s.cancelHelperRemoval = !1),
          t.each(s.sortables, function () {
            var t = this
            t.isOver
              ? ((t.isOver = 0),
                (s.cancelHelperRemoval = !0),
                (t.cancelHelperRemoval = !1),
                (t._storedCSS = {
                  position: t.placeholder.css('position'),
                  top: t.placeholder.css('top'),
                  left: t.placeholder.css('left')
                }),
                t._mouseStop(e),
                (t.options.helper = t.options._helper))
              : ((t.cancelHelperRemoval = !0), t._trigger('deactivate', e, n))
          })
      },
      drag: function (e, i, s) {
        t.each(s.sortables, function () {
          var n = !1,
            o = this
          ;(o.positionAbs = s.positionAbs),
            (o.helperProportions = s.helperProportions),
            (o.offset.click = s.offset.click),
            o._intersectsWith(o.containerCache) &&
              ((n = !0),
              t.each(s.sortables, function () {
                return (
                  (this.positionAbs = s.positionAbs),
                  (this.helperProportions = s.helperProportions),
                  (this.offset.click = s.offset.click),
                  this !== o &&
                    this._intersectsWith(this.containerCache) &&
                    t.contains(o.element[0], this.element[0]) &&
                    (n = !1),
                  n
                )
              })),
            n
              ? (o.isOver ||
                  ((o.isOver = 1),
                  (s._parent = i.helper.parent()),
                  (o.currentItem = i.helper
                    .appendTo(o.element)
                    .data('ui-sortable-item', !0)),
                  (o.options._helper = o.options.helper),
                  (o.options.helper = function () {
                    return i.helper[0]
                  }),
                  (e.target = o.currentItem[0]),
                  o._mouseCapture(e, !0),
                  o._mouseStart(e, !0, !0),
                  (o.offset.click.top = s.offset.click.top),
                  (o.offset.click.left = s.offset.click.left),
                  (o.offset.parent.left -=
                    s.offset.parent.left - o.offset.parent.left),
                  (o.offset.parent.top -=
                    s.offset.parent.top - o.offset.parent.top),
                  s._trigger('toSortable', e),
                  (s.dropped = o.element),
                  t.each(s.sortables, function () {
                    this.refreshPositions()
                  }),
                  (s.currentItem = s.element),
                  (o.fromOutside = s)),
                o.currentItem && (o._mouseDrag(e), (i.position = o.position)))
              : o.isOver &&
                ((o.isOver = 0),
                (o.cancelHelperRemoval = !0),
                (o.options._revert = o.options.revert),
                (o.options.revert = !1),
                o._trigger('out', e, o._uiHash(o)),
                o._mouseStop(e, !0),
                (o.options.revert = o.options._revert),
                (o.options.helper = o.options._helper),
                o.placeholder && o.placeholder.remove(),
                i.helper.appendTo(s._parent),
                s._refreshOffsets(e),
                (i.position = s._generatePosition(e, !0)),
                s._trigger('fromSortable', e),
                (s.dropped = !1),
                t.each(s.sortables, function () {
                  this.refreshPositions()
                }))
        })
      }
    }),
    t.ui.plugin.add('draggable', 'cursor', {
      start: function (e, i, s) {
        var n = t('body'),
          o = s.options
        n.css('cursor') && (o._cursor = n.css('cursor')),
          n.css('cursor', o.cursor)
      },
      stop: function (e, i, s) {
        var n = s.options
        n._cursor && t('body').css('cursor', n._cursor)
      }
    }),
    t.ui.plugin.add('draggable', 'opacity', {
      start: function (e, i, s) {
        var n = t(i.helper),
          o = s.options
        n.css('opacity') && (o._opacity = n.css('opacity')),
          n.css('opacity', o.opacity)
      },
      stop: function (e, i, s) {
        var n = s.options
        n._opacity && t(i.helper).css('opacity', n._opacity)
      }
    }),
    t.ui.plugin.add('draggable', 'scroll', {
      start: function (t, e, i) {
        i.scrollParentNotHidden ||
          (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
          i.scrollParentNotHidden[0] !== i.document[0] &&
            'HTML' !== i.scrollParentNotHidden[0].tagName &&
            (i.overflowOffset = i.scrollParentNotHidden.offset())
      },
      drag: function (e, i, s) {
        var n = s.options,
          o = !1,
          a = s.scrollParentNotHidden[0],
          r = s.document[0]
        a !== r && 'HTML' !== a.tagName
          ? ((n.axis && 'x' === n.axis) ||
              (s.overflowOffset.top + a.offsetHeight - e.pageY <
              n.scrollSensitivity
                ? (a.scrollTop = o = a.scrollTop + n.scrollSpeed)
                : e.pageY - s.overflowOffset.top < n.scrollSensitivity &&
                  (a.scrollTop = o = a.scrollTop - n.scrollSpeed)),
            (n.axis && 'y' === n.axis) ||
              (s.overflowOffset.left + a.offsetWidth - e.pageX <
              n.scrollSensitivity
                ? (a.scrollLeft = o = a.scrollLeft + n.scrollSpeed)
                : e.pageX - s.overflowOffset.left < n.scrollSensitivity &&
                  (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed)))
          : ((n.axis && 'x' === n.axis) ||
              (e.pageY - t(r).scrollTop() < n.scrollSensitivity
                ? (o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed))
                : t(window).height() - (e.pageY - t(r).scrollTop()) <
                    n.scrollSensitivity &&
                  (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))),
            (n.axis && 'y' === n.axis) ||
              (e.pageX - t(r).scrollLeft() < n.scrollSensitivity
                ? (o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed))
                : t(window).width() - (e.pageX - t(r).scrollLeft()) <
                    n.scrollSensitivity &&
                  (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))),
          o !== !1 &&
            t.ui.ddmanager &&
            !n.dropBehaviour &&
            t.ui.ddmanager.prepareOffsets(s, e)
      }
    }),
    t.ui.plugin.add('draggable', 'snap', {
      start: function (e, i, s) {
        var n = s.options
        ;(s.snapElements = []),
          t(
            n.snap.constructor !== String
              ? n.snap.items || ':data(ui-draggable)'
              : n.snap
          ).each(function () {
            var e = t(this),
              i = e.offset()
            this !== s.element[0] &&
              s.snapElements.push({
                item: this,
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: i.top,
                left: i.left
              })
          })
      },
      drag: function (e, i, s) {
        var n,
          o,
          a,
          r,
          h,
          l,
          u,
          c,
          d,
          p,
          f = s.options,
          m = f.snapTolerance,
          g = i.offset.left,
          _ = g + s.helperProportions.width,
          v = i.offset.top,
          b = v + s.helperProportions.height
        for (d = s.snapElements.length - 1; d >= 0; d--)
          (h = s.snapElements[d].left - s.margins.left),
            (l = h + s.snapElements[d].width),
            (u = s.snapElements[d].top - s.margins.top),
            (c = u + s.snapElements[d].height),
            h - m > _ ||
            g > l + m ||
            u - m > b ||
            v > c + m ||
            !t.contains(
              s.snapElements[d].item.ownerDocument,
              s.snapElements[d].item
            )
              ? (s.snapElements[d].snapping &&
                  s.options.snap.release &&
                  s.options.snap.release.call(
                    s.element,
                    e,
                    t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })
                  ),
                (s.snapElements[d].snapping = !1))
              : ('inner' !== f.snapMode &&
                  ((n = m >= Math.abs(u - b)),
                  (o = m >= Math.abs(c - v)),
                  (a = m >= Math.abs(h - _)),
                  (r = m >= Math.abs(l - g)),
                  n &&
                    (i.position.top = s._convertPositionTo('relative', {
                      top: u - s.helperProportions.height,
                      left: 0
                    }).top),
                  o &&
                    (i.position.top = s._convertPositionTo('relative', {
                      top: c,
                      left: 0
                    }).top),
                  a &&
                    (i.position.left = s._convertPositionTo('relative', {
                      top: 0,
                      left: h - s.helperProportions.width
                    }).left),
                  r &&
                    (i.position.left = s._convertPositionTo('relative', {
                      top: 0,
                      left: l
                    }).left)),
                (p = n || o || a || r),
                'outer' !== f.snapMode &&
                  ((n = m >= Math.abs(u - v)),
                  (o = m >= Math.abs(c - b)),
                  (a = m >= Math.abs(h - g)),
                  (r = m >= Math.abs(l - _)),
                  n &&
                    (i.position.top = s._convertPositionTo('relative', {
                      top: u,
                      left: 0
                    }).top),
                  o &&
                    (i.position.top = s._convertPositionTo('relative', {
                      top: c - s.helperProportions.height,
                      left: 0
                    }).top),
                  a &&
                    (i.position.left = s._convertPositionTo('relative', {
                      top: 0,
                      left: h
                    }).left),
                  r &&
                    (i.position.left = s._convertPositionTo('relative', {
                      top: 0,
                      left: l - s.helperProportions.width
                    }).left)),
                !s.snapElements[d].snapping &&
                  (n || o || a || r || p) &&
                  s.options.snap.snap &&
                  s.options.snap.snap.call(
                    s.element,
                    e,
                    t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })
                  ),
                (s.snapElements[d].snapping = n || o || a || r || p))
      }
    }),
    t.ui.plugin.add('draggable', 'stack', {
      start: function (e, i, s) {
        var n,
          o = s.options,
          a = t.makeArray(t(o.stack)).sort(function (e, i) {
            return (
              (parseInt(t(e).css('zIndex'), 10) || 0) -
              (parseInt(t(i).css('zIndex'), 10) || 0)
            )
          })
        a.length &&
          ((n = parseInt(t(a[0]).css('zIndex'), 10) || 0),
          t(a).each(function (e) {
            t(this).css('zIndex', n + e)
          }),
          this.css('zIndex', n + a.length))
      }
    }),
    t.ui.plugin.add('draggable', 'zIndex', {
      start: function (e, i, s) {
        var n = t(i.helper),
          o = s.options
        n.css('zIndex') && (o._zIndex = n.css('zIndex')),
          n.css('zIndex', o.zIndex)
      },
      stop: function (e, i, s) {
        var n = s.options
        n._zIndex && t(i.helper).css('zIndex', n._zIndex)
      }
    }),
    t.ui.draggable,
    t.widget('ui.droppable', {
      version: '1.12.1',
      widgetEventPrefix: 'drop',
      options: {
        accept: '*',
        addClasses: !0,
        greedy: !1,
        scope: 'default',
        tolerance: 'intersect',
        activate: null,
        deactivate: null,
        drop: null,
        out: null,
        over: null
      },
      _create: function () {
        var e,
          i = this.options,
          s = i.accept
        ;(this.isover = !1),
          (this.isout = !0),
          (this.accept = t.isFunction(s)
            ? s
            : function (t) {
                return t.is(s)
              }),
          (this.proportions = function () {
            return arguments.length
              ? ((e = arguments[0]), void 0)
              : e
              ? e
              : (e = {
                  width: this.element[0].offsetWidth,
                  height: this.element[0].offsetHeight
                })
          }),
          this._addToManager(i.scope),
          i.addClasses && this._addClass('ui-droppable')
      },
      _addToManager: function (e) {
        ;(t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || []),
          t.ui.ddmanager.droppables[e].push(this)
      },
      _splice: function (t) {
        for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
      },
      _destroy: function () {
        var e = t.ui.ddmanager.droppables[this.options.scope]
        this._splice(e)
      },
      _setOption: function (e, i) {
        if ('accept' === e)
          this.accept = t.isFunction(i)
            ? i
            : function (t) {
                return t.is(i)
              }
        else if ('scope' === e) {
          var s = t.ui.ddmanager.droppables[this.options.scope]
          this._splice(s), this._addToManager(i)
        }
        this._super(e, i)
      },
      _activate: function (e) {
        var i = t.ui.ddmanager.current
        this._addActiveClass(), i && this._trigger('activate', e, this.ui(i))
      },
      _deactivate: function (e) {
        var i = t.ui.ddmanager.current
        this._removeActiveClass(),
          i && this._trigger('deactivate', e, this.ui(i))
      },
      _over: function (e) {
        var i = t.ui.ddmanager.current
        i &&
          (i.currentItem || i.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._addHoverClass(), this._trigger('over', e, this.ui(i)))
      },
      _out: function (e) {
        var i = t.ui.ddmanager.current
        i &&
          (i.currentItem || i.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._removeHoverClass(), this._trigger('out', e, this.ui(i)))
      },
      _drop: function (e, i) {
        var s = i || t.ui.ddmanager.current,
          n = !1
        return s && (s.currentItem || s.element)[0] !== this.element[0]
          ? (this.element
              .find(':data(ui-droppable)')
              .not('.ui-draggable-dragging')
              .each(function () {
                var i = t(this).droppable('instance')
                return i.options.greedy &&
                  !i.options.disabled &&
                  i.options.scope === s.options.scope &&
                  i.accept.call(i.element[0], s.currentItem || s.element) &&
                  c(
                    s,
                    t.extend(i, { offset: i.element.offset() }),
                    i.options.tolerance,
                    e
                  )
                  ? ((n = !0), !1)
                  : void 0
              }),
            n
              ? !1
              : this.accept.call(this.element[0], s.currentItem || s.element)
              ? (this._removeActiveClass(),
                this._removeHoverClass(),
                this._trigger('drop', e, this.ui(s)),
                this.element)
              : !1)
          : !1
      },
      ui: function (t) {
        return {
          draggable: t.currentItem || t.element,
          helper: t.helper,
          position: t.position,
          offset: t.positionAbs
        }
      },
      _addHoverClass: function () {
        this._addClass('ui-droppable-hover')
      },
      _removeHoverClass: function () {
        this._removeClass('ui-droppable-hover')
      },
      _addActiveClass: function () {
        this._addClass('ui-droppable-active')
      },
      _removeActiveClass: function () {
        this._removeClass('ui-droppable-active')
      }
    })
  var c = (t.ui.intersect = (function () {
    function t (t, e, i) {
      return t >= e && e + i > t
    }
    return function (e, i, s, n) {
      if (!i.offset) return !1
      var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
        a = (e.positionAbs || e.position.absolute).top + e.margins.top,
        r = o + e.helperProportions.width,
        h = a + e.helperProportions.height,
        l = i.offset.left,
        u = i.offset.top,
        c = l + i.proportions().width,
        d = u + i.proportions().height
      switch (s) {
        case 'fit':
          return o >= l && c >= r && a >= u && d >= h
        case 'intersect':
          return (
            o + e.helperProportions.width / 2 > l &&
            c > r - e.helperProportions.width / 2 &&
            a + e.helperProportions.height / 2 > u &&
            d > h - e.helperProportions.height / 2
          )
        case 'pointer':
          return (
            t(n.pageY, u, i.proportions().height) &&
            t(n.pageX, l, i.proportions().width)
          )
        case 'touch':
          return (
            ((a >= u && d >= a) || (h >= u && d >= h) || (u > a && h > d)) &&
            ((o >= l && c >= o) || (r >= l && c >= r) || (l > o && r > c))
          )
        default:
          return !1
      }
    }
  })())
  ;(t.ui.ddmanager = {
    current: null,
    droppables: { default: [] },
    prepareOffsets: function (e, i) {
      var s,
        n,
        o = t.ui.ddmanager.droppables[e.options.scope] || [],
        a = i ? i.type : null,
        r = (e.currentItem || e.element).find(':data(ui-droppable)').addBack()
      t: for (s = 0; o.length > s; s++)
        if (
          !(
            o[s].options.disabled ||
            (e &&
              !o[s].accept.call(o[s].element[0], e.currentItem || e.element))
          )
        ) {
          for (n = 0; r.length > n; n++)
            if (r[n] === o[s].element[0]) {
              o[s].proportions().height = 0
              continue t
            }
          ;(o[s].visible = 'none' !== o[s].element.css('display')),
            o[s].visible &&
              ('mousedown' === a && o[s]._activate.call(o[s], i),
              (o[s].offset = o[s].element.offset()),
              o[s].proportions({
                width: o[s].element[0].offsetWidth,
                height: o[s].element[0].offsetHeight
              }))
        }
    },
    drop: function (e, i) {
      var s = !1
      return (
        t.each(
          (t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
          function () {
            this.options &&
              (!this.options.disabled &&
                this.visible &&
                c(e, this, this.options.tolerance, i) &&
                (s = this._drop.call(this, i) || s),
              !this.options.disabled &&
                this.visible &&
                this.accept.call(this.element[0], e.currentItem || e.element) &&
                ((this.isout = !0),
                (this.isover = !1),
                this._deactivate.call(this, i)))
          }
        ),
        s
      )
    },
    dragStart: function (e, i) {
      e.element.parentsUntil('body').on('scroll.droppable', function () {
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
      })
    },
    drag: function (e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
        t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
          if (!this.options.disabled && !this.greedyChild && this.visible) {
            var s,
              n,
              o,
              a = c(e, this, this.options.tolerance, i),
              r =
                !a && this.isover
                  ? 'isout'
                  : a && !this.isover
                  ? 'isover'
                  : null
            r &&
              (this.options.greedy &&
                ((n = this.options.scope),
                (o = this.element
                  .parents(':data(ui-droppable)')
                  .filter(function () {
                    return t(this).droppable('instance').options.scope === n
                  })),
                o.length &&
                  ((s = t(o[0]).droppable('instance')),
                  (s.greedyChild = 'isover' === r))),
              s &&
                'isover' === r &&
                ((s.isover = !1), (s.isout = !0), s._out.call(s, i)),
              (this[r] = !0),
              (this['isout' === r ? 'isover' : 'isout'] = !1),
              this['isover' === r ? '_over' : '_out'].call(this, i),
              s &&
                'isout' === r &&
                ((s.isout = !1), (s.isover = !0), s._over.call(s, i)))
          }
        })
    },
    dragStop: function (e, i) {
      e.element.parentsUntil('body').off('scroll.droppable'),
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
    }
  }),
    t.uiBackCompat !== !1 &&
      t.widget('ui.droppable', t.ui.droppable, {
        options: { hoverClass: !1, activeClass: !1 },
        _addActiveClass: function () {
          this._super(),
            this.options.activeClass &&
              this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function () {
          this._super(),
            this.options.activeClass &&
              this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function () {
          this._super(),
            this.options.hoverClass &&
              this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function () {
          this._super(),
            this.options.hoverClass &&
              this.element.removeClass(this.options.hoverClass)
        }
      }),
    t.ui.droppable,
    t.widget('ui.resizable', t.ui.mouse, {
      version: '1.12.1',
      widgetEventPrefix: 'resize',
      options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: 'slow',
        animateEasing: 'swing',
        aspectRatio: !1,
        autoHide: !1,
        classes: { 'ui-resizable-se': 'ui-icon ui-icon-gripsmall-diagonal-se' },
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: 'e,s,se',
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 90,
        resize: null,
        start: null,
        stop: null
      },
      _num: function (t) {
        return parseFloat(t) || 0
      },
      _isNumber: function (t) {
        return !isNaN(parseFloat(t))
      },
      _hasScroll: function (e, i) {
        if ('hidden' === t(e).css('overflow')) return !1
        var s = i && 'left' === i ? 'scrollLeft' : 'scrollTop',
          n = !1
        return e[s] > 0 ? !0 : ((e[s] = 1), (n = e[s] > 0), (e[s] = 0), n)
      },
      _create: function () {
        var e,
          i = this.options,
          s = this
        this._addClass('ui-resizable'),
          t.extend(this, {
            _aspectRatio: !!i.aspectRatio,
            aspectRatio: i.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper:
              i.helper || i.ghost || i.animate
                ? i.helper || 'ui-resizable-helper'
                : null
          }),
          this.element[0].nodeName.match(
            /^(canvas|textarea|input|select|button|img)$/i
          ) &&
            (this.element.wrap(
              t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css(
                {
                  position: this.element.css('position'),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css('top'),
                  left: this.element.css('left')
                }
              )
            ),
            (this.element = this.element
              .parent()
              .data('ui-resizable', this.element.resizable('instance'))),
            (this.elementIsWrapper = !0),
            (e = {
              marginTop: this.originalElement.css('marginTop'),
              marginRight: this.originalElement.css('marginRight'),
              marginBottom: this.originalElement.css('marginBottom'),
              marginLeft: this.originalElement.css('marginLeft')
            }),
            this.element.css(e),
            this.originalElement.css('margin', 0),
            (this.originalResizeStyle = this.originalElement.css('resize')),
            this.originalElement.css('resize', 'none'),
            this._proportionallyResizeElements.push(
              this.originalElement.css({
                position: 'static',
                zoom: 1,
                display: 'block'
              })
            ),
            this.originalElement.css(e),
            this._proportionallyResize()),
          this._setupHandles(),
          i.autoHide &&
            t(this.element)
              .on('mouseenter', function () {
                i.disabled ||
                  (s._removeClass('ui-resizable-autohide'), s._handles.show())
              })
              .on('mouseleave', function () {
                i.disabled ||
                  s.resizing ||
                  (s._addClass('ui-resizable-autohide'), s._handles.hide())
              }),
          this._mouseInit()
      },
      _destroy: function () {
        this._mouseDestroy()
        var e,
          i = function (e) {
            t(e)
              .removeData('resizable')
              .removeData('ui-resizable')
              .off('.resizable')
              .find('.ui-resizable-handle')
              .remove()
          }
        return (
          this.elementIsWrapper &&
            (i(this.element),
            (e = this.element),
            this.originalElement
              .css({
                position: e.css('position'),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css('top'),
                left: e.css('left')
              })
              .insertAfter(e),
            e.remove()),
          this.originalElement.css('resize', this.originalResizeStyle),
          i(this.originalElement),
          this
        )
      },
      _setOption: function (t, e) {
        switch ((this._super(t, e), t)) {
          case 'handles':
            this._removeHandles(), this._setupHandles()
            break
          default:
        }
      },
      _setupHandles: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this.options,
          r = this
        if (
          ((this.handles =
            a.handles ||
            (t('.ui-resizable-handle', this.element).length
              ? {
                  n: '.ui-resizable-n',
                  e: '.ui-resizable-e',
                  s: '.ui-resizable-s',
                  w: '.ui-resizable-w',
                  se: '.ui-resizable-se',
                  sw: '.ui-resizable-sw',
                  ne: '.ui-resizable-ne',
                  nw: '.ui-resizable-nw'
                }
              : 'e,s,se')),
          (this._handles = t()),
          this.handles.constructor === String)
        )
          for (
            'all' === this.handles && (this.handles = 'n,e,s,w,se,sw,ne,nw'),
              s = this.handles.split(','),
              this.handles = {},
              i = 0;
            s.length > i;
            i++
          )
            (e = t.trim(s[i])),
              (n = 'ui-resizable-' + e),
              (o = t('<div>')),
              this._addClass(o, 'ui-resizable-handle ' + n),
              o.css({ zIndex: a.zIndex }),
              (this.handles[e] = '.ui-resizable-' + e),
              this.element.append(o)
        ;(this._renderAxis = function (e) {
          var i, s, n, o
          e = e || this.element
          for (i in this.handles)
            this.handles[i].constructor === String
              ? (this.handles[i] = this.element
                  .children(this.handles[i])
                  .first()
                  .show())
              : (this.handles[i].jquery || this.handles[i].nodeType) &&
                ((this.handles[i] = t(this.handles[i])),
                this._on(this.handles[i], { mousedown: r._mouseDown })),
              this.elementIsWrapper &&
                this.originalElement[0].nodeName.match(
                  /^(textarea|input|select|button)$/i
                ) &&
                ((s = t(this.handles[i], this.element)),
                (o = /sw|ne|nw|se|n|s/.test(i)
                  ? s.outerHeight()
                  : s.outerWidth()),
                (n = [
                  'padding',
                  /ne|nw|n/.test(i)
                    ? 'Top'
                    : /se|sw|s/.test(i)
                    ? 'Bottom'
                    : /^e$/.test(i)
                    ? 'Right'
                    : 'Left'
                ].join('')),
                e.css(n, o),
                this._proportionallyResize()),
              (this._handles = this._handles.add(this.handles[i]))
        }),
          this._renderAxis(this.element),
          (this._handles = this._handles.add(
            this.element.find('.ui-resizable-handle')
          )),
          this._handles.disableSelection(),
          this._handles.on('mouseover', function () {
            r.resizing ||
              (this.className &&
                (o = this.className.match(
                  /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                )),
              (r.axis = o && o[1] ? o[1] : 'se'))
          }),
          a.autoHide &&
            (this._handles.hide(), this._addClass('ui-resizable-autohide'))
      },
      _removeHandles: function () {
        this._handles.remove()
      },
      _mouseCapture: function (e) {
        var i,
          s,
          n = !1
        for (i in this.handles)
          (s = t(this.handles[i])[0]),
            (s === e.target || t.contains(s, e.target)) && (n = !0)
        return !this.options.disabled && n
      },
      _mouseStart: function (e) {
        var i,
          s,
          n,
          o = this.options,
          a = this.element
        return (
          (this.resizing = !0),
          this._renderProxy(),
          (i = this._num(this.helper.css('left'))),
          (s = this._num(this.helper.css('top'))),
          o.containment &&
            ((i += t(o.containment).scrollLeft() || 0),
            (s += t(o.containment).scrollTop() || 0)),
          (this.offset = this.helper.offset()),
          (this.position = { left: i, top: s }),
          (this.size = this._helper
            ? { width: this.helper.width(), height: this.helper.height() }
            : { width: a.width(), height: a.height() }),
          (this.originalSize = this._helper
            ? { width: a.outerWidth(), height: a.outerHeight() }
            : { width: a.width(), height: a.height() }),
          (this.sizeDiff = {
            width: a.outerWidth() - a.width(),
            height: a.outerHeight() - a.height()
          }),
          (this.originalPosition = { left: i, top: s }),
          (this.originalMousePosition = { left: e.pageX, top: e.pageY }),
          (this.aspectRatio =
            'number' == typeof o.aspectRatio
              ? o.aspectRatio
              : this.originalSize.width / this.originalSize.height || 1),
          (n = t('.ui-resizable-' + this.axis).css('cursor')),
          t('body').css('cursor', 'auto' === n ? this.axis + '-resize' : n),
          this._addClass('ui-resizable-resizing'),
          this._propagate('start', e),
          !0
        )
      },
      _mouseDrag: function (e) {
        var i,
          s,
          n = this.originalMousePosition,
          o = this.axis,
          a = e.pageX - n.left || 0,
          r = e.pageY - n.top || 0,
          h = this._change[o]
        return (
          this._updatePrevProperties(),
          h
            ? ((i = h.apply(this, [e, a, r])),
              this._updateVirtualBoundaries(e.shiftKey),
              (this._aspectRatio || e.shiftKey) &&
                (i = this._updateRatio(i, e)),
              (i = this._respectSize(i, e)),
              this._updateCache(i),
              this._propagate('resize', e),
              (s = this._applyChanges()),
              !this._helper &&
                this._proportionallyResizeElements.length &&
                this._proportionallyResize(),
              t.isEmptyObject(s) ||
                (this._updatePrevProperties(),
                this._trigger('resize', e, this.ui()),
                this._applyChanges()),
              !1)
            : !1
        )
      },
      _mouseStop: function (e) {
        this.resizing = !1
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l = this.options,
          u = this
        return (
          this._helper &&
            ((i = this._proportionallyResizeElements),
            (s = i.length && /textarea/i.test(i[0].nodeName)),
            (n = s && this._hasScroll(i[0], 'left') ? 0 : u.sizeDiff.height),
            (o = s ? 0 : u.sizeDiff.width),
            (a = {
              width: u.helper.width() - o,
              height: u.helper.height() - n
            }),
            (r =
              parseFloat(u.element.css('left')) +
                (u.position.left - u.originalPosition.left) || null),
            (h =
              parseFloat(u.element.css('top')) +
                (u.position.top - u.originalPosition.top) || null),
            l.animate || this.element.css(t.extend(a, { top: h, left: r })),
            u.helper.height(u.size.height),
            u.helper.width(u.size.width),
            this._helper && !l.animate && this._proportionallyResize()),
          t('body').css('cursor', 'auto'),
          this._removeClass('ui-resizable-resizing'),
          this._propagate('stop', e),
          this._helper && this.helper.remove(),
          !1
        )
      },
      _updatePrevProperties: function () {
        ;(this.prevPosition = {
          top: this.position.top,
          left: this.position.left
        }),
          (this.prevSize = { width: this.size.width, height: this.size.height })
      },
      _applyChanges: function () {
        var t = {}
        return (
          this.position.top !== this.prevPosition.top &&
            (t.top = this.position.top + 'px'),
          this.position.left !== this.prevPosition.left &&
            (t.left = this.position.left + 'px'),
          this.size.width !== this.prevSize.width &&
            (t.width = this.size.width + 'px'),
          this.size.height !== this.prevSize.height &&
            (t.height = this.size.height + 'px'),
          this.helper.css(t),
          t
        )
      },
      _updateVirtualBoundaries: function (t) {
        var e,
          i,
          s,
          n,
          o,
          a = this.options
        ;(o = {
          minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
          maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
          minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
          maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
        }),
          (this._aspectRatio || t) &&
            ((e = o.minHeight * this.aspectRatio),
            (s = o.minWidth / this.aspectRatio),
            (i = o.maxHeight * this.aspectRatio),
            (n = o.maxWidth / this.aspectRatio),
            e > o.minWidth && (o.minWidth = e),
            s > o.minHeight && (o.minHeight = s),
            o.maxWidth > i && (o.maxWidth = i),
            o.maxHeight > n && (o.maxHeight = n)),
          (this._vBoundaries = o)
      },
      _updateCache: function (t) {
        ;(this.offset = this.helper.offset()),
          this._isNumber(t.left) && (this.position.left = t.left),
          this._isNumber(t.top) && (this.position.top = t.top),
          this._isNumber(t.height) && (this.size.height = t.height),
          this._isNumber(t.width) && (this.size.width = t.width)
      },
      _updateRatio: function (t) {
        var e = this.position,
          i = this.size,
          s = this.axis
        return (
          this._isNumber(t.height)
            ? (t.width = t.height * this.aspectRatio)
            : this._isNumber(t.width) &&
              (t.height = t.width / this.aspectRatio),
          'sw' === s &&
            ((t.left = e.left + (i.width - t.width)), (t.top = null)),
          'nw' === s &&
            ((t.top = e.top + (i.height - t.height)),
            (t.left = e.left + (i.width - t.width))),
          t
        )
      },
      _respectSize: function (t) {
        var e = this._vBoundaries,
          i = this.axis,
          s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
          n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
          a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.originalPosition.top + this.originalSize.height,
          l = /sw|nw|w/.test(i),
          u = /nw|ne|n/.test(i)
        return (
          o && (t.width = e.minWidth),
          a && (t.height = e.minHeight),
          s && (t.width = e.maxWidth),
          n && (t.height = e.maxHeight),
          o && l && (t.left = r - e.minWidth),
          s && l && (t.left = r - e.maxWidth),
          a && u && (t.top = h - e.minHeight),
          n && u && (t.top = h - e.maxHeight),
          t.width || t.height || t.left || !t.top
            ? t.width || t.height || t.top || !t.left || (t.left = null)
            : (t.top = null),
          t
        )
      },
      _getPaddingPlusBorderDimensions: function (t) {
        for (
          var e = 0,
            i = [],
            s = [
              t.css('borderTopWidth'),
              t.css('borderRightWidth'),
              t.css('borderBottomWidth'),
              t.css('borderLeftWidth')
            ],
            n = [
              t.css('paddingTop'),
              t.css('paddingRight'),
              t.css('paddingBottom'),
              t.css('paddingLeft')
            ];
          4 > e;
          e++
        )
          (i[e] = parseFloat(s[e]) || 0), (i[e] += parseFloat(n[e]) || 0)
        return { height: i[0] + i[2], width: i[1] + i[3] }
      },
      _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length)
          for (
            var t, e = 0, i = this.helper || this.element;
            this._proportionallyResizeElements.length > e;
            e++
          )
            (t = this._proportionallyResizeElements[e]),
              this.outerDimensions ||
                (this.outerDimensions = this._getPaddingPlusBorderDimensions(
                  t
                )),
              t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0
              })
      },
      _renderProxy: function () {
        var e = this.element,
          i = this.options
        ;(this.elementOffset = e.offset()),
          this._helper
            ? ((this.helper =
                this.helper || t("<div style='overflow:hidden;'></div>")),
              this._addClass(this.helper, this._helper),
              this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: 'absolute',
                left: this.elementOffset.left + 'px',
                top: this.elementOffset.top + 'px',
                zIndex: ++i.zIndex
              }),
              this.helper.appendTo('body').disableSelection())
            : (this.helper = this.element)
      },
      _change: {
        e: function (t, e) {
          return { width: this.originalSize.width + e }
        },
        w: function (t, e) {
          var i = this.originalSize,
            s = this.originalPosition
          return { left: s.left + e, width: i.width - e }
        },
        n: function (t, e, i) {
          var s = this.originalSize,
            n = this.originalPosition
          return { top: n.top + i, height: s.height - i }
        },
        s: function (t, e, i) {
          return { height: this.originalSize.height + i }
        },
        se: function (e, i, s) {
          return t.extend(
            this._change.s.apply(this, arguments),
            this._change.e.apply(this, [e, i, s])
          )
        },
        sw: function (e, i, s) {
          return t.extend(
            this._change.s.apply(this, arguments),
            this._change.w.apply(this, [e, i, s])
          )
        },
        ne: function (e, i, s) {
          return t.extend(
            this._change.n.apply(this, arguments),
            this._change.e.apply(this, [e, i, s])
          )
        },
        nw: function (e, i, s) {
          return t.extend(
            this._change.n.apply(this, arguments),
            this._change.w.apply(this, [e, i, s])
          )
        }
      },
      _propagate: function (e, i) {
        t.ui.plugin.call(this, e, [i, this.ui()]),
          'resize' !== e && this._trigger(e, i, this.ui())
      },
      plugins: {},
      ui: function () {
        return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition
        }
      }
    }),
    t.ui.plugin.add('resizable', 'animate', {
      stop: function (e) {
        var i = t(this).resizable('instance'),
          s = i.options,
          n = i._proportionallyResizeElements,
          o = n.length && /textarea/i.test(n[0].nodeName),
          a = o && i._hasScroll(n[0], 'left') ? 0 : i.sizeDiff.height,
          r = o ? 0 : i.sizeDiff.width,
          h = { width: i.size.width - r, height: i.size.height - a },
          l =
            parseFloat(i.element.css('left')) +
              (i.position.left - i.originalPosition.left) || null,
          u =
            parseFloat(i.element.css('top')) +
              (i.position.top - i.originalPosition.top) || null
        i.element.animate(t.extend(h, u && l ? { top: u, left: l } : {}), {
          duration: s.animateDuration,
          easing: s.animateEasing,
          step: function () {
            var s = {
              width: parseFloat(i.element.css('width')),
              height: parseFloat(i.element.css('height')),
              top: parseFloat(i.element.css('top')),
              left: parseFloat(i.element.css('left'))
            }
            n && n.length && t(n[0]).css({ width: s.width, height: s.height }),
              i._updateCache(s),
              i._propagate('resize', e)
          }
        })
      }
    }),
    t.ui.plugin.add('resizable', 'containment', {
      start: function () {
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h = t(this).resizable('instance'),
          l = h.options,
          u = h.element,
          c = l.containment,
          d =
            c instanceof t ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c
        d &&
          ((h.containerElement = t(d)),
          /document/.test(c) || c === document
            ? ((h.containerOffset = { left: 0, top: 0 }),
              (h.containerPosition = { left: 0, top: 0 }),
              (h.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height:
                  t(document).height() || document.body.parentNode.scrollHeight
              }))
            : ((e = t(d)),
              (i = []),
              t(['Top', 'Right', 'Left', 'Bottom']).each(function (t, s) {
                i[t] = h._num(e.css('padding' + s))
              }),
              (h.containerOffset = e.offset()),
              (h.containerPosition = e.position()),
              (h.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
              }),
              (s = h.containerOffset),
              (n = h.containerSize.height),
              (o = h.containerSize.width),
              (a = h._hasScroll(d, 'left') ? d.scrollWidth : o),
              (r = h._hasScroll(d) ? d.scrollHeight : n),
              (h.parentData = {
                element: d,
                left: s.left,
                top: s.top,
                width: a,
                height: r
              })))
      },
      resize: function (e) {
        var i,
          s,
          n,
          o,
          a = t(this).resizable('instance'),
          r = a.options,
          h = a.containerOffset,
          l = a.position,
          u = a._aspectRatio || e.shiftKey,
          c = { top: 0, left: 0 },
          d = a.containerElement,
          p = !0
        d[0] !== document && /static/.test(d.css('position')) && (c = h),
          l.left < (a._helper ? h.left : 0) &&
            ((a.size.width =
              a.size.width +
              (a._helper
                ? a.position.left - h.left
                : a.position.left - c.left)),
            u && ((a.size.height = a.size.width / a.aspectRatio), (p = !1)),
            (a.position.left = r.helper ? h.left : 0)),
          l.top < (a._helper ? h.top : 0) &&
            ((a.size.height =
              a.size.height +
              (a._helper ? a.position.top - h.top : a.position.top)),
            u && ((a.size.width = a.size.height * a.aspectRatio), (p = !1)),
            (a.position.top = a._helper ? h.top : 0)),
          (n = a.containerElement.get(0) === a.element.parent().get(0)),
          (o = /relative|absolute/.test(a.containerElement.css('position'))),
          n && o
            ? ((a.offset.left = a.parentData.left + a.position.left),
              (a.offset.top = a.parentData.top + a.position.top))
            : ((a.offset.left = a.element.offset().left),
              (a.offset.top = a.element.offset().top)),
          (i = Math.abs(
            a.sizeDiff.width +
              (a._helper ? a.offset.left - c.left : a.offset.left - h.left)
          )),
          (s = Math.abs(
            a.sizeDiff.height +
              (a._helper ? a.offset.top - c.top : a.offset.top - h.top)
          )),
          i + a.size.width >= a.parentData.width &&
            ((a.size.width = a.parentData.width - i),
            u && ((a.size.height = a.size.width / a.aspectRatio), (p = !1))),
          s + a.size.height >= a.parentData.height &&
            ((a.size.height = a.parentData.height - s),
            u && ((a.size.width = a.size.height * a.aspectRatio), (p = !1))),
          p ||
            ((a.position.left = a.prevPosition.left),
            (a.position.top = a.prevPosition.top),
            (a.size.width = a.prevSize.width),
            (a.size.height = a.prevSize.height))
      },
      stop: function () {
        var e = t(this).resizable('instance'),
          i = e.options,
          s = e.containerOffset,
          n = e.containerPosition,
          o = e.containerElement,
          a = t(e.helper),
          r = a.offset(),
          h = a.outerWidth() - e.sizeDiff.width,
          l = a.outerHeight() - e.sizeDiff.height
        e._helper &&
          !i.animate &&
          /relative/.test(o.css('position')) &&
          t(this).css({ left: r.left - n.left - s.left, width: h, height: l }),
          e._helper &&
            !i.animate &&
            /static/.test(o.css('position')) &&
            t(this).css({ left: r.left - n.left - s.left, width: h, height: l })
      }
    }),
    t.ui.plugin.add('resizable', 'alsoResize', {
      start: function () {
        var e = t(this).resizable('instance'),
          i = e.options
        t(i.alsoResize).each(function () {
          var e = t(this)
          e.data('ui-resizable-alsoresize', {
            width: parseFloat(e.width()),
            height: parseFloat(e.height()),
            left: parseFloat(e.css('left')),
            top: parseFloat(e.css('top'))
          })
        })
      },
      resize: function (e, i) {
        var s = t(this).resizable('instance'),
          n = s.options,
          o = s.originalSize,
          a = s.originalPosition,
          r = {
            height: s.size.height - o.height || 0,
            width: s.size.width - o.width || 0,
            top: s.position.top - a.top || 0,
            left: s.position.left - a.left || 0
          }
        t(n.alsoResize).each(function () {
          var e = t(this),
            s = t(this).data('ui-resizable-alsoresize'),
            n = {},
            o = e.parents(i.originalElement[0]).length
              ? ['width', 'height']
              : ['width', 'height', 'top', 'left']
          t.each(o, function (t, e) {
            var i = (s[e] || 0) + (r[e] || 0)
            i && i >= 0 && (n[e] = i || null)
          }),
            e.css(n)
        })
      },
      stop: function () {
        t(this).removeData('ui-resizable-alsoresize')
      }
    }),
    t.ui.plugin.add('resizable', 'ghost', {
      start: function () {
        var e = t(this).resizable('instance'),
          i = e.size
        ;(e.ghost = e.originalElement.clone()),
          e.ghost.css({
            opacity: 0.25,
            display: 'block',
            position: 'relative',
            height: i.height,
            width: i.width,
            margin: 0,
            left: 0,
            top: 0
          }),
          e._addClass(e.ghost, 'ui-resizable-ghost'),
          t.uiBackCompat !== !1 &&
            'string' == typeof e.options.ghost &&
            e.ghost.addClass(this.options.ghost),
          e.ghost.appendTo(e.helper)
      },
      resize: function () {
        var e = t(this).resizable('instance')
        e.ghost &&
          e.ghost.css({
            position: 'relative',
            height: e.size.height,
            width: e.size.width
          })
      },
      stop: function () {
        var e = t(this).resizable('instance')
        e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
      }
    }),
    t.ui.plugin.add('resizable', 'grid', {
      resize: function () {
        var e,
          i = t(this).resizable('instance'),
          s = i.options,
          n = i.size,
          o = i.originalSize,
          a = i.originalPosition,
          r = i.axis,
          h = 'number' == typeof s.grid ? [s.grid, s.grid] : s.grid,
          l = h[0] || 1,
          u = h[1] || 1,
          c = Math.round((n.width - o.width) / l) * l,
          d = Math.round((n.height - o.height) / u) * u,
          p = o.width + c,
          f = o.height + d,
          m = s.maxWidth && p > s.maxWidth,
          g = s.maxHeight && f > s.maxHeight,
          _ = s.minWidth && s.minWidth > p,
          v = s.minHeight && s.minHeight > f
        ;(s.grid = h),
          _ && (p += l),
          v && (f += u),
          m && (p -= l),
          g && (f -= u),
          /^(se|s|e)$/.test(r)
            ? ((i.size.width = p), (i.size.height = f))
            : /^(ne)$/.test(r)
            ? ((i.size.width = p),
              (i.size.height = f),
              (i.position.top = a.top - d))
            : /^(sw)$/.test(r)
            ? ((i.size.width = p),
              (i.size.height = f),
              (i.position.left = a.left - c))
            : ((0 >= f - u || 0 >= p - l) &&
                (e = i._getPaddingPlusBorderDimensions(this)),
              f - u > 0
                ? ((i.size.height = f), (i.position.top = a.top - d))
                : ((f = u - e.height),
                  (i.size.height = f),
                  (i.position.top = a.top + o.height - f)),
              p - l > 0
                ? ((i.size.width = p), (i.position.left = a.left - c))
                : ((p = l - e.width),
                  (i.size.width = p),
                  (i.position.left = a.left + o.width - p)))
      }
    }),
    t.ui.resizable,
    t.widget('ui.selectable', t.ui.mouse, {
      version: '1.12.1',
      options: {
        appendTo: 'body',
        autoRefresh: !0,
        distance: 0,
        filter: '*',
        tolerance: 'touch',
        selected: null,
        selecting: null,
        start: null,
        stop: null,
        unselected: null,
        unselecting: null
      },
      _create: function () {
        var e = this
        this._addClass('ui-selectable'),
          (this.dragged = !1),
          (this.refresh = function () {
            ;(e.elementPos = t(e.element[0]).offset()),
              (e.selectees = t(e.options.filter, e.element[0])),
              e._addClass(e.selectees, 'ui-selectee'),
              e.selectees.each(function () {
                var i = t(this),
                  s = i.offset(),
                  n = {
                    left: s.left - e.elementPos.left,
                    top: s.top - e.elementPos.top
                  }
                t.data(this, 'selectable-item', {
                  element: this,
                  $element: i,
                  left: n.left,
                  top: n.top,
                  right: n.left + i.outerWidth(),
                  bottom: n.top + i.outerHeight(),
                  startselected: !1,
                  selected: i.hasClass('ui-selected'),
                  selecting: i.hasClass('ui-selecting'),
                  unselecting: i.hasClass('ui-unselecting')
                })
              })
          }),
          this.refresh(),
          this._mouseInit(),
          (this.helper = t('<div>')),
          this._addClass(this.helper, 'ui-selectable-helper')
      },
      _destroy: function () {
        this.selectees.removeData('selectable-item'), this._mouseDestroy()
      },
      _mouseStart: function (e) {
        var i = this,
          s = this.options
        ;(this.opos = [e.pageX, e.pageY]),
          (this.elementPos = t(this.element[0]).offset()),
          this.options.disabled ||
            ((this.selectees = t(s.filter, this.element[0])),
            this._trigger('start', e),
            t(s.appendTo).append(this.helper),
            this.helper.css({
              left: e.pageX,
              top: e.pageY,
              width: 0,
              height: 0
            }),
            s.autoRefresh && this.refresh(),
            this.selectees.filter('.ui-selected').each(function () {
              var s = t.data(this, 'selectable-item')
              ;(s.startselected = !0),
                e.metaKey ||
                  e.ctrlKey ||
                  (i._removeClass(s.$element, 'ui-selected'),
                  (s.selected = !1),
                  i._addClass(s.$element, 'ui-unselecting'),
                  (s.unselecting = !0),
                  i._trigger('unselecting', e, { unselecting: s.element }))
            }),
            t(e.target)
              .parents()
              .addBack()
              .each(function () {
                var s,
                  n = t.data(this, 'selectable-item')
                return n
                  ? ((s =
                      (!e.metaKey && !e.ctrlKey) ||
                      !n.$element.hasClass('ui-selected')),
                    i
                      ._removeClass(
                        n.$element,
                        s ? 'ui-unselecting' : 'ui-selected'
                      )
                      ._addClass(
                        n.$element,
                        s ? 'ui-selecting' : 'ui-unselecting'
                      ),
                    (n.unselecting = !s),
                    (n.selecting = s),
                    (n.selected = s),
                    s
                      ? i._trigger('selecting', e, { selecting: n.element })
                      : i._trigger('unselecting', e, {
                          unselecting: n.element
                        }),
                    !1)
                  : void 0
              }))
      },
      _mouseDrag: function (e) {
        if (((this.dragged = !0), !this.options.disabled)) {
          var i,
            s = this,
            n = this.options,
            o = this.opos[0],
            a = this.opos[1],
            r = e.pageX,
            h = e.pageY
          return (
            o > r && ((i = r), (r = o), (o = i)),
            a > h && ((i = h), (h = a), (a = i)),
            this.helper.css({ left: o, top: a, width: r - o, height: h - a }),
            this.selectees.each(function () {
              var i = t.data(this, 'selectable-item'),
                l = !1,
                u = {}
              i &&
                i.element !== s.element[0] &&
                ((u.left = i.left + s.elementPos.left),
                (u.right = i.right + s.elementPos.left),
                (u.top = i.top + s.elementPos.top),
                (u.bottom = i.bottom + s.elementPos.top),
                'touch' === n.tolerance
                  ? (l = !(
                      u.left > r ||
                      o > u.right ||
                      u.top > h ||
                      a > u.bottom
                    ))
                  : 'fit' === n.tolerance &&
                    (l =
                      u.left > o && r > u.right && u.top > a && h > u.bottom),
                l
                  ? (i.selected &&
                      (s._removeClass(i.$element, 'ui-selected'),
                      (i.selected = !1)),
                    i.unselecting &&
                      (s._removeClass(i.$element, 'ui-unselecting'),
                      (i.unselecting = !1)),
                    i.selecting ||
                      (s._addClass(i.$element, 'ui-selecting'),
                      (i.selecting = !0),
                      s._trigger('selecting', e, { selecting: i.element })))
                  : (i.selecting &&
                      ((e.metaKey || e.ctrlKey) && i.startselected
                        ? (s._removeClass(i.$element, 'ui-selecting'),
                          (i.selecting = !1),
                          s._addClass(i.$element, 'ui-selected'),
                          (i.selected = !0))
                        : (s._removeClass(i.$element, 'ui-selecting'),
                          (i.selecting = !1),
                          i.startselected &&
                            (s._addClass(i.$element, 'ui-unselecting'),
                            (i.unselecting = !0)),
                          s._trigger('unselecting', e, {
                            unselecting: i.element
                          }))),
                    i.selected &&
                      (e.metaKey ||
                        e.ctrlKey ||
                        i.startselected ||
                        (s._removeClass(i.$element, 'ui-selected'),
                        (i.selected = !1),
                        s._addClass(i.$element, 'ui-unselecting'),
                        (i.unselecting = !0),
                        s._trigger('unselecting', e, {
                          unselecting: i.element
                        })))))
            }),
            !1
          )
        }
      },
      _mouseStop: function (e) {
        var i = this
        return (
          (this.dragged = !1),
          t('.ui-unselecting', this.element[0]).each(function () {
            var s = t.data(this, 'selectable-item')
            i._removeClass(s.$element, 'ui-unselecting'),
              (s.unselecting = !1),
              (s.startselected = !1),
              i._trigger('unselected', e, { unselected: s.element })
          }),
          t('.ui-selecting', this.element[0]).each(function () {
            var s = t.data(this, 'selectable-item')
            i
              ._removeClass(s.$element, 'ui-selecting')
              ._addClass(s.$element, 'ui-selected'),
              (s.selecting = !1),
              (s.selected = !0),
              (s.startselected = !0),
              i._trigger('selected', e, { selected: s.element })
          }),
          this._trigger('stop', e),
          this.helper.remove(),
          !1
        )
      }
    }),
    t.widget('ui.sortable', t.ui.mouse, {
      version: '1.12.1',
      widgetEventPrefix: 'sort',
      ready: !1,
      options: {
        appendTo: 'parent',
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: 'auto',
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: 'original',
        items: '> *',
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: 'default',
        tolerance: 'intersect',
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null
      },
      _isOverAxis: function (t, e, i) {
        return t >= e && e + i > t
      },
      _isFloating: function (t) {
        return (
          /left|right/.test(t.css('float')) ||
          /inline|table-cell/.test(t.css('display'))
        )
      },
      _create: function () {
        ;(this.containerCache = {}),
          this._addClass('ui-sortable'),
          this.refresh(),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          this._setHandleClassName(),
          (this.ready = !0)
      },
      _setOption: function (t, e) {
        this._super(t, e), 'handle' === t && this._setHandleClassName()
      },
      _setHandleClassName: function () {
        var e = this
        this._removeClass(
          this.element.find('.ui-sortable-handle'),
          'ui-sortable-handle'
        ),
          t.each(this.items, function () {
            e._addClass(
              this.instance.options.handle
                ? this.item.find(this.instance.options.handle)
                : this.item,
              'ui-sortable-handle'
            )
          })
      },
      _destroy: function () {
        this._mouseDestroy()
        for (var t = this.items.length - 1; t >= 0; t--)
          this.items[t].item.removeData(this.widgetName + '-item')
        return this
      },
      _mouseCapture: function (e, i) {
        var s = null,
          n = !1,
          o = this
        return this.reverting
          ? !1
          : this.options.disabled || 'static' === this.options.type
          ? !1
          : (this._refreshItems(e),
            t(e.target)
              .parents()
              .each(function () {
                return t.data(this, o.widgetName + '-item') === o
                  ? ((s = t(this)), !1)
                  : void 0
              }),
            t.data(e.target, o.widgetName + '-item') === o && (s = t(e.target)),
            s
              ? !this.options.handle ||
                i ||
                (t(this.options.handle, s)
                  .find('*')
                  .addBack()
                  .each(function () {
                    this === e.target && (n = !0)
                  }),
                n)
                ? ((this.currentItem = s), this._removeCurrentsFromItems(), !0)
                : !1
              : !1)
      },
      _mouseStart: function (e, i, s) {
        var n,
          o,
          a = this.options
        if (
          ((this.currentContainer = this),
          this.refreshPositions(),
          (this.helper = this._createHelper(e)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left
          }),
          t.extend(this.offset, {
            click: {
              left: e.pageX - this.offset.left,
              top: e.pageY - this.offset.top
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset()
          }),
          this.helper.css('position', 'absolute'),
          (this.cssPosition = this.helper.css('position')),
          (this.originalPosition = this._generatePosition(e)),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
          (this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0]
          }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          a.containment && this._setContainment(),
          a.cursor &&
            'auto' !== a.cursor &&
            ((o = this.document.find('body')),
            (this.storedCursor = o.css('cursor')),
            o.css('cursor', a.cursor),
            (this.storedStylesheet = t(
              '<style>*{ cursor: ' + a.cursor + ' !important; }</style>'
            ).appendTo(o))),
          a.opacity &&
            (this.helper.css('opacity') &&
              (this._storedOpacity = this.helper.css('opacity')),
            this.helper.css('opacity', a.opacity)),
          a.zIndex &&
            (this.helper.css('zIndex') &&
              (this._storedZIndex = this.helper.css('zIndex')),
            this.helper.css('zIndex', a.zIndex)),
          this.scrollParent[0] !== this.document[0] &&
            'HTML' !== this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger('start', e, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !s)
        )
          for (n = this.containers.length - 1; n >= 0; n--)
            this.containers[n]._trigger('activate', e, this._uiHash(this))
        return (
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          t.ui.ddmanager &&
            !a.dropBehaviour &&
            t.ui.ddmanager.prepareOffsets(this, e),
          (this.dragging = !0),
          this._addClass(this.helper, 'ui-sortable-helper'),
          this._mouseDrag(e),
          !0
        )
      },
      _mouseDrag: function (e) {
        var i,
          s,
          n,
          o,
          a = this.options,
          r = !1
        for (
          this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo('absolute'),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll &&
              (this.scrollParent[0] !== this.document[0] &&
              'HTML' !== this.scrollParent[0].tagName
                ? (this.overflowOffset.top +
                    this.scrollParent[0].offsetHeight -
                    e.pageY <
                  a.scrollSensitivity
                    ? (this.scrollParent[0].scrollTop = r =
                        this.scrollParent[0].scrollTop + a.scrollSpeed)
                    : e.pageY - this.overflowOffset.top < a.scrollSensitivity &&
                      (this.scrollParent[0].scrollTop = r =
                        this.scrollParent[0].scrollTop - a.scrollSpeed),
                  this.overflowOffset.left +
                    this.scrollParent[0].offsetWidth -
                    e.pageX <
                  a.scrollSensitivity
                    ? (this.scrollParent[0].scrollLeft = r =
                        this.scrollParent[0].scrollLeft + a.scrollSpeed)
                    : e.pageX - this.overflowOffset.left <
                        a.scrollSensitivity &&
                      (this.scrollParent[0].scrollLeft = r =
                        this.scrollParent[0].scrollLeft - a.scrollSpeed))
                : (e.pageY - this.document.scrollTop() < a.scrollSensitivity
                    ? (r = this.document.scrollTop(
                        this.document.scrollTop() - a.scrollSpeed
                      ))
                    : this.window.height() -
                        (e.pageY - this.document.scrollTop()) <
                        a.scrollSensitivity &&
                      (r = this.document.scrollTop(
                        this.document.scrollTop() + a.scrollSpeed
                      )),
                  e.pageX - this.document.scrollLeft() < a.scrollSensitivity
                    ? (r = this.document.scrollLeft(
                        this.document.scrollLeft() - a.scrollSpeed
                      ))
                    : this.window.width() -
                        (e.pageX - this.document.scrollLeft()) <
                        a.scrollSensitivity &&
                      (r = this.document.scrollLeft(
                        this.document.scrollLeft() + a.scrollSpeed
                      ))),
              r !== !1 &&
                t.ui.ddmanager &&
                !a.dropBehaviour &&
                t.ui.ddmanager.prepareOffsets(this, e)),
            this.positionAbs = this._convertPositionTo('absolute'),
            (this.options.axis && 'y' === this.options.axis) ||
              (this.helper[0].style.left = this.position.left + 'px'),
            (this.options.axis && 'x' === this.options.axis) ||
              (this.helper[0].style.top = this.position.top + 'px'),
            i = this.items.length - 1;
          i >= 0;
          i--
        )
          if (
            ((s = this.items[i]),
            (n = s.item[0]),
            (o = this._intersectsWithPointer(s)),
            o &&
              s.instance === this.currentContainer &&
              n !== this.currentItem[0] &&
              this.placeholder[1 === o ? 'next' : 'prev']()[0] !== n &&
              !t.contains(this.placeholder[0], n) &&
              ('semi-dynamic' === this.options.type
                ? !t.contains(this.element[0], n)
                : !0))
          ) {
            if (
              ((this.direction = 1 === o ? 'down' : 'up'),
              'pointer' !== this.options.tolerance &&
                !this._intersectsWithSides(s))
            )
              break
            this._rearrange(e, s), this._trigger('change', e, this._uiHash())
            break
          }
        return (
          this._contactContainers(e),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          this._trigger('sort', e, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        )
      },
      _mouseStop: function (e, i) {
        if (e) {
          if (
            (t.ui.ddmanager &&
              !this.options.dropBehaviour &&
              t.ui.ddmanager.drop(this, e),
            this.options.revert)
          ) {
            var s = this,
              n = this.placeholder.offset(),
              o = this.options.axis,
              a = {}
            ;(o && 'x' !== o) ||
              (a.left =
                n.left -
                this.offset.parent.left -
                this.margins.left +
                (this.offsetParent[0] === this.document[0].body
                  ? 0
                  : this.offsetParent[0].scrollLeft)),
              (o && 'y' !== o) ||
                (a.top =
                  n.top -
                  this.offset.parent.top -
                  this.margins.top +
                  (this.offsetParent[0] === this.document[0].body
                    ? 0
                    : this.offsetParent[0].scrollTop)),
              (this.reverting = !0),
              t(this.helper).animate(
                a,
                parseInt(this.options.revert, 10) || 500,
                function () {
                  s._clear(e)
                }
              )
          } else this._clear(e, i)
          return !1
        }
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp(new t.Event('mouseup', { target: null })),
            'original' === this.options.helper
              ? (this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, 'ui-sortable-helper'))
              : this.currentItem.show()
          for (var e = this.containers.length - 1; e >= 0; e--)
            this.containers[e]._trigger('deactivate', null, this._uiHash(this)),
              this.containers[e].containerCache.over &&
                (this.containers[e]._trigger('out', null, this._uiHash(this)),
                (this.containers[e].containerCache.over = 0))
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode &&
              this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            'original' !== this.options.helper &&
              this.helper &&
              this.helper[0].parentNode &&
              this.helper.remove(),
            t.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null
            }),
            this.domPosition.prev
              ? t(this.domPosition.prev).after(this.currentItem)
              : t(this.domPosition.parent).prepend(this.currentItem)),
          this
        )
      },
      serialize: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected),
          s = []
        return (
          (e = e || {}),
          t(i).each(function () {
            var i = (t(e.item || this).attr(e.attribute || 'id') || '').match(
              e.expression || /(.+)[\-=_](.+)/
            )
            i &&
              s.push(
                (e.key || i[1] + '[]') +
                  '=' +
                  (e.key && e.expression ? i[1] : i[2])
              )
          }),
          !s.length && e.key && s.push(e.key + '='),
          s.join('&')
        )
      },
      toArray: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected),
          s = []
        return (
          (e = e || {}),
          i.each(function () {
            s.push(t(e.item || this).attr(e.attribute || 'id') || '')
          }),
          s
        )
      },
      _intersectsWith: function (t) {
        var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          h = r + t.height,
          l = this.offset.click.top,
          u = this.offset.click.left,
          c = 'x' === this.options.axis || (s + l > r && h > s + l),
          d = 'y' === this.options.axis || (e + u > o && a > e + u),
          p = c && d
        return 'pointer' === this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ('pointer' !== this.options.tolerance &&
            this.helperProportions[this.floating ? 'width' : 'height'] >
              t[this.floating ? 'width' : 'height'])
          ? p
          : e + this.helperProportions.width / 2 > o &&
              a > i - this.helperProportions.width / 2 &&
              s + this.helperProportions.height / 2 > r &&
              h > n - this.helperProportions.height / 2
      },
      _intersectsWithPointer: function (t) {
        var e,
          i,
          s =
            'x' === this.options.axis ||
            this._isOverAxis(
              this.positionAbs.top + this.offset.click.top,
              t.top,
              t.height
            ),
          n =
            'y' === this.options.axis ||
            this._isOverAxis(
              this.positionAbs.left + this.offset.click.left,
              t.left,
              t.width
            ),
          o = s && n
        return o
          ? ((e = this._getDragVerticalDirection()),
            (i = this._getDragHorizontalDirection()),
            this.floating
              ? 'right' === i || 'down' === e
                ? 2
                : 1
              : e && ('down' === e ? 2 : 1))
          : !1
      },
      _intersectsWithSides: function (t) {
        var e = this._isOverAxis(
            this.positionAbs.top + this.offset.click.top,
            t.top + t.height / 2,
            t.height
          ),
          i = this._isOverAxis(
            this.positionAbs.left + this.offset.click.left,
            t.left + t.width / 2,
            t.width
          ),
          s = this._getDragVerticalDirection(),
          n = this._getDragHorizontalDirection()
        return this.floating && n
          ? ('right' === n && i) || ('left' === n && !i)
          : s && (('down' === s && e) || ('up' === s && !e))
      },
      _getDragVerticalDirection: function () {
        var t = this.positionAbs.top - this.lastPositionAbs.top
        return 0 !== t && (t > 0 ? 'down' : 'up')
      },
      _getDragHorizontalDirection: function () {
        var t = this.positionAbs.left - this.lastPositionAbs.left
        return 0 !== t && (t > 0 ? 'right' : 'left')
      },
      refresh: function (t) {
        return (
          this._refreshItems(t),
          this._setHandleClassName(),
          this.refreshPositions(),
          this
        )
      },
      _connectWith: function () {
        var t = this.options
        return t.connectWith.constructor === String
          ? [t.connectWith]
          : t.connectWith
      },
      _getItemsAsjQuery: function (e) {
        function i () {
          r.push(this)
        }
        var s,
          n,
          o,
          a,
          r = [],
          h = [],
          l = this._connectWith()
        if (l && e)
          for (s = l.length - 1; s >= 0; s--)
            for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--)
              (a = t.data(o[n], this.widgetFullName)),
                a &&
                  a !== this &&
                  !a.options.disabled &&
                  h.push([
                    t.isFunction(a.options.items)
                      ? a.options.items.call(a.element)
                      : t(a.options.items, a.element)
                          .not('.ui-sortable-helper')
                          .not('.ui-sortable-placeholder'),
                    a
                  ])
        for (
          h.push([
            t.isFunction(this.options.items)
              ? this.options.items.call(this.element, null, {
                  options: this.options,
                  item: this.currentItem
                })
              : t(this.options.items, this.element)
                  .not('.ui-sortable-helper')
                  .not('.ui-sortable-placeholder'),
            this
          ]),
            s = h.length - 1;
          s >= 0;
          s--
        )
          h[s][0].each(i)
        return t(r)
      },
      _removeCurrentsFromItems: function () {
        var e = this.currentItem.find(':data(' + this.widgetName + '-item)')
        this.items = t.grep(this.items, function (t) {
          for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return !1
          return !0
        })
      },
      _refreshItems: function (e) {
        ;(this.items = []), (this.containers = [this])
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          u = this.items,
          c = [
            [
              t.isFunction(this.options.items)
                ? this.options.items.call(this.element[0], e, {
                    item: this.currentItem
                  })
                : t(this.options.items, this.element),
              this
            ]
          ],
          d = this._connectWith()
        if (d && this.ready)
          for (i = d.length - 1; i >= 0; i--)
            for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--)
              (o = t.data(n[s], this.widgetFullName)),
                o &&
                  o !== this &&
                  !o.options.disabled &&
                  (c.push([
                    t.isFunction(o.options.items)
                      ? o.options.items.call(o.element[0], e, {
                          item: this.currentItem
                        })
                      : t(o.options.items, o.element),
                    o
                  ]),
                  this.containers.push(o))
        for (i = c.length - 1; i >= 0; i--)
          for (a = c[i][1], r = c[i][0], s = 0, l = r.length; l > s; s++)
            (h = t(r[s])),
              h.data(this.widgetName + '-item', a),
              u.push({
                item: h,
                instance: a,
                width: 0,
                height: 0,
                left: 0,
                top: 0
              })
      },
      refreshPositions: function (e) {
        ;(this.floating = this.items.length
          ? 'x' === this.options.axis || this._isFloating(this.items[0].item)
          : !1),
          this.offsetParent &&
            this.helper &&
            (this.offset.parent = this._getParentOffset())
        var i, s, n, o
        for (i = this.items.length - 1; i >= 0; i--)
          (s = this.items[i]),
            (s.instance !== this.currentContainer &&
              this.currentContainer &&
              s.item[0] !== this.currentItem[0]) ||
              ((n = this.options.toleranceElement
                ? t(this.options.toleranceElement, s.item)
                : s.item),
              e || ((s.width = n.outerWidth()), (s.height = n.outerHeight())),
              (o = n.offset()),
              (s.left = o.left),
              (s.top = o.top))
        if (this.options.custom && this.options.custom.refreshContainers)
          this.options.custom.refreshContainers.call(this)
        else
          for (i = this.containers.length - 1; i >= 0; i--)
            (o = this.containers[i].element.offset()),
              (this.containers[i].containerCache.left = o.left),
              (this.containers[i].containerCache.top = o.top),
              (this.containers[i].containerCache.width = this.containers[
                i
              ].element.outerWidth()),
              (this.containers[i].containerCache.height = this.containers[
                i
              ].element.outerHeight())
        return this
      },
      _createPlaceholder: function (e) {
        e = e || this
        var i,
          s = e.options
        ;(s.placeholder && s.placeholder.constructor !== String) ||
          ((i = s.placeholder),
          (s.placeholder = {
            element: function () {
              var s = e.currentItem[0].nodeName.toLowerCase(),
                n = t('<' + s + '>', e.document[0])
              return (
                e
                  ._addClass(
                    n,
                    'ui-sortable-placeholder',
                    i || e.currentItem[0].className
                  )
                  ._removeClass(n, 'ui-sortable-helper'),
                'tbody' === s
                  ? e._createTrPlaceholder(
                      e.currentItem.find('tr').eq(0),
                      t('<tr>', e.document[0]).appendTo(n)
                    )
                  : 'tr' === s
                  ? e._createTrPlaceholder(e.currentItem, n)
                  : 'img' === s && n.attr('src', e.currentItem.attr('src')),
                i || n.css('visibility', 'hidden'),
                n
              )
            },
            update: function (t, n) {
              ;(!i || s.forcePlaceholderSize) &&
                (n.height() ||
                  n.height(
                    e.currentItem.innerHeight() -
                      parseInt(e.currentItem.css('paddingTop') || 0, 10) -
                      parseInt(e.currentItem.css('paddingBottom') || 0, 10)
                  ),
                n.width() ||
                  n.width(
                    e.currentItem.innerWidth() -
                      parseInt(e.currentItem.css('paddingLeft') || 0, 10) -
                      parseInt(e.currentItem.css('paddingRight') || 0, 10)
                  ))
            }
          })),
          (e.placeholder = t(
            s.placeholder.element.call(e.element, e.currentItem)
          )),
          e.currentItem.after(e.placeholder),
          s.placeholder.update(e, e.placeholder)
      },
      _createTrPlaceholder: function (e, i) {
        var s = this
        e.children().each(function () {
          t('<td>&#160;</td>', s.document[0])
            .attr('colspan', t(this).attr('colspan') || 1)
            .appendTo(i)
        })
      },
      _contactContainers: function (e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          u,
          c,
          d = null,
          p = null
        for (i = this.containers.length - 1; i >= 0; i--)
          if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
            if (this._intersectsWith(this.containers[i].containerCache)) {
              if (d && t.contains(this.containers[i].element[0], d.element[0]))
                continue
              ;(d = this.containers[i]), (p = i)
            } else
              this.containers[i].containerCache.over &&
                (this.containers[i]._trigger('out', e, this._uiHash(this)),
                (this.containers[i].containerCache.over = 0))
        if (d)
          if (1 === this.containers.length)
            this.containers[p].containerCache.over ||
              (this.containers[p]._trigger('over', e, this._uiHash(this)),
              (this.containers[p].containerCache.over = 1))
          else {
            for (
              n = 1e4,
                o = null,
                u = d.floating || this._isFloating(this.currentItem),
                a = u ? 'left' : 'top',
                r = u ? 'width' : 'height',
                c = u ? 'pageX' : 'pageY',
                s = this.items.length - 1;
              s >= 0;
              s--
            )
              t.contains(
                this.containers[p].element[0],
                this.items[s].item[0]
              ) &&
                this.items[s].item[0] !== this.currentItem[0] &&
                ((h = this.items[s].item.offset()[a]),
                (l = !1),
                e[c] - h > this.items[s][r] / 2 && (l = !0),
                n > Math.abs(e[c] - h) &&
                  ((n = Math.abs(e[c] - h)),
                  (o = this.items[s]),
                  (this.direction = l ? 'up' : 'down')))
            if (!o && !this.options.dropOnEmpty) return
            if (this.currentContainer === this.containers[p])
              return (
                this.currentContainer.containerCache.over ||
                  (this.containers[p]._trigger('over', e, this._uiHash()),
                  (this.currentContainer.containerCache.over = 1)),
                void 0
              )
            o
              ? this._rearrange(e, o, null, !0)
              : this._rearrange(e, null, this.containers[p].element, !0),
              this._trigger('change', e, this._uiHash()),
              this.containers[p]._trigger('change', e, this._uiHash(this)),
              (this.currentContainer = this.containers[p]),
              this.options.placeholder.update(
                this.currentContainer,
                this.placeholder
              ),
              this.containers[p]._trigger('over', e, this._uiHash(this)),
              (this.containers[p].containerCache.over = 1)
          }
      },
      _createHelper: function (e) {
        var i = this.options,
          s = t.isFunction(i.helper)
            ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
            : 'clone' === i.helper
            ? this.currentItem.clone()
            : this.currentItem
        return (
          s.parents('body').length ||
            t(
              'parent' !== i.appendTo
                ? i.appendTo
                : this.currentItem[0].parentNode
            )[0].appendChild(s[0]),
          s[0] === this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css('position'),
              top: this.currentItem.css('top'),
              left: this.currentItem.css('left')
            }),
          (!s[0].style.width || i.forceHelperSize) &&
            s.width(this.currentItem.width()),
          (!s[0].style.height || i.forceHelperSize) &&
            s.height(this.currentItem.height()),
          s
        )
      },
      _adjustOffsetFromHelper: function (e) {
        'string' == typeof e && (e = e.split(' ')),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          'left' in e && (this.offset.click.left = e.left + this.margins.left),
          'right' in e &&
            (this.offset.click.left =
              this.helperProportions.width - e.right + this.margins.left),
          'top' in e && (this.offset.click.top = e.top + this.margins.top),
          'bottom' in e &&
            (this.offset.click.top =
              this.helperProportions.height - e.bottom + this.margins.top)
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent()
        var e = this.offsetParent.offset()
        return (
          'absolute' === this.cssPosition &&
            this.scrollParent[0] !== this.document[0] &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()),
            (e.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === this.document[0].body ||
            (this.offsetParent[0].tagName &&
              'html' === this.offsetParent[0].tagName.toLowerCase() &&
              t.ui.ie)) &&
            (e = { top: 0, left: 0 }),
          {
            top:
              e.top +
              (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
            left:
              e.left +
              (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
          }
        )
      },
      _getRelativeOffset: function () {
        if ('relative' === this.cssPosition) {
          var t = this.currentItem.position()
          return {
            top:
              t.top -
              (parseInt(this.helper.css('top'), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              t.left -
              (parseInt(this.helper.css('left'), 10) || 0) +
              this.scrollParent.scrollLeft()
          }
        }
        return { top: 0, left: 0 }
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
          top: parseInt(this.currentItem.css('marginTop'), 10) || 0
        }
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight()
        }
      },
      _setContainment: function () {
        var e,
          i,
          s,
          n = this.options
        'parent' === n.containment &&
          (n.containment = this.helper[0].parentNode),
          ('document' === n.containment || 'window' === n.containment) &&
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              'document' === n.containment
                ? this.document.width()
                : this.window.width() -
                  this.helperProportions.width -
                  this.margins.left,
              ('document' === n.containment
                ? this.document.height() ||
                  document.body.parentNode.scrollHeight
                : this.window.height() ||
                  this.document[0].body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top
            ]),
          /^(document|window|parent)$/.test(n.containment) ||
            ((e = t(n.containment)[0]),
            (i = t(n.containment).offset()),
            (s = 'hidden' !== t(e).css('overflow')),
            (this.containment = [
              i.left +
                (parseInt(t(e).css('borderLeftWidth'), 10) || 0) +
                (parseInt(t(e).css('paddingLeft'), 10) || 0) -
                this.margins.left,
              i.top +
                (parseInt(t(e).css('borderTopWidth'), 10) || 0) +
                (parseInt(t(e).css('paddingTop'), 10) || 0) -
                this.margins.top,
              i.left +
                (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                (parseInt(t(e).css('borderLeftWidth'), 10) || 0) -
                (parseInt(t(e).css('paddingRight'), 10) || 0) -
                this.helperProportions.width -
                this.margins.left,
              i.top +
                (s
                  ? Math.max(e.scrollHeight, e.offsetHeight)
                  : e.offsetHeight) -
                (parseInt(t(e).css('borderTopWidth'), 10) || 0) -
                (parseInt(t(e).css('paddingBottom'), 10) || 0) -
                this.helperProportions.height -
                this.margins.top
            ]))
      },
      _convertPositionTo: function (e, i) {
        i || (i = this.position)
        var s = 'absolute' === e ? 1 : -1,
          n =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName)
        return {
          top:
            i.top +
            this.offset.relative.top * s +
            this.offset.parent.top * s -
            ('fixed' === this.cssPosition
              ? -this.scrollParent.scrollTop()
              : o
              ? 0
              : n.scrollTop()) *
              s,
          left:
            i.left +
            this.offset.relative.left * s +
            this.offset.parent.left * s -
            ('fixed' === this.cssPosition
              ? -this.scrollParent.scrollLeft()
              : o
              ? 0
              : n.scrollLeft()) *
              s
        }
      },
      _generatePosition: function (e) {
        var i,
          s,
          n = this.options,
          o = e.pageX,
          a = e.pageY,
          r =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          h = /(html|body)/i.test(r[0].tagName)
        return (
          'relative' !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              this.scrollParent[0] !== this.offsetParent[0]) ||
            (this.offset.relative = this._getRelativeOffset()),
          this.originalPosition &&
            (this.containment &&
              (e.pageX - this.offset.click.left < this.containment[0] &&
                (o = this.containment[0] + this.offset.click.left),
              e.pageY - this.offset.click.top < this.containment[1] &&
                (a = this.containment[1] + this.offset.click.top),
              e.pageX - this.offset.click.left > this.containment[2] &&
                (o = this.containment[2] + this.offset.click.left),
              e.pageY - this.offset.click.top > this.containment[3] &&
                (a = this.containment[3] + this.offset.click.top)),
            n.grid &&
              ((i =
                this.originalPageY +
                Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1]),
              (a = this.containment
                ? i - this.offset.click.top >= this.containment[1] &&
                  i - this.offset.click.top <= this.containment[3]
                  ? i
                  : i - this.offset.click.top >= this.containment[1]
                  ? i - n.grid[1]
                  : i + n.grid[1]
                : i),
              (s =
                this.originalPageX +
                Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0]),
              (o = this.containment
                ? s - this.offset.click.left >= this.containment[0] &&
                  s - this.offset.click.left <= this.containment[2]
                  ? s
                  : s - this.offset.click.left >= this.containment[0]
                  ? s - n.grid[0]
                  : s + n.grid[0]
                : s))),
          {
            top:
              a -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : h
                ? 0
                : r.scrollTop()),
            left:
              o -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : h
                ? 0
                : r.scrollLeft())
          }
        )
      },
      _rearrange: function (t, e, i, s) {
        i
          ? i[0].appendChild(this.placeholder[0])
          : e.item[0].parentNode.insertBefore(
              this.placeholder[0],
              'down' === this.direction ? e.item[0] : e.item[0].nextSibling
            ),
          (this.counter = this.counter ? ++this.counter : 1)
        var n = this.counter
        this._delay(function () {
          n === this.counter && this.refreshPositions(!s)
        })
      },
      _clear: function (t, e) {
        function i (t, e, i) {
          return function (s) {
            i._trigger(t, s, e._uiHash(e))
          }
        }
        this.reverting = !1
        var s,
          n = []
        if (
          (!this._noFinalSort &&
            this.currentItem.parent().length &&
            this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] === this.currentItem[0])
        ) {
          for (s in this._storedCSS)
            ('auto' === this._storedCSS[s] ||
              'static' === this._storedCSS[s]) &&
              (this._storedCSS[s] = '')
          this.currentItem.css(this._storedCSS),
            this._removeClass(this.currentItem, 'ui-sortable-helper')
        } else this.currentItem.show()
        for (
          this.fromOutside &&
            !e &&
            n.push(function (t) {
              this._trigger('receive', t, this._uiHash(this.fromOutside))
            }),
            (!this.fromOutside &&
              this.domPosition.prev ===
                this.currentItem.prev().not('.ui-sortable-helper')[0] &&
              this.domPosition.parent === this.currentItem.parent()[0]) ||
              e ||
              n.push(function (t) {
                this._trigger('update', t, this._uiHash())
              }),
            this !== this.currentContainer &&
              (e ||
                (n.push(function (t) {
                  this._trigger('remove', t, this._uiHash())
                }),
                n.push(
                  function (t) {
                    return function (e) {
                      t._trigger('receive', e, this._uiHash(this))
                    }
                  }.call(this, this.currentContainer)
                ),
                n.push(
                  function (t) {
                    return function (e) {
                      t._trigger('update', e, this._uiHash(this))
                    }
                  }.call(this, this.currentContainer)
                ))),
            s = this.containers.length - 1;
          s >= 0;
          s--
        )
          e || n.push(i('deactivate', this, this.containers[s])),
            this.containers[s].containerCache.over &&
              (n.push(i('out', this, this.containers[s])),
              (this.containers[s].containerCache.over = 0))
        if (
          (this.storedCursor &&
            (this.document.find('body').css('cursor', this.storedCursor),
            this.storedStylesheet.remove()),
          this._storedOpacity &&
            this.helper.css('opacity', this._storedOpacity),
          this._storedZIndex &&
            this.helper.css(
              'zIndex',
              'auto' === this._storedZIndex ? '' : this._storedZIndex
            ),
          (this.dragging = !1),
          e || this._trigger('beforeStop', t, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.cancelHelperRemoval ||
            (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            (this.helper = null)),
          !e)
        ) {
          for (s = 0; n.length > s; s++) n[s].call(this, t)
          this._trigger('stop', t, this._uiHash())
        }
        return (this.fromOutside = !1), !this.cancelHelperRemoval
      },
      _trigger: function () {
        t.Widget.prototype._trigger.apply(this, arguments) === !1 &&
          this.cancel()
      },
      _uiHash: function (e) {
        var i = e || this
        return {
          helper: i.helper,
          placeholder: i.placeholder || t([]),
          position: i.position,
          originalPosition: i.originalPosition,
          offset: i.positionAbs,
          item: i.currentItem,
          sender: e ? e.element : null
        }
      }
    }),
    t.widget('ui.accordion', {
      version: '1.12.1',
      options: {
        active: 0,
        animate: {},
        classes: {
          'ui-accordion-header': 'ui-corner-top',
          'ui-accordion-header-collapsed': 'ui-corner-all',
          'ui-accordion-content': 'ui-corner-bottom'
        },
        collapsible: !1,
        event: 'click',
        header: '> li > :first-child, > :not(li):even',
        heightStyle: 'auto',
        icons: {
          activeHeader: 'ui-icon-triangle-1-s',
          header: 'ui-icon-triangle-1-e'
        },
        activate: null,
        beforeActivate: null
      },
      hideProps: {
        borderTopWidth: 'hide',
        borderBottomWidth: 'hide',
        paddingTop: 'hide',
        paddingBottom: 'hide',
        height: 'hide'
      },
      showProps: {
        borderTopWidth: 'show',
        borderBottomWidth: 'show',
        paddingTop: 'show',
        paddingBottom: 'show',
        height: 'show'
      },
      _create: function () {
        var e = this.options
        ;(this.prevShow = this.prevHide = t()),
          this._addClass('ui-accordion', 'ui-widget ui-helper-reset'),
          this.element.attr('role', 'tablist'),
          e.collapsible ||
            (e.active !== !1 && null != e.active) ||
            (e.active = 0),
          this._processPanels(),
          0 > e.active && (e.active += this.headers.length),
          this._refresh()
      },
      _getCreateEventData: function () {
        return {
          header: this.active,
          panel: this.active.length ? this.active.next() : t()
        }
      },
      _createIcons: function () {
        var e,
          i,
          s = this.options.icons
        s &&
          ((e = t('<span>')),
          this._addClass(e, 'ui-accordion-header-icon', 'ui-icon ' + s.header),
          e.prependTo(this.headers),
          (i = this.active.children('.ui-accordion-header-icon')),
          this._removeClass(i, s.header)
            ._addClass(i, null, s.activeHeader)
            ._addClass(this.headers, 'ui-accordion-icons'))
      },
      _destroyIcons: function () {
        this._removeClass(this.headers, 'ui-accordion-icons'),
          this.headers.children('.ui-accordion-header-icon').remove()
      },
      _destroy: function () {
        var t
        this.element.removeAttr('role'),
          this.headers
            .removeAttr(
              'role aria-expanded aria-selected aria-controls tabIndex'
            )
            .removeUniqueId(),
          this._destroyIcons(),
          (t = this.headers
            .next()
            .css('display', '')
            .removeAttr('role aria-hidden aria-labelledby')
            .removeUniqueId()),
          'content' !== this.options.heightStyle && t.css('height', '')
      },
      _setOption: function (t, e) {
        return 'active' === t
          ? (this._activate(e), void 0)
          : ('event' === t &&
              (this.options.event &&
                this._off(this.headers, this.options.event),
              this._setupEvents(e)),
            this._super(t, e),
            'collapsible' !== t ||
              e ||
              this.options.active !== !1 ||
              this._activate(0),
            'icons' === t && (this._destroyIcons(), e && this._createIcons()),
            void 0)
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr('aria-disabled', t),
          this._toggleClass(null, 'ui-state-disabled', !!t),
          this._toggleClass(
            this.headers.add(this.headers.next()),
            null,
            'ui-state-disabled',
            !!t
          )
      },
      _keydown: function (e) {
        if (!e.altKey && !e.ctrlKey) {
          var i = t.ui.keyCode,
            s = this.headers.length,
            n = this.headers.index(e.target),
            o = !1
          switch (e.keyCode) {
            case i.RIGHT:
            case i.DOWN:
              o = this.headers[(n + 1) % s]
              break
            case i.LEFT:
            case i.UP:
              o = this.headers[(n - 1 + s) % s]
              break
            case i.SPACE:
            case i.ENTER:
              this._eventHandler(e)
              break
            case i.HOME:
              o = this.headers[0]
              break
            case i.END:
              o = this.headers[s - 1]
          }
          o &&
            (t(e.target).attr('tabIndex', -1),
            t(o).attr('tabIndex', 0),
            t(o).trigger('focus'),
            e.preventDefault())
        }
      },
      _panelKeyDown: function (e) {
        e.keyCode === t.ui.keyCode.UP &&
          e.ctrlKey &&
          t(e.currentTarget)
            .prev()
            .trigger('focus')
      },
      refresh: function () {
        var e = this.options
        this._processPanels(),
          (e.active === !1 && e.collapsible === !0) || !this.headers.length
            ? ((e.active = !1), (this.active = t()))
            : e.active === !1
            ? this._activate(0)
            : this.active.length && !t.contains(this.element[0], this.active[0])
            ? this.headers.length ===
              this.headers.find('.ui-state-disabled').length
              ? ((e.active = !1), (this.active = t()))
              : this._activate(Math.max(0, e.active - 1))
            : (e.active = this.headers.index(this.active)),
          this._destroyIcons(),
          this._refresh()
      },
      _processPanels: function () {
        var t = this.headers,
          e = this.panels
        ;(this.headers = this.element.find(this.options.header)),
          this._addClass(
            this.headers,
            'ui-accordion-header ui-accordion-header-collapsed',
            'ui-state-default'
          ),
          (this.panels = this.headers
            .next()
            .filter(':not(.ui-accordion-content-active)')
            .hide()),
          this._addClass(
            this.panels,
            'ui-accordion-content',
            'ui-helper-reset ui-widget-content'
          ),
          e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
      },
      _refresh: function () {
        var e,
          i = this.options,
          s = i.heightStyle,
          n = this.element.parent()
        ;(this.active = this._findActive(i.active)),
          this._addClass(
            this.active,
            'ui-accordion-header-active',
            'ui-state-active'
          )._removeClass(this.active, 'ui-accordion-header-collapsed'),
          this._addClass(this.active.next(), 'ui-accordion-content-active'),
          this.active.next().show(),
          this.headers
            .attr('role', 'tab')
            .each(function () {
              var e = t(this),
                i = e.uniqueId().attr('id'),
                s = e.next(),
                n = s.uniqueId().attr('id')
              e.attr('aria-controls', n), s.attr('aria-labelledby', i)
            })
            .next()
            .attr('role', 'tabpanel'),
          this.headers
            .not(this.active)
            .attr({
              'aria-selected': 'false',
              'aria-expanded': 'false',
              tabIndex: -1
            })
            .next()
            .attr({ 'aria-hidden': 'true' })
            .hide(),
          this.active.length
            ? this.active
                .attr({
                  'aria-selected': 'true',
                  'aria-expanded': 'true',
                  tabIndex: 0
                })
                .next()
                .attr({ 'aria-hidden': 'false' })
            : this.headers.eq(0).attr('tabIndex', 0),
          this._createIcons(),
          this._setupEvents(i.event),
          'fill' === s
            ? ((e = n.height()),
              this.element.siblings(':visible').each(function () {
                var i = t(this),
                  s = i.css('position')
                'absolute' !== s && 'fixed' !== s && (e -= i.outerHeight(!0))
              }),
              this.headers.each(function () {
                e -= t(this).outerHeight(!0)
              }),
              this.headers
                .next()
                .each(function () {
                  t(this).height(
                    Math.max(0, e - t(this).innerHeight() + t(this).height())
                  )
                })
                .css('overflow', 'auto'))
            : 'auto' === s &&
              ((e = 0),
              this.headers
                .next()
                .each(function () {
                  var i = t(this).is(':visible')
                  i || t(this).show(),
                    (e = Math.max(
                      e,
                      t(this)
                        .css('height', '')
                        .height()
                    )),
                    i || t(this).hide()
                })
                .height(e))
      },
      _activate: function (e) {
        var i = this._findActive(e)[0]
        i !== this.active[0] &&
          ((i = i || this.active[0]),
          this._eventHandler({
            target: i,
            currentTarget: i,
            preventDefault: t.noop
          }))
      },
      _findActive: function (e) {
        return 'number' == typeof e ? this.headers.eq(e) : t()
      },
      _setupEvents: function (e) {
        var i = { keydown: '_keydown' }
        e &&
          t.each(e.split(' '), function (t, e) {
            i[e] = '_eventHandler'
          }),
          this._off(this.headers.add(this.headers.next())),
          this._on(this.headers, i),
          this._on(this.headers.next(), { keydown: '_panelKeyDown' }),
          this._hoverable(this.headers),
          this._focusable(this.headers)
      },
      _eventHandler: function (e) {
        var i,
          s,
          n = this.options,
          o = this.active,
          a = t(e.currentTarget),
          r = a[0] === o[0],
          h = r && n.collapsible,
          l = h ? t() : a.next(),
          u = o.next(),
          c = { oldHeader: o, oldPanel: u, newHeader: h ? t() : a, newPanel: l }
        e.preventDefault(),
          (r && !n.collapsible) ||
            this._trigger('beforeActivate', e, c) === !1 ||
            ((n.active = h ? !1 : this.headers.index(a)),
            (this.active = r ? t() : a),
            this._toggle(c),
            this._removeClass(
              o,
              'ui-accordion-header-active',
              'ui-state-active'
            ),
            n.icons &&
              ((i = o.children('.ui-accordion-header-icon')),
              this._removeClass(i, null, n.icons.activeHeader)._addClass(
                i,
                null,
                n.icons.header
              )),
            r ||
              (this._removeClass(a, 'ui-accordion-header-collapsed')._addClass(
                a,
                'ui-accordion-header-active',
                'ui-state-active'
              ),
              n.icons &&
                ((s = a.children('.ui-accordion-header-icon')),
                this._removeClass(s, null, n.icons.header)._addClass(
                  s,
                  null,
                  n.icons.activeHeader
                )),
              this._addClass(a.next(), 'ui-accordion-content-active')))
      },
      _toggle: function (e) {
        var i = e.newPanel,
          s = this.prevShow.length ? this.prevShow : e.oldPanel
        this.prevShow.add(this.prevHide).stop(!0, !0),
          (this.prevShow = i),
          (this.prevHide = s),
          this.options.animate
            ? this._animate(i, s, e)
            : (s.hide(), i.show(), this._toggleComplete(e)),
          s.attr({ 'aria-hidden': 'true' }),
          s.prev().attr({ 'aria-selected': 'false', 'aria-expanded': 'false' }),
          i.length && s.length
            ? s.prev().attr({ tabIndex: -1, 'aria-expanded': 'false' })
            : i.length &&
              this.headers
                .filter(function () {
                  return 0 === parseInt(t(this).attr('tabIndex'), 10)
                })
                .attr('tabIndex', -1),
          i
            .attr('aria-hidden', 'false')
            .prev()
            .attr({
              'aria-selected': 'true',
              'aria-expanded': 'true',
              tabIndex: 0
            })
      },
      _animate: function (t, e, i) {
        var s,
          n,
          o,
          a = this,
          r = 0,
          h = t.css('box-sizing'),
          l = t.length && (!e.length || t.index() < e.index()),
          u = this.options.animate || {},
          c = (l && u.down) || u,
          d = function () {
            a._toggleComplete(i)
          }
        return (
          'number' == typeof c && (o = c),
          'string' == typeof c && (n = c),
          (n = n || c.easing || u.easing),
          (o = o || c.duration || u.duration),
          e.length
            ? t.length
              ? ((s = t.show().outerHeight()),
                e.animate(this.hideProps, {
                  duration: o,
                  easing: n,
                  step: function (t, e) {
                    e.now = Math.round(t)
                  }
                }),
                t.hide().animate(this.showProps, {
                  duration: o,
                  easing: n,
                  complete: d,
                  step: function (t, i) {
                    ;(i.now = Math.round(t)),
                      'height' !== i.prop
                        ? 'content-box' === h && (r += i.now)
                        : 'content' !== a.options.heightStyle &&
                          ((i.now = Math.round(s - e.outerHeight() - r)),
                          (r = 0))
                  }
                }),
                void 0)
              : e.animate(this.hideProps, o, n, d)
            : t.animate(this.showProps, o, n, d)
        )
      },
      _toggleComplete: function (t) {
        var e = t.oldPanel,
          i = e.prev()
        this._removeClass(e, 'ui-accordion-content-active'),
          this._removeClass(i, 'ui-accordion-header-active')._addClass(
            i,
            'ui-accordion-header-collapsed'
          ),
          e.length && (e.parent()[0].className = e.parent()[0].className),
          this._trigger('activate', null, t)
      }
    }),
    t.widget('ui.menu', {
      version: '1.12.1',
      defaultElement: '<ul>',
      delay: 300,
      options: {
        icons: { submenu: 'ui-icon-caret-1-e' },
        items: '> *',
        menus: 'ul',
        position: { my: 'left top', at: 'right top' },
        role: 'menu',
        blur: null,
        focus: null,
        select: null
      },
      _create: function () {
        ;(this.activeMenu = this.element),
          (this.mouseHandled = !1),
          this.element
            .uniqueId()
            .attr({ role: this.options.role, tabIndex: 0 }),
          this._addClass('ui-menu', 'ui-widget ui-widget-content'),
          this._on({
            'mousedown .ui-menu-item': function (t) {
              t.preventDefault()
            },
            'click .ui-menu-item': function (e) {
              var i = t(e.target),
                s = t(t.ui.safeActiveElement(this.document[0]))
              !this.mouseHandled &&
                i.not('.ui-state-disabled').length &&
                (this.select(e),
                e.isPropagationStopped() || (this.mouseHandled = !0),
                i.has('.ui-menu').length
                  ? this.expand(e)
                  : !this.element.is(':focus') &&
                    s.closest('.ui-menu').length &&
                    (this.element.trigger('focus', [!0]),
                    this.active &&
                      1 === this.active.parents('.ui-menu').length &&
                      clearTimeout(this.timer)))
            },
            'mouseenter .ui-menu-item': function (e) {
              if (!this.previousFilter) {
                var i = t(e.target).closest('.ui-menu-item'),
                  s = t(e.currentTarget)
                i[0] === s[0] &&
                  (this._removeClass(
                    s.siblings().children('.ui-state-active'),
                    null,
                    'ui-state-active'
                  ),
                  this.focus(e, s))
              }
            },
            mouseleave: 'collapseAll',
            'mouseleave .ui-menu': 'collapseAll',
            focus: function (t, e) {
              var i = this.active || this.element.find(this.options.items).eq(0)
              e || this.focus(t, i)
            },
            blur: function (e) {
              this._delay(function () {
                var i = !t.contains(
                  this.element[0],
                  t.ui.safeActiveElement(this.document[0])
                )
                i && this.collapseAll(e)
              })
            },
            keydown: '_keydown'
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (t) {
              this._closeOnDocumentClick(t) && this.collapseAll(t),
                (this.mouseHandled = !1)
            }
          })
      },
      _destroy: function () {
        var e = this.element
            .find('.ui-menu-item')
            .removeAttr('role aria-disabled'),
          i = e
            .children('.ui-menu-item-wrapper')
            .removeUniqueId()
            .removeAttr('tabIndex role aria-haspopup')
        this.element
          .removeAttr('aria-activedescendant')
          .find('.ui-menu')
          .addBack()
          .removeAttr(
            'role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex'
          )
          .removeUniqueId()
          .show(),
          i.children().each(function () {
            var e = t(this)
            e.data('ui-menu-submenu-caret') && e.remove()
          })
      },
      _keydown: function (e) {
        var i,
          s,
          n,
          o,
          a = !0
        switch (e.keyCode) {
          case t.ui.keyCode.PAGE_UP:
            this.previousPage(e)
            break
          case t.ui.keyCode.PAGE_DOWN:
            this.nextPage(e)
            break
          case t.ui.keyCode.HOME:
            this._move('first', 'first', e)
            break
          case t.ui.keyCode.END:
            this._move('last', 'last', e)
            break
          case t.ui.keyCode.UP:
            this.previous(e)
            break
          case t.ui.keyCode.DOWN:
            this.next(e)
            break
          case t.ui.keyCode.LEFT:
            this.collapse(e)
            break
          case t.ui.keyCode.RIGHT:
            this.active &&
              !this.active.is('.ui-state-disabled') &&
              this.expand(e)
            break
          case t.ui.keyCode.ENTER:
          case t.ui.keyCode.SPACE:
            this._activate(e)
            break
          case t.ui.keyCode.ESCAPE:
            this.collapse(e)
            break
          default:
            ;(a = !1),
              (s = this.previousFilter || ''),
              (o = !1),
              (n =
                e.keyCode >= 96 && 105 >= e.keyCode
                  ? '' + (e.keyCode - 96)
                  : String.fromCharCode(e.keyCode)),
              clearTimeout(this.filterTimer),
              n === s ? (o = !0) : (n = s + n),
              (i = this._filterMenuItems(n)),
              (i =
                o && -1 !== i.index(this.active.next())
                  ? this.active.nextAll('.ui-menu-item')
                  : i),
              i.length ||
                ((n = String.fromCharCode(e.keyCode)),
                (i = this._filterMenuItems(n))),
              i.length
                ? (this.focus(e, i),
                  (this.previousFilter = n),
                  (this.filterTimer = this._delay(function () {
                    delete this.previousFilter
                  }, 1e3)))
                : delete this.previousFilter
        }
        a && e.preventDefault()
      },
      _activate: function (t) {
        this.active &&
          !this.active.is('.ui-state-disabled') &&
          (this.active.children("[aria-haspopup='true']").length
            ? this.expand(t)
            : this.select(t))
      },
      refresh: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this,
          r = this.options.icons.submenu,
          h = this.element.find(this.options.menus)
        this._toggleClass(
          'ui-menu-icons',
          null,
          !!this.element.find('.ui-icon').length
        ),
          (s = h
            .filter(':not(.ui-menu)')
            .hide()
            .attr({
              role: this.options.role,
              'aria-hidden': 'true',
              'aria-expanded': 'false'
            })
            .each(function () {
              var e = t(this),
                i = e.prev(),
                s = t('<span>').data('ui-menu-submenu-caret', !0)
              a._addClass(s, 'ui-menu-icon', 'ui-icon ' + r),
                i.attr('aria-haspopup', 'true').prepend(s),
                e.attr('aria-labelledby', i.attr('id'))
            })),
          this._addClass(s, 'ui-menu', 'ui-widget ui-widget-content ui-front'),
          (e = h.add(this.element)),
          (i = e.find(this.options.items)),
          i.not('.ui-menu-item').each(function () {
            var e = t(this)
            a._isDivider(e) &&
              a._addClass(e, 'ui-menu-divider', 'ui-widget-content')
          }),
          (n = i.not('.ui-menu-item, .ui-menu-divider')),
          (o = n
            .children()
            .not('.ui-menu')
            .uniqueId()
            .attr({ tabIndex: -1, role: this._itemRole() })),
          this._addClass(n, 'ui-menu-item')._addClass(
            o,
            'ui-menu-item-wrapper'
          ),
          i.filter('.ui-state-disabled').attr('aria-disabled', 'true'),
          this.active &&
            !t.contains(this.element[0], this.active[0]) &&
            this.blur()
      },
      _itemRole: function () {
        return { menu: 'menuitem', listbox: 'option' }[this.options.role]
      },
      _setOption: function (t, e) {
        if ('icons' === t) {
          var i = this.element.find('.ui-menu-icon')
          this._removeClass(i, null, this.options.icons.submenu)._addClass(
            i,
            null,
            e.submenu
          )
        }
        this._super(t, e)
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr('aria-disabled', t + ''),
          this._toggleClass(null, 'ui-state-disabled', !!t)
      },
      focus: function (t, e) {
        var i, s, n
        this.blur(t, t && 'focus' === t.type),
          this._scrollIntoView(e),
          (this.active = e.first()),
          (s = this.active.children('.ui-menu-item-wrapper')),
          this._addClass(s, null, 'ui-state-active'),
          this.options.role &&
            this.element.attr('aria-activedescendant', s.attr('id')),
          (n = this.active
            .parent()
            .closest('.ui-menu-item')
            .children('.ui-menu-item-wrapper')),
          this._addClass(n, null, 'ui-state-active'),
          t && 'keydown' === t.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close()
              }, this.delay)),
          (i = e.children('.ui-menu')),
          i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
          (this.activeMenu = e.parent()),
          this._trigger('focus', t, { item: e })
      },
      _scrollIntoView: function (e) {
        var i, s, n, o, a, r
        this._hasScroll() &&
          ((i = parseFloat(t.css(this.activeMenu[0], 'borderTopWidth')) || 0),
          (s = parseFloat(t.css(this.activeMenu[0], 'paddingTop')) || 0),
          (n = e.offset().top - this.activeMenu.offset().top - i - s),
          (o = this.activeMenu.scrollTop()),
          (a = this.activeMenu.height()),
          (r = e.outerHeight()),
          0 > n
            ? this.activeMenu.scrollTop(o + n)
            : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
      },
      blur: function (t, e) {
        e || clearTimeout(this.timer),
          this.active &&
            (this._removeClass(
              this.active.children('.ui-menu-item-wrapper'),
              null,
              'ui-state-active'
            ),
            this._trigger('blur', t, { item: this.active }),
            (this.active = null))
      },
      _startOpening: function (t) {
        clearTimeout(this.timer),
          'true' === t.attr('aria-hidden') &&
            (this.timer = this._delay(function () {
              this._close(), this._open(t)
            }, this.delay))
      },
      _open: function (e) {
        var i = t.extend({ of: this.active }, this.options.position)
        clearTimeout(this.timer),
          this.element
            .find('.ui-menu')
            .not(e.parents('.ui-menu'))
            .hide()
            .attr('aria-hidden', 'true'),
          e
            .show()
            .removeAttr('aria-hidden')
            .attr('aria-expanded', 'true')
            .position(i)
      },
      collapseAll: function (e, i) {
        clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            var s = i
              ? this.element
              : t(e && e.target).closest(this.element.find('.ui-menu'))
            s.length || (s = this.element),
              this._close(s),
              this.blur(e),
              this._removeClass(
                s.find('.ui-state-active'),
                null,
                'ui-state-active'
              ),
              (this.activeMenu = s)
          }, this.delay))
      },
      _close: function (t) {
        t || (t = this.active ? this.active.parent() : this.element),
          t
            .find('.ui-menu')
            .hide()
            .attr('aria-hidden', 'true')
            .attr('aria-expanded', 'false')
      },
      _closeOnDocumentClick: function (e) {
        return !t(e.target).closest('.ui-menu').length
      },
      _isDivider: function (t) {
        return !/[^\-\u2014\u2013\s]/.test(t.text())
      },
      collapse: function (t) {
        var e =
          this.active &&
          this.active.parent().closest('.ui-menu-item', this.element)
        e && e.length && (this._close(), this.focus(t, e))
      },
      expand: function (t) {
        var e =
          this.active &&
          this.active
            .children('.ui-menu ')
            .find(this.options.items)
            .first()
        e &&
          e.length &&
          (this._open(e.parent()),
          this._delay(function () {
            this.focus(t, e)
          }))
      },
      next: function (t) {
        this._move('next', 'first', t)
      },
      previous: function (t) {
        this._move('prev', 'last', t)
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll('.ui-menu-item').length
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll('.ui-menu-item').length
      },
      _move: function (t, e, i) {
        var s
        this.active &&
          (s =
            'first' === t || 'last' === t
              ? this.active['first' === t ? 'prevAll' : 'nextAll'](
                  '.ui-menu-item'
                ).eq(-1)
              : this.active[t + 'All']('.ui-menu-item').eq(0)),
          (s && s.length && this.active) ||
            (s = this.activeMenu.find(this.options.items)[e]()),
          this.focus(i, s)
      },
      nextPage: function (e) {
        var i, s, n
        return this.active
          ? (this.isLastItem() ||
              (this._hasScroll()
                ? ((s = this.active.offset().top),
                  (n = this.element.height()),
                  this.active.nextAll('.ui-menu-item').each(function () {
                    return (i = t(this)), 0 > i.offset().top - s - n
                  }),
                  this.focus(e, i))
                : this.focus(
                    e,
                    this.activeMenu
                      .find(this.options.items)
                      [this.active ? 'last' : 'first']()
                  )),
            void 0)
          : (this.next(e), void 0)
      },
      previousPage: function (e) {
        var i, s, n
        return this.active
          ? (this.isFirstItem() ||
              (this._hasScroll()
                ? ((s = this.active.offset().top),
                  (n = this.element.height()),
                  this.active.prevAll('.ui-menu-item').each(function () {
                    return (i = t(this)), i.offset().top - s + n > 0
                  }),
                  this.focus(e, i))
                : this.focus(
                    e,
                    this.activeMenu.find(this.options.items).first()
                  )),
            void 0)
          : (this.next(e), void 0)
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop('scrollHeight')
      },
      select: function (e) {
        this.active = this.active || t(e.target).closest('.ui-menu-item')
        var i = { item: this.active }
        this.active.has('.ui-menu').length || this.collapseAll(e, !0),
          this._trigger('select', e, i)
      },
      _filterMenuItems: function (e) {
        var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&'),
          s = RegExp('^' + i, 'i')
        return this.activeMenu
          .find(this.options.items)
          .filter('.ui-menu-item')
          .filter(function () {
            return s.test(
              t.trim(
                t(this)
                  .children('.ui-menu-item-wrapper')
                  .text()
              )
            )
          })
      }
    }),
    t.widget('ui.autocomplete', {
      version: '1.12.1',
      defaultElement: '<input>',
      options: {
        appendTo: null,
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: { my: 'left top', at: 'left bottom', collision: 'none' },
        source: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        search: null,
        select: null
      },
      requestIndex: 0,
      pending: 0,
      _create: function () {
        var e,
          i,
          s,
          n = this.element[0].nodeName.toLowerCase(),
          o = 'textarea' === n,
          a = 'input' === n
        ;(this.isMultiLine =
          o || (!a && this._isContentEditable(this.element))),
          (this.valueMethod = this.element[o || a ? 'val' : 'text']),
          (this.isNewMenu = !0),
          this._addClass('ui-autocomplete-input'),
          this.element.attr('autocomplete', 'off'),
          this._on(this.element, {
            keydown: function (n) {
              if (this.element.prop('readOnly'))
                return (e = !0), (s = !0), (i = !0), void 0
              ;(e = !1), (s = !1), (i = !1)
              var o = t.ui.keyCode
              switch (n.keyCode) {
                case o.PAGE_UP:
                  ;(e = !0), this._move('previousPage', n)
                  break
                case o.PAGE_DOWN:
                  ;(e = !0), this._move('nextPage', n)
                  break
                case o.UP:
                  ;(e = !0), this._keyEvent('previous', n)
                  break
                case o.DOWN:
                  ;(e = !0), this._keyEvent('next', n)
                  break
                case o.ENTER:
                  this.menu.active &&
                    ((e = !0), n.preventDefault(), this.menu.select(n))
                  break
                case o.TAB:
                  this.menu.active && this.menu.select(n)
                  break
                case o.ESCAPE:
                  this.menu.element.is(':visible') &&
                    (this.isMultiLine || this._value(this.term),
                    this.close(n),
                    n.preventDefault())
                  break
                default:
                  ;(i = !0), this._searchTimeout(n)
              }
            },
            keypress: function (s) {
              if (e)
                return (
                  (e = !1),
                  (!this.isMultiLine || this.menu.element.is(':visible')) &&
                    s.preventDefault(),
                  void 0
                )
              if (!i) {
                var n = t.ui.keyCode
                switch (s.keyCode) {
                  case n.PAGE_UP:
                    this._move('previousPage', s)
                    break
                  case n.PAGE_DOWN:
                    this._move('nextPage', s)
                    break
                  case n.UP:
                    this._keyEvent('previous', s)
                    break
                  case n.DOWN:
                    this._keyEvent('next', s)
                }
              }
            },
            input: function (t) {
              return s
                ? ((s = !1), t.preventDefault(), void 0)
                : (this._searchTimeout(t), void 0)
            },
            focus: function () {
              ;(this.selectedItem = null), (this.previous = this._value())
            },
            blur: function (t) {
              return this.cancelBlur
                ? (delete this.cancelBlur, void 0)
                : (clearTimeout(this.searching),
                  this.close(t),
                  this._change(t),
                  void 0)
            }
          }),
          this._initSource(),
          (this.menu = t('<ul>')
            .appendTo(this._appendTo())
            .menu({ role: null })
            .hide()
            .menu('instance')),
          this._addClass(this.menu.element, 'ui-autocomplete', 'ui-front'),
          this._on(this.menu.element, {
            mousedown: function (e) {
              e.preventDefault(),
                (this.cancelBlur = !0),
                this._delay(function () {
                  delete this.cancelBlur,
                    this.element[0] !==
                      t.ui.safeActiveElement(this.document[0]) &&
                      this.element.trigger('focus')
                })
            },
            menufocus: function (e, i) {
              var s, n
              return this.isNewMenu &&
                ((this.isNewMenu = !1),
                e.originalEvent && /^mouse/.test(e.originalEvent.type))
                ? (this.menu.blur(),
                  this.document.one('mousemove', function () {
                    t(e.target).trigger(e.originalEvent)
                  }),
                  void 0)
                : ((n = i.item.data('ui-autocomplete-item')),
                  !1 !== this._trigger('focus', e, { item: n }) &&
                    e.originalEvent &&
                    /^key/.test(e.originalEvent.type) &&
                    this._value(n.value),
                  (s = i.item.attr('aria-label') || n.value),
                  s &&
                    t.trim(s).length &&
                    (this.liveRegion.children().hide(),
                    t('<div>')
                      .text(s)
                      .appendTo(this.liveRegion)),
                  void 0)
            },
            menuselect: function (e, i) {
              var s = i.item.data('ui-autocomplete-item'),
                n = this.previous
              this.element[0] !== t.ui.safeActiveElement(this.document[0]) &&
                (this.element.trigger('focus'),
                (this.previous = n),
                this._delay(function () {
                  ;(this.previous = n), (this.selectedItem = s)
                })),
                !1 !== this._trigger('select', e, { item: s }) &&
                  this._value(s.value),
                (this.term = this._value()),
                this.close(e),
                (this.selectedItem = s)
            }
          }),
          (this.liveRegion = t('<div>', {
            role: 'status',
            'aria-live': 'assertive',
            'aria-relevant': 'additions'
          }).appendTo(this.document[0].body)),
          this._addClass(this.liveRegion, null, 'ui-helper-hidden-accessible'),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr('autocomplete')
            }
          })
      },
      _destroy: function () {
        clearTimeout(this.searching),
          this.element.removeAttr('autocomplete'),
          this.menu.element.remove(),
          this.liveRegion.remove()
      },
      _setOption: function (t, e) {
        this._super(t, e),
          'source' === t && this._initSource(),
          'appendTo' === t && this.menu.element.appendTo(this._appendTo()),
          'disabled' === t && e && this.xhr && this.xhr.abort()
      },
      _isEventTargetInWidget: function (e) {
        var i = this.menu.element[0]
        return (
          e.target === this.element[0] ||
          e.target === i ||
          t.contains(i, e.target)
        )
      },
      _closeOnClickOutside: function (t) {
        this._isEventTargetInWidget(t) || this.close()
      },
      _appendTo: function () {
        var e = this.options.appendTo
        return (
          e &&
            (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
          (e && e[0]) || (e = this.element.closest('.ui-front, dialog')),
          e.length || (e = this.document[0].body),
          e
        )
      },
      _initSource: function () {
        var e,
          i,
          s = this
        t.isArray(this.options.source)
          ? ((e = this.options.source),
            (this.source = function (i, s) {
              s(t.ui.autocomplete.filter(e, i.term))
            }))
          : 'string' == typeof this.options.source
          ? ((i = this.options.source),
            (this.source = function (e, n) {
              s.xhr && s.xhr.abort(),
                (s.xhr = t.ajax({
                  url: i,
                  data: e,
                  dataType: 'json',
                  success: function (t) {
                    n(t)
                  },
                  error: function () {
                    n([])
                  }
                }))
            }))
          : (this.source = this.options.source)
      },
      _searchTimeout: function (t) {
        clearTimeout(this.searching),
          (this.searching = this._delay(function () {
            var e = this.term === this._value(),
              i = this.menu.element.is(':visible'),
              s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
            ;(!e || (e && !i && !s)) &&
              ((this.selectedItem = null), this.search(null, t))
          }, this.options.delay))
      },
      search: function (t, e) {
        return (
          (t = null != t ? t : this._value()),
          (this.term = this._value()),
          t.length < this.options.minLength
            ? this.close(e)
            : this._trigger('search', e) !== !1
            ? this._search(t)
            : void 0
        )
      },
      _search: function (t) {
        this.pending++,
          this._addClass('ui-autocomplete-loading'),
          (this.cancelSearch = !1),
          this.source({ term: t }, this._response())
      },
      _response: function () {
        var e = ++this.requestIndex
        return t.proxy(function (t) {
          e === this.requestIndex && this.__response(t),
            this.pending--,
            this.pending || this._removeClass('ui-autocomplete-loading')
        }, this)
      },
      __response: function (t) {
        t && (t = this._normalize(t)),
          this._trigger('response', null, { content: t }),
          !this.options.disabled && t && t.length && !this.cancelSearch
            ? (this._suggest(t), this._trigger('open'))
            : this._close()
      },
      close: function (t) {
        ;(this.cancelSearch = !0), this._close(t)
      },
      _close: function (t) {
        this._off(this.document, 'mousedown'),
          this.menu.element.is(':visible') &&
            (this.menu.element.hide(),
            this.menu.blur(),
            (this.isNewMenu = !0),
            this._trigger('close', t))
      },
      _change: function (t) {
        this.previous !== this._value() &&
          this._trigger('change', t, { item: this.selectedItem })
      },
      _normalize: function (e) {
        return e.length && e[0].label && e[0].value
          ? e
          : t.map(e, function (e) {
              return 'string' == typeof e
                ? { label: e, value: e }
                : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                  })
            })
      },
      _suggest: function (e) {
        var i = this.menu.element.empty()
        this._renderMenu(i, e),
          (this.isNewMenu = !0),
          this.menu.refresh(),
          i.show(),
          this._resizeMenu(),
          i.position(t.extend({ of: this.element }, this.options.position)),
          this.options.autoFocus && this.menu.next(),
          this._on(this.document, { mousedown: '_closeOnClickOutside' })
      },
      _resizeMenu: function () {
        var t = this.menu.element
        t.outerWidth(
          Math.max(t.width('').outerWidth() + 1, this.element.outerWidth())
        )
      },
      _renderMenu: function (e, i) {
        var s = this
        t.each(i, function (t, i) {
          s._renderItemData(e, i)
        })
      },
      _renderItemData: function (t, e) {
        return this._renderItem(t, e).data('ui-autocomplete-item', e)
      },
      _renderItem: function (e, i) {
        return t('<li>')
          .append(t('<div>').text(i.label))
          .appendTo(e)
      },
      _move: function (t, e) {
        return this.menu.element.is(':visible')
          ? (this.menu.isFirstItem() && /^previous/.test(t)) ||
            (this.menu.isLastItem() && /^next/.test(t))
            ? (this.isMultiLine || this._value(this.term),
              this.menu.blur(),
              void 0)
            : (this.menu[t](e), void 0)
          : (this.search(null, e), void 0)
      },
      widget: function () {
        return this.menu.element
      },
      _value: function () {
        return this.valueMethod.apply(this.element, arguments)
      },
      _keyEvent: function (t, e) {
        ;(!this.isMultiLine || this.menu.element.is(':visible')) &&
          (this._move(t, e), e.preventDefault())
      },
      _isContentEditable: function (t) {
        if (!t.length) return !1
        var e = t.prop('contentEditable')
        return 'inherit' === e
          ? this._isContentEditable(t.parent())
          : 'true' === e
      }
    }),
    t.extend(t.ui.autocomplete, {
      escapeRegex: function (t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      },
      filter: function (e, i) {
        var s = RegExp(t.ui.autocomplete.escapeRegex(i), 'i')
        return t.grep(e, function (t) {
          return s.test(t.label || t.value || t)
        })
      }
    }),
    t.widget('ui.autocomplete', t.ui.autocomplete, {
      options: {
        messages: {
          noResults: 'No search results.',
          results: function (t) {
            return (
              t +
              (t > 1 ? ' results are' : ' result is') +
              ' available, use up and down arrow keys to navigate.'
            )
          }
        }
      },
      __response: function (e) {
        var i
        this._superApply(arguments),
          this.options.disabled ||
            this.cancelSearch ||
            ((i =
              e && e.length
                ? this.options.messages.results(e.length)
                : this.options.messages.noResults),
            this.liveRegion.children().hide(),
            t('<div>')
              .text(i)
              .appendTo(this.liveRegion))
      }
    }),
    t.ui.autocomplete
  var d = /ui-corner-([a-z]){2,6}/g
  t.widget('ui.controlgroup', {
    version: '1.12.1',
    defaultElement: '<div>',
    options: {
      direction: 'horizontal',
      disabled: null,
      onlyVisible: !0,
      items: {
        button:
          'input[type=button], input[type=submit], input[type=reset], button, a',
        controlgroupLabel: '.ui-controlgroup-label',
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: 'select',
        spinner: '.ui-spinner-input'
      }
    },
    _create: function () {
      this._enhance()
    },
    _enhance: function () {
      this.element.attr('role', 'toolbar'), this.refresh()
    },
    _destroy: function () {
      this._callChildMethod('destroy'),
        this.childWidgets.removeData('ui-controlgroup-data'),
        this.element.removeAttr('role'),
        this.options.items.controlgroupLabel &&
          this.element
            .find(this.options.items.controlgroupLabel)
            .find('.ui-controlgroup-label-contents')
            .contents()
            .unwrap()
    },
    _initWidgets: function () {
      var e = this,
        i = []
      t.each(this.options.items, function (s, n) {
        var o,
          a = {}
        return n
          ? 'controlgroupLabel' === s
            ? ((o = e.element.find(n)),
              o.each(function () {
                var e = t(this)
                e.children('.ui-controlgroup-label-contents').length ||
                  e
                    .contents()
                    .wrapAll(
                      "<span class='ui-controlgroup-label-contents'></span>"
                    )
              }),
              e._addClass(
                o,
                null,
                'ui-widget ui-widget-content ui-state-default'
              ),
              (i = i.concat(o.get())),
              void 0)
            : (t.fn[s] &&
                ((a = e['_' + s + 'Options']
                  ? e['_' + s + 'Options']('middle')
                  : { classes: {} }),
                e.element.find(n).each(function () {
                  var n = t(this),
                    o = n[s]('instance'),
                    r = t.widget.extend({}, a)
                  if ('button' !== s || !n.parent('.ui-spinner').length) {
                    o || (o = n[s]()[s]('instance')),
                      o && (r.classes = e._resolveClassesValues(r.classes, o)),
                      n[s](r)
                    var h = n[s]('widget')
                    t.data(
                      h[0],
                      'ui-controlgroup-data',
                      o ? o : n[s]('instance')
                    ),
                      i.push(h[0])
                  }
                })),
              void 0)
          : void 0
      }),
        (this.childWidgets = t(t.unique(i))),
        this._addClass(this.childWidgets, 'ui-controlgroup-item')
    },
    _callChildMethod: function (e) {
      this.childWidgets.each(function () {
        var i = t(this),
          s = i.data('ui-controlgroup-data')
        s && s[e] && s[e]()
      })
    },
    _updateCornerClass: function (t, e) {
      var i =
          'ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all',
        s = this._buildSimpleOptions(e, 'label').classes.label
      this._removeClass(t, null, i), this._addClass(t, null, s)
    },
    _buildSimpleOptions: function (t, e) {
      var i = 'vertical' === this.options.direction,
        s = { classes: {} }
      return (
        (s.classes[e] = {
          middle: '',
          first: 'ui-corner-' + (i ? 'top' : 'left'),
          last: 'ui-corner-' + (i ? 'bottom' : 'right'),
          only: 'ui-corner-all'
        }[t]),
        s
      )
    },
    _spinnerOptions: function (t) {
      var e = this._buildSimpleOptions(t, 'ui-spinner')
      return (
        (e.classes['ui-spinner-up'] = ''),
        (e.classes['ui-spinner-down'] = ''),
        e
      )
    },
    _buttonOptions: function (t) {
      return this._buildSimpleOptions(t, 'ui-button')
    },
    _checkboxradioOptions: function (t) {
      return this._buildSimpleOptions(t, 'ui-checkboxradio-label')
    },
    _selectmenuOptions: function (t) {
      var e = 'vertical' === this.options.direction
      return {
        width: e ? 'auto' : !1,
        classes: {
          middle: {
            'ui-selectmenu-button-open': '',
            'ui-selectmenu-button-closed': ''
          },
          first: {
            'ui-selectmenu-button-open': 'ui-corner-' + (e ? 'top' : 'tl'),
            'ui-selectmenu-button-closed': 'ui-corner-' + (e ? 'top' : 'left')
          },
          last: {
            'ui-selectmenu-button-open': e ? '' : 'ui-corner-tr',
            'ui-selectmenu-button-closed':
              'ui-corner-' + (e ? 'bottom' : 'right')
          },
          only: {
            'ui-selectmenu-button-open': 'ui-corner-top',
            'ui-selectmenu-button-closed': 'ui-corner-all'
          }
        }[t]
      }
    },
    _resolveClassesValues: function (e, i) {
      var s = {}
      return (
        t.each(e, function (n) {
          var o = i.options.classes[n] || ''
          ;(o = t.trim(o.replace(d, ''))),
            (s[n] = (o + ' ' + e[n]).replace(/\s+/g, ' '))
        }),
        s
      )
    },
    _setOption: function (t, e) {
      return (
        'direction' === t &&
          this._removeClass('ui-controlgroup-' + this.options.direction),
        this._super(t, e),
        'disabled' === t
          ? (this._callChildMethod(e ? 'disable' : 'enable'), void 0)
          : (this.refresh(), void 0)
      )
    },
    refresh: function () {
      var e,
        i = this
      this._addClass(
        'ui-controlgroup ui-controlgroup-' + this.options.direction
      ),
        'horizontal' === this.options.direction &&
          this._addClass(null, 'ui-helper-clearfix'),
        this._initWidgets(),
        (e = this.childWidgets),
        this.options.onlyVisible && (e = e.filter(':visible')),
        e.length &&
          (t.each(['first', 'last'], function (t, s) {
            var n = e[s]().data('ui-controlgroup-data')
            if (n && i['_' + n.widgetName + 'Options']) {
              var o = i['_' + n.widgetName + 'Options'](
                1 === e.length ? 'only' : s
              )
              ;(o.classes = i._resolveClassesValues(o.classes, n)),
                n.element[n.widgetName](o)
            } else i._updateCornerClass(e[s](), s)
          }),
          this._callChildMethod('refresh'))
    }
  }),
    t.widget('ui.checkboxradio', [
      t.ui.formResetMixin,
      {
        version: '1.12.1',
        options: {
          disabled: null,
          label: null,
          icon: !0,
          classes: {
            'ui-checkboxradio-label': 'ui-corner-all',
            'ui-checkboxradio-icon': 'ui-corner-all'
          }
        },
        _getCreateOptions: function () {
          var e,
            i,
            s = this,
            n = this._super() || {}
          return (
            this._readType(),
            (i = this.element.labels()),
            (this.label = t(i[i.length - 1])),
            this.label.length ||
              t.error('No label found for checkboxradio widget'),
            (this.originalLabel = ''),
            this.label
              .contents()
              .not(this.element[0])
              .each(function () {
                s.originalLabel +=
                  3 === this.nodeType ? t(this).text() : this.outerHTML
              }),
            this.originalLabel && (n.label = this.originalLabel),
            (e = this.element[0].disabled),
            null != e && (n.disabled = e),
            n
          )
        },
        _create: function () {
          var t = this.element[0].checked
          this._bindFormResetHandler(),
            null == this.options.disabled &&
              (this.options.disabled = this.element[0].disabled),
            this._setOption('disabled', this.options.disabled),
            this._addClass('ui-checkboxradio', 'ui-helper-hidden-accessible'),
            this._addClass(
              this.label,
              'ui-checkboxradio-label',
              'ui-button ui-widget'
            ),
            'radio' === this.type &&
              this._addClass(this.label, 'ui-checkboxradio-radio-label'),
            this.options.label && this.options.label !== this.originalLabel
              ? this._updateLabel()
              : this.originalLabel && (this.options.label = this.originalLabel),
            this._enhance(),
            t &&
              (this._addClass(
                this.label,
                'ui-checkboxradio-checked',
                'ui-state-active'
              ),
              this.icon && this._addClass(this.icon, null, 'ui-state-hover')),
            this._on({
              change: '_toggleClasses',
              focus: function () {
                this._addClass(
                  this.label,
                  null,
                  'ui-state-focus ui-visual-focus'
                )
              },
              blur: function () {
                this._removeClass(
                  this.label,
                  null,
                  'ui-state-focus ui-visual-focus'
                )
              }
            })
        },
        _readType: function () {
          var e = this.element[0].nodeName.toLowerCase()
          ;(this.type = this.element[0].type),
            ('input' === e && /radio|checkbox/.test(this.type)) ||
              t.error(
                "Can't create checkboxradio on element.nodeName=" +
                  e +
                  ' and element.type=' +
                  this.type
              )
        },
        _enhance: function () {
          this._updateIcon(this.element[0].checked)
        },
        widget: function () {
          return this.label
        },
        _getRadioGroup: function () {
          var e,
            i = this.element[0].name,
            s = "input[name='" + t.ui.escapeSelector(i) + "']"
          return i
            ? ((e = this.form.length
                ? t(this.form[0].elements).filter(s)
                : t(s).filter(function () {
                    return 0 === t(this).form().length
                  })),
              e.not(this.element))
            : t([])
        },
        _toggleClasses: function () {
          var e = this.element[0].checked
          this._toggleClass(
            this.label,
            'ui-checkboxradio-checked',
            'ui-state-active',
            e
          ),
            this.options.icon &&
              'checkbox' === this.type &&
              this._toggleClass(
                this.icon,
                null,
                'ui-icon-check ui-state-checked',
                e
              )._toggleClass(this.icon, null, 'ui-icon-blank', !e),
            'radio' === this.type &&
              this._getRadioGroup().each(function () {
                var e = t(this).checkboxradio('instance')
                e &&
                  e._removeClass(
                    e.label,
                    'ui-checkboxradio-checked',
                    'ui-state-active'
                  )
              })
        },
        _destroy: function () {
          this._unbindFormResetHandler(),
            this.icon && (this.icon.remove(), this.iconSpace.remove())
        },
        _setOption: function (t, e) {
          return 'label' !== t || e
            ? (this._super(t, e),
              'disabled' === t
                ? (this._toggleClass(this.label, null, 'ui-state-disabled', e),
                  (this.element[0].disabled = e),
                  void 0)
                : (this.refresh(), void 0))
            : void 0
        },
        _updateIcon: function (e) {
          var i = 'ui-icon ui-icon-background '
          this.options.icon
            ? (this.icon ||
                ((this.icon = t('<span>')),
                (this.iconSpace = t('<span> </span>')),
                this._addClass(this.iconSpace, 'ui-checkboxradio-icon-space')),
              'checkbox' === this.type
                ? ((i += e
                    ? 'ui-icon-check ui-state-checked'
                    : 'ui-icon-blank'),
                  this._removeClass(
                    this.icon,
                    null,
                    e ? 'ui-icon-blank' : 'ui-icon-check'
                  ))
                : (i += 'ui-icon-blank'),
              this._addClass(this.icon, 'ui-checkboxradio-icon', i),
              e ||
                this._removeClass(
                  this.icon,
                  null,
                  'ui-icon-check ui-state-checked'
                ),
              this.icon.prependTo(this.label).after(this.iconSpace))
            : void 0 !== this.icon &&
              (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function () {
          var t = this.label.contents().not(this.element[0])
          this.icon && (t = t.not(this.icon[0])),
            this.iconSpace && (t = t.not(this.iconSpace[0])),
            t.remove(),
            this.label.append(this.options.label)
        },
        refresh: function () {
          var t = this.element[0].checked,
            e = this.element[0].disabled
          this._updateIcon(t),
            this._toggleClass(
              this.label,
              'ui-checkboxradio-checked',
              'ui-state-active',
              t
            ),
            null !== this.options.label && this._updateLabel(),
            e !== this.options.disabled && this._setOptions({ disabled: e })
        }
      }
    ]),
    t.ui.checkboxradio,
    t.widget('ui.button', {
      version: '1.12.1',
      defaultElement: '<button>',
      options: {
        classes: { 'ui-button': 'ui-corner-all' },
        disabled: null,
        icon: null,
        iconPosition: 'beginning',
        label: null,
        showLabel: !0
      },
      _getCreateOptions: function () {
        var t,
          e = this._super() || {}
        return (
          (this.isInput = this.element.is('input')),
          (t = this.element[0].disabled),
          null != t && (e.disabled = t),
          (this.originalLabel = this.isInput
            ? this.element.val()
            : this.element.html()),
          this.originalLabel && (e.label = this.originalLabel),
          e
        )
      },
      _create: function () {
        !this.option.showLabel & !this.options.icon &&
          (this.options.showLabel = !0),
          null == this.options.disabled &&
            (this.options.disabled = this.element[0].disabled || !1),
          (this.hasTitle = !!this.element.attr('title')),
          this.options.label &&
            this.options.label !== this.originalLabel &&
            (this.isInput
              ? this.element.val(this.options.label)
              : this.element.html(this.options.label)),
          this._addClass('ui-button', 'ui-widget'),
          this._setOption('disabled', this.options.disabled),
          this._enhance(),
          this.element.is('a') &&
            this._on({
              keyup: function (e) {
                e.keyCode === t.ui.keyCode.SPACE &&
                  (e.preventDefault(),
                  this.element[0].click
                    ? this.element[0].click()
                    : this.element.trigger('click'))
              }
            })
      },
      _enhance: function () {
        this.element.is('button') || this.element.attr('role', 'button'),
          this.options.icon &&
            (this._updateIcon('icon', this.options.icon), this._updateTooltip())
      },
      _updateTooltip: function () {
        ;(this.title = this.element.attr('title')),
          this.options.showLabel ||
            this.title ||
            this.element.attr('title', this.options.label)
      },
      _updateIcon: function (e, i) {
        var s = 'iconPosition' !== e,
          n = s ? this.options.iconPosition : i,
          o = 'top' === n || 'bottom' === n
        this.icon
          ? s && this._removeClass(this.icon, null, this.options.icon)
          : ((this.icon = t('<span>')),
            this._addClass(this.icon, 'ui-button-icon', 'ui-icon'),
            this.options.showLabel || this._addClass('ui-button-icon-only')),
          s && this._addClass(this.icon, null, i),
          this._attachIcon(n),
          o
            ? (this._addClass(this.icon, null, 'ui-widget-icon-block'),
              this.iconSpace && this.iconSpace.remove())
            : (this.iconSpace ||
                ((this.iconSpace = t('<span> </span>')),
                this._addClass(this.iconSpace, 'ui-button-icon-space')),
              this._removeClass(this.icon, null, 'ui-wiget-icon-block'),
              this._attachIconSpace(n))
      },
      _destroy: function () {
        this.element.removeAttr('role'),
          this.icon && this.icon.remove(),
          this.iconSpace && this.iconSpace.remove(),
          this.hasTitle || this.element.removeAttr('title')
      },
      _attachIconSpace: function (t) {
        this.icon[/^(?:end|bottom)/.test(t) ? 'before' : 'after'](
          this.iconSpace
        )
      },
      _attachIcon: function (t) {
        this.element[/^(?:end|bottom)/.test(t) ? 'append' : 'prepend'](
          this.icon
        )
      },
      _setOptions: function (t) {
        var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
          i = void 0 === t.icon ? this.options.icon : t.icon
        e || i || (t.showLabel = !0), this._super(t)
      },
      _setOption: function (t, e) {
        'icon' === t &&
          (e
            ? this._updateIcon(t, e)
            : this.icon &&
              (this.icon.remove(), this.iconSpace && this.iconSpace.remove())),
          'iconPosition' === t && this._updateIcon(t, e),
          'showLabel' === t &&
            (this._toggleClass('ui-button-icon-only', null, !e),
            this._updateTooltip()),
          'label' === t &&
            (this.isInput
              ? this.element.val(e)
              : (this.element.html(e),
                this.icon &&
                  (this._attachIcon(this.options.iconPosition),
                  this._attachIconSpace(this.options.iconPosition)))),
          this._super(t, e),
          'disabled' === t &&
            (this._toggleClass(null, 'ui-state-disabled', e),
            (this.element[0].disabled = e),
            e && this.element.blur())
      },
      refresh: function () {
        var t = this.element.is('input, button')
          ? this.element[0].disabled
          : this.element.hasClass('ui-button-disabled')
        t !== this.options.disabled && this._setOptions({ disabled: t }),
          this._updateTooltip()
      }
    }),
    t.uiBackCompat !== !1 &&
      (t.widget('ui.button', t.ui.button, {
        options: { text: !0, icons: { primary: null, secondary: null } },
        _create: function () {
          this.options.showLabel &&
            !this.options.text &&
            (this.options.showLabel = this.options.text),
            !this.options.showLabel &&
              this.options.text &&
              (this.options.text = this.options.showLabel),
            this.options.icon ||
            (!this.options.icons.primary && !this.options.icons.secondary)
              ? this.options.icon &&
                (this.options.icons.primary = this.options.icon)
              : this.options.icons.primary
              ? (this.options.icon = this.options.icons.primary)
              : ((this.options.icon = this.options.icons.secondary),
                (this.options.iconPosition = 'end')),
            this._super()
        },
        _setOption: function (t, e) {
          return 'text' === t
            ? (this._super('showLabel', e), void 0)
            : ('showLabel' === t && (this.options.text = e),
              'icon' === t && (this.options.icons.primary = e),
              'icons' === t &&
                (e.primary
                  ? (this._super('icon', e.primary),
                    this._super('iconPosition', 'beginning'))
                  : e.secondary &&
                    (this._super('icon', e.secondary),
                    this._super('iconPosition', 'end'))),
              this._superApply(arguments),
              void 0)
        }
      }),
      (t.fn.button = (function (e) {
        return function () {
          return !this.length ||
            (this.length && 'INPUT' !== this[0].tagName) ||
            (this.length &&
              'INPUT' === this[0].tagName &&
              'checkbox' !== this.attr('type') &&
              'radio' !== this.attr('type'))
            ? e.apply(this, arguments)
            : (t.ui.checkboxradio || t.error('Checkboxradio widget missing'),
              0 === arguments.length
                ? this.checkboxradio({ icon: !1 })
                : this.checkboxradio.apply(this, arguments))
        }
      })(t.fn.button)),
      (t.fn.buttonset = function () {
        return (
          t.ui.controlgroup || t.error('Controlgroup widget missing'),
          'option' === arguments[0] && 'items' === arguments[1] && arguments[2]
            ? this.controlgroup.apply(this, [
                arguments[0],
                'items.button',
                arguments[2]
              ])
            : 'option' === arguments[0] && 'items' === arguments[1]
            ? this.controlgroup.apply(this, [arguments[0], 'items.button'])
            : ('object' == typeof arguments[0] &&
                arguments[0].items &&
                (arguments[0].items = { button: arguments[0].items }),
              this.controlgroup.apply(this, arguments))
        )
      })),
    t.ui.button,
    t.extend(t.ui, { datepicker: { version: '1.12.1' } })
  var p
  t.extend(s.prototype, {
    markerClassName: 'hasDatepicker',
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv
    },
    setDefaults: function (t) {
      return a(this._defaults, t || {}), this
    },
    _attachDatepicker: function (e, i) {
      var s, n, o
      ;(s = e.nodeName.toLowerCase()),
        (n = 'div' === s || 'span' === s),
        e.id || ((this.uuid += 1), (e.id = 'dp' + this.uuid)),
        (o = this._newInst(t(e), n)),
        (o.settings = t.extend({}, i || {})),
        'input' === s
          ? this._connectDatepicker(e, o)
          : n && this._inlineDatepicker(e, o)
    },
    _newInst: function (e, i) {
      var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1')
      return {
        id: s,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i
          ? n(
              t(
                "<div class='" +
                  this._inlineClass +
                  " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
              )
            )
          : this.dpDiv
      }
    },
    _connectDatepicker: function (e, i) {
      var s = t(e)
      ;(i.append = t([])),
        (i.trigger = t([])),
        s.hasClass(this.markerClassName) ||
          (this._attachments(s, i),
          s
            .addClass(this.markerClassName)
            .on('keydown', this._doKeyDown)
            .on('keypress', this._doKeyPress)
            .on('keyup', this._doKeyUp),
          this._autoSize(i),
          t.data(e, 'datepicker', i),
          i.settings.disabled && this._disableDatepicker(e))
    },
    _attachments: function (e, i) {
      var s,
        n,
        o,
        a = this._get(i, 'appendText'),
        r = this._get(i, 'isRTL')
      i.append && i.append.remove(),
        a &&
          ((i.append = t(
            "<span class='" + this._appendClass + "'>" + a + '</span>'
          )),
          e[r ? 'before' : 'after'](i.append)),
        e.off('focus', this._showDatepicker),
        i.trigger && i.trigger.remove(),
        (s = this._get(i, 'showOn')),
        ('focus' === s || 'both' === s) && e.on('focus', this._showDatepicker),
        ('button' === s || 'both' === s) &&
          ((n = this._get(i, 'buttonText')),
          (o = this._get(i, 'buttonImage')),
          (i.trigger = t(
            this._get(i, 'buttonImageOnly')
              ? t('<img/>')
                  .addClass(this._triggerClass)
                  .attr({ src: o, alt: n, title: n })
              : t("<button type='button'></button>")
                  .addClass(this._triggerClass)
                  .html(o ? t('<img/>').attr({ src: o, alt: n, title: n }) : n)
          )),
          e[r ? 'before' : 'after'](i.trigger),
          i.trigger.on('click', function () {
            return (
              t.datepicker._datepickerShowing &&
              t.datepicker._lastInput === e[0]
                ? t.datepicker._hideDatepicker()
                : t.datepicker._datepickerShowing &&
                  t.datepicker._lastInput !== e[0]
                ? (t.datepicker._hideDatepicker(),
                  t.datepicker._showDatepicker(e[0]))
                : t.datepicker._showDatepicker(e[0]),
              !1
            )
          }))
    },
    _autoSize: function (t) {
      if (this._get(t, 'autoSize') && !t.inline) {
        var e,
          i,
          s,
          n,
          o = new Date(2009, 11, 20),
          a = this._get(t, 'dateFormat')
        a.match(/[DM]/) &&
          ((e = function (t) {
            for (i = 0, s = 0, n = 0; t.length > n; n++)
              t[n].length > i && ((i = t[n].length), (s = n))
            return s
          }),
          o.setMonth(
            e(this._get(t, a.match(/MM/) ? 'monthNames' : 'monthNamesShort'))
          ),
          o.setDate(
            e(this._get(t, a.match(/DD/) ? 'dayNames' : 'dayNamesShort')) +
              20 -
              o.getDay()
          )),
          t.input.attr('size', this._formatDate(t, o).length)
      }
    },
    _inlineDatepicker: function (e, i) {
      var s = t(e)
      s.hasClass(this.markerClassName) ||
        (s.addClass(this.markerClassName).append(i.dpDiv),
        t.data(e, 'datepicker', i),
        this._setDate(i, this._getDefaultDate(i), !0),
        this._updateDatepicker(i),
        this._updateAlternate(i),
        i.settings.disabled && this._disableDatepicker(e),
        i.dpDiv.css('display', 'block'))
    },
    _dialogDatepicker: function (e, i, s, n, o) {
      var r,
        h,
        l,
        u,
        c,
        d = this._dialogInst
      return (
        d ||
          ((this.uuid += 1),
          (r = 'dp' + this.uuid),
          (this._dialogInput = t(
            "<input type='text' id='" +
              r +
              "' style='position: absolute; top: -100px; width: 0px;'/>"
          )),
          this._dialogInput.on('keydown', this._doKeyDown),
          t('body').append(this._dialogInput),
          (d = this._dialogInst = this._newInst(this._dialogInput, !1)),
          (d.settings = {}),
          t.data(this._dialogInput[0], 'datepicker', d)),
        a(d.settings, n || {}),
        (i = i && i.constructor === Date ? this._formatDate(d, i) : i),
        this._dialogInput.val(i),
        (this._pos = o ? (o.length ? o : [o.pageX, o.pageY]) : null),
        this._pos ||
          ((h = document.documentElement.clientWidth),
          (l = document.documentElement.clientHeight),
          (u = document.documentElement.scrollLeft || document.body.scrollLeft),
          (c = document.documentElement.scrollTop || document.body.scrollTop),
          (this._pos = [h / 2 - 100 + u, l / 2 - 150 + c])),
        this._dialogInput
          .css('left', this._pos[0] + 20 + 'px')
          .css('top', this._pos[1] + 'px'),
        (d.settings.onSelect = s),
        (this._inDialog = !0),
        this.dpDiv.addClass(this._dialogClass),
        this._showDatepicker(this._dialogInput[0]),
        t.blockUI && t.blockUI(this.dpDiv),
        t.data(this._dialogInput[0], 'datepicker', d),
        this
      )
    },
    _destroyDatepicker: function (e) {
      var i,
        s = t(e),
        n = t.data(e, 'datepicker')
      s.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        t.removeData(e, 'datepicker'),
        'input' === i
          ? (n.append.remove(),
            n.trigger.remove(),
            s
              .removeClass(this.markerClassName)
              .off('focus', this._showDatepicker)
              .off('keydown', this._doKeyDown)
              .off('keypress', this._doKeyPress)
              .off('keyup', this._doKeyUp))
          : ('div' === i || 'span' === i) &&
            s.removeClass(this.markerClassName).empty(),
        p === n && (p = null))
    },
    _enableDatepicker: function (e) {
      var i,
        s,
        n = t(e),
        o = t.data(e, 'datepicker')
      n.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        'input' === i
          ? ((e.disabled = !1),
            o.trigger
              .filter('button')
              .each(function () {
                this.disabled = !1
              })
              .end()
              .filter('img')
              .css({ opacity: '1.0', cursor: '' }))
          : ('div' === i || 'span' === i) &&
            ((s = n.children('.' + this._inlineClass)),
            s.children().removeClass('ui-state-disabled'),
            s
              .find('select.ui-datepicker-month, select.ui-datepicker-year')
              .prop('disabled', !1)),
        (this._disabledInputs = t.map(this._disabledInputs, function (t) {
          return t === e ? null : t
        })))
    },
    _disableDatepicker: function (e) {
      var i,
        s,
        n = t(e),
        o = t.data(e, 'datepicker')
      n.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        'input' === i
          ? ((e.disabled = !0),
            o.trigger
              .filter('button')
              .each(function () {
                this.disabled = !0
              })
              .end()
              .filter('img')
              .css({ opacity: '0.5', cursor: 'default' }))
          : ('div' === i || 'span' === i) &&
            ((s = n.children('.' + this._inlineClass)),
            s.children().addClass('ui-state-disabled'),
            s
              .find('select.ui-datepicker-month, select.ui-datepicker-year')
              .prop('disabled', !0)),
        (this._disabledInputs = t.map(this._disabledInputs, function (t) {
          return t === e ? null : t
        })),
        (this._disabledInputs[this._disabledInputs.length] = e))
    },
    _isDisabledDatepicker: function (t) {
      if (!t) return !1
      for (var e = 0; this._disabledInputs.length > e; e++)
        if (this._disabledInputs[e] === t) return !0
      return !1
    },
    _getInst: function (e) {
      try {
        return t.data(e, 'datepicker')
      } catch (i) {
        throw 'Missing instance data for this datepicker'
      }
    },
    _optionDatepicker: function (e, i, s) {
      var n,
        o,
        r,
        h,
        l = this._getInst(e)
      return 2 === arguments.length && 'string' == typeof i
        ? 'defaults' === i
          ? t.extend({}, t.datepicker._defaults)
          : l
          ? 'all' === i
            ? t.extend({}, l.settings)
            : this._get(l, i)
          : null
        : ((n = i || {}),
          'string' == typeof i && ((n = {}), (n[i] = s)),
          l &&
            (this._curInst === l && this._hideDatepicker(),
            (o = this._getDateDatepicker(e, !0)),
            (r = this._getMinMaxDate(l, 'min')),
            (h = this._getMinMaxDate(l, 'max')),
            a(l.settings, n),
            null !== r &&
              void 0 !== n.dateFormat &&
              void 0 === n.minDate &&
              (l.settings.minDate = this._formatDate(l, r)),
            null !== h &&
              void 0 !== n.dateFormat &&
              void 0 === n.maxDate &&
              (l.settings.maxDate = this._formatDate(l, h)),
            'disabled' in n &&
              (n.disabled
                ? this._disableDatepicker(e)
                : this._enableDatepicker(e)),
            this._attachments(t(e), l),
            this._autoSize(l),
            this._setDate(l, o),
            this._updateAlternate(l),
            this._updateDatepicker(l)),
          void 0)
    },
    _changeDatepicker: function (t, e, i) {
      this._optionDatepicker(t, e, i)
    },
    _refreshDatepicker: function (t) {
      var e = this._getInst(t)
      e && this._updateDatepicker(e)
    },
    _setDateDatepicker: function (t, e) {
      var i = this._getInst(t)
      i &&
        (this._setDate(i, e),
        this._updateDatepicker(i),
        this._updateAlternate(i))
    },
    _getDateDatepicker: function (t, e) {
      var i = this._getInst(t)
      return (
        i && !i.inline && this._setDateFromField(i, e),
        i ? this._getDate(i) : null
      )
    },
    _doKeyDown: function (e) {
      var i,
        s,
        n,
        o = t.datepicker._getInst(e.target),
        a = !0,
        r = o.dpDiv.is('.ui-datepicker-rtl')
      if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
        switch (e.keyCode) {
          case 9:
            t.datepicker._hideDatepicker(), (a = !1)
            break
          case 13:
            return (
              (n = t(
                'td.' +
                  t.datepicker._dayOverClass +
                  ':not(.' +
                  t.datepicker._currentClass +
                  ')',
                o.dpDiv
              )),
              n[0] &&
                t.datepicker._selectDay(
                  e.target,
                  o.selectedMonth,
                  o.selectedYear,
                  n[0]
                ),
              (i = t.datepicker._get(o, 'onSelect')),
              i
                ? ((s = t.datepicker._formatDate(o)),
                  i.apply(o.input ? o.input[0] : null, [s, o]))
                : t.datepicker._hideDatepicker(),
              !1
            )
          case 27:
            t.datepicker._hideDatepicker()
            break
          case 33:
            t.datepicker._adjustDate(
              e.target,
              e.ctrlKey
                ? -t.datepicker._get(o, 'stepBigMonths')
                : -t.datepicker._get(o, 'stepMonths'),
              'M'
            )
            break
          case 34:
            t.datepicker._adjustDate(
              e.target,
              e.ctrlKey
                ? +t.datepicker._get(o, 'stepBigMonths')
                : +t.datepicker._get(o, 'stepMonths'),
              'M'
            )
            break
          case 35:
            ;(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
              (a = e.ctrlKey || e.metaKey)
            break
          case 36:
            ;(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
              (a = e.ctrlKey || e.metaKey)
            break
          case 37:
            ;(e.ctrlKey || e.metaKey) &&
              t.datepicker._adjustDate(e.target, r ? 1 : -1, 'D'),
              (a = e.ctrlKey || e.metaKey),
              e.originalEvent.altKey &&
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? -t.datepicker._get(o, 'stepBigMonths')
                    : -t.datepicker._get(o, 'stepMonths'),
                  'M'
                )
            break
          case 38:
            ;(e.ctrlKey || e.metaKey) &&
              t.datepicker._adjustDate(e.target, -7, 'D'),
              (a = e.ctrlKey || e.metaKey)
            break
          case 39:
            ;(e.ctrlKey || e.metaKey) &&
              t.datepicker._adjustDate(e.target, r ? -1 : 1, 'D'),
              (a = e.ctrlKey || e.metaKey),
              e.originalEvent.altKey &&
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? +t.datepicker._get(o, 'stepBigMonths')
                    : +t.datepicker._get(o, 'stepMonths'),
                  'M'
                )
            break
          case 40:
            ;(e.ctrlKey || e.metaKey) &&
              t.datepicker._adjustDate(e.target, 7, 'D'),
              (a = e.ctrlKey || e.metaKey)
            break
          default:
            a = !1
        }
      else
        36 === e.keyCode && e.ctrlKey
          ? t.datepicker._showDatepicker(this)
          : (a = !1)
      a && (e.preventDefault(), e.stopPropagation())
    },
    _doKeyPress: function (e) {
      var i,
        s,
        n = t.datepicker._getInst(e.target)
      return t.datepicker._get(n, 'constrainInput')
        ? ((i = t.datepicker._possibleChars(
            t.datepicker._get(n, 'dateFormat')
          )),
          (s = String.fromCharCode(
            null == e.charCode ? e.keyCode : e.charCode
          )),
          e.ctrlKey || e.metaKey || ' ' > s || !i || i.indexOf(s) > -1)
        : void 0
    },
    _doKeyUp: function (e) {
      var i,
        s = t.datepicker._getInst(e.target)
      if (s.input.val() !== s.lastVal)
        try {
          ;(i = t.datepicker.parseDate(
            t.datepicker._get(s, 'dateFormat'),
            s.input ? s.input.val() : null,
            t.datepicker._getFormatConfig(s)
          )),
            i &&
              (t.datepicker._setDateFromField(s),
              t.datepicker._updateAlternate(s),
              t.datepicker._updateDatepicker(s))
        } catch (n) {}
      return !0
    },
    _showDatepicker: function (e) {
      if (
        ((e = e.target || e),
        'input' !== e.nodeName.toLowerCase() &&
          (e = t('input', e.parentNode)[0]),
        !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e)
      ) {
        var s, n, o, r, h, l, u
        ;(s = t.datepicker._getInst(e)),
          t.datepicker._curInst &&
            t.datepicker._curInst !== s &&
            (t.datepicker._curInst.dpDiv.stop(!0, !0),
            s &&
              t.datepicker._datepickerShowing &&
              t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
          (n = t.datepicker._get(s, 'beforeShow')),
          (o = n ? n.apply(e, [e, s]) : {}),
          o !== !1 &&
            (a(s.settings, o),
            (s.lastVal = null),
            (t.datepicker._lastInput = e),
            t.datepicker._setDateFromField(s),
            t.datepicker._inDialog && (e.value = ''),
            t.datepicker._pos ||
              ((t.datepicker._pos = t.datepicker._findPos(e)),
              (t.datepicker._pos[1] += e.offsetHeight)),
            (r = !1),
            t(e)
              .parents()
              .each(function () {
                return (r |= 'fixed' === t(this).css('position')), !r
              }),
            (h = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
            (t.datepicker._pos = null),
            s.dpDiv.empty(),
            s.dpDiv.css({
              position: 'absolute',
              display: 'block',
              top: '-1000px'
            }),
            t.datepicker._updateDatepicker(s),
            (h = t.datepicker._checkOffset(s, h, r)),
            s.dpDiv.css({
              position:
                t.datepicker._inDialog && t.blockUI
                  ? 'static'
                  : r
                  ? 'fixed'
                  : 'absolute',
              display: 'none',
              left: h.left + 'px',
              top: h.top + 'px'
            }),
            s.inline ||
              ((l = t.datepicker._get(s, 'showAnim')),
              (u = t.datepicker._get(s, 'duration')),
              s.dpDiv.css('z-index', i(t(e)) + 1),
              (t.datepicker._datepickerShowing = !0),
              t.effects && t.effects.effect[l]
                ? s.dpDiv.show(l, t.datepicker._get(s, 'showOptions'), u)
                : s.dpDiv[l || 'show'](l ? u : null),
              t.datepicker._shouldFocusInput(s) && s.input.trigger('focus'),
              (t.datepicker._curInst = s)))
      }
    },
    _updateDatepicker: function (e) {
      ;(this.maxRows = 4),
        (p = e),
        e.dpDiv.empty().append(this._generateHTML(e)),
        this._attachHandlers(e)
      var i,
        s = this._getNumberOfMonths(e),
        n = s[1],
        a = 17,
        r = e.dpDiv.find('.' + this._dayOverClass + ' a')
      r.length > 0 && o.apply(r.get(0)),
        e.dpDiv
          .removeClass(
            'ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4'
          )
          .width(''),
        n > 1 &&
          e.dpDiv
            .addClass('ui-datepicker-multi-' + n)
            .css('width', a * n + 'em'),
        e.dpDiv[(1 !== s[0] || 1 !== s[1] ? 'add' : 'remove') + 'Class'](
          'ui-datepicker-multi'
        ),
        e.dpDiv[(this._get(e, 'isRTL') ? 'add' : 'remove') + 'Class'](
          'ui-datepicker-rtl'
        ),
        e === t.datepicker._curInst &&
          t.datepicker._datepickerShowing &&
          t.datepicker._shouldFocusInput(e) &&
          e.input.trigger('focus'),
        e.yearshtml &&
          ((i = e.yearshtml),
          setTimeout(function () {
            i === e.yearshtml &&
              e.yearshtml &&
              e.dpDiv
                .find('select.ui-datepicker-year:first')
                .replaceWith(e.yearshtml),
              (i = e.yearshtml = null)
          }, 0))
    },
    _shouldFocusInput: function (t) {
      return (
        t.input &&
        t.input.is(':visible') &&
        !t.input.is(':disabled') &&
        !t.input.is(':focus')
      )
    },
    _checkOffset: function (e, i, s) {
      var n = e.dpDiv.outerWidth(),
        o = e.dpDiv.outerHeight(),
        a = e.input ? e.input.outerWidth() : 0,
        r = e.input ? e.input.outerHeight() : 0,
        h =
          document.documentElement.clientWidth +
          (s ? 0 : t(document).scrollLeft()),
        l =
          document.documentElement.clientHeight +
          (s ? 0 : t(document).scrollTop())
      return (
        (i.left -= this._get(e, 'isRTL') ? n - a : 0),
        (i.left -=
          s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0),
        (i.top -=
          s && i.top === e.input.offset().top + r
            ? t(document).scrollTop()
            : 0),
        (i.left -= Math.min(
          i.left,
          i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0
        )),
        (i.top -= Math.min(
          i.top,
          i.top + o > l && l > o ? Math.abs(o + r) : 0
        )),
        i
      )
    },
    _findPos: function (e) {
      for (
        var i, s = this._getInst(e), n = this._get(s, 'isRTL');
        e &&
        ('hidden' === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));

      )
        e = e[n ? 'previousSibling' : 'nextSibling']
      return (i = t(e).offset()), [i.left, i.top]
    },
    _hideDatepicker: function (e) {
      var i,
        s,
        n,
        o,
        a = this._curInst
      !a ||
        (e && a !== t.data(e, 'datepicker')) ||
        (this._datepickerShowing &&
          ((i = this._get(a, 'showAnim')),
          (s = this._get(a, 'duration')),
          (n = function () {
            t.datepicker._tidyDialog(a)
          }),
          t.effects && (t.effects.effect[i] || t.effects[i])
            ? a.dpDiv.hide(i, t.datepicker._get(a, 'showOptions'), s, n)
            : a.dpDiv[
                'slideDown' === i
                  ? 'slideUp'
                  : 'fadeIn' === i
                  ? 'fadeOut'
                  : 'hide'
              ](i ? s : null, n),
          i || n(),
          (this._datepickerShowing = !1),
          (o = this._get(a, 'onClose')),
          o &&
            o.apply(a.input ? a.input[0] : null, [
              a.input ? a.input.val() : '',
              a
            ]),
          (this._lastInput = null),
          this._inDialog &&
            (this._dialogInput.css({
              position: 'absolute',
              left: '0',
              top: '-100px'
            }),
            t.blockUI && (t.unblockUI(), t('body').append(this.dpDiv))),
          (this._inDialog = !1)))
    },
    _tidyDialog: function (t) {
      t.dpDiv.removeClass(this._dialogClass).off('.ui-datepicker-calendar')
    },
    _checkExternalClick: function (e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
          s = t.datepicker._getInst(i[0])
        ;((i[0].id !== t.datepicker._mainDivId &&
          0 === i.parents('#' + t.datepicker._mainDivId).length &&
          !i.hasClass(t.datepicker.markerClassName) &&
          !i.closest('.' + t.datepicker._triggerClass).length &&
          t.datepicker._datepickerShowing &&
          (!t.datepicker._inDialog || !t.blockUI)) ||
          (i.hasClass(t.datepicker.markerClassName) &&
            t.datepicker._curInst !== s)) &&
          t.datepicker._hideDatepicker()
      }
    },
    _adjustDate: function (e, i, s) {
      var n = t(e),
        o = this._getInst(n[0])
      this._isDisabledDatepicker(n[0]) ||
        (this._adjustInstDate(
          o,
          i + ('M' === s ? this._get(o, 'showCurrentAtPos') : 0),
          s
        ),
        this._updateDatepicker(o))
    },
    _gotoToday: function (e) {
      var i,
        s = t(e),
        n = this._getInst(s[0])
      this._get(n, 'gotoCurrent') && n.currentDay
        ? ((n.selectedDay = n.currentDay),
          (n.drawMonth = n.selectedMonth = n.currentMonth),
          (n.drawYear = n.selectedYear = n.currentYear))
        : ((i = new Date()),
          (n.selectedDay = i.getDate()),
          (n.drawMonth = n.selectedMonth = i.getMonth()),
          (n.drawYear = n.selectedYear = i.getFullYear())),
        this._notifyChange(n),
        this._adjustDate(s)
    },
    _selectMonthYear: function (e, i, s) {
      var n = t(e),
        o = this._getInst(n[0])
      ;(o['selected' + ('M' === s ? 'Month' : 'Year')] = o[
        'draw' + ('M' === s ? 'Month' : 'Year')
      ] = parseInt(i.options[i.selectedIndex].value, 10)),
        this._notifyChange(o),
        this._adjustDate(n)
    },
    _selectDay: function (e, i, s, n) {
      var o,
        a = t(e)
      t(n).hasClass(this._unselectableClass) ||
        this._isDisabledDatepicker(a[0]) ||
        ((o = this._getInst(a[0])),
        (o.selectedDay = o.currentDay = t('a', n).html()),
        (o.selectedMonth = o.currentMonth = i),
        (o.selectedYear = o.currentYear = s),
        this._selectDate(
          e,
          this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)
        ))
    },
    _clearDate: function (e) {
      var i = t(e)
      this._selectDate(i, '')
    },
    _selectDate: function (e, i) {
      var s,
        n = t(e),
        o = this._getInst(n[0])
      ;(i = null != i ? i : this._formatDate(o)),
        o.input && o.input.val(i),
        this._updateAlternate(o),
        (s = this._get(o, 'onSelect')),
        s
          ? s.apply(o.input ? o.input[0] : null, [i, o])
          : o.input && o.input.trigger('change'),
        o.inline
          ? this._updateDatepicker(o)
          : (this._hideDatepicker(),
            (this._lastInput = o.input[0]),
            'object' != typeof o.input[0] && o.input.trigger('focus'),
            (this._lastInput = null))
    },
    _updateAlternate: function (e) {
      var i,
        s,
        n,
        o = this._get(e, 'altField')
      o &&
        ((i = this._get(e, 'altFormat') || this._get(e, 'dateFormat')),
        (s = this._getDate(e)),
        (n = this.formatDate(i, s, this._getFormatConfig(e))),
        t(o).val(n))
    },
    noWeekends: function (t) {
      var e = t.getDay()
      return [e > 0 && 6 > e, '']
    },
    iso8601Week: function (t) {
      var e,
        i = new Date(t.getTime())
      return (
        i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
        (e = i.getTime()),
        i.setMonth(0),
        i.setDate(1),
        Math.floor(Math.round((e - i) / 864e5) / 7) + 1
      )
    },
    parseDate: function (e, i, s) {
      if (null == e || null == i) throw 'Invalid arguments'
      if (((i = 'object' == typeof i ? '' + i : i + ''), '' === i)) return null
      var n,
        o,
        a,
        r,
        h = 0,
        l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        u =
          'string' != typeof l
            ? l
            : (new Date().getFullYear() % 100) + parseInt(l, 10),
        c = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
        d = (s ? s.dayNames : null) || this._defaults.dayNames,
        p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
        f = (s ? s.monthNames : null) || this._defaults.monthNames,
        m = -1,
        g = -1,
        _ = -1,
        v = -1,
        b = !1,
        y = function (t) {
          var i = e.length > n + 1 && e.charAt(n + 1) === t
          return i && n++, i
        },
        w = function (t) {
          var e = y(t),
            s =
              '@' === t
                ? 14
                : '!' === t
                ? 20
                : 'y' === t && e
                ? 4
                : 'o' === t
                ? 3
                : 2,
            n = 'y' === t ? s : 1,
            o = RegExp('^\\d{' + n + ',' + s + '}'),
            a = i.substring(h).match(o)
          if (!a) throw 'Missing number at position ' + h
          return (h += a[0].length), parseInt(a[0], 10)
        },
        k = function (e, s, n) {
          var o = -1,
            a = t
              .map(y(e) ? n : s, function (t, e) {
                return [[e, t]]
              })
              .sort(function (t, e) {
                return -(t[1].length - e[1].length)
              })
          if (
            (t.each(a, function (t, e) {
              var s = e[1]
              return i.substr(h, s.length).toLowerCase() === s.toLowerCase()
                ? ((o = e[0]), (h += s.length), !1)
                : void 0
            }),
            -1 !== o)
          )
            return o + 1
          throw 'Unknown name at position ' + h
        },
        x = function () {
          if (i.charAt(h) !== e.charAt(n))
            throw 'Unexpected literal at position ' + h
          h++
        }
      for (n = 0; e.length > n; n++)
        if (b) "'" !== e.charAt(n) || y("'") ? x() : (b = !1)
        else
          switch (e.charAt(n)) {
            case 'd':
              _ = w('d')
              break
            case 'D':
              k('D', c, d)
              break
            case 'o':
              v = w('o')
              break
            case 'm':
              g = w('m')
              break
            case 'M':
              g = k('M', p, f)
              break
            case 'y':
              m = w('y')
              break
            case '@':
              ;(r = new Date(w('@'))),
                (m = r.getFullYear()),
                (g = r.getMonth() + 1),
                (_ = r.getDate())
              break
            case '!':
              ;(r = new Date((w('!') - this._ticksTo1970) / 1e4)),
                (m = r.getFullYear()),
                (g = r.getMonth() + 1),
                (_ = r.getDate())
              break
            case "'":
              y("'") ? x() : (b = !0)
              break
            default:
              x()
          }
      if (i.length > h && ((a = i.substr(h)), !/^\s+/.test(a)))
        throw 'Extra/unparsed characters found in date: ' + a
      if (
        (-1 === m
          ? (m = new Date().getFullYear())
          : 100 > m &&
            (m +=
              new Date().getFullYear() -
              (new Date().getFullYear() % 100) +
              (u >= m ? 0 : -100)),
        v > -1)
      )
        for (g = 1, _ = v; ; ) {
          if (((o = this._getDaysInMonth(m, g - 1)), o >= _)) break
          g++, (_ -= o)
        }
      if (
        ((r = this._daylightSavingAdjust(new Date(m, g - 1, _))),
        r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== _)
      )
        throw 'Invalid date'
      return r
    },
    ATOM: 'yy-mm-dd',
    COOKIE: 'D, dd M yy',
    ISO_8601: 'yy-mm-dd',
    RFC_822: 'D, d M y',
    RFC_850: 'DD, dd-M-y',
    RFC_1036: 'D, d M y',
    RFC_1123: 'D, d M yy',
    RFC_2822: 'D, d M yy',
    RSS: 'D, d M y',
    TICKS: '!',
    TIMESTAMP: '@',
    W3C: 'yy-mm-dd',
    _ticksTo1970:
      1e7 *
      60 *
      60 *
      24 *
      (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function (t, e, i) {
      if (!e) return ''
      var s,
        n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        o = (i ? i.dayNames : null) || this._defaults.dayNames,
        a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        r = (i ? i.monthNames : null) || this._defaults.monthNames,
        h = function (e) {
          var i = t.length > s + 1 && t.charAt(s + 1) === e
          return i && s++, i
        },
        l = function (t, e, i) {
          var s = '' + e
          if (h(t)) for (; i > s.length; ) s = '0' + s
          return s
        },
        u = function (t, e, i, s) {
          return h(t) ? s[e] : i[e]
        },
        c = '',
        d = !1
      if (e)
        for (s = 0; t.length > s; s++)
          if (d) "'" !== t.charAt(s) || h("'") ? (c += t.charAt(s)) : (d = !1)
          else
            switch (t.charAt(s)) {
              case 'd':
                c += l('d', e.getDate(), 2)
                break
              case 'D':
                c += u('D', e.getDay(), n, o)
                break
              case 'o':
                c += l(
                  'o',
                  Math.round(
                    (new Date(
                      e.getFullYear(),
                      e.getMonth(),
                      e.getDate()
                    ).getTime() -
                      new Date(e.getFullYear(), 0, 0).getTime()) /
                      864e5
                  ),
                  3
                )
                break
              case 'm':
                c += l('m', e.getMonth() + 1, 2)
                break
              case 'M':
                c += u('M', e.getMonth(), a, r)
                break
              case 'y':
                c += h('y')
                  ? e.getFullYear()
                  : (10 > e.getFullYear() % 100 ? '0' : '') +
                    (e.getFullYear() % 100)
                break
              case '@':
                c += e.getTime()
                break
              case '!':
                c += 1e4 * e.getTime() + this._ticksTo1970
                break
              case "'":
                h("'") ? (c += "'") : (d = !0)
                break
              default:
                c += t.charAt(s)
            }
      return c
    },
    _possibleChars: function (t) {
      var e,
        i = '',
        s = !1,
        n = function (i) {
          var s = t.length > e + 1 && t.charAt(e + 1) === i
          return s && e++, s
        }
      for (e = 0; t.length > e; e++)
        if (s) "'" !== t.charAt(e) || n("'") ? (i += t.charAt(e)) : (s = !1)
        else
          switch (t.charAt(e)) {
            case 'd':
            case 'm':
            case 'y':
            case '@':
              i += '0123456789'
              break
            case 'D':
            case 'M':
              return null
            case "'":
              n("'") ? (i += "'") : (s = !0)
              break
            default:
              i += t.charAt(e)
          }
      return i
    },
    _get: function (t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
    },
    _setDateFromField: function (t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, 'dateFormat'),
          s = (t.lastVal = t.input ? t.input.val() : null),
          n = this._getDefaultDate(t),
          o = n,
          a = this._getFormatConfig(t)
        try {
          o = this.parseDate(i, s, a) || n
        } catch (r) {
          s = e ? '' : s
        }
        ;(t.selectedDay = o.getDate()),
          (t.drawMonth = t.selectedMonth = o.getMonth()),
          (t.drawYear = t.selectedYear = o.getFullYear()),
          (t.currentDay = s ? o.getDate() : 0),
          (t.currentMonth = s ? o.getMonth() : 0),
          (t.currentYear = s ? o.getFullYear() : 0),
          this._adjustInstDate(t)
      }
    },
    _getDefaultDate: function (t) {
      return this._restrictMinMax(
        t,
        this._determineDate(t, this._get(t, 'defaultDate'), new Date())
      )
    },
    _determineDate: function (e, i, s) {
      var n = function (t) {
          var e = new Date()
          return e.setDate(e.getDate() + t), e
        },
        o = function (i) {
          try {
            return t.datepicker.parseDate(
              t.datepicker._get(e, 'dateFormat'),
              i,
              t.datepicker._getFormatConfig(e)
            )
          } catch (s) {}
          for (
            var n =
                (i.toLowerCase().match(/^c/)
                  ? t.datepicker._getDate(e)
                  : null) || new Date(),
              o = n.getFullYear(),
              a = n.getMonth(),
              r = n.getDate(),
              h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
              l = h.exec(i);
            l;

          ) {
            switch (l[2] || 'd') {
              case 'd':
              case 'D':
                r += parseInt(l[1], 10)
                break
              case 'w':
              case 'W':
                r += 7 * parseInt(l[1], 10)
                break
              case 'm':
              case 'M':
                ;(a += parseInt(l[1], 10)),
                  (r = Math.min(r, t.datepicker._getDaysInMonth(o, a)))
                break
              case 'y':
              case 'Y':
                ;(o += parseInt(l[1], 10)),
                  (r = Math.min(r, t.datepicker._getDaysInMonth(o, a)))
            }
            l = h.exec(i)
          }
          return new Date(o, a, r)
        },
        a =
          null == i || '' === i
            ? s
            : 'string' == typeof i
            ? o(i)
            : 'number' == typeof i
            ? isNaN(i)
              ? s
              : n(i)
            : new Date(i.getTime())
      return (
        (a = a && 'Invalid Date' == '' + a ? s : a),
        a &&
          (a.setHours(0),
          a.setMinutes(0),
          a.setSeconds(0),
          a.setMilliseconds(0)),
        this._daylightSavingAdjust(a)
      )
    },
    _daylightSavingAdjust: function (t) {
      return t
        ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
        : null
    },
    _setDate: function (t, e, i) {
      var s = !e,
        n = t.selectedMonth,
        o = t.selectedYear,
        a = this._restrictMinMax(t, this._determineDate(t, e, new Date()))
      ;(t.selectedDay = t.currentDay = a.getDate()),
        (t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth()),
        (t.drawYear = t.selectedYear = t.currentYear = a.getFullYear()),
        (n === t.selectedMonth && o === t.selectedYear) ||
          i ||
          this._notifyChange(t),
        this._adjustInstDate(t),
        t.input && t.input.val(s ? '' : this._formatDate(t))
    },
    _getDate: function (t) {
      var e =
        !t.currentYear || (t.input && '' === t.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(t.currentYear, t.currentMonth, t.currentDay)
            )
      return e
    },
    _attachHandlers: function (e) {
      var i = this._get(e, 'stepMonths'),
        s = '#' + e.id.replace(/\\\\/g, '\\')
      e.dpDiv.find('[data-handler]').map(function () {
        var e = {
          prev: function () {
            t.datepicker._adjustDate(s, -i, 'M')
          },
          next: function () {
            t.datepicker._adjustDate(s, +i, 'M')
          },
          hide: function () {
            t.datepicker._hideDatepicker()
          },
          today: function () {
            t.datepicker._gotoToday(s)
          },
          selectDay: function () {
            return (
              t.datepicker._selectDay(
                s,
                +this.getAttribute('data-month'),
                +this.getAttribute('data-year'),
                this
              ),
              !1
            )
          },
          selectMonth: function () {
            return t.datepicker._selectMonthYear(s, this, 'M'), !1
          },
          selectYear: function () {
            return t.datepicker._selectMonthYear(s, this, 'Y'), !1
          }
        }
        t(this).on(
          this.getAttribute('data-event'),
          e[this.getAttribute('data-handler')]
        )
      })
    },
    _generateHTML: function (t) {
      var e,
        i,
        s,
        n,
        o,
        a,
        r,
        h,
        l,
        u,
        c,
        d,
        p,
        f,
        m,
        g,
        _,
        v,
        b,
        y,
        w,
        k,
        x,
        C,
        D,
        I,
        T,
        P,
        M,
        S,
        H,
        z,
        O,
        A,
        E,
        N,
        W,
        F,
        L,
        R = new Date(),
        Y = this._daylightSavingAdjust(
          new Date(R.getFullYear(), R.getMonth(), R.getDate())
        ),
        B = this._get(t, 'isRTL'),
        j = this._get(t, 'showButtonPanel'),
        q = this._get(t, 'hideIfNoPrevNext'),
        K = this._get(t, 'navigationAsDateFormat'),
        U = this._getNumberOfMonths(t),
        V = this._get(t, 'showCurrentAtPos'),
        $ = this._get(t, 'stepMonths'),
        X = 1 !== U[0] || 1 !== U[1],
        G = this._daylightSavingAdjust(
          t.currentDay
            ? new Date(t.currentYear, t.currentMonth, t.currentDay)
            : new Date(9999, 9, 9)
        ),
        Q = this._getMinMaxDate(t, 'min'),
        J = this._getMinMaxDate(t, 'max'),
        Z = t.drawMonth - V,
        te = t.drawYear
      if ((0 > Z && ((Z += 12), te--), J))
        for (
          e = this._daylightSavingAdjust(
            new Date(
              J.getFullYear(),
              J.getMonth() - U[0] * U[1] + 1,
              J.getDate()
            )
          ),
            e = Q && Q > e ? Q : e;
          this._daylightSavingAdjust(new Date(te, Z, 1)) > e;

        )
          Z--, 0 > Z && ((Z = 11), te--)
      for (
        t.drawMonth = Z,
          t.drawYear = te,
          i = this._get(t, 'prevText'),
          i = K
            ? this.formatDate(
                i,
                this._daylightSavingAdjust(new Date(te, Z - $, 1)),
                this._getFormatConfig(t)
              )
            : i,
          s = this._canAdjustMonth(t, -1, te, Z)
            ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
              i +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (B ? 'e' : 'w') +
              "'>" +
              i +
              '</span></a>'
            : q
            ? ''
            : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
              i +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (B ? 'e' : 'w') +
              "'>" +
              i +
              '</span></a>',
          n = this._get(t, 'nextText'),
          n = K
            ? this.formatDate(
                n,
                this._daylightSavingAdjust(new Date(te, Z + $, 1)),
                this._getFormatConfig(t)
              )
            : n,
          o = this._canAdjustMonth(t, 1, te, Z)
            ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
              n +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (B ? 'w' : 'e') +
              "'>" +
              n +
              '</span></a>'
            : q
            ? ''
            : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
              n +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (B ? 'w' : 'e') +
              "'>" +
              n +
              '</span></a>',
          a = this._get(t, 'currentText'),
          r = this._get(t, 'gotoCurrent') && t.currentDay ? G : Y,
          a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
          h = t.inline
            ? ''
            : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
              this._get(t, 'closeText') +
              '</button>',
          l = j
            ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
              (B ? h : '') +
              (this._isInRange(t, r)
                ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                  a +
                  '</button>'
                : '') +
              (B ? '' : h) +
              '</div>'
            : '',
          u = parseInt(this._get(t, 'firstDay'), 10),
          u = isNaN(u) ? 0 : u,
          c = this._get(t, 'showWeek'),
          d = this._get(t, 'dayNames'),
          p = this._get(t, 'dayNamesMin'),
          f = this._get(t, 'monthNames'),
          m = this._get(t, 'monthNamesShort'),
          g = this._get(t, 'beforeShowDay'),
          _ = this._get(t, 'showOtherMonths'),
          v = this._get(t, 'selectOtherMonths'),
          b = this._getDefaultDate(t),
          y = '',
          k = 0;
        U[0] > k;
        k++
      ) {
        for (x = '', this.maxRows = 4, C = 0; U[1] > C; C++) {
          if (
            ((D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay))),
            (I = ' ui-corner-all'),
            (T = ''),
            X)
          ) {
            if (((T += "<div class='ui-datepicker-group"), U[1] > 1))
              switch (C) {
                case 0:
                  ;(T += ' ui-datepicker-group-first'),
                    (I = ' ui-corner-' + (B ? 'right' : 'left'))
                  break
                case U[1] - 1:
                  ;(T += ' ui-datepicker-group-last'),
                    (I = ' ui-corner-' + (B ? 'left' : 'right'))
                  break
                default:
                  ;(T += ' ui-datepicker-group-middle'), (I = '')
              }
            T += "'>"
          }
          for (
            T +=
              "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
              I +
              "'>" +
              (/all|left/.test(I) && 0 === k ? (B ? o : s) : '') +
              (/all|right/.test(I) && 0 === k ? (B ? s : o) : '') +
              this._generateMonthYearHeader(
                t,
                Z,
                te,
                Q,
                J,
                k > 0 || C > 0,
                f,
                m
              ) +
              "</div><table class='ui-datepicker-calendar'><thead>" +
              '<tr>',
              P = c
                ? "<th class='ui-datepicker-week-col'>" +
                  this._get(t, 'weekHeader') +
                  '</th>'
                : '',
              w = 0;
            7 > w;
            w++
          )
            (M = (w + u) % 7),
              (P +=
                "<th scope='col'" +
                ((w + u + 6) % 7 >= 5
                  ? " class='ui-datepicker-week-end'"
                  : '') +
                '>' +
                "<span title='" +
                d[M] +
                "'>" +
                p[M] +
                '</span></th>')
          for (
            T += P + '</tr></thead><tbody>',
              S = this._getDaysInMonth(te, Z),
              te === t.selectedYear &&
                Z === t.selectedMonth &&
                (t.selectedDay = Math.min(t.selectedDay, S)),
              H = (this._getFirstDayOfMonth(te, Z) - u + 7) % 7,
              z = Math.ceil((H + S) / 7),
              O = X ? (this.maxRows > z ? this.maxRows : z) : z,
              this.maxRows = O,
              A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)),
              E = 0;
            O > E;
            E++
          ) {
            for (
              T += '<tr>',
                N = c
                  ? "<td class='ui-datepicker-week-col'>" +
                    this._get(t, 'calculateWeek')(A) +
                    '</td>'
                  : '',
                w = 0;
              7 > w;
              w++
            )
              (W = g ? g.apply(t.input ? t.input[0] : null, [A]) : [!0, '']),
                (F = A.getMonth() !== Z),
                (L = (F && !v) || !W[0] || (Q && Q > A) || (J && A > J)),
                (N +=
                  "<td class='" +
                  ((w + u + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') +
                  (F ? ' ui-datepicker-other-month' : '') +
                  ((A.getTime() === D.getTime() &&
                    Z === t.selectedMonth &&
                    t._keyEvent) ||
                  (b.getTime() === A.getTime() && b.getTime() === D.getTime())
                    ? ' ' + this._dayOverClass
                    : '') +
                  (L
                    ? ' ' + this._unselectableClass + ' ui-state-disabled'
                    : '') +
                  (F && !_
                    ? ''
                    : ' ' +
                      W[1] +
                      (A.getTime() === G.getTime()
                        ? ' ' + this._currentClass
                        : '') +
                      (A.getTime() === Y.getTime()
                        ? ' ui-datepicker-today'
                        : '')) +
                  "'" +
                  ((F && !_) || !W[2]
                    ? ''
                    : " title='" + W[2].replace(/'/g, '&#39;') + "'") +
                  (L
                    ? ''
                    : " data-handler='selectDay' data-event='click' data-month='" +
                      A.getMonth() +
                      "' data-year='" +
                      A.getFullYear() +
                      "'") +
                  '>' +
                  (F && !_
                    ? '&#xa0;'
                    : L
                    ? "<span class='ui-state-default'>" +
                      A.getDate() +
                      '</span>'
                    : "<a class='ui-state-default" +
                      (A.getTime() === Y.getTime()
                        ? ' ui-state-highlight'
                        : '') +
                      (A.getTime() === G.getTime() ? ' ui-state-active' : '') +
                      (F ? ' ui-priority-secondary' : '') +
                      "' href='#'>" +
                      A.getDate() +
                      '</a>') +
                  '</td>'),
                A.setDate(A.getDate() + 1),
                (A = this._daylightSavingAdjust(A))
            T += N + '</tr>'
          }
          Z++,
            Z > 11 && ((Z = 0), te++),
            (T +=
              '</tbody></table>' +
              (X
                ? '</div>' +
                  (U[0] > 0 && C === U[1] - 1
                    ? "<div class='ui-datepicker-row-break'></div>"
                    : '')
                : '')),
            (x += T)
        }
        y += x
      }
      return (y += l), (t._keyEvent = !1), y
    },
    _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
      var h,
        l,
        u,
        c,
        d,
        p,
        f,
        m,
        g = this._get(t, 'changeMonth'),
        _ = this._get(t, 'changeYear'),
        v = this._get(t, 'showMonthAfterYear'),
        b = "<div class='ui-datepicker-title'>",
        y = ''
      if (o || !g) y += "<span class='ui-datepicker-month'>" + a[e] + '</span>'
      else {
        for (
          h = s && s.getFullYear() === i,
            l = n && n.getFullYear() === i,
            y +=
              "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
            u = 0;
          12 > u;
          u++
        )
          (!h || u >= s.getMonth()) &&
            (!l || n.getMonth() >= u) &&
            (y +=
              "<option value='" +
              u +
              "'" +
              (u === e ? " selected='selected'" : '') +
              '>' +
              r[u] +
              '</option>')
        y += '</select>'
      }
      if ((v || (b += y + (!o && g && _ ? '' : '&#xa0;')), !t.yearshtml))
        if (((t.yearshtml = ''), o || !_))
          b += "<span class='ui-datepicker-year'>" + i + '</span>'
        else {
          for (
            c = this._get(t, 'yearRange').split(':'),
              d = new Date().getFullYear(),
              p = function (t) {
                var e = t.match(/c[+\-].*/)
                  ? i + parseInt(t.substring(1), 10)
                  : t.match(/[+\-].*/)
                  ? d + parseInt(t, 10)
                  : parseInt(t, 10)
                return isNaN(e) ? d : e
              },
              f = p(c[0]),
              m = Math.max(f, p(c[1] || '')),
              f = s ? Math.max(f, s.getFullYear()) : f,
              m = n ? Math.min(m, n.getFullYear()) : m,
              t.yearshtml +=
                "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
            m >= f;
            f++
          )
            t.yearshtml +=
              "<option value='" +
              f +
              "'" +
              (f === i ? " selected='selected'" : '') +
              '>' +
              f +
              '</option>'
          ;(t.yearshtml += '</select>'),
            (b += t.yearshtml),
            (t.yearshtml = null)
        }
      return (
        (b += this._get(t, 'yearSuffix')),
        v && (b += (!o && g && _ ? '' : '&#xa0;') + y),
        (b += '</div>')
      )
    },
    _adjustInstDate: function (t, e, i) {
      var s = t.selectedYear + ('Y' === i ? e : 0),
        n = t.selectedMonth + ('M' === i ? e : 0),
        o =
          Math.min(t.selectedDay, this._getDaysInMonth(s, n)) +
          ('D' === i ? e : 0),
        a = this._restrictMinMax(
          t,
          this._daylightSavingAdjust(new Date(s, n, o))
        )
      ;(t.selectedDay = a.getDate()),
        (t.drawMonth = t.selectedMonth = a.getMonth()),
        (t.drawYear = t.selectedYear = a.getFullYear()),
        ('M' === i || 'Y' === i) && this._notifyChange(t)
    },
    _restrictMinMax: function (t, e) {
      var i = this._getMinMaxDate(t, 'min'),
        s = this._getMinMaxDate(t, 'max'),
        n = i && i > e ? i : e
      return s && n > s ? s : n
    },
    _notifyChange: function (t) {
      var e = this._get(t, 'onChangeMonthYear')
      e &&
        e.apply(t.input ? t.input[0] : null, [
          t.selectedYear,
          t.selectedMonth + 1,
          t
        ])
    },
    _getNumberOfMonths: function (t) {
      var e = this._get(t, 'numberOfMonths')
      return null == e ? [1, 1] : 'number' == typeof e ? [1, e] : e
    },
    _getMinMaxDate: function (t, e) {
      return this._determineDate(t, this._get(t, e + 'Date'), null)
    },
    _getDaysInMonth: function (t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
    },
    _getFirstDayOfMonth: function (t, e) {
      return new Date(t, e, 1).getDay()
    },
    _canAdjustMonth: function (t, e, i, s) {
      var n = this._getNumberOfMonths(t),
        o = this._daylightSavingAdjust(
          new Date(i, s + (0 > e ? e : n[0] * n[1]), 1)
        )
      return (
        0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
        this._isInRange(t, o)
      )
    },
    _isInRange: function (t, e) {
      var i,
        s,
        n = this._getMinMaxDate(t, 'min'),
        o = this._getMinMaxDate(t, 'max'),
        a = null,
        r = null,
        h = this._get(t, 'yearRange')
      return (
        h &&
          ((i = h.split(':')),
          (s = new Date().getFullYear()),
          (a = parseInt(i[0], 10)),
          (r = parseInt(i[1], 10)),
          i[0].match(/[+\-].*/) && (a += s),
          i[1].match(/[+\-].*/) && (r += s)),
        (!n || e.getTime() >= n.getTime()) &&
          (!o || e.getTime() <= o.getTime()) &&
          (!a || e.getFullYear() >= a) &&
          (!r || r >= e.getFullYear())
      )
    },
    _getFormatConfig: function (t) {
      var e = this._get(t, 'shortYearCutoff')
      return (
        (e =
          'string' != typeof e
            ? e
            : (new Date().getFullYear() % 100) + parseInt(e, 10)),
        {
          shortYearCutoff: e,
          dayNamesShort: this._get(t, 'dayNamesShort'),
          dayNames: this._get(t, 'dayNames'),
          monthNamesShort: this._get(t, 'monthNamesShort'),
          monthNames: this._get(t, 'monthNames')
        }
      )
    },
    _formatDate: function (t, e, i, s) {
      e ||
        ((t.currentDay = t.selectedDay),
        (t.currentMonth = t.selectedMonth),
        (t.currentYear = t.selectedYear))
      var n = e
        ? 'object' == typeof e
          ? e
          : this._daylightSavingAdjust(new Date(s, i, e))
        : this._daylightSavingAdjust(
            new Date(t.currentYear, t.currentMonth, t.currentDay)
          )
      return this.formatDate(
        this._get(t, 'dateFormat'),
        n,
        this._getFormatConfig(t)
      )
    }
  }),
    (t.fn.datepicker = function (e) {
      if (!this.length) return this
      t.datepicker.initialized ||
        (t(document).on('mousedown', t.datepicker._checkExternalClick),
        (t.datepicker.initialized = !0)),
        0 === t('#' + t.datepicker._mainDivId).length &&
          t('body').append(t.datepicker.dpDiv)
      var i = Array.prototype.slice.call(arguments, 1)
      return 'string' != typeof e ||
        ('isDisabled' !== e && 'getDate' !== e && 'widget' !== e)
        ? 'option' === e &&
          2 === arguments.length &&
          'string' == typeof arguments[1]
          ? t.datepicker['_' + e + 'Datepicker'].apply(
              t.datepicker,
              [this[0]].concat(i)
            )
          : this.each(function () {
              'string' == typeof e
                ? t.datepicker['_' + e + 'Datepicker'].apply(
                    t.datepicker,
                    [this].concat(i)
                  )
                : t.datepicker._attachDatepicker(this, e)
            })
        : t.datepicker['_' + e + 'Datepicker'].apply(
            t.datepicker,
            [this[0]].concat(i)
          )
    }),
    (t.datepicker = new s()),
    (t.datepicker.initialized = !1),
    (t.datepicker.uuid = new Date().getTime()),
    (t.datepicker.version = '1.12.1'),
    t.datepicker,
    t.widget('ui.dialog', {
      version: '1.12.1',
      options: {
        appendTo: 'body',
        autoOpen: !0,
        buttons: [],
        classes: {
          'ui-dialog': 'ui-corner-all',
          'ui-dialog-titlebar': 'ui-corner-all'
        },
        closeOnEscape: !0,
        closeText: 'Close',
        draggable: !0,
        hide: null,
        height: 'auto',
        maxHeight: null,
        maxWidth: null,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: 'center',
          at: 'center',
          of: window,
          collision: 'fit',
          using: function (e) {
            var i = t(this)
              .css(e)
              .offset().top
            0 > i && t(this).css('top', e.top - i)
          }
        },
        resizable: !0,
        show: null,
        title: null,
        width: 300,
        beforeClose: null,
        close: null,
        drag: null,
        dragStart: null,
        dragStop: null,
        focus: null,
        open: null,
        resize: null,
        resizeStart: null,
        resizeStop: null
      },
      sizeRelatedOptions: {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
      },
      resizableRelatedOptions: {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
      },
      _create: function () {
        ;(this.originalCss = {
          display: this.element[0].style.display,
          width: this.element[0].style.width,
          minHeight: this.element[0].style.minHeight,
          maxHeight: this.element[0].style.maxHeight,
          height: this.element[0].style.height
        }),
          (this.originalPosition = {
            parent: this.element.parent(),
            index: this.element
              .parent()
              .children()
              .index(this.element)
          }),
          (this.originalTitle = this.element.attr('title')),
          null == this.options.title &&
            null != this.originalTitle &&
            (this.options.title = this.originalTitle),
          this.options.disabled && (this.options.disabled = !1),
          this._createWrapper(),
          this.element
            .show()
            .removeAttr('title')
            .appendTo(this.uiDialog),
          this._addClass('ui-dialog-content', 'ui-widget-content'),
          this._createTitlebar(),
          this._createButtonPane(),
          this.options.draggable && t.fn.draggable && this._makeDraggable(),
          this.options.resizable && t.fn.resizable && this._makeResizable(),
          (this._isOpen = !1),
          this._trackFocus()
      },
      _init: function () {
        this.options.autoOpen && this.open()
      },
      _appendTo: function () {
        var e = this.options.appendTo
        return e && (e.jquery || e.nodeType)
          ? t(e)
          : this.document.find(e || 'body').eq(0)
      },
      _destroy: function () {
        var t,
          e = this.originalPosition
        this._untrackInstance(),
          this._destroyOverlay(),
          this.element
            .removeUniqueId()
            .css(this.originalCss)
            .detach(),
          this.uiDialog.remove(),
          this.originalTitle && this.element.attr('title', this.originalTitle),
          (t = e.parent.children().eq(e.index)),
          t.length && t[0] !== this.element[0]
            ? t.before(this.element)
            : e.parent.append(this.element)
      },
      widget: function () {
        return this.uiDialog
      },
      disable: t.noop,
      enable: t.noop,
      close: function (e) {
        var i = this
        this._isOpen &&
          this._trigger('beforeClose', e) !== !1 &&
          ((this._isOpen = !1),
          (this._focusedElement = null),
          this._destroyOverlay(),
          this._untrackInstance(),
          this.opener.filter(':focusable').trigger('focus').length ||
            t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),
          this._hide(this.uiDialog, this.options.hide, function () {
            i._trigger('close', e)
          }))
      },
      isOpen: function () {
        return this._isOpen
      },
      moveToTop: function () {
        this._moveToTop()
      },
      _moveToTop: function (e, i) {
        var s = !1,
          n = this.uiDialog
            .siblings('.ui-front:visible')
            .map(function () {
              return +t(this).css('z-index')
            })
            .get(),
          o = Math.max.apply(null, n)
        return (
          o >= +this.uiDialog.css('z-index') &&
            (this.uiDialog.css('z-index', o + 1), (s = !0)),
          s && !i && this._trigger('focus', e),
          s
        )
      },
      open: function () {
        var e = this
        return this._isOpen
          ? (this._moveToTop() && this._focusTabbable(), void 0)
          : ((this._isOpen = !0),
            (this.opener = t(t.ui.safeActiveElement(this.document[0]))),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay &&
              this.overlay.css('z-index', this.uiDialog.css('z-index') - 1),
            this._show(this.uiDialog, this.options.show, function () {
              e._focusTabbable(), e._trigger('focus')
            }),
            this._makeFocusTarget(),
            this._trigger('open'),
            void 0)
      },
      _focusTabbable: function () {
        var t = this._focusedElement
        t || (t = this.element.find('[autofocus]')),
          t.length || (t = this.element.find(':tabbable')),
          t.length || (t = this.uiDialogButtonPane.find(':tabbable')),
          t.length || (t = this.uiDialogTitlebarClose.filter(':tabbable')),
          t.length || (t = this.uiDialog),
          t.eq(0).trigger('focus')
      },
      _keepFocus: function (e) {
        function i () {
          var e = t.ui.safeActiveElement(this.document[0]),
            i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e)
          i || this._focusTabbable()
        }
        e.preventDefault(), i.call(this), this._delay(i)
      },
      _createWrapper: function () {
        ;(this.uiDialog = t('<div>')
          .hide()
          .attr({ tabIndex: -1, role: 'dialog' })
          .appendTo(this._appendTo())),
          this._addClass(
            this.uiDialog,
            'ui-dialog',
            'ui-widget ui-widget-content ui-front'
          ),
          this._on(this.uiDialog, {
            keydown: function (e) {
              if (
                this.options.closeOnEscape &&
                !e.isDefaultPrevented() &&
                e.keyCode &&
                e.keyCode === t.ui.keyCode.ESCAPE
              )
                return e.preventDefault(), this.close(e), void 0
              if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                var i = this.uiDialog.find(':tabbable'),
                  s = i.filter(':first'),
                  n = i.filter(':last')
                ;(e.target !== n[0] && e.target !== this.uiDialog[0]) ||
                e.shiftKey
                  ? (e.target !== s[0] && e.target !== this.uiDialog[0]) ||
                    !e.shiftKey ||
                    (this._delay(function () {
                      n.trigger('focus')
                    }),
                    e.preventDefault())
                  : (this._delay(function () {
                      s.trigger('focus')
                    }),
                    e.preventDefault())
              }
            },
            mousedown: function (t) {
              this._moveToTop(t) && this._focusTabbable()
            }
          }),
          this.element.find('[aria-describedby]').length ||
            this.uiDialog.attr({
              'aria-describedby': this.element.uniqueId().attr('id')
            })
      },
      _createTitlebar: function () {
        var e
        ;(this.uiDialogTitlebar = t('<div>')),
          this._addClass(
            this.uiDialogTitlebar,
            'ui-dialog-titlebar',
            'ui-widget-header ui-helper-clearfix'
          ),
          this._on(this.uiDialogTitlebar, {
            mousedown: function (e) {
              t(e.target).closest('.ui-dialog-titlebar-close') ||
                this.uiDialog.trigger('focus')
            }
          }),
          (this.uiDialogTitlebarClose = t("<button type='button'></button>")
            .button({
              label: t('<a>')
                .text(this.options.closeText)
                .html(),
              icon: 'ui-icon-closethick',
              showLabel: !1
            })
            .appendTo(this.uiDialogTitlebar)),
          this._addClass(
            this.uiDialogTitlebarClose,
            'ui-dialog-titlebar-close'
          ),
          this._on(this.uiDialogTitlebarClose, {
            click: function (t) {
              t.preventDefault(), this.close(t)
            }
          }),
          (e = t('<span>')
            .uniqueId()
            .prependTo(this.uiDialogTitlebar)),
          this._addClass(e, 'ui-dialog-title'),
          this._title(e),
          this.uiDialogTitlebar.prependTo(this.uiDialog),
          this.uiDialog.attr({ 'aria-labelledby': e.attr('id') })
      },
      _title: function (t) {
        this.options.title ? t.text(this.options.title) : t.html('&#160;')
      },
      _createButtonPane: function () {
        ;(this.uiDialogButtonPane = t('<div>')),
          this._addClass(
            this.uiDialogButtonPane,
            'ui-dialog-buttonpane',
            'ui-widget-content ui-helper-clearfix'
          ),
          (this.uiButtonSet = t('<div>').appendTo(this.uiDialogButtonPane)),
          this._addClass(this.uiButtonSet, 'ui-dialog-buttonset'),
          this._createButtons()
      },
      _createButtons: function () {
        var e = this,
          i = this.options.buttons
        return (
          this.uiDialogButtonPane.remove(),
          this.uiButtonSet.empty(),
          t.isEmptyObject(i) || (t.isArray(i) && !i.length)
            ? (this._removeClass(this.uiDialog, 'ui-dialog-buttons'), void 0)
            : (t.each(i, function (i, s) {
                var n, o
                ;(s = t.isFunction(s) ? { click: s, text: i } : s),
                  (s = t.extend({ type: 'button' }, s)),
                  (n = s.click),
                  (o = {
                    icon: s.icon,
                    iconPosition: s.iconPosition,
                    showLabel: s.showLabel,
                    icons: s.icons,
                    text: s.text
                  }),
                  delete s.click,
                  delete s.icon,
                  delete s.iconPosition,
                  delete s.showLabel,
                  delete s.icons,
                  'boolean' == typeof s.text && delete s.text,
                  t('<button></button>', s)
                    .button(o)
                    .appendTo(e.uiButtonSet)
                    .on('click', function () {
                      n.apply(e.element[0], arguments)
                    })
              }),
              this._addClass(this.uiDialog, 'ui-dialog-buttons'),
              this.uiDialogButtonPane.appendTo(this.uiDialog),
              void 0)
        )
      },
      _makeDraggable: function () {
        function e (t) {
          return { position: t.position, offset: t.offset }
        }
        var i = this,
          s = this.options
        this.uiDialog.draggable({
          cancel: '.ui-dialog-content, .ui-dialog-titlebar-close',
          handle: '.ui-dialog-titlebar',
          containment: 'document',
          start: function (s, n) {
            i._addClass(t(this), 'ui-dialog-dragging'),
              i._blockFrames(),
              i._trigger('dragStart', s, e(n))
          },
          drag: function (t, s) {
            i._trigger('drag', t, e(s))
          },
          stop: function (n, o) {
            var a = o.offset.left - i.document.scrollLeft(),
              r = o.offset.top - i.document.scrollTop()
            ;(s.position = {
              my: 'left top',
              at:
                'left' +
                (a >= 0 ? '+' : '') +
                a +
                ' ' +
                'top' +
                (r >= 0 ? '+' : '') +
                r,
              of: i.window
            }),
              i._removeClass(t(this), 'ui-dialog-dragging'),
              i._unblockFrames(),
              i._trigger('dragStop', n, e(o))
          }
        })
      },
      _makeResizable: function () {
        function e (t) {
          return {
            originalPosition: t.originalPosition,
            originalSize: t.originalSize,
            position: t.position,
            size: t.size
          }
        }
        var i = this,
          s = this.options,
          n = s.resizable,
          o = this.uiDialog.css('position'),
          a = 'string' == typeof n ? n : 'n,e,s,w,se,sw,ne,nw'
        this.uiDialog
          .resizable({
            cancel: '.ui-dialog-content',
            containment: 'document',
            alsoResize: this.element,
            maxWidth: s.maxWidth,
            maxHeight: s.maxHeight,
            minWidth: s.minWidth,
            minHeight: this._minHeight(),
            handles: a,
            start: function (s, n) {
              i._addClass(t(this), 'ui-dialog-resizing'),
                i._blockFrames(),
                i._trigger('resizeStart', s, e(n))
            },
            resize: function (t, s) {
              i._trigger('resize', t, e(s))
            },
            stop: function (n, o) {
              var a = i.uiDialog.offset(),
                r = a.left - i.document.scrollLeft(),
                h = a.top - i.document.scrollTop()
              ;(s.height = i.uiDialog.height()),
                (s.width = i.uiDialog.width()),
                (s.position = {
                  my: 'left top',
                  at:
                    'left' +
                    (r >= 0 ? '+' : '') +
                    r +
                    ' ' +
                    'top' +
                    (h >= 0 ? '+' : '') +
                    h,
                  of: i.window
                }),
                i._removeClass(t(this), 'ui-dialog-resizing'),
                i._unblockFrames(),
                i._trigger('resizeStop', n, e(o))
            }
          })
          .css('position', o)
      },
      _trackFocus: function () {
        this._on(this.widget(), {
          focusin: function (e) {
            this._makeFocusTarget(), (this._focusedElement = t(e.target))
          }
        })
      },
      _makeFocusTarget: function () {
        this._untrackInstance(), this._trackingInstances().unshift(this)
      },
      _untrackInstance: function () {
        var e = this._trackingInstances(),
          i = t.inArray(this, e)
        ;-1 !== i && e.splice(i, 1)
      },
      _trackingInstances: function () {
        var t = this.document.data('ui-dialog-instances')
        return t || ((t = []), this.document.data('ui-dialog-instances', t)), t
      },
      _minHeight: function () {
        var t = this.options
        return 'auto' === t.height
          ? t.minHeight
          : Math.min(t.minHeight, t.height)
      },
      _position: function () {
        var t = this.uiDialog.is(':visible')
        t || this.uiDialog.show(),
          this.uiDialog.position(this.options.position),
          t || this.uiDialog.hide()
      },
      _setOptions: function (e) {
        var i = this,
          s = !1,
          n = {}
        t.each(e, function (t, e) {
          i._setOption(t, e),
            t in i.sizeRelatedOptions && (s = !0),
            t in i.resizableRelatedOptions && (n[t] = e)
        }),
          s && (this._size(), this._position()),
          this.uiDialog.is(':data(ui-resizable)') &&
            this.uiDialog.resizable('option', n)
      },
      _setOption: function (e, i) {
        var s,
          n,
          o = this.uiDialog
        'disabled' !== e &&
          (this._super(e, i),
          'appendTo' === e && this.uiDialog.appendTo(this._appendTo()),
          'buttons' === e && this._createButtons(),
          'closeText' === e &&
            this.uiDialogTitlebarClose.button({
              label: t('<a>')
                .text('' + this.options.closeText)
                .html()
            }),
          'draggable' === e &&
            ((s = o.is(':data(ui-draggable)')),
            s && !i && o.draggable('destroy'),
            !s && i && this._makeDraggable()),
          'position' === e && this._position(),
          'resizable' === e &&
            ((n = o.is(':data(ui-resizable)')),
            n && !i && o.resizable('destroy'),
            n && 'string' == typeof i && o.resizable('option', 'handles', i),
            n || i === !1 || this._makeResizable()),
          'title' === e &&
            this._title(this.uiDialogTitlebar.find('.ui-dialog-title')))
      },
      _size: function () {
        var t,
          e,
          i,
          s = this.options
        this.element
          .show()
          .css({ width: 'auto', minHeight: 0, maxHeight: 'none', height: 0 }),
          s.minWidth > s.width && (s.width = s.minWidth),
          (t = this.uiDialog
            .css({ height: 'auto', width: s.width })
            .outerHeight()),
          (e = Math.max(0, s.minHeight - t)),
          (i =
            'number' == typeof s.maxHeight
              ? Math.max(0, s.maxHeight - t)
              : 'none'),
          'auto' === s.height
            ? this.element.css({ minHeight: e, maxHeight: i, height: 'auto' })
            : this.element.height(Math.max(0, s.height - t)),
          this.uiDialog.is(':data(ui-resizable)') &&
            this.uiDialog.resizable('option', 'minHeight', this._minHeight())
      },
      _blockFrames: function () {
        this.iframeBlocks = this.document.find('iframe').map(function () {
          var e = t(this)
          return t('<div>')
            .css({
              position: 'absolute',
              width: e.outerWidth(),
              height: e.outerHeight()
            })
            .appendTo(e.parent())
            .offset(e.offset())[0]
        })
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks)
      },
      _allowInteraction: function (e) {
        return t(e.target).closest('.ui-dialog').length
          ? !0
          : !!t(e.target).closest('.ui-datepicker').length
      },
      _createOverlay: function () {
        if (this.options.modal) {
          var e = !0
          this._delay(function () {
            e = !1
          }),
            this.document.data('ui-dialog-overlays') ||
              this._on(this.document, {
                focusin: function (t) {
                  e ||
                    this._allowInteraction(t) ||
                    (t.preventDefault(),
                    this._trackingInstances()[0]._focusTabbable())
                }
              }),
            (this.overlay = t('<div>').appendTo(this._appendTo())),
            this._addClass(this.overlay, null, 'ui-widget-overlay ui-front'),
            this._on(this.overlay, { mousedown: '_keepFocus' }),
            this.document.data(
              'ui-dialog-overlays',
              (this.document.data('ui-dialog-overlays') || 0) + 1
            )
        }
      },
      _destroyOverlay: function () {
        if (this.options.modal && this.overlay) {
          var t = this.document.data('ui-dialog-overlays') - 1
          t
            ? this.document.data('ui-dialog-overlays', t)
            : (this._off(this.document, 'focusin'),
              this.document.removeData('ui-dialog-overlays')),
            this.overlay.remove(),
            (this.overlay = null)
        }
      }
    }),
    t.uiBackCompat !== !1 &&
      t.widget('ui.dialog', t.ui.dialog, {
        options: { dialogClass: '' },
        _createWrapper: function () {
          this._super(), this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function (t, e) {
          'dialogClass' === t &&
            this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
            this._superApply(arguments)
        }
      }),
    t.ui.dialog,
    t.widget('ui.progressbar', {
      version: '1.12.1',
      options: {
        classes: {
          'ui-progressbar': 'ui-corner-all',
          'ui-progressbar-value': 'ui-corner-left',
          'ui-progressbar-complete': 'ui-corner-right'
        },
        max: 100,
        value: 0,
        change: null,
        complete: null
      },
      min: 0,
      _create: function () {
        ;(this.oldValue = this.options.value = this._constrainedValue()),
          this.element.attr({ role: 'progressbar', 'aria-valuemin': this.min }),
          this._addClass('ui-progressbar', 'ui-widget ui-widget-content'),
          (this.valueDiv = t('<div>').appendTo(this.element)),
          this._addClass(
            this.valueDiv,
            'ui-progressbar-value',
            'ui-widget-header'
          ),
          this._refreshValue()
      },
      _destroy: function () {
        this.element.removeAttr(
          'role aria-valuemin aria-valuemax aria-valuenow'
        ),
          this.valueDiv.remove()
      },
      value: function (t) {
        return void 0 === t
          ? this.options.value
          : ((this.options.value = this._constrainedValue(t)),
            this._refreshValue(),
            void 0)
      },
      _constrainedValue: function (t) {
        return (
          void 0 === t && (t = this.options.value),
          (this.indeterminate = t === !1),
          'number' != typeof t && (t = 0),
          this.indeterminate
            ? !1
            : Math.min(this.options.max, Math.max(this.min, t))
        )
      },
      _setOptions: function (t) {
        var e = t.value
        delete t.value,
          this._super(t),
          (this.options.value = this._constrainedValue(e)),
          this._refreshValue()
      },
      _setOption: function (t, e) {
        'max' === t && (e = Math.max(this.min, e)), this._super(t, e)
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr('aria-disabled', t),
          this._toggleClass(null, 'ui-state-disabled', !!t)
      },
      _percentage: function () {
        return this.indeterminate
          ? 100
          : (100 * (this.options.value - this.min)) /
              (this.options.max - this.min)
      },
      _refreshValue: function () {
        var e = this.options.value,
          i = this._percentage()
        this.valueDiv
          .toggle(this.indeterminate || e > this.min)
          .width(i.toFixed(0) + '%'),
          this._toggleClass(
            this.valueDiv,
            'ui-progressbar-complete',
            null,
            e === this.options.max
          )._toggleClass(
            'ui-progressbar-indeterminate',
            null,
            this.indeterminate
          ),
          this.indeterminate
            ? (this.element.removeAttr('aria-valuenow'),
              this.overlayDiv ||
                ((this.overlayDiv = t('<div>').appendTo(this.valueDiv)),
                this._addClass(this.overlayDiv, 'ui-progressbar-overlay')))
            : (this.element.attr({
                'aria-valuemax': this.options.max,
                'aria-valuenow': e
              }),
              this.overlayDiv &&
                (this.overlayDiv.remove(), (this.overlayDiv = null))),
          this.oldValue !== e && ((this.oldValue = e), this._trigger('change')),
          e === this.options.max && this._trigger('complete')
      }
    }),
    t.widget('ui.selectmenu', [
      t.ui.formResetMixin,
      {
        version: '1.12.1',
        defaultElement: '<select>',
        options: {
          appendTo: null,
          classes: {
            'ui-selectmenu-button-open': 'ui-corner-top',
            'ui-selectmenu-button-closed': 'ui-corner-all'
          },
          disabled: null,
          icons: { button: 'ui-icon-triangle-1-s' },
          position: { my: 'left top', at: 'left bottom', collision: 'none' },
          width: !1,
          change: null,
          close: null,
          focus: null,
          open: null,
          select: null
        },
        _create: function () {
          var e = this.element.uniqueId().attr('id')
          ;(this.ids = {
            element: e,
            button: e + '-button',
            menu: e + '-menu'
          }),
            this._drawButton(),
            this._drawMenu(),
            this._bindFormResetHandler(),
            (this._rendered = !1),
            (this.menuItems = t())
        },
        _drawButton: function () {
          var e,
            i = this,
            s = this._parseOption(
              this.element.find('option:selected'),
              this.element[0].selectedIndex
            )
          ;(this.labels = this.element.labels().attr('for', this.ids.button)),
            this._on(this.labels, {
              click: function (t) {
                this.button.focus(), t.preventDefault()
              }
            }),
            this.element.hide(),
            (this.button = t('<span>', {
              tabindex: this.options.disabled ? -1 : 0,
              id: this.ids.button,
              role: 'combobox',
              'aria-expanded': 'false',
              'aria-autocomplete': 'list',
              'aria-owns': this.ids.menu,
              'aria-haspopup': 'true',
              title: this.element.attr('title')
            }).insertAfter(this.element)),
            this._addClass(
              this.button,
              'ui-selectmenu-button ui-selectmenu-button-closed',
              'ui-button ui-widget'
            ),
            (e = t('<span>').appendTo(this.button)),
            this._addClass(
              e,
              'ui-selectmenu-icon',
              'ui-icon ' + this.options.icons.button
            ),
            (this.buttonItem = this._renderButtonItem(s).appendTo(this.button)),
            this.options.width !== !1 && this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one('focusin', function () {
              i._rendered || i._refreshMenu()
            })
        },
        _drawMenu: function () {
          var e = this
          ;(this.menu = t('<ul>', {
            'aria-hidden': 'true',
            'aria-labelledby': this.ids.button,
            id: this.ids.menu
          })),
            (this.menuWrap = t('<div>').append(this.menu)),
            this._addClass(this.menuWrap, 'ui-selectmenu-menu', 'ui-front'),
            this.menuWrap.appendTo(this._appendTo()),
            (this.menuInstance = this.menu
              .menu({
                classes: { 'ui-menu': 'ui-corner-bottom' },
                role: 'listbox',
                select: function (t, i) {
                  t.preventDefault(),
                    e._setSelection(),
                    e._select(i.item.data('ui-selectmenu-item'), t)
                },
                focus: function (t, i) {
                  var s = i.item.data('ui-selectmenu-item')
                  null != e.focusIndex &&
                    s.index !== e.focusIndex &&
                    (e._trigger('focus', t, { item: s }),
                    e.isOpen || e._select(s, t)),
                    (e.focusIndex = s.index),
                    e.button.attr(
                      'aria-activedescendant',
                      e.menuItems.eq(s.index).attr('id')
                    )
                }
              })
              .menu('instance')),
            this.menuInstance._off(this.menu, 'mouseleave'),
            (this.menuInstance._closeOnDocumentClick = function () {
              return !1
            }),
            (this.menuInstance._isDivider = function () {
              return !1
            })
        },
        refresh: function () {
          this._refreshMenu(),
            this.buttonItem.replaceWith(
              (this.buttonItem = this._renderButtonItem(
                this._getSelectedItem().data('ui-selectmenu-item') || {}
              ))
            ),
            null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function () {
          var t,
            e = this.element.find('option')
          this.menu.empty(),
            this._parseOptions(e),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            (this.menuItems = this.menu
              .find('li')
              .not('.ui-selectmenu-optgroup')
              .find('.ui-menu-item-wrapper')),
            (this._rendered = !0),
            e.length &&
              ((t = this._getSelectedItem()),
              this.menuInstance.focus(null, t),
              this._setAria(t.data('ui-selectmenu-item')),
              this._setOption('disabled', this.element.prop('disabled')))
        },
        open: function (t) {
          this.options.disabled ||
            (this._rendered
              ? (this._removeClass(
                  this.menu.find('.ui-state-active'),
                  null,
                  'ui-state-active'
                ),
                this.menuInstance.focus(null, this._getSelectedItem()))
              : this._refreshMenu(),
            this.menuItems.length &&
              ((this.isOpen = !0),
              this._toggleAttr(),
              this._resizeMenu(),
              this._position(),
              this._on(this.document, this._documentClick),
              this._trigger('open', t)))
        },
        _position: function () {
          this.menuWrap.position(
            t.extend({ of: this.button }, this.options.position)
          )
        },
        close: function (t) {
          this.isOpen &&
            ((this.isOpen = !1),
            this._toggleAttr(),
            (this.range = null),
            this._off(this.document),
            this._trigger('close', t))
        },
        widget: function () {
          return this.button
        },
        menuWidget: function () {
          return this.menu
        },
        _renderButtonItem: function (e) {
          var i = t('<span>')
          return (
            this._setText(i, e.label),
            this._addClass(i, 'ui-selectmenu-text'),
            i
          )
        },
        _renderMenu: function (e, i) {
          var s = this,
            n = ''
          t.each(i, function (i, o) {
            var a
            o.optgroup !== n &&
              ((a = t('<li>', { text: o.optgroup })),
              s._addClass(
                a,
                'ui-selectmenu-optgroup',
                'ui-menu-divider' +
                  (o.element.parent('optgroup').prop('disabled')
                    ? ' ui-state-disabled'
                    : '')
              ),
              a.appendTo(e),
              (n = o.optgroup)),
              s._renderItemData(e, o)
          })
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data('ui-selectmenu-item', e)
        },
        _renderItem: function (e, i) {
          var s = t('<li>'),
            n = t('<div>', { title: i.element.attr('title') })
          return (
            i.disabled && this._addClass(s, null, 'ui-state-disabled'),
            this._setText(n, i.label),
            s.append(n).appendTo(e)
          )
        },
        _setText: function (t, e) {
          e ? t.text(e) : t.html('&#160;')
        },
        _move: function (t, e) {
          var i,
            s,
            n = '.ui-menu-item'
          this.isOpen
            ? (i = this.menuItems.eq(this.focusIndex).parent('li'))
            : ((i = this.menuItems
                .eq(this.element[0].selectedIndex)
                .parent('li')),
              (n += ':not(.ui-state-disabled)')),
            (s =
              'first' === t || 'last' === t
                ? i['first' === t ? 'prevAll' : 'nextAll'](n).eq(-1)
                : i[t + 'All'](n).eq(0)),
            s.length && this.menuInstance.focus(e, s)
        },
        _getSelectedItem: function () {
          return this.menuItems.eq(this.element[0].selectedIndex).parent('li')
        },
        _toggle: function (t) {
          this[this.isOpen ? 'close' : 'open'](t)
        },
        _setSelection: function () {
          var t
          this.range &&
            (window.getSelection
              ? ((t = window.getSelection()),
                t.removeAllRanges(),
                t.addRange(this.range))
              : this.range.select(),
            this.button.focus())
        },
        _documentClick: {
          mousedown: function (e) {
            this.isOpen &&
              (t(e.target).closest(
                '.ui-selectmenu-menu, #' + t.ui.escapeSelector(this.ids.button)
              ).length ||
                this.close(e))
          }
        },
        _buttonEvents: {
          mousedown: function () {
            var t
            window.getSelection
              ? ((t = window.getSelection()),
                t.rangeCount && (this.range = t.getRangeAt(0)))
              : (this.range = document.selection.createRange())
          },
          click: function (t) {
            this._setSelection(), this._toggle(t)
          },
          keydown: function (e) {
            var i = !0
            switch (e.keyCode) {
              case t.ui.keyCode.TAB:
              case t.ui.keyCode.ESCAPE:
                this.close(e), (i = !1)
                break
              case t.ui.keyCode.ENTER:
                this.isOpen && this._selectFocusedItem(e)
                break
              case t.ui.keyCode.UP:
                e.altKey ? this._toggle(e) : this._move('prev', e)
                break
              case t.ui.keyCode.DOWN:
                e.altKey ? this._toggle(e) : this._move('next', e)
                break
              case t.ui.keyCode.SPACE:
                this.isOpen ? this._selectFocusedItem(e) : this._toggle(e)
                break
              case t.ui.keyCode.LEFT:
                this._move('prev', e)
                break
              case t.ui.keyCode.RIGHT:
                this._move('next', e)
                break
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.PAGE_UP:
                this._move('first', e)
                break
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_DOWN:
                this._move('last', e)
                break
              default:
                this.menu.trigger(e), (i = !1)
            }
            i && e.preventDefault()
          }
        },
        _selectFocusedItem: function (t) {
          var e = this.menuItems.eq(this.focusIndex).parent('li')
          e.hasClass('ui-state-disabled') ||
            this._select(e.data('ui-selectmenu-item'), t)
        },
        _select: function (t, e) {
          var i = this.element[0].selectedIndex
          ;(this.element[0].selectedIndex = t.index),
            this.buttonItem.replaceWith(
              (this.buttonItem = this._renderButtonItem(t))
            ),
            this._setAria(t),
            this._trigger('select', e, { item: t }),
            t.index !== i && this._trigger('change', e, { item: t }),
            this.close(e)
        },
        _setAria: function (t) {
          var e = this.menuItems.eq(t.index).attr('id')
          this.button.attr({
            'aria-labelledby': e,
            'aria-activedescendant': e
          }),
            this.menu.attr('aria-activedescendant', e)
        },
        _setOption: function (t, e) {
          if ('icons' === t) {
            var i = this.button.find('span.ui-icon')
            this._removeClass(i, null, this.options.icons.button)._addClass(
              i,
              null,
              e.button
            )
          }
          this._super(t, e),
            'appendTo' === t && this.menuWrap.appendTo(this._appendTo()),
            'width' === t && this._resizeButton()
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.menuInstance.option('disabled', t),
            this.button.attr('aria-disabled', t),
            this._toggleClass(this.button, null, 'ui-state-disabled', t),
            this.element.prop('disabled', t),
            t
              ? (this.button.attr('tabindex', -1), this.close())
              : this.button.attr('tabindex', 0)
        },
        _appendTo: function () {
          var e = this.options.appendTo
          return (
            e &&
              (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest('.ui-front, dialog')),
            e.length || (e = this.document[0].body),
            e
          )
        },
        _toggleAttr: function () {
          this.button.attr('aria-expanded', this.isOpen),
            this._removeClass(
              this.button,
              'ui-selectmenu-button-' + (this.isOpen ? 'closed' : 'open')
            )
              ._addClass(
                this.button,
                'ui-selectmenu-button-' + (this.isOpen ? 'open' : 'closed')
              )
              ._toggleClass(
                this.menuWrap,
                'ui-selectmenu-open',
                null,
                this.isOpen
              ),
            this.menu.attr('aria-hidden', !this.isOpen)
        },
        _resizeButton: function () {
          var t = this.options.width
          return t === !1
            ? (this.button.css('width', ''), void 0)
            : (null === t &&
                ((t = this.element.show().outerWidth()), this.element.hide()),
              this.button.outerWidth(t),
              void 0)
        },
        _resizeMenu: function () {
          this.menu.outerWidth(
            Math.max(
              this.button.outerWidth(),
              this.menu.width('').outerWidth() + 1
            )
          )
        },
        _getCreateOptions: function () {
          var t = this._super()
          return (t.disabled = this.element.prop('disabled')), t
        },
        _parseOptions: function (e) {
          var i = this,
            s = []
          e.each(function (e, n) {
            s.push(i._parseOption(t(n), e))
          }),
            (this.items = s)
        },
        _parseOption: function (t, e) {
          var i = t.parent('optgroup')
          return {
            element: t,
            index: e,
            value: t.val(),
            label: t.text(),
            optgroup: i.attr('label') || '',
            disabled: i.prop('disabled') || t.prop('disabled')
          }
        },
        _destroy: function () {
          this._unbindFormResetHandler(),
            this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.labels.attr('for', this.ids.element)
        }
      }
    ]),
    t.widget('ui.slider', t.ui.mouse, {
      version: '1.12.1',
      widgetEventPrefix: 'slide',
      options: {
        animate: !1,
        classes: {
          'ui-slider': 'ui-corner-all',
          'ui-slider-handle': 'ui-corner-all',
          'ui-slider-range': 'ui-corner-all ui-widget-header'
        },
        distance: 0,
        max: 100,
        min: 0,
        orientation: 'horizontal',
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null
      },
      numPages: 5,
      _create: function () {
        ;(this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this._addClass(
            'ui-slider ui-slider-' + this.orientation,
            'ui-widget ui-widget-content'
          ),
          this._refresh(),
          (this._animateOff = !1)
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue()
      },
      _createHandles: function () {
        var e,
          i,
          s = this.options,
          n = this.element.find('.ui-slider-handle'),
          o = "<span tabindex='0'></span>",
          a = []
        for (
          i = (s.values && s.values.length) || 1,
            n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
            e = n.length;
          i > e;
          e++
        )
          a.push(o)
        ;(this.handles = n.add(t(a.join('')).appendTo(this.element))),
          this._addClass(this.handles, 'ui-slider-handle', 'ui-state-default'),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (e) {
            t(this)
              .data('ui-slider-handle-index', e)
              .attr('tabIndex', 0)
          })
      },
      _createRange: function () {
        var e = this.options
        e.range
          ? (e.range === !0 &&
              (e.values
                ? e.values.length && 2 !== e.values.length
                  ? (e.values = [e.values[0], e.values[0]])
                  : t.isArray(e.values) && (e.values = e.values.slice(0))
                : (e.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? (this._removeClass(
                  this.range,
                  'ui-slider-range-min ui-slider-range-max'
                ),
                this.range.css({ left: '', bottom: '' }))
              : ((this.range = t('<div>').appendTo(this.element)),
                this._addClass(this.range, 'ui-slider-range')),
            ('min' === e.range || 'max' === e.range) &&
              this._addClass(this.range, 'ui-slider-range-' + e.range))
          : (this.range && this.range.remove(), (this.range = null))
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles)
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this._mouseDestroy()
      },
      _mouseCapture: function (e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          u = this,
          c = this.options
        return c.disabled
          ? !1
          : ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight()
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: e.pageX, y: e.pageY }),
            (s = this._normValueFromMouse(i)),
            (n = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (e) {
              var i = Math.abs(s - u.values(e))
              ;(n > i ||
                (n === i &&
                  (e === u._lastChangedValue || u.values(e) === c.min))) &&
                ((n = i), (o = t(this)), (a = e))
            }),
            (r = this._start(e, a)),
            r === !1
              ? !1
              : ((this._mouseSliding = !0),
                (this._handleIndex = a),
                this._addClass(o, null, 'ui-state-active'),
                o.trigger('focus'),
                (h = o.offset()),
                (l = !t(e.target)
                  .parents()
                  .addBack()
                  .is('.ui-slider-handle')),
                (this._clickOffset = l
                  ? { left: 0, top: 0 }
                  : {
                      left: e.pageX - h.left - o.width() / 2,
                      top:
                        e.pageY -
                        h.top -
                        o.height() / 2 -
                        (parseInt(o.css('borderTopWidth'), 10) || 0) -
                        (parseInt(o.css('borderBottomWidth'), 10) || 0) +
                        (parseInt(o.css('marginTop'), 10) || 0)
                    }),
                this.handles.hasClass('ui-state-hover') || this._slide(e, a, s),
                (this._animateOff = !0),
                !0))
      },
      _mouseStart: function () {
        return !0
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          i = this._normValueFromMouse(e)
        return this._slide(t, this._handleIndex, i), !1
      },
      _mouseStop: function (t) {
        return (
          this._removeClass(this.handles, null, 'ui-state-active'),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        )
      },
      _detectOrientation: function () {
        this.orientation =
          'vertical' === this.options.orientation ? 'vertical' : 'horizontal'
      },
      _normValueFromMouse: function (t) {
        var e, i, s, n, o
        return (
          'horizontal' === this.orientation
            ? ((e = this.elementSize.width),
              (i =
                t.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((e = this.elementSize.height),
              (i =
                t.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (s = i / e),
          s > 1 && (s = 1),
          0 > s && (s = 0),
          'vertical' === this.orientation && (s = 1 - s),
          (n = this._valueMax() - this._valueMin()),
          (o = this._valueMin() + s * n),
          this._trimAlignValue(o)
        )
      },
      _uiHash: function (t, e, i) {
        var s = {
          handle: this.handles[t],
          handleIndex: t,
          value: void 0 !== e ? e : this.value()
        }
        return (
          this._hasMultipleValues() &&
            ((s.value = void 0 !== e ? e : this.values(t)),
            (s.values = i || this.values())),
          s
        )
      },
      _hasMultipleValues: function () {
        return this.options.values && this.options.values.length
      },
      _start: function (t, e) {
        return this._trigger('start', t, this._uiHash(e))
      },
      _slide: function (t, e, i) {
        var s,
          n,
          o = this.value(),
          a = this.values()
        this._hasMultipleValues() &&
          ((n = this.values(e ? 0 : 1)),
          (o = this.values(e)),
          2 === this.options.values.length &&
            this.options.range === !0 &&
            (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
          (a[e] = i)),
          i !== o &&
            ((s = this._trigger('slide', t, this._uiHash(e, i, a))),
            s !== !1 &&
              (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
      },
      _stop: function (t, e) {
        this._trigger('stop', t, this._uiHash(e))
      },
      _change: function (t, e) {
        this._keySliding ||
          this._mouseSliding ||
          ((this._lastChangedValue = e),
          this._trigger('change', t, this._uiHash(e)))
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)),
            this._refreshValue(),
            this._change(null, 0),
            void 0)
          : this._value()
      },
      values: function (e, i) {
        var s, n, o
        if (arguments.length > 1)
          return (
            (this.options.values[e] = this._trimAlignValue(i)),
            this._refreshValue(),
            this._change(null, e),
            void 0
          )
        if (!arguments.length) return this._values()
        if (!t.isArray(arguments[0]))
          return this._hasMultipleValues() ? this._values(e) : this.value()
        for (
          s = this.options.values, n = arguments[0], o = 0;
          s.length > o;
          o += 1
        )
          (s[o] = this._trimAlignValue(n[o])), this._change(null, o)
        this._refreshValue()
      },
      _setOption: function (e, i) {
        var s,
          n = 0
        switch (
          ('range' === e &&
            this.options.range === !0 &&
            ('min' === i
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : 'max' === i &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          t.isArray(this.options.values) && (n = this.options.values.length),
          this._super(e, i),
          e)
        ) {
          case 'orientation':
            this._detectOrientation(),
              this._removeClass(
                'ui-slider-horizontal ui-slider-vertical'
              )._addClass('ui-slider-' + this.orientation),
              this._refreshValue(),
              this.options.range && this._refreshRange(i),
              this.handles.css('horizontal' === i ? 'bottom' : 'left', '')
            break
          case 'value':
            ;(this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1)
            break
          case 'values':
            for (
              this._animateOff = !0, this._refreshValue(), s = n - 1;
              s >= 0;
              s--
            )
              this._change(null, s)
            this._animateOff = !1
            break
          case 'step':
          case 'min':
          case 'max':
            ;(this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1)
            break
          case 'range':
            ;(this._animateOff = !0), this._refresh(), (this._animateOff = !1)
        }
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(null, 'ui-state-disabled', !!t)
      },
      _value: function () {
        var t = this.options.value
        return (t = this._trimAlignValue(t))
      },
      _values: function (t) {
        var e, i, s
        if (arguments.length)
          return (e = this.options.values[t]), (e = this._trimAlignValue(e))
        if (this._hasMultipleValues()) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
            i[s] = this._trimAlignValue(i[s])
          return i
        }
        return []
      },
      _trimAlignValue: function (t) {
        if (this._valueMin() >= t) return this._valueMin()
        if (t >= this._valueMax()) return this._valueMax()
        var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i
        return (
          2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
          parseFloat(s.toFixed(5))
        )
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          s = Math.round((t - e) / i) * i
        ;(t = s + e),
          t > this.options.max && (t -= i),
          (this.max = parseFloat(t.toFixed(this._precision())))
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step)
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        )
      },
      _precisionOf: function (t) {
        var e = '' + t,
          i = e.indexOf('.')
        return -1 === i ? 0 : e.length - i - 1
      },
      _valueMin: function () {
        return this.options.min
      },
      _valueMax: function () {
        return this.max
      },
      _refreshRange: function (t) {
        'vertical' === t && this.range.css({ width: '', left: '' }),
          'horizontal' === t && this.range.css({ height: '', bottom: '' })
      },
      _refreshValue: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          u = {}
        this._hasMultipleValues()
          ? this.handles.each(function (s) {
              ;(i =
                100 *
                ((h.values(s) - h._valueMin()) /
                  (h._valueMax() - h._valueMin()))),
                (u['horizontal' === h.orientation ? 'left' : 'bottom'] =
                  i + '%'),
                t(this)
                  .stop(1, 1)
                  [l ? 'animate' : 'css'](u, r.animate),
                h.options.range === !0 &&
                  ('horizontal' === h.orientation
                    ? (0 === s &&
                        h.range
                          .stop(1, 1)
                          [l ? 'animate' : 'css']({ left: i + '%' }, r.animate),
                      1 === s &&
                        h.range[l ? 'animate' : 'css'](
                          { width: i - e + '%' },
                          { queue: !1, duration: r.animate }
                        ))
                    : (0 === s &&
                        h.range
                          .stop(1, 1)
                          [l ? 'animate' : 'css'](
                            { bottom: i + '%' },
                            r.animate
                          ),
                      1 === s &&
                        h.range[l ? 'animate' : 'css'](
                          { height: i - e + '%' },
                          { queue: !1, duration: r.animate }
                        ))),
                (e = i)
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (o = this._valueMax()),
            (i = o !== n ? 100 * ((s - n) / (o - n)) : 0),
            (u['horizontal' === this.orientation ? 'left' : 'bottom'] =
              i + '%'),
            this.handle.stop(1, 1)[l ? 'animate' : 'css'](u, r.animate),
            'min' === a &&
              'horizontal' === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? 'animate' : 'css']({ width: i + '%' }, r.animate),
            'max' === a &&
              'horizontal' === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? 'animate' : 'css']({ width: 100 - i + '%' }, r.animate),
            'min' === a &&
              'vertical' === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? 'animate' : 'css']({ height: i + '%' }, r.animate),
            'max' === a &&
              'vertical' === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? 'animate' : 'css']({ height: 100 - i + '%' }, r.animate))
      },
      _handleEvents: {
        keydown: function (e) {
          var i,
            s,
            n,
            o,
            a = t(e.target).data('ui-slider-handle-index')
          switch (e.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (
                (e.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  this._addClass(t(e.target), null, 'ui-state-active'),
                  (i = this._start(e, a)),
                  i === !1))
              )
                return
          }
          switch (
            ((o = this.options.step),
            (s = n = this._hasMultipleValues() ? this.values(a) : this.value()),
            e.keyCode)
          ) {
            case t.ui.keyCode.HOME:
              n = this._valueMin()
              break
            case t.ui.keyCode.END:
              n = this._valueMax()
              break
            case t.ui.keyCode.PAGE_UP:
              n = this._trimAlignValue(
                s + (this._valueMax() - this._valueMin()) / this.numPages
              )
              break
            case t.ui.keyCode.PAGE_DOWN:
              n = this._trimAlignValue(
                s - (this._valueMax() - this._valueMin()) / this.numPages
              )
              break
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
              if (s === this._valueMax()) return
              n = this._trimAlignValue(s + o)
              break
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (s === this._valueMin()) return
              n = this._trimAlignValue(s - o)
          }
          this._slide(e, a, n)
        },
        keyup: function (e) {
          var i = t(e.target).data('ui-slider-handle-index')
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(e, i),
            this._change(e, i),
            this._removeClass(t(e.target), null, 'ui-state-active'))
        }
      }
    }),
    t.widget('ui.spinner', {
      version: '1.12.1',
      defaultElement: '<input>',
      widgetEventPrefix: 'spin',
      options: {
        classes: {
          'ui-spinner': 'ui-corner-all',
          'ui-spinner-down': 'ui-corner-br',
          'ui-spinner-up': 'ui-corner-tr'
        },
        culture: null,
        icons: { down: 'ui-icon-triangle-1-s', up: 'ui-icon-triangle-1-n' },
        incremental: !0,
        max: null,
        min: null,
        numberFormat: null,
        page: 10,
        step: 1,
        change: null,
        spin: null,
        start: null,
        stop: null
      },
      _create: function () {
        this._setOption('max', this.options.max),
          this._setOption('min', this.options.min),
          this._setOption('step', this.options.step),
          '' !== this.value() && this._value(this.element.val(), !0),
          this._draw(),
          this._on(this._events),
          this._refresh(),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr('autocomplete')
            }
          })
      },
      _getCreateOptions: function () {
        var e = this._super(),
          i = this.element
        return (
          t.each(['min', 'max', 'step'], function (t, s) {
            var n = i.attr(s)
            null != n && n.length && (e[s] = n)
          }),
          e
        )
      },
      _events: {
        keydown: function (t) {
          this._start(t) && this._keydown(t) && t.preventDefault()
        },
        keyup: '_stop',
        focus: function () {
          this.previous = this.element.val()
        },
        blur: function (t) {
          return this.cancelBlur
            ? (delete this.cancelBlur, void 0)
            : (this._stop(),
              this._refresh(),
              this.previous !== this.element.val() &&
                this._trigger('change', t),
              void 0)
        },
        mousewheel: function (t, e) {
          if (e) {
            if (!this.spinning && !this._start(t)) return !1
            this._spin((e > 0 ? 1 : -1) * this.options.step, t),
              clearTimeout(this.mousewheelTimer),
              (this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(t)
              }, 100)),
              t.preventDefault()
          }
        },
        'mousedown .ui-spinner-button': function (e) {
          function i () {
            var e = this.element[0] === t.ui.safeActiveElement(this.document[0])
            e ||
              (this.element.trigger('focus'),
              (this.previous = s),
              this._delay(function () {
                this.previous = s
              }))
          }
          var s
          ;(s =
            this.element[0] === t.ui.safeActiveElement(this.document[0])
              ? this.previous
              : this.element.val()),
            e.preventDefault(),
            i.call(this),
            (this.cancelBlur = !0),
            this._delay(function () {
              delete this.cancelBlur, i.call(this)
            }),
            this._start(e) !== !1 &&
              this._repeat(
                null,
                t(e.currentTarget).hasClass('ui-spinner-up') ? 1 : -1,
                e
              )
        },
        'mouseup .ui-spinner-button': '_stop',
        'mouseenter .ui-spinner-button': function (e) {
          return t(e.currentTarget).hasClass('ui-state-active')
            ? this._start(e) === !1
              ? !1
              : (this._repeat(
                  null,
                  t(e.currentTarget).hasClass('ui-spinner-up') ? 1 : -1,
                  e
                ),
                void 0)
            : void 0
        },
        'mouseleave .ui-spinner-button': '_stop'
      },
      _enhance: function () {
        this.uiSpinner = this.element
          .attr('autocomplete', 'off')
          .wrap('<span>')
          .parent()
          .append('<a></a><a></a>')
      },
      _draw: function () {
        this._enhance(),
          this._addClass(
            this.uiSpinner,
            'ui-spinner',
            'ui-widget ui-widget-content'
          ),
          this._addClass('ui-spinner-input'),
          this.element.attr('role', 'spinbutton'),
          (this.buttons = this.uiSpinner
            .children('a')
            .attr('tabIndex', -1)
            .attr('aria-hidden', !0)
            .button({ classes: { 'ui-button': '' } })),
          this._removeClass(this.buttons, 'ui-corner-all'),
          this._addClass(
            this.buttons.first(),
            'ui-spinner-button ui-spinner-up'
          ),
          this._addClass(
            this.buttons.last(),
            'ui-spinner-button ui-spinner-down'
          ),
          this.buttons
            .first()
            .button({ icon: this.options.icons.up, showLabel: !1 }),
          this.buttons
            .last()
            .button({ icon: this.options.icons.down, showLabel: !1 }),
          this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) &&
            this.uiSpinner.height() > 0 &&
            this.uiSpinner.height(this.uiSpinner.height())
      },
      _keydown: function (e) {
        var i = this.options,
          s = t.ui.keyCode
        switch (e.keyCode) {
          case s.UP:
            return this._repeat(null, 1, e), !0
          case s.DOWN:
            return this._repeat(null, -1, e), !0
          case s.PAGE_UP:
            return this._repeat(null, i.page, e), !0
          case s.PAGE_DOWN:
            return this._repeat(null, -i.page, e), !0
        }
        return !1
      },
      _start: function (t) {
        return this.spinning || this._trigger('start', t) !== !1
          ? (this.counter || (this.counter = 1), (this.spinning = !0), !0)
          : !1
      },
      _repeat: function (t, e, i) {
        ;(t = t || 500),
          clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            this._repeat(40, e, i)
          }, t)),
          this._spin(e * this.options.step, i)
      },
      _spin: function (t, e) {
        var i = this.value() || 0
        this.counter || (this.counter = 1),
          (i = this._adjustValue(i + t * this._increment(this.counter))),
          (this.spinning && this._trigger('spin', e, { value: i }) === !1) ||
            (this._value(i), this.counter++)
      },
      _increment: function (e) {
        var i = this.options.incremental
        return i
          ? t.isFunction(i)
            ? i(e)
            : Math.floor((e * e * e) / 5e4 - (e * e) / 500 + (17 * e) / 200 + 1)
          : 1
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step)
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        )
      },
      _precisionOf: function (t) {
        var e = '' + t,
          i = e.indexOf('.')
        return -1 === i ? 0 : e.length - i - 1
      },
      _adjustValue: function (t) {
        var e,
          i,
          s = this.options
        return (
          (e = null !== s.min ? s.min : 0),
          (i = t - e),
          (i = Math.round(i / s.step) * s.step),
          (t = e + i),
          (t = parseFloat(t.toFixed(this._precision()))),
          null !== s.max && t > s.max
            ? s.max
            : null !== s.min && s.min > t
            ? s.min
            : t
        )
      },
      _stop: function (t) {
        this.spinning &&
          (clearTimeout(this.timer),
          clearTimeout(this.mousewheelTimer),
          (this.counter = 0),
          (this.spinning = !1),
          this._trigger('stop', t))
      },
      _setOption: function (t, e) {
        var i, s, n
        return 'culture' === t || 'numberFormat' === t
          ? ((i = this._parse(this.element.val())),
            (this.options[t] = e),
            this.element.val(this._format(i)),
            void 0)
          : (('max' === t || 'min' === t || 'step' === t) &&
              'string' == typeof e &&
              (e = this._parse(e)),
            'icons' === t &&
              ((s = this.buttons.first().find('.ui-icon')),
              this._removeClass(s, null, this.options.icons.up),
              this._addClass(s, null, e.up),
              (n = this.buttons.last().find('.ui-icon')),
              this._removeClass(n, null, this.options.icons.down),
              this._addClass(n, null, e.down)),
            this._super(t, e),
            void 0)
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this._toggleClass(this.uiSpinner, null, 'ui-state-disabled', !!t),
          this.element.prop('disabled', !!t),
          this.buttons.button(t ? 'disable' : 'enable')
      },
      _setOptions: r(function (t) {
        this._super(t)
      }),
      _parse: function (t) {
        return (
          'string' == typeof t &&
            '' !== t &&
            (t =
              window.Globalize && this.options.numberFormat
                ? Globalize.parseFloat(t, 10, this.options.culture)
                : +t),
          '' === t || isNaN(t) ? null : t
        )
      },
      _format: function (t) {
        return '' === t
          ? ''
          : window.Globalize && this.options.numberFormat
          ? Globalize.format(t, this.options.numberFormat, this.options.culture)
          : t
      },
      _refresh: function () {
        this.element.attr({
          'aria-valuemin': this.options.min,
          'aria-valuemax': this.options.max,
          'aria-valuenow': this._parse(this.element.val())
        })
      },
      isValid: function () {
        var t = this.value()
        return null === t ? !1 : t === this._adjustValue(t)
      },
      _value: function (t, e) {
        var i
        '' !== t &&
          ((i = this._parse(t)),
          null !== i &&
            (e || (i = this._adjustValue(i)), (t = this._format(i)))),
          this.element.val(t),
          this._refresh()
      },
      _destroy: function () {
        this.element
          .prop('disabled', !1)
          .removeAttr(
            'autocomplete role aria-valuemin aria-valuemax aria-valuenow'
          ),
          this.uiSpinner.replaceWith(this.element)
      },
      stepUp: r(function (t) {
        this._stepUp(t)
      }),
      _stepUp: function (t) {
        this._start() &&
          (this._spin((t || 1) * this.options.step), this._stop())
      },
      stepDown: r(function (t) {
        this._stepDown(t)
      }),
      _stepDown: function (t) {
        this._start() &&
          (this._spin((t || 1) * -this.options.step), this._stop())
      },
      pageUp: r(function (t) {
        this._stepUp((t || 1) * this.options.page)
      }),
      pageDown: r(function (t) {
        this._stepDown((t || 1) * this.options.page)
      }),
      value: function (t) {
        return arguments.length
          ? (r(this._value).call(this, t), void 0)
          : this._parse(this.element.val())
      },
      widget: function () {
        return this.uiSpinner
      }
    }),
    t.uiBackCompat !== !1 &&
      t.widget('ui.spinner', t.ui.spinner, {
        _enhance: function () {
          this.uiSpinner = this.element
            .attr('autocomplete', 'off')
            .wrap(this._uiSpinnerHtml())
            .parent()
            .append(this._buttonHtml())
        },
        _uiSpinnerHtml: function () {
          return '<span>'
        },
        _buttonHtml: function () {
          return '<a></a><a></a>'
        }
      }),
    t.ui.spinner,
    t.widget('ui.tabs', {
      version: '1.12.1',
      delay: 300,
      options: {
        active: null,
        classes: {
          'ui-tabs': 'ui-corner-all',
          'ui-tabs-nav': 'ui-corner-all',
          'ui-tabs-panel': 'ui-corner-bottom',
          'ui-tabs-tab': 'ui-corner-top'
        },
        collapsible: !1,
        event: 'click',
        heightStyle: 'content',
        hide: null,
        show: null,
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null
      },
      _isLocal: (function () {
        var t = /#.*$/
        return function (e) {
          var i, s
          ;(i = e.href.replace(t, '')), (s = location.href.replace(t, ''))
          try {
            i = decodeURIComponent(i)
          } catch (n) {}
          try {
            s = decodeURIComponent(s)
          } catch (n) {}
          return e.hash.length > 1 && i === s
        }
      })(),
      _create: function () {
        var e = this,
          i = this.options
        ;(this.running = !1),
          this._addClass('ui-tabs', 'ui-widget ui-widget-content'),
          this._toggleClass('ui-tabs-collapsible', null, i.collapsible),
          this._processTabs(),
          (i.active = this._initialActive()),
          t.isArray(i.disabled) &&
            (i.disabled = t
              .unique(
                i.disabled.concat(
                  t.map(this.tabs.filter('.ui-state-disabled'), function (t) {
                    return e.tabs.index(t)
                  })
                )
              )
              .sort()),
          (this.active =
            this.options.active !== !1 && this.anchors.length
              ? this._findActive(i.active)
              : t()),
          this._refresh(),
          this.active.length && this.load(i.active)
      },
      _initialActive: function () {
        var e = this.options.active,
          i = this.options.collapsible,
          s = location.hash.substring(1)
        return (
          null === e &&
            (s &&
              this.tabs.each(function (i, n) {
                return t(n).attr('aria-controls') === s ? ((e = i), !1) : void 0
              }),
            null === e &&
              (e = this.tabs.index(this.tabs.filter('.ui-tabs-active'))),
            (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)),
          e !== !1 &&
            ((e = this.tabs.index(this.tabs.eq(e))),
            -1 === e && (e = i ? !1 : 0)),
          !i && e === !1 && this.anchors.length && (e = 0),
          e
        )
      },
      _getCreateEventData: function () {
        return {
          tab: this.active,
          panel: this.active.length ? this._getPanelForTab(this.active) : t()
        }
      },
      _tabKeydown: function (e) {
        var i = t(t.ui.safeActiveElement(this.document[0])).closest('li'),
          s = this.tabs.index(i),
          n = !0
        if (!this._handlePageNav(e)) {
          switch (e.keyCode) {
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
              s++
              break
            case t.ui.keyCode.UP:
            case t.ui.keyCode.LEFT:
              ;(n = !1), s--
              break
            case t.ui.keyCode.END:
              s = this.anchors.length - 1
              break
            case t.ui.keyCode.HOME:
              s = 0
              break
            case t.ui.keyCode.SPACE:
              return (
                e.preventDefault(),
                clearTimeout(this.activating),
                this._activate(s),
                void 0
              )
            case t.ui.keyCode.ENTER:
              return (
                e.preventDefault(),
                clearTimeout(this.activating),
                this._activate(s === this.options.active ? !1 : s),
                void 0
              )
            default:
              return
          }
          e.preventDefault(),
            clearTimeout(this.activating),
            (s = this._focusNextTab(s, n)),
            e.ctrlKey ||
              e.metaKey ||
              (i.attr('aria-selected', 'false'),
              this.tabs.eq(s).attr('aria-selected', 'true'),
              (this.activating = this._delay(function () {
                this.option('active', s)
              }, this.delay)))
        }
      },
      _panelKeydown: function (e) {
        this._handlePageNav(e) ||
          (e.ctrlKey &&
            e.keyCode === t.ui.keyCode.UP &&
            (e.preventDefault(), this.active.trigger('focus')))
      },
      _handlePageNav: function (e) {
        return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP
          ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0)
          : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN
          ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0)
          : void 0
      },
      _findNextTab: function (e, i) {
        function s () {
          return e > n && (e = 0), 0 > e && (e = n), e
        }
        for (
          var n = this.tabs.length - 1;
          -1 !== t.inArray(s(), this.options.disabled);

        )
          e = i ? e + 1 : e - 1
        return e
      },
      _focusNextTab: function (t, e) {
        return (
          (t = this._findNextTab(t, e)), this.tabs.eq(t).trigger('focus'), t
        )
      },
      _setOption: function (t, e) {
        return 'active' === t
          ? (this._activate(e), void 0)
          : (this._super(t, e),
            'collapsible' === t &&
              (this._toggleClass('ui-tabs-collapsible', null, e),
              e || this.options.active !== !1 || this._activate(0)),
            'event' === t && this._setupEvents(e),
            'heightStyle' === t && this._setupHeightStyle(e),
            void 0)
      },
      _sanitizeSelector: function (t) {
        return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, '\\$&') : ''
      },
      refresh: function () {
        var e = this.options,
          i = this.tablist.children(':has(a[href])')
        ;(e.disabled = t.map(i.filter('.ui-state-disabled'), function (t) {
          return i.index(t)
        })),
          this._processTabs(),
          e.active !== !1 && this.anchors.length
            ? this.active.length && !t.contains(this.tablist[0], this.active[0])
              ? this.tabs.length === e.disabled.length
                ? ((e.active = !1), (this.active = t()))
                : this._activate(
                    this._findNextTab(Math.max(0, e.active - 1), !1)
                  )
              : (e.active = this.tabs.index(this.active))
            : ((e.active = !1), (this.active = t())),
          this._refresh()
      },
      _refresh: function () {
        this._setOptionDisabled(this.options.disabled),
          this._setupEvents(this.options.event),
          this._setupHeightStyle(this.options.heightStyle),
          this.tabs
            .not(this.active)
            .attr({
              'aria-selected': 'false',
              'aria-expanded': 'false',
              tabIndex: -1
            }),
          this.panels
            .not(this._getPanelForTab(this.active))
            .hide()
            .attr({ 'aria-hidden': 'true' }),
          this.active.length
            ? (this.active.attr({
                'aria-selected': 'true',
                'aria-expanded': 'true',
                tabIndex: 0
              }),
              this._addClass(this.active, 'ui-tabs-active', 'ui-state-active'),
              this._getPanelForTab(this.active)
                .show()
                .attr({ 'aria-hidden': 'false' }))
            : this.tabs.eq(0).attr('tabIndex', 0)
      },
      _processTabs: function () {
        var e = this,
          i = this.tabs,
          s = this.anchors,
          n = this.panels
        ;(this.tablist = this._getList().attr('role', 'tablist')),
          this._addClass(
            this.tablist,
            'ui-tabs-nav',
            'ui-helper-reset ui-helper-clearfix ui-widget-header'
          ),
          this.tablist
            .on('mousedown' + this.eventNamespace, '> li', function (e) {
              t(this).is('.ui-state-disabled') && e.preventDefault()
            })
            .on('focus' + this.eventNamespace, '.ui-tabs-anchor', function () {
              t(this)
                .closest('li')
                .is('.ui-state-disabled') && this.blur()
            }),
          (this.tabs = this.tablist
            .find('> li:has(a[href])')
            .attr({ role: 'tab', tabIndex: -1 })),
          this._addClass(this.tabs, 'ui-tabs-tab', 'ui-state-default'),
          (this.anchors = this.tabs
            .map(function () {
              return t('a', this)[0]
            })
            .attr({ role: 'presentation', tabIndex: -1 })),
          this._addClass(this.anchors, 'ui-tabs-anchor'),
          (this.panels = t()),
          this.anchors.each(function (i, s) {
            var n,
              o,
              a,
              r = t(s)
                .uniqueId()
                .attr('id'),
              h = t(s).closest('li'),
              l = h.attr('aria-controls')
            e._isLocal(s)
              ? ((n = s.hash),
                (a = n.substring(1)),
                (o = e.element.find(e._sanitizeSelector(n))))
              : ((a = h.attr('aria-controls') || t({}).uniqueId()[0].id),
                (n = '#' + a),
                (o = e.element.find(n)),
                o.length ||
                  ((o = e._createPanel(a)),
                  o.insertAfter(e.panels[i - 1] || e.tablist)),
                o.attr('aria-live', 'polite')),
              o.length && (e.panels = e.panels.add(o)),
              l && h.data('ui-tabs-aria-controls', l),
              h.attr({ 'aria-controls': a, 'aria-labelledby': r }),
              o.attr('aria-labelledby', r)
          }),
          this.panels.attr('role', 'tabpanel'),
          this._addClass(this.panels, 'ui-tabs-panel', 'ui-widget-content'),
          i &&
            (this._off(i.not(this.tabs)),
            this._off(s.not(this.anchors)),
            this._off(n.not(this.panels)))
      },
      _getList: function () {
        return this.tablist || this.element.find('ol, ul').eq(0)
      },
      _createPanel: function (e) {
        return t('<div>')
          .attr('id', e)
          .data('ui-tabs-destroy', !0)
      },
      _setOptionDisabled: function (e) {
        var i, s, n
        for (
          t.isArray(e) &&
            (e.length
              ? e.length === this.anchors.length && (e = !0)
              : (e = !1)),
            n = 0;
          (s = this.tabs[n]);
          n++
        )
          (i = t(s)),
            e === !0 || -1 !== t.inArray(n, e)
              ? (i.attr('aria-disabled', 'true'),
                this._addClass(i, null, 'ui-state-disabled'))
              : (i.removeAttr('aria-disabled'),
                this._removeClass(i, null, 'ui-state-disabled'))
        ;(this.options.disabled = e),
          this._toggleClass(
            this.widget(),
            this.widgetFullName + '-disabled',
            null,
            e === !0
          )
      },
      _setupEvents: function (e) {
        var i = {}
        e &&
          t.each(e.split(' '), function (t, e) {
            i[e] = '_eventHandler'
          }),
          this._off(this.anchors.add(this.tabs).add(this.panels)),
          this._on(!0, this.anchors, {
            click: function (t) {
              t.preventDefault()
            }
          }),
          this._on(this.anchors, i),
          this._on(this.tabs, { keydown: '_tabKeydown' }),
          this._on(this.panels, { keydown: '_panelKeydown' }),
          this._focusable(this.tabs),
          this._hoverable(this.tabs)
      },
      _setupHeightStyle: function (e) {
        var i,
          s = this.element.parent()
        'fill' === e
          ? ((i = s.height()),
            (i -= this.element.outerHeight() - this.element.height()),
            this.element.siblings(':visible').each(function () {
              var e = t(this),
                s = e.css('position')
              'absolute' !== s && 'fixed' !== s && (i -= e.outerHeight(!0))
            }),
            this.element
              .children()
              .not(this.panels)
              .each(function () {
                i -= t(this).outerHeight(!0)
              }),
            this.panels
              .each(function () {
                t(this).height(
                  Math.max(0, i - t(this).innerHeight() + t(this).height())
                )
              })
              .css('overflow', 'auto'))
          : 'auto' === e &&
            ((i = 0),
            this.panels
              .each(function () {
                i = Math.max(
                  i,
                  t(this)
                    .height('')
                    .height()
                )
              })
              .height(i))
      },
      _eventHandler: function (e) {
        var i = this.options,
          s = this.active,
          n = t(e.currentTarget),
          o = n.closest('li'),
          a = o[0] === s[0],
          r = a && i.collapsible,
          h = r ? t() : this._getPanelForTab(o),
          l = s.length ? this._getPanelForTab(s) : t(),
          u = { oldTab: s, oldPanel: l, newTab: r ? t() : o, newPanel: h }
        e.preventDefault(),
          o.hasClass('ui-state-disabled') ||
            o.hasClass('ui-tabs-loading') ||
            this.running ||
            (a && !i.collapsible) ||
            this._trigger('beforeActivate', e, u) === !1 ||
            ((i.active = r ? !1 : this.tabs.index(o)),
            (this.active = a ? t() : o),
            this.xhr && this.xhr.abort(),
            l.length ||
              h.length ||
              t.error('jQuery UI Tabs: Mismatching fragment identifier.'),
            h.length && this.load(this.tabs.index(o), e),
            this._toggle(e, u))
      },
      _toggle: function (e, i) {
        function s () {
          ;(o.running = !1), o._trigger('activate', e, i)
        }
        function n () {
          o._addClass(
            i.newTab.closest('li'),
            'ui-tabs-active',
            'ui-state-active'
          ),
            a.length && o.options.show
              ? o._show(a, o.options.show, s)
              : (a.show(), s())
        }
        var o = this,
          a = i.newPanel,
          r = i.oldPanel
        ;(this.running = !0),
          r.length && this.options.hide
            ? this._hide(r, this.options.hide, function () {
                o._removeClass(
                  i.oldTab.closest('li'),
                  'ui-tabs-active',
                  'ui-state-active'
                ),
                  n()
              })
            : (this._removeClass(
                i.oldTab.closest('li'),
                'ui-tabs-active',
                'ui-state-active'
              ),
              r.hide(),
              n()),
          r.attr('aria-hidden', 'true'),
          i.oldTab.attr({ 'aria-selected': 'false', 'aria-expanded': 'false' }),
          a.length && r.length
            ? i.oldTab.attr('tabIndex', -1)
            : a.length &&
              this.tabs
                .filter(function () {
                  return 0 === t(this).attr('tabIndex')
                })
                .attr('tabIndex', -1),
          a.attr('aria-hidden', 'false'),
          i.newTab.attr({
            'aria-selected': 'true',
            'aria-expanded': 'true',
            tabIndex: 0
          })
      },
      _activate: function (e) {
        var i,
          s = this._findActive(e)
        s[0] !== this.active[0] &&
          (s.length || (s = this.active),
          (i = s.find('.ui-tabs-anchor')[0]),
          this._eventHandler({
            target: i,
            currentTarget: i,
            preventDefault: t.noop
          }))
      },
      _findActive: function (e) {
        return e === !1 ? t() : this.tabs.eq(e)
      },
      _getIndex: function (e) {
        return (
          'string' == typeof e &&
            (e = this.anchors.index(
              this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']")
            )),
          e
        )
      },
      _destroy: function () {
        this.xhr && this.xhr.abort(),
          this.tablist.removeAttr('role').off(this.eventNamespace),
          this.anchors.removeAttr('role tabIndex').removeUniqueId(),
          this.tabs.add(this.panels).each(function () {
            t.data(this, 'ui-tabs-destroy')
              ? t(this).remove()
              : t(this).removeAttr(
                  'role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded'
                )
          }),
          this.tabs.each(function () {
            var e = t(this),
              i = e.data('ui-tabs-aria-controls')
            i
              ? e.attr('aria-controls', i).removeData('ui-tabs-aria-controls')
              : e.removeAttr('aria-controls')
          }),
          this.panels.show(),
          'content' !== this.options.heightStyle &&
            this.panels.css('height', '')
      },
      enable: function (e) {
        var i = this.options.disabled
        i !== !1 &&
          (void 0 === e
            ? (i = !1)
            : ((e = this._getIndex(e)),
              (i = t.isArray(i)
                ? t.map(i, function (t) {
                    return t !== e ? t : null
                  })
                : t.map(this.tabs, function (t, i) {
                    return i !== e ? i : null
                  }))),
          this._setOptionDisabled(i))
      },
      disable: function (e) {
        var i = this.options.disabled
        if (i !== !0) {
          if (void 0 === e) i = !0
          else {
            if (((e = this._getIndex(e)), -1 !== t.inArray(e, i))) return
            i = t.isArray(i) ? t.merge([e], i).sort() : [e]
          }
          this._setOptionDisabled(i)
        }
      },
      load: function (e, i) {
        e = this._getIndex(e)
        var s = this,
          n = this.tabs.eq(e),
          o = n.find('.ui-tabs-anchor'),
          a = this._getPanelForTab(n),
          r = { tab: n, panel: a },
          h = function (t, e) {
            'abort' === e && s.panels.stop(!1, !0),
              s._removeClass(n, 'ui-tabs-loading'),
              a.removeAttr('aria-busy'),
              t === s.xhr && delete s.xhr
          }
        this._isLocal(o[0]) ||
          ((this.xhr = t.ajax(this._ajaxSettings(o, i, r))),
          this.xhr &&
            'canceled' !== this.xhr.statusText &&
            (this._addClass(n, 'ui-tabs-loading'),
            a.attr('aria-busy', 'true'),
            this.xhr
              .done(function (t, e, n) {
                setTimeout(function () {
                  a.html(t), s._trigger('load', i, r), h(n, e)
                }, 1)
              })
              .fail(function (t, e) {
                setTimeout(function () {
                  h(t, e)
                }, 1)
              })))
      },
      _ajaxSettings: function (e, i, s) {
        var n = this
        return {
          url: e.attr('href').replace(/#.*$/, ''),
          beforeSend: function (e, o) {
            return n._trigger(
              'beforeLoad',
              i,
              t.extend({ jqXHR: e, ajaxSettings: o }, s)
            )
          }
        }
      },
      _getPanelForTab: function (e) {
        var i = t(e).attr('aria-controls')
        return this.element.find(this._sanitizeSelector('#' + i))
      }
    }),
    t.uiBackCompat !== !1 &&
      t.widget('ui.tabs', t.ui.tabs, {
        _processTabs: function () {
          this._superApply(arguments), this._addClass(this.tabs, 'ui-tab')
        }
      }),
    t.ui.tabs,
    t.widget('ui.tooltip', {
      version: '1.12.1',
      options: {
        classes: { 'ui-tooltip': 'ui-corner-all ui-widget-shadow' },
        content: function () {
          var e = t(this).attr('title') || ''
          return t('<a>')
            .text(e)
            .html()
        },
        hide: !0,
        items: '[title]:not([disabled])',
        position: {
          my: 'left top+15',
          at: 'left bottom',
          collision: 'flipfit flip'
        },
        show: !0,
        track: !1,
        close: null,
        open: null
      },
      _addDescribedBy: function (e, i) {
        var s = (e.attr('aria-describedby') || '').split(/\s+/)
        s.push(i),
          e
            .data('ui-tooltip-id', i)
            .attr('aria-describedby', t.trim(s.join(' ')))
      },
      _removeDescribedBy: function (e) {
        var i = e.data('ui-tooltip-id'),
          s = (e.attr('aria-describedby') || '').split(/\s+/),
          n = t.inArray(i, s)
        ;-1 !== n && s.splice(n, 1),
          e.removeData('ui-tooltip-id'),
          (s = t.trim(s.join(' '))),
          s ? e.attr('aria-describedby', s) : e.removeAttr('aria-describedby')
      },
      _create: function () {
        this._on({ mouseover: 'open', focusin: 'open' }),
          (this.tooltips = {}),
          (this.parents = {}),
          (this.liveRegion = t('<div>')
            .attr({
              role: 'log',
              'aria-live': 'assertive',
              'aria-relevant': 'additions'
            })
            .appendTo(this.document[0].body)),
          this._addClass(this.liveRegion, null, 'ui-helper-hidden-accessible'),
          (this.disabledTitles = t([]))
      },
      _setOption: function (e, i) {
        var s = this
        this._super(e, i),
          'content' === e &&
            t.each(this.tooltips, function (t, e) {
              s._updateContent(e.element)
            })
      },
      _setOptionDisabled: function (t) {
        this[t ? '_disable' : '_enable']()
      },
      _disable: function () {
        var e = this
        t.each(this.tooltips, function (i, s) {
          var n = t.Event('blur')
          ;(n.target = n.currentTarget = s.element[0]), e.close(n, !0)
        }),
          (this.disabledTitles = this.disabledTitles.add(
            this.element
              .find(this.options.items)
              .addBack()
              .filter(function () {
                var e = t(this)
                return e.is('[title]')
                  ? e
                      .data('ui-tooltip-title', e.attr('title'))
                      .removeAttr('title')
                  : void 0
              })
          ))
      },
      _enable: function () {
        this.disabledTitles.each(function () {
          var e = t(this)
          e.data('ui-tooltip-title') &&
            e.attr('title', e.data('ui-tooltip-title'))
        }),
          (this.disabledTitles = t([]))
      },
      open: function (e) {
        var i = this,
          s = t(e ? e.target : this.element).closest(this.options.items)
        s.length &&
          !s.data('ui-tooltip-id') &&
          (s.attr('title') && s.data('ui-tooltip-title', s.attr('title')),
          s.data('ui-tooltip-open', !0),
          e &&
            'mouseover' === e.type &&
            s.parents().each(function () {
              var e,
                s = t(this)
              s.data('ui-tooltip-open') &&
                ((e = t.Event('blur')),
                (e.target = e.currentTarget = this),
                i.close(e, !0)),
                s.attr('title') &&
                  (s.uniqueId(),
                  (i.parents[this.id] = {
                    element: this,
                    title: s.attr('title')
                  }),
                  s.attr('title', ''))
            }),
          this._registerCloseHandlers(e, s),
          this._updateContent(s, e))
      },
      _updateContent: function (t, e) {
        var i,
          s = this.options.content,
          n = this,
          o = e ? e.type : null
        return 'string' == typeof s || s.nodeType || s.jquery
          ? this._open(e, t, s)
          : ((i = s.call(t[0], function (i) {
              n._delay(function () {
                t.data('ui-tooltip-open') &&
                  (e && (e.type = o), this._open(e, t, i))
              })
            })),
            i && this._open(e, t, i),
            void 0)
      },
      _open: function (e, i, s) {
        function n (t) {
          ;(l.of = t), a.is(':hidden') || a.position(l)
        }
        var o,
          a,
          r,
          h,
          l = t.extend({}, this.options.position)
        if (s) {
          if ((o = this._find(i)))
            return o.tooltip.find('.ui-tooltip-content').html(s), void 0
          i.is('[title]') &&
            (e && 'mouseover' === e.type
              ? i.attr('title', '')
              : i.removeAttr('title')),
            (o = this._tooltip(i)),
            (a = o.tooltip),
            this._addDescribedBy(i, a.attr('id')),
            a.find('.ui-tooltip-content').html(s),
            this.liveRegion.children().hide(),
            (h = t('<div>').html(a.find('.ui-tooltip-content').html())),
            h
              .removeAttr('name')
              .find('[name]')
              .removeAttr('name'),
            h
              .removeAttr('id')
              .find('[id]')
              .removeAttr('id'),
            h.appendTo(this.liveRegion),
            this.options.track && e && /^mouse/.test(e.type)
              ? (this._on(this.document, { mousemove: n }), n(e))
              : a.position(t.extend({ of: i }, this.options.position)),
            a.hide(),
            this._show(a, this.options.show),
            this.options.track &&
              this.options.show &&
              this.options.show.delay &&
              (r = this.delayedShow = setInterval(function () {
                a.is(':visible') && (n(l.of), clearInterval(r))
              }, t.fx.interval)),
            this._trigger('open', e, { tooltip: a })
        }
      },
      _registerCloseHandlers: function (e, i) {
        var s = {
          keyup: function (e) {
            if (e.keyCode === t.ui.keyCode.ESCAPE) {
              var s = t.Event(e)
              ;(s.currentTarget = i[0]), this.close(s, !0)
            }
          }
        }
        i[0] !== this.element[0] &&
          (s.remove = function () {
            this._removeTooltip(this._find(i).tooltip)
          }),
          (e && 'mouseover' !== e.type) || (s.mouseleave = 'close'),
          (e && 'focusin' !== e.type) || (s.focusout = 'close'),
          this._on(!0, i, s)
      },
      close: function (e) {
        var i,
          s = this,
          n = t(e ? e.currentTarget : this.element),
          o = this._find(n)
        return o
          ? ((i = o.tooltip),
            o.closing ||
              (clearInterval(this.delayedShow),
              n.data('ui-tooltip-title') &&
                !n.attr('title') &&
                n.attr('title', n.data('ui-tooltip-title')),
              this._removeDescribedBy(n),
              (o.hiding = !0),
              i.stop(!0),
              this._hide(i, this.options.hide, function () {
                s._removeTooltip(t(this))
              }),
              n.removeData('ui-tooltip-open'),
              this._off(n, 'mouseleave focusout keyup'),
              n[0] !== this.element[0] && this._off(n, 'remove'),
              this._off(this.document, 'mousemove'),
              e &&
                'mouseleave' === e.type &&
                t.each(this.parents, function (e, i) {
                  t(i.element).attr('title', i.title), delete s.parents[e]
                }),
              (o.closing = !0),
              this._trigger('close', e, { tooltip: i }),
              o.hiding || (o.closing = !1)),
            void 0)
          : (n.removeData('ui-tooltip-open'), void 0)
      },
      _tooltip: function (e) {
        var i = t('<div>').attr('role', 'tooltip'),
          s = t('<div>').appendTo(i),
          n = i.uniqueId().attr('id')
        return (
          this._addClass(s, 'ui-tooltip-content'),
          this._addClass(i, 'ui-tooltip', 'ui-widget ui-widget-content'),
          i.appendTo(this._appendTo(e)),
          (this.tooltips[n] = { element: e, tooltip: i })
        )
      },
      _find: function (t) {
        var e = t.data('ui-tooltip-id')
        return e ? this.tooltips[e] : null
      },
      _removeTooltip: function (t) {
        t.remove(), delete this.tooltips[t.attr('id')]
      },
      _appendTo: function (t) {
        var e = t.closest('.ui-front, dialog')
        return e.length || (e = this.document[0].body), e
      },
      _destroy: function () {
        var e = this
        t.each(this.tooltips, function (i, s) {
          var n = t.Event('blur'),
            o = s.element
          ;(n.target = n.currentTarget = o[0]),
            e.close(n, !0),
            t('#' + i).remove(),
            o.data('ui-tooltip-title') &&
              (o.attr('title') || o.attr('title', o.data('ui-tooltip-title')),
              o.removeData('ui-tooltip-title'))
        }),
          this.liveRegion.remove()
      }
    }),
    t.uiBackCompat !== !1 &&
      t.widget('ui.tooltip', t.ui.tooltip, {
        options: { tooltipClass: null },
        _tooltip: function () {
          var t = this._superApply(arguments)
          return (
            this.options.tooltipClass &&
              t.tooltip.addClass(this.options.tooltipClass),
            t
          )
        }
      }),
    t.ui.tooltip
  var f = 'ui-effects-',
    m = 'ui-effects-style',
    g = 'ui-effects-animated',
    _ = t
  ;(t.effects = { effect: {} }),
    (function (t, e) {
      function i (t, e, i) {
        var s = c[e.type] || {}
        return null == t
          ? i || !e.def
            ? null
            : e.def
          : ((t = s.floor ? ~~t : parseFloat(t)),
            isNaN(t)
              ? e.def
              : s.mod
              ? (t + s.mod) % s.mod
              : 0 > t
              ? 0
              : t > s.max
              ? s.max
              : t)
      }
      function s (i) {
        var s = l(),
          n = (s._rgba = [])
        return (
          (i = i.toLowerCase()),
          f(h, function (t, o) {
            var a,
              r = o.re.exec(i),
              h = r && o.parse(r),
              l = o.space || 'rgba'
            return h
              ? ((a = s[l](h)),
                (s[u[l].cache] = a[u[l].cache]),
                (n = s._rgba = a._rgba),
                !1)
              : e
          }),
          n.length
            ? ('0,0,0,0' === n.join() && t.extend(n, o.transparent), s)
            : o[i]
        )
      }
      function n (t, e, i) {
        return (
          (i = (i + 1) % 1),
          1 > 6 * i
            ? t + 6 * (e - t) * i
            : 1 > 2 * i
            ? e
            : 2 > 3 * i
            ? t + 6 * (e - t) * (2 / 3 - i)
            : t
        )
      }
      var o,
        a =
          'backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor',
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        h = [
          {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (t) {
              return [t[1], t[2], t[3], t[4]]
            }
          },
          {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (t) {
              return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
          },
          {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function (t) {
              return [
                parseInt(t[1], 16),
                parseInt(t[2], 16),
                parseInt(t[3], 16)
              ]
            }
          },
          {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function (t) {
              return [
                parseInt(t[1] + t[1], 16),
                parseInt(t[2] + t[2], 16),
                parseInt(t[3] + t[3], 16)
              ]
            }
          },
          {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: 'hsla',
            parse: function (t) {
              return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
          }
        ],
        l = (t.Color = function (e, i, s, n) {
          return new t.Color.fn.parse(e, i, s, n)
        }),
        u = {
          rgba: {
            props: {
              red: { idx: 0, type: 'byte' },
              green: { idx: 1, type: 'byte' },
              blue: { idx: 2, type: 'byte' }
            }
          },
          hsla: {
            props: {
              hue: { idx: 0, type: 'degrees' },
              saturation: { idx: 1, type: 'percent' },
              lightness: { idx: 2, type: 'percent' }
            }
          }
        },
        c = {
          byte: { floor: !0, max: 255 },
          percent: { max: 1 },
          degrees: { mod: 360, floor: !0 }
        },
        d = (l.support = {}),
        p = t('<p>')[0],
        f = t.each
      ;(p.style.cssText = 'background-color:rgba(1,1,1,.5)'),
        (d.rgba = p.style.backgroundColor.indexOf('rgba') > -1),
        f(u, function (t, e) {
          ;(e.cache = '_' + t),
            (e.props.alpha = { idx: 3, type: 'percent', def: 1 })
        }),
        (l.fn = t.extend(l.prototype, {
          parse: function (n, a, r, h) {
            if (n === e) return (this._rgba = [null, null, null, null]), this
            ;(n.jquery || n.nodeType) && ((n = t(n).css(a)), (a = e))
            var c = this,
              d = t.type(n),
              p = (this._rgba = [])
            return (
              a !== e && ((n = [n, a, r, h]), (d = 'array')),
              'string' === d
                ? this.parse(s(n) || o._default)
                : 'array' === d
                ? (f(u.rgba.props, function (t, e) {
                    p[e.idx] = i(n[e.idx], e)
                  }),
                  this)
                : 'object' === d
                ? (n instanceof l
                    ? f(u, function (t, e) {
                        n[e.cache] && (c[e.cache] = n[e.cache].slice())
                      })
                    : f(u, function (e, s) {
                        var o = s.cache
                        f(s.props, function (t, e) {
                          if (!c[o] && s.to) {
                            if ('alpha' === t || null == n[t]) return
                            c[o] = s.to(c._rgba)
                          }
                          c[o][e.idx] = i(n[t], e, !0)
                        }),
                          c[o] &&
                            0 > t.inArray(null, c[o].slice(0, 3)) &&
                            ((c[o][3] = 1), s.from && (c._rgba = s.from(c[o])))
                      }),
                  this)
                : e
            )
          },
          is: function (t) {
            var i = l(t),
              s = !0,
              n = this
            return (
              f(u, function (t, o) {
                var a,
                  r = i[o.cache]
                return (
                  r &&
                    ((a = n[o.cache] || (o.to && o.to(n._rgba)) || []),
                    f(o.props, function (t, i) {
                      return null != r[i.idx] ? (s = r[i.idx] === a[i.idx]) : e
                    })),
                  s
                )
              }),
              s
            )
          },
          _space: function () {
            var t = [],
              e = this
            return (
              f(u, function (i, s) {
                e[s.cache] && t.push(i)
              }),
              t.pop()
            )
          },
          transition: function (t, e) {
            var s = l(t),
              n = s._space(),
              o = u[n],
              a = 0 === this.alpha() ? l('transparent') : this,
              r = a[o.cache] || o.to(a._rgba),
              h = r.slice()
            return (
              (s = s[o.cache]),
              f(o.props, function (t, n) {
                var o = n.idx,
                  a = r[o],
                  l = s[o],
                  u = c[n.type] || {}
                null !== l &&
                  (null === a
                    ? (h[o] = l)
                    : (u.mod &&
                        (l - a > u.mod / 2
                          ? (a += u.mod)
                          : a - l > u.mod / 2 && (a -= u.mod)),
                      (h[o] = i((l - a) * e + a, n))))
              }),
              this[n](h)
            )
          },
          blend: function (e) {
            if (1 === this._rgba[3]) return this
            var i = this._rgba.slice(),
              s = i.pop(),
              n = l(e)._rgba
            return l(
              t.map(i, function (t, e) {
                return (1 - s) * n[e] + s * t
              })
            )
          },
          toRgbaString: function () {
            var e = 'rgba(',
              i = t.map(this._rgba, function (t, e) {
                return null == t ? (e > 2 ? 1 : 0) : t
              })
            return 1 === i[3] && (i.pop(), (e = 'rgb(')), e + i.join() + ')'
          },
          toHslaString: function () {
            var e = 'hsla(',
              i = t.map(this.hsla(), function (t, e) {
                return (
                  null == t && (t = e > 2 ? 1 : 0),
                  e && 3 > e && (t = Math.round(100 * t) + '%'),
                  t
                )
              })
            return 1 === i[3] && (i.pop(), (e = 'hsl(')), e + i.join() + ')'
          },
          toHexString: function (e) {
            var i = this._rgba.slice(),
              s = i.pop()
            return (
              e && i.push(~~(255 * s)),
              '#' +
                t
                  .map(i, function (t) {
                    return (
                      (t = (t || 0).toString(16)), 1 === t.length ? '0' + t : t
                    )
                  })
                  .join('')
            )
          },
          toString: function () {
            return 0 === this._rgba[3] ? 'transparent' : this.toRgbaString()
          }
        })),
        (l.fn.parse.prototype = l.fn),
        (u.hsla.to = function (t) {
          if (null == t[0] || null == t[1] || null == t[2])
            return [null, null, null, t[3]]
          var e,
            i,
            s = t[0] / 255,
            n = t[1] / 255,
            o = t[2] / 255,
            a = t[3],
            r = Math.max(s, n, o),
            h = Math.min(s, n, o),
            l = r - h,
            u = r + h,
            c = 0.5 * u
          return (
            (e =
              h === r
                ? 0
                : s === r
                ? (60 * (n - o)) / l + 360
                : n === r
                ? (60 * (o - s)) / l + 120
                : (60 * (s - n)) / l + 240),
            (i = 0 === l ? 0 : 0.5 >= c ? l / u : l / (2 - u)),
            [Math.round(e) % 360, i, c, null == a ? 1 : a]
          )
        }),
        (u.hsla.from = function (t) {
          if (null == t[0] || null == t[1] || null == t[2])
            return [null, null, null, t[3]]
          var e = t[0] / 360,
            i = t[1],
            s = t[2],
            o = t[3],
            a = 0.5 >= s ? s * (1 + i) : s + i - s * i,
            r = 2 * s - a
          return [
            Math.round(255 * n(r, a, e + 1 / 3)),
            Math.round(255 * n(r, a, e)),
            Math.round(255 * n(r, a, e - 1 / 3)),
            o
          ]
        }),
        f(u, function (s, n) {
          var o = n.props,
            a = n.cache,
            h = n.to,
            u = n.from
          ;(l.fn[s] = function (s) {
            if ((h && !this[a] && (this[a] = h(this._rgba)), s === e))
              return this[a].slice()
            var n,
              r = t.type(s),
              c = 'array' === r || 'object' === r ? s : arguments,
              d = this[a].slice()
            return (
              f(o, function (t, e) {
                var s = c['object' === r ? t : e.idx]
                null == s && (s = d[e.idx]), (d[e.idx] = i(s, e))
              }),
              u ? ((n = l(u(d))), (n[a] = d), n) : l(d)
            )
          }),
            f(o, function (e, i) {
              l.fn[e] ||
                (l.fn[e] = function (n) {
                  var o,
                    a = t.type(n),
                    h = 'alpha' === e ? (this._hsla ? 'hsla' : 'rgba') : s,
                    l = this[h](),
                    u = l[i.idx]
                  return 'undefined' === a
                    ? u
                    : ('function' === a &&
                        ((n = n.call(this, u)), (a = t.type(n))),
                      null == n && i.empty
                        ? this
                        : ('string' === a &&
                            ((o = r.exec(n)),
                            o &&
                              (n =
                                u +
                                parseFloat(o[2]) * ('+' === o[1] ? 1 : -1))),
                          (l[i.idx] = n),
                          this[h](l)))
                })
            })
        }),
        (l.hook = function (e) {
          var i = e.split(' ')
          f(i, function (e, i) {
            ;(t.cssHooks[i] = {
              set: function (e, n) {
                var o,
                  a,
                  r = ''
                if (
                  'transparent' !== n &&
                  ('string' !== t.type(n) || (o = s(n)))
                ) {
                  if (((n = l(o || n)), !d.rgba && 1 !== n._rgba[3])) {
                    for (
                      a = 'backgroundColor' === i ? e.parentNode : e;
                      ('' === r || 'transparent' === r) && a && a.style;

                    )
                      try {
                        ;(r = t.css(a, 'backgroundColor')), (a = a.parentNode)
                      } catch (h) {}
                    n = n.blend(r && 'transparent' !== r ? r : '_default')
                  }
                  n = n.toRgbaString()
                }
                try {
                  e.style[i] = n
                } catch (h) {}
              }
            }),
              (t.fx.step[i] = function (e) {
                e.colorInit ||
                  ((e.start = l(e.elem, i)),
                  (e.end = l(e.end)),
                  (e.colorInit = !0)),
                  t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
              })
          })
        }),
        l.hook(a),
        (t.cssHooks.borderColor = {
          expand: function (t) {
            var e = {}
            return (
              f(['Top', 'Right', 'Bottom', 'Left'], function (i, s) {
                e['border' + s + 'Color'] = t
              }),
              e
            )
          }
        }),
        (o = t.Color.names = {
          aqua: '#00ffff',
          black: '#000000',
          blue: '#0000ff',
          fuchsia: '#ff00ff',
          gray: '#808080',
          green: '#008000',
          lime: '#00ff00',
          maroon: '#800000',
          navy: '#000080',
          olive: '#808000',
          purple: '#800080',
          red: '#ff0000',
          silver: '#c0c0c0',
          teal: '#008080',
          white: '#ffffff',
          yellow: '#ffff00',
          transparent: [null, null, null, 0],
          _default: '#ffffff'
        })
    })(_),
    (function () {
      function e (e) {
        var i,
          s,
          n = e.ownerDocument.defaultView
            ? e.ownerDocument.defaultView.getComputedStyle(e, null)
            : e.currentStyle,
          o = {}
        if (n && n.length && n[0] && n[n[0]])
          for (s = n.length; s--; )
            (i = n[s]), 'string' == typeof n[i] && (o[t.camelCase(i)] = n[i])
        else for (i in n) 'string' == typeof n[i] && (o[i] = n[i])
        return o
      }
      function i (e, i) {
        var s,
          o,
          a = {}
        for (s in i)
          (o = i[s]),
            e[s] !== o &&
              (n[s] || ((t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o)))
        return a
      }
      var s = ['add', 'remove', 'toggle'],
        n = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1
        }
      t.each(
        [
          'borderLeftStyle',
          'borderRightStyle',
          'borderBottomStyle',
          'borderTopStyle'
        ],
        function (e, i) {
          t.fx.step[i] = function (t) {
            ;(('none' !== t.end && !t.setAttr) ||
              (1 === t.pos && !t.setAttr)) &&
              (_.style(t.elem, i, t.end), (t.setAttr = !0))
          }
        }
      ),
        t.fn.addBack ||
          (t.fn.addBack = function (t) {
            return this.add(
              null == t ? this.prevObject : this.prevObject.filter(t)
            )
          }),
        (t.effects.animateClass = function (n, o, a, r) {
          var h = t.speed(o, a, r)
          return this.queue(function () {
            var o,
              a = t(this),
              r = a.attr('class') || '',
              l = h.children ? a.find('*').addBack() : a
            ;(l = l.map(function () {
              var i = t(this)
              return { el: i, start: e(this) }
            })),
              (o = function () {
                t.each(s, function (t, e) {
                  n[e] && a[e + 'Class'](n[e])
                })
              }),
              o(),
              (l = l.map(function () {
                return (
                  (this.end = e(this.el[0])),
                  (this.diff = i(this.start, this.end)),
                  this
                )
              })),
              a.attr('class', r),
              (l = l.map(function () {
                var e = this,
                  i = t.Deferred(),
                  s = t.extend({}, h, {
                    queue: !1,
                    complete: function () {
                      i.resolve(e)
                    }
                  })
                return this.el.animate(this.diff, s), i.promise()
              })),
              t.when.apply(t, l.get()).done(function () {
                o(),
                  t.each(arguments, function () {
                    var e = this.el
                    t.each(this.diff, function (t) {
                      e.css(t, '')
                    })
                  }),
                  h.complete.call(a[0])
              })
          })
        }),
        t.fn.extend({
          addClass: (function (e) {
            return function (i, s, n, o) {
              return s
                ? t.effects.animateClass.call(this, { add: i }, s, n, o)
                : e.apply(this, arguments)
            }
          })(t.fn.addClass),
          removeClass: (function (e) {
            return function (i, s, n, o) {
              return arguments.length > 1
                ? t.effects.animateClass.call(this, { remove: i }, s, n, o)
                : e.apply(this, arguments)
            }
          })(t.fn.removeClass),
          toggleClass: (function (e) {
            return function (i, s, n, o, a) {
              return 'boolean' == typeof s || void 0 === s
                ? n
                  ? t.effects.animateClass.call(
                      this,
                      s ? { add: i } : { remove: i },
                      n,
                      o,
                      a
                    )
                  : e.apply(this, arguments)
                : t.effects.animateClass.call(this, { toggle: i }, s, n, o)
            }
          })(t.fn.toggleClass),
          switchClass: function (e, i, s, n, o) {
            return t.effects.animateClass.call(
              this,
              { add: i, remove: e },
              s,
              n,
              o
            )
          }
        })
    })(),
    (function () {
      function e (e, i, s, n) {
        return (
          t.isPlainObject(e) && ((i = e), (e = e.effect)),
          (e = { effect: e }),
          null == i && (i = {}),
          t.isFunction(i) && ((n = i), (s = null), (i = {})),
          ('number' == typeof i || t.fx.speeds[i]) &&
            ((n = s), (s = i), (i = {})),
          t.isFunction(s) && ((n = s), (s = null)),
          i && t.extend(e, i),
          (s = s || i.duration),
          (e.duration = t.fx.off
            ? 0
            : 'number' == typeof s
            ? s
            : s in t.fx.speeds
            ? t.fx.speeds[s]
            : t.fx.speeds._default),
          (e.complete = n || i.complete),
          e
        )
      }
      function i (e) {
        return !e || 'number' == typeof e || t.fx.speeds[e]
          ? !0
          : 'string' != typeof e || t.effects.effect[e]
          ? t.isFunction(e)
            ? !0
            : 'object' != typeof e || e.effect
            ? !1
            : !0
          : !0
      }
      function s (t, e) {
        var i = e.outerWidth(),
          s = e.outerHeight(),
          n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
          o = n.exec(t) || ['', 0, i, s, 0]
        return {
          top: parseFloat(o[1]) || 0,
          right: 'auto' === o[2] ? i : parseFloat(o[2]),
          bottom: 'auto' === o[3] ? s : parseFloat(o[3]),
          left: parseFloat(o[4]) || 0
        }
      }
      t.expr &&
        t.expr.filters &&
        t.expr.filters.animated &&
        (t.expr.filters.animated = (function (e) {
          return function (i) {
            return !!t(i).data(g) || e(i)
          }
        })(t.expr.filters.animated)),
        t.uiBackCompat !== !1 &&
          t.extend(t.effects, {
            save: function (t, e) {
              for (var i = 0, s = e.length; s > i; i++)
                null !== e[i] && t.data(f + e[i], t[0].style[e[i]])
            },
            restore: function (t, e) {
              for (var i, s = 0, n = e.length; n > s; s++)
                null !== e[s] && ((i = t.data(f + e[s])), t.css(e[s], i))
            },
            setMode: function (t, e) {
              return (
                'toggle' === e && (e = t.is(':hidden') ? 'show' : 'hide'), e
              )
            },
            createWrapper: function (e) {
              if (e.parent().is('.ui-effects-wrapper')) return e.parent()
              var i = {
                  width: e.outerWidth(!0),
                  height: e.outerHeight(!0),
                  float: e.css('float')
                },
                s = t('<div></div>')
                  .addClass('ui-effects-wrapper')
                  .css({
                    fontSize: '100%',
                    background: 'transparent',
                    border: 'none',
                    margin: 0,
                    padding: 0
                  }),
                n = { width: e.width(), height: e.height() },
                o = document.activeElement
              try {
                o.id
              } catch (a) {
                o = document.body
              }
              return (
                e.wrap(s),
                (e[0] === o || t.contains(e[0], o)) && t(o).trigger('focus'),
                (s = e.parent()),
                'static' === e.css('position')
                  ? (s.css({ position: 'relative' }),
                    e.css({ position: 'relative' }))
                  : (t.extend(i, {
                      position: e.css('position'),
                      zIndex: e.css('z-index')
                    }),
                    t.each(['top', 'left', 'bottom', 'right'], function (t, s) {
                      ;(i[s] = e.css(s)),
                        isNaN(parseInt(i[s], 10)) && (i[s] = 'auto')
                    }),
                    e.css({
                      position: 'relative',
                      top: 0,
                      left: 0,
                      right: 'auto',
                      bottom: 'auto'
                    })),
                e.css(n),
                s.css(i).show()
              )
            },
            removeWrapper: function (e) {
              var i = document.activeElement
              return (
                e.parent().is('.ui-effects-wrapper') &&
                  (e.parent().replaceWith(e),
                  (e[0] === i || t.contains(e[0], i)) && t(i).trigger('focus')),
                e
              )
            }
          }),
        t.extend(t.effects, {
          version: '1.12.1',
          define: function (e, i, s) {
            return (
              s || ((s = i), (i = 'effect')),
              (t.effects.effect[e] = s),
              (t.effects.effect[e].mode = i),
              s
            )
          },
          scaledDimensions: function (t, e, i) {
            if (0 === e)
              return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }
            var s = 'horizontal' !== i ? (e || 100) / 100 : 1,
              n = 'vertical' !== i ? (e || 100) / 100 : 1
            return {
              height: t.height() * n,
              width: t.width() * s,
              outerHeight: t.outerHeight() * n,
              outerWidth: t.outerWidth() * s
            }
          },
          clipToBox: function (t) {
            return {
              width: t.clip.right - t.clip.left,
              height: t.clip.bottom - t.clip.top,
              left: t.clip.left,
              top: t.clip.top
            }
          },
          unshift: function (t, e, i) {
            var s = t.queue()
            e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))),
              t.dequeue()
          },
          saveStyle: function (t) {
            t.data(m, t[0].style.cssText)
          },
          restoreStyle: function (t) {
            ;(t[0].style.cssText = t.data(m) || ''), t.removeData(m)
          },
          mode: function (t, e) {
            var i = t.is(':hidden')
            return (
              'toggle' === e && (e = i ? 'show' : 'hide'),
              (i ? 'hide' === e : 'show' === e) && (e = 'none'),
              e
            )
          },
          getBaseline: function (t, e) {
            var i, s
            switch (t[0]) {
              case 'top':
                i = 0
                break
              case 'middle':
                i = 0.5
                break
              case 'bottom':
                i = 1
                break
              default:
                i = t[0] / e.height
            }
            switch (t[1]) {
              case 'left':
                s = 0
                break
              case 'center':
                s = 0.5
                break
              case 'right':
                s = 1
                break
              default:
                s = t[1] / e.width
            }
            return { x: s, y: i }
          },
          createPlaceholder: function (e) {
            var i,
              s = e.css('position'),
              n = e.position()
            return (
              e
                .css({
                  marginTop: e.css('marginTop'),
                  marginBottom: e.css('marginBottom'),
                  marginLeft: e.css('marginLeft'),
                  marginRight: e.css('marginRight')
                })
                .outerWidth(e.outerWidth())
                .outerHeight(e.outerHeight()),
              /^(static|relative)/.test(s) &&
                ((s = 'absolute'),
                (i = t('<' + e[0].nodeName + '>')
                  .insertAfter(e)
                  .css({
                    display: /^(inline|ruby)/.test(e.css('display'))
                      ? 'inline-block'
                      : 'block',
                    visibility: 'hidden',
                    marginTop: e.css('marginTop'),
                    marginBottom: e.css('marginBottom'),
                    marginLeft: e.css('marginLeft'),
                    marginRight: e.css('marginRight'),
                    float: e.css('float')
                  })
                  .outerWidth(e.outerWidth())
                  .outerHeight(e.outerHeight())
                  .addClass('ui-effects-placeholder')),
                e.data(f + 'placeholder', i)),
              e.css({ position: s, left: n.left, top: n.top }),
              i
            )
          },
          removePlaceholder: function (t) {
            var e = f + 'placeholder',
              i = t.data(e)
            i && (i.remove(), t.removeData(e))
          },
          cleanUp: function (e) {
            t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
          },
          setTransition: function (e, i, s, n) {
            return (
              (n = n || {}),
              t.each(i, function (t, i) {
                var o = e.cssUnit(i)
                o[0] > 0 && (n[i] = o[0] * s + o[1])
              }),
              n
            )
          }
        }),
        t.fn.extend({
          effect: function () {
            function i (e) {
              function i () {
                r.removeData(g),
                  t.effects.cleanUp(r),
                  'hide' === s.mode && r.hide(),
                  a()
              }
              function a () {
                t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e()
              }
              var r = t(this)
              ;(s.mode = u.shift()),
                t.uiBackCompat === !1 || o
                  ? 'none' === s.mode
                    ? (r[l](), a())
                    : n.call(r[0], s, i)
                  : (r.is(':hidden')
                    ? 'hide' === l
                    : 'show' === l)
                  ? (r[l](), a())
                  : n.call(r[0], s, a)
            }
            var s = e.apply(this, arguments),
              n = t.effects.effect[s.effect],
              o = n.mode,
              a = s.queue,
              r = a || 'fx',
              h = s.complete,
              l = s.mode,
              u = [],
              c = function (e) {
                var i = t(this),
                  s = t.effects.mode(i, l) || o
                i.data(g, !0),
                  u.push(s),
                  o && ('show' === s || (s === o && 'hide' === s)) && i.show(),
                  (o && 'none' === s) || t.effects.saveStyle(i),
                  t.isFunction(e) && e()
              }
            return t.fx.off || !n
              ? l
                ? this[l](s.duration, h)
                : this.each(function () {
                    h && h.call(this)
                  })
              : a === !1
              ? this.each(c).each(i)
              : this.queue(r, c).queue(r, i)
          },
          show: (function (t) {
            return function (s) {
              if (i(s)) return t.apply(this, arguments)
              var n = e.apply(this, arguments)
              return (n.mode = 'show'), this.effect.call(this, n)
            }
          })(t.fn.show),
          hide: (function (t) {
            return function (s) {
              if (i(s)) return t.apply(this, arguments)
              var n = e.apply(this, arguments)
              return (n.mode = 'hide'), this.effect.call(this, n)
            }
          })(t.fn.hide),
          toggle: (function (t) {
            return function (s) {
              if (i(s) || 'boolean' == typeof s) return t.apply(this, arguments)
              var n = e.apply(this, arguments)
              return (n.mode = 'toggle'), this.effect.call(this, n)
            }
          })(t.fn.toggle),
          cssUnit: function (e) {
            var i = this.css(e),
              s = []
            return (
              t.each(['em', 'px', '%', 'pt'], function (t, e) {
                i.indexOf(e) > 0 && (s = [parseFloat(i), e])
              }),
              s
            )
          },
          cssClip: function (t) {
            return t
              ? this.css(
                  'clip',
                  'rect(' +
                    t.top +
                    'px ' +
                    t.right +
                    'px ' +
                    t.bottom +
                    'px ' +
                    t.left +
                    'px)'
                )
              : s(this.css('clip'), this)
          },
          transfer: function (e, i) {
            var s = t(this),
              n = t(e.to),
              o = 'fixed' === n.css('position'),
              a = t('body'),
              r = o ? a.scrollTop() : 0,
              h = o ? a.scrollLeft() : 0,
              l = n.offset(),
              u = {
                top: l.top - r,
                left: l.left - h,
                height: n.innerHeight(),
                width: n.innerWidth()
              },
              c = s.offset(),
              d = t("<div class='ui-effects-transfer'></div>")
                .appendTo('body')
                .addClass(e.className)
                .css({
                  top: c.top - r,
                  left: c.left - h,
                  height: s.innerHeight(),
                  width: s.innerWidth(),
                  position: o ? 'fixed' : 'absolute'
                })
                .animate(u, e.duration, e.easing, function () {
                  d.remove(), t.isFunction(i) && i()
                })
          }
        }),
        (t.fx.step.clip = function (e) {
          e.clipInit ||
            ((e.start = t(e.elem).cssClip()),
            'string' == typeof e.end && (e.end = s(e.end, e.elem)),
            (e.clipInit = !0)),
            t(e.elem).cssClip({
              top: e.pos * (e.end.top - e.start.top) + e.start.top,
              right: e.pos * (e.end.right - e.start.right) + e.start.right,
              bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
              left: e.pos * (e.end.left - e.start.left) + e.start.left
            })
        })
    })(),
    (function () {
      var e = {}
      t.each(['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'], function (t, i) {
        e[i] = function (e) {
          return Math.pow(e, t + 2)
        }
      }),
        t.extend(e, {
          Sine: function (t) {
            return 1 - Math.cos((t * Math.PI) / 2)
          },
          Circ: function (t) {
            return 1 - Math.sqrt(1 - t * t)
          },
          Elastic: function (t) {
            return 0 === t || 1 === t
              ? t
              : -Math.pow(2, 8 * (t - 1)) *
                  Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15)
          },
          Back: function (t) {
            return t * t * (3 * t - 2)
          },
          Bounce: function (t) {
            for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; );
            return (
              1 / Math.pow(4, 3 - i) -
              7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            )
          }
        }),
        t.each(e, function (e, i) {
          ;(t.easing['easeIn' + e] = i),
            (t.easing['easeOut' + e] = function (t) {
              return 1 - i(1 - t)
            }),
            (t.easing['easeInOut' + e] = function (t) {
              return 0.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            })
        })
    })()
  var v = t.effects
  t.effects.define('blind', 'hide', function (e, i) {
    var s = {
        up: ['bottom', 'top'],
        vertical: ['bottom', 'top'],
        down: ['top', 'bottom'],
        left: ['right', 'left'],
        horizontal: ['right', 'left'],
        right: ['left', 'right']
      },
      n = t(this),
      o = e.direction || 'up',
      a = n.cssClip(),
      r = { clip: t.extend({}, a) },
      h = t.effects.createPlaceholder(n)
    ;(r.clip[s[o][0]] = r.clip[s[o][1]]),
      'show' === e.mode &&
        (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), (r.clip = a)),
      h && h.animate(t.effects.clipToBox(r), e.duration, e.easing),
      n.animate(r, {
        queue: !1,
        duration: e.duration,
        easing: e.easing,
        complete: i
      })
  }),
    t.effects.define('bounce', function (e, i) {
      var s,
        n,
        o,
        a = t(this),
        r = e.mode,
        h = 'hide' === r,
        l = 'show' === r,
        u = e.direction || 'up',
        c = e.distance,
        d = e.times || 5,
        p = 2 * d + (l || h ? 1 : 0),
        f = e.duration / p,
        m = e.easing,
        g = 'up' === u || 'down' === u ? 'top' : 'left',
        _ = 'up' === u || 'left' === u,
        v = 0,
        b = a.queue().length
      for (
        t.effects.createPlaceholder(a),
          o = a.css(g),
          c || (c = a['top' === g ? 'outerHeight' : 'outerWidth']() / 3),
          l &&
            ((n = { opacity: 1 }),
            (n[g] = o),
            a
              .css('opacity', 0)
              .css(g, _ ? 2 * -c : 2 * c)
              .animate(n, f, m)),
          h && (c /= Math.pow(2, d - 1)),
          n = {},
          n[g] = o;
        d > v;
        v++
      )
        (s = {}),
          (s[g] = (_ ? '-=' : '+=') + c),
          a.animate(s, f, m).animate(n, f, m),
          (c = h ? 2 * c : c / 2)
      h &&
        ((s = { opacity: 0 }),
        (s[g] = (_ ? '-=' : '+=') + c),
        a.animate(s, f, m)),
        a.queue(i),
        t.effects.unshift(a, b, p + 1)
    }),
    t.effects.define('clip', 'hide', function (e, i) {
      var s,
        n = {},
        o = t(this),
        a = e.direction || 'vertical',
        r = 'both' === a,
        h = r || 'horizontal' === a,
        l = r || 'vertical' === a
      ;(s = o.cssClip()),
        (n.clip = {
          top: l ? (s.bottom - s.top) / 2 : s.top,
          right: h ? (s.right - s.left) / 2 : s.right,
          bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
          left: h ? (s.right - s.left) / 2 : s.left
        }),
        t.effects.createPlaceholder(o),
        'show' === e.mode && (o.cssClip(n.clip), (n.clip = s)),
        o.animate(n, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: i
        })
    }),
    t.effects.define('drop', 'hide', function (e, i) {
      var s,
        n = t(this),
        o = e.mode,
        a = 'show' === o,
        r = e.direction || 'left',
        h = 'up' === r || 'down' === r ? 'top' : 'left',
        l = 'up' === r || 'left' === r ? '-=' : '+=',
        u = '+=' === l ? '-=' : '+=',
        c = { opacity: 0 }
      t.effects.createPlaceholder(n),
        (s =
          e.distance || n['top' === h ? 'outerHeight' : 'outerWidth'](!0) / 2),
        (c[h] = l + s),
        a && (n.css(c), (c[h] = u + s), (c.opacity = 1)),
        n.animate(c, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: i
        })
    }),
    t.effects.define('explode', 'hide', function (e, i) {
      function s () {
        b.push(this), b.length === c * d && n()
      }
      function n () {
        p.css({ visibility: 'visible' }), t(b).remove(), i()
      }
      var o,
        a,
        r,
        h,
        l,
        u,
        c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
        d = c,
        p = t(this),
        f = e.mode,
        m = 'show' === f,
        g = p
          .show()
          .css('visibility', 'hidden')
          .offset(),
        _ = Math.ceil(p.outerWidth() / d),
        v = Math.ceil(p.outerHeight() / c),
        b = []
      for (o = 0; c > o; o++)
        for (h = g.top + o * v, u = o - (c - 1) / 2, a = 0; d > a; a++)
          (r = g.left + a * _),
            (l = a - (d - 1) / 2),
            p
              .clone()
              .appendTo('body')
              .wrap('<div></div>')
              .css({
                position: 'absolute',
                visibility: 'visible',
                left: -a * _,
                top: -o * v
              })
              .parent()
              .addClass('ui-effects-explode')
              .css({
                position: 'absolute',
                overflow: 'hidden',
                width: _,
                height: v,
                left: r + (m ? l * _ : 0),
                top: h + (m ? u * v : 0),
                opacity: m ? 0 : 1
              })
              .animate(
                {
                  left: r + (m ? 0 : l * _),
                  top: h + (m ? 0 : u * v),
                  opacity: m ? 1 : 0
                },
                e.duration || 500,
                e.easing,
                s
              )
    }),
    t.effects.define('fade', 'toggle', function (e, i) {
      var s = 'show' === e.mode
      t(this)
        .css('opacity', s ? 0 : 1)
        .animate(
          { opacity: s ? 1 : 0 },
          { queue: !1, duration: e.duration, easing: e.easing, complete: i }
        )
    }),
    t.effects.define('fold', 'hide', function (e, i) {
      var s = t(this),
        n = e.mode,
        o = 'show' === n,
        a = 'hide' === n,
        r = e.size || 15,
        h = /([0-9]+)%/.exec(r),
        l = !!e.horizFirst,
        u = l ? ['right', 'bottom'] : ['bottom', 'right'],
        c = e.duration / 2,
        d = t.effects.createPlaceholder(s),
        p = s.cssClip(),
        f = { clip: t.extend({}, p) },
        m = { clip: t.extend({}, p) },
        g = [p[u[0]], p[u[1]]],
        _ = s.queue().length
      h && (r = (parseInt(h[1], 10) / 100) * g[a ? 0 : 1]),
        (f.clip[u[0]] = r),
        (m.clip[u[0]] = r),
        (m.clip[u[1]] = 0),
        o &&
          (s.cssClip(m.clip), d && d.css(t.effects.clipToBox(m)), (m.clip = p)),
        s
          .queue(function (i) {
            d &&
              d
                .animate(t.effects.clipToBox(f), c, e.easing)
                .animate(t.effects.clipToBox(m), c, e.easing),
              i()
          })
          .animate(f, c, e.easing)
          .animate(m, c, e.easing)
          .queue(i),
        t.effects.unshift(s, _, 4)
    }),
    t.effects.define('highlight', 'show', function (e, i) {
      var s = t(this),
        n = { backgroundColor: s.css('backgroundColor') }
      'hide' === e.mode && (n.opacity = 0),
        t.effects.saveStyle(s),
        s
          .css({
            backgroundImage: 'none',
            backgroundColor: e.color || '#ffff99'
          })
          .animate(n, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
          })
    }),
    t.effects.define('size', function (e, i) {
      var s,
        n,
        o,
        a = t(this),
        r = ['fontSize'],
        h = [
          'borderTopWidth',
          'borderBottomWidth',
          'paddingTop',
          'paddingBottom'
        ],
        l = [
          'borderLeftWidth',
          'borderRightWidth',
          'paddingLeft',
          'paddingRight'
        ],
        u = e.mode,
        c = 'effect' !== u,
        d = e.scale || 'both',
        p = e.origin || ['middle', 'center'],
        f = a.css('position'),
        m = a.position(),
        g = t.effects.scaledDimensions(a),
        _ = e.from || g,
        v = e.to || t.effects.scaledDimensions(a, 0)
      t.effects.createPlaceholder(a),
        'show' === u && ((o = _), (_ = v), (v = o)),
        (n = {
          from: { y: _.height / g.height, x: _.width / g.width },
          to: { y: v.height / g.height, x: v.width / g.width }
        }),
        ('box' === d || 'both' === d) &&
          (n.from.y !== n.to.y &&
            ((_ = t.effects.setTransition(a, h, n.from.y, _)),
            (v = t.effects.setTransition(a, h, n.to.y, v))),
          n.from.x !== n.to.x &&
            ((_ = t.effects.setTransition(a, l, n.from.x, _)),
            (v = t.effects.setTransition(a, l, n.to.x, v)))),
        ('content' === d || 'both' === d) &&
          n.from.y !== n.to.y &&
          ((_ = t.effects.setTransition(a, r, n.from.y, _)),
          (v = t.effects.setTransition(a, r, n.to.y, v))),
        p &&
          ((s = t.effects.getBaseline(p, g)),
          (_.top = (g.outerHeight - _.outerHeight) * s.y + m.top),
          (_.left = (g.outerWidth - _.outerWidth) * s.x + m.left),
          (v.top = (g.outerHeight - v.outerHeight) * s.y + m.top),
          (v.left = (g.outerWidth - v.outerWidth) * s.x + m.left)),
        a.css(_),
        ('content' === d || 'both' === d) &&
          ((h = h.concat(['marginTop', 'marginBottom']).concat(r)),
          (l = l.concat(['marginLeft', 'marginRight'])),
          a.find('*[width]').each(function () {
            var i = t(this),
              s = t.effects.scaledDimensions(i),
              o = {
                height: s.height * n.from.y,
                width: s.width * n.from.x,
                outerHeight: s.outerHeight * n.from.y,
                outerWidth: s.outerWidth * n.from.x
              },
              a = {
                height: s.height * n.to.y,
                width: s.width * n.to.x,
                outerHeight: s.height * n.to.y,
                outerWidth: s.width * n.to.x
              }
            n.from.y !== n.to.y &&
              ((o = t.effects.setTransition(i, h, n.from.y, o)),
              (a = t.effects.setTransition(i, h, n.to.y, a))),
              n.from.x !== n.to.x &&
                ((o = t.effects.setTransition(i, l, n.from.x, o)),
                (a = t.effects.setTransition(i, l, n.to.x, a))),
              c && t.effects.saveStyle(i),
              i.css(o),
              i.animate(a, e.duration, e.easing, function () {
                c && t.effects.restoreStyle(i)
              })
          })),
        a.animate(v, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function () {
            var e = a.offset()
            0 === v.opacity && a.css('opacity', _.opacity),
              c ||
                (a.css('position', 'static' === f ? 'relative' : f).offset(e),
                t.effects.saveStyle(a)),
              i()
          }
        })
    }),
    t.effects.define('scale', function (e, i) {
      var s = t(this),
        n = e.mode,
        o =
          parseInt(e.percent, 10) ||
          (0 === parseInt(e.percent, 10) ? 0 : 'effect' !== n ? 0 : 100),
        a = t.extend(
          !0,
          {
            from: t.effects.scaledDimensions(s),
            to: t.effects.scaledDimensions(s, o, e.direction || 'both'),
            origin: e.origin || ['middle', 'center']
          },
          e
        )
      e.fade && ((a.from.opacity = 1), (a.to.opacity = 0)),
        t.effects.effect.size.call(this, a, i)
    }),
    t.effects.define('puff', 'hide', function (e, i) {
      var s = t.extend(!0, {}, e, {
        fade: !0,
        percent: parseInt(e.percent, 10) || 150
      })
      t.effects.effect.scale.call(this, s, i)
    }),
    t.effects.define('pulsate', 'show', function (e, i) {
      var s = t(this),
        n = e.mode,
        o = 'show' === n,
        a = 'hide' === n,
        r = o || a,
        h = 2 * (e.times || 5) + (r ? 1 : 0),
        l = e.duration / h,
        u = 0,
        c = 1,
        d = s.queue().length
      for (
        (o || !s.is(':visible')) && (s.css('opacity', 0).show(), (u = 1));
        h > c;
        c++
      )
        s.animate({ opacity: u }, l, e.easing), (u = 1 - u)
      s.animate({ opacity: u }, l, e.easing),
        s.queue(i),
        t.effects.unshift(s, d, h + 1)
    }),
    t.effects.define('shake', function (e, i) {
      var s = 1,
        n = t(this),
        o = e.direction || 'left',
        a = e.distance || 20,
        r = e.times || 3,
        h = 2 * r + 1,
        l = Math.round(e.duration / h),
        u = 'up' === o || 'down' === o ? 'top' : 'left',
        c = 'up' === o || 'left' === o,
        d = {},
        p = {},
        f = {},
        m = n.queue().length
      for (
        t.effects.createPlaceholder(n),
          d[u] = (c ? '-=' : '+=') + a,
          p[u] = (c ? '+=' : '-=') + 2 * a,
          f[u] = (c ? '-=' : '+=') + 2 * a,
          n.animate(d, l, e.easing);
        r > s;
        s++
      )
        n.animate(p, l, e.easing).animate(f, l, e.easing)
      n
        .animate(p, l, e.easing)
        .animate(d, l / 2, e.easing)
        .queue(i),
        t.effects.unshift(n, m, h + 1)
    }),
    t.effects.define('slide', 'show', function (e, i) {
      var s,
        n,
        o = t(this),
        a = {
          up: ['bottom', 'top'],
          down: ['top', 'bottom'],
          left: ['right', 'left'],
          right: ['left', 'right']
        },
        r = e.mode,
        h = e.direction || 'left',
        l = 'up' === h || 'down' === h ? 'top' : 'left',
        u = 'up' === h || 'left' === h,
        c = e.distance || o['top' === l ? 'outerHeight' : 'outerWidth'](!0),
        d = {}
      t.effects.createPlaceholder(o),
        (s = o.cssClip()),
        (n = o.position()[l]),
        (d[l] = (u ? -1 : 1) * c + n),
        (d.clip = o.cssClip()),
        (d.clip[a[h][1]] = d.clip[a[h][0]]),
        'show' === r &&
          (o.cssClip(d.clip), o.css(l, d[l]), (d.clip = s), (d[l] = n)),
        o.animate(d, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: i
        })
    })
  var v
  t.uiBackCompat !== !1 &&
    (v = t.effects.define('transfer', function (e, i) {
      t(this).transfer(e, i)
    }))
})
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */
!(function (e) {
  'function' == typeof define && define.amd
    ? define(['jquery'], e)
    : 'object' == typeof exports
    ? (module.exports = e)
    : e(jQuery)
})(function (u) {
  var f,
    d,
    e = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
    t =
      'onwheel' in window.document || 9 <= window.document.documentMode
        ? ['wheel']
        : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
    w = Array.prototype.slice
  if (u.event.fixHooks)
    for (var i = e.length; i; ) u.event.fixHooks[e[--i]] = u.event.mouseHooks
  var c = (u.event.special.mousewheel = {
    version: '3.1.12',
    setup: function () {
      if (this.addEventListener)
        for (var e = t.length; e; ) this.addEventListener(t[--e], n, !1)
      else this.onmousewheel = n
      u.data(this, 'mousewheel-line-height', c.getLineHeight(this)),
        u.data(this, 'mousewheel-page-height', c.getPageHeight(this))
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var e = t.length; e; ) this.removeEventListener(t[--e], n, !1)
      else this.onmousewheel = null
      u.removeData(this, 'mousewheel-line-height'),
        u.removeData(this, 'mousewheel-page-height')
    },
    getLineHeight: function (e) {
      var t = u(e),
        i = t['offsetParent' in u.fn ? 'offsetParent' : 'parent']()
      return (
        i.length || (i = u('body')),
        parseInt(i.css('fontSize'), 10) || parseInt(t.css('fontSize'), 10) || 16
      )
    },
    getPageHeight: function (e) {
      return u(e).height()
    },
    settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
  })
  function n (e) {
    var t,
      i = e || window.event,
      n = w.call(arguments, 1),
      o = 0,
      l = 0,
      s = 0
    if (
      (((e = u.event.fix(i)).type = 'mousewheel'),
      'detail' in i && (s = -1 * i.detail),
      'wheelDelta' in i && (s = i.wheelDelta),
      'wheelDeltaY' in i && (s = i.wheelDeltaY),
      'wheelDeltaX' in i && (l = -1 * i.wheelDeltaX),
      'axis' in i && i.axis === i.HORIZONTAL_AXIS && ((l = -1 * s), (s = 0)),
      (o = 0 === s ? l : s),
      'deltaY' in i && (o = s = -1 * i.deltaY),
      'deltaX' in i && ((l = i.deltaX), 0 === s && (o = -1 * l)),
      0 !== s || 0 !== l)
    ) {
      if (1 === i.deltaMode) {
        var a = u.data(this, 'mousewheel-line-height')
        ;(o *= a), (s *= a), (l *= a)
      } else if (2 === i.deltaMode) {
        var h = u.data(this, 'mousewheel-page-height')
        ;(o *= h), (s *= h), (l *= h)
      }
      if (
        ((t = Math.max(Math.abs(s), Math.abs(l))),
        (!d || t < d) && g(i, (d = t)) && (d /= 40),
        g(i, t) && ((o /= 40), (l /= 40), (s /= 40)),
        (o = Math[1 <= o ? 'floor' : 'ceil'](o / d)),
        (l = Math[1 <= l ? 'floor' : 'ceil'](l / d)),
        (s = Math[1 <= s ? 'floor' : 'ceil'](s / d)),
        c.settings.normalizeOffset && this.getBoundingClientRect)
      ) {
        var r = this.getBoundingClientRect()
        ;(e.offsetX = e.clientX - r.left), (e.offsetY = e.clientY - r.top)
      }
      return (
        (e.deltaX = l),
        (e.deltaY = s),
        (e.deltaFactor = d),
        (e.deltaMode = 0),
        n.unshift(e, o, l, s),
        f && window.clearTimeout(f),
        (f = window.setTimeout(m, 200)),
        (u.event.dispatch || u.event.handle).apply(this, n)
      )
    }
  }
  function m () {
    d = null
  }
  function g (e, t) {
    return c.settings.adjustOldDeltas && 'mousewheel' === e.type && t % 120 == 0
  }
  u.fn.extend({
    mousewheel: function (e) {
      return e ? this.on('mousewheel', e) : this.trigger('mousewheel')
    },
    unmousewheel: function (e) {
      return this.off('mousewheel', e)
    }
  })
})
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-svg-touch-webgl-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;(window.Modernizr = (function (a, b, c) {
  function C (a) {
    j.cssText = a
  }
  function D (a, b) {
    return C(n.join(a + ';') + (b || ''))
  }
  function E (a, b) {
    return typeof a === b
  }
  function F (a, b) {
    return !!~('' + a).indexOf(b)
  }
  function G (a, b) {
    for (var d in a) {
      var e = a[d]
      if (!F(e, '-') && j[e] !== c) return b == 'pfx' ? e : !0
    }
    return !1
  }
  function H (a, b, d) {
    for (var e in a) {
      var f = b[a[e]]
      if (f !== c)
        return d === !1 ? a[e] : E(f, 'function') ? f.bind(d || b) : f
    }
    return !1
  }
  function I (a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      e = (a + ' ' + p.join(d + ' ') + d).split(' ')
    return E(b, 'string') || E(b, 'undefined')
      ? G(e, b)
      : ((e = (a + ' ' + q.join(d + ' ') + d).split(' ')), H(e, b, c))
  }
  function J () {
    ;(e.input = (function (c) {
      for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k
      return (
        u.list &&
          (u.list = !!b.createElement('datalist') && !!a.HTMLDataListElement),
        u
      )
    })(
      'autocomplete autofocus list placeholder max min multiple pattern required step'.split(
        ' '
      )
    )),
      (e.inputtypes = (function (a) {
        for (var d = 0, e, f, h, i = a.length; d < i; d++)
          k.setAttribute('type', (f = a[d])),
            (e = k.type !== 'text'),
            e &&
              ((k.value = l),
              (k.style.cssText = 'position:absolute;visibility:hidden;'),
              /^range$/.test(f) && k.style.WebkitAppearance !== c
                ? (g.appendChild(k),
                  (h = b.defaultView),
                  (e =
                    h.getComputedStyle &&
                    h.getComputedStyle(k, null).WebkitAppearance !==
                      'textfield' &&
                    k.offsetHeight !== 0),
                  g.removeChild(k))
                : /^(search|tel)$/.test(f) ||
                  (/^(url|email)$/.test(f)
                    ? (e = k.checkValidity && k.checkValidity() === !1)
                    : (e = k.value != l))),
            (t[a[d]] = !!e)
        return t
      })(
        'search tel url email datetime date month week time datetime-local number range color'.split(
          ' '
        )
      ))
  }
  var d = '2.8.3',
    e = {},
    f = !0,
    g = b.documentElement,
    h = 'modernizr',
    i = b.createElement(h),
    j = i.style,
    k = b.createElement('input'),
    l = ':)',
    m = {}.toString,
    n = ' -webkit- -moz- -o- -ms- '.split(' '),
    o = 'Webkit Moz O ms',
    p = o.split(' '),
    q = o.toLowerCase().split(' '),
    r = { svg: 'http://www.w3.org/2000/svg' },
    s = {},
    t = {},
    u = {},
    v = [],
    w = v.slice,
    x,
    y = function (a, c, d, e) {
      var f,
        i,
        j,
        k,
        l = b.createElement('div'),
        m = b.body,
        n = m || b.createElement('body')
      if (parseInt(d, 10))
        while (d--)
          (j = b.createElement('div')),
            (j.id = e ? e[d] : h + (d + 1)),
            l.appendChild(j)
      return (
        (f = ['&#173;', '<style id="s', h, '">', a, '</style>'].join('')),
        (l.id = h),
        ((m ? l : n).innerHTML += f),
        n.appendChild(l),
        m ||
          ((n.style.background = ''),
          (n.style.overflow = 'hidden'),
          (k = g.style.overflow),
          (g.style.overflow = 'hidden'),
          g.appendChild(n)),
        (i = c(l, a)),
        m
          ? l.parentNode.removeChild(l)
          : (n.parentNode.removeChild(n), (g.style.overflow = k)),
        !!i
      )
    },
    z = (function () {
      function d (d, e) {
        ;(e = e || b.createElement(a[d] || 'div')), (d = 'on' + d)
        var f = d in e
        return (
          f ||
            (e.setAttribute || (e = b.createElement('div')),
            e.setAttribute &&
              e.removeAttribute &&
              (e.setAttribute(d, ''),
              (f = E(e[d], 'function')),
              E(e[d], 'undefined') || (e[d] = c),
              e.removeAttribute(d))),
          (e = null),
          f
        )
      }
      var a = {
        select: 'input',
        change: 'input',
        submit: 'form',
        reset: 'form',
        error: 'img',
        load: 'img',
        abort: 'img'
      }
      return d
    })(),
    A = {}.hasOwnProperty,
    B
  !E(A, 'undefined') && !E(A.call, 'undefined')
    ? (B = function (a, b) {
        return A.call(a, b)
      })
    : (B = function (a, b) {
        return b in a && E(a.constructor.prototype[b], 'undefined')
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this
        if (typeof c != 'function') throw new TypeError()
        var d = w.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {}
              a.prototype = c.prototype
              var f = new a(),
                g = c.apply(f, d.concat(w.call(arguments)))
              return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(w.call(arguments)))
          }
        return e
      }),
    (s.flexbox = function () {
      return I('flexWrap')
    }),
    (s.flexboxlegacy = function () {
      return I('boxDirection')
    }),
    (s.canvas = function () {
      var a = b.createElement('canvas')
      return !!a.getContext && !!a.getContext('2d')
    }),
    (s.canvastext = function () {
      return (
        !!e.canvas &&
        !!E(b.createElement('canvas').getContext('2d').fillText, 'function')
      )
    }),
    (s.webgl = function () {
      return !!a.WebGLRenderingContext
    }),
    (s.touch = function () {
      var c
      return (
        'ontouchstart' in a || (a.DocumentTouch && b instanceof DocumentTouch)
          ? (c = !0)
          : y(
              [
                '@media (',
                n.join('touch-enabled),('),
                h,
                ')',
                '{#modernizr{top:9px;position:absolute}}'
              ].join(''),
              function (a) {
                c = a.offsetTop === 9
              }
            ),
        c
      )
    }),
    (s.geolocation = function () {
      return 'geolocation' in navigator
    }),
    (s.postmessage = function () {
      return !!a.postMessage
    }),
    (s.websqldatabase = function () {
      return !!a.openDatabase
    }),
    (s.indexedDB = function () {
      return !!I('indexedDB', a)
    }),
    (s.hashchange = function () {
      return z('hashchange', a) && (b.documentMode === c || b.documentMode > 7)
    }),
    (s.history = function () {
      return !!a.history && !!history.pushState
    }),
    (s.draganddrop = function () {
      var a = b.createElement('div')
      return 'draggable' in a || ('ondragstart' in a && 'ondrop' in a)
    }),
    (s.websockets = function () {
      return 'WebSocket' in a || 'MozWebSocket' in a
    }),
    (s.rgba = function () {
      return (
        C('background-color:rgba(150,255,150,.5)'), F(j.backgroundColor, 'rgba')
      )
    }),
    (s.hsla = function () {
      return (
        C('background-color:hsla(120,40%,100%,.5)'),
        F(j.backgroundColor, 'rgba') || F(j.backgroundColor, 'hsla')
      )
    }),
    (s.multiplebgs = function () {
      return (
        C('background:url(https://),url(https://),red url(https://)'),
        /(url\s*\(.*?){3}/.test(j.background)
      )
    }),
    (s.backgroundsize = function () {
      return I('backgroundSize')
    }),
    (s.borderimage = function () {
      return I('borderImage')
    }),
    (s.borderradius = function () {
      return I('borderRadius')
    }),
    (s.boxshadow = function () {
      return I('boxShadow')
    }),
    (s.textshadow = function () {
      return b.createElement('div').style.textShadow === ''
    }),
    (s.opacity = function () {
      return D('opacity:.55'), /^0.55$/.test(j.opacity)
    }),
    (s.cssanimations = function () {
      return I('animationName')
    }),
    (s.csscolumns = function () {
      return I('columnCount')
    }),
    (s.cssgradients = function () {
      var a = 'background-image:',
        b = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
        c = 'linear-gradient(left top,#9f9, white);'
      return (
        C(
          (a + '-webkit- '.split(' ').join(b + a) + n.join(c + a)).slice(
            0,
            -a.length
          )
        ),
        F(j.backgroundImage, 'gradient')
      )
    }),
    (s.cssreflections = function () {
      return I('boxReflect')
    }),
    (s.csstransforms = function () {
      return !!I('transform')
    }),
    (s.csstransforms3d = function () {
      var a = !!I('perspective')
      return (
        a &&
          'webkitPerspective' in g.style &&
          y(
            '@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}',
            function (b, c) {
              a = b.offsetLeft === 9 && b.offsetHeight === 3
            }
          ),
        a
      )
    }),
    (s.csstransitions = function () {
      return I('transition')
    }),
    (s.fontface = function () {
      var a
      return (
        y('@font-face {font-family:"font";src:url("https://")}', function (
          c,
          d
        ) {
          var e = b.getElementById('smodernizr'),
            f = e.sheet || e.styleSheet,
            g = f
              ? f.cssRules && f.cssRules[0]
                ? f.cssRules[0].cssText
                : f.cssText || ''
              : ''
          a = /src/i.test(g) && g.indexOf(d.split(' ')[0]) === 0
        }),
        a
      )
    }),
    (s.generatedcontent = function () {
      var a
      return (
        y(
          [
            '#',
            h,
            '{font:0/0 a}#',
            h,
            ':after{content:"',
            l,
            '";visibility:hidden;font:3px/1 a}'
          ].join(''),
          function (b) {
            a = b.offsetHeight >= 3
          }
        ),
        a
      )
    }),
    (s.video = function () {
      var a = b.createElement('video'),
        c = !1
      try {
        if ((c = !!a.canPlayType))
          (c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, '')),
            (c.h264 = a
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, '')),
            (c.webm = a
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, ''))
      } catch (d) {}
      return c
    }),
    (s.audio = function () {
      var a = b.createElement('audio'),
        c = !1
      try {
        if ((c = !!a.canPlayType))
          (c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, '')),
            (c.mp3 = a.canPlayType('audio/mpeg;').replace(/^no$/, '')),
            (c.wav = a
              .canPlayType('audio/wav; codecs="1"')
              .replace(/^no$/, '')),
            (c.m4a = (
              a.canPlayType('audio/x-m4a;') || a.canPlayType('audio/aac;')
            ).replace(/^no$/, ''))
      } catch (d) {}
      return c
    }),
    (s.localstorage = function () {
      try {
        return localStorage.setItem(h, h), localStorage.removeItem(h), !0
      } catch (a) {
        return !1
      }
    }),
    (s.sessionstorage = function () {
      try {
        return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
      } catch (a) {
        return !1
      }
    }),
    (s.webworkers = function () {
      return !!a.Worker
    }),
    (s.applicationcache = function () {
      return !!a.applicationCache
    }),
    (s.svg = function () {
      return (
        !!b.createElementNS && !!b.createElementNS(r.svg, 'svg').createSVGRect
      )
    }),
    (s.inlinesvg = function () {
      var a = b.createElement('div')
      return (
        (a.innerHTML = '<svg/>'),
        (a.firstChild && a.firstChild.namespaceURI) == r.svg
      )
    })
  for (var K in s)
    B(s, K) &&
      ((x = K.toLowerCase()), (e[x] = s[K]()), v.push((e[x] ? '' : 'no-') + x))
  return (
    e.input || J(),
    (e.addTest = function (a, b) {
      if (typeof a == 'object') for (var d in a) B(a, d) && e.addTest(d, a[d])
      else {
        a = a.toLowerCase()
        if (e[a] !== c) return e
        ;(b = typeof b == 'function' ? b() : b),
          typeof f != 'undefined' &&
            f &&
            (g.className += ' ' + (b ? '' : 'no-') + a),
          (e[a] = b)
      }
      return e
    }),
    C(''),
    (i = k = null),
    (function (a, b) {
      function l (a, b) {
        var c = a.createElement('p'),
          d = a.getElementsByTagName('head')[0] || a.documentElement
        return (
          (c.innerHTML = 'x<style>' + b + '</style>'),
          d.insertBefore(c.lastChild, d.firstChild)
        )
      }
      function m () {
        var a = s.elements
        return typeof a == 'string' ? a.split(' ') : a
      }
      function n (a) {
        var b = j[a[h]]
        return b || ((b = {}), i++, (a[h] = i), (j[i] = b)), b
      }
      function o (a, c, d) {
        c || (c = b)
        if (k) return c.createElement(a)
        d || (d = n(c))
        var g
        return (
          d.cache[a]
            ? (g = d.cache[a].cloneNode())
            : f.test(a)
            ? (g = (d.cache[a] = d.createElem(a)).cloneNode())
            : (g = d.createElem(a)),
          g.canHaveChildren && !e.test(a) && !g.tagUrn
            ? d.frag.appendChild(g)
            : g
        )
      }
      function p (a, c) {
        a || (a = b)
        if (k) return a.createDocumentFragment()
        c = c || n(a)
        var d = c.frag.cloneNode(),
          e = 0,
          f = m(),
          g = f.length
        for (; e < g; e++) d.createElement(f[e])
        return d
      }
      function q (a, b) {
        b.cache ||
          ((b.cache = {}),
          (b.createElem = a.createElement),
          (b.createFrag = a.createDocumentFragment),
          (b.frag = b.createFrag())),
          (a.createElement = function (c) {
            return s.shivMethods ? o(c, a, b) : b.createElem(c)
          }),
          (a.createDocumentFragment = Function(
            'h,f',
            'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
              m()
                .join()
                .replace(/[\w\-]+/g, function (a) {
                  return (
                    b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                  )
                }) +
              ');return n}'
          )(s, b.frag))
      }
      function r (a) {
        a || (a = b)
        var c = n(a)
        return (
          s.shivCSS &&
            !g &&
            !c.hasCSS &&
            (c.hasCSS = !!l(
              a,
              'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}'
            )),
          k || q(a, c),
          a
        )
      }
      var c = '3.7.0',
        d = a.html5 || {},
        e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g,
        h = '_html5shiv',
        i = 0,
        j = {},
        k
      ;(function () {
        try {
          var a = b.createElement('a')
          ;(a.innerHTML = '<xyz></xyz>'),
            (g = 'hidden' in a),
            (k =
              a.childNodes.length == 1 ||
              (function () {
                b.createElement('a')
                var a = b.createDocumentFragment()
                return (
                  typeof a.cloneNode == 'undefined' ||
                  typeof a.createDocumentFragment == 'undefined' ||
                  typeof a.createElement == 'undefined'
                )
              })())
        } catch (c) {
          ;(g = !0), (k = !0)
        }
      })()
      var s = {
        elements:
          d.elements ||
          'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',
        version: c,
        shivCSS: d.shivCSS !== !1,
        supportsUnknownElements: k,
        shivMethods: d.shivMethods !== !1,
        type: 'default',
        shivDocument: r,
        createElement: o,
        createDocumentFragment: p
      }
      ;(a.html5 = s), r(b)
    })(this, b),
    (e._version = d),
    (e._prefixes = n),
    (e._domPrefixes = q),
    (e._cssomPrefixes = p),
    (e.hasEvent = z),
    (e.testProp = function (a) {
      return G([a])
    }),
    (e.testAllProps = I),
    (e.testStyles = y),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +
      (f ? ' js ' + v.join(' ') : '')),
    e
  )
})(this, this.document)),
  (function (a, b, c) {
    function d (a) {
      return '[object Function]' == o.call(a)
    }
    function e (a) {
      return 'string' == typeof a
    }
    function f () {}
    function g (a) {
      return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a
    }
    function h () {
      var a = p.shift()
      ;(q = 1),
        a
          ? a.t
            ? m(function () {
                ;('c' == a.t
                  ? B.injectCss
                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
              }, 0)
            : (a(), h())
          : (q = 0)
    }
    function i (a, c, d, e, f, i, j) {
      function k (b) {
        if (
          !o &&
          g(l.readyState) &&
          ((u.r = o = 1),
          !q && h(),
          (l.onload = l.onreadystatechange = null),
          b)
        ) {
          'img' != a &&
            m(function () {
              t.removeChild(l)
            }, 50)
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j }
      1 === y[c] && ((r = 1), (y[c] = [])),
        'object' == a ? (l.data = c) : ((l.src = c), (l.type = a)),
        (l.width = l.height = '0'),
        (l.onerror = l.onload = l.onreadystatechange = function () {
          k.call(this, r)
        }),
        p.splice(e, 0, u),
        'img' != a &&
          (r || 2 === y[c]
            ? (t.insertBefore(l, s ? null : n), m(k, j))
            : y[c].push(l))
    }
    function j (a, b, c, d, f) {
      return (
        (q = 0),
        (b = b || 'j'),
        e(a)
          ? i('c' == b ? v : u, a, b, this.i++, c, d, f)
          : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
      )
    }
    function k () {
      var a = B
      return (a.loader = { load: j, i: 0 }), a
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName('script')[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = 'MozAppearance' in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && '[object Opera]' == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? 'object' : l ? 'script' : 'img',
      v = l ? 'script' : u,
      w =
        Array.isArray ||
        function (a) {
          return '[object Array]' == o.call(a)
        },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      },
      A,
      B
    ;(B = function (a) {
      function b (a) {
        var a = a.split('!'),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g
        for (f = 0; f < d; f++)
          (g = a[f].split('=')), (e = z[g.shift()]) && (c = e(c, g))
        for (f = 0; f < b; f++) c = x[f](c)
        return c
      }
      function g (a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback
        i.url
          .split('.')
          .pop()
          .split('?')
          .shift(),
          i.bypass ||
            (e &&
              (e = d(e)
                ? e
                : e[a] ||
                  e[g] ||
                  e[
                    a
                      .split('/')
                      .pop()
                      .split('?')[0]
                  ]),
            i.instead
              ? i.instead(a, e, f, g, h)
              : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                f.load(
                  i.url,
                  i.forceCSS ||
                    (!i.forceJS &&
                      'css' ==
                        i.url
                          .split('.')
                          .pop()
                          .split('?')
                          .shift())
                    ? 'c'
                    : c,
                  i.noexec,
                  i.attrs,
                  i.timeout
                ),
                (d(e) || d(j)) &&
                  f.load(function () {
                    k(),
                      e && e(i.origUrl, h, g),
                      j && j(i.origUrl, h, g),
                      (y[i.url] = 2)
                  })))
      }
      function h (a, b) {
        function c (a, c) {
          if (a) {
            if (e(a))
              c ||
                (j = function () {
                  var a = [].slice.call(arguments)
                  k.apply(this, a), l()
                }),
                g(a, j, b, 0, h)
            else if (Object(a) === a)
              for (n in ((m = (function () {
                var b = 0,
                  c
                for (c in a) a.hasOwnProperty(c) && b++
                return b
              })()),
              a))
                a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                          var a = [].slice.call(arguments)
                          k.apply(this, a), l()
                        })
                      : (j[n] = (function (a) {
                          return function () {
                            var b = [].slice.call(arguments)
                            a && a.apply(this, b), l()
                          }
                        })(k[n]))),
                  g(a[n], j, b, n, h))
          } else !c && l()
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n
        c(h ? a.yep : a.nope, !!i), i && c(i)
      }
      var i,
        j,
        l = this.yepnope.loader
      if (e(a)) g(a, 0, l, 0)
      else if (w(a))
        for (i = 0; i < a.length; i++)
          (j = a[i]),
            e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l)
      else Object(a) === a && h(a, l)
    }),
      (B.addPrefix = function (a, b) {
        z[a] = b
      }),
      (B.addFilter = function (a) {
        x.push(a)
      }),
      (B.errorTimeout = 1e4),
      null == b.readyState &&
        b.addEventListener &&
        ((b.readyState = 'loading'),
        b.addEventListener(
          'DOMContentLoaded',
          (A = function () {
            b.removeEventListener('DOMContentLoaded', A, 0),
              (b.readyState = 'complete')
          }),
          0
        )),
      (a.yepnope = k()),
      (a.yepnope.executeStack = h),
      (a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement('script'),
          l,
          o,
          e = e || B.errorTimeout
        k.src = a
        for (o in d) k.setAttribute(o, d[o])
        ;(c = j ? h : c || f),
          (k.onreadystatechange = k.onload = function () {
            !l &&
              g(k.readyState) &&
              ((l = 1), c(), (k.onload = k.onreadystatechange = null))
          }),
          m(function () {
            l || ((l = 1), c(1))
          }, e),
          i ? k.onload() : n.parentNode.insertBefore(k, n)
      }),
      (a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement('link'),
          j,
          c = i ? h : c || f
        ;(e.href = a), (e.rel = 'stylesheet'), (e.type = 'text/css')
        for (j in d) e.setAttribute(j, d[j])
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
      })
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
  })
/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

!(function (a) {
  'use strict'
  a.matchMedia =
    a.matchMedia ||
    (function (a) {
      var b,
        c = a.documentElement,
        d = c.firstElementChild || c.firstChild,
        e = a.createElement('body'),
        f = a.createElement('div')
      return (
        (f.id = 'mq-test-1'),
        (f.style.cssText = 'position:absolute;top:-100em'),
        (e.style.background = 'none'),
        e.appendChild(f),
        function (a) {
          return (
            (f.innerHTML =
              '&shy;<style media="' +
              a +
              '"> #mq-test-1 { width: 42px; }</style>'),
            c.insertBefore(e, d),
            (b = 42 === f.offsetWidth),
            c.removeChild(e),
            { matches: b, media: a }
          )
        }
      )
    })(a.document)
})(this),
  (function (a) {
    'use strict'
    function b () {
      v(!0)
    }
    var c = {}
    ;(a.respond = c), (c.update = function () {})
    var d = [],
      e = (function () {
        var b = !1
        try {
          b = new a.XMLHttpRequest()
        } catch (c) {
          b = new a.ActiveXObject('Microsoft.XMLHTTP')
        }
        return function () {
          return b
        }
      })(),
      f = function (a, b) {
        var c = e()
        c &&
          (c.open('GET', a, !0),
          (c.onreadystatechange = function () {
            4 !== c.readyState ||
              (200 !== c.status && 304 !== c.status) ||
              b(c.responseText)
          }),
          4 !== c.readyState && c.send(null))
      },
      g = function (a) {
        return a.replace(c.regex.minmaxwh, '').match(c.regex.other)
      }
    if (
      ((c.ajax = f),
      (c.queue = d),
      (c.unsupportedmq = g),
      (c.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
      }),
      (c.mediaQueriesSupported =
        a.matchMedia &&
        null !== a.matchMedia('only all') &&
        a.matchMedia('only all').matches),
      !c.mediaQueriesSupported)
    ) {
      var h,
        i,
        j,
        k = a.document,
        l = k.documentElement,
        m = [],
        n = [],
        o = [],
        p = {},
        q = 30,
        r = k.getElementsByTagName('head')[0] || l,
        s = k.getElementsByTagName('base')[0],
        t = r.getElementsByTagName('link'),
        u = function () {
          var a,
            b = k.createElement('div'),
            c = k.body,
            d = l.style.fontSize,
            e = c && c.style.fontSize,
            f = !1
          return (
            (b.style.cssText = 'position:absolute;font-size:1em;width:1em'),
            c ||
              ((c = f = k.createElement('body')),
              (c.style.background = 'none')),
            (l.style.fontSize = '100%'),
            (c.style.fontSize = '100%'),
            c.appendChild(b),
            f && l.insertBefore(c, l.firstChild),
            (a = b.offsetWidth),
            f ? l.removeChild(c) : c.removeChild(b),
            (l.style.fontSize = d),
            e && (c.style.fontSize = e),
            (a = j = parseFloat(a))
          )
        },
        v = function (b) {
          var c = 'clientWidth',
            d = l[c],
            e = ('CSS1Compat' === k.compatMode && d) || k.body[c] || d,
            f = {},
            g = t[t.length - 1],
            p = new Date().getTime()
          if (b && h && q > p - h)
            return a.clearTimeout(i), (i = a.setTimeout(v, q)), void 0
          h = p
          for (var s in m)
            if (m.hasOwnProperty(s)) {
              var w = m[s],
                x = w.minw,
                y = w.maxw,
                z = null === x,
                A = null === y,
                B = 'em'
              x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? j || u() : 1)),
                y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? j || u() : 1)),
                (w.hasquery &&
                  ((z && A) || !(z || e >= x) || !(A || y >= e))) ||
                  (f[w.media] || (f[w.media] = []), f[w.media].push(n[w.rules]))
            }
          for (var C in o)
            o.hasOwnProperty(C) &&
              o[C] &&
              o[C].parentNode === r &&
              r.removeChild(o[C])
          o.length = 0
          for (var D in f)
            if (f.hasOwnProperty(D)) {
              var E = k.createElement('style'),
                F = f[D].join('\n')
              ;(E.type = 'text/css'),
                (E.media = D),
                r.insertBefore(E, g.nextSibling),
                E.styleSheet
                  ? (E.styleSheet.cssText = F)
                  : E.appendChild(k.createTextNode(F)),
                o.push(E)
            }
        },
        w = function (a, b, d) {
          var e = a
              .replace(c.regex.comments, '')
              .replace(c.regex.keyframes, '')
              .match(c.regex.media),
            f = (e && e.length) || 0
          b = b.substring(0, b.lastIndexOf('/'))
          var h = function (a) {
              return a.replace(c.regex.urls, '$1' + b + '$2$3')
            },
            i = !f && d
          b.length && (b += '/'), i && (f = 1)
          for (var j = 0; f > j; j++) {
            var k, l, o, p
            i
              ? ((k = d), n.push(h(a)))
              : ((k = e[j].match(c.regex.findStyles) && RegExp.$1),
                n.push(RegExp.$2 && h(RegExp.$2))),
              (o = k.split(',')),
              (p = o.length)
            for (var q = 0; p > q; q++)
              (l = o[q]),
                g(l) ||
                  m.push({
                    media:
                      (l.split('(')[0].match(c.regex.only) && RegExp.$2) ||
                      'all',
                    rules: n.length - 1,
                    hasquery: l.indexOf('(') > -1,
                    minw:
                      l.match(c.regex.minw) &&
                      parseFloat(RegExp.$1) + (RegExp.$2 || ''),
                    maxw:
                      l.match(c.regex.maxw) &&
                      parseFloat(RegExp.$1) + (RegExp.$2 || '')
                  })
          }
          v()
        },
        x = function () {
          if (d.length) {
            var b = d.shift()
            f(b.href, function (c) {
              w(c, b.href, b.media),
                (p[b.href] = !0),
                a.setTimeout(function () {
                  x()
                }, 0)
            })
          }
        },
        y = function () {
          for (var b = 0; b < t.length; b++) {
            var c = t[b],
              e = c.href,
              f = c.media,
              g = c.rel && 'stylesheet' === c.rel.toLowerCase()
            e &&
              g &&
              !p[e] &&
              (c.styleSheet && c.styleSheet.rawCssText
                ? (w(c.styleSheet.rawCssText, e, f), (p[e] = !0))
                : ((!/^([a-zA-Z:]*\/\/)/.test(e) && !s) ||
                    e.replace(RegExp.$1, '').split('/')[0] ===
                      a.location.host) &&
                  ('//' === e.substring(0, 2) && (e = a.location.protocol + e),
                  d.push({ href: e, media: f })))
          }
          x()
        }
      y(),
        (c.update = y),
        (c.getEmValue = u),
        a.addEventListener
          ? a.addEventListener('resize', b, !1)
          : a.attachEvent && a.attachEvent('onresize', b)
    }
  })(this)
/*!
 * selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms of the MIT license.
 * selectivizr.com
 */
;(function (j) {
  function A (a) {
    return a.replace(B, h).replace(C, function (a, d, b) {
      for (var a = b.split(','), b = 0, e = a.length; b < e; b++) {
        var s = D(a[b].replace(E, h).replace(F, h)) + o,
          l = []
        a[b] = s.replace(G, function (a, b, c, d, e) {
          if (b) {
            if (l.length > 0) {
              var a = l,
                f,
                e = s.substring(0, e).replace(H, i)
              if (e == i || e.charAt(e.length - 1) == o) e += '*'
              try {
                f = t(e)
              } catch (k) {}
              if (f) {
                e = 0
                for (c = f.length; e < c; e++) {
                  for (
                    var d = f[e], h = d.className, j = 0, m = a.length;
                    j < m;
                    j++
                  ) {
                    var g = a[j]
                    if (
                      !RegExp('(^|\\s)' + g.className + '(\\s|$)').test(
                        d.className
                      ) &&
                      g.b &&
                      (g.b === !0 || g.b(d) === !0)
                    )
                      h = u(h, g.className, !0)
                  }
                  d.className = h
                }
              }
              l = []
            }
            return b
          } else {
            if (
              (b = c
                ? I(c)
                : !v || v.test(d)
                ? { className: w(d), b: !0 }
                : null)
            )
              return l.push(b), '.' + b.className
            return a
          }
        })
      }
      return d + a.join(',')
    })
  }
  function I (a) {
    var c = !0,
      d = w(a.slice(1)),
      b = a.substring(0, 5) == ':not(',
      e,
      f
    b && (a = a.slice(5, -1))
    var l = a.indexOf('(')
    l > -1 && (a = a.substring(0, l))
    if (a.charAt(0) == ':')
      switch (a.slice(1)) {
        case 'root':
          c = function (a) {
            return b ? a != p : a == p
          }
          break
        case 'target':
          if (m == 8) {
            c = function (a) {
              function c () {
                var d = location.hash,
                  e = d.slice(1)
                return b ? d == i || a.id != e : d != i && a.id == e
              }
              k(j, 'hashchange', function () {
                g(a, d, c())
              })
              return c()
            }
            break
          }
          return !1
        case 'checked':
          c = function (a) {
            J.test(a.type) &&
              k(a, 'propertychange', function () {
                event.propertyName == 'checked' && g(a, d, a.checked !== b)
              })
            return a.checked !== b
          }
          break
        case 'disabled':
          b = !b
        case 'enabled':
          c = function (c) {
            if (K.test(c.tagName))
              return (
                k(c, 'propertychange', function () {
                  event.propertyName == '$disabled' && g(c, d, c.a === b)
                }),
                q.push(c),
                (c.a = c.disabled),
                c.disabled === b
              )
            return a == ':enabled' ? b : !b
          }
          break
        case 'focus':
          ;(e = 'focus'), (f = 'blur')
        case 'hover':
          e || ((e = 'mouseenter'), (f = 'mouseleave'))
          c = function (a) {
            k(a, b ? f : e, function () {
              g(a, d, !0)
            })
            k(a, b ? e : f, function () {
              g(a, d, !1)
            })
            return b
          }
          break
        default:
          if (!L.test(a)) return !1
      }
    return { className: d, b: c }
  }
  function w (a) {
    return (
      M +
      '-' +
      (m == 6 && N
        ? O++
        : a.replace(P, function (a) {
            return a.charCodeAt(0)
          }))
    )
  }
  function D (a) {
    return a.replace(x, h).replace(Q, o)
  }
  function g (a, c, d) {
    var b = a.className,
      c = u(b, c, d)
    if (c != b) (a.className = c), (a.parentNode.className += i)
  }
  function u (a, c, d) {
    var b = RegExp('(^|\\s)' + c + '(\\s|$)'),
      e = b.test(a)
    return d ? (e ? a : a + o + c) : e ? a.replace(b, h).replace(x, h) : a
  }
  function k (a, c, d) {
    a.attachEvent('on' + c, d)
  }
  function r (a, c) {
    if (/^https?:\/\//i.test(a))
      return c.substring(0, c.indexOf('/', 8)) ==
        a.substring(0, a.indexOf('/', 8))
        ? a
        : null
    if (a.charAt(0) == '/') return c.substring(0, c.indexOf('/', 8)) + a
    var d = c.split(/[?#]/)[0]
    a.charAt(0) != '?' &&
      d.charAt(d.length - 1) != '/' &&
      (d = d.substring(0, d.lastIndexOf('/') + 1))
    return d + a
  }
  function y (a) {
    if (a)
      return (
        n.open('GET', a, !1),
        n.send(),
        (n.status == 200 ? n.responseText : i)
          .replace(R, i)
          .replace(S, function (c, d, b, e, f) {
            return y(r(b || f, a))
          })
          .replace(T, function (c, d, b) {
            d = d || i
            return ' url(' + d + r(b, a) + d + ') '
          })
      )
    return i
  }
  function U () {
    var a, c
    a = f.getElementsByTagName('BASE')
    for (
      var d = a.length > 0 ? a[0].href : f.location.href, b = 0;
      b < f.styleSheets.length;
      b++
    )
      if (((c = f.styleSheets[b]), c.href != i && (a = r(c.href, d))))
        c.cssText = A(y(a))
    q.length > 0 &&
      setInterval(function () {
        for (var a = 0, c = q.length; a < c; a++) {
          var b = q[a]
          if (b.disabled !== b.a)
            b.disabled
              ? ((b.disabled = !1), (b.a = !0), (b.disabled = !0))
              : (b.a = b.disabled)
        }
      }, 250)
  }
  if (!(/*@cc_on!@*/ true)) {
    var f = document,
      p = f.documentElement,
      n = (function () {
        if (j.XMLHttpRequest) return new XMLHttpRequest()
        try {
          return new ActiveXObject('Microsoft.XMLHTTP')
        } catch (a) {
          return null
        }
      })(),
      m = /MSIE (\d+)/.exec(navigator.userAgent)[1]
    if (!(f.compatMode != 'CSS1Compat' || m < 6 || m > 8 || !n)) {
      var z = {
          NW: '*.Dom.select',
          MooTools: '$$',
          DOMAssistant: '*.$',
          Prototype: '$$',
          YAHOO: '*.util.Selector.query',
          Sizzle: '*',
          jQuery: '*',
          dojo: '*.query'
        },
        t,
        q = [],
        O = 0,
        N = !0,
        M = 'slvzr',
        R = /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g,
        S = /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g,
        T = /\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g,
        L = /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,
        B = /:(:first-(?:line|letter))/g,
        C = /(^|})\s*([^\{]*?[\[:][^{]+)/g,
        G = /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,
        H = /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,
        P = /[^\w-]/g,
        K = /^(INPUT|SELECT|TEXTAREA|BUTTON)$/,
        J = /^(checkbox|radio)$/,
        v = m > 6 ? /[\$\^*]=(['"])\1/ : null,
        E = /([(\[+~])\s+/g,
        F = /\s+([)\]+~])/g,
        Q = /\s+/g,
        x = /^\s*((?:[\S\s]*\S)?)\s*$/,
        i = '',
        o = ' ',
        h = '$1'
      ;(function (a, c) {
        function d () {
          try {
            p.doScroll('left')
          } catch (a) {
            setTimeout(d, 50)
            return
          }
          b('poll')
        }
        function b (d) {
          if (
            !(d.type == 'readystatechange' && f.readyState != 'complete') &&
            ((d.type == 'load' ? a : f).detachEvent('on' + d.type, b, !1),
            !e && (e = !0))
          )
            c.call(a, d.type || d)
        }
        var e = !1,
          g = !0
        if (f.readyState == 'complete') c.call(a, i)
        else {
          if (f.createEventObject && p.doScroll) {
            try {
              g = !a.frameElement
            } catch (h) {}
            g && d()
          }
          k(f, 'readystatechange', b)
          k(a, 'load', b)
        }
      })(j, function () {
        for (var a in z) {
          var c,
            d,
            b = j
          if (j[a]) {
            for (
              c = z[a].replace('*', a).split('.');
              (d = c.shift()) && (b = b[d]);

            );
            if (typeof b == 'function') {
              t = b
              U()
              break
            }
          }
        }
      })
    }
  }
})(this)
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWw1c2hpdi5taW4uanMiLCJqcXVlcnktdWkubWluLmpzIiwianF1ZXJ5Lm1vdXNld2hlZWwubWluLmpzIiwibW9kZXJuaXpyLmpzIiwicmVzcG9uZC5taW4uanMiLCJzZWxlY3Rpdml6ci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ2ZW5kb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQHByZXNlcnZlIEhUTUw1IFNoaXYgMy43LjMgfCBAYWZhcmthcyBAamRhbHRvbiBAam9uX25lYWwgQHJlbSB8IE1JVC9HUEwyIExpY2Vuc2VkXG4qL1xuIWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhLGIpe3ZhciBjPWEuY3JlYXRlRWxlbWVudChcInBcIiksZD1hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXXx8YS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGMuaW5uZXJIVE1MPVwieDxzdHlsZT5cIitiK1wiPC9zdHlsZT5cIixkLmluc2VydEJlZm9yZShjLmxhc3RDaGlsZCxkLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIGQoKXt2YXIgYT10LmVsZW1lbnRzO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBhP2Euc3BsaXQoXCIgXCIpOmF9ZnVuY3Rpb24gZShhLGIpe3ZhciBjPXQuZWxlbWVudHM7XCJzdHJpbmdcIiE9dHlwZW9mIGMmJihjPWMuam9pbihcIiBcIikpLFwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYT1hLmpvaW4oXCIgXCIpKSx0LmVsZW1lbnRzPWMrXCIgXCIrYSxqKGIpfWZ1bmN0aW9uIGYoYSl7dmFyIGI9c1thW3FdXTtyZXR1cm4gYnx8KGI9e30scisrLGFbcV09cixzW3JdPWIpLGJ9ZnVuY3Rpb24gZyhhLGMsZCl7aWYoY3x8KGM9YiksbClyZXR1cm4gYy5jcmVhdGVFbGVtZW50KGEpO2R8fChkPWYoYykpO3ZhciBlO3JldHVybiBlPWQuY2FjaGVbYV0/ZC5jYWNoZVthXS5jbG9uZU5vZGUoKTpwLnRlc3QoYSk/KGQuY2FjaGVbYV09ZC5jcmVhdGVFbGVtKGEpKS5jbG9uZU5vZGUoKTpkLmNyZWF0ZUVsZW0oYSksIWUuY2FuSGF2ZUNoaWxkcmVufHxvLnRlc3QoYSl8fGUudGFnVXJuP2U6ZC5mcmFnLmFwcGVuZENoaWxkKGUpfWZ1bmN0aW9uIGgoYSxjKXtpZihhfHwoYT1iKSxsKXJldHVybiBhLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtjPWN8fGYoYSk7Zm9yKHZhciBlPWMuZnJhZy5jbG9uZU5vZGUoKSxnPTAsaD1kKCksaT1oLmxlbmd0aDtpPmc7ZysrKWUuY3JlYXRlRWxlbWVudChoW2ddKTtyZXR1cm4gZX1mdW5jdGlvbiBpKGEsYil7Yi5jYWNoZXx8KGIuY2FjaGU9e30sYi5jcmVhdGVFbGVtPWEuY3JlYXRlRWxlbWVudCxiLmNyZWF0ZUZyYWc9YS5jcmVhdGVEb2N1bWVudEZyYWdtZW50LGIuZnJhZz1iLmNyZWF0ZUZyYWcoKSksYS5jcmVhdGVFbGVtZW50PWZ1bmN0aW9uKGMpe3JldHVybiB0LnNoaXZNZXRob2RzP2coYyxhLGIpOmIuY3JlYXRlRWxlbShjKX0sYS5jcmVhdGVEb2N1bWVudEZyYWdtZW50PUZ1bmN0aW9uKFwiaCxmXCIsXCJyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1mLmNsb25lTm9kZSgpLGM9bi5jcmVhdGVFbGVtZW50O2guc2hpdk1ldGhvZHMmJihcIitkKCkuam9pbigpLnJlcGxhY2UoL1tcXHdcXC06XSsvZyxmdW5jdGlvbihhKXtyZXR1cm4gYi5jcmVhdGVFbGVtKGEpLGIuZnJhZy5jcmVhdGVFbGVtZW50KGEpLCdjKFwiJythKydcIiknfSkrXCIpO3JldHVybiBufVwiKSh0LGIuZnJhZyl9ZnVuY3Rpb24gaihhKXthfHwoYT1iKTt2YXIgZD1mKGEpO3JldHVybiF0LnNoaXZDU1N8fGt8fGQuaGFzQ1NTfHwoZC5oYXNDU1M9ISFjKGEsXCJhcnRpY2xlLGFzaWRlLGRpYWxvZyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxtYWluLG5hdixzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9bWFya3tiYWNrZ3JvdW5kOiNGRjA7Y29sb3I6IzAwMH10ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9XCIpKSxsfHxpKGEsZCksYX12YXIgayxsLG09XCIzLjcuM1wiLG49YS5odG1sNXx8e30sbz0vXjx8Xig/OmJ1dHRvbnxtYXB8c2VsZWN0fHRleHRhcmVhfG9iamVjdHxpZnJhbWV8b3B0aW9ufG9wdGdyb3VwKSQvaSxwPS9eKD86YXxifGNvZGV8ZGl2fGZpZWxkc2V0fGgxfGgyfGgzfGg0fGg1fGg2fGl8bGFiZWx8bGl8b2x8cHxxfHNwYW58c3Ryb25nfHN0eWxlfHRhYmxlfHRib2R5fHRkfHRofHRyfHVsKSQvaSxxPVwiX2h0bWw1c2hpdlwiLHI9MCxzPXt9OyFmdW5jdGlvbigpe3RyeXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2EuaW5uZXJIVE1MPVwiPHh5ej48L3h5ej5cIixrPVwiaGlkZGVuXCJpbiBhLGw9MT09YS5jaGlsZE5vZGVzLmxlbmd0aHx8ZnVuY3Rpb24oKXtiLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3ZhciBhPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmNsb25lTm9kZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuY3JlYXRlRG9jdW1lbnRGcmFnbWVudHx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuY3JlYXRlRWxlbWVudH0oKX1jYXRjaChjKXtrPSEwLGw9ITB9fSgpO3ZhciB0PXtlbGVtZW50czpuLmVsZW1lbnRzfHxcImFiYnIgYXJ0aWNsZSBhc2lkZSBhdWRpbyBiZGkgY2FudmFzIGRhdGEgZGF0YWxpc3QgZGV0YWlscyBkaWFsb2cgZmlnY2FwdGlvbiBmaWd1cmUgZm9vdGVyIGhlYWRlciBoZ3JvdXAgbWFpbiBtYXJrIG1ldGVyIG5hdiBvdXRwdXQgcGljdHVyZSBwcm9ncmVzcyBzZWN0aW9uIHN1bW1hcnkgdGVtcGxhdGUgdGltZSB2aWRlb1wiLHZlcnNpb246bSxzaGl2Q1NTOm4uc2hpdkNTUyE9PSExLHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzOmwsc2hpdk1ldGhvZHM6bi5zaGl2TWV0aG9kcyE9PSExLHR5cGU6XCJkZWZhdWx0XCIsc2hpdkRvY3VtZW50OmosY3JlYXRlRWxlbWVudDpnLGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6aCxhZGRFbGVtZW50czplfTthLmh0bWw1PXQsaihiKSxcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKG1vZHVsZS5leHBvcnRzPXQpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGRvY3VtZW50KTsiLCIvKiEgalF1ZXJ5IFVJIC0gdjEuMTIuMSAtIDIwMTktMTEtMTJcbiogaHR0cDovL2pxdWVyeXVpLmNvbVxuKiBJbmNsdWRlczogd2lkZ2V0LmpzLCBwb3NpdGlvbi5qcywgZGF0YS5qcywgZGlzYWJsZS1zZWxlY3Rpb24uanMsIGZvY3VzYWJsZS5qcywgZm9ybS1yZXNldC1taXhpbi5qcywganF1ZXJ5LTEtNy5qcywga2V5Y29kZS5qcywgbGFiZWxzLmpzLCBzY3JvbGwtcGFyZW50LmpzLCB0YWJiYWJsZS5qcywgdW5pcXVlLWlkLmpzLCB3aWRnZXRzL2RyYWdnYWJsZS5qcywgd2lkZ2V0cy9kcm9wcGFibGUuanMsIHdpZGdldHMvcmVzaXphYmxlLmpzLCB3aWRnZXRzL3NlbGVjdGFibGUuanMsIHdpZGdldHMvc29ydGFibGUuanMsIHdpZGdldHMvYWNjb3JkaW9uLmpzLCB3aWRnZXRzL2F1dG9jb21wbGV0ZS5qcywgd2lkZ2V0cy9idXR0b24uanMsIHdpZGdldHMvY2hlY2tib3hyYWRpby5qcywgd2lkZ2V0cy9jb250cm9sZ3JvdXAuanMsIHdpZGdldHMvZGF0ZXBpY2tlci5qcywgd2lkZ2V0cy9kaWFsb2cuanMsIHdpZGdldHMvbWVudS5qcywgd2lkZ2V0cy9tb3VzZS5qcywgd2lkZ2V0cy9wcm9ncmVzc2Jhci5qcywgd2lkZ2V0cy9zZWxlY3RtZW51LmpzLCB3aWRnZXRzL3NsaWRlci5qcywgd2lkZ2V0cy9zcGlubmVyLmpzLCB3aWRnZXRzL3RhYnMuanMsIHdpZGdldHMvdG9vbHRpcC5qcywgZWZmZWN0LmpzLCBlZmZlY3RzL2VmZmVjdC1ibGluZC5qcywgZWZmZWN0cy9lZmZlY3QtYm91bmNlLmpzLCBlZmZlY3RzL2VmZmVjdC1jbGlwLmpzLCBlZmZlY3RzL2VmZmVjdC1kcm9wLmpzLCBlZmZlY3RzL2VmZmVjdC1leHBsb2RlLmpzLCBlZmZlY3RzL2VmZmVjdC1mYWRlLmpzLCBlZmZlY3RzL2VmZmVjdC1mb2xkLmpzLCBlZmZlY3RzL2VmZmVjdC1oaWdobGlnaHQuanMsIGVmZmVjdHMvZWZmZWN0LXB1ZmYuanMsIGVmZmVjdHMvZWZmZWN0LXB1bHNhdGUuanMsIGVmZmVjdHMvZWZmZWN0LXNjYWxlLmpzLCBlZmZlY3RzL2VmZmVjdC1zaGFrZS5qcywgZWZmZWN0cy9lZmZlY3Qtc2l6ZS5qcywgZWZmZWN0cy9lZmZlY3Qtc2xpZGUuanMsIGVmZmVjdHMvZWZmZWN0LXRyYW5zZmVyLmpzXG4qIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzOyBMaWNlbnNlZCBNSVQgKi9cblxuKGZ1bmN0aW9uKHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLHQpOnQoalF1ZXJ5KX0pKGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCl7Zm9yKHZhciBlPXQuY3NzKFwidmlzaWJpbGl0eVwiKTtcImluaGVyaXRcIj09PWU7KXQ9dC5wYXJlbnQoKSxlPXQuY3NzKFwidmlzaWJpbGl0eVwiKTtyZXR1cm5cImhpZGRlblwiIT09ZX1mdW5jdGlvbiBpKHQpe2Zvcih2YXIgZSxpO3QubGVuZ3RoJiZ0WzBdIT09ZG9jdW1lbnQ7KXtpZihlPXQuY3NzKFwicG9zaXRpb25cIiksKFwiYWJzb2x1dGVcIj09PWV8fFwicmVsYXRpdmVcIj09PWV8fFwiZml4ZWRcIj09PWUpJiYoaT1wYXJzZUludCh0LmNzcyhcInpJbmRleFwiKSwxMCksIWlzTmFOKGkpJiYwIT09aSkpcmV0dXJuIGk7dD10LnBhcmVudCgpfXJldHVybiAwfWZ1bmN0aW9uIHMoKXt0aGlzLl9jdXJJbnN0PW51bGwsdGhpcy5fa2V5RXZlbnQ9ITEsdGhpcy5fZGlzYWJsZWRJbnB1dHM9W10sdGhpcy5fZGF0ZXBpY2tlclNob3dpbmc9ITEsdGhpcy5faW5EaWFsb2c9ITEsdGhpcy5fbWFpbkRpdklkPVwidWktZGF0ZXBpY2tlci1kaXZcIix0aGlzLl9pbmxpbmVDbGFzcz1cInVpLWRhdGVwaWNrZXItaW5saW5lXCIsdGhpcy5fYXBwZW5kQ2xhc3M9XCJ1aS1kYXRlcGlja2VyLWFwcGVuZFwiLHRoaXMuX3RyaWdnZXJDbGFzcz1cInVpLWRhdGVwaWNrZXItdHJpZ2dlclwiLHRoaXMuX2RpYWxvZ0NsYXNzPVwidWktZGF0ZXBpY2tlci1kaWFsb2dcIix0aGlzLl9kaXNhYmxlQ2xhc3M9XCJ1aS1kYXRlcGlja2VyLWRpc2FibGVkXCIsdGhpcy5fdW5zZWxlY3RhYmxlQ2xhc3M9XCJ1aS1kYXRlcGlja2VyLXVuc2VsZWN0YWJsZVwiLHRoaXMuX2N1cnJlbnRDbGFzcz1cInVpLWRhdGVwaWNrZXItY3VycmVudC1kYXlcIix0aGlzLl9kYXlPdmVyQ2xhc3M9XCJ1aS1kYXRlcGlja2VyLWRheXMtY2VsbC1vdmVyXCIsdGhpcy5yZWdpb25hbD1bXSx0aGlzLnJlZ2lvbmFsW1wiXCJdPXtjbG9zZVRleHQ6XCJEb25lXCIscHJldlRleHQ6XCJQcmV2XCIsbmV4dFRleHQ6XCJOZXh0XCIsY3VycmVudFRleHQ6XCJUb2RheVwiLG1vbnRoTmFtZXM6W1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLG1vbnRoTmFtZXNTaG9ydDpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLGRheU5hbWVzOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdLGRheU5hbWVzU2hvcnQ6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLGRheU5hbWVzTWluOltcIlN1XCIsXCJNb1wiLFwiVHVcIixcIldlXCIsXCJUaFwiLFwiRnJcIixcIlNhXCJdLHdlZWtIZWFkZXI6XCJXa1wiLGRhdGVGb3JtYXQ6XCJtbS9kZC95eVwiLGZpcnN0RGF5OjAsaXNSVEw6ITEsc2hvd01vbnRoQWZ0ZXJZZWFyOiExLHllYXJTdWZmaXg6XCJcIn0sdGhpcy5fZGVmYXVsdHM9e3Nob3dPbjpcImZvY3VzXCIsc2hvd0FuaW06XCJmYWRlSW5cIixzaG93T3B0aW9uczp7fSxkZWZhdWx0RGF0ZTpudWxsLGFwcGVuZFRleHQ6XCJcIixidXR0b25UZXh0OlwiLi4uXCIsYnV0dG9uSW1hZ2U6XCJcIixidXR0b25JbWFnZU9ubHk6ITEsaGlkZUlmTm9QcmV2TmV4dDohMSxuYXZpZ2F0aW9uQXNEYXRlRm9ybWF0OiExLGdvdG9DdXJyZW50OiExLGNoYW5nZU1vbnRoOiExLGNoYW5nZVllYXI6ITEseWVhclJhbmdlOlwiYy0xMDpjKzEwXCIsc2hvd090aGVyTW9udGhzOiExLHNlbGVjdE90aGVyTW9udGhzOiExLHNob3dXZWVrOiExLGNhbGN1bGF0ZVdlZWs6dGhpcy5pc284NjAxV2VlayxzaG9ydFllYXJDdXRvZmY6XCIrMTBcIixtaW5EYXRlOm51bGwsbWF4RGF0ZTpudWxsLGR1cmF0aW9uOlwiZmFzdFwiLGJlZm9yZVNob3dEYXk6bnVsbCxiZWZvcmVTaG93Om51bGwsb25TZWxlY3Q6bnVsbCxvbkNoYW5nZU1vbnRoWWVhcjpudWxsLG9uQ2xvc2U6bnVsbCxudW1iZXJPZk1vbnRoczoxLHNob3dDdXJyZW50QXRQb3M6MCxzdGVwTW9udGhzOjEsc3RlcEJpZ01vbnRoczoxMixhbHRGaWVsZDpcIlwiLGFsdEZvcm1hdDpcIlwiLGNvbnN0cmFpbklucHV0OiEwLHNob3dCdXR0b25QYW5lbDohMSxhdXRvU2l6ZTohMSxkaXNhYmxlZDohMX0sdC5leHRlbmQodGhpcy5fZGVmYXVsdHMsdGhpcy5yZWdpb25hbFtcIlwiXSksdGhpcy5yZWdpb25hbC5lbj10LmV4dGVuZCghMCx7fSx0aGlzLnJlZ2lvbmFsW1wiXCJdKSx0aGlzLnJlZ2lvbmFsW1wiZW4tVVNcIl09dC5leHRlbmQoITAse30sdGhpcy5yZWdpb25hbC5lbiksdGhpcy5kcERpdj1uKHQoXCI8ZGl2IGlkPSdcIit0aGlzLl9tYWluRGl2SWQrXCInIGNsYXNzPSd1aS1kYXRlcGlja2VyIHVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudCB1aS1oZWxwZXItY2xlYXJmaXggdWktY29ybmVyLWFsbCc+PC9kaXY+XCIpKX1mdW5jdGlvbiBuKGUpe3ZhciBpPVwiYnV0dG9uLCAudWktZGF0ZXBpY2tlci1wcmV2LCAudWktZGF0ZXBpY2tlci1uZXh0LCAudWktZGF0ZXBpY2tlci1jYWxlbmRhciB0ZCBhXCI7cmV0dXJuIGUub24oXCJtb3VzZW91dFwiLGksZnVuY3Rpb24oKXt0KHRoaXMpLnJlbW92ZUNsYXNzKFwidWktc3RhdGUtaG92ZXJcIiksLTEhPT10aGlzLmNsYXNzTmFtZS5pbmRleE9mKFwidWktZGF0ZXBpY2tlci1wcmV2XCIpJiZ0KHRoaXMpLnJlbW92ZUNsYXNzKFwidWktZGF0ZXBpY2tlci1wcmV2LWhvdmVyXCIpLC0xIT09dGhpcy5jbGFzc05hbWUuaW5kZXhPZihcInVpLWRhdGVwaWNrZXItbmV4dFwiKSYmdCh0aGlzKS5yZW1vdmVDbGFzcyhcInVpLWRhdGVwaWNrZXItbmV4dC1ob3ZlclwiKX0pLm9uKFwibW91c2VvdmVyXCIsaSxvKX1mdW5jdGlvbiBvKCl7dC5kYXRlcGlja2VyLl9pc0Rpc2FibGVkRGF0ZXBpY2tlcihwLmlubGluZT9wLmRwRGl2LnBhcmVudCgpWzBdOnAuaW5wdXRbMF0pfHwodCh0aGlzKS5wYXJlbnRzKFwiLnVpLWRhdGVwaWNrZXItY2FsZW5kYXJcIikuZmluZChcImFcIikucmVtb3ZlQ2xhc3MoXCJ1aS1zdGF0ZS1ob3ZlclwiKSx0KHRoaXMpLmFkZENsYXNzKFwidWktc3RhdGUtaG92ZXJcIiksLTEhPT10aGlzLmNsYXNzTmFtZS5pbmRleE9mKFwidWktZGF0ZXBpY2tlci1wcmV2XCIpJiZ0KHRoaXMpLmFkZENsYXNzKFwidWktZGF0ZXBpY2tlci1wcmV2LWhvdmVyXCIpLC0xIT09dGhpcy5jbGFzc05hbWUuaW5kZXhPZihcInVpLWRhdGVwaWNrZXItbmV4dFwiKSYmdCh0aGlzKS5hZGRDbGFzcyhcInVpLWRhdGVwaWNrZXItbmV4dC1ob3ZlclwiKSl9ZnVuY3Rpb24gYShlLGkpe3QuZXh0ZW5kKGUsaSk7Zm9yKHZhciBzIGluIGkpbnVsbD09aVtzXSYmKGVbc109aVtzXSk7cmV0dXJuIGV9ZnVuY3Rpb24gcih0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT10aGlzLmVsZW1lbnQudmFsKCk7dC5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5fcmVmcmVzaCgpLGUhPT10aGlzLmVsZW1lbnQudmFsKCkmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VcIil9fXQudWk9dC51aXx8e30sdC51aS52ZXJzaW9uPVwiMS4xMi4xXCI7dmFyIGg9MCxsPUFycmF5LnByb3RvdHlwZS5zbGljZTt0LmNsZWFuRGF0YT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oaSl7dmFyIHMsbixvO2ZvcihvPTA7bnVsbCE9KG49aVtvXSk7bysrKXRyeXtzPXQuX2RhdGEobixcImV2ZW50c1wiKSxzJiZzLnJlbW92ZSYmdChuKS50cmlnZ2VySGFuZGxlcihcInJlbW92ZVwiKX1jYXRjaChhKXt9ZShpKX19KHQuY2xlYW5EYXRhKSx0LndpZGdldD1mdW5jdGlvbihlLGkscyl7dmFyIG4sbyxhLHI9e30saD1lLnNwbGl0KFwiLlwiKVswXTtlPWUuc3BsaXQoXCIuXCIpWzFdO3ZhciBsPWgrXCItXCIrZTtyZXR1cm4gc3x8KHM9aSxpPXQuV2lkZ2V0KSx0LmlzQXJyYXkocykmJihzPXQuZXh0ZW5kLmFwcGx5KG51bGwsW3t9XS5jb25jYXQocykpKSx0LmV4cHJbXCI6XCJdW2wudG9Mb3dlckNhc2UoKV09ZnVuY3Rpb24oZSl7cmV0dXJuISF0LmRhdGEoZSxsKX0sdFtoXT10W2hdfHx7fSxuPXRbaF1bZV0sbz10W2hdW2VdPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuX2NyZWF0ZVdpZGdldD8oYXJndW1lbnRzLmxlbmd0aCYmdGhpcy5fY3JlYXRlV2lkZ2V0KHQsZSksdm9pZCAwKTpuZXcgbyh0LGUpfSx0LmV4dGVuZChvLG4se3ZlcnNpb246cy52ZXJzaW9uLF9wcm90bzp0LmV4dGVuZCh7fSxzKSxfY2hpbGRDb25zdHJ1Y3RvcnM6W119KSxhPW5ldyBpLGEub3B0aW9ucz10LndpZGdldC5leHRlbmQoe30sYS5vcHRpb25zKSx0LmVhY2gocyxmdW5jdGlvbihlLHMpe3JldHVybiB0LmlzRnVuY3Rpb24ocyk/KHJbZV09ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7cmV0dXJuIGkucHJvdG90eXBlW2VdLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBuKHQpe3JldHVybiBpLnByb3RvdHlwZVtlXS5hcHBseSh0aGlzLHQpfXJldHVybiBmdW5jdGlvbigpe3ZhciBlLGk9dGhpcy5fc3VwZXIsbz10aGlzLl9zdXBlckFwcGx5O3JldHVybiB0aGlzLl9zdXBlcj10LHRoaXMuX3N1cGVyQXBwbHk9bixlPXMuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX3N1cGVyPWksdGhpcy5fc3VwZXJBcHBseT1vLGV9fSgpLHZvaWQgMCk6KHJbZV09cyx2b2lkIDApfSksby5wcm90b3R5cGU9dC53aWRnZXQuZXh0ZW5kKGEse3dpZGdldEV2ZW50UHJlZml4Om4/YS53aWRnZXRFdmVudFByZWZpeHx8ZTplfSxyLHtjb25zdHJ1Y3RvcjpvLG5hbWVzcGFjZTpoLHdpZGdldE5hbWU6ZSx3aWRnZXRGdWxsTmFtZTpsfSksbj8odC5lYWNoKG4uX2NoaWxkQ29uc3RydWN0b3JzLGZ1bmN0aW9uKGUsaSl7dmFyIHM9aS5wcm90b3R5cGU7dC53aWRnZXQocy5uYW1lc3BhY2UrXCIuXCIrcy53aWRnZXROYW1lLG8saS5fcHJvdG8pfSksZGVsZXRlIG4uX2NoaWxkQ29uc3RydWN0b3JzKTppLl9jaGlsZENvbnN0cnVjdG9ycy5wdXNoKG8pLHQud2lkZ2V0LmJyaWRnZShlLG8pLG99LHQud2lkZ2V0LmV4dGVuZD1mdW5jdGlvbihlKXtmb3IodmFyIGkscyxuPWwuY2FsbChhcmd1bWVudHMsMSksbz0wLGE9bi5sZW5ndGg7YT5vO28rKylmb3IoaSBpbiBuW29dKXM9bltvXVtpXSxuW29dLmhhc093blByb3BlcnR5KGkpJiZ2b2lkIDAhPT1zJiYoZVtpXT10LmlzUGxhaW5PYmplY3Qocyk/dC5pc1BsYWluT2JqZWN0KGVbaV0pP3Qud2lkZ2V0LmV4dGVuZCh7fSxlW2ldLHMpOnQud2lkZ2V0LmV4dGVuZCh7fSxzKTpzKTtyZXR1cm4gZX0sdC53aWRnZXQuYnJpZGdlPWZ1bmN0aW9uKGUsaSl7dmFyIHM9aS5wcm90b3R5cGUud2lkZ2V0RnVsbE5hbWV8fGU7dC5mbltlXT1mdW5jdGlvbihuKXt2YXIgbz1cInN0cmluZ1wiPT10eXBlb2YgbixhPWwuY2FsbChhcmd1bWVudHMsMSkscj10aGlzO3JldHVybiBvP3RoaXMubGVuZ3RofHxcImluc3RhbmNlXCIhPT1uP3RoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBpLG89dC5kYXRhKHRoaXMscyk7cmV0dXJuXCJpbnN0YW5jZVwiPT09bj8ocj1vLCExKTpvP3QuaXNGdW5jdGlvbihvW25dKSYmXCJfXCIhPT1uLmNoYXJBdCgwKT8oaT1vW25dLmFwcGx5KG8sYSksaSE9PW8mJnZvaWQgMCE9PWk/KHI9aSYmaS5qcXVlcnk/ci5wdXNoU3RhY2soaS5nZXQoKSk6aSwhMSk6dm9pZCAwKTp0LmVycm9yKFwibm8gc3VjaCBtZXRob2QgJ1wiK24rXCInIGZvciBcIitlK1wiIHdpZGdldCBpbnN0YW5jZVwiKTp0LmVycm9yKFwiY2Fubm90IGNhbGwgbWV0aG9kcyBvbiBcIitlK1wiIHByaW9yIHRvIGluaXRpYWxpemF0aW9uOyBcIitcImF0dGVtcHRlZCB0byBjYWxsIG1ldGhvZCAnXCIrbitcIidcIil9KTpyPXZvaWQgMDooYS5sZW5ndGgmJihuPXQud2lkZ2V0LmV4dGVuZC5hcHBseShudWxsLFtuXS5jb25jYXQoYSkpKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10LmRhdGEodGhpcyxzKTtlPyhlLm9wdGlvbihufHx7fSksZS5faW5pdCYmZS5faW5pdCgpKTp0LmRhdGEodGhpcyxzLG5ldyBpKG4sdGhpcykpfSkpLHJ9fSx0LldpZGdldD1mdW5jdGlvbigpe30sdC5XaWRnZXQuX2NoaWxkQ29uc3RydWN0b3JzPVtdLHQuV2lkZ2V0LnByb3RvdHlwZT17d2lkZ2V0TmFtZTpcIndpZGdldFwiLHdpZGdldEV2ZW50UHJlZml4OlwiXCIsZGVmYXVsdEVsZW1lbnQ6XCI8ZGl2PlwiLG9wdGlvbnM6e2NsYXNzZXM6e30sZGlzYWJsZWQ6ITEsY3JlYXRlOm51bGx9LF9jcmVhdGVXaWRnZXQ6ZnVuY3Rpb24oZSxpKXtpPXQoaXx8dGhpcy5kZWZhdWx0RWxlbWVudHx8dGhpcylbMF0sdGhpcy5lbGVtZW50PXQoaSksdGhpcy51dWlkPWgrKyx0aGlzLmV2ZW50TmFtZXNwYWNlPVwiLlwiK3RoaXMud2lkZ2V0TmFtZSt0aGlzLnV1aWQsdGhpcy5iaW5kaW5ncz10KCksdGhpcy5ob3ZlcmFibGU9dCgpLHRoaXMuZm9jdXNhYmxlPXQoKSx0aGlzLmNsYXNzZXNFbGVtZW50TG9va3VwPXt9LGkhPT10aGlzJiYodC5kYXRhKGksdGhpcy53aWRnZXRGdWxsTmFtZSx0aGlzKSx0aGlzLl9vbighMCx0aGlzLmVsZW1lbnQse3JlbW92ZTpmdW5jdGlvbih0KXt0LnRhcmdldD09PWkmJnRoaXMuZGVzdHJveSgpfX0pLHRoaXMuZG9jdW1lbnQ9dChpLnN0eWxlP2kub3duZXJEb2N1bWVudDppLmRvY3VtZW50fHxpKSx0aGlzLndpbmRvdz10KHRoaXMuZG9jdW1lbnRbMF0uZGVmYXVsdFZpZXd8fHRoaXMuZG9jdW1lbnRbMF0ucGFyZW50V2luZG93KSksdGhpcy5vcHRpb25zPXQud2lkZ2V0LmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMsdGhpcy5fZ2V0Q3JlYXRlT3B0aW9ucygpLGUpLHRoaXMuX2NyZWF0ZSgpLHRoaXMub3B0aW9ucy5kaXNhYmxlZCYmdGhpcy5fc2V0T3B0aW9uRGlzYWJsZWQodGhpcy5vcHRpb25zLmRpc2FibGVkKSx0aGlzLl90cmlnZ2VyKFwiY3JlYXRlXCIsbnVsbCx0aGlzLl9nZXRDcmVhdGVFdmVudERhdGEoKSksdGhpcy5faW5pdCgpfSxfZ2V0Q3JlYXRlT3B0aW9uczpmdW5jdGlvbigpe3JldHVybnt9fSxfZ2V0Q3JlYXRlRXZlbnREYXRhOnQubm9vcCxfY3JlYXRlOnQubm9vcCxfaW5pdDp0Lm5vb3AsZGVzdHJveTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5fZGVzdHJveSgpLHQuZWFjaCh0aGlzLmNsYXNzZXNFbGVtZW50TG9va3VwLGZ1bmN0aW9uKHQsaSl7ZS5fcmVtb3ZlQ2xhc3MoaSx0KX0pLHRoaXMuZWxlbWVudC5vZmYodGhpcy5ldmVudE5hbWVzcGFjZSkucmVtb3ZlRGF0YSh0aGlzLndpZGdldEZ1bGxOYW1lKSx0aGlzLndpZGdldCgpLm9mZih0aGlzLmV2ZW50TmFtZXNwYWNlKS5yZW1vdmVBdHRyKFwiYXJpYS1kaXNhYmxlZFwiKSx0aGlzLmJpbmRpbmdzLm9mZih0aGlzLmV2ZW50TmFtZXNwYWNlKX0sX2Rlc3Ryb3k6dC5ub29wLHdpZGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnR9LG9wdGlvbjpmdW5jdGlvbihlLGkpe3ZhciBzLG4sbyxhPWU7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHQud2lkZ2V0LmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKWlmKGE9e30scz1lLnNwbGl0KFwiLlwiKSxlPXMuc2hpZnQoKSxzLmxlbmd0aCl7Zm9yKG49YVtlXT10LndpZGdldC5leHRlbmQoe30sdGhpcy5vcHRpb25zW2VdKSxvPTA7cy5sZW5ndGgtMT5vO28rKyluW3Nbb11dPW5bc1tvXV18fHt9LG49bltzW29dXTtpZihlPXMucG9wKCksMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PW5bZV0/bnVsbDpuW2VdO25bZV09aX1lbHNle2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT10aGlzLm9wdGlvbnNbZV0/bnVsbDp0aGlzLm9wdGlvbnNbZV07YVtlXT1pfXJldHVybiB0aGlzLl9zZXRPcHRpb25zKGEpLHRoaXN9LF9zZXRPcHRpb25zOmZ1bmN0aW9uKHQpe3ZhciBlO2ZvcihlIGluIHQpdGhpcy5fc2V0T3B0aW9uKGUsdFtlXSk7cmV0dXJuIHRoaXN9LF9zZXRPcHRpb246ZnVuY3Rpb24odCxlKXtyZXR1cm5cImNsYXNzZXNcIj09PXQmJnRoaXMuX3NldE9wdGlvbkNsYXNzZXMoZSksdGhpcy5vcHRpb25zW3RdPWUsXCJkaXNhYmxlZFwiPT09dCYmdGhpcy5fc2V0T3B0aW9uRGlzYWJsZWQoZSksdGhpc30sX3NldE9wdGlvbkNsYXNzZXM6ZnVuY3Rpb24oZSl7dmFyIGkscyxuO2ZvcihpIGluIGUpbj10aGlzLmNsYXNzZXNFbGVtZW50TG9va3VwW2ldLGVbaV0hPT10aGlzLm9wdGlvbnMuY2xhc3Nlc1tpXSYmbiYmbi5sZW5ndGgmJihzPXQobi5nZXQoKSksdGhpcy5fcmVtb3ZlQ2xhc3MobixpKSxzLmFkZENsYXNzKHRoaXMuX2NsYXNzZXMoe2VsZW1lbnQ6cyxrZXlzOmksY2xhc3NlczplLGFkZDohMH0pKSl9LF9zZXRPcHRpb25EaXNhYmxlZDpmdW5jdGlvbih0KXt0aGlzLl90b2dnbGVDbGFzcyh0aGlzLndpZGdldCgpLHRoaXMud2lkZ2V0RnVsbE5hbWUrXCItZGlzYWJsZWRcIixudWxsLCEhdCksdCYmKHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMuaG92ZXJhYmxlLG51bGwsXCJ1aS1zdGF0ZS1ob3ZlclwiKSx0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLmZvY3VzYWJsZSxudWxsLFwidWktc3RhdGUtZm9jdXNcIikpfSxlbmFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc2V0T3B0aW9ucyh7ZGlzYWJsZWQ6ITF9KX0sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9zZXRPcHRpb25zKHtkaXNhYmxlZDohMH0pfSxfY2xhc3NlczpmdW5jdGlvbihlKXtmdW5jdGlvbiBpKGksbyl7dmFyIGEscjtmb3Iocj0wO2kubGVuZ3RoPnI7cisrKWE9bi5jbGFzc2VzRWxlbWVudExvb2t1cFtpW3JdXXx8dCgpLGE9ZS5hZGQ/dCh0LnVuaXF1ZShhLmdldCgpLmNvbmNhdChlLmVsZW1lbnQuZ2V0KCkpKSk6dChhLm5vdChlLmVsZW1lbnQpLmdldCgpKSxuLmNsYXNzZXNFbGVtZW50TG9va3VwW2lbcl1dPWEscy5wdXNoKGlbcl0pLG8mJmUuY2xhc3Nlc1tpW3JdXSYmcy5wdXNoKGUuY2xhc3Nlc1tpW3JdXSl9dmFyIHM9W10sbj10aGlzO3JldHVybiBlPXQuZXh0ZW5kKHtlbGVtZW50OnRoaXMuZWxlbWVudCxjbGFzc2VzOnRoaXMub3B0aW9ucy5jbGFzc2VzfHx7fX0sZSksdGhpcy5fb24oZS5lbGVtZW50LHtyZW1vdmU6XCJfdW50cmFja0NsYXNzZXNFbGVtZW50XCJ9KSxlLmtleXMmJmkoZS5rZXlzLm1hdGNoKC9cXFMrL2cpfHxbXSwhMCksZS5leHRyYSYmaShlLmV4dHJhLm1hdGNoKC9cXFMrL2cpfHxbXSkscy5qb2luKFwiIFwiKX0sX3VudHJhY2tDbGFzc2VzRWxlbWVudDpmdW5jdGlvbihlKXt2YXIgaT10aGlzO3QuZWFjaChpLmNsYXNzZXNFbGVtZW50TG9va3VwLGZ1bmN0aW9uKHMsbil7LTEhPT10LmluQXJyYXkoZS50YXJnZXQsbikmJihpLmNsYXNzZXNFbGVtZW50TG9va3VwW3NdPXQobi5ub3QoZS50YXJnZXQpLmdldCgpKSl9KX0sX3JlbW92ZUNsYXNzOmZ1bmN0aW9uKHQsZSxpKXtyZXR1cm4gdGhpcy5fdG9nZ2xlQ2xhc3ModCxlLGksITEpfSxfYWRkQ2xhc3M6ZnVuY3Rpb24odCxlLGkpe3JldHVybiB0aGlzLl90b2dnbGVDbGFzcyh0LGUsaSwhMCl9LF90b2dnbGVDbGFzczpmdW5jdGlvbih0LGUsaSxzKXtzPVwiYm9vbGVhblwiPT10eXBlb2Ygcz9zOmk7dmFyIG49XCJzdHJpbmdcIj09dHlwZW9mIHR8fG51bGw9PT10LG89e2V4dHJhOm4/ZTppLGtleXM6bj90OmUsZWxlbWVudDpuP3RoaXMuZWxlbWVudDp0LGFkZDpzfTtyZXR1cm4gby5lbGVtZW50LnRvZ2dsZUNsYXNzKHRoaXMuX2NsYXNzZXMobykscyksdGhpc30sX29uOmZ1bmN0aW9uKGUsaSxzKXt2YXIgbixvPXRoaXM7XCJib29sZWFuXCIhPXR5cGVvZiBlJiYocz1pLGk9ZSxlPSExKSxzPyhpPW49dChpKSx0aGlzLmJpbmRpbmdzPXRoaXMuYmluZGluZ3MuYWRkKGkpKToocz1pLGk9dGhpcy5lbGVtZW50LG49dGhpcy53aWRnZXQoKSksdC5lYWNoKHMsZnVuY3Rpb24ocyxhKXtmdW5jdGlvbiByKCl7cmV0dXJuIGV8fG8ub3B0aW9ucy5kaXNhYmxlZCE9PSEwJiYhdCh0aGlzKS5oYXNDbGFzcyhcInVpLXN0YXRlLWRpc2FibGVkXCIpPyhcInN0cmluZ1wiPT10eXBlb2YgYT9vW2FdOmEpLmFwcGx5KG8sYXJndW1lbnRzKTp2b2lkIDB9XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihyLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8ci5ndWlkfHx0Lmd1aWQrKyk7dmFyIGg9cy5tYXRjaCgvXihbXFx3Oi1dKilcXHMqKC4qKSQvKSxsPWhbMV0rby5ldmVudE5hbWVzcGFjZSx1PWhbMl07dT9uLm9uKGwsdSxyKTppLm9uKGwscil9KX0sX29mZjpmdW5jdGlvbihlLGkpe2k9KGl8fFwiXCIpLnNwbGl0KFwiIFwiKS5qb2luKHRoaXMuZXZlbnROYW1lc3BhY2UrXCIgXCIpK3RoaXMuZXZlbnROYW1lc3BhY2UsZS5vZmYoaSkub2ZmKGkpLHRoaXMuYmluZGluZ3M9dCh0aGlzLmJpbmRpbmdzLm5vdChlKS5nZXQoKSksdGhpcy5mb2N1c2FibGU9dCh0aGlzLmZvY3VzYWJsZS5ub3QoZSkuZ2V0KCkpLHRoaXMuaG92ZXJhYmxlPXQodGhpcy5ob3ZlcmFibGUubm90KGUpLmdldCgpKX0sX2RlbGF5OmZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gaSgpe3JldHVybihcInN0cmluZ1wiPT10eXBlb2YgdD9zW3RdOnQpLmFwcGx5KHMsYXJndW1lbnRzKX12YXIgcz10aGlzO3JldHVybiBzZXRUaW1lb3V0KGksZXx8MCl9LF9ob3ZlcmFibGU6ZnVuY3Rpb24oZSl7dGhpcy5ob3ZlcmFibGU9dGhpcy5ob3ZlcmFibGUuYWRkKGUpLHRoaXMuX29uKGUse21vdXNlZW50ZXI6ZnVuY3Rpb24oZSl7dGhpcy5fYWRkQ2xhc3ModChlLmN1cnJlbnRUYXJnZXQpLG51bGwsXCJ1aS1zdGF0ZS1ob3ZlclwiKX0sbW91c2VsZWF2ZTpmdW5jdGlvbihlKXt0aGlzLl9yZW1vdmVDbGFzcyh0KGUuY3VycmVudFRhcmdldCksbnVsbCxcInVpLXN0YXRlLWhvdmVyXCIpfX0pfSxfZm9jdXNhYmxlOmZ1bmN0aW9uKGUpe3RoaXMuZm9jdXNhYmxlPXRoaXMuZm9jdXNhYmxlLmFkZChlKSx0aGlzLl9vbihlLHtmb2N1c2luOmZ1bmN0aW9uKGUpe3RoaXMuX2FkZENsYXNzKHQoZS5jdXJyZW50VGFyZ2V0KSxudWxsLFwidWktc3RhdGUtZm9jdXNcIil9LGZvY3Vzb3V0OmZ1bmN0aW9uKGUpe3RoaXMuX3JlbW92ZUNsYXNzKHQoZS5jdXJyZW50VGFyZ2V0KSxudWxsLFwidWktc3RhdGUtZm9jdXNcIil9fSl9LF90cmlnZ2VyOmZ1bmN0aW9uKGUsaSxzKXt2YXIgbixvLGE9dGhpcy5vcHRpb25zW2VdO2lmKHM9c3x8e30saT10LkV2ZW50KGkpLGkudHlwZT0oZT09PXRoaXMud2lkZ2V0RXZlbnRQcmVmaXg/ZTp0aGlzLndpZGdldEV2ZW50UHJlZml4K2UpLnRvTG93ZXJDYXNlKCksaS50YXJnZXQ9dGhpcy5lbGVtZW50WzBdLG89aS5vcmlnaW5hbEV2ZW50KWZvcihuIGluIG8pbiBpbiBpfHwoaVtuXT1vW25dKTtyZXR1cm4gdGhpcy5lbGVtZW50LnRyaWdnZXIoaSxzKSwhKHQuaXNGdW5jdGlvbihhKSYmYS5hcHBseSh0aGlzLmVsZW1lbnRbMF0sW2ldLmNvbmNhdChzKSk9PT0hMXx8aS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl9fSx0LmVhY2goe3Nob3c6XCJmYWRlSW5cIixoaWRlOlwiZmFkZU91dFwifSxmdW5jdGlvbihlLGkpe3QuV2lkZ2V0LnByb3RvdHlwZVtcIl9cIitlXT1mdW5jdGlvbihzLG4sbyl7XCJzdHJpbmdcIj09dHlwZW9mIG4mJihuPXtlZmZlY3Q6bn0pO3ZhciBhLHI9bj9uPT09ITB8fFwibnVtYmVyXCI9PXR5cGVvZiBuP2k6bi5lZmZlY3R8fGk6ZTtuPW58fHt9LFwibnVtYmVyXCI9PXR5cGVvZiBuJiYobj17ZHVyYXRpb246bn0pLGE9IXQuaXNFbXB0eU9iamVjdChuKSxuLmNvbXBsZXRlPW8sbi5kZWxheSYmcy5kZWxheShuLmRlbGF5KSxhJiZ0LmVmZmVjdHMmJnQuZWZmZWN0cy5lZmZlY3Rbcl0/c1tlXShuKTpyIT09ZSYmc1tyXT9zW3JdKG4uZHVyYXRpb24sbi5lYXNpbmcsbyk6cy5xdWV1ZShmdW5jdGlvbihpKXt0KHRoaXMpW2VdKCksbyYmby5jYWxsKHNbMF0pLGkoKX0pfX0pLHQud2lkZ2V0LGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LGUsaSl7cmV0dXJuW3BhcnNlRmxvYXQodFswXSkqKGMudGVzdCh0WzBdKT9lLzEwMDoxKSxwYXJzZUZsb2F0KHRbMV0pKihjLnRlc3QodFsxXSk/aS8xMDA6MSldfWZ1bmN0aW9uIGkoZSxpKXtyZXR1cm4gcGFyc2VJbnQodC5jc3MoZSxpKSwxMCl8fDB9ZnVuY3Rpb24gcyhlKXt2YXIgaT1lWzBdO3JldHVybiA5PT09aS5ub2RlVHlwZT97d2lkdGg6ZS53aWR0aCgpLGhlaWdodDplLmhlaWdodCgpLG9mZnNldDp7dG9wOjAsbGVmdDowfX06dC5pc1dpbmRvdyhpKT97d2lkdGg6ZS53aWR0aCgpLGhlaWdodDplLmhlaWdodCgpLG9mZnNldDp7dG9wOmUuc2Nyb2xsVG9wKCksbGVmdDplLnNjcm9sbExlZnQoKX19OmkucHJldmVudERlZmF1bHQ/e3dpZHRoOjAsaGVpZ2h0OjAsb2Zmc2V0Ont0b3A6aS5wYWdlWSxsZWZ0OmkucGFnZVh9fTp7d2lkdGg6ZS5vdXRlcldpZHRoKCksaGVpZ2h0OmUub3V0ZXJIZWlnaHQoKSxvZmZzZXQ6ZS5vZmZzZXQoKX19dmFyIG4sbz1NYXRoLm1heCxhPU1hdGguYWJzLHI9L2xlZnR8Y2VudGVyfHJpZ2h0LyxoPS90b3B8Y2VudGVyfGJvdHRvbS8sbD0vW1xcK1xcLV1cXGQrKFxcLltcXGRdKyk/JT8vLHU9L15cXHcrLyxjPS8lJC8sZD10LmZuLnBvc2l0aW9uO3QucG9zaXRpb249e3Njcm9sbGJhcldpZHRoOmZ1bmN0aW9uKCl7aWYodm9pZCAwIT09bilyZXR1cm4gbjt2YXIgZSxpLHM9dChcIjxkaXYgc3R5bGU9J2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NTBweDtoZWlnaHQ6NTBweDtvdmVyZmxvdzpoaWRkZW47Jz48ZGl2IHN0eWxlPSdoZWlnaHQ6MTAwcHg7d2lkdGg6YXV0bzsnPjwvZGl2PjwvZGl2PlwiKSxvPXMuY2hpbGRyZW4oKVswXTtyZXR1cm4gdChcImJvZHlcIikuYXBwZW5kKHMpLGU9by5vZmZzZXRXaWR0aCxzLmNzcyhcIm92ZXJmbG93XCIsXCJzY3JvbGxcIiksaT1vLm9mZnNldFdpZHRoLGU9PT1pJiYoaT1zWzBdLmNsaWVudFdpZHRoKSxzLnJlbW92ZSgpLG49ZS1pfSxnZXRTY3JvbGxJbmZvOmZ1bmN0aW9uKGUpe3ZhciBpPWUuaXNXaW5kb3d8fGUuaXNEb2N1bWVudD9cIlwiOmUuZWxlbWVudC5jc3MoXCJvdmVyZmxvdy14XCIpLHM9ZS5pc1dpbmRvd3x8ZS5pc0RvY3VtZW50P1wiXCI6ZS5lbGVtZW50LmNzcyhcIm92ZXJmbG93LXlcIiksbj1cInNjcm9sbFwiPT09aXx8XCJhdXRvXCI9PT1pJiZlLndpZHRoPGUuZWxlbWVudFswXS5zY3JvbGxXaWR0aCxvPVwic2Nyb2xsXCI9PT1zfHxcImF1dG9cIj09PXMmJmUuaGVpZ2h0PGUuZWxlbWVudFswXS5zY3JvbGxIZWlnaHQ7cmV0dXJue3dpZHRoOm8/dC5wb3NpdGlvbi5zY3JvbGxiYXJXaWR0aCgpOjAsaGVpZ2h0Om4/dC5wb3NpdGlvbi5zY3JvbGxiYXJXaWR0aCgpOjB9fSxnZXRXaXRoaW5JbmZvOmZ1bmN0aW9uKGUpe3ZhciBpPXQoZXx8d2luZG93KSxzPXQuaXNXaW5kb3coaVswXSksbj0hIWlbMF0mJjk9PT1pWzBdLm5vZGVUeXBlLG89IXMmJiFuO3JldHVybntlbGVtZW50OmksaXNXaW5kb3c6cyxpc0RvY3VtZW50Om4sb2Zmc2V0Om8/dChlKS5vZmZzZXQoKTp7bGVmdDowLHRvcDowfSxzY3JvbGxMZWZ0Omkuc2Nyb2xsTGVmdCgpLHNjcm9sbFRvcDppLnNjcm9sbFRvcCgpLHdpZHRoOmkub3V0ZXJXaWR0aCgpLGhlaWdodDppLm91dGVySGVpZ2h0KCl9fX0sdC5mbi5wb3NpdGlvbj1mdW5jdGlvbihuKXtpZighbnx8IW4ub2YpcmV0dXJuIGQuYXBwbHkodGhpcyxhcmd1bWVudHMpO249dC5leHRlbmQoe30sbik7dmFyIGMscCxmLG0sZyxfLHY9dChuLm9mKSxiPXQucG9zaXRpb24uZ2V0V2l0aGluSW5mbyhuLndpdGhpbikseT10LnBvc2l0aW9uLmdldFNjcm9sbEluZm8oYiksdz0obi5jb2xsaXNpb258fFwiZmxpcFwiKS5zcGxpdChcIiBcIiksaz17fTtyZXR1cm4gXz1zKHYpLHZbMF0ucHJldmVudERlZmF1bHQmJihuLmF0PVwibGVmdCB0b3BcIikscD1fLndpZHRoLGY9Xy5oZWlnaHQsbT1fLm9mZnNldCxnPXQuZXh0ZW5kKHt9LG0pLHQuZWFjaChbXCJteVwiLFwiYXRcIl0sZnVuY3Rpb24oKXt2YXIgdCxlLGk9KG5bdGhpc118fFwiXCIpLnNwbGl0KFwiIFwiKTsxPT09aS5sZW5ndGgmJihpPXIudGVzdChpWzBdKT9pLmNvbmNhdChbXCJjZW50ZXJcIl0pOmgudGVzdChpWzBdKT9bXCJjZW50ZXJcIl0uY29uY2F0KGkpOltcImNlbnRlclwiLFwiY2VudGVyXCJdKSxpWzBdPXIudGVzdChpWzBdKT9pWzBdOlwiY2VudGVyXCIsaVsxXT1oLnRlc3QoaVsxXSk/aVsxXTpcImNlbnRlclwiLHQ9bC5leGVjKGlbMF0pLGU9bC5leGVjKGlbMV0pLGtbdGhpc109W3Q/dFswXTowLGU/ZVswXTowXSxuW3RoaXNdPVt1LmV4ZWMoaVswXSlbMF0sdS5leGVjKGlbMV0pWzBdXX0pLDE9PT13Lmxlbmd0aCYmKHdbMV09d1swXSksXCJyaWdodFwiPT09bi5hdFswXT9nLmxlZnQrPXA6XCJjZW50ZXJcIj09PW4uYXRbMF0mJihnLmxlZnQrPXAvMiksXCJib3R0b21cIj09PW4uYXRbMV0/Zy50b3ArPWY6XCJjZW50ZXJcIj09PW4uYXRbMV0mJihnLnRvcCs9Zi8yKSxjPWUoay5hdCxwLGYpLGcubGVmdCs9Y1swXSxnLnRvcCs9Y1sxXSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgcyxyLGg9dCh0aGlzKSxsPWgub3V0ZXJXaWR0aCgpLHU9aC5vdXRlckhlaWdodCgpLGQ9aSh0aGlzLFwibWFyZ2luTGVmdFwiKSxfPWkodGhpcyxcIm1hcmdpblRvcFwiKSx4PWwrZCtpKHRoaXMsXCJtYXJnaW5SaWdodFwiKSt5LndpZHRoLEM9dStfK2kodGhpcyxcIm1hcmdpbkJvdHRvbVwiKSt5LmhlaWdodCxEPXQuZXh0ZW5kKHt9LGcpLEk9ZShrLm15LGgub3V0ZXJXaWR0aCgpLGgub3V0ZXJIZWlnaHQoKSk7XCJyaWdodFwiPT09bi5teVswXT9ELmxlZnQtPWw6XCJjZW50ZXJcIj09PW4ubXlbMF0mJihELmxlZnQtPWwvMiksXCJib3R0b21cIj09PW4ubXlbMV0/RC50b3AtPXU6XCJjZW50ZXJcIj09PW4ubXlbMV0mJihELnRvcC09dS8yKSxELmxlZnQrPUlbMF0sRC50b3ArPUlbMV0scz17bWFyZ2luTGVmdDpkLG1hcmdpblRvcDpffSx0LmVhY2goW1wibGVmdFwiLFwidG9wXCJdLGZ1bmN0aW9uKGUsaSl7dC51aS5wb3NpdGlvblt3W2VdXSYmdC51aS5wb3NpdGlvblt3W2VdXVtpXShELHt0YXJnZXRXaWR0aDpwLHRhcmdldEhlaWdodDpmLGVsZW1XaWR0aDpsLGVsZW1IZWlnaHQ6dSxjb2xsaXNpb25Qb3NpdGlvbjpzLGNvbGxpc2lvbldpZHRoOngsY29sbGlzaW9uSGVpZ2h0OkMsb2Zmc2V0OltjWzBdK0lbMF0sY1sxXStJWzFdXSxteTpuLm15LGF0Om4uYXQsd2l0aGluOmIsZWxlbTpofSl9KSxuLnVzaW5nJiYocj1mdW5jdGlvbih0KXt2YXIgZT1tLmxlZnQtRC5sZWZ0LGk9ZStwLWwscz1tLnRvcC1ELnRvcCxyPXMrZi11LGM9e3RhcmdldDp7ZWxlbWVudDp2LGxlZnQ6bS5sZWZ0LHRvcDptLnRvcCx3aWR0aDpwLGhlaWdodDpmfSxlbGVtZW50OntlbGVtZW50OmgsbGVmdDpELmxlZnQsdG9wOkQudG9wLHdpZHRoOmwsaGVpZ2h0OnV9LGhvcml6b250YWw6MD5pP1wibGVmdFwiOmU+MD9cInJpZ2h0XCI6XCJjZW50ZXJcIix2ZXJ0aWNhbDowPnI/XCJ0b3BcIjpzPjA/XCJib3R0b21cIjpcIm1pZGRsZVwifTtsPnAmJnA+YShlK2kpJiYoYy5ob3Jpem9udGFsPVwiY2VudGVyXCIpLHU+ZiYmZj5hKHMrcikmJihjLnZlcnRpY2FsPVwibWlkZGxlXCIpLGMuaW1wb3J0YW50PW8oYShlKSxhKGkpKT5vKGEocyksYShyKSk/XCJob3Jpem9udGFsXCI6XCJ2ZXJ0aWNhbFwiLG4udXNpbmcuY2FsbCh0aGlzLHQsYyl9KSxoLm9mZnNldCh0LmV4dGVuZChELHt1c2luZzpyfSkpfSl9LHQudWkucG9zaXRpb249e2ZpdDp7bGVmdDpmdW5jdGlvbih0LGUpe3ZhciBpLHM9ZS53aXRoaW4sbj1zLmlzV2luZG93P3Muc2Nyb2xsTGVmdDpzLm9mZnNldC5sZWZ0LGE9cy53aWR0aCxyPXQubGVmdC1lLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpbkxlZnQsaD1uLXIsbD1yK2UuY29sbGlzaW9uV2lkdGgtYS1uO2UuY29sbGlzaW9uV2lkdGg+YT9oPjAmJjA+PWw/KGk9dC5sZWZ0K2grZS5jb2xsaXNpb25XaWR0aC1hLW4sdC5sZWZ0Kz1oLWkpOnQubGVmdD1sPjAmJjA+PWg/bjpoPmw/bithLWUuY29sbGlzaW9uV2lkdGg6bjpoPjA/dC5sZWZ0Kz1oOmw+MD90LmxlZnQtPWw6dC5sZWZ0PW8odC5sZWZ0LXIsdC5sZWZ0KX0sdG9wOmZ1bmN0aW9uKHQsZSl7dmFyIGkscz1lLndpdGhpbixuPXMuaXNXaW5kb3c/cy5zY3JvbGxUb3A6cy5vZmZzZXQudG9wLGE9ZS53aXRoaW4uaGVpZ2h0LHI9dC50b3AtZS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5Ub3AsaD1uLXIsbD1yK2UuY29sbGlzaW9uSGVpZ2h0LWEtbjtlLmNvbGxpc2lvbkhlaWdodD5hP2g+MCYmMD49bD8oaT10LnRvcCtoK2UuY29sbGlzaW9uSGVpZ2h0LWEtbix0LnRvcCs9aC1pKTp0LnRvcD1sPjAmJjA+PWg/bjpoPmw/bithLWUuY29sbGlzaW9uSGVpZ2h0Om46aD4wP3QudG9wKz1oOmw+MD90LnRvcC09bDp0LnRvcD1vKHQudG9wLXIsdC50b3ApfX0sZmxpcDp7bGVmdDpmdW5jdGlvbih0LGUpe3ZhciBpLHMsbj1lLndpdGhpbixvPW4ub2Zmc2V0LmxlZnQrbi5zY3JvbGxMZWZ0LHI9bi53aWR0aCxoPW4uaXNXaW5kb3c/bi5zY3JvbGxMZWZ0Om4ub2Zmc2V0LmxlZnQsbD10LmxlZnQtZS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5MZWZ0LHU9bC1oLGM9bCtlLmNvbGxpc2lvbldpZHRoLXItaCxkPVwibGVmdFwiPT09ZS5teVswXT8tZS5lbGVtV2lkdGg6XCJyaWdodFwiPT09ZS5teVswXT9lLmVsZW1XaWR0aDowLHA9XCJsZWZ0XCI9PT1lLmF0WzBdP2UudGFyZ2V0V2lkdGg6XCJyaWdodFwiPT09ZS5hdFswXT8tZS50YXJnZXRXaWR0aDowLGY9LTIqZS5vZmZzZXRbMF07MD51PyhpPXQubGVmdCtkK3ArZitlLmNvbGxpc2lvbldpZHRoLXItbywoMD5pfHxhKHUpPmkpJiYodC5sZWZ0Kz1kK3ArZikpOmM+MCYmKHM9dC5sZWZ0LWUuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luTGVmdCtkK3ArZi1oLChzPjB8fGM+YShzKSkmJih0LmxlZnQrPWQrcCtmKSl9LHRvcDpmdW5jdGlvbih0LGUpe3ZhciBpLHMsbj1lLndpdGhpbixvPW4ub2Zmc2V0LnRvcCtuLnNjcm9sbFRvcCxyPW4uaGVpZ2h0LGg9bi5pc1dpbmRvdz9uLnNjcm9sbFRvcDpuLm9mZnNldC50b3AsbD10LnRvcC1lLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpblRvcCx1PWwtaCxjPWwrZS5jb2xsaXNpb25IZWlnaHQtci1oLGQ9XCJ0b3BcIj09PWUubXlbMV0scD1kPy1lLmVsZW1IZWlnaHQ6XCJib3R0b21cIj09PWUubXlbMV0/ZS5lbGVtSGVpZ2h0OjAsZj1cInRvcFwiPT09ZS5hdFsxXT9lLnRhcmdldEhlaWdodDpcImJvdHRvbVwiPT09ZS5hdFsxXT8tZS50YXJnZXRIZWlnaHQ6MCxtPS0yKmUub2Zmc2V0WzFdOzA+dT8ocz10LnRvcCtwK2YrbStlLmNvbGxpc2lvbkhlaWdodC1yLW8sKDA+c3x8YSh1KT5zKSYmKHQudG9wKz1wK2YrbSkpOmM+MCYmKGk9dC50b3AtZS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5Ub3ArcCtmK20taCwoaT4wfHxjPmEoaSkpJiYodC50b3ArPXArZittKSl9fSxmbGlwZml0OntsZWZ0OmZ1bmN0aW9uKCl7dC51aS5wb3NpdGlvbi5mbGlwLmxlZnQuYXBwbHkodGhpcyxhcmd1bWVudHMpLHQudWkucG9zaXRpb24uZml0LmxlZnQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSx0b3A6ZnVuY3Rpb24oKXt0LnVpLnBvc2l0aW9uLmZsaXAudG9wLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0LnVpLnBvc2l0aW9uLmZpdC50b3AuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19fSgpLHQudWkucG9zaXRpb24sdC5leHRlbmQodC5leHByW1wiOlwiXSx7ZGF0YTp0LmV4cHIuY3JlYXRlUHNldWRvP3QuZXhwci5jcmVhdGVQc2V1ZG8oZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGkpe3JldHVybiEhdC5kYXRhKGksZSl9fSk6ZnVuY3Rpb24oZSxpLHMpe3JldHVybiEhdC5kYXRhKGUsc1szXSl9fSksdC5mbi5leHRlbmQoe2Rpc2FibGVTZWxlY3Rpb246ZnVuY3Rpb24oKXt2YXIgdD1cIm9uc2VsZWN0c3RhcnRcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik/XCJzZWxlY3RzdGFydFwiOlwibW91c2Vkb3duXCI7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub24odCtcIi51aS1kaXNhYmxlU2VsZWN0aW9uXCIsZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpfSl9fSgpLGVuYWJsZVNlbGVjdGlvbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9mZihcIi51aS1kaXNhYmxlU2VsZWN0aW9uXCIpfX0pLHQudWkuZm9jdXNhYmxlPWZ1bmN0aW9uKGkscyl7dmFyIG4sbyxhLHIsaCxsPWkubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImFyZWFcIj09PWw/KG49aS5wYXJlbnROb2RlLG89bi5uYW1lLGkuaHJlZiYmbyYmXCJtYXBcIj09PW4ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT8oYT10KFwiaW1nW3VzZW1hcD0nI1wiK28rXCInXVwiKSxhLmxlbmd0aD4wJiZhLmlzKFwiOnZpc2libGVcIikpOiExKTooL14oaW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QpJC8udGVzdChsKT8ocj0haS5kaXNhYmxlZCxyJiYoaD10KGkpLmNsb3Nlc3QoXCJmaWVsZHNldFwiKVswXSxoJiYocj0haC5kaXNhYmxlZCkpKTpyPVwiYVwiPT09bD9pLmhyZWZ8fHM6cyxyJiZ0KGkpLmlzKFwiOnZpc2libGVcIikmJmUodChpKSkpfSx0LmV4dGVuZCh0LmV4cHJbXCI6XCJdLHtmb2N1c2FibGU6ZnVuY3Rpb24oZSl7cmV0dXJuIHQudWkuZm9jdXNhYmxlKGUsbnVsbCE9dC5hdHRyKGUsXCJ0YWJpbmRleFwiKSl9fSksdC51aS5mb2N1c2FibGUsdC5mbi5mb3JtPWZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHRoaXNbMF0uZm9ybT90aGlzLmNsb3Nlc3QoXCJmb3JtXCIpOnQodGhpc1swXS5mb3JtKX0sdC51aS5mb3JtUmVzZXRNaXhpbj17X2Zvcm1SZXNldEhhbmRsZXI6ZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgaT1lLmRhdGEoXCJ1aS1mb3JtLXJlc2V0LWluc3RhbmNlc1wiKTt0LmVhY2goaSxmdW5jdGlvbigpe3RoaXMucmVmcmVzaCgpfSl9KX0sX2JpbmRGb3JtUmVzZXRIYW5kbGVyOmZ1bmN0aW9uKCl7aWYodGhpcy5mb3JtPXRoaXMuZWxlbWVudC5mb3JtKCksdGhpcy5mb3JtLmxlbmd0aCl7dmFyIHQ9dGhpcy5mb3JtLmRhdGEoXCJ1aS1mb3JtLXJlc2V0LWluc3RhbmNlc1wiKXx8W107dC5sZW5ndGh8fHRoaXMuZm9ybS5vbihcInJlc2V0LnVpLWZvcm0tcmVzZXRcIix0aGlzLl9mb3JtUmVzZXRIYW5kbGVyKSx0LnB1c2godGhpcyksdGhpcy5mb3JtLmRhdGEoXCJ1aS1mb3JtLXJlc2V0LWluc3RhbmNlc1wiLHQpfX0sX3VuYmluZEZvcm1SZXNldEhhbmRsZXI6ZnVuY3Rpb24oKXtpZih0aGlzLmZvcm0ubGVuZ3RoKXt2YXIgZT10aGlzLmZvcm0uZGF0YShcInVpLWZvcm0tcmVzZXQtaW5zdGFuY2VzXCIpO2Uuc3BsaWNlKHQuaW5BcnJheSh0aGlzLGUpLDEpLGUubGVuZ3RoP3RoaXMuZm9ybS5kYXRhKFwidWktZm9ybS1yZXNldC1pbnN0YW5jZXNcIixlKTp0aGlzLmZvcm0ucmVtb3ZlRGF0YShcInVpLWZvcm0tcmVzZXQtaW5zdGFuY2VzXCIpLm9mZihcInJlc2V0LnVpLWZvcm0tcmVzZXRcIil9fX0sXCIxLjdcIj09PXQuZm4uanF1ZXJ5LnN1YnN0cmluZygwLDMpJiYodC5lYWNoKFtcIldpZHRoXCIsXCJIZWlnaHRcIl0sZnVuY3Rpb24oZSxpKXtmdW5jdGlvbiBzKGUsaSxzLG8pe3JldHVybiB0LmVhY2gobixmdW5jdGlvbigpe2ktPXBhcnNlRmxvYXQodC5jc3MoZSxcInBhZGRpbmdcIit0aGlzKSl8fDAscyYmKGktPXBhcnNlRmxvYXQodC5jc3MoZSxcImJvcmRlclwiK3RoaXMrXCJXaWR0aFwiKSl8fDApLG8mJihpLT1wYXJzZUZsb2F0KHQuY3NzKGUsXCJtYXJnaW5cIit0aGlzKSl8fDApfSksaX12YXIgbj1cIldpZHRoXCI9PT1pP1tcIkxlZnRcIixcIlJpZ2h0XCJdOltcIlRvcFwiLFwiQm90dG9tXCJdLG89aS50b0xvd2VyQ2FzZSgpLGE9e2lubmVyV2lkdGg6dC5mbi5pbm5lcldpZHRoLGlubmVySGVpZ2h0OnQuZm4uaW5uZXJIZWlnaHQsb3V0ZXJXaWR0aDp0LmZuLm91dGVyV2lkdGgsb3V0ZXJIZWlnaHQ6dC5mbi5vdXRlckhlaWdodH07dC5mbltcImlubmVyXCIraV09ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/YVtcImlubmVyXCIraV0uY2FsbCh0aGlzKTp0aGlzLmVhY2goZnVuY3Rpb24oKXt0KHRoaXMpLmNzcyhvLHModGhpcyxlKStcInB4XCIpfSl9LHQuZm5bXCJvdXRlclwiK2ldPWZ1bmN0aW9uKGUsbil7cmV0dXJuXCJudW1iZXJcIiE9dHlwZW9mIGU/YVtcIm91dGVyXCIraV0uY2FsbCh0aGlzLGUpOnRoaXMuZWFjaChmdW5jdGlvbigpe3QodGhpcykuY3NzKG8scyh0aGlzLGUsITAsbikrXCJweFwiKX0pfX0pLHQuZm4uYWRkQmFjaz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5hZGQobnVsbD09dD90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcih0KSl9KSx0LnVpLmtleUNvZGU9e0JBQ0tTUEFDRTo4LENPTU1BOjE4OCxERUxFVEU6NDYsRE9XTjo0MCxFTkQ6MzUsRU5URVI6MTMsRVNDQVBFOjI3LEhPTUU6MzYsTEVGVDozNyxQQUdFX0RPV046MzQsUEFHRV9VUDozMyxQRVJJT0Q6MTkwLFJJR0hUOjM5LFNQQUNFOjMyLFRBQjo5LFVQOjM4fSx0LnVpLmVzY2FwZVNlbGVjdG9yPWZ1bmN0aW9uKCl7dmFyIHQ9LyhbIVwiIyQlJicoKSorLC5cXC86Ozw9Pj9AW1xcXV5ge3x9fl0pL2c7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UodCxcIlxcXFwkMVwiKX19KCksdC5mbi5sYWJlbHM9ZnVuY3Rpb24oKXt2YXIgZSxpLHMsbixvO3JldHVybiB0aGlzWzBdLmxhYmVscyYmdGhpc1swXS5sYWJlbHMubGVuZ3RoP3RoaXMucHVzaFN0YWNrKHRoaXNbMF0ubGFiZWxzKToobj10aGlzLmVxKDApLnBhcmVudHMoXCJsYWJlbFwiKSxzPXRoaXMuYXR0cihcImlkXCIpLHMmJihlPXRoaXMuZXEoMCkucGFyZW50cygpLmxhc3QoKSxvPWUuYWRkKGUubGVuZ3RoP2Uuc2libGluZ3MoKTp0aGlzLnNpYmxpbmdzKCkpLGk9XCJsYWJlbFtmb3I9J1wiK3QudWkuZXNjYXBlU2VsZWN0b3IocykrXCInXVwiLG49bi5hZGQoby5maW5kKGkpLmFkZEJhY2soaSkpKSx0aGlzLnB1c2hTdGFjayhuKSl9LHQuZm4uc2Nyb2xsUGFyZW50PWZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMuY3NzKFwicG9zaXRpb25cIikscz1cImFic29sdXRlXCI9PT1pLG49ZT8vKGF1dG98c2Nyb2xsfGhpZGRlbikvOi8oYXV0b3xzY3JvbGwpLyxvPXRoaXMucGFyZW50cygpLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXQodGhpcyk7cmV0dXJuIHMmJlwic3RhdGljXCI9PT1lLmNzcyhcInBvc2l0aW9uXCIpPyExOm4udGVzdChlLmNzcyhcIm92ZXJmbG93XCIpK2UuY3NzKFwib3ZlcmZsb3cteVwiKStlLmNzcyhcIm92ZXJmbG93LXhcIikpfSkuZXEoMCk7cmV0dXJuXCJmaXhlZFwiIT09aSYmby5sZW5ndGg/bzp0KHRoaXNbMF0ub3duZXJEb2N1bWVudHx8ZG9jdW1lbnQpfSx0LmV4dGVuZCh0LmV4cHJbXCI6XCJdLHt0YWJiYWJsZTpmdW5jdGlvbihlKXt2YXIgaT10LmF0dHIoZSxcInRhYmluZGV4XCIpLHM9bnVsbCE9aTtyZXR1cm4oIXN8fGk+PTApJiZ0LnVpLmZvY3VzYWJsZShlLHMpfX0pLHQuZm4uZXh0ZW5kKHt1bmlxdWVJZDpmdW5jdGlvbigpe3ZhciB0PTA7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3RoaXMuaWR8fCh0aGlzLmlkPVwidWktaWQtXCIrICsrdCl9KX19KCkscmVtb3ZlVW5pcXVlSWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7L151aS1pZC1cXGQrJC8udGVzdCh0aGlzLmlkKSYmdCh0aGlzKS5yZW1vdmVBdHRyKFwiaWRcIil9KX19KSx0LnVpLmllPSEhL21zaWUgW1xcdy5dKy8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO3ZhciB1PSExO3QoZG9jdW1lbnQpLm9uKFwibW91c2V1cFwiLGZ1bmN0aW9uKCl7dT0hMX0pLHQud2lkZ2V0KFwidWkubW91c2VcIix7dmVyc2lvbjpcIjEuMTIuMVwiLG9wdGlvbnM6e2NhbmNlbDpcImlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3QsIG9wdGlvblwiLGRpc3RhbmNlOjEsZGVsYXk6MH0sX21vdXNlSW5pdDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5lbGVtZW50Lm9uKFwibW91c2Vkb3duLlwiK3RoaXMud2lkZ2V0TmFtZSxmdW5jdGlvbih0KXtyZXR1cm4gZS5fbW91c2VEb3duKHQpfSkub24oXCJjbGljay5cIit0aGlzLndpZGdldE5hbWUsZnVuY3Rpb24oaSl7cmV0dXJuITA9PT10LmRhdGEoaS50YXJnZXQsZS53aWRnZXROYW1lK1wiLnByZXZlbnRDbGlja0V2ZW50XCIpPyh0LnJlbW92ZURhdGEoaS50YXJnZXQsZS53aWRnZXROYW1lK1wiLnByZXZlbnRDbGlja0V2ZW50XCIpLGkuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksITEpOnZvaWQgMH0pLHRoaXMuc3RhcnRlZD0hMX0sX21vdXNlRGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5vZmYoXCIuXCIrdGhpcy53aWRnZXROYW1lKSx0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSYmdGhpcy5kb2N1bWVudC5vZmYoXCJtb3VzZW1vdmUuXCIrdGhpcy53aWRnZXROYW1lLHRoaXMuX21vdXNlTW92ZURlbGVnYXRlKS5vZmYoXCJtb3VzZXVwLlwiK3RoaXMud2lkZ2V0TmFtZSx0aGlzLl9tb3VzZVVwRGVsZWdhdGUpfSxfbW91c2VEb3duOmZ1bmN0aW9uKGUpe2lmKCF1KXt0aGlzLl9tb3VzZU1vdmVkPSExLHRoaXMuX21vdXNlU3RhcnRlZCYmdGhpcy5fbW91c2VVcChlKSx0aGlzLl9tb3VzZURvd25FdmVudD1lO3ZhciBpPXRoaXMscz0xPT09ZS53aGljaCxuPVwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuY2FuY2VsJiZlLnRhcmdldC5ub2RlTmFtZT90KGUudGFyZ2V0KS5jbG9zZXN0KHRoaXMub3B0aW9ucy5jYW5jZWwpLmxlbmd0aDohMTtyZXR1cm4gcyYmIW4mJnRoaXMuX21vdXNlQ2FwdHVyZShlKT8odGhpcy5tb3VzZURlbGF5TWV0PSF0aGlzLm9wdGlvbnMuZGVsYXksdGhpcy5tb3VzZURlbGF5TWV0fHwodGhpcy5fbW91c2VEZWxheVRpbWVyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLm1vdXNlRGVsYXlNZXQ9ITB9LHRoaXMub3B0aW9ucy5kZWxheSkpLHRoaXMuX21vdXNlRGlzdGFuY2VNZXQoZSkmJnRoaXMuX21vdXNlRGVsYXlNZXQoZSkmJih0aGlzLl9tb3VzZVN0YXJ0ZWQ9dGhpcy5fbW91c2VTdGFydChlKSE9PSExLCF0aGlzLl9tb3VzZVN0YXJ0ZWQpPyhlLnByZXZlbnREZWZhdWx0KCksITApOighMD09PXQuZGF0YShlLnRhcmdldCx0aGlzLndpZGdldE5hbWUrXCIucHJldmVudENsaWNrRXZlbnRcIikmJnQucmVtb3ZlRGF0YShlLnRhcmdldCx0aGlzLndpZGdldE5hbWUrXCIucHJldmVudENsaWNrRXZlbnRcIiksdGhpcy5fbW91c2VNb3ZlRGVsZWdhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIGkuX21vdXNlTW92ZSh0KX0sdGhpcy5fbW91c2VVcERlbGVnYXRlPWZ1bmN0aW9uKHQpe3JldHVybiBpLl9tb3VzZVVwKHQpfSx0aGlzLmRvY3VtZW50Lm9uKFwibW91c2Vtb3ZlLlwiK3RoaXMud2lkZ2V0TmFtZSx0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSkub24oXCJtb3VzZXVwLlwiK3RoaXMud2lkZ2V0TmFtZSx0aGlzLl9tb3VzZVVwRGVsZWdhdGUpLGUucHJldmVudERlZmF1bHQoKSx1PSEwLCEwKSk6ITB9fSxfbW91c2VNb3ZlOmZ1bmN0aW9uKGUpe2lmKHRoaXMuX21vdXNlTW92ZWQpe2lmKHQudWkuaWUmJighZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHw5PmRvY3VtZW50LmRvY3VtZW50TW9kZSkmJiFlLmJ1dHRvbilyZXR1cm4gdGhpcy5fbW91c2VVcChlKTtpZighZS53aGljaClpZihlLm9yaWdpbmFsRXZlbnQuYWx0S2V5fHxlLm9yaWdpbmFsRXZlbnQuY3RybEtleXx8ZS5vcmlnaW5hbEV2ZW50Lm1ldGFLZXl8fGUub3JpZ2luYWxFdmVudC5zaGlmdEtleSl0aGlzLmlnbm9yZU1pc3NpbmdXaGljaD0hMDtlbHNlIGlmKCF0aGlzLmlnbm9yZU1pc3NpbmdXaGljaClyZXR1cm4gdGhpcy5fbW91c2VVcChlKX1yZXR1cm4oZS53aGljaHx8ZS5idXR0b24pJiYodGhpcy5fbW91c2VNb3ZlZD0hMCksdGhpcy5fbW91c2VTdGFydGVkPyh0aGlzLl9tb3VzZURyYWcoZSksZS5wcmV2ZW50RGVmYXVsdCgpKToodGhpcy5fbW91c2VEaXN0YW5jZU1ldChlKSYmdGhpcy5fbW91c2VEZWxheU1ldChlKSYmKHRoaXMuX21vdXNlU3RhcnRlZD10aGlzLl9tb3VzZVN0YXJ0KHRoaXMuX21vdXNlRG93bkV2ZW50LGUpIT09ITEsdGhpcy5fbW91c2VTdGFydGVkP3RoaXMuX21vdXNlRHJhZyhlKTp0aGlzLl9tb3VzZVVwKGUpKSwhdGhpcy5fbW91c2VTdGFydGVkKX0sX21vdXNlVXA6ZnVuY3Rpb24oZSl7dGhpcy5kb2N1bWVudC5vZmYoXCJtb3VzZW1vdmUuXCIrdGhpcy53aWRnZXROYW1lLHRoaXMuX21vdXNlTW92ZURlbGVnYXRlKS5vZmYoXCJtb3VzZXVwLlwiK3RoaXMud2lkZ2V0TmFtZSx0aGlzLl9tb3VzZVVwRGVsZWdhdGUpLHRoaXMuX21vdXNlU3RhcnRlZCYmKHRoaXMuX21vdXNlU3RhcnRlZD0hMSxlLnRhcmdldD09PXRoaXMuX21vdXNlRG93bkV2ZW50LnRhcmdldCYmdC5kYXRhKGUudGFyZ2V0LHRoaXMud2lkZ2V0TmFtZStcIi5wcmV2ZW50Q2xpY2tFdmVudFwiLCEwKSx0aGlzLl9tb3VzZVN0b3AoZSkpLHRoaXMuX21vdXNlRGVsYXlUaW1lciYmKGNsZWFyVGltZW91dCh0aGlzLl9tb3VzZURlbGF5VGltZXIpLGRlbGV0ZSB0aGlzLl9tb3VzZURlbGF5VGltZXIpLHRoaXMuaWdub3JlTWlzc2luZ1doaWNoPSExLHU9ITEsZS5wcmV2ZW50RGVmYXVsdCgpfSxfbW91c2VEaXN0YW5jZU1ldDpmdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5tYXgoTWF0aC5hYnModGhpcy5fbW91c2VEb3duRXZlbnQucGFnZVgtdC5wYWdlWCksTWF0aC5hYnModGhpcy5fbW91c2VEb3duRXZlbnQucGFnZVktdC5wYWdlWSkpPj10aGlzLm9wdGlvbnMuZGlzdGFuY2V9LF9tb3VzZURlbGF5TWV0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW91c2VEZWxheU1ldH0sX21vdXNlU3RhcnQ6ZnVuY3Rpb24oKXt9LF9tb3VzZURyYWc6ZnVuY3Rpb24oKXt9LF9tb3VzZVN0b3A6ZnVuY3Rpb24oKXt9LF9tb3VzZUNhcHR1cmU6ZnVuY3Rpb24oKXtyZXR1cm4hMH19KSx0LnVpLnBsdWdpbj17YWRkOmZ1bmN0aW9uKGUsaSxzKXt2YXIgbixvPXQudWlbZV0ucHJvdG90eXBlO2ZvcihuIGluIHMpby5wbHVnaW5zW25dPW8ucGx1Z2luc1tuXXx8W10sby5wbHVnaW5zW25dLnB1c2goW2ksc1tuXV0pfSxjYWxsOmZ1bmN0aW9uKHQsZSxpLHMpe3ZhciBuLG89dC5wbHVnaW5zW2VdO2lmKG8mJihzfHx0LmVsZW1lbnRbMF0ucGFyZW50Tm9kZSYmMTEhPT10LmVsZW1lbnRbMF0ucGFyZW50Tm9kZS5ub2RlVHlwZSkpZm9yKG49MDtvLmxlbmd0aD5uO24rKyl0Lm9wdGlvbnNbb1tuXVswXV0mJm9bbl1bMV0uYXBwbHkodC5lbGVtZW50LGkpfX0sdC51aS5zYWZlQWN0aXZlRWxlbWVudD1mdW5jdGlvbih0KXt2YXIgZTt0cnl7ZT10LmFjdGl2ZUVsZW1lbnR9Y2F0Y2goaSl7ZT10LmJvZHl9cmV0dXJuIGV8fChlPXQuYm9keSksZS5ub2RlTmFtZXx8KGU9dC5ib2R5KSxlfSx0LnVpLnNhZmVCbHVyPWZ1bmN0aW9uKGUpe2UmJlwiYm9keVwiIT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZ0KGUpLnRyaWdnZXIoXCJibHVyXCIpfSx0LndpZGdldChcInVpLmRyYWdnYWJsZVwiLHQudWkubW91c2Use3ZlcnNpb246XCIxLjEyLjFcIix3aWRnZXRFdmVudFByZWZpeDpcImRyYWdcIixvcHRpb25zOnthZGRDbGFzc2VzOiEwLGFwcGVuZFRvOlwicGFyZW50XCIsYXhpczohMSxjb25uZWN0VG9Tb3J0YWJsZTohMSxjb250YWlubWVudDohMSxjdXJzb3I6XCJhdXRvXCIsY3Vyc29yQXQ6ITEsZ3JpZDohMSxoYW5kbGU6ITEsaGVscGVyOlwib3JpZ2luYWxcIixpZnJhbWVGaXg6ITEsb3BhY2l0eTohMSxyZWZyZXNoUG9zaXRpb25zOiExLHJldmVydDohMSxyZXZlcnREdXJhdGlvbjo1MDAsc2NvcGU6XCJkZWZhdWx0XCIsc2Nyb2xsOiEwLHNjcm9sbFNlbnNpdGl2aXR5OjIwLHNjcm9sbFNwZWVkOjIwLHNuYXA6ITEsc25hcE1vZGU6XCJib3RoXCIsc25hcFRvbGVyYW5jZToyMCxzdGFjazohMSx6SW5kZXg6ITEsZHJhZzpudWxsLHN0YXJ0Om51bGwsc3RvcDpudWxsfSxfY3JlYXRlOmZ1bmN0aW9uKCl7XCJvcmlnaW5hbFwiPT09dGhpcy5vcHRpb25zLmhlbHBlciYmdGhpcy5fc2V0UG9zaXRpb25SZWxhdGl2ZSgpLHRoaXMub3B0aW9ucy5hZGRDbGFzc2VzJiZ0aGlzLl9hZGRDbGFzcyhcInVpLWRyYWdnYWJsZVwiKSx0aGlzLl9zZXRIYW5kbGVDbGFzc05hbWUoKSx0aGlzLl9tb3VzZUluaXQoKX0sX3NldE9wdGlvbjpmdW5jdGlvbih0LGUpe3RoaXMuX3N1cGVyKHQsZSksXCJoYW5kbGVcIj09PXQmJih0aGlzLl9yZW1vdmVIYW5kbGVDbGFzc05hbWUoKSx0aGlzLl9zZXRIYW5kbGVDbGFzc05hbWUoKSl9LF9kZXN0cm95OmZ1bmN0aW9uKCl7cmV0dXJuKHRoaXMuaGVscGVyfHx0aGlzLmVsZW1lbnQpLmlzKFwiLnVpLWRyYWdnYWJsZS1kcmFnZ2luZ1wiKT8odGhpcy5kZXN0cm95T25DbGVhcj0hMCx2b2lkIDApOih0aGlzLl9yZW1vdmVIYW5kbGVDbGFzc05hbWUoKSx0aGlzLl9tb3VzZURlc3Ryb3koKSx2b2lkIDApfSxfbW91c2VDYXB0dXJlOmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMub3B0aW9ucztyZXR1cm4gdGhpcy5oZWxwZXJ8fGkuZGlzYWJsZWR8fHQoZS50YXJnZXQpLmNsb3Nlc3QoXCIudWktcmVzaXphYmxlLWhhbmRsZVwiKS5sZW5ndGg+MD8hMToodGhpcy5oYW5kbGU9dGhpcy5fZ2V0SGFuZGxlKGUpLHRoaXMuaGFuZGxlPyh0aGlzLl9ibHVyQWN0aXZlRWxlbWVudChlKSx0aGlzLl9ibG9ja0ZyYW1lcyhpLmlmcmFtZUZpeD09PSEwP1wiaWZyYW1lXCI6aS5pZnJhbWVGaXgpLCEwKTohMSl9LF9ibG9ja0ZyYW1lczpmdW5jdGlvbihlKXt0aGlzLmlmcmFtZUJsb2Nrcz10aGlzLmRvY3VtZW50LmZpbmQoZSkubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKTtyZXR1cm4gdChcIjxkaXY+XCIpLmNzcyhcInBvc2l0aW9uXCIsXCJhYnNvbHV0ZVwiKS5hcHBlbmRUbyhlLnBhcmVudCgpKS5vdXRlcldpZHRoKGUub3V0ZXJXaWR0aCgpKS5vdXRlckhlaWdodChlLm91dGVySGVpZ2h0KCkpLm9mZnNldChlLm9mZnNldCgpKVswXX0pfSxfdW5ibG9ja0ZyYW1lczpmdW5jdGlvbigpe3RoaXMuaWZyYW1lQmxvY2tzJiYodGhpcy5pZnJhbWVCbG9ja3MucmVtb3ZlKCksZGVsZXRlIHRoaXMuaWZyYW1lQmxvY2tzKX0sX2JsdXJBY3RpdmVFbGVtZW50OmZ1bmN0aW9uKGUpe3ZhciBpPXQudWkuc2FmZUFjdGl2ZUVsZW1lbnQodGhpcy5kb2N1bWVudFswXSkscz10KGUudGFyZ2V0KTtzLmNsb3Nlc3QoaSkubGVuZ3RofHx0LnVpLnNhZmVCbHVyKGkpfSxfbW91c2VTdGFydDpmdW5jdGlvbihlKXt2YXIgaT10aGlzLm9wdGlvbnM7cmV0dXJuIHRoaXMuaGVscGVyPXRoaXMuX2NyZWF0ZUhlbHBlcihlKSx0aGlzLl9hZGRDbGFzcyh0aGlzLmhlbHBlcixcInVpLWRyYWdnYWJsZS1kcmFnZ2luZ1wiKSx0aGlzLl9jYWNoZUhlbHBlclByb3BvcnRpb25zKCksdC51aS5kZG1hbmFnZXImJih0LnVpLmRkbWFuYWdlci5jdXJyZW50PXRoaXMpLHRoaXMuX2NhY2hlTWFyZ2lucygpLHRoaXMuY3NzUG9zaXRpb249dGhpcy5oZWxwZXIuY3NzKFwicG9zaXRpb25cIiksdGhpcy5zY3JvbGxQYXJlbnQ9dGhpcy5oZWxwZXIuc2Nyb2xsUGFyZW50KCEwKSx0aGlzLm9mZnNldFBhcmVudD10aGlzLmhlbHBlci5vZmZzZXRQYXJlbnQoKSx0aGlzLmhhc0ZpeGVkQW5jZXN0b3I9dGhpcy5oZWxwZXIucGFyZW50cygpLmZpbHRlcihmdW5jdGlvbigpe3JldHVyblwiZml4ZWRcIj09PXQodGhpcykuY3NzKFwicG9zaXRpb25cIil9KS5sZW5ndGg+MCx0aGlzLnBvc2l0aW9uQWJzPXRoaXMuZWxlbWVudC5vZmZzZXQoKSx0aGlzLl9yZWZyZXNoT2Zmc2V0cyhlKSx0aGlzLm9yaWdpbmFsUG9zaXRpb249dGhpcy5wb3NpdGlvbj10aGlzLl9nZW5lcmF0ZVBvc2l0aW9uKGUsITEpLHRoaXMub3JpZ2luYWxQYWdlWD1lLnBhZ2VYLHRoaXMub3JpZ2luYWxQYWdlWT1lLnBhZ2VZLGkuY3Vyc29yQXQmJnRoaXMuX2FkanVzdE9mZnNldEZyb21IZWxwZXIoaS5jdXJzb3JBdCksdGhpcy5fc2V0Q29udGFpbm1lbnQoKSx0aGlzLl90cmlnZ2VyKFwic3RhcnRcIixlKT09PSExPyh0aGlzLl9jbGVhcigpLCExKToodGhpcy5fY2FjaGVIZWxwZXJQcm9wb3J0aW9ucygpLHQudWkuZGRtYW5hZ2VyJiYhaS5kcm9wQmVoYXZpb3VyJiZ0LnVpLmRkbWFuYWdlci5wcmVwYXJlT2Zmc2V0cyh0aGlzLGUpLHRoaXMuX21vdXNlRHJhZyhlLCEwKSx0LnVpLmRkbWFuYWdlciYmdC51aS5kZG1hbmFnZXIuZHJhZ1N0YXJ0KHRoaXMsZSksITApfSxfcmVmcmVzaE9mZnNldHM6ZnVuY3Rpb24odCl7dGhpcy5vZmZzZXQ9e3RvcDp0aGlzLnBvc2l0aW9uQWJzLnRvcC10aGlzLm1hcmdpbnMudG9wLGxlZnQ6dGhpcy5wb3NpdGlvbkFicy5sZWZ0LXRoaXMubWFyZ2lucy5sZWZ0LHNjcm9sbDohMSxwYXJlbnQ6dGhpcy5fZ2V0UGFyZW50T2Zmc2V0KCkscmVsYXRpdmU6dGhpcy5fZ2V0UmVsYXRpdmVPZmZzZXQoKX0sdGhpcy5vZmZzZXQuY2xpY2s9e2xlZnQ6dC5wYWdlWC10aGlzLm9mZnNldC5sZWZ0LHRvcDp0LnBhZ2VZLXRoaXMub2Zmc2V0LnRvcH19LF9tb3VzZURyYWc6ZnVuY3Rpb24oZSxpKXtpZih0aGlzLmhhc0ZpeGVkQW5jZXN0b3ImJih0aGlzLm9mZnNldC5wYXJlbnQ9dGhpcy5fZ2V0UGFyZW50T2Zmc2V0KCkpLHRoaXMucG9zaXRpb249dGhpcy5fZ2VuZXJhdGVQb3NpdGlvbihlLCEwKSx0aGlzLnBvc2l0aW9uQWJzPXRoaXMuX2NvbnZlcnRQb3NpdGlvblRvKFwiYWJzb2x1dGVcIiksIWkpe3ZhciBzPXRoaXMuX3VpSGFzaCgpO2lmKHRoaXMuX3RyaWdnZXIoXCJkcmFnXCIsZSxzKT09PSExKXJldHVybiB0aGlzLl9tb3VzZVVwKG5ldyB0LkV2ZW50KFwibW91c2V1cFwiLGUpKSwhMTt0aGlzLnBvc2l0aW9uPXMucG9zaXRpb259cmV0dXJuIHRoaXMuaGVscGVyWzBdLnN0eWxlLmxlZnQ9dGhpcy5wb3NpdGlvbi5sZWZ0K1wicHhcIix0aGlzLmhlbHBlclswXS5zdHlsZS50b3A9dGhpcy5wb3NpdGlvbi50b3ArXCJweFwiLHQudWkuZGRtYW5hZ2VyJiZ0LnVpLmRkbWFuYWdlci5kcmFnKHRoaXMsZSksITF9LF9tb3VzZVN0b3A6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcyxzPSExO3JldHVybiB0LnVpLmRkbWFuYWdlciYmIXRoaXMub3B0aW9ucy5kcm9wQmVoYXZpb3VyJiYocz10LnVpLmRkbWFuYWdlci5kcm9wKHRoaXMsZSkpLHRoaXMuZHJvcHBlZCYmKHM9dGhpcy5kcm9wcGVkLHRoaXMuZHJvcHBlZD0hMSksXCJpbnZhbGlkXCI9PT10aGlzLm9wdGlvbnMucmV2ZXJ0JiYhc3x8XCJ2YWxpZFwiPT09dGhpcy5vcHRpb25zLnJldmVydCYmc3x8dGhpcy5vcHRpb25zLnJldmVydD09PSEwfHx0LmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnJldmVydCkmJnRoaXMub3B0aW9ucy5yZXZlcnQuY2FsbCh0aGlzLmVsZW1lbnQscyk/dCh0aGlzLmhlbHBlcikuYW5pbWF0ZSh0aGlzLm9yaWdpbmFsUG9zaXRpb24scGFyc2VJbnQodGhpcy5vcHRpb25zLnJldmVydER1cmF0aW9uLDEwKSxmdW5jdGlvbigpe2kuX3RyaWdnZXIoXCJzdG9wXCIsZSkhPT0hMSYmaS5fY2xlYXIoKX0pOnRoaXMuX3RyaWdnZXIoXCJzdG9wXCIsZSkhPT0hMSYmdGhpcy5fY2xlYXIoKSwhMX0sX21vdXNlVXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX3VuYmxvY2tGcmFtZXMoKSx0LnVpLmRkbWFuYWdlciYmdC51aS5kZG1hbmFnZXIuZHJhZ1N0b3AodGhpcyxlKSx0aGlzLmhhbmRsZUVsZW1lbnQuaXMoZS50YXJnZXQpJiZ0aGlzLmVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpLHQudWkubW91c2UucHJvdG90eXBlLl9tb3VzZVVwLmNhbGwodGhpcyxlKX0sY2FuY2VsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaGVscGVyLmlzKFwiLnVpLWRyYWdnYWJsZS1kcmFnZ2luZ1wiKT90aGlzLl9tb3VzZVVwKG5ldyB0LkV2ZW50KFwibW91c2V1cFwiLHt0YXJnZXQ6dGhpcy5lbGVtZW50WzBdfSkpOnRoaXMuX2NsZWFyKCksdGhpc30sX2dldEhhbmRsZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vcHRpb25zLmhhbmRsZT8hIXQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy5lbGVtZW50LmZpbmQodGhpcy5vcHRpb25zLmhhbmRsZSkpLmxlbmd0aDohMH0sX3NldEhhbmRsZUNsYXNzTmFtZTpmdW5jdGlvbigpe3RoaXMuaGFuZGxlRWxlbWVudD10aGlzLm9wdGlvbnMuaGFuZGxlP3RoaXMuZWxlbWVudC5maW5kKHRoaXMub3B0aW9ucy5oYW5kbGUpOnRoaXMuZWxlbWVudCx0aGlzLl9hZGRDbGFzcyh0aGlzLmhhbmRsZUVsZW1lbnQsXCJ1aS1kcmFnZ2FibGUtaGFuZGxlXCIpfSxfcmVtb3ZlSGFuZGxlQ2xhc3NOYW1lOmZ1bmN0aW9uKCl7dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5oYW5kbGVFbGVtZW50LFwidWktZHJhZ2dhYmxlLWhhbmRsZVwiKX0sX2NyZWF0ZUhlbHBlcjpmdW5jdGlvbihlKXt2YXIgaT10aGlzLm9wdGlvbnMscz10LmlzRnVuY3Rpb24oaS5oZWxwZXIpLG49cz90KGkuaGVscGVyLmFwcGx5KHRoaXMuZWxlbWVudFswXSxbZV0pKTpcImNsb25lXCI9PT1pLmhlbHBlcj90aGlzLmVsZW1lbnQuY2xvbmUoKS5yZW1vdmVBdHRyKFwiaWRcIik6dGhpcy5lbGVtZW50O3JldHVybiBuLnBhcmVudHMoXCJib2R5XCIpLmxlbmd0aHx8bi5hcHBlbmRUbyhcInBhcmVudFwiPT09aS5hcHBlbmRUbz90aGlzLmVsZW1lbnRbMF0ucGFyZW50Tm9kZTppLmFwcGVuZFRvKSxzJiZuWzBdPT09dGhpcy5lbGVtZW50WzBdJiZ0aGlzLl9zZXRQb3NpdGlvblJlbGF0aXZlKCksblswXT09PXRoaXMuZWxlbWVudFswXXx8LyhmaXhlZHxhYnNvbHV0ZSkvLnRlc3Qobi5jc3MoXCJwb3NpdGlvblwiKSl8fG4uY3NzKFwicG9zaXRpb25cIixcImFic29sdXRlXCIpLG59LF9zZXRQb3NpdGlvblJlbGF0aXZlOmZ1bmN0aW9uKCl7L14oPzpyfGF8ZikvLnRlc3QodGhpcy5lbGVtZW50LmNzcyhcInBvc2l0aW9uXCIpKXx8KHRoaXMuZWxlbWVudFswXS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpfSxfYWRqdXN0T2Zmc2V0RnJvbUhlbHBlcjpmdW5jdGlvbihlKXtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9ZS5zcGxpdChcIiBcIikpLHQuaXNBcnJheShlKSYmKGU9e2xlZnQ6K2VbMF0sdG9wOitlWzFdfHwwfSksXCJsZWZ0XCJpbiBlJiYodGhpcy5vZmZzZXQuY2xpY2subGVmdD1lLmxlZnQrdGhpcy5tYXJnaW5zLmxlZnQpLFwicmlnaHRcImluIGUmJih0aGlzLm9mZnNldC5jbGljay5sZWZ0PXRoaXMuaGVscGVyUHJvcG9ydGlvbnMud2lkdGgtZS5yaWdodCt0aGlzLm1hcmdpbnMubGVmdCksXCJ0b3BcImluIGUmJih0aGlzLm9mZnNldC5jbGljay50b3A9ZS50b3ArdGhpcy5tYXJnaW5zLnRvcCksXCJib3R0b21cImluIGUmJih0aGlzLm9mZnNldC5jbGljay50b3A9dGhpcy5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQtZS5ib3R0b20rdGhpcy5tYXJnaW5zLnRvcCl9LF9pc1Jvb3ROb2RlOmZ1bmN0aW9uKHQpe3JldHVybi8oaHRtbHxib2R5KS9pLnRlc3QodC50YWdOYW1lKXx8dD09PXRoaXMuZG9jdW1lbnRbMF19LF9nZXRQYXJlbnRPZmZzZXQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9mZnNldFBhcmVudC5vZmZzZXQoKSxpPXRoaXMuZG9jdW1lbnRbMF07cmV0dXJuXCJhYnNvbHV0ZVwiPT09dGhpcy5jc3NQb3NpdGlvbiYmdGhpcy5zY3JvbGxQYXJlbnRbMF0hPT1pJiZ0LmNvbnRhaW5zKHRoaXMuc2Nyb2xsUGFyZW50WzBdLHRoaXMub2Zmc2V0UGFyZW50WzBdKSYmKGUubGVmdCs9dGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsTGVmdCgpLGUudG9wKz10aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxUb3AoKSksdGhpcy5faXNSb290Tm9kZSh0aGlzLm9mZnNldFBhcmVudFswXSkmJihlPXt0b3A6MCxsZWZ0OjB9KSx7dG9wOmUudG9wKyhwYXJzZUludCh0aGlzLm9mZnNldFBhcmVudC5jc3MoXCJib3JkZXJUb3BXaWR0aFwiKSwxMCl8fDApLGxlZnQ6ZS5sZWZ0KyhwYXJzZUludCh0aGlzLm9mZnNldFBhcmVudC5jc3MoXCJib3JkZXJMZWZ0V2lkdGhcIiksMTApfHwwKX19LF9nZXRSZWxhdGl2ZU9mZnNldDpmdW5jdGlvbigpe2lmKFwicmVsYXRpdmVcIiE9PXRoaXMuY3NzUG9zaXRpb24pcmV0dXJue3RvcDowLGxlZnQ6MH07dmFyIHQ9dGhpcy5lbGVtZW50LnBvc2l0aW9uKCksZT10aGlzLl9pc1Jvb3ROb2RlKHRoaXMuc2Nyb2xsUGFyZW50WzBdKTtyZXR1cm57dG9wOnQudG9wLShwYXJzZUludCh0aGlzLmhlbHBlci5jc3MoXCJ0b3BcIiksMTApfHwwKSsoZT8wOnRoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCgpKSxsZWZ0OnQubGVmdC0ocGFyc2VJbnQodGhpcy5oZWxwZXIuY3NzKFwibGVmdFwiKSwxMCl8fDApKyhlPzA6dGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsTGVmdCgpKX19LF9jYWNoZU1hcmdpbnM6ZnVuY3Rpb24oKXt0aGlzLm1hcmdpbnM9e2xlZnQ6cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbkxlZnRcIiksMTApfHwwLHRvcDpwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luVG9wXCIpLDEwKXx8MCxyaWdodDpwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luUmlnaHRcIiksMTApfHwwLGJvdHRvbTpwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luQm90dG9tXCIpLDEwKXx8MH19LF9jYWNoZUhlbHBlclByb3BvcnRpb25zOmZ1bmN0aW9uKCl7dGhpcy5oZWxwZXJQcm9wb3J0aW9ucz17d2lkdGg6dGhpcy5oZWxwZXIub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmhlbHBlci5vdXRlckhlaWdodCgpfX0sX3NldENvbnRhaW5tZW50OmZ1bmN0aW9uKCl7dmFyIGUsaSxzLG49dGhpcy5vcHRpb25zLG89dGhpcy5kb2N1bWVudFswXTtyZXR1cm4gdGhpcy5yZWxhdGl2ZUNvbnRhaW5lcj1udWxsLG4uY29udGFpbm1lbnQ/XCJ3aW5kb3dcIj09PW4uY29udGFpbm1lbnQ/KHRoaXMuY29udGFpbm1lbnQ9W3Qod2luZG93KS5zY3JvbGxMZWZ0KCktdGhpcy5vZmZzZXQucmVsYXRpdmUubGVmdC10aGlzLm9mZnNldC5wYXJlbnQubGVmdCx0KHdpbmRvdykuc2Nyb2xsVG9wKCktdGhpcy5vZmZzZXQucmVsYXRpdmUudG9wLXRoaXMub2Zmc2V0LnBhcmVudC50b3AsdCh3aW5kb3cpLnNjcm9sbExlZnQoKSt0KHdpbmRvdykud2lkdGgoKS10aGlzLmhlbHBlclByb3BvcnRpb25zLndpZHRoLXRoaXMubWFyZ2lucy5sZWZ0LHQod2luZG93KS5zY3JvbGxUb3AoKSsodCh3aW5kb3cpLmhlaWdodCgpfHxvLmJvZHkucGFyZW50Tm9kZS5zY3JvbGxIZWlnaHQpLXRoaXMuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LXRoaXMubWFyZ2lucy50b3BdLHZvaWQgMCk6XCJkb2N1bWVudFwiPT09bi5jb250YWlubWVudD8odGhpcy5jb250YWlubWVudD1bMCwwLHQobykud2lkdGgoKS10aGlzLmhlbHBlclByb3BvcnRpb25zLndpZHRoLXRoaXMubWFyZ2lucy5sZWZ0LCh0KG8pLmhlaWdodCgpfHxvLmJvZHkucGFyZW50Tm9kZS5zY3JvbGxIZWlnaHQpLXRoaXMuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LXRoaXMubWFyZ2lucy50b3BdLHZvaWQgMCk6bi5jb250YWlubWVudC5jb25zdHJ1Y3Rvcj09PUFycmF5Pyh0aGlzLmNvbnRhaW5tZW50PW4uY29udGFpbm1lbnQsdm9pZCAwKTooXCJwYXJlbnRcIj09PW4uY29udGFpbm1lbnQmJihuLmNvbnRhaW5tZW50PXRoaXMuaGVscGVyWzBdLnBhcmVudE5vZGUpLGk9dChuLmNvbnRhaW5tZW50KSxzPWlbMF0scyYmKGU9LyhzY3JvbGx8YXV0bykvLnRlc3QoaS5jc3MoXCJvdmVyZmxvd1wiKSksdGhpcy5jb250YWlubWVudD1bKHBhcnNlSW50KGkuY3NzKFwiYm9yZGVyTGVmdFdpZHRoXCIpLDEwKXx8MCkrKHBhcnNlSW50KGkuY3NzKFwicGFkZGluZ0xlZnRcIiksMTApfHwwKSwocGFyc2VJbnQoaS5jc3MoXCJib3JkZXJUb3BXaWR0aFwiKSwxMCl8fDApKyhwYXJzZUludChpLmNzcyhcInBhZGRpbmdUb3BcIiksMTApfHwwKSwoZT9NYXRoLm1heChzLnNjcm9sbFdpZHRoLHMub2Zmc2V0V2lkdGgpOnMub2Zmc2V0V2lkdGgpLShwYXJzZUludChpLmNzcyhcImJvcmRlclJpZ2h0V2lkdGhcIiksMTApfHwwKS0ocGFyc2VJbnQoaS5jc3MoXCJwYWRkaW5nUmlnaHRcIiksMTApfHwwKS10aGlzLmhlbHBlclByb3BvcnRpb25zLndpZHRoLXRoaXMubWFyZ2lucy5sZWZ0LXRoaXMubWFyZ2lucy5yaWdodCwoZT9NYXRoLm1heChzLnNjcm9sbEhlaWdodCxzLm9mZnNldEhlaWdodCk6cy5vZmZzZXRIZWlnaHQpLShwYXJzZUludChpLmNzcyhcImJvcmRlckJvdHRvbVdpZHRoXCIpLDEwKXx8MCktKHBhcnNlSW50KGkuY3NzKFwicGFkZGluZ0JvdHRvbVwiKSwxMCl8fDApLXRoaXMuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LXRoaXMubWFyZ2lucy50b3AtdGhpcy5tYXJnaW5zLmJvdHRvbV0sdGhpcy5yZWxhdGl2ZUNvbnRhaW5lcj1pKSx2b2lkIDApOih0aGlzLmNvbnRhaW5tZW50PW51bGwsdm9pZCAwKVxufSxfY29udmVydFBvc2l0aW9uVG86ZnVuY3Rpb24odCxlKXtlfHwoZT10aGlzLnBvc2l0aW9uKTt2YXIgaT1cImFic29sdXRlXCI9PT10PzE6LTEscz10aGlzLl9pc1Jvb3ROb2RlKHRoaXMuc2Nyb2xsUGFyZW50WzBdKTtyZXR1cm57dG9wOmUudG9wK3RoaXMub2Zmc2V0LnJlbGF0aXZlLnRvcCppK3RoaXMub2Zmc2V0LnBhcmVudC50b3AqaS0oXCJmaXhlZFwiPT09dGhpcy5jc3NQb3NpdGlvbj8tdGhpcy5vZmZzZXQuc2Nyb2xsLnRvcDpzPzA6dGhpcy5vZmZzZXQuc2Nyb2xsLnRvcCkqaSxsZWZ0OmUubGVmdCt0aGlzLm9mZnNldC5yZWxhdGl2ZS5sZWZ0KmkrdGhpcy5vZmZzZXQucGFyZW50LmxlZnQqaS0oXCJmaXhlZFwiPT09dGhpcy5jc3NQb3NpdGlvbj8tdGhpcy5vZmZzZXQuc2Nyb2xsLmxlZnQ6cz8wOnRoaXMub2Zmc2V0LnNjcm9sbC5sZWZ0KSppfX0sX2dlbmVyYXRlUG9zaXRpb246ZnVuY3Rpb24odCxlKXt2YXIgaSxzLG4sbyxhPXRoaXMub3B0aW9ucyxyPXRoaXMuX2lzUm9vdE5vZGUodGhpcy5zY3JvbGxQYXJlbnRbMF0pLGg9dC5wYWdlWCxsPXQucGFnZVk7cmV0dXJuIHImJnRoaXMub2Zmc2V0LnNjcm9sbHx8KHRoaXMub2Zmc2V0LnNjcm9sbD17dG9wOnRoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCgpLGxlZnQ6dGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsTGVmdCgpfSksZSYmKHRoaXMuY29udGFpbm1lbnQmJih0aGlzLnJlbGF0aXZlQ29udGFpbmVyPyhzPXRoaXMucmVsYXRpdmVDb250YWluZXIub2Zmc2V0KCksaT1bdGhpcy5jb250YWlubWVudFswXStzLmxlZnQsdGhpcy5jb250YWlubWVudFsxXStzLnRvcCx0aGlzLmNvbnRhaW5tZW50WzJdK3MubGVmdCx0aGlzLmNvbnRhaW5tZW50WzNdK3MudG9wXSk6aT10aGlzLmNvbnRhaW5tZW50LHQucGFnZVgtdGhpcy5vZmZzZXQuY2xpY2subGVmdDxpWzBdJiYoaD1pWzBdK3RoaXMub2Zmc2V0LmNsaWNrLmxlZnQpLHQucGFnZVktdGhpcy5vZmZzZXQuY2xpY2sudG9wPGlbMV0mJihsPWlbMV0rdGhpcy5vZmZzZXQuY2xpY2sudG9wKSx0LnBhZ2VYLXRoaXMub2Zmc2V0LmNsaWNrLmxlZnQ+aVsyXSYmKGg9aVsyXSt0aGlzLm9mZnNldC5jbGljay5sZWZ0KSx0LnBhZ2VZLXRoaXMub2Zmc2V0LmNsaWNrLnRvcD5pWzNdJiYobD1pWzNdK3RoaXMub2Zmc2V0LmNsaWNrLnRvcCkpLGEuZ3JpZCYmKG49YS5ncmlkWzFdP3RoaXMub3JpZ2luYWxQYWdlWStNYXRoLnJvdW5kKChsLXRoaXMub3JpZ2luYWxQYWdlWSkvYS5ncmlkWzFdKSphLmdyaWRbMV06dGhpcy5vcmlnaW5hbFBhZ2VZLGw9aT9uLXRoaXMub2Zmc2V0LmNsaWNrLnRvcD49aVsxXXx8bi10aGlzLm9mZnNldC5jbGljay50b3A+aVszXT9uOm4tdGhpcy5vZmZzZXQuY2xpY2sudG9wPj1pWzFdP24tYS5ncmlkWzFdOm4rYS5ncmlkWzFdOm4sbz1hLmdyaWRbMF0/dGhpcy5vcmlnaW5hbFBhZ2VYK01hdGgucm91bmQoKGgtdGhpcy5vcmlnaW5hbFBhZ2VYKS9hLmdyaWRbMF0pKmEuZ3JpZFswXTp0aGlzLm9yaWdpbmFsUGFnZVgsaD1pP28tdGhpcy5vZmZzZXQuY2xpY2subGVmdD49aVswXXx8by10aGlzLm9mZnNldC5jbGljay5sZWZ0PmlbMl0/bzpvLXRoaXMub2Zmc2V0LmNsaWNrLmxlZnQ+PWlbMF0/by1hLmdyaWRbMF06bythLmdyaWRbMF06byksXCJ5XCI9PT1hLmF4aXMmJihoPXRoaXMub3JpZ2luYWxQYWdlWCksXCJ4XCI9PT1hLmF4aXMmJihsPXRoaXMub3JpZ2luYWxQYWdlWSkpLHt0b3A6bC10aGlzLm9mZnNldC5jbGljay50b3AtdGhpcy5vZmZzZXQucmVsYXRpdmUudG9wLXRoaXMub2Zmc2V0LnBhcmVudC50b3ArKFwiZml4ZWRcIj09PXRoaXMuY3NzUG9zaXRpb24/LXRoaXMub2Zmc2V0LnNjcm9sbC50b3A6cj8wOnRoaXMub2Zmc2V0LnNjcm9sbC50b3ApLGxlZnQ6aC10aGlzLm9mZnNldC5jbGljay5sZWZ0LXRoaXMub2Zmc2V0LnJlbGF0aXZlLmxlZnQtdGhpcy5vZmZzZXQucGFyZW50LmxlZnQrKFwiZml4ZWRcIj09PXRoaXMuY3NzUG9zaXRpb24/LXRoaXMub2Zmc2V0LnNjcm9sbC5sZWZ0OnI/MDp0aGlzLm9mZnNldC5zY3JvbGwubGVmdCl9fSxfY2xlYXI6ZnVuY3Rpb24oKXt0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLmhlbHBlcixcInVpLWRyYWdnYWJsZS1kcmFnZ2luZ1wiKSx0aGlzLmhlbHBlclswXT09PXRoaXMuZWxlbWVudFswXXx8dGhpcy5jYW5jZWxIZWxwZXJSZW1vdmFsfHx0aGlzLmhlbHBlci5yZW1vdmUoKSx0aGlzLmhlbHBlcj1udWxsLHRoaXMuY2FuY2VsSGVscGVyUmVtb3ZhbD0hMSx0aGlzLmRlc3Ryb3lPbkNsZWFyJiZ0aGlzLmRlc3Ryb3koKX0sX3RyaWdnZXI6ZnVuY3Rpb24oZSxpLHMpe3JldHVybiBzPXN8fHRoaXMuX3VpSGFzaCgpLHQudWkucGx1Z2luLmNhbGwodGhpcyxlLFtpLHMsdGhpc10sITApLC9eKGRyYWd8c3RhcnR8c3RvcCkvLnRlc3QoZSkmJih0aGlzLnBvc2l0aW9uQWJzPXRoaXMuX2NvbnZlcnRQb3NpdGlvblRvKFwiYWJzb2x1dGVcIikscy5vZmZzZXQ9dGhpcy5wb3NpdGlvbkFicyksdC5XaWRnZXQucHJvdG90eXBlLl90cmlnZ2VyLmNhbGwodGhpcyxlLGkscyl9LHBsdWdpbnM6e30sX3VpSGFzaDpmdW5jdGlvbigpe3JldHVybntoZWxwZXI6dGhpcy5oZWxwZXIscG9zaXRpb246dGhpcy5wb3NpdGlvbixvcmlnaW5hbFBvc2l0aW9uOnRoaXMub3JpZ2luYWxQb3NpdGlvbixvZmZzZXQ6dGhpcy5wb3NpdGlvbkFic319fSksdC51aS5wbHVnaW4uYWRkKFwiZHJhZ2dhYmxlXCIsXCJjb25uZWN0VG9Tb3J0YWJsZVwiLHtzdGFydDpmdW5jdGlvbihlLGkscyl7dmFyIG49dC5leHRlbmQoe30saSx7aXRlbTpzLmVsZW1lbnR9KTtzLnNvcnRhYmxlcz1bXSx0KHMub3B0aW9ucy5jb25uZWN0VG9Tb3J0YWJsZSkuZWFjaChmdW5jdGlvbigpe3ZhciBpPXQodGhpcykuc29ydGFibGUoXCJpbnN0YW5jZVwiKTtpJiYhaS5vcHRpb25zLmRpc2FibGVkJiYocy5zb3J0YWJsZXMucHVzaChpKSxpLnJlZnJlc2hQb3NpdGlvbnMoKSxpLl90cmlnZ2VyKFwiYWN0aXZhdGVcIixlLG4pKX0pfSxzdG9wOmZ1bmN0aW9uKGUsaSxzKXt2YXIgbj10LmV4dGVuZCh7fSxpLHtpdGVtOnMuZWxlbWVudH0pO3MuY2FuY2VsSGVscGVyUmVtb3ZhbD0hMSx0LmVhY2gocy5zb3J0YWJsZXMsZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QuaXNPdmVyPyh0LmlzT3Zlcj0wLHMuY2FuY2VsSGVscGVyUmVtb3ZhbD0hMCx0LmNhbmNlbEhlbHBlclJlbW92YWw9ITEsdC5fc3RvcmVkQ1NTPXtwb3NpdGlvbjp0LnBsYWNlaG9sZGVyLmNzcyhcInBvc2l0aW9uXCIpLHRvcDp0LnBsYWNlaG9sZGVyLmNzcyhcInRvcFwiKSxsZWZ0OnQucGxhY2Vob2xkZXIuY3NzKFwibGVmdFwiKX0sdC5fbW91c2VTdG9wKGUpLHQub3B0aW9ucy5oZWxwZXI9dC5vcHRpb25zLl9oZWxwZXIpOih0LmNhbmNlbEhlbHBlclJlbW92YWw9ITAsdC5fdHJpZ2dlcihcImRlYWN0aXZhdGVcIixlLG4pKX0pfSxkcmFnOmZ1bmN0aW9uKGUsaSxzKXt0LmVhY2gocy5zb3J0YWJsZXMsZnVuY3Rpb24oKXt2YXIgbj0hMSxvPXRoaXM7by5wb3NpdGlvbkFicz1zLnBvc2l0aW9uQWJzLG8uaGVscGVyUHJvcG9ydGlvbnM9cy5oZWxwZXJQcm9wb3J0aW9ucyxvLm9mZnNldC5jbGljaz1zLm9mZnNldC5jbGljayxvLl9pbnRlcnNlY3RzV2l0aChvLmNvbnRhaW5lckNhY2hlKSYmKG49ITAsdC5lYWNoKHMuc29ydGFibGVzLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucG9zaXRpb25BYnM9cy5wb3NpdGlvbkFicyx0aGlzLmhlbHBlclByb3BvcnRpb25zPXMuaGVscGVyUHJvcG9ydGlvbnMsdGhpcy5vZmZzZXQuY2xpY2s9cy5vZmZzZXQuY2xpY2ssdGhpcyE9PW8mJnRoaXMuX2ludGVyc2VjdHNXaXRoKHRoaXMuY29udGFpbmVyQ2FjaGUpJiZ0LmNvbnRhaW5zKG8uZWxlbWVudFswXSx0aGlzLmVsZW1lbnRbMF0pJiYobj0hMSksbn0pKSxuPyhvLmlzT3Zlcnx8KG8uaXNPdmVyPTEscy5fcGFyZW50PWkuaGVscGVyLnBhcmVudCgpLG8uY3VycmVudEl0ZW09aS5oZWxwZXIuYXBwZW5kVG8oby5lbGVtZW50KS5kYXRhKFwidWktc29ydGFibGUtaXRlbVwiLCEwKSxvLm9wdGlvbnMuX2hlbHBlcj1vLm9wdGlvbnMuaGVscGVyLG8ub3B0aW9ucy5oZWxwZXI9ZnVuY3Rpb24oKXtyZXR1cm4gaS5oZWxwZXJbMF19LGUudGFyZ2V0PW8uY3VycmVudEl0ZW1bMF0sby5fbW91c2VDYXB0dXJlKGUsITApLG8uX21vdXNlU3RhcnQoZSwhMCwhMCksby5vZmZzZXQuY2xpY2sudG9wPXMub2Zmc2V0LmNsaWNrLnRvcCxvLm9mZnNldC5jbGljay5sZWZ0PXMub2Zmc2V0LmNsaWNrLmxlZnQsby5vZmZzZXQucGFyZW50LmxlZnQtPXMub2Zmc2V0LnBhcmVudC5sZWZ0LW8ub2Zmc2V0LnBhcmVudC5sZWZ0LG8ub2Zmc2V0LnBhcmVudC50b3AtPXMub2Zmc2V0LnBhcmVudC50b3Atby5vZmZzZXQucGFyZW50LnRvcCxzLl90cmlnZ2VyKFwidG9Tb3J0YWJsZVwiLGUpLHMuZHJvcHBlZD1vLmVsZW1lbnQsdC5lYWNoKHMuc29ydGFibGVzLGZ1bmN0aW9uKCl7dGhpcy5yZWZyZXNoUG9zaXRpb25zKCl9KSxzLmN1cnJlbnRJdGVtPXMuZWxlbWVudCxvLmZyb21PdXRzaWRlPXMpLG8uY3VycmVudEl0ZW0mJihvLl9tb3VzZURyYWcoZSksaS5wb3NpdGlvbj1vLnBvc2l0aW9uKSk6by5pc092ZXImJihvLmlzT3Zlcj0wLG8uY2FuY2VsSGVscGVyUmVtb3ZhbD0hMCxvLm9wdGlvbnMuX3JldmVydD1vLm9wdGlvbnMucmV2ZXJ0LG8ub3B0aW9ucy5yZXZlcnQ9ITEsby5fdHJpZ2dlcihcIm91dFwiLGUsby5fdWlIYXNoKG8pKSxvLl9tb3VzZVN0b3AoZSwhMCksby5vcHRpb25zLnJldmVydD1vLm9wdGlvbnMuX3JldmVydCxvLm9wdGlvbnMuaGVscGVyPW8ub3B0aW9ucy5faGVscGVyLG8ucGxhY2Vob2xkZXImJm8ucGxhY2Vob2xkZXIucmVtb3ZlKCksaS5oZWxwZXIuYXBwZW5kVG8ocy5fcGFyZW50KSxzLl9yZWZyZXNoT2Zmc2V0cyhlKSxpLnBvc2l0aW9uPXMuX2dlbmVyYXRlUG9zaXRpb24oZSwhMCkscy5fdHJpZ2dlcihcImZyb21Tb3J0YWJsZVwiLGUpLHMuZHJvcHBlZD0hMSx0LmVhY2gocy5zb3J0YWJsZXMsZnVuY3Rpb24oKXt0aGlzLnJlZnJlc2hQb3NpdGlvbnMoKX0pKX0pfX0pLHQudWkucGx1Z2luLmFkZChcImRyYWdnYWJsZVwiLFwiY3Vyc29yXCIse3N0YXJ0OmZ1bmN0aW9uKGUsaSxzKXt2YXIgbj10KFwiYm9keVwiKSxvPXMub3B0aW9ucztuLmNzcyhcImN1cnNvclwiKSYmKG8uX2N1cnNvcj1uLmNzcyhcImN1cnNvclwiKSksbi5jc3MoXCJjdXJzb3JcIixvLmN1cnNvcil9LHN0b3A6ZnVuY3Rpb24oZSxpLHMpe3ZhciBuPXMub3B0aW9ucztuLl9jdXJzb3ImJnQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLG4uX2N1cnNvcil9fSksdC51aS5wbHVnaW4uYWRkKFwiZHJhZ2dhYmxlXCIsXCJvcGFjaXR5XCIse3N0YXJ0OmZ1bmN0aW9uKGUsaSxzKXt2YXIgbj10KGkuaGVscGVyKSxvPXMub3B0aW9ucztuLmNzcyhcIm9wYWNpdHlcIikmJihvLl9vcGFjaXR5PW4uY3NzKFwib3BhY2l0eVwiKSksbi5jc3MoXCJvcGFjaXR5XCIsby5vcGFjaXR5KX0sc3RvcDpmdW5jdGlvbihlLGkscyl7dmFyIG49cy5vcHRpb25zO24uX29wYWNpdHkmJnQoaS5oZWxwZXIpLmNzcyhcIm9wYWNpdHlcIixuLl9vcGFjaXR5KX19KSx0LnVpLnBsdWdpbi5hZGQoXCJkcmFnZ2FibGVcIixcInNjcm9sbFwiLHtzdGFydDpmdW5jdGlvbih0LGUsaSl7aS5zY3JvbGxQYXJlbnROb3RIaWRkZW58fChpLnNjcm9sbFBhcmVudE5vdEhpZGRlbj1pLmhlbHBlci5zY3JvbGxQYXJlbnQoITEpKSxpLnNjcm9sbFBhcmVudE5vdEhpZGRlblswXSE9PWkuZG9jdW1lbnRbMF0mJlwiSFRNTFwiIT09aS5zY3JvbGxQYXJlbnROb3RIaWRkZW5bMF0udGFnTmFtZSYmKGkub3ZlcmZsb3dPZmZzZXQ9aS5zY3JvbGxQYXJlbnROb3RIaWRkZW4ub2Zmc2V0KCkpfSxkcmFnOmZ1bmN0aW9uKGUsaSxzKXt2YXIgbj1zLm9wdGlvbnMsbz0hMSxhPXMuc2Nyb2xsUGFyZW50Tm90SGlkZGVuWzBdLHI9cy5kb2N1bWVudFswXTthIT09ciYmXCJIVE1MXCIhPT1hLnRhZ05hbWU/KG4uYXhpcyYmXCJ4XCI9PT1uLmF4aXN8fChzLm92ZXJmbG93T2Zmc2V0LnRvcCthLm9mZnNldEhlaWdodC1lLnBhZ2VZPG4uc2Nyb2xsU2Vuc2l0aXZpdHk/YS5zY3JvbGxUb3A9bz1hLnNjcm9sbFRvcCtuLnNjcm9sbFNwZWVkOmUucGFnZVktcy5vdmVyZmxvd09mZnNldC50b3A8bi5zY3JvbGxTZW5zaXRpdml0eSYmKGEuc2Nyb2xsVG9wPW89YS5zY3JvbGxUb3Atbi5zY3JvbGxTcGVlZCkpLG4uYXhpcyYmXCJ5XCI9PT1uLmF4aXN8fChzLm92ZXJmbG93T2Zmc2V0LmxlZnQrYS5vZmZzZXRXaWR0aC1lLnBhZ2VYPG4uc2Nyb2xsU2Vuc2l0aXZpdHk/YS5zY3JvbGxMZWZ0PW89YS5zY3JvbGxMZWZ0K24uc2Nyb2xsU3BlZWQ6ZS5wYWdlWC1zLm92ZXJmbG93T2Zmc2V0LmxlZnQ8bi5zY3JvbGxTZW5zaXRpdml0eSYmKGEuc2Nyb2xsTGVmdD1vPWEuc2Nyb2xsTGVmdC1uLnNjcm9sbFNwZWVkKSkpOihuLmF4aXMmJlwieFwiPT09bi5heGlzfHwoZS5wYWdlWS10KHIpLnNjcm9sbFRvcCgpPG4uc2Nyb2xsU2Vuc2l0aXZpdHk/bz10KHIpLnNjcm9sbFRvcCh0KHIpLnNjcm9sbFRvcCgpLW4uc2Nyb2xsU3BlZWQpOnQod2luZG93KS5oZWlnaHQoKS0oZS5wYWdlWS10KHIpLnNjcm9sbFRvcCgpKTxuLnNjcm9sbFNlbnNpdGl2aXR5JiYobz10KHIpLnNjcm9sbFRvcCh0KHIpLnNjcm9sbFRvcCgpK24uc2Nyb2xsU3BlZWQpKSksbi5heGlzJiZcInlcIj09PW4uYXhpc3x8KGUucGFnZVgtdChyKS5zY3JvbGxMZWZ0KCk8bi5zY3JvbGxTZW5zaXRpdml0eT9vPXQocikuc2Nyb2xsTGVmdCh0KHIpLnNjcm9sbExlZnQoKS1uLnNjcm9sbFNwZWVkKTp0KHdpbmRvdykud2lkdGgoKS0oZS5wYWdlWC10KHIpLnNjcm9sbExlZnQoKSk8bi5zY3JvbGxTZW5zaXRpdml0eSYmKG89dChyKS5zY3JvbGxMZWZ0KHQocikuc2Nyb2xsTGVmdCgpK24uc2Nyb2xsU3BlZWQpKSkpLG8hPT0hMSYmdC51aS5kZG1hbmFnZXImJiFuLmRyb3BCZWhhdmlvdXImJnQudWkuZGRtYW5hZ2VyLnByZXBhcmVPZmZzZXRzKHMsZSl9fSksdC51aS5wbHVnaW4uYWRkKFwiZHJhZ2dhYmxlXCIsXCJzbmFwXCIse3N0YXJ0OmZ1bmN0aW9uKGUsaSxzKXt2YXIgbj1zLm9wdGlvbnM7cy5zbmFwRWxlbWVudHM9W10sdChuLnNuYXAuY29uc3RydWN0b3IhPT1TdHJpbmc/bi5zbmFwLml0ZW1zfHxcIjpkYXRhKHVpLWRyYWdnYWJsZSlcIjpuLnNuYXApLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpLGk9ZS5vZmZzZXQoKTt0aGlzIT09cy5lbGVtZW50WzBdJiZzLnNuYXBFbGVtZW50cy5wdXNoKHtpdGVtOnRoaXMsd2lkdGg6ZS5vdXRlcldpZHRoKCksaGVpZ2h0OmUub3V0ZXJIZWlnaHQoKSx0b3A6aS50b3AsbGVmdDppLmxlZnR9KX0pfSxkcmFnOmZ1bmN0aW9uKGUsaSxzKXt2YXIgbixvLGEscixoLGwsdSxjLGQscCxmPXMub3B0aW9ucyxtPWYuc25hcFRvbGVyYW5jZSxnPWkub2Zmc2V0LmxlZnQsXz1nK3MuaGVscGVyUHJvcG9ydGlvbnMud2lkdGgsdj1pLm9mZnNldC50b3AsYj12K3MuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0O2ZvcihkPXMuc25hcEVsZW1lbnRzLmxlbmd0aC0xO2Q+PTA7ZC0tKWg9cy5zbmFwRWxlbWVudHNbZF0ubGVmdC1zLm1hcmdpbnMubGVmdCxsPWgrcy5zbmFwRWxlbWVudHNbZF0ud2lkdGgsdT1zLnNuYXBFbGVtZW50c1tkXS50b3Atcy5tYXJnaW5zLnRvcCxjPXUrcy5zbmFwRWxlbWVudHNbZF0uaGVpZ2h0LGgtbT5ffHxnPmwrbXx8dS1tPmJ8fHY+YyttfHwhdC5jb250YWlucyhzLnNuYXBFbGVtZW50c1tkXS5pdGVtLm93bmVyRG9jdW1lbnQscy5zbmFwRWxlbWVudHNbZF0uaXRlbSk/KHMuc25hcEVsZW1lbnRzW2RdLnNuYXBwaW5nJiZzLm9wdGlvbnMuc25hcC5yZWxlYXNlJiZzLm9wdGlvbnMuc25hcC5yZWxlYXNlLmNhbGwocy5lbGVtZW50LGUsdC5leHRlbmQocy5fdWlIYXNoKCkse3NuYXBJdGVtOnMuc25hcEVsZW1lbnRzW2RdLml0ZW19KSkscy5zbmFwRWxlbWVudHNbZF0uc25hcHBpbmc9ITEpOihcImlubmVyXCIhPT1mLnNuYXBNb2RlJiYobj1tPj1NYXRoLmFicyh1LWIpLG89bT49TWF0aC5hYnMoYy12KSxhPW0+PU1hdGguYWJzKGgtXykscj1tPj1NYXRoLmFicyhsLWcpLG4mJihpLnBvc2l0aW9uLnRvcD1zLl9jb252ZXJ0UG9zaXRpb25UbyhcInJlbGF0aXZlXCIse3RvcDp1LXMuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LGxlZnQ6MH0pLnRvcCksbyYmKGkucG9zaXRpb24udG9wPXMuX2NvbnZlcnRQb3NpdGlvblRvKFwicmVsYXRpdmVcIix7dG9wOmMsbGVmdDowfSkudG9wKSxhJiYoaS5wb3NpdGlvbi5sZWZ0PXMuX2NvbnZlcnRQb3NpdGlvblRvKFwicmVsYXRpdmVcIix7dG9wOjAsbGVmdDpoLXMuaGVscGVyUHJvcG9ydGlvbnMud2lkdGh9KS5sZWZ0KSxyJiYoaS5wb3NpdGlvbi5sZWZ0PXMuX2NvbnZlcnRQb3NpdGlvblRvKFwicmVsYXRpdmVcIix7dG9wOjAsbGVmdDpsfSkubGVmdCkpLHA9bnx8b3x8YXx8cixcIm91dGVyXCIhPT1mLnNuYXBNb2RlJiYobj1tPj1NYXRoLmFicyh1LXYpLG89bT49TWF0aC5hYnMoYy1iKSxhPW0+PU1hdGguYWJzKGgtZykscj1tPj1NYXRoLmFicyhsLV8pLG4mJihpLnBvc2l0aW9uLnRvcD1zLl9jb252ZXJ0UG9zaXRpb25UbyhcInJlbGF0aXZlXCIse3RvcDp1LGxlZnQ6MH0pLnRvcCksbyYmKGkucG9zaXRpb24udG9wPXMuX2NvbnZlcnRQb3NpdGlvblRvKFwicmVsYXRpdmVcIix7dG9wOmMtcy5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQsbGVmdDowfSkudG9wKSxhJiYoaS5wb3NpdGlvbi5sZWZ0PXMuX2NvbnZlcnRQb3NpdGlvblRvKFwicmVsYXRpdmVcIix7dG9wOjAsbGVmdDpofSkubGVmdCksciYmKGkucG9zaXRpb24ubGVmdD1zLl9jb252ZXJ0UG9zaXRpb25UbyhcInJlbGF0aXZlXCIse3RvcDowLGxlZnQ6bC1zLmhlbHBlclByb3BvcnRpb25zLndpZHRofSkubGVmdCkpLCFzLnNuYXBFbGVtZW50c1tkXS5zbmFwcGluZyYmKG58fG98fGF8fHJ8fHApJiZzLm9wdGlvbnMuc25hcC5zbmFwJiZzLm9wdGlvbnMuc25hcC5zbmFwLmNhbGwocy5lbGVtZW50LGUsdC5leHRlbmQocy5fdWlIYXNoKCkse3NuYXBJdGVtOnMuc25hcEVsZW1lbnRzW2RdLml0ZW19KSkscy5zbmFwRWxlbWVudHNbZF0uc25hcHBpbmc9bnx8b3x8YXx8cnx8cCl9fSksdC51aS5wbHVnaW4uYWRkKFwiZHJhZ2dhYmxlXCIsXCJzdGFja1wiLHtzdGFydDpmdW5jdGlvbihlLGkscyl7dmFyIG4sbz1zLm9wdGlvbnMsYT10Lm1ha2VBcnJheSh0KG8uc3RhY2spKS5zb3J0KGZ1bmN0aW9uKGUsaSl7cmV0dXJuKHBhcnNlSW50KHQoZSkuY3NzKFwiekluZGV4XCIpLDEwKXx8MCktKHBhcnNlSW50KHQoaSkuY3NzKFwiekluZGV4XCIpLDEwKXx8MCl9KTthLmxlbmd0aCYmKG49cGFyc2VJbnQodChhWzBdKS5jc3MoXCJ6SW5kZXhcIiksMTApfHwwLHQoYSkuZWFjaChmdW5jdGlvbihlKXt0KHRoaXMpLmNzcyhcInpJbmRleFwiLG4rZSl9KSx0aGlzLmNzcyhcInpJbmRleFwiLG4rYS5sZW5ndGgpKX19KSx0LnVpLnBsdWdpbi5hZGQoXCJkcmFnZ2FibGVcIixcInpJbmRleFwiLHtzdGFydDpmdW5jdGlvbihlLGkscyl7dmFyIG49dChpLmhlbHBlciksbz1zLm9wdGlvbnM7bi5jc3MoXCJ6SW5kZXhcIikmJihvLl96SW5kZXg9bi5jc3MoXCJ6SW5kZXhcIikpLG4uY3NzKFwiekluZGV4XCIsby56SW5kZXgpfSxzdG9wOmZ1bmN0aW9uKGUsaSxzKXt2YXIgbj1zLm9wdGlvbnM7bi5fekluZGV4JiZ0KGkuaGVscGVyKS5jc3MoXCJ6SW5kZXhcIixuLl96SW5kZXgpfX0pLHQudWkuZHJhZ2dhYmxlLHQud2lkZ2V0KFwidWkuZHJvcHBhYmxlXCIse3ZlcnNpb246XCIxLjEyLjFcIix3aWRnZXRFdmVudFByZWZpeDpcImRyb3BcIixvcHRpb25zOnthY2NlcHQ6XCIqXCIsYWRkQ2xhc3NlczohMCxncmVlZHk6ITEsc2NvcGU6XCJkZWZhdWx0XCIsdG9sZXJhbmNlOlwiaW50ZXJzZWN0XCIsYWN0aXZhdGU6bnVsbCxkZWFjdGl2YXRlOm51bGwsZHJvcDpudWxsLG91dDpudWxsLG92ZXI6bnVsbH0sX2NyZWF0ZTpmdW5jdGlvbigpe3ZhciBlLGk9dGhpcy5vcHRpb25zLHM9aS5hY2NlcHQ7dGhpcy5pc292ZXI9ITEsdGhpcy5pc291dD0hMCx0aGlzLmFjY2VwdD10LmlzRnVuY3Rpb24ocyk/czpmdW5jdGlvbih0KXtyZXR1cm4gdC5pcyhzKX0sdGhpcy5wcm9wb3J0aW9ucz1mdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhlPWFyZ3VtZW50c1swXSx2b2lkIDApOmU/ZTplPXt3aWR0aDp0aGlzLmVsZW1lbnRbMF0ub2Zmc2V0V2lkdGgsaGVpZ2h0OnRoaXMuZWxlbWVudFswXS5vZmZzZXRIZWlnaHR9fSx0aGlzLl9hZGRUb01hbmFnZXIoaS5zY29wZSksaS5hZGRDbGFzc2VzJiZ0aGlzLl9hZGRDbGFzcyhcInVpLWRyb3BwYWJsZVwiKX0sX2FkZFRvTWFuYWdlcjpmdW5jdGlvbihlKXt0LnVpLmRkbWFuYWdlci5kcm9wcGFibGVzW2VdPXQudWkuZGRtYW5hZ2VyLmRyb3BwYWJsZXNbZV18fFtdLHQudWkuZGRtYW5hZ2VyLmRyb3BwYWJsZXNbZV0ucHVzaCh0aGlzKX0sX3NwbGljZTpmdW5jdGlvbih0KXtmb3IodmFyIGU9MDt0Lmxlbmd0aD5lO2UrKyl0W2VdPT09dGhpcyYmdC5zcGxpY2UoZSwxKX0sX2Rlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgZT10LnVpLmRkbWFuYWdlci5kcm9wcGFibGVzW3RoaXMub3B0aW9ucy5zY29wZV07dGhpcy5fc3BsaWNlKGUpfSxfc2V0T3B0aW9uOmZ1bmN0aW9uKGUsaSl7aWYoXCJhY2NlcHRcIj09PWUpdGhpcy5hY2NlcHQ9dC5pc0Z1bmN0aW9uKGkpP2k6ZnVuY3Rpb24odCl7cmV0dXJuIHQuaXMoaSl9O2Vsc2UgaWYoXCJzY29wZVwiPT09ZSl7dmFyIHM9dC51aS5kZG1hbmFnZXIuZHJvcHBhYmxlc1t0aGlzLm9wdGlvbnMuc2NvcGVdO3RoaXMuX3NwbGljZShzKSx0aGlzLl9hZGRUb01hbmFnZXIoaSl9dGhpcy5fc3VwZXIoZSxpKX0sX2FjdGl2YXRlOmZ1bmN0aW9uKGUpe3ZhciBpPXQudWkuZGRtYW5hZ2VyLmN1cnJlbnQ7dGhpcy5fYWRkQWN0aXZlQ2xhc3MoKSxpJiZ0aGlzLl90cmlnZ2VyKFwiYWN0aXZhdGVcIixlLHRoaXMudWkoaSkpfSxfZGVhY3RpdmF0ZTpmdW5jdGlvbihlKXt2YXIgaT10LnVpLmRkbWFuYWdlci5jdXJyZW50O3RoaXMuX3JlbW92ZUFjdGl2ZUNsYXNzKCksaSYmdGhpcy5fdHJpZ2dlcihcImRlYWN0aXZhdGVcIixlLHRoaXMudWkoaSkpfSxfb3ZlcjpmdW5jdGlvbihlKXt2YXIgaT10LnVpLmRkbWFuYWdlci5jdXJyZW50O2kmJihpLmN1cnJlbnRJdGVtfHxpLmVsZW1lbnQpWzBdIT09dGhpcy5lbGVtZW50WzBdJiZ0aGlzLmFjY2VwdC5jYWxsKHRoaXMuZWxlbWVudFswXSxpLmN1cnJlbnRJdGVtfHxpLmVsZW1lbnQpJiYodGhpcy5fYWRkSG92ZXJDbGFzcygpLHRoaXMuX3RyaWdnZXIoXCJvdmVyXCIsZSx0aGlzLnVpKGkpKSl9LF9vdXQ6ZnVuY3Rpb24oZSl7dmFyIGk9dC51aS5kZG1hbmFnZXIuY3VycmVudDtpJiYoaS5jdXJyZW50SXRlbXx8aS5lbGVtZW50KVswXSE9PXRoaXMuZWxlbWVudFswXSYmdGhpcy5hY2NlcHQuY2FsbCh0aGlzLmVsZW1lbnRbMF0saS5jdXJyZW50SXRlbXx8aS5lbGVtZW50KSYmKHRoaXMuX3JlbW92ZUhvdmVyQ2xhc3MoKSx0aGlzLl90cmlnZ2VyKFwib3V0XCIsZSx0aGlzLnVpKGkpKSl9LF9kcm9wOmZ1bmN0aW9uKGUsaSl7dmFyIHM9aXx8dC51aS5kZG1hbmFnZXIuY3VycmVudCxuPSExO3JldHVybiBzJiYocy5jdXJyZW50SXRlbXx8cy5lbGVtZW50KVswXSE9PXRoaXMuZWxlbWVudFswXT8odGhpcy5lbGVtZW50LmZpbmQoXCI6ZGF0YSh1aS1kcm9wcGFibGUpXCIpLm5vdChcIi51aS1kcmFnZ2FibGUtZHJhZ2dpbmdcIikuZWFjaChmdW5jdGlvbigpe3ZhciBpPXQodGhpcykuZHJvcHBhYmxlKFwiaW5zdGFuY2VcIik7cmV0dXJuIGkub3B0aW9ucy5ncmVlZHkmJiFpLm9wdGlvbnMuZGlzYWJsZWQmJmkub3B0aW9ucy5zY29wZT09PXMub3B0aW9ucy5zY29wZSYmaS5hY2NlcHQuY2FsbChpLmVsZW1lbnRbMF0scy5jdXJyZW50SXRlbXx8cy5lbGVtZW50KSYmYyhzLHQuZXh0ZW5kKGkse29mZnNldDppLmVsZW1lbnQub2Zmc2V0KCl9KSxpLm9wdGlvbnMudG9sZXJhbmNlLGUpPyhuPSEwLCExKTp2b2lkIDB9KSxuPyExOnRoaXMuYWNjZXB0LmNhbGwodGhpcy5lbGVtZW50WzBdLHMuY3VycmVudEl0ZW18fHMuZWxlbWVudCk/KHRoaXMuX3JlbW92ZUFjdGl2ZUNsYXNzKCksdGhpcy5fcmVtb3ZlSG92ZXJDbGFzcygpLHRoaXMuX3RyaWdnZXIoXCJkcm9wXCIsZSx0aGlzLnVpKHMpKSx0aGlzLmVsZW1lbnQpOiExKTohMX0sdWk6ZnVuY3Rpb24odCl7cmV0dXJue2RyYWdnYWJsZTp0LmN1cnJlbnRJdGVtfHx0LmVsZW1lbnQsaGVscGVyOnQuaGVscGVyLHBvc2l0aW9uOnQucG9zaXRpb24sb2Zmc2V0OnQucG9zaXRpb25BYnN9fSxfYWRkSG92ZXJDbGFzczpmdW5jdGlvbigpe3RoaXMuX2FkZENsYXNzKFwidWktZHJvcHBhYmxlLWhvdmVyXCIpfSxfcmVtb3ZlSG92ZXJDbGFzczpmdW5jdGlvbigpe3RoaXMuX3JlbW92ZUNsYXNzKFwidWktZHJvcHBhYmxlLWhvdmVyXCIpfSxfYWRkQWN0aXZlQ2xhc3M6ZnVuY3Rpb24oKXt0aGlzLl9hZGRDbGFzcyhcInVpLWRyb3BwYWJsZS1hY3RpdmVcIil9LF9yZW1vdmVBY3RpdmVDbGFzczpmdW5jdGlvbigpe3RoaXMuX3JlbW92ZUNsYXNzKFwidWktZHJvcHBhYmxlLWFjdGl2ZVwiKX19KTt2YXIgYz10LnVpLmludGVyc2VjdD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLGkpe3JldHVybiB0Pj1lJiZlK2k+dH1yZXR1cm4gZnVuY3Rpb24oZSxpLHMsbil7aWYoIWkub2Zmc2V0KXJldHVybiExO3ZhciBvPShlLnBvc2l0aW9uQWJzfHxlLnBvc2l0aW9uLmFic29sdXRlKS5sZWZ0K2UubWFyZ2lucy5sZWZ0LGE9KGUucG9zaXRpb25BYnN8fGUucG9zaXRpb24uYWJzb2x1dGUpLnRvcCtlLm1hcmdpbnMudG9wLHI9bytlLmhlbHBlclByb3BvcnRpb25zLndpZHRoLGg9YStlLmhlbHBlclByb3BvcnRpb25zLmhlaWdodCxsPWkub2Zmc2V0LmxlZnQsdT1pLm9mZnNldC50b3AsYz1sK2kucHJvcG9ydGlvbnMoKS53aWR0aCxkPXUraS5wcm9wb3J0aW9ucygpLmhlaWdodDtzd2l0Y2gocyl7Y2FzZVwiZml0XCI6cmV0dXJuIG8+PWwmJmM+PXImJmE+PXUmJmQ+PWg7Y2FzZVwiaW50ZXJzZWN0XCI6cmV0dXJuIG8rZS5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aC8yPmwmJmM+ci1lLmhlbHBlclByb3BvcnRpb25zLndpZHRoLzImJmErZS5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQvMj51JiZkPmgtZS5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQvMjtjYXNlXCJwb2ludGVyXCI6cmV0dXJuIHQobi5wYWdlWSx1LGkucHJvcG9ydGlvbnMoKS5oZWlnaHQpJiZ0KG4ucGFnZVgsbCxpLnByb3BvcnRpb25zKCkud2lkdGgpO2Nhc2VcInRvdWNoXCI6cmV0dXJuKGE+PXUmJmQ+PWF8fGg+PXUmJmQ+PWh8fHU+YSYmaD5kKSYmKG8+PWwmJmM+PW98fHI+PWwmJmM+PXJ8fGw+byYmcj5jKTtkZWZhdWx0OnJldHVybiExfX19KCk7dC51aS5kZG1hbmFnZXI9e2N1cnJlbnQ6bnVsbCxkcm9wcGFibGVzOntcImRlZmF1bHRcIjpbXX0scHJlcGFyZU9mZnNldHM6ZnVuY3Rpb24oZSxpKXt2YXIgcyxuLG89dC51aS5kZG1hbmFnZXIuZHJvcHBhYmxlc1tlLm9wdGlvbnMuc2NvcGVdfHxbXSxhPWk/aS50eXBlOm51bGwscj0oZS5jdXJyZW50SXRlbXx8ZS5lbGVtZW50KS5maW5kKFwiOmRhdGEodWktZHJvcHBhYmxlKVwiKS5hZGRCYWNrKCk7dDpmb3Iocz0wO28ubGVuZ3RoPnM7cysrKWlmKCEob1tzXS5vcHRpb25zLmRpc2FibGVkfHxlJiYhb1tzXS5hY2NlcHQuY2FsbChvW3NdLmVsZW1lbnRbMF0sZS5jdXJyZW50SXRlbXx8ZS5lbGVtZW50KSkpe2ZvcihuPTA7ci5sZW5ndGg+bjtuKyspaWYocltuXT09PW9bc10uZWxlbWVudFswXSl7b1tzXS5wcm9wb3J0aW9ucygpLmhlaWdodD0wO2NvbnRpbnVlIHR9b1tzXS52aXNpYmxlPVwibm9uZVwiIT09b1tzXS5lbGVtZW50LmNzcyhcImRpc3BsYXlcIiksb1tzXS52aXNpYmxlJiYoXCJtb3VzZWRvd25cIj09PWEmJm9bc10uX2FjdGl2YXRlLmNhbGwob1tzXSxpKSxvW3NdLm9mZnNldD1vW3NdLmVsZW1lbnQub2Zmc2V0KCksb1tzXS5wcm9wb3J0aW9ucyh7d2lkdGg6b1tzXS5lbGVtZW50WzBdLm9mZnNldFdpZHRoLGhlaWdodDpvW3NdLmVsZW1lbnRbMF0ub2Zmc2V0SGVpZ2h0fSkpfX0sZHJvcDpmdW5jdGlvbihlLGkpe3ZhciBzPSExO3JldHVybiB0LmVhY2goKHQudWkuZGRtYW5hZ2VyLmRyb3BwYWJsZXNbZS5vcHRpb25zLnNjb3BlXXx8W10pLnNsaWNlKCksZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMmJighdGhpcy5vcHRpb25zLmRpc2FibGVkJiZ0aGlzLnZpc2libGUmJmMoZSx0aGlzLHRoaXMub3B0aW9ucy50b2xlcmFuY2UsaSkmJihzPXRoaXMuX2Ryb3AuY2FsbCh0aGlzLGkpfHxzKSwhdGhpcy5vcHRpb25zLmRpc2FibGVkJiZ0aGlzLnZpc2libGUmJnRoaXMuYWNjZXB0LmNhbGwodGhpcy5lbGVtZW50WzBdLGUuY3VycmVudEl0ZW18fGUuZWxlbWVudCkmJih0aGlzLmlzb3V0PSEwLHRoaXMuaXNvdmVyPSExLHRoaXMuX2RlYWN0aXZhdGUuY2FsbCh0aGlzLGkpKSl9KSxzfSxkcmFnU3RhcnQ6ZnVuY3Rpb24oZSxpKXtlLmVsZW1lbnQucGFyZW50c1VudGlsKFwiYm9keVwiKS5vbihcInNjcm9sbC5kcm9wcGFibGVcIixmdW5jdGlvbigpe2Uub3B0aW9ucy5yZWZyZXNoUG9zaXRpb25zfHx0LnVpLmRkbWFuYWdlci5wcmVwYXJlT2Zmc2V0cyhlLGkpfSl9LGRyYWc6ZnVuY3Rpb24oZSxpKXtlLm9wdGlvbnMucmVmcmVzaFBvc2l0aW9ucyYmdC51aS5kZG1hbmFnZXIucHJlcGFyZU9mZnNldHMoZSxpKSx0LmVhY2godC51aS5kZG1hbmFnZXIuZHJvcHBhYmxlc1tlLm9wdGlvbnMuc2NvcGVdfHxbXSxmdW5jdGlvbigpe2lmKCF0aGlzLm9wdGlvbnMuZGlzYWJsZWQmJiF0aGlzLmdyZWVkeUNoaWxkJiZ0aGlzLnZpc2libGUpe3ZhciBzLG4sbyxhPWMoZSx0aGlzLHRoaXMub3B0aW9ucy50b2xlcmFuY2UsaSkscj0hYSYmdGhpcy5pc292ZXI/XCJpc291dFwiOmEmJiF0aGlzLmlzb3Zlcj9cImlzb3ZlclwiOm51bGw7ciYmKHRoaXMub3B0aW9ucy5ncmVlZHkmJihuPXRoaXMub3B0aW9ucy5zY29wZSxvPXRoaXMuZWxlbWVudC5wYXJlbnRzKFwiOmRhdGEodWktZHJvcHBhYmxlKVwiKS5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4gdCh0aGlzKS5kcm9wcGFibGUoXCJpbnN0YW5jZVwiKS5vcHRpb25zLnNjb3BlPT09bn0pLG8ubGVuZ3RoJiYocz10KG9bMF0pLmRyb3BwYWJsZShcImluc3RhbmNlXCIpLHMuZ3JlZWR5Q2hpbGQ9XCJpc292ZXJcIj09PXIpKSxzJiZcImlzb3ZlclwiPT09ciYmKHMuaXNvdmVyPSExLHMuaXNvdXQ9ITAscy5fb3V0LmNhbGwocyxpKSksdGhpc1tyXT0hMCx0aGlzW1wiaXNvdXRcIj09PXI/XCJpc292ZXJcIjpcImlzb3V0XCJdPSExLHRoaXNbXCJpc292ZXJcIj09PXI/XCJfb3ZlclwiOlwiX291dFwiXS5jYWxsKHRoaXMsaSkscyYmXCJpc291dFwiPT09ciYmKHMuaXNvdXQ9ITEscy5pc292ZXI9ITAscy5fb3Zlci5jYWxsKHMsaSkpKX19KX0sZHJhZ1N0b3A6ZnVuY3Rpb24oZSxpKXtlLmVsZW1lbnQucGFyZW50c1VudGlsKFwiYm9keVwiKS5vZmYoXCJzY3JvbGwuZHJvcHBhYmxlXCIpLGUub3B0aW9ucy5yZWZyZXNoUG9zaXRpb25zfHx0LnVpLmRkbWFuYWdlci5wcmVwYXJlT2Zmc2V0cyhlLGkpfX0sdC51aUJhY2tDb21wYXQhPT0hMSYmdC53aWRnZXQoXCJ1aS5kcm9wcGFibGVcIix0LnVpLmRyb3BwYWJsZSx7b3B0aW9uczp7aG92ZXJDbGFzczohMSxhY3RpdmVDbGFzczohMX0sX2FkZEFjdGl2ZUNsYXNzOmZ1bmN0aW9uKCl7dGhpcy5fc3VwZXIoKSx0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpfSxfcmVtb3ZlQWN0aXZlQ2xhc3M6ZnVuY3Rpb24oKXt0aGlzLl9zdXBlcigpLHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyl9LF9hZGRIb3ZlckNsYXNzOmZ1bmN0aW9uKCl7dGhpcy5fc3VwZXIoKSx0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcyYmdGhpcy5lbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzKX0sX3JlbW92ZUhvdmVyQ2xhc3M6ZnVuY3Rpb24oKXt0aGlzLl9zdXBlcigpLHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MpfX0pLHQudWkuZHJvcHBhYmxlLHQud2lkZ2V0KFwidWkucmVzaXphYmxlXCIsdC51aS5tb3VzZSx7dmVyc2lvbjpcIjEuMTIuMVwiLHdpZGdldEV2ZW50UHJlZml4OlwicmVzaXplXCIsb3B0aW9uczp7YWxzb1Jlc2l6ZTohMSxhbmltYXRlOiExLGFuaW1hdGVEdXJhdGlvbjpcInNsb3dcIixhbmltYXRlRWFzaW5nOlwic3dpbmdcIixhc3BlY3RSYXRpbzohMSxhdXRvSGlkZTohMSxjbGFzc2VzOntcInVpLXJlc2l6YWJsZS1zZVwiOlwidWktaWNvbiB1aS1pY29uLWdyaXBzbWFsbC1kaWFnb25hbC1zZVwifSxjb250YWlubWVudDohMSxnaG9zdDohMSxncmlkOiExLGhhbmRsZXM6XCJlLHMsc2VcIixoZWxwZXI6ITEsbWF4SGVpZ2h0Om51bGwsbWF4V2lkdGg6bnVsbCxtaW5IZWlnaHQ6MTAsbWluV2lkdGg6MTAsekluZGV4OjkwLHJlc2l6ZTpudWxsLHN0YXJ0Om51bGwsc3RvcDpudWxsfSxfbnVtOmZ1bmN0aW9uKHQpe3JldHVybiBwYXJzZUZsb2F0KHQpfHwwfSxfaXNOdW1iZXI6ZnVuY3Rpb24odCl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQodCkpfSxfaGFzU2Nyb2xsOmZ1bmN0aW9uKGUsaSl7aWYoXCJoaWRkZW5cIj09PXQoZSkuY3NzKFwib3ZlcmZsb3dcIikpcmV0dXJuITE7dmFyIHM9aSYmXCJsZWZ0XCI9PT1pP1wic2Nyb2xsTGVmdFwiOlwic2Nyb2xsVG9wXCIsbj0hMTtyZXR1cm4gZVtzXT4wPyEwOihlW3NdPTEsbj1lW3NdPjAsZVtzXT0wLG4pfSxfY3JlYXRlOmZ1bmN0aW9uKCl7dmFyIGUsaT10aGlzLm9wdGlvbnMscz10aGlzO3RoaXMuX2FkZENsYXNzKFwidWktcmVzaXphYmxlXCIpLHQuZXh0ZW5kKHRoaXMse19hc3BlY3RSYXRpbzohIWkuYXNwZWN0UmF0aW8sYXNwZWN0UmF0aW86aS5hc3BlY3RSYXRpbyxvcmlnaW5hbEVsZW1lbnQ6dGhpcy5lbGVtZW50LF9wcm9wb3J0aW9uYWxseVJlc2l6ZUVsZW1lbnRzOltdLF9oZWxwZXI6aS5oZWxwZXJ8fGkuZ2hvc3R8fGkuYW5pbWF0ZT9pLmhlbHBlcnx8XCJ1aS1yZXNpemFibGUtaGVscGVyXCI6bnVsbH0pLHRoaXMuZWxlbWVudFswXS5ub2RlTmFtZS5tYXRjaCgvXihjYW52YXN8dGV4dGFyZWF8aW5wdXR8c2VsZWN0fGJ1dHRvbnxpbWcpJC9pKSYmKHRoaXMuZWxlbWVudC53cmFwKHQoXCI8ZGl2IGNsYXNzPSd1aS13cmFwcGVyJyBzdHlsZT0nb3ZlcmZsb3c6IGhpZGRlbjsnPjwvZGl2PlwiKS5jc3Moe3Bvc2l0aW9uOnRoaXMuZWxlbWVudC5jc3MoXCJwb3NpdGlvblwiKSx3aWR0aDp0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKSx0b3A6dGhpcy5lbGVtZW50LmNzcyhcInRvcFwiKSxsZWZ0OnRoaXMuZWxlbWVudC5jc3MoXCJsZWZ0XCIpfSkpLHRoaXMuZWxlbWVudD10aGlzLmVsZW1lbnQucGFyZW50KCkuZGF0YShcInVpLXJlc2l6YWJsZVwiLHRoaXMuZWxlbWVudC5yZXNpemFibGUoXCJpbnN0YW5jZVwiKSksdGhpcy5lbGVtZW50SXNXcmFwcGVyPSEwLGU9e21hcmdpblRvcDp0aGlzLm9yaWdpbmFsRWxlbWVudC5jc3MoXCJtYXJnaW5Ub3BcIiksbWFyZ2luUmlnaHQ6dGhpcy5vcmlnaW5hbEVsZW1lbnQuY3NzKFwibWFyZ2luUmlnaHRcIiksbWFyZ2luQm90dG9tOnRoaXMub3JpZ2luYWxFbGVtZW50LmNzcyhcIm1hcmdpbkJvdHRvbVwiKSxtYXJnaW5MZWZ0OnRoaXMub3JpZ2luYWxFbGVtZW50LmNzcyhcIm1hcmdpbkxlZnRcIil9LHRoaXMuZWxlbWVudC5jc3MoZSksdGhpcy5vcmlnaW5hbEVsZW1lbnQuY3NzKFwibWFyZ2luXCIsMCksdGhpcy5vcmlnaW5hbFJlc2l6ZVN0eWxlPXRoaXMub3JpZ2luYWxFbGVtZW50LmNzcyhcInJlc2l6ZVwiKSx0aGlzLm9yaWdpbmFsRWxlbWVudC5jc3MoXCJyZXNpemVcIixcIm5vbmVcIiksdGhpcy5fcHJvcG9ydGlvbmFsbHlSZXNpemVFbGVtZW50cy5wdXNoKHRoaXMub3JpZ2luYWxFbGVtZW50LmNzcyh7cG9zaXRpb246XCJzdGF0aWNcIix6b29tOjEsZGlzcGxheTpcImJsb2NrXCJ9KSksdGhpcy5vcmlnaW5hbEVsZW1lbnQuY3NzKGUpLHRoaXMuX3Byb3BvcnRpb25hbGx5UmVzaXplKCkpLHRoaXMuX3NldHVwSGFuZGxlcygpLGkuYXV0b0hpZGUmJnQodGhpcy5lbGVtZW50KS5vbihcIm1vdXNlZW50ZXJcIixmdW5jdGlvbigpe2kuZGlzYWJsZWR8fChzLl9yZW1vdmVDbGFzcyhcInVpLXJlc2l6YWJsZS1hdXRvaGlkZVwiKSxzLl9oYW5kbGVzLnNob3coKSl9KS5vbihcIm1vdXNlbGVhdmVcIixmdW5jdGlvbigpe2kuZGlzYWJsZWR8fHMucmVzaXppbmd8fChzLl9hZGRDbGFzcyhcInVpLXJlc2l6YWJsZS1hdXRvaGlkZVwiKSxzLl9oYW5kbGVzLmhpZGUoKSl9KSx0aGlzLl9tb3VzZUluaXQoKX0sX2Rlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLl9tb3VzZURlc3Ryb3koKTt2YXIgZSxpPWZ1bmN0aW9uKGUpe3QoZSkucmVtb3ZlRGF0YShcInJlc2l6YWJsZVwiKS5yZW1vdmVEYXRhKFwidWktcmVzaXphYmxlXCIpLm9mZihcIi5yZXNpemFibGVcIikuZmluZChcIi51aS1yZXNpemFibGUtaGFuZGxlXCIpLnJlbW92ZSgpfTtyZXR1cm4gdGhpcy5lbGVtZW50SXNXcmFwcGVyJiYoaSh0aGlzLmVsZW1lbnQpLGU9dGhpcy5lbGVtZW50LHRoaXMub3JpZ2luYWxFbGVtZW50LmNzcyh7cG9zaXRpb246ZS5jc3MoXCJwb3NpdGlvblwiKSx3aWR0aDplLm91dGVyV2lkdGgoKSxoZWlnaHQ6ZS5vdXRlckhlaWdodCgpLHRvcDplLmNzcyhcInRvcFwiKSxsZWZ0OmUuY3NzKFwibGVmdFwiKX0pLmluc2VydEFmdGVyKGUpLGUucmVtb3ZlKCkpLHRoaXMub3JpZ2luYWxFbGVtZW50LmNzcyhcInJlc2l6ZVwiLHRoaXMub3JpZ2luYWxSZXNpemVTdHlsZSksaSh0aGlzLm9yaWdpbmFsRWxlbWVudCksdGhpc30sX3NldE9wdGlvbjpmdW5jdGlvbih0LGUpe3N3aXRjaCh0aGlzLl9zdXBlcih0LGUpLHQpe2Nhc2VcImhhbmRsZXNcIjp0aGlzLl9yZW1vdmVIYW5kbGVzKCksdGhpcy5fc2V0dXBIYW5kbGVzKCk7YnJlYWs7ZGVmYXVsdDp9fSxfc2V0dXBIYW5kbGVzOmZ1bmN0aW9uKCl7dmFyIGUsaSxzLG4sbyxhPXRoaXMub3B0aW9ucyxyPXRoaXM7aWYodGhpcy5oYW5kbGVzPWEuaGFuZGxlc3x8KHQoXCIudWktcmVzaXphYmxlLWhhbmRsZVwiLHRoaXMuZWxlbWVudCkubGVuZ3RoP3tuOlwiLnVpLXJlc2l6YWJsZS1uXCIsZTpcIi51aS1yZXNpemFibGUtZVwiLHM6XCIudWktcmVzaXphYmxlLXNcIix3OlwiLnVpLXJlc2l6YWJsZS13XCIsc2U6XCIudWktcmVzaXphYmxlLXNlXCIsc3c6XCIudWktcmVzaXphYmxlLXN3XCIsbmU6XCIudWktcmVzaXphYmxlLW5lXCIsbnc6XCIudWktcmVzaXphYmxlLW53XCJ9OlwiZSxzLHNlXCIpLHRoaXMuX2hhbmRsZXM9dCgpLHRoaXMuaGFuZGxlcy5jb25zdHJ1Y3Rvcj09PVN0cmluZylmb3IoXCJhbGxcIj09PXRoaXMuaGFuZGxlcyYmKHRoaXMuaGFuZGxlcz1cIm4sZSxzLHcsc2Usc3csbmUsbndcIikscz10aGlzLmhhbmRsZXMuc3BsaXQoXCIsXCIpLHRoaXMuaGFuZGxlcz17fSxpPTA7cy5sZW5ndGg+aTtpKyspZT10LnRyaW0oc1tpXSksbj1cInVpLXJlc2l6YWJsZS1cIitlLG89dChcIjxkaXY+XCIpLHRoaXMuX2FkZENsYXNzKG8sXCJ1aS1yZXNpemFibGUtaGFuZGxlIFwiK24pLG8uY3NzKHt6SW5kZXg6YS56SW5kZXh9KSx0aGlzLmhhbmRsZXNbZV09XCIudWktcmVzaXphYmxlLVwiK2UsdGhpcy5lbGVtZW50LmFwcGVuZChvKTt0aGlzLl9yZW5kZXJBeGlzPWZ1bmN0aW9uKGUpe3ZhciBpLHMsbixvO2U9ZXx8dGhpcy5lbGVtZW50O2ZvcihpIGluIHRoaXMuaGFuZGxlcyl0aGlzLmhhbmRsZXNbaV0uY29uc3RydWN0b3I9PT1TdHJpbmc/dGhpcy5oYW5kbGVzW2ldPXRoaXMuZWxlbWVudC5jaGlsZHJlbih0aGlzLmhhbmRsZXNbaV0pLmZpcnN0KCkuc2hvdygpOih0aGlzLmhhbmRsZXNbaV0uanF1ZXJ5fHx0aGlzLmhhbmRsZXNbaV0ubm9kZVR5cGUpJiYodGhpcy5oYW5kbGVzW2ldPXQodGhpcy5oYW5kbGVzW2ldKSx0aGlzLl9vbih0aGlzLmhhbmRsZXNbaV0se21vdXNlZG93bjpyLl9tb3VzZURvd259KSksdGhpcy5lbGVtZW50SXNXcmFwcGVyJiZ0aGlzLm9yaWdpbmFsRWxlbWVudFswXS5ub2RlTmFtZS5tYXRjaCgvXih0ZXh0YXJlYXxpbnB1dHxzZWxlY3R8YnV0dG9uKSQvaSkmJihzPXQodGhpcy5oYW5kbGVzW2ldLHRoaXMuZWxlbWVudCksbz0vc3d8bmV8bnd8c2V8bnxzLy50ZXN0KGkpP3Mub3V0ZXJIZWlnaHQoKTpzLm91dGVyV2lkdGgoKSxuPVtcInBhZGRpbmdcIiwvbmV8bnd8bi8udGVzdChpKT9cIlRvcFwiOi9zZXxzd3xzLy50ZXN0KGkpP1wiQm90dG9tXCI6L15lJC8udGVzdChpKT9cIlJpZ2h0XCI6XCJMZWZ0XCJdLmpvaW4oXCJcIiksZS5jc3MobixvKSx0aGlzLl9wcm9wb3J0aW9uYWxseVJlc2l6ZSgpKSx0aGlzLl9oYW5kbGVzPXRoaXMuX2hhbmRsZXMuYWRkKHRoaXMuaGFuZGxlc1tpXSl9LHRoaXMuX3JlbmRlckF4aXModGhpcy5lbGVtZW50KSx0aGlzLl9oYW5kbGVzPXRoaXMuX2hhbmRsZXMuYWRkKHRoaXMuZWxlbWVudC5maW5kKFwiLnVpLXJlc2l6YWJsZS1oYW5kbGVcIikpLHRoaXMuX2hhbmRsZXMuZGlzYWJsZVNlbGVjdGlvbigpLHRoaXMuX2hhbmRsZXMub24oXCJtb3VzZW92ZXJcIixmdW5jdGlvbigpe3IucmVzaXppbmd8fCh0aGlzLmNsYXNzTmFtZSYmKG89dGhpcy5jbGFzc05hbWUubWF0Y2goL3VpLXJlc2l6YWJsZS0oc2V8c3d8bmV8bnd8bnxlfHN8dykvaSkpLHIuYXhpcz1vJiZvWzFdP29bMV06XCJzZVwiKX0pLGEuYXV0b0hpZGUmJih0aGlzLl9oYW5kbGVzLmhpZGUoKSx0aGlzLl9hZGRDbGFzcyhcInVpLXJlc2l6YWJsZS1hdXRvaGlkZVwiKSl9LF9yZW1vdmVIYW5kbGVzOmZ1bmN0aW9uKCl7dGhpcy5faGFuZGxlcy5yZW1vdmUoKX0sX21vdXNlQ2FwdHVyZTpmdW5jdGlvbihlKXt2YXIgaSxzLG49ITE7Zm9yKGkgaW4gdGhpcy5oYW5kbGVzKXM9dCh0aGlzLmhhbmRsZXNbaV0pWzBdLChzPT09ZS50YXJnZXR8fHQuY29udGFpbnMocyxlLnRhcmdldCkpJiYobj0hMCk7cmV0dXJuIXRoaXMub3B0aW9ucy5kaXNhYmxlZCYmbn0sX21vdXNlU3RhcnQ6ZnVuY3Rpb24oZSl7dmFyIGkscyxuLG89dGhpcy5vcHRpb25zLGE9dGhpcy5lbGVtZW50O3JldHVybiB0aGlzLnJlc2l6aW5nPSEwLHRoaXMuX3JlbmRlclByb3h5KCksaT10aGlzLl9udW0odGhpcy5oZWxwZXIuY3NzKFwibGVmdFwiKSkscz10aGlzLl9udW0odGhpcy5oZWxwZXIuY3NzKFwidG9wXCIpKSxvLmNvbnRhaW5tZW50JiYoaSs9dChvLmNvbnRhaW5tZW50KS5zY3JvbGxMZWZ0KCl8fDAscys9dChvLmNvbnRhaW5tZW50KS5zY3JvbGxUb3AoKXx8MCksdGhpcy5vZmZzZXQ9dGhpcy5oZWxwZXIub2Zmc2V0KCksdGhpcy5wb3NpdGlvbj17bGVmdDppLHRvcDpzfSx0aGlzLnNpemU9dGhpcy5faGVscGVyP3t3aWR0aDp0aGlzLmhlbHBlci53aWR0aCgpLGhlaWdodDp0aGlzLmhlbHBlci5oZWlnaHQoKX06e3dpZHRoOmEud2lkdGgoKSxoZWlnaHQ6YS5oZWlnaHQoKX0sdGhpcy5vcmlnaW5hbFNpemU9dGhpcy5faGVscGVyP3t3aWR0aDphLm91dGVyV2lkdGgoKSxoZWlnaHQ6YS5vdXRlckhlaWdodCgpfTp7d2lkdGg6YS53aWR0aCgpLGhlaWdodDphLmhlaWdodCgpfSx0aGlzLnNpemVEaWZmPXt3aWR0aDphLm91dGVyV2lkdGgoKS1hLndpZHRoKCksaGVpZ2h0OmEub3V0ZXJIZWlnaHQoKS1hLmhlaWdodCgpfSx0aGlzLm9yaWdpbmFsUG9zaXRpb249e2xlZnQ6aSx0b3A6c30sdGhpcy5vcmlnaW5hbE1vdXNlUG9zaXRpb249e2xlZnQ6ZS5wYWdlWCx0b3A6ZS5wYWdlWX0sdGhpcy5hc3BlY3RSYXRpbz1cIm51bWJlclwiPT10eXBlb2Ygby5hc3BlY3RSYXRpbz9vLmFzcGVjdFJhdGlvOnRoaXMub3JpZ2luYWxTaXplLndpZHRoL3RoaXMub3JpZ2luYWxTaXplLmhlaWdodHx8MSxuPXQoXCIudWktcmVzaXphYmxlLVwiK3RoaXMuYXhpcykuY3NzKFwiY3Vyc29yXCIpLHQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLFwiYXV0b1wiPT09bj90aGlzLmF4aXMrXCItcmVzaXplXCI6biksdGhpcy5fYWRkQ2xhc3MoXCJ1aS1yZXNpemFibGUtcmVzaXppbmdcIiksdGhpcy5fcHJvcGFnYXRlKFwic3RhcnRcIixlKSwhMH0sX21vdXNlRHJhZzpmdW5jdGlvbihlKXt2YXIgaSxzLG49dGhpcy5vcmlnaW5hbE1vdXNlUG9zaXRpb24sbz10aGlzLmF4aXMsYT1lLnBhZ2VYLW4ubGVmdHx8MCxyPWUucGFnZVktbi50b3B8fDAsaD10aGlzLl9jaGFuZ2Vbb107cmV0dXJuIHRoaXMuX3VwZGF0ZVByZXZQcm9wZXJ0aWVzKCksaD8oaT1oLmFwcGx5KHRoaXMsW2UsYSxyXSksdGhpcy5fdXBkYXRlVmlydHVhbEJvdW5kYXJpZXMoZS5zaGlmdEtleSksKHRoaXMuX2FzcGVjdFJhdGlvfHxlLnNoaWZ0S2V5KSYmKGk9dGhpcy5fdXBkYXRlUmF0aW8oaSxlKSksaT10aGlzLl9yZXNwZWN0U2l6ZShpLGUpLHRoaXMuX3VwZGF0ZUNhY2hlKGkpLHRoaXMuX3Byb3BhZ2F0ZShcInJlc2l6ZVwiLGUpLHM9dGhpcy5fYXBwbHlDaGFuZ2VzKCksIXRoaXMuX2hlbHBlciYmdGhpcy5fcHJvcG9ydGlvbmFsbHlSZXNpemVFbGVtZW50cy5sZW5ndGgmJnRoaXMuX3Byb3BvcnRpb25hbGx5UmVzaXplKCksdC5pc0VtcHR5T2JqZWN0KHMpfHwodGhpcy5fdXBkYXRlUHJldlByb3BlcnRpZXMoKSx0aGlzLl90cmlnZ2VyKFwicmVzaXplXCIsZSx0aGlzLnVpKCkpLHRoaXMuX2FwcGx5Q2hhbmdlcygpKSwhMSk6ITF9LF9tb3VzZVN0b3A6ZnVuY3Rpb24oZSl7dGhpcy5yZXNpemluZz0hMTt2YXIgaSxzLG4sbyxhLHIsaCxsPXRoaXMub3B0aW9ucyx1PXRoaXM7cmV0dXJuIHRoaXMuX2hlbHBlciYmKGk9dGhpcy5fcHJvcG9ydGlvbmFsbHlSZXNpemVFbGVtZW50cyxzPWkubGVuZ3RoJiYvdGV4dGFyZWEvaS50ZXN0KGlbMF0ubm9kZU5hbWUpLG49cyYmdGhpcy5faGFzU2Nyb2xsKGlbMF0sXCJsZWZ0XCIpPzA6dS5zaXplRGlmZi5oZWlnaHQsbz1zPzA6dS5zaXplRGlmZi53aWR0aCxhPXt3aWR0aDp1LmhlbHBlci53aWR0aCgpLW8saGVpZ2h0OnUuaGVscGVyLmhlaWdodCgpLW59LHI9cGFyc2VGbG9hdCh1LmVsZW1lbnQuY3NzKFwibGVmdFwiKSkrKHUucG9zaXRpb24ubGVmdC11Lm9yaWdpbmFsUG9zaXRpb24ubGVmdCl8fG51bGwsaD1wYXJzZUZsb2F0KHUuZWxlbWVudC5jc3MoXCJ0b3BcIikpKyh1LnBvc2l0aW9uLnRvcC11Lm9yaWdpbmFsUG9zaXRpb24udG9wKXx8bnVsbCxsLmFuaW1hdGV8fHRoaXMuZWxlbWVudC5jc3ModC5leHRlbmQoYSx7dG9wOmgsbGVmdDpyfSkpLHUuaGVscGVyLmhlaWdodCh1LnNpemUuaGVpZ2h0KSx1LmhlbHBlci53aWR0aCh1LnNpemUud2lkdGgpLHRoaXMuX2hlbHBlciYmIWwuYW5pbWF0ZSYmdGhpcy5fcHJvcG9ydGlvbmFsbHlSZXNpemUoKSksdChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsXCJhdXRvXCIpLHRoaXMuX3JlbW92ZUNsYXNzKFwidWktcmVzaXphYmxlLXJlc2l6aW5nXCIpLHRoaXMuX3Byb3BhZ2F0ZShcInN0b3BcIixlKSx0aGlzLl9oZWxwZXImJnRoaXMuaGVscGVyLnJlbW92ZSgpLCExfSxfdXBkYXRlUHJldlByb3BlcnRpZXM6ZnVuY3Rpb24oKXt0aGlzLnByZXZQb3NpdGlvbj17dG9wOnRoaXMucG9zaXRpb24udG9wLGxlZnQ6dGhpcy5wb3NpdGlvbi5sZWZ0fSx0aGlzLnByZXZTaXplPXt3aWR0aDp0aGlzLnNpemUud2lkdGgsaGVpZ2h0OnRoaXMuc2l6ZS5oZWlnaHR9fSxfYXBwbHlDaGFuZ2VzOmZ1bmN0aW9uKCl7dmFyIHQ9e307cmV0dXJuIHRoaXMucG9zaXRpb24udG9wIT09dGhpcy5wcmV2UG9zaXRpb24udG9wJiYodC50b3A9dGhpcy5wb3NpdGlvbi50b3ArXCJweFwiKSx0aGlzLnBvc2l0aW9uLmxlZnQhPT10aGlzLnByZXZQb3NpdGlvbi5sZWZ0JiYodC5sZWZ0PXRoaXMucG9zaXRpb24ubGVmdCtcInB4XCIpLHRoaXMuc2l6ZS53aWR0aCE9PXRoaXMucHJldlNpemUud2lkdGgmJih0LndpZHRoPXRoaXMuc2l6ZS53aWR0aCtcInB4XCIpLHRoaXMuc2l6ZS5oZWlnaHQhPT10aGlzLnByZXZTaXplLmhlaWdodCYmKHQuaGVpZ2h0PXRoaXMuc2l6ZS5oZWlnaHQrXCJweFwiKSx0aGlzLmhlbHBlci5jc3ModCksdH0sX3VwZGF0ZVZpcnR1YWxCb3VuZGFyaWVzOmZ1bmN0aW9uKHQpe3ZhciBlLGkscyxuLG8sYT10aGlzLm9wdGlvbnM7bz17bWluV2lkdGg6dGhpcy5faXNOdW1iZXIoYS5taW5XaWR0aCk/YS5taW5XaWR0aDowLG1heFdpZHRoOnRoaXMuX2lzTnVtYmVyKGEubWF4V2lkdGgpP2EubWF4V2lkdGg6MS8wLG1pbkhlaWdodDp0aGlzLl9pc051bWJlcihhLm1pbkhlaWdodCk/YS5taW5IZWlnaHQ6MCxtYXhIZWlnaHQ6dGhpcy5faXNOdW1iZXIoYS5tYXhIZWlnaHQpP2EubWF4SGVpZ2h0OjEvMH0sKHRoaXMuX2FzcGVjdFJhdGlvfHx0KSYmKGU9by5taW5IZWlnaHQqdGhpcy5hc3BlY3RSYXRpbyxzPW8ubWluV2lkdGgvdGhpcy5hc3BlY3RSYXRpbyxpPW8ubWF4SGVpZ2h0KnRoaXMuYXNwZWN0UmF0aW8sbj1vLm1heFdpZHRoL3RoaXMuYXNwZWN0UmF0aW8sZT5vLm1pbldpZHRoJiYoby5taW5XaWR0aD1lKSxzPm8ubWluSGVpZ2h0JiYoby5taW5IZWlnaHQ9cyksby5tYXhXaWR0aD5pJiYoby5tYXhXaWR0aD1pKSxvLm1heEhlaWdodD5uJiYoby5tYXhIZWlnaHQ9bikpLHRoaXMuX3ZCb3VuZGFyaWVzPW99LF91cGRhdGVDYWNoZTpmdW5jdGlvbih0KXt0aGlzLm9mZnNldD10aGlzLmhlbHBlci5vZmZzZXQoKSx0aGlzLl9pc051bWJlcih0LmxlZnQpJiYodGhpcy5wb3NpdGlvbi5sZWZ0PXQubGVmdCksdGhpcy5faXNOdW1iZXIodC50b3ApJiYodGhpcy5wb3NpdGlvbi50b3A9dC50b3ApLHRoaXMuX2lzTnVtYmVyKHQuaGVpZ2h0KSYmKHRoaXMuc2l6ZS5oZWlnaHQ9dC5oZWlnaHQpLHRoaXMuX2lzTnVtYmVyKHQud2lkdGgpJiYodGhpcy5zaXplLndpZHRoPXQud2lkdGgpfSxfdXBkYXRlUmF0aW86ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wb3NpdGlvbixpPXRoaXMuc2l6ZSxzPXRoaXMuYXhpcztyZXR1cm4gdGhpcy5faXNOdW1iZXIodC5oZWlnaHQpP3Qud2lkdGg9dC5oZWlnaHQqdGhpcy5hc3BlY3RSYXRpbzp0aGlzLl9pc051bWJlcih0LndpZHRoKSYmKHQuaGVpZ2h0PXQud2lkdGgvdGhpcy5hc3BlY3RSYXRpbyksXCJzd1wiPT09cyYmKHQubGVmdD1lLmxlZnQrKGkud2lkdGgtdC53aWR0aCksdC50b3A9bnVsbCksXCJud1wiPT09cyYmKHQudG9wPWUudG9wKyhpLmhlaWdodC10LmhlaWdodCksdC5sZWZ0PWUubGVmdCsoaS53aWR0aC10LndpZHRoKSksdH0sX3Jlc3BlY3RTaXplOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3ZCb3VuZGFyaWVzLGk9dGhpcy5heGlzLHM9dGhpcy5faXNOdW1iZXIodC53aWR0aCkmJmUubWF4V2lkdGgmJmUubWF4V2lkdGg8dC53aWR0aCxuPXRoaXMuX2lzTnVtYmVyKHQuaGVpZ2h0KSYmZS5tYXhIZWlnaHQmJmUubWF4SGVpZ2h0PHQuaGVpZ2h0LG89dGhpcy5faXNOdW1iZXIodC53aWR0aCkmJmUubWluV2lkdGgmJmUubWluV2lkdGg+dC53aWR0aCxhPXRoaXMuX2lzTnVtYmVyKHQuaGVpZ2h0KSYmZS5taW5IZWlnaHQmJmUubWluSGVpZ2h0PnQuaGVpZ2h0LHI9dGhpcy5vcmlnaW5hbFBvc2l0aW9uLmxlZnQrdGhpcy5vcmlnaW5hbFNpemUud2lkdGgsaD10aGlzLm9yaWdpbmFsUG9zaXRpb24udG9wK3RoaXMub3JpZ2luYWxTaXplLmhlaWdodCxsPS9zd3xud3x3Ly50ZXN0KGkpLHU9L253fG5lfG4vLnRlc3QoaSk7cmV0dXJuIG8mJih0LndpZHRoPWUubWluV2lkdGgpLGEmJih0LmhlaWdodD1lLm1pbkhlaWdodCkscyYmKHQud2lkdGg9ZS5tYXhXaWR0aCksbiYmKHQuaGVpZ2h0PWUubWF4SGVpZ2h0KSxvJiZsJiYodC5sZWZ0PXItZS5taW5XaWR0aCkscyYmbCYmKHQubGVmdD1yLWUubWF4V2lkdGgpLGEmJnUmJih0LnRvcD1oLWUubWluSGVpZ2h0KSxuJiZ1JiYodC50b3A9aC1lLm1heEhlaWdodCksdC53aWR0aHx8dC5oZWlnaHR8fHQubGVmdHx8IXQudG9wP3Qud2lkdGh8fHQuaGVpZ2h0fHx0LnRvcHx8IXQubGVmdHx8KHQubGVmdD1udWxsKTp0LnRvcD1udWxsLHR9LF9nZXRQYWRkaW5nUGx1c0JvcmRlckRpbWVuc2lvbnM6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTAsaT1bXSxzPVt0LmNzcyhcImJvcmRlclRvcFdpZHRoXCIpLHQuY3NzKFwiYm9yZGVyUmlnaHRXaWR0aFwiKSx0LmNzcyhcImJvcmRlckJvdHRvbVdpZHRoXCIpLHQuY3NzKFwiYm9yZGVyTGVmdFdpZHRoXCIpXSxuPVt0LmNzcyhcInBhZGRpbmdUb3BcIiksdC5jc3MoXCJwYWRkaW5nUmlnaHRcIiksdC5jc3MoXCJwYWRkaW5nQm90dG9tXCIpLHQuY3NzKFwicGFkZGluZ0xlZnRcIildOzQ+ZTtlKyspaVtlXT1wYXJzZUZsb2F0KHNbZV0pfHwwLGlbZV0rPXBhcnNlRmxvYXQobltlXSl8fDA7cmV0dXJue2hlaWdodDppWzBdK2lbMl0sd2lkdGg6aVsxXStpWzNdfX0sX3Byb3BvcnRpb25hbGx5UmVzaXplOmZ1bmN0aW9uKCl7aWYodGhpcy5fcHJvcG9ydGlvbmFsbHlSZXNpemVFbGVtZW50cy5sZW5ndGgpZm9yKHZhciB0LGU9MCxpPXRoaXMuaGVscGVyfHx0aGlzLmVsZW1lbnQ7dGhpcy5fcHJvcG9ydGlvbmFsbHlSZXNpemVFbGVtZW50cy5sZW5ndGg+ZTtlKyspdD10aGlzLl9wcm9wb3J0aW9uYWxseVJlc2l6ZUVsZW1lbnRzW2VdLHRoaXMub3V0ZXJEaW1lbnNpb25zfHwodGhpcy5vdXRlckRpbWVuc2lvbnM9dGhpcy5fZ2V0UGFkZGluZ1BsdXNCb3JkZXJEaW1lbnNpb25zKHQpKSx0LmNzcyh7aGVpZ2h0OmkuaGVpZ2h0KCktdGhpcy5vdXRlckRpbWVuc2lvbnMuaGVpZ2h0fHwwLHdpZHRoOmkud2lkdGgoKS10aGlzLm91dGVyRGltZW5zaW9ucy53aWR0aHx8MH0pfSxfcmVuZGVyUHJveHk6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmVsZW1lbnQsaT10aGlzLm9wdGlvbnM7dGhpcy5lbGVtZW50T2Zmc2V0PWUub2Zmc2V0KCksdGhpcy5faGVscGVyPyh0aGlzLmhlbHBlcj10aGlzLmhlbHBlcnx8dChcIjxkaXYgc3R5bGU9J292ZXJmbG93OmhpZGRlbjsnPjwvZGl2PlwiKSx0aGlzLl9hZGRDbGFzcyh0aGlzLmhlbHBlcix0aGlzLl9oZWxwZXIpLHRoaXMuaGVscGVyLmNzcyh7d2lkdGg6dGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KCkscG9zaXRpb246XCJhYnNvbHV0ZVwiLGxlZnQ6dGhpcy5lbGVtZW50T2Zmc2V0LmxlZnQrXCJweFwiLHRvcDp0aGlzLmVsZW1lbnRPZmZzZXQudG9wK1wicHhcIix6SW5kZXg6KytpLnpJbmRleH0pLHRoaXMuaGVscGVyLmFwcGVuZFRvKFwiYm9keVwiKS5kaXNhYmxlU2VsZWN0aW9uKCkpOnRoaXMuaGVscGVyPXRoaXMuZWxlbWVudH0sX2NoYW5nZTp7ZTpmdW5jdGlvbih0LGUpe3JldHVybnt3aWR0aDp0aGlzLm9yaWdpbmFsU2l6ZS53aWR0aCtlfX0sdzpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMub3JpZ2luYWxTaXplLHM9dGhpcy5vcmlnaW5hbFBvc2l0aW9uO3JldHVybntsZWZ0OnMubGVmdCtlLHdpZHRoOmkud2lkdGgtZX19LG46ZnVuY3Rpb24odCxlLGkpe3ZhciBzPXRoaXMub3JpZ2luYWxTaXplLG49dGhpcy5vcmlnaW5hbFBvc2l0aW9uO3JldHVybnt0b3A6bi50b3AraSxoZWlnaHQ6cy5oZWlnaHQtaX19LHM6ZnVuY3Rpb24odCxlLGkpe3JldHVybntoZWlnaHQ6dGhpcy5vcmlnaW5hbFNpemUuaGVpZ2h0K2l9fSxzZTpmdW5jdGlvbihlLGkscyl7cmV0dXJuIHQuZXh0ZW5kKHRoaXMuX2NoYW5nZS5zLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9jaGFuZ2UuZS5hcHBseSh0aGlzLFtlLGksc10pKX0sc3c6ZnVuY3Rpb24oZSxpLHMpe3JldHVybiB0LmV4dGVuZCh0aGlzLl9jaGFuZ2Uucy5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5fY2hhbmdlLncuYXBwbHkodGhpcyxbZSxpLHNdKSl9LG5lOmZ1bmN0aW9uKGUsaSxzKXtyZXR1cm4gdC5leHRlbmQodGhpcy5fY2hhbmdlLm4uYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX2NoYW5nZS5lLmFwcGx5KHRoaXMsW2UsaSxzXSkpfSxudzpmdW5jdGlvbihlLGkscyl7cmV0dXJuIHQuZXh0ZW5kKHRoaXMuX2NoYW5nZS5uLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9jaGFuZ2Uudy5hcHBseSh0aGlzLFtlLGksc10pKX19LF9wcm9wYWdhdGU6ZnVuY3Rpb24oZSxpKXt0LnVpLnBsdWdpbi5jYWxsKHRoaXMsZSxbaSx0aGlzLnVpKCldKSxcInJlc2l6ZVwiIT09ZSYmdGhpcy5fdHJpZ2dlcihlLGksdGhpcy51aSgpKX0scGx1Z2luczp7fSx1aTpmdW5jdGlvbigpe3JldHVybntvcmlnaW5hbEVsZW1lbnQ6dGhpcy5vcmlnaW5hbEVsZW1lbnQsZWxlbWVudDp0aGlzLmVsZW1lbnQsaGVscGVyOnRoaXMuaGVscGVyLHBvc2l0aW9uOnRoaXMucG9zaXRpb24sc2l6ZTp0aGlzLnNpemUsb3JpZ2luYWxTaXplOnRoaXMub3JpZ2luYWxTaXplLG9yaWdpbmFsUG9zaXRpb246dGhpcy5vcmlnaW5hbFBvc2l0aW9ufX19KSx0LnVpLnBsdWdpbi5hZGQoXCJyZXNpemFibGVcIixcImFuaW1hdGVcIix7c3RvcDpmdW5jdGlvbihlKXt2YXIgaT10KHRoaXMpLnJlc2l6YWJsZShcImluc3RhbmNlXCIpLHM9aS5vcHRpb25zLG49aS5fcHJvcG9ydGlvbmFsbHlSZXNpemVFbGVtZW50cyxvPW4ubGVuZ3RoJiYvdGV4dGFyZWEvaS50ZXN0KG5bMF0ubm9kZU5hbWUpLGE9byYmaS5faGFzU2Nyb2xsKG5bMF0sXCJsZWZ0XCIpPzA6aS5zaXplRGlmZi5oZWlnaHQscj1vPzA6aS5zaXplRGlmZi53aWR0aCxoPXt3aWR0aDppLnNpemUud2lkdGgtcixoZWlnaHQ6aS5zaXplLmhlaWdodC1hfSxsPXBhcnNlRmxvYXQoaS5lbGVtZW50LmNzcyhcImxlZnRcIikpKyhpLnBvc2l0aW9uLmxlZnQtaS5vcmlnaW5hbFBvc2l0aW9uLmxlZnQpfHxudWxsLHU9cGFyc2VGbG9hdChpLmVsZW1lbnQuY3NzKFwidG9wXCIpKSsoaS5wb3NpdGlvbi50b3AtaS5vcmlnaW5hbFBvc2l0aW9uLnRvcCl8fG51bGw7aS5lbGVtZW50LmFuaW1hdGUodC5leHRlbmQoaCx1JiZsP3t0b3A6dSxsZWZ0Omx9Ont9KSx7ZHVyYXRpb246cy5hbmltYXRlRHVyYXRpb24sZWFzaW5nOnMuYW5pbWF0ZUVhc2luZyxzdGVwOmZ1bmN0aW9uKCl7dmFyIHM9e3dpZHRoOnBhcnNlRmxvYXQoaS5lbGVtZW50LmNzcyhcIndpZHRoXCIpKSxoZWlnaHQ6cGFyc2VGbG9hdChpLmVsZW1lbnQuY3NzKFwiaGVpZ2h0XCIpKSx0b3A6cGFyc2VGbG9hdChpLmVsZW1lbnQuY3NzKFwidG9wXCIpKSxsZWZ0OnBhcnNlRmxvYXQoaS5lbGVtZW50LmNzcyhcImxlZnRcIikpfTtuJiZuLmxlbmd0aCYmdChuWzBdKS5jc3Moe3dpZHRoOnMud2lkdGgsaGVpZ2h0OnMuaGVpZ2h0fSksaS5fdXBkYXRlQ2FjaGUocyksaS5fcHJvcGFnYXRlKFwicmVzaXplXCIsZSl9fSl9fSksdC51aS5wbHVnaW4uYWRkKFwicmVzaXphYmxlXCIsXCJjb250YWlubWVudFwiLHtzdGFydDpmdW5jdGlvbigpe3ZhciBlLGkscyxuLG8sYSxyLGg9dCh0aGlzKS5yZXNpemFibGUoXCJpbnN0YW5jZVwiKSxsPWgub3B0aW9ucyx1PWguZWxlbWVudCxjPWwuY29udGFpbm1lbnQsZD1jIGluc3RhbmNlb2YgdD9jLmdldCgwKTovcGFyZW50Ly50ZXN0KGMpP3UucGFyZW50KCkuZ2V0KDApOmM7ZCYmKGguY29udGFpbmVyRWxlbWVudD10KGQpLC9kb2N1bWVudC8udGVzdChjKXx8Yz09PWRvY3VtZW50PyhoLmNvbnRhaW5lck9mZnNldD17bGVmdDowLHRvcDowfSxoLmNvbnRhaW5lclBvc2l0aW9uPXtsZWZ0OjAsdG9wOjB9LGgucGFyZW50RGF0YT17ZWxlbWVudDp0KGRvY3VtZW50KSxsZWZ0OjAsdG9wOjAsd2lkdGg6dChkb2N1bWVudCkud2lkdGgoKSxoZWlnaHQ6dChkb2N1bWVudCkuaGVpZ2h0KCl8fGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZS5zY3JvbGxIZWlnaHR9KTooZT10KGQpLGk9W10sdChbXCJUb3BcIixcIlJpZ2h0XCIsXCJMZWZ0XCIsXCJCb3R0b21cIl0pLmVhY2goZnVuY3Rpb24odCxzKXtpW3RdPWguX251bShlLmNzcyhcInBhZGRpbmdcIitzKSl9KSxoLmNvbnRhaW5lck9mZnNldD1lLm9mZnNldCgpLGguY29udGFpbmVyUG9zaXRpb249ZS5wb3NpdGlvbigpLGguY29udGFpbmVyU2l6ZT17aGVpZ2h0OmUuaW5uZXJIZWlnaHQoKS1pWzNdLHdpZHRoOmUuaW5uZXJXaWR0aCgpLWlbMV19LHM9aC5jb250YWluZXJPZmZzZXQsbj1oLmNvbnRhaW5lclNpemUuaGVpZ2h0LG89aC5jb250YWluZXJTaXplLndpZHRoLGE9aC5faGFzU2Nyb2xsKGQsXCJsZWZ0XCIpP2Quc2Nyb2xsV2lkdGg6byxyPWguX2hhc1Njcm9sbChkKT9kLnNjcm9sbEhlaWdodDpuLGgucGFyZW50RGF0YT17ZWxlbWVudDpkLGxlZnQ6cy5sZWZ0LHRvcDpzLnRvcCx3aWR0aDphLGhlaWdodDpyfSkpfSxyZXNpemU6ZnVuY3Rpb24oZSl7dmFyIGkscyxuLG8sYT10KHRoaXMpLnJlc2l6YWJsZShcImluc3RhbmNlXCIpLHI9YS5vcHRpb25zLGg9YS5jb250YWluZXJPZmZzZXQsbD1hLnBvc2l0aW9uLHU9YS5fYXNwZWN0UmF0aW98fGUuc2hpZnRLZXksYz17dG9wOjAsbGVmdDowfSxkPWEuY29udGFpbmVyRWxlbWVudCxwPSEwO2RbMF0hPT1kb2N1bWVudCYmL3N0YXRpYy8udGVzdChkLmNzcyhcInBvc2l0aW9uXCIpKSYmKGM9aCksbC5sZWZ0PChhLl9oZWxwZXI/aC5sZWZ0OjApJiYoYS5zaXplLndpZHRoPWEuc2l6ZS53aWR0aCsoYS5faGVscGVyP2EucG9zaXRpb24ubGVmdC1oLmxlZnQ6YS5wb3NpdGlvbi5sZWZ0LWMubGVmdCksdSYmKGEuc2l6ZS5oZWlnaHQ9YS5zaXplLndpZHRoL2EuYXNwZWN0UmF0aW8scD0hMSksYS5wb3NpdGlvbi5sZWZ0PXIuaGVscGVyP2gubGVmdDowKSxsLnRvcDwoYS5faGVscGVyP2gudG9wOjApJiYoYS5zaXplLmhlaWdodD1hLnNpemUuaGVpZ2h0KyhhLl9oZWxwZXI/YS5wb3NpdGlvbi50b3AtaC50b3A6YS5wb3NpdGlvbi50b3ApLHUmJihhLnNpemUud2lkdGg9YS5zaXplLmhlaWdodCphLmFzcGVjdFJhdGlvLHA9ITEpLGEucG9zaXRpb24udG9wPWEuX2hlbHBlcj9oLnRvcDowKSxuPWEuY29udGFpbmVyRWxlbWVudC5nZXQoMCk9PT1hLmVsZW1lbnQucGFyZW50KCkuZ2V0KDApLG89L3JlbGF0aXZlfGFic29sdXRlLy50ZXN0KGEuY29udGFpbmVyRWxlbWVudC5jc3MoXCJwb3NpdGlvblwiKSksbiYmbz8oYS5vZmZzZXQubGVmdD1hLnBhcmVudERhdGEubGVmdCthLnBvc2l0aW9uLmxlZnQsYS5vZmZzZXQudG9wPWEucGFyZW50RGF0YS50b3ArYS5wb3NpdGlvbi50b3ApOihhLm9mZnNldC5sZWZ0PWEuZWxlbWVudC5vZmZzZXQoKS5sZWZ0LGEub2Zmc2V0LnRvcD1hLmVsZW1lbnQub2Zmc2V0KCkudG9wKSxpPU1hdGguYWJzKGEuc2l6ZURpZmYud2lkdGgrKGEuX2hlbHBlcj9hLm9mZnNldC5sZWZ0LWMubGVmdDphLm9mZnNldC5sZWZ0LWgubGVmdCkpLHM9TWF0aC5hYnMoYS5zaXplRGlmZi5oZWlnaHQrKGEuX2hlbHBlcj9hLm9mZnNldC50b3AtYy50b3A6YS5vZmZzZXQudG9wLWgudG9wKSksaSthLnNpemUud2lkdGg+PWEucGFyZW50RGF0YS53aWR0aCYmKGEuc2l6ZS53aWR0aD1hLnBhcmVudERhdGEud2lkdGgtaSx1JiYoYS5zaXplLmhlaWdodD1hLnNpemUud2lkdGgvYS5hc3BlY3RSYXRpbyxwPSExKSkscythLnNpemUuaGVpZ2h0Pj1hLnBhcmVudERhdGEuaGVpZ2h0JiYoYS5zaXplLmhlaWdodD1hLnBhcmVudERhdGEuaGVpZ2h0LXMsdSYmKGEuc2l6ZS53aWR0aD1hLnNpemUuaGVpZ2h0KmEuYXNwZWN0UmF0aW8scD0hMSkpLHB8fChhLnBvc2l0aW9uLmxlZnQ9YS5wcmV2UG9zaXRpb24ubGVmdCxhLnBvc2l0aW9uLnRvcD1hLnByZXZQb3NpdGlvbi50b3AsYS5zaXplLndpZHRoPWEucHJldlNpemUud2lkdGgsYS5zaXplLmhlaWdodD1hLnByZXZTaXplLmhlaWdodCl9LHN0b3A6ZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpLnJlc2l6YWJsZShcImluc3RhbmNlXCIpLGk9ZS5vcHRpb25zLHM9ZS5jb250YWluZXJPZmZzZXQsbj1lLmNvbnRhaW5lclBvc2l0aW9uLG89ZS5jb250YWluZXJFbGVtZW50LGE9dChlLmhlbHBlcikscj1hLm9mZnNldCgpLGg9YS5vdXRlcldpZHRoKCktZS5zaXplRGlmZi53aWR0aCxsPWEub3V0ZXJIZWlnaHQoKS1lLnNpemVEaWZmLmhlaWdodDtlLl9oZWxwZXImJiFpLmFuaW1hdGUmJi9yZWxhdGl2ZS8udGVzdChvLmNzcyhcInBvc2l0aW9uXCIpKSYmdCh0aGlzKS5jc3Moe2xlZnQ6ci5sZWZ0LW4ubGVmdC1zLmxlZnQsd2lkdGg6aCxoZWlnaHQ6bH0pLGUuX2hlbHBlciYmIWkuYW5pbWF0ZSYmL3N0YXRpYy8udGVzdChvLmNzcyhcInBvc2l0aW9uXCIpKSYmdCh0aGlzKS5jc3Moe2xlZnQ6ci5sZWZ0LW4ubGVmdC1zLmxlZnQsd2lkdGg6aCxoZWlnaHQ6bH0pfX0pLHQudWkucGx1Z2luLmFkZChcInJlc2l6YWJsZVwiLFwiYWxzb1Jlc2l6ZVwiLHtzdGFydDpmdW5jdGlvbigpe3ZhciBlPXQodGhpcykucmVzaXphYmxlKFwiaW5zdGFuY2VcIiksaT1lLm9wdGlvbnM7dChpLmFsc29SZXNpemUpLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpO2UuZGF0YShcInVpLXJlc2l6YWJsZS1hbHNvcmVzaXplXCIse3dpZHRoOnBhcnNlRmxvYXQoZS53aWR0aCgpKSxoZWlnaHQ6cGFyc2VGbG9hdChlLmhlaWdodCgpKSxsZWZ0OnBhcnNlRmxvYXQoZS5jc3MoXCJsZWZ0XCIpKSx0b3A6cGFyc2VGbG9hdChlLmNzcyhcInRvcFwiKSl9KX0pfSxyZXNpemU6ZnVuY3Rpb24oZSxpKXt2YXIgcz10KHRoaXMpLnJlc2l6YWJsZShcImluc3RhbmNlXCIpLG49cy5vcHRpb25zLG89cy5vcmlnaW5hbFNpemUsYT1zLm9yaWdpbmFsUG9zaXRpb24scj17aGVpZ2h0OnMuc2l6ZS5oZWlnaHQtby5oZWlnaHR8fDAsd2lkdGg6cy5zaXplLndpZHRoLW8ud2lkdGh8fDAsdG9wOnMucG9zaXRpb24udG9wLWEudG9wfHwwLGxlZnQ6cy5wb3NpdGlvbi5sZWZ0LWEubGVmdHx8MH07XG50KG4uYWxzb1Jlc2l6ZSkuZWFjaChmdW5jdGlvbigpe3ZhciBlPXQodGhpcykscz10KHRoaXMpLmRhdGEoXCJ1aS1yZXNpemFibGUtYWxzb3Jlc2l6ZVwiKSxuPXt9LG89ZS5wYXJlbnRzKGkub3JpZ2luYWxFbGVtZW50WzBdKS5sZW5ndGg/W1wid2lkdGhcIixcImhlaWdodFwiXTpbXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJ0b3BcIixcImxlZnRcIl07dC5lYWNoKG8sZnVuY3Rpb24odCxlKXt2YXIgaT0oc1tlXXx8MCkrKHJbZV18fDApO2kmJmk+PTAmJihuW2VdPWl8fG51bGwpfSksZS5jc3Mobil9KX0sc3RvcDpmdW5jdGlvbigpe3QodGhpcykucmVtb3ZlRGF0YShcInVpLXJlc2l6YWJsZS1hbHNvcmVzaXplXCIpfX0pLHQudWkucGx1Z2luLmFkZChcInJlc2l6YWJsZVwiLFwiZ2hvc3RcIix7c3RhcnQ6ZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpLnJlc2l6YWJsZShcImluc3RhbmNlXCIpLGk9ZS5zaXplO2UuZ2hvc3Q9ZS5vcmlnaW5hbEVsZW1lbnQuY2xvbmUoKSxlLmdob3N0LmNzcyh7b3BhY2l0eTouMjUsZGlzcGxheTpcImJsb2NrXCIscG9zaXRpb246XCJyZWxhdGl2ZVwiLGhlaWdodDppLmhlaWdodCx3aWR0aDppLndpZHRoLG1hcmdpbjowLGxlZnQ6MCx0b3A6MH0pLGUuX2FkZENsYXNzKGUuZ2hvc3QsXCJ1aS1yZXNpemFibGUtZ2hvc3RcIiksdC51aUJhY2tDb21wYXQhPT0hMSYmXCJzdHJpbmdcIj09dHlwZW9mIGUub3B0aW9ucy5naG9zdCYmZS5naG9zdC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZ2hvc3QpLGUuZ2hvc3QuYXBwZW5kVG8oZS5oZWxwZXIpfSxyZXNpemU6ZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpLnJlc2l6YWJsZShcImluc3RhbmNlXCIpO2UuZ2hvc3QmJmUuZ2hvc3QuY3NzKHtwb3NpdGlvbjpcInJlbGF0aXZlXCIsaGVpZ2h0OmUuc2l6ZS5oZWlnaHQsd2lkdGg6ZS5zaXplLndpZHRofSl9LHN0b3A6ZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpLnJlc2l6YWJsZShcImluc3RhbmNlXCIpO2UuZ2hvc3QmJmUuaGVscGVyJiZlLmhlbHBlci5nZXQoMCkucmVtb3ZlQ2hpbGQoZS5naG9zdC5nZXQoMCkpfX0pLHQudWkucGx1Z2luLmFkZChcInJlc2l6YWJsZVwiLFwiZ3JpZFwiLHtyZXNpemU6ZnVuY3Rpb24oKXt2YXIgZSxpPXQodGhpcykucmVzaXphYmxlKFwiaW5zdGFuY2VcIikscz1pLm9wdGlvbnMsbj1pLnNpemUsbz1pLm9yaWdpbmFsU2l6ZSxhPWkub3JpZ2luYWxQb3NpdGlvbixyPWkuYXhpcyxoPVwibnVtYmVyXCI9PXR5cGVvZiBzLmdyaWQ/W3MuZ3JpZCxzLmdyaWRdOnMuZ3JpZCxsPWhbMF18fDEsdT1oWzFdfHwxLGM9TWF0aC5yb3VuZCgobi53aWR0aC1vLndpZHRoKS9sKSpsLGQ9TWF0aC5yb3VuZCgobi5oZWlnaHQtby5oZWlnaHQpL3UpKnUscD1vLndpZHRoK2MsZj1vLmhlaWdodCtkLG09cy5tYXhXaWR0aCYmcD5zLm1heFdpZHRoLGc9cy5tYXhIZWlnaHQmJmY+cy5tYXhIZWlnaHQsXz1zLm1pbldpZHRoJiZzLm1pbldpZHRoPnAsdj1zLm1pbkhlaWdodCYmcy5taW5IZWlnaHQ+ZjtzLmdyaWQ9aCxfJiYocCs9bCksdiYmKGYrPXUpLG0mJihwLT1sKSxnJiYoZi09dSksL14oc2V8c3xlKSQvLnRlc3Qocik/KGkuc2l6ZS53aWR0aD1wLGkuc2l6ZS5oZWlnaHQ9Zik6L14obmUpJC8udGVzdChyKT8oaS5zaXplLndpZHRoPXAsaS5zaXplLmhlaWdodD1mLGkucG9zaXRpb24udG9wPWEudG9wLWQpOi9eKHN3KSQvLnRlc3Qocik/KGkuc2l6ZS53aWR0aD1wLGkuc2l6ZS5oZWlnaHQ9ZixpLnBvc2l0aW9uLmxlZnQ9YS5sZWZ0LWMpOigoMD49Zi11fHwwPj1wLWwpJiYoZT1pLl9nZXRQYWRkaW5nUGx1c0JvcmRlckRpbWVuc2lvbnModGhpcykpLGYtdT4wPyhpLnNpemUuaGVpZ2h0PWYsaS5wb3NpdGlvbi50b3A9YS50b3AtZCk6KGY9dS1lLmhlaWdodCxpLnNpemUuaGVpZ2h0PWYsaS5wb3NpdGlvbi50b3A9YS50b3Arby5oZWlnaHQtZikscC1sPjA/KGkuc2l6ZS53aWR0aD1wLGkucG9zaXRpb24ubGVmdD1hLmxlZnQtYyk6KHA9bC1lLndpZHRoLGkuc2l6ZS53aWR0aD1wLGkucG9zaXRpb24ubGVmdD1hLmxlZnQrby53aWR0aC1wKSl9fSksdC51aS5yZXNpemFibGUsdC53aWRnZXQoXCJ1aS5zZWxlY3RhYmxlXCIsdC51aS5tb3VzZSx7dmVyc2lvbjpcIjEuMTIuMVwiLG9wdGlvbnM6e2FwcGVuZFRvOlwiYm9keVwiLGF1dG9SZWZyZXNoOiEwLGRpc3RhbmNlOjAsZmlsdGVyOlwiKlwiLHRvbGVyYW5jZTpcInRvdWNoXCIsc2VsZWN0ZWQ6bnVsbCxzZWxlY3Rpbmc6bnVsbCxzdGFydDpudWxsLHN0b3A6bnVsbCx1bnNlbGVjdGVkOm51bGwsdW5zZWxlY3Rpbmc6bnVsbH0sX2NyZWF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5fYWRkQ2xhc3MoXCJ1aS1zZWxlY3RhYmxlXCIpLHRoaXMuZHJhZ2dlZD0hMSx0aGlzLnJlZnJlc2g9ZnVuY3Rpb24oKXtlLmVsZW1lbnRQb3M9dChlLmVsZW1lbnRbMF0pLm9mZnNldCgpLGUuc2VsZWN0ZWVzPXQoZS5vcHRpb25zLmZpbHRlcixlLmVsZW1lbnRbMF0pLGUuX2FkZENsYXNzKGUuc2VsZWN0ZWVzLFwidWktc2VsZWN0ZWVcIiksZS5zZWxlY3RlZXMuZWFjaChmdW5jdGlvbigpe3ZhciBpPXQodGhpcykscz1pLm9mZnNldCgpLG49e2xlZnQ6cy5sZWZ0LWUuZWxlbWVudFBvcy5sZWZ0LHRvcDpzLnRvcC1lLmVsZW1lbnRQb3MudG9wfTt0LmRhdGEodGhpcyxcInNlbGVjdGFibGUtaXRlbVwiLHtlbGVtZW50OnRoaXMsJGVsZW1lbnQ6aSxsZWZ0Om4ubGVmdCx0b3A6bi50b3AscmlnaHQ6bi5sZWZ0K2kub3V0ZXJXaWR0aCgpLGJvdHRvbTpuLnRvcCtpLm91dGVySGVpZ2h0KCksc3RhcnRzZWxlY3RlZDohMSxzZWxlY3RlZDppLmhhc0NsYXNzKFwidWktc2VsZWN0ZWRcIiksc2VsZWN0aW5nOmkuaGFzQ2xhc3MoXCJ1aS1zZWxlY3RpbmdcIiksdW5zZWxlY3Rpbmc6aS5oYXNDbGFzcyhcInVpLXVuc2VsZWN0aW5nXCIpfSl9KX0sdGhpcy5yZWZyZXNoKCksdGhpcy5fbW91c2VJbml0KCksdGhpcy5oZWxwZXI9dChcIjxkaXY+XCIpLHRoaXMuX2FkZENsYXNzKHRoaXMuaGVscGVyLFwidWktc2VsZWN0YWJsZS1oZWxwZXJcIil9LF9kZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5zZWxlY3RlZXMucmVtb3ZlRGF0YShcInNlbGVjdGFibGUtaXRlbVwiKSx0aGlzLl9tb3VzZURlc3Ryb3koKX0sX21vdXNlU3RhcnQ6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcyxzPXRoaXMub3B0aW9uczt0aGlzLm9wb3M9W2UucGFnZVgsZS5wYWdlWV0sdGhpcy5lbGVtZW50UG9zPXQodGhpcy5lbGVtZW50WzBdKS5vZmZzZXQoKSx0aGlzLm9wdGlvbnMuZGlzYWJsZWR8fCh0aGlzLnNlbGVjdGVlcz10KHMuZmlsdGVyLHRoaXMuZWxlbWVudFswXSksdGhpcy5fdHJpZ2dlcihcInN0YXJ0XCIsZSksdChzLmFwcGVuZFRvKS5hcHBlbmQodGhpcy5oZWxwZXIpLHRoaXMuaGVscGVyLmNzcyh7bGVmdDplLnBhZ2VYLHRvcDplLnBhZ2VZLHdpZHRoOjAsaGVpZ2h0OjB9KSxzLmF1dG9SZWZyZXNoJiZ0aGlzLnJlZnJlc2goKSx0aGlzLnNlbGVjdGVlcy5maWx0ZXIoXCIudWktc2VsZWN0ZWRcIikuZWFjaChmdW5jdGlvbigpe3ZhciBzPXQuZGF0YSh0aGlzLFwic2VsZWN0YWJsZS1pdGVtXCIpO3Muc3RhcnRzZWxlY3RlZD0hMCxlLm1ldGFLZXl8fGUuY3RybEtleXx8KGkuX3JlbW92ZUNsYXNzKHMuJGVsZW1lbnQsXCJ1aS1zZWxlY3RlZFwiKSxzLnNlbGVjdGVkPSExLGkuX2FkZENsYXNzKHMuJGVsZW1lbnQsXCJ1aS11bnNlbGVjdGluZ1wiKSxzLnVuc2VsZWN0aW5nPSEwLGkuX3RyaWdnZXIoXCJ1bnNlbGVjdGluZ1wiLGUse3Vuc2VsZWN0aW5nOnMuZWxlbWVudH0pKX0pLHQoZS50YXJnZXQpLnBhcmVudHMoKS5hZGRCYWNrKCkuZWFjaChmdW5jdGlvbigpe3ZhciBzLG49dC5kYXRhKHRoaXMsXCJzZWxlY3RhYmxlLWl0ZW1cIik7cmV0dXJuIG4/KHM9IWUubWV0YUtleSYmIWUuY3RybEtleXx8IW4uJGVsZW1lbnQuaGFzQ2xhc3MoXCJ1aS1zZWxlY3RlZFwiKSxpLl9yZW1vdmVDbGFzcyhuLiRlbGVtZW50LHM/XCJ1aS11bnNlbGVjdGluZ1wiOlwidWktc2VsZWN0ZWRcIikuX2FkZENsYXNzKG4uJGVsZW1lbnQscz9cInVpLXNlbGVjdGluZ1wiOlwidWktdW5zZWxlY3RpbmdcIiksbi51bnNlbGVjdGluZz0hcyxuLnNlbGVjdGluZz1zLG4uc2VsZWN0ZWQ9cyxzP2kuX3RyaWdnZXIoXCJzZWxlY3RpbmdcIixlLHtzZWxlY3Rpbmc6bi5lbGVtZW50fSk6aS5fdHJpZ2dlcihcInVuc2VsZWN0aW5nXCIsZSx7dW5zZWxlY3Rpbmc6bi5lbGVtZW50fSksITEpOnZvaWQgMH0pKX0sX21vdXNlRHJhZzpmdW5jdGlvbihlKXtpZih0aGlzLmRyYWdnZWQ9ITAsIXRoaXMub3B0aW9ucy5kaXNhYmxlZCl7dmFyIGkscz10aGlzLG49dGhpcy5vcHRpb25zLG89dGhpcy5vcG9zWzBdLGE9dGhpcy5vcG9zWzFdLHI9ZS5wYWdlWCxoPWUucGFnZVk7cmV0dXJuIG8+ciYmKGk9cixyPW8sbz1pKSxhPmgmJihpPWgsaD1hLGE9aSksdGhpcy5oZWxwZXIuY3NzKHtsZWZ0Om8sdG9wOmEsd2lkdGg6ci1vLGhlaWdodDpoLWF9KSx0aGlzLnNlbGVjdGVlcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9dC5kYXRhKHRoaXMsXCJzZWxlY3RhYmxlLWl0ZW1cIiksbD0hMSx1PXt9O2kmJmkuZWxlbWVudCE9PXMuZWxlbWVudFswXSYmKHUubGVmdD1pLmxlZnQrcy5lbGVtZW50UG9zLmxlZnQsdS5yaWdodD1pLnJpZ2h0K3MuZWxlbWVudFBvcy5sZWZ0LHUudG9wPWkudG9wK3MuZWxlbWVudFBvcy50b3AsdS5ib3R0b209aS5ib3R0b20rcy5lbGVtZW50UG9zLnRvcCxcInRvdWNoXCI9PT1uLnRvbGVyYW5jZT9sPSEodS5sZWZ0PnJ8fG8+dS5yaWdodHx8dS50b3A+aHx8YT51LmJvdHRvbSk6XCJmaXRcIj09PW4udG9sZXJhbmNlJiYobD11LmxlZnQ+byYmcj51LnJpZ2h0JiZ1LnRvcD5hJiZoPnUuYm90dG9tKSxsPyhpLnNlbGVjdGVkJiYocy5fcmVtb3ZlQ2xhc3MoaS4kZWxlbWVudCxcInVpLXNlbGVjdGVkXCIpLGkuc2VsZWN0ZWQ9ITEpLGkudW5zZWxlY3RpbmcmJihzLl9yZW1vdmVDbGFzcyhpLiRlbGVtZW50LFwidWktdW5zZWxlY3RpbmdcIiksaS51bnNlbGVjdGluZz0hMSksaS5zZWxlY3Rpbmd8fChzLl9hZGRDbGFzcyhpLiRlbGVtZW50LFwidWktc2VsZWN0aW5nXCIpLGkuc2VsZWN0aW5nPSEwLHMuX3RyaWdnZXIoXCJzZWxlY3RpbmdcIixlLHtzZWxlY3Rpbmc6aS5lbGVtZW50fSkpKTooaS5zZWxlY3RpbmcmJigoZS5tZXRhS2V5fHxlLmN0cmxLZXkpJiZpLnN0YXJ0c2VsZWN0ZWQ/KHMuX3JlbW92ZUNsYXNzKGkuJGVsZW1lbnQsXCJ1aS1zZWxlY3RpbmdcIiksaS5zZWxlY3Rpbmc9ITEscy5fYWRkQ2xhc3MoaS4kZWxlbWVudCxcInVpLXNlbGVjdGVkXCIpLGkuc2VsZWN0ZWQ9ITApOihzLl9yZW1vdmVDbGFzcyhpLiRlbGVtZW50LFwidWktc2VsZWN0aW5nXCIpLGkuc2VsZWN0aW5nPSExLGkuc3RhcnRzZWxlY3RlZCYmKHMuX2FkZENsYXNzKGkuJGVsZW1lbnQsXCJ1aS11bnNlbGVjdGluZ1wiKSxpLnVuc2VsZWN0aW5nPSEwKSxzLl90cmlnZ2VyKFwidW5zZWxlY3RpbmdcIixlLHt1bnNlbGVjdGluZzppLmVsZW1lbnR9KSkpLGkuc2VsZWN0ZWQmJihlLm1ldGFLZXl8fGUuY3RybEtleXx8aS5zdGFydHNlbGVjdGVkfHwocy5fcmVtb3ZlQ2xhc3MoaS4kZWxlbWVudCxcInVpLXNlbGVjdGVkXCIpLGkuc2VsZWN0ZWQ9ITEscy5fYWRkQ2xhc3MoaS4kZWxlbWVudCxcInVpLXVuc2VsZWN0aW5nXCIpLGkudW5zZWxlY3Rpbmc9ITAscy5fdHJpZ2dlcihcInVuc2VsZWN0aW5nXCIsZSx7dW5zZWxlY3Rpbmc6aS5lbGVtZW50fSkpKSkpfSksITF9fSxfbW91c2VTdG9wOmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXM7cmV0dXJuIHRoaXMuZHJhZ2dlZD0hMSx0KFwiLnVpLXVuc2VsZWN0aW5nXCIsdGhpcy5lbGVtZW50WzBdKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIHM9dC5kYXRhKHRoaXMsXCJzZWxlY3RhYmxlLWl0ZW1cIik7aS5fcmVtb3ZlQ2xhc3Mocy4kZWxlbWVudCxcInVpLXVuc2VsZWN0aW5nXCIpLHMudW5zZWxlY3Rpbmc9ITEscy5zdGFydHNlbGVjdGVkPSExLGkuX3RyaWdnZXIoXCJ1bnNlbGVjdGVkXCIsZSx7dW5zZWxlY3RlZDpzLmVsZW1lbnR9KX0pLHQoXCIudWktc2VsZWN0aW5nXCIsdGhpcy5lbGVtZW50WzBdKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIHM9dC5kYXRhKHRoaXMsXCJzZWxlY3RhYmxlLWl0ZW1cIik7aS5fcmVtb3ZlQ2xhc3Mocy4kZWxlbWVudCxcInVpLXNlbGVjdGluZ1wiKS5fYWRkQ2xhc3Mocy4kZWxlbWVudCxcInVpLXNlbGVjdGVkXCIpLHMuc2VsZWN0aW5nPSExLHMuc2VsZWN0ZWQ9ITAscy5zdGFydHNlbGVjdGVkPSEwLGkuX3RyaWdnZXIoXCJzZWxlY3RlZFwiLGUse3NlbGVjdGVkOnMuZWxlbWVudH0pfSksdGhpcy5fdHJpZ2dlcihcInN0b3BcIixlKSx0aGlzLmhlbHBlci5yZW1vdmUoKSwhMX19KSx0LndpZGdldChcInVpLnNvcnRhYmxlXCIsdC51aS5tb3VzZSx7dmVyc2lvbjpcIjEuMTIuMVwiLHdpZGdldEV2ZW50UHJlZml4Olwic29ydFwiLHJlYWR5OiExLG9wdGlvbnM6e2FwcGVuZFRvOlwicGFyZW50XCIsYXhpczohMSxjb25uZWN0V2l0aDohMSxjb250YWlubWVudDohMSxjdXJzb3I6XCJhdXRvXCIsY3Vyc29yQXQ6ITEsZHJvcE9uRW1wdHk6ITAsZm9yY2VQbGFjZWhvbGRlclNpemU6ITEsZm9yY2VIZWxwZXJTaXplOiExLGdyaWQ6ITEsaGFuZGxlOiExLGhlbHBlcjpcIm9yaWdpbmFsXCIsaXRlbXM6XCI+ICpcIixvcGFjaXR5OiExLHBsYWNlaG9sZGVyOiExLHJldmVydDohMSxzY3JvbGw6ITAsc2Nyb2xsU2Vuc2l0aXZpdHk6MjAsc2Nyb2xsU3BlZWQ6MjAsc2NvcGU6XCJkZWZhdWx0XCIsdG9sZXJhbmNlOlwiaW50ZXJzZWN0XCIsekluZGV4OjFlMyxhY3RpdmF0ZTpudWxsLGJlZm9yZVN0b3A6bnVsbCxjaGFuZ2U6bnVsbCxkZWFjdGl2YXRlOm51bGwsb3V0Om51bGwsb3ZlcjpudWxsLHJlY2VpdmU6bnVsbCxyZW1vdmU6bnVsbCxzb3J0Om51bGwsc3RhcnQ6bnVsbCxzdG9wOm51bGwsdXBkYXRlOm51bGx9LF9pc092ZXJBeGlzOmZ1bmN0aW9uKHQsZSxpKXtyZXR1cm4gdD49ZSYmZStpPnR9LF9pc0Zsb2F0aW5nOmZ1bmN0aW9uKHQpe3JldHVybi9sZWZ0fHJpZ2h0Ly50ZXN0KHQuY3NzKFwiZmxvYXRcIikpfHwvaW5saW5lfHRhYmxlLWNlbGwvLnRlc3QodC5jc3MoXCJkaXNwbGF5XCIpKX0sX2NyZWF0ZTpmdW5jdGlvbigpe3RoaXMuY29udGFpbmVyQ2FjaGU9e30sdGhpcy5fYWRkQ2xhc3MoXCJ1aS1zb3J0YWJsZVwiKSx0aGlzLnJlZnJlc2goKSx0aGlzLm9mZnNldD10aGlzLmVsZW1lbnQub2Zmc2V0KCksdGhpcy5fbW91c2VJbml0KCksdGhpcy5fc2V0SGFuZGxlQ2xhc3NOYW1lKCksdGhpcy5yZWFkeT0hMH0sX3NldE9wdGlvbjpmdW5jdGlvbih0LGUpe3RoaXMuX3N1cGVyKHQsZSksXCJoYW5kbGVcIj09PXQmJnRoaXMuX3NldEhhbmRsZUNsYXNzTmFtZSgpfSxfc2V0SGFuZGxlQ2xhc3NOYW1lOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQuZmluZChcIi51aS1zb3J0YWJsZS1oYW5kbGVcIiksXCJ1aS1zb3J0YWJsZS1oYW5kbGVcIiksdC5lYWNoKHRoaXMuaXRlbXMsZnVuY3Rpb24oKXtlLl9hZGRDbGFzcyh0aGlzLmluc3RhbmNlLm9wdGlvbnMuaGFuZGxlP3RoaXMuaXRlbS5maW5kKHRoaXMuaW5zdGFuY2Uub3B0aW9ucy5oYW5kbGUpOnRoaXMuaXRlbSxcInVpLXNvcnRhYmxlLWhhbmRsZVwiKX0pfSxfZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX21vdXNlRGVzdHJveSgpO2Zvcih2YXIgdD10aGlzLml0ZW1zLmxlbmd0aC0xO3Q+PTA7dC0tKXRoaXMuaXRlbXNbdF0uaXRlbS5yZW1vdmVEYXRhKHRoaXMud2lkZ2V0TmFtZStcIi1pdGVtXCIpO3JldHVybiB0aGlzfSxfbW91c2VDYXB0dXJlOmZ1bmN0aW9uKGUsaSl7dmFyIHM9bnVsbCxuPSExLG89dGhpcztyZXR1cm4gdGhpcy5yZXZlcnRpbmc/ITE6dGhpcy5vcHRpb25zLmRpc2FibGVkfHxcInN0YXRpY1wiPT09dGhpcy5vcHRpb25zLnR5cGU/ITE6KHRoaXMuX3JlZnJlc2hJdGVtcyhlKSx0KGUudGFyZ2V0KS5wYXJlbnRzKCkuZWFjaChmdW5jdGlvbigpe3JldHVybiB0LmRhdGEodGhpcyxvLndpZGdldE5hbWUrXCItaXRlbVwiKT09PW8/KHM9dCh0aGlzKSwhMSk6dm9pZCAwfSksdC5kYXRhKGUudGFyZ2V0LG8ud2lkZ2V0TmFtZStcIi1pdGVtXCIpPT09byYmKHM9dChlLnRhcmdldCkpLHM/IXRoaXMub3B0aW9ucy5oYW5kbGV8fGl8fCh0KHRoaXMub3B0aW9ucy5oYW5kbGUscykuZmluZChcIipcIikuYWRkQmFjaygpLmVhY2goZnVuY3Rpb24oKXt0aGlzPT09ZS50YXJnZXQmJihuPSEwKX0pLG4pPyh0aGlzLmN1cnJlbnRJdGVtPXMsdGhpcy5fcmVtb3ZlQ3VycmVudHNGcm9tSXRlbXMoKSwhMCk6ITE6ITEpfSxfbW91c2VTdGFydDpmdW5jdGlvbihlLGkscyl7dmFyIG4sbyxhPXRoaXMub3B0aW9ucztpZih0aGlzLmN1cnJlbnRDb250YWluZXI9dGhpcyx0aGlzLnJlZnJlc2hQb3NpdGlvbnMoKSx0aGlzLmhlbHBlcj10aGlzLl9jcmVhdGVIZWxwZXIoZSksdGhpcy5fY2FjaGVIZWxwZXJQcm9wb3J0aW9ucygpLHRoaXMuX2NhY2hlTWFyZ2lucygpLHRoaXMuc2Nyb2xsUGFyZW50PXRoaXMuaGVscGVyLnNjcm9sbFBhcmVudCgpLHRoaXMub2Zmc2V0PXRoaXMuY3VycmVudEl0ZW0ub2Zmc2V0KCksdGhpcy5vZmZzZXQ9e3RvcDp0aGlzLm9mZnNldC50b3AtdGhpcy5tYXJnaW5zLnRvcCxsZWZ0OnRoaXMub2Zmc2V0LmxlZnQtdGhpcy5tYXJnaW5zLmxlZnR9LHQuZXh0ZW5kKHRoaXMub2Zmc2V0LHtjbGljazp7bGVmdDplLnBhZ2VYLXRoaXMub2Zmc2V0LmxlZnQsdG9wOmUucGFnZVktdGhpcy5vZmZzZXQudG9wfSxwYXJlbnQ6dGhpcy5fZ2V0UGFyZW50T2Zmc2V0KCkscmVsYXRpdmU6dGhpcy5fZ2V0UmVsYXRpdmVPZmZzZXQoKX0pLHRoaXMuaGVscGVyLmNzcyhcInBvc2l0aW9uXCIsXCJhYnNvbHV0ZVwiKSx0aGlzLmNzc1Bvc2l0aW9uPXRoaXMuaGVscGVyLmNzcyhcInBvc2l0aW9uXCIpLHRoaXMub3JpZ2luYWxQb3NpdGlvbj10aGlzLl9nZW5lcmF0ZVBvc2l0aW9uKGUpLHRoaXMub3JpZ2luYWxQYWdlWD1lLnBhZ2VYLHRoaXMub3JpZ2luYWxQYWdlWT1lLnBhZ2VZLGEuY3Vyc29yQXQmJnRoaXMuX2FkanVzdE9mZnNldEZyb21IZWxwZXIoYS5jdXJzb3JBdCksdGhpcy5kb21Qb3NpdGlvbj17cHJldjp0aGlzLmN1cnJlbnRJdGVtLnByZXYoKVswXSxwYXJlbnQ6dGhpcy5jdXJyZW50SXRlbS5wYXJlbnQoKVswXX0sdGhpcy5oZWxwZXJbMF0hPT10aGlzLmN1cnJlbnRJdGVtWzBdJiZ0aGlzLmN1cnJlbnRJdGVtLmhpZGUoKSx0aGlzLl9jcmVhdGVQbGFjZWhvbGRlcigpLGEuY29udGFpbm1lbnQmJnRoaXMuX3NldENvbnRhaW5tZW50KCksYS5jdXJzb3ImJlwiYXV0b1wiIT09YS5jdXJzb3ImJihvPXRoaXMuZG9jdW1lbnQuZmluZChcImJvZHlcIiksdGhpcy5zdG9yZWRDdXJzb3I9by5jc3MoXCJjdXJzb3JcIiksby5jc3MoXCJjdXJzb3JcIixhLmN1cnNvciksdGhpcy5zdG9yZWRTdHlsZXNoZWV0PXQoXCI8c3R5bGU+KnsgY3Vyc29yOiBcIithLmN1cnNvcitcIiAhaW1wb3J0YW50OyB9PC9zdHlsZT5cIikuYXBwZW5kVG8obykpLGEub3BhY2l0eSYmKHRoaXMuaGVscGVyLmNzcyhcIm9wYWNpdHlcIikmJih0aGlzLl9zdG9yZWRPcGFjaXR5PXRoaXMuaGVscGVyLmNzcyhcIm9wYWNpdHlcIikpLHRoaXMuaGVscGVyLmNzcyhcIm9wYWNpdHlcIixhLm9wYWNpdHkpKSxhLnpJbmRleCYmKHRoaXMuaGVscGVyLmNzcyhcInpJbmRleFwiKSYmKHRoaXMuX3N0b3JlZFpJbmRleD10aGlzLmhlbHBlci5jc3MoXCJ6SW5kZXhcIikpLHRoaXMuaGVscGVyLmNzcyhcInpJbmRleFwiLGEuekluZGV4KSksdGhpcy5zY3JvbGxQYXJlbnRbMF0hPT10aGlzLmRvY3VtZW50WzBdJiZcIkhUTUxcIiE9PXRoaXMuc2Nyb2xsUGFyZW50WzBdLnRhZ05hbWUmJih0aGlzLm92ZXJmbG93T2Zmc2V0PXRoaXMuc2Nyb2xsUGFyZW50Lm9mZnNldCgpKSx0aGlzLl90cmlnZ2VyKFwic3RhcnRcIixlLHRoaXMuX3VpSGFzaCgpKSx0aGlzLl9wcmVzZXJ2ZUhlbHBlclByb3BvcnRpb25zfHx0aGlzLl9jYWNoZUhlbHBlclByb3BvcnRpb25zKCksIXMpZm9yKG49dGhpcy5jb250YWluZXJzLmxlbmd0aC0xO24+PTA7bi0tKXRoaXMuY29udGFpbmVyc1tuXS5fdHJpZ2dlcihcImFjdGl2YXRlXCIsZSx0aGlzLl91aUhhc2godGhpcykpO3JldHVybiB0LnVpLmRkbWFuYWdlciYmKHQudWkuZGRtYW5hZ2VyLmN1cnJlbnQ9dGhpcyksdC51aS5kZG1hbmFnZXImJiFhLmRyb3BCZWhhdmlvdXImJnQudWkuZGRtYW5hZ2VyLnByZXBhcmVPZmZzZXRzKHRoaXMsZSksdGhpcy5kcmFnZ2luZz0hMCx0aGlzLl9hZGRDbGFzcyh0aGlzLmhlbHBlcixcInVpLXNvcnRhYmxlLWhlbHBlclwiKSx0aGlzLl9tb3VzZURyYWcoZSksITB9LF9tb3VzZURyYWc6ZnVuY3Rpb24oZSl7dmFyIGkscyxuLG8sYT10aGlzLm9wdGlvbnMscj0hMTtmb3IodGhpcy5wb3NpdGlvbj10aGlzLl9nZW5lcmF0ZVBvc2l0aW9uKGUpLHRoaXMucG9zaXRpb25BYnM9dGhpcy5fY29udmVydFBvc2l0aW9uVG8oXCJhYnNvbHV0ZVwiKSx0aGlzLmxhc3RQb3NpdGlvbkFic3x8KHRoaXMubGFzdFBvc2l0aW9uQWJzPXRoaXMucG9zaXRpb25BYnMpLHRoaXMub3B0aW9ucy5zY3JvbGwmJih0aGlzLnNjcm9sbFBhcmVudFswXSE9PXRoaXMuZG9jdW1lbnRbMF0mJlwiSFRNTFwiIT09dGhpcy5zY3JvbGxQYXJlbnRbMF0udGFnTmFtZT8odGhpcy5vdmVyZmxvd09mZnNldC50b3ArdGhpcy5zY3JvbGxQYXJlbnRbMF0ub2Zmc2V0SGVpZ2h0LWUucGFnZVk8YS5zY3JvbGxTZW5zaXRpdml0eT90aGlzLnNjcm9sbFBhcmVudFswXS5zY3JvbGxUb3A9cj10aGlzLnNjcm9sbFBhcmVudFswXS5zY3JvbGxUb3ArYS5zY3JvbGxTcGVlZDplLnBhZ2VZLXRoaXMub3ZlcmZsb3dPZmZzZXQudG9wPGEuc2Nyb2xsU2Vuc2l0aXZpdHkmJih0aGlzLnNjcm9sbFBhcmVudFswXS5zY3JvbGxUb3A9cj10aGlzLnNjcm9sbFBhcmVudFswXS5zY3JvbGxUb3AtYS5zY3JvbGxTcGVlZCksdGhpcy5vdmVyZmxvd09mZnNldC5sZWZ0K3RoaXMuc2Nyb2xsUGFyZW50WzBdLm9mZnNldFdpZHRoLWUucGFnZVg8YS5zY3JvbGxTZW5zaXRpdml0eT90aGlzLnNjcm9sbFBhcmVudFswXS5zY3JvbGxMZWZ0PXI9dGhpcy5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsTGVmdCthLnNjcm9sbFNwZWVkOmUucGFnZVgtdGhpcy5vdmVyZmxvd09mZnNldC5sZWZ0PGEuc2Nyb2xsU2Vuc2l0aXZpdHkmJih0aGlzLnNjcm9sbFBhcmVudFswXS5zY3JvbGxMZWZ0PXI9dGhpcy5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsTGVmdC1hLnNjcm9sbFNwZWVkKSk6KGUucGFnZVktdGhpcy5kb2N1bWVudC5zY3JvbGxUb3AoKTxhLnNjcm9sbFNlbnNpdGl2aXR5P3I9dGhpcy5kb2N1bWVudC5zY3JvbGxUb3AodGhpcy5kb2N1bWVudC5zY3JvbGxUb3AoKS1hLnNjcm9sbFNwZWVkKTp0aGlzLndpbmRvdy5oZWlnaHQoKS0oZS5wYWdlWS10aGlzLmRvY3VtZW50LnNjcm9sbFRvcCgpKTxhLnNjcm9sbFNlbnNpdGl2aXR5JiYocj10aGlzLmRvY3VtZW50LnNjcm9sbFRvcCh0aGlzLmRvY3VtZW50LnNjcm9sbFRvcCgpK2Euc2Nyb2xsU3BlZWQpKSxlLnBhZ2VYLXRoaXMuZG9jdW1lbnQuc2Nyb2xsTGVmdCgpPGEuc2Nyb2xsU2Vuc2l0aXZpdHk/cj10aGlzLmRvY3VtZW50LnNjcm9sbExlZnQodGhpcy5kb2N1bWVudC5zY3JvbGxMZWZ0KCktYS5zY3JvbGxTcGVlZCk6dGhpcy53aW5kb3cud2lkdGgoKS0oZS5wYWdlWC10aGlzLmRvY3VtZW50LnNjcm9sbExlZnQoKSk8YS5zY3JvbGxTZW5zaXRpdml0eSYmKHI9dGhpcy5kb2N1bWVudC5zY3JvbGxMZWZ0KHRoaXMuZG9jdW1lbnQuc2Nyb2xsTGVmdCgpK2Euc2Nyb2xsU3BlZWQpKSksciE9PSExJiZ0LnVpLmRkbWFuYWdlciYmIWEuZHJvcEJlaGF2aW91ciYmdC51aS5kZG1hbmFnZXIucHJlcGFyZU9mZnNldHModGhpcyxlKSksdGhpcy5wb3NpdGlvbkFicz10aGlzLl9jb252ZXJ0UG9zaXRpb25UbyhcImFic29sdXRlXCIpLHRoaXMub3B0aW9ucy5heGlzJiZcInlcIj09PXRoaXMub3B0aW9ucy5heGlzfHwodGhpcy5oZWxwZXJbMF0uc3R5bGUubGVmdD10aGlzLnBvc2l0aW9uLmxlZnQrXCJweFwiKSx0aGlzLm9wdGlvbnMuYXhpcyYmXCJ4XCI9PT10aGlzLm9wdGlvbnMuYXhpc3x8KHRoaXMuaGVscGVyWzBdLnN0eWxlLnRvcD10aGlzLnBvc2l0aW9uLnRvcCtcInB4XCIpLGk9dGhpcy5pdGVtcy5sZW5ndGgtMTtpPj0wO2ktLSlpZihzPXRoaXMuaXRlbXNbaV0sbj1zLml0ZW1bMF0sbz10aGlzLl9pbnRlcnNlY3RzV2l0aFBvaW50ZXIocyksbyYmcy5pbnN0YW5jZT09PXRoaXMuY3VycmVudENvbnRhaW5lciYmbiE9PXRoaXMuY3VycmVudEl0ZW1bMF0mJnRoaXMucGxhY2Vob2xkZXJbMT09PW8/XCJuZXh0XCI6XCJwcmV2XCJdKClbMF0hPT1uJiYhdC5jb250YWlucyh0aGlzLnBsYWNlaG9sZGVyWzBdLG4pJiYoXCJzZW1pLWR5bmFtaWNcIj09PXRoaXMub3B0aW9ucy50eXBlPyF0LmNvbnRhaW5zKHRoaXMuZWxlbWVudFswXSxuKTohMCkpe2lmKHRoaXMuZGlyZWN0aW9uPTE9PT1vP1wiZG93blwiOlwidXBcIixcInBvaW50ZXJcIiE9PXRoaXMub3B0aW9ucy50b2xlcmFuY2UmJiF0aGlzLl9pbnRlcnNlY3RzV2l0aFNpZGVzKHMpKWJyZWFrO3RoaXMuX3JlYXJyYW5nZShlLHMpLHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VcIixlLHRoaXMuX3VpSGFzaCgpKTticmVha31yZXR1cm4gdGhpcy5fY29udGFjdENvbnRhaW5lcnMoZSksdC51aS5kZG1hbmFnZXImJnQudWkuZGRtYW5hZ2VyLmRyYWcodGhpcyxlKSx0aGlzLl90cmlnZ2VyKFwic29ydFwiLGUsdGhpcy5fdWlIYXNoKCkpLHRoaXMubGFzdFBvc2l0aW9uQWJzPXRoaXMucG9zaXRpb25BYnMsITF9LF9tb3VzZVN0b3A6ZnVuY3Rpb24oZSxpKXtpZihlKXtpZih0LnVpLmRkbWFuYWdlciYmIXRoaXMub3B0aW9ucy5kcm9wQmVoYXZpb3VyJiZ0LnVpLmRkbWFuYWdlci5kcm9wKHRoaXMsZSksdGhpcy5vcHRpb25zLnJldmVydCl7dmFyIHM9dGhpcyxuPXRoaXMucGxhY2Vob2xkZXIub2Zmc2V0KCksbz10aGlzLm9wdGlvbnMuYXhpcyxhPXt9O28mJlwieFwiIT09b3x8KGEubGVmdD1uLmxlZnQtdGhpcy5vZmZzZXQucGFyZW50LmxlZnQtdGhpcy5tYXJnaW5zLmxlZnQrKHRoaXMub2Zmc2V0UGFyZW50WzBdPT09dGhpcy5kb2N1bWVudFswXS5ib2R5PzA6dGhpcy5vZmZzZXRQYXJlbnRbMF0uc2Nyb2xsTGVmdCkpLG8mJlwieVwiIT09b3x8KGEudG9wPW4udG9wLXRoaXMub2Zmc2V0LnBhcmVudC50b3AtdGhpcy5tYXJnaW5zLnRvcCsodGhpcy5vZmZzZXRQYXJlbnRbMF09PT10aGlzLmRvY3VtZW50WzBdLmJvZHk/MDp0aGlzLm9mZnNldFBhcmVudFswXS5zY3JvbGxUb3ApKSx0aGlzLnJldmVydGluZz0hMCx0KHRoaXMuaGVscGVyKS5hbmltYXRlKGEscGFyc2VJbnQodGhpcy5vcHRpb25zLnJldmVydCwxMCl8fDUwMCxmdW5jdGlvbigpe3MuX2NsZWFyKGUpfSl9ZWxzZSB0aGlzLl9jbGVhcihlLGkpO3JldHVybiExfX0sY2FuY2VsOmZ1bmN0aW9uKCl7aWYodGhpcy5kcmFnZ2luZyl7dGhpcy5fbW91c2VVcChuZXcgdC5FdmVudChcIm1vdXNldXBcIix7dGFyZ2V0Om51bGx9KSksXCJvcmlnaW5hbFwiPT09dGhpcy5vcHRpb25zLmhlbHBlcj8odGhpcy5jdXJyZW50SXRlbS5jc3ModGhpcy5fc3RvcmVkQ1NTKSx0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLmN1cnJlbnRJdGVtLFwidWktc29ydGFibGUtaGVscGVyXCIpKTp0aGlzLmN1cnJlbnRJdGVtLnNob3coKTtmb3IodmFyIGU9dGhpcy5jb250YWluZXJzLmxlbmd0aC0xO2U+PTA7ZS0tKXRoaXMuY29udGFpbmVyc1tlXS5fdHJpZ2dlcihcImRlYWN0aXZhdGVcIixudWxsLHRoaXMuX3VpSGFzaCh0aGlzKSksdGhpcy5jb250YWluZXJzW2VdLmNvbnRhaW5lckNhY2hlLm92ZXImJih0aGlzLmNvbnRhaW5lcnNbZV0uX3RyaWdnZXIoXCJvdXRcIixudWxsLHRoaXMuX3VpSGFzaCh0aGlzKSksdGhpcy5jb250YWluZXJzW2VdLmNvbnRhaW5lckNhY2hlLm92ZXI9MCl9cmV0dXJuIHRoaXMucGxhY2Vob2xkZXImJih0aGlzLnBsYWNlaG9sZGVyWzBdLnBhcmVudE5vZGUmJnRoaXMucGxhY2Vob2xkZXJbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBsYWNlaG9sZGVyWzBdKSxcIm9yaWdpbmFsXCIhPT10aGlzLm9wdGlvbnMuaGVscGVyJiZ0aGlzLmhlbHBlciYmdGhpcy5oZWxwZXJbMF0ucGFyZW50Tm9kZSYmdGhpcy5oZWxwZXIucmVtb3ZlKCksdC5leHRlbmQodGhpcyx7aGVscGVyOm51bGwsZHJhZ2dpbmc6ITEscmV2ZXJ0aW5nOiExLF9ub0ZpbmFsU29ydDpudWxsfSksdGhpcy5kb21Qb3NpdGlvbi5wcmV2P3QodGhpcy5kb21Qb3NpdGlvbi5wcmV2KS5hZnRlcih0aGlzLmN1cnJlbnRJdGVtKTp0KHRoaXMuZG9tUG9zaXRpb24ucGFyZW50KS5wcmVwZW5kKHRoaXMuY3VycmVudEl0ZW0pKSx0aGlzfSxzZXJpYWxpemU6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5fZ2V0SXRlbXNBc2pRdWVyeShlJiZlLmNvbm5lY3RlZCkscz1bXTtyZXR1cm4gZT1lfHx7fSx0KGkpLmVhY2goZnVuY3Rpb24oKXt2YXIgaT0odChlLml0ZW18fHRoaXMpLmF0dHIoZS5hdHRyaWJ1dGV8fFwiaWRcIil8fFwiXCIpLm1hdGNoKGUuZXhwcmVzc2lvbnx8LyguKylbXFwtPV9dKC4rKS8pO2kmJnMucHVzaCgoZS5rZXl8fGlbMV0rXCJbXVwiKStcIj1cIisoZS5rZXkmJmUuZXhwcmVzc2lvbj9pWzFdOmlbMl0pKX0pLCFzLmxlbmd0aCYmZS5rZXkmJnMucHVzaChlLmtleStcIj1cIikscy5qb2luKFwiJlwiKX0sdG9BcnJheTpmdW5jdGlvbihlKXt2YXIgaT10aGlzLl9nZXRJdGVtc0FzalF1ZXJ5KGUmJmUuY29ubmVjdGVkKSxzPVtdO3JldHVybiBlPWV8fHt9LGkuZWFjaChmdW5jdGlvbigpe3MucHVzaCh0KGUuaXRlbXx8dGhpcykuYXR0cihlLmF0dHJpYnV0ZXx8XCJpZFwiKXx8XCJcIil9KSxzfSxfaW50ZXJzZWN0c1dpdGg6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wb3NpdGlvbkFicy5sZWZ0LGk9ZSt0aGlzLmhlbHBlclByb3BvcnRpb25zLndpZHRoLHM9dGhpcy5wb3NpdGlvbkFicy50b3Asbj1zK3RoaXMuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LG89dC5sZWZ0LGE9byt0LndpZHRoLHI9dC50b3AsaD1yK3QuaGVpZ2h0LGw9dGhpcy5vZmZzZXQuY2xpY2sudG9wLHU9dGhpcy5vZmZzZXQuY2xpY2subGVmdCxjPVwieFwiPT09dGhpcy5vcHRpb25zLmF4aXN8fHMrbD5yJiZoPnMrbCxkPVwieVwiPT09dGhpcy5vcHRpb25zLmF4aXN8fGUrdT5vJiZhPmUrdSxwPWMmJmQ7cmV0dXJuXCJwb2ludGVyXCI9PT10aGlzLm9wdGlvbnMudG9sZXJhbmNlfHx0aGlzLm9wdGlvbnMuZm9yY2VQb2ludGVyRm9yQ29udGFpbmVyc3x8XCJwb2ludGVyXCIhPT10aGlzLm9wdGlvbnMudG9sZXJhbmNlJiZ0aGlzLmhlbHBlclByb3BvcnRpb25zW3RoaXMuZmxvYXRpbmc/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdPnRbdGhpcy5mbG9hdGluZz9cIndpZHRoXCI6XCJoZWlnaHRcIl0/cDplK3RoaXMuaGVscGVyUHJvcG9ydGlvbnMud2lkdGgvMj5vJiZhPmktdGhpcy5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aC8yJiZzK3RoaXMuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LzI+ciYmaD5uLXRoaXMuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LzJ9LF9pbnRlcnNlY3RzV2l0aFBvaW50ZXI6ZnVuY3Rpb24odCl7dmFyIGUsaSxzPVwieFwiPT09dGhpcy5vcHRpb25zLmF4aXN8fHRoaXMuX2lzT3ZlckF4aXModGhpcy5wb3NpdGlvbkFicy50b3ArdGhpcy5vZmZzZXQuY2xpY2sudG9wLHQudG9wLHQuaGVpZ2h0KSxuPVwieVwiPT09dGhpcy5vcHRpb25zLmF4aXN8fHRoaXMuX2lzT3ZlckF4aXModGhpcy5wb3NpdGlvbkFicy5sZWZ0K3RoaXMub2Zmc2V0LmNsaWNrLmxlZnQsdC5sZWZ0LHQud2lkdGgpLG89cyYmbjtyZXR1cm4gbz8oZT10aGlzLl9nZXREcmFnVmVydGljYWxEaXJlY3Rpb24oKSxpPXRoaXMuX2dldERyYWdIb3Jpem9udGFsRGlyZWN0aW9uKCksdGhpcy5mbG9hdGluZz9cInJpZ2h0XCI9PT1pfHxcImRvd25cIj09PWU/MjoxOmUmJihcImRvd25cIj09PWU/MjoxKSk6ITF9LF9pbnRlcnNlY3RzV2l0aFNpZGVzOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2lzT3ZlckF4aXModGhpcy5wb3NpdGlvbkFicy50b3ArdGhpcy5vZmZzZXQuY2xpY2sudG9wLHQudG9wK3QuaGVpZ2h0LzIsdC5oZWlnaHQpLGk9dGhpcy5faXNPdmVyQXhpcyh0aGlzLnBvc2l0aW9uQWJzLmxlZnQrdGhpcy5vZmZzZXQuY2xpY2subGVmdCx0LmxlZnQrdC53aWR0aC8yLHQud2lkdGgpLHM9dGhpcy5fZ2V0RHJhZ1ZlcnRpY2FsRGlyZWN0aW9uKCksbj10aGlzLl9nZXREcmFnSG9yaXpvbnRhbERpcmVjdGlvbigpO3JldHVybiB0aGlzLmZsb2F0aW5nJiZuP1wicmlnaHRcIj09PW4mJml8fFwibGVmdFwiPT09biYmIWk6cyYmKFwiZG93blwiPT09cyYmZXx8XCJ1cFwiPT09cyYmIWUpfSxfZ2V0RHJhZ1ZlcnRpY2FsRGlyZWN0aW9uOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wb3NpdGlvbkFicy50b3AtdGhpcy5sYXN0UG9zaXRpb25BYnMudG9wO3JldHVybiAwIT09dCYmKHQ+MD9cImRvd25cIjpcInVwXCIpfSxfZ2V0RHJhZ0hvcml6b250YWxEaXJlY3Rpb246ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnBvc2l0aW9uQWJzLmxlZnQtdGhpcy5sYXN0UG9zaXRpb25BYnMubGVmdDtyZXR1cm4gMCE9PXQmJih0PjA/XCJyaWdodFwiOlwibGVmdFwiKX0scmVmcmVzaDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fcmVmcmVzaEl0ZW1zKHQpLHRoaXMuX3NldEhhbmRsZUNsYXNzTmFtZSgpLHRoaXMucmVmcmVzaFBvc2l0aW9ucygpLHRoaXN9LF9jb25uZWN0V2l0aDpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucztyZXR1cm4gdC5jb25uZWN0V2l0aC5jb25zdHJ1Y3Rvcj09PVN0cmluZz9bdC5jb25uZWN0V2l0aF06dC5jb25uZWN0V2l0aH0sX2dldEl0ZW1zQXNqUXVlcnk6ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gaSgpe3IucHVzaCh0aGlzKX12YXIgcyxuLG8sYSxyPVtdLGg9W10sbD10aGlzLl9jb25uZWN0V2l0aCgpO2lmKGwmJmUpZm9yKHM9bC5sZW5ndGgtMTtzPj0wO3MtLSlmb3Iobz10KGxbc10sdGhpcy5kb2N1bWVudFswXSksbj1vLmxlbmd0aC0xO24+PTA7bi0tKWE9dC5kYXRhKG9bbl0sdGhpcy53aWRnZXRGdWxsTmFtZSksYSYmYSE9PXRoaXMmJiFhLm9wdGlvbnMuZGlzYWJsZWQmJmgucHVzaChbdC5pc0Z1bmN0aW9uKGEub3B0aW9ucy5pdGVtcyk/YS5vcHRpb25zLml0ZW1zLmNhbGwoYS5lbGVtZW50KTp0KGEub3B0aW9ucy5pdGVtcyxhLmVsZW1lbnQpLm5vdChcIi51aS1zb3J0YWJsZS1oZWxwZXJcIikubm90KFwiLnVpLXNvcnRhYmxlLXBsYWNlaG9sZGVyXCIpLGFdKTtmb3IoaC5wdXNoKFt0LmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLml0ZW1zKT90aGlzLm9wdGlvbnMuaXRlbXMuY2FsbCh0aGlzLmVsZW1lbnQsbnVsbCx7b3B0aW9uczp0aGlzLm9wdGlvbnMsaXRlbTp0aGlzLmN1cnJlbnRJdGVtfSk6dCh0aGlzLm9wdGlvbnMuaXRlbXMsdGhpcy5lbGVtZW50KS5ub3QoXCIudWktc29ydGFibGUtaGVscGVyXCIpLm5vdChcIi51aS1zb3J0YWJsZS1wbGFjZWhvbGRlclwiKSx0aGlzXSkscz1oLmxlbmd0aC0xO3M+PTA7cy0tKWhbc11bMF0uZWFjaChpKTtyZXR1cm4gdChyKX0sX3JlbW92ZUN1cnJlbnRzRnJvbUl0ZW1zOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jdXJyZW50SXRlbS5maW5kKFwiOmRhdGEoXCIrdGhpcy53aWRnZXROYW1lK1wiLWl0ZW0pXCIpO3RoaXMuaXRlbXM9dC5ncmVwKHRoaXMuaXRlbXMsZnVuY3Rpb24odCl7Zm9yKHZhciBpPTA7ZS5sZW5ndGg+aTtpKyspaWYoZVtpXT09PXQuaXRlbVswXSlyZXR1cm4hMTtyZXR1cm4hMH0pfSxfcmVmcmVzaEl0ZW1zOmZ1bmN0aW9uKGUpe3RoaXMuaXRlbXM9W10sdGhpcy5jb250YWluZXJzPVt0aGlzXTt2YXIgaSxzLG4sbyxhLHIsaCxsLHU9dGhpcy5pdGVtcyxjPVtbdC5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy5pdGVtcyk/dGhpcy5vcHRpb25zLml0ZW1zLmNhbGwodGhpcy5lbGVtZW50WzBdLGUse2l0ZW06dGhpcy5jdXJyZW50SXRlbX0pOnQodGhpcy5vcHRpb25zLml0ZW1zLHRoaXMuZWxlbWVudCksdGhpc11dLGQ9dGhpcy5fY29ubmVjdFdpdGgoKTtpZihkJiZ0aGlzLnJlYWR5KWZvcihpPWQubGVuZ3RoLTE7aT49MDtpLS0pZm9yKG49dChkW2ldLHRoaXMuZG9jdW1lbnRbMF0pLHM9bi5sZW5ndGgtMTtzPj0wO3MtLSlvPXQuZGF0YShuW3NdLHRoaXMud2lkZ2V0RnVsbE5hbWUpLG8mJm8hPT10aGlzJiYhby5vcHRpb25zLmRpc2FibGVkJiYoYy5wdXNoKFt0LmlzRnVuY3Rpb24oby5vcHRpb25zLml0ZW1zKT9vLm9wdGlvbnMuaXRlbXMuY2FsbChvLmVsZW1lbnRbMF0sZSx7aXRlbTp0aGlzLmN1cnJlbnRJdGVtfSk6dChvLm9wdGlvbnMuaXRlbXMsby5lbGVtZW50KSxvXSksdGhpcy5jb250YWluZXJzLnB1c2gobykpO2ZvcihpPWMubGVuZ3RoLTE7aT49MDtpLS0pZm9yKGE9Y1tpXVsxXSxyPWNbaV1bMF0scz0wLGw9ci5sZW5ndGg7bD5zO3MrKyloPXQocltzXSksaC5kYXRhKHRoaXMud2lkZ2V0TmFtZStcIi1pdGVtXCIsYSksdS5wdXNoKHtpdGVtOmgsaW5zdGFuY2U6YSx3aWR0aDowLGhlaWdodDowLGxlZnQ6MCx0b3A6MH0pfSxyZWZyZXNoUG9zaXRpb25zOmZ1bmN0aW9uKGUpe3RoaXMuZmxvYXRpbmc9dGhpcy5pdGVtcy5sZW5ndGg/XCJ4XCI9PT10aGlzLm9wdGlvbnMuYXhpc3x8dGhpcy5faXNGbG9hdGluZyh0aGlzLml0ZW1zWzBdLml0ZW0pOiExLHRoaXMub2Zmc2V0UGFyZW50JiZ0aGlzLmhlbHBlciYmKHRoaXMub2Zmc2V0LnBhcmVudD10aGlzLl9nZXRQYXJlbnRPZmZzZXQoKSk7dmFyIGkscyxuLG87Zm9yKGk9dGhpcy5pdGVtcy5sZW5ndGgtMTtpPj0wO2ktLSlzPXRoaXMuaXRlbXNbaV0scy5pbnN0YW5jZSE9PXRoaXMuY3VycmVudENvbnRhaW5lciYmdGhpcy5jdXJyZW50Q29udGFpbmVyJiZzLml0ZW1bMF0hPT10aGlzLmN1cnJlbnRJdGVtWzBdfHwobj10aGlzLm9wdGlvbnMudG9sZXJhbmNlRWxlbWVudD90KHRoaXMub3B0aW9ucy50b2xlcmFuY2VFbGVtZW50LHMuaXRlbSk6cy5pdGVtLGV8fChzLndpZHRoPW4ub3V0ZXJXaWR0aCgpLHMuaGVpZ2h0PW4ub3V0ZXJIZWlnaHQoKSksbz1uLm9mZnNldCgpLHMubGVmdD1vLmxlZnQscy50b3A9by50b3ApO2lmKHRoaXMub3B0aW9ucy5jdXN0b20mJnRoaXMub3B0aW9ucy5jdXN0b20ucmVmcmVzaENvbnRhaW5lcnMpdGhpcy5vcHRpb25zLmN1c3RvbS5yZWZyZXNoQ29udGFpbmVycy5jYWxsKHRoaXMpO2Vsc2UgZm9yKGk9dGhpcy5jb250YWluZXJzLmxlbmd0aC0xO2k+PTA7aS0tKW89dGhpcy5jb250YWluZXJzW2ldLmVsZW1lbnQub2Zmc2V0KCksdGhpcy5jb250YWluZXJzW2ldLmNvbnRhaW5lckNhY2hlLmxlZnQ9by5sZWZ0LHRoaXMuY29udGFpbmVyc1tpXS5jb250YWluZXJDYWNoZS50b3A9by50b3AsdGhpcy5jb250YWluZXJzW2ldLmNvbnRhaW5lckNhY2hlLndpZHRoPXRoaXMuY29udGFpbmVyc1tpXS5lbGVtZW50Lm91dGVyV2lkdGgoKSx0aGlzLmNvbnRhaW5lcnNbaV0uY29udGFpbmVyQ2FjaGUuaGVpZ2h0PXRoaXMuY29udGFpbmVyc1tpXS5lbGVtZW50Lm91dGVySGVpZ2h0KCk7cmV0dXJuIHRoaXN9LF9jcmVhdGVQbGFjZWhvbGRlcjpmdW5jdGlvbihlKXtlPWV8fHRoaXM7dmFyIGkscz1lLm9wdGlvbnM7cy5wbGFjZWhvbGRlciYmcy5wbGFjZWhvbGRlci5jb25zdHJ1Y3RvciE9PVN0cmluZ3x8KGk9cy5wbGFjZWhvbGRlcixzLnBsYWNlaG9sZGVyPXtlbGVtZW50OmZ1bmN0aW9uKCl7dmFyIHM9ZS5jdXJyZW50SXRlbVswXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLG49dChcIjxcIitzK1wiPlwiLGUuZG9jdW1lbnRbMF0pO3JldHVybiBlLl9hZGRDbGFzcyhuLFwidWktc29ydGFibGUtcGxhY2Vob2xkZXJcIixpfHxlLmN1cnJlbnRJdGVtWzBdLmNsYXNzTmFtZSkuX3JlbW92ZUNsYXNzKG4sXCJ1aS1zb3J0YWJsZS1oZWxwZXJcIiksXCJ0Ym9keVwiPT09cz9lLl9jcmVhdGVUclBsYWNlaG9sZGVyKGUuY3VycmVudEl0ZW0uZmluZChcInRyXCIpLmVxKDApLHQoXCI8dHI+XCIsZS5kb2N1bWVudFswXSkuYXBwZW5kVG8obikpOlwidHJcIj09PXM/ZS5fY3JlYXRlVHJQbGFjZWhvbGRlcihlLmN1cnJlbnRJdGVtLG4pOlwiaW1nXCI9PT1zJiZuLmF0dHIoXCJzcmNcIixlLmN1cnJlbnRJdGVtLmF0dHIoXCJzcmNcIikpLGl8fG4uY3NzKFwidmlzaWJpbGl0eVwiLFwiaGlkZGVuXCIpLG59LHVwZGF0ZTpmdW5jdGlvbih0LG4peyghaXx8cy5mb3JjZVBsYWNlaG9sZGVyU2l6ZSkmJihuLmhlaWdodCgpfHxuLmhlaWdodChlLmN1cnJlbnRJdGVtLmlubmVySGVpZ2h0KCktcGFyc2VJbnQoZS5jdXJyZW50SXRlbS5jc3MoXCJwYWRkaW5nVG9wXCIpfHwwLDEwKS1wYXJzZUludChlLmN1cnJlbnRJdGVtLmNzcyhcInBhZGRpbmdCb3R0b21cIil8fDAsMTApKSxuLndpZHRoKCl8fG4ud2lkdGgoZS5jdXJyZW50SXRlbS5pbm5lcldpZHRoKCktcGFyc2VJbnQoZS5jdXJyZW50SXRlbS5jc3MoXCJwYWRkaW5nTGVmdFwiKXx8MCwxMCktcGFyc2VJbnQoZS5jdXJyZW50SXRlbS5jc3MoXCJwYWRkaW5nUmlnaHRcIil8fDAsMTApKSl9fSksZS5wbGFjZWhvbGRlcj10KHMucGxhY2Vob2xkZXIuZWxlbWVudC5jYWxsKGUuZWxlbWVudCxlLmN1cnJlbnRJdGVtKSksZS5jdXJyZW50SXRlbS5hZnRlcihlLnBsYWNlaG9sZGVyKSxzLnBsYWNlaG9sZGVyLnVwZGF0ZShlLGUucGxhY2Vob2xkZXIpfSxfY3JlYXRlVHJQbGFjZWhvbGRlcjpmdW5jdGlvbihlLGkpe3ZhciBzPXRoaXM7ZS5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oKXt0KFwiPHRkPiYjMTYwOzwvdGQ+XCIscy5kb2N1bWVudFswXSkuYXR0cihcImNvbHNwYW5cIix0KHRoaXMpLmF0dHIoXCJjb2xzcGFuXCIpfHwxKS5hcHBlbmRUbyhpKX0pfSxfY29udGFjdENvbnRhaW5lcnM6ZnVuY3Rpb24oZSl7dmFyIGkscyxuLG8sYSxyLGgsbCx1LGMsZD1udWxsLHA9bnVsbDtmb3IoaT10aGlzLmNvbnRhaW5lcnMubGVuZ3RoLTE7aT49MDtpLS0paWYoIXQuY29udGFpbnModGhpcy5jdXJyZW50SXRlbVswXSx0aGlzLmNvbnRhaW5lcnNbaV0uZWxlbWVudFswXSkpaWYodGhpcy5faW50ZXJzZWN0c1dpdGgodGhpcy5jb250YWluZXJzW2ldLmNvbnRhaW5lckNhY2hlKSl7aWYoZCYmdC5jb250YWlucyh0aGlzLmNvbnRhaW5lcnNbaV0uZWxlbWVudFswXSxkLmVsZW1lbnRbMF0pKWNvbnRpbnVlO2Q9dGhpcy5jb250YWluZXJzW2ldLHA9aX1lbHNlIHRoaXMuY29udGFpbmVyc1tpXS5jb250YWluZXJDYWNoZS5vdmVyJiYodGhpcy5jb250YWluZXJzW2ldLl90cmlnZ2VyKFwib3V0XCIsZSx0aGlzLl91aUhhc2godGhpcykpLHRoaXMuY29udGFpbmVyc1tpXS5jb250YWluZXJDYWNoZS5vdmVyPTApO2lmKGQpaWYoMT09PXRoaXMuY29udGFpbmVycy5sZW5ndGgpdGhpcy5jb250YWluZXJzW3BdLmNvbnRhaW5lckNhY2hlLm92ZXJ8fCh0aGlzLmNvbnRhaW5lcnNbcF0uX3RyaWdnZXIoXCJvdmVyXCIsZSx0aGlzLl91aUhhc2godGhpcykpLHRoaXMuY29udGFpbmVyc1twXS5jb250YWluZXJDYWNoZS5vdmVyPTEpO2Vsc2V7Zm9yKG49MWU0LG89bnVsbCx1PWQuZmxvYXRpbmd8fHRoaXMuX2lzRmxvYXRpbmcodGhpcy5jdXJyZW50SXRlbSksYT11P1wibGVmdFwiOlwidG9wXCIscj11P1wid2lkdGhcIjpcImhlaWdodFwiLGM9dT9cInBhZ2VYXCI6XCJwYWdlWVwiLHM9dGhpcy5pdGVtcy5sZW5ndGgtMTtzPj0wO3MtLSl0LmNvbnRhaW5zKHRoaXMuY29udGFpbmVyc1twXS5lbGVtZW50WzBdLHRoaXMuaXRlbXNbc10uaXRlbVswXSkmJnRoaXMuaXRlbXNbc10uaXRlbVswXSE9PXRoaXMuY3VycmVudEl0ZW1bMF0mJihoPXRoaXMuaXRlbXNbc10uaXRlbS5vZmZzZXQoKVthXSxsPSExLGVbY10taD50aGlzLml0ZW1zW3NdW3JdLzImJihsPSEwKSxuPk1hdGguYWJzKGVbY10taCkmJihuPU1hdGguYWJzKGVbY10taCksbz10aGlzLml0ZW1zW3NdLHRoaXMuZGlyZWN0aW9uPWw/XCJ1cFwiOlwiZG93blwiKSk7aWYoIW8mJiF0aGlzLm9wdGlvbnMuZHJvcE9uRW1wdHkpcmV0dXJuO2lmKHRoaXMuY3VycmVudENvbnRhaW5lcj09PXRoaXMuY29udGFpbmVyc1twXSlyZXR1cm4gdGhpcy5jdXJyZW50Q29udGFpbmVyLmNvbnRhaW5lckNhY2hlLm92ZXJ8fCh0aGlzLmNvbnRhaW5lcnNbcF0uX3RyaWdnZXIoXCJvdmVyXCIsZSx0aGlzLl91aUhhc2goKSksdGhpcy5jdXJyZW50Q29udGFpbmVyLmNvbnRhaW5lckNhY2hlLm92ZXI9MSksdm9pZCAwO28/dGhpcy5fcmVhcnJhbmdlKGUsbyxudWxsLCEwKTp0aGlzLl9yZWFycmFuZ2UoZSxudWxsLHRoaXMuY29udGFpbmVyc1twXS5lbGVtZW50LCEwKSx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlXCIsZSx0aGlzLl91aUhhc2goKSksdGhpcy5jb250YWluZXJzW3BdLl90cmlnZ2VyKFwiY2hhbmdlXCIsZSx0aGlzLl91aUhhc2godGhpcykpLHRoaXMuY3VycmVudENvbnRhaW5lcj10aGlzLmNvbnRhaW5lcnNbcF0sdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyLnVwZGF0ZSh0aGlzLmN1cnJlbnRDb250YWluZXIsdGhpcy5wbGFjZWhvbGRlciksdGhpcy5jb250YWluZXJzW3BdLl90cmlnZ2VyKFwib3ZlclwiLGUsdGhpcy5fdWlIYXNoKHRoaXMpKSx0aGlzLmNvbnRhaW5lcnNbcF0uY29udGFpbmVyQ2FjaGUub3Zlcj0xfX0sX2NyZWF0ZUhlbHBlcjpmdW5jdGlvbihlKXt2YXIgaT10aGlzLm9wdGlvbnMscz10LmlzRnVuY3Rpb24oaS5oZWxwZXIpP3QoaS5oZWxwZXIuYXBwbHkodGhpcy5lbGVtZW50WzBdLFtlLHRoaXMuY3VycmVudEl0ZW1dKSk6XCJjbG9uZVwiPT09aS5oZWxwZXI/dGhpcy5jdXJyZW50SXRlbS5jbG9uZSgpOnRoaXMuY3VycmVudEl0ZW07cmV0dXJuIHMucGFyZW50cyhcImJvZHlcIikubGVuZ3RofHx0KFwicGFyZW50XCIhPT1pLmFwcGVuZFRvP2kuYXBwZW5kVG86dGhpcy5jdXJyZW50SXRlbVswXS5wYXJlbnROb2RlKVswXS5hcHBlbmRDaGlsZChzWzBdKSxzWzBdPT09dGhpcy5jdXJyZW50SXRlbVswXSYmKHRoaXMuX3N0b3JlZENTUz17d2lkdGg6dGhpcy5jdXJyZW50SXRlbVswXS5zdHlsZS53aWR0aCxoZWlnaHQ6dGhpcy5jdXJyZW50SXRlbVswXS5zdHlsZS5oZWlnaHQscG9zaXRpb246dGhpcy5jdXJyZW50SXRlbS5jc3MoXCJwb3NpdGlvblwiKSx0b3A6dGhpcy5jdXJyZW50SXRlbS5jc3MoXCJ0b3BcIiksbGVmdDp0aGlzLmN1cnJlbnRJdGVtLmNzcyhcImxlZnRcIil9KSwoIXNbMF0uc3R5bGUud2lkdGh8fGkuZm9yY2VIZWxwZXJTaXplKSYmcy53aWR0aCh0aGlzLmN1cnJlbnRJdGVtLndpZHRoKCkpLCghc1swXS5zdHlsZS5oZWlnaHR8fGkuZm9yY2VIZWxwZXJTaXplKSYmcy5oZWlnaHQodGhpcy5jdXJyZW50SXRlbS5oZWlnaHQoKSksc30sX2FkanVzdE9mZnNldEZyb21IZWxwZXI6ZnVuY3Rpb24oZSl7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPWUuc3BsaXQoXCIgXCIpKSx0LmlzQXJyYXkoZSkmJihlPXtsZWZ0OitlWzBdLHRvcDorZVsxXXx8MH0pLFwibGVmdFwiaW4gZSYmKHRoaXMub2Zmc2V0LmNsaWNrLmxlZnQ9ZS5sZWZ0K3RoaXMubWFyZ2lucy5sZWZ0KSxcInJpZ2h0XCJpbiBlJiYodGhpcy5vZmZzZXQuY2xpY2subGVmdD10aGlzLmhlbHBlclByb3BvcnRpb25zLndpZHRoLWUucmlnaHQrdGhpcy5tYXJnaW5zLmxlZnQpLFwidG9wXCJpbiBlJiYodGhpcy5vZmZzZXQuY2xpY2sudG9wPWUudG9wK3RoaXMubWFyZ2lucy50b3ApLFwiYm90dG9tXCJpbiBlJiYodGhpcy5vZmZzZXQuY2xpY2sudG9wPXRoaXMuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LWUuYm90dG9tK3RoaXMubWFyZ2lucy50b3ApfSxfZ2V0UGFyZW50T2Zmc2V0OmZ1bmN0aW9uKCl7dGhpcy5vZmZzZXRQYXJlbnQ9dGhpcy5oZWxwZXIub2Zmc2V0UGFyZW50KCk7dmFyIGU9dGhpcy5vZmZzZXRQYXJlbnQub2Zmc2V0KCk7cmV0dXJuXCJhYnNvbHV0ZVwiPT09dGhpcy5jc3NQb3NpdGlvbiYmdGhpcy5zY3JvbGxQYXJlbnRbMF0hPT10aGlzLmRvY3VtZW50WzBdJiZ0LmNvbnRhaW5zKHRoaXMuc2Nyb2xsUGFyZW50WzBdLHRoaXMub2Zmc2V0UGFyZW50WzBdKSYmKGUubGVmdCs9dGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsTGVmdCgpLGUudG9wKz10aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxUb3AoKSksKHRoaXMub2Zmc2V0UGFyZW50WzBdPT09dGhpcy5kb2N1bWVudFswXS5ib2R5fHx0aGlzLm9mZnNldFBhcmVudFswXS50YWdOYW1lJiZcImh0bWxcIj09PXRoaXMub2Zmc2V0UGFyZW50WzBdLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmdC51aS5pZSkmJihlPXt0b3A6MCxsZWZ0OjB9KSx7dG9wOmUudG9wKyhwYXJzZUludCh0aGlzLm9mZnNldFBhcmVudC5jc3MoXCJib3JkZXJUb3BXaWR0aFwiKSwxMCl8fDApLGxlZnQ6ZS5sZWZ0KyhwYXJzZUludCh0aGlzLm9mZnNldFBhcmVudC5jc3MoXCJib3JkZXJMZWZ0V2lkdGhcIiksMTApfHwwKX19LF9nZXRSZWxhdGl2ZU9mZnNldDpmdW5jdGlvbigpe2lmKFwicmVsYXRpdmVcIj09PXRoaXMuY3NzUG9zaXRpb24pe3ZhciB0PXRoaXMuY3VycmVudEl0ZW0ucG9zaXRpb24oKTtyZXR1cm57dG9wOnQudG9wLShwYXJzZUludCh0aGlzLmhlbHBlci5jc3MoXCJ0b3BcIiksMTApfHwwKSt0aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxUb3AoKSxsZWZ0OnQubGVmdC0ocGFyc2VJbnQodGhpcy5oZWxwZXIuY3NzKFwibGVmdFwiKSwxMCl8fDApK3RoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbExlZnQoKX19cmV0dXJue3RvcDowLGxlZnQ6MH19LF9jYWNoZU1hcmdpbnM6ZnVuY3Rpb24oKXt0aGlzLm1hcmdpbnM9e2xlZnQ6cGFyc2VJbnQodGhpcy5jdXJyZW50SXRlbS5jc3MoXCJtYXJnaW5MZWZ0XCIpLDEwKXx8MCx0b3A6cGFyc2VJbnQodGhpcy5jdXJyZW50SXRlbS5jc3MoXCJtYXJnaW5Ub3BcIiksMTApfHwwfX0sX2NhY2hlSGVscGVyUHJvcG9ydGlvbnM6ZnVuY3Rpb24oKXt0aGlzLmhlbHBlclByb3BvcnRpb25zPXt3aWR0aDp0aGlzLmhlbHBlci5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuaGVscGVyLm91dGVySGVpZ2h0KCl9fSxfc2V0Q29udGFpbm1lbnQ6ZnVuY3Rpb24oKXt2YXIgZSxpLHMsbj10aGlzLm9wdGlvbnM7XCJwYXJlbnRcIj09PW4uY29udGFpbm1lbnQmJihuLmNvbnRhaW5tZW50PXRoaXMuaGVscGVyWzBdLnBhcmVudE5vZGUpLChcImRvY3VtZW50XCI9PT1uLmNvbnRhaW5tZW50fHxcIndpbmRvd1wiPT09bi5jb250YWlubWVudCkmJih0aGlzLmNvbnRhaW5tZW50PVswLXRoaXMub2Zmc2V0LnJlbGF0aXZlLmxlZnQtdGhpcy5vZmZzZXQucGFyZW50LmxlZnQsMC10aGlzLm9mZnNldC5yZWxhdGl2ZS50b3AtdGhpcy5vZmZzZXQucGFyZW50LnRvcCxcImRvY3VtZW50XCI9PT1uLmNvbnRhaW5tZW50P3RoaXMuZG9jdW1lbnQud2lkdGgoKTp0aGlzLndpbmRvdy53aWR0aCgpLXRoaXMuaGVscGVyUHJvcG9ydGlvbnMud2lkdGgtdGhpcy5tYXJnaW5zLmxlZnQsKFwiZG9jdW1lbnRcIj09PW4uY29udGFpbm1lbnQ/dGhpcy5kb2N1bWVudC5oZWlnaHQoKXx8ZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlLnNjcm9sbEhlaWdodDp0aGlzLndpbmRvdy5oZWlnaHQoKXx8dGhpcy5kb2N1bWVudFswXS5ib2R5LnBhcmVudE5vZGUuc2Nyb2xsSGVpZ2h0KS10aGlzLmhlbHBlclByb3BvcnRpb25zLmhlaWdodC10aGlzLm1hcmdpbnMudG9wXSksL14oZG9jdW1lbnR8d2luZG93fHBhcmVudCkkLy50ZXN0KG4uY29udGFpbm1lbnQpfHwoZT10KG4uY29udGFpbm1lbnQpWzBdLGk9dChuLmNvbnRhaW5tZW50KS5vZmZzZXQoKSxzPVwiaGlkZGVuXCIhPT10KGUpLmNzcyhcIm92ZXJmbG93XCIpLHRoaXMuY29udGFpbm1lbnQ9W2kubGVmdCsocGFyc2VJbnQodChlKS5jc3MoXCJib3JkZXJMZWZ0V2lkdGhcIiksMTApfHwwKSsocGFyc2VJbnQodChlKS5jc3MoXCJwYWRkaW5nTGVmdFwiKSwxMCl8fDApLXRoaXMubWFyZ2lucy5sZWZ0LGkudG9wKyhwYXJzZUludCh0KGUpLmNzcyhcImJvcmRlclRvcFdpZHRoXCIpLDEwKXx8MCkrKHBhcnNlSW50KHQoZSkuY3NzKFwicGFkZGluZ1RvcFwiKSwxMCl8fDApLXRoaXMubWFyZ2lucy50b3AsaS5sZWZ0KyhzP01hdGgubWF4KGUuc2Nyb2xsV2lkdGgsZS5vZmZzZXRXaWR0aCk6ZS5vZmZzZXRXaWR0aCktKHBhcnNlSW50KHQoZSkuY3NzKFwiYm9yZGVyTGVmdFdpZHRoXCIpLDEwKXx8MCktKHBhcnNlSW50KHQoZSkuY3NzKFwicGFkZGluZ1JpZ2h0XCIpLDEwKXx8MCktdGhpcy5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aC10aGlzLm1hcmdpbnMubGVmdCxpLnRvcCsocz9NYXRoLm1heChlLnNjcm9sbEhlaWdodCxlLm9mZnNldEhlaWdodCk6ZS5vZmZzZXRIZWlnaHQpLShwYXJzZUludCh0KGUpLmNzcyhcImJvcmRlclRvcFdpZHRoXCIpLDEwKXx8MCktKHBhcnNlSW50KHQoZSkuY3NzKFwicGFkZGluZ0JvdHRvbVwiKSwxMCl8fDApLXRoaXMuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LXRoaXMubWFyZ2lucy50b3BdKX0sX2NvbnZlcnRQb3NpdGlvblRvOmZ1bmN0aW9uKGUsaSl7aXx8KGk9dGhpcy5wb3NpdGlvbik7dmFyIHM9XCJhYnNvbHV0ZVwiPT09ZT8xOi0xLG49XCJhYnNvbHV0ZVwiIT09dGhpcy5jc3NQb3NpdGlvbnx8dGhpcy5zY3JvbGxQYXJlbnRbMF0hPT10aGlzLmRvY3VtZW50WzBdJiZ0LmNvbnRhaW5zKHRoaXMuc2Nyb2xsUGFyZW50WzBdLHRoaXMub2Zmc2V0UGFyZW50WzBdKT90aGlzLnNjcm9sbFBhcmVudDp0aGlzLm9mZnNldFBhcmVudCxvPS8oaHRtbHxib2R5KS9pLnRlc3QoblswXS50YWdOYW1lKTtyZXR1cm57dG9wOmkudG9wK3RoaXMub2Zmc2V0LnJlbGF0aXZlLnRvcCpzK3RoaXMub2Zmc2V0LnBhcmVudC50b3Aqcy0oXCJmaXhlZFwiPT09dGhpcy5jc3NQb3NpdGlvbj8tdGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsVG9wKCk6bz8wOm4uc2Nyb2xsVG9wKCkpKnMsbGVmdDppLmxlZnQrdGhpcy5vZmZzZXQucmVsYXRpdmUubGVmdCpzK3RoaXMub2Zmc2V0LnBhcmVudC5sZWZ0KnMtKFwiZml4ZWRcIj09PXRoaXMuY3NzUG9zaXRpb24/LXRoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbExlZnQoKTpvPzA6bi5zY3JvbGxMZWZ0KCkpKnN9fSxfZ2VuZXJhdGVQb3NpdGlvbjpmdW5jdGlvbihlKXt2YXIgaSxzLG49dGhpcy5vcHRpb25zLG89ZS5wYWdlWCxhPWUucGFnZVkscj1cImFic29sdXRlXCIhPT10aGlzLmNzc1Bvc2l0aW9ufHx0aGlzLnNjcm9sbFBhcmVudFswXSE9PXRoaXMuZG9jdW1lbnRbMF0mJnQuY29udGFpbnModGhpcy5zY3JvbGxQYXJlbnRbMF0sdGhpcy5vZmZzZXRQYXJlbnRbMF0pP3RoaXMuc2Nyb2xsUGFyZW50OnRoaXMub2Zmc2V0UGFyZW50LGg9LyhodG1sfGJvZHkpL2kudGVzdChyWzBdLnRhZ05hbWUpO3JldHVyblwicmVsYXRpdmVcIiE9PXRoaXMuY3NzUG9zaXRpb258fHRoaXMuc2Nyb2xsUGFyZW50WzBdIT09dGhpcy5kb2N1bWVudFswXSYmdGhpcy5zY3JvbGxQYXJlbnRbMF0hPT10aGlzLm9mZnNldFBhcmVudFswXXx8KHRoaXMub2Zmc2V0LnJlbGF0aXZlPXRoaXMuX2dldFJlbGF0aXZlT2Zmc2V0KCkpLHRoaXMub3JpZ2luYWxQb3NpdGlvbiYmKHRoaXMuY29udGFpbm1lbnQmJihlLnBhZ2VYLXRoaXMub2Zmc2V0LmNsaWNrLmxlZnQ8dGhpcy5jb250YWlubWVudFswXSYmKG89dGhpcy5jb250YWlubWVudFswXSt0aGlzLm9mZnNldC5jbGljay5sZWZ0KSxlLnBhZ2VZLXRoaXMub2Zmc2V0LmNsaWNrLnRvcDx0aGlzLmNvbnRhaW5tZW50WzFdJiYoYT10aGlzLmNvbnRhaW5tZW50WzFdK3RoaXMub2Zmc2V0LmNsaWNrLnRvcCksZS5wYWdlWC10aGlzLm9mZnNldC5jbGljay5sZWZ0PnRoaXMuY29udGFpbm1lbnRbMl0mJihvPXRoaXMuY29udGFpbm1lbnRbMl0rdGhpcy5vZmZzZXQuY2xpY2subGVmdCksZS5wYWdlWS10aGlzLm9mZnNldC5jbGljay50b3A+dGhpcy5jb250YWlubWVudFszXSYmKGE9dGhpcy5jb250YWlubWVudFszXSt0aGlzLm9mZnNldC5jbGljay50b3ApKSxuLmdyaWQmJihpPXRoaXMub3JpZ2luYWxQYWdlWStNYXRoLnJvdW5kKChhLXRoaXMub3JpZ2luYWxQYWdlWSkvbi5ncmlkWzFdKSpuLmdyaWRbMV0sYT10aGlzLmNvbnRhaW5tZW50P2ktdGhpcy5vZmZzZXQuY2xpY2sudG9wPj10aGlzLmNvbnRhaW5tZW50WzFdJiZpLXRoaXMub2Zmc2V0LmNsaWNrLnRvcDw9dGhpcy5jb250YWlubWVudFszXT9pOmktdGhpcy5vZmZzZXQuY2xpY2sudG9wPj10aGlzLmNvbnRhaW5tZW50WzFdP2ktbi5ncmlkWzFdOmkrbi5ncmlkWzFdOmkscz10aGlzLm9yaWdpbmFsUGFnZVgrTWF0aC5yb3VuZCgoby10aGlzLm9yaWdpbmFsUGFnZVgpL24uZ3JpZFswXSkqbi5ncmlkWzBdLG89dGhpcy5jb250YWlubWVudD9zLXRoaXMub2Zmc2V0LmNsaWNrLmxlZnQ+PXRoaXMuY29udGFpbm1lbnRbMF0mJnMtdGhpcy5vZmZzZXQuY2xpY2subGVmdDw9dGhpcy5jb250YWlubWVudFsyXT9zOnMtdGhpcy5vZmZzZXQuY2xpY2subGVmdD49dGhpcy5jb250YWlubWVudFswXT9zLW4uZ3JpZFswXTpzK24uZ3JpZFswXTpzKSkse3RvcDphLXRoaXMub2Zmc2V0LmNsaWNrLnRvcC10aGlzLm9mZnNldC5yZWxhdGl2ZS50b3AtdGhpcy5vZmZzZXQucGFyZW50LnRvcCsoXCJmaXhlZFwiPT09dGhpcy5jc3NQb3NpdGlvbj8tdGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsVG9wKCk6aD8wOnIuc2Nyb2xsVG9wKCkpLGxlZnQ6by10aGlzLm9mZnNldC5jbGljay5sZWZ0LXRoaXMub2Zmc2V0LnJlbGF0aXZlLmxlZnQtdGhpcy5vZmZzZXQucGFyZW50LmxlZnQrKFwiZml4ZWRcIj09PXRoaXMuY3NzUG9zaXRpb24/LXRoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbExlZnQoKTpoPzA6ci5zY3JvbGxMZWZ0KCkpfX0sX3JlYXJyYW5nZTpmdW5jdGlvbih0LGUsaSxzKXtpP2lbMF0uYXBwZW5kQ2hpbGQodGhpcy5wbGFjZWhvbGRlclswXSk6ZS5pdGVtWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMucGxhY2Vob2xkZXJbMF0sXCJkb3duXCI9PT10aGlzLmRpcmVjdGlvbj9lLml0ZW1bMF06ZS5pdGVtWzBdLm5leHRTaWJsaW5nKSx0aGlzLmNvdW50ZXI9dGhpcy5jb3VudGVyPysrdGhpcy5jb3VudGVyOjE7dmFyIG49dGhpcy5jb3VudGVyO3RoaXMuX2RlbGF5KGZ1bmN0aW9uKCl7bj09PXRoaXMuY291bnRlciYmdGhpcy5yZWZyZXNoUG9zaXRpb25zKCFzKX0pfSxfY2xlYXI6ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBpKHQsZSxpKXtyZXR1cm4gZnVuY3Rpb24ocyl7aS5fdHJpZ2dlcih0LHMsZS5fdWlIYXNoKGUpKX19dGhpcy5yZXZlcnRpbmc9ITE7dmFyIHMsbj1bXTtpZighdGhpcy5fbm9GaW5hbFNvcnQmJnRoaXMuY3VycmVudEl0ZW0ucGFyZW50KCkubGVuZ3RoJiZ0aGlzLnBsYWNlaG9sZGVyLmJlZm9yZSh0aGlzLmN1cnJlbnRJdGVtKSx0aGlzLl9ub0ZpbmFsU29ydD1udWxsLHRoaXMuaGVscGVyWzBdPT09dGhpcy5jdXJyZW50SXRlbVswXSl7Zm9yKHMgaW4gdGhpcy5fc3RvcmVkQ1NTKShcImF1dG9cIj09PXRoaXMuX3N0b3JlZENTU1tzXXx8XCJzdGF0aWNcIj09PXRoaXMuX3N0b3JlZENTU1tzXSkmJih0aGlzLl9zdG9yZWRDU1Nbc109XCJcIik7dGhpcy5jdXJyZW50SXRlbS5jc3ModGhpcy5fc3RvcmVkQ1NTKSx0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLmN1cnJlbnRJdGVtLFwidWktc29ydGFibGUtaGVscGVyXCIpfWVsc2UgdGhpcy5jdXJyZW50SXRlbS5zaG93KCk7Zm9yKHRoaXMuZnJvbU91dHNpZGUmJiFlJiZuLnB1c2goZnVuY3Rpb24odCl7dGhpcy5fdHJpZ2dlcihcInJlY2VpdmVcIix0LHRoaXMuX3VpSGFzaCh0aGlzLmZyb21PdXRzaWRlKSl9KSwhdGhpcy5mcm9tT3V0c2lkZSYmdGhpcy5kb21Qb3NpdGlvbi5wcmV2PT09dGhpcy5jdXJyZW50SXRlbS5wcmV2KCkubm90KFwiLnVpLXNvcnRhYmxlLWhlbHBlclwiKVswXSYmdGhpcy5kb21Qb3NpdGlvbi5wYXJlbnQ9PT10aGlzLmN1cnJlbnRJdGVtLnBhcmVudCgpWzBdfHxlfHxuLnB1c2goZnVuY3Rpb24odCl7dGhpcy5fdHJpZ2dlcihcInVwZGF0ZVwiLHQsdGhpcy5fdWlIYXNoKCkpfSksdGhpcyE9PXRoaXMuY3VycmVudENvbnRhaW5lciYmKGV8fChuLnB1c2goZnVuY3Rpb24odCl7dGhpcy5fdHJpZ2dlcihcInJlbW92ZVwiLHQsdGhpcy5fdWlIYXNoKCkpfSksbi5wdXNoKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXt0Ll90cmlnZ2VyKFwicmVjZWl2ZVwiLGUsdGhpcy5fdWlIYXNoKHRoaXMpKX19LmNhbGwodGhpcyx0aGlzLmN1cnJlbnRDb250YWluZXIpKSxuLnB1c2goZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3QuX3RyaWdnZXIoXCJ1cGRhdGVcIixlLHRoaXMuX3VpSGFzaCh0aGlzKSl9fS5jYWxsKHRoaXMsdGhpcy5jdXJyZW50Q29udGFpbmVyKSkpKSxzPXRoaXMuY29udGFpbmVycy5sZW5ndGgtMTtzPj0wO3MtLSllfHxuLnB1c2goaShcImRlYWN0aXZhdGVcIix0aGlzLHRoaXMuY29udGFpbmVyc1tzXSkpLHRoaXMuY29udGFpbmVyc1tzXS5jb250YWluZXJDYWNoZS5vdmVyJiYobi5wdXNoKGkoXCJvdXRcIix0aGlzLHRoaXMuY29udGFpbmVyc1tzXSkpLHRoaXMuY29udGFpbmVyc1tzXS5jb250YWluZXJDYWNoZS5vdmVyPTApO2lmKHRoaXMuc3RvcmVkQ3Vyc29yJiYodGhpcy5kb2N1bWVudC5maW5kKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIix0aGlzLnN0b3JlZEN1cnNvciksdGhpcy5zdG9yZWRTdHlsZXNoZWV0LnJlbW92ZSgpKSx0aGlzLl9zdG9yZWRPcGFjaXR5JiZ0aGlzLmhlbHBlci5jc3MoXCJvcGFjaXR5XCIsdGhpcy5fc3RvcmVkT3BhY2l0eSksdGhpcy5fc3RvcmVkWkluZGV4JiZ0aGlzLmhlbHBlci5jc3MoXCJ6SW5kZXhcIixcImF1dG9cIj09PXRoaXMuX3N0b3JlZFpJbmRleD9cIlwiOnRoaXMuX3N0b3JlZFpJbmRleCksdGhpcy5kcmFnZ2luZz0hMSxlfHx0aGlzLl90cmlnZ2VyKFwiYmVmb3JlU3RvcFwiLHQsdGhpcy5fdWlIYXNoKCkpLHRoaXMucGxhY2Vob2xkZXJbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBsYWNlaG9sZGVyWzBdKSx0aGlzLmNhbmNlbEhlbHBlclJlbW92YWx8fCh0aGlzLmhlbHBlclswXSE9PXRoaXMuY3VycmVudEl0ZW1bMF0mJnRoaXMuaGVscGVyLnJlbW92ZSgpLHRoaXMuaGVscGVyPW51bGwpLCFlKXtmb3Iocz0wO24ubGVuZ3RoPnM7cysrKW5bc10uY2FsbCh0aGlzLHQpO3RoaXMuX3RyaWdnZXIoXCJzdG9wXCIsdCx0aGlzLl91aUhhc2goKSl9cmV0dXJuIHRoaXMuZnJvbU91dHNpZGU9ITEsIXRoaXMuY2FuY2VsSGVscGVyUmVtb3ZhbH0sX3RyaWdnZXI6ZnVuY3Rpb24oKXt0LldpZGdldC5wcm90b3R5cGUuX3RyaWdnZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpPT09ITEmJnRoaXMuY2FuY2VsKCl9LF91aUhhc2g6ZnVuY3Rpb24oZSl7dmFyIGk9ZXx8dGhpcztyZXR1cm57aGVscGVyOmkuaGVscGVyLHBsYWNlaG9sZGVyOmkucGxhY2Vob2xkZXJ8fHQoW10pLHBvc2l0aW9uOmkucG9zaXRpb24sb3JpZ2luYWxQb3NpdGlvbjppLm9yaWdpbmFsUG9zaXRpb24sb2Zmc2V0OmkucG9zaXRpb25BYnMsaXRlbTppLmN1cnJlbnRJdGVtLHNlbmRlcjplP2UuZWxlbWVudDpudWxsfX19KSx0LndpZGdldChcInVpLmFjY29yZGlvblwiLHt2ZXJzaW9uOlwiMS4xMi4xXCIsb3B0aW9uczp7YWN0aXZlOjAsYW5pbWF0ZTp7fSxjbGFzc2VzOntcInVpLWFjY29yZGlvbi1oZWFkZXJcIjpcInVpLWNvcm5lci10b3BcIixcInVpLWFjY29yZGlvbi1oZWFkZXItY29sbGFwc2VkXCI6XCJ1aS1jb3JuZXItYWxsXCIsXCJ1aS1hY2NvcmRpb24tY29udGVudFwiOlwidWktY29ybmVyLWJvdHRvbVwifSxjb2xsYXBzaWJsZTohMSxldmVudDpcImNsaWNrXCIsaGVhZGVyOlwiPiBsaSA+IDpmaXJzdC1jaGlsZCwgPiA6bm90KGxpKTpldmVuXCIsaGVpZ2h0U3R5bGU6XCJhdXRvXCIsaWNvbnM6e2FjdGl2ZUhlYWRlcjpcInVpLWljb24tdHJpYW5nbGUtMS1zXCIsaGVhZGVyOlwidWktaWNvbi10cmlhbmdsZS0xLWVcIn0sYWN0aXZhdGU6bnVsbCxiZWZvcmVBY3RpdmF0ZTpudWxsfSxoaWRlUHJvcHM6e2JvcmRlclRvcFdpZHRoOlwiaGlkZVwiLGJvcmRlckJvdHRvbVdpZHRoOlwiaGlkZVwiLHBhZGRpbmdUb3A6XCJoaWRlXCIscGFkZGluZ0JvdHRvbTpcImhpZGVcIixoZWlnaHQ6XCJoaWRlXCJ9LHNob3dQcm9wczp7Ym9yZGVyVG9wV2lkdGg6XCJzaG93XCIsYm9yZGVyQm90dG9tV2lkdGg6XCJzaG93XCIscGFkZGluZ1RvcDpcInNob3dcIixwYWRkaW5nQm90dG9tOlwic2hvd1wiLGhlaWdodDpcInNob3dcIn0sX2NyZWF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3B0aW9uczt0aGlzLnByZXZTaG93PXRoaXMucHJldkhpZGU9dCgpLHRoaXMuX2FkZENsYXNzKFwidWktYWNjb3JkaW9uXCIsXCJ1aS13aWRnZXQgdWktaGVscGVyLXJlc2V0XCIpLHRoaXMuZWxlbWVudC5hdHRyKFwicm9sZVwiLFwidGFibGlzdFwiKSxlLmNvbGxhcHNpYmxlfHxlLmFjdGl2ZSE9PSExJiZudWxsIT1lLmFjdGl2ZXx8KGUuYWN0aXZlPTApLHRoaXMuX3Byb2Nlc3NQYW5lbHMoKSwwPmUuYWN0aXZlJiYoZS5hY3RpdmUrPXRoaXMuaGVhZGVycy5sZW5ndGgpLHRoaXMuX3JlZnJlc2goKX0sX2dldENyZWF0ZUV2ZW50RGF0YTpmdW5jdGlvbigpe3JldHVybntoZWFkZXI6dGhpcy5hY3RpdmUscGFuZWw6dGhpcy5hY3RpdmUubGVuZ3RoP3RoaXMuYWN0aXZlLm5leHQoKTp0KCl9fSxfY3JlYXRlSWNvbnM6ZnVuY3Rpb24oKXt2YXIgZSxpLHM9dGhpcy5vcHRpb25zLmljb25zO3MmJihlPXQoXCI8c3Bhbj5cIiksdGhpcy5fYWRkQ2xhc3MoZSxcInVpLWFjY29yZGlvbi1oZWFkZXItaWNvblwiLFwidWktaWNvbiBcIitzLmhlYWRlciksZS5wcmVwZW5kVG8odGhpcy5oZWFkZXJzKSxpPXRoaXMuYWN0aXZlLmNoaWxkcmVuKFwiLnVpLWFjY29yZGlvbi1oZWFkZXItaWNvblwiKSx0aGlzLl9yZW1vdmVDbGFzcyhpLHMuaGVhZGVyKS5fYWRkQ2xhc3MoaSxudWxsLHMuYWN0aXZlSGVhZGVyKS5fYWRkQ2xhc3ModGhpcy5oZWFkZXJzLFwidWktYWNjb3JkaW9uLWljb25zXCIpKVxufSxfZGVzdHJveUljb25zOmZ1bmN0aW9uKCl7dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5oZWFkZXJzLFwidWktYWNjb3JkaW9uLWljb25zXCIpLHRoaXMuaGVhZGVycy5jaGlsZHJlbihcIi51aS1hY2NvcmRpb24taGVhZGVyLWljb25cIikucmVtb3ZlKCl9LF9kZXN0cm95OmZ1bmN0aW9uKCl7dmFyIHQ7dGhpcy5lbGVtZW50LnJlbW92ZUF0dHIoXCJyb2xlXCIpLHRoaXMuaGVhZGVycy5yZW1vdmVBdHRyKFwicm9sZSBhcmlhLWV4cGFuZGVkIGFyaWEtc2VsZWN0ZWQgYXJpYS1jb250cm9scyB0YWJJbmRleFwiKS5yZW1vdmVVbmlxdWVJZCgpLHRoaXMuX2Rlc3Ryb3lJY29ucygpLHQ9dGhpcy5oZWFkZXJzLm5leHQoKS5jc3MoXCJkaXNwbGF5XCIsXCJcIikucmVtb3ZlQXR0cihcInJvbGUgYXJpYS1oaWRkZW4gYXJpYS1sYWJlbGxlZGJ5XCIpLnJlbW92ZVVuaXF1ZUlkKCksXCJjb250ZW50XCIhPT10aGlzLm9wdGlvbnMuaGVpZ2h0U3R5bGUmJnQuY3NzKFwiaGVpZ2h0XCIsXCJcIil9LF9zZXRPcHRpb246ZnVuY3Rpb24odCxlKXtyZXR1cm5cImFjdGl2ZVwiPT09dD8odGhpcy5fYWN0aXZhdGUoZSksdm9pZCAwKTooXCJldmVudFwiPT09dCYmKHRoaXMub3B0aW9ucy5ldmVudCYmdGhpcy5fb2ZmKHRoaXMuaGVhZGVycyx0aGlzLm9wdGlvbnMuZXZlbnQpLHRoaXMuX3NldHVwRXZlbnRzKGUpKSx0aGlzLl9zdXBlcih0LGUpLFwiY29sbGFwc2libGVcIiE9PXR8fGV8fHRoaXMub3B0aW9ucy5hY3RpdmUhPT0hMXx8dGhpcy5fYWN0aXZhdGUoMCksXCJpY29uc1wiPT09dCYmKHRoaXMuX2Rlc3Ryb3lJY29ucygpLGUmJnRoaXMuX2NyZWF0ZUljb25zKCkpLHZvaWQgMCl9LF9zZXRPcHRpb25EaXNhYmxlZDpmdW5jdGlvbih0KXt0aGlzLl9zdXBlcih0KSx0aGlzLmVsZW1lbnQuYXR0cihcImFyaWEtZGlzYWJsZWRcIix0KSx0aGlzLl90b2dnbGVDbGFzcyhudWxsLFwidWktc3RhdGUtZGlzYWJsZWRcIiwhIXQpLHRoaXMuX3RvZ2dsZUNsYXNzKHRoaXMuaGVhZGVycy5hZGQodGhpcy5oZWFkZXJzLm5leHQoKSksbnVsbCxcInVpLXN0YXRlLWRpc2FibGVkXCIsISF0KX0sX2tleWRvd246ZnVuY3Rpb24oZSl7aWYoIWUuYWx0S2V5JiYhZS5jdHJsS2V5KXt2YXIgaT10LnVpLmtleUNvZGUscz10aGlzLmhlYWRlcnMubGVuZ3RoLG49dGhpcy5oZWFkZXJzLmluZGV4KGUudGFyZ2V0KSxvPSExO3N3aXRjaChlLmtleUNvZGUpe2Nhc2UgaS5SSUdIVDpjYXNlIGkuRE9XTjpvPXRoaXMuaGVhZGVyc1sobisxKSVzXTticmVhaztjYXNlIGkuTEVGVDpjYXNlIGkuVVA6bz10aGlzLmhlYWRlcnNbKG4tMStzKSVzXTticmVhaztjYXNlIGkuU1BBQ0U6Y2FzZSBpLkVOVEVSOnRoaXMuX2V2ZW50SGFuZGxlcihlKTticmVhaztjYXNlIGkuSE9NRTpvPXRoaXMuaGVhZGVyc1swXTticmVhaztjYXNlIGkuRU5EOm89dGhpcy5oZWFkZXJzW3MtMV19byYmKHQoZS50YXJnZXQpLmF0dHIoXCJ0YWJJbmRleFwiLC0xKSx0KG8pLmF0dHIoXCJ0YWJJbmRleFwiLDApLHQobykudHJpZ2dlcihcImZvY3VzXCIpLGUucHJldmVudERlZmF1bHQoKSl9fSxfcGFuZWxLZXlEb3duOmZ1bmN0aW9uKGUpe2Uua2V5Q29kZT09PXQudWkua2V5Q29kZS5VUCYmZS5jdHJsS2V5JiZ0KGUuY3VycmVudFRhcmdldCkucHJldigpLnRyaWdnZXIoXCJmb2N1c1wiKX0scmVmcmVzaDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3B0aW9uczt0aGlzLl9wcm9jZXNzUGFuZWxzKCksZS5hY3RpdmU9PT0hMSYmZS5jb2xsYXBzaWJsZT09PSEwfHwhdGhpcy5oZWFkZXJzLmxlbmd0aD8oZS5hY3RpdmU9ITEsdGhpcy5hY3RpdmU9dCgpKTplLmFjdGl2ZT09PSExP3RoaXMuX2FjdGl2YXRlKDApOnRoaXMuYWN0aXZlLmxlbmd0aCYmIXQuY29udGFpbnModGhpcy5lbGVtZW50WzBdLHRoaXMuYWN0aXZlWzBdKT90aGlzLmhlYWRlcnMubGVuZ3RoPT09dGhpcy5oZWFkZXJzLmZpbmQoXCIudWktc3RhdGUtZGlzYWJsZWRcIikubGVuZ3RoPyhlLmFjdGl2ZT0hMSx0aGlzLmFjdGl2ZT10KCkpOnRoaXMuX2FjdGl2YXRlKE1hdGgubWF4KDAsZS5hY3RpdmUtMSkpOmUuYWN0aXZlPXRoaXMuaGVhZGVycy5pbmRleCh0aGlzLmFjdGl2ZSksdGhpcy5fZGVzdHJveUljb25zKCksdGhpcy5fcmVmcmVzaCgpfSxfcHJvY2Vzc1BhbmVsczpmdW5jdGlvbigpe3ZhciB0PXRoaXMuaGVhZGVycyxlPXRoaXMucGFuZWxzO3RoaXMuaGVhZGVycz10aGlzLmVsZW1lbnQuZmluZCh0aGlzLm9wdGlvbnMuaGVhZGVyKSx0aGlzLl9hZGRDbGFzcyh0aGlzLmhlYWRlcnMsXCJ1aS1hY2NvcmRpb24taGVhZGVyIHVpLWFjY29yZGlvbi1oZWFkZXItY29sbGFwc2VkXCIsXCJ1aS1zdGF0ZS1kZWZhdWx0XCIpLHRoaXMucGFuZWxzPXRoaXMuaGVhZGVycy5uZXh0KCkuZmlsdGVyKFwiOm5vdCgudWktYWNjb3JkaW9uLWNvbnRlbnQtYWN0aXZlKVwiKS5oaWRlKCksdGhpcy5fYWRkQ2xhc3ModGhpcy5wYW5lbHMsXCJ1aS1hY2NvcmRpb24tY29udGVudFwiLFwidWktaGVscGVyLXJlc2V0IHVpLXdpZGdldC1jb250ZW50XCIpLGUmJih0aGlzLl9vZmYodC5ub3QodGhpcy5oZWFkZXJzKSksdGhpcy5fb2ZmKGUubm90KHRoaXMucGFuZWxzKSkpfSxfcmVmcmVzaDpmdW5jdGlvbigpe3ZhciBlLGk9dGhpcy5vcHRpb25zLHM9aS5oZWlnaHRTdHlsZSxuPXRoaXMuZWxlbWVudC5wYXJlbnQoKTt0aGlzLmFjdGl2ZT10aGlzLl9maW5kQWN0aXZlKGkuYWN0aXZlKSx0aGlzLl9hZGRDbGFzcyh0aGlzLmFjdGl2ZSxcInVpLWFjY29yZGlvbi1oZWFkZXItYWN0aXZlXCIsXCJ1aS1zdGF0ZS1hY3RpdmVcIikuX3JlbW92ZUNsYXNzKHRoaXMuYWN0aXZlLFwidWktYWNjb3JkaW9uLWhlYWRlci1jb2xsYXBzZWRcIiksdGhpcy5fYWRkQ2xhc3ModGhpcy5hY3RpdmUubmV4dCgpLFwidWktYWNjb3JkaW9uLWNvbnRlbnQtYWN0aXZlXCIpLHRoaXMuYWN0aXZlLm5leHQoKS5zaG93KCksdGhpcy5oZWFkZXJzLmF0dHIoXCJyb2xlXCIsXCJ0YWJcIikuZWFjaChmdW5jdGlvbigpe3ZhciBlPXQodGhpcyksaT1lLnVuaXF1ZUlkKCkuYXR0cihcImlkXCIpLHM9ZS5uZXh0KCksbj1zLnVuaXF1ZUlkKCkuYXR0cihcImlkXCIpO2UuYXR0cihcImFyaWEtY29udHJvbHNcIixuKSxzLmF0dHIoXCJhcmlhLWxhYmVsbGVkYnlcIixpKX0pLm5leHQoKS5hdHRyKFwicm9sZVwiLFwidGFicGFuZWxcIiksdGhpcy5oZWFkZXJzLm5vdCh0aGlzLmFjdGl2ZSkuYXR0cih7XCJhcmlhLXNlbGVjdGVkXCI6XCJmYWxzZVwiLFwiYXJpYS1leHBhbmRlZFwiOlwiZmFsc2VcIix0YWJJbmRleDotMX0pLm5leHQoKS5hdHRyKHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9KS5oaWRlKCksdGhpcy5hY3RpdmUubGVuZ3RoP3RoaXMuYWN0aXZlLmF0dHIoe1wiYXJpYS1zZWxlY3RlZFwiOlwidHJ1ZVwiLFwiYXJpYS1leHBhbmRlZFwiOlwidHJ1ZVwiLHRhYkluZGV4OjB9KS5uZXh0KCkuYXR0cih7XCJhcmlhLWhpZGRlblwiOlwiZmFsc2VcIn0pOnRoaXMuaGVhZGVycy5lcSgwKS5hdHRyKFwidGFiSW5kZXhcIiwwKSx0aGlzLl9jcmVhdGVJY29ucygpLHRoaXMuX3NldHVwRXZlbnRzKGkuZXZlbnQpLFwiZmlsbFwiPT09cz8oZT1uLmhlaWdodCgpLHRoaXMuZWxlbWVudC5zaWJsaW5ncyhcIjp2aXNpYmxlXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgaT10KHRoaXMpLHM9aS5jc3MoXCJwb3NpdGlvblwiKTtcImFic29sdXRlXCIhPT1zJiZcImZpeGVkXCIhPT1zJiYoZS09aS5vdXRlckhlaWdodCghMCkpfSksdGhpcy5oZWFkZXJzLmVhY2goZnVuY3Rpb24oKXtlLT10KHRoaXMpLm91dGVySGVpZ2h0KCEwKX0pLHRoaXMuaGVhZGVycy5uZXh0KCkuZWFjaChmdW5jdGlvbigpe3QodGhpcykuaGVpZ2h0KE1hdGgubWF4KDAsZS10KHRoaXMpLmlubmVySGVpZ2h0KCkrdCh0aGlzKS5oZWlnaHQoKSkpfSkuY3NzKFwib3ZlcmZsb3dcIixcImF1dG9cIikpOlwiYXV0b1wiPT09cyYmKGU9MCx0aGlzLmhlYWRlcnMubmV4dCgpLmVhY2goZnVuY3Rpb24oKXt2YXIgaT10KHRoaXMpLmlzKFwiOnZpc2libGVcIik7aXx8dCh0aGlzKS5zaG93KCksZT1NYXRoLm1heChlLHQodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIikuaGVpZ2h0KCkpLGl8fHQodGhpcykuaGlkZSgpfSkuaGVpZ2h0KGUpKX0sX2FjdGl2YXRlOmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMuX2ZpbmRBY3RpdmUoZSlbMF07aSE9PXRoaXMuYWN0aXZlWzBdJiYoaT1pfHx0aGlzLmFjdGl2ZVswXSx0aGlzLl9ldmVudEhhbmRsZXIoe3RhcmdldDppLGN1cnJlbnRUYXJnZXQ6aSxwcmV2ZW50RGVmYXVsdDp0Lm5vb3B9KSl9LF9maW5kQWN0aXZlOmZ1bmN0aW9uKGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlP3RoaXMuaGVhZGVycy5lcShlKTp0KCl9LF9zZXR1cEV2ZW50czpmdW5jdGlvbihlKXt2YXIgaT17a2V5ZG93bjpcIl9rZXlkb3duXCJ9O2UmJnQuZWFjaChlLnNwbGl0KFwiIFwiKSxmdW5jdGlvbih0LGUpe2lbZV09XCJfZXZlbnRIYW5kbGVyXCJ9KSx0aGlzLl9vZmYodGhpcy5oZWFkZXJzLmFkZCh0aGlzLmhlYWRlcnMubmV4dCgpKSksdGhpcy5fb24odGhpcy5oZWFkZXJzLGkpLHRoaXMuX29uKHRoaXMuaGVhZGVycy5uZXh0KCkse2tleWRvd246XCJfcGFuZWxLZXlEb3duXCJ9KSx0aGlzLl9ob3ZlcmFibGUodGhpcy5oZWFkZXJzKSx0aGlzLl9mb2N1c2FibGUodGhpcy5oZWFkZXJzKX0sX2V2ZW50SGFuZGxlcjpmdW5jdGlvbihlKXt2YXIgaSxzLG49dGhpcy5vcHRpb25zLG89dGhpcy5hY3RpdmUsYT10KGUuY3VycmVudFRhcmdldCkscj1hWzBdPT09b1swXSxoPXImJm4uY29sbGFwc2libGUsbD1oP3QoKTphLm5leHQoKSx1PW8ubmV4dCgpLGM9e29sZEhlYWRlcjpvLG9sZFBhbmVsOnUsbmV3SGVhZGVyOmg/dCgpOmEsbmV3UGFuZWw6bH07ZS5wcmV2ZW50RGVmYXVsdCgpLHImJiFuLmNvbGxhcHNpYmxlfHx0aGlzLl90cmlnZ2VyKFwiYmVmb3JlQWN0aXZhdGVcIixlLGMpPT09ITF8fChuLmFjdGl2ZT1oPyExOnRoaXMuaGVhZGVycy5pbmRleChhKSx0aGlzLmFjdGl2ZT1yP3QoKTphLHRoaXMuX3RvZ2dsZShjKSx0aGlzLl9yZW1vdmVDbGFzcyhvLFwidWktYWNjb3JkaW9uLWhlYWRlci1hY3RpdmVcIixcInVpLXN0YXRlLWFjdGl2ZVwiKSxuLmljb25zJiYoaT1vLmNoaWxkcmVuKFwiLnVpLWFjY29yZGlvbi1oZWFkZXItaWNvblwiKSx0aGlzLl9yZW1vdmVDbGFzcyhpLG51bGwsbi5pY29ucy5hY3RpdmVIZWFkZXIpLl9hZGRDbGFzcyhpLG51bGwsbi5pY29ucy5oZWFkZXIpKSxyfHwodGhpcy5fcmVtb3ZlQ2xhc3MoYSxcInVpLWFjY29yZGlvbi1oZWFkZXItY29sbGFwc2VkXCIpLl9hZGRDbGFzcyhhLFwidWktYWNjb3JkaW9uLWhlYWRlci1hY3RpdmVcIixcInVpLXN0YXRlLWFjdGl2ZVwiKSxuLmljb25zJiYocz1hLmNoaWxkcmVuKFwiLnVpLWFjY29yZGlvbi1oZWFkZXItaWNvblwiKSx0aGlzLl9yZW1vdmVDbGFzcyhzLG51bGwsbi5pY29ucy5oZWFkZXIpLl9hZGRDbGFzcyhzLG51bGwsbi5pY29ucy5hY3RpdmVIZWFkZXIpKSx0aGlzLl9hZGRDbGFzcyhhLm5leHQoKSxcInVpLWFjY29yZGlvbi1jb250ZW50LWFjdGl2ZVwiKSkpfSxfdG9nZ2xlOmZ1bmN0aW9uKGUpe3ZhciBpPWUubmV3UGFuZWwscz10aGlzLnByZXZTaG93Lmxlbmd0aD90aGlzLnByZXZTaG93OmUub2xkUGFuZWw7dGhpcy5wcmV2U2hvdy5hZGQodGhpcy5wcmV2SGlkZSkuc3RvcCghMCwhMCksdGhpcy5wcmV2U2hvdz1pLHRoaXMucHJldkhpZGU9cyx0aGlzLm9wdGlvbnMuYW5pbWF0ZT90aGlzLl9hbmltYXRlKGkscyxlKToocy5oaWRlKCksaS5zaG93KCksdGhpcy5fdG9nZ2xlQ29tcGxldGUoZSkpLHMuYXR0cih7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifSkscy5wcmV2KCkuYXR0cih7XCJhcmlhLXNlbGVjdGVkXCI6XCJmYWxzZVwiLFwiYXJpYS1leHBhbmRlZFwiOlwiZmFsc2VcIn0pLGkubGVuZ3RoJiZzLmxlbmd0aD9zLnByZXYoKS5hdHRyKHt0YWJJbmRleDotMSxcImFyaWEtZXhwYW5kZWRcIjpcImZhbHNlXCJ9KTppLmxlbmd0aCYmdGhpcy5oZWFkZXJzLmZpbHRlcihmdW5jdGlvbigpe3JldHVybiAwPT09cGFyc2VJbnQodCh0aGlzKS5hdHRyKFwidGFiSW5kZXhcIiksMTApfSkuYXR0cihcInRhYkluZGV4XCIsLTEpLGkuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKS5wcmV2KCkuYXR0cih7XCJhcmlhLXNlbGVjdGVkXCI6XCJ0cnVlXCIsXCJhcmlhLWV4cGFuZGVkXCI6XCJ0cnVlXCIsdGFiSW5kZXg6MH0pfSxfYW5pbWF0ZTpmdW5jdGlvbih0LGUsaSl7dmFyIHMsbixvLGE9dGhpcyxyPTAsaD10LmNzcyhcImJveC1zaXppbmdcIiksbD10Lmxlbmd0aCYmKCFlLmxlbmd0aHx8dC5pbmRleCgpPGUuaW5kZXgoKSksdT10aGlzLm9wdGlvbnMuYW5pbWF0ZXx8e30sYz1sJiZ1LmRvd258fHUsZD1mdW5jdGlvbigpe2EuX3RvZ2dsZUNvbXBsZXRlKGkpfTtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgYyYmKG89YyksXCJzdHJpbmdcIj09dHlwZW9mIGMmJihuPWMpLG49bnx8Yy5lYXNpbmd8fHUuZWFzaW5nLG89b3x8Yy5kdXJhdGlvbnx8dS5kdXJhdGlvbixlLmxlbmd0aD90Lmxlbmd0aD8ocz10LnNob3coKS5vdXRlckhlaWdodCgpLGUuYW5pbWF0ZSh0aGlzLmhpZGVQcm9wcyx7ZHVyYXRpb246byxlYXNpbmc6bixzdGVwOmZ1bmN0aW9uKHQsZSl7ZS5ub3c9TWF0aC5yb3VuZCh0KX19KSx0LmhpZGUoKS5hbmltYXRlKHRoaXMuc2hvd1Byb3BzLHtkdXJhdGlvbjpvLGVhc2luZzpuLGNvbXBsZXRlOmQsc3RlcDpmdW5jdGlvbih0LGkpe2kubm93PU1hdGgucm91bmQodCksXCJoZWlnaHRcIiE9PWkucHJvcD9cImNvbnRlbnQtYm94XCI9PT1oJiYocis9aS5ub3cpOlwiY29udGVudFwiIT09YS5vcHRpb25zLmhlaWdodFN0eWxlJiYoaS5ub3c9TWF0aC5yb3VuZChzLWUub3V0ZXJIZWlnaHQoKS1yKSxyPTApfX0pLHZvaWQgMCk6ZS5hbmltYXRlKHRoaXMuaGlkZVByb3BzLG8sbixkKTp0LmFuaW1hdGUodGhpcy5zaG93UHJvcHMsbyxuLGQpfSxfdG9nZ2xlQ29tcGxldGU6ZnVuY3Rpb24odCl7dmFyIGU9dC5vbGRQYW5lbCxpPWUucHJldigpO3RoaXMuX3JlbW92ZUNsYXNzKGUsXCJ1aS1hY2NvcmRpb24tY29udGVudC1hY3RpdmVcIiksdGhpcy5fcmVtb3ZlQ2xhc3MoaSxcInVpLWFjY29yZGlvbi1oZWFkZXItYWN0aXZlXCIpLl9hZGRDbGFzcyhpLFwidWktYWNjb3JkaW9uLWhlYWRlci1jb2xsYXBzZWRcIiksZS5sZW5ndGgmJihlLnBhcmVudCgpWzBdLmNsYXNzTmFtZT1lLnBhcmVudCgpWzBdLmNsYXNzTmFtZSksdGhpcy5fdHJpZ2dlcihcImFjdGl2YXRlXCIsbnVsbCx0KX19KSx0LndpZGdldChcInVpLm1lbnVcIix7dmVyc2lvbjpcIjEuMTIuMVwiLGRlZmF1bHRFbGVtZW50OlwiPHVsPlwiLGRlbGF5OjMwMCxvcHRpb25zOntpY29uczp7c3VibWVudTpcInVpLWljb24tY2FyZXQtMS1lXCJ9LGl0ZW1zOlwiPiAqXCIsbWVudXM6XCJ1bFwiLHBvc2l0aW9uOntteTpcImxlZnQgdG9wXCIsYXQ6XCJyaWdodCB0b3BcIn0scm9sZTpcIm1lbnVcIixibHVyOm51bGwsZm9jdXM6bnVsbCxzZWxlY3Q6bnVsbH0sX2NyZWF0ZTpmdW5jdGlvbigpe3RoaXMuYWN0aXZlTWVudT10aGlzLmVsZW1lbnQsdGhpcy5tb3VzZUhhbmRsZWQ9ITEsdGhpcy5lbGVtZW50LnVuaXF1ZUlkKCkuYXR0cih7cm9sZTp0aGlzLm9wdGlvbnMucm9sZSx0YWJJbmRleDowfSksdGhpcy5fYWRkQ2xhc3MoXCJ1aS1tZW51XCIsXCJ1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnRcIiksdGhpcy5fb24oe1wibW91c2Vkb3duIC51aS1tZW51LWl0ZW1cIjpmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCl9LFwiY2xpY2sgLnVpLW1lbnUtaXRlbVwiOmZ1bmN0aW9uKGUpe3ZhciBpPXQoZS50YXJnZXQpLHM9dCh0LnVpLnNhZmVBY3RpdmVFbGVtZW50KHRoaXMuZG9jdW1lbnRbMF0pKTshdGhpcy5tb3VzZUhhbmRsZWQmJmkubm90KFwiLnVpLXN0YXRlLWRpc2FibGVkXCIpLmxlbmd0aCYmKHRoaXMuc2VsZWN0KGUpLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKXx8KHRoaXMubW91c2VIYW5kbGVkPSEwKSxpLmhhcyhcIi51aS1tZW51XCIpLmxlbmd0aD90aGlzLmV4cGFuZChlKTohdGhpcy5lbGVtZW50LmlzKFwiOmZvY3VzXCIpJiZzLmNsb3Nlc3QoXCIudWktbWVudVwiKS5sZW5ndGgmJih0aGlzLmVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIsWyEwXSksdGhpcy5hY3RpdmUmJjE9PT10aGlzLmFjdGl2ZS5wYXJlbnRzKFwiLnVpLW1lbnVcIikubGVuZ3RoJiZjbGVhclRpbWVvdXQodGhpcy50aW1lcikpKX0sXCJtb3VzZWVudGVyIC51aS1tZW51LWl0ZW1cIjpmdW5jdGlvbihlKXtpZighdGhpcy5wcmV2aW91c0ZpbHRlcil7dmFyIGk9dChlLnRhcmdldCkuY2xvc2VzdChcIi51aS1tZW51LWl0ZW1cIikscz10KGUuY3VycmVudFRhcmdldCk7aVswXT09PXNbMF0mJih0aGlzLl9yZW1vdmVDbGFzcyhzLnNpYmxpbmdzKCkuY2hpbGRyZW4oXCIudWktc3RhdGUtYWN0aXZlXCIpLG51bGwsXCJ1aS1zdGF0ZS1hY3RpdmVcIiksdGhpcy5mb2N1cyhlLHMpKX19LG1vdXNlbGVhdmU6XCJjb2xsYXBzZUFsbFwiLFwibW91c2VsZWF2ZSAudWktbWVudVwiOlwiY29sbGFwc2VBbGxcIixmb2N1czpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuYWN0aXZlfHx0aGlzLmVsZW1lbnQuZmluZCh0aGlzLm9wdGlvbnMuaXRlbXMpLmVxKDApO2V8fHRoaXMuZm9jdXModCxpKX0sYmx1cjpmdW5jdGlvbihlKXt0aGlzLl9kZWxheShmdW5jdGlvbigpe3ZhciBpPSF0LmNvbnRhaW5zKHRoaXMuZWxlbWVudFswXSx0LnVpLnNhZmVBY3RpdmVFbGVtZW50KHRoaXMuZG9jdW1lbnRbMF0pKTtpJiZ0aGlzLmNvbGxhcHNlQWxsKGUpfSl9LGtleWRvd246XCJfa2V5ZG93blwifSksdGhpcy5yZWZyZXNoKCksdGhpcy5fb24odGhpcy5kb2N1bWVudCx7Y2xpY2s6ZnVuY3Rpb24odCl7dGhpcy5fY2xvc2VPbkRvY3VtZW50Q2xpY2sodCkmJnRoaXMuY29sbGFwc2VBbGwodCksdGhpcy5tb3VzZUhhbmRsZWQ9ITF9fSl9LF9kZXN0cm95OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5lbGVtZW50LmZpbmQoXCIudWktbWVudS1pdGVtXCIpLnJlbW92ZUF0dHIoXCJyb2xlIGFyaWEtZGlzYWJsZWRcIiksaT1lLmNoaWxkcmVuKFwiLnVpLW1lbnUtaXRlbS13cmFwcGVyXCIpLnJlbW92ZVVuaXF1ZUlkKCkucmVtb3ZlQXR0cihcInRhYkluZGV4IHJvbGUgYXJpYS1oYXNwb3B1cFwiKTt0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cihcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiKS5maW5kKFwiLnVpLW1lbnVcIikuYWRkQmFjaygpLnJlbW92ZUF0dHIoXCJyb2xlIGFyaWEtbGFiZWxsZWRieSBhcmlhLWV4cGFuZGVkIGFyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiSW5kZXhcIikucmVtb3ZlVW5pcXVlSWQoKS5zaG93KCksaS5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpO2UuZGF0YShcInVpLW1lbnUtc3VibWVudS1jYXJldFwiKSYmZS5yZW1vdmUoKX0pfSxfa2V5ZG93bjpmdW5jdGlvbihlKXt2YXIgaSxzLG4sbyxhPSEwO3N3aXRjaChlLmtleUNvZGUpe2Nhc2UgdC51aS5rZXlDb2RlLlBBR0VfVVA6dGhpcy5wcmV2aW91c1BhZ2UoZSk7YnJlYWs7Y2FzZSB0LnVpLmtleUNvZGUuUEFHRV9ET1dOOnRoaXMubmV4dFBhZ2UoZSk7YnJlYWs7Y2FzZSB0LnVpLmtleUNvZGUuSE9NRTp0aGlzLl9tb3ZlKFwiZmlyc3RcIixcImZpcnN0XCIsZSk7YnJlYWs7Y2FzZSB0LnVpLmtleUNvZGUuRU5EOnRoaXMuX21vdmUoXCJsYXN0XCIsXCJsYXN0XCIsZSk7YnJlYWs7Y2FzZSB0LnVpLmtleUNvZGUuVVA6dGhpcy5wcmV2aW91cyhlKTticmVhaztjYXNlIHQudWkua2V5Q29kZS5ET1dOOnRoaXMubmV4dChlKTticmVhaztjYXNlIHQudWkua2V5Q29kZS5MRUZUOnRoaXMuY29sbGFwc2UoZSk7YnJlYWs7Y2FzZSB0LnVpLmtleUNvZGUuUklHSFQ6dGhpcy5hY3RpdmUmJiF0aGlzLmFjdGl2ZS5pcyhcIi51aS1zdGF0ZS1kaXNhYmxlZFwiKSYmdGhpcy5leHBhbmQoZSk7YnJlYWs7Y2FzZSB0LnVpLmtleUNvZGUuRU5URVI6Y2FzZSB0LnVpLmtleUNvZGUuU1BBQ0U6dGhpcy5fYWN0aXZhdGUoZSk7YnJlYWs7Y2FzZSB0LnVpLmtleUNvZGUuRVNDQVBFOnRoaXMuY29sbGFwc2UoZSk7YnJlYWs7ZGVmYXVsdDphPSExLHM9dGhpcy5wcmV2aW91c0ZpbHRlcnx8XCJcIixvPSExLG49ZS5rZXlDb2RlPj05NiYmMTA1Pj1lLmtleUNvZGU/XCJcIisoZS5rZXlDb2RlLTk2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSksY2xlYXJUaW1lb3V0KHRoaXMuZmlsdGVyVGltZXIpLG49PT1zP289ITA6bj1zK24saT10aGlzLl9maWx0ZXJNZW51SXRlbXMobiksaT1vJiYtMSE9PWkuaW5kZXgodGhpcy5hY3RpdmUubmV4dCgpKT90aGlzLmFjdGl2ZS5uZXh0QWxsKFwiLnVpLW1lbnUtaXRlbVwiKTppLGkubGVuZ3RofHwobj1TdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSksaT10aGlzLl9maWx0ZXJNZW51SXRlbXMobikpLGkubGVuZ3RoPyh0aGlzLmZvY3VzKGUsaSksdGhpcy5wcmV2aW91c0ZpbHRlcj1uLHRoaXMuZmlsdGVyVGltZXI9dGhpcy5fZGVsYXkoZnVuY3Rpb24oKXtkZWxldGUgdGhpcy5wcmV2aW91c0ZpbHRlcn0sMWUzKSk6ZGVsZXRlIHRoaXMucHJldmlvdXNGaWx0ZXJ9YSYmZS5wcmV2ZW50RGVmYXVsdCgpfSxfYWN0aXZhdGU6ZnVuY3Rpb24odCl7dGhpcy5hY3RpdmUmJiF0aGlzLmFjdGl2ZS5pcyhcIi51aS1zdGF0ZS1kaXNhYmxlZFwiKSYmKHRoaXMuYWN0aXZlLmNoaWxkcmVuKFwiW2FyaWEtaGFzcG9wdXA9J3RydWUnXVwiKS5sZW5ndGg/dGhpcy5leHBhbmQodCk6dGhpcy5zZWxlY3QodCkpfSxyZWZyZXNoOmZ1bmN0aW9uKCl7dmFyIGUsaSxzLG4sbyxhPXRoaXMscj10aGlzLm9wdGlvbnMuaWNvbnMuc3VibWVudSxoPXRoaXMuZWxlbWVudC5maW5kKHRoaXMub3B0aW9ucy5tZW51cyk7dGhpcy5fdG9nZ2xlQ2xhc3MoXCJ1aS1tZW51LWljb25zXCIsbnVsbCwhIXRoaXMuZWxlbWVudC5maW5kKFwiLnVpLWljb25cIikubGVuZ3RoKSxzPWguZmlsdGVyKFwiOm5vdCgudWktbWVudSlcIikuaGlkZSgpLmF0dHIoe3JvbGU6dGhpcy5vcHRpb25zLnJvbGUsXCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLFwiYXJpYS1leHBhbmRlZFwiOlwiZmFsc2VcIn0pLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpLGk9ZS5wcmV2KCkscz10KFwiPHNwYW4+XCIpLmRhdGEoXCJ1aS1tZW51LXN1Ym1lbnUtY2FyZXRcIiwhMCk7YS5fYWRkQ2xhc3MocyxcInVpLW1lbnUtaWNvblwiLFwidWktaWNvbiBcIityKSxpLmF0dHIoXCJhcmlhLWhhc3BvcHVwXCIsXCJ0cnVlXCIpLnByZXBlbmQocyksZS5hdHRyKFwiYXJpYS1sYWJlbGxlZGJ5XCIsaS5hdHRyKFwiaWRcIikpfSksdGhpcy5fYWRkQ2xhc3MocyxcInVpLW1lbnVcIixcInVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudCB1aS1mcm9udFwiKSxlPWguYWRkKHRoaXMuZWxlbWVudCksaT1lLmZpbmQodGhpcy5vcHRpb25zLml0ZW1zKSxpLm5vdChcIi51aS1tZW51LWl0ZW1cIikuZWFjaChmdW5jdGlvbigpe3ZhciBlPXQodGhpcyk7YS5faXNEaXZpZGVyKGUpJiZhLl9hZGRDbGFzcyhlLFwidWktbWVudS1kaXZpZGVyXCIsXCJ1aS13aWRnZXQtY29udGVudFwiKX0pLG49aS5ub3QoXCIudWktbWVudS1pdGVtLCAudWktbWVudS1kaXZpZGVyXCIpLG89bi5jaGlsZHJlbigpLm5vdChcIi51aS1tZW51XCIpLnVuaXF1ZUlkKCkuYXR0cih7dGFiSW5kZXg6LTEscm9sZTp0aGlzLl9pdGVtUm9sZSgpfSksdGhpcy5fYWRkQ2xhc3MobixcInVpLW1lbnUtaXRlbVwiKS5fYWRkQ2xhc3MobyxcInVpLW1lbnUtaXRlbS13cmFwcGVyXCIpLGkuZmlsdGVyKFwiLnVpLXN0YXRlLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpLHRoaXMuYWN0aXZlJiYhdC5jb250YWlucyh0aGlzLmVsZW1lbnRbMF0sdGhpcy5hY3RpdmVbMF0pJiZ0aGlzLmJsdXIoKX0sX2l0ZW1Sb2xlOmZ1bmN0aW9uKCl7cmV0dXJue21lbnU6XCJtZW51aXRlbVwiLGxpc3Rib3g6XCJvcHRpb25cIn1bdGhpcy5vcHRpb25zLnJvbGVdfSxfc2V0T3B0aW9uOmZ1bmN0aW9uKHQsZSl7aWYoXCJpY29uc1wiPT09dCl7dmFyIGk9dGhpcy5lbGVtZW50LmZpbmQoXCIudWktbWVudS1pY29uXCIpO3RoaXMuX3JlbW92ZUNsYXNzKGksbnVsbCx0aGlzLm9wdGlvbnMuaWNvbnMuc3VibWVudSkuX2FkZENsYXNzKGksbnVsbCxlLnN1Ym1lbnUpfXRoaXMuX3N1cGVyKHQsZSl9LF9zZXRPcHRpb25EaXNhYmxlZDpmdW5jdGlvbih0KXt0aGlzLl9zdXBlcih0KSx0aGlzLmVsZW1lbnQuYXR0cihcImFyaWEtZGlzYWJsZWRcIix0K1wiXCIpLHRoaXMuX3RvZ2dsZUNsYXNzKG51bGwsXCJ1aS1zdGF0ZS1kaXNhYmxlZFwiLCEhdCl9LGZvY3VzOmZ1bmN0aW9uKHQsZSl7dmFyIGkscyxuO3RoaXMuYmx1cih0LHQmJlwiZm9jdXNcIj09PXQudHlwZSksdGhpcy5fc2Nyb2xsSW50b1ZpZXcoZSksdGhpcy5hY3RpdmU9ZS5maXJzdCgpLHM9dGhpcy5hY3RpdmUuY2hpbGRyZW4oXCIudWktbWVudS1pdGVtLXdyYXBwZXJcIiksdGhpcy5fYWRkQ2xhc3MocyxudWxsLFwidWktc3RhdGUtYWN0aXZlXCIpLHRoaXMub3B0aW9ucy5yb2xlJiZ0aGlzLmVsZW1lbnQuYXR0cihcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiLHMuYXR0cihcImlkXCIpKSxuPXRoaXMuYWN0aXZlLnBhcmVudCgpLmNsb3Nlc3QoXCIudWktbWVudS1pdGVtXCIpLmNoaWxkcmVuKFwiLnVpLW1lbnUtaXRlbS13cmFwcGVyXCIpLHRoaXMuX2FkZENsYXNzKG4sbnVsbCxcInVpLXN0YXRlLWFjdGl2ZVwiKSx0JiZcImtleWRvd25cIj09PXQudHlwZT90aGlzLl9jbG9zZSgpOnRoaXMudGltZXI9dGhpcy5fZGVsYXkoZnVuY3Rpb24oKXt0aGlzLl9jbG9zZSgpfSx0aGlzLmRlbGF5KSxpPWUuY2hpbGRyZW4oXCIudWktbWVudVwiKSxpLmxlbmd0aCYmdCYmL15tb3VzZS8udGVzdCh0LnR5cGUpJiZ0aGlzLl9zdGFydE9wZW5pbmcoaSksdGhpcy5hY3RpdmVNZW51PWUucGFyZW50KCksdGhpcy5fdHJpZ2dlcihcImZvY3VzXCIsdCx7aXRlbTplfSl9LF9zY3JvbGxJbnRvVmlldzpmdW5jdGlvbihlKXt2YXIgaSxzLG4sbyxhLHI7dGhpcy5faGFzU2Nyb2xsKCkmJihpPXBhcnNlRmxvYXQodC5jc3ModGhpcy5hY3RpdmVNZW51WzBdLFwiYm9yZGVyVG9wV2lkdGhcIikpfHwwLHM9cGFyc2VGbG9hdCh0LmNzcyh0aGlzLmFjdGl2ZU1lbnVbMF0sXCJwYWRkaW5nVG9wXCIpKXx8MCxuPWUub2Zmc2V0KCkudG9wLXRoaXMuYWN0aXZlTWVudS5vZmZzZXQoKS50b3AtaS1zLG89dGhpcy5hY3RpdmVNZW51LnNjcm9sbFRvcCgpLGE9dGhpcy5hY3RpdmVNZW51LmhlaWdodCgpLHI9ZS5vdXRlckhlaWdodCgpLDA+bj90aGlzLmFjdGl2ZU1lbnUuc2Nyb2xsVG9wKG8rbik6bityPmEmJnRoaXMuYWN0aXZlTWVudS5zY3JvbGxUb3AobytuLWErcikpfSxibHVyOmZ1bmN0aW9uKHQsZSl7ZXx8Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpLHRoaXMuYWN0aXZlJiYodGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5hY3RpdmUuY2hpbGRyZW4oXCIudWktbWVudS1pdGVtLXdyYXBwZXJcIiksbnVsbCxcInVpLXN0YXRlLWFjdGl2ZVwiKSx0aGlzLl90cmlnZ2VyKFwiYmx1clwiLHQse2l0ZW06dGhpcy5hY3RpdmV9KSx0aGlzLmFjdGl2ZT1udWxsKX0sX3N0YXJ0T3BlbmluZzpmdW5jdGlvbih0KXtjbGVhclRpbWVvdXQodGhpcy50aW1lciksXCJ0cnVlXCI9PT10LmF0dHIoXCJhcmlhLWhpZGRlblwiKSYmKHRoaXMudGltZXI9dGhpcy5fZGVsYXkoZnVuY3Rpb24oKXt0aGlzLl9jbG9zZSgpLHRoaXMuX29wZW4odCl9LHRoaXMuZGVsYXkpKX0sX29wZW46ZnVuY3Rpb24oZSl7dmFyIGk9dC5leHRlbmQoe29mOnRoaXMuYWN0aXZlfSx0aGlzLm9wdGlvbnMucG9zaXRpb24pO2NsZWFyVGltZW91dCh0aGlzLnRpbWVyKSx0aGlzLmVsZW1lbnQuZmluZChcIi51aS1tZW51XCIpLm5vdChlLnBhcmVudHMoXCIudWktbWVudVwiKSkuaGlkZSgpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSxlLnNob3coKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW5cIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcInRydWVcIikucG9zaXRpb24oaSl9LGNvbGxhcHNlQWxsOmZ1bmN0aW9uKGUsaSl7Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpLHRoaXMudGltZXI9dGhpcy5fZGVsYXkoZnVuY3Rpb24oKXt2YXIgcz1pP3RoaXMuZWxlbWVudDp0KGUmJmUudGFyZ2V0KS5jbG9zZXN0KHRoaXMuZWxlbWVudC5maW5kKFwiLnVpLW1lbnVcIikpO3MubGVuZ3RofHwocz10aGlzLmVsZW1lbnQpLHRoaXMuX2Nsb3NlKHMpLHRoaXMuYmx1cihlKSx0aGlzLl9yZW1vdmVDbGFzcyhzLmZpbmQoXCIudWktc3RhdGUtYWN0aXZlXCIpLG51bGwsXCJ1aS1zdGF0ZS1hY3RpdmVcIiksdGhpcy5hY3RpdmVNZW51PXN9LHRoaXMuZGVsYXkpfSxfY2xvc2U6ZnVuY3Rpb24odCl7dHx8KHQ9dGhpcy5hY3RpdmU/dGhpcy5hY3RpdmUucGFyZW50KCk6dGhpcy5lbGVtZW50KSx0LmZpbmQoXCIudWktbWVudVwiKS5oaWRlKCkuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJmYWxzZVwiKX0sX2Nsb3NlT25Eb2N1bWVudENsaWNrOmZ1bmN0aW9uKGUpe3JldHVybiF0KGUudGFyZ2V0KS5jbG9zZXN0KFwiLnVpLW1lbnVcIikubGVuZ3RofSxfaXNEaXZpZGVyOmZ1bmN0aW9uKHQpe3JldHVybiEvW15cXC1cXHUyMDE0XFx1MjAxM1xcc10vLnRlc3QodC50ZXh0KCkpfSxjb2xsYXBzZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmFjdGl2ZSYmdGhpcy5hY3RpdmUucGFyZW50KCkuY2xvc2VzdChcIi51aS1tZW51LWl0ZW1cIix0aGlzLmVsZW1lbnQpO2UmJmUubGVuZ3RoJiYodGhpcy5fY2xvc2UoKSx0aGlzLmZvY3VzKHQsZSkpfSxleHBhbmQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hY3RpdmUmJnRoaXMuYWN0aXZlLmNoaWxkcmVuKFwiLnVpLW1lbnUgXCIpLmZpbmQodGhpcy5vcHRpb25zLml0ZW1zKS5maXJzdCgpO2UmJmUubGVuZ3RoJiYodGhpcy5fb3BlbihlLnBhcmVudCgpKSx0aGlzLl9kZWxheShmdW5jdGlvbigpe3RoaXMuZm9jdXModCxlKX0pKX0sbmV4dDpmdW5jdGlvbih0KXt0aGlzLl9tb3ZlKFwibmV4dFwiLFwiZmlyc3RcIix0KX0scHJldmlvdXM6ZnVuY3Rpb24odCl7dGhpcy5fbW92ZShcInByZXZcIixcImxhc3RcIix0KX0saXNGaXJzdEl0ZW06ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hY3RpdmUmJiF0aGlzLmFjdGl2ZS5wcmV2QWxsKFwiLnVpLW1lbnUtaXRlbVwiKS5sZW5ndGh9LGlzTGFzdEl0ZW06ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hY3RpdmUmJiF0aGlzLmFjdGl2ZS5uZXh0QWxsKFwiLnVpLW1lbnUtaXRlbVwiKS5sZW5ndGh9LF9tb3ZlOmZ1bmN0aW9uKHQsZSxpKXt2YXIgczt0aGlzLmFjdGl2ZSYmKHM9XCJmaXJzdFwiPT09dHx8XCJsYXN0XCI9PT10P3RoaXMuYWN0aXZlW1wiZmlyc3RcIj09PXQ/XCJwcmV2QWxsXCI6XCJuZXh0QWxsXCJdKFwiLnVpLW1lbnUtaXRlbVwiKS5lcSgtMSk6dGhpcy5hY3RpdmVbdCtcIkFsbFwiXShcIi51aS1tZW51LWl0ZW1cIikuZXEoMCkpLHMmJnMubGVuZ3RoJiZ0aGlzLmFjdGl2ZXx8KHM9dGhpcy5hY3RpdmVNZW51LmZpbmQodGhpcy5vcHRpb25zLml0ZW1zKVtlXSgpKSx0aGlzLmZvY3VzKGkscyl9LG5leHRQYWdlOmZ1bmN0aW9uKGUpe3ZhciBpLHMsbjtyZXR1cm4gdGhpcy5hY3RpdmU/KHRoaXMuaXNMYXN0SXRlbSgpfHwodGhpcy5faGFzU2Nyb2xsKCk/KHM9dGhpcy5hY3RpdmUub2Zmc2V0KCkudG9wLG49dGhpcy5lbGVtZW50LmhlaWdodCgpLHRoaXMuYWN0aXZlLm5leHRBbGwoXCIudWktbWVudS1pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtyZXR1cm4gaT10KHRoaXMpLDA+aS5vZmZzZXQoKS50b3Atcy1ufSksdGhpcy5mb2N1cyhlLGkpKTp0aGlzLmZvY3VzKGUsdGhpcy5hY3RpdmVNZW51LmZpbmQodGhpcy5vcHRpb25zLml0ZW1zKVt0aGlzLmFjdGl2ZT9cImxhc3RcIjpcImZpcnN0XCJdKCkpKSx2b2lkIDApOih0aGlzLm5leHQoZSksdm9pZCAwKX0scHJldmlvdXNQYWdlOmZ1bmN0aW9uKGUpe3ZhciBpLHMsbjtyZXR1cm4gdGhpcy5hY3RpdmU/KHRoaXMuaXNGaXJzdEl0ZW0oKXx8KHRoaXMuX2hhc1Njcm9sbCgpPyhzPXRoaXMuYWN0aXZlLm9mZnNldCgpLnRvcCxuPXRoaXMuZWxlbWVudC5oZWlnaHQoKSx0aGlzLmFjdGl2ZS5wcmV2QWxsKFwiLnVpLW1lbnUtaXRlbVwiKS5lYWNoKGZ1bmN0aW9uKCl7cmV0dXJuIGk9dCh0aGlzKSxpLm9mZnNldCgpLnRvcC1zK24+MH0pLHRoaXMuZm9jdXMoZSxpKSk6dGhpcy5mb2N1cyhlLHRoaXMuYWN0aXZlTWVudS5maW5kKHRoaXMub3B0aW9ucy5pdGVtcykuZmlyc3QoKSkpLHZvaWQgMCk6KHRoaXMubmV4dChlKSx2b2lkIDApfSxfaGFzU2Nyb2xsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpPHRoaXMuZWxlbWVudC5wcm9wKFwic2Nyb2xsSGVpZ2h0XCIpfSxzZWxlY3Q6ZnVuY3Rpb24oZSl7dGhpcy5hY3RpdmU9dGhpcy5hY3RpdmV8fHQoZS50YXJnZXQpLmNsb3Nlc3QoXCIudWktbWVudS1pdGVtXCIpO3ZhciBpPXtpdGVtOnRoaXMuYWN0aXZlfTt0aGlzLmFjdGl2ZS5oYXMoXCIudWktbWVudVwiKS5sZW5ndGh8fHRoaXMuY29sbGFwc2VBbGwoZSwhMCksdGhpcy5fdHJpZ2dlcihcInNlbGVjdFwiLGUsaSl9LF9maWx0ZXJNZW51SXRlbXM6ZnVuY3Rpb24oZSl7dmFyIGk9ZS5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZyxcIlxcXFwkJlwiKSxzPVJlZ0V4cChcIl5cIitpLFwiaVwiKTtyZXR1cm4gdGhpcy5hY3RpdmVNZW51LmZpbmQodGhpcy5vcHRpb25zLml0ZW1zKS5maWx0ZXIoXCIudWktbWVudS1pdGVtXCIpLmZpbHRlcihmdW5jdGlvbigpe3JldHVybiBzLnRlc3QodC50cmltKHQodGhpcykuY2hpbGRyZW4oXCIudWktbWVudS1pdGVtLXdyYXBwZXJcIikudGV4dCgpKSl9KX19KSx0LndpZGdldChcInVpLmF1dG9jb21wbGV0ZVwiLHt2ZXJzaW9uOlwiMS4xMi4xXCIsZGVmYXVsdEVsZW1lbnQ6XCI8aW5wdXQ+XCIsb3B0aW9uczp7YXBwZW5kVG86bnVsbCxhdXRvRm9jdXM6ITEsZGVsYXk6MzAwLG1pbkxlbmd0aDoxLHBvc2l0aW9uOntteTpcImxlZnQgdG9wXCIsYXQ6XCJsZWZ0IGJvdHRvbVwiLGNvbGxpc2lvbjpcIm5vbmVcIn0sc291cmNlOm51bGwsY2hhbmdlOm51bGwsY2xvc2U6bnVsbCxmb2N1czpudWxsLG9wZW46bnVsbCxyZXNwb25zZTpudWxsLHNlYXJjaDpudWxsLHNlbGVjdDpudWxsfSxyZXF1ZXN0SW5kZXg6MCxwZW5kaW5nOjAsX2NyZWF0ZTpmdW5jdGlvbigpe3ZhciBlLGkscyxuPXRoaXMuZWxlbWVudFswXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLG89XCJ0ZXh0YXJlYVwiPT09bixhPVwiaW5wdXRcIj09PW47dGhpcy5pc011bHRpTGluZT1vfHwhYSYmdGhpcy5faXNDb250ZW50RWRpdGFibGUodGhpcy5lbGVtZW50KSx0aGlzLnZhbHVlTWV0aG9kPXRoaXMuZWxlbWVudFtvfHxhP1widmFsXCI6XCJ0ZXh0XCJdLHRoaXMuaXNOZXdNZW51PSEwLHRoaXMuX2FkZENsYXNzKFwidWktYXV0b2NvbXBsZXRlLWlucHV0XCIpLHRoaXMuZWxlbWVudC5hdHRyKFwiYXV0b2NvbXBsZXRlXCIsXCJvZmZcIiksdGhpcy5fb24odGhpcy5lbGVtZW50LHtrZXlkb3duOmZ1bmN0aW9uKG4pe2lmKHRoaXMuZWxlbWVudC5wcm9wKFwicmVhZE9ubHlcIikpcmV0dXJuIGU9ITAscz0hMCxpPSEwLHZvaWQgMDtlPSExLHM9ITEsaT0hMTt2YXIgbz10LnVpLmtleUNvZGU7c3dpdGNoKG4ua2V5Q29kZSl7Y2FzZSBvLlBBR0VfVVA6ZT0hMCx0aGlzLl9tb3ZlKFwicHJldmlvdXNQYWdlXCIsbik7YnJlYWs7Y2FzZSBvLlBBR0VfRE9XTjplPSEwLHRoaXMuX21vdmUoXCJuZXh0UGFnZVwiLG4pO2JyZWFrO2Nhc2Ugby5VUDplPSEwLHRoaXMuX2tleUV2ZW50KFwicHJldmlvdXNcIixuKTticmVhaztjYXNlIG8uRE9XTjplPSEwLHRoaXMuX2tleUV2ZW50KFwibmV4dFwiLG4pO2JyZWFrO2Nhc2Ugby5FTlRFUjp0aGlzLm1lbnUuYWN0aXZlJiYoZT0hMCxuLnByZXZlbnREZWZhdWx0KCksdGhpcy5tZW51LnNlbGVjdChuKSk7YnJlYWs7Y2FzZSBvLlRBQjp0aGlzLm1lbnUuYWN0aXZlJiZ0aGlzLm1lbnUuc2VsZWN0KG4pO2JyZWFrO2Nhc2Ugby5FU0NBUEU6dGhpcy5tZW51LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKSYmKHRoaXMuaXNNdWx0aUxpbmV8fHRoaXMuX3ZhbHVlKHRoaXMudGVybSksdGhpcy5jbG9zZShuKSxuLnByZXZlbnREZWZhdWx0KCkpO2JyZWFrO2RlZmF1bHQ6aT0hMCx0aGlzLl9zZWFyY2hUaW1lb3V0KG4pfX0sa2V5cHJlc3M6ZnVuY3Rpb24ocyl7aWYoZSlyZXR1cm4gZT0hMSwoIXRoaXMuaXNNdWx0aUxpbmV8fHRoaXMubWVudS5lbGVtZW50LmlzKFwiOnZpc2libGVcIikpJiZzLnByZXZlbnREZWZhdWx0KCksdm9pZCAwO2lmKCFpKXt2YXIgbj10LnVpLmtleUNvZGU7c3dpdGNoKHMua2V5Q29kZSl7Y2FzZSBuLlBBR0VfVVA6dGhpcy5fbW92ZShcInByZXZpb3VzUGFnZVwiLHMpO2JyZWFrO2Nhc2Ugbi5QQUdFX0RPV046dGhpcy5fbW92ZShcIm5leHRQYWdlXCIscyk7YnJlYWs7Y2FzZSBuLlVQOnRoaXMuX2tleUV2ZW50KFwicHJldmlvdXNcIixzKTticmVhaztjYXNlIG4uRE9XTjp0aGlzLl9rZXlFdmVudChcIm5leHRcIixzKX19fSxpbnB1dDpmdW5jdGlvbih0KXtyZXR1cm4gcz8ocz0hMSx0LnByZXZlbnREZWZhdWx0KCksdm9pZCAwKToodGhpcy5fc2VhcmNoVGltZW91dCh0KSx2b2lkIDApfSxmb2N1czpmdW5jdGlvbigpe3RoaXMuc2VsZWN0ZWRJdGVtPW51bGwsdGhpcy5wcmV2aW91cz10aGlzLl92YWx1ZSgpfSxibHVyOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmNhbmNlbEJsdXI/KGRlbGV0ZSB0aGlzLmNhbmNlbEJsdXIsdm9pZCAwKTooY2xlYXJUaW1lb3V0KHRoaXMuc2VhcmNoaW5nKSx0aGlzLmNsb3NlKHQpLHRoaXMuX2NoYW5nZSh0KSx2b2lkIDApfX0pLHRoaXMuX2luaXRTb3VyY2UoKSx0aGlzLm1lbnU9dChcIjx1bD5cIikuYXBwZW5kVG8odGhpcy5fYXBwZW5kVG8oKSkubWVudSh7cm9sZTpudWxsfSkuaGlkZSgpLm1lbnUoXCJpbnN0YW5jZVwiKSx0aGlzLl9hZGRDbGFzcyh0aGlzLm1lbnUuZWxlbWVudCxcInVpLWF1dG9jb21wbGV0ZVwiLFwidWktZnJvbnRcIiksdGhpcy5fb24odGhpcy5tZW51LmVsZW1lbnQse21vdXNlZG93bjpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksdGhpcy5jYW5jZWxCbHVyPSEwLHRoaXMuX2RlbGF5KGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXMuY2FuY2VsQmx1cix0aGlzLmVsZW1lbnRbMF0hPT10LnVpLnNhZmVBY3RpdmVFbGVtZW50KHRoaXMuZG9jdW1lbnRbMF0pJiZ0aGlzLmVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpfSl9LG1lbnVmb2N1czpmdW5jdGlvbihlLGkpe3ZhciBzLG47cmV0dXJuIHRoaXMuaXNOZXdNZW51JiYodGhpcy5pc05ld01lbnU9ITEsZS5vcmlnaW5hbEV2ZW50JiYvXm1vdXNlLy50ZXN0KGUub3JpZ2luYWxFdmVudC50eXBlKSk/KHRoaXMubWVudS5ibHVyKCksdGhpcy5kb2N1bWVudC5vbmUoXCJtb3VzZW1vdmVcIixmdW5jdGlvbigpe3QoZS50YXJnZXQpLnRyaWdnZXIoZS5vcmlnaW5hbEV2ZW50KX0pLHZvaWQgMCk6KG49aS5pdGVtLmRhdGEoXCJ1aS1hdXRvY29tcGxldGUtaXRlbVwiKSwhMSE9PXRoaXMuX3RyaWdnZXIoXCJmb2N1c1wiLGUse2l0ZW06bn0pJiZlLm9yaWdpbmFsRXZlbnQmJi9ea2V5Ly50ZXN0KGUub3JpZ2luYWxFdmVudC50eXBlKSYmdGhpcy5fdmFsdWUobi52YWx1ZSkscz1pLml0ZW0uYXR0cihcImFyaWEtbGFiZWxcIil8fG4udmFsdWUscyYmdC50cmltKHMpLmxlbmd0aCYmKHRoaXMubGl2ZVJlZ2lvbi5jaGlsZHJlbigpLmhpZGUoKSx0KFwiPGRpdj5cIikudGV4dChzKS5hcHBlbmRUbyh0aGlzLmxpdmVSZWdpb24pKSx2b2lkIDApfSxtZW51c2VsZWN0OmZ1bmN0aW9uKGUsaSl7dmFyIHM9aS5pdGVtLmRhdGEoXCJ1aS1hdXRvY29tcGxldGUtaXRlbVwiKSxuPXRoaXMucHJldmlvdXM7dGhpcy5lbGVtZW50WzBdIT09dC51aS5zYWZlQWN0aXZlRWxlbWVudCh0aGlzLmRvY3VtZW50WzBdKSYmKHRoaXMuZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIiksdGhpcy5wcmV2aW91cz1uLHRoaXMuX2RlbGF5KGZ1bmN0aW9uKCl7dGhpcy5wcmV2aW91cz1uLHRoaXMuc2VsZWN0ZWRJdGVtPXN9KSksITEhPT10aGlzLl90cmlnZ2VyKFwic2VsZWN0XCIsZSx7aXRlbTpzfSkmJnRoaXMuX3ZhbHVlKHMudmFsdWUpLHRoaXMudGVybT10aGlzLl92YWx1ZSgpLHRoaXMuY2xvc2UoZSksdGhpcy5zZWxlY3RlZEl0ZW09c319KSx0aGlzLmxpdmVSZWdpb249dChcIjxkaXY+XCIse3JvbGU6XCJzdGF0dXNcIixcImFyaWEtbGl2ZVwiOlwiYXNzZXJ0aXZlXCIsXCJhcmlhLXJlbGV2YW50XCI6XCJhZGRpdGlvbnNcIn0pLmFwcGVuZFRvKHRoaXMuZG9jdW1lbnRbMF0uYm9keSksdGhpcy5fYWRkQ2xhc3ModGhpcy5saXZlUmVnaW9uLG51bGwsXCJ1aS1oZWxwZXItaGlkZGVuLWFjY2Vzc2libGVcIiksdGhpcy5fb24odGhpcy53aW5kb3cse2JlZm9yZXVubG9hZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5yZW1vdmVBdHRyKFwiYXV0b2NvbXBsZXRlXCIpfX0pfSxfZGVzdHJveTpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnNlYXJjaGluZyksdGhpcy5lbGVtZW50LnJlbW92ZUF0dHIoXCJhdXRvY29tcGxldGVcIiksdGhpcy5tZW51LmVsZW1lbnQucmVtb3ZlKCksdGhpcy5saXZlUmVnaW9uLnJlbW92ZSgpfSxfc2V0T3B0aW9uOmZ1bmN0aW9uKHQsZSl7dGhpcy5fc3VwZXIodCxlKSxcInNvdXJjZVwiPT09dCYmdGhpcy5faW5pdFNvdXJjZSgpLFwiYXBwZW5kVG9cIj09PXQmJnRoaXMubWVudS5lbGVtZW50LmFwcGVuZFRvKHRoaXMuX2FwcGVuZFRvKCkpLFwiZGlzYWJsZWRcIj09PXQmJmUmJnRoaXMueGhyJiZ0aGlzLnhoci5hYm9ydCgpfSxfaXNFdmVudFRhcmdldEluV2lkZ2V0OmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMubWVudS5lbGVtZW50WzBdO3JldHVybiBlLnRhcmdldD09PXRoaXMuZWxlbWVudFswXXx8ZS50YXJnZXQ9PT1pfHx0LmNvbnRhaW5zKGksZS50YXJnZXQpfSxfY2xvc2VPbkNsaWNrT3V0c2lkZTpmdW5jdGlvbih0KXt0aGlzLl9pc0V2ZW50VGFyZ2V0SW5XaWRnZXQodCl8fHRoaXMuY2xvc2UoKX0sX2FwcGVuZFRvOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcHRpb25zLmFwcGVuZFRvO3JldHVybiBlJiYoZT1lLmpxdWVyeXx8ZS5ub2RlVHlwZT90KGUpOnRoaXMuZG9jdW1lbnQuZmluZChlKS5lcSgwKSksZSYmZVswXXx8KGU9dGhpcy5lbGVtZW50LmNsb3Nlc3QoXCIudWktZnJvbnQsIGRpYWxvZ1wiKSksZS5sZW5ndGh8fChlPXRoaXMuZG9jdW1lbnRbMF0uYm9keSksZX0sX2luaXRTb3VyY2U6ZnVuY3Rpb24oKXt2YXIgZSxpLHM9dGhpczt0LmlzQXJyYXkodGhpcy5vcHRpb25zLnNvdXJjZSk/KGU9dGhpcy5vcHRpb25zLnNvdXJjZSx0aGlzLnNvdXJjZT1mdW5jdGlvbihpLHMpe3ModC51aS5hdXRvY29tcGxldGUuZmlsdGVyKGUsaS50ZXJtKSl9KTpcInN0cmluZ1wiPT10eXBlb2YgdGhpcy5vcHRpb25zLnNvdXJjZT8oaT10aGlzLm9wdGlvbnMuc291cmNlLHRoaXMuc291cmNlPWZ1bmN0aW9uKGUsbil7cy54aHImJnMueGhyLmFib3J0KCkscy54aHI9dC5hamF4KHt1cmw6aSxkYXRhOmUsZGF0YVR5cGU6XCJqc29uXCIsc3VjY2VzczpmdW5jdGlvbih0KXtuKHQpfSxlcnJvcjpmdW5jdGlvbigpe24oW10pfX0pfSk6dGhpcy5zb3VyY2U9dGhpcy5vcHRpb25zLnNvdXJjZX0sX3NlYXJjaFRpbWVvdXQ6ZnVuY3Rpb24odCl7Y2xlYXJUaW1lb3V0KHRoaXMuc2VhcmNoaW5nKSx0aGlzLnNlYXJjaGluZz10aGlzLl9kZWxheShmdW5jdGlvbigpe3ZhciBlPXRoaXMudGVybT09PXRoaXMuX3ZhbHVlKCksaT10aGlzLm1lbnUuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpLHM9dC5hbHRLZXl8fHQuY3RybEtleXx8dC5tZXRhS2V5fHx0LnNoaWZ0S2V5OyghZXx8ZSYmIWkmJiFzKSYmKHRoaXMuc2VsZWN0ZWRJdGVtPW51bGwsdGhpcy5zZWFyY2gobnVsbCx0KSl9LHRoaXMub3B0aW9ucy5kZWxheSl9LHNlYXJjaDpmdW5jdGlvbih0LGUpe3JldHVybiB0PW51bGwhPXQ/dDp0aGlzLl92YWx1ZSgpLHRoaXMudGVybT10aGlzLl92YWx1ZSgpLHQubGVuZ3RoPHRoaXMub3B0aW9ucy5taW5MZW5ndGg/dGhpcy5jbG9zZShlKTp0aGlzLl90cmlnZ2VyKFwic2VhcmNoXCIsZSkhPT0hMT90aGlzLl9zZWFyY2godCk6dm9pZCAwfSxfc2VhcmNoOmZ1bmN0aW9uKHQpe3RoaXMucGVuZGluZysrLHRoaXMuX2FkZENsYXNzKFwidWktYXV0b2NvbXBsZXRlLWxvYWRpbmdcIiksdGhpcy5jYW5jZWxTZWFyY2g9ITEsdGhpcy5zb3VyY2Uoe3Rlcm06dH0sdGhpcy5fcmVzcG9uc2UoKSl9LF9yZXNwb25zZTpmdW5jdGlvbigpe3ZhciBlPSsrdGhpcy5yZXF1ZXN0SW5kZXg7cmV0dXJuIHQucHJveHkoZnVuY3Rpb24odCl7ZT09PXRoaXMucmVxdWVzdEluZGV4JiZ0aGlzLl9fcmVzcG9uc2UodCksdGhpcy5wZW5kaW5nLS0sdGhpcy5wZW5kaW5nfHx0aGlzLl9yZW1vdmVDbGFzcyhcInVpLWF1dG9jb21wbGV0ZS1sb2FkaW5nXCIpfSx0aGlzKX0sX19yZXNwb25zZTpmdW5jdGlvbih0KXt0JiYodD10aGlzLl9ub3JtYWxpemUodCkpLHRoaXMuX3RyaWdnZXIoXCJyZXNwb25zZVwiLG51bGwse2NvbnRlbnQ6dH0pLCF0aGlzLm9wdGlvbnMuZGlzYWJsZWQmJnQmJnQubGVuZ3RoJiYhdGhpcy5jYW5jZWxTZWFyY2g/KHRoaXMuX3N1Z2dlc3QodCksdGhpcy5fdHJpZ2dlcihcIm9wZW5cIikpOnRoaXMuX2Nsb3NlKCl9LGNsb3NlOmZ1bmN0aW9uKHQpe3RoaXMuY2FuY2VsU2VhcmNoPSEwLHRoaXMuX2Nsb3NlKHQpfSxfY2xvc2U6ZnVuY3Rpb24odCl7dGhpcy5fb2ZmKHRoaXMuZG9jdW1lbnQsXCJtb3VzZWRvd25cIiksdGhpcy5tZW51LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKSYmKHRoaXMubWVudS5lbGVtZW50LmhpZGUoKSx0aGlzLm1lbnUuYmx1cigpLHRoaXMuaXNOZXdNZW51PSEwLHRoaXMuX3RyaWdnZXIoXCJjbG9zZVwiLHQpKX0sX2NoYW5nZTpmdW5jdGlvbih0KXt0aGlzLnByZXZpb3VzIT09dGhpcy5fdmFsdWUoKSYmdGhpcy5fdHJpZ2dlcihcImNoYW5nZVwiLHQse2l0ZW06dGhpcy5zZWxlY3RlZEl0ZW19KX0sX25vcm1hbGl6ZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5sZW5ndGgmJmVbMF0ubGFiZWwmJmVbMF0udmFsdWU/ZTp0Lm1hcChlLGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP3tsYWJlbDplLHZhbHVlOmV9OnQuZXh0ZW5kKHt9LGUse2xhYmVsOmUubGFiZWx8fGUudmFsdWUsdmFsdWU6ZS52YWx1ZXx8ZS5sYWJlbH0pfSl9LF9zdWdnZXN0OmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMubWVudS5lbGVtZW50LmVtcHR5KCk7dGhpcy5fcmVuZGVyTWVudShpLGUpLHRoaXMuaXNOZXdNZW51PSEwLHRoaXMubWVudS5yZWZyZXNoKCksaS5zaG93KCksdGhpcy5fcmVzaXplTWVudSgpLGkucG9zaXRpb24odC5leHRlbmQoe29mOnRoaXMuZWxlbWVudH0sdGhpcy5vcHRpb25zLnBvc2l0aW9uKSksdGhpcy5vcHRpb25zLmF1dG9Gb2N1cyYmdGhpcy5tZW51Lm5leHQoKSx0aGlzLl9vbih0aGlzLmRvY3VtZW50LHttb3VzZWRvd246XCJfY2xvc2VPbkNsaWNrT3V0c2lkZVwifSl9LF9yZXNpemVNZW51OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5tZW51LmVsZW1lbnQ7dC5vdXRlcldpZHRoKE1hdGgubWF4KHQud2lkdGgoXCJcIikub3V0ZXJXaWR0aCgpKzEsdGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoKSkpfSxfcmVuZGVyTWVudTpmdW5jdGlvbihlLGkpe3ZhciBzPXRoaXM7dC5lYWNoKGksZnVuY3Rpb24odCxpKXtzLl9yZW5kZXJJdGVtRGF0YShlLGkpfSl9LF9yZW5kZXJJdGVtRGF0YTpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9yZW5kZXJJdGVtKHQsZSkuZGF0YShcInVpLWF1dG9jb21wbGV0ZS1pdGVtXCIsZSl9LF9yZW5kZXJJdGVtOmZ1bmN0aW9uKGUsaSl7cmV0dXJuIHQoXCI8bGk+XCIpLmFwcGVuZCh0KFwiPGRpdj5cIikudGV4dChpLmxhYmVsKSkuYXBwZW5kVG8oZSl9LF9tb3ZlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMubWVudS5lbGVtZW50LmlzKFwiOnZpc2libGVcIik/dGhpcy5tZW51LmlzRmlyc3RJdGVtKCkmJi9ecHJldmlvdXMvLnRlc3QodCl8fHRoaXMubWVudS5pc0xhc3RJdGVtKCkmJi9ebmV4dC8udGVzdCh0KT8odGhpcy5pc011bHRpTGluZXx8dGhpcy5fdmFsdWUodGhpcy50ZXJtKSx0aGlzLm1lbnUuYmx1cigpLHZvaWQgMCk6KHRoaXMubWVudVt0XShlKSx2b2lkIDApOih0aGlzLnNlYXJjaChudWxsLGUpLHZvaWQgMCl9LHdpZGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1lbnUuZWxlbWVudH0sX3ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVNZXRob2QuYXBwbHkodGhpcy5lbGVtZW50LGFyZ3VtZW50cyl9LF9rZXlFdmVudDpmdW5jdGlvbih0LGUpeyghdGhpcy5pc011bHRpTGluZXx8dGhpcy5tZW51LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKSkmJih0aGlzLl9tb3ZlKHQsZSksZS5wcmV2ZW50RGVmYXVsdCgpKX0sX2lzQ29udGVudEVkaXRhYmxlOmZ1bmN0aW9uKHQpe2lmKCF0Lmxlbmd0aClyZXR1cm4hMTt2YXIgZT10LnByb3AoXCJjb250ZW50RWRpdGFibGVcIik7cmV0dXJuXCJpbmhlcml0XCI9PT1lP3RoaXMuX2lzQ29udGVudEVkaXRhYmxlKHQucGFyZW50KCkpOlwidHJ1ZVwiPT09ZX19KSx0LmV4dGVuZCh0LnVpLmF1dG9jb21wbGV0ZSx7ZXNjYXBlUmVnZXg6ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csXCJcXFxcJCZcIil9LGZpbHRlcjpmdW5jdGlvbihlLGkpe3ZhciBzPVJlZ0V4cCh0LnVpLmF1dG9jb21wbGV0ZS5lc2NhcGVSZWdleChpKSxcImlcIik7cmV0dXJuIHQuZ3JlcChlLGZ1bmN0aW9uKHQpe3JldHVybiBzLnRlc3QodC5sYWJlbHx8dC52YWx1ZXx8dCl9KX19KSx0LndpZGdldChcInVpLmF1dG9jb21wbGV0ZVwiLHQudWkuYXV0b2NvbXBsZXRlLHtvcHRpb25zOnttZXNzYWdlczp7bm9SZXN1bHRzOlwiTm8gc2VhcmNoIHJlc3VsdHMuXCIscmVzdWx0czpmdW5jdGlvbih0KXtyZXR1cm4gdCsodD4xP1wiIHJlc3VsdHMgYXJlXCI6XCIgcmVzdWx0IGlzXCIpK1wiIGF2YWlsYWJsZSwgdXNlIHVwIGFuZCBkb3duIGFycm93IGtleXMgdG8gbmF2aWdhdGUuXCJ9fX0sX19yZXNwb25zZTpmdW5jdGlvbihlKXt2YXIgaTt0aGlzLl9zdXBlckFwcGx5KGFyZ3VtZW50cyksdGhpcy5vcHRpb25zLmRpc2FibGVkfHx0aGlzLmNhbmNlbFNlYXJjaHx8KGk9ZSYmZS5sZW5ndGg/dGhpcy5vcHRpb25zLm1lc3NhZ2VzLnJlc3VsdHMoZS5sZW5ndGgpOnRoaXMub3B0aW9ucy5tZXNzYWdlcy5ub1Jlc3VsdHMsdGhpcy5saXZlUmVnaW9uLmNoaWxkcmVuKCkuaGlkZSgpLHQoXCI8ZGl2PlwiKS50ZXh0KGkpLmFwcGVuZFRvKHRoaXMubGl2ZVJlZ2lvbikpfX0pLHQudWkuYXV0b2NvbXBsZXRlO3ZhciBkPS91aS1jb3JuZXItKFthLXpdKXsyLDZ9L2c7dC53aWRnZXQoXCJ1aS5jb250cm9sZ3JvdXBcIix7dmVyc2lvbjpcIjEuMTIuMVwiLGRlZmF1bHRFbGVtZW50OlwiPGRpdj5cIixvcHRpb25zOntkaXJlY3Rpb246XCJob3Jpem9udGFsXCIsZGlzYWJsZWQ6bnVsbCxvbmx5VmlzaWJsZTohMCxpdGVtczp7YnV0dG9uOlwiaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdLCBidXR0b24sIGFcIixjb250cm9sZ3JvdXBMYWJlbDpcIi51aS1jb250cm9sZ3JvdXAtbGFiZWxcIixjaGVja2JveHJhZGlvOlwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXSwgaW5wdXRbdHlwZT0ncmFkaW8nXVwiLHNlbGVjdG1lbnU6XCJzZWxlY3RcIixzcGlubmVyOlwiLnVpLXNwaW5uZXItaW5wdXRcIn19LF9jcmVhdGU6ZnVuY3Rpb24oKXt0aGlzLl9lbmhhbmNlKCl9LF9lbmhhbmNlOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmF0dHIoXCJyb2xlXCIsXCJ0b29sYmFyXCIpLHRoaXMucmVmcmVzaCgpfSxfZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX2NhbGxDaGlsZE1ldGhvZChcImRlc3Ryb3lcIiksdGhpcy5jaGlsZFdpZGdldHMucmVtb3ZlRGF0YShcInVpLWNvbnRyb2xncm91cC1kYXRhXCIpLHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyKFwicm9sZVwiKSx0aGlzLm9wdGlvbnMuaXRlbXMuY29udHJvbGdyb3VwTGFiZWwmJnRoaXMuZWxlbWVudC5maW5kKHRoaXMub3B0aW9ucy5pdGVtcy5jb250cm9sZ3JvdXBMYWJlbCkuZmluZChcIi51aS1jb250cm9sZ3JvdXAtbGFiZWwtY29udGVudHNcIikuY29udGVudHMoKS51bndyYXAoKX0sX2luaXRXaWRnZXRzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyxpPVtdO3QuZWFjaCh0aGlzLm9wdGlvbnMuaXRlbXMsZnVuY3Rpb24ocyxuKXt2YXIgbyxhPXt9O3JldHVybiBuP1wiY29udHJvbGdyb3VwTGFiZWxcIj09PXM/KG89ZS5lbGVtZW50LmZpbmQobiksby5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKTtlLmNoaWxkcmVuKFwiLnVpLWNvbnRyb2xncm91cC1sYWJlbC1jb250ZW50c1wiKS5sZW5ndGh8fGUuY29udGVudHMoKS53cmFwQWxsKFwiPHNwYW4gY2xhc3M9J3VpLWNvbnRyb2xncm91cC1sYWJlbC1jb250ZW50cyc+PC9zcGFuPlwiKX0pLGUuX2FkZENsYXNzKG8sbnVsbCxcInVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudCB1aS1zdGF0ZS1kZWZhdWx0XCIpLGk9aS5jb25jYXQoby5nZXQoKSksdm9pZCAwKToodC5mbltzXSYmKGE9ZVtcIl9cIitzK1wiT3B0aW9uc1wiXT9lW1wiX1wiK3MrXCJPcHRpb25zXCJdKFwibWlkZGxlXCIpOntjbGFzc2VzOnt9fSxlLmVsZW1lbnQuZmluZChuKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIG49dCh0aGlzKSxvPW5bc10oXCJpbnN0YW5jZVwiKSxyPXQud2lkZ2V0LmV4dGVuZCh7fSxhKTtpZihcImJ1dHRvblwiIT09c3x8IW4ucGFyZW50KFwiLnVpLXNwaW5uZXJcIikubGVuZ3RoKXtvfHwobz1uW3NdKClbc10oXCJpbnN0YW5jZVwiKSksbyYmKHIuY2xhc3Nlcz1lLl9yZXNvbHZlQ2xhc3Nlc1ZhbHVlcyhyLmNsYXNzZXMsbykpLG5bc10ocik7dmFyIGg9bltzXShcIndpZGdldFwiKTt0LmRhdGEoaFswXSxcInVpLWNvbnRyb2xncm91cC1kYXRhXCIsbz9vOm5bc10oXCJpbnN0YW5jZVwiKSksaS5wdXNoKGhbMF0pfX0pKSx2b2lkIDApOnZvaWQgMH0pLHRoaXMuY2hpbGRXaWRnZXRzPXQodC51bmlxdWUoaSkpLHRoaXMuX2FkZENsYXNzKHRoaXMuY2hpbGRXaWRnZXRzLFwidWktY29udHJvbGdyb3VwLWl0ZW1cIil9LF9jYWxsQ2hpbGRNZXRob2Q6ZnVuY3Rpb24oZSl7dGhpcy5jaGlsZFdpZGdldHMuZWFjaChmdW5jdGlvbigpe3ZhciBpPXQodGhpcykscz1pLmRhdGEoXCJ1aS1jb250cm9sZ3JvdXAtZGF0YVwiKTtzJiZzW2VdJiZzW2VdKCl9KX0sX3VwZGF0ZUNvcm5lckNsYXNzOmZ1bmN0aW9uKHQsZSl7dmFyIGk9XCJ1aS1jb3JuZXItdG9wIHVpLWNvcm5lci1ib3R0b20gdWktY29ybmVyLWxlZnQgdWktY29ybmVyLXJpZ2h0IHVpLWNvcm5lci1hbGxcIixzPXRoaXMuX2J1aWxkU2ltcGxlT3B0aW9ucyhlLFwibGFiZWxcIikuY2xhc3Nlcy5sYWJlbDt0aGlzLl9yZW1vdmVDbGFzcyh0LG51bGwsaSksdGhpcy5fYWRkQ2xhc3ModCxudWxsLHMpfSxfYnVpbGRTaW1wbGVPcHRpb25zOmZ1bmN0aW9uKHQsZSl7dmFyIGk9XCJ2ZXJ0aWNhbFwiPT09dGhpcy5vcHRpb25zLmRpcmVjdGlvbixzPXtjbGFzc2VzOnt9fTtyZXR1cm4gcy5jbGFzc2VzW2VdPXttaWRkbGU6XCJcIixmaXJzdDpcInVpLWNvcm5lci1cIisoaT9cInRvcFwiOlwibGVmdFwiKSxsYXN0OlwidWktY29ybmVyLVwiKyhpP1wiYm90dG9tXCI6XCJyaWdodFwiKSxvbmx5OlwidWktY29ybmVyLWFsbFwifVt0XSxzfSxfc3Bpbm5lck9wdGlvbnM6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fYnVpbGRTaW1wbGVPcHRpb25zKHQsXCJ1aS1zcGlubmVyXCIpO3JldHVybiBlLmNsYXNzZXNbXCJ1aS1zcGlubmVyLXVwXCJdPVwiXCIsZS5jbGFzc2VzW1widWktc3Bpbm5lci1kb3duXCJdPVwiXCIsZX0sX2J1dHRvbk9wdGlvbnM6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2J1aWxkU2ltcGxlT3B0aW9ucyh0LFwidWktYnV0dG9uXCIpfSxfY2hlY2tib3hyYWRpb09wdGlvbnM6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2J1aWxkU2ltcGxlT3B0aW9ucyh0LFwidWktY2hlY2tib3hyYWRpby1sYWJlbFwiKX0sX3NlbGVjdG1lbnVPcHRpb25zOmZ1bmN0aW9uKHQpe3ZhciBlPVwidmVydGljYWxcIj09PXRoaXMub3B0aW9ucy5kaXJlY3Rpb247cmV0dXJue3dpZHRoOmU/XCJhdXRvXCI6ITEsY2xhc3Nlczp7bWlkZGxlOntcInVpLXNlbGVjdG1lbnUtYnV0dG9uLW9wZW5cIjpcIlwiLFwidWktc2VsZWN0bWVudS1idXR0b24tY2xvc2VkXCI6XCJcIn0sZmlyc3Q6e1widWktc2VsZWN0bWVudS1idXR0b24tb3BlblwiOlwidWktY29ybmVyLVwiKyhlP1widG9wXCI6XCJ0bFwiKSxcInVpLXNlbGVjdG1lbnUtYnV0dG9uLWNsb3NlZFwiOlwidWktY29ybmVyLVwiKyhlP1widG9wXCI6XCJsZWZ0XCIpfSxsYXN0OntcInVpLXNlbGVjdG1lbnUtYnV0dG9uLW9wZW5cIjplP1wiXCI6XCJ1aS1jb3JuZXItdHJcIixcInVpLXNlbGVjdG1lbnUtYnV0dG9uLWNsb3NlZFwiOlwidWktY29ybmVyLVwiKyhlP1wiYm90dG9tXCI6XCJyaWdodFwiKX0sb25seTp7XCJ1aS1zZWxlY3RtZW51LWJ1dHRvbi1vcGVuXCI6XCJ1aS1jb3JuZXItdG9wXCIsXCJ1aS1zZWxlY3RtZW51LWJ1dHRvbi1jbG9zZWRcIjpcInVpLWNvcm5lci1hbGxcIn19W3RdfX0sX3Jlc29sdmVDbGFzc2VzVmFsdWVzOmZ1bmN0aW9uKGUsaSl7dmFyIHM9e307cmV0dXJuIHQuZWFjaChlLGZ1bmN0aW9uKG4pe3ZhciBvPWkub3B0aW9ucy5jbGFzc2VzW25dfHxcIlwiO289dC50cmltKG8ucmVwbGFjZShkLFwiXCIpKSxzW25dPShvK1wiIFwiK2Vbbl0pLnJlcGxhY2UoL1xccysvZyxcIiBcIil9KSxzfSxfc2V0T3B0aW9uOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJkaXJlY3Rpb25cIj09PXQmJnRoaXMuX3JlbW92ZUNsYXNzKFwidWktY29udHJvbGdyb3VwLVwiK3RoaXMub3B0aW9ucy5kaXJlY3Rpb24pLHRoaXMuX3N1cGVyKHQsZSksXCJkaXNhYmxlZFwiPT09dD8odGhpcy5fY2FsbENoaWxkTWV0aG9kKGU/XCJkaXNhYmxlXCI6XCJlbmFibGVcIiksdm9pZCAwKToodGhpcy5yZWZyZXNoKCksdm9pZCAwKX0scmVmcmVzaDpmdW5jdGlvbigpe3ZhciBlLGk9dGhpczt0aGlzLl9hZGRDbGFzcyhcInVpLWNvbnRyb2xncm91cCB1aS1jb250cm9sZ3JvdXAtXCIrdGhpcy5vcHRpb25zLmRpcmVjdGlvbiksXCJob3Jpem9udGFsXCI9PT10aGlzLm9wdGlvbnMuZGlyZWN0aW9uJiZ0aGlzLl9hZGRDbGFzcyhudWxsLFwidWktaGVscGVyLWNsZWFyZml4XCIpLHRoaXMuX2luaXRXaWRnZXRzKCksZT10aGlzLmNoaWxkV2lkZ2V0cyx0aGlzLm9wdGlvbnMub25seVZpc2libGUmJihlPWUuZmlsdGVyKFwiOnZpc2libGVcIikpLGUubGVuZ3RoJiYodC5lYWNoKFtcImZpcnN0XCIsXCJsYXN0XCJdLGZ1bmN0aW9uKHQscyl7dmFyIG49ZVtzXSgpLmRhdGEoXCJ1aS1jb250cm9sZ3JvdXAtZGF0YVwiKTtpZihuJiZpW1wiX1wiK24ud2lkZ2V0TmFtZStcIk9wdGlvbnNcIl0pe3ZhciBvPWlbXCJfXCIrbi53aWRnZXROYW1lK1wiT3B0aW9uc1wiXSgxPT09ZS5sZW5ndGg/XCJvbmx5XCI6cyk7by5jbGFzc2VzPWkuX3Jlc29sdmVDbGFzc2VzVmFsdWVzKG8uY2xhc3NlcyxuKSxuLmVsZW1lbnRbbi53aWRnZXROYW1lXShvKX1lbHNlIGkuX3VwZGF0ZUNvcm5lckNsYXNzKGVbc10oKSxzKX0pLHRoaXMuX2NhbGxDaGlsZE1ldGhvZChcInJlZnJlc2hcIikpfX0pLHQud2lkZ2V0KFwidWkuY2hlY2tib3hyYWRpb1wiLFt0LnVpLmZvcm1SZXNldE1peGluLHt2ZXJzaW9uOlwiMS4xMi4xXCIsb3B0aW9uczp7ZGlzYWJsZWQ6bnVsbCxsYWJlbDpudWxsLGljb246ITAsY2xhc3Nlczp7XCJ1aS1jaGVja2JveHJhZGlvLWxhYmVsXCI6XCJ1aS1jb3JuZXItYWxsXCIsXCJ1aS1jaGVja2JveHJhZGlvLWljb25cIjpcInVpLWNvcm5lci1hbGxcIn19LF9nZXRDcmVhdGVPcHRpb25zOmZ1bmN0aW9uKCl7dmFyIGUsaSxzPXRoaXMsbj10aGlzLl9zdXBlcigpfHx7fTtyZXR1cm4gdGhpcy5fcmVhZFR5cGUoKSxpPXRoaXMuZWxlbWVudC5sYWJlbHMoKSx0aGlzLmxhYmVsPXQoaVtpLmxlbmd0aC0xXSksdGhpcy5sYWJlbC5sZW5ndGh8fHQuZXJyb3IoXCJObyBsYWJlbCBmb3VuZCBmb3IgY2hlY2tib3hyYWRpbyB3aWRnZXRcIiksdGhpcy5vcmlnaW5hbExhYmVsPVwiXCIsdGhpcy5sYWJlbC5jb250ZW50cygpLm5vdCh0aGlzLmVsZW1lbnRbMF0pLmVhY2goZnVuY3Rpb24oKXtzLm9yaWdpbmFsTGFiZWwrPTM9PT10aGlzLm5vZGVUeXBlP3QodGhpcykudGV4dCgpOnRoaXMub3V0ZXJIVE1MfSksdGhpcy5vcmlnaW5hbExhYmVsJiYobi5sYWJlbD10aGlzLm9yaWdpbmFsTGFiZWwpLGU9dGhpcy5lbGVtZW50WzBdLmRpc2FibGVkLG51bGwhPWUmJihuLmRpc2FibGVkPWUpLG59LF9jcmVhdGU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmVsZW1lbnRbMF0uY2hlY2tlZDt0aGlzLl9iaW5kRm9ybVJlc2V0SGFuZGxlcigpLG51bGw9PXRoaXMub3B0aW9ucy5kaXNhYmxlZCYmKHRoaXMub3B0aW9ucy5kaXNhYmxlZD10aGlzLmVsZW1lbnRbMF0uZGlzYWJsZWQpLHRoaXMuX3NldE9wdGlvbihcImRpc2FibGVkXCIsdGhpcy5vcHRpb25zLmRpc2FibGVkKSx0aGlzLl9hZGRDbGFzcyhcInVpLWNoZWNrYm94cmFkaW9cIixcInVpLWhlbHBlci1oaWRkZW4tYWNjZXNzaWJsZVwiKSx0aGlzLl9hZGRDbGFzcyh0aGlzLmxhYmVsLFwidWktY2hlY2tib3hyYWRpby1sYWJlbFwiLFwidWktYnV0dG9uIHVpLXdpZGdldFwiKSxcInJhZGlvXCI9PT10aGlzLnR5cGUmJnRoaXMuX2FkZENsYXNzKHRoaXMubGFiZWwsXCJ1aS1jaGVja2JveHJhZGlvLXJhZGlvLWxhYmVsXCIpLHRoaXMub3B0aW9ucy5sYWJlbCYmdGhpcy5vcHRpb25zLmxhYmVsIT09dGhpcy5vcmlnaW5hbExhYmVsP3RoaXMuX3VwZGF0ZUxhYmVsKCk6dGhpcy5vcmlnaW5hbExhYmVsJiYodGhpcy5vcHRpb25zLmxhYmVsPXRoaXMub3JpZ2luYWxMYWJlbCksdGhpcy5fZW5oYW5jZSgpLHQmJih0aGlzLl9hZGRDbGFzcyh0aGlzLmxhYmVsLFwidWktY2hlY2tib3hyYWRpby1jaGVja2VkXCIsXCJ1aS1zdGF0ZS1hY3RpdmVcIiksdGhpcy5pY29uJiZ0aGlzLl9hZGRDbGFzcyh0aGlzLmljb24sbnVsbCxcInVpLXN0YXRlLWhvdmVyXCIpKSx0aGlzLl9vbih7Y2hhbmdlOlwiX3RvZ2dsZUNsYXNzZXNcIixmb2N1czpmdW5jdGlvbigpe3RoaXMuX2FkZENsYXNzKHRoaXMubGFiZWwsbnVsbCxcInVpLXN0YXRlLWZvY3VzIHVpLXZpc3VhbC1mb2N1c1wiKX0sYmx1cjpmdW5jdGlvbigpe3RoaXMuX3JlbW92ZUNsYXNzKHRoaXMubGFiZWwsbnVsbCxcInVpLXN0YXRlLWZvY3VzIHVpLXZpc3VhbC1mb2N1c1wiKX19KX0sX3JlYWRUeXBlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5lbGVtZW50WzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7dGhpcy50eXBlPXRoaXMuZWxlbWVudFswXS50eXBlLFwiaW5wdXRcIj09PWUmJi9yYWRpb3xjaGVja2JveC8udGVzdCh0aGlzLnR5cGUpfHx0LmVycm9yKFwiQ2FuJ3QgY3JlYXRlIGNoZWNrYm94cmFkaW8gb24gZWxlbWVudC5ub2RlTmFtZT1cIitlK1wiIGFuZCBlbGVtZW50LnR5cGU9XCIrdGhpcy50eXBlKX0sX2VuaGFuY2U6ZnVuY3Rpb24oKXt0aGlzLl91cGRhdGVJY29uKHRoaXMuZWxlbWVudFswXS5jaGVja2VkKX0sd2lkZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGFiZWx9LF9nZXRSYWRpb0dyb3VwOmZ1bmN0aW9uKCl7dmFyIGUsaT10aGlzLmVsZW1lbnRbMF0ubmFtZSxzPVwiaW5wdXRbbmFtZT0nXCIrdC51aS5lc2NhcGVTZWxlY3RvcihpKStcIiddXCI7cmV0dXJuIGk/KGU9dGhpcy5mb3JtLmxlbmd0aD90KHRoaXMuZm9ybVswXS5lbGVtZW50cykuZmlsdGVyKHMpOnQocykuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuIDA9PT10KHRoaXMpLmZvcm0oKS5sZW5ndGh9KSxlLm5vdCh0aGlzLmVsZW1lbnQpKTp0KFtdKX0sX3RvZ2dsZUNsYXNzZXM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmVsZW1lbnRbMF0uY2hlY2tlZDt0aGlzLl90b2dnbGVDbGFzcyh0aGlzLmxhYmVsLFwidWktY2hlY2tib3hyYWRpby1jaGVja2VkXCIsXCJ1aS1zdGF0ZS1hY3RpdmVcIixlKSx0aGlzLm9wdGlvbnMuaWNvbiYmXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLl90b2dnbGVDbGFzcyh0aGlzLmljb24sbnVsbCxcInVpLWljb24tY2hlY2sgdWktc3RhdGUtY2hlY2tlZFwiLGUpLl90b2dnbGVDbGFzcyh0aGlzLmljb24sbnVsbCxcInVpLWljb24tYmxhbmtcIiwhZSksXCJyYWRpb1wiPT09dGhpcy50eXBlJiZ0aGlzLl9nZXRSYWRpb0dyb3VwKCkuZWFjaChmdW5jdGlvbigpe3ZhciBlPXQodGhpcykuY2hlY2tib3hyYWRpbyhcImluc3RhbmNlXCIpO2UmJmUuX3JlbW92ZUNsYXNzKGUubGFiZWwsXCJ1aS1jaGVja2JveHJhZGlvLWNoZWNrZWRcIixcInVpLXN0YXRlLWFjdGl2ZVwiKX0pfSxfZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX3VuYmluZEZvcm1SZXNldEhhbmRsZXIoKSx0aGlzLmljb24mJih0aGlzLmljb24ucmVtb3ZlKCksdGhpcy5pY29uU3BhY2UucmVtb3ZlKCkpfSxfc2V0T3B0aW9uOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJsYWJlbFwiIT09dHx8ZT8odGhpcy5fc3VwZXIodCxlKSxcImRpc2FibGVkXCI9PT10Pyh0aGlzLl90b2dnbGVDbGFzcyh0aGlzLmxhYmVsLG51bGwsXCJ1aS1zdGF0ZS1kaXNhYmxlZFwiLGUpLHRoaXMuZWxlbWVudFswXS5kaXNhYmxlZD1lLHZvaWQgMCk6KHRoaXMucmVmcmVzaCgpLHZvaWQgMCkpOnZvaWQgMH0sX3VwZGF0ZUljb246ZnVuY3Rpb24oZSl7dmFyIGk9XCJ1aS1pY29uIHVpLWljb24tYmFja2dyb3VuZCBcIjt0aGlzLm9wdGlvbnMuaWNvbj8odGhpcy5pY29ufHwodGhpcy5pY29uPXQoXCI8c3Bhbj5cIiksdGhpcy5pY29uU3BhY2U9dChcIjxzcGFuPiA8L3NwYW4+XCIpLHRoaXMuX2FkZENsYXNzKHRoaXMuaWNvblNwYWNlLFwidWktY2hlY2tib3hyYWRpby1pY29uLXNwYWNlXCIpKSxcImNoZWNrYm94XCI9PT10aGlzLnR5cGU/KGkrPWU/XCJ1aS1pY29uLWNoZWNrIHVpLXN0YXRlLWNoZWNrZWRcIjpcInVpLWljb24tYmxhbmtcIix0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLmljb24sbnVsbCxlP1widWktaWNvbi1ibGFua1wiOlwidWktaWNvbi1jaGVja1wiKSk6aSs9XCJ1aS1pY29uLWJsYW5rXCIsdGhpcy5fYWRkQ2xhc3ModGhpcy5pY29uLFwidWktY2hlY2tib3hyYWRpby1pY29uXCIsaSksZXx8dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5pY29uLG51bGwsXCJ1aS1pY29uLWNoZWNrIHVpLXN0YXRlLWNoZWNrZWRcIiksdGhpcy5pY29uLnByZXBlbmRUbyh0aGlzLmxhYmVsKS5hZnRlcih0aGlzLmljb25TcGFjZSkpOnZvaWQgMCE9PXRoaXMuaWNvbiYmKHRoaXMuaWNvbi5yZW1vdmUoKSx0aGlzLmljb25TcGFjZS5yZW1vdmUoKSxkZWxldGUgdGhpcy5pY29uKVxufSxfdXBkYXRlTGFiZWw6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmxhYmVsLmNvbnRlbnRzKCkubm90KHRoaXMuZWxlbWVudFswXSk7dGhpcy5pY29uJiYodD10Lm5vdCh0aGlzLmljb25bMF0pKSx0aGlzLmljb25TcGFjZSYmKHQ9dC5ub3QodGhpcy5pY29uU3BhY2VbMF0pKSx0LnJlbW92ZSgpLHRoaXMubGFiZWwuYXBwZW5kKHRoaXMub3B0aW9ucy5sYWJlbCl9LHJlZnJlc2g6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmVsZW1lbnRbMF0uY2hlY2tlZCxlPXRoaXMuZWxlbWVudFswXS5kaXNhYmxlZDt0aGlzLl91cGRhdGVJY29uKHQpLHRoaXMuX3RvZ2dsZUNsYXNzKHRoaXMubGFiZWwsXCJ1aS1jaGVja2JveHJhZGlvLWNoZWNrZWRcIixcInVpLXN0YXRlLWFjdGl2ZVwiLHQpLG51bGwhPT10aGlzLm9wdGlvbnMubGFiZWwmJnRoaXMuX3VwZGF0ZUxhYmVsKCksZSE9PXRoaXMub3B0aW9ucy5kaXNhYmxlZCYmdGhpcy5fc2V0T3B0aW9ucyh7ZGlzYWJsZWQ6ZX0pfX1dKSx0LnVpLmNoZWNrYm94cmFkaW8sdC53aWRnZXQoXCJ1aS5idXR0b25cIix7dmVyc2lvbjpcIjEuMTIuMVwiLGRlZmF1bHRFbGVtZW50OlwiPGJ1dHRvbj5cIixvcHRpb25zOntjbGFzc2VzOntcInVpLWJ1dHRvblwiOlwidWktY29ybmVyLWFsbFwifSxkaXNhYmxlZDpudWxsLGljb246bnVsbCxpY29uUG9zaXRpb246XCJiZWdpbm5pbmdcIixsYWJlbDpudWxsLHNob3dMYWJlbDohMH0sX2dldENyZWF0ZU9wdGlvbnM6ZnVuY3Rpb24oKXt2YXIgdCxlPXRoaXMuX3N1cGVyKCl8fHt9O3JldHVybiB0aGlzLmlzSW5wdXQ9dGhpcy5lbGVtZW50LmlzKFwiaW5wdXRcIiksdD10aGlzLmVsZW1lbnRbMF0uZGlzYWJsZWQsbnVsbCE9dCYmKGUuZGlzYWJsZWQ9dCksdGhpcy5vcmlnaW5hbExhYmVsPXRoaXMuaXNJbnB1dD90aGlzLmVsZW1lbnQudmFsKCk6dGhpcy5lbGVtZW50Lmh0bWwoKSx0aGlzLm9yaWdpbmFsTGFiZWwmJihlLmxhYmVsPXRoaXMub3JpZ2luYWxMYWJlbCksZX0sX2NyZWF0ZTpmdW5jdGlvbigpeyF0aGlzLm9wdGlvbi5zaG93TGFiZWwmIXRoaXMub3B0aW9ucy5pY29uJiYodGhpcy5vcHRpb25zLnNob3dMYWJlbD0hMCksbnVsbD09dGhpcy5vcHRpb25zLmRpc2FibGVkJiYodGhpcy5vcHRpb25zLmRpc2FibGVkPXRoaXMuZWxlbWVudFswXS5kaXNhYmxlZHx8ITEpLHRoaXMuaGFzVGl0bGU9ISF0aGlzLmVsZW1lbnQuYXR0cihcInRpdGxlXCIpLHRoaXMub3B0aW9ucy5sYWJlbCYmdGhpcy5vcHRpb25zLmxhYmVsIT09dGhpcy5vcmlnaW5hbExhYmVsJiYodGhpcy5pc0lucHV0P3RoaXMuZWxlbWVudC52YWwodGhpcy5vcHRpb25zLmxhYmVsKTp0aGlzLmVsZW1lbnQuaHRtbCh0aGlzLm9wdGlvbnMubGFiZWwpKSx0aGlzLl9hZGRDbGFzcyhcInVpLWJ1dHRvblwiLFwidWktd2lkZ2V0XCIpLHRoaXMuX3NldE9wdGlvbihcImRpc2FibGVkXCIsdGhpcy5vcHRpb25zLmRpc2FibGVkKSx0aGlzLl9lbmhhbmNlKCksdGhpcy5lbGVtZW50LmlzKFwiYVwiKSYmdGhpcy5fb24oe2tleXVwOmZ1bmN0aW9uKGUpe2Uua2V5Q29kZT09PXQudWkua2V5Q29kZS5TUEFDRSYmKGUucHJldmVudERlZmF1bHQoKSx0aGlzLmVsZW1lbnRbMF0uY2xpY2s/dGhpcy5lbGVtZW50WzBdLmNsaWNrKCk6dGhpcy5lbGVtZW50LnRyaWdnZXIoXCJjbGlja1wiKSl9fSl9LF9lbmhhbmNlOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmlzKFwiYnV0dG9uXCIpfHx0aGlzLmVsZW1lbnQuYXR0cihcInJvbGVcIixcImJ1dHRvblwiKSx0aGlzLm9wdGlvbnMuaWNvbiYmKHRoaXMuX3VwZGF0ZUljb24oXCJpY29uXCIsdGhpcy5vcHRpb25zLmljb24pLHRoaXMuX3VwZGF0ZVRvb2x0aXAoKSl9LF91cGRhdGVUb29sdGlwOmZ1bmN0aW9uKCl7dGhpcy50aXRsZT10aGlzLmVsZW1lbnQuYXR0cihcInRpdGxlXCIpLHRoaXMub3B0aW9ucy5zaG93TGFiZWx8fHRoaXMudGl0bGV8fHRoaXMuZWxlbWVudC5hdHRyKFwidGl0bGVcIix0aGlzLm9wdGlvbnMubGFiZWwpfSxfdXBkYXRlSWNvbjpmdW5jdGlvbihlLGkpe3ZhciBzPVwiaWNvblBvc2l0aW9uXCIhPT1lLG49cz90aGlzLm9wdGlvbnMuaWNvblBvc2l0aW9uOmksbz1cInRvcFwiPT09bnx8XCJib3R0b21cIj09PW47dGhpcy5pY29uP3MmJnRoaXMuX3JlbW92ZUNsYXNzKHRoaXMuaWNvbixudWxsLHRoaXMub3B0aW9ucy5pY29uKToodGhpcy5pY29uPXQoXCI8c3Bhbj5cIiksdGhpcy5fYWRkQ2xhc3ModGhpcy5pY29uLFwidWktYnV0dG9uLWljb25cIixcInVpLWljb25cIiksdGhpcy5vcHRpb25zLnNob3dMYWJlbHx8dGhpcy5fYWRkQ2xhc3MoXCJ1aS1idXR0b24taWNvbi1vbmx5XCIpKSxzJiZ0aGlzLl9hZGRDbGFzcyh0aGlzLmljb24sbnVsbCxpKSx0aGlzLl9hdHRhY2hJY29uKG4pLG8/KHRoaXMuX2FkZENsYXNzKHRoaXMuaWNvbixudWxsLFwidWktd2lkZ2V0LWljb24tYmxvY2tcIiksdGhpcy5pY29uU3BhY2UmJnRoaXMuaWNvblNwYWNlLnJlbW92ZSgpKToodGhpcy5pY29uU3BhY2V8fCh0aGlzLmljb25TcGFjZT10KFwiPHNwYW4+IDwvc3Bhbj5cIiksdGhpcy5fYWRkQ2xhc3ModGhpcy5pY29uU3BhY2UsXCJ1aS1idXR0b24taWNvbi1zcGFjZVwiKSksdGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5pY29uLG51bGwsXCJ1aS13aWdldC1pY29uLWJsb2NrXCIpLHRoaXMuX2F0dGFjaEljb25TcGFjZShuKSl9LF9kZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnJlbW92ZUF0dHIoXCJyb2xlXCIpLHRoaXMuaWNvbiYmdGhpcy5pY29uLnJlbW92ZSgpLHRoaXMuaWNvblNwYWNlJiZ0aGlzLmljb25TcGFjZS5yZW1vdmUoKSx0aGlzLmhhc1RpdGxlfHx0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cihcInRpdGxlXCIpfSxfYXR0YWNoSWNvblNwYWNlOmZ1bmN0aW9uKHQpe3RoaXMuaWNvblsvXig/OmVuZHxib3R0b20pLy50ZXN0KHQpP1wiYmVmb3JlXCI6XCJhZnRlclwiXSh0aGlzLmljb25TcGFjZSl9LF9hdHRhY2hJY29uOmZ1bmN0aW9uKHQpe3RoaXMuZWxlbWVudFsvXig/OmVuZHxib3R0b20pLy50ZXN0KHQpP1wiYXBwZW5kXCI6XCJwcmVwZW5kXCJdKHRoaXMuaWNvbil9LF9zZXRPcHRpb25zOmZ1bmN0aW9uKHQpe3ZhciBlPXZvaWQgMD09PXQuc2hvd0xhYmVsP3RoaXMub3B0aW9ucy5zaG93TGFiZWw6dC5zaG93TGFiZWwsaT12b2lkIDA9PT10Lmljb24/dGhpcy5vcHRpb25zLmljb246dC5pY29uO2V8fGl8fCh0LnNob3dMYWJlbD0hMCksdGhpcy5fc3VwZXIodCl9LF9zZXRPcHRpb246ZnVuY3Rpb24odCxlKXtcImljb25cIj09PXQmJihlP3RoaXMuX3VwZGF0ZUljb24odCxlKTp0aGlzLmljb24mJih0aGlzLmljb24ucmVtb3ZlKCksdGhpcy5pY29uU3BhY2UmJnRoaXMuaWNvblNwYWNlLnJlbW92ZSgpKSksXCJpY29uUG9zaXRpb25cIj09PXQmJnRoaXMuX3VwZGF0ZUljb24odCxlKSxcInNob3dMYWJlbFwiPT09dCYmKHRoaXMuX3RvZ2dsZUNsYXNzKFwidWktYnV0dG9uLWljb24tb25seVwiLG51bGwsIWUpLHRoaXMuX3VwZGF0ZVRvb2x0aXAoKSksXCJsYWJlbFwiPT09dCYmKHRoaXMuaXNJbnB1dD90aGlzLmVsZW1lbnQudmFsKGUpOih0aGlzLmVsZW1lbnQuaHRtbChlKSx0aGlzLmljb24mJih0aGlzLl9hdHRhY2hJY29uKHRoaXMub3B0aW9ucy5pY29uUG9zaXRpb24pLHRoaXMuX2F0dGFjaEljb25TcGFjZSh0aGlzLm9wdGlvbnMuaWNvblBvc2l0aW9uKSkpKSx0aGlzLl9zdXBlcih0LGUpLFwiZGlzYWJsZWRcIj09PXQmJih0aGlzLl90b2dnbGVDbGFzcyhudWxsLFwidWktc3RhdGUtZGlzYWJsZWRcIixlKSx0aGlzLmVsZW1lbnRbMF0uZGlzYWJsZWQ9ZSxlJiZ0aGlzLmVsZW1lbnQuYmx1cigpKX0scmVmcmVzaDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuZWxlbWVudC5pcyhcImlucHV0LCBidXR0b25cIik/dGhpcy5lbGVtZW50WzBdLmRpc2FibGVkOnRoaXMuZWxlbWVudC5oYXNDbGFzcyhcInVpLWJ1dHRvbi1kaXNhYmxlZFwiKTt0IT09dGhpcy5vcHRpb25zLmRpc2FibGVkJiZ0aGlzLl9zZXRPcHRpb25zKHtkaXNhYmxlZDp0fSksdGhpcy5fdXBkYXRlVG9vbHRpcCgpfX0pLHQudWlCYWNrQ29tcGF0IT09ITEmJih0LndpZGdldChcInVpLmJ1dHRvblwiLHQudWkuYnV0dG9uLHtvcHRpb25zOnt0ZXh0OiEwLGljb25zOntwcmltYXJ5Om51bGwsc2Vjb25kYXJ5Om51bGx9fSxfY3JlYXRlOmZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLnNob3dMYWJlbCYmIXRoaXMub3B0aW9ucy50ZXh0JiYodGhpcy5vcHRpb25zLnNob3dMYWJlbD10aGlzLm9wdGlvbnMudGV4dCksIXRoaXMub3B0aW9ucy5zaG93TGFiZWwmJnRoaXMub3B0aW9ucy50ZXh0JiYodGhpcy5vcHRpb25zLnRleHQ9dGhpcy5vcHRpb25zLnNob3dMYWJlbCksdGhpcy5vcHRpb25zLmljb258fCF0aGlzLm9wdGlvbnMuaWNvbnMucHJpbWFyeSYmIXRoaXMub3B0aW9ucy5pY29ucy5zZWNvbmRhcnk/dGhpcy5vcHRpb25zLmljb24mJih0aGlzLm9wdGlvbnMuaWNvbnMucHJpbWFyeT10aGlzLm9wdGlvbnMuaWNvbik6dGhpcy5vcHRpb25zLmljb25zLnByaW1hcnk/dGhpcy5vcHRpb25zLmljb249dGhpcy5vcHRpb25zLmljb25zLnByaW1hcnk6KHRoaXMub3B0aW9ucy5pY29uPXRoaXMub3B0aW9ucy5pY29ucy5zZWNvbmRhcnksdGhpcy5vcHRpb25zLmljb25Qb3NpdGlvbj1cImVuZFwiKSx0aGlzLl9zdXBlcigpfSxfc2V0T3B0aW9uOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJ0ZXh0XCI9PT10Pyh0aGlzLl9zdXBlcihcInNob3dMYWJlbFwiLGUpLHZvaWQgMCk6KFwic2hvd0xhYmVsXCI9PT10JiYodGhpcy5vcHRpb25zLnRleHQ9ZSksXCJpY29uXCI9PT10JiYodGhpcy5vcHRpb25zLmljb25zLnByaW1hcnk9ZSksXCJpY29uc1wiPT09dCYmKGUucHJpbWFyeT8odGhpcy5fc3VwZXIoXCJpY29uXCIsZS5wcmltYXJ5KSx0aGlzLl9zdXBlcihcImljb25Qb3NpdGlvblwiLFwiYmVnaW5uaW5nXCIpKTplLnNlY29uZGFyeSYmKHRoaXMuX3N1cGVyKFwiaWNvblwiLGUuc2Vjb25kYXJ5KSx0aGlzLl9zdXBlcihcImljb25Qb3NpdGlvblwiLFwiZW5kXCIpKSksdGhpcy5fc3VwZXJBcHBseShhcmd1bWVudHMpLHZvaWQgMCl9fSksdC5mbi5idXR0b249ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMubGVuZ3RofHx0aGlzLmxlbmd0aCYmXCJJTlBVVFwiIT09dGhpc1swXS50YWdOYW1lfHx0aGlzLmxlbmd0aCYmXCJJTlBVVFwiPT09dGhpc1swXS50YWdOYW1lJiZcImNoZWNrYm94XCIhPT10aGlzLmF0dHIoXCJ0eXBlXCIpJiZcInJhZGlvXCIhPT10aGlzLmF0dHIoXCJ0eXBlXCIpP2UuYXBwbHkodGhpcyxhcmd1bWVudHMpOih0LnVpLmNoZWNrYm94cmFkaW98fHQuZXJyb3IoXCJDaGVja2JveHJhZGlvIHdpZGdldCBtaXNzaW5nXCIpLDA9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMuY2hlY2tib3hyYWRpbyh7aWNvbjohMX0pOnRoaXMuY2hlY2tib3hyYWRpby5hcHBseSh0aGlzLGFyZ3VtZW50cykpfX0odC5mbi5idXR0b24pLHQuZm4uYnV0dG9uc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHQudWkuY29udHJvbGdyb3VwfHx0LmVycm9yKFwiQ29udHJvbGdyb3VwIHdpZGdldCBtaXNzaW5nXCIpLFwib3B0aW9uXCI9PT1hcmd1bWVudHNbMF0mJlwiaXRlbXNcIj09PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzJdP3RoaXMuY29udHJvbGdyb3VwLmFwcGx5KHRoaXMsW2FyZ3VtZW50c1swXSxcIml0ZW1zLmJ1dHRvblwiLGFyZ3VtZW50c1syXV0pOlwib3B0aW9uXCI9PT1hcmd1bWVudHNbMF0mJlwiaXRlbXNcIj09PWFyZ3VtZW50c1sxXT90aGlzLmNvbnRyb2xncm91cC5hcHBseSh0aGlzLFthcmd1bWVudHNbMF0sXCJpdGVtcy5idXR0b25cIl0pOihcIm9iamVjdFwiPT10eXBlb2YgYXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0uaXRlbXMmJihhcmd1bWVudHNbMF0uaXRlbXM9e2J1dHRvbjphcmd1bWVudHNbMF0uaXRlbXN9KSx0aGlzLmNvbnRyb2xncm91cC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSksdC51aS5idXR0b24sdC5leHRlbmQodC51aSx7ZGF0ZXBpY2tlcjp7dmVyc2lvbjpcIjEuMTIuMVwifX0pO3ZhciBwO3QuZXh0ZW5kKHMucHJvdG90eXBlLHttYXJrZXJDbGFzc05hbWU6XCJoYXNEYXRlcGlja2VyXCIsbWF4Um93czo0LF93aWRnZXREYXRlcGlja2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZHBEaXZ9LHNldERlZmF1bHRzOmZ1bmN0aW9uKHQpe3JldHVybiBhKHRoaXMuX2RlZmF1bHRzLHR8fHt9KSx0aGlzfSxfYXR0YWNoRGF0ZXBpY2tlcjpmdW5jdGlvbihlLGkpe3ZhciBzLG4sbztzPWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxuPVwiZGl2XCI9PT1zfHxcInNwYW5cIj09PXMsZS5pZHx8KHRoaXMudXVpZCs9MSxlLmlkPVwiZHBcIit0aGlzLnV1aWQpLG89dGhpcy5fbmV3SW5zdCh0KGUpLG4pLG8uc2V0dGluZ3M9dC5leHRlbmQoe30saXx8e30pLFwiaW5wdXRcIj09PXM/dGhpcy5fY29ubmVjdERhdGVwaWNrZXIoZSxvKTpuJiZ0aGlzLl9pbmxpbmVEYXRlcGlja2VyKGUsbyl9LF9uZXdJbnN0OmZ1bmN0aW9uKGUsaSl7dmFyIHM9ZVswXS5pZC5yZXBsYWNlKC8oW15BLVphLXowLTlfXFwtXSkvZyxcIlxcXFxcXFxcJDFcIik7cmV0dXJue2lkOnMsaW5wdXQ6ZSxzZWxlY3RlZERheTowLHNlbGVjdGVkTW9udGg6MCxzZWxlY3RlZFllYXI6MCxkcmF3TW9udGg6MCxkcmF3WWVhcjowLGlubGluZTppLGRwRGl2Omk/bih0KFwiPGRpdiBjbGFzcz0nXCIrdGhpcy5faW5saW5lQ2xhc3MrXCIgdWktZGF0ZXBpY2tlciB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktaGVscGVyLWNsZWFyZml4IHVpLWNvcm5lci1hbGwnPjwvZGl2PlwiKSk6dGhpcy5kcERpdn19LF9jb25uZWN0RGF0ZXBpY2tlcjpmdW5jdGlvbihlLGkpe3ZhciBzPXQoZSk7aS5hcHBlbmQ9dChbXSksaS50cmlnZ2VyPXQoW10pLHMuaGFzQ2xhc3ModGhpcy5tYXJrZXJDbGFzc05hbWUpfHwodGhpcy5fYXR0YWNobWVudHMocyxpKSxzLmFkZENsYXNzKHRoaXMubWFya2VyQ2xhc3NOYW1lKS5vbihcImtleWRvd25cIix0aGlzLl9kb0tleURvd24pLm9uKFwia2V5cHJlc3NcIix0aGlzLl9kb0tleVByZXNzKS5vbihcImtleXVwXCIsdGhpcy5fZG9LZXlVcCksdGhpcy5fYXV0b1NpemUoaSksdC5kYXRhKGUsXCJkYXRlcGlja2VyXCIsaSksaS5zZXR0aW5ncy5kaXNhYmxlZCYmdGhpcy5fZGlzYWJsZURhdGVwaWNrZXIoZSkpfSxfYXR0YWNobWVudHM6ZnVuY3Rpb24oZSxpKXt2YXIgcyxuLG8sYT10aGlzLl9nZXQoaSxcImFwcGVuZFRleHRcIikscj10aGlzLl9nZXQoaSxcImlzUlRMXCIpO2kuYXBwZW5kJiZpLmFwcGVuZC5yZW1vdmUoKSxhJiYoaS5hcHBlbmQ9dChcIjxzcGFuIGNsYXNzPSdcIit0aGlzLl9hcHBlbmRDbGFzcytcIic+XCIrYStcIjwvc3Bhbj5cIiksZVtyP1wiYmVmb3JlXCI6XCJhZnRlclwiXShpLmFwcGVuZCkpLGUub2ZmKFwiZm9jdXNcIix0aGlzLl9zaG93RGF0ZXBpY2tlciksaS50cmlnZ2VyJiZpLnRyaWdnZXIucmVtb3ZlKCkscz10aGlzLl9nZXQoaSxcInNob3dPblwiKSwoXCJmb2N1c1wiPT09c3x8XCJib3RoXCI9PT1zKSYmZS5vbihcImZvY3VzXCIsdGhpcy5fc2hvd0RhdGVwaWNrZXIpLChcImJ1dHRvblwiPT09c3x8XCJib3RoXCI9PT1zKSYmKG49dGhpcy5fZ2V0KGksXCJidXR0b25UZXh0XCIpLG89dGhpcy5fZ2V0KGksXCJidXR0b25JbWFnZVwiKSxpLnRyaWdnZXI9dCh0aGlzLl9nZXQoaSxcImJ1dHRvbkltYWdlT25seVwiKT90KFwiPGltZy8+XCIpLmFkZENsYXNzKHRoaXMuX3RyaWdnZXJDbGFzcykuYXR0cih7c3JjOm8sYWx0Om4sdGl0bGU6bn0pOnQoXCI8YnV0dG9uIHR5cGU9J2J1dHRvbic+PC9idXR0b24+XCIpLmFkZENsYXNzKHRoaXMuX3RyaWdnZXJDbGFzcykuaHRtbChvP3QoXCI8aW1nLz5cIikuYXR0cih7c3JjOm8sYWx0Om4sdGl0bGU6bn0pOm4pKSxlW3I/XCJiZWZvcmVcIjpcImFmdGVyXCJdKGkudHJpZ2dlciksaS50cmlnZ2VyLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe3JldHVybiB0LmRhdGVwaWNrZXIuX2RhdGVwaWNrZXJTaG93aW5nJiZ0LmRhdGVwaWNrZXIuX2xhc3RJbnB1dD09PWVbMF0/dC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcigpOnQuZGF0ZXBpY2tlci5fZGF0ZXBpY2tlclNob3dpbmcmJnQuZGF0ZXBpY2tlci5fbGFzdElucHV0IT09ZVswXT8odC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcigpLHQuZGF0ZXBpY2tlci5fc2hvd0RhdGVwaWNrZXIoZVswXSkpOnQuZGF0ZXBpY2tlci5fc2hvd0RhdGVwaWNrZXIoZVswXSksITF9KSl9LF9hdXRvU2l6ZTpmdW5jdGlvbih0KXtpZih0aGlzLl9nZXQodCxcImF1dG9TaXplXCIpJiYhdC5pbmxpbmUpe3ZhciBlLGkscyxuLG89bmV3IERhdGUoMjAwOSwxMSwyMCksYT10aGlzLl9nZXQodCxcImRhdGVGb3JtYXRcIik7YS5tYXRjaCgvW0RNXS8pJiYoZT1mdW5jdGlvbih0KXtmb3IoaT0wLHM9MCxuPTA7dC5sZW5ndGg+bjtuKyspdFtuXS5sZW5ndGg+aSYmKGk9dFtuXS5sZW5ndGgscz1uKTtyZXR1cm4gc30sby5zZXRNb250aChlKHRoaXMuX2dldCh0LGEubWF0Y2goL01NLyk/XCJtb250aE5hbWVzXCI6XCJtb250aE5hbWVzU2hvcnRcIikpKSxvLnNldERhdGUoZSh0aGlzLl9nZXQodCxhLm1hdGNoKC9ERC8pP1wiZGF5TmFtZXNcIjpcImRheU5hbWVzU2hvcnRcIikpKzIwLW8uZ2V0RGF5KCkpKSx0LmlucHV0LmF0dHIoXCJzaXplXCIsdGhpcy5fZm9ybWF0RGF0ZSh0LG8pLmxlbmd0aCl9fSxfaW5saW5lRGF0ZXBpY2tlcjpmdW5jdGlvbihlLGkpe3ZhciBzPXQoZSk7cy5oYXNDbGFzcyh0aGlzLm1hcmtlckNsYXNzTmFtZSl8fChzLmFkZENsYXNzKHRoaXMubWFya2VyQ2xhc3NOYW1lKS5hcHBlbmQoaS5kcERpdiksdC5kYXRhKGUsXCJkYXRlcGlja2VyXCIsaSksdGhpcy5fc2V0RGF0ZShpLHRoaXMuX2dldERlZmF1bHREYXRlKGkpLCEwKSx0aGlzLl91cGRhdGVEYXRlcGlja2VyKGkpLHRoaXMuX3VwZGF0ZUFsdGVybmF0ZShpKSxpLnNldHRpbmdzLmRpc2FibGVkJiZ0aGlzLl9kaXNhYmxlRGF0ZXBpY2tlcihlKSxpLmRwRGl2LmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpKX0sX2RpYWxvZ0RhdGVwaWNrZXI6ZnVuY3Rpb24oZSxpLHMsbixvKXt2YXIgcixoLGwsdSxjLGQ9dGhpcy5fZGlhbG9nSW5zdDtyZXR1cm4gZHx8KHRoaXMudXVpZCs9MSxyPVwiZHBcIit0aGlzLnV1aWQsdGhpcy5fZGlhbG9nSW5wdXQ9dChcIjxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nXCIrcitcIicgc3R5bGU9J3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtMTAwcHg7IHdpZHRoOiAwcHg7Jy8+XCIpLHRoaXMuX2RpYWxvZ0lucHV0Lm9uKFwia2V5ZG93blwiLHRoaXMuX2RvS2V5RG93biksdChcImJvZHlcIikuYXBwZW5kKHRoaXMuX2RpYWxvZ0lucHV0KSxkPXRoaXMuX2RpYWxvZ0luc3Q9dGhpcy5fbmV3SW5zdCh0aGlzLl9kaWFsb2dJbnB1dCwhMSksZC5zZXR0aW5ncz17fSx0LmRhdGEodGhpcy5fZGlhbG9nSW5wdXRbMF0sXCJkYXRlcGlja2VyXCIsZCkpLGEoZC5zZXR0aW5ncyxufHx7fSksaT1pJiZpLmNvbnN0cnVjdG9yPT09RGF0ZT90aGlzLl9mb3JtYXREYXRlKGQsaSk6aSx0aGlzLl9kaWFsb2dJbnB1dC52YWwoaSksdGhpcy5fcG9zPW8/by5sZW5ndGg/bzpbby5wYWdlWCxvLnBhZ2VZXTpudWxsLHRoaXMuX3Bvc3x8KGg9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLGw9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCx1PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0fHxkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsYz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCx0aGlzLl9wb3M9W2gvMi0xMDArdSxsLzItMTUwK2NdKSx0aGlzLl9kaWFsb2dJbnB1dC5jc3MoXCJsZWZ0XCIsdGhpcy5fcG9zWzBdKzIwK1wicHhcIikuY3NzKFwidG9wXCIsdGhpcy5fcG9zWzFdK1wicHhcIiksZC5zZXR0aW5ncy5vblNlbGVjdD1zLHRoaXMuX2luRGlhbG9nPSEwLHRoaXMuZHBEaXYuYWRkQ2xhc3ModGhpcy5fZGlhbG9nQ2xhc3MpLHRoaXMuX3Nob3dEYXRlcGlja2VyKHRoaXMuX2RpYWxvZ0lucHV0WzBdKSx0LmJsb2NrVUkmJnQuYmxvY2tVSSh0aGlzLmRwRGl2KSx0LmRhdGEodGhpcy5fZGlhbG9nSW5wdXRbMF0sXCJkYXRlcGlja2VyXCIsZCksdGhpc30sX2Rlc3Ryb3lEYXRlcGlja2VyOmZ1bmN0aW9uKGUpe3ZhciBpLHM9dChlKSxuPXQuZGF0YShlLFwiZGF0ZXBpY2tlclwiKTtzLmhhc0NsYXNzKHRoaXMubWFya2VyQ2xhc3NOYW1lKSYmKGk9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHQucmVtb3ZlRGF0YShlLFwiZGF0ZXBpY2tlclwiKSxcImlucHV0XCI9PT1pPyhuLmFwcGVuZC5yZW1vdmUoKSxuLnRyaWdnZXIucmVtb3ZlKCkscy5yZW1vdmVDbGFzcyh0aGlzLm1hcmtlckNsYXNzTmFtZSkub2ZmKFwiZm9jdXNcIix0aGlzLl9zaG93RGF0ZXBpY2tlcikub2ZmKFwia2V5ZG93blwiLHRoaXMuX2RvS2V5RG93bikub2ZmKFwia2V5cHJlc3NcIix0aGlzLl9kb0tleVByZXNzKS5vZmYoXCJrZXl1cFwiLHRoaXMuX2RvS2V5VXApKTooXCJkaXZcIj09PWl8fFwic3BhblwiPT09aSkmJnMucmVtb3ZlQ2xhc3ModGhpcy5tYXJrZXJDbGFzc05hbWUpLmVtcHR5KCkscD09PW4mJihwPW51bGwpKX0sX2VuYWJsZURhdGVwaWNrZXI6ZnVuY3Rpb24oZSl7dmFyIGkscyxuPXQoZSksbz10LmRhdGEoZSxcImRhdGVwaWNrZXJcIik7bi5oYXNDbGFzcyh0aGlzLm1hcmtlckNsYXNzTmFtZSkmJihpPWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcImlucHV0XCI9PT1pPyhlLmRpc2FibGVkPSExLG8udHJpZ2dlci5maWx0ZXIoXCJidXR0b25cIikuZWFjaChmdW5jdGlvbigpe3RoaXMuZGlzYWJsZWQ9ITF9KS5lbmQoKS5maWx0ZXIoXCJpbWdcIikuY3NzKHtvcGFjaXR5OlwiMS4wXCIsY3Vyc29yOlwiXCJ9KSk6KFwiZGl2XCI9PT1pfHxcInNwYW5cIj09PWkpJiYocz1uLmNoaWxkcmVuKFwiLlwiK3RoaXMuX2lubGluZUNsYXNzKSxzLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoXCJ1aS1zdGF0ZS1kaXNhYmxlZFwiKSxzLmZpbmQoXCJzZWxlY3QudWktZGF0ZXBpY2tlci1tb250aCwgc2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhclwiKS5wcm9wKFwiZGlzYWJsZWRcIiwhMSkpLHRoaXMuX2Rpc2FibGVkSW5wdXRzPXQubWFwKHRoaXMuX2Rpc2FibGVkSW5wdXRzLGZ1bmN0aW9uKHQpe3JldHVybiB0PT09ZT9udWxsOnR9KSl9LF9kaXNhYmxlRGF0ZXBpY2tlcjpmdW5jdGlvbihlKXt2YXIgaSxzLG49dChlKSxvPXQuZGF0YShlLFwiZGF0ZXBpY2tlclwiKTtuLmhhc0NsYXNzKHRoaXMubWFya2VyQ2xhc3NOYW1lKSYmKGk9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFwiaW5wdXRcIj09PWk/KGUuZGlzYWJsZWQ9ITAsby50cmlnZ2VyLmZpbHRlcihcImJ1dHRvblwiKS5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlZD0hMH0pLmVuZCgpLmZpbHRlcihcImltZ1wiKS5jc3Moe29wYWNpdHk6XCIwLjVcIixjdXJzb3I6XCJkZWZhdWx0XCJ9KSk6KFwiZGl2XCI9PT1pfHxcInNwYW5cIj09PWkpJiYocz1uLmNoaWxkcmVuKFwiLlwiK3RoaXMuX2lubGluZUNsYXNzKSxzLmNoaWxkcmVuKCkuYWRkQ2xhc3MoXCJ1aS1zdGF0ZS1kaXNhYmxlZFwiKSxzLmZpbmQoXCJzZWxlY3QudWktZGF0ZXBpY2tlci1tb250aCwgc2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhclwiKS5wcm9wKFwiZGlzYWJsZWRcIiwhMCkpLHRoaXMuX2Rpc2FibGVkSW5wdXRzPXQubWFwKHRoaXMuX2Rpc2FibGVkSW5wdXRzLGZ1bmN0aW9uKHQpe3JldHVybiB0PT09ZT9udWxsOnR9KSx0aGlzLl9kaXNhYmxlZElucHV0c1t0aGlzLl9kaXNhYmxlZElucHV0cy5sZW5ndGhdPWUpfSxfaXNEaXNhYmxlZERhdGVwaWNrZXI6ZnVuY3Rpb24odCl7aWYoIXQpcmV0dXJuITE7Zm9yKHZhciBlPTA7dGhpcy5fZGlzYWJsZWRJbnB1dHMubGVuZ3RoPmU7ZSsrKWlmKHRoaXMuX2Rpc2FibGVkSW5wdXRzW2VdPT09dClyZXR1cm4hMDtyZXR1cm4hMX0sX2dldEluc3Q6ZnVuY3Rpb24oZSl7dHJ5e3JldHVybiB0LmRhdGEoZSxcImRhdGVwaWNrZXJcIil9Y2F0Y2goaSl7dGhyb3dcIk1pc3NpbmcgaW5zdGFuY2UgZGF0YSBmb3IgdGhpcyBkYXRlcGlja2VyXCJ9fSxfb3B0aW9uRGF0ZXBpY2tlcjpmdW5jdGlvbihlLGkscyl7dmFyIG4sbyxyLGgsbD10aGlzLl9nZXRJbnN0KGUpO3JldHVybiAyPT09YXJndW1lbnRzLmxlbmd0aCYmXCJzdHJpbmdcIj09dHlwZW9mIGk/XCJkZWZhdWx0c1wiPT09aT90LmV4dGVuZCh7fSx0LmRhdGVwaWNrZXIuX2RlZmF1bHRzKTpsP1wiYWxsXCI9PT1pP3QuZXh0ZW5kKHt9LGwuc2V0dGluZ3MpOnRoaXMuX2dldChsLGkpOm51bGw6KG49aXx8e30sXCJzdHJpbmdcIj09dHlwZW9mIGkmJihuPXt9LG5baV09cyksbCYmKHRoaXMuX2N1ckluc3Q9PT1sJiZ0aGlzLl9oaWRlRGF0ZXBpY2tlcigpLG89dGhpcy5fZ2V0RGF0ZURhdGVwaWNrZXIoZSwhMCkscj10aGlzLl9nZXRNaW5NYXhEYXRlKGwsXCJtaW5cIiksaD10aGlzLl9nZXRNaW5NYXhEYXRlKGwsXCJtYXhcIiksYShsLnNldHRpbmdzLG4pLG51bGwhPT1yJiZ2b2lkIDAhPT1uLmRhdGVGb3JtYXQmJnZvaWQgMD09PW4ubWluRGF0ZSYmKGwuc2V0dGluZ3MubWluRGF0ZT10aGlzLl9mb3JtYXREYXRlKGwscikpLG51bGwhPT1oJiZ2b2lkIDAhPT1uLmRhdGVGb3JtYXQmJnZvaWQgMD09PW4ubWF4RGF0ZSYmKGwuc2V0dGluZ3MubWF4RGF0ZT10aGlzLl9mb3JtYXREYXRlKGwsaCkpLFwiZGlzYWJsZWRcImluIG4mJihuLmRpc2FibGVkP3RoaXMuX2Rpc2FibGVEYXRlcGlja2VyKGUpOnRoaXMuX2VuYWJsZURhdGVwaWNrZXIoZSkpLHRoaXMuX2F0dGFjaG1lbnRzKHQoZSksbCksdGhpcy5fYXV0b1NpemUobCksdGhpcy5fc2V0RGF0ZShsLG8pLHRoaXMuX3VwZGF0ZUFsdGVybmF0ZShsKSx0aGlzLl91cGRhdGVEYXRlcGlja2VyKGwpKSx2b2lkIDApfSxfY2hhbmdlRGF0ZXBpY2tlcjpmdW5jdGlvbih0LGUsaSl7dGhpcy5fb3B0aW9uRGF0ZXBpY2tlcih0LGUsaSl9LF9yZWZyZXNoRGF0ZXBpY2tlcjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9nZXRJbnN0KHQpO2UmJnRoaXMuX3VwZGF0ZURhdGVwaWNrZXIoZSl9LF9zZXREYXRlRGF0ZXBpY2tlcjpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuX2dldEluc3QodCk7aSYmKHRoaXMuX3NldERhdGUoaSxlKSx0aGlzLl91cGRhdGVEYXRlcGlja2VyKGkpLHRoaXMuX3VwZGF0ZUFsdGVybmF0ZShpKSl9LF9nZXREYXRlRGF0ZXBpY2tlcjpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuX2dldEluc3QodCk7cmV0dXJuIGkmJiFpLmlubGluZSYmdGhpcy5fc2V0RGF0ZUZyb21GaWVsZChpLGUpLGk/dGhpcy5fZ2V0RGF0ZShpKTpudWxsfSxfZG9LZXlEb3duOmZ1bmN0aW9uKGUpe3ZhciBpLHMsbixvPXQuZGF0ZXBpY2tlci5fZ2V0SW5zdChlLnRhcmdldCksYT0hMCxyPW8uZHBEaXYuaXMoXCIudWktZGF0ZXBpY2tlci1ydGxcIik7aWYoby5fa2V5RXZlbnQ9ITAsdC5kYXRlcGlja2VyLl9kYXRlcGlja2VyU2hvd2luZylzd2l0Y2goZS5rZXlDb2RlKXtjYXNlIDk6dC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcigpLGE9ITE7YnJlYWs7Y2FzZSAxMzpyZXR1cm4gbj10KFwidGQuXCIrdC5kYXRlcGlja2VyLl9kYXlPdmVyQ2xhc3MrXCI6bm90KC5cIit0LmRhdGVwaWNrZXIuX2N1cnJlbnRDbGFzcytcIilcIixvLmRwRGl2KSxuWzBdJiZ0LmRhdGVwaWNrZXIuX3NlbGVjdERheShlLnRhcmdldCxvLnNlbGVjdGVkTW9udGgsby5zZWxlY3RlZFllYXIsblswXSksaT10LmRhdGVwaWNrZXIuX2dldChvLFwib25TZWxlY3RcIiksaT8ocz10LmRhdGVwaWNrZXIuX2Zvcm1hdERhdGUobyksaS5hcHBseShvLmlucHV0P28uaW5wdXRbMF06bnVsbCxbcyxvXSkpOnQuZGF0ZXBpY2tlci5faGlkZURhdGVwaWNrZXIoKSwhMTtjYXNlIDI3OnQuZGF0ZXBpY2tlci5faGlkZURhdGVwaWNrZXIoKTticmVhaztjYXNlIDMzOnQuZGF0ZXBpY2tlci5fYWRqdXN0RGF0ZShlLnRhcmdldCxlLmN0cmxLZXk/LXQuZGF0ZXBpY2tlci5fZ2V0KG8sXCJzdGVwQmlnTW9udGhzXCIpOi10LmRhdGVwaWNrZXIuX2dldChvLFwic3RlcE1vbnRoc1wiKSxcIk1cIik7YnJlYWs7Y2FzZSAzNDp0LmRhdGVwaWNrZXIuX2FkanVzdERhdGUoZS50YXJnZXQsZS5jdHJsS2V5Pyt0LmRhdGVwaWNrZXIuX2dldChvLFwic3RlcEJpZ01vbnRoc1wiKTordC5kYXRlcGlja2VyLl9nZXQobyxcInN0ZXBNb250aHNcIiksXCJNXCIpO2JyZWFrO2Nhc2UgMzU6KGUuY3RybEtleXx8ZS5tZXRhS2V5KSYmdC5kYXRlcGlja2VyLl9jbGVhckRhdGUoZS50YXJnZXQpLGE9ZS5jdHJsS2V5fHxlLm1ldGFLZXk7YnJlYWs7Y2FzZSAzNjooZS5jdHJsS2V5fHxlLm1ldGFLZXkpJiZ0LmRhdGVwaWNrZXIuX2dvdG9Ub2RheShlLnRhcmdldCksYT1lLmN0cmxLZXl8fGUubWV0YUtleTticmVhaztjYXNlIDM3OihlLmN0cmxLZXl8fGUubWV0YUtleSkmJnQuZGF0ZXBpY2tlci5fYWRqdXN0RGF0ZShlLnRhcmdldCxyPzE6LTEsXCJEXCIpLGE9ZS5jdHJsS2V5fHxlLm1ldGFLZXksZS5vcmlnaW5hbEV2ZW50LmFsdEtleSYmdC5kYXRlcGlja2VyLl9hZGp1c3REYXRlKGUudGFyZ2V0LGUuY3RybEtleT8tdC5kYXRlcGlja2VyLl9nZXQobyxcInN0ZXBCaWdNb250aHNcIik6LXQuZGF0ZXBpY2tlci5fZ2V0KG8sXCJzdGVwTW9udGhzXCIpLFwiTVwiKTticmVhaztjYXNlIDM4OihlLmN0cmxLZXl8fGUubWV0YUtleSkmJnQuZGF0ZXBpY2tlci5fYWRqdXN0RGF0ZShlLnRhcmdldCwtNyxcIkRcIiksYT1lLmN0cmxLZXl8fGUubWV0YUtleTticmVhaztjYXNlIDM5OihlLmN0cmxLZXl8fGUubWV0YUtleSkmJnQuZGF0ZXBpY2tlci5fYWRqdXN0RGF0ZShlLnRhcmdldCxyPy0xOjEsXCJEXCIpLGE9ZS5jdHJsS2V5fHxlLm1ldGFLZXksZS5vcmlnaW5hbEV2ZW50LmFsdEtleSYmdC5kYXRlcGlja2VyLl9hZGp1c3REYXRlKGUudGFyZ2V0LGUuY3RybEtleT8rdC5kYXRlcGlja2VyLl9nZXQobyxcInN0ZXBCaWdNb250aHNcIik6K3QuZGF0ZXBpY2tlci5fZ2V0KG8sXCJzdGVwTW9udGhzXCIpLFwiTVwiKTticmVhaztjYXNlIDQwOihlLmN0cmxLZXl8fGUubWV0YUtleSkmJnQuZGF0ZXBpY2tlci5fYWRqdXN0RGF0ZShlLnRhcmdldCw3LFwiRFwiKSxhPWUuY3RybEtleXx8ZS5tZXRhS2V5O2JyZWFrO2RlZmF1bHQ6YT0hMX1lbHNlIDM2PT09ZS5rZXlDb2RlJiZlLmN0cmxLZXk/dC5kYXRlcGlja2VyLl9zaG93RGF0ZXBpY2tlcih0aGlzKTphPSExO2EmJihlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSl9LF9kb0tleVByZXNzOmZ1bmN0aW9uKGUpe3ZhciBpLHMsbj10LmRhdGVwaWNrZXIuX2dldEluc3QoZS50YXJnZXQpO3JldHVybiB0LmRhdGVwaWNrZXIuX2dldChuLFwiY29uc3RyYWluSW5wdXRcIik/KGk9dC5kYXRlcGlja2VyLl9wb3NzaWJsZUNoYXJzKHQuZGF0ZXBpY2tlci5fZ2V0KG4sXCJkYXRlRm9ybWF0XCIpKSxzPVN0cmluZy5mcm9tQ2hhckNvZGUobnVsbD09ZS5jaGFyQ29kZT9lLmtleUNvZGU6ZS5jaGFyQ29kZSksZS5jdHJsS2V5fHxlLm1ldGFLZXl8fFwiIFwiPnN8fCFpfHxpLmluZGV4T2Yocyk+LTEpOnZvaWQgMH0sX2RvS2V5VXA6ZnVuY3Rpb24oZSl7dmFyIGkscz10LmRhdGVwaWNrZXIuX2dldEluc3QoZS50YXJnZXQpO2lmKHMuaW5wdXQudmFsKCkhPT1zLmxhc3RWYWwpdHJ5e2k9dC5kYXRlcGlja2VyLnBhcnNlRGF0ZSh0LmRhdGVwaWNrZXIuX2dldChzLFwiZGF0ZUZvcm1hdFwiKSxzLmlucHV0P3MuaW5wdXQudmFsKCk6bnVsbCx0LmRhdGVwaWNrZXIuX2dldEZvcm1hdENvbmZpZyhzKSksaSYmKHQuZGF0ZXBpY2tlci5fc2V0RGF0ZUZyb21GaWVsZChzKSx0LmRhdGVwaWNrZXIuX3VwZGF0ZUFsdGVybmF0ZShzKSx0LmRhdGVwaWNrZXIuX3VwZGF0ZURhdGVwaWNrZXIocykpfWNhdGNoKG4pe31yZXR1cm4hMH0sX3Nob3dEYXRlcGlja2VyOmZ1bmN0aW9uKGUpe2lmKGU9ZS50YXJnZXR8fGUsXCJpbnB1dFwiIT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiYoZT10KFwiaW5wdXRcIixlLnBhcmVudE5vZGUpWzBdKSwhdC5kYXRlcGlja2VyLl9pc0Rpc2FibGVkRGF0ZXBpY2tlcihlKSYmdC5kYXRlcGlja2VyLl9sYXN0SW5wdXQhPT1lKXt2YXIgcyxuLG8scixoLGwsdTtzPXQuZGF0ZXBpY2tlci5fZ2V0SW5zdChlKSx0LmRhdGVwaWNrZXIuX2N1ckluc3QmJnQuZGF0ZXBpY2tlci5fY3VySW5zdCE9PXMmJih0LmRhdGVwaWNrZXIuX2N1ckluc3QuZHBEaXYuc3RvcCghMCwhMCkscyYmdC5kYXRlcGlja2VyLl9kYXRlcGlja2VyU2hvd2luZyYmdC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcih0LmRhdGVwaWNrZXIuX2N1ckluc3QuaW5wdXRbMF0pKSxuPXQuZGF0ZXBpY2tlci5fZ2V0KHMsXCJiZWZvcmVTaG93XCIpLG89bj9uLmFwcGx5KGUsW2Usc10pOnt9LG8hPT0hMSYmKGEocy5zZXR0aW5ncyxvKSxzLmxhc3RWYWw9bnVsbCx0LmRhdGVwaWNrZXIuX2xhc3RJbnB1dD1lLHQuZGF0ZXBpY2tlci5fc2V0RGF0ZUZyb21GaWVsZChzKSx0LmRhdGVwaWNrZXIuX2luRGlhbG9nJiYoZS52YWx1ZT1cIlwiKSx0LmRhdGVwaWNrZXIuX3Bvc3x8KHQuZGF0ZXBpY2tlci5fcG9zPXQuZGF0ZXBpY2tlci5fZmluZFBvcyhlKSx0LmRhdGVwaWNrZXIuX3Bvc1sxXSs9ZS5vZmZzZXRIZWlnaHQpLHI9ITEsdChlKS5wYXJlbnRzKCkuZWFjaChmdW5jdGlvbigpe3JldHVybiByfD1cImZpeGVkXCI9PT10KHRoaXMpLmNzcyhcInBvc2l0aW9uXCIpLCFyfSksaD17bGVmdDp0LmRhdGVwaWNrZXIuX3Bvc1swXSx0b3A6dC5kYXRlcGlja2VyLl9wb3NbMV19LHQuZGF0ZXBpY2tlci5fcG9zPW51bGwscy5kcERpdi5lbXB0eSgpLHMuZHBEaXYuY3NzKHtwb3NpdGlvbjpcImFic29sdXRlXCIsZGlzcGxheTpcImJsb2NrXCIsdG9wOlwiLTEwMDBweFwifSksdC5kYXRlcGlja2VyLl91cGRhdGVEYXRlcGlja2VyKHMpLGg9dC5kYXRlcGlja2VyLl9jaGVja09mZnNldChzLGgscikscy5kcERpdi5jc3Moe3Bvc2l0aW9uOnQuZGF0ZXBpY2tlci5faW5EaWFsb2cmJnQuYmxvY2tVST9cInN0YXRpY1wiOnI/XCJmaXhlZFwiOlwiYWJzb2x1dGVcIixkaXNwbGF5Olwibm9uZVwiLGxlZnQ6aC5sZWZ0K1wicHhcIix0b3A6aC50b3ArXCJweFwifSkscy5pbmxpbmV8fChsPXQuZGF0ZXBpY2tlci5fZ2V0KHMsXCJzaG93QW5pbVwiKSx1PXQuZGF0ZXBpY2tlci5fZ2V0KHMsXCJkdXJhdGlvblwiKSxzLmRwRGl2LmNzcyhcInotaW5kZXhcIixpKHQoZSkpKzEpLHQuZGF0ZXBpY2tlci5fZGF0ZXBpY2tlclNob3dpbmc9ITAsdC5lZmZlY3RzJiZ0LmVmZmVjdHMuZWZmZWN0W2xdP3MuZHBEaXYuc2hvdyhsLHQuZGF0ZXBpY2tlci5fZ2V0KHMsXCJzaG93T3B0aW9uc1wiKSx1KTpzLmRwRGl2W2x8fFwic2hvd1wiXShsP3U6bnVsbCksdC5kYXRlcGlja2VyLl9zaG91bGRGb2N1c0lucHV0KHMpJiZzLmlucHV0LnRyaWdnZXIoXCJmb2N1c1wiKSx0LmRhdGVwaWNrZXIuX2N1ckluc3Q9cykpfX0sX3VwZGF0ZURhdGVwaWNrZXI6ZnVuY3Rpb24oZSl7dGhpcy5tYXhSb3dzPTQscD1lLGUuZHBEaXYuZW1wdHkoKS5hcHBlbmQodGhpcy5fZ2VuZXJhdGVIVE1MKGUpKSx0aGlzLl9hdHRhY2hIYW5kbGVycyhlKTt2YXIgaSxzPXRoaXMuX2dldE51bWJlck9mTW9udGhzKGUpLG49c1sxXSxhPTE3LHI9ZS5kcERpdi5maW5kKFwiLlwiK3RoaXMuX2RheU92ZXJDbGFzcytcIiBhXCIpO3IubGVuZ3RoPjAmJm8uYXBwbHkoci5nZXQoMCkpLGUuZHBEaXYucmVtb3ZlQ2xhc3MoXCJ1aS1kYXRlcGlja2VyLW11bHRpLTIgdWktZGF0ZXBpY2tlci1tdWx0aS0zIHVpLWRhdGVwaWNrZXItbXVsdGktNFwiKS53aWR0aChcIlwiKSxuPjEmJmUuZHBEaXYuYWRkQ2xhc3MoXCJ1aS1kYXRlcGlja2VyLW11bHRpLVwiK24pLmNzcyhcIndpZHRoXCIsYSpuK1wiZW1cIiksZS5kcERpdlsoMSE9PXNbMF18fDEhPT1zWzFdP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcInVpLWRhdGVwaWNrZXItbXVsdGlcIiksZS5kcERpdlsodGhpcy5fZ2V0KGUsXCJpc1JUTFwiKT9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJ1aS1kYXRlcGlja2VyLXJ0bFwiKSxlPT09dC5kYXRlcGlja2VyLl9jdXJJbnN0JiZ0LmRhdGVwaWNrZXIuX2RhdGVwaWNrZXJTaG93aW5nJiZ0LmRhdGVwaWNrZXIuX3Nob3VsZEZvY3VzSW5wdXQoZSkmJmUuaW5wdXQudHJpZ2dlcihcImZvY3VzXCIpLGUueWVhcnNodG1sJiYoaT1lLnllYXJzaHRtbCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aT09PWUueWVhcnNodG1sJiZlLnllYXJzaHRtbCYmZS5kcERpdi5maW5kKFwic2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhcjpmaXJzdFwiKS5yZXBsYWNlV2l0aChlLnllYXJzaHRtbCksaT1lLnllYXJzaHRtbD1udWxsfSwwKSl9LF9zaG91bGRGb2N1c0lucHV0OmZ1bmN0aW9uKHQpe3JldHVybiB0LmlucHV0JiZ0LmlucHV0LmlzKFwiOnZpc2libGVcIikmJiF0LmlucHV0LmlzKFwiOmRpc2FibGVkXCIpJiYhdC5pbnB1dC5pcyhcIjpmb2N1c1wiKX0sX2NoZWNrT2Zmc2V0OmZ1bmN0aW9uKGUsaSxzKXt2YXIgbj1lLmRwRGl2Lm91dGVyV2lkdGgoKSxvPWUuZHBEaXYub3V0ZXJIZWlnaHQoKSxhPWUuaW5wdXQ/ZS5pbnB1dC5vdXRlcldpZHRoKCk6MCxyPWUuaW5wdXQ/ZS5pbnB1dC5vdXRlckhlaWdodCgpOjAsaD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgrKHM/MDp0KGRvY3VtZW50KS5zY3JvbGxMZWZ0KCkpLGw9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCsocz8wOnQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKTtyZXR1cm4gaS5sZWZ0LT10aGlzLl9nZXQoZSxcImlzUlRMXCIpP24tYTowLGkubGVmdC09cyYmaS5sZWZ0PT09ZS5pbnB1dC5vZmZzZXQoKS5sZWZ0P3QoZG9jdW1lbnQpLnNjcm9sbExlZnQoKTowLGkudG9wLT1zJiZpLnRvcD09PWUuaW5wdXQub2Zmc2V0KCkudG9wK3I/dChkb2N1bWVudCkuc2Nyb2xsVG9wKCk6MCxpLmxlZnQtPU1hdGgubWluKGkubGVmdCxpLmxlZnQrbj5oJiZoPm4/TWF0aC5hYnMoaS5sZWZ0K24taCk6MCksaS50b3AtPU1hdGgubWluKGkudG9wLGkudG9wK28+bCYmbD5vP01hdGguYWJzKG8rcik6MCksaX0sX2ZpbmRQb3M6ZnVuY3Rpb24oZSl7Zm9yKHZhciBpLHM9dGhpcy5fZ2V0SW5zdChlKSxuPXRoaXMuX2dldChzLFwiaXNSVExcIik7ZSYmKFwiaGlkZGVuXCI9PT1lLnR5cGV8fDEhPT1lLm5vZGVUeXBlfHx0LmV4cHIuZmlsdGVycy5oaWRkZW4oZSkpOyllPWVbbj9cInByZXZpb3VzU2libGluZ1wiOlwibmV4dFNpYmxpbmdcIl07cmV0dXJuIGk9dChlKS5vZmZzZXQoKSxbaS5sZWZ0LGkudG9wXX0sX2hpZGVEYXRlcGlja2VyOmZ1bmN0aW9uKGUpe3ZhciBpLHMsbixvLGE9dGhpcy5fY3VySW5zdDshYXx8ZSYmYSE9PXQuZGF0YShlLFwiZGF0ZXBpY2tlclwiKXx8dGhpcy5fZGF0ZXBpY2tlclNob3dpbmcmJihpPXRoaXMuX2dldChhLFwic2hvd0FuaW1cIikscz10aGlzLl9nZXQoYSxcImR1cmF0aW9uXCIpLG49ZnVuY3Rpb24oKXt0LmRhdGVwaWNrZXIuX3RpZHlEaWFsb2coYSl9LHQuZWZmZWN0cyYmKHQuZWZmZWN0cy5lZmZlY3RbaV18fHQuZWZmZWN0c1tpXSk/YS5kcERpdi5oaWRlKGksdC5kYXRlcGlja2VyLl9nZXQoYSxcInNob3dPcHRpb25zXCIpLHMsbik6YS5kcERpdltcInNsaWRlRG93blwiPT09aT9cInNsaWRlVXBcIjpcImZhZGVJblwiPT09aT9cImZhZGVPdXRcIjpcImhpZGVcIl0oaT9zOm51bGwsbiksaXx8bigpLHRoaXMuX2RhdGVwaWNrZXJTaG93aW5nPSExLG89dGhpcy5fZ2V0KGEsXCJvbkNsb3NlXCIpLG8mJm8uYXBwbHkoYS5pbnB1dD9hLmlucHV0WzBdOm51bGwsW2EuaW5wdXQ/YS5pbnB1dC52YWwoKTpcIlwiLGFdKSx0aGlzLl9sYXN0SW5wdXQ9bnVsbCx0aGlzLl9pbkRpYWxvZyYmKHRoaXMuX2RpYWxvZ0lucHV0LmNzcyh7cG9zaXRpb246XCJhYnNvbHV0ZVwiLGxlZnQ6XCIwXCIsdG9wOlwiLTEwMHB4XCJ9KSx0LmJsb2NrVUkmJih0LnVuYmxvY2tVSSgpLHQoXCJib2R5XCIpLmFwcGVuZCh0aGlzLmRwRGl2KSkpLHRoaXMuX2luRGlhbG9nPSExKX0sX3RpZHlEaWFsb2c6ZnVuY3Rpb24odCl7dC5kcERpdi5yZW1vdmVDbGFzcyh0aGlzLl9kaWFsb2dDbGFzcykub2ZmKFwiLnVpLWRhdGVwaWNrZXItY2FsZW5kYXJcIil9LF9jaGVja0V4dGVybmFsQ2xpY2s6ZnVuY3Rpb24oZSl7aWYodC5kYXRlcGlja2VyLl9jdXJJbnN0KXt2YXIgaT10KGUudGFyZ2V0KSxzPXQuZGF0ZXBpY2tlci5fZ2V0SW5zdChpWzBdKTsoaVswXS5pZCE9PXQuZGF0ZXBpY2tlci5fbWFpbkRpdklkJiYwPT09aS5wYXJlbnRzKFwiI1wiK3QuZGF0ZXBpY2tlci5fbWFpbkRpdklkKS5sZW5ndGgmJiFpLmhhc0NsYXNzKHQuZGF0ZXBpY2tlci5tYXJrZXJDbGFzc05hbWUpJiYhaS5jbG9zZXN0KFwiLlwiK3QuZGF0ZXBpY2tlci5fdHJpZ2dlckNsYXNzKS5sZW5ndGgmJnQuZGF0ZXBpY2tlci5fZGF0ZXBpY2tlclNob3dpbmcmJighdC5kYXRlcGlja2VyLl9pbkRpYWxvZ3x8IXQuYmxvY2tVSSl8fGkuaGFzQ2xhc3ModC5kYXRlcGlja2VyLm1hcmtlckNsYXNzTmFtZSkmJnQuZGF0ZXBpY2tlci5fY3VySW5zdCE9PXMpJiZ0LmRhdGVwaWNrZXIuX2hpZGVEYXRlcGlja2VyKCl9fSxfYWRqdXN0RGF0ZTpmdW5jdGlvbihlLGkscyl7dmFyIG49dChlKSxvPXRoaXMuX2dldEluc3QoblswXSk7dGhpcy5faXNEaXNhYmxlZERhdGVwaWNrZXIoblswXSl8fCh0aGlzLl9hZGp1c3RJbnN0RGF0ZShvLGkrKFwiTVwiPT09cz90aGlzLl9nZXQobyxcInNob3dDdXJyZW50QXRQb3NcIik6MCkscyksdGhpcy5fdXBkYXRlRGF0ZXBpY2tlcihvKSl9LF9nb3RvVG9kYXk6ZnVuY3Rpb24oZSl7dmFyIGkscz10KGUpLG49dGhpcy5fZ2V0SW5zdChzWzBdKTt0aGlzLl9nZXQobixcImdvdG9DdXJyZW50XCIpJiZuLmN1cnJlbnREYXk/KG4uc2VsZWN0ZWREYXk9bi5jdXJyZW50RGF5LG4uZHJhd01vbnRoPW4uc2VsZWN0ZWRNb250aD1uLmN1cnJlbnRNb250aCxuLmRyYXdZZWFyPW4uc2VsZWN0ZWRZZWFyPW4uY3VycmVudFllYXIpOihpPW5ldyBEYXRlLG4uc2VsZWN0ZWREYXk9aS5nZXREYXRlKCksbi5kcmF3TW9udGg9bi5zZWxlY3RlZE1vbnRoPWkuZ2V0TW9udGgoKSxuLmRyYXdZZWFyPW4uc2VsZWN0ZWRZZWFyPWkuZ2V0RnVsbFllYXIoKSksdGhpcy5fbm90aWZ5Q2hhbmdlKG4pLHRoaXMuX2FkanVzdERhdGUocyl9LF9zZWxlY3RNb250aFllYXI6ZnVuY3Rpb24oZSxpLHMpe3ZhciBuPXQoZSksbz10aGlzLl9nZXRJbnN0KG5bMF0pO29bXCJzZWxlY3RlZFwiKyhcIk1cIj09PXM/XCJNb250aFwiOlwiWWVhclwiKV09b1tcImRyYXdcIisoXCJNXCI9PT1zP1wiTW9udGhcIjpcIlllYXJcIildPXBhcnNlSW50KGkub3B0aW9uc1tpLnNlbGVjdGVkSW5kZXhdLnZhbHVlLDEwKSx0aGlzLl9ub3RpZnlDaGFuZ2UobyksdGhpcy5fYWRqdXN0RGF0ZShuKX0sX3NlbGVjdERheTpmdW5jdGlvbihlLGkscyxuKXt2YXIgbyxhPXQoZSk7dChuKS5oYXNDbGFzcyh0aGlzLl91bnNlbGVjdGFibGVDbGFzcyl8fHRoaXMuX2lzRGlzYWJsZWREYXRlcGlja2VyKGFbMF0pfHwobz10aGlzLl9nZXRJbnN0KGFbMF0pLG8uc2VsZWN0ZWREYXk9by5jdXJyZW50RGF5PXQoXCJhXCIsbikuaHRtbCgpLG8uc2VsZWN0ZWRNb250aD1vLmN1cnJlbnRNb250aD1pLG8uc2VsZWN0ZWRZZWFyPW8uY3VycmVudFllYXI9cyx0aGlzLl9zZWxlY3REYXRlKGUsdGhpcy5fZm9ybWF0RGF0ZShvLG8uY3VycmVudERheSxvLmN1cnJlbnRNb250aCxvLmN1cnJlbnRZZWFyKSkpfSxfY2xlYXJEYXRlOmZ1bmN0aW9uKGUpe3ZhciBpPXQoZSk7dGhpcy5fc2VsZWN0RGF0ZShpLFwiXCIpfSxfc2VsZWN0RGF0ZTpmdW5jdGlvbihlLGkpe3ZhciBzLG49dChlKSxvPXRoaXMuX2dldEluc3QoblswXSk7aT1udWxsIT1pP2k6dGhpcy5fZm9ybWF0RGF0ZShvKSxvLmlucHV0JiZvLmlucHV0LnZhbChpKSx0aGlzLl91cGRhdGVBbHRlcm5hdGUobykscz10aGlzLl9nZXQobyxcIm9uU2VsZWN0XCIpLHM/cy5hcHBseShvLmlucHV0P28uaW5wdXRbMF06bnVsbCxbaSxvXSk6by5pbnB1dCYmby5pbnB1dC50cmlnZ2VyKFwiY2hhbmdlXCIpLG8uaW5saW5lP3RoaXMuX3VwZGF0ZURhdGVwaWNrZXIobyk6KHRoaXMuX2hpZGVEYXRlcGlja2VyKCksdGhpcy5fbGFzdElucHV0PW8uaW5wdXRbMF0sXCJvYmplY3RcIiE9dHlwZW9mIG8uaW5wdXRbMF0mJm8uaW5wdXQudHJpZ2dlcihcImZvY3VzXCIpLHRoaXMuX2xhc3RJbnB1dD1udWxsKX0sX3VwZGF0ZUFsdGVybmF0ZTpmdW5jdGlvbihlKXt2YXIgaSxzLG4sbz10aGlzLl9nZXQoZSxcImFsdEZpZWxkXCIpO28mJihpPXRoaXMuX2dldChlLFwiYWx0Rm9ybWF0XCIpfHx0aGlzLl9nZXQoZSxcImRhdGVGb3JtYXRcIikscz10aGlzLl9nZXREYXRlKGUpLG49dGhpcy5mb3JtYXREYXRlKGkscyx0aGlzLl9nZXRGb3JtYXRDb25maWcoZSkpLHQobykudmFsKG4pKX0sbm9XZWVrZW5kczpmdW5jdGlvbih0KXt2YXIgZT10LmdldERheSgpO3JldHVybltlPjAmJjY+ZSxcIlwiXX0saXNvODYwMVdlZWs6ZnVuY3Rpb24odCl7dmFyIGUsaT1uZXcgRGF0ZSh0LmdldFRpbWUoKSk7cmV0dXJuIGkuc2V0RGF0ZShpLmdldERhdGUoKSs0LShpLmdldERheSgpfHw3KSksZT1pLmdldFRpbWUoKSxpLnNldE1vbnRoKDApLGkuc2V0RGF0ZSgxKSxNYXRoLmZsb29yKE1hdGgucm91bmQoKGUtaSkvODY0ZTUpLzcpKzF9LHBhcnNlRGF0ZTpmdW5jdGlvbihlLGkscyl7aWYobnVsbD09ZXx8bnVsbD09aSl0aHJvd1wiSW52YWxpZCBhcmd1bWVudHNcIjtpZihpPVwib2JqZWN0XCI9PXR5cGVvZiBpP1wiXCIraTppK1wiXCIsXCJcIj09PWkpcmV0dXJuIG51bGw7dmFyIG4sbyxhLHIsaD0wLGw9KHM/cy5zaG9ydFllYXJDdXRvZmY6bnVsbCl8fHRoaXMuX2RlZmF1bHRzLnNob3J0WWVhckN1dG9mZix1PVwic3RyaW5nXCIhPXR5cGVvZiBsP2w6KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpJTEwMCtwYXJzZUludChsLDEwKSxjPShzP3MuZGF5TmFtZXNTaG9ydDpudWxsKXx8dGhpcy5fZGVmYXVsdHMuZGF5TmFtZXNTaG9ydCxkPShzP3MuZGF5TmFtZXM6bnVsbCl8fHRoaXMuX2RlZmF1bHRzLmRheU5hbWVzLHA9KHM/cy5tb250aE5hbWVzU2hvcnQ6bnVsbCl8fHRoaXMuX2RlZmF1bHRzLm1vbnRoTmFtZXNTaG9ydCxmPShzP3MubW9udGhOYW1lczpudWxsKXx8dGhpcy5fZGVmYXVsdHMubW9udGhOYW1lcyxtPS0xLGc9LTEsXz0tMSx2PS0xLGI9ITEseT1mdW5jdGlvbih0KXt2YXIgaT1lLmxlbmd0aD5uKzEmJmUuY2hhckF0KG4rMSk9PT10O3JldHVybiBpJiZuKyssaX0sdz1mdW5jdGlvbih0KXt2YXIgZT15KHQpLHM9XCJAXCI9PT10PzE0OlwiIVwiPT09dD8yMDpcInlcIj09PXQmJmU/NDpcIm9cIj09PXQ/MzoyLG49XCJ5XCI9PT10P3M6MSxvPVJlZ0V4cChcIl5cXFxcZHtcIituK1wiLFwiK3MrXCJ9XCIpLGE9aS5zdWJzdHJpbmcoaCkubWF0Y2gobyk7aWYoIWEpdGhyb3dcIk1pc3NpbmcgbnVtYmVyIGF0IHBvc2l0aW9uIFwiK2g7cmV0dXJuIGgrPWFbMF0ubGVuZ3RoLHBhcnNlSW50KGFbMF0sMTApfSxrPWZ1bmN0aW9uKGUscyxuKXt2YXIgbz0tMSxhPXQubWFwKHkoZSk/bjpzLGZ1bmN0aW9uKHQsZSl7cmV0dXJuW1tlLHRdXX0pLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4tKHRbMV0ubGVuZ3RoLWVbMV0ubGVuZ3RoKX0pO2lmKHQuZWFjaChhLGZ1bmN0aW9uKHQsZSl7dmFyIHM9ZVsxXTtyZXR1cm4gaS5zdWJzdHIoaCxzLmxlbmd0aCkudG9Mb3dlckNhc2UoKT09PXMudG9Mb3dlckNhc2UoKT8obz1lWzBdLGgrPXMubGVuZ3RoLCExKTp2b2lkIDB9KSwtMSE9PW8pcmV0dXJuIG8rMTt0aHJvd1wiVW5rbm93biBuYW1lIGF0IHBvc2l0aW9uIFwiK2h9LHg9ZnVuY3Rpb24oKXtpZihpLmNoYXJBdChoKSE9PWUuY2hhckF0KG4pKXRocm93XCJVbmV4cGVjdGVkIGxpdGVyYWwgYXQgcG9zaXRpb24gXCIraDtoKyt9O2ZvcihuPTA7ZS5sZW5ndGg+bjtuKyspaWYoYilcIidcIiE9PWUuY2hhckF0KG4pfHx5KFwiJ1wiKT94KCk6Yj0hMTtlbHNlIHN3aXRjaChlLmNoYXJBdChuKSl7Y2FzZVwiZFwiOl89dyhcImRcIik7YnJlYWs7Y2FzZVwiRFwiOmsoXCJEXCIsYyxkKTticmVhaztjYXNlXCJvXCI6dj13KFwib1wiKTticmVhaztjYXNlXCJtXCI6Zz13KFwibVwiKTticmVhaztjYXNlXCJNXCI6Zz1rKFwiTVwiLHAsZik7YnJlYWs7Y2FzZVwieVwiOm09dyhcInlcIik7YnJlYWs7Y2FzZVwiQFwiOnI9bmV3IERhdGUodyhcIkBcIikpLG09ci5nZXRGdWxsWWVhcigpLGc9ci5nZXRNb250aCgpKzEsXz1yLmdldERhdGUoKTticmVhaztjYXNlXCIhXCI6cj1uZXcgRGF0ZSgodyhcIiFcIiktdGhpcy5fdGlja3NUbzE5NzApLzFlNCksbT1yLmdldEZ1bGxZZWFyKCksZz1yLmdldE1vbnRoKCkrMSxfPXIuZ2V0RGF0ZSgpO2JyZWFrO2Nhc2VcIidcIjp5KFwiJ1wiKT94KCk6Yj0hMDticmVhaztkZWZhdWx0OngoKX1pZihpLmxlbmd0aD5oJiYoYT1pLnN1YnN0cihoKSwhL15cXHMrLy50ZXN0KGEpKSl0aHJvd1wiRXh0cmEvdW5wYXJzZWQgY2hhcmFjdGVycyBmb3VuZCBpbiBkYXRlOiBcIithO2lmKC0xPT09bT9tPShuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKToxMDA+bSYmKG0rPShuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKS0obmV3IERhdGUpLmdldEZ1bGxZZWFyKCklMTAwKyh1Pj1tPzA6LTEwMCkpLHY+LTEpZm9yKGc9MSxfPXY7Oyl7aWYobz10aGlzLl9nZXREYXlzSW5Nb250aChtLGctMSksbz49XylicmVhaztnKyssXy09b31pZihyPXRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKG0sZy0xLF8pKSxyLmdldEZ1bGxZZWFyKCkhPT1tfHxyLmdldE1vbnRoKCkrMSE9PWd8fHIuZ2V0RGF0ZSgpIT09Xyl0aHJvd1wiSW52YWxpZCBkYXRlXCI7cmV0dXJuIHJ9LEFUT006XCJ5eS1tbS1kZFwiLENPT0tJRTpcIkQsIGRkIE0geXlcIixJU09fODYwMTpcInl5LW1tLWRkXCIsUkZDXzgyMjpcIkQsIGQgTSB5XCIsUkZDXzg1MDpcIkRELCBkZC1NLXlcIixSRkNfMTAzNjpcIkQsIGQgTSB5XCIsUkZDXzExMjM6XCJELCBkIE0geXlcIixSRkNfMjgyMjpcIkQsIGQgTSB5eVwiLFJTUzpcIkQsIGQgTSB5XCIsVElDS1M6XCIhXCIsVElNRVNUQU1QOlwiQFwiLFczQzpcInl5LW1tLWRkXCIsX3RpY2tzVG8xOTcwOjFlNyo2MCo2MCoyNCooNzE4Njg1K01hdGguZmxvb3IoNDkyLjUpLU1hdGguZmxvb3IoMTkuNykrTWF0aC5mbG9vcig0LjkyNSkpLGZvcm1hdERhdGU6ZnVuY3Rpb24odCxlLGkpe2lmKCFlKXJldHVyblwiXCI7dmFyIHMsbj0oaT9pLmRheU5hbWVzU2hvcnQ6bnVsbCl8fHRoaXMuX2RlZmF1bHRzLmRheU5hbWVzU2hvcnQsbz0oaT9pLmRheU5hbWVzOm51bGwpfHx0aGlzLl9kZWZhdWx0cy5kYXlOYW1lcyxhPShpP2kubW9udGhOYW1lc1Nob3J0Om51bGwpfHx0aGlzLl9kZWZhdWx0cy5tb250aE5hbWVzU2hvcnQscj0oaT9pLm1vbnRoTmFtZXM6bnVsbCl8fHRoaXMuX2RlZmF1bHRzLm1vbnRoTmFtZXMsaD1mdW5jdGlvbihlKXt2YXIgaT10Lmxlbmd0aD5zKzEmJnQuY2hhckF0KHMrMSk9PT1lO3JldHVybiBpJiZzKyssaX0sbD1mdW5jdGlvbih0LGUsaSl7dmFyIHM9XCJcIitlO2lmKGgodCkpZm9yKDtpPnMubGVuZ3RoOylzPVwiMFwiK3M7cmV0dXJuIHN9LHU9ZnVuY3Rpb24odCxlLGkscyl7cmV0dXJuIGgodCk/c1tlXTppW2VdfSxjPVwiXCIsZD0hMTtpZihlKWZvcihzPTA7dC5sZW5ndGg+cztzKyspaWYoZClcIidcIiE9PXQuY2hhckF0KHMpfHxoKFwiJ1wiKT9jKz10LmNoYXJBdChzKTpkPSExO2Vsc2Ugc3dpdGNoKHQuY2hhckF0KHMpKXtjYXNlXCJkXCI6Yys9bChcImRcIixlLmdldERhdGUoKSwyKTticmVhaztjYXNlXCJEXCI6Yys9dShcIkRcIixlLmdldERheSgpLG4sbyk7YnJlYWs7Y2FzZVwib1wiOmMrPWwoXCJvXCIsTWF0aC5yb3VuZCgobmV3IERhdGUoZS5nZXRGdWxsWWVhcigpLGUuZ2V0TW9udGgoKSxlLmdldERhdGUoKSkuZ2V0VGltZSgpLW5ldyBEYXRlKGUuZ2V0RnVsbFllYXIoKSwwLDApLmdldFRpbWUoKSkvODY0ZTUpLDMpO2JyZWFrO2Nhc2VcIm1cIjpjKz1sKFwibVwiLGUuZ2V0TW9udGgoKSsxLDIpO2JyZWFrO2Nhc2VcIk1cIjpjKz11KFwiTVwiLGUuZ2V0TW9udGgoKSxhLHIpO2JyZWFrO2Nhc2VcInlcIjpjKz1oKFwieVwiKT9lLmdldEZ1bGxZZWFyKCk6KDEwPmUuZ2V0RnVsbFllYXIoKSUxMDA/XCIwXCI6XCJcIikrZS5nZXRGdWxsWWVhcigpJTEwMDticmVhaztjYXNlXCJAXCI6Yys9ZS5nZXRUaW1lKCk7YnJlYWs7Y2FzZVwiIVwiOmMrPTFlNCplLmdldFRpbWUoKSt0aGlzLl90aWNrc1RvMTk3MDticmVhaztjYXNlXCInXCI6aChcIidcIik/Yys9XCInXCI6ZD0hMDticmVhaztkZWZhdWx0OmMrPXQuY2hhckF0KHMpfXJldHVybiBjfSxfcG9zc2libGVDaGFyczpmdW5jdGlvbih0KXt2YXIgZSxpPVwiXCIscz0hMSxuPWZ1bmN0aW9uKGkpe3ZhciBzPXQubGVuZ3RoPmUrMSYmdC5jaGFyQXQoZSsxKT09PWk7cmV0dXJuIHMmJmUrKyxzfTtmb3IoZT0wO3QubGVuZ3RoPmU7ZSsrKWlmKHMpXCInXCIhPT10LmNoYXJBdChlKXx8bihcIidcIik/aSs9dC5jaGFyQXQoZSk6cz0hMTtlbHNlIHN3aXRjaCh0LmNoYXJBdChlKSl7Y2FzZVwiZFwiOmNhc2VcIm1cIjpjYXNlXCJ5XCI6Y2FzZVwiQFwiOmkrPVwiMDEyMzQ1Njc4OVwiO2JyZWFrO2Nhc2VcIkRcIjpjYXNlXCJNXCI6cmV0dXJuIG51bGw7Y2FzZVwiJ1wiOm4oXCInXCIpP2krPVwiJ1wiOnM9ITA7YnJlYWs7ZGVmYXVsdDppKz10LmNoYXJBdChlKX1yZXR1cm4gaX0sX2dldDpmdW5jdGlvbih0LGUpe3JldHVybiB2b2lkIDAhPT10LnNldHRpbmdzW2VdP3Quc2V0dGluZ3NbZV06dGhpcy5fZGVmYXVsdHNbZV19LF9zZXREYXRlRnJvbUZpZWxkOmZ1bmN0aW9uKHQsZSl7aWYodC5pbnB1dC52YWwoKSE9PXQubGFzdFZhbCl7dmFyIGk9dGhpcy5fZ2V0KHQsXCJkYXRlRm9ybWF0XCIpLHM9dC5sYXN0VmFsPXQuaW5wdXQ/dC5pbnB1dC52YWwoKTpudWxsLG49dGhpcy5fZ2V0RGVmYXVsdERhdGUodCksbz1uLGE9dGhpcy5fZ2V0Rm9ybWF0Q29uZmlnKHQpO3RyeXtvPXRoaXMucGFyc2VEYXRlKGkscyxhKXx8bn1jYXRjaChyKXtzPWU/XCJcIjpzfXQuc2VsZWN0ZWREYXk9by5nZXREYXRlKCksdC5kcmF3TW9udGg9dC5zZWxlY3RlZE1vbnRoPW8uZ2V0TW9udGgoKSx0LmRyYXdZZWFyPXQuc2VsZWN0ZWRZZWFyPW8uZ2V0RnVsbFllYXIoKSx0LmN1cnJlbnREYXk9cz9vLmdldERhdGUoKTowLHQuY3VycmVudE1vbnRoPXM/by5nZXRNb250aCgpOjAsdC5jdXJyZW50WWVhcj1zP28uZ2V0RnVsbFllYXIoKTowLHRoaXMuX2FkanVzdEluc3REYXRlKHQpfX0sX2dldERlZmF1bHREYXRlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9yZXN0cmljdE1pbk1heCh0LHRoaXMuX2RldGVybWluZURhdGUodCx0aGlzLl9nZXQodCxcImRlZmF1bHREYXRlXCIpLG5ldyBEYXRlKSl9LF9kZXRlcm1pbmVEYXRlOmZ1bmN0aW9uKGUsaSxzKXt2YXIgbj1mdW5jdGlvbih0KXt2YXIgZT1uZXcgRGF0ZTtyZXR1cm4gZS5zZXREYXRlKGUuZ2V0RGF0ZSgpK3QpLGV9LG89ZnVuY3Rpb24oaSl7dHJ5e3JldHVybiB0LmRhdGVwaWNrZXIucGFyc2VEYXRlKHQuZGF0ZXBpY2tlci5fZ2V0KGUsXCJkYXRlRm9ybWF0XCIpLGksdC5kYXRlcGlja2VyLl9nZXRGb3JtYXRDb25maWcoZSkpfWNhdGNoKHMpe31mb3IodmFyIG49KGkudG9Mb3dlckNhc2UoKS5tYXRjaCgvXmMvKT90LmRhdGVwaWNrZXIuX2dldERhdGUoZSk6bnVsbCl8fG5ldyBEYXRlLG89bi5nZXRGdWxsWWVhcigpLGE9bi5nZXRNb250aCgpLHI9bi5nZXREYXRlKCksaD0vKFsrXFwtXT9bMC05XSspXFxzKihkfER8d3xXfG18TXx5fFkpPy9nLGw9aC5leGVjKGkpO2w7KXtzd2l0Y2gobFsyXXx8XCJkXCIpe2Nhc2VcImRcIjpjYXNlXCJEXCI6cis9cGFyc2VJbnQobFsxXSwxMCk7YnJlYWs7Y2FzZVwid1wiOmNhc2VcIldcIjpyKz03KnBhcnNlSW50KGxbMV0sMTApO2JyZWFrO2Nhc2VcIm1cIjpjYXNlXCJNXCI6YSs9cGFyc2VJbnQobFsxXSwxMCkscj1NYXRoLm1pbihyLHQuZGF0ZXBpY2tlci5fZ2V0RGF5c0luTW9udGgobyxhKSk7YnJlYWs7Y2FzZVwieVwiOmNhc2VcIllcIjpvKz1wYXJzZUludChsWzFdLDEwKSxyPU1hdGgubWluKHIsdC5kYXRlcGlja2VyLl9nZXREYXlzSW5Nb250aChvLGEpKX1sPWguZXhlYyhpKX1yZXR1cm4gbmV3IERhdGUobyxhLHIpfSxhPW51bGw9PWl8fFwiXCI9PT1pP3M6XCJzdHJpbmdcIj09dHlwZW9mIGk/byhpKTpcIm51bWJlclwiPT10eXBlb2YgaT9pc05hTihpKT9zOm4oaSk6bmV3IERhdGUoaS5nZXRUaW1lKCkpO3JldHVybiBhPWEmJlwiSW52YWxpZCBEYXRlXCI9PVwiXCIrYT9zOmEsYSYmKGEuc2V0SG91cnMoMCksYS5zZXRNaW51dGVzKDApLGEuc2V0U2Vjb25kcygwKSxhLnNldE1pbGxpc2Vjb25kcygwKSksdGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QoYSl9LF9kYXlsaWdodFNhdmluZ0FkanVzdDpmdW5jdGlvbih0KXtyZXR1cm4gdD8odC5zZXRIb3Vycyh0LmdldEhvdXJzKCk+MTI/dC5nZXRIb3VycygpKzI6MCksdCk6bnVsbH0sX3NldERhdGU6ZnVuY3Rpb24odCxlLGkpe3ZhciBzPSFlLG49dC5zZWxlY3RlZE1vbnRoLG89dC5zZWxlY3RlZFllYXIsYT10aGlzLl9yZXN0cmljdE1pbk1heCh0LHRoaXMuX2RldGVybWluZURhdGUodCxlLG5ldyBEYXRlKSk7dC5zZWxlY3RlZERheT10LmN1cnJlbnREYXk9YS5nZXREYXRlKCksdC5kcmF3TW9udGg9dC5zZWxlY3RlZE1vbnRoPXQuY3VycmVudE1vbnRoPWEuZ2V0TW9udGgoKSx0LmRyYXdZZWFyPXQuc2VsZWN0ZWRZZWFyPXQuY3VycmVudFllYXI9YS5nZXRGdWxsWWVhcigpLG49PT10LnNlbGVjdGVkTW9udGgmJm89PT10LnNlbGVjdGVkWWVhcnx8aXx8dGhpcy5fbm90aWZ5Q2hhbmdlKHQpLHRoaXMuX2FkanVzdEluc3REYXRlKHQpLHQuaW5wdXQmJnQuaW5wdXQudmFsKHM/XCJcIjp0aGlzLl9mb3JtYXREYXRlKHQpKX0sX2dldERhdGU6ZnVuY3Rpb24odCl7dmFyIGU9IXQuY3VycmVudFllYXJ8fHQuaW5wdXQmJlwiXCI9PT10LmlucHV0LnZhbCgpP251bGw6dGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QobmV3IERhdGUodC5jdXJyZW50WWVhcix0LmN1cnJlbnRNb250aCx0LmN1cnJlbnREYXkpKTtyZXR1cm4gZX0sX2F0dGFjaEhhbmRsZXJzOmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMuX2dldChlLFwic3RlcE1vbnRoc1wiKSxzPVwiI1wiK2UuaWQucmVwbGFjZSgvXFxcXFxcXFwvZyxcIlxcXFxcIik7ZS5kcERpdi5maW5kKFwiW2RhdGEtaGFuZGxlcl1cIikubWFwKGZ1bmN0aW9uKCl7dmFyIGU9e3ByZXY6ZnVuY3Rpb24oKXt0LmRhdGVwaWNrZXIuX2FkanVzdERhdGUocywtaSxcIk1cIil9LG5leHQ6ZnVuY3Rpb24oKXt0LmRhdGVwaWNrZXIuX2FkanVzdERhdGUocywraSxcIk1cIil9LGhpZGU6ZnVuY3Rpb24oKXt0LmRhdGVwaWNrZXIuX2hpZGVEYXRlcGlja2VyKCl9LHRvZGF5OmZ1bmN0aW9uKCl7dC5kYXRlcGlja2VyLl9nb3RvVG9kYXkocyl9LHNlbGVjdERheTpmdW5jdGlvbigpe3JldHVybiB0LmRhdGVwaWNrZXIuX3NlbGVjdERheShzLCt0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtbW9udGhcIiksK3RoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS15ZWFyXCIpLHRoaXMpLCExfSxzZWxlY3RNb250aDpmdW5jdGlvbigpe3JldHVybiB0LmRhdGVwaWNrZXIuX3NlbGVjdE1vbnRoWWVhcihzLHRoaXMsXCJNXCIpLCExfSxzZWxlY3RZZWFyOmZ1bmN0aW9uKCl7cmV0dXJuIHQuZGF0ZXBpY2tlci5fc2VsZWN0TW9udGhZZWFyKHMsdGhpcyxcIllcIiksITF9fTt0KHRoaXMpLm9uKHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1ldmVudFwiKSxlW3RoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVyXCIpXSl9KX0sX2dlbmVyYXRlSFRNTDpmdW5jdGlvbih0KXt2YXIgZSxpLHMsbixvLGEscixoLGwsdSxjLGQscCxmLG0sZyxfLHYsYix5LHcsayx4LEMsRCxJLFQsUCxNLFMsSCx6LE8sQSxFLE4sVyxGLEwsUj1uZXcgRGF0ZSxZPXRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKFIuZ2V0RnVsbFllYXIoKSxSLmdldE1vbnRoKCksUi5nZXREYXRlKCkpKSxCPXRoaXMuX2dldCh0LFwiaXNSVExcIiksaj10aGlzLl9nZXQodCxcInNob3dCdXR0b25QYW5lbFwiKSxxPXRoaXMuX2dldCh0LFwiaGlkZUlmTm9QcmV2TmV4dFwiKSxLPXRoaXMuX2dldCh0LFwibmF2aWdhdGlvbkFzRGF0ZUZvcm1hdFwiKSxVPXRoaXMuX2dldE51bWJlck9mTW9udGhzKHQpLFY9dGhpcy5fZ2V0KHQsXCJzaG93Q3VycmVudEF0UG9zXCIpLCQ9dGhpcy5fZ2V0KHQsXCJzdGVwTW9udGhzXCIpLFg9MSE9PVVbMF18fDEhPT1VWzFdLEc9dGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QodC5jdXJyZW50RGF5P25ldyBEYXRlKHQuY3VycmVudFllYXIsdC5jdXJyZW50TW9udGgsdC5jdXJyZW50RGF5KTpuZXcgRGF0ZSg5OTk5LDksOSkpLFE9dGhpcy5fZ2V0TWluTWF4RGF0ZSh0LFwibWluXCIpLEo9dGhpcy5fZ2V0TWluTWF4RGF0ZSh0LFwibWF4XCIpLFo9dC5kcmF3TW9udGgtVix0ZT10LmRyYXdZZWFyO2lmKDA+WiYmKForPTEyLHRlLS0pLEopZm9yKGU9dGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QobmV3IERhdGUoSi5nZXRGdWxsWWVhcigpLEouZ2V0TW9udGgoKS1VWzBdKlVbMV0rMSxKLmdldERhdGUoKSkpLGU9USYmUT5lP1E6ZTt0aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdChuZXcgRGF0ZSh0ZSxaLDEpKT5lOylaLS0sMD5aJiYoWj0xMSx0ZS0tKTtmb3IodC5kcmF3TW9udGg9Wix0LmRyYXdZZWFyPXRlLGk9dGhpcy5fZ2V0KHQsXCJwcmV2VGV4dFwiKSxpPUs/dGhpcy5mb3JtYXREYXRlKGksdGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QobmV3IERhdGUodGUsWi0kLDEpKSx0aGlzLl9nZXRGb3JtYXRDb25maWcodCkpOmkscz10aGlzLl9jYW5BZGp1c3RNb250aCh0LC0xLHRlLFopP1wiPGEgY2xhc3M9J3VpLWRhdGVwaWNrZXItcHJldiB1aS1jb3JuZXItYWxsJyBkYXRhLWhhbmRsZXI9J3ByZXYnIGRhdGEtZXZlbnQ9J2NsaWNrJyB0aXRsZT0nXCIraStcIic+PHNwYW4gY2xhc3M9J3VpLWljb24gdWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtXCIrKEI/XCJlXCI6XCJ3XCIpK1wiJz5cIitpK1wiPC9zcGFuPjwvYT5cIjpxP1wiXCI6XCI8YSBjbGFzcz0ndWktZGF0ZXBpY2tlci1wcmV2IHVpLWNvcm5lci1hbGwgdWktc3RhdGUtZGlzYWJsZWQnIHRpdGxlPSdcIitpK1wiJz48c3BhbiBjbGFzcz0ndWktaWNvbiB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1cIisoQj9cImVcIjpcIndcIikrXCInPlwiK2krXCI8L3NwYW4+PC9hPlwiLG49dGhpcy5fZ2V0KHQsXCJuZXh0VGV4dFwiKSxuPUs/dGhpcy5mb3JtYXREYXRlKG4sdGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QobmV3IERhdGUodGUsWiskLDEpKSx0aGlzLl9nZXRGb3JtYXRDb25maWcodCkpOm4sbz10aGlzLl9jYW5BZGp1c3RNb250aCh0LDEsdGUsWik/XCI8YSBjbGFzcz0ndWktZGF0ZXBpY2tlci1uZXh0IHVpLWNvcm5lci1hbGwnIGRhdGEtaGFuZGxlcj0nbmV4dCcgZGF0YS1ldmVudD0nY2xpY2snIHRpdGxlPSdcIituK1wiJz48c3BhbiBjbGFzcz0ndWktaWNvbiB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1cIisoQj9cIndcIjpcImVcIikrXCInPlwiK24rXCI8L3NwYW4+PC9hPlwiOnE/XCJcIjpcIjxhIGNsYXNzPSd1aS1kYXRlcGlja2VyLW5leHQgdWktY29ybmVyLWFsbCB1aS1zdGF0ZS1kaXNhYmxlZCcgdGl0bGU9J1wiK24rXCInPjxzcGFuIGNsYXNzPSd1aS1pY29uIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLVwiKyhCP1wid1wiOlwiZVwiKStcIic+XCIrbitcIjwvc3Bhbj48L2E+XCIsYT10aGlzLl9nZXQodCxcImN1cnJlbnRUZXh0XCIpLHI9dGhpcy5fZ2V0KHQsXCJnb3RvQ3VycmVudFwiKSYmdC5jdXJyZW50RGF5P0c6WSxhPUs/dGhpcy5mb3JtYXREYXRlKGEscix0aGlzLl9nZXRGb3JtYXRDb25maWcodCkpOmEsaD10LmlubGluZT9cIlwiOlwiPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSd1aS1kYXRlcGlja2VyLWNsb3NlIHVpLXN0YXRlLWRlZmF1bHQgdWktcHJpb3JpdHktcHJpbWFyeSB1aS1jb3JuZXItYWxsJyBkYXRhLWhhbmRsZXI9J2hpZGUnIGRhdGEtZXZlbnQ9J2NsaWNrJz5cIit0aGlzLl9nZXQodCxcImNsb3NlVGV4dFwiKStcIjwvYnV0dG9uPlwiLGw9aj9cIjxkaXYgY2xhc3M9J3VpLWRhdGVwaWNrZXItYnV0dG9ucGFuZSB1aS13aWRnZXQtY29udGVudCc+XCIrKEI/aDpcIlwiKSsodGhpcy5faXNJblJhbmdlKHQscik/XCI8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J3VpLWRhdGVwaWNrZXItY3VycmVudCB1aS1zdGF0ZS1kZWZhdWx0IHVpLXByaW9yaXR5LXNlY29uZGFyeSB1aS1jb3JuZXItYWxsJyBkYXRhLWhhbmRsZXI9J3RvZGF5JyBkYXRhLWV2ZW50PSdjbGljayc+XCIrYStcIjwvYnV0dG9uPlwiOlwiXCIpKyhCP1wiXCI6aCkrXCI8L2Rpdj5cIjpcIlwiLHU9cGFyc2VJbnQodGhpcy5fZ2V0KHQsXCJmaXJzdERheVwiKSwxMCksdT1pc05hTih1KT8wOnUsYz10aGlzLl9nZXQodCxcInNob3dXZWVrXCIpLGQ9dGhpcy5fZ2V0KHQsXCJkYXlOYW1lc1wiKSxwPXRoaXMuX2dldCh0LFwiZGF5TmFtZXNNaW5cIiksZj10aGlzLl9nZXQodCxcIm1vbnRoTmFtZXNcIiksbT10aGlzLl9nZXQodCxcIm1vbnRoTmFtZXNTaG9ydFwiKSxnPXRoaXMuX2dldCh0LFwiYmVmb3JlU2hvd0RheVwiKSxfPXRoaXMuX2dldCh0LFwic2hvd090aGVyTW9udGhzXCIpLHY9dGhpcy5fZ2V0KHQsXCJzZWxlY3RPdGhlck1vbnRoc1wiKSxiPXRoaXMuX2dldERlZmF1bHREYXRlKHQpLHk9XCJcIixrPTA7VVswXT5rO2srKyl7Zm9yKHg9XCJcIix0aGlzLm1heFJvd3M9NCxDPTA7VVsxXT5DO0MrKyl7aWYoRD10aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdChuZXcgRGF0ZSh0ZSxaLHQuc2VsZWN0ZWREYXkpKSxJPVwiIHVpLWNvcm5lci1hbGxcIixUPVwiXCIsWCl7aWYoVCs9XCI8ZGl2IGNsYXNzPSd1aS1kYXRlcGlja2VyLWdyb3VwXCIsVVsxXT4xKXN3aXRjaChDKXtjYXNlIDA6VCs9XCIgdWktZGF0ZXBpY2tlci1ncm91cC1maXJzdFwiLEk9XCIgdWktY29ybmVyLVwiKyhCP1wicmlnaHRcIjpcImxlZnRcIik7XG5icmVhaztjYXNlIFVbMV0tMTpUKz1cIiB1aS1kYXRlcGlja2VyLWdyb3VwLWxhc3RcIixJPVwiIHVpLWNvcm5lci1cIisoQj9cImxlZnRcIjpcInJpZ2h0XCIpO2JyZWFrO2RlZmF1bHQ6VCs9XCIgdWktZGF0ZXBpY2tlci1ncm91cC1taWRkbGVcIixJPVwiXCJ9VCs9XCInPlwifWZvcihUKz1cIjxkaXYgY2xhc3M9J3VpLWRhdGVwaWNrZXItaGVhZGVyIHVpLXdpZGdldC1oZWFkZXIgdWktaGVscGVyLWNsZWFyZml4XCIrSStcIic+XCIrKC9hbGx8bGVmdC8udGVzdChJKSYmMD09PWs/Qj9vOnM6XCJcIikrKC9hbGx8cmlnaHQvLnRlc3QoSSkmJjA9PT1rP0I/czpvOlwiXCIpK3RoaXMuX2dlbmVyYXRlTW9udGhZZWFySGVhZGVyKHQsWix0ZSxRLEosaz4wfHxDPjAsZixtKStcIjwvZGl2Pjx0YWJsZSBjbGFzcz0ndWktZGF0ZXBpY2tlci1jYWxlbmRhcic+PHRoZWFkPlwiK1wiPHRyPlwiLFA9Yz9cIjx0aCBjbGFzcz0ndWktZGF0ZXBpY2tlci13ZWVrLWNvbCc+XCIrdGhpcy5fZ2V0KHQsXCJ3ZWVrSGVhZGVyXCIpK1wiPC90aD5cIjpcIlwiLHc9MDs3Pnc7dysrKU09KHcrdSklNyxQKz1cIjx0aCBzY29wZT0nY29sJ1wiKygodyt1KzYpJTc+PTU/XCIgY2xhc3M9J3VpLWRhdGVwaWNrZXItd2Vlay1lbmQnXCI6XCJcIikrXCI+XCIrXCI8c3BhbiB0aXRsZT0nXCIrZFtNXStcIic+XCIrcFtNXStcIjwvc3Bhbj48L3RoPlwiO2ZvcihUKz1QK1wiPC90cj48L3RoZWFkPjx0Ym9keT5cIixTPXRoaXMuX2dldERheXNJbk1vbnRoKHRlLFopLHRlPT09dC5zZWxlY3RlZFllYXImJlo9PT10LnNlbGVjdGVkTW9udGgmJih0LnNlbGVjdGVkRGF5PU1hdGgubWluKHQuc2VsZWN0ZWREYXksUykpLEg9KHRoaXMuX2dldEZpcnN0RGF5T2ZNb250aCh0ZSxaKS11KzcpJTcsej1NYXRoLmNlaWwoKEgrUykvNyksTz1YP3RoaXMubWF4Um93cz56P3RoaXMubWF4Um93czp6OnosdGhpcy5tYXhSb3dzPU8sQT10aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdChuZXcgRGF0ZSh0ZSxaLDEtSCkpLEU9MDtPPkU7RSsrKXtmb3IoVCs9XCI8dHI+XCIsTj1jP1wiPHRkIGNsYXNzPSd1aS1kYXRlcGlja2VyLXdlZWstY29sJz5cIit0aGlzLl9nZXQodCxcImNhbGN1bGF0ZVdlZWtcIikoQSkrXCI8L3RkPlwiOlwiXCIsdz0wOzc+dzt3KyspVz1nP2cuYXBwbHkodC5pbnB1dD90LmlucHV0WzBdOm51bGwsW0FdKTpbITAsXCJcIl0sRj1BLmdldE1vbnRoKCkhPT1aLEw9RiYmIXZ8fCFXWzBdfHxRJiZRPkF8fEomJkE+SixOKz1cIjx0ZCBjbGFzcz0nXCIrKCh3K3UrNiklNz49NT9cIiB1aS1kYXRlcGlja2VyLXdlZWstZW5kXCI6XCJcIikrKEY/XCIgdWktZGF0ZXBpY2tlci1vdGhlci1tb250aFwiOlwiXCIpKyhBLmdldFRpbWUoKT09PUQuZ2V0VGltZSgpJiZaPT09dC5zZWxlY3RlZE1vbnRoJiZ0Ll9rZXlFdmVudHx8Yi5nZXRUaW1lKCk9PT1BLmdldFRpbWUoKSYmYi5nZXRUaW1lKCk9PT1ELmdldFRpbWUoKT9cIiBcIit0aGlzLl9kYXlPdmVyQ2xhc3M6XCJcIikrKEw/XCIgXCIrdGhpcy5fdW5zZWxlY3RhYmxlQ2xhc3MrXCIgdWktc3RhdGUtZGlzYWJsZWRcIjpcIlwiKSsoRiYmIV8/XCJcIjpcIiBcIitXWzFdKyhBLmdldFRpbWUoKT09PUcuZ2V0VGltZSgpP1wiIFwiK3RoaXMuX2N1cnJlbnRDbGFzczpcIlwiKSsoQS5nZXRUaW1lKCk9PT1ZLmdldFRpbWUoKT9cIiB1aS1kYXRlcGlja2VyLXRvZGF5XCI6XCJcIikpK1wiJ1wiKyhGJiYhX3x8IVdbMl0/XCJcIjpcIiB0aXRsZT0nXCIrV1syXS5yZXBsYWNlKC8nL2csXCImIzM5O1wiKStcIidcIikrKEw/XCJcIjpcIiBkYXRhLWhhbmRsZXI9J3NlbGVjdERheScgZGF0YS1ldmVudD0nY2xpY2snIGRhdGEtbW9udGg9J1wiK0EuZ2V0TW9udGgoKStcIicgZGF0YS15ZWFyPSdcIitBLmdldEZ1bGxZZWFyKCkrXCInXCIpK1wiPlwiKyhGJiYhXz9cIiYjeGEwO1wiOkw/XCI8c3BhbiBjbGFzcz0ndWktc3RhdGUtZGVmYXVsdCc+XCIrQS5nZXREYXRlKCkrXCI8L3NwYW4+XCI6XCI8YSBjbGFzcz0ndWktc3RhdGUtZGVmYXVsdFwiKyhBLmdldFRpbWUoKT09PVkuZ2V0VGltZSgpP1wiIHVpLXN0YXRlLWhpZ2hsaWdodFwiOlwiXCIpKyhBLmdldFRpbWUoKT09PUcuZ2V0VGltZSgpP1wiIHVpLXN0YXRlLWFjdGl2ZVwiOlwiXCIpKyhGP1wiIHVpLXByaW9yaXR5LXNlY29uZGFyeVwiOlwiXCIpK1wiJyBocmVmPScjJz5cIitBLmdldERhdGUoKStcIjwvYT5cIikrXCI8L3RkPlwiLEEuc2V0RGF0ZShBLmdldERhdGUoKSsxKSxBPXRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KEEpO1QrPU4rXCI8L3RyPlwifVorKyxaPjExJiYoWj0wLHRlKyspLFQrPVwiPC90Ym9keT48L3RhYmxlPlwiKyhYP1wiPC9kaXY+XCIrKFVbMF0+MCYmQz09PVVbMV0tMT9cIjxkaXYgY2xhc3M9J3VpLWRhdGVwaWNrZXItcm93LWJyZWFrJz48L2Rpdj5cIjpcIlwiKTpcIlwiKSx4Kz1UfXkrPXh9cmV0dXJuIHkrPWwsdC5fa2V5RXZlbnQ9ITEseX0sX2dlbmVyYXRlTW9udGhZZWFySGVhZGVyOmZ1bmN0aW9uKHQsZSxpLHMsbixvLGEscil7dmFyIGgsbCx1LGMsZCxwLGYsbSxnPXRoaXMuX2dldCh0LFwiY2hhbmdlTW9udGhcIiksXz10aGlzLl9nZXQodCxcImNoYW5nZVllYXJcIiksdj10aGlzLl9nZXQodCxcInNob3dNb250aEFmdGVyWWVhclwiKSxiPVwiPGRpdiBjbGFzcz0ndWktZGF0ZXBpY2tlci10aXRsZSc+XCIseT1cIlwiO2lmKG98fCFnKXkrPVwiPHNwYW4gY2xhc3M9J3VpLWRhdGVwaWNrZXItbW9udGgnPlwiK2FbZV0rXCI8L3NwYW4+XCI7ZWxzZXtmb3IoaD1zJiZzLmdldEZ1bGxZZWFyKCk9PT1pLGw9biYmbi5nZXRGdWxsWWVhcigpPT09aSx5Kz1cIjxzZWxlY3QgY2xhc3M9J3VpLWRhdGVwaWNrZXItbW9udGgnIGRhdGEtaGFuZGxlcj0nc2VsZWN0TW9udGgnIGRhdGEtZXZlbnQ9J2NoYW5nZSc+XCIsdT0wOzEyPnU7dSsrKSghaHx8dT49cy5nZXRNb250aCgpKSYmKCFsfHxuLmdldE1vbnRoKCk+PXUpJiYoeSs9XCI8b3B0aW9uIHZhbHVlPSdcIit1K1wiJ1wiKyh1PT09ZT9cIiBzZWxlY3RlZD0nc2VsZWN0ZWQnXCI6XCJcIikrXCI+XCIrclt1XStcIjwvb3B0aW9uPlwiKTt5Kz1cIjwvc2VsZWN0PlwifWlmKHZ8fChiKz15KyghbyYmZyYmXz9cIlwiOlwiJiN4YTA7XCIpKSwhdC55ZWFyc2h0bWwpaWYodC55ZWFyc2h0bWw9XCJcIixvfHwhXyliKz1cIjxzcGFuIGNsYXNzPSd1aS1kYXRlcGlja2VyLXllYXInPlwiK2krXCI8L3NwYW4+XCI7ZWxzZXtmb3IoYz10aGlzLl9nZXQodCxcInllYXJSYW5nZVwiKS5zcGxpdChcIjpcIiksZD0obmV3IERhdGUpLmdldEZ1bGxZZWFyKCkscD1mdW5jdGlvbih0KXt2YXIgZT10Lm1hdGNoKC9jWytcXC1dLiovKT9pK3BhcnNlSW50KHQuc3Vic3RyaW5nKDEpLDEwKTp0Lm1hdGNoKC9bK1xcLV0uKi8pP2QrcGFyc2VJbnQodCwxMCk6cGFyc2VJbnQodCwxMCk7cmV0dXJuIGlzTmFOKGUpP2Q6ZX0sZj1wKGNbMF0pLG09TWF0aC5tYXgoZixwKGNbMV18fFwiXCIpKSxmPXM/TWF0aC5tYXgoZixzLmdldEZ1bGxZZWFyKCkpOmYsbT1uP01hdGgubWluKG0sbi5nZXRGdWxsWWVhcigpKTptLHQueWVhcnNodG1sKz1cIjxzZWxlY3QgY2xhc3M9J3VpLWRhdGVwaWNrZXIteWVhcicgZGF0YS1oYW5kbGVyPSdzZWxlY3RZZWFyJyBkYXRhLWV2ZW50PSdjaGFuZ2UnPlwiO20+PWY7ZisrKXQueWVhcnNodG1sKz1cIjxvcHRpb24gdmFsdWU9J1wiK2YrXCInXCIrKGY9PT1pP1wiIHNlbGVjdGVkPSdzZWxlY3RlZCdcIjpcIlwiKStcIj5cIitmK1wiPC9vcHRpb24+XCI7dC55ZWFyc2h0bWwrPVwiPC9zZWxlY3Q+XCIsYis9dC55ZWFyc2h0bWwsdC55ZWFyc2h0bWw9bnVsbH1yZXR1cm4gYis9dGhpcy5fZ2V0KHQsXCJ5ZWFyU3VmZml4XCIpLHYmJihiKz0oIW8mJmcmJl8/XCJcIjpcIiYjeGEwO1wiKSt5KSxiKz1cIjwvZGl2PlwifSxfYWRqdXN0SW5zdERhdGU6ZnVuY3Rpb24odCxlLGkpe3ZhciBzPXQuc2VsZWN0ZWRZZWFyKyhcIllcIj09PWk/ZTowKSxuPXQuc2VsZWN0ZWRNb250aCsoXCJNXCI9PT1pP2U6MCksbz1NYXRoLm1pbih0LnNlbGVjdGVkRGF5LHRoaXMuX2dldERheXNJbk1vbnRoKHMsbikpKyhcIkRcIj09PWk/ZTowKSxhPXRoaXMuX3Jlc3RyaWN0TWluTWF4KHQsdGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QobmV3IERhdGUocyxuLG8pKSk7dC5zZWxlY3RlZERheT1hLmdldERhdGUoKSx0LmRyYXdNb250aD10LnNlbGVjdGVkTW9udGg9YS5nZXRNb250aCgpLHQuZHJhd1llYXI9dC5zZWxlY3RlZFllYXI9YS5nZXRGdWxsWWVhcigpLChcIk1cIj09PWl8fFwiWVwiPT09aSkmJnRoaXMuX25vdGlmeUNoYW5nZSh0KX0sX3Jlc3RyaWN0TWluTWF4OmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5fZ2V0TWluTWF4RGF0ZSh0LFwibWluXCIpLHM9dGhpcy5fZ2V0TWluTWF4RGF0ZSh0LFwibWF4XCIpLG49aSYmaT5lP2k6ZTtyZXR1cm4gcyYmbj5zP3M6bn0sX25vdGlmeUNoYW5nZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9nZXQodCxcIm9uQ2hhbmdlTW9udGhZZWFyXCIpO2UmJmUuYXBwbHkodC5pbnB1dD90LmlucHV0WzBdOm51bGwsW3Quc2VsZWN0ZWRZZWFyLHQuc2VsZWN0ZWRNb250aCsxLHRdKX0sX2dldE51bWJlck9mTW9udGhzOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2dldCh0LFwibnVtYmVyT2ZNb250aHNcIik7cmV0dXJuIG51bGw9PWU/WzEsMV06XCJudW1iZXJcIj09dHlwZW9mIGU/WzEsZV06ZX0sX2dldE1pbk1heERhdGU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5fZGV0ZXJtaW5lRGF0ZSh0LHRoaXMuX2dldCh0LGUrXCJEYXRlXCIpLG51bGwpfSxfZ2V0RGF5c0luTW9udGg6ZnVuY3Rpb24odCxlKXtyZXR1cm4gMzItdGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QobmV3IERhdGUodCxlLDMyKSkuZ2V0RGF0ZSgpfSxfZ2V0Rmlyc3REYXlPZk1vbnRoOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG5ldyBEYXRlKHQsZSwxKS5nZXREYXkoKX0sX2NhbkFkanVzdE1vbnRoOmZ1bmN0aW9uKHQsZSxpLHMpe3ZhciBuPXRoaXMuX2dldE51bWJlck9mTW9udGhzKHQpLG89dGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QobmV3IERhdGUoaSxzKygwPmU/ZTpuWzBdKm5bMV0pLDEpKTtyZXR1cm4gMD5lJiZvLnNldERhdGUodGhpcy5fZ2V0RGF5c0luTW9udGgoby5nZXRGdWxsWWVhcigpLG8uZ2V0TW9udGgoKSkpLHRoaXMuX2lzSW5SYW5nZSh0LG8pfSxfaXNJblJhbmdlOmZ1bmN0aW9uKHQsZSl7dmFyIGkscyxuPXRoaXMuX2dldE1pbk1heERhdGUodCxcIm1pblwiKSxvPXRoaXMuX2dldE1pbk1heERhdGUodCxcIm1heFwiKSxhPW51bGwscj1udWxsLGg9dGhpcy5fZ2V0KHQsXCJ5ZWFyUmFuZ2VcIik7cmV0dXJuIGgmJihpPWguc3BsaXQoXCI6XCIpLHM9KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpLGE9cGFyc2VJbnQoaVswXSwxMCkscj1wYXJzZUludChpWzFdLDEwKSxpWzBdLm1hdGNoKC9bK1xcLV0uKi8pJiYoYSs9cyksaVsxXS5tYXRjaCgvWytcXC1dLiovKSYmKHIrPXMpKSwoIW58fGUuZ2V0VGltZSgpPj1uLmdldFRpbWUoKSkmJighb3x8ZS5nZXRUaW1lKCk8PW8uZ2V0VGltZSgpKSYmKCFhfHxlLmdldEZ1bGxZZWFyKCk+PWEpJiYoIXJ8fHI+PWUuZ2V0RnVsbFllYXIoKSl9LF9nZXRGb3JtYXRDb25maWc6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fZ2V0KHQsXCJzaG9ydFllYXJDdXRvZmZcIik7cmV0dXJuIGU9XCJzdHJpbmdcIiE9dHlwZW9mIGU/ZToobmV3IERhdGUpLmdldEZ1bGxZZWFyKCklMTAwK3BhcnNlSW50KGUsMTApLHtzaG9ydFllYXJDdXRvZmY6ZSxkYXlOYW1lc1Nob3J0OnRoaXMuX2dldCh0LFwiZGF5TmFtZXNTaG9ydFwiKSxkYXlOYW1lczp0aGlzLl9nZXQodCxcImRheU5hbWVzXCIpLG1vbnRoTmFtZXNTaG9ydDp0aGlzLl9nZXQodCxcIm1vbnRoTmFtZXNTaG9ydFwiKSxtb250aE5hbWVzOnRoaXMuX2dldCh0LFwibW9udGhOYW1lc1wiKX19LF9mb3JtYXREYXRlOmZ1bmN0aW9uKHQsZSxpLHMpe2V8fCh0LmN1cnJlbnREYXk9dC5zZWxlY3RlZERheSx0LmN1cnJlbnRNb250aD10LnNlbGVjdGVkTW9udGgsdC5jdXJyZW50WWVhcj10LnNlbGVjdGVkWWVhcik7dmFyIG49ZT9cIm9iamVjdFwiPT10eXBlb2YgZT9lOnRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKHMsaSxlKSk6dGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QobmV3IERhdGUodC5jdXJyZW50WWVhcix0LmN1cnJlbnRNb250aCx0LmN1cnJlbnREYXkpKTtyZXR1cm4gdGhpcy5mb3JtYXREYXRlKHRoaXMuX2dldCh0LFwiZGF0ZUZvcm1hdFwiKSxuLHRoaXMuX2dldEZvcm1hdENvbmZpZyh0KSl9fSksdC5mbi5kYXRlcGlja2VyPWZ1bmN0aW9uKGUpe2lmKCF0aGlzLmxlbmd0aClyZXR1cm4gdGhpczt0LmRhdGVwaWNrZXIuaW5pdGlhbGl6ZWR8fCh0KGRvY3VtZW50KS5vbihcIm1vdXNlZG93blwiLHQuZGF0ZXBpY2tlci5fY2hlY2tFeHRlcm5hbENsaWNrKSx0LmRhdGVwaWNrZXIuaW5pdGlhbGl6ZWQ9ITApLDA9PT10KFwiI1wiK3QuZGF0ZXBpY2tlci5fbWFpbkRpdklkKS5sZW5ndGgmJnQoXCJib2R5XCIpLmFwcGVuZCh0LmRhdGVwaWNrZXIuZHBEaXYpO3ZhciBpPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZXx8XCJpc0Rpc2FibGVkXCIhPT1lJiZcImdldERhdGVcIiE9PWUmJlwid2lkZ2V0XCIhPT1lP1wib3B0aW9uXCI9PT1lJiYyPT09YXJndW1lbnRzLmxlbmd0aCYmXCJzdHJpbmdcIj09dHlwZW9mIGFyZ3VtZW50c1sxXT90LmRhdGVwaWNrZXJbXCJfXCIrZStcIkRhdGVwaWNrZXJcIl0uYXBwbHkodC5kYXRlcGlja2VyLFt0aGlzWzBdXS5jb25jYXQoaSkpOnRoaXMuZWFjaChmdW5jdGlvbigpe1wic3RyaW5nXCI9PXR5cGVvZiBlP3QuZGF0ZXBpY2tlcltcIl9cIitlK1wiRGF0ZXBpY2tlclwiXS5hcHBseSh0LmRhdGVwaWNrZXIsW3RoaXNdLmNvbmNhdChpKSk6dC5kYXRlcGlja2VyLl9hdHRhY2hEYXRlcGlja2VyKHRoaXMsZSl9KTp0LmRhdGVwaWNrZXJbXCJfXCIrZStcIkRhdGVwaWNrZXJcIl0uYXBwbHkodC5kYXRlcGlja2VyLFt0aGlzWzBdXS5jb25jYXQoaSkpfSx0LmRhdGVwaWNrZXI9bmV3IHMsdC5kYXRlcGlja2VyLmluaXRpYWxpemVkPSExLHQuZGF0ZXBpY2tlci51dWlkPShuZXcgRGF0ZSkuZ2V0VGltZSgpLHQuZGF0ZXBpY2tlci52ZXJzaW9uPVwiMS4xMi4xXCIsdC5kYXRlcGlja2VyLHQud2lkZ2V0KFwidWkuZGlhbG9nXCIse3ZlcnNpb246XCIxLjEyLjFcIixvcHRpb25zOnthcHBlbmRUbzpcImJvZHlcIixhdXRvT3BlbjohMCxidXR0b25zOltdLGNsYXNzZXM6e1widWktZGlhbG9nXCI6XCJ1aS1jb3JuZXItYWxsXCIsXCJ1aS1kaWFsb2ctdGl0bGViYXJcIjpcInVpLWNvcm5lci1hbGxcIn0sY2xvc2VPbkVzY2FwZTohMCxjbG9zZVRleHQ6XCJDbG9zZVwiLGRyYWdnYWJsZTohMCxoaWRlOm51bGwsaGVpZ2h0OlwiYXV0b1wiLG1heEhlaWdodDpudWxsLG1heFdpZHRoOm51bGwsbWluSGVpZ2h0OjE1MCxtaW5XaWR0aDoxNTAsbW9kYWw6ITEscG9zaXRpb246e215OlwiY2VudGVyXCIsYXQ6XCJjZW50ZXJcIixvZjp3aW5kb3csY29sbGlzaW9uOlwiZml0XCIsdXNpbmc6ZnVuY3Rpb24oZSl7dmFyIGk9dCh0aGlzKS5jc3MoZSkub2Zmc2V0KCkudG9wOzA+aSYmdCh0aGlzKS5jc3MoXCJ0b3BcIixlLnRvcC1pKX19LHJlc2l6YWJsZTohMCxzaG93Om51bGwsdGl0bGU6bnVsbCx3aWR0aDozMDAsYmVmb3JlQ2xvc2U6bnVsbCxjbG9zZTpudWxsLGRyYWc6bnVsbCxkcmFnU3RhcnQ6bnVsbCxkcmFnU3RvcDpudWxsLGZvY3VzOm51bGwsb3BlbjpudWxsLHJlc2l6ZTpudWxsLHJlc2l6ZVN0YXJ0Om51bGwscmVzaXplU3RvcDpudWxsfSxzaXplUmVsYXRlZE9wdGlvbnM6e2J1dHRvbnM6ITAsaGVpZ2h0OiEwLG1heEhlaWdodDohMCxtYXhXaWR0aDohMCxtaW5IZWlnaHQ6ITAsbWluV2lkdGg6ITAsd2lkdGg6ITB9LHJlc2l6YWJsZVJlbGF0ZWRPcHRpb25zOnttYXhIZWlnaHQ6ITAsbWF4V2lkdGg6ITAsbWluSGVpZ2h0OiEwLG1pbldpZHRoOiEwfSxfY3JlYXRlOmZ1bmN0aW9uKCl7dGhpcy5vcmlnaW5hbENzcz17ZGlzcGxheTp0aGlzLmVsZW1lbnRbMF0uc3R5bGUuZGlzcGxheSx3aWR0aDp0aGlzLmVsZW1lbnRbMF0uc3R5bGUud2lkdGgsbWluSGVpZ2h0OnRoaXMuZWxlbWVudFswXS5zdHlsZS5taW5IZWlnaHQsbWF4SGVpZ2h0OnRoaXMuZWxlbWVudFswXS5zdHlsZS5tYXhIZWlnaHQsaGVpZ2h0OnRoaXMuZWxlbWVudFswXS5zdHlsZS5oZWlnaHR9LHRoaXMub3JpZ2luYWxQb3NpdGlvbj17cGFyZW50OnRoaXMuZWxlbWVudC5wYXJlbnQoKSxpbmRleDp0aGlzLmVsZW1lbnQucGFyZW50KCkuY2hpbGRyZW4oKS5pbmRleCh0aGlzLmVsZW1lbnQpfSx0aGlzLm9yaWdpbmFsVGl0bGU9dGhpcy5lbGVtZW50LmF0dHIoXCJ0aXRsZVwiKSxudWxsPT10aGlzLm9wdGlvbnMudGl0bGUmJm51bGwhPXRoaXMub3JpZ2luYWxUaXRsZSYmKHRoaXMub3B0aW9ucy50aXRsZT10aGlzLm9yaWdpbmFsVGl0bGUpLHRoaXMub3B0aW9ucy5kaXNhYmxlZCYmKHRoaXMub3B0aW9ucy5kaXNhYmxlZD0hMSksdGhpcy5fY3JlYXRlV3JhcHBlcigpLHRoaXMuZWxlbWVudC5zaG93KCkucmVtb3ZlQXR0cihcInRpdGxlXCIpLmFwcGVuZFRvKHRoaXMudWlEaWFsb2cpLHRoaXMuX2FkZENsYXNzKFwidWktZGlhbG9nLWNvbnRlbnRcIixcInVpLXdpZGdldC1jb250ZW50XCIpLHRoaXMuX2NyZWF0ZVRpdGxlYmFyKCksdGhpcy5fY3JlYXRlQnV0dG9uUGFuZSgpLHRoaXMub3B0aW9ucy5kcmFnZ2FibGUmJnQuZm4uZHJhZ2dhYmxlJiZ0aGlzLl9tYWtlRHJhZ2dhYmxlKCksdGhpcy5vcHRpb25zLnJlc2l6YWJsZSYmdC5mbi5yZXNpemFibGUmJnRoaXMuX21ha2VSZXNpemFibGUoKSx0aGlzLl9pc09wZW49ITEsdGhpcy5fdHJhY2tGb2N1cygpfSxfaW5pdDpmdW5jdGlvbigpe3RoaXMub3B0aW9ucy5hdXRvT3BlbiYmdGhpcy5vcGVuKCl9LF9hcHBlbmRUbzpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3B0aW9ucy5hcHBlbmRUbztyZXR1cm4gZSYmKGUuanF1ZXJ5fHxlLm5vZGVUeXBlKT90KGUpOnRoaXMuZG9jdW1lbnQuZmluZChlfHxcImJvZHlcIikuZXEoMCl9LF9kZXN0cm95OmZ1bmN0aW9uKCl7dmFyIHQsZT10aGlzLm9yaWdpbmFsUG9zaXRpb247dGhpcy5fdW50cmFja0luc3RhbmNlKCksdGhpcy5fZGVzdHJveU92ZXJsYXkoKSx0aGlzLmVsZW1lbnQucmVtb3ZlVW5pcXVlSWQoKS5jc3ModGhpcy5vcmlnaW5hbENzcykuZGV0YWNoKCksdGhpcy51aURpYWxvZy5yZW1vdmUoKSx0aGlzLm9yaWdpbmFsVGl0bGUmJnRoaXMuZWxlbWVudC5hdHRyKFwidGl0bGVcIix0aGlzLm9yaWdpbmFsVGl0bGUpLHQ9ZS5wYXJlbnQuY2hpbGRyZW4oKS5lcShlLmluZGV4KSx0Lmxlbmd0aCYmdFswXSE9PXRoaXMuZWxlbWVudFswXT90LmJlZm9yZSh0aGlzLmVsZW1lbnQpOmUucGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpfSx3aWRnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy51aURpYWxvZ30sZGlzYWJsZTp0Lm5vb3AsZW5hYmxlOnQubm9vcCxjbG9zZTpmdW5jdGlvbihlKXt2YXIgaT10aGlzO3RoaXMuX2lzT3BlbiYmdGhpcy5fdHJpZ2dlcihcImJlZm9yZUNsb3NlXCIsZSkhPT0hMSYmKHRoaXMuX2lzT3Blbj0hMSx0aGlzLl9mb2N1c2VkRWxlbWVudD1udWxsLHRoaXMuX2Rlc3Ryb3lPdmVybGF5KCksdGhpcy5fdW50cmFja0luc3RhbmNlKCksdGhpcy5vcGVuZXIuZmlsdGVyKFwiOmZvY3VzYWJsZVwiKS50cmlnZ2VyKFwiZm9jdXNcIikubGVuZ3RofHx0LnVpLnNhZmVCbHVyKHQudWkuc2FmZUFjdGl2ZUVsZW1lbnQodGhpcy5kb2N1bWVudFswXSkpLHRoaXMuX2hpZGUodGhpcy51aURpYWxvZyx0aGlzLm9wdGlvbnMuaGlkZSxmdW5jdGlvbigpe2kuX3RyaWdnZXIoXCJjbG9zZVwiLGUpfSkpfSxpc09wZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faXNPcGVufSxtb3ZlVG9Ub3A6ZnVuY3Rpb24oKXt0aGlzLl9tb3ZlVG9Ub3AoKX0sX21vdmVUb1RvcDpmdW5jdGlvbihlLGkpe3ZhciBzPSExLG49dGhpcy51aURpYWxvZy5zaWJsaW5ncyhcIi51aS1mcm9udDp2aXNpYmxlXCIpLm1hcChmdW5jdGlvbigpe3JldHVybit0KHRoaXMpLmNzcyhcInotaW5kZXhcIil9KS5nZXQoKSxvPU1hdGgubWF4LmFwcGx5KG51bGwsbik7cmV0dXJuIG8+PSt0aGlzLnVpRGlhbG9nLmNzcyhcInotaW5kZXhcIikmJih0aGlzLnVpRGlhbG9nLmNzcyhcInotaW5kZXhcIixvKzEpLHM9ITApLHMmJiFpJiZ0aGlzLl90cmlnZ2VyKFwiZm9jdXNcIixlKSxzfSxvcGVuOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gdGhpcy5faXNPcGVuPyh0aGlzLl9tb3ZlVG9Ub3AoKSYmdGhpcy5fZm9jdXNUYWJiYWJsZSgpLHZvaWQgMCk6KHRoaXMuX2lzT3Blbj0hMCx0aGlzLm9wZW5lcj10KHQudWkuc2FmZUFjdGl2ZUVsZW1lbnQodGhpcy5kb2N1bWVudFswXSkpLHRoaXMuX3NpemUoKSx0aGlzLl9wb3NpdGlvbigpLHRoaXMuX2NyZWF0ZU92ZXJsYXkoKSx0aGlzLl9tb3ZlVG9Ub3AobnVsbCwhMCksdGhpcy5vdmVybGF5JiZ0aGlzLm92ZXJsYXkuY3NzKFwiei1pbmRleFwiLHRoaXMudWlEaWFsb2cuY3NzKFwiei1pbmRleFwiKS0xKSx0aGlzLl9zaG93KHRoaXMudWlEaWFsb2csdGhpcy5vcHRpb25zLnNob3csZnVuY3Rpb24oKXtlLl9mb2N1c1RhYmJhYmxlKCksZS5fdHJpZ2dlcihcImZvY3VzXCIpfSksdGhpcy5fbWFrZUZvY3VzVGFyZ2V0KCksdGhpcy5fdHJpZ2dlcihcIm9wZW5cIiksdm9pZCAwKX0sX2ZvY3VzVGFiYmFibGU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9mb2N1c2VkRWxlbWVudDt0fHwodD10aGlzLmVsZW1lbnQuZmluZChcIlthdXRvZm9jdXNdXCIpKSx0Lmxlbmd0aHx8KHQ9dGhpcy5lbGVtZW50LmZpbmQoXCI6dGFiYmFibGVcIikpLHQubGVuZ3RofHwodD10aGlzLnVpRGlhbG9nQnV0dG9uUGFuZS5maW5kKFwiOnRhYmJhYmxlXCIpKSx0Lmxlbmd0aHx8KHQ9dGhpcy51aURpYWxvZ1RpdGxlYmFyQ2xvc2UuZmlsdGVyKFwiOnRhYmJhYmxlXCIpKSx0Lmxlbmd0aHx8KHQ9dGhpcy51aURpYWxvZyksdC5lcSgwKS50cmlnZ2VyKFwiZm9jdXNcIil9LF9rZWVwRm9jdXM6ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gaSgpe3ZhciBlPXQudWkuc2FmZUFjdGl2ZUVsZW1lbnQodGhpcy5kb2N1bWVudFswXSksaT10aGlzLnVpRGlhbG9nWzBdPT09ZXx8dC5jb250YWlucyh0aGlzLnVpRGlhbG9nWzBdLGUpO2l8fHRoaXMuX2ZvY3VzVGFiYmFibGUoKX1lLnByZXZlbnREZWZhdWx0KCksaS5jYWxsKHRoaXMpLHRoaXMuX2RlbGF5KGkpfSxfY3JlYXRlV3JhcHBlcjpmdW5jdGlvbigpe3RoaXMudWlEaWFsb2c9dChcIjxkaXY+XCIpLmhpZGUoKS5hdHRyKHt0YWJJbmRleDotMSxyb2xlOlwiZGlhbG9nXCJ9KS5hcHBlbmRUbyh0aGlzLl9hcHBlbmRUbygpKSx0aGlzLl9hZGRDbGFzcyh0aGlzLnVpRGlhbG9nLFwidWktZGlhbG9nXCIsXCJ1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktZnJvbnRcIiksdGhpcy5fb24odGhpcy51aURpYWxvZyx7a2V5ZG93bjpmdW5jdGlvbihlKXtpZih0aGlzLm9wdGlvbnMuY2xvc2VPbkVzY2FwZSYmIWUuaXNEZWZhdWx0UHJldmVudGVkKCkmJmUua2V5Q29kZSYmZS5rZXlDb2RlPT09dC51aS5rZXlDb2RlLkVTQ0FQRSlyZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuY2xvc2UoZSksdm9pZCAwO2lmKGUua2V5Q29kZT09PXQudWkua2V5Q29kZS5UQUImJiFlLmlzRGVmYXVsdFByZXZlbnRlZCgpKXt2YXIgaT10aGlzLnVpRGlhbG9nLmZpbmQoXCI6dGFiYmFibGVcIikscz1pLmZpbHRlcihcIjpmaXJzdFwiKSxuPWkuZmlsdGVyKFwiOmxhc3RcIik7ZS50YXJnZXQhPT1uWzBdJiZlLnRhcmdldCE9PXRoaXMudWlEaWFsb2dbMF18fGUuc2hpZnRLZXk/ZS50YXJnZXQhPT1zWzBdJiZlLnRhcmdldCE9PXRoaXMudWlEaWFsb2dbMF18fCFlLnNoaWZ0S2V5fHwodGhpcy5fZGVsYXkoZnVuY3Rpb24oKXtuLnRyaWdnZXIoXCJmb2N1c1wiKX0pLGUucHJldmVudERlZmF1bHQoKSk6KHRoaXMuX2RlbGF5KGZ1bmN0aW9uKCl7cy50cmlnZ2VyKFwiZm9jdXNcIil9KSxlLnByZXZlbnREZWZhdWx0KCkpfX0sbW91c2Vkb3duOmZ1bmN0aW9uKHQpe3RoaXMuX21vdmVUb1RvcCh0KSYmdGhpcy5fZm9jdXNUYWJiYWJsZSgpfX0pLHRoaXMuZWxlbWVudC5maW5kKFwiW2FyaWEtZGVzY3JpYmVkYnldXCIpLmxlbmd0aHx8dGhpcy51aURpYWxvZy5hdHRyKHtcImFyaWEtZGVzY3JpYmVkYnlcIjp0aGlzLmVsZW1lbnQudW5pcXVlSWQoKS5hdHRyKFwiaWRcIil9KX0sX2NyZWF0ZVRpdGxlYmFyOmZ1bmN0aW9uKCl7dmFyIGU7dGhpcy51aURpYWxvZ1RpdGxlYmFyPXQoXCI8ZGl2PlwiKSx0aGlzLl9hZGRDbGFzcyh0aGlzLnVpRGlhbG9nVGl0bGViYXIsXCJ1aS1kaWFsb2ctdGl0bGViYXJcIixcInVpLXdpZGdldC1oZWFkZXIgdWktaGVscGVyLWNsZWFyZml4XCIpLHRoaXMuX29uKHRoaXMudWlEaWFsb2dUaXRsZWJhcix7bW91c2Vkb3duOmZ1bmN0aW9uKGUpe3QoZS50YXJnZXQpLmNsb3Nlc3QoXCIudWktZGlhbG9nLXRpdGxlYmFyLWNsb3NlXCIpfHx0aGlzLnVpRGlhbG9nLnRyaWdnZXIoXCJmb2N1c1wiKX19KSx0aGlzLnVpRGlhbG9nVGl0bGViYXJDbG9zZT10KFwiPGJ1dHRvbiB0eXBlPSdidXR0b24nPjwvYnV0dG9uPlwiKS5idXR0b24oe2xhYmVsOnQoXCI8YT5cIikudGV4dCh0aGlzLm9wdGlvbnMuY2xvc2VUZXh0KS5odG1sKCksaWNvbjpcInVpLWljb24tY2xvc2V0aGlja1wiLHNob3dMYWJlbDohMX0pLmFwcGVuZFRvKHRoaXMudWlEaWFsb2dUaXRsZWJhciksdGhpcy5fYWRkQ2xhc3ModGhpcy51aURpYWxvZ1RpdGxlYmFyQ2xvc2UsXCJ1aS1kaWFsb2ctdGl0bGViYXItY2xvc2VcIiksdGhpcy5fb24odGhpcy51aURpYWxvZ1RpdGxlYmFyQ2xvc2Use2NsaWNrOmZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSx0aGlzLmNsb3NlKHQpfX0pLGU9dChcIjxzcGFuPlwiKS51bmlxdWVJZCgpLnByZXBlbmRUbyh0aGlzLnVpRGlhbG9nVGl0bGViYXIpLHRoaXMuX2FkZENsYXNzKGUsXCJ1aS1kaWFsb2ctdGl0bGVcIiksdGhpcy5fdGl0bGUoZSksdGhpcy51aURpYWxvZ1RpdGxlYmFyLnByZXBlbmRUbyh0aGlzLnVpRGlhbG9nKSx0aGlzLnVpRGlhbG9nLmF0dHIoe1wiYXJpYS1sYWJlbGxlZGJ5XCI6ZS5hdHRyKFwiaWRcIil9KX0sX3RpdGxlOmZ1bmN0aW9uKHQpe3RoaXMub3B0aW9ucy50aXRsZT90LnRleHQodGhpcy5vcHRpb25zLnRpdGxlKTp0Lmh0bWwoXCImIzE2MDtcIil9LF9jcmVhdGVCdXR0b25QYW5lOmZ1bmN0aW9uKCl7dGhpcy51aURpYWxvZ0J1dHRvblBhbmU9dChcIjxkaXY+XCIpLHRoaXMuX2FkZENsYXNzKHRoaXMudWlEaWFsb2dCdXR0b25QYW5lLFwidWktZGlhbG9nLWJ1dHRvbnBhbmVcIixcInVpLXdpZGdldC1jb250ZW50IHVpLWhlbHBlci1jbGVhcmZpeFwiKSx0aGlzLnVpQnV0dG9uU2V0PXQoXCI8ZGl2PlwiKS5hcHBlbmRUbyh0aGlzLnVpRGlhbG9nQnV0dG9uUGFuZSksdGhpcy5fYWRkQ2xhc3ModGhpcy51aUJ1dHRvblNldCxcInVpLWRpYWxvZy1idXR0b25zZXRcIiksdGhpcy5fY3JlYXRlQnV0dG9ucygpfSxfY3JlYXRlQnV0dG9uczpmdW5jdGlvbigpe3ZhciBlPXRoaXMsaT10aGlzLm9wdGlvbnMuYnV0dG9ucztyZXR1cm4gdGhpcy51aURpYWxvZ0J1dHRvblBhbmUucmVtb3ZlKCksdGhpcy51aUJ1dHRvblNldC5lbXB0eSgpLHQuaXNFbXB0eU9iamVjdChpKXx8dC5pc0FycmF5KGkpJiYhaS5sZW5ndGg/KHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudWlEaWFsb2csXCJ1aS1kaWFsb2ctYnV0dG9uc1wiKSx2b2lkIDApOih0LmVhY2goaSxmdW5jdGlvbihpLHMpe3ZhciBuLG87cz10LmlzRnVuY3Rpb24ocyk/e2NsaWNrOnMsdGV4dDppfTpzLHM9dC5leHRlbmQoe3R5cGU6XCJidXR0b25cIn0scyksbj1zLmNsaWNrLG89e2ljb246cy5pY29uLGljb25Qb3NpdGlvbjpzLmljb25Qb3NpdGlvbixzaG93TGFiZWw6cy5zaG93TGFiZWwsaWNvbnM6cy5pY29ucyx0ZXh0OnMudGV4dH0sZGVsZXRlIHMuY2xpY2ssZGVsZXRlIHMuaWNvbixkZWxldGUgcy5pY29uUG9zaXRpb24sZGVsZXRlIHMuc2hvd0xhYmVsLGRlbGV0ZSBzLmljb25zLFwiYm9vbGVhblwiPT10eXBlb2Ygcy50ZXh0JiZkZWxldGUgcy50ZXh0LHQoXCI8YnV0dG9uPjwvYnV0dG9uPlwiLHMpLmJ1dHRvbihvKS5hcHBlbmRUbyhlLnVpQnV0dG9uU2V0KS5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXtuLmFwcGx5KGUuZWxlbWVudFswXSxhcmd1bWVudHMpfSl9KSx0aGlzLl9hZGRDbGFzcyh0aGlzLnVpRGlhbG9nLFwidWktZGlhbG9nLWJ1dHRvbnNcIiksdGhpcy51aURpYWxvZ0J1dHRvblBhbmUuYXBwZW5kVG8odGhpcy51aURpYWxvZyksdm9pZCAwKX0sX21ha2VEcmFnZ2FibGU6ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3JldHVybntwb3NpdGlvbjp0LnBvc2l0aW9uLG9mZnNldDp0Lm9mZnNldH19dmFyIGk9dGhpcyxzPXRoaXMub3B0aW9uczt0aGlzLnVpRGlhbG9nLmRyYWdnYWJsZSh7Y2FuY2VsOlwiLnVpLWRpYWxvZy1jb250ZW50LCAudWktZGlhbG9nLXRpdGxlYmFyLWNsb3NlXCIsaGFuZGxlOlwiLnVpLWRpYWxvZy10aXRsZWJhclwiLGNvbnRhaW5tZW50OlwiZG9jdW1lbnRcIixzdGFydDpmdW5jdGlvbihzLG4pe2kuX2FkZENsYXNzKHQodGhpcyksXCJ1aS1kaWFsb2ctZHJhZ2dpbmdcIiksaS5fYmxvY2tGcmFtZXMoKSxpLl90cmlnZ2VyKFwiZHJhZ1N0YXJ0XCIscyxlKG4pKX0sZHJhZzpmdW5jdGlvbih0LHMpe2kuX3RyaWdnZXIoXCJkcmFnXCIsdCxlKHMpKX0sc3RvcDpmdW5jdGlvbihuLG8pe3ZhciBhPW8ub2Zmc2V0LmxlZnQtaS5kb2N1bWVudC5zY3JvbGxMZWZ0KCkscj1vLm9mZnNldC50b3AtaS5kb2N1bWVudC5zY3JvbGxUb3AoKTtzLnBvc2l0aW9uPXtteTpcImxlZnQgdG9wXCIsYXQ6XCJsZWZ0XCIrKGE+PTA/XCIrXCI6XCJcIikrYStcIiBcIitcInRvcFwiKyhyPj0wP1wiK1wiOlwiXCIpK3Isb2Y6aS53aW5kb3d9LGkuX3JlbW92ZUNsYXNzKHQodGhpcyksXCJ1aS1kaWFsb2ctZHJhZ2dpbmdcIiksaS5fdW5ibG9ja0ZyYW1lcygpLGkuX3RyaWdnZXIoXCJkcmFnU3RvcFwiLG4sZShvKSl9fSl9LF9tYWtlUmVzaXphYmxlOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtyZXR1cm57b3JpZ2luYWxQb3NpdGlvbjp0Lm9yaWdpbmFsUG9zaXRpb24sb3JpZ2luYWxTaXplOnQub3JpZ2luYWxTaXplLHBvc2l0aW9uOnQucG9zaXRpb24sc2l6ZTp0LnNpemV9fXZhciBpPXRoaXMscz10aGlzLm9wdGlvbnMsbj1zLnJlc2l6YWJsZSxvPXRoaXMudWlEaWFsb2cuY3NzKFwicG9zaXRpb25cIiksYT1cInN0cmluZ1wiPT10eXBlb2Ygbj9uOlwibixlLHMsdyxzZSxzdyxuZSxud1wiO3RoaXMudWlEaWFsb2cucmVzaXphYmxlKHtjYW5jZWw6XCIudWktZGlhbG9nLWNvbnRlbnRcIixjb250YWlubWVudDpcImRvY3VtZW50XCIsYWxzb1Jlc2l6ZTp0aGlzLmVsZW1lbnQsbWF4V2lkdGg6cy5tYXhXaWR0aCxtYXhIZWlnaHQ6cy5tYXhIZWlnaHQsbWluV2lkdGg6cy5taW5XaWR0aCxtaW5IZWlnaHQ6dGhpcy5fbWluSGVpZ2h0KCksaGFuZGxlczphLHN0YXJ0OmZ1bmN0aW9uKHMsbil7aS5fYWRkQ2xhc3ModCh0aGlzKSxcInVpLWRpYWxvZy1yZXNpemluZ1wiKSxpLl9ibG9ja0ZyYW1lcygpLGkuX3RyaWdnZXIoXCJyZXNpemVTdGFydFwiLHMsZShuKSl9LHJlc2l6ZTpmdW5jdGlvbih0LHMpe2kuX3RyaWdnZXIoXCJyZXNpemVcIix0LGUocykpfSxzdG9wOmZ1bmN0aW9uKG4sbyl7dmFyIGE9aS51aURpYWxvZy5vZmZzZXQoKSxyPWEubGVmdC1pLmRvY3VtZW50LnNjcm9sbExlZnQoKSxoPWEudG9wLWkuZG9jdW1lbnQuc2Nyb2xsVG9wKCk7cy5oZWlnaHQ9aS51aURpYWxvZy5oZWlnaHQoKSxzLndpZHRoPWkudWlEaWFsb2cud2lkdGgoKSxzLnBvc2l0aW9uPXtteTpcImxlZnQgdG9wXCIsYXQ6XCJsZWZ0XCIrKHI+PTA/XCIrXCI6XCJcIikrcitcIiBcIitcInRvcFwiKyhoPj0wP1wiK1wiOlwiXCIpK2gsb2Y6aS53aW5kb3d9LGkuX3JlbW92ZUNsYXNzKHQodGhpcyksXCJ1aS1kaWFsb2ctcmVzaXppbmdcIiksaS5fdW5ibG9ja0ZyYW1lcygpLGkuX3RyaWdnZXIoXCJyZXNpemVTdG9wXCIsbixlKG8pKX19KS5jc3MoXCJwb3NpdGlvblwiLG8pfSxfdHJhY2tGb2N1czpmdW5jdGlvbigpe3RoaXMuX29uKHRoaXMud2lkZ2V0KCkse2ZvY3VzaW46ZnVuY3Rpb24oZSl7dGhpcy5fbWFrZUZvY3VzVGFyZ2V0KCksdGhpcy5fZm9jdXNlZEVsZW1lbnQ9dChlLnRhcmdldCl9fSl9LF9tYWtlRm9jdXNUYXJnZXQ6ZnVuY3Rpb24oKXt0aGlzLl91bnRyYWNrSW5zdGFuY2UoKSx0aGlzLl90cmFja2luZ0luc3RhbmNlcygpLnVuc2hpZnQodGhpcyl9LF91bnRyYWNrSW5zdGFuY2U6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl90cmFja2luZ0luc3RhbmNlcygpLGk9dC5pbkFycmF5KHRoaXMsZSk7LTEhPT1pJiZlLnNwbGljZShpLDEpfSxfdHJhY2tpbmdJbnN0YW5jZXM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmRvY3VtZW50LmRhdGEoXCJ1aS1kaWFsb2ctaW5zdGFuY2VzXCIpO3JldHVybiB0fHwodD1bXSx0aGlzLmRvY3VtZW50LmRhdGEoXCJ1aS1kaWFsb2ctaW5zdGFuY2VzXCIsdCkpLHR9LF9taW5IZWlnaHQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnM7cmV0dXJuXCJhdXRvXCI9PT10LmhlaWdodD90Lm1pbkhlaWdodDpNYXRoLm1pbih0Lm1pbkhlaWdodCx0LmhlaWdodCl9LF9wb3NpdGlvbjpmdW5jdGlvbigpe3ZhciB0PXRoaXMudWlEaWFsb2cuaXMoXCI6dmlzaWJsZVwiKTt0fHx0aGlzLnVpRGlhbG9nLnNob3coKSx0aGlzLnVpRGlhbG9nLnBvc2l0aW9uKHRoaXMub3B0aW9ucy5wb3NpdGlvbiksdHx8dGhpcy51aURpYWxvZy5oaWRlKCl9LF9zZXRPcHRpb25zOmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMscz0hMSxuPXt9O3QuZWFjaChlLGZ1bmN0aW9uKHQsZSl7aS5fc2V0T3B0aW9uKHQsZSksdCBpbiBpLnNpemVSZWxhdGVkT3B0aW9ucyYmKHM9ITApLHQgaW4gaS5yZXNpemFibGVSZWxhdGVkT3B0aW9ucyYmKG5bdF09ZSl9KSxzJiYodGhpcy5fc2l6ZSgpLHRoaXMuX3Bvc2l0aW9uKCkpLHRoaXMudWlEaWFsb2cuaXMoXCI6ZGF0YSh1aS1yZXNpemFibGUpXCIpJiZ0aGlzLnVpRGlhbG9nLnJlc2l6YWJsZShcIm9wdGlvblwiLG4pfSxfc2V0T3B0aW9uOmZ1bmN0aW9uKGUsaSl7dmFyIHMsbixvPXRoaXMudWlEaWFsb2c7XCJkaXNhYmxlZFwiIT09ZSYmKHRoaXMuX3N1cGVyKGUsaSksXCJhcHBlbmRUb1wiPT09ZSYmdGhpcy51aURpYWxvZy5hcHBlbmRUbyh0aGlzLl9hcHBlbmRUbygpKSxcImJ1dHRvbnNcIj09PWUmJnRoaXMuX2NyZWF0ZUJ1dHRvbnMoKSxcImNsb3NlVGV4dFwiPT09ZSYmdGhpcy51aURpYWxvZ1RpdGxlYmFyQ2xvc2UuYnV0dG9uKHtsYWJlbDp0KFwiPGE+XCIpLnRleHQoXCJcIit0aGlzLm9wdGlvbnMuY2xvc2VUZXh0KS5odG1sKCl9KSxcImRyYWdnYWJsZVwiPT09ZSYmKHM9by5pcyhcIjpkYXRhKHVpLWRyYWdnYWJsZSlcIikscyYmIWkmJm8uZHJhZ2dhYmxlKFwiZGVzdHJveVwiKSwhcyYmaSYmdGhpcy5fbWFrZURyYWdnYWJsZSgpKSxcInBvc2l0aW9uXCI9PT1lJiZ0aGlzLl9wb3NpdGlvbigpLFwicmVzaXphYmxlXCI9PT1lJiYobj1vLmlzKFwiOmRhdGEodWktcmVzaXphYmxlKVwiKSxuJiYhaSYmby5yZXNpemFibGUoXCJkZXN0cm95XCIpLG4mJlwic3RyaW5nXCI9PXR5cGVvZiBpJiZvLnJlc2l6YWJsZShcIm9wdGlvblwiLFwiaGFuZGxlc1wiLGkpLG58fGk9PT0hMXx8dGhpcy5fbWFrZVJlc2l6YWJsZSgpKSxcInRpdGxlXCI9PT1lJiZ0aGlzLl90aXRsZSh0aGlzLnVpRGlhbG9nVGl0bGViYXIuZmluZChcIi51aS1kaWFsb2ctdGl0bGVcIikpKX0sX3NpemU6ZnVuY3Rpb24oKXt2YXIgdCxlLGkscz10aGlzLm9wdGlvbnM7dGhpcy5lbGVtZW50LnNob3coKS5jc3Moe3dpZHRoOlwiYXV0b1wiLG1pbkhlaWdodDowLG1heEhlaWdodDpcIm5vbmVcIixoZWlnaHQ6MH0pLHMubWluV2lkdGg+cy53aWR0aCYmKHMud2lkdGg9cy5taW5XaWR0aCksdD10aGlzLnVpRGlhbG9nLmNzcyh7aGVpZ2h0OlwiYXV0b1wiLHdpZHRoOnMud2lkdGh9KS5vdXRlckhlaWdodCgpLGU9TWF0aC5tYXgoMCxzLm1pbkhlaWdodC10KSxpPVwibnVtYmVyXCI9PXR5cGVvZiBzLm1heEhlaWdodD9NYXRoLm1heCgwLHMubWF4SGVpZ2h0LXQpOlwibm9uZVwiLFwiYXV0b1wiPT09cy5oZWlnaHQ/dGhpcy5lbGVtZW50LmNzcyh7bWluSGVpZ2h0OmUsbWF4SGVpZ2h0OmksaGVpZ2h0OlwiYXV0b1wifSk6dGhpcy5lbGVtZW50LmhlaWdodChNYXRoLm1heCgwLHMuaGVpZ2h0LXQpKSx0aGlzLnVpRGlhbG9nLmlzKFwiOmRhdGEodWktcmVzaXphYmxlKVwiKSYmdGhpcy51aURpYWxvZy5yZXNpemFibGUoXCJvcHRpb25cIixcIm1pbkhlaWdodFwiLHRoaXMuX21pbkhlaWdodCgpKX0sX2Jsb2NrRnJhbWVzOmZ1bmN0aW9uKCl7dGhpcy5pZnJhbWVCbG9ja3M9dGhpcy5kb2N1bWVudC5maW5kKFwiaWZyYW1lXCIpLm1hcChmdW5jdGlvbigpe3ZhciBlPXQodGhpcyk7cmV0dXJuIHQoXCI8ZGl2PlwiKS5jc3Moe3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix3aWR0aDplLm91dGVyV2lkdGgoKSxoZWlnaHQ6ZS5vdXRlckhlaWdodCgpfSkuYXBwZW5kVG8oZS5wYXJlbnQoKSkub2Zmc2V0KGUub2Zmc2V0KCkpWzBdfSl9LF91bmJsb2NrRnJhbWVzOmZ1bmN0aW9uKCl7dGhpcy5pZnJhbWVCbG9ja3MmJih0aGlzLmlmcmFtZUJsb2Nrcy5yZW1vdmUoKSxkZWxldGUgdGhpcy5pZnJhbWVCbG9ja3MpfSxfYWxsb3dJbnRlcmFjdGlvbjpmdW5jdGlvbihlKXtyZXR1cm4gdChlLnRhcmdldCkuY2xvc2VzdChcIi51aS1kaWFsb2dcIikubGVuZ3RoPyEwOiEhdChlLnRhcmdldCkuY2xvc2VzdChcIi51aS1kYXRlcGlja2VyXCIpLmxlbmd0aH0sX2NyZWF0ZU92ZXJsYXk6ZnVuY3Rpb24oKXtpZih0aGlzLm9wdGlvbnMubW9kYWwpe3ZhciBlPSEwO3RoaXMuX2RlbGF5KGZ1bmN0aW9uKCl7ZT0hMX0pLHRoaXMuZG9jdW1lbnQuZGF0YShcInVpLWRpYWxvZy1vdmVybGF5c1wiKXx8dGhpcy5fb24odGhpcy5kb2N1bWVudCx7Zm9jdXNpbjpmdW5jdGlvbih0KXtlfHx0aGlzLl9hbGxvd0ludGVyYWN0aW9uKHQpfHwodC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuX3RyYWNraW5nSW5zdGFuY2VzKClbMF0uX2ZvY3VzVGFiYmFibGUoKSl9fSksdGhpcy5vdmVybGF5PXQoXCI8ZGl2PlwiKS5hcHBlbmRUbyh0aGlzLl9hcHBlbmRUbygpKSx0aGlzLl9hZGRDbGFzcyh0aGlzLm92ZXJsYXksbnVsbCxcInVpLXdpZGdldC1vdmVybGF5IHVpLWZyb250XCIpLHRoaXMuX29uKHRoaXMub3ZlcmxheSx7bW91c2Vkb3duOlwiX2tlZXBGb2N1c1wifSksdGhpcy5kb2N1bWVudC5kYXRhKFwidWktZGlhbG9nLW92ZXJsYXlzXCIsKHRoaXMuZG9jdW1lbnQuZGF0YShcInVpLWRpYWxvZy1vdmVybGF5c1wiKXx8MCkrMSl9fSxfZGVzdHJveU92ZXJsYXk6ZnVuY3Rpb24oKXtpZih0aGlzLm9wdGlvbnMubW9kYWwmJnRoaXMub3ZlcmxheSl7dmFyIHQ9dGhpcy5kb2N1bWVudC5kYXRhKFwidWktZGlhbG9nLW92ZXJsYXlzXCIpLTE7dD90aGlzLmRvY3VtZW50LmRhdGEoXCJ1aS1kaWFsb2ctb3ZlcmxheXNcIix0KToodGhpcy5fb2ZmKHRoaXMuZG9jdW1lbnQsXCJmb2N1c2luXCIpLHRoaXMuZG9jdW1lbnQucmVtb3ZlRGF0YShcInVpLWRpYWxvZy1vdmVybGF5c1wiKSksdGhpcy5vdmVybGF5LnJlbW92ZSgpLHRoaXMub3ZlcmxheT1udWxsfX19KSx0LnVpQmFja0NvbXBhdCE9PSExJiZ0LndpZGdldChcInVpLmRpYWxvZ1wiLHQudWkuZGlhbG9nLHtvcHRpb25zOntkaWFsb2dDbGFzczpcIlwifSxfY3JlYXRlV3JhcHBlcjpmdW5jdGlvbigpe3RoaXMuX3N1cGVyKCksdGhpcy51aURpYWxvZy5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZGlhbG9nQ2xhc3MpfSxfc2V0T3B0aW9uOmZ1bmN0aW9uKHQsZSl7XCJkaWFsb2dDbGFzc1wiPT09dCYmdGhpcy51aURpYWxvZy5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZGlhbG9nQ2xhc3MpLmFkZENsYXNzKGUpLHRoaXMuX3N1cGVyQXBwbHkoYXJndW1lbnRzKX19KSx0LnVpLmRpYWxvZyx0LndpZGdldChcInVpLnByb2dyZXNzYmFyXCIse3ZlcnNpb246XCIxLjEyLjFcIixvcHRpb25zOntjbGFzc2VzOntcInVpLXByb2dyZXNzYmFyXCI6XCJ1aS1jb3JuZXItYWxsXCIsXCJ1aS1wcm9ncmVzc2Jhci12YWx1ZVwiOlwidWktY29ybmVyLWxlZnRcIixcInVpLXByb2dyZXNzYmFyLWNvbXBsZXRlXCI6XCJ1aS1jb3JuZXItcmlnaHRcIn0sbWF4OjEwMCx2YWx1ZTowLGNoYW5nZTpudWxsLGNvbXBsZXRlOm51bGx9LG1pbjowLF9jcmVhdGU6ZnVuY3Rpb24oKXt0aGlzLm9sZFZhbHVlPXRoaXMub3B0aW9ucy52YWx1ZT10aGlzLl9jb25zdHJhaW5lZFZhbHVlKCksdGhpcy5lbGVtZW50LmF0dHIoe3JvbGU6XCJwcm9ncmVzc2JhclwiLFwiYXJpYS12YWx1ZW1pblwiOnRoaXMubWlufSksdGhpcy5fYWRkQ2xhc3MoXCJ1aS1wcm9ncmVzc2JhclwiLFwidWktd2lkZ2V0IHVpLXdpZGdldC1jb250ZW50XCIpLHRoaXMudmFsdWVEaXY9dChcIjxkaXY+XCIpLmFwcGVuZFRvKHRoaXMuZWxlbWVudCksdGhpcy5fYWRkQ2xhc3ModGhpcy52YWx1ZURpdixcInVpLXByb2dyZXNzYmFyLXZhbHVlXCIsXCJ1aS13aWRnZXQtaGVhZGVyXCIpLHRoaXMuX3JlZnJlc2hWYWx1ZSgpfSxfZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5yZW1vdmVBdHRyKFwicm9sZSBhcmlhLXZhbHVlbWluIGFyaWEtdmFsdWVtYXggYXJpYS12YWx1ZW5vd1wiKSx0aGlzLnZhbHVlRGl2LnJlbW92ZSgpfSx2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dD90aGlzLm9wdGlvbnMudmFsdWU6KHRoaXMub3B0aW9ucy52YWx1ZT10aGlzLl9jb25zdHJhaW5lZFZhbHVlKHQpLHRoaXMuX3JlZnJlc2hWYWx1ZSgpLHZvaWQgMCl9LF9jb25zdHJhaW5lZFZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD10aGlzLm9wdGlvbnMudmFsdWUpLHRoaXMuaW5kZXRlcm1pbmF0ZT10PT09ITEsXCJudW1iZXJcIiE9dHlwZW9mIHQmJih0PTApLHRoaXMuaW5kZXRlcm1pbmF0ZT8hMTpNYXRoLm1pbih0aGlzLm9wdGlvbnMubWF4LE1hdGgubWF4KHRoaXMubWluLHQpKX0sX3NldE9wdGlvbnM6ZnVuY3Rpb24odCl7dmFyIGU9dC52YWx1ZTtkZWxldGUgdC52YWx1ZSx0aGlzLl9zdXBlcih0KSx0aGlzLm9wdGlvbnMudmFsdWU9dGhpcy5fY29uc3RyYWluZWRWYWx1ZShlKSx0aGlzLl9yZWZyZXNoVmFsdWUoKX0sX3NldE9wdGlvbjpmdW5jdGlvbih0LGUpe1wibWF4XCI9PT10JiYoZT1NYXRoLm1heCh0aGlzLm1pbixlKSksdGhpcy5fc3VwZXIodCxlKX0sX3NldE9wdGlvbkRpc2FibGVkOmZ1bmN0aW9uKHQpe3RoaXMuX3N1cGVyKHQpLHRoaXMuZWxlbWVudC5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLHQpLHRoaXMuX3RvZ2dsZUNsYXNzKG51bGwsXCJ1aS1zdGF0ZS1kaXNhYmxlZFwiLCEhdCl9LF9wZXJjZW50YWdlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZT8xMDA6MTAwKih0aGlzLm9wdGlvbnMudmFsdWUtdGhpcy5taW4pLyh0aGlzLm9wdGlvbnMubWF4LXRoaXMubWluKX0sX3JlZnJlc2hWYWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3B0aW9ucy52YWx1ZSxpPXRoaXMuX3BlcmNlbnRhZ2UoKTt0aGlzLnZhbHVlRGl2LnRvZ2dsZSh0aGlzLmluZGV0ZXJtaW5hdGV8fGU+dGhpcy5taW4pLndpZHRoKGkudG9GaXhlZCgwKStcIiVcIiksdGhpcy5fdG9nZ2xlQ2xhc3ModGhpcy52YWx1ZURpdixcInVpLXByb2dyZXNzYmFyLWNvbXBsZXRlXCIsbnVsbCxlPT09dGhpcy5vcHRpb25zLm1heCkuX3RvZ2dsZUNsYXNzKFwidWktcHJvZ3Jlc3NiYXItaW5kZXRlcm1pbmF0ZVwiLG51bGwsdGhpcy5pbmRldGVybWluYXRlKSx0aGlzLmluZGV0ZXJtaW5hdGU/KHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyKFwiYXJpYS12YWx1ZW5vd1wiKSx0aGlzLm92ZXJsYXlEaXZ8fCh0aGlzLm92ZXJsYXlEaXY9dChcIjxkaXY+XCIpLmFwcGVuZFRvKHRoaXMudmFsdWVEaXYpLHRoaXMuX2FkZENsYXNzKHRoaXMub3ZlcmxheURpdixcInVpLXByb2dyZXNzYmFyLW92ZXJsYXlcIikpKToodGhpcy5lbGVtZW50LmF0dHIoe1wiYXJpYS12YWx1ZW1heFwiOnRoaXMub3B0aW9ucy5tYXgsXCJhcmlhLXZhbHVlbm93XCI6ZX0pLHRoaXMub3ZlcmxheURpdiYmKHRoaXMub3ZlcmxheURpdi5yZW1vdmUoKSx0aGlzLm92ZXJsYXlEaXY9bnVsbCkpLHRoaXMub2xkVmFsdWUhPT1lJiYodGhpcy5vbGRWYWx1ZT1lLHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VcIikpLGU9PT10aGlzLm9wdGlvbnMubWF4JiZ0aGlzLl90cmlnZ2VyKFwiY29tcGxldGVcIil9fSksdC53aWRnZXQoXCJ1aS5zZWxlY3RtZW51XCIsW3QudWkuZm9ybVJlc2V0TWl4aW4se3ZlcnNpb246XCIxLjEyLjFcIixkZWZhdWx0RWxlbWVudDpcIjxzZWxlY3Q+XCIsb3B0aW9uczp7YXBwZW5kVG86bnVsbCxjbGFzc2VzOntcInVpLXNlbGVjdG1lbnUtYnV0dG9uLW9wZW5cIjpcInVpLWNvcm5lci10b3BcIixcInVpLXNlbGVjdG1lbnUtYnV0dG9uLWNsb3NlZFwiOlwidWktY29ybmVyLWFsbFwifSxkaXNhYmxlZDpudWxsLGljb25zOntidXR0b246XCJ1aS1pY29uLXRyaWFuZ2xlLTEtc1wifSxwb3NpdGlvbjp7bXk6XCJsZWZ0IHRvcFwiLGF0OlwibGVmdCBib3R0b21cIixjb2xsaXNpb246XCJub25lXCJ9LHdpZHRoOiExLGNoYW5nZTpudWxsLGNsb3NlOm51bGwsZm9jdXM6bnVsbCxvcGVuOm51bGwsc2VsZWN0Om51bGx9LF9jcmVhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmVsZW1lbnQudW5pcXVlSWQoKS5hdHRyKFwiaWRcIik7dGhpcy5pZHM9e2VsZW1lbnQ6ZSxidXR0b246ZStcIi1idXR0b25cIixtZW51OmUrXCItbWVudVwifSx0aGlzLl9kcmF3QnV0dG9uKCksdGhpcy5fZHJhd01lbnUoKSx0aGlzLl9iaW5kRm9ybVJlc2V0SGFuZGxlcigpLHRoaXMuX3JlbmRlcmVkPSExLHRoaXMubWVudUl0ZW1zPXQoKX0sX2RyYXdCdXR0b246ZnVuY3Rpb24oKXt2YXIgZSxpPXRoaXMscz10aGlzLl9wYXJzZU9wdGlvbih0aGlzLmVsZW1lbnQuZmluZChcIm9wdGlvbjpzZWxlY3RlZFwiKSx0aGlzLmVsZW1lbnRbMF0uc2VsZWN0ZWRJbmRleCk7dGhpcy5sYWJlbHM9dGhpcy5lbGVtZW50LmxhYmVscygpLmF0dHIoXCJmb3JcIix0aGlzLmlkcy5idXR0b24pLHRoaXMuX29uKHRoaXMubGFiZWxzLHtjbGljazpmdW5jdGlvbih0KXt0aGlzLmJ1dHRvbi5mb2N1cygpLHQucHJldmVudERlZmF1bHQoKX19KSx0aGlzLmVsZW1lbnQuaGlkZSgpLHRoaXMuYnV0dG9uPXQoXCI8c3Bhbj5cIix7dGFiaW5kZXg6dGhpcy5vcHRpb25zLmRpc2FibGVkPy0xOjAsaWQ6dGhpcy5pZHMuYnV0dG9uLHJvbGU6XCJjb21ib2JveFwiLFwiYXJpYS1leHBhbmRlZFwiOlwiZmFsc2VcIixcImFyaWEtYXV0b2NvbXBsZXRlXCI6XCJsaXN0XCIsXCJhcmlhLW93bnNcIjp0aGlzLmlkcy5tZW51LFwiYXJpYS1oYXNwb3B1cFwiOlwidHJ1ZVwiLHRpdGxlOnRoaXMuZWxlbWVudC5hdHRyKFwidGl0bGVcIil9KS5pbnNlcnRBZnRlcih0aGlzLmVsZW1lbnQpLHRoaXMuX2FkZENsYXNzKHRoaXMuYnV0dG9uLFwidWktc2VsZWN0bWVudS1idXR0b24gdWktc2VsZWN0bWVudS1idXR0b24tY2xvc2VkXCIsXCJ1aS1idXR0b24gdWktd2lkZ2V0XCIpLGU9dChcIjxzcGFuPlwiKS5hcHBlbmRUbyh0aGlzLmJ1dHRvbiksdGhpcy5fYWRkQ2xhc3MoZSxcInVpLXNlbGVjdG1lbnUtaWNvblwiLFwidWktaWNvbiBcIit0aGlzLm9wdGlvbnMuaWNvbnMuYnV0dG9uKSx0aGlzLmJ1dHRvbkl0ZW09dGhpcy5fcmVuZGVyQnV0dG9uSXRlbShzKS5hcHBlbmRUbyh0aGlzLmJ1dHRvbiksdGhpcy5vcHRpb25zLndpZHRoIT09ITEmJnRoaXMuX3Jlc2l6ZUJ1dHRvbigpLHRoaXMuX29uKHRoaXMuYnV0dG9uLHRoaXMuX2J1dHRvbkV2ZW50cyksdGhpcy5idXR0b24ub25lKFwiZm9jdXNpblwiLGZ1bmN0aW9uKCl7aS5fcmVuZGVyZWR8fGkuX3JlZnJlc2hNZW51KCl9KX0sX2RyYXdNZW51OmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLm1lbnU9dChcIjx1bD5cIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLFwiYXJpYS1sYWJlbGxlZGJ5XCI6dGhpcy5pZHMuYnV0dG9uLGlkOnRoaXMuaWRzLm1lbnV9KSx0aGlzLm1lbnVXcmFwPXQoXCI8ZGl2PlwiKS5hcHBlbmQodGhpcy5tZW51KSx0aGlzLl9hZGRDbGFzcyh0aGlzLm1lbnVXcmFwLFwidWktc2VsZWN0bWVudS1tZW51XCIsXCJ1aS1mcm9udFwiKSx0aGlzLm1lbnVXcmFwLmFwcGVuZFRvKHRoaXMuX2FwcGVuZFRvKCkpLHRoaXMubWVudUluc3RhbmNlPXRoaXMubWVudS5tZW51KHtjbGFzc2VzOntcInVpLW1lbnVcIjpcInVpLWNvcm5lci1ib3R0b21cIn0scm9sZTpcImxpc3Rib3hcIixzZWxlY3Q6ZnVuY3Rpb24odCxpKXt0LnByZXZlbnREZWZhdWx0KCksZS5fc2V0U2VsZWN0aW9uKCksZS5fc2VsZWN0KGkuaXRlbS5kYXRhKFwidWktc2VsZWN0bWVudS1pdGVtXCIpLHQpfSxmb2N1czpmdW5jdGlvbih0LGkpe3ZhciBzPWkuaXRlbS5kYXRhKFwidWktc2VsZWN0bWVudS1pdGVtXCIpO251bGwhPWUuZm9jdXNJbmRleCYmcy5pbmRleCE9PWUuZm9jdXNJbmRleCYmKGUuX3RyaWdnZXIoXCJmb2N1c1wiLHQse2l0ZW06c30pLGUuaXNPcGVufHxlLl9zZWxlY3Qocyx0KSksZS5mb2N1c0luZGV4PXMuaW5kZXgsZS5idXR0b24uYXR0cihcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiLGUubWVudUl0ZW1zLmVxKHMuaW5kZXgpLmF0dHIoXCJpZFwiKSl9fSkubWVudShcImluc3RhbmNlXCIpLHRoaXMubWVudUluc3RhbmNlLl9vZmYodGhpcy5tZW51LFwibW91c2VsZWF2ZVwiKSx0aGlzLm1lbnVJbnN0YW5jZS5fY2xvc2VPbkRvY3VtZW50Q2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4hMX0sdGhpcy5tZW51SW5zdGFuY2UuX2lzRGl2aWRlcj1mdW5jdGlvbigpe3JldHVybiExfX0scmVmcmVzaDpmdW5jdGlvbigpe3RoaXMuX3JlZnJlc2hNZW51KCksdGhpcy5idXR0b25JdGVtLnJlcGxhY2VXaXRoKHRoaXMuYnV0dG9uSXRlbT10aGlzLl9yZW5kZXJCdXR0b25JdGVtKHRoaXMuX2dldFNlbGVjdGVkSXRlbSgpLmRhdGEoXCJ1aS1zZWxlY3RtZW51LWl0ZW1cIil8fHt9KSksbnVsbD09PXRoaXMub3B0aW9ucy53aWR0aCYmdGhpcy5fcmVzaXplQnV0dG9uKCl9LF9yZWZyZXNoTWVudTpmdW5jdGlvbigpe3ZhciB0LGU9dGhpcy5lbGVtZW50LmZpbmQoXCJvcHRpb25cIik7dGhpcy5tZW51LmVtcHR5KCksdGhpcy5fcGFyc2VPcHRpb25zKGUpLHRoaXMuX3JlbmRlck1lbnUodGhpcy5tZW51LHRoaXMuaXRlbXMpLHRoaXMubWVudUluc3RhbmNlLnJlZnJlc2goKSx0aGlzLm1lbnVJdGVtcz10aGlzLm1lbnUuZmluZChcImxpXCIpLm5vdChcIi51aS1zZWxlY3RtZW51LW9wdGdyb3VwXCIpLmZpbmQoXCIudWktbWVudS1pdGVtLXdyYXBwZXJcIiksdGhpcy5fcmVuZGVyZWQ9ITAsZS5sZW5ndGgmJih0PXRoaXMuX2dldFNlbGVjdGVkSXRlbSgpLHRoaXMubWVudUluc3RhbmNlLmZvY3VzKG51bGwsdCksdGhpcy5fc2V0QXJpYSh0LmRhdGEoXCJ1aS1zZWxlY3RtZW51LWl0ZW1cIikpLHRoaXMuX3NldE9wdGlvbihcImRpc2FibGVkXCIsdGhpcy5lbGVtZW50LnByb3AoXCJkaXNhYmxlZFwiKSkpfSxvcGVuOmZ1bmN0aW9uKHQpe3RoaXMub3B0aW9ucy5kaXNhYmxlZHx8KHRoaXMuX3JlbmRlcmVkPyh0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLm1lbnUuZmluZChcIi51aS1zdGF0ZS1hY3RpdmVcIiksbnVsbCxcInVpLXN0YXRlLWFjdGl2ZVwiKSx0aGlzLm1lbnVJbnN0YW5jZS5mb2N1cyhudWxsLHRoaXMuX2dldFNlbGVjdGVkSXRlbSgpKSk6dGhpcy5fcmVmcmVzaE1lbnUoKSx0aGlzLm1lbnVJdGVtcy5sZW5ndGgmJih0aGlzLmlzT3Blbj0hMCx0aGlzLl90b2dnbGVBdHRyKCksdGhpcy5fcmVzaXplTWVudSgpLHRoaXMuX3Bvc2l0aW9uKCksdGhpcy5fb24odGhpcy5kb2N1bWVudCx0aGlzLl9kb2N1bWVudENsaWNrKSx0aGlzLl90cmlnZ2VyKFwib3BlblwiLHQpKSl9LF9wb3NpdGlvbjpmdW5jdGlvbigpe3RoaXMubWVudVdyYXAucG9zaXRpb24odC5leHRlbmQoe29mOnRoaXMuYnV0dG9ufSx0aGlzLm9wdGlvbnMucG9zaXRpb24pKX0sY2xvc2U6ZnVuY3Rpb24odCl7dGhpcy5pc09wZW4mJih0aGlzLmlzT3Blbj0hMSx0aGlzLl90b2dnbGVBdHRyKCksdGhpcy5yYW5nZT1udWxsLHRoaXMuX29mZih0aGlzLmRvY3VtZW50KSx0aGlzLl90cmlnZ2VyKFwiY2xvc2VcIix0KSl9LHdpZGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmJ1dHRvbn0sbWVudVdpZGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1lbnV9LF9yZW5kZXJCdXR0b25JdGVtOmZ1bmN0aW9uKGUpe3ZhciBpPXQoXCI8c3Bhbj5cIik7cmV0dXJuIHRoaXMuX3NldFRleHQoaSxlLmxhYmVsKSx0aGlzLl9hZGRDbGFzcyhpLFwidWktc2VsZWN0bWVudS10ZXh0XCIpLGl9LF9yZW5kZXJNZW51OmZ1bmN0aW9uKGUsaSl7dmFyIHM9dGhpcyxuPVwiXCI7dC5lYWNoKGksZnVuY3Rpb24oaSxvKXt2YXIgYTtvLm9wdGdyb3VwIT09biYmKGE9dChcIjxsaT5cIix7dGV4dDpvLm9wdGdyb3VwfSkscy5fYWRkQ2xhc3MoYSxcInVpLXNlbGVjdG1lbnUtb3B0Z3JvdXBcIixcInVpLW1lbnUtZGl2aWRlclwiKyhvLmVsZW1lbnQucGFyZW50KFwib3B0Z3JvdXBcIikucHJvcChcImRpc2FibGVkXCIpP1wiIHVpLXN0YXRlLWRpc2FibGVkXCI6XCJcIikpLGEuYXBwZW5kVG8oZSksbj1vLm9wdGdyb3VwKSxzLl9yZW5kZXJJdGVtRGF0YShlLG8pfSl9LF9yZW5kZXJJdGVtRGF0YTpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9yZW5kZXJJdGVtKHQsZSkuZGF0YShcInVpLXNlbGVjdG1lbnUtaXRlbVwiLGUpfSxfcmVuZGVySXRlbTpmdW5jdGlvbihlLGkpe3ZhciBzPXQoXCI8bGk+XCIpLG49dChcIjxkaXY+XCIse3RpdGxlOmkuZWxlbWVudC5hdHRyKFwidGl0bGVcIil9KTtyZXR1cm4gaS5kaXNhYmxlZCYmdGhpcy5fYWRkQ2xhc3MocyxudWxsLFwidWktc3RhdGUtZGlzYWJsZWRcIiksdGhpcy5fc2V0VGV4dChuLGkubGFiZWwpLHMuYXBwZW5kKG4pLmFwcGVuZFRvKGUpfSxfc2V0VGV4dDpmdW5jdGlvbih0LGUpe2U/dC50ZXh0KGUpOnQuaHRtbChcIiYjMTYwO1wiKX0sX21vdmU6ZnVuY3Rpb24odCxlKXt2YXIgaSxzLG49XCIudWktbWVudS1pdGVtXCI7dGhpcy5pc09wZW4/aT10aGlzLm1lbnVJdGVtcy5lcSh0aGlzLmZvY3VzSW5kZXgpLnBhcmVudChcImxpXCIpOihpPXRoaXMubWVudUl0ZW1zLmVxKHRoaXMuZWxlbWVudFswXS5zZWxlY3RlZEluZGV4KS5wYXJlbnQoXCJsaVwiKSxuKz1cIjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKVwiKSxzPVwiZmlyc3RcIj09PXR8fFwibGFzdFwiPT09dD9pW1wiZmlyc3RcIj09PXQ/XCJwcmV2QWxsXCI6XCJuZXh0QWxsXCJdKG4pLmVxKC0xKTppW3QrXCJBbGxcIl0obikuZXEoMCkscy5sZW5ndGgmJnRoaXMubWVudUluc3RhbmNlLmZvY3VzKGUscyl9LF9nZXRTZWxlY3RlZEl0ZW06ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tZW51SXRlbXMuZXEodGhpcy5lbGVtZW50WzBdLnNlbGVjdGVkSW5kZXgpLnBhcmVudChcImxpXCIpfSxfdG9nZ2xlOmZ1bmN0aW9uKHQpe3RoaXNbdGhpcy5pc09wZW4/XCJjbG9zZVwiOlwib3BlblwiXSh0KX0sX3NldFNlbGVjdGlvbjpmdW5jdGlvbigpe3ZhciB0O3RoaXMucmFuZ2UmJih3aW5kb3cuZ2V0U2VsZWN0aW9uPyh0PXdpbmRvdy5nZXRTZWxlY3Rpb24oKSx0LnJlbW92ZUFsbFJhbmdlcygpLHQuYWRkUmFuZ2UodGhpcy5yYW5nZSkpOnRoaXMucmFuZ2Uuc2VsZWN0KCksdGhpcy5idXR0b24uZm9jdXMoKSl9LF9kb2N1bWVudENsaWNrOnttb3VzZWRvd246ZnVuY3Rpb24oZSl7dGhpcy5pc09wZW4mJih0KGUudGFyZ2V0KS5jbG9zZXN0KFwiLnVpLXNlbGVjdG1lbnUtbWVudSwgI1wiK3QudWkuZXNjYXBlU2VsZWN0b3IodGhpcy5pZHMuYnV0dG9uKSkubGVuZ3RofHx0aGlzLmNsb3NlKGUpKX19LF9idXR0b25FdmVudHM6e21vdXNlZG93bjpmdW5jdGlvbigpe3ZhciB0O3dpbmRvdy5nZXRTZWxlY3Rpb24/KHQ9d2luZG93LmdldFNlbGVjdGlvbigpLHQucmFuZ2VDb3VudCYmKHRoaXMucmFuZ2U9dC5nZXRSYW5nZUF0KDApKSk6dGhpcy5yYW5nZT1kb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKX0sY2xpY2s6ZnVuY3Rpb24odCl7dGhpcy5fc2V0U2VsZWN0aW9uKCksdGhpcy5fdG9nZ2xlKHQpfSxrZXlkb3duOmZ1bmN0aW9uKGUpe3ZhciBpPSEwO3N3aXRjaChlLmtleUNvZGUpe2Nhc2UgdC51aS5rZXlDb2RlLlRBQjpjYXNlIHQudWkua2V5Q29kZS5FU0NBUEU6dGhpcy5jbG9zZShlKSxpPSExO2JyZWFrO2Nhc2UgdC51aS5rZXlDb2RlLkVOVEVSOnRoaXMuaXNPcGVuJiZ0aGlzLl9zZWxlY3RGb2N1c2VkSXRlbShlKTticmVhaztjYXNlIHQudWkua2V5Q29kZS5VUDplLmFsdEtleT90aGlzLl90b2dnbGUoZSk6dGhpcy5fbW92ZShcInByZXZcIixlKTticmVhaztjYXNlIHQudWkua2V5Q29kZS5ET1dOOmUuYWx0S2V5P3RoaXMuX3RvZ2dsZShlKTp0aGlzLl9tb3ZlKFwibmV4dFwiLGUpO2JyZWFrO2Nhc2UgdC51aS5rZXlDb2RlLlNQQUNFOnRoaXMuaXNPcGVuP3RoaXMuX3NlbGVjdEZvY3VzZWRJdGVtKGUpOnRoaXMuX3RvZ2dsZShlKTticmVhaztjYXNlIHQudWkua2V5Q29kZS5MRUZUOnRoaXMuX21vdmUoXCJwcmV2XCIsZSk7YnJlYWs7Y2FzZSB0LnVpLmtleUNvZGUuUklHSFQ6dGhpcy5fbW92ZShcIm5leHRcIixlKTticmVhaztjYXNlIHQudWkua2V5Q29kZS5IT01FOmNhc2UgdC51aS5rZXlDb2RlLlBBR0VfVVA6dGhpcy5fbW92ZShcImZpcnN0XCIsZSk7YnJlYWs7Y2FzZSB0LnVpLmtleUNvZGUuRU5EOmNhc2UgdC51aS5rZXlDb2RlLlBBR0VfRE9XTjp0aGlzLl9tb3ZlKFwibGFzdFwiLGUpO2JyZWFrO2RlZmF1bHQ6dGhpcy5tZW51LnRyaWdnZXIoZSksaT0hMX1pJiZlLnByZXZlbnREZWZhdWx0KCl9fSxfc2VsZWN0Rm9jdXNlZEl0ZW06ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5tZW51SXRlbXMuZXEodGhpcy5mb2N1c0luZGV4KS5wYXJlbnQoXCJsaVwiKTtlLmhhc0NsYXNzKFwidWktc3RhdGUtZGlzYWJsZWRcIil8fHRoaXMuX3NlbGVjdChlLmRhdGEoXCJ1aS1zZWxlY3RtZW51LWl0ZW1cIiksdCl9LF9zZWxlY3Q6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmVsZW1lbnRbMF0uc2VsZWN0ZWRJbmRleDt0aGlzLmVsZW1lbnRbMF0uc2VsZWN0ZWRJbmRleD10LmluZGV4LHRoaXMuYnV0dG9uSXRlbS5yZXBsYWNlV2l0aCh0aGlzLmJ1dHRvbkl0ZW09dGhpcy5fcmVuZGVyQnV0dG9uSXRlbSh0KSksdGhpcy5fc2V0QXJpYSh0KSx0aGlzLl90cmlnZ2VyKFwic2VsZWN0XCIsZSx7aXRlbTp0fSksdC5pbmRleCE9PWkmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VcIixlLHtpdGVtOnR9KSx0aGlzLmNsb3NlKGUpfSxfc2V0QXJpYTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLm1lbnVJdGVtcy5lcSh0LmluZGV4KS5hdHRyKFwiaWRcIik7dGhpcy5idXR0b24uYXR0cih7XCJhcmlhLWxhYmVsbGVkYnlcIjplLFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6ZX0pLHRoaXMubWVudS5hdHRyKFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIsZSl9LF9zZXRPcHRpb246ZnVuY3Rpb24odCxlKXtpZihcImljb25zXCI9PT10KXt2YXIgaT10aGlzLmJ1dHRvbi5maW5kKFwic3Bhbi51aS1pY29uXCIpO3RoaXMuX3JlbW92ZUNsYXNzKGksbnVsbCx0aGlzLm9wdGlvbnMuaWNvbnMuYnV0dG9uKS5fYWRkQ2xhc3MoaSxudWxsLGUuYnV0dG9uKX10aGlzLl9zdXBlcih0LGUpLFwiYXBwZW5kVG9cIj09PXQmJnRoaXMubWVudVdyYXAuYXBwZW5kVG8odGhpcy5fYXBwZW5kVG8oKSksXCJ3aWR0aFwiPT09dCYmdGhpcy5fcmVzaXplQnV0dG9uKCl9LF9zZXRPcHRpb25EaXNhYmxlZDpmdW5jdGlvbih0KXt0aGlzLl9zdXBlcih0KSx0aGlzLm1lbnVJbnN0YW5jZS5vcHRpb24oXCJkaXNhYmxlZFwiLHQpLHRoaXMuYnV0dG9uLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsdCksdGhpcy5fdG9nZ2xlQ2xhc3ModGhpcy5idXR0b24sbnVsbCxcInVpLXN0YXRlLWRpc2FibGVkXCIsdCksdGhpcy5lbGVtZW50LnByb3AoXCJkaXNhYmxlZFwiLHQpLHQ/KHRoaXMuYnV0dG9uLmF0dHIoXCJ0YWJpbmRleFwiLC0xKSx0aGlzLmNsb3NlKCkpOnRoaXMuYnV0dG9uLmF0dHIoXCJ0YWJpbmRleFwiLDApfSxfYXBwZW5kVG86ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9wdGlvbnMuYXBwZW5kVG87cmV0dXJuIGUmJihlPWUuanF1ZXJ5fHxlLm5vZGVUeXBlP3QoZSk6dGhpcy5kb2N1bWVudC5maW5kKGUpLmVxKDApKSxlJiZlWzBdfHwoZT10aGlzLmVsZW1lbnQuY2xvc2VzdChcIi51aS1mcm9udCwgZGlhbG9nXCIpKSxlLmxlbmd0aHx8KGU9dGhpcy5kb2N1bWVudFswXS5ib2R5KSxlfSxfdG9nZ2xlQXR0cjpmdW5jdGlvbigpe3RoaXMuYnV0dG9uLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsdGhpcy5pc09wZW4pLHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMuYnV0dG9uLFwidWktc2VsZWN0bWVudS1idXR0b24tXCIrKHRoaXMuaXNPcGVuP1wiY2xvc2VkXCI6XCJvcGVuXCIpKS5fYWRkQ2xhc3ModGhpcy5idXR0b24sXCJ1aS1zZWxlY3RtZW51LWJ1dHRvbi1cIisodGhpcy5pc09wZW4/XCJvcGVuXCI6XCJjbG9zZWRcIikpLl90b2dnbGVDbGFzcyh0aGlzLm1lbnVXcmFwLFwidWktc2VsZWN0bWVudS1vcGVuXCIsbnVsbCx0aGlzLmlzT3BlbiksdGhpcy5tZW51LmF0dHIoXCJhcmlhLWhpZGRlblwiLCF0aGlzLmlzT3Blbil9LF9yZXNpemVCdXR0b246ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMud2lkdGg7cmV0dXJuIHQ9PT0hMT8odGhpcy5idXR0b24uY3NzKFwid2lkdGhcIixcIlwiKSx2b2lkIDApOihudWxsPT09dCYmKHQ9dGhpcy5lbGVtZW50LnNob3coKS5vdXRlcldpZHRoKCksdGhpcy5lbGVtZW50LmhpZGUoKSksdGhpcy5idXR0b24ub3V0ZXJXaWR0aCh0KSx2b2lkIDApfSxfcmVzaXplTWVudTpmdW5jdGlvbigpe3RoaXMubWVudS5vdXRlcldpZHRoKE1hdGgubWF4KHRoaXMuYnV0dG9uLm91dGVyV2lkdGgoKSx0aGlzLm1lbnUud2lkdGgoXCJcIikub3V0ZXJXaWR0aCgpKzEpKX0sX2dldENyZWF0ZU9wdGlvbnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9zdXBlcigpO3JldHVybiB0LmRpc2FibGVkPXRoaXMuZWxlbWVudC5wcm9wKFwiZGlzYWJsZWRcIiksdH0sX3BhcnNlT3B0aW9uczpmdW5jdGlvbihlKXt2YXIgaT10aGlzLHM9W107ZS5lYWNoKGZ1bmN0aW9uKGUsbil7cy5wdXNoKGkuX3BhcnNlT3B0aW9uKHQobiksZSkpfSksdGhpcy5pdGVtcz1zfSxfcGFyc2VPcHRpb246ZnVuY3Rpb24odCxlKXt2YXIgaT10LnBhcmVudChcIm9wdGdyb3VwXCIpO3JldHVybntlbGVtZW50OnQsaW5kZXg6ZSx2YWx1ZTp0LnZhbCgpLGxhYmVsOnQudGV4dCgpLG9wdGdyb3VwOmkuYXR0cihcImxhYmVsXCIpfHxcIlwiLGRpc2FibGVkOmkucHJvcChcImRpc2FibGVkXCIpfHx0LnByb3AoXCJkaXNhYmxlZFwiKX19LF9kZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5fdW5iaW5kRm9ybVJlc2V0SGFuZGxlcigpLHRoaXMubWVudVdyYXAucmVtb3ZlKCksdGhpcy5idXR0b24ucmVtb3ZlKCksdGhpcy5lbGVtZW50LnNob3coKSx0aGlzLmVsZW1lbnQucmVtb3ZlVW5pcXVlSWQoKSx0aGlzLmxhYmVscy5hdHRyKFwiZm9yXCIsdGhpcy5pZHMuZWxlbWVudCl9fV0pLHQud2lkZ2V0KFwidWkuc2xpZGVyXCIsdC51aS5tb3VzZSx7dmVyc2lvbjpcIjEuMTIuMVwiLHdpZGdldEV2ZW50UHJlZml4Olwic2xpZGVcIixvcHRpb25zOnthbmltYXRlOiExLGNsYXNzZXM6e1widWktc2xpZGVyXCI6XCJ1aS1jb3JuZXItYWxsXCIsXCJ1aS1zbGlkZXItaGFuZGxlXCI6XCJ1aS1jb3JuZXItYWxsXCIsXCJ1aS1zbGlkZXItcmFuZ2VcIjpcInVpLWNvcm5lci1hbGwgdWktd2lkZ2V0LWhlYWRlclwifSxkaXN0YW5jZTowLG1heDoxMDAsbWluOjAsb3JpZW50YXRpb246XCJob3Jpem9udGFsXCIscmFuZ2U6ITEsc3RlcDoxLHZhbHVlOjAsdmFsdWVzOm51bGwsY2hhbmdlOm51bGwsc2xpZGU6bnVsbCxzdGFydDpudWxsLHN0b3A6bnVsbH0sbnVtUGFnZXM6NSxfY3JlYXRlOmZ1bmN0aW9uKCl7dGhpcy5fa2V5U2xpZGluZz0hMSx0aGlzLl9tb3VzZVNsaWRpbmc9ITEsdGhpcy5fYW5pbWF0ZU9mZj0hMCx0aGlzLl9oYW5kbGVJbmRleD1udWxsLHRoaXMuX2RldGVjdE9yaWVudGF0aW9uKCksdGhpcy5fbW91c2VJbml0KCksdGhpcy5fY2FsY3VsYXRlTmV3TWF4KCksdGhpcy5fYWRkQ2xhc3MoXCJ1aS1zbGlkZXIgdWktc2xpZGVyLVwiK3RoaXMub3JpZW50YXRpb24sXCJ1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnRcIiksdGhpcy5fcmVmcmVzaCgpLHRoaXMuX2FuaW1hdGVPZmY9ITF9LF9yZWZyZXNoOmZ1bmN0aW9uKCl7dGhpcy5fY3JlYXRlUmFuZ2UoKSx0aGlzLl9jcmVhdGVIYW5kbGVzKCksdGhpcy5fc2V0dXBFdmVudHMoKSx0aGlzLl9yZWZyZXNoVmFsdWUoKX0sX2NyZWF0ZUhhbmRsZXM6ZnVuY3Rpb24oKXt2YXIgZSxpLHM9dGhpcy5vcHRpb25zLG49dGhpcy5lbGVtZW50LmZpbmQoXCIudWktc2xpZGVyLWhhbmRsZVwiKSxvPVwiPHNwYW4gdGFiaW5kZXg9JzAnPjwvc3Bhbj5cIixhPVtdO2ZvcihpPXMudmFsdWVzJiZzLnZhbHVlcy5sZW5ndGh8fDEsbi5sZW5ndGg+aSYmKG4uc2xpY2UoaSkucmVtb3ZlKCksbj1uLnNsaWNlKDAsaSkpLGU9bi5sZW5ndGg7aT5lO2UrKylhLnB1c2gobyk7dGhpcy5oYW5kbGVzPW4uYWRkKHQoYS5qb2luKFwiXCIpKS5hcHBlbmRUbyh0aGlzLmVsZW1lbnQpKSx0aGlzLl9hZGRDbGFzcyh0aGlzLmhhbmRsZXMsXCJ1aS1zbGlkZXItaGFuZGxlXCIsXCJ1aS1zdGF0ZS1kZWZhdWx0XCIpLHRoaXMuaGFuZGxlPXRoaXMuaGFuZGxlcy5lcSgwKSx0aGlzLmhhbmRsZXMuZWFjaChmdW5jdGlvbihlKXt0KHRoaXMpLmRhdGEoXCJ1aS1zbGlkZXItaGFuZGxlLWluZGV4XCIsZSkuYXR0cihcInRhYkluZGV4XCIsMCl9KX0sX2NyZWF0ZVJhbmdlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcHRpb25zO2UucmFuZ2U/KGUucmFuZ2U9PT0hMCYmKGUudmFsdWVzP2UudmFsdWVzLmxlbmd0aCYmMiE9PWUudmFsdWVzLmxlbmd0aD9lLnZhbHVlcz1bZS52YWx1ZXNbMF0sZS52YWx1ZXNbMF1dOnQuaXNBcnJheShlLnZhbHVlcykmJihlLnZhbHVlcz1lLnZhbHVlcy5zbGljZSgwKSk6ZS52YWx1ZXM9W3RoaXMuX3ZhbHVlTWluKCksdGhpcy5fdmFsdWVNaW4oKV0pLHRoaXMucmFuZ2UmJnRoaXMucmFuZ2UubGVuZ3RoPyh0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnJhbmdlLFwidWktc2xpZGVyLXJhbmdlLW1pbiB1aS1zbGlkZXItcmFuZ2UtbWF4XCIpLHRoaXMucmFuZ2UuY3NzKHtsZWZ0OlwiXCIsYm90dG9tOlwiXCJ9KSk6KHRoaXMucmFuZ2U9dChcIjxkaXY+XCIpLmFwcGVuZFRvKHRoaXMuZWxlbWVudCksdGhpcy5fYWRkQ2xhc3ModGhpcy5yYW5nZSxcInVpLXNsaWRlci1yYW5nZVwiKSksKFwibWluXCI9PT1lLnJhbmdlfHxcIm1heFwiPT09ZS5yYW5nZSkmJnRoaXMuX2FkZENsYXNzKHRoaXMucmFuZ2UsXCJ1aS1zbGlkZXItcmFuZ2UtXCIrZS5yYW5nZSkpOih0aGlzLnJhbmdlJiZ0aGlzLnJhbmdlLnJlbW92ZSgpLHRoaXMucmFuZ2U9bnVsbClcbn0sX3NldHVwRXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy5fb2ZmKHRoaXMuaGFuZGxlcyksdGhpcy5fb24odGhpcy5oYW5kbGVzLHRoaXMuX2hhbmRsZUV2ZW50cyksdGhpcy5faG92ZXJhYmxlKHRoaXMuaGFuZGxlcyksdGhpcy5fZm9jdXNhYmxlKHRoaXMuaGFuZGxlcyl9LF9kZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5oYW5kbGVzLnJlbW92ZSgpLHRoaXMucmFuZ2UmJnRoaXMucmFuZ2UucmVtb3ZlKCksdGhpcy5fbW91c2VEZXN0cm95KCl9LF9tb3VzZUNhcHR1cmU6ZnVuY3Rpb24oZSl7dmFyIGkscyxuLG8sYSxyLGgsbCx1PXRoaXMsYz10aGlzLm9wdGlvbnM7cmV0dXJuIGMuZGlzYWJsZWQ/ITE6KHRoaXMuZWxlbWVudFNpemU9e3dpZHRoOnRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpfSx0aGlzLmVsZW1lbnRPZmZzZXQ9dGhpcy5lbGVtZW50Lm9mZnNldCgpLGk9e3g6ZS5wYWdlWCx5OmUucGFnZVl9LHM9dGhpcy5fbm9ybVZhbHVlRnJvbU1vdXNlKGkpLG49dGhpcy5fdmFsdWVNYXgoKS10aGlzLl92YWx1ZU1pbigpKzEsdGhpcy5oYW5kbGVzLmVhY2goZnVuY3Rpb24oZSl7dmFyIGk9TWF0aC5hYnMocy11LnZhbHVlcyhlKSk7KG4+aXx8bj09PWkmJihlPT09dS5fbGFzdENoYW5nZWRWYWx1ZXx8dS52YWx1ZXMoZSk9PT1jLm1pbikpJiYobj1pLG89dCh0aGlzKSxhPWUpfSkscj10aGlzLl9zdGFydChlLGEpLHI9PT0hMT8hMToodGhpcy5fbW91c2VTbGlkaW5nPSEwLHRoaXMuX2hhbmRsZUluZGV4PWEsdGhpcy5fYWRkQ2xhc3MobyxudWxsLFwidWktc3RhdGUtYWN0aXZlXCIpLG8udHJpZ2dlcihcImZvY3VzXCIpLGg9by5vZmZzZXQoKSxsPSF0KGUudGFyZ2V0KS5wYXJlbnRzKCkuYWRkQmFjaygpLmlzKFwiLnVpLXNsaWRlci1oYW5kbGVcIiksdGhpcy5fY2xpY2tPZmZzZXQ9bD97bGVmdDowLHRvcDowfTp7bGVmdDplLnBhZ2VYLWgubGVmdC1vLndpZHRoKCkvMix0b3A6ZS5wYWdlWS1oLnRvcC1vLmhlaWdodCgpLzItKHBhcnNlSW50KG8uY3NzKFwiYm9yZGVyVG9wV2lkdGhcIiksMTApfHwwKS0ocGFyc2VJbnQoby5jc3MoXCJib3JkZXJCb3R0b21XaWR0aFwiKSwxMCl8fDApKyhwYXJzZUludChvLmNzcyhcIm1hcmdpblRvcFwiKSwxMCl8fDApfSx0aGlzLmhhbmRsZXMuaGFzQ2xhc3MoXCJ1aS1zdGF0ZS1ob3ZlclwiKXx8dGhpcy5fc2xpZGUoZSxhLHMpLHRoaXMuX2FuaW1hdGVPZmY9ITAsITApKX0sX21vdXNlU3RhcnQ6ZnVuY3Rpb24oKXtyZXR1cm4hMH0sX21vdXNlRHJhZzpmdW5jdGlvbih0KXt2YXIgZT17eDp0LnBhZ2VYLHk6dC5wYWdlWX0saT10aGlzLl9ub3JtVmFsdWVGcm9tTW91c2UoZSk7cmV0dXJuIHRoaXMuX3NsaWRlKHQsdGhpcy5faGFuZGxlSW5kZXgsaSksITF9LF9tb3VzZVN0b3A6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMuaGFuZGxlcyxudWxsLFwidWktc3RhdGUtYWN0aXZlXCIpLHRoaXMuX21vdXNlU2xpZGluZz0hMSx0aGlzLl9zdG9wKHQsdGhpcy5faGFuZGxlSW5kZXgpLHRoaXMuX2NoYW5nZSh0LHRoaXMuX2hhbmRsZUluZGV4KSx0aGlzLl9oYW5kbGVJbmRleD1udWxsLHRoaXMuX2NsaWNrT2Zmc2V0PW51bGwsdGhpcy5fYW5pbWF0ZU9mZj0hMSwhMX0sX2RldGVjdE9yaWVudGF0aW9uOmZ1bmN0aW9uKCl7dGhpcy5vcmllbnRhdGlvbj1cInZlcnRpY2FsXCI9PT10aGlzLm9wdGlvbnMub3JpZW50YXRpb24/XCJ2ZXJ0aWNhbFwiOlwiaG9yaXpvbnRhbFwifSxfbm9ybVZhbHVlRnJvbU1vdXNlOmZ1bmN0aW9uKHQpe3ZhciBlLGkscyxuLG87cmV0dXJuXCJob3Jpem9udGFsXCI9PT10aGlzLm9yaWVudGF0aW9uPyhlPXRoaXMuZWxlbWVudFNpemUud2lkdGgsaT10LngtdGhpcy5lbGVtZW50T2Zmc2V0LmxlZnQtKHRoaXMuX2NsaWNrT2Zmc2V0P3RoaXMuX2NsaWNrT2Zmc2V0LmxlZnQ6MCkpOihlPXRoaXMuZWxlbWVudFNpemUuaGVpZ2h0LGk9dC55LXRoaXMuZWxlbWVudE9mZnNldC50b3AtKHRoaXMuX2NsaWNrT2Zmc2V0P3RoaXMuX2NsaWNrT2Zmc2V0LnRvcDowKSkscz1pL2Uscz4xJiYocz0xKSwwPnMmJihzPTApLFwidmVydGljYWxcIj09PXRoaXMub3JpZW50YXRpb24mJihzPTEtcyksbj10aGlzLl92YWx1ZU1heCgpLXRoaXMuX3ZhbHVlTWluKCksbz10aGlzLl92YWx1ZU1pbigpK3Mqbix0aGlzLl90cmltQWxpZ25WYWx1ZShvKX0sX3VpSGFzaDpmdW5jdGlvbih0LGUsaSl7dmFyIHM9e2hhbmRsZTp0aGlzLmhhbmRsZXNbdF0saGFuZGxlSW5kZXg6dCx2YWx1ZTp2b2lkIDAhPT1lP2U6dGhpcy52YWx1ZSgpfTtyZXR1cm4gdGhpcy5faGFzTXVsdGlwbGVWYWx1ZXMoKSYmKHMudmFsdWU9dm9pZCAwIT09ZT9lOnRoaXMudmFsdWVzKHQpLHMudmFsdWVzPWl8fHRoaXMudmFsdWVzKCkpLHN9LF9oYXNNdWx0aXBsZVZhbHVlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGlvbnMudmFsdWVzJiZ0aGlzLm9wdGlvbnMudmFsdWVzLmxlbmd0aH0sX3N0YXJ0OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuX3RyaWdnZXIoXCJzdGFydFwiLHQsdGhpcy5fdWlIYXNoKGUpKX0sX3NsaWRlOmZ1bmN0aW9uKHQsZSxpKXt2YXIgcyxuLG89dGhpcy52YWx1ZSgpLGE9dGhpcy52YWx1ZXMoKTt0aGlzLl9oYXNNdWx0aXBsZVZhbHVlcygpJiYobj10aGlzLnZhbHVlcyhlPzA6MSksbz10aGlzLnZhbHVlcyhlKSwyPT09dGhpcy5vcHRpb25zLnZhbHVlcy5sZW5ndGgmJnRoaXMub3B0aW9ucy5yYW5nZT09PSEwJiYoaT0wPT09ZT9NYXRoLm1pbihuLGkpOk1hdGgubWF4KG4saSkpLGFbZV09aSksaSE9PW8mJihzPXRoaXMuX3RyaWdnZXIoXCJzbGlkZVwiLHQsdGhpcy5fdWlIYXNoKGUsaSxhKSkscyE9PSExJiYodGhpcy5faGFzTXVsdGlwbGVWYWx1ZXMoKT90aGlzLnZhbHVlcyhlLGkpOnRoaXMudmFsdWUoaSkpKX0sX3N0b3A6ZnVuY3Rpb24odCxlKXt0aGlzLl90cmlnZ2VyKFwic3RvcFwiLHQsdGhpcy5fdWlIYXNoKGUpKX0sX2NoYW5nZTpmdW5jdGlvbih0LGUpe3RoaXMuX2tleVNsaWRpbmd8fHRoaXMuX21vdXNlU2xpZGluZ3x8KHRoaXMuX2xhc3RDaGFuZ2VkVmFsdWU9ZSx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlXCIsdCx0aGlzLl91aUhhc2goZSkpKX0sdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHRoaXMub3B0aW9ucy52YWx1ZT10aGlzLl90cmltQWxpZ25WYWx1ZSh0KSx0aGlzLl9yZWZyZXNoVmFsdWUoKSx0aGlzLl9jaGFuZ2UobnVsbCwwKSx2b2lkIDApOnRoaXMuX3ZhbHVlKCl9LHZhbHVlczpmdW5jdGlvbihlLGkpe3ZhciBzLG4sbztpZihhcmd1bWVudHMubGVuZ3RoPjEpcmV0dXJuIHRoaXMub3B0aW9ucy52YWx1ZXNbZV09dGhpcy5fdHJpbUFsaWduVmFsdWUoaSksdGhpcy5fcmVmcmVzaFZhbHVlKCksdGhpcy5fY2hhbmdlKG51bGwsZSksdm9pZCAwO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLl92YWx1ZXMoKTtpZighdC5pc0FycmF5KGFyZ3VtZW50c1swXSkpcmV0dXJuIHRoaXMuX2hhc011bHRpcGxlVmFsdWVzKCk/dGhpcy5fdmFsdWVzKGUpOnRoaXMudmFsdWUoKTtmb3Iocz10aGlzLm9wdGlvbnMudmFsdWVzLG49YXJndW1lbnRzWzBdLG89MDtzLmxlbmd0aD5vO28rPTEpc1tvXT10aGlzLl90cmltQWxpZ25WYWx1ZShuW29dKSx0aGlzLl9jaGFuZ2UobnVsbCxvKTt0aGlzLl9yZWZyZXNoVmFsdWUoKX0sX3NldE9wdGlvbjpmdW5jdGlvbihlLGkpe3ZhciBzLG49MDtzd2l0Y2goXCJyYW5nZVwiPT09ZSYmdGhpcy5vcHRpb25zLnJhbmdlPT09ITAmJihcIm1pblwiPT09aT8odGhpcy5vcHRpb25zLnZhbHVlPXRoaXMuX3ZhbHVlcygwKSx0aGlzLm9wdGlvbnMudmFsdWVzPW51bGwpOlwibWF4XCI9PT1pJiYodGhpcy5vcHRpb25zLnZhbHVlPXRoaXMuX3ZhbHVlcyh0aGlzLm9wdGlvbnMudmFsdWVzLmxlbmd0aC0xKSx0aGlzLm9wdGlvbnMudmFsdWVzPW51bGwpKSx0LmlzQXJyYXkodGhpcy5vcHRpb25zLnZhbHVlcykmJihuPXRoaXMub3B0aW9ucy52YWx1ZXMubGVuZ3RoKSx0aGlzLl9zdXBlcihlLGkpLGUpe2Nhc2VcIm9yaWVudGF0aW9uXCI6dGhpcy5fZGV0ZWN0T3JpZW50YXRpb24oKSx0aGlzLl9yZW1vdmVDbGFzcyhcInVpLXNsaWRlci1ob3Jpem9udGFsIHVpLXNsaWRlci12ZXJ0aWNhbFwiKS5fYWRkQ2xhc3MoXCJ1aS1zbGlkZXItXCIrdGhpcy5vcmllbnRhdGlvbiksdGhpcy5fcmVmcmVzaFZhbHVlKCksdGhpcy5vcHRpb25zLnJhbmdlJiZ0aGlzLl9yZWZyZXNoUmFuZ2UoaSksdGhpcy5oYW5kbGVzLmNzcyhcImhvcml6b250YWxcIj09PWk/XCJib3R0b21cIjpcImxlZnRcIixcIlwiKTticmVhaztjYXNlXCJ2YWx1ZVwiOnRoaXMuX2FuaW1hdGVPZmY9ITAsdGhpcy5fcmVmcmVzaFZhbHVlKCksdGhpcy5fY2hhbmdlKG51bGwsMCksdGhpcy5fYW5pbWF0ZU9mZj0hMTticmVhaztjYXNlXCJ2YWx1ZXNcIjpmb3IodGhpcy5fYW5pbWF0ZU9mZj0hMCx0aGlzLl9yZWZyZXNoVmFsdWUoKSxzPW4tMTtzPj0wO3MtLSl0aGlzLl9jaGFuZ2UobnVsbCxzKTt0aGlzLl9hbmltYXRlT2ZmPSExO2JyZWFrO2Nhc2VcInN0ZXBcIjpjYXNlXCJtaW5cIjpjYXNlXCJtYXhcIjp0aGlzLl9hbmltYXRlT2ZmPSEwLHRoaXMuX2NhbGN1bGF0ZU5ld01heCgpLHRoaXMuX3JlZnJlc2hWYWx1ZSgpLHRoaXMuX2FuaW1hdGVPZmY9ITE7YnJlYWs7Y2FzZVwicmFuZ2VcIjp0aGlzLl9hbmltYXRlT2ZmPSEwLHRoaXMuX3JlZnJlc2goKSx0aGlzLl9hbmltYXRlT2ZmPSExfX0sX3NldE9wdGlvbkRpc2FibGVkOmZ1bmN0aW9uKHQpe3RoaXMuX3N1cGVyKHQpLHRoaXMuX3RvZ2dsZUNsYXNzKG51bGwsXCJ1aS1zdGF0ZS1kaXNhYmxlZFwiLCEhdCl9LF92YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy52YWx1ZTtyZXR1cm4gdD10aGlzLl90cmltQWxpZ25WYWx1ZSh0KX0sX3ZhbHVlczpmdW5jdGlvbih0KXt2YXIgZSxpLHM7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZT10aGlzLm9wdGlvbnMudmFsdWVzW3RdLGU9dGhpcy5fdHJpbUFsaWduVmFsdWUoZSk7aWYodGhpcy5faGFzTXVsdGlwbGVWYWx1ZXMoKSl7Zm9yKGk9dGhpcy5vcHRpb25zLnZhbHVlcy5zbGljZSgpLHM9MDtpLmxlbmd0aD5zO3MrPTEpaVtzXT10aGlzLl90cmltQWxpZ25WYWx1ZShpW3NdKTtyZXR1cm4gaX1yZXR1cm5bXX0sX3RyaW1BbGlnblZhbHVlOmZ1bmN0aW9uKHQpe2lmKHRoaXMuX3ZhbHVlTWluKCk+PXQpcmV0dXJuIHRoaXMuX3ZhbHVlTWluKCk7aWYodD49dGhpcy5fdmFsdWVNYXgoKSlyZXR1cm4gdGhpcy5fdmFsdWVNYXgoKTt2YXIgZT10aGlzLm9wdGlvbnMuc3RlcD4wP3RoaXMub3B0aW9ucy5zdGVwOjEsaT0odC10aGlzLl92YWx1ZU1pbigpKSVlLHM9dC1pO3JldHVybiAyKk1hdGguYWJzKGkpPj1lJiYocys9aT4wP2U6LWUpLHBhcnNlRmxvYXQocy50b0ZpeGVkKDUpKX0sX2NhbGN1bGF0ZU5ld01heDpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy5tYXgsZT10aGlzLl92YWx1ZU1pbigpLGk9dGhpcy5vcHRpb25zLnN0ZXAscz1NYXRoLnJvdW5kKCh0LWUpL2kpKmk7dD1zK2UsdD50aGlzLm9wdGlvbnMubWF4JiYodC09aSksdGhpcy5tYXg9cGFyc2VGbG9hdCh0LnRvRml4ZWQodGhpcy5fcHJlY2lzaW9uKCkpKX0sX3ByZWNpc2lvbjpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ByZWNpc2lvbk9mKHRoaXMub3B0aW9ucy5zdGVwKTtyZXR1cm4gbnVsbCE9PXRoaXMub3B0aW9ucy5taW4mJih0PU1hdGgubWF4KHQsdGhpcy5fcHJlY2lzaW9uT2YodGhpcy5vcHRpb25zLm1pbikpKSx0fSxfcHJlY2lzaW9uT2Y6ZnVuY3Rpb24odCl7dmFyIGU9XCJcIit0LGk9ZS5pbmRleE9mKFwiLlwiKTtyZXR1cm4tMT09PWk/MDplLmxlbmd0aC1pLTF9LF92YWx1ZU1pbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGlvbnMubWlufSxfdmFsdWVNYXg6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXh9LF9yZWZyZXNoUmFuZ2U6ZnVuY3Rpb24odCl7XCJ2ZXJ0aWNhbFwiPT09dCYmdGhpcy5yYW5nZS5jc3Moe3dpZHRoOlwiXCIsbGVmdDpcIlwifSksXCJob3Jpem9udGFsXCI9PT10JiZ0aGlzLnJhbmdlLmNzcyh7aGVpZ2h0OlwiXCIsYm90dG9tOlwiXCJ9KX0sX3JlZnJlc2hWYWx1ZTpmdW5jdGlvbigpe3ZhciBlLGkscyxuLG8sYT10aGlzLm9wdGlvbnMucmFuZ2Uscj10aGlzLm9wdGlvbnMsaD10aGlzLGw9dGhpcy5fYW5pbWF0ZU9mZj8hMTpyLmFuaW1hdGUsdT17fTt0aGlzLl9oYXNNdWx0aXBsZVZhbHVlcygpP3RoaXMuaGFuZGxlcy5lYWNoKGZ1bmN0aW9uKHMpe2k9MTAwKigoaC52YWx1ZXMocyktaC5fdmFsdWVNaW4oKSkvKGguX3ZhbHVlTWF4KCktaC5fdmFsdWVNaW4oKSkpLHVbXCJob3Jpem9udGFsXCI9PT1oLm9yaWVudGF0aW9uP1wibGVmdFwiOlwiYm90dG9tXCJdPWkrXCIlXCIsdCh0aGlzKS5zdG9wKDEsMSlbbD9cImFuaW1hdGVcIjpcImNzc1wiXSh1LHIuYW5pbWF0ZSksaC5vcHRpb25zLnJhbmdlPT09ITAmJihcImhvcml6b250YWxcIj09PWgub3JpZW50YXRpb24/KDA9PT1zJiZoLnJhbmdlLnN0b3AoMSwxKVtsP1wiYW5pbWF0ZVwiOlwiY3NzXCJdKHtsZWZ0OmkrXCIlXCJ9LHIuYW5pbWF0ZSksMT09PXMmJmgucmFuZ2VbbD9cImFuaW1hdGVcIjpcImNzc1wiXSh7d2lkdGg6aS1lK1wiJVwifSx7cXVldWU6ITEsZHVyYXRpb246ci5hbmltYXRlfSkpOigwPT09cyYmaC5yYW5nZS5zdG9wKDEsMSlbbD9cImFuaW1hdGVcIjpcImNzc1wiXSh7Ym90dG9tOmkrXCIlXCJ9LHIuYW5pbWF0ZSksMT09PXMmJmgucmFuZ2VbbD9cImFuaW1hdGVcIjpcImNzc1wiXSh7aGVpZ2h0OmktZStcIiVcIn0se3F1ZXVlOiExLGR1cmF0aW9uOnIuYW5pbWF0ZX0pKSksZT1pfSk6KHM9dGhpcy52YWx1ZSgpLG49dGhpcy5fdmFsdWVNaW4oKSxvPXRoaXMuX3ZhbHVlTWF4KCksaT1vIT09bj8xMDAqKChzLW4pLyhvLW4pKTowLHVbXCJob3Jpem9udGFsXCI9PT10aGlzLm9yaWVudGF0aW9uP1wibGVmdFwiOlwiYm90dG9tXCJdPWkrXCIlXCIsdGhpcy5oYW5kbGUuc3RvcCgxLDEpW2w/XCJhbmltYXRlXCI6XCJjc3NcIl0odSxyLmFuaW1hdGUpLFwibWluXCI9PT1hJiZcImhvcml6b250YWxcIj09PXRoaXMub3JpZW50YXRpb24mJnRoaXMucmFuZ2Uuc3RvcCgxLDEpW2w/XCJhbmltYXRlXCI6XCJjc3NcIl0oe3dpZHRoOmkrXCIlXCJ9LHIuYW5pbWF0ZSksXCJtYXhcIj09PWEmJlwiaG9yaXpvbnRhbFwiPT09dGhpcy5vcmllbnRhdGlvbiYmdGhpcy5yYW5nZS5zdG9wKDEsMSlbbD9cImFuaW1hdGVcIjpcImNzc1wiXSh7d2lkdGg6MTAwLWkrXCIlXCJ9LHIuYW5pbWF0ZSksXCJtaW5cIj09PWEmJlwidmVydGljYWxcIj09PXRoaXMub3JpZW50YXRpb24mJnRoaXMucmFuZ2Uuc3RvcCgxLDEpW2w/XCJhbmltYXRlXCI6XCJjc3NcIl0oe2hlaWdodDppK1wiJVwifSxyLmFuaW1hdGUpLFwibWF4XCI9PT1hJiZcInZlcnRpY2FsXCI9PT10aGlzLm9yaWVudGF0aW9uJiZ0aGlzLnJhbmdlLnN0b3AoMSwxKVtsP1wiYW5pbWF0ZVwiOlwiY3NzXCJdKHtoZWlnaHQ6MTAwLWkrXCIlXCJ9LHIuYW5pbWF0ZSkpfSxfaGFuZGxlRXZlbnRzOntrZXlkb3duOmZ1bmN0aW9uKGUpe3ZhciBpLHMsbixvLGE9dChlLnRhcmdldCkuZGF0YShcInVpLXNsaWRlci1oYW5kbGUtaW5kZXhcIik7c3dpdGNoKGUua2V5Q29kZSl7Y2FzZSB0LnVpLmtleUNvZGUuSE9NRTpjYXNlIHQudWkua2V5Q29kZS5FTkQ6Y2FzZSB0LnVpLmtleUNvZGUuUEFHRV9VUDpjYXNlIHQudWkua2V5Q29kZS5QQUdFX0RPV046Y2FzZSB0LnVpLmtleUNvZGUuVVA6Y2FzZSB0LnVpLmtleUNvZGUuUklHSFQ6Y2FzZSB0LnVpLmtleUNvZGUuRE9XTjpjYXNlIHQudWkua2V5Q29kZS5MRUZUOmlmKGUucHJldmVudERlZmF1bHQoKSwhdGhpcy5fa2V5U2xpZGluZyYmKHRoaXMuX2tleVNsaWRpbmc9ITAsdGhpcy5fYWRkQ2xhc3ModChlLnRhcmdldCksbnVsbCxcInVpLXN0YXRlLWFjdGl2ZVwiKSxpPXRoaXMuX3N0YXJ0KGUsYSksaT09PSExKSlyZXR1cm59c3dpdGNoKG89dGhpcy5vcHRpb25zLnN0ZXAscz1uPXRoaXMuX2hhc011bHRpcGxlVmFsdWVzKCk/dGhpcy52YWx1ZXMoYSk6dGhpcy52YWx1ZSgpLGUua2V5Q29kZSl7Y2FzZSB0LnVpLmtleUNvZGUuSE9NRTpuPXRoaXMuX3ZhbHVlTWluKCk7YnJlYWs7Y2FzZSB0LnVpLmtleUNvZGUuRU5EOm49dGhpcy5fdmFsdWVNYXgoKTticmVhaztjYXNlIHQudWkua2V5Q29kZS5QQUdFX1VQOm49dGhpcy5fdHJpbUFsaWduVmFsdWUocysodGhpcy5fdmFsdWVNYXgoKS10aGlzLl92YWx1ZU1pbigpKS90aGlzLm51bVBhZ2VzKTticmVhaztjYXNlIHQudWkua2V5Q29kZS5QQUdFX0RPV046bj10aGlzLl90cmltQWxpZ25WYWx1ZShzLSh0aGlzLl92YWx1ZU1heCgpLXRoaXMuX3ZhbHVlTWluKCkpL3RoaXMubnVtUGFnZXMpO2JyZWFrO2Nhc2UgdC51aS5rZXlDb2RlLlVQOmNhc2UgdC51aS5rZXlDb2RlLlJJR0hUOmlmKHM9PT10aGlzLl92YWx1ZU1heCgpKXJldHVybjtuPXRoaXMuX3RyaW1BbGlnblZhbHVlKHMrbyk7YnJlYWs7Y2FzZSB0LnVpLmtleUNvZGUuRE9XTjpjYXNlIHQudWkua2V5Q29kZS5MRUZUOmlmKHM9PT10aGlzLl92YWx1ZU1pbigpKXJldHVybjtuPXRoaXMuX3RyaW1BbGlnblZhbHVlKHMtbyl9dGhpcy5fc2xpZGUoZSxhLG4pfSxrZXl1cDpmdW5jdGlvbihlKXt2YXIgaT10KGUudGFyZ2V0KS5kYXRhKFwidWktc2xpZGVyLWhhbmRsZS1pbmRleFwiKTt0aGlzLl9rZXlTbGlkaW5nJiYodGhpcy5fa2V5U2xpZGluZz0hMSx0aGlzLl9zdG9wKGUsaSksdGhpcy5fY2hhbmdlKGUsaSksdGhpcy5fcmVtb3ZlQ2xhc3ModChlLnRhcmdldCksbnVsbCxcInVpLXN0YXRlLWFjdGl2ZVwiKSl9fX0pLHQud2lkZ2V0KFwidWkuc3Bpbm5lclwiLHt2ZXJzaW9uOlwiMS4xMi4xXCIsZGVmYXVsdEVsZW1lbnQ6XCI8aW5wdXQ+XCIsd2lkZ2V0RXZlbnRQcmVmaXg6XCJzcGluXCIsb3B0aW9uczp7Y2xhc3Nlczp7XCJ1aS1zcGlubmVyXCI6XCJ1aS1jb3JuZXItYWxsXCIsXCJ1aS1zcGlubmVyLWRvd25cIjpcInVpLWNvcm5lci1iclwiLFwidWktc3Bpbm5lci11cFwiOlwidWktY29ybmVyLXRyXCJ9LGN1bHR1cmU6bnVsbCxpY29uczp7ZG93bjpcInVpLWljb24tdHJpYW5nbGUtMS1zXCIsdXA6XCJ1aS1pY29uLXRyaWFuZ2xlLTEtblwifSxpbmNyZW1lbnRhbDohMCxtYXg6bnVsbCxtaW46bnVsbCxudW1iZXJGb3JtYXQ6bnVsbCxwYWdlOjEwLHN0ZXA6MSxjaGFuZ2U6bnVsbCxzcGluOm51bGwsc3RhcnQ6bnVsbCxzdG9wOm51bGx9LF9jcmVhdGU6ZnVuY3Rpb24oKXt0aGlzLl9zZXRPcHRpb24oXCJtYXhcIix0aGlzLm9wdGlvbnMubWF4KSx0aGlzLl9zZXRPcHRpb24oXCJtaW5cIix0aGlzLm9wdGlvbnMubWluKSx0aGlzLl9zZXRPcHRpb24oXCJzdGVwXCIsdGhpcy5vcHRpb25zLnN0ZXApLFwiXCIhPT10aGlzLnZhbHVlKCkmJnRoaXMuX3ZhbHVlKHRoaXMuZWxlbWVudC52YWwoKSwhMCksdGhpcy5fZHJhdygpLHRoaXMuX29uKHRoaXMuX2V2ZW50cyksdGhpcy5fcmVmcmVzaCgpLHRoaXMuX29uKHRoaXMud2luZG93LHtiZWZvcmV1bmxvYWQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cihcImF1dG9jb21wbGV0ZVwiKX19KX0sX2dldENyZWF0ZU9wdGlvbnM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9zdXBlcigpLGk9dGhpcy5lbGVtZW50O3JldHVybiB0LmVhY2goW1wibWluXCIsXCJtYXhcIixcInN0ZXBcIl0sZnVuY3Rpb24odCxzKXt2YXIgbj1pLmF0dHIocyk7bnVsbCE9biYmbi5sZW5ndGgmJihlW3NdPW4pfSksZX0sX2V2ZW50czp7a2V5ZG93bjpmdW5jdGlvbih0KXt0aGlzLl9zdGFydCh0KSYmdGhpcy5fa2V5ZG93bih0KSYmdC5wcmV2ZW50RGVmYXVsdCgpfSxrZXl1cDpcIl9zdG9wXCIsZm9jdXM6ZnVuY3Rpb24oKXt0aGlzLnByZXZpb3VzPXRoaXMuZWxlbWVudC52YWwoKX0sYmx1cjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jYW5jZWxCbHVyPyhkZWxldGUgdGhpcy5jYW5jZWxCbHVyLHZvaWQgMCk6KHRoaXMuX3N0b3AoKSx0aGlzLl9yZWZyZXNoKCksdGhpcy5wcmV2aW91cyE9PXRoaXMuZWxlbWVudC52YWwoKSYmdGhpcy5fdHJpZ2dlcihcImNoYW5nZVwiLHQpLHZvaWQgMCl9LG1vdXNld2hlZWw6ZnVuY3Rpb24odCxlKXtpZihlKXtpZighdGhpcy5zcGlubmluZyYmIXRoaXMuX3N0YXJ0KHQpKXJldHVybiExO3RoaXMuX3NwaW4oKGU+MD8xOi0xKSp0aGlzLm9wdGlvbnMuc3RlcCx0KSxjbGVhclRpbWVvdXQodGhpcy5tb3VzZXdoZWVsVGltZXIpLHRoaXMubW91c2V3aGVlbFRpbWVyPXRoaXMuX2RlbGF5KGZ1bmN0aW9uKCl7dGhpcy5zcGlubmluZyYmdGhpcy5fc3RvcCh0KX0sMTAwKSx0LnByZXZlbnREZWZhdWx0KCl9fSxcIm1vdXNlZG93biAudWktc3Bpbm5lci1idXR0b25cIjpmdW5jdGlvbihlKXtmdW5jdGlvbiBpKCl7dmFyIGU9dGhpcy5lbGVtZW50WzBdPT09dC51aS5zYWZlQWN0aXZlRWxlbWVudCh0aGlzLmRvY3VtZW50WzBdKTtlfHwodGhpcy5lbGVtZW50LnRyaWdnZXIoXCJmb2N1c1wiKSx0aGlzLnByZXZpb3VzPXMsdGhpcy5fZGVsYXkoZnVuY3Rpb24oKXt0aGlzLnByZXZpb3VzPXN9KSl9dmFyIHM7cz10aGlzLmVsZW1lbnRbMF09PT10LnVpLnNhZmVBY3RpdmVFbGVtZW50KHRoaXMuZG9jdW1lbnRbMF0pP3RoaXMucHJldmlvdXM6dGhpcy5lbGVtZW50LnZhbCgpLGUucHJldmVudERlZmF1bHQoKSxpLmNhbGwodGhpcyksdGhpcy5jYW5jZWxCbHVyPSEwLHRoaXMuX2RlbGF5KGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXMuY2FuY2VsQmx1cixpLmNhbGwodGhpcyl9KSx0aGlzLl9zdGFydChlKSE9PSExJiZ0aGlzLl9yZXBlYXQobnVsbCx0KGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoXCJ1aS1zcGlubmVyLXVwXCIpPzE6LTEsZSl9LFwibW91c2V1cCAudWktc3Bpbm5lci1idXR0b25cIjpcIl9zdG9wXCIsXCJtb3VzZWVudGVyIC51aS1zcGlubmVyLWJ1dHRvblwiOmZ1bmN0aW9uKGUpe3JldHVybiB0KGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoXCJ1aS1zdGF0ZS1hY3RpdmVcIik/dGhpcy5fc3RhcnQoZSk9PT0hMT8hMToodGhpcy5fcmVwZWF0KG51bGwsdChlLmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKFwidWktc3Bpbm5lci11cFwiKT8xOi0xLGUpLHZvaWQgMCk6dm9pZCAwfSxcIm1vdXNlbGVhdmUgLnVpLXNwaW5uZXItYnV0dG9uXCI6XCJfc3RvcFwifSxfZW5oYW5jZTpmdW5jdGlvbigpe3RoaXMudWlTcGlubmVyPXRoaXMuZWxlbWVudC5hdHRyKFwiYXV0b2NvbXBsZXRlXCIsXCJvZmZcIikud3JhcChcIjxzcGFuPlwiKS5wYXJlbnQoKS5hcHBlbmQoXCI8YT48L2E+PGE+PC9hPlwiKX0sX2RyYXc6ZnVuY3Rpb24oKXt0aGlzLl9lbmhhbmNlKCksdGhpcy5fYWRkQ2xhc3ModGhpcy51aVNwaW5uZXIsXCJ1aS1zcGlubmVyXCIsXCJ1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnRcIiksdGhpcy5fYWRkQ2xhc3MoXCJ1aS1zcGlubmVyLWlucHV0XCIpLHRoaXMuZWxlbWVudC5hdHRyKFwicm9sZVwiLFwic3BpbmJ1dHRvblwiKSx0aGlzLmJ1dHRvbnM9dGhpcy51aVNwaW5uZXIuY2hpbGRyZW4oXCJhXCIpLmF0dHIoXCJ0YWJJbmRleFwiLC0xKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwhMCkuYnV0dG9uKHtjbGFzc2VzOntcInVpLWJ1dHRvblwiOlwiXCJ9fSksdGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5idXR0b25zLFwidWktY29ybmVyLWFsbFwiKSx0aGlzLl9hZGRDbGFzcyh0aGlzLmJ1dHRvbnMuZmlyc3QoKSxcInVpLXNwaW5uZXItYnV0dG9uIHVpLXNwaW5uZXItdXBcIiksdGhpcy5fYWRkQ2xhc3ModGhpcy5idXR0b25zLmxhc3QoKSxcInVpLXNwaW5uZXItYnV0dG9uIHVpLXNwaW5uZXItZG93blwiKSx0aGlzLmJ1dHRvbnMuZmlyc3QoKS5idXR0b24oe2ljb246dGhpcy5vcHRpb25zLmljb25zLnVwLHNob3dMYWJlbDohMX0pLHRoaXMuYnV0dG9ucy5sYXN0KCkuYnV0dG9uKHtpY29uOnRoaXMub3B0aW9ucy5pY29ucy5kb3duLHNob3dMYWJlbDohMX0pLHRoaXMuYnV0dG9ucy5oZWlnaHQoKT5NYXRoLmNlaWwoLjUqdGhpcy51aVNwaW5uZXIuaGVpZ2h0KCkpJiZ0aGlzLnVpU3Bpbm5lci5oZWlnaHQoKT4wJiZ0aGlzLnVpU3Bpbm5lci5oZWlnaHQodGhpcy51aVNwaW5uZXIuaGVpZ2h0KCkpfSxfa2V5ZG93bjpmdW5jdGlvbihlKXt2YXIgaT10aGlzLm9wdGlvbnMscz10LnVpLmtleUNvZGU7c3dpdGNoKGUua2V5Q29kZSl7Y2FzZSBzLlVQOnJldHVybiB0aGlzLl9yZXBlYXQobnVsbCwxLGUpLCEwO2Nhc2Ugcy5ET1dOOnJldHVybiB0aGlzLl9yZXBlYXQobnVsbCwtMSxlKSwhMDtjYXNlIHMuUEFHRV9VUDpyZXR1cm4gdGhpcy5fcmVwZWF0KG51bGwsaS5wYWdlLGUpLCEwO2Nhc2Ugcy5QQUdFX0RPV046cmV0dXJuIHRoaXMuX3JlcGVhdChudWxsLC1pLnBhZ2UsZSksITB9cmV0dXJuITF9LF9zdGFydDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zcGlubmluZ3x8dGhpcy5fdHJpZ2dlcihcInN0YXJ0XCIsdCkhPT0hMT8odGhpcy5jb3VudGVyfHwodGhpcy5jb3VudGVyPTEpLHRoaXMuc3Bpbm5pbmc9ITAsITApOiExfSxfcmVwZWF0OmZ1bmN0aW9uKHQsZSxpKXt0PXR8fDUwMCxjbGVhclRpbWVvdXQodGhpcy50aW1lciksdGhpcy50aW1lcj10aGlzLl9kZWxheShmdW5jdGlvbigpe3RoaXMuX3JlcGVhdCg0MCxlLGkpfSx0KSx0aGlzLl9zcGluKGUqdGhpcy5vcHRpb25zLnN0ZXAsaSl9LF9zcGluOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy52YWx1ZSgpfHwwO3RoaXMuY291bnRlcnx8KHRoaXMuY291bnRlcj0xKSxpPXRoaXMuX2FkanVzdFZhbHVlKGkrdCp0aGlzLl9pbmNyZW1lbnQodGhpcy5jb3VudGVyKSksdGhpcy5zcGlubmluZyYmdGhpcy5fdHJpZ2dlcihcInNwaW5cIixlLHt2YWx1ZTppfSk9PT0hMXx8KHRoaXMuX3ZhbHVlKGkpLHRoaXMuY291bnRlcisrKX0sX2luY3JlbWVudDpmdW5jdGlvbihlKXt2YXIgaT10aGlzLm9wdGlvbnMuaW5jcmVtZW50YWw7cmV0dXJuIGk/dC5pc0Z1bmN0aW9uKGkpP2koZSk6TWF0aC5mbG9vcihlKmUqZS81ZTQtZSplLzUwMCsxNyplLzIwMCsxKToxfSxfcHJlY2lzaW9uOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fcHJlY2lzaW9uT2YodGhpcy5vcHRpb25zLnN0ZXApO3JldHVybiBudWxsIT09dGhpcy5vcHRpb25zLm1pbiYmKHQ9TWF0aC5tYXgodCx0aGlzLl9wcmVjaXNpb25PZih0aGlzLm9wdGlvbnMubWluKSkpLHR9LF9wcmVjaXNpb25PZjpmdW5jdGlvbih0KXt2YXIgZT1cIlwiK3QsaT1lLmluZGV4T2YoXCIuXCIpO3JldHVybi0xPT09aT8wOmUubGVuZ3RoLWktMX0sX2FkanVzdFZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlLGkscz10aGlzLm9wdGlvbnM7cmV0dXJuIGU9bnVsbCE9PXMubWluP3MubWluOjAsaT10LWUsaT1NYXRoLnJvdW5kKGkvcy5zdGVwKSpzLnN0ZXAsdD1lK2ksdD1wYXJzZUZsb2F0KHQudG9GaXhlZCh0aGlzLl9wcmVjaXNpb24oKSkpLG51bGwhPT1zLm1heCYmdD5zLm1heD9zLm1heDpudWxsIT09cy5taW4mJnMubWluPnQ/cy5taW46dH0sX3N0b3A6ZnVuY3Rpb24odCl7dGhpcy5zcGlubmluZyYmKGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKSxjbGVhclRpbWVvdXQodGhpcy5tb3VzZXdoZWVsVGltZXIpLHRoaXMuY291bnRlcj0wLHRoaXMuc3Bpbm5pbmc9ITEsdGhpcy5fdHJpZ2dlcihcInN0b3BcIix0KSl9LF9zZXRPcHRpb246ZnVuY3Rpb24odCxlKXt2YXIgaSxzLG47cmV0dXJuXCJjdWx0dXJlXCI9PT10fHxcIm51bWJlckZvcm1hdFwiPT09dD8oaT10aGlzLl9wYXJzZSh0aGlzLmVsZW1lbnQudmFsKCkpLHRoaXMub3B0aW9uc1t0XT1lLHRoaXMuZWxlbWVudC52YWwodGhpcy5fZm9ybWF0KGkpKSx2b2lkIDApOigoXCJtYXhcIj09PXR8fFwibWluXCI9PT10fHxcInN0ZXBcIj09PXQpJiZcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9dGhpcy5fcGFyc2UoZSkpLFwiaWNvbnNcIj09PXQmJihzPXRoaXMuYnV0dG9ucy5maXJzdCgpLmZpbmQoXCIudWktaWNvblwiKSx0aGlzLl9yZW1vdmVDbGFzcyhzLG51bGwsdGhpcy5vcHRpb25zLmljb25zLnVwKSx0aGlzLl9hZGRDbGFzcyhzLG51bGwsZS51cCksbj10aGlzLmJ1dHRvbnMubGFzdCgpLmZpbmQoXCIudWktaWNvblwiKSx0aGlzLl9yZW1vdmVDbGFzcyhuLG51bGwsdGhpcy5vcHRpb25zLmljb25zLmRvd24pLHRoaXMuX2FkZENsYXNzKG4sbnVsbCxlLmRvd24pKSx0aGlzLl9zdXBlcih0LGUpLHZvaWQgMCl9LF9zZXRPcHRpb25EaXNhYmxlZDpmdW5jdGlvbih0KXt0aGlzLl9zdXBlcih0KSx0aGlzLl90b2dnbGVDbGFzcyh0aGlzLnVpU3Bpbm5lcixudWxsLFwidWktc3RhdGUtZGlzYWJsZWRcIiwhIXQpLHRoaXMuZWxlbWVudC5wcm9wKFwiZGlzYWJsZWRcIiwhIXQpLHRoaXMuYnV0dG9ucy5idXR0b24odD9cImRpc2FibGVcIjpcImVuYWJsZVwiKX0sX3NldE9wdGlvbnM6cihmdW5jdGlvbih0KXt0aGlzLl9zdXBlcih0KX0pLF9wYXJzZTpmdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdCYmXCJcIiE9PXQmJih0PXdpbmRvdy5HbG9iYWxpemUmJnRoaXMub3B0aW9ucy5udW1iZXJGb3JtYXQ/R2xvYmFsaXplLnBhcnNlRmxvYXQodCwxMCx0aGlzLm9wdGlvbnMuY3VsdHVyZSk6K3QpLFwiXCI9PT10fHxpc05hTih0KT9udWxsOnR9LF9mb3JtYXQ6ZnVuY3Rpb24odCl7cmV0dXJuXCJcIj09PXQ/XCJcIjp3aW5kb3cuR2xvYmFsaXplJiZ0aGlzLm9wdGlvbnMubnVtYmVyRm9ybWF0P0dsb2JhbGl6ZS5mb3JtYXQodCx0aGlzLm9wdGlvbnMubnVtYmVyRm9ybWF0LHRoaXMub3B0aW9ucy5jdWx0dXJlKTp0fSxfcmVmcmVzaDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5hdHRyKHtcImFyaWEtdmFsdWVtaW5cIjp0aGlzLm9wdGlvbnMubWluLFwiYXJpYS12YWx1ZW1heFwiOnRoaXMub3B0aW9ucy5tYXgsXCJhcmlhLXZhbHVlbm93XCI6dGhpcy5fcGFyc2UodGhpcy5lbGVtZW50LnZhbCgpKX0pfSxpc1ZhbGlkOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZSgpO3JldHVybiBudWxsPT09dD8hMTp0PT09dGhpcy5fYWRqdXN0VmFsdWUodCl9LF92YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBpO1wiXCIhPT10JiYoaT10aGlzLl9wYXJzZSh0KSxudWxsIT09aSYmKGV8fChpPXRoaXMuX2FkanVzdFZhbHVlKGkpKSx0PXRoaXMuX2Zvcm1hdChpKSkpLHRoaXMuZWxlbWVudC52YWwodCksdGhpcy5fcmVmcmVzaCgpfSxfZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5wcm9wKFwiZGlzYWJsZWRcIiwhMSkucmVtb3ZlQXR0cihcImF1dG9jb21wbGV0ZSByb2xlIGFyaWEtdmFsdWVtaW4gYXJpYS12YWx1ZW1heCBhcmlhLXZhbHVlbm93XCIpLHRoaXMudWlTcGlubmVyLnJlcGxhY2VXaXRoKHRoaXMuZWxlbWVudCl9LHN0ZXBVcDpyKGZ1bmN0aW9uKHQpe3RoaXMuX3N0ZXBVcCh0KX0pLF9zdGVwVXA6ZnVuY3Rpb24odCl7dGhpcy5fc3RhcnQoKSYmKHRoaXMuX3NwaW4oKHR8fDEpKnRoaXMub3B0aW9ucy5zdGVwKSx0aGlzLl9zdG9wKCkpfSxzdGVwRG93bjpyKGZ1bmN0aW9uKHQpe3RoaXMuX3N0ZXBEb3duKHQpfSksX3N0ZXBEb3duOmZ1bmN0aW9uKHQpe3RoaXMuX3N0YXJ0KCkmJih0aGlzLl9zcGluKCh0fHwxKSotdGhpcy5vcHRpb25zLnN0ZXApLHRoaXMuX3N0b3AoKSl9LHBhZ2VVcDpyKGZ1bmN0aW9uKHQpe3RoaXMuX3N0ZXBVcCgodHx8MSkqdGhpcy5vcHRpb25zLnBhZ2UpfSkscGFnZURvd246cihmdW5jdGlvbih0KXt0aGlzLl9zdGVwRG93bigodHx8MSkqdGhpcy5vcHRpb25zLnBhZ2UpfSksdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHIodGhpcy5fdmFsdWUpLmNhbGwodGhpcyx0KSx2b2lkIDApOnRoaXMuX3BhcnNlKHRoaXMuZWxlbWVudC52YWwoKSl9LHdpZGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnVpU3Bpbm5lcn19KSx0LnVpQmFja0NvbXBhdCE9PSExJiZ0LndpZGdldChcInVpLnNwaW5uZXJcIix0LnVpLnNwaW5uZXIse19lbmhhbmNlOmZ1bmN0aW9uKCl7dGhpcy51aVNwaW5uZXI9dGhpcy5lbGVtZW50LmF0dHIoXCJhdXRvY29tcGxldGVcIixcIm9mZlwiKS53cmFwKHRoaXMuX3VpU3Bpbm5lckh0bWwoKSkucGFyZW50KCkuYXBwZW5kKHRoaXMuX2J1dHRvbkh0bWwoKSl9LF91aVNwaW5uZXJIdG1sOmZ1bmN0aW9uKCl7cmV0dXJuXCI8c3Bhbj5cIn0sX2J1dHRvbkh0bWw6ZnVuY3Rpb24oKXtyZXR1cm5cIjxhPjwvYT48YT48L2E+XCJ9fSksdC51aS5zcGlubmVyLHQud2lkZ2V0KFwidWkudGFic1wiLHt2ZXJzaW9uOlwiMS4xMi4xXCIsZGVsYXk6MzAwLG9wdGlvbnM6e2FjdGl2ZTpudWxsLGNsYXNzZXM6e1widWktdGFic1wiOlwidWktY29ybmVyLWFsbFwiLFwidWktdGFicy1uYXZcIjpcInVpLWNvcm5lci1hbGxcIixcInVpLXRhYnMtcGFuZWxcIjpcInVpLWNvcm5lci1ib3R0b21cIixcInVpLXRhYnMtdGFiXCI6XCJ1aS1jb3JuZXItdG9wXCJ9LGNvbGxhcHNpYmxlOiExLGV2ZW50OlwiY2xpY2tcIixoZWlnaHRTdHlsZTpcImNvbnRlbnRcIixoaWRlOm51bGwsc2hvdzpudWxsLGFjdGl2YXRlOm51bGwsYmVmb3JlQWN0aXZhdGU6bnVsbCxiZWZvcmVMb2FkOm51bGwsbG9hZDpudWxsfSxfaXNMb2NhbDpmdW5jdGlvbigpe3ZhciB0PS8jLiokLztyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIGkscztpPWUuaHJlZi5yZXBsYWNlKHQsXCJcIikscz1sb2NhdGlvbi5ocmVmLnJlcGxhY2UodCxcIlwiKTt0cnl7aT1kZWNvZGVVUklDb21wb25lbnQoaSl9Y2F0Y2gobil7fXRyeXtzPWRlY29kZVVSSUNvbXBvbmVudChzKX1jYXRjaChuKXt9cmV0dXJuIGUuaGFzaC5sZW5ndGg+MSYmaT09PXN9fSgpLF9jcmVhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLGk9dGhpcy5vcHRpb25zO3RoaXMucnVubmluZz0hMSx0aGlzLl9hZGRDbGFzcyhcInVpLXRhYnNcIixcInVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudFwiKSx0aGlzLl90b2dnbGVDbGFzcyhcInVpLXRhYnMtY29sbGFwc2libGVcIixudWxsLGkuY29sbGFwc2libGUpLHRoaXMuX3Byb2Nlc3NUYWJzKCksaS5hY3RpdmU9dGhpcy5faW5pdGlhbEFjdGl2ZSgpLHQuaXNBcnJheShpLmRpc2FibGVkKSYmKGkuZGlzYWJsZWQ9dC51bmlxdWUoaS5kaXNhYmxlZC5jb25jYXQodC5tYXAodGhpcy50YWJzLmZpbHRlcihcIi51aS1zdGF0ZS1kaXNhYmxlZFwiKSxmdW5jdGlvbih0KXtyZXR1cm4gZS50YWJzLmluZGV4KHQpfSkpKS5zb3J0KCkpLHRoaXMuYWN0aXZlPXRoaXMub3B0aW9ucy5hY3RpdmUhPT0hMSYmdGhpcy5hbmNob3JzLmxlbmd0aD90aGlzLl9maW5kQWN0aXZlKGkuYWN0aXZlKTp0KCksdGhpcy5fcmVmcmVzaCgpLHRoaXMuYWN0aXZlLmxlbmd0aCYmdGhpcy5sb2FkKGkuYWN0aXZlKX0sX2luaXRpYWxBY3RpdmU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9wdGlvbnMuYWN0aXZlLGk9dGhpcy5vcHRpb25zLmNvbGxhcHNpYmxlLHM9bG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7cmV0dXJuIG51bGw9PT1lJiYocyYmdGhpcy50YWJzLmVhY2goZnVuY3Rpb24oaSxuKXtyZXR1cm4gdChuKS5hdHRyKFwiYXJpYS1jb250cm9sc1wiKT09PXM/KGU9aSwhMSk6dm9pZCAwfSksbnVsbD09PWUmJihlPXRoaXMudGFicy5pbmRleCh0aGlzLnRhYnMuZmlsdGVyKFwiLnVpLXRhYnMtYWN0aXZlXCIpKSksKG51bGw9PT1lfHwtMT09PWUpJiYoZT10aGlzLnRhYnMubGVuZ3RoPzA6ITEpKSxlIT09ITEmJihlPXRoaXMudGFicy5pbmRleCh0aGlzLnRhYnMuZXEoZSkpLC0xPT09ZSYmKGU9aT8hMTowKSksIWkmJmU9PT0hMSYmdGhpcy5hbmNob3JzLmxlbmd0aCYmKGU9MCksZX0sX2dldENyZWF0ZUV2ZW50RGF0YTpmdW5jdGlvbigpe3JldHVybnt0YWI6dGhpcy5hY3RpdmUscGFuZWw6dGhpcy5hY3RpdmUubGVuZ3RoP3RoaXMuX2dldFBhbmVsRm9yVGFiKHRoaXMuYWN0aXZlKTp0KCl9fSxfdGFiS2V5ZG93bjpmdW5jdGlvbihlKXt2YXIgaT10KHQudWkuc2FmZUFjdGl2ZUVsZW1lbnQodGhpcy5kb2N1bWVudFswXSkpLmNsb3Nlc3QoXCJsaVwiKSxzPXRoaXMudGFicy5pbmRleChpKSxuPSEwO2lmKCF0aGlzLl9oYW5kbGVQYWdlTmF2KGUpKXtzd2l0Y2goZS5rZXlDb2RlKXtjYXNlIHQudWkua2V5Q29kZS5SSUdIVDpjYXNlIHQudWkua2V5Q29kZS5ET1dOOnMrKzticmVhaztjYXNlIHQudWkua2V5Q29kZS5VUDpjYXNlIHQudWkua2V5Q29kZS5MRUZUOm49ITEscy0tO2JyZWFrO2Nhc2UgdC51aS5rZXlDb2RlLkVORDpzPXRoaXMuYW5jaG9ycy5sZW5ndGgtMTticmVhaztjYXNlIHQudWkua2V5Q29kZS5IT01FOnM9MDticmVhaztjYXNlIHQudWkua2V5Q29kZS5TUEFDRTpyZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpLGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpbmcpLHRoaXMuX2FjdGl2YXRlKHMpLHZvaWQgMDtjYXNlIHQudWkua2V5Q29kZS5FTlRFUjpyZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpLGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpbmcpLHRoaXMuX2FjdGl2YXRlKHM9PT10aGlzLm9wdGlvbnMuYWN0aXZlPyExOnMpLHZvaWQgMDtkZWZhdWx0OnJldHVybn1lLnByZXZlbnREZWZhdWx0KCksY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGluZykscz10aGlzLl9mb2N1c05leHRUYWIocyxuKSxlLmN0cmxLZXl8fGUubWV0YUtleXx8KGkuYXR0cihcImFyaWEtc2VsZWN0ZWRcIixcImZhbHNlXCIpLHRoaXMudGFicy5lcShzKS5hdHRyKFwiYXJpYS1zZWxlY3RlZFwiLFwidHJ1ZVwiKSx0aGlzLmFjdGl2YXRpbmc9dGhpcy5fZGVsYXkoZnVuY3Rpb24oKXt0aGlzLm9wdGlvbihcImFjdGl2ZVwiLHMpfSx0aGlzLmRlbGF5KSl9fSxfcGFuZWxLZXlkb3duOmZ1bmN0aW9uKGUpe3RoaXMuX2hhbmRsZVBhZ2VOYXYoZSl8fGUuY3RybEtleSYmZS5rZXlDb2RlPT09dC51aS5rZXlDb2RlLlVQJiYoZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuYWN0aXZlLnRyaWdnZXIoXCJmb2N1c1wiKSl9LF9oYW5kbGVQYWdlTmF2OmZ1bmN0aW9uKGUpe3JldHVybiBlLmFsdEtleSYmZS5rZXlDb2RlPT09dC51aS5rZXlDb2RlLlBBR0VfVVA/KHRoaXMuX2FjdGl2YXRlKHRoaXMuX2ZvY3VzTmV4dFRhYih0aGlzLm9wdGlvbnMuYWN0aXZlLTEsITEpKSwhMCk6ZS5hbHRLZXkmJmUua2V5Q29kZT09PXQudWkua2V5Q29kZS5QQUdFX0RPV04/KHRoaXMuX2FjdGl2YXRlKHRoaXMuX2ZvY3VzTmV4dFRhYih0aGlzLm9wdGlvbnMuYWN0aXZlKzEsITApKSwhMCk6dm9pZCAwfSxfZmluZE5leHRUYWI6ZnVuY3Rpb24oZSxpKXtmdW5jdGlvbiBzKCl7cmV0dXJuIGU+biYmKGU9MCksMD5lJiYoZT1uKSxlfWZvcih2YXIgbj10aGlzLnRhYnMubGVuZ3RoLTE7LTEhPT10LmluQXJyYXkocygpLHRoaXMub3B0aW9ucy5kaXNhYmxlZCk7KWU9aT9lKzE6ZS0xO3JldHVybiBlfSxfZm9jdXNOZXh0VGFiOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9dGhpcy5fZmluZE5leHRUYWIodCxlKSx0aGlzLnRhYnMuZXEodCkudHJpZ2dlcihcImZvY3VzXCIpLHR9LF9zZXRPcHRpb246ZnVuY3Rpb24odCxlKXtyZXR1cm5cImFjdGl2ZVwiPT09dD8odGhpcy5fYWN0aXZhdGUoZSksdm9pZCAwKToodGhpcy5fc3VwZXIodCxlKSxcImNvbGxhcHNpYmxlXCI9PT10JiYodGhpcy5fdG9nZ2xlQ2xhc3MoXCJ1aS10YWJzLWNvbGxhcHNpYmxlXCIsbnVsbCxlKSxlfHx0aGlzLm9wdGlvbnMuYWN0aXZlIT09ITF8fHRoaXMuX2FjdGl2YXRlKDApKSxcImV2ZW50XCI9PT10JiZ0aGlzLl9zZXR1cEV2ZW50cyhlKSxcImhlaWdodFN0eWxlXCI9PT10JiZ0aGlzLl9zZXR1cEhlaWdodFN0eWxlKGUpLHZvaWQgMCl9LF9zYW5pdGl6ZVNlbGVjdG9yOmZ1bmN0aW9uKHQpe3JldHVybiB0P3QucmVwbGFjZSgvWyFcIiQlJicoKSorLC5cXC86Ozw9Pj9AXFxbXFxdXFxeYHt8fX5dL2csXCJcXFxcJCZcIik6XCJcIn0scmVmcmVzaDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3B0aW9ucyxpPXRoaXMudGFibGlzdC5jaGlsZHJlbihcIjpoYXMoYVtocmVmXSlcIik7ZS5kaXNhYmxlZD10Lm1hcChpLmZpbHRlcihcIi51aS1zdGF0ZS1kaXNhYmxlZFwiKSxmdW5jdGlvbih0KXtyZXR1cm4gaS5pbmRleCh0KX0pLHRoaXMuX3Byb2Nlc3NUYWJzKCksZS5hY3RpdmUhPT0hMSYmdGhpcy5hbmNob3JzLmxlbmd0aD90aGlzLmFjdGl2ZS5sZW5ndGgmJiF0LmNvbnRhaW5zKHRoaXMudGFibGlzdFswXSx0aGlzLmFjdGl2ZVswXSk/dGhpcy50YWJzLmxlbmd0aD09PWUuZGlzYWJsZWQubGVuZ3RoPyhlLmFjdGl2ZT0hMSx0aGlzLmFjdGl2ZT10KCkpOnRoaXMuX2FjdGl2YXRlKHRoaXMuX2ZpbmROZXh0VGFiKE1hdGgubWF4KDAsZS5hY3RpdmUtMSksITEpKTplLmFjdGl2ZT10aGlzLnRhYnMuaW5kZXgodGhpcy5hY3RpdmUpOihlLmFjdGl2ZT0hMSx0aGlzLmFjdGl2ZT10KCkpLHRoaXMuX3JlZnJlc2goKX0sX3JlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLl9zZXRPcHRpb25EaXNhYmxlZCh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpLHRoaXMuX3NldHVwRXZlbnRzKHRoaXMub3B0aW9ucy5ldmVudCksdGhpcy5fc2V0dXBIZWlnaHRTdHlsZSh0aGlzLm9wdGlvbnMuaGVpZ2h0U3R5bGUpLHRoaXMudGFicy5ub3QodGhpcy5hY3RpdmUpLmF0dHIoe1wiYXJpYS1zZWxlY3RlZFwiOlwiZmFsc2VcIixcImFyaWEtZXhwYW5kZWRcIjpcImZhbHNlXCIsdGFiSW5kZXg6LTF9KSx0aGlzLnBhbmVscy5ub3QodGhpcy5fZ2V0UGFuZWxGb3JUYWIodGhpcy5hY3RpdmUpKS5oaWRlKCkuYXR0cih7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifSksdGhpcy5hY3RpdmUubGVuZ3RoPyh0aGlzLmFjdGl2ZS5hdHRyKHtcImFyaWEtc2VsZWN0ZWRcIjpcInRydWVcIixcImFyaWEtZXhwYW5kZWRcIjpcInRydWVcIix0YWJJbmRleDowfSksdGhpcy5fYWRkQ2xhc3ModGhpcy5hY3RpdmUsXCJ1aS10YWJzLWFjdGl2ZVwiLFwidWktc3RhdGUtYWN0aXZlXCIpLHRoaXMuX2dldFBhbmVsRm9yVGFiKHRoaXMuYWN0aXZlKS5zaG93KCkuYXR0cih7XCJhcmlhLWhpZGRlblwiOlwiZmFsc2VcIn0pKTp0aGlzLnRhYnMuZXEoMCkuYXR0cihcInRhYkluZGV4XCIsMCl9LF9wcm9jZXNzVGFiczpmdW5jdGlvbigpe3ZhciBlPXRoaXMsaT10aGlzLnRhYnMscz10aGlzLmFuY2hvcnMsbj10aGlzLnBhbmVsczt0aGlzLnRhYmxpc3Q9dGhpcy5fZ2V0TGlzdCgpLmF0dHIoXCJyb2xlXCIsXCJ0YWJsaXN0XCIpLHRoaXMuX2FkZENsYXNzKHRoaXMudGFibGlzdCxcInVpLXRhYnMtbmF2XCIsXCJ1aS1oZWxwZXItcmVzZXQgdWktaGVscGVyLWNsZWFyZml4IHVpLXdpZGdldC1oZWFkZXJcIiksdGhpcy50YWJsaXN0Lm9uKFwibW91c2Vkb3duXCIrdGhpcy5ldmVudE5hbWVzcGFjZSxcIj4gbGlcIixmdW5jdGlvbihlKXt0KHRoaXMpLmlzKFwiLnVpLXN0YXRlLWRpc2FibGVkXCIpJiZlLnByZXZlbnREZWZhdWx0KCl9KS5vbihcImZvY3VzXCIrdGhpcy5ldmVudE5hbWVzcGFjZSxcIi51aS10YWJzLWFuY2hvclwiLGZ1bmN0aW9uKCl7dCh0aGlzKS5jbG9zZXN0KFwibGlcIikuaXMoXCIudWktc3RhdGUtZGlzYWJsZWRcIikmJnRoaXMuYmx1cigpfSksdGhpcy50YWJzPXRoaXMudGFibGlzdC5maW5kKFwiPiBsaTpoYXMoYVtocmVmXSlcIikuYXR0cih7cm9sZTpcInRhYlwiLHRhYkluZGV4Oi0xfSksdGhpcy5fYWRkQ2xhc3ModGhpcy50YWJzLFwidWktdGFicy10YWJcIixcInVpLXN0YXRlLWRlZmF1bHRcIiksdGhpcy5hbmNob3JzPXRoaXMudGFicy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gdChcImFcIix0aGlzKVswXX0pLmF0dHIoe3JvbGU6XCJwcmVzZW50YXRpb25cIix0YWJJbmRleDotMX0pLHRoaXMuX2FkZENsYXNzKHRoaXMuYW5jaG9ycyxcInVpLXRhYnMtYW5jaG9yXCIpLHRoaXMucGFuZWxzPXQoKSx0aGlzLmFuY2hvcnMuZWFjaChmdW5jdGlvbihpLHMpe3ZhciBuLG8sYSxyPXQocykudW5pcXVlSWQoKS5hdHRyKFwiaWRcIiksaD10KHMpLmNsb3Nlc3QoXCJsaVwiKSxsPWguYXR0cihcImFyaWEtY29udHJvbHNcIik7ZS5faXNMb2NhbChzKT8obj1zLmhhc2gsYT1uLnN1YnN0cmluZygxKSxvPWUuZWxlbWVudC5maW5kKGUuX3Nhbml0aXplU2VsZWN0b3IobikpKTooYT1oLmF0dHIoXCJhcmlhLWNvbnRyb2xzXCIpfHx0KHt9KS51bmlxdWVJZCgpWzBdLmlkLG49XCIjXCIrYSxvPWUuZWxlbWVudC5maW5kKG4pLG8ubGVuZ3RofHwobz1lLl9jcmVhdGVQYW5lbChhKSxvLmluc2VydEFmdGVyKGUucGFuZWxzW2ktMV18fGUudGFibGlzdCkpLG8uYXR0cihcImFyaWEtbGl2ZVwiLFwicG9saXRlXCIpKSxvLmxlbmd0aCYmKGUucGFuZWxzPWUucGFuZWxzLmFkZChvKSksbCYmaC5kYXRhKFwidWktdGFicy1hcmlhLWNvbnRyb2xzXCIsbCksaC5hdHRyKHtcImFyaWEtY29udHJvbHNcIjphLFwiYXJpYS1sYWJlbGxlZGJ5XCI6cn0pLG8uYXR0cihcImFyaWEtbGFiZWxsZWRieVwiLHIpfSksdGhpcy5wYW5lbHMuYXR0cihcInJvbGVcIixcInRhYnBhbmVsXCIpLHRoaXMuX2FkZENsYXNzKHRoaXMucGFuZWxzLFwidWktdGFicy1wYW5lbFwiLFwidWktd2lkZ2V0LWNvbnRlbnRcIiksaSYmKHRoaXMuX29mZihpLm5vdCh0aGlzLnRhYnMpKSx0aGlzLl9vZmYocy5ub3QodGhpcy5hbmNob3JzKSksdGhpcy5fb2ZmKG4ubm90KHRoaXMucGFuZWxzKSkpfSxfZ2V0TGlzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnRhYmxpc3R8fHRoaXMuZWxlbWVudC5maW5kKFwib2wsIHVsXCIpLmVxKDApfSxfY3JlYXRlUGFuZWw6ZnVuY3Rpb24oZSl7cmV0dXJuIHQoXCI8ZGl2PlwiKS5hdHRyKFwiaWRcIixlKS5kYXRhKFwidWktdGFicy1kZXN0cm95XCIsITApfSxfc2V0T3B0aW9uRGlzYWJsZWQ6ZnVuY3Rpb24oZSl7dmFyIGkscyxuO2Zvcih0LmlzQXJyYXkoZSkmJihlLmxlbmd0aD9lLmxlbmd0aD09PXRoaXMuYW5jaG9ycy5sZW5ndGgmJihlPSEwKTplPSExKSxuPTA7cz10aGlzLnRhYnNbbl07bisrKWk9dChzKSxlPT09ITB8fC0xIT09dC5pbkFycmF5KG4sZSk/KGkuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIiksdGhpcy5fYWRkQ2xhc3MoaSxudWxsLFwidWktc3RhdGUtZGlzYWJsZWRcIikpOihpLnJlbW92ZUF0dHIoXCJhcmlhLWRpc2FibGVkXCIpLHRoaXMuX3JlbW92ZUNsYXNzKGksbnVsbCxcInVpLXN0YXRlLWRpc2FibGVkXCIpKTt0aGlzLm9wdGlvbnMuZGlzYWJsZWQ9ZSx0aGlzLl90b2dnbGVDbGFzcyh0aGlzLndpZGdldCgpLHRoaXMud2lkZ2V0RnVsbE5hbWUrXCItZGlzYWJsZWRcIixudWxsLGU9PT0hMCl9LF9zZXR1cEV2ZW50czpmdW5jdGlvbihlKXt2YXIgaT17fTtlJiZ0LmVhY2goZS5zcGxpdChcIiBcIiksZnVuY3Rpb24odCxlKXtpW2VdPVwiX2V2ZW50SGFuZGxlclwifSksdGhpcy5fb2ZmKHRoaXMuYW5jaG9ycy5hZGQodGhpcy50YWJzKS5hZGQodGhpcy5wYW5lbHMpKSx0aGlzLl9vbighMCx0aGlzLmFuY2hvcnMse2NsaWNrOmZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKX19KSx0aGlzLl9vbih0aGlzLmFuY2hvcnMsaSksdGhpcy5fb24odGhpcy50YWJzLHtrZXlkb3duOlwiX3RhYktleWRvd25cIn0pLHRoaXMuX29uKHRoaXMucGFuZWxzLHtrZXlkb3duOlwiX3BhbmVsS2V5ZG93blwifSksdGhpcy5fZm9jdXNhYmxlKHRoaXMudGFicyksdGhpcy5faG92ZXJhYmxlKHRoaXMudGFicyl9LF9zZXR1cEhlaWdodFN0eWxlOmZ1bmN0aW9uKGUpe3ZhciBpLHM9dGhpcy5lbGVtZW50LnBhcmVudCgpO1wiZmlsbFwiPT09ZT8oaT1zLmhlaWdodCgpLGktPXRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpLXRoaXMuZWxlbWVudC5oZWlnaHQoKSx0aGlzLmVsZW1lbnQuc2libGluZ3MoXCI6dmlzaWJsZVwiKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKSxzPWUuY3NzKFwicG9zaXRpb25cIik7XCJhYnNvbHV0ZVwiIT09cyYmXCJmaXhlZFwiIT09cyYmKGktPWUub3V0ZXJIZWlnaHQoITApKX0pLHRoaXMuZWxlbWVudC5jaGlsZHJlbigpLm5vdCh0aGlzLnBhbmVscykuZWFjaChmdW5jdGlvbigpe2ktPXQodGhpcykub3V0ZXJIZWlnaHQoITApfSksdGhpcy5wYW5lbHMuZWFjaChmdW5jdGlvbigpe3QodGhpcykuaGVpZ2h0KE1hdGgubWF4KDAsaS10KHRoaXMpLmlubmVySGVpZ2h0KCkrdCh0aGlzKS5oZWlnaHQoKSkpfSkuY3NzKFwib3ZlcmZsb3dcIixcImF1dG9cIikpOlwiYXV0b1wiPT09ZSYmKGk9MCx0aGlzLnBhbmVscy5lYWNoKGZ1bmN0aW9uKCl7aT1NYXRoLm1heChpLHQodGhpcykuaGVpZ2h0KFwiXCIpLmhlaWdodCgpKX0pLmhlaWdodChpKSl9LF9ldmVudEhhbmRsZXI6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5vcHRpb25zLHM9dGhpcy5hY3RpdmUsbj10KGUuY3VycmVudFRhcmdldCksbz1uLmNsb3Nlc3QoXCJsaVwiKSxhPW9bMF09PT1zWzBdLHI9YSYmaS5jb2xsYXBzaWJsZSxoPXI/dCgpOnRoaXMuX2dldFBhbmVsRm9yVGFiKG8pLGw9cy5sZW5ndGg/dGhpcy5fZ2V0UGFuZWxGb3JUYWIocyk6dCgpLHU9e29sZFRhYjpzLG9sZFBhbmVsOmwsbmV3VGFiOnI/dCgpOm8sbmV3UGFuZWw6aH07ZS5wcmV2ZW50RGVmYXVsdCgpLG8uaGFzQ2xhc3MoXCJ1aS1zdGF0ZS1kaXNhYmxlZFwiKXx8by5oYXNDbGFzcyhcInVpLXRhYnMtbG9hZGluZ1wiKXx8dGhpcy5ydW5uaW5nfHxhJiYhaS5jb2xsYXBzaWJsZXx8dGhpcy5fdHJpZ2dlcihcImJlZm9yZUFjdGl2YXRlXCIsZSx1KT09PSExfHwoaS5hY3RpdmU9cj8hMTp0aGlzLnRhYnMuaW5kZXgobyksdGhpcy5hY3RpdmU9YT90KCk6byx0aGlzLnhociYmdGhpcy54aHIuYWJvcnQoKSxsLmxlbmd0aHx8aC5sZW5ndGh8fHQuZXJyb3IoXCJqUXVlcnkgVUkgVGFiczogTWlzbWF0Y2hpbmcgZnJhZ21lbnQgaWRlbnRpZmllci5cIiksaC5sZW5ndGgmJnRoaXMubG9hZCh0aGlzLnRhYnMuaW5kZXgobyksZSksdGhpcy5fdG9nZ2xlKGUsdSkpfSxfdG9nZ2xlOmZ1bmN0aW9uKGUsaSl7ZnVuY3Rpb24gcygpe28ucnVubmluZz0hMSxvLl90cmlnZ2VyKFwiYWN0aXZhdGVcIixlLGkpfWZ1bmN0aW9uIG4oKXtvLl9hZGRDbGFzcyhpLm5ld1RhYi5jbG9zZXN0KFwibGlcIiksXCJ1aS10YWJzLWFjdGl2ZVwiLFwidWktc3RhdGUtYWN0aXZlXCIpLGEubGVuZ3RoJiZvLm9wdGlvbnMuc2hvdz9vLl9zaG93KGEsby5vcHRpb25zLnNob3cscyk6KGEuc2hvdygpLHMoKSl9dmFyIG89dGhpcyxhPWkubmV3UGFuZWwscj1pLm9sZFBhbmVsO3RoaXMucnVubmluZz0hMCxyLmxlbmd0aCYmdGhpcy5vcHRpb25zLmhpZGU/dGhpcy5faGlkZShyLHRoaXMub3B0aW9ucy5oaWRlLGZ1bmN0aW9uKCl7by5fcmVtb3ZlQ2xhc3MoaS5vbGRUYWIuY2xvc2VzdChcImxpXCIpLFwidWktdGFicy1hY3RpdmVcIixcInVpLXN0YXRlLWFjdGl2ZVwiKSxuKCl9KToodGhpcy5fcmVtb3ZlQ2xhc3MoaS5vbGRUYWIuY2xvc2VzdChcImxpXCIpLFwidWktdGFicy1hY3RpdmVcIixcInVpLXN0YXRlLWFjdGl2ZVwiKSxyLmhpZGUoKSxuKCkpLHIuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLGkub2xkVGFiLmF0dHIoe1wiYXJpYS1zZWxlY3RlZFwiOlwiZmFsc2VcIixcImFyaWEtZXhwYW5kZWRcIjpcImZhbHNlXCJ9KSxhLmxlbmd0aCYmci5sZW5ndGg/aS5vbGRUYWIuYXR0cihcInRhYkluZGV4XCIsLTEpOmEubGVuZ3RoJiZ0aGlzLnRhYnMuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuIDA9PT10KHRoaXMpLmF0dHIoXCJ0YWJJbmRleFwiKX0pLmF0dHIoXCJ0YWJJbmRleFwiLC0xKSxhLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIiksaS5uZXdUYWIuYXR0cih7XCJhcmlhLXNlbGVjdGVkXCI6XCJ0cnVlXCIsXCJhcmlhLWV4cGFuZGVkXCI6XCJ0cnVlXCIsdGFiSW5kZXg6MH0pfSxfYWN0aXZhdGU6ZnVuY3Rpb24oZSl7dmFyIGkscz10aGlzLl9maW5kQWN0aXZlKGUpO3NbMF0hPT10aGlzLmFjdGl2ZVswXSYmKHMubGVuZ3RofHwocz10aGlzLmFjdGl2ZSksaT1zLmZpbmQoXCIudWktdGFicy1hbmNob3JcIilbMF0sdGhpcy5fZXZlbnRIYW5kbGVyKHt0YXJnZXQ6aSxjdXJyZW50VGFyZ2V0OmkscHJldmVudERlZmF1bHQ6dC5ub29wfSkpfSxfZmluZEFjdGl2ZTpmdW5jdGlvbihlKXtyZXR1cm4gZT09PSExP3QoKTp0aGlzLnRhYnMuZXEoZSl9LF9nZXRJbmRleDpmdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9dGhpcy5hbmNob3JzLmluZGV4KHRoaXMuYW5jaG9ycy5maWx0ZXIoXCJbaHJlZiQ9J1wiK3QudWkuZXNjYXBlU2VsZWN0b3IoZSkrXCInXVwiKSkpLGV9LF9kZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy54aHImJnRoaXMueGhyLmFib3J0KCksdGhpcy50YWJsaXN0LnJlbW92ZUF0dHIoXCJyb2xlXCIpLm9mZih0aGlzLmV2ZW50TmFtZXNwYWNlKSx0aGlzLmFuY2hvcnMucmVtb3ZlQXR0cihcInJvbGUgdGFiSW5kZXhcIikucmVtb3ZlVW5pcXVlSWQoKSx0aGlzLnRhYnMuYWRkKHRoaXMucGFuZWxzKS5lYWNoKGZ1bmN0aW9uKCl7dC5kYXRhKHRoaXMsXCJ1aS10YWJzLWRlc3Ryb3lcIik/dCh0aGlzKS5yZW1vdmUoKTp0KHRoaXMpLnJlbW92ZUF0dHIoXCJyb2xlIHRhYkluZGV4IGFyaWEtbGl2ZSBhcmlhLWJ1c3kgYXJpYS1zZWxlY3RlZCBhcmlhLWxhYmVsbGVkYnkgYXJpYS1oaWRkZW4gYXJpYS1leHBhbmRlZFwiKX0pLHRoaXMudGFicy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKSxpPWUuZGF0YShcInVpLXRhYnMtYXJpYS1jb250cm9sc1wiKTtpP2UuYXR0cihcImFyaWEtY29udHJvbHNcIixpKS5yZW1vdmVEYXRhKFwidWktdGFicy1hcmlhLWNvbnRyb2xzXCIpOmUucmVtb3ZlQXR0cihcImFyaWEtY29udHJvbHNcIil9KSx0aGlzLnBhbmVscy5zaG93KCksXCJjb250ZW50XCIhPT10aGlzLm9wdGlvbnMuaGVpZ2h0U3R5bGUmJnRoaXMucGFuZWxzLmNzcyhcImhlaWdodFwiLFwiXCIpfSxlbmFibGU6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5vcHRpb25zLmRpc2FibGVkO2khPT0hMSYmKHZvaWQgMD09PWU/aT0hMTooZT10aGlzLl9nZXRJbmRleChlKSxpPXQuaXNBcnJheShpKT90Lm1hcChpLGZ1bmN0aW9uKHQpe3JldHVybiB0IT09ZT90Om51bGx9KTp0Lm1hcCh0aGlzLnRhYnMsZnVuY3Rpb24odCxpKXtyZXR1cm4gaSE9PWU/aTpudWxsfSkpLHRoaXMuX3NldE9wdGlvbkRpc2FibGVkKGkpKX0sZGlzYWJsZTpmdW5jdGlvbihlKXt2YXIgaT10aGlzLm9wdGlvbnMuZGlzYWJsZWQ7aWYoaSE9PSEwKXtpZih2b2lkIDA9PT1lKWk9ITA7ZWxzZXtpZihlPXRoaXMuX2dldEluZGV4KGUpLC0xIT09dC5pbkFycmF5KGUsaSkpcmV0dXJuO2k9dC5pc0FycmF5KGkpP3QubWVyZ2UoW2VdLGkpLnNvcnQoKTpbZV19dGhpcy5fc2V0T3B0aW9uRGlzYWJsZWQoaSl9fSxsb2FkOmZ1bmN0aW9uKGUsaSl7ZT10aGlzLl9nZXRJbmRleChlKTt2YXIgcz10aGlzLG49dGhpcy50YWJzLmVxKGUpLG89bi5maW5kKFwiLnVpLXRhYnMtYW5jaG9yXCIpLGE9dGhpcy5fZ2V0UGFuZWxGb3JUYWIobikscj17dGFiOm4scGFuZWw6YX0saD1mdW5jdGlvbih0LGUpe1wiYWJvcnRcIj09PWUmJnMucGFuZWxzLnN0b3AoITEsITApLHMuX3JlbW92ZUNsYXNzKG4sXCJ1aS10YWJzLWxvYWRpbmdcIiksYS5yZW1vdmVBdHRyKFwiYXJpYS1idXN5XCIpLHQ9PT1zLnhociYmZGVsZXRlIHMueGhyfTt0aGlzLl9pc0xvY2FsKG9bMF0pfHwodGhpcy54aHI9dC5hamF4KHRoaXMuX2FqYXhTZXR0aW5ncyhvLGkscikpLHRoaXMueGhyJiZcImNhbmNlbGVkXCIhPT10aGlzLnhoci5zdGF0dXNUZXh0JiYodGhpcy5fYWRkQ2xhc3MobixcInVpLXRhYnMtbG9hZGluZ1wiKSxhLmF0dHIoXCJhcmlhLWJ1c3lcIixcInRydWVcIiksdGhpcy54aHIuZG9uZShmdW5jdGlvbih0LGUsbil7c2V0VGltZW91dChmdW5jdGlvbigpe2EuaHRtbCh0KSxzLl90cmlnZ2VyKFwibG9hZFwiLGksciksaChuLGUpfSwxKX0pLmZhaWwoZnVuY3Rpb24odCxlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aCh0LGUpfSwxKX0pKSl9LF9hamF4U2V0dGluZ3M6ZnVuY3Rpb24oZSxpLHMpe3ZhciBuPXRoaXM7cmV0dXJue3VybDplLmF0dHIoXCJocmVmXCIpLnJlcGxhY2UoLyMuKiQvLFwiXCIpLGJlZm9yZVNlbmQ6ZnVuY3Rpb24oZSxvKXtyZXR1cm4gbi5fdHJpZ2dlcihcImJlZm9yZUxvYWRcIixpLHQuZXh0ZW5kKHtqcVhIUjplLGFqYXhTZXR0aW5nczpvfSxzKSl9fX0sX2dldFBhbmVsRm9yVGFiOmZ1bmN0aW9uKGUpe3ZhciBpPXQoZSkuYXR0cihcImFyaWEtY29udHJvbHNcIik7cmV0dXJuIHRoaXMuZWxlbWVudC5maW5kKHRoaXMuX3Nhbml0aXplU2VsZWN0b3IoXCIjXCIraSkpfX0pLHQudWlCYWNrQ29tcGF0IT09ITEmJnQud2lkZ2V0KFwidWkudGFic1wiLHQudWkudGFicyx7X3Byb2Nlc3NUYWJzOmZ1bmN0aW9uKCl7dGhpcy5fc3VwZXJBcHBseShhcmd1bWVudHMpLHRoaXMuX2FkZENsYXNzKHRoaXMudGFicyxcInVpLXRhYlwiKX19KSx0LnVpLnRhYnMsdC53aWRnZXQoXCJ1aS50b29sdGlwXCIse3ZlcnNpb246XCIxLjEyLjFcIixvcHRpb25zOntjbGFzc2VzOntcInVpLXRvb2x0aXBcIjpcInVpLWNvcm5lci1hbGwgdWktd2lkZ2V0LXNoYWRvd1wifSxjb250ZW50OmZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKS5hdHRyKFwidGl0bGVcIil8fFwiXCI7cmV0dXJuIHQoXCI8YT5cIikudGV4dChlKS5odG1sKCl9LGhpZGU6ITAsaXRlbXM6XCJbdGl0bGVdOm5vdChbZGlzYWJsZWRdKVwiLHBvc2l0aW9uOntteTpcImxlZnQgdG9wKzE1XCIsYXQ6XCJsZWZ0IGJvdHRvbVwiLGNvbGxpc2lvbjpcImZsaXBmaXQgZmxpcFwifSxzaG93OiEwLHRyYWNrOiExLGNsb3NlOm51bGwsb3BlbjpudWxsfSxfYWRkRGVzY3JpYmVkQnk6ZnVuY3Rpb24oZSxpKXt2YXIgcz0oZS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiKXx8XCJcIikuc3BsaXQoL1xccysvKTtzLnB1c2goaSksZS5kYXRhKFwidWktdG9vbHRpcC1pZFwiLGkpLmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIsdC50cmltKHMuam9pbihcIiBcIikpKX0sX3JlbW92ZURlc2NyaWJlZEJ5OmZ1bmN0aW9uKGUpe3ZhciBpPWUuZGF0YShcInVpLXRvb2x0aXAtaWRcIikscz0oZS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiKXx8XCJcIikuc3BsaXQoL1xccysvKSxuPXQuaW5BcnJheShpLHMpOy0xIT09biYmcy5zcGxpY2UobiwxKSxlLnJlbW92ZURhdGEoXCJ1aS10b29sdGlwLWlkXCIpLHM9dC50cmltKHMuam9pbihcIiBcIikpLHM/ZS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLHMpOmUucmVtb3ZlQXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIil9LF9jcmVhdGU6ZnVuY3Rpb24oKXt0aGlzLl9vbih7bW91c2VvdmVyOlwib3BlblwiLGZvY3VzaW46XCJvcGVuXCJ9KSx0aGlzLnRvb2x0aXBzPXt9LHRoaXMucGFyZW50cz17fSx0aGlzLmxpdmVSZWdpb249dChcIjxkaXY+XCIpLmF0dHIoe3JvbGU6XCJsb2dcIixcImFyaWEtbGl2ZVwiOlwiYXNzZXJ0aXZlXCIsXCJhcmlhLXJlbGV2YW50XCI6XCJhZGRpdGlvbnNcIn0pLmFwcGVuZFRvKHRoaXMuZG9jdW1lbnRbMF0uYm9keSksdGhpcy5fYWRkQ2xhc3ModGhpcy5saXZlUmVnaW9uLG51bGwsXCJ1aS1oZWxwZXItaGlkZGVuLWFjY2Vzc2libGVcIiksdGhpcy5kaXNhYmxlZFRpdGxlcz10KFtdKX0sX3NldE9wdGlvbjpmdW5jdGlvbihlLGkpe3ZhciBzPXRoaXM7dGhpcy5fc3VwZXIoZSxpKSxcImNvbnRlbnRcIj09PWUmJnQuZWFjaCh0aGlzLnRvb2x0aXBzLGZ1bmN0aW9uKHQsZSl7cy5fdXBkYXRlQ29udGVudChlLmVsZW1lbnQpfSl9LF9zZXRPcHRpb25EaXNhYmxlZDpmdW5jdGlvbih0KXt0aGlzW3Q/XCJfZGlzYWJsZVwiOlwiX2VuYWJsZVwiXSgpfSxfZGlzYWJsZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dC5lYWNoKHRoaXMudG9vbHRpcHMsZnVuY3Rpb24oaSxzKXt2YXIgbj10LkV2ZW50KFwiYmx1clwiKTtuLnRhcmdldD1uLmN1cnJlbnRUYXJnZXQ9cy5lbGVtZW50WzBdLGUuY2xvc2UobiwhMCl9KSx0aGlzLmRpc2FibGVkVGl0bGVzPXRoaXMuZGlzYWJsZWRUaXRsZXMuYWRkKHRoaXMuZWxlbWVudC5maW5kKHRoaXMub3B0aW9ucy5pdGVtcykuYWRkQmFjaygpLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXQodGhpcyk7cmV0dXJuIGUuaXMoXCJbdGl0bGVdXCIpP2UuZGF0YShcInVpLXRvb2x0aXAtdGl0bGVcIixlLmF0dHIoXCJ0aXRsZVwiKSkucmVtb3ZlQXR0cihcInRpdGxlXCIpOnZvaWQgMH0pKX0sX2VuYWJsZTpmdW5jdGlvbigpe3RoaXMuZGlzYWJsZWRUaXRsZXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPXQodGhpcyk7ZS5kYXRhKFwidWktdG9vbHRpcC10aXRsZVwiKSYmZS5hdHRyKFwidGl0bGVcIixlLmRhdGEoXCJ1aS10b29sdGlwLXRpdGxlXCIpKX0pLHRoaXMuZGlzYWJsZWRUaXRsZXM9dChbXSl9LG9wZW46ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcyxzPXQoZT9lLnRhcmdldDp0aGlzLmVsZW1lbnQpLmNsb3Nlc3QodGhpcy5vcHRpb25zLml0ZW1zKTtzLmxlbmd0aCYmIXMuZGF0YShcInVpLXRvb2x0aXAtaWRcIikmJihzLmF0dHIoXCJ0aXRsZVwiKSYmcy5kYXRhKFwidWktdG9vbHRpcC10aXRsZVwiLHMuYXR0cihcInRpdGxlXCIpKSxzLmRhdGEoXCJ1aS10b29sdGlwLW9wZW5cIiwhMCksZSYmXCJtb3VzZW92ZXJcIj09PWUudHlwZSYmcy5wYXJlbnRzKCkuZWFjaChmdW5jdGlvbigpe3ZhciBlLHM9dCh0aGlzKTtzLmRhdGEoXCJ1aS10b29sdGlwLW9wZW5cIikmJihlPXQuRXZlbnQoXCJibHVyXCIpLGUudGFyZ2V0PWUuY3VycmVudFRhcmdldD10aGlzLGkuY2xvc2UoZSwhMCkpLHMuYXR0cihcInRpdGxlXCIpJiYocy51bmlxdWVJZCgpLGkucGFyZW50c1t0aGlzLmlkXT17ZWxlbWVudDp0aGlzLHRpdGxlOnMuYXR0cihcInRpdGxlXCIpfSxzLmF0dHIoXCJ0aXRsZVwiLFwiXCIpKX0pLHRoaXMuX3JlZ2lzdGVyQ2xvc2VIYW5kbGVycyhlLHMpLHRoaXMuX3VwZGF0ZUNvbnRlbnQocyxlKSl9LF91cGRhdGVDb250ZW50OmZ1bmN0aW9uKHQsZSl7dmFyIGkscz10aGlzLm9wdGlvbnMuY29udGVudCxuPXRoaXMsbz1lP2UudHlwZTpudWxsO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBzfHxzLm5vZGVUeXBlfHxzLmpxdWVyeT90aGlzLl9vcGVuKGUsdCxzKTooaT1zLmNhbGwodFswXSxmdW5jdGlvbihpKXtuLl9kZWxheShmdW5jdGlvbigpe3QuZGF0YShcInVpLXRvb2x0aXAtb3BlblwiKSYmKGUmJihlLnR5cGU9byksdGhpcy5fb3BlbihlLHQsaSkpfSl9KSxpJiZ0aGlzLl9vcGVuKGUsdCxpKSx2b2lkIDApfSxfb3BlbjpmdW5jdGlvbihlLGkscyl7ZnVuY3Rpb24gbih0KXtsLm9mPXQsYS5pcyhcIjpoaWRkZW5cIil8fGEucG9zaXRpb24obCl9dmFyIG8sYSxyLGgsbD10LmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMucG9zaXRpb24pO2lmKHMpe2lmKG89dGhpcy5fZmluZChpKSlyZXR1cm4gby50b29sdGlwLmZpbmQoXCIudWktdG9vbHRpcC1jb250ZW50XCIpLmh0bWwocyksdm9pZCAwO2kuaXMoXCJbdGl0bGVdXCIpJiYoZSYmXCJtb3VzZW92ZXJcIj09PWUudHlwZT9pLmF0dHIoXCJ0aXRsZVwiLFwiXCIpOmkucmVtb3ZlQXR0cihcInRpdGxlXCIpKSxvPXRoaXMuX3Rvb2x0aXAoaSksYT1vLnRvb2x0aXAsdGhpcy5fYWRkRGVzY3JpYmVkQnkoaSxhLmF0dHIoXCJpZFwiKSksYS5maW5kKFwiLnVpLXRvb2x0aXAtY29udGVudFwiKS5odG1sKHMpLHRoaXMubGl2ZVJlZ2lvbi5jaGlsZHJlbigpLmhpZGUoKSxoPXQoXCI8ZGl2PlwiKS5odG1sKGEuZmluZChcIi51aS10b29sdGlwLWNvbnRlbnRcIikuaHRtbCgpKSxoLnJlbW92ZUF0dHIoXCJuYW1lXCIpLmZpbmQoXCJbbmFtZV1cIikucmVtb3ZlQXR0cihcIm5hbWVcIiksaC5yZW1vdmVBdHRyKFwiaWRcIikuZmluZChcIltpZF1cIikucmVtb3ZlQXR0cihcImlkXCIpLGguYXBwZW5kVG8odGhpcy5saXZlUmVnaW9uKSx0aGlzLm9wdGlvbnMudHJhY2smJmUmJi9ebW91c2UvLnRlc3QoZS50eXBlKT8odGhpcy5fb24odGhpcy5kb2N1bWVudCx7bW91c2Vtb3ZlOm59KSxuKGUpKTphLnBvc2l0aW9uKHQuZXh0ZW5kKHtvZjppfSx0aGlzLm9wdGlvbnMucG9zaXRpb24pKSxhLmhpZGUoKSx0aGlzLl9zaG93KGEsdGhpcy5vcHRpb25zLnNob3cpLHRoaXMub3B0aW9ucy50cmFjayYmdGhpcy5vcHRpb25zLnNob3cmJnRoaXMub3B0aW9ucy5zaG93LmRlbGF5JiYocj10aGlzLmRlbGF5ZWRTaG93PXNldEludGVydmFsKGZ1bmN0aW9uKCl7YS5pcyhcIjp2aXNpYmxlXCIpJiYobihsLm9mKSxjbGVhckludGVydmFsKHIpKX0sdC5meC5pbnRlcnZhbCkpLHRoaXMuX3RyaWdnZXIoXCJvcGVuXCIsZSx7dG9vbHRpcDphfSl9fSxfcmVnaXN0ZXJDbG9zZUhhbmRsZXJzOmZ1bmN0aW9uKGUsaSl7dmFyIHM9e2tleXVwOmZ1bmN0aW9uKGUpe2lmKGUua2V5Q29kZT09PXQudWkua2V5Q29kZS5FU0NBUEUpe3ZhciBzPXQuRXZlbnQoZSk7cy5jdXJyZW50VGFyZ2V0PWlbMF0sdGhpcy5jbG9zZShzLCEwKX19fTtpWzBdIT09dGhpcy5lbGVtZW50WzBdJiYocy5yZW1vdmU9ZnVuY3Rpb24oKXt0aGlzLl9yZW1vdmVUb29sdGlwKHRoaXMuX2ZpbmQoaSkudG9vbHRpcCl9KSxlJiZcIm1vdXNlb3ZlclwiIT09ZS50eXBlfHwocy5tb3VzZWxlYXZlPVwiY2xvc2VcIiksZSYmXCJmb2N1c2luXCIhPT1lLnR5cGV8fChzLmZvY3Vzb3V0PVwiY2xvc2VcIiksdGhpcy5fb24oITAsaSxzKX0sY2xvc2U6ZnVuY3Rpb24oZSl7dmFyIGkscz10aGlzLG49dChlP2UuY3VycmVudFRhcmdldDp0aGlzLmVsZW1lbnQpLG89dGhpcy5fZmluZChuKTtyZXR1cm4gbz8oaT1vLnRvb2x0aXAsby5jbG9zaW5nfHwoY2xlYXJJbnRlcnZhbCh0aGlzLmRlbGF5ZWRTaG93KSxuLmRhdGEoXCJ1aS10b29sdGlwLXRpdGxlXCIpJiYhbi5hdHRyKFwidGl0bGVcIikmJm4uYXR0cihcInRpdGxlXCIsbi5kYXRhKFwidWktdG9vbHRpcC10aXRsZVwiKSksdGhpcy5fcmVtb3ZlRGVzY3JpYmVkQnkobiksby5oaWRpbmc9ITAsaS5zdG9wKCEwKSx0aGlzLl9oaWRlKGksdGhpcy5vcHRpb25zLmhpZGUsZnVuY3Rpb24oKXtzLl9yZW1vdmVUb29sdGlwKHQodGhpcykpfSksbi5yZW1vdmVEYXRhKFwidWktdG9vbHRpcC1vcGVuXCIpLHRoaXMuX29mZihuLFwibW91c2VsZWF2ZSBmb2N1c291dCBrZXl1cFwiKSxuWzBdIT09dGhpcy5lbGVtZW50WzBdJiZ0aGlzLl9vZmYobixcInJlbW92ZVwiKSx0aGlzLl9vZmYodGhpcy5kb2N1bWVudCxcIm1vdXNlbW92ZVwiKSxlJiZcIm1vdXNlbGVhdmVcIj09PWUudHlwZSYmdC5lYWNoKHRoaXMucGFyZW50cyxmdW5jdGlvbihlLGkpe3QoaS5lbGVtZW50KS5hdHRyKFwidGl0bGVcIixpLnRpdGxlKSxkZWxldGUgcy5wYXJlbnRzW2VdXG59KSxvLmNsb3Npbmc9ITAsdGhpcy5fdHJpZ2dlcihcImNsb3NlXCIsZSx7dG9vbHRpcDppfSksby5oaWRpbmd8fChvLmNsb3Npbmc9ITEpKSx2b2lkIDApOihuLnJlbW92ZURhdGEoXCJ1aS10b29sdGlwLW9wZW5cIiksdm9pZCAwKX0sX3Rvb2x0aXA6ZnVuY3Rpb24oZSl7dmFyIGk9dChcIjxkaXY+XCIpLmF0dHIoXCJyb2xlXCIsXCJ0b29sdGlwXCIpLHM9dChcIjxkaXY+XCIpLmFwcGVuZFRvKGkpLG49aS51bmlxdWVJZCgpLmF0dHIoXCJpZFwiKTtyZXR1cm4gdGhpcy5fYWRkQ2xhc3MocyxcInVpLXRvb2x0aXAtY29udGVudFwiKSx0aGlzLl9hZGRDbGFzcyhpLFwidWktdG9vbHRpcFwiLFwidWktd2lkZ2V0IHVpLXdpZGdldC1jb250ZW50XCIpLGkuYXBwZW5kVG8odGhpcy5fYXBwZW5kVG8oZSkpLHRoaXMudG9vbHRpcHNbbl09e2VsZW1lbnQ6ZSx0b29sdGlwOml9fSxfZmluZDpmdW5jdGlvbih0KXt2YXIgZT10LmRhdGEoXCJ1aS10b29sdGlwLWlkXCIpO3JldHVybiBlP3RoaXMudG9vbHRpcHNbZV06bnVsbH0sX3JlbW92ZVRvb2x0aXA6ZnVuY3Rpb24odCl7dC5yZW1vdmUoKSxkZWxldGUgdGhpcy50b29sdGlwc1t0LmF0dHIoXCJpZFwiKV19LF9hcHBlbmRUbzpmdW5jdGlvbih0KXt2YXIgZT10LmNsb3Nlc3QoXCIudWktZnJvbnQsIGRpYWxvZ1wiKTtyZXR1cm4gZS5sZW5ndGh8fChlPXRoaXMuZG9jdW1lbnRbMF0uYm9keSksZX0sX2Rlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3QuZWFjaCh0aGlzLnRvb2x0aXBzLGZ1bmN0aW9uKGkscyl7dmFyIG49dC5FdmVudChcImJsdXJcIiksbz1zLmVsZW1lbnQ7bi50YXJnZXQ9bi5jdXJyZW50VGFyZ2V0PW9bMF0sZS5jbG9zZShuLCEwKSx0KFwiI1wiK2kpLnJlbW92ZSgpLG8uZGF0YShcInVpLXRvb2x0aXAtdGl0bGVcIikmJihvLmF0dHIoXCJ0aXRsZVwiKXx8by5hdHRyKFwidGl0bGVcIixvLmRhdGEoXCJ1aS10b29sdGlwLXRpdGxlXCIpKSxvLnJlbW92ZURhdGEoXCJ1aS10b29sdGlwLXRpdGxlXCIpKX0pLHRoaXMubGl2ZVJlZ2lvbi5yZW1vdmUoKX19KSx0LnVpQmFja0NvbXBhdCE9PSExJiZ0LndpZGdldChcInVpLnRvb2x0aXBcIix0LnVpLnRvb2x0aXAse29wdGlvbnM6e3Rvb2x0aXBDbGFzczpudWxsfSxfdG9vbHRpcDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3N1cGVyQXBwbHkoYXJndW1lbnRzKTtyZXR1cm4gdGhpcy5vcHRpb25zLnRvb2x0aXBDbGFzcyYmdC50b29sdGlwLmFkZENsYXNzKHRoaXMub3B0aW9ucy50b29sdGlwQ2xhc3MpLHR9fSksdC51aS50b29sdGlwO3ZhciBmPVwidWktZWZmZWN0cy1cIixtPVwidWktZWZmZWN0cy1zdHlsZVwiLGc9XCJ1aS1lZmZlY3RzLWFuaW1hdGVkXCIsXz10O3QuZWZmZWN0cz17ZWZmZWN0Ont9fSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIGkodCxlLGkpe3ZhciBzPWNbZS50eXBlXXx8e307cmV0dXJuIG51bGw9PXQ/aXx8IWUuZGVmP251bGw6ZS5kZWY6KHQ9cy5mbG9vcj9+fnQ6cGFyc2VGbG9hdCh0KSxpc05hTih0KT9lLmRlZjpzLm1vZD8odCtzLm1vZCklcy5tb2Q6MD50PzA6dD5zLm1heD9zLm1heDp0KX1mdW5jdGlvbiBzKGkpe3ZhciBzPWwoKSxuPXMuX3JnYmE9W107cmV0dXJuIGk9aS50b0xvd2VyQ2FzZSgpLGYoaCxmdW5jdGlvbih0LG8pe3ZhciBhLHI9by5yZS5leGVjKGkpLGg9ciYmby5wYXJzZShyKSxsPW8uc3BhY2V8fFwicmdiYVwiO3JldHVybiBoPyhhPXNbbF0oaCksc1t1W2xdLmNhY2hlXT1hW3VbbF0uY2FjaGVdLG49cy5fcmdiYT1hLl9yZ2JhLCExKTplfSksbi5sZW5ndGg/KFwiMCwwLDAsMFwiPT09bi5qb2luKCkmJnQuZXh0ZW5kKG4sby50cmFuc3BhcmVudCkscyk6b1tpXX1mdW5jdGlvbiBuKHQsZSxpKXtyZXR1cm4gaT0oaSsxKSUxLDE+NippP3QrNiooZS10KSppOjE+MippP2U6Mj4zKmk/dCs2KihlLXQpKigyLzMtaSk6dH12YXIgbyxhPVwiYmFja2dyb3VuZENvbG9yIGJvcmRlckJvdHRvbUNvbG9yIGJvcmRlckxlZnRDb2xvciBib3JkZXJSaWdodENvbG9yIGJvcmRlclRvcENvbG9yIGNvbG9yIGNvbHVtblJ1bGVDb2xvciBvdXRsaW5lQ29sb3IgdGV4dERlY29yYXRpb25Db2xvciB0ZXh0RW1waGFzaXNDb2xvclwiLHI9L14oW1xcLStdKT1cXHMqKFxcZCtcXC4/XFxkKikvLGg9W3tyZTovcmdiYT9cXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKig/OixcXHMqKFxcZD8oPzpcXC5cXGQrKT8pXFxzKik/XFwpLyxwYXJzZTpmdW5jdGlvbih0KXtyZXR1cm5bdFsxXSx0WzJdLHRbM10sdFs0XV19fSx7cmU6L3JnYmE/XFwoXFxzKihcXGQrKD86XFwuXFxkKyk/KVxcJVxccyosXFxzKihcXGQrKD86XFwuXFxkKyk/KVxcJVxccyosXFxzKihcXGQrKD86XFwuXFxkKyk/KVxcJVxccyooPzosXFxzKihcXGQ/KD86XFwuXFxkKyk/KVxccyopP1xcKS8scGFyc2U6ZnVuY3Rpb24odCl7cmV0dXJuWzIuNTUqdFsxXSwyLjU1KnRbMl0sMi41NSp0WzNdLHRbNF1dfX0se3JlOi8jKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pLyxwYXJzZTpmdW5jdGlvbih0KXtyZXR1cm5bcGFyc2VJbnQodFsxXSwxNikscGFyc2VJbnQodFsyXSwxNikscGFyc2VJbnQodFszXSwxNildfX0se3JlOi8jKFthLWYwLTldKShbYS1mMC05XSkoW2EtZjAtOV0pLyxwYXJzZTpmdW5jdGlvbih0KXtyZXR1cm5bcGFyc2VJbnQodFsxXSt0WzFdLDE2KSxwYXJzZUludCh0WzJdK3RbMl0sMTYpLHBhcnNlSW50KHRbM10rdFszXSwxNildfX0se3JlOi9oc2xhP1xcKFxccyooXFxkKyg/OlxcLlxcZCspPylcXHMqLFxccyooXFxkKyg/OlxcLlxcZCspPylcXCVcXHMqLFxccyooXFxkKyg/OlxcLlxcZCspPylcXCVcXHMqKD86LFxccyooXFxkPyg/OlxcLlxcZCspPylcXHMqKT9cXCkvLHNwYWNlOlwiaHNsYVwiLHBhcnNlOmZ1bmN0aW9uKHQpe3JldHVyblt0WzFdLHRbMl0vMTAwLHRbM10vMTAwLHRbNF1dfX1dLGw9dC5Db2xvcj1mdW5jdGlvbihlLGkscyxuKXtyZXR1cm4gbmV3IHQuQ29sb3IuZm4ucGFyc2UoZSxpLHMsbil9LHU9e3JnYmE6e3Byb3BzOntyZWQ6e2lkeDowLHR5cGU6XCJieXRlXCJ9LGdyZWVuOntpZHg6MSx0eXBlOlwiYnl0ZVwifSxibHVlOntpZHg6Mix0eXBlOlwiYnl0ZVwifX19LGhzbGE6e3Byb3BzOntodWU6e2lkeDowLHR5cGU6XCJkZWdyZWVzXCJ9LHNhdHVyYXRpb246e2lkeDoxLHR5cGU6XCJwZXJjZW50XCJ9LGxpZ2h0bmVzczp7aWR4OjIsdHlwZTpcInBlcmNlbnRcIn19fX0sYz17XCJieXRlXCI6e2Zsb29yOiEwLG1heDoyNTV9LHBlcmNlbnQ6e21heDoxfSxkZWdyZWVzOnttb2Q6MzYwLGZsb29yOiEwfX0sZD1sLnN1cHBvcnQ9e30scD10KFwiPHA+XCIpWzBdLGY9dC5lYWNoO3Auc3R5bGUuY3NzVGV4dD1cImJhY2tncm91bmQtY29sb3I6cmdiYSgxLDEsMSwuNSlcIixkLnJnYmE9cC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IuaW5kZXhPZihcInJnYmFcIik+LTEsZih1LGZ1bmN0aW9uKHQsZSl7ZS5jYWNoZT1cIl9cIit0LGUucHJvcHMuYWxwaGE9e2lkeDozLHR5cGU6XCJwZXJjZW50XCIsZGVmOjF9fSksbC5mbj10LmV4dGVuZChsLnByb3RvdHlwZSx7cGFyc2U6ZnVuY3Rpb24obixhLHIsaCl7aWYobj09PWUpcmV0dXJuIHRoaXMuX3JnYmE9W251bGwsbnVsbCxudWxsLG51bGxdLHRoaXM7KG4uanF1ZXJ5fHxuLm5vZGVUeXBlKSYmKG49dChuKS5jc3MoYSksYT1lKTt2YXIgYz10aGlzLGQ9dC50eXBlKG4pLHA9dGhpcy5fcmdiYT1bXTtyZXR1cm4gYSE9PWUmJihuPVtuLGEscixoXSxkPVwiYXJyYXlcIiksXCJzdHJpbmdcIj09PWQ/dGhpcy5wYXJzZShzKG4pfHxvLl9kZWZhdWx0KTpcImFycmF5XCI9PT1kPyhmKHUucmdiYS5wcm9wcyxmdW5jdGlvbih0LGUpe3BbZS5pZHhdPWkobltlLmlkeF0sZSl9KSx0aGlzKTpcIm9iamVjdFwiPT09ZD8obiBpbnN0YW5jZW9mIGw/Zih1LGZ1bmN0aW9uKHQsZSl7bltlLmNhY2hlXSYmKGNbZS5jYWNoZV09bltlLmNhY2hlXS5zbGljZSgpKX0pOmYodSxmdW5jdGlvbihlLHMpe3ZhciBvPXMuY2FjaGU7ZihzLnByb3BzLGZ1bmN0aW9uKHQsZSl7aWYoIWNbb10mJnMudG8pe2lmKFwiYWxwaGFcIj09PXR8fG51bGw9PW5bdF0pcmV0dXJuO2Nbb109cy50byhjLl9yZ2JhKX1jW29dW2UuaWR4XT1pKG5bdF0sZSwhMCl9KSxjW29dJiYwPnQuaW5BcnJheShudWxsLGNbb10uc2xpY2UoMCwzKSkmJihjW29dWzNdPTEscy5mcm9tJiYoYy5fcmdiYT1zLmZyb20oY1tvXSkpKX0pLHRoaXMpOmV9LGlzOmZ1bmN0aW9uKHQpe3ZhciBpPWwodCkscz0hMCxuPXRoaXM7cmV0dXJuIGYodSxmdW5jdGlvbih0LG8pe3ZhciBhLHI9aVtvLmNhY2hlXTtyZXR1cm4gciYmKGE9bltvLmNhY2hlXXx8by50byYmby50byhuLl9yZ2JhKXx8W10sZihvLnByb3BzLGZ1bmN0aW9uKHQsaSl7cmV0dXJuIG51bGwhPXJbaS5pZHhdP3M9cltpLmlkeF09PT1hW2kuaWR4XTplfSkpLHN9KSxzfSxfc3BhY2U6ZnVuY3Rpb24oKXt2YXIgdD1bXSxlPXRoaXM7cmV0dXJuIGYodSxmdW5jdGlvbihpLHMpe2Vbcy5jYWNoZV0mJnQucHVzaChpKX0pLHQucG9wKCl9LHRyYW5zaXRpb246ZnVuY3Rpb24odCxlKXt2YXIgcz1sKHQpLG49cy5fc3BhY2UoKSxvPXVbbl0sYT0wPT09dGhpcy5hbHBoYSgpP2woXCJ0cmFuc3BhcmVudFwiKTp0aGlzLHI9YVtvLmNhY2hlXXx8by50byhhLl9yZ2JhKSxoPXIuc2xpY2UoKTtyZXR1cm4gcz1zW28uY2FjaGVdLGYoby5wcm9wcyxmdW5jdGlvbih0LG4pe3ZhciBvPW4uaWR4LGE9cltvXSxsPXNbb10sdT1jW24udHlwZV18fHt9O251bGwhPT1sJiYobnVsbD09PWE/aFtvXT1sOih1Lm1vZCYmKGwtYT51Lm1vZC8yP2ErPXUubW9kOmEtbD51Lm1vZC8yJiYoYS09dS5tb2QpKSxoW29dPWkoKGwtYSkqZSthLG4pKSl9KSx0aGlzW25dKGgpfSxibGVuZDpmdW5jdGlvbihlKXtpZigxPT09dGhpcy5fcmdiYVszXSlyZXR1cm4gdGhpczt2YXIgaT10aGlzLl9yZ2JhLnNsaWNlKCkscz1pLnBvcCgpLG49bChlKS5fcmdiYTtyZXR1cm4gbCh0Lm1hcChpLGZ1bmN0aW9uKHQsZSl7cmV0dXJuKDEtcykqbltlXStzKnR9KSl9LHRvUmdiYVN0cmluZzpmdW5jdGlvbigpe3ZhciBlPVwicmdiYShcIixpPXQubWFwKHRoaXMuX3JnYmEsZnVuY3Rpb24odCxlKXtyZXR1cm4gbnVsbD09dD9lPjI/MTowOnR9KTtyZXR1cm4gMT09PWlbM10mJihpLnBvcCgpLGU9XCJyZ2IoXCIpLGUraS5qb2luKCkrXCIpXCJ9LHRvSHNsYVN0cmluZzpmdW5jdGlvbigpe3ZhciBlPVwiaHNsYShcIixpPXQubWFwKHRoaXMuaHNsYSgpLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIG51bGw9PXQmJih0PWU+Mj8xOjApLGUmJjM+ZSYmKHQ9TWF0aC5yb3VuZCgxMDAqdCkrXCIlXCIpLHR9KTtyZXR1cm4gMT09PWlbM10mJihpLnBvcCgpLGU9XCJoc2woXCIpLGUraS5qb2luKCkrXCIpXCJ9LHRvSGV4U3RyaW5nOmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMuX3JnYmEuc2xpY2UoKSxzPWkucG9wKCk7cmV0dXJuIGUmJmkucHVzaCh+figyNTUqcykpLFwiI1wiK3QubWFwKGksZnVuY3Rpb24odCl7cmV0dXJuIHQ9KHR8fDApLnRvU3RyaW5nKDE2KSwxPT09dC5sZW5ndGg/XCIwXCIrdDp0fSkuam9pbihcIlwiKX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gMD09PXRoaXMuX3JnYmFbM10/XCJ0cmFuc3BhcmVudFwiOnRoaXMudG9SZ2JhU3RyaW5nKCl9fSksbC5mbi5wYXJzZS5wcm90b3R5cGU9bC5mbix1LmhzbGEudG89ZnVuY3Rpb24odCl7aWYobnVsbD09dFswXXx8bnVsbD09dFsxXXx8bnVsbD09dFsyXSlyZXR1cm5bbnVsbCxudWxsLG51bGwsdFszXV07dmFyIGUsaSxzPXRbMF0vMjU1LG49dFsxXS8yNTUsbz10WzJdLzI1NSxhPXRbM10scj1NYXRoLm1heChzLG4sbyksaD1NYXRoLm1pbihzLG4sbyksbD1yLWgsdT1yK2gsYz0uNSp1O3JldHVybiBlPWg9PT1yPzA6cz09PXI/NjAqKG4tbykvbCszNjA6bj09PXI/NjAqKG8tcykvbCsxMjA6NjAqKHMtbikvbCsyNDAsaT0wPT09bD8wOi41Pj1jP2wvdTpsLygyLXUpLFtNYXRoLnJvdW5kKGUpJTM2MCxpLGMsbnVsbD09YT8xOmFdfSx1LmhzbGEuZnJvbT1mdW5jdGlvbih0KXtpZihudWxsPT10WzBdfHxudWxsPT10WzFdfHxudWxsPT10WzJdKXJldHVybltudWxsLG51bGwsbnVsbCx0WzNdXTt2YXIgZT10WzBdLzM2MCxpPXRbMV0scz10WzJdLG89dFszXSxhPS41Pj1zP3MqKDEraSk6cytpLXMqaSxyPTIqcy1hO3JldHVybltNYXRoLnJvdW5kKDI1NSpuKHIsYSxlKzEvMykpLE1hdGgucm91bmQoMjU1Km4ocixhLGUpKSxNYXRoLnJvdW5kKDI1NSpuKHIsYSxlLTEvMykpLG9dfSxmKHUsZnVuY3Rpb24ocyxuKXt2YXIgbz1uLnByb3BzLGE9bi5jYWNoZSxoPW4udG8sdT1uLmZyb207bC5mbltzXT1mdW5jdGlvbihzKXtpZihoJiYhdGhpc1thXSYmKHRoaXNbYV09aCh0aGlzLl9yZ2JhKSkscz09PWUpcmV0dXJuIHRoaXNbYV0uc2xpY2UoKTt2YXIgbixyPXQudHlwZShzKSxjPVwiYXJyYXlcIj09PXJ8fFwib2JqZWN0XCI9PT1yP3M6YXJndW1lbnRzLGQ9dGhpc1thXS5zbGljZSgpO3JldHVybiBmKG8sZnVuY3Rpb24odCxlKXt2YXIgcz1jW1wib2JqZWN0XCI9PT1yP3Q6ZS5pZHhdO251bGw9PXMmJihzPWRbZS5pZHhdKSxkW2UuaWR4XT1pKHMsZSl9KSx1PyhuPWwodShkKSksblthXT1kLG4pOmwoZCl9LGYobyxmdW5jdGlvbihlLGkpe2wuZm5bZV18fChsLmZuW2VdPWZ1bmN0aW9uKG4pe3ZhciBvLGE9dC50eXBlKG4pLGg9XCJhbHBoYVwiPT09ZT90aGlzLl9oc2xhP1wiaHNsYVwiOlwicmdiYVwiOnMsbD10aGlzW2hdKCksdT1sW2kuaWR4XTtyZXR1cm5cInVuZGVmaW5lZFwiPT09YT91OihcImZ1bmN0aW9uXCI9PT1hJiYobj1uLmNhbGwodGhpcyx1KSxhPXQudHlwZShuKSksbnVsbD09biYmaS5lbXB0eT90aGlzOihcInN0cmluZ1wiPT09YSYmKG89ci5leGVjKG4pLG8mJihuPXUrcGFyc2VGbG9hdChvWzJdKSooXCIrXCI9PT1vWzFdPzE6LTEpKSksbFtpLmlkeF09bix0aGlzW2hdKGwpKSl9KX0pfSksbC5ob29rPWZ1bmN0aW9uKGUpe3ZhciBpPWUuc3BsaXQoXCIgXCIpO2YoaSxmdW5jdGlvbihlLGkpe3QuY3NzSG9va3NbaV09e3NldDpmdW5jdGlvbihlLG4pe3ZhciBvLGEscj1cIlwiO2lmKFwidHJhbnNwYXJlbnRcIiE9PW4mJihcInN0cmluZ1wiIT09dC50eXBlKG4pfHwobz1zKG4pKSkpe2lmKG49bChvfHxuKSwhZC5yZ2JhJiYxIT09bi5fcmdiYVszXSl7Zm9yKGE9XCJiYWNrZ3JvdW5kQ29sb3JcIj09PWk/ZS5wYXJlbnROb2RlOmU7KFwiXCI9PT1yfHxcInRyYW5zcGFyZW50XCI9PT1yKSYmYSYmYS5zdHlsZTspdHJ5e3I9dC5jc3MoYSxcImJhY2tncm91bmRDb2xvclwiKSxhPWEucGFyZW50Tm9kZX1jYXRjaChoKXt9bj1uLmJsZW5kKHImJlwidHJhbnNwYXJlbnRcIiE9PXI/cjpcIl9kZWZhdWx0XCIpfW49bi50b1JnYmFTdHJpbmcoKX10cnl7ZS5zdHlsZVtpXT1ufWNhdGNoKGgpe319fSx0LmZ4LnN0ZXBbaV09ZnVuY3Rpb24oZSl7ZS5jb2xvckluaXR8fChlLnN0YXJ0PWwoZS5lbGVtLGkpLGUuZW5kPWwoZS5lbmQpLGUuY29sb3JJbml0PSEwKSx0LmNzc0hvb2tzW2ldLnNldChlLmVsZW0sZS5zdGFydC50cmFuc2l0aW9uKGUuZW5kLGUucG9zKSl9fSl9LGwuaG9vayhhKSx0LmNzc0hvb2tzLmJvcmRlckNvbG9yPXtleHBhbmQ6ZnVuY3Rpb24odCl7dmFyIGU9e307cmV0dXJuIGYoW1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLGZ1bmN0aW9uKGkscyl7ZVtcImJvcmRlclwiK3MrXCJDb2xvclwiXT10fSksZX19LG89dC5Db2xvci5uYW1lcz17YXF1YTpcIiMwMGZmZmZcIixibGFjazpcIiMwMDAwMDBcIixibHVlOlwiIzAwMDBmZlwiLGZ1Y2hzaWE6XCIjZmYwMGZmXCIsZ3JheTpcIiM4MDgwODBcIixncmVlbjpcIiMwMDgwMDBcIixsaW1lOlwiIzAwZmYwMFwiLG1hcm9vbjpcIiM4MDAwMDBcIixuYXZ5OlwiIzAwMDA4MFwiLG9saXZlOlwiIzgwODAwMFwiLHB1cnBsZTpcIiM4MDAwODBcIixyZWQ6XCIjZmYwMDAwXCIsc2lsdmVyOlwiI2MwYzBjMFwiLHRlYWw6XCIjMDA4MDgwXCIsd2hpdGU6XCIjZmZmZmZmXCIseWVsbG93OlwiI2ZmZmYwMFwiLHRyYW5zcGFyZW50OltudWxsLG51bGwsbnVsbCwwXSxfZGVmYXVsdDpcIiNmZmZmZmZcIn19KF8pLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgaSxzLG49ZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3P2Uub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGUsbnVsbCk6ZS5jdXJyZW50U3R5bGUsbz17fTtpZihuJiZuLmxlbmd0aCYmblswXSYmbltuWzBdXSlmb3Iocz1uLmxlbmd0aDtzLS07KWk9bltzXSxcInN0cmluZ1wiPT10eXBlb2YgbltpXSYmKG9bdC5jYW1lbENhc2UoaSldPW5baV0pO2Vsc2UgZm9yKGkgaW4gbilcInN0cmluZ1wiPT10eXBlb2YgbltpXSYmKG9baV09bltpXSk7cmV0dXJuIG99ZnVuY3Rpb24gaShlLGkpe3ZhciBzLG8sYT17fTtmb3IocyBpbiBpKW89aVtzXSxlW3NdIT09byYmKG5bc118fCh0LmZ4LnN0ZXBbc118fCFpc05hTihwYXJzZUZsb2F0KG8pKSkmJihhW3NdPW8pKTtyZXR1cm4gYX12YXIgcz1bXCJhZGRcIixcInJlbW92ZVwiLFwidG9nZ2xlXCJdLG49e2JvcmRlcjoxLGJvcmRlckJvdHRvbToxLGJvcmRlckNvbG9yOjEsYm9yZGVyTGVmdDoxLGJvcmRlclJpZ2h0OjEsYm9yZGVyVG9wOjEsYm9yZGVyV2lkdGg6MSxtYXJnaW46MSxwYWRkaW5nOjF9O3QuZWFjaChbXCJib3JkZXJMZWZ0U3R5bGVcIixcImJvcmRlclJpZ2h0U3R5bGVcIixcImJvcmRlckJvdHRvbVN0eWxlXCIsXCJib3JkZXJUb3BTdHlsZVwiXSxmdW5jdGlvbihlLGkpe3QuZnguc3RlcFtpXT1mdW5jdGlvbih0KXsoXCJub25lXCIhPT10LmVuZCYmIXQuc2V0QXR0cnx8MT09PXQucG9zJiYhdC5zZXRBdHRyKSYmKF8uc3R5bGUodC5lbGVtLGksdC5lbmQpLHQuc2V0QXR0cj0hMCl9fSksdC5mbi5hZGRCYWNrfHwodC5mbi5hZGRCYWNrPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmFkZChudWxsPT10P3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKHQpKX0pLHQuZWZmZWN0cy5hbmltYXRlQ2xhc3M9ZnVuY3Rpb24obixvLGEscil7dmFyIGg9dC5zcGVlZChvLGEscik7cmV0dXJuIHRoaXMucXVldWUoZnVuY3Rpb24oKXt2YXIgbyxhPXQodGhpcykscj1hLmF0dHIoXCJjbGFzc1wiKXx8XCJcIixsPWguY2hpbGRyZW4/YS5maW5kKFwiKlwiKS5hZGRCYWNrKCk6YTtsPWwubWFwKGZ1bmN0aW9uKCl7dmFyIGk9dCh0aGlzKTtyZXR1cm57ZWw6aSxzdGFydDplKHRoaXMpfX0pLG89ZnVuY3Rpb24oKXt0LmVhY2gocyxmdW5jdGlvbih0LGUpe25bZV0mJmFbZStcIkNsYXNzXCJdKG5bZV0pfSl9LG8oKSxsPWwubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kPWUodGhpcy5lbFswXSksdGhpcy5kaWZmPWkodGhpcy5zdGFydCx0aGlzLmVuZCksdGhpc30pLGEuYXR0cihcImNsYXNzXCIsciksbD1sLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMsaT10LkRlZmVycmVkKCkscz10LmV4dGVuZCh7fSxoLHtxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2kucmVzb2x2ZShlKX19KTtyZXR1cm4gdGhpcy5lbC5hbmltYXRlKHRoaXMuZGlmZixzKSxpLnByb21pc2UoKX0pLHQud2hlbi5hcHBseSh0LGwuZ2V0KCkpLmRvbmUoZnVuY3Rpb24oKXtvKCksdC5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbigpe3ZhciBlPXRoaXMuZWw7dC5lYWNoKHRoaXMuZGlmZixmdW5jdGlvbih0KXtlLmNzcyh0LFwiXCIpfSl9KSxoLmNvbXBsZXRlLmNhbGwoYVswXSl9KX0pfSx0LmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGkscyxuLG8pe3JldHVybiBzP3QuZWZmZWN0cy5hbmltYXRlQ2xhc3MuY2FsbCh0aGlzLHthZGQ6aX0scyxuLG8pOmUuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0odC5mbi5hZGRDbGFzcykscmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGkscyxuLG8pe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjE/dC5lZmZlY3RzLmFuaW1hdGVDbGFzcy5jYWxsKHRoaXMse3JlbW92ZTppfSxzLG4sbyk6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSh0LmZuLnJlbW92ZUNsYXNzKSx0b2dnbGVDbGFzczpmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oaSxzLG4sbyxhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHN8fHZvaWQgMD09PXM/bj90LmVmZmVjdHMuYW5pbWF0ZUNsYXNzLmNhbGwodGhpcyxzP3thZGQ6aX06e3JlbW92ZTppfSxuLG8sYSk6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dC5lZmZlY3RzLmFuaW1hdGVDbGFzcy5jYWxsKHRoaXMse3RvZ2dsZTppfSxzLG4sbyl9fSh0LmZuLnRvZ2dsZUNsYXNzKSxzd2l0Y2hDbGFzczpmdW5jdGlvbihlLGkscyxuLG8pe3JldHVybiB0LmVmZmVjdHMuYW5pbWF0ZUNsYXNzLmNhbGwodGhpcyx7YWRkOmkscmVtb3ZlOmV9LHMsbixvKX19KX0oKSxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSxpLHMsbil7cmV0dXJuIHQuaXNQbGFpbk9iamVjdChlKSYmKGk9ZSxlPWUuZWZmZWN0KSxlPXtlZmZlY3Q6ZX0sbnVsbD09aSYmKGk9e30pLHQuaXNGdW5jdGlvbihpKSYmKG49aSxzPW51bGwsaT17fSksKFwibnVtYmVyXCI9PXR5cGVvZiBpfHx0LmZ4LnNwZWVkc1tpXSkmJihuPXMscz1pLGk9e30pLHQuaXNGdW5jdGlvbihzKSYmKG49cyxzPW51bGwpLGkmJnQuZXh0ZW5kKGUsaSkscz1zfHxpLmR1cmF0aW9uLGUuZHVyYXRpb249dC5meC5vZmY/MDpcIm51bWJlclwiPT10eXBlb2Ygcz9zOnMgaW4gdC5meC5zcGVlZHM/dC5meC5zcGVlZHNbc106dC5meC5zcGVlZHMuX2RlZmF1bHQsZS5jb21wbGV0ZT1ufHxpLmNvbXBsZXRlLGV9ZnVuY3Rpb24gaShlKXtyZXR1cm4hZXx8XCJudW1iZXJcIj09dHlwZW9mIGV8fHQuZnguc3BlZWRzW2VdPyEwOlwic3RyaW5nXCIhPXR5cGVvZiBlfHx0LmVmZmVjdHMuZWZmZWN0W2VdP3QuaXNGdW5jdGlvbihlKT8hMDpcIm9iamVjdFwiIT10eXBlb2YgZXx8ZS5lZmZlY3Q/ITE6ITA6ITB9ZnVuY3Rpb24gcyh0LGUpe3ZhciBpPWUub3V0ZXJXaWR0aCgpLHM9ZS5vdXRlckhlaWdodCgpLG49L15yZWN0XFwoKC0/XFxkKlxcLj9cXGQqcHh8LT9cXGQrJXxhdXRvKSw/XFxzKigtP1xcZCpcXC4/XFxkKnB4fC0/XFxkKyV8YXV0byksP1xccyooLT9cXGQqXFwuP1xcZCpweHwtP1xcZCslfGF1dG8pLD9cXHMqKC0/XFxkKlxcLj9cXGQqcHh8LT9cXGQrJXxhdXRvKVxcKSQvLG89bi5leGVjKHQpfHxbXCJcIiwwLGkscywwXTtyZXR1cm57dG9wOnBhcnNlRmxvYXQob1sxXSl8fDAscmlnaHQ6XCJhdXRvXCI9PT1vWzJdP2k6cGFyc2VGbG9hdChvWzJdKSxib3R0b206XCJhdXRvXCI9PT1vWzNdP3M6cGFyc2VGbG9hdChvWzNdKSxsZWZ0OnBhcnNlRmxvYXQob1s0XSl8fDB9fXQuZXhwciYmdC5leHByLmZpbHRlcnMmJnQuZXhwci5maWx0ZXJzLmFuaW1hdGVkJiYodC5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGkpe3JldHVybiEhdChpKS5kYXRhKGcpfHxlKGkpfX0odC5leHByLmZpbHRlcnMuYW5pbWF0ZWQpKSx0LnVpQmFja0NvbXBhdCE9PSExJiZ0LmV4dGVuZCh0LmVmZmVjdHMse3NhdmU6ZnVuY3Rpb24odCxlKXtmb3IodmFyIGk9MCxzPWUubGVuZ3RoO3M+aTtpKyspbnVsbCE9PWVbaV0mJnQuZGF0YShmK2VbaV0sdFswXS5zdHlsZVtlW2ldXSl9LHJlc3RvcmU6ZnVuY3Rpb24odCxlKXtmb3IodmFyIGkscz0wLG49ZS5sZW5ndGg7bj5zO3MrKyludWxsIT09ZVtzXSYmKGk9dC5kYXRhKGYrZVtzXSksdC5jc3MoZVtzXSxpKSl9LHNldE1vZGU6ZnVuY3Rpb24odCxlKXtyZXR1cm5cInRvZ2dsZVwiPT09ZSYmKGU9dC5pcyhcIjpoaWRkZW5cIik/XCJzaG93XCI6XCJoaWRlXCIpLGV9LGNyZWF0ZVdyYXBwZXI6ZnVuY3Rpb24oZSl7aWYoZS5wYXJlbnQoKS5pcyhcIi51aS1lZmZlY3RzLXdyYXBwZXJcIikpcmV0dXJuIGUucGFyZW50KCk7dmFyIGk9e3dpZHRoOmUub3V0ZXJXaWR0aCghMCksaGVpZ2h0OmUub3V0ZXJIZWlnaHQoITApLFwiZmxvYXRcIjplLmNzcyhcImZsb2F0XCIpfSxzPXQoXCI8ZGl2PjwvZGl2PlwiKS5hZGRDbGFzcyhcInVpLWVmZmVjdHMtd3JhcHBlclwiKS5jc3Moe2ZvbnRTaXplOlwiMTAwJVwiLGJhY2tncm91bmQ6XCJ0cmFuc3BhcmVudFwiLGJvcmRlcjpcIm5vbmVcIixtYXJnaW46MCxwYWRkaW5nOjB9KSxuPXt3aWR0aDplLndpZHRoKCksaGVpZ2h0OmUuaGVpZ2h0KCl9LG89ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDt0cnl7by5pZH1jYXRjaChhKXtvPWRvY3VtZW50LmJvZHl9cmV0dXJuIGUud3JhcChzKSwoZVswXT09PW98fHQuY29udGFpbnMoZVswXSxvKSkmJnQobykudHJpZ2dlcihcImZvY3VzXCIpLHM9ZS5wYXJlbnQoKSxcInN0YXRpY1wiPT09ZS5jc3MoXCJwb3NpdGlvblwiKT8ocy5jc3Moe3Bvc2l0aW9uOlwicmVsYXRpdmVcIn0pLGUuY3NzKHtwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KSk6KHQuZXh0ZW5kKGkse3Bvc2l0aW9uOmUuY3NzKFwicG9zaXRpb25cIiksekluZGV4OmUuY3NzKFwiei1pbmRleFwiKX0pLHQuZWFjaChbXCJ0b3BcIixcImxlZnRcIixcImJvdHRvbVwiLFwicmlnaHRcIl0sZnVuY3Rpb24odCxzKXtpW3NdPWUuY3NzKHMpLGlzTmFOKHBhcnNlSW50KGlbc10sMTApKSYmKGlbc109XCJhdXRvXCIpfSksZS5jc3Moe3Bvc2l0aW9uOlwicmVsYXRpdmVcIix0b3A6MCxsZWZ0OjAscmlnaHQ6XCJhdXRvXCIsYm90dG9tOlwiYXV0b1wifSkpLGUuY3NzKG4pLHMuY3NzKGkpLnNob3coKX0scmVtb3ZlV3JhcHBlcjpmdW5jdGlvbihlKXt2YXIgaT1kb2N1bWVudC5hY3RpdmVFbGVtZW50O3JldHVybiBlLnBhcmVudCgpLmlzKFwiLnVpLWVmZmVjdHMtd3JhcHBlclwiKSYmKGUucGFyZW50KCkucmVwbGFjZVdpdGgoZSksKGVbMF09PT1pfHx0LmNvbnRhaW5zKGVbMF0saSkpJiZ0KGkpLnRyaWdnZXIoXCJmb2N1c1wiKSksZX19KSx0LmV4dGVuZCh0LmVmZmVjdHMse3ZlcnNpb246XCIxLjEyLjFcIixkZWZpbmU6ZnVuY3Rpb24oZSxpLHMpe3JldHVybiBzfHwocz1pLGk9XCJlZmZlY3RcIiksdC5lZmZlY3RzLmVmZmVjdFtlXT1zLHQuZWZmZWN0cy5lZmZlY3RbZV0ubW9kZT1pLHN9LHNjYWxlZERpbWVuc2lvbnM6ZnVuY3Rpb24odCxlLGkpe2lmKDA9PT1lKXJldHVybntoZWlnaHQ6MCx3aWR0aDowLG91dGVySGVpZ2h0OjAsb3V0ZXJXaWR0aDowfTt2YXIgcz1cImhvcml6b250YWxcIiE9PWk/KGV8fDEwMCkvMTAwOjEsbj1cInZlcnRpY2FsXCIhPT1pPyhlfHwxMDApLzEwMDoxO3JldHVybntoZWlnaHQ6dC5oZWlnaHQoKSpuLHdpZHRoOnQud2lkdGgoKSpzLG91dGVySGVpZ2h0OnQub3V0ZXJIZWlnaHQoKSpuLG91dGVyV2lkdGg6dC5vdXRlcldpZHRoKCkqc319LGNsaXBUb0JveDpmdW5jdGlvbih0KXtyZXR1cm57d2lkdGg6dC5jbGlwLnJpZ2h0LXQuY2xpcC5sZWZ0LGhlaWdodDp0LmNsaXAuYm90dG9tLXQuY2xpcC50b3AsbGVmdDp0LmNsaXAubGVmdCx0b3A6dC5jbGlwLnRvcH19LHVuc2hpZnQ6ZnVuY3Rpb24odCxlLGkpe3ZhciBzPXQucXVldWUoKTtlPjEmJnMuc3BsaWNlLmFwcGx5KHMsWzEsMF0uY29uY2F0KHMuc3BsaWNlKGUsaSkpKSx0LmRlcXVldWUoKX0sc2F2ZVN0eWxlOmZ1bmN0aW9uKHQpe3QuZGF0YShtLHRbMF0uc3R5bGUuY3NzVGV4dCl9LHJlc3RvcmVTdHlsZTpmdW5jdGlvbih0KXt0WzBdLnN0eWxlLmNzc1RleHQ9dC5kYXRhKG0pfHxcIlwiLHQucmVtb3ZlRGF0YShtKX0sbW9kZTpmdW5jdGlvbih0LGUpe3ZhciBpPXQuaXMoXCI6aGlkZGVuXCIpO3JldHVyblwidG9nZ2xlXCI9PT1lJiYoZT1pP1wic2hvd1wiOlwiaGlkZVwiKSwoaT9cImhpZGVcIj09PWU6XCJzaG93XCI9PT1lKSYmKGU9XCJub25lXCIpLGV9LGdldEJhc2VsaW5lOmZ1bmN0aW9uKHQsZSl7dmFyIGkscztzd2l0Y2godFswXSl7Y2FzZVwidG9wXCI6aT0wO2JyZWFrO2Nhc2VcIm1pZGRsZVwiOmk9LjU7YnJlYWs7Y2FzZVwiYm90dG9tXCI6aT0xO2JyZWFrO2RlZmF1bHQ6aT10WzBdL2UuaGVpZ2h0fXN3aXRjaCh0WzFdKXtjYXNlXCJsZWZ0XCI6cz0wO2JyZWFrO2Nhc2VcImNlbnRlclwiOnM9LjU7YnJlYWs7Y2FzZVwicmlnaHRcIjpzPTE7YnJlYWs7ZGVmYXVsdDpzPXRbMV0vZS53aWR0aH1yZXR1cm57eDpzLHk6aX19LGNyZWF0ZVBsYWNlaG9sZGVyOmZ1bmN0aW9uKGUpe3ZhciBpLHM9ZS5jc3MoXCJwb3NpdGlvblwiKSxuPWUucG9zaXRpb24oKTtyZXR1cm4gZS5jc3Moe21hcmdpblRvcDplLmNzcyhcIm1hcmdpblRvcFwiKSxtYXJnaW5Cb3R0b206ZS5jc3MoXCJtYXJnaW5Cb3R0b21cIiksbWFyZ2luTGVmdDplLmNzcyhcIm1hcmdpbkxlZnRcIiksbWFyZ2luUmlnaHQ6ZS5jc3MoXCJtYXJnaW5SaWdodFwiKX0pLm91dGVyV2lkdGgoZS5vdXRlcldpZHRoKCkpLm91dGVySGVpZ2h0KGUub3V0ZXJIZWlnaHQoKSksL14oc3RhdGljfHJlbGF0aXZlKS8udGVzdChzKSYmKHM9XCJhYnNvbHV0ZVwiLGk9dChcIjxcIitlWzBdLm5vZGVOYW1lK1wiPlwiKS5pbnNlcnRBZnRlcihlKS5jc3Moe2Rpc3BsYXk6L14oaW5saW5lfHJ1YnkpLy50ZXN0KGUuY3NzKFwiZGlzcGxheVwiKSk/XCJpbmxpbmUtYmxvY2tcIjpcImJsb2NrXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLG1hcmdpblRvcDplLmNzcyhcIm1hcmdpblRvcFwiKSxtYXJnaW5Cb3R0b206ZS5jc3MoXCJtYXJnaW5Cb3R0b21cIiksbWFyZ2luTGVmdDplLmNzcyhcIm1hcmdpbkxlZnRcIiksbWFyZ2luUmlnaHQ6ZS5jc3MoXCJtYXJnaW5SaWdodFwiKSxcImZsb2F0XCI6ZS5jc3MoXCJmbG9hdFwiKX0pLm91dGVyV2lkdGgoZS5vdXRlcldpZHRoKCkpLm91dGVySGVpZ2h0KGUub3V0ZXJIZWlnaHQoKSkuYWRkQ2xhc3MoXCJ1aS1lZmZlY3RzLXBsYWNlaG9sZGVyXCIpLGUuZGF0YShmK1wicGxhY2Vob2xkZXJcIixpKSksZS5jc3Moe3Bvc2l0aW9uOnMsbGVmdDpuLmxlZnQsdG9wOm4udG9wfSksaX0scmVtb3ZlUGxhY2Vob2xkZXI6ZnVuY3Rpb24odCl7dmFyIGU9ZitcInBsYWNlaG9sZGVyXCIsaT10LmRhdGEoZSk7aSYmKGkucmVtb3ZlKCksdC5yZW1vdmVEYXRhKGUpKX0sY2xlYW5VcDpmdW5jdGlvbihlKXt0LmVmZmVjdHMucmVzdG9yZVN0eWxlKGUpLHQuZWZmZWN0cy5yZW1vdmVQbGFjZWhvbGRlcihlKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlLGkscyxuKXtyZXR1cm4gbj1ufHx7fSx0LmVhY2goaSxmdW5jdGlvbih0LGkpe3ZhciBvPWUuY3NzVW5pdChpKTtvWzBdPjAmJihuW2ldPW9bMF0qcytvWzFdKX0pLG59fSksdC5mbi5leHRlbmQoe2VmZmVjdDpmdW5jdGlvbigpe2Z1bmN0aW9uIGkoZSl7ZnVuY3Rpb24gaSgpe3IucmVtb3ZlRGF0YShnKSx0LmVmZmVjdHMuY2xlYW5VcChyKSxcImhpZGVcIj09PXMubW9kZSYmci5oaWRlKCksYSgpfWZ1bmN0aW9uIGEoKXt0LmlzRnVuY3Rpb24oaCkmJmguY2FsbChyWzBdKSx0LmlzRnVuY3Rpb24oZSkmJmUoKX12YXIgcj10KHRoaXMpO3MubW9kZT11LnNoaWZ0KCksdC51aUJhY2tDb21wYXQ9PT0hMXx8bz9cIm5vbmVcIj09PXMubW9kZT8ocltsXSgpLGEoKSk6bi5jYWxsKHJbMF0scyxpKTooci5pcyhcIjpoaWRkZW5cIik/XCJoaWRlXCI9PT1sOlwic2hvd1wiPT09bCk/KHJbbF0oKSxhKCkpOm4uY2FsbChyWzBdLHMsYSl9dmFyIHM9ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksbj10LmVmZmVjdHMuZWZmZWN0W3MuZWZmZWN0XSxvPW4ubW9kZSxhPXMucXVldWUscj1hfHxcImZ4XCIsaD1zLmNvbXBsZXRlLGw9cy5tb2RlLHU9W10sYz1mdW5jdGlvbihlKXt2YXIgaT10KHRoaXMpLHM9dC5lZmZlY3RzLm1vZGUoaSxsKXx8bztpLmRhdGEoZywhMCksdS5wdXNoKHMpLG8mJihcInNob3dcIj09PXN8fHM9PT1vJiZcImhpZGVcIj09PXMpJiZpLnNob3coKSxvJiZcIm5vbmVcIj09PXN8fHQuZWZmZWN0cy5zYXZlU3R5bGUoaSksdC5pc0Z1bmN0aW9uKGUpJiZlKCl9O3JldHVybiB0LmZ4Lm9mZnx8IW4/bD90aGlzW2xdKHMuZHVyYXRpb24saCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7aCYmaC5jYWxsKHRoaXMpfSk6YT09PSExP3RoaXMuZWFjaChjKS5lYWNoKGkpOnRoaXMucXVldWUocixjKS5xdWV1ZShyLGkpfSxzaG93OmZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihzKXtpZihpKHMpKXJldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgbj1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gbi5tb2RlPVwic2hvd1wiLHRoaXMuZWZmZWN0LmNhbGwodGhpcyxuKX19KHQuZm4uc2hvdyksaGlkZTpmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24ocyl7aWYoaShzKSlyZXR1cm4gdC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIG49ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIG4ubW9kZT1cImhpZGVcIix0aGlzLmVmZmVjdC5jYWxsKHRoaXMsbil9fSh0LmZuLmhpZGUpLHRvZ2dsZTpmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24ocyl7aWYoaShzKXx8XCJib29sZWFuXCI9PXR5cGVvZiBzKXJldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgbj1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gbi5tb2RlPVwidG9nZ2xlXCIsdGhpcy5lZmZlY3QuY2FsbCh0aGlzLG4pfX0odC5mbi50b2dnbGUpLGNzc1VuaXQ6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5jc3MoZSkscz1bXTtyZXR1cm4gdC5lYWNoKFtcImVtXCIsXCJweFwiLFwiJVwiLFwicHRcIl0sZnVuY3Rpb24odCxlKXtpLmluZGV4T2YoZSk+MCYmKHM9W3BhcnNlRmxvYXQoaSksZV0pfSksc30sY3NzQ2xpcDpmdW5jdGlvbih0KXtyZXR1cm4gdD90aGlzLmNzcyhcImNsaXBcIixcInJlY3QoXCIrdC50b3ArXCJweCBcIit0LnJpZ2h0K1wicHggXCIrdC5ib3R0b20rXCJweCBcIit0LmxlZnQrXCJweClcIik6cyh0aGlzLmNzcyhcImNsaXBcIiksdGhpcyl9LHRyYW5zZmVyOmZ1bmN0aW9uKGUsaSl7dmFyIHM9dCh0aGlzKSxuPXQoZS50byksbz1cImZpeGVkXCI9PT1uLmNzcyhcInBvc2l0aW9uXCIpLGE9dChcImJvZHlcIikscj1vP2Euc2Nyb2xsVG9wKCk6MCxoPW8/YS5zY3JvbGxMZWZ0KCk6MCxsPW4ub2Zmc2V0KCksdT17dG9wOmwudG9wLXIsbGVmdDpsLmxlZnQtaCxoZWlnaHQ6bi5pbm5lckhlaWdodCgpLHdpZHRoOm4uaW5uZXJXaWR0aCgpfSxjPXMub2Zmc2V0KCksZD10KFwiPGRpdiBjbGFzcz0ndWktZWZmZWN0cy10cmFuc2Zlcic+PC9kaXY+XCIpLmFwcGVuZFRvKFwiYm9keVwiKS5hZGRDbGFzcyhlLmNsYXNzTmFtZSkuY3NzKHt0b3A6Yy50b3AtcixsZWZ0OmMubGVmdC1oLGhlaWdodDpzLmlubmVySGVpZ2h0KCksd2lkdGg6cy5pbm5lcldpZHRoKCkscG9zaXRpb246bz9cImZpeGVkXCI6XCJhYnNvbHV0ZVwifSkuYW5pbWF0ZSh1LGUuZHVyYXRpb24sZS5lYXNpbmcsZnVuY3Rpb24oKXtkLnJlbW92ZSgpLHQuaXNGdW5jdGlvbihpKSYmaSgpfSl9fSksdC5meC5zdGVwLmNsaXA9ZnVuY3Rpb24oZSl7ZS5jbGlwSW5pdHx8KGUuc3RhcnQ9dChlLmVsZW0pLmNzc0NsaXAoKSxcInN0cmluZ1wiPT10eXBlb2YgZS5lbmQmJihlLmVuZD1zKGUuZW5kLGUuZWxlbSkpLGUuY2xpcEluaXQ9ITApLHQoZS5lbGVtKS5jc3NDbGlwKHt0b3A6ZS5wb3MqKGUuZW5kLnRvcC1lLnN0YXJ0LnRvcCkrZS5zdGFydC50b3AscmlnaHQ6ZS5wb3MqKGUuZW5kLnJpZ2h0LWUuc3RhcnQucmlnaHQpK2Uuc3RhcnQucmlnaHQsYm90dG9tOmUucG9zKihlLmVuZC5ib3R0b20tZS5zdGFydC5ib3R0b20pK2Uuc3RhcnQuYm90dG9tLGxlZnQ6ZS5wb3MqKGUuZW5kLmxlZnQtZS5zdGFydC5sZWZ0KStlLnN0YXJ0LmxlZnR9KX19KCksZnVuY3Rpb24oKXt2YXIgZT17fTt0LmVhY2goW1wiUXVhZFwiLFwiQ3ViaWNcIixcIlF1YXJ0XCIsXCJRdWludFwiLFwiRXhwb1wiXSxmdW5jdGlvbih0LGkpe2VbaV09ZnVuY3Rpb24oZSl7cmV0dXJuIE1hdGgucG93KGUsdCsyKX19KSx0LmV4dGVuZChlLHtTaW5lOmZ1bmN0aW9uKHQpe3JldHVybiAxLU1hdGguY29zKHQqTWF0aC5QSS8yKX0sQ2lyYzpmdW5jdGlvbih0KXtyZXR1cm4gMS1NYXRoLnNxcnQoMS10KnQpfSxFbGFzdGljOmZ1bmN0aW9uKHQpe3JldHVybiAwPT09dHx8MT09PXQ/dDotTWF0aC5wb3coMiw4Kih0LTEpKSpNYXRoLnNpbigoODAqKHQtMSktNy41KSpNYXRoLlBJLzE1KX0sQmFjazpmdW5jdGlvbih0KXtyZXR1cm4gdCp0KigzKnQtMil9LEJvdW5jZTpmdW5jdGlvbih0KXtmb3IodmFyIGUsaT00OygoZT1NYXRoLnBvdygyLC0taSkpLTEpLzExPnQ7KTtyZXR1cm4gMS9NYXRoLnBvdyg0LDMtaSktNy41NjI1Kk1hdGgucG93KCgzKmUtMikvMjItdCwyKX19KSx0LmVhY2goZSxmdW5jdGlvbihlLGkpe3QuZWFzaW5nW1wiZWFzZUluXCIrZV09aSx0LmVhc2luZ1tcImVhc2VPdXRcIitlXT1mdW5jdGlvbih0KXtyZXR1cm4gMS1pKDEtdCl9LHQuZWFzaW5nW1wiZWFzZUluT3V0XCIrZV09ZnVuY3Rpb24odCl7cmV0dXJuLjU+dD9pKDIqdCkvMjoxLWkoLTIqdCsyKS8yfX0pfSgpO3ZhciB2PXQuZWZmZWN0czt0LmVmZmVjdHMuZGVmaW5lKFwiYmxpbmRcIixcImhpZGVcIixmdW5jdGlvbihlLGkpe3ZhciBzPXt1cDpbXCJib3R0b21cIixcInRvcFwiXSx2ZXJ0aWNhbDpbXCJib3R0b21cIixcInRvcFwiXSxkb3duOltcInRvcFwiLFwiYm90dG9tXCJdLGxlZnQ6W1wicmlnaHRcIixcImxlZnRcIl0saG9yaXpvbnRhbDpbXCJyaWdodFwiLFwibGVmdFwiXSxyaWdodDpbXCJsZWZ0XCIsXCJyaWdodFwiXX0sbj10KHRoaXMpLG89ZS5kaXJlY3Rpb258fFwidXBcIixhPW4uY3NzQ2xpcCgpLHI9e2NsaXA6dC5leHRlbmQoe30sYSl9LGg9dC5lZmZlY3RzLmNyZWF0ZVBsYWNlaG9sZGVyKG4pO3IuY2xpcFtzW29dWzBdXT1yLmNsaXBbc1tvXVsxXV0sXCJzaG93XCI9PT1lLm1vZGUmJihuLmNzc0NsaXAoci5jbGlwKSxoJiZoLmNzcyh0LmVmZmVjdHMuY2xpcFRvQm94KHIpKSxyLmNsaXA9YSksaCYmaC5hbmltYXRlKHQuZWZmZWN0cy5jbGlwVG9Cb3gociksZS5kdXJhdGlvbixlLmVhc2luZyksbi5hbmltYXRlKHIse3F1ZXVlOiExLGR1cmF0aW9uOmUuZHVyYXRpb24sZWFzaW5nOmUuZWFzaW5nLGNvbXBsZXRlOml9KX0pLHQuZWZmZWN0cy5kZWZpbmUoXCJib3VuY2VcIixmdW5jdGlvbihlLGkpe3ZhciBzLG4sbyxhPXQodGhpcykscj1lLm1vZGUsaD1cImhpZGVcIj09PXIsbD1cInNob3dcIj09PXIsdT1lLmRpcmVjdGlvbnx8XCJ1cFwiLGM9ZS5kaXN0YW5jZSxkPWUudGltZXN8fDUscD0yKmQrKGx8fGg/MTowKSxmPWUuZHVyYXRpb24vcCxtPWUuZWFzaW5nLGc9XCJ1cFwiPT09dXx8XCJkb3duXCI9PT11P1widG9wXCI6XCJsZWZ0XCIsXz1cInVwXCI9PT11fHxcImxlZnRcIj09PXUsdj0wLGI9YS5xdWV1ZSgpLmxlbmd0aDtmb3IodC5lZmZlY3RzLmNyZWF0ZVBsYWNlaG9sZGVyKGEpLG89YS5jc3MoZyksY3x8KGM9YVtcInRvcFwiPT09Zz9cIm91dGVySGVpZ2h0XCI6XCJvdXRlcldpZHRoXCJdKCkvMyksbCYmKG49e29wYWNpdHk6MX0sbltnXT1vLGEuY3NzKFwib3BhY2l0eVwiLDApLmNzcyhnLF8/MiotYzoyKmMpLmFuaW1hdGUobixmLG0pKSxoJiYoYy89TWF0aC5wb3coMixkLTEpKSxuPXt9LG5bZ109bztkPnY7disrKXM9e30sc1tnXT0oXz9cIi09XCI6XCIrPVwiKStjLGEuYW5pbWF0ZShzLGYsbSkuYW5pbWF0ZShuLGYsbSksYz1oPzIqYzpjLzI7aCYmKHM9e29wYWNpdHk6MH0sc1tnXT0oXz9cIi09XCI6XCIrPVwiKStjLGEuYW5pbWF0ZShzLGYsbSkpLGEucXVldWUoaSksdC5lZmZlY3RzLnVuc2hpZnQoYSxiLHArMSl9KSx0LmVmZmVjdHMuZGVmaW5lKFwiY2xpcFwiLFwiaGlkZVwiLGZ1bmN0aW9uKGUsaSl7dmFyIHMsbj17fSxvPXQodGhpcyksYT1lLmRpcmVjdGlvbnx8XCJ2ZXJ0aWNhbFwiLHI9XCJib3RoXCI9PT1hLGg9cnx8XCJob3Jpem9udGFsXCI9PT1hLGw9cnx8XCJ2ZXJ0aWNhbFwiPT09YTtzPW8uY3NzQ2xpcCgpLG4uY2xpcD17dG9wOmw/KHMuYm90dG9tLXMudG9wKS8yOnMudG9wLHJpZ2h0Omg/KHMucmlnaHQtcy5sZWZ0KS8yOnMucmlnaHQsYm90dG9tOmw/KHMuYm90dG9tLXMudG9wKS8yOnMuYm90dG9tLGxlZnQ6aD8ocy5yaWdodC1zLmxlZnQpLzI6cy5sZWZ0fSx0LmVmZmVjdHMuY3JlYXRlUGxhY2Vob2xkZXIobyksXCJzaG93XCI9PT1lLm1vZGUmJihvLmNzc0NsaXAobi5jbGlwKSxuLmNsaXA9cyksby5hbmltYXRlKG4se3F1ZXVlOiExLGR1cmF0aW9uOmUuZHVyYXRpb24sZWFzaW5nOmUuZWFzaW5nLGNvbXBsZXRlOml9KX0pLHQuZWZmZWN0cy5kZWZpbmUoXCJkcm9wXCIsXCJoaWRlXCIsZnVuY3Rpb24oZSxpKXt2YXIgcyxuPXQodGhpcyksbz1lLm1vZGUsYT1cInNob3dcIj09PW8scj1lLmRpcmVjdGlvbnx8XCJsZWZ0XCIsaD1cInVwXCI9PT1yfHxcImRvd25cIj09PXI/XCJ0b3BcIjpcImxlZnRcIixsPVwidXBcIj09PXJ8fFwibGVmdFwiPT09cj9cIi09XCI6XCIrPVwiLHU9XCIrPVwiPT09bD9cIi09XCI6XCIrPVwiLGM9e29wYWNpdHk6MH07dC5lZmZlY3RzLmNyZWF0ZVBsYWNlaG9sZGVyKG4pLHM9ZS5kaXN0YW5jZXx8bltcInRvcFwiPT09aD9cIm91dGVySGVpZ2h0XCI6XCJvdXRlcldpZHRoXCJdKCEwKS8yLGNbaF09bCtzLGEmJihuLmNzcyhjKSxjW2hdPXUrcyxjLm9wYWNpdHk9MSksbi5hbmltYXRlKGMse3F1ZXVlOiExLGR1cmF0aW9uOmUuZHVyYXRpb24sZWFzaW5nOmUuZWFzaW5nLGNvbXBsZXRlOml9KX0pLHQuZWZmZWN0cy5kZWZpbmUoXCJleHBsb2RlXCIsXCJoaWRlXCIsZnVuY3Rpb24oZSxpKXtmdW5jdGlvbiBzKCl7Yi5wdXNoKHRoaXMpLGIubGVuZ3RoPT09YypkJiZuKCl9ZnVuY3Rpb24gbigpe3AuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSksdChiKS5yZW1vdmUoKSxpKCl9dmFyIG8sYSxyLGgsbCx1LGM9ZS5waWVjZXM/TWF0aC5yb3VuZChNYXRoLnNxcnQoZS5waWVjZXMpKTozLGQ9YyxwPXQodGhpcyksZj1lLm1vZGUsbT1cInNob3dcIj09PWYsZz1wLnNob3coKS5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJoaWRkZW5cIikub2Zmc2V0KCksXz1NYXRoLmNlaWwocC5vdXRlcldpZHRoKCkvZCksdj1NYXRoLmNlaWwocC5vdXRlckhlaWdodCgpL2MpLGI9W107Zm9yKG89MDtjPm87bysrKWZvcihoPWcudG9wK28qdix1PW8tKGMtMSkvMixhPTA7ZD5hO2ErKylyPWcubGVmdCthKl8sbD1hLShkLTEpLzIscC5jbG9uZSgpLmFwcGVuZFRvKFwiYm9keVwiKS53cmFwKFwiPGRpdj48L2Rpdj5cIikuY3NzKHtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcInZpc2libGVcIixsZWZ0Oi1hKl8sdG9wOi1vKnZ9KS5wYXJlbnQoKS5hZGRDbGFzcyhcInVpLWVmZmVjdHMtZXhwbG9kZVwiKS5jc3Moe3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixvdmVyZmxvdzpcImhpZGRlblwiLHdpZHRoOl8saGVpZ2h0OnYsbGVmdDpyKyhtP2wqXzowKSx0b3A6aCsobT91KnY6MCksb3BhY2l0eTptPzA6MX0pLmFuaW1hdGUoe2xlZnQ6cisobT8wOmwqXyksdG9wOmgrKG0/MDp1KnYpLG9wYWNpdHk6bT8xOjB9LGUuZHVyYXRpb258fDUwMCxlLmVhc2luZyxzKX0pLHQuZWZmZWN0cy5kZWZpbmUoXCJmYWRlXCIsXCJ0b2dnbGVcIixmdW5jdGlvbihlLGkpe3ZhciBzPVwic2hvd1wiPT09ZS5tb2RlO3QodGhpcykuY3NzKFwib3BhY2l0eVwiLHM/MDoxKS5hbmltYXRlKHtvcGFjaXR5OnM/MTowfSx7cXVldWU6ITEsZHVyYXRpb246ZS5kdXJhdGlvbixlYXNpbmc6ZS5lYXNpbmcsY29tcGxldGU6aX0pfSksdC5lZmZlY3RzLmRlZmluZShcImZvbGRcIixcImhpZGVcIixmdW5jdGlvbihlLGkpe3ZhciBzPXQodGhpcyksbj1lLm1vZGUsbz1cInNob3dcIj09PW4sYT1cImhpZGVcIj09PW4scj1lLnNpemV8fDE1LGg9LyhbMC05XSspJS8uZXhlYyhyKSxsPSEhZS5ob3JpekZpcnN0LHU9bD9bXCJyaWdodFwiLFwiYm90dG9tXCJdOltcImJvdHRvbVwiLFwicmlnaHRcIl0sYz1lLmR1cmF0aW9uLzIsZD10LmVmZmVjdHMuY3JlYXRlUGxhY2Vob2xkZXIocykscD1zLmNzc0NsaXAoKSxmPXtjbGlwOnQuZXh0ZW5kKHt9LHApfSxtPXtjbGlwOnQuZXh0ZW5kKHt9LHApfSxnPVtwW3VbMF1dLHBbdVsxXV1dLF89cy5xdWV1ZSgpLmxlbmd0aDtoJiYocj1wYXJzZUludChoWzFdLDEwKS8xMDAqZ1thPzA6MV0pLGYuY2xpcFt1WzBdXT1yLG0uY2xpcFt1WzBdXT1yLG0uY2xpcFt1WzFdXT0wLG8mJihzLmNzc0NsaXAobS5jbGlwKSxkJiZkLmNzcyh0LmVmZmVjdHMuY2xpcFRvQm94KG0pKSxtLmNsaXA9cCkscy5xdWV1ZShmdW5jdGlvbihpKXtkJiZkLmFuaW1hdGUodC5lZmZlY3RzLmNsaXBUb0JveChmKSxjLGUuZWFzaW5nKS5hbmltYXRlKHQuZWZmZWN0cy5jbGlwVG9Cb3gobSksYyxlLmVhc2luZyksaSgpfSkuYW5pbWF0ZShmLGMsZS5lYXNpbmcpLmFuaW1hdGUobSxjLGUuZWFzaW5nKS5xdWV1ZShpKSx0LmVmZmVjdHMudW5zaGlmdChzLF8sNCl9KSx0LmVmZmVjdHMuZGVmaW5lKFwiaGlnaGxpZ2h0XCIsXCJzaG93XCIsZnVuY3Rpb24oZSxpKXt2YXIgcz10KHRoaXMpLG49e2JhY2tncm91bmRDb2xvcjpzLmNzcyhcImJhY2tncm91bmRDb2xvclwiKX07XCJoaWRlXCI9PT1lLm1vZGUmJihuLm9wYWNpdHk9MCksdC5lZmZlY3RzLnNhdmVTdHlsZShzKSxzLmNzcyh7YmFja2dyb3VuZEltYWdlOlwibm9uZVwiLGJhY2tncm91bmRDb2xvcjplLmNvbG9yfHxcIiNmZmZmOTlcIn0pLmFuaW1hdGUobix7cXVldWU6ITEsZHVyYXRpb246ZS5kdXJhdGlvbixlYXNpbmc6ZS5lYXNpbmcsY29tcGxldGU6aX0pfSksdC5lZmZlY3RzLmRlZmluZShcInNpemVcIixmdW5jdGlvbihlLGkpe3ZhciBzLG4sbyxhPXQodGhpcykscj1bXCJmb250U2l6ZVwiXSxoPVtcImJvcmRlclRvcFdpZHRoXCIsXCJib3JkZXJCb3R0b21XaWR0aFwiLFwicGFkZGluZ1RvcFwiLFwicGFkZGluZ0JvdHRvbVwiXSxsPVtcImJvcmRlckxlZnRXaWR0aFwiLFwiYm9yZGVyUmlnaHRXaWR0aFwiLFwicGFkZGluZ0xlZnRcIixcInBhZGRpbmdSaWdodFwiXSx1PWUubW9kZSxjPVwiZWZmZWN0XCIhPT11LGQ9ZS5zY2FsZXx8XCJib3RoXCIscD1lLm9yaWdpbnx8W1wibWlkZGxlXCIsXCJjZW50ZXJcIl0sZj1hLmNzcyhcInBvc2l0aW9uXCIpLG09YS5wb3NpdGlvbigpLGc9dC5lZmZlY3RzLnNjYWxlZERpbWVuc2lvbnMoYSksXz1lLmZyb218fGcsdj1lLnRvfHx0LmVmZmVjdHMuc2NhbGVkRGltZW5zaW9ucyhhLDApO3QuZWZmZWN0cy5jcmVhdGVQbGFjZWhvbGRlcihhKSxcInNob3dcIj09PXUmJihvPV8sXz12LHY9byksbj17ZnJvbTp7eTpfLmhlaWdodC9nLmhlaWdodCx4Ol8ud2lkdGgvZy53aWR0aH0sdG86e3k6di5oZWlnaHQvZy5oZWlnaHQseDp2LndpZHRoL2cud2lkdGh9fSwoXCJib3hcIj09PWR8fFwiYm90aFwiPT09ZCkmJihuLmZyb20ueSE9PW4udG8ueSYmKF89dC5lZmZlY3RzLnNldFRyYW5zaXRpb24oYSxoLG4uZnJvbS55LF8pLHY9dC5lZmZlY3RzLnNldFRyYW5zaXRpb24oYSxoLG4udG8ueSx2KSksbi5mcm9tLnghPT1uLnRvLngmJihfPXQuZWZmZWN0cy5zZXRUcmFuc2l0aW9uKGEsbCxuLmZyb20ueCxfKSx2PXQuZWZmZWN0cy5zZXRUcmFuc2l0aW9uKGEsbCxuLnRvLngsdikpKSwoXCJjb250ZW50XCI9PT1kfHxcImJvdGhcIj09PWQpJiZuLmZyb20ueSE9PW4udG8ueSYmKF89dC5lZmZlY3RzLnNldFRyYW5zaXRpb24oYSxyLG4uZnJvbS55LF8pLHY9dC5lZmZlY3RzLnNldFRyYW5zaXRpb24oYSxyLG4udG8ueSx2KSkscCYmKHM9dC5lZmZlY3RzLmdldEJhc2VsaW5lKHAsZyksXy50b3A9KGcub3V0ZXJIZWlnaHQtXy5vdXRlckhlaWdodCkqcy55K20udG9wLF8ubGVmdD0oZy5vdXRlcldpZHRoLV8ub3V0ZXJXaWR0aCkqcy54K20ubGVmdCx2LnRvcD0oZy5vdXRlckhlaWdodC12Lm91dGVySGVpZ2h0KSpzLnkrbS50b3Asdi5sZWZ0PShnLm91dGVyV2lkdGgtdi5vdXRlcldpZHRoKSpzLngrbS5sZWZ0KSxhLmNzcyhfKSwoXCJjb250ZW50XCI9PT1kfHxcImJvdGhcIj09PWQpJiYoaD1oLmNvbmNhdChbXCJtYXJnaW5Ub3BcIixcIm1hcmdpbkJvdHRvbVwiXSkuY29uY2F0KHIpLGw9bC5jb25jYXQoW1wibWFyZ2luTGVmdFwiLFwibWFyZ2luUmlnaHRcIl0pLGEuZmluZChcIipbd2lkdGhdXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgaT10KHRoaXMpLHM9dC5lZmZlY3RzLnNjYWxlZERpbWVuc2lvbnMoaSksbz17aGVpZ2h0OnMuaGVpZ2h0Km4uZnJvbS55LHdpZHRoOnMud2lkdGgqbi5mcm9tLngsb3V0ZXJIZWlnaHQ6cy5vdXRlckhlaWdodCpuLmZyb20ueSxvdXRlcldpZHRoOnMub3V0ZXJXaWR0aCpuLmZyb20ueH0sYT17aGVpZ2h0OnMuaGVpZ2h0Km4udG8ueSx3aWR0aDpzLndpZHRoKm4udG8ueCxvdXRlckhlaWdodDpzLmhlaWdodCpuLnRvLnksb3V0ZXJXaWR0aDpzLndpZHRoKm4udG8ueH07bi5mcm9tLnkhPT1uLnRvLnkmJihvPXQuZWZmZWN0cy5zZXRUcmFuc2l0aW9uKGksaCxuLmZyb20ueSxvKSxhPXQuZWZmZWN0cy5zZXRUcmFuc2l0aW9uKGksaCxuLnRvLnksYSkpLG4uZnJvbS54IT09bi50by54JiYobz10LmVmZmVjdHMuc2V0VHJhbnNpdGlvbihpLGwsbi5mcm9tLngsbyksYT10LmVmZmVjdHMuc2V0VHJhbnNpdGlvbihpLGwsbi50by54LGEpKSxjJiZ0LmVmZmVjdHMuc2F2ZVN0eWxlKGkpLGkuY3NzKG8pLGkuYW5pbWF0ZShhLGUuZHVyYXRpb24sZS5lYXNpbmcsZnVuY3Rpb24oKXtjJiZ0LmVmZmVjdHMucmVzdG9yZVN0eWxlKGkpfSl9KSksYS5hbmltYXRlKHYse3F1ZXVlOiExLGR1cmF0aW9uOmUuZHVyYXRpb24sZWFzaW5nOmUuZWFzaW5nLGNvbXBsZXRlOmZ1bmN0aW9uKCl7dmFyIGU9YS5vZmZzZXQoKTswPT09di5vcGFjaXR5JiZhLmNzcyhcIm9wYWNpdHlcIixfLm9wYWNpdHkpLGN8fChhLmNzcyhcInBvc2l0aW9uXCIsXCJzdGF0aWNcIj09PWY/XCJyZWxhdGl2ZVwiOmYpLm9mZnNldChlKSx0LmVmZmVjdHMuc2F2ZVN0eWxlKGEpKSxpKCl9fSl9KSx0LmVmZmVjdHMuZGVmaW5lKFwic2NhbGVcIixmdW5jdGlvbihlLGkpe3ZhciBzPXQodGhpcyksbj1lLm1vZGUsbz1wYXJzZUludChlLnBlcmNlbnQsMTApfHwoMD09PXBhcnNlSW50KGUucGVyY2VudCwxMCk/MDpcImVmZmVjdFwiIT09bj8wOjEwMCksYT10LmV4dGVuZCghMCx7ZnJvbTp0LmVmZmVjdHMuc2NhbGVkRGltZW5zaW9ucyhzKSx0bzp0LmVmZmVjdHMuc2NhbGVkRGltZW5zaW9ucyhzLG8sZS5kaXJlY3Rpb258fFwiYm90aFwiKSxvcmlnaW46ZS5vcmlnaW58fFtcIm1pZGRsZVwiLFwiY2VudGVyXCJdfSxlKTtlLmZhZGUmJihhLmZyb20ub3BhY2l0eT0xLGEudG8ub3BhY2l0eT0wKSx0LmVmZmVjdHMuZWZmZWN0LnNpemUuY2FsbCh0aGlzLGEsaSl9KSx0LmVmZmVjdHMuZGVmaW5lKFwicHVmZlwiLFwiaGlkZVwiLGZ1bmN0aW9uKGUsaSl7dmFyIHM9dC5leHRlbmQoITAse30sZSx7ZmFkZTohMCxwZXJjZW50OnBhcnNlSW50KGUucGVyY2VudCwxMCl8fDE1MH0pO3QuZWZmZWN0cy5lZmZlY3Quc2NhbGUuY2FsbCh0aGlzLHMsaSl9KSx0LmVmZmVjdHMuZGVmaW5lKFwicHVsc2F0ZVwiLFwic2hvd1wiLGZ1bmN0aW9uKGUsaSl7dmFyIHM9dCh0aGlzKSxuPWUubW9kZSxvPVwic2hvd1wiPT09bixhPVwiaGlkZVwiPT09bixyPW98fGEsaD0yKihlLnRpbWVzfHw1KSsocj8xOjApLGw9ZS5kdXJhdGlvbi9oLHU9MCxjPTEsZD1zLnF1ZXVlKCkubGVuZ3RoO2Zvcigob3x8IXMuaXMoXCI6dmlzaWJsZVwiKSkmJihzLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCksdT0xKTtoPmM7YysrKXMuYW5pbWF0ZSh7b3BhY2l0eTp1fSxsLGUuZWFzaW5nKSx1PTEtdTtzLmFuaW1hdGUoe29wYWNpdHk6dX0sbCxlLmVhc2luZykscy5xdWV1ZShpKSx0LmVmZmVjdHMudW5zaGlmdChzLGQsaCsxKX0pLHQuZWZmZWN0cy5kZWZpbmUoXCJzaGFrZVwiLGZ1bmN0aW9uKGUsaSl7dmFyIHM9MSxuPXQodGhpcyksbz1lLmRpcmVjdGlvbnx8XCJsZWZ0XCIsYT1lLmRpc3RhbmNlfHwyMCxyPWUudGltZXN8fDMsaD0yKnIrMSxsPU1hdGgucm91bmQoZS5kdXJhdGlvbi9oKSx1PVwidXBcIj09PW98fFwiZG93blwiPT09bz9cInRvcFwiOlwibGVmdFwiLGM9XCJ1cFwiPT09b3x8XCJsZWZ0XCI9PT1vLGQ9e30scD17fSxmPXt9LG09bi5xdWV1ZSgpLmxlbmd0aDtmb3IodC5lZmZlY3RzLmNyZWF0ZVBsYWNlaG9sZGVyKG4pLGRbdV09KGM/XCItPVwiOlwiKz1cIikrYSxwW3VdPShjP1wiKz1cIjpcIi09XCIpKzIqYSxmW3VdPShjP1wiLT1cIjpcIis9XCIpKzIqYSxuLmFuaW1hdGUoZCxsLGUuZWFzaW5nKTtyPnM7cysrKW4uYW5pbWF0ZShwLGwsZS5lYXNpbmcpLmFuaW1hdGUoZixsLGUuZWFzaW5nKTtuLmFuaW1hdGUocCxsLGUuZWFzaW5nKS5hbmltYXRlKGQsbC8yLGUuZWFzaW5nKS5xdWV1ZShpKSx0LmVmZmVjdHMudW5zaGlmdChuLG0saCsxKX0pLHQuZWZmZWN0cy5kZWZpbmUoXCJzbGlkZVwiLFwic2hvd1wiLGZ1bmN0aW9uKGUsaSl7dmFyIHMsbixvPXQodGhpcyksYT17dXA6W1wiYm90dG9tXCIsXCJ0b3BcIl0sZG93bjpbXCJ0b3BcIixcImJvdHRvbVwiXSxsZWZ0OltcInJpZ2h0XCIsXCJsZWZ0XCJdLHJpZ2h0OltcImxlZnRcIixcInJpZ2h0XCJdfSxyPWUubW9kZSxoPWUuZGlyZWN0aW9ufHxcImxlZnRcIixsPVwidXBcIj09PWh8fFwiZG93blwiPT09aD9cInRvcFwiOlwibGVmdFwiLHU9XCJ1cFwiPT09aHx8XCJsZWZ0XCI9PT1oLGM9ZS5kaXN0YW5jZXx8b1tcInRvcFwiPT09bD9cIm91dGVySGVpZ2h0XCI6XCJvdXRlcldpZHRoXCJdKCEwKSxkPXt9O3QuZWZmZWN0cy5jcmVhdGVQbGFjZWhvbGRlcihvKSxzPW8uY3NzQ2xpcCgpLG49by5wb3NpdGlvbigpW2xdLGRbbF09KHU/LTE6MSkqYytuLGQuY2xpcD1vLmNzc0NsaXAoKSxkLmNsaXBbYVtoXVsxXV09ZC5jbGlwW2FbaF1bMF1dLFwic2hvd1wiPT09ciYmKG8uY3NzQ2xpcChkLmNsaXApLG8uY3NzKGwsZFtsXSksZC5jbGlwPXMsZFtsXT1uKSxvLmFuaW1hdGUoZCx7cXVldWU6ITEsZHVyYXRpb246ZS5kdXJhdGlvbixlYXNpbmc6ZS5lYXNpbmcsY29tcGxldGU6aX0pfSk7dmFyIHY7dC51aUJhY2tDb21wYXQhPT0hMSYmKHY9dC5lZmZlY3RzLmRlZmluZShcInRyYW5zZmVyXCIsZnVuY3Rpb24oZSxpKXt0KHRoaXMpLnRyYW5zZmVyKGUsaSl9KSl9KTsiLCIvKiFcbiAqIGpRdWVyeSBNb3VzZXdoZWVsIDMuMS4xM1xuICogQ29weXJpZ2h0IE9wZW5KUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqL1xuIWZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWU6ZShqUXVlcnkpfShmdW5jdGlvbih1KXt2YXIgZixkLGU9W1wid2hlZWxcIixcIm1vdXNld2hlZWxcIixcIkRPTU1vdXNlU2Nyb2xsXCIsXCJNb3pNb3VzZVBpeGVsU2Nyb2xsXCJdLHQ9XCJvbndoZWVsXCJpbiB3aW5kb3cuZG9jdW1lbnR8fDk8PXdpbmRvdy5kb2N1bWVudC5kb2N1bWVudE1vZGU/W1wid2hlZWxcIl06W1wibW91c2V3aGVlbFwiLFwiRG9tTW91c2VTY3JvbGxcIixcIk1vek1vdXNlUGl4ZWxTY3JvbGxcIl0sdz1BcnJheS5wcm90b3R5cGUuc2xpY2U7aWYodS5ldmVudC5maXhIb29rcylmb3IodmFyIGk9ZS5sZW5ndGg7aTspdS5ldmVudC5maXhIb29rc1tlWy0taV1dPXUuZXZlbnQubW91c2VIb29rczt2YXIgYz11LmV2ZW50LnNwZWNpYWwubW91c2V3aGVlbD17dmVyc2lvbjpcIjMuMS4xMlwiLHNldHVwOmZ1bmN0aW9uKCl7aWYodGhpcy5hZGRFdmVudExpc3RlbmVyKWZvcih2YXIgZT10Lmxlbmd0aDtlOyl0aGlzLmFkZEV2ZW50TGlzdGVuZXIodFstLWVdLG4sITEpO2Vsc2UgdGhpcy5vbm1vdXNld2hlZWw9bjt1LmRhdGEodGhpcyxcIm1vdXNld2hlZWwtbGluZS1oZWlnaHRcIixjLmdldExpbmVIZWlnaHQodGhpcykpLHUuZGF0YSh0aGlzLFwibW91c2V3aGVlbC1wYWdlLWhlaWdodFwiLGMuZ2V0UGFnZUhlaWdodCh0aGlzKSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7aWYodGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKWZvcih2YXIgZT10Lmxlbmd0aDtlOyl0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodFstLWVdLG4sITEpO2Vsc2UgdGhpcy5vbm1vdXNld2hlZWw9bnVsbDt1LnJlbW92ZURhdGEodGhpcyxcIm1vdXNld2hlZWwtbGluZS1oZWlnaHRcIiksdS5yZW1vdmVEYXRhKHRoaXMsXCJtb3VzZXdoZWVsLXBhZ2UtaGVpZ2h0XCIpfSxnZXRMaW5lSGVpZ2h0OmZ1bmN0aW9uKGUpe3ZhciB0PXUoZSksaT10W1wib2Zmc2V0UGFyZW50XCJpbiB1LmZuP1wib2Zmc2V0UGFyZW50XCI6XCJwYXJlbnRcIl0oKTtyZXR1cm4gaS5sZW5ndGh8fChpPXUoXCJib2R5XCIpKSxwYXJzZUludChpLmNzcyhcImZvbnRTaXplXCIpLDEwKXx8cGFyc2VJbnQodC5jc3MoXCJmb250U2l6ZVwiKSwxMCl8fDE2fSxnZXRQYWdlSGVpZ2h0OmZ1bmN0aW9uKGUpe3JldHVybiB1KGUpLmhlaWdodCgpfSxzZXR0aW5nczp7YWRqdXN0T2xkRGVsdGFzOiEwLG5vcm1hbGl6ZU9mZnNldDohMH19O2Z1bmN0aW9uIG4oZSl7dmFyIHQsaT1lfHx3aW5kb3cuZXZlbnQsbj13LmNhbGwoYXJndW1lbnRzLDEpLG89MCxsPTAscz0wO2lmKChlPXUuZXZlbnQuZml4KGkpKS50eXBlPVwibW91c2V3aGVlbFwiLFwiZGV0YWlsXCJpbiBpJiYocz0tMSppLmRldGFpbCksXCJ3aGVlbERlbHRhXCJpbiBpJiYocz1pLndoZWVsRGVsdGEpLFwid2hlZWxEZWx0YVlcImluIGkmJihzPWkud2hlZWxEZWx0YVkpLFwid2hlZWxEZWx0YVhcImluIGkmJihsPS0xKmkud2hlZWxEZWx0YVgpLFwiYXhpc1wiaW4gaSYmaS5heGlzPT09aS5IT1JJWk9OVEFMX0FYSVMmJihsPS0xKnMscz0wKSxvPTA9PT1zP2w6cyxcImRlbHRhWVwiaW4gaSYmKG89cz0tMSppLmRlbHRhWSksXCJkZWx0YVhcImluIGkmJihsPWkuZGVsdGFYLDA9PT1zJiYobz0tMSpsKSksMCE9PXN8fDAhPT1sKXtpZigxPT09aS5kZWx0YU1vZGUpe3ZhciBhPXUuZGF0YSh0aGlzLFwibW91c2V3aGVlbC1saW5lLWhlaWdodFwiKTtvKj1hLHMqPWEsbCo9YX1lbHNlIGlmKDI9PT1pLmRlbHRhTW9kZSl7dmFyIGg9dS5kYXRhKHRoaXMsXCJtb3VzZXdoZWVsLXBhZ2UtaGVpZ2h0XCIpO28qPWgscyo9aCxsKj1ofWlmKHQ9TWF0aC5tYXgoTWF0aC5hYnMocyksTWF0aC5hYnMobCkpLCghZHx8dDxkKSYmZyhpLGQ9dCkmJihkLz00MCksZyhpLHQpJiYoby89NDAsbC89NDAscy89NDApLG89TWF0aFsxPD1vP1wiZmxvb3JcIjpcImNlaWxcIl0oby9kKSxsPU1hdGhbMTw9bD9cImZsb29yXCI6XCJjZWlsXCJdKGwvZCkscz1NYXRoWzE8PXM/XCJmbG9vclwiOlwiY2VpbFwiXShzL2QpLGMuc2V0dGluZ3Mubm9ybWFsaXplT2Zmc2V0JiZ0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCl7dmFyIHI9dGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtlLm9mZnNldFg9ZS5jbGllbnRYLXIubGVmdCxlLm9mZnNldFk9ZS5jbGllbnRZLXIudG9wfXJldHVybiBlLmRlbHRhWD1sLGUuZGVsdGFZPXMsZS5kZWx0YUZhY3Rvcj1kLGUuZGVsdGFNb2RlPTAsbi51bnNoaWZ0KGUsbyxsLHMpLGYmJndpbmRvdy5jbGVhclRpbWVvdXQoZiksZj13aW5kb3cuc2V0VGltZW91dChtLDIwMCksKHUuZXZlbnQuZGlzcGF0Y2h8fHUuZXZlbnQuaGFuZGxlKS5hcHBseSh0aGlzLG4pfX1mdW5jdGlvbiBtKCl7ZD1udWxsfWZ1bmN0aW9uIGcoZSx0KXtyZXR1cm4gYy5zZXR0aW5ncy5hZGp1c3RPbGREZWx0YXMmJlwibW91c2V3aGVlbFwiPT09ZS50eXBlJiZ0JTEyMD09MH11LmZuLmV4dGVuZCh7bW91c2V3aGVlbDpmdW5jdGlvbihlKXtyZXR1cm4gZT90aGlzLm9uKFwibW91c2V3aGVlbFwiLGUpOnRoaXMudHJpZ2dlcihcIm1vdXNld2hlZWxcIil9LHVubW91c2V3aGVlbDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vZmYoXCJtb3VzZXdoZWVsXCIsZSl9fSl9KTsiLCIvKiBNb2Rlcm5penIgMi44LjMgKEN1c3RvbSBCdWlsZCkgfCBNSVQgJiBCU0RcbiAqIEJ1aWxkOiBodHRwOi8vbW9kZXJuaXpyLmNvbS9kb3dubG9hZC8jLWZvbnRmYWNlLWJhY2tncm91bmRzaXplLWJvcmRlcmltYWdlLWJvcmRlcnJhZGl1cy1ib3hzaGFkb3ctZmxleGJveC1mbGV4Ym94bGVnYWN5LWhzbGEtbXVsdGlwbGViZ3Mtb3BhY2l0eS1yZ2JhLXRleHRzaGFkb3ctY3NzYW5pbWF0aW9ucy1jc3Njb2x1bW5zLWdlbmVyYXRlZGNvbnRlbnQtY3NzZ3JhZGllbnRzLWNzc3JlZmxlY3Rpb25zLWNzc3RyYW5zZm9ybXMtY3NzdHJhbnNmb3JtczNkLWNzc3RyYW5zaXRpb25zLWFwcGxpY2F0aW9uY2FjaGUtY2FudmFzLWNhbnZhc3RleHQtZHJhZ2FuZGRyb3AtaGFzaGNoYW5nZS1oaXN0b3J5LWF1ZGlvLXZpZGVvLWluZGV4ZWRkYi1pbnB1dC1pbnB1dHR5cGVzLWxvY2Fsc3RvcmFnZS1wb3N0bWVzc2FnZS1zZXNzaW9uc3RvcmFnZS13ZWJzb2NrZXRzLXdlYnNxbGRhdGFiYXNlLXdlYndvcmtlcnMtZ2VvbG9jYXRpb24taW5saW5lc3ZnLXN2Zy10b3VjaC13ZWJnbC1zaGl2LWNzc2NsYXNzZXMtdGVzdHN0eWxlcy10ZXN0cHJvcC10ZXN0YWxscHJvcHMtaGFzZXZlbnQtcHJlZml4ZXMtZG9tcHJlZml4ZXMtbG9hZFxuICovXG47d2luZG93Lk1vZGVybml6cj1mdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gQyhhKXtqLmNzc1RleHQ9YX1mdW5jdGlvbiBEKGEsYil7cmV0dXJuIEMobi5qb2luKGErXCI7XCIpKyhifHxcIlwiKSl9ZnVuY3Rpb24gRShhLGIpe3JldHVybiB0eXBlb2YgYT09PWJ9ZnVuY3Rpb24gRihhLGIpe3JldHVybiEhfihcIlwiK2EpLmluZGV4T2YoYil9ZnVuY3Rpb24gRyhhLGIpe2Zvcih2YXIgZCBpbiBhKXt2YXIgZT1hW2RdO2lmKCFGKGUsXCItXCIpJiZqW2VdIT09YylyZXR1cm4gYj09XCJwZnhcIj9lOiEwfXJldHVybiExfWZ1bmN0aW9uIEgoYSxiLGQpe2Zvcih2YXIgZSBpbiBhKXt2YXIgZj1iW2FbZV1dO2lmKGYhPT1jKXJldHVybiBkPT09ITE/YVtlXTpFKGYsXCJmdW5jdGlvblwiKT9mLmJpbmQoZHx8Yik6Zn1yZXR1cm4hMX1mdW5jdGlvbiBJKGEsYixjKXt2YXIgZD1hLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSksZT0oYStcIiBcIitwLmpvaW4oZCtcIiBcIikrZCkuc3BsaXQoXCIgXCIpO3JldHVybiBFKGIsXCJzdHJpbmdcIil8fEUoYixcInVuZGVmaW5lZFwiKT9HKGUsYik6KGU9KGErXCIgXCIrcS5qb2luKGQrXCIgXCIpK2QpLnNwbGl0KFwiIFwiKSxIKGUsYixjKSl9ZnVuY3Rpb24gSigpe2UuaW5wdXQ9ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKXVbY1tkXV09Y1tkXWluIGs7cmV0dXJuIHUubGlzdCYmKHUubGlzdD0hIWIuY3JlYXRlRWxlbWVudChcImRhdGFsaXN0XCIpJiYhIWEuSFRNTERhdGFMaXN0RWxlbWVudCksdX0oXCJhdXRvY29tcGxldGUgYXV0b2ZvY3VzIGxpc3QgcGxhY2Vob2xkZXIgbWF4IG1pbiBtdWx0aXBsZSBwYXR0ZXJuIHJlcXVpcmVkIHN0ZXBcIi5zcGxpdChcIiBcIikpLGUuaW5wdXR0eXBlcz1mdW5jdGlvbihhKXtmb3IodmFyIGQ9MCxlLGYsaCxpPWEubGVuZ3RoO2Q8aTtkKyspay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsZj1hW2RdKSxlPWsudHlwZSE9PVwidGV4dFwiLGUmJihrLnZhbHVlPWwsay5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7dmlzaWJpbGl0eTpoaWRkZW47XCIsL15yYW5nZSQvLnRlc3QoZikmJmsuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSE9PWM/KGcuYXBwZW5kQ2hpbGQoayksaD1iLmRlZmF1bHRWaWV3LGU9aC5nZXRDb21wdXRlZFN0eWxlJiZoLmdldENvbXB1dGVkU3R5bGUoayxudWxsKS5XZWJraXRBcHBlYXJhbmNlIT09XCJ0ZXh0ZmllbGRcIiYmay5vZmZzZXRIZWlnaHQhPT0wLGcucmVtb3ZlQ2hpbGQoaykpOi9eKHNlYXJjaHx0ZWwpJC8udGVzdChmKXx8KC9eKHVybHxlbWFpbCkkLy50ZXN0KGYpP2U9ay5jaGVja1ZhbGlkaXR5JiZrLmNoZWNrVmFsaWRpdHkoKT09PSExOmU9ay52YWx1ZSE9bCkpLHRbYVtkXV09ISFlO3JldHVybiB0fShcInNlYXJjaCB0ZWwgdXJsIGVtYWlsIGRhdGV0aW1lIGRhdGUgbW9udGggd2VlayB0aW1lIGRhdGV0aW1lLWxvY2FsIG51bWJlciByYW5nZSBjb2xvclwiLnNwbGl0KFwiIFwiKSl9dmFyIGQ9XCIyLjguM1wiLGU9e30sZj0hMCxnPWIuZG9jdW1lbnRFbGVtZW50LGg9XCJtb2Rlcm5penJcIixpPWIuY3JlYXRlRWxlbWVudChoKSxqPWkuc3R5bGUsaz1iLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxsPVwiOilcIixtPXt9LnRvU3RyaW5nLG49XCIgLXdlYmtpdC0gLW1vei0gLW8tIC1tcy0gXCIuc3BsaXQoXCIgXCIpLG89XCJXZWJraXQgTW96IE8gbXNcIixwPW8uc3BsaXQoXCIgXCIpLHE9by50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKSxyPXtzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifSxzPXt9LHQ9e30sdT17fSx2PVtdLHc9di5zbGljZSx4LHk9ZnVuY3Rpb24oYSxjLGQsZSl7dmFyIGYsaSxqLGssbD1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbT1iLmJvZHksbj1tfHxiLmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIpO2lmKHBhcnNlSW50KGQsMTApKXdoaWxlKGQtLSlqPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxqLmlkPWU/ZVtkXTpoKyhkKzEpLGwuYXBwZW5kQ2hpbGQoaik7cmV0dXJuIGY9W1wiJiMxNzM7XCIsJzxzdHlsZSBpZD1cInMnLGgsJ1wiPicsYSxcIjwvc3R5bGU+XCJdLmpvaW4oXCJcIiksbC5pZD1oLChtP2w6bikuaW5uZXJIVE1MKz1mLG4uYXBwZW5kQ2hpbGQobCksbXx8KG4uc3R5bGUuYmFja2dyb3VuZD1cIlwiLG4uc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixrPWcuc3R5bGUub3ZlcmZsb3csZy5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLGcuYXBwZW5kQ2hpbGQobikpLGk9YyhsLGEpLG0/bC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGwpOihuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobiksZy5zdHlsZS5vdmVyZmxvdz1rKSwhIWl9LHo9ZnVuY3Rpb24oKXtmdW5jdGlvbiBkKGQsZSl7ZT1lfHxiLmNyZWF0ZUVsZW1lbnQoYVtkXXx8XCJkaXZcIiksZD1cIm9uXCIrZDt2YXIgZj1kIGluIGU7cmV0dXJuIGZ8fChlLnNldEF0dHJpYnV0ZXx8KGU9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxlLnNldEF0dHJpYnV0ZSYmZS5yZW1vdmVBdHRyaWJ1dGUmJihlLnNldEF0dHJpYnV0ZShkLFwiXCIpLGY9RShlW2RdLFwiZnVuY3Rpb25cIiksRShlW2RdLFwidW5kZWZpbmVkXCIpfHwoZVtkXT1jKSxlLnJlbW92ZUF0dHJpYnV0ZShkKSkpLGU9bnVsbCxmfXZhciBhPXtzZWxlY3Q6XCJpbnB1dFwiLGNoYW5nZTpcImlucHV0XCIsc3VibWl0OlwiZm9ybVwiLHJlc2V0OlwiZm9ybVwiLGVycm9yOlwiaW1nXCIsbG9hZDpcImltZ1wiLGFib3J0OlwiaW1nXCJ9O3JldHVybiBkfSgpLEE9e30uaGFzT3duUHJvcGVydHksQjshRShBLFwidW5kZWZpbmVkXCIpJiYhRShBLmNhbGwsXCJ1bmRlZmluZWRcIik/Qj1mdW5jdGlvbihhLGIpe3JldHVybiBBLmNhbGwoYSxiKX06Qj1mdW5jdGlvbihhLGIpe3JldHVybiBiIGluIGEmJkUoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbYl0sXCJ1bmRlZmluZWRcIil9LEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kfHwoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oYil7dmFyIGM9dGhpcztpZih0eXBlb2YgYyE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIGQ9dy5jYWxsKGFyZ3VtZW50cywxKSxlPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIGUpe3ZhciBhPWZ1bmN0aW9uKCl7fTthLnByb3RvdHlwZT1jLnByb3RvdHlwZTt2YXIgZj1uZXcgYSxnPWMuYXBwbHkoZixkLmNvbmNhdCh3LmNhbGwoYXJndW1lbnRzKSkpO3JldHVybiBPYmplY3QoZyk9PT1nP2c6Zn1yZXR1cm4gYy5hcHBseShiLGQuY29uY2F0KHcuY2FsbChhcmd1bWVudHMpKSl9O3JldHVybiBlfSkscy5mbGV4Ym94PWZ1bmN0aW9uKCl7cmV0dXJuIEkoXCJmbGV4V3JhcFwiKX0scy5mbGV4Ym94bGVnYWN5PWZ1bmN0aW9uKCl7cmV0dXJuIEkoXCJib3hEaXJlY3Rpb25cIil9LHMuY2FudmFzPWZ1bmN0aW9uKCl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3JldHVybiEhYS5nZXRDb250ZXh0JiYhIWEuZ2V0Q29udGV4dChcIjJkXCIpfSxzLmNhbnZhc3RleHQ9ZnVuY3Rpb24oKXtyZXR1cm4hIWUuY2FudmFzJiYhIUUoYi5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKS5maWxsVGV4dCxcImZ1bmN0aW9uXCIpfSxzLndlYmdsPWZ1bmN0aW9uKCl7cmV0dXJuISFhLldlYkdMUmVuZGVyaW5nQ29udGV4dH0scy50b3VjaD1mdW5jdGlvbigpe3ZhciBjO3JldHVyblwib250b3VjaHN0YXJ0XCJpbiBhfHxhLkRvY3VtZW50VG91Y2gmJmIgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoP2M9ITA6eShbXCJAbWVkaWEgKFwiLG4uam9pbihcInRvdWNoLWVuYWJsZWQpLChcIiksaCxcIilcIixcInsjbW9kZXJuaXpye3RvcDo5cHg7cG9zaXRpb246YWJzb2x1dGV9fVwiXS5qb2luKFwiXCIpLGZ1bmN0aW9uKGEpe2M9YS5vZmZzZXRUb3A9PT05fSksY30scy5nZW9sb2NhdGlvbj1mdW5jdGlvbigpe3JldHVyblwiZ2VvbG9jYXRpb25cImluIG5hdmlnYXRvcn0scy5wb3N0bWVzc2FnZT1mdW5jdGlvbigpe3JldHVybiEhYS5wb3N0TWVzc2FnZX0scy53ZWJzcWxkYXRhYmFzZT1mdW5jdGlvbigpe3JldHVybiEhYS5vcGVuRGF0YWJhc2V9LHMuaW5kZXhlZERCPWZ1bmN0aW9uKCl7cmV0dXJuISFJKFwiaW5kZXhlZERCXCIsYSl9LHMuaGFzaGNoYW5nZT1mdW5jdGlvbigpe3JldHVybiB6KFwiaGFzaGNoYW5nZVwiLGEpJiYoYi5kb2N1bWVudE1vZGU9PT1jfHxiLmRvY3VtZW50TW9kZT43KX0scy5oaXN0b3J5PWZ1bmN0aW9uKCl7cmV0dXJuISFhLmhpc3RvcnkmJiEhaGlzdG9yeS5wdXNoU3RhdGV9LHMuZHJhZ2FuZGRyb3A9ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuXCJkcmFnZ2FibGVcImluIGF8fFwib25kcmFnc3RhcnRcImluIGEmJlwib25kcm9wXCJpbiBhfSxzLndlYnNvY2tldHM9ZnVuY3Rpb24oKXtyZXR1cm5cIldlYlNvY2tldFwiaW4gYXx8XCJNb3pXZWJTb2NrZXRcImluIGF9LHMucmdiYT1mdW5jdGlvbigpe3JldHVybiBDKFwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MCwyNTUsMTUwLC41KVwiKSxGKGouYmFja2dyb3VuZENvbG9yLFwicmdiYVwiKX0scy5oc2xhPWZ1bmN0aW9uKCl7cmV0dXJuIEMoXCJiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMTIwLDQwJSwxMDAlLC41KVwiKSxGKGouYmFja2dyb3VuZENvbG9yLFwicmdiYVwiKXx8RihqLmJhY2tncm91bmRDb2xvcixcImhzbGFcIil9LHMubXVsdGlwbGViZ3M9ZnVuY3Rpb24oKXtyZXR1cm4gQyhcImJhY2tncm91bmQ6dXJsKGh0dHBzOi8vKSx1cmwoaHR0cHM6Ly8pLHJlZCB1cmwoaHR0cHM6Ly8pXCIpLC8odXJsXFxzKlxcKC4qPyl7M30vLnRlc3Qoai5iYWNrZ3JvdW5kKX0scy5iYWNrZ3JvdW5kc2l6ZT1mdW5jdGlvbigpe3JldHVybiBJKFwiYmFja2dyb3VuZFNpemVcIil9LHMuYm9yZGVyaW1hZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gSShcImJvcmRlckltYWdlXCIpfSxzLmJvcmRlcnJhZGl1cz1mdW5jdGlvbigpe3JldHVybiBJKFwiYm9yZGVyUmFkaXVzXCIpfSxzLmJveHNoYWRvdz1mdW5jdGlvbigpe3JldHVybiBJKFwiYm94U2hhZG93XCIpfSxzLnRleHRzaGFkb3c9ZnVuY3Rpb24oKXtyZXR1cm4gYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLnRleHRTaGFkb3c9PT1cIlwifSxzLm9wYWNpdHk9ZnVuY3Rpb24oKXtyZXR1cm4gRChcIm9wYWNpdHk6LjU1XCIpLC9eMC41NSQvLnRlc3Qoai5vcGFjaXR5KX0scy5jc3NhbmltYXRpb25zPWZ1bmN0aW9uKCl7cmV0dXJuIEkoXCJhbmltYXRpb25OYW1lXCIpfSxzLmNzc2NvbHVtbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSShcImNvbHVtbkNvdW50XCIpfSxzLmNzc2dyYWRpZW50cz1mdW5jdGlvbigpe3ZhciBhPVwiYmFja2dyb3VuZC1pbWFnZTpcIixiPVwiZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IGJvdHRvbSxmcm9tKCM5ZjkpLHRvKHdoaXRlKSk7XCIsYz1cImxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwjOWY5LCB3aGl0ZSk7XCI7cmV0dXJuIEMoKGErXCItd2Via2l0LSBcIi5zcGxpdChcIiBcIikuam9pbihiK2EpK24uam9pbihjK2EpKS5zbGljZSgwLC1hLmxlbmd0aCkpLEYoai5iYWNrZ3JvdW5kSW1hZ2UsXCJncmFkaWVudFwiKX0scy5jc3NyZWZsZWN0aW9ucz1mdW5jdGlvbigpe3JldHVybiBJKFwiYm94UmVmbGVjdFwiKX0scy5jc3N0cmFuc2Zvcm1zPWZ1bmN0aW9uKCl7cmV0dXJuISFJKFwidHJhbnNmb3JtXCIpfSxzLmNzc3RyYW5zZm9ybXMzZD1mdW5jdGlvbigpe3ZhciBhPSEhSShcInBlcnNwZWN0aXZlXCIpO3JldHVybiBhJiZcIndlYmtpdFBlcnNwZWN0aXZlXCJpbiBnLnN0eWxlJiZ5KFwiQG1lZGlhICh0cmFuc2Zvcm0tM2QpLCgtd2Via2l0LXRyYW5zZm9ybS0zZCl7I21vZGVybml6cntsZWZ0OjlweDtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6M3B4O319XCIsZnVuY3Rpb24oYixjKXthPWIub2Zmc2V0TGVmdD09PTkmJmIub2Zmc2V0SGVpZ2h0PT09M30pLGF9LHMuY3NzdHJhbnNpdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSShcInRyYW5zaXRpb25cIil9LHMuZm9udGZhY2U9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4geSgnQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6XCJmb250XCI7c3JjOnVybChcImh0dHBzOi8vXCIpfScsZnVuY3Rpb24oYyxkKXt2YXIgZT1iLmdldEVsZW1lbnRCeUlkKFwic21vZGVybml6clwiKSxmPWUuc2hlZXR8fGUuc3R5bGVTaGVldCxnPWY/Zi5jc3NSdWxlcyYmZi5jc3NSdWxlc1swXT9mLmNzc1J1bGVzWzBdLmNzc1RleHQ6Zi5jc3NUZXh0fHxcIlwiOlwiXCI7YT0vc3JjL2kudGVzdChnKSYmZy5pbmRleE9mKGQuc3BsaXQoXCIgXCIpWzBdKT09PTB9KSxhfSxzLmdlbmVyYXRlZGNvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4geShbXCIjXCIsaCxcIntmb250OjAvMCBhfSNcIixoLCc6YWZ0ZXJ7Y29udGVudDpcIicsbCwnXCI7dmlzaWJpbGl0eTpoaWRkZW47Zm9udDozcHgvMSBhfSddLmpvaW4oXCJcIiksZnVuY3Rpb24oYil7YT1iLm9mZnNldEhlaWdodD49M30pLGF9LHMudmlkZW89ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKSxjPSExO3RyeXtpZihjPSEhYS5jYW5QbGF5VHlwZSljPW5ldyBCb29sZWFuKGMpLGMub2dnPWEuY2FuUGxheVR5cGUoJ3ZpZGVvL29nZzsgY29kZWNzPVwidGhlb3JhXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxjLmgyNjQ9YS5jYW5QbGF5VHlwZSgndmlkZW8vbXA0OyBjb2RlY3M9XCJhdmMxLjQyRTAxRVwiJykucmVwbGFjZSgvXm5vJC8sXCJcIiksYy53ZWJtPWEuY2FuUGxheVR5cGUoJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOCwgdm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKX1jYXRjaChkKXt9cmV0dXJuIGN9LHMuYXVkaW89ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKSxjPSExO3RyeXtpZihjPSEhYS5jYW5QbGF5VHlwZSljPW5ldyBCb29sZWFuKGMpLGMub2dnPWEuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxjLm1wMz1hLmNhblBsYXlUeXBlKFwiYXVkaW8vbXBlZztcIikucmVwbGFjZSgvXm5vJC8sXCJcIiksYy53YXY9YS5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxjLm00YT0oYS5jYW5QbGF5VHlwZShcImF1ZGlvL3gtbTRhO1wiKXx8YS5jYW5QbGF5VHlwZShcImF1ZGlvL2FhYztcIikpLnJlcGxhY2UoL15ubyQvLFwiXCIpfWNhdGNoKGQpe31yZXR1cm4gY30scy5sb2NhbHN0b3JhZ2U9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGgsaCksbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaCksITB9Y2F0Y2goYSl7cmV0dXJuITF9fSxzLnNlc3Npb25zdG9yYWdlPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGgsaCksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShoKSwhMH1jYXRjaChhKXtyZXR1cm4hMX19LHMud2Vid29ya2Vycz1mdW5jdGlvbigpe3JldHVybiEhYS5Xb3JrZXJ9LHMuYXBwbGljYXRpb25jYWNoZT1mdW5jdGlvbigpe3JldHVybiEhYS5hcHBsaWNhdGlvbkNhY2hlfSxzLnN2Zz1mdW5jdGlvbigpe3JldHVybiEhYi5jcmVhdGVFbGVtZW50TlMmJiEhYi5jcmVhdGVFbGVtZW50TlMoci5zdmcsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdH0scy5pbmxpbmVzdmc9ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPHN2Zy8+XCIsKGEuZmlyc3RDaGlsZCYmYS5maXJzdENoaWxkLm5hbWVzcGFjZVVSSSk9PXIuc3ZnfTtmb3IodmFyIEsgaW4gcylCKHMsSykmJih4PUsudG9Mb3dlckNhc2UoKSxlW3hdPXNbS10oKSx2LnB1c2goKGVbeF0/XCJcIjpcIm5vLVwiKSt4KSk7cmV0dXJuIGUuaW5wdXR8fEooKSxlLmFkZFRlc3Q9ZnVuY3Rpb24oYSxiKXtpZih0eXBlb2YgYT09XCJvYmplY3RcIilmb3IodmFyIGQgaW4gYSlCKGEsZCkmJmUuYWRkVGVzdChkLGFbZF0pO2Vsc2V7YT1hLnRvTG93ZXJDYXNlKCk7aWYoZVthXSE9PWMpcmV0dXJuIGU7Yj10eXBlb2YgYj09XCJmdW5jdGlvblwiP2IoKTpiLHR5cGVvZiBmIT1cInVuZGVmaW5lZFwiJiZmJiYoZy5jbGFzc05hbWUrPVwiIFwiKyhiP1wiXCI6XCJuby1cIikrYSksZVthXT1ifXJldHVybiBlfSxDKFwiXCIpLGk9az1udWxsLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gbChhLGIpe3ZhciBjPWEuY3JlYXRlRWxlbWVudChcInBcIiksZD1hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXXx8YS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGMuaW5uZXJIVE1MPVwieDxzdHlsZT5cIitiK1wiPC9zdHlsZT5cIixkLmluc2VydEJlZm9yZShjLmxhc3RDaGlsZCxkLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIG0oKXt2YXIgYT1zLmVsZW1lbnRzO3JldHVybiB0eXBlb2YgYT09XCJzdHJpbmdcIj9hLnNwbGl0KFwiIFwiKTphfWZ1bmN0aW9uIG4oYSl7dmFyIGI9althW2hdXTtyZXR1cm4gYnx8KGI9e30saSsrLGFbaF09aSxqW2ldPWIpLGJ9ZnVuY3Rpb24gbyhhLGMsZCl7Y3x8KGM9Yik7aWYoaylyZXR1cm4gYy5jcmVhdGVFbGVtZW50KGEpO2R8fChkPW4oYykpO3ZhciBnO3JldHVybiBkLmNhY2hlW2FdP2c9ZC5jYWNoZVthXS5jbG9uZU5vZGUoKTpmLnRlc3QoYSk/Zz0oZC5jYWNoZVthXT1kLmNyZWF0ZUVsZW0oYSkpLmNsb25lTm9kZSgpOmc9ZC5jcmVhdGVFbGVtKGEpLGcuY2FuSGF2ZUNoaWxkcmVuJiYhZS50ZXN0KGEpJiYhZy50YWdVcm4/ZC5mcmFnLmFwcGVuZENoaWxkKGcpOmd9ZnVuY3Rpb24gcChhLGMpe2F8fChhPWIpO2lmKGspcmV0dXJuIGEuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2M9Y3x8bihhKTt2YXIgZD1jLmZyYWcuY2xvbmVOb2RlKCksZT0wLGY9bSgpLGc9Zi5sZW5ndGg7Zm9yKDtlPGc7ZSsrKWQuY3JlYXRlRWxlbWVudChmW2VdKTtyZXR1cm4gZH1mdW5jdGlvbiBxKGEsYil7Yi5jYWNoZXx8KGIuY2FjaGU9e30sYi5jcmVhdGVFbGVtPWEuY3JlYXRlRWxlbWVudCxiLmNyZWF0ZUZyYWc9YS5jcmVhdGVEb2N1bWVudEZyYWdtZW50LGIuZnJhZz1iLmNyZWF0ZUZyYWcoKSksYS5jcmVhdGVFbGVtZW50PWZ1bmN0aW9uKGMpe3JldHVybiBzLnNoaXZNZXRob2RzP28oYyxhLGIpOmIuY3JlYXRlRWxlbShjKX0sYS5jcmVhdGVEb2N1bWVudEZyYWdtZW50PUZ1bmN0aW9uKFwiaCxmXCIsXCJyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1mLmNsb25lTm9kZSgpLGM9bi5jcmVhdGVFbGVtZW50O2guc2hpdk1ldGhvZHMmJihcIittKCkuam9pbigpLnJlcGxhY2UoL1tcXHdcXC1dKy9nLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNyZWF0ZUVsZW0oYSksYi5mcmFnLmNyZWF0ZUVsZW1lbnQoYSksJ2MoXCInK2ErJ1wiKSd9KStcIik7cmV0dXJuIG59XCIpKHMsYi5mcmFnKX1mdW5jdGlvbiByKGEpe2F8fChhPWIpO3ZhciBjPW4oYSk7cmV0dXJuIHMuc2hpdkNTUyYmIWcmJiFjLmhhc0NTUyYmKGMuaGFzQ1NTPSEhbChhLFwiYXJ0aWNsZSxhc2lkZSxkaWFsb2csZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWFpbixuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfW1hcmt7YmFja2dyb3VuZDojRkYwO2NvbG9yOiMwMDB9dGVtcGxhdGV7ZGlzcGxheTpub25lfVwiKSksa3x8cShhLGMpLGF9dmFyIGM9XCIzLjcuMFwiLGQ9YS5odG1sNXx8e30sZT0vXjx8Xig/OmJ1dHRvbnxtYXB8c2VsZWN0fHRleHRhcmVhfG9iamVjdHxpZnJhbWV8b3B0aW9ufG9wdGdyb3VwKSQvaSxmPS9eKD86YXxifGNvZGV8ZGl2fGZpZWxkc2V0fGgxfGgyfGgzfGg0fGg1fGg2fGl8bGFiZWx8bGl8b2x8cHxxfHNwYW58c3Ryb25nfHN0eWxlfHRhYmxlfHRib2R5fHRkfHRofHRyfHVsKSQvaSxnLGg9XCJfaHRtbDVzaGl2XCIsaT0wLGo9e30sazsoZnVuY3Rpb24oKXt0cnl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFwiYVwiKTthLmlubmVySFRNTD1cIjx4eXo+PC94eXo+XCIsZz1cImhpZGRlblwiaW4gYSxrPWEuY2hpbGROb2Rlcy5sZW5ndGg9PTF8fGZ1bmN0aW9uKCl7Yi5jcmVhdGVFbGVtZW50KFwiYVwiKTt2YXIgYT1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtyZXR1cm4gdHlwZW9mIGEuY2xvbmVOb2RlPT1cInVuZGVmaW5lZFwifHx0eXBlb2YgYS5jcmVhdGVEb2N1bWVudEZyYWdtZW50PT1cInVuZGVmaW5lZFwifHx0eXBlb2YgYS5jcmVhdGVFbGVtZW50PT1cInVuZGVmaW5lZFwifSgpfWNhdGNoKGMpe2c9ITAsaz0hMH19KSgpO3ZhciBzPXtlbGVtZW50czpkLmVsZW1lbnRzfHxcImFiYnIgYXJ0aWNsZSBhc2lkZSBhdWRpbyBiZGkgY2FudmFzIGRhdGEgZGF0YWxpc3QgZGV0YWlscyBkaWFsb2cgZmlnY2FwdGlvbiBmaWd1cmUgZm9vdGVyIGhlYWRlciBoZ3JvdXAgbWFpbiBtYXJrIG1ldGVyIG5hdiBvdXRwdXQgcHJvZ3Jlc3Mgc2VjdGlvbiBzdW1tYXJ5IHRlbXBsYXRlIHRpbWUgdmlkZW9cIix2ZXJzaW9uOmMsc2hpdkNTUzpkLnNoaXZDU1MhPT0hMSxzdXBwb3J0c1Vua25vd25FbGVtZW50czprLHNoaXZNZXRob2RzOmQuc2hpdk1ldGhvZHMhPT0hMSx0eXBlOlwiZGVmYXVsdFwiLHNoaXZEb2N1bWVudDpyLGNyZWF0ZUVsZW1lbnQ6byxjcmVhdGVEb2N1bWVudEZyYWdtZW50OnB9O2EuaHRtbDU9cyxyKGIpfSh0aGlzLGIpLGUuX3ZlcnNpb249ZCxlLl9wcmVmaXhlcz1uLGUuX2RvbVByZWZpeGVzPXEsZS5fY3Nzb21QcmVmaXhlcz1wLGUuaGFzRXZlbnQ9eixlLnRlc3RQcm9wPWZ1bmN0aW9uKGEpe3JldHVybiBHKFthXSl9LGUudGVzdEFsbFByb3BzPUksZS50ZXN0U3R5bGVzPXksZy5jbGFzc05hbWU9Zy5jbGFzc05hbWUucmVwbGFjZSgvKF58XFxzKW5vLWpzKFxcc3wkKS8sXCIkMSQyXCIpKyhmP1wiIGpzIFwiK3Yuam9pbihcIiBcIik6XCJcIiksZX0odGhpcyx0aGlzLmRvY3VtZW50KSxmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChhKXtyZXR1cm5cIltvYmplY3QgRnVuY3Rpb25dXCI9PW8uY2FsbChhKX1mdW5jdGlvbiBlKGEpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBhfWZ1bmN0aW9uIGYoKXt9ZnVuY3Rpb24gZyhhKXtyZXR1cm4hYXx8XCJsb2FkZWRcIj09YXx8XCJjb21wbGV0ZVwiPT1hfHxcInVuaW5pdGlhbGl6ZWRcIj09YX1mdW5jdGlvbiBoKCl7dmFyIGE9cC5zaGlmdCgpO3E9MSxhP2EudD9tKGZ1bmN0aW9uKCl7KFwiY1wiPT1hLnQ/Qi5pbmplY3RDc3M6Qi5pbmplY3RKcykoYS5zLDAsYS5hLGEueCxhLmUsMSl9LDApOihhKCksaCgpKTpxPTB9ZnVuY3Rpb24gaShhLGMsZCxlLGYsaSxqKXtmdW5jdGlvbiBrKGIpe2lmKCFvJiZnKGwucmVhZHlTdGF0ZSkmJih1LnI9bz0xLCFxJiZoKCksbC5vbmxvYWQ9bC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxiKSl7XCJpbWdcIiE9YSYmbShmdW5jdGlvbigpe3QucmVtb3ZlQ2hpbGQobCl9LDUwKTtmb3IodmFyIGQgaW4geVtjXSl5W2NdLmhhc093blByb3BlcnR5KGQpJiZ5W2NdW2RdLm9ubG9hZCgpfX12YXIgaj1qfHxCLmVycm9yVGltZW91dCxsPWIuY3JlYXRlRWxlbWVudChhKSxvPTAscj0wLHU9e3Q6ZCxzOmMsZTpmLGE6aSx4Omp9OzE9PT15W2NdJiYocj0xLHlbY109W10pLFwib2JqZWN0XCI9PWE/bC5kYXRhPWM6KGwuc3JjPWMsbC50eXBlPWEpLGwud2lkdGg9bC5oZWlnaHQ9XCIwXCIsbC5vbmVycm9yPWwub25sb2FkPWwub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ay5jYWxsKHRoaXMscil9LHAuc3BsaWNlKGUsMCx1KSxcImltZ1wiIT1hJiYocnx8Mj09PXlbY10/KHQuaW5zZXJ0QmVmb3JlKGwscz9udWxsOm4pLG0oayxqKSk6eVtjXS5wdXNoKGwpKX1mdW5jdGlvbiBqKGEsYixjLGQsZil7cmV0dXJuIHE9MCxiPWJ8fFwialwiLGUoYSk/aShcImNcIj09Yj92OnUsYSxiLHRoaXMuaSsrLGMsZCxmKToocC5zcGxpY2UodGhpcy5pKyssMCxhKSwxPT1wLmxlbmd0aCYmaCgpKSx0aGlzfWZ1bmN0aW9uIGsoKXt2YXIgYT1CO3JldHVybiBhLmxvYWRlcj17bG9hZDpqLGk6MH0sYX12YXIgbD1iLmRvY3VtZW50RWxlbWVudCxtPWEuc2V0VGltZW91dCxuPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF0sbz17fS50b1N0cmluZyxwPVtdLHE9MCxyPVwiTW96QXBwZWFyYW5jZVwiaW4gbC5zdHlsZSxzPXImJiEhYi5jcmVhdGVSYW5nZSgpLmNvbXBhcmVOb2RlLHQ9cz9sOm4ucGFyZW50Tm9kZSxsPWEub3BlcmEmJlwiW29iamVjdCBPcGVyYV1cIj09by5jYWxsKGEub3BlcmEpLGw9ISFiLmF0dGFjaEV2ZW50JiYhbCx1PXI/XCJvYmplY3RcIjpsP1wic2NyaXB0XCI6XCJpbWdcIix2PWw/XCJzY3JpcHRcIjp1LHc9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT1vLmNhbGwoYSl9LHg9W10seT17fSx6PXt0aW1lb3V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGIubGVuZ3RoJiYoYS50aW1lb3V0PWJbMF0pLGF9fSxBLEI7Qj1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe3ZhciBhPWEuc3BsaXQoXCIhXCIpLGI9eC5sZW5ndGgsYz1hLnBvcCgpLGQ9YS5sZW5ndGgsYz17dXJsOmMsb3JpZ1VybDpjLHByZWZpeGVzOmF9LGUsZixnO2ZvcihmPTA7ZjxkO2YrKylnPWFbZl0uc3BsaXQoXCI9XCIpLChlPXpbZy5zaGlmdCgpXSkmJihjPWUoYyxnKSk7Zm9yKGY9MDtmPGI7ZisrKWM9eFtmXShjKTtyZXR1cm4gY31mdW5jdGlvbiBnKGEsZSxmLGcsaCl7dmFyIGk9YihhKSxqPWkuYXV0b0NhbGxiYWNrO2kudXJsLnNwbGl0KFwiLlwiKS5wb3AoKS5zcGxpdChcIj9cIikuc2hpZnQoKSxpLmJ5cGFzc3x8KGUmJihlPWQoZSk/ZTplW2FdfHxlW2ddfHxlW2Euc3BsaXQoXCIvXCIpLnBvcCgpLnNwbGl0KFwiP1wiKVswXV0pLGkuaW5zdGVhZD9pLmluc3RlYWQoYSxlLGYsZyxoKTooeVtpLnVybF0/aS5ub2V4ZWM9ITA6eVtpLnVybF09MSxmLmxvYWQoaS51cmwsaS5mb3JjZUNTU3x8IWkuZm9yY2VKUyYmXCJjc3NcIj09aS51cmwuc3BsaXQoXCIuXCIpLnBvcCgpLnNwbGl0KFwiP1wiKS5zaGlmdCgpP1wiY1wiOmMsaS5ub2V4ZWMsaS5hdHRycyxpLnRpbWVvdXQpLChkKGUpfHxkKGopKSYmZi5sb2FkKGZ1bmN0aW9uKCl7aygpLGUmJmUoaS5vcmlnVXJsLGgsZyksaiYmaihpLm9yaWdVcmwsaCxnKSx5W2kudXJsXT0yfSkpKX1mdW5jdGlvbiBoKGEsYil7ZnVuY3Rpb24gYyhhLGMpe2lmKGEpe2lmKGUoYSkpY3x8KGo9ZnVuY3Rpb24oKXt2YXIgYT1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7ay5hcHBseSh0aGlzLGEpLGwoKX0pLGcoYSxqLGIsMCxoKTtlbHNlIGlmKE9iamVjdChhKT09PWEpZm9yKG4gaW4gbT1mdW5jdGlvbigpe3ZhciBiPTAsYztmb3IoYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJmIrKztyZXR1cm4gYn0oKSxhKWEuaGFzT3duUHJvcGVydHkobikmJighYyYmIS0tbSYmKGQoaik/aj1mdW5jdGlvbigpe3ZhciBhPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtrLmFwcGx5KHRoaXMsYSksbCgpfTpqW25dPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3ZhciBiPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTthJiZhLmFwcGx5KHRoaXMsYiksbCgpfX0oa1tuXSkpLGcoYVtuXSxqLGIsbixoKSl9ZWxzZSFjJiZsKCl9dmFyIGg9ISFhLnRlc3QsaT1hLmxvYWR8fGEuYm90aCxqPWEuY2FsbGJhY2t8fGYsaz1qLGw9YS5jb21wbGV0ZXx8ZixtLG47YyhoP2EueWVwOmEubm9wZSwhIWkpLGkmJmMoaSl9dmFyIGksaixsPXRoaXMueWVwbm9wZS5sb2FkZXI7aWYoZShhKSlnKGEsMCxsLDApO2Vsc2UgaWYodyhhKSlmb3IoaT0wO2k8YS5sZW5ndGg7aSsrKWo9YVtpXSxlKGopP2coaiwwLGwsMCk6dyhqKT9CKGopOk9iamVjdChqKT09PWomJmgoaixsKTtlbHNlIE9iamVjdChhKT09PWEmJmgoYSxsKX0sQi5hZGRQcmVmaXg9ZnVuY3Rpb24oYSxiKXt6W2FdPWJ9LEIuYWRkRmlsdGVyPWZ1bmN0aW9uKGEpe3gucHVzaChhKX0sQi5lcnJvclRpbWVvdXQ9MWU0LG51bGw9PWIucmVhZHlTdGF0ZSYmYi5hZGRFdmVudExpc3RlbmVyJiYoYi5yZWFkeVN0YXRlPVwibG9hZGluZ1wiLGIuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixBPWZ1bmN0aW9uKCl7Yi5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEEsMCksYi5yZWFkeVN0YXRlPVwiY29tcGxldGVcIn0sMCkpLGEueWVwbm9wZT1rKCksYS55ZXBub3BlLmV4ZWN1dGVTdGFjaz1oLGEueWVwbm9wZS5pbmplY3RKcz1mdW5jdGlvbihhLGMsZCxlLGksail7dmFyIGs9Yi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGwsbyxlPWV8fEIuZXJyb3JUaW1lb3V0O2suc3JjPWE7Zm9yKG8gaW4gZClrLnNldEF0dHJpYnV0ZShvLGRbb10pO2M9aj9oOmN8fGYsay5vbnJlYWR5c3RhdGVjaGFuZ2U9ay5vbmxvYWQ9ZnVuY3Rpb24oKXshbCYmZyhrLnJlYWR5U3RhdGUpJiYobD0xLGMoKSxrLm9ubG9hZD1rLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsKX0sbShmdW5jdGlvbigpe2x8fChsPTEsYygxKSl9LGUpLGk/ay5vbmxvYWQoKTpuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGssbil9LGEueWVwbm9wZS5pbmplY3RDc3M9ZnVuY3Rpb24oYSxjLGQsZSxnLGkpe3ZhciBlPWIuY3JlYXRlRWxlbWVudChcImxpbmtcIiksaixjPWk/aDpjfHxmO2UuaHJlZj1hLGUucmVsPVwic3R5bGVzaGVldFwiLGUudHlwZT1cInRleHQvY3NzXCI7Zm9yKGogaW4gZCllLnNldEF0dHJpYnV0ZShqLGRbal0pO2d8fChuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsbiksbShjLDApKX19KHRoaXMsZG9jdW1lbnQpLE1vZGVybml6ci5sb2FkPWZ1bmN0aW9uKCl7eWVwbm9wZS5hcHBseSh3aW5kb3csW10uc2xpY2UuY2FsbChhcmd1bWVudHMsMCkpfTsiLCIvKiEgUmVzcG9uZC5qcyB2MS40LjI6IG1pbi9tYXgtd2lkdGggbWVkaWEgcXVlcnkgcG9seWZpbGxcbiAqIENvcHlyaWdodCAyMDE0IFNjb3R0IEplaGxcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICogaHR0cDovL2oubXAvcmVzcG9uZGpzICovXG5cbiFmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjthLm1hdGNoTWVkaWE9YS5tYXRjaE1lZGlhfHxmdW5jdGlvbihhKXt2YXIgYixjPWEuZG9jdW1lbnRFbGVtZW50LGQ9Yy5maXJzdEVsZW1lbnRDaGlsZHx8Yy5maXJzdENoaWxkLGU9YS5jcmVhdGVFbGVtZW50KFwiYm9keVwiKSxmPWEuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZi5pZD1cIm1xLXRlc3QtMVwiLGYuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO3RvcDotMTAwZW1cIixlLnN0eWxlLmJhY2tncm91bmQ9XCJub25lXCIsZS5hcHBlbmRDaGlsZChmKSxmdW5jdGlvbihhKXtyZXR1cm4gZi5pbm5lckhUTUw9JyZzaHk7PHN0eWxlIG1lZGlhPVwiJythKydcIj4gI21xLXRlc3QtMSB7IHdpZHRoOiA0MnB4OyB9PC9zdHlsZT4nLGMuaW5zZXJ0QmVmb3JlKGUsZCksYj00Mj09PWYub2Zmc2V0V2lkdGgsYy5yZW1vdmVDaGlsZChlKSx7bWF0Y2hlczpiLG1lZGlhOmF9fX0oYS5kb2N1bWVudCl9KHRoaXMpLGZ1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoKXt2KCEwKX12YXIgYz17fTthLnJlc3BvbmQ9YyxjLnVwZGF0ZT1mdW5jdGlvbigpe307dmFyIGQ9W10sZT1mdW5jdGlvbigpe3ZhciBiPSExO3RyeXtiPW5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGMpe2I9bmV3IGEuQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpfXJldHVybiBmdW5jdGlvbigpe3JldHVybiBifX0oKSxmPWZ1bmN0aW9uKGEsYil7dmFyIGM9ZSgpO2MmJihjLm9wZW4oXCJHRVRcIixhLCEwKSxjLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQhPT1jLnJlYWR5U3RhdGV8fDIwMCE9PWMuc3RhdHVzJiYzMDQhPT1jLnN0YXR1c3x8YihjLnJlc3BvbnNlVGV4dCl9LDQhPT1jLnJlYWR5U3RhdGUmJmMuc2VuZChudWxsKSl9LGc9ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShjLnJlZ2V4Lm1pbm1heHdoLFwiXCIpLm1hdGNoKGMucmVnZXgub3RoZXIpfTtpZihjLmFqYXg9ZixjLnF1ZXVlPWQsYy51bnN1cHBvcnRlZG1xPWcsYy5yZWdleD17bWVkaWE6L0BtZWRpYVteXFx7XStcXHsoW15cXHtcXH1dKlxce1teXFx9XFx7XSpcXH0pKy9naSxrZXlmcmFtZXM6L0AoPzpcXC0oPzpvfG1venx3ZWJraXQpXFwtKT9rZXlmcmFtZXNbXlxce10rXFx7KD86W15cXHtcXH1dKlxce1teXFx9XFx7XSpcXH0pK1teXFx9XSpcXH0vZ2ksY29tbWVudHM6L1xcL1xcKlteKl0qXFwqKyhbXi9dW14qXSpcXCorKSpcXC8vZ2ksdXJsczovKHVybFxcKClbJ1wiXT8oW15cXC9cXCknXCJdW146XFwpJ1wiXSspWydcIl0/KFxcKSkvZyxmaW5kU3R5bGVzOi9AbWVkaWEgKihbXlxce10rKVxceyhbXFxTXFxzXSs/KSQvLG9ubHk6Lyhvbmx5XFxzKyk/KFthLXpBLVpdKylcXHM/LyxtaW53Oi9cXChcXHMqbWluXFwtd2lkdGhcXHMqOlxccyooXFxzKlswLTlcXC5dKykocHh8ZW0pXFxzKlxcKS8sbWF4dzovXFwoXFxzKm1heFxcLXdpZHRoXFxzKjpcXHMqKFxccypbMC05XFwuXSspKHB4fGVtKVxccypcXCkvLG1pbm1heHdoOi9cXChcXHMqbShpbnxheClcXC0oaGVpZ2h0fHdpZHRoKVxccyo6XFxzKihcXHMqWzAtOVxcLl0rKShweHxlbSlcXHMqXFwpL2dpLG90aGVyOi9cXChbXlxcKV0qXFwpL2d9LGMubWVkaWFRdWVyaWVzU3VwcG9ydGVkPWEubWF0Y2hNZWRpYSYmbnVsbCE9PWEubWF0Y2hNZWRpYShcIm9ubHkgYWxsXCIpJiZhLm1hdGNoTWVkaWEoXCJvbmx5IGFsbFwiKS5tYXRjaGVzLCFjLm1lZGlhUXVlcmllc1N1cHBvcnRlZCl7dmFyIGgsaSxqLGs9YS5kb2N1bWVudCxsPWsuZG9jdW1lbnRFbGVtZW50LG09W10sbj1bXSxvPVtdLHA9e30scT0zMCxyPWsuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdfHxsLHM9ay5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJhc2VcIilbMF0sdD1yLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKSx1PWZ1bmN0aW9uKCl7dmFyIGEsYj1rLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYz1rLmJvZHksZD1sLnN0eWxlLmZvbnRTaXplLGU9YyYmYy5zdHlsZS5mb250U2l6ZSxmPSExO3JldHVybiBiLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtmb250LXNpemU6MWVtO3dpZHRoOjFlbVwiLGN8fChjPWY9ay5jcmVhdGVFbGVtZW50KFwiYm9keVwiKSxjLnN0eWxlLmJhY2tncm91bmQ9XCJub25lXCIpLGwuc3R5bGUuZm9udFNpemU9XCIxMDAlXCIsYy5zdHlsZS5mb250U2l6ZT1cIjEwMCVcIixjLmFwcGVuZENoaWxkKGIpLGYmJmwuaW5zZXJ0QmVmb3JlKGMsbC5maXJzdENoaWxkKSxhPWIub2Zmc2V0V2lkdGgsZj9sLnJlbW92ZUNoaWxkKGMpOmMucmVtb3ZlQ2hpbGQoYiksbC5zdHlsZS5mb250U2l6ZT1kLGUmJihjLnN0eWxlLmZvbnRTaXplPWUpLGE9aj1wYXJzZUZsb2F0KGEpfSx2PWZ1bmN0aW9uKGIpe3ZhciBjPVwiY2xpZW50V2lkdGhcIixkPWxbY10sZT1cIkNTUzFDb21wYXRcIj09PWsuY29tcGF0TW9kZSYmZHx8ay5ib2R5W2NdfHxkLGY9e30sZz10W3QubGVuZ3RoLTFdLHA9KG5ldyBEYXRlKS5nZXRUaW1lKCk7aWYoYiYmaCYmcT5wLWgpcmV0dXJuIGEuY2xlYXJUaW1lb3V0KGkpLGk9YS5zZXRUaW1lb3V0KHYscSksdm9pZCAwO2g9cDtmb3IodmFyIHMgaW4gbSlpZihtLmhhc093blByb3BlcnR5KHMpKXt2YXIgdz1tW3NdLHg9dy5taW53LHk9dy5tYXh3LHo9bnVsbD09PXgsQT1udWxsPT09eSxCPVwiZW1cIjt4JiYoeD1wYXJzZUZsb2F0KHgpKih4LmluZGV4T2YoQik+LTE/anx8dSgpOjEpKSx5JiYoeT1wYXJzZUZsb2F0KHkpKih5LmluZGV4T2YoQik+LTE/anx8dSgpOjEpKSx3Lmhhc3F1ZXJ5JiYoeiYmQXx8ISh6fHxlPj14KXx8IShBfHx5Pj1lKSl8fChmW3cubWVkaWFdfHwoZlt3Lm1lZGlhXT1bXSksZlt3Lm1lZGlhXS5wdXNoKG5bdy5ydWxlc10pKX1mb3IodmFyIEMgaW4gbylvLmhhc093blByb3BlcnR5KEMpJiZvW0NdJiZvW0NdLnBhcmVudE5vZGU9PT1yJiZyLnJlbW92ZUNoaWxkKG9bQ10pO28ubGVuZ3RoPTA7Zm9yKHZhciBEIGluIGYpaWYoZi5oYXNPd25Qcm9wZXJ0eShEKSl7dmFyIEU9ay5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksRj1mW0RdLmpvaW4oXCJcXG5cIik7RS50eXBlPVwidGV4dC9jc3NcIixFLm1lZGlhPUQsci5pbnNlcnRCZWZvcmUoRSxnLm5leHRTaWJsaW5nKSxFLnN0eWxlU2hlZXQ/RS5zdHlsZVNoZWV0LmNzc1RleHQ9RjpFLmFwcGVuZENoaWxkKGsuY3JlYXRlVGV4dE5vZGUoRikpLG8ucHVzaChFKX19LHc9ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPWEucmVwbGFjZShjLnJlZ2V4LmNvbW1lbnRzLFwiXCIpLnJlcGxhY2UoYy5yZWdleC5rZXlmcmFtZXMsXCJcIikubWF0Y2goYy5yZWdleC5tZWRpYSksZj1lJiZlLmxlbmd0aHx8MDtiPWIuc3Vic3RyaW5nKDAsYi5sYXN0SW5kZXhPZihcIi9cIikpO3ZhciBoPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoYy5yZWdleC51cmxzLFwiJDFcIitiK1wiJDIkM1wiKX0saT0hZiYmZDtiLmxlbmd0aCYmKGIrPVwiL1wiKSxpJiYoZj0xKTtmb3IodmFyIGo9MDtmPmo7aisrKXt2YXIgayxsLG8scDtpPyhrPWQsbi5wdXNoKGgoYSkpKTooaz1lW2pdLm1hdGNoKGMucmVnZXguZmluZFN0eWxlcykmJlJlZ0V4cC4kMSxuLnB1c2goUmVnRXhwLiQyJiZoKFJlZ0V4cC4kMikpKSxvPWsuc3BsaXQoXCIsXCIpLHA9by5sZW5ndGg7Zm9yKHZhciBxPTA7cD5xO3ErKylsPW9bcV0sZyhsKXx8bS5wdXNoKHttZWRpYTpsLnNwbGl0KFwiKFwiKVswXS5tYXRjaChjLnJlZ2V4Lm9ubHkpJiZSZWdFeHAuJDJ8fFwiYWxsXCIscnVsZXM6bi5sZW5ndGgtMSxoYXNxdWVyeTpsLmluZGV4T2YoXCIoXCIpPi0xLG1pbnc6bC5tYXRjaChjLnJlZ2V4Lm1pbncpJiZwYXJzZUZsb2F0KFJlZ0V4cC4kMSkrKFJlZ0V4cC4kMnx8XCJcIiksbWF4dzpsLm1hdGNoKGMucmVnZXgubWF4dykmJnBhcnNlRmxvYXQoUmVnRXhwLiQxKSsoUmVnRXhwLiQyfHxcIlwiKX0pfXYoKX0seD1mdW5jdGlvbigpe2lmKGQubGVuZ3RoKXt2YXIgYj1kLnNoaWZ0KCk7ZihiLmhyZWYsZnVuY3Rpb24oYyl7dyhjLGIuaHJlZixiLm1lZGlhKSxwW2IuaHJlZl09ITAsYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eCgpfSwwKX0pfX0seT1mdW5jdGlvbigpe2Zvcih2YXIgYj0wO2I8dC5sZW5ndGg7YisrKXt2YXIgYz10W2JdLGU9Yy5ocmVmLGY9Yy5tZWRpYSxnPWMucmVsJiZcInN0eWxlc2hlZXRcIj09PWMucmVsLnRvTG93ZXJDYXNlKCk7ZSYmZyYmIXBbZV0mJihjLnN0eWxlU2hlZXQmJmMuc3R5bGVTaGVldC5yYXdDc3NUZXh0Pyh3KGMuc3R5bGVTaGVldC5yYXdDc3NUZXh0LGUsZikscFtlXT0hMCk6KCEvXihbYS16QS1aOl0qXFwvXFwvKS8udGVzdChlKSYmIXN8fGUucmVwbGFjZShSZWdFeHAuJDEsXCJcIikuc3BsaXQoXCIvXCIpWzBdPT09YS5sb2NhdGlvbi5ob3N0KSYmKFwiLy9cIj09PWUuc3Vic3RyaW5nKDAsMikmJihlPWEubG9jYXRpb24ucHJvdG9jb2wrZSksZC5wdXNoKHtocmVmOmUsbWVkaWE6Zn0pKSl9eCgpfTt5KCksYy51cGRhdGU9eSxjLmdldEVtVmFsdWU9dSxhLmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsYiwhMSk6YS5hdHRhY2hFdmVudCYmYS5hdHRhY2hFdmVudChcIm9ucmVzaXplXCIsYil9fSh0aGlzKTsiLCIvKiFcbiAqIHNlbGVjdGl2aXpyIHYxLjAuMiAtIChjKSBLZWl0aCBDbGFyaywgZnJlZWx5IGRpc3RyaWJ1dGFibGUgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbiAqIHNlbGVjdGl2aXpyLmNvbVxuICovXG4oZnVuY3Rpb24oail7ZnVuY3Rpb24gQShhKXtyZXR1cm4gYS5yZXBsYWNlKEIsaCkucmVwbGFjZShDLGZ1bmN0aW9uKGEsZCxiKXtmb3IodmFyIGE9Yi5zcGxpdChcIixcIiksYj0wLGU9YS5sZW5ndGg7YjxlO2IrKyl7dmFyIHM9RChhW2JdLnJlcGxhY2UoRSxoKS5yZXBsYWNlKEYsaCkpK28sbD1bXTthW2JdPXMucmVwbGFjZShHLGZ1bmN0aW9uKGEsYixjLGQsZSl7aWYoYil7aWYobC5sZW5ndGg+MCl7dmFyIGE9bCxmLGU9cy5zdWJzdHJpbmcoMCxlKS5yZXBsYWNlKEgsaSk7aWYoZT09aXx8ZS5jaGFyQXQoZS5sZW5ndGgtMSk9PW8pZSs9XCIqXCI7dHJ5e2Y9dChlKX1jYXRjaChrKXt9aWYoZil7ZT0wO2ZvcihjPWYubGVuZ3RoO2U8YztlKyspe2Zvcih2YXIgZD1mW2VdLGg9ZC5jbGFzc05hbWUsaj0wLG09YS5sZW5ndGg7ajxtO2orKyl7dmFyIGc9YVtqXTtpZighUmVnRXhwKFwiKF58XFxcXHMpXCIrZy5jbGFzc05hbWUrXCIoXFxcXHN8JClcIikudGVzdChkLmNsYXNzTmFtZSkmJmcuYiYmKGcuYj09PSEwfHxnLmIoZCk9PT0hMCkpaD11KGgsZy5jbGFzc05hbWUsITApfWQuY2xhc3NOYW1lPWh9fWw9W119cmV0dXJuIGJ9ZWxzZXtpZihiPWM/SShjKTohdnx8di50ZXN0KGQpP3tjbGFzc05hbWU6dyhkKSxiOiEwfTpudWxsKXJldHVybiBsLnB1c2goYiksXCIuXCIrYi5jbGFzc05hbWU7cmV0dXJuIGF9fSl9cmV0dXJuIGQrYS5qb2luKFwiLFwiKX0pfWZ1bmN0aW9uIEkoYSl7dmFyIGM9ITAsZD13KGEuc2xpY2UoMSkpLGI9YS5zdWJzdHJpbmcoMCw1KT09XCI6bm90KFwiLGUsZjtiJiYoYT1hLnNsaWNlKDUsLTEpKTt2YXIgbD1hLmluZGV4T2YoXCIoXCIpO2w+LTEmJihhPWEuc3Vic3RyaW5nKDAsbCkpO2lmKGEuY2hhckF0KDApPT1cIjpcIilzd2l0Y2goYS5zbGljZSgxKSl7Y2FzZSBcInJvb3RcIjpjPWZ1bmN0aW9uKGEpe3JldHVybiBiP2EhPXA6YT09cH07YnJlYWs7Y2FzZSBcInRhcmdldFwiOmlmKG09PTgpe2M9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYygpe3ZhciBkPWxvY2F0aW9uLmhhc2gsZT1kLnNsaWNlKDEpO3JldHVybiBiP2Q9PWl8fGEuaWQhPWU6ZCE9aSYmYS5pZD09ZX1rKGosXCJoYXNoY2hhbmdlXCIsZnVuY3Rpb24oKXtnKGEsZCxjKCkpfSk7cmV0dXJuIGMoKX07YnJlYWt9cmV0dXJuITE7Y2FzZSBcImNoZWNrZWRcIjpjPWZ1bmN0aW9uKGEpe0oudGVzdChhLnR5cGUpJiZrKGEsXCJwcm9wZXJ0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7ZXZlbnQucHJvcGVydHlOYW1lPT1cImNoZWNrZWRcIiYmZyhhLGQsYS5jaGVja2VkIT09Yil9KTtyZXR1cm4gYS5jaGVja2VkIT09Yn07YnJlYWs7Y2FzZSBcImRpc2FibGVkXCI6Yj0hYjtjYXNlIFwiZW5hYmxlZFwiOmM9ZnVuY3Rpb24oYyl7aWYoSy50ZXN0KGMudGFnTmFtZSkpcmV0dXJuIGsoYyxcInByb3BlcnR5Y2hhbmdlXCIsZnVuY3Rpb24oKXtldmVudC5wcm9wZXJ0eU5hbWU9PVwiJGRpc2FibGVkXCImJmcoYyxkLGMuYT09PWIpfSkscS5wdXNoKGMpLGMuYT1jLmRpc2FibGVkLGMuZGlzYWJsZWQ9PT1iO3JldHVybiBhPT1cIjplbmFibGVkXCI/YjohYn07YnJlYWs7Y2FzZSBcImZvY3VzXCI6ZT1cImZvY3VzXCIsZj1cImJsdXJcIjtjYXNlIFwiaG92ZXJcIjplfHwoZT1cIm1vdXNlZW50ZXJcIixmPVwibW91c2VsZWF2ZVwiKTtjPWZ1bmN0aW9uKGEpe2soYSxiP2Y6ZSxmdW5jdGlvbigpe2coYSxkLCEwKX0pO2soYSxiP2U6ZixmdW5jdGlvbigpe2coYSxkLCExKX0pO3JldHVybiBifTticmVhaztkZWZhdWx0OmlmKCFMLnRlc3QoYSkpcmV0dXJuITF9cmV0dXJue2NsYXNzTmFtZTpkLGI6Y319ZnVuY3Rpb24gdyhhKXtyZXR1cm4gTStcIi1cIisobT09NiYmTj9PKys6YS5yZXBsYWNlKFAsZnVuY3Rpb24oYSl7cmV0dXJuIGEuY2hhckNvZGVBdCgwKX0pKX1mdW5jdGlvbiBEKGEpe3JldHVybiBhLnJlcGxhY2UoeCxoKS5yZXBsYWNlKFEsbyl9ZnVuY3Rpb24gZyhhLGMsZCl7dmFyIGI9YS5jbGFzc05hbWUsYz11KGIsYyxkKTtpZihjIT1iKWEuY2xhc3NOYW1lPWMsYS5wYXJlbnROb2RlLmNsYXNzTmFtZSs9aX1mdW5jdGlvbiB1KGEsYyxkKXt2YXIgYj1SZWdFeHAoXCIoXnxcXFxccylcIitjK1wiKFxcXFxzfCQpXCIpLGU9Yi50ZXN0KGEpO3JldHVybiBkP2U/YTphK28rYzplP2EucmVwbGFjZShiLGgpLnJlcGxhY2UoeCxoKTphfWZ1bmN0aW9uIGsoYSxjLGQpe2EuYXR0YWNoRXZlbnQoXCJvblwiK2MsZCl9ZnVuY3Rpb24gcihhLGMpe2lmKC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QoYSkpcmV0dXJuIGMuc3Vic3RyaW5nKDAsYy5pbmRleE9mKFwiL1wiLDgpKT09YS5zdWJzdHJpbmcoMCxhLmluZGV4T2YoXCIvXCIsOCkpP2E6bnVsbDtpZihhLmNoYXJBdCgwKT09XCIvXCIpcmV0dXJuIGMuc3Vic3RyaW5nKDAsYy5pbmRleE9mKFwiL1wiLDgpKSthO3ZhciBkPWMuc3BsaXQoL1s/I10vKVswXTthLmNoYXJBdCgwKSE9XCI/XCImJmQuY2hhckF0KGQubGVuZ3RoLTEpIT1cIi9cIiYmKGQ9ZC5zdWJzdHJpbmcoMCxkLmxhc3RJbmRleE9mKFwiL1wiKSsxKSk7cmV0dXJuIGQrYX1mdW5jdGlvbiB5KGEpe2lmKGEpcmV0dXJuIG4ub3BlbihcIkdFVFwiLGEsITEpLG4uc2VuZCgpLChuLnN0YXR1cz09MjAwP24ucmVzcG9uc2VUZXh0OmkpLnJlcGxhY2UoUixpKS5yZXBsYWNlKFMsZnVuY3Rpb24oYyxkLGIsZSxmKXtyZXR1cm4geShyKGJ8fGYsYSkpfSkucmVwbGFjZShULGZ1bmN0aW9uKGMsZCxiKXtkPWR8fGk7cmV0dXJuXCIgdXJsKFwiK2QrcihiLGEpK2QrXCIpIFwifSk7cmV0dXJuIGl9ZnVuY3Rpb24gVSgpe3ZhciBhLGM7YT1mLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQkFTRVwiKTtmb3IodmFyIGQ9YS5sZW5ndGg+MD9hWzBdLmhyZWY6Zi5sb2NhdGlvbi5ocmVmLGI9MDtiPGYuc3R5bGVTaGVldHMubGVuZ3RoO2IrKylpZihjPWYuc3R5bGVTaGVldHNbYl0sYy5ocmVmIT1pJiYoYT1yKGMuaHJlZixkKSkpYy5jc3NUZXh0PUEoeShhKSk7cS5sZW5ndGg+MCYmc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtmb3IodmFyIGE9MCxjPXEubGVuZ3RoO2E8YzthKyspe3ZhciBiPXFbYV07aWYoYi5kaXNhYmxlZCE9PWIuYSliLmRpc2FibGVkPyhiLmRpc2FibGVkPSExLGIuYT0hMCxiLmRpc2FibGVkPSEwKTpiLmE9Yi5kaXNhYmxlZH19LDI1MCl9aWYoIS8qQGNjX29uIUAqL3RydWUpe3ZhciBmPWRvY3VtZW50LHA9Zi5kb2N1bWVudEVsZW1lbnQsbj1mdW5jdGlvbigpe2lmKGouWE1MSHR0cFJlcXVlc3QpcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdDt0cnl7cmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIil9Y2F0Y2goYSl7cmV0dXJuIG51bGx9fSgpLG09L01TSUUgKFxcZCspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpWzFdO2lmKCEoZi5jb21wYXRNb2RlIT1cIkNTUzFDb21wYXRcInx8bTw2fHxtPjh8fCFuKSl7dmFyIHo9e05XOlwiKi5Eb20uc2VsZWN0XCIsTW9vVG9vbHM6XCIkJFwiLERPTUFzc2lzdGFudDpcIiouJFwiLFByb3RvdHlwZTpcIiQkXCIsWUFIT086XCIqLnV0aWwuU2VsZWN0b3IucXVlcnlcIixTaXp6bGU6XCIqXCIsalF1ZXJ5OlwiKlwiLGRvam86XCIqLnF1ZXJ5XCJ9LHQscT1bXSxPPTAsTj0hMCxNPVwic2x2enJcIixSPS8oXFwvXFwqW14qXSpcXCorKFteXFwvXVteKl0qXFwqKykqXFwvKVxccyovZyxTPS9AaW1wb3J0XFxzKig/Oig/Oig/OnVybFxcKFxccyooWydcIl0/KSguKilcXDEpXFxzKlxcKSl8KD86KFsnXCJdKSguKilcXDMpKVteO10qOy9nLFQ9L1xcYnVybFxcKFxccyooW1wiJ10/KSg/IWRhdGE6KShbXlwiJyldKylcXDFcXHMqXFwpL2csTD0vXjooZW1wdHl8KGZpcnN0fGxhc3R8b25seXxudGgoLWxhc3QpPyktKGNoaWxkfG9mLXR5cGUpKSQvLEI9LzooOmZpcnN0LSg/OmxpbmV8bGV0dGVyKSkvZyxDPS8oXnx9KVxccyooW15cXHtdKj9bXFxbOl1bXntdKykvZyxHPS8oWyArfj5dKXwoOlthLXotXSsoPzpcXCguKj9cXCkrKT8pfChcXFsuKj9cXF0pL2csSD0vKDpub3RcXCgpPzooaG92ZXJ8ZW5hYmxlZHxkaXNhYmxlZHxmb2N1c3xjaGVja2VkfHRhcmdldHxhY3RpdmV8dmlzaXRlZHxmaXJzdC1saW5lfGZpcnN0LWxldHRlcilcXCk/L2csUD0vW15cXHctXS9nLEs9L14oSU5QVVR8U0VMRUNUfFRFWFRBUkVBfEJVVFRPTikkLyxKPS9eKGNoZWNrYm94fHJhZGlvKSQvLHY9bT42Py9bXFwkXFxeKl09KFsnXCJdKVxcMS86bnVsbCxFPS8oWyhcXFsrfl0pXFxzKy9nLEY9L1xccysoWylcXF0rfl0pL2csUT0vXFxzKy9nLHg9L15cXHMqKCg/OltcXFNcXHNdKlxcUyk/KVxccyokLyxpPVwiXCIsbz1cIiBcIixoPVwiJDFcIjsoZnVuY3Rpb24oYSxjKXtmdW5jdGlvbiBkKCl7dHJ5e3AuZG9TY3JvbGwoXCJsZWZ0XCIpfWNhdGNoKGEpe3NldFRpbWVvdXQoZCw1MCk7cmV0dXJufWIoXCJwb2xsXCIpfWZ1bmN0aW9uIGIoZCl7aWYoIShkLnR5cGU9PVwicmVhZHlzdGF0ZWNoYW5nZVwiJiZmLnJlYWR5U3RhdGUhPVwiY29tcGxldGVcIikmJigoZC50eXBlPT1cImxvYWRcIj9hOmYpLmRldGFjaEV2ZW50KFwib25cIitkLnR5cGUsYiwhMSksIWUmJihlPSEwKSkpYy5jYWxsKGEsZC50eXBlfHxkKX12YXIgZT0hMSxnPSEwO2lmKGYucmVhZHlTdGF0ZT09XCJjb21wbGV0ZVwiKWMuY2FsbChhLGkpO2Vsc2V7aWYoZi5jcmVhdGVFdmVudE9iamVjdCYmcC5kb1Njcm9sbCl7dHJ5e2c9IWEuZnJhbWVFbGVtZW50fWNhdGNoKGgpe31nJiZkKCl9ayhmLFwicmVhZHlzdGF0ZWNoYW5nZVwiLGIpO2soYSxcImxvYWRcIixiKX19KShqLGZ1bmN0aW9uKCl7Zm9yKHZhciBhIGluIHope3ZhciBjLGQsYj1qO2lmKGpbYV0pe2ZvcihjPXpbYV0ucmVwbGFjZShcIipcIixhKS5zcGxpdChcIi5cIik7KGQ9Yy5zaGlmdCgpKSYmKGI9YltkXSk7KTtpZih0eXBlb2YgYj09XCJmdW5jdGlvblwiKXt0PWI7VSgpO2JyZWFrfX19fSl9fX0pKHRoaXMpOyJdfQ==
