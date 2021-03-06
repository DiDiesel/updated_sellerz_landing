/*
 * AllInOne Banner - Banner Rotator v3.0
 *
 * Copyright 2012, LambertGroup
 * 
 */ (function (c) {
    function G(a, b) {
        c(a.currentImg.attr("data-text-id")).css("display", "block");
        var d = c(a.currentImg.attr("data-text-id")).children(),
            g = 0;
        currentText_arr = [];
        d.each(function () {
            currentText_arr[g] = c(this);
            var f = currentText_arr[g].attr("data-initial-left"),
                d = currentText_arr[g].attr("data-initial-top");
            b.responsive && (f = parseInt(f / (b.origWidth / b.width), 10), d = parseInt(d / (b.origWidth / b.width), 10));
            currentText_arr[g].css({
                left: f + "px",
                top: d + "px",
                opacity: parseInt(currentText_arr[g].attr("data-fade-start"), 10) / 100
            });
            var m = currentText_arr[g];
            setTimeout(function () {
                if (b.responsive) {
                    newCss = "";
                    if (m.css("font-size").lastIndexOf("px") != -1) {
                        fontSize = m.css("font-size").substr(0, m.css("font-size").lastIndexOf("px"));
                        newCss = newCss + ("font-size:" + fontSize / (b.origWidth / b.width) + "px;")
                    } else if (m.css("font-size").lastIndexOf("em") != -1) {
                        fontSize = m.css("font-size").substr(0, m.css("font-size").lastIndexOf("em"));
                        newCss = newCss + ("font-size:" + fontSize / (b.origWidth / b.width) + "em;")
                    }
                    if (m.css("line-height").lastIndexOf("px") != -1) {
                        lineHeight = m.css("line-height").substr(0, m.css("line-height").lastIndexOf("px"));
                        newCss = newCss + ("line-height:" + lineHeight / (b.origWidth / b.width) + "px;")
                    } else if (m.css("line-height").lastIndexOf("em") != -1) {
                        lineHeight = m.css("line-height").substr(0, m.css("line-height").lastIndexOf("em"));
                        newCss = newCss + ("line-height:" + lineHeight / (b.origWidth / b.width) + "em;")
                    }
                    m.wrapInner('<div class="newFS" style="' + newCss + '" />')
                }
                var f = m.attr("data-final-left"),
                    d = m.attr("data-final-top");
                if (b.responsive) {
                    f = parseInt(f / (b.origWidth / b.width), 10);
                    d = parseInt(d / (b.origWidth / b.width), 10)
                }
                var g = 1;
                a.isVideoPlaying == true && (g = 0);
                m.animate({
                    opacity: g,
                    left: f + "px",
                    top: d + "px"
                }, m.attr("data-duration") * 1E3, function () {
                    a.isVideoPlaying == true && c(a.currentImg.attr("data-text-id")).children().css("opacity", 0)
                })
            }, 1E3 * currentText_arr[g].attr("data-delay"));
            g++
        })
    }
    function H(a, b) {
        nowx = (new Date).getTime();
        !a.mouseOverBanner && (!a.effectIsRunning && b.showCircleTimer) && (a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.ctx.beginPath(), a.ctx.globalAlpha = b.behindCircleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth + 2, a.ctx.strokeStyle = b.behindCircleColor, a.ctx.stroke(), a.ctx.beginPath(), a.ctx.globalAlpha = b.circleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * ((a.timeElapsed + nowx - a.arcInitialTime) / 1E3) / b.autoPlay * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth, a.ctx.strokeStyle = b.circleColor, a.ctx.stroke())
    }
    function I(a, b, d) {
        c(".stripe", a).remove();
        c(".block", a).remove();
        y = x = Math.round(b.width / b.numberOfStripes);
        for (var g = !0, f = 0; f < b.numberOfStripes; f++) f == b.numberOfStripes - 1 && (y = a.width() - x * (b.numberOfStripes - 1)), !b.responsive || !c.browser.msie || c.browser.msie && 9 <= c.browser.version ? -1 != r.indexOf("ipad") || -1 != r.indexOf("iphone") || -1 != r.indexOf("ipod") || -1 != r.indexOf("webos") ? g = !1 : a.append(c('<div class="stripe"></div>').css({
                opacity: "0",
                left: x * f + "px",
                width: y + "px",
                height: "0px",
                background: 'url("' + d.current_imgInside.attr("src") + '") ' + -1 * f * x + "px 0%"
            })) : g = !1, g || (mleft = -1 * x * f, a.append(c('<div class="stripe"><img src="' + d.current_imgInside.attr("src") + '" width="' + b.width + '" height="' + b.height + '" style="margin-left:' + mleft + 'px;"></div>').css({
                opacity: "0",
                left: x * f + "px",
                width: y + "px",
                height: "0px"
            })));
        b.responsive && g && (!c.browser.msie || c.browser.msie && 9 <= c.browser.version) && c(".stripe", a).css({
            "-webkit-background-size": b.width + "px " + b.height + "px",
            "-moz-background-size": b.width + "px " + b.height + "px",
            "-o-background-size": b.width + "px " + b.height + "px",
            "-ms-background-size": b.width + "px " + b.height + "px",
            "background-size": b.width + "px " + b.height + "px"
        })
    }
    function F(a, b, c, g, f) {
        var h = a.width(),
            m = a.height();
        a.css({
            width: "0",
            height: "0"
        });
        b == g.numberOfRows - 1 && c == g.numberOfColumns - 1 ? setTimeout(function () {
            a.animate({
                opacity: "1.0",
                width: h,
                height: m
            }, 1E3 * g.effectDuration / 3, "", function () {
                f.trigger("effectComplete")
            })
        }, n) : setTimeout(function () {
            a.animate({
                opacity: "1.0",
                width: h,
                height: m
            }, 1E3 * g.effectDuration / 3)
        }, n);
        n += D
    }
    function A(a, b, d, g, f, h, m, C) {
        var p = !0;
        if (!b.loop && d.current_img_no + a >= g || !b.loop && 0 > d.current_img_no + a) p = !1;
        if (p) {
            c(".newFS", h).contents().unwrap();
            b.showCircleTimer && (d.ctx.clearRect(0, 0, d.canvas.width, d.canvas.height), d.ctx.beginPath(), d.ctx.globalAlpha = b.behindCircleAlpha / 100, d.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), d.ctx.lineWidth = b.circleLineWidth + 2, d.ctx.strokeStyle = b.behindCircleColor, d.ctx.stroke(), d.ctx.beginPath(), d.ctx.globalAlpha = b.circleAlpha / 100, d.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 0, !1), d.ctx.lineWidth = b.circleLineWidth, d.ctx.strokeStyle = b.circleColor, d.ctx.stroke());
            c(d.currentImg.attr("data-text-id")).css("display", "none");
            c(m[d.current_img_no]).removeClass("bottomNavButtonON");
            b.randomizeImages && !d.bottomNavClicked ? (a = Math.floor(Math.random() * g), d.current_img_no = d.current_img_no === a ? Math.floor(Math.random() * g) : a) : d.current_img_no = d.current_img_no + a >= g ? 0 : 0 > d.current_img_no + a ? g - 1 : d.current_img_no + a;
            d.bottomNavClicked = !1;
            c(m[d.current_img_no]).addClass("bottomNavButtonON");
            d.currentImg = c(C[d.current_img_no]);
            d.current_imgInside = d.currentImg.find("img:first");
            d.currentImg.attr("data-transition") ? (f = d.currentImg.attr("data-transition"), "random" == f && (f = E[Math.floor(Math.random() * E.length)])) : f = "random" != b.defaultEffect ? b.defaultEffect : E[Math.floor(Math.random() * E.length)];
            d.effectIsRunning = !0;
            if ("fade" == f || "slideFromLeft" == f || "slideFromRight" == f || "slideFromTop" == f || "slideFromBottom" == f) if (I(h, b, d), g = c(".stripe:first", h), "fade" == f && (g.css({
                    top: "0px",
                    height: "100%",
                    width: h.width() + "px"
                }), g.animate({
                    opacity: "1.0"
                }, 2E3 * b.effectDuration, "", function () {
                    h.trigger("effectComplete")
                })), "slideFromLeft" == f && (g.css({
                    top: "0px",
                    height: "100%",
                    width: "0"
                }), g.animate({
                    opacity: "1.0",
                    width: h.width() + "px"
                }, 1E3 * b.effectDuration, "", function () {
                    h.trigger("effectComplete")
                })), "slideFromRight" == f && (g.css({
                    top: "0px",
                    height: "100%",
                    width: "0",
                    left: h.width() + 5 + "px"
                }), g.animate({
                    opacity: "1.0",
                    left: "0",
                    width: h.width() + "px"
                }, 1E3 * b.effectDuration, "", function () {
                    h.trigger("effectComplete")
                })), "slideFromTop" == f && (g.css({
                    top: "0px",
                    height: "0",
                    width: h.width() + "px"
                }), g.animate({
                    opacity: "1.0",
                    height: h.height() + "px"
                }, 1E3 * b.effectDuration, "", function () {
                    h.trigger("effectComplete")
                })), "slideFromBottom" == f) g.css({
                        top: "0px",
                        height: "0",
                        width: h.width() + "px",
                        top: h.height() + "px"
                    }), g.animate({
                        opacity: "1.0",
                        top: 0,
                        height: h.height() + "px"
                    }, 1E3 * b.effectDuration, "", function () {
                        h.trigger("effectComplete")
                    });
            0 <= f.indexOf("Stripes") && (I(h, b, d), g = 0 <= f.indexOf("Reverse") ? c(".stripe", h).myReverse() : c(".stripe", h), n = 100, i = 0, g.each(function () {
                var a = c(this);
                (f == "topBottomDroppingStripes" || f == "topBottomDroppingReverseStripes") && a.css({
                    top: "0px"
                });
                (f == "bottomTopDroppingStripes" || f == "bottomTopDroppingReverseStripes") && a.css({
                    bottom: "0px"
                });
                (f == "leftRightFadingStripes" || f == "leftRightFadingReverseStripes") && a.css({
                    top: "0px",
                    height: "100%",
                    width: "0"
                });
                f == "asynchronousDroppingStripes" && (i % 2 ? a.css({
                    top: "0px"
                }) : a.css({
                    bottom: "0px"
                }));
                if (f == "leftRightFadingStripes" || f == "leftRightFadingReverseStripes") {
                    var e = x;
                    if (f == "leftRightFadingStripes" && i == b.numberOfStripes - 1 || f == "leftRightFadingReverseStripes" && i == 0) e = y;
                    i == b.numberOfStripes - 1 ? setTimeout(function () {
                        a.animate({
                            width: e + "px",
                            opacity: "1.0"
                        }, b.effectDuration * 800, "", function () {
                            h.trigger("effectComplete")
                        })
                    }, n) : setTimeout(function () {
                        a.animate({
                            width: e + "px",
                            opacity: "1.0"
                        }, b.effectDuration * 800)
                    }, n)
                } else i == b.numberOfStripes - 1 ? setTimeout(function () {
                        a.animate({
                            height: "100%",
                            opacity: "1.0"
                        }, b.effectDuration * 1E3, "", function () {
                            h.trigger("effectComplete")
                        })
                    }, n) : setTimeout(function () {
                        a.animate({
                            height: "100%",
                            opacity: "1.0"
                        }, b.effectDuration * 1E3)
                    }, n);
                n = n + J;
                i++
            }));
            if (0 <= f.indexOf("Blocks")) {
                c(".stripe", h).remove();
                c(".block", h).remove();
                for (var g = Math.round(b.width / b.numberOfColumns), m = Math.round(b.height / b.numberOfRows), C = g, a = m, l = p = 0, t = !0, w = 0; w < b.numberOfRows; w++) for (var z = 0; z < b.numberOfColumns; z++) p = g * z, l = m * w, C = z == b.numberOfColumns - 1 ? b.width - g * (b.numberOfColumns - 1) : g, a = w == b.numberOfRows - 1 ? b.height - m * (b.numberOfRows - 1) : m, !b.responsive || !c.browser.msie || c.browser.msie && 9 <= c.browser.version ? -1 != r.indexOf("ipad") || -1 != r.indexOf("iphone") || -1 != r.indexOf("ipod") || -1 != r.indexOf("webos") ? t = !1 : h.append(c('<div class="block"></div>').css({
                            opacity: "0",
                            left: p + "px",
                            top: l + "px",
                            width: C + "px",
                            height: a + "px",
                            background: 'url("' + d.current_imgInside.attr("src") + '") -' + p + "px -" + l + "px"
                        })) : t = !1, t || (mleft = -1 * p, mtop = -1 * l, h.append(c('<div class="block"><img src="' + d.current_imgInside.attr("src") + '" width="' + b.width + '" height="' + b.height + '" style="margin-left:' + mleft + "px; margin-top:" + mtop + 'px;"></div>').css({
                            opacity: "0",
                            left: p + "px",
                            top: l + "px",
                            width: C + "px",
                            height: a + "px"
                        })));
                b.responsive && t && (!c.browser.msie || c.browser.msie && 9 <= c.browser.version) && c(".block", h).css({
                    "-webkit-background-size": b.width + "px " + b.height + "px",
                    "-moz-background-size": b.width + "px " + b.height + "px",
                    "-o-background-size": b.width + "px " + b.height + "px",
                    "-ms-background-size": b.width + "px " + b.height + "px",
                    "background-size": b.width + "px " + b.height + "px"
                });
                if (0 <= f.indexOf("Reverse")) var q = c(".block", h).myReverse();
                else if ("randomBlocks" == f) {
                    for (var d = c(".block", h), s, g = d.length; g; q = parseInt(Math.random() * g, 10), s = d[--g], d[g] = d[q], d[q] = s);
                    q = d
                } else q = c(".block", h);
                n = 100;
                if ("randomBlocks" == f) {
                    i = 0;
                    var e = b.numberOfRows * b.numberOfColumns;
                    q.each(function () {
                        var a = c(this),
                            f = a.width(),
                            d = a.height();
                        a.css({
                            width: "0",
                            height: "0"
                        });
                        i == e - 1 ? setTimeout(function () {
                            a.animate({
                                opacity: "1.0",
                                width: f,
                                height: d
                            }, b.effectDuration * 1E3 / 3, "", function () {
                                h.trigger("effectComplete")
                            })
                        }, n) : setTimeout(function () {
                            a.animate({
                                opacity: "1.0",
                                width: f,
                                height: d
                            }, b.effectDuration * 1E3 / 3)
                        }, n);
                        n = n + D;
                        i++
                    })
                } else {
                    var k = 0,
                        o = 0,
                        u = [];
                    u[k] = [];
                    q.each(function () {
                        u[k][o] = c(this);
                        o++;
                        if (o == b.numberOfColumns) {
                            k++;
                            o = 0;
                            u[k] = []
                        }
                    });
                    o = k = 0;
                    n = 100;
                    q = c(u[k][o]);
                    for (F(q, 0, 0, b, h); k < b.numberOfRows - 1 || o < b.numberOfColumns - 1;) {
                        k < b.numberOfRows - 1 && k++;
                        o < b.numberOfColumns - 1 && o++;
                        i = k;
                        o < k && b.numberOfRows > b.numberOfColumns && (i = k - o);
                        j = 0;
                        for (k < o && b.numberOfRows < b.numberOfColumns && (j = o - k); 0 <= i && j <= o;) q = c(u[i--][j++]), F(q, i, j, b, h)
                    }
                    n = b.numberOfRows < b.numberOfColumns ? n - (b.numberOfRows - 1) * D : n - (b.numberOfColumns - 1) * D;
                    limit_i = 0;
                    for (limit_j = o - k; limit_i < k && limit_j < o;) {
                        i = k + 1;
                        for (j = limit_j; i > limit_i && j < o;) i -= 1, j += 1, q = c(u[i][j]), F(q, i, j, b, h);
                        limit_i++;
                        limit_j++
                    }
                }
            }
        }
    }
    var E = "fade slideFromLeft slideFromRight slideFromTop slideFromBottom topBottomDroppingStripes topBottomDroppingReverseStripes bottomTopDroppingStripes bottomTopDroppingReverseStripes asynchronousDroppingStripes leftRightFadingStripes leftRightFadingReverseStripes topBottomDiagonalBlocks topBottomDiagonalReverseBlocks randomBlocks".split(" "),
        x, y, n = 100,
        J = 50,
        D = 25,
        B = !1,
        r = navigator.userAgent.toLowerCase();
    c.fn.allinone_bannerRotator = function (a) {
        a = c.extend({}, c.fn.allinone_bannerRotator.defaults, a);
        return this.each(function () {
            var b = c(this);
            responsiveWidth = b.parent().width();
            responsiveHeight = b.parent().height();
            a.responsiveRelativeToBrowser && (responsiveWidth = c(window).width(), responsiveHeight = c(window).height());
            a.origWidth = a.width;
            a.width100Proc && (a.width = responsiveWidth);
            a.origHeight = a.height;
            a.height100Proc && (a.height = responsiveHeight);
            if (a.responsive && (a.origWidth != responsiveWidth || a.width100Proc)) a.width = a.origWidth > responsiveWidth || a.width100Proc ? responsiveWidth : a.origWidth, a.height100Proc || (a.height = a.width / (a.origWidth / a.origHeight));
            a.width = parseInt(a.width, 10);
            a.height = parseInt(a.height, 10);
            a.enableTouchScreen && a.responsive && (a.width -= 1);
            b.css("display", "block");
            var d = c("<div></div>").addClass("allinone_bannerRotator").addClass(a.skin),
                g = c('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <canvas class="mycanvas"></canvas>');
            b.wrap(d);
            b.after(g);
            var f = b.parent(".allinone_bannerRotator"),
                h = c(".bannerControls", f),
                d = c('<div class="bottomNavLeft"></div>'),
                g = c('<div class="bottomNav"></div>'),
                m = c('<div class="bottomNavRight"></div>');
            b.after(d);
            b.after(g);
            b.after(m);
            a.showAllControllers || h.css("display", "none");
            var n = c(".leftNav", f),
                p = c(".rightNav", f);
            n.css("display", "none");
            p.css("display", "none");
            a.showNavArrows && a.showOnInitNavArrows && (n.css("display", "block"), p.css("display", "block"));
            var l = c(".bottomNav", f),
                t = c(".bottomNavLeft", f),
                w = c(".bottomNavRight", f),
                z;
            l.css("display", "block");
            t.css("display", "block");
            w.css("display", "block");
            l.css("top", a.height + "px");
            l.css({
                bottom: a.thumbsWrapperMarginBottom + "px",
                top: "auto"
            });
            t.css({
                bottom: a.thumbsWrapperMarginBottom + "px",
                top: "auto"
            });
            w.css({
                bottom: a.thumbsWrapperMarginBottom + "px",
                top: "auto"
            });
            a.showBottomNav || (l.css("display", "none"), t.css("display", "none"), w.css("display", "none"));
            a.showOnInitBottomNav || (l.css("left", "-5000px"), t.css("left", "-5000px"), w.css("left", "-5000px"));
            var q = a.defaultEffect,
                s = 0,
                e = {
                    current_img_no: 0,
                    currentImg: 0,
                    current_imgInside: "",
                    bottomNavClicked: !1,
                    effectIsRunning: !1,
                    mouseOverBanner: !1,
                    rightVal: 0,
                    isAttractiveResp: !1,
                    timeoutID: "",
                    intervalID: "",
                    arcInitialTime: (new Date).getTime(),
                    timeElapsed: 0,
                    windowWidth: 0,
                    canvas: "",
                    ctx: "",
                    bannerRatio: a.origWidth / a.origHeight
                };
            e.canvas = c(".mycanvas", f)[0];
            e.canvas.width = 2 * a.circleRadius + 4 * a.circleLineWidth;
            e.canvas.height = 2 * a.circleRadius + 4 * a.circleLineWidth;
            a.showCircleTimer && (c.browser.msie && 9 > parseInt(c.browser.version, 10) && (e.canvas = G_vmlCanvasManager.initElement(e.canvas), !a.showCircleTimerIE8IE7 && a.showCircleTimer && (a.showCircleTimer = !1)), e.ctx = e.canvas.getContext("2d"));
            f.width(a.width);
            f.height(a.height);
            h.css("margin-top", parseInt((a.height - n.height()) / 2, 10) + "px");
            var k = b.find("ul:first").children(),
                o, u = 0,
                x = 0;
            k.each(function () {
                e.currentImg = c(this);
                if (!e.currentImg.is("li")) e.currentImg = e.currentImg.find("li:first");
                if (e.currentImg.is("li")) {
                    e.currentImg.css("display", "none");
                    s++;
                    o = c('<div class="bottomNavButtonOFF" rel="' + (s - 1) + '"></div>');
                    l.append(o);
                    u = u + (parseInt(o.css("padding-left").substring(0, o.css("padding-left").length - 2), 10) + o.width());
                    x = parseInt((l.height() - parseInt(o.css("height").substring(0, o.css("height").length - 2))) / 2, 10);
                    o.css("margin-top", x + "px")
                }
            });
            l.width(u);
            a.showOnInitBottomNav && (l.css("left", parseInt((f.width() - u) / 2, 10) + "px"), t.css("left", parseInt(l.css("left").substring(0, l.css("left").length - 2), 10) - t.width() + "px"), w.css("left", parseInt(l.css("left").substring(0, l.css("left").length - 2), 10) + l.width() + parseInt(o.css("padding-left").substring(0, o.css("padding-left").length - 2), 10) + "px"));
            e.current_img_no = a.firstImg;
            a.firstImg > s && (e.current_img_no = s);
            0 > a.firstImg && (e.current_img_no = 0);
            a.randomizeImages && (e.current_img_no = Math.floor(Math.random() * s));
            e.currentImg = c(k[e.current_img_no]);
            e.current_imgInside = e.currentImg.find("img:first"); - 1 != r.indexOf("ipad") || -1 != r.indexOf("iphone") || -1 != r.indexOf("ipod") || -1 != r.indexOf("webos") || c.browser.msie && 7 >= c.browser.version ? f.append('<img id="curBgImgIos" src="' + e.current_imgInside.attr("src") + '" width="' + a.width + '" height="' + a.height + '">') : (f.css("background", 'url("' + e.current_imgInside.attr("src") + '") no-repeat'), a.responsive && (!c.browser.msie || c.browser.msie && 9 <= c.browser.version ? f.css({
                "-webkit-background-size": a.width + "px " + a.height + "px",
                "-moz-background-size": a.width + "px " + a.height + "px",
                "-o-background-size": a.width + "px " + a.height + "px",
                "-ms-background-size": a.width + "px " + a.height + "px",
                "background-size": a.width + "px " + a.height + "px"
            }) : 8 == c.browser.version && f.css({
                filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e.current_imgInside.attr("src") + "',sizingMethod='scale')"
            })));
            a.enableTouchScreen && (d = Math.floor(1E5 * Math.random()), f.wrap('<div id="bannerRotatorParent_' + d + '" style="position:relative;" />'), c("#bannerRotatorParent_" + d).width(a.width + 1), c("#bannerRotatorParent_" + d).height(a.height), f.css({
                cursor: "url(" + a.absUrl + "skins/hand.cur),url(" + a.absUrl + "skins/hand.cur),move",
                left: "0px",
                position: "absolute"
            }), a.rightVal = parseInt(p.css("right").substring(0, p.css("right").length - 2), 10), "attractive" == a.skin && a.width100Proc && p.css("right", a.rightVal - 1 + "px"), f.mousedown(function () {
                if (a.rightVal < 0 && !B) {
                    p.css({
                        visibility: "hidden",
                        right: "0"
                    });
                    (a.skin == "attractive" && a.width100Proc || a.skin == "attractive" && a.isAttractiveResp) && p.css("right", a.rightVal - 1 + "px");
                    n.css("visibility", "hidden")
                }
            }), f.mouseup(function () {
                B = false;
                if (a.rightVal < 0) {
                    p.css({
                        right: a.rightVal + "px",
                        visibility: "visible"
                    });
                    (a.skin == "attractive" && a.width100Proc || a.skin == "attractive" && a.isAttractiveResp) && p.css("right", a.rightVal - 1 + "px");
                    n.css("visibility", "visible")
                }
            }), f.draggable({
                axis: "x",
                containment: "parent",
                start: function () {
                    origLeft = c(this).css("left")
                },
                stop: function () {
                    if (!e.effectIsRunning) {
                        finalLeft = c(this).css("left");
                        direction = 1;
                        origLeft < finalLeft && (direction = -1);
                        A(direction, a, e, s, q, f, v, k)
                    }
                    if (a.rightVal < 0) {
                        p.css({
                            right: a.rightVal + "px",
                            visibility: "visible"
                        });
                        (a.skin == "attractive" && a.width100Proc || a.skin == "attractive" && a.isAttractiveResp) && p.css("right", a.rightVal - 1 + "px");
                        n.css("visibility", "visible")
                    }
                    c(this).css("left", "0px")
                }
            }));
            G(e, a, b, h);
            f.bind("effectComplete", function () {
                e.effectIsRunning = false;
                if (r.indexOf("ipad") != -1 || r.indexOf("iphone") != -1 || r.indexOf("ipod") != -1 || r.indexOf("webos") != -1 || c.browser.msie && c.browser.version <= 7) {
                    c("#curBgImgIos", f).attr("src", e.current_imgInside.attr("src"));
                    c("#curBgImgIos", f).width(a.width);
                    c("#curBgImgIos", f).height(a.height)
                } else {
                    f.css("background", 'url("' + e.current_imgInside.attr("src") + '") no-repeat');
                    a.responsive && (!c.browser.msie || c.browser.msie && c.browser.version >= 9 ? f.css({
                        "-webkit-background-size": a.width + "px " + a.height + "px",
                        "-moz-background-size": a.width + "px " + a.height + "px",
                        "-o-background-size": a.width + "px " + a.height + "px",
                        "-ms-background-size": a.width + "px " + a.height + "px",
                        "background-size": a.width + "px " + a.height + "px"
                    }) : c.browser.version == 8 && f.css({
                        filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e.current_imgInside.attr("src") + "',sizingMethod='scale')"
                    }))
                }
                e.arcInitialTime = (new Date).getTime();
                e.timeElapsed = 0;
                if (a.showCircleTimer) {
                    clearInterval(e.intervalID);
                    e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
                    e.ctx.beginPath();
                    e.ctx.globalAlpha = a.behindCircleAlpha / 100;
                    e.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 2 * Math.PI, false);
                    e.ctx.lineWidth = a.circleLineWidth + 2;
                    e.ctx.strokeStyle = a.behindCircleColor;
                    e.ctx.stroke();
                    e.ctx.beginPath();
                    e.ctx.globalAlpha = a.circleAlpha / 100;
                    e.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, false);
                    e.ctx.lineWidth = a.circleLineWidth;
                    e.ctx.strokeStyle = a.circleColor;
                    e.ctx.stroke();
                    e.intervalID = setInterval(function () {
                        H(e, a)
                    }, 125)
                }
                G(e, a, b, h);
                if (a.autoPlay > 0 && s > 1 && !e.mouseOverBanner) {
                    clearTimeout(e.timeoutID);
                    e.timeoutID = setTimeout(function () {
                        A(1, a, e, s, q, f, v, k)
                    }, a.autoPlay * 1E3)
                }
            });
            f.mouseenter(function () {
                e.mouseOverBanner = true;
                clearTimeout(e.timeoutID);
                nowx = (new Date).getTime();
                e.timeElapsed = e.timeElapsed + (nowx - e.arcInitialTime);
                if (a.autoHideNavArrows && a.showNavArrows) {
                    n.css("display", "block");
                    p.css("display", "block")
                }
                if (a.autoHideBottomNav && a.showBottomNav) {
                    l.css({
                        display: "block",
                        left: parseInt((f.width() - u) / 2, 10) + "px"
                    });
                    t.css({
                        display: "block",
                        left: parseInt(l.css("left").substring(0, l.css("left").length - 2), 10) - t.width() + "px"
                    });
                    w.css({
                        display: "block",
                        left: parseInt(l.css("left").substring(0, l.css("left").length - 2), 10) + l.width() + parseInt(o.css("padding-left").substring(0, o.css("padding-left").length - 2), 10) + "px"
                    })
                }
            });
            f.mouseleave(function () {
                e.mouseOverBanner = false;
                nowx = (new Date).getTime();
                if (a.autoHideNavArrows && a.showNavArrows) {
                    n.css("display", "none");
                    p.css("display", "none")
                }
                if (a.autoHideBottomNav && a.showBottomNav) {
                    l.css("display", "none");
                    t.css("display", "none");
                    w.css("display", "none")
                }
                if (a.autoPlay > 0 && s > 1) {
                    clearTimeout(e.timeoutID);
                    e.arcInitialTime = (new Date).getTime();
                    var b = parseInt(a.autoPlay * 1E3 - (e.timeElapsed + nowx - e.arcInitialTime), 10);
                    e.timeoutID = setTimeout(function () {
                        A(1, a, e, s, q, f, v, k)
                    }, b)
                }
            });
            f.click(function () {
                if (c(k[e.current_img_no]).attr("data-link") != void 0 && !e.effectIsRunning && c(k[e.current_img_no]).attr("data-link") != "") {
                    var b = a.target;
                    c(k[e.current_img_no]).attr("data-target") != void 0 && c(k[e.current_img_no]).attr("data-target") != "" && (b = c(k[e.current_img_no]).attr("data-target"));
                    b == "_blank" ? window.open(c(k[e.current_img_no]).attr("data-link")) : window.location = c(k[e.current_img_no]).attr("data-link")
                }
            });
            n.mousedown(function () {
                B = true;
                if (!e.effectIsRunning) {
                    clearTimeout(e.timeoutID);
                    A(-1, a, e, s, q, f, v, k)
                }
            });
            n.mouseup(function () {
                B = false
            });
            p.mousedown(function () {
                B = true;
                if (!e.effectIsRunning) {
                    clearTimeout(e.timeoutID);
                    A(1, a, e, s, q, f, v, k)
                }
            });
            p.mouseup(function () {
                B = false
            });
            var y = !1;
            c(window).resize(function () {
                doResizeNow = true;
                if (navigator.userAgent.indexOf("Android") != -1) {
                    if (a.windowOrientationScreenSize0 == 0 && window.orientation == 0) a.windowOrientationScreenSize0 = c(window).width();
                    if (a.windowOrientationScreenSize90 == 0 && window.orientation == 90) a.windowOrientationScreenSize90 = c(window).height();
                    if (a.windowOrientationScreenSize_90 == 0 && window.orientation == -90) a.windowOrientationScreenSize_90 = c(window).height();
                    a.windowOrientationScreenSize0 && (window.orientation == 0 && c(window).width() > a.windowOrientationScreenSize0) && (doResizeNow = false);
                    a.windowOrientationScreenSize90 && (window.orientation == 90 && c(window).height() > a.windowOrientationScreenSize90) && (doResizeNow = false);
                    a.windowOrientationScreenSize_90 && (window.orientation == -90 && c(window).height() > a.windowOrientationScreenSize_90) && (doResizeNow = false);
                    if (e.windowWidth == 0) {
                        doResizeNow = false;
                        e.windowWidth = c(window).width()
                    }
                }
                c.browser.msie && (parseInt(c.browser.version, 10) == 9 && e.windowWidth == 0) && (doResizeNow = false);
                if (e.windowWidth == c(window).width()) {
                    doResizeNow = false;
                    if (a.windowCurOrientation != window.orientation && navigator.userAgent.indexOf("Android") != -1) {
                        a.windowCurOrientation = window.orientation;
                        doResizeNow = true
                    }
                } else e.windowWidth = c(window).width(); if (a.responsive && doResizeNow) {
                    y !== false && clearTimeout(y);
                    y = setTimeout(function () {
                        var d = a,
                            g = s,
                            m = v,
                            u = o,
                            x = c("body").css("overflow");
                        c("body").css("overflow", "hidden");
                        if (d.enableTouchScreen) {
                            responsiveWidth = b.parent().parent().parent().width();
                            responsiveHeight = b.parent().parent().parent().height()
                        } else {
                            responsiveWidth = b.parent().parent().width();
                            responsiveHeight = b.parent().parent().height()
                        } if (d.responsiveRelativeToBrowser) {
                            responsiveWidth = c(window).width();
                            responsiveHeight = c(window).height()
                        }
                        if (d.width100Proc) d.width = responsiveWidth;
                        if (d.height100Proc) d.height = responsiveHeight;
                        if (d.skin == "attractive") {
                            d.isAttractiveResp = false;
                            p.css("right", d.rightVal + "px")
                        }
                        if (d.origWidth != responsiveWidth || d.width100Proc) {
                            if (d.origWidth > responsiveWidth || d.width100Proc) {
                                d.width = responsiveWidth;
                                d.isAttractiveResp = true;
                                d.skin == "attractive" && p.css("right", d.rightVal - 1 + "px")
                            } else if (!d.width100Proc) d.width = d.origWidth;
                            if (!d.height100Proc) d.height = d.width / e.bannerRatio;
                            d.width = parseInt(d.width, 10);
                            d.height = parseInt(d.height, 10);
                            if (d.enableTouchScreen && d.responsive) d.width = d.width - 1;
                            f.width(d.width);
                            f.height(d.height);
                            if (r.indexOf("ipad") != -1 || r.indexOf("iphone") != -1 || r.indexOf("ipod") != -1 || r.indexOf("webos") != -1 || c.browser.msie && c.browser.version <= 7) {
                                c("#curBgImgIos", f).attr("src", e.current_imgInside.attr("src"));
                                c("#curBgImgIos", f).width(d.width);
                                c("#curBgImgIos", f).height(d.height)
                            } else !c.browser.msie || c.browser.msie && c.browser.version >= 9 ? f.css({
                                "-webkit-background-size": d.width + "px " + d.height + "px",
                                "-moz-background-size": d.width + "px " + d.height + "px",
                                "-o-background-size": d.width + "px " + d.height + "px",
                                "-ms-background-size": d.width + "px " + d.height + "px",
                                "background-size": d.width + "px " + d.height + "px"
                            }) : c.browser.version == 8 && f.css({
                                filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e.current_imgInside.attr("src") + "',sizingMethod='scale')"
                            });
                            if (d.enableTouchScreen) {
                                f.parent().width(d.width + 1);
                                f.parent().height(d.height)
                            }
                            h.css("margin-top", parseInt((d.height - n.height()) / 2, 10) + "px");
                            for (i = 0; i < g; i++) c(c(k[i]).attr("data-text-id")).css("width", b.width() + "px");
                            l.css("left", parseInt((f.width() - l.width()) / 2, 10) + "px");
                            t.css("left", parseInt(l.css("left").substring(0, l.css("left").length - 2), 10) - t.width() + "px");
                            w.css("left", parseInt(l.css("left").substring(0, l.css("left").length - 2), 10) + l.width() + parseInt(u.css("padding-left").substring(0, u.css("padding-left").length - 2), 10) + "px");
                            clearTimeout(e.timeoutID);
                            A(1, d, e, g, q, f, m, k)
                        }
                        c("body").css("overflow", x)
                    }, 300)
                }
            });
            var v = c(".bottomNavButtonOFF", f);
            v.mousedown(function () {
                B = true;
                if (!e.effectIsRunning) {
                    var b = c(this).attr("rel");
                    c(v[e.current_img_no]).removeClass("bottomNavButtonON");
                    e.bottomNavClicked = true;
                    e.current_img_no = b - 1;
                    A(1, a, e, s, q, f, v, k)
                }
            });
            v.mouseup(function () {
                B = false
            });
            v.mouseenter(function () {
                var b = c(this),
                    d = b.attr("rel");
                if (a.showPreviewThumbs) {
                    z = c('<div class="bottomOverThumb"></div>');
                    b.append(z);
                    d = c(k[d]).attr("data-bottom-thumb");
                    z.html('<img src="' + d + '">')
                }
                b.addClass("bottomNavButtonON")
            });
            v.mouseleave(function () {
                var b = c(this),
                    d = b.attr("rel");
                a.showPreviewThumbs && z.remove();
                e.current_img_no != d && b.removeClass("bottomNavButtonON")
            });
            c(v[e.current_img_no]).addClass("bottomNavButtonON");
            0 < a.autoPlay && 1 < s && (a.showCircleTimer && (e.intervalID = setInterval(function () {
                H(e, a)
            }, 125)), e.timeoutID = setTimeout(function () {
                A(1, a, e, s, q, f, v, k)
            }, 1E3 * a.autoPlay))
        })
    };
    c.fn.myReverse = [].reverse;
    c.fn.allinone_bannerRotator.defaults = {
        skin: "classic",
        width: 960,
        height: 384,
        width100Proc: !1,
        height100Proc: !1,
        randomizeImages: !1,
        firstImg: 0,
        numberOfStripes: 20,
        numberOfRows: 5,
        numberOfColumns: 10,
        defaultEffect: "topBottomDroppingReverseStripes",
        effectDuration: 0.5,
        autoPlay: 4,
        loop: !0,
        target: "_blank",
        showAllControllers: !0,
        showNavArrows: !0,
        showOnInitNavArrows: !0,
        autoHideNavArrows: !0,
        showBottomNav: !0,
        showOnInitBottomNav: !0,
        autoHideBottomNav: !0,
        showPreviewThumbs: !0,
        enableTouchScreen: !0,
        absUrl: "",
        showCircleTimer: !0,
        showCircleTimerIE8IE7: !1,
        circleRadius: 10,
        circleLineWidth: 4,
        circleColor: "#FF0000",
        circleAlpha: 100,
        behindCircleColor: "#000000",
        behindCircleAlpha: 50,
        responsive: !1,
        responsiveRelativeToBrowser: !0,
        origWidth: 0,
        origHeight: 0,
        thumbsWrapperMarginBottom: 0,
        windowOrientationScreenSize0: 0,
        windowOrientationScreenSize90: 0,
        windowOrientationScreenSize_90: 0,
        windowCurOrientation: 0
    }
})(jQuery);