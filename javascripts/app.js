'use strict'
function _classCallCheck (e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function')
}
function _defineProperties (e, t) {
  for (var s = 0; s < t.length; s++) {
    var i = t[s]
    ;(i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(e, i.key, i)
  }
}
function _createClass (e, t, s) {
  return t && _defineProperties(e.prototype, t), s && _defineProperties(e, s), e
}
function _typeof (e) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        })(e)
}
!(function (s) {
  var i = {}
  function n (e) {
    if (i[e]) return i[e].exports
    var t = (i[e] = { i: e, l: !1, exports: {} })
    return s[e].call(t.exports, t, t.exports, n), (t.l = !0), t.exports
  }
  ;(n.m = s),
    (n.c = i),
    (n.d = function (e, t, s) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s })
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && 'object' == _typeof(t) && t && t.__esModule) return t
      var s = Object.create(null)
      if (
        (n.r(s),
        Object.defineProperty(s, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          n.d(
            s,
            i,
            function (e) {
              return t[e]
            }.bind(null, i)
          )
      return s
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 0))
})([
  function (e, t, s) {
    s.r(t),
      new ((function () {
        function e () {
          _classCallCheck(this, e),
            (this.$nav = $('header')),
            (this.$hamburger = $('.hamburger')),
            (this.$toggleRoles = $('.toggle-roles')),
            (this.$bgOverlay = $('.bg-overlay')),
            (this.$home = $('.home-wrap')),
            (this.$roles = $('.roles-wrap')),
            (this.$bio = $('.bio-wrap')),
            (this.$bragging_rights = $('.bragging-rights-wrap')),
            (this.$press = $('.press-wrap')),
            (this.$awards = $('.awards-wrap')),
            (this.$subscribe = $('.subscribe-wrap')),
            (this.$reel = $('.reel-wrap')),
            this.openSection,
            (this.currentSection = 'home'),
            this._bindEvents()
        }
        return (
          _createClass(e, [
            {
              key: '_bindEvents',
              value: function () {
                var i = this
                i.$nav.on('click', 'li.nav-text-item a', function (e) {
                  e.preventDefault()
                  var t = $(this).attr('data-slug'),
                    s = $(this).attr('href')
                  history.pushState(s, null, s), i._openSections(t)
                }),
                  $(document).ready(function () {
                    var e = window.location.pathname.replace('/', '')
                    i._openSections(e)
                  }),
                  window.addEventListener('popstate', function (e) {
                    var t = e.state
                    i._openSections(t)
                  }),
                  i.$toggleRoles.on('click', '.icon-toggle', function () {
                    i.$nav.find('li.nav-text-item').removeClass('active'),
                      (i.openSection = 'roles'),
                      i._toggleSections()
                  }),
                  i.$hamburger.on('click', function () {
                    $(this).toggleClass('active'),
                      i.$nav.find('.main-nav').toggleClass('open')
                  })
              }
            },
            {
              key: '_openSections',
              value: function (e) {
                this.$hamburger.hasClass('active') &&
                  (this.$hamburger.removeClass('active'),
                  this.$nav.find('.main-nav').removeClass('open')),
                  '' !== e &&
                    (this.$toggleRoles.removeClass('active'),
                    this.$nav.find('li.nav-text-item').removeClass('active'),
                    this.$nav
                      .find('li.nav-text-item a[data-slug="' + e + '"]')
                      .parent()
                      .toggleClass('active'),
                    (this.openSection = e),
                    this._toggleSections())
              }
            },
            {
              key: '_closeSections',
              value: function () {
                this.$home.removeClass('open'),
                this.$roles.removeClass('open'),
                  this.$bio.removeClass('open'),
                  this.$bragging_rights.removeClass('open'),
                  this.$press.removeClass('open'),
                  this.$awards.removeClass('open'),
                  this.$subscribe.removeClass('open'),
                  this.$reel.removeClass('open')
              }
            },
            {
              key: '_toggleSections',
              value: function () {
                if (this.currentSection !== this.openSection) {
                  switch (
                    ($('header a')
                      .not(this)
                      .css('opacity', '.5'),
                    this._closeSections(),
                    this.openSection)
                  ) {
                    case 'bio':
                        this.$bio.addClass('open')
                      break
                    case 'bragging-rights':
                        this.$bragging_rights.addClass('open')
                      break
                    case 'press':
                        this.$press.addClass('open')
                      break
                    case 'awards':
                        this.$awards.addClass('open')
                      break
                    case 'roles':
                    case 'projects':
                        this.$roles.addClass('open')
                      break
                    case 'subscribe':
                        this.$subscribe.addClass('open')
                      break
                    case 'reel':
                        this.$reel.addClass('open')
                  }
                  ;(this.currentSection = this.openSection),
                    this.$bgOverlay.hasClass('active') ||
                      this.$bgOverlay.addClass('active')
                } else {
                  switch (
                    ($('header a').css('opacity', '1'),
                    this.$nav.find('li').removeClass('active'),
                    this.openSection)
                  ) {
                    case 'bio':
                      this.$bio.removeClass('open')
                      break
                    case 'bragging-rights':
                      this.$bragging_rights.removeClass('open')
                      break
                    case 'press':
                      this.$press.removeClass('open')
                      break
                    case 'awards':
                      this.$awards.removeClass('open')
                      break
                    case 'roles':
                    case 'projects':
                      this.$roles.removeClass('open')
                      break
                    case 'subscribe':
                      this.$subscribe.removeClass('open')
                      break
                    case 'reel':
                      this.$reel.removeClass('open')
                  }
                  ;(this.currentSection = " "),
                    this.$home.addClass('open'),
                    this.$bgOverlay.removeClass('active')
                }
              }
            }
          ]),
          e
        )
      })())(),
      new ((function () {
        function e () {
          _classCallCheck(this, e),
            (this.$home = $('.home-wrap')),
            this._setup()
        }
        return (
          _createClass(e, [
            {
              key: '_setup',
              value: function () {
                var e = this
                setTimeout(function () {
                  e.$home.find('h1').addClass('animated'),
                    setTimeout(function () {
                      e.$home.find('h2').addClass('animated')
                    }, 300)
                }, 300)
              }
            }
          ]),
          e
        )
      })())(),
      new ((function () {
        function e () {
          _classCallCheck(this, e),
            (this.winW = $(window).width()),
            (this.winH = $(window).height()),
            (this.$bio = $('.bio-wrap')),
            (this.$descriptions = $('.timeline-desc .slide')),
            (this.$years = $('.timeline .slide')),
            (this.gotoDesc = 0),
            (this.progressW = 0),
            this.descPos,
            this.nextDescProgress,
            (this.bioScrollEnd = (this.$descriptions.length - 1 ) * this.winW),
            (this.dotSpaceWPercent = 768 <= this.winW ? 20 : 50),
            (this.dotSpaceW =
              this.$years[1].querySelector('.year-dot').getBoundingClientRect()
                .left -
              this.$years[0].querySelector('.year-dot').getBoundingClientRect()
                .left),
            this._bindEvents(),
            this._init()
        }
        return (
          _createClass(e, [
            {
              key: '_bindEvents',
              value: function () {
                var s = this
                s.$bio.on('mousewheel', function (e, t) {
                  e.preventDefault(),
                    (this.scrollLeft -= e.originalEvent.wheelDelta),
                    150 < this.scrollLeft && $('.scroll-helper').fadeOut()
                }),
                  s.$bio.on('scroll', function (e) {
                    ;(s.bioScrollEnd = (s.$descriptions.length - 1) * s.winW),
                      s._trackProgress()
                  }),
                  $('.timeline .slide').on('click', function () {
                    ;(s.gotoDesc = $(this).index()),
                      s.$bio.animate(
                        {
                            scrollLeft: s.winW * s.gotoDesc
                        },
                        600,
                        'swing'
                      ),
                      s.$bio
                        .find('.timeline')
                        .animate(
                          {
                              scrollLeft: s.dotSpaceW * s.gotoDesc
                            },
                          600,
                          'swing'
                        ),
                      $('.line .progress').animate(
                        {
                            width: s.dotSpaceW * s.gotoDesc
                        },
                        600,
                        'swing',
                        function () {
                          $.each(s.$years, function (e, t) {
                            e > s.gotoDesc
                              ? $(this).removeClass('active')
                              : $(this).addClass('active')
                          }),
                            $(s.$years[s.gotoDesc]).addClass('active')
                        }
                      )
                  }),
                  $('.leap-helper').on('click', function () {
                    s.$bio.animate(
                      {
                          scrollLeft: (s.$descriptions.length - 1) * s.winW
                         },
                      600,
                      'swing'
                    )
                  }),
                  $(window).on('resize', function () {
                    ;(s.winW = $(window).width()),
                      (s.winH = $(window).height()),
                      s._resized()
                  })
              }
            },
            {
              key: '_setupDescs',
              value: function () {
                $.each(this.$descriptions, function (e, t) {
                  $(t).css('left', 100 * e + '%')
                })
              }
            },
            {
              key: '_setupYears',
              value: function () {
                var s = this
                $.each(s.$years, function (e, t) {
                  $(t).css('left', 50 + e * s.dotSpaceWPercent + '%'),
                    e === s.$years.length - 1 &&
                      (s.dotSpaceW =
                        s.$years[1]
                          .querySelector('.year-dot')
                          .getBoundingClientRect().left -
                        s.$years[0]
                          .querySelector('.year-dot')
                          .getBoundingClientRect().left)
                })
              }
            },
            {
              key: '_setup',
              value: function () {
                this.$bio.find('.inner-wrapper').width(this.winW),
                  this.$bio
                    .find('.timeline .line')
                    .width(
                      this.$descriptions.length *
                        (this.winW * (this.dotSpaceWPercent / 100)) -
                        this.winW * (this.dotSpaceWPercent / 100)
                    ),
                  768 <= this.winW
                    ? $('.scroll-helper .text').html('Scroll')
                    : $('.scroll-helper .text').html('Drag')
              }
            },
            {
              key: '_trackProgress',
              value: function () {
                var s = this
                $.each(s.$descriptions, function (e, t) {
                  ;(s.descPos = t.getBoundingClientRect()),
                    0 < s.descPos.left &&
                      s.descPos.left < s.winW &&
                      ((s.gotoDesc = e),
                      (s.nextDescProgress =
                        1 - (s.descPos.left / s.winW).toFixed(2)),
                      (s.progressW = s.dotSpaceW * s.nextDescProgress),
                      (s.$bio.find('.timeline')[0].scrollLeft =
                        s.dotSpaceW * (e - 1) + s.progressW),
                      $('.line .progress').width(
                        s.dotSpaceW * (e - 1) + s.progressW
                      ),
                      0.95 < s.nextDescProgress
                        ? $(s.$years[e]).addClass('active')
                        : $(s.$years[e]).removeClass('active')),
                    e > s.gotoDesc
                      ? $(s.$years[e]).removeClass('active')
                      : e < s.gotoDesc && $(s.$years[e]).addClass('active'),
                    console.log(s.bioScrollEnd, s.$bio[0].scrollLeft),
                    s.$bio[0].scrollLeft >= s.bioScrollEnd - 100
                      ? $('.leap-helper').addClass('inactive')
                      : $('.leap-helper').removeClass('inactive')
                })
              }
            },
            {
              key: '_resized',
              value: function () {
                this._setup(),
                  this._setupDescs(),
                  this._setupYears(),
                  (this.dotSpaceWPercent = 768 <= this.winW ? 20 : 50),
                  (this.dotSpaceW =
                    this.$years[1]
                      .querySelector('.year-dot')
                      .getBoundingClientRect().left -
                    this.$years[0]
                      .querySelector('.year-dot')
                      .getBoundingClientRect().left)
              }
            },
            {
              key: '_init',
              value: function () {
                this._setup(), this._setupDescs(), this._setupYears()
              }
            }
          ]),
          e
        )
      })())(),
      new ((function () {
        function e () {
          _classCallCheck(this, e), (this.$roles = $('.Roles-wrap'))
        }
        return (
          _createClass(e, [
            {
              key: '_setup',
              value: function () {
                this.$roles.find('.inner-wrapper').height(winH)
              }
            },
            {
              key: '_resized',
              value: function () {
                this._setup()
              }
            },
            {
              key: '_init',
              value: function () {
                this._setup()
              }
            }
          ]),
          e
        )
      })())()
    // new ((function () {
    //   function e () {
    //     _classCallCheck(this, e),
    //       (this.$subscribe = $('.subscribe-form')),
    //       (this.$subscribeForm = this.$subscribe.find('form')),
    //       (this.$subscribeFormElements = {
    //         firstName: this.$subscribeForm.find('[name="FNAME"]'),
    //         number: this.$subscribeForm.find('[name="PHONE_NUMBER"]'),
    //         country: this.$subscribeForm.find('[name="COUNTRY"]')
    //       }),
    //       (this.sakari = new i()),
    //       this._bindEvents()
    //   }
    //   return (
    //     _createClass(e, [
    //       {
    //         key: '_bindEvents',
    //         value: function () {
    //           var t = this
    //           'sakari-subscribe-form' === t.$subscribeForm.attr('id') &&
    //             (t.$subscribeForm.on('submit', function (e) {
    //               e.preventDefault(), t._subscribeContact()
    //             }),
    //             this.$subscribeFormElements.number.on(
    //               'keypress',
    //               this._formatPhoneNumber.bind(this)
    //             ))
    //         }
    //       },
    //       {
    //         key: '_formatPhoneNumber',
    //         value: function () {
    //           var e = new libphonenumber.parsePhoneNumberFromString(
    //             this.$subscribeFormElements.number.val(),
    //             this.$subscribeFormElements.country.val()
    //           )
    //           e &&
    //             e.number &&
    //             this.$subscribeFormElements.number.val(
    //               new libphonenumber.AsYouType().input(e.number)
    //             )
    //         }
    //       },
    //       {
    //         key: '_validateForm',
    //         value: function () {
    //           return 0 === this.$subscribeFormElements.firstName.val().length
    //             ? ($('#ske-error-response').html('Please enter a valid name'),
    //               !1)
    //             : !(
    //                 this.$subscribeFormElements.number.val().length < 10 &&
    //                 ($('#ske-error-response').html(
    //                   'Please enter a valid phone number'
    //                 ),
    //                 1)
    //               )
    //         }
    //       },
    //       {
    //         key: '_subscribeContact',
    //         value: function () {
    //           if (
    //             ($('#ske-error-response').html(''),
    //             $('#ske-success-response').html(''),
    //             this._validateForm())
    //           ) {
    //             var e = {
    //               firstName: this.$subscribeFormElements.firstName.val(),
    //               number: this.$subscribeFormElements.number.val()
    //             }
    //             this.sakari._addContact(e, this.$subscribeFormElements)
    //           }
    //         }
    //       }
    //     ]),
    //     e
    //   )
    // })())(),
      new ((function () {
        function e () {
          _classCallCheck(this, e),
            (this.winW = $(window).width()),
            (this.$reelVideo = $('.reel-video')),
            (this.$reelVideoWrapper = $('.reel-video-wrapper')),
            (this.$reelPlayWrapper = $('.reel-play-wrapper')),
            (this.$reelPlayButton = $('.reel-play-button')),
            this._bindEvents()
        }
        return (
          _createClass(e, [
            {
              key: '_bindEvents',
              value: function () {
                var t = this
                t.$reelPlayButton.on('click', function () {
                  var e = $(this).attr('data-url')
                  t.$reelVideo.addClass('active'),
                    t.$reelVideoWrapper.append(
                      '<iframe width="100%" height="100%" src="' +
                        e +
                        '?rel=0&showinfo=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe'
                    ),
                    t.$reelPlayWrapper.fadeOut(500, function () {
                      t.$reelPlayWrapper.remove()
                    })
                })
              }
            },
            {
            key: '_init',
            value: function () {}
         }
          ]),
          e
        )
      })())()
  }
])
