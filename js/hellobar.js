var HB_SITE_ID = 19920;
HB_BACKEND_HOST = "hi.hellobar.com", "undefined" == typeof _hbq && (_hbq = []);
var HBQ = function() {
  if (HB.goals = [], HB.loadCookies(), "undefined" != typeof _hbq && _hbq && _hbq.length) for (var e = 0; _hbq.length > e; e++) this.push(_hbq[e]);
  HB.setDefaultSegments(), HB.applyGoals(), HB.isMobileWidth = !1, setInterval(function() {
    var e = window.frames.hellobar_container;
    if (e) {
      var t = e.document;
      if (HB.e = {
        container: HB.$("#hellobar_container"),
        pusher: HB.$("#hellobar_pusher"),
        bar: t.getElementById("hellobar"),
        shadow: t.getElementById("hellobar-shadow")
      }, HB.e.bar) {
        HB.e.bar.clientHeight && (HB.e.shadow && (HB.e.shadow.style.top = HB.e.bar.clientHeight + (HB.currentBar.show_border ? 0 : -1) + "px", HB.e.shadow.style.display = "block"), HB.e.container && (HB.e.container.style.height = HB.e.bar.clientHeight + 8 + "px"), HB.e.pusher && (HB.e.pusher.style.height = HB.e.bar.clientHeight + (HB.t(HB.currentBar.show_border) ? 3 : 0) + "px"));
        var r = HB.isMobileWidth;
        if (HB.isMobileWidth = 640 >= HB.e.bar.clientWidth, r == HB.isMobileWidth) return;
        HB.isMobileWidth ? HB.addClass(HB.e.bar, "mobile") : HB.removeClass(HB.e.bar, "mobile")
      }
    }
  }, 50)
};
HBQ.prototype.push = function() {
  if (1 == arguments.length && "function" == typeof arguments[0]) arguments[0]();
  else {
    for (var e = [], t = 1; arguments.length > t; t++) e.push(arguments[t]);
    HB[arguments[0]].apply(HB, e)
  }
};
var HB = {
  $: function(e) {
    return "string" == typeof e ? document.getElementById(e.replace("#", "")) : e
  },
  t: function(e) {
    return e && "false" != e && "0" != e ? !0 : !1
  },
  addClass: function(e, t) {
    e = HB.$(e), e.className += " " + t
  },
  removeClass: function(e, t) {
    e = HB.$(e);
    for (var r = e.className.split(" "), a = [], o = 0; r.length > o; o++) r[o] != t && a.push(r[o]);
    e.className = a.join(" ")
  },
  addCSS: function(e) {
    HB.css || (HB.css = ""), HB.css += "<style>" + e + "</style>"
  },
  n: function(e, t) {
    e = (e + "").toLowerCase().replace(/https?:\/\//, "").replace(/^www\./, "").replace(/\#.*/, ""), t && (e.match(/^\//) || (e = e.replace(/.*?\//, "/")));
    var r = e.split("?");
    return r[1] ? r[0] + "?" + r[1].split("&").sort().join("&") : r[0]
  },
  umatch: function(e, t) {
    return -1 == e.indexOf("?") ? HB.n(e, !0) == HB.n(t, !0).split("?")[0] : HB.n(e, !0) == HB.n(t, !0)
  },
  attributeParams: function() {
    return "a=" + encodeURIComponent("all:all|" + HB.serializeCookies(HB.cookies))
  },
  s: function(e, t, r) {
    if ("undefined" != typeof HB_DNT || "undefined" == typeof HB_SITE_ID) return r && r(), void 0;
    var a = document.createElement("img");
    if (a.style.display = "none", e += (-1 == e.indexOf("?") ? "?" : "&") + "s=" + HB_SITE_ID + "&u=" + HB.i(), t && (e += (0 == t.indexOf("&") ? "" : "&") + t), e += "&t=i", r) {
      var o = !1,
        n = function() {
          o || r(), o = !0
        };
      setTimeout(n, 750), a.onload = n
    }
    a.src = HB.hi(e)
  },
  g: function(e, t, r) {
    var a = document.createElement("script");
    if (a.type = "text/javascript", a.async = !0, e += (-1 == e.indexOf("?") ? "?" : "&") + "s=" + HB_SITE_ID + "&u=" + HB.i(), t && (e += (0 == t.indexOf("&") ? "" : "&") + t), e += "&t=j", r) {
      HB.cb || (HB.cb = []);
      var o = "HB.cb[" + HB.cb.length + "]";
      e += "&j=" + encodeURIComponent(o);
      var n = !1,
        l = function(e) {
          n || r(e), n = !0
        };
      HB.cb.push(function(e) {
        l(e)
      }), setTimeout(l, 750)
    }
    a.src = HB.hi(e), (document.head || document.body || document.childNodes[0]).appendChild(a)
  },
  hi: function(e) {
    return ("https:" == document.location.protocol ? "https" : "http") + "://" + HB_BACKEND_HOST + "/" + e
  },
  trackClick: function(e) {
    var t = e.href;
    HB.goalPerformed(function() {
      "_blank" == e.target ? window.open(t) : document.location = t
    })
  },
  goalPerformed: function(e) {
    HB.setBarAttr(HB.bi, "nc", (HB.getBarAttr(HB.bi, "nc") || 0) + 1), HB.trigger("goalPerformed", HB.currentBar), HB.s("c?b=" + HB.bi, HB.attributeParams(), e)
  },
  submitEmail: function(e, t, r) {
    HB.validateEmail(e.value, t.value, function() {
      r.innerHTML = "<span>Thank you!</span>", HB.recordEmail(e.value, t.value, function() {})
    }, function() {
      HB.shake(e)
    })
  },
  validateEmail: function(e, t, r, a) {
    e && e.match(/.+@.+\..+/) ? r() : a()
  },
  recordEmail: function(e, t, r) {
    if (e) {
      var a = ["g=" + HB.gi, "e=" + encodeURIComponent(e)];
      t && a.push("n=" + encodeURIComponent(t)), HB.s("e", a.join("&"), function() {
        HB.goalPerformed(r)
      })
    }
  },
  serializeCookies: function(e) {
    if (!e) return "";
    var t = "";
    if (e.user && (t += HB.serializeCookieValues(e.user)), t += "^", e.bars) for (var r in e.bars) t += r + "|" + HB.serializeCookieValues(e.bars[r]) + "^";
    return t
  },
  serializeCookieValues: function(e) {
    if (!e) return "";
    var t = [];
    for (var r in e) {
      var a = e[r];
      "function" != typeof a && "object" != typeof a && t.push(HB.sanitizeCookieValue(r) + ":" + HB.sanitizeCookieValue(a))
    }
    return t.join("|")
  },
  sanitizeCookieValue: function(e) {
    return (e + "").replace(/[\^\|\,\;\n\r]/g, " ")
  },
  parseCookies: function(e) {
    var t = {};
    if (!e) return {
      user: {},
      bars: {}
    };
    var r = e.split("^");
    t.user = HB.parseCookieValues(r[0]), t.bars = {};
    for (var a = 1; r.length > a; a++) if (r[a]) {
      var o = r[a].split("|"),
        n = o[0],
        l = o.slice(1, o.length);
      t.bars[n] = HB.parseCookieValues(l.join("|"))
    }
    return t
  },
  parseCookieValues: function(e) {
    if (!e) return {};
    for (var t = e.split("|"), r = {}, a = 0; t.length > a; a++) {
      var o = t[a].split(":"),
        n = o[0],
        l = o.slice(1, o.length).join(":");
      parseInt(l, 10) == l ? l = parseInt(l, 10) : parseFloat(l) == l && (l = parseFloat(l)), r[n] = l
    }
    return r
  },
  loadCookies: function() {
    HB.cookies = "undefined" == typeof HB_SITE_ID ? {
      bars: {},
      user: {}
    } : HB.parseCookies(HB.gc("hb_" + HB_SITE_ID))
  },
  saveCookies: function() {
    "undefined" != typeof HB_SITE_ID && HB.sc("hb_" + HB_SITE_ID, HB.serializeCookies(HB.cookies), 1825)
  },
  getUserAttr: function(e) {
    return HB.cookies.user[e]
  },
  setUserAttr: function(e, t, r) {
    (!r || t) && (HB.cookies.user[e] = t, HB.saveCookies())
  },
  getBarAttr: function(e, t) {
    return e += "", HB.cookies.bars[e] ? HB.cookies.bars[e][t] : null
  },
  setBarAttr: function(e, t, r) {
    e += "", HB.cookies.bars[e] || (HB.cookies.bars[e] = {}), HB.cookies.bars[e][t] = r, HB.saveCookies()
  },
  gc: function(e) {
    var t, r, a, o = document.cookie.split(";");
    for (t = 0; o.length > t; t++) if (r = o[t].substr(0, o[t].indexOf("=")), a = o[t].substr(o[t].indexOf("=") + 1), r = r.replace(/^\s+|\s+$/g, ""), r == e) return unescape(a)
  },
  sc: function(e, t, r) {
    if ("undefined" == typeof HB_NC) {
      var a = new Date;
      a.setDate(a.getDate() + r), t = escape(t) + (null == r ? "" : "; expires=" + a.toUTCString()), document.cookie = e + "=" + t
    }
  },
  i: function() {
    var e;
    if (e = HB.gc("hbuid")) return e;
    var t = (new Date).getTime();
    return e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
      var r = 0 | (t + 16 * Math.random()) % 16;
      return t = Math.floor(t / 16), ("x" == e ? r : 8 | 7 & r).toString(16)
    }), HB.sc("hbuid", e, 1825), e
  },
  domReady: function(e) {
    if (document.body) e();
    else var t = setInterval(function() {
      document.body && (e(), clearInterval(t))
    }, 50)
  },
  templateHTML: {},
  setTemplate: function(e, t) {
    HB.templateHTML[e] = t
  },
  getTemplate: function(e) {
    return HB.templateHTML[e.goal.data && e.goal.data.type ? e.goal.data.type : e.goal.type]
  },
  prerender: function(e) {
    return this.sanitize(e)
  },
  sanitize: function(e) {
    for (var t in e) e.hasOwnProperty(t) && e[t] && e[t].replace && (e[t] = e[t].replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    return e
  },
  renderTemplate: function(e, t) {
    return e.replace(/\{\{(.*?)\}\}/g, function(e, r) {
      return HB.parseTemplateVar(r, t)
    })
  },
  parseTemplateVar: function(value, bar) {
    try {
      value = eval(value)
    } catch (e) {}
    return void 0 === value ? "" : value
  },
  on: function(e, t) {
    HB.eventCallbacks || (HB.eventCallbacks = {}), HB.eventCallbacks[e] || (HB.eventCallbacks[e] = []), HB.eventCallbacks[e].push(t)
  },
  trigger: function() {
    var e = arguments[0];
    if (HB.eventCallbacks && HB.eventCallbacks[e]) {
      for (var t = HB.eventCallbacks[e].length, r = [], a = 1; arguments.length > a; a++) r.push(arguments[a]);
      for (a = 0; t > a; a++)(function(e, t) {
        setTimeout(function() {
          HB.eventCallbacks[e][t].apply(HB, r)
        }, t)
      })(e, a)
    }
  },
  render: function(e) {
    var t = {};
    for (var r in e) t[r] = e[r];
    var a = HB.prerender(t);
    if (HB.currentBar = a, HB.bi = a.id, "#nohb" != document.location.hash) {
      var o = HB.renderTemplate(this.getTemplate(a) + "", a);
      HB.domReady(function() {
        setTimeout(function() {
          HB.injectBarHTML(o, a), HB.viewed()
        }, 1)
      })
    }
  },
  viewed: function() {
    var e = new Date,
      t = Math.round(e.getTime() / 1e3),
      r = 86400;
    HB.getBarAttr(HB.bi, "fv") || HB.setBarAttr(HB.bi, "fv", t);
    var a = HB.getBarAttr(HB.bi, "lv");
    a && HB.setBarAttr(HB.bi, "ls", Math.round((t - a) / r)), HB.setBarAttr(HB.bi, "lv", t), HB.setBarAttr(HB.bi, "lf", Math.round((t - HB.getBarAttr(HB.bi, "fv")) / r)), HB.setBarAttr(HB.bi, "nv", (HB.getBarAttr(HB.bi, "nv") || 0) + 1), HB.s("v?b=" + HB.bi, HB.attributeParams()), HB.trigger("barShown", HB.currentBar)
  },
  injectAtTop: function(e) {
    document.body.children[0] ? document.body.insertBefore(e, document.body.children[0]) : document.body.appendChild(e)
  },
  injectBarHTML: function(e, t) {
    if (HB.w && HB.w.parentNode.removeChild(HB.w), HB.w = document.createElement("iframe"), HB.w.src = "about:blank", HB.w.id = "hellobar_container", HB.w.name = "hellobar_container", HB.w.className = t.size + (HB.t(t.remains_at_top) ? " remains_at_top" : ""), HB.w.scrolling = "no", HB.p && HB.p.parentNode.removeChild(HB.p), HB.p = null, HB.t(t.pushes_page_down) && (HB.p = document.createElement("div"), HB.p.id = "hellobar_pusher", HB.p.className = t.size, HB.injectAtTop(HB.p)), HB.extCSS) {
      HB.extCSSStyle && HB.extCSSStyle.parentNode.removeChild(HB.extCSSStyle), HB.extCSSStyle = document.createElement("STYLE"), HB.extCSSStyle.type = "text/css", HB.extCSSStyle.styleSheet ? HB.extCSSStyle.styleSheet.cssText = HB.extCSS : HB.extCSSStyle.appendChild(document.createTextNode(HB.extCSS));
      var r = document.getElementsByTagName("HEAD")[0];
      r.appendChild(HB.extCSSStyle)
    }
    HB.injectAtTop(HB.w);
    var a = HB.w.contentWindow.document;
    a.open(), a.write((HB.css || "") + e), a.close()
  },
  addGoal: function(e, t, r, a) {
    "[object Array]" !== Object.prototype.toString.call(t) && (t = [t]), r || (r = 0);
    var o = {
      method: e,
      bars: t,
      priority: r,
      data: a
    };
    HB.goals.push(o);
    for (var n = 0; t.length > n; n++) t[n].goal = o
  },
  applyGoals: function() {
    HB.goals.sort(function(e, t) {
      return e.priority > t.priority ? 1 : e.priority < t.priority ? -1 : 0
    });
    for (var e = 0; HB.goals.length > e; e++) {
      var t = HB.goals[e];
      if (t.method() && t.bars && t.bars.length > 0 && t.bars[0]) {
        HB.currentGoal = t, HB.gi = t.data.id;
        for (var r = [], a = 0; t.bars.length > a; a++) {
          var o = t.bars[a];
          if (o.goal = t, o.target) {
            var n = o.target.split(":"),
              l = n[0],
              i = n.slice(1, n.length).join(":");
            (HB.getUserAttr(l) || "").toLowerCase() == i.toLowerCase() && r.push(o)
          } else r.push(o)
        }
        if (1 == r.length) return HB.render(r[0]), !0;
        if (r.length > 1) return HB.pickBestBar(r), !0;
        HB.currentGoal = null, HB.gi = null
      }
    }
  },
  pickBestBar: function(e) {
    for (var t, r = [], a = 0; e.length > a; a++) {
      var o = e[a].id,
        n = HB.getBarAttr(o, "nv") || 0;
      n > 0 && (!t || n > t.views) && (t = {
        views: n,
        bar: e[a]
      }), r.push(o)
    }
    return t ? HB.render(t.bar) : (HB.g("b?b=" + r.join(","), HB.attributeParams(), function(t) {
      if (t) for (var r = 0; e.length > r; r++) if (e[r].id == t) return HB.render(e[r]), void 0;
      var a = Math.floor(Math.random() * e.length),
        o = e[a];
      HB.render(o)
    }), void 0)
  },
  setDefaultSegments: function() {
    var e = new Date,
      t = Math.round(e.getTime() / 1e3),
      r = 86400;
    HB.getUserAttr("fv") || HB.setUserAttr("fv", t);
    var a = HB.getUserAttr("lv");
    if (a && HB.setUserAttr("ls", Math.round((t - a) / r)), HB.setUserAttr("lv", t), HB.setUserAttr("lf", Math.round((t - HB.getUserAttr("fv")) / r)), HB.setUserAttr("nv", (HB.getUserAttr("nv") || 0) + 1), document.referrer) {
      var o = HB.getTLD().toLowerCase(),
        n = (document.referrer + "").replace(/.*?\:\/\//, "").replace(/www\./i, "").toLowerCase().substr(0, 150),
        l = n.replace(/(.*?)\/.*/, "$1");
      if (-1 == l.indexOf(o)) {
        HB.getUserAttr("or") || HB.setUserAttr("or", n), HB.setUserAttr("rf", n), HB.setUserAttr("rd", l);
        var i = n.split("?")[1];
        if (i) {
          for (var s, c = i.split("&"), h = 0; c.length > h; h++) {
            var p, u, b = c[h].split("=");
            p = decodeURIComponent(b[0]).toLowerCase(), u = decodeURIComponent(b[1]), s[p] = u
          }
          var d = s.query || s.q || s.search;
          d && HB.setUserAttr("st", d), HB.setUserAttr("ad_so", s.utm_source, !0), HB.setUserAttr("ad_ca", s.utm_campaign, !0), HB.setUserAttr("ad_me", s.utm_medium, !0), HB.setUserAttr("ad_co", s.utm_content, !0), HB.setUserAttr("ad_te", s.utm_term, !0)
        }
      }
    }
    HB.setUserAttr("pu", (document.location + "").split("#")[0]), HB.setUserAttr("dt", e.getUTCFullYear() + "-" + (e.getUTCMonth() + 1) + "-" + e.getUTCDate()), HB.setUserAttr("ts", t);
    var B = navigator.userAgent;
    B.match(/(mobi|phone|ipod|blackberry|docomo)/i) ? HB.setUserAttr("dv", "mobile") : B.match(/(ipad|kindle|android)/i) ? HB.setUserAttr("dv", "tablet") : HB.setUserAttr("dv", "computer")
  },
  getTLD: function() {
    var e, t, r = "tld=ck",
      a = document.location.hostname.split(".");
    for (e = a.length - 1; e >= 0; e--) if (t = a.slice(e).join("."), document.cookie = r + ";domain=." + t + ";", document.cookie.indexOf(r) > -1) return document.cookie = r.split("=")[0] + "=;domain=." + t + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;", t;
    return document.location.hostname
  },
  shake: function(e) {
    (function(e) {
      var t = 0,
        r = -.1,
        a = 1,
        o = e.style.position,
        n = parseInt(e.style.left, 0) || 0,
        l = n,
        i = 0;
      e.style.position = "relative";
      var s = setInterval(function() {
        t += r, l - n >= a && r > 0 && (r *= -1), -a >= l - n && 0 > r && (i += 1, r *= -1), l += t, i >= 2 && l >= n && (clearInterval(s), e.style.left = n + "px", e.style.position = o), e.style.left = Math.round(l) + "px"
      }, 5)
    })(HB.$(e))
  }
};
HB.setTemplate("DirectTraffic", '<div id="hellobar" class="{{bar.size}} {{bar.tab_side}} {{HB.t(bar.show_border) ? \'has_border\' : \'\'}} {{HB.t(bar.remains_at_top) ? \'remains_at_top\' : \'\'}}" style="background-color: #{{bar.bar_color}}; color: #{{bar.text_color}}; font-family: {{bar.font}}; border-color: #{{bar.border_color}};">\n<span>\n  {{bar.message}}\n</span>\n<a onclick="window.parent.HB.trackClick(this); return false;" class="hellobar_cta hb-{{bar.link_style}}" href="{{bar.goal.data.url}}" {{HB.t(bar.open_in_new_window) ? \'target=_blank\' : \'target=_parent\'}} style="color: #{{bar.link_color}}; background-color: #{{bar.button_color}}; border-color: #{{bar.button_color}}">\n  {{bar.link_text}}\n</a>\n  <a href="http://www.hellobar.com/?utm_medium=hellobar&utm_campaign=HBlogo" target="_parent" class="hellobar_logo"><img src="https://s3.amazonaws.com/hb-assets/logo_white.png" alt="Hello Bar" /></a>\n  <a href="#" class="hellobar_arrow" style="{{HB.t(bar.closable) ? \'\' : \'display:none\'}}"><img src="https://s3.amazonaws.com/hb-assets/arrow_white.png" alt="" /></a>\n  <div id="hellobar-shadow"></div>\n</div>\n'), HB.setTemplate("CollectEmail", '<div id="hellobar" class="{{bar.size}} {{bar.tab_side}} {{HB.t(bar.show_border) ? \'has_border\' : \'\'}} {{HB.t(bar.remains_at_top) ? \'remains_at_top\' : \'\'}}" style="background-color: #{{bar.bar_color}}; color: #{{bar.text_color}}; font-family: {{bar.font}}; border-color: #{{bar.border_color}};">\n<div id="hb_msg_container">\n<span>\n  {{bar.message}}\n  <input id="hb_email" type="email" placeholder="Your Email"/>\n  <input id="hb_name" type="text" placeholder="Your Name" {{HB.t(bar.goal.data.collect_names) ? "" : "style=\'display:none\'"}}/>\n</span>\n<a onclick="window.parent.HB.submitEmail(document.getElementById(\'hb_email\'), document.getElementById(\'hb_name\'), document.getElementById(\'hb_msg_container\')); return false" href="#" class="hellobar_cta hb-{{bar.link_style}}" style="color: #{{bar.link_color}}; background-color: #{{bar.button_color}}; border-color: #{{bar.button_color}}">\n  {{bar.link_text}}\n</a>\n</div>\n  <a href="http://www.hellobar.com/?utm_medium=hellobar&utm_campaign=HBlogo" target="_parent" class="hellobar_logo"><img src="https://s3.amazonaws.com/hb-assets/logo_white.png" alt="Hello Bar" /></a>\n  <a href="#" class="hellobar_arrow" style="{{HB.t(bar.closable) ? \'\' : \'display:none\'}}"><img src="https://s3.amazonaws.com/hb-assets/arrow_white.png" alt="" /></a>\n  <div id="hellobar-shadow"></div>\n</div>\n'), HB.addCSS("#hellobar_pusher{height:30px;position:relative;overflow:hidden}#hellobar{min-height:30px;height:auto;text-align:center;width:100%;_width:expression(eval(document.body.offsetWidth-20));top:0;left:0;margin:0;padding:0;z-index:5000;position:absolute}#hellobar.has_border{border-bottom:3px solid white}#hellobar_pusher.large{height:50px}#hellobar.large{min-height:50px;height:auto;font-size:17px;font-weight:600}#hellobar.large span{font-size:17px}#hellobar.large a{line-height:45px}#hellobar.large a.hellobar_cta.hb-text{line-height:48px}#hellobar.large span{line-height:25px}#hellobar.large a.hellobar_logo{top:10px}#hellobar.large a.hellobar_logo img{height:29px;width:48px}#hellobar.large a.hellobar_arrow{top:10px}#hellobar.large a.hellobar_arrow img{height:29px;width:28px}#hellobar.large a.hellobar_cta.hb-button{padding:6px 15px}#hellobar.regular{font-size:14px}#hellobar.regular span{font-size:14px}#hellobar.regular a{line-height:30px}#hellobar.regular a.hellobar_cta.hb-text{line-height:28px}#hellobar.regular span{line-height:20px;margin-top:3px}#hellobar.regular a.hellobar_logo{top:4px}#hellobar.regular a.hellobar_logo img{height:21px;width:33px}#hellobar.regular a.hellobar_arrow{top:4px}#hellobar.regular a.hellobar_arrow img{height:21px;width:21px}#hellobar.regular a.hellobar_cta.hb-button{padding:2px 8px}#hellobar{white-space:normal}#hellobar span{margin-left:50px;margin-right:20px;margin-top:13px;display:inline-block}#hellobar a{margin-right:30px}#hellobar.large span{margin-left:65px}#hellobar.large.mobile span,#hellobar.regular.mobile span{margin-left:10px}#hellobar.large a{margin-right:65px}#hellobar a.hellobar_cta.hb-text{padding:6px 15px;border-radius:4px;color:#fff;padding-left:5px;text-decoration:underline;background:none!important}#hellobar a:hover.hellobar_cta.hb-text{}#hellobar a img{border:none;padding:0;margin:0;background-color:transparent}#hellobar a.hellobar_cta.hb-button{border:1px solid;box-shadow:inset 0 1px 1px rgba(255,255,255,0.1);border-radius:4px;margin:0;margin-left:10px;text-decoration:none;color:#fff;white-space:nowrap}#hellobar.mobile a.hellobar_logo{display:none}#hellobar.mobile a.hellobar_arrow{display:none}#hellobar a.hellobar_logo{position:absolute;display:block;left:10px;right:auto;opacity:.3}#hellobar a.hellobar_arrow{display:block;position:absolute;right:10px;left:auto;opacity:.3}#hellobar.left a.hellobar_logo{right:10px;left:auto}#hellobar.left a.hellobar_arrow{left:10px;right:auto}a:hover.hellobar_logo,a:hover.hellobar_arrow{opacity:.6}#hellobar-shadow{left:0;width:100%;height:8px;line-height:8px;background:url(https://s3.amazonaws.com/hb-assets/system/modules/hellobar/lib/sprite-8bit.png);position:absolute;margin-top:-3px;display:none}#hellobar.has_border #hellobar-shadow{margin-top:0}#hellobar input{box-shadow:inset 1px 1px 3px #aaa;border-radius:4px;border:none;width:150px;margin-left:10px;vertical-align:middle;padding:3px 3px;margin-bottom:2px;margin-top:0}#hellobar.large input{padding:5px 5px;margin-bottom:5px;margin-top:0}"), HB.extCSS = "#hellobar_container{width:100%;height:40px;border:none;padding:0;margin:0;position:absolute;overflow:hidden;left:0;top:0;z-index:17000}#hellobar_container.large{height:60px}#hellobar_container.remains_at_top{position:fixed;_position:absolute;top:0;_top:expression(eval(document.body.scrollTop))}#hellobar_pusher{height:30px;position:relative;overflow:hidden}#hellobar_pusher.large{height:50px}", _hbq.push(function() {
  HB.addGoal(function() {
    return !0
  }, [{
    remains_at_top: "true",
    open_in_new_window: "false",
    pushes_page_down: "true",
    closable: "false",
    show_wait: 0,
    hide_after: 0,
    wiggle_wait: 0,
    link_style: "button",
    /* message: "Text 'freetruck' to 53535 to Learn How to Win a Cummins, Duramax or Powerstroke.", */
    message: "Message has been changed for this site.",
    link_text: "See The Trucks",
    bar_color: "ffcc33",
    text_color: "333333",
    link_color: "ffffff",
    border_color: "ffffff",
    texture: "none",
    show_border: "true",
    font: "Helvetica,Arial,sans-serif",
    tab_side: "right",
    button_color: "000000",
    size: "regular",
    thank_you_text: "Thank you for signing up!",
    id: 21124,
    target: null
  }, {
    remains_at_top: "true",
    open_in_new_window: "false",
    pushes_page_down: "true",
    closable: "false",
    show_wait: 0,
    hide_after: 0,
    wiggle_wait: 0,
    link_style: "button",
    message: "(Realistically) Win A Truck",
    link_text: "See The Trucks",
    bar_color: "ffcc33",
    text_color: "2e2b2e",
    link_color: "ffffff",
    border_color: "ffffff",
    texture: "none",
    show_border: "true",
    font: "Helvetica,Arial,sans-serif",
    tab_side: "right",
    button_color: "000000",
    size: "regular",
    thank_you_text: "Thank you for signing up!",
    id: 21889,
    target: "dv:mobile"
  }], 1, {
    url: "http://builtdiesel.com/",
    id: 17158,
    type: "DirectTraffic"
  })
}), _hbq = new HBQ;