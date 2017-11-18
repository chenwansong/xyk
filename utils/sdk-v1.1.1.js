!function t(e, n, r) {
    function o(u, a) {
        if (!n[u]) {
            if (!e[u]) {
                var c = "function" == typeof require && require;
                if (!a && c) return c(u, !0);
                if (i) return i(u, !0);
                var s = new Error("Cannot find module '" + u + "'");
                throw s.code = "MODULE_NOT_FOUND", s
            }
            var f = n[u] = {exports: {}};
            e[u][0].call(f.exports, function (t) {
                var n = e[u][1][t];
                return o(n || t)
            }, f, f.exports, t, e, n, r)
        }
        return n[u].exports
    }

    for (var i = "function" == typeof require && require, u = 0; u < r.length; u++) o(r[u]);
    return o
}({
    1: [function (t, e, n) {
        "use strict";
        var r, o = Object.prototype, i = o.hasOwnProperty, u = o.toString;
        "function" == typeof Symbol && (r = Symbol.prototype.valueOf);
        var a = function (t) {
                return t !== t
            }, c = {boolean: 1, number: 1, string: 1, undefined: 1},
            s = /^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)$/,
            f = /^[A-Fa-f0-9]+$/, l = {};
        l.a = l.type = function (t, e) {
            return typeof t === e
        }, l.defined = function (t) {
            return void 0 !== t
        }, l.empty = function (t) {
            var e, n = u.call(t);
            if ("[object Array]" === n || "[object Arguments]" === n || "[object String]" === n) return 0 === t.length;
            if ("[object Object]" === n) {
                for (e in t) if (i.call(t, e)) return !1;
                return !0
            }
            return !t
        }, l.equal = function (t, e) {
            if (t === e) return !0;
            var n, r = u.call(t);
            if (r !== u.call(e)) return !1;
            if ("[object Object]" === r) {
                for (n in t) if (!(l.equal(t[n], e[n]) && n in e)) return !1;
                for (n in e) if (!(l.equal(t[n], e[n]) && n in t)) return !1;
                return !0
            }
            if ("[object Array]" === r) {
                if ((n = t.length) !== e.length) return !1;
                for (; n--;) if (!l.equal(t[n], e[n])) return !1;
                return !0
            }
            return "[object Function]" === r ? t.prototype === e.prototype : "[object Date]" === r && t.getTime() === e.getTime()
        }, l.hosted = function (t, e) {
            var n = typeof e[t];
            return "object" === n ? !!e[t] : !c[n]
        }, l.instance = l.instanceof = function (t, e) {
            return t instanceof e
        }, l.nil = l.null = function (t) {
            return null === t
        }, l.undef = l.undefined = function (t) {
            return void 0 === t
        }, l.args = l.arguments = function (t) {
            var e = "[object Arguments]" === u.call(t),
                n = !l.array(t) && l.arraylike(t) && l.object(t) && l.fn(t.callee);
            return e || n
        }, l.array = Array.isArray || function (t) {
            return "[object Array]" === u.call(t)
        }, l.args.empty = function (t) {
            return l.args(t) && 0 === t.length
        }, l.array.empty = function (t) {
            return l.array(t) && 0 === t.length
        }, l.arraylike = function (t) {
            return !!t && !l.bool(t) && i.call(t, "length") && isFinite(t.length) && l.number(t.length) && t.length >= 0
        }, l.bool = l.boolean = function (t) {
            return "[object Boolean]" === u.call(t)
        }, l.false = function (t) {
            return l.bool(t) && !1 === Boolean(Number(t))
        }, l.true = function (t) {
            return l.bool(t) && !0 === Boolean(Number(t))
        }, l.date = function (t) {
            return "[object Date]" === u.call(t)
        }, l.date.valid = function (t) {
            return l.date(t) && !isNaN(Number(t))
        }, l.element = function (t) {
            return void 0 !== t && "undefined" != typeof HTMLElement && t instanceof HTMLElement && 1 === t.nodeType
        }, l.error = function (t) {
            return "[object Error]" === u.call(t)
        }, l.fn = l.function = function (t) {
            if ("undefined" != typeof window && t === window.alert) return !0;
            var e = u.call(t);
            return "[object Function]" === e || "[object GeneratorFunction]" === e || "[object AsyncFunction]" === e
        }, l.number = function (t) {
            return "[object Number]" === u.call(t)
        }, l.infinite = function (t) {
            return t === 1 / 0 || t === -1 / 0
        }, l.decimal = function (t) {
            return l.number(t) && !a(t) && !l.infinite(t) && t % 1 != 0
        }, l.divisibleBy = function (t, e) {
            var n = l.infinite(t), r = l.infinite(e), o = l.number(t) && !a(t) && l.number(e) && !a(e) && 0 !== e;
            return n || r || o && t % e == 0
        }, l.integer = l.int = function (t) {
            return l.number(t) && !a(t) && t % 1 == 0
        }, l.maximum = function (t, e) {
            if (a(t)) throw new TypeError("NaN is not a valid value");
            if (!l.arraylike(e)) throw new TypeError("second argument must be array-like");
            for (var n = e.length; --n >= 0;) if (t < e[n]) return !1;
            return !0
        }, l.minimum = function (t, e) {
            if (a(t)) throw new TypeError("NaN is not a valid value");
            if (!l.arraylike(e)) throw new TypeError("second argument must be array-like");
            for (var n = e.length; --n >= 0;) if (t > e[n]) return !1;
            return !0
        }, l.nan = function (t) {
            return !l.number(t) || t !== t
        }, l.even = function (t) {
            return l.infinite(t) || l.number(t) && t === t && t % 2 == 0
        }, l.odd = function (t) {
            return l.infinite(t) || l.number(t) && t === t && t % 2 != 0
        }, l.ge = function (t, e) {
            if (a(t) || a(e)) throw new TypeError("NaN is not a valid value");
            return !l.infinite(t) && !l.infinite(e) && t >= e
        }, l.gt = function (t, e) {
            if (a(t) || a(e)) throw new TypeError("NaN is not a valid value");
            return !l.infinite(t) && !l.infinite(e) && t > e
        }, l.le = function (t, e) {
            if (a(t) || a(e)) throw new TypeError("NaN is not a valid value");
            return !l.infinite(t) && !l.infinite(e) && t <= e
        }, l.lt = function (t, e) {
            if (a(t) || a(e)) throw new TypeError("NaN is not a valid value");
            return !l.infinite(t) && !l.infinite(e) && t < e
        }, l.within = function (t, e, n) {
            if (a(t) || a(e) || a(n)) throw new TypeError("NaN is not a valid value");
            if (!l.number(t) || !l.number(e) || !l.number(n)) throw new TypeError("all arguments must be numbers");
            return l.infinite(t) || l.infinite(e) || l.infinite(n) || t >= e && t <= n
        }, l.object = function (t) {
            return "[object Object]" === u.call(t)
        }, l.primitive = function (t) {
            return !t || !("object" == typeof t || l.object(t) || l.fn(t) || l.array(t))
        }, l.hash = function (t) {
            return l.object(t) && t.constructor === Object && !t.nodeType && !t.setInterval
        }, l.regexp = function (t) {
            return "[object RegExp]" === u.call(t)
        }, l.string = function (t) {
            return "[object String]" === u.call(t)
        }, l.base64 = function (t) {
            return l.string(t) && (!t.length || s.test(t))
        }, l.hex = function (t) {
            return l.string(t) && (!t.length || f.test(t))
        }, l.symbol = function (t) {
            return "function" == typeof Symbol && "[object Symbol]" === u.call(t) && "symbol" == typeof r.call(t)
        }, e.exports = l
    }, {}],
    2: [function (t, e, n) {
        function r(t, e) {
            var n = -1, r = t.length;
            for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
            return e
        }

        e.exports = r
    }, {}],
    3: [function (t, e, n) {
        function r(t, e) {
            for (var n = -1, r = t.length; ++n < r && !1 !== e(t[n], n, t);) ;
            return t
        }

        e.exports = r
    }, {}],
    4: [function (t, e, n) {
        function r(t, e) {
            return null == e ? t : o(e, i(e), t)
        }

        var o = t("lodash._basecopy"), i = t("lodash.keys");
        e.exports = r
    }, {"lodash._basecopy": 6, "lodash.keys": 13}],
    5: [function (t, e, n) {
        (function (n) {
            function r(t, e, n, i, d, y, v) {
                var _;
                if (n && (_ = d ? n(t, i, d) : n(t)), void 0 !== _) return _;
                if (!s(t)) return t;
                var E = p(t);
                if (E) {
                    if (_ = u(t), !e) return f(t, _)
                } else {
                    var m = L.call(t), O = m == g;
                    if (m != w && m != b && (!O || d)) return k[m] ? c(t, m, e) : d ? t : {};
                    if (_ = a(O ? {} : t), !e) return h(_, t)
                }
                y || (y = []), v || (v = []);
                for (var R = y.length; R--;) if (y[R] == t) return v[R];
                return y.push(t), v.push(_), (E ? l : o)(t, function (o, i) {
                    _[i] = r(o, e, n, i, t, y, v)
                }), _
            }

            function o(t, e) {
                return d(t, e, y)
            }

            function i(t) {
                var e = new M(t.byteLength);
                return new q(e).set(new q(t)), e
            }

            function u(t) {
                var e = t.length, n = new t.constructor(e);
                return e && "string" == typeof t[0] && U.call(t, "index") && (n.index = t.index, n.input = t.input), n
            }

            function a(t) {
                var e = t.constructor;
                return "function" == typeof e && e instanceof e || (e = Object), new e
            }

            function c(t, e, n) {
                var r = t.constructor;
                switch (e) {
                    case R:
                        return i(t);
                    case v:
                    case _:
                        return new r(+t);
                    case T:
                    case S:
                    case A:
                    case j:
                    case I:
                    case D:
                    case P:
                    case N:
                    case x:
                        var o = t.buffer;
                        return new r(n ? i(o) : o, t.byteOffset, t.length);
                    case E:
                    case O:
                        return new r(t);
                    case m:
                        var u = new r(t.source, G.exec(t));
                        u.lastIndex = t.lastIndex
                }
                return u
            }

            function s(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            var f = t("lodash._arraycopy"), l = t("lodash._arrayeach"), h = t("lodash._baseassign"),
                d = t("lodash._basefor"), p = t("lodash.isarray"), y = t("lodash.keys"), b = "[object Arguments]",
                v = "[object Boolean]", _ = "[object Date]", g = "[object Function]", E = "[object Number]",
                w = "[object Object]", m = "[object RegExp]", O = "[object String]", R = "[object ArrayBuffer]",
                T = "[object Float32Array]", S = "[object Float64Array]", A = "[object Int8Array]",
                j = "[object Int16Array]", I = "[object Int32Array]", D = "[object Uint8Array]",
                P = "[object Uint8ClampedArray]", N = "[object Uint16Array]", x = "[object Uint32Array]", G = /\w*$/,
                k = {};
            k[b] = k["[object Array]"] = k[R] = k[v] = k[_] = k[T] = k[S] = k[A] = k[j] = k[I] = k[E] = k[w] = k[m] = k[O] = k[D] = k[P] = k[N] = k[x] = !0, k["[object Error]"] = k[g] = k["[object Map]"] = k["[object Set]"] = k["[object WeakMap]"] = !1;
            var C = Object.prototype, U = C.hasOwnProperty, L = C.toString, M = n.ArrayBuffer, q = n.Uint8Array;
            e.exports = r
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "lodash._arraycopy": 2,
        "lodash._arrayeach": 3,
        "lodash._baseassign": 4,
        "lodash._basefor": 7,
        "lodash.isarray": 12,
        "lodash.keys": 13
    }],
    6: [function (t, e, n) {
        function r(t, e, n) {
            n || (n = {});
            for (var r = -1, o = e.length; ++r < o;) {
                var i = e[r];
                n[i] = t[i]
            }
            return n
        }

        e.exports = r
    }, {}],
    7: [function (t, e, n) {
        var r = function (t) {
            return function (e, n, r) {
                for (var o = -1, i = Object(e), u = r(e), a = u.length; a--;) {
                    var c = u[t ? a : ++o];
                    if (!1 === n(i[c], c, i)) break
                }
                return e
            }
        }();
        e.exports = r
    }, {}],
    8: [function (t, e, n) {
        function r(t, e, n) {
            if ("function" != typeof t) return o;
            if (void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    };
                case 4:
                    return function (n, r, o, i) {
                        return t.call(e, n, r, o, i)
                    };
                case 5:
                    return function (n, r, o, i, u) {
                        return t.call(e, n, r, o, i, u)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }

        function o(t) {
            return t
        }

        e.exports = r
    }, {}],
    9: [function (t, e, n) {
        function r(t) {
            return !!t && "object" == typeof t
        }

        function o(t, e) {
            var n = null == t ? void 0 : t[e];
            return a(n) ? n : void 0
        }

        function i(t) {
            return u(t) && d.call(t) == c
        }

        function u(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function a(t) {
            return null != t && (i(t) ? p.test(l.call(t)) : r(t) && s.test(t))
        }

        var c = "[object Function]", s = /^\[object .+?Constructor\]$/, f = Object.prototype,
            l = Function.prototype.toString, h = f.hasOwnProperty, d = f.toString,
            p = RegExp("^" + l.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = o
    }, {}],
    10: [function (t, e, n) {
        function r(t, e, n) {
            return "function" == typeof e ? o(t, !0, i(e, n, 3)) : o(t, !0)
        }

        var o = t("lodash._baseclone"), i = t("lodash._bindcallback");
        e.exports = r
    }, {"lodash._baseclone": 5, "lodash._bindcallback": 8}],
    11: [function (t, e, n) {
        function r(t) {
            return i(t) && y.call(t, "callee") && (!v.call(t, "callee") || b.call(t) == l)
        }

        function o(t) {
            return null != t && a(t.length) && !u(t)
        }

        function i(t) {
            return s(t) && o(t)
        }

        function u(t) {
            var e = c(t) ? b.call(t) : "";
            return e == h || e == d
        }

        function a(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= f
        }

        function c(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function s(t) {
            return !!t && "object" == typeof t
        }

        var f = 9007199254740991, l = "[object Arguments]", h = "[object Function]", d = "[object GeneratorFunction]",
            p = Object.prototype, y = p.hasOwnProperty, b = p.toString, v = p.propertyIsEnumerable;
        e.exports = r
    }, {}],
    12: [function (t, e, n) {
        function r(t) {
            return !!t && "object" == typeof t
        }

        function o(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= b
        }

        function i(t) {
            return u(t) && d.call(t) == c
        }

        function u(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function a(t) {
            return null != t && (i(t) ? p.test(l.call(t)) : r(t) && s.test(t))
        }

        var c = "[object Function]", s = /^\[object .+?Constructor\]$/, f = Object.prototype,
            l = Function.prototype.toString, h = f.hasOwnProperty, d = f.toString,
            p = RegExp("^" + l.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            y = function (t, e) {
                var n = null == t ? void 0 : t[e];
                return a(n) ? n : void 0
            }(Array, "isArray"), b = 9007199254740991, v = y || function (t) {
                return r(t) && o(t.length) && "[object Array]" == d.call(t)
            };
        e.exports = v
    }, {}],
    13: [function (t, e, n) {
        function r(t) {
            return null != t && i(v(t))
        }

        function o(t, e) {
            return t = "number" == typeof t || h.test(t) ? +t : -1, e = null == e ? b : e, t > -1 && t % 1 == 0 && t < e
        }

        function i(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= b
        }

        function u(t) {
            for (var e = c(t), n = e.length, r = n && t.length, u = !!r && i(r) && (l(t) || f(t)), a = -1, s = []; ++a < n;) {
                var h = e[a];
                (u && o(h, r) || p.call(t, h)) && s.push(h)
            }
            return s
        }

        function a(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function c(t) {
            if (null == t) return [];
            a(t) || (t = Object(t));
            var e = t.length;
            e = e && i(e) && (l(t) || f(t)) && e || 0;
            for (var n = t.constructor, r = -1, u = "function" == typeof n && n.prototype === t, c = Array(e), s = e > 0; ++r < e;) c[r] = r + "";
            for (var h in t) s && o(h, e) || "constructor" == h && (u || !p.call(t, h)) || c.push(h);
            return c
        }

        var s = t("lodash._getnative"), f = t("lodash.isarguments"), l = t("lodash.isarray"), h = /^\d+$/,
            d = Object.prototype, p = d.hasOwnProperty, y = s(Object, "keys"), b = 9007199254740991, v = function (t) {
                return function (e) {
                    return null == e ? void 0 : e[t]
                }
            }("length"), _ = y ? function (t) {
                var e = null == t ? void 0 : t.constructor;
                return "function" == typeof e && e.prototype === t || "function" != typeof t && r(t) ? u(t) : a(t) ? y(t) : []
            } : u;
        e.exports = _
    }, {"lodash._getnative": 9, "lodash.isarguments": 11, "lodash.isarray": 12}],
    14: [function (t, e, n) {
        var r = t("./_root"), o = r.Symbol;
        e.exports = o
    }, {"./_root": 19}],
    15: [function (t, e, n) {
        function r(t) {
            return null == t ? void 0 === t ? c : a : s && s in Object(t) ? i(t) : u(t)
        }

        var o = t("./_Symbol"), i = t("./_getRawTag"), u = t("./_objectToString"), a = "[object Null]",
            c = "[object Undefined]", s = o ? o.toStringTag : void 0;
        e.exports = r
    }, {"./_Symbol": 14, "./_getRawTag": 17, "./_objectToString": 18}],
    16: [function (t, e, n) {
        (function (t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    17: [function (t, e, n) {
        function r(t) {
            var e = u.call(t, c), n = t[c];
            try {
                t[c] = void 0;
                var r = !0
            } catch (t) {
            }
            var o = a.call(t);
            return r && (e ? t[c] = n : delete t[c]), o
        }

        var o = t("./_Symbol"), i = Object.prototype, u = i.hasOwnProperty, a = i.toString,
            c = o ? o.toStringTag : void 0;
        e.exports = r
    }, {"./_Symbol": 14}],
    18: [function (t, e, n) {
        function r(t) {
            return i.call(t)
        }

        var o = Object.prototype, i = o.toString;
        e.exports = r
    }, {}],
    19: [function (t, e, n) {
        var r = t("./_freeGlobal"), o = "object" == typeof self && self && self.Object === Object && self,
            i = r || o || Function("return this")();
        e.exports = i
    }, {"./_freeGlobal": 16}],
    20: [function (t, e, n) {
        var r = Array.isArray;
        e.exports = r
    }, {}],
    21: [function (t, e, n) {
        function r(t) {
            return "number" == typeof t && t == o(t)
        }

        var o = t("./toInteger");
        e.exports = r
    }, {"./toInteger": 27}],
    22: [function (t, e, n) {
        function r(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }

        e.exports = r
    }, {}],
    23: [function (t, e, n) {
        function r(t) {
            return null != t && "object" == typeof t
        }

        e.exports = r
    }, {}],
    24: [function (t, e, n) {
        function r(t) {
            return "string" == typeof t || !i(t) && u(t) && o(t) == a
        }

        var o = t("./_baseGetTag"), i = t("./isArray"), u = t("./isObjectLike"), a = "[object String]";
        e.exports = r
    }, {"./_baseGetTag": 15, "./isArray": 20, "./isObjectLike": 23}],
    25: [function (t, e, n) {
        function r(t) {
            return "symbol" == typeof t || i(t) && o(t) == u
        }

        var o = t("./_baseGetTag"), i = t("./isObjectLike"), u = "[object Symbol]";
        e.exports = r
    }, {"./_baseGetTag": 15, "./isObjectLike": 23}],
    26: [function (t, e, n) {
        function r(t) {
            if (!t) return 0 === t ? t : 0;
            if ((t = o(t)) === i || t === -i) {
                return (t < 0 ? -1 : 1) * u
            }
            return t === t ? t : 0
        }

        var o = t("./toNumber"), i = 1 / 0, u = 1.7976931348623157e308;
        e.exports = r
    }, {"./toNumber": 28}],
    27: [function (t, e, n) {
        function r(t) {
            var e = o(t), n = e % 1;
            return e === e ? n ? e - n : e : 0
        }

        var o = t("./toFinite");
        e.exports = r
    }, {"./toFinite": 26}],
    28: [function (t, e, n) {
        function r(t) {
            if ("number" == typeof t) return t;
            if (i(t)) return u;
            if (o(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = o(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(a, "");
            var n = s.test(t);
            return n || f.test(t) ? l(t.slice(2), n ? 2 : 8) : c.test(t) ? u : +t
        }

        var o = t("./isObject"), i = t("./isSymbol"), u = NaN, a = /^\s+|\s+$/g, c = /^[-+]0x[0-9a-f]+$/i,
            s = /^0b[01]+$/i, f = /^0o[0-7]+$/i, l = parseInt;
        e.exports = r
    }, {"./isObject": 22, "./isSymbol": 25}],
    29: [function (t, e, n) {
        "use strict";
        e.exports = t("./lib/extend")
    }, {"./lib/extend": 30}],
    30: [function (t, e, n) {
        "use strict";
        var r = t("is"), o = function t() {
            var e, n, o, i, u, a, c = arguments[0] || {}, s = 1, f = arguments.length, l = !1;
            for ("boolean" == typeof c && (l = c, c = arguments[1] || {}, s = 2), "object" == typeof c || r.fn(c) || (c = {}); s < f; s++) if (null != (e = arguments[s])) {
                "string" == typeof e && (e = e.split(""));
                for (n in e) o = c[n], i = e[n], c !== i && (l && i && (r.hash(i) || (u = r.array(i))) ? (u ? (u = !1, a = o && r.array(o) ? o : []) : a = o && r.hash(o) ? o : {}, c[n] = t(l, a, i)) : void 0 !== i && (c[n] = i))
            }
            return c
        };
        o.version = "1.1.3", e.exports = o
    }, {is: 1}],
    31: [function (t, e, n) {
        function r() {
            throw new Error("setTimeout has not been defined")
        }

        function o() {
            throw new Error("clearTimeout has not been defined")
        }

        function i(t) {
            if (l === setTimeout) return setTimeout(t, 0);
            if ((l === r || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
            try {
                return l(t, 0)
            } catch (e) {
                try {
                    return l.call(null, t, 0)
                } catch (e) {
                    return l.call(this, t, 0)
                }
            }
        }

        function u(t) {
            if (h === clearTimeout) return clearTimeout(t);
            if ((h === o || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
            try {
                return h(t)
            } catch (e) {
                try {
                    return h.call(null, t)
                } catch (e) {
                    return h.call(this, t)
                }
            }
        }

        function a() {
            b && p && (b = !1, p.length ? y = p.concat(y) : v = -1, y.length && c())
        }

        function c() {
            if (!b) {
                var t = i(a);
                b = !0;
                for (var e = y.length; e;) {
                    for (p = y, y = []; ++v < e;) p && p[v].run();
                    v = -1, e = y.length
                }
                p = null, b = !1, u(t)
            }
        }

        function s(t, e) {
            this.fun = t, this.array = e
        }

        function f() {
        }

        var l, h, d = e.exports = {};
        !function () {
            try {
                l = "function" == typeof setTimeout ? setTimeout : r
            } catch (t) {
                l = r
            }
            try {
                h = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (t) {
                h = o
            }
        }();
        var p, y = [], b = !1, v = -1;
        d.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            y.push(new s(t, e)), 1 !== y.length || b || i(c)
        }, s.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = f, d.addListener = f, d.once = f, d.off = f, d.removeListener = f, d.removeAllListeners = f, d.emit = f, d.prependListener = f, d.prependOnceListener = f, d.listeners = function (t) {
            return []
        }, d.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function () {
            return "/"
        }, d.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function () {
            return 0
        }
    }, {}],
    32: [function (t, e, n) {
        (function (r, o) {
            !function (t, r) {
                "object" == typeof n && void 0 !== e ? r(n) : "function" == typeof define && define.amd ? define(["exports"], r) : r(t.RSVP = t.RSVP || {})
            }(this, function (e) {
                "use strict";

                function n(t, e) {
                    for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                    return -1
                }

                function i(t) {
                    var e = t._promiseCallbacks;
                    return e || (e = t._promiseCallbacks = {}), e
                }

                function u(t, e) {
                    if (2 !== arguments.length) return wt[t];
                    wt[t] = e
                }

                function a(t) {
                    var e = typeof t;
                    return null !== t && ("object" === e || "function" === e)
                }

                function c(t) {
                    return "function" == typeof t
                }

                function s(t) {
                    return null !== t && "object" == typeof t
                }

                function f(t) {
                    return null !== t && "object" == typeof t
                }

                function l() {
                    setTimeout(function () {
                        for (var t = 0; t < Tt.length; t++) {
                            var e = Tt[t], n = e.payload;
                            n.guid = n.key + n.id, n.childGuid = n.key + n.childId, n.error && (n.stack = n.error.stack), wt.trigger(e.name, e.payload)
                        }
                        Tt.length = 0
                    }, 50)
                }

                function h(t, e, n) {
                    1 === Tt.push({
                        name: t,
                        payload: {
                            key: e._guidKey,
                            id: e._id,
                            eventName: t,
                            detail: e._result,
                            childId: n && n._id,
                            label: e._label,
                            timeStamp: Rt(),
                            error: wt["instrument-with-stack"] ? new Error(e._label) : null
                        }
                    }) && l()
                }

                function d(t, e) {
                    var n = this;
                    if (t && "object" == typeof t && t.constructor === n) return t;
                    var r = new n(y, e);
                    return w(r, t), r
                }

                function p() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function y() {
                }

                function b(t) {
                    try {
                        return t.then
                    } catch (t) {
                        return It.error = t, It
                    }
                }

                function v(t, e, n, r) {
                    try {
                        t.call(e, n, r)
                    } catch (t) {
                        return t
                    }
                }

                function _(t, e, n) {
                    wt.async(function (t) {
                        var r = !1, o = v(n, e, function (n) {
                            r || (r = !0, e !== n ? w(t, n, void 0) : O(t, n))
                        }, function (e) {
                            r || (r = !0, R(t, e))
                        }, "Settle: " + (t._label || " unknown promise"));
                        !r && o && (r = !0, R(t, o))
                    }, t)
                }

                function g(t, e) {
                    e._state === At ? O(t, e._result) : e._state === jt ? (e._onError = null, R(t, e._result)) : T(e, void 0, function (n) {
                        e !== n ? w(t, n, void 0) : O(t, n)
                    }, function (e) {
                        return R(t, e)
                    })
                }

                function E(t, e, n) {
                    e.constructor === t.constructor && n === P && t.constructor.resolve === d ? g(t, e) : n === It ? (R(t, It.error), It.error = null) : c(n) ? _(t, e, n) : O(t, e)
                }

                function w(t, e) {
                    t === e ? O(t, e) : a(e) ? E(t, e, b(e)) : O(t, e)
                }

                function m(t) {
                    t._onError && t._onError(t._result), S(t)
                }

                function O(t, e) {
                    t._state === St && (t._result = e, t._state = At, 0 === t._subscribers.length ? wt.instrument && h("fulfilled", t) : wt.async(S, t))
                }

                function R(t, e) {
                    t._state === St && (t._state = jt, t._result = e, wt.async(m, t))
                }

                function T(t, e, n, r) {
                    var o = t._subscribers, i = o.length;
                    t._onError = null, o[i] = e, o[i + At] = n, o[i + jt] = r, 0 === i && t._state && wt.async(S, t)
                }

                function S(t) {
                    var e = t._subscribers, n = t._state;
                    if (wt.instrument && h(n === At ? "fulfilled" : "rejected", t), 0 !== e.length) {
                        for (var r = void 0, o = void 0, i = t._result, u = 0; u < e.length; u += 3) r = e[u], o = e[u + n], r ? I(n, r, o, i) : o(i);
                        t._subscribers.length = 0
                    }
                }

                function A() {
                    this.error = null
                }

                function j(t, e) {
                    try {
                        return t(e)
                    } catch (t) {
                        return Dt.error = t, Dt
                    }
                }

                function I(t, e, n, r) {
                    var o = c(n), i = void 0, u = void 0;
                    if (o) {
                        if ((i = j(n, r)) === Dt) u = i.error, i.error = null; else if (i === e) return void R(e, p())
                    } else i = r;
                    e._state !== St || (o && void 0 === u ? w(e, i) : void 0 !== u ? R(e, u) : t === At ? O(e, i) : t === jt && R(e, i))
                }

                function D(t, e) {
                    var n = !1;
                    try {
                        e(function (e) {
                            n || (n = !0, w(t, e))
                        }, function (e) {
                            n || (n = !0, R(t, e))
                        })
                    } catch (e) {
                        R(t, e)
                    }
                }

                function P(t, e, n) {
                    var r = this, o = r._state;
                    if (o === At && !t || o === jt && !e) return wt.instrument && h("chained", r, r), r;
                    r._onError = null;
                    var i = new r.constructor(y, n), u = r._result;
                    if (wt.instrument && h("chained", r, i), o === St) T(r, i, t, e); else {
                        var a = o === At ? t : e;
                        wt.async(function () {
                            return I(o, i, a, u)
                        })
                    }
                    return i
                }

                function N(t, e, n) {
                    return t === At ? {state: "fulfilled", value: n} : {state: "rejected", reason: n}
                }

                function x(t, e) {
                    return Ot(t) ? new Pt(this, t, !0, e).promise : this.reject(new TypeError("Promise.all must be called with an array"), e)
                }

                function G(t, e) {
                    var n = this, r = new n(y, e);
                    if (!Ot(t)) return R(r, new TypeError("Promise.race must be called with an array")), r;
                    for (var o = 0; r._state === St && o < t.length; o++) T(n.resolve(t[o]), void 0, function (t) {
                        return w(r, t)
                    }, function (t) {
                        return R(r, t)
                    });
                    return r
                }

                function k(t, e) {
                    var n = this, r = new n(y, e);
                    return R(r, t), r
                }

                function C() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function U() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function L() {
                    this.value = void 0
                }

                function M(t) {
                    try {
                        return t.then
                    } catch (t) {
                        return kt.value = t, kt
                    }
                }

                function q(t, e, n) {
                    try {
                        t.apply(e, n)
                    } catch (t) {
                        return kt.value = t, kt
                    }
                }

                function F(t, e) {
                    for (var n = {}, r = t.length, o = new Array(r), i = 0; i < r; i++) o[i] = t[i];
                    for (var u = 0; u < e.length; u++) {
                        n[e[u]] = o[u + 1]
                    }
                    return n
                }

                function H(t) {
                    for (var e = t.length, n = new Array(e - 1), r = 1; r < e; r++) n[r - 1] = t[r];
                    return n
                }

                function K(t, e) {
                    return {
                        then: function (n, r) {
                            return t.call(e, n, r)
                        }
                    }
                }

                function Y(t, e) {
                    var n = function () {
                        for (var n = this, r = arguments.length, o = new Array(r + 1), i = !1, u = 0; u < r; ++u) {
                            var a = arguments[u];
                            if (!i) {
                                if ((i = $(a)) === Ct) {
                                    var c = new Gt(y);
                                    return R(c, Ct.value), c
                                }
                                i && !0 !== i && (a = K(i, a))
                            }
                            o[u] = a
                        }
                        var s = new Gt(y);
                        return o[r] = function (t, n) {
                            t ? R(s, t) : void 0 === e ? w(s, n) : !0 === e ? w(s, H(arguments)) : Ot(e) ? w(s, F(arguments, e)) : w(s, n)
                        }, i ? Q(s, o, t, n) : B(s, o, t, n)
                    };
                    return n.__proto__ = t, n
                }

                function B(t, e, n, r) {
                    var o = q(n, r, e);
                    return o === kt && R(t, o.value), t
                }

                function Q(t, e, n, r) {
                    return Gt.all(e).then(function (e) {
                        var o = q(n, r, e);
                        return o === kt && R(t, o.value), t
                    })
                }

                function $(t) {
                    return !(!t || "object" != typeof t) && (t.constructor === Gt || M(t))
                }

                function V(t, e) {
                    return Gt.all(t, e)
                }

                function z(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function J(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function X(t, e) {
                    return Ot(t) ? new Ut(Gt, t, e).promise : Gt.reject(new TypeError("Promise.allSettled must be called with an array"), e)
                }

                function W(t, e) {
                    return Gt.race(t, e)
                }

                function Z(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function tt(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function et(t, e) {
                    return s(t) ? new Mt(Gt, t, e).promise : Gt.reject(new TypeError("Promise.hash must be called with an object"), e)
                }

                function nt(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function rt(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function ot(t, e) {
                    return s(t) ? new qt(Gt, t, !1, e).promise : Gt.reject(new TypeError("RSVP.hashSettled must be called with an object"), e)
                }

                function it(t) {
                    throw setTimeout(function () {
                        throw t
                    }), t
                }

                function ut(t) {
                    var e = {resolve: void 0, reject: void 0};
                    return e.promise = new Gt(function (t, n) {
                        e.resolve = t, e.reject = n
                    }, t), e
                }

                function at(t, e, n) {
                    return Ot(t) ? c(e) ? Gt.all(t, n).then(function (t) {
                        for (var r = t.length, o = new Array(r), i = 0; i < r; i++) o[i] = e(t[i]);
                        return Gt.all(o, n)
                    }) : Gt.reject(new TypeError("RSVP.map expects a function as a second argument"), n) : Gt.reject(new TypeError("RSVP.map must be called with an array"), n)
                }

                function ct(t, e) {
                    return Gt.resolve(t, e)
                }

                function st(t, e) {
                    return Gt.reject(t, e)
                }

                function ft(t, e) {
                    return Gt.all(t, e)
                }

                function lt(t, e) {
                    return Gt.resolve(t, e).then(function (t) {
                        return ft(t, e)
                    })
                }

                function ht(t, e, n) {
                    return Ot(t) || s(t) && void 0 !== t.then ? c(e) ? (Ot(t) ? ft(t, n) : lt(t, n)).then(function (t) {
                        for (var r = t.length, o = new Array(r), i = 0; i < r; i++) o[i] = e(t[i]);
                        return ft(o, n).then(function (e) {
                            for (var n = new Array(r), o = 0, i = 0; i < r; i++) e[i] && (n[o] = t[i], o++);
                            return n.length = o, n
                        })
                    }) : Gt.reject(new TypeError("RSVP.filter expects function as a second argument"), n) : Gt.reject(new TypeError("RSVP.filter must be called with an array or promise"), n)
                }

                function dt(t, e) {
                    Vt[Ft] = t, Vt[Ft + 1] = e, 2 === (Ft += 2) && zt()
                }

                function pt() {
                    return void 0 !== Ht ? function () {
                        Ht(bt)
                    } : yt()
                }

                function yt() {
                    return function () {
                        return setTimeout(bt, 1)
                    }
                }

                function bt() {
                    for (var t = 0; t < Ft; t += 2) {
                        (0, Vt[t])(Vt[t + 1]), Vt[t] = void 0, Vt[t + 1] = void 0
                    }
                    Ft = 0
                }

                function vt(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function _t() {
                    wt.on.apply(wt, arguments)
                }

                function gt() {
                    wt.off.apply(wt, arguments)
                }

                var Et = {
                    mixin: function (t) {
                        return t.on = this.on, t.off = this.off, t.trigger = this.trigger, t._promiseCallbacks = void 0, t
                    }, on: function (t, e) {
                        if ("function" != typeof e) throw new TypeError("Callback must be a function");
                        var r = i(this), o = void 0;
                        o = r[t], o || (o = r[t] = []), -1 === n(o, e) && o.push(e)
                    }, off: function (t, e) {
                        var r = i(this), o = void 0, u = void 0;
                        if (!e) return void(r[t] = []);
                        o = r[t], -1 !== (u = n(o, e)) && o.splice(u, 1)
                    }, trigger: function (t, e, n) {
                        var r = i(this), o = void 0;
                        if (o = r[t]) for (var u = 0; u < o.length; u++) (0, o[u])(e, n)
                    }
                }, wt = {instrument: !1};
                Et.mixin(wt);
                var mt = void 0;
                mt = Array.isArray ? Array.isArray : function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
                var Ot = mt, Rt = Date.now || function () {
                    return (new Date).getTime()
                }, Tt = [], St = void 0, At = 1, jt = 2, It = new A, Dt = new A, Pt = function () {
                    function t(t, e, n, r) {
                        this._instanceConstructor = t, this.promise = new t(y, r), this._abortOnReject = n, this._init.apply(this, arguments)
                    }

                    return t.prototype._init = function (t, e) {
                        var n = e.length || 0;
                        this.length = n, this._remaining = n, this._result = new Array(n), this._enumerate(e), 0 === this._remaining && O(this.promise, this._result)
                    }, t.prototype._enumerate = function (t) {
                        for (var e = this.length, n = this.promise, r = 0; n._state === St && r < e; r++) this._eachEntry(t[r], r)
                    }, t.prototype._settleMaybeThenable = function (t, e) {
                        var n = this._instanceConstructor, r = n.resolve;
                        if (r === d) {
                            var o = b(t);
                            if (o === P && t._state !== St) t._onError = null, this._settledAt(t._state, e, t._result); else if ("function" != typeof o) this._remaining--, this._result[e] = this._makeResult(At, e, t); else if (n === Gt) {
                                var i = new n(y);
                                E(i, t, o), this._willSettleAt(i, e)
                            } else this._willSettleAt(new n(function (e) {
                                return e(t)
                            }), e)
                        } else this._willSettleAt(r(t), e)
                    }, t.prototype._eachEntry = function (t, e) {
                        f(t) ? this._settleMaybeThenable(t, e) : (this._remaining--, this._result[e] = this._makeResult(At, e, t))
                    }, t.prototype._settledAt = function (t, e, n) {
                        var r = this.promise;
                        r._state === St && (this._abortOnReject && t === jt ? R(r, n) : (this._remaining--, this._result[e] = this._makeResult(t, e, n), 0 === this._remaining && O(r, this._result)))
                    }, t.prototype._makeResult = function (t, e, n) {
                        return n
                    }, t.prototype._willSettleAt = function (t, e) {
                        var n = this;
                        T(t, void 0, function (t) {
                            return n._settledAt(At, e, t)
                        }, function (t) {
                            return n._settledAt(jt, e, t)
                        })
                    }, t
                }(), Nt = "rsvp_" + Rt() + "-", xt = 0, Gt = function () {
                    function t(e, n) {
                        this._id = xt++, this._label = n, this._state = void 0, this._result = void 0, this._subscribers = [], wt.instrument && h("created", this), y !== e && ("function" != typeof e && C(), this instanceof t ? D(this, e) : U())
                    }

                    return t.prototype._onError = function (t) {
                        var e = this;
                        wt.after(function () {
                            e._onError && wt.trigger("error", t, e._label)
                        })
                    }, t.prototype.catch = function (t, e) {
                        return this.then(void 0, t, e)
                    }, t.prototype.finally = function (t, e) {
                        var n = this, r = n.constructor;
                        return n.then(function (e) {
                            return r.resolve(t()).then(function () {
                                return e
                            })
                        }, function (e) {
                            return r.resolve(t()).then(function () {
                                throw e
                            })
                        }, e)
                    }, t
                }();
                Gt.cast = d, Gt.all = x, Gt.race = G, Gt.resolve = d, Gt.reject = k, Gt.prototype._guidKey = Nt, Gt.prototype.then = P;
                var kt = new L, Ct = new L, Ut = function (t) {
                    function e(e, n, r) {
                        return z(this, t.call(this, e, n, !1, r))
                    }

                    return J(e, t), e
                }(Pt);
                Ut.prototype._makeResult = N;
                var Lt = Object.prototype.hasOwnProperty, Mt = function (t) {
                    function e(e, n) {
                        var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], o = arguments[3];
                        return Z(this, t.call(this, e, n, r, o))
                    }

                    return tt(e, t), e.prototype._init = function (t, e) {
                        this._result = {}, this._enumerate(e), 0 === this._remaining && O(this.promise, this._result)
                    }, e.prototype._enumerate = function (t) {
                        var e = this.promise, n = [];
                        for (var r in t) Lt.call(t, r) && n.push({position: r, entry: t[r]});
                        var o = n.length;
                        this._remaining = o;
                        for (var i = void 0, u = 0; e._state === St && u < o; u++) i = n[u], this._eachEntry(i.entry, i.position)
                    }, e
                }(Pt), qt = function (t) {
                    function e(e, n, r) {
                        return nt(this, t.call(this, e, n, !1, r))
                    }

                    return rt(e, t), e
                }(Mt);
                qt.prototype._makeResult = N;
                var Ft = 0, Ht = void 0, Kt = "undefined" != typeof window ? window : void 0, Yt = Kt || {},
                    Bt = Yt.MutationObserver || Yt.WebKitMutationObserver,
                    Qt = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r),
                    $t = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    Vt = new Array(1e3), zt = void 0;
                zt = Qt ? function () {
                    var t = r.nextTick, e = r.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                    return Array.isArray(e) && "0" === e[1] && "10" === e[2] && (t = setImmediate), function () {
                        return t(bt)
                    }
                }() : Bt ? function () {
                    var t = 0, e = new Bt(bt), n = document.createTextNode("");
                    return e.observe(n, {characterData: !0}), function () {
                        return n.data = t = ++t % 2
                    }
                }() : $t ? function () {
                    var t = new MessageChannel;
                    return t.port1.onmessage = bt, function () {
                        return t.port2.postMessage(0)
                    }
                }() : void 0 === Kt && "function" == typeof t ? function () {
                    try {
                        var e = t, n = e("vertx");
                        return Ht = n.runOnLoop || n.runOnContext, pt()
                    } catch (t) {
                        return yt()
                    }
                }() : yt();
                if ("object" == typeof self) self; else {
                    if ("object" != typeof o) throw new Error("no global: `self` or `global` found");
                    o
                }
                var Jt;
                wt.async = dt, wt.after = function (t) {
                    return setTimeout(t, 0)
                };
                var Xt = ct, Wt = function (t, e) {
                    return wt.async(t, e)
                };
                if ("undefined" != typeof window && "object" == typeof window.__PROMISE_INSTRUMENTATION__) {
                    var Zt = window.__PROMISE_INSTRUMENTATION__;
                    u("instrument", !0);
                    for (var te in Zt) Zt.hasOwnProperty(te) && _t(te, Zt[te])
                }
                var ee = (Jt = {
                    asap: dt,
                    cast: Xt,
                    Promise: Gt,
                    EventTarget: Et,
                    all: V,
                    allSettled: X,
                    race: W,
                    hash: et,
                    hashSettled: ot,
                    rethrow: it,
                    defer: ut,
                    denodeify: Y,
                    configure: u,
                    on: _t,
                    off: gt,
                    resolve: ct,
                    reject: st,
                    map: at
                }, vt(Jt, "async", Wt), vt(Jt, "filter", ht), Jt);
                e.default = ee, e.asap = dt, e.cast = Xt, e.Promise = Gt, e.EventTarget = Et, e.all = V, e.allSettled = X, e.race = W, e.hash = et, e.hashSettled = ot, e.rethrow = it, e.defer = ut, e.denodeify = Y, e.configure = u, e.on = _t, e.off = gt, e.resolve = ct, e.reject = st, e.map = at, e.async = Wt, e.filter = ht, Object.defineProperty(e, "__esModule", {value: !0})
            })
        }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {_process: 31}],
    33: [function (t, e, n) {
        (function (n) {
            "use strict";
            var r = t("node.extend"), o = t("./utils"), i = t("./constants"), u = t("./storage"), a = t("./version"),
                c = n.BaaS || {};
            c._config = o.getConfig(), r(c._config, {VERSION: a}), c.init = function (t) {
                if ("[object String]" !== Object.prototype.toString.apply(t)) throw new Error("非法 clientID");
                c._config.CLIENT_ID = t
            }, c.getAuthToken = function () {
                return u.get(i.STORAGE_KEY.AUTH_TOKEN)
            }, c.isLogined = function () {
                return u.get(i.STORAGE_KEY.IS_LOGINED_BAAS)
            }, c.check = function () {
                if (!c.getAuthToken()) throw new Error("未认证客户端");
                if (!c.isLogined()) throw new Error("未登录")
            }, c.clearSession = function () {
                u.set(i.STORAGE_KEY.AUTH_TOKEN, ""),
                    u.set(i.STORAGE_KEY.IS_LOGINED_BAAS, ""), u.set(i.STORAGE_KEY.USERINFO, ""), u.set(i.STORAGE_KEY.UID, ""), u.set(i.STORAGE_KEY.OPENID, ""), u.set(i.STORAGE_KEY.OPENID, "")
            }, e.exports = c
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"./constants": 37, "./storage": 46, "./utils": 52, "./version": 53, "node.extend": 29}],
    34: [function (t, e, n) {
        "use strict";
        var r = t("./baas"), o = t("./constants"), i = t("node.extend"), u = t("./promise"), a = t("./request"),
            c = (t("./storage"), t("./utils")), s = t("./user"), f = function (t) {
                var e = arguments;
                t.url, t.method, t.data, t.header, t.dataType;
                return s.login(!1).then(function () {
                    return a.apply(null, e)
                }, function (t) {
                    throw new Error(t)
                })
            }, l = function (t) {
                var e = {
                    GET: o.STATUS_CODE.SUCCESS,
                    POST: o.STATUS_CODE.CREATED,
                    PUT: o.STATUS_CODE.UPDATE,
                    PATCH: o.STATUS_CODE.PATCH,
                    DELETE: o.STATUS_CODE.DELETE
                };
                for (var n in t) t.hasOwnProperty(n) && (r[n] = function (n) {
                    var r = t[n];
                    return function (t) {
                        var n = i(!0, {}, t), a = r.method || "GET";
                        if (r.defaultParams) {
                            var s = i({}, r.defaultParams);
                            n = i(s, n)
                        }
                        var l = c.format(r.url, n), h = n && n.data || n;
                        return h = c.excludeParams(r.url, h), h = c.replaceQueryParams(l, h), new u(function (t, n) {
                            return f({url: l, method: a, data: h}).then(function (r) {
                                r.statusCode == e[a] ? t(r) : n(o.MSG.STATUS_CODE_ERROR)
                            }, function (t) {
                                n(t)
                            })
                        })
                    }
                }(n))
            }, h = function () {
                r._config.METHOD_MAP_LIST.map(function (t) {
                    l(t)
                })
            };
        e.exports = {baasRequest: f, createRequestMethod: h, doCreateRequestMethod: l}
    }, {
        "./baas": 33,
        "./constants": 37,
        "./promise": 43,
        "./request": 45,
        "./storage": 46,
        "./user": 51,
        "./utils": 52,
        "node.extend": 29
    }],
    35: [function (t, e, n) {
        "use strict";
        var r = t("node.extend"), o = t("./config"), i = {DEBUG: !0};
        e.exports = r(o, i)
    }, {"./config": 36, "node.extend": 29}],
    36: [function (t, e, n) {
        "use strict";
        var r = {
            INIT: "/hserve/v1/session/init/",
            LOGIN: "/hserve/v1/session/authenticate/",
            LOGOUT: "/hserve/v1/session/destroy/",
            PAY: "/hserve/v1/wechat/pay/order/",
            ORDER: "/hserve/v1/wechat/pay/order/:transactionID/",
            UPLOAD: "/hserve/v1/upload/",
            TEMPLATE_MESSAGE: "/hserve/v1/template-message-ticket/",
            DECRYPT: "/hserve/v1/wechat/decrypt/",
            CONTENT_LIST: "/hserve/v1/content/detail/",
            CONTENT_GROUP_LIST: "/hserve/v1/content/group/",
            CONTENT_DETAIL: "/hserve/v1/content/detail/:richTextID/",
            CONTENT_GROUP_DETAIL: "/hserve/v1/content/category/",
            CONTENT_CATEGORY_DETAIL: "/hserve/v1/content/category/:categoryID/",
            TABLE_LIST: "/hserve/v1/table/",
            TABLE_DETAIL: "/hserve/v1/table/:tableID/",
            RECORD_LIST: "/hserve/v1.1/table/:tableID/record/",
            QUERY_RECORD_LIST: "/hserve/v1.2/table/:tableID/record/",
            RECORD_DETAIL: "/hserve/v1.2/table/:tableID/record/:recordID/",
            CREATE_RECORD: "/hserve/v1.2/table/:tableID/record/",
            UPDATE_RECORD: "/hserve/v1.2/table/:tableID/record/:recordID/",
            DELETE_RECORD: "/hserve/v1.2/table/:tableID/record/:recordID/",
            USER_INFO: "/hserve/v1/user/info/:userID/"
        }, o = [{getUserInfo: {url: r.USER_INFO, defaultParams: {userID: ""}}}, {
            getTableList: {url: r.TABLE_LIST},
            getTable: {url: r.TABLE_DETAIL},
            getRecordList: {url: r.RECORD_LIST},
            queryRecordList: {url: r.QUERY_RECORD_LIST},
            getRecord: {url: r.RECORD_DETAIL},
            createRecord: {url: r.CREATE_RECORD, method: "POST"},
            updateRecord: {url: r.UPDATE_RECORD, method: "PUT"},
            deleteRecord: {url: r.DELETE_RECORD, method: "DELETE"}
        }, {
            getContentList: {url: r.CONTENT_LIST},
            getContent: {url: r.CONTENT_DETAIL},
            getContentGroupList: {url: r.CONTENT_GROUP_LIST},
            getContentGroup: {url: r.CONTENT_GROUP_DETAIL},
            getContentCategory: {url: r.CONTENT_CATEGORY_DETAIL}
        }], i = {max: 100};
        e.exports = {
            API_HOST: "https://sso.ifanr.com",
            API: r,
            AUTH_PREFIX: "Hydrogen-r1",
            METHOD_MAP_LIST: o,
            DEBUG: !1,
            RANDOM_OPTION: i
        }
    }, {}],
    37: [function (t, e, n) {
        "use strict";
        e.exports = {
            STORAGE_KEY: {
                AUTH_TOKEN: "auth_token",
                USERINFO: "userinfo",
                UID: "uid",
                OPENID: "openid",
                UNIONID: "unionid",
                IS_LOGINED_BAAS: "is_logined_baas"
            },
            MSG: {
                STATUS_CODE_ERROR: "Unexpected API Status Code",
                NETWORT_ERROR: "Network Error",
                ARGS_ERROR: "参数使用错误",
                CONFIG_ERROR: "认证失败，请检查 AppID、ClientID 配置",
                LOGIN_ERROR: "登录失败",
                UNAUTH_ERROR: "请先完成用户授权"
            },
            STATUS_CODE: {
                CREATED: 201,
                SUCCESS: 200,
                UPDATE: 200,
                PATCH: 200,
                DELETE: 204,
                UNAUTHORIZED: 401,
                NOT_FOUND: 404,
                SERVER_ERROR: 500
            },
            UPLOAD: {
                UPLOAD_FILE_KEY: "file",
                HEADER_AUTH: "Authorization",
                HEADER_CLIENT: "X-Hydrogen-Client-ID",
                HEADER_AUTH_VALUE: "Hydrogen-r1 ",
                UA: "Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
            }
        }
    }, {}],
    38: [function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(), i = t("lodash.clonedeep"), u = function () {
            function t(e, n) {
                r(this, t), this.attitude = e, this.longitude = n, this.geoJSON = {
                    type: "Point",
                    coordinates: [this.attitude, this.longitude]
                }
            }

            return o(t, [{
                key: "toGeoJSON", value: function () {
                    return i(this.geoJSON)
                }
            }]), t
        }();
        e.exports = u
    }, {"lodash.clonedeep": 10}],
    39: [function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(), i = t("./geoPoint"), u = t("lodash.clonedeep"), a = t("./constants"), c = function () {
            function t(e) {
                if (r(this, t), !(e && e instanceof Array)) throw new Error(a.MSG.ARGS_ERROR);
                if (e.length < 4) throw new Error(a.MSG.ARGS_ERROR);
                this.points = e, this.geoJSON = {type: "Polygon", coordinates: []}
            }

            return o(t, [{
                key: "toGeoJSON", value: function () {
                    var t = this.geoJSON.coordinates, e = [];
                    return this.points.forEach(function (t) {
                        if (t instanceof i) e.push([t.attitude, t.longitude]); else {
                            if (!(t instanceof Array && 2 === t.length)) throw new Error(a.MSG.ARGS_ERROR);
                            e.push(t)
                        }
                    }), t.push(e), u(this.geoJSON)
                }
            }]), t
        }();
        e.exports = c
    }, {"./constants": 37, "./geoPoint": 38, "lodash.clonedeep": 10}],
    40: [function (t, e, n) {
        "use strict";
        var r = t("./baas");
        r.auth = t("./baasRequest").auth, r.GeoPoint = t("./geoPoint"), r.GeoPolygon = t("./geoPolygon"), r.login = t("./user").login, r.logout = t("./user").logout, r.order = t("./order"), r.pay = t("./pay"), r.Promise = t("./promise"), r.Query = t("./query"), r.request = t("./request"), r.wxReportTicket = t("./templateMessage").wxReportTicket, r.storage = t("./storage"), r.TableObject = t("./tableObject"), r.uploadFile = t("./uploadFile"), r.wxDecryptData = t("./wxDecryptData"), t("./baasRequest").createRequestMethod(), "undefined" != typeof wx && (wx.BaaS = r), e.exports = r
    }, {
        "./baas": 33,
        "./baasRequest": 34,
        "./geoPoint": 38,
        "./geoPolygon": 39,
        "./order": 41,
        "./pay": 42,
        "./promise": 43,
        "./query": 44,
        "./request": 45,
        "./storage": 46,
        "./tableObject": 47,
        "./templateMessage": 49,
        "./uploadFile": 50,
        "./user": 51,
        "./wxDecryptData": 54
    }],
    41: [function (t, e, n) {
        "use strict";
        var r = t("./baasRequest").baasRequest, o = t("./baas"), i = o._config.API,
            u = (t("./constants"), t("./utils")), a = t("./promise"), c = function (t) {
                var e = u.format(i.ORDER, {transactionID: t.transactionID});
                return r({url: e}).then(function (t) {
                    return new a(function (e, n) {
                        return e(t)
                    }, function (t) {
                        return reject(t)
                    })
                }, function (t) {
                    throw new Error(t)
                })
            };
        e.exports = c
    }, {"./baas": 33, "./baasRequest": 34, "./constants": 37, "./promise": 43, "./utils": 52}],
    42: [function (t, e, n) {
        "use strict";
        var r = t("./baasRequest").baasRequest, o = t("./baas"), i = t("./constants"), u = t("./promise"),
            a = t("./storage"), c = o._config.API, s = {
                merchandiseSchemaID: "merchandise_schema_id",
                merchandiseRecordID: "merchandise_record_id",
                merchandiseSnapshot: "merchandise_snapshot",
                merchandiseDescription: "merchandise_description",
                totalCost: "total_cost"
            }, f = function (t) {
                if (!a.get(i.STORAGE_KEY.USERINFO)) return new u(function (t, e) {
                    e(i.MSG.UNAUTH_ERROR)
                });
                var e = {};
                for (var n in t) e[s[n]] = t[n];
                return r({url: c.PAY, method: "POST", data: e}).then(function (t) {
                    var e = t.data || {};
                    return new u(function (t, n) {
                        wx.requestPayment({
                            appId: e.appId,
                            timeStamp: e.timeStamp,
                            nonceStr: e.nonceStr,
                            package: e.package,
                            signType: "MD5",
                            paySign: e.paySign,
                            success: function (n) {
                                return n.transaction_no = e.transaction_no, t(n)
                            },
                            fail: function (t) {
                                return n(t)
                            }
                        })
                    }, function (t) {
                        throw new Error(t)
                    })
                }, function (t) {
                    throw new Error(t)
                })
            };
        e.exports = f
    }, {"./baas": 33, "./baasRequest": 34, "./constants": 37, "./promise": 43, "./storage": 46}],
    43: [function (t, e, n) {
        "use strict";
        var r = t("rsvp").Promise;
        e.exports = r
    }, {rsvp: 32}],
    44: [function (t, e, n) {
        "use strict";

        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var i = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(), u = t("./constants"), a = t("./geoPoint"), c = t("./geoPolygon"), s = t("./utils"),
            f = t("lodash/isString"), l = function () {
                function t() {
                    o(this, t), this.queryObject = {}
                }

                return i(t, [{
                    key: "compare", value: function (t, e, n) {
                        var o = "eq";
                        switch (e) {
                            case"=":
                                o = "eq";
                                break;
                            case"!=":
                                o = "ne";
                                break;
                            case"<":
                                o = "lt";
                                break;
                            case"<=":
                                o = "lte";
                                break;
                            case">":
                                o = "gt";
                                break;
                            case">=":
                                o = "gte";
                                break;
                            default:
                                throw new Error(u.MSG.ARGS_ERROR)
                        }
                        return this._addQueryObject(t, r({}, o, n)), this
                    }
                }, {
                    key: "contains", value: function (t, e) {
                        if (e && f(e)) return this._addQueryObject(t, {contains: e}), this;
                        throw new Error(u.MSG.ARGS_ERROR)
                    }
                }, {
                    key: "matches", value: function (t, e) {
                        if (e && e instanceof RegExp) {
                            var n = s.parseRegExp(e);
                            return n.length > 1 ? this._addQueryObject(t, {
                                regex: n[0],
                                options: n[1]
                            }) : this._addQueryObject(t, {regex: n[0]}), this
                        }
                        throw new Error(u.MSG.ARGS_ERROR)
                    }
                }, {
                    key: "in", value: function (t, e) {
                        if (e && e instanceof Array) return this._addQueryObject(t, {in: e}), this;
                        throw new Error(u.MSG.ARGS_ERROR)
                    }
                }, {
                    key: "notIn", value: function (t, e) {
                        if (e && e instanceof Array) return this._addQueryObject(t, {nin: e}), this;
                        throw new Error(u.MSG.ARGS_ERROR)
                    }
                }, {
                    key: "arrayContains", value: function (t, e) {
                        if (e && e instanceof Array) return this._addQueryObject(t, {all: e}), this;
                        throw new Error(u.MSG.ARGS_ERROR)
                    }
                }, {
                    key: "isNull", value: function (t) {
                        var e = this;
                        return t && t instanceof Array ? t.forEach(function (t) {
                            e._addQueryObject(t, {isnull: !0})
                        }) : this._addQueryObject(t, {isnull: !0}), this
                    }
                }, {
                    key: "isNotNull", value: function (t) {
                        var e = this;
                        return t && t instanceof Array ? t.forEach(function (t) {
                            e._addQueryObject(t, {isnull: !1})
                        }) : this._addQueryObject(t, {isnull: !1}), this
                    }
                }, {
                    key: "exists", value: function (t) {
                        var e = this;
                        return t && t instanceof Array ? t.forEach(function (t) {
                            e._addQueryObject(t, {exists: !0})
                        }) : this._addQueryObject(t, {exists: !0}), this
                    }
                }, {
                    key: "notExists", value: function (t) {
                        var e = this;
                        return t && t instanceof Array ? t.forEach(function (t) {
                            e._addQueryObject(t, {exists: !1})
                        }) : this._addQueryObject(t, {exists: !1}), this
                    }
                }, {
                    key: "include", value: function (t, e) {
                        if (e && e instanceof a) return this._addQueryObject(t, {intersects: e.toGeoJSON()}), this;
                        throw new Error(u.MSG.ARGS_ERROR)
                    }
                }, {
                    key: "within", value: function (t, e) {
                        if (e && e instanceof c) return this._addQueryObject(t, {within: e.toGeoJSON()}), this;
                        throw new Error(u.MSG.ARGS_ERROR)
                    }
                }, {
                    key: "withinCircle", value: function (t, e, n) {
                        if (e && e instanceof a) {
                            var r = {radius: n, coordinates: [e.attitude, e.longitude]};
                            return this._addQueryObject(t, {center: r}), this
                        }
                        throw new Error(u.MSG.ARGS_ERROR)
                    }
                }, {
                    key: "withinRegion", value: function (t, e, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        if (e && e instanceof a) {
                            var o = {geometry: e.toGeoJSON(), min_distance: r};
                            return n && (o.max_distance = n), this._addQueryObject(t, {nearsphere: o}), this
                        }
                        throw new Error(u.MSG.ARGS_ERROR)
                    }
                }, {
                    key: "_setQueryObject", value: function (t) {
                        this.queryObject = t
                    }
                }, {
                    key: "_addQueryObject", value: function (t, e) {
                        if (e.constructor !== Object) throw new Error(u.MSG.ARGS_ERROR);
                        var n = r({}, t, {});
                        Object.keys(e).forEach(function (r) {
                            n[t]["$" + r] = e[r]
                        }), this.queryObject.$and || (this.queryObject.$and = []), this.queryObject.$and.push(n)
                    }
                }], [{
                    key: "and", value: function () {
                        for (var e = new t, n = {$and: []}, r = arguments.length, o = Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return o.forEach(function (t) {
                            n.$and.push(t.queryObject)
                        }), e._setQueryObject(n), e
                    }
                }, {
                    key: "or", value: function () {
                        for (var e = new t, n = {$or: []}, r = arguments.length, o = Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return o.forEach(function (t) {
                            n.$or.push(t.queryObject)
                        }), e._setQueryObject(n), e
                    }
                }]), t
            }();
        e.exports = l
    }, {"./constants": 37, "./geoPoint": 38, "./geoPolygon": 39, "./utils": 52, "lodash/isString": 24}],
    45: [function (t, e, n) {
        "use strict";
        var r = t("./promise"), o = t("node.extend"), i = t("./utils"), u = t("./constants"), a = t("./baas"),
            c = (t("./storage"), ["X-Hydrogen-Client-ID", "X-Hydrogen-Client-Version", "X-Hydrogen-Client-Platform", "Authorization"]),
            s = function (t) {
                var e = {
                    "X-Hydrogen-Client-ID": a._config.CLIENT_ID,
                    "X-Hydrogen-Client-Version": a._config.VERSION,
                    "X-Hydrogen-Client-Platform": i.getSysPlatform()
                }, n = a.getAuthToken();
                return n && (e.Authorization = a._config.AUTH_PREFIX + " " + n), t && c.map(function (e) {
                    t.hasOwnProperty(e) && delete t[e]
                }), o(e, t || {})
            }, f = function (t) {
                var e = t.url, n = t.method, o = void 0 === n ? "GET" : n, c = t.data, f = void 0 === c ? {} : c,
                    l = t.header, h = void 0 === l ? {} : l, d = t.dataType, p = void 0 === d ? "json" : d;
                return new r(function (t, n) {
                    a._config.CLIENT_ID || n("未初始化客户端");
                    var r = s(h);
                    /https:\/\//.test(e) || (e = a._config.API_HOST + e), wx.request({
                        method: o,
                        url: e,
                        data: f,
                        header: r,
                        dataType: p,
                        success: function (e) {
                            e.statusCode == u.STATUS_CODE.UNAUTHORIZED && a.clearSession(), t(e)
                        },
                        fail: function (t) {
                            throw new Error(t.errMsg)
                        }
                    }), i.log("Request => " + e)
                })
            };
        e.exports = f
    }, {"./baas": 33, "./constants": 37, "./promise": 43, "./storage": 46, "./utils": 52, "node.extend": 29}],
    46: [function (t, e, n) {
        "use strict";
        e.exports = {
            set: function (t, e) {
                try {
                    wx.setStorageSync("ifx_baas_" + t, e)
                } catch (t) {
                    throw new Error(t)
                }
            }, get: function (t) {
                try {
                    return wx.getStorageSync("ifx_baas_" + t)
                } catch (t) {
                    throw new Error(t)
                }
            }
        }
    }, {}],
    47: [function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var o = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(), i = t("./baas"), u = (t("./baasRequest").baasRequest, t("./constants")), a = t("./query"),
            c = t("./tableRecord"), s = t("lodash.clonedeep"), f = t("lodash/isInteger"),
            l = (i._config.API, function () {
                function t(e) {
                    r(this, t), this._tableID = e, this._queryObject = {}, this._limit = 20, this._offset = 0, this._orderBy = null
                }

                return o(t, [{
                    key: "_handleQueryObject", value: function () {
                        var t = {};
                        return t.tableID = this._tableID, t.limit = this._limit, t.offset = this._offset, this._orderBy && (t.order_by = this._orderBy), t.where = JSON.stringify(this._queryObject), t
                    }
                }, {
                    key: "create", value: function () {
                        return new c(this._tableID)
                    }
                }, {
                    key: "delete", value: function (t) {
                        return i.deleteRecord({tableID: this._tableID, recordID: t})
                    }
                }, {
                    key: "getWithoutData", value: function (t) {
                        return new c(this._tableID, t)
                    }
                }, {
                    key: "get", value: function (t) {
                        return i.getRecord({tableID: this._tableID, recordID: t})
                    }
                }, {
                    key: "setQuery", value: function (t) {
                        if (!(t instanceof a)) throw new Error(u.MSG.ARGS_ERROR);
                        return this._queryObject = s(t.queryObject), this
                    }
                }, {
                    key: "limit", value: function (t) {
                        if (!f(t)) throw new Error(u.MSG.ARGS_ERROR);
                        return this._limit = t, this
                    }
                }, {
                    key: "offset", value: function (t) {
                        if (!f(t)) throw new Error(u.MSG.ARGS_ERROR);
                        return this._offset = t, this
                    }
                }, {
                    key: "orderBy", value: function (t) {
                        return t instanceof Array ? this._orderBy = t.join(",") : this._orderBy = t, this
                    }
                }, {
                    key: "find", value: function () {
                        return i.queryRecordList(this._handleQueryObject())
                    }
                }]), t
            }());
        e.exports = l
    }, {
        "./baas": 33,
        "./baasRequest": 34,
        "./constants": 37,
        "./query": 44,
        "./tableRecord": 48,
        "lodash.clonedeep": 10,
        "lodash/isInteger": 21
    }],
    48: [function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, i = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(), u = t("./baas"), a = (t("./baasRequest").baasRequest, t("./constants")), c = t("./geoPoint"),
            s = t("./geoPolygon"), f = t("lodash.clonedeep"), l = (u._config.API, function () {
                function t(e, n) {
                    r(this, t), this._tableID = e, this._recordID = n, this._record = {}
                }

                return i(t, [{
                    key: "set", value: function () {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        if (1 === e.length) {
                            if ("object" !== o(e[0])) throw new Error(a.MSG.ARGS_ERROR);
                            var r = e[0], i = {};
                            Object.keys(e[0]).forEach(function (t) {
                                i[t] = r[t] instanceof c || r[t] instanceof s ? r[t].toGeoJSON() : r[t]
                            }), this._record = i
                        } else {
                            if (2 !== e.length) throw new Error(a.MSG.ARGS_ERROR);
                            this._record[e[0]] = e[1] instanceof c || e[1] instanceof s ? e[1].toGeoJSON() : e[1]
                        }
                        return this
                    }
                }, {
                    key: "save", value: function () {
                        var t = f(this._record);
                        return this._record = {}, u.createRecord({tableID: this._tableID, data: t})
                    }
                }, {
                    key: "update", value: function () {
                        var t = f(this._record);
                        return this._record = {}, u.updateRecord({
                            tableID: this._tableID,
                            recordID: this._recordID,
                            data: t
                        })
                    }
                }, {
                    key: "incrementBy", value: function (t, e) {
                        return this._record[t] = {$incr_by: e}, this
                    }
                }, {
                    key: "append", value: function (t, e) {
                        return e instanceof Array || (e = [e]), this._record[t] = {$append: e}, this
                    }
                }, {
                    key: "uAppend", value: function (t, e) {
                        return e instanceof Array || (e = [e]), this._record[t] = {$append_unique: e}, this
                    }
                }, {
                    key: "remove", value: function (t, e) {
                        return e instanceof Array || (e = [e]), this._record[t] = {$remove: e}, this
                    }
                }]), t
            }());
        e.exports = l
    }, {
        "./baas": 33,
        "./baasRequest": 34,
        "./constants": 37,
        "./geoPoint": 38,
        "./geoPolygon": 39,
        "lodash.clonedeep": 10
    }],
    49: [function (t, e, n) {
        "use strict";

        function r(t) {
            if (!t) throw new Error(i.MSG.ARGS_ERROR);
            var e = {};
            return e.submission_type = "form_id", e.submission_value = t, e
        }

        var o = t("./baasRequest").baasRequest, i = t("./constants"), u = t("./baas"), a = t("./promise"),
            c = u._config.API, s = function (t) {
                var e = r(t);
                return o({url: c.TEMPLATE_MESSAGE, method: "POST", data: e}).then(function (t) {
                    return new a(function (e, n) {
                        return e(t)
                    }, function (t) {
                        return reject(t)
                    })
                }, function (t) {
                    throw new Error(t)
                })
            };
        e.exports = {makeParams: r, wxReportTicket: s}
    }, {"./baas": 33, "./baasRequest": 34, "./constants": 37, "./promise": 43}],
    50: [function (t, e, n) {
        "use strict";
        var r = t("./utils"), o = t("./baasRequest").baasRequest, i = t("./baas"), u = i._config.API_HOST,
            a = i._config.API, c = t("./constants"), s = t("./promise"), f = function (t, e) {
                i._config.CLIENT_ID || e("未初始化客户端"), i.getAuthToken() || e("未认证，请先完成用户登录")
            }, l = function (t) {
                return o({url: u + a.UPLOAD, method: "POST", data: {filename: t}}).then(function (t) {
                    return new s(function (e, n) {
                        return e(t)
                    }, function (t) {
                        return reject(t)
                    })
                }, function (t) {
                    throw new Error(t)
                })
            }, h = function (t, e, n) {
                return wx.uploadFile({
                    url: t.uploadUrl,
                    filePath: t.filePath,
                    name: c.UPLOAD.UPLOAD_FILE_KEY,
                    formData: {authorization: t.authorization, policy: t.policy},
                    header: {
                        Authorization: c.UPLOAD.HEADER_AUTH_VALUE + i.getAuthToken(),
                        "X-Hydrogen-Client-Version": i._config.VERSION,
                        "X-Hydrogen-Client-Platform": r.getSysPlatform(),
                        "X-Hydrogen-Client-ID": i._config.CLIENT_ID,
                        "User-Agent": c.UPLOAD.UA
                    },
                    success: function (n) {
                        var r = {}, o = JSON.parse(n.data);
                        r.status = "ok", r.path = t.destLink, r.file = {
                            id: t.id,
                            name: t.fileName,
                            created_at: o.time,
                            mime_type: o.mimetype,
                            cdn_path: o.url,
                            size: o.file_size
                        }, delete n.data, n.data = JSON.stringify(r), e(n)
                    },
                    fail: function (t) {
                        n(t)
                    }
                })
            }, d = function (t) {
                return new s(function (e, n) {
                    f(0, n);
                    var o = r.getFileNameFromPath(t.filePath);
                    return l(o).then(function (r) {
                        var i = {
                            id: r.data.id,
                            fileName: o,
                            policy: r.data.policy,
                            authorization: r.data.authorization,
                            uploadUrl: r.data.upload_url,
                            filePath: t.filePath,
                            destLink: r.data.file_link
                        };
                        return h(i, e, n)
                    })
                }, function (t) {
                    throw new Error(t)
                })
            };
        e.exports = d
    }, {"./baas": 33, "./baasRequest": 34, "./constants": 37, "./promise": 43, "./utils": 52}],
    51: [function (t, e, n) {
        "use strict";
        var r = t("./baas"), o = t("./constants"), i = t("./promise"), u = t("./request"), a = t("./storage"),
            c = (t("./utils"), r._config.API), s = !1, f = [], l = [], h = !1, d = [], p = [], y = function (t, e, n) {
                return u({url: c.INIT, method: "POST", data: {code: t}}).then(function (t) {
                    t.statusCode == o.STATUS_CODE.CREATED ? (a.set(o.STORAGE_KEY.UID, t.data.user_id), a.set(o.STORAGE_KEY.OPENID, t.data.openid || ""), a.set(o.STORAGE_KEY.UNIONID, t.data.unionid || ""), a.set(o.STORAGE_KEY.AUTH_TOKEN, t.data.token), e(t)) : n(o.MSG.CONFIG_ERROR)
                }, function (t) {
                    n(t)
                })
            }, b = function () {
                return new i(function (t, e) {
                    wx.login({
                        success: function (n) {
                            return y(n.code, t, e)
                        }, fail: function (t) {
                            e(t)
                        }
                    })
                })
            }, v = function () {
                return arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? _() : a.get(o.STORAGE_KEY.USERINFO) ? new i(function (t, e) {
                    t(g())
                }) : s ? new i(function (t, e) {
                    f.push(t), l.push(e)
                }) : (s = !0, new i(function (t, e) {
                    f.push(t), l.push(e), _().then(function () {
                        return R().then(function () {
                            s = !1, E()
                        }, function (t) {
                            s = !1, w()
                        }).catch(function () {
                            m()
                        })
                    }, function () {
                        throw new Error(o.MSG.CONFIG_ERROR)
                    }).catch(function (t) {
                        m(t)
                    })
                }))
            }, _ = function () {
                return a.get(o.STORAGE_KEY.UID) ? new i(function (t, e) {
                    t(g(!1))
                }) : h ? new i(function (t, e) {
                    d.push(t), p.push(e)
                }) : (h = !0, new i(function (t, e) {
                    return d.push(t), p.push(e), b().then(function () {
                        h = !1, E(!1)
                    }, function (t) {
                        h = !1, w(!1)
                    }).catch(function (t) {
                        m(!1)
                    })
                }))
            }, g = function () {
                return arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? {
                    id: a.get(o.STORAGE_KEY.UID),
                    openid: a.get(o.STORAGE_KEY.OPENID),
                    unionid: a.get(o.STORAGE_KEY.UNIONID)
                } : a.get(o.STORAGE_KEY.USERINFO)
            }, E = function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                setTimeout(function () {
                    if (t) for (; f.length;) f.shift()(g()); else for (; d.length;) d.shift()(g(!1))
                }, 0)
            }, w = function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                setTimeout(function () {
                    if (t) for (; l.length;) l.shift()(g(!1)); else for (; p.length;) throw p.shift()(), new Error(o.MSG.CONFIG_ERROR)
                }, 0)
            }, m = function () {
                throw arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? h = !1 : s = !1, new Error(o.MSG.CONFIG_ERROR)
            }, O = function () {
                return r.check(), u({url: c.LOGOUT, method: "POST"}).then(function (t) {
                    if (t.statusCode != o.STATUS_CODE.CREATED) throw new Error(o.MSG.STATUS_CODE_ERROR);
                    r.clearSession()
                }, function (t) {
                    throw new Error(t)
                })
            }, R = function () {
                if (!r.getAuthToken()) throw new Error("未认证客户端");
                return new i(function (t, e) {
                    wx.getUserInfo({
                        success: function (n) {
                            var r = {rawData: n.rawData, signature: n.signature, encryptedData: n.encryptedData, iv: n.iv},
                                i = n.userInfo;
                            return i.id = a.get(o.STORAGE_KEY.UID), i.openid = a.get(o.STORAGE_KEY.OPENID), i.unionid = a.get(o.STORAGE_KEY.UNIONID), a.set(o.STORAGE_KEY.USERINFO, i), T(r, t, e)
                        }, fail: function (t) {
                            e("")
                        }
                    })
                })
            }, T = function (t, e, n) {
                return u({url: c.LOGIN, method: "POST", data: t}).then(function (t) {
                    t.statusCode == o.STATUS_CODE.CREATED ? (a.set(o.STORAGE_KEY.IS_LOGINED_BAAS, "1"), e(t)) : n(o.MSG.STATUS_CODE_ERROR)
                }, function (t) {
                    n(t)
                })
            };
        e.exports = {auth: b, login: v, logout: O}
    }, {"./baas": 33, "./constants": 37, "./promise": 43, "./request": 45, "./storage": 46, "./utils": 52}],
    52: [function (t, e, n) {
        "use strict";
        var r = t("node.extend"), o = void 0;
        try {
            o = t("./config.js")
        } catch (e) {
            o = t("./config.dev")
        }
        var i = function () {
            return o
        }, u = function () {
            var t = "UNKNOWN";
            try {
                t = wx.getSystemInfoSync().platform
            } catch (t) {
            }
            return t
        }, a = function (t) {
            "undefined" != typeof BaaS && BaaS.test || !i().DEBUG || console.log("BaaS LOG: " + t)
        }, c = function (t, e) {
            e = e || {};
            for (var n in e) {
                var r = new RegExp(":" + n, "g");
                t = t.replace(r, e[n])
            }
            return t.replace(/([^:])\/\//g, function (t, e) {
                return e + "/"
            })
        }, s = function (t, e) {
            return t.replace(/:(\w*)/g, function (t, n) {
                void 0 !== e[n] && delete e[n]
            }), e
        }, f = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                contentGroupID: "content_group_id",
                categoryID: "category_id",
                recordID: "id",
                submissionType: "submission_type",
                submissionValue: "submission_value"
            }, o = r({}, e);
            return Object.keys(e).map(function (t) {
                Object.keys(n).map(function (r) {
                    if (t.startsWith(r)) {
                        var i = t.replace(r, n[r]);
                        delete o[t], o[i] = e[t]
                    }
                })
            }), o
        }, l = function (t) {
            var e = t.lastIndexOf("/");
            return t.slice(e + 1)
        }, h = function (t) {
            var e = [], n = t.toString(), r = n.lastIndexOf("/");
            return e.push(n.substring(1, r)), r !== n.length - 1 && e.push(n.substring(r + 1)), e
        };
        e.exports = {
            log: a,
            format: c,
            excludeParams: s,
            getConfig: i,
            getSysPlatform: u,
            replaceQueryParams: f,
            getFileNameFromPath: l,
            parseRegExp: h
        }
    }, {"./config.dev": 35, "./config.js": 36, "node.extend": 29}],
    53: [function (t, e, n) {
        "use strict";
        e.exports = "v1.1.1"
    }, {}],
    54: [function (t, e, n) {
        "use strict";
        var r = t("./baas"), o = t("./baasRequest").baasRequest, i = t("./constants"), u = t("./promise"),
            a = r._config.API, c = function () {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                if (!s(e)) throw new Error(i.MSG.ARGS_ERROR);
                var r = {encryptedData: e[0], iv: e[1]};
                return o({url: a.DECRYPT + e[2] + "/", method: "POST", data: r}).then(function (t) {
                    var e = t.statusCode;
                    return new u(function (n, r) {
                        return 401 === e ? r(new Error("用户未登录 or session_key 过期")) : 403 === e ? r(new Error("微信解密插件未开启")) : 400 === e ? r(new Error("提交的解密信息有错")) : n(t.data)
                    })
                })
            }, s = function (t) {
                return !(!t instanceof Array || t.length < 3) && ["we-run-data", "open-gid", "phone-number"].includes(t[2])
            };
        e.exports = c
    }, {"./baas": 33, "./baasRequest": 34, "./constants": 37, "./promise": 43}]
}, {}, [40]);