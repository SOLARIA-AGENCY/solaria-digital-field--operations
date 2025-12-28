import { u as bt, j as t, a as Ve, b as vt, Q as Zy, c as Fy } from "./query-DLyDlFaC.js";
import { a as Jy, b as $y, g as Py, R as $n, r as M, N as Iy, u as ft, c as Wy, O as ev, d as wa, e as tv, f as sv, h as $e, i as Jp, B as av } from "./vendor-CFU3bAyq.js";
import { c as lv } from "./charts-50EEFGeC.js";
(function () { const n = document.createElement("link").relList; if (n && n.supports && n.supports("modulepreload"))
    return; for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
    c(u); new MutationObserver(u => { for (const m of u)
    if (m.type === "childList")
        for (const h of m.addedNodes)
            h.tagName === "LINK" && h.rel === "modulepreload" && c(h); }).observe(document, { childList: !0, subtree: !0 }); function i(u) { const m = {}; return u.integrity && (m.integrity = u.integrity), u.referrerPolicy && (m.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? m.credentials = "include" : u.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin", m; } function c(u) { if (u.ep)
    return; u.ep = !0; const m = i(u); fetch(u.href, m); } })();
var Xd = { exports: {} }, Xn = {}, Zd = { exports: {} }, Fd = {}; /**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp;
function nv() { return lp || (lp = 1, (function (l) { function n(R, $) { var X = R.length; R.push($); e: for (; 0 < X;) {
    var we = X - 1 >>> 1, re = R[we];
    if (0 < u(re, $))
        R[we] = $, R[X] = re, X = we;
    else
        break e;
} } function i(R) { return R.length === 0 ? null : R[0]; } function c(R) { if (R.length === 0)
    return null; var $ = R[0], X = R.pop(); if (X !== $) {
    R[0] = X;
    e: for (var we = 0, re = R.length, Se = re >>> 1; we < Se;) {
        var fe = 2 * (we + 1) - 1, ae = R[fe], oe = fe + 1, Ze = R[oe];
        if (0 > u(ae, X))
            oe < re && 0 > u(Ze, ae) ? (R[we] = Ze, R[oe] = X, we = oe) : (R[we] = ae, R[fe] = X, we = fe);
        else if (oe < re && 0 > u(Ze, X))
            R[we] = Ze, R[oe] = X, we = oe;
        else
            break e;
    }
} return $; } function u(R, $) { var X = R.sortIndex - $.sortIndex; return X !== 0 ? X : R.id - $.id; } if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var m = performance;
    l.unstable_now = function () { return m.now(); };
}
else {
    var h = Date, f = h.now();
    l.unstable_now = function () { return h.now() - f; };
} var p = [], v = [], j = 1, g = null, b = 3, N = !1, S = !1, w = !1, C = !1, T = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null; function F(R) { for (var $ = i(v); $ !== null;) {
    if ($.callback === null)
        c(v);
    else if ($.startTime <= R)
        c(v), $.sortIndex = $.expirationTime, n(p, $);
    else
        break;
    $ = i(v);
} } function _(R) { if (w = !1, F(R), !S)
    if (i(p) !== null)
        S = !0, J || (J = !0, ne());
    else {
        var $ = i(v);
        $ !== null && se(_, $.startTime - R);
    } } var J = !1, U = -1, K = 5, ie = -1; function qe() { return C ? !0 : !(l.unstable_now() - ie < K); } function pe() { if (C = !1, J) {
    var R = l.unstable_now();
    ie = R;
    var $ = !0;
    try {
        e: {
            S = !1, w && (w = !1, D(U), U = -1), N = !0;
            var X = b;
            try {
                t: {
                    for (F(R), g = i(p); g !== null && !(g.expirationTime > R && qe());) {
                        var we = g.callback;
                        if (typeof we == "function") {
                            g.callback = null, b = g.priorityLevel;
                            var re = we(g.expirationTime <= R);
                            if (R = l.unstable_now(), typeof re == "function") {
                                g.callback = re, F(R), $ = !0;
                                break t;
                            }
                            g === i(p) && c(p), F(R);
                        }
                        else
                            c(p);
                        g = i(p);
                    }
                    if (g !== null)
                        $ = !0;
                    else {
                        var Se = i(v);
                        Se !== null && se(_, Se.startTime - R), $ = !1;
                    }
                }
                break e;
            }
            finally {
                g = null, b = X, N = !1;
            }
            $ = void 0;
        }
    }
    finally {
        $ ? ne() : J = !1;
    }
} } var ne; if (typeof O == "function")
    ne = function () { O(pe); };
else if (typeof MessageChannel < "u") {
    var Ke = new MessageChannel, Re = Ke.port2;
    Ke.port1.onmessage = pe, ne = function () { Re.postMessage(null); };
}
else
    ne = function () { T(pe, 0); }; function se(R, $) { U = T(function () { R(l.unstable_now()); }, $); } l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function (R) { R.callback = null; }, l.unstable_forceFrameRate = function (R) { 0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < R ? Math.floor(1e3 / R) : 5; }, l.unstable_getCurrentPriorityLevel = function () { return b; }, l.unstable_next = function (R) { switch (b) {
    case 1:
    case 2:
    case 3:
        var $ = 3;
        break;
    default: $ = b;
} var X = b; b = $; try {
    return R();
}
finally {
    b = X;
} }, l.unstable_requestPaint = function () { C = !0; }, l.unstable_runWithPriority = function (R, $) { switch (R) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: R = 3;
} var X = b; b = R; try {
    return $();
}
finally {
    b = X;
} }, l.unstable_scheduleCallback = function (R, $, X) { var we = l.unstable_now(); switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? we + X : we) : X = we, R) {
    case 1:
        var re = -1;
        break;
    case 2:
        re = 250;
        break;
    case 5:
        re = 1073741823;
        break;
    case 4:
        re = 1e4;
        break;
    default: re = 5e3;
} return re = X + re, R = { id: j++, callback: $, priorityLevel: R, startTime: X, expirationTime: re, sortIndex: -1 }, X > we ? (R.sortIndex = X, n(v, R), i(p) === null && R === i(v) && (w ? (D(U), U = -1) : w = !0, se(_, X - we))) : (R.sortIndex = re, n(p, R), S || N || (S = !0, J || (J = !0, ne()))), R; }, l.unstable_shouldYield = qe, l.unstable_wrapCallback = function (R) { var $ = b; return function () { var X = b; b = $; try {
    return R.apply(this, arguments);
}
finally {
    b = X;
} }; }; })(Fd)), Fd; }
var np;
function rv() { return np || (np = 1, Zd.exports = nv()), Zd.exports; } /**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var rp;
function iv() {
    if (rp)
        return Xn;
    rp = 1;
    var l = rv(), n = Jy(), i = $y();
    function c(e) { var s = "https://react.dev/errors/" + e; if (1 < arguments.length) {
        s += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var a = 2; a < arguments.length; a++)
            s += "&args[]=" + encodeURIComponent(arguments[a]);
    } return "Minified React error #" + e + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
    function u(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
    function m(e) { var s = e, a = e; if (e.alternate)
        for (; s.return;)
            s = s.return;
    else {
        e = s;
        do
            s = e, (s.flags & 4098) !== 0 && (a = s.return), e = s.return;
        while (e);
    } return s.tag === 3 ? a : null; }
    function h(e) { if (e.tag === 13) {
        var s = e.memoizedState;
        if (s === null && (e = e.alternate, e !== null && (s = e.memoizedState)), s !== null)
            return s.dehydrated;
    } return null; }
    function f(e) { if (e.tag === 31) {
        var s = e.memoizedState;
        if (s === null && (e = e.alternate, e !== null && (s = e.memoizedState)), s !== null)
            return s.dehydrated;
    } return null; }
    function p(e) { if (m(e) !== e)
        throw Error(c(188)); }
    function v(e) { var s = e.alternate; if (!s) {
        if (s = m(e), s === null)
            throw Error(c(188));
        return s !== e ? null : e;
    } for (var a = e, r = s;;) {
        var o = a.return;
        if (o === null)
            break;
        var d = o.alternate;
        if (d === null) {
            if (r = o.return, r !== null) {
                a = r;
                continue;
            }
            break;
        }
        if (o.child === d.child) {
            for (d = o.child; d;) {
                if (d === a)
                    return p(o), e;
                if (d === r)
                    return p(o), s;
                d = d.sibling;
            }
            throw Error(c(188));
        }
        if (a.return !== r.return)
            a = o, r = d;
        else {
            for (var x = !1, y = o.child; y;) {
                if (y === a) {
                    x = !0, a = o, r = d;
                    break;
                }
                if (y === r) {
                    x = !0, r = o, a = d;
                    break;
                }
                y = y.sibling;
            }
            if (!x) {
                for (y = d.child; y;) {
                    if (y === a) {
                        x = !0, a = d, r = o;
                        break;
                    }
                    if (y === r) {
                        x = !0, r = d, a = o;
                        break;
                    }
                    y = y.sibling;
                }
                if (!x)
                    throw Error(c(189));
            }
        }
        if (a.alternate !== r)
            throw Error(c(190));
    } if (a.tag !== 3)
        throw Error(c(188)); return a.stateNode.current === a ? e : s; }
    function j(e) { var s = e.tag; if (s === 5 || s === 26 || s === 27 || s === 6)
        return e; for (e = e.child; e !== null;) {
        if (s = j(e), s !== null)
            return s;
        e = e.sibling;
    } return null; }
    var g = Object.assign, b = Symbol.for("react.element"), N = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), O = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), qe = Symbol.for("react.memo_cache_sentinel"), pe = Symbol.iterator;
    function ne(e) { return e === null || typeof e != "object" ? null : (e = pe && e[pe] || e["@@iterator"], typeof e == "function" ? e : null); }
    var Ke = Symbol.for("react.client.reference");
    function Re(e) { if (e == null)
        return null; if (typeof e == "function")
        return e.$$typeof === Ke ? null : e.displayName || e.name || null; if (typeof e == "string")
        return e; switch (e) {
        case w: return "Fragment";
        case T: return "Profiler";
        case C: return "StrictMode";
        case _: return "Suspense";
        case J: return "SuspenseList";
        case ie: return "Activity";
    } if (typeof e == "object")
        switch (e.$$typeof) {
            case S: return "Portal";
            case O: return e.displayName || "Context";
            case D: return (e._context.displayName || "Context") + ".Consumer";
            case F:
                var s = e.render;
                return e = e.displayName, e || (e = s.displayName || s.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case U: return s = e.displayName || null, s !== null ? s : Re(e.type) || "Memo";
            case K:
                s = e._payload, e = e._init;
                try {
                    return Re(e(s));
                }
                catch { }
        } return null; }
    var se = Array.isArray, R = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = { pending: !1, data: null, method: null, action: null }, we = [], re = -1;
    function Se(e) { return { current: e }; }
    function fe(e) { 0 > re || (e.current = we[re], we[re] = null, re--); }
    function ae(e, s) { re++, we[re] = e.current, e.current = s; }
    var oe = Se(null), Ze = Se(null), at = Se(null), Ue = Se(null);
    function ka(e, s) { switch (ae(at, s), ae(Ze, e), ae(oe, null), s.nodeType) {
        case 9:
        case 11:
            e = (e = s.documentElement) && (e = e.namespaceURI) ? Ax(e) : 0;
            break;
        default: if (e = s.tagName, s = s.namespaceURI)
            s = Ax(s), e = Tx(s, e);
        else
            switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default: e = 0;
            }
    } fe(oe), ae(oe, e); }
    function as() { fe(oe), fe(Ze), fe(at); }
    function Qs(e) { e.memoizedState !== null && ae(Ue, e); var s = oe.current, a = Tx(s, e.type); s !== a && (ae(Ze, e), ae(oe, a)); }
    function Ks(e) { Ze.current === e && (fe(oe), fe(Ze)), Ue.current === e && (fe(Ue), Gn._currentValue = X); }
    var Ys, sm;
    function Ca(e) {
        if (Ys === void 0)
            try {
                throw Error();
            }
            catch (a) {
                var s = a.stack.trim().match(/\n( *(at )?)/);
                Ys = s && s[1] || "", sm = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
        return `
` + Ys + e + sm;
    }
    var Tc = !1;
    function Ec(e, s) {
        if (!e || Tc)
            return "";
        Tc = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = { DetermineComponentFrameRoot: function () { try {
                    if (s) {
                        var Y = function () { throw Error(); };
                        if (Object.defineProperty(Y.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                            try {
                                Reflect.construct(Y, []);
                            }
                            catch (H) {
                                var q = H;
                            }
                            Reflect.construct(e, [], Y);
                        }
                        else {
                            try {
                                Y.call();
                            }
                            catch (H) {
                                q = H;
                            }
                            e.call(Y.prototype);
                        }
                    }
                    else {
                        try {
                            throw Error();
                        }
                        catch (H) {
                            q = H;
                        }
                        (Y = e()) && typeof Y.catch == "function" && Y.catch(function () { });
                    }
                }
                catch (H) {
                    if (H && q && typeof H.stack == "string")
                        return [H.stack, q.stack];
                } return [null, null]; } };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            o && o.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
            var d = r.DetermineComponentFrameRoot(), x = d[0], y = d[1];
            if (x && y) {
                var k = x.split(`
`), B = y.split(`
`);
                for (o = r = 0; r < k.length && !k[r].includes("DetermineComponentFrameRoot");)
                    r++;
                for (; o < B.length && !B[o].includes("DetermineComponentFrameRoot");)
                    o++;
                if (r === k.length || o === B.length)
                    for (r = k.length - 1, o = B.length - 1; 1 <= r && 0 <= o && k[r] !== B[o];)
                        o--;
                for (; 1 <= r && 0 <= o; r--, o--)
                    if (k[r] !== B[o]) {
                        if (r !== 1 || o !== 1)
                            do
                                if (r--, o--, 0 > o || k[r] !== B[o]) {
                                    var G = `
` + k[r].replace(" at new ", " at ");
                                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), G;
                                }
                            while (1 <= r && 0 <= o);
                        break;
                    }
            }
        }
        finally {
            Tc = !1, Error.prepareStackTrace = a;
        }
        return (a = e ? e.displayName || e.name : "") ? Ca(a) : "";
    }
    function S0(e, s) { switch (e.tag) {
        case 26:
        case 27:
        case 5: return Ca(e.type);
        case 16: return Ca("Lazy");
        case 13: return e.child !== s && s !== null ? Ca("Suspense Fallback") : Ca("Suspense");
        case 19: return Ca("SuspenseList");
        case 0:
        case 15: return Ec(e.type, !1);
        case 11: return Ec(e.type.render, !1);
        case 1: return Ec(e.type, !0);
        case 31: return Ca("Activity");
        default: return "";
    } }
    function am(e) {
        try {
            var s = "", a = null;
            do
                s += S0(e, a), a = e, e = e.return;
            while (e);
            return s;
        }
        catch (r) {
            return `
Error generating stack: ` + r.message + `
` + r.stack;
        }
    }
    var Mc = Object.prototype.hasOwnProperty, Dc = l.unstable_scheduleCallback, _c = l.unstable_cancelCallback, k0 = l.unstable_shouldYield, C0 = l.unstable_requestPaint, Mt = l.unstable_now, A0 = l.unstable_getCurrentPriorityLevel, lm = l.unstable_ImmediatePriority, nm = l.unstable_UserBlockingPriority, gr = l.unstable_NormalPriority, T0 = l.unstable_LowPriority, rm = l.unstable_IdlePriority, E0 = l.log, M0 = l.unstable_setDisableYieldValue, Wl = null, Dt = null;
    function Xs(e) { if (typeof E0 == "function" && M0(e), Dt && typeof Dt.setStrictMode == "function")
        try {
            Dt.setStrictMode(Wl, e);
        }
        catch { } }
    var _t = Math.clz32 ? Math.clz32 : O0, D0 = Math.log, _0 = Math.LN2;
    function O0(e) { return e >>>= 0, e === 0 ? 32 : 31 - (D0(e) / _0 | 0) | 0; }
    var br = 256, yr = 262144, vr = 4194304;
    function Aa(e) { var s = e & 42; if (s !== 0)
        return s; switch (e & -e) {
        case 1: return 1;
        case 2: return 2;
        case 4: return 4;
        case 8: return 8;
        case 16: return 16;
        case 32: return 32;
        case 64: return 64;
        case 128: return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072: return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152: return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432: return e & 62914560;
        case 67108864: return 67108864;
        case 134217728: return 134217728;
        case 268435456: return 268435456;
        case 536870912: return 536870912;
        case 1073741824: return 0;
        default: return e;
    } }
    function jr(e, s, a) { var r = e.pendingLanes; if (r === 0)
        return 0; var o = 0, d = e.suspendedLanes, x = e.pingedLanes; e = e.warmLanes; var y = r & 134217727; return y !== 0 ? (r = y & ~d, r !== 0 ? o = Aa(r) : (x &= y, x !== 0 ? o = Aa(x) : a || (a = y & ~e, a !== 0 && (o = Aa(a))))) : (y = r & ~d, y !== 0 ? o = Aa(y) : x !== 0 ? o = Aa(x) : a || (a = r & ~e, a !== 0 && (o = Aa(a)))), o === 0 ? 0 : s !== 0 && s !== o && (s & d) === 0 && (d = o & -o, a = s & -s, d >= a || d === 32 && (a & 4194048) !== 0) ? s : o; }
    function en(e, s) { return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & s) === 0; }
    function z0(e, s) { switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64: return s + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152: return s + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432: return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824: return -1;
        default: return -1;
    } }
    function im() { var e = vr; return vr <<= 1, (vr & 62914560) === 0 && (vr = 4194304), e; }
    function Oc(e) { for (var s = [], a = 0; 31 > a; a++)
        s.push(e); return s; }
    function tn(e, s) { e.pendingLanes |= s, s !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0); }
    function R0(e, s, a, r, o, d) { var x = e.pendingLanes; e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0; var y = e.entanglements, k = e.expirationTimes, B = e.hiddenUpdates; for (a = x & ~a; 0 < a;) {
        var G = 31 - _t(a), Y = 1 << G;
        y[G] = 0, k[G] = -1;
        var q = B[G];
        if (q !== null)
            for (B[G] = null, G = 0; G < q.length; G++) {
                var H = q[G];
                H !== null && (H.lane &= -536870913);
            }
        a &= ~Y;
    } r !== 0 && cm(e, r, 0), d !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(x & ~s)); }
    function cm(e, s, a) { e.pendingLanes |= s, e.suspendedLanes &= ~s; var r = 31 - _t(s); e.entangledLanes |= s, e.entanglements[r] = e.entanglements[r] | 1073741824 | a & 261930; }
    function om(e, s) { var a = e.entangledLanes |= s; for (e = e.entanglements; a;) {
        var r = 31 - _t(a), o = 1 << r;
        o & s | e[r] & s && (e[r] |= s), a &= ~o;
    } }
    function dm(e, s) { var a = s & -s; return a = (a & 42) !== 0 ? 1 : zc(a), (a & (e.suspendedLanes | s)) !== 0 ? 0 : a; }
    function zc(e) { switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default: e = 0;
    } return e; }
    function Rc(e) { return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2; }
    function um() { var e = $.p; return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Px(e.type)); }
    function mm(e, s) { var a = $.p; try {
        return $.p = e, s();
    }
    finally {
        $.p = a;
    } }
    var Zs = Math.random().toString(36).slice(2), ot = "__reactFiber$" + Zs, jt = "__reactProps$" + Zs, tl = "__reactContainer$" + Zs, Bc = "__reactEvents$" + Zs, B0 = "__reactListeners$" + Zs, q0 = "__reactHandles$" + Zs, hm = "__reactResources$" + Zs, sn = "__reactMarker$" + Zs;
    function qc(e) { delete e[ot], delete e[jt], delete e[Bc], delete e[B0], delete e[q0]; }
    function sl(e) { var s = e[ot]; if (s)
        return s; for (var a = e.parentNode; a;) {
        if (s = a[tl] || a[ot]) {
            if (a = s.alternate, s.child !== null || a !== null && a.child !== null)
                for (e = Rx(e); e !== null;) {
                    if (a = e[ot])
                        return a;
                    e = Rx(e);
                }
            return s;
        }
        e = a, a = e.parentNode;
    } return null; }
    function al(e) { if (e = e[ot] || e[tl]) {
        var s = e.tag;
        if (s === 5 || s === 6 || s === 13 || s === 31 || s === 26 || s === 27 || s === 3)
            return e;
    } return null; }
    function an(e) { var s = e.tag; if (s === 5 || s === 26 || s === 27 || s === 6)
        return e.stateNode; throw Error(c(33)); }
    function ll(e) { var s = e[hm]; return s || (s = e[hm] = { hoistableStyles: new Map, hoistableScripts: new Map }), s; }
    function it(e) { e[sn] = !0; }
    var fm = new Set, xm = {};
    function Ta(e, s) { nl(e, s), nl(e + "Capture", s); }
    function nl(e, s) { for (xm[e] = s, e = 0; e < s.length; e++)
        fm.add(s[e]); }
    var U0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), pm = {}, gm = {};
    function L0(e) { return Mc.call(gm, e) ? !0 : Mc.call(pm, e) ? !1 : U0.test(e) ? gm[e] = !0 : (pm[e] = !0, !1); }
    function Nr(e, s, a) { if (L0(s))
        if (a === null)
            e.removeAttribute(s);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(s);
                    return;
                case "boolean":
                    var r = s.toLowerCase().slice(0, 5);
                    if (r !== "data-" && r !== "aria-") {
                        e.removeAttribute(s);
                        return;
                    }
            }
            e.setAttribute(s, "" + a);
        } }
    function wr(e, s, a) { if (a === null)
        e.removeAttribute(s);
    else {
        switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(s);
                return;
        }
        e.setAttribute(s, "" + a);
    } }
    function Ns(e, s, a, r) { if (r === null)
        e.removeAttribute(a);
    else {
        switch (typeof r) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(a);
                return;
        }
        e.setAttributeNS(s, a, "" + r);
    } }
    function Kt(e) { switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined": return e;
        case "object": return e;
        default: return "";
    } }
    function bm(e) { var s = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (s === "checkbox" || s === "radio"); }
    function H0(e, s, a) { var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, s); if (!e.hasOwnProperty(s) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var o = r.get, d = r.set;
        return Object.defineProperty(e, s, { configurable: !0, get: function () { return o.call(this); }, set: function (x) { a = "" + x, d.call(this, x); } }), Object.defineProperty(e, s, { enumerable: r.enumerable }), { getValue: function () { return a; }, setValue: function (x) { a = "" + x; }, stopTracking: function () { e._valueTracker = null, delete e[s]; } };
    } }
    function Uc(e) { if (!e._valueTracker) {
        var s = bm(e) ? "checked" : "value";
        e._valueTracker = H0(e, s, "" + e[s]);
    } }
    function ym(e) { if (!e)
        return !1; var s = e._valueTracker; if (!s)
        return !0; var a = s.getValue(), r = ""; return e && (r = bm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== a ? (s.setValue(e), !0) : !1; }
    function Sr(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null; try {
        return e.activeElement || e.body;
    }
    catch {
        return e.body;
    } }
    var V0 = /[\n"\\]/g;
    function Yt(e) { return e.replace(V0, function (s) { return "\\" + s.charCodeAt(0).toString(16) + " "; }); }
    function Lc(e, s, a, r, o, d, x, y) { e.name = "", x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? e.type = x : e.removeAttribute("type"), s != null ? x === "number" ? (s === 0 && e.value === "" || e.value != s) && (e.value = "" + Kt(s)) : e.value !== "" + Kt(s) && (e.value = "" + Kt(s)) : x !== "submit" && x !== "reset" || e.removeAttribute("value"), s != null ? Hc(e, x, Kt(s)) : a != null ? Hc(e, x, Kt(a)) : r != null && e.removeAttribute("value"), o == null && d != null && (e.defaultChecked = !!d), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Kt(y) : e.removeAttribute("name"); }
    function vm(e, s, a, r, o, d, x, y) { if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), s != null || a != null) {
        if (!(d !== "submit" && d !== "reset" || s != null)) {
            Uc(e);
            return;
        }
        a = a != null ? "" + Kt(a) : "", s = s != null ? "" + Kt(s) : a, y || s === e.value || (e.value = s), e.defaultValue = s;
    } r = r ?? o, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = y ? e.checked : !!r, e.defaultChecked = !!r, x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" && (e.name = x), Uc(e); }
    function Hc(e, s, a) { s === "number" && Sr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a); }
    function rl(e, s, a, r) { if (e = e.options, s) {
        s = {};
        for (var o = 0; o < a.length; o++)
            s["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
            o = s.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && r && (e[a].defaultSelected = !0);
    }
    else {
        for (a = "" + Kt(a), s = null, o = 0; o < e.length; o++) {
            if (e[o].value === a) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return;
            }
            s !== null || e[o].disabled || (s = e[o]);
        }
        s !== null && (s.selected = !0);
    } }
    function jm(e, s, a) { if (s != null && (s = "" + Kt(s), s !== e.value && (e.value = s), a == null)) {
        e.defaultValue !== s && (e.defaultValue = s);
        return;
    } e.defaultValue = a != null ? "" + Kt(a) : ""; }
    function Nm(e, s, a, r) { if (s == null) {
        if (r != null) {
            if (a != null)
                throw Error(c(92));
            if (se(r)) {
                if (1 < r.length)
                    throw Error(c(93));
                r = r[0];
            }
            a = r;
        }
        a == null && (a = ""), s = a;
    } a = Kt(s), e.defaultValue = a, r = e.textContent, r === a && r !== "" && r !== null && (e.value = r), Uc(e); }
    function il(e, s) { if (s) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
            a.nodeValue = s;
            return;
        }
    } e.textContent = s; }
    var G0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function wm(e, s, a) { var r = s.indexOf("--") === 0; a == null || typeof a == "boolean" || a === "" ? r ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "" : r ? e.setProperty(s, a) : typeof a != "number" || a === 0 || G0.has(s) ? s === "float" ? e.cssFloat = a : e[s] = ("" + a).trim() : e[s] = a + "px"; }
    function Sm(e, s, a) { if (s != null && typeof s != "object")
        throw Error(c(62)); if (e = e.style, a != null) {
        for (var r in a)
            !a.hasOwnProperty(r) || s != null && s.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
        for (var o in s)
            r = s[o], s.hasOwnProperty(o) && a[o] !== r && wm(e, o, r);
    }
    else
        for (var d in s)
            s.hasOwnProperty(d) && wm(e, d, s[d]); }
    function Vc(e) { if (e.indexOf("-") === -1)
        return !1; switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph": return !1;
        default: return !0;
    } }
    var Q0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), K0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function kr(e) { return K0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e; }
    function ws() { }
    var Gc = null;
    function Qc(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
    var cl = null, ol = null;
    function km(e) { var s = al(e); if (s && (e = s.stateNode)) {
        var a = e[jt] || null;
        e: switch (e = s.stateNode, s.type) {
            case "input":
                if (Lc(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), s = a.name, a.type === "radio" && s != null) {
                    for (a = e; a.parentNode;)
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + Yt("" + s) + '"][type="radio"]'), s = 0; s < a.length; s++) {
                        var r = a[s];
                        if (r !== e && r.form === e.form) {
                            var o = r[jt] || null;
                            if (!o)
                                throw Error(c(90));
                            Lc(r, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
                        }
                    }
                    for (s = 0; s < a.length; s++)
                        r = a[s], r.form === e.form && ym(r);
                }
                break e;
            case "textarea":
                jm(e, a.value, a.defaultValue);
                break e;
            case "select": s = a.value, s != null && rl(e, !!a.multiple, s, !1);
        }
    } }
    var Kc = !1;
    function Cm(e, s, a) { if (Kc)
        return e(s, a); Kc = !0; try {
        var r = e(s);
        return r;
    }
    finally {
        if (Kc = !1, (cl !== null || ol !== null) && (mi(), cl && (s = cl, e = ol, ol = cl = null, km(s), e)))
            for (s = 0; s < e.length; s++)
                km(e[s]);
    } }
    function ln(e, s) { var a = e.stateNode; if (a === null)
        return null; var r = a[jt] || null; if (r === null)
        return null; a = r[s]; e: switch (s) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default: e = !1;
    } if (e)
        return null; if (a && typeof a != "function")
        throw Error(c(231, s, typeof a)); return a; }
    var Ss = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yc = !1;
    if (Ss)
        try {
            var nn = {};
            Object.defineProperty(nn, "passive", { get: function () { Yc = !0; } }), window.addEventListener("test", nn, nn), window.removeEventListener("test", nn, nn);
        }
        catch {
            Yc = !1;
        }
    var Fs = null, Xc = null, Cr = null;
    function Am() { if (Cr)
        return Cr; var e, s = Xc, a = s.length, r, o = "value" in Fs ? Fs.value : Fs.textContent, d = o.length; for (e = 0; e < a && s[e] === o[e]; e++)
        ; var x = a - e; for (r = 1; r <= x && s[a - r] === o[d - r]; r++)
        ; return Cr = o.slice(e, 1 < r ? 1 - r : void 0); }
    function Ar(e) { var s = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && s === 13 && (e = 13)) : e = s, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
    function Tr() { return !0; }
    function Tm() { return !1; }
    function Nt(e) { function s(a, r, o, d, x) { this._reactName = a, this._targetInst = o, this.type = r, this.nativeEvent = d, this.target = x, this.currentTarget = null; for (var y in e)
        e.hasOwnProperty(y) && (a = e[y], this[y] = a ? a(d) : d[y]); return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Tr : Tm, this.isPropagationStopped = Tm, this; } return g(s.prototype, { preventDefault: function () { this.defaultPrevented = !0; var a = this.nativeEvent; a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Tr); }, stopPropagation: function () { var a = this.nativeEvent; a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Tr); }, persist: function () { }, isPersistent: Tr }), s; }
    var Ea = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Er = Nt(Ea), rn = g({}, Ea, { view: 0, detail: 0 }), Y0 = Nt(rn), Zc, Fc, cn, Mr = g({}, rn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $c, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== cn && (cn && e.type === "mousemove" ? (Zc = e.screenX - cn.screenX, Fc = e.screenY - cn.screenY) : Fc = Zc = 0, cn = e), Zc); }, movementY: function (e) { return "movementY" in e ? e.movementY : Fc; } }), Em = Nt(Mr), X0 = g({}, Mr, { dataTransfer: 0 }), Z0 = Nt(X0), F0 = g({}, rn, { relatedTarget: 0 }), Jc = Nt(F0), J0 = g({}, Ea, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $0 = Nt(J0), P0 = g({}, Ea, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), I0 = Nt(P0), W0 = g({}, Ea, { data: 0 }), Mm = Nt(W0), eb = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, tb = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, sb = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function ab(e) { var s = this.nativeEvent; return s.getModifierState ? s.getModifierState(e) : (e = sb[e]) ? !!s[e] : !1; }
    function $c() { return ab; }
    var lb = g({}, rn, { key: function (e) { if (e.key) {
            var s = eb[e.key] || e.key;
            if (s !== "Unidentified")
                return s;
        } return e.type === "keypress" ? (e = Ar(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tb[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $c, charCode: function (e) { return e.type === "keypress" ? Ar(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? Ar(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), nb = Nt(lb), rb = g({}, Mr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Dm = Nt(rb), ib = g({}, rn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $c }), cb = Nt(ib), ob = g({}, Ea, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), db = Nt(ob), ub = g({}, Mr, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), mb = Nt(ub), hb = g({}, Ea, { newState: 0, oldState: 0 }), fb = Nt(hb), xb = [9, 13, 27, 32], Pc = Ss && "CompositionEvent" in window, on = null;
    Ss && "documentMode" in document && (on = document.documentMode);
    var pb = Ss && "TextEvent" in window && !on, _m = Ss && (!Pc || on && 8 < on && 11 >= on), Om = " ", zm = !1;
    function Rm(e, s) { switch (e) {
        case "keyup": return xb.indexOf(s.keyCode) !== -1;
        case "keydown": return s.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout": return !0;
        default: return !1;
    } }
    function Bm(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
    var dl = !1;
    function gb(e, s) { switch (e) {
        case "compositionend": return Bm(s);
        case "keypress": return s.which !== 32 ? null : (zm = !0, Om);
        case "textInput": return e = s.data, e === Om && zm ? null : e;
        default: return null;
    } }
    function bb(e, s) { if (dl)
        return e === "compositionend" || !Pc && Rm(e, s) ? (e = Am(), Cr = Xc = Fs = null, dl = !1, e) : null; switch (e) {
        case "paste": return null;
        case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                if (s.char && 1 < s.char.length)
                    return s.char;
                if (s.which)
                    return String.fromCharCode(s.which);
            }
            return null;
        case "compositionend": return _m && s.locale !== "ko" ? null : s.data;
        default: return null;
    } }
    var yb = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
    function qm(e) { var s = e && e.nodeName && e.nodeName.toLowerCase(); return s === "input" ? !!yb[e.type] : s === "textarea"; }
    function Um(e, s, a, r) { cl ? ol ? ol.push(r) : ol = [r] : cl = r, s = yi(s, "onChange"), 0 < s.length && (a = new Er("onChange", "change", null, a, r), e.push({ event: a, listeners: s })); }
    var dn = null, un = null;
    function vb(e) { jx(e, 0); }
    function Dr(e) { var s = an(e); if (ym(s))
        return e; }
    function Lm(e, s) { if (e === "change")
        return s; }
    var Hm = !1;
    if (Ss) {
        var Ic;
        if (Ss) {
            var Wc = "oninput" in document;
            if (!Wc) {
                var Vm = document.createElement("div");
                Vm.setAttribute("oninput", "return;"), Wc = typeof Vm.oninput == "function";
            }
            Ic = Wc;
        }
        else
            Ic = !1;
        Hm = Ic && (!document.documentMode || 9 < document.documentMode);
    }
    function Gm() { dn && (dn.detachEvent("onpropertychange", Qm), un = dn = null); }
    function Qm(e) { if (e.propertyName === "value" && Dr(un)) {
        var s = [];
        Um(s, un, e, Qc(e)), Cm(vb, s);
    } }
    function jb(e, s, a) { e === "focusin" ? (Gm(), dn = s, un = a, dn.attachEvent("onpropertychange", Qm)) : e === "focusout" && Gm(); }
    function Nb(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Dr(un); }
    function wb(e, s) { if (e === "click")
        return Dr(s); }
    function Sb(e, s) { if (e === "input" || e === "change")
        return Dr(s); }
    function kb(e, s) { return e === s && (e !== 0 || 1 / e === 1 / s) || e !== e && s !== s; }
    var Ot = typeof Object.is == "function" ? Object.is : kb;
    function mn(e, s) { if (Ot(e, s))
        return !0; if (typeof e != "object" || e === null || typeof s != "object" || s === null)
        return !1; var a = Object.keys(e), r = Object.keys(s); if (a.length !== r.length)
        return !1; for (r = 0; r < a.length; r++) {
        var o = a[r];
        if (!Mc.call(s, o) || !Ot(e[o], s[o]))
            return !1;
    } return !0; }
    function Km(e) { for (; e && e.firstChild;)
        e = e.firstChild; return e; }
    function Ym(e, s) { var a = Km(e); e = 0; for (var r; a;) {
        if (a.nodeType === 3) {
            if (r = e + a.textContent.length, e <= s && r >= s)
                return { node: a, offset: s - e };
            e = r;
        }
        e: {
            for (; a;) {
                if (a.nextSibling) {
                    a = a.nextSibling;
                    break e;
                }
                a = a.parentNode;
            }
            a = void 0;
        }
        a = Km(a);
    } }
    function Xm(e, s) { return e && s ? e === s ? !0 : e && e.nodeType === 3 ? !1 : s && s.nodeType === 3 ? Xm(e, s.parentNode) : "contains" in e ? e.contains(s) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(s) & 16) : !1 : !1; }
    function Zm(e) { e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window; for (var s = Sr(e.document); s instanceof e.HTMLIFrameElement;) {
        try {
            var a = typeof s.contentWindow.location.href == "string";
        }
        catch {
            a = !1;
        }
        if (a)
            e = s.contentWindow;
        else
            break;
        s = Sr(e.document);
    } return s; }
    function eo(e) { var s = e && e.nodeName && e.nodeName.toLowerCase(); return s && (s === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || s === "textarea" || e.contentEditable === "true"); }
    var Cb = Ss && "documentMode" in document && 11 >= document.documentMode, ul = null, to = null, hn = null, so = !1;
    function Fm(e, s, a) { var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument; so || ul == null || ul !== Sr(r) || (r = ul, "selectionStart" in r && eo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), hn && mn(hn, r) || (hn = r, r = yi(to, "onSelect"), 0 < r.length && (s = new Er("onSelect", "select", null, s, a), e.push({ event: s, listeners: r }), s.target = ul))); }
    function Ma(e, s) { var a = {}; return a[e.toLowerCase()] = s.toLowerCase(), a["Webkit" + e] = "webkit" + s, a["Moz" + e] = "moz" + s, a; }
    var ml = { animationend: Ma("Animation", "AnimationEnd"), animationiteration: Ma("Animation", "AnimationIteration"), animationstart: Ma("Animation", "AnimationStart"), transitionrun: Ma("Transition", "TransitionRun"), transitionstart: Ma("Transition", "TransitionStart"), transitioncancel: Ma("Transition", "TransitionCancel"), transitionend: Ma("Transition", "TransitionEnd") }, ao = {}, Jm = {};
    Ss && (Jm = document.createElement("div").style, "AnimationEvent" in window || (delete ml.animationend.animation, delete ml.animationiteration.animation, delete ml.animationstart.animation), "TransitionEvent" in window || delete ml.transitionend.transition);
    function Da(e) { if (ao[e])
        return ao[e]; if (!ml[e])
        return e; var s = ml[e], a; for (a in s)
        if (s.hasOwnProperty(a) && a in Jm)
            return ao[e] = s[a]; return e; }
    var $m = Da("animationend"), Pm = Da("animationiteration"), Im = Da("animationstart"), Ab = Da("transitionrun"), Tb = Da("transitionstart"), Eb = Da("transitioncancel"), Wm = Da("transitionend"), eh = new Map, lo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    lo.push("scrollEnd");
    function ls(e, s) { eh.set(e, s), Ta(s, [e]); }
    var _r = typeof reportError == "function" ? reportError : function (e) { if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var s = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
        if (!window.dispatchEvent(s))
            return;
    }
    else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
    } console.error(e); }, Xt = [], hl = 0, no = 0;
    function Or() { for (var e = hl, s = no = hl = 0; s < e;) {
        var a = Xt[s];
        Xt[s++] = null;
        var r = Xt[s];
        Xt[s++] = null;
        var o = Xt[s];
        Xt[s++] = null;
        var d = Xt[s];
        if (Xt[s++] = null, r !== null && o !== null) {
            var x = r.pending;
            x === null ? o.next = o : (o.next = x.next, x.next = o), r.pending = o;
        }
        d !== 0 && th(a, o, d);
    } }
    function zr(e, s, a, r) { Xt[hl++] = e, Xt[hl++] = s, Xt[hl++] = a, Xt[hl++] = r, no |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r); }
    function ro(e, s, a, r) { return zr(e, s, a, r), Rr(e); }
    function _a(e, s) { return zr(e, null, null, s), Rr(e); }
    function th(e, s, a) { e.lanes |= a; var r = e.alternate; r !== null && (r.lanes |= a); for (var o = !1, d = e.return; d !== null;)
        d.childLanes |= a, r = d.alternate, r !== null && (r.childLanes |= a), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (o = !0)), e = d, d = d.return; return e.tag === 3 ? (d = e.stateNode, o && s !== null && (o = 31 - _t(a), e = d.hiddenUpdates, r = e[o], r === null ? e[o] = [s] : r.push(s), s.lane = a | 536870912), d) : null; }
    function Rr(e) { if (50 < Rn)
        throw Rn = 0, pd = null, Error(c(185)); for (var s = e.return; s !== null;)
        e = s, s = e.return; return e.tag === 3 ? e.stateNode : null; }
    var fl = {};
    function Mb(e, s, a, r) { this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
    function zt(e, s, a, r) { return new Mb(e, s, a, r); }
    function io(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
    function ks(e, s) { var a = e.alternate; return a === null ? (a = zt(e.tag, s, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = s, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, s = e.dependencies, a.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a; }
    function sh(e, s) { e.flags &= 65011714; var a = e.alternate; return a === null ? (e.childLanes = 0, e.lanes = s, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, s = a.dependencies, e.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }), e; }
    function Br(e, s, a, r, o, d) { var x = 0; if (r = e, typeof e == "function")
        io(e) && (x = 1);
    else if (typeof e == "string")
        x = Ry(e, a, oe.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
        e: switch (e) {
            case ie: return e = zt(31, a, s, o), e.elementType = ie, e.lanes = d, e;
            case w: return Oa(a.children, o, d, s);
            case C:
                x = 8, o |= 24;
                break;
            case T: return e = zt(12, a, s, o | 2), e.elementType = T, e.lanes = d, e;
            case _: return e = zt(13, a, s, o), e.elementType = _, e.lanes = d, e;
            case J: return e = zt(19, a, s, o), e.elementType = J, e.lanes = d, e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case O:
                            x = 10;
                            break e;
                        case D:
                            x = 9;
                            break e;
                        case F:
                            x = 11;
                            break e;
                        case U:
                            x = 14;
                            break e;
                        case K:
                            x = 16, r = null;
                            break e;
                    }
                x = 29, a = Error(c(130, e === null ? "null" : typeof e, "")), r = null;
        } return s = zt(x, a, s, o), s.elementType = e, s.type = r, s.lanes = d, s; }
    function Oa(e, s, a, r) { return e = zt(7, e, r, s), e.lanes = a, e; }
    function co(e, s, a) { return e = zt(6, e, null, s), e.lanes = a, e; }
    function ah(e) { var s = zt(18, null, null, 0); return s.stateNode = e, s; }
    function oo(e, s, a) { return s = zt(4, e.children !== null ? e.children : [], e.key, s), s.lanes = a, s.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, s; }
    var lh = new WeakMap;
    function Zt(e, s) { if (typeof e == "object" && e !== null) {
        var a = lh.get(e);
        return a !== void 0 ? a : (s = { value: e, source: s, stack: am(s) }, lh.set(e, s), s);
    } return { value: e, source: s, stack: am(s) }; }
    var xl = [], pl = 0, qr = null, fn = 0, Ft = [], Jt = 0, Js = null, ds = 1, us = "";
    function Cs(e, s) { xl[pl++] = fn, xl[pl++] = qr, qr = e, fn = s; }
    function nh(e, s, a) { Ft[Jt++] = ds, Ft[Jt++] = us, Ft[Jt++] = Js, Js = e; var r = ds; e = us; var o = 32 - _t(r) - 1; r &= ~(1 << o), a += 1; var d = 32 - _t(s) + o; if (30 < d) {
        var x = o - o % 5;
        d = (r & (1 << x) - 1).toString(32), r >>= x, o -= x, ds = 1 << 32 - _t(s) + o | a << o | r, us = d + e;
    }
    else
        ds = 1 << d | a << o | r, us = e; }
    function uo(e) { e.return !== null && (Cs(e, 1), nh(e, 1, 0)); }
    function mo(e) { for (; e === qr;)
        qr = xl[--pl], xl[pl] = null, fn = xl[--pl], xl[pl] = null; for (; e === Js;)
        Js = Ft[--Jt], Ft[Jt] = null, us = Ft[--Jt], Ft[Jt] = null, ds = Ft[--Jt], Ft[Jt] = null; }
    function rh(e, s) { Ft[Jt++] = ds, Ft[Jt++] = us, Ft[Jt++] = Js, ds = s.id, us = s.overflow, Js = e; }
    var dt = null, Le = null, je = !1, $s = null, $t = !1, ho = Error(c(519));
    function Ps(e) { var s = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")); throw xn(Zt(s, e)), ho; }
    function ih(e) { var s = e.stateNode, a = e.type, r = e.memoizedProps; switch (s[ot] = e, s[jt] = r, a) {
        case "dialog":
            be("cancel", s), be("close", s);
            break;
        case "iframe":
        case "object":
        case "embed":
            be("load", s);
            break;
        case "video":
        case "audio":
            for (a = 0; a < qn.length; a++)
                be(qn[a], s);
            break;
        case "source":
            be("error", s);
            break;
        case "img":
        case "image":
        case "link":
            be("error", s), be("load", s);
            break;
        case "details":
            be("toggle", s);
            break;
        case "input":
            be("invalid", s), vm(s, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
            break;
        case "select":
            be("invalid", s);
            break;
        case "textarea": be("invalid", s), Nm(s, r.value, r.defaultValue, r.children);
    } a = r.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || s.textContent === "" + a || r.suppressHydrationWarning === !0 || kx(s.textContent, a) ? (r.popover != null && (be("beforetoggle", s), be("toggle", s)), r.onScroll != null && be("scroll", s), r.onScrollEnd != null && be("scrollend", s), r.onClick != null && (s.onclick = ws), s = !0) : s = !1, s || Ps(e, !0); }
    function ch(e) { for (dt = e.return; dt;)
        switch (dt.tag) {
            case 5:
            case 31:
            case 13:
                $t = !1;
                return;
            case 27:
            case 3:
                $t = !0;
                return;
            default: dt = dt.return;
        } }
    function gl(e) { if (e !== dt)
        return !1; if (!je)
        return ch(e), je = !0, !1; var s = e.tag, a; if ((a = s !== 3 && s !== 27) && ((a = s === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Dd(e.type, e.memoizedProps)), a = !a), a && Le && Ps(e), ch(e), s === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
            throw Error(c(317));
        Le = zx(e);
    }
    else if (s === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
            throw Error(c(317));
        Le = zx(e);
    }
    else
        s === 27 ? (s = Le, ua(e.type) ? (e = Bd, Bd = null, Le = e) : Le = s) : Le = dt ? It(e.stateNode.nextSibling) : null; return !0; }
    function za() { Le = dt = null, je = !1; }
    function fo() { var e = $s; return e !== null && (Ct === null ? Ct = e : Ct.push.apply(Ct, e), $s = null), e; }
    function xn(e) { $s === null ? $s = [e] : $s.push(e); }
    var xo = Se(null), Ra = null, As = null;
    function Is(e, s, a) { ae(xo, s._currentValue), s._currentValue = a; }
    function Ts(e) { e._currentValue = xo.current, fe(xo); }
    function po(e, s, a) { for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & s) !== s ? (e.childLanes |= s, r !== null && (r.childLanes |= s)) : r !== null && (r.childLanes & s) !== s && (r.childLanes |= s), e === a)
            break;
        e = e.return;
    } }
    function go(e, s, a, r) { var o = e.child; for (o !== null && (o.return = e); o !== null;) {
        var d = o.dependencies;
        if (d !== null) {
            var x = o.child;
            d = d.firstContext;
            e: for (; d !== null;) {
                var y = d;
                d = o;
                for (var k = 0; k < s.length; k++)
                    if (y.context === s[k]) {
                        d.lanes |= a, y = d.alternate, y !== null && (y.lanes |= a), po(d.return, a, e), r || (x = null);
                        break e;
                    }
                d = y.next;
            }
        }
        else if (o.tag === 18) {
            if (x = o.return, x === null)
                throw Error(c(341));
            x.lanes |= a, d = x.alternate, d !== null && (d.lanes |= a), po(x, a, e), x = null;
        }
        else
            x = o.child;
        if (x !== null)
            x.return = o;
        else
            for (x = o; x !== null;) {
                if (x === e) {
                    x = null;
                    break;
                }
                if (o = x.sibling, o !== null) {
                    o.return = x.return, x = o;
                    break;
                }
                x = x.return;
            }
        o = x;
    } }
    function bl(e, s, a, r) { e = null; for (var o = s, d = !1; o !== null;) {
        if (!d) {
            if ((o.flags & 524288) !== 0)
                d = !0;
            else if ((o.flags & 262144) !== 0)
                break;
        }
        if (o.tag === 10) {
            var x = o.alternate;
            if (x === null)
                throw Error(c(387));
            if (x = x.memoizedProps, x !== null) {
                var y = o.type;
                Ot(o.pendingProps.value, x.value) || (e !== null ? e.push(y) : e = [y]);
            }
        }
        else if (o === Ue.current) {
            if (x = o.alternate, x === null)
                throw Error(c(387));
            x.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Gn) : e = [Gn]);
        }
        o = o.return;
    } e !== null && go(s, e, a, r), s.flags |= 262144; }
    function Ur(e) { for (e = e.firstContext; e !== null;) {
        if (!Ot(e.context._currentValue, e.memoizedValue))
            return !0;
        e = e.next;
    } return !1; }
    function Ba(e) { Ra = e, As = null, e = e.dependencies, e !== null && (e.firstContext = null); }
    function ut(e) { return oh(Ra, e); }
    function Lr(e, s) { return Ra === null && Ba(e), oh(e, s); }
    function oh(e, s) { var a = s._currentValue; if (s = { context: s, memoizedValue: a, next: null }, As === null) {
        if (e === null)
            throw Error(c(308));
        As = s, e.dependencies = { lanes: 0, firstContext: s }, e.flags |= 524288;
    }
    else
        As = As.next = s; return a; }
    var Db = typeof AbortController < "u" ? AbortController : function () { var e = [], s = this.signal = { aborted: !1, addEventListener: function (a, r) { e.push(r); } }; this.abort = function () { s.aborted = !0, e.forEach(function (a) { return a(); }); }; }, _b = l.unstable_scheduleCallback, Ob = l.unstable_NormalPriority, Ie = { $$typeof: O, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function bo() { return { controller: new Db, data: new Map, refCount: 0 }; }
    function pn(e) { e.refCount--, e.refCount === 0 && _b(Ob, function () { e.controller.abort(); }); }
    var gn = null, yo = 0, yl = 0, vl = null;
    function zb(e, s) { if (gn === null) {
        var a = gn = [];
        yo = 0, yl = Nd(), vl = { status: "pending", value: void 0, then: function (r) { a.push(r); } };
    } return yo++, s.then(dh, dh), s; }
    function dh() { if (--yo === 0 && gn !== null) {
        vl !== null && (vl.status = "fulfilled");
        var e = gn;
        gn = null, yl = 0, vl = null;
        for (var s = 0; s < e.length; s++)
            (0, e[s])();
    } }
    function Rb(e, s) { var a = [], r = { status: "pending", value: null, reason: null, then: function (o) { a.push(o); } }; return e.then(function () { r.status = "fulfilled", r.value = s; for (var o = 0; o < a.length; o++)
        (0, a[o])(s); }, function (o) { for (r.status = "rejected", r.reason = o, o = 0; o < a.length; o++)
        (0, a[o])(void 0); }), r; }
    var uh = R.S;
    R.S = function (e, s) { Jf = Mt(), typeof s == "object" && s !== null && typeof s.then == "function" && zb(e, s), uh !== null && uh(e, s); };
    var qa = Se(null);
    function vo() { var e = qa.current; return e !== null ? e : Be.pooledCache; }
    function Hr(e, s) { s === null ? ae(qa, qa.current) : ae(qa, s.pool); }
    function mh() { var e = vo(); return e === null ? null : { parent: Ie._currentValue, pool: e }; }
    var jl = Error(c(460)), jo = Error(c(474)), Vr = Error(c(542)), Gr = { then: function () { } };
    function hh(e) { return e = e.status, e === "fulfilled" || e === "rejected"; }
    function fh(e, s, a) { switch (a = e[a], a === void 0 ? e.push(s) : a !== s && (s.then(ws, ws), s = a), s.status) {
        case "fulfilled": return s.value;
        case "rejected": throw e = s.reason, ph(e), e;
        default:
            if (typeof s.status == "string")
                s.then(ws, ws);
            else {
                if (e = Be, e !== null && 100 < e.shellSuspendCounter)
                    throw Error(c(482));
                e = s, e.status = "pending", e.then(function (r) { if (s.status === "pending") {
                    var o = s;
                    o.status = "fulfilled", o.value = r;
                } }, function (r) { if (s.status === "pending") {
                    var o = s;
                    o.status = "rejected", o.reason = r;
                } });
            }
            switch (s.status) {
                case "fulfilled": return s.value;
                case "rejected": throw e = s.reason, ph(e), e;
            }
            throw La = s, jl;
    } }
    function Ua(e) { try {
        var s = e._init;
        return s(e._payload);
    }
    catch (a) {
        throw a !== null && typeof a == "object" && typeof a.then == "function" ? (La = a, jl) : a;
    } }
    var La = null;
    function xh() { if (La === null)
        throw Error(c(459)); var e = La; return La = null, e; }
    function ph(e) { if (e === jl || e === Vr)
        throw Error(c(483)); }
    var Nl = null, bn = 0;
    function Qr(e) { var s = bn; return bn += 1, Nl === null && (Nl = []), fh(Nl, e, s); }
    function yn(e, s) { s = s.props.ref, e.ref = s !== void 0 ? s : null; }
    function Kr(e, s) { throw s.$$typeof === b ? Error(c(525)) : (e = Object.prototype.toString.call(s), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : e))); }
    function gh(e) { function s(E, A) { if (e) {
        var z = E.deletions;
        z === null ? (E.deletions = [A], E.flags |= 16) : z.push(A);
    } } function a(E, A) { if (!e)
        return null; for (; A !== null;)
        s(E, A), A = A.sibling; return null; } function r(E) { for (var A = new Map; E !== null;)
        E.key !== null ? A.set(E.key, E) : A.set(E.index, E), E = E.sibling; return A; } function o(E, A) { return E = ks(E, A), E.index = 0, E.sibling = null, E; } function d(E, A, z) { return E.index = z, e ? (z = E.alternate, z !== null ? (z = z.index, z < A ? (E.flags |= 67108866, A) : z) : (E.flags |= 67108866, A)) : (E.flags |= 1048576, A); } function x(E) { return e && E.alternate === null && (E.flags |= 67108866), E; } function y(E, A, z, Q) { return A === null || A.tag !== 6 ? (A = co(z, E.mode, Q), A.return = E, A) : (A = o(A, z), A.return = E, A); } function k(E, A, z, Q) { var le = z.type; return le === w ? G(E, A, z.props.children, Q, z.key) : A !== null && (A.elementType === le || typeof le == "object" && le !== null && le.$$typeof === K && Ua(le) === A.type) ? (A = o(A, z.props), yn(A, z), A.return = E, A) : (A = Br(z.type, z.key, z.props, null, E.mode, Q), yn(A, z), A.return = E, A); } function B(E, A, z, Q) { return A === null || A.tag !== 4 || A.stateNode.containerInfo !== z.containerInfo || A.stateNode.implementation !== z.implementation ? (A = oo(z, E.mode, Q), A.return = E, A) : (A = o(A, z.children || []), A.return = E, A); } function G(E, A, z, Q, le) { return A === null || A.tag !== 7 ? (A = Oa(z, E.mode, Q, le), A.return = E, A) : (A = o(A, z), A.return = E, A); } function Y(E, A, z) { if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = co("" + A, E.mode, z), A.return = E, A; if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
            case N: return z = Br(A.type, A.key, A.props, null, E.mode, z), yn(z, A), z.return = E, z;
            case S: return A = oo(A, E.mode, z), A.return = E, A;
            case K: return A = Ua(A), Y(E, A, z);
        }
        if (se(A) || ne(A))
            return A = Oa(A, E.mode, z, null), A.return = E, A;
        if (typeof A.then == "function")
            return Y(E, Qr(A), z);
        if (A.$$typeof === O)
            return Y(E, Lr(E, A), z);
        Kr(E, A);
    } return null; } function q(E, A, z, Q) { var le = A !== null ? A.key : null; if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return le !== null ? null : y(E, A, "" + z, Q); if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
            case N: return z.key === le ? k(E, A, z, Q) : null;
            case S: return z.key === le ? B(E, A, z, Q) : null;
            case K: return z = Ua(z), q(E, A, z, Q);
        }
        if (se(z) || ne(z))
            return le !== null ? null : G(E, A, z, Q, null);
        if (typeof z.then == "function")
            return q(E, A, Qr(z), Q);
        if (z.$$typeof === O)
            return q(E, A, Lr(E, z), Q);
        Kr(E, z);
    } return null; } function H(E, A, z, Q, le) { if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return E = E.get(z) || null, y(A, E, "" + Q, le); if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
            case N: return E = E.get(Q.key === null ? z : Q.key) || null, k(A, E, Q, le);
            case S: return E = E.get(Q.key === null ? z : Q.key) || null, B(A, E, Q, le);
            case K: return Q = Ua(Q), H(E, A, z, Q, le);
        }
        if (se(Q) || ne(Q))
            return E = E.get(z) || null, G(A, E, Q, le, null);
        if (typeof Q.then == "function")
            return H(E, A, z, Qr(Q), le);
        if (Q.$$typeof === O)
            return H(E, A, z, Lr(A, Q), le);
        Kr(A, Q);
    } return null; } function P(E, A, z, Q) { for (var le = null, ke = null, ee = A, me = A = 0, ve = null; ee !== null && me < z.length; me++) {
        ee.index > me ? (ve = ee, ee = null) : ve = ee.sibling;
        var Ce = q(E, ee, z[me], Q);
        if (Ce === null) {
            ee === null && (ee = ve);
            break;
        }
        e && ee && Ce.alternate === null && s(E, ee), A = d(Ce, A, me), ke === null ? le = Ce : ke.sibling = Ce, ke = Ce, ee = ve;
    } if (me === z.length)
        return a(E, ee), je && Cs(E, me), le; if (ee === null) {
        for (; me < z.length; me++)
            ee = Y(E, z[me], Q), ee !== null && (A = d(ee, A, me), ke === null ? le = ee : ke.sibling = ee, ke = ee);
        return je && Cs(E, me), le;
    } for (ee = r(ee); me < z.length; me++)
        ve = H(ee, E, me, z[me], Q), ve !== null && (e && ve.alternate !== null && ee.delete(ve.key === null ? me : ve.key), A = d(ve, A, me), ke === null ? le = ve : ke.sibling = ve, ke = ve); return e && ee.forEach(function (pa) { return s(E, pa); }), je && Cs(E, me), le; } function ce(E, A, z, Q) { if (z == null)
        throw Error(c(151)); for (var le = null, ke = null, ee = A, me = A = 0, ve = null, Ce = z.next(); ee !== null && !Ce.done; me++, Ce = z.next()) {
        ee.index > me ? (ve = ee, ee = null) : ve = ee.sibling;
        var pa = q(E, ee, Ce.value, Q);
        if (pa === null) {
            ee === null && (ee = ve);
            break;
        }
        e && ee && pa.alternate === null && s(E, ee), A = d(pa, A, me), ke === null ? le = pa : ke.sibling = pa, ke = pa, ee = ve;
    } if (Ce.done)
        return a(E, ee), je && Cs(E, me), le; if (ee === null) {
        for (; !Ce.done; me++, Ce = z.next())
            Ce = Y(E, Ce.value, Q), Ce !== null && (A = d(Ce, A, me), ke === null ? le = Ce : ke.sibling = Ce, ke = Ce);
        return je && Cs(E, me), le;
    } for (ee = r(ee); !Ce.done; me++, Ce = z.next())
        Ce = H(ee, E, me, Ce.value, Q), Ce !== null && (e && Ce.alternate !== null && ee.delete(Ce.key === null ? me : Ce.key), A = d(Ce, A, me), ke === null ? le = Ce : ke.sibling = Ce, ke = Ce); return e && ee.forEach(function (Xy) { return s(E, Xy); }), je && Cs(E, me), le; } function ze(E, A, z, Q) { if (typeof z == "object" && z !== null && z.type === w && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
            case N:
                e: {
                    for (var le = z.key; A !== null;) {
                        if (A.key === le) {
                            if (le = z.type, le === w) {
                                if (A.tag === 7) {
                                    a(E, A.sibling), Q = o(A, z.props.children), Q.return = E, E = Q;
                                    break e;
                                }
                            }
                            else if (A.elementType === le || typeof le == "object" && le !== null && le.$$typeof === K && Ua(le) === A.type) {
                                a(E, A.sibling), Q = o(A, z.props), yn(Q, z), Q.return = E, E = Q;
                                break e;
                            }
                            a(E, A);
                            break;
                        }
                        else
                            s(E, A);
                        A = A.sibling;
                    }
                    z.type === w ? (Q = Oa(z.props.children, E.mode, Q, z.key), Q.return = E, E = Q) : (Q = Br(z.type, z.key, z.props, null, E.mode, Q), yn(Q, z), Q.return = E, E = Q);
                }
                return x(E);
            case S:
                e: {
                    for (le = z.key; A !== null;) {
                        if (A.key === le)
                            if (A.tag === 4 && A.stateNode.containerInfo === z.containerInfo && A.stateNode.implementation === z.implementation) {
                                a(E, A.sibling), Q = o(A, z.children || []), Q.return = E, E = Q;
                                break e;
                            }
                            else {
                                a(E, A);
                                break;
                            }
                        else
                            s(E, A);
                        A = A.sibling;
                    }
                    Q = oo(z, E.mode, Q), Q.return = E, E = Q;
                }
                return x(E);
            case K: return z = Ua(z), ze(E, A, z, Q);
        }
        if (se(z))
            return P(E, A, z, Q);
        if (ne(z)) {
            if (le = ne(z), typeof le != "function")
                throw Error(c(150));
            return z = le.call(z), ce(E, A, z, Q);
        }
        if (typeof z.then == "function")
            return ze(E, A, Qr(z), Q);
        if (z.$$typeof === O)
            return ze(E, A, Lr(E, z), Q);
        Kr(E, z);
    } return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, A !== null && A.tag === 6 ? (a(E, A.sibling), Q = o(A, z), Q.return = E, E = Q) : (a(E, A), Q = co(z, E.mode, Q), Q.return = E, E = Q), x(E)) : a(E, A); } return function (E, A, z, Q) { try {
        bn = 0;
        var le = ze(E, A, z, Q);
        return Nl = null, le;
    }
    catch (ee) {
        if (ee === jl || ee === Vr)
            throw ee;
        var ke = zt(29, ee, null, E.mode);
        return ke.lanes = Q, ke.return = E, ke;
    }
    finally { } }; }
    var Ha = gh(!0), bh = gh(!1), Ws = !1;
    function No(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null }; }
    function wo(e, s) { e = e.updateQueue, s.updateQueue === e && (s.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null }); }
    function ea(e) { return { lane: e, tag: 0, payload: null, callback: null, next: null }; }
    function ta(e, s, a) { var r = e.updateQueue; if (r === null)
        return null; if (r = r.shared, (Ae & 2) !== 0) {
        var o = r.pending;
        return o === null ? s.next = s : (s.next = o.next, o.next = s), r.pending = s, s = Rr(e), th(e, null, a), s;
    } return zr(e, r, s, a), Rr(e); }
    function vn(e, s, a) { if (s = s.updateQueue, s !== null && (s = s.shared, (a & 4194048) !== 0)) {
        var r = s.lanes;
        r &= e.pendingLanes, a |= r, s.lanes = a, om(e, a);
    } }
    function So(e, s) { var a = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, a === r)) {
        var o = null, d = null;
        if (a = a.firstBaseUpdate, a !== null) {
            do {
                var x = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
                d === null ? o = d = x : d = d.next = x, a = a.next;
            } while (a !== null);
            d === null ? o = d = s : d = d.next = s;
        }
        else
            o = d = s;
        a = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: d, shared: r.shared, callbacks: r.callbacks }, e.updateQueue = a;
        return;
    } e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = s : e.next = s, a.lastBaseUpdate = s; }
    var ko = !1;
    function jn() { if (ko) {
        var e = vl;
        if (e !== null)
            throw e;
    } }
    function Nn(e, s, a, r) { ko = !1; var o = e.updateQueue; Ws = !1; var d = o.firstBaseUpdate, x = o.lastBaseUpdate, y = o.shared.pending; if (y !== null) {
        o.shared.pending = null;
        var k = y, B = k.next;
        k.next = null, x === null ? d = B : x.next = B, x = k;
        var G = e.alternate;
        G !== null && (G = G.updateQueue, y = G.lastBaseUpdate, y !== x && (y === null ? G.firstBaseUpdate = B : y.next = B, G.lastBaseUpdate = k));
    } if (d !== null) {
        var Y = o.baseState;
        x = 0, G = B = k = null, y = d;
        do {
            var q = y.lane & -536870913, H = q !== y.lane;
            if (H ? (ye & q) === q : (r & q) === q) {
                q !== 0 && q === yl && (ko = !0), G !== null && (G = G.next = { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null });
                e: {
                    var P = e, ce = y;
                    q = s;
                    var ze = a;
                    switch (ce.tag) {
                        case 1:
                            if (P = ce.payload, typeof P == "function") {
                                Y = P.call(ze, Y, q);
                                break e;
                            }
                            Y = P;
                            break e;
                        case 3: P.flags = P.flags & -65537 | 128;
                        case 0:
                            if (P = ce.payload, q = typeof P == "function" ? P.call(ze, Y, q) : P, q == null)
                                break e;
                            Y = g({}, Y, q);
                            break e;
                        case 2: Ws = !0;
                    }
                }
                q = y.callback, q !== null && (e.flags |= 64, H && (e.flags |= 8192), H = o.callbacks, H === null ? o.callbacks = [q] : H.push(q));
            }
            else
                H = { lane: q, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, G === null ? (B = G = H, k = Y) : G = G.next = H, x |= q;
            if (y = y.next, y === null) {
                if (y = o.shared.pending, y === null)
                    break;
                H = y, y = H.next, H.next = null, o.lastBaseUpdate = H, o.shared.pending = null;
            }
        } while (!0);
        G === null && (k = Y), o.baseState = k, o.firstBaseUpdate = B, o.lastBaseUpdate = G, d === null && (o.shared.lanes = 0), ra |= x, e.lanes = x, e.memoizedState = Y;
    } }
    function yh(e, s) { if (typeof e != "function")
        throw Error(c(191, e)); e.call(s); }
    function vh(e, s) { var a = e.callbacks; if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
            yh(a[e], s); }
    var wl = Se(null), Yr = Se(0);
    function jh(e, s) { e = qs, ae(Yr, e), ae(wl, s), qs = e | s.baseLanes; }
    function Co() { ae(Yr, qs), ae(wl, wl.current); }
    function Ao() { qs = Yr.current, fe(wl), fe(Yr); }
    var Rt = Se(null), Pt = null;
    function sa(e) { var s = e.alternate; ae(Fe, Fe.current & 1), ae(Rt, e), Pt === null && (s === null || wl.current !== null || s.memoizedState !== null) && (Pt = e); }
    function To(e) { ae(Fe, Fe.current), ae(Rt, e), Pt === null && (Pt = e); }
    function Nh(e) { e.tag === 22 ? (ae(Fe, Fe.current), ae(Rt, e), Pt === null && (Pt = e)) : aa(); }
    function aa() { ae(Fe, Fe.current), ae(Rt, Rt.current); }
    function Bt(e) { fe(Rt), Pt === e && (Pt = null), fe(Fe); }
    var Fe = Se(0);
    function Xr(e) { for (var s = e; s !== null;) {
        if (s.tag === 13) {
            var a = s.memoizedState;
            if (a !== null && (a = a.dehydrated, a === null || zd(a) || Rd(a)))
                return s;
        }
        else if (s.tag === 19 && (s.memoizedProps.revealOrder === "forwards" || s.memoizedProps.revealOrder === "backwards" || s.memoizedProps.revealOrder === "unstable_legacy-backwards" || s.memoizedProps.revealOrder === "together")) {
            if ((s.flags & 128) !== 0)
                return s;
        }
        else if (s.child !== null) {
            s.child.return = s, s = s.child;
            continue;
        }
        if (s === e)
            break;
        for (; s.sibling === null;) {
            if (s.return === null || s.return === e)
                return null;
            s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
    } return null; }
    var Es = 0, de = null, _e = null, We = null, Zr = !1, Sl = !1, Va = !1, Fr = 0, wn = 0, kl = null, Bb = 0;
    function Ye() { throw Error(c(321)); }
    function Eo(e, s) { if (s === null)
        return !1; for (var a = 0; a < s.length && a < e.length; a++)
        if (!Ot(e[a], s[a]))
            return !1; return !0; }
    function Mo(e, s, a, r, o, d) { return Es = d, de = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, R.H = e === null || e.memoizedState === null ? nf : Yo, Va = !1, d = a(r, o), Va = !1, Sl && (d = Sh(s, a, r, o)), wh(e), d; }
    function wh(e) { R.H = Cn; var s = _e !== null && _e.next !== null; if (Es = 0, We = _e = de = null, Zr = !1, wn = 0, kl = null, s)
        throw Error(c(300)); e === null || et || (e = e.dependencies, e !== null && Ur(e) && (et = !0)); }
    function Sh(e, s, a, r) { de = e; var o = 0; do {
        if (Sl && (kl = null), wn = 0, Sl = !1, 25 <= o)
            throw Error(c(301));
        if (o += 1, We = _e = null, e.updateQueue != null) {
            var d = e.updateQueue;
            d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
        }
        R.H = rf, d = s(a, r);
    } while (Sl); return d; }
    function qb() { var e = R.H, s = e.useState()[0]; return s = typeof s.then == "function" ? Sn(s) : s, e = e.useState()[0], (_e !== null ? _e.memoizedState : null) !== e && (de.flags |= 1024), s; }
    function Do() { var e = Fr !== 0; return Fr = 0, e; }
    function _o(e, s, a) { s.updateQueue = e.updateQueue, s.flags &= -2053, e.lanes &= ~a; }
    function Oo(e) { if (Zr) {
        for (e = e.memoizedState; e !== null;) {
            var s = e.queue;
            s !== null && (s.pending = null), e = e.next;
        }
        Zr = !1;
    } Es = 0, We = _e = de = null, Sl = !1, wn = Fr = 0, kl = null; }
    function yt() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return We === null ? de.memoizedState = We = e : We = We.next = e, We; }
    function Je() { if (_e === null) {
        var e = de.alternate;
        e = e !== null ? e.memoizedState : null;
    }
    else
        e = _e.next; var s = We === null ? de.memoizedState : We.next; if (s !== null)
        We = s, _e = e;
    else {
        if (e === null)
            throw de.alternate === null ? Error(c(467)) : Error(c(310));
        _e = e, e = { memoizedState: _e.memoizedState, baseState: _e.baseState, baseQueue: _e.baseQueue, queue: _e.queue, next: null }, We === null ? de.memoizedState = We = e : We = We.next = e;
    } return We; }
    function Jr() { return { lastEffect: null, events: null, stores: null, memoCache: null }; }
    function Sn(e) { var s = wn; return wn += 1, kl === null && (kl = []), e = fh(kl, e, s), s = de, (We === null ? s.memoizedState : We.next) === null && (s = s.alternate, R.H = s === null || s.memoizedState === null ? nf : Yo), e; }
    function $r(e) { if (e !== null && typeof e == "object") {
        if (typeof e.then == "function")
            return Sn(e);
        if (e.$$typeof === O)
            return ut(e);
    } throw Error(c(438, String(e))); }
    function zo(e) { var s = null, a = de.updateQueue; if (a !== null && (s = a.memoCache), s == null) {
        var r = de.alternate;
        r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (s = { data: r.data.map(function (o) { return o.slice(); }), index: 0 })));
    } if (s == null && (s = { data: [], index: 0 }), a === null && (a = Jr(), de.updateQueue = a), a.memoCache = s, a = s.data[s.index], a === void 0)
        for (a = s.data[s.index] = Array(e), r = 0; r < e; r++)
            a[r] = qe; return s.index++, a; }
    function Ms(e, s) { return typeof s == "function" ? s(e) : s; }
    function Pr(e) { var s = Je(); return Ro(s, _e, e); }
    function Ro(e, s, a) { var r = e.queue; if (r === null)
        throw Error(c(311)); r.lastRenderedReducer = a; var o = e.baseQueue, d = r.pending; if (d !== null) {
        if (o !== null) {
            var x = o.next;
            o.next = d.next, d.next = x;
        }
        s.baseQueue = o = d, r.pending = null;
    } if (d = e.baseState, o === null)
        e.memoizedState = d;
    else {
        s = o.next;
        var y = x = null, k = null, B = s, G = !1;
        do {
            var Y = B.lane & -536870913;
            if (Y !== B.lane ? (ye & Y) === Y : (Es & Y) === Y) {
                var q = B.revertLane;
                if (q === 0)
                    k !== null && (k = k.next = { lane: 0, revertLane: 0, gesture: null, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), Y === yl && (G = !0);
                else if ((Es & q) === q) {
                    B = B.next, q === yl && (G = !0);
                    continue;
                }
                else
                    Y = { lane: 0, revertLane: B.revertLane, gesture: null, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }, k === null ? (y = k = Y, x = d) : k = k.next = Y, de.lanes |= q, ra |= q;
                Y = B.action, Va && a(d, Y), d = B.hasEagerState ? B.eagerState : a(d, Y);
            }
            else
                q = { lane: Y, revertLane: B.revertLane, gesture: B.gesture, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }, k === null ? (y = k = q, x = d) : k = k.next = q, de.lanes |= Y, ra |= Y;
            B = B.next;
        } while (B !== null && B !== s);
        if (k === null ? x = d : k.next = y, !Ot(d, e.memoizedState) && (et = !0, G && (a = vl, a !== null)))
            throw a;
        e.memoizedState = d, e.baseState = x, e.baseQueue = k, r.lastRenderedState = d;
    } return o === null && (r.lanes = 0), [e.memoizedState, r.dispatch]; }
    function Bo(e) { var s = Je(), a = s.queue; if (a === null)
        throw Error(c(311)); a.lastRenderedReducer = e; var r = a.dispatch, o = a.pending, d = s.memoizedState; if (o !== null) {
        a.pending = null;
        var x = o = o.next;
        do
            d = e(d, x.action), x = x.next;
        while (x !== o);
        Ot(d, s.memoizedState) || (et = !0), s.memoizedState = d, s.baseQueue === null && (s.baseState = d), a.lastRenderedState = d;
    } return [d, r]; }
    function kh(e, s, a) { var r = de, o = Je(), d = je; if (d) {
        if (a === void 0)
            throw Error(c(407));
        a = a();
    }
    else
        a = s(); var x = !Ot((_e || o).memoizedState, a); if (x && (o.memoizedState = a, et = !0), o = o.queue, Lo(Th.bind(null, r, o, e), [e]), o.getSnapshot !== s || x || We !== null && We.memoizedState.tag & 1) {
        if (r.flags |= 2048, Cl(9, { destroy: void 0 }, Ah.bind(null, r, o, a, s), null), Be === null)
            throw Error(c(349));
        d || (Es & 127) !== 0 || Ch(r, s, a);
    } return a; }
    function Ch(e, s, a) { e.flags |= 16384, e = { getSnapshot: s, value: a }, s = de.updateQueue, s === null ? (s = Jr(), de.updateQueue = s, s.stores = [e]) : (a = s.stores, a === null ? s.stores = [e] : a.push(e)); }
    function Ah(e, s, a, r) { s.value = a, s.getSnapshot = r, Eh(s) && Mh(e); }
    function Th(e, s, a) { return a(function () { Eh(s) && Mh(e); }); }
    function Eh(e) { var s = e.getSnapshot; e = e.value; try {
        var a = s();
        return !Ot(e, a);
    }
    catch {
        return !0;
    } }
    function Mh(e) { var s = _a(e, 2); s !== null && At(s, e, 2); }
    function qo(e) { var s = yt(); if (typeof e == "function") {
        var a = e;
        if (e = a(), Va) {
            Xs(!0);
            try {
                a();
            }
            finally {
                Xs(!1);
            }
        }
    } return s.memoizedState = s.baseState = e, s.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ms, lastRenderedState: e }, s; }
    function Dh(e, s, a, r) { return e.baseState = a, Ro(e, _e, typeof r == "function" ? r : Ms); }
    function Ub(e, s, a, r, o) { if (ei(e))
        throw Error(c(485)); if (e = s.action, e !== null) {
        var d = { payload: o, action: e, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function (x) { d.listeners.push(x); } };
        R.T !== null ? a(!0) : d.isTransition = !1, r(d), a = s.pending, a === null ? (d.next = s.pending = d, _h(s, d)) : (d.next = a.next, s.pending = a.next = d);
    } }
    function _h(e, s) { var a = s.action, r = s.payload, o = e.state; if (s.isTransition) {
        var d = R.T, x = {};
        R.T = x;
        try {
            var y = a(o, r), k = R.S;
            k !== null && k(x, y), Oh(e, s, y);
        }
        catch (B) {
            Uo(e, s, B);
        }
        finally {
            d !== null && x.types !== null && (d.types = x.types), R.T = d;
        }
    }
    else
        try {
            d = a(o, r), Oh(e, s, d);
        }
        catch (B) {
            Uo(e, s, B);
        } }
    function Oh(e, s, a) { a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function (r) { zh(e, s, r); }, function (r) { return Uo(e, s, r); }) : zh(e, s, a); }
    function zh(e, s, a) { s.status = "fulfilled", s.value = a, Rh(s), e.state = a, s = e.pending, s !== null && (a = s.next, a === s ? e.pending = null : (a = a.next, s.next = a, _h(e, a))); }
    function Uo(e, s, a) { var r = e.pending; if (e.pending = null, r !== null) {
        r = r.next;
        do
            s.status = "rejected", s.reason = a, Rh(s), s = s.next;
        while (s !== r);
    } e.action = null; }
    function Rh(e) { e = e.listeners; for (var s = 0; s < e.length; s++)
        (0, e[s])(); }
    function Bh(e, s) { return s; }
    function qh(e, s) { if (je) {
        var a = Be.formState;
        if (a !== null) {
            e: {
                var r = de;
                if (je) {
                    if (Le) {
                        t: {
                            for (var o = Le, d = $t; o.nodeType !== 8;) {
                                if (!d) {
                                    o = null;
                                    break t;
                                }
                                if (o = It(o.nextSibling), o === null) {
                                    o = null;
                                    break t;
                                }
                            }
                            d = o.data, o = d === "F!" || d === "F" ? o : null;
                        }
                        if (o) {
                            Le = It(o.nextSibling), r = o.data === "F!";
                            break e;
                        }
                    }
                    Ps(r);
                }
                r = !1;
            }
            r && (s = a[0]);
        }
    } return a = yt(), a.memoizedState = a.baseState = s, r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Bh, lastRenderedState: s }, a.queue = r, a = sf.bind(null, de, r), r.dispatch = a, r = qo(!1), d = Ko.bind(null, de, !1, r.queue), r = yt(), o = { state: s, dispatch: null, action: e, pending: null }, r.queue = o, a = Ub.bind(null, de, o, d, a), o.dispatch = a, r.memoizedState = e, [s, a, !1]; }
    function Uh(e) { var s = Je(); return Lh(s, _e, e); }
    function Lh(e, s, a) { if (s = Ro(e, s, Bh)[0], e = Pr(Ms)[0], typeof s == "object" && s !== null && typeof s.then == "function")
        try {
            var r = Sn(s);
        }
        catch (x) {
            throw x === jl ? Vr : x;
        }
    else
        r = s; s = Je(); var o = s.queue, d = o.dispatch; return a !== s.memoizedState && (de.flags |= 2048, Cl(9, { destroy: void 0 }, Lb.bind(null, o, a), null)), [r, d, e]; }
    function Lb(e, s) { e.action = s; }
    function Hh(e) { var s = Je(), a = _e; if (a !== null)
        return Lh(s, a, e); Je(), s = s.memoizedState, a = Je(); var r = a.queue.dispatch; return a.memoizedState = e, [s, r, !1]; }
    function Cl(e, s, a, r) { return e = { tag: e, create: a, deps: r, inst: s, next: null }, s = de.updateQueue, s === null && (s = Jr(), de.updateQueue = s), a = s.lastEffect, a === null ? s.lastEffect = e.next = e : (r = a.next, a.next = e, e.next = r, s.lastEffect = e), e; }
    function Vh() { return Je().memoizedState; }
    function Ir(e, s, a, r) { var o = yt(); de.flags |= e, o.memoizedState = Cl(1 | s, { destroy: void 0 }, a, r === void 0 ? null : r); }
    function Wr(e, s, a, r) { var o = Je(); r = r === void 0 ? null : r; var d = o.memoizedState.inst; _e !== null && r !== null && Eo(r, _e.memoizedState.deps) ? o.memoizedState = Cl(s, d, a, r) : (de.flags |= e, o.memoizedState = Cl(1 | s, d, a, r)); }
    function Gh(e, s) { Ir(8390656, 8, e, s); }
    function Lo(e, s) { Wr(2048, 8, e, s); }
    function Hb(e) { de.flags |= 4; var s = de.updateQueue; if (s === null)
        s = Jr(), de.updateQueue = s, s.events = [e];
    else {
        var a = s.events;
        a === null ? s.events = [e] : a.push(e);
    } }
    function Qh(e) { var s = Je().memoizedState; return Hb({ ref: s, nextImpl: e }), function () { if ((Ae & 2) !== 0)
        throw Error(c(440)); return s.impl.apply(void 0, arguments); }; }
    function Kh(e, s) { return Wr(4, 2, e, s); }
    function Yh(e, s) { return Wr(4, 4, e, s); }
    function Xh(e, s) { if (typeof s == "function") {
        e = e();
        var a = s(e);
        return function () { typeof a == "function" ? a() : s(null); };
    } if (s != null)
        return e = e(), s.current = e, function () { s.current = null; }; }
    function Zh(e, s, a) { a = a != null ? a.concat([e]) : null, Wr(4, 4, Xh.bind(null, s, e), a); }
    function Ho() { }
    function Fh(e, s) { var a = Je(); s = s === void 0 ? null : s; var r = a.memoizedState; return s !== null && Eo(s, r[1]) ? r[0] : (a.memoizedState = [e, s], e); }
    function Jh(e, s) { var a = Je(); s = s === void 0 ? null : s; var r = a.memoizedState; if (s !== null && Eo(s, r[1]))
        return r[0]; if (r = e(), Va) {
        Xs(!0);
        try {
            e();
        }
        finally {
            Xs(!1);
        }
    } return a.memoizedState = [r, s], r; }
    function Vo(e, s, a) { return a === void 0 || (Es & 1073741824) !== 0 && (ye & 261930) === 0 ? e.memoizedState = s : (e.memoizedState = a, e = Pf(), de.lanes |= e, ra |= e, a); }
    function $h(e, s, a, r) { return Ot(a, s) ? a : wl.current !== null ? (e = Vo(e, a, r), Ot(e, s) || (et = !0), e) : (Es & 42) === 0 || (Es & 1073741824) !== 0 && (ye & 261930) === 0 ? (et = !0, e.memoizedState = a) : (e = Pf(), de.lanes |= e, ra |= e, s); }
    function Ph(e, s, a, r, o) { var d = $.p; $.p = d !== 0 && 8 > d ? d : 8; var x = R.T, y = {}; R.T = y, Ko(e, !1, s, a); try {
        var k = o(), B = R.S;
        if (B !== null && B(y, k), k !== null && typeof k == "object" && typeof k.then == "function") {
            var G = Rb(k, r);
            kn(e, s, G, Lt(e));
        }
        else
            kn(e, s, r, Lt(e));
    }
    catch (Y) {
        kn(e, s, { then: function () { }, status: "rejected", reason: Y }, Lt());
    }
    finally {
        $.p = d, x !== null && y.types !== null && (x.types = y.types), R.T = x;
    } }
    function Vb() { }
    function Go(e, s, a, r) { if (e.tag !== 5)
        throw Error(c(476)); var o = Ih(e).queue; Ph(e, o, s, X, a === null ? Vb : function () { return Wh(e), a(r); }); }
    function Ih(e) { var s = e.memoizedState; if (s !== null)
        return s; s = { memoizedState: X, baseState: X, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ms, lastRenderedState: X }, next: null }; var a = {}; return s.next = { memoizedState: a, baseState: a, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ms, lastRenderedState: a }, next: null }, e.memoizedState = s, e = e.alternate, e !== null && (e.memoizedState = s), s; }
    function Wh(e) { var s = Ih(e); s.next === null && (s = e.alternate.memoizedState), kn(e, s.next.queue, {}, Lt()); }
    function Qo() { return ut(Gn); }
    function ef() { return Je().memoizedState; }
    function tf() { return Je().memoizedState; }
    function Gb(e) { for (var s = e.return; s !== null;) {
        switch (s.tag) {
            case 24:
            case 3:
                var a = Lt();
                e = ea(a);
                var r = ta(s, e, a);
                r !== null && (At(r, s, a), vn(r, s, a)), s = { cache: bo() }, e.payload = s;
                return;
        }
        s = s.return;
    } }
    function Qb(e, s, a) { var r = Lt(); a = { lane: r, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }, ei(e) ? af(s, a) : (a = ro(e, s, a, r), a !== null && (At(a, e, r), lf(a, s, r))); }
    function sf(e, s, a) { var r = Lt(); kn(e, s, a, r); }
    function kn(e, s, a, r) { var o = { lane: r, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }; if (ei(e))
        af(s, o);
    else {
        var d = e.alternate;
        if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = s.lastRenderedReducer, d !== null))
            try {
                var x = s.lastRenderedState, y = d(x, a);
                if (o.hasEagerState = !0, o.eagerState = y, Ot(y, x))
                    return zr(e, s, o, 0), Be === null && Or(), !1;
            }
            catch { }
            finally { }
        if (a = ro(e, s, o, r), a !== null)
            return At(a, e, r), lf(a, s, r), !0;
    } return !1; }
    function Ko(e, s, a, r) { if (r = { lane: 2, revertLane: Nd(), gesture: null, action: r, hasEagerState: !1, eagerState: null, next: null }, ei(e)) {
        if (s)
            throw Error(c(479));
    }
    else
        s = ro(e, a, r, 2), s !== null && At(s, e, 2); }
    function ei(e) { var s = e.alternate; return e === de || s !== null && s === de; }
    function af(e, s) { Sl = Zr = !0; var a = e.pending; a === null ? s.next = s : (s.next = a.next, a.next = s), e.pending = s; }
    function lf(e, s, a) { if ((a & 4194048) !== 0) {
        var r = s.lanes;
        r &= e.pendingLanes, a |= r, s.lanes = a, om(e, a);
    } }
    var Cn = { readContext: ut, use: $r, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useLayoutEffect: Ye, useInsertionEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useSyncExternalStore: Ye, useId: Ye, useHostTransitionStatus: Ye, useFormState: Ye, useActionState: Ye, useOptimistic: Ye, useMemoCache: Ye, useCacheRefresh: Ye };
    Cn.useEffectEvent = Ye;
    var nf = { readContext: ut, use: $r, useCallback: function (e, s) { return yt().memoizedState = [e, s === void 0 ? null : s], e; }, useContext: ut, useEffect: Gh, useImperativeHandle: function (e, s, a) { a = a != null ? a.concat([e]) : null, Ir(4194308, 4, Xh.bind(null, s, e), a); }, useLayoutEffect: function (e, s) { return Ir(4194308, 4, e, s); }, useInsertionEffect: function (e, s) { Ir(4, 2, e, s); }, useMemo: function (e, s) { var a = yt(); s = s === void 0 ? null : s; var r = e(); if (Va) {
            Xs(!0);
            try {
                e();
            }
            finally {
                Xs(!1);
            }
        } return a.memoizedState = [r, s], r; }, useReducer: function (e, s, a) { var r = yt(); if (a !== void 0) {
            var o = a(s);
            if (Va) {
                Xs(!0);
                try {
                    a(s);
                }
                finally {
                    Xs(!1);
                }
            }
        }
        else
            o = s; return r.memoizedState = r.baseState = o, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: o }, r.queue = e, e = e.dispatch = Qb.bind(null, de, e), [r.memoizedState, e]; }, useRef: function (e) { var s = yt(); return e = { current: e }, s.memoizedState = e; }, useState: function (e) { e = qo(e); var s = e.queue, a = sf.bind(null, de, s); return s.dispatch = a, [e.memoizedState, a]; }, useDebugValue: Ho, useDeferredValue: function (e, s) { var a = yt(); return Vo(a, e, s); }, useTransition: function () { var e = qo(!1); return e = Ph.bind(null, de, e.queue, !0, !1), yt().memoizedState = e, [!1, e]; }, useSyncExternalStore: function (e, s, a) { var r = de, o = yt(); if (je) {
            if (a === void 0)
                throw Error(c(407));
            a = a();
        }
        else {
            if (a = s(), Be === null)
                throw Error(c(349));
            (ye & 127) !== 0 || Ch(r, s, a);
        } o.memoizedState = a; var d = { value: a, getSnapshot: s }; return o.queue = d, Gh(Th.bind(null, r, d, e), [e]), r.flags |= 2048, Cl(9, { destroy: void 0 }, Ah.bind(null, r, d, a, s), null), a; }, useId: function () { var e = yt(), s = Be.identifierPrefix; if (je) {
            var a = us, r = ds;
            a = (r & ~(1 << 32 - _t(r) - 1)).toString(32) + a, s = "_" + s + "R_" + a, a = Fr++, 0 < a && (s += "H" + a.toString(32)), s += "_";
        }
        else
            a = Bb++, s = "_" + s + "r_" + a.toString(32) + "_"; return e.memoizedState = s; }, useHostTransitionStatus: Qo, useFormState: qh, useActionState: qh, useOptimistic: function (e) { var s = yt(); s.memoizedState = s.baseState = e; var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return s.queue = a, s = Ko.bind(null, de, !0, a), a.dispatch = s, [e, s]; }, useMemoCache: zo, useCacheRefresh: function () { return yt().memoizedState = Gb.bind(null, de); }, useEffectEvent: function (e) { var s = yt(), a = { impl: e }; return s.memoizedState = a, function () { if ((Ae & 2) !== 0)
            throw Error(c(440)); return a.impl.apply(void 0, arguments); }; } }, Yo = { readContext: ut, use: $r, useCallback: Fh, useContext: ut, useEffect: Lo, useImperativeHandle: Zh, useInsertionEffect: Kh, useLayoutEffect: Yh, useMemo: Jh, useReducer: Pr, useRef: Vh, useState: function () { return Pr(Ms); }, useDebugValue: Ho, useDeferredValue: function (e, s) { var a = Je(); return $h(a, _e.memoizedState, e, s); }, useTransition: function () { var e = Pr(Ms)[0], s = Je().memoizedState; return [typeof e == "boolean" ? e : Sn(e), s]; }, useSyncExternalStore: kh, useId: ef, useHostTransitionStatus: Qo, useFormState: Uh, useActionState: Uh, useOptimistic: function (e, s) { var a = Je(); return Dh(a, _e, e, s); }, useMemoCache: zo, useCacheRefresh: tf };
    Yo.useEffectEvent = Qh;
    var rf = { readContext: ut, use: $r, useCallback: Fh, useContext: ut, useEffect: Lo, useImperativeHandle: Zh, useInsertionEffect: Kh, useLayoutEffect: Yh, useMemo: Jh, useReducer: Bo, useRef: Vh, useState: function () { return Bo(Ms); }, useDebugValue: Ho, useDeferredValue: function (e, s) { var a = Je(); return _e === null ? Vo(a, e, s) : $h(a, _e.memoizedState, e, s); }, useTransition: function () { var e = Bo(Ms)[0], s = Je().memoizedState; return [typeof e == "boolean" ? e : Sn(e), s]; }, useSyncExternalStore: kh, useId: ef, useHostTransitionStatus: Qo, useFormState: Hh, useActionState: Hh, useOptimistic: function (e, s) { var a = Je(); return _e !== null ? Dh(a, _e, e, s) : (a.baseState = e, [e, a.queue.dispatch]); }, useMemoCache: zo, useCacheRefresh: tf };
    rf.useEffectEvent = Qh;
    function Xo(e, s, a, r) { s = e.memoizedState, a = a(r, s), a = a == null ? s : g({}, s, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a); }
    var Zo = { enqueueSetState: function (e, s, a) { e = e._reactInternals; var r = Lt(), o = ea(r); o.payload = s, a != null && (o.callback = a), s = ta(e, o, r), s !== null && (At(s, e, r), vn(s, e, r)); }, enqueueReplaceState: function (e, s, a) { e = e._reactInternals; var r = Lt(), o = ea(r); o.tag = 1, o.payload = s, a != null && (o.callback = a), s = ta(e, o, r), s !== null && (At(s, e, r), vn(s, e, r)); }, enqueueForceUpdate: function (e, s) { e = e._reactInternals; var a = Lt(), r = ea(a); r.tag = 2, s != null && (r.callback = s), s = ta(e, r, a), s !== null && (At(s, e, a), vn(s, e, a)); } };
    function cf(e, s, a, r, o, d, x) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, d, x) : s.prototype && s.prototype.isPureReactComponent ? !mn(a, r) || !mn(o, d) : !0; }
    function of(e, s, a, r) { e = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(a, r), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(a, r), s.state !== e && Zo.enqueueReplaceState(s, s.state, null); }
    function Ga(e, s) { var a = s; if ("ref" in s) {
        a = {};
        for (var r in s)
            r !== "ref" && (a[r] = s[r]);
    } if (e = e.defaultProps) {
        a === s && (a = g({}, a));
        for (var o in e)
            a[o] === void 0 && (a[o] = e[o]);
    } return a; }
    function df(e) { _r(e); }
    function uf(e) { console.error(e); }
    function mf(e) { _r(e); }
    function ti(e, s) { try {
        var a = e.onUncaughtError;
        a(s.value, { componentStack: s.stack });
    }
    catch (r) {
        setTimeout(function () { throw r; });
    } }
    function hf(e, s, a) { try {
        var r = e.onCaughtError;
        r(a.value, { componentStack: a.stack, errorBoundary: s.tag === 1 ? s.stateNode : null });
    }
    catch (o) {
        setTimeout(function () { throw o; });
    } }
    function Fo(e, s, a) { return a = ea(a), a.tag = 3, a.payload = { element: null }, a.callback = function () { ti(e, s); }, a; }
    function ff(e) { return e = ea(e), e.tag = 3, e; }
    function xf(e, s, a, r) { var o = a.type.getDerivedStateFromError; if (typeof o == "function") {
        var d = r.value;
        e.payload = function () { return o(d); }, e.callback = function () { hf(s, a, r); };
    } var x = a.stateNode; x !== null && typeof x.componentDidCatch == "function" && (e.callback = function () { hf(s, a, r), typeof o != "function" && (ia === null ? ia = new Set([this]) : ia.add(this)); var y = r.stack; this.componentDidCatch(r.value, { componentStack: y !== null ? y : "" }); }); }
    function Kb(e, s, a, r, o) { if (a.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
        if (s = a.alternate, s !== null && bl(s, a, o, !0), a = Rt.current, a !== null) {
            switch (a.tag) {
                case 31:
                case 13: return Pt === null ? hi() : a.alternate === null && Xe === 0 && (Xe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, r === Gr ? a.flags |= 16384 : (s = a.updateQueue, s === null ? a.updateQueue = new Set([r]) : s.add(r), yd(e, r, o)), !1;
                case 22: return a.flags |= 65536, r === Gr ? a.flags |= 16384 : (s = a.updateQueue, s === null ? (s = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }, a.updateQueue = s) : (a = s.retryQueue, a === null ? s.retryQueue = new Set([r]) : a.add(r)), yd(e, r, o)), !1;
            }
            throw Error(c(435, a.tag));
        }
        return yd(e, r, o), hi(), !1;
    } if (je)
        return s = Rt.current, s !== null ? ((s.flags & 65536) === 0 && (s.flags |= 256), s.flags |= 65536, s.lanes = o, r !== ho && (e = Error(c(422), { cause: r }), xn(Zt(e, a)))) : (r !== ho && (s = Error(c(423), { cause: r }), xn(Zt(s, a))), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, r = Zt(r, a), o = Fo(e.stateNode, r, o), So(e, o), Xe !== 4 && (Xe = 2)), !1; var d = Error(c(520), { cause: r }); if (d = Zt(d, a), zn === null ? zn = [d] : zn.push(d), Xe !== 4 && (Xe = 2), s === null)
        return !0; r = Zt(r, a), a = s; do {
        switch (a.tag) {
            case 3: return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Fo(a.stateNode, r, e), So(a, e), !1;
            case 1: if (s = a.type, d = a.stateNode, (a.flags & 128) === 0 && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ia === null || !ia.has(d))))
                return a.flags |= 65536, o &= -o, a.lanes |= o, o = ff(o), xf(o, e, a, r), So(a, o), !1;
        }
        a = a.return;
    } while (a !== null); return !1; }
    var Jo = Error(c(461)), et = !1;
    function mt(e, s, a, r) { s.child = e === null ? bh(s, null, a, r) : Ha(s, e.child, a, r); }
    function pf(e, s, a, r, o) { a = a.render; var d = s.ref; if ("ref" in r) {
        var x = {};
        for (var y in r)
            y !== "ref" && (x[y] = r[y]);
    }
    else
        x = r; return Ba(s), r = Mo(e, s, a, x, d, o), y = Do(), e !== null && !et ? (_o(e, s, o), Ds(e, s, o)) : (je && y && uo(s), s.flags |= 1, mt(e, s, r, o), s.child); }
    function gf(e, s, a, r, o) { if (e === null) {
        var d = a.type;
        return typeof d == "function" && !io(d) && d.defaultProps === void 0 && a.compare === null ? (s.tag = 15, s.type = d, bf(e, s, d, r, o)) : (e = Br(a.type, null, r, s, s.mode, o), e.ref = s.ref, e.return = s, s.child = e);
    } if (d = e.child, !ad(e, o)) {
        var x = d.memoizedProps;
        if (a = a.compare, a = a !== null ? a : mn, a(x, r) && e.ref === s.ref)
            return Ds(e, s, o);
    } return s.flags |= 1, e = ks(d, r), e.ref = s.ref, e.return = s, s.child = e; }
    function bf(e, s, a, r, o) { if (e !== null) {
        var d = e.memoizedProps;
        if (mn(d, r) && e.ref === s.ref)
            if (et = !1, s.pendingProps = r = d, ad(e, o))
                (e.flags & 131072) !== 0 && (et = !0);
            else
                return s.lanes = e.lanes, Ds(e, s, o);
    } return $o(e, s, a, r, o); }
    function yf(e, s, a, r) { var o = r.children, d = e !== null ? e.memoizedState : null; if (e === null && s.stateNode === null && (s.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r.mode === "hidden") {
        if ((s.flags & 128) !== 0) {
            if (d = d !== null ? d.baseLanes | a : a, e !== null) {
                for (r = s.child = e.child, o = 0; r !== null;)
                    o = o | r.lanes | r.childLanes, r = r.sibling;
                r = o & ~d;
            }
            else
                r = 0, s.child = null;
            return vf(e, s, d, a, r);
        }
        if ((a & 536870912) !== 0)
            s.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Hr(s, d !== null ? d.cachePool : null), d !== null ? jh(s, d) : Co(), Nh(s);
        else
            return r = s.lanes = 536870912, vf(e, s, d !== null ? d.baseLanes | a : a, a, r);
    }
    else
        d !== null ? (Hr(s, d.cachePool), jh(s, d), aa(), s.memoizedState = null) : (e !== null && Hr(s, null), Co(), aa()); return mt(e, s, o, a), s.child; }
    function An(e, s) { return e !== null && e.tag === 22 || s.stateNode !== null || (s.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), s.sibling; }
    function vf(e, s, a, r, o) { var d = vo(); return d = d === null ? null : { parent: Ie._currentValue, pool: d }, s.memoizedState = { baseLanes: a, cachePool: d }, e !== null && Hr(s, null), Co(), Nh(s), e !== null && bl(e, s, r, !0), s.childLanes = o, null; }
    function si(e, s) { return s = li({ mode: s.mode, children: s.children }, e.mode), s.ref = e.ref, e.child = s, s.return = e, s; }
    function jf(e, s, a) { return Ha(s, e.child, null, a), e = si(s, s.pendingProps), e.flags |= 2, Bt(s), s.memoizedState = null, e; }
    function Yb(e, s, a) { var r = s.pendingProps, o = (s.flags & 128) !== 0; if (s.flags &= -129, e === null) {
        if (je) {
            if (r.mode === "hidden")
                return e = si(s, r), s.lanes = 536870912, An(null, e);
            if (To(s), (e = Le) ? (e = Ox(e, $t), e = e !== null && e.data === "&" ? e : null, e !== null && (s.memoizedState = { dehydrated: e, treeContext: Js !== null ? { id: ds, overflow: us } : null, retryLane: 536870912, hydrationErrors: null }, a = ah(e), a.return = s, s.child = a, dt = s, Le = null)) : e = null, e === null)
                throw Ps(s);
            return s.lanes = 536870912, null;
        }
        return si(s, r);
    } var d = e.memoizedState; if (d !== null) {
        var x = d.dehydrated;
        if (To(s), o)
            if (s.flags & 256)
                s.flags &= -257, s = jf(e, s, a);
            else if (s.memoizedState !== null)
                s.child = e.child, s.flags |= 128, s = null;
            else
                throw Error(c(558));
        else if (et || bl(e, s, a, !1), o = (a & e.childLanes) !== 0, et || o) {
            if (r = Be, r !== null && (x = dm(r, a), x !== 0 && x !== d.retryLane))
                throw d.retryLane = x, _a(e, x), At(r, e, x), Jo;
            hi(), s = jf(e, s, a);
        }
        else
            e = d.treeContext, Le = It(x.nextSibling), dt = s, je = !0, $s = null, $t = !1, e !== null && rh(s, e), s = si(s, r), s.flags |= 4096;
        return s;
    } return e = ks(e.child, { mode: r.mode, children: r.children }), e.ref = s.ref, s.child = e, e.return = s, e; }
    function ai(e, s) { var a = s.ref; if (a === null)
        e !== null && e.ref !== null && (s.flags |= 4194816);
    else {
        if (typeof a != "function" && typeof a != "object")
            throw Error(c(284));
        (e === null || e.ref !== a) && (s.flags |= 4194816);
    } }
    function $o(e, s, a, r, o) { return Ba(s), a = Mo(e, s, a, r, void 0, o), r = Do(), e !== null && !et ? (_o(e, s, o), Ds(e, s, o)) : (je && r && uo(s), s.flags |= 1, mt(e, s, a, o), s.child); }
    function Nf(e, s, a, r, o, d) { return Ba(s), s.updateQueue = null, a = Sh(s, r, a, o), wh(e), r = Do(), e !== null && !et ? (_o(e, s, d), Ds(e, s, d)) : (je && r && uo(s), s.flags |= 1, mt(e, s, a, d), s.child); }
    function wf(e, s, a, r, o) { if (Ba(s), s.stateNode === null) {
        var d = fl, x = a.contextType;
        typeof x == "object" && x !== null && (d = ut(x)), d = new a(r, d), s.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Zo, s.stateNode = d, d._reactInternals = s, d = s.stateNode, d.props = r, d.state = s.memoizedState, d.refs = {}, No(s), x = a.contextType, d.context = typeof x == "object" && x !== null ? ut(x) : fl, d.state = s.memoizedState, x = a.getDerivedStateFromProps, typeof x == "function" && (Xo(s, a, x, r), d.state = s.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (x = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), x !== d.state && Zo.enqueueReplaceState(d, d.state, null), Nn(s, r, d, o), jn(), d.state = s.memoizedState), typeof d.componentDidMount == "function" && (s.flags |= 4194308), r = !0;
    }
    else if (e === null) {
        d = s.stateNode;
        var y = s.memoizedProps, k = Ga(a, y);
        d.props = k;
        var B = d.context, G = a.contextType;
        x = fl, typeof G == "object" && G !== null && (x = ut(G));
        var Y = a.getDerivedStateFromProps;
        G = typeof Y == "function" || typeof d.getSnapshotBeforeUpdate == "function", y = s.pendingProps !== y, G || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y || B !== x) && of(s, d, r, x), Ws = !1;
        var q = s.memoizedState;
        d.state = q, Nn(s, r, d, o), jn(), B = s.memoizedState, y || q !== B || Ws ? (typeof Y == "function" && (Xo(s, a, Y, r), B = s.memoizedState), (k = Ws || cf(s, a, k, r, q, B, x)) ? (G || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = r, s.memoizedState = B), d.props = r, d.state = B, d.context = x, r = k) : (typeof d.componentDidMount == "function" && (s.flags |= 4194308), r = !1);
    }
    else {
        d = s.stateNode, wo(e, s), x = s.memoizedProps, G = Ga(a, x), d.props = G, Y = s.pendingProps, q = d.context, B = a.contextType, k = fl, typeof B == "object" && B !== null && (k = ut(B)), y = a.getDerivedStateFromProps, (B = typeof y == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (x !== Y || q !== k) && of(s, d, r, k), Ws = !1, q = s.memoizedState, d.state = q, Nn(s, r, d, o), jn();
        var H = s.memoizedState;
        x !== Y || q !== H || Ws || e !== null && e.dependencies !== null && Ur(e.dependencies) ? (typeof y == "function" && (Xo(s, a, y, r), H = s.memoizedState), (G = Ws || cf(s, a, G, r, q, H, k) || e !== null && e.dependencies !== null && Ur(e.dependencies)) ? (B || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, H, k), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, H, k)), typeof d.componentDidUpdate == "function" && (s.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || x === e.memoizedProps && q === e.memoizedState || (s.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && q === e.memoizedState || (s.flags |= 1024), s.memoizedProps = r, s.memoizedState = H), d.props = r, d.state = H, d.context = k, r = G) : (typeof d.componentDidUpdate != "function" || x === e.memoizedProps && q === e.memoizedState || (s.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && q === e.memoizedState || (s.flags |= 1024), r = !1);
    } return d = r, ai(e, s), r = (s.flags & 128) !== 0, d || r ? (d = s.stateNode, a = r && typeof a.getDerivedStateFromError != "function" ? null : d.render(), s.flags |= 1, e !== null && r ? (s.child = Ha(s, e.child, null, o), s.child = Ha(s, null, a, o)) : mt(e, s, a, o), s.memoizedState = d.state, e = s.child) : e = Ds(e, s, o), e; }
    function Sf(e, s, a, r) { return za(), s.flags |= 256, mt(e, s, a, r), s.child; }
    var Po = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Io(e) { return { baseLanes: e, cachePool: mh() }; }
    function Wo(e, s, a) { return e = e !== null ? e.childLanes & ~a : 0, s && (e |= Ut), e; }
    function kf(e, s, a) { var r = s.pendingProps, o = !1, d = (s.flags & 128) !== 0, x; if ((x = d) || (x = e !== null && e.memoizedState === null ? !1 : (Fe.current & 2) !== 0), x && (o = !0, s.flags &= -129), x = (s.flags & 32) !== 0, s.flags &= -33, e === null) {
        if (je) {
            if (o ? sa(s) : aa(), (e = Le) ? (e = Ox(e, $t), e = e !== null && e.data !== "&" ? e : null, e !== null && (s.memoizedState = { dehydrated: e, treeContext: Js !== null ? { id: ds, overflow: us } : null, retryLane: 536870912, hydrationErrors: null }, a = ah(e), a.return = s, s.child = a, dt = s, Le = null)) : e = null, e === null)
                throw Ps(s);
            return Rd(e) ? s.lanes = 32 : s.lanes = 536870912, null;
        }
        var y = r.children;
        return r = r.fallback, o ? (aa(), o = s.mode, y = li({ mode: "hidden", children: y }, o), r = Oa(r, o, a, null), y.return = s, r.return = s, y.sibling = r, s.child = y, r = s.child, r.memoizedState = Io(a), r.childLanes = Wo(e, x, a), s.memoizedState = Po, An(null, r)) : (sa(s), ed(s, y));
    } var k = e.memoizedState; if (k !== null && (y = k.dehydrated, y !== null)) {
        if (d)
            s.flags & 256 ? (sa(s), s.flags &= -257, s = td(e, s, a)) : s.memoizedState !== null ? (aa(), s.child = e.child, s.flags |= 128, s = null) : (aa(), y = r.fallback, o = s.mode, r = li({ mode: "visible", children: r.children }, o), y = Oa(y, o, a, null), y.flags |= 2, r.return = s, y.return = s, r.sibling = y, s.child = r, Ha(s, e.child, null, a), r = s.child, r.memoizedState = Io(a), r.childLanes = Wo(e, x, a), s.memoizedState = Po, s = An(null, r));
        else if (sa(s), Rd(y)) {
            if (x = y.nextSibling && y.nextSibling.dataset, x)
                var B = x.dgst;
            x = B, r = Error(c(419)), r.stack = "", r.digest = x, xn({ value: r, source: null, stack: null }), s = td(e, s, a);
        }
        else if (et || bl(e, s, a, !1), x = (a & e.childLanes) !== 0, et || x) {
            if (x = Be, x !== null && (r = dm(x, a), r !== 0 && r !== k.retryLane))
                throw k.retryLane = r, _a(e, r), At(x, e, r), Jo;
            zd(y) || hi(), s = td(e, s, a);
        }
        else
            zd(y) ? (s.flags |= 192, s.child = e.child, s = null) : (e = k.treeContext, Le = It(y.nextSibling), dt = s, je = !0, $s = null, $t = !1, e !== null && rh(s, e), s = ed(s, r.children), s.flags |= 4096);
        return s;
    } return o ? (aa(), y = r.fallback, o = s.mode, k = e.child, B = k.sibling, r = ks(k, { mode: "hidden", children: r.children }), r.subtreeFlags = k.subtreeFlags & 65011712, B !== null ? y = ks(B, y) : (y = Oa(y, o, a, null), y.flags |= 2), y.return = s, r.return = s, r.sibling = y, s.child = r, An(null, r), r = s.child, y = e.child.memoizedState, y === null ? y = Io(a) : (o = y.cachePool, o !== null ? (k = Ie._currentValue, o = o.parent !== k ? { parent: k, pool: k } : o) : o = mh(), y = { baseLanes: y.baseLanes | a, cachePool: o }), r.memoizedState = y, r.childLanes = Wo(e, x, a), s.memoizedState = Po, An(e.child, r)) : (sa(s), a = e.child, e = a.sibling, a = ks(a, { mode: "visible", children: r.children }), a.return = s, a.sibling = null, e !== null && (x = s.deletions, x === null ? (s.deletions = [e], s.flags |= 16) : x.push(e)), s.child = a, s.memoizedState = null, a); }
    function ed(e, s) { return s = li({ mode: "visible", children: s }, e.mode), s.return = e, e.child = s; }
    function li(e, s) { return e = zt(22, e, null, s), e.lanes = 0, e; }
    function td(e, s, a) { return Ha(s, e.child, null, a), e = ed(s, s.pendingProps.children), e.flags |= 2, s.memoizedState = null, e; }
    function Cf(e, s, a) { e.lanes |= s; var r = e.alternate; r !== null && (r.lanes |= s), po(e.return, s, a); }
    function sd(e, s, a, r, o, d) { var x = e.memoizedState; x === null ? e.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: r, tail: a, tailMode: o, treeForkCount: d } : (x.isBackwards = s, x.rendering = null, x.renderingStartTime = 0, x.last = r, x.tail = a, x.tailMode = o, x.treeForkCount = d); }
    function Af(e, s, a) { var r = s.pendingProps, o = r.revealOrder, d = r.tail; r = r.children; var x = Fe.current, y = (x & 2) !== 0; if (y ? (x = x & 1 | 2, s.flags |= 128) : x &= 1, ae(Fe, x), mt(e, s, r, a), r = je ? fn : 0, !y && e !== null && (e.flags & 128) !== 0)
        e: for (e = s.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && Cf(e, a, s);
            else if (e.tag === 19)
                Cf(e, a, s);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === s)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === s)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        } switch (o) {
        case "forwards":
            for (a = s.child, o = null; a !== null;)
                e = a.alternate, e !== null && Xr(e) === null && (o = a), a = a.sibling;
            a = o, a === null ? (o = s.child, s.child = null) : (o = a.sibling, a.sibling = null), sd(s, !1, o, a, d, r);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (a = null, o = s.child, s.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Xr(e) === null) {
                    s.child = o;
                    break;
                }
                e = o.sibling, o.sibling = a, a = o, o = e;
            }
            sd(s, !0, a, null, d, r);
            break;
        case "together":
            sd(s, !1, null, null, void 0, r);
            break;
        default: s.memoizedState = null;
    } return s.child; }
    function Ds(e, s, a) { if (e !== null && (s.dependencies = e.dependencies), ra |= s.lanes, (a & s.childLanes) === 0)
        if (e !== null) {
            if (bl(e, s, a, !1), (a & s.childLanes) === 0)
                return null;
        }
        else
            return null; if (e !== null && s.child !== e.child)
        throw Error(c(153)); if (s.child !== null) {
        for (e = s.child, a = ks(e, e.pendingProps), s.child = a, a.return = s; e.sibling !== null;)
            e = e.sibling, a = a.sibling = ks(e, e.pendingProps), a.return = s;
        a.sibling = null;
    } return s.child; }
    function ad(e, s) { return (e.lanes & s) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ur(e))); }
    function Xb(e, s, a) { switch (s.tag) {
        case 3:
            ka(s, s.stateNode.containerInfo), Is(s, Ie, e.memoizedState.cache), za();
            break;
        case 27:
        case 5:
            Qs(s);
            break;
        case 4:
            ka(s, s.stateNode.containerInfo);
            break;
        case 10:
            Is(s, s.type, s.memoizedProps.value);
            break;
        case 31:
            if (s.memoizedState !== null)
                return s.flags |= 128, To(s), null;
            break;
        case 13:
            var r = s.memoizedState;
            if (r !== null)
                return r.dehydrated !== null ? (sa(s), s.flags |= 128, null) : (a & s.child.childLanes) !== 0 ? kf(e, s, a) : (sa(s), e = Ds(e, s, a), e !== null ? e.sibling : null);
            sa(s);
            break;
        case 19:
            var o = (e.flags & 128) !== 0;
            if (r = (a & s.childLanes) !== 0, r || (bl(e, s, a, !1), r = (a & s.childLanes) !== 0), o) {
                if (r)
                    return Af(e, s, a);
                s.flags |= 128;
            }
            if (o = s.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ae(Fe, Fe.current), r)
                break;
            return null;
        case 22: return s.lanes = 0, yf(e, s, a, s.pendingProps);
        case 24: Is(s, Ie, e.memoizedState.cache);
    } return Ds(e, s, a); }
    function Tf(e, s, a) { if (e !== null)
        if (e.memoizedProps !== s.pendingProps)
            et = !0;
        else {
            if (!ad(e, a) && (s.flags & 128) === 0)
                return et = !1, Xb(e, s, a);
            et = (e.flags & 131072) !== 0;
        }
    else
        et = !1, je && (s.flags & 1048576) !== 0 && nh(s, fn, s.index); switch (s.lanes = 0, s.tag) {
        case 16:
            e: {
                var r = s.pendingProps;
                if (e = Ua(s.elementType), s.type = e, typeof e == "function")
                    io(e) ? (r = Ga(e, r), s.tag = 1, s = wf(null, s, e, r, a)) : (s.tag = 0, s = $o(null, s, e, r, a));
                else {
                    if (e != null) {
                        var o = e.$$typeof;
                        if (o === F) {
                            s.tag = 11, s = pf(null, s, e, r, a);
                            break e;
                        }
                        else if (o === U) {
                            s.tag = 14, s = gf(null, s, e, r, a);
                            break e;
                        }
                    }
                    throw s = Re(e) || e, Error(c(306, s, ""));
                }
            }
            return s;
        case 0: return $o(e, s, s.type, s.pendingProps, a);
        case 1: return r = s.type, o = Ga(r, s.pendingProps), wf(e, s, r, o, a);
        case 3:
            e: {
                if (ka(s, s.stateNode.containerInfo), e === null)
                    throw Error(c(387));
                r = s.pendingProps;
                var d = s.memoizedState;
                o = d.element, wo(e, s), Nn(s, r, null, a);
                var x = s.memoizedState;
                if (r = x.cache, Is(s, Ie, r), r !== d.cache && go(s, [Ie], a, !0), jn(), r = x.element, d.isDehydrated)
                    if (d = { element: r, isDehydrated: !1, cache: x.cache }, s.updateQueue.baseState = d, s.memoizedState = d, s.flags & 256) {
                        s = Sf(e, s, r, a);
                        break e;
                    }
                    else if (r !== o) {
                        o = Zt(Error(c(424)), s), xn(o), s = Sf(e, s, r, a);
                        break e;
                    }
                    else {
                        switch (e = s.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                        }
                        for (Le = It(e.firstChild), dt = s, je = !0, $s = null, $t = !0, a = bh(s, null, r, a), s.child = a; a;)
                            a.flags = a.flags & -3 | 4096, a = a.sibling;
                    }
                else {
                    if (za(), r === o) {
                        s = Ds(e, s, a);
                        break e;
                    }
                    mt(e, s, r, a);
                }
                s = s.child;
            }
            return s;
        case 26: return ai(e, s), e === null ? (a = Lx(s.type, null, s.pendingProps, null)) ? s.memoizedState = a : je || (a = s.type, e = s.pendingProps, r = vi(at.current).createElement(a), r[ot] = s, r[jt] = e, ht(r, a, e), it(r), s.stateNode = r) : s.memoizedState = Lx(s.type, e.memoizedProps, s.pendingProps, e.memoizedState), null;
        case 27: return Qs(s), e === null && je && (r = s.stateNode = Bx(s.type, s.pendingProps, at.current), dt = s, $t = !0, o = Le, ua(s.type) ? (Bd = o, Le = It(r.firstChild)) : Le = o), mt(e, s, s.pendingProps.children, a), ai(e, s), e === null && (s.flags |= 4194304), s.child;
        case 5: return e === null && je && ((o = r = Le) && (r = Ny(r, s.type, s.pendingProps, $t), r !== null ? (s.stateNode = r, dt = s, Le = It(r.firstChild), $t = !1, o = !0) : o = !1), o || Ps(s)), Qs(s), o = s.type, d = s.pendingProps, x = e !== null ? e.memoizedProps : null, r = d.children, Dd(o, d) ? r = null : x !== null && Dd(o, x) && (s.flags |= 32), s.memoizedState !== null && (o = Mo(e, s, qb, null, null, a), Gn._currentValue = o), ai(e, s), mt(e, s, r, a), s.child;
        case 6: return e === null && je && ((e = a = Le) && (a = wy(a, s.pendingProps, $t), a !== null ? (s.stateNode = a, dt = s, Le = null, e = !0) : e = !1), e || Ps(s)), null;
        case 13: return kf(e, s, a);
        case 4: return ka(s, s.stateNode.containerInfo), r = s.pendingProps, e === null ? s.child = Ha(s, null, r, a) : mt(e, s, r, a), s.child;
        case 11: return pf(e, s, s.type, s.pendingProps, a);
        case 7: return mt(e, s, s.pendingProps, a), s.child;
        case 8: return mt(e, s, s.pendingProps.children, a), s.child;
        case 12: return mt(e, s, s.pendingProps.children, a), s.child;
        case 10: return r = s.pendingProps, Is(s, s.type, r.value), mt(e, s, r.children, a), s.child;
        case 9: return o = s.type._context, r = s.pendingProps.children, Ba(s), o = ut(o), r = r(o), s.flags |= 1, mt(e, s, r, a), s.child;
        case 14: return gf(e, s, s.type, s.pendingProps, a);
        case 15: return bf(e, s, s.type, s.pendingProps, a);
        case 19: return Af(e, s, a);
        case 31: return Yb(e, s, a);
        case 22: return yf(e, s, a, s.pendingProps);
        case 24: return Ba(s), r = ut(Ie), e === null ? (o = vo(), o === null && (o = Be, d = bo(), o.pooledCache = d, d.refCount++, d !== null && (o.pooledCacheLanes |= a), o = d), s.memoizedState = { parent: r, cache: o }, No(s), Is(s, Ie, o)) : ((e.lanes & a) !== 0 && (wo(e, s), Nn(s, null, null, a), jn()), o = e.memoizedState, d = s.memoizedState, o.parent !== r ? (o = { parent: r, cache: r }, s.memoizedState = o, s.lanes === 0 && (s.memoizedState = s.updateQueue.baseState = o), Is(s, Ie, r)) : (r = d.cache, Is(s, Ie, r), r !== o.cache && go(s, [Ie], a, !0))), mt(e, s, s.pendingProps.children, a), s.child;
        case 29: throw s.pendingProps;
    } throw Error(c(156, s.tag)); }
    function _s(e) { e.flags |= 4; }
    function ld(e, s, a, r, o) { if ((s = (e.mode & 32) !== 0) && (s = !1), s) {
        if (e.flags |= 16777216, (o & 335544128) === o)
            if (e.stateNode.complete)
                e.flags |= 8192;
            else if (tx())
                e.flags |= 8192;
            else
                throw La = Gr, jo;
    }
    else
        e.flags &= -16777217; }
    function Ef(e, s) { if (s.type !== "stylesheet" || (s.state.loading & 4) !== 0)
        e.flags &= -16777217;
    else if (e.flags |= 16777216, !Kx(s))
        if (tx())
            e.flags |= 8192;
        else
            throw La = Gr, jo; }
    function ni(e, s) { s !== null && (e.flags |= 4), e.flags & 16384 && (s = e.tag !== 22 ? im() : 536870912, e.lanes |= s, Ml |= s); }
    function Tn(e, s) { if (!je)
        switch (e.tailMode) {
            case "hidden":
                s = e.tail;
                for (var a = null; s !== null;)
                    s.alternate !== null && (a = s), s = s.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = e.tail;
                for (var r = null; a !== null;)
                    a.alternate !== null && (r = a), a = a.sibling;
                r === null ? s || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        } }
    function He(e) { var s = e.alternate !== null && e.alternate.child === e.child, a = 0, r = 0; if (s)
        for (var o = e.child; o !== null;)
            a |= o.lanes | o.childLanes, r |= o.subtreeFlags & 65011712, r |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;)
            a |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling; return e.subtreeFlags |= r, e.childLanes = a, s; }
    function Zb(e, s, a) { var r = s.pendingProps; switch (mo(s), s.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14: return He(s), null;
        case 1: return He(s), null;
        case 3: return a = s.stateNode, r = null, e !== null && (r = e.memoizedState.cache), s.memoizedState.cache !== r && (s.flags |= 2048), Ts(Ie), as(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (gl(s) ? _s(s) : e === null || e.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, fo())), He(s), null;
        case 26:
            var o = s.type, d = s.memoizedState;
            return e === null ? (_s(s), d !== null ? (He(s), Ef(s, d)) : (He(s), ld(s, o, null, r, a))) : d ? d !== e.memoizedState ? (_s(s), He(s), Ef(s, d)) : (He(s), s.flags &= -16777217) : (e = e.memoizedProps, e !== r && _s(s), He(s), ld(s, o, e, r, a)), null;
        case 27:
            if (Ks(s), a = at.current, o = s.type, e !== null && s.stateNode != null)
                e.memoizedProps !== r && _s(s);
            else {
                if (!r) {
                    if (s.stateNode === null)
                        throw Error(c(166));
                    return He(s), null;
                }
                e = oe.current, gl(s) ? ih(s) : (e = Bx(o, r, a), s.stateNode = e, _s(s));
            }
            return He(s), null;
        case 5:
            if (Ks(s), o = s.type, e !== null && s.stateNode != null)
                e.memoizedProps !== r && _s(s);
            else {
                if (!r) {
                    if (s.stateNode === null)
                        throw Error(c(166));
                    return He(s), null;
                }
                if (d = oe.current, gl(s))
                    ih(s);
                else {
                    var x = vi(at.current);
                    switch (d) {
                        case 1:
                            d = x.createElementNS("http://www.w3.org/2000/svg", o);
                            break;
                        case 2:
                            d = x.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                            break;
                        default: switch (o) {
                            case "svg":
                                d = x.createElementNS("http://www.w3.org/2000/svg", o);
                                break;
                            case "math":
                                d = x.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                                break;
                            case "script":
                                d = x.createElement("div"), d.innerHTML = "<script><\/script>", d = d.removeChild(d.firstChild);
                                break;
                            case "select":
                                d = typeof r.is == "string" ? x.createElement("select", { is: r.is }) : x.createElement("select"), r.multiple ? d.multiple = !0 : r.size && (d.size = r.size);
                                break;
                            default: d = typeof r.is == "string" ? x.createElement(o, { is: r.is }) : x.createElement(o);
                        }
                    }
                    d[ot] = s, d[jt] = r;
                    e: for (x = s.child; x !== null;) {
                        if (x.tag === 5 || x.tag === 6)
                            d.appendChild(x.stateNode);
                        else if (x.tag !== 4 && x.tag !== 27 && x.child !== null) {
                            x.child.return = x, x = x.child;
                            continue;
                        }
                        if (x === s)
                            break e;
                        for (; x.sibling === null;) {
                            if (x.return === null || x.return === s)
                                break e;
                            x = x.return;
                        }
                        x.sibling.return = x.return, x = x.sibling;
                    }
                    s.stateNode = d;
                    e: switch (ht(d, o, r), o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default: r = !1;
                    }
                    r && _s(s);
                }
            }
            return He(s), ld(s, s.type, e === null ? null : e.memoizedProps, s.pendingProps, a), null;
        case 6:
            if (e && s.stateNode != null)
                e.memoizedProps !== r && _s(s);
            else {
                if (typeof r != "string" && s.stateNode === null)
                    throw Error(c(166));
                if (e = at.current, gl(s)) {
                    if (e = s.stateNode, a = s.memoizedProps, r = null, o = dt, o !== null)
                        switch (o.tag) {
                            case 27:
                            case 5: r = o.memoizedProps;
                        }
                    e[ot] = s, e = !!(e.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || kx(e.nodeValue, a)), e || Ps(s, !0);
                }
                else
                    e = vi(e).createTextNode(r), e[ot] = s, s.stateNode = e;
            }
            return He(s), null;
        case 31:
            if (a = s.memoizedState, e === null || e.memoizedState !== null) {
                if (r = gl(s), a !== null) {
                    if (e === null) {
                        if (!r)
                            throw Error(c(318));
                        if (e = s.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                            throw Error(c(557));
                        e[ot] = s;
                    }
                    else
                        za(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
                    He(s), e = !1;
                }
                else
                    a = fo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
                if (!e)
                    return s.flags & 256 ? (Bt(s), s) : (Bt(s), null);
                if ((s.flags & 128) !== 0)
                    throw Error(c(558));
            }
            return He(s), null;
        case 13:
            if (r = s.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (o = gl(s), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(c(318));
                        if (o = s.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                            throw Error(c(317));
                        o[ot] = s;
                    }
                    else
                        za(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
                    He(s), o = !1;
                }
                else
                    o = fo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
                if (!o)
                    return s.flags & 256 ? (Bt(s), s) : (Bt(s), null);
            }
            return Bt(s), (s.flags & 128) !== 0 ? (s.lanes = a, s) : (a = r !== null, e = e !== null && e.memoizedState !== null, a && (r = s.child, o = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (o = r.alternate.memoizedState.cachePool.pool), d = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (d = r.memoizedState.cachePool.pool), d !== o && (r.flags |= 2048)), a !== e && a && (s.child.flags |= 8192), ni(s, s.updateQueue), He(s), null);
        case 4: return as(), e === null && Cd(s.stateNode.containerInfo), He(s), null;
        case 10: return Ts(s.type), He(s), null;
        case 19:
            if (fe(Fe), r = s.memoizedState, r === null)
                return He(s), null;
            if (o = (s.flags & 128) !== 0, d = r.rendering, d === null)
                if (o)
                    Tn(r, !1);
                else {
                    if (Xe !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = s.child; e !== null;) {
                            if (d = Xr(e), d !== null) {
                                for (s.flags |= 128, Tn(r, !1), e = d.updateQueue, s.updateQueue = e, ni(s, e), s.subtreeFlags = 0, e = a, a = s.child; a !== null;)
                                    sh(a, e), a = a.sibling;
                                return ae(Fe, Fe.current & 1 | 2), je && Cs(s, r.treeForkCount), s.child;
                            }
                            e = e.sibling;
                        }
                    r.tail !== null && Mt() > di && (s.flags |= 128, o = !0, Tn(r, !1), s.lanes = 4194304);
                }
            else {
                if (!o)
                    if (e = Xr(d), e !== null) {
                        if (s.flags |= 128, o = !0, e = e.updateQueue, s.updateQueue = e, ni(s, e), Tn(r, !0), r.tail === null && r.tailMode === "hidden" && !d.alternate && !je)
                            return He(s), null;
                    }
                    else
                        2 * Mt() - r.renderingStartTime > di && a !== 536870912 && (s.flags |= 128, o = !0, Tn(r, !1), s.lanes = 4194304);
                r.isBackwards ? (d.sibling = s.child, s.child = d) : (e = r.last, e !== null ? e.sibling = d : s.child = d, r.last = d);
            }
            return r.tail !== null ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Mt(), e.sibling = null, a = Fe.current, ae(Fe, o ? a & 1 | 2 : a & 1), je && Cs(s, r.treeForkCount), e) : (He(s), null);
        case 22:
        case 23: return Bt(s), Ao(), r = s.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (s.flags |= 8192) : r && (s.flags |= 8192), r ? (a & 536870912) !== 0 && (s.flags & 128) === 0 && (He(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : He(s), a = s.updateQueue, a !== null && ni(s, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), r = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (r = s.memoizedState.cachePool.pool), r !== a && (s.flags |= 2048), e !== null && fe(qa), null;
        case 24: return a = null, e !== null && (a = e.memoizedState.cache), s.memoizedState.cache !== a && (s.flags |= 2048), Ts(Ie), He(s), null;
        case 25: return null;
        case 30: return null;
    } throw Error(c(156, s.tag)); }
    function Fb(e, s) { switch (mo(s), s.tag) {
        case 1: return e = s.flags, e & 65536 ? (s.flags = e & -65537 | 128, s) : null;
        case 3: return Ts(Ie), as(), e = s.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (s.flags = e & -65537 | 128, s) : null;
        case 26:
        case 27:
        case 5: return Ks(s), null;
        case 31:
            if (s.memoizedState !== null) {
                if (Bt(s), s.alternate === null)
                    throw Error(c(340));
                za();
            }
            return e = s.flags, e & 65536 ? (s.flags = e & -65537 | 128, s) : null;
        case 13:
            if (Bt(s), e = s.memoizedState, e !== null && e.dehydrated !== null) {
                if (s.alternate === null)
                    throw Error(c(340));
                za();
            }
            return e = s.flags, e & 65536 ? (s.flags = e & -65537 | 128, s) : null;
        case 19: return fe(Fe), null;
        case 4: return as(), null;
        case 10: return Ts(s.type), null;
        case 22:
        case 23: return Bt(s), Ao(), e !== null && fe(qa), e = s.flags, e & 65536 ? (s.flags = e & -65537 | 128, s) : null;
        case 24: return Ts(Ie), null;
        case 25: return null;
        default: return null;
    } }
    function Mf(e, s) { switch (mo(s), s.tag) {
        case 3:
            Ts(Ie), as();
            break;
        case 26:
        case 27:
        case 5:
            Ks(s);
            break;
        case 4:
            as();
            break;
        case 31:
            s.memoizedState !== null && Bt(s);
            break;
        case 13:
            Bt(s);
            break;
        case 19:
            fe(Fe);
            break;
        case 10:
            Ts(s.type);
            break;
        case 22:
        case 23:
            Bt(s), Ao(), e !== null && fe(qa);
            break;
        case 24: Ts(Ie);
    } }
    function En(e, s) { try {
        var a = s.updateQueue, r = a !== null ? a.lastEffect : null;
        if (r !== null) {
            var o = r.next;
            a = o;
            do {
                if ((a.tag & e) === e) {
                    r = void 0;
                    var d = a.create, x = a.inst;
                    r = d(), x.destroy = r;
                }
                a = a.next;
            } while (a !== o);
        }
    }
    catch (y) {
        Me(s, s.return, y);
    } }
    function la(e, s, a) { try {
        var r = s.updateQueue, o = r !== null ? r.lastEffect : null;
        if (o !== null) {
            var d = o.next;
            r = d;
            do {
                if ((r.tag & e) === e) {
                    var x = r.inst, y = x.destroy;
                    if (y !== void 0) {
                        x.destroy = void 0, o = s;
                        var k = a, B = y;
                        try {
                            B();
                        }
                        catch (G) {
                            Me(o, k, G);
                        }
                    }
                }
                r = r.next;
            } while (r !== d);
        }
    }
    catch (G) {
        Me(s, s.return, G);
    } }
    function Df(e) { var s = e.updateQueue; if (s !== null) {
        var a = e.stateNode;
        try {
            vh(s, a);
        }
        catch (r) {
            Me(e, e.return, r);
        }
    } }
    function _f(e, s, a) { a.props = Ga(e.type, e.memoizedProps), a.state = e.memoizedState; try {
        a.componentWillUnmount();
    }
    catch (r) {
        Me(e, s, r);
    } }
    function Mn(e, s) { try {
        var a = e.ref;
        if (a !== null) {
            switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var r = e.stateNode;
                    break;
                case 30:
                    r = e.stateNode;
                    break;
                default: r = e.stateNode;
            }
            typeof a == "function" ? e.refCleanup = a(r) : a.current = r;
        }
    }
    catch (o) {
        Me(e, s, o);
    } }
    function ms(e, s) { var a = e.ref, r = e.refCleanup; if (a !== null)
        if (typeof r == "function")
            try {
                r();
            }
            catch (o) {
                Me(e, s, o);
            }
            finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
        else if (typeof a == "function")
            try {
                a(null);
            }
            catch (o) {
                Me(e, s, o);
            }
        else
            a.current = null; }
    function Of(e) { var s = e.type, a = e.memoizedProps, r = e.stateNode; try {
        e: switch (s) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && r.focus();
                break e;
            case "img": a.src ? r.src = a.src : a.srcSet && (r.srcset = a.srcSet);
        }
    }
    catch (o) {
        Me(e, e.return, o);
    } }
    function nd(e, s, a) { try {
        var r = e.stateNode;
        py(r, e.type, a, s), r[jt] = s;
    }
    catch (o) {
        Me(e, e.return, o);
    } }
    function zf(e) { return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ua(e.type) || e.tag === 4; }
    function rd(e) { e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || zf(e.return))
                return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.tag === 27 && ua(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
            return e.stateNode;
    } }
    function id(e, s, a) { var r = e.tag; if (r === 5 || r === 6)
        e = e.stateNode, s ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, s) : (s = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, s.appendChild(e), a = a._reactRootContainer, a != null || s.onclick !== null || (s.onclick = ws));
    else if (r !== 4 && (r === 27 && ua(e.type) && (a = e.stateNode, s = null), e = e.child, e !== null))
        for (id(e, s, a), e = e.sibling; e !== null;)
            id(e, s, a), e = e.sibling; }
    function ri(e, s, a) { var r = e.tag; if (r === 5 || r === 6)
        e = e.stateNode, s ? a.insertBefore(e, s) : a.appendChild(e);
    else if (r !== 4 && (r === 27 && ua(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (ri(e, s, a), e = e.sibling; e !== null;)
            ri(e, s, a), e = e.sibling; }
    function Rf(e) { var s = e.stateNode, a = e.memoizedProps; try {
        for (var r = e.type, o = s.attributes; o.length;)
            s.removeAttributeNode(o[0]);
        ht(s, r, a), s[ot] = e, s[jt] = a;
    }
    catch (d) {
        Me(e, e.return, d);
    } }
    var Os = !1, tt = !1, cd = !1, Bf = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
    function Jb(e, s) { if (e = e.containerInfo, Ed = Ai, e = Zm(e), eo(e)) {
        if ("selectionStart" in e)
            var a = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                a = (a = e.ownerDocument) && a.defaultView || window;
                var r = a.getSelection && a.getSelection();
                if (r && r.rangeCount !== 0) {
                    a = r.anchorNode;
                    var o = r.anchorOffset, d = r.focusNode;
                    r = r.focusOffset;
                    try {
                        a.nodeType, d.nodeType;
                    }
                    catch {
                        a = null;
                        break e;
                    }
                    var x = 0, y = -1, k = -1, B = 0, G = 0, Y = e, q = null;
                    t: for (;;) {
                        for (var H; Y !== a || o !== 0 && Y.nodeType !== 3 || (y = x + o), Y !== d || r !== 0 && Y.nodeType !== 3 || (k = x + r), Y.nodeType === 3 && (x += Y.nodeValue.length), (H = Y.firstChild) !== null;)
                            q = Y, Y = H;
                        for (;;) {
                            if (Y === e)
                                break t;
                            if (q === a && ++B === o && (y = x), q === d && ++G === r && (k = x), (H = Y.nextSibling) !== null)
                                break;
                            Y = q, q = Y.parentNode;
                        }
                        Y = H;
                    }
                    a = y === -1 || k === -1 ? null : { start: y, end: k };
                }
                else
                    a = null;
            }
        a = a || { start: 0, end: 0 };
    }
    else
        a = null; for (Md = { focusedElem: e, selectionRange: a }, Ai = !1, ct = s; ct !== null;)
        if (s = ct, e = s.child, (s.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = s, ct = e;
        else
            for (; ct !== null;) {
                switch (s = ct, d = s.alternate, e = s.flags, s.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = s.updateQueue, e = e !== null ? e.events : null, e !== null))
                            for (a = 0; a < e.length; a++)
                                o = e[a], o.ref.impl = o.nextImpl;
                        break;
                    case 11:
                    case 15: break;
                    case 1:
                        if ((e & 1024) !== 0 && d !== null) {
                            e = void 0, a = s, o = d.memoizedProps, d = d.memoizedState, r = a.stateNode;
                            try {
                                var P = Ga(a.type, o);
                                e = r.getSnapshotBeforeUpdate(P, d), r.__reactInternalSnapshotBeforeUpdate = e;
                            }
                            catch (ce) {
                                Me(a, a.return, ce);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = s.stateNode.containerInfo, a = e.nodeType, a === 9)
                                Od(e);
                            else if (a === 1)
                                switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Od(e);
                                        break;
                                    default: e.textContent = "";
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17: break;
                    default: if ((e & 1024) !== 0)
                        throw Error(c(163));
                }
                if (e = s.sibling, e !== null) {
                    e.return = s.return, ct = e;
                    break;
                }
                ct = s.return;
            } }
    function qf(e, s, a) { var r = a.flags; switch (a.tag) {
        case 0:
        case 11:
        case 15:
            Rs(e, a), r & 4 && En(5, a);
            break;
        case 1:
            if (Rs(e, a), r & 4)
                if (e = a.stateNode, s === null)
                    try {
                        e.componentDidMount();
                    }
                    catch (x) {
                        Me(a, a.return, x);
                    }
                else {
                    var o = Ga(a.type, s.memoizedProps);
                    s = s.memoizedState;
                    try {
                        e.componentDidUpdate(o, s, e.__reactInternalSnapshotBeforeUpdate);
                    }
                    catch (x) {
                        Me(a, a.return, x);
                    }
                }
            r & 64 && Df(a), r & 512 && Mn(a, a.return);
            break;
        case 3:
            if (Rs(e, a), r & 64 && (e = a.updateQueue, e !== null)) {
                if (s = null, a.child !== null)
                    switch (a.child.tag) {
                        case 27:
                        case 5:
                            s = a.child.stateNode;
                            break;
                        case 1: s = a.child.stateNode;
                    }
                try {
                    vh(e, s);
                }
                catch (x) {
                    Me(a, a.return, x);
                }
            }
            break;
        case 27: s === null && r & 4 && Rf(a);
        case 26:
        case 5:
            Rs(e, a), s === null && r & 4 && Of(a), r & 512 && Mn(a, a.return);
            break;
        case 12:
            Rs(e, a);
            break;
        case 31:
            Rs(e, a), r & 4 && Hf(e, a);
            break;
        case 13:
            Rs(e, a), r & 4 && Vf(e, a), r & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = ly.bind(null, a), Sy(e, a))));
            break;
        case 22:
            if (r = a.memoizedState !== null || Os, !r) {
                s = s !== null && s.memoizedState !== null || tt, o = Os;
                var d = tt;
                Os = r, (tt = s) && !d ? Bs(e, a, (a.subtreeFlags & 8772) !== 0) : Rs(e, a), Os = o, tt = d;
            }
            break;
        case 30: break;
        default: Rs(e, a);
    } }
    function Uf(e) { var s = e.alternate; s !== null && (e.alternate = null, Uf(s)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (s = e.stateNode, s !== null && qc(s)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
    var Ge = null, wt = !1;
    function zs(e, s, a) { for (a = a.child; a !== null;)
        Lf(e, s, a), a = a.sibling; }
    function Lf(e, s, a) { if (Dt && typeof Dt.onCommitFiberUnmount == "function")
        try {
            Dt.onCommitFiberUnmount(Wl, a);
        }
        catch { } switch (a.tag) {
        case 26:
            tt || ms(a, s), zs(e, s, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
            break;
        case 27:
            tt || ms(a, s);
            var r = Ge, o = wt;
            ua(a.type) && (Ge = a.stateNode, wt = !1), zs(e, s, a), Ln(a.stateNode), Ge = r, wt = o;
            break;
        case 5: tt || ms(a, s);
        case 6:
            if (r = Ge, o = wt, Ge = null, zs(e, s, a), Ge = r, wt = o, Ge !== null)
                if (wt)
                    try {
                        (Ge.nodeType === 9 ? Ge.body : Ge.nodeName === "HTML" ? Ge.ownerDocument.body : Ge).removeChild(a.stateNode);
                    }
                    catch (d) {
                        Me(a, s, d);
                    }
                else
                    try {
                        Ge.removeChild(a.stateNode);
                    }
                    catch (d) {
                        Me(a, s, d);
                    }
            break;
        case 18:
            Ge !== null && (wt ? (e = Ge, Dx(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), Ul(e)) : Dx(Ge, a.stateNode));
            break;
        case 4:
            r = Ge, o = wt, Ge = a.stateNode.containerInfo, wt = !0, zs(e, s, a), Ge = r, wt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            la(2, a, s), tt || la(4, a, s), zs(e, s, a);
            break;
        case 1:
            tt || (ms(a, s), r = a.stateNode, typeof r.componentWillUnmount == "function" && _f(a, s, r)), zs(e, s, a);
            break;
        case 21:
            zs(e, s, a);
            break;
        case 22:
            tt = (r = tt) || a.memoizedState !== null, zs(e, s, a), tt = r;
            break;
        default: zs(e, s, a);
    } }
    function Hf(e, s) { if (s.memoizedState === null && (e = s.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
            Ul(e);
        }
        catch (a) {
            Me(s, s.return, a);
        }
    } }
    function Vf(e, s) { if (s.memoizedState === null && (e = s.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
            Ul(e);
        }
        catch (a) {
            Me(s, s.return, a);
        } }
    function $b(e) { switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var s = e.stateNode;
            return s === null && (s = e.stateNode = new Bf), s;
        case 22: return e = e.stateNode, s = e._retryCache, s === null && (s = e._retryCache = new Bf), s;
        default: throw Error(c(435, e.tag));
    } }
    function ii(e, s) { var a = $b(e); s.forEach(function (r) { if (!a.has(r)) {
        a.add(r);
        var o = ny.bind(null, e, r);
        r.then(o, o);
    } }); }
    function St(e, s) { var a = s.deletions; if (a !== null)
        for (var r = 0; r < a.length; r++) {
            var o = a[r], d = e, x = s, y = x;
            e: for (; y !== null;) {
                switch (y.tag) {
                    case 27:
                        if (ua(y.type)) {
                            Ge = y.stateNode, wt = !1;
                            break e;
                        }
                        break;
                    case 5:
                        Ge = y.stateNode, wt = !1;
                        break e;
                    case 3:
                    case 4:
                        Ge = y.stateNode.containerInfo, wt = !0;
                        break e;
                }
                y = y.return;
            }
            if (Ge === null)
                throw Error(c(160));
            Lf(d, x, o), Ge = null, wt = !1, d = o.alternate, d !== null && (d.return = null), o.return = null;
        } if (s.subtreeFlags & 13886)
        for (s = s.child; s !== null;)
            Gf(s, e), s = s.sibling; }
    var ns = null;
    function Gf(e, s) { var a = e.alternate, r = e.flags; switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            St(s, e), kt(e), r & 4 && (la(3, e, e.return), En(3, e), la(5, e, e.return));
            break;
        case 1:
            St(s, e), kt(e), r & 512 && (tt || a === null || ms(a, a.return)), r & 64 && Os && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
            break;
        case 26:
            var o = ns;
            if (St(s, e), kt(e), r & 512 && (tt || a === null || ms(a, a.return)), r & 4) {
                var d = a !== null ? a.memoizedState : null;
                if (r = e.memoizedState, a === null)
                    if (r === null)
                        if (e.stateNode === null) {
                            e: {
                                r = e.type, a = e.memoizedProps, o = o.ownerDocument || o;
                                t: switch (r) {
                                    case "title":
                                        d = o.getElementsByTagName("title")[0], (!d || d[sn] || d[ot] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = o.createElement(r), o.head.insertBefore(d, o.querySelector("head > title"))), ht(d, r, a), d[ot] = e, it(d), r = d;
                                        break e;
                                    case "link":
                                        var x = Gx("link", "href", o).get(r + (a.href || ""));
                                        if (x) {
                                            for (var y = 0; y < x.length; y++)
                                                if (d = x[y], d.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && d.getAttribute("rel") === (a.rel == null ? null : a.rel) && d.getAttribute("title") === (a.title == null ? null : a.title) && d.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                    x.splice(y, 1);
                                                    break t;
                                                }
                                        }
                                        d = o.createElement(r), ht(d, r, a), o.head.appendChild(d);
                                        break;
                                    case "meta":
                                        if (x = Gx("meta", "content", o).get(r + (a.content || ""))) {
                                            for (y = 0; y < x.length; y++)
                                                if (d = x[y], d.getAttribute("content") === (a.content == null ? null : "" + a.content) && d.getAttribute("name") === (a.name == null ? null : a.name) && d.getAttribute("property") === (a.property == null ? null : a.property) && d.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && d.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                    x.splice(y, 1);
                                                    break t;
                                                }
                                        }
                                        d = o.createElement(r), ht(d, r, a), o.head.appendChild(d);
                                        break;
                                    default: throw Error(c(468, r));
                                }
                                d[ot] = e, it(d), r = d;
                            }
                            e.stateNode = r;
                        }
                        else
                            Qx(o, e.type, e.stateNode);
                    else
                        e.stateNode = Vx(o, r, e.memoizedProps);
                else
                    d !== r ? (d === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : d.count--, r === null ? Qx(o, e.type, e.stateNode) : Vx(o, r, e.memoizedProps)) : r === null && e.stateNode !== null && nd(e, e.memoizedProps, a.memoizedProps);
            }
            break;
        case 27:
            St(s, e), kt(e), r & 512 && (tt || a === null || ms(a, a.return)), a !== null && r & 4 && nd(e, e.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (St(s, e), kt(e), r & 512 && (tt || a === null || ms(a, a.return)), e.flags & 32) {
                o = e.stateNode;
                try {
                    il(o, "");
                }
                catch (P) {
                    Me(e, e.return, P);
                }
            }
            r & 4 && e.stateNode != null && (o = e.memoizedProps, nd(e, o, a !== null ? a.memoizedProps : o)), r & 1024 && (cd = !0);
            break;
        case 6:
            if (St(s, e), kt(e), r & 4) {
                if (e.stateNode === null)
                    throw Error(c(162));
                r = e.memoizedProps, a = e.stateNode;
                try {
                    a.nodeValue = r;
                }
                catch (P) {
                    Me(e, e.return, P);
                }
            }
            break;
        case 3:
            if (wi = null, o = ns, ns = ji(s.containerInfo), St(s, e), ns = o, kt(e), r & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Ul(s.containerInfo);
                }
                catch (P) {
                    Me(e, e.return, P);
                }
            cd && (cd = !1, Qf(e));
            break;
        case 4:
            r = ns, ns = ji(e.stateNode.containerInfo), St(s, e), kt(e), ns = r;
            break;
        case 12:
            St(s, e), kt(e);
            break;
        case 31:
            St(s, e), kt(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, ii(e, r)));
            break;
        case 13:
            St(s, e), kt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (oi = Mt()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, ii(e, r)));
            break;
        case 22:
            o = e.memoizedState !== null;
            var k = a !== null && a.memoizedState !== null, B = Os, G = tt;
            if (Os = B || o, tt = G || k, St(s, e), tt = G, Os = B, kt(e), r & 8192)
                e: for (s = e.stateNode, s._visibility = o ? s._visibility & -2 : s._visibility | 1, o && (a === null || k || Os || tt || Qa(e)), a = null, s = e;;) {
                    if (s.tag === 5 || s.tag === 26) {
                        if (a === null) {
                            k = a = s;
                            try {
                                if (d = k.stateNode, o)
                                    x = d.style, typeof x.setProperty == "function" ? x.setProperty("display", "none", "important") : x.display = "none";
                                else {
                                    y = k.stateNode;
                                    var Y = k.memoizedProps.style, q = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                                    y.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                                }
                            }
                            catch (P) {
                                Me(k, k.return, P);
                            }
                        }
                    }
                    else if (s.tag === 6) {
                        if (a === null) {
                            k = s;
                            try {
                                k.stateNode.nodeValue = o ? "" : k.memoizedProps;
                            }
                            catch (P) {
                                Me(k, k.return, P);
                            }
                        }
                    }
                    else if (s.tag === 18) {
                        if (a === null) {
                            k = s;
                            try {
                                var H = k.stateNode;
                                o ? _x(H, !0) : _x(k.stateNode, !1);
                            }
                            catch (P) {
                                Me(k, k.return, P);
                            }
                        }
                    }
                    else if ((s.tag !== 22 && s.tag !== 23 || s.memoizedState === null || s === e) && s.child !== null) {
                        s.child.return = s, s = s.child;
                        continue;
                    }
                    if (s === e)
                        break e;
                    for (; s.sibling === null;) {
                        if (s.return === null || s.return === e)
                            break e;
                        a === s && (a = null), s = s.return;
                    }
                    a === s && (a = null), s.sibling.return = s.return, s = s.sibling;
                }
            r & 4 && (r = e.updateQueue, r !== null && (a = r.retryQueue, a !== null && (r.retryQueue = null, ii(e, a))));
            break;
        case 19:
            St(s, e), kt(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, ii(e, r)));
            break;
        case 30: break;
        case 21: break;
        default: St(s, e), kt(e);
    } }
    function kt(e) { var s = e.flags; if (s & 2) {
        try {
            for (var a, r = e.return; r !== null;) {
                if (zf(r)) {
                    a = r;
                    break;
                }
                r = r.return;
            }
            if (a == null)
                throw Error(c(160));
            switch (a.tag) {
                case 27:
                    var o = a.stateNode, d = rd(e);
                    ri(e, d, o);
                    break;
                case 5:
                    var x = a.stateNode;
                    a.flags & 32 && (il(x, ""), a.flags &= -33);
                    var y = rd(e);
                    ri(e, y, x);
                    break;
                case 3:
                case 4:
                    var k = a.stateNode.containerInfo, B = rd(e);
                    id(e, B, k);
                    break;
                default: throw Error(c(161));
            }
        }
        catch (G) {
            Me(e, e.return, G);
        }
        e.flags &= -3;
    } s & 4096 && (e.flags &= -4097); }
    function Qf(e) { if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
            var s = e;
            Qf(s), s.tag === 5 && s.flags & 1024 && s.stateNode.reset(), e = e.sibling;
        } }
    function Rs(e, s) { if (s.subtreeFlags & 8772)
        for (s = s.child; s !== null;)
            qf(e, s.alternate, s), s = s.sibling; }
    function Qa(e) { for (e = e.child; e !== null;) {
        var s = e;
        switch (s.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                la(4, s, s.return), Qa(s);
                break;
            case 1:
                ms(s, s.return);
                var a = s.stateNode;
                typeof a.componentWillUnmount == "function" && _f(s, s.return, a), Qa(s);
                break;
            case 27: Ln(s.stateNode);
            case 26:
            case 5:
                ms(s, s.return), Qa(s);
                break;
            case 22:
                s.memoizedState === null && Qa(s);
                break;
            case 30:
                Qa(s);
                break;
            default: Qa(s);
        }
        e = e.sibling;
    } }
    function Bs(e, s, a) { for (a = a && (s.subtreeFlags & 8772) !== 0, s = s.child; s !== null;) {
        var r = s.alternate, o = e, d = s, x = d.flags;
        switch (d.tag) {
            case 0:
            case 11:
            case 15:
                Bs(o, d, a), En(4, d);
                break;
            case 1:
                if (Bs(o, d, a), r = d, o = r.stateNode, typeof o.componentDidMount == "function")
                    try {
                        o.componentDidMount();
                    }
                    catch (B) {
                        Me(r, r.return, B);
                    }
                if (r = d, o = r.updateQueue, o !== null) {
                    var y = r.stateNode;
                    try {
                        var k = o.shared.hiddenCallbacks;
                        if (k !== null)
                            for (o.shared.hiddenCallbacks = null, o = 0; o < k.length; o++)
                                yh(k[o], y);
                    }
                    catch (B) {
                        Me(r, r.return, B);
                    }
                }
                a && x & 64 && Df(d), Mn(d, d.return);
                break;
            case 27: Rf(d);
            case 26:
            case 5:
                Bs(o, d, a), a && r === null && x & 4 && Of(d), Mn(d, d.return);
                break;
            case 12:
                Bs(o, d, a);
                break;
            case 31:
                Bs(o, d, a), a && x & 4 && Hf(o, d);
                break;
            case 13:
                Bs(o, d, a), a && x & 4 && Vf(o, d);
                break;
            case 22:
                d.memoizedState === null && Bs(o, d, a), Mn(d, d.return);
                break;
            case 30: break;
            default: Bs(o, d, a);
        }
        s = s.sibling;
    } }
    function od(e, s) { var a = null; e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (e = s.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && pn(a)); }
    function dd(e, s) { e = null, s.alternate !== null && (e = s.alternate.memoizedState.cache), s = s.memoizedState.cache, s !== e && (s.refCount++, e != null && pn(e)); }
    function rs(e, s, a, r) { if (s.subtreeFlags & 10256)
        for (s = s.child; s !== null;)
            Kf(e, s, a, r), s = s.sibling; }
    function Kf(e, s, a, r) { var o = s.flags; switch (s.tag) {
        case 0:
        case 11:
        case 15:
            rs(e, s, a, r), o & 2048 && En(9, s);
            break;
        case 1:
            rs(e, s, a, r);
            break;
        case 3:
            rs(e, s, a, r), o & 2048 && (e = null, s.alternate !== null && (e = s.alternate.memoizedState.cache), s = s.memoizedState.cache, s !== e && (s.refCount++, e != null && pn(e)));
            break;
        case 12:
            if (o & 2048) {
                rs(e, s, a, r), e = s.stateNode;
                try {
                    var d = s.memoizedProps, x = d.id, y = d.onPostCommit;
                    typeof y == "function" && y(x, s.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                }
                catch (k) {
                    Me(s, s.return, k);
                }
            }
            else
                rs(e, s, a, r);
            break;
        case 31:
            rs(e, s, a, r);
            break;
        case 13:
            rs(e, s, a, r);
            break;
        case 23: break;
        case 22:
            d = s.stateNode, x = s.alternate, s.memoizedState !== null ? d._visibility & 2 ? rs(e, s, a, r) : Dn(e, s) : d._visibility & 2 ? rs(e, s, a, r) : (d._visibility |= 2, Al(e, s, a, r, (s.subtreeFlags & 10256) !== 0 || !1)), o & 2048 && od(x, s);
            break;
        case 24:
            rs(e, s, a, r), o & 2048 && dd(s.alternate, s);
            break;
        default: rs(e, s, a, r);
    } }
    function Al(e, s, a, r, o) { for (o = o && ((s.subtreeFlags & 10256) !== 0 || !1), s = s.child; s !== null;) {
        var d = e, x = s, y = a, k = r, B = x.flags;
        switch (x.tag) {
            case 0:
            case 11:
            case 15:
                Al(d, x, y, k, o), En(8, x);
                break;
            case 23: break;
            case 22:
                var G = x.stateNode;
                x.memoizedState !== null ? G._visibility & 2 ? Al(d, x, y, k, o) : Dn(d, x) : (G._visibility |= 2, Al(d, x, y, k, o)), o && B & 2048 && od(x.alternate, x);
                break;
            case 24:
                Al(d, x, y, k, o), o && B & 2048 && dd(x.alternate, x);
                break;
            default: Al(d, x, y, k, o);
        }
        s = s.sibling;
    } }
    function Dn(e, s) { if (s.subtreeFlags & 10256)
        for (s = s.child; s !== null;) {
            var a = e, r = s, o = r.flags;
            switch (r.tag) {
                case 22:
                    Dn(a, r), o & 2048 && od(r.alternate, r);
                    break;
                case 24:
                    Dn(a, r), o & 2048 && dd(r.alternate, r);
                    break;
                default: Dn(a, r);
            }
            s = s.sibling;
        } }
    var _n = 8192;
    function Tl(e, s, a) { if (e.subtreeFlags & _n)
        for (e = e.child; e !== null;)
            Yf(e, s, a), e = e.sibling; }
    function Yf(e, s, a) { switch (e.tag) {
        case 26:
            Tl(e, s, a), e.flags & _n && e.memoizedState !== null && By(a, ns, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Tl(e, s, a);
            break;
        case 3:
        case 4:
            var r = ns;
            ns = ji(e.stateNode.containerInfo), Tl(e, s, a), ns = r;
            break;
        case 22:
            e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = _n, _n = 16777216, Tl(e, s, a), _n = r) : Tl(e, s, a));
            break;
        default: Tl(e, s, a);
    } }
    function Xf(e) { var s = e.alternate; if (s !== null && (e = s.child, e !== null)) {
        s.child = null;
        do
            s = e.sibling, e.sibling = null, e = s;
        while (e !== null);
    } }
    function On(e) { var s = e.deletions; if ((e.flags & 16) !== 0) {
        if (s !== null)
            for (var a = 0; a < s.length; a++) {
                var r = s[a];
                ct = r, Ff(r, e);
            }
        Xf(e);
    } if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;)
            Zf(e), e = e.sibling; }
    function Zf(e) { switch (e.tag) {
        case 0:
        case 11:
        case 15:
            On(e), e.flags & 2048 && la(9, e, e.return);
            break;
        case 3:
            On(e);
            break;
        case 12:
            On(e);
            break;
        case 22:
            var s = e.stateNode;
            e.memoizedState !== null && s._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (s._visibility &= -3, ci(e)) : On(e);
            break;
        default: On(e);
    } }
    function ci(e) { var s = e.deletions; if ((e.flags & 16) !== 0) {
        if (s !== null)
            for (var a = 0; a < s.length; a++) {
                var r = s[a];
                ct = r, Ff(r, e);
            }
        Xf(e);
    } for (e = e.child; e !== null;) {
        switch (s = e, s.tag) {
            case 0:
            case 11:
            case 15:
                la(8, s, s.return), ci(s);
                break;
            case 22:
                a = s.stateNode, a._visibility & 2 && (a._visibility &= -3, ci(s));
                break;
            default: ci(s);
        }
        e = e.sibling;
    } }
    function Ff(e, s) { for (; ct !== null;) {
        var a = ct;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                la(8, a, s);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var r = a.memoizedState.cachePool.pool;
                    r != null && r.refCount++;
                }
                break;
            case 24: pn(a.memoizedState.cache);
        }
        if (r = a.child, r !== null)
            r.return = a, ct = r;
        else
            e: for (a = e; ct !== null;) {
                r = ct;
                var o = r.sibling, d = r.return;
                if (Uf(r), r === a) {
                    ct = null;
                    break e;
                }
                if (o !== null) {
                    o.return = d, ct = o;
                    break e;
                }
                ct = d;
            }
    } }
    var Pb = { getCacheForType: function (e) { var s = ut(Ie), a = s.data.get(e); return a === void 0 && (a = e(), s.data.set(e, a)), a; }, cacheSignal: function () { return ut(Ie).controller.signal; } }, Ib = typeof WeakMap == "function" ? WeakMap : Map, Ae = 0, Be = null, ge = null, ye = 0, Ee = 0, qt = null, na = !1, El = !1, ud = !1, qs = 0, Xe = 0, ra = 0, Ka = 0, md = 0, Ut = 0, Ml = 0, zn = null, Ct = null, hd = !1, oi = 0, Jf = 0, di = 1 / 0, ui = null, ia = null, lt = 0, ca = null, Dl = null, Us = 0, fd = 0, xd = null, $f = null, Rn = 0, pd = null;
    function Lt() { return (Ae & 2) !== 0 && ye !== 0 ? ye & -ye : R.T !== null ? Nd() : um(); }
    function Pf() { if (Ut === 0)
        if ((ye & 536870912) === 0 || je) {
            var e = yr;
            yr <<= 1, (yr & 3932160) === 0 && (yr = 262144), Ut = e;
        }
        else
            Ut = 536870912; return e = Rt.current, e !== null && (e.flags |= 32), Ut; }
    function At(e, s, a) { (e === Be && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (_l(e, 0), oa(e, ye, Ut, !1)), tn(e, a), ((Ae & 2) === 0 || e !== Be) && (e === Be && ((Ae & 2) === 0 && (Ka |= a), Xe === 4 && oa(e, ye, Ut, !1)), hs(e)); }
    function If(e, s, a) { if ((Ae & 6) !== 0)
        throw Error(c(327)); var r = !a && (s & 127) === 0 && (s & e.expiredLanes) === 0 || en(e, s), o = r ? ty(e, s) : bd(e, s, !0), d = r; do {
        if (o === 0) {
            El && !r && oa(e, s, 0, !1);
            break;
        }
        else {
            if (a = e.current.alternate, d && !Wb(a)) {
                o = bd(e, s, !1), d = !1;
                continue;
            }
            if (o === 2) {
                if (d = s, e.errorRecoveryDisabledLanes & d)
                    var x = 0;
                else
                    x = e.pendingLanes & -536870913, x = x !== 0 ? x : x & 536870912 ? 536870912 : 0;
                if (x !== 0) {
                    s = x;
                    e: {
                        var y = e;
                        o = zn;
                        var k = y.current.memoizedState.isDehydrated;
                        if (k && (_l(y, x).flags |= 256), x = bd(y, x, !1), x !== 2) {
                            if (ud && !k) {
                                y.errorRecoveryDisabledLanes |= d, Ka |= d, o = 4;
                                break e;
                            }
                            d = Ct, Ct = o, d !== null && (Ct === null ? Ct = d : Ct.push.apply(Ct, d));
                        }
                        o = x;
                    }
                    if (d = !1, o !== 2)
                        continue;
                }
            }
            if (o === 1) {
                _l(e, 0), oa(e, s, 0, !0);
                break;
            }
            e: {
                switch (r = e, d = o, d) {
                    case 0:
                    case 1: throw Error(c(345));
                    case 4: if ((s & 4194048) !== s)
                        break;
                    case 6:
                        oa(r, s, Ut, !na);
                        break e;
                    case 2:
                        Ct = null;
                        break;
                    case 3:
                    case 5: break;
                    default: throw Error(c(329));
                }
                if ((s & 62914560) === s && (o = oi + 300 - Mt(), 10 < o)) {
                    if (oa(r, s, Ut, !na), jr(r, 0, !0) !== 0)
                        break e;
                    Us = s, r.timeoutHandle = Ex(Wf.bind(null, r, a, Ct, ui, hd, s, Ut, Ka, Ml, na, d, "Throttled", -0, 0), o);
                    break e;
                }
                Wf(r, a, Ct, ui, hd, s, Ut, Ka, Ml, na, d, null, -0, 0);
            }
        }
        break;
    } while (!0); hs(e); }
    function Wf(e, s, a, r, o, d, x, y, k, B, G, Y, q, H) { if (e.timeoutHandle = -1, Y = s.subtreeFlags, Y & 8192 || (Y & 16785408) === 16785408) {
        Y = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: ws }, Yf(s, d, Y);
        var P = (d & 62914560) === d ? oi - Mt() : (d & 4194048) === d ? Jf - Mt() : 0;
        if (P = qy(Y, P), P !== null) {
            Us = d, e.cancelPendingCommit = P(ix.bind(null, e, s, d, a, r, o, x, y, k, G, Y, null, q, H)), oa(e, d, x, !B);
            return;
        }
    } ix(e, s, d, a, r, o, x, y, k); }
    function Wb(e) { for (var s = e;;) {
        var a = s.tag;
        if ((a === 0 || a === 11 || a === 15) && s.flags & 16384 && (a = s.updateQueue, a !== null && (a = a.stores, a !== null)))
            for (var r = 0; r < a.length; r++) {
                var o = a[r], d = o.getSnapshot;
                o = o.value;
                try {
                    if (!Ot(d(), o))
                        return !1;
                }
                catch {
                    return !1;
                }
            }
        if (a = s.child, s.subtreeFlags & 16384 && a !== null)
            a.return = s, s = a;
        else {
            if (s === e)
                break;
            for (; s.sibling === null;) {
                if (s.return === null || s.return === e)
                    return !0;
                s = s.return;
            }
            s.sibling.return = s.return, s = s.sibling;
        }
    } return !0; }
    function oa(e, s, a, r) { s &= ~md, s &= ~Ka, e.suspendedLanes |= s, e.pingedLanes &= ~s, r && (e.warmLanes |= s), r = e.expirationTimes; for (var o = s; 0 < o;) {
        var d = 31 - _t(o), x = 1 << d;
        r[d] = -1, o &= ~x;
    } a !== 0 && cm(e, a, s); }
    function mi() { return (Ae & 6) === 0 ? (Bn(0), !1) : !0; }
    function gd() { if (ge !== null) {
        if (Ee === 0)
            var e = ge.return;
        else
            e = ge, As = Ra = null, Oo(e), Nl = null, bn = 0, e = ge;
        for (; e !== null;)
            Mf(e.alternate, e), e = e.return;
        ge = null;
    } }
    function _l(e, s) { var a = e.timeoutHandle; a !== -1 && (e.timeoutHandle = -1, yy(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Us = 0, gd(), Be = e, ge = a = ks(e.current, null), ye = s, Ee = 0, qt = null, na = !1, El = en(e, s), ud = !1, Ml = Ut = md = Ka = ra = Xe = 0, Ct = zn = null, hd = !1, (s & 8) !== 0 && (s |= s & 32); var r = e.entangledLanes; if (r !== 0)
        for (e = e.entanglements, r &= s; 0 < r;) {
            var o = 31 - _t(r), d = 1 << o;
            s |= e[o], r &= ~d;
        } return qs = s, Or(), a; }
    function ex(e, s) { de = null, R.H = Cn, s === jl || s === Vr ? (s = xh(), Ee = 3) : s === jo ? (s = xh(), Ee = 4) : Ee = s === Jo ? 8 : s !== null && typeof s == "object" && typeof s.then == "function" ? 6 : 1, qt = s, ge === null && (Xe = 1, ti(e, Zt(s, e.current))); }
    function tx() { var e = Rt.current; return e === null ? !0 : (ye & 4194048) === ye ? Pt === null : (ye & 62914560) === ye || (ye & 536870912) !== 0 ? e === Pt : !1; }
    function sx() { var e = R.H; return R.H = Cn, e === null ? Cn : e; }
    function ax() { var e = R.A; return R.A = Pb, e; }
    function hi() { Xe = 4, na || (ye & 4194048) !== ye && Rt.current !== null || (El = !0), (ra & 134217727) === 0 && (Ka & 134217727) === 0 || Be === null || oa(Be, ye, Ut, !1); }
    function bd(e, s, a) { var r = Ae; Ae |= 2; var o = sx(), d = ax(); (Be !== e || ye !== s) && (ui = null, _l(e, s)), s = !1; var x = Xe; e: do
        try {
            if (Ee !== 0 && ge !== null) {
                var y = ge, k = qt;
                switch (Ee) {
                    case 8:
                        gd(), x = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Rt.current === null && (s = !0);
                        var B = Ee;
                        if (Ee = 0, qt = null, Ol(e, y, k, B), a && El) {
                            x = 0;
                            break e;
                        }
                        break;
                    default: B = Ee, Ee = 0, qt = null, Ol(e, y, k, B);
                }
            }
            ey(), x = Xe;
            break;
        }
        catch (G) {
            ex(e, G);
        }
    while (!0); return s && e.shellSuspendCounter++, As = Ra = null, Ae = r, R.H = o, R.A = d, ge === null && (Be = null, ye = 0, Or()), x; }
    function ey() { for (; ge !== null;)
        lx(ge); }
    function ty(e, s) { var a = Ae; Ae |= 2; var r = sx(), o = ax(); Be !== e || ye !== s ? (ui = null, di = Mt() + 500, _l(e, s)) : El = en(e, s); e: do
        try {
            if (Ee !== 0 && ge !== null) {
                s = ge;
                var d = qt;
                t: switch (Ee) {
                    case 1:
                        Ee = 0, qt = null, Ol(e, s, d, 1);
                        break;
                    case 2:
                    case 9:
                        if (hh(d)) {
                            Ee = 0, qt = null, nx(s);
                            break;
                        }
                        s = function () { Ee !== 2 && Ee !== 9 || Be !== e || (Ee = 7), hs(e); }, d.then(s, s);
                        break e;
                    case 3:
                        Ee = 7;
                        break e;
                    case 4:
                        Ee = 5;
                        break e;
                    case 7:
                        hh(d) ? (Ee = 0, qt = null, nx(s)) : (Ee = 0, qt = null, Ol(e, s, d, 7));
                        break;
                    case 5:
                        var x = null;
                        switch (ge.tag) {
                            case 26: x = ge.memoizedState;
                            case 5:
                            case 27:
                                var y = ge;
                                if (x ? Kx(x) : y.stateNode.complete) {
                                    Ee = 0, qt = null;
                                    var k = y.sibling;
                                    if (k !== null)
                                        ge = k;
                                    else {
                                        var B = y.return;
                                        B !== null ? (ge = B, fi(B)) : ge = null;
                                    }
                                    break t;
                                }
                        }
                        Ee = 0, qt = null, Ol(e, s, d, 5);
                        break;
                    case 6:
                        Ee = 0, qt = null, Ol(e, s, d, 6);
                        break;
                    case 8:
                        gd(), Xe = 6;
                        break e;
                    default: throw Error(c(462));
                }
            }
            sy();
            break;
        }
        catch (G) {
            ex(e, G);
        }
    while (!0); return As = Ra = null, R.H = r, R.A = o, Ae = a, ge !== null ? 0 : (Be = null, ye = 0, Or(), Xe); }
    function sy() { for (; ge !== null && !k0();)
        lx(ge); }
    function lx(e) { var s = Tf(e.alternate, e, qs); e.memoizedProps = e.pendingProps, s === null ? fi(e) : ge = s; }
    function nx(e) { var s = e, a = s.alternate; switch (s.tag) {
        case 15:
        case 0:
            s = Nf(a, s, s.pendingProps, s.type, void 0, ye);
            break;
        case 11:
            s = Nf(a, s, s.pendingProps, s.type.render, s.ref, ye);
            break;
        case 5: Oo(s);
        default: Mf(a, s), s = ge = sh(s, qs), s = Tf(a, s, qs);
    } e.memoizedProps = e.pendingProps, s === null ? fi(e) : ge = s; }
    function Ol(e, s, a, r) { As = Ra = null, Oo(s), Nl = null, bn = 0; var o = s.return; try {
        if (Kb(e, o, s, a, ye)) {
            Xe = 1, ti(e, Zt(a, e.current)), ge = null;
            return;
        }
    }
    catch (d) {
        if (o !== null)
            throw ge = o, d;
        Xe = 1, ti(e, Zt(a, e.current)), ge = null;
        return;
    } s.flags & 32768 ? (je || r === 1 ? e = !0 : El || (ye & 536870912) !== 0 ? e = !1 : (na = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Rt.current, r !== null && r.tag === 13 && (r.flags |= 16384))), rx(s, e)) : fi(s); }
    function fi(e) { var s = e; do {
        if ((s.flags & 32768) !== 0) {
            rx(s, na);
            return;
        }
        e = s.return;
        var a = Zb(s.alternate, s, qs);
        if (a !== null) {
            ge = a;
            return;
        }
        if (s = s.sibling, s !== null) {
            ge = s;
            return;
        }
        ge = s = e;
    } while (s !== null); Xe === 0 && (Xe = 5); }
    function rx(e, s) { do {
        var a = Fb(e.alternate, e);
        if (a !== null) {
            a.flags &= 32767, ge = a;
            return;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !s && (e = e.sibling, e !== null)) {
            ge = e;
            return;
        }
        ge = e = a;
    } while (e !== null); Xe = 6, ge = null; }
    function ix(e, s, a, r, o, d, x, y, k) { e.cancelPendingCommit = null; do
        xi();
    while (lt !== 0); if ((Ae & 6) !== 0)
        throw Error(c(327)); if (s !== null) {
        if (s === e.current)
            throw Error(c(177));
        if (d = s.lanes | s.childLanes, d |= no, R0(e, a, d, x, y, k), e === Be && (ge = Be = null, ye = 0), Dl = s, ca = e, Us = a, fd = d, xd = o, $f = r, (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ry(gr, function () { return mx(), null; })) : (e.callbackNode = null, e.callbackPriority = 0), r = (s.flags & 13878) !== 0, (s.subtreeFlags & 13878) !== 0 || r) {
            r = R.T, R.T = null, o = $.p, $.p = 2, x = Ae, Ae |= 4;
            try {
                Jb(e, s, a);
            }
            finally {
                Ae = x, $.p = o, R.T = r;
            }
        }
        lt = 1, cx(), ox(), dx();
    } }
    function cx() { if (lt === 1) {
        lt = 0;
        var e = ca, s = Dl, a = (s.flags & 13878) !== 0;
        if ((s.subtreeFlags & 13878) !== 0 || a) {
            a = R.T, R.T = null;
            var r = $.p;
            $.p = 2;
            var o = Ae;
            Ae |= 4;
            try {
                Gf(s, e);
                var d = Md, x = Zm(e.containerInfo), y = d.focusedElem, k = d.selectionRange;
                if (x !== y && y && y.ownerDocument && Xm(y.ownerDocument.documentElement, y)) {
                    if (k !== null && eo(y)) {
                        var B = k.start, G = k.end;
                        if (G === void 0 && (G = B), "selectionStart" in y)
                            y.selectionStart = B, y.selectionEnd = Math.min(G, y.value.length);
                        else {
                            var Y = y.ownerDocument || document, q = Y && Y.defaultView || window;
                            if (q.getSelection) {
                                var H = q.getSelection(), P = y.textContent.length, ce = Math.min(k.start, P), ze = k.end === void 0 ? ce : Math.min(k.end, P);
                                !H.extend && ce > ze && (x = ze, ze = ce, ce = x);
                                var E = Ym(y, ce), A = Ym(y, ze);
                                if (E && A && (H.rangeCount !== 1 || H.anchorNode !== E.node || H.anchorOffset !== E.offset || H.focusNode !== A.node || H.focusOffset !== A.offset)) {
                                    var z = Y.createRange();
                                    z.setStart(E.node, E.offset), H.removeAllRanges(), ce > ze ? (H.addRange(z), H.extend(A.node, A.offset)) : (z.setEnd(A.node, A.offset), H.addRange(z));
                                }
                            }
                        }
                    }
                    for (Y = [], H = y; H = H.parentNode;)
                        H.nodeType === 1 && Y.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
                    for (typeof y.focus == "function" && y.focus(), y = 0; y < Y.length; y++) {
                        var Q = Y[y];
                        Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
                    }
                }
                Ai = !!Ed, Md = Ed = null;
            }
            finally {
                Ae = o, $.p = r, R.T = a;
            }
        }
        e.current = s, lt = 2;
    } }
    function ox() { if (lt === 2) {
        lt = 0;
        var e = ca, s = Dl, a = (s.flags & 8772) !== 0;
        if ((s.subtreeFlags & 8772) !== 0 || a) {
            a = R.T, R.T = null;
            var r = $.p;
            $.p = 2;
            var o = Ae;
            Ae |= 4;
            try {
                qf(e, s.alternate, s);
            }
            finally {
                Ae = o, $.p = r, R.T = a;
            }
        }
        lt = 3;
    } }
    function dx() { if (lt === 4 || lt === 3) {
        lt = 0, C0();
        var e = ca, s = Dl, a = Us, r = $f;
        (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0 ? lt = 5 : (lt = 0, Dl = ca = null, ux(e, e.pendingLanes));
        var o = e.pendingLanes;
        if (o === 0 && (ia = null), Rc(a), s = s.stateNode, Dt && typeof Dt.onCommitFiberRoot == "function")
            try {
                Dt.onCommitFiberRoot(Wl, s, void 0, (s.current.flags & 128) === 128);
            }
            catch { }
        if (r !== null) {
            s = R.T, o = $.p, $.p = 2, R.T = null;
            try {
                for (var d = e.onRecoverableError, x = 0; x < r.length; x++) {
                    var y = r[x];
                    d(y.value, { componentStack: y.stack });
                }
            }
            finally {
                R.T = s, $.p = o;
            }
        }
        (Us & 3) !== 0 && xi(), hs(e), o = e.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? e === pd ? Rn++ : (Rn = 0, pd = e) : Rn = 0, Bn(0);
    } }
    function ux(e, s) { (e.pooledCacheLanes &= s) === 0 && (s = e.pooledCache, s != null && (e.pooledCache = null, pn(s))); }
    function xi() { return cx(), ox(), dx(), mx(); }
    function mx() { if (lt !== 5)
        return !1; var e = ca, s = fd; fd = 0; var a = Rc(Us), r = R.T, o = $.p; try {
        $.p = 32 > a ? 32 : a, R.T = null, a = xd, xd = null;
        var d = ca, x = Us;
        if (lt = 0, Dl = ca = null, Us = 0, (Ae & 6) !== 0)
            throw Error(c(331));
        var y = Ae;
        if (Ae |= 4, Zf(d.current), Kf(d, d.current, x, a), Ae = y, Bn(0, !1), Dt && typeof Dt.onPostCommitFiberRoot == "function")
            try {
                Dt.onPostCommitFiberRoot(Wl, d);
            }
            catch { }
        return !0;
    }
    finally {
        $.p = o, R.T = r, ux(e, s);
    } }
    function hx(e, s, a) { s = Zt(a, s), s = Fo(e.stateNode, s, 2), e = ta(e, s, 2), e !== null && (tn(e, 2), hs(e)); }
    function Me(e, s, a) { if (e.tag === 3)
        hx(e, e, a);
    else
        for (; s !== null;) {
            if (s.tag === 3) {
                hx(s, e, a);
                break;
            }
            else if (s.tag === 1) {
                var r = s.stateNode;
                if (typeof s.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ia === null || !ia.has(r))) {
                    e = Zt(a, e), a = ff(2), r = ta(s, a, 2), r !== null && (xf(a, r, s, e), tn(r, 2), hs(r));
                    break;
                }
            }
            s = s.return;
        } }
    function yd(e, s, a) { var r = e.pingCache; if (r === null) {
        r = e.pingCache = new Ib;
        var o = new Set;
        r.set(s, o);
    }
    else
        o = r.get(s), o === void 0 && (o = new Set, r.set(s, o)); o.has(a) || (ud = !0, o.add(a), e = ay.bind(null, e, s, a), s.then(e, e)); }
    function ay(e, s, a) { var r = e.pingCache; r !== null && r.delete(s), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Be === e && (ye & a) === a && (Xe === 4 || Xe === 3 && (ye & 62914560) === ye && 300 > Mt() - oi ? (Ae & 2) === 0 && _l(e, 0) : md |= a, Ml === ye && (Ml = 0)), hs(e); }
    function fx(e, s) { s === 0 && (s = im()), e = _a(e, s), e !== null && (tn(e, s), hs(e)); }
    function ly(e) { var s = e.memoizedState, a = 0; s !== null && (a = s.retryLane), fx(e, a); }
    function ny(e, s) { var a = 0; switch (e.tag) {
        case 31:
        case 13:
            var r = e.stateNode, o = e.memoizedState;
            o !== null && (a = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        case 22:
            r = e.stateNode._retryCache;
            break;
        default: throw Error(c(314));
    } r !== null && r.delete(s), fx(e, a); }
    function ry(e, s) { return Dc(e, s); }
    var pi = null, zl = null, vd = !1, gi = !1, jd = !1, da = 0;
    function hs(e) { e !== zl && e.next === null && (zl === null ? pi = zl = e : zl = zl.next = e), gi = !0, vd || (vd = !0, cy()); }
    function Bn(e, s) { if (!jd && gi) {
        jd = !0;
        do
            for (var a = !1, r = pi; r !== null;) {
                if (e !== 0) {
                    var o = r.pendingLanes;
                    if (o === 0)
                        var d = 0;
                    else {
                        var x = r.suspendedLanes, y = r.pingedLanes;
                        d = (1 << 31 - _t(42 | e) + 1) - 1, d &= o & ~(x & ~y), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
                    }
                    d !== 0 && (a = !0, bx(r, d));
                }
                else
                    d = ye, d = jr(r, r === Be ? d : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (d & 3) === 0 || en(r, d) || (a = !0, bx(r, d));
                r = r.next;
            }
        while (a);
        jd = !1;
    } }
    function iy() { xx(); }
    function xx() { gi = vd = !1; var e = 0; da !== 0 && by() && (e = da); for (var s = Mt(), a = null, r = pi; r !== null;) {
        var o = r.next, d = px(r, s);
        d === 0 ? (r.next = null, a === null ? pi = o : a.next = o, o === null && (zl = a)) : (a = r, (e !== 0 || (d & 3) !== 0) && (gi = !0)), r = o;
    } lt !== 0 && lt !== 5 || Bn(e), da !== 0 && (da = 0); }
    function px(e, s) { for (var a = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d;) {
        var x = 31 - _t(d), y = 1 << x, k = o[x];
        k === -1 ? ((y & a) === 0 || (y & r) !== 0) && (o[x] = z0(y, s)) : k <= s && (e.expiredLanes |= y), d &= ~y;
    } if (s = Be, a = ye, a = jr(e, e === s ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, a === 0 || e === s && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null)
        return r !== null && r !== null && _c(r), e.callbackNode = null, e.callbackPriority = 0; if ((a & 3) === 0 || en(e, a)) {
        if (s = a & -a, s === e.callbackPriority)
            return s;
        switch (r !== null && _c(r), Rc(a)) {
            case 2:
            case 8:
                a = nm;
                break;
            case 32:
                a = gr;
                break;
            case 268435456:
                a = rm;
                break;
            default: a = gr;
        }
        return r = gx.bind(null, e), a = Dc(a, r), e.callbackPriority = s, e.callbackNode = a, s;
    } return r !== null && r !== null && _c(r), e.callbackPriority = 2, e.callbackNode = null, 2; }
    function gx(e, s) { if (lt !== 0 && lt !== 5)
        return e.callbackNode = null, e.callbackPriority = 0, null; var a = e.callbackNode; if (xi() && e.callbackNode !== a)
        return null; var r = ye; return r = jr(e, e === Be ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (If(e, r, s), px(e, Mt()), e.callbackNode != null && e.callbackNode === a ? gx.bind(null, e) : null); }
    function bx(e, s) { if (xi())
        return null; If(e, s, !0); }
    function cy() { vy(function () { (Ae & 6) !== 0 ? Dc(lm, iy) : xx(); }); }
    function Nd() { if (da === 0) {
        var e = yl;
        e === 0 && (e = br, br <<= 1, (br & 261888) === 0 && (br = 256)), da = e;
    } return da; }
    function yx(e) { return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : kr("" + e); }
    function vx(e, s) { var a = s.ownerDocument.createElement("input"); return a.name = s.name, a.value = s.value, e.id && a.setAttribute("form", e.id), s.parentNode.insertBefore(a, s), e = new FormData(e), a.parentNode.removeChild(a), e; }
    function oy(e, s, a, r, o) { if (s === "submit" && a && a.stateNode === o) {
        var d = yx((o[jt] || null).action), x = r.submitter;
        x && (s = (s = x[jt] || null) ? yx(s.formAction) : x.getAttribute("formAction"), s !== null && (d = s, x = null));
        var y = new Er("action", "action", null, r, o);
        e.push({ event: y, listeners: [{ instance: null, listener: function () { if (r.defaultPrevented) {
                        if (da !== 0) {
                            var k = x ? vx(o, x) : new FormData(o);
                            Go(a, { pending: !0, data: k, method: o.method, action: d }, null, k);
                        }
                    }
                    else
                        typeof d == "function" && (y.preventDefault(), k = x ? vx(o, x) : new FormData(o), Go(a, { pending: !0, data: k, method: o.method, action: d }, d, k)); }, currentTarget: o }] });
    } }
    for (var wd = 0; wd < lo.length; wd++) {
        var Sd = lo[wd], dy = Sd.toLowerCase(), uy = Sd[0].toUpperCase() + Sd.slice(1);
        ls(dy, "on" + uy);
    }
    ls($m, "onAnimationEnd"), ls(Pm, "onAnimationIteration"), ls(Im, "onAnimationStart"), ls("dblclick", "onDoubleClick"), ls("focusin", "onFocus"), ls("focusout", "onBlur"), ls(Ab, "onTransitionRun"), ls(Tb, "onTransitionStart"), ls(Eb, "onTransitionCancel"), ls(Wm, "onTransitionEnd"), nl("onMouseEnter", ["mouseout", "mouseover"]), nl("onMouseLeave", ["mouseout", "mouseover"]), nl("onPointerEnter", ["pointerout", "pointerover"]), nl("onPointerLeave", ["pointerout", "pointerover"]), Ta("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ta("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ta("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ta("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ta("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ta("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var qn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), my = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qn));
    function jx(e, s) { s = (s & 4) !== 0; for (var a = 0; a < e.length; a++) {
        var r = e[a], o = r.event;
        r = r.listeners;
        e: {
            var d = void 0;
            if (s)
                for (var x = r.length - 1; 0 <= x; x--) {
                    var y = r[x], k = y.instance, B = y.currentTarget;
                    if (y = y.listener, k !== d && o.isPropagationStopped())
                        break e;
                    d = y, o.currentTarget = B;
                    try {
                        d(o);
                    }
                    catch (G) {
                        _r(G);
                    }
                    o.currentTarget = null, d = k;
                }
            else
                for (x = 0; x < r.length; x++) {
                    if (y = r[x], k = y.instance, B = y.currentTarget, y = y.listener, k !== d && o.isPropagationStopped())
                        break e;
                    d = y, o.currentTarget = B;
                    try {
                        d(o);
                    }
                    catch (G) {
                        _r(G);
                    }
                    o.currentTarget = null, d = k;
                }
        }
    } }
    function be(e, s) { var a = s[Bc]; a === void 0 && (a = s[Bc] = new Set); var r = e + "__bubble"; a.has(r) || (Nx(s, e, 2, !1), a.add(r)); }
    function kd(e, s, a) { var r = 0; s && (r |= 4), Nx(a, e, r, s); }
    var bi = "_reactListening" + Math.random().toString(36).slice(2);
    function Cd(e) { if (!e[bi]) {
        e[bi] = !0, fm.forEach(function (a) { a !== "selectionchange" && (my.has(a) || kd(a, !1, e), kd(a, !0, e)); });
        var s = e.nodeType === 9 ? e : e.ownerDocument;
        s === null || s[bi] || (s[bi] = !0, kd("selectionchange", !1, s));
    } }
    function Nx(e, s, a, r) { switch (Px(s)) {
        case 2:
            var o = Hy;
            break;
        case 8:
            o = Vy;
            break;
        default: o = Vd;
    } a = o.bind(null, s, a, e), o = void 0, !Yc || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(s, a, { capture: !0, passive: o }) : e.addEventListener(s, a, !0) : o !== void 0 ? e.addEventListener(s, a, { passive: o }) : e.addEventListener(s, a, !1); }
    function Ad(e, s, a, r, o) { var d = r; if ((s & 1) === 0 && (s & 2) === 0 && r !== null)
        e: for (;;) {
            if (r === null)
                return;
            var x = r.tag;
            if (x === 3 || x === 4) {
                var y = r.stateNode.containerInfo;
                if (y === o)
                    break;
                if (x === 4)
                    for (x = r.return; x !== null;) {
                        var k = x.tag;
                        if ((k === 3 || k === 4) && x.stateNode.containerInfo === o)
                            return;
                        x = x.return;
                    }
                for (; y !== null;) {
                    if (x = sl(y), x === null)
                        return;
                    if (k = x.tag, k === 5 || k === 6 || k === 26 || k === 27) {
                        r = d = x;
                        continue e;
                    }
                    y = y.parentNode;
                }
            }
            r = r.return;
        } Cm(function () { var B = d, G = Qc(a), Y = []; e: {
        var q = eh.get(e);
        if (q !== void 0) {
            var H = Er, P = e;
            switch (e) {
                case "keypress": if (Ar(a) === 0)
                    break e;
                case "keydown":
                case "keyup":
                    H = nb;
                    break;
                case "focusin":
                    P = "focus", H = Jc;
                    break;
                case "focusout":
                    P = "blur", H = Jc;
                    break;
                case "beforeblur":
                case "afterblur":
                    H = Jc;
                    break;
                case "click": if (a.button === 2)
                    break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    H = Em;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    H = Z0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    H = cb;
                    break;
                case $m:
                case Pm:
                case Im:
                    H = $0;
                    break;
                case Wm:
                    H = db;
                    break;
                case "scroll":
                case "scrollend":
                    H = Y0;
                    break;
                case "wheel":
                    H = mb;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    H = I0;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    H = Dm;
                    break;
                case "toggle":
                case "beforetoggle": H = fb;
            }
            var ce = (s & 4) !== 0, ze = !ce && (e === "scroll" || e === "scrollend"), E = ce ? q !== null ? q + "Capture" : null : q;
            ce = [];
            for (var A = B, z; A !== null;) {
                var Q = A;
                if (z = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || z === null || E === null || (Q = ln(A, E), Q != null && ce.push(Un(A, Q, z))), ze)
                    break;
                A = A.return;
            }
            0 < ce.length && (q = new H(q, P, null, a, G), Y.push({ event: q, listeners: ce }));
        }
    } if ((s & 7) === 0) {
        e: {
            if (q = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", q && a !== Gc && (P = a.relatedTarget || a.fromElement) && (sl(P) || P[tl]))
                break e;
            if ((H || q) && (q = G.window === G ? G : (q = G.ownerDocument) ? q.defaultView || q.parentWindow : window, H ? (P = a.relatedTarget || a.toElement, H = B, P = P ? sl(P) : null, P !== null && (ze = m(P), ce = P.tag, P !== ze || ce !== 5 && ce !== 27 && ce !== 6) && (P = null)) : (H = null, P = B), H !== P)) {
                if (ce = Em, Q = "onMouseLeave", E = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (ce = Dm, Q = "onPointerLeave", E = "onPointerEnter", A = "pointer"), ze = H == null ? q : an(H), z = P == null ? q : an(P), q = new ce(Q, A + "leave", H, a, G), q.target = ze, q.relatedTarget = z, Q = null, sl(G) === B && (ce = new ce(E, A + "enter", P, a, G), ce.target = z, ce.relatedTarget = ze, Q = ce), ze = Q, H && P)
                    t: {
                        for (ce = hy, E = H, A = P, z = 0, Q = E; Q; Q = ce(Q))
                            z++;
                        Q = 0;
                        for (var le = A; le; le = ce(le))
                            Q++;
                        for (; 0 < z - Q;)
                            E = ce(E), z--;
                        for (; 0 < Q - z;)
                            A = ce(A), Q--;
                        for (; z--;) {
                            if (E === A || A !== null && E === A.alternate) {
                                ce = E;
                                break t;
                            }
                            E = ce(E), A = ce(A);
                        }
                        ce = null;
                    }
                else
                    ce = null;
                H !== null && wx(Y, q, H, ce, !1), P !== null && ze !== null && wx(Y, ze, P, ce, !0);
            }
        }
        e: {
            if (q = B ? an(B) : window, H = q.nodeName && q.nodeName.toLowerCase(), H === "select" || H === "input" && q.type === "file")
                var ke = Lm;
            else if (qm(q))
                if (Hm)
                    ke = Sb;
                else {
                    ke = Nb;
                    var ee = jb;
                }
            else
                H = q.nodeName, !H || H.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? B && Vc(B.elementType) && (ke = Lm) : ke = wb;
            if (ke && (ke = ke(e, B))) {
                Um(Y, ke, a, G);
                break e;
            }
            ee && ee(e, q, B), e === "focusout" && B && q.type === "number" && B.memoizedProps.value != null && Hc(q, "number", q.value);
        }
        switch (ee = B ? an(B) : window, e) {
            case "focusin":
                (qm(ee) || ee.contentEditable === "true") && (ul = ee, to = B, hn = null);
                break;
            case "focusout":
                hn = to = ul = null;
                break;
            case "mousedown":
                so = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                so = !1, Fm(Y, a, G);
                break;
            case "selectionchange": if (Cb)
                break;
            case "keydown":
            case "keyup": Fm(Y, a, G);
        }
        var me;
        if (Pc)
            e: {
                switch (e) {
                    case "compositionstart":
                        var ve = "onCompositionStart";
                        break e;
                    case "compositionend":
                        ve = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        ve = "onCompositionUpdate";
                        break e;
                }
                ve = void 0;
            }
        else
            dl ? Rm(e, a) && (ve = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ve = "onCompositionStart");
        ve && (_m && a.locale !== "ko" && (dl || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && dl && (me = Am()) : (Fs = G, Xc = "value" in Fs ? Fs.value : Fs.textContent, dl = !0)), ee = yi(B, ve), 0 < ee.length && (ve = new Mm(ve, e, null, a, G), Y.push({ event: ve, listeners: ee }), me ? ve.data = me : (me = Bm(a), me !== null && (ve.data = me)))), (me = pb ? gb(e, a) : bb(e, a)) && (ve = yi(B, "onBeforeInput"), 0 < ve.length && (ee = new Mm("onBeforeInput", "beforeinput", null, a, G), Y.push({ event: ee, listeners: ve }), ee.data = me)), oy(Y, e, B, a, G);
    } jx(Y, s); }); }
    function Un(e, s, a) { return { instance: e, listener: s, currentTarget: a }; }
    function yi(e, s) { for (var a = s + "Capture", r = []; e !== null;) {
        var o = e, d = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || d === null || (o = ln(e, a), o != null && r.unshift(Un(e, o, d)), o = ln(e, s), o != null && r.push(Un(e, o, d))), e.tag === 3)
            return r;
        e = e.return;
    } return []; }
    function hy(e) { if (e === null)
        return null; do
        e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27); return e || null; }
    function wx(e, s, a, r, o) { for (var d = s._reactName, x = []; a !== null && a !== r;) {
        var y = a, k = y.alternate, B = y.stateNode;
        if (y = y.tag, k !== null && k === r)
            break;
        y !== 5 && y !== 26 && y !== 27 || B === null || (k = B, o ? (B = ln(a, d), B != null && x.unshift(Un(a, B, k))) : o || (B = ln(a, d), B != null && x.push(Un(a, B, k)))), a = a.return;
    } x.length !== 0 && e.push({ event: s, listeners: x }); }
    var fy = /\r\n?/g, xy = /\u0000|\uFFFD/g;
    function Sx(e) {
        return (typeof e == "string" ? e : "" + e).replace(fy, `
`).replace(xy, "");
    }
    function kx(e, s) { return s = Sx(s), Sx(e) === s; }
    function Oe(e, s, a, r, o, d) { switch (a) {
        case "children":
            typeof r == "string" ? s === "body" || s === "textarea" && r === "" || il(e, r) : (typeof r == "number" || typeof r == "bigint") && s !== "body" && il(e, "" + r);
            break;
        case "className":
            wr(e, "class", r);
            break;
        case "tabIndex":
            wr(e, "tabindex", r);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            wr(e, a, r);
            break;
        case "style":
            Sm(e, r, d);
            break;
        case "data": if (s !== "object") {
            wr(e, "data", r);
            break;
        }
        case "src":
        case "href":
            if (r === "" && (s !== "a" || a !== "href")) {
                e.removeAttribute(a);
                break;
            }
            if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
                e.removeAttribute(a);
                break;
            }
            r = kr("" + r), e.setAttribute(a, r);
            break;
        case "action":
        case "formAction":
            if (typeof r == "function") {
                e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break;
            }
            else
                typeof d == "function" && (a === "formAction" ? (s !== "input" && Oe(e, s, "name", o.name, o, null), Oe(e, s, "formEncType", o.formEncType, o, null), Oe(e, s, "formMethod", o.formMethod, o, null), Oe(e, s, "formTarget", o.formTarget, o, null)) : (Oe(e, s, "encType", o.encType, o, null), Oe(e, s, "method", o.method, o, null), Oe(e, s, "target", o.target, o, null)));
            if (r == null || typeof r == "symbol" || typeof r == "boolean") {
                e.removeAttribute(a);
                break;
            }
            r = kr("" + r), e.setAttribute(a, r);
            break;
        case "onClick":
            r != null && (e.onclick = ws);
            break;
        case "onScroll":
            r != null && be("scroll", e);
            break;
        case "onScrollEnd":
            r != null && be("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (r != null) {
                if (typeof r != "object" || !("__html" in r))
                    throw Error(c(61));
                if (a = r.__html, a != null) {
                    if (o.children != null)
                        throw Error(c(60));
                    e.innerHTML = a;
                }
            }
            break;
        case "multiple":
            e.multiple = r && typeof r != "function" && typeof r != "symbol";
            break;
        case "muted":
            e.muted = r && typeof r != "function" && typeof r != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref": break;
        case "autoFocus": break;
        case "xlinkHref":
            if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
                e.removeAttribute("xlink:href");
                break;
            }
            a = kr("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "" + r) : e.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
            break;
        case "capture":
        case "download":
            r === !0 ? e.setAttribute(a, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, r) : e.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(a, r) : e.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(a) : e.setAttribute(a, r);
            break;
        case "popover":
            be("beforetoggle", e), be("toggle", e), Nr(e, "popover", r);
            break;
        case "xlinkActuate":
            Ns(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
            break;
        case "xlinkArcrole":
            Ns(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
            break;
        case "xlinkRole":
            Ns(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
            break;
        case "xlinkShow":
            Ns(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
            break;
        case "xlinkTitle":
            Ns(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
            break;
        case "xlinkType":
            Ns(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
            break;
        case "xmlBase":
            Ns(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
            break;
        case "xmlLang":
            Ns(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
            break;
        case "xmlSpace":
            Ns(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
            break;
        case "is":
            Nr(e, "is", r);
            break;
        case "innerText":
        case "textContent": break;
        default: (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Q0.get(a) || a, Nr(e, a, r));
    } }
    function Td(e, s, a, r, o, d) { switch (a) {
        case "style":
            Sm(e, r, d);
            break;
        case "dangerouslySetInnerHTML":
            if (r != null) {
                if (typeof r != "object" || !("__html" in r))
                    throw Error(c(61));
                if (a = r.__html, a != null) {
                    if (o.children != null)
                        throw Error(c(60));
                    e.innerHTML = a;
                }
            }
            break;
        case "children":
            typeof r == "string" ? il(e, r) : (typeof r == "number" || typeof r == "bigint") && il(e, "" + r);
            break;
        case "onScroll":
            r != null && be("scroll", e);
            break;
        case "onScrollEnd":
            r != null && be("scrollend", e);
            break;
        case "onClick":
            r != null && (e.onclick = ws);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref": break;
        case "innerText":
        case "textContent": break;
        default: if (!xm.hasOwnProperty(a))
            e: {
                if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), s = a.slice(2, o ? a.length - 7 : void 0), d = e[jt] || null, d = d != null ? d[a] : null, typeof d == "function" && e.removeEventListener(s, d, o), typeof r == "function")) {
                    typeof d != "function" && d !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(s, r, o);
                    break e;
                }
                a in e ? e[a] = r : r === !0 ? e.setAttribute(a, "") : Nr(e, a, r);
            }
    } }
    function ht(e, s, a) { switch (s) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li": break;
        case "img":
            be("error", e), be("load", e);
            var r = !1, o = !1, d;
            for (d in a)
                if (a.hasOwnProperty(d)) {
                    var x = a[d];
                    if (x != null)
                        switch (d) {
                            case "src":
                                r = !0;
                                break;
                            case "srcSet":
                                o = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML": throw Error(c(137, s));
                            default: Oe(e, s, d, x, a, null);
                        }
                }
            o && Oe(e, s, "srcSet", a.srcSet, a, null), r && Oe(e, s, "src", a.src, a, null);
            return;
        case "input":
            be("invalid", e);
            var y = d = x = o = null, k = null, B = null;
            for (r in a)
                if (a.hasOwnProperty(r)) {
                    var G = a[r];
                    if (G != null)
                        switch (r) {
                            case "name":
                                o = G;
                                break;
                            case "type":
                                x = G;
                                break;
                            case "checked":
                                k = G;
                                break;
                            case "defaultChecked":
                                B = G;
                                break;
                            case "value":
                                d = G;
                                break;
                            case "defaultValue":
                                y = G;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (G != null)
                                    throw Error(c(137, s));
                                break;
                            default: Oe(e, s, r, G, a, null);
                        }
                }
            vm(e, d, y, k, B, x, o, !1);
            return;
        case "select":
            be("invalid", e), r = x = d = null;
            for (o in a)
                if (a.hasOwnProperty(o) && (y = a[o], y != null))
                    switch (o) {
                        case "value":
                            d = y;
                            break;
                        case "defaultValue":
                            x = y;
                            break;
                        case "multiple": r = y;
                        default: Oe(e, s, o, y, a, null);
                    }
            s = d, a = x, e.multiple = !!r, s != null ? rl(e, !!r, s, !1) : a != null && rl(e, !!r, a, !0);
            return;
        case "textarea":
            be("invalid", e), d = o = r = null;
            for (x in a)
                if (a.hasOwnProperty(x) && (y = a[x], y != null))
                    switch (x) {
                        case "value":
                            r = y;
                            break;
                        case "defaultValue":
                            o = y;
                            break;
                        case "children":
                            d = y;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (y != null)
                                throw Error(c(91));
                            break;
                        default: Oe(e, s, x, y, a, null);
                    }
            Nm(e, r, o, d);
            return;
        case "option":
            for (k in a)
                if (a.hasOwnProperty(k) && (r = a[k], r != null))
                    switch (k) {
                        case "selected":
                            e.selected = r && typeof r != "function" && typeof r != "symbol";
                            break;
                        default: Oe(e, s, k, r, a, null);
                    }
            return;
        case "dialog":
            be("beforetoggle", e), be("toggle", e), be("cancel", e), be("close", e);
            break;
        case "iframe":
        case "object":
            be("load", e);
            break;
        case "video":
        case "audio":
            for (r = 0; r < qn.length; r++)
                be(qn[r], e);
            break;
        case "image":
            be("error", e), be("load", e);
            break;
        case "details":
            be("toggle", e);
            break;
        case "embed":
        case "source":
        case "link": be("error", e), be("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (B in a)
                if (a.hasOwnProperty(B) && (r = a[B], r != null))
                    switch (B) {
                        case "children":
                        case "dangerouslySetInnerHTML": throw Error(c(137, s));
                        default: Oe(e, s, B, r, a, null);
                    }
            return;
        default: if (Vc(s)) {
            for (G in a)
                a.hasOwnProperty(G) && (r = a[G], r !== void 0 && Td(e, s, G, r, a, void 0));
            return;
        }
    } for (y in a)
        a.hasOwnProperty(y) && (r = a[y], r != null && Oe(e, s, y, r, a, null)); }
    function py(e, s, a, r) { switch (s) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li": break;
        case "input":
            var o = null, d = null, x = null, y = null, k = null, B = null, G = null;
            for (H in a) {
                var Y = a[H];
                if (a.hasOwnProperty(H) && Y != null)
                    switch (H) {
                        case "checked": break;
                        case "value": break;
                        case "defaultValue": k = Y;
                        default: r.hasOwnProperty(H) || Oe(e, s, H, null, r, Y);
                    }
            }
            for (var q in r) {
                var H = r[q];
                if (Y = a[q], r.hasOwnProperty(q) && (H != null || Y != null))
                    switch (q) {
                        case "type":
                            d = H;
                            break;
                        case "name":
                            o = H;
                            break;
                        case "checked":
                            B = H;
                            break;
                        case "defaultChecked":
                            G = H;
                            break;
                        case "value":
                            x = H;
                            break;
                        case "defaultValue":
                            y = H;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (H != null)
                                throw Error(c(137, s));
                            break;
                        default: H !== Y && Oe(e, s, q, H, r, Y);
                    }
            }
            Lc(e, x, y, k, B, G, d, o);
            return;
        case "select":
            H = x = y = q = null;
            for (d in a)
                if (k = a[d], a.hasOwnProperty(d) && k != null)
                    switch (d) {
                        case "value": break;
                        case "multiple": H = k;
                        default: r.hasOwnProperty(d) || Oe(e, s, d, null, r, k);
                    }
            for (o in r)
                if (d = r[o], k = a[o], r.hasOwnProperty(o) && (d != null || k != null))
                    switch (o) {
                        case "value":
                            q = d;
                            break;
                        case "defaultValue":
                            y = d;
                            break;
                        case "multiple": x = d;
                        default: d !== k && Oe(e, s, o, d, r, k);
                    }
            s = y, a = x, r = H, q != null ? rl(e, !!a, q, !1) : !!r != !!a && (s != null ? rl(e, !!a, s, !0) : rl(e, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            H = q = null;
            for (y in a)
                if (o = a[y], a.hasOwnProperty(y) && o != null && !r.hasOwnProperty(y))
                    switch (y) {
                        case "value": break;
                        case "children": break;
                        default: Oe(e, s, y, null, r, o);
                    }
            for (x in r)
                if (o = r[x], d = a[x], r.hasOwnProperty(x) && (o != null || d != null))
                    switch (x) {
                        case "value":
                            q = o;
                            break;
                        case "defaultValue":
                            H = o;
                            break;
                        case "children": break;
                        case "dangerouslySetInnerHTML":
                            if (o != null)
                                throw Error(c(91));
                            break;
                        default: o !== d && Oe(e, s, x, o, r, d);
                    }
            jm(e, q, H);
            return;
        case "option":
            for (var P in a)
                if (q = a[P], a.hasOwnProperty(P) && q != null && !r.hasOwnProperty(P))
                    switch (P) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default: Oe(e, s, P, null, r, q);
                    }
            for (k in r)
                if (q = r[k], H = a[k], r.hasOwnProperty(k) && q !== H && (q != null || H != null))
                    switch (k) {
                        case "selected":
                            e.selected = q && typeof q != "function" && typeof q != "symbol";
                            break;
                        default: Oe(e, s, k, q, r, H);
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var ce in a)
                q = a[ce], a.hasOwnProperty(ce) && q != null && !r.hasOwnProperty(ce) && Oe(e, s, ce, null, r, q);
            for (B in r)
                if (q = r[B], H = a[B], r.hasOwnProperty(B) && q !== H && (q != null || H != null))
                    switch (B) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (q != null)
                                throw Error(c(137, s));
                            break;
                        default: Oe(e, s, B, q, r, H);
                    }
            return;
        default: if (Vc(s)) {
            for (var ze in a)
                q = a[ze], a.hasOwnProperty(ze) && q !== void 0 && !r.hasOwnProperty(ze) && Td(e, s, ze, void 0, r, q);
            for (G in r)
                q = r[G], H = a[G], !r.hasOwnProperty(G) || q === H || q === void 0 && H === void 0 || Td(e, s, G, q, r, H);
            return;
        }
    } for (var E in a)
        q = a[E], a.hasOwnProperty(E) && q != null && !r.hasOwnProperty(E) && Oe(e, s, E, null, r, q); for (Y in r)
        q = r[Y], H = a[Y], !r.hasOwnProperty(Y) || q === H || q == null && H == null || Oe(e, s, Y, q, r, H); }
    function Cx(e) { switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link": return !0;
        default: return !1;
    } }
    function gy() { if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, s = 0, a = performance.getEntriesByType("resource"), r = 0; r < a.length; r++) {
            var o = a[r], d = o.transferSize, x = o.initiatorType, y = o.duration;
            if (d && y && Cx(x)) {
                for (x = 0, y = o.responseEnd, r += 1; r < a.length; r++) {
                    var k = a[r], B = k.startTime;
                    if (B > y)
                        break;
                    var G = k.transferSize, Y = k.initiatorType;
                    G && Cx(Y) && (k = k.responseEnd, x += G * (k < y ? 1 : (y - B) / (k - B)));
                }
                if (--r, s += 8 * (d + x) / (o.duration / 1e3), e++, 10 < e)
                    break;
            }
        }
        if (0 < e)
            return s / e / 1e6;
    } return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5; }
    var Ed = null, Md = null;
    function vi(e) { return e.nodeType === 9 ? e : e.ownerDocument; }
    function Ax(e) { switch (e) {
        case "http://www.w3.org/2000/svg": return 1;
        case "http://www.w3.org/1998/Math/MathML": return 2;
        default: return 0;
    } }
    function Tx(e, s) { if (e === 0)
        switch (s) {
            case "svg": return 1;
            case "math": return 2;
            default: return 0;
        } return e === 1 && s === "foreignObject" ? 0 : e; }
    function Dd(e, s) { return e === "textarea" || e === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.children == "bigint" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null; }
    var _d = null;
    function by() { var e = window.event; return e && e.type === "popstate" ? e === _d ? !1 : (_d = e, !0) : (_d = null, !1); }
    var Ex = typeof setTimeout == "function" ? setTimeout : void 0, yy = typeof clearTimeout == "function" ? clearTimeout : void 0, Mx = typeof Promise == "function" ? Promise : void 0, vy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mx < "u" ? function (e) { return Mx.resolve(null).then(e).catch(jy); } : Ex;
    function jy(e) { setTimeout(function () { throw e; }); }
    function ua(e) { return e === "head"; }
    function Dx(e, s) { var a = s, r = 0; do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
            if (a = o.data, a === "/$" || a === "/&") {
                if (r === 0) {
                    e.removeChild(o), Ul(s);
                    return;
                }
                r--;
            }
            else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
                r++;
            else if (a === "html")
                Ln(e.ownerDocument.documentElement);
            else if (a === "head") {
                a = e.ownerDocument.head, Ln(a);
                for (var d = a.firstChild; d;) {
                    var x = d.nextSibling, y = d.nodeName;
                    d[sn] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = x;
                }
            }
            else
                a === "body" && Ln(e.ownerDocument.body);
        a = o;
    } while (a); Ul(s); }
    function _x(e, s) { var a = e; e = 0; do {
        var r = a.nextSibling;
        if (a.nodeType === 1 ? s ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (s ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), r && r.nodeType === 8)
            if (a = r.data, a === "/$") {
                if (e === 0)
                    break;
                e--;
            }
            else
                a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
        a = r;
    } while (a); }
    function Od(e) { var s = e.firstChild; for (s && s.nodeType === 10 && (s = s.nextSibling); s;) {
        var a = s;
        switch (s = s.nextSibling, a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Od(a), qc(a);
                continue;
            case "SCRIPT":
            case "STYLE": continue;
            case "LINK": if (a.rel.toLowerCase() === "stylesheet")
                continue;
        }
        e.removeChild(a);
    } }
    function Ny(e, s, a, r) { for (; e.nodeType === 1;) {
        var o = a;
        if (e.nodeName.toLowerCase() !== s.toLowerCase()) {
            if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                break;
        }
        else if (r) {
            if (!e[sn])
                switch (s) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (d = e.getAttribute("rel"), d === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (d !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (d = e.getAttribute("src"), (d !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && d && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default: return e;
                }
        }
        else if (s === "input" && e.type === "hidden") {
            var d = o.name == null ? null : "" + o.name;
            if (o.type === "hidden" && e.getAttribute("name") === d)
                return e;
        }
        else
            return e;
        if (e = It(e.nextSibling), e === null)
            break;
    } return null; }
    function wy(e, s, a) { if (s === "")
        return null; for (; e.nodeType !== 3;)
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = It(e.nextSibling), e === null))
            return null; return e; }
    function Ox(e, s) { for (; e.nodeType !== 8;)
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !s || (e = It(e.nextSibling), e === null))
            return null; return e; }
    function zd(e) { return e.data === "$?" || e.data === "$~"; }
    function Rd(e) { return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"; }
    function Sy(e, s) { var a = e.ownerDocument; if (e.data === "$~")
        e._reactRetry = s;
    else if (e.data !== "$?" || a.readyState !== "loading")
        s();
    else {
        var r = function () { s(), a.removeEventListener("DOMContentLoaded", r); };
        a.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
    } }
    function It(e) { for (; e != null; e = e.nextSibling) {
        var s = e.nodeType;
        if (s === 1 || s === 3)
            break;
        if (s === 8) {
            if (s = e.data, s === "$" || s === "$!" || s === "$?" || s === "$~" || s === "&" || s === "F!" || s === "F")
                break;
            if (s === "/$" || s === "/&")
                return null;
        }
    } return e; }
    var Bd = null;
    function zx(e) { e = e.nextSibling; for (var s = 0; e;) {
        if (e.nodeType === 8) {
            var a = e.data;
            if (a === "/$" || a === "/&") {
                if (s === 0)
                    return It(e.nextSibling);
                s--;
            }
            else
                a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || s++;
        }
        e = e.nextSibling;
    } return null; }
    function Rx(e) { e = e.previousSibling; for (var s = 0; e;) {
        if (e.nodeType === 8) {
            var a = e.data;
            if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                if (s === 0)
                    return e;
                s--;
            }
            else
                a !== "/$" && a !== "/&" || s++;
        }
        e = e.previousSibling;
    } return null; }
    function Bx(e, s, a) { switch (s = vi(a), e) {
        case "html":
            if (e = s.documentElement, !e)
                throw Error(c(452));
            return e;
        case "head":
            if (e = s.head, !e)
                throw Error(c(453));
            return e;
        case "body":
            if (e = s.body, !e)
                throw Error(c(454));
            return e;
        default: throw Error(c(451));
    } }
    function Ln(e) { for (var s = e.attributes; s.length;)
        e.removeAttributeNode(s[0]); qc(e); }
    var Wt = new Map, qx = new Set;
    function ji(e) { return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument; }
    var Ls = $.d;
    $.d = { f: ky, r: Cy, D: Ay, C: Ty, L: Ey, m: My, X: _y, S: Dy, M: Oy };
    function ky() { var e = Ls.f(), s = mi(); return e || s; }
    function Cy(e) { var s = al(e); s !== null && s.tag === 5 && s.type === "form" ? Wh(s) : Ls.r(e); }
    var Rl = typeof document > "u" ? null : document;
    function Ux(e, s, a) { var r = Rl; if (r && typeof s == "string" && s) {
        var o = Yt(s);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), qx.has(o) || (qx.add(o), e = { rel: e, crossOrigin: a, href: s }, r.querySelector(o) === null && (s = r.createElement("link"), ht(s, "link", e), it(s), r.head.appendChild(s)));
    } }
    function Ay(e) { Ls.D(e), Ux("dns-prefetch", e, null); }
    function Ty(e, s) { Ls.C(e, s), Ux("preconnect", e, s); }
    function Ey(e, s, a) { Ls.L(e, s, a); var r = Rl; if (r && e && s) {
        var o = 'link[rel="preload"][as="' + Yt(s) + '"]';
        s === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Yt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Yt(a.imageSizes) + '"]')) : o += '[href="' + Yt(e) + '"]';
        var d = o;
        switch (s) {
            case "style":
                d = Bl(e);
                break;
            case "script": d = ql(e);
        }
        Wt.has(d) || (e = g({ rel: "preload", href: s === "image" && a && a.imageSrcSet ? void 0 : e, as: s }, a), Wt.set(d, e), r.querySelector(o) !== null || s === "style" && r.querySelector(Hn(d)) || s === "script" && r.querySelector(Vn(d)) || (s = r.createElement("link"), ht(s, "link", e), it(s), r.head.appendChild(s)));
    } }
    function My(e, s) { Ls.m(e, s); var a = Rl; if (a && e) {
        var r = s && typeof s.as == "string" ? s.as : "script", o = 'link[rel="modulepreload"][as="' + Yt(r) + '"][href="' + Yt(e) + '"]', d = o;
        switch (r) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script": d = ql(e);
        }
        if (!Wt.has(d) && (e = g({ rel: "modulepreload", href: e }, s), Wt.set(d, e), a.querySelector(o) === null)) {
            switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script": if (a.querySelector(Vn(d)))
                    return;
            }
            r = a.createElement("link"), ht(r, "link", e), it(r), a.head.appendChild(r);
        }
    } }
    function Dy(e, s, a) { Ls.S(e, s, a); var r = Rl; if (r && e) {
        var o = ll(r).hoistableStyles, d = Bl(e);
        s = s || "default";
        var x = o.get(d);
        if (!x) {
            var y = { loading: 0, preload: null };
            if (x = r.querySelector(Hn(d)))
                y.loading = 5;
            else {
                e = g({ rel: "stylesheet", href: e, "data-precedence": s }, a), (a = Wt.get(d)) && qd(e, a);
                var k = x = r.createElement("link");
                it(k), ht(k, "link", e), k._p = new Promise(function (B, G) { k.onload = B, k.onerror = G; }), k.addEventListener("load", function () { y.loading |= 1; }), k.addEventListener("error", function () { y.loading |= 2; }), y.loading |= 4, Ni(x, s, r);
            }
            x = { type: "stylesheet", instance: x, count: 1, state: y }, o.set(d, x);
        }
    } }
    function _y(e, s) { Ls.X(e, s); var a = Rl; if (a && e) {
        var r = ll(a).hoistableScripts, o = ql(e), d = r.get(o);
        d || (d = a.querySelector(Vn(o)), d || (e = g({ src: e, async: !0 }, s), (s = Wt.get(o)) && Ud(e, s), d = a.createElement("script"), it(d), ht(d, "link", e), a.head.appendChild(d)), d = { type: "script", instance: d, count: 1, state: null }, r.set(o, d));
    } }
    function Oy(e, s) { Ls.M(e, s); var a = Rl; if (a && e) {
        var r = ll(a).hoistableScripts, o = ql(e), d = r.get(o);
        d || (d = a.querySelector(Vn(o)), d || (e = g({ src: e, async: !0, type: "module" }, s), (s = Wt.get(o)) && Ud(e, s), d = a.createElement("script"), it(d), ht(d, "link", e), a.head.appendChild(d)), d = { type: "script", instance: d, count: 1, state: null }, r.set(o, d));
    } }
    function Lx(e, s, a, r) { var o = (o = at.current) ? ji(o) : null; if (!o)
        throw Error(c(446)); switch (e) {
        case "meta":
        case "title": return null;
        case "style": return typeof a.precedence == "string" && typeof a.href == "string" ? (s = Bl(a.href), a = ll(o).hoistableStyles, r = a.get(s), r || (r = { type: "style", instance: null, count: 0, state: null }, a.set(s, r)), r) : { type: "void", instance: null, count: 0, state: null };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                e = Bl(a.href);
                var d = ll(o).hoistableStyles, x = d.get(e);
                if (x || (o = o.ownerDocument || o, x = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, d.set(e, x), (d = o.querySelector(Hn(e))) && !d._p && (x.instance = d, x.state.loading = 5), Wt.has(e) || (a = { rel: "preload", as: "style", href: a.href, crossOrigin: a.crossOrigin, integrity: a.integrity, media: a.media, hrefLang: a.hrefLang, referrerPolicy: a.referrerPolicy }, Wt.set(e, a), d || zy(o, e, a, x.state))), s && r === null)
                    throw Error(c(528, ""));
                return x;
            }
            if (s && r !== null)
                throw Error(c(529, ""));
            return null;
        case "script": return s = a.async, a = a.src, typeof a == "string" && s && typeof s != "function" && typeof s != "symbol" ? (s = ql(a), a = ll(o).hoistableScripts, r = a.get(s), r || (r = { type: "script", instance: null, count: 0, state: null }, a.set(s, r)), r) : { type: "void", instance: null, count: 0, state: null };
        default: throw Error(c(444, e));
    } }
    function Bl(e) { return 'href="' + Yt(e) + '"'; }
    function Hn(e) { return 'link[rel="stylesheet"][' + e + "]"; }
    function Hx(e) { return g({}, e, { "data-precedence": e.precedence, precedence: null }); }
    function zy(e, s, a, r) { e.querySelector('link[rel="preload"][as="style"][' + s + "]") ? r.loading = 1 : (s = e.createElement("link"), r.preload = s, s.addEventListener("load", function () { return r.loading |= 1; }), s.addEventListener("error", function () { return r.loading |= 2; }), ht(s, "link", a), it(s), e.head.appendChild(s)); }
    function ql(e) { return '[src="' + Yt(e) + '"]'; }
    function Vn(e) { return "script[async]" + e; }
    function Vx(e, s, a) { if (s.count++, s.instance === null)
        switch (s.type) {
            case "style":
                var r = e.querySelector('style[data-href~="' + Yt(a.href) + '"]');
                if (r)
                    return s.instance = r, it(r), r;
                var o = g({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null });
                return r = (e.ownerDocument || e).createElement("style"), it(r), ht(r, "style", o), Ni(r, a.precedence, e), s.instance = r;
            case "stylesheet":
                o = Bl(a.href);
                var d = e.querySelector(Hn(o));
                if (d)
                    return s.state.loading |= 4, s.instance = d, it(d), d;
                r = Hx(a), (o = Wt.get(o)) && qd(r, o), d = (e.ownerDocument || e).createElement("link"), it(d);
                var x = d;
                return x._p = new Promise(function (y, k) { x.onload = y, x.onerror = k; }), ht(d, "link", r), s.state.loading |= 4, Ni(d, a.precedence, e), s.instance = d;
            case "script": return d = ql(a.src), (o = e.querySelector(Vn(d))) ? (s.instance = o, it(o), o) : (r = a, (o = Wt.get(d)) && (r = g({}, a), Ud(r, o)), e = e.ownerDocument || e, o = e.createElement("script"), it(o), ht(o, "link", r), e.head.appendChild(o), s.instance = o);
            case "void": return null;
            default: throw Error(c(443, s.type));
        }
    else
        s.type === "stylesheet" && (s.state.loading & 4) === 0 && (r = s.instance, s.state.loading |= 4, Ni(r, a.precedence, e)); return s.instance; }
    function Ni(e, s, a) { for (var r = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = r.length ? r[r.length - 1] : null, d = o, x = 0; x < r.length; x++) {
        var y = r[x];
        if (y.dataset.precedence === s)
            d = y;
        else if (d !== o)
            break;
    } d ? d.parentNode.insertBefore(e, d.nextSibling) : (s = a.nodeType === 9 ? a.head : a, s.insertBefore(e, s.firstChild)); }
    function qd(e, s) { e.crossOrigin == null && (e.crossOrigin = s.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = s.referrerPolicy), e.title == null && (e.title = s.title); }
    function Ud(e, s) { e.crossOrigin == null && (e.crossOrigin = s.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = s.referrerPolicy), e.integrity == null && (e.integrity = s.integrity); }
    var wi = null;
    function Gx(e, s, a) { if (wi === null) {
        var r = new Map, o = wi = new Map;
        o.set(a, r);
    }
    else
        o = wi, r = o.get(a), r || (r = new Map, o.set(a, r)); if (r.has(e))
        return r; for (r.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var d = a[o];
        if (!(d[sn] || d[ot] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
            var x = d.getAttribute(s) || "";
            x = e + x;
            var y = r.get(x);
            y ? y.push(d) : r.set(x, [d]);
        }
    } return r; }
    function Qx(e, s, a) { e = e.ownerDocument || e, e.head.insertBefore(a, s === "title" ? e.querySelector("head > title") : null); }
    function Ry(e, s, a) { if (a === 1 || s.itemProp != null)
        return !1; switch (e) {
        case "meta":
        case "title": return !0;
        case "style":
            if (typeof s.precedence != "string" || typeof s.href != "string" || s.href === "")
                break;
            return !0;
        case "link":
            if (typeof s.rel != "string" || typeof s.href != "string" || s.href === "" || s.onLoad || s.onError)
                break;
            switch (s.rel) {
                case "stylesheet": return e = s.disabled, typeof s.precedence == "string" && e == null;
                default: return !0;
            }
        case "script": if (s.async && typeof s.async != "function" && typeof s.async != "symbol" && !s.onLoad && !s.onError && s.src && typeof s.src == "string")
            return !0;
    } return !1; }
    function Kx(e) { return !(e.type === "stylesheet" && (e.state.loading & 3) === 0); }
    function By(e, s, a, r) { if (a.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (a.state.loading & 4) === 0) {
        if (a.instance === null) {
            var o = Bl(r.href), d = s.querySelector(Hn(o));
            if (d) {
                s = d._p, s !== null && typeof s == "object" && typeof s.then == "function" && (e.count++, e = Si.bind(e), s.then(e, e)), a.state.loading |= 4, a.instance = d, it(d);
                return;
            }
            d = s.ownerDocument || s, r = Hx(r), (o = Wt.get(o)) && qd(r, o), d = d.createElement("link"), it(d);
            var x = d;
            x._p = new Promise(function (y, k) { x.onload = y, x.onerror = k; }), ht(d, "link", r), a.instance = d;
        }
        e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(a, s), (s = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Si.bind(e), s.addEventListener("load", a), s.addEventListener("error", a));
    } }
    var Ld = 0;
    function qy(e, s) { return e.stylesheets && e.count === 0 && Ci(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function (a) { var r = setTimeout(function () { if (e.stylesheets && Ci(e, e.stylesheets), e.unsuspend) {
        var d = e.unsuspend;
        e.unsuspend = null, d();
    } }, 6e4 + s); 0 < e.imgBytes && Ld === 0 && (Ld = 62500 * gy()); var o = setTimeout(function () { if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ci(e, e.stylesheets), e.unsuspend)) {
        var d = e.unsuspend;
        e.unsuspend = null, d();
    } }, (e.imgBytes > Ld ? 50 : 800) + s); return e.unsuspend = a, function () { e.unsuspend = null, clearTimeout(r), clearTimeout(o); }; } : null; }
    function Si() { if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
            Ci(this, this.stylesheets);
        else if (this.unsuspend) {
            var e = this.unsuspend;
            this.unsuspend = null, e();
        }
    } }
    var ki = null;
    function Ci(e, s) { e.stylesheets = null, e.unsuspend !== null && (e.count++, ki = new Map, s.forEach(Uy, e), ki = null, Si.call(e)); }
    function Uy(e, s) { if (!(s.state.loading & 4)) {
        var a = ki.get(e);
        if (a)
            var r = a.get(null);
        else {
            a = new Map, ki.set(e, a);
            for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), d = 0; d < o.length; d++) {
                var x = o[d];
                (x.nodeName === "LINK" || x.getAttribute("media") !== "not all") && (a.set(x.dataset.precedence, x), r = x);
            }
            r && a.set(null, r);
        }
        o = s.instance, x = o.getAttribute("data-precedence"), d = a.get(x) || r, d === r && a.set(null, o), a.set(x, o), this.count++, r = Si.bind(this), o.addEventListener("load", r), o.addEventListener("error", r), d ? d.parentNode.insertBefore(o, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), s.state.loading |= 4;
    } }
    var Gn = { $$typeof: O, Provider: null, Consumer: null, _currentValue: X, _currentValue2: X, _threadCount: 0 };
    function Ly(e, s, a, r, o, d, x, y, k) { this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Oc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oc(0), this.hiddenUpdates = Oc(null), this.identifierPrefix = r, this.onUncaughtError = o, this.onCaughtError = d, this.onRecoverableError = x, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = k, this.incompleteTransitions = new Map; }
    function Yx(e, s, a, r, o, d, x, y, k, B, G, Y) { return e = new Ly(e, s, a, x, k, B, G, Y, y), s = 1, d === !0 && (s |= 24), d = zt(3, null, null, s), e.current = d, d.stateNode = e, s = bo(), s.refCount++, e.pooledCache = s, s.refCount++, d.memoizedState = { element: r, isDehydrated: a, cache: s }, No(d), e; }
    function Xx(e) { return e ? (e = fl, e) : fl; }
    function Zx(e, s, a, r, o, d) { o = Xx(o), r.context === null ? r.context = o : r.pendingContext = o, r = ea(s), r.payload = { element: a }, d = d === void 0 ? null : d, d !== null && (r.callback = d), a = ta(e, r, s), a !== null && (At(a, e, s), vn(a, e, s)); }
    function Fx(e, s) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < s ? a : s;
    } }
    function Hd(e, s) { Fx(e, s), (e = e.alternate) && Fx(e, s); }
    function Jx(e) { if (e.tag === 13 || e.tag === 31) {
        var s = _a(e, 67108864);
        s !== null && At(s, e, 67108864), Hd(e, 67108864);
    } }
    function $x(e) { if (e.tag === 13 || e.tag === 31) {
        var s = Lt();
        s = zc(s);
        var a = _a(e, s);
        a !== null && At(a, e, s), Hd(e, s);
    } }
    var Ai = !0;
    function Hy(e, s, a, r) { var o = R.T; R.T = null; var d = $.p; try {
        $.p = 2, Vd(e, s, a, r);
    }
    finally {
        $.p = d, R.T = o;
    } }
    function Vy(e, s, a, r) { var o = R.T; R.T = null; var d = $.p; try {
        $.p = 8, Vd(e, s, a, r);
    }
    finally {
        $.p = d, R.T = o;
    } }
    function Vd(e, s, a, r) { if (Ai) {
        var o = Gd(r);
        if (o === null)
            Ad(e, s, r, Ti, a), Ix(e, r);
        else if (Qy(o, e, s, a, r))
            r.stopPropagation();
        else if (Ix(e, r), s & 4 && -1 < Gy.indexOf(e)) {
            for (; o !== null;) {
                var d = al(o);
                if (d !== null)
                    switch (d.tag) {
                        case 3:
                            if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                                var x = Aa(d.pendingLanes);
                                if (x !== 0) {
                                    var y = d;
                                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; x;) {
                                        var k = 1 << 31 - _t(x);
                                        y.entanglements[1] |= k, x &= ~k;
                                    }
                                    hs(d), (Ae & 6) === 0 && (di = Mt() + 500, Bn(0));
                                }
                            }
                            break;
                        case 31:
                        case 13: y = _a(d, 2), y !== null && At(y, d, 2), mi(), Hd(d, 2);
                    }
                if (d = Gd(r), d === null && Ad(e, s, r, Ti, a), d === o)
                    break;
                o = d;
            }
            o !== null && r.stopPropagation();
        }
        else
            Ad(e, s, r, null, a);
    } }
    function Gd(e) { return e = Qc(e), Qd(e); }
    var Ti = null;
    function Qd(e) { if (Ti = null, e = sl(e), e !== null) {
        var s = m(e);
        if (s === null)
            e = null;
        else {
            var a = s.tag;
            if (a === 13) {
                if (e = h(s), e !== null)
                    return e;
                e = null;
            }
            else if (a === 31) {
                if (e = f(s), e !== null)
                    return e;
                e = null;
            }
            else if (a === 3) {
                if (s.stateNode.current.memoizedState.isDehydrated)
                    return s.tag === 3 ? s.stateNode.containerInfo : null;
                e = null;
            }
            else
                s !== e && (e = null);
        }
    } return Ti = e, null; }
    function Px(e) { switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart": return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave": return 8;
        case "message": switch (A0()) {
            case lm: return 2;
            case nm: return 8;
            case gr:
            case T0: return 32;
            case rm: return 268435456;
            default: return 32;
        }
        default: return 32;
    } }
    var Kd = !1, ma = null, ha = null, fa = null, Qn = new Map, Kn = new Map, xa = [], Gy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Ix(e, s) { switch (e) {
        case "focusin":
        case "focusout":
            ma = null;
            break;
        case "dragenter":
        case "dragleave":
            ha = null;
            break;
        case "mouseover":
        case "mouseout":
            fa = null;
            break;
        case "pointerover":
        case "pointerout":
            Qn.delete(s.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture": Kn.delete(s.pointerId);
    } }
    function Yn(e, s, a, r, o, d) { return e === null || e.nativeEvent !== d ? (e = { blockedOn: s, domEventName: a, eventSystemFlags: r, nativeEvent: d, targetContainers: [o] }, s !== null && (s = al(s), s !== null && Jx(s)), e) : (e.eventSystemFlags |= r, s = e.targetContainers, o !== null && s.indexOf(o) === -1 && s.push(o), e); }
    function Qy(e, s, a, r, o) { switch (s) {
        case "focusin": return ma = Yn(ma, e, s, a, r, o), !0;
        case "dragenter": return ha = Yn(ha, e, s, a, r, o), !0;
        case "mouseover": return fa = Yn(fa, e, s, a, r, o), !0;
        case "pointerover":
            var d = o.pointerId;
            return Qn.set(d, Yn(Qn.get(d) || null, e, s, a, r, o)), !0;
        case "gotpointercapture": return d = o.pointerId, Kn.set(d, Yn(Kn.get(d) || null, e, s, a, r, o)), !0;
    } return !1; }
    function Wx(e) { var s = sl(e.target); if (s !== null) {
        var a = m(s);
        if (a !== null) {
            if (s = a.tag, s === 13) {
                if (s = h(a), s !== null) {
                    e.blockedOn = s, mm(e.priority, function () { $x(a); });
                    return;
                }
            }
            else if (s === 31) {
                if (s = f(a), s !== null) {
                    e.blockedOn = s, mm(e.priority, function () { $x(a); });
                    return;
                }
            }
            else if (s === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                return;
            }
        }
    } e.blockedOn = null; }
    function Ei(e) { if (e.blockedOn !== null)
        return !1; for (var s = e.targetContainers; 0 < s.length;) {
        var a = Gd(e.nativeEvent);
        if (a === null) {
            a = e.nativeEvent;
            var r = new a.constructor(a.type, a);
            Gc = r, a.target.dispatchEvent(r), Gc = null;
        }
        else
            return s = al(a), s !== null && Jx(s), e.blockedOn = a, !1;
        s.shift();
    } return !0; }
    function ep(e, s, a) { Ei(e) && a.delete(s); }
    function Ky() { Kd = !1, ma !== null && Ei(ma) && (ma = null), ha !== null && Ei(ha) && (ha = null), fa !== null && Ei(fa) && (fa = null), Qn.forEach(ep), Kn.forEach(ep); }
    function Mi(e, s) { e.blockedOn === s && (e.blockedOn = null, Kd || (Kd = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Ky))); }
    var Di = null;
    function tp(e) { Di !== e && (Di = e, l.unstable_scheduleCallback(l.unstable_NormalPriority, function () { Di === e && (Di = null); for (var s = 0; s < e.length; s += 3) {
        var a = e[s], r = e[s + 1], o = e[s + 2];
        if (typeof r != "function") {
            if (Qd(r || a) === null)
                continue;
            break;
        }
        var d = al(a);
        d !== null && (e.splice(s, 3), s -= 3, Go(d, { pending: !0, data: o, method: a.method, action: r }, r, o));
    } })); }
    function Ul(e) { function s(k) { return Mi(k, e); } ma !== null && Mi(ma, e), ha !== null && Mi(ha, e), fa !== null && Mi(fa, e), Qn.forEach(s), Kn.forEach(s); for (var a = 0; a < xa.length; a++) {
        var r = xa[a];
        r.blockedOn === e && (r.blockedOn = null);
    } for (; 0 < xa.length && (a = xa[0], a.blockedOn === null);)
        Wx(a), a.blockedOn === null && xa.shift(); if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (r = 0; r < a.length; r += 3) {
            var o = a[r], d = a[r + 1], x = o[jt] || null;
            if (typeof d == "function")
                x || tp(a);
            else if (x) {
                var y = null;
                if (d && d.hasAttribute("formAction")) {
                    if (o = d, x = d[jt] || null)
                        y = x.formAction;
                    else if (Qd(o) !== null)
                        continue;
                }
                else
                    y = x.action;
                typeof y == "function" ? a[r + 1] = y : (a.splice(r, 3), r -= 3), tp(a);
            }
        } }
    function sp() { function e(d) { d.canIntercept && d.info === "react-transition" && d.intercept({ handler: function () { return new Promise(function (x) { return o = x; }); }, focusReset: "manual", scroll: "manual" }); } function s() { o !== null && (o(), o = null), r || setTimeout(a, 20); } function a() { if (!r && !navigation.transition) {
        var d = navigation.currentEntry;
        d && d.url != null && navigation.navigate(d.url, { state: d.getState(), info: "react-transition", history: "replace" });
    } } if (typeof navigation == "object") {
        var r = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", s), navigation.addEventListener("navigateerror", s), setTimeout(a, 100), function () { r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", s), navigation.removeEventListener("navigateerror", s), o !== null && (o(), o = null); };
    } }
    function Yd(e) { this._internalRoot = e; }
    _i.prototype.render = Yd.prototype.render = function (e) { var s = this._internalRoot; if (s === null)
        throw Error(c(409)); var a = s.current, r = Lt(); Zx(a, r, e, s, null, null); }, _i.prototype.unmount = Yd.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
        this._internalRoot = null;
        var s = e.containerInfo;
        Zx(e.current, 2, null, e, null, null), mi(), s[tl] = null;
    } };
    function _i(e) { this._internalRoot = e; }
    _i.prototype.unstable_scheduleHydration = function (e) { if (e) {
        var s = um();
        e = { blockedOn: null, target: e, priority: s };
        for (var a = 0; a < xa.length && s !== 0 && s < xa[a].priority; a++)
            ;
        xa.splice(a, 0, e), a === 0 && Wx(e);
    } };
    var ap = n.version;
    if (ap !== "19.2.3")
        throw Error(c(527, ap, "19.2.3"));
    $.findDOMNode = function (e) { var s = e._reactInternals; if (s === void 0)
        throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e))); return e = v(s), e = e !== null ? j(e) : null, e = e === null ? null : e.stateNode, e; };
    var Yy = { bundleType: 0, version: "19.2.3", rendererPackageName: "react-dom", currentDispatcherRef: R, reconcilerVersion: "19.2.3" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Oi.isDisabled && Oi.supportsFiber)
            try {
                Wl = Oi.inject(Yy), Dt = Oi;
            }
            catch { }
    }
    return Xn.createRoot = function (e, s) { if (!u(e))
        throw Error(c(299)); var a = !1, r = "", o = df, d = uf, x = mf; return s != null && (s.unstable_strictMode === !0 && (a = !0), s.identifierPrefix !== void 0 && (r = s.identifierPrefix), s.onUncaughtError !== void 0 && (o = s.onUncaughtError), s.onCaughtError !== void 0 && (d = s.onCaughtError), s.onRecoverableError !== void 0 && (x = s.onRecoverableError)), s = Yx(e, 1, !1, null, null, a, r, null, o, d, x, sp), e[tl] = s.current, Cd(e), new Yd(s); }, Xn.hydrateRoot = function (e, s, a) { if (!u(e))
        throw Error(c(299)); var r = !1, o = "", d = df, x = uf, y = mf, k = null; return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (d = a.onUncaughtError), a.onCaughtError !== void 0 && (x = a.onCaughtError), a.onRecoverableError !== void 0 && (y = a.onRecoverableError), a.formState !== void 0 && (k = a.formState)), s = Yx(e, 1, !0, s, a ?? null, r, o, k, d, x, y, sp), s.context = Xx(null), a = s.current, r = Lt(), r = zc(r), o = ea(r), o.callback = null, ta(a, o, r), a = r, s.current.lanes = a, tn(s, a), hs(s), e[tl] = s.current, Cd(e), new _i(s); }, Xn.version = "19.2.3", Xn;
}
var ip;
function cv() { if (ip)
    return Xd.exports; ip = 1; function l() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
    }
    catch (n) {
        console.error(n);
    } } return l(), Xd.exports = iv(), Xd.exports; }
var ov = cv();
const dv = Py(ov), gs = Object.create(null);
gs.open = "0";
gs.close = "1";
gs.ping = "2";
gs.pong = "3";
gs.message = "4";
gs.upgrade = "5";
gs.noop = "6";
const Hi = Object.create(null);
Object.keys(gs).forEach(l => { Hi[gs[l]] = l; });
const uu = { type: "error", data: "parser error" }, $p = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Pp = typeof ArrayBuffer == "function", Ip = l => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(l) : l && l.buffer instanceof ArrayBuffer, ku = ({ type: l, data: n }, i, c) => $p && n instanceof Blob ? i ? c(n) : cp(n, c) : Pp && (n instanceof ArrayBuffer || Ip(n)) ? i ? c(n) : cp(new Blob([n]), c) : c(gs[l] + (n || "")), cp = (l, n) => { const i = new FileReader; return i.onload = function () { const c = i.result.split(",")[1]; n("b" + (c || "")); }, i.readAsDataURL(l); };
function op(l) { return l instanceof Uint8Array ? l : l instanceof ArrayBuffer ? new Uint8Array(l) : new Uint8Array(l.buffer, l.byteOffset, l.byteLength); }
let Jd;
function uv(l, n) { if ($p && l.data instanceof Blob)
    return l.data.arrayBuffer().then(op).then(n); if (Pp && (l.data instanceof ArrayBuffer || Ip(l.data)))
    return n(op(l.data)); ku(l, !1, i => { Jd || (Jd = new TextEncoder), n(Jd.encode(i)); }); }
const dp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Pn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let l = 0; l < dp.length; l++)
    Pn[dp.charCodeAt(l)] = l;
const mv = l => { let n = l.length * .75, i = l.length, c, u = 0, m, h, f, p; l[l.length - 1] === "=" && (n--, l[l.length - 2] === "=" && n--); const v = new ArrayBuffer(n), j = new Uint8Array(v); for (c = 0; c < i; c += 4)
    m = Pn[l.charCodeAt(c)], h = Pn[l.charCodeAt(c + 1)], f = Pn[l.charCodeAt(c + 2)], p = Pn[l.charCodeAt(c + 3)], j[u++] = m << 2 | h >> 4, j[u++] = (h & 15) << 4 | f >> 2, j[u++] = (f & 3) << 6 | p & 63; return v; }, hv = typeof ArrayBuffer == "function", Cu = (l, n) => { if (typeof l != "string")
    return { type: "message", data: Wp(l, n) }; const i = l.charAt(0); return i === "b" ? { type: "message", data: fv(l.substring(1), n) } : Hi[i] ? l.length > 1 ? { type: Hi[i], data: l.substring(1) } : { type: Hi[i] } : uu; }, fv = (l, n) => { if (hv) {
    const i = mv(l);
    return Wp(i, n);
}
else
    return { base64: !0, data: l }; }, Wp = (l, n) => { switch (n) {
    case "blob": return l instanceof Blob ? l : new Blob([l]);
    case "arraybuffer":
    default: return l instanceof ArrayBuffer ? l : l.buffer;
} }, eg = "", xv = (l, n) => { const i = l.length, c = new Array(i); let u = 0; l.forEach((m, h) => { ku(m, !1, f => { c[h] = f, ++u === i && n(c.join(eg)); }); }); }, pv = (l, n) => { const i = l.split(eg), c = []; for (let u = 0; u < i.length; u++) {
    const m = Cu(i[u], n);
    if (c.push(m), m.type === "error")
        break;
} return c; };
function gv() { return new TransformStream({ transform(l, n) { uv(l, i => { const c = i.length; let u; if (c < 126)
        u = new Uint8Array(1), new DataView(u.buffer).setUint8(0, c);
    else if (c < 65536) {
        u = new Uint8Array(3);
        const m = new DataView(u.buffer);
        m.setUint8(0, 126), m.setUint16(1, c);
    }
    else {
        u = new Uint8Array(9);
        const m = new DataView(u.buffer);
        m.setUint8(0, 127), m.setBigUint64(1, BigInt(c));
    } l.data && typeof l.data != "string" && (u[0] |= 128), n.enqueue(u), n.enqueue(i); }); } }); }
let $d;
function zi(l) { return l.reduce((n, i) => n + i.length, 0); }
function Ri(l, n) { if (l[0].length === n)
    return l.shift(); const i = new Uint8Array(n); let c = 0; for (let u = 0; u < n; u++)
    i[u] = l[0][c++], c === l[0].length && (l.shift(), c = 0); return l.length && c < l[0].length && (l[0] = l[0].slice(c)), i; }
function bv(l, n) { $d || ($d = new TextDecoder); const i = []; let c = 0, u = -1, m = !1; return new TransformStream({ transform(h, f) { for (i.push(h);;) {
        if (c === 0) {
            if (zi(i) < 1)
                break;
            const p = Ri(i, 1);
            m = (p[0] & 128) === 128, u = p[0] & 127, u < 126 ? c = 3 : u === 126 ? c = 1 : c = 2;
        }
        else if (c === 1) {
            if (zi(i) < 2)
                break;
            const p = Ri(i, 2);
            u = new DataView(p.buffer, p.byteOffset, p.length).getUint16(0), c = 3;
        }
        else if (c === 2) {
            if (zi(i) < 8)
                break;
            const p = Ri(i, 8), v = new DataView(p.buffer, p.byteOffset, p.length), j = v.getUint32(0);
            if (j > Math.pow(2, 21) - 1) {
                f.enqueue(uu);
                break;
            }
            u = j * Math.pow(2, 32) + v.getUint32(4), c = 3;
        }
        else {
            if (zi(i) < u)
                break;
            const p = Ri(i, u);
            f.enqueue(Cu(m ? p : $d.decode(p), n)), c = 0;
        }
        if (u === 0 || u > l) {
            f.enqueue(uu);
            break;
        }
    } } }); }
const tg = 4;
function st(l) { if (l)
    return yv(l); }
function yv(l) { for (var n in st.prototype)
    l[n] = st.prototype[n]; return l; }
st.prototype.on = st.prototype.addEventListener = function (l, n) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + l] = this._callbacks["$" + l] || []).push(n), this; };
st.prototype.once = function (l, n) { function i() { this.off(l, i), n.apply(this, arguments); } return i.fn = n, this.on(l, i), this; };
st.prototype.off = st.prototype.removeListener = st.prototype.removeAllListeners = st.prototype.removeEventListener = function (l, n) { if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this; var i = this._callbacks["$" + l]; if (!i)
    return this; if (arguments.length == 1)
    return delete this._callbacks["$" + l], this; for (var c, u = 0; u < i.length; u++)
    if (c = i[u], c === n || c.fn === n) {
        i.splice(u, 1);
        break;
    } return i.length === 0 && delete this._callbacks["$" + l], this; };
st.prototype.emit = function (l) { this._callbacks = this._callbacks || {}; for (var n = new Array(arguments.length - 1), i = this._callbacks["$" + l], c = 1; c < arguments.length; c++)
    n[c - 1] = arguments[c]; if (i) {
    i = i.slice(0);
    for (var c = 0, u = i.length; c < u; ++c)
        i[c].apply(this, n);
} return this; };
st.prototype.emitReserved = st.prototype.emit;
st.prototype.listeners = function (l) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + l] || []; };
st.prototype.hasListeners = function (l) { return !!this.listeners(l).length; };
const lc = typeof Promise == "function" && typeof Promise.resolve == "function" ? n => Promise.resolve().then(n) : (n, i) => i(n, 0), ts = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), vv = "arraybuffer";
function sg(l, ...n) { return n.reduce((i, c) => (l.hasOwnProperty(c) && (i[c] = l[c]), i), {}); }
const jv = ts.setTimeout, Nv = ts.clearTimeout;
function nc(l, n) { n.useNativeTimers ? (l.setTimeoutFn = jv.bind(ts), l.clearTimeoutFn = Nv.bind(ts)) : (l.setTimeoutFn = ts.setTimeout.bind(ts), l.clearTimeoutFn = ts.clearTimeout.bind(ts)); }
const wv = 1.33;
function Sv(l) { return typeof l == "string" ? kv(l) : Math.ceil((l.byteLength || l.size) * wv); }
function kv(l) { let n = 0, i = 0; for (let c = 0, u = l.length; c < u; c++)
    n = l.charCodeAt(c), n < 128 ? i += 1 : n < 2048 ? i += 2 : n < 55296 || n >= 57344 ? i += 3 : (c++, i += 4); return i; }
function ag() { return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5); }
function Cv(l) { let n = ""; for (let i in l)
    l.hasOwnProperty(i) && (n.length && (n += "&"), n += encodeURIComponent(i) + "=" + encodeURIComponent(l[i])); return n; }
function Av(l) { let n = {}, i = l.split("&"); for (let c = 0, u = i.length; c < u; c++) {
    let m = i[c].split("=");
    n[decodeURIComponent(m[0])] = decodeURIComponent(m[1]);
} return n; }
class Tv extends Error {
    constructor(n, i, c) { super(n), this.description = i, this.context = c, this.type = "TransportError"; }
}
class Au extends st {
    constructor(n) { super(), this.writable = !1, nc(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64; }
    onError(n, i, c) { return super.emitReserved("error", new Tv(n, i, c)), this; }
    open() { return this.readyState = "opening", this.doOpen(), this; }
    close() { return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this; }
    send(n) { this.readyState === "open" && this.write(n); }
    onOpen() { this.readyState = "open", this.writable = !0, super.emitReserved("open"); }
    onData(n) { const i = Cu(n, this.socket.binaryType); this.onPacket(i); }
    onPacket(n) { super.emitReserved("packet", n); }
    onClose(n) { this.readyState = "closed", super.emitReserved("close", n); }
    pause(n) { }
    createUri(n, i = {}) { return n + "://" + this._hostname() + this._port() + this.opts.path + this._query(i); }
    _hostname() { const n = this.opts.hostname; return n.indexOf(":") === -1 ? n : "[" + n + "]"; }
    _port() { return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""; }
    _query(n) { const i = Cv(n); return i.length ? "?" + i : ""; }
}
class Ev extends Au {
    constructor() { super(...arguments), this._polling = !1; }
    get name() { return "polling"; }
    doOpen() { this._poll(); }
    pause(n) { this.readyState = "pausing"; const i = () => { this.readyState = "paused", n(); }; if (this._polling || !this.writable) {
        let c = 0;
        this._polling && (c++, this.once("pollComplete", function () { --c || i(); })), this.writable || (c++, this.once("drain", function () { --c || i(); }));
    }
    else
        i(); }
    _poll() { this._polling = !0, this.doPoll(), this.emitReserved("poll"); }
    onData(n) { const i = c => { if (this.readyState === "opening" && c.type === "open" && this.onOpen(), c.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1; this.onPacket(c); }; pv(n, this.socket.binaryType).forEach(i), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll()); }
    doClose() { const n = () => { this.write([{ type: "close" }]); }; this.readyState === "open" ? n() : this.once("open", n); }
    write(n) { this.writable = !1, xv(n, i => { this.doWrite(i, () => { this.writable = !0, this.emitReserved("drain"); }); }); }
    uri() { const n = this.opts.secure ? "https" : "http", i = this.query || {}; return this.opts.timestampRequests !== !1 && (i[this.opts.timestampParam] = ag()), !this.supportsBinary && !i.sid && (i.b64 = 1), this.createUri(n, i); }
}
let lg = !1;
try {
    lg = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest;
}
catch { }
const Mv = lg;
function Dv() { }
class _v extends Ev {
    constructor(n) { if (super(n), typeof location < "u") {
        const i = location.protocol === "https:";
        let c = location.port;
        c || (c = i ? "443" : "80"), this.xd = typeof location < "u" && n.hostname !== location.hostname || c !== n.port;
    } }
    doWrite(n, i) { const c = this.request({ method: "POST", data: n }); c.on("success", i), c.on("error", (u, m) => { this.onError("xhr post error", u, m); }); }
    doPoll() { const n = this.request(); n.on("data", this.onData.bind(this)), n.on("error", (i, c) => { this.onError("xhr poll error", i, c); }), this.pollXhr = n; }
}
class ps extends st {
    constructor(n, i, c) { super(), this.createRequest = n, nc(this, c), this._opts = c, this._method = c.method || "GET", this._uri = i, this._data = c.data !== void 0 ? c.data : null, this._create(); }
    _create() { var n; const i = sg(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref"); i.xdomain = !!this._opts.xd; const c = this._xhr = this.createRequest(i); try {
        c.open(this._method, this._uri, !0);
        try {
            if (this._opts.extraHeaders) {
                c.setDisableHeaderCheck && c.setDisableHeaderCheck(!0);
                for (let u in this._opts.extraHeaders)
                    this._opts.extraHeaders.hasOwnProperty(u) && c.setRequestHeader(u, this._opts.extraHeaders[u]);
            }
        }
        catch { }
        if (this._method === "POST")
            try {
                c.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            }
            catch { }
        try {
            c.setRequestHeader("Accept", "*/*");
        }
        catch { }
        (n = this._opts.cookieJar) === null || n === void 0 || n.addCookies(c), "withCredentials" in c && (c.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (c.timeout = this._opts.requestTimeout), c.onreadystatechange = () => { var u; c.readyState === 3 && ((u = this._opts.cookieJar) === null || u === void 0 || u.parseCookies(c.getResponseHeader("set-cookie"))), c.readyState === 4 && (c.status === 200 || c.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => { this._onError(typeof c.status == "number" ? c.status : 0); }, 0)); }, c.send(this._data);
    }
    catch (u) {
        this.setTimeoutFn(() => { this._onError(u); }, 0);
        return;
    } typeof document < "u" && (this._index = ps.requestsCount++, ps.requests[this._index] = this); }
    _onError(n) { this.emitReserved("error", n, this._xhr), this._cleanup(!0); }
    _cleanup(n) { if (!(typeof this._xhr > "u" || this._xhr === null)) {
        if (this._xhr.onreadystatechange = Dv, n)
            try {
                this._xhr.abort();
            }
            catch { }
        typeof document < "u" && delete ps.requests[this._index], this._xhr = null;
    } }
    _onLoad() { const n = this._xhr.responseText; n !== null && (this.emitReserved("data", n), this.emitReserved("success"), this._cleanup()); }
    abort() { this._cleanup(); }
}
ps.requestsCount = 0;
ps.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", up);
    else if (typeof addEventListener == "function") {
        const l = "onpagehide" in ts ? "pagehide" : "unload";
        addEventListener(l, up, !1);
    }
}
function up() { for (let l in ps.requests)
    ps.requests.hasOwnProperty(l) && ps.requests[l].abort(); }
const Ov = (function () { const l = ng({ xdomain: !1 }); return l && l.responseType !== null; })();
class zv extends _v {
    constructor(n) { super(n); const i = n && n.forceBase64; this.supportsBinary = Ov && !i; }
    request(n = {}) { return Object.assign(n, { xd: this.xd }, this.opts), new ps(ng, this.uri(), n); }
}
function ng(l) { const n = l.xdomain; try {
    if (typeof XMLHttpRequest < "u" && (!n || Mv))
        return new XMLHttpRequest;
}
catch { } if (!n)
    try {
        return new ts[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    }
    catch { } }
const rg = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Rv extends Au {
    get name() { return "websocket"; }
    doOpen() { const n = this.uri(), i = this.opts.protocols, c = rg ? {} : sg(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity"); this.opts.extraHeaders && (c.headers = this.opts.extraHeaders); try {
        this.ws = this.createSocket(n, i, c);
    }
    catch (u) {
        return this.emitReserved("error", u);
    } this.ws.binaryType = this.socket.binaryType, this.addEventListeners(); }
    addEventListeners() { this.ws.onopen = () => { this.opts.autoUnref && this.ws._socket.unref(), this.onOpen(); }, this.ws.onclose = n => this.onClose({ description: "websocket connection closed", context: n }), this.ws.onmessage = n => this.onData(n.data), this.ws.onerror = n => this.onError("websocket error", n); }
    write(n) { this.writable = !1; for (let i = 0; i < n.length; i++) {
        const c = n[i], u = i === n.length - 1;
        ku(c, this.supportsBinary, m => { try {
            this.doWrite(c, m);
        }
        catch { } u && lc(() => { this.writable = !0, this.emitReserved("drain"); }, this.setTimeoutFn); });
    } }
    doClose() { typeof this.ws < "u" && (this.ws.onerror = () => { }, this.ws.close(), this.ws = null); }
    uri() { const n = this.opts.secure ? "wss" : "ws", i = this.query || {}; return this.opts.timestampRequests && (i[this.opts.timestampParam] = ag()), this.supportsBinary || (i.b64 = 1), this.createUri(n, i); }
}
const Pd = ts.WebSocket || ts.MozWebSocket;
class Bv extends Rv {
    createSocket(n, i, c) { return rg ? new Pd(n, i, c) : i ? new Pd(n, i) : new Pd(n); }
    doWrite(n, i) { this.ws.send(i); }
}
class qv extends Au {
    get name() { return "webtransport"; }
    doOpen() { try {
        this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    }
    catch (n) {
        return this.emitReserved("error", n);
    } this._transport.closed.then(() => { this.onClose(); }).catch(n => { this.onError("webtransport error", n); }), this._transport.ready.then(() => { this._transport.createBidirectionalStream().then(n => { const i = bv(Number.MAX_SAFE_INTEGER, this.socket.binaryType), c = n.readable.pipeThrough(i).getReader(), u = gv(); u.readable.pipeTo(n.writable), this._writer = u.writable.getWriter(); const m = () => { c.read().then(({ done: f, value: p }) => { f || (this.onPacket(p), m()); }).catch(f => { }); }; m(); const h = { type: "open" }; this.query.sid && (h.data = `{"sid":"${this.query.sid}"}`), this._writer.write(h).then(() => this.onOpen()); }); }); }
    write(n) { this.writable = !1; for (let i = 0; i < n.length; i++) {
        const c = n[i], u = i === n.length - 1;
        this._writer.write(c).then(() => { u && lc(() => { this.writable = !0, this.emitReserved("drain"); }, this.setTimeoutFn); });
    } }
    doClose() { var n; (n = this._transport) === null || n === void 0 || n.close(); }
}
const Uv = { websocket: Bv, webtransport: qv, polling: zv }, Lv = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Hv = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function mu(l) { if (l.length > 8e3)
    throw "URI too long"; const n = l, i = l.indexOf("["), c = l.indexOf("]"); i != -1 && c != -1 && (l = l.substring(0, i) + l.substring(i, c).replace(/:/g, ";") + l.substring(c, l.length)); let u = Lv.exec(l || ""), m = {}, h = 14; for (; h--;)
    m[Hv[h]] = u[h] || ""; return i != -1 && c != -1 && (m.source = n, m.host = m.host.substring(1, m.host.length - 1).replace(/;/g, ":"), m.authority = m.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), m.ipv6uri = !0), m.pathNames = Vv(m, m.path), m.queryKey = Gv(m, m.query), m; }
function Vv(l, n) { const i = /\/{2,9}/g, c = n.replace(i, "/").split("/"); return (n.slice(0, 1) == "/" || n.length === 0) && c.splice(0, 1), n.slice(-1) == "/" && c.splice(c.length - 1, 1), c; }
function Gv(l, n) { const i = {}; return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (c, u, m) { u && (i[u] = m); }), i; }
const hu = typeof addEventListener == "function" && typeof removeEventListener == "function", Vi = [];
hu && addEventListener("offline", () => { Vi.forEach(l => l()); }, !1);
class ya extends st {
    constructor(n, i) { if (super(), this.binaryType = vv, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (i = n, n = null), n) {
        const c = mu(n);
        i.hostname = c.host, i.secure = c.protocol === "https" || c.protocol === "wss", i.port = c.port, c.query && (i.query = c.query);
    }
    else
        i.host && (i.hostname = mu(i.host).host); nc(this, i), this.secure = i.secure != null ? i.secure : typeof location < "u" && location.protocol === "https:", i.hostname && !i.port && (i.port = this.secure ? "443" : "80"), this.hostname = i.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = i.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, i.transports.forEach(c => { const u = c.prototype.name; this.transports.push(u), this._transportsByName[u] = c; }), this.opts = Object.assign({ path: "/engine.io", agent: !1, withCredentials: !1, upgrade: !0, timestampParam: "t", rememberUpgrade: !1, addTrailingSlash: !0, rejectUnauthorized: !0, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: !1 }, i), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Av(this.opts.query)), hu && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => { this.transport && (this.transport.removeAllListeners(), this.transport.close()); }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => { this._onClose("transport close", { description: "network connection lost" }); }, Vi.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open(); }
    createTransport(n) { const i = Object.assign({}, this.opts.query); i.EIO = tg, i.transport = n, this.id && (i.sid = this.id); const c = Object.assign({}, this.opts, { query: i, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[n]); return new this._transportsByName[n](c); }
    _open() { if (this.transports.length === 0) {
        this.setTimeoutFn(() => { this.emitReserved("error", "No transports available"); }, 0);
        return;
    } const n = this.opts.rememberUpgrade && ya.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0]; this.readyState = "opening"; const i = this.createTransport(n); i.open(), this.setTransport(i); }
    setTransport(n) { this.transport && this.transport.removeAllListeners(), this.transport = n, n.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", i => this._onClose("transport close", i)); }
    onOpen() { this.readyState = "open", ya.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(); }
    _onPacket(n) { if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
        switch (this.emitReserved("packet", n), this.emitReserved("heartbeat"), n.type) {
            case "open":
                this.onHandshake(JSON.parse(n.data));
                break;
            case "ping":
                this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                break;
            case "error":
                const i = new Error("server error");
                i.code = n.data, this._onError(i);
                break;
            case "message":
                this.emitReserved("data", n.data), this.emitReserved("message", n.data);
                break;
        } }
    onHandshake(n) { this.emitReserved("handshake", n), this.id = n.sid, this.transport.query.sid = n.sid, this._pingInterval = n.pingInterval, this._pingTimeout = n.pingTimeout, this._maxPayload = n.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout(); }
    _resetPingTimeout() { this.clearTimeoutFn(this._pingTimeoutTimer); const n = this._pingInterval + this._pingTimeout; this._pingTimeoutTime = Date.now() + n, this._pingTimeoutTimer = this.setTimeoutFn(() => { this._onClose("ping timeout"); }, n), this.opts.autoUnref && this._pingTimeoutTimer.unref(); }
    _onDrain() { this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush(); }
    flush() { if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        const n = this._getWritablePackets();
        this.transport.send(n), this._prevBufferLen = n.length, this.emitReserved("flush");
    } }
    _getWritablePackets() { if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
        return this.writeBuffer; let i = 1; for (let c = 0; c < this.writeBuffer.length; c++) {
        const u = this.writeBuffer[c].data;
        if (u && (i += Sv(u)), c > 0 && i > this._maxPayload)
            return this.writeBuffer.slice(0, c);
        i += 2;
    } return this.writeBuffer; }
    _hasPingExpired() { if (!this._pingTimeoutTime)
        return !0; const n = Date.now() > this._pingTimeoutTime; return n && (this._pingTimeoutTime = 0, lc(() => { this._onClose("ping timeout"); }, this.setTimeoutFn)), n; }
    write(n, i, c) { return this._sendPacket("message", n, i, c), this; }
    send(n, i, c) { return this._sendPacket("message", n, i, c), this; }
    _sendPacket(n, i, c, u) { if (typeof i == "function" && (u = i, i = void 0), typeof c == "function" && (u = c, c = null), this.readyState === "closing" || this.readyState === "closed")
        return; c = c || {}, c.compress = c.compress !== !1; const m = { type: n, data: i, options: c }; this.emitReserved("packetCreate", m), this.writeBuffer.push(m), u && this.once("flush", u), this.flush(); }
    close() { const n = () => { this._onClose("forced close"), this.transport.close(); }, i = () => { this.off("upgrade", i), this.off("upgradeError", i), n(); }, c = () => { this.once("upgrade", i), this.once("upgradeError", i); }; return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => { this.upgrading ? c() : n(); }) : this.upgrading ? c() : n()), this; }
    _onError(n) { if (ya.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
        return this.transports.shift(), this._open(); this.emitReserved("error", n), this._onClose("transport error", n); }
    _onClose(n, i) { if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
        if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), hu && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
            const c = Vi.indexOf(this._offlineEventListener);
            c !== -1 && Vi.splice(c, 1);
        }
        this.readyState = "closed", this.id = null, this.emitReserved("close", n, i), this.writeBuffer = [], this._prevBufferLen = 0;
    } }
}
ya.protocol = tg;
class Qv extends ya {
    constructor() { super(...arguments), this._upgrades = []; }
    onOpen() { if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
        for (let n = 0; n < this._upgrades.length; n++)
            this._probe(this._upgrades[n]); }
    _probe(n) { let i = this.createTransport(n), c = !1; ya.priorWebsocketSuccess = !1; const u = () => { c || (i.send([{ type: "ping", data: "probe" }]), i.once("packet", g => { if (!c)
        if (g.type === "pong" && g.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", i), !i)
                return;
            ya.priorWebsocketSuccess = i.name === "websocket", this.transport.pause(() => { c || this.readyState !== "closed" && (j(), this.setTransport(i), i.send([{ type: "upgrade" }]), this.emitReserved("upgrade", i), i = null, this.upgrading = !1, this.flush()); });
        }
        else {
            const b = new Error("probe error");
            b.transport = i.name, this.emitReserved("upgradeError", b);
        } })); }; function m() { c || (c = !0, j(), i.close(), i = null); } const h = g => { const b = new Error("probe error: " + g); b.transport = i.name, m(), this.emitReserved("upgradeError", b); }; function f() { h("transport closed"); } function p() { h("socket closed"); } function v(g) { i && g.name !== i.name && m(); } const j = () => { i.removeListener("open", u), i.removeListener("error", h), i.removeListener("close", f), this.off("close", p), this.off("upgrading", v); }; i.once("open", u), i.once("error", h), i.once("close", f), this.once("close", p), this.once("upgrading", v), this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport" ? this.setTimeoutFn(() => { c || i.open(); }, 200) : i.open(); }
    onHandshake(n) { this._upgrades = this._filterUpgrades(n.upgrades), super.onHandshake(n); }
    _filterUpgrades(n) { const i = []; for (let c = 0; c < n.length; c++)
        ~this.transports.indexOf(n[c]) && i.push(n[c]); return i; }
}
let Kv = class extends Qv {
    constructor(n, i = {}) { const c = typeof n == "object" ? n : i; (!c.transports || c.transports && typeof c.transports[0] == "string") && (c.transports = (c.transports || ["polling", "websocket", "webtransport"]).map(u => Uv[u]).filter(u => !!u)), super(n, c); }
};
function Yv(l, n = "", i) { let c = l; i = i || typeof location < "u" && location, l == null && (l = i.protocol + "//" + i.host), typeof l == "string" && (l.charAt(0) === "/" && (l.charAt(1) === "/" ? l = i.protocol + l : l = i.host + l), /^(https?|wss?):\/\//.test(l) || (typeof i < "u" ? l = i.protocol + "//" + l : l = "https://" + l), c = mu(l)), c.port || (/^(http|ws)$/.test(c.protocol) ? c.port = "80" : /^(http|ws)s$/.test(c.protocol) && (c.port = "443")), c.path = c.path || "/"; const m = c.host.indexOf(":") !== -1 ? "[" + c.host + "]" : c.host; return c.id = c.protocol + "://" + m + ":" + c.port + n, c.href = c.protocol + "://" + m + (i && i.port === c.port ? "" : ":" + c.port), c; }
const Xv = typeof ArrayBuffer == "function", Zv = l => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(l) : l.buffer instanceof ArrayBuffer, ig = Object.prototype.toString, Fv = typeof Blob == "function" || typeof Blob < "u" && ig.call(Blob) === "[object BlobConstructor]", Jv = typeof File == "function" || typeof File < "u" && ig.call(File) === "[object FileConstructor]";
function Tu(l) { return Xv && (l instanceof ArrayBuffer || Zv(l)) || Fv && l instanceof Blob || Jv && l instanceof File; }
function Gi(l, n) { if (!l || typeof l != "object")
    return !1; if (Array.isArray(l)) {
    for (let i = 0, c = l.length; i < c; i++)
        if (Gi(l[i]))
            return !0;
    return !1;
} if (Tu(l))
    return !0; if (l.toJSON && typeof l.toJSON == "function" && arguments.length === 1)
    return Gi(l.toJSON(), !0); for (const i in l)
    if (Object.prototype.hasOwnProperty.call(l, i) && Gi(l[i]))
        return !0; return !1; }
function $v(l) { const n = [], i = l.data, c = l; return c.data = fu(i, n), c.attachments = n.length, { packet: c, buffers: n }; }
function fu(l, n) { if (!l)
    return l; if (Tu(l)) {
    const i = { _placeholder: !0, num: n.length };
    return n.push(l), i;
}
else if (Array.isArray(l)) {
    const i = new Array(l.length);
    for (let c = 0; c < l.length; c++)
        i[c] = fu(l[c], n);
    return i;
}
else if (typeof l == "object" && !(l instanceof Date)) {
    const i = {};
    for (const c in l)
        Object.prototype.hasOwnProperty.call(l, c) && (i[c] = fu(l[c], n));
    return i;
} return l; }
function Pv(l, n) { return l.data = xu(l.data, n), delete l.attachments, l; }
function xu(l, n) { if (!l)
    return l; if (l && l._placeholder === !0) {
    if (typeof l.num == "number" && l.num >= 0 && l.num < n.length)
        return n[l.num];
    throw new Error("illegal attachments");
}
else if (Array.isArray(l))
    for (let i = 0; i < l.length; i++)
        l[i] = xu(l[i], n);
else if (typeof l == "object")
    for (const i in l)
        Object.prototype.hasOwnProperty.call(l, i) && (l[i] = xu(l[i], n)); return l; }
const Iv = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"], Wv = 5;
var Ne;
(function (l) { l[l.CONNECT = 0] = "CONNECT", l[l.DISCONNECT = 1] = "DISCONNECT", l[l.EVENT = 2] = "EVENT", l[l.ACK = 3] = "ACK", l[l.CONNECT_ERROR = 4] = "CONNECT_ERROR", l[l.BINARY_EVENT = 5] = "BINARY_EVENT", l[l.BINARY_ACK = 6] = "BINARY_ACK"; })(Ne || (Ne = {}));
class ej {
    constructor(n) { this.replacer = n; }
    encode(n) { return (n.type === Ne.EVENT || n.type === Ne.ACK) && Gi(n) ? this.encodeAsBinary({ type: n.type === Ne.EVENT ? Ne.BINARY_EVENT : Ne.BINARY_ACK, nsp: n.nsp, data: n.data, id: n.id }) : [this.encodeAsString(n)]; }
    encodeAsString(n) { let i = "" + n.type; return (n.type === Ne.BINARY_EVENT || n.type === Ne.BINARY_ACK) && (i += n.attachments + "-"), n.nsp && n.nsp !== "/" && (i += n.nsp + ","), n.id != null && (i += n.id), n.data != null && (i += JSON.stringify(n.data, this.replacer)), i; }
    encodeAsBinary(n) { const i = $v(n), c = this.encodeAsString(i.packet), u = i.buffers; return u.unshift(c), u; }
}
function mp(l) { return Object.prototype.toString.call(l) === "[object Object]"; }
class Eu extends st {
    constructor(n) { super(), this.reviver = n; }
    add(n) { let i; if (typeof n == "string") {
        if (this.reconstructor)
            throw new Error("got plaintext data when reconstructing a packet");
        i = this.decodeString(n);
        const c = i.type === Ne.BINARY_EVENT;
        c || i.type === Ne.BINARY_ACK ? (i.type = c ? Ne.EVENT : Ne.ACK, this.reconstructor = new tj(i), i.attachments === 0 && super.emitReserved("decoded", i)) : super.emitReserved("decoded", i);
    }
    else if (Tu(n) || n.base64)
        if (this.reconstructor)
            i = this.reconstructor.takeBinaryData(n), i && (this.reconstructor = null, super.emitReserved("decoded", i));
        else
            throw new Error("got binary data when not reconstructing a packet");
    else
        throw new Error("Unknown type: " + n); }
    decodeString(n) { let i = 0; const c = { type: Number(n.charAt(0)) }; if (Ne[c.type] === void 0)
        throw new Error("unknown packet type " + c.type); if (c.type === Ne.BINARY_EVENT || c.type === Ne.BINARY_ACK) {
        const m = i + 1;
        for (; n.charAt(++i) !== "-" && i != n.length;)
            ;
        const h = n.substring(m, i);
        if (h != Number(h) || n.charAt(i) !== "-")
            throw new Error("Illegal attachments");
        c.attachments = Number(h);
    } if (n.charAt(i + 1) === "/") {
        const m = i + 1;
        for (; ++i && !(n.charAt(i) === "," || i === n.length);)
            ;
        c.nsp = n.substring(m, i);
    }
    else
        c.nsp = "/"; const u = n.charAt(i + 1); if (u !== "" && Number(u) == u) {
        const m = i + 1;
        for (; ++i;) {
            const h = n.charAt(i);
            if (h == null || Number(h) != h) {
                --i;
                break;
            }
            if (i === n.length)
                break;
        }
        c.id = Number(n.substring(m, i + 1));
    } if (n.charAt(++i)) {
        const m = this.tryParse(n.substr(i));
        if (Eu.isPayloadValid(c.type, m))
            c.data = m;
        else
            throw new Error("invalid payload");
    } return c; }
    tryParse(n) { try {
        return JSON.parse(n, this.reviver);
    }
    catch {
        return !1;
    } }
    static isPayloadValid(n, i) { switch (n) {
        case Ne.CONNECT: return mp(i);
        case Ne.DISCONNECT: return i === void 0;
        case Ne.CONNECT_ERROR: return typeof i == "string" || mp(i);
        case Ne.EVENT:
        case Ne.BINARY_EVENT: return Array.isArray(i) && (typeof i[0] == "number" || typeof i[0] == "string" && Iv.indexOf(i[0]) === -1);
        case Ne.ACK:
        case Ne.BINARY_ACK: return Array.isArray(i);
    } }
    destroy() { this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null); }
}
class tj {
    constructor(n) { this.packet = n, this.buffers = [], this.reconPack = n; }
    takeBinaryData(n) { if (this.buffers.push(n), this.buffers.length === this.reconPack.attachments) {
        const i = Pv(this.reconPack, this.buffers);
        return this.finishedReconstruction(), i;
    } return null; }
    finishedReconstruction() { this.reconPack = null, this.buffers = []; }
}
const sj = Object.freeze(Object.defineProperty({ __proto__: null, Decoder: Eu, Encoder: ej, get PacketType() { return Ne; }, protocol: Wv }, Symbol.toStringTag, { value: "Module" }));
function is(l, n, i) { return l.on(n, i), function () { l.off(n, i); }; }
const aj = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
class cg extends st {
    constructor(n, i, c) { super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = n, this.nsp = i, c && c.auth && (this.auth = c.auth), this._opts = Object.assign({}, c), this.io._autoConnect && this.open(); }
    get disconnected() { return !this.connected; }
    subEvents() { if (this.subs)
        return; const n = this.io; this.subs = [is(n, "open", this.onopen.bind(this)), is(n, "packet", this.onpacket.bind(this)), is(n, "error", this.onerror.bind(this)), is(n, "close", this.onclose.bind(this))]; }
    get active() { return !!this.subs; }
    connect() { return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this); }
    open() { return this.connect(); }
    send(...n) { return n.unshift("message"), this.emit.apply(this, n), this; }
    emit(n, ...i) { var c, u, m; if (aj.hasOwnProperty(n))
        throw new Error('"' + n.toString() + '" is a reserved event name'); if (i.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
        return this._addToQueue(i), this; const h = { type: Ne.EVENT, data: i }; if (h.options = {}, h.options.compress = this.flags.compress !== !1, typeof i[i.length - 1] == "function") {
        const j = this.ids++, g = i.pop();
        this._registerAckCallback(j, g), h.id = j;
    } const f = (u = (c = this.io.engine) === null || c === void 0 ? void 0 : c.transport) === null || u === void 0 ? void 0 : u.writable, p = this.connected && !(!((m = this.io.engine) === null || m === void 0) && m._hasPingExpired()); return this.flags.volatile && !f || (p ? (this.notifyOutgoingListeners(h), this.packet(h)) : this.sendBuffer.push(h)), this.flags = {}, this; }
    _registerAckCallback(n, i) { var c; const u = (c = this.flags.timeout) !== null && c !== void 0 ? c : this._opts.ackTimeout; if (u === void 0) {
        this.acks[n] = i;
        return;
    } const m = this.io.setTimeoutFn(() => { delete this.acks[n]; for (let f = 0; f < this.sendBuffer.length; f++)
        this.sendBuffer[f].id === n && this.sendBuffer.splice(f, 1); i.call(this, new Error("operation has timed out")); }, u), h = (...f) => { this.io.clearTimeoutFn(m), i.apply(this, f); }; h.withError = !0, this.acks[n] = h; }
    emitWithAck(n, ...i) { return new Promise((c, u) => { const m = (h, f) => h ? u(h) : c(f); m.withError = !0, i.push(m), this.emit(n, ...i); }); }
    _addToQueue(n) { let i; typeof n[n.length - 1] == "function" && (i = n.pop()); const c = { id: this._queueSeq++, tryCount: 0, pending: !1, args: n, flags: Object.assign({ fromQueue: !0 }, this.flags) }; n.push((u, ...m) => c !== this._queue[0] ? void 0 : (u !== null ? c.tryCount > this._opts.retries && (this._queue.shift(), i && i(u)) : (this._queue.shift(), i && i(null, ...m)), c.pending = !1, this._drainQueue())), this._queue.push(c), this._drainQueue(); }
    _drainQueue(n = !1) { if (!this.connected || this._queue.length === 0)
        return; const i = this._queue[0]; i.pending && !n || (i.pending = !0, i.tryCount++, this.flags = i.flags, this.emit.apply(this, i.args)); }
    packet(n) { n.nsp = this.nsp, this.io._packet(n); }
    onopen() { typeof this.auth == "function" ? this.auth(n => { this._sendConnectPacket(n); }) : this._sendConnectPacket(this.auth); }
    _sendConnectPacket(n) { this.packet({ type: Ne.CONNECT, data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, n) : n }); }
    onerror(n) { this.connected || this.emitReserved("connect_error", n); }
    onclose(n, i) { this.connected = !1, delete this.id, this.emitReserved("disconnect", n, i), this._clearAcks(); }
    _clearAcks() { Object.keys(this.acks).forEach(n => { if (!this.sendBuffer.some(c => String(c.id) === n)) {
        const c = this.acks[n];
        delete this.acks[n], c.withError && c.call(this, new Error("socket has been disconnected"));
    } }); }
    onpacket(n) { if (n.nsp === this.nsp)
        switch (n.type) {
            case Ne.CONNECT:
                n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Ne.EVENT:
            case Ne.BINARY_EVENT:
                this.onevent(n);
                break;
            case Ne.ACK:
            case Ne.BINARY_ACK:
                this.onack(n);
                break;
            case Ne.DISCONNECT:
                this.ondisconnect();
                break;
            case Ne.CONNECT_ERROR:
                this.destroy();
                const c = new Error(n.data.message);
                c.data = n.data.data, this.emitReserved("connect_error", c);
                break;
        } }
    onevent(n) { const i = n.data || []; n.id != null && i.push(this.ack(n.id)), this.connected ? this.emitEvent(i) : this.receiveBuffer.push(Object.freeze(i)); }
    emitEvent(n) { if (this._anyListeners && this._anyListeners.length) {
        const i = this._anyListeners.slice();
        for (const c of i)
            c.apply(this, n);
    } super.emit.apply(this, n), this._pid && n.length && typeof n[n.length - 1] == "string" && (this._lastOffset = n[n.length - 1]); }
    ack(n) { const i = this; let c = !1; return function (...u) { c || (c = !0, i.packet({ type: Ne.ACK, id: n, data: u })); }; }
    onack(n) { const i = this.acks[n.id]; typeof i == "function" && (delete this.acks[n.id], i.withError && n.data.unshift(null), i.apply(this, n.data)); }
    onconnect(n, i) { this.id = n, this.recovered = i && this._pid === i, this._pid = i, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0); }
    emitBuffered() { this.receiveBuffer.forEach(n => this.emitEvent(n)), this.receiveBuffer = [], this.sendBuffer.forEach(n => { this.notifyOutgoingListeners(n), this.packet(n); }), this.sendBuffer = []; }
    ondisconnect() { this.destroy(), this.onclose("io server disconnect"); }
    destroy() { this.subs && (this.subs.forEach(n => n()), this.subs = void 0), this.io._destroy(this); }
    disconnect() { return this.connected && this.packet({ type: Ne.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this; }
    close() { return this.disconnect(); }
    compress(n) { return this.flags.compress = n, this; }
    get volatile() { return this.flags.volatile = !0, this; }
    timeout(n) { return this.flags.timeout = n, this; }
    onAny(n) { return this._anyListeners = this._anyListeners || [], this._anyListeners.push(n), this; }
    prependAny(n) { return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(n), this; }
    offAny(n) { if (!this._anyListeners)
        return this; if (n) {
        const i = this._anyListeners;
        for (let c = 0; c < i.length; c++)
            if (n === i[c])
                return i.splice(c, 1), this;
    }
    else
        this._anyListeners = []; return this; }
    listenersAny() { return this._anyListeners || []; }
    onAnyOutgoing(n) { return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(n), this; }
    prependAnyOutgoing(n) { return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(n), this; }
    offAnyOutgoing(n) { if (!this._anyOutgoingListeners)
        return this; if (n) {
        const i = this._anyOutgoingListeners;
        for (let c = 0; c < i.length; c++)
            if (n === i[c])
                return i.splice(c, 1), this;
    }
    else
        this._anyOutgoingListeners = []; return this; }
    listenersAnyOutgoing() { return this._anyOutgoingListeners || []; }
    notifyOutgoingListeners(n) { if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const i = this._anyOutgoingListeners.slice();
        for (const c of i)
            c.apply(this, n.data);
    } }
}
function Kl(l) { l = l || {}, this.ms = l.min || 100, this.max = l.max || 1e4, this.factor = l.factor || 2, this.jitter = l.jitter > 0 && l.jitter <= 1 ? l.jitter : 0, this.attempts = 0; }
Kl.prototype.duration = function () { var l = this.ms * Math.pow(this.factor, this.attempts++); if (this.jitter) {
    var n = Math.random(), i = Math.floor(n * this.jitter * l);
    l = (Math.floor(n * 10) & 1) == 0 ? l - i : l + i;
} return Math.min(l, this.max) | 0; };
Kl.prototype.reset = function () { this.attempts = 0; };
Kl.prototype.setMin = function (l) { this.ms = l; };
Kl.prototype.setMax = function (l) { this.max = l; };
Kl.prototype.setJitter = function (l) { this.jitter = l; };
class pu extends st {
    constructor(n, i) { var c; super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (i = n, n = void 0), i = i || {}, i.path = i.path || "/socket.io", this.opts = i, nc(this, i), this.reconnection(i.reconnection !== !1), this.reconnectionAttempts(i.reconnectionAttempts || 1 / 0), this.reconnectionDelay(i.reconnectionDelay || 1e3), this.reconnectionDelayMax(i.reconnectionDelayMax || 5e3), this.randomizationFactor((c = i.randomizationFactor) !== null && c !== void 0 ? c : .5), this.backoff = new Kl({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(i.timeout == null ? 2e4 : i.timeout), this._readyState = "closed", this.uri = n; const u = i.parser || sj; this.encoder = new u.Encoder, this.decoder = new u.Decoder, this._autoConnect = i.autoConnect !== !1, this._autoConnect && this.open(); }
    reconnection(n) { return arguments.length ? (this._reconnection = !!n, n || (this.skipReconnect = !0), this) : this._reconnection; }
    reconnectionAttempts(n) { return n === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = n, this); }
    reconnectionDelay(n) { var i; return n === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = n, (i = this.backoff) === null || i === void 0 || i.setMin(n), this); }
    randomizationFactor(n) { var i; return n === void 0 ? this._randomizationFactor : (this._randomizationFactor = n, (i = this.backoff) === null || i === void 0 || i.setJitter(n), this); }
    reconnectionDelayMax(n) { var i; return n === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = n, (i = this.backoff) === null || i === void 0 || i.setMax(n), this); }
    timeout(n) { return arguments.length ? (this._timeout = n, this) : this._timeout; }
    maybeReconnectOnOpen() { !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect(); }
    open(n) { if (~this._readyState.indexOf("open"))
        return this; this.engine = new Kv(this.uri, this.opts); const i = this.engine, c = this; this._readyState = "opening", this.skipReconnect = !1; const u = is(i, "open", function () { c.onopen(), n && n(); }), m = f => { this.cleanup(), this._readyState = "closed", this.emitReserved("error", f), n ? n(f) : this.maybeReconnectOnOpen(); }, h = is(i, "error", m); if (this._timeout !== !1) {
        const f = this._timeout, p = this.setTimeoutFn(() => { u(), m(new Error("timeout")), i.close(); }, f);
        this.opts.autoUnref && p.unref(), this.subs.push(() => { this.clearTimeoutFn(p); });
    } return this.subs.push(u), this.subs.push(h), this; }
    connect(n) { return this.open(n); }
    onopen() { this.cleanup(), this._readyState = "open", this.emitReserved("open"); const n = this.engine; this.subs.push(is(n, "ping", this.onping.bind(this)), is(n, "data", this.ondata.bind(this)), is(n, "error", this.onerror.bind(this)), is(n, "close", this.onclose.bind(this)), is(this.decoder, "decoded", this.ondecoded.bind(this))); }
    onping() { this.emitReserved("ping"); }
    ondata(n) { try {
        this.decoder.add(n);
    }
    catch (i) {
        this.onclose("parse error", i);
    } }
    ondecoded(n) { lc(() => { this.emitReserved("packet", n); }, this.setTimeoutFn); }
    onerror(n) { this.emitReserved("error", n); }
    socket(n, i) { let c = this.nsps[n]; return c ? this._autoConnect && !c.active && c.connect() : (c = new cg(this, n, i), this.nsps[n] = c), c; }
    _destroy(n) { const i = Object.keys(this.nsps); for (const c of i)
        if (this.nsps[c].active)
            return; this._close(); }
    _packet(n) { const i = this.encoder.encode(n); for (let c = 0; c < i.length; c++)
        this.engine.write(i[c], n.options); }
    cleanup() { this.subs.forEach(n => n()), this.subs.length = 0, this.decoder.destroy(); }
    _close() { this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"); }
    disconnect() { return this._close(); }
    onclose(n, i) { var c; this.cleanup(), (c = this.engine) === null || c === void 0 || c.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", n, i), this._reconnection && !this.skipReconnect && this.reconnect(); }
    reconnect() { if (this._reconnecting || this.skipReconnect)
        return this; const n = this; if (this.backoff.attempts >= this._reconnectionAttempts)
        this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
        const i = this.backoff.duration();
        this._reconnecting = !0;
        const c = this.setTimeoutFn(() => { n.skipReconnect || (this.emitReserved("reconnect_attempt", n.backoff.attempts), !n.skipReconnect && n.open(u => { u ? (n._reconnecting = !1, n.reconnect(), this.emitReserved("reconnect_error", u)) : n.onreconnect(); })); }, i);
        this.opts.autoUnref && c.unref(), this.subs.push(() => { this.clearTimeoutFn(c); });
    } }
    onreconnect() { const n = this.backoff.attempts; this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", n); }
}
const Zn = {};
function Qi(l, n) { typeof l == "object" && (n = l, l = void 0), n = n || {}; const i = Yv(l, n.path || "/socket.io"), c = i.source, u = i.id, m = i.path, h = Zn[u] && m in Zn[u].nsps, f = n.forceNew || n["force new connection"] || n.multiplex === !1 || h; let p; return f ? p = new pu(c, n) : (Zn[u] || (Zn[u] = new pu(c, n)), p = Zn[u]), i.query && !n.query && (n.query = i.queryKey), p.socket(i.path, n); }
Object.assign(Qi, { Manager: pu, Socket: cg, io: Qi, connect: Qi });
const hp = l => { let n; const i = new Set, c = (v, j) => { const g = typeof v == "function" ? v(n) : v; if (!Object.is(g, n)) {
    const b = n;
    n = j ?? (typeof g != "object" || g === null) ? g : Object.assign({}, n, g), i.forEach(N => N(n, b));
} }, u = () => n, f = { setState: c, getState: u, getInitialState: () => p, subscribe: v => (i.add(v), () => i.delete(v)) }, p = n = l(c, u, f); return f; }, lj = (l => l ? hp(l) : hp), nj = l => l;
function rj(l, n = nj) { const i = $n.useSyncExternalStore(l.subscribe, $n.useCallback(() => n(l.getState()), [l, n]), $n.useCallback(() => n(l.getInitialState()), [l, n])); return $n.useDebugValue(i), i; }
const fp = l => { const n = lj(l), i = c => rj(n, c); return Object.assign(i, n), i; }, og = (l => l ? fp(l) : fp);
function ij(l, n) { let i; try {
    i = l();
}
catch {
    return;
} return { getItem: u => { var m; const h = p => p === null ? null : JSON.parse(p, void 0), f = (m = i.getItem(u)) != null ? m : null; return f instanceof Promise ? f.then(h) : h(f); }, setItem: (u, m) => i.setItem(u, JSON.stringify(m, void 0)), removeItem: u => i.removeItem(u) }; }
const gu = l => n => { try {
    const i = l(n);
    return i instanceof Promise ? i : { then(c) { return gu(c)(i); }, catch(c) { return this; } };
}
catch (i) {
    return { then(c) { return this; }, catch(c) { return gu(c)(i); } };
} }, cj = (l, n) => (i, c, u) => { let m = { storage: ij(() => localStorage), partialize: w => w, version: 0, merge: (w, C) => ({ ...C, ...w }), ...n }, h = !1; const f = new Set, p = new Set; let v = m.storage; if (!v)
    return l((...w) => { console.warn(`[zustand persist middleware] Unable to update item '${m.name}', the given storage is currently unavailable.`), i(...w); }, c, u); const j = () => { const w = m.partialize({ ...c() }); return v.setItem(m.name, { state: w, version: m.version }); }, g = u.setState; u.setState = (w, C) => (g(w, C), j()); const b = l((...w) => (i(...w), j()), c, u); u.getInitialState = () => b; let N; const S = () => { var w, C; if (!v)
    return; h = !1, f.forEach(D => { var O; return D((O = c()) != null ? O : b); }); const T = ((C = m.onRehydrateStorage) == null ? void 0 : C.call(m, (w = c()) != null ? w : b)) || void 0; return gu(v.getItem.bind(v))(m.name).then(D => { if (D)
    if (typeof D.version == "number" && D.version !== m.version) {
        if (m.migrate) {
            const O = m.migrate(D.state, D.version);
            return O instanceof Promise ? O.then(F => [!0, F]) : [!0, O];
        }
        console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
    }
    else
        return [!1, D.state]; return [!1, void 0]; }).then(D => { var O; const [F, _] = D; if (N = m.merge(_, (O = c()) != null ? O : b), i(N, !0), F)
    return j(); }).then(() => { T == null || T(N, void 0), N = c(), h = !0, p.forEach(D => D(N)); }).catch(D => { T == null || T(void 0, D); }); }; return u.persist = { setOptions: w => { m = { ...m, ...w }, w.storage && (v = w.storage); }, clearStorage: () => { v == null || v.removeItem(m.name); }, getOptions: () => m, rehydrate: () => S(), hasHydrated: () => h, onHydrate: w => (f.add(w), () => { f.delete(w); }), onFinishHydration: w => (p.add(w), () => { p.delete(w); }) }, m.skipHydration || S(), N || b; }, oj = cj, bs = og()(oj(l => ({ user: null, token: null, isAuthenticated: !1, _hasHydrated: !1, login: (n, i) => l({ user: n, token: i, isAuthenticated: !0 }), logout: () => l({ user: null, token: null, isAuthenticated: !1 }), updateUser: n => l(i => ({ user: i.user ? { ...i.user, ...n } : null })), setHasHydrated: n => l({ _hasHydrated: n }) }), { name: "solaria-auth", partialize: l => ({ user: l.user, token: l.token, isAuthenticated: l.isAuthenticated }), onRehydrateStorage: () => l => { l == null || l.setHasHydrated(!0); } })), dg = M.createContext(null), dj = "";
function uj({ children: l }) { const n = M.useRef(null), [i, c] = M.useState(!1), u = bs(j => j.token), m = bs(j => j.isAuthenticated), h = bt(); M.useEffect(() => { if (!m || !u) {
    n.current && (n.current.disconnect(), n.current = null, c(!1));
    return;
} n.current = Qi(dj, { auth: { token: u }, reconnection: !0, reconnectionAttempts: 5, reconnectionDelay: 1e3, reconnectionDelayMax: 5e3 }); const j = n.current; return j.on("connect", () => { console.log("[Socket] Connected:", j.id), c(!0); }), j.on("disconnect", g => { console.log("[Socket] Disconnected:", g), c(!1); }), j.on("connect_error", g => { console.error("[Socket] Connection error:", g.message), c(!1); }), j.on("agent:status", g => { h.invalidateQueries({ queryKey: ["agents"] }), g != null && g.agentId && h.invalidateQueries({ queryKey: ["agents", g.agentId] }); }), j.on("task:updated", g => { h.invalidateQueries({ queryKey: ["tasks"] }), h.invalidateQueries({ queryKey: ["dashboard"] }), g != null && g.taskId && h.invalidateQueries({ queryKey: ["tasks", g.taskId] }), g != null && g.projectId && (h.invalidateQueries({ queryKey: ["projects", g.projectId, "tasks"] }), h.invalidateQueries({ queryKey: ["projects", g.projectId] })); }), j.on("task:created", g => { h.invalidateQueries({ queryKey: ["tasks"] }), h.invalidateQueries({ queryKey: ["dashboard"] }), g != null && g.projectId && h.invalidateQueries({ queryKey: ["projects", g.projectId, "tasks"] }); }), j.on("task:completed", g => { h.invalidateQueries({ queryKey: ["tasks"] }), h.invalidateQueries({ queryKey: ["dashboard"] }), g != null && g.taskId && h.invalidateQueries({ queryKey: ["tasks", g.taskId] }), g != null && g.projectId && (h.invalidateQueries({ queryKey: ["projects", g.projectId, "tasks"] }), h.invalidateQueries({ queryKey: ["projects", g.projectId] })); }), j.on("task:deleted", g => { h.invalidateQueries({ queryKey: ["tasks"] }), g != null && g.projectId && h.invalidateQueries({ queryKey: ["projects", g.projectId, "tasks"] }); }), j.on("project:updated", g => { h.invalidateQueries({ queryKey: ["projects"] }), h.invalidateQueries({ queryKey: ["dashboard"] }), g != null && g.projectId && h.invalidateQueries({ queryKey: ["projects", g.projectId] }); }), j.on("project:progress", g => { g != null && g.projectId && (h.invalidateQueries({ queryKey: ["projects", g.projectId] }), h.invalidateQueries({ queryKey: ["projects"] })); }), j.on("memory:created", () => { h.invalidateQueries({ queryKey: ["memories"] }); }), j.on("memory:updated", g => { h.invalidateQueries({ queryKey: ["memories"] }), g != null && g.memoryId && h.invalidateQueries({ queryKey: ["memories", g.memoryId] }); }), j.on("alert:critical", () => { h.invalidateQueries({ queryKey: ["dashboard", "alerts"] }), h.invalidateQueries({ queryKey: ["dashboard"] }); }), j.on("taskItem:completed", g => { g != null && g.taskId && (h.invalidateQueries({ queryKey: ["tasks", g.taskId, "items"] }), h.invalidateQueries({ queryKey: ["tasks", g.taskId] }), h.invalidateQueries({ queryKey: ["tasks"] })); }), j.on("taskItem:created", g => { g != null && g.taskId && (h.invalidateQueries({ queryKey: ["tasks", g.taskId, "items"] }), h.invalidateQueries({ queryKey: ["tasks", g.taskId] })); }), j.on("taskItem:updated", g => { g != null && g.taskId && (h.invalidateQueries({ queryKey: ["tasks", g.taskId, "items"] }), h.invalidateQueries({ queryKey: ["tasks", g.taskId] })); }), j.on("activity:new", () => { h.invalidateQueries({ queryKey: ["activity"] }); }), () => { j.disconnect(), n.current = null; }; }, [m, u, h]); const f = M.useCallback((j, g) => { var b; (b = n.current) != null && b.connected && n.current.emit(j, g); }, []), p = M.useCallback((j, g) => { var b; return (b = n.current) == null || b.on(j, g), () => { var N; (N = n.current) == null || N.off(j, g); }; }, []), v = M.useCallback((j, g) => { var b, N; g ? (b = n.current) == null || b.off(j, g) : (N = n.current) == null || N.removeAllListeners(j); }, []); return t.jsx(dg.Provider, { value: { socket: n.current, isConnected: i, emit: f, on: p, off: v }, children: l }); }
function ug() { const l = M.useContext(dg); if (!l)
    throw new Error("useSocketContext must be used within a SocketProvider"); return l; }
const mg = M.createContext(null), mj = 50;
function hj(l, n) { const c = { "task:created": () => ({ type: "task", action: "created", title: "Nueva tarea creada", message: n.title ? `Tarea: ${n.title}` : `Proyecto #${n.projectId}` }), "task:updated": () => ({ type: "task", action: "updated", title: "Tarea actualizada", message: n.title ? `${n.title}` : `Tarea #${n.taskId}` }), "task:completed": () => ({ type: "task", action: "completed", title: "Tarea completada", message: n.title ? `${n.title}` : `Tarea #${n.taskId}` }), "task:deleted": () => ({ type: "task", action: "deleted", title: "Tarea eliminada", message: "Tarea removida del proyecto" }), "project:created": () => ({ type: "project", action: "created", title: "Nuevo proyecto", message: n.name ? `${n.name}` : "Proyecto creado" }), "project:updated": () => ({ type: "project", action: "updated", title: "Proyecto actualizado", message: n.name ? `${n.name}` : `Proyecto #${n.projectId}` }), "project:deleted": () => ({ type: "project", action: "deleted", title: "Proyecto eliminado", message: n.name ? `${n.name}` : "Proyecto removido" }), "project:progress": () => ({ type: "project", action: "updated", title: "Progreso actualizado", message: n.progress !== void 0 ? `Nuevo progreso: ${n.progress}%` : "Progreso modificado" }), "agent:status": () => ({ type: "agent", action: "status", title: "Estado de agente", message: n.status ? `${n.agentName || "Agente"}: ${n.status}` : "Estado actualizado" }), "memory:created": () => ({ type: "memory", action: "created", title: "Nueva memoria", message: n.content ? `${String(n.content).substring(0, 50)}...` : "Memoria registrada" }), "memory:updated": () => ({ type: "memory", action: "updated", title: "Memoria actualizada", message: `Memoria #${n.memoryId} modificada` }), "alert:critical": () => ({ type: "alert", action: "info", title: "Alerta crítica", message: typeof n.message == "string" ? n.message : "Se requiere atención inmediata" }), "taskItem:completed": () => ({ type: "task", action: "completed", title: "Subtarea completada", message: n.title ? `${n.title}` : `En tarea #${n.taskId}` }), "taskItem:created": () => ({ type: "task", action: "created", title: "Subtarea agregada", message: `Nueva subtarea en tarea #${n.taskId}` }), "activity:new": () => ({ type: "system", action: "info", title: "Nueva actividad", message: typeof n.description == "string" ? n.description : "Actividad registrada" }) }[l]; return c ? c() : { type: "system", action: "info", title: l.replace(":", " ").replace(/([A-Z])/g, " $1").trim(), message: JSON.stringify(n).substring(0, 100) }; }
function fj({ children: l }) { const { on: n, isConnected: i } = ug(), [c, u] = M.useState([]), m = M.useCallback(g => { const b = { ...g, id: crypto.randomUUID(), timestamp: new Date, read: !1 }; u(N => [b, ...N].slice(0, mj)); }, []), h = M.useCallback(g => { u(b => b.map(N => N.id === g ? { ...N, read: !0 } : N)); }, []), f = M.useCallback(() => { u(g => g.map(b => ({ ...b, read: !0 }))); }, []), p = M.useCallback(() => { u([]); }, []), v = M.useCallback(g => { u(b => b.filter(N => N.id !== g)); }, []); M.useEffect(() => { if (!i)
    return; const g = ["task:created", "task:updated", "task:completed", "task:deleted", "project:created", "project:updated", "project:deleted", "project:progress", "agent:status", "memory:created", "memory:updated", "alert:critical", "taskItem:completed", "taskItem:created", "activity:new"], b = []; return g.forEach(N => { const S = n(N, w => { const C = w || {}, T = hj(N, C); m({ ...T, data: C }); }); b.push(S); }), () => { b.forEach(N => N()); }; }, [n, i, m]); const j = c.filter(g => !g.read).length; return t.jsx(mg.Provider, { value: { notifications: c, unreadCount: j, addNotification: m, markAsRead: h, markAllAsRead: f, clearAll: p, dismissNotification: v }, children: l }); }
function xj() { const l = M.useContext(mg); if (!l)
    throw new Error("useNotifications must be used within a NotificationProvider"); return l; }
function hg(l, n) { return function () { return l.apply(n, arguments); }; }
const { toString: pj } = Object.prototype, { getPrototypeOf: Mu } = Object, { iterator: rc, toStringTag: fg } = Symbol, ic = (l => n => { const i = pj.call(n); return l[i] || (l[i] = i.slice(8, -1).toLowerCase()); })(Object.create(null)), cs = l => (l = l.toLowerCase(), n => ic(n) === l), cc = l => n => typeof n === l, { isArray: Yl } = Array, Gl = cc("undefined");
function nr(l) { return l !== null && !Gl(l) && l.constructor !== null && !Gl(l.constructor) && Tt(l.constructor.isBuffer) && l.constructor.isBuffer(l); }
const xg = cs("ArrayBuffer");
function gj(l) { let n; return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(l) : n = l && l.buffer && xg(l.buffer), n; }
const bj = cc("string"), Tt = cc("function"), pg = cc("number"), rr = l => l !== null && typeof l == "object", yj = l => l === !0 || l === !1, Ki = l => { if (ic(l) !== "object")
    return !1; const n = Mu(l); return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(fg in l) && !(rc in l); }, vj = l => { if (!rr(l) || nr(l))
    return !1; try {
    return Object.keys(l).length === 0 && Object.getPrototypeOf(l) === Object.prototype;
}
catch {
    return !1;
} }, jj = cs("Date"), Nj = cs("File"), wj = cs("Blob"), Sj = cs("FileList"), kj = l => rr(l) && Tt(l.pipe), Cj = l => { let n; return l && (typeof FormData == "function" && l instanceof FormData || Tt(l.append) && ((n = ic(l)) === "formdata" || n === "object" && Tt(l.toString) && l.toString() === "[object FormData]")); }, Aj = cs("URLSearchParams"), [Tj, Ej, Mj, Dj] = ["ReadableStream", "Request", "Response", "Headers"].map(cs), _j = l => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ir(l, n, { allOwnKeys: i = !1 } = {}) { if (l === null || typeof l > "u")
    return; let c, u; if (typeof l != "object" && (l = [l]), Yl(l))
    for (c = 0, u = l.length; c < u; c++)
        n.call(null, l[c], c, l);
else {
    if (nr(l))
        return;
    const m = i ? Object.getOwnPropertyNames(l) : Object.keys(l), h = m.length;
    let f;
    for (c = 0; c < h; c++)
        f = m[c], n.call(null, l[f], f, l);
} }
function gg(l, n) { if (nr(l))
    return null; n = n.toLowerCase(); const i = Object.keys(l); let c = i.length, u; for (; c-- > 0;)
    if (u = i[c], n === u.toLowerCase())
        return u; return null; }
const Xa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, bg = l => !Gl(l) && l !== Xa;
function bu() { const { caseless: l, skipUndefined: n } = bg(this) && this || {}, i = {}, c = (u, m) => { const h = l && gg(i, m) || m; Ki(i[h]) && Ki(u) ? i[h] = bu(i[h], u) : Ki(u) ? i[h] = bu({}, u) : Yl(u) ? i[h] = u.slice() : (!n || !Gl(u)) && (i[h] = u); }; for (let u = 0, m = arguments.length; u < m; u++)
    arguments[u] && ir(arguments[u], c); return i; }
const Oj = (l, n, i, { allOwnKeys: c } = {}) => (ir(n, (u, m) => { i && Tt(u) ? l[m] = hg(u, i) : l[m] = u; }, { allOwnKeys: c }), l), zj = l => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), Rj = (l, n, i, c) => { l.prototype = Object.create(n.prototype, c), l.prototype.constructor = l, Object.defineProperty(l, "super", { value: n.prototype }), i && Object.assign(l.prototype, i); }, Bj = (l, n, i, c) => { let u, m, h; const f = {}; if (n = n || {}, l == null)
    return n; do {
    for (u = Object.getOwnPropertyNames(l), m = u.length; m-- > 0;)
        h = u[m], (!c || c(h, l, n)) && !f[h] && (n[h] = l[h], f[h] = !0);
    l = i !== !1 && Mu(l);
} while (l && (!i || i(l, n)) && l !== Object.prototype); return n; }, qj = (l, n, i) => { l = String(l), (i === void 0 || i > l.length) && (i = l.length), i -= n.length; const c = l.indexOf(n, i); return c !== -1 && c === i; }, Uj = l => { if (!l)
    return null; if (Yl(l))
    return l; let n = l.length; if (!pg(n))
    return null; const i = new Array(n); for (; n-- > 0;)
    i[n] = l[n]; return i; }, Lj = (l => n => l && n instanceof l)(typeof Uint8Array < "u" && Mu(Uint8Array)), Hj = (l, n) => { const c = (l && l[rc]).call(l); let u; for (; (u = c.next()) && !u.done;) {
    const m = u.value;
    n.call(l, m[0], m[1]);
} }, Vj = (l, n) => { let i; const c = []; for (; (i = l.exec(n)) !== null;)
    c.push(i); return c; }, Gj = cs("HTMLFormElement"), Qj = l => l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, c, u) { return c.toUpperCase() + u; }), xp = (({ hasOwnProperty: l }) => (n, i) => l.call(n, i))(Object.prototype), Kj = cs("RegExp"), yg = (l, n) => { const i = Object.getOwnPropertyDescriptors(l), c = {}; ir(i, (u, m) => { let h; (h = n(u, m, l)) !== !1 && (c[m] = h || u); }), Object.defineProperties(l, c); }, Yj = l => { yg(l, (n, i) => { if (Tt(l) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
    return !1; const c = l[i]; if (Tt(c)) {
    if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
    }
    n.set || (n.set = () => { throw Error("Can not rewrite read-only method '" + i + "'"); });
} }); }, Xj = (l, n) => { const i = {}, c = u => { u.forEach(m => { i[m] = !0; }); }; return Yl(l) ? c(l) : c(String(l).split(n)), i; }, Zj = () => { }, Fj = (l, n) => l != null && Number.isFinite(l = +l) ? l : n;
function Jj(l) { return !!(l && Tt(l.append) && l[fg] === "FormData" && l[rc]); }
const $j = l => { const n = new Array(10), i = (c, u) => { if (rr(c)) {
    if (n.indexOf(c) >= 0)
        return;
    if (nr(c))
        return c;
    if (!("toJSON" in c)) {
        n[u] = c;
        const m = Yl(c) ? [] : {};
        return ir(c, (h, f) => { const p = i(h, u + 1); !Gl(p) && (m[f] = p); }), n[u] = void 0, m;
    }
} return c; }; return i(l, 0); }, Pj = cs("AsyncFunction"), Ij = l => l && (rr(l) || Tt(l)) && Tt(l.then) && Tt(l.catch), vg = ((l, n) => l ? setImmediate : n ? ((i, c) => (Xa.addEventListener("message", ({ source: u, data: m }) => { u === Xa && m === i && c.length && c.shift()(); }, !1), u => { c.push(u), Xa.postMessage(i, "*"); }))(`axios@${Math.random()}`, []) : i => setTimeout(i))(typeof setImmediate == "function", Tt(Xa.postMessage)), Wj = typeof queueMicrotask < "u" ? queueMicrotask.bind(Xa) : typeof process < "u" && process.nextTick || vg, e1 = l => l != null && Tt(l[rc]), L = { isArray: Yl, isArrayBuffer: xg, isBuffer: nr, isFormData: Cj, isArrayBufferView: gj, isString: bj, isNumber: pg, isBoolean: yj, isObject: rr, isPlainObject: Ki, isEmptyObject: vj, isReadableStream: Tj, isRequest: Ej, isResponse: Mj, isHeaders: Dj, isUndefined: Gl, isDate: jj, isFile: Nj, isBlob: wj, isRegExp: Kj, isFunction: Tt, isStream: kj, isURLSearchParams: Aj, isTypedArray: Lj, isFileList: Sj, forEach: ir, merge: bu, extend: Oj, trim: _j, stripBOM: zj, inherits: Rj, toFlatObject: Bj, kindOf: ic, kindOfTest: cs, endsWith: qj, toArray: Uj, forEachEntry: Hj, matchAll: Vj, isHTMLForm: Gj, hasOwnProperty: xp, hasOwnProp: xp, reduceDescriptors: yg, freezeMethods: Yj, toObjectSet: Xj, toCamelCase: Qj, noop: Zj, toFiniteNumber: Fj, findKey: gg, global: Xa, isContextDefined: bg, isSpecCompliantForm: Jj, toJSONObject: $j, isAsyncFn: Pj, isThenable: Ij, setImmediate: vg, asap: Wj, isIterable: e1 };
function ue(l, n, i, c, u) { Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", n && (this.code = n), i && (this.config = i), c && (this.request = c), u && (this.response = u, this.status = u.status ? u.status : null); }
L.inherits(ue, Error, { toJSON: function () { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: L.toJSONObject(this.config), code: this.code, status: this.status }; } });
const jg = ue.prototype, Ng = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(l => { Ng[l] = { value: l }; });
Object.defineProperties(ue, Ng);
Object.defineProperty(jg, "isAxiosError", { value: !0 });
ue.from = (l, n, i, c, u, m) => { const h = Object.create(jg); L.toFlatObject(l, h, function (j) { return j !== Error.prototype; }, v => v !== "isAxiosError"); const f = l && l.message ? l.message : "Error", p = n == null && l ? l.code : n; return ue.call(h, f, p, i, c, u), l && h.cause == null && Object.defineProperty(h, "cause", { value: l, configurable: !0 }), h.name = l && l.name || "Error", m && Object.assign(h, m), h; };
const t1 = null;
function yu(l) { return L.isPlainObject(l) || L.isArray(l); }
function wg(l) { return L.endsWith(l, "[]") ? l.slice(0, -2) : l; }
function pp(l, n, i) { return l ? l.concat(n).map(function (u, m) { return u = wg(u), !i && m ? "[" + u + "]" : u; }).join(i ? "." : "") : n; }
function s1(l) { return L.isArray(l) && !l.some(yu); }
const a1 = L.toFlatObject(L, {}, null, function (n) { return /^is[A-Z]/.test(n); });
function oc(l, n, i) { if (!L.isObject(l))
    throw new TypeError("target must be an object"); n = n || new FormData, i = L.toFlatObject(i, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (w, C) { return !L.isUndefined(C[w]); }); const c = i.metaTokens, u = i.visitor || j, m = i.dots, h = i.indexes, p = (i.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(n); if (!L.isFunction(u))
    throw new TypeError("visitor must be a function"); function v(S) { if (S === null)
    return ""; if (L.isDate(S))
    return S.toISOString(); if (L.isBoolean(S))
    return S.toString(); if (!p && L.isBlob(S))
    throw new ue("Blob is not supported. Use a Buffer instead."); return L.isArrayBuffer(S) || L.isTypedArray(S) ? p && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S; } function j(S, w, C) { let T = S; if (S && !C && typeof S == "object") {
    if (L.endsWith(w, "{}"))
        w = c ? w : w.slice(0, -2), S = JSON.stringify(S);
    else if (L.isArray(S) && s1(S) || (L.isFileList(S) || L.endsWith(w, "[]")) && (T = L.toArray(S)))
        return w = wg(w), T.forEach(function (O, F) { !(L.isUndefined(O) || O === null) && n.append(h === !0 ? pp([w], F, m) : h === null ? w : w + "[]", v(O)); }), !1;
} return yu(S) ? !0 : (n.append(pp(C, w, m), v(S)), !1); } const g = [], b = Object.assign(a1, { defaultVisitor: j, convertValue: v, isVisitable: yu }); function N(S, w) { if (!L.isUndefined(S)) {
    if (g.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
    g.push(S), L.forEach(S, function (T, D) { (!(L.isUndefined(T) || T === null) && u.call(n, T, L.isString(D) ? D.trim() : D, w, b)) === !0 && N(T, w ? w.concat(D) : [D]); }), g.pop();
} } if (!L.isObject(l))
    throw new TypeError("data must be an object"); return N(l), n; }
function gp(l) { const n = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" }; return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g, function (c) { return n[c]; }); }
function Du(l, n) { this._pairs = [], l && oc(l, this, n); }
const Sg = Du.prototype;
Sg.append = function (n, i) { this._pairs.push([n, i]); };
Sg.toString = function (n) { const i = n ? function (c) { return n.call(this, c, gp); } : gp; return this._pairs.map(function (u) { return i(u[0]) + "=" + i(u[1]); }, "").join("&"); };
function l1(l) { return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+"); }
function kg(l, n, i) { if (!n)
    return l; const c = i && i.encode || l1; L.isFunction(i) && (i = { serialize: i }); const u = i && i.serialize; let m; if (u ? m = u(n, i) : m = L.isURLSearchParams(n) ? n.toString() : new Du(n, i).toString(c), m) {
    const h = l.indexOf("#");
    h !== -1 && (l = l.slice(0, h)), l += (l.indexOf("?") === -1 ? "?" : "&") + m;
} return l; }
class bp {
    constructor() { this.handlers = []; }
    use(n, i, c) { return this.handlers.push({ fulfilled: n, rejected: i, synchronous: c ? c.synchronous : !1, runWhen: c ? c.runWhen : null }), this.handlers.length - 1; }
    eject(n) { this.handlers[n] && (this.handlers[n] = null); }
    clear() { this.handlers && (this.handlers = []); }
    forEach(n) { L.forEach(this.handlers, function (c) { c !== null && n(c); }); }
}
const Cg = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, n1 = typeof URLSearchParams < "u" ? URLSearchParams : Du, r1 = typeof FormData < "u" ? FormData : null, i1 = typeof Blob < "u" ? Blob : null, c1 = { isBrowser: !0, classes: { URLSearchParams: n1, FormData: r1, Blob: i1 }, protocols: ["http", "https", "file", "blob", "url", "data"] }, _u = typeof window < "u" && typeof document < "u", vu = typeof navigator == "object" && navigator || void 0, o1 = _u && (!vu || ["ReactNative", "NativeScript", "NS"].indexOf(vu.product) < 0), d1 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", u1 = _u && window.location.href || "http://localhost", m1 = Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: _u, hasStandardBrowserEnv: o1, hasStandardBrowserWebWorkerEnv: d1, navigator: vu, origin: u1 }, Symbol.toStringTag, { value: "Module" })), xt = { ...m1, ...c1 };
function h1(l, n) { return oc(l, new xt.classes.URLSearchParams, { visitor: function (i, c, u, m) { return xt.isNode && L.isBuffer(i) ? (this.append(c, i.toString("base64")), !1) : m.defaultVisitor.apply(this, arguments); }, ...n }); }
function f1(l) { return L.matchAll(/\w+|\[(\w*)]/g, l).map(n => n[0] === "[]" ? "" : n[1] || n[0]); }
function x1(l) { const n = {}, i = Object.keys(l); let c; const u = i.length; let m; for (c = 0; c < u; c++)
    m = i[c], n[m] = l[m]; return n; }
function Ag(l) { function n(i, c, u, m) { let h = i[m++]; if (h === "__proto__")
    return !0; const f = Number.isFinite(+h), p = m >= i.length; return h = !h && L.isArray(u) ? u.length : h, p ? (L.hasOwnProp(u, h) ? u[h] = [u[h], c] : u[h] = c, !f) : ((!u[h] || !L.isObject(u[h])) && (u[h] = []), n(i, c, u[h], m) && L.isArray(u[h]) && (u[h] = x1(u[h])), !f); } if (L.isFormData(l) && L.isFunction(l.entries)) {
    const i = {};
    return L.forEachEntry(l, (c, u) => { n(f1(c), u, i, 0); }), i;
} return null; }
function p1(l, n, i) { if (L.isString(l))
    try {
        return (n || JSON.parse)(l), L.trim(l);
    }
    catch (c) {
        if (c.name !== "SyntaxError")
            throw c;
    } return (i || JSON.stringify)(l); }
const cr = { transitional: Cg, adapter: ["xhr", "http", "fetch"], transformRequest: [function (n, i) { const c = i.getContentType() || "", u = c.indexOf("application/json") > -1, m = L.isObject(n); if (m && L.isHTMLForm(n) && (n = new FormData(n)), L.isFormData(n))
            return u ? JSON.stringify(Ag(n)) : n; if (L.isArrayBuffer(n) || L.isBuffer(n) || L.isStream(n) || L.isFile(n) || L.isBlob(n) || L.isReadableStream(n))
            return n; if (L.isArrayBufferView(n))
            return n.buffer; if (L.isURLSearchParams(n))
            return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString(); let f; if (m) {
            if (c.indexOf("application/x-www-form-urlencoded") > -1)
                return h1(n, this.formSerializer).toString();
            if ((f = L.isFileList(n)) || c.indexOf("multipart/form-data") > -1) {
                const p = this.env && this.env.FormData;
                return oc(f ? { "files[]": n } : n, p && new p, this.formSerializer);
            }
        } return m || u ? (i.setContentType("application/json", !1), p1(n)) : n; }], transformResponse: [function (n) { const i = this.transitional || cr.transitional, c = i && i.forcedJSONParsing, u = this.responseType === "json"; if (L.isResponse(n) || L.isReadableStream(n))
            return n; if (n && L.isString(n) && (c && !this.responseType || u)) {
            const h = !(i && i.silentJSONParsing) && u;
            try {
                return JSON.parse(n, this.parseReviver);
            }
            catch (f) {
                if (h)
                    throw f.name === "SyntaxError" ? ue.from(f, ue.ERR_BAD_RESPONSE, this, null, this.response) : f;
            }
        } return n; }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: xt.classes.FormData, Blob: xt.classes.Blob }, validateStatus: function (n) { return n >= 200 && n < 300; }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
L.forEach(["delete", "get", "head", "post", "put", "patch"], l => { cr.headers[l] = {}; });
const g1 = L.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), b1 = l => {
    const n = {};
    let i, c, u;
    return l && l.split(`
`).forEach(function (h) { u = h.indexOf(":"), i = h.substring(0, u).trim().toLowerCase(), c = h.substring(u + 1).trim(), !(!i || n[i] && g1[i]) && (i === "set-cookie" ? n[i] ? n[i].push(c) : n[i] = [c] : n[i] = n[i] ? n[i] + ", " + c : c); }), n;
}, yp = Symbol("internals");
function Fn(l) { return l && String(l).trim().toLowerCase(); }
function Yi(l) { return l === !1 || l == null ? l : L.isArray(l) ? l.map(Yi) : String(l); }
function y1(l) { const n = Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; let c; for (; c = i.exec(l);)
    n[c[1]] = c[2]; return n; }
const v1 = l => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function Id(l, n, i, c, u) { if (L.isFunction(c))
    return c.call(this, n, i); if (u && (n = i), !!L.isString(n)) {
    if (L.isString(c))
        return n.indexOf(c) !== -1;
    if (L.isRegExp(c))
        return c.test(n);
} }
function j1(l) { return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, i, c) => i.toUpperCase() + c); }
function N1(l, n) { const i = L.toCamelCase(" " + n); ["get", "set", "has"].forEach(c => { Object.defineProperty(l, c + i, { value: function (u, m, h) { return this[c].call(this, n, u, m, h); }, configurable: !0 }); }); }
let Et = class {
    constructor(n) { n && this.set(n); }
    set(n, i, c) { const u = this; function m(f, p, v) { const j = Fn(p); if (!j)
        throw new Error("header name must be a non-empty string"); const g = L.findKey(u, j); (!g || u[g] === void 0 || v === !0 || v === void 0 && u[g] !== !1) && (u[g || p] = Yi(f)); } const h = (f, p) => L.forEach(f, (v, j) => m(v, j, p)); if (L.isPlainObject(n) || n instanceof this.constructor)
        h(n, i);
    else if (L.isString(n) && (n = n.trim()) && !v1(n))
        h(b1(n), i);
    else if (L.isObject(n) && L.isIterable(n)) {
        let f = {}, p, v;
        for (const j of n) {
            if (!L.isArray(j))
                throw TypeError("Object iterator must return a key-value pair");
            f[v = j[0]] = (p = f[v]) ? L.isArray(p) ? [...p, j[1]] : [p, j[1]] : j[1];
        }
        h(f, i);
    }
    else
        n != null && m(i, n, c); return this; }
    get(n, i) { if (n = Fn(n), n) {
        const c = L.findKey(this, n);
        if (c) {
            const u = this[c];
            if (!i)
                return u;
            if (i === !0)
                return y1(u);
            if (L.isFunction(i))
                return i.call(this, u, c);
            if (L.isRegExp(i))
                return i.exec(u);
            throw new TypeError("parser must be boolean|regexp|function");
        }
    } }
    has(n, i) { if (n = Fn(n), n) {
        const c = L.findKey(this, n);
        return !!(c && this[c] !== void 0 && (!i || Id(this, this[c], c, i)));
    } return !1; }
    delete(n, i) { const c = this; let u = !1; function m(h) { if (h = Fn(h), h) {
        const f = L.findKey(c, h);
        f && (!i || Id(c, c[f], f, i)) && (delete c[f], u = !0);
    } } return L.isArray(n) ? n.forEach(m) : m(n), u; }
    clear(n) { const i = Object.keys(this); let c = i.length, u = !1; for (; c--;) {
        const m = i[c];
        (!n || Id(this, this[m], m, n, !0)) && (delete this[m], u = !0);
    } return u; }
    normalize(n) { const i = this, c = {}; return L.forEach(this, (u, m) => { const h = L.findKey(c, m); if (h) {
        i[h] = Yi(u), delete i[m];
        return;
    } const f = n ? j1(m) : String(m).trim(); f !== m && delete i[m], i[f] = Yi(u), c[f] = !0; }), this; }
    concat(...n) { return this.constructor.concat(this, ...n); }
    toJSON(n) { const i = Object.create(null); return L.forEach(this, (c, u) => { c != null && c !== !1 && (i[u] = n && L.isArray(c) ? c.join(", ") : c); }), i; }
    [Symbol.iterator]() { return Object.entries(this.toJSON())[Symbol.iterator](); }
    toString() {
        return Object.entries(this.toJSON()).map(([n, i]) => n + ": " + i).join(`
`);
    }
    getSetCookie() { return this.get("set-cookie") || []; }
    get [Symbol.toStringTag]() { return "AxiosHeaders"; }
    static from(n) { return n instanceof this ? n : new this(n); }
    static concat(n, ...i) { const c = new this(n); return i.forEach(u => c.set(u)), c; }
    static accessor(n) { const c = (this[yp] = this[yp] = { accessors: {} }).accessors, u = this.prototype; function m(h) { const f = Fn(h); c[f] || (N1(u, h), c[f] = !0); } return L.isArray(n) ? n.forEach(m) : m(n), this; }
};
Et.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(Et.prototype, ({ value: l }, n) => { let i = n[0].toUpperCase() + n.slice(1); return { get: () => l, set(c) { this[i] = c; } }; });
L.freezeMethods(Et);
function Wd(l, n) { const i = this || cr, c = n || i, u = Et.from(c.headers); let m = c.data; return L.forEach(l, function (f) { m = f.call(i, m, u.normalize(), n ? n.status : void 0); }), u.normalize(), m; }
function Tg(l) { return !!(l && l.__CANCEL__); }
function Xl(l, n, i) { ue.call(this, l ?? "canceled", ue.ERR_CANCELED, n, i), this.name = "CanceledError"; }
L.inherits(Xl, ue, { __CANCEL__: !0 });
function Eg(l, n, i) { const c = i.config.validateStatus; !i.status || !c || c(i.status) ? l(i) : n(new ue("Request failed with status code " + i.status, [ue.ERR_BAD_REQUEST, ue.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4], i.config, i.request, i)); }
function w1(l) { const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l); return n && n[1] || ""; }
function S1(l, n) { l = l || 10; const i = new Array(l), c = new Array(l); let u = 0, m = 0, h; return n = n !== void 0 ? n : 1e3, function (p) { const v = Date.now(), j = c[m]; h || (h = v), i[u] = p, c[u] = v; let g = m, b = 0; for (; g !== u;)
    b += i[g++], g = g % l; if (u = (u + 1) % l, u === m && (m = (m + 1) % l), v - h < n)
    return; const N = j && v - j; return N ? Math.round(b * 1e3 / N) : void 0; }; }
function k1(l, n) { let i = 0, c = 1e3 / n, u, m; const h = (v, j = Date.now()) => { i = j, u = null, m && (clearTimeout(m), m = null), l(...v); }; return [(...v) => { const j = Date.now(), g = j - i; g >= c ? h(v, j) : (u = v, m || (m = setTimeout(() => { m = null, h(u); }, c - g))); }, () => u && h(u)]; }
const Zi = (l, n, i = 3) => { let c = 0; const u = S1(50, 250); return k1(m => { const h = m.loaded, f = m.lengthComputable ? m.total : void 0, p = h - c, v = u(p), j = h <= f; c = h; const g = { loaded: h, total: f, progress: f ? h / f : void 0, bytes: p, rate: v || void 0, estimated: v && f && j ? (f - h) / v : void 0, event: m, lengthComputable: f != null, [n ? "download" : "upload"]: !0 }; l(g); }, i); }, vp = (l, n) => { const i = l != null; return [c => n[0]({ lengthComputable: i, total: l, loaded: c }), n[1]]; }, jp = l => (...n) => L.asap(() => l(...n)), C1 = xt.hasStandardBrowserEnv ? ((l, n) => i => (i = new URL(i, xt.origin), l.protocol === i.protocol && l.host === i.host && (n || l.port === i.port)))(new URL(xt.origin), xt.navigator && /(msie|trident)/i.test(xt.navigator.userAgent)) : () => !0, A1 = xt.hasStandardBrowserEnv ? { write(l, n, i, c, u, m, h) { if (typeof document > "u")
        return; const f = [`${l}=${encodeURIComponent(n)}`]; L.isNumber(i) && f.push(`expires=${new Date(i).toUTCString()}`), L.isString(c) && f.push(`path=${c}`), L.isString(u) && f.push(`domain=${u}`), m === !0 && f.push("secure"), L.isString(h) && f.push(`SameSite=${h}`), document.cookie = f.join("; "); }, read(l) { if (typeof document > "u")
        return null; const n = document.cookie.match(new RegExp("(?:^|; )" + l + "=([^;]*)")); return n ? decodeURIComponent(n[1]) : null; }, remove(l) { this.write(l, "", Date.now() - 864e5, "/"); } } : { write() { }, read() { return null; }, remove() { } };
function T1(l) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l); }
function E1(l, n) { return n ? l.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : l; }
function Mg(l, n, i) { let c = !T1(n); return l && (c || i == !1) ? E1(l, n) : n; }
const Np = l => l instanceof Et ? { ...l } : l;
function Ja(l, n) { n = n || {}; const i = {}; function c(v, j, g, b) { return L.isPlainObject(v) && L.isPlainObject(j) ? L.merge.call({ caseless: b }, v, j) : L.isPlainObject(j) ? L.merge({}, j) : L.isArray(j) ? j.slice() : j; } function u(v, j, g, b) { if (L.isUndefined(j)) {
    if (!L.isUndefined(v))
        return c(void 0, v, g, b);
}
else
    return c(v, j, g, b); } function m(v, j) { if (!L.isUndefined(j))
    return c(void 0, j); } function h(v, j) { if (L.isUndefined(j)) {
    if (!L.isUndefined(v))
        return c(void 0, v);
}
else
    return c(void 0, j); } function f(v, j, g) { if (g in n)
    return c(v, j); if (g in l)
    return c(void 0, v); } const p = { url: m, method: m, data: m, baseURL: h, transformRequest: h, transformResponse: h, paramsSerializer: h, timeout: h, timeoutMessage: h, withCredentials: h, withXSRFToken: h, adapter: h, responseType: h, xsrfCookieName: h, xsrfHeaderName: h, onUploadProgress: h, onDownloadProgress: h, decompress: h, maxContentLength: h, maxBodyLength: h, beforeRedirect: h, transport: h, httpAgent: h, httpsAgent: h, cancelToken: h, socketPath: h, responseEncoding: h, validateStatus: f, headers: (v, j, g) => u(Np(v), Np(j), g, !0) }; return L.forEach(Object.keys({ ...l, ...n }), function (j) { const g = p[j] || u, b = g(l[j], n[j], j); L.isUndefined(b) && g !== f || (i[j] = b); }), i; }
const Dg = l => { const n = Ja({}, l); let { data: i, withXSRFToken: c, xsrfHeaderName: u, xsrfCookieName: m, headers: h, auth: f } = n; if (n.headers = h = Et.from(h), n.url = kg(Mg(n.baseURL, n.url, n.allowAbsoluteUrls), l.params, l.paramsSerializer), f && h.set("Authorization", "Basic " + btoa((f.username || "") + ":" + (f.password ? unescape(encodeURIComponent(f.password)) : ""))), L.isFormData(i)) {
    if (xt.hasStandardBrowserEnv || xt.hasStandardBrowserWebWorkerEnv)
        h.setContentType(void 0);
    else if (L.isFunction(i.getHeaders)) {
        const p = i.getHeaders(), v = ["content-type", "content-length"];
        Object.entries(p).forEach(([j, g]) => { v.includes(j.toLowerCase()) && h.set(j, g); });
    }
} if (xt.hasStandardBrowserEnv && (c && L.isFunction(c) && (c = c(n)), c || c !== !1 && C1(n.url))) {
    const p = u && m && A1.read(m);
    p && h.set(u, p);
} return n; }, M1 = typeof XMLHttpRequest < "u", D1 = M1 && function (l) { return new Promise(function (i, c) { const u = Dg(l); let m = u.data; const h = Et.from(u.headers).normalize(); let { responseType: f, onUploadProgress: p, onDownloadProgress: v } = u, j, g, b, N, S; function w() { N && N(), S && S(), u.cancelToken && u.cancelToken.unsubscribe(j), u.signal && u.signal.removeEventListener("abort", j); } let C = new XMLHttpRequest; C.open(u.method.toUpperCase(), u.url, !0), C.timeout = u.timeout; function T() { if (!C)
    return; const O = Et.from("getAllResponseHeaders" in C && C.getAllResponseHeaders()), _ = { data: !f || f === "text" || f === "json" ? C.responseText : C.response, status: C.status, statusText: C.statusText, headers: O, config: l, request: C }; Eg(function (U) { i(U), w(); }, function (U) { c(U), w(); }, _), C = null; } "onloadend" in C ? C.onloadend = T : C.onreadystatechange = function () { !C || C.readyState !== 4 || C.status === 0 && !(C.responseURL && C.responseURL.indexOf("file:") === 0) || setTimeout(T); }, C.onabort = function () { C && (c(new ue("Request aborted", ue.ECONNABORTED, l, C)), C = null); }, C.onerror = function (F) { const _ = F && F.message ? F.message : "Network Error", J = new ue(_, ue.ERR_NETWORK, l, C); J.event = F || null, c(J), C = null; }, C.ontimeout = function () { let F = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded"; const _ = u.transitional || Cg; u.timeoutErrorMessage && (F = u.timeoutErrorMessage), c(new ue(F, _.clarifyTimeoutError ? ue.ETIMEDOUT : ue.ECONNABORTED, l, C)), C = null; }, m === void 0 && h.setContentType(null), "setRequestHeader" in C && L.forEach(h.toJSON(), function (F, _) { C.setRequestHeader(_, F); }), L.isUndefined(u.withCredentials) || (C.withCredentials = !!u.withCredentials), f && f !== "json" && (C.responseType = u.responseType), v && ([b, S] = Zi(v, !0), C.addEventListener("progress", b)), p && C.upload && ([g, N] = Zi(p), C.upload.addEventListener("progress", g), C.upload.addEventListener("loadend", N)), (u.cancelToken || u.signal) && (j = O => { C && (c(!O || O.type ? new Xl(null, l, C) : O), C.abort(), C = null); }, u.cancelToken && u.cancelToken.subscribe(j), u.signal && (u.signal.aborted ? j() : u.signal.addEventListener("abort", j))); const D = w1(u.url); if (D && xt.protocols.indexOf(D) === -1) {
    c(new ue("Unsupported protocol " + D + ":", ue.ERR_BAD_REQUEST, l));
    return;
} C.send(m || null); }); }, _1 = (l, n) => { const { length: i } = l = l ? l.filter(Boolean) : []; if (n || i) {
    let c = new AbortController, u;
    const m = function (v) { if (!u) {
        u = !0, f();
        const j = v instanceof Error ? v : this.reason;
        c.abort(j instanceof ue ? j : new Xl(j instanceof Error ? j.message : j));
    } };
    let h = n && setTimeout(() => { h = null, m(new ue(`timeout ${n} of ms exceeded`, ue.ETIMEDOUT)); }, n);
    const f = () => { l && (h && clearTimeout(h), h = null, l.forEach(v => { v.unsubscribe ? v.unsubscribe(m) : v.removeEventListener("abort", m); }), l = null); };
    l.forEach(v => v.addEventListener("abort", m));
    const { signal: p } = c;
    return p.unsubscribe = () => L.asap(f), p;
} }, O1 = function* (l, n) { let i = l.byteLength; if (i < n) {
    yield l;
    return;
} let c = 0, u; for (; c < i;)
    u = c + n, yield l.slice(c, u), c = u; }, z1 = async function* (l, n) { for await (const i of R1(l))
    yield* O1(i, n); }, R1 = async function* (l) { if (l[Symbol.asyncIterator]) {
    yield* l;
    return;
} const n = l.getReader(); try {
    for (;;) {
        const { done: i, value: c } = await n.read();
        if (i)
            break;
        yield c;
    }
}
finally {
    await n.cancel();
} }, wp = (l, n, i, c) => { const u = z1(l, n); let m = 0, h, f = p => { h || (h = !0, c && c(p)); }; return new ReadableStream({ async pull(p) { try {
        const { done: v, value: j } = await u.next();
        if (v) {
            f(), p.close();
            return;
        }
        let g = j.byteLength;
        if (i) {
            let b = m += g;
            i(b);
        }
        p.enqueue(new Uint8Array(j));
    }
    catch (v) {
        throw f(v), v;
    } }, cancel(p) { return f(p), u.return(); } }, { highWaterMark: 2 }); }, Sp = 64 * 1024, { isFunction: Bi } = L, B1 = (({ Request: l, Response: n }) => ({ Request: l, Response: n }))(L.global), { ReadableStream: kp, TextEncoder: Cp } = L.global, Ap = (l, ...n) => { try {
    return !!l(...n);
}
catch {
    return !1;
} }, q1 = l => { l = L.merge.call({ skipUndefined: !0 }, B1, l); const { fetch: n, Request: i, Response: c } = l, u = n ? Bi(n) : typeof fetch == "function", m = Bi(i), h = Bi(c); if (!u)
    return !1; const f = u && Bi(kp), p = u && (typeof Cp == "function" ? (S => w => S.encode(w))(new Cp) : async (S) => new Uint8Array(await new i(S).arrayBuffer())), v = m && f && Ap(() => { let S = !1; const w = new i(xt.origin, { body: new kp, method: "POST", get duplex() { return S = !0, "half"; } }).headers.has("Content-Type"); return S && !w; }), j = h && f && Ap(() => L.isReadableStream(new c("").body)), g = { stream: j && (S => S.body) }; u && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(S => { !g[S] && (g[S] = (w, C) => { let T = w && w[S]; if (T)
    return T.call(w); throw new ue(`Response type '${S}' is not supported`, ue.ERR_NOT_SUPPORT, C); }); }); const b = async (S) => { if (S == null)
    return 0; if (L.isBlob(S))
    return S.size; if (L.isSpecCompliantForm(S))
    return (await new i(xt.origin, { method: "POST", body: S }).arrayBuffer()).byteLength; if (L.isArrayBufferView(S) || L.isArrayBuffer(S))
    return S.byteLength; if (L.isURLSearchParams(S) && (S = S + ""), L.isString(S))
    return (await p(S)).byteLength; }, N = async (S, w) => { const C = L.toFiniteNumber(S.getContentLength()); return C ?? b(w); }; return async (S) => { let { url: w, method: C, data: T, signal: D, cancelToken: O, timeout: F, onDownloadProgress: _, onUploadProgress: J, responseType: U, headers: K, withCredentials: ie = "same-origin", fetchOptions: qe } = Dg(S), pe = n || fetch; U = U ? (U + "").toLowerCase() : "text"; let ne = _1([D, O && O.toAbortSignal()], F), Ke = null; const Re = ne && ne.unsubscribe && (() => { ne.unsubscribe(); }); let se; try {
    if (J && v && C !== "get" && C !== "head" && (se = await N(K, T)) !== 0) {
        let Se = new i(w, { method: "POST", body: T, duplex: "half" }), fe;
        if (L.isFormData(T) && (fe = Se.headers.get("content-type")) && K.setContentType(fe), Se.body) {
            const [ae, oe] = vp(se, Zi(jp(J)));
            T = wp(Se.body, Sp, ae, oe);
        }
    }
    L.isString(ie) || (ie = ie ? "include" : "omit");
    const R = m && "credentials" in i.prototype, $ = { ...qe, signal: ne, method: C.toUpperCase(), headers: K.normalize().toJSON(), body: T, duplex: "half", credentials: R ? ie : void 0 };
    Ke = m && new i(w, $);
    let X = await (m ? pe(Ke, qe) : pe(w, $));
    const we = j && (U === "stream" || U === "response");
    if (j && (_ || we && Re)) {
        const Se = {};
        ["status", "statusText", "headers"].forEach(Ze => { Se[Ze] = X[Ze]; });
        const fe = L.toFiniteNumber(X.headers.get("content-length")), [ae, oe] = _ && vp(fe, Zi(jp(_), !0)) || [];
        X = new c(wp(X.body, Sp, ae, () => { oe && oe(), Re && Re(); }), Se);
    }
    U = U || "text";
    let re = await g[L.findKey(g, U) || "text"](X, S);
    return !we && Re && Re(), await new Promise((Se, fe) => { Eg(Se, fe, { data: re, headers: Et.from(X.headers), status: X.status, statusText: X.statusText, config: S, request: Ke }); });
}
catch (R) {
    throw Re && Re(), R && R.name === "TypeError" && /Load failed|fetch/i.test(R.message) ? Object.assign(new ue("Network Error", ue.ERR_NETWORK, S, Ke), { cause: R.cause || R }) : ue.from(R, R && R.code, S, Ke);
} }; }, U1 = new Map, _g = l => { let n = l && l.env || {}; const { fetch: i, Request: c, Response: u } = n, m = [c, u, i]; let h = m.length, f = h, p, v, j = U1; for (; f--;)
    p = m[f], v = j.get(p), v === void 0 && j.set(p, v = f ? new Map : q1(n)), j = v; return v; };
_g();
const Ou = { http: t1, xhr: D1, fetch: { get: _g } };
L.forEach(Ou, (l, n) => { if (l) {
    try {
        Object.defineProperty(l, "name", { value: n });
    }
    catch { }
    Object.defineProperty(l, "adapterName", { value: n });
} });
const Tp = l => `- ${l}`, L1 = l => L.isFunction(l) || l === null || l === !1;
function H1(l, n) {
    l = L.isArray(l) ? l : [l];
    const { length: i } = l;
    let c, u;
    const m = {};
    for (let h = 0; h < i; h++) {
        c = l[h];
        let f;
        if (u = c, !L1(c) && (u = Ou[(f = String(c)).toLowerCase()], u === void 0))
            throw new ue(`Unknown adapter '${f}'`);
        if (u && (L.isFunction(u) || (u = u.get(n))))
            break;
        m[f || "#" + h] = u;
    }
    if (!u) {
        const h = Object.entries(m).map(([p, v]) => `adapter ${p} ` + (v === !1 ? "is not supported by the environment" : "is not available in the build"));
        let f = i ? h.length > 1 ? `since :
` + h.map(Tp).join(`
`) : " " + Tp(h[0]) : "as no adapter specified";
        throw new ue("There is no suitable adapter to dispatch the request " + f, "ERR_NOT_SUPPORT");
    }
    return u;
}
const Og = { getAdapter: H1, adapters: Ou };
function eu(l) { if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new Xl(null, l); }
function Ep(l) { return eu(l), l.headers = Et.from(l.headers), l.data = Wd.call(l, l.transformRequest), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), Og.getAdapter(l.adapter || cr.adapter, l)(l).then(function (c) { return eu(l), c.data = Wd.call(l, l.transformResponse, c), c.headers = Et.from(c.headers), c; }, function (c) { return Tg(c) || (eu(l), c && c.response && (c.response.data = Wd.call(l, l.transformResponse, c.response), c.response.headers = Et.from(c.response.headers))), Promise.reject(c); }); }
const zg = "1.13.2", dc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, n) => { dc[l] = function (c) { return typeof c === l || "a" + (n < 1 ? "n " : " ") + l; }; });
const Mp = {};
dc.transitional = function (n, i, c) { function u(m, h) { return "[Axios v" + zg + "] Transitional option '" + m + "'" + h + (c ? ". " + c : ""); } return (m, h, f) => { if (n === !1)
    throw new ue(u(h, " has been removed" + (i ? " in " + i : "")), ue.ERR_DEPRECATED); return i && !Mp[h] && (Mp[h] = !0, console.warn(u(h, " has been deprecated since v" + i + " and will be removed in the near future"))), n ? n(m, h, f) : !0; }; };
dc.spelling = function (n) { return (i, c) => (console.warn(`${c} is likely a misspelling of ${n}`), !0); };
function V1(l, n, i) { if (typeof l != "object")
    throw new ue("options must be an object", ue.ERR_BAD_OPTION_VALUE); const c = Object.keys(l); let u = c.length; for (; u-- > 0;) {
    const m = c[u], h = n[m];
    if (h) {
        const f = l[m], p = f === void 0 || h(f, m, l);
        if (p !== !0)
            throw new ue("option " + m + " must be " + p, ue.ERR_BAD_OPTION_VALUE);
        continue;
    }
    if (i !== !0)
        throw new ue("Unknown option " + m, ue.ERR_BAD_OPTION);
} }
const Xi = { assertOptions: V1, validators: dc }, fs = Xi.validators;
let Za = class {
    constructor(n) { this.defaults = n || {}, this.interceptors = { request: new bp, response: new bp }; }
    async request(n, i) {
        try {
            return await this._request(n, i);
        }
        catch (c) {
            if (c instanceof Error) {
                let u = {};
                Error.captureStackTrace ? Error.captureStackTrace(u) : u = new Error;
                const m = u.stack ? u.stack.replace(/^.+\n/, "") : "";
                try {
                    c.stack ? m && !String(c.stack).endsWith(m.replace(/^.+\n.+\n/, "")) && (c.stack += `
` + m) : c.stack = m;
                }
                catch { }
            }
            throw c;
        }
    }
    _request(n, i) { typeof n == "string" ? (i = i || {}, i.url = n) : i = n || {}, i = Ja(this.defaults, i); const { transitional: c, paramsSerializer: u, headers: m } = i; c !== void 0 && Xi.assertOptions(c, { silentJSONParsing: fs.transitional(fs.boolean), forcedJSONParsing: fs.transitional(fs.boolean), clarifyTimeoutError: fs.transitional(fs.boolean) }, !1), u != null && (L.isFunction(u) ? i.paramsSerializer = { serialize: u } : Xi.assertOptions(u, { encode: fs.function, serialize: fs.function }, !0)), i.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : i.allowAbsoluteUrls = !0), Xi.assertOptions(i, { baseUrl: fs.spelling("baseURL"), withXsrfToken: fs.spelling("withXSRFToken") }, !0), i.method = (i.method || this.defaults.method || "get").toLowerCase(); let h = m && L.merge(m.common, m[i.method]); m && L.forEach(["delete", "get", "head", "post", "put", "patch", "common"], S => { delete m[S]; }), i.headers = Et.concat(h, m); const f = []; let p = !0; this.interceptors.request.forEach(function (w) { typeof w.runWhen == "function" && w.runWhen(i) === !1 || (p = p && w.synchronous, f.unshift(w.fulfilled, w.rejected)); }); const v = []; this.interceptors.response.forEach(function (w) { v.push(w.fulfilled, w.rejected); }); let j, g = 0, b; if (!p) {
        const S = [Ep.bind(this), void 0];
        for (S.unshift(...f), S.push(...v), b = S.length, j = Promise.resolve(i); g < b;)
            j = j.then(S[g++], S[g++]);
        return j;
    } b = f.length; let N = i; for (; g < b;) {
        const S = f[g++], w = f[g++];
        try {
            N = S(N);
        }
        catch (C) {
            w.call(this, C);
            break;
        }
    } try {
        j = Ep.call(this, N);
    }
    catch (S) {
        return Promise.reject(S);
    } for (g = 0, b = v.length; g < b;)
        j = j.then(v[g++], v[g++]); return j; }
    getUri(n) { n = Ja(this.defaults, n); const i = Mg(n.baseURL, n.url, n.allowAbsoluteUrls); return kg(i, n.params, n.paramsSerializer); }
};
L.forEach(["delete", "get", "head", "options"], function (n) { Za.prototype[n] = function (i, c) { return this.request(Ja(c || {}, { method: n, url: i, data: (c || {}).data })); }; });
L.forEach(["post", "put", "patch"], function (n) { function i(c) { return function (m, h, f) { return this.request(Ja(f || {}, { method: n, headers: c ? { "Content-Type": "multipart/form-data" } : {}, url: m, data: h })); }; } Za.prototype[n] = i(), Za.prototype[n + "Form"] = i(!0); });
let G1 = class Rg {
    constructor(n) { if (typeof n != "function")
        throw new TypeError("executor must be a function."); let i; this.promise = new Promise(function (m) { i = m; }); const c = this; this.promise.then(u => { if (!c._listeners)
        return; let m = c._listeners.length; for (; m-- > 0;)
        c._listeners[m](u); c._listeners = null; }), this.promise.then = u => { let m; const h = new Promise(f => { c.subscribe(f), m = f; }).then(u); return h.cancel = function () { c.unsubscribe(m); }, h; }, n(function (m, h, f) { c.reason || (c.reason = new Xl(m, h, f), i(c.reason)); }); }
    throwIfRequested() { if (this.reason)
        throw this.reason; }
    subscribe(n) { if (this.reason) {
        n(this.reason);
        return;
    } this._listeners ? this._listeners.push(n) : this._listeners = [n]; }
    unsubscribe(n) { if (!this._listeners)
        return; const i = this._listeners.indexOf(n); i !== -1 && this._listeners.splice(i, 1); }
    toAbortSignal() { const n = new AbortController, i = c => { n.abort(c); }; return this.subscribe(i), n.signal.unsubscribe = () => this.unsubscribe(i), n.signal; }
    static source() { let n; return { token: new Rg(function (u) { n = u; }), cancel: n }; }
};
function Q1(l) { return function (i) { return l.apply(null, i); }; }
function K1(l) { return L.isObject(l) && l.isAxiosError === !0; }
const ju = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511, WebServerIsDown: 521, ConnectionTimedOut: 522, OriginIsUnreachable: 523, TimeoutOccurred: 524, SslHandshakeFailed: 525, InvalidSslCertificate: 526 };
Object.entries(ju).forEach(([l, n]) => { ju[n] = l; });
function Bg(l) { const n = new Za(l), i = hg(Za.prototype.request, n); return L.extend(i, Za.prototype, n, { allOwnKeys: !0 }), L.extend(i, n, null, { allOwnKeys: !0 }), i.create = function (u) { return Bg(Ja(l, u)); }, i; }
const Pe = Bg(cr);
Pe.Axios = Za;
Pe.CanceledError = Xl;
Pe.CancelToken = G1;
Pe.isCancel = Tg;
Pe.VERSION = zg;
Pe.toFormData = oc;
Pe.AxiosError = ue;
Pe.Cancel = Pe.CanceledError;
Pe.all = function (n) { return Promise.all(n); };
Pe.spread = Q1;
Pe.isAxiosError = K1;
Pe.mergeConfig = Ja;
Pe.AxiosHeaders = Et;
Pe.formToJSON = l => Ag(L.isHTMLForm(l) ? new FormData(l) : l);
Pe.getAdapter = Og.getAdapter;
Pe.HttpStatusCode = ju;
Pe.default = Pe;
const { Axios: Iw, AxiosError: Ww, CanceledError: e5, isCancel: t5, CancelToken: s5, VERSION: a5, all: l5, Cancel: n5, isAxiosError: r5, spread: i5, toFormData: c5, AxiosHeaders: o5, HttpStatusCode: d5, formToJSON: u5, getAdapter: m5, mergeConfig: h5 } = Pe, Y1 = "/api";
function X1(l) { return l.replace(/_([a-z])/g, (n, i) => i.toUpperCase()); }
function Nu(l) { if (Array.isArray(l))
    return l.map(Nu); if (l !== null && typeof l == "object" && !(l instanceof Date)) {
    const n = {};
    for (const [i, c] of Object.entries(l)) {
        const u = X1(i);
        n[u] = Nu(c);
    }
    return n;
} return l; }
const te = Pe.create({ baseURL: Y1, headers: { "Content-Type": "application/json" } });
te.interceptors.request.use(l => { const n = bs.getState().token; return n && (l.headers.Authorization = `Bearer ${n}`), l; }, l => Promise.reject(l));
te.interceptors.response.use(l => (l.data && (l.data = Nu(l.data)), l), l => { var n; return ((n = l.response) == null ? void 0 : n.status) === 401 && (bs.getState().logout(), window.location.href = "/login"), Promise.reject(l); });
const qg = { login: (l, n) => te.post("/auth/login", { username: l, password: n }), verify: () => te.get("/auth/verify"), logout: () => te.post("/auth/logout") }, uc = { getAll: () => te.get("/projects"), getById: l => te.get(`/projects/${l}`), create: l => te.post("/projects", l), update: (l, n) => te.put(`/projects/${l}`, n), delete: l => te.delete(`/projects/${l}`), checkCode: l => te.get(`/projects/check-code/${l}`) }, mc = { getByProject: l => te.get(`/projects/${l}/epics`), getById: l => te.get(`/epics/${l}`), create: (l, n) => te.post(`/projects/${l}/epics`, n), update: (l, n) => te.put(`/epics/${l}`, n), delete: l => te.delete(`/epics/${l}`) }, hc = { getByProject: l => te.get(`/projects/${l}/sprints`), getById: l => te.get(`/sprints/${l}`), create: (l, n) => te.post(`/projects/${l}/sprints`, n), update: (l, n) => te.put(`/sprints/${l}`, n), delete: l => te.delete(`/sprints/${l}`) }, os = { getAll: l => te.get("/tasks", { params: l }), getById: l => te.get(`/tasks/${l}`), create: l => te.post("/tasks", l), update: (l, n) => te.put(`/tasks/${l}`, n), complete: (l, n) => te.put(`/tasks/${l}/complete`, { notes: n }), delete: l => te.delete(`/tasks/${l}`), getItems: l => te.get(`/tasks/${l}/items`), createItems: (l, n) => te.post(`/tasks/${l}/items`, { items: n }), completeItem: (l, n, i) => te.put(`/tasks/${l}/items/${n}/complete`, i), getTags: l => te.get(`/tasks/${l}/tags`), addTag: (l, n) => te.post(`/tasks/${l}/tags`, { tag_id: n }), addTagByName: (l, n) => te.post(`/tasks/${l}/tags`, { tag_name: n }), removeTag: (l, n) => te.delete(`/tasks/${l}/tags/${n}`) }, Z1 = { getAll: () => te.get("/tags"), getTasksByTag: (l, n) => te.get(`/tasks/by-tag/${l}`, { params: n }) }, F1 = { getAll: () => te.get("/agents"), getById: l => te.get(`/agents/${l}`), updateStatus: (l, n, i) => te.put(`/agents/${l}/status`, { status: n, currentTask: i }), getTasks: (l, n) => te.get(`/agents/${l}/tasks`, { params: { status: n } }) }, Ia = { getAll: l => te.get("/memories", { params: l }), getById: l => te.get(`/memories/${l}`), search: (l, n) => te.get("/memories/search", { params: { q: l, tags: n == null ? void 0 : n.join(",") } }), create: l => te.post("/memories", l), update: (l, n) => te.put(`/memories/${l}`, n), delete: l => te.delete(`/memories/${l}`), boost: (l, n) => te.post(`/memories/${l}/boost`, { amount: n }), getRelated: l => te.get(`/memories/${l}/related`), getTags: () => te.get("/memories/tags"), getStats: () => te.get("/memories/stats") }, zu = { getOverview: () => te.get("/dashboard/overview"), getAlerts: () => te.get("/dashboard/alerts"), getActivity: l => te.get("/activity", { params: { limit: l } }) }, or = { getByProject: (l, n) => te.get(`/projects/${l}/documents/inline`, { params: n }), getById: (l, n) => te.get(`/projects/${l}/documents/inline/${n}`), create: (l, n) => te.post(`/projects/${l}/documents/inline`, n), update: (l, n, i) => te.put(`/projects/${l}/documents/inline/${n}`, i), delete: (l, n) => te.delete(`/projects/${l}/documents/inline/${n}`), search: (l, n, i) => te.get("/documents/search", { params: { q: l, project_id: n, type: i } }) };
function J1() { const [l, n] = M.useState(!0), { token: i, isAuthenticated: c, logout: u, login: m, _hasHydrated: h } = bs(); return M.useEffect(() => { if (!h)
    return; async function f() { if (!i) {
    n(!1);
    return;
} try {
    const { data: p } = await qg.verify();
    p.valid && p.user ? m(p.user, i) : u();
}
catch {
    u();
}
finally {
    n(!1);
} } f(); }, [h]), { isChecking: l, isAuthenticated: c }; } /**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $1 = l => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ug = (...l) => l.filter((n, i, c) => !!n && n.trim() !== "" && c.indexOf(n) === i).join(" ").trim(); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var P1 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }; /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const I1 = M.forwardRef(({ color: l = "currentColor", size: n = 24, strokeWidth: i = 2, absoluteStrokeWidth: c, className: u = "", children: m, iconNode: h, ...f }, p) => M.createElement("svg", { ref: p, ...P1, width: n, height: n, stroke: l, strokeWidth: c ? Number(i) * 24 / Number(n) : i, className: Ug("lucide", u), ...f }, [...h.map(([v, j]) => M.createElement(v, j)), ...Array.isArray(m) ? m : [m]])); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Z = (l, n) => { const i = M.forwardRef(({ className: c, ...u }, m) => M.createElement(I1, { ref: m, iconNode: n, className: Ug(`lucide-${$1(l)}`, c), ...u })); return i.displayName = `${l}`, i; }; /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $a = Z("Activity", [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const W1 = Z("AlignLeft", [["path", { d: "M15 12H3", key: "6jk70r" }], ["path", { d: "M17 18H3", key: "1amg6g" }], ["path", { d: "M21 6H3", key: "1jwq7v" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xs = Z("Archive", [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }], ["path", { d: "M10 12h4", key: "a56b0p" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ru = Z("ArrowDown", [["path", { d: "M12 5v14", key: "s699le" }], ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ys = Z("ArrowLeft", [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const eN = Z("ArrowUpDown", [["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }], ["path", { d: "M17 20V4", key: "1ejh1v" }], ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }], ["path", { d: "M7 4v16", key: "1glfcx" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Wn = Z("ArrowUp", [["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }], ["path", { d: "M12 19V5", key: "x0mq9r" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Lg = Z("Bell", [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }], ["path", { d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326", key: "11g9vi" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bu = Z("Book", [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gs = Z("Bot", [["path", { d: "M12 8V4H8", key: "hb8ula" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M15 13v2", key: "1xurst" }], ["path", { d: "M9 13v2", key: "rq6x2g" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Zl = Z("Brain", [["path", { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z", key: "l5xja" }], ["path", { d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z", key: "ep3f8r" }], ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }], ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }], ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }], ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }], ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }], ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }], ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qu = Z("Briefcase", [["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Hg = Z("Building2", [["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }], ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }], ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }], ["path", { d: "M10 6h4", key: "1itunk" }], ["path", { d: "M10 10h4", key: "tcdvrf" }], ["path", { d: "M10 14h4", key: "kelpxr" }], ["path", { d: "M10 18h4", key: "1ulq68" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const tN = Z("CalendarDays", [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 14h.01", key: "6423bh" }], ["path", { d: "M12 14h.01", key: "1etili" }], ["path", { d: "M16 14h.01", key: "1gbofw" }], ["path", { d: "M8 18h.01", key: "lrp35t" }], ["path", { d: "M12 18h.01", key: "mhygvu" }], ["path", { d: "M16 18h.01", key: "kzsmim" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gt = Z("Calendar", [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const sN = Z("Camera", [["path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z", key: "1tc9qg" }], ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const aN = Z("ChartColumn", [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M18 17V9", key: "2bz60n" }], ["path", { d: "M13 17V5", key: "1frdt8" }], ["path", { d: "M8 17v-3", key: "17ska0" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const lN = Z("ChartNoAxesColumnIncreasing", [["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }], ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }], ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const nN = Z("CheckCheck", [["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }], ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vl = Z("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Uu = Z("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vg = Z("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sa = Z("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const rN = Z("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pt = Z("CircleAlert", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const sr = Z("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Te = Z("CircleCheck", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ar = Z("CircleDot", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gg = Z("CirclePlus", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M12 8v8", key: "napkw2" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Fi = Z("CircleX", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vs = Z("Circle", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const De = Z("Clock", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Dp = Z("Cloud", [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const iN = Z("Code", [["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }], ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const cN = Z("Columns3", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["path", { d: "M15 3v18", key: "14nvp0" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Hl = Z("Copy", [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const oN = Z("Database", [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }], ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }], ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ji = Z("DollarSign", [["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }], ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gt = Z("ExternalLink", [["path", { d: "M15 3h6v6", key: "1q9fwt" }], ["path", { d: "M10 14 21 3", key: "gplh6r" }], ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const tu = Z("EyeOff", [["path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49", key: "ct8e1f" }], ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }], ["path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143", key: "13bj9a" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const er = Z("Eye", [["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Lu = Z("FileCode", [["path", { d: "M10 12.5 8 15l2 2.5", key: "1tg20x" }], ["path", { d: "m14 12.5 2 2.5-2 2.5", key: "yinavb" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z", key: "1mlx9k" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Hu = Z("FileSpreadsheet", [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M8 13h2", key: "yr2amv" }], ["path", { d: "M14 13h2", key: "un5t4a" }], ["path", { d: "M8 17h2", key: "2yhykz" }], ["path", { d: "M14 17h2", key: "10kma7" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Fa = Z("FileText", [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const dr = Z("File", [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const dN = Z("Filter", [["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qg = Z("Flag", [["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }], ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const uN = Z("FlaskConical", [["path", { d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2", key: "18mbvz" }], ["path", { d: "M6.453 15h11.094", key: "3shlmq" }], ["path", { d: "M8.5 2h7", key: "csnxdl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const va = Z("FolderKanban", [["path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z", key: "1fr9dc" }], ["path", { d: "M8 10v4", key: "tgpxqk" }], ["path", { d: "M12 10v2", key: "hh53o1" }], ["path", { d: "M16 10v6", key: "1d6xys" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vu = Z("Folder", [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _p = Z("GitBranch", [["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }], ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }], ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }], ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mN = Z("Github", [["path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4", key: "tonef" }], ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gu = Z("Globe", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }], ["path", { d: "M2 12h20", key: "9i4pu4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qu = Z("GraduationCap", [["path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z", key: "j76jl0" }], ["path", { d: "M22 10v6", key: "1lu8f3" }], ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hN = Z("GripVertical", [["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }], ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }], ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }], ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }], ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }], ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fc = Z("Hash", [["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }], ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }], ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }], ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Kg = Z("Hourglass", [["path", { d: "M5 22h14", key: "ehvnwv" }], ["path", { d: "M5 2h14", key: "pdyrp9" }], ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22", key: "1d314k" }], ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Yg = Z("Info", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Op = Z("Key", [["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }], ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }], ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Xg = Z("Laptop", [["path", { d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16", key: "tarvll" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ku = Z("Layers", [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key: "zw3jo" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fN = Z("LayoutDashboard", [["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }], ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }], ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }], ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Fl = Z("LayoutGrid", [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Yu = Z("Link2", [["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }], ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Zg = Z("Link", [["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }], ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ql = Z("ListChecks", [["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }], ["path", { d: "M13 6h8", key: "15sg57" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 18h8", key: "oe0vm4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xc = Z("ListTodo", [["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }], ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["path", { d: "M13 6h8", key: "15sg57" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 18h8", key: "oe0vm4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ur = Z("List", [["path", { d: "M3 12h.01", key: "nlz23k" }], ["path", { d: "M3 18h.01", key: "1tta3j" }], ["path", { d: "M3 6h.01", key: "1rqtza" }], ["path", { d: "M8 12h13", key: "1za7za" }], ["path", { d: "M8 18h13", key: "1lx6n3" }], ["path", { d: "M8 6h13", key: "ik3vkj" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xe = Z("LoaderCircle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xN = Z("Lock", [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pN = Z("LogOut", [["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }], ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }], ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pa = Z("Map", [["path", { d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z", key: "169xi5" }], ["path", { d: "M15 5.764v15", key: "1pn4in" }], ["path", { d: "M9 3.236v15", key: "1uimfh" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Fg = Z("MessageSquare", [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wu = Z("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gN = Z("MousePointer", [["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }], ["path", { d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z", key: "277e5u" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const zp = Z("Network", [["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }], ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }], ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }], ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }], ["path", { d: "M12 12V8", key: "2874zd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Jg = Z("Package", [["path", { d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z", key: "1a0edw" }], ["path", { d: "M12 22V12", key: "d0xqtd" }], ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }], ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $g = Z("Palette", [["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }], ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }], ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }], ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }], ["path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z", key: "12rzf8" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bN = Z("PenLine", [["path", { d: "M12 20h9", key: "t2du7b" }], ["path", { d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z", key: "1ykcvy" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const rt = Z("Plus", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yN = Z("RectangleEllipsis", [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M17 12h.01", key: "1m0b6t" }], ["path", { d: "M7 12h.01", key: "eqddd0" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pc = Z("Save", [["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", key: "1c8476" }], ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }], ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Xu = Z("ScrollText", [["path", { d: "M15 12h-5", key: "r7krc0" }], ["path", { d: "M15 8h-5", key: "1khuty" }], ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }], ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3", key: "1ph1d7" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Wa = Z("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vN = Z("Send", [["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z", key: "1ffxy3" }], ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $i = Z("Server", [["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }], ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }], ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gc = Z("Settings", [["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", key: "1qme2f" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mr = Z("Shield", [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Zu = Z("SquareChartGantt", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 8h7", key: "kbo1nt" }], ["path", { d: "M8 12h6", key: "ikassy" }], ["path", { d: "M11 16h5", key: "oq65wt" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const jN = Z("SquareCheckBig", [["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const lr = Z("SquarePen", [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }], ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", key: "ohrbg2" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const NN = Z("Square", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wN = Z("Star", [["path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z", key: "r04s7s" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pi = Z("Sun", [["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }], ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }], ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Fu = Z("Tag", [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", key: "vktsd0" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pg = Z("Tags", [["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" }], ["path", { d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z", key: "135mg7" }], ["circle", { cx: "6.5", cy: "9.5", r: ".5", fill: "currentColor", key: "5pm5xn" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ja = Z("Target", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const SN = Z("Terminal", [["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }], ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const kN = Z("Timer", [["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }], ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }], ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hr = Z("Trash2", [["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const el = Z("TrendingUp", [["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }], ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ba = Z("TriangleAlert", [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const CN = Z("Type", [["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }], ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }], ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vs = Z("User", [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }], ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ig = Z("Users", [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const AN = Z("WifiOff", [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }], ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }], ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }], ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }], ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const TN = Z("Wifi", [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const EN = Z("Workflow", [["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }], ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }], ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ss = Z("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const js = Z("Zap", [["path", { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z", key: "1xq2db" }]]), bc = og(l => ({ sidebarOpen: !0, theme: "dark", toggleSidebar: () => l(n => ({ sidebarOpen: !n.sidebarOpen })), setSidebarOpen: n => l({ sidebarOpen: n }), setTheme: n => l({ theme: n }), toggleTheme: () => l(n => ({ theme: n.theme === "light" ? "dark" : "light" })) })), MN = (l, n) => { const i = new Array(l.length + n.length); for (let c = 0; c < l.length; c++)
    i[c] = l[c]; for (let c = 0; c < n.length; c++)
    i[l.length + c] = n[c]; return i; }, DN = (l, n) => ({ classGroupId: l, validator: n }), Wg = (l = new Map, n = null, i) => ({ nextPart: l, validators: n, classGroupId: i }), Ii = "-", Rp = [], _N = "arbitrary..", ON = l => { const n = RN(l), { conflictingClassGroups: i, conflictingClassGroupModifiers: c } = l; return { getClassGroupId: h => { if (h.startsWith("[") && h.endsWith("]"))
        return zN(h); const f = h.split(Ii), p = f[0] === "" && f.length > 1 ? 1 : 0; return e0(f, p, n); }, getConflictingClassGroupIds: (h, f) => { if (f) {
        const p = c[h], v = i[h];
        return p ? v ? MN(v, p) : p : v || Rp;
    } return i[h] || Rp; } }; }, e0 = (l, n, i) => { if (l.length - n === 0)
    return i.classGroupId; const u = l[n], m = i.nextPart.get(u); if (m) {
    const v = e0(l, n + 1, m);
    if (v)
        return v;
} const h = i.validators; if (h === null)
    return; const f = n === 0 ? l.join(Ii) : l.slice(n).join(Ii), p = h.length; for (let v = 0; v < p; v++) {
    const j = h[v];
    if (j.validator(f))
        return j.classGroupId;
} }, zN = l => l.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => { const n = l.slice(1, -1), i = n.indexOf(":"), c = n.slice(0, i); return c ? _N + c : void 0; })(), RN = l => { const { theme: n, classGroups: i } = l; return BN(i, n); }, BN = (l, n) => { const i = Wg(); for (const c in l) {
    const u = l[c];
    Ju(u, i, c, n);
} return i; }, Ju = (l, n, i, c) => { const u = l.length; for (let m = 0; m < u; m++) {
    const h = l[m];
    qN(h, n, i, c);
} }, qN = (l, n, i, c) => { if (typeof l == "string") {
    UN(l, n, i);
    return;
} if (typeof l == "function") {
    LN(l, n, i, c);
    return;
} HN(l, n, i, c); }, UN = (l, n, i) => { const c = l === "" ? n : t0(n, l); c.classGroupId = i; }, LN = (l, n, i, c) => { if (VN(l)) {
    Ju(l(c), n, i, c);
    return;
} n.validators === null && (n.validators = []), n.validators.push(DN(i, l)); }, HN = (l, n, i, c) => { const u = Object.entries(l), m = u.length; for (let h = 0; h < m; h++) {
    const [f, p] = u[h];
    Ju(p, t0(n, f), i, c);
} }, t0 = (l, n) => { let i = l; const c = n.split(Ii), u = c.length; for (let m = 0; m < u; m++) {
    const h = c[m];
    let f = i.nextPart.get(h);
    f || (f = Wg(), i.nextPart.set(h, f)), i = f;
} return i; }, VN = l => "isThemeGetter" in l && l.isThemeGetter === !0, GN = l => { if (l < 1)
    return { get: () => { }, set: () => { } }; let n = 0, i = Object.create(null), c = Object.create(null); const u = (m, h) => { i[m] = h, n++, n > l && (n = 0, c = i, i = Object.create(null)); }; return { get(m) { let h = i[m]; if (h !== void 0)
        return h; if ((h = c[m]) !== void 0)
        return u(m, h), h; }, set(m, h) { m in i ? i[m] = h : u(m, h); } }; }, Su = "!", Bp = ":", QN = [], qp = (l, n, i, c, u) => ({ modifiers: l, hasImportantModifier: n, baseClassName: i, maybePostfixModifierPosition: c, isExternal: u }), KN = l => { const { prefix: n, experimentalParseClassName: i } = l; let c = u => { const m = []; let h = 0, f = 0, p = 0, v; const j = u.length; for (let w = 0; w < j; w++) {
    const C = u[w];
    if (h === 0 && f === 0) {
        if (C === Bp) {
            m.push(u.slice(p, w)), p = w + 1;
            continue;
        }
        if (C === "/") {
            v = w;
            continue;
        }
    }
    C === "[" ? h++ : C === "]" ? h-- : C === "(" ? f++ : C === ")" && f--;
} const g = m.length === 0 ? u : u.slice(p); let b = g, N = !1; g.endsWith(Su) ? (b = g.slice(0, -1), N = !0) : g.startsWith(Su) && (b = g.slice(1), N = !0); const S = v && v > p ? v - p : void 0; return qp(m, N, b, S); }; if (n) {
    const u = n + Bp, m = c;
    c = h => h.startsWith(u) ? m(h.slice(u.length)) : qp(QN, !1, h, void 0, !0);
} if (i) {
    const u = c;
    c = m => i({ className: m, parseClassName: u });
} return c; }, YN = l => { const n = new Map; return l.orderSensitiveModifiers.forEach((i, c) => { n.set(i, 1e6 + c); }), i => { const c = []; let u = []; for (let m = 0; m < i.length; m++) {
    const h = i[m], f = h[0] === "[", p = n.has(h);
    f || p ? (u.length > 0 && (u.sort(), c.push(...u), u = []), c.push(h)) : u.push(h);
} return u.length > 0 && (u.sort(), c.push(...u)), c; }; }, XN = l => ({ cache: GN(l.cacheSize), parseClassName: KN(l), sortModifiers: YN(l), ...ON(l) }), ZN = /\s+/, FN = (l, n) => { const { parseClassName: i, getClassGroupId: c, getConflictingClassGroupIds: u, sortModifiers: m } = n, h = [], f = l.trim().split(ZN); let p = ""; for (let v = f.length - 1; v >= 0; v -= 1) {
    const j = f[v], { isExternal: g, modifiers: b, hasImportantModifier: N, baseClassName: S, maybePostfixModifierPosition: w } = i(j);
    if (g) {
        p = j + (p.length > 0 ? " " + p : p);
        continue;
    }
    let C = !!w, T = c(C ? S.substring(0, w) : S);
    if (!T) {
        if (!C) {
            p = j + (p.length > 0 ? " " + p : p);
            continue;
        }
        if (T = c(S), !T) {
            p = j + (p.length > 0 ? " " + p : p);
            continue;
        }
        C = !1;
    }
    const D = b.length === 0 ? "" : b.length === 1 ? b[0] : m(b).join(":"), O = N ? D + Su : D, F = O + T;
    if (h.indexOf(F) > -1)
        continue;
    h.push(F);
    const _ = u(T, C);
    for (let J = 0; J < _.length; ++J) {
        const U = _[J];
        h.push(O + U);
    }
    p = j + (p.length > 0 ? " " + p : p);
} return p; }, JN = (...l) => { let n = 0, i, c, u = ""; for (; n < l.length;)
    (i = l[n++]) && (c = s0(i)) && (u && (u += " "), u += c); return u; }, s0 = l => { if (typeof l == "string")
    return l; let n, i = ""; for (let c = 0; c < l.length; c++)
    l[c] && (n = s0(l[c])) && (i && (i += " "), i += n); return i; }, $N = (l, ...n) => { let i, c, u, m; const h = p => { const v = n.reduce((j, g) => g(j), l()); return i = XN(v), c = i.cache.get, u = i.cache.set, m = f, f(p); }, f = p => { const v = c(p); if (v)
    return v; const j = FN(p, i); return u(p, j), j; }; return m = h, (...p) => m(JN(...p)); }, PN = [], nt = l => { const n = i => i[l] || PN; return n.isThemeGetter = !0, n; }, a0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, l0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, IN = /^\d+\/\d+$/, WN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, e2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, t2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, s2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, a2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ll = l => IN.test(l), he = l => !!l && !Number.isNaN(Number(l)), ga = l => !!l && Number.isInteger(Number(l)), su = l => l.endsWith("%") && he(l.slice(0, -1)), Hs = l => WN.test(l), l2 = () => !0, n2 = l => e2.test(l) && !t2.test(l), n0 = () => !1, r2 = l => s2.test(l), i2 = l => a2.test(l), c2 = l => !I(l) && !W(l), o2 = l => Jl(l, c0, n0), I = l => a0.test(l), Ya = l => Jl(l, o0, n2), au = l => Jl(l, f2, he), Up = l => Jl(l, r0, n0), d2 = l => Jl(l, i0, i2), qi = l => Jl(l, d0, r2), W = l => l0.test(l), Jn = l => $l(l, o0), u2 = l => $l(l, x2), Lp = l => $l(l, r0), m2 = l => $l(l, c0), h2 = l => $l(l, i0), Ui = l => $l(l, d0, !0), Jl = (l, n, i) => { const c = a0.exec(l); return c ? c[1] ? n(c[1]) : i(c[2]) : !1; }, $l = (l, n, i = !1) => { const c = l0.exec(l); return c ? c[1] ? n(c[1]) : i : !1; }, r0 = l => l === "position" || l === "percentage", i0 = l => l === "image" || l === "url", c0 = l => l === "length" || l === "size" || l === "bg-size", o0 = l => l === "length", f2 = l => l === "number", x2 = l => l === "family-name", d0 = l => l === "shadow", p2 = () => { const l = nt("color"), n = nt("font"), i = nt("text"), c = nt("font-weight"), u = nt("tracking"), m = nt("leading"), h = nt("breakpoint"), f = nt("container"), p = nt("spacing"), v = nt("radius"), j = nt("shadow"), g = nt("inset-shadow"), b = nt("text-shadow"), N = nt("drop-shadow"), S = nt("blur"), w = nt("perspective"), C = nt("aspect"), T = nt("ease"), D = nt("animate"), O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"], _ = () => [...F(), W, I], J = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", "contain", "none"], K = () => [W, I, p], ie = () => [Ll, "full", "auto", ...K()], qe = () => [ga, "none", "subgrid", W, I], pe = () => ["auto", { span: ["full", ga, W, I] }, ga, W, I], ne = () => [ga, "auto", W, I], Ke = () => ["auto", "min", "max", "fr", W, I], Re = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], se = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], R = () => ["auto", ...K()], $ = () => [Ll, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...K()], X = () => [l, W, I], we = () => [...F(), Lp, Up, { position: [W, I] }], re = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }], Se = () => ["auto", "cover", "contain", m2, o2, { size: [W, I] }], fe = () => [su, Jn, Ya], ae = () => ["", "none", "full", v, W, I], oe = () => ["", he, Jn, Ya], Ze = () => ["solid", "dashed", "dotted", "double"], at = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Ue = () => [he, su, Lp, Up], ka = () => ["", "none", S, W, I], as = () => ["none", he, W, I], Qs = () => ["none", he, W, I], Ks = () => [he, W, I], Ys = () => [Ll, "full", ...K()]; return { cacheSize: 500, theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [Hs], breakpoint: [Hs], color: [l2], container: [Hs], "drop-shadow": [Hs], ease: ["in", "out", "in-out"], font: [c2], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [Hs], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [Hs], shadow: [Hs], spacing: ["px", he], text: [Hs], "text-shadow": [Hs], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] }, classGroups: { aspect: [{ aspect: ["auto", "square", Ll, I, W, C] }], container: ["container"], columns: [{ columns: [he, I, W, f] }], "break-after": [{ "break-after": O() }], "break-before": [{ "break-before": O() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], sr: ["sr-only", "not-sr-only"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: _() }], overflow: [{ overflow: J() }], "overflow-x": [{ "overflow-x": J() }], "overflow-y": [{ "overflow-y": J() }], overscroll: [{ overscroll: U() }], "overscroll-x": [{ "overscroll-x": U() }], "overscroll-y": [{ "overscroll-y": U() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: ie() }], "inset-x": [{ "inset-x": ie() }], "inset-y": [{ "inset-y": ie() }], start: [{ start: ie() }], end: [{ end: ie() }], top: [{ top: ie() }], right: [{ right: ie() }], bottom: [{ bottom: ie() }], left: [{ left: ie() }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [ga, "auto", W, I] }], basis: [{ basis: [Ll, "full", "auto", f, ...K()] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }], flex: [{ flex: [he, Ll, "auto", "initial", "none", I] }], grow: [{ grow: ["", he, W, I] }], shrink: [{ shrink: ["", he, W, I] }], order: [{ order: [ga, "first", "last", "none", W, I] }], "grid-cols": [{ "grid-cols": qe() }], "col-start-end": [{ col: pe() }], "col-start": [{ "col-start": ne() }], "col-end": [{ "col-end": ne() }], "grid-rows": [{ "grid-rows": qe() }], "row-start-end": [{ row: pe() }], "row-start": [{ "row-start": ne() }], "row-end": [{ "row-end": ne() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": Ke() }], "auto-rows": [{ "auto-rows": Ke() }], gap: [{ gap: K() }], "gap-x": [{ "gap-x": K() }], "gap-y": [{ "gap-y": K() }], "justify-content": [{ justify: [...Re(), "normal"] }], "justify-items": [{ "justify-items": [...se(), "normal"] }], "justify-self": [{ "justify-self": ["auto", ...se()] }], "align-content": [{ content: ["normal", ...Re()] }], "align-items": [{ items: [...se(), { baseline: ["", "last"] }] }], "align-self": [{ self: ["auto", ...se(), { baseline: ["", "last"] }] }], "place-content": [{ "place-content": Re() }], "place-items": [{ "place-items": [...se(), "baseline"] }], "place-self": [{ "place-self": ["auto", ...se()] }], p: [{ p: K() }], px: [{ px: K() }], py: [{ py: K() }], ps: [{ ps: K() }], pe: [{ pe: K() }], pt: [{ pt: K() }], pr: [{ pr: K() }], pb: [{ pb: K() }], pl: [{ pl: K() }], m: [{ m: R() }], mx: [{ mx: R() }], my: [{ my: R() }], ms: [{ ms: R() }], me: [{ me: R() }], mt: [{ mt: R() }], mr: [{ mr: R() }], mb: [{ mb: R() }], ml: [{ ml: R() }], "space-x": [{ "space-x": K() }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": K() }], "space-y-reverse": ["space-y-reverse"], size: [{ size: $() }], w: [{ w: [f, "screen", ...$()] }], "min-w": [{ "min-w": [f, "screen", "none", ...$()] }], "max-w": [{ "max-w": [f, "screen", "none", "prose", { screen: [h] }, ...$()] }], h: [{ h: ["screen", "lh", ...$()] }], "min-h": [{ "min-h": ["screen", "lh", "none", ...$()] }], "max-h": [{ "max-h": ["screen", "lh", ...$()] }], "font-size": [{ text: ["base", i, Jn, Ya] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: [c, W, au] }], "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", su, I] }], "font-family": [{ font: [u2, I, n] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: [u, W, I] }], "line-clamp": [{ "line-clamp": [he, "none", W, au] }], leading: [{ leading: [m, ...K()] }], "list-image": [{ "list-image": ["none", W, I] }], "list-style-position": [{ list: ["inside", "outside"] }], "list-style-type": [{ list: ["disc", "decimal", "none", W, I] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "placeholder-color": [{ placeholder: X() }], "text-color": [{ text: X() }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...Ze(), "wavy"] }], "text-decoration-thickness": [{ decoration: [he, "from-font", "auto", W, Ya] }], "text-decoration-color": [{ decoration: X() }], "underline-offset": [{ "underline-offset": [he, "auto", W, I] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: K() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W, I] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], wrap: [{ wrap: ["break-word", "anywhere", "normal"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", W, I] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: we() }], "bg-repeat": [{ bg: re() }], "bg-size": [{ bg: Se() }], "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, ga, W, I], radial: ["", W, I], conic: [ga, W, I] }, h2, d2] }], "bg-color": [{ bg: X() }], "gradient-from-pos": [{ from: fe() }], "gradient-via-pos": [{ via: fe() }], "gradient-to-pos": [{ to: fe() }], "gradient-from": [{ from: X() }], "gradient-via": [{ via: X() }], "gradient-to": [{ to: X() }], rounded: [{ rounded: ae() }], "rounded-s": [{ "rounded-s": ae() }], "rounded-e": [{ "rounded-e": ae() }], "rounded-t": [{ "rounded-t": ae() }], "rounded-r": [{ "rounded-r": ae() }], "rounded-b": [{ "rounded-b": ae() }], "rounded-l": [{ "rounded-l": ae() }], "rounded-ss": [{ "rounded-ss": ae() }], "rounded-se": [{ "rounded-se": ae() }], "rounded-ee": [{ "rounded-ee": ae() }], "rounded-es": [{ "rounded-es": ae() }], "rounded-tl": [{ "rounded-tl": ae() }], "rounded-tr": [{ "rounded-tr": ae() }], "rounded-br": [{ "rounded-br": ae() }], "rounded-bl": [{ "rounded-bl": ae() }], "border-w": [{ border: oe() }], "border-w-x": [{ "border-x": oe() }], "border-w-y": [{ "border-y": oe() }], "border-w-s": [{ "border-s": oe() }], "border-w-e": [{ "border-e": oe() }], "border-w-t": [{ "border-t": oe() }], "border-w-r": [{ "border-r": oe() }], "border-w-b": [{ "border-b": oe() }], "border-w-l": [{ "border-l": oe() }], "divide-x": [{ "divide-x": oe() }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": oe() }], "divide-y-reverse": ["divide-y-reverse"], "border-style": [{ border: [...Ze(), "hidden", "none"] }], "divide-style": [{ divide: [...Ze(), "hidden", "none"] }], "border-color": [{ border: X() }], "border-color-x": [{ "border-x": X() }], "border-color-y": [{ "border-y": X() }], "border-color-s": [{ "border-s": X() }], "border-color-e": [{ "border-e": X() }], "border-color-t": [{ "border-t": X() }], "border-color-r": [{ "border-r": X() }], "border-color-b": [{ "border-b": X() }], "border-color-l": [{ "border-l": X() }], "divide-color": [{ divide: X() }], "outline-style": [{ outline: [...Ze(), "none", "hidden"] }], "outline-offset": [{ "outline-offset": [he, W, I] }], "outline-w": [{ outline: ["", he, Jn, Ya] }], "outline-color": [{ outline: X() }], shadow: [{ shadow: ["", "none", j, Ui, qi] }], "shadow-color": [{ shadow: X() }], "inset-shadow": [{ "inset-shadow": ["none", g, Ui, qi] }], "inset-shadow-color": [{ "inset-shadow": X() }], "ring-w": [{ ring: oe() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: X() }], "ring-offset-w": [{ "ring-offset": [he, Ya] }], "ring-offset-color": [{ "ring-offset": X() }], "inset-ring-w": [{ "inset-ring": oe() }], "inset-ring-color": [{ "inset-ring": X() }], "text-shadow": [{ "text-shadow": ["none", b, Ui, qi] }], "text-shadow-color": [{ "text-shadow": X() }], opacity: [{ opacity: [he, W, I] }], "mix-blend": [{ "mix-blend": [...at(), "plus-darker", "plus-lighter"] }], "bg-blend": [{ "bg-blend": at() }], "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"], "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }], "mask-image-linear-pos": [{ "mask-linear": [he] }], "mask-image-linear-from-pos": [{ "mask-linear-from": Ue() }], "mask-image-linear-to-pos": [{ "mask-linear-to": Ue() }], "mask-image-linear-from-color": [{ "mask-linear-from": X() }], "mask-image-linear-to-color": [{ "mask-linear-to": X() }], "mask-image-t-from-pos": [{ "mask-t-from": Ue() }], "mask-image-t-to-pos": [{ "mask-t-to": Ue() }], "mask-image-t-from-color": [{ "mask-t-from": X() }], "mask-image-t-to-color": [{ "mask-t-to": X() }], "mask-image-r-from-pos": [{ "mask-r-from": Ue() }], "mask-image-r-to-pos": [{ "mask-r-to": Ue() }], "mask-image-r-from-color": [{ "mask-r-from": X() }], "mask-image-r-to-color": [{ "mask-r-to": X() }], "mask-image-b-from-pos": [{ "mask-b-from": Ue() }], "mask-image-b-to-pos": [{ "mask-b-to": Ue() }], "mask-image-b-from-color": [{ "mask-b-from": X() }], "mask-image-b-to-color": [{ "mask-b-to": X() }], "mask-image-l-from-pos": [{ "mask-l-from": Ue() }], "mask-image-l-to-pos": [{ "mask-l-to": Ue() }], "mask-image-l-from-color": [{ "mask-l-from": X() }], "mask-image-l-to-color": [{ "mask-l-to": X() }], "mask-image-x-from-pos": [{ "mask-x-from": Ue() }], "mask-image-x-to-pos": [{ "mask-x-to": Ue() }], "mask-image-x-from-color": [{ "mask-x-from": X() }], "mask-image-x-to-color": [{ "mask-x-to": X() }], "mask-image-y-from-pos": [{ "mask-y-from": Ue() }], "mask-image-y-to-pos": [{ "mask-y-to": Ue() }], "mask-image-y-from-color": [{ "mask-y-from": X() }], "mask-image-y-to-color": [{ "mask-y-to": X() }], "mask-image-radial": [{ "mask-radial": [W, I] }], "mask-image-radial-from-pos": [{ "mask-radial-from": Ue() }], "mask-image-radial-to-pos": [{ "mask-radial-to": Ue() }], "mask-image-radial-from-color": [{ "mask-radial-from": X() }], "mask-image-radial-to-color": [{ "mask-radial-to": X() }], "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }], "mask-image-radial-pos": [{ "mask-radial-at": F() }], "mask-image-conic-pos": [{ "mask-conic": [he] }], "mask-image-conic-from-pos": [{ "mask-conic-from": Ue() }], "mask-image-conic-to-pos": [{ "mask-conic-to": Ue() }], "mask-image-conic-from-color": [{ "mask-conic-from": X() }], "mask-image-conic-to-color": [{ "mask-conic-to": X() }], "mask-mode": [{ mask: ["alpha", "luminance", "match"] }], "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }], "mask-position": [{ mask: we() }], "mask-repeat": [{ mask: re() }], "mask-size": [{ mask: Se() }], "mask-type": [{ "mask-type": ["alpha", "luminance"] }], "mask-image": [{ mask: ["none", W, I] }], filter: [{ filter: ["", "none", W, I] }], blur: [{ blur: ka() }], brightness: [{ brightness: [he, W, I] }], contrast: [{ contrast: [he, W, I] }], "drop-shadow": [{ "drop-shadow": ["", "none", N, Ui, qi] }], "drop-shadow-color": [{ "drop-shadow": X() }], grayscale: [{ grayscale: ["", he, W, I] }], "hue-rotate": [{ "hue-rotate": [he, W, I] }], invert: [{ invert: ["", he, W, I] }], saturate: [{ saturate: [he, W, I] }], sepia: [{ sepia: ["", he, W, I] }], "backdrop-filter": [{ "backdrop-filter": ["", "none", W, I] }], "backdrop-blur": [{ "backdrop-blur": ka() }], "backdrop-brightness": [{ "backdrop-brightness": [he, W, I] }], "backdrop-contrast": [{ "backdrop-contrast": [he, W, I] }], "backdrop-grayscale": [{ "backdrop-grayscale": ["", he, W, I] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [he, W, I] }], "backdrop-invert": [{ "backdrop-invert": ["", he, W, I] }], "backdrop-opacity": [{ "backdrop-opacity": [he, W, I] }], "backdrop-saturate": [{ "backdrop-saturate": [he, W, I] }], "backdrop-sepia": [{ "backdrop-sepia": ["", he, W, I] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": K() }], "border-spacing-x": [{ "border-spacing-x": K() }], "border-spacing-y": [{ "border-spacing-y": K() }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", W, I] }], "transition-behavior": [{ transition: ["normal", "discrete"] }], duration: [{ duration: [he, "initial", W, I] }], ease: [{ ease: ["linear", "initial", T, W, I] }], delay: [{ delay: [he, W, I] }], animate: [{ animate: ["none", D, W, I] }], backface: [{ backface: ["hidden", "visible"] }], perspective: [{ perspective: [w, W, I] }], "perspective-origin": [{ "perspective-origin": _() }], rotate: [{ rotate: as() }], "rotate-x": [{ "rotate-x": as() }], "rotate-y": [{ "rotate-y": as() }], "rotate-z": [{ "rotate-z": as() }], scale: [{ scale: Qs() }], "scale-x": [{ "scale-x": Qs() }], "scale-y": [{ "scale-y": Qs() }], "scale-z": [{ "scale-z": Qs() }], "scale-3d": ["scale-3d"], skew: [{ skew: Ks() }], "skew-x": [{ "skew-x": Ks() }], "skew-y": [{ "skew-y": Ks() }], transform: [{ transform: [W, I, "", "none", "gpu", "cpu"] }], "transform-origin": [{ origin: _() }], "transform-style": [{ transform: ["3d", "flat"] }], translate: [{ translate: Ys() }], "translate-x": [{ "translate-x": Ys() }], "translate-y": [{ "translate-y": Ys() }], "translate-z": [{ "translate-z": Ys() }], "translate-none": ["translate-none"], accent: [{ accent: X() }], appearance: [{ appearance: ["none", "auto"] }], "caret-color": [{ caret: X() }], "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W, I] }], "field-sizing": [{ "field-sizing": ["fixed", "content"] }], "pointer-events": [{ "pointer-events": ["auto", "none"] }], resize: [{ resize: ["none", "", "y", "x"] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": K() }], "scroll-mx": [{ "scroll-mx": K() }], "scroll-my": [{ "scroll-my": K() }], "scroll-ms": [{ "scroll-ms": K() }], "scroll-me": [{ "scroll-me": K() }], "scroll-mt": [{ "scroll-mt": K() }], "scroll-mr": [{ "scroll-mr": K() }], "scroll-mb": [{ "scroll-mb": K() }], "scroll-ml": [{ "scroll-ml": K() }], "scroll-p": [{ "scroll-p": K() }], "scroll-px": [{ "scroll-px": K() }], "scroll-py": [{ "scroll-py": K() }], "scroll-ps": [{ "scroll-ps": K() }], "scroll-pe": [{ "scroll-pe": K() }], "scroll-pt": [{ "scroll-pt": K() }], "scroll-pr": [{ "scroll-pr": K() }], "scroll-pb": [{ "scroll-pb": K() }], "scroll-pl": [{ "scroll-pl": K() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", W, I] }], fill: [{ fill: ["none", ...X()] }], "stroke-w": [{ stroke: [he, Jn, Ya, au] }], stroke: [{ stroke: ["none", ...X()] }], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] }, orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"] }; }, g2 = $N(p2);
function V(...l) { return g2(lv(l)); }
function Qt(l) { return new Intl.DateTimeFormat("es-ES", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(l)); }
function Qe(l) { const n = new Date, i = new Date(l), c = n.getTime() - i.getTime(), u = Math.floor(c / 1e3), m = Math.floor(u / 60), h = Math.floor(m / 60), f = Math.floor(h / 24); return f > 7 ? Qt(l) : f > 0 ? `hace ${f}d` : h > 0 ? `hace ${h}h` : m > 0 ? `hace ${m}m` : "ahora"; }
function lu(l) { return new Intl.NumberFormat("es-MX").format(l); }
function u0(l) { return { active: "bg-green-500", in_progress: "bg-blue-500", pending: "bg-yellow-500", completed: "bg-green-500", blocked: "bg-red-500", review: "bg-purple-500", inactive: "bg-gray-500", error: "bg-red-500", busy: "bg-orange-500" }[l] || "bg-gray-500"; }
function b2(l) { return { critical: "text-red-500 bg-red-500/10", high: "text-orange-500 bg-orange-500/10", medium: "text-yellow-500 bg-yellow-500/10", low: "text-green-500 bg-green-500/10" }[l] || "text-gray-500 bg-gray-500/10"; }
const y2 = [{ name: "Dashboard", href: "/dashboard", icon: fN }, { name: "Proyectos", href: "/projects", icon: va }, { name: "Negocios", href: "/businesses", icon: qu }, { name: "Infraestructura", href: "/infrastructure", icon: $i }, { name: "Design Hub", href: "/design-hub", icon: $g }, { name: "Memorias", href: "/memories", icon: Zl }, { name: "Archivo", href: "/projects/archived", icon: xs }], v2 = [{ name: "n8n Workflows", href: "https://n8n.solaria.agency", icon: EN, color: "text-orange-400" }, { name: "Vibe Platform", href: "https://vibe.solaria.agency", icon: Gt, color: "text-purple-400" }];
function j2() { const { sidebarOpen: l, toggleSidebar: n } = bc(); return t.jsxs("aside", { className: V("fixed left-0 top-0 z-40 h-screen border-r border-border bg-card transition-all duration-300 flex flex-col", l ? "w-64" : "w-16"), children: [t.jsxs("div", { className: "flex h-16 items-center justify-between border-b border-border px-4", children: [l ? t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("img", { src: "/solaria-logo.png", alt: "SOLARIA", className: "h-9 w-9", onError: i => { i.currentTarget.style.display = "none"; } }), t.jsxs("div", { className: "flex flex-col", children: [t.jsx("span", { className: "font-bold text-lg solaria-text-gradient", children: "SOLARIA" }), t.jsx("span", { className: "text-[10px] text-muted-foreground -mt-1", children: "Digital Field Operations" })] })] }) : t.jsx("img", { src: "/solaria-logo.png", alt: "S", className: "h-8 w-8 mx-auto", onError: i => { i.currentTarget.style.display = "none"; } }), t.jsx("button", { onClick: n, className: "p-2 rounded-lg hover:bg-accent transition-colors", "aria-label": l ? "Colapsar sidebar" : "Expandir sidebar", children: l ? t.jsx(Vg, { className: "h-5 w-5" }) : t.jsx(Sa, { className: "h-5 w-5" }) })] }), t.jsxs("nav", { className: "flex flex-col gap-1 p-2 flex-1", children: [l && t.jsx("div", { className: "px-3 py-2 text-[10px] font-semibold uppercase text-muted-foreground tracking-wider", children: "Navegacion" }), y2.map(i => t.jsxs(Iy, { to: i.href, className: ({ isActive: c }) => V("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"), children: [t.jsx(i.icon, { className: "h-5 w-5 flex-shrink-0" }), l && t.jsx("span", { children: i.name })] }, i.name)), l && t.jsx("div", { className: "my-2 border-t border-border" }), l && t.jsx("div", { className: "px-3 py-2 text-[10px] font-semibold uppercase text-muted-foreground tracking-wider", children: "Enlaces" }), v2.map(i => t.jsxs("a", { href: i.href, target: "_blank", rel: "noopener noreferrer", className: V("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", "text-muted-foreground hover:bg-accent hover:text-accent-foreground"), children: [t.jsx(i.icon, { className: V("h-5 w-5 flex-shrink-0", i.color) }), l && t.jsxs(t.Fragment, { children: [t.jsx("span", { children: i.name }), t.jsx(Gt, { className: "h-3 w-3 ml-auto opacity-50" })] })] }, i.name))] }), l && t.jsx("div", { className: "p-4 border-t border-border", children: t.jsxs("div", { className: "rounded-lg bg-accent/50 p-3 text-center", children: [t.jsxs("div", { className: "text-xs text-muted-foreground", children: [t.jsx("span", { className: "solaria-text-gradient font-semibold", children: "SOLARIA" }), t.jsx("span", { children: " DFO" })] }), t.jsx("div", { className: "mt-1 text-[10px] text-muted-foreground", children: "v3.5.2" })] }) })] }); }
function m0(l) { return { ...l, tasksTotal: l.totalTasks ?? l.total_tasks ?? 0, tasksCompleted: l.completedTasks ?? l.completed_tasks ?? 0, tasksPending: l.pendingTasks ?? l.pending_tasks ?? 0, activeAgents: l.agentsAssigned ?? l.agents_assigned ?? 0, budgetAllocated: l.budgetAllocated ?? l.budget ?? 0, budgetSpent: l.actualCost ?? l.actual_cost ?? 0 }; }
function N2() { return Ve({ queryKey: ["dashboard", "overview"], queryFn: async () => { var i, c, u, m, h, f, p, v, j, g, b; const { data: l } = await zu.getOverview(), n = l.data || l; return { totalProjects: ((i = n.projects) == null ? void 0 : i.total_projects) || 0, activeProjects: ((c = n.projects) == null ? void 0 : c.active_projects) || 0, completedProjects: ((u = n.projects) == null ? void 0 : u.completed_projects) || 0, totalTasks: ((m = n.tasks) == null ? void 0 : m.total_tasks) || 0, completedTasks: ((h = n.tasks) == null ? void 0 : h.completed_tasks) || 0, pendingTasks: ((f = n.tasks) == null ? void 0 : f.pending_tasks) || 0, inProgressTasks: ((p = n.tasks) == null ? void 0 : p.in_progress_tasks) || 0, totalAgents: ((v = n.agents) == null ? void 0 : v.total_agents) || 0, activeAgents: ((j = n.agents) == null ? void 0 : j.active_agents) || 0, totalMemories: ((g = n.memories) == null ? void 0 : g.total_memories) || 0, criticalAlerts: ((b = n.alerts) == null ? void 0 : b.critical_alerts) || 0 }; }, refetchInterval: 3e4 }); }
function w2() { return Ve({ queryKey: ["dashboard", "alerts"], queryFn: async () => { const { data: l } = await zu.getAlerts(), n = l.data || l.alerts || l; return Array.isArray(n) ? n : []; }, refetchInterval: 15e3 }); }
function fr() { return Ve({ queryKey: ["projects"], queryFn: async () => { const { data: l } = await uc.getAll(); return (l.projects || l.data || []).map(i => m0(i)); } }); }
function Pl(l) { return Ve({ queryKey: ["projects", l], queryFn: async () => { const { data: n } = await uc.getById(l), i = n.project || n.data || n; return m0(i); }, enabled: !!l }); }
function $u() { const l = bt(); return vt({ mutationFn: ({ id: n, data: i }) => uc.update(n, i), onSuccess: (n, { id: i }) => { l.invalidateQueries({ queryKey: ["projects"] }), l.invalidateQueries({ queryKey: ["projects", i] }); } }); }
function xr(l) { return Ve({ queryKey: ["tasks", l], queryFn: async () => { const { data: n } = await os.getAll(l); return n.tasks || n.data || n || []; } }); }
function Pu(l) { return Ve({ queryKey: ["tasks", l], queryFn: async () => { const { data: n } = await os.getById(l); return n.task || n.data || n; }, enabled: !!l && l > 0 }); }
function S2() { const l = bt(); return vt({ mutationFn: n => os.create(n), onSuccess: () => { l.invalidateQueries({ queryKey: ["tasks"] }); } }); }
function k2() { const l = bt(); return vt({ mutationFn: ({ id: n, data: i }) => os.update(n, i), onSuccess: (n, { id: i }) => { l.invalidateQueries({ queryKey: ["tasks"] }), l.invalidateQueries({ queryKey: ["tasks", i] }); } }); }
function h0() { return Ve({ queryKey: ["agents"], queryFn: async () => { const { data: l } = await F1.getAll(); return l.agents || l.data || l || []; }, refetchInterval: 1e4 }); }
function C2(l) { var c; const n = (c = l == null ? void 0 : l.tags) != null && c.length ? l.tags.join(",") : "", i = l == null ? void 0 : l.projectId; return Ve({ queryKey: ["memories", { projectId: i, tags: n }], queryFn: async () => { const u = {}; i && (u.projectId = i), n && (u.tags = JSON.stringify(l.tags)); const { data: m } = await Ia.getAll(Object.keys(u).length > 0 ? u : void 0), h = (m == null ? void 0 : m.memories) || (m == null ? void 0 : m.data) || m || []; return Array.isArray(h) ? h : []; } }); }
function A2(l) { return Ve({ queryKey: ["memories", l], queryFn: async () => { const { data: n } = await Ia.getById(l); return n.memory || n.data || n; }, enabled: !!l && l > 0 }); }
function T2(l, n) { return Ve({ queryKey: ["memories", "search", l, n], queryFn: async () => { const { data: i } = await Ia.search(l, n); return i.memories || i.data || i || []; }, enabled: l.length > 2 }); }
function E2() { return Ve({ queryKey: ["memories", "tags"], queryFn: async () => { const { data: l } = await Ia.getTags(); return l.tags || l.data || l || []; } }); }
function M2() { return Ve({ queryKey: ["memories", "stats"], queryFn: async () => { const { data: l } = await Ia.getStats(); return l.data || l; } }); }
function D2() { const l = bt(); return vt({ mutationFn: ({ id: n, amount: i }) => Ia.boost(n, i), onSuccess: (n, { id: i }) => { l.invalidateQueries({ queryKey: ["memories"] }), l.invalidateQueries({ queryKey: ["memories", i] }); } }); }
function _2(l) { return Ve({ queryKey: ["memories", l, "related"], queryFn: async () => { const { data: n } = await Ia.getRelated(l); return n.related || n.data || n || []; }, enabled: !!l }); }
function f0(l) { return Ve({ queryKey: ["tasks", l, "items"], queryFn: async () => { const { data: n } = await os.getItems(l); return n.items || n.data || n || []; }, enabled: !!l }); }
function O2() { const l = bt(); return vt({ mutationFn: ({ taskId: n, items: i }) => os.createItems(n, i), onSuccess: (n, { taskId: i }) => { l.invalidateQueries({ queryKey: ["tasks", i, "items"] }), l.invalidateQueries({ queryKey: ["tasks", i] }), l.invalidateQueries({ queryKey: ["tasks"] }); } }); }
function z2() { const l = bt(); return vt({ mutationFn: ({ taskId: n, itemId: i, notes: c, actualMinutes: u }) => os.completeItem(n, i, { notes: c, actual_minutes: u }), onSuccess: (n, { taskId: i }) => { l.invalidateQueries({ queryKey: ["tasks", i, "items"] }), l.invalidateQueries({ queryKey: ["tasks", i] }), l.invalidateQueries({ queryKey: ["tasks"] }), l.invalidateQueries({ queryKey: ["dashboard"] }); } }); }
function R2() { return Ve({ queryKey: ["tags"], queryFn: async () => { const { data: l } = await Z1.getAll(); return l.tags || l.data || l || []; }, staleTime: 1e3 * 60 * 5 }); }
function B2(l) { return Ve({ queryKey: ["tasks", l, "tags"], queryFn: async () => { const { data: n } = await os.getTags(l); return n.tags || n.data || n || []; }, enabled: !!l }); }
function q2() { const l = bt(); return vt({ mutationFn: ({ taskId: n, tagId: i }) => os.addTag(n, i), onSuccess: (n, { taskId: i }) => { l.invalidateQueries({ queryKey: ["tasks", i, "tags"] }), l.invalidateQueries({ queryKey: ["tags"] }); } }); }
function U2() { const l = bt(); return vt({ mutationFn: ({ taskId: n, tagId: i }) => os.removeTag(n, i), onSuccess: (n, { taskId: i }) => { l.invalidateQueries({ queryKey: ["tasks", i, "tags"] }), l.invalidateQueries({ queryKey: ["tags"] }); } }); }
function L2(l, n) { return Ve({ queryKey: ["projects", l, "activity", n], queryFn: async () => { const { data: i } = await zu.getActivity(n); return (i.logs || i.data || i || []).filter(u => u.projectId === l); }, enabled: !!l, refetchInterval: 15e3 }); }
function Iu(l) { return Ve({ queryKey: ["projects", l, "tasks"], queryFn: async () => { const { data: n } = await os.getAll({ project_id: l }); return n.tasks || n.data || n || []; }, enabled: !!l, refetchInterval: 1e4 }); }
function H2(l) { return Ve({ queryKey: ["projects", "check-code", l], queryFn: async () => { const { data: n } = await uc.checkCode(l); return n; }, enabled: l.length === 3 && /^[A-Za-z]{3}$/.test(l), staleTime: 1e3 * 30 }); }
function x0(l) { return Ve({ queryKey: ["projects", l, "epics"], queryFn: async () => { const { data: n } = await mc.getByProject(l); return n.epics || n.data || n || []; }, enabled: !!l }); }
function V2() { const l = bt(); return vt({ mutationFn: ({ projectId: n, data: i }) => mc.create(n, i), onSuccess: (n, { projectId: i }) => { l.invalidateQueries({ queryKey: ["projects", i, "epics"] }); } }); }
function G2() { const l = bt(); return vt({ mutationFn: ({ id: n }) => mc.delete(n), onSuccess: (n, i) => { l.invalidateQueries({ queryKey: ["projects", i.projectId, "epics"] }), l.invalidateQueries({ queryKey: ["tasks"] }); } }); }
function Q2(l) { return Ve({ queryKey: ["epics", l], queryFn: async () => { if (!l)
        return null; const { data: n } = await mc.getById(l); return n; }, enabled: !!l }); }
function p0(l) { return Ve({ queryKey: ["projects", l, "sprints"], queryFn: async () => { const { data: n } = await hc.getByProject(l); return n.sprints || n.data || n || []; }, enabled: !!l }); }
function K2() { const l = bt(); return vt({ mutationFn: ({ projectId: n, data: i }) => hc.create(n, i), onSuccess: (n, { projectId: i }) => { l.invalidateQueries({ queryKey: ["projects", i, "sprints"] }); } }); }
function Y2() { const l = bt(); return vt({ mutationFn: ({ id: n }) => hc.delete(n), onSuccess: (n, i) => { l.invalidateQueries({ queryKey: ["projects", i.projectId, "sprints"] }), l.invalidateQueries({ queryKey: ["tasks"] }); } }); }
function X2(l) { return Ve({ queryKey: ["sprints", l], queryFn: async () => { if (!l)
        return null; const { data: n } = await hc.getById(l); return n; }, enabled: !!l }); }
function g0(l, n) { return Ve({ queryKey: ["projects", l, "inline-documents", n], queryFn: async () => { if (!l)
        return { documents: [], total: 0 }; const { data: i } = await or.getByProject(l, { type: n }); return i; }, enabled: !!l }); }
function Z2(l, n) { return Ve({ queryKey: ["projects", l, "inline-documents", n], queryFn: async () => { if (!l || !n)
        return null; const { data: i } = await or.getById(l, n); return i; }, enabled: !!l && !!n }); }
function F2() { const l = bt(); return vt({ mutationFn: ({ projectId: n, data: i }) => or.create(n, i), onSuccess: (n, i) => { l.invalidateQueries({ queryKey: ["projects", i.projectId, "inline-documents"] }); } }); }
function J2() { const l = bt(); return vt({ mutationFn: ({ projectId: n, docId: i, data: c }) => or.update(n, i, c), onSuccess: (n, i) => { l.invalidateQueries({ queryKey: ["projects", i.projectId, "inline-documents"] }); } }); }
function $2() { const l = bt(); return vt({ mutationFn: ({ projectId: n, docId: i }) => or.delete(n, i), onSuccess: (n, i) => { l.invalidateQueries({ queryKey: ["projects", i.projectId, "inline-documents"] }); } }); }
function P2() { const l = ft(), { user: n, logout: i } = bs(), { theme: c, toggleTheme: u } = bc(), { data: m } = w2(), { isConnected: h } = ug(), { notifications: f, unreadCount: p, markAllAsRead: v, dismissNotification: j, clearAll: g } = xj(), [b, N] = M.useState(!1), [S, w] = M.useState(!1), [C, T] = M.useState(new Set), [D, O] = M.useState("activity"), F = M.useRef(null), _ = M.useRef(null), J = (se, R) => { R.stopPropagation(), T($ => new Set([...$, se])); }, U = () => { const se = K.map(R => R.id); T(new Set(se)); }; M.useEffect(() => { function se(R) { F.current && !F.current.contains(R.target) && N(!1), _.current && !_.current.contains(R.target) && w(!1); } return document.addEventListener("mousedown", se), () => document.removeEventListener("mousedown", se); }, []); const K = (m || []).filter(se => !C.has(se.id)), ie = K.filter(se => se.severity === "critical" || se.severity === "high"), qe = K.length, pe = () => { i(), l("/login"); }, ne = se => { switch (se) {
    case "critical":
    case "high": return t.jsx(ba, { className: "h-4 w-4 text-red-500" });
    case "medium": return t.jsx(ba, { className: "h-4 w-4 text-yellow-500" });
    case "info": return t.jsx(Yg, { className: "h-4 w-4 text-blue-500" });
    default: return t.jsx(sr, { className: "h-4 w-4 text-green-500" });
} }, Ke = se => { const R = "h-4 w-4", X = { created: "text-green-500", completed: "text-green-500", updated: "text-blue-500", deleted: "text-red-500", status: "text-yellow-500", info: "text-muted-foreground" }[se.action] || "text-muted-foreground"; switch (se.type) {
    case "task": return t.jsx(xc, { className: V(R, X) });
    case "project": return t.jsx(va, { className: V(R, X) });
    case "agent": return t.jsx(Gs, { className: V(R, X) });
    case "memory": return t.jsx(Zl, { className: V(R, X) });
    case "alert": return t.jsx(ba, { className: V(R, "text-red-500") });
    default: return t.jsx(js, { className: V(R, X) });
} }, Re = qe + p; return t.jsxs("header", { className: "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card/80 px-6 backdrop-blur", children: [t.jsx("div", { className: "flex items-center gap-4", children: t.jsx("h1", { className: "text-lg font-semibold", children: "Digital Field Operations" }) }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: V("flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs", h ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"), children: h ? t.jsxs(t.Fragment, { children: [t.jsx(TN, { className: "h-3.5 w-3.5" }), t.jsx("span", { className: "hidden sm:inline", children: "En vivo" })] }) : t.jsxs(t.Fragment, { children: [t.jsx(AN, { className: "h-3.5 w-3.5" }), t.jsx("span", { className: "hidden sm:inline", children: "Offline" })] }) }), t.jsxs("div", { className: "relative", ref: F, children: [t.jsxs("button", { onClick: () => N(!b), className: V("relative rounded-lg p-2 transition-colors hover:bg-accent", (ie.length > 0 || p > 0) && "text-primary"), children: [t.jsx(Lg, { className: "h-5 w-5" }), Re > 0 && t.jsx("span", { className: V("absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white", ie.length > 0 ? "bg-red-500" : "bg-primary"), children: Re > 9 ? "9+" : Re })] }), b && t.jsxs("div", { className: "absolute right-0 top-full mt-2 w-96 rounded-xl border border-border bg-card shadow-lg", children: [t.jsxs("div", { className: "flex border-b border-border", children: [t.jsxs("button", { onClick: () => O("activity"), className: V("flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors", D === "activity" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"), children: [t.jsx($a, { className: "h-4 w-4" }), "Actividad", p > 0 && t.jsx("span", { className: "bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5 rounded-full", children: p })] }), t.jsxs("button", { onClick: () => O("alerts"), className: V("flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors", D === "alerts" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"), children: [t.jsx(ba, { className: "h-4 w-4" }), "Alertas", qe > 0 && t.jsx("span", { className: V("text-[10px] px-1.5 py-0.5 rounded-full", ie.length > 0 ? "bg-red-500 text-white" : "bg-muted text-muted-foreground"), children: qe })] })] }), t.jsx("div", { className: "max-h-80 overflow-y-auto", children: D === "activity" ? t.jsx(t.Fragment, { children: f.length > 0 ? t.jsxs(t.Fragment, { children: [t.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-muted/30", children: [t.jsx("span", { className: "text-xs text-muted-foreground", children: "Eventos en tiempo real" }), t.jsxs("div", { className: "flex gap-2", children: [p > 0 && t.jsx("button", { onClick: v, className: "text-xs text-primary hover:underline", children: "Marcar leídas" }), t.jsx("button", { onClick: g, className: "text-xs text-muted-foreground hover:text-foreground", children: "Limpiar" })] })] }), f.slice(0, 15).map(se => t.jsxs("div", { className: V("flex gap-3 px-4 py-3 hover:bg-accent/50 cursor-pointer border-b border-border last:border-0 group relative transition-colors", !se.read && "bg-primary/5"), children: [t.jsx("div", { className: "flex-shrink-0 mt-0.5", children: Ke(se) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("span", { className: "font-medium text-sm truncate", children: se.title }), !se.read && t.jsx("span", { className: "h-2 w-2 rounded-full bg-primary flex-shrink-0" })] }), t.jsx("div", { className: "text-xs text-muted-foreground truncate", children: se.message }), t.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: Qe(se.timestamp.toISOString()) })] }), t.jsx("button", { onClick: R => { R.stopPropagation(), j(se.id); }, className: "opacity-0 group-hover:opacity-100 p-1 hover:bg-muted rounded transition-all absolute right-2 top-2", title: "Descartar", children: t.jsx(ss, { className: "h-3.5 w-3.5 text-muted-foreground" }) })] }, se.id))] }) : t.jsxs("div", { className: "px-4 py-8 text-center", children: [t.jsx($a, { className: "h-8 w-8 text-muted-foreground mx-auto mb-2" }), t.jsx("div", { className: "text-sm text-muted-foreground", children: "Sin actividad reciente" }), t.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Los eventos aparecerán aquí en tiempo real" })] }) }) : t.jsx(t.Fragment, { children: K.length > 0 ? t.jsxs(t.Fragment, { children: [t.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-muted/30", children: [t.jsxs("span", { className: "text-xs text-muted-foreground", children: [qe, " alertas activas"] }), t.jsx("button", { onClick: U, className: "text-xs text-muted-foreground hover:text-foreground", children: "Descartar todas" })] }), K.slice(0, 10).map(se => t.jsxs("div", { className: "flex gap-3 px-4 py-3 hover:bg-accent/50 cursor-pointer border-b border-border last:border-0 group relative", children: [ne(se.severity), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx("div", { className: "font-medium text-sm truncate", children: se.title }), t.jsx("div", { className: "text-xs text-muted-foreground truncate", children: se.message }), t.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: Qe(se.createdAt) })] }), t.jsx("button", { onClick: R => J(se.id, R), className: "opacity-0 group-hover:opacity-100 p-1 hover:bg-muted rounded transition-all absolute right-2 top-2", title: "Descartar", children: t.jsx(ss, { className: "h-3.5 w-3.5 text-muted-foreground" }) })] }, se.id))] }) : t.jsxs("div", { className: "px-4 py-8 text-center", children: [t.jsx(sr, { className: "h-8 w-8 text-green-500 mx-auto mb-2" }), t.jsx("div", { className: "text-sm text-muted-foreground", children: "Sin alertas activas" }), t.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Todo está funcionando correctamente" })] }) }) })] })] }), t.jsx("button", { onClick: u, className: "rounded-lg p-2 transition-colors hover:bg-accent", title: c === "dark" ? "Modo claro" : "Modo oscuro", children: c === "dark" ? t.jsx(Pi, { className: "h-5 w-5" }) : t.jsx(wu, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "relative", ref: _, children: [t.jsxs("button", { onClick: () => w(!S), className: "flex items-center gap-3 border-l border-border pl-4 ml-2 hover:bg-accent/50 rounded-lg pr-2 py-1 transition-colors", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground", children: t.jsx(vs, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "text-sm text-left", children: [t.jsx("div", { className: "font-medium", children: n == null ? void 0 : n.name }), t.jsx("div", { className: "text-xs text-muted-foreground capitalize", children: n == null ? void 0 : n.role })] })] }), t.jsx(Uu, { className: V("h-4 w-4 text-muted-foreground transition-transform", S && "rotate-180") })] }), S && t.jsxs("div", { className: "absolute right-0 top-full mt-2 w-56 rounded-xl border border-border bg-card shadow-lg overflow-hidden", children: [t.jsxs("div", { className: "px-4 py-3 border-b border-border", children: [t.jsx("div", { className: "font-medium text-sm", children: n == null ? void 0 : n.name }), t.jsx("div", { className: "text-xs text-muted-foreground", children: n == null ? void 0 : n.email })] }), t.jsxs("div", { className: "py-1", children: [t.jsxs("button", { onClick: () => { w(!1), l("/settings"); }, className: "flex w-full items-center gap-3 px-4 py-2.5 text-sm hover:bg-accent transition-colors", children: [t.jsx(gc, { className: "h-4 w-4 text-muted-foreground" }), "Configuración"] }), t.jsxs("button", { onClick: u, className: "flex w-full items-center gap-3 px-4 py-2.5 text-sm hover:bg-accent transition-colors", children: [c === "dark" ? t.jsx(Pi, { className: "h-4 w-4 text-muted-foreground" }) : t.jsx(wu, { className: "h-4 w-4 text-muted-foreground" }), c === "dark" ? "Modo claro" : "Modo oscuro"] })] }), t.jsx("div", { className: "border-t border-border py-1", children: t.jsxs("button", { onClick: pe, className: "flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-500/10 transition-colors", children: [t.jsx(pN, { className: "h-4 w-4" }), "Cerrar sesión"] }) })] })] })] })] }); }
const I2 = ["/tasks", "/projects"];
function W2() { const l = bc(c => c.sidebarOpen), n = Wy(), i = I2.some(c => n.pathname === c || n.pathname.startsWith(`${c}/`)); return t.jsxs("div", { className: "flex h-screen overflow-hidden bg-background", children: [t.jsx(j2, {}), t.jsxs("div", { className: V("flex flex-1 flex-col transition-all duration-300", l ? "ml-64" : "ml-16"), children: [t.jsx(P2, {}), t.jsx("main", { className: V("main-content flex-1 overflow-auto", i ? "p-3" : "p-6"), children: t.jsx(ev, {}) })] })] }); }
function e4() { const l = ft(), n = bs(g => g.login), [i, c] = M.useState(""), [u, m] = M.useState(""), [h, f] = M.useState(""), [p, v] = M.useState(!1), j = async (g) => { var b, N; g.preventDefault(), f(""), v(!0); try {
    const { data: S } = await qg.login(i, u);
    S.token && S.user ? (n(S.user, S.token), l("/dashboard")) : f(S.message || "Error de autenticación");
}
catch (S) {
    f(((N = (b = S.response) == null ? void 0 : b.data) == null ? void 0 : N.message) || "Error de conexión");
}
finally {
    v(!1);
} }; return t.jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-accent/20", children: t.jsxs("div", { className: "w-full max-w-md space-y-8 rounded-xl border border-border bg-card p-8 shadow-xl", children: [t.jsxs("div", { className: "text-center", children: [t.jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full solaria-gradient", children: t.jsx(Pi, { className: "h-10 w-10 text-white" }) }), t.jsx("h1", { className: "mt-4 text-2xl font-bold", children: "SOLARIA DFO" }), t.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Digital Field Operations" })] }), t.jsxs("form", { onSubmit: j, className: "mt-8 space-y-4", children: [h && t.jsx("div", { className: "rounded-lg bg-destructive/10 p-3 text-sm text-destructive", children: h }), t.jsxs("div", { children: [t.jsx("label", { htmlFor: "username", className: "block text-sm font-medium mb-2", children: "Usuario" }), t.jsx("input", { id: "username", type: "text", value: i, onChange: g => c(g.target.value), className: "w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", placeholder: "Ingresa tu usuario", autoComplete: "username", required: !0 })] }), t.jsxs("div", { children: [t.jsx("label", { htmlFor: "password", className: "block text-sm font-medium mb-2", children: "Contraseña" }), t.jsx("input", { id: "password", type: "password", value: u, onChange: g => m(g.target.value), className: "w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", placeholder: "Ingresa tu contraseña", autoComplete: "current-password", required: !0 })] }), t.jsx("button", { type: "submit", disabled: p, className: "w-full rounded-lg solaria-gradient py-2.5 font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50", children: p ? t.jsxs("span", { className: "flex items-center justify-center gap-2", children: [t.jsx(xe, { className: "h-4 w-4 animate-spin" }), "Ingresando..."] }) : "Ingresar" })] }), t.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "© 2024-2025 SOLARIA AGENCY" })] }) }); }
function Li({ title: l, value: n, icon: i, iconClass: c, onClick: u }) { return t.jsxs("div", { onClick: u, className: `stat-card ${u ? "cursor-pointer" : ""}`, title: u ? `Ver ${l.toLowerCase()}` : void 0, children: [t.jsx("div", { className: `stat-icon ${c}`, children: t.jsx(i, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: l }), t.jsx("div", { className: "stat-value", children: n })] })] }); }
function t4({ task: l, onClick: n }) { return t.jsxs("div", { className: "completed-task-item", onClick: n, children: [t.jsx("div", { className: "task-check-icon", style: { background: "rgba(34, 197, 94, 0.15)", color: "#22c55e" }, children: t.jsx(Te, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "task-content", children: [t.jsxs("div", { className: "task-title-row", children: [t.jsx("span", { className: "text-xs font-mono bg-muted px-1.5 py-0.5 rounded mr-2", children: l.taskCode || `#${l.taskNumber}` }), t.jsx("span", { className: "task-title", children: l.title })] }), t.jsxs("div", { className: "task-meta", children: [l.projectName && t.jsxs("span", { className: "task-meta-item", children: [t.jsx(Vu, { className: "h-3 w-3" }), l.projectName] }), t.jsxs("span", { className: "task-meta-item", children: [t.jsx(De, { className: "h-3 w-3" }), Qe(l.completedAt || l.updatedAt)] })] })] })] }); }
function s4({ project: l, onClick: n }) { const i = l.status === "completed" ? "low" : l.status === "development" ? "high" : "medium", c = l.tasksTotal || 0, u = l.tasksCompleted || 0, m = c > 0 ? Math.round(u / c * 100) : l.progress || 0; return t.jsxs("div", { className: "completed-task-item", onClick: n, style: { cursor: "pointer" }, children: [t.jsx("div", { className: "task-check-icon", style: { background: "rgba(59, 130, 246, 0.15)", color: "#60a5fa" }, children: t.jsx(Vu, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "task-content", children: [t.jsxs("div", { className: "task-title-row", children: [t.jsx("span", { className: "task-title", children: l.name }), t.jsx("span", { className: `task-priority-badge ${i}`, children: l.status || "activo" })] }), t.jsxs("div", { className: "task-meta", children: [t.jsxs("span", { className: "task-meta-item", children: [t.jsx(xc, { className: "h-3 w-3" }), c, " tareas"] }), t.jsxs("span", { className: "task-meta-item", children: [t.jsx(Te, { className: "h-3 w-3" }), m, "%"] })] })] })] }); }
function a4({ task: l, onClick: n }) { const i = l.priority === "high" || l.priority === "critical" ? "high" : l.priority === "medium" ? "medium" : "low"; return t.jsxs("div", { className: "completed-task-item", onClick: n, style: { cursor: "pointer" }, children: [t.jsx("div", { className: "task-check-icon", style: { background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" }, children: t.jsx(Gg, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "task-content", children: [t.jsxs("div", { className: "task-title-row", children: [t.jsx("span", { className: "text-xs font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded mr-2 font-semibold", children: l.taskCode || `#${l.taskNumber}` }), t.jsx("span", { className: "task-title", children: l.title }), t.jsx("span", { className: `task-priority-badge ${i}`, children: l.priority || "normal" })] }), t.jsxs("div", { className: "task-meta", children: [t.jsxs("span", { className: "task-meta-item", children: [t.jsx(De, { className: "h-3 w-3" }), Qe(l.createdAt)] }), l.projectName && t.jsxs("span", { className: "task-meta-item", children: [t.jsx(Vu, { className: "h-3 w-3" }), l.projectName] })] })] })] }); }
function nu() { return t.jsxs("div", { className: "feed-loading", children: [t.jsx(xe, { className: "h-5 w-5 animate-spin" }), t.jsx("p", { children: "Cargando..." })] }); }
function ru({ icon: l, message: n }) { return t.jsxs("div", { className: "feed-empty", children: [t.jsx(l, { className: "h-8 w-8" }), t.jsx("p", { children: n })] }); }
function l4() { const l = ft(), { data: n, isLoading: i } = N2(), { data: c, isLoading: u } = fr(), { data: m, isLoading: h } = xr({}), [f, p] = M.useState([]), [v, j] = M.useState([]); M.useEffect(() => { if (m) {
    const N = new Date;
    N.setDate(N.getDate() - 7);
    const S = m.filter(C => new Date(C.createdAt) >= N).slice(0, 10), w = m.filter(C => C.status === "completed").sort((C, T) => { const D = new Date(C.completedAt || C.updatedAt); return new Date(T.completedAt || T.updatedAt).getTime() - D.getTime(); }).slice(0, 15).map(C => { const T = c == null ? void 0 : c.find(D => D.id === C.projectId); return { ...C, projectName: T == null ? void 0 : T.name }; });
    p(S), j(w);
} }, [m, c]); const g = () => l("/projects"), b = N => l(`/projects/${N}`); return t.jsxs("div", { className: "space-y-6", children: [t.jsx("div", { className: "section-header", children: t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Dashboard" }), t.jsx("p", { className: "section-subtitle", children: "Vista ejecutiva del estado de operaciones" })] }) }), t.jsxs("div", { className: "dashboard-stats-row", children: [t.jsx(Li, { title: "Proyectos Activos", value: i ? "-" : (n == null ? void 0 : n.activeProjects) || (c == null ? void 0 : c.length) || 0, icon: va, iconClass: "projects", onClick: g }), t.jsx(Li, { title: "Tareas Completadas", value: i ? "-" : (n == null ? void 0 : n.completedTasks) || 0, icon: Te, iconClass: "tasks" }), t.jsx(Li, { title: "En Progreso", value: i ? "-" : (n == null ? void 0 : n.inProgressTasks) || 0, icon: De, iconClass: "active" }), t.jsx(Li, { title: "Agentes Activos", value: i ? "-" : (n == null ? void 0 : n.activeAgents) || 0, icon: Gs, iconClass: "agents" })] }), t.jsxs("div", { className: "dashboard-grid", children: [t.jsxs("div", { className: "completed-tasks-widget", children: [t.jsxs("div", { className: "widget-header", children: [t.jsxs("div", { className: "widget-header-left", children: [t.jsx("div", { className: "widget-icon success", children: t.jsx(nN, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "widget-title", children: "Tareas Completadas" }), t.jsx("div", { className: "widget-subtitle", children: "Feed global en tiempo real" })] })] }), t.jsxs("button", { onClick: () => l("/tasks/archived"), className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-muted hover:bg-accent rounded-lg transition-colors", children: [t.jsx(xs, { className: "h-3.5 w-3.5" }), "Ver todas"] })] }), t.jsx("div", { className: "completed-tasks-feed", children: h ? t.jsx(nu, {}) : v.length > 0 ? v.map(N => t.jsx(t4, { task: N, onClick: () => N.projectId && b(N.projectId) }, N.id)) : t.jsx(ru, { icon: Te, message: "No hay tareas completadas todavia" }) })] }), t.jsxs("div", { className: "completed-tasks-widget", children: [t.jsx("div", { className: "widget-header", children: t.jsxs("div", { className: "widget-header-left", children: [t.jsx("div", { className: "widget-icon info", children: t.jsx(va, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "widget-title", children: "Proyectos Recientes" }), t.jsx("div", { className: "widget-subtitle", children: "Actividad de proyectos" })] })] }) }), t.jsx("div", { className: "completed-tasks-feed", children: u ? t.jsx(nu, {}) : c && c.length > 0 ? c.slice(0, 5).map(N => t.jsx(s4, { project: N, onClick: () => b(N.id) }, N.id)) : t.jsx(ru, { icon: va, message: "No hay proyectos" }) })] }), t.jsxs("div", { className: "completed-tasks-widget", children: [t.jsxs("div", { className: "widget-header", children: [t.jsxs("div", { className: "widget-header-left", children: [t.jsx("div", { className: "widget-icon warning", children: t.jsx(Gg, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "widget-title", children: "Nuevas Tareas por Proyecto" }), t.jsx("div", { className: "widget-subtitle", children: "Ultimos 7 dias" })] })] }), t.jsx("div", { className: "widget-badge", children: f.length })] }), t.jsx("div", { className: "completed-tasks-feed", children: h ? t.jsx(nu, {}) : f.length > 0 ? f.map(N => t.jsx(a4, { task: N, onClick: () => N.projectId && b(N.projectId) }, N.id)) : t.jsx(ru, { icon: pt, message: "No hay tareas nuevas esta semana" }) })] })] })] }); }
const Wi = { planning: { label: "Planificacion", color: "#7c3aed" }, active: { label: "Desarrollo", color: "#0891b2" }, paused: { label: "Pausado", color: "#f59e0b" }, completed: { label: "Produccion", color: "#16a34a" }, cancelled: { label: "Cancelado", color: "#ef4444" } };
function n4({ board: l }) { const i = (c, u) => { const m = Math.min(c, 8); return Array.from({ length: 8 }, (h, f) => t.jsx("div", { className: V("trello-slot", f < m && `filled ${u}`) }, f)); }; return t.jsxs("div", { className: "mini-trello", children: [t.jsxs("div", { className: "trello-column backlog", children: [t.jsxs("div", { className: "trello-column-header", children: ["BACKLOG (", l.backlog, ")"] }), t.jsx("div", { className: "trello-slots", children: i(l.backlog, "backlog") })] }), t.jsxs("div", { className: "trello-column todo", children: [t.jsxs("div", { className: "trello-column-header", children: ["TODO (", l.todo, ")"] }), t.jsx("div", { className: "trello-slots", children: i(l.todo, "todo") })] }), t.jsxs("div", { className: "trello-column doing", children: [t.jsxs("div", { className: "trello-column-header", children: ["DOING (", l.doing, ")"] }), t.jsx("div", { className: "trello-slots", children: i(l.doing, "doing") })] }), t.jsxs("div", { className: "trello-column done", children: [t.jsxs("div", { className: "trello-column-header", children: ["DONE (", l.done, ")"] }), t.jsx("div", { className: "trello-slots", children: i(l.done, "done") })] })] }); }
function r4({ status: l }) { const n = ["planning", "active", "paused", "completed"], i = l === "completed" ? 3 : l === "paused" ? 2 : l === "active" ? 1 : 0; return t.jsx("div", { className: "progress-segments", children: n.map((c, u) => t.jsx("div", { className: V("progress-segment", u <= i ? c : "inactive") }, c)) }); }
function i4({ project: l, board: n, onClick: i }) { const c = Wi[l.status] || Wi.planning, u = l.tasksTotal || 0, m = l.tasksCompleted || 0, h = u - m, f = l.budgetAllocated ? l.budgetAllocated >= 1e3 ? `$${(l.budgetAllocated / 1e3).toFixed(0)}K` : `$${l.budgetAllocated}` : "-"; return t.jsxs("div", { className: "project-card", onClick: i, children: [t.jsxs("div", { className: "project-header", children: [t.jsx("div", { className: "project-icon-wrapper", children: t.jsx(va, { className: "project-icon" }) }), t.jsxs("div", { className: "project-title-group", children: [t.jsx("h3", { className: "project-name", children: l.name }), t.jsx("span", { className: "project-code", children: l.code })] }), t.jsx("button", { className: "project-edit-btn", onClick: p => { p.stopPropagation(); }, title: "Editar proyecto", children: t.jsx(rt, { className: "h-4 w-4" }) })] }), t.jsxs("div", { className: "project-tags", children: [t.jsx("span", { className: "project-tag", style: { backgroundColor: `${c.color}20`, color: c.color }, children: c.label }), l.priority && t.jsx("span", { className: V("project-tag", l.priority === "critical" && "red", l.priority === "high" && "orange", l.priority === "medium" && "yellow", l.priority === "low" && "green"), children: l.priority })] }), t.jsx(n4, { board: n }), t.jsx(r4, { status: l.status }), t.jsxs("div", { className: "project-stats", children: [t.jsxs("div", { className: "stat-item", children: [t.jsx("div", { className: "stat-icon blue", children: t.jsx(Te, { className: "h-3 w-3" }) }), t.jsx("div", { className: "stat-value", children: u }), t.jsx("div", { className: "stat-label", children: "Tareas" })] }), t.jsxs("div", { className: "stat-item", children: [t.jsx("div", { className: "stat-icon yellow", children: t.jsx(De, { className: "h-3 w-3" }) }), t.jsx("div", { className: "stat-value", children: h }), t.jsx("div", { className: "stat-label", children: "Pend." })] }), t.jsxs("div", { className: "stat-item", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx(Te, { className: "h-3 w-3" }) }), t.jsx("div", { className: "stat-value", children: m }), t.jsx("div", { className: "stat-label", children: "Compl." })] }), t.jsxs("div", { className: "stat-item", children: [t.jsx("div", { className: "stat-icon orange", children: t.jsx(Ji, { className: "h-3 w-3" }) }), t.jsx("div", { className: "stat-value", children: f }), t.jsx("div", { className: "stat-label", children: "Budget" })] }), t.jsxs("div", { className: "stat-item", children: [t.jsx("div", { className: "stat-icon purple", children: t.jsx(Ig, { className: "h-3 w-3" }) }), t.jsx("div", { className: "stat-value", children: l.activeAgents || 0 }), t.jsx("div", { className: "stat-label", children: "Agentes" })] }), t.jsxs("div", { className: "stat-item", children: [t.jsx("div", { className: "stat-icon indigo", children: t.jsx(gt, { className: "h-3 w-3" }) }), t.jsx("div", { className: "stat-value", children: l.endDate ? Qt(l.endDate) : "-" }), t.jsx("div", { className: "stat-label", children: "Entrega" })] })] })] }); }
function c4({ project: l, onClick: n }) { const i = Wi[l.status] || Wi.planning, c = l.tasksTotal || 0, u = l.tasksCompleted || 0, m = c - u, h = l.progress || 0, f = l.budgetAllocated ? l.budgetAllocated >= 1e3 ? `$${(l.budgetAllocated / 1e3).toFixed(0)}K` : `$${l.budgetAllocated}` : "-"; return t.jsxs("tr", { onClick: n, className: "project-row", children: [t.jsx("td", { children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "project-icon-sm", children: t.jsx(va, { className: "h-4 w-4" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "project-name-sm", children: l.name }), t.jsx("div", { className: "project-code-sm", children: l.code })] })] }) }), t.jsx("td", { children: t.jsx("span", { className: "phase-badge", style: { backgroundColor: `${i.color}20`, color: i.color }, children: i.label }) }), t.jsx("td", { className: "text-center", children: t.jsx("span", { className: "stat-blue", children: c }) }), t.jsx("td", { className: "text-center", children: t.jsx("span", { className: "stat-yellow", children: m }) }), t.jsx("td", { className: "text-center", children: t.jsx("span", { className: "stat-green", children: u }) }), t.jsx("td", { className: "text-center", children: t.jsx("span", { className: "stat-orange", children: f }) }), t.jsx("td", { className: "text-center", children: t.jsx("span", { className: "stat-purple", children: l.activeAgents || 0 }) }), t.jsx("td", { className: "text-center", children: t.jsx("span", { className: "stat-indigo", children: l.endDate ? Qt(l.endDate) : "-" }) }), t.jsxs("td", { className: "text-center", children: [t.jsx("div", { className: "progress-bar-sm", children: t.jsx("div", { className: "progress-fill", style: { width: `${h}%` } }) }), t.jsxs("span", { className: "progress-text", children: [h, "%"] })] })] }); }
function o4() { const { projectId: l } = wa(), n = ft(), { data: i, isLoading: c } = fr(), { data: u } = xr({}), [m, h] = M.useState("grid"), [f, p] = M.useState("name"), v = (i || []).reduce((b, N) => { const S = (u || []).filter(w => w.projectId === N.id); return b[N.id] = { backlog: S.filter(w => w.status === "blocked").length, todo: S.filter(w => w.status === "pending").length, doing: S.filter(w => w.status === "in_progress" || w.status === "review").length, done: S.filter(w => w.status === "completed").length }, b; }, {}), j = [...i || []].sort((b, N) => { switch (f) {
    case "name": return b.name.localeCompare(N.name);
    case "deadline": return new Date(b.endDate || 0).getTime() - new Date(N.endDate || 0).getTime();
    case "budget": return (N.budgetAllocated || 0) - (b.budgetAllocated || 0);
    case "completion": return (N.progress || 0) - (b.progress || 0);
    case "status": return b.status.localeCompare(N.status);
    default: return 0;
} }), g = b => { n(`/projects/${b}`); }; if (c)
    return t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }); if (l) {
    const b = i == null ? void 0 : i.find(N => N.id === parseInt(l));
    if (b)
        return t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { className: "section-header", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: b.name }), t.jsxs("p", { className: "section-subtitle", children: [b.code, " - ", b.description] })] }), t.jsx("button", { onClick: () => n("/projects"), className: "btn-secondary", children: "Volver" })] }), t.jsx("div", { className: "bg-card border border-border rounded-xl p-6", children: t.jsx("p", { className: "text-muted-foreground", children: "Vista detallada del proyecto (en desarrollo)" }) })] });
} return t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { className: "section-header", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Proyectos" }), t.jsxs("p", { className: "section-subtitle", children: [(i == null ? void 0 : i.length) || 0, " proyectos en el pipeline"] })] }), t.jsxs("div", { className: "section-actions", children: [t.jsxs("div", { className: "sort-buttons", children: [t.jsx("button", { className: V("sort-btn", f === "name" && "active"), onClick: () => p("name"), children: "NOMBRE" }), t.jsx("button", { className: V("sort-btn", f === "deadline" && "active"), onClick: () => p("deadline"), children: "FECHA" }), t.jsx("button", { className: V("sort-btn", f === "budget" && "active"), onClick: () => p("budget"), children: "$$$" }), t.jsx("button", { className: V("sort-btn", f === "completion" && "active"), onClick: () => p("completion"), children: "%" }), t.jsx("button", { className: V("sort-btn", f === "status" && "active"), onClick: () => p("status"), children: "FASE" })] }), t.jsxs("div", { className: "view-toggle", children: [t.jsx("button", { className: V("view-toggle-btn", m === "grid" && "active"), onClick: () => h("grid"), title: "Vista Grid", children: t.jsx(Fl, { className: "h-4 w-4" }) }), t.jsx("button", { className: V("view-toggle-btn", m === "list" && "active"), onClick: () => h("list"), title: "Vista Lista", children: t.jsx(ur, { className: "h-4 w-4" }) })] })] })] }), m === "grid" ? t.jsxs("div", { className: "projects-grid", children: [j.map(b => t.jsx(i4, { project: b, board: v[b.id] || { backlog: 0, todo: 0, doing: 0, done: 0, blocked: 0 }, onClick: () => g(b.id) }, b.id)), j.length === 0 && t.jsxs("div", { className: "col-span-full py-12 text-center text-muted-foreground", children: [t.jsx(pt, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), t.jsx("p", { children: "No hay proyectos todavia" })] })] }) : t.jsxs("div", { className: "project-card", style: { padding: 0, overflow: "hidden" }, children: [t.jsxs("table", { className: "list-table", children: [t.jsx("thead", { children: t.jsxs("tr", { children: [t.jsx("th", { style: { width: "22%" }, children: "Proyecto" }), t.jsx("th", { style: { width: "12%" }, children: "Fase" }), t.jsx("th", { style: { width: "8%", textAlign: "center" }, children: "Tareas" }), t.jsx("th", { style: { width: "8%", textAlign: "center" }, children: "Pend." }), t.jsx("th", { style: { width: "8%", textAlign: "center" }, children: "Compl." }), t.jsx("th", { style: { width: "10%", textAlign: "center" }, children: "Budget" }), t.jsx("th", { style: { width: "8%", textAlign: "center" }, children: "Agentes" }), t.jsx("th", { style: { width: "12%", textAlign: "center" }, children: "Entrega" }), t.jsx("th", { style: { width: "12%", textAlign: "center" }, children: "Progreso" })] }) }), t.jsx("tbody", { children: j.map(b => t.jsx(c4, { project: b, onClick: () => g(b.id) }, b.id)) })] }), j.length === 0 && t.jsxs("div", { className: "py-12 text-center text-muted-foreground", children: [t.jsx(pt, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), t.jsx("p", { children: "No hay proyectos todavia" })] })] })] }); }
function Il({ isOpen: l, onClose: n, title: i, children: c, maxWidth: u = "max-w-xl", className: m }) { const h = M.useCallback(f => { f.key === "Escape" && n(); }, [n]); return M.useEffect(() => (l && (document.addEventListener("keydown", h), document.body.style.overflow = "hidden"), () => { document.removeEventListener("keydown", h), document.body.style.overflow = "unset"; }), [l, h]), l ? t.jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4", onClick: f => { f.target === f.currentTarget && n(); }, children: t.jsxs("div", { className: V("bg-card rounded-2xl border border-border w-full max-h-[90vh] overflow-y-auto", u, m), children: [i && t.jsxs("div", { className: "p-6 border-b border-border flex items-center justify-between sticky top-0 bg-card z-10", children: [t.jsx("h2", { className: "text-xl font-bold text-foreground", children: i }), t.jsx("button", { onClick: n, className: "p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors", children: t.jsx(ss, { className: "h-5 w-5" }) })] }), !i && t.jsx("button", { onClick: n, className: "absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors z-10", children: t.jsx(ss, { className: "h-5 w-5" }) }), c] }) }) : null; }
const d4 = [{ key: "backlog", alt: "blocked", label: "BL", fullLabel: "BLOQUEADO", color: "#ef4444" }, { key: "todo", alt: "pending", label: "PH", fullLabel: "POR HACER", color: "#f59e0b" }, { key: "doing", alt: "in_progress", label: "EP", fullLabel: "EN PROGRESO", color: "#3b82f6" }, { key: "done", alt: "completed", label: "OK", fullLabel: "COMPLETADAS", color: "#22c55e" }], Hp = 8;
function u4({ label: l, fullLabel: n, count: i, color: c, showLabel: u = !0, showCount: m = !0, compact: h = !1 }) { const f = Math.min(i, Hp), p = []; for (let v = 0; v < Hp; v++) {
    const j = v < f;
    p.push(t.jsx("div", { className: V("trello-slot", j && "filled"), style: j ? { background: c, borderColor: "transparent" } : void 0 }, v));
} return t.jsxs("div", { className: "trello-column", children: [u && t.jsx("span", { className: "trello-label", children: h ? l : n }), t.jsx("div", { className: "trello-slots", children: p }), m && t.jsx("span", { className: "trello-count", children: i })] }); }
function m4({ board: l, showLabels: n = !0, showCounts: i = !0, compact: c = !1, className: u }) { const m = h => { const f = l[h.key] ?? 0, p = l[h.alt] ?? 0; return f || p; }; return t.jsx("div", { className: V("mini-trello", c && "compact", u), children: d4.map(h => t.jsx(u4, { label: h.label, fullLabel: h.fullLabel, count: m(h), color: h.color, showLabel: n, showCount: i, compact: c }, h.key)) }); }
const b0 = M.createContext(null);
function h4() { return M.useContext(b0); }
function yc({ open: l, onOpenChange: n, children: i }) { const c = M.useRef(null), u = M.useId(); M.useEffect(() => { const f = c.current; if (f)
    return l ? (f.showModal(), document.body.style.overflow = "hidden") : (f.close(), document.body.style.overflow = ""), () => { document.body.style.overflow = ""; }; }, [l]); const m = f => { f.target === c.current && n(!1); }, h = f => { f.key === "Escape" && n(!1); }; return l ? t.jsx(b0.Provider, { value: { dialogId: u }, children: t.jsx("dialog", { ref: c, onClick: m, onKeyDown: h, "aria-labelledby": `${u}-title`, "aria-describedby": `${u}-description`, className: V("fixed inset-0 z-50 m-0 h-full w-full max-h-full max-w-full", "bg-black/80 backdrop:bg-transparent", "p-4 md:p-6 lg:p-8", "flex items-center justify-center", "open:animate-in open:fade-in-0", "overflow-y-auto"), children: i }) }) : null; }
function vc({ children: l, className: n }) { return t.jsx("div", { role: "document", className: V("relative w-full max-w-lg max-h-[90vh]", "bg-background border border-border rounded-lg shadow-lg", "overflow-hidden", "animate-in fade-in-0 zoom-in-95", n), onClick: i => i.stopPropagation(), children: l }); }
function jc({ children: l, className: n }) { return t.jsx("div", { className: V("flex flex-col space-y-1.5 p-6 pb-4", n), children: l }); }
function Nc({ children: l, className: n }) { const i = h4(); return t.jsx("h2", { id: i ? `${i.dialogId}-title` : void 0, className: V("text-lg font-semibold leading-none tracking-tight", n), children: l }); }
function wc({ onClose: l, label: n = "Cerrar" }) { return t.jsxs("button", { onClick: l, "aria-label": n, className: V("absolute right-4 top-4 rounded-sm opacity-70", "ring-offset-background transition-opacity", "hover:opacity-100", "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", "disabled:pointer-events-none"), children: [t.jsx(ss, { className: "h-4 w-4", "aria-hidden": "true" }), t.jsx("span", { className: "sr-only", children: n })] }); }
function Sc({ children: l, className: n }) { return t.jsx("div", { className: V("px-6 pb-6 overflow-y-auto", n), children: l }); }
function kc({ children: l, className: n }) { return t.jsx("div", { className: V("flex justify-end gap-2 p-6 pt-4 border-t border-border", n), children: l }); }
const f4 = { open: { label: "Abierto", bg: "bg-blue-500/10", color: "text-blue-600", icon: Vs }, in_progress: { label: "En Progreso", bg: "bg-purple-500/10", color: "text-purple-600", icon: ar }, completed: { label: "Completado", bg: "bg-green-500/10", color: "text-green-600", icon: Te }, cancelled: { label: "Cancelado", bg: "bg-red-500/10", color: "text-red-600", icon: Vs } }, x4 = { critical: { label: "Crítico", color: "text-red-500" }, high: { label: "Alto", color: "text-orange-500" }, medium: { label: "Medio", color: "text-yellow-500" }, low: { label: "Bajo", color: "text-blue-500" } };
function y0({ epicId: l, isOpen: n, onClose: i, onTaskClick: c }) { const u = n && l !== null && l > 0, { data: m, isLoading: h } = Q2(u ? l : null), f = m == null ? void 0 : m.epic, p = (m == null ? void 0 : m.tasks) || [], v = f ? f4[f.status] : null, j = (f == null ? void 0 : f.tasksCount) || (f == null ? void 0 : f.tasks_count) || 0, g = (f == null ? void 0 : f.tasksCompleted) || (f == null ? void 0 : f.tasks_completed) || 0, b = j > 0 ? Math.round(g / j * 100) : 0, S = (() => { if (!(f != null && f.startDate) || !(f != null && f.targetDate))
    return null; const w = new Date(f.startDate).getTime(), C = new Date(f.targetDate).getTime(), T = Date.now(); return T < w ? 0 : T > C ? 100 : Math.round((T - w) / (C - w) * 100); })(); return t.jsx(yc, { open: n, onOpenChange: i, children: t.jsxs(vc, { className: "max-w-2xl max-h-[85vh] flex flex-col", children: [t.jsx(wc, { onClose: i }), u ? h ? t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : f ? t.jsxs(t.Fragment, { children: [t.jsx(jc, { children: t.jsxs("div", { className: "flex items-start gap-3 pr-8", children: [t.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg", style: { backgroundColor: f.color ? `${f.color}20` : "hsl(var(--muted))" }, children: t.jsx(ja, { className: "h-5 w-5", style: { color: f.color || "hsl(var(--muted-foreground))" } }) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx(Nc, { className: "text-base", children: f.name }), t.jsxs("div", { className: "flex items-center gap-2 mt-1 text-xs text-muted-foreground", children: [t.jsx(fc, { className: "h-3 w-3" }), t.jsxs("span", { className: "font-mono", children: ["EPIC-", String(f.id).padStart(3, "0")] }), t.jsx("span", { className: "text-border", children: "|" }), t.jsx("span", { children: f.projectName || f.project_name || f.projectCode || f.project_code })] })] })] }) }), t.jsxs(Sc, { className: "flex-1 overflow-y-auto space-y-4", children: [t.jsxs("div", { className: "flex items-center gap-4 text-sm flex-wrap", children: [v && t.jsxs("div", { className: V("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium", v.bg, v.color), children: [t.jsx(v.icon, { className: "h-3 w-3" }), t.jsx("span", { children: v.label })] }), f.status === "in_progress" && t.jsx("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500 text-white animate-pulse", children: "ACTIVO" }), t.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [t.jsx(Ql, { className: "h-3 w-3" }), t.jsxs("span", { children: [g, "/", j, " tareas"] })] })] }), (f.startDate || f.targetDate) && t.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-4 space-y-3", children: [t.jsxs("div", { className: "flex items-center justify-between text-sm", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx(gt, { className: "h-4 w-4 text-muted-foreground" }), t.jsx("span", { className: "font-medium", children: "Timeline" })] }), S !== null && t.jsxs("span", { className: "text-xs text-muted-foreground", children: [S, "% del tiempo transcurrido"] })] }), t.jsxs("div", { className: "flex items-center gap-3 text-xs", children: [t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx(De, { className: "h-3 w-3 text-muted-foreground" }), t.jsxs("span", { children: ["Inicio: ", f.startDate ? Qt(f.startDate) : "-"] })] }), t.jsx("span", { className: "text-muted-foreground", children: "→" }), t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx(ja, { className: "h-3 w-3 text-muted-foreground" }), t.jsxs("span", { children: ["Meta: ", f.targetDate ? Qt(f.targetDate) : "-"] })] })] }), t.jsxs("div", { className: "space-y-1", children: [t.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: t.jsx("div", { className: "h-full rounded-full transition-all", style: { width: `${b}%`, backgroundColor: f.color || "hsl(var(--primary))" } }) }), t.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [t.jsxs("span", { children: ["Progreso: ", b, "%"] }), t.jsxs("span", { children: [g, " completadas"] })] })] })] }), f.description && t.jsxs("div", { className: "space-y-2", children: [t.jsx("h4", { className: "text-sm font-medium", children: "Descripción" }), t.jsx("div", { className: "rounded-lg border border-border bg-muted/30 p-4", children: t.jsx("pre", { className: "whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed", children: f.description }) })] }), p.length > 0 && t.jsxs("div", { className: "space-y-2", children: [t.jsxs("h4", { className: "text-sm font-medium flex items-center gap-2", children: [t.jsx(Ql, { className: "h-4 w-4" }), "Tareas del Epic (", p.length, ")"] }), t.jsx("div", { className: "space-y-2 max-h-60 overflow-y-auto", children: p.map(w => { const C = x4[w.priority], T = w.status === "completed"; return t.jsxs("div", { onClick: () => c == null ? void 0 : c(w.id), className: V("flex items-center justify-between p-3 rounded-lg border border-border bg-card transition-colors", c && "cursor-pointer hover:bg-muted/50", T && "opacity-60"), children: [t.jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [T ? t.jsx(Te, { className: "h-4 w-4 text-green-500 flex-shrink-0" }) : t.jsx(Vs, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx("div", { className: V("text-sm font-medium truncate", T && "line-through"), children: w.title }), t.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [C && t.jsx("span", { className: C.color, children: C.label }), w.estimatedHours && t.jsxs(t.Fragment, { children: [t.jsx("span", { children: "•" }), t.jsxs("span", { children: [w.estimatedHours, "h est."] })] })] })] })] }), t.jsxs("div", { className: "text-xs text-muted-foreground", children: [w.progress, "%"] })] }, w.id); }) })] })] }), t.jsx(kc, { children: t.jsx("button", { onClick: i, className: V("px-4 py-2 rounded-md text-sm font-medium", "border border-border bg-background", "hover:bg-muted transition-colors"), children: "Cerrar" }) })] }) : t.jsx("div", { className: "py-12 text-center text-muted-foreground", children: "Epic no encontrado" }) : t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) })] }) }); }
const p4 = { planned: { label: "Planificado", bg: "bg-blue-500/10", color: "text-blue-600", icon: Vs }, active: { label: "Activo", bg: "bg-green-500/10", color: "text-green-600", icon: ar }, completed: { label: "Completado", bg: "bg-gray-500/10", color: "text-gray-600", icon: Te }, cancelled: { label: "Cancelado", bg: "bg-red-500/10", color: "text-red-600", icon: Vs } }, g4 = { critical: { label: "Crítico", color: "text-red-500" }, high: { label: "Alto", color: "text-orange-500" }, medium: { label: "Medio", color: "text-yellow-500" }, low: { label: "Bajo", color: "text-blue-500" } };
function b4({ sprintId: l, isOpen: n, onClose: i, onTaskClick: c }) { const u = n && l !== null && l > 0, { data: m, isLoading: h } = X2(u ? l : null), f = m == null ? void 0 : m.sprint, p = (m == null ? void 0 : m.tasks) || [], v = f ? p4[f.status] : null, j = (f == null ? void 0 : f.tasksCount) || (f == null ? void 0 : f.tasks_count) || 0, g = (f == null ? void 0 : f.tasksCompleted) || (f == null ? void 0 : f.tasks_completed) || 0, b = j > 0 ? Math.round(g / j * 100) : 0, S = (() => { if (!(f != null && f.endDate))
    return null; const T = new Date(f.endDate).getTime(), D = Date.now(); return Math.ceil((T - D) / (1e3 * 60 * 60 * 24)); })(), C = (() => { if (!(f != null && f.startDate) || !(f != null && f.endDate))
    return null; const T = new Date(f.startDate).getTime(), D = new Date(f.endDate).getTime(), O = Date.now(); return O < T ? 0 : O > D ? 100 : Math.round((O - T) / (D - T) * 100); })(); return t.jsx(yc, { open: n, onOpenChange: i, children: t.jsxs(vc, { className: "max-w-2xl max-h-[85vh] flex flex-col", children: [t.jsx(wc, { onClose: i }), u ? h ? t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : f ? t.jsxs(t.Fragment, { children: [t.jsx(jc, { children: t.jsxs("div", { className: "flex items-start gap-3 pr-8", children: [t.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10", children: t.jsx(js, { className: "h-5 w-5 text-green-600" }) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx(Nc, { className: "text-base", children: f.name }), t.jsxs("div", { className: "flex items-center gap-2 mt-1 text-xs text-muted-foreground", children: [t.jsx(fc, { className: "h-3 w-3" }), t.jsxs("span", { className: "font-mono", children: ["SPRINT-", String(f.id).padStart(3, "0")] }), t.jsx("span", { className: "text-border", children: "|" }), t.jsx("span", { children: f.projectName || f.project_name || f.projectCode || f.project_code })] })] })] }) }), t.jsxs(Sc, { className: "flex-1 overflow-y-auto space-y-4", children: [t.jsxs("div", { className: "flex items-center gap-4 text-sm flex-wrap", children: [v && t.jsxs("div", { className: V("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium", v.bg, v.color), children: [t.jsx(v.icon, { className: "h-3 w-3" }), t.jsx("span", { children: v.label })] }), f.status === "active" && t.jsx("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500 text-white animate-pulse", children: "ACTIVO" }), t.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [t.jsx(Ql, { className: "h-3 w-3" }), t.jsxs("span", { children: [g, "/", j, " tareas"] })] }), S !== null && f.status === "active" && t.jsxs("div", { className: V("flex items-center gap-1.5", S < 0 ? "text-red-500" : S <= 3 ? "text-orange-500" : "text-muted-foreground"), children: [t.jsx(kN, { className: "h-3 w-3" }), t.jsx("span", { children: S < 0 ? `${Math.abs(S)}d vencido` : `${S}d restantes` })] })] }), t.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [f.velocity !== null && f.velocity !== void 0 && t.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-3 text-center", children: [t.jsxs("div", { className: "flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1", children: [t.jsx(el, { className: "h-3 w-3" }), "Velocidad"] }), t.jsx("div", { className: "text-lg font-semibold", children: f.velocity }), t.jsx("div", { className: "text-xs text-muted-foreground", children: "puntos" })] }), f.capacity !== null && f.capacity !== void 0 && t.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-3 text-center", children: [t.jsxs("div", { className: "flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1", children: [t.jsx(De, { className: "h-3 w-3" }), "Capacidad"] }), t.jsx("div", { className: "text-lg font-semibold", children: f.capacity }), t.jsx("div", { className: "text-xs text-muted-foreground", children: "horas" })] }), (f.totalEstimatedHours ?? f.total_estimated_hours) !== null && t.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-3 text-center", children: [t.jsxs("div", { className: "flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1", children: [t.jsx(ja, { className: "h-3 w-3" }), "Estimado"] }), t.jsx("div", { className: "text-lg font-semibold", children: f.totalEstimatedHours || f.total_estimated_hours }), t.jsx("div", { className: "text-xs text-muted-foreground", children: "horas" })] })] }), (f.startDate || f.endDate) && t.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-4 space-y-3", children: [t.jsxs("div", { className: "flex items-center justify-between text-sm", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx(gt, { className: "h-4 w-4 text-muted-foreground" }), t.jsx("span", { className: "font-medium", children: "Timeline" })] }), C !== null && t.jsxs("span", { className: "text-xs text-muted-foreground", children: [C, "% del tiempo transcurrido"] })] }), t.jsxs("div", { className: "flex items-center gap-3 text-xs", children: [t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx(De, { className: "h-3 w-3 text-muted-foreground" }), t.jsxs("span", { children: ["Inicio: ", f.startDate ? Qt(f.startDate) : "-"] })] }), t.jsx("span", { className: "text-muted-foreground", children: "→" }), t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx(ja, { className: "h-3 w-3 text-muted-foreground" }), t.jsxs("span", { children: ["Fin: ", f.endDate ? Qt(f.endDate) : "-"] })] })] }), t.jsxs("div", { className: "space-y-1", children: [t.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: t.jsx("div", { className: "h-full rounded-full bg-green-500 transition-all", style: { width: `${b}%` } }) }), t.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [t.jsxs("span", { children: ["Progreso: ", b, "%"] }), t.jsxs("span", { children: [g, " completadas"] })] })] })] }), f.goal && t.jsxs("div", { className: "space-y-2", children: [t.jsxs("h4", { className: "text-sm font-medium flex items-center gap-2", children: [t.jsx(ja, { className: "h-4 w-4" }), "Meta del Sprint"] }), t.jsx("div", { className: "rounded-lg border border-border bg-muted/30 p-4", children: t.jsx("pre", { className: "whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed", children: f.goal }) })] }), p.length > 0 && t.jsxs("div", { className: "space-y-2", children: [t.jsxs("h4", { className: "text-sm font-medium flex items-center gap-2", children: [t.jsx(Ql, { className: "h-4 w-4" }), "Backlog del Sprint (", p.length, ")"] }), t.jsx("div", { className: "space-y-2 max-h-60 overflow-y-auto", children: p.map(T => { const D = g4[T.priority], O = T.status === "completed"; return t.jsxs("div", { onClick: () => c == null ? void 0 : c(T.id), className: V("flex items-center justify-between p-3 rounded-lg border border-border bg-card transition-colors", c && "cursor-pointer hover:bg-muted/50", O && "opacity-60"), children: [t.jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [O ? t.jsx(Te, { className: "h-4 w-4 text-green-500 flex-shrink-0" }) : t.jsx(Vs, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx("div", { className: V("text-sm font-medium truncate", O && "line-through"), children: T.title }), t.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [D && t.jsx("span", { className: D.color, children: D.label }), T.estimatedHours && t.jsxs(t.Fragment, { children: [t.jsx("span", { children: "•" }), t.jsxs("span", { children: [T.estimatedHours, "h est."] })] })] })] })] }), t.jsxs("div", { className: "text-xs text-muted-foreground", children: [T.progress, "%"] })] }, T.id); }) })] })] }), t.jsx(kc, { children: t.jsx("button", { onClick: i, className: V("px-4 py-2 rounded-md text-sm font-medium", "border border-border bg-background", "hover:bg-muted transition-colors"), children: "Cerrar" }) })] }) : t.jsx("div", { className: "py-12 text-center text-muted-foreground", children: "Sprint no encontrado" }) : t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) })] }) }); }
function y4({ epics: l, sprints: n, projectId: i, onEpicClick: c, onSprintClick: u }) { const m = ft(), h = l.find(b => b.status === "in_progress"), f = n.find(b => b.status === "active"), p = l.filter(b => b.status === "open").sort((b, N) => !b.startDate && !N.startDate ? 0 : b.startDate ? N.startDate ? new Date(b.startDate).getTime() - new Date(N.startDate).getTime() : -1 : 1).slice(0, 2), v = n.filter(b => b.status === "planned").sort((b, N) => !b.startDate && !N.startDate ? 0 : b.startDate ? N.startDate ? new Date(b.startDate).getTime() - new Date(N.startDate).getTime() : -1 : 1).slice(0, 2), j = b => { if (!b)
    return null; const N = new Date(b).getTime(), S = Date.now(); return Math.ceil((N - S) / (1e3 * 60 * 60 * 24)); }, g = h || f || p.length > 0 || v.length > 0; return t.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [t.jsxs("div", { className: "flex items-center justify-between mb-3", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2", children: [t.jsx(el, { className: "h-4 w-4 text-solaria" }), "Roadmap"] }), t.jsxs("button", { onClick: () => m(`/projects/${i}/roadmap`), className: "text-xs text-muted-foreground hover:text-solaria transition-colors flex items-center gap-1", children: ["Ver timeline", t.jsx(Sa, { className: "h-3 w-3" })] })] }), g ? t.jsxs("div", { className: "space-y-3", children: [f && t.jsxs("div", { onClick: () => u == null ? void 0 : u(f.id), className: "p-2.5 rounded-lg bg-green-500/10 border border-green-500/30 cursor-pointer hover:bg-green-500/20 transition-colors", children: [t.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [t.jsx(js, { className: "h-3.5 w-3.5 text-green-400 animate-pulse" }), t.jsx("span", { className: "text-green-400 font-medium text-xs", children: "SPRINT ACTIVO" })] }), t.jsx("p", { className: "text-sm font-medium text-foreground mt-1 truncate", children: f.name }), f.endDate && t.jsxs("div", { className: "flex items-center gap-2 mt-1.5 text-xs text-muted-foreground", children: [t.jsx(De, { className: "h-3 w-3" }), (() => { const b = j(f.endDate); return b === null ? "Sin fecha fin" : b < 0 ? t.jsxs("span", { className: "text-red-400", children: [Math.abs(b), "d vencido"] }) : b <= 3 ? t.jsxs("span", { className: "text-orange-400", children: [b, "d restantes"] }) : `${b}d restantes`; })()] })] }), h && t.jsxs("div", { onClick: () => c == null ? void 0 : c(h.id), className: "p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 cursor-pointer hover:bg-purple-500/20 transition-colors", children: [t.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [t.jsx(ja, { className: "h-3.5 w-3.5 text-purple-400 animate-pulse" }), t.jsx("span", { className: "text-purple-400 font-medium text-xs", children: "EPIC ACTIVO" })] }), t.jsx("p", { className: "text-sm font-medium text-foreground mt-1 truncate", children: h.name }), h.targetDate && t.jsxs("div", { className: "flex items-center gap-2 mt-1.5 text-xs text-muted-foreground", children: [t.jsx(gt, { className: "h-3 w-3" }), "Meta: ", new Date(h.targetDate).toLocaleDateString("es-ES")] })] }), (v.length > 0 || p.length > 0) && t.jsxs("div", { className: "pt-2 border-t border-border", children: [t.jsx("p", { className: "text-[10px] font-semibold uppercase text-muted-foreground tracking-wider mb-2", children: "Próximos" }), t.jsxs("div", { className: "space-y-1.5", children: [v.map(b => t.jsxs("div", { onClick: () => u == null ? void 0 : u(b.id), className: "flex items-center gap-2 p-1.5 rounded bg-secondary/50 cursor-pointer hover:bg-secondary transition-colors", children: [t.jsx(js, { className: "h-3 w-3 text-muted-foreground" }), t.jsx("span", { className: "text-xs text-foreground truncate flex-1", children: b.name }), b.startDate && t.jsx("span", { className: "text-[10px] text-muted-foreground", children: new Date(b.startDate).toLocaleDateString("es-ES", { month: "short", day: "numeric" }) })] }, b.id)), p.map(b => t.jsxs("div", { onClick: () => c == null ? void 0 : c(b.id), className: "flex items-center gap-2 p-1.5 rounded bg-secondary/50 cursor-pointer hover:bg-secondary transition-colors", children: [t.jsx("div", { className: "w-2.5 h-2.5 rounded-full", style: { backgroundColor: b.color || "#6366f1" } }), t.jsx("span", { className: "text-xs text-foreground truncate flex-1", children: b.name }), b.startDate && t.jsx("span", { className: "text-[10px] text-muted-foreground", children: new Date(b.startDate).toLocaleDateString("es-ES", { month: "short", day: "numeric" }) })] }, b.id))] })] })] }) : t.jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "Sin epics o sprints activos" })] }); }
const v4 = { plan: Pa, spec: Lu, report: Hu, manual: Bu, adr: Xu, roadmap: Pa, audit: mr, other: dr }, j4 = { plan: "Plan", spec: "Spec", report: "Reporte", manual: "Manual", adr: "ADR", roadmap: "Roadmap", audit: "Auditoria", other: "Otro" }, N4 = { plan: "text-blue-400 bg-blue-500/10", spec: "text-purple-400 bg-purple-500/10", report: "text-green-400 bg-green-500/10", manual: "text-orange-400 bg-orange-500/10", adr: "text-yellow-400 bg-yellow-500/10", roadmap: "text-cyan-400 bg-cyan-500/10", audit: "text-red-400 bg-red-500/10", other: "text-gray-400 bg-gray-500/10" };
function w4({ projectId: l, onDocumentClick: n }) { const i = ft(), { data: c, isLoading: u } = g0(l), m = (c == null ? void 0 : c.documents) || [], h = m.find(p => p.type === "plan"), f = m.filter(p => p.type !== "plan").slice(0, 3); return t.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [t.jsxs("div", { className: "flex items-center justify-between mb-3", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2", children: [t.jsx(Fa, { className: "h-4 w-4 text-solaria" }), "Documentacion"] }), t.jsxs("button", { onClick: () => i(`/projects/${l}/docs`), className: "text-xs text-muted-foreground hover:text-solaria transition-colors flex items-center gap-1", children: ["Ver todo", t.jsx(Sa, { className: "h-3 w-3" })] })] }), u ? t.jsx("div", { className: "flex items-center justify-center py-4", children: t.jsx("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-solaria border-t-transparent" }) }) : m.length === 0 ? t.jsxs("div", { className: "text-center py-4", children: [t.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Sin documentos" }), t.jsxs("button", { onClick: () => i(`/projects/${l}/docs?new=true`), className: "text-xs text-solaria hover:underline flex items-center gap-1 mx-auto", children: [t.jsx(rt, { className: "h-3 w-3" }), "Crear plan de desarrollo"] })] }) : t.jsxs("div", { className: "space-y-2", children: [h && t.jsx("div", { onClick: () => (n == null ? void 0 : n(h.id)) || i(`/projects/${l}/docs?doc=${h.id}`), className: "p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 cursor-pointer hover:bg-blue-500/20 transition-colors", children: t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx(Pa, { className: "h-4 w-4 text-blue-400" }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: h.name }), t.jsxs("p", { className: "text-xs text-muted-foreground", children: ["v", h.version, " - Plan de desarrollo"] })] })] }) }), f.length > 0 && t.jsx("div", { className: "space-y-1.5", children: f.map(p => { const v = v4[p.type], j = N4[p.type]; return t.jsxs("div", { onClick: () => (n == null ? void 0 : n(p.id)) || i(`/projects/${l}/docs?doc=${p.id}`), className: "flex items-center gap-2 p-1.5 rounded bg-secondary/50 cursor-pointer hover:bg-secondary transition-colors", children: [t.jsx("div", { className: `p-1 rounded ${j}`, children: t.jsx(v, { className: "h-3 w-3" }) }), t.jsx("span", { className: "text-xs text-foreground truncate flex-1", children: p.name }), t.jsx("span", { className: "text-[10px] text-muted-foreground", children: j4[p.type] })] }, p.id); }) }), m.length > 4 && t.jsxs("button", { onClick: () => i(`/projects/${l}/docs`), className: "w-full text-center text-xs text-muted-foreground hover:text-solaria py-1", children: ["+", m.length - 4, " documentos mas"] })] })] }); }
function S4({ project: l, metrics: n, onClick: i }) { var c; return t.jsxs("div", { onClick: i, className: "bg-card rounded-xl border border-border p-4 sm:p-6 cursor-pointer hover:bg-secondary/30 transition-colors", title: "Click para ver informacion completa del proyecto", children: [t.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 sm:gap-6", children: [t.jsx("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-solaria to-solaria-dark flex items-center justify-center shrink-0", children: t.jsx(Qu, { className: "text-white h-8 w-8 sm:h-10 sm:w-10" }) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-2 flex-wrap", children: [t.jsx("span", { className: "px-2 py-0.5 rounded text-xs bg-blue-500/20 text-blue-400 uppercase", children: "SAAS" }), t.jsx("span", { className: "px-2 py-0.5 rounded text-xs bg-purple-500/20 text-purple-400 uppercase", children: "REACT" }), t.jsx("span", { className: "px-2 py-0.5 rounded text-xs bg-green-500/20 text-green-400 uppercase", children: "B2B" })] }), t.jsx("p", { className: "text-muted-foreground text-sm line-clamp-2", children: l.description || "Sin descripcion" }), t.jsxs("div", { className: "flex items-center gap-2 mt-2 text-sm text-muted-foreground", children: [t.jsx("span", { className: "text-solaria", children: "●" }), t.jsx("span", { children: ((c = l.client) == null ? void 0 : c.name) || "Sin cliente" })] })] }), t.jsx("div", { className: "hidden sm:flex items-start", children: t.jsx(Gt, { className: "h-5 w-5 text-muted-foreground" }) })] }), t.jsxs("div", { className: "mt-4 pt-4 border-t border-border", children: [t.jsxs("div", { className: "flex items-center justify-between mb-2", children: [t.jsx("span", { className: "text-sm text-muted-foreground", children: "Fase" }), t.jsx("span", { className: V("px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide", l.status === "development" ? "bg-solaria/20 text-solaria border border-solaria/30" : l.status === "planning" ? "bg-violet-500/20 text-violet-400 border border-violet-500/30" : l.status === "completed" || l.status === "deployment" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : l.status === "on_hold" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : l.status === "testing" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "bg-gray-500/20 text-gray-400 border border-gray-500/30"), children: l.status === "development" ? "Desarrollo" : l.status === "planning" ? "Planificacion" : l.status === "completed" || l.status === "deployment" ? "Produccion" : l.status === "on_hold" ? "Pausado" : l.status === "testing" ? "Testing" : l.status })] }), t.jsxs("div", { className: "flex gap-1 mt-2", children: [t.jsx("div", { className: V("flex-1 h-2 rounded-full transition-colors", l.status === "planning" ? "bg-violet-500" : "bg-solaria") }), t.jsx("div", { className: V("flex-1 h-2 rounded-full transition-colors", ["active", "development", "testing", "deployment", "completed"].includes(l.status) ? "bg-solaria" : "bg-secondary") }), t.jsx("div", { className: V("flex-1 h-2 rounded-full transition-colors", ["testing", "deployment", "completed"].includes(l.status) ? "bg-blue-500" : "bg-secondary") }), t.jsx("div", { className: V("flex-1 h-2 rounded-full transition-colors", ["deployment", "completed"].includes(l.status) ? "bg-emerald-500" : "bg-secondary") })] }), t.jsxs("div", { className: "flex justify-between text-xs mt-1.5", children: [t.jsx("span", { className: V("font-medium", l.status === "planning" ? "text-violet-400" : "text-muted-foreground"), children: "PLAN" }), t.jsx("span", { className: V("font-medium", ["active", "development"].includes(l.status) ? "text-solaria" : "text-muted-foreground"), children: "DEV" }), t.jsx("span", { className: V("font-medium", l.status === "testing" ? "text-blue-400" : "text-muted-foreground"), children: "TEST" }), t.jsx("span", { className: V("font-medium", ["completed", "production"].includes(l.status) ? "text-emerald-400" : "text-muted-foreground"), children: "PROD" })] })] }), t.jsxs("div", { className: "grid grid-cols-4 gap-2 mt-4", children: [t.jsxs("div", { className: "text-center p-2 rounded-lg bg-secondary/50", children: [t.jsxs("p", { className: "text-lg font-bold text-foreground", children: ["$", Math.round((l.budgetAllocated || 0) / 1e3), "K"] }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Presupuesto" })] }), t.jsxs("div", { className: "text-center p-2 rounded-lg bg-secondary/50", children: [t.jsx("p", { className: "text-lg font-bold text-foreground", children: n.total }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Tareas" })] }), t.jsxs("div", { className: "text-center p-2 rounded-lg bg-secondary/50", children: [t.jsxs("p", { className: "text-lg font-bold text-green-400", children: [n.progress, "%"] }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Completado" })] }), t.jsxs("div", { className: "text-center p-2 rounded-lg bg-secondary/50", children: [t.jsxs("p", { className: V("text-lg font-bold", n.daysRemaining < 0 ? "text-red-400" : "text-foreground"), children: [n.daysRemaining, "d"] }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Restantes" })] })] })] }); }
function k4({ metrics: l, tasksByStatus: n, onClick: i }) { return t.jsxs("div", { onClick: i, className: "bg-card rounded-xl border border-border p-4 cursor-pointer hover:bg-secondary/30 transition-colors", title: "Click para gestionar tareas", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [t.jsx(Te, { className: "h-4 w-4 text-solaria" }), "TAREAS", t.jsx(Gt, { className: "h-3 w-3 text-muted-foreground ml-auto" })] }), t.jsxs("div", { className: "grid grid-cols-4 gap-2 mb-4", children: [t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-xl font-bold text-foreground", children: l.total }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Total" })] }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-xl font-bold text-yellow-400", children: l.pending }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Pend" })] }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-xl font-bold text-blue-400", children: l.inProgress }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Doing" })] }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-xl font-bold text-green-400", children: l.completed }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Done" })] })] }), t.jsx(m4, { board: n, showLabels: !0, showCounts: !0, compact: !1 })] }); }
function C4({ project: l, onClick: n }) { const i = [l.productionUrl && { label: "Produccion", url: l.productionUrl }, l.stagingUrl && { label: "Staging", url: l.stagingUrl }, l.localUrl && { label: "Local", url: l.localUrl }, l.repoUrl && { label: "Repo", url: l.repoUrl }].filter(Boolean); return t.jsxs("div", { onClick: n, className: "bg-card rounded-xl border border-border p-4 cursor-pointer hover:bg-secondary/30 transition-colors", title: "Click para gestionar URLs", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [t.jsx(Yu, { className: "h-4 w-4 text-solaria" }), "DIRECCIONES", t.jsx(Gt, { className: "h-3 w-3 text-muted-foreground ml-auto" })] }), i.length > 0 ? t.jsxs("div", { className: "space-y-2", children: [i.slice(0, 3).map((c, u) => t.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground truncate", children: [t.jsx(Gt, { className: "h-3 w-3 shrink-0" }), t.jsxs("span", { className: "text-xs text-solaria", children: [c.label, ":"] }), t.jsx("span", { className: "truncate", children: c.url })] }, u)), i.length > 3 && t.jsxs("p", { className: "text-xs text-solaria", children: ["+", i.length - 3, " mas..."] })] }) : t.jsx("p", { className: "text-sm text-muted-foreground", children: "No hay URLs configuradas" })] }); }
function A4({ activities: l }) { const n = l.slice(0, 5), i = c => c.includes("complete") || c.includes("done") ? t.jsx(Te, { className: "h-4 w-4 text-green-400" }) : c.includes("create") || c.includes("new") ? t.jsx(rt, { className: "h-4 w-4 text-blue-400" }) : c.includes("update") || c.includes("edit") ? t.jsx(lr, { className: "h-4 w-4 text-yellow-400" }) : t.jsx(De, { className: "h-4 w-4 text-muted-foreground" }); return t.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [t.jsx(De, { className: "h-4 w-4 text-solaria" }), "Actividad"] }), n.length > 0 ? t.jsx("div", { className: "space-y-3", children: n.map(c => t.jsxs("div", { className: "flex items-start gap-3", children: [i(c.action), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx("p", { className: "text-sm text-foreground truncate", children: c.description || c.action }), t.jsx("p", { className: "text-xs text-muted-foreground", children: Qe(c.createdAt) })] })] }, c.id)) }) : t.jsx("p", { className: "text-sm text-muted-foreground", children: "Sin actividad reciente" })] }); }
function T4({ notes: l, onAddNote: n }) { const [i, c] = M.useState(""), u = m => { m.preventDefault(), i.trim() && (n(i.trim()), c("")); }; return t.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [t.jsx(Fa, { className: "h-4 w-4 text-solaria" }), "Notas", t.jsx("span", { className: "text-xs text-muted-foreground font-normal", children: "(Agentes leen)" })] }), t.jsxs("form", { onSubmit: u, className: "flex gap-2 mb-3", children: [t.jsx("input", { type: "text", value: i, onChange: m => c(m.target.value), placeholder: "Escribe una nota...", className: "flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-solaria" }), t.jsx("button", { type: "submit", disabled: !i.trim(), className: V("p-2 rounded-lg transition-colors", i.trim() ? "bg-solaria text-white hover:bg-solaria-dark" : "bg-secondary text-muted-foreground cursor-not-allowed"), children: t.jsx(vN, { className: "h-4 w-4" }) })] }), l.length > 0 ? t.jsx("div", { className: "space-y-2 max-h-32 overflow-y-auto", children: l.map((m, h) => t.jsx("div", { className: "p-2 rounded bg-secondary/50 text-sm text-foreground", children: m }, h)) }) : t.jsx("p", { className: "text-sm text-muted-foreground", children: "Sin notas" })] }); }
function E4({ epics: l, onCreateEpic: n, onDeleteEpic: i, onEpicClick: c }) { const [u, m] = M.useState(!1), [h, f] = M.useState(""), p = M.useMemo(() => l.length === 0 ? 1 : Math.max(...l.map(N => N.epicNumber || 0)) + 1, [l]), v = `EPIC${String(p).padStart(3, "0")}`, j = () => { f(v), m(!0); }, g = () => { h.trim() && (n(h.trim()), f(""), m(!1)); }; return t.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [t.jsx(ja, { className: "h-4 w-4 text-purple-400" }), "Epics", t.jsxs("span", { className: "text-xs text-muted-foreground font-normal ml-auto", children: [l.length, " total"] })] }), l.filter(b => b.status === "in_progress").map(b => t.jsxs("div", { onClick: () => c == null ? void 0 : c(b.id), className: "mb-3 p-2 rounded-lg bg-purple-500/15 border border-purple-500/40 cursor-pointer hover:bg-purple-500/25 transition-colors", children: [t.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [t.jsx("div", { className: "w-3 h-3 rounded-full shrink-0 animate-pulse ring-2 ring-purple-400/50", style: { backgroundColor: b.color || "#6366f1" } }), t.jsx("span", { className: "text-purple-400 font-medium", children: "En progreso:" }), t.jsx("span", { className: "text-foreground flex-1 truncate", children: b.name }), b.sprintNumber && t.jsxs("span", { className: "text-[9px] px-1 py-0.5 rounded bg-yellow-500/20 text-yellow-400 font-mono", children: ["SP", String(b.sprintNumber).padStart(2, "0")] })] }), b.tasksTotal !== void 0 && b.tasksTotal > 0 && t.jsx("div", { className: "mt-1.5", children: t.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [t.jsx("div", { className: "flex-1 h-1.5 bg-purple-900/30 rounded-full overflow-hidden", children: t.jsx("div", { className: "h-full bg-purple-500 rounded-full transition-all", style: { width: `${b.tasksTotal > 0 ? (b.tasksCompleted || 0) / b.tasksTotal * 100 : 0}%` } }) }), t.jsxs("span", { className: "text-[10px] text-purple-400 font-mono", children: [b.tasksCompleted || 0, "/", b.tasksTotal] })] }) })] }, `active-${b.id}`)), t.jsxs("div", { className: "space-y-2 mb-3 max-h-40 overflow-y-auto", children: [l.filter(b => b.status !== "in_progress").map(b => t.jsxs("div", { onClick: () => c == null ? void 0 : c(b.id), className: "flex items-center gap-2 p-2 rounded-lg bg-secondary/50 group cursor-pointer hover:bg-secondary/80 transition-colors", children: [t.jsx("div", { className: "w-3 h-3 rounded-full shrink-0", style: { backgroundColor: b.color || "#6366f1" } }), t.jsxs("span", { className: "flex-1 text-sm text-foreground truncate", children: ["EPIC", String(b.epicNumber).padStart(2, "0"), ": ", b.name] }), b.sprintNumber && t.jsxs("span", { className: "text-[9px] px-1 py-0.5 rounded bg-yellow-500/20 text-yellow-400 font-mono", children: ["SP", String(b.sprintNumber).padStart(2, "0")] }), t.jsx("span", { className: V("text-xs px-1.5 py-0.5 rounded", b.status === "completed" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"), children: b.status }), t.jsx("button", { onClick: N => { N.stopPropagation(), i(b.id); }, className: "opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-all", children: t.jsx(hr, { className: "h-3 w-3" }) })] }, b.id)), l.length === 0 && t.jsx("p", { className: "text-sm text-muted-foreground text-center py-2", children: "Sin epics" })] }), u ? t.jsxs("div", { className: "flex gap-2", children: [t.jsx("input", { type: "text", value: h, onChange: b => f(b.target.value), placeholder: v, className: "flex-1 px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-purple-500 font-mono", autoFocus: !0, onKeyDown: b => b.key === "Enter" && g() }), t.jsx("button", { onClick: g, disabled: !h.trim(), className: "p-1.5 rounded-lg bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed", children: t.jsx(rt, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: () => { m(!1), f(""); }, className: "p-1.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground", children: t.jsx(ss, { className: "h-4 w-4" }) })] }) : t.jsxs("button", { onClick: j, className: "w-full py-1.5 rounded-lg border border-dashed border-border text-muted-foreground text-sm hover:border-purple-500 hover:text-purple-400 transition-colors flex items-center justify-center gap-2", children: [t.jsx(rt, { className: "h-4 w-4" }), "Crear Epic (", v, ")"] })] }); }
function M4({ sprints: l, onCreateSprint: n, onDeleteSprint: i, onSprintClick: c }) { const [u, m] = M.useState(!1), [h, f] = M.useState(""), p = M.useMemo(() => l.length === 0 ? 1 : Math.max(...l.map(S => S.sprintNumber || 0)) + 1, [l]), v = `SPRINT${String(p).padStart(3, "0")}`, j = () => { f(v), m(!0); }, g = () => { h.trim() && (n(h.trim()), f(""), m(!1)); }, b = l.find(N => N.status === "active"); return t.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [t.jsx(js, { className: "h-4 w-4 text-yellow-400" }), "Sprints", t.jsxs("span", { className: "text-xs text-muted-foreground font-normal ml-auto", children: [l.length, " total"] })] }), b && t.jsxs("div", { onClick: () => c == null ? void 0 : c(b.id), className: "mb-3 p-2 rounded-lg bg-yellow-500/15 border border-yellow-500/40 cursor-pointer hover:bg-yellow-500/25 transition-colors", children: [t.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [t.jsx(js, { className: "h-4 w-4 text-yellow-400 animate-pulse" }), t.jsx("span", { className: "text-yellow-400 font-medium", children: "En progreso:" }), t.jsx("span", { className: "text-foreground flex-1 truncate", children: b.name }), b.phaseType && b.phaseType !== "custom" && t.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-yellow-500/30 text-yellow-300 uppercase font-medium", children: b.phaseType })] }), t.jsxs("div", { className: "flex items-center gap-3 mt-1.5", children: [b.endDate && t.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [t.jsx(tN, { className: "h-3 w-3" }), "Termina: ", new Date(b.endDate).toLocaleDateString("es-ES")] }), b.epicsCount !== void 0 && b.epicsCount > 0 && t.jsxs("span", { className: "text-xs text-purple-400 flex items-center gap-1", children: [t.jsx(ja, { className: "h-3 w-3" }), b.epicsCount, " epic", b.epicsCount !== 1 ? "s" : ""] })] }), b.tasksTotal !== void 0 && b.tasksTotal > 0 && t.jsx("div", { className: "mt-2", children: t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "flex-1 h-1.5 bg-yellow-900/30 rounded-full overflow-hidden", children: t.jsx("div", { className: "h-full bg-yellow-500 rounded-full transition-all", style: { width: `${b.tasksTotal > 0 ? (b.tasksCompleted || 0) / b.tasksTotal * 100 : 0}%` } }) }), t.jsxs("span", { className: "text-[10px] text-yellow-400 font-mono", children: [b.tasksCompleted || 0, "/", b.tasksTotal] })] }) })] }), t.jsxs("div", { className: "space-y-2 mb-3 max-h-32 overflow-y-auto", children: [l.filter(N => N.id !== (b == null ? void 0 : b.id)).map(N => t.jsxs("div", { onClick: () => c == null ? void 0 : c(N.id), className: "flex items-center gap-2 p-2 rounded-lg bg-secondary/50 group cursor-pointer hover:bg-secondary/80 transition-colors", children: [t.jsxs("span", { className: "text-xs font-mono text-muted-foreground", children: ["SP", String(N.sprintNumber).padStart(2, "0")] }), t.jsx("span", { className: "flex-1 text-sm text-foreground truncate", children: N.name }), N.phaseType && N.phaseType !== "custom" && t.jsx("span", { className: "text-[9px] px-1 py-0.5 rounded bg-blue-500/20 text-blue-400 uppercase", children: N.phaseType }), N.epicsCount !== void 0 && N.epicsCount > 0 && t.jsxs("span", { className: "text-[9px] px-1 py-0.5 rounded bg-purple-500/20 text-purple-400", children: [N.epicsCount, "E"] }), t.jsx("span", { className: V("text-xs px-1.5 py-0.5 rounded", N.status === "completed" ? "bg-green-500/20 text-green-400" : N.status === "active" ? "bg-yellow-500/20 text-yellow-400" : "bg-gray-500/20 text-gray-400"), children: N.status }), t.jsx("button", { onClick: S => { S.stopPropagation(), i(N.id); }, className: "opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-all", children: t.jsx(hr, { className: "h-3 w-3" }) })] }, N.id)), l.length === 0 && t.jsx("p", { className: "text-sm text-muted-foreground text-center py-2", children: "Sin sprints" })] }), u ? t.jsxs("div", { className: "flex gap-2", children: [t.jsx("input", { type: "text", value: h, onChange: N => f(N.target.value), placeholder: v, className: "flex-1 px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-yellow-500 font-mono", autoFocus: !0, onKeyDown: N => N.key === "Enter" && g() }), t.jsx("button", { onClick: g, disabled: !h.trim(), className: "p-1.5 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed", children: t.jsx(rt, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: () => { m(!1), f(""); }, className: "p-1.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground", children: t.jsx(ss, { className: "h-4 w-4" }) })] }) : t.jsxs("button", { onClick: j, className: "w-full py-1.5 rounded-lg border border-dashed border-border text-muted-foreground text-sm hover:border-yellow-500 hover:text-yellow-400 transition-colors flex items-center justify-center gap-2", children: [t.jsx(rt, { className: "h-4 w-4" }), "Crear Sprint (", v, ")"] })] }); }
function D4({ project: l, isOpen: n, onClose: i, onEdit: c }) { var u; return t.jsxs(Il, { isOpen: n, onClose: i, title: "Informacion del Proyecto", maxWidth: "max-w-2xl", children: [t.jsxs("div", { className: "p-6 space-y-6", children: [t.jsxs("div", { className: "flex items-start gap-4", children: [t.jsx("div", { className: "w-16 h-16 rounded-xl bg-gradient-to-br from-solaria to-solaria-dark flex items-center justify-center", children: t.jsx(Qu, { className: "text-white h-8 w-8" }) }), t.jsxs("div", { className: "flex-1", children: [t.jsx("h2", { className: "text-xl font-bold text-foreground", children: l.name }), t.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: l.code })] })] }), t.jsxs("div", { children: [t.jsx("h4", { className: "text-sm font-medium text-muted-foreground mb-2", children: "Descripcion" }), t.jsx("p", { className: "text-foreground", children: l.description || "Sin descripcion" })] }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [t.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50", children: [t.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Cliente" }), t.jsx("p", { className: "text-foreground font-medium", children: ((u = l.client) == null ? void 0 : u.name) || "Sin cliente" })] }), t.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50", children: [t.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Presupuesto" }), t.jsxs("p", { className: "text-foreground font-medium", children: ["$", (l.budgetAllocated || 0).toLocaleString()] })] }), t.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50", children: [t.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Fecha Inicio" }), t.jsx("p", { className: "text-foreground font-medium", children: l.startDate ? new Date(l.startDate).toLocaleDateString("es-ES") : "No definida" })] }), t.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50", children: [t.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Deadline" }), t.jsx("p", { className: "text-foreground font-medium", children: l.endDate ? new Date(l.endDate).toLocaleDateString("es-ES") : "No definida" })] })] }), t.jsxs("div", { children: [t.jsx("h4", { className: "text-sm font-medium text-muted-foreground mb-2", children: "Stack Tecnico" }), t.jsxs("div", { className: "flex flex-wrap gap-2", children: [t.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400", children: "React 19" }), t.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400", children: "Node.js" }), t.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400", children: "PostgreSQL" }), t.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-orange-500/20 text-orange-400", children: "TailwindCSS" })] })] })] }), t.jsxs("div", { className: "p-6 border-t border-border flex justify-end gap-3", children: [t.jsx("button", { onClick: i, className: "px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors", children: "Cerrar" }), t.jsxs("button", { onClick: () => { i(), c(); }, className: "px-4 py-2 rounded-lg bg-solaria text-white hover:bg-solaria-dark transition-colors flex items-center gap-2", children: [t.jsx(lr, { className: "h-4 w-4" }), "Editar"] })] })] }); }
function _4({ project: l, isOpen: n, onClose: i, onSave: c }) { var S, w, C, T; const [u, m] = M.useState({ name: l.name, code: l.code || "", description: l.description || "", budgetAllocated: l.budgetAllocated || 0, startDate: ((S = l.startDate) == null ? void 0 : S.split("T")[0]) || "", endDate: ((w = l.endDate) == null ? void 0 : w.split("T")[0]) || "" }), h = u.code.length === 3 && u.code.toUpperCase() !== ((C = l.code) == null ? void 0 : C.toUpperCase()), { data: f, isLoading: p } = H2(h ? u.code : ""), v = u.code.length === 3 && /^[A-Za-z]{3}$/.test(u.code), j = u.code.toUpperCase() === ((T = l.code) == null ? void 0 : T.toUpperCase()), g = j || ((f == null ? void 0 : f.available) ?? !0), b = D => { const O = D.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 3); m({ ...u, code: O }); }, N = () => { !v || !j && !g || (c(u), i()); }; return t.jsxs(Il, { isOpen: n, onClose: i, title: "Editar Proyecto", children: [t.jsxs("div", { className: "p-6 space-y-4", children: [t.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [t.jsxs("div", { className: "col-span-2", children: [t.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Nombre" }), t.jsx("input", { type: "text", value: u.name, onChange: D => m({ ...u, name: D.target.value }), className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Codigo (3 letras)" }), t.jsxs("div", { className: "relative", children: [t.jsx("input", { type: "text", value: u.code, onChange: b, maxLength: 3, placeholder: "ABC", className: V("w-full px-3 py-2 rounded-lg bg-secondary border text-foreground font-mono text-center uppercase tracking-wider", !v && u.code.length > 0 ? "border-red-500" : v && !p && !j && g ? "border-green-500" : v && !p && !g ? "border-red-500" : "border-border") }), p && t.jsx("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground", children: "..." })] }), !v && u.code.length > 0 && t.jsx("p", { className: "text-xs text-red-400 mt-1", children: "Solo 3 letras A-Z" }), v && !j && !p && !g && t.jsx("p", { className: "text-xs text-red-400 mt-1", children: "Codigo en uso" }), v && !j && !p && g && t.jsx("p", { className: "text-xs text-green-400 mt-1", children: "Disponible ✓" })] })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Presupuesto" }), t.jsx("input", { type: "number", value: u.budgetAllocated, onChange: D => m({ ...u, budgetAllocated: Number(D.target.value) }), className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground" })] }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Fecha Inicio" }), t.jsx("input", { type: "date", value: u.startDate, onChange: D => m({ ...u, startDate: D.target.value }), className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Deadline" }), t.jsx("input", { type: "date", value: u.endDate, onChange: D => m({ ...u, endDate: D.target.value }), className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground" })] })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Descripcion" }), t.jsx("textarea", { value: u.description, onChange: D => m({ ...u, description: D.target.value }), rows: 4, className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground resize-none" })] })] }), t.jsxs("div", { className: "p-6 border-t border-border flex justify-end gap-3", children: [t.jsx("button", { onClick: i, className: "px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors", children: "Cancelar" }), t.jsx("button", { onClick: N, disabled: !v || !j && !g || p, className: V("px-4 py-2 rounded-lg transition-colors", !v || !j && !g || p ? "bg-secondary text-muted-foreground cursor-not-allowed" : "bg-solaria text-white hover:bg-solaria-dark"), children: "Guardar" })] })] }); }
function O4() { const { id: l } = wa(), n = ft(), i = Number(l), [c, u] = M.useState(!1), [m, h] = M.useState(!1), [f, p] = M.useState([]), [v, j] = M.useState(null), [g, b] = M.useState(null), { data: N, isLoading: S, error: w } = Pl(i), { data: C = [] } = Iu(i), { data: T = [] } = x0(i), { data: D = [] } = p0(i), { data: O = [] } = L2(i, 10), F = $u(), _ = V2(), J = G2(), U = K2(), K = Y2(), ie = M.useMemo(() => { const re = C.length, Se = C.filter(at => at.status === "pending").length, fe = C.filter(at => at.status === "in_progress").length, ae = C.filter(at => at.status === "completed").length, oe = re > 0 ? Math.round(ae / re * 100) : 0; let Ze = 0; if (N != null && N.endDate) {
    const at = new Date(N.endDate), Ue = new Date;
    Ze = Math.ceil((at.getTime() - Ue.getTime()) / (1e3 * 60 * 60 * 24));
} return { total: re, pending: Se, inProgress: fe, completed: ae, progress: oe, daysRemaining: Ze }; }, [C, N]), qe = M.useMemo(() => { const re = C.filter(oe => oe.status === "blocked").length, Se = C.filter(oe => oe.status === "pending").length, fe = C.filter(oe => oe.status === "in_progress" || oe.status === "review").length, ae = C.filter(oe => oe.status === "completed").length; return { backlog: re, todo: Se, doing: fe, done: ae }; }, [C]), pe = M.useCallback(() => { u(!0); }, []), ne = M.useCallback(() => { n(`/projects/${i}/tasks`); }, [n, i]), Ke = M.useCallback(() => { n(`/projects/${i}/links`); }, [n, i]), Re = M.useCallback(re => { p(Se => [re, ...Se]); }, []), se = M.useCallback(re => { F.mutate({ id: i, data: re }); }, [i, F]), R = M.useCallback(re => { _.mutate({ projectId: i, data: { name: re } }); }, [i, _]), $ = M.useCallback(re => { J.mutate({ id: re, projectId: i }); }, [i, J]), X = M.useCallback(re => { U.mutate({ projectId: i, data: { name: re } }); }, [i, U]), we = M.useCallback(re => { K.mutate({ id: re, projectId: i }); }, [i, K]); return S ? t.jsx("div", { className: "flex items-center justify-center h-64", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-solaria" }) }) : w || !N ? t.jsxs("div", { className: "flex flex-col items-center justify-center h-64 gap-4", children: [t.jsx(pt, { className: "h-12 w-12 text-red-500" }), t.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Proyecto no encontrado" }), t.jsxs("p", { className: "text-muted-foreground", children: ["El proyecto con ID ", i, " no existe o no tienes acceso."] }), t.jsxs("button", { onClick: () => n("/projects"), className: "px-4 py-2 rounded-lg bg-solaria text-white flex items-center gap-2", children: [t.jsx(ys, { className: "h-4 w-4" }), "Volver a Proyectos"] })] }) : t.jsxs("div", { className: "p-4 sm:p-6 space-y-4 sm:space-y-6", children: [t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: () => n("/projects"), className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Volver al listado", children: t.jsx(ys, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("h1", { className: "text-xl sm:text-2xl font-bold text-foreground", children: N.name }), t.jsx("p", { className: "text-sm text-muted-foreground", children: N.description })] })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsxs("button", { onClick: () => u(!0), className: "px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground flex items-center gap-2 transition-colors", children: [t.jsx(Yg, { className: "h-4 w-4" }), t.jsx("span", { className: "hidden sm:inline", children: "Info" })] }), t.jsx("button", { onClick: () => n(`/projects/${i}/settings`), className: "p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors", title: "Configuracion", children: t.jsx(gc, { className: "h-4 w-4" }) })] })] }), t.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6", children: [t.jsxs("div", { className: "lg:col-span-2 space-y-4 sm:space-y-6", children: [t.jsx(S4, { project: N, metrics: ie, onClick: pe }), t.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [t.jsx(k4, { metrics: ie, tasksByStatus: qe, onClick: ne }), t.jsx(C4, { project: N, onClick: Ke })] }), t.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [t.jsx(E4, { epics: T, onCreateEpic: R, onDeleteEpic: $, onEpicClick: j }), t.jsx(M4, { sprints: D, onCreateSprint: X, onDeleteSprint: we, onSprintClick: b })] })] }), t.jsxs("div", { className: "space-y-4 sm:space-y-6", children: [t.jsx(A4, { activities: O.map(re => ({ id: re.id, action: re.action, description: re.message || re.action, createdAt: re.createdAt })) }), t.jsx(T4, { notes: f, onAddNote: Re }), t.jsx(y4, { epics: T, sprints: D, projectId: i, onEpicClick: j, onSprintClick: b }), t.jsx(w4, { projectId: i })] })] }), t.jsx(D4, { project: N, isOpen: c, onClose: () => u(!1), onEdit: () => h(!0) }), t.jsx(_4, { project: N, isOpen: m, onClose: () => h(!1), onSave: se }), t.jsx(y0, { epicId: v, isOpen: v !== null, onClose: () => j(null) }), t.jsx(b4, { sprintId: g, isOpen: g !== null, onClose: () => b(null) })] }); }
function z4({ item: l, onComplete: n, disabled: i = !1, showDragHandle: c = !1 }) { const [u, m] = M.useState(!1), [h, f] = M.useState(!1), [p, v] = M.useState(""), [j, g] = M.useState(l.estimatedMinutes || 0), b = async () => { if (!(l.isCompleted || i || u)) {
    if (!h && l.estimatedMinutes) {
        f(!0);
        return;
    }
    m(!0);
    try {
        await n(l.id, p || void 0, j || void 0);
    }
    finally {
        m(!1), f(!1);
    }
} }, N = async () => { if (!(l.isCompleted || i || u)) {
    m(!0);
    try {
        await n(l.id);
    }
    finally {
        m(!1);
    }
} }; return t.jsxs("div", { className: V("task-item-row", l.isCompleted && "completed"), children: [c && t.jsx("div", { className: "task-item-handle", children: t.jsx(hN, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: N, disabled: l.isCompleted || i || u, className: V("task-item-checkbox", l.isCompleted && "checked", u && "loading"), children: u ? t.jsx(xe, { className: "h-3 w-3 animate-spin" }) : l.isCompleted ? t.jsx(Vl, { className: "h-3 w-3" }) : null }), t.jsxs("div", { className: "task-item-content", children: [t.jsx("span", { className: V("task-item-title", l.isCompleted && "completed"), children: l.title }), l.description && t.jsx("span", { className: "task-item-description", children: l.description }), h && !l.isCompleted && t.jsxs("div", { className: "task-item-complete-form", children: [t.jsx("input", { type: "number", value: j, onChange: S => g(Number(S.target.value)), placeholder: "Minutos reales", className: "task-item-minutes-input", min: 0 }), t.jsx("input", { type: "text", value: p, onChange: S => v(S.target.value), placeholder: "Notas (opcional)", className: "task-item-notes-input" }), t.jsx("button", { onClick: b, disabled: u, className: "task-item-complete-btn", children: u ? t.jsx(xe, { className: "h-3 w-3 animate-spin" }) : "Completar" }), t.jsx("button", { onClick: () => f(!1), className: "task-item-cancel-btn", children: "Cancelar" })] })] }), t.jsx("div", { className: "task-item-time", children: l.isCompleted && l.completedAt ? t.jsxs("span", { className: "task-item-completed-at", children: [t.jsx(Vl, { className: "h-3 w-3" }), Qe(l.completedAt)] }) : l.estimatedMinutes ? t.jsxs("span", { className: "task-item-estimate", children: [t.jsx(De, { className: "h-3 w-3" }), l.estimatedMinutes, "m"] }) : null })] }); }
function Wu({ taskId: l, editable: n = !0, showAddForm: i = !0 }) { const { data: c, isLoading: u, error: m } = f0(l), h = O2(), f = z2(), [p, v] = M.useState([{ title: "", estimatedMinutes: 30 }]), [j, g] = M.useState(!1), [b, N] = M.useState(!1), S = (c == null ? void 0 : c.filter(J => J.isCompleted).length) || 0, w = (c == null ? void 0 : c.length) || 0, C = w > 0 ? Math.round(S / w * 100) : 0, T = () => { v([...p, { title: "", estimatedMinutes: 30 }]); }, D = J => { p.length > 1 && v(p.filter((U, K) => K !== J)); }, O = (J, U, K) => { const ie = [...p]; U === "title" ? ie[J].title = K : ie[J].estimatedMinutes = K, v(ie); }, F = async () => { const J = p.filter(U => U.title.trim()); if (J.length !== 0) {
    g(!0);
    try {
        await h.mutateAsync({ taskId: l, items: J.map(U => ({ title: U.title.trim(), estimatedMinutes: U.estimatedMinutes })) }), v([{ title: "", estimatedMinutes: 30 }]), N(!1);
    }
    finally {
        g(!1);
    }
} }, _ = async (J, U, K) => { await f.mutateAsync({ taskId: l, itemId: J, notes: U, actualMinutes: K }); }; return u ? t.jsxs("div", { className: "task-items-loading", children: [t.jsx(xe, { className: "h-5 w-5 animate-spin" }), t.jsx("span", { children: "Cargando subtareas..." })] }) : m ? t.jsx("div", { className: "task-items-error", children: "Error al cargar subtareas" }) : t.jsxs("div", { className: "task-items-list", children: [t.jsxs("div", { className: "task-items-header", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx(xc, { className: "h-4 w-4 text-muted-foreground" }), t.jsx("span", { className: "font-medium", children: "Subtareas" }), t.jsxs("span", { className: "text-xs text-muted-foreground", children: ["(", S, "/", w, ")"] })] }), w > 0 && t.jsx("div", { className: "task-items-progress-bar", children: t.jsx("div", { className: V("task-items-progress-fill", C === 100 && "complete"), style: { width: `${C}%` } }) })] }), t.jsx("div", { className: "task-items-body", children: c && c.length > 0 ? c.sort((J, U) => J.sortOrder - U.sortOrder).map(J => t.jsx(z4, { item: J, onComplete: _, disabled: !n }, J.id)) : t.jsxs("div", { className: "task-items-empty", children: [t.jsx(Te, { className: "h-8 w-8 text-muted-foreground/50" }), t.jsx("p", { children: "No hay subtareas definidas" })] }) }), n && i && t.jsx("div", { className: "task-items-add", children: b ? t.jsxs("div", { className: "add-items-form", children: [p.map((J, U) => t.jsxs("div", { className: "add-item-row", children: [t.jsx("input", { type: "text", value: J.title, onChange: K => O(U, "title", K.target.value), placeholder: "Titulo de la subtarea...", className: "add-item-title", autoFocus: U === p.length - 1 }), t.jsx("input", { type: "number", value: J.estimatedMinutes, onChange: K => O(U, "estimatedMinutes", Number(K.target.value)), className: "add-item-minutes", min: 5, step: 5 }), t.jsx("span", { className: "add-item-minutes-label", children: "min" }), p.length > 1 && t.jsx("button", { onClick: () => D(U), className: "add-item-remove", children: "×" })] }, U)), t.jsxs("div", { className: "add-items-actions", children: [t.jsxs("button", { onClick: T, className: "add-another-btn", children: [t.jsx(rt, { className: "h-3 w-3" }), "Agregar otra"] }), t.jsxs("div", { className: "flex gap-2", children: [t.jsx("button", { onClick: () => { N(!1), v([{ title: "", estimatedMinutes: 30 }]); }, className: "cancel-btn", children: "Cancelar" }), t.jsx("button", { onClick: F, disabled: j || !p.some(J => J.title.trim()), className: "submit-items-btn", children: j ? t.jsx(xe, { className: "h-4 w-4 animate-spin" }) : "Guardar" })] })] })] }) : t.jsxs("button", { onClick: () => N(!0), className: "add-items-trigger", children: [t.jsx(rt, { className: "h-4 w-4" }), "Agregar subtareas"] }) })] }); }
const ec = { critical: 0, high: 1, medium: 2, low: 3 }, tc = { pending: 0, in_progress: 1, blocked: 2, completed: 3 }, In = { pending: "todo", blocked: "backlog", in_progress: "doing", review: "doing", completed: "done", cancelled: "done" }, R4 = [{ key: "backlog", label: "Backlog", color: "#64748b" }, { key: "todo", label: "Por Hacer", color: "#f59e0b" }, { key: "doing", label: "En Progreso", color: "#3b82f6" }, { key: "done", label: "Completadas", color: "#22c55e" }], Na = { critical: { color: "#ef4444", label: "P0", bg: "rgba(239, 68, 68, 0.2)" }, high: { color: "#f59e0b", label: "P1", bg: "rgba(249, 115, 22, 0.2)" }, medium: { color: "#3b82f6", label: "P2", bg: "rgba(59, 130, 246, 0.2)" }, low: { color: "#64748b", label: "P3", bg: "rgba(100, 116, 139, 0.2)" } }, Cc = { pending: "Pendiente", in_progress: "En Progreso", review: "En Revision", completed: "Completada", blocked: "Bloqueada", cancelled: "Cancelada" };
function B4({ task: l, agent: n, onClick: i }) { const c = Na[l.priority] || Na.medium, u = l.status === "in_progress", m = l.taskCode || `#${l.id}`; return t.jsxs("div", { onClick: i, className: "task-card bg-secondary border border-border rounded-lg p-3 cursor-pointer transition-all hover:border-solaria hover:-translate-y-0.5", children: [t.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [t.jsxs("span", { className: "text-[13px] font-medium text-foreground leading-tight", children: [t.jsx("span", { className: "text-solaria font-semibold mr-1.5", children: m }), l.title] }), t.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [t.jsx("span", { className: "px-1.5 py-0.5 rounded text-[9px] font-bold uppercase", style: { background: c.bg, color: c.color }, children: c.label }), l.estimatedHours && l.estimatedHours > 0 && t.jsxs("span", { className: "text-[9px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded flex items-center gap-1", children: [t.jsx(Kg, { className: "h-2.5 w-2.5" }), l.estimatedHours, "h"] })] })] }), u && l.progress > 0 && t.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [t.jsx("div", { className: "flex-1 h-1 bg-background/50 rounded overflow-hidden", children: t.jsx("div", { className: "h-full rounded transition-all", style: { width: `${l.progress}%`, background: `linear-gradient(90deg, ${c.color}, ${c.color}dd)` } }) }), t.jsxs("span", { className: "text-[10px] font-bold min-w-[32px] text-right", style: { color: l.progress >= 100 ? "#22c55e" : c.color }, children: [l.progress, "%"] })] }), t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [n ? t.jsxs("span", { className: "flex items-center gap-1 text-[10px] text-solaria bg-solaria/10 px-1.5 py-0.5 rounded", children: [t.jsx(Gs, { className: "h-3 w-3" }), n.name.replace("SOLARIA-", "")] }) : t.jsxs("span", { className: "flex items-center gap-1 text-[10px] text-muted-foreground", children: [t.jsx(vs, { className: "h-3 w-3" }), "Sin asignar"] }), l.status && l.status !== "in_progress" && t.jsx("span", { className: "text-[8px] px-1 py-0.5 bg-secondary rounded text-muted-foreground", children: Cc[l.status] || l.status })] }), l.createdAt && t.jsxs("span", { className: "text-[9px] text-muted-foreground flex items-center gap-1", children: [t.jsx(De, { className: "h-2.5 w-2.5" }), Qe(l.createdAt)] })] })] }); }
function q4({ column: l, tasks: n, agents: i, onTaskClick: c, onAddTask: u }) { const m = h => i.find(f => f.id === h); return t.jsxs("div", { className: V("flex-1 min-w-0 bg-secondary/30 rounded-xl flex flex-col h-full overflow-hidden", `kanban-column-${l.key}`), children: [t.jsxs("div", { className: "px-4 py-3 flex items-center justify-between border-b border-border", children: [t.jsxs("span", { className: "text-xs font-semibold uppercase tracking-wide flex items-center gap-2", children: [t.jsx("span", { className: "w-2 h-2 rounded-full", style: { background: l.color } }), l.label] }), t.jsx("span", { className: "text-[11px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full", children: n.length })] }), t.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto p-2.5 space-y-2", children: [n.map(h => t.jsx(B4, { task: h, agent: m(h.assignedAgentId), onClick: () => c(h.id) }, h.id)), l.key === "backlog" && u && t.jsxs("button", { onClick: u, className: "w-full p-2.5 border-2 border-dashed border-border rounded-lg text-muted-foreground text-xs hover:border-solaria hover:text-solaria transition-colors flex items-center justify-center gap-1.5", children: [t.jsx(rt, { className: "h-3.5 w-3.5" }), "Agregar tarea"] }), n.length === 0 && l.key !== "backlog" && t.jsx("div", { className: "text-center py-8 text-muted-foreground text-xs", children: "Sin tareas" })] })] }); }
function U4({ tasks: l, agents: n, onTaskClick: i, onCreateTask: c }) { const u = M.useMemo(() => { const m = { backlog: [], todo: [], doing: [], done: [] }; return l.forEach(h => { const f = In[h.status] || "todo"; m[f].push(h); }), m; }, [l]); return t.jsx("div", { className: "kanban-board flex gap-3 h-[calc(100vh-320px)] min-h-[400px]", children: R4.map(m => t.jsx(q4, { column: m, tasks: u[m.key] || [], agents: n, onTaskClick: i, onAddTask: m.key === "backlog" ? c : void 0 }, m.key)) }); }
function es({ label: l, column: n, currentColumn: i, currentDirection: c, onSort: u, className: m = "" }) { const h = i === n; return t.jsxs("button", { onClick: () => u(n), className: V("flex items-center gap-1 text-xs font-semibold uppercase tracking-wide transition-colors group", h ? "text-solaria" : "text-muted-foreground hover:text-foreground", m), children: [l, t.jsx("span", { className: "text-muted-foreground group-hover:text-foreground", children: h ? c === "asc" ? t.jsx(Wn, { className: "h-3 w-3" }) : t.jsx(Ru, { className: "h-3 w-3" }) : t.jsx(eN, { className: "h-3 w-3 opacity-50" }) })] }); }
function L4({ tasks: l, agents: n, onTaskClick: i }) { const [c, u] = M.useState("priority"), [m, h] = M.useState("asc"), f = j => n.find(g => g.id === j), p = M.useCallback(j => { c === j ? h(g => g === "asc" ? "desc" : "asc") : (u(j), h("asc")); }, [c]), v = M.useMemo(() => [...l].sort((g, b) => { var S, w; let N = 0; switch (c) {
    case "code":
        const C = g.taskCode || `#${g.id}`, T = b.taskCode || `#${b.id}`;
        N = C.localeCompare(T);
        break;
    case "title":
        N = g.title.localeCompare(b.title);
        break;
    case "priority":
        N = (ec[g.priority] ?? 3) - (ec[b.priority] ?? 3);
        break;
    case "status":
        N = (tc[g.status] ?? 0) - (tc[b.status] ?? 0);
        break;
    case "progress":
        N = (g.progress || 0) - (b.progress || 0);
        break;
    case "agent":
        const D = ((S = n.find(J => J.id === g.assignedAgentId)) == null ? void 0 : S.name) || "ZZZ", O = ((w = n.find(J => J.id === b.assignedAgentId)) == null ? void 0 : w.name) || "ZZZ";
        N = D.localeCompare(O);
        break;
    case "date":
        const F = new Date(g.updatedAt || g.createdAt || 0).getTime(), _ = new Date(b.updatedAt || b.createdAt || 0).getTime();
        N = F - _;
        break;
} return m === "asc" ? N : -N; }), [l, c, m, n]); return t.jsxs("div", { className: "bg-card rounded-xl border border-border overflow-hidden h-full flex flex-col", children: [t.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border sticky top-0 z-10", children: [t.jsx("div", { className: "w-1 flex-shrink-0" }), " ", t.jsx(es, { label: "Código", column: "code", currentColumn: c, currentDirection: m, onSort: p, className: "w-20" }), t.jsx(es, { label: "Tarea", column: "title", currentColumn: c, currentDirection: m, onSort: p, className: "flex-1 min-w-0" }), t.jsx(es, { label: "Estado", column: "status", currentColumn: c, currentDirection: m, onSort: p, className: "w-24" }), t.jsx(es, { label: "Prioridad", column: "priority", currentColumn: c, currentDirection: m, onSort: p, className: "w-20" }), t.jsx(es, { label: "Progreso", column: "progress", currentColumn: c, currentDirection: m, onSort: p, className: "w-28" }), t.jsx(es, { label: "Agente", column: "agent", currentColumn: c, currentDirection: m, onSort: p, className: "w-28" }), t.jsx(es, { label: "Fecha", column: "date", currentColumn: c, currentDirection: m, onSort: p, className: "w-24" }), t.jsx("div", { className: "w-6 flex-shrink-0" }), " "] }), t.jsxs("div", { className: "flex-1 overflow-y-auto", children: [v.map(j => { const g = f(j.assignedAgentId), b = j.status === "completed", N = Na[j.priority] || Na.medium; return t.jsxs("div", { onClick: () => i(j.id), className: "flex items-center gap-2 px-4 py-3 bg-card border-b border-border last:border-b-0 hover:bg-secondary/30 cursor-pointer transition-colors", children: [t.jsx("div", { className: "w-1 h-10 rounded-full flex-shrink-0", style: { background: N.color } }), t.jsx("div", { className: "w-20 flex-shrink-0", children: t.jsx("span", { className: "text-xs text-solaria font-mono font-semibold", children: j.taskCode || `#${j.id}` }) }), t.jsx("div", { className: "flex-1 min-w-0", children: t.jsx("span", { className: V("text-sm font-medium truncate block", b && "line-through opacity-70"), children: j.title }) }), t.jsx("div", { className: "w-24 flex-shrink-0", children: t.jsx("span", { className: "inline-block px-2 py-1 rounded text-[10px] font-medium", style: { background: N.bg, color: N.color }, children: Cc[j.status] || j.status }) }), t.jsx("div", { className: "w-20 flex-shrink-0", children: t.jsx("span", { className: "inline-block px-2 py-1 rounded text-[10px] font-bold", style: { background: N.bg, color: N.color }, children: N.label }) }), t.jsx("div", { className: "w-28 flex-shrink-0", children: t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "flex-1 h-2 bg-secondary rounded-full overflow-hidden", children: t.jsx("div", { className: V("h-full rounded-full transition-all", b ? "bg-green-500" : "bg-solaria"), style: { width: `${j.progress}%` } }) }), t.jsxs("span", { className: "text-xs text-muted-foreground w-8 text-right", children: [j.progress, "%"] })] }) }), t.jsx("div", { className: "w-28 flex-shrink-0", children: t.jsx("div", { className: "flex items-center gap-1", children: g ? t.jsxs(t.Fragment, { children: [t.jsx(Gs, { className: "h-3 w-3 text-solaria" }), t.jsx("span", { className: "text-xs truncate", children: g.name.replace("SOLARIA-", "") })] }) : t.jsx("span", { className: "text-xs text-muted-foreground", children: "Sin asignar" }) }) }), t.jsx("div", { className: "w-24 flex-shrink-0 text-xs text-muted-foreground", children: j.updatedAt ? Qe(j.updatedAt) : j.createdAt ? Qe(j.createdAt) : "-" }), t.jsx(Sa, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" })] }, j.id); }), v.length === 0 && t.jsx("div", { className: "text-center py-12 text-muted-foreground", children: "No hay tareas" })] })] }); }
function H4({ tasks: l, agents: n, onTaskClick: i }) { const [c, u] = M.useState("priority"), [m, h] = M.useState("asc"), f = b => n.find(N => N.id === b), p = M.useCallback(b => { c === b ? h(N => N === "asc" ? "desc" : "asc") : (u(b), h("asc")); }, [c]), v = M.useMemo(() => [...l].sort((N, S) => { var C, T; let w = 0; switch (c) {
    case "code":
        const D = N.taskCode || `#${N.id}`, O = S.taskCode || `#${S.id}`;
        w = D.localeCompare(O);
        break;
    case "title":
        w = N.title.localeCompare(S.title);
        break;
    case "priority":
        w = (ec[N.priority] ?? 3) - (ec[S.priority] ?? 3);
        break;
    case "status":
        w = (tc[N.status] ?? 0) - (tc[S.status] ?? 0);
        break;
    case "progress":
        w = (N.progress || 0) - (S.progress || 0);
        break;
    case "agent":
        const F = ((C = n.find(K => K.id === N.assignedAgentId)) == null ? void 0 : C.name) || "ZZZ", _ = ((T = n.find(K => K.id === S.assignedAgentId)) == null ? void 0 : T.name) || "ZZZ";
        w = F.localeCompare(_);
        break;
    case "date":
        const J = new Date(N.updatedAt || N.createdAt || 0).getTime(), U = new Date(S.updatedAt || S.createdAt || 0).getTime();
        w = J - U;
        break;
} return m === "asc" ? w : -w; }), [l, c, m, n]), j = M.useMemo(() => Math.max(...l.map(b => b.estimatedHours || 0), 8), [l]), g = b => { switch (b) {
    case "critical": return "linear-gradient(to right, #ef4444, #dc2626)";
    case "high": return "linear-gradient(to right, #f97316, #ea580c)";
    case "medium": return "linear-gradient(to right, #f6921d, #d97b0d)";
    case "low": return "linear-gradient(to right, #6b7280, #4b5563)";
    default: return "linear-gradient(to right, #f6921d, #d97b0d)";
} }; return t.jsxs("div", { className: "bg-card rounded-xl border border-border overflow-hidden h-full flex flex-col", children: [t.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between flex-shrink-0", children: [t.jsxs("h3", { className: "font-semibold flex items-center gap-2", children: [t.jsx(Zu, { className: "h-5 w-5 text-solaria" }), "Vista Gantt"] }), t.jsxs("div", { className: "flex gap-4 text-xs", children: [t.jsxs("span", { className: "flex items-center gap-1.5", children: [t.jsx("span", { className: "w-3 h-3 rounded", style: { background: "#ef4444" } }), "P0"] }), t.jsxs("span", { className: "flex items-center gap-1.5", children: [t.jsx("span", { className: "w-3 h-3 rounded", style: { background: "#f97316" } }), "P1"] }), t.jsxs("span", { className: "flex items-center gap-1.5", children: [t.jsx("span", { className: "w-3 h-3 rounded", style: { background: "#f6921d" } }), "P2"] }), t.jsxs("span", { className: "flex items-center gap-1.5", children: [t.jsx("span", { className: "w-3 h-3 rounded", style: { background: "#6b7280" } }), "P3"] })] })] }), t.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border flex-shrink-0 sticky top-0 z-10", children: [t.jsx(es, { label: "Código", column: "code", currentColumn: c, currentDirection: m, onSort: p, className: "w-20" }), t.jsx(es, { label: "Tarea", column: "title", currentColumn: c, currentDirection: m, onSort: p, className: "w-48" }), t.jsx(es, { label: "Agente", column: "agent", currentColumn: c, currentDirection: m, onSort: p, className: "w-24" }), t.jsx(es, { label: "Estado", column: "status", currentColumn: c, currentDirection: m, onSort: p, className: "w-24" }), t.jsx(es, { label: "Prioridad", column: "priority", currentColumn: c, currentDirection: m, onSort: p, className: "w-20" }), t.jsx("div", { className: "flex-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Timeline / Progreso" })] }), t.jsxs("div", { className: "flex-1 overflow-y-auto divide-y divide-border", children: [v.map(b => { const N = f(b.assignedAgentId), S = b.status === "completed", w = Na[b.priority] || Na.medium, C = (b.estimatedHours || 0) / j * 100, T = b.progress || 0; return t.jsxs("div", { onClick: () => i(b.id), className: "flex items-center gap-2 py-3 px-4 hover:bg-secondary/30 cursor-pointer transition-colors", children: [t.jsx("div", { className: "w-20 flex-shrink-0", children: t.jsx("span", { className: "text-xs text-solaria font-mono font-semibold", children: b.taskCode || `#${b.id}` }) }), t.jsx("div", { className: "w-48 flex-shrink-0 min-w-0", children: t.jsx("span", { className: V("text-sm truncate font-medium block", S && "line-through opacity-70"), children: b.title }) }), t.jsx("div", { className: "w-24 flex-shrink-0", children: t.jsx("div", { className: "flex items-center gap-1", children: N ? t.jsxs(t.Fragment, { children: [t.jsx(Gs, { className: "h-3 w-3 text-solaria" }), t.jsx("span", { className: "text-xs truncate", children: N.name.replace("SOLARIA-", "") })] }) : t.jsx("span", { className: "text-xs text-muted-foreground", children: "Sin asignar" }) }) }), t.jsx("div", { className: "w-24 flex-shrink-0", children: t.jsx("span", { className: "inline-block px-2 py-1 rounded text-[10px] font-medium", style: { background: w.bg, color: w.color }, children: Cc[b.status] || b.status }) }), t.jsx("div", { className: "w-20 flex-shrink-0", children: t.jsx("span", { className: "inline-block px-2 py-1 rounded text-[10px] font-bold", style: { background: w.bg, color: w.color }, children: w.label }) }), t.jsxs("div", { className: "flex-1 h-7 bg-secondary/50 rounded relative overflow-hidden", children: [C > 0 && t.jsxs("div", { className: "absolute inset-y-0 left-0 rounded flex items-center transition-all", style: { width: `${Math.max(C, 10)}%`, background: g(b.priority) }, children: [t.jsx("div", { className: "absolute inset-y-0 left-0 bg-white/30 rounded", style: { width: `${T}%` } }), t.jsxs("span", { className: "text-[10px] text-white px-2 font-medium relative z-10 drop-shadow whitespace-nowrap", children: [b.estimatedHours || 0, "h - ", T, "%"] })] }), C === 0 && t.jsx("div", { className: "h-full flex items-center justify-center text-xs text-muted-foreground", children: "Sin estimación" })] })] }, b.id); }), v.length === 0 && t.jsx("div", { className: "text-center py-12 text-muted-foreground", children: "No hay tareas" })] })] }); }
function V4({ task: l, agent: n, isOpen: i, onClose: c }) { const [u, m] = M.useState(!1), { data: h = [], isLoading: f } = B2((l == null ? void 0 : l.id) || 0), { data: p = [] } = R2(), v = q2(), j = U2(), g = M.useMemo(() => { const T = new Set(h.map(D => D.id)); return p.filter(D => !T.has(D.id)); }, [h, p]), b = M.useCallback(T => { l && (v.mutate({ taskId: l.id, tagId: T }), m(!1)); }, [l, v]), N = M.useCallback(T => { l && j.mutate({ taskId: l.id, tagId: T }); }, [l, j]); if (!l)
    return null; const S = Na[l.priority] || Na.medium, w = Cc[l.status] || l.status, C = l.taskCode || `#${l.id}`; return t.jsxs(Il, { isOpen: i, onClose: c, title: "", maxWidth: "max-w-2xl", children: [t.jsxs("div", { className: "px-6 py-4 border-b border-border", style: { borderLeft: `4px solid ${S.color}` }, children: [t.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [t.jsx("span", { className: "px-2 py-1 rounded text-[11px] font-bold", style: { background: S.bg, color: S.color }, children: S.label }), t.jsx("span", { className: "px-2 py-1 rounded text-[11px] bg-secondary", children: w }), t.jsx("span", { className: "text-[11px] text-muted-foreground", children: C })] }), t.jsx("h3", { className: "text-lg font-semibold", children: l.title })] }), t.jsxs("div", { className: "p-6 space-y-6", children: [t.jsxs("div", { children: [t.jsxs("h4", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [t.jsx(W1, { className: "h-4 w-4 text-solaria" }), "Descripcion"] }), t.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: l.description || "Sin descripcion disponible" })] }), l.progress > 0 && t.jsxs("div", { children: [t.jsxs("h4", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [t.jsx(Ql, { className: "h-4 w-4 text-solaria" }), "Progreso"] }), t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "flex-1 h-2 bg-secondary rounded-full overflow-hidden", children: t.jsx("div", { className: "h-full rounded-full", style: { width: `${l.progress}%`, background: S.color } }) }), t.jsxs("span", { className: "text-sm font-semibold", style: { color: S.color }, children: [l.progress, "%"] })] })] }), t.jsx("div", { className: "border border-border rounded-lg p-4 bg-secondary/30", children: t.jsx(Wu, { taskId: l.id, editable: l.status !== "completed", showAddForm: l.status !== "completed" }) }), t.jsxs("div", { children: [t.jsxs("h4", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [t.jsx(Pg, { className: "h-4 w-4 text-solaria" }), "Etiquetas"] }), t.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [f ? t.jsx(xe, { className: "h-4 w-4 animate-spin text-muted-foreground" }) : h.length === 0 ? t.jsx("span", { className: "text-xs text-muted-foreground", children: "Sin etiquetas" }) : h.map(T => t.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium group", style: { backgroundColor: `${T.color}20`, color: T.color }, children: [T.name, t.jsx("button", { onClick: () => N(T.id), className: "opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 rounded p-0.5", title: "Eliminar etiqueta", children: t.jsx(ss, { className: "h-3 w-3" }) })] }, T.id)), u ? t.jsx("div", { className: "relative", children: t.jsxs("div", { className: "absolute top-full left-0 mt-1 z-50 bg-card border border-border rounded-lg shadow-lg p-2 min-w-[160px] max-h-[200px] overflow-y-auto", children: [g.length === 0 ? t.jsx("p", { className: "text-xs text-muted-foreground p-2", children: "No hay etiquetas disponibles" }) : g.map(T => t.jsxs("button", { onClick: () => b(T.id), className: "w-full text-left px-2 py-1.5 rounded hover:bg-secondary transition-colors flex items-center gap-2", children: [t.jsx("span", { className: "w-3 h-3 rounded-full", style: { backgroundColor: T.color } }), t.jsx("span", { className: "text-sm", children: T.name })] }, T.id)), t.jsx("button", { onClick: () => m(!1), className: "w-full text-left px-2 py-1.5 rounded hover:bg-secondary transition-colors text-xs text-muted-foreground mt-1 border-t border-border", children: "Cancelar" })] }) }) : t.jsx("button", { onClick: () => m(!0), className: "px-2 py-1 rounded text-xs border border-dashed border-muted-foreground/50 text-muted-foreground hover:border-solaria hover:text-solaria transition-colors", children: "+ Agregar" })] })] }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(vs, { className: "h-3 w-3 text-blue-400" }), "Asignado a"] }), t.jsx("p", { className: "text-sm font-medium", children: (n == null ? void 0 : n.name) || "Sin asignar" })] }), t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(Kg, { className: "h-3 w-3 text-yellow-400" }), "Horas Estimadas"] }), t.jsxs("p", { className: "text-sm font-medium", children: [l.estimatedHours || 0, " horas"] })] }), t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(gt, { className: "h-3 w-3 text-green-400" }), "Fecha Creacion"] }), t.jsx("p", { className: "text-sm font-medium", children: l.createdAt ? new Date(l.createdAt).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" }) : "N/A" })] }), t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(gt, { className: "h-3 w-3 text-red-400" }), "Ultima Actualizacion"] }), t.jsx("p", { className: "text-sm font-medium", children: l.updatedAt ? Qe(l.updatedAt) : "N/A" })] })] })] }), t.jsxs("div", { className: "px-6 py-4 border-t border-border flex items-center justify-between", children: [t.jsx("button", { onClick: c, className: "px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm", children: "Cerrar" }), t.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground bg-secondary px-3 py-2 rounded-lg", children: [t.jsx(Gs, { className: "h-3.5 w-3.5" }), "Solo el agente puede completar"] })] })] }); }
function G4({ isOpen: l, onClose: n, projectId: i, onTaskCreated: c }) { const [u, m] = M.useState(""), [h, f] = M.useState(""), [p, v] = M.useState("medium"), [j, g] = M.useState(1), b = S2(), N = async (S) => { if (S.preventDefault(), !!u.trim())
    try {
        await b.mutateAsync({ projectId: i, title: u.trim(), description: h.trim(), priority: p, status: "pending", estimatedHours: j }), m(""), f(""), v("medium"), g(1), c(), n();
    }
    catch (w) {
        console.error("Error creating task:", w);
    } }; return t.jsx(Il, { isOpen: l, onClose: n, title: "Nueva Tarea", maxWidth: "max-w-lg", children: t.jsxs("form", { onSubmit: N, className: "p-6 space-y-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium mb-2", children: "Titulo *" }), t.jsx("input", { type: "text", value: u, onChange: S => m(S.target.value), placeholder: "Nombre de la tarea...", className: "w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-solaria focus:outline-none", required: !0, autoFocus: !0 })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium mb-2", children: "Descripcion" }), t.jsx("textarea", { value: h, onChange: S => f(S.target.value), placeholder: "Describe la tarea...", rows: 4, className: "w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-solaria focus:outline-none resize-none" })] }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium mb-2", children: "Prioridad" }), t.jsxs("select", { value: p, onChange: S => v(S.target.value), className: "w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-solaria focus:outline-none", children: [t.jsx("option", { value: "low", children: "P3 - Baja" }), t.jsx("option", { value: "medium", children: "P2 - Media" }), t.jsx("option", { value: "high", children: "P1 - Alta" }), t.jsx("option", { value: "critical", children: "P0 - Critica" })] })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium mb-2", children: "Horas Estimadas" }), t.jsx("input", { type: "number", value: j, onChange: S => g(Number(S.target.value)), min: .5, step: .5, className: "w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-solaria focus:outline-none" })] })] }), t.jsxs("div", { className: "flex justify-end gap-3 pt-4 border-t border-border", children: [t.jsx("button", { type: "button", onClick: n, className: "px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors", children: "Cancelar" }), t.jsx("button", { type: "submit", disabled: !u.trim() || b.isPending, className: "px-4 py-2 rounded-lg bg-solaria hover:bg-solaria/90 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: b.isPending ? "Creando..." : "Crear Tarea" })] })] }) }); }
function Q4() { const { id: l } = wa(), n = ft(), i = parseInt(l || "0"), [c, u] = M.useState("kanban"), [m, h] = M.useState(!1), [f, p] = M.useState(null), { data: v, isLoading: j } = Pl(i), { data: g, isLoading: b, refetch: N } = Iu(i), { data: S } = h0(), w = M.useMemo(() => g ? { backlog: g.filter(_ => In[_.status] === "backlog").length, todo: g.filter(_ => In[_.status] === "todo").length, doing: g.filter(_ => In[_.status] === "doing").length, done: g.filter(_ => In[_.status] === "done").length } : { backlog: 0, todo: 0, doing: 0, done: 0 }, [g]), C = M.useMemo(() => !f || !g ? null : g.find(_ => _.id === f) || null, [f, g]), T = M.useMemo(() => { if (!(!C || !S))
    return S.find(_ => _.id === C.assignedAgentId); }, [C, S]), D = M.useCallback(_ => { p(_); }, []), O = M.useCallback(() => { N(); }, [N]), F = () => { n(`/projects/${i}`); }; return j || b ? t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : v ? t.jsxs("div", { className: "h-full flex flex-col", children: [t.jsxs("div", { className: "flex items-center justify-between mb-4 flex-shrink-0", children: [t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: F, className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Volver al proyecto", children: t.jsx(ys, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsxs("h1", { className: "text-xl font-bold", children: ["Tareas - ", v.name] }), t.jsxs("p", { className: "text-sm text-muted-foreground", children: [(g == null ? void 0 : g.length) || 0, " tareas en total"] })] })] }), t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsxs("div", { className: "flex bg-secondary rounded-lg overflow-hidden", children: [t.jsxs("button", { onClick: () => u("kanban"), className: V("px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2", c === "kanban" ? "bg-solaria text-white" : "text-muted-foreground hover:text-foreground"), children: [t.jsx(Fl, { className: "h-4 w-4" }), "Kanban"] }), t.jsxs("button", { onClick: () => u("list"), className: V("px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2", c === "list" ? "bg-solaria text-white" : "text-muted-foreground hover:text-foreground"), children: [t.jsx(ur, { className: "h-4 w-4" }), "Lista"] }), t.jsxs("button", { onClick: () => u("gantt"), className: V("px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2", c === "gantt" ? "bg-solaria text-white" : "text-muted-foreground hover:text-foreground"), children: [t.jsx(Zu, { className: "h-4 w-4" }), "Gantt"] })] }), t.jsxs("button", { onClick: () => h(!0), className: "px-4 py-2 rounded-lg bg-solaria hover:bg-solaria/90 text-white font-medium flex items-center gap-2 transition-colors", children: [t.jsx(rt, { className: "h-4 w-4" }), "Nueva Tarea"] })] })] }), t.jsxs("div", { className: "flex items-center gap-1 mb-3 flex-shrink-0 bg-secondary/50 rounded-lg p-2", children: [t.jsxs("div", { className: "flex-1 text-center px-3 py-1", children: [t.jsx("div", { className: "text-base font-bold", style: { color: "#64748b" }, children: w.backlog }), t.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: "Backlog" })] }), t.jsx("div", { className: "w-px h-8 bg-border" }), t.jsxs("div", { className: "flex-1 text-center px-3 py-1", children: [t.jsx("div", { className: "text-base font-bold", style: { color: "#f59e0b" }, children: w.todo }), t.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: "Por Hacer" })] }), t.jsx("div", { className: "w-px h-8 bg-border" }), t.jsxs("div", { className: "flex-1 text-center px-3 py-1", children: [t.jsx("div", { className: "text-base font-bold", style: { color: "#3b82f6" }, children: w.doing }), t.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: "En Progreso" })] }), t.jsx("div", { className: "w-px h-8 bg-border" }), t.jsxs("div", { className: "flex-1 text-center px-3 py-1", children: [t.jsx("div", { className: "text-base font-bold", style: { color: "#22c55e" }, children: w.done }), t.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: "Completadas" })] })] }), t.jsxs("div", { className: "flex-1 min-h-0", children: [c === "kanban" && t.jsx(U4, { tasks: g || [], agents: S || [], onTaskClick: D, onCreateTask: () => h(!0) }), c === "list" && t.jsx("div", { className: "h-full", children: t.jsx(L4, { tasks: g || [], agents: S || [], onTaskClick: D }) }), c === "gantt" && t.jsx("div", { className: "h-full", children: t.jsx(H4, { tasks: g || [], agents: S || [], onTaskClick: D }) })] }), w.done > 0 && t.jsx("div", { className: "flex items-center justify-center py-3 border-t border-border flex-shrink-0", children: t.jsxs("button", { onClick: () => n("/tasks/archived"), className: "flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors", children: [t.jsx(xs, { className: "h-4 w-4" }), "Ver ", w.done, " tareas archivadas"] }) }), t.jsx(G4, { isOpen: m, onClose: () => h(!1), projectId: i, onTaskCreated: O }), t.jsx(V4, { task: C, agent: T, isOpen: !!f, onClose: () => p(null) })] }) : t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx("p", { className: "text-muted-foreground", children: "Proyecto no encontrado" }) }); }
const Vp = { production: { label: "Producción", icon: Gu, color: "text-emerald-400", bgColor: "bg-emerald-500/10" }, staging: { label: "Staging/Dev", icon: $i, color: "text-amber-400", bgColor: "bg-amber-500/10" }, local: { label: "Local", icon: Xg, color: "text-blue-400", bgColor: "bg-blue-500/10" }, repository: { label: "Repositorio", icon: mN, color: "text-violet-400", bgColor: "bg-violet-500/10" } };
function K4() { const { id: l } = wa(), n = ft(), { data: i, isLoading: c } = Pl(Number(l)), u = $u(), [m, h] = M.useState(!1), [f, p] = M.useState({ type: "production", label: "", url: "" }), [v, j] = M.useState(null), g = [(i == null ? void 0 : i.productionUrl) && { id: "prod", type: "production", label: "Produccion", url: i.productionUrl }, (i == null ? void 0 : i.stagingUrl) && { id: "staging", type: "staging", label: "Staging", url: i.stagingUrl }, (i == null ? void 0 : i.localUrl) && { id: "local", type: "local", label: "Local", url: i.localUrl }, (i == null ? void 0 : i.repoUrl) && { id: "repo", type: "repository", label: "GitHub", url: i.repoUrl }].filter(Boolean), b = async (w, C) => { await navigator.clipboard.writeText(w), j(C), setTimeout(() => j(null), 2e3); }, N = async () => { if (!f.url.trim())
    return; const w = { production: "productionUrl", staging: "stagingUrl", local: "localUrl", repository: "repoUrl" }; await u.mutateAsync({ id: Number(l), data: { [w[f.type]]: f.url.trim() } }), p({ type: "production", label: "", url: "" }), h(!1); }, S = async (w) => { const C = { prod: "productionUrl", staging: "stagingUrl", local: "localUrl", repo: "repoUrl" }; C[w] && await u.mutateAsync({ id: Number(l), data: { [C[w]]: null } }); }; return c ? t.jsx("div", { className: "flex items-center justify-center min-h-[400px]", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : i ? t.jsxs("div", { className: "p-6 max-w-4xl mx-auto", children: [t.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [t.jsx("button", { onClick: () => n(`/projects/${l}`), className: "p-2 rounded-lg hover:bg-secondary transition-colors", children: t.jsx(ys, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("h1", { className: "text-2xl font-bold", children: "Direcciones del Proyecto" }), t.jsx("p", { className: "text-muted-foreground", children: i.name })] })] }), t.jsx("div", { className: "space-y-3 mb-6", children: g.length === 0 ? t.jsxs("div", { className: "text-center py-12 bg-card rounded-xl border border-border", children: [t.jsx(Zg, { className: "h-12 w-12 mx-auto text-muted-foreground/50 mb-4" }), t.jsx("p", { className: "text-muted-foreground mb-4", children: "No hay direcciones configuradas para este proyecto" }), t.jsxs("button", { onClick: () => h(!0), className: "px-4 py-2 bg-solaria text-white rounded-lg hover:bg-solaria/90 transition-colors", children: [t.jsx(rt, { className: "h-4 w-4 inline mr-2" }), "Agregar primera dirección"] })] }) : g.map(w => { const C = Vp[w.type], T = C.icon; return t.jsxs("div", { className: "flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-border/80 transition-colors", children: [t.jsx("div", { className: V("p-2.5 rounded-lg", C.bgColor, C.color), children: t.jsx(T, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("span", { className: "font-medium", children: w.label }), t.jsx("span", { className: "text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground", children: C.label })] }), t.jsx("p", { className: "text-sm text-muted-foreground truncate", children: w.url })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("button", { onClick: () => b(w.url, w.id), className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Copiar URL", children: v === w.id ? t.jsx(Vl, { className: "h-4 w-4 text-emerald-400" }) : t.jsx(Hl, { className: "h-4 w-4 text-muted-foreground" }) }), t.jsx("a", { href: w.url, target: "_blank", rel: "noopener noreferrer", className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Abrir en nueva pestana", children: t.jsx(Gt, { className: "h-4 w-4 text-muted-foreground" }) }), t.jsx("button", { onClick: () => S(w.id), className: "p-2 rounded-lg hover:bg-red-500/10 transition-colors", title: "Eliminar", children: t.jsx(hr, { className: "h-4 w-4 text-red-400" }) })] })] }, w.id); }) }), g.length > 0 && !m && t.jsxs("button", { onClick: () => h(!0), className: "w-full p-4 border border-dashed border-border rounded-xl text-muted-foreground hover:border-solaria hover:text-solaria transition-colors flex items-center justify-center gap-2", children: [t.jsx(rt, { className: "h-5 w-5" }), "Agregar dirección"] }), m && t.jsxs("div", { className: "p-6 bg-card rounded-xl border border-border", children: [t.jsx("h3", { className: "font-medium mb-4", children: "Nueva Dirección" }), t.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Tipo" }), t.jsx("select", { value: f.type, onChange: w => p({ ...f, type: w.target.value }), className: "w-full p-2.5 bg-secondary rounded-lg border border-border text-sm", children: Object.entries(Vp).map(([w, { label: C }]) => t.jsx("option", { value: w, children: C }, w)) })] }), t.jsxs("div", { className: "md:col-span-2", children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "URL" }), t.jsx("input", { type: "url", value: f.url, onChange: w => p({ ...f, url: w.target.value }), placeholder: "https://...", className: "w-full p-2.5 bg-secondary rounded-lg border border-border text-sm" })] })] }), t.jsxs("div", { className: "flex justify-end gap-3", children: [t.jsx("button", { onClick: () => { h(!1), p({ type: "production", label: "", url: "" }); }, className: "px-4 py-2 text-sm text-muted-foreground hover:text-foreground", children: "Cancelar" }), t.jsx("button", { onClick: N, disabled: !f.url.trim() || u.isPending, className: "px-4 py-2 bg-solaria text-white rounded-lg text-sm hover:bg-solaria/90 disabled:opacity-50", children: u.isPending ? t.jsx(xe, { className: "h-4 w-4 animate-spin" }) : "Guardar" })] })] })] }) : t.jsx("div", { className: "p-8 text-center text-muted-foreground", children: "Proyecto no encontrado" }); }
const Y4 = ["React", "Vue", "Angular", "Next.js", "Nuxt", "Svelte", "Node.js", "Express", "Fastify", "NestJS", "Python", "Django", "FastAPI", "Flask", "TypeScript", "JavaScript", "Go", "Rust", "PHP", "Laravel", "PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Redis", "SQLite", "Docker", "Kubernetes", "AWS", "GCP", "Azure", "Vercel", "TailwindCSS", "Sass", "styled-components", "Payload CMS", "GraphQL", "REST API", "Drizzle ORM", "Prisma"], X4 = ["SAAS", "B2B", "B2C", "E-COMMERCE", "LANDING", "DASHBOARD", "REACT", "VUE", "MOBILE", "API", "CMS", "INTERNAL", "MVP", "PRODUCTION", "STAGING", "LEGACY", "MAINTENANCE"], Z4 = [{ value: "planning", label: "Planificacion", color: "bg-violet-500" }, { value: "active", label: "En Desarrollo", color: "bg-solaria" }, { value: "paused", label: "Pausado", color: "bg-amber-500" }, { value: "completed", label: "Completado", color: "bg-emerald-500" }, { value: "cancelled", label: "Cancelado", color: "bg-red-500" }], F4 = [{ value: "critical", label: "Critica", color: "text-red-400" }, { value: "high", label: "Alta", color: "text-amber-400" }, { value: "medium", label: "Media", color: "text-blue-400" }, { value: "low", label: "Baja", color: "text-gray-400" }];
function J4() { const { id: l } = wa(), n = ft(), { data: i, isLoading: c } = Pl(Number(l)), u = $u(), [m, h] = M.useState({ name: "", code: "", description: "", status: "planning", priority: "medium", budgetAllocated: 0, startDate: "", endDate: "", tags: [], stack: [], clientName: "", clientEmail: "", clientPhone: "" }), [f, p] = M.useState(!1), [v, j] = M.useState(!1), [g, b] = M.useState(""), [N, S] = M.useState(""); M.useEffect(() => { var _; if (i) {
    let J = [], U = [];
    try {
        typeof i.tags == "string" ? J = JSON.parse(i.tags) : Array.isArray(i.tags) && (J = i.tags);
    }
    catch { }
    try {
        typeof i.stack == "string" ? U = JSON.parse(i.stack) : Array.isArray(i.stack) && (U = i.stack);
    }
    catch { }
    h({ name: i.name || "", code: i.code || "", description: i.description || "", status: i.status || "planning", priority: i.priority || "medium", budgetAllocated: i.budgetAllocated || 0, startDate: i.startDate ? new Date(i.startDate).toISOString().split("T")[0] : "", endDate: i.endDate ? new Date(i.endDate).toISOString().split("T")[0] : "", tags: J, stack: U, clientName: ((_ = i.client) == null ? void 0 : _.name) || "", clientEmail: "", clientPhone: "" });
} }, [i]); const w = (_, J) => { h(U => ({ ...U, [_]: J })), p(!0); }, C = () => { const _ = g.trim().toUpperCase(); _ && !m.tags.includes(_) && (h(J => ({ ...J, tags: [...J.tags, _] })), b(""), p(!0)); }, T = _ => { h(J => ({ ...J, tags: J.tags.filter(U => U !== _) })), p(!0); }, D = () => { const _ = N.trim(); _ && !m.stack.includes(_) && (h(J => ({ ...J, stack: [...J.stack, _] })), S(""), p(!0)); }, O = _ => { h(J => ({ ...J, stack: J.stack.filter(U => U !== _) })), p(!0); }, F = async () => { await u.mutateAsync({ id: Number(l), data: { name: m.name, code: m.code, description: m.description, status: m.status, priority: m.priority, budgetAllocated: Number(m.budgetAllocated), startDate: m.startDate || void 0, endDate: m.endDate || void 0, tags: m.tags, stack: m.stack } }), p(!1); }; return c ? t.jsx("div", { className: "flex items-center justify-center min-h-[400px]", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : i ? t.jsxs("div", { className: "p-6 max-w-4xl mx-auto", children: [t.jsxs("div", { className: "flex items-center justify-between mb-8", children: [t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: () => n(`/projects/${l}`), className: "p-2 rounded-lg hover:bg-secondary transition-colors", children: t.jsx(ys, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsxs("h1", { className: "text-2xl font-bold flex items-center gap-2", children: [t.jsx(gc, { className: "h-6 w-6" }), "Configuracion del Proyecto"] }), t.jsx("p", { className: "text-muted-foreground", children: i.name })] })] }), f && t.jsxs("button", { onClick: F, disabled: u.isPending, className: "flex items-center gap-2 px-4 py-2 bg-solaria text-white rounded-lg hover:bg-solaria/90 disabled:opacity-50", children: [u.isPending ? t.jsx(xe, { className: "h-4 w-4 animate-spin" }) : t.jsx(pc, { className: "h-4 w-4" }), "Guardar Cambios"] })] }), t.jsxs("div", { className: "space-y-6", children: [t.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [t.jsx("h2", { className: "text-lg font-semibold mb-4", children: "Informacion Basica" }), t.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Nombre del Proyecto" }), t.jsx("input", { type: "text", value: m.name, onChange: _ => w("name", _.target.value), className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Codigo" }), t.jsx("input", { type: "text", value: m.code, onChange: _ => w("code", _.target.value.toUpperCase()), maxLength: 5, className: "w-full p-3 bg-secondary rounded-lg border border-border uppercase font-mono" })] }), t.jsxs("div", { className: "md:col-span-2", children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Descripcion" }), t.jsx("textarea", { value: m.description, onChange: _ => w("description", _.target.value), rows: 3, className: "w-full p-3 bg-secondary rounded-lg border border-border resize-none" })] })] })] }), t.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [t.jsx("h2", { className: "text-lg font-semibold mb-4", children: "Estado y Prioridad" }), t.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Estado" }), t.jsx("div", { className: "flex flex-wrap gap-2", children: Z4.map(_ => t.jsx("button", { onClick: () => w("status", _.value), className: V("px-3 py-1.5 rounded-full text-sm font-medium transition-all", m.status === _.value ? `${_.color} text-white` : "bg-secondary text-muted-foreground hover:text-foreground"), children: _.label }, _.value)) })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Prioridad" }), t.jsx("div", { className: "flex flex-wrap gap-2", children: F4.map(_ => t.jsx("button", { onClick: () => w("priority", _.value), className: V("px-3 py-1.5 rounded-full text-sm font-medium transition-all border", m.priority === _.value ? `${_.color} border-current bg-current/10` : "border-border text-muted-foreground hover:text-foreground"), children: _.label }, _.value)) })] })] })] }), t.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [t.jsx("h2", { className: "text-lg font-semibold mb-4", children: "Presupuesto y Fechas" }), t.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Presupuesto ($)" }), t.jsx("input", { type: "number", value: m.budgetAllocated, onChange: _ => w("budgetAllocated", Number(_.target.value)), min: 0, step: 1e3, className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Fecha de Inicio" }), t.jsx("input", { type: "date", value: m.startDate, onChange: _ => w("startDate", _.target.value), className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Fecha Limite" }), t.jsx("input", { type: "date", value: m.endDate, onChange: _ => w("endDate", _.target.value), className: "w-full p-3 bg-secondary rounded-lg border border-border" })] })] })] }), t.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [t.jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [t.jsx(Fu, { className: "h-5 w-5 text-blue-400" }), "Etiquetas del Proyecto"] }), t.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [m.tags.map(_ => t.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30", children: [_, t.jsx("button", { onClick: () => T(_), className: "p-0.5 hover:bg-blue-500/30 rounded-full transition-colors", children: t.jsx(ss, { className: "h-3 w-3" }) })] }, _)), m.tags.length === 0 && t.jsx("span", { className: "text-sm text-muted-foreground", children: "Sin etiquetas" })] }), t.jsxs("div", { className: "flex gap-2 mb-4", children: [t.jsx("input", { type: "text", value: g, onChange: _ => b(_.target.value.toUpperCase()), onKeyDown: _ => _.key === "Enter" && (_.preventDefault(), C()), placeholder: "Nueva etiqueta...", className: "flex-1 p-2 bg-secondary rounded-lg border border-border text-sm uppercase" }), t.jsx("button", { onClick: C, disabled: !g.trim(), className: "p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed", children: t.jsx(rt, { className: "h-4 w-4" }) })] }), t.jsx("div", { className: "flex flex-wrap gap-1.5", children: X4.filter(_ => !m.tags.includes(_)).slice(0, 10).map(_ => t.jsxs("button", { onClick: () => { h(J => ({ ...J, tags: [...J.tags, _] })), p(!0); }, className: "px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors", children: ["+ ", _] }, _)) })] }), t.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [t.jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [t.jsx(Ku, { className: "h-5 w-5 text-purple-400" }), "Stack Tecnico"] }), t.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [m.stack.map(_ => t.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30", children: [_, t.jsx("button", { onClick: () => O(_), className: "p-0.5 hover:bg-purple-500/30 rounded-full transition-colors", children: t.jsx(ss, { className: "h-3 w-3" }) })] }, _)), m.stack.length === 0 && t.jsx("span", { className: "text-sm text-muted-foreground", children: "Sin tecnologias definidas" })] }), t.jsxs("div", { className: "flex gap-2 mb-4", children: [t.jsx("input", { type: "text", value: N, onChange: _ => S(_.target.value), onKeyDown: _ => _.key === "Enter" && (_.preventDefault(), D()), placeholder: "Nueva tecnologia...", className: "flex-1 p-2 bg-secondary rounded-lg border border-border text-sm" }), t.jsx("button", { onClick: D, disabled: !N.trim(), className: "p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed", children: t.jsx(rt, { className: "h-4 w-4" }) })] }), t.jsx("div", { className: "flex flex-wrap gap-1.5", children: Y4.filter(_ => !m.stack.includes(_)).slice(0, 12).map(_ => t.jsxs("button", { onClick: () => { h(J => ({ ...J, stack: [...J.stack, _] })), p(!0); }, className: "px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors", children: ["+ ", _] }, _)) })] }), t.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [t.jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [t.jsx(Hg, { className: "h-5 w-5 text-emerald-400" }), "Informacion del Cliente"] }), t.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Nombre del Cliente/Empresa" }), t.jsx("input", { type: "text", value: m.clientName, onChange: _ => w("clientName", _.target.value), placeholder: "Ej: SOLARIA Agency", className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Email de Contacto" }), t.jsx("input", { type: "email", value: m.clientEmail, onChange: _ => w("clientEmail", _.target.value), placeholder: "cliente@ejemplo.com", className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Telefono" }), t.jsx("input", { type: "tel", value: m.clientPhone, onChange: _ => w("clientPhone", _.target.value), placeholder: "+52 555 123 4567", className: "w-full p-3 bg-secondary rounded-lg border border-border" })] })] })] }), t.jsxs("section", { className: "bg-card rounded-xl border border-red-500/20 p-6", children: [t.jsxs("h2", { className: "text-lg font-semibold text-red-400 mb-4 flex items-center gap-2", children: [t.jsx(ba, { className: "h-5 w-5" }), "Zona de Peligro"] }), t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsxs("div", { children: [t.jsx("p", { className: "font-medium", children: "Eliminar Proyecto" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Esta accion no se puede deshacer. Se eliminaran todas las tareas asociadas." })] }), v ? t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("button", { onClick: () => j(!1), className: "px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground", children: "Cancelar" }), t.jsx("button", { className: "px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600", children: "Confirmar Eliminacion" })] }) : t.jsxs("button", { onClick: () => j(!0), className: "flex items-center gap-2 px-4 py-2 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors", children: [t.jsx(hr, { className: "h-4 w-4" }), "Eliminar"] })] })] })] })] }) : t.jsx("div", { className: "p-8 text-center text-muted-foreground", children: "Proyecto no encontrado" }); }
const $4 = { pending: { label: "Pendiente", bg: "bg-gray-500/10", color: "text-gray-600", icon: Vs }, in_progress: { label: "En Progreso", bg: "bg-purple-500/10", color: "text-purple-600", icon: ar }, review: { label: "En Revisión", bg: "bg-blue-500/10", color: "text-blue-600", icon: ar }, completed: { label: "Completada", bg: "bg-green-500/10", color: "text-green-600", icon: Te }, blocked: { label: "Bloqueada", bg: "bg-red-500/10", color: "text-red-600", icon: ba } }, P4 = { critical: { label: "Crítico", color: "text-red-500", bg: "bg-red-500/10" }, high: { label: "Alto", color: "text-orange-500", bg: "bg-orange-500/10" }, medium: { label: "Medio", color: "text-yellow-500", bg: "bg-yellow-500/10" }, low: { label: "Bajo", color: "text-blue-500", bg: "bg-blue-500/10" } }, I4 = { feature: { label: "Feature", color: "text-green-500" }, bug: { label: "Bug", color: "text-red-500" }, enhancement: { label: "Mejora", color: "text-blue-500" }, documentation: { label: "Docs", color: "text-gray-500" }, research: { label: "Research", color: "text-purple-500" }, maintenance: { label: "Mantenimiento", color: "text-yellow-500" } };
function W4({ taskId: l, isOpen: n, onClose: i }) { const c = n && l !== null && l > 0, { data: u, isLoading: m } = Pu(c ? l : 0), { data: h, isLoading: f } = f0(c ? l : 0), p = m || f, v = h || [], j = u ? $4[u.status] : null, g = u ? P4[u.priority] : null, b = u ? I4[u.type] : null, N = v.filter(C => C.isCompleted).length, S = v.length, w = S > 0 ? Math.round(N / S * 100) : (u == null ? void 0 : u.progress) || 0; return t.jsx(yc, { open: n, onOpenChange: i, children: t.jsxs(vc, { className: "max-w-2xl max-h-[85vh] flex flex-col", children: [t.jsx(wc, { onClose: i }), c ? p ? t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : u ? t.jsxs(t.Fragment, { children: [t.jsx(jc, { children: t.jsxs("div", { className: "flex items-start gap-3 pr-8", children: [t.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10", children: t.jsx(Ql, { className: "h-5 w-5 text-primary" }) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [t.jsx("span", { className: "text-xs font-mono text-muted-foreground", children: u.taskCode || `T-${String(u.taskNumber).padStart(3, "0")}` }), j && t.jsxs("span", { className: V("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", j.bg, j.color), children: [t.jsx(j.icon, { className: "h-3 w-3" }), j.label] })] }), t.jsx(Nc, { className: "text-lg font-semibold leading-tight", children: u.title })] })] }) }), t.jsxs(Sc, { className: "flex-1 overflow-y-auto space-y-5 pt-2", children: [t.jsxs("div", { className: "flex flex-wrap gap-2", children: [g && t.jsx("span", { className: V("inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium", g.bg, g.color), children: g.label }), b && t.jsx("span", { className: V("inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-muted", b.color), children: b.label }), u.epicName && t.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-purple-500/10 text-purple-500", children: ["Epic: ", u.epicName] }), u.sprintName && t.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-yellow-500/10 text-yellow-500", children: ["Sprint: ", u.sprintName] })] }), u.description && t.jsxs("div", { className: "space-y-2", children: [t.jsxs("h4", { className: "text-sm font-medium flex items-center gap-2 text-muted-foreground", children: [t.jsx(Fa, { className: "h-4 w-4" }), "Descripción"] }), t.jsx("p", { className: "text-sm text-muted-foreground whitespace-pre-wrap bg-muted/50 rounded-lg p-3", children: u.description })] }), t.jsxs("div", { className: "space-y-2", children: [t.jsxs("div", { className: "flex items-center justify-between text-sm", children: [t.jsxs("span", { className: "flex items-center gap-2 text-muted-foreground", children: [t.jsx(fc, { className: "h-4 w-4" }), "Progreso"] }), t.jsxs("span", { className: "font-medium", children: [w, "%"] })] }), t.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: t.jsx("div", { className: "h-full bg-primary rounded-full transition-all duration-300", style: { width: `${w}%` } }) }), S > 0 && t.jsxs("p", { className: "text-xs text-muted-foreground", children: [N, " de ", S, " subtareas completadas"] })] }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [u.estimatedHours && t.jsxs("div", { className: "flex items-center gap-2 p-3 rounded-lg bg-muted/50", children: [t.jsx(De, { className: "h-4 w-4 text-muted-foreground" }), t.jsxs("div", { children: [t.jsx("p", { className: "text-xs text-muted-foreground", children: "Estimado" }), t.jsxs("p", { className: "text-sm font-medium", children: [u.estimatedHours, "h"] })] })] }), u.actualHours !== void 0 && u.actualHours > 0 && t.jsxs("div", { className: "flex items-center gap-2 p-3 rounded-lg bg-muted/50", children: [t.jsx(De, { className: "h-4 w-4 text-muted-foreground" }), t.jsxs("div", { children: [t.jsx("p", { className: "text-xs text-muted-foreground", children: "Real" }), t.jsxs("p", { className: "text-sm font-medium", children: [u.actualHours, "h"] })] })] })] }), u.dueDate && t.jsxs("div", { className: "flex items-center gap-2 p-3 rounded-lg bg-muted/50", children: [t.jsx(gt, { className: "h-4 w-4 text-muted-foreground" }), t.jsxs("div", { children: [t.jsx("p", { className: "text-xs text-muted-foreground", children: "Fecha límite" }), t.jsx("p", { className: "text-sm font-medium", children: Qt(u.dueDate) })] })] }), u.agentName && t.jsxs("div", { className: "flex items-center gap-2 p-3 rounded-lg bg-muted/50", children: [t.jsx(vs, { className: "h-4 w-4 text-muted-foreground" }), t.jsxs("div", { children: [t.jsx("p", { className: "text-xs text-muted-foreground", children: "Asignado a" }), t.jsx("p", { className: "text-sm font-medium", children: u.agentName })] })] }), v.length > 0 && t.jsxs("div", { className: "space-y-2", children: [t.jsxs("h4", { className: "text-sm font-medium flex items-center gap-2 text-muted-foreground", children: [t.jsx(Te, { className: "h-4 w-4" }), "Subtareas (", N, "/", S, ")"] }), t.jsx("ul", { className: "space-y-1", children: v.map(C => t.jsxs("li", { className: V("flex items-center gap-2 p-2 rounded text-sm", C.isCompleted ? "text-muted-foreground line-through" : ""), children: [C.isCompleted ? t.jsx(Te, { className: "h-4 w-4 text-green-500 flex-shrink-0" }) : t.jsx(Vs, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }), t.jsx("span", { className: "flex-1", children: C.title }), C.estimatedMinutes && t.jsxs("span", { className: "text-xs text-muted-foreground", children: [C.estimatedMinutes, "min"] })] }, C.id)) })] }), u.notes && t.jsxs("div", { className: "space-y-2", children: [t.jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Notas" }), t.jsx("p", { className: "text-sm text-muted-foreground whitespace-pre-wrap bg-muted/50 rounded-lg p-3", children: u.notes })] })] }), t.jsx(kc, { className: "border-t pt-4 mt-2", children: t.jsx("button", { onClick: i, className: "px-4 py-2 text-sm font-medium rounded-lg bg-muted hover:bg-muted/80 transition-colors", children: "Cerrar" }) })] }) : t.jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-muted-foreground", children: [t.jsx(ba, { className: "h-12 w-12 mb-4" }), t.jsx("p", { children: "No se encontró la tarea" })] }) : t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) })] }) }); }
function Ac(l) { switch (l) {
    case "completed": return { bg: "bg-green-500/10", text: "text-green-500", border: "border-green-500" };
    case "active":
    case "in_progress": return { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500" };
    case "blocked": return { bg: "bg-red-500/10", text: "text-red-500", border: "border-red-500" };
    case "planned":
    case "pending":
    default: return { bg: "bg-gray-500/10", text: "text-gray-500", border: "border-gray-500" };
} }
function pr(l) { switch (l) {
    case "completed": return "Completada";
    case "active":
    case "in_progress": return "En Progreso";
    case "blocked": return "Bloqueada";
    case "planned":
    case "pending":
    default: return "Pendiente";
} }
function ew({ mode: l, onChange: n }) { const i = [{ key: "normal", label: "Normal", icon: Fl }, { key: "sprints", label: "Sprints", icon: gt }, { key: "epics", label: "Epics", icon: Ku }, { key: "tasks", label: "Tasks", icon: xc }]; return t.jsx("div", { className: "flex items-center gap-1 p-1 bg-muted/50 rounded-lg border border-border", children: i.map(({ key: c, label: u, icon: m }) => t.jsxs("button", { onClick: () => n(c), className: V("flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all", l === c ? "bg-solaria text-white shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"), children: [t.jsx(m, { className: "h-4 w-4" }), t.jsx("span", { className: "hidden sm:inline", children: u })] }, c)) }); }
function tw({ code: l, name: n }) { return t.jsx("div", { className: "w-full h-[60px] bg-gradient-to-r from-solaria to-solaria/70 flex items-center justify-center px-4 rounded-t-lg", children: t.jsxs("span", { className: "text-white font-bold text-lg tracking-wide", children: [l, " - ", n] }) }); }
function em({ task: l, sprintNum: n, epicNum: i, onClick: c, compact: u = !1 }) { const h = l.taskCode ? l.taskCode : n && i ? `TSK-${String(n).padStart(2, "0")}-${String(i).padStart(2, "0")}-${String(l.taskNumber).padStart(2, "0")}` : `DFO-${String(l.taskNumber).padStart(3, "0")}`, f = l.status, p = Ac(f), v = f === "completed", j = f === "in_progress" || f === "active", g = f === "blocked"; return t.jsxs("div", { onClick: c, className: V("flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all", "border-l-4 hover:bg-accent/30 hover:translate-x-0.5", p.border, p.bg), title: `${h} - ${l.title}`, children: [v && t.jsx(Te, { className: "h-4 w-4 text-green-500 shrink-0" }), j && t.jsx(De, { className: "h-4 w-4 text-blue-500 shrink-0 animate-pulse" }), g && t.jsx(ba, { className: "h-4 w-4 text-red-500 shrink-0" }), !v && !j && !g && t.jsx(Vs, { className: "h-4 w-4 text-gray-400 shrink-0" }), t.jsxs("span", { className: V("font-mono text-xs font-bold shrink-0", p.text, v && "line-through opacity-70"), children: ["[", h, "]"] }), !u && t.jsx("span", { className: V("text-sm flex-1 truncate", v && "line-through text-muted-foreground"), children: l.title })] }); }
function v0({ epicSection: l, sprintNum: n, isExpanded: i, onToggle: c, onTaskClick: u }) { const { epic: m, tasks: h, completedCount: f } = l, p = m.epicNumber, v = m.status, j = Ac(v), g = h.length > 0 ? Math.round(f / h.length * 100) : 0, b = `EPC-${String(n).padStart(2, "0")}-${String(p).padStart(2, "0")}`; return t.jsxs("div", { className: "border border-border rounded-lg overflow-hidden bg-card", children: [t.jsxs("div", { onClick: c, className: V("flex items-center gap-3 px-4 py-3 cursor-pointer transition-all", "hover:bg-accent/20", j.bg), style: { borderLeftWidth: "4px", borderLeftColor: m.color || "#6366f1" }, children: [i ? t.jsx(Uu, { className: "h-4 w-4 text-muted-foreground shrink-0" }) : t.jsx(Sa, { className: "h-4 w-4 text-muted-foreground shrink-0" }), t.jsx("div", { className: "w-3 h-3 rounded-full shrink-0", style: { backgroundColor: m.color || "#6366f1" } }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("span", { className: "font-mono text-xs font-bold text-muted-foreground", children: b }), t.jsx("span", { className: V("text-xs px-2 py-0.5 rounded-full font-medium", j.bg, j.text), children: pr(v) })] }), t.jsx("h4", { className: "font-semibold text-sm truncate", children: m.name })] }), t.jsxs("div", { className: "text-xs text-muted-foreground shrink-0", children: [f, "/", h.length, " (", g, "%)"] })] }), i && t.jsx("div", { className: "border-t border-border divide-y divide-border/50 bg-muted/20", children: h.length === 0 ? t.jsx("div", { className: "px-4 py-6 text-center text-muted-foreground text-sm", children: "Sin tareas" }) : t.jsx("div", { className: "p-2 space-y-1", children: h.map(N => t.jsx(em, { task: N, sprintNum: n, epicNum: p, onClick: () => u(N.id) }, N.id)) }) })] }); }
function sw({ column: l, isExpanded: n, onToggle: i, expandedEpicId: c, onEpicToggle: u, onTaskClick: m }) { const { sprint: h, isActive: f, epics: p, totalTasks: v, completedTasks: j } = l, g = h.sprintNumber, b = h.status, N = Ac(f ? "active" : b), S = v > 0 ? Math.round(j / v * 100) : 0, w = `SPR-${String(g).padStart(2, "0")}`; return t.jsxs("div", { className: "flex-1 min-w-[150px] flex flex-col border-r border-border last:border-r-0", children: [t.jsxs("div", { onClick: i, className: V("flex items-center gap-2 px-3 py-3 cursor-pointer transition-all", "hover:bg-accent/20", f && "bg-purple-500/20 ring-2 ring-inset ring-purple-500", b === "completed" && "bg-green-500/10"), children: [n ? t.jsx(Uu, { className: "h-4 w-4 text-muted-foreground shrink-0" }) : t.jsx(Sa, { className: "h-4 w-4 text-muted-foreground shrink-0" }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [f && t.jsx(js, { className: "h-3 w-3 text-purple-400" }), b === "completed" && t.jsx(Te, { className: "h-3 w-3 text-green-400" }), t.jsx("span", { className: V("font-mono text-xs font-bold", f && "text-purple-400", b === "completed" && "text-green-400"), children: w }), t.jsx("span", { className: V("text-xs px-2 py-0.5 rounded-full font-medium", N.bg, N.text), children: pr(b) })] }), t.jsx("h4", { className: "text-sm font-medium truncate", children: h.name })] }), t.jsxs("div", { className: "text-xs text-muted-foreground text-right shrink-0", children: [t.jsxs("div", { children: [p.length, "E | ", j, "/", v, "T"] }), t.jsxs("div", { children: [S, "%"] })] })] }), n && t.jsx("div", { className: "flex-1 border-t border-border bg-muted/10 p-2 space-y-2 overflow-y-auto max-h-[500px]", children: p.length === 0 ? t.jsxs("div", { className: "px-4 py-8 text-center text-muted-foreground text-sm", children: [t.jsx(Jg, { className: "h-8 w-8 mx-auto mb-2 opacity-50" }), "Sin epics"] }) : p.map(C => t.jsx(v0, { epicSection: C, sprintNum: g, isExpanded: c === C.epic.id, onToggle: () => u(C.epic.id), onTaskClick: m }, C.epic.id)) })] }); }
function aw({ tasks: l, onTaskClick: n }) { return l.length === 0 ? null : t.jsxs("div", { className: "w-full border-t-2 border-dashed border-muted bg-muted/5", children: [t.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 border-b border-border", children: [t.jsx(Jg, { className: "h-4 w-4 text-muted-foreground" }), t.jsxs("span", { className: "text-sm font-semibold text-muted-foreground", children: ["Backlog - Tareas sin Sprint/Epic (", l.length, ")"] })] }), t.jsx("div", { className: "flex flex-wrap gap-2 p-3", children: l.map(i => t.jsx(em, { task: i, onClick: () => n(i.id) }, i.id)) })] }); }
function lw({ hierarchy: l, expandedSprintId: n, expandedEpicId: i, onSprintToggle: c, onEpicToggle: u, onTaskClick: m }) { return t.jsxs("div", { className: "w-full overflow-x-auto border border-border rounded-lg bg-card shadow-sm", children: [t.jsx(tw, { code: l.project.code, name: l.project.name }), t.jsx("div", { className: "flex min-h-[100px]", children: l.sprints.length === 0 ? t.jsx("div", { className: "flex-1 flex items-center justify-center text-muted-foreground text-sm py-8", children: "No hay sprints" }) : l.sprints.map(h => t.jsx(sw, { column: h, isExpanded: n === h.sprint.id, onToggle: () => c(h.sprint.id), expandedEpicId: i, onEpicToggle: u, onTaskClick: m }, h.sprint.id)) }), t.jsx(aw, { tasks: l.backlogTasks, onTaskClick: m }), t.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-xs text-muted-foreground px-4 py-2 border-t border-border bg-muted/10 rounded-b-lg", children: [t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx("div", { className: "w-3 h-3 rounded-sm bg-green-500" }), t.jsx("span", { children: "Completada" })] }), t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx("div", { className: "w-3 h-3 rounded-sm bg-blue-500" }), t.jsx("span", { children: "Activo" })] }), t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx("div", { className: "w-3 h-3 rounded-sm bg-red-500" }), t.jsx("span", { children: "Bloqueada" })] }), t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx("div", { className: "w-3 h-3 rounded-sm bg-gray-500/40" }), t.jsx("span", { children: "Planned" })] }), t.jsx("span", { className: "ml-auto text-muted-foreground/70 italic", children: "Click para expandir Sprint → Epic → Tasks" })] })] }); }
function nw({ sprints: l }) { return t.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: l.map(n => { const { sprint: i, isActive: c, epics: u, totalTasks: m, completedTasks: h } = n, f = i.status, p = Ac(c ? "active" : f), v = m > 0 ? Math.round(h / m * 100) : 0, j = `SPR-${String(i.sprintNumber).padStart(2, "0")}`; return t.jsxs("div", { className: V("rounded-lg border-2 overflow-hidden", p.border), children: [t.jsxs("div", { className: V("px-4 py-3", p.bg), children: [t.jsxs("div", { className: "flex items-center justify-between mb-1", children: [t.jsx("span", { className: "font-mono text-sm font-bold", children: j }), t.jsx("span", { className: V("text-xs px-2 py-0.5 rounded-full font-medium", p.bg, p.text), children: pr(f) })] }), t.jsx("h3", { className: "font-semibold text-lg", children: i.name })] }), t.jsxs("div", { className: "px-4 py-3 space-y-2", children: [t.jsxs("div", { className: "flex justify-between text-sm", children: [t.jsxs("span", { className: "text-muted-foreground", children: [u.length, " Epics"] }), t.jsxs("span", { className: "text-muted-foreground", children: [h, "/", m, " Tasks"] })] }), t.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: t.jsx("div", { className: "h-full bg-green-500 transition-all", style: { width: `${v}%` } }) }), t.jsxs("div", { className: "text-right text-sm font-medium", children: [v, "%"] })] })] }, i.id); }) }); }
function rw({ sprints: l, onTaskClick: n }) { const [i, c] = M.useState("all"), [u, m] = M.useState(null), h = l.flatMap(p => p.epics.map(v => ({ ...v, sprintNum: p.sprint.sprintNumber, sprintName: p.sprint.name }))), f = i === "all" ? h : h.filter(p => p.epic.status === i); return t.jsxs("div", { className: "space-y-4", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("span", { className: "text-sm text-muted-foreground", children: "Estado:" }), ["all", "planned", "active", "in_progress", "completed"].map(p => t.jsx("button", { onClick: () => c(p), className: V("px-3 py-1 text-xs rounded-full border transition-all", i === p ? "bg-solaria text-white border-solaria" : "border-border hover:bg-muted"), children: p === "all" ? "Todos" : pr(p) }, p))] }), t.jsx("div", { className: "space-y-3", children: f.length === 0 ? t.jsx("div", { className: "text-center py-12 text-muted-foreground", children: "No hay epics con ese filtro" }) : f.map(({ epic: p, tasks: v, completedCount: j, sprintNum: g }) => t.jsx(v0, { epicSection: { epic: p, tasks: v, completedCount: j }, sprintNum: g, isExpanded: u === p.id, onToggle: () => m(u === p.id ? null : p.id), onTaskClick: n }, p.id)) })] }); }
function iw({ sprints: l, backlogTasks: n, onTaskClick: i }) { const [c, u] = M.useState("all"), m = [...l.flatMap(f => f.epics.flatMap(p => p.tasks.map(v => ({ task: v, sprintNum: f.sprint.sprintNumber, epicNum: p.epic.epicNumber, epicName: p.epic.name, sprintName: f.sprint.name })))), ...n.map(f => ({ task: f, sprintNum: void 0, epicNum: void 0, epicName: "Backlog", sprintName: "Sin Sprint" }))], h = c === "all" ? m : m.filter(f => f.task.status === c); return t.jsxs("div", { className: "space-y-4", children: [t.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [t.jsx("span", { className: "text-sm text-muted-foreground", children: "Estado:" }), ["all", "pending", "in_progress", "blocked", "completed"].map(f => t.jsx("button", { onClick: () => u(f), className: V("px-3 py-1 text-xs rounded-full border transition-all", c === f ? "bg-solaria text-white border-solaria" : "border-border hover:bg-muted"), children: f === "all" ? "Todos" : pr(f) }, f))] }), t.jsxs("div", { className: "flex gap-4 text-sm text-muted-foreground", children: [t.jsxs("span", { children: ["Total: ", h.length] }), t.jsx("span", { children: "|" }), t.jsxs("span", { children: ["Completadas: ", h.filter(f => f.task.status === "completed").length] })] }), t.jsx("div", { className: "space-y-2", children: h.length === 0 ? t.jsx("div", { className: "text-center py-12 text-muted-foreground", children: "No hay tareas con ese filtro" }) : h.map(({ task: f, sprintNum: p, epicNum: v }) => t.jsx(em, { task: f, sprintNum: p, epicNum: v, onClick: () => i(f.id) }, f.id)) })] }); }
function cw(l, n, i, c) { const m = [...n].sort((f, p) => f.sprintNumber - p.sprintNumber).map(f => { const v = i.filter(b => b.sprintId === f.id).sort((b, N) => b.epicNumber - N.epicNumber).map(b => { const N = c.filter(w => w.epicId === b.id).sort((w, C) => { const T = { in_progress: 0, active: 0, pending: 1, planned: 1, blocked: 2, completed: 3 }, D = T[w.status] ?? 2, O = T[C.status] ?? 2; return D !== O ? D - O : w.taskNumber - C.taskNumber; }), S = N.filter(w => w.status === "completed").length; return { epic: b, tasks: N, completedCount: S }; }), j = v.reduce((b, N) => b + N.tasks.length, 0), g = v.reduce((b, N) => b + N.completedCount, 0); return { sprint: f, isActive: f.status === "active", epics: v, totalTasks: j, completedTasks: g }; }), h = c.filter(f => !f.sprintId && !f.epicId && f.status !== "completed"); return { project: l, sprints: m, backlogTasks: h }; }
function ow() { const { id: l } = wa(), n = ft(), i = Number(l), [c, u] = M.useState("normal"), [m, h] = M.useState(null), [f, p] = M.useState(null), [v, j] = M.useState(null), [g, b] = M.useState(null), { data: N, isLoading: S, error: w } = Pl(i), { data: C = [] } = x0(i), { data: T = [] } = p0(i), { data: D = [] } = Iu(i), O = M.useMemo(() => N ? cw({ code: N.code || "PRJ", name: N.name }, T, C, D) : null, [N, T, C, D]), F = pe => { h(m === pe ? null : pe), p(null); }, _ = pe => { p(f === pe ? null : pe); }, J = pe => { j(pe); }; if (S)
    return t.jsx("div", { className: "flex items-center justify-center h-64", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-solaria" }) }); if (w || !N || !O)
    return t.jsxs("div", { className: "flex flex-col items-center justify-center h-64 gap-4", children: [t.jsx(pt, { className: "h-12 w-12 text-red-500" }), t.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Proyecto no encontrado" }), t.jsx("button", { onClick: () => n("/projects"), className: "px-4 py-2 bg-secondary rounded-lg hover:bg-muted transition-colors", children: "Volver a proyectos" })] }); const U = O.sprints.length, K = C.length, ie = D.length, qe = D.filter(pe => pe.status === "completed").length; return t.jsxs("div", { className: "p-4 sm:p-6 space-y-6", children: [t.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("button", { onClick: () => n(`/projects/${i}`), className: "p-2 rounded-lg hover:bg-secondary transition-colors", children: t.jsx(ys, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsxs("h1", { className: "text-xl sm:text-2xl font-bold flex items-center gap-2", children: [t.jsx(Ku, { className: "h-5 w-5 sm:h-6 sm:w-6 text-solaria" }), "Roadmap"] }), t.jsx("p", { className: "text-sm text-muted-foreground", children: N.name })] })] }), t.jsx(ew, { mode: c, onChange: u })] }), t.jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground", children: [t.jsxs("span", { children: [U, " Sprints"] }), t.jsx("span", { className: "text-border", children: "|" }), t.jsxs("span", { children: [K, " Epics"] }), t.jsx("span", { className: "text-border", children: "|" }), t.jsxs("span", { children: [qe, "/", ie, " Tareas"] }), t.jsx("span", { className: "text-border", children: "|" }), t.jsxs("span", { children: [O.backlogTasks.length, " en Backlog"] })] }), c === "normal" && t.jsx(lw, { hierarchy: O, expandedSprintId: m, expandedEpicId: f, onSprintToggle: F, onEpicToggle: _, onTaskClick: J }), c === "sprints" && t.jsx(nw, { sprints: O.sprints }), c === "epics" && t.jsx(rw, { sprints: O.sprints, onTaskClick: J }), c === "tasks" && t.jsx(iw, { sprints: O.sprints, backlogTasks: O.backlogTasks, onTaskClick: J }), t.jsx(y0, { epicId: g, isOpen: g !== null, onClose: () => b(null), onTaskClick: pe => { b(null), j(pe); } }), t.jsx(W4, { taskId: v, isOpen: v !== null, onClose: () => j(null) })] }); }
const sc = [{ value: "plan", label: "Plan de Desarrollo", icon: Pa, color: "text-blue-400 bg-blue-500/10" }, { value: "spec", label: "Especificacion", icon: Lu, color: "text-purple-400 bg-purple-500/10" }, { value: "report", label: "Reporte", icon: Hu, color: "text-green-400 bg-green-500/10" }, { value: "manual", label: "Manual", icon: Bu, color: "text-orange-400 bg-orange-500/10" }, { value: "adr", label: "Decision de Arquitectura (ADR)", icon: Xu, color: "text-yellow-400 bg-yellow-500/10" }, { value: "roadmap", label: "Roadmap", icon: Pa, color: "text-cyan-400 bg-cyan-500/10" }, { value: "audit", label: "Auditoria", icon: mr, color: "text-red-400 bg-red-500/10" }, { value: "other", label: "Otro", icon: dr, color: "text-gray-400 bg-gray-500/10" }], j0 = { plan: Pa, spec: Lu, report: Hu, manual: Bu, adr: Xu, roadmap: Pa, audit: mr, other: dr };
function dw({ isOpen: l, onClose: n, projectId: i, document: c, onSave: u }) {
    const [m, h] = M.useState(""), [f, p] = M.useState("plan"), [v, j] = M.useState(""), [g, b] = M.useState(""), [N, S] = M.useState(!1), w = F2(), C = J2();
    M.useEffect(() => {
        c ? (h(c.name), p(c.type), j(c.contentMd || "")) : (h(""), p("plan"), j(`# Nuevo Documento

`), b(""));
    }, [c, l]);
    const T = async () => { if (!(!m.trim() || !v.trim()))
        try {
            c ? await C.mutateAsync({ projectId: i, docId: c.id, data: { name: m, type: f, content_md: v, change_summary: g || void 0 } }) : await w.mutateAsync({ projectId: i, data: { name: m, type: f, content_md: v } }), u(), n();
        }
        catch (O) {
            console.error("Error saving document:", O);
        } }, D = w.isPending || C.isPending;
    return t.jsx(Il, { isOpen: l, onClose: n, title: c ? "Editar Documento" : "Nuevo Documento", maxWidth: "max-w-3xl", className: "!max-w-[90vw] !max-h-[90vh]", children: t.jsxs("div", { className: "flex flex-col h-[80vh]", children: [t.jsxs("div", { className: "flex items-center gap-4 p-4 border-b border-border", children: [t.jsx("input", { type: "text", value: m, onChange: O => h(O.target.value), placeholder: "Nombre del documento...", className: "flex-1 bg-transparent text-lg font-semibold focus:outline-none" }), t.jsx("select", { value: f, onChange: O => p(O.target.value), className: "bg-secondary border border-border rounded-lg px-3 py-1.5 text-sm", children: sc.map(O => t.jsx("option", { value: O.value, children: O.label }, O.value)) }), t.jsxs("div", { className: "flex items-center gap-2 border-l border-border pl-4", children: [t.jsx("button", { onClick: () => S(!1), className: V("p-2 rounded transition-colors", N ? "text-muted-foreground hover:text-foreground" : "bg-solaria text-white"), title: "Editor", children: t.jsx(iN, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: () => S(!0), className: V("p-2 rounded transition-colors", N ? "bg-solaria text-white" : "text-muted-foreground hover:text-foreground"), title: "Vista previa", children: t.jsx(er, { className: "h-4 w-4" }) })] })] }), t.jsx("div", { className: "flex-1 overflow-hidden", children: N ? t.jsx("div", { className: "h-full overflow-auto p-6 prose prose-invert max-w-none", dangerouslySetInnerHTML: { __html: (c == null ? void 0 : c.contentHtml) || "<p>Vista previa no disponible</p>" } }) : t.jsx("textarea", { value: v, onChange: O => j(O.target.value), className: "w-full h-full p-4 bg-background font-mono text-sm resize-none focus:outline-none", placeholder: "Escribe en Markdown..." }) }), t.jsxs("div", { className: "flex items-center justify-between p-4 border-t border-border", children: [c && t.jsx("input", { type: "text", value: g, onChange: O => b(O.target.value), placeholder: "Resumen de cambios (opcional)...", className: "flex-1 bg-secondary border border-border rounded-lg px-3 py-2 text-sm mr-4" }), t.jsxs("div", { className: "flex items-center gap-2 ml-auto", children: [t.jsx("button", { onClick: n, className: "px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors", children: "Cancelar" }), t.jsxs("button", { onClick: T, disabled: D || !m.trim() || !v.trim(), className: "px-4 py-2 bg-solaria text-white rounded-lg text-sm font-medium hover:bg-solaria/90 transition-colors disabled:opacity-50 flex items-center gap-2", children: [D ? t.jsx(xe, { className: "h-4 w-4 animate-spin" }) : t.jsx(pc, { className: "h-4 w-4" }), "Guardar"] })] })] })] }) });
}
function uw({ document: l, onEdit: n, onDelete: i, onClose: c }) {
    const u = j0[l.type] || dr, m = sc.find(h => h.value === l.type);
    return t.jsxs("div", { className: "flex flex-col h-full", children: [t.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: V("p-2 rounded-lg", (m == null ? void 0 : m.color) || "bg-gray-500/10"), children: t.jsx(u, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("h2", { className: "text-lg font-semibold", children: l.name }), t.jsxs("p", { className: "text-xs text-muted-foreground", children: ["Version ", l.version, " - Actualizado ", new Date(l.updatedAt).toLocaleDateString("es-ES")] })] })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("button", { onClick: n, className: "p-2 text-muted-foreground hover:text-foreground transition-colors", title: "Editar", children: t.jsx(lr, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: i, className: "p-2 text-muted-foreground hover:text-red-400 transition-colors", title: "Eliminar", children: t.jsx(hr, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: c, className: "p-2 text-muted-foreground hover:text-foreground transition-colors", title: "Cerrar", children: t.jsx(ss, { className: "h-4 w-4" }) })] })] }), t.jsx("div", { className: `flex-1 overflow-auto p-6 prose prose-invert max-w-none
                    prose-headings:text-foreground prose-p:text-muted-foreground
                    prose-strong:text-foreground prose-a:text-solaria
                    prose-code:bg-secondary prose-code:px-1 prose-code:rounded
                    prose-pre:bg-secondary prose-pre:border prose-pre:border-border`, dangerouslySetInnerHTML: { __html: l.contentHtml || "<p>Sin contenido</p>" } })] });
}
function mw() { const { id: l } = wa(), n = ft(), [i, c] = tv(), u = Number(l), [m, h] = M.useState(""), [f, p] = M.useState(""), [v, j] = M.useState(!1), [g, b] = M.useState(null), { data: N, isLoading: S } = Pl(u), { data: w, isLoading: C, refetch: T } = g0(u, f || void 0), D = i.get("doc") ? Number(i.get("doc")) : null, { data: O } = Z2(u, D), F = $2(); M.useEffect(() => { i.get("new") === "true" && (j(!0), b(null), i.delete("new"), c(i)); }, [i, c]); const _ = (w == null ? void 0 : w.documents) || [], J = m ? _.filter(ne => ne.name.toLowerCase().includes(m.toLowerCase())) : _, U = ne => { i.set("doc", String(ne)), c(i); }, K = () => { i.delete("doc"), c(i); }, ie = () => { O && (b(O), j(!0)); }, qe = async () => { if (O && confirm(`¿Eliminar "${O.name}"? Esta accion no se puede deshacer.`))
    try {
        await F.mutateAsync({ projectId: u, docId: O.id }), K(), T();
    }
    catch (ne) {
        console.error("Error deleting document:", ne);
    } }, pe = () => { b(null), j(!0); }; return S ? t.jsx("div", { className: "flex items-center justify-center h-full", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-solaria" }) }) : N ? t.jsxs("div", { className: "flex flex-col h-full", children: [t.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border bg-card", children: [t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: () => n(`/projects/${u}`), className: "p-2 hover:bg-secondary rounded-lg transition-colors", children: t.jsx(ys, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsxs("h1", { className: "text-xl font-bold flex items-center gap-2", children: [t.jsx(Fa, { className: "h-5 w-5 text-solaria" }), "Documentacion"] }), t.jsx("p", { className: "text-sm text-muted-foreground", children: N.name })] })] }), t.jsxs("button", { onClick: pe, className: "px-4 py-2 bg-solaria text-white rounded-lg text-sm font-medium hover:bg-solaria/90 transition-colors flex items-center gap-2", children: [t.jsx(rt, { className: "h-4 w-4" }), "Nuevo Documento"] })] }), t.jsxs("div", { className: "flex-1 flex overflow-hidden", children: [t.jsxs("div", { className: "w-80 border-r border-border flex flex-col bg-card", children: [t.jsxs("div", { className: "p-3 space-y-2 border-b border-border", children: [t.jsxs("div", { className: "relative", children: [t.jsx(Wa, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), t.jsx("input", { type: "text", value: m, onChange: ne => h(ne.target.value), placeholder: "Buscar documentos...", className: "w-full pl-9 pr-3 py-2 bg-secondary border border-border rounded-lg text-sm" })] }), t.jsxs("select", { value: f, onChange: ne => p(ne.target.value), className: "w-full bg-secondary border border-border rounded-lg px-3 py-2 text-sm", children: [t.jsx("option", { value: "", children: "Todos los tipos" }), sc.map(ne => t.jsx("option", { value: ne.value, children: ne.label }, ne.value))] })] }), t.jsx("div", { className: "flex-1 overflow-auto p-2", children: C ? t.jsx("div", { className: "flex items-center justify-center py-8", children: t.jsx(xe, { className: "h-6 w-6 animate-spin text-solaria" }) }) : J.length === 0 ? t.jsxs("div", { className: "text-center py-8", children: [t.jsx(Fa, { className: "h-12 w-12 mx-auto text-muted-foreground/30 mb-2" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Sin documentos" }), t.jsx("button", { onClick: pe, className: "text-xs text-solaria hover:underline mt-2", children: "Crear primer documento" })] }) : t.jsx("div", { className: "space-y-1", children: J.map(ne => { const Ke = j0[ne.type] || dr, Re = sc.find(R => R.value === ne.type), se = D === ne.id; return t.jsx("button", { onClick: () => U(ne.id), className: V("w-full p-3 rounded-lg text-left transition-colors", se ? "bg-solaria/20 border border-solaria/50" : "hover:bg-secondary"), children: t.jsxs("div", { className: "flex items-start gap-3", children: [t.jsx("div", { className: V("p-1.5 rounded", (Re == null ? void 0 : Re.color) || "bg-gray-500/10"), children: t.jsx(Ke, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx("p", { className: "font-medium text-sm truncate", children: ne.name }), t.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: ["v", ne.version, " - ", new Date(ne.updatedAt).toLocaleDateString("es-ES")] })] })] }) }, ne.id); }) }) })] }), t.jsx("div", { className: "flex-1 bg-background", children: O ? t.jsx(uw, { document: O, onEdit: ie, onDelete: qe, onClose: K }) : t.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground", children: [t.jsx(Fa, { className: "h-16 w-16 mb-4 opacity-30" }), t.jsx("p", { className: "text-lg", children: "Selecciona un documento para ver su contenido" }), t.jsx("p", { className: "text-sm mt-1", children: "o crea uno nuevo" })] }) })] }), t.jsx(dw, { isOpen: v, onClose: () => { j(!1), b(null); }, projectId: u, document: g, onSave: T })] }) : t.jsx("div", { className: "flex items-center justify-center h-full", children: t.jsx("p", { className: "text-muted-foreground", children: "Proyecto no encontrado" }) }); }
const Gp = { critical: { color: "text-red-500", bg: "bg-red-500/10", label: "Critica" }, high: { color: "text-orange-500", bg: "bg-orange-500/10", label: "Alta" }, medium: { color: "text-yellow-500", bg: "bg-yellow-500/10", label: "Media" }, low: { color: "text-green-500", bg: "bg-green-500/10", label: "Baja" } }, Qp = { feature: { color: "text-purple-500", bg: "bg-purple-500/10", label: "Feature" }, bug: { color: "text-red-500", bg: "bg-red-500/10", label: "Bug" }, enhancement: { color: "text-blue-500", bg: "bg-blue-500/10", label: "Mejora" }, documentation: { color: "text-gray-500", bg: "bg-gray-500/10", label: "Docs" }, research: { color: "text-cyan-500", bg: "bg-cyan-500/10", label: "Research" }, maintenance: { color: "text-amber-500", bg: "bg-amber-500/10", label: "Maint." } };
function hw({ task: l, onClick: n, showProject: i = !1, compact: c = !1 }) { const u = Gp[l.priority] || Gp.medium, m = Qp[l.type] || Qp.feature, h = l.itemsTotal || 0, f = l.itemsCompleted || 0, p = h > 0 ? Math.round(f / h * 100) : 0, v = l.dueDate && new Date(l.dueDate) < new Date && l.status !== "completed"; return c ? t.jsxs("div", { onClick: n, className: "task-card-compact", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [t.jsx("span", { className: V("task-badge", m.bg, m.color), children: m.label }), t.jsx("span", { className: "task-code", children: l.taskCode || `#${l.taskNumber}` })] }), t.jsx("div", { className: "task-title-compact", children: l.title }), h > 0 && t.jsxs("div", { className: "task-progress-mini", children: [t.jsx("div", { className: "task-progress-bar-mini", children: t.jsx("div", { className: "task-progress-fill-mini", style: { width: `${p}%` } }) }), t.jsxs("span", { className: "task-progress-text-mini", children: [f, "/", h] })] })] }) : t.jsxs("div", { onClick: n, className: V("task-card", l.status === "blocked" && "blocked", v && "overdue"), children: [t.jsxs("div", { className: "task-card-header", children: [t.jsxs("div", { className: "task-badges", children: [t.jsx("span", { className: V("task-badge", m.bg, m.color), children: m.label }), t.jsxs("span", { className: V("task-badge", u.bg, u.color), children: [t.jsx(Qg, { className: "h-3 w-3" }), u.label] })] }), t.jsx("span", { className: "task-code", children: l.taskCode || `#${l.taskNumber}` })] }), i && l.projectName && t.jsx("div", { className: "task-project-label", children: l.projectCode || l.projectName }), t.jsx("h4", { className: "task-card-title", children: l.title }), l.description && t.jsx("p", { className: "task-card-description", children: l.description }), h > 0 && t.jsxs("div", { className: "task-items-progress", children: [t.jsxs("div", { className: "flex items-center justify-between mb-1", children: [t.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [t.jsx(Te, { className: "h-3 w-3" }), "Subtareas"] }), t.jsxs("span", { className: "text-xs font-medium", children: [f, "/", h] })] }), t.jsx("div", { className: "task-progress-bar", children: t.jsx("div", { className: V("task-progress-fill", p === 100 && "complete"), style: { width: `${p}%` } }) })] }), t.jsxs("div", { className: "task-card-footer", children: [l.dueDate && t.jsxs("div", { className: V("task-meta", v && "text-red-500"), children: [t.jsx(gt, { className: "h-3 w-3" }), t.jsx("span", { children: Qe(l.dueDate) })] }), l.estimatedHours && t.jsxs("div", { className: "task-meta", children: [t.jsx(De, { className: "h-3 w-3" }), t.jsxs("span", { children: [l.estimatedHours, "h"] })] }), l.notes && t.jsx("div", { className: "task-meta", children: t.jsx(Fg, { className: "h-3 w-3" }) }), t.jsx("div", { className: "flex-1" }), l.agentName && t.jsxs("div", { className: "task-assignee", children: [t.jsx("div", { className: "task-assignee-avatar", children: t.jsx(vs, { className: "h-3 w-3" }) }), t.jsx("span", { className: "task-assignee-name", children: l.agentName.split("-").pop() })] }), l.status === "blocked" && t.jsxs("div", { className: "task-blocked-badge", children: [t.jsx(pt, { className: "h-3 w-3" }), "Bloqueado"] })] })] }); }
const iu = { pending: { label: "Pendiente", color: "text-gray-500", bg: "bg-gray-500/10" }, in_progress: { label: "En Progreso", color: "text-blue-500", bg: "bg-blue-500/10" }, review: { label: "En Revision", color: "text-purple-500", bg: "bg-purple-500/10" }, completed: { label: "Completada", color: "text-green-500", bg: "bg-green-500/10" }, blocked: { label: "Bloqueada", color: "text-red-500", bg: "bg-red-500/10" } }, Kp = { critical: { label: "Critica", color: "text-red-500", bg: "bg-red-500/10" }, high: { label: "Alta", color: "text-orange-500", bg: "bg-orange-500/10" }, medium: { label: "Media", color: "text-yellow-500", bg: "bg-yellow-500/10" }, low: { label: "Baja", color: "text-green-500", bg: "bg-green-500/10" } }, Yp = { feature: { label: "Feature", color: "text-purple-500", bg: "bg-purple-500/10" }, bug: { label: "Bug", color: "text-red-500", bg: "bg-red-500/10" }, enhancement: { label: "Mejora", color: "text-blue-500", bg: "bg-blue-500/10" }, documentation: { label: "Documentacion", color: "text-gray-500", bg: "bg-gray-500/10" }, research: { label: "Investigacion", color: "text-cyan-500", bg: "bg-cyan-500/10" }, maintenance: { label: "Mantenimiento", color: "text-amber-500", bg: "bg-amber-500/10" } };
function fw({ taskId: l, isOpen: n, onClose: i, onNavigateToProject: c }) { const { data: u, isLoading: m } = Pu(l || 0), h = k2(), [f, p] = M.useState(!1), [v, j] = M.useState(""), [g, b] = M.useState(""); if (!n)
    return null; const N = () => { u && (j(u.notes || ""), b(u.status), p(!0)); }, S = async () => { u && (await h.mutateAsync({ id: u.id, data: { notes: v, status: g || void 0 } }), p(!1)); }, w = async (U) => { u && await h.mutateAsync({ id: u.id, data: { status: U } }); }, C = u ? iu[u.status] : iu.pending, T = u ? Kp[u.priority] : Kp.medium, D = u ? Yp[u.type] : Yp.feature, O = (u == null ? void 0 : u.dueDate) && new Date(u.dueDate) < new Date && u.status !== "completed", F = (u == null ? void 0 : u.itemsTotal) || 0, _ = (u == null ? void 0 : u.itemsCompleted) || 0, J = F > 0 ? Math.round(_ / F * 100) : (u == null ? void 0 : u.progress) || 0; return t.jsxs("div", { className: "drawer-container", children: [t.jsx("div", { className: V("drawer-overlay", n && "active"), onClick: i }), t.jsx("div", { className: V("drawer-panel max-w-xl", n && "active"), children: m ? t.jsx("div", { className: "flex items-center justify-center h-full", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : u ? t.jsxs(t.Fragment, { children: [t.jsxs("div", { className: "drawer-header", children: [t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [t.jsx("span", { className: V("task-badge", D.bg, D.color), children: D.label }), t.jsx("span", { className: "task-code", children: u.taskCode || `#${u.taskNumber}` })] }), t.jsx("h2", { className: "drawer-title", children: u.title }), u.projectName && t.jsxs("button", { onClick: () => c == null ? void 0 : c(u.projectId), className: "drawer-subtitle flex items-center gap-1 hover:text-primary transition-colors", children: [u.projectCode || u.projectName, t.jsx(Gt, { className: "h-3 w-3" })] })] }), t.jsx("button", { onClick: i, className: "drawer-close", children: t.jsx(ss, { className: "h-5 w-5" }) })] }), t.jsxs("div", { className: "drawer-content", children: [t.jsxs("div", { className: "task-detail-section", children: [t.jsxs("div", { className: "task-detail-row", children: [t.jsxs("div", { className: "task-detail-label", children: [t.jsx(Te, { className: "h-4 w-4" }), "Estado"] }), t.jsx("div", { className: "task-detail-value", children: f ? t.jsx("select", { value: g, onChange: U => b(U.target.value), className: "task-detail-select", children: Object.entries(iu).map(([U, K]) => t.jsx("option", { value: U, children: K.label }, U)) }) : t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("span", { className: V("status-badge", C.bg, C.color), children: C.label }), t.jsxs("div", { className: "task-status-actions", children: [u.status === "pending" && t.jsx("button", { onClick: () => w("in_progress"), className: "status-action-btn in_progress", children: "Iniciar" }), u.status === "in_progress" && t.jsxs(t.Fragment, { children: [t.jsx("button", { onClick: () => w("review"), className: "status-action-btn review", children: "A Revision" }), t.jsx("button", { onClick: () => w("completed"), className: "status-action-btn completed", children: "Completar" })] }), u.status === "review" && t.jsx("button", { onClick: () => w("completed"), className: "status-action-btn completed", children: "Aprobar" })] })] }) })] }), t.jsxs("div", { className: "task-detail-row", children: [t.jsxs("div", { className: "task-detail-label", children: [t.jsx(Qg, { className: "h-4 w-4" }), "Prioridad"] }), t.jsx("div", { className: "task-detail-value", children: t.jsx("span", { className: V("priority-badge", T.bg, T.color), children: T.label }) })] }), u.agentName && t.jsxs("div", { className: "task-detail-row", children: [t.jsxs("div", { className: "task-detail-label", children: [t.jsx(vs, { className: "h-4 w-4" }), "Asignado"] }), t.jsx("div", { className: "task-detail-value", children: t.jsxs("div", { className: "task-assignee-full", children: [t.jsx("div", { className: "task-assignee-avatar-lg", children: t.jsx(vs, { className: "h-4 w-4" }) }), t.jsx("span", { children: u.agentName })] }) })] }), u.dueDate && t.jsxs("div", { className: "task-detail-row", children: [t.jsxs("div", { className: "task-detail-label", children: [t.jsx(gt, { className: "h-4 w-4" }), "Fecha limite"] }), t.jsxs("div", { className: V("task-detail-value", O && "text-red-500"), children: [Qt(u.dueDate), O && t.jsxs("span", { className: "ml-2 text-xs", children: [t.jsx(pt, { className: "h-3 w-3 inline" }), " Vencida"] })] })] }), (u.estimatedHours || u.actualHours) && t.jsxs("div", { className: "task-detail-row", children: [t.jsxs("div", { className: "task-detail-label", children: [t.jsx(De, { className: "h-4 w-4" }), "Tiempo"] }), t.jsx("div", { className: "task-detail-value", children: u.actualHours ? t.jsxs("span", { children: [u.actualHours, "h / ", u.estimatedHours, "h est."] }) : t.jsxs("span", { children: [u.estimatedHours, "h estimadas"] }) })] })] }), t.jsxs("div", { className: "task-detail-section", children: [t.jsxs("div", { className: "task-detail-section-title", children: [t.jsx(Fu, { className: "h-4 w-4" }), "Progreso"] }), t.jsxs("div", { className: "task-progress-display", children: [t.jsx("div", { className: "task-progress-bar-lg", children: t.jsx("div", { className: V("task-progress-fill-lg", J === 100 && "complete"), style: { width: `${J}%` } }) }), t.jsxs("span", { className: "task-progress-label", children: [J, "%"] })] })] }), u.description && t.jsxs("div", { className: "task-detail-section", children: [t.jsxs("div", { className: "task-detail-section-title", children: [t.jsx(Fa, { className: "h-4 w-4" }), "Descripcion"] }), t.jsx("p", { className: "task-description-full", children: u.description })] }), t.jsx("div", { className: "task-detail-section", children: t.jsx(Wu, { taskId: u.id, editable: u.status !== "completed", showAddForm: u.status !== "completed" }) }), t.jsxs("div", { className: "task-detail-section", children: [t.jsxs("div", { className: "task-detail-section-header", children: [t.jsxs("div", { className: "task-detail-section-title", children: [t.jsx(Fg, { className: "h-4 w-4" }), "Notas"] }), !f && t.jsxs("button", { onClick: N, className: "edit-btn", children: [t.jsx(bN, { className: "h-3 w-3" }), "Editar"] })] }), f ? t.jsxs("div", { className: "task-notes-edit", children: [t.jsx("textarea", { value: v, onChange: U => j(U.target.value), placeholder: "Agregar notas...", className: "task-notes-textarea", rows: 4 }), t.jsxs("div", { className: "task-notes-actions", children: [t.jsx("button", { onClick: () => p(!1), className: "cancel-btn", children: "Cancelar" }), t.jsx("button", { onClick: S, disabled: h.isPending, className: "save-btn", children: h.isPending ? t.jsx(xe, { className: "h-4 w-4 animate-spin" }) : t.jsxs(t.Fragment, { children: [t.jsx(pc, { className: "h-3 w-3" }), "Guardar"] }) })] })] }) : u.notes ? t.jsx("p", { className: "task-notes-content", children: u.notes }) : t.jsx("p", { className: "task-notes-empty", children: "Sin notas" })] }), t.jsxs("div", { className: "task-detail-meta", children: [t.jsxs("span", { children: ["Creada ", Qe(u.createdAt)] }), t.jsx("span", { className: "meta-separator", children: "•" }), t.jsxs("span", { children: ["Actualizada ", Qe(u.updatedAt)] }), u.completedAt && t.jsxs(t.Fragment, { children: [t.jsx("span", { className: "meta-separator", children: "•" }), t.jsxs("span", { className: "text-green-500", children: ["Completada ", Qe(u.completedAt)] })] })] })] })] }) : t.jsx("div", { className: "flex items-center justify-center h-full text-muted-foreground", children: "Tarea no encontrada" }) })] }); }
const xw = { pending: "gantt-bar-pending", in_progress: "gantt-bar-in_progress", review: "gantt-bar-review", completed: "gantt-bar-completed", blocked: "gantt-bar-blocked" };
function pw({ task: l, startDate: n, endDate: i, onClick: c }) { const u = l.createdAt ? new Date(l.createdAt) : n, m = l.dueDate ? new Date(l.dueDate) : new Date(u.getTime() + 10080 * 60 * 1e3), h = n.getTime(), f = i.getTime(), p = f - h, v = Math.max(u.getTime(), h), j = Math.min(m.getTime(), f), g = (v - h) / p * 100, b = (j - v) / p * 100; if (b <= 0 || g >= 100)
    return t.jsxs("div", { className: "gantt-row", onClick: c, children: [t.jsxs("div", { className: "gantt-row-info", children: [t.jsx("span", { className: "gantt-task-code", children: l.taskCode || `#${l.taskNumber}` }), t.jsx("span", { className: "gantt-task-title", children: l.title })] }), t.jsx("div", { className: "gantt-row-timeline", children: t.jsx("div", { className: "gantt-bar-empty", children: "Fuera del rango visible" }) })] }); const N = l.progress || 0, S = l.dueDate && new Date(l.dueDate) < new Date && l.status !== "completed"; return t.jsxs("div", { className: V("gantt-row", c && "clickable"), onClick: c, children: [t.jsxs("div", { className: "gantt-row-info", children: [t.jsx("span", { className: "gantt-task-code", children: l.taskCode || `#${l.taskNumber}` }), t.jsx("span", { className: "gantt-task-title", children: l.title }), l.agentName && t.jsxs("span", { className: "gantt-task-agent", children: [t.jsx(vs, { className: "h-3 w-3" }), l.agentName.split("-").pop()] })] }), t.jsx("div", { className: "gantt-row-timeline", children: t.jsxs("div", { className: V("gantt-bar", xw[l.status], S && "overdue"), style: { left: `${Math.max(0, g)}%`, width: `${Math.min(b, 100 - g)}%` }, children: [t.jsx("div", { className: "gantt-bar-progress", style: { width: `${N}%` } }), t.jsxs("div", { className: "gantt-bar-content", children: [b > 10 && t.jsx("span", { className: "gantt-bar-label", children: l.title.length > 20 ? l.title.substring(0, 20) + "..." : l.title }), S && t.jsx(pt, { className: "h-3 w-3 text-red-500" })] })] }) })] }); }
function gw(l) { const n = new Date(Date.UTC(l.getFullYear(), l.getMonth(), l.getDate())), i = n.getUTCDay() || 7; n.setUTCDate(n.getUTCDate() + 4 - i); const c = new Date(Date.UTC(n.getUTCFullYear(), 0, 1)); return Math.ceil(((n.getTime() - c.getTime()) / 864e5 + 1) / 7); }
function cu(l) { const n = l.getDate(), i = l.toLocaleDateString("es", { month: "short" }); return `${n} ${i}`; }
function bw({ tasks: l, onTaskClick: n, weeksToShow: i = 8 }) { const [c, u] = M.useState(0), { startDate: m, endDate: h, weeks: f } = M.useMemo(() => { const N = new Date, S = N.getDay(), w = S === 0 ? -6 : 1 - S, C = new Date(N); C.setDate(N.getDate() + w + c * 7), C.setHours(0, 0, 0, 0); const T = new Date(C); T.setDate(C.getDate() + i * 7); const D = []; for (let O = 0; O < i; O++) {
    const F = new Date(C);
    F.setDate(C.getDate() + O * 7), D.push({ start: F, label: cu(F), weekNum: gw(F) });
} return { startDate: C, endDate: T, weeks: D }; }, [c, i]), p = M.useMemo(() => { const N = new Date, S = m.getTime(), w = h.getTime(), C = N.getTime(); return C < S || C > w ? null : (C - S) / (w - S) * 100; }, [m, h]), v = M.useMemo(() => [...l].sort((N, S) => { const w = N.createdAt ? new Date(N.createdAt).getTime() : 0, C = S.createdAt ? new Date(S.createdAt).getTime() : 0; return w - C; }), [l]), j = () => u(c - i), g = () => u(c + i), b = () => u(0); return t.jsxs("div", { className: "gantt-container", children: [t.jsxs("div", { className: "gantt-nav", children: [t.jsxs("div", { className: "gantt-nav-buttons", children: [t.jsx("button", { onClick: j, className: "gantt-nav-btn", children: t.jsx(Vg, { className: "h-4 w-4" }) }), t.jsxs("button", { onClick: b, className: "gantt-nav-btn today", children: [t.jsx(gt, { className: "h-4 w-4" }), "Hoy"] }), t.jsx("button", { onClick: g, className: "gantt-nav-btn", children: t.jsx(Sa, { className: "h-4 w-4" }) })] }), t.jsxs("div", { className: "gantt-date-range", children: [cu(m), " - ", cu(h)] })] }), t.jsxs("div", { className: "gantt-header", children: [t.jsx("div", { className: "gantt-header-info", children: "Tarea" }), t.jsx("div", { className: "gantt-header-timeline", children: f.map((N, S) => t.jsxs("div", { className: "gantt-week-column", style: { width: `${100 / i}%` }, children: [t.jsx("div", { className: "gantt-week-label", children: N.label }), t.jsxs("div", { className: "gantt-week-number", children: ["S", N.weekNum] })] }, S)) })] }), t.jsxs("div", { className: "gantt-body", children: [p !== null && t.jsx("div", { className: "gantt-today-marker", style: { left: `calc(200px + ${p}% * (100% - 200px) / 100)` }, children: t.jsx("div", { className: "gantt-today-label", children: "Hoy" }) }), t.jsx("div", { className: "gantt-grid", children: f.map((N, S) => t.jsx("div", { className: "gantt-grid-line", style: { left: `calc(200px + ${S / i * 100}% * (100% - 200px) / 100)` } }, S)) }), v.length > 0 ? v.map(N => t.jsx(pw, { task: N, startDate: m, endDate: h, onClick: () => n == null ? void 0 : n(N) }, N.id)) : t.jsxs("div", { className: "gantt-empty", children: [t.jsx(gt, { className: "h-12 w-12 text-muted-foreground/50" }), t.jsx("p", { children: "No hay tareas para mostrar en el Gantt" })] })] }), t.jsxs("div", { className: "gantt-legend", children: [t.jsxs("div", { className: "gantt-legend-item", children: [t.jsx("div", { className: "gantt-legend-color pending" }), t.jsx("span", { children: "Pendiente" })] }), t.jsxs("div", { className: "gantt-legend-item", children: [t.jsx("div", { className: "gantt-legend-color in_progress" }), t.jsx("span", { children: "En Progreso" })] }), t.jsxs("div", { className: "gantt-legend-item", children: [t.jsx("div", { className: "gantt-legend-color review" }), t.jsx("span", { children: "En Revision" })] }), t.jsxs("div", { className: "gantt-legend-item", children: [t.jsx("div", { className: "gantt-legend-color completed" }), t.jsx("span", { children: "Completada" })] }), t.jsxs("div", { className: "gantt-legend-item", children: [t.jsx("div", { className: "gantt-legend-color blocked" }), t.jsx("span", { children: "Bloqueada" })] })] })] }); }
const ou = [{ id: "pending", label: "Pendiente", color: "border-t-yellow-500", icon: De }, { id: "in_progress", label: "En Progreso", color: "border-t-blue-500", icon: xe }, { id: "review", label: "Revision", color: "border-t-purple-500", icon: Wa }, { id: "completed", label: "Completado", color: "border-t-green-500", icon: Te }, { id: "blocked", label: "Bloqueado", color: "border-t-red-500", icon: pt }];
function yw({ column: l, tasks: n, onTaskClick: i }) { const c = l.icon; return t.jsxs("div", { className: "kanban-column", children: [t.jsxs("div", { className: V("kanban-column-header", l.color), children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx(c, { className: V("h-4 w-4", l.id === "in_progress" && "animate-spin") }), t.jsx("h3", { className: "font-medium", children: l.label })] }), t.jsx("span", { className: "kanban-column-count", children: n.length })] }), t.jsxs("div", { className: "kanban-column-body", children: [n.map(u => t.jsx(hw, { task: u, onClick: () => i(u), compact: !0 }, u.id)), n.length === 0 && t.jsx("div", { className: "kanban-empty", children: t.jsx("span", { children: "Sin tareas" }) })] })] }); }
function vw({ tasks: l, onTaskClick: n }) { return t.jsx("div", { className: "list-table-container", children: t.jsxs("table", { className: "list-table", children: [t.jsx("thead", { children: t.jsxs("tr", { children: [t.jsx("th", { children: "Tarea" }), t.jsx("th", { children: "Proyecto" }), t.jsx("th", { children: "Estado" }), t.jsx("th", { children: "Prioridad" }), t.jsx("th", { children: "Progreso" }), t.jsx("th", { children: "Subtareas" }), t.jsx("th", { children: "Actualizado" })] }) }), t.jsx("tbody", { children: l.map(i => t.jsxs("tr", { onClick: () => n(i), className: "cursor-pointer", children: [t.jsx("td", { children: t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("span", { className: "text-xs font-mono text-muted-foreground", children: i.taskCode || `#${i.taskNumber}` }), t.jsx("span", { className: "font-medium", children: i.title })] }) }), t.jsx("td", { className: "text-muted-foreground", children: i.projectCode || i.projectName }), t.jsx("td", { children: t.jsx("span", { className: V("status-badge", u0(i.status)), children: i.status.replace("_", " ") }) }), t.jsx("td", { children: t.jsx("span", { className: V("priority-badge", b2(i.priority)), children: i.priority }) }), t.jsx("td", { children: t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "h-1.5 w-16 rounded-full bg-muted", children: t.jsx("div", { className: "h-full rounded-full bg-primary", style: { width: `${i.progress}%` } }) }), t.jsxs("span", { className: "text-xs", children: [i.progress, "%"] })] }) }), t.jsx("td", { className: "text-center", children: t.jsxs("span", { className: "text-sm", children: [i.itemsCompleted || 0, "/", i.itemsTotal || 0] }) }), t.jsx("td", { className: "text-muted-foreground", children: Qe(i.updatedAt) })] }, i.id)) })] }) }); }
function jw() { const l = ft(), [n, i] = M.useState("kanban"), [c, u] = M.useState(""), [m, h] = M.useState(""), [f, p] = M.useState(""), [v, j] = M.useState(null), { data: g, isLoading: b } = xr(), { data: N } = fr(), S = g == null ? void 0 : g.filter(U => { var pe, ne; const K = U.title.toLowerCase().includes(c.toLowerCase()) || ((pe = U.taskCode) == null ? void 0 : pe.toLowerCase().includes(c.toLowerCase())) || ((ne = U.description) == null ? void 0 : ne.toLowerCase().includes(c.toLowerCase())), ie = !m || U.projectId.toString() === m, qe = !f || U.status === f; return K && ie && qe; }), w = ou.reduce((U, K) => (U[K.id] = (S == null ? void 0 : S.filter(ie => ie.status === K.id)) || [], U), {}), C = M.useCallback(U => { j(U.id); }, []), T = M.useCallback(() => { j(null); }, []), D = M.useCallback(U => { l(`/projects/${U}`); }, [l]), O = (g == null ? void 0 : g.length) || 0, F = (g == null ? void 0 : g.filter(U => U.status === "completed").length) || 0, _ = (g == null ? void 0 : g.filter(U => U.status === "in_progress").length) || 0, J = (g == null ? void 0 : g.filter(U => U.status === "blocked").length) || 0; return b ? t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : t.jsxs("div", { className: "flex flex-col h-full gap-4", children: [t.jsxs("div", { className: "section-header shrink-0", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Tareas" }), t.jsxs("p", { className: "section-subtitle", children: [O, " tareas • ", F, " completadas • ", _, " en progreso", J > 0 && t.jsxs("span", { className: "text-red-500", children: [" • ", J, " bloqueadas"] })] })] }), t.jsx("div", { className: "section-actions", children: t.jsxs("button", { className: "btn-primary", children: [t.jsx(rt, { className: "h-4 w-4" }), "Nueva Tarea"] }) })] }), t.jsxs("div", { className: "grid grid-cols-4 gap-4 shrink-0", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon tasks", children: t.jsx(Te, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Total Tareas" }), t.jsx("div", { className: "stat-value", children: O })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx(Te, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Completadas" }), t.jsx("div", { className: "stat-value", children: F })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon active", children: t.jsx(xe, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "En Progreso" }), t.jsx("div", { className: "stat-value", children: _ })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon", style: { background: "rgba(239, 68, 68, 0.1)", color: "#ef4444" }, children: t.jsx(pt, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Bloqueadas" }), t.jsx("div", { className: "stat-value", children: J })] })] })] }), t.jsxs("div", { className: "filters-row shrink-0", children: [t.jsxs("div", { className: "filter-search", children: [t.jsx(Wa, { className: "filter-search-icon" }), t.jsx("input", { type: "text", placeholder: "Buscar tareas...", value: c, onChange: U => u(U.target.value), className: "filter-search-input" })] }), t.jsxs("div", { className: "filter-selects", children: [t.jsxs("div", { className: "filter-select-wrapper", children: [t.jsx(dN, { className: "h-4 w-4 text-muted-foreground" }), t.jsxs("select", { value: m, onChange: U => h(U.target.value), className: "filter-select", children: [t.jsx("option", { value: "", children: "Todos los proyectos" }), N == null ? void 0 : N.map(U => t.jsxs("option", { value: U.id, children: [U.code, " - ", U.name] }, U.id))] })] }), t.jsxs("select", { value: f, onChange: U => p(U.target.value), className: "filter-select", children: [t.jsx("option", { value: "", children: "Todos los estados" }), ou.map(U => t.jsx("option", { value: U.id, children: U.label }, U.id))] })] }), t.jsxs("div", { className: "view-toggle", children: [t.jsx("button", { onClick: () => i("kanban"), className: V("view-toggle-btn", n === "kanban" && "active"), title: "Vista Kanban", children: t.jsx(Fl, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: () => i("list"), className: V("view-toggle-btn", n === "list" && "active"), title: "Vista Lista", children: t.jsx(ur, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: () => i("gantt"), className: V("view-toggle-btn", n === "gantt" && "active"), title: "Vista Gantt", children: t.jsx(Zu, { className: "h-4 w-4" }) })] })] }), t.jsxs("div", { className: "flex-1 min-h-0 flex flex-col", children: [n === "kanban" && t.jsx("div", { className: "kanban-container", children: ou.map(U => t.jsx(yw, { column: U, tasks: w[U.id], onTaskClick: C }, U.id)) }), n === "list" && t.jsx("div", { className: "flex-1 min-h-0 overflow-auto", children: t.jsx(vw, { tasks: S || [], onTaskClick: C }) }), n === "gantt" && t.jsx("div", { className: "flex-1 min-h-0 overflow-auto", children: t.jsx(bw, { tasks: S || [], onTaskClick: C }) })] }), t.jsx(fw, { taskId: v, isOpen: v !== null, onClose: T, onNavigateToProject: D })] }); }
const tr = { critical: { color: "#ef4444", label: "P0", bg: "rgba(239, 68, 68, 0.2)" }, high: { color: "#f59e0b", label: "P1", bg: "rgba(249, 115, 22, 0.2)" }, medium: { color: "#3b82f6", label: "P2", bg: "rgba(59, 130, 246, 0.2)" }, low: { color: "#64748b", label: "P3", bg: "rgba(100, 116, 139, 0.2)" } };
function Nw({ taskId: l, isOpen: n, onClose: i }) { const c = n && l !== null && l > 0, { data: u, isLoading: m } = Pu(c ? l : 0); if (!n)
    return null; const h = u && tr[u.priority] || tr.medium; return t.jsx(Il, { isOpen: n, onClose: i, title: "", maxWidth: "max-w-2xl", children: !c || m ? t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : u ? t.jsxs(t.Fragment, { children: [t.jsxs("div", { className: "px-6 py-4 border-b border-border", style: { borderLeft: `4px solid ${h.color}` }, children: [t.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [t.jsx("span", { className: "px-2 py-1 rounded text-[11px] font-bold", style: { background: h.bg, color: h.color }, children: h.label }), t.jsx("span", { className: "px-2 py-1 rounded text-[11px] bg-green-500/10 text-green-500", children: "Completada" }), t.jsx("span", { className: "text-[11px] text-muted-foreground font-mono", children: u.taskCode || `#${u.id}` })] }), t.jsx("h3", { className: "text-lg font-semibold", children: u.title }), u.projectName && t.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [u.projectCode, " - ", u.projectName] })] }), t.jsxs("div", { className: "p-6 space-y-6 max-h-[60vh] overflow-y-auto", children: [u.description && t.jsxs("div", { children: [t.jsx("h4", { className: "text-sm font-medium mb-2", children: "Descripción" }), t.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: u.description })] }), t.jsxs("div", { children: [t.jsx("h4", { className: "text-sm font-medium mb-2", children: "Progreso" }), t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "flex-1 h-2 bg-secondary rounded-full overflow-hidden", children: t.jsx("div", { className: "h-full rounded-full bg-green-500", style: { width: `${u.progress || 100}%` } }) }), t.jsxs("span", { className: "text-sm font-semibold text-green-500", children: [u.progress || 100, "%"] })] })] }), t.jsx("div", { className: "border border-border rounded-lg p-4 bg-secondary/30", children: t.jsx(Wu, { taskId: u.id, editable: !1, showAddForm: !1 }) }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(vs, { className: "h-3 w-3" }), "Completado por"] }), t.jsx("p", { className: "text-sm font-medium flex items-center gap-1", children: u.agentName ? t.jsxs(t.Fragment, { children: [t.jsx(Gs, { className: "h-3 w-3 text-solaria" }), u.agentName] }) : "Sin asignar" })] }), t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(De, { className: "h-3 w-3" }), "Horas Estimadas"] }), t.jsxs("p", { className: "text-sm font-medium", children: [u.estimatedHours || 0, " horas"] })] }), t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(gt, { className: "h-3 w-3 text-green-400" }), "Fecha Creación"] }), t.jsx("p", { className: "text-sm font-medium", children: u.createdAt ? Qt(u.createdAt) : "N/A" })] }), t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(Te, { className: "h-3 w-3 text-green-500" }), "Completada"] }), t.jsx("p", { className: "text-sm font-medium text-green-500", children: u.completedAt ? Qe(u.completedAt) : Qe(u.updatedAt) })] })] })] }), t.jsx("div", { className: "px-6 py-4 border-t border-border flex items-center justify-end", children: t.jsx("button", { onClick: i, className: "px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm", children: "Cerrar" }) })] }) : t.jsx("div", { className: "py-12 text-center text-muted-foreground", children: "Tarea no encontrada" }) }); }
function ww() { const l = ft(), [n, i] = M.useState(""), [c, u] = M.useState(""), [m, h] = M.useState(null), { data: f, isLoading: p } = xr(), { data: v } = fr(), j = (f == null ? void 0 : f.filter(D => D.status === "completed")) || [], b = [...j.filter(D => { var _, J; const O = D.title.toLowerCase().includes(n.toLowerCase()) || ((_ = D.taskCode) == null ? void 0 : _.toLowerCase().includes(n.toLowerCase())) || ((J = D.description) == null ? void 0 : J.toLowerCase().includes(n.toLowerCase())), F = !c || D.projectId.toString() === c; return O && F; })].sort((D, O) => { const F = D.completedAt ? new Date(D.completedAt).getTime() : new Date(D.updatedAt).getTime(); return (O.completedAt ? new Date(O.completedAt).getTime() : new Date(O.updatedAt).getTime()) - F; }), N = M.useCallback(D => { h(D); }, []), S = M.useCallback(() => { h(null); }, []), w = b.reduce((D, O) => { const F = O.projectCode || O.projectName || "Sin Proyecto"; return D[F] || (D[F] = []), D[F].push(O), D; }, {}), C = j.length, T = j.filter(D => { const O = D.completedAt ? new Date(D.completedAt) : new Date(D.updatedAt), F = new Date; return F.setDate(F.getDate() - 7), O >= F; }).length; return p ? t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: () => l(-1), className: "p-2 hover:bg-secondary rounded-lg transition-colors", children: t.jsx(ys, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsxs("h1", { className: "text-xl font-bold flex items-center gap-2", children: [t.jsx(xs, { className: "h-6 w-6 text-solaria" }), "Tareas Archivadas"] }), t.jsxs("p", { className: "text-sm text-muted-foreground", children: [C, " tareas completadas • ", T, " esta semana"] })] })] }), t.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [t.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex items-center gap-4", children: [t.jsx("div", { className: "h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center", children: t.jsx(Te, { className: "h-6 w-6 text-green-500" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "text-sm text-muted-foreground", children: "Total Completadas" }), t.jsx("div", { className: "text-2xl font-bold", children: C })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex items-center gap-4", children: [t.jsx("div", { className: "h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center", children: t.jsx(gt, { className: "h-6 w-6 text-blue-500" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "text-sm text-muted-foreground", children: "Esta Semana" }), t.jsx("div", { className: "text-2xl font-bold", children: T })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex items-center gap-4", children: [t.jsx("div", { className: "h-12 w-12 rounded-lg bg-solaria/10 flex items-center justify-center", children: t.jsx(xs, { className: "h-6 w-6 text-solaria" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "text-sm text-muted-foreground", children: "Proyectos" }), t.jsx("div", { className: "text-2xl font-bold", children: Object.keys(w).length })] })] })] }), t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsxs("div", { className: "relative flex-1 max-w-md", children: [t.jsx(Wa, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), t.jsx("input", { type: "text", placeholder: "Buscar tareas completadas...", value: n, onChange: D => i(D.target.value), className: "w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-solaria transition-colors" })] }), t.jsxs("select", { value: c, onChange: D => u(D.target.value), className: "px-4 py-2 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-solaria transition-colors min-w-[200px]", children: [t.jsx("option", { value: "", children: "Todos los proyectos" }), v == null ? void 0 : v.map(D => t.jsxs("option", { value: D.id, children: [D.code, " - ", D.name] }, D.id))] })] }), t.jsxs("div", { className: "space-y-6", children: [Object.entries(w).map(([D, O]) => t.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [t.jsxs("div", { className: "p-4 border-b border-border bg-secondary/30", children: [t.jsx("h3", { className: "font-semibold text-lg", children: D }), t.jsxs("p", { className: "text-sm text-muted-foreground", children: [O.length, " tareas completadas"] })] }), t.jsx("div", { className: "divide-y divide-border", children: O.map(F => { const _ = tr[F.priority] || tr.medium; return t.jsxs("div", { onClick: () => N(F.id), className: "flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer transition-colors", children: [t.jsx("div", { className: "w-1 h-12 rounded-full flex-shrink-0", style: { background: _.color } }), t.jsx(Te, { className: "h-5 w-5 text-green-500 flex-shrink-0" }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [t.jsx("span", { className: "text-xs font-mono text-solaria font-semibold", children: F.taskCode || `#${F.taskNumber}` }), t.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded font-bold", style: { background: _.bg, color: _.color }, children: _.label })] }), t.jsx("h4", { className: "font-medium truncate", children: F.title }), F.description && t.jsx("p", { className: "text-sm text-muted-foreground line-clamp-1 mt-0.5", children: F.description })] }), t.jsxs("div", { className: "text-right flex-shrink-0", children: [t.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [t.jsx(De, { className: "h-3 w-3" }), Qe(F.completedAt || F.updatedAt)] }), F.agentName && t.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground mt-1 justify-end", children: [t.jsx(Gs, { className: "h-3 w-3 text-solaria" }), F.agentName.replace("SOLARIA-", "")] })] }), t.jsx(Sa, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" })] }, F.id); }) })] }, D)), b.length === 0 && t.jsxs("div", { className: "bg-card border border-border rounded-xl p-12 text-center", children: [t.jsx(xs, { className: "h-12 w-12 text-muted-foreground/50 mx-auto mb-4" }), t.jsx("h3", { className: "text-lg font-medium text-muted-foreground", children: "No hay tareas completadas" }), t.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Las tareas completadas aparecerán aquí" })] })] }), t.jsx(Nw, { taskId: m, isOpen: m !== null, onClose: S })] }); }
const Sw = ["completed", "cancelled"], kw = { completed: { label: "Completado", color: "#16a34a", icon: Te }, cancelled: { label: "Cancelado", color: "#ef4444", icon: Fi } };
function Cw() { const l = ft(), [n, i] = M.useState(""), [c, u] = M.useState(""), { data: m, isLoading: h } = fr(), { data: f } = xr({}), p = (m || []).filter(T => Sw.includes(T.status)), j = [...p.filter(T => { var F, _; const D = T.name.toLowerCase().includes(n.toLowerCase()) || ((F = T.code) == null ? void 0 : F.toLowerCase().includes(n.toLowerCase())) || ((_ = T.description) == null ? void 0 : _.toLowerCase().includes(n.toLowerCase())), O = !c || T.status === c; return D && O; })].sort((T, D) => { const O = new Date(T.updatedAt || T.createdAt).getTime(); return new Date(D.updatedAt || D.createdAt).getTime() - O; }), g = T => { const D = (f || []).filter(O => O.projectId === T); return { total: D.length, completed: D.filter(O => O.status === "completed").length }; }, b = p.length, N = p.filter(T => T.status === "completed").length, S = p.filter(T => T.status === "cancelled").length, w = p.reduce((T, D) => T + (D.budgetAllocated || 0), 0), C = T => { l(`/projects/${T}`); }; return h ? t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : t.jsxs("div", { className: "space-y-6", children: [t.jsx("div", { className: "section-header", children: t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: () => l(-1), className: "p-2 hover:bg-muted rounded-lg transition-colors", children: t.jsx(ys, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsxs("h1", { className: "section-title flex items-center gap-2", children: [t.jsx(xs, { className: "h-6 w-6 text-primary" }), "Proyectos Archivados"] }), t.jsxs("p", { className: "section-subtitle", children: [b, " proyectos en archivo"] })] })] }) }), t.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon", children: t.jsx(xs, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Total Archivados" }), t.jsx("div", { className: "stat-value", children: b })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx(Te, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Completados" }), t.jsx("div", { className: "stat-value", children: N })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon red", children: t.jsx(Fi, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Cancelados" }), t.jsx("div", { className: "stat-value", children: S })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon orange", children: t.jsx(Ji, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Budget Total" }), t.jsxs("div", { className: "stat-value", children: ["$", w >= 1e3 ? `${(w / 1e3).toFixed(0)}K` : w] })] })] })] }), t.jsxs("div", { className: "filters-row", children: [t.jsxs("div", { className: "filter-search", children: [t.jsx(Wa, { className: "filter-search-icon" }), t.jsx("input", { type: "text", placeholder: "Buscar proyectos archivados...", value: n, onChange: T => i(T.target.value), className: "filter-search-input" })] }), t.jsx("div", { className: "filter-selects", children: t.jsxs("select", { value: c, onChange: T => u(T.target.value), className: "filter-select", children: [t.jsx("option", { value: "", children: "Todos los estados" }), t.jsx("option", { value: "completed", children: "Completados" }), t.jsx("option", { value: "cancelled", children: "Cancelados" })] }) })] }), t.jsxs("div", { className: "space-y-4", children: [j.map(T => { const D = g(T.id), O = kw[T.status], F = (O == null ? void 0 : O.icon) || xs; return t.jsx("div", { className: "glass-card p-4 hover:bg-muted/50 cursor-pointer transition-colors", onClick: () => C(T.id), children: t.jsxs("div", { className: "flex items-start justify-between gap-4", children: [t.jsxs("div", { className: "flex items-start gap-4 min-w-0 flex-1", children: [t.jsx("div", { className: "p-2 rounded-lg bg-muted", children: t.jsx(va, { className: "h-6 w-6 text-muted-foreground" }) }), t.jsxs("div", { className: "min-w-0 flex-1", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [t.jsx("span", { className: "text-xs font-mono bg-muted px-1.5 py-0.5 rounded", children: T.code }), t.jsxs("span", { className: "text-xs px-2 py-0.5 rounded flex items-center gap-1", style: { backgroundColor: `${O == null ? void 0 : O.color}20`, color: O == null ? void 0 : O.color }, children: [t.jsx(F, { className: "h-3 w-3" }), O == null ? void 0 : O.label] })] }), t.jsx("h3", { className: "font-semibold text-lg", children: T.name }), T.description && t.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mt-1", children: T.description }), t.jsxs("div", { className: "flex items-center gap-4 mt-3 text-sm text-muted-foreground", children: [t.jsxs("div", { className: "flex items-center gap-1", children: [t.jsx(Te, { className: "h-4 w-4 text-green-500" }), t.jsxs("span", { children: [D.completed, "/", D.total, " tareas"] })] }), T.budgetAllocated && t.jsxs("div", { className: "flex items-center gap-1", children: [t.jsx(Ji, { className: "h-4 w-4 text-orange-500" }), t.jsxs("span", { children: ["$", T.budgetAllocated >= 1e3 ? `${(T.budgetAllocated / 1e3).toFixed(0)}K` : T.budgetAllocated] })] }), T.endDate && t.jsxs("div", { className: "flex items-center gap-1", children: [t.jsx(gt, { className: "h-4 w-4 text-blue-500" }), t.jsx("span", { children: Qt(T.endDate) })] }), t.jsxs("div", { className: "flex items-center gap-1", children: [t.jsx(De, { className: "h-4 w-4" }), t.jsxs("span", { children: ["Archivado: ", Qt(T.updatedAt)] })] })] })] })] }), t.jsx("button", { className: "p-2 hover:bg-accent rounded-lg transition-colors shrink-0", onClick: _ => { _.stopPropagation(), C(T.id); }, title: "Ver proyecto", children: t.jsx(er, { className: "h-5 w-5 text-muted-foreground" }) })] }) }, T.id); }), j.length === 0 && t.jsxs("div", { className: "glass-card p-12 text-center", children: [t.jsx(xs, { className: "h-12 w-12 text-muted-foreground/50 mx-auto mb-4" }), t.jsx("h3", { className: "text-lg font-medium text-muted-foreground", children: "No hay proyectos archivados" }), t.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Los proyectos completados o cancelados apareceran aqui" })] })] })] }); }
function Aw() { var U; const l = ft(), { user: n } = bs(), { theme: i, toggleTheme: c } = bc(), [u, m] = M.useState({ name: (n == null ? void 0 : n.name) || "", email: (n == null ? void 0 : n.email) || "" }), [h, f] = M.useState(!1), [p, v] = M.useState(null), [j, g] = M.useState({ currentPassword: "", newPassword: "", confirmPassword: "" }), [b, N] = M.useState({ current: !1, new: !1, confirm: !1 }), [S, w] = M.useState(!1), [C, T] = M.useState(null), [D, O] = M.useState(null), F = async (K) => { K.preventDefault(), f(!0), v(null); try {
    await new Promise(ie => setTimeout(ie, 1e3)), v({ type: "success", text: "Perfil actualizado correctamente" });
}
catch {
    v({ type: "error", text: "Error al actualizar el perfil" });
}
finally {
    f(!1);
} }, _ = async (K) => { if (K.preventDefault(), T(null), j.newPassword !== j.confirmPassword) {
    T({ type: "error", text: "Las contrasenas no coinciden" });
    return;
} if (j.newPassword.length < 6) {
    T({ type: "error", text: "La contrasena debe tener al menos 6 caracteres" });
    return;
} w(!0); try {
    await new Promise(ie => setTimeout(ie, 1e3)), T({ type: "success", text: "Contrasena actualizada correctamente" }), g({ currentPassword: "", newPassword: "", confirmPassword: "" });
}
catch {
    T({ type: "error", text: "Error al actualizar la contrasena" });
}
finally {
    w(!1);
} }, J = K => { var qe; const ie = (qe = K.target.files) == null ? void 0 : qe[0]; if (ie) {
    const pe = new FileReader;
    pe.onload = ne => { var Ke; O((Ke = ne.target) == null ? void 0 : Ke.result); }, pe.readAsDataURL(ie);
} }; return t.jsxs("div", { className: "space-y-6 max-w-4xl mx-auto", children: [t.jsx("div", { className: "section-header", children: t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: () => l(-1), className: "p-2 hover:bg-muted rounded-lg transition-colors", children: t.jsx(ys, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Configuracion" }), t.jsx("p", { className: "section-subtitle", children: "Gestiona tu perfil y preferencias" })] })] }) }), t.jsxs("div", { className: "grid gap-6", children: [t.jsxs("div", { className: "glass-card", children: [t.jsx("div", { className: "p-6 border-b border-border", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "p-2 rounded-lg bg-primary/10", children: t.jsx(vs, { className: "h-5 w-5 text-primary" }) }), t.jsxs("div", { children: [t.jsx("h2", { className: "font-semibold", children: "Perfil" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Tu informacion personal" })] })] }) }), t.jsxs("form", { onSubmit: F, className: "p-6 space-y-6", children: [t.jsxs("div", { className: "flex items-center gap-6", children: [t.jsxs("div", { className: "relative", children: [t.jsx("div", { className: "h-20 w-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold overflow-hidden", children: D ? t.jsx("img", { src: D, alt: "Avatar", className: "h-full w-full object-cover" }) : ((U = n == null ? void 0 : n.name) == null ? void 0 : U.charAt(0).toUpperCase()) || "U" }), t.jsxs("label", { className: "absolute -bottom-1 -right-1 p-1.5 bg-muted rounded-full cursor-pointer hover:bg-accent transition-colors", children: [t.jsx(sN, { className: "h-4 w-4" }), t.jsx("input", { type: "file", accept: "image/*", onChange: J, className: "hidden" })] })] }), t.jsxs("div", { children: [t.jsx("h3", { className: "font-medium", children: n == null ? void 0 : n.name }), t.jsx("p", { className: "text-sm text-muted-foreground capitalize", children: n == null ? void 0 : n.role })] })] }), t.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [t.jsxs("div", { className: "space-y-2", children: [t.jsx("label", { className: "text-sm font-medium", children: "Nombre" }), t.jsx("input", { type: "text", value: u.name, onChange: K => m({ ...u, name: K.target.value }), className: "w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" })] }), t.jsxs("div", { className: "space-y-2", children: [t.jsx("label", { className: "text-sm font-medium", children: "Email" }), t.jsx("input", { type: "email", value: u.email, onChange: K => m({ ...u, email: K.target.value }), className: "w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" })] })] }), p && t.jsx("div", { className: V("px-4 py-3 rounded-lg text-sm", p.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"), children: p.text }), t.jsx("div", { className: "flex justify-end", children: t.jsx("button", { type: "submit", disabled: h, className: "btn-primary", children: h ? t.jsx(xe, { className: "h-4 w-4 animate-spin" }) : t.jsxs(t.Fragment, { children: [t.jsx(pc, { className: "h-4 w-4" }), "Guardar cambios"] }) }) })] })] }), t.jsxs("div", { className: "glass-card", children: [t.jsx("div", { className: "p-6 border-b border-border", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "p-2 rounded-lg bg-orange-500/10", children: t.jsx(xN, { className: "h-5 w-5 text-orange-500" }) }), t.jsxs("div", { children: [t.jsx("h2", { className: "font-semibold", children: "Seguridad" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Cambia tu contrasena" })] })] }) }), t.jsxs("form", { onSubmit: _, className: "p-6 space-y-4", children: [t.jsxs("div", { className: "space-y-2", children: [t.jsx("label", { className: "text-sm font-medium", children: "Contrasena actual" }), t.jsxs("div", { className: "relative", children: [t.jsx("input", { type: b.current ? "text" : "password", value: j.currentPassword, onChange: K => g({ ...j, currentPassword: K.target.value }), className: "w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" }), t.jsx("button", { type: "button", onClick: () => N({ ...b, current: !b.current }), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: b.current ? t.jsx(tu, { className: "h-4 w-4" }) : t.jsx(er, { className: "h-4 w-4" }) })] })] }), t.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [t.jsxs("div", { className: "space-y-2", children: [t.jsx("label", { className: "text-sm font-medium", children: "Nueva contrasena" }), t.jsxs("div", { className: "relative", children: [t.jsx("input", { type: b.new ? "text" : "password", value: j.newPassword, onChange: K => g({ ...j, newPassword: K.target.value }), className: "w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" }), t.jsx("button", { type: "button", onClick: () => N({ ...b, new: !b.new }), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: b.new ? t.jsx(tu, { className: "h-4 w-4" }) : t.jsx(er, { className: "h-4 w-4" }) })] })] }), t.jsxs("div", { className: "space-y-2", children: [t.jsx("label", { className: "text-sm font-medium", children: "Confirmar contrasena" }), t.jsxs("div", { className: "relative", children: [t.jsx("input", { type: b.confirm ? "text" : "password", value: j.confirmPassword, onChange: K => g({ ...j, confirmPassword: K.target.value }), className: "w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" }), t.jsx("button", { type: "button", onClick: () => N({ ...b, confirm: !b.confirm }), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: b.confirm ? t.jsx(tu, { className: "h-4 w-4" }) : t.jsx(er, { className: "h-4 w-4" }) })] })] })] }), C && t.jsx("div", { className: V("px-4 py-3 rounded-lg text-sm", C.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"), children: C.text }), t.jsx("div", { className: "flex justify-end", children: t.jsx("button", { type: "submit", disabled: S, className: "btn-primary", children: S ? t.jsx(xe, { className: "h-4 w-4 animate-spin" }) : t.jsxs(t.Fragment, { children: [t.jsx(mr, { className: "h-4 w-4" }), "Cambiar contrasena"] }) }) })] })] }), t.jsxs("div", { className: "glass-card", children: [t.jsx("div", { className: "p-6 border-b border-border", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "p-2 rounded-lg bg-blue-500/10", children: t.jsx(Lg, { className: "h-5 w-5 text-blue-500" }) }), t.jsxs("div", { children: [t.jsx("h2", { className: "font-semibold", children: "Preferencias" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Personaliza tu experiencia" })] })] }) }), t.jsxs("div", { className: "p-6 space-y-4", children: [t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsxs("div", { children: [t.jsx("h3", { className: "font-medium", children: "Tema" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Selecciona el tema de la interfaz" })] }), t.jsx("button", { onClick: c, className: "flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors", children: i === "dark" ? t.jsxs(t.Fragment, { children: [t.jsx(wu, { className: "h-4 w-4" }), "Oscuro"] }) : t.jsxs(t.Fragment, { children: [t.jsx(Pi, { className: "h-4 w-4" }), "Claro"] }) })] }), t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsxs("div", { children: [t.jsx("h3", { className: "font-medium", children: "Notificaciones" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Recibe alertas en tiempo real" })] }), t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [t.jsx("input", { type: "checkbox", defaultChecked: !0, className: "sr-only peer" }), t.jsx("div", { className: "w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" })] })] })] })] })] })] }); }
const Xp = { active: { label: "Activo", icon: $a }, busy: { label: "Ocupado", icon: De }, inactive: { label: "Inactivo", icon: pt }, error: { label: "Error", icon: pt }, maintenance: { label: "Mantenimiento", icon: gc } };
function Tw({ agent: l }) { const n = Xp[l.status] || Xp.inactive, i = n.icon; return t.jsxs("div", { className: "rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors", children: [t.jsxs("div", { className: "flex items-start gap-4", children: [t.jsxs("div", { className: "relative", children: [t.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary/10", children: l.avatar ? t.jsx("img", { src: l.avatar, alt: l.name, className: "h-16 w-16 rounded-full object-cover" }) : t.jsx(Gs, { className: "h-8 w-8 text-primary" }) }), t.jsx("span", { className: V("absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-card", u0(l.status)) })] }), t.jsxs("div", { className: "flex-1", children: [t.jsx("h3", { className: "font-semibold text-lg", children: l.name }), t.jsx("p", { className: "text-sm text-muted-foreground", children: l.role }), t.jsxs("div", { className: "mt-2 flex items-center gap-1.5", children: [t.jsx(i, { className: "h-3.5 w-3.5" }), t.jsx("span", { className: "text-sm capitalize", children: n.label })] })] })] }), l.currentTask && t.jsxs("div", { className: "mt-4 rounded-lg bg-muted/50 p-3", children: [t.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Tarea actual" }), t.jsx("p", { className: "text-sm font-medium", children: l.currentTask })] }), l.description && t.jsx("p", { className: "mt-4 text-sm text-muted-foreground line-clamp-2", children: l.description }), t.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-4 border-t border-border pt-4", children: [t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-2xl font-bold text-green-500", children: l.tasksCompleted || 0 }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Completadas" })] }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-2xl font-bold text-blue-500", children: l.tasksInProgress || 0 }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "En progreso" })] }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-2xl font-bold", children: l.avgTaskTime ? `${l.avgTaskTime.toFixed(1)}h` : "-" }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Tiempo prom." })] })] }), t.jsxs("div", { className: "mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground", children: [t.jsxs("span", { children: ["Última actividad: ", l.lastActivity ? Qe(l.lastActivity) : "Nunca"] }), l.lastHeartbeat && t.jsxs("span", { className: "flex items-center gap-1", children: [t.jsx($a, { className: "h-3 w-3" }), Qe(l.lastHeartbeat)] })] })] }); }
function Ew({ agents: l }) { const n = l.filter(m => m.status === "active").length, i = l.filter(m => m.status === "busy").length, c = l.filter(m => m.status === "inactive").length, u = l.filter(m => m.status === "error").length; return t.jsxs("div", { className: "grid gap-4 sm:grid-cols-4", children: [t.jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "rounded-lg bg-green-500/10 p-2", children: t.jsx($a, { className: "h-5 w-5 text-green-500" }) }), t.jsxs("div", { children: [t.jsx("p", { className: "text-2xl font-bold", children: n }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Activos" })] })] }) }), t.jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "rounded-lg bg-blue-500/10 p-2", children: t.jsx(De, { className: "h-5 w-5 text-blue-500" }) }), t.jsxs("div", { children: [t.jsx("p", { className: "text-2xl font-bold", children: i }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Ocupados" })] })] }) }), t.jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "rounded-lg bg-gray-500/10 p-2", children: t.jsx(Te, { className: "h-5 w-5 text-gray-500" }) }), t.jsxs("div", { children: [t.jsx("p", { className: "text-2xl font-bold", children: c }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Inactivos" })] })] }) }), t.jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "rounded-lg bg-red-500/10 p-2", children: t.jsx(pt, { className: "h-5 w-5 text-red-500" }) }), t.jsxs("div", { children: [t.jsx("p", { className: "text-2xl font-bold", children: u }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Con errores" })] })] }) })] }); }
function Mw() { const { data: l, isLoading: n } = h0(); return n ? t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx("div", { className: "text-muted-foreground", children: "Cargando agentes..." }) }) : t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "text-2xl font-bold", children: "Agentes IA" }), t.jsxs("p", { className: "text-muted-foreground", children: [(l == null ? void 0 : l.length) || 0, " agentes configurados"] })] }), t.jsx(Ew, { agents: l || [] }), t.jsx("div", { className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3", children: l && l.length > 0 ? l.map(i => t.jsx(Tw, { agent: i }, i.id)) : t.jsx("div", { className: "col-span-full py-12 text-center text-muted-foreground", children: "No hay agentes configurados" }) })] }); }
const du = [{ id: 1, name: "Akademate Platform", description: "Plataforma SaaS para academias con 12 tenants activos pagando suscripcion", icon: "graduation-cap", status: "active", metrics: { mrr: 48e3, arr: 576e3, clients: 12, churn: 2.5, growth: 15, ticketPromedio: 4e3 }, billing: { nextInvoice: "2024-02-01", pendingAmount: 12e3 } }, { id: 2, name: "Inscouter", description: "Plataforma de scouting deportivo con suscripciones activas", icon: "search", status: "growing", metrics: { mrr: 25e3, arr: 3e5, clients: 8, churn: 1.5, growth: 25, ticketPromedio: 3125 } }, { id: 3, name: "NazcaTrade", description: "Sistema de trading algoritmico con licencias enterprise", icon: "chart", status: "active", metrics: { mrr: 85e3, arr: 102e4, clients: 5, churn: 0, growth: 8, ticketPromedio: 17e3 } }, { id: 4, name: "SOLARIA Agency", description: "Servicios de consultoria y desarrollo web", icon: "building", status: "active", metrics: { mrr: 35e3, arr: 42e4, clients: 15, churn: 5, growth: 12, ticketPromedio: 2333 } }], N0 = { "graduation-cap": t.jsx(Qu, { className: "h-6 w-6" }), search: t.jsx(Wa, { className: "h-6 w-6" }), chart: t.jsx(aN, { className: "h-6 w-6" }), building: t.jsx(Hg, { className: "h-6 w-6" }) };
function ac(l) { return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(l); }
function Dw({ metrics: l }) { const n = l || { mrr: 0, arr: 0, clients: 0, churn: 0, growth: 0 }; return t.jsxs("div", { className: "metrics-row", children: [t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "MRR" }), t.jsx("div", { className: "metric-value", children: ac(n.mrr) }), t.jsxs("span", { className: `metric-change ${n.growth > 0 ? "positive" : "negative"}`, children: [n.growth > 0 ? t.jsx(Wn, { className: "h-3 w-3" }) : t.jsx(Ru, { className: "h-3 w-3" }), Math.abs(n.growth), "%"] })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "ARR" }), t.jsx("div", { className: "metric-value", children: ac(n.arr) })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Clientes" }), t.jsx("div", { className: "metric-value", children: n.clients })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Churn" }), t.jsxs("div", { className: "metric-value", children: [n.churn, "%"] }), t.jsx("span", { className: `metric-change ${n.churn <= 2 ? "positive" : "negative"}`, children: n.churn <= 2 ? "Saludable" : "Atención" })] })] }); }
function _w({ business: l, onClick: n }) { return t.jsxs("div", { onClick: n, className: "bg-card border border-border rounded-xl p-5 cursor-pointer hover:border-primary transition-all hover:-translate-y-1", children: [t.jsxs("div", { className: "flex items-start justify-between mb-4", children: [t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary", children: N0[l.icon] || t.jsx(qu, { className: "h-6 w-6" }) }), t.jsxs("div", { children: [t.jsx("h3", { className: "font-semibold text-base", children: l.name }), t.jsx("p", { className: "text-xs text-muted-foreground line-clamp-1", children: l.description })] })] }), t.jsx("span", { className: `business-status ${l.status}`, children: l.status === "active" ? "Activo" : l.status === "growing" ? "Creciendo" : "Pausado" })] }), t.jsx(Dw, { metrics: l.metrics })] }); }
function Zp() { const { businessId: l } = wa(), n = ft(), i = bs(N => N.token), [c, u] = M.useState([]), [m, h] = M.useState(!0), [f, p] = M.useState("grid"); M.useEffect(() => { async function N() { try {
    const S = await fetch("/api/businesses", { headers: { Authorization: `Bearer ${i}` } });
    if (S.ok) {
        const w = await S.json();
        u(w.businesses || du);
    }
    else
        u(du);
}
catch {
    u(du);
}
finally {
    h(!1);
} } N(); }, [i]); const v = c.reduce((N, S) => { var w; return N + (((w = S.metrics) == null ? void 0 : w.mrr) || 0); }, 0), j = c.reduce((N, S) => { var w; return N + (((w = S.metrics) == null ? void 0 : w.clients) || 0); }, 0), g = c.length ? Math.round(c.reduce((N, S) => { var w; return N + (((w = S.metrics) == null ? void 0 : w.growth) || 0); }, 0) / c.length) : 0, b = c.filter(N => N.status === "active").length; return m ? t.jsx("div", { className: "flex items-center justify-center h-96", children: t.jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" }) }) : t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { className: "section-header", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Negocios" }), t.jsxs("p", { className: "section-subtitle", children: [c.length, " negocios operativos"] })] }), t.jsxs("div", { className: "section-actions", children: [t.jsx("button", { onClick: () => p("grid"), className: `p-2 rounded-lg transition-colors ${f === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`, children: t.jsx(Fl, { className: "h-5 w-5" }) }), t.jsx("button", { onClick: () => p("list"), className: `p-2 rounded-lg transition-colors ${f === "list" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`, children: t.jsx(ur, { className: "h-5 w-5" }) })] })] }), t.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon orange", children: t.jsx(Ji, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "MRR Total" }), t.jsx("div", { className: "stat-value", children: ac(v) })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx(Ig, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Clientes Totales" }), t.jsx("div", { className: "stat-value", children: j })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon projects", children: t.jsx(el, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Crecimiento Prom" }), t.jsxs("div", { className: "stat-value", children: [g, "%"] })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon agents", children: t.jsx(ar, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Negocios Activos" }), t.jsx("div", { className: "stat-value", children: b })] })] })] }), f === "grid" ? t.jsx("div", { className: "grid grid-cols-2 gap-4", children: c.map(N => t.jsx(_w, { business: N, onClick: () => n(`/businesses/${N.id}`) }, N.id)) }) : t.jsx("div", { className: "space-y-3", children: c.map(N => { var S; return t.jsxs("div", { onClick: () => n(`/businesses/${N.id}`), className: "flex items-center gap-4 p-4 bg-card border border-border rounded-xl cursor-pointer hover:border-primary transition-all", children: [t.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary", children: N0[N.icon] || t.jsx(qu, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "flex-1", children: [t.jsx("h3", { className: "font-semibold", children: N.name }), t.jsx("p", { className: "text-xs text-muted-foreground", children: N.description })] }), t.jsxs("div", { className: "text-right", children: [t.jsx("div", { className: "font-bold text-primary", children: ac(((S = N.metrics) == null ? void 0 : S.mrr) || 0) }), t.jsx("div", { className: "text-xs text-muted-foreground", children: "MRR" })] }), t.jsx("span", { className: `business-status ${N.status}`, children: N.status === "active" ? "Activo" : N.status === "growing" ? "Creciendo" : "Pausado" })] }, N.id); }) })] }); }
const Ow = { vps: [{ id: 1, name: "SOLARIA Production", provider: "Hetzner", ip: "46.62.222.138", specs: "4 vCPU, 8GB RAM, 160GB SSD", status: "online", services: ["Apache", "PHP 8.4", "MariaDB", "Node.js"] }, { id: 2, name: "NEMESIS Server", provider: "Hostinger", ip: "148.230.118.124", specs: "2 vCPU, 4GB RAM, 100GB SSD", status: "online", services: ["Docker", "PM2", "Redis"] }], nemesis: [{ id: 1, name: "origin-command01", ip: "100.122.193.83", type: "macOS", status: "active" }, { id: 2, name: "Mac-Mini-DRAKE", ip: "100.79.246.5", type: "macOS (M2)", status: "active" }, { id: 3, name: "DRAKE-COMMAND01", ip: "100.64.226.80", type: "Linux", status: "active" }, { id: 4, name: "iPad-Drake-Command", ip: "100.87.12.24", type: "iOS", status: "active" }, { id: 5, name: "iPhone-400i", ip: "100.112.92.21", type: "iOS", status: "active" }], cloudflare: [{ id: 1, domain: "solaria.agency", status: "active", ssl: !0 }, { id: 2, domain: "dfo.solaria.agency", status: "active", ssl: !0 }, { id: 3, domain: "akademate.com", status: "active", ssl: !0 }], sshKeys: [{ id: 1, name: "nemesis_cmdr_key", type: "Ed25519", fingerprint: "SHA256:Gx7..." }, { id: 2, name: "id_ed25519", type: "Ed25519", fingerprint: "SHA256:Hy8..." }, { id: 3, name: "id_solaria_hetzner_prod", type: "Ed25519", fingerprint: "SHA256:Kz9..." }], databases: [{ id: 1, name: "solaria_construction", type: "MariaDB", size: "156 MB" }, { id: 2, name: "akademate_prod", type: "PostgreSQL", size: "2.4 GB" }, { id: 3, name: "cache_redis", type: "Redis", size: "128 MB" }] };
function Fp({ status: l }) { const n = { online: { color: "text-green-400 bg-green-400/20", icon: sr, label: "Online" }, active: { color: "text-green-400 bg-green-400/20", icon: sr, label: "Activo" }, offline: { color: "text-red-400 bg-red-400/20", icon: Fi, label: "Offline" }, inactive: { color: "text-gray-400 bg-gray-400/20", icon: Fi, label: "Inactivo" }, maintenance: { color: "text-yellow-400 bg-yellow-400/20", icon: De, label: "Mantenimiento" }, pending: { color: "text-yellow-400 bg-yellow-400/20", icon: De, label: "Pendiente" } }, { color: i, icon: c, label: u } = n[l]; return t.jsxs("span", { className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${i}`, children: [t.jsx(c, { className: "h-3 w-3" }), u] }); }
function zw({ text: l }) { const [n, i] = M.useState(!1), c = () => { navigator.clipboard.writeText(l), i(!0), setTimeout(() => i(!1), 2e3); }; return t.jsx("button", { onClick: c, className: "p-1.5 rounded hover:bg-accent transition-colors", title: "Copiar", children: n ? t.jsx(sr, { className: "h-4 w-4 text-green-400" }) : t.jsx(Hl, { className: "h-4 w-4 text-muted-foreground" }) }); }
function Rw() { const { vps: l, nemesis: n, cloudflare: i, sshKeys: c, databases: u } = Ow, m = l.length, h = l.filter(v => v.status === "online").length, f = n.filter(v => v.status === "active").length, p = i.filter(v => v.status === "active").length; return t.jsxs("div", { className: "space-y-6", children: [t.jsx("div", { className: "section-header", children: t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Infraestructura" }), t.jsx("p", { className: "section-subtitle", children: "VPS, SSH, Cloudflare y accesos de gestion" })] }) }), t.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx($i, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "VPS Online" }), t.jsxs("div", { className: "stat-value", children: [h, "/", m] })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon agents", children: t.jsx(zp, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "NEMESIS Activos" }), t.jsx("div", { className: "stat-value", children: f })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon projects", children: t.jsx(Dp, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Dominios CF" }), t.jsx("div", { className: "stat-value", children: p })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon orange", children: t.jsx(Op, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Claves SSH" }), t.jsx("div", { className: "stat-value", children: c.length })] })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [t.jsx($i, { className: "h-4 w-4 text-green-400" }), "SERVIDORES VPS"] }), t.jsx("div", { className: "space-y-4", children: l.map(v => t.jsxs("div", { className: "bg-accent/30 rounded-lg p-4", children: [t.jsxs("div", { className: "flex items-start justify-between mb-3", children: [t.jsxs("div", { children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("h4", { className: "font-medium", children: v.name }), t.jsx("span", { className: "text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded", children: v.provider })] }), t.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: v.specs })] }), t.jsx(Fp, { status: v.status })] }), t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [t.jsx(Gu, { className: "h-4 w-4 text-muted-foreground" }), t.jsx("code", { className: "font-mono text-primary", children: v.ip }), t.jsx(zw, { text: `ssh root@${v.ip}` })] }), t.jsx("div", { className: "flex gap-1.5", children: v.services.map(j => t.jsx("span", { className: "project-tag blue", children: j }, j)) })] })] }, v.id)) })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [t.jsx(zp, { className: "h-4 w-4 text-purple-400" }), "RED NEMESIS (Tailscale VPN)"] }), t.jsx("div", { className: "grid grid-cols-5 gap-3", children: n.map(v => t.jsxs("div", { className: "bg-accent/30 rounded-lg p-3 text-center", children: [t.jsx("div", { className: `w-2 h-2 rounded-full mx-auto mb-2 ${v.status === "active" ? "bg-green-400" : "bg-gray-400"}` }), t.jsx("div", { className: "text-xs font-medium truncate", title: v.name, children: v.name }), t.jsx("div", { className: "text-[10px] text-muted-foreground", children: v.type }), t.jsx("code", { className: "text-[10px] text-primary font-mono", children: v.ip })] }, v.id)) })] }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [t.jsx(Dp, { className: "h-4 w-4 text-blue-400" }), "CLOUDFLARE DOMINIOS"] }), t.jsx("div", { className: "space-y-2", children: i.map(v => t.jsxs("div", { className: "flex items-center justify-between p-2 bg-accent/30 rounded-lg", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [v.ssl && t.jsx(mr, { className: "h-4 w-4 text-green-400" }), t.jsx("span", { className: "text-sm font-mono", children: v.domain })] }), t.jsx(Fp, { status: v.status })] }, v.id)) })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [t.jsx(Op, { className: "h-4 w-4 text-yellow-400" }), "CLAVES SSH"] }), t.jsx("div", { className: "space-y-2", children: c.map(v => t.jsxs("div", { className: "flex items-center justify-between p-2 bg-accent/30 rounded-lg", children: [t.jsxs("div", { children: [t.jsx("div", { className: "text-sm font-medium", children: v.name }), t.jsx("div", { className: "text-[10px] text-muted-foreground", children: v.fingerprint })] }), t.jsx("span", { className: "project-tag green", children: v.type })] }, v.id)) })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [t.jsx(oN, { className: "h-4 w-4 text-cyan-400" }), "BASES DE DATOS"] }), t.jsx("div", { className: "metrics-row", children: u.map(v => t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: v.type }), t.jsx("div", { className: "metric-value text-base", children: v.name }), t.jsx("span", { className: "metric-change neutral", children: v.size })] }, v.id)) })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [t.jsx(SN, { className: "h-4 w-4 text-green-400" }), "COMANDOS RAPIDOS"] }), t.jsxs("div", { className: "grid grid-cols-4 gap-2", children: [t.jsxs("button", { onClick: () => { navigator.clipboard.writeText("ssh root@46.62.222.138"), alert("Copiado!"); }, className: "btn-secondary text-sm", children: [t.jsx(Hl, { className: "h-4 w-4" }), "SSH SOLARIA"] }), t.jsxs("button", { onClick: () => { navigator.clipboard.writeText("ssh root@148.230.118.124"), alert("Copiado!"); }, className: "btn-secondary text-sm", children: [t.jsx(Hl, { className: "h-4 w-4" }), "SSH NEMESIS"] }), t.jsxs("button", { onClick: () => { navigator.clipboard.writeText("tailscale status"), alert("Copiado!"); }, className: "btn-secondary text-sm", children: [t.jsx(Hl, { className: "h-4 w-4" }), "Tailscale Status"] }), t.jsxs("button", { onClick: () => { navigator.clipboard.writeText("pm2 status"), alert("Copiado!"); }, className: "btn-secondary text-sm", children: [t.jsx(Hl, { className: "h-4 w-4" }), "PM2 Status"] })] })] })] }); }
function Ht({ title: l, icon: n, children: i }) { return t.jsxs("div", { className: "mb-8", children: [t.jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [t.jsx(n, { className: "h-5 w-5 text-primary" }), l] }), i] }); }
function Vt({ title: l, children: n }) { return t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [l && t.jsx("h3", { className: "text-sm font-medium mb-4 text-muted-foreground", children: l }), n] }); }
function Bw() { return t.jsxs("div", { className: "space-y-6 pb-8", children: [t.jsx("div", { className: "section-header", children: t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Design Hub" }), t.jsx("p", { className: "section-subtitle", children: "Componentes UI, tipografias y elementos graficos" })] }) }), t.jsxs("div", { className: "space-y-8 overflow-y-auto pr-2", children: [t.jsx(Ht, { title: "Brand Identity", icon: wN, children: t.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [t.jsx(Vt, { title: "Logo", children: t.jsx("div", { className: "text-center p-5 bg-accent rounded-lg", children: t.jsx("img", { src: "/solaria-logo.png", alt: "SOLARIA Logo", className: "w-20 h-20 mx-auto", onError: l => { l.currentTarget.style.display = "none"; } }) }) }), t.jsx(Vt, { title: "Brand Colors", children: t.jsxs("div", { className: "flex gap-2 flex-wrap", children: [t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#f6921d]", title: "SOLARIA Orange" }), t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#d97706]", title: "Orange Dark" }), t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#0a0a0a]", title: "Background" }), t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#141414]", title: "Secondary BG" })] }) }), t.jsx(Vt, { title: "Phase Colors", children: t.jsxs("div", { className: "flex gap-2 flex-wrap", children: [t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#a855f7]", title: "Planning" }), t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#22d3ee]", title: "Development" }), t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#14b8a6]", title: "Testing" }), t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#22c55e]", title: "Production" })] }) })] }) }), t.jsx(Ht, { title: "Typography", icon: CN, children: t.jsxs(Vt, { children: [t.jsxs("div", { className: "mb-4", children: [t.jsx("span", { className: "text-[10px] text-muted-foreground uppercase", children: "Font Family" }), t.jsx("div", { className: "text-2xl font-semibold", children: "Inter" })] }), t.jsxs("div", { className: "space-y-3", children: [t.jsxs("div", { className: "flex items-baseline gap-4", children: [t.jsx("span", { className: "text-3xl font-bold", children: "Heading H1" }), t.jsx("span", { className: "text-xs text-muted-foreground", children: "32px / 700" })] }), t.jsxs("div", { className: "flex items-baseline gap-4", children: [t.jsx("span", { className: "text-2xl font-semibold", children: "Heading H2" }), t.jsx("span", { className: "text-xs text-muted-foreground", children: "24px / 600" })] }), t.jsxs("div", { className: "flex items-baseline gap-4", children: [t.jsx("span", { className: "text-lg font-semibold", children: "Heading H3" }), t.jsx("span", { className: "text-xs text-muted-foreground", children: "18px / 600" })] }), t.jsxs("div", { className: "flex items-baseline gap-4", children: [t.jsx("span", { className: "text-sm font-medium", children: "Body Text" }), t.jsx("span", { className: "text-xs text-muted-foreground", children: "14px / 500" })] }), t.jsxs("div", { className: "flex items-baseline gap-4", children: [t.jsx("span", { className: "text-xs text-muted-foreground", children: "Small / Muted" }), t.jsx("span", { className: "text-xs text-muted-foreground", children: "12px / 400" })] }), t.jsxs("div", { className: "flex items-baseline gap-4", children: [t.jsx("span", { className: "text-[10px] uppercase font-semibold tracking-wide", children: "LABEL UPPERCASE" }), t.jsx("span", { className: "text-xs text-muted-foreground", children: "10px / 600 / Uppercase" })] })] })] }) }), t.jsx(Ht, { title: "Tags / Badges", icon: Pg, children: t.jsxs(Vt, { children: [t.jsxs("div", { className: "mb-4", children: [t.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-2", children: "Project Tags (3 Categories)" }), t.jsxs("div", { className: "flex gap-2 flex-wrap", children: [t.jsx("span", { className: "project-tag blue", children: "SaaS" }), t.jsx("span", { className: "project-tag blue", children: "Platform" }), t.jsx("span", { className: "project-tag green", children: "React" }), t.jsx("span", { className: "project-tag green", children: "Node.js" }), t.jsx("span", { className: "project-tag purple", children: "Enterprise" }), t.jsx("span", { className: "project-tag purple", children: "B2B" })] })] }), t.jsxs("div", { children: [t.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-2", children: "Phase Badges" }), t.jsxs("div", { className: "flex gap-2 flex-wrap", children: [t.jsx("span", { className: "progress-phase-badge planning", children: "Planificacion" }), t.jsx("span", { className: "progress-phase-badge development", children: "Desarrollo" }), t.jsx("span", { className: "progress-phase-badge testing", children: "Testing" }), t.jsx("span", { className: "progress-phase-badge production", children: "Produccion" })] })] })] }) }), t.jsx(Ht, { title: "Progress Bars", icon: lN, children: t.jsxs(Vt, { children: [t.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-3", children: "Segmented Phase Progress" }), t.jsxs("div", { className: "progress-segments mb-2", children: [t.jsx("div", { className: "progress-segment planning" }), t.jsx("div", { className: "progress-segment development" }), t.jsx("div", { className: "progress-segment testing" }), t.jsx("div", { className: "progress-segment inactive" })] }), t.jsxs("div", { className: "progress-labels", children: [t.jsx("span", { className: "progress-label-item completed", children: "Planificacion" }), t.jsx("span", { className: "progress-label-item completed", children: "Desarrollo" }), t.jsx("span", { className: "progress-label-item active", children: "Testing" }), t.jsx("span", { className: "progress-label-item", children: "Produccion" })] })] }) }), t.jsx(Ht, { title: "Mini Trello (Equalizer)", icon: cN, children: t.jsx(Vt, { children: t.jsxs("div", { className: "mini-trello max-w-md", children: [t.jsxs("div", { className: "trello-column", children: [t.jsx("span", { className: "trello-label", children: "BL" }), t.jsx("div", { className: "trello-slots", children: [...Array(8)].map((l, n) => t.jsx("div", { className: `trello-slot ${n < 3 ? "filled" : ""}`, style: n < 3 ? { background: "#64748b", borderColor: "transparent" } : {} }, n)) }), t.jsx("span", { className: "trello-count", children: "3" })] }), t.jsxs("div", { className: "trello-column", children: [t.jsx("span", { className: "trello-label", children: "TD" }), t.jsx("div", { className: "trello-slots", children: [...Array(8)].map((l, n) => t.jsx("div", { className: `trello-slot ${n < 5 ? "filled" : ""}`, style: n < 5 ? { background: "#f59e0b", borderColor: "transparent" } : {} }, n)) }), t.jsx("span", { className: "trello-count", children: "5" })] }), t.jsxs("div", { className: "trello-column", children: [t.jsx("span", { className: "trello-label", children: "DO" }), t.jsx("div", { className: "trello-slots", children: [...Array(8)].map((l, n) => t.jsx("div", { className: `trello-slot ${n < 2 ? "filled" : ""}`, style: n < 2 ? { background: "#3b82f6", borderColor: "transparent" } : {} }, n)) }), t.jsx("span", { className: "trello-count", children: "2" })] }), t.jsxs("div", { className: "trello-column", children: [t.jsx("span", { className: "trello-label", children: "DN" }), t.jsx("div", { className: "trello-slots", children: [...Array(8)].map((l, n) => t.jsx("div", { className: `trello-slot ${n < 7 ? "filled" : ""}`, style: n < 7 ? { background: "#22c55e", borderColor: "transparent" } : {} }, n)) }), t.jsx("span", { className: "trello-count", children: "7" })] })] }) }) }), t.jsx(Ht, { title: "Buttons", icon: gN, children: t.jsx(Vt, { children: t.jsxs("div", { className: "flex gap-3 flex-wrap items-center", children: [t.jsx("button", { className: "btn-primary", children: "Primary" }), t.jsx("button", { className: "btn-secondary", children: "Secondary" }), t.jsx("button", { className: "p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors", children: t.jsx(lr, { className: "h-4 w-4" }) }), t.jsxs("button", { className: "flex items-center gap-1.5 px-3 py-1.5 bg-accent rounded text-xs font-medium hover:bg-accent/80 transition-colors", children: [t.jsx(lr, { className: "h-3 w-3" }), " Editar"] }), t.jsx("button", { className: "w-7 h-7 rounded bg-primary/20 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors", children: t.jsx(rt, { className: "h-4 w-4" }) }), t.jsx("button", { className: "px-2 py-1 bg-accent rounded text-xs font-medium hover:bg-accent/80 transition-colors", children: "→ Task" })] }) }) }), t.jsx(Ht, { title: "URL Items", icon: Zg, children: t.jsx(Vt, { children: t.jsxs("div", { className: "space-y-2 max-w-xs", children: [t.jsxs("a", { href: "#", className: "url-item", onClick: l => l.preventDefault(), children: [t.jsx("div", { className: "url-item-icon prod", children: t.jsx(Gu, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "url-item-text", children: [t.jsx("div", { className: "url-item-label", children: "Prod" }), t.jsx("div", { className: "url-item-url", children: "https://example.com" })] }), t.jsx(Gt, { className: "h-3 w-3 text-muted-foreground" })] }), t.jsxs("a", { href: "#", className: "url-item", onClick: l => l.preventDefault(), children: [t.jsx("div", { className: "url-item-icon staging", children: t.jsx(uN, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "url-item-text", children: [t.jsx("div", { className: "url-item-label", children: "Staging" }), t.jsx("div", { className: "url-item-url", children: "https://staging.example.com" })] }), t.jsx(Gt, { className: "h-3 w-3 text-muted-foreground" })] }), t.jsxs("a", { href: "#", className: "url-item", onClick: l => l.preventDefault(), children: [t.jsx("div", { className: "url-item-icon local", children: t.jsx(Xg, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "url-item-text", children: [t.jsx("div", { className: "url-item-label", children: "Local" }), t.jsx("div", { className: "url-item-url", children: "http://localhost:3000" })] }), t.jsx(Gt, { className: "h-3 w-3 text-muted-foreground" })] }), t.jsxs("a", { href: "#", className: "url-item", onClick: l => l.preventDefault(), children: [t.jsx("div", { className: "url-item-icon repo", children: t.jsx(_p, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "url-item-text", children: [t.jsx("div", { className: "url-item-label", children: "Repo" }), t.jsx("div", { className: "url-item-url", children: "github.com/user/repo" })] }), t.jsx(Gt, { className: "h-3 w-3 text-muted-foreground" })] })] }) }) }), t.jsx(Ht, { title: "TODO Items", icon: jN, children: t.jsx(Vt, { children: t.jsxs("div", { className: "max-w-xs", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [t.jsx("input", { type: "text", placeholder: "Escribe una nota...", className: "flex-1 bg-accent border border-border rounded-lg px-3 py-2 text-sm" }), t.jsx("button", { className: "w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center", children: t.jsx(rt, { className: "h-4 w-4" }) })] }), t.jsxs("div", { className: "space-y-2", children: [t.jsxs("div", { className: "flex items-center gap-2 p-2 bg-accent/50 rounded-lg", children: [t.jsx("div", { className: "w-4 h-4 rounded border-2 border-primary" }), t.jsx("span", { className: "flex-1 text-xs", children: "Revisar diseno del dashboard" }), t.jsx("span", { className: "text-[9px] text-muted-foreground", children: "12 dic" }), t.jsx("button", { className: "text-[10px] px-1.5 py-0.5 bg-accent rounded", children: "→" })] }), t.jsxs("div", { className: "flex items-center gap-2 p-2 bg-accent/50 rounded-lg opacity-60", children: [t.jsx("div", { className: "w-4 h-4 rounded bg-primary flex items-center justify-center", children: t.jsx(Vl, { className: "h-2.5 w-2.5 text-white" }) }), t.jsx("span", { className: "flex-1 text-xs line-through", children: "Aprobar colores del tema" }), t.jsx("span", { className: "text-[9px] text-muted-foreground", children: "08 dic" })] })] })] }) }) }), t.jsx(Ht, { title: "Activity Items", icon: De, children: t.jsx(Vt, { children: t.jsxs("div", { className: "space-y-2 max-w-xs", children: [t.jsxs("div", { className: "flex items-start gap-2 p-2 bg-accent/50 rounded-lg", children: [t.jsx("div", { className: "w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0", children: t.jsx(Vl, { className: "h-3 w-3 text-green-400" }) }), t.jsxs("div", { className: "flex-1", children: [t.jsx("div", { className: "text-xs font-medium", children: "Tarea completada" }), t.jsx("div", { className: "text-[9px] text-muted-foreground", children: "Hace 2h" })] })] }), t.jsxs("div", { className: "flex items-start gap-2 p-2 bg-accent/50 rounded-lg", children: [t.jsx("div", { className: "w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0", children: t.jsx(_p, { className: "h-3 w-3 text-blue-400" }) }), t.jsxs("div", { className: "flex-1", children: [t.jsx("div", { className: "text-xs font-medium", children: "Nuevo commit" }), t.jsx("div", { className: "text-[9px] text-muted-foreground", children: "Hace 5h" })] })] })] }) }) }), t.jsx(Ht, { title: "Form Elements", icon: yN, children: t.jsx(Vt, { children: t.jsxs("div", { className: "grid grid-cols-2 gap-4 max-w-lg", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Input Label" }), t.jsx("input", { type: "text", defaultValue: "Input value", className: "w-full bg-accent border border-border rounded-lg px-3 py-2 text-sm" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Select" }), t.jsxs("select", { className: "w-full bg-accent border border-border rounded-lg px-3 py-2 text-sm", children: [t.jsx("option", { children: "Option 1" }), t.jsx("option", { children: "Option 2" })] })] }), t.jsxs("div", { className: "col-span-2", children: [t.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Textarea" }), t.jsx("textarea", { defaultValue: "Textarea content", className: "w-full bg-accent border border-border rounded-lg px-3 py-2 text-sm h-16 resize-none" })] })] }) }) }), t.jsx("div", { className: "p-5 rounded-xl border border-dashed border-primary bg-gradient-to-br from-primary/10 to-transparent", children: t.jsxs(Ht, { title: "METRICS ROW (Core Component)", icon: el, children: [t.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Componente central del sistema. Los cambios en CSS Variables se aplican automaticamente a todo el dashboard." }), t.jsxs("div", { className: "mb-6", children: [t.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-2", children: "5 Columns - Full Width" }), t.jsxs("div", { className: "metrics-row", children: [t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Seguidores ✓" }), t.jsxs("div", { className: "metric-value", children: ["1K ", t.jsx("span", { className: "secondary", children: "/ 4.2K" })] })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Impresiones" }), t.jsx("div", { className: "metric-value", children: "4.9M" }), t.jsxs("span", { className: "metric-change positive", children: [t.jsx(Wn, { className: "h-3 w-3" }), " 334%"] })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Engagement" }), t.jsx("div", { className: "metric-value", children: "4.2%" }), t.jsxs("span", { className: "metric-change negative", children: [t.jsx(Ru, { className: "h-3 w-3" }), " 19%"] })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Engagements" }), t.jsx("div", { className: "metric-value", children: "209.2K" }), t.jsxs("span", { className: "metric-change positive", children: [t.jsx(Wn, { className: "h-3 w-3" }), " 248%"] })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Profile Visits" }), t.jsx("div", { className: "metric-value", children: "18.2K" }), t.jsxs("span", { className: "metric-change positive", children: [t.jsx(Wn, { className: "h-3 w-3" }), " 88%"] })] })] })] }), t.jsxs("div", { children: [t.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-2", children: "Compact Variant (3 Columns)" }), t.jsxs("div", { className: "metrics-row compact max-w-md", children: [t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Tareas" }), t.jsx("div", { className: "metric-value", children: "24" })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Completadas" }), t.jsx("div", { className: "metric-value", children: "18" })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Progreso" }), t.jsx("div", { className: "metric-value", children: "75%" })] })] })] })] }) }), t.jsx(Ht, { title: "Stat Cards", icon: $a, children: t.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon projects", children: t.jsx(NN, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Proyectos Activos" }), t.jsx("div", { className: "stat-value", children: "5" })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon tasks", children: t.jsx(Vl, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Tareas Completadas" }), t.jsx("div", { className: "stat-value", children: "127" })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon active", children: t.jsx(De, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "En Progreso" }), t.jsx("div", { className: "stat-value", children: "12" })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon agents", children: t.jsx($a, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Agentes Activos" }), t.jsx("div", { className: "stat-value", children: "3" })] })] })] }) }), t.jsx(Ht, { title: "CSS Variables Reference", icon: $g, children: t.jsx(Vt, { children: t.jsxs("div", { className: "grid grid-cols-2 gap-6 text-xs font-mono", children: [t.jsxs("div", { children: [t.jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Colors" }), t.jsxs("div", { className: "space-y-1.5", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-4 rounded bg-[#f6921d]" }), t.jsx("span", { children: "--solaria-orange: #f6921d" })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-4 rounded bg-[#22c55e]" }), t.jsx("span", { children: "--color-positive: #22c55e" })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-4 rounded bg-[#ef4444]" }), t.jsx("span", { children: "--color-negative: #ef4444" })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-4 rounded bg-[#3b82f6]" }), t.jsx("span", { children: "--color-info: #3b82f6" })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-4 rounded bg-[#f59e0b]" }), t.jsx("span", { children: "--color-warning: #f59e0b" })] })] })] }), t.jsxs("div", { children: [t.jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Metrics" }), t.jsxs("div", { className: "space-y-1.5 text-muted-foreground", children: [t.jsx("div", { children: "--metric-card-radius: 12px" }), t.jsx("div", { children: "--metric-card-padding: 16px" }), t.jsx("div", { children: "--metric-label-size: 11px" }), t.jsx("div", { children: "--metric-value-size: 24px" }), t.jsx("div", { children: "--metric-value-weight: 700" })] })] })] }) }) })] })] }); }
const qw = { decision: { bg: "hsl(270 60% 50% / 0.1)", color: "hsl(270 60% 50%)" }, learning: { bg: "hsl(217 91% 60% / 0.1)", color: "hsl(217 91% 60%)" }, context: { bg: "hsl(142 71% 45% / 0.1)", color: "hsl(142 71% 45%)" }, requirement: { bg: "hsl(38 92% 50% / 0.1)", color: "hsl(38 92% 50%)" }, bug: { bg: "hsl(0 84% 60% / 0.1)", color: "hsl(0 84% 60%)" }, solution: { bg: "hsl(160 84% 39% / 0.1)", color: "hsl(160 84% 39%)" }, pattern: { bg: "hsl(239 84% 67% / 0.1)", color: "hsl(239 84% 67%)" }, config: { bg: "hsl(25 95% 53% / 0.1)", color: "hsl(25 95% 53%)" }, architecture: { bg: "hsl(263 70% 58% / 0.1)", color: "hsl(263 70% 58%)" }, session: { bg: "hsl(199 89% 48% / 0.1)", color: "hsl(199 89% 48%)" }, protocol: { bg: "hsl(280 65% 60% / 0.1)", color: "hsl(280 65% 60%)" }, "agent-instructions": { bg: "hsl(200 95% 45% / 0.1)", color: "hsl(200 95% 45%)" } }, Uw = { related: "Relacionada", depends_on: "Depende de", contradicts: "Contradice", supersedes: "Reemplaza", child_of: "Derivada de" };
function Lw({ memoryId: l, isOpen: n, onClose: i, onTagClick: c }) { const u = n && l !== null && l > 0, { data: m, isLoading: h } = A2(u ? l : 0), { data: f } = _2(u ? l : 0), p = D2(), v = () => { l && p.mutate({ id: l, amount: .1 }); }, j = m ? Math.round(m.importance * 100) : 0, g = j >= 70 ? "high" : j >= 40 ? "medium" : "low"; return t.jsx(yc, { open: n, onOpenChange: i, children: t.jsxs(vc, { className: "max-w-2xl max-h-[85vh] flex flex-col", children: [t.jsx(wc, { onClose: i }), u ? h ? t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : m ? t.jsxs(t.Fragment, { children: [t.jsx(jc, { children: t.jsxs("div", { className: "flex items-start gap-3 pr-8", children: [t.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted", children: t.jsx(Zl, { className: "h-5 w-5 text-muted-foreground" }) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx(Nc, { className: "text-base", children: m.summary || m.content.substring(0, 80) }), t.jsxs("div", { className: "flex items-center gap-2 mt-1 text-xs text-muted-foreground", children: [t.jsx(fc, { className: "h-3 w-3" }), t.jsx("span", { className: "font-mono", children: m.id }), t.jsx("span", { className: "text-border", children: "|" }), t.jsx(gt, { className: "h-3 w-3" }), t.jsx("span", { children: Qt(m.createdAt) })] })] })] }) }), t.jsxs(Sc, { className: "flex-1 overflow-y-auto space-y-4", children: [t.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [t.jsxs("div", { className: V("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium", g === "high" && "bg-green-500/10 text-green-600", g === "medium" && "bg-blue-500/10 text-blue-600", g === "low" && "bg-muted text-muted-foreground"), children: [t.jsx(el, { className: "h-3 w-3" }), t.jsxs("span", { children: [j, "% importancia"] })] }), t.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [t.jsx(js, { className: "h-3 w-3" }), t.jsxs("span", { children: [m.accessCount, " accesos"] })] }), m.lastAccessed && t.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [t.jsx(De, { className: "h-3 w-3" }), t.jsxs("span", { children: ["Accedida ", Qe(m.lastAccessed)] })] })] }), m.tags && m.tags.length > 0 && t.jsx("div", { className: "flex flex-wrap gap-1.5", children: m.tags.map(b => { const N = qw[b] || { bg: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }; return t.jsx("button", { onClick: () => { c == null || c(b), i(); }, className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium transition-opacity hover:opacity-80", style: { backgroundColor: N.bg, color: N.color }, children: b }, b); }) }), t.jsx("div", { className: "rounded-lg border border-border bg-muted/30 p-4", children: t.jsx("pre", { className: "whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed", children: m.content }) }), f && f.length > 0 && t.jsxs("div", { className: "space-y-2", children: [t.jsxs("h4", { className: "text-sm font-medium flex items-center gap-2", children: [t.jsx(Yu, { className: "h-4 w-4" }), "Memorias Relacionadas"] }), t.jsx("div", { className: "space-y-2", children: f.map(b => { var N, S, w, C; return t.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors", children: [t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx("div", { className: "text-sm font-medium truncate", children: ((N = b.relatedMemory) == null ? void 0 : N.summary) || ((w = (S = b.relatedMemory) == null ? void 0 : S.content) == null ? void 0 : w.substring(0, 50)) }), t.jsxs("div", { className: "text-xs text-muted-foreground", children: [Uw[b.relationshipType] || b.relationshipType, " ", "· #", (C = b.relatedMemory) == null ? void 0 : C.id] })] }), t.jsx(Gt, { className: "h-4 w-4 text-muted-foreground flex-shrink-0 ml-2" })] }, b.id); }) })] })] }), t.jsxs(kc, { children: [t.jsxs("button", { onClick: v, disabled: p.isPending, className: V("inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium", "bg-primary text-primary-foreground", "hover:bg-primary/90 transition-colors", "disabled:opacity-50 disabled:cursor-not-allowed"), children: [p.isPending ? t.jsx(xe, { className: "h-4 w-4 animate-spin" }) : t.jsx(rN, { className: "h-4 w-4" }), "Boost +10%"] }), t.jsx("button", { onClick: i, className: V("px-4 py-2 rounded-md text-sm font-medium", "border border-border bg-background", "hover:bg-muted transition-colors"), children: "Cerrar" })] })] }) : t.jsx("div", { className: "py-12 text-center text-muted-foreground", children: "Memoria no encontrada" }) : t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) })] }) }); }
const tm = { decision: { bg: "rgba(168, 85, 247, 0.15)", color: "#a855f7" }, learning: { bg: "rgba(59, 130, 246, 0.15)", color: "#3b82f6" }, context: { bg: "rgba(34, 197, 94, 0.15)", color: "#22c55e" }, requirement: { bg: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" }, bug: { bg: "rgba(239, 68, 68, 0.15)", color: "#ef4444" }, solution: { bg: "rgba(16, 185, 129, 0.15)", color: "#10b981" }, pattern: { bg: "rgba(99, 102, 241, 0.15)", color: "#6366f1" }, config: { bg: "rgba(249, 115, 22, 0.15)", color: "#f97316" }, architecture: { bg: "rgba(139, 92, 246, 0.15)", color: "#8b5cf6" }, session: { bg: "rgba(14, 165, 233, 0.15)", color: "#0ea5e9" } };
function Hw({ memory: l, onClick: n }) { const i = Math.round(l.importance * 100), c = l.tags || [], u = i >= 70 ? "high" : i >= 40 ? "medium" : "low"; return t.jsxs("div", { onClick: n, className: "memory-card", children: [t.jsxs("div", { className: "memory-header", children: [t.jsx("div", { className: "memory-icon", children: t.jsx(Zl, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "memory-title-group", children: [t.jsx("h3", { className: "memory-title", children: l.summary || l.content.substring(0, 60) }), t.jsxs("span", { className: "memory-id", children: ["#", l.id] })] }), t.jsxs("div", { className: V("memory-importance", u), children: [t.jsx(el, { className: "h-3 w-3" }), t.jsxs("span", { children: [i, "%"] })] })] }), t.jsx("p", { className: "memory-content", children: l.content }), c.length > 0 && t.jsx("div", { className: "memory-tags", children: c.map(m => { const h = tm[m] || { bg: "rgba(100, 116, 139, 0.15)", color: "#64748b" }; return t.jsx("span", { className: "memory-tag", style: { backgroundColor: h.bg, color: h.color }, children: m }, m); }) }), t.jsxs("div", { className: "memory-stats", children: [t.jsxs("div", { className: "memory-stat", children: [t.jsx(js, { className: "h-3 w-3" }), t.jsxs("span", { children: [l.accessCount, " accesos"] })] }), l.lastAccessed && t.jsxs("div", { className: "memory-stat", children: [t.jsx(De, { className: "h-3 w-3" }), t.jsx("span", { children: Qe(l.lastAccessed) })] }), t.jsx("div", { className: "memory-stat created", children: Qe(l.createdAt) })] })] }); }
function Vw({ memory: l, onClick: n }) { const i = Math.round(l.importance * 100), c = l.tags || []; return t.jsxs("tr", { onClick: n, className: "memory-row", children: [t.jsx("td", { children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "memory-icon-sm", children: t.jsx(Zl, { className: "h-4 w-4" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "memory-title-sm", children: l.summary || l.content.substring(0, 50) }), t.jsxs("div", { className: "memory-id-sm", children: ["#", l.id] })] })] }) }), t.jsx("td", { children: t.jsx("div", { className: "flex flex-wrap gap-1", children: c.slice(0, 3).map(u => { const m = tm[u] || { bg: "rgba(100, 116, 139, 0.15)", color: "#64748b" }; return t.jsx("span", { className: "memory-tag-sm", style: { backgroundColor: m.bg, color: m.color }, children: u }, u); }) }) }), t.jsx("td", { className: "text-center", children: t.jsxs("span", { className: "stat-value-sm", children: [i, "%"] }) }), t.jsx("td", { className: "text-center", children: t.jsx("span", { className: "stat-value-sm", children: l.accessCount }) }), t.jsx("td", { className: "text-center text-muted-foreground text-sm", children: Qe(l.createdAt) })] }); }
function Gw() { const [l, n] = M.useState(""), [i, c] = M.useState([]), [u, m] = M.useState("grid"), [h, f] = M.useState(null), [p, v] = M.useState(!1), { data: j, isLoading: g, isError: b, error: N } = C2({ tags: i }), S = U => { f(U), v(!0); }, w = () => { v(!1), f(null); }, C = U => { i.includes(U) || c([...i, U]); }, { data: T } = M2(), { data: D } = E2(), { data: O } = T2(l, i), F = l.length > 2 ? O : j, _ = (F == null ? void 0 : F.length) || 0, J = U => { c(K => K.includes(U) ? K.filter(ie => ie !== U) : [...K, U]); }; return g ? t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx(xe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : b ? t.jsxs("div", { className: "flex h-full flex-col items-center justify-center gap-4", children: [t.jsx(pt, { className: "h-12 w-12 text-destructive" }), t.jsx("p", { className: "text-muted-foreground", children: "Error al cargar memorias" }), t.jsx("pre", { className: "text-xs text-destructive", children: String(N) })] }) : t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { className: "section-header", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Memorias" }), t.jsx("p", { className: "section-subtitle", children: "Sistema de memoria persistente para agentes IA" })] }), t.jsx("div", { className: "section-actions", children: t.jsxs("div", { className: "view-toggle", children: [t.jsx("button", { className: V("view-toggle-btn", u === "grid" && "active"), onClick: () => m("grid"), title: "Vista Grid", children: t.jsx(Fl, { className: "h-4 w-4" }) }), t.jsx("button", { className: V("view-toggle-btn", u === "list" && "active"), onClick: () => m("list"), title: "Vista Lista", children: t.jsx(ur, { className: "h-4 w-4" }) })] }) })] }), t.jsxs("div", { className: "dashboard-stats-row", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon projects", children: t.jsx(Zl, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Total Memorias" }), t.jsx("div", { className: "stat-value", children: lu((T == null ? void 0 : T.totalMemories) || 0) })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx(el, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Importancia Prom." }), t.jsxs("div", { className: "stat-value", children: [(((T == null ? void 0 : T.avgImportance) || 0) * 100).toFixed(0), "%"] })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon active", children: t.jsx(js, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Accesos Totales" }), t.jsx("div", { className: "stat-value", children: lu((T == null ? void 0 : T.totalAccesses) || 0) })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon agents", children: t.jsx(Yu, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Proyectos" }), t.jsx("div", { className: "stat-value", children: lu((T == null ? void 0 : T.projectsWithMemories) || 0) })] })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [t.jsxs("div", { className: "relative flex-1", children: [t.jsx(Wa, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), t.jsx("input", { type: "text", placeholder: "Buscar en memorias (min. 3 caracteres)...", value: l, onChange: U => n(U.target.value), className: "w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" })] }), t.jsxs("span", { className: "text-sm text-muted-foreground", children: [_, " memorias"] })] }), D && D.length > 0 && t.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [t.jsx(Fu, { className: "h-4 w-4 text-muted-foreground" }), D.map(U => { const K = tm[U.name] || { bg: "rgba(100, 116, 139, 0.15)", color: "#64748b" }, ie = i.includes(U.name); return t.jsxs("button", { onClick: () => J(U.name), className: V("memory-tag-filter", ie && "selected"), style: ie ? { backgroundColor: K.color, color: "#fff" } : { backgroundColor: K.bg, color: K.color }, children: [U.name, " (", U.usageCount, ")"] }, U.name); })] })] }), u === "grid" ? t.jsx("div", { className: "memories-grid", children: F && F.length > 0 ? F.map(U => t.jsx(Hw, { memory: U, onClick: () => S(U.id) }, U.id)) : t.jsxs("div", { className: "col-span-full py-12 text-center text-muted-foreground", children: [t.jsx(pt, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), t.jsx("p", { children: l.length > 2 ? "No se encontraron memorias con ese criterio" : "No hay memorias registradas" })] }) }) : t.jsx("div", { className: "bg-card border border-border rounded-xl", style: { padding: 0, overflow: "hidden" }, children: t.jsxs("table", { className: "list-table", children: [t.jsx("thead", { children: t.jsxs("tr", { children: [t.jsx("th", { style: { width: "35%" }, children: "Memoria" }), t.jsx("th", { style: { width: "25%" }, children: "Tags" }), t.jsx("th", { style: { width: "12%", textAlign: "center" }, children: "Importancia" }), t.jsx("th", { style: { width: "12%", textAlign: "center" }, children: "Accesos" }), t.jsx("th", { style: { width: "16%", textAlign: "center" }, children: "Creada" })] }) }), t.jsx("tbody", { children: F && F.length > 0 ? F.map(U => t.jsx(Vw, { memory: U, onClick: () => S(U.id) }, U.id)) : t.jsx("tr", { children: t.jsx("td", { colSpan: 5, children: t.jsxs("div", { className: "py-12 text-center text-muted-foreground", children: [t.jsx(pt, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), t.jsx("p", { children: l.length > 2 ? "No se encontraron memorias" : "No hay memorias" })] }) }) }) })] }) }), t.jsx(Lw, { memoryId: h, isOpen: p, onClose: w, onTagClick: C })] }); }
function w0() { return t.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: t.jsxs("div", { className: "flex flex-col items-center gap-4", children: [t.jsx("div", { className: "h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" }), t.jsx("p", { className: "text-muted-foreground", children: "Verificando sesion..." })] }) }); }
function Qw({ children: l }) { const { isAuthenticated: n, _hasHydrated: i } = bs(); return i ? n ? t.jsx(t.Fragment, { children: l }) : t.jsx(Jp, { to: "/login", replace: !0 }) : t.jsx(w0, {}); }
function Kw() { const { isChecking: l } = J1(); return l ? t.jsx(w0, {}) : t.jsxs(sv, { children: [t.jsx($e, { path: "/login", element: t.jsx(e4, {}) }), t.jsxs($e, { path: "/", element: t.jsx(Qw, { children: t.jsx(W2, {}) }), children: [t.jsx($e, { index: !0, element: t.jsx(Jp, { to: "/dashboard", replace: !0 }) }), t.jsx($e, { path: "dashboard", element: t.jsx(l4, {}) }), t.jsx($e, { path: "projects", element: t.jsx(o4, {}) }), t.jsx($e, { path: "projects/archived", element: t.jsx(Cw, {}) }), t.jsx($e, { path: "projects/:id", element: t.jsx(O4, {}) }), t.jsx($e, { path: "projects/:id/tasks", element: t.jsx(Q4, {}) }), t.jsx($e, { path: "projects/:id/links", element: t.jsx(K4, {}) }), t.jsx($e, { path: "projects/:id/settings", element: t.jsx(J4, {}) }), t.jsx($e, { path: "projects/:id/roadmap", element: t.jsx(ow, {}) }), t.jsx($e, { path: "projects/:id/docs", element: t.jsx(mw, {}) }), t.jsx($e, { path: "tasks", element: t.jsx(jw, {}) }), t.jsx($e, { path: "tasks/archived", element: t.jsx(ww, {}) }), t.jsx($e, { path: "agents", element: t.jsx(Mw, {}) }), t.jsx($e, { path: "businesses", element: t.jsx(Zp, {}) }), t.jsx($e, { path: "businesses/:businessId", element: t.jsx(Zp, {}) }), t.jsx($e, { path: "infrastructure", element: t.jsx(Rw, {}) }), t.jsx($e, { path: "design-hub", element: t.jsx(Bw, {}) }), t.jsx($e, { path: "memories", element: t.jsx(Gw, {}) }), t.jsx($e, { path: "settings", element: t.jsx(Aw, {}) })] })] }); }
const Yw = new Zy({ defaultOptions: { queries: { staleTime: 1e3 * 60 * 5, refetchOnWindowFocus: !1, retry: 1 } } });
dv.createRoot(document.getElementById("root")).render(t.jsx($n.StrictMode, { children: t.jsx(Fy, { client: Yw, children: t.jsx(uj, { children: t.jsx(fj, { children: t.jsx(av, { children: t.jsx(Kw, {}) }) }) }) }) }));
//# sourceMappingURL=index-De1PAK1M.js.map
//# sourceMappingURL=index-De1PAK1M.js.map