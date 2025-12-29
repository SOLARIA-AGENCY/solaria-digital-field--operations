import { u as Ut, j as s, a as Je, b as It, Q as hy, c as xy } from "./query-CtOOYOp0.js";
import { a as py, b as gy, g as by, R as Ln, r as R, N as yy, u as Lt, c as vy, O as jy, d as zl, e as Ny, f as st, h as vp, B as wy } from "./vendor-CQ5bjC1m.js";
import { c as Sy } from "./charts-CWKQEDB1.js";
(function () { const r = document.createElement("link").relList; if (r && r.supports && r.supports("modulepreload"))
    return; for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
    c(u); new MutationObserver(u => { for (const m of u)
    if (m.type === "childList")
        for (const h of m.addedNodes)
            h.tagName === "LINK" && h.rel === "modulepreload" && c(h); }).observe(document, { childList: !0, subtree: !0 }); function i(u) { const m = {}; return u.integrity && (m.integrity = u.integrity), u.referrerPolicy && (m.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? m.credentials = "include" : u.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin", m; } function c(u) { if (u.ep)
    return; u.ep = !0; const m = i(u); fetch(u.href, m); } })();
var Nd = { exports: {} }, Rn = {}, wd = { exports: {} }, Sd = {}; /**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ex;
function ky() { return Ex || (Ex = 1, (function (l) { function r(E, $) { var K = E.length; E.push($); e: for (; 0 < K;) {
    var pe = K - 1 >>> 1, me = E[pe];
    if (0 < u(me, $))
        E[pe] = $, E[K] = me, K = pe;
    else
        break e;
} } function i(E) { return E.length === 0 ? null : E[0]; } function c(E) { if (E.length === 0)
    return null; var $ = E[0], K = E.pop(); if (K !== $) {
    E[0] = K;
    e: for (var pe = 0, me = E.length, ke = me >>> 1; pe < ke;) {
        var ie = 2 * (pe + 1) - 1, ae = E[ie], fe = ie + 1, lt = E[fe];
        if (0 > u(ae, K))
            fe < me && 0 > u(lt, ae) ? (E[pe] = lt, E[fe] = K, pe = fe) : (E[pe] = ae, E[ie] = K, pe = ie);
        else if (fe < me && 0 > u(lt, K))
            E[pe] = lt, E[fe] = K, pe = fe;
        else
            break e;
    }
} return $; } function u(E, $) { var K = E.sortIndex - $.sortIndex; return K !== 0 ? K : E.id - $.id; } if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var m = performance;
    l.unstable_now = function () { return m.now(); };
}
else {
    var h = Date, g = h.now();
    l.unstable_now = function () { return h.now() - g; };
} var b = [], y = [], v = 1, x = null, j = 3, k = !1, N = !1, w = !1, A = !1, M = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null; function X(E) { for (var $ = i(y); $ !== null;) {
    if ($.callback === null)
        c(y);
    else if ($.startTime <= E)
        c(y), $.sortIndex = $.expirationTime, r(b, $);
    else
        break;
    $ = i(y);
} } function D(E) { if (w = !1, X(E), !N)
    if (i(b) !== null)
        N = !0, F || (F = !0, we());
    else {
        var $ = i(y);
        $ !== null && se(D, $.startTime - E);
    } } var F = !1, L = -1, Y = 5, re = -1; function Le() { return A ? !0 : !(l.unstable_now() - re < Y); } function He() { if (A = !1, F) {
    var E = l.unstable_now();
    re = E;
    var $ = !0;
    try {
        e: {
            N = !1, w && (w = !1, q(L), L = -1), k = !0;
            var K = j;
            try {
                t: {
                    for (X(E), x = i(b); x !== null && !(x.expirationTime > E && Le());) {
                        var pe = x.callback;
                        if (typeof pe == "function") {
                            x.callback = null, j = x.priorityLevel;
                            var me = pe(x.expirationTime <= E);
                            if (E = l.unstable_now(), typeof me == "function") {
                                x.callback = me, X(E), $ = !0;
                                break t;
                            }
                            x === i(b) && c(b), X(E);
                        }
                        else
                            c(b);
                        x = i(b);
                    }
                    if (x !== null)
                        $ = !0;
                    else {
                        var ke = i(y);
                        ke !== null && se(D, ke.startTime - E), $ = !1;
                    }
                }
                break e;
            }
            finally {
                x = null, j = K, k = !1;
            }
            $ = void 0;
        }
    }
    finally {
        $ ? we() : F = !1;
    }
} } var we; if (typeof G == "function")
    we = function () { G(He); };
else if (typeof MessageChannel < "u") {
    var Fe = new MessageChannel, qe = Fe.port2;
    Fe.port1.onmessage = He, we = function () { qe.postMessage(null); };
}
else
    we = function () { M(He, 0); }; function se(E, $) { L = M(function () { E(l.unstable_now()); }, $); } l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function (E) { E.callback = null; }, l.unstable_forceFrameRate = function (E) { 0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < E ? Math.floor(1e3 / E) : 5; }, l.unstable_getCurrentPriorityLevel = function () { return j; }, l.unstable_next = function (E) { switch (j) {
    case 1:
    case 2:
    case 3:
        var $ = 3;
        break;
    default: $ = j;
} var K = j; j = $; try {
    return E();
}
finally {
    j = K;
} }, l.unstable_requestPaint = function () { A = !0; }, l.unstable_runWithPriority = function (E, $) { switch (E) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: E = 3;
} var K = j; j = E; try {
    return $();
}
finally {
    j = K;
} }, l.unstable_scheduleCallback = function (E, $, K) { var pe = l.unstable_now(); switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? pe + K : pe) : K = pe, E) {
    case 1:
        var me = -1;
        break;
    case 2:
        me = 250;
        break;
    case 5:
        me = 1073741823;
        break;
    case 4:
        me = 1e4;
        break;
    default: me = 5e3;
} return me = K + me, E = { id: v++, callback: $, priorityLevel: E, startTime: K, expirationTime: me, sortIndex: -1 }, K > pe ? (E.sortIndex = K, r(y, E), i(b) === null && E === i(y) && (w ? (q(L), L = -1) : w = !0, se(D, K - pe))) : (E.sortIndex = me, r(b, E), N || k || (N = !0, F || (F = !0, we()))), E; }, l.unstable_shouldYield = Le, l.unstable_wrapCallback = function (E) { var $ = j; return function () { var K = j; j = $; try {
    return E.apply(this, arguments);
}
finally {
    j = K;
} }; }; })(Sd)), Sd; }
var Mx;
function Cy() { return Mx || (Mx = 1, wd.exports = ky()), wd.exports; } /**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var _x;
function Ay() {
    if (_x)
        return Rn;
    _x = 1;
    var l = Cy(), r = py(), i = gy();
    function c(e) { var t = "https://react.dev/errors/" + e; if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var a = 2; a < arguments.length; a++)
            t += "&args[]=" + encodeURIComponent(arguments[a]);
    } return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
    function u(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
    function m(e) { var t = e, a = e; if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do
            t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
    } return t.tag === 3 ? a : null; }
    function h(e) { if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
            return t.dehydrated;
    } return null; }
    function g(e) { if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
            return t.dehydrated;
    } return null; }
    function b(e) { if (m(e) !== e)
        throw Error(c(188)); }
    function y(e) { var t = e.alternate; if (!t) {
        if (t = m(e), t === null)
            throw Error(c(188));
        return t !== e ? null : e;
    } for (var a = e, n = t;;) {
        var o = a.return;
        if (o === null)
            break;
        var d = o.alternate;
        if (d === null) {
            if (n = o.return, n !== null) {
                a = n;
                continue;
            }
            break;
        }
        if (o.child === d.child) {
            for (d = o.child; d;) {
                if (d === a)
                    return b(o), e;
                if (d === n)
                    return b(o), t;
                d = d.sibling;
            }
            throw Error(c(188));
        }
        if (a.return !== n.return)
            a = o, n = d;
        else {
            for (var f = !1, p = o.child; p;) {
                if (p === a) {
                    f = !0, a = o, n = d;
                    break;
                }
                if (p === n) {
                    f = !0, n = o, a = d;
                    break;
                }
                p = p.sibling;
            }
            if (!f) {
                for (p = d.child; p;) {
                    if (p === a) {
                        f = !0, a = d, n = o;
                        break;
                    }
                    if (p === n) {
                        f = !0, n = d, a = o;
                        break;
                    }
                    p = p.sibling;
                }
                if (!f)
                    throw Error(c(189));
            }
        }
        if (a.alternate !== n)
            throw Error(c(190));
    } if (a.tag !== 3)
        throw Error(c(188)); return a.stateNode.current === a ? e : t; }
    function v(e) { var t = e.tag; if (t === 5 || t === 26 || t === 27 || t === 6)
        return e; for (e = e.child; e !== null;) {
        if (t = v(e), t !== null)
            return t;
        e = e.sibling;
    } return null; }
    var x = Object.assign, j = Symbol.for("react.element"), k = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), G = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), Le = Symbol.for("react.memo_cache_sentinel"), He = Symbol.iterator;
    function we(e) { return e === null || typeof e != "object" ? null : (e = He && e[He] || e["@@iterator"], typeof e == "function" ? e : null); }
    var Fe = Symbol.for("react.client.reference");
    function qe(e) { if (e == null)
        return null; if (typeof e == "function")
        return e.$$typeof === Fe ? null : e.displayName || e.name || null; if (typeof e == "string")
        return e; switch (e) {
        case w: return "Fragment";
        case M: return "Profiler";
        case A: return "StrictMode";
        case D: return "Suspense";
        case F: return "SuspenseList";
        case re: return "Activity";
    } if (typeof e == "object")
        switch (e.$$typeof) {
            case N: return "Portal";
            case G: return e.displayName || "Context";
            case q: return (e._context.displayName || "Context") + ".Consumer";
            case X:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case L: return t = e.displayName || null, t !== null ? t : qe(e.type) || "Memo";
            case Y:
                t = e._payload, e = e._init;
                try {
                    return qe(e(t));
                }
                catch { }
        } return null; }
    var se = Array.isArray, E = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = { pending: !1, data: null, method: null, action: null }, pe = [], me = -1;
    function ke(e) { return { current: e }; }
    function ie(e) { 0 > me || (e.current = pe[me], pe[me] = null, me--); }
    function ae(e, t) { me++, pe[me] = e.current, e.current = t; }
    var fe = ke(null), lt = ke(null), Wt = ke(null), Ue = ke(null);
    function ya(e, t) { switch (ae(Wt, t), ae(lt, e), ae(fe, null), t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Ih(e) : 0;
            break;
        default: if (e = t.tagName, t = t.namespaceURI)
            t = Ih(t), e = Wh(t, e);
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
    } ie(fe), ae(fe, e); }
    function es() { ie(fe), ie(lt), ie(Wt); }
    function Ls(e) { e.memoizedState !== null && ae(Ue, e); var t = fe.current, a = Wh(t, e.type); t !== a && (ae(lt, e), ae(fe, a)); }
    function Hs(e) { lt.current === e && (ie(fe), ie(lt)), Ue.current === e && (ie(Ue), _n._currentValue = K); }
    var Vs, Au;
    function va(e) {
        if (Vs === void 0)
            try {
                throw Error();
            }
            catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                Vs = t && t[1] || "", Au = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
        return `
` + Vs + e + Au;
    }
    var lc = !1;
    function nc(e, t) {
        if (!e || lc)
            return "";
        lc = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var n = { DetermineComponentFrameRoot: function () { try {
                    if (t) {
                        var Q = function () { throw Error(); };
                        if (Object.defineProperty(Q.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                            try {
                                Reflect.construct(Q, []);
                            }
                            catch (U) {
                                var z = U;
                            }
                            Reflect.construct(e, [], Q);
                        }
                        else {
                            try {
                                Q.call();
                            }
                            catch (U) {
                                z = U;
                            }
                            e.call(Q.prototype);
                        }
                    }
                    else {
                        try {
                            throw Error();
                        }
                        catch (U) {
                            z = U;
                        }
                        (Q = e()) && typeof Q.catch == "function" && Q.catch(function () { });
                    }
                }
                catch (U) {
                    if (U && z && typeof U.stack == "string")
                        return [U.stack, z.stack];
                } return [null, null]; } };
            n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
            o && o.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
            var d = n.DetermineComponentFrameRoot(), f = d[0], p = d[1];
            if (f && p) {
                var S = f.split(`
`), O = p.split(`
`);
                for (o = n = 0; n < S.length && !S[n].includes("DetermineComponentFrameRoot");)
                    n++;
                for (; o < O.length && !O[o].includes("DetermineComponentFrameRoot");)
                    o++;
                if (n === S.length || o === O.length)
                    for (n = S.length - 1, o = O.length - 1; 1 <= n && 0 <= o && S[n] !== O[o];)
                        o--;
                for (; 1 <= n && 0 <= o; n--, o--)
                    if (S[n] !== O[o]) {
                        if (n !== 1 || o !== 1)
                            do
                                if (n--, o--, 0 > o || S[n] !== O[o]) {
                                    var H = `
` + S[n].replace(" at new ", " at ");
                                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H;
                                }
                            while (1 <= n && 0 <= o);
                        break;
                    }
            }
        }
        finally {
            lc = !1, Error.prepareStackTrace = a;
        }
        return (a = e ? e.displayName || e.name : "") ? va(a) : "";
    }
    function Yg(e, t) { switch (e.tag) {
        case 26:
        case 27:
        case 5: return va(e.type);
        case 16: return va("Lazy");
        case 13: return e.child !== t && t !== null ? va("Suspense Fallback") : va("Suspense");
        case 19: return va("SuspenseList");
        case 0:
        case 15: return nc(e.type, !1);
        case 11: return nc(e.type.render, !1);
        case 1: return nc(e.type, !0);
        case 31: return va("Activity");
        default: return "";
    } }
    function Tu(e) {
        try {
            var t = "", a = null;
            do
                t += Yg(e, a), a = e, e = e.return;
            while (e);
            return t;
        }
        catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack;
        }
    }
    var rc = Object.prototype.hasOwnProperty, ic = l.unstable_scheduleCallback, cc = l.unstable_cancelCallback, Xg = l.unstable_shouldYield, Zg = l.unstable_requestPaint, kt = l.unstable_now, Jg = l.unstable_getCurrentPriorityLevel, Eu = l.unstable_ImmediatePriority, Mu = l.unstable_UserBlockingPriority, sr = l.unstable_NormalPriority, Fg = l.unstable_LowPriority, _u = l.unstable_IdlePriority, $g = l.log, Pg = l.unstable_setDisableYieldValue, Gl = null, Ct = null;
    function Gs(e) { if (typeof $g == "function" && Pg(e), Ct && typeof Ct.setStrictMode == "function")
        try {
            Ct.setStrictMode(Gl, e);
        }
        catch { } }
    var At = Math.clz32 ? Math.clz32 : e0, Ig = Math.log, Wg = Math.LN2;
    function e0(e) { return e >>>= 0, e === 0 ? 32 : 31 - (Ig(e) / Wg | 0) | 0; }
    var ar = 256, lr = 262144, nr = 4194304;
    function ja(e) { var t = e & 42; if (t !== 0)
        return t; switch (e & -e) {
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
    function rr(e, t, a) { var n = e.pendingLanes; if (n === 0)
        return 0; var o = 0, d = e.suspendedLanes, f = e.pingedLanes; e = e.warmLanes; var p = n & 134217727; return p !== 0 ? (n = p & ~d, n !== 0 ? o = ja(n) : (f &= p, f !== 0 ? o = ja(f) : a || (a = p & ~e, a !== 0 && (o = ja(a))))) : (p = n & ~d, p !== 0 ? o = ja(p) : f !== 0 ? o = ja(f) : a || (a = n & ~e, a !== 0 && (o = ja(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & d) === 0 && (d = o & -o, a = t & -t, d >= a || d === 32 && (a & 4194048) !== 0) ? t : o; }
    function Ql(e, t) { return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0; }
    function t0(e, t) { switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64: return t + 250;
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
        case 2097152: return t + 5e3;
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
    function Ou() { var e = nr; return nr <<= 1, (nr & 62914560) === 0 && (nr = 4194304), e; }
    function oc(e) { for (var t = [], a = 0; 31 > a; a++)
        t.push(e); return t; }
    function Kl(e, t) { e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0); }
    function s0(e, t, a, n, o, d) { var f = e.pendingLanes; e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0; var p = e.entanglements, S = e.expirationTimes, O = e.hiddenUpdates; for (a = f & ~a; 0 < a;) {
        var H = 31 - At(a), Q = 1 << H;
        p[H] = 0, S[H] = -1;
        var z = O[H];
        if (z !== null)
            for (O[H] = null, H = 0; H < z.length; H++) {
                var U = z[H];
                U !== null && (U.lane &= -536870913);
            }
        a &= ~Q;
    } n !== 0 && Du(e, n, 0), d !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(f & ~t)); }
    function Du(e, t, a) { e.pendingLanes |= t, e.suspendedLanes &= ~t; var n = 31 - At(t); e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | a & 261930; }
    function zu(e, t) { var a = e.entangledLanes |= t; for (e = e.entanglements; a;) {
        var n = 31 - At(a), o = 1 << n;
        o & t | e[n] & t && (e[n] |= t), a &= ~o;
    } }
    function Ru(e, t) { var a = t & -t; return a = (a & 42) !== 0 ? 1 : dc(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a; }
    function dc(e) { switch (e) {
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
    function uc(e) { return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2; }
    function Bu() { var e = $.p; return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Nx(e.type)); }
    function qu(e, t) { var a = $.p; try {
        return $.p = e, t();
    }
    finally {
        $.p = a;
    } }
    var Qs = Math.random().toString(36).slice(2), it = "__reactFiber$" + Qs, pt = "__reactProps$" + Qs, Ya = "__reactContainer$" + Qs, mc = "__reactEvents$" + Qs, a0 = "__reactListeners$" + Qs, l0 = "__reactHandles$" + Qs, Uu = "__reactResources$" + Qs, Yl = "__reactMarker$" + Qs;
    function fc(e) { delete e[it], delete e[pt], delete e[mc], delete e[a0], delete e[l0]; }
    function Xa(e) { var t = e[it]; if (t)
        return t; for (var a = e.parentNode; a;) {
        if (t = a[Ya] || a[it]) {
            if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
                for (e = rx(e); e !== null;) {
                    if (a = e[it])
                        return a;
                    e = rx(e);
                }
            return t;
        }
        e = a, a = e.parentNode;
    } return null; }
    function Za(e) { if (e = e[it] || e[Ya]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
            return e;
    } return null; }
    function Xl(e) { var t = e.tag; if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode; throw Error(c(33)); }
    function Ja(e) { var t = e[Uu]; return t || (t = e[Uu] = { hoistableStyles: new Map, hoistableScripts: new Map }), t; }
    function nt(e) { e[Yl] = !0; }
    var Lu = new Set, Hu = {};
    function Na(e, t) { Fa(e, t), Fa(e + "Capture", t); }
    function Fa(e, t) { for (Hu[e] = t, e = 0; e < t.length; e++)
        Lu.add(t[e]); }
    var n0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Vu = {}, Gu = {};
    function r0(e) { return rc.call(Gu, e) ? !0 : rc.call(Vu, e) ? !1 : n0.test(e) ? Gu[e] = !0 : (Vu[e] = !0, !1); }
    function ir(e, t, a) { if (r0(t))
        if (a === null)
            e.removeAttribute(t);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var n = t.toLowerCase().slice(0, 5);
                    if (n !== "data-" && n !== "aria-") {
                        e.removeAttribute(t);
                        return;
                    }
            }
            e.setAttribute(t, "" + a);
        } }
    function cr(e, t, a) { if (a === null)
        e.removeAttribute(t);
    else {
        switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return;
        }
        e.setAttribute(t, "" + a);
    } }
    function bs(e, t, a, n) { if (n === null)
        e.removeAttribute(a);
    else {
        switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(a);
                return;
        }
        e.setAttributeNS(t, a, "" + n);
    } }
    function Ht(e) { switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined": return e;
        case "object": return e;
        default: return "";
    } }
    function Qu(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
    function i0(e, t, a) { var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t); if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get, d = n.set;
        return Object.defineProperty(e, t, { configurable: !0, get: function () { return o.call(this); }, set: function (f) { a = "" + f, d.call(this, f); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return a; }, setValue: function (f) { a = "" + f; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
    } }
    function hc(e) { if (!e._valueTracker) {
        var t = Qu(e) ? "checked" : "value";
        e._valueTracker = i0(e, t, "" + e[t]);
    } }
    function Ku(e) { if (!e)
        return !1; var t = e._valueTracker; if (!t)
        return !0; var a = t.getValue(), n = ""; return e && (n = Qu(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== a ? (t.setValue(e), !0) : !1; }
    function or(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null; try {
        return e.activeElement || e.body;
    }
    catch {
        return e.body;
    } }
    var c0 = /[\n"\\]/g;
    function Vt(e) { return e.replace(c0, function (t) { return "\\" + t.charCodeAt(0).toString(16) + " "; }); }
    function xc(e, t, a, n, o, d, f, p) { e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ht(t)) : e.value !== "" + Ht(t) && (e.value = "" + Ht(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? pc(e, f, Ht(t)) : a != null ? pc(e, f, Ht(a)) : n != null && e.removeAttribute("value"), o == null && d != null && (e.defaultChecked = !!d), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.name = "" + Ht(p) : e.removeAttribute("name"); }
    function Yu(e, t, a, n, o, d, f, p) { if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), t != null || a != null) {
        if (!(d !== "submit" && d !== "reset" || t != null)) {
            hc(e);
            return;
        }
        a = a != null ? "" + Ht(a) : "", t = t != null ? "" + Ht(t) : a, p || t === e.value || (e.value = t), e.defaultValue = t;
    } n = n ?? o, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = p ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), hc(e); }
    function pc(e, t, a) { t === "number" && or(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a); }
    function $a(e, t, a, n) { if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
            t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
            o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && n && (e[a].defaultSelected = !0);
    }
    else {
        for (a = "" + Ht(a), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === a) {
                e[o].selected = !0, n && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    } }
    function Xu(e, t, a) { if (t != null && (t = "" + Ht(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
    } e.defaultValue = a != null ? "" + Ht(a) : ""; }
    function Zu(e, t, a, n) { if (t == null) {
        if (n != null) {
            if (a != null)
                throw Error(c(92));
            if (se(n)) {
                if (1 < n.length)
                    throw Error(c(93));
                n = n[0];
            }
            a = n;
        }
        a == null && (a = ""), t = a;
    } a = Ht(t), e.defaultValue = a, n = e.textContent, n === a && n !== "" && n !== null && (e.value = n), hc(e); }
    function Pa(e, t) { if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
            a.nodeValue = t;
            return;
        }
    } e.textContent = t; }
    var o0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Ju(e, t, a) { var n = t.indexOf("--") === 0; a == null || typeof a == "boolean" || a === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, a) : typeof a != "number" || a === 0 || o0.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"; }
    function Fu(e, t, a) { if (t != null && typeof t != "object")
        throw Error(c(62)); if (e = e.style, a != null) {
        for (var n in a)
            !a.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
        for (var o in t)
            n = t[o], t.hasOwnProperty(o) && a[o] !== n && Ju(e, o, n);
    }
    else
        for (var d in t)
            t.hasOwnProperty(d) && Ju(e, d, t[d]); }
    function gc(e) { if (e.indexOf("-") === -1)
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
    var d0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), u0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function dr(e) { return u0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e; }
    function ys() { }
    var bc = null;
    function yc(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
    var Ia = null, Wa = null;
    function $u(e) { var t = Za(e); if (t && (e = t.stateNode)) {
        var a = e[pt] || null;
        e: switch (e = t.stateNode, t.type) {
            case "input":
                if (xc(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
                    for (a = e; a.parentNode;)
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + Vt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
                        var n = a[t];
                        if (n !== e && n.form === e.form) {
                            var o = n[pt] || null;
                            if (!o)
                                throw Error(c(90));
                            xc(n, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        n = a[t], n.form === e.form && Ku(n);
                }
                break e;
            case "textarea":
                Xu(e, a.value, a.defaultValue);
                break e;
            case "select": t = a.value, t != null && $a(e, !!a.multiple, t, !1);
        }
    } }
    var vc = !1;
    function Pu(e, t, a) { if (vc)
        return e(t, a); vc = !0; try {
        var n = e(t);
        return n;
    }
    finally {
        if (vc = !1, (Ia !== null || Wa !== null) && (Pr(), Ia && (t = Ia, e = Wa, Wa = Ia = null, $u(t), e)))
            for (t = 0; t < e.length; t++)
                $u(e[t]);
    } }
    function Zl(e, t) { var a = e.stateNode; if (a === null)
        return null; var n = a[pt] || null; if (n === null)
        return null; a = n[t]; e: switch (t) {
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
            (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
            break e;
        default: e = !1;
    } if (e)
        return null; if (a && typeof a != "function")
        throw Error(c(231, t, typeof a)); return a; }
    var vs = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), jc = !1;
    if (vs)
        try {
            var Jl = {};
            Object.defineProperty(Jl, "passive", { get: function () { jc = !0; } }), window.addEventListener("test", Jl, Jl), window.removeEventListener("test", Jl, Jl);
        }
        catch {
            jc = !1;
        }
    var Ks = null, Nc = null, ur = null;
    function Iu() { if (ur)
        return ur; var e, t = Nc, a = t.length, n, o = "value" in Ks ? Ks.value : Ks.textContent, d = o.length; for (e = 0; e < a && t[e] === o[e]; e++)
        ; var f = a - e; for (n = 1; n <= f && t[a - n] === o[d - n]; n++)
        ; return ur = o.slice(e, 1 < n ? 1 - n : void 0); }
    function mr(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
    function fr() { return !0; }
    function Wu() { return !1; }
    function gt(e) { function t(a, n, o, d, f) { this._reactName = a, this._targetInst = o, this.type = n, this.nativeEvent = d, this.target = f, this.currentTarget = null; for (var p in e)
        e.hasOwnProperty(p) && (a = e[p], this[p] = a ? a(d) : d[p]); return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? fr : Wu, this.isPropagationStopped = Wu, this; } return x(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var a = this.nativeEvent; a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = fr); }, stopPropagation: function () { var a = this.nativeEvent; a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = fr); }, persist: function () { }, isPersistent: fr }), t; }
    var wa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, hr = gt(wa), Fl = x({}, wa, { view: 0, detail: 0 }), m0 = gt(Fl), wc, Sc, $l, xr = x({}, Fl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cc, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== $l && ($l && e.type === "mousemove" ? (wc = e.screenX - $l.screenX, Sc = e.screenY - $l.screenY) : Sc = wc = 0, $l = e), wc); }, movementY: function (e) { return "movementY" in e ? e.movementY : Sc; } }), em = gt(xr), f0 = x({}, xr, { dataTransfer: 0 }), h0 = gt(f0), x0 = x({}, Fl, { relatedTarget: 0 }), kc = gt(x0), p0 = x({}, wa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), g0 = gt(p0), b0 = x({}, wa, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), y0 = gt(b0), v0 = x({}, wa, { data: 0 }), tm = gt(v0), j0 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, N0 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, w0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function S0(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = w0[e]) ? !!t[e] : !1; }
    function Cc() { return S0; }
    var k0 = x({}, Fl, { key: function (e) { if (e.key) {
            var t = j0[e.key] || e.key;
            if (t !== "Unidentified")
                return t;
        } return e.type === "keypress" ? (e = mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? N0[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cc, charCode: function (e) { return e.type === "keypress" ? mr(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), C0 = gt(k0), A0 = x({}, xr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sm = gt(A0), T0 = x({}, Fl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cc }), E0 = gt(T0), M0 = x({}, wa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _0 = gt(M0), O0 = x({}, xr, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), D0 = gt(O0), z0 = x({}, wa, { newState: 0, oldState: 0 }), R0 = gt(z0), B0 = [9, 13, 27, 32], Ac = vs && "CompositionEvent" in window, Pl = null;
    vs && "documentMode" in document && (Pl = document.documentMode);
    var q0 = vs && "TextEvent" in window && !Pl, am = vs && (!Ac || Pl && 8 < Pl && 11 >= Pl), lm = " ", nm = !1;
    function rm(e, t) { switch (e) {
        case "keyup": return B0.indexOf(t.keyCode) !== -1;
        case "keydown": return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout": return !0;
        default: return !1;
    } }
    function im(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
    var el = !1;
    function U0(e, t) { switch (e) {
        case "compositionend": return im(t);
        case "keypress": return t.which !== 32 ? null : (nm = !0, lm);
        case "textInput": return e = t.data, e === lm && nm ? null : e;
        default: return null;
    } }
    function L0(e, t) { if (el)
        return e === "compositionend" || !Ac && rm(e, t) ? (e = Iu(), ur = Nc = Ks = null, el = !1, e) : null; switch (e) {
        case "paste": return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend": return am && t.locale !== "ko" ? null : t.data;
        default: return null;
    } }
    var H0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
    function cm(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!H0[e.type] : t === "textarea"; }
    function om(e, t, a, n) { Ia ? Wa ? Wa.push(n) : Wa = [n] : Ia = n, t = li(t, "onChange"), 0 < t.length && (a = new hr("onChange", "change", null, a, n), e.push({ event: a, listeners: t })); }
    var Il = null, Wl = null;
    function V0(e) { Xh(e, 0); }
    function pr(e) { var t = Xl(e); if (Ku(t))
        return e; }
    function dm(e, t) { if (e === "change")
        return t; }
    var um = !1;
    if (vs) {
        var Tc;
        if (vs) {
            var Ec = "oninput" in document;
            if (!Ec) {
                var mm = document.createElement("div");
                mm.setAttribute("oninput", "return;"), Ec = typeof mm.oninput == "function";
            }
            Tc = Ec;
        }
        else
            Tc = !1;
        um = Tc && (!document.documentMode || 9 < document.documentMode);
    }
    function fm() { Il && (Il.detachEvent("onpropertychange", hm), Wl = Il = null); }
    function hm(e) { if (e.propertyName === "value" && pr(Wl)) {
        var t = [];
        om(t, Wl, e, yc(e)), Pu(V0, t);
    } }
    function G0(e, t, a) { e === "focusin" ? (fm(), Il = t, Wl = a, Il.attachEvent("onpropertychange", hm)) : e === "focusout" && fm(); }
    function Q0(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return pr(Wl); }
    function K0(e, t) { if (e === "click")
        return pr(t); }
    function Y0(e, t) { if (e === "input" || e === "change")
        return pr(t); }
    function X0(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
    var Tt = typeof Object.is == "function" ? Object.is : X0;
    function en(e, t) { if (Tt(e, t))
        return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1; var a = Object.keys(e), n = Object.keys(t); if (a.length !== n.length)
        return !1; for (n = 0; n < a.length; n++) {
        var o = a[n];
        if (!rc.call(t, o) || !Tt(e[o], t[o]))
            return !1;
    } return !0; }
    function xm(e) { for (; e && e.firstChild;)
        e = e.firstChild; return e; }
    function pm(e, t) { var a = xm(e); e = 0; for (var n; a;) {
        if (a.nodeType === 3) {
            if (n = e + a.textContent.length, e <= t && n >= t)
                return { node: a, offset: t - e };
            e = n;
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
        a = xm(a);
    } }
    function gm(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1; }
    function bm(e) { e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window; for (var t = or(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
            var a = typeof t.contentWindow.location.href == "string";
        }
        catch {
            a = !1;
        }
        if (a)
            e = t.contentWindow;
        else
            break;
        t = or(e.document);
    } return t; }
    function Mc(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true"); }
    var Z0 = vs && "documentMode" in document && 11 >= document.documentMode, tl = null, _c = null, tn = null, Oc = !1;
    function ym(e, t, a) { var n = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument; Oc || tl == null || tl !== or(n) || (n = tl, "selectionStart" in n && Mc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), tn && en(tn, n) || (tn = n, n = li(_c, "onSelect"), 0 < n.length && (t = new hr("onSelect", "select", null, t, a), e.push({ event: t, listeners: n }), t.target = tl))); }
    function Sa(e, t) { var a = {}; return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a; }
    var sl = { animationend: Sa("Animation", "AnimationEnd"), animationiteration: Sa("Animation", "AnimationIteration"), animationstart: Sa("Animation", "AnimationStart"), transitionrun: Sa("Transition", "TransitionRun"), transitionstart: Sa("Transition", "TransitionStart"), transitioncancel: Sa("Transition", "TransitionCancel"), transitionend: Sa("Transition", "TransitionEnd") }, Dc = {}, vm = {};
    vs && (vm = document.createElement("div").style, "AnimationEvent" in window || (delete sl.animationend.animation, delete sl.animationiteration.animation, delete sl.animationstart.animation), "TransitionEvent" in window || delete sl.transitionend.transition);
    function ka(e) { if (Dc[e])
        return Dc[e]; if (!sl[e])
        return e; var t = sl[e], a; for (a in t)
        if (t.hasOwnProperty(a) && a in vm)
            return Dc[e] = t[a]; return e; }
    var jm = ka("animationend"), Nm = ka("animationiteration"), wm = ka("animationstart"), J0 = ka("transitionrun"), F0 = ka("transitionstart"), $0 = ka("transitioncancel"), Sm = ka("transitionend"), km = new Map, zc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    zc.push("scrollEnd");
    function ts(e, t) { km.set(e, t), Na(t, [e]); }
    var gr = typeof reportError == "function" ? reportError : function (e) { if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
        if (!window.dispatchEvent(t))
            return;
    }
    else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
    } console.error(e); }, Gt = [], al = 0, Rc = 0;
    function br() { for (var e = al, t = Rc = al = 0; t < e;) {
        var a = Gt[t];
        Gt[t++] = null;
        var n = Gt[t];
        Gt[t++] = null;
        var o = Gt[t];
        Gt[t++] = null;
        var d = Gt[t];
        if (Gt[t++] = null, n !== null && o !== null) {
            var f = n.pending;
            f === null ? o.next = o : (o.next = f.next, f.next = o), n.pending = o;
        }
        d !== 0 && Cm(a, o, d);
    } }
    function yr(e, t, a, n) { Gt[al++] = e, Gt[al++] = t, Gt[al++] = a, Gt[al++] = n, Rc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n); }
    function Bc(e, t, a, n) { return yr(e, t, a, n), vr(e); }
    function Ca(e, t) { return yr(e, null, null, t), vr(e); }
    function Cm(e, t, a) { e.lanes |= a; var n = e.alternate; n !== null && (n.lanes |= a); for (var o = !1, d = e.return; d !== null;)
        d.childLanes |= a, n = d.alternate, n !== null && (n.childLanes |= a), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (o = !0)), e = d, d = d.return; return e.tag === 3 ? (d = e.stateNode, o && t !== null && (o = 31 - At(a), e = d.hiddenUpdates, n = e[o], n === null ? e[o] = [t] : n.push(t), t.lane = a | 536870912), d) : null; }
    function vr(e) { if (50 < Sn)
        throw Sn = 0, Xo = null, Error(c(185)); for (var t = e.return; t !== null;)
        e = t, t = e.return; return e.tag === 3 ? e.stateNode : null; }
    var ll = {};
    function P0(e, t, a, n) { this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
    function Et(e, t, a, n) { return new P0(e, t, a, n); }
    function qc(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
    function js(e, t) { var a = e.alternate; return a === null ? (a = Et(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a; }
    function Am(e, t) { e.flags &= 65011714; var a = e.alternate; return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e; }
    function jr(e, t, a, n, o, d) { var f = 0; if (n = e, typeof e == "function")
        qc(e) && (f = 1);
    else if (typeof e == "string")
        f = sy(e, a, fe.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
        e: switch (e) {
            case re: return e = Et(31, a, t, o), e.elementType = re, e.lanes = d, e;
            case w: return Aa(a.children, o, d, t);
            case A:
                f = 8, o |= 24;
                break;
            case M: return e = Et(12, a, t, o | 2), e.elementType = M, e.lanes = d, e;
            case D: return e = Et(13, a, t, o), e.elementType = D, e.lanes = d, e;
            case F: return e = Et(19, a, t, o), e.elementType = F, e.lanes = d, e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case G:
                            f = 10;
                            break e;
                        case q:
                            f = 9;
                            break e;
                        case X:
                            f = 11;
                            break e;
                        case L:
                            f = 14;
                            break e;
                        case Y:
                            f = 16, n = null;
                            break e;
                    }
                f = 29, a = Error(c(130, e === null ? "null" : typeof e, "")), n = null;
        } return t = Et(f, a, t, o), t.elementType = e, t.type = n, t.lanes = d, t; }
    function Aa(e, t, a, n) { return e = Et(7, e, n, t), e.lanes = a, e; }
    function Uc(e, t, a) { return e = Et(6, e, null, t), e.lanes = a, e; }
    function Tm(e) { var t = Et(18, null, null, 0); return t.stateNode = e, t; }
    function Lc(e, t, a) { return t = Et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
    var Em = new WeakMap;
    function Qt(e, t) { if (typeof e == "object" && e !== null) {
        var a = Em.get(e);
        return a !== void 0 ? a : (t = { value: e, source: t, stack: Tu(t) }, Em.set(e, t), t);
    } return { value: e, source: t, stack: Tu(t) }; }
    var nl = [], rl = 0, Nr = null, sn = 0, Kt = [], Yt = 0, Ys = null, os = 1, ds = "";
    function Ns(e, t) { nl[rl++] = sn, nl[rl++] = Nr, Nr = e, sn = t; }
    function Mm(e, t, a) { Kt[Yt++] = os, Kt[Yt++] = ds, Kt[Yt++] = Ys, Ys = e; var n = os; e = ds; var o = 32 - At(n) - 1; n &= ~(1 << o), a += 1; var d = 32 - At(t) + o; if (30 < d) {
        var f = o - o % 5;
        d = (n & (1 << f) - 1).toString(32), n >>= f, o -= f, os = 1 << 32 - At(t) + o | a << o | n, ds = d + e;
    }
    else
        os = 1 << d | a << o | n, ds = e; }
    function Hc(e) { e.return !== null && (Ns(e, 1), Mm(e, 1, 0)); }
    function Vc(e) { for (; e === Nr;)
        Nr = nl[--rl], nl[rl] = null, sn = nl[--rl], nl[rl] = null; for (; e === Ys;)
        Ys = Kt[--Yt], Kt[Yt] = null, ds = Kt[--Yt], Kt[Yt] = null, os = Kt[--Yt], Kt[Yt] = null; }
    function _m(e, t) { Kt[Yt++] = os, Kt[Yt++] = ds, Kt[Yt++] = Ys, os = t.id, ds = t.overflow, Ys = e; }
    var ct = null, De = null, ye = !1, Xs = null, Xt = !1, Gc = Error(c(519));
    function Zs(e) { var t = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")); throw an(Qt(t, e)), Gc; }
    function Om(e) { var t = e.stateNode, a = e.type, n = e.memoizedProps; switch (t[it] = e, t[pt] = n, a) {
        case "dialog":
            xe("cancel", t), xe("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            xe("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Cn.length; a++)
                xe(Cn[a], t);
            break;
        case "source":
            xe("error", t);
            break;
        case "img":
        case "image":
        case "link":
            xe("error", t), xe("load", t);
            break;
        case "details":
            xe("toggle", t);
            break;
        case "input":
            xe("invalid", t), Yu(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0);
            break;
        case "select":
            xe("invalid", t);
            break;
        case "textarea": xe("invalid", t), Zu(t, n.value, n.defaultValue, n.children);
    } a = n.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || n.suppressHydrationWarning === !0 || $h(t.textContent, a) ? (n.popover != null && (xe("beforetoggle", t), xe("toggle", t)), n.onScroll != null && xe("scroll", t), n.onScrollEnd != null && xe("scrollend", t), n.onClick != null && (t.onclick = ys), t = !0) : t = !1, t || Zs(e, !0); }
    function Dm(e) { for (ct = e.return; ct;)
        switch (ct.tag) {
            case 5:
            case 31:
            case 13:
                Xt = !1;
                return;
            case 27:
            case 3:
                Xt = !0;
                return;
            default: ct = ct.return;
        } }
    function il(e) { if (e !== ct)
        return !1; if (!ye)
        return Dm(e), ye = !0, !1; var t = e.tag, a; if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || id(e.type, e.memoizedProps)), a = !a), a && De && Zs(e), Dm(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
            throw Error(c(317));
        De = nx(e);
    }
    else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
            throw Error(c(317));
        De = nx(e);
    }
    else
        t === 27 ? (t = De, ia(e.type) ? (e = md, md = null, De = e) : De = t) : De = ct ? Jt(e.stateNode.nextSibling) : null; return !0; }
    function Ta() { De = ct = null, ye = !1; }
    function Qc() { var e = Xs; return e !== null && (jt === null ? jt = e : jt.push.apply(jt, e), Xs = null), e; }
    function an(e) { Xs === null ? Xs = [e] : Xs.push(e); }
    var Kc = ke(null), Ea = null, ws = null;
    function Js(e, t, a) { ae(Kc, t._currentValue), t._currentValue = a; }
    function Ss(e) { e._currentValue = Kc.current, ie(Kc); }
    function Yc(e, t, a) { for (; e !== null;) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === a)
            break;
        e = e.return;
    } }
    function Xc(e, t, a, n) { var o = e.child; for (o !== null && (o.return = e); o !== null;) {
        var d = o.dependencies;
        if (d !== null) {
            var f = o.child;
            d = d.firstContext;
            e: for (; d !== null;) {
                var p = d;
                d = o;
                for (var S = 0; S < t.length; S++)
                    if (p.context === t[S]) {
                        d.lanes |= a, p = d.alternate, p !== null && (p.lanes |= a), Yc(d.return, a, e), n || (f = null);
                        break e;
                    }
                d = p.next;
            }
        }
        else if (o.tag === 18) {
            if (f = o.return, f === null)
                throw Error(c(341));
            f.lanes |= a, d = f.alternate, d !== null && (d.lanes |= a), Yc(f, a, e), f = null;
        }
        else
            f = o.child;
        if (f !== null)
            f.return = o;
        else
            for (f = o; f !== null;) {
                if (f === e) {
                    f = null;
                    break;
                }
                if (o = f.sibling, o !== null) {
                    o.return = f.return, f = o;
                    break;
                }
                f = f.return;
            }
        o = f;
    } }
    function cl(e, t, a, n) { e = null; for (var o = t, d = !1; o !== null;) {
        if (!d) {
            if ((o.flags & 524288) !== 0)
                d = !0;
            else if ((o.flags & 262144) !== 0)
                break;
        }
        if (o.tag === 10) {
            var f = o.alternate;
            if (f === null)
                throw Error(c(387));
            if (f = f.memoizedProps, f !== null) {
                var p = o.type;
                Tt(o.pendingProps.value, f.value) || (e !== null ? e.push(p) : e = [p]);
            }
        }
        else if (o === Ue.current) {
            if (f = o.alternate, f === null)
                throw Error(c(387));
            f.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(_n) : e = [_n]);
        }
        o = o.return;
    } e !== null && Xc(t, e, a, n), t.flags |= 262144; }
    function wr(e) { for (e = e.firstContext; e !== null;) {
        if (!Tt(e.context._currentValue, e.memoizedValue))
            return !0;
        e = e.next;
    } return !1; }
    function Ma(e) { Ea = e, ws = null, e = e.dependencies, e !== null && (e.firstContext = null); }
    function ot(e) { return zm(Ea, e); }
    function Sr(e, t) { return Ea === null && Ma(e), zm(e, t); }
    function zm(e, t) { var a = t._currentValue; if (t = { context: t, memoizedValue: a, next: null }, ws === null) {
        if (e === null)
            throw Error(c(308));
        ws = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    }
    else
        ws = ws.next = t; return a; }
    var I0 = typeof AbortController < "u" ? AbortController : function () { var e = [], t = this.signal = { aborted: !1, addEventListener: function (a, n) { e.push(n); } }; this.abort = function () { t.aborted = !0, e.forEach(function (a) { return a(); }); }; }, W0 = l.unstable_scheduleCallback, eb = l.unstable_NormalPriority, $e = { $$typeof: G, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function Zc() { return { controller: new I0, data: new Map, refCount: 0 }; }
    function ln(e) { e.refCount--, e.refCount === 0 && W0(eb, function () { e.controller.abort(); }); }
    var nn = null, Jc = 0, ol = 0, dl = null;
    function tb(e, t) { if (nn === null) {
        var a = nn = [];
        Jc = 0, ol = Io(), dl = { status: "pending", value: void 0, then: function (n) { a.push(n); } };
    } return Jc++, t.then(Rm, Rm), t; }
    function Rm() { if (--Jc === 0 && nn !== null) {
        dl !== null && (dl.status = "fulfilled");
        var e = nn;
        nn = null, ol = 0, dl = null;
        for (var t = 0; t < e.length; t++)
            (0, e[t])();
    } }
    function sb(e, t) { var a = [], n = { status: "pending", value: null, reason: null, then: function (o) { a.push(o); } }; return e.then(function () { n.status = "fulfilled", n.value = t; for (var o = 0; o < a.length; o++)
        (0, a[o])(t); }, function (o) { for (n.status = "rejected", n.reason = o, o = 0; o < a.length; o++)
        (0, a[o])(void 0); }), n; }
    var Bm = E.S;
    E.S = function (e, t) { vh = kt(), typeof t == "object" && t !== null && typeof t.then == "function" && tb(e, t), Bm !== null && Bm(e, t); };
    var _a = ke(null);
    function Fc() { var e = _a.current; return e !== null ? e : Oe.pooledCache; }
    function kr(e, t) { t === null ? ae(_a, _a.current) : ae(_a, t.pool); }
    function qm() { var e = Fc(); return e === null ? null : { parent: $e._currentValue, pool: e }; }
    var ul = Error(c(460)), $c = Error(c(474)), Cr = Error(c(542)), Ar = { then: function () { } };
    function Um(e) { return e = e.status, e === "fulfilled" || e === "rejected"; }
    function Lm(e, t, a) { switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(ys, ys), t = a), t.status) {
        case "fulfilled": return t.value;
        case "rejected": throw e = t.reason, Vm(e), e;
        default:
            if (typeof t.status == "string")
                t.then(ys, ys);
            else {
                if (e = Oe, e !== null && 100 < e.shellSuspendCounter)
                    throw Error(c(482));
                e = t, e.status = "pending", e.then(function (n) { if (t.status === "pending") {
                    var o = t;
                    o.status = "fulfilled", o.value = n;
                } }, function (n) { if (t.status === "pending") {
                    var o = t;
                    o.status = "rejected", o.reason = n;
                } });
            }
            switch (t.status) {
                case "fulfilled": return t.value;
                case "rejected": throw e = t.reason, Vm(e), e;
            }
            throw Da = t, ul;
    } }
    function Oa(e) { try {
        var t = e._init;
        return t(e._payload);
    }
    catch (a) {
        throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Da = a, ul) : a;
    } }
    var Da = null;
    function Hm() { if (Da === null)
        throw Error(c(459)); var e = Da; return Da = null, e; }
    function Vm(e) { if (e === ul || e === Cr)
        throw Error(c(483)); }
    var ml = null, rn = 0;
    function Tr(e) { var t = rn; return rn += 1, ml === null && (ml = []), Lm(ml, e, t); }
    function cn(e, t) { t = t.props.ref, e.ref = t !== void 0 ? t : null; }
    function Er(e, t) { throw t.$$typeof === j ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))); }
    function Gm(e) { function t(T, C) { if (e) {
        var _ = T.deletions;
        _ === null ? (T.deletions = [C], T.flags |= 16) : _.push(C);
    } } function a(T, C) { if (!e)
        return null; for (; C !== null;)
        t(T, C), C = C.sibling; return null; } function n(T) { for (var C = new Map; T !== null;)
        T.key !== null ? C.set(T.key, T) : C.set(T.index, T), T = T.sibling; return C; } function o(T, C) { return T = js(T, C), T.index = 0, T.sibling = null, T; } function d(T, C, _) { return T.index = _, e ? (_ = T.alternate, _ !== null ? (_ = _.index, _ < C ? (T.flags |= 67108866, C) : _) : (T.flags |= 67108866, C)) : (T.flags |= 1048576, C); } function f(T) { return e && T.alternate === null && (T.flags |= 67108866), T; } function p(T, C, _, V) { return C === null || C.tag !== 6 ? (C = Uc(_, T.mode, V), C.return = T, C) : (C = o(C, _), C.return = T, C); } function S(T, C, _, V) { var te = _.type; return te === w ? H(T, C, _.props.children, V, _.key) : C !== null && (C.elementType === te || typeof te == "object" && te !== null && te.$$typeof === Y && Oa(te) === C.type) ? (C = o(C, _.props), cn(C, _), C.return = T, C) : (C = jr(_.type, _.key, _.props, null, T.mode, V), cn(C, _), C.return = T, C); } function O(T, C, _, V) { return C === null || C.tag !== 4 || C.stateNode.containerInfo !== _.containerInfo || C.stateNode.implementation !== _.implementation ? (C = Lc(_, T.mode, V), C.return = T, C) : (C = o(C, _.children || []), C.return = T, C); } function H(T, C, _, V, te) { return C === null || C.tag !== 7 ? (C = Aa(_, T.mode, V, te), C.return = T, C) : (C = o(C, _), C.return = T, C); } function Q(T, C, _) { if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return C = Uc("" + C, T.mode, _), C.return = T, C; if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
            case k: return _ = jr(C.type, C.key, C.props, null, T.mode, _), cn(_, C), _.return = T, _;
            case N: return C = Lc(C, T.mode, _), C.return = T, C;
            case Y: return C = Oa(C), Q(T, C, _);
        }
        if (se(C) || we(C))
            return C = Aa(C, T.mode, _, null), C.return = T, C;
        if (typeof C.then == "function")
            return Q(T, Tr(C), _);
        if (C.$$typeof === G)
            return Q(T, Sr(T, C), _);
        Er(T, C);
    } return null; } function z(T, C, _, V) { var te = C !== null ? C.key : null; if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return te !== null ? null : p(T, C, "" + _, V); if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
            case k: return _.key === te ? S(T, C, _, V) : null;
            case N: return _.key === te ? O(T, C, _, V) : null;
            case Y: return _ = Oa(_), z(T, C, _, V);
        }
        if (se(_) || we(_))
            return te !== null ? null : H(T, C, _, V, null);
        if (typeof _.then == "function")
            return z(T, C, Tr(_), V);
        if (_.$$typeof === G)
            return z(T, C, Sr(T, _), V);
        Er(T, _);
    } return null; } function U(T, C, _, V, te) { if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return T = T.get(_) || null, p(C, T, "" + V, te); if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
            case k: return T = T.get(V.key === null ? _ : V.key) || null, S(C, T, V, te);
            case N: return T = T.get(V.key === null ? _ : V.key) || null, O(C, T, V, te);
            case Y: return V = Oa(V), U(T, C, _, V, te);
        }
        if (se(V) || we(V))
            return T = T.get(_) || null, H(C, T, V, te, null);
        if (typeof V.then == "function")
            return U(T, C, _, Tr(V), te);
        if (V.$$typeof === G)
            return U(T, C, _, Sr(C, V), te);
        Er(C, V);
    } return null; } function P(T, C, _, V) { for (var te = null, je = null, ee = C, de = C = 0, be = null; ee !== null && de < _.length; de++) {
        ee.index > de ? (be = ee, ee = null) : be = ee.sibling;
        var Ne = z(T, ee, _[de], V);
        if (Ne === null) {
            ee === null && (ee = be);
            break;
        }
        e && ee && Ne.alternate === null && t(T, ee), C = d(Ne, C, de), je === null ? te = Ne : je.sibling = Ne, je = Ne, ee = be;
    } if (de === _.length)
        return a(T, ee), ye && Ns(T, de), te; if (ee === null) {
        for (; de < _.length; de++)
            ee = Q(T, _[de], V), ee !== null && (C = d(ee, C, de), je === null ? te = ee : je.sibling = ee, je = ee);
        return ye && Ns(T, de), te;
    } for (ee = n(ee); de < _.length; de++)
        be = U(ee, T, de, _[de], V), be !== null && (e && be.alternate !== null && ee.delete(be.key === null ? de : be.key), C = d(be, C, de), je === null ? te = be : je.sibling = be, je = be); return e && ee.forEach(function (ma) { return t(T, ma); }), ye && Ns(T, de), te; } function le(T, C, _, V) { if (_ == null)
        throw Error(c(151)); for (var te = null, je = null, ee = C, de = C = 0, be = null, Ne = _.next(); ee !== null && !Ne.done; de++, Ne = _.next()) {
        ee.index > de ? (be = ee, ee = null) : be = ee.sibling;
        var ma = z(T, ee, Ne.value, V);
        if (ma === null) {
            ee === null && (ee = be);
            break;
        }
        e && ee && ma.alternate === null && t(T, ee), C = d(ma, C, de), je === null ? te = ma : je.sibling = ma, je = ma, ee = be;
    } if (Ne.done)
        return a(T, ee), ye && Ns(T, de), te; if (ee === null) {
        for (; !Ne.done; de++, Ne = _.next())
            Ne = Q(T, Ne.value, V), Ne !== null && (C = d(Ne, C, de), je === null ? te = Ne : je.sibling = Ne, je = Ne);
        return ye && Ns(T, de), te;
    } for (ee = n(ee); !Ne.done; de++, Ne = _.next())
        Ne = U(ee, T, de, Ne.value, V), Ne !== null && (e && Ne.alternate !== null && ee.delete(Ne.key === null ? de : Ne.key), C = d(Ne, C, de), je === null ? te = Ne : je.sibling = Ne, je = Ne); return e && ee.forEach(function (fy) { return t(T, fy); }), ye && Ns(T, de), te; } function Me(T, C, _, V) { if (typeof _ == "object" && _ !== null && _.type === w && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
            case k:
                e: {
                    for (var te = _.key; C !== null;) {
                        if (C.key === te) {
                            if (te = _.type, te === w) {
                                if (C.tag === 7) {
                                    a(T, C.sibling), V = o(C, _.props.children), V.return = T, T = V;
                                    break e;
                                }
                            }
                            else if (C.elementType === te || typeof te == "object" && te !== null && te.$$typeof === Y && Oa(te) === C.type) {
                                a(T, C.sibling), V = o(C, _.props), cn(V, _), V.return = T, T = V;
                                break e;
                            }
                            a(T, C);
                            break;
                        }
                        else
                            t(T, C);
                        C = C.sibling;
                    }
                    _.type === w ? (V = Aa(_.props.children, T.mode, V, _.key), V.return = T, T = V) : (V = jr(_.type, _.key, _.props, null, T.mode, V), cn(V, _), V.return = T, T = V);
                }
                return f(T);
            case N:
                e: {
                    for (te = _.key; C !== null;) {
                        if (C.key === te)
                            if (C.tag === 4 && C.stateNode.containerInfo === _.containerInfo && C.stateNode.implementation === _.implementation) {
                                a(T, C.sibling), V = o(C, _.children || []), V.return = T, T = V;
                                break e;
                            }
                            else {
                                a(T, C);
                                break;
                            }
                        else
                            t(T, C);
                        C = C.sibling;
                    }
                    V = Lc(_, T.mode, V), V.return = T, T = V;
                }
                return f(T);
            case Y: return _ = Oa(_), Me(T, C, _, V);
        }
        if (se(_))
            return P(T, C, _, V);
        if (we(_)) {
            if (te = we(_), typeof te != "function")
                throw Error(c(150));
            return _ = te.call(_), le(T, C, _, V);
        }
        if (typeof _.then == "function")
            return Me(T, C, Tr(_), V);
        if (_.$$typeof === G)
            return Me(T, C, Sr(T, _), V);
        Er(T, _);
    } return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, C !== null && C.tag === 6 ? (a(T, C.sibling), V = o(C, _), V.return = T, T = V) : (a(T, C), V = Uc(_, T.mode, V), V.return = T, T = V), f(T)) : a(T, C); } return function (T, C, _, V) { try {
        rn = 0;
        var te = Me(T, C, _, V);
        return ml = null, te;
    }
    catch (ee) {
        if (ee === ul || ee === Cr)
            throw ee;
        var je = Et(29, ee, null, T.mode);
        return je.lanes = V, je.return = T, je;
    }
    finally { } }; }
    var za = Gm(!0), Qm = Gm(!1), Fs = !1;
    function Pc(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null }; }
    function Ic(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null }); }
    function $s(e) { return { lane: e, tag: 0, payload: null, callback: null, next: null }; }
    function Ps(e, t, a) { var n = e.updateQueue; if (n === null)
        return null; if (n = n.shared, (Se & 2) !== 0) {
        var o = n.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, t = vr(e), Cm(e, null, a), t;
    } return yr(e, n, t, a), vr(e); }
    function on(e, t, a) { if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes, a |= n, t.lanes = a, zu(e, a);
    } }
    function Wc(e, t) { var a = e.updateQueue, n = e.alternate; if (n !== null && (n = n.updateQueue, a === n)) {
        var o = null, d = null;
        if (a = a.firstBaseUpdate, a !== null) {
            do {
                var f = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
                d === null ? o = d = f : d = d.next = f, a = a.next;
            } while (a !== null);
            d === null ? o = d = t : d = d.next = t;
        }
        else
            o = d = t;
        a = { baseState: n.baseState, firstBaseUpdate: o, lastBaseUpdate: d, shared: n.shared, callbacks: n.callbacks }, e.updateQueue = a;
        return;
    } e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t; }
    var eo = !1;
    function dn() { if (eo) {
        var e = dl;
        if (e !== null)
            throw e;
    } }
    function un(e, t, a, n) { eo = !1; var o = e.updateQueue; Fs = !1; var d = o.firstBaseUpdate, f = o.lastBaseUpdate, p = o.shared.pending; if (p !== null) {
        o.shared.pending = null;
        var S = p, O = S.next;
        S.next = null, f === null ? d = O : f.next = O, f = S;
        var H = e.alternate;
        H !== null && (H = H.updateQueue, p = H.lastBaseUpdate, p !== f && (p === null ? H.firstBaseUpdate = O : p.next = O, H.lastBaseUpdate = S));
    } if (d !== null) {
        var Q = o.baseState;
        f = 0, H = O = S = null, p = d;
        do {
            var z = p.lane & -536870913, U = z !== p.lane;
            if (U ? (ge & z) === z : (n & z) === z) {
                z !== 0 && z === ol && (eo = !0), H !== null && (H = H.next = { lane: 0, tag: p.tag, payload: p.payload, callback: null, next: null });
                e: {
                    var P = e, le = p;
                    z = t;
                    var Me = a;
                    switch (le.tag) {
                        case 1:
                            if (P = le.payload, typeof P == "function") {
                                Q = P.call(Me, Q, z);
                                break e;
                            }
                            Q = P;
                            break e;
                        case 3: P.flags = P.flags & -65537 | 128;
                        case 0:
                            if (P = le.payload, z = typeof P == "function" ? P.call(Me, Q, z) : P, z == null)
                                break e;
                            Q = x({}, Q, z);
                            break e;
                        case 2: Fs = !0;
                    }
                }
                z = p.callback, z !== null && (e.flags |= 64, U && (e.flags |= 8192), U = o.callbacks, U === null ? o.callbacks = [z] : U.push(z));
            }
            else
                U = { lane: z, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, H === null ? (O = H = U, S = Q) : H = H.next = U, f |= z;
            if (p = p.next, p === null) {
                if (p = o.shared.pending, p === null)
                    break;
                U = p, p = U.next, U.next = null, o.lastBaseUpdate = U, o.shared.pending = null;
            }
        } while (!0);
        H === null && (S = Q), o.baseState = S, o.firstBaseUpdate = O, o.lastBaseUpdate = H, d === null && (o.shared.lanes = 0), sa |= f, e.lanes = f, e.memoizedState = Q;
    } }
    function Km(e, t) { if (typeof e != "function")
        throw Error(c(191, e)); e.call(t); }
    function Ym(e, t) { var a = e.callbacks; if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
            Km(a[e], t); }
    var fl = ke(null), Mr = ke(0);
    function Xm(e, t) { e = Ds, ae(Mr, e), ae(fl, t), Ds = e | t.baseLanes; }
    function to() { ae(Mr, Ds), ae(fl, fl.current); }
    function so() { Ds = Mr.current, ie(fl), ie(Mr); }
    var Mt = ke(null), Zt = null;
    function Is(e) { var t = e.alternate; ae(Ke, Ke.current & 1), ae(Mt, e), Zt === null && (t === null || fl.current !== null || t.memoizedState !== null) && (Zt = e); }
    function ao(e) { ae(Ke, Ke.current), ae(Mt, e), Zt === null && (Zt = e); }
    function Zm(e) { e.tag === 22 ? (ae(Ke, Ke.current), ae(Mt, e), Zt === null && (Zt = e)) : Ws(); }
    function Ws() { ae(Ke, Ke.current), ae(Mt, Mt.current); }
    function _t(e) { ie(Mt), Zt === e && (Zt = null), ie(Ke); }
    var Ke = ke(0);
    function _r(e) { for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var a = t.memoizedState;
            if (a !== null && (a = a.dehydrated, a === null || dd(a) || ud(a)))
                return t;
        }
        else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
            if ((t.flags & 128) !== 0)
                return t;
        }
        else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    } return null; }
    var ks = 0, ce = null, Te = null, Pe = null, Or = !1, hl = !1, Ra = !1, Dr = 0, mn = 0, xl = null, ab = 0;
    function Ve() { throw Error(c(321)); }
    function lo(e, t) { if (t === null)
        return !1; for (var a = 0; a < t.length && a < e.length; a++)
        if (!Tt(e[a], t[a]))
            return !1; return !0; }
    function no(e, t, a, n, o, d) { return ks = d, ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, E.H = e === null || e.memoizedState === null ? _f : jo, Ra = !1, d = a(n, o), Ra = !1, hl && (d = Fm(t, a, n, o)), Jm(e), d; }
    function Jm(e) { E.H = xn; var t = Te !== null && Te.next !== null; if (ks = 0, Pe = Te = ce = null, Or = !1, mn = 0, xl = null, t)
        throw Error(c(300)); e === null || Ie || (e = e.dependencies, e !== null && wr(e) && (Ie = !0)); }
    function Fm(e, t, a, n) { ce = e; var o = 0; do {
        if (hl && (xl = null), mn = 0, hl = !1, 25 <= o)
            throw Error(c(301));
        if (o += 1, Pe = Te = null, e.updateQueue != null) {
            var d = e.updateQueue;
            d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
        }
        E.H = Of, d = t(a, n);
    } while (hl); return d; }
    function lb() { var e = E.H, t = e.useState()[0]; return t = typeof t.then == "function" ? fn(t) : t, e = e.useState()[0], (Te !== null ? Te.memoizedState : null) !== e && (ce.flags |= 1024), t; }
    function ro() { var e = Dr !== 0; return Dr = 0, e; }
    function io(e, t, a) { t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a; }
    function co(e) { if (Or) {
        for (e = e.memoizedState; e !== null;) {
            var t = e.queue;
            t !== null && (t.pending = null), e = e.next;
        }
        Or = !1;
    } ks = 0, Pe = Te = ce = null, hl = !1, mn = Dr = 0, xl = null; }
    function ht() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return Pe === null ? ce.memoizedState = Pe = e : Pe = Pe.next = e, Pe; }
    function Ye() { if (Te === null) {
        var e = ce.alternate;
        e = e !== null ? e.memoizedState : null;
    }
    else
        e = Te.next; var t = Pe === null ? ce.memoizedState : Pe.next; if (t !== null)
        Pe = t, Te = e;
    else {
        if (e === null)
            throw ce.alternate === null ? Error(c(467)) : Error(c(310));
        Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, Pe === null ? ce.memoizedState = Pe = e : Pe = Pe.next = e;
    } return Pe; }
    function zr() { return { lastEffect: null, events: null, stores: null, memoCache: null }; }
    function fn(e) { var t = mn; return mn += 1, xl === null && (xl = []), e = Lm(xl, e, t), t = ce, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, E.H = t === null || t.memoizedState === null ? _f : jo), e; }
    function Rr(e) { if (e !== null && typeof e == "object") {
        if (typeof e.then == "function")
            return fn(e);
        if (e.$$typeof === G)
            return ot(e);
    } throw Error(c(438, String(e))); }
    function oo(e) { var t = null, a = ce.updateQueue; if (a !== null && (t = a.memoCache), t == null) {
        var n = ce.alternate;
        n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = { data: n.data.map(function (o) { return o.slice(); }), index: 0 })));
    } if (t == null && (t = { data: [], index: 0 }), a === null && (a = zr(), ce.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
        for (a = t.data[t.index] = Array(e), n = 0; n < e; n++)
            a[n] = Le; return t.index++, a; }
    function Cs(e, t) { return typeof t == "function" ? t(e) : t; }
    function Br(e) { var t = Ye(); return uo(t, Te, e); }
    function uo(e, t, a) { var n = e.queue; if (n === null)
        throw Error(c(311)); n.lastRenderedReducer = a; var o = e.baseQueue, d = n.pending; if (d !== null) {
        if (o !== null) {
            var f = o.next;
            o.next = d.next, d.next = f;
        }
        t.baseQueue = o = d, n.pending = null;
    } if (d = e.baseState, o === null)
        e.memoizedState = d;
    else {
        t = o.next;
        var p = f = null, S = null, O = t, H = !1;
        do {
            var Q = O.lane & -536870913;
            if (Q !== O.lane ? (ge & Q) === Q : (ks & Q) === Q) {
                var z = O.revertLane;
                if (z === 0)
                    S !== null && (S = S.next = { lane: 0, revertLane: 0, gesture: null, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }), Q === ol && (H = !0);
                else if ((ks & z) === z) {
                    O = O.next, z === ol && (H = !0);
                    continue;
                }
                else
                    Q = { lane: 0, revertLane: O.revertLane, gesture: null, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }, S === null ? (p = S = Q, f = d) : S = S.next = Q, ce.lanes |= z, sa |= z;
                Q = O.action, Ra && a(d, Q), d = O.hasEagerState ? O.eagerState : a(d, Q);
            }
            else
                z = { lane: Q, revertLane: O.revertLane, gesture: O.gesture, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }, S === null ? (p = S = z, f = d) : S = S.next = z, ce.lanes |= Q, sa |= Q;
            O = O.next;
        } while (O !== null && O !== t);
        if (S === null ? f = d : S.next = p, !Tt(d, e.memoizedState) && (Ie = !0, H && (a = dl, a !== null)))
            throw a;
        e.memoizedState = d, e.baseState = f, e.baseQueue = S, n.lastRenderedState = d;
    } return o === null && (n.lanes = 0), [e.memoizedState, n.dispatch]; }
    function mo(e) { var t = Ye(), a = t.queue; if (a === null)
        throw Error(c(311)); a.lastRenderedReducer = e; var n = a.dispatch, o = a.pending, d = t.memoizedState; if (o !== null) {
        a.pending = null;
        var f = o = o.next;
        do
            d = e(d, f.action), f = f.next;
        while (f !== o);
        Tt(d, t.memoizedState) || (Ie = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), a.lastRenderedState = d;
    } return [d, n]; }
    function $m(e, t, a) { var n = ce, o = Ye(), d = ye; if (d) {
        if (a === void 0)
            throw Error(c(407));
        a = a();
    }
    else
        a = t(); var f = !Tt((Te || o).memoizedState, a); if (f && (o.memoizedState = a, Ie = !0), o = o.queue, xo(Wm.bind(null, n, o, e), [e]), o.getSnapshot !== t || f || Pe !== null && Pe.memoizedState.tag & 1) {
        if (n.flags |= 2048, pl(9, { destroy: void 0 }, Im.bind(null, n, o, a, t), null), Oe === null)
            throw Error(c(349));
        d || (ks & 127) !== 0 || Pm(n, t, a);
    } return a; }
    function Pm(e, t, a) { e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ce.updateQueue, t === null ? (t = zr(), ce.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e)); }
    function Im(e, t, a, n) { t.value = a, t.getSnapshot = n, ef(t) && tf(e); }
    function Wm(e, t, a) { return a(function () { ef(t) && tf(e); }); }
    function ef(e) { var t = e.getSnapshot; e = e.value; try {
        var a = t();
        return !Tt(e, a);
    }
    catch {
        return !0;
    } }
    function tf(e) { var t = Ca(e, 2); t !== null && Nt(t, e, 2); }
    function fo(e) { var t = ht(); if (typeof e == "function") {
        var a = e;
        if (e = a(), Ra) {
            Gs(!0);
            try {
                a();
            }
            finally {
                Gs(!1);
            }
        }
    } return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Cs, lastRenderedState: e }, t; }
    function sf(e, t, a, n) { return e.baseState = a, uo(e, Te, typeof n == "function" ? n : Cs); }
    function nb(e, t, a, n, o) { if (Lr(e))
        throw Error(c(485)); if (e = t.action, e !== null) {
        var d = { payload: o, action: e, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function (f) { d.listeners.push(f); } };
        E.T !== null ? a(!0) : d.isTransition = !1, n(d), a = t.pending, a === null ? (d.next = t.pending = d, af(t, d)) : (d.next = a.next, t.pending = a.next = d);
    } }
    function af(e, t) { var a = t.action, n = t.payload, o = e.state; if (t.isTransition) {
        var d = E.T, f = {};
        E.T = f;
        try {
            var p = a(o, n), S = E.S;
            S !== null && S(f, p), lf(e, t, p);
        }
        catch (O) {
            ho(e, t, O);
        }
        finally {
            d !== null && f.types !== null && (d.types = f.types), E.T = d;
        }
    }
    else
        try {
            d = a(o, n), lf(e, t, d);
        }
        catch (O) {
            ho(e, t, O);
        } }
    function lf(e, t, a) { a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function (n) { nf(e, t, n); }, function (n) { return ho(e, t, n); }) : nf(e, t, a); }
    function nf(e, t, a) { t.status = "fulfilled", t.value = a, rf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, af(e, a))); }
    function ho(e, t, a) { var n = e.pending; if (e.pending = null, n !== null) {
        n = n.next;
        do
            t.status = "rejected", t.reason = a, rf(t), t = t.next;
        while (t !== n);
    } e.action = null; }
    function rf(e) { e = e.listeners; for (var t = 0; t < e.length; t++)
        (0, e[t])(); }
    function cf(e, t) { return t; }
    function of(e, t) { if (ye) {
        var a = Oe.formState;
        if (a !== null) {
            e: {
                var n = ce;
                if (ye) {
                    if (De) {
                        t: {
                            for (var o = De, d = Xt; o.nodeType !== 8;) {
                                if (!d) {
                                    o = null;
                                    break t;
                                }
                                if (o = Jt(o.nextSibling), o === null) {
                                    o = null;
                                    break t;
                                }
                            }
                            d = o.data, o = d === "F!" || d === "F" ? o : null;
                        }
                        if (o) {
                            De = Jt(o.nextSibling), n = o.data === "F!";
                            break e;
                        }
                    }
                    Zs(n);
                }
                n = !1;
            }
            n && (t = a[0]);
        }
    } return a = ht(), a.memoizedState = a.baseState = t, n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: cf, lastRenderedState: t }, a.queue = n, a = Tf.bind(null, ce, n), n.dispatch = a, n = fo(!1), d = vo.bind(null, ce, !1, n.queue), n = ht(), o = { state: t, dispatch: null, action: e, pending: null }, n.queue = o, a = nb.bind(null, ce, o, d, a), o.dispatch = a, n.memoizedState = e, [t, a, !1]; }
    function df(e) { var t = Ye(); return uf(t, Te, e); }
    function uf(e, t, a) { if (t = uo(e, t, cf)[0], e = Br(Cs)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
            var n = fn(t);
        }
        catch (f) {
            throw f === ul ? Cr : f;
        }
    else
        n = t; t = Ye(); var o = t.queue, d = o.dispatch; return a !== t.memoizedState && (ce.flags |= 2048, pl(9, { destroy: void 0 }, rb.bind(null, o, a), null)), [n, d, e]; }
    function rb(e, t) { e.action = t; }
    function mf(e) { var t = Ye(), a = Te; if (a !== null)
        return uf(t, a, e); Ye(), t = t.memoizedState, a = Ye(); var n = a.queue.dispatch; return a.memoizedState = e, [t, n, !1]; }
    function pl(e, t, a, n) { return e = { tag: e, create: a, deps: n, inst: t, next: null }, t = ce.updateQueue, t === null && (t = zr(), ce.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (n = a.next, a.next = e, e.next = n, t.lastEffect = e), e; }
    function ff() { return Ye().memoizedState; }
    function qr(e, t, a, n) { var o = ht(); ce.flags |= e, o.memoizedState = pl(1 | t, { destroy: void 0 }, a, n === void 0 ? null : n); }
    function Ur(e, t, a, n) { var o = Ye(); n = n === void 0 ? null : n; var d = o.memoizedState.inst; Te !== null && n !== null && lo(n, Te.memoizedState.deps) ? o.memoizedState = pl(t, d, a, n) : (ce.flags |= e, o.memoizedState = pl(1 | t, d, a, n)); }
    function hf(e, t) { qr(8390656, 8, e, t); }
    function xo(e, t) { Ur(2048, 8, e, t); }
    function ib(e) { ce.flags |= 4; var t = ce.updateQueue; if (t === null)
        t = zr(), ce.updateQueue = t, t.events = [e];
    else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
    } }
    function xf(e) { var t = Ye().memoizedState; return ib({ ref: t, nextImpl: e }), function () { if ((Se & 2) !== 0)
        throw Error(c(440)); return t.impl.apply(void 0, arguments); }; }
    function pf(e, t) { return Ur(4, 2, e, t); }
    function gf(e, t) { return Ur(4, 4, e, t); }
    function bf(e, t) { if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function () { typeof a == "function" ? a() : t(null); };
    } if (t != null)
        return e = e(), t.current = e, function () { t.current = null; }; }
    function yf(e, t, a) { a = a != null ? a.concat([e]) : null, Ur(4, 4, bf.bind(null, t, e), a); }
    function po() { }
    function vf(e, t) { var a = Ye(); t = t === void 0 ? null : t; var n = a.memoizedState; return t !== null && lo(t, n[1]) ? n[0] : (a.memoizedState = [e, t], e); }
    function jf(e, t) { var a = Ye(); t = t === void 0 ? null : t; var n = a.memoizedState; if (t !== null && lo(t, n[1]))
        return n[0]; if (n = e(), Ra) {
        Gs(!0);
        try {
            e();
        }
        finally {
            Gs(!1);
        }
    } return a.memoizedState = [n, t], n; }
    function go(e, t, a) { return a === void 0 || (ks & 1073741824) !== 0 && (ge & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Nh(), ce.lanes |= e, sa |= e, a); }
    function Nf(e, t, a, n) { return Tt(a, t) ? a : fl.current !== null ? (e = go(e, a, n), Tt(e, t) || (Ie = !0), e) : (ks & 42) === 0 || (ks & 1073741824) !== 0 && (ge & 261930) === 0 ? (Ie = !0, e.memoizedState = a) : (e = Nh(), ce.lanes |= e, sa |= e, t); }
    function wf(e, t, a, n, o) { var d = $.p; $.p = d !== 0 && 8 > d ? d : 8; var f = E.T, p = {}; E.T = p, vo(e, !1, t, a); try {
        var S = o(), O = E.S;
        if (O !== null && O(p, S), S !== null && typeof S == "object" && typeof S.then == "function") {
            var H = sb(S, n);
            hn(e, t, H, zt(e));
        }
        else
            hn(e, t, n, zt(e));
    }
    catch (Q) {
        hn(e, t, { then: function () { }, status: "rejected", reason: Q }, zt());
    }
    finally {
        $.p = d, f !== null && p.types !== null && (f.types = p.types), E.T = f;
    } }
    function cb() { }
    function bo(e, t, a, n) { if (e.tag !== 5)
        throw Error(c(476)); var o = Sf(e).queue; wf(e, o, t, K, a === null ? cb : function () { return kf(e), a(n); }); }
    function Sf(e) { var t = e.memoizedState; if (t !== null)
        return t; t = { memoizedState: K, baseState: K, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Cs, lastRenderedState: K }, next: null }; var a = {}; return t.next = { memoizedState: a, baseState: a, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Cs, lastRenderedState: a }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t; }
    function kf(e) { var t = Sf(e); t.next === null && (t = e.alternate.memoizedState), hn(e, t.next.queue, {}, zt()); }
    function yo() { return ot(_n); }
    function Cf() { return Ye().memoizedState; }
    function Af() { return Ye().memoizedState; }
    function ob(e) { for (var t = e.return; t !== null;) {
        switch (t.tag) {
            case 24:
            case 3:
                var a = zt();
                e = $s(a);
                var n = Ps(t, e, a);
                n !== null && (Nt(n, t, a), on(n, t, a)), t = { cache: Zc() }, e.payload = t;
                return;
        }
        t = t.return;
    } }
    function db(e, t, a) { var n = zt(); a = { lane: n, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }, Lr(e) ? Ef(t, a) : (a = Bc(e, t, a, n), a !== null && (Nt(a, e, n), Mf(a, t, n))); }
    function Tf(e, t, a) { var n = zt(); hn(e, t, a, n); }
    function hn(e, t, a, n) { var o = { lane: n, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }; if (Lr(e))
        Ef(t, o);
    else {
        var d = e.alternate;
        if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null))
            try {
                var f = t.lastRenderedState, p = d(f, a);
                if (o.hasEagerState = !0, o.eagerState = p, Tt(p, f))
                    return yr(e, t, o, 0), Oe === null && br(), !1;
            }
            catch { }
            finally { }
        if (a = Bc(e, t, o, n), a !== null)
            return Nt(a, e, n), Mf(a, t, n), !0;
    } return !1; }
    function vo(e, t, a, n) { if (n = { lane: 2, revertLane: Io(), gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }, Lr(e)) {
        if (t)
            throw Error(c(479));
    }
    else
        t = Bc(e, a, n, 2), t !== null && Nt(t, e, 2); }
    function Lr(e) { var t = e.alternate; return e === ce || t !== null && t === ce; }
    function Ef(e, t) { hl = Or = !0; var a = e.pending; a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t; }
    function Mf(e, t, a) { if ((a & 4194048) !== 0) {
        var n = t.lanes;
        n &= e.pendingLanes, a |= n, t.lanes = a, zu(e, a);
    } }
    var xn = { readContext: ot, use: Rr, useCallback: Ve, useContext: Ve, useEffect: Ve, useImperativeHandle: Ve, useLayoutEffect: Ve, useInsertionEffect: Ve, useMemo: Ve, useReducer: Ve, useRef: Ve, useState: Ve, useDebugValue: Ve, useDeferredValue: Ve, useTransition: Ve, useSyncExternalStore: Ve, useId: Ve, useHostTransitionStatus: Ve, useFormState: Ve, useActionState: Ve, useOptimistic: Ve, useMemoCache: Ve, useCacheRefresh: Ve };
    xn.useEffectEvent = Ve;
    var _f = { readContext: ot, use: Rr, useCallback: function (e, t) { return ht().memoizedState = [e, t === void 0 ? null : t], e; }, useContext: ot, useEffect: hf, useImperativeHandle: function (e, t, a) { a = a != null ? a.concat([e]) : null, qr(4194308, 4, bf.bind(null, t, e), a); }, useLayoutEffect: function (e, t) { return qr(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { qr(4, 2, e, t); }, useMemo: function (e, t) { var a = ht(); t = t === void 0 ? null : t; var n = e(); if (Ra) {
            Gs(!0);
            try {
                e();
            }
            finally {
                Gs(!1);
            }
        } return a.memoizedState = [n, t], n; }, useReducer: function (e, t, a) { var n = ht(); if (a !== void 0) {
            var o = a(t);
            if (Ra) {
                Gs(!0);
                try {
                    a(t);
                }
                finally {
                    Gs(!1);
                }
            }
        }
        else
            o = t; return n.memoizedState = n.baseState = o, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: o }, n.queue = e, e = e.dispatch = db.bind(null, ce, e), [n.memoizedState, e]; }, useRef: function (e) { var t = ht(); return e = { current: e }, t.memoizedState = e; }, useState: function (e) { e = fo(e); var t = e.queue, a = Tf.bind(null, ce, t); return t.dispatch = a, [e.memoizedState, a]; }, useDebugValue: po, useDeferredValue: function (e, t) { var a = ht(); return go(a, e, t); }, useTransition: function () { var e = fo(!1); return e = wf.bind(null, ce, e.queue, !0, !1), ht().memoizedState = e, [!1, e]; }, useSyncExternalStore: function (e, t, a) { var n = ce, o = ht(); if (ye) {
            if (a === void 0)
                throw Error(c(407));
            a = a();
        }
        else {
            if (a = t(), Oe === null)
                throw Error(c(349));
            (ge & 127) !== 0 || Pm(n, t, a);
        } o.memoizedState = a; var d = { value: a, getSnapshot: t }; return o.queue = d, hf(Wm.bind(null, n, d, e), [e]), n.flags |= 2048, pl(9, { destroy: void 0 }, Im.bind(null, n, d, a, t), null), a; }, useId: function () { var e = ht(), t = Oe.identifierPrefix; if (ye) {
            var a = ds, n = os;
            a = (n & ~(1 << 32 - At(n) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Dr++, 0 < a && (t += "H" + a.toString(32)), t += "_";
        }
        else
            a = ab++, t = "_" + t + "r_" + a.toString(32) + "_"; return e.memoizedState = t; }, useHostTransitionStatus: yo, useFormState: of, useActionState: of, useOptimistic: function (e) { var t = ht(); t.memoizedState = t.baseState = e; var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return t.queue = a, t = vo.bind(null, ce, !0, a), a.dispatch = t, [e, t]; }, useMemoCache: oo, useCacheRefresh: function () { return ht().memoizedState = ob.bind(null, ce); }, useEffectEvent: function (e) { var t = ht(), a = { impl: e }; return t.memoizedState = a, function () { if ((Se & 2) !== 0)
            throw Error(c(440)); return a.impl.apply(void 0, arguments); }; } }, jo = { readContext: ot, use: Rr, useCallback: vf, useContext: ot, useEffect: xo, useImperativeHandle: yf, useInsertionEffect: pf, useLayoutEffect: gf, useMemo: jf, useReducer: Br, useRef: ff, useState: function () { return Br(Cs); }, useDebugValue: po, useDeferredValue: function (e, t) { var a = Ye(); return Nf(a, Te.memoizedState, e, t); }, useTransition: function () { var e = Br(Cs)[0], t = Ye().memoizedState; return [typeof e == "boolean" ? e : fn(e), t]; }, useSyncExternalStore: $m, useId: Cf, useHostTransitionStatus: yo, useFormState: df, useActionState: df, useOptimistic: function (e, t) { var a = Ye(); return sf(a, Te, e, t); }, useMemoCache: oo, useCacheRefresh: Af };
    jo.useEffectEvent = xf;
    var Of = { readContext: ot, use: Rr, useCallback: vf, useContext: ot, useEffect: xo, useImperativeHandle: yf, useInsertionEffect: pf, useLayoutEffect: gf, useMemo: jf, useReducer: mo, useRef: ff, useState: function () { return mo(Cs); }, useDebugValue: po, useDeferredValue: function (e, t) { var a = Ye(); return Te === null ? go(a, e, t) : Nf(a, Te.memoizedState, e, t); }, useTransition: function () { var e = mo(Cs)[0], t = Ye().memoizedState; return [typeof e == "boolean" ? e : fn(e), t]; }, useSyncExternalStore: $m, useId: Cf, useHostTransitionStatus: yo, useFormState: mf, useActionState: mf, useOptimistic: function (e, t) { var a = Ye(); return Te !== null ? sf(a, Te, e, t) : (a.baseState = e, [e, a.queue.dispatch]); }, useMemoCache: oo, useCacheRefresh: Af };
    Of.useEffectEvent = xf;
    function No(e, t, a, n) { t = e.memoizedState, a = a(n, t), a = a == null ? t : x({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a); }
    var wo = { enqueueSetState: function (e, t, a) { e = e._reactInternals; var n = zt(), o = $s(n); o.payload = t, a != null && (o.callback = a), t = Ps(e, o, n), t !== null && (Nt(t, e, n), on(t, e, n)); }, enqueueReplaceState: function (e, t, a) { e = e._reactInternals; var n = zt(), o = $s(n); o.tag = 1, o.payload = t, a != null && (o.callback = a), t = Ps(e, o, n), t !== null && (Nt(t, e, n), on(t, e, n)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var a = zt(), n = $s(a); n.tag = 2, t != null && (n.callback = t), t = Ps(e, n, a), t !== null && (Nt(t, e, a), on(t, e, a)); } };
    function Df(e, t, a, n, o, d, f) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, d, f) : t.prototype && t.prototype.isPureReactComponent ? !en(a, n) || !en(o, d) : !0; }
    function zf(e, t, a, n) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, n), t.state !== e && wo.enqueueReplaceState(t, t.state, null); }
    function Ba(e, t) { var a = t; if ("ref" in t) {
        a = {};
        for (var n in t)
            n !== "ref" && (a[n] = t[n]);
    } if (e = e.defaultProps) {
        a === t && (a = x({}, a));
        for (var o in e)
            a[o] === void 0 && (a[o] = e[o]);
    } return a; }
    function Rf(e) { gr(e); }
    function Bf(e) { console.error(e); }
    function qf(e) { gr(e); }
    function Hr(e, t) { try {
        var a = e.onUncaughtError;
        a(t.value, { componentStack: t.stack });
    }
    catch (n) {
        setTimeout(function () { throw n; });
    } }
    function Uf(e, t, a) { try {
        var n = e.onCaughtError;
        n(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    }
    catch (o) {
        setTimeout(function () { throw o; });
    } }
    function So(e, t, a) { return a = $s(a), a.tag = 3, a.payload = { element: null }, a.callback = function () { Hr(e, t); }, a; }
    function Lf(e) { return e = $s(e), e.tag = 3, e; }
    function Hf(e, t, a, n) { var o = a.type.getDerivedStateFromError; if (typeof o == "function") {
        var d = n.value;
        e.payload = function () { return o(d); }, e.callback = function () { Uf(t, a, n); };
    } var f = a.stateNode; f !== null && typeof f.componentDidCatch == "function" && (e.callback = function () { Uf(t, a, n), typeof o != "function" && (aa === null ? aa = new Set([this]) : aa.add(this)); var p = n.stack; this.componentDidCatch(n.value, { componentStack: p !== null ? p : "" }); }); }
    function ub(e, t, a, n, o) { if (a.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
        if (t = a.alternate, t !== null && cl(t, a, o, !0), a = Mt.current, a !== null) {
            switch (a.tag) {
                case 31:
                case 13: return Zt === null ? Ir() : a.alternate === null && Ge === 0 && (Ge = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, n === Ar ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([n]) : t.add(n), Fo(e, n, o)), !1;
                case 22: return a.flags |= 65536, n === Ar ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: new Set([n]) }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([n]) : a.add(n)), Fo(e, n, o)), !1;
            }
            throw Error(c(435, a.tag));
        }
        return Fo(e, n, o), Ir(), !1;
    } if (ye)
        return t = Mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, n !== Gc && (e = Error(c(422), { cause: n }), an(Qt(e, a)))) : (n !== Gc && (t = Error(c(423), { cause: n }), an(Qt(t, a))), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, n = Qt(n, a), o = So(e.stateNode, n, o), Wc(e, o), Ge !== 4 && (Ge = 2)), !1; var d = Error(c(520), { cause: n }); if (d = Qt(d, a), wn === null ? wn = [d] : wn.push(d), Ge !== 4 && (Ge = 2), t === null)
        return !0; n = Qt(n, a), a = t; do {
        switch (a.tag) {
            case 3: return a.flags |= 65536, e = o & -o, a.lanes |= e, e = So(a.stateNode, n, e), Wc(a, e), !1;
            case 1: if (t = a.type, d = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (aa === null || !aa.has(d))))
                return a.flags |= 65536, o &= -o, a.lanes |= o, o = Lf(o), Hf(o, e, a, n), Wc(a, o), !1;
        }
        a = a.return;
    } while (a !== null); return !1; }
    var ko = Error(c(461)), Ie = !1;
    function dt(e, t, a, n) { t.child = e === null ? Qm(t, null, a, n) : za(t, e.child, a, n); }
    function Vf(e, t, a, n, o) { a = a.render; var d = t.ref; if ("ref" in n) {
        var f = {};
        for (var p in n)
            p !== "ref" && (f[p] = n[p]);
    }
    else
        f = n; return Ma(t), n = no(e, t, a, f, d, o), p = ro(), e !== null && !Ie ? (io(e, t, o), As(e, t, o)) : (ye && p && Hc(t), t.flags |= 1, dt(e, t, n, o), t.child); }
    function Gf(e, t, a, n, o) { if (e === null) {
        var d = a.type;
        return typeof d == "function" && !qc(d) && d.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = d, Qf(e, t, d, n, o)) : (e = jr(a.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    } if (d = e.child, !Do(e, o)) {
        var f = d.memoizedProps;
        if (a = a.compare, a = a !== null ? a : en, a(f, n) && e.ref === t.ref)
            return As(e, t, o);
    } return t.flags |= 1, e = js(d, n), e.ref = t.ref, e.return = t, t.child = e; }
    function Qf(e, t, a, n, o) { if (e !== null) {
        var d = e.memoizedProps;
        if (en(d, n) && e.ref === t.ref)
            if (Ie = !1, t.pendingProps = n = d, Do(e, o))
                (e.flags & 131072) !== 0 && (Ie = !0);
            else
                return t.lanes = e.lanes, As(e, t, o);
    } return Co(e, t, a, n, o); }
    function Kf(e, t, a, n) { var o = n.children, d = e !== null ? e.memoizedState : null; if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), n.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
            if (d = d !== null ? d.baseLanes | a : a, e !== null) {
                for (n = t.child = e.child, o = 0; n !== null;)
                    o = o | n.lanes | n.childLanes, n = n.sibling;
                n = o & ~d;
            }
            else
                n = 0, t.child = null;
            return Yf(e, t, d, a, n);
        }
        if ((a & 536870912) !== 0)
            t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && kr(t, d !== null ? d.cachePool : null), d !== null ? Xm(t, d) : to(), Zm(t);
        else
            return n = t.lanes = 536870912, Yf(e, t, d !== null ? d.baseLanes | a : a, a, n);
    }
    else
        d !== null ? (kr(t, d.cachePool), Xm(t, d), Ws(), t.memoizedState = null) : (e !== null && kr(t, null), to(), Ws()); return dt(e, t, o, a), t.child; }
    function pn(e, t) { return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling; }
    function Yf(e, t, a, n, o) { var d = Fc(); return d = d === null ? null : { parent: $e._currentValue, pool: d }, t.memoizedState = { baseLanes: a, cachePool: d }, e !== null && kr(t, null), to(), Zm(t), e !== null && cl(e, t, n, !0), t.childLanes = o, null; }
    function Vr(e, t) { return t = Qr({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t; }
    function Xf(e, t, a) { return za(t, e.child, null, a), e = Vr(t, t.pendingProps), e.flags |= 2, _t(t), t.memoizedState = null, e; }
    function mb(e, t, a) { var n = t.pendingProps, o = (t.flags & 128) !== 0; if (t.flags &= -129, e === null) {
        if (ye) {
            if (n.mode === "hidden")
                return e = Vr(t, n), t.lanes = 536870912, pn(null, e);
            if (ao(t), (e = De) ? (e = lx(e, Xt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Ys !== null ? { id: os, overflow: ds } : null, retryLane: 536870912, hydrationErrors: null }, a = Tm(e), a.return = t, t.child = a, ct = t, De = null)) : e = null, e === null)
                throw Zs(t);
            return t.lanes = 536870912, null;
        }
        return Vr(t, n);
    } var d = e.memoizedState; if (d !== null) {
        var f = d.dehydrated;
        if (ao(t), o)
            if (t.flags & 256)
                t.flags &= -257, t = Xf(e, t, a);
            else if (t.memoizedState !== null)
                t.child = e.child, t.flags |= 128, t = null;
            else
                throw Error(c(558));
        else if (Ie || cl(e, t, a, !1), o = (a & e.childLanes) !== 0, Ie || o) {
            if (n = Oe, n !== null && (f = Ru(n, a), f !== 0 && f !== d.retryLane))
                throw d.retryLane = f, Ca(e, f), Nt(n, e, f), ko;
            Ir(), t = Xf(e, t, a);
        }
        else
            e = d.treeContext, De = Jt(f.nextSibling), ct = t, ye = !0, Xs = null, Xt = !1, e !== null && _m(t, e), t = Vr(t, n), t.flags |= 4096;
        return t;
    } return e = js(e.child, { mode: n.mode, children: n.children }), e.ref = t.ref, t.child = e, e.return = t, e; }
    function Gr(e, t) { var a = t.ref; if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
        if (typeof a != "function" && typeof a != "object")
            throw Error(c(284));
        (e === null || e.ref !== a) && (t.flags |= 4194816);
    } }
    function Co(e, t, a, n, o) { return Ma(t), a = no(e, t, a, n, void 0, o), n = ro(), e !== null && !Ie ? (io(e, t, o), As(e, t, o)) : (ye && n && Hc(t), t.flags |= 1, dt(e, t, a, o), t.child); }
    function Zf(e, t, a, n, o, d) { return Ma(t), t.updateQueue = null, a = Fm(t, n, a, o), Jm(e), n = ro(), e !== null && !Ie ? (io(e, t, d), As(e, t, d)) : (ye && n && Hc(t), t.flags |= 1, dt(e, t, a, d), t.child); }
    function Jf(e, t, a, n, o) { if (Ma(t), t.stateNode === null) {
        var d = ll, f = a.contextType;
        typeof f == "object" && f !== null && (d = ot(f)), d = new a(n, d), t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = wo, t.stateNode = d, d._reactInternals = t, d = t.stateNode, d.props = n, d.state = t.memoizedState, d.refs = {}, Pc(t), f = a.contextType, d.context = typeof f == "object" && f !== null ? ot(f) : ll, d.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (No(t, a, f, n), d.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (f = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), f !== d.state && wo.enqueueReplaceState(d, d.state, null), un(t, n, d, o), dn(), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    }
    else if (e === null) {
        d = t.stateNode;
        var p = t.memoizedProps, S = Ba(a, p);
        d.props = S;
        var O = d.context, H = a.contextType;
        f = ll, typeof H == "object" && H !== null && (f = ot(H));
        var Q = a.getDerivedStateFromProps;
        H = typeof Q == "function" || typeof d.getSnapshotBeforeUpdate == "function", p = t.pendingProps !== p, H || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (p || O !== f) && zf(t, d, n, f), Fs = !1;
        var z = t.memoizedState;
        d.state = z, un(t, n, d, o), dn(), O = t.memoizedState, p || z !== O || Fs ? (typeof Q == "function" && (No(t, a, Q, n), O = t.memoizedState), (S = Fs || Df(t, a, S, n, z, O, f)) ? (H || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = O), d.props = n, d.state = O, d.context = f, n = S) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    }
    else {
        d = t.stateNode, Ic(e, t), f = t.memoizedProps, H = Ba(a, f), d.props = H, Q = t.pendingProps, z = d.context, O = a.contextType, S = ll, typeof O == "object" && O !== null && (S = ot(O)), p = a.getDerivedStateFromProps, (O = typeof p == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (f !== Q || z !== S) && zf(t, d, n, S), Fs = !1, z = t.memoizedState, d.state = z, un(t, n, d, o), dn();
        var U = t.memoizedState;
        f !== Q || z !== U || Fs || e !== null && e.dependencies !== null && wr(e.dependencies) ? (typeof p == "function" && (No(t, a, p, n), U = t.memoizedState), (H = Fs || Df(t, a, H, n, z, U, S) || e !== null && e.dependencies !== null && wr(e.dependencies)) ? (O || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(n, U, S), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(n, U, S)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = U), d.props = n, d.state = U, d.context = S, n = H) : (typeof d.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), n = !1);
    } return d = n, Gr(e, t), n = (t.flags & 128) !== 0, d || n ? (d = t.stateNode, a = n && typeof a.getDerivedStateFromError != "function" ? null : d.render(), t.flags |= 1, e !== null && n ? (t.child = za(t, e.child, null, o), t.child = za(t, null, a, o)) : dt(e, t, a, o), t.memoizedState = d.state, e = t.child) : e = As(e, t, o), e; }
    function Ff(e, t, a, n) { return Ta(), t.flags |= 256, dt(e, t, a, n), t.child; }
    var Ao = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function To(e) { return { baseLanes: e, cachePool: qm() }; }
    function Eo(e, t, a) { return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Dt), e; }
    function $f(e, t, a) { var n = t.pendingProps, o = !1, d = (t.flags & 128) !== 0, f; if ((f = d) || (f = e !== null && e.memoizedState === null ? !1 : (Ke.current & 2) !== 0), f && (o = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ye) {
            if (o ? Is(t) : Ws(), (e = De) ? (e = lx(e, Xt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Ys !== null ? { id: os, overflow: ds } : null, retryLane: 536870912, hydrationErrors: null }, a = Tm(e), a.return = t, t.child = a, ct = t, De = null)) : e = null, e === null)
                throw Zs(t);
            return ud(e) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var p = n.children;
        return n = n.fallback, o ? (Ws(), o = t.mode, p = Qr({ mode: "hidden", children: p }, o), n = Aa(n, o, a, null), p.return = t, n.return = t, p.sibling = n, t.child = p, n = t.child, n.memoizedState = To(a), n.childLanes = Eo(e, f, a), t.memoizedState = Ao, pn(null, n)) : (Is(t), Mo(t, p));
    } var S = e.memoizedState; if (S !== null && (p = S.dehydrated, p !== null)) {
        if (d)
            t.flags & 256 ? (Is(t), t.flags &= -257, t = _o(e, t, a)) : t.memoizedState !== null ? (Ws(), t.child = e.child, t.flags |= 128, t = null) : (Ws(), p = n.fallback, o = t.mode, n = Qr({ mode: "visible", children: n.children }, o), p = Aa(p, o, a, null), p.flags |= 2, n.return = t, p.return = t, n.sibling = p, t.child = n, za(t, e.child, null, a), n = t.child, n.memoizedState = To(a), n.childLanes = Eo(e, f, a), t.memoizedState = Ao, t = pn(null, n));
        else if (Is(t), ud(p)) {
            if (f = p.nextSibling && p.nextSibling.dataset, f)
                var O = f.dgst;
            f = O, n = Error(c(419)), n.stack = "", n.digest = f, an({ value: n, source: null, stack: null }), t = _o(e, t, a);
        }
        else if (Ie || cl(e, t, a, !1), f = (a & e.childLanes) !== 0, Ie || f) {
            if (f = Oe, f !== null && (n = Ru(f, a), n !== 0 && n !== S.retryLane))
                throw S.retryLane = n, Ca(e, n), Nt(f, e, n), ko;
            dd(p) || Ir(), t = _o(e, t, a);
        }
        else
            dd(p) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, De = Jt(p.nextSibling), ct = t, ye = !0, Xs = null, Xt = !1, e !== null && _m(t, e), t = Mo(t, n.children), t.flags |= 4096);
        return t;
    } return o ? (Ws(), p = n.fallback, o = t.mode, S = e.child, O = S.sibling, n = js(S, { mode: "hidden", children: n.children }), n.subtreeFlags = S.subtreeFlags & 65011712, O !== null ? p = js(O, p) : (p = Aa(p, o, a, null), p.flags |= 2), p.return = t, n.return = t, n.sibling = p, t.child = n, pn(null, n), n = t.child, p = e.child.memoizedState, p === null ? p = To(a) : (o = p.cachePool, o !== null ? (S = $e._currentValue, o = o.parent !== S ? { parent: S, pool: S } : o) : o = qm(), p = { baseLanes: p.baseLanes | a, cachePool: o }), n.memoizedState = p, n.childLanes = Eo(e, f, a), t.memoizedState = Ao, pn(e.child, n)) : (Is(t), a = e.child, e = a.sibling, a = js(a, { mode: "visible", children: n.children }), a.return = t, a.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = a, t.memoizedState = null, a); }
    function Mo(e, t) { return t = Qr({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t; }
    function Qr(e, t) { return e = Et(22, e, null, t), e.lanes = 0, e; }
    function _o(e, t, a) { return za(t, e.child, null, a), e = Mo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e; }
    function Pf(e, t, a) { e.lanes |= t; var n = e.alternate; n !== null && (n.lanes |= t), Yc(e.return, t, a); }
    function Oo(e, t, a, n, o, d) { var f = e.memoizedState; f === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: a, tailMode: o, treeForkCount: d } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = n, f.tail = a, f.tailMode = o, f.treeForkCount = d); }
    function If(e, t, a) { var n = t.pendingProps, o = n.revealOrder, d = n.tail; n = n.children; var f = Ke.current, p = (f & 2) !== 0; if (p ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, ae(Ke, f), dt(e, t, n, a), n = ye ? sn : 0, !p && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && Pf(e, a, t);
            else if (e.tag === 19)
                Pf(e, a, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        } switch (o) {
        case "forwards":
            for (a = t.child, o = null; a !== null;)
                e = a.alternate, e !== null && _r(e) === null && (o = a), a = a.sibling;
            a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Oo(t, !1, o, a, d, n);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (a = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && _r(e) === null) {
                    t.child = o;
                    break;
                }
                e = o.sibling, o.sibling = a, a = o, o = e;
            }
            Oo(t, !0, a, null, d, n);
            break;
        case "together":
            Oo(t, !1, null, null, void 0, n);
            break;
        default: t.memoizedState = null;
    } return t.child; }
    function As(e, t, a) { if (e !== null && (t.dependencies = e.dependencies), sa |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
            if (cl(e, t, a, !1), (a & t.childLanes) === 0)
                return null;
        }
        else
            return null; if (e !== null && t.child !== e.child)
        throw Error(c(153)); if (t.child !== null) {
        for (e = t.child, a = js(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null;)
            e = e.sibling, a = a.sibling = js(e, e.pendingProps), a.return = t;
        a.sibling = null;
    } return t.child; }
    function Do(e, t) { return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && wr(e))); }
    function fb(e, t, a) { switch (t.tag) {
        case 3:
            ya(t, t.stateNode.containerInfo), Js(t, $e, e.memoizedState.cache), Ta();
            break;
        case 27:
        case 5:
            Ls(t);
            break;
        case 4:
            ya(t, t.stateNode.containerInfo);
            break;
        case 10:
            Js(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128, ao(t), null;
            break;
        case 13:
            var n = t.memoizedState;
            if (n !== null)
                return n.dehydrated !== null ? (Is(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? $f(e, t, a) : (Is(t), e = As(e, t, a), e !== null ? e.sibling : null);
            Is(t);
            break;
        case 19:
            var o = (e.flags & 128) !== 0;
            if (n = (a & t.childLanes) !== 0, n || (cl(e, t, a, !1), n = (a & t.childLanes) !== 0), o) {
                if (n)
                    return If(e, t, a);
                t.flags |= 128;
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ae(Ke, Ke.current), n)
                break;
            return null;
        case 22: return t.lanes = 0, Kf(e, t, a, t.pendingProps);
        case 24: Js(t, $e, e.memoizedState.cache);
    } return As(e, t, a); }
    function Wf(e, t, a) { if (e !== null)
        if (e.memoizedProps !== t.pendingProps)
            Ie = !0;
        else {
            if (!Do(e, a) && (t.flags & 128) === 0)
                return Ie = !1, fb(e, t, a);
            Ie = (e.flags & 131072) !== 0;
        }
    else
        Ie = !1, ye && (t.flags & 1048576) !== 0 && Mm(t, sn, t.index); switch (t.lanes = 0, t.tag) {
        case 16:
            e: {
                var n = t.pendingProps;
                if (e = Oa(t.elementType), t.type = e, typeof e == "function")
                    qc(e) ? (n = Ba(e, n), t.tag = 1, t = Jf(null, t, e, n, a)) : (t.tag = 0, t = Co(null, t, e, n, a));
                else {
                    if (e != null) {
                        var o = e.$$typeof;
                        if (o === X) {
                            t.tag = 11, t = Vf(null, t, e, n, a);
                            break e;
                        }
                        else if (o === L) {
                            t.tag = 14, t = Gf(null, t, e, n, a);
                            break e;
                        }
                    }
                    throw t = qe(e) || e, Error(c(306, t, ""));
                }
            }
            return t;
        case 0: return Co(e, t, t.type, t.pendingProps, a);
        case 1: return n = t.type, o = Ba(n, t.pendingProps), Jf(e, t, n, o, a);
        case 3:
            e: {
                if (ya(t, t.stateNode.containerInfo), e === null)
                    throw Error(c(387));
                n = t.pendingProps;
                var d = t.memoizedState;
                o = d.element, Ic(e, t), un(t, n, null, a);
                var f = t.memoizedState;
                if (n = f.cache, Js(t, $e, n), n !== d.cache && Xc(t, [$e], a, !0), dn(), n = f.element, d.isDehydrated)
                    if (d = { element: n, isDehydrated: !1, cache: f.cache }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
                        t = Ff(e, t, n, a);
                        break e;
                    }
                    else if (n !== o) {
                        o = Qt(Error(c(424)), t), an(o), t = Ff(e, t, n, a);
                        break e;
                    }
                    else {
                        switch (e = t.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                        }
                        for (De = Jt(e.firstChild), ct = t, ye = !0, Xs = null, Xt = !0, a = Qm(t, null, n, a), t.child = a; a;)
                            a.flags = a.flags & -3 | 4096, a = a.sibling;
                    }
                else {
                    if (Ta(), n === o) {
                        t = As(e, t, a);
                        break e;
                    }
                    dt(e, t, n, a);
                }
                t = t.child;
            }
            return t;
        case 26: return Gr(e, t), e === null ? (a = dx(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : ye || (a = t.type, e = t.pendingProps, n = ni(Wt.current).createElement(a), n[it] = t, n[pt] = e, ut(n, a, e), nt(n), t.stateNode = n) : t.memoizedState = dx(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27: return Ls(t), e === null && ye && (n = t.stateNode = ix(t.type, t.pendingProps, Wt.current), ct = t, Xt = !0, o = De, ia(t.type) ? (md = o, De = Jt(n.firstChild)) : De = o), dt(e, t, t.pendingProps.children, a), Gr(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5: return e === null && ye && ((o = n = De) && (n = Qb(n, t.type, t.pendingProps, Xt), n !== null ? (t.stateNode = n, ct = t, De = Jt(n.firstChild), Xt = !1, o = !0) : o = !1), o || Zs(t)), Ls(t), o = t.type, d = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = d.children, id(o, d) ? n = null : f !== null && id(o, f) && (t.flags |= 32), t.memoizedState !== null && (o = no(e, t, lb, null, null, a), _n._currentValue = o), Gr(e, t), dt(e, t, n, a), t.child;
        case 6: return e === null && ye && ((e = a = De) && (a = Kb(a, t.pendingProps, Xt), a !== null ? (t.stateNode = a, ct = t, De = null, e = !0) : e = !1), e || Zs(t)), null;
        case 13: return $f(e, t, a);
        case 4: return ya(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = za(t, null, n, a) : dt(e, t, n, a), t.child;
        case 11: return Vf(e, t, t.type, t.pendingProps, a);
        case 7: return dt(e, t, t.pendingProps, a), t.child;
        case 8: return dt(e, t, t.pendingProps.children, a), t.child;
        case 12: return dt(e, t, t.pendingProps.children, a), t.child;
        case 10: return n = t.pendingProps, Js(t, t.type, n.value), dt(e, t, n.children, a), t.child;
        case 9: return o = t.type._context, n = t.pendingProps.children, Ma(t), o = ot(o), n = n(o), t.flags |= 1, dt(e, t, n, a), t.child;
        case 14: return Gf(e, t, t.type, t.pendingProps, a);
        case 15: return Qf(e, t, t.type, t.pendingProps, a);
        case 19: return If(e, t, a);
        case 31: return mb(e, t, a);
        case 22: return Kf(e, t, a, t.pendingProps);
        case 24: return Ma(t), n = ot($e), e === null ? (o = Fc(), o === null && (o = Oe, d = Zc(), o.pooledCache = d, d.refCount++, d !== null && (o.pooledCacheLanes |= a), o = d), t.memoizedState = { parent: n, cache: o }, Pc(t), Js(t, $e, o)) : ((e.lanes & a) !== 0 && (Ic(e, t), un(t, null, null, a), dn()), o = e.memoizedState, d = t.memoizedState, o.parent !== n ? (o = { parent: n, cache: n }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Js(t, $e, n)) : (n = d.cache, Js(t, $e, n), n !== o.cache && Xc(t, [$e], a, !0))), dt(e, t, t.pendingProps.children, a), t.child;
        case 29: throw t.pendingProps;
    } throw Error(c(156, t.tag)); }
    function Ts(e) { e.flags |= 4; }
    function zo(e, t, a, n, o) { if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
            if (e.stateNode.complete)
                e.flags |= 8192;
            else if (Ch())
                e.flags |= 8192;
            else
                throw Da = Ar, $c;
    }
    else
        e.flags &= -16777217; }
    function eh(e, t) { if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
        e.flags &= -16777217;
    else if (e.flags |= 16777216, !xx(t))
        if (Ch())
            e.flags |= 8192;
        else
            throw Da = Ar, $c; }
    function Kr(e, t) { t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ou() : 536870912, e.lanes |= t, vl |= t); }
    function gn(e, t) { if (!ye)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var a = null; t !== null;)
                    t.alternate !== null && (a = t), t = t.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = e.tail;
                for (var n = null; a !== null;)
                    a.alternate !== null && (n = a), a = a.sibling;
                n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
        } }
    function ze(e) { var t = e.alternate !== null && e.alternate.child === e.child, a = 0, n = 0; if (t)
        for (var o = e.child; o !== null;)
            a |= o.lanes | o.childLanes, n |= o.subtreeFlags & 65011712, n |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;)
            a |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling; return e.subtreeFlags |= n, e.childLanes = a, t; }
    function hb(e, t, a) { var n = t.pendingProps; switch (Vc(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14: return ze(t), null;
        case 1: return ze(t), null;
        case 3: return a = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Ss($e), es(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (il(t) ? Ts(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Qc())), ze(t), null;
        case 26:
            var o = t.type, d = t.memoizedState;
            return e === null ? (Ts(t), d !== null ? (ze(t), eh(t, d)) : (ze(t), zo(t, o, null, n, a))) : d ? d !== e.memoizedState ? (Ts(t), ze(t), eh(t, d)) : (ze(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && Ts(t), ze(t), zo(t, o, e, n, a)), null;
        case 27:
            if (Hs(t), a = Wt.current, o = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== n && Ts(t);
            else {
                if (!n) {
                    if (t.stateNode === null)
                        throw Error(c(166));
                    return ze(t), null;
                }
                e = fe.current, il(t) ? Om(t) : (e = ix(o, n, a), t.stateNode = e, Ts(t));
            }
            return ze(t), null;
        case 5:
            if (Hs(t), o = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== n && Ts(t);
            else {
                if (!n) {
                    if (t.stateNode === null)
                        throw Error(c(166));
                    return ze(t), null;
                }
                if (d = fe.current, il(t))
                    Om(t);
                else {
                    var f = ni(Wt.current);
                    switch (d) {
                        case 1:
                            d = f.createElementNS("http://www.w3.org/2000/svg", o);
                            break;
                        case 2:
                            d = f.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                            break;
                        default: switch (o) {
                            case "svg":
                                d = f.createElementNS("http://www.w3.org/2000/svg", o);
                                break;
                            case "math":
                                d = f.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                                break;
                            case "script":
                                d = f.createElement("div"), d.innerHTML = "<script><\/script>", d = d.removeChild(d.firstChild);
                                break;
                            case "select":
                                d = typeof n.is == "string" ? f.createElement("select", { is: n.is }) : f.createElement("select"), n.multiple ? d.multiple = !0 : n.size && (d.size = n.size);
                                break;
                            default: d = typeof n.is == "string" ? f.createElement(o, { is: n.is }) : f.createElement(o);
                        }
                    }
                    d[it] = t, d[pt] = n;
                    e: for (f = t.child; f !== null;) {
                        if (f.tag === 5 || f.tag === 6)
                            d.appendChild(f.stateNode);
                        else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                            f.child.return = f, f = f.child;
                            continue;
                        }
                        if (f === t)
                            break e;
                        for (; f.sibling === null;) {
                            if (f.return === null || f.return === t)
                                break e;
                            f = f.return;
                        }
                        f.sibling.return = f.return, f = f.sibling;
                    }
                    t.stateNode = d;
                    e: switch (ut(d, o, n), o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            n = !!n.autoFocus;
                            break e;
                        case "img":
                            n = !0;
                            break e;
                        default: n = !1;
                    }
                    n && Ts(t);
                }
            }
            return ze(t), zo(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== n && Ts(t);
            else {
                if (typeof n != "string" && t.stateNode === null)
                    throw Error(c(166));
                if (e = Wt.current, il(t)) {
                    if (e = t.stateNode, a = t.memoizedProps, n = null, o = ct, o !== null)
                        switch (o.tag) {
                            case 27:
                            case 5: n = o.memoizedProps;
                        }
                    e[it] = t, e = !!(e.nodeValue === a || n !== null && n.suppressHydrationWarning === !0 || $h(e.nodeValue, a)), e || Zs(t, !0);
                }
                else
                    e = ni(e).createTextNode(n), e[it] = t, t.stateNode = e;
            }
            return ze(t), null;
        case 31:
            if (a = t.memoizedState, e === null || e.memoizedState !== null) {
                if (n = il(t), a !== null) {
                    if (e === null) {
                        if (!n)
                            throw Error(c(318));
                        if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                            throw Error(c(557));
                        e[it] = t;
                    }
                    else
                        Ta(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                    ze(t), e = !1;
                }
                else
                    a = Qc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
                if (!e)
                    return t.flags & 256 ? (_t(t), t) : (_t(t), null);
                if ((t.flags & 128) !== 0)
                    throw Error(c(558));
            }
            return ze(t), null;
        case 13:
            if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (o = il(t), n !== null && n.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(c(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                            throw Error(c(317));
                        o[it] = t;
                    }
                    else
                        Ta(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                    ze(t), o = !1;
                }
                else
                    o = Qc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
                if (!o)
                    return t.flags & 256 ? (_t(t), t) : (_t(t), null);
            }
            return _t(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = n !== null, e = e !== null && e.memoizedState !== null, a && (n = t.child, o = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (o = n.alternate.memoizedState.cachePool.pool), d = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (d = n.memoizedState.cachePool.pool), d !== o && (n.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Kr(t, t.updateQueue), ze(t), null);
        case 4: return es(), e === null && sd(t.stateNode.containerInfo), ze(t), null;
        case 10: return Ss(t.type), ze(t), null;
        case 19:
            if (ie(Ke), n = t.memoizedState, n === null)
                return ze(t), null;
            if (o = (t.flags & 128) !== 0, d = n.rendering, d === null)
                if (o)
                    gn(n, !1);
                else {
                    if (Ge !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null;) {
                            if (d = _r(e), d !== null) {
                                for (t.flags |= 128, gn(n, !1), e = d.updateQueue, t.updateQueue = e, Kr(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null;)
                                    Am(a, e), a = a.sibling;
                                return ae(Ke, Ke.current & 1 | 2), ye && Ns(t, n.treeForkCount), t.child;
                            }
                            e = e.sibling;
                        }
                    n.tail !== null && kt() > Fr && (t.flags |= 128, o = !0, gn(n, !1), t.lanes = 4194304);
                }
            else {
                if (!o)
                    if (e = _r(d), e !== null) {
                        if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, Kr(t, e), gn(n, !0), n.tail === null && n.tailMode === "hidden" && !d.alternate && !ye)
                            return ze(t), null;
                    }
                    else
                        2 * kt() - n.renderingStartTime > Fr && a !== 536870912 && (t.flags |= 128, o = !0, gn(n, !1), t.lanes = 4194304);
                n.isBackwards ? (d.sibling = t.child, t.child = d) : (e = n.last, e !== null ? e.sibling = d : t.child = d, n.last = d);
            }
            return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = kt(), e.sibling = null, a = Ke.current, ae(Ke, o ? a & 1 | 2 : a & 1), ye && Ns(t, n.treeForkCount), e) : (ze(t), null);
        case 22:
        case 23: return _t(t), so(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), a = t.updateQueue, a !== null && Kr(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== a && (t.flags |= 2048), e !== null && ie(_a), null;
        case 24: return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Ss($e), ze(t), null;
        case 25: return null;
        case 30: return null;
    } throw Error(c(156, t.tag)); }
    function xb(e, t) { switch (Vc(t), t.tag) {
        case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3: return Ss($e), es(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5: return Hs(t), null;
        case 31:
            if (t.memoizedState !== null) {
                if (_t(t), t.alternate === null)
                    throw Error(c(340));
                Ta();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 13:
            if (_t(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(c(340));
                Ta();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19: return ie(Ke), null;
        case 4: return es(), null;
        case 10: return Ss(t.type), null;
        case 22:
        case 23: return _t(t), so(), e !== null && ie(_a), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 24: return Ss($e), null;
        case 25: return null;
        default: return null;
    } }
    function th(e, t) { switch (Vc(t), t.tag) {
        case 3:
            Ss($e), es();
            break;
        case 26:
        case 27:
        case 5:
            Hs(t);
            break;
        case 4:
            es();
            break;
        case 31:
            t.memoizedState !== null && _t(t);
            break;
        case 13:
            _t(t);
            break;
        case 19:
            ie(Ke);
            break;
        case 10:
            Ss(t.type);
            break;
        case 22:
        case 23:
            _t(t), so(), e !== null && ie(_a);
            break;
        case 24: Ss($e);
    } }
    function bn(e, t) { try {
        var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
        if (n !== null) {
            var o = n.next;
            a = o;
            do {
                if ((a.tag & e) === e) {
                    n = void 0;
                    var d = a.create, f = a.inst;
                    n = d(), f.destroy = n;
                }
                a = a.next;
            } while (a !== o);
        }
    }
    catch (p) {
        Ae(t, t.return, p);
    } }
    function ea(e, t, a) { try {
        var n = t.updateQueue, o = n !== null ? n.lastEffect : null;
        if (o !== null) {
            var d = o.next;
            n = d;
            do {
                if ((n.tag & e) === e) {
                    var f = n.inst, p = f.destroy;
                    if (p !== void 0) {
                        f.destroy = void 0, o = t;
                        var S = a, O = p;
                        try {
                            O();
                        }
                        catch (H) {
                            Ae(o, S, H);
                        }
                    }
                }
                n = n.next;
            } while (n !== d);
        }
    }
    catch (H) {
        Ae(t, t.return, H);
    } }
    function sh(e) { var t = e.updateQueue; if (t !== null) {
        var a = e.stateNode;
        try {
            Ym(t, a);
        }
        catch (n) {
            Ae(e, e.return, n);
        }
    } }
    function ah(e, t, a) { a.props = Ba(e.type, e.memoizedProps), a.state = e.memoizedState; try {
        a.componentWillUnmount();
    }
    catch (n) {
        Ae(e, t, n);
    } }
    function yn(e, t) { try {
        var a = e.ref;
        if (a !== null) {
            switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var n = e.stateNode;
                    break;
                case 30:
                    n = e.stateNode;
                    break;
                default: n = e.stateNode;
            }
            typeof a == "function" ? e.refCleanup = a(n) : a.current = n;
        }
    }
    catch (o) {
        Ae(e, t, o);
    } }
    function us(e, t) { var a = e.ref, n = e.refCleanup; if (a !== null)
        if (typeof n == "function")
            try {
                n();
            }
            catch (o) {
                Ae(e, t, o);
            }
            finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
        else if (typeof a == "function")
            try {
                a(null);
            }
            catch (o) {
                Ae(e, t, o);
            }
        else
            a.current = null; }
    function lh(e) { var t = e.type, a = e.memoizedProps, n = e.stateNode; try {
        e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && n.focus();
                break e;
            case "img": a.src ? n.src = a.src : a.srcSet && (n.srcset = a.srcSet);
        }
    }
    catch (o) {
        Ae(e, e.return, o);
    } }
    function Ro(e, t, a) { try {
        var n = e.stateNode;
        qb(n, e.type, a, t), n[pt] = t;
    }
    catch (o) {
        Ae(e, e.return, o);
    } }
    function nh(e) { return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ia(e.type) || e.tag === 4; }
    function Bo(e) { e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || nh(e.return))
                return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.tag === 27 && ia(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
            return e.stateNode;
    } }
    function qo(e, t, a) { var n = e.tag; if (n === 5 || n === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = ys));
    else if (n !== 4 && (n === 27 && ia(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (qo(e, t, a), e = e.sibling; e !== null;)
            qo(e, t, a), e = e.sibling; }
    function Yr(e, t, a) { var n = e.tag; if (n === 5 || n === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (n !== 4 && (n === 27 && ia(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (Yr(e, t, a), e = e.sibling; e !== null;)
            Yr(e, t, a), e = e.sibling; }
    function rh(e) { var t = e.stateNode, a = e.memoizedProps; try {
        for (var n = e.type, o = t.attributes; o.length;)
            t.removeAttributeNode(o[0]);
        ut(t, n, a), t[it] = e, t[pt] = a;
    }
    catch (d) {
        Ae(e, e.return, d);
    } }
    var Es = !1, We = !1, Uo = !1, ih = typeof WeakSet == "function" ? WeakSet : Set, rt = null;
    function pb(e, t) { if (e = e.containerInfo, nd = mi, e = bm(e), Mc(e)) {
        if ("selectionStart" in e)
            var a = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                a = (a = e.ownerDocument) && a.defaultView || window;
                var n = a.getSelection && a.getSelection();
                if (n && n.rangeCount !== 0) {
                    a = n.anchorNode;
                    var o = n.anchorOffset, d = n.focusNode;
                    n = n.focusOffset;
                    try {
                        a.nodeType, d.nodeType;
                    }
                    catch {
                        a = null;
                        break e;
                    }
                    var f = 0, p = -1, S = -1, O = 0, H = 0, Q = e, z = null;
                    t: for (;;) {
                        for (var U; Q !== a || o !== 0 && Q.nodeType !== 3 || (p = f + o), Q !== d || n !== 0 && Q.nodeType !== 3 || (S = f + n), Q.nodeType === 3 && (f += Q.nodeValue.length), (U = Q.firstChild) !== null;)
                            z = Q, Q = U;
                        for (;;) {
                            if (Q === e)
                                break t;
                            if (z === a && ++O === o && (p = f), z === d && ++H === n && (S = f), (U = Q.nextSibling) !== null)
                                break;
                            Q = z, z = Q.parentNode;
                        }
                        Q = U;
                    }
                    a = p === -1 || S === -1 ? null : { start: p, end: S };
                }
                else
                    a = null;
            }
        a = a || { start: 0, end: 0 };
    }
    else
        a = null; for (rd = { focusedElem: e, selectionRange: a }, mi = !1, rt = t; rt !== null;)
        if (t = rt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t, rt = e;
        else
            for (; rt !== null;) {
                switch (t = rt, d = t.alternate, e = t.flags, t.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                            for (a = 0; a < e.length; a++)
                                o = e[a], o.ref.impl = o.nextImpl;
                        break;
                    case 11:
                    case 15: break;
                    case 1:
                        if ((e & 1024) !== 0 && d !== null) {
                            e = void 0, a = t, o = d.memoizedProps, d = d.memoizedState, n = a.stateNode;
                            try {
                                var P = Ba(a.type, o);
                                e = n.getSnapshotBeforeUpdate(P, d), n.__reactInternalSnapshotBeforeUpdate = e;
                            }
                            catch (le) {
                                Ae(a, a.return, le);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                                od(e);
                            else if (a === 1)
                                switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        od(e);
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
                if (e = t.sibling, e !== null) {
                    e.return = t.return, rt = e;
                    break;
                }
                rt = t.return;
            } }
    function ch(e, t, a) { var n = a.flags; switch (a.tag) {
        case 0:
        case 11:
        case 15:
            _s(e, a), n & 4 && bn(5, a);
            break;
        case 1:
            if (_s(e, a), n & 4)
                if (e = a.stateNode, t === null)
                    try {
                        e.componentDidMount();
                    }
                    catch (f) {
                        Ae(a, a.return, f);
                    }
                else {
                    var o = Ba(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
                    }
                    catch (f) {
                        Ae(a, a.return, f);
                    }
                }
            n & 64 && sh(a), n & 512 && yn(a, a.return);
            break;
        case 3:
            if (_s(e, a), n & 64 && (e = a.updateQueue, e !== null)) {
                if (t = null, a.child !== null)
                    switch (a.child.tag) {
                        case 27:
                        case 5:
                            t = a.child.stateNode;
                            break;
                        case 1: t = a.child.stateNode;
                    }
                try {
                    Ym(e, t);
                }
                catch (f) {
                    Ae(a, a.return, f);
                }
            }
            break;
        case 27: t === null && n & 4 && rh(a);
        case 26:
        case 5:
            _s(e, a), t === null && n & 4 && lh(a), n & 512 && yn(a, a.return);
            break;
        case 12:
            _s(e, a);
            break;
        case 31:
            _s(e, a), n & 4 && uh(e, a);
            break;
        case 13:
            _s(e, a), n & 4 && mh(e, a), n & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = kb.bind(null, a), Yb(e, a))));
            break;
        case 22:
            if (n = a.memoizedState !== null || Es, !n) {
                t = t !== null && t.memoizedState !== null || We, o = Es;
                var d = We;
                Es = n, (We = t) && !d ? Os(e, a, (a.subtreeFlags & 8772) !== 0) : _s(e, a), Es = o, We = d;
            }
            break;
        case 30: break;
        default: _s(e, a);
    } }
    function oh(e) { var t = e.alternate; t !== null && (e.alternate = null, oh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && fc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
    var Re = null, bt = !1;
    function Ms(e, t, a) { for (a = a.child; a !== null;)
        dh(e, t, a), a = a.sibling; }
    function dh(e, t, a) { if (Ct && typeof Ct.onCommitFiberUnmount == "function")
        try {
            Ct.onCommitFiberUnmount(Gl, a);
        }
        catch { } switch (a.tag) {
        case 26:
            We || us(a, t), Ms(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
            break;
        case 27:
            We || us(a, t);
            var n = Re, o = bt;
            ia(a.type) && (Re = a.stateNode, bt = !1), Ms(e, t, a), Tn(a.stateNode), Re = n, bt = o;
            break;
        case 5: We || us(a, t);
        case 6:
            if (n = Re, o = bt, Re = null, Ms(e, t, a), Re = n, bt = o, Re !== null)
                if (bt)
                    try {
                        (Re.nodeType === 9 ? Re.body : Re.nodeName === "HTML" ? Re.ownerDocument.body : Re).removeChild(a.stateNode);
                    }
                    catch (d) {
                        Ae(a, t, d);
                    }
                else
                    try {
                        Re.removeChild(a.stateNode);
                    }
                    catch (d) {
                        Ae(a, t, d);
                    }
            break;
        case 18:
            Re !== null && (bt ? (e = Re, sx(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), Tl(e)) : sx(Re, a.stateNode));
            break;
        case 4:
            n = Re, o = bt, Re = a.stateNode.containerInfo, bt = !0, Ms(e, t, a), Re = n, bt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            ea(2, a, t), We || ea(4, a, t), Ms(e, t, a);
            break;
        case 1:
            We || (us(a, t), n = a.stateNode, typeof n.componentWillUnmount == "function" && ah(a, t, n)), Ms(e, t, a);
            break;
        case 21:
            Ms(e, t, a);
            break;
        case 22:
            We = (n = We) || a.memoizedState !== null, Ms(e, t, a), We = n;
            break;
        default: Ms(e, t, a);
    } }
    function uh(e, t) { if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
            Tl(e);
        }
        catch (a) {
            Ae(t, t.return, a);
        }
    } }
    function mh(e, t) { if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
            Tl(e);
        }
        catch (a) {
            Ae(t, t.return, a);
        } }
    function gb(e) { switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new ih), t;
        case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ih), t;
        default: throw Error(c(435, e.tag));
    } }
    function Xr(e, t) { var a = gb(e); t.forEach(function (n) { if (!a.has(n)) {
        a.add(n);
        var o = Cb.bind(null, e, n);
        n.then(o, o);
    } }); }
    function yt(e, t) { var a = t.deletions; if (a !== null)
        for (var n = 0; n < a.length; n++) {
            var o = a[n], d = e, f = t, p = f;
            e: for (; p !== null;) {
                switch (p.tag) {
                    case 27:
                        if (ia(p.type)) {
                            Re = p.stateNode, bt = !1;
                            break e;
                        }
                        break;
                    case 5:
                        Re = p.stateNode, bt = !1;
                        break e;
                    case 3:
                    case 4:
                        Re = p.stateNode.containerInfo, bt = !0;
                        break e;
                }
                p = p.return;
            }
            if (Re === null)
                throw Error(c(160));
            dh(d, f, o), Re = null, bt = !1, d = o.alternate, d !== null && (d.return = null), o.return = null;
        } if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null;)
            fh(t, e), t = t.sibling; }
    var ss = null;
    function fh(e, t) { var a = e.alternate, n = e.flags; switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            yt(t, e), vt(e), n & 4 && (ea(3, e, e.return), bn(3, e), ea(5, e, e.return));
            break;
        case 1:
            yt(t, e), vt(e), n & 512 && (We || a === null || us(a, a.return)), n & 64 && Es && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? n : a.concat(n))));
            break;
        case 26:
            var o = ss;
            if (yt(t, e), vt(e), n & 512 && (We || a === null || us(a, a.return)), n & 4) {
                var d = a !== null ? a.memoizedState : null;
                if (n = e.memoizedState, a === null)
                    if (n === null)
                        if (e.stateNode === null) {
                            e: {
                                n = e.type, a = e.memoizedProps, o = o.ownerDocument || o;
                                t: switch (n) {
                                    case "title":
                                        d = o.getElementsByTagName("title")[0], (!d || d[Yl] || d[it] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = o.createElement(n), o.head.insertBefore(d, o.querySelector("head > title"))), ut(d, n, a), d[it] = e, nt(d), n = d;
                                        break e;
                                    case "link":
                                        var f = fx("link", "href", o).get(n + (a.href || ""));
                                        if (f) {
                                            for (var p = 0; p < f.length; p++)
                                                if (d = f[p], d.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && d.getAttribute("rel") === (a.rel == null ? null : a.rel) && d.getAttribute("title") === (a.title == null ? null : a.title) && d.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                    f.splice(p, 1);
                                                    break t;
                                                }
                                        }
                                        d = o.createElement(n), ut(d, n, a), o.head.appendChild(d);
                                        break;
                                    case "meta":
                                        if (f = fx("meta", "content", o).get(n + (a.content || ""))) {
                                            for (p = 0; p < f.length; p++)
                                                if (d = f[p], d.getAttribute("content") === (a.content == null ? null : "" + a.content) && d.getAttribute("name") === (a.name == null ? null : a.name) && d.getAttribute("property") === (a.property == null ? null : a.property) && d.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && d.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                    f.splice(p, 1);
                                                    break t;
                                                }
                                        }
                                        d = o.createElement(n), ut(d, n, a), o.head.appendChild(d);
                                        break;
                                    default: throw Error(c(468, n));
                                }
                                d[it] = e, nt(d), n = d;
                            }
                            e.stateNode = n;
                        }
                        else
                            hx(o, e.type, e.stateNode);
                    else
                        e.stateNode = mx(o, n, e.memoizedProps);
                else
                    d !== n ? (d === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : d.count--, n === null ? hx(o, e.type, e.stateNode) : mx(o, n, e.memoizedProps)) : n === null && e.stateNode !== null && Ro(e, e.memoizedProps, a.memoizedProps);
            }
            break;
        case 27:
            yt(t, e), vt(e), n & 512 && (We || a === null || us(a, a.return)), a !== null && n & 4 && Ro(e, e.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (yt(t, e), vt(e), n & 512 && (We || a === null || us(a, a.return)), e.flags & 32) {
                o = e.stateNode;
                try {
                    Pa(o, "");
                }
                catch (P) {
                    Ae(e, e.return, P);
                }
            }
            n & 4 && e.stateNode != null && (o = e.memoizedProps, Ro(e, o, a !== null ? a.memoizedProps : o)), n & 1024 && (Uo = !0);
            break;
        case 6:
            if (yt(t, e), vt(e), n & 4) {
                if (e.stateNode === null)
                    throw Error(c(162));
                n = e.memoizedProps, a = e.stateNode;
                try {
                    a.nodeValue = n;
                }
                catch (P) {
                    Ae(e, e.return, P);
                }
            }
            break;
        case 3:
            if (ci = null, o = ss, ss = ri(t.containerInfo), yt(t, e), ss = o, vt(e), n & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Tl(t.containerInfo);
                }
                catch (P) {
                    Ae(e, e.return, P);
                }
            Uo && (Uo = !1, hh(e));
            break;
        case 4:
            n = ss, ss = ri(e.stateNode.containerInfo), yt(t, e), vt(e), ss = n;
            break;
        case 12:
            yt(t, e), vt(e);
            break;
        case 31:
            yt(t, e), vt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Xr(e, n)));
            break;
        case 13:
            yt(t, e), vt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Jr = kt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Xr(e, n)));
            break;
        case 22:
            o = e.memoizedState !== null;
            var S = a !== null && a.memoizedState !== null, O = Es, H = We;
            if (Es = O || o, We = H || S, yt(t, e), We = H, Es = O, vt(e), n & 8192)
                e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (a === null || S || Es || We || qa(e)), a = null, t = e;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            S = a = t;
                            try {
                                if (d = S.stateNode, o)
                                    f = d.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                                else {
                                    p = S.stateNode;
                                    var Q = S.memoizedProps.style, z = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                                    p.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                                }
                            }
                            catch (P) {
                                Ae(S, S.return, P);
                            }
                        }
                    }
                    else if (t.tag === 6) {
                        if (a === null) {
                            S = t;
                            try {
                                S.stateNode.nodeValue = o ? "" : S.memoizedProps;
                            }
                            catch (P) {
                                Ae(S, S.return, P);
                            }
                        }
                    }
                    else if (t.tag === 18) {
                        if (a === null) {
                            S = t;
                            try {
                                var U = S.stateNode;
                                o ? ax(U, !0) : ax(S.stateNode, !1);
                            }
                            catch (P) {
                                Ae(S, S.return, P);
                            }
                        }
                    }
                    else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue;
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e)
                            break e;
                        a === t && (a = null), t = t.return;
                    }
                    a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
                }
            n & 4 && (n = e.updateQueue, n !== null && (a = n.retryQueue, a !== null && (n.retryQueue = null, Xr(e, a))));
            break;
        case 19:
            yt(t, e), vt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Xr(e, n)));
            break;
        case 30: break;
        case 21: break;
        default: yt(t, e), vt(e);
    } }
    function vt(e) { var t = e.flags; if (t & 2) {
        try {
            for (var a, n = e.return; n !== null;) {
                if (nh(n)) {
                    a = n;
                    break;
                }
                n = n.return;
            }
            if (a == null)
                throw Error(c(160));
            switch (a.tag) {
                case 27:
                    var o = a.stateNode, d = Bo(e);
                    Yr(e, d, o);
                    break;
                case 5:
                    var f = a.stateNode;
                    a.flags & 32 && (Pa(f, ""), a.flags &= -33);
                    var p = Bo(e);
                    Yr(e, p, f);
                    break;
                case 3:
                case 4:
                    var S = a.stateNode.containerInfo, O = Bo(e);
                    qo(e, O, S);
                    break;
                default: throw Error(c(161));
            }
        }
        catch (H) {
            Ae(e, e.return, H);
        }
        e.flags &= -3;
    } t & 4096 && (e.flags &= -4097); }
    function hh(e) { if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
            var t = e;
            hh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        } }
    function _s(e, t) { if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;)
            ch(e, t.alternate, t), t = t.sibling; }
    function qa(e) { for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ea(4, t, t.return), qa(t);
                break;
            case 1:
                us(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && ah(t, t.return, a), qa(t);
                break;
            case 27: Tn(t.stateNode);
            case 26:
            case 5:
                us(t, t.return), qa(t);
                break;
            case 22:
                t.memoizedState === null && qa(t);
                break;
            case 30:
                qa(t);
                break;
            default: qa(t);
        }
        e = e.sibling;
    } }
    function Os(e, t, a) { for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
        var n = t.alternate, o = e, d = t, f = d.flags;
        switch (d.tag) {
            case 0:
            case 11:
            case 15:
                Os(o, d, a), bn(4, d);
                break;
            case 1:
                if (Os(o, d, a), n = d, o = n.stateNode, typeof o.componentDidMount == "function")
                    try {
                        o.componentDidMount();
                    }
                    catch (O) {
                        Ae(n, n.return, O);
                    }
                if (n = d, o = n.updateQueue, o !== null) {
                    var p = n.stateNode;
                    try {
                        var S = o.shared.hiddenCallbacks;
                        if (S !== null)
                            for (o.shared.hiddenCallbacks = null, o = 0; o < S.length; o++)
                                Km(S[o], p);
                    }
                    catch (O) {
                        Ae(n, n.return, O);
                    }
                }
                a && f & 64 && sh(d), yn(d, d.return);
                break;
            case 27: rh(d);
            case 26:
            case 5:
                Os(o, d, a), a && n === null && f & 4 && lh(d), yn(d, d.return);
                break;
            case 12:
                Os(o, d, a);
                break;
            case 31:
                Os(o, d, a), a && f & 4 && uh(o, d);
                break;
            case 13:
                Os(o, d, a), a && f & 4 && mh(o, d);
                break;
            case 22:
                d.memoizedState === null && Os(o, d, a), yn(d, d.return);
                break;
            case 30: break;
            default: Os(o, d, a);
        }
        t = t.sibling;
    } }
    function Lo(e, t) { var a = null; e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && ln(a)); }
    function Ho(e, t) { e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ln(e)); }
    function as(e, t, a, n) { if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;)
            xh(e, t, a, n), t = t.sibling; }
    function xh(e, t, a, n) { var o = t.flags; switch (t.tag) {
        case 0:
        case 11:
        case 15:
            as(e, t, a, n), o & 2048 && bn(9, t);
            break;
        case 1:
            as(e, t, a, n);
            break;
        case 3:
            as(e, t, a, n), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ln(e)));
            break;
        case 12:
            if (o & 2048) {
                as(e, t, a, n), e = t.stateNode;
                try {
                    var d = t.memoizedProps, f = d.id, p = d.onPostCommit;
                    typeof p == "function" && p(f, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                }
                catch (S) {
                    Ae(t, t.return, S);
                }
            }
            else
                as(e, t, a, n);
            break;
        case 31:
            as(e, t, a, n);
            break;
        case 13:
            as(e, t, a, n);
            break;
        case 23: break;
        case 22:
            d = t.stateNode, f = t.alternate, t.memoizedState !== null ? d._visibility & 2 ? as(e, t, a, n) : vn(e, t) : d._visibility & 2 ? as(e, t, a, n) : (d._visibility |= 2, gl(e, t, a, n, (t.subtreeFlags & 10256) !== 0 || !1)), o & 2048 && Lo(f, t);
            break;
        case 24:
            as(e, t, a, n), o & 2048 && Ho(t.alternate, t);
            break;
        default: as(e, t, a, n);
    } }
    function gl(e, t, a, n, o) { for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
        var d = e, f = t, p = a, S = n, O = f.flags;
        switch (f.tag) {
            case 0:
            case 11:
            case 15:
                gl(d, f, p, S, o), bn(8, f);
                break;
            case 23: break;
            case 22:
                var H = f.stateNode;
                f.memoizedState !== null ? H._visibility & 2 ? gl(d, f, p, S, o) : vn(d, f) : (H._visibility |= 2, gl(d, f, p, S, o)), o && O & 2048 && Lo(f.alternate, f);
                break;
            case 24:
                gl(d, f, p, S, o), o && O & 2048 && Ho(f.alternate, f);
                break;
            default: gl(d, f, p, S, o);
        }
        t = t.sibling;
    } }
    function vn(e, t) { if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
            var a = e, n = t, o = n.flags;
            switch (n.tag) {
                case 22:
                    vn(a, n), o & 2048 && Lo(n.alternate, n);
                    break;
                case 24:
                    vn(a, n), o & 2048 && Ho(n.alternate, n);
                    break;
                default: vn(a, n);
            }
            t = t.sibling;
        } }
    var jn = 8192;
    function bl(e, t, a) { if (e.subtreeFlags & jn)
        for (e = e.child; e !== null;)
            ph(e, t, a), e = e.sibling; }
    function ph(e, t, a) { switch (e.tag) {
        case 26:
            bl(e, t, a), e.flags & jn && e.memoizedState !== null && ay(a, ss, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            bl(e, t, a);
            break;
        case 3:
        case 4:
            var n = ss;
            ss = ri(e.stateNode.containerInfo), bl(e, t, a), ss = n;
            break;
        case 22:
            e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = jn, jn = 16777216, bl(e, t, a), jn = n) : bl(e, t, a));
            break;
        default: bl(e, t, a);
    } }
    function gh(e) { var t = e.alternate; if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
            t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
    } }
    function Nn(e) { var t = e.deletions; if ((e.flags & 16) !== 0) {
        if (t !== null)
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                rt = n, yh(n, e);
            }
        gh(e);
    } if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;)
            bh(e), e = e.sibling; }
    function bh(e) { switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Nn(e), e.flags & 2048 && ea(9, e, e.return);
            break;
        case 3:
            Nn(e);
            break;
        case 12:
            Nn(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Zr(e)) : Nn(e);
            break;
        default: Nn(e);
    } }
    function Zr(e) { var t = e.deletions; if ((e.flags & 16) !== 0) {
        if (t !== null)
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                rt = n, yh(n, e);
            }
        gh(e);
    } for (e = e.child; e !== null;) {
        switch (t = e, t.tag) {
            case 0:
            case 11:
            case 15:
                ea(8, t, t.return), Zr(t);
                break;
            case 22:
                a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Zr(t));
                break;
            default: Zr(t);
        }
        e = e.sibling;
    } }
    function yh(e, t) { for (; rt !== null;) {
        var a = rt;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                ea(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var n = a.memoizedState.cachePool.pool;
                    n != null && n.refCount++;
                }
                break;
            case 24: ln(a.memoizedState.cache);
        }
        if (n = a.child, n !== null)
            n.return = a, rt = n;
        else
            e: for (a = e; rt !== null;) {
                n = rt;
                var o = n.sibling, d = n.return;
                if (oh(n), n === a) {
                    rt = null;
                    break e;
                }
                if (o !== null) {
                    o.return = d, rt = o;
                    break e;
                }
                rt = d;
            }
    } }
    var bb = { getCacheForType: function (e) { var t = ot($e), a = t.data.get(e); return a === void 0 && (a = e(), t.data.set(e, a)), a; }, cacheSignal: function () { return ot($e).controller.signal; } }, yb = typeof WeakMap == "function" ? WeakMap : Map, Se = 0, Oe = null, he = null, ge = 0, Ce = 0, Ot = null, ta = !1, yl = !1, Vo = !1, Ds = 0, Ge = 0, sa = 0, Ua = 0, Go = 0, Dt = 0, vl = 0, wn = null, jt = null, Qo = !1, Jr = 0, vh = 0, Fr = 1 / 0, $r = null, aa = null, tt = 0, la = null, jl = null, zs = 0, Ko = 0, Yo = null, jh = null, Sn = 0, Xo = null;
    function zt() { return (Se & 2) !== 0 && ge !== 0 ? ge & -ge : E.T !== null ? Io() : Bu(); }
    function Nh() { if (Dt === 0)
        if ((ge & 536870912) === 0 || ye) {
            var e = lr;
            lr <<= 1, (lr & 3932160) === 0 && (lr = 262144), Dt = e;
        }
        else
            Dt = 536870912; return e = Mt.current, e !== null && (e.flags |= 32), Dt; }
    function Nt(e, t, a) { (e === Oe && (Ce === 2 || Ce === 9) || e.cancelPendingCommit !== null) && (Nl(e, 0), na(e, ge, Dt, !1)), Kl(e, a), ((Se & 2) === 0 || e !== Oe) && (e === Oe && ((Se & 2) === 0 && (Ua |= a), Ge === 4 && na(e, ge, Dt, !1)), ms(e)); }
    function wh(e, t, a) { if ((Se & 6) !== 0)
        throw Error(c(327)); var n = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ql(e, t), o = n ? Nb(e, t) : Jo(e, t, !0), d = n; do {
        if (o === 0) {
            yl && !n && na(e, t, 0, !1);
            break;
        }
        else {
            if (a = e.current.alternate, d && !vb(a)) {
                o = Jo(e, t, !1), d = !1;
                continue;
            }
            if (o === 2) {
                if (d = t, e.errorRecoveryDisabledLanes & d)
                    var f = 0;
                else
                    f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                if (f !== 0) {
                    t = f;
                    e: {
                        var p = e;
                        o = wn;
                        var S = p.current.memoizedState.isDehydrated;
                        if (S && (Nl(p, f).flags |= 256), f = Jo(p, f, !1), f !== 2) {
                            if (Vo && !S) {
                                p.errorRecoveryDisabledLanes |= d, Ua |= d, o = 4;
                                break e;
                            }
                            d = jt, jt = o, d !== null && (jt === null ? jt = d : jt.push.apply(jt, d));
                        }
                        o = f;
                    }
                    if (d = !1, o !== 2)
                        continue;
                }
            }
            if (o === 1) {
                Nl(e, 0), na(e, t, 0, !0);
                break;
            }
            e: {
                switch (n = e, d = o, d) {
                    case 0:
                    case 1: throw Error(c(345));
                    case 4: if ((t & 4194048) !== t)
                        break;
                    case 6:
                        na(n, t, Dt, !ta);
                        break e;
                    case 2:
                        jt = null;
                        break;
                    case 3:
                    case 5: break;
                    default: throw Error(c(329));
                }
                if ((t & 62914560) === t && (o = Jr + 300 - kt(), 10 < o)) {
                    if (na(n, t, Dt, !ta), rr(n, 0, !0) !== 0)
                        break e;
                    zs = t, n.timeoutHandle = ex(Sh.bind(null, n, a, jt, $r, Qo, t, Dt, Ua, vl, ta, d, "Throttled", -0, 0), o);
                    break e;
                }
                Sh(n, a, jt, $r, Qo, t, Dt, Ua, vl, ta, d, null, -0, 0);
            }
        }
        break;
    } while (!0); ms(e); }
    function Sh(e, t, a, n, o, d, f, p, S, O, H, Q, z, U) { if (e.timeoutHandle = -1, Q = t.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
        Q = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: ys }, ph(t, d, Q);
        var P = (d & 62914560) === d ? Jr - kt() : (d & 4194048) === d ? vh - kt() : 0;
        if (P = ly(Q, P), P !== null) {
            zs = d, e.cancelPendingCommit = P(Oh.bind(null, e, t, d, a, n, o, f, p, S, H, Q, null, z, U)), na(e, d, f, !O);
            return;
        }
    } Oh(e, t, d, a, n, o, f, p, S); }
    function vb(e) { for (var t = e;;) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
            for (var n = 0; n < a.length; n++) {
                var o = a[n], d = o.getSnapshot;
                o = o.value;
                try {
                    if (!Tt(d(), o))
                        return !1;
                }
                catch {
                    return !1;
                }
            }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
            a.return = t, t = a;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    } return !0; }
    function na(e, t, a, n) { t &= ~Go, t &= ~Ua, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes; for (var o = t; 0 < o;) {
        var d = 31 - At(o), f = 1 << d;
        n[d] = -1, o &= ~f;
    } a !== 0 && Du(e, a, t); }
    function Pr() { return (Se & 6) === 0 ? (kn(0), !1) : !0; }
    function Zo() { if (he !== null) {
        if (Ce === 0)
            var e = he.return;
        else
            e = he, ws = Ea = null, co(e), ml = null, rn = 0, e = he;
        for (; e !== null;)
            th(e.alternate, e), e = e.return;
        he = null;
    } }
    function Nl(e, t) { var a = e.timeoutHandle; a !== -1 && (e.timeoutHandle = -1, Hb(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), zs = 0, Zo(), Oe = e, he = a = js(e.current, null), ge = t, Ce = 0, Ot = null, ta = !1, yl = Ql(e, t), Vo = !1, vl = Dt = Go = Ua = sa = Ge = 0, jt = wn = null, Qo = !1, (t & 8) !== 0 && (t |= t & 32); var n = e.entangledLanes; if (n !== 0)
        for (e = e.entanglements, n &= t; 0 < n;) {
            var o = 31 - At(n), d = 1 << o;
            t |= e[o], n &= ~d;
        } return Ds = t, br(), a; }
    function kh(e, t) { ce = null, E.H = xn, t === ul || t === Cr ? (t = Hm(), Ce = 3) : t === $c ? (t = Hm(), Ce = 4) : Ce = t === ko ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ot = t, he === null && (Ge = 1, Hr(e, Qt(t, e.current))); }
    function Ch() { var e = Mt.current; return e === null ? !0 : (ge & 4194048) === ge ? Zt === null : (ge & 62914560) === ge || (ge & 536870912) !== 0 ? e === Zt : !1; }
    function Ah() { var e = E.H; return E.H = xn, e === null ? xn : e; }
    function Th() { var e = E.A; return E.A = bb, e; }
    function Ir() { Ge = 4, ta || (ge & 4194048) !== ge && Mt.current !== null || (yl = !0), (sa & 134217727) === 0 && (Ua & 134217727) === 0 || Oe === null || na(Oe, ge, Dt, !1); }
    function Jo(e, t, a) { var n = Se; Se |= 2; var o = Ah(), d = Th(); (Oe !== e || ge !== t) && ($r = null, Nl(e, t)), t = !1; var f = Ge; e: do
        try {
            if (Ce !== 0 && he !== null) {
                var p = he, S = Ot;
                switch (Ce) {
                    case 8:
                        Zo(), f = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Mt.current === null && (t = !0);
                        var O = Ce;
                        if (Ce = 0, Ot = null, wl(e, p, S, O), a && yl) {
                            f = 0;
                            break e;
                        }
                        break;
                    default: O = Ce, Ce = 0, Ot = null, wl(e, p, S, O);
                }
            }
            jb(), f = Ge;
            break;
        }
        catch (H) {
            kh(e, H);
        }
    while (!0); return t && e.shellSuspendCounter++, ws = Ea = null, Se = n, E.H = o, E.A = d, he === null && (Oe = null, ge = 0, br()), f; }
    function jb() { for (; he !== null;)
        Eh(he); }
    function Nb(e, t) { var a = Se; Se |= 2; var n = Ah(), o = Th(); Oe !== e || ge !== t ? ($r = null, Fr = kt() + 500, Nl(e, t)) : yl = Ql(e, t); e: do
        try {
            if (Ce !== 0 && he !== null) {
                t = he;
                var d = Ot;
                t: switch (Ce) {
                    case 1:
                        Ce = 0, Ot = null, wl(e, t, d, 1);
                        break;
                    case 2:
                    case 9:
                        if (Um(d)) {
                            Ce = 0, Ot = null, Mh(t);
                            break;
                        }
                        t = function () { Ce !== 2 && Ce !== 9 || Oe !== e || (Ce = 7), ms(e); }, d.then(t, t);
                        break e;
                    case 3:
                        Ce = 7;
                        break e;
                    case 4:
                        Ce = 5;
                        break e;
                    case 7:
                        Um(d) ? (Ce = 0, Ot = null, Mh(t)) : (Ce = 0, Ot = null, wl(e, t, d, 7));
                        break;
                    case 5:
                        var f = null;
                        switch (he.tag) {
                            case 26: f = he.memoizedState;
                            case 5:
                            case 27:
                                var p = he;
                                if (f ? xx(f) : p.stateNode.complete) {
                                    Ce = 0, Ot = null;
                                    var S = p.sibling;
                                    if (S !== null)
                                        he = S;
                                    else {
                                        var O = p.return;
                                        O !== null ? (he = O, Wr(O)) : he = null;
                                    }
                                    break t;
                                }
                        }
                        Ce = 0, Ot = null, wl(e, t, d, 5);
                        break;
                    case 6:
                        Ce = 0, Ot = null, wl(e, t, d, 6);
                        break;
                    case 8:
                        Zo(), Ge = 6;
                        break e;
                    default: throw Error(c(462));
                }
            }
            wb();
            break;
        }
        catch (H) {
            kh(e, H);
        }
    while (!0); return ws = Ea = null, E.H = n, E.A = o, Se = a, he !== null ? 0 : (Oe = null, ge = 0, br(), Ge); }
    function wb() { for (; he !== null && !Xg();)
        Eh(he); }
    function Eh(e) { var t = Wf(e.alternate, e, Ds); e.memoizedProps = e.pendingProps, t === null ? Wr(e) : he = t; }
    function Mh(e) { var t = e, a = t.alternate; switch (t.tag) {
        case 15:
        case 0:
            t = Zf(a, t, t.pendingProps, t.type, void 0, ge);
            break;
        case 11:
            t = Zf(a, t, t.pendingProps, t.type.render, t.ref, ge);
            break;
        case 5: co(t);
        default: th(a, t), t = he = Am(t, Ds), t = Wf(a, t, Ds);
    } e.memoizedProps = e.pendingProps, t === null ? Wr(e) : he = t; }
    function wl(e, t, a, n) { ws = Ea = null, co(t), ml = null, rn = 0; var o = t.return; try {
        if (ub(e, o, t, a, ge)) {
            Ge = 1, Hr(e, Qt(a, e.current)), he = null;
            return;
        }
    }
    catch (d) {
        if (o !== null)
            throw he = o, d;
        Ge = 1, Hr(e, Qt(a, e.current)), he = null;
        return;
    } t.flags & 32768 ? (ye || n === 1 ? e = !0 : yl || (ge & 536870912) !== 0 ? e = !1 : (ta = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Mt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), _h(t, e)) : Wr(t); }
    function Wr(e) { var t = e; do {
        if ((t.flags & 32768) !== 0) {
            _h(t, ta);
            return;
        }
        e = t.return;
        var a = hb(t.alternate, t, Ds);
        if (a !== null) {
            he = a;
            return;
        }
        if (t = t.sibling, t !== null) {
            he = t;
            return;
        }
        he = t = e;
    } while (t !== null); Ge === 0 && (Ge = 5); }
    function _h(e, t) { do {
        var a = xb(e.alternate, e);
        if (a !== null) {
            a.flags &= 32767, he = a;
            return;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
            he = e;
            return;
        }
        he = e = a;
    } while (e !== null); Ge = 6, he = null; }
    function Oh(e, t, a, n, o, d, f, p, S) { e.cancelPendingCommit = null; do
        ei();
    while (tt !== 0); if ((Se & 6) !== 0)
        throw Error(c(327)); if (t !== null) {
        if (t === e.current)
            throw Error(c(177));
        if (d = t.lanes | t.childLanes, d |= Rc, s0(e, a, d, f, p, S), e === Oe && (he = Oe = null, ge = 0), jl = t, la = e, zs = a, Ko = d, Yo = o, jh = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ab(sr, function () { return qh(), null; })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
            n = E.T, E.T = null, o = $.p, $.p = 2, f = Se, Se |= 4;
            try {
                pb(e, t, a);
            }
            finally {
                Se = f, $.p = o, E.T = n;
            }
        }
        tt = 1, Dh(), zh(), Rh();
    } }
    function Dh() { if (tt === 1) {
        tt = 0;
        var e = la, t = jl, a = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || a) {
            a = E.T, E.T = null;
            var n = $.p;
            $.p = 2;
            var o = Se;
            Se |= 4;
            try {
                fh(t, e);
                var d = rd, f = bm(e.containerInfo), p = d.focusedElem, S = d.selectionRange;
                if (f !== p && p && p.ownerDocument && gm(p.ownerDocument.documentElement, p)) {
                    if (S !== null && Mc(p)) {
                        var O = S.start, H = S.end;
                        if (H === void 0 && (H = O), "selectionStart" in p)
                            p.selectionStart = O, p.selectionEnd = Math.min(H, p.value.length);
                        else {
                            var Q = p.ownerDocument || document, z = Q && Q.defaultView || window;
                            if (z.getSelection) {
                                var U = z.getSelection(), P = p.textContent.length, le = Math.min(S.start, P), Me = S.end === void 0 ? le : Math.min(S.end, P);
                                !U.extend && le > Me && (f = Me, Me = le, le = f);
                                var T = pm(p, le), C = pm(p, Me);
                                if (T && C && (U.rangeCount !== 1 || U.anchorNode !== T.node || U.anchorOffset !== T.offset || U.focusNode !== C.node || U.focusOffset !== C.offset)) {
                                    var _ = Q.createRange();
                                    _.setStart(T.node, T.offset), U.removeAllRanges(), le > Me ? (U.addRange(_), U.extend(C.node, C.offset)) : (_.setEnd(C.node, C.offset), U.addRange(_));
                                }
                            }
                        }
                    }
                    for (Q = [], U = p; U = U.parentNode;)
                        U.nodeType === 1 && Q.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
                    for (typeof p.focus == "function" && p.focus(), p = 0; p < Q.length; p++) {
                        var V = Q[p];
                        V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
                    }
                }
                mi = !!nd, rd = nd = null;
            }
            finally {
                Se = o, $.p = n, E.T = a;
            }
        }
        e.current = t, tt = 2;
    } }
    function zh() { if (tt === 2) {
        tt = 0;
        var e = la, t = jl, a = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || a) {
            a = E.T, E.T = null;
            var n = $.p;
            $.p = 2;
            var o = Se;
            Se |= 4;
            try {
                ch(e, t.alternate, t);
            }
            finally {
                Se = o, $.p = n, E.T = a;
            }
        }
        tt = 3;
    } }
    function Rh() { if (tt === 4 || tt === 3) {
        tt = 0, Zg();
        var e = la, t = jl, a = zs, n = jh;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? tt = 5 : (tt = 0, jl = la = null, Bh(e, e.pendingLanes));
        var o = e.pendingLanes;
        if (o === 0 && (aa = null), uc(a), t = t.stateNode, Ct && typeof Ct.onCommitFiberRoot == "function")
            try {
                Ct.onCommitFiberRoot(Gl, t, void 0, (t.current.flags & 128) === 128);
            }
            catch { }
        if (n !== null) {
            t = E.T, o = $.p, $.p = 2, E.T = null;
            try {
                for (var d = e.onRecoverableError, f = 0; f < n.length; f++) {
                    var p = n[f];
                    d(p.value, { componentStack: p.stack });
                }
            }
            finally {
                E.T = t, $.p = o;
            }
        }
        (zs & 3) !== 0 && ei(), ms(e), o = e.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? e === Xo ? Sn++ : (Sn = 0, Xo = e) : Sn = 0, kn(0);
    } }
    function Bh(e, t) { (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ln(t))); }
    function ei() { return Dh(), zh(), Rh(), qh(); }
    function qh() { if (tt !== 5)
        return !1; var e = la, t = Ko; Ko = 0; var a = uc(zs), n = E.T, o = $.p; try {
        $.p = 32 > a ? 32 : a, E.T = null, a = Yo, Yo = null;
        var d = la, f = zs;
        if (tt = 0, jl = la = null, zs = 0, (Se & 6) !== 0)
            throw Error(c(331));
        var p = Se;
        if (Se |= 4, bh(d.current), xh(d, d.current, f, a), Se = p, kn(0, !1), Ct && typeof Ct.onPostCommitFiberRoot == "function")
            try {
                Ct.onPostCommitFiberRoot(Gl, d);
            }
            catch { }
        return !0;
    }
    finally {
        $.p = o, E.T = n, Bh(e, t);
    } }
    function Uh(e, t, a) { t = Qt(a, t), t = So(e.stateNode, t, 2), e = Ps(e, t, 2), e !== null && (Kl(e, 2), ms(e)); }
    function Ae(e, t, a) { if (e.tag === 3)
        Uh(e, e, a);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Uh(t, e, a);
                break;
            }
            else if (t.tag === 1) {
                var n = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (aa === null || !aa.has(n))) {
                    e = Qt(a, e), a = Lf(2), n = Ps(t, a, 2), n !== null && (Hf(a, n, t, e), Kl(n, 2), ms(n));
                    break;
                }
            }
            t = t.return;
        } }
    function Fo(e, t, a) { var n = e.pingCache; if (n === null) {
        n = e.pingCache = new yb;
        var o = new Set;
        n.set(t, o);
    }
    else
        o = n.get(t), o === void 0 && (o = new Set, n.set(t, o)); o.has(a) || (Vo = !0, o.add(a), e = Sb.bind(null, e, t, a), t.then(e, e)); }
    function Sb(e, t, a) { var n = e.pingCache; n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Oe === e && (ge & a) === a && (Ge === 4 || Ge === 3 && (ge & 62914560) === ge && 300 > kt() - Jr ? (Se & 2) === 0 && Nl(e, 0) : Go |= a, vl === ge && (vl = 0)), ms(e); }
    function Lh(e, t) { t === 0 && (t = Ou()), e = Ca(e, t), e !== null && (Kl(e, t), ms(e)); }
    function kb(e) { var t = e.memoizedState, a = 0; t !== null && (a = t.retryLane), Lh(e, a); }
    function Cb(e, t) { var a = 0; switch (e.tag) {
        case 31:
        case 13:
            var n = e.stateNode, o = e.memoizedState;
            o !== null && (a = o.retryLane);
            break;
        case 19:
            n = e.stateNode;
            break;
        case 22:
            n = e.stateNode._retryCache;
            break;
        default: throw Error(c(314));
    } n !== null && n.delete(t), Lh(e, a); }
    function Ab(e, t) { return ic(e, t); }
    var ti = null, Sl = null, $o = !1, si = !1, Po = !1, ra = 0;
    function ms(e) { e !== Sl && e.next === null && (Sl === null ? ti = Sl = e : Sl = Sl.next = e), si = !0, $o || ($o = !0, Eb()); }
    function kn(e, t) { if (!Po && si) {
        Po = !0;
        do
            for (var a = !1, n = ti; n !== null;) {
                if (e !== 0) {
                    var o = n.pendingLanes;
                    if (o === 0)
                        var d = 0;
                    else {
                        var f = n.suspendedLanes, p = n.pingedLanes;
                        d = (1 << 31 - At(42 | e) + 1) - 1, d &= o & ~(f & ~p), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
                    }
                    d !== 0 && (a = !0, Qh(n, d));
                }
                else
                    d = ge, d = rr(n, n === Oe ? d : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (d & 3) === 0 || Ql(n, d) || (a = !0, Qh(n, d));
                n = n.next;
            }
        while (a);
        Po = !1;
    } }
    function Tb() { Hh(); }
    function Hh() { si = $o = !1; var e = 0; ra !== 0 && Lb() && (e = ra); for (var t = kt(), a = null, n = ti; n !== null;) {
        var o = n.next, d = Vh(n, t);
        d === 0 ? (n.next = null, a === null ? ti = o : a.next = o, o === null && (Sl = a)) : (a = n, (e !== 0 || (d & 3) !== 0) && (si = !0)), n = o;
    } tt !== 0 && tt !== 5 || kn(e), ra !== 0 && (ra = 0); }
    function Vh(e, t) { for (var a = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d;) {
        var f = 31 - At(d), p = 1 << f, S = o[f];
        S === -1 ? ((p & a) === 0 || (p & n) !== 0) && (o[f] = t0(p, t)) : S <= t && (e.expiredLanes |= p), d &= ~p;
    } if (t = Oe, a = ge, a = rr(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, a === 0 || e === t && (Ce === 2 || Ce === 9) || e.cancelPendingCommit !== null)
        return n !== null && n !== null && cc(n), e.callbackNode = null, e.callbackPriority = 0; if ((a & 3) === 0 || Ql(e, a)) {
        if (t = a & -a, t === e.callbackPriority)
            return t;
        switch (n !== null && cc(n), uc(a)) {
            case 2:
            case 8:
                a = Mu;
                break;
            case 32:
                a = sr;
                break;
            case 268435456:
                a = _u;
                break;
            default: a = sr;
        }
        return n = Gh.bind(null, e), a = ic(a, n), e.callbackPriority = t, e.callbackNode = a, t;
    } return n !== null && n !== null && cc(n), e.callbackPriority = 2, e.callbackNode = null, 2; }
    function Gh(e, t) { if (tt !== 0 && tt !== 5)
        return e.callbackNode = null, e.callbackPriority = 0, null; var a = e.callbackNode; if (ei() && e.callbackNode !== a)
        return null; var n = ge; return n = rr(e, e === Oe ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (wh(e, n, t), Vh(e, kt()), e.callbackNode != null && e.callbackNode === a ? Gh.bind(null, e) : null); }
    function Qh(e, t) { if (ei())
        return null; wh(e, t, !0); }
    function Eb() { Vb(function () { (Se & 6) !== 0 ? ic(Eu, Tb) : Hh(); }); }
    function Io() { if (ra === 0) {
        var e = ol;
        e === 0 && (e = ar, ar <<= 1, (ar & 261888) === 0 && (ar = 256)), ra = e;
    } return ra; }
    function Kh(e) { return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : dr("" + e); }
    function Yh(e, t) { var a = t.ownerDocument.createElement("input"); return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e; }
    function Mb(e, t, a, n, o) { if (t === "submit" && a && a.stateNode === o) {
        var d = Kh((o[pt] || null).action), f = n.submitter;
        f && (t = (t = f[pt] || null) ? Kh(t.formAction) : f.getAttribute("formAction"), t !== null && (d = t, f = null));
        var p = new hr("action", "action", null, n, o);
        e.push({ event: p, listeners: [{ instance: null, listener: function () { if (n.defaultPrevented) {
                        if (ra !== 0) {
                            var S = f ? Yh(o, f) : new FormData(o);
                            bo(a, { pending: !0, data: S, method: o.method, action: d }, null, S);
                        }
                    }
                    else
                        typeof d == "function" && (p.preventDefault(), S = f ? Yh(o, f) : new FormData(o), bo(a, { pending: !0, data: S, method: o.method, action: d }, d, S)); }, currentTarget: o }] });
    } }
    for (var Wo = 0; Wo < zc.length; Wo++) {
        var ed = zc[Wo], _b = ed.toLowerCase(), Ob = ed[0].toUpperCase() + ed.slice(1);
        ts(_b, "on" + Ob);
    }
    ts(jm, "onAnimationEnd"), ts(Nm, "onAnimationIteration"), ts(wm, "onAnimationStart"), ts("dblclick", "onDoubleClick"), ts("focusin", "onFocus"), ts("focusout", "onBlur"), ts(J0, "onTransitionRun"), ts(F0, "onTransitionStart"), ts($0, "onTransitionCancel"), ts(Sm, "onTransitionEnd"), Fa("onMouseEnter", ["mouseout", "mouseover"]), Fa("onMouseLeave", ["mouseout", "mouseover"]), Fa("onPointerEnter", ["pointerout", "pointerover"]), Fa("onPointerLeave", ["pointerout", "pointerover"]), Na("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Na("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Na("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Na("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Na("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Na("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Cn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Db = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cn));
    function Xh(e, t) { t = (t & 4) !== 0; for (var a = 0; a < e.length; a++) {
        var n = e[a], o = n.event;
        n = n.listeners;
        e: {
            var d = void 0;
            if (t)
                for (var f = n.length - 1; 0 <= f; f--) {
                    var p = n[f], S = p.instance, O = p.currentTarget;
                    if (p = p.listener, S !== d && o.isPropagationStopped())
                        break e;
                    d = p, o.currentTarget = O;
                    try {
                        d(o);
                    }
                    catch (H) {
                        gr(H);
                    }
                    o.currentTarget = null, d = S;
                }
            else
                for (f = 0; f < n.length; f++) {
                    if (p = n[f], S = p.instance, O = p.currentTarget, p = p.listener, S !== d && o.isPropagationStopped())
                        break e;
                    d = p, o.currentTarget = O;
                    try {
                        d(o);
                    }
                    catch (H) {
                        gr(H);
                    }
                    o.currentTarget = null, d = S;
                }
        }
    } }
    function xe(e, t) { var a = t[mc]; a === void 0 && (a = t[mc] = new Set); var n = e + "__bubble"; a.has(n) || (Zh(t, e, 2, !1), a.add(n)); }
    function td(e, t, a) { var n = 0; t && (n |= 4), Zh(a, e, n, t); }
    var ai = "_reactListening" + Math.random().toString(36).slice(2);
    function sd(e) { if (!e[ai]) {
        e[ai] = !0, Lu.forEach(function (a) { a !== "selectionchange" && (Db.has(a) || td(a, !1, e), td(a, !0, e)); });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ai] || (t[ai] = !0, td("selectionchange", !1, t));
    } }
    function Zh(e, t, a, n) { switch (Nx(t)) {
        case 2:
            var o = iy;
            break;
        case 8:
            o = cy;
            break;
        default: o = gd;
    } a = o.bind(null, t, a, e), o = void 0, !jc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, a, { capture: !0, passive: o }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, { passive: o }) : e.addEventListener(t, a, !1); }
    function ad(e, t, a, n, o) { var d = n; if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
        e: for (;;) {
            if (n === null)
                return;
            var f = n.tag;
            if (f === 3 || f === 4) {
                var p = n.stateNode.containerInfo;
                if (p === o)
                    break;
                if (f === 4)
                    for (f = n.return; f !== null;) {
                        var S = f.tag;
                        if ((S === 3 || S === 4) && f.stateNode.containerInfo === o)
                            return;
                        f = f.return;
                    }
                for (; p !== null;) {
                    if (f = Xa(p), f === null)
                        return;
                    if (S = f.tag, S === 5 || S === 6 || S === 26 || S === 27) {
                        n = d = f;
                        continue e;
                    }
                    p = p.parentNode;
                }
            }
            n = n.return;
        } Pu(function () { var O = d, H = yc(a), Q = []; e: {
        var z = km.get(e);
        if (z !== void 0) {
            var U = hr, P = e;
            switch (e) {
                case "keypress": if (mr(a) === 0)
                    break e;
                case "keydown":
                case "keyup":
                    U = C0;
                    break;
                case "focusin":
                    P = "focus", U = kc;
                    break;
                case "focusout":
                    P = "blur", U = kc;
                    break;
                case "beforeblur":
                case "afterblur":
                    U = kc;
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
                    U = em;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    U = h0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    U = E0;
                    break;
                case jm:
                case Nm:
                case wm:
                    U = g0;
                    break;
                case Sm:
                    U = _0;
                    break;
                case "scroll":
                case "scrollend":
                    U = m0;
                    break;
                case "wheel":
                    U = D0;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    U = y0;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    U = sm;
                    break;
                case "toggle":
                case "beforetoggle": U = R0;
            }
            var le = (t & 4) !== 0, Me = !le && (e === "scroll" || e === "scrollend"), T = le ? z !== null ? z + "Capture" : null : z;
            le = [];
            for (var C = O, _; C !== null;) {
                var V = C;
                if (_ = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || _ === null || T === null || (V = Zl(C, T), V != null && le.push(An(C, V, _))), Me)
                    break;
                C = C.return;
            }
            0 < le.length && (z = new U(z, P, null, a, H), Q.push({ event: z, listeners: le }));
        }
    } if ((t & 7) === 0) {
        e: {
            if (z = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", z && a !== bc && (P = a.relatedTarget || a.fromElement) && (Xa(P) || P[Ya]))
                break e;
            if ((U || z) && (z = H.window === H ? H : (z = H.ownerDocument) ? z.defaultView || z.parentWindow : window, U ? (P = a.relatedTarget || a.toElement, U = O, P = P ? Xa(P) : null, P !== null && (Me = m(P), le = P.tag, P !== Me || le !== 5 && le !== 27 && le !== 6) && (P = null)) : (U = null, P = O), U !== P)) {
                if (le = em, V = "onMouseLeave", T = "onMouseEnter", C = "mouse", (e === "pointerout" || e === "pointerover") && (le = sm, V = "onPointerLeave", T = "onPointerEnter", C = "pointer"), Me = U == null ? z : Xl(U), _ = P == null ? z : Xl(P), z = new le(V, C + "leave", U, a, H), z.target = Me, z.relatedTarget = _, V = null, Xa(H) === O && (le = new le(T, C + "enter", P, a, H), le.target = _, le.relatedTarget = Me, V = le), Me = V, U && P)
                    t: {
                        for (le = zb, T = U, C = P, _ = 0, V = T; V; V = le(V))
                            _++;
                        V = 0;
                        for (var te = C; te; te = le(te))
                            V++;
                        for (; 0 < _ - V;)
                            T = le(T), _--;
                        for (; 0 < V - _;)
                            C = le(C), V--;
                        for (; _--;) {
                            if (T === C || C !== null && T === C.alternate) {
                                le = T;
                                break t;
                            }
                            T = le(T), C = le(C);
                        }
                        le = null;
                    }
                else
                    le = null;
                U !== null && Jh(Q, z, U, le, !1), P !== null && Me !== null && Jh(Q, Me, P, le, !0);
            }
        }
        e: {
            if (z = O ? Xl(O) : window, U = z.nodeName && z.nodeName.toLowerCase(), U === "select" || U === "input" && z.type === "file")
                var je = dm;
            else if (cm(z))
                if (um)
                    je = Y0;
                else {
                    je = Q0;
                    var ee = G0;
                }
            else
                U = z.nodeName, !U || U.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? O && gc(O.elementType) && (je = dm) : je = K0;
            if (je && (je = je(e, O))) {
                om(Q, je, a, H);
                break e;
            }
            ee && ee(e, z, O), e === "focusout" && O && z.type === "number" && O.memoizedProps.value != null && pc(z, "number", z.value);
        }
        switch (ee = O ? Xl(O) : window, e) {
            case "focusin":
                (cm(ee) || ee.contentEditable === "true") && (tl = ee, _c = O, tn = null);
                break;
            case "focusout":
                tn = _c = tl = null;
                break;
            case "mousedown":
                Oc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Oc = !1, ym(Q, a, H);
                break;
            case "selectionchange": if (Z0)
                break;
            case "keydown":
            case "keyup": ym(Q, a, H);
        }
        var de;
        if (Ac)
            e: {
                switch (e) {
                    case "compositionstart":
                        var be = "onCompositionStart";
                        break e;
                    case "compositionend":
                        be = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        be = "onCompositionUpdate";
                        break e;
                }
                be = void 0;
            }
        else
            el ? rm(e, a) && (be = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (be = "onCompositionStart");
        be && (am && a.locale !== "ko" && (el || be !== "onCompositionStart" ? be === "onCompositionEnd" && el && (de = Iu()) : (Ks = H, Nc = "value" in Ks ? Ks.value : Ks.textContent, el = !0)), ee = li(O, be), 0 < ee.length && (be = new tm(be, e, null, a, H), Q.push({ event: be, listeners: ee }), de ? be.data = de : (de = im(a), de !== null && (be.data = de)))), (de = q0 ? U0(e, a) : L0(e, a)) && (be = li(O, "onBeforeInput"), 0 < be.length && (ee = new tm("onBeforeInput", "beforeinput", null, a, H), Q.push({ event: ee, listeners: be }), ee.data = de)), Mb(Q, e, O, a, H);
    } Xh(Q, t); }); }
    function An(e, t, a) { return { instance: e, listener: t, currentTarget: a }; }
    function li(e, t) { for (var a = t + "Capture", n = []; e !== null;) {
        var o = e, d = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || d === null || (o = Zl(e, a), o != null && n.unshift(An(e, o, d)), o = Zl(e, t), o != null && n.push(An(e, o, d))), e.tag === 3)
            return n;
        e = e.return;
    } return []; }
    function zb(e) { if (e === null)
        return null; do
        e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27); return e || null; }
    function Jh(e, t, a, n, o) { for (var d = t._reactName, f = []; a !== null && a !== n;) {
        var p = a, S = p.alternate, O = p.stateNode;
        if (p = p.tag, S !== null && S === n)
            break;
        p !== 5 && p !== 26 && p !== 27 || O === null || (S = O, o ? (O = Zl(a, d), O != null && f.unshift(An(a, O, S))) : o || (O = Zl(a, d), O != null && f.push(An(a, O, S)))), a = a.return;
    } f.length !== 0 && e.push({ event: t, listeners: f }); }
    var Rb = /\r\n?/g, Bb = /\u0000|\uFFFD/g;
    function Fh(e) {
        return (typeof e == "string" ? e : "" + e).replace(Rb, `
`).replace(Bb, "");
    }
    function $h(e, t) { return t = Fh(t), Fh(e) === t; }
    function Ee(e, t, a, n, o, d) { switch (a) {
        case "children":
            typeof n == "string" ? t === "body" || t === "textarea" && n === "" || Pa(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && Pa(e, "" + n);
            break;
        case "className":
            cr(e, "class", n);
            break;
        case "tabIndex":
            cr(e, "tabindex", n);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            cr(e, a, n);
            break;
        case "style":
            Fu(e, n, d);
            break;
        case "data": if (t !== "object") {
            cr(e, "data", n);
            break;
        }
        case "src":
        case "href":
            if (n === "" && (t !== "a" || a !== "href")) {
                e.removeAttribute(a);
                break;
            }
            if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
                e.removeAttribute(a);
                break;
            }
            n = dr("" + n), e.setAttribute(a, n);
            break;
        case "action":
        case "formAction":
            if (typeof n == "function") {
                e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break;
            }
            else
                typeof d == "function" && (a === "formAction" ? (t !== "input" && Ee(e, t, "name", o.name, o, null), Ee(e, t, "formEncType", o.formEncType, o, null), Ee(e, t, "formMethod", o.formMethod, o, null), Ee(e, t, "formTarget", o.formTarget, o, null)) : (Ee(e, t, "encType", o.encType, o, null), Ee(e, t, "method", o.method, o, null), Ee(e, t, "target", o.target, o, null)));
            if (n == null || typeof n == "symbol" || typeof n == "boolean") {
                e.removeAttribute(a);
                break;
            }
            n = dr("" + n), e.setAttribute(a, n);
            break;
        case "onClick":
            n != null && (e.onclick = ys);
            break;
        case "onScroll":
            n != null && xe("scroll", e);
            break;
        case "onScrollEnd":
            n != null && xe("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (n != null) {
                if (typeof n != "object" || !("__html" in n))
                    throw Error(c(61));
                if (a = n.__html, a != null) {
                    if (o.children != null)
                        throw Error(c(60));
                    e.innerHTML = a;
                }
            }
            break;
        case "multiple":
            e.multiple = n && typeof n != "function" && typeof n != "symbol";
            break;
        case "muted":
            e.muted = n && typeof n != "function" && typeof n != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref": break;
        case "autoFocus": break;
        case "xlinkHref":
            if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
                e.removeAttribute("xlink:href");
                break;
            }
            a = dr("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, "" + n) : e.removeAttribute(a);
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
            n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
            break;
        case "capture":
        case "download":
            n === !0 ? e.setAttribute(a, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, n) : e.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(a, n) : e.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(a) : e.setAttribute(a, n);
            break;
        case "popover":
            xe("beforetoggle", e), xe("toggle", e), ir(e, "popover", n);
            break;
        case "xlinkActuate":
            bs(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
            break;
        case "xlinkArcrole":
            bs(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
            break;
        case "xlinkRole":
            bs(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
            break;
        case "xlinkShow":
            bs(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
            break;
        case "xlinkTitle":
            bs(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
            break;
        case "xlinkType":
            bs(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
            break;
        case "xmlBase":
            bs(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
            break;
        case "xmlLang":
            bs(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
            break;
        case "xmlSpace":
            bs(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
            break;
        case "is":
            ir(e, "is", n);
            break;
        case "innerText":
        case "textContent": break;
        default: (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = d0.get(a) || a, ir(e, a, n));
    } }
    function ld(e, t, a, n, o, d) { switch (a) {
        case "style":
            Fu(e, n, d);
            break;
        case "dangerouslySetInnerHTML":
            if (n != null) {
                if (typeof n != "object" || !("__html" in n))
                    throw Error(c(61));
                if (a = n.__html, a != null) {
                    if (o.children != null)
                        throw Error(c(60));
                    e.innerHTML = a;
                }
            }
            break;
        case "children":
            typeof n == "string" ? Pa(e, n) : (typeof n == "number" || typeof n == "bigint") && Pa(e, "" + n);
            break;
        case "onScroll":
            n != null && xe("scroll", e);
            break;
        case "onScrollEnd":
            n != null && xe("scrollend", e);
            break;
        case "onClick":
            n != null && (e.onclick = ys);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref": break;
        case "innerText":
        case "textContent": break;
        default: if (!Hu.hasOwnProperty(a))
            e: {
                if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), d = e[pt] || null, d = d != null ? d[a] : null, typeof d == "function" && e.removeEventListener(t, d, o), typeof n == "function")) {
                    typeof d != "function" && d !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, n, o);
                    break e;
                }
                a in e ? e[a] = n : n === !0 ? e.setAttribute(a, "") : ir(e, a, n);
            }
    } }
    function ut(e, t, a) { switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li": break;
        case "img":
            xe("error", e), xe("load", e);
            var n = !1, o = !1, d;
            for (d in a)
                if (a.hasOwnProperty(d)) {
                    var f = a[d];
                    if (f != null)
                        switch (d) {
                            case "src":
                                n = !0;
                                break;
                            case "srcSet":
                                o = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML": throw Error(c(137, t));
                            default: Ee(e, t, d, f, a, null);
                        }
                }
            o && Ee(e, t, "srcSet", a.srcSet, a, null), n && Ee(e, t, "src", a.src, a, null);
            return;
        case "input":
            xe("invalid", e);
            var p = d = f = o = null, S = null, O = null;
            for (n in a)
                if (a.hasOwnProperty(n)) {
                    var H = a[n];
                    if (H != null)
                        switch (n) {
                            case "name":
                                o = H;
                                break;
                            case "type":
                                f = H;
                                break;
                            case "checked":
                                S = H;
                                break;
                            case "defaultChecked":
                                O = H;
                                break;
                            case "value":
                                d = H;
                                break;
                            case "defaultValue":
                                p = H;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (H != null)
                                    throw Error(c(137, t));
                                break;
                            default: Ee(e, t, n, H, a, null);
                        }
                }
            Yu(e, d, p, S, O, f, o, !1);
            return;
        case "select":
            xe("invalid", e), n = f = d = null;
            for (o in a)
                if (a.hasOwnProperty(o) && (p = a[o], p != null))
                    switch (o) {
                        case "value":
                            d = p;
                            break;
                        case "defaultValue":
                            f = p;
                            break;
                        case "multiple": n = p;
                        default: Ee(e, t, o, p, a, null);
                    }
            t = d, a = f, e.multiple = !!n, t != null ? $a(e, !!n, t, !1) : a != null && $a(e, !!n, a, !0);
            return;
        case "textarea":
            xe("invalid", e), d = o = n = null;
            for (f in a)
                if (a.hasOwnProperty(f) && (p = a[f], p != null))
                    switch (f) {
                        case "value":
                            n = p;
                            break;
                        case "defaultValue":
                            o = p;
                            break;
                        case "children":
                            d = p;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (p != null)
                                throw Error(c(91));
                            break;
                        default: Ee(e, t, f, p, a, null);
                    }
            Zu(e, n, o, d);
            return;
        case "option":
            for (S in a)
                if (a.hasOwnProperty(S) && (n = a[S], n != null))
                    switch (S) {
                        case "selected":
                            e.selected = n && typeof n != "function" && typeof n != "symbol";
                            break;
                        default: Ee(e, t, S, n, a, null);
                    }
            return;
        case "dialog":
            xe("beforetoggle", e), xe("toggle", e), xe("cancel", e), xe("close", e);
            break;
        case "iframe":
        case "object":
            xe("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < Cn.length; n++)
                xe(Cn[n], e);
            break;
        case "image":
            xe("error", e), xe("load", e);
            break;
        case "details":
            xe("toggle", e);
            break;
        case "embed":
        case "source":
        case "link": xe("error", e), xe("load", e);
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
            for (O in a)
                if (a.hasOwnProperty(O) && (n = a[O], n != null))
                    switch (O) {
                        case "children":
                        case "dangerouslySetInnerHTML": throw Error(c(137, t));
                        default: Ee(e, t, O, n, a, null);
                    }
            return;
        default: if (gc(t)) {
            for (H in a)
                a.hasOwnProperty(H) && (n = a[H], n !== void 0 && ld(e, t, H, n, a, void 0));
            return;
        }
    } for (p in a)
        a.hasOwnProperty(p) && (n = a[p], n != null && Ee(e, t, p, n, a, null)); }
    function qb(e, t, a, n) { switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li": break;
        case "input":
            var o = null, d = null, f = null, p = null, S = null, O = null, H = null;
            for (U in a) {
                var Q = a[U];
                if (a.hasOwnProperty(U) && Q != null)
                    switch (U) {
                        case "checked": break;
                        case "value": break;
                        case "defaultValue": S = Q;
                        default: n.hasOwnProperty(U) || Ee(e, t, U, null, n, Q);
                    }
            }
            for (var z in n) {
                var U = n[z];
                if (Q = a[z], n.hasOwnProperty(z) && (U != null || Q != null))
                    switch (z) {
                        case "type":
                            d = U;
                            break;
                        case "name":
                            o = U;
                            break;
                        case "checked":
                            O = U;
                            break;
                        case "defaultChecked":
                            H = U;
                            break;
                        case "value":
                            f = U;
                            break;
                        case "defaultValue":
                            p = U;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (U != null)
                                throw Error(c(137, t));
                            break;
                        default: U !== Q && Ee(e, t, z, U, n, Q);
                    }
            }
            xc(e, f, p, S, O, H, d, o);
            return;
        case "select":
            U = f = p = z = null;
            for (d in a)
                if (S = a[d], a.hasOwnProperty(d) && S != null)
                    switch (d) {
                        case "value": break;
                        case "multiple": U = S;
                        default: n.hasOwnProperty(d) || Ee(e, t, d, null, n, S);
                    }
            for (o in n)
                if (d = n[o], S = a[o], n.hasOwnProperty(o) && (d != null || S != null))
                    switch (o) {
                        case "value":
                            z = d;
                            break;
                        case "defaultValue":
                            p = d;
                            break;
                        case "multiple": f = d;
                        default: d !== S && Ee(e, t, o, d, n, S);
                    }
            t = p, a = f, n = U, z != null ? $a(e, !!a, z, !1) : !!n != !!a && (t != null ? $a(e, !!a, t, !0) : $a(e, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            U = z = null;
            for (p in a)
                if (o = a[p], a.hasOwnProperty(p) && o != null && !n.hasOwnProperty(p))
                    switch (p) {
                        case "value": break;
                        case "children": break;
                        default: Ee(e, t, p, null, n, o);
                    }
            for (f in n)
                if (o = n[f], d = a[f], n.hasOwnProperty(f) && (o != null || d != null))
                    switch (f) {
                        case "value":
                            z = o;
                            break;
                        case "defaultValue":
                            U = o;
                            break;
                        case "children": break;
                        case "dangerouslySetInnerHTML":
                            if (o != null)
                                throw Error(c(91));
                            break;
                        default: o !== d && Ee(e, t, f, o, n, d);
                    }
            Xu(e, z, U);
            return;
        case "option":
            for (var P in a)
                if (z = a[P], a.hasOwnProperty(P) && z != null && !n.hasOwnProperty(P))
                    switch (P) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default: Ee(e, t, P, null, n, z);
                    }
            for (S in n)
                if (z = n[S], U = a[S], n.hasOwnProperty(S) && z !== U && (z != null || U != null))
                    switch (S) {
                        case "selected":
                            e.selected = z && typeof z != "function" && typeof z != "symbol";
                            break;
                        default: Ee(e, t, S, z, n, U);
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
            for (var le in a)
                z = a[le], a.hasOwnProperty(le) && z != null && !n.hasOwnProperty(le) && Ee(e, t, le, null, n, z);
            for (O in n)
                if (z = n[O], U = a[O], n.hasOwnProperty(O) && z !== U && (z != null || U != null))
                    switch (O) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (z != null)
                                throw Error(c(137, t));
                            break;
                        default: Ee(e, t, O, z, n, U);
                    }
            return;
        default: if (gc(t)) {
            for (var Me in a)
                z = a[Me], a.hasOwnProperty(Me) && z !== void 0 && !n.hasOwnProperty(Me) && ld(e, t, Me, void 0, n, z);
            for (H in n)
                z = n[H], U = a[H], !n.hasOwnProperty(H) || z === U || z === void 0 && U === void 0 || ld(e, t, H, z, n, U);
            return;
        }
    } for (var T in a)
        z = a[T], a.hasOwnProperty(T) && z != null && !n.hasOwnProperty(T) && Ee(e, t, T, null, n, z); for (Q in n)
        z = n[Q], U = a[Q], !n.hasOwnProperty(Q) || z === U || z == null && U == null || Ee(e, t, Q, z, n, U); }
    function Ph(e) { switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link": return !0;
        default: return !1;
    } }
    function Ub() { if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), n = 0; n < a.length; n++) {
            var o = a[n], d = o.transferSize, f = o.initiatorType, p = o.duration;
            if (d && p && Ph(f)) {
                for (f = 0, p = o.responseEnd, n += 1; n < a.length; n++) {
                    var S = a[n], O = S.startTime;
                    if (O > p)
                        break;
                    var H = S.transferSize, Q = S.initiatorType;
                    H && Ph(Q) && (S = S.responseEnd, f += H * (S < p ? 1 : (p - O) / (S - O)));
                }
                if (--n, t += 8 * (d + f) / (o.duration / 1e3), e++, 10 < e)
                    break;
            }
        }
        if (0 < e)
            return t / e / 1e6;
    } return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5; }
    var nd = null, rd = null;
    function ni(e) { return e.nodeType === 9 ? e : e.ownerDocument; }
    function Ih(e) { switch (e) {
        case "http://www.w3.org/2000/svg": return 1;
        case "http://www.w3.org/1998/Math/MathML": return 2;
        default: return 0;
    } }
    function Wh(e, t) { if (e === 0)
        switch (t) {
            case "svg": return 1;
            case "math": return 2;
            default: return 0;
        } return e === 1 && t === "foreignObject" ? 0 : e; }
    function id(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
    var cd = null;
    function Lb() { var e = window.event; return e && e.type === "popstate" ? e === cd ? !1 : (cd = e, !0) : (cd = null, !1); }
    var ex = typeof setTimeout == "function" ? setTimeout : void 0, Hb = typeof clearTimeout == "function" ? clearTimeout : void 0, tx = typeof Promise == "function" ? Promise : void 0, Vb = typeof queueMicrotask == "function" ? queueMicrotask : typeof tx < "u" ? function (e) { return tx.resolve(null).then(e).catch(Gb); } : ex;
    function Gb(e) { setTimeout(function () { throw e; }); }
    function ia(e) { return e === "head"; }
    function sx(e, t) { var a = t, n = 0; do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
            if (a = o.data, a === "/$" || a === "/&") {
                if (n === 0) {
                    e.removeChild(o), Tl(t);
                    return;
                }
                n--;
            }
            else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
                n++;
            else if (a === "html")
                Tn(e.ownerDocument.documentElement);
            else if (a === "head") {
                a = e.ownerDocument.head, Tn(a);
                for (var d = a.firstChild; d;) {
                    var f = d.nextSibling, p = d.nodeName;
                    d[Yl] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = f;
                }
            }
            else
                a === "body" && Tn(e.ownerDocument.body);
        a = o;
    } while (a); Tl(t); }
    function ax(e, t) { var a = e; e = 0; do {
        var n = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), n && n.nodeType === 8)
            if (a = n.data, a === "/$") {
                if (e === 0)
                    break;
                e--;
            }
            else
                a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
        a = n;
    } while (a); }
    function od(e) { var t = e.firstChild; for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                od(a), fc(a);
                continue;
            case "SCRIPT":
            case "STYLE": continue;
            case "LINK": if (a.rel.toLowerCase() === "stylesheet")
                continue;
        }
        e.removeChild(a);
    } }
    function Qb(e, t, a, n) { for (; e.nodeType === 1;) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
            if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                break;
        }
        else if (n) {
            if (!e[Yl])
                switch (t) {
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
        else if (t === "input" && e.type === "hidden") {
            var d = o.name == null ? null : "" + o.name;
            if (o.type === "hidden" && e.getAttribute("name") === d)
                return e;
        }
        else
            return e;
        if (e = Jt(e.nextSibling), e === null)
            break;
    } return null; }
    function Kb(e, t, a) { if (t === "")
        return null; for (; e.nodeType !== 3;)
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Jt(e.nextSibling), e === null))
            return null; return e; }
    function lx(e, t) { for (; e.nodeType !== 8;)
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Jt(e.nextSibling), e === null))
            return null; return e; }
    function dd(e) { return e.data === "$?" || e.data === "$~"; }
    function ud(e) { return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"; }
    function Yb(e, t) { var a = e.ownerDocument; if (e.data === "$~")
        e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading")
        t();
    else {
        var n = function () { t(), a.removeEventListener("DOMContentLoaded", n); };
        a.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
    } }
    function Jt(e) { for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                break;
            if (t === "/$" || t === "/&")
                return null;
        }
    } return e; }
    var md = null;
    function nx(e) { e = e.nextSibling; for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var a = e.data;
            if (a === "/$" || a === "/&") {
                if (t === 0)
                    return Jt(e.nextSibling);
                t--;
            }
            else
                a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
        }
        e = e.nextSibling;
    } return null; }
    function rx(e) { e = e.previousSibling; for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var a = e.data;
            if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                if (t === 0)
                    return e;
                t--;
            }
            else
                a !== "/$" && a !== "/&" || t++;
        }
        e = e.previousSibling;
    } return null; }
    function ix(e, t, a) { switch (t = ni(a), e) {
        case "html":
            if (e = t.documentElement, !e)
                throw Error(c(452));
            return e;
        case "head":
            if (e = t.head, !e)
                throw Error(c(453));
            return e;
        case "body":
            if (e = t.body, !e)
                throw Error(c(454));
            return e;
        default: throw Error(c(451));
    } }
    function Tn(e) { for (var t = e.attributes; t.length;)
        e.removeAttributeNode(t[0]); fc(e); }
    var Ft = new Map, cx = new Set;
    function ri(e) { return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument; }
    var Rs = $.d;
    $.d = { f: Xb, r: Zb, D: Jb, C: Fb, L: $b, m: Pb, X: Wb, S: Ib, M: ey };
    function Xb() { var e = Rs.f(), t = Pr(); return e || t; }
    function Zb(e) { var t = Za(e); t !== null && t.tag === 5 && t.type === "form" ? kf(t) : Rs.r(e); }
    var kl = typeof document > "u" ? null : document;
    function ox(e, t, a) { var n = kl; if (n && typeof t == "string" && t) {
        var o = Vt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), cx.has(o) || (cx.add(o), e = { rel: e, crossOrigin: a, href: t }, n.querySelector(o) === null && (t = n.createElement("link"), ut(t, "link", e), nt(t), n.head.appendChild(t)));
    } }
    function Jb(e) { Rs.D(e), ox("dns-prefetch", e, null); }
    function Fb(e, t) { Rs.C(e, t), ox("preconnect", e, t); }
    function $b(e, t, a) { Rs.L(e, t, a); var n = kl; if (n && e && t) {
        var o = 'link[rel="preload"][as="' + Vt(t) + '"]';
        t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Vt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Vt(a.imageSizes) + '"]')) : o += '[href="' + Vt(e) + '"]';
        var d = o;
        switch (t) {
            case "style":
                d = Cl(e);
                break;
            case "script": d = Al(e);
        }
        Ft.has(d) || (e = x({ rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : e, as: t }, a), Ft.set(d, e), n.querySelector(o) !== null || t === "style" && n.querySelector(En(d)) || t === "script" && n.querySelector(Mn(d)) || (t = n.createElement("link"), ut(t, "link", e), nt(t), n.head.appendChild(t)));
    } }
    function Pb(e, t) { Rs.m(e, t); var a = kl; if (a && e) {
        var n = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Vt(n) + '"][href="' + Vt(e) + '"]', d = o;
        switch (n) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script": d = Al(e);
        }
        if (!Ft.has(d) && (e = x({ rel: "modulepreload", href: e }, t), Ft.set(d, e), a.querySelector(o) === null)) {
            switch (n) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script": if (a.querySelector(Mn(d)))
                    return;
            }
            n = a.createElement("link"), ut(n, "link", e), nt(n), a.head.appendChild(n);
        }
    } }
    function Ib(e, t, a) { Rs.S(e, t, a); var n = kl; if (n && e) {
        var o = Ja(n).hoistableStyles, d = Cl(e);
        t = t || "default";
        var f = o.get(d);
        if (!f) {
            var p = { loading: 0, preload: null };
            if (f = n.querySelector(En(d)))
                p.loading = 5;
            else {
                e = x({ rel: "stylesheet", href: e, "data-precedence": t }, a), (a = Ft.get(d)) && fd(e, a);
                var S = f = n.createElement("link");
                nt(S), ut(S, "link", e), S._p = new Promise(function (O, H) { S.onload = O, S.onerror = H; }), S.addEventListener("load", function () { p.loading |= 1; }), S.addEventListener("error", function () { p.loading |= 2; }), p.loading |= 4, ii(f, t, n);
            }
            f = { type: "stylesheet", instance: f, count: 1, state: p }, o.set(d, f);
        }
    } }
    function Wb(e, t) { Rs.X(e, t); var a = kl; if (a && e) {
        var n = Ja(a).hoistableScripts, o = Al(e), d = n.get(o);
        d || (d = a.querySelector(Mn(o)), d || (e = x({ src: e, async: !0 }, t), (t = Ft.get(o)) && hd(e, t), d = a.createElement("script"), nt(d), ut(d, "link", e), a.head.appendChild(d)), d = { type: "script", instance: d, count: 1, state: null }, n.set(o, d));
    } }
    function ey(e, t) { Rs.M(e, t); var a = kl; if (a && e) {
        var n = Ja(a).hoistableScripts, o = Al(e), d = n.get(o);
        d || (d = a.querySelector(Mn(o)), d || (e = x({ src: e, async: !0, type: "module" }, t), (t = Ft.get(o)) && hd(e, t), d = a.createElement("script"), nt(d), ut(d, "link", e), a.head.appendChild(d)), d = { type: "script", instance: d, count: 1, state: null }, n.set(o, d));
    } }
    function dx(e, t, a, n) { var o = (o = Wt.current) ? ri(o) : null; if (!o)
        throw Error(c(446)); switch (e) {
        case "meta":
        case "title": return null;
        case "style": return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Cl(a.href), a = Ja(o).hoistableStyles, n = a.get(t), n || (n = { type: "style", instance: null, count: 0, state: null }, a.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                e = Cl(a.href);
                var d = Ja(o).hoistableStyles, f = d.get(e);
                if (f || (o = o.ownerDocument || o, f = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, d.set(e, f), (d = o.querySelector(En(e))) && !d._p && (f.instance = d, f.state.loading = 5), Ft.has(e) || (a = { rel: "preload", as: "style", href: a.href, crossOrigin: a.crossOrigin, integrity: a.integrity, media: a.media, hrefLang: a.hrefLang, referrerPolicy: a.referrerPolicy }, Ft.set(e, a), d || ty(o, e, a, f.state))), t && n === null)
                    throw Error(c(528, ""));
                return f;
            }
            if (t && n !== null)
                throw Error(c(529, ""));
            return null;
        case "script": return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Al(a), a = Ja(o).hoistableScripts, n = a.get(t), n || (n = { type: "script", instance: null, count: 0, state: null }, a.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
        default: throw Error(c(444, e));
    } }
    function Cl(e) { return 'href="' + Vt(e) + '"'; }
    function En(e) { return 'link[rel="stylesheet"][' + e + "]"; }
    function ux(e) { return x({}, e, { "data-precedence": e.precedence, precedence: null }); }
    function ty(e, t, a, n) { e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function () { return n.loading |= 1; }), t.addEventListener("error", function () { return n.loading |= 2; }), ut(t, "link", a), nt(t), e.head.appendChild(t)); }
    function Al(e) { return '[src="' + Vt(e) + '"]'; }
    function Mn(e) { return "script[async]" + e; }
    function mx(e, t, a) { if (t.count++, t.instance === null)
        switch (t.type) {
            case "style":
                var n = e.querySelector('style[data-href~="' + Vt(a.href) + '"]');
                if (n)
                    return t.instance = n, nt(n), n;
                var o = x({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null });
                return n = (e.ownerDocument || e).createElement("style"), nt(n), ut(n, "style", o), ii(n, a.precedence, e), t.instance = n;
            case "stylesheet":
                o = Cl(a.href);
                var d = e.querySelector(En(o));
                if (d)
                    return t.state.loading |= 4, t.instance = d, nt(d), d;
                n = ux(a), (o = Ft.get(o)) && fd(n, o), d = (e.ownerDocument || e).createElement("link"), nt(d);
                var f = d;
                return f._p = new Promise(function (p, S) { f.onload = p, f.onerror = S; }), ut(d, "link", n), t.state.loading |= 4, ii(d, a.precedence, e), t.instance = d;
            case "script": return d = Al(a.src), (o = e.querySelector(Mn(d))) ? (t.instance = o, nt(o), o) : (n = a, (o = Ft.get(d)) && (n = x({}, a), hd(n, o)), e = e.ownerDocument || e, o = e.createElement("script"), nt(o), ut(o, "link", n), e.head.appendChild(o), t.instance = o);
            case "void": return null;
            default: throw Error(c(443, t.type));
        }
    else
        t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, ii(n, a.precedence, e)); return t.instance; }
    function ii(e, t, a) { for (var n = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = n.length ? n[n.length - 1] : null, d = o, f = 0; f < n.length; f++) {
        var p = n[f];
        if (p.dataset.precedence === t)
            d = p;
        else if (d !== o)
            break;
    } d ? d.parentNode.insertBefore(e, d.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild)); }
    function fd(e, t) { e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title); }
    function hd(e, t) { e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity); }
    var ci = null;
    function fx(e, t, a) { if (ci === null) {
        var n = new Map, o = ci = new Map;
        o.set(a, n);
    }
    else
        o = ci, n = o.get(a), n || (n = new Map, o.set(a, n)); if (n.has(e))
        return n; for (n.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var d = a[o];
        if (!(d[Yl] || d[it] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
            var f = d.getAttribute(t) || "";
            f = e + f;
            var p = n.get(f);
            p ? p.push(d) : n.set(f, [d]);
        }
    } return n; }
    function hx(e, t, a) { e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null); }
    function sy(e, t, a) { if (a === 1 || t.itemProp != null)
        return !1; switch (e) {
        case "meta":
        case "title": return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
                case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
                default: return !0;
            }
        case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
            return !0;
    } return !1; }
    function xx(e) { return !(e.type === "stylesheet" && (e.state.loading & 3) === 0); }
    function ay(e, t, a, n) { if (a.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (a.state.loading & 4) === 0) {
        if (a.instance === null) {
            var o = Cl(n.href), d = t.querySelector(En(o));
            if (d) {
                t = d._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = oi.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = d, nt(d);
                return;
            }
            d = t.ownerDocument || t, n = ux(n), (o = Ft.get(o)) && fd(n, o), d = d.createElement("link"), nt(d);
            var f = d;
            f._p = new Promise(function (p, S) { f.onload = p, f.onerror = S; }), ut(d, "link", n), a.instance = d;
        }
        e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = oi.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    } }
    var xd = 0;
    function ly(e, t) { return e.stylesheets && e.count === 0 && ui(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function (a) { var n = setTimeout(function () { if (e.stylesheets && ui(e, e.stylesheets), e.unsuspend) {
        var d = e.unsuspend;
        e.unsuspend = null, d();
    } }, 6e4 + t); 0 < e.imgBytes && xd === 0 && (xd = 62500 * Ub()); var o = setTimeout(function () { if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ui(e, e.stylesheets), e.unsuspend)) {
        var d = e.unsuspend;
        e.unsuspend = null, d();
    } }, (e.imgBytes > xd ? 50 : 800) + t); return e.unsuspend = a, function () { e.unsuspend = null, clearTimeout(n), clearTimeout(o); }; } : null; }
    function oi() { if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
            ui(this, this.stylesheets);
        else if (this.unsuspend) {
            var e = this.unsuspend;
            this.unsuspend = null, e();
        }
    } }
    var di = null;
    function ui(e, t) { e.stylesheets = null, e.unsuspend !== null && (e.count++, di = new Map, t.forEach(ny, e), di = null, oi.call(e)); }
    function ny(e, t) { if (!(t.state.loading & 4)) {
        var a = di.get(e);
        if (a)
            var n = a.get(null);
        else {
            a = new Map, di.set(e, a);
            for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), d = 0; d < o.length; d++) {
                var f = o[d];
                (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), n = f);
            }
            n && a.set(null, n);
        }
        o = t.instance, f = o.getAttribute("data-precedence"), d = a.get(f) || n, d === n && a.set(null, o), a.set(f, o), this.count++, n = oi.bind(this), o.addEventListener("load", n), o.addEventListener("error", n), d ? d.parentNode.insertBefore(o, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    } }
    var _n = { $$typeof: G, Provider: null, Consumer: null, _currentValue: K, _currentValue2: K, _threadCount: 0 };
    function ry(e, t, a, n, o, d, f, p, S) { this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = oc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = oc(0), this.hiddenUpdates = oc(null), this.identifierPrefix = n, this.onUncaughtError = o, this.onCaughtError = d, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = new Map; }
    function px(e, t, a, n, o, d, f, p, S, O, H, Q) { return e = new ry(e, t, a, f, S, O, H, Q, p), t = 1, d === !0 && (t |= 24), d = Et(3, null, null, t), e.current = d, d.stateNode = e, t = Zc(), t.refCount++, e.pooledCache = t, t.refCount++, d.memoizedState = { element: n, isDehydrated: a, cache: t }, Pc(d), e; }
    function gx(e) { return e ? (e = ll, e) : ll; }
    function bx(e, t, a, n, o, d) { o = gx(o), n.context === null ? n.context = o : n.pendingContext = o, n = $s(t), n.payload = { element: a }, d = d === void 0 ? null : d, d !== null && (n.callback = d), a = Ps(e, n, t), a !== null && (Nt(a, e, t), on(a, e, t)); }
    function yx(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
    } }
    function pd(e, t) { yx(e, t), (e = e.alternate) && yx(e, t); }
    function vx(e) { if (e.tag === 13 || e.tag === 31) {
        var t = Ca(e, 67108864);
        t !== null && Nt(t, e, 67108864), pd(e, 67108864);
    } }
    function jx(e) { if (e.tag === 13 || e.tag === 31) {
        var t = zt();
        t = dc(t);
        var a = Ca(e, t);
        a !== null && Nt(a, e, t), pd(e, t);
    } }
    var mi = !0;
    function iy(e, t, a, n) { var o = E.T; E.T = null; var d = $.p; try {
        $.p = 2, gd(e, t, a, n);
    }
    finally {
        $.p = d, E.T = o;
    } }
    function cy(e, t, a, n) { var o = E.T; E.T = null; var d = $.p; try {
        $.p = 8, gd(e, t, a, n);
    }
    finally {
        $.p = d, E.T = o;
    } }
    function gd(e, t, a, n) { if (mi) {
        var o = bd(n);
        if (o === null)
            ad(e, t, n, fi, a), wx(e, n);
        else if (dy(o, e, t, a, n))
            n.stopPropagation();
        else if (wx(e, n), t & 4 && -1 < oy.indexOf(e)) {
            for (; o !== null;) {
                var d = Za(o);
                if (d !== null)
                    switch (d.tag) {
                        case 3:
                            if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                                var f = ja(d.pendingLanes);
                                if (f !== 0) {
                                    var p = d;
                                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; f;) {
                                        var S = 1 << 31 - At(f);
                                        p.entanglements[1] |= S, f &= ~S;
                                    }
                                    ms(d), (Se & 6) === 0 && (Fr = kt() + 500, kn(0));
                                }
                            }
                            break;
                        case 31:
                        case 13: p = Ca(d, 2), p !== null && Nt(p, d, 2), Pr(), pd(d, 2);
                    }
                if (d = bd(n), d === null && ad(e, t, n, fi, a), d === o)
                    break;
                o = d;
            }
            o !== null && n.stopPropagation();
        }
        else
            ad(e, t, n, null, a);
    } }
    function bd(e) { return e = yc(e), yd(e); }
    var fi = null;
    function yd(e) { if (fi = null, e = Xa(e), e !== null) {
        var t = m(e);
        if (t === null)
            e = null;
        else {
            var a = t.tag;
            if (a === 13) {
                if (e = h(t), e !== null)
                    return e;
                e = null;
            }
            else if (a === 31) {
                if (e = g(t), e !== null)
                    return e;
                e = null;
            }
            else if (a === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null;
            }
            else
                t !== e && (e = null);
        }
    } return fi = e, null; }
    function Nx(e) { switch (e) {
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
        case "message": switch (Jg()) {
            case Eu: return 2;
            case Mu: return 8;
            case sr:
            case Fg: return 32;
            case _u: return 268435456;
            default: return 32;
        }
        default: return 32;
    } }
    var vd = !1, ca = null, oa = null, da = null, On = new Map, Dn = new Map, ua = [], oy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function wx(e, t) { switch (e) {
        case "focusin":
        case "focusout":
            ca = null;
            break;
        case "dragenter":
        case "dragleave":
            oa = null;
            break;
        case "mouseover":
        case "mouseout":
            da = null;
            break;
        case "pointerover":
        case "pointerout":
            On.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture": Dn.delete(t.pointerId);
    } }
    function zn(e, t, a, n, o, d) { return e === null || e.nativeEvent !== d ? (e = { blockedOn: t, domEventName: a, eventSystemFlags: n, nativeEvent: d, targetContainers: [o] }, t !== null && (t = Za(t), t !== null && vx(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e); }
    function dy(e, t, a, n, o) { switch (t) {
        case "focusin": return ca = zn(ca, e, t, a, n, o), !0;
        case "dragenter": return oa = zn(oa, e, t, a, n, o), !0;
        case "mouseover": return da = zn(da, e, t, a, n, o), !0;
        case "pointerover":
            var d = o.pointerId;
            return On.set(d, zn(On.get(d) || null, e, t, a, n, o)), !0;
        case "gotpointercapture": return d = o.pointerId, Dn.set(d, zn(Dn.get(d) || null, e, t, a, n, o)), !0;
    } return !1; }
    function Sx(e) { var t = Xa(e.target); if (t !== null) {
        var a = m(t);
        if (a !== null) {
            if (t = a.tag, t === 13) {
                if (t = h(a), t !== null) {
                    e.blockedOn = t, qu(e.priority, function () { jx(a); });
                    return;
                }
            }
            else if (t === 31) {
                if (t = g(a), t !== null) {
                    e.blockedOn = t, qu(e.priority, function () { jx(a); });
                    return;
                }
            }
            else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                return;
            }
        }
    } e.blockedOn = null; }
    function hi(e) { if (e.blockedOn !== null)
        return !1; for (var t = e.targetContainers; 0 < t.length;) {
        var a = bd(e.nativeEvent);
        if (a === null) {
            a = e.nativeEvent;
            var n = new a.constructor(a.type, a);
            bc = n, a.target.dispatchEvent(n), bc = null;
        }
        else
            return t = Za(a), t !== null && vx(t), e.blockedOn = a, !1;
        t.shift();
    } return !0; }
    function kx(e, t, a) { hi(e) && a.delete(t); }
    function uy() { vd = !1, ca !== null && hi(ca) && (ca = null), oa !== null && hi(oa) && (oa = null), da !== null && hi(da) && (da = null), On.forEach(kx), Dn.forEach(kx); }
    function xi(e, t) { e.blockedOn === t && (e.blockedOn = null, vd || (vd = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, uy))); }
    var pi = null;
    function Cx(e) { pi !== e && (pi = e, l.unstable_scheduleCallback(l.unstable_NormalPriority, function () { pi === e && (pi = null); for (var t = 0; t < e.length; t += 3) {
        var a = e[t], n = e[t + 1], o = e[t + 2];
        if (typeof n != "function") {
            if (yd(n || a) === null)
                continue;
            break;
        }
        var d = Za(a);
        d !== null && (e.splice(t, 3), t -= 3, bo(d, { pending: !0, data: o, method: a.method, action: n }, n, o));
    } })); }
    function Tl(e) { function t(S) { return xi(S, e); } ca !== null && xi(ca, e), oa !== null && xi(oa, e), da !== null && xi(da, e), On.forEach(t), Dn.forEach(t); for (var a = 0; a < ua.length; a++) {
        var n = ua[a];
        n.blockedOn === e && (n.blockedOn = null);
    } for (; 0 < ua.length && (a = ua[0], a.blockedOn === null);)
        Sx(a), a.blockedOn === null && ua.shift(); if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (n = 0; n < a.length; n += 3) {
            var o = a[n], d = a[n + 1], f = o[pt] || null;
            if (typeof d == "function")
                f || Cx(a);
            else if (f) {
                var p = null;
                if (d && d.hasAttribute("formAction")) {
                    if (o = d, f = d[pt] || null)
                        p = f.formAction;
                    else if (yd(o) !== null)
                        continue;
                }
                else
                    p = f.action;
                typeof p == "function" ? a[n + 1] = p : (a.splice(n, 3), n -= 3), Cx(a);
            }
        } }
    function Ax() { function e(d) { d.canIntercept && d.info === "react-transition" && d.intercept({ handler: function () { return new Promise(function (f) { return o = f; }); }, focusReset: "manual", scroll: "manual" }); } function t() { o !== null && (o(), o = null), n || setTimeout(a, 20); } function a() { if (!n && !navigation.transition) {
        var d = navigation.currentEntry;
        d && d.url != null && navigation.navigate(d.url, { state: d.getState(), info: "react-transition", history: "replace" });
    } } if (typeof navigation == "object") {
        var n = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function () { n = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null); };
    } }
    function jd(e) { this._internalRoot = e; }
    gi.prototype.render = jd.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
        throw Error(c(409)); var a = t.current, n = zt(); bx(a, n, e, t, null, null); }, gi.prototype.unmount = jd.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        bx(e.current, 2, null, e, null, null), Pr(), t[Ya] = null;
    } };
    function gi(e) { this._internalRoot = e; }
    gi.prototype.unstable_scheduleHydration = function (e) { if (e) {
        var t = Bu();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < ua.length && t !== 0 && t < ua[a].priority; a++)
            ;
        ua.splice(a, 0, e), a === 0 && Sx(e);
    } };
    var Tx = r.version;
    if (Tx !== "19.2.3")
        throw Error(c(527, Tx, "19.2.3"));
    $.findDOMNode = function (e) { var t = e._reactInternals; if (t === void 0)
        throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e))); return e = y(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e; };
    var my = { bundleType: 0, version: "19.2.3", rendererPackageName: "react-dom", currentDispatcherRef: E, reconcilerVersion: "19.2.3" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!bi.isDisabled && bi.supportsFiber)
            try {
                Gl = bi.inject(my), Ct = bi;
            }
            catch { }
    }
    return Rn.createRoot = function (e, t) { if (!u(e))
        throw Error(c(299)); var a = !1, n = "", o = Rf, d = Bf, f = qf; return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (d = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = px(e, 1, !1, null, null, a, n, null, o, d, f, Ax), e[Ya] = t.current, sd(e), new jd(t); }, Rn.hydrateRoot = function (e, t, a) { if (!u(e))
        throw Error(c(299)); var n = !1, o = "", d = Rf, f = Bf, p = qf, S = null; return a != null && (a.unstable_strictMode === !0 && (n = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (d = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (p = a.onRecoverableError), a.formState !== void 0 && (S = a.formState)), t = px(e, 1, !0, t, a ?? null, n, o, S, d, f, p, Ax), t.context = gx(null), a = t.current, n = zt(), n = dc(n), o = $s(n), o.callback = null, Ps(a, o, n), a = n, t.current.lanes = a, Kl(t, a), ms(t), e[Ya] = t.current, sd(e), new gi(t); }, Rn.version = "19.2.3", Rn;
}
var Ox;
function Ty() { if (Ox)
    return Nd.exports; Ox = 1; function l() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
    }
    catch (r) {
        console.error(r);
    } } return l(), Nd.exports = Ay(), Nd.exports; }
var Ey = Ty();
const My = by(Ey), ps = Object.create(null);
ps.open = "0";
ps.close = "1";
ps.ping = "2";
ps.pong = "3";
ps.message = "4";
ps.upgrade = "5";
ps.noop = "6";
const ki = Object.create(null);
Object.keys(ps).forEach(l => { ki[ps[l]] = l; });
const Vd = { type: "error", data: "parser error" }, jp = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Np = typeof ArrayBuffer == "function", wp = l => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(l) : l && l.buffer instanceof ArrayBuffer, tu = ({ type: l, data: r }, i, c) => jp && r instanceof Blob ? i ? c(r) : Dx(r, c) : Np && (r instanceof ArrayBuffer || wp(r)) ? i ? c(r) : Dx(new Blob([r]), c) : c(ps[l] + (r || "")), Dx = (l, r) => { const i = new FileReader; return i.onload = function () { const c = i.result.split(",")[1]; r("b" + (c || "")); }, i.readAsDataURL(l); };
function zx(l) { return l instanceof Uint8Array ? l : l instanceof ArrayBuffer ? new Uint8Array(l) : new Uint8Array(l.buffer, l.byteOffset, l.byteLength); }
let kd;
function _y(l, r) { if (jp && l.data instanceof Blob)
    return l.data.arrayBuffer().then(zx).then(r); if (Np && (l.data instanceof ArrayBuffer || wp(l.data)))
    return r(zx(l.data)); tu(l, !1, i => { kd || (kd = new TextEncoder), r(kd.encode(i)); }); }
const Rx = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Hn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let l = 0; l < Rx.length; l++)
    Hn[Rx.charCodeAt(l)] = l;
const Oy = l => { let r = l.length * .75, i = l.length, c, u = 0, m, h, g, b; l[l.length - 1] === "=" && (r--, l[l.length - 2] === "=" && r--); const y = new ArrayBuffer(r), v = new Uint8Array(y); for (c = 0; c < i; c += 4)
    m = Hn[l.charCodeAt(c)], h = Hn[l.charCodeAt(c + 1)], g = Hn[l.charCodeAt(c + 2)], b = Hn[l.charCodeAt(c + 3)], v[u++] = m << 2 | h >> 4, v[u++] = (h & 15) << 4 | g >> 2, v[u++] = (g & 3) << 6 | b & 63; return y; }, Dy = typeof ArrayBuffer == "function", su = (l, r) => { if (typeof l != "string")
    return { type: "message", data: Sp(l, r) }; const i = l.charAt(0); return i === "b" ? { type: "message", data: zy(l.substring(1), r) } : ki[i] ? l.length > 1 ? { type: ki[i], data: l.substring(1) } : { type: ki[i] } : Vd; }, zy = (l, r) => { if (Dy) {
    const i = Oy(l);
    return Sp(i, r);
}
else
    return { base64: !0, data: l }; }, Sp = (l, r) => { switch (r) {
    case "blob": return l instanceof Blob ? l : new Blob([l]);
    case "arraybuffer":
    default: return l instanceof ArrayBuffer ? l : l.buffer;
} }, kp = "", Ry = (l, r) => { const i = l.length, c = new Array(i); let u = 0; l.forEach((m, h) => { tu(m, !1, g => { c[h] = g, ++u === i && r(c.join(kp)); }); }); }, By = (l, r) => { const i = l.split(kp), c = []; for (let u = 0; u < i.length; u++) {
    const m = su(i[u], r);
    if (c.push(m), m.type === "error")
        break;
} return c; };
function qy() { return new TransformStream({ transform(l, r) { _y(l, i => { const c = i.length; let u; if (c < 126)
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
    } l.data && typeof l.data != "string" && (u[0] |= 128), r.enqueue(u), r.enqueue(i); }); } }); }
let Cd;
function yi(l) { return l.reduce((r, i) => r + i.length, 0); }
function vi(l, r) { if (l[0].length === r)
    return l.shift(); const i = new Uint8Array(r); let c = 0; for (let u = 0; u < r; u++)
    i[u] = l[0][c++], c === l[0].length && (l.shift(), c = 0); return l.length && c < l[0].length && (l[0] = l[0].slice(c)), i; }
function Uy(l, r) { Cd || (Cd = new TextDecoder); const i = []; let c = 0, u = -1, m = !1; return new TransformStream({ transform(h, g) { for (i.push(h);;) {
        if (c === 0) {
            if (yi(i) < 1)
                break;
            const b = vi(i, 1);
            m = (b[0] & 128) === 128, u = b[0] & 127, u < 126 ? c = 3 : u === 126 ? c = 1 : c = 2;
        }
        else if (c === 1) {
            if (yi(i) < 2)
                break;
            const b = vi(i, 2);
            u = new DataView(b.buffer, b.byteOffset, b.length).getUint16(0), c = 3;
        }
        else if (c === 2) {
            if (yi(i) < 8)
                break;
            const b = vi(i, 8), y = new DataView(b.buffer, b.byteOffset, b.length), v = y.getUint32(0);
            if (v > Math.pow(2, 21) - 1) {
                g.enqueue(Vd);
                break;
            }
            u = v * Math.pow(2, 32) + y.getUint32(4), c = 3;
        }
        else {
            if (yi(i) < u)
                break;
            const b = vi(i, u);
            g.enqueue(su(m ? b : Cd.decode(b), r)), c = 0;
        }
        if (u === 0 || u > l) {
            g.enqueue(Vd);
            break;
        }
    } } }); }
const Cp = 4;
function et(l) { if (l)
    return Ly(l); }
function Ly(l) { for (var r in et.prototype)
    l[r] = et.prototype[r]; return l; }
et.prototype.on = et.prototype.addEventListener = function (l, r) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + l] = this._callbacks["$" + l] || []).push(r), this; };
et.prototype.once = function (l, r) { function i() { this.off(l, i), r.apply(this, arguments); } return i.fn = r, this.on(l, i), this; };
et.prototype.off = et.prototype.removeListener = et.prototype.removeAllListeners = et.prototype.removeEventListener = function (l, r) { if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this; var i = this._callbacks["$" + l]; if (!i)
    return this; if (arguments.length == 1)
    return delete this._callbacks["$" + l], this; for (var c, u = 0; u < i.length; u++)
    if (c = i[u], c === r || c.fn === r) {
        i.splice(u, 1);
        break;
    } return i.length === 0 && delete this._callbacks["$" + l], this; };
et.prototype.emit = function (l) { this._callbacks = this._callbacks || {}; for (var r = new Array(arguments.length - 1), i = this._callbacks["$" + l], c = 1; c < arguments.length; c++)
    r[c - 1] = arguments[c]; if (i) {
    i = i.slice(0);
    for (var c = 0, u = i.length; c < u; ++c)
        i[c].apply(this, r);
} return this; };
et.prototype.emitReserved = et.prototype.emit;
et.prototype.listeners = function (l) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + l] || []; };
et.prototype.hasListeners = function (l) { return !!this.listeners(l).length; };
const Ki = typeof Promise == "function" && typeof Promise.resolve == "function" ? r => Promise.resolve().then(r) : (r, i) => i(r, 0), Pt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Hy = "arraybuffer";
function Ap(l, ...r) { return r.reduce((i, c) => (l.hasOwnProperty(c) && (i[c] = l[c]), i), {}); }
const Vy = Pt.setTimeout, Gy = Pt.clearTimeout;
function Yi(l, r) { r.useNativeTimers ? (l.setTimeoutFn = Vy.bind(Pt), l.clearTimeoutFn = Gy.bind(Pt)) : (l.setTimeoutFn = Pt.setTimeout.bind(Pt), l.clearTimeoutFn = Pt.clearTimeout.bind(Pt)); }
const Qy = 1.33;
function Ky(l) { return typeof l == "string" ? Yy(l) : Math.ceil((l.byteLength || l.size) * Qy); }
function Yy(l) { let r = 0, i = 0; for (let c = 0, u = l.length; c < u; c++)
    r = l.charCodeAt(c), r < 128 ? i += 1 : r < 2048 ? i += 2 : r < 55296 || r >= 57344 ? i += 3 : (c++, i += 4); return i; }
function Tp() { return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5); }
function Xy(l) { let r = ""; for (let i in l)
    l.hasOwnProperty(i) && (r.length && (r += "&"), r += encodeURIComponent(i) + "=" + encodeURIComponent(l[i])); return r; }
function Zy(l) { let r = {}, i = l.split("&"); for (let c = 0, u = i.length; c < u; c++) {
    let m = i[c].split("=");
    r[decodeURIComponent(m[0])] = decodeURIComponent(m[1]);
} return r; }
class Jy extends Error {
    constructor(r, i, c) { super(r), this.description = i, this.context = c, this.type = "TransportError"; }
}
class au extends et {
    constructor(r) { super(), this.writable = !1, Yi(this, r), this.opts = r, this.query = r.query, this.socket = r.socket, this.supportsBinary = !r.forceBase64; }
    onError(r, i, c) { return super.emitReserved("error", new Jy(r, i, c)), this; }
    open() { return this.readyState = "opening", this.doOpen(), this; }
    close() { return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this; }
    send(r) { this.readyState === "open" && this.write(r); }
    onOpen() { this.readyState = "open", this.writable = !0, super.emitReserved("open"); }
    onData(r) { const i = su(r, this.socket.binaryType); this.onPacket(i); }
    onPacket(r) { super.emitReserved("packet", r); }
    onClose(r) { this.readyState = "closed", super.emitReserved("close", r); }
    pause(r) { }
    createUri(r, i = {}) { return r + "://" + this._hostname() + this._port() + this.opts.path + this._query(i); }
    _hostname() { const r = this.opts.hostname; return r.indexOf(":") === -1 ? r : "[" + r + "]"; }
    _port() { return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""; }
    _query(r) { const i = Xy(r); return i.length ? "?" + i : ""; }
}
class Fy extends au {
    constructor() { super(...arguments), this._polling = !1; }
    get name() { return "polling"; }
    doOpen() { this._poll(); }
    pause(r) { this.readyState = "pausing"; const i = () => { this.readyState = "paused", r(); }; if (this._polling || !this.writable) {
        let c = 0;
        this._polling && (c++, this.once("pollComplete", function () { --c || i(); })), this.writable || (c++, this.once("drain", function () { --c || i(); }));
    }
    else
        i(); }
    _poll() { this._polling = !0, this.doPoll(), this.emitReserved("poll"); }
    onData(r) { const i = c => { if (this.readyState === "opening" && c.type === "open" && this.onOpen(), c.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1; this.onPacket(c); }; By(r, this.socket.binaryType).forEach(i), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll()); }
    doClose() { const r = () => { this.write([{ type: "close" }]); }; this.readyState === "open" ? r() : this.once("open", r); }
    write(r) { this.writable = !1, Ry(r, i => { this.doWrite(i, () => { this.writable = !0, this.emitReserved("drain"); }); }); }
    uri() { const r = this.opts.secure ? "https" : "http", i = this.query || {}; return this.opts.timestampRequests !== !1 && (i[this.opts.timestampParam] = Tp()), !this.supportsBinary && !i.sid && (i.b64 = 1), this.createUri(r, i); }
}
let Ep = !1;
try {
    Ep = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest;
}
catch { }
const $y = Ep;
function Py() { }
class Iy extends Fy {
    constructor(r) { if (super(r), typeof location < "u") {
        const i = location.protocol === "https:";
        let c = location.port;
        c || (c = i ? "443" : "80"), this.xd = typeof location < "u" && r.hostname !== location.hostname || c !== r.port;
    } }
    doWrite(r, i) { const c = this.request({ method: "POST", data: r }); c.on("success", i), c.on("error", (u, m) => { this.onError("xhr post error", u, m); }); }
    doPoll() { const r = this.request(); r.on("data", this.onData.bind(this)), r.on("error", (i, c) => { this.onError("xhr poll error", i, c); }), this.pollXhr = r; }
}
class xs extends et {
    constructor(r, i, c) { super(), this.createRequest = r, Yi(this, c), this._opts = c, this._method = c.method || "GET", this._uri = i, this._data = c.data !== void 0 ? c.data : null, this._create(); }
    _create() { var r; const i = Ap(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref"); i.xdomain = !!this._opts.xd; const c = this._xhr = this.createRequest(i); try {
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
        (r = this._opts.cookieJar) === null || r === void 0 || r.addCookies(c), "withCredentials" in c && (c.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (c.timeout = this._opts.requestTimeout), c.onreadystatechange = () => { var u; c.readyState === 3 && ((u = this._opts.cookieJar) === null || u === void 0 || u.parseCookies(c.getResponseHeader("set-cookie"))), c.readyState === 4 && (c.status === 200 || c.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => { this._onError(typeof c.status == "number" ? c.status : 0); }, 0)); }, c.send(this._data);
    }
    catch (u) {
        this.setTimeoutFn(() => { this._onError(u); }, 0);
        return;
    } typeof document < "u" && (this._index = xs.requestsCount++, xs.requests[this._index] = this); }
    _onError(r) { this.emitReserved("error", r, this._xhr), this._cleanup(!0); }
    _cleanup(r) { if (!(typeof this._xhr > "u" || this._xhr === null)) {
        if (this._xhr.onreadystatechange = Py, r)
            try {
                this._xhr.abort();
            }
            catch { }
        typeof document < "u" && delete xs.requests[this._index], this._xhr = null;
    } }
    _onLoad() { const r = this._xhr.responseText; r !== null && (this.emitReserved("data", r), this.emitReserved("success"), this._cleanup()); }
    abort() { this._cleanup(); }
}
xs.requestsCount = 0;
xs.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", Bx);
    else if (typeof addEventListener == "function") {
        const l = "onpagehide" in Pt ? "pagehide" : "unload";
        addEventListener(l, Bx, !1);
    }
}
function Bx() { for (let l in xs.requests)
    xs.requests.hasOwnProperty(l) && xs.requests[l].abort(); }
const Wy = (function () { const l = Mp({ xdomain: !1 }); return l && l.responseType !== null; })();
class ev extends Iy {
    constructor(r) { super(r); const i = r && r.forceBase64; this.supportsBinary = Wy && !i; }
    request(r = {}) { return Object.assign(r, { xd: this.xd }, this.opts), new xs(Mp, this.uri(), r); }
}
function Mp(l) { const r = l.xdomain; try {
    if (typeof XMLHttpRequest < "u" && (!r || $y))
        return new XMLHttpRequest;
}
catch { } if (!r)
    try {
        return new Pt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    }
    catch { } }
const _p = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class tv extends au {
    get name() { return "websocket"; }
    doOpen() { const r = this.uri(), i = this.opts.protocols, c = _p ? {} : Ap(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity"); this.opts.extraHeaders && (c.headers = this.opts.extraHeaders); try {
        this.ws = this.createSocket(r, i, c);
    }
    catch (u) {
        return this.emitReserved("error", u);
    } this.ws.binaryType = this.socket.binaryType, this.addEventListeners(); }
    addEventListeners() { this.ws.onopen = () => { this.opts.autoUnref && this.ws._socket.unref(), this.onOpen(); }, this.ws.onclose = r => this.onClose({ description: "websocket connection closed", context: r }), this.ws.onmessage = r => this.onData(r.data), this.ws.onerror = r => this.onError("websocket error", r); }
    write(r) { this.writable = !1; for (let i = 0; i < r.length; i++) {
        const c = r[i], u = i === r.length - 1;
        tu(c, this.supportsBinary, m => { try {
            this.doWrite(c, m);
        }
        catch { } u && Ki(() => { this.writable = !0, this.emitReserved("drain"); }, this.setTimeoutFn); });
    } }
    doClose() { typeof this.ws < "u" && (this.ws.onerror = () => { }, this.ws.close(), this.ws = null); }
    uri() { const r = this.opts.secure ? "wss" : "ws", i = this.query || {}; return this.opts.timestampRequests && (i[this.opts.timestampParam] = Tp()), this.supportsBinary || (i.b64 = 1), this.createUri(r, i); }
}
const Ad = Pt.WebSocket || Pt.MozWebSocket;
class sv extends tv {
    createSocket(r, i, c) { return _p ? new Ad(r, i, c) : i ? new Ad(r, i) : new Ad(r); }
    doWrite(r, i) { this.ws.send(i); }
}
class av extends au {
    get name() { return "webtransport"; }
    doOpen() { try {
        this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    }
    catch (r) {
        return this.emitReserved("error", r);
    } this._transport.closed.then(() => { this.onClose(); }).catch(r => { this.onError("webtransport error", r); }), this._transport.ready.then(() => { this._transport.createBidirectionalStream().then(r => { const i = Uy(Number.MAX_SAFE_INTEGER, this.socket.binaryType), c = r.readable.pipeThrough(i).getReader(), u = qy(); u.readable.pipeTo(r.writable), this._writer = u.writable.getWriter(); const m = () => { c.read().then(({ done: g, value: b }) => { g || (this.onPacket(b), m()); }).catch(g => { }); }; m(); const h = { type: "open" }; this.query.sid && (h.data = `{"sid":"${this.query.sid}"}`), this._writer.write(h).then(() => this.onOpen()); }); }); }
    write(r) { this.writable = !1; for (let i = 0; i < r.length; i++) {
        const c = r[i], u = i === r.length - 1;
        this._writer.write(c).then(() => { u && Ki(() => { this.writable = !0, this.emitReserved("drain"); }, this.setTimeoutFn); });
    } }
    doClose() { var r; (r = this._transport) === null || r === void 0 || r.close(); }
}
const lv = { websocket: sv, webtransport: av, polling: ev }, nv = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, rv = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function Gd(l) { if (l.length > 8e3)
    throw "URI too long"; const r = l, i = l.indexOf("["), c = l.indexOf("]"); i != -1 && c != -1 && (l = l.substring(0, i) + l.substring(i, c).replace(/:/g, ";") + l.substring(c, l.length)); let u = nv.exec(l || ""), m = {}, h = 14; for (; h--;)
    m[rv[h]] = u[h] || ""; return i != -1 && c != -1 && (m.source = r, m.host = m.host.substring(1, m.host.length - 1).replace(/;/g, ":"), m.authority = m.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), m.ipv6uri = !0), m.pathNames = iv(m, m.path), m.queryKey = cv(m, m.query), m; }
function iv(l, r) { const i = /\/{2,9}/g, c = r.replace(i, "/").split("/"); return (r.slice(0, 1) == "/" || r.length === 0) && c.splice(0, 1), r.slice(-1) == "/" && c.splice(c.length - 1, 1), c; }
function cv(l, r) { const i = {}; return r.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (c, u, m) { u && (i[u] = m); }), i; }
const Qd = typeof addEventListener == "function" && typeof removeEventListener == "function", Ci = [];
Qd && addEventListener("offline", () => { Ci.forEach(l => l()); }, !1);
class ha extends et {
    constructor(r, i) { if (super(), this.binaryType = Hy, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, r && typeof r == "object" && (i = r, r = null), r) {
        const c = Gd(r);
        i.hostname = c.host, i.secure = c.protocol === "https" || c.protocol === "wss", i.port = c.port, c.query && (i.query = c.query);
    }
    else
        i.host && (i.hostname = Gd(i.host).host); Yi(this, i), this.secure = i.secure != null ? i.secure : typeof location < "u" && location.protocol === "https:", i.hostname && !i.port && (i.port = this.secure ? "443" : "80"), this.hostname = i.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = i.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, i.transports.forEach(c => { const u = c.prototype.name; this.transports.push(u), this._transportsByName[u] = c; }), this.opts = Object.assign({ path: "/engine.io", agent: !1, withCredentials: !1, upgrade: !0, timestampParam: "t", rememberUpgrade: !1, addTrailingSlash: !0, rejectUnauthorized: !0, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: !1 }, i), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Zy(this.opts.query)), Qd && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => { this.transport && (this.transport.removeAllListeners(), this.transport.close()); }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => { this._onClose("transport close", { description: "network connection lost" }); }, Ci.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open(); }
    createTransport(r) { const i = Object.assign({}, this.opts.query); i.EIO = Cp, i.transport = r, this.id && (i.sid = this.id); const c = Object.assign({}, this.opts, { query: i, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[r]); return new this._transportsByName[r](c); }
    _open() { if (this.transports.length === 0) {
        this.setTimeoutFn(() => { this.emitReserved("error", "No transports available"); }, 0);
        return;
    } const r = this.opts.rememberUpgrade && ha.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0]; this.readyState = "opening"; const i = this.createTransport(r); i.open(), this.setTransport(i); }
    setTransport(r) { this.transport && this.transport.removeAllListeners(), this.transport = r, r.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", i => this._onClose("transport close", i)); }
    onOpen() { this.readyState = "open", ha.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(); }
    _onPacket(r) { if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
        switch (this.emitReserved("packet", r), this.emitReserved("heartbeat"), r.type) {
            case "open":
                this.onHandshake(JSON.parse(r.data));
                break;
            case "ping":
                this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                break;
            case "error":
                const i = new Error("server error");
                i.code = r.data, this._onError(i);
                break;
            case "message":
                this.emitReserved("data", r.data), this.emitReserved("message", r.data);
                break;
        } }
    onHandshake(r) { this.emitReserved("handshake", r), this.id = r.sid, this.transport.query.sid = r.sid, this._pingInterval = r.pingInterval, this._pingTimeout = r.pingTimeout, this._maxPayload = r.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout(); }
    _resetPingTimeout() { this.clearTimeoutFn(this._pingTimeoutTimer); const r = this._pingInterval + this._pingTimeout; this._pingTimeoutTime = Date.now() + r, this._pingTimeoutTimer = this.setTimeoutFn(() => { this._onClose("ping timeout"); }, r), this.opts.autoUnref && this._pingTimeoutTimer.unref(); }
    _onDrain() { this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush(); }
    flush() { if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        const r = this._getWritablePackets();
        this.transport.send(r), this._prevBufferLen = r.length, this.emitReserved("flush");
    } }
    _getWritablePackets() { if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
        return this.writeBuffer; let i = 1; for (let c = 0; c < this.writeBuffer.length; c++) {
        const u = this.writeBuffer[c].data;
        if (u && (i += Ky(u)), c > 0 && i > this._maxPayload)
            return this.writeBuffer.slice(0, c);
        i += 2;
    } return this.writeBuffer; }
    _hasPingExpired() { if (!this._pingTimeoutTime)
        return !0; const r = Date.now() > this._pingTimeoutTime; return r && (this._pingTimeoutTime = 0, Ki(() => { this._onClose("ping timeout"); }, this.setTimeoutFn)), r; }
    write(r, i, c) { return this._sendPacket("message", r, i, c), this; }
    send(r, i, c) { return this._sendPacket("message", r, i, c), this; }
    _sendPacket(r, i, c, u) { if (typeof i == "function" && (u = i, i = void 0), typeof c == "function" && (u = c, c = null), this.readyState === "closing" || this.readyState === "closed")
        return; c = c || {}, c.compress = c.compress !== !1; const m = { type: r, data: i, options: c }; this.emitReserved("packetCreate", m), this.writeBuffer.push(m), u && this.once("flush", u), this.flush(); }
    close() { const r = () => { this._onClose("forced close"), this.transport.close(); }, i = () => { this.off("upgrade", i), this.off("upgradeError", i), r(); }, c = () => { this.once("upgrade", i), this.once("upgradeError", i); }; return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => { this.upgrading ? c() : r(); }) : this.upgrading ? c() : r()), this; }
    _onError(r) { if (ha.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
        return this.transports.shift(), this._open(); this.emitReserved("error", r), this._onClose("transport error", r); }
    _onClose(r, i) { if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
        if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Qd && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
            const c = Ci.indexOf(this._offlineEventListener);
            c !== -1 && Ci.splice(c, 1);
        }
        this.readyState = "closed", this.id = null, this.emitReserved("close", r, i), this.writeBuffer = [], this._prevBufferLen = 0;
    } }
}
ha.protocol = Cp;
class ov extends ha {
    constructor() { super(...arguments), this._upgrades = []; }
    onOpen() { if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
        for (let r = 0; r < this._upgrades.length; r++)
            this._probe(this._upgrades[r]); }
    _probe(r) { let i = this.createTransport(r), c = !1; ha.priorWebsocketSuccess = !1; const u = () => { c || (i.send([{ type: "ping", data: "probe" }]), i.once("packet", x => { if (!c)
        if (x.type === "pong" && x.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", i), !i)
                return;
            ha.priorWebsocketSuccess = i.name === "websocket", this.transport.pause(() => { c || this.readyState !== "closed" && (v(), this.setTransport(i), i.send([{ type: "upgrade" }]), this.emitReserved("upgrade", i), i = null, this.upgrading = !1, this.flush()); });
        }
        else {
            const j = new Error("probe error");
            j.transport = i.name, this.emitReserved("upgradeError", j);
        } })); }; function m() { c || (c = !0, v(), i.close(), i = null); } const h = x => { const j = new Error("probe error: " + x); j.transport = i.name, m(), this.emitReserved("upgradeError", j); }; function g() { h("transport closed"); } function b() { h("socket closed"); } function y(x) { i && x.name !== i.name && m(); } const v = () => { i.removeListener("open", u), i.removeListener("error", h), i.removeListener("close", g), this.off("close", b), this.off("upgrading", y); }; i.once("open", u), i.once("error", h), i.once("close", g), this.once("close", b), this.once("upgrading", y), this._upgrades.indexOf("webtransport") !== -1 && r !== "webtransport" ? this.setTimeoutFn(() => { c || i.open(); }, 200) : i.open(); }
    onHandshake(r) { this._upgrades = this._filterUpgrades(r.upgrades), super.onHandshake(r); }
    _filterUpgrades(r) { const i = []; for (let c = 0; c < r.length; c++)
        ~this.transports.indexOf(r[c]) && i.push(r[c]); return i; }
}
let dv = class extends ov {
    constructor(r, i = {}) { const c = typeof r == "object" ? r : i; (!c.transports || c.transports && typeof c.transports[0] == "string") && (c.transports = (c.transports || ["polling", "websocket", "webtransport"]).map(u => lv[u]).filter(u => !!u)), super(r, c); }
};
function uv(l, r = "", i) { let c = l; i = i || typeof location < "u" && location, l == null && (l = i.protocol + "//" + i.host), typeof l == "string" && (l.charAt(0) === "/" && (l.charAt(1) === "/" ? l = i.protocol + l : l = i.host + l), /^(https?|wss?):\/\//.test(l) || (typeof i < "u" ? l = i.protocol + "//" + l : l = "https://" + l), c = Gd(l)), c.port || (/^(http|ws)$/.test(c.protocol) ? c.port = "80" : /^(http|ws)s$/.test(c.protocol) && (c.port = "443")), c.path = c.path || "/"; const m = c.host.indexOf(":") !== -1 ? "[" + c.host + "]" : c.host; return c.id = c.protocol + "://" + m + ":" + c.port + r, c.href = c.protocol + "://" + m + (i && i.port === c.port ? "" : ":" + c.port), c; }
const mv = typeof ArrayBuffer == "function", fv = l => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(l) : l.buffer instanceof ArrayBuffer, Op = Object.prototype.toString, hv = typeof Blob == "function" || typeof Blob < "u" && Op.call(Blob) === "[object BlobConstructor]", xv = typeof File == "function" || typeof File < "u" && Op.call(File) === "[object FileConstructor]";
function lu(l) { return mv && (l instanceof ArrayBuffer || fv(l)) || hv && l instanceof Blob || xv && l instanceof File; }
function Ai(l, r) { if (!l || typeof l != "object")
    return !1; if (Array.isArray(l)) {
    for (let i = 0, c = l.length; i < c; i++)
        if (Ai(l[i]))
            return !0;
    return !1;
} if (lu(l))
    return !0; if (l.toJSON && typeof l.toJSON == "function" && arguments.length === 1)
    return Ai(l.toJSON(), !0); for (const i in l)
    if (Object.prototype.hasOwnProperty.call(l, i) && Ai(l[i]))
        return !0; return !1; }
function pv(l) { const r = [], i = l.data, c = l; return c.data = Kd(i, r), c.attachments = r.length, { packet: c, buffers: r }; }
function Kd(l, r) { if (!l)
    return l; if (lu(l)) {
    const i = { _placeholder: !0, num: r.length };
    return r.push(l), i;
}
else if (Array.isArray(l)) {
    const i = new Array(l.length);
    for (let c = 0; c < l.length; c++)
        i[c] = Kd(l[c], r);
    return i;
}
else if (typeof l == "object" && !(l instanceof Date)) {
    const i = {};
    for (const c in l)
        Object.prototype.hasOwnProperty.call(l, c) && (i[c] = Kd(l[c], r));
    return i;
} return l; }
function gv(l, r) { return l.data = Yd(l.data, r), delete l.attachments, l; }
function Yd(l, r) { if (!l)
    return l; if (l && l._placeholder === !0) {
    if (typeof l.num == "number" && l.num >= 0 && l.num < r.length)
        return r[l.num];
    throw new Error("illegal attachments");
}
else if (Array.isArray(l))
    for (let i = 0; i < l.length; i++)
        l[i] = Yd(l[i], r);
else if (typeof l == "object")
    for (const i in l)
        Object.prototype.hasOwnProperty.call(l, i) && (l[i] = Yd(l[i], r)); return l; }
const bv = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"], yv = 5;
var ve;
(function (l) { l[l.CONNECT = 0] = "CONNECT", l[l.DISCONNECT = 1] = "DISCONNECT", l[l.EVENT = 2] = "EVENT", l[l.ACK = 3] = "ACK", l[l.CONNECT_ERROR = 4] = "CONNECT_ERROR", l[l.BINARY_EVENT = 5] = "BINARY_EVENT", l[l.BINARY_ACK = 6] = "BINARY_ACK"; })(ve || (ve = {}));
class vv {
    constructor(r) { this.replacer = r; }
    encode(r) { return (r.type === ve.EVENT || r.type === ve.ACK) && Ai(r) ? this.encodeAsBinary({ type: r.type === ve.EVENT ? ve.BINARY_EVENT : ve.BINARY_ACK, nsp: r.nsp, data: r.data, id: r.id }) : [this.encodeAsString(r)]; }
    encodeAsString(r) { let i = "" + r.type; return (r.type === ve.BINARY_EVENT || r.type === ve.BINARY_ACK) && (i += r.attachments + "-"), r.nsp && r.nsp !== "/" && (i += r.nsp + ","), r.id != null && (i += r.id), r.data != null && (i += JSON.stringify(r.data, this.replacer)), i; }
    encodeAsBinary(r) { const i = pv(r), c = this.encodeAsString(i.packet), u = i.buffers; return u.unshift(c), u; }
}
function qx(l) { return Object.prototype.toString.call(l) === "[object Object]"; }
class nu extends et {
    constructor(r) { super(), this.reviver = r; }
    add(r) { let i; if (typeof r == "string") {
        if (this.reconstructor)
            throw new Error("got plaintext data when reconstructing a packet");
        i = this.decodeString(r);
        const c = i.type === ve.BINARY_EVENT;
        c || i.type === ve.BINARY_ACK ? (i.type = c ? ve.EVENT : ve.ACK, this.reconstructor = new jv(i), i.attachments === 0 && super.emitReserved("decoded", i)) : super.emitReserved("decoded", i);
    }
    else if (lu(r) || r.base64)
        if (this.reconstructor)
            i = this.reconstructor.takeBinaryData(r), i && (this.reconstructor = null, super.emitReserved("decoded", i));
        else
            throw new Error("got binary data when not reconstructing a packet");
    else
        throw new Error("Unknown type: " + r); }
    decodeString(r) { let i = 0; const c = { type: Number(r.charAt(0)) }; if (ve[c.type] === void 0)
        throw new Error("unknown packet type " + c.type); if (c.type === ve.BINARY_EVENT || c.type === ve.BINARY_ACK) {
        const m = i + 1;
        for (; r.charAt(++i) !== "-" && i != r.length;)
            ;
        const h = r.substring(m, i);
        if (h != Number(h) || r.charAt(i) !== "-")
            throw new Error("Illegal attachments");
        c.attachments = Number(h);
    } if (r.charAt(i + 1) === "/") {
        const m = i + 1;
        for (; ++i && !(r.charAt(i) === "," || i === r.length);)
            ;
        c.nsp = r.substring(m, i);
    }
    else
        c.nsp = "/"; const u = r.charAt(i + 1); if (u !== "" && Number(u) == u) {
        const m = i + 1;
        for (; ++i;) {
            const h = r.charAt(i);
            if (h == null || Number(h) != h) {
                --i;
                break;
            }
            if (i === r.length)
                break;
        }
        c.id = Number(r.substring(m, i + 1));
    } if (r.charAt(++i)) {
        const m = this.tryParse(r.substr(i));
        if (nu.isPayloadValid(c.type, m))
            c.data = m;
        else
            throw new Error("invalid payload");
    } return c; }
    tryParse(r) { try {
        return JSON.parse(r, this.reviver);
    }
    catch {
        return !1;
    } }
    static isPayloadValid(r, i) { switch (r) {
        case ve.CONNECT: return qx(i);
        case ve.DISCONNECT: return i === void 0;
        case ve.CONNECT_ERROR: return typeof i == "string" || qx(i);
        case ve.EVENT:
        case ve.BINARY_EVENT: return Array.isArray(i) && (typeof i[0] == "number" || typeof i[0] == "string" && bv.indexOf(i[0]) === -1);
        case ve.ACK:
        case ve.BINARY_ACK: return Array.isArray(i);
    } }
    destroy() { this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null); }
}
class jv {
    constructor(r) { this.packet = r, this.buffers = [], this.reconPack = r; }
    takeBinaryData(r) { if (this.buffers.push(r), this.buffers.length === this.reconPack.attachments) {
        const i = gv(this.reconPack, this.buffers);
        return this.finishedReconstruction(), i;
    } return null; }
    finishedReconstruction() { this.reconPack = null, this.buffers = []; }
}
const Nv = Object.freeze(Object.defineProperty({ __proto__: null, Decoder: nu, Encoder: vv, get PacketType() { return ve; }, protocol: yv }, Symbol.toStringTag, { value: "Module" }));
function ls(l, r, i) { return l.on(r, i), function () { l.off(r, i); }; }
const wv = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
class Dp extends et {
    constructor(r, i, c) { super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = r, this.nsp = i, c && c.auth && (this.auth = c.auth), this._opts = Object.assign({}, c), this.io._autoConnect && this.open(); }
    get disconnected() { return !this.connected; }
    subEvents() { if (this.subs)
        return; const r = this.io; this.subs = [ls(r, "open", this.onopen.bind(this)), ls(r, "packet", this.onpacket.bind(this)), ls(r, "error", this.onerror.bind(this)), ls(r, "close", this.onclose.bind(this))]; }
    get active() { return !!this.subs; }
    connect() { return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this); }
    open() { return this.connect(); }
    send(...r) { return r.unshift("message"), this.emit.apply(this, r), this; }
    emit(r, ...i) { var c, u, m; if (wv.hasOwnProperty(r))
        throw new Error('"' + r.toString() + '" is a reserved event name'); if (i.unshift(r), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
        return this._addToQueue(i), this; const h = { type: ve.EVENT, data: i }; if (h.options = {}, h.options.compress = this.flags.compress !== !1, typeof i[i.length - 1] == "function") {
        const v = this.ids++, x = i.pop();
        this._registerAckCallback(v, x), h.id = v;
    } const g = (u = (c = this.io.engine) === null || c === void 0 ? void 0 : c.transport) === null || u === void 0 ? void 0 : u.writable, b = this.connected && !(!((m = this.io.engine) === null || m === void 0) && m._hasPingExpired()); return this.flags.volatile && !g || (b ? (this.notifyOutgoingListeners(h), this.packet(h)) : this.sendBuffer.push(h)), this.flags = {}, this; }
    _registerAckCallback(r, i) { var c; const u = (c = this.flags.timeout) !== null && c !== void 0 ? c : this._opts.ackTimeout; if (u === void 0) {
        this.acks[r] = i;
        return;
    } const m = this.io.setTimeoutFn(() => { delete this.acks[r]; for (let g = 0; g < this.sendBuffer.length; g++)
        this.sendBuffer[g].id === r && this.sendBuffer.splice(g, 1); i.call(this, new Error("operation has timed out")); }, u), h = (...g) => { this.io.clearTimeoutFn(m), i.apply(this, g); }; h.withError = !0, this.acks[r] = h; }
    emitWithAck(r, ...i) { return new Promise((c, u) => { const m = (h, g) => h ? u(h) : c(g); m.withError = !0, i.push(m), this.emit(r, ...i); }); }
    _addToQueue(r) { let i; typeof r[r.length - 1] == "function" && (i = r.pop()); const c = { id: this._queueSeq++, tryCount: 0, pending: !1, args: r, flags: Object.assign({ fromQueue: !0 }, this.flags) }; r.push((u, ...m) => c !== this._queue[0] ? void 0 : (u !== null ? c.tryCount > this._opts.retries && (this._queue.shift(), i && i(u)) : (this._queue.shift(), i && i(null, ...m)), c.pending = !1, this._drainQueue())), this._queue.push(c), this._drainQueue(); }
    _drainQueue(r = !1) { if (!this.connected || this._queue.length === 0)
        return; const i = this._queue[0]; i.pending && !r || (i.pending = !0, i.tryCount++, this.flags = i.flags, this.emit.apply(this, i.args)); }
    packet(r) { r.nsp = this.nsp, this.io._packet(r); }
    onopen() { typeof this.auth == "function" ? this.auth(r => { this._sendConnectPacket(r); }) : this._sendConnectPacket(this.auth); }
    _sendConnectPacket(r) { this.packet({ type: ve.CONNECT, data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, r) : r }); }
    onerror(r) { this.connected || this.emitReserved("connect_error", r); }
    onclose(r, i) { this.connected = !1, delete this.id, this.emitReserved("disconnect", r, i), this._clearAcks(); }
    _clearAcks() { Object.keys(this.acks).forEach(r => { if (!this.sendBuffer.some(c => String(c.id) === r)) {
        const c = this.acks[r];
        delete this.acks[r], c.withError && c.call(this, new Error("socket has been disconnected"));
    } }); }
    onpacket(r) { if (r.nsp === this.nsp)
        switch (r.type) {
            case ve.CONNECT:
                r.data && r.data.sid ? this.onconnect(r.data.sid, r.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case ve.EVENT:
            case ve.BINARY_EVENT:
                this.onevent(r);
                break;
            case ve.ACK:
            case ve.BINARY_ACK:
                this.onack(r);
                break;
            case ve.DISCONNECT:
                this.ondisconnect();
                break;
            case ve.CONNECT_ERROR:
                this.destroy();
                const c = new Error(r.data.message);
                c.data = r.data.data, this.emitReserved("connect_error", c);
                break;
        } }
    onevent(r) { const i = r.data || []; r.id != null && i.push(this.ack(r.id)), this.connected ? this.emitEvent(i) : this.receiveBuffer.push(Object.freeze(i)); }
    emitEvent(r) { if (this._anyListeners && this._anyListeners.length) {
        const i = this._anyListeners.slice();
        for (const c of i)
            c.apply(this, r);
    } super.emit.apply(this, r), this._pid && r.length && typeof r[r.length - 1] == "string" && (this._lastOffset = r[r.length - 1]); }
    ack(r) { const i = this; let c = !1; return function (...u) { c || (c = !0, i.packet({ type: ve.ACK, id: r, data: u })); }; }
    onack(r) { const i = this.acks[r.id]; typeof i == "function" && (delete this.acks[r.id], i.withError && r.data.unshift(null), i.apply(this, r.data)); }
    onconnect(r, i) { this.id = r, this.recovered = i && this._pid === i, this._pid = i, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0); }
    emitBuffered() { this.receiveBuffer.forEach(r => this.emitEvent(r)), this.receiveBuffer = [], this.sendBuffer.forEach(r => { this.notifyOutgoingListeners(r), this.packet(r); }), this.sendBuffer = []; }
    ondisconnect() { this.destroy(), this.onclose("io server disconnect"); }
    destroy() { this.subs && (this.subs.forEach(r => r()), this.subs = void 0), this.io._destroy(this); }
    disconnect() { return this.connected && this.packet({ type: ve.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this; }
    close() { return this.disconnect(); }
    compress(r) { return this.flags.compress = r, this; }
    get volatile() { return this.flags.volatile = !0, this; }
    timeout(r) { return this.flags.timeout = r, this; }
    onAny(r) { return this._anyListeners = this._anyListeners || [], this._anyListeners.push(r), this; }
    prependAny(r) { return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(r), this; }
    offAny(r) { if (!this._anyListeners)
        return this; if (r) {
        const i = this._anyListeners;
        for (let c = 0; c < i.length; c++)
            if (r === i[c])
                return i.splice(c, 1), this;
    }
    else
        this._anyListeners = []; return this; }
    listenersAny() { return this._anyListeners || []; }
    onAnyOutgoing(r) { return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(r), this; }
    prependAnyOutgoing(r) { return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(r), this; }
    offAnyOutgoing(r) { if (!this._anyOutgoingListeners)
        return this; if (r) {
        const i = this._anyOutgoingListeners;
        for (let c = 0; c < i.length; c++)
            if (r === i[c])
                return i.splice(c, 1), this;
    }
    else
        this._anyOutgoingListeners = []; return this; }
    listenersAnyOutgoing() { return this._anyOutgoingListeners || []; }
    notifyOutgoingListeners(r) { if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const i = this._anyOutgoingListeners.slice();
        for (const c of i)
            c.apply(this, r.data);
    } }
}
function Rl(l) { l = l || {}, this.ms = l.min || 100, this.max = l.max || 1e4, this.factor = l.factor || 2, this.jitter = l.jitter > 0 && l.jitter <= 1 ? l.jitter : 0, this.attempts = 0; }
Rl.prototype.duration = function () { var l = this.ms * Math.pow(this.factor, this.attempts++); if (this.jitter) {
    var r = Math.random(), i = Math.floor(r * this.jitter * l);
    l = (Math.floor(r * 10) & 1) == 0 ? l - i : l + i;
} return Math.min(l, this.max) | 0; };
Rl.prototype.reset = function () { this.attempts = 0; };
Rl.prototype.setMin = function (l) { this.ms = l; };
Rl.prototype.setMax = function (l) { this.max = l; };
Rl.prototype.setJitter = function (l) { this.jitter = l; };
class Xd extends et {
    constructor(r, i) { var c; super(), this.nsps = {}, this.subs = [], r && typeof r == "object" && (i = r, r = void 0), i = i || {}, i.path = i.path || "/socket.io", this.opts = i, Yi(this, i), this.reconnection(i.reconnection !== !1), this.reconnectionAttempts(i.reconnectionAttempts || 1 / 0), this.reconnectionDelay(i.reconnectionDelay || 1e3), this.reconnectionDelayMax(i.reconnectionDelayMax || 5e3), this.randomizationFactor((c = i.randomizationFactor) !== null && c !== void 0 ? c : .5), this.backoff = new Rl({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(i.timeout == null ? 2e4 : i.timeout), this._readyState = "closed", this.uri = r; const u = i.parser || Nv; this.encoder = new u.Encoder, this.decoder = new u.Decoder, this._autoConnect = i.autoConnect !== !1, this._autoConnect && this.open(); }
    reconnection(r) { return arguments.length ? (this._reconnection = !!r, r || (this.skipReconnect = !0), this) : this._reconnection; }
    reconnectionAttempts(r) { return r === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = r, this); }
    reconnectionDelay(r) { var i; return r === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = r, (i = this.backoff) === null || i === void 0 || i.setMin(r), this); }
    randomizationFactor(r) { var i; return r === void 0 ? this._randomizationFactor : (this._randomizationFactor = r, (i = this.backoff) === null || i === void 0 || i.setJitter(r), this); }
    reconnectionDelayMax(r) { var i; return r === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = r, (i = this.backoff) === null || i === void 0 || i.setMax(r), this); }
    timeout(r) { return arguments.length ? (this._timeout = r, this) : this._timeout; }
    maybeReconnectOnOpen() { !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect(); }
    open(r) { if (~this._readyState.indexOf("open"))
        return this; this.engine = new dv(this.uri, this.opts); const i = this.engine, c = this; this._readyState = "opening", this.skipReconnect = !1; const u = ls(i, "open", function () { c.onopen(), r && r(); }), m = g => { this.cleanup(), this._readyState = "closed", this.emitReserved("error", g), r ? r(g) : this.maybeReconnectOnOpen(); }, h = ls(i, "error", m); if (this._timeout !== !1) {
        const g = this._timeout, b = this.setTimeoutFn(() => { u(), m(new Error("timeout")), i.close(); }, g);
        this.opts.autoUnref && b.unref(), this.subs.push(() => { this.clearTimeoutFn(b); });
    } return this.subs.push(u), this.subs.push(h), this; }
    connect(r) { return this.open(r); }
    onopen() { this.cleanup(), this._readyState = "open", this.emitReserved("open"); const r = this.engine; this.subs.push(ls(r, "ping", this.onping.bind(this)), ls(r, "data", this.ondata.bind(this)), ls(r, "error", this.onerror.bind(this)), ls(r, "close", this.onclose.bind(this)), ls(this.decoder, "decoded", this.ondecoded.bind(this))); }
    onping() { this.emitReserved("ping"); }
    ondata(r) { try {
        this.decoder.add(r);
    }
    catch (i) {
        this.onclose("parse error", i);
    } }
    ondecoded(r) { Ki(() => { this.emitReserved("packet", r); }, this.setTimeoutFn); }
    onerror(r) { this.emitReserved("error", r); }
    socket(r, i) { let c = this.nsps[r]; return c ? this._autoConnect && !c.active && c.connect() : (c = new Dp(this, r, i), this.nsps[r] = c), c; }
    _destroy(r) { const i = Object.keys(this.nsps); for (const c of i)
        if (this.nsps[c].active)
            return; this._close(); }
    _packet(r) { const i = this.encoder.encode(r); for (let c = 0; c < i.length; c++)
        this.engine.write(i[c], r.options); }
    cleanup() { this.subs.forEach(r => r()), this.subs.length = 0, this.decoder.destroy(); }
    _close() { this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"); }
    disconnect() { return this._close(); }
    onclose(r, i) { var c; this.cleanup(), (c = this.engine) === null || c === void 0 || c.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", r, i), this._reconnection && !this.skipReconnect && this.reconnect(); }
    reconnect() { if (this._reconnecting || this.skipReconnect)
        return this; const r = this; if (this.backoff.attempts >= this._reconnectionAttempts)
        this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
        const i = this.backoff.duration();
        this._reconnecting = !0;
        const c = this.setTimeoutFn(() => { r.skipReconnect || (this.emitReserved("reconnect_attempt", r.backoff.attempts), !r.skipReconnect && r.open(u => { u ? (r._reconnecting = !1, r.reconnect(), this.emitReserved("reconnect_error", u)) : r.onreconnect(); })); }, i);
        this.opts.autoUnref && c.unref(), this.subs.push(() => { this.clearTimeoutFn(c); });
    } }
    onreconnect() { const r = this.backoff.attempts; this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", r); }
}
const Bn = {};
function Ti(l, r) { typeof l == "object" && (r = l, l = void 0), r = r || {}; const i = uv(l, r.path || "/socket.io"), c = i.source, u = i.id, m = i.path, h = Bn[u] && m in Bn[u].nsps, g = r.forceNew || r["force new connection"] || r.multiplex === !1 || h; let b; return g ? b = new Xd(c, r) : (Bn[u] || (Bn[u] = new Xd(c, r)), b = Bn[u]), i.query && !r.query && (r.query = i.queryKey), b.socket(i.path, r); }
Object.assign(Ti, { Manager: Xd, Socket: Dp, io: Ti, connect: Ti });
const Ux = l => { let r; const i = new Set, c = (y, v) => { const x = typeof y == "function" ? y(r) : y; if (!Object.is(x, r)) {
    const j = r;
    r = v ?? (typeof x != "object" || x === null) ? x : Object.assign({}, r, x), i.forEach(k => k(r, j));
} }, u = () => r, g = { setState: c, getState: u, getInitialState: () => b, subscribe: y => (i.add(y), () => i.delete(y)) }, b = r = l(c, u, g); return g; }, Sv = (l => l ? Ux(l) : Ux), kv = l => l;
function Cv(l, r = kv) { const i = Ln.useSyncExternalStore(l.subscribe, Ln.useCallback(() => r(l.getState()), [l, r]), Ln.useCallback(() => r(l.getInitialState()), [l, r])); return Ln.useDebugValue(i), i; }
const Lx = l => { const r = Sv(l), i = c => Cv(r, c); return Object.assign(i, r), i; }, zp = (l => l ? Lx(l) : Lx);
function Av(l, r) { let i; try {
    i = l();
}
catch {
    return;
} return { getItem: u => { var m; const h = b => b === null ? null : JSON.parse(b, void 0), g = (m = i.getItem(u)) != null ? m : null; return g instanceof Promise ? g.then(h) : h(g); }, setItem: (u, m) => i.setItem(u, JSON.stringify(m, void 0)), removeItem: u => i.removeItem(u) }; }
const Zd = l => r => { try {
    const i = l(r);
    return i instanceof Promise ? i : { then(c) { return Zd(c)(i); }, catch(c) { return this; } };
}
catch (i) {
    return { then(c) { return this; }, catch(c) { return Zd(c)(i); } };
} }, Tv = (l, r) => (i, c, u) => { let m = { storage: Av(() => localStorage), partialize: w => w, version: 0, merge: (w, A) => ({ ...A, ...w }), ...r }, h = !1; const g = new Set, b = new Set; let y = m.storage; if (!y)
    return l((...w) => { console.warn(`[zustand persist middleware] Unable to update item '${m.name}', the given storage is currently unavailable.`), i(...w); }, c, u); const v = () => { const w = m.partialize({ ...c() }); return y.setItem(m.name, { state: w, version: m.version }); }, x = u.setState; u.setState = (w, A) => (x(w, A), v()); const j = l((...w) => (i(...w), v()), c, u); u.getInitialState = () => j; let k; const N = () => { var w, A; if (!y)
    return; h = !1, g.forEach(q => { var G; return q((G = c()) != null ? G : j); }); const M = ((A = m.onRehydrateStorage) == null ? void 0 : A.call(m, (w = c()) != null ? w : j)) || void 0; return Zd(y.getItem.bind(y))(m.name).then(q => { if (q)
    if (typeof q.version == "number" && q.version !== m.version) {
        if (m.migrate) {
            const G = m.migrate(q.state, q.version);
            return G instanceof Promise ? G.then(X => [!0, X]) : [!0, G];
        }
        console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
    }
    else
        return [!1, q.state]; return [!1, void 0]; }).then(q => { var G; const [X, D] = q; if (k = m.merge(D, (G = c()) != null ? G : j), i(k, !0), X)
    return v(); }).then(() => { M == null || M(k, void 0), k = c(), h = !0, b.forEach(q => q(k)); }).catch(q => { M == null || M(void 0, q); }); }; return u.persist = { setOptions: w => { m = { ...m, ...w }, w.storage && (y = w.storage); }, clearStorage: () => { y == null || y.removeItem(m.name); }, getOptions: () => m, rehydrate: () => N(), hasHydrated: () => h, onHydrate: w => (g.add(w), () => { g.delete(w); }), onFinishHydration: w => (b.add(w), () => { b.delete(w); }) }, m.skipHydration || N(), k || j; }, Ev = Tv, gs = zp()(Ev(l => ({ user: null, token: null, isAuthenticated: !1, _hasHydrated: !1, login: (r, i) => l({ user: r, token: i, isAuthenticated: !0 }), logout: () => l({ user: null, token: null, isAuthenticated: !1 }), updateUser: r => l(i => ({ user: i.user ? { ...i.user, ...r } : null })), setHasHydrated: r => l({ _hasHydrated: r }) }), { name: "solaria-auth", partialize: l => ({ user: l.user, token: l.token, isAuthenticated: l.isAuthenticated }), onRehydrateStorage: () => l => { l == null || l.setHasHydrated(!0); } })), Rp = R.createContext(null), Mv = "";
function _v({ children: l }) { const r = R.useRef(null), [i, c] = R.useState(!1), u = gs(v => v.token), m = gs(v => v.isAuthenticated), h = Ut(); R.useEffect(() => { if (!m || !u) {
    r.current && (r.current.disconnect(), r.current = null, c(!1));
    return;
} r.current = Ti(Mv, { auth: { token: u }, reconnection: !0, reconnectionAttempts: 5, reconnectionDelay: 1e3, reconnectionDelayMax: 5e3 }); const v = r.current; return v.on("connect", () => { console.log("[Socket] Connected:", v.id), c(!0); }), v.on("disconnect", x => { console.log("[Socket] Disconnected:", x), c(!1); }), v.on("connect_error", x => { console.error("[Socket] Connection error:", x.message), c(!1); }), v.on("agent:status", x => { h.invalidateQueries({ queryKey: ["agents"] }), x != null && x.agentId && h.invalidateQueries({ queryKey: ["agents", x.agentId] }); }), v.on("task:updated", x => { h.invalidateQueries({ queryKey: ["tasks"] }), h.invalidateQueries({ queryKey: ["dashboard"] }), x != null && x.taskId && h.invalidateQueries({ queryKey: ["tasks", x.taskId] }), x != null && x.projectId && (h.invalidateQueries({ queryKey: ["projects", x.projectId, "tasks"] }), h.invalidateQueries({ queryKey: ["projects", x.projectId] })); }), v.on("task:created", x => { h.invalidateQueries({ queryKey: ["tasks"] }), h.invalidateQueries({ queryKey: ["dashboard"] }), x != null && x.projectId && h.invalidateQueries({ queryKey: ["projects", x.projectId, "tasks"] }); }), v.on("task:completed", x => { h.invalidateQueries({ queryKey: ["tasks"] }), h.invalidateQueries({ queryKey: ["dashboard"] }), x != null && x.taskId && h.invalidateQueries({ queryKey: ["tasks", x.taskId] }), x != null && x.projectId && (h.invalidateQueries({ queryKey: ["projects", x.projectId, "tasks"] }), h.invalidateQueries({ queryKey: ["projects", x.projectId] })); }), v.on("task:deleted", x => { h.invalidateQueries({ queryKey: ["tasks"] }), x != null && x.projectId && h.invalidateQueries({ queryKey: ["projects", x.projectId, "tasks"] }); }), v.on("project:updated", x => { h.invalidateQueries({ queryKey: ["projects"] }), h.invalidateQueries({ queryKey: ["dashboard"] }), x != null && x.projectId && h.invalidateQueries({ queryKey: ["projects", x.projectId] }); }), v.on("project:progress", x => { x != null && x.projectId && (h.invalidateQueries({ queryKey: ["projects", x.projectId] }), h.invalidateQueries({ queryKey: ["projects"] })); }), v.on("memory:created", () => { h.invalidateQueries({ queryKey: ["memories"] }); }), v.on("memory:updated", x => { h.invalidateQueries({ queryKey: ["memories"] }), x != null && x.memoryId && h.invalidateQueries({ queryKey: ["memories", x.memoryId] }); }), v.on("alert:critical", () => { h.invalidateQueries({ queryKey: ["dashboard", "alerts"] }), h.invalidateQueries({ queryKey: ["dashboard"] }); }), v.on("taskItem:completed", x => { x != null && x.taskId && (h.invalidateQueries({ queryKey: ["tasks", x.taskId, "items"] }), h.invalidateQueries({ queryKey: ["tasks", x.taskId] }), h.invalidateQueries({ queryKey: ["tasks"] })); }), v.on("taskItem:created", x => { x != null && x.taskId && (h.invalidateQueries({ queryKey: ["tasks", x.taskId, "items"] }), h.invalidateQueries({ queryKey: ["tasks", x.taskId] })); }), v.on("taskItem:updated", x => { x != null && x.taskId && (h.invalidateQueries({ queryKey: ["tasks", x.taskId, "items"] }), h.invalidateQueries({ queryKey: ["tasks", x.taskId] })); }), v.on("activity:new", () => { h.invalidateQueries({ queryKey: ["activity"] }); }), () => { v.disconnect(), r.current = null; }; }, [m, u, h]); const g = R.useCallback((v, x) => { var j; (j = r.current) != null && j.connected && r.current.emit(v, x); }, []), b = R.useCallback((v, x) => { var j; return (j = r.current) == null || j.on(v, x), () => { var k; (k = r.current) == null || k.off(v, x); }; }, []), y = R.useCallback((v, x) => { var j, k; x ? (j = r.current) == null || j.off(v, x) : (k = r.current) == null || k.removeAllListeners(v); }, []); return s.jsx(Rp.Provider, { value: { socket: r.current, isConnected: i, emit: g, on: b, off: y }, children: l }); }
function Bp() { const l = R.useContext(Rp); if (!l)
    throw new Error("useSocketContext must be used within a SocketProvider"); return l; }
const qp = R.createContext(null), Ov = 50;
function Dv(l, r) { const c = { "task:created": () => ({ type: "task", action: "created", title: "Nueva tarea creada", message: r.title ? `Tarea: ${r.title}` : `Proyecto #${r.projectId}` }), "task:updated": () => ({ type: "task", action: "updated", title: "Tarea actualizada", message: r.title ? `${r.title}` : `Tarea #${r.taskId}` }), "task:completed": () => ({ type: "task", action: "completed", title: "Tarea completada", message: r.title ? `${r.title}` : `Tarea #${r.taskId}` }), "task:deleted": () => ({ type: "task", action: "deleted", title: "Tarea eliminada", message: "Tarea removida del proyecto" }), "project:created": () => ({ type: "project", action: "created", title: "Nuevo proyecto", message: r.name ? `${r.name}` : "Proyecto creado" }), "project:updated": () => ({ type: "project", action: "updated", title: "Proyecto actualizado", message: r.name ? `${r.name}` : `Proyecto #${r.projectId}` }), "project:deleted": () => ({ type: "project", action: "deleted", title: "Proyecto eliminado", message: r.name ? `${r.name}` : "Proyecto removido" }), "project:progress": () => ({ type: "project", action: "updated", title: "Progreso actualizado", message: r.progress !== void 0 ? `Nuevo progreso: ${r.progress}%` : "Progreso modificado" }), "agent:status": () => ({ type: "agent", action: "status", title: "Estado de agente", message: r.status ? `${r.agentName || "Agente"}: ${r.status}` : "Estado actualizado" }), "memory:created": () => ({ type: "memory", action: "created", title: "Nueva memoria", message: r.content ? `${String(r.content).substring(0, 50)}...` : "Memoria registrada" }), "memory:updated": () => ({ type: "memory", action: "updated", title: "Memoria actualizada", message: `Memoria #${r.memoryId} modificada` }), "alert:critical": () => ({ type: "alert", action: "info", title: "Alerta crítica", message: typeof r.message == "string" ? r.message : "Se requiere atención inmediata" }), "taskItem:completed": () => ({ type: "task", action: "completed", title: "Subtarea completada", message: r.title ? `${r.title}` : `En tarea #${r.taskId}` }), "taskItem:created": () => ({ type: "task", action: "created", title: "Subtarea agregada", message: `Nueva subtarea en tarea #${r.taskId}` }), "activity:new": () => ({ type: "system", action: "info", title: "Nueva actividad", message: typeof r.description == "string" ? r.description : "Actividad registrada" }) }[l]; return c ? c() : { type: "system", action: "info", title: l.replace(":", " ").replace(/([A-Z])/g, " $1").trim(), message: JSON.stringify(r).substring(0, 100) }; }
function zv({ children: l }) { const { on: r, isConnected: i } = Bp(), [c, u] = R.useState([]), m = R.useCallback(x => { const j = { ...x, id: crypto.randomUUID(), timestamp: new Date, read: !1 }; u(k => [j, ...k].slice(0, Ov)); }, []), h = R.useCallback(x => { u(j => j.map(k => k.id === x ? { ...k, read: !0 } : k)); }, []), g = R.useCallback(() => { u(x => x.map(j => ({ ...j, read: !0 }))); }, []), b = R.useCallback(() => { u([]); }, []), y = R.useCallback(x => { u(j => j.filter(k => k.id !== x)); }, []); R.useEffect(() => { if (!i)
    return; const x = ["task:created", "task:updated", "task:completed", "task:deleted", "project:created", "project:updated", "project:deleted", "project:progress", "agent:status", "memory:created", "memory:updated", "alert:critical", "taskItem:completed", "taskItem:created", "activity:new"], j = []; return x.forEach(k => { const N = r(k, w => { const A = w || {}, M = Dv(k, A); m({ ...M, data: A }); }); j.push(N); }), () => { j.forEach(k => k()); }; }, [r, i, m]); const v = c.filter(x => !x.read).length; return s.jsx(qp.Provider, { value: { notifications: c, unreadCount: v, addNotification: m, markAsRead: h, markAllAsRead: g, clearAll: b, dismissNotification: y }, children: l }); }
function Rv() { const l = R.useContext(qp); if (!l)
    throw new Error("useNotifications must be used within a NotificationProvider"); return l; }
function Up(l, r) { return function () { return l.apply(r, arguments); }; }
const { toString: Bv } = Object.prototype, { getPrototypeOf: ru } = Object, { iterator: Xi, toStringTag: Lp } = Symbol, Zi = (l => r => { const i = Bv.call(r); return l[i] || (l[i] = i.slice(8, -1).toLowerCase()); })(Object.create(null)), is = l => (l = l.toLowerCase(), r => Zi(r) === l), Ji = l => r => typeof r === l, { isArray: Bl } = Array, Ol = Ji("undefined");
function Xn(l) { return l !== null && !Ol(l) && l.constructor !== null && !Ol(l.constructor) && wt(l.constructor.isBuffer) && l.constructor.isBuffer(l); }
const Hp = is("ArrayBuffer");
function qv(l) { let r; return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(l) : r = l && l.buffer && Hp(l.buffer), r; }
const Uv = Ji("string"), wt = Ji("function"), Vp = Ji("number"), Zn = l => l !== null && typeof l == "object", Lv = l => l === !0 || l === !1, Ei = l => { if (Zi(l) !== "object")
    return !1; const r = ru(l); return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Lp in l) && !(Xi in l); }, Hv = l => { if (!Zn(l) || Xn(l))
    return !1; try {
    return Object.keys(l).length === 0 && Object.getPrototypeOf(l) === Object.prototype;
}
catch {
    return !1;
} }, Vv = is("Date"), Gv = is("File"), Qv = is("Blob"), Kv = is("FileList"), Yv = l => Zn(l) && wt(l.pipe), Xv = l => { let r; return l && (typeof FormData == "function" && l instanceof FormData || wt(l.append) && ((r = Zi(l)) === "formdata" || r === "object" && wt(l.toString) && l.toString() === "[object FormData]")); }, Zv = is("URLSearchParams"), [Jv, Fv, $v, Pv] = ["ReadableStream", "Request", "Response", "Headers"].map(is), Iv = l => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Jn(l, r, { allOwnKeys: i = !1 } = {}) { if (l === null || typeof l > "u")
    return; let c, u; if (typeof l != "object" && (l = [l]), Bl(l))
    for (c = 0, u = l.length; c < u; c++)
        r.call(null, l[c], c, l);
else {
    if (Xn(l))
        return;
    const m = i ? Object.getOwnPropertyNames(l) : Object.keys(l), h = m.length;
    let g;
    for (c = 0; c < h; c++)
        g = m[c], r.call(null, l[g], g, l);
} }
function Gp(l, r) { if (Xn(l))
    return null; r = r.toLowerCase(); const i = Object.keys(l); let c = i.length, u; for (; c-- > 0;)
    if (u = i[c], r === u.toLowerCase())
        return u; return null; }
const Ha = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Qp = l => !Ol(l) && l !== Ha;
function Jd() { const { caseless: l, skipUndefined: r } = Qp(this) && this || {}, i = {}, c = (u, m) => { const h = l && Gp(i, m) || m; Ei(i[h]) && Ei(u) ? i[h] = Jd(i[h], u) : Ei(u) ? i[h] = Jd({}, u) : Bl(u) ? i[h] = u.slice() : (!r || !Ol(u)) && (i[h] = u); }; for (let u = 0, m = arguments.length; u < m; u++)
    arguments[u] && Jn(arguments[u], c); return i; }
const Wv = (l, r, i, { allOwnKeys: c } = {}) => (Jn(r, (u, m) => { i && wt(u) ? l[m] = Up(u, i) : l[m] = u; }, { allOwnKeys: c }), l), e1 = l => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), t1 = (l, r, i, c) => { l.prototype = Object.create(r.prototype, c), l.prototype.constructor = l, Object.defineProperty(l, "super", { value: r.prototype }), i && Object.assign(l.prototype, i); }, s1 = (l, r, i, c) => { let u, m, h; const g = {}; if (r = r || {}, l == null)
    return r; do {
    for (u = Object.getOwnPropertyNames(l), m = u.length; m-- > 0;)
        h = u[m], (!c || c(h, l, r)) && !g[h] && (r[h] = l[h], g[h] = !0);
    l = i !== !1 && ru(l);
} while (l && (!i || i(l, r)) && l !== Object.prototype); return r; }, a1 = (l, r, i) => { l = String(l), (i === void 0 || i > l.length) && (i = l.length), i -= r.length; const c = l.indexOf(r, i); return c !== -1 && c === i; }, l1 = l => { if (!l)
    return null; if (Bl(l))
    return l; let r = l.length; if (!Vp(r))
    return null; const i = new Array(r); for (; r-- > 0;)
    i[r] = l[r]; return i; }, n1 = (l => r => l && r instanceof l)(typeof Uint8Array < "u" && ru(Uint8Array)), r1 = (l, r) => { const c = (l && l[Xi]).call(l); let u; for (; (u = c.next()) && !u.done;) {
    const m = u.value;
    r.call(l, m[0], m[1]);
} }, i1 = (l, r) => { let i; const c = []; for (; (i = l.exec(r)) !== null;)
    c.push(i); return c; }, c1 = is("HTMLFormElement"), o1 = l => l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, c, u) { return c.toUpperCase() + u; }), Hx = (({ hasOwnProperty: l }) => (r, i) => l.call(r, i))(Object.prototype), d1 = is("RegExp"), Kp = (l, r) => { const i = Object.getOwnPropertyDescriptors(l), c = {}; Jn(i, (u, m) => { let h; (h = r(u, m, l)) !== !1 && (c[m] = h || u); }), Object.defineProperties(l, c); }, u1 = l => { Kp(l, (r, i) => { if (wt(l) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
    return !1; const c = l[i]; if (wt(c)) {
    if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
    }
    r.set || (r.set = () => { throw Error("Can not rewrite read-only method '" + i + "'"); });
} }); }, m1 = (l, r) => { const i = {}, c = u => { u.forEach(m => { i[m] = !0; }); }; return Bl(l) ? c(l) : c(String(l).split(r)), i; }, f1 = () => { }, h1 = (l, r) => l != null && Number.isFinite(l = +l) ? l : r;
function x1(l) { return !!(l && wt(l.append) && l[Lp] === "FormData" && l[Xi]); }
const p1 = l => { const r = new Array(10), i = (c, u) => { if (Zn(c)) {
    if (r.indexOf(c) >= 0)
        return;
    if (Xn(c))
        return c;
    if (!("toJSON" in c)) {
        r[u] = c;
        const m = Bl(c) ? [] : {};
        return Jn(c, (h, g) => { const b = i(h, u + 1); !Ol(b) && (m[g] = b); }), r[u] = void 0, m;
    }
} return c; }; return i(l, 0); }, g1 = is("AsyncFunction"), b1 = l => l && (Zn(l) || wt(l)) && wt(l.then) && wt(l.catch), Yp = ((l, r) => l ? setImmediate : r ? ((i, c) => (Ha.addEventListener("message", ({ source: u, data: m }) => { u === Ha && m === i && c.length && c.shift()(); }, !1), u => { c.push(u), Ha.postMessage(i, "*"); }))(`axios@${Math.random()}`, []) : i => setTimeout(i))(typeof setImmediate == "function", wt(Ha.postMessage)), y1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ha) : typeof process < "u" && process.nextTick || Yp, v1 = l => l != null && wt(l[Xi]), B = { isArray: Bl, isArrayBuffer: Hp, isBuffer: Xn, isFormData: Xv, isArrayBufferView: qv, isString: Uv, isNumber: Vp, isBoolean: Lv, isObject: Zn, isPlainObject: Ei, isEmptyObject: Hv, isReadableStream: Jv, isRequest: Fv, isResponse: $v, isHeaders: Pv, isUndefined: Ol, isDate: Vv, isFile: Gv, isBlob: Qv, isRegExp: d1, isFunction: wt, isStream: Yv, isURLSearchParams: Zv, isTypedArray: n1, isFileList: Kv, forEach: Jn, merge: Jd, extend: Wv, trim: Iv, stripBOM: e1, inherits: t1, toFlatObject: s1, kindOf: Zi, kindOfTest: is, endsWith: a1, toArray: l1, forEachEntry: r1, matchAll: i1, isHTMLForm: c1, hasOwnProperty: Hx, hasOwnProp: Hx, reduceDescriptors: Kp, freezeMethods: u1, toObjectSet: m1, toCamelCase: o1, noop: f1, toFiniteNumber: h1, findKey: Gp, global: Ha, isContextDefined: Qp, isSpecCompliantForm: x1, toJSONObject: p1, isAsyncFn: g1, isThenable: b1, setImmediate: Yp, asap: y1, isIterable: v1 };
function oe(l, r, i, c, u) { Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", r && (this.code = r), i && (this.config = i), c && (this.request = c), u && (this.response = u, this.status = u.status ? u.status : null); }
B.inherits(oe, Error, { toJSON: function () { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: B.toJSONObject(this.config), code: this.code, status: this.status }; } });
const Xp = oe.prototype, Zp = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(l => { Zp[l] = { value: l }; });
Object.defineProperties(oe, Zp);
Object.defineProperty(Xp, "isAxiosError", { value: !0 });
oe.from = (l, r, i, c, u, m) => { const h = Object.create(Xp); B.toFlatObject(l, h, function (v) { return v !== Error.prototype; }, y => y !== "isAxiosError"); const g = l && l.message ? l.message : "Error", b = r == null && l ? l.code : r; return oe.call(h, g, b, i, c, u), l && h.cause == null && Object.defineProperty(h, "cause", { value: l, configurable: !0 }), h.name = l && l.name || "Error", m && Object.assign(h, m), h; };
const j1 = null;
function Fd(l) { return B.isPlainObject(l) || B.isArray(l); }
function Jp(l) { return B.endsWith(l, "[]") ? l.slice(0, -2) : l; }
function Vx(l, r, i) { return l ? l.concat(r).map(function (u, m) { return u = Jp(u), !i && m ? "[" + u + "]" : u; }).join(i ? "." : "") : r; }
function N1(l) { return B.isArray(l) && !l.some(Fd); }
const w1 = B.toFlatObject(B, {}, null, function (r) { return /^is[A-Z]/.test(r); });
function Fi(l, r, i) { if (!B.isObject(l))
    throw new TypeError("target must be an object"); r = r || new FormData, i = B.toFlatObject(i, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (w, A) { return !B.isUndefined(A[w]); }); const c = i.metaTokens, u = i.visitor || v, m = i.dots, h = i.indexes, b = (i.Blob || typeof Blob < "u" && Blob) && B.isSpecCompliantForm(r); if (!B.isFunction(u))
    throw new TypeError("visitor must be a function"); function y(N) { if (N === null)
    return ""; if (B.isDate(N))
    return N.toISOString(); if (B.isBoolean(N))
    return N.toString(); if (!b && B.isBlob(N))
    throw new oe("Blob is not supported. Use a Buffer instead."); return B.isArrayBuffer(N) || B.isTypedArray(N) ? b && typeof Blob == "function" ? new Blob([N]) : Buffer.from(N) : N; } function v(N, w, A) { let M = N; if (N && !A && typeof N == "object") {
    if (B.endsWith(w, "{}"))
        w = c ? w : w.slice(0, -2), N = JSON.stringify(N);
    else if (B.isArray(N) && N1(N) || (B.isFileList(N) || B.endsWith(w, "[]")) && (M = B.toArray(N)))
        return w = Jp(w), M.forEach(function (G, X) { !(B.isUndefined(G) || G === null) && r.append(h === !0 ? Vx([w], X, m) : h === null ? w : w + "[]", y(G)); }), !1;
} return Fd(N) ? !0 : (r.append(Vx(A, w, m), y(N)), !1); } const x = [], j = Object.assign(w1, { defaultVisitor: v, convertValue: y, isVisitable: Fd }); function k(N, w) { if (!B.isUndefined(N)) {
    if (x.indexOf(N) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
    x.push(N), B.forEach(N, function (M, q) { (!(B.isUndefined(M) || M === null) && u.call(r, M, B.isString(q) ? q.trim() : q, w, j)) === !0 && k(M, w ? w.concat(q) : [q]); }), x.pop();
} } if (!B.isObject(l))
    throw new TypeError("data must be an object"); return k(l), r; }
function Gx(l) { const r = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" }; return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g, function (c) { return r[c]; }); }
function iu(l, r) { this._pairs = [], l && Fi(l, this, r); }
const Fp = iu.prototype;
Fp.append = function (r, i) { this._pairs.push([r, i]); };
Fp.toString = function (r) { const i = r ? function (c) { return r.call(this, c, Gx); } : Gx; return this._pairs.map(function (u) { return i(u[0]) + "=" + i(u[1]); }, "").join("&"); };
function S1(l) { return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+"); }
function $p(l, r, i) { if (!r)
    return l; const c = i && i.encode || S1; B.isFunction(i) && (i = { serialize: i }); const u = i && i.serialize; let m; if (u ? m = u(r, i) : m = B.isURLSearchParams(r) ? r.toString() : new iu(r, i).toString(c), m) {
    const h = l.indexOf("#");
    h !== -1 && (l = l.slice(0, h)), l += (l.indexOf("?") === -1 ? "?" : "&") + m;
} return l; }
class Qx {
    constructor() { this.handlers = []; }
    use(r, i, c) { return this.handlers.push({ fulfilled: r, rejected: i, synchronous: c ? c.synchronous : !1, runWhen: c ? c.runWhen : null }), this.handlers.length - 1; }
    eject(r) { this.handlers[r] && (this.handlers[r] = null); }
    clear() { this.handlers && (this.handlers = []); }
    forEach(r) { B.forEach(this.handlers, function (c) { c !== null && r(c); }); }
}
const Pp = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, k1 = typeof URLSearchParams < "u" ? URLSearchParams : iu, C1 = typeof FormData < "u" ? FormData : null, A1 = typeof Blob < "u" ? Blob : null, T1 = { isBrowser: !0, classes: { URLSearchParams: k1, FormData: C1, Blob: A1 }, protocols: ["http", "https", "file", "blob", "url", "data"] }, cu = typeof window < "u" && typeof document < "u", $d = typeof navigator == "object" && navigator || void 0, E1 = cu && (!$d || ["ReactNative", "NativeScript", "NS"].indexOf($d.product) < 0), M1 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", _1 = cu && window.location.href || "http://localhost", O1 = Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: cu, hasStandardBrowserEnv: E1, hasStandardBrowserWebWorkerEnv: M1, navigator: $d, origin: _1 }, Symbol.toStringTag, { value: "Module" })), ft = { ...O1, ...T1 };
function D1(l, r) { return Fi(l, new ft.classes.URLSearchParams, { visitor: function (i, c, u, m) { return ft.isNode && B.isBuffer(i) ? (this.append(c, i.toString("base64")), !1) : m.defaultVisitor.apply(this, arguments); }, ...r }); }
function z1(l) { return B.matchAll(/\w+|\[(\w*)]/g, l).map(r => r[0] === "[]" ? "" : r[1] || r[0]); }
function R1(l) { const r = {}, i = Object.keys(l); let c; const u = i.length; let m; for (c = 0; c < u; c++)
    m = i[c], r[m] = l[m]; return r; }
function Ip(l) { function r(i, c, u, m) { let h = i[m++]; if (h === "__proto__")
    return !0; const g = Number.isFinite(+h), b = m >= i.length; return h = !h && B.isArray(u) ? u.length : h, b ? (B.hasOwnProp(u, h) ? u[h] = [u[h], c] : u[h] = c, !g) : ((!u[h] || !B.isObject(u[h])) && (u[h] = []), r(i, c, u[h], m) && B.isArray(u[h]) && (u[h] = R1(u[h])), !g); } if (B.isFormData(l) && B.isFunction(l.entries)) {
    const i = {};
    return B.forEachEntry(l, (c, u) => { r(z1(c), u, i, 0); }), i;
} return null; }
function B1(l, r, i) { if (B.isString(l))
    try {
        return (r || JSON.parse)(l), B.trim(l);
    }
    catch (c) {
        if (c.name !== "SyntaxError")
            throw c;
    } return (i || JSON.stringify)(l); }
const Fn = { transitional: Pp, adapter: ["xhr", "http", "fetch"], transformRequest: [function (r, i) { const c = i.getContentType() || "", u = c.indexOf("application/json") > -1, m = B.isObject(r); if (m && B.isHTMLForm(r) && (r = new FormData(r)), B.isFormData(r))
            return u ? JSON.stringify(Ip(r)) : r; if (B.isArrayBuffer(r) || B.isBuffer(r) || B.isStream(r) || B.isFile(r) || B.isBlob(r) || B.isReadableStream(r))
            return r; if (B.isArrayBufferView(r))
            return r.buffer; if (B.isURLSearchParams(r))
            return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString(); let g; if (m) {
            if (c.indexOf("application/x-www-form-urlencoded") > -1)
                return D1(r, this.formSerializer).toString();
            if ((g = B.isFileList(r)) || c.indexOf("multipart/form-data") > -1) {
                const b = this.env && this.env.FormData;
                return Fi(g ? { "files[]": r } : r, b && new b, this.formSerializer);
            }
        } return m || u ? (i.setContentType("application/json", !1), B1(r)) : r; }], transformResponse: [function (r) { const i = this.transitional || Fn.transitional, c = i && i.forcedJSONParsing, u = this.responseType === "json"; if (B.isResponse(r) || B.isReadableStream(r))
            return r; if (r && B.isString(r) && (c && !this.responseType || u)) {
            const h = !(i && i.silentJSONParsing) && u;
            try {
                return JSON.parse(r, this.parseReviver);
            }
            catch (g) {
                if (h)
                    throw g.name === "SyntaxError" ? oe.from(g, oe.ERR_BAD_RESPONSE, this, null, this.response) : g;
            }
        } return r; }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: ft.classes.FormData, Blob: ft.classes.Blob }, validateStatus: function (r) { return r >= 200 && r < 300; }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
B.forEach(["delete", "get", "head", "post", "put", "patch"], l => { Fn.headers[l] = {}; });
const q1 = B.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), U1 = l => {
    const r = {};
    let i, c, u;
    return l && l.split(`
`).forEach(function (h) { u = h.indexOf(":"), i = h.substring(0, u).trim().toLowerCase(), c = h.substring(u + 1).trim(), !(!i || r[i] && q1[i]) && (i === "set-cookie" ? r[i] ? r[i].push(c) : r[i] = [c] : r[i] = r[i] ? r[i] + ", " + c : c); }), r;
}, Kx = Symbol("internals");
function qn(l) { return l && String(l).trim().toLowerCase(); }
function Mi(l) { return l === !1 || l == null ? l : B.isArray(l) ? l.map(Mi) : String(l); }
function L1(l) { const r = Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; let c; for (; c = i.exec(l);)
    r[c[1]] = c[2]; return r; }
const H1 = l => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function Td(l, r, i, c, u) { if (B.isFunction(c))
    return c.call(this, r, i); if (u && (r = i), !!B.isString(r)) {
    if (B.isString(c))
        return r.indexOf(c) !== -1;
    if (B.isRegExp(c))
        return c.test(r);
} }
function V1(l) { return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, i, c) => i.toUpperCase() + c); }
function G1(l, r) { const i = B.toCamelCase(" " + r); ["get", "set", "has"].forEach(c => { Object.defineProperty(l, c + i, { value: function (u, m, h) { return this[c].call(this, r, u, m, h); }, configurable: !0 }); }); }
let St = class {
    constructor(r) { r && this.set(r); }
    set(r, i, c) { const u = this; function m(g, b, y) { const v = qn(b); if (!v)
        throw new Error("header name must be a non-empty string"); const x = B.findKey(u, v); (!x || u[x] === void 0 || y === !0 || y === void 0 && u[x] !== !1) && (u[x || b] = Mi(g)); } const h = (g, b) => B.forEach(g, (y, v) => m(y, v, b)); if (B.isPlainObject(r) || r instanceof this.constructor)
        h(r, i);
    else if (B.isString(r) && (r = r.trim()) && !H1(r))
        h(U1(r), i);
    else if (B.isObject(r) && B.isIterable(r)) {
        let g = {}, b, y;
        for (const v of r) {
            if (!B.isArray(v))
                throw TypeError("Object iterator must return a key-value pair");
            g[y = v[0]] = (b = g[y]) ? B.isArray(b) ? [...b, v[1]] : [b, v[1]] : v[1];
        }
        h(g, i);
    }
    else
        r != null && m(i, r, c); return this; }
    get(r, i) { if (r = qn(r), r) {
        const c = B.findKey(this, r);
        if (c) {
            const u = this[c];
            if (!i)
                return u;
            if (i === !0)
                return L1(u);
            if (B.isFunction(i))
                return i.call(this, u, c);
            if (B.isRegExp(i))
                return i.exec(u);
            throw new TypeError("parser must be boolean|regexp|function");
        }
    } }
    has(r, i) { if (r = qn(r), r) {
        const c = B.findKey(this, r);
        return !!(c && this[c] !== void 0 && (!i || Td(this, this[c], c, i)));
    } return !1; }
    delete(r, i) { const c = this; let u = !1; function m(h) { if (h = qn(h), h) {
        const g = B.findKey(c, h);
        g && (!i || Td(c, c[g], g, i)) && (delete c[g], u = !0);
    } } return B.isArray(r) ? r.forEach(m) : m(r), u; }
    clear(r) { const i = Object.keys(this); let c = i.length, u = !1; for (; c--;) {
        const m = i[c];
        (!r || Td(this, this[m], m, r, !0)) && (delete this[m], u = !0);
    } return u; }
    normalize(r) { const i = this, c = {}; return B.forEach(this, (u, m) => { const h = B.findKey(c, m); if (h) {
        i[h] = Mi(u), delete i[m];
        return;
    } const g = r ? V1(m) : String(m).trim(); g !== m && delete i[m], i[g] = Mi(u), c[g] = !0; }), this; }
    concat(...r) { return this.constructor.concat(this, ...r); }
    toJSON(r) { const i = Object.create(null); return B.forEach(this, (c, u) => { c != null && c !== !1 && (i[u] = r && B.isArray(c) ? c.join(", ") : c); }), i; }
    [Symbol.iterator]() { return Object.entries(this.toJSON())[Symbol.iterator](); }
    toString() {
        return Object.entries(this.toJSON()).map(([r, i]) => r + ": " + i).join(`
`);
    }
    getSetCookie() { return this.get("set-cookie") || []; }
    get [Symbol.toStringTag]() { return "AxiosHeaders"; }
    static from(r) { return r instanceof this ? r : new this(r); }
    static concat(r, ...i) { const c = new this(r); return i.forEach(u => c.set(u)), c; }
    static accessor(r) { const c = (this[Kx] = this[Kx] = { accessors: {} }).accessors, u = this.prototype; function m(h) { const g = qn(h); c[g] || (G1(u, h), c[g] = !0); } return B.isArray(r) ? r.forEach(m) : m(r), this; }
};
St.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.reduceDescriptors(St.prototype, ({ value: l }, r) => { let i = r[0].toUpperCase() + r.slice(1); return { get: () => l, set(c) { this[i] = c; } }; });
B.freezeMethods(St);
function Ed(l, r) { const i = this || Fn, c = r || i, u = St.from(c.headers); let m = c.data; return B.forEach(l, function (g) { m = g.call(i, m, u.normalize(), r ? r.status : void 0); }), u.normalize(), m; }
function Wp(l) { return !!(l && l.__CANCEL__); }
function ql(l, r, i) { oe.call(this, l ?? "canceled", oe.ERR_CANCELED, r, i), this.name = "CanceledError"; }
B.inherits(ql, oe, { __CANCEL__: !0 });
function eg(l, r, i) { const c = i.config.validateStatus; !i.status || !c || c(i.status) ? l(i) : r(new oe("Request failed with status code " + i.status, [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4], i.config, i.request, i)); }
function Q1(l) { const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l); return r && r[1] || ""; }
function K1(l, r) { l = l || 10; const i = new Array(l), c = new Array(l); let u = 0, m = 0, h; return r = r !== void 0 ? r : 1e3, function (b) { const y = Date.now(), v = c[m]; h || (h = y), i[u] = b, c[u] = y; let x = m, j = 0; for (; x !== u;)
    j += i[x++], x = x % l; if (u = (u + 1) % l, u === m && (m = (m + 1) % l), y - h < r)
    return; const k = v && y - v; return k ? Math.round(j * 1e3 / k) : void 0; }; }
function Y1(l, r) { let i = 0, c = 1e3 / r, u, m; const h = (y, v = Date.now()) => { i = v, u = null, m && (clearTimeout(m), m = null), l(...y); }; return [(...y) => { const v = Date.now(), x = v - i; x >= c ? h(y, v) : (u = y, m || (m = setTimeout(() => { m = null, h(u); }, c - x))); }, () => u && h(u)]; }
const Di = (l, r, i = 3) => { let c = 0; const u = K1(50, 250); return Y1(m => { const h = m.loaded, g = m.lengthComputable ? m.total : void 0, b = h - c, y = u(b), v = h <= g; c = h; const x = { loaded: h, total: g, progress: g ? h / g : void 0, bytes: b, rate: y || void 0, estimated: y && g && v ? (g - h) / y : void 0, event: m, lengthComputable: g != null, [r ? "download" : "upload"]: !0 }; l(x); }, i); }, Yx = (l, r) => { const i = l != null; return [c => r[0]({ lengthComputable: i, total: l, loaded: c }), r[1]]; }, Xx = l => (...r) => B.asap(() => l(...r)), X1 = ft.hasStandardBrowserEnv ? ((l, r) => i => (i = new URL(i, ft.origin), l.protocol === i.protocol && l.host === i.host && (r || l.port === i.port)))(new URL(ft.origin), ft.navigator && /(msie|trident)/i.test(ft.navigator.userAgent)) : () => !0, Z1 = ft.hasStandardBrowserEnv ? { write(l, r, i, c, u, m, h) { if (typeof document > "u")
        return; const g = [`${l}=${encodeURIComponent(r)}`]; B.isNumber(i) && g.push(`expires=${new Date(i).toUTCString()}`), B.isString(c) && g.push(`path=${c}`), B.isString(u) && g.push(`domain=${u}`), m === !0 && g.push("secure"), B.isString(h) && g.push(`SameSite=${h}`), document.cookie = g.join("; "); }, read(l) { if (typeof document > "u")
        return null; const r = document.cookie.match(new RegExp("(?:^|; )" + l + "=([^;]*)")); return r ? decodeURIComponent(r[1]) : null; }, remove(l) { this.write(l, "", Date.now() - 864e5, "/"); } } : { write() { }, read() { return null; }, remove() { } };
function J1(l) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l); }
function F1(l, r) { return r ? l.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : l; }
function tg(l, r, i) { let c = !J1(r); return l && (c || i == !1) ? F1(l, r) : r; }
const Zx = l => l instanceof St ? { ...l } : l;
function Ga(l, r) { r = r || {}; const i = {}; function c(y, v, x, j) { return B.isPlainObject(y) && B.isPlainObject(v) ? B.merge.call({ caseless: j }, y, v) : B.isPlainObject(v) ? B.merge({}, v) : B.isArray(v) ? v.slice() : v; } function u(y, v, x, j) { if (B.isUndefined(v)) {
    if (!B.isUndefined(y))
        return c(void 0, y, x, j);
}
else
    return c(y, v, x, j); } function m(y, v) { if (!B.isUndefined(v))
    return c(void 0, v); } function h(y, v) { if (B.isUndefined(v)) {
    if (!B.isUndefined(y))
        return c(void 0, y);
}
else
    return c(void 0, v); } function g(y, v, x) { if (x in r)
    return c(y, v); if (x in l)
    return c(void 0, y); } const b = { url: m, method: m, data: m, baseURL: h, transformRequest: h, transformResponse: h, paramsSerializer: h, timeout: h, timeoutMessage: h, withCredentials: h, withXSRFToken: h, adapter: h, responseType: h, xsrfCookieName: h, xsrfHeaderName: h, onUploadProgress: h, onDownloadProgress: h, decompress: h, maxContentLength: h, maxBodyLength: h, beforeRedirect: h, transport: h, httpAgent: h, httpsAgent: h, cancelToken: h, socketPath: h, responseEncoding: h, validateStatus: g, headers: (y, v, x) => u(Zx(y), Zx(v), x, !0) }; return B.forEach(Object.keys({ ...l, ...r }), function (v) { const x = b[v] || u, j = x(l[v], r[v], v); B.isUndefined(j) && x !== g || (i[v] = j); }), i; }
const sg = l => { const r = Ga({}, l); let { data: i, withXSRFToken: c, xsrfHeaderName: u, xsrfCookieName: m, headers: h, auth: g } = r; if (r.headers = h = St.from(h), r.url = $p(tg(r.baseURL, r.url, r.allowAbsoluteUrls), l.params, l.paramsSerializer), g && h.set("Authorization", "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))), B.isFormData(i)) {
    if (ft.hasStandardBrowserEnv || ft.hasStandardBrowserWebWorkerEnv)
        h.setContentType(void 0);
    else if (B.isFunction(i.getHeaders)) {
        const b = i.getHeaders(), y = ["content-type", "content-length"];
        Object.entries(b).forEach(([v, x]) => { y.includes(v.toLowerCase()) && h.set(v, x); });
    }
} if (ft.hasStandardBrowserEnv && (c && B.isFunction(c) && (c = c(r)), c || c !== !1 && X1(r.url))) {
    const b = u && m && Z1.read(m);
    b && h.set(u, b);
} return r; }, $1 = typeof XMLHttpRequest < "u", P1 = $1 && function (l) { return new Promise(function (i, c) { const u = sg(l); let m = u.data; const h = St.from(u.headers).normalize(); let { responseType: g, onUploadProgress: b, onDownloadProgress: y } = u, v, x, j, k, N; function w() { k && k(), N && N(), u.cancelToken && u.cancelToken.unsubscribe(v), u.signal && u.signal.removeEventListener("abort", v); } let A = new XMLHttpRequest; A.open(u.method.toUpperCase(), u.url, !0), A.timeout = u.timeout; function M() { if (!A)
    return; const G = St.from("getAllResponseHeaders" in A && A.getAllResponseHeaders()), D = { data: !g || g === "text" || g === "json" ? A.responseText : A.response, status: A.status, statusText: A.statusText, headers: G, config: l, request: A }; eg(function (L) { i(L), w(); }, function (L) { c(L), w(); }, D), A = null; } "onloadend" in A ? A.onloadend = M : A.onreadystatechange = function () { !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.indexOf("file:") === 0) || setTimeout(M); }, A.onabort = function () { A && (c(new oe("Request aborted", oe.ECONNABORTED, l, A)), A = null); }, A.onerror = function (X) { const D = X && X.message ? X.message : "Network Error", F = new oe(D, oe.ERR_NETWORK, l, A); F.event = X || null, c(F), A = null; }, A.ontimeout = function () { let X = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded"; const D = u.transitional || Pp; u.timeoutErrorMessage && (X = u.timeoutErrorMessage), c(new oe(X, D.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED, l, A)), A = null; }, m === void 0 && h.setContentType(null), "setRequestHeader" in A && B.forEach(h.toJSON(), function (X, D) { A.setRequestHeader(D, X); }), B.isUndefined(u.withCredentials) || (A.withCredentials = !!u.withCredentials), g && g !== "json" && (A.responseType = u.responseType), y && ([j, N] = Di(y, !0), A.addEventListener("progress", j)), b && A.upload && ([x, k] = Di(b), A.upload.addEventListener("progress", x), A.upload.addEventListener("loadend", k)), (u.cancelToken || u.signal) && (v = G => { A && (c(!G || G.type ? new ql(null, l, A) : G), A.abort(), A = null); }, u.cancelToken && u.cancelToken.subscribe(v), u.signal && (u.signal.aborted ? v() : u.signal.addEventListener("abort", v))); const q = Q1(u.url); if (q && ft.protocols.indexOf(q) === -1) {
    c(new oe("Unsupported protocol " + q + ":", oe.ERR_BAD_REQUEST, l));
    return;
} A.send(m || null); }); }, I1 = (l, r) => { const { length: i } = l = l ? l.filter(Boolean) : []; if (r || i) {
    let c = new AbortController, u;
    const m = function (y) { if (!u) {
        u = !0, g();
        const v = y instanceof Error ? y : this.reason;
        c.abort(v instanceof oe ? v : new ql(v instanceof Error ? v.message : v));
    } };
    let h = r && setTimeout(() => { h = null, m(new oe(`timeout ${r} of ms exceeded`, oe.ETIMEDOUT)); }, r);
    const g = () => { l && (h && clearTimeout(h), h = null, l.forEach(y => { y.unsubscribe ? y.unsubscribe(m) : y.removeEventListener("abort", m); }), l = null); };
    l.forEach(y => y.addEventListener("abort", m));
    const { signal: b } = c;
    return b.unsubscribe = () => B.asap(g), b;
} }, W1 = function* (l, r) { let i = l.byteLength; if (i < r) {
    yield l;
    return;
} let c = 0, u; for (; c < i;)
    u = c + r, yield l.slice(c, u), c = u; }, ej = async function* (l, r) { for await (const i of tj(l))
    yield* W1(i, r); }, tj = async function* (l) { if (l[Symbol.asyncIterator]) {
    yield* l;
    return;
} const r = l.getReader(); try {
    for (;;) {
        const { done: i, value: c } = await r.read();
        if (i)
            break;
        yield c;
    }
}
finally {
    await r.cancel();
} }, Jx = (l, r, i, c) => { const u = ej(l, r); let m = 0, h, g = b => { h || (h = !0, c && c(b)); }; return new ReadableStream({ async pull(b) { try {
        const { done: y, value: v } = await u.next();
        if (y) {
            g(), b.close();
            return;
        }
        let x = v.byteLength;
        if (i) {
            let j = m += x;
            i(j);
        }
        b.enqueue(new Uint8Array(v));
    }
    catch (y) {
        throw g(y), y;
    } }, cancel(b) { return g(b), u.return(); } }, { highWaterMark: 2 }); }, Fx = 64 * 1024, { isFunction: ji } = B, sj = (({ Request: l, Response: r }) => ({ Request: l, Response: r }))(B.global), { ReadableStream: $x, TextEncoder: Px } = B.global, Ix = (l, ...r) => { try {
    return !!l(...r);
}
catch {
    return !1;
} }, aj = l => { l = B.merge.call({ skipUndefined: !0 }, sj, l); const { fetch: r, Request: i, Response: c } = l, u = r ? ji(r) : typeof fetch == "function", m = ji(i), h = ji(c); if (!u)
    return !1; const g = u && ji($x), b = u && (typeof Px == "function" ? (N => w => N.encode(w))(new Px) : async (N) => new Uint8Array(await new i(N).arrayBuffer())), y = m && g && Ix(() => { let N = !1; const w = new i(ft.origin, { body: new $x, method: "POST", get duplex() { return N = !0, "half"; } }).headers.has("Content-Type"); return N && !w; }), v = h && g && Ix(() => B.isReadableStream(new c("").body)), x = { stream: v && (N => N.body) }; u && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(N => { !x[N] && (x[N] = (w, A) => { let M = w && w[N]; if (M)
    return M.call(w); throw new oe(`Response type '${N}' is not supported`, oe.ERR_NOT_SUPPORT, A); }); }); const j = async (N) => { if (N == null)
    return 0; if (B.isBlob(N))
    return N.size; if (B.isSpecCompliantForm(N))
    return (await new i(ft.origin, { method: "POST", body: N }).arrayBuffer()).byteLength; if (B.isArrayBufferView(N) || B.isArrayBuffer(N))
    return N.byteLength; if (B.isURLSearchParams(N) && (N = N + ""), B.isString(N))
    return (await b(N)).byteLength; }, k = async (N, w) => { const A = B.toFiniteNumber(N.getContentLength()); return A ?? j(w); }; return async (N) => { let { url: w, method: A, data: M, signal: q, cancelToken: G, timeout: X, onDownloadProgress: D, onUploadProgress: F, responseType: L, headers: Y, withCredentials: re = "same-origin", fetchOptions: Le } = sg(N), He = r || fetch; L = L ? (L + "").toLowerCase() : "text"; let we = I1([q, G && G.toAbortSignal()], X), Fe = null; const qe = we && we.unsubscribe && (() => { we.unsubscribe(); }); let se; try {
    if (F && y && A !== "get" && A !== "head" && (se = await k(Y, M)) !== 0) {
        let ke = new i(w, { method: "POST", body: M, duplex: "half" }), ie;
        if (B.isFormData(M) && (ie = ke.headers.get("content-type")) && Y.setContentType(ie), ke.body) {
            const [ae, fe] = Yx(se, Di(Xx(F)));
            M = Jx(ke.body, Fx, ae, fe);
        }
    }
    B.isString(re) || (re = re ? "include" : "omit");
    const E = m && "credentials" in i.prototype, $ = { ...Le, signal: we, method: A.toUpperCase(), headers: Y.normalize().toJSON(), body: M, duplex: "half", credentials: E ? re : void 0 };
    Fe = m && new i(w, $);
    let K = await (m ? He(Fe, Le) : He(w, $));
    const pe = v && (L === "stream" || L === "response");
    if (v && (D || pe && qe)) {
        const ke = {};
        ["status", "statusText", "headers"].forEach(lt => { ke[lt] = K[lt]; });
        const ie = B.toFiniteNumber(K.headers.get("content-length")), [ae, fe] = D && Yx(ie, Di(Xx(D), !0)) || [];
        K = new c(Jx(K.body, Fx, ae, () => { fe && fe(), qe && qe(); }), ke);
    }
    L = L || "text";
    let me = await x[B.findKey(x, L) || "text"](K, N);
    return !pe && qe && qe(), await new Promise((ke, ie) => { eg(ke, ie, { data: me, headers: St.from(K.headers), status: K.status, statusText: K.statusText, config: N, request: Fe }); });
}
catch (E) {
    throw qe && qe(), E && E.name === "TypeError" && /Load failed|fetch/i.test(E.message) ? Object.assign(new oe("Network Error", oe.ERR_NETWORK, N, Fe), { cause: E.cause || E }) : oe.from(E, E && E.code, N, Fe);
} }; }, lj = new Map, ag = l => { let r = l && l.env || {}; const { fetch: i, Request: c, Response: u } = r, m = [c, u, i]; let h = m.length, g = h, b, y, v = lj; for (; g--;)
    b = m[g], y = v.get(b), y === void 0 && v.set(b, y = g ? new Map : aj(r)), v = y; return y; };
ag();
const ou = { http: j1, xhr: P1, fetch: { get: ag } };
B.forEach(ou, (l, r) => { if (l) {
    try {
        Object.defineProperty(l, "name", { value: r });
    }
    catch { }
    Object.defineProperty(l, "adapterName", { value: r });
} });
const Wx = l => `- ${l}`, nj = l => B.isFunction(l) || l === null || l === !1;
function rj(l, r) {
    l = B.isArray(l) ? l : [l];
    const { length: i } = l;
    let c, u;
    const m = {};
    for (let h = 0; h < i; h++) {
        c = l[h];
        let g;
        if (u = c, !nj(c) && (u = ou[(g = String(c)).toLowerCase()], u === void 0))
            throw new oe(`Unknown adapter '${g}'`);
        if (u && (B.isFunction(u) || (u = u.get(r))))
            break;
        m[g || "#" + h] = u;
    }
    if (!u) {
        const h = Object.entries(m).map(([b, y]) => `adapter ${b} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build"));
        let g = i ? h.length > 1 ? `since :
` + h.map(Wx).join(`
`) : " " + Wx(h[0]) : "as no adapter specified";
        throw new oe("There is no suitable adapter to dispatch the request " + g, "ERR_NOT_SUPPORT");
    }
    return u;
}
const lg = { getAdapter: rj, adapters: ou };
function Md(l) { if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new ql(null, l); }
function ep(l) { return Md(l), l.headers = St.from(l.headers), l.data = Ed.call(l, l.transformRequest), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), lg.getAdapter(l.adapter || Fn.adapter, l)(l).then(function (c) { return Md(l), c.data = Ed.call(l, l.transformResponse, c), c.headers = St.from(c.headers), c; }, function (c) { return Wp(c) || (Md(l), c && c.response && (c.response.data = Ed.call(l, l.transformResponse, c.response), c.response.headers = St.from(c.response.headers))), Promise.reject(c); }); }
const ng = "1.13.2", $i = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, r) => { $i[l] = function (c) { return typeof c === l || "a" + (r < 1 ? "n " : " ") + l; }; });
const tp = {};
$i.transitional = function (r, i, c) { function u(m, h) { return "[Axios v" + ng + "] Transitional option '" + m + "'" + h + (c ? ". " + c : ""); } return (m, h, g) => { if (r === !1)
    throw new oe(u(h, " has been removed" + (i ? " in " + i : "")), oe.ERR_DEPRECATED); return i && !tp[h] && (tp[h] = !0, console.warn(u(h, " has been deprecated since v" + i + " and will be removed in the near future"))), r ? r(m, h, g) : !0; }; };
$i.spelling = function (r) { return (i, c) => (console.warn(`${c} is likely a misspelling of ${r}`), !0); };
function ij(l, r, i) { if (typeof l != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE); const c = Object.keys(l); let u = c.length; for (; u-- > 0;) {
    const m = c[u], h = r[m];
    if (h) {
        const g = l[m], b = g === void 0 || h(g, m, l);
        if (b !== !0)
            throw new oe("option " + m + " must be " + b, oe.ERR_BAD_OPTION_VALUE);
        continue;
    }
    if (i !== !0)
        throw new oe("Unknown option " + m, oe.ERR_BAD_OPTION);
} }
const _i = { assertOptions: ij, validators: $i }, fs = _i.validators;
let Va = class {
    constructor(r) { this.defaults = r || {}, this.interceptors = { request: new Qx, response: new Qx }; }
    async request(r, i) {
        try {
            return await this._request(r, i);
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
    _request(r, i) { typeof r == "string" ? (i = i || {}, i.url = r) : i = r || {}, i = Ga(this.defaults, i); const { transitional: c, paramsSerializer: u, headers: m } = i; c !== void 0 && _i.assertOptions(c, { silentJSONParsing: fs.transitional(fs.boolean), forcedJSONParsing: fs.transitional(fs.boolean), clarifyTimeoutError: fs.transitional(fs.boolean) }, !1), u != null && (B.isFunction(u) ? i.paramsSerializer = { serialize: u } : _i.assertOptions(u, { encode: fs.function, serialize: fs.function }, !0)), i.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : i.allowAbsoluteUrls = !0), _i.assertOptions(i, { baseUrl: fs.spelling("baseURL"), withXsrfToken: fs.spelling("withXSRFToken") }, !0), i.method = (i.method || this.defaults.method || "get").toLowerCase(); let h = m && B.merge(m.common, m[i.method]); m && B.forEach(["delete", "get", "head", "post", "put", "patch", "common"], N => { delete m[N]; }), i.headers = St.concat(h, m); const g = []; let b = !0; this.interceptors.request.forEach(function (w) { typeof w.runWhen == "function" && w.runWhen(i) === !1 || (b = b && w.synchronous, g.unshift(w.fulfilled, w.rejected)); }); const y = []; this.interceptors.response.forEach(function (w) { y.push(w.fulfilled, w.rejected); }); let v, x = 0, j; if (!b) {
        const N = [ep.bind(this), void 0];
        for (N.unshift(...g), N.push(...y), j = N.length, v = Promise.resolve(i); x < j;)
            v = v.then(N[x++], N[x++]);
        return v;
    } j = g.length; let k = i; for (; x < j;) {
        const N = g[x++], w = g[x++];
        try {
            k = N(k);
        }
        catch (A) {
            w.call(this, A);
            break;
        }
    } try {
        v = ep.call(this, k);
    }
    catch (N) {
        return Promise.reject(N);
    } for (x = 0, j = y.length; x < j;)
        v = v.then(y[x++], y[x++]); return v; }
    getUri(r) { r = Ga(this.defaults, r); const i = tg(r.baseURL, r.url, r.allowAbsoluteUrls); return $p(i, r.params, r.paramsSerializer); }
};
B.forEach(["delete", "get", "head", "options"], function (r) { Va.prototype[r] = function (i, c) { return this.request(Ga(c || {}, { method: r, url: i, data: (c || {}).data })); }; });
B.forEach(["post", "put", "patch"], function (r) { function i(c) { return function (m, h, g) { return this.request(Ga(g || {}, { method: r, headers: c ? { "Content-Type": "multipart/form-data" } : {}, url: m, data: h })); }; } Va.prototype[r] = i(), Va.prototype[r + "Form"] = i(!0); });
let cj = class rg {
    constructor(r) { if (typeof r != "function")
        throw new TypeError("executor must be a function."); let i; this.promise = new Promise(function (m) { i = m; }); const c = this; this.promise.then(u => { if (!c._listeners)
        return; let m = c._listeners.length; for (; m-- > 0;)
        c._listeners[m](u); c._listeners = null; }), this.promise.then = u => { let m; const h = new Promise(g => { c.subscribe(g), m = g; }).then(u); return h.cancel = function () { c.unsubscribe(m); }, h; }, r(function (m, h, g) { c.reason || (c.reason = new ql(m, h, g), i(c.reason)); }); }
    throwIfRequested() { if (this.reason)
        throw this.reason; }
    subscribe(r) { if (this.reason) {
        r(this.reason);
        return;
    } this._listeners ? this._listeners.push(r) : this._listeners = [r]; }
    unsubscribe(r) { if (!this._listeners)
        return; const i = this._listeners.indexOf(r); i !== -1 && this._listeners.splice(i, 1); }
    toAbortSignal() { const r = new AbortController, i = c => { r.abort(c); }; return this.subscribe(i), r.signal.unsubscribe = () => this.unsubscribe(i), r.signal; }
    static source() { let r; return { token: new rg(function (u) { r = u; }), cancel: r }; }
};
function oj(l) { return function (i) { return l.apply(null, i); }; }
function dj(l) { return B.isObject(l) && l.isAxiosError === !0; }
const Pd = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511, WebServerIsDown: 521, ConnectionTimedOut: 522, OriginIsUnreachable: 523, TimeoutOccurred: 524, SslHandshakeFailed: 525, InvalidSslCertificate: 526 };
Object.entries(Pd).forEach(([l, r]) => { Pd[r] = l; });
function ig(l) { const r = new Va(l), i = Up(Va.prototype.request, r); return B.extend(i, Va.prototype, r, { allOwnKeys: !0 }), B.extend(i, r, null, { allOwnKeys: !0 }), i.create = function (u) { return ig(Ga(l, u)); }, i; }
const Xe = ig(Fn);
Xe.Axios = Va;
Xe.CanceledError = ql;
Xe.CancelToken = cj;
Xe.isCancel = Wp;
Xe.VERSION = ng;
Xe.toFormData = Fi;
Xe.AxiosError = oe;
Xe.Cancel = Xe.CanceledError;
Xe.all = function (r) { return Promise.all(r); };
Xe.spread = oj;
Xe.isAxiosError = dj;
Xe.mergeConfig = Ga;
Xe.AxiosHeaders = St;
Xe.formToJSON = l => Ip(B.isHTMLForm(l) ? new FormData(l) : l);
Xe.getAdapter = lg.getAdapter;
Xe.HttpStatusCode = Pd;
Xe.default = Xe;
const { Axios: I4, AxiosError: W4, CanceledError: ew, isCancel: tw, CancelToken: sw, VERSION: aw, all: lw, Cancel: nw, isAxiosError: rw, spread: iw, toFormData: cw, AxiosHeaders: ow, HttpStatusCode: dw, formToJSON: uw, getAdapter: mw, mergeConfig: fw } = Xe, uj = "/api";
function mj(l) { return l.replace(/_([a-z])/g, (r, i) => i.toUpperCase()); }
function Id(l) { if (Array.isArray(l))
    return l.map(Id); if (l !== null && typeof l == "object" && !(l instanceof Date)) {
    const r = {};
    for (const [i, c] of Object.entries(l)) {
        const u = mj(i);
        r[u] = Id(c);
    }
    return r;
} return l; }
const ne = Xe.create({ baseURL: uj, headers: { "Content-Type": "application/json" } });
ne.interceptors.request.use(l => { const r = gs.getState().token; return r && (l.headers.Authorization = `Bearer ${r}`), l; }, l => Promise.reject(l));
ne.interceptors.response.use(l => (l.data && (l.data = Id(l.data)), l), l => { var r; return ((r = l.response) == null ? void 0 : r.status) === 401 && (gs.getState().logout(), window.location.href = "/login"), Promise.reject(l); });
const cg = { login: (l, r) => ne.post("/auth/login", { username: l, password: r }), verify: () => ne.get("/auth/verify"), logout: () => ne.post("/auth/logout") }, Pi = { getAll: () => ne.get("/projects"), getById: l => ne.get(`/projects/${l}`), create: l => ne.post("/projects", l), update: (l, r) => ne.put(`/projects/${l}`, r), delete: l => ne.delete(`/projects/${l}`), checkCode: l => ne.get(`/projects/check-code/${l}`) }, du = { getByProject: l => ne.get(`/projects/${l}/epics`), create: (l, r) => ne.post(`/projects/${l}/epics`, r), update: (l, r) => ne.put(`/epics/${l}`, r), delete: l => ne.delete(`/epics/${l}`) }, uu = { getByProject: l => ne.get(`/projects/${l}/sprints`), create: (l, r) => ne.post(`/projects/${l}/sprints`, r), update: (l, r) => ne.put(`/sprints/${l}`, r), delete: l => ne.delete(`/sprints/${l}`) }, cs = { getAll: l => ne.get("/tasks", { params: l }), getById: l => ne.get(`/tasks/${l}`), create: l => ne.post("/tasks", l), update: (l, r) => ne.put(`/tasks/${l}`, r), complete: (l, r) => ne.put(`/tasks/${l}/complete`, { notes: r }), delete: l => ne.delete(`/tasks/${l}`), getItems: l => ne.get(`/tasks/${l}/items`), createItems: (l, r) => ne.post(`/tasks/${l}/items`, { items: r }), completeItem: (l, r, i) => ne.put(`/tasks/${l}/items/${r}/complete`, i), getTags: l => ne.get(`/tasks/${l}/tags`), addTag: (l, r) => ne.post(`/tasks/${l}/tags`, { tag_id: r }), addTagByName: (l, r) => ne.post(`/tasks/${l}/tags`, { tag_name: r }), removeTag: (l, r) => ne.delete(`/tasks/${l}/tags/${r}`) }, fj = { getAll: () => ne.get("/tags"), getTasksByTag: (l, r) => ne.get(`/tasks/by-tag/${l}`, { params: r }) }, hj = { getAll: () => ne.get("/agents"), getById: l => ne.get(`/agents/${l}`), updateStatus: (l, r, i) => ne.put(`/agents/${l}/status`, { status: r, currentTask: i }), getTasks: (l, r) => ne.get(`/agents/${l}/tasks`, { params: { status: r } }) }, Ka = { getAll: l => ne.get("/memories", { params: l }), getById: l => ne.get(`/memories/${l}`), search: (l, r) => ne.get("/memories/search", { params: { q: l, tags: r == null ? void 0 : r.join(",") } }), create: l => ne.post("/memories", l), update: (l, r) => ne.put(`/memories/${l}`, r), delete: l => ne.delete(`/memories/${l}`), boost: (l, r) => ne.post(`/memories/${l}/boost`, { amount: r }), getRelated: l => ne.get(`/memories/${l}/related`), getTags: () => ne.get("/memories/tags"), getStats: () => ne.get("/memories/stats") }, mu = { getOverview: () => ne.get("/dashboard/overview"), getAlerts: () => ne.get("/dashboard/alerts"), getActivity: l => ne.get("/activity", { params: { limit: l } }) };
function xj() { const [l, r] = R.useState(!0), { token: i, isAuthenticated: c, logout: u, login: m, _hasHydrated: h } = gs(); return R.useEffect(() => { if (!h)
    return; async function g() { if (!i) {
    r(!1);
    return;
} try {
    const { data: b } = await cg.verify();
    b.valid && b.user ? m(b.user, i) : u();
}
catch {
    u();
}
finally {
    r(!1);
} } g(); }, [h]), { isChecking: l, isAuthenticated: c }; } /**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pj = l => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), og = (...l) => l.filter((r, i, c) => !!r && r.trim() !== "" && c.indexOf(r) === i).join(" ").trim(); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var gj = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }; /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bj = R.forwardRef(({ color: l = "currentColor", size: r = 24, strokeWidth: i = 2, absoluteStrokeWidth: c, className: u = "", children: m, iconNode: h, ...g }, b) => R.createElement("svg", { ref: b, ...gj, width: r, height: r, stroke: l, strokeWidth: c ? Number(i) * 24 / Number(r) : i, className: og("lucide", u), ...g }, [...h.map(([y, v]) => R.createElement(y, v)), ...Array.isArray(m) ? m : [m]])); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const J = (l, r) => { const i = R.forwardRef(({ className: c, ...u }, m) => R.createElement(bj, { ref: m, iconNode: r, className: og(`lucide-${pj(l)}`, c), ...u })); return i.displayName = `${l}`, i; }; /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qa = J("Activity", [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yj = J("AlignLeft", [["path", { d: "M15 12H3", key: "6jk70r" }], ["path", { d: "M17 18H3", key: "1amg6g" }], ["path", { d: "M21 6H3", key: "1jwq7v" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hs = J("Archive", [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }], ["path", { d: "M10 12h4", key: "a56b0p" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fu = J("ArrowDown", [["path", { d: "M12 5v14", key: "s699le" }], ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pa = J("ArrowLeft", [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vj = J("ArrowUpDown", [["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }], ["path", { d: "M17 20V4", key: "1ejh1v" }], ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }], ["path", { d: "M7 4v16", key: "1glfcx" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qn = J("ArrowUp", [["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }], ["path", { d: "M12 19V5", key: "x0mq9r" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const dg = J("Bell", [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }], ["path", { d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326", key: "11g9vi" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Us = J("Bot", [["path", { d: "M12 8V4H8", key: "hb8ula" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M15 13v2", key: "1xurst" }], ["path", { d: "M9 13v2", key: "rq6x2g" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ul = J("Brain", [["path", { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z", key: "l5xja" }], ["path", { d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z", key: "ep3f8r" }], ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }], ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }], ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }], ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }], ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }], ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }], ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hu = J("Briefcase", [["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ug = J("Building2", [["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }], ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }], ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }], ["path", { d: "M10 6h4", key: "1itunk" }], ["path", { d: "M10 10h4", key: "tcdvrf" }], ["path", { d: "M10 14h4", key: "kelpxr" }], ["path", { d: "M10 18h4", key: "1ulq68" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const jj = J("CalendarDays", [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 14h.01", key: "6423bh" }], ["path", { d: "M12 14h.01", key: "1etili" }], ["path", { d: "M16 14h.01", key: "1gbofw" }], ["path", { d: "M8 18h.01", key: "lrp35t" }], ["path", { d: "M12 18h.01", key: "mhygvu" }], ["path", { d: "M16 18h.01", key: "kzsmim" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ns = J("Calendar", [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nj = J("Camera", [["path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z", key: "1tc9qg" }], ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wj = J("ChartColumn", [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M18 17V9", key: "2bz60n" }], ["path", { d: "M13 17V5", key: "1frdt8" }], ["path", { d: "M8 17v-3", key: "17ska0" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sj = J("ChartNoAxesColumnIncreasing", [["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }], ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }], ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const kj = J("CheckCheck", [["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }], ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _l = J("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Cj = J("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mg = J("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ii = J("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Aj = J("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xt = J("CircleAlert", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Yn = J("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ze = J("CircleCheck", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Tj = J("CircleDot", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fg = J("CirclePlus", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M12 8v8", key: "napkw2" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const zi = J("CircleX", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qe = J("Clock", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const sp = J("Cloud", [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ej = J("Columns3", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["path", { d: "M15 3v18", key: "14nvp0" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ml = J("Copy", [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Mj = J("Database", [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }], ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }], ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ri = J("DollarSign", [["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }], ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qt = J("ExternalLink", [["path", { d: "M15 3h6v6", key: "1q9fwt" }], ["path", { d: "M10 14 21 3", key: "gplh6r" }], ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _d = J("EyeOff", [["path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49", key: "ct8e1f" }], ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }], ["path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143", key: "13bj9a" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Oi = J("Eye", [["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hg = J("FileText", [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _j = J("Filter", [["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xg = J("Flag", [["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }], ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Oj = J("FlaskConical", [["path", { d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2", key: "18mbvz" }], ["path", { d: "M6.453 15h11.094", key: "3shlmq" }], ["path", { d: "M8.5 2h7", key: "csnxdl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xa = J("FolderKanban", [["path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z", key: "1fr9dc" }], ["path", { d: "M8 10v4", key: "tgpxqk" }], ["path", { d: "M12 10v2", key: "hh53o1" }], ["path", { d: "M16 10v6", key: "1d6xys" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xu = J("Folder", [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ap = J("GitBranch", [["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }], ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }], ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }], ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Dj = J("Github", [["path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4", key: "tonef" }], ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pu = J("Globe", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }], ["path", { d: "M2 12h20", key: "9i4pu4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gu = J("GraduationCap", [["path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z", key: "j76jl0" }], ["path", { d: "M22 10v6", key: "1lu8f3" }], ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const zj = J("GripVertical", [["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }], ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }], ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }], ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }], ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }], ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Rj = J("Hash", [["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }], ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }], ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }], ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pg = J("Hourglass", [["path", { d: "M5 22h14", key: "ehvnwv" }], ["path", { d: "M5 2h14", key: "pdyrp9" }], ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22", key: "1d314k" }], ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gg = J("Info", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const lp = J("Key", [["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }], ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }], ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bg = J("Laptop", [["path", { d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16", key: "tarvll" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bj = J("Layers", [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key: "zw3jo" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qj = J("LayoutDashboard", [["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }], ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }], ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }], ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $n = J("LayoutGrid", [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bu = J("Link2", [["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }], ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yg = J("Link", [["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }], ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Uj = J("ListChecks", [["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }], ["path", { d: "M13 6h8", key: "15sg57" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 18h8", key: "oe0vm4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yu = J("ListTodo", [["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }], ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["path", { d: "M13 6h8", key: "15sg57" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 18h8", key: "oe0vm4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pn = J("List", [["path", { d: "M3 12h.01", key: "nlz23k" }], ["path", { d: "M3 18h.01", key: "1tta3j" }], ["path", { d: "M3 6h.01", key: "1rqtza" }], ["path", { d: "M8 12h13", key: "1za7za" }], ["path", { d: "M8 18h13", key: "1lx6n3" }], ["path", { d: "M8 6h13", key: "ik3vkj" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _e = J("LoaderCircle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Lj = J("Lock", [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Hj = J("LogOut", [["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }], ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }], ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vg = J("MessageSquare", [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Wd = J("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vj = J("MousePointer", [["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }], ["path", { d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z", key: "277e5u" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const np = J("Network", [["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }], ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }], ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }], ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }], ["path", { d: "M12 12V8", key: "2874zd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const jg = J("Palette", [["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }], ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }], ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }], ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }], ["path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z", key: "12rzf8" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gj = J("PenLine", [["path", { d: "M12 20h9", key: "t2du7b" }], ["path", { d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z", key: "1ykcvy" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mt = J("Plus", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qj = J("RectangleEllipsis", [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M17 12h.01", key: "1m0b6t" }], ["path", { d: "M7 12h.01", key: "eqddd0" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vu = J("Save", [["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", key: "1c8476" }], ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }], ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ll = J("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Kj = J("Send", [["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z", key: "1ffxy3" }], ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bi = J("Server", [["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }], ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }], ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Wi = J("Settings", [["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", key: "1qme2f" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ng = J("Shield", [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ju = J("SquareChartGantt", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 8h7", key: "kbo1nt" }], ["path", { d: "M8 12h6", key: "ikassy" }], ["path", { d: "M11 16h5", key: "oq65wt" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Yj = J("SquareCheckBig", [["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qi = J("SquarePen", [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }], ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", key: "ohrbg2" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Xj = J("Square", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Zj = J("Star", [["path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z", key: "r04s7s" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ui = J("Sun", [["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }], ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }], ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nu = J("Tag", [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", key: "vktsd0" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wg = J("Tags", [["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" }], ["path", { d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z", key: "135mg7" }], ["circle", { cx: "6.5", cy: "9.5", r: ".5", fill: "currentColor", key: "5pm5xn" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Jj = J("Target", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Fj = J("Terminal", [["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }], ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ec = J("Trash2", [["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const In = J("TrendingUp", [["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }], ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vn = J("TriangleAlert", [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $j = J("Type", [["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }], ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }], ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qs = J("User", [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }], ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sg = J("Users", [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pj = J("WifiOff", [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }], ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }], ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }], ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }], ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ij = J("Wifi", [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const rs = J("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Dl = J("Zap", [["path", { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z", key: "1xq2db" }]]), tc = zp(l => ({ sidebarOpen: !0, theme: "dark", toggleSidebar: () => l(r => ({ sidebarOpen: !r.sidebarOpen })), setSidebarOpen: r => l({ sidebarOpen: r }), setTheme: r => l({ theme: r }), toggleTheme: () => l(r => ({ theme: r.theme === "light" ? "dark" : "light" })) })), Wj = (l, r) => { const i = new Array(l.length + r.length); for (let c = 0; c < l.length; c++)
    i[c] = l[c]; for (let c = 0; c < r.length; c++)
    i[l.length + c] = r[c]; return i; }, eN = (l, r) => ({ classGroupId: l, validator: r }), kg = (l = new Map, r = null, i) => ({ nextPart: l, validators: r, classGroupId: i }), Li = "-", rp = [], tN = "arbitrary..", sN = l => { const r = lN(l), { conflictingClassGroups: i, conflictingClassGroupModifiers: c } = l; return { getClassGroupId: h => { if (h.startsWith("[") && h.endsWith("]"))
        return aN(h); const g = h.split(Li), b = g[0] === "" && g.length > 1 ? 1 : 0; return Cg(g, b, r); }, getConflictingClassGroupIds: (h, g) => { if (g) {
        const b = c[h], y = i[h];
        return b ? y ? Wj(y, b) : b : y || rp;
    } return i[h] || rp; } }; }, Cg = (l, r, i) => { if (l.length - r === 0)
    return i.classGroupId; const u = l[r], m = i.nextPart.get(u); if (m) {
    const y = Cg(l, r + 1, m);
    if (y)
        return y;
} const h = i.validators; if (h === null)
    return; const g = r === 0 ? l.join(Li) : l.slice(r).join(Li), b = h.length; for (let y = 0; y < b; y++) {
    const v = h[y];
    if (v.validator(g))
        return v.classGroupId;
} }, aN = l => l.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => { const r = l.slice(1, -1), i = r.indexOf(":"), c = r.slice(0, i); return c ? tN + c : void 0; })(), lN = l => { const { theme: r, classGroups: i } = l; return nN(i, r); }, nN = (l, r) => { const i = kg(); for (const c in l) {
    const u = l[c];
    wu(u, i, c, r);
} return i; }, wu = (l, r, i, c) => { const u = l.length; for (let m = 0; m < u; m++) {
    const h = l[m];
    rN(h, r, i, c);
} }, rN = (l, r, i, c) => { if (typeof l == "string") {
    iN(l, r, i);
    return;
} if (typeof l == "function") {
    cN(l, r, i, c);
    return;
} oN(l, r, i, c); }, iN = (l, r, i) => { const c = l === "" ? r : Ag(r, l); c.classGroupId = i; }, cN = (l, r, i, c) => { if (dN(l)) {
    wu(l(c), r, i, c);
    return;
} r.validators === null && (r.validators = []), r.validators.push(eN(i, l)); }, oN = (l, r, i, c) => { const u = Object.entries(l), m = u.length; for (let h = 0; h < m; h++) {
    const [g, b] = u[h];
    wu(b, Ag(r, g), i, c);
} }, Ag = (l, r) => { let i = l; const c = r.split(Li), u = c.length; for (let m = 0; m < u; m++) {
    const h = c[m];
    let g = i.nextPart.get(h);
    g || (g = kg(), i.nextPart.set(h, g)), i = g;
} return i; }, dN = l => "isThemeGetter" in l && l.isThemeGetter === !0, uN = l => { if (l < 1)
    return { get: () => { }, set: () => { } }; let r = 0, i = Object.create(null), c = Object.create(null); const u = (m, h) => { i[m] = h, r++, r > l && (r = 0, c = i, i = Object.create(null)); }; return { get(m) { let h = i[m]; if (h !== void 0)
        return h; if ((h = c[m]) !== void 0)
        return u(m, h), h; }, set(m, h) { m in i ? i[m] = h : u(m, h); } }; }, eu = "!", ip = ":", mN = [], cp = (l, r, i, c, u) => ({ modifiers: l, hasImportantModifier: r, baseClassName: i, maybePostfixModifierPosition: c, isExternal: u }), fN = l => { const { prefix: r, experimentalParseClassName: i } = l; let c = u => { const m = []; let h = 0, g = 0, b = 0, y; const v = u.length; for (let w = 0; w < v; w++) {
    const A = u[w];
    if (h === 0 && g === 0) {
        if (A === ip) {
            m.push(u.slice(b, w)), b = w + 1;
            continue;
        }
        if (A === "/") {
            y = w;
            continue;
        }
    }
    A === "[" ? h++ : A === "]" ? h-- : A === "(" ? g++ : A === ")" && g--;
} const x = m.length === 0 ? u : u.slice(b); let j = x, k = !1; x.endsWith(eu) ? (j = x.slice(0, -1), k = !0) : x.startsWith(eu) && (j = x.slice(1), k = !0); const N = y && y > b ? y - b : void 0; return cp(m, k, j, N); }; if (r) {
    const u = r + ip, m = c;
    c = h => h.startsWith(u) ? m(h.slice(u.length)) : cp(mN, !1, h, void 0, !0);
} if (i) {
    const u = c;
    c = m => i({ className: m, parseClassName: u });
} return c; }, hN = l => { const r = new Map; return l.orderSensitiveModifiers.forEach((i, c) => { r.set(i, 1e6 + c); }), i => { const c = []; let u = []; for (let m = 0; m < i.length; m++) {
    const h = i[m], g = h[0] === "[", b = r.has(h);
    g || b ? (u.length > 0 && (u.sort(), c.push(...u), u = []), c.push(h)) : u.push(h);
} return u.length > 0 && (u.sort(), c.push(...u)), c; }; }, xN = l => ({ cache: uN(l.cacheSize), parseClassName: fN(l), sortModifiers: hN(l), ...sN(l) }), pN = /\s+/, gN = (l, r) => { const { parseClassName: i, getClassGroupId: c, getConflictingClassGroupIds: u, sortModifiers: m } = r, h = [], g = l.trim().split(pN); let b = ""; for (let y = g.length - 1; y >= 0; y -= 1) {
    const v = g[y], { isExternal: x, modifiers: j, hasImportantModifier: k, baseClassName: N, maybePostfixModifierPosition: w } = i(v);
    if (x) {
        b = v + (b.length > 0 ? " " + b : b);
        continue;
    }
    let A = !!w, M = c(A ? N.substring(0, w) : N);
    if (!M) {
        if (!A) {
            b = v + (b.length > 0 ? " " + b : b);
            continue;
        }
        if (M = c(N), !M) {
            b = v + (b.length > 0 ? " " + b : b);
            continue;
        }
        A = !1;
    }
    const q = j.length === 0 ? "" : j.length === 1 ? j[0] : m(j).join(":"), G = k ? q + eu : q, X = G + M;
    if (h.indexOf(X) > -1)
        continue;
    h.push(X);
    const D = u(M, A);
    for (let F = 0; F < D.length; ++F) {
        const L = D[F];
        h.push(G + L);
    }
    b = v + (b.length > 0 ? " " + b : b);
} return b; }, bN = (...l) => { let r = 0, i, c, u = ""; for (; r < l.length;)
    (i = l[r++]) && (c = Tg(i)) && (u && (u += " "), u += c); return u; }, Tg = l => { if (typeof l == "string")
    return l; let r, i = ""; for (let c = 0; c < l.length; c++)
    l[c] && (r = Tg(l[c])) && (i && (i += " "), i += r); return i; }, yN = (l, ...r) => { let i, c, u, m; const h = b => { const y = r.reduce((v, x) => x(v), l()); return i = xN(y), c = i.cache.get, u = i.cache.set, m = g, g(b); }, g = b => { const y = c(b); if (y)
    return y; const v = gN(b, i); return u(b, v), v; }; return m = h, (...b) => m(bN(...b)); }, vN = [], at = l => { const r = i => i[l] || vN; return r.isThemeGetter = !0, r; }, Eg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Mg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, jN = /^\d+\/\d+$/, NN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wN = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, SN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, kN = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, CN = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, El = l => jN.test(l), ue = l => !!l && !Number.isNaN(Number(l)), fa = l => !!l && Number.isInteger(Number(l)), Od = l => l.endsWith("%") && ue(l.slice(0, -1)), Bs = l => NN.test(l), AN = () => !0, TN = l => wN.test(l) && !SN.test(l), _g = () => !1, EN = l => kN.test(l), MN = l => CN.test(l), _N = l => !I(l) && !W(l), ON = l => Hl(l, zg, _g), I = l => Eg.test(l), La = l => Hl(l, Rg, TN), Dd = l => Hl(l, qN, ue), op = l => Hl(l, Og, _g), DN = l => Hl(l, Dg, MN), Ni = l => Hl(l, Bg, EN), W = l => Mg.test(l), Un = l => Vl(l, Rg), zN = l => Vl(l, UN), dp = l => Vl(l, Og), RN = l => Vl(l, zg), BN = l => Vl(l, Dg), wi = l => Vl(l, Bg, !0), Hl = (l, r, i) => { const c = Eg.exec(l); return c ? c[1] ? r(c[1]) : i(c[2]) : !1; }, Vl = (l, r, i = !1) => { const c = Mg.exec(l); return c ? c[1] ? r(c[1]) : i : !1; }, Og = l => l === "position" || l === "percentage", Dg = l => l === "image" || l === "url", zg = l => l === "length" || l === "size" || l === "bg-size", Rg = l => l === "length", qN = l => l === "number", UN = l => l === "family-name", Bg = l => l === "shadow", LN = () => { const l = at("color"), r = at("font"), i = at("text"), c = at("font-weight"), u = at("tracking"), m = at("leading"), h = at("breakpoint"), g = at("container"), b = at("spacing"), y = at("radius"), v = at("shadow"), x = at("inset-shadow"), j = at("text-shadow"), k = at("drop-shadow"), N = at("blur"), w = at("perspective"), A = at("aspect"), M = at("ease"), q = at("animate"), G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], X = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"], D = () => [...X(), W, I], F = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", "contain", "none"], Y = () => [W, I, b], re = () => [El, "full", "auto", ...Y()], Le = () => [fa, "none", "subgrid", W, I], He = () => ["auto", { span: ["full", fa, W, I] }, fa, W, I], we = () => [fa, "auto", W, I], Fe = () => ["auto", "min", "max", "fr", W, I], qe = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], se = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], E = () => ["auto", ...Y()], $ = () => [El, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Y()], K = () => [l, W, I], pe = () => [...X(), dp, op, { position: [W, I] }], me = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }], ke = () => ["auto", "cover", "contain", RN, ON, { size: [W, I] }], ie = () => [Od, Un, La], ae = () => ["", "none", "full", y, W, I], fe = () => ["", ue, Un, La], lt = () => ["solid", "dashed", "dotted", "double"], Wt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Ue = () => [ue, Od, dp, op], ya = () => ["", "none", N, W, I], es = () => ["none", ue, W, I], Ls = () => ["none", ue, W, I], Hs = () => [ue, W, I], Vs = () => [El, "full", ...Y()]; return { cacheSize: 500, theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [Bs], breakpoint: [Bs], color: [AN], container: [Bs], "drop-shadow": [Bs], ease: ["in", "out", "in-out"], font: [_N], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [Bs], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [Bs], shadow: [Bs], spacing: ["px", ue], text: [Bs], "text-shadow": [Bs], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] }, classGroups: { aspect: [{ aspect: ["auto", "square", El, I, W, A] }], container: ["container"], columns: [{ columns: [ue, I, W, g] }], "break-after": [{ "break-after": G() }], "break-before": [{ "break-before": G() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], sr: ["sr-only", "not-sr-only"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: D() }], overflow: [{ overflow: F() }], "overflow-x": [{ "overflow-x": F() }], "overflow-y": [{ "overflow-y": F() }], overscroll: [{ overscroll: L() }], "overscroll-x": [{ "overscroll-x": L() }], "overscroll-y": [{ "overscroll-y": L() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: re() }], "inset-x": [{ "inset-x": re() }], "inset-y": [{ "inset-y": re() }], start: [{ start: re() }], end: [{ end: re() }], top: [{ top: re() }], right: [{ right: re() }], bottom: [{ bottom: re() }], left: [{ left: re() }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [fa, "auto", W, I] }], basis: [{ basis: [El, "full", "auto", g, ...Y()] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }], flex: [{ flex: [ue, El, "auto", "initial", "none", I] }], grow: [{ grow: ["", ue, W, I] }], shrink: [{ shrink: ["", ue, W, I] }], order: [{ order: [fa, "first", "last", "none", W, I] }], "grid-cols": [{ "grid-cols": Le() }], "col-start-end": [{ col: He() }], "col-start": [{ "col-start": we() }], "col-end": [{ "col-end": we() }], "grid-rows": [{ "grid-rows": Le() }], "row-start-end": [{ row: He() }], "row-start": [{ "row-start": we() }], "row-end": [{ "row-end": we() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": Fe() }], "auto-rows": [{ "auto-rows": Fe() }], gap: [{ gap: Y() }], "gap-x": [{ "gap-x": Y() }], "gap-y": [{ "gap-y": Y() }], "justify-content": [{ justify: [...qe(), "normal"] }], "justify-items": [{ "justify-items": [...se(), "normal"] }], "justify-self": [{ "justify-self": ["auto", ...se()] }], "align-content": [{ content: ["normal", ...qe()] }], "align-items": [{ items: [...se(), { baseline: ["", "last"] }] }], "align-self": [{ self: ["auto", ...se(), { baseline: ["", "last"] }] }], "place-content": [{ "place-content": qe() }], "place-items": [{ "place-items": [...se(), "baseline"] }], "place-self": [{ "place-self": ["auto", ...se()] }], p: [{ p: Y() }], px: [{ px: Y() }], py: [{ py: Y() }], ps: [{ ps: Y() }], pe: [{ pe: Y() }], pt: [{ pt: Y() }], pr: [{ pr: Y() }], pb: [{ pb: Y() }], pl: [{ pl: Y() }], m: [{ m: E() }], mx: [{ mx: E() }], my: [{ my: E() }], ms: [{ ms: E() }], me: [{ me: E() }], mt: [{ mt: E() }], mr: [{ mr: E() }], mb: [{ mb: E() }], ml: [{ ml: E() }], "space-x": [{ "space-x": Y() }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": Y() }], "space-y-reverse": ["space-y-reverse"], size: [{ size: $() }], w: [{ w: [g, "screen", ...$()] }], "min-w": [{ "min-w": [g, "screen", "none", ...$()] }], "max-w": [{ "max-w": [g, "screen", "none", "prose", { screen: [h] }, ...$()] }], h: [{ h: ["screen", "lh", ...$()] }], "min-h": [{ "min-h": ["screen", "lh", "none", ...$()] }], "max-h": [{ "max-h": ["screen", "lh", ...$()] }], "font-size": [{ text: ["base", i, Un, La] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: [c, W, Dd] }], "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Od, I] }], "font-family": [{ font: [zN, I, r] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: [u, W, I] }], "line-clamp": [{ "line-clamp": [ue, "none", W, Dd] }], leading: [{ leading: [m, ...Y()] }], "list-image": [{ "list-image": ["none", W, I] }], "list-style-position": [{ list: ["inside", "outside"] }], "list-style-type": [{ list: ["disc", "decimal", "none", W, I] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "placeholder-color": [{ placeholder: K() }], "text-color": [{ text: K() }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...lt(), "wavy"] }], "text-decoration-thickness": [{ decoration: [ue, "from-font", "auto", W, La] }], "text-decoration-color": [{ decoration: K() }], "underline-offset": [{ "underline-offset": [ue, "auto", W, I] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: Y() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W, I] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], wrap: [{ wrap: ["break-word", "anywhere", "normal"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", W, I] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: pe() }], "bg-repeat": [{ bg: me() }], "bg-size": [{ bg: ke() }], "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, fa, W, I], radial: ["", W, I], conic: [fa, W, I] }, BN, DN] }], "bg-color": [{ bg: K() }], "gradient-from-pos": [{ from: ie() }], "gradient-via-pos": [{ via: ie() }], "gradient-to-pos": [{ to: ie() }], "gradient-from": [{ from: K() }], "gradient-via": [{ via: K() }], "gradient-to": [{ to: K() }], rounded: [{ rounded: ae() }], "rounded-s": [{ "rounded-s": ae() }], "rounded-e": [{ "rounded-e": ae() }], "rounded-t": [{ "rounded-t": ae() }], "rounded-r": [{ "rounded-r": ae() }], "rounded-b": [{ "rounded-b": ae() }], "rounded-l": [{ "rounded-l": ae() }], "rounded-ss": [{ "rounded-ss": ae() }], "rounded-se": [{ "rounded-se": ae() }], "rounded-ee": [{ "rounded-ee": ae() }], "rounded-es": [{ "rounded-es": ae() }], "rounded-tl": [{ "rounded-tl": ae() }], "rounded-tr": [{ "rounded-tr": ae() }], "rounded-br": [{ "rounded-br": ae() }], "rounded-bl": [{ "rounded-bl": ae() }], "border-w": [{ border: fe() }], "border-w-x": [{ "border-x": fe() }], "border-w-y": [{ "border-y": fe() }], "border-w-s": [{ "border-s": fe() }], "border-w-e": [{ "border-e": fe() }], "border-w-t": [{ "border-t": fe() }], "border-w-r": [{ "border-r": fe() }], "border-w-b": [{ "border-b": fe() }], "border-w-l": [{ "border-l": fe() }], "divide-x": [{ "divide-x": fe() }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": fe() }], "divide-y-reverse": ["divide-y-reverse"], "border-style": [{ border: [...lt(), "hidden", "none"] }], "divide-style": [{ divide: [...lt(), "hidden", "none"] }], "border-color": [{ border: K() }], "border-color-x": [{ "border-x": K() }], "border-color-y": [{ "border-y": K() }], "border-color-s": [{ "border-s": K() }], "border-color-e": [{ "border-e": K() }], "border-color-t": [{ "border-t": K() }], "border-color-r": [{ "border-r": K() }], "border-color-b": [{ "border-b": K() }], "border-color-l": [{ "border-l": K() }], "divide-color": [{ divide: K() }], "outline-style": [{ outline: [...lt(), "none", "hidden"] }], "outline-offset": [{ "outline-offset": [ue, W, I] }], "outline-w": [{ outline: ["", ue, Un, La] }], "outline-color": [{ outline: K() }], shadow: [{ shadow: ["", "none", v, wi, Ni] }], "shadow-color": [{ shadow: K() }], "inset-shadow": [{ "inset-shadow": ["none", x, wi, Ni] }], "inset-shadow-color": [{ "inset-shadow": K() }], "ring-w": [{ ring: fe() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: K() }], "ring-offset-w": [{ "ring-offset": [ue, La] }], "ring-offset-color": [{ "ring-offset": K() }], "inset-ring-w": [{ "inset-ring": fe() }], "inset-ring-color": [{ "inset-ring": K() }], "text-shadow": [{ "text-shadow": ["none", j, wi, Ni] }], "text-shadow-color": [{ "text-shadow": K() }], opacity: [{ opacity: [ue, W, I] }], "mix-blend": [{ "mix-blend": [...Wt(), "plus-darker", "plus-lighter"] }], "bg-blend": [{ "bg-blend": Wt() }], "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"], "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }], "mask-image-linear-pos": [{ "mask-linear": [ue] }], "mask-image-linear-from-pos": [{ "mask-linear-from": Ue() }], "mask-image-linear-to-pos": [{ "mask-linear-to": Ue() }], "mask-image-linear-from-color": [{ "mask-linear-from": K() }], "mask-image-linear-to-color": [{ "mask-linear-to": K() }], "mask-image-t-from-pos": [{ "mask-t-from": Ue() }], "mask-image-t-to-pos": [{ "mask-t-to": Ue() }], "mask-image-t-from-color": [{ "mask-t-from": K() }], "mask-image-t-to-color": [{ "mask-t-to": K() }], "mask-image-r-from-pos": [{ "mask-r-from": Ue() }], "mask-image-r-to-pos": [{ "mask-r-to": Ue() }], "mask-image-r-from-color": [{ "mask-r-from": K() }], "mask-image-r-to-color": [{ "mask-r-to": K() }], "mask-image-b-from-pos": [{ "mask-b-from": Ue() }], "mask-image-b-to-pos": [{ "mask-b-to": Ue() }], "mask-image-b-from-color": [{ "mask-b-from": K() }], "mask-image-b-to-color": [{ "mask-b-to": K() }], "mask-image-l-from-pos": [{ "mask-l-from": Ue() }], "mask-image-l-to-pos": [{ "mask-l-to": Ue() }], "mask-image-l-from-color": [{ "mask-l-from": K() }], "mask-image-l-to-color": [{ "mask-l-to": K() }], "mask-image-x-from-pos": [{ "mask-x-from": Ue() }], "mask-image-x-to-pos": [{ "mask-x-to": Ue() }], "mask-image-x-from-color": [{ "mask-x-from": K() }], "mask-image-x-to-color": [{ "mask-x-to": K() }], "mask-image-y-from-pos": [{ "mask-y-from": Ue() }], "mask-image-y-to-pos": [{ "mask-y-to": Ue() }], "mask-image-y-from-color": [{ "mask-y-from": K() }], "mask-image-y-to-color": [{ "mask-y-to": K() }], "mask-image-radial": [{ "mask-radial": [W, I] }], "mask-image-radial-from-pos": [{ "mask-radial-from": Ue() }], "mask-image-radial-to-pos": [{ "mask-radial-to": Ue() }], "mask-image-radial-from-color": [{ "mask-radial-from": K() }], "mask-image-radial-to-color": [{ "mask-radial-to": K() }], "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }], "mask-image-radial-pos": [{ "mask-radial-at": X() }], "mask-image-conic-pos": [{ "mask-conic": [ue] }], "mask-image-conic-from-pos": [{ "mask-conic-from": Ue() }], "mask-image-conic-to-pos": [{ "mask-conic-to": Ue() }], "mask-image-conic-from-color": [{ "mask-conic-from": K() }], "mask-image-conic-to-color": [{ "mask-conic-to": K() }], "mask-mode": [{ mask: ["alpha", "luminance", "match"] }], "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }], "mask-position": [{ mask: pe() }], "mask-repeat": [{ mask: me() }], "mask-size": [{ mask: ke() }], "mask-type": [{ "mask-type": ["alpha", "luminance"] }], "mask-image": [{ mask: ["none", W, I] }], filter: [{ filter: ["", "none", W, I] }], blur: [{ blur: ya() }], brightness: [{ brightness: [ue, W, I] }], contrast: [{ contrast: [ue, W, I] }], "drop-shadow": [{ "drop-shadow": ["", "none", k, wi, Ni] }], "drop-shadow-color": [{ "drop-shadow": K() }], grayscale: [{ grayscale: ["", ue, W, I] }], "hue-rotate": [{ "hue-rotate": [ue, W, I] }], invert: [{ invert: ["", ue, W, I] }], saturate: [{ saturate: [ue, W, I] }], sepia: [{ sepia: ["", ue, W, I] }], "backdrop-filter": [{ "backdrop-filter": ["", "none", W, I] }], "backdrop-blur": [{ "backdrop-blur": ya() }], "backdrop-brightness": [{ "backdrop-brightness": [ue, W, I] }], "backdrop-contrast": [{ "backdrop-contrast": [ue, W, I] }], "backdrop-grayscale": [{ "backdrop-grayscale": ["", ue, W, I] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ue, W, I] }], "backdrop-invert": [{ "backdrop-invert": ["", ue, W, I] }], "backdrop-opacity": [{ "backdrop-opacity": [ue, W, I] }], "backdrop-saturate": [{ "backdrop-saturate": [ue, W, I] }], "backdrop-sepia": [{ "backdrop-sepia": ["", ue, W, I] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": Y() }], "border-spacing-x": [{ "border-spacing-x": Y() }], "border-spacing-y": [{ "border-spacing-y": Y() }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", W, I] }], "transition-behavior": [{ transition: ["normal", "discrete"] }], duration: [{ duration: [ue, "initial", W, I] }], ease: [{ ease: ["linear", "initial", M, W, I] }], delay: [{ delay: [ue, W, I] }], animate: [{ animate: ["none", q, W, I] }], backface: [{ backface: ["hidden", "visible"] }], perspective: [{ perspective: [w, W, I] }], "perspective-origin": [{ "perspective-origin": D() }], rotate: [{ rotate: es() }], "rotate-x": [{ "rotate-x": es() }], "rotate-y": [{ "rotate-y": es() }], "rotate-z": [{ "rotate-z": es() }], scale: [{ scale: Ls() }], "scale-x": [{ "scale-x": Ls() }], "scale-y": [{ "scale-y": Ls() }], "scale-z": [{ "scale-z": Ls() }], "scale-3d": ["scale-3d"], skew: [{ skew: Hs() }], "skew-x": [{ "skew-x": Hs() }], "skew-y": [{ "skew-y": Hs() }], transform: [{ transform: [W, I, "", "none", "gpu", "cpu"] }], "transform-origin": [{ origin: D() }], "transform-style": [{ transform: ["3d", "flat"] }], translate: [{ translate: Vs() }], "translate-x": [{ "translate-x": Vs() }], "translate-y": [{ "translate-y": Vs() }], "translate-z": [{ "translate-z": Vs() }], "translate-none": ["translate-none"], accent: [{ accent: K() }], appearance: [{ appearance: ["none", "auto"] }], "caret-color": [{ caret: K() }], "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W, I] }], "field-sizing": [{ "field-sizing": ["fixed", "content"] }], "pointer-events": [{ "pointer-events": ["auto", "none"] }], resize: [{ resize: ["none", "", "y", "x"] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": Y() }], "scroll-mx": [{ "scroll-mx": Y() }], "scroll-my": [{ "scroll-my": Y() }], "scroll-ms": [{ "scroll-ms": Y() }], "scroll-me": [{ "scroll-me": Y() }], "scroll-mt": [{ "scroll-mt": Y() }], "scroll-mr": [{ "scroll-mr": Y() }], "scroll-mb": [{ "scroll-mb": Y() }], "scroll-ml": [{ "scroll-ml": Y() }], "scroll-p": [{ "scroll-p": Y() }], "scroll-px": [{ "scroll-px": Y() }], "scroll-py": [{ "scroll-py": Y() }], "scroll-ps": [{ "scroll-ps": Y() }], "scroll-pe": [{ "scroll-pe": Y() }], "scroll-pt": [{ "scroll-pt": Y() }], "scroll-pr": [{ "scroll-pr": Y() }], "scroll-pb": [{ "scroll-pb": Y() }], "scroll-pl": [{ "scroll-pl": Y() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", W, I] }], fill: [{ fill: ["none", ...K()] }], "stroke-w": [{ stroke: [ue, Un, La, Dd] }], stroke: [{ stroke: ["none", ...K()] }], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] }, orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"] }; }, HN = yN(LN);
function Z(...l) { return HN(Sy(l)); }
function ga(l) { return new Intl.DateTimeFormat("es-ES", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(l)); }
function Be(l) { const r = new Date, i = new Date(l), c = r.getTime() - i.getTime(), u = Math.floor(c / 1e3), m = Math.floor(u / 60), h = Math.floor(m / 60), g = Math.floor(h / 24); return g > 7 ? ga(l) : g > 0 ? `hace ${g}d` : h > 0 ? `hace ${h}h` : m > 0 ? `hace ${m}m` : "ahora"; }
function zd(l) { return new Intl.NumberFormat("es-MX").format(l); }
function qg(l) { return { active: "bg-green-500", in_progress: "bg-blue-500", pending: "bg-yellow-500", completed: "bg-green-500", blocked: "bg-red-500", review: "bg-purple-500", inactive: "bg-gray-500", error: "bg-red-500", busy: "bg-orange-500" }[l] || "bg-gray-500"; }
function VN(l) { return { critical: "text-red-500 bg-red-500/10", high: "text-orange-500 bg-orange-500/10", medium: "text-yellow-500 bg-yellow-500/10", low: "text-green-500 bg-green-500/10" }[l] || "text-gray-500 bg-gray-500/10"; }
const GN = [{ name: "Dashboard", href: "/dashboard", icon: qj }, { name: "Proyectos", href: "/projects", icon: xa }, { name: "Negocios", href: "/businesses", icon: hu }, { name: "Infraestructura", href: "/infrastructure", icon: Bi }, { name: "Design Hub", href: "/design-hub", icon: jg }, { name: "Memorias", href: "/memories", icon: Ul }, { name: "Archivo", href: "/projects/archived", icon: hs }], QN = [{ name: "VibeSDK", href: "https://docs.vibe-sdk.com", icon: qt, color: "text-purple-400" }];
function KN() { const { sidebarOpen: l, toggleSidebar: r } = tc(); return s.jsxs("aside", { className: Z("fixed left-0 top-0 z-40 h-screen border-r border-border bg-card transition-all duration-300 flex flex-col", l ? "w-64" : "w-16"), children: [s.jsxs("div", { className: "flex h-16 items-center justify-between border-b border-border px-4", children: [l ? s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("img", { src: "/solaria-logo.png", alt: "SOLARIA", className: "h-9 w-9", onError: i => { i.currentTarget.style.display = "none"; } }), s.jsxs("div", { className: "flex flex-col", children: [s.jsx("span", { className: "font-bold text-lg solaria-text-gradient", children: "SOLARIA" }), s.jsx("span", { className: "text-[10px] text-muted-foreground -mt-1", children: "Digital Field Operations" })] })] }) : s.jsx("img", { src: "/solaria-logo.png", alt: "S", className: "h-8 w-8 mx-auto", onError: i => { i.currentTarget.style.display = "none"; } }), s.jsx("button", { onClick: r, className: "p-2 rounded-lg hover:bg-accent transition-colors", "aria-label": l ? "Colapsar sidebar" : "Expandir sidebar", children: l ? s.jsx(mg, { className: "h-5 w-5" }) : s.jsx(Ii, { className: "h-5 w-5" }) })] }), s.jsxs("nav", { className: "flex flex-col gap-1 p-2 flex-1", children: [l && s.jsx("div", { className: "px-3 py-2 text-[10px] font-semibold uppercase text-muted-foreground tracking-wider", children: "Navegacion" }), GN.map(i => s.jsxs(yy, { to: i.href, className: ({ isActive: c }) => Z("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"), children: [s.jsx(i.icon, { className: "h-5 w-5 flex-shrink-0" }), l && s.jsx("span", { children: i.name })] }, i.name)), l && s.jsx("div", { className: "my-2 border-t border-border" }), l && s.jsx("div", { className: "px-3 py-2 text-[10px] font-semibold uppercase text-muted-foreground tracking-wider", children: "Enlaces" }), QN.map(i => s.jsxs("a", { href: i.href, target: "_blank", rel: "noopener noreferrer", className: Z("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", "text-muted-foreground hover:bg-accent hover:text-accent-foreground"), children: [s.jsx(i.icon, { className: Z("h-5 w-5 flex-shrink-0", i.color) }), l && s.jsxs(s.Fragment, { children: [s.jsx("span", { children: i.name }), s.jsx(qt, { className: "h-3 w-3 ml-auto opacity-50" })] })] }, i.name))] }), l && s.jsx("div", { className: "p-4 border-t border-border", children: s.jsxs("div", { className: "rounded-lg bg-accent/50 p-3 text-center", children: [s.jsxs("div", { className: "text-xs text-muted-foreground", children: [s.jsx("span", { className: "solaria-text-gradient font-semibold", children: "SOLARIA" }), s.jsx("span", { children: " DFO" })] }), s.jsx("div", { className: "mt-1 text-[10px] text-muted-foreground", children: "v3.5.1" })] }) })] }); }
function Ug(l) { return { ...l, tasksTotal: l.totalTasks ?? l.total_tasks ?? 0, tasksCompleted: l.completedTasks ?? l.completed_tasks ?? 0, tasksPending: l.pendingTasks ?? l.pending_tasks ?? 0, activeAgents: l.agentsAssigned ?? l.agents_assigned ?? 0, budgetAllocated: l.budgetAllocated ?? l.budget ?? 0, budgetSpent: l.actualCost ?? l.actual_cost ?? 0 }; }
function YN() { return Je({ queryKey: ["dashboard", "overview"], queryFn: async () => { var i, c, u, m, h, g, b, y, v, x, j; const { data: l } = await mu.getOverview(), r = l.data || l; return { totalProjects: ((i = r.projects) == null ? void 0 : i.total_projects) || 0, activeProjects: ((c = r.projects) == null ? void 0 : c.active_projects) || 0, completedProjects: ((u = r.projects) == null ? void 0 : u.completed_projects) || 0, totalTasks: ((m = r.tasks) == null ? void 0 : m.total_tasks) || 0, completedTasks: ((h = r.tasks) == null ? void 0 : h.completed_tasks) || 0, pendingTasks: ((g = r.tasks) == null ? void 0 : g.pending_tasks) || 0, inProgressTasks: ((b = r.tasks) == null ? void 0 : b.in_progress_tasks) || 0, totalAgents: ((y = r.agents) == null ? void 0 : y.total_agents) || 0, activeAgents: ((v = r.agents) == null ? void 0 : v.active_agents) || 0, totalMemories: ((x = r.memories) == null ? void 0 : x.total_memories) || 0, criticalAlerts: ((j = r.alerts) == null ? void 0 : j.critical_alerts) || 0 }; }, refetchInterval: 3e4 }); }
function XN() { return Je({ queryKey: ["dashboard", "alerts"], queryFn: async () => { const { data: l } = await mu.getAlerts(), r = l.data || l.alerts || l; return Array.isArray(r) ? r : []; }, refetchInterval: 15e3 }); }
function Wn() { return Je({ queryKey: ["projects"], queryFn: async () => { const { data: l } = await Pi.getAll(); return (l.projects || l.data || []).map(i => Ug(i)); } }); }
function sc(l) { return Je({ queryKey: ["projects", l], queryFn: async () => { const { data: r } = await Pi.getById(l), i = r.project || r.data || r; return Ug(i); }, enabled: !!l }); }
function Su() { const l = Ut(); return It({ mutationFn: ({ id: r, data: i }) => Pi.update(r, i), onSuccess: (r, { id: i }) => { l.invalidateQueries({ queryKey: ["projects"] }), l.invalidateQueries({ queryKey: ["projects", i] }); } }); }
function er(l) { return Je({ queryKey: ["tasks", l], queryFn: async () => { const { data: r } = await cs.getAll(l); return r.tasks || r.data || r || []; } }); }
function Lg(l) { return Je({ queryKey: ["tasks", l], queryFn: async () => { const { data: r } = await cs.getById(l); return r.task || r.data || r; }, enabled: !!l && l > 0 }); }
function ZN() { const l = Ut(); return It({ mutationFn: r => cs.create(r), onSuccess: () => { l.invalidateQueries({ queryKey: ["tasks"] }); } }); }
function JN() { const l = Ut(); return It({ mutationFn: ({ id: r, data: i }) => cs.update(r, i), onSuccess: (r, { id: i }) => { l.invalidateQueries({ queryKey: ["tasks"] }), l.invalidateQueries({ queryKey: ["tasks", i] }); } }); }
function Hg() { return Je({ queryKey: ["agents"], queryFn: async () => { const { data: l } = await hj.getAll(); return l.agents || l.data || l || []; }, refetchInterval: 1e4 }); }
function FN(l) { var c; const r = (c = l == null ? void 0 : l.tags) != null && c.length ? l.tags.join(",") : "", i = l == null ? void 0 : l.projectId; return Je({ queryKey: ["memories", { projectId: i, tags: r }], queryFn: async () => { const u = {}; i && (u.projectId = i), r && (u.tags = JSON.stringify(l.tags)); const { data: m } = await Ka.getAll(Object.keys(u).length > 0 ? u : void 0), h = (m == null ? void 0 : m.memories) || (m == null ? void 0 : m.data) || m || []; return Array.isArray(h) ? h : []; } }); }
function $N(l) { return Je({ queryKey: ["memories", l], queryFn: async () => { const { data: r } = await Ka.getById(l); return r.memory || r.data || r; }, enabled: !!l && l > 0 }); }
function PN(l, r) { return Je({ queryKey: ["memories", "search", l, r], queryFn: async () => { const { data: i } = await Ka.search(l, r); return i.memories || i.data || i || []; }, enabled: l.length > 2 }); }
function IN() { return Je({ queryKey: ["memories", "tags"], queryFn: async () => { const { data: l } = await Ka.getTags(); return l.tags || l.data || l || []; } }); }
function WN() { return Je({ queryKey: ["memories", "stats"], queryFn: async () => { const { data: l } = await Ka.getStats(); return l.data || l; } }); }
function e2() { const l = Ut(); return It({ mutationFn: ({ id: r, amount: i }) => Ka.boost(r, i), onSuccess: (r, { id: i }) => { l.invalidateQueries({ queryKey: ["memories"] }), l.invalidateQueries({ queryKey: ["memories", i] }); } }); }
function t2(l) { return Je({ queryKey: ["memories", l, "related"], queryFn: async () => { const { data: r } = await Ka.getRelated(l); return r.related || r.data || r || []; }, enabled: !!l }); }
function s2(l) { return Je({ queryKey: ["tasks", l, "items"], queryFn: async () => { const { data: r } = await cs.getItems(l); return r.items || r.data || r || []; }, enabled: !!l }); }
function a2() { const l = Ut(); return It({ mutationFn: ({ taskId: r, items: i }) => cs.createItems(r, i), onSuccess: (r, { taskId: i }) => { l.invalidateQueries({ queryKey: ["tasks", i, "items"] }), l.invalidateQueries({ queryKey: ["tasks", i] }), l.invalidateQueries({ queryKey: ["tasks"] }); } }); }
function l2() { const l = Ut(); return It({ mutationFn: ({ taskId: r, itemId: i, notes: c, actualMinutes: u }) => cs.completeItem(r, i, { notes: c, actual_minutes: u }), onSuccess: (r, { taskId: i }) => { l.invalidateQueries({ queryKey: ["tasks", i, "items"] }), l.invalidateQueries({ queryKey: ["tasks", i] }), l.invalidateQueries({ queryKey: ["tasks"] }), l.invalidateQueries({ queryKey: ["dashboard"] }); } }); }
function n2() { return Je({ queryKey: ["tags"], queryFn: async () => { const { data: l } = await fj.getAll(); return l.tags || l.data || l || []; }, staleTime: 1e3 * 60 * 5 }); }
function r2(l) { return Je({ queryKey: ["tasks", l, "tags"], queryFn: async () => { const { data: r } = await cs.getTags(l); return r.tags || r.data || r || []; }, enabled: !!l }); }
function i2() { const l = Ut(); return It({ mutationFn: ({ taskId: r, tagId: i }) => cs.addTag(r, i), onSuccess: (r, { taskId: i }) => { l.invalidateQueries({ queryKey: ["tasks", i, "tags"] }), l.invalidateQueries({ queryKey: ["tags"] }); } }); }
function c2() { const l = Ut(); return It({ mutationFn: ({ taskId: r, tagId: i }) => cs.removeTag(r, i), onSuccess: (r, { taskId: i }) => { l.invalidateQueries({ queryKey: ["tasks", i, "tags"] }), l.invalidateQueries({ queryKey: ["tags"] }); } }); }
function o2(l, r) { return Je({ queryKey: ["projects", l, "activity", r], queryFn: async () => { const { data: i } = await mu.getActivity(r); return (i.logs || i.data || i || []).filter(u => u.projectId === l); }, enabled: !!l, refetchInterval: 15e3 }); }
function Vg(l) { return Je({ queryKey: ["projects", l, "tasks"], queryFn: async () => { const { data: r } = await cs.getAll({ project_id: l }); return r.tasks || r.data || r || []; }, enabled: !!l, refetchInterval: 1e4 }); }
function d2(l) { return Je({ queryKey: ["projects", "check-code", l], queryFn: async () => { const { data: r } = await Pi.checkCode(l); return r; }, enabled: l.length === 3 && /^[A-Za-z]{3}$/.test(l), staleTime: 1e3 * 30 }); }
function u2(l) { return Je({ queryKey: ["projects", l, "epics"], queryFn: async () => { const { data: r } = await du.getByProject(l); return r.epics || r.data || r || []; }, enabled: !!l }); }
function m2() { const l = Ut(); return It({ mutationFn: ({ projectId: r, data: i }) => du.create(r, i), onSuccess: (r, { projectId: i }) => { l.invalidateQueries({ queryKey: ["projects", i, "epics"] }); } }); }
function f2() { const l = Ut(); return It({ mutationFn: ({ id: r }) => du.delete(r), onSuccess: (r, i) => { l.invalidateQueries({ queryKey: ["projects", i.projectId, "epics"] }), l.invalidateQueries({ queryKey: ["tasks"] }); } }); }
function h2(l) { return Je({ queryKey: ["projects", l, "sprints"], queryFn: async () => { const { data: r } = await uu.getByProject(l); return r.sprints || r.data || r || []; }, enabled: !!l }); }
function x2() { const l = Ut(); return It({ mutationFn: ({ projectId: r, data: i }) => uu.create(r, i), onSuccess: (r, { projectId: i }) => { l.invalidateQueries({ queryKey: ["projects", i, "sprints"] }); } }); }
function p2() { const l = Ut(); return It({ mutationFn: ({ id: r }) => uu.delete(r), onSuccess: (r, i) => { l.invalidateQueries({ queryKey: ["projects", i.projectId, "sprints"] }), l.invalidateQueries({ queryKey: ["tasks"] }); } }); }
function g2() { const l = Lt(), { user: r, logout: i } = gs(), { theme: c, toggleTheme: u } = tc(), { data: m } = XN(), { isConnected: h } = Bp(), { notifications: g, unreadCount: b, markAllAsRead: y, dismissNotification: v, clearAll: x } = Rv(), [j, k] = R.useState(!1), [N, w] = R.useState(!1), [A, M] = R.useState(new Set), [q, G] = R.useState("activity"), X = R.useRef(null), D = R.useRef(null), F = (se, E) => { E.stopPropagation(), M($ => new Set([...$, se])); }, L = () => { const se = Y.map(E => E.id); M(new Set(se)); }; R.useEffect(() => { function se(E) { X.current && !X.current.contains(E.target) && k(!1), D.current && !D.current.contains(E.target) && w(!1); } return document.addEventListener("mousedown", se), () => document.removeEventListener("mousedown", se); }, []); const Y = (m || []).filter(se => !A.has(se.id)), re = Y.filter(se => se.severity === "critical" || se.severity === "high"), Le = Y.length, He = () => { i(), l("/login"); }, we = se => { switch (se) {
    case "critical":
    case "high": return s.jsx(Vn, { className: "h-4 w-4 text-red-500" });
    case "medium": return s.jsx(Vn, { className: "h-4 w-4 text-yellow-500" });
    case "info": return s.jsx(gg, { className: "h-4 w-4 text-blue-500" });
    default: return s.jsx(Yn, { className: "h-4 w-4 text-green-500" });
} }, Fe = se => { const E = "h-4 w-4", K = { created: "text-green-500", completed: "text-green-500", updated: "text-blue-500", deleted: "text-red-500", status: "text-yellow-500", info: "text-muted-foreground" }[se.action] || "text-muted-foreground"; switch (se.type) {
    case "task": return s.jsx(yu, { className: Z(E, K) });
    case "project": return s.jsx(xa, { className: Z(E, K) });
    case "agent": return s.jsx(Us, { className: Z(E, K) });
    case "memory": return s.jsx(Ul, { className: Z(E, K) });
    case "alert": return s.jsx(Vn, { className: Z(E, "text-red-500") });
    default: return s.jsx(Dl, { className: Z(E, K) });
} }, qe = Le + b; return s.jsxs("header", { className: "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card/80 px-6 backdrop-blur", children: [s.jsx("div", { className: "flex items-center gap-4", children: s.jsx("h1", { className: "text-lg font-semibold", children: "Digital Field Operations" }) }), s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("div", { className: Z("flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs", h ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"), children: h ? s.jsxs(s.Fragment, { children: [s.jsx(Ij, { className: "h-3.5 w-3.5" }), s.jsx("span", { className: "hidden sm:inline", children: "En vivo" })] }) : s.jsxs(s.Fragment, { children: [s.jsx(Pj, { className: "h-3.5 w-3.5" }), s.jsx("span", { className: "hidden sm:inline", children: "Offline" })] }) }), s.jsxs("div", { className: "relative", ref: X, children: [s.jsxs("button", { onClick: () => k(!j), className: Z("relative rounded-lg p-2 transition-colors hover:bg-accent", (re.length > 0 || b > 0) && "text-primary"), children: [s.jsx(dg, { className: "h-5 w-5" }), qe > 0 && s.jsx("span", { className: Z("absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white", re.length > 0 ? "bg-red-500" : "bg-primary"), children: qe > 9 ? "9+" : qe })] }), j && s.jsxs("div", { className: "absolute right-0 top-full mt-2 w-96 rounded-xl border border-border bg-card shadow-lg", children: [s.jsxs("div", { className: "flex border-b border-border", children: [s.jsxs("button", { onClick: () => G("activity"), className: Z("flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors", q === "activity" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"), children: [s.jsx(Qa, { className: "h-4 w-4" }), "Actividad", b > 0 && s.jsx("span", { className: "bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5 rounded-full", children: b })] }), s.jsxs("button", { onClick: () => G("alerts"), className: Z("flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors", q === "alerts" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"), children: [s.jsx(Vn, { className: "h-4 w-4" }), "Alertas", Le > 0 && s.jsx("span", { className: Z("text-[10px] px-1.5 py-0.5 rounded-full", re.length > 0 ? "bg-red-500 text-white" : "bg-muted text-muted-foreground"), children: Le })] })] }), s.jsx("div", { className: "max-h-80 overflow-y-auto", children: q === "activity" ? s.jsx(s.Fragment, { children: g.length > 0 ? s.jsxs(s.Fragment, { children: [s.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-muted/30", children: [s.jsx("span", { className: "text-xs text-muted-foreground", children: "Eventos en tiempo real" }), s.jsxs("div", { className: "flex gap-2", children: [b > 0 && s.jsx("button", { onClick: y, className: "text-xs text-primary hover:underline", children: "Marcar leídas" }), s.jsx("button", { onClick: x, className: "text-xs text-muted-foreground hover:text-foreground", children: "Limpiar" })] })] }), g.slice(0, 15).map(se => s.jsxs("div", { className: Z("flex gap-3 px-4 py-3 hover:bg-accent/50 cursor-pointer border-b border-border last:border-0 group relative transition-colors", !se.read && "bg-primary/5"), children: [s.jsx("div", { className: "flex-shrink-0 mt-0.5", children: Fe(se) }), s.jsxs("div", { className: "flex-1 min-w-0", children: [s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("span", { className: "font-medium text-sm truncate", children: se.title }), !se.read && s.jsx("span", { className: "h-2 w-2 rounded-full bg-primary flex-shrink-0" })] }), s.jsx("div", { className: "text-xs text-muted-foreground truncate", children: se.message }), s.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: Be(se.timestamp.toISOString()) })] }), s.jsx("button", { onClick: E => { E.stopPropagation(), v(se.id); }, className: "opacity-0 group-hover:opacity-100 p-1 hover:bg-muted rounded transition-all absolute right-2 top-2", title: "Descartar", children: s.jsx(rs, { className: "h-3.5 w-3.5 text-muted-foreground" }) })] }, se.id))] }) : s.jsxs("div", { className: "px-4 py-8 text-center", children: [s.jsx(Qa, { className: "h-8 w-8 text-muted-foreground mx-auto mb-2" }), s.jsx("div", { className: "text-sm text-muted-foreground", children: "Sin actividad reciente" }), s.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Los eventos aparecerán aquí en tiempo real" })] }) }) : s.jsx(s.Fragment, { children: Y.length > 0 ? s.jsxs(s.Fragment, { children: [s.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-muted/30", children: [s.jsxs("span", { className: "text-xs text-muted-foreground", children: [Le, " alertas activas"] }), s.jsx("button", { onClick: L, className: "text-xs text-muted-foreground hover:text-foreground", children: "Descartar todas" })] }), Y.slice(0, 10).map(se => s.jsxs("div", { className: "flex gap-3 px-4 py-3 hover:bg-accent/50 cursor-pointer border-b border-border last:border-0 group relative", children: [we(se.severity), s.jsxs("div", { className: "flex-1 min-w-0", children: [s.jsx("div", { className: "font-medium text-sm truncate", children: se.title }), s.jsx("div", { className: "text-xs text-muted-foreground truncate", children: se.message }), s.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: Be(se.createdAt) })] }), s.jsx("button", { onClick: E => F(se.id, E), className: "opacity-0 group-hover:opacity-100 p-1 hover:bg-muted rounded transition-all absolute right-2 top-2", title: "Descartar", children: s.jsx(rs, { className: "h-3.5 w-3.5 text-muted-foreground" }) })] }, se.id))] }) : s.jsxs("div", { className: "px-4 py-8 text-center", children: [s.jsx(Yn, { className: "h-8 w-8 text-green-500 mx-auto mb-2" }), s.jsx("div", { className: "text-sm text-muted-foreground", children: "Sin alertas activas" }), s.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Todo está funcionando correctamente" })] }) }) })] })] }), s.jsx("button", { onClick: u, className: "rounded-lg p-2 transition-colors hover:bg-accent", title: c === "dark" ? "Modo claro" : "Modo oscuro", children: c === "dark" ? s.jsx(Ui, { className: "h-5 w-5" }) : s.jsx(Wd, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "relative", ref: D, children: [s.jsxs("button", { onClick: () => w(!N), className: "flex items-center gap-3 border-l border-border pl-4 ml-2 hover:bg-accent/50 rounded-lg pr-2 py-1 transition-colors", children: [s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground", children: s.jsx(qs, { className: "h-4 w-4" }) }), s.jsxs("div", { className: "text-sm text-left", children: [s.jsx("div", { className: "font-medium", children: r == null ? void 0 : r.name }), s.jsx("div", { className: "text-xs text-muted-foreground capitalize", children: r == null ? void 0 : r.role })] })] }), s.jsx(Cj, { className: Z("h-4 w-4 text-muted-foreground transition-transform", N && "rotate-180") })] }), N && s.jsxs("div", { className: "absolute right-0 top-full mt-2 w-56 rounded-xl border border-border bg-card shadow-lg overflow-hidden", children: [s.jsxs("div", { className: "px-4 py-3 border-b border-border", children: [s.jsx("div", { className: "font-medium text-sm", children: r == null ? void 0 : r.name }), s.jsx("div", { className: "text-xs text-muted-foreground", children: r == null ? void 0 : r.email })] }), s.jsxs("div", { className: "py-1", children: [s.jsxs("button", { onClick: () => { w(!1), l("/settings"); }, className: "flex w-full items-center gap-3 px-4 py-2.5 text-sm hover:bg-accent transition-colors", children: [s.jsx(Wi, { className: "h-4 w-4 text-muted-foreground" }), "Configuración"] }), s.jsxs("button", { onClick: u, className: "flex w-full items-center gap-3 px-4 py-2.5 text-sm hover:bg-accent transition-colors", children: [c === "dark" ? s.jsx(Ui, { className: "h-4 w-4 text-muted-foreground" }) : s.jsx(Wd, { className: "h-4 w-4 text-muted-foreground" }), c === "dark" ? "Modo claro" : "Modo oscuro"] })] }), s.jsx("div", { className: "border-t border-border py-1", children: s.jsxs("button", { onClick: He, className: "flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-500/10 transition-colors", children: [s.jsx(Hj, { className: "h-4 w-4" }), "Cerrar sesión"] }) })] })] })] })] }); }
const b2 = ["/tasks", "/projects"];
function y2() { const l = tc(c => c.sidebarOpen), r = vy(), i = b2.some(c => r.pathname === c || r.pathname.startsWith(`${c}/`)); return s.jsxs("div", { className: "flex h-screen overflow-hidden bg-background", children: [s.jsx(KN, {}), s.jsxs("div", { className: Z("flex flex-1 flex-col transition-all duration-300", l ? "ml-64" : "ml-16"), children: [s.jsx(g2, {}), s.jsx("main", { className: Z("main-content flex-1 overflow-auto", i ? "p-3" : "p-6"), children: s.jsx(jy, {}) })] })] }); }
function v2() { const l = Lt(), r = gs(x => x.login), [i, c] = R.useState(""), [u, m] = R.useState(""), [h, g] = R.useState(""), [b, y] = R.useState(!1), v = async (x) => { var j, k; x.preventDefault(), g(""), y(!0); try {
    const { data: N } = await cg.login(i, u);
    N.token && N.user ? (r(N.user, N.token), l("/dashboard")) : g(N.message || "Error de autenticación");
}
catch (N) {
    g(((k = (j = N.response) == null ? void 0 : j.data) == null ? void 0 : k.message) || "Error de conexión");
}
finally {
    y(!1);
} }; return s.jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-accent/20", children: s.jsxs("div", { className: "w-full max-w-md space-y-8 rounded-xl border border-border bg-card p-8 shadow-xl", children: [s.jsxs("div", { className: "text-center", children: [s.jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full solaria-gradient", children: s.jsx(Ui, { className: "h-10 w-10 text-white" }) }), s.jsx("h1", { className: "mt-4 text-2xl font-bold", children: "SOLARIA DFO" }), s.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Digital Field Operations" })] }), s.jsxs("form", { onSubmit: v, className: "mt-8 space-y-4", children: [h && s.jsx("div", { className: "rounded-lg bg-destructive/10 p-3 text-sm text-destructive", children: h }), s.jsxs("div", { children: [s.jsx("label", { htmlFor: "username", className: "block text-sm font-medium mb-2", children: "Usuario" }), s.jsx("input", { id: "username", type: "text", value: i, onChange: x => c(x.target.value), className: "w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", placeholder: "Ingresa tu usuario", autoComplete: "username", required: !0 })] }), s.jsxs("div", { children: [s.jsx("label", { htmlFor: "password", className: "block text-sm font-medium mb-2", children: "Contraseña" }), s.jsx("input", { id: "password", type: "password", value: u, onChange: x => m(x.target.value), className: "w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", placeholder: "Ingresa tu contraseña", autoComplete: "current-password", required: !0 })] }), s.jsx("button", { type: "submit", disabled: b, className: "w-full rounded-lg solaria-gradient py-2.5 font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50", children: b ? s.jsxs("span", { className: "flex items-center justify-center gap-2", children: [s.jsx(_e, { className: "h-4 w-4 animate-spin" }), "Ingresando..."] }) : "Ingresar" })] }), s.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "© 2024-2025 SOLARIA AGENCY" })] }) }); }
function Si({ title: l, value: r, icon: i, iconClass: c, onClick: u }) { return s.jsxs("div", { onClick: u, className: `stat-card ${u ? "cursor-pointer" : ""}`, title: u ? `Ver ${l.toLowerCase()}` : void 0, children: [s.jsx("div", { className: `stat-icon ${c}`, children: s.jsx(i, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: l }), s.jsx("div", { className: "stat-value", children: r })] })] }); }
function j2({ task: l, onClick: r }) { return s.jsxs("div", { className: "completed-task-item", onClick: r, children: [s.jsx("div", { className: "task-check-icon", style: { background: "rgba(34, 197, 94, 0.15)", color: "#22c55e" }, children: s.jsx(Ze, { className: "h-4 w-4" }) }), s.jsxs("div", { className: "task-content", children: [s.jsxs("div", { className: "task-title-row", children: [s.jsx("span", { className: "text-xs font-mono bg-muted px-1.5 py-0.5 rounded mr-2", children: l.taskCode || `#${l.taskNumber}` }), s.jsx("span", { className: "task-title", children: l.title })] }), s.jsxs("div", { className: "task-meta", children: [l.projectName && s.jsxs("span", { className: "task-meta-item", children: [s.jsx(xu, { className: "h-3 w-3" }), l.projectName] }), s.jsxs("span", { className: "task-meta-item", children: [s.jsx(Qe, { className: "h-3 w-3" }), Be(l.completedAt || l.updatedAt)] })] })] })] }); }
function N2({ project: l, onClick: r }) { const i = l.status === "completed" ? "low" : l.status === "development" ? "high" : "medium", c = l.tasksTotal || 0, u = l.tasksCompleted || 0, m = c > 0 ? Math.round(u / c * 100) : l.progress || 0; return s.jsxs("div", { className: "completed-task-item", onClick: r, style: { cursor: "pointer" }, children: [s.jsx("div", { className: "task-check-icon", style: { background: "rgba(59, 130, 246, 0.15)", color: "#60a5fa" }, children: s.jsx(xu, { className: "h-4 w-4" }) }), s.jsxs("div", { className: "task-content", children: [s.jsxs("div", { className: "task-title-row", children: [s.jsx("span", { className: "task-title", children: l.name }), s.jsx("span", { className: `task-priority-badge ${i}`, children: l.status || "activo" })] }), s.jsxs("div", { className: "task-meta", children: [s.jsxs("span", { className: "task-meta-item", children: [s.jsx(yu, { className: "h-3 w-3" }), c, " tareas"] }), s.jsxs("span", { className: "task-meta-item", children: [s.jsx(Ze, { className: "h-3 w-3" }), m, "%"] })] })] })] }); }
function w2({ task: l, onClick: r }) { const i = l.priority === "high" || l.priority === "critical" ? "high" : l.priority === "medium" ? "medium" : "low"; return s.jsxs("div", { className: "completed-task-item", onClick: r, style: { cursor: "pointer" }, children: [s.jsx("div", { className: "task-check-icon", style: { background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" }, children: s.jsx(fg, { className: "h-4 w-4" }) }), s.jsxs("div", { className: "task-content", children: [s.jsxs("div", { className: "task-title-row", children: [s.jsx("span", { className: "text-xs font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded mr-2 font-semibold", children: l.taskCode || `#${l.taskNumber}` }), s.jsx("span", { className: "task-title", children: l.title }), s.jsx("span", { className: `task-priority-badge ${i}`, children: l.priority || "normal" })] }), s.jsxs("div", { className: "task-meta", children: [s.jsxs("span", { className: "task-meta-item", children: [s.jsx(Qe, { className: "h-3 w-3" }), Be(l.createdAt)] }), l.projectName && s.jsxs("span", { className: "task-meta-item", children: [s.jsx(xu, { className: "h-3 w-3" }), l.projectName] })] })] })] }); }
function Rd() { return s.jsxs("div", { className: "feed-loading", children: [s.jsx(_e, { className: "h-5 w-5 animate-spin" }), s.jsx("p", { children: "Cargando..." })] }); }
function Bd({ icon: l, message: r }) { return s.jsxs("div", { className: "feed-empty", children: [s.jsx(l, { className: "h-8 w-8" }), s.jsx("p", { children: r })] }); }
function S2() { const l = Lt(), { data: r, isLoading: i } = YN(), { data: c, isLoading: u } = Wn(), { data: m, isLoading: h } = er({}), [g, b] = R.useState([]), [y, v] = R.useState([]); R.useEffect(() => { if (m) {
    const k = new Date;
    k.setDate(k.getDate() - 7);
    const N = m.filter(A => new Date(A.createdAt) >= k).slice(0, 10), w = m.filter(A => A.status === "completed").sort((A, M) => { const q = new Date(A.completedAt || A.updatedAt); return new Date(M.completedAt || M.updatedAt).getTime() - q.getTime(); }).slice(0, 15).map(A => { const M = c == null ? void 0 : c.find(q => q.id === A.projectId); return { ...A, projectName: M == null ? void 0 : M.name }; });
    b(N), v(w);
} }, [m, c]); const x = () => l("/projects"), j = k => l(`/projects/${k}`); return s.jsxs("div", { className: "space-y-6", children: [s.jsx("div", { className: "section-header", children: s.jsxs("div", { children: [s.jsx("h1", { className: "section-title", children: "Dashboard" }), s.jsx("p", { className: "section-subtitle", children: "Vista ejecutiva del estado de operaciones" })] }) }), s.jsxs("div", { className: "dashboard-stats-row", children: [s.jsx(Si, { title: "Proyectos Activos", value: i ? "-" : (r == null ? void 0 : r.activeProjects) || (c == null ? void 0 : c.length) || 0, icon: xa, iconClass: "projects", onClick: x }), s.jsx(Si, { title: "Tareas Completadas", value: i ? "-" : (r == null ? void 0 : r.completedTasks) || 0, icon: Ze, iconClass: "tasks" }), s.jsx(Si, { title: "En Progreso", value: i ? "-" : (r == null ? void 0 : r.inProgressTasks) || 0, icon: Qe, iconClass: "active" }), s.jsx(Si, { title: "Agentes Activos", value: i ? "-" : (r == null ? void 0 : r.activeAgents) || 0, icon: Us, iconClass: "agents" })] }), s.jsxs("div", { className: "dashboard-grid", children: [s.jsxs("div", { className: "completed-tasks-widget", children: [s.jsxs("div", { className: "widget-header", children: [s.jsxs("div", { className: "widget-header-left", children: [s.jsx("div", { className: "widget-icon success", children: s.jsx(kj, { className: "h-5 w-5" }) }), s.jsxs("div", { children: [s.jsx("div", { className: "widget-title", children: "Tareas Completadas" }), s.jsx("div", { className: "widget-subtitle", children: "Feed global en tiempo real" })] })] }), s.jsxs("button", { onClick: () => l("/tasks/archived"), className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-muted hover:bg-accent rounded-lg transition-colors", children: [s.jsx(hs, { className: "h-3.5 w-3.5" }), "Ver todas"] })] }), s.jsx("div", { className: "completed-tasks-feed", children: h ? s.jsx(Rd, {}) : y.length > 0 ? y.map(k => s.jsx(j2, { task: k, onClick: () => k.projectId && j(k.projectId) }, k.id)) : s.jsx(Bd, { icon: Ze, message: "No hay tareas completadas todavia" }) })] }), s.jsxs("div", { className: "completed-tasks-widget", children: [s.jsx("div", { className: "widget-header", children: s.jsxs("div", { className: "widget-header-left", children: [s.jsx("div", { className: "widget-icon info", children: s.jsx(xa, { className: "h-5 w-5" }) }), s.jsxs("div", { children: [s.jsx("div", { className: "widget-title", children: "Proyectos Recientes" }), s.jsx("div", { className: "widget-subtitle", children: "Actividad de proyectos" })] })] }) }), s.jsx("div", { className: "completed-tasks-feed", children: u ? s.jsx(Rd, {}) : c && c.length > 0 ? c.slice(0, 5).map(k => s.jsx(N2, { project: k, onClick: () => j(k.id) }, k.id)) : s.jsx(Bd, { icon: xa, message: "No hay proyectos" }) })] }), s.jsxs("div", { className: "completed-tasks-widget", children: [s.jsxs("div", { className: "widget-header", children: [s.jsxs("div", { className: "widget-header-left", children: [s.jsx("div", { className: "widget-icon warning", children: s.jsx(fg, { className: "h-5 w-5" }) }), s.jsxs("div", { children: [s.jsx("div", { className: "widget-title", children: "Nuevas Tareas por Proyecto" }), s.jsx("div", { className: "widget-subtitle", children: "Ultimos 7 dias" })] })] }), s.jsx("div", { className: "widget-badge", children: g.length })] }), s.jsx("div", { className: "completed-tasks-feed", children: h ? s.jsx(Rd, {}) : g.length > 0 ? g.map(k => s.jsx(w2, { task: k, onClick: () => k.projectId && j(k.projectId) }, k.id)) : s.jsx(Bd, { icon: xt, message: "No hay tareas nuevas esta semana" }) })] })] })] }); }
const Hi = { planning: { label: "Planificacion", color: "#7c3aed" }, active: { label: "Desarrollo", color: "#0891b2" }, paused: { label: "Pausado", color: "#f59e0b" }, completed: { label: "Produccion", color: "#16a34a" }, cancelled: { label: "Cancelado", color: "#ef4444" } };
function k2({ board: l }) { const i = (c, u) => { const m = Math.min(c, 8); return Array.from({ length: 8 }, (h, g) => s.jsx("div", { className: Z("trello-slot", g < m && `filled ${u}`) }, g)); }; return s.jsxs("div", { className: "mini-trello", children: [s.jsxs("div", { className: "trello-column backlog", children: [s.jsxs("div", { className: "trello-column-header", children: ["PEND (", l.backlog, ")"] }), s.jsx("div", { className: "trello-slots", children: i(l.backlog, "backlog") })] }), s.jsxs("div", { className: "trello-column todo", children: [s.jsxs("div", { className: "trello-column-header", children: ["REV (", l.todo, ")"] }), s.jsx("div", { className: "trello-slots", children: i(l.todo, "todo") })] }), s.jsxs("div", { className: "trello-column doing", children: [s.jsxs("div", { className: "trello-column-header", children: ["WIP (", l.doing, ")"] }), s.jsx("div", { className: "trello-slots", children: i(l.doing, "doing") })] }), s.jsxs("div", { className: "trello-column done", children: [s.jsxs("div", { className: "trello-column-header", children: ["DONE (", l.done, ")"] }), s.jsx("div", { className: "trello-slots", children: i(l.done, "done") })] })] }); }
function C2({ status: l }) { const r = ["planning", "active", "paused", "completed"], i = l === "completed" ? 3 : l === "paused" ? 2 : l === "active" ? 1 : 0; return s.jsx("div", { className: "progress-segments", children: r.map((c, u) => s.jsx("div", { className: Z("progress-segment", u <= i ? c : "inactive") }, c)) }); }
function A2({ project: l, board: r, onClick: i }) { const c = Hi[l.status] || Hi.planning, u = l.tasksTotal || 0, m = l.tasksCompleted || 0, h = u - m, g = l.budgetAllocated ? l.budgetAllocated >= 1e3 ? `$${(l.budgetAllocated / 1e3).toFixed(0)}K` : `$${l.budgetAllocated}` : "-"; return s.jsxs("div", { className: "project-card", onClick: i, children: [s.jsxs("div", { className: "project-header", children: [s.jsx("div", { className: "project-icon-wrapper", children: s.jsx(xa, { className: "project-icon" }) }), s.jsxs("div", { className: "project-title-group", children: [s.jsx("h3", { className: "project-name", children: l.name }), s.jsx("span", { className: "project-code", children: l.code })] }), s.jsx("button", { className: "project-edit-btn", onClick: b => { b.stopPropagation(); }, title: "Editar proyecto", children: s.jsx(mt, { className: "h-4 w-4" }) })] }), s.jsxs("div", { className: "project-tags", children: [s.jsx("span", { className: "project-tag", style: { backgroundColor: `${c.color}20`, color: c.color }, children: c.label }), l.priority && s.jsx("span", { className: Z("project-tag", l.priority === "critical" && "red", l.priority === "high" && "orange", l.priority === "medium" && "yellow", l.priority === "low" && "green"), children: l.priority })] }), s.jsx(k2, { board: r }), s.jsx(C2, { status: l.status }), s.jsxs("div", { className: "project-stats", children: [s.jsxs("div", { className: "stat-item", children: [s.jsx("div", { className: "stat-icon blue", children: s.jsx(Ze, { className: "h-3 w-3" }) }), s.jsx("div", { className: "stat-value", children: u }), s.jsx("div", { className: "stat-label", children: "Tareas" })] }), s.jsxs("div", { className: "stat-item", children: [s.jsx("div", { className: "stat-icon yellow", children: s.jsx(Qe, { className: "h-3 w-3" }) }), s.jsx("div", { className: "stat-value", children: h }), s.jsx("div", { className: "stat-label", children: "Pend." })] }), s.jsxs("div", { className: "stat-item", children: [s.jsx("div", { className: "stat-icon green", children: s.jsx(Ze, { className: "h-3 w-3" }) }), s.jsx("div", { className: "stat-value", children: m }), s.jsx("div", { className: "stat-label", children: "Compl." })] }), s.jsxs("div", { className: "stat-item", children: [s.jsx("div", { className: "stat-icon orange", children: s.jsx(Ri, { className: "h-3 w-3" }) }), s.jsx("div", { className: "stat-value", children: g }), s.jsx("div", { className: "stat-label", children: "Budget" })] }), s.jsxs("div", { className: "stat-item", children: [s.jsx("div", { className: "stat-icon purple", children: s.jsx(Sg, { className: "h-3 w-3" }) }), s.jsx("div", { className: "stat-value", children: l.activeAgents || 0 }), s.jsx("div", { className: "stat-label", children: "Agentes" })] }), s.jsxs("div", { className: "stat-item", children: [s.jsx("div", { className: "stat-icon indigo", children: s.jsx(ns, { className: "h-3 w-3" }) }), s.jsx("div", { className: "stat-value", children: l.endDate ? ga(l.endDate) : "-" }), s.jsx("div", { className: "stat-label", children: "Entrega" })] })] })] }); }
function T2({ project: l, onClick: r }) { const i = Hi[l.status] || Hi.planning, c = l.tasksTotal || 0, u = l.tasksCompleted || 0, m = c - u, h = l.progress || 0, g = l.budgetAllocated ? l.budgetAllocated >= 1e3 ? `$${(l.budgetAllocated / 1e3).toFixed(0)}K` : `$${l.budgetAllocated}` : "-"; return s.jsxs("tr", { onClick: r, className: "project-row", children: [s.jsx("td", { children: s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "project-icon-sm", children: s.jsx(xa, { className: "h-4 w-4" }) }), s.jsxs("div", { children: [s.jsx("div", { className: "project-name-sm", children: l.name }), s.jsx("div", { className: "project-code-sm", children: l.code })] })] }) }), s.jsx("td", { children: s.jsx("span", { className: "phase-badge", style: { backgroundColor: `${i.color}20`, color: i.color }, children: i.label }) }), s.jsx("td", { className: "text-center", children: s.jsx("span", { className: "stat-blue", children: c }) }), s.jsx("td", { className: "text-center", children: s.jsx("span", { className: "stat-yellow", children: m }) }), s.jsx("td", { className: "text-center", children: s.jsx("span", { className: "stat-green", children: u }) }), s.jsx("td", { className: "text-center", children: s.jsx("span", { className: "stat-orange", children: g }) }), s.jsx("td", { className: "text-center", children: s.jsx("span", { className: "stat-purple", children: l.activeAgents || 0 }) }), s.jsx("td", { className: "text-center", children: s.jsx("span", { className: "stat-indigo", children: l.endDate ? ga(l.endDate) : "-" }) }), s.jsxs("td", { className: "text-center", children: [s.jsx("div", { className: "progress-bar-sm", children: s.jsx("div", { className: "progress-fill", style: { width: `${h}%` } }) }), s.jsxs("span", { className: "progress-text", children: [h, "%"] })] })] }); }
function E2() { const { projectId: l } = zl(), r = Lt(), { data: i, isLoading: c } = Wn(), { data: u } = er({}), [m, h] = R.useState("grid"), [g, b] = R.useState("name"), y = (i || []).reduce((j, k) => { const N = (u || []).filter(w => w.projectId === k.id); return j[k.id] = { backlog: N.filter(w => w.status === "pending").length, todo: N.filter(w => w.status === "review").length, doing: N.filter(w => w.status === "in_progress").length, done: N.filter(w => w.status === "completed").length, blocked: N.filter(w => w.status === "blocked").length }, j; }, {}), v = [...i || []].sort((j, k) => { switch (g) {
    case "name": return j.name.localeCompare(k.name);
    case "deadline": return new Date(j.endDate || 0).getTime() - new Date(k.endDate || 0).getTime();
    case "budget": return (k.budgetAllocated || 0) - (j.budgetAllocated || 0);
    case "completion": return (k.progress || 0) - (j.progress || 0);
    case "status": return j.status.localeCompare(k.status);
    default: return 0;
} }), x = j => { r(`/projects/${j}`); }; if (c)
    return s.jsx("div", { className: "flex h-full items-center justify-center", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }); if (l) {
    const j = i == null ? void 0 : i.find(k => k.id === parseInt(l));
    if (j)
        return s.jsxs("div", { className: "space-y-6", children: [s.jsxs("div", { className: "section-header", children: [s.jsxs("div", { children: [s.jsx("h1", { className: "section-title", children: j.name }), s.jsxs("p", { className: "section-subtitle", children: [j.code, " - ", j.description] })] }), s.jsx("button", { onClick: () => r("/projects"), className: "btn-secondary", children: "Volver" })] }), s.jsx("div", { className: "bg-card border border-border rounded-xl p-6", children: s.jsx("p", { className: "text-muted-foreground", children: "Vista detallada del proyecto (en desarrollo)" }) })] });
} return s.jsxs("div", { className: "space-y-6", children: [s.jsxs("div", { className: "section-header", children: [s.jsxs("div", { children: [s.jsx("h1", { className: "section-title", children: "Proyectos" }), s.jsxs("p", { className: "section-subtitle", children: [(i == null ? void 0 : i.length) || 0, " proyectos en el pipeline"] })] }), s.jsxs("div", { className: "section-actions", children: [s.jsxs("div", { className: "sort-buttons", children: [s.jsx("button", { className: Z("sort-btn", g === "name" && "active"), onClick: () => b("name"), children: "NOMBRE" }), s.jsx("button", { className: Z("sort-btn", g === "deadline" && "active"), onClick: () => b("deadline"), children: "FECHA" }), s.jsx("button", { className: Z("sort-btn", g === "budget" && "active"), onClick: () => b("budget"), children: "$$$" }), s.jsx("button", { className: Z("sort-btn", g === "completion" && "active"), onClick: () => b("completion"), children: "%" }), s.jsx("button", { className: Z("sort-btn", g === "status" && "active"), onClick: () => b("status"), children: "FASE" })] }), s.jsxs("div", { className: "view-toggle", children: [s.jsx("button", { className: Z("view-toggle-btn", m === "grid" && "active"), onClick: () => h("grid"), title: "Vista Grid", children: s.jsx($n, { className: "h-4 w-4" }) }), s.jsx("button", { className: Z("view-toggle-btn", m === "list" && "active"), onClick: () => h("list"), title: "Vista Lista", children: s.jsx(Pn, { className: "h-4 w-4" }) })] })] })] }), m === "grid" ? s.jsxs("div", { className: "projects-grid", children: [v.map(j => s.jsx(A2, { project: j, board: y[j.id] || { backlog: 0, todo: 0, doing: 0, done: 0, blocked: 0 }, onClick: () => x(j.id) }, j.id)), v.length === 0 && s.jsxs("div", { className: "col-span-full py-12 text-center text-muted-foreground", children: [s.jsx(xt, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), s.jsx("p", { children: "No hay proyectos todavia" })] })] }) : s.jsxs("div", { className: "project-card", style: { padding: 0, overflow: "hidden" }, children: [s.jsxs("table", { className: "list-table", children: [s.jsx("thead", { children: s.jsxs("tr", { children: [s.jsx("th", { style: { width: "22%" }, children: "Proyecto" }), s.jsx("th", { style: { width: "12%" }, children: "Fase" }), s.jsx("th", { style: { width: "8%", textAlign: "center" }, children: "Tareas" }), s.jsx("th", { style: { width: "8%", textAlign: "center" }, children: "Pend." }), s.jsx("th", { style: { width: "8%", textAlign: "center" }, children: "Compl." }), s.jsx("th", { style: { width: "10%", textAlign: "center" }, children: "Budget" }), s.jsx("th", { style: { width: "8%", textAlign: "center" }, children: "Agentes" }), s.jsx("th", { style: { width: "12%", textAlign: "center" }, children: "Entrega" }), s.jsx("th", { style: { width: "12%", textAlign: "center" }, children: "Progreso" })] }) }), s.jsx("tbody", { children: v.map(j => s.jsx(T2, { project: j, onClick: () => x(j.id) }, j.id)) })] }), v.length === 0 && s.jsxs("div", { className: "py-12 text-center text-muted-foreground", children: [s.jsx(xt, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), s.jsx("p", { children: "No hay proyectos todavia" })] })] })] }); }
function tr({ isOpen: l, onClose: r, title: i, children: c, maxWidth: u = "max-w-xl", className: m }) { const h = R.useCallback(g => { g.key === "Escape" && r(); }, [r]); return R.useEffect(() => (l && (document.addEventListener("keydown", h), document.body.style.overflow = "hidden"), () => { document.removeEventListener("keydown", h), document.body.style.overflow = "unset"; }), [l, h]), l ? s.jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4", onClick: g => { g.target === g.currentTarget && r(); }, children: s.jsxs("div", { className: Z("bg-card rounded-2xl border border-border w-full max-h-[90vh] overflow-y-auto", u, m), children: [i && s.jsxs("div", { className: "p-6 border-b border-border flex items-center justify-between sticky top-0 bg-card z-10", children: [s.jsx("h2", { className: "text-xl font-bold text-foreground", children: i }), s.jsx("button", { onClick: r, className: "p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors", children: s.jsx(rs, { className: "h-5 w-5" }) })] }), !i && s.jsx("button", { onClick: r, className: "absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors z-10", children: s.jsx(rs, { className: "h-5 w-5" }) }), c] }) }) : null; }
const M2 = [{ key: "backlog", alt: "pending", label: "BL", fullLabel: "BACKLOG", color: "#6b7280" }, { key: "todo", alt: "pending", label: "TD", fullLabel: "TODO", color: "#f59e0b" }, { key: "doing", alt: "in_progress", label: "DO", fullLabel: "DOING", color: "#3b82f6" }, { key: "done", alt: "completed", label: "DN", fullLabel: "DONE", color: "#22c55e" }], up = 8;
function _2({ label: l, fullLabel: r, count: i, color: c, showLabel: u = !0, showCount: m = !0, compact: h = !1 }) { const g = Math.min(i, up), b = []; for (let y = 0; y < up; y++) {
    const v = y < g;
    b.push(s.jsx("div", { className: Z("trello-slot", v && "filled"), style: v ? { background: c, borderColor: "transparent" } : void 0 }, y));
} return s.jsxs("div", { className: "trello-column", children: [u && s.jsx("span", { className: "trello-label", children: h ? l : r }), s.jsx("div", { className: "trello-slots", children: b }), m && s.jsx("span", { className: "trello-count", children: i })] }); }
function O2({ board: l, showLabels: r = !0, showCounts: i = !0, compact: c = !1, className: u }) { const m = h => { const g = l[h.key] ?? 0, b = l[h.alt] ?? 0; return g || b; }; return s.jsx("div", { className: Z("mini-trello", c && "compact", u), children: M2.map(h => s.jsx(_2, { label: h.label, fullLabel: h.fullLabel, count: m(h), color: h.color, showLabel: r, showCount: i, compact: c }, h.key)) }); }
function D2({ project: l, metrics: r, onClick: i }) { var c; return s.jsxs("div", { onClick: i, className: "bg-card rounded-xl border border-border p-4 sm:p-6 cursor-pointer hover:bg-secondary/30 transition-colors", title: "Click para ver informacion completa del proyecto", children: [s.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 sm:gap-6", children: [s.jsx("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-solaria to-solaria-dark flex items-center justify-center shrink-0", children: s.jsx(gu, { className: "text-white h-8 w-8 sm:h-10 sm:w-10" }) }), s.jsxs("div", { className: "flex-1 min-w-0", children: [s.jsxs("div", { className: "flex items-center gap-2 mb-2 flex-wrap", children: [s.jsx("span", { className: "px-2 py-0.5 rounded text-xs bg-blue-500/20 text-blue-400 uppercase", children: "SAAS" }), s.jsx("span", { className: "px-2 py-0.5 rounded text-xs bg-purple-500/20 text-purple-400 uppercase", children: "REACT" }), s.jsx("span", { className: "px-2 py-0.5 rounded text-xs bg-green-500/20 text-green-400 uppercase", children: "B2B" })] }), s.jsx("p", { className: "text-muted-foreground text-sm line-clamp-2", children: l.description || "Sin descripcion" }), s.jsxs("div", { className: "flex items-center gap-2 mt-2 text-sm text-muted-foreground", children: [s.jsx("span", { className: "text-solaria", children: "●" }), s.jsx("span", { children: ((c = l.client) == null ? void 0 : c.name) || "Sin cliente" })] })] }), s.jsx("div", { className: "hidden sm:flex items-start", children: s.jsx(qt, { className: "h-5 w-5 text-muted-foreground" }) })] }), s.jsxs("div", { className: "mt-4 pt-4 border-t border-border", children: [s.jsxs("div", { className: "flex items-center justify-between mb-2", children: [s.jsx("span", { className: "text-sm text-muted-foreground", children: "Fase" }), s.jsx("span", { className: Z("px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide", l.status === "development" ? "bg-solaria/20 text-solaria border border-solaria/30" : l.status === "planning" ? "bg-violet-500/20 text-violet-400 border border-violet-500/30" : l.status === "completed" || l.status === "deployment" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : l.status === "on_hold" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : l.status === "testing" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "bg-gray-500/20 text-gray-400 border border-gray-500/30"), children: l.status === "development" ? "Desarrollo" : l.status === "planning" ? "Planificacion" : l.status === "completed" || l.status === "deployment" ? "Produccion" : l.status === "on_hold" ? "Pausado" : l.status === "testing" ? "Testing" : l.status })] }), s.jsxs("div", { className: "flex gap-1 mt-2", children: [s.jsx("div", { className: Z("flex-1 h-2 rounded-full transition-colors", l.status === "planning" ? "bg-violet-500" : "bg-solaria") }), s.jsx("div", { className: Z("flex-1 h-2 rounded-full transition-colors", ["active", "development", "testing", "deployment", "completed"].includes(l.status) ? "bg-solaria" : "bg-secondary") }), s.jsx("div", { className: Z("flex-1 h-2 rounded-full transition-colors", ["testing", "deployment", "completed"].includes(l.status) ? "bg-blue-500" : "bg-secondary") }), s.jsx("div", { className: Z("flex-1 h-2 rounded-full transition-colors", ["deployment", "completed"].includes(l.status) ? "bg-emerald-500" : "bg-secondary") })] }), s.jsxs("div", { className: "flex justify-between text-xs mt-1.5", children: [s.jsx("span", { className: Z("font-medium", l.status === "planning" ? "text-violet-400" : "text-muted-foreground"), children: "PLAN" }), s.jsx("span", { className: Z("font-medium", ["active", "development"].includes(l.status) ? "text-solaria" : "text-muted-foreground"), children: "DEV" }), s.jsx("span", { className: Z("font-medium", l.status === "testing" ? "text-blue-400" : "text-muted-foreground"), children: "TEST" }), s.jsx("span", { className: Z("font-medium", ["completed", "production"].includes(l.status) ? "text-emerald-400" : "text-muted-foreground"), children: "PROD" })] })] }), s.jsxs("div", { className: "grid grid-cols-4 gap-2 mt-4", children: [s.jsxs("div", { className: "text-center p-2 rounded-lg bg-secondary/50", children: [s.jsxs("p", { className: "text-lg font-bold text-foreground", children: ["$", Math.round((l.budgetAllocated || 0) / 1e3), "K"] }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Presupuesto" })] }), s.jsxs("div", { className: "text-center p-2 rounded-lg bg-secondary/50", children: [s.jsx("p", { className: "text-lg font-bold text-foreground", children: r.total }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Tareas" })] }), s.jsxs("div", { className: "text-center p-2 rounded-lg bg-secondary/50", children: [s.jsxs("p", { className: "text-lg font-bold text-green-400", children: [r.progress, "%"] }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Completado" })] }), s.jsxs("div", { className: "text-center p-2 rounded-lg bg-secondary/50", children: [s.jsxs("p", { className: Z("text-lg font-bold", r.daysRemaining < 0 ? "text-red-400" : "text-foreground"), children: [r.daysRemaining, "d"] }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Restantes" })] })] })] }); }
function z2({ metrics: l, tasksByStatus: r, onClick: i }) { return s.jsxs("div", { onClick: i, className: "bg-card rounded-xl border border-border p-4 cursor-pointer hover:bg-secondary/30 transition-colors", title: "Click para gestionar tareas", children: [s.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [s.jsx(Ze, { className: "h-4 w-4 text-solaria" }), "TAREAS", s.jsx(qt, { className: "h-3 w-3 text-muted-foreground ml-auto" })] }), s.jsxs("div", { className: "grid grid-cols-4 gap-2 mb-4", children: [s.jsxs("div", { className: "text-center", children: [s.jsx("p", { className: "text-xl font-bold text-foreground", children: l.total }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Total" })] }), s.jsxs("div", { className: "text-center", children: [s.jsx("p", { className: "text-xl font-bold text-yellow-400", children: l.pending }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Pend" })] }), s.jsxs("div", { className: "text-center", children: [s.jsx("p", { className: "text-xl font-bold text-blue-400", children: l.inProgress }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Doing" })] }), s.jsxs("div", { className: "text-center", children: [s.jsx("p", { className: "text-xl font-bold text-green-400", children: l.completed }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Done" })] })] }), s.jsx(O2, { board: r, showLabels: !0, showCounts: !0, compact: !1 })] }); }
function R2({ project: l, onClick: r }) { const i = [l.productionUrl && { label: "Produccion", url: l.productionUrl }, l.stagingUrl && { label: "Staging", url: l.stagingUrl }, l.localUrl && { label: "Local", url: l.localUrl }, l.repoUrl && { label: "Repo", url: l.repoUrl }].filter(Boolean); return s.jsxs("div", { onClick: r, className: "bg-card rounded-xl border border-border p-4 cursor-pointer hover:bg-secondary/30 transition-colors", title: "Click para gestionar URLs", children: [s.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [s.jsx(bu, { className: "h-4 w-4 text-solaria" }), "DIRECCIONES", s.jsx(qt, { className: "h-3 w-3 text-muted-foreground ml-auto" })] }), i.length > 0 ? s.jsxs("div", { className: "space-y-2", children: [i.slice(0, 3).map((c, u) => s.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground truncate", children: [s.jsx(qt, { className: "h-3 w-3 shrink-0" }), s.jsxs("span", { className: "text-xs text-solaria", children: [c.label, ":"] }), s.jsx("span", { className: "truncate", children: c.url })] }, u)), i.length > 3 && s.jsxs("p", { className: "text-xs text-solaria", children: ["+", i.length - 3, " mas..."] })] }) : s.jsx("p", { className: "text-sm text-muted-foreground", children: "No hay URLs configuradas" })] }); }
function B2({ activities: l }) { const r = l.slice(0, 5), i = c => c.includes("complete") || c.includes("done") ? s.jsx(Ze, { className: "h-4 w-4 text-green-400" }) : c.includes("create") || c.includes("new") ? s.jsx(mt, { className: "h-4 w-4 text-blue-400" }) : c.includes("update") || c.includes("edit") ? s.jsx(qi, { className: "h-4 w-4 text-yellow-400" }) : s.jsx(Qe, { className: "h-4 w-4 text-muted-foreground" }); return s.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [s.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [s.jsx(Qe, { className: "h-4 w-4 text-solaria" }), "Actividad"] }), r.length > 0 ? s.jsx("div", { className: "space-y-3", children: r.map(c => s.jsxs("div", { className: "flex items-start gap-3", children: [i(c.action), s.jsxs("div", { className: "flex-1 min-w-0", children: [s.jsx("p", { className: "text-sm text-foreground truncate", children: c.description || c.action }), s.jsx("p", { className: "text-xs text-muted-foreground", children: Be(c.createdAt) })] })] }, c.id)) }) : s.jsx("p", { className: "text-sm text-muted-foreground", children: "Sin actividad reciente" })] }); }
function q2({ notes: l, onAddNote: r }) { const [i, c] = R.useState(""), u = m => { m.preventDefault(), i.trim() && (r(i.trim()), c("")); }; return s.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [s.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [s.jsx(hg, { className: "h-4 w-4 text-solaria" }), "Notas", s.jsx("span", { className: "text-xs text-muted-foreground font-normal", children: "(Agentes leen)" })] }), s.jsxs("form", { onSubmit: u, className: "flex gap-2 mb-3", children: [s.jsx("input", { type: "text", value: i, onChange: m => c(m.target.value), placeholder: "Escribe una nota...", className: "flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-solaria" }), s.jsx("button", { type: "submit", disabled: !i.trim(), className: Z("p-2 rounded-lg transition-colors", i.trim() ? "bg-solaria text-white hover:bg-solaria-dark" : "bg-secondary text-muted-foreground cursor-not-allowed"), children: s.jsx(Kj, { className: "h-4 w-4" }) })] }), l.length > 0 ? s.jsx("div", { className: "space-y-2 max-h-32 overflow-y-auto", children: l.map((m, h) => s.jsx("div", { className: "p-2 rounded bg-secondary/50 text-sm text-foreground", children: m }, h)) }) : s.jsx("p", { className: "text-sm text-muted-foreground", children: "Sin notas" })] }); }
function U2({ epics: l, onCreateEpic: r, onDeleteEpic: i }) { const [c, u] = R.useState(!1), [m, h] = R.useState(""), g = R.useMemo(() => l.length === 0 ? 1 : Math.max(...l.map(j => j.epicNumber || 0)) + 1, [l]), b = `EPIC${String(g).padStart(3, "0")}`, y = () => { h(b), u(!0); }, v = () => { m.trim() && (r(m.trim()), h(""), u(!1)); }; return s.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [s.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [s.jsx(Jj, { className: "h-4 w-4 text-purple-400" }), "Epics", s.jsxs("span", { className: "text-xs text-muted-foreground font-normal ml-auto", children: [l.length, " total"] })] }), s.jsxs("div", { className: "space-y-2 mb-3 max-h-40 overflow-y-auto", children: [l.map(x => s.jsxs("div", { className: "flex items-center gap-2 p-2 rounded-lg bg-secondary/50 group", children: [s.jsx("div", { className: "w-3 h-3 rounded-full shrink-0", style: { backgroundColor: x.color || "#6366f1" } }), s.jsxs("span", { className: "flex-1 text-sm text-foreground truncate", children: ["EPIC", String(x.epicNumber).padStart(2, "0"), ": ", x.name] }), s.jsx("span", { className: Z("text-xs px-1.5 py-0.5 rounded", x.status === "completed" ? "bg-green-500/20 text-green-400" : x.status === "in_progress" ? "bg-blue-500/20 text-blue-400" : "bg-gray-500/20 text-gray-400"), children: x.status }), s.jsx("button", { onClick: () => i(x.id), className: "opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-all", children: s.jsx(ec, { className: "h-3 w-3" }) })] }, x.id)), l.length === 0 && s.jsx("p", { className: "text-sm text-muted-foreground text-center py-2", children: "Sin epics" })] }), c ? s.jsxs("div", { className: "flex gap-2", children: [s.jsx("input", { type: "text", value: m, onChange: x => h(x.target.value), placeholder: b, className: "flex-1 px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-purple-500 font-mono", autoFocus: !0, onKeyDown: x => x.key === "Enter" && v() }), s.jsx("button", { onClick: v, disabled: !m.trim(), className: "p-1.5 rounded-lg bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed", children: s.jsx(mt, { className: "h-4 w-4" }) }), s.jsx("button", { onClick: () => { u(!1), h(""); }, className: "p-1.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground", children: s.jsx(rs, { className: "h-4 w-4" }) })] }) : s.jsxs("button", { onClick: y, className: "w-full py-1.5 rounded-lg border border-dashed border-border text-muted-foreground text-sm hover:border-purple-500 hover:text-purple-400 transition-colors flex items-center justify-center gap-2", children: [s.jsx(mt, { className: "h-4 w-4" }), "Crear Epic (", b, ")"] })] }); }
function L2({ sprints: l, onCreateSprint: r, onDeleteSprint: i }) { const [c, u] = R.useState(!1), [m, h] = R.useState(""), g = R.useMemo(() => l.length === 0 ? 1 : Math.max(...l.map(k => k.sprintNumber || 0)) + 1, [l]), b = `SPRINT${String(g).padStart(3, "0")}`, y = () => { h(b), u(!0); }, v = () => { m.trim() && (r(m.trim()), h(""), u(!1)); }, x = l.find(j => j.status === "active"); return s.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [s.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [s.jsx(Dl, { className: "h-4 w-4 text-yellow-400" }), "Sprints", s.jsxs("span", { className: "text-xs text-muted-foreground font-normal ml-auto", children: [l.length, " total"] })] }), x && s.jsxs("div", { className: "mb-3 p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30", children: [s.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [s.jsx(Dl, { className: "h-3 w-3 text-yellow-400" }), s.jsx("span", { className: "text-yellow-400 font-medium", children: "Activo:" }), s.jsx("span", { className: "text-foreground", children: x.name })] }), x.endDate && s.jsxs("p", { className: "text-xs text-muted-foreground mt-1 flex items-center gap-1", children: [s.jsx(jj, { className: "h-3 w-3" }), "Termina: ", new Date(x.endDate).toLocaleDateString("es-ES")] })] }), s.jsxs("div", { className: "space-y-2 mb-3 max-h-32 overflow-y-auto", children: [l.filter(j => j.id !== (x == null ? void 0 : x.id)).map(j => s.jsxs("div", { className: "flex items-center gap-2 p-2 rounded-lg bg-secondary/50 group", children: [s.jsxs("span", { className: "text-xs font-mono text-muted-foreground", children: ["SP", String(j.sprintNumber).padStart(2, "0")] }), s.jsx("span", { className: "flex-1 text-sm text-foreground truncate", children: j.name }), s.jsx("span", { className: Z("text-xs px-1.5 py-0.5 rounded", j.status === "completed" ? "bg-green-500/20 text-green-400" : j.status === "active" ? "bg-yellow-500/20 text-yellow-400" : "bg-gray-500/20 text-gray-400"), children: j.status }), s.jsx("button", { onClick: () => i(j.id), className: "opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-all", children: s.jsx(ec, { className: "h-3 w-3" }) })] }, j.id)), l.length === 0 && s.jsx("p", { className: "text-sm text-muted-foreground text-center py-2", children: "Sin sprints" })] }), c ? s.jsxs("div", { className: "flex gap-2", children: [s.jsx("input", { type: "text", value: m, onChange: j => h(j.target.value), placeholder: b, className: "flex-1 px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-yellow-500 font-mono", autoFocus: !0, onKeyDown: j => j.key === "Enter" && v() }), s.jsx("button", { onClick: v, disabled: !m.trim(), className: "p-1.5 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed", children: s.jsx(mt, { className: "h-4 w-4" }) }), s.jsx("button", { onClick: () => { u(!1), h(""); }, className: "p-1.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground", children: s.jsx(rs, { className: "h-4 w-4" }) })] }) : s.jsxs("button", { onClick: y, className: "w-full py-1.5 rounded-lg border border-dashed border-border text-muted-foreground text-sm hover:border-yellow-500 hover:text-yellow-400 transition-colors flex items-center justify-center gap-2", children: [s.jsx(mt, { className: "h-4 w-4" }), "Crear Sprint (", b, ")"] })] }); }
function H2({ project: l, isOpen: r, onClose: i, onEdit: c }) { var u; return s.jsxs(tr, { isOpen: r, onClose: i, title: "Informacion del Proyecto", maxWidth: "max-w-2xl", children: [s.jsxs("div", { className: "p-6 space-y-6", children: [s.jsxs("div", { className: "flex items-start gap-4", children: [s.jsx("div", { className: "w-16 h-16 rounded-xl bg-gradient-to-br from-solaria to-solaria-dark flex items-center justify-center", children: s.jsx(gu, { className: "text-white h-8 w-8" }) }), s.jsxs("div", { className: "flex-1", children: [s.jsx("h2", { className: "text-xl font-bold text-foreground", children: l.name }), s.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: l.code })] })] }), s.jsxs("div", { children: [s.jsx("h4", { className: "text-sm font-medium text-muted-foreground mb-2", children: "Descripcion" }), s.jsx("p", { className: "text-foreground", children: l.description || "Sin descripcion" })] }), s.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [s.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50", children: [s.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Cliente" }), s.jsx("p", { className: "text-foreground font-medium", children: ((u = l.client) == null ? void 0 : u.name) || "Sin cliente" })] }), s.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50", children: [s.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Presupuesto" }), s.jsxs("p", { className: "text-foreground font-medium", children: ["$", (l.budgetAllocated || 0).toLocaleString()] })] }), s.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50", children: [s.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Fecha Inicio" }), s.jsx("p", { className: "text-foreground font-medium", children: l.startDate ? new Date(l.startDate).toLocaleDateString("es-ES") : "No definida" })] }), s.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50", children: [s.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Deadline" }), s.jsx("p", { className: "text-foreground font-medium", children: l.endDate ? new Date(l.endDate).toLocaleDateString("es-ES") : "No definida" })] })] }), s.jsxs("div", { children: [s.jsx("h4", { className: "text-sm font-medium text-muted-foreground mb-2", children: "Stack Tecnico" }), s.jsxs("div", { className: "flex flex-wrap gap-2", children: [s.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400", children: "React 19" }), s.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400", children: "Node.js" }), s.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400", children: "PostgreSQL" }), s.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-orange-500/20 text-orange-400", children: "TailwindCSS" })] })] })] }), s.jsxs("div", { className: "p-6 border-t border-border flex justify-end gap-3", children: [s.jsx("button", { onClick: i, className: "px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors", children: "Cerrar" }), s.jsxs("button", { onClick: () => { i(), c(); }, className: "px-4 py-2 rounded-lg bg-solaria text-white hover:bg-solaria-dark transition-colors flex items-center gap-2", children: [s.jsx(qi, { className: "h-4 w-4" }), "Editar"] })] })] }); }
function V2({ project: l, isOpen: r, onClose: i, onSave: c }) { var N, w, A, M; const [u, m] = R.useState({ name: l.name, code: l.code || "", description: l.description || "", budgetAllocated: l.budgetAllocated || 0, startDate: ((N = l.startDate) == null ? void 0 : N.split("T")[0]) || "", endDate: ((w = l.endDate) == null ? void 0 : w.split("T")[0]) || "" }), h = u.code.length === 3 && u.code.toUpperCase() !== ((A = l.code) == null ? void 0 : A.toUpperCase()), { data: g, isLoading: b } = d2(h ? u.code : ""), y = u.code.length === 3 && /^[A-Za-z]{3}$/.test(u.code), v = u.code.toUpperCase() === ((M = l.code) == null ? void 0 : M.toUpperCase()), x = v || ((g == null ? void 0 : g.available) ?? !0), j = q => { const G = q.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 3); m({ ...u, code: G }); }, k = () => { !y || !v && !x || (c(u), i()); }; return s.jsxs(tr, { isOpen: r, onClose: i, title: "Editar Proyecto", children: [s.jsxs("div", { className: "p-6 space-y-4", children: [s.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [s.jsxs("div", { className: "col-span-2", children: [s.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Nombre" }), s.jsx("input", { type: "text", value: u.name, onChange: q => m({ ...u, name: q.target.value }), className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground" })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Codigo (3 letras)" }), s.jsxs("div", { className: "relative", children: [s.jsx("input", { type: "text", value: u.code, onChange: j, maxLength: 3, placeholder: "ABC", className: Z("w-full px-3 py-2 rounded-lg bg-secondary border text-foreground font-mono text-center uppercase tracking-wider", !y && u.code.length > 0 ? "border-red-500" : y && !b && !v && x ? "border-green-500" : y && !b && !x ? "border-red-500" : "border-border") }), b && s.jsx("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground", children: "..." })] }), !y && u.code.length > 0 && s.jsx("p", { className: "text-xs text-red-400 mt-1", children: "Solo 3 letras A-Z" }), y && !v && !b && !x && s.jsx("p", { className: "text-xs text-red-400 mt-1", children: "Codigo en uso" }), y && !v && !b && x && s.jsx("p", { className: "text-xs text-green-400 mt-1", children: "Disponible ✓" })] })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Presupuesto" }), s.jsx("input", { type: "number", value: u.budgetAllocated, onChange: q => m({ ...u, budgetAllocated: Number(q.target.value) }), className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground" })] }), s.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Fecha Inicio" }), s.jsx("input", { type: "date", value: u.startDate, onChange: q => m({ ...u, startDate: q.target.value }), className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground" })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Deadline" }), s.jsx("input", { type: "date", value: u.endDate, onChange: q => m({ ...u, endDate: q.target.value }), className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground" })] })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Descripcion" }), s.jsx("textarea", { value: u.description, onChange: q => m({ ...u, description: q.target.value }), rows: 4, className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground resize-none" })] })] }), s.jsxs("div", { className: "p-6 border-t border-border flex justify-end gap-3", children: [s.jsx("button", { onClick: i, className: "px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors", children: "Cancelar" }), s.jsx("button", { onClick: k, disabled: !y || !v && !x || b, className: Z("px-4 py-2 rounded-lg transition-colors", !y || !v && !x || b ? "bg-secondary text-muted-foreground cursor-not-allowed" : "bg-solaria text-white hover:bg-solaria-dark"), children: "Guardar" })] })] }); }
function G2() { const { id: l } = zl(), r = Lt(), i = Number(l), [c, u] = R.useState(!1), [m, h] = R.useState(!1), [g, b] = R.useState([]), { data: y, isLoading: v, error: x } = sc(i), { data: j = [] } = Vg(i), { data: k = [] } = u2(i), { data: N = [] } = h2(i), { data: w = [] } = o2(i, 10), A = Su(), M = m2(), q = f2(), G = x2(), X = p2(), D = R.useMemo(() => { const E = j.length, $ = j.filter(ie => ie.status === "pending").length, K = j.filter(ie => ie.status === "in_progress").length, pe = j.filter(ie => ie.status === "completed").length, me = E > 0 ? Math.round(pe / E * 100) : 0; let ke = 0; if (y != null && y.endDate) {
    const ie = new Date(y.endDate), ae = new Date;
    ke = Math.ceil((ie.getTime() - ae.getTime()) / (1e3 * 60 * 60 * 24));
} return { total: E, pending: $, inProgress: K, completed: pe, progress: me, daysRemaining: ke }; }, [j, y]), F = R.useMemo(() => { const $ = j.filter(me => me.status === "pending").length, K = j.filter(me => me.status === "in_progress").length, pe = j.filter(me => me.status === "completed").length; return { backlog: 0, todo: $, doing: K, done: pe }; }, [j]), L = R.useCallback(() => { u(!0); }, []), Y = R.useCallback(() => { r(`/projects/${i}/tasks`); }, [r, i]), re = R.useCallback(() => { r(`/projects/${i}/links`); }, [r, i]), Le = R.useCallback(E => { b($ => [E, ...$]); }, []), He = R.useCallback(E => { A.mutate({ id: i, data: E }); }, [i, A]), we = R.useCallback(E => { M.mutate({ projectId: i, data: { name: E } }); }, [i, M]), Fe = R.useCallback(E => { q.mutate({ id: E, projectId: i }); }, [i, q]), qe = R.useCallback(E => { G.mutate({ projectId: i, data: { name: E } }); }, [i, G]), se = R.useCallback(E => { X.mutate({ id: E, projectId: i }); }, [i, X]); return v ? s.jsx("div", { className: "flex items-center justify-center h-64", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-solaria" }) }) : x || !y ? s.jsxs("div", { className: "flex flex-col items-center justify-center h-64 gap-4", children: [s.jsx(xt, { className: "h-12 w-12 text-red-500" }), s.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Proyecto no encontrado" }), s.jsxs("p", { className: "text-muted-foreground", children: ["El proyecto con ID ", i, " no existe o no tienes acceso."] }), s.jsxs("button", { onClick: () => r("/projects"), className: "px-4 py-2 rounded-lg bg-solaria text-white flex items-center gap-2", children: [s.jsx(pa, { className: "h-4 w-4" }), "Volver a Proyectos"] })] }) : s.jsxs("div", { className: "p-4 sm:p-6 space-y-4 sm:space-y-6", children: [s.jsxs("div", { className: "flex items-center justify-between", children: [s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx("button", { onClick: () => r("/projects"), className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Volver al listado", children: s.jsx(pa, { className: "h-5 w-5" }) }), s.jsxs("div", { children: [s.jsx("h1", { className: "text-xl sm:text-2xl font-bold text-foreground", children: y.name }), s.jsx("p", { className: "text-sm text-muted-foreground", children: y.description })] })] }), s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsxs("button", { onClick: () => u(!0), className: "px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground flex items-center gap-2 transition-colors", children: [s.jsx(gg, { className: "h-4 w-4" }), s.jsx("span", { className: "hidden sm:inline", children: "Info" })] }), s.jsx("button", { onClick: () => r(`/projects/${i}/settings`), className: "p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors", title: "Configuracion", children: s.jsx(Wi, { className: "h-4 w-4" }) })] })] }), s.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6", children: [s.jsxs("div", { className: "lg:col-span-2 space-y-4 sm:space-y-6", children: [s.jsx(D2, { project: y, metrics: D, onClick: L }), s.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [s.jsx(z2, { metrics: D, tasksByStatus: F, onClick: Y }), s.jsx(R2, { project: y, onClick: re })] }), s.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [s.jsx(U2, { epics: k, onCreateEpic: we, onDeleteEpic: Fe }), s.jsx(L2, { sprints: N, onCreateSprint: qe, onDeleteSprint: se })] })] }), s.jsxs("div", { className: "space-y-4 sm:space-y-6", children: [s.jsx(B2, { activities: w.map(E => ({ id: E.id, action: E.action, description: E.message || E.action, createdAt: E.createdAt })) }), s.jsx(q2, { notes: g, onAddNote: Le })] })] }), s.jsx(H2, { project: y, isOpen: c, onClose: () => u(!1), onEdit: () => h(!0) }), s.jsx(V2, { project: y, isOpen: m, onClose: () => h(!1), onSave: He })] }); }
function Q2({ item: l, onComplete: r, disabled: i = !1, showDragHandle: c = !1 }) { const [u, m] = R.useState(!1), [h, g] = R.useState(!1), [b, y] = R.useState(""), [v, x] = R.useState(l.estimatedMinutes || 0), j = async () => { if (!(l.isCompleted || i || u)) {
    if (!h && l.estimatedMinutes) {
        g(!0);
        return;
    }
    m(!0);
    try {
        await r(l.id, b || void 0, v || void 0);
    }
    finally {
        m(!1), g(!1);
    }
} }, k = async () => { if (!(l.isCompleted || i || u)) {
    m(!0);
    try {
        await r(l.id);
    }
    finally {
        m(!1);
    }
} }; return s.jsxs("div", { className: Z("task-item-row", l.isCompleted && "completed"), children: [c && s.jsx("div", { className: "task-item-handle", children: s.jsx(zj, { className: "h-4 w-4" }) }), s.jsx("button", { onClick: k, disabled: l.isCompleted || i || u, className: Z("task-item-checkbox", l.isCompleted && "checked", u && "loading"), children: u ? s.jsx(_e, { className: "h-3 w-3 animate-spin" }) : l.isCompleted ? s.jsx(_l, { className: "h-3 w-3" }) : null }), s.jsxs("div", { className: "task-item-content", children: [s.jsx("span", { className: Z("task-item-title", l.isCompleted && "completed"), children: l.title }), l.description && s.jsx("span", { className: "task-item-description", children: l.description }), h && !l.isCompleted && s.jsxs("div", { className: "task-item-complete-form", children: [s.jsx("input", { type: "number", value: v, onChange: N => x(Number(N.target.value)), placeholder: "Minutos reales", className: "task-item-minutes-input", min: 0 }), s.jsx("input", { type: "text", value: b, onChange: N => y(N.target.value), placeholder: "Notas (opcional)", className: "task-item-notes-input" }), s.jsx("button", { onClick: j, disabled: u, className: "task-item-complete-btn", children: u ? s.jsx(_e, { className: "h-3 w-3 animate-spin" }) : "Completar" }), s.jsx("button", { onClick: () => g(!1), className: "task-item-cancel-btn", children: "Cancelar" })] })] }), s.jsx("div", { className: "task-item-time", children: l.isCompleted && l.completedAt ? s.jsxs("span", { className: "task-item-completed-at", children: [s.jsx(_l, { className: "h-3 w-3" }), Be(l.completedAt)] }) : l.estimatedMinutes ? s.jsxs("span", { className: "task-item-estimate", children: [s.jsx(Qe, { className: "h-3 w-3" }), l.estimatedMinutes, "m"] }) : null })] }); }
function ku({ taskId: l, editable: r = !0, showAddForm: i = !0 }) { const { data: c, isLoading: u, error: m } = s2(l), h = a2(), g = l2(), [b, y] = R.useState([{ title: "", estimatedMinutes: 30 }]), [v, x] = R.useState(!1), [j, k] = R.useState(!1), N = (c == null ? void 0 : c.filter(F => F.isCompleted).length) || 0, w = (c == null ? void 0 : c.length) || 0, A = w > 0 ? Math.round(N / w * 100) : 0, M = () => { y([...b, { title: "", estimatedMinutes: 30 }]); }, q = F => { b.length > 1 && y(b.filter((L, Y) => Y !== F)); }, G = (F, L, Y) => { const re = [...b]; L === "title" ? re[F].title = Y : re[F].estimatedMinutes = Y, y(re); }, X = async () => { const F = b.filter(L => L.title.trim()); if (F.length !== 0) {
    x(!0);
    try {
        await h.mutateAsync({ taskId: l, items: F.map(L => ({ title: L.title.trim(), estimatedMinutes: L.estimatedMinutes })) }), y([{ title: "", estimatedMinutes: 30 }]), k(!1);
    }
    finally {
        x(!1);
    }
} }, D = async (F, L, Y) => { await g.mutateAsync({ taskId: l, itemId: F, notes: L, actualMinutes: Y }); }; return u ? s.jsxs("div", { className: "task-items-loading", children: [s.jsx(_e, { className: "h-5 w-5 animate-spin" }), s.jsx("span", { children: "Cargando subtareas..." })] }) : m ? s.jsx("div", { className: "task-items-error", children: "Error al cargar subtareas" }) : s.jsxs("div", { className: "task-items-list", children: [s.jsxs("div", { className: "task-items-header", children: [s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx(yu, { className: "h-4 w-4 text-muted-foreground" }), s.jsx("span", { className: "font-medium", children: "Subtareas" }), s.jsxs("span", { className: "text-xs text-muted-foreground", children: ["(", N, "/", w, ")"] })] }), w > 0 && s.jsx("div", { className: "task-items-progress-bar", children: s.jsx("div", { className: Z("task-items-progress-fill", A === 100 && "complete"), style: { width: `${A}%` } }) })] }), s.jsx("div", { className: "task-items-body", children: c && c.length > 0 ? c.sort((F, L) => F.sortOrder - L.sortOrder).map(F => s.jsx(Q2, { item: F, onComplete: D, disabled: !r }, F.id)) : s.jsxs("div", { className: "task-items-empty", children: [s.jsx(Ze, { className: "h-8 w-8 text-muted-foreground/50" }), s.jsx("p", { children: "No hay subtareas definidas" })] }) }), r && i && s.jsx("div", { className: "task-items-add", children: j ? s.jsxs("div", { className: "add-items-form", children: [b.map((F, L) => s.jsxs("div", { className: "add-item-row", children: [s.jsx("input", { type: "text", value: F.title, onChange: Y => G(L, "title", Y.target.value), placeholder: "Titulo de la subtarea...", className: "add-item-title", autoFocus: L === b.length - 1 }), s.jsx("input", { type: "number", value: F.estimatedMinutes, onChange: Y => G(L, "estimatedMinutes", Number(Y.target.value)), className: "add-item-minutes", min: 5, step: 5 }), s.jsx("span", { className: "add-item-minutes-label", children: "min" }), b.length > 1 && s.jsx("button", { onClick: () => q(L), className: "add-item-remove", children: "×" })] }, L)), s.jsxs("div", { className: "add-items-actions", children: [s.jsxs("button", { onClick: M, className: "add-another-btn", children: [s.jsx(mt, { className: "h-3 w-3" }), "Agregar otra"] }), s.jsxs("div", { className: "flex gap-2", children: [s.jsx("button", { onClick: () => { k(!1), y([{ title: "", estimatedMinutes: 30 }]); }, className: "cancel-btn", children: "Cancelar" }), s.jsx("button", { onClick: X, disabled: v || !b.some(F => F.title.trim()), className: "submit-items-btn", children: v ? s.jsx(_e, { className: "h-4 w-4 animate-spin" }) : "Guardar" })] })] })] }) : s.jsxs("button", { onClick: () => k(!0), className: "add-items-trigger", children: [s.jsx(mt, { className: "h-4 w-4" }), "Agregar subtareas"] }) })] }); }
const Vi = { critical: 0, high: 1, medium: 2, low: 3 }, Gi = { pending: 0, in_progress: 1, blocked: 2, completed: 3 }, Gn = { pending: "todo", blocked: "backlog", in_progress: "doing", review: "doing", completed: "done", cancelled: "done" }, K2 = [{ key: "backlog", label: "Backlog", color: "#64748b" }, { key: "todo", label: "Por Hacer", color: "#f59e0b" }, { key: "doing", label: "En Progreso", color: "#3b82f6" }, { key: "done", label: "Completadas", color: "#22c55e" }], ba = { critical: { color: "#ef4444", label: "P0", bg: "rgba(239, 68, 68, 0.2)" }, high: { color: "#f59e0b", label: "P1", bg: "rgba(249, 115, 22, 0.2)" }, medium: { color: "#3b82f6", label: "P2", bg: "rgba(59, 130, 246, 0.2)" }, low: { color: "#64748b", label: "P3", bg: "rgba(100, 116, 139, 0.2)" } }, ac = { pending: "Pendiente", in_progress: "En Progreso", review: "En Revision", completed: "Completada", blocked: "Bloqueada", cancelled: "Cancelada" };
function Y2({ task: l, agent: r, onClick: i }) { const c = ba[l.priority] || ba.medium, u = l.status === "in_progress", m = l.taskCode || `#${l.id}`; return s.jsxs("div", { onClick: i, className: "task-card bg-secondary border border-border rounded-lg p-3 cursor-pointer transition-all hover:border-solaria hover:-translate-y-0.5", children: [s.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [s.jsxs("span", { className: "text-[13px] font-medium text-foreground leading-tight", children: [s.jsx("span", { className: "text-solaria font-semibold mr-1.5", children: m }), l.title] }), s.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [s.jsx("span", { className: "px-1.5 py-0.5 rounded text-[9px] font-bold uppercase", style: { background: c.bg, color: c.color }, children: c.label }), l.estimatedHours && l.estimatedHours > 0 && s.jsxs("span", { className: "text-[9px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded flex items-center gap-1", children: [s.jsx(pg, { className: "h-2.5 w-2.5" }), l.estimatedHours, "h"] })] })] }), u && l.progress > 0 && s.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [s.jsx("div", { className: "flex-1 h-1 bg-background/50 rounded overflow-hidden", children: s.jsx("div", { className: "h-full rounded transition-all", style: { width: `${l.progress}%`, background: `linear-gradient(90deg, ${c.color}, ${c.color}dd)` } }) }), s.jsxs("span", { className: "text-[10px] font-bold min-w-[32px] text-right", style: { color: l.progress >= 100 ? "#22c55e" : c.color }, children: [l.progress, "%"] })] }), s.jsxs("div", { className: "flex items-center justify-between", children: [s.jsxs("div", { className: "flex items-center gap-2", children: [r ? s.jsxs("span", { className: "flex items-center gap-1 text-[10px] text-solaria bg-solaria/10 px-1.5 py-0.5 rounded", children: [s.jsx(Us, { className: "h-3 w-3" }), r.name.replace("SOLARIA-", "")] }) : s.jsxs("span", { className: "flex items-center gap-1 text-[10px] text-muted-foreground", children: [s.jsx(qs, { className: "h-3 w-3" }), "Sin asignar"] }), l.status && l.status !== "in_progress" && s.jsx("span", { className: "text-[8px] px-1 py-0.5 bg-secondary rounded text-muted-foreground", children: ac[l.status] || l.status })] }), l.createdAt && s.jsxs("span", { className: "text-[9px] text-muted-foreground flex items-center gap-1", children: [s.jsx(Qe, { className: "h-2.5 w-2.5" }), Be(l.createdAt)] })] })] }); }
function X2({ column: l, tasks: r, agents: i, onTaskClick: c, onAddTask: u }) { const m = h => i.find(g => g.id === h); return s.jsxs("div", { className: Z("flex-1 min-w-0 bg-secondary/30 rounded-xl flex flex-col h-full overflow-hidden", `kanban-column-${l.key}`), children: [s.jsxs("div", { className: "px-4 py-3 flex items-center justify-between border-b border-border", children: [s.jsxs("span", { className: "text-xs font-semibold uppercase tracking-wide flex items-center gap-2", children: [s.jsx("span", { className: "w-2 h-2 rounded-full", style: { background: l.color } }), l.label] }), s.jsx("span", { className: "text-[11px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full", children: r.length })] }), s.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto p-2.5 space-y-2", children: [r.map(h => s.jsx(Y2, { task: h, agent: m(h.assignedAgentId), onClick: () => c(h.id) }, h.id)), l.key === "backlog" && u && s.jsxs("button", { onClick: u, className: "w-full p-2.5 border-2 border-dashed border-border rounded-lg text-muted-foreground text-xs hover:border-solaria hover:text-solaria transition-colors flex items-center justify-center gap-1.5", children: [s.jsx(mt, { className: "h-3.5 w-3.5" }), "Agregar tarea"] }), r.length === 0 && l.key !== "backlog" && s.jsx("div", { className: "text-center py-8 text-muted-foreground text-xs", children: "Sin tareas" })] })] }); }
function Z2({ tasks: l, agents: r, onTaskClick: i, onCreateTask: c }) { const u = R.useMemo(() => { const m = { backlog: [], todo: [], doing: [], done: [] }; return l.forEach(h => { const g = Gn[h.status] || "todo"; m[g].push(h); }), m; }, [l]); return s.jsx("div", { className: "kanban-board flex gap-3 h-[calc(100vh-320px)] min-h-[400px]", children: K2.map(m => s.jsx(X2, { column: m, tasks: u[m.key] || [], agents: r, onTaskClick: i, onAddTask: m.key === "backlog" ? c : void 0 }, m.key)) }); }
function $t({ label: l, column: r, currentColumn: i, currentDirection: c, onSort: u, className: m = "" }) { const h = i === r; return s.jsxs("button", { onClick: () => u(r), className: Z("flex items-center gap-1 text-xs font-semibold uppercase tracking-wide transition-colors group", h ? "text-solaria" : "text-muted-foreground hover:text-foreground", m), children: [l, s.jsx("span", { className: "text-muted-foreground group-hover:text-foreground", children: h ? c === "asc" ? s.jsx(Qn, { className: "h-3 w-3" }) : s.jsx(fu, { className: "h-3 w-3" }) : s.jsx(vj, { className: "h-3 w-3 opacity-50" }) })] }); }
function J2({ tasks: l, agents: r, onTaskClick: i }) { const [c, u] = R.useState("priority"), [m, h] = R.useState("asc"), g = v => r.find(x => x.id === v), b = R.useCallback(v => { c === v ? h(x => x === "asc" ? "desc" : "asc") : (u(v), h("asc")); }, [c]), y = R.useMemo(() => [...l].sort((x, j) => { var N, w; let k = 0; switch (c) {
    case "code":
        const A = x.taskCode || `#${x.id}`, M = j.taskCode || `#${j.id}`;
        k = A.localeCompare(M);
        break;
    case "title":
        k = x.title.localeCompare(j.title);
        break;
    case "priority":
        k = (Vi[x.priority] ?? 3) - (Vi[j.priority] ?? 3);
        break;
    case "status":
        k = (Gi[x.status] ?? 0) - (Gi[j.status] ?? 0);
        break;
    case "progress":
        k = (x.progress || 0) - (j.progress || 0);
        break;
    case "agent":
        const q = ((N = r.find(F => F.id === x.assignedAgentId)) == null ? void 0 : N.name) || "ZZZ", G = ((w = r.find(F => F.id === j.assignedAgentId)) == null ? void 0 : w.name) || "ZZZ";
        k = q.localeCompare(G);
        break;
    case "date":
        const X = new Date(x.updatedAt || x.createdAt || 0).getTime(), D = new Date(j.updatedAt || j.createdAt || 0).getTime();
        k = X - D;
        break;
} return m === "asc" ? k : -k; }), [l, c, m, r]); return s.jsxs("div", { className: "bg-card rounded-xl border border-border overflow-hidden h-full flex flex-col", children: [s.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border sticky top-0 z-10", children: [s.jsx("div", { className: "w-1 flex-shrink-0" }), " ", s.jsx($t, { label: "Código", column: "code", currentColumn: c, currentDirection: m, onSort: b, className: "w-20" }), s.jsx($t, { label: "Tarea", column: "title", currentColumn: c, currentDirection: m, onSort: b, className: "flex-1 min-w-0" }), s.jsx($t, { label: "Estado", column: "status", currentColumn: c, currentDirection: m, onSort: b, className: "w-24" }), s.jsx($t, { label: "Prioridad", column: "priority", currentColumn: c, currentDirection: m, onSort: b, className: "w-20" }), s.jsx($t, { label: "Progreso", column: "progress", currentColumn: c, currentDirection: m, onSort: b, className: "w-28" }), s.jsx($t, { label: "Agente", column: "agent", currentColumn: c, currentDirection: m, onSort: b, className: "w-28" }), s.jsx($t, { label: "Fecha", column: "date", currentColumn: c, currentDirection: m, onSort: b, className: "w-24" }), s.jsx("div", { className: "w-6 flex-shrink-0" }), " "] }), s.jsxs("div", { className: "flex-1 overflow-y-auto", children: [y.map(v => { const x = g(v.assignedAgentId), j = v.status === "completed", k = ba[v.priority] || ba.medium; return s.jsxs("div", { onClick: () => i(v.id), className: "flex items-center gap-2 px-4 py-3 bg-card border-b border-border last:border-b-0 hover:bg-secondary/30 cursor-pointer transition-colors", children: [s.jsx("div", { className: "w-1 h-10 rounded-full flex-shrink-0", style: { background: k.color } }), s.jsx("div", { className: "w-20 flex-shrink-0", children: s.jsx("span", { className: "text-xs text-solaria font-mono font-semibold", children: v.taskCode || `#${v.id}` }) }), s.jsx("div", { className: "flex-1 min-w-0", children: s.jsx("span", { className: Z("text-sm font-medium truncate block", j && "line-through opacity-70"), children: v.title }) }), s.jsx("div", { className: "w-24 flex-shrink-0", children: s.jsx("span", { className: "inline-block px-2 py-1 rounded text-[10px] font-medium", style: { background: k.bg, color: k.color }, children: ac[v.status] || v.status }) }), s.jsx("div", { className: "w-20 flex-shrink-0", children: s.jsx("span", { className: "inline-block px-2 py-1 rounded text-[10px] font-bold", style: { background: k.bg, color: k.color }, children: k.label }) }), s.jsx("div", { className: "w-28 flex-shrink-0", children: s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("div", { className: "flex-1 h-2 bg-secondary rounded-full overflow-hidden", children: s.jsx("div", { className: Z("h-full rounded-full transition-all", j ? "bg-green-500" : "bg-solaria"), style: { width: `${v.progress}%` } }) }), s.jsxs("span", { className: "text-xs text-muted-foreground w-8 text-right", children: [v.progress, "%"] })] }) }), s.jsx("div", { className: "w-28 flex-shrink-0", children: s.jsx("div", { className: "flex items-center gap-1", children: x ? s.jsxs(s.Fragment, { children: [s.jsx(Us, { className: "h-3 w-3 text-solaria" }), s.jsx("span", { className: "text-xs truncate", children: x.name.replace("SOLARIA-", "") })] }) : s.jsx("span", { className: "text-xs text-muted-foreground", children: "Sin asignar" }) }) }), s.jsx("div", { className: "w-24 flex-shrink-0 text-xs text-muted-foreground", children: v.updatedAt ? Be(v.updatedAt) : v.createdAt ? Be(v.createdAt) : "-" }), s.jsx(Ii, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" })] }, v.id); }), y.length === 0 && s.jsx("div", { className: "text-center py-12 text-muted-foreground", children: "No hay tareas" })] })] }); }
function F2({ tasks: l, agents: r, onTaskClick: i }) { const [c, u] = R.useState("priority"), [m, h] = R.useState("asc"), g = j => r.find(k => k.id === j), b = R.useCallback(j => { c === j ? h(k => k === "asc" ? "desc" : "asc") : (u(j), h("asc")); }, [c]), y = R.useMemo(() => [...l].sort((k, N) => { var A, M; let w = 0; switch (c) {
    case "code":
        const q = k.taskCode || `#${k.id}`, G = N.taskCode || `#${N.id}`;
        w = q.localeCompare(G);
        break;
    case "title":
        w = k.title.localeCompare(N.title);
        break;
    case "priority":
        w = (Vi[k.priority] ?? 3) - (Vi[N.priority] ?? 3);
        break;
    case "status":
        w = (Gi[k.status] ?? 0) - (Gi[N.status] ?? 0);
        break;
    case "progress":
        w = (k.progress || 0) - (N.progress || 0);
        break;
    case "agent":
        const X = ((A = r.find(Y => Y.id === k.assignedAgentId)) == null ? void 0 : A.name) || "ZZZ", D = ((M = r.find(Y => Y.id === N.assignedAgentId)) == null ? void 0 : M.name) || "ZZZ";
        w = X.localeCompare(D);
        break;
    case "date":
        const F = new Date(k.updatedAt || k.createdAt || 0).getTime(), L = new Date(N.updatedAt || N.createdAt || 0).getTime();
        w = F - L;
        break;
} return m === "asc" ? w : -w; }), [l, c, m, r]), v = R.useMemo(() => Math.max(...l.map(j => j.estimatedHours || 0), 8), [l]), x = j => { switch (j) {
    case "critical": return "linear-gradient(to right, #ef4444, #dc2626)";
    case "high": return "linear-gradient(to right, #f97316, #ea580c)";
    case "medium": return "linear-gradient(to right, #f6921d, #d97b0d)";
    case "low": return "linear-gradient(to right, #6b7280, #4b5563)";
    default: return "linear-gradient(to right, #f6921d, #d97b0d)";
} }; return s.jsxs("div", { className: "bg-card rounded-xl border border-border overflow-hidden h-full flex flex-col", children: [s.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between flex-shrink-0", children: [s.jsxs("h3", { className: "font-semibold flex items-center gap-2", children: [s.jsx(ju, { className: "h-5 w-5 text-solaria" }), "Vista Gantt"] }), s.jsxs("div", { className: "flex gap-4 text-xs", children: [s.jsxs("span", { className: "flex items-center gap-1.5", children: [s.jsx("span", { className: "w-3 h-3 rounded", style: { background: "#ef4444" } }), "P0"] }), s.jsxs("span", { className: "flex items-center gap-1.5", children: [s.jsx("span", { className: "w-3 h-3 rounded", style: { background: "#f97316" } }), "P1"] }), s.jsxs("span", { className: "flex items-center gap-1.5", children: [s.jsx("span", { className: "w-3 h-3 rounded", style: { background: "#f6921d" } }), "P2"] }), s.jsxs("span", { className: "flex items-center gap-1.5", children: [s.jsx("span", { className: "w-3 h-3 rounded", style: { background: "#6b7280" } }), "P3"] })] })] }), s.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border flex-shrink-0 sticky top-0 z-10", children: [s.jsx($t, { label: "Código", column: "code", currentColumn: c, currentDirection: m, onSort: b, className: "w-20" }), s.jsx($t, { label: "Tarea", column: "title", currentColumn: c, currentDirection: m, onSort: b, className: "w-48" }), s.jsx($t, { label: "Agente", column: "agent", currentColumn: c, currentDirection: m, onSort: b, className: "w-24" }), s.jsx($t, { label: "Estado", column: "status", currentColumn: c, currentDirection: m, onSort: b, className: "w-24" }), s.jsx($t, { label: "Prioridad", column: "priority", currentColumn: c, currentDirection: m, onSort: b, className: "w-20" }), s.jsx("div", { className: "flex-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Timeline / Progreso" })] }), s.jsxs("div", { className: "flex-1 overflow-y-auto divide-y divide-border", children: [y.map(j => { const k = g(j.assignedAgentId), N = j.status === "completed", w = ba[j.priority] || ba.medium, A = (j.estimatedHours || 0) / v * 100, M = j.progress || 0; return s.jsxs("div", { onClick: () => i(j.id), className: "flex items-center gap-2 py-3 px-4 hover:bg-secondary/30 cursor-pointer transition-colors", children: [s.jsx("div", { className: "w-20 flex-shrink-0", children: s.jsx("span", { className: "text-xs text-solaria font-mono font-semibold", children: j.taskCode || `#${j.id}` }) }), s.jsx("div", { className: "w-48 flex-shrink-0 min-w-0", children: s.jsx("span", { className: Z("text-sm truncate font-medium block", N && "line-through opacity-70"), children: j.title }) }), s.jsx("div", { className: "w-24 flex-shrink-0", children: s.jsx("div", { className: "flex items-center gap-1", children: k ? s.jsxs(s.Fragment, { children: [s.jsx(Us, { className: "h-3 w-3 text-solaria" }), s.jsx("span", { className: "text-xs truncate", children: k.name.replace("SOLARIA-", "") })] }) : s.jsx("span", { className: "text-xs text-muted-foreground", children: "Sin asignar" }) }) }), s.jsx("div", { className: "w-24 flex-shrink-0", children: s.jsx("span", { className: "inline-block px-2 py-1 rounded text-[10px] font-medium", style: { background: w.bg, color: w.color }, children: ac[j.status] || j.status }) }), s.jsx("div", { className: "w-20 flex-shrink-0", children: s.jsx("span", { className: "inline-block px-2 py-1 rounded text-[10px] font-bold", style: { background: w.bg, color: w.color }, children: w.label }) }), s.jsxs("div", { className: "flex-1 h-7 bg-secondary/50 rounded relative overflow-hidden", children: [A > 0 && s.jsxs("div", { className: "absolute inset-y-0 left-0 rounded flex items-center transition-all", style: { width: `${Math.max(A, 10)}%`, background: x(j.priority) }, children: [s.jsx("div", { className: "absolute inset-y-0 left-0 bg-white/30 rounded", style: { width: `${M}%` } }), s.jsxs("span", { className: "text-[10px] text-white px-2 font-medium relative z-10 drop-shadow whitespace-nowrap", children: [j.estimatedHours || 0, "h - ", M, "%"] })] }), A === 0 && s.jsx("div", { className: "h-full flex items-center justify-center text-xs text-muted-foreground", children: "Sin estimación" })] })] }, j.id); }), y.length === 0 && s.jsx("div", { className: "text-center py-12 text-muted-foreground", children: "No hay tareas" })] })] }); }
function $2({ task: l, agent: r, isOpen: i, onClose: c }) { const [u, m] = R.useState(!1), { data: h = [], isLoading: g } = r2((l == null ? void 0 : l.id) || 0), { data: b = [] } = n2(), y = i2(), v = c2(), x = R.useMemo(() => { const M = new Set(h.map(q => q.id)); return b.filter(q => !M.has(q.id)); }, [h, b]), j = R.useCallback(M => { l && (y.mutate({ taskId: l.id, tagId: M }), m(!1)); }, [l, y]), k = R.useCallback(M => { l && v.mutate({ taskId: l.id, tagId: M }); }, [l, v]); if (!l)
    return null; const N = ba[l.priority] || ba.medium, w = ac[l.status] || l.status, A = l.taskCode || `#${l.id}`; return s.jsxs(tr, { isOpen: i, onClose: c, title: "", maxWidth: "max-w-2xl", children: [s.jsxs("div", { className: "px-6 py-4 border-b border-border", style: { borderLeft: `4px solid ${N.color}` }, children: [s.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [s.jsx("span", { className: "px-2 py-1 rounded text-[11px] font-bold", style: { background: N.bg, color: N.color }, children: N.label }), s.jsx("span", { className: "px-2 py-1 rounded text-[11px] bg-secondary", children: w }), s.jsx("span", { className: "text-[11px] text-muted-foreground", children: A })] }), s.jsx("h3", { className: "text-lg font-semibold", children: l.title })] }), s.jsxs("div", { className: "p-6 space-y-6", children: [s.jsxs("div", { children: [s.jsxs("h4", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [s.jsx(yj, { className: "h-4 w-4 text-solaria" }), "Descripcion"] }), s.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: l.description || "Sin descripcion disponible" })] }), l.progress > 0 && s.jsxs("div", { children: [s.jsxs("h4", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [s.jsx(Uj, { className: "h-4 w-4 text-solaria" }), "Progreso"] }), s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "flex-1 h-2 bg-secondary rounded-full overflow-hidden", children: s.jsx("div", { className: "h-full rounded-full", style: { width: `${l.progress}%`, background: N.color } }) }), s.jsxs("span", { className: "text-sm font-semibold", style: { color: N.color }, children: [l.progress, "%"] })] })] }), s.jsx("div", { className: "border border-border rounded-lg p-4 bg-secondary/30", children: s.jsx(ku, { taskId: l.id, editable: l.status !== "completed", showAddForm: l.status !== "completed" }) }), s.jsxs("div", { children: [s.jsxs("h4", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [s.jsx(wg, { className: "h-4 w-4 text-solaria" }), "Etiquetas"] }), s.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [g ? s.jsx(_e, { className: "h-4 w-4 animate-spin text-muted-foreground" }) : h.length === 0 ? s.jsx("span", { className: "text-xs text-muted-foreground", children: "Sin etiquetas" }) : h.map(M => s.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium group", style: { backgroundColor: `${M.color}20`, color: M.color }, children: [M.name, s.jsx("button", { onClick: () => k(M.id), className: "opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 rounded p-0.5", title: "Eliminar etiqueta", children: s.jsx(rs, { className: "h-3 w-3" }) })] }, M.id)), u ? s.jsx("div", { className: "relative", children: s.jsxs("div", { className: "absolute top-full left-0 mt-1 z-50 bg-card border border-border rounded-lg shadow-lg p-2 min-w-[160px] max-h-[200px] overflow-y-auto", children: [x.length === 0 ? s.jsx("p", { className: "text-xs text-muted-foreground p-2", children: "No hay etiquetas disponibles" }) : x.map(M => s.jsxs("button", { onClick: () => j(M.id), className: "w-full text-left px-2 py-1.5 rounded hover:bg-secondary transition-colors flex items-center gap-2", children: [s.jsx("span", { className: "w-3 h-3 rounded-full", style: { backgroundColor: M.color } }), s.jsx("span", { className: "text-sm", children: M.name })] }, M.id)), s.jsx("button", { onClick: () => m(!1), className: "w-full text-left px-2 py-1.5 rounded hover:bg-secondary transition-colors text-xs text-muted-foreground mt-1 border-t border-border", children: "Cancelar" })] }) }) : s.jsx("button", { onClick: () => m(!0), className: "px-2 py-1 rounded text-xs border border-dashed border-muted-foreground/50 text-muted-foreground hover:border-solaria hover:text-solaria transition-colors", children: "+ Agregar" })] })] }), s.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [s.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [s.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [s.jsx(qs, { className: "h-3 w-3 text-blue-400" }), "Asignado a"] }), s.jsx("p", { className: "text-sm font-medium", children: (r == null ? void 0 : r.name) || "Sin asignar" })] }), s.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [s.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [s.jsx(pg, { className: "h-3 w-3 text-yellow-400" }), "Horas Estimadas"] }), s.jsxs("p", { className: "text-sm font-medium", children: [l.estimatedHours || 0, " horas"] })] }), s.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [s.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [s.jsx(ns, { className: "h-3 w-3 text-green-400" }), "Fecha Creacion"] }), s.jsx("p", { className: "text-sm font-medium", children: l.createdAt ? new Date(l.createdAt).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" }) : "N/A" })] }), s.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [s.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [s.jsx(ns, { className: "h-3 w-3 text-red-400" }), "Ultima Actualizacion"] }), s.jsx("p", { className: "text-sm font-medium", children: l.updatedAt ? Be(l.updatedAt) : "N/A" })] })] })] }), s.jsxs("div", { className: "px-6 py-4 border-t border-border flex items-center justify-between", children: [s.jsx("button", { onClick: c, className: "px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm", children: "Cerrar" }), s.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground bg-secondary px-3 py-2 rounded-lg", children: [s.jsx(Us, { className: "h-3.5 w-3.5" }), "Solo el agente puede completar"] })] })] }); }
function P2({ isOpen: l, onClose: r, projectId: i, onTaskCreated: c }) { const [u, m] = R.useState(""), [h, g] = R.useState(""), [b, y] = R.useState("medium"), [v, x] = R.useState(1), j = ZN(), k = async (N) => { if (N.preventDefault(), !!u.trim())
    try {
        await j.mutateAsync({ projectId: i, title: u.trim(), description: h.trim(), priority: b, status: "pending", estimatedHours: v }), m(""), g(""), y("medium"), x(1), c(), r();
    }
    catch (w) {
        console.error("Error creating task:", w);
    } }; return s.jsx(tr, { isOpen: l, onClose: r, title: "Nueva Tarea", maxWidth: "max-w-lg", children: s.jsxs("form", { onSubmit: k, className: "p-6 space-y-4", children: [s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm font-medium mb-2", children: "Titulo *" }), s.jsx("input", { type: "text", value: u, onChange: N => m(N.target.value), placeholder: "Nombre de la tarea...", className: "w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-solaria focus:outline-none", required: !0, autoFocus: !0 })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm font-medium mb-2", children: "Descripcion" }), s.jsx("textarea", { value: h, onChange: N => g(N.target.value), placeholder: "Describe la tarea...", rows: 4, className: "w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-solaria focus:outline-none resize-none" })] }), s.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm font-medium mb-2", children: "Prioridad" }), s.jsxs("select", { value: b, onChange: N => y(N.target.value), className: "w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-solaria focus:outline-none", children: [s.jsx("option", { value: "low", children: "P3 - Baja" }), s.jsx("option", { value: "medium", children: "P2 - Media" }), s.jsx("option", { value: "high", children: "P1 - Alta" }), s.jsx("option", { value: "critical", children: "P0 - Critica" })] })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm font-medium mb-2", children: "Horas Estimadas" }), s.jsx("input", { type: "number", value: v, onChange: N => x(Number(N.target.value)), min: .5, step: .5, className: "w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-solaria focus:outline-none" })] })] }), s.jsxs("div", { className: "flex justify-end gap-3 pt-4 border-t border-border", children: [s.jsx("button", { type: "button", onClick: r, className: "px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors", children: "Cancelar" }), s.jsx("button", { type: "submit", disabled: !u.trim() || j.isPending, className: "px-4 py-2 rounded-lg bg-solaria hover:bg-solaria/90 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: j.isPending ? "Creando..." : "Crear Tarea" })] })] }) }); }
function I2() { const { id: l } = zl(), r = Lt(), i = parseInt(l || "0"), [c, u] = R.useState("kanban"), [m, h] = R.useState(!1), [g, b] = R.useState(null), { data: y, isLoading: v } = sc(i), { data: x, isLoading: j, refetch: k } = Vg(i), { data: N } = Hg(), w = R.useMemo(() => x ? { backlog: x.filter(D => Gn[D.status] === "backlog").length, todo: x.filter(D => Gn[D.status] === "todo").length, doing: x.filter(D => Gn[D.status] === "doing").length, done: x.filter(D => Gn[D.status] === "done").length } : { backlog: 0, todo: 0, doing: 0, done: 0 }, [x]), A = R.useMemo(() => !g || !x ? null : x.find(D => D.id === g) || null, [g, x]), M = R.useMemo(() => { if (!(!A || !N))
    return N.find(D => D.id === A.assignedAgentId); }, [A, N]), q = R.useCallback(D => { b(D); }, []), G = R.useCallback(() => { k(); }, [k]), X = () => { r(`/projects/${i}`); }; return v || j ? s.jsx("div", { className: "flex h-full items-center justify-center", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : y ? s.jsxs("div", { className: "h-full flex flex-col", children: [s.jsxs("div", { className: "flex items-center justify-between mb-4 flex-shrink-0", children: [s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx("button", { onClick: X, className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Volver al proyecto", children: s.jsx(pa, { className: "h-5 w-5" }) }), s.jsxs("div", { children: [s.jsxs("h1", { className: "text-xl font-bold", children: ["Tareas - ", y.name] }), s.jsxs("p", { className: "text-sm text-muted-foreground", children: [(x == null ? void 0 : x.length) || 0, " tareas en total"] })] })] }), s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsxs("div", { className: "flex bg-secondary rounded-lg overflow-hidden", children: [s.jsxs("button", { onClick: () => u("kanban"), className: Z("px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2", c === "kanban" ? "bg-solaria text-white" : "text-muted-foreground hover:text-foreground"), children: [s.jsx($n, { className: "h-4 w-4" }), "Kanban"] }), s.jsxs("button", { onClick: () => u("list"), className: Z("px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2", c === "list" ? "bg-solaria text-white" : "text-muted-foreground hover:text-foreground"), children: [s.jsx(Pn, { className: "h-4 w-4" }), "Lista"] }), s.jsxs("button", { onClick: () => u("gantt"), className: Z("px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2", c === "gantt" ? "bg-solaria text-white" : "text-muted-foreground hover:text-foreground"), children: [s.jsx(ju, { className: "h-4 w-4" }), "Gantt"] })] }), s.jsxs("button", { onClick: () => h(!0), className: "px-4 py-2 rounded-lg bg-solaria hover:bg-solaria/90 text-white font-medium flex items-center gap-2 transition-colors", children: [s.jsx(mt, { className: "h-4 w-4" }), "Nueva Tarea"] })] })] }), s.jsxs("div", { className: "flex items-center gap-1 mb-3 flex-shrink-0 bg-secondary/50 rounded-lg p-2", children: [s.jsxs("div", { className: "flex-1 text-center px-3 py-1", children: [s.jsx("div", { className: "text-base font-bold", style: { color: "#64748b" }, children: w.backlog }), s.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: "Backlog" })] }), s.jsx("div", { className: "w-px h-8 bg-border" }), s.jsxs("div", { className: "flex-1 text-center px-3 py-1", children: [s.jsx("div", { className: "text-base font-bold", style: { color: "#f59e0b" }, children: w.todo }), s.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: "Por Hacer" })] }), s.jsx("div", { className: "w-px h-8 bg-border" }), s.jsxs("div", { className: "flex-1 text-center px-3 py-1", children: [s.jsx("div", { className: "text-base font-bold", style: { color: "#3b82f6" }, children: w.doing }), s.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: "En Progreso" })] }), s.jsx("div", { className: "w-px h-8 bg-border" }), s.jsxs("div", { className: "flex-1 text-center px-3 py-1", children: [s.jsx("div", { className: "text-base font-bold", style: { color: "#22c55e" }, children: w.done }), s.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: "Completadas" })] })] }), s.jsxs("div", { className: "flex-1 min-h-0", children: [c === "kanban" && s.jsx(Z2, { tasks: x || [], agents: N || [], onTaskClick: q, onCreateTask: () => h(!0) }), c === "list" && s.jsx("div", { className: "h-full", children: s.jsx(J2, { tasks: x || [], agents: N || [], onTaskClick: q }) }), c === "gantt" && s.jsx("div", { className: "h-full", children: s.jsx(F2, { tasks: x || [], agents: N || [], onTaskClick: q }) })] }), w.done > 0 && s.jsx("div", { className: "flex items-center justify-center py-3 border-t border-border flex-shrink-0", children: s.jsxs("button", { onClick: () => r("/tasks/archived"), className: "flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors", children: [s.jsx(hs, { className: "h-4 w-4" }), "Ver ", w.done, " tareas archivadas"] }) }), s.jsx(P2, { isOpen: m, onClose: () => h(!1), projectId: i, onTaskCreated: G }), s.jsx($2, { task: A, agent: M, isOpen: !!g, onClose: () => b(null) })] }) : s.jsx("div", { className: "flex h-full items-center justify-center", children: s.jsx("p", { className: "text-muted-foreground", children: "Proyecto no encontrado" }) }); }
const mp = { production: { label: "Producción", icon: pu, color: "text-emerald-400", bgColor: "bg-emerald-500/10" }, staging: { label: "Staging/Dev", icon: Bi, color: "text-amber-400", bgColor: "bg-amber-500/10" }, local: { label: "Local", icon: bg, color: "text-blue-400", bgColor: "bg-blue-500/10" }, repository: { label: "Repositorio", icon: Dj, color: "text-violet-400", bgColor: "bg-violet-500/10" } };
function W2() { const { id: l } = zl(), r = Lt(), { data: i, isLoading: c } = sc(Number(l)), u = Su(), [m, h] = R.useState(!1), [g, b] = R.useState({ type: "production", label: "", url: "" }), [y, v] = R.useState(null), x = [(i == null ? void 0 : i.productionUrl) && { id: "prod", type: "production", label: "Produccion", url: i.productionUrl }, (i == null ? void 0 : i.stagingUrl) && { id: "staging", type: "staging", label: "Staging", url: i.stagingUrl }, (i == null ? void 0 : i.localUrl) && { id: "local", type: "local", label: "Local", url: i.localUrl }, (i == null ? void 0 : i.repoUrl) && { id: "repo", type: "repository", label: "GitHub", url: i.repoUrl }].filter(Boolean), j = async (w, A) => { await navigator.clipboard.writeText(w), v(A), setTimeout(() => v(null), 2e3); }, k = async () => { if (!g.url.trim())
    return; const w = { production: "productionUrl", staging: "stagingUrl", local: "localUrl", repository: "repoUrl" }; await u.mutateAsync({ id: Number(l), data: { [w[g.type]]: g.url.trim() } }), b({ type: "production", label: "", url: "" }), h(!1); }, N = async (w) => { const A = { prod: "productionUrl", staging: "stagingUrl", local: "localUrl", repo: "repoUrl" }; A[w] && await u.mutateAsync({ id: Number(l), data: { [A[w]]: null } }); }; return c ? s.jsx("div", { className: "flex items-center justify-center min-h-[400px]", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : i ? s.jsxs("div", { className: "p-6 max-w-4xl mx-auto", children: [s.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [s.jsx("button", { onClick: () => r(`/projects/${l}`), className: "p-2 rounded-lg hover:bg-secondary transition-colors", children: s.jsx(pa, { className: "h-5 w-5" }) }), s.jsxs("div", { children: [s.jsx("h1", { className: "text-2xl font-bold", children: "Direcciones del Proyecto" }), s.jsx("p", { className: "text-muted-foreground", children: i.name })] })] }), s.jsx("div", { className: "space-y-3 mb-6", children: x.length === 0 ? s.jsxs("div", { className: "text-center py-12 bg-card rounded-xl border border-border", children: [s.jsx(yg, { className: "h-12 w-12 mx-auto text-muted-foreground/50 mb-4" }), s.jsx("p", { className: "text-muted-foreground mb-4", children: "No hay direcciones configuradas para este proyecto" }), s.jsxs("button", { onClick: () => h(!0), className: "px-4 py-2 bg-solaria text-white rounded-lg hover:bg-solaria/90 transition-colors", children: [s.jsx(mt, { className: "h-4 w-4 inline mr-2" }), "Agregar primera dirección"] })] }) : x.map(w => { const A = mp[w.type], M = A.icon; return s.jsxs("div", { className: "flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-border/80 transition-colors", children: [s.jsx("div", { className: Z("p-2.5 rounded-lg", A.bgColor, A.color), children: s.jsx(M, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "flex-1 min-w-0", children: [s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("span", { className: "font-medium", children: w.label }), s.jsx("span", { className: "text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground", children: A.label })] }), s.jsx("p", { className: "text-sm text-muted-foreground truncate", children: w.url })] }), s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("button", { onClick: () => j(w.url, w.id), className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Copiar URL", children: y === w.id ? s.jsx(_l, { className: "h-4 w-4 text-emerald-400" }) : s.jsx(Ml, { className: "h-4 w-4 text-muted-foreground" }) }), s.jsx("a", { href: w.url, target: "_blank", rel: "noopener noreferrer", className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Abrir en nueva pestana", children: s.jsx(qt, { className: "h-4 w-4 text-muted-foreground" }) }), s.jsx("button", { onClick: () => N(w.id), className: "p-2 rounded-lg hover:bg-red-500/10 transition-colors", title: "Eliminar", children: s.jsx(ec, { className: "h-4 w-4 text-red-400" }) })] })] }, w.id); }) }), x.length > 0 && !m && s.jsxs("button", { onClick: () => h(!0), className: "w-full p-4 border border-dashed border-border rounded-xl text-muted-foreground hover:border-solaria hover:text-solaria transition-colors flex items-center justify-center gap-2", children: [s.jsx(mt, { className: "h-5 w-5" }), "Agregar dirección"] }), m && s.jsxs("div", { className: "p-6 bg-card rounded-xl border border-border", children: [s.jsx("h3", { className: "font-medium mb-4", children: "Nueva Dirección" }), s.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", children: [s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Tipo" }), s.jsx("select", { value: g.type, onChange: w => b({ ...g, type: w.target.value }), className: "w-full p-2.5 bg-secondary rounded-lg border border-border text-sm", children: Object.entries(mp).map(([w, { label: A }]) => s.jsx("option", { value: w, children: A }, w)) })] }), s.jsxs("div", { className: "md:col-span-2", children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "URL" }), s.jsx("input", { type: "url", value: g.url, onChange: w => b({ ...g, url: w.target.value }), placeholder: "https://...", className: "w-full p-2.5 bg-secondary rounded-lg border border-border text-sm" })] })] }), s.jsxs("div", { className: "flex justify-end gap-3", children: [s.jsx("button", { onClick: () => { h(!1), b({ type: "production", label: "", url: "" }); }, className: "px-4 py-2 text-sm text-muted-foreground hover:text-foreground", children: "Cancelar" }), s.jsx("button", { onClick: k, disabled: !g.url.trim() || u.isPending, className: "px-4 py-2 bg-solaria text-white rounded-lg text-sm hover:bg-solaria/90 disabled:opacity-50", children: u.isPending ? s.jsx(_e, { className: "h-4 w-4 animate-spin" }) : "Guardar" })] })] })] }) : s.jsx("div", { className: "p-8 text-center text-muted-foreground", children: "Proyecto no encontrado" }); }
const e4 = ["React", "Vue", "Angular", "Next.js", "Nuxt", "Svelte", "Node.js", "Express", "Fastify", "NestJS", "Python", "Django", "FastAPI", "Flask", "TypeScript", "JavaScript", "Go", "Rust", "PHP", "Laravel", "PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Redis", "SQLite", "Docker", "Kubernetes", "AWS", "GCP", "Azure", "Vercel", "TailwindCSS", "Sass", "styled-components", "Payload CMS", "GraphQL", "REST API", "Drizzle ORM", "Prisma"], t4 = ["SAAS", "B2B", "B2C", "E-COMMERCE", "LANDING", "DASHBOARD", "REACT", "VUE", "MOBILE", "API", "CMS", "INTERNAL", "MVP", "PRODUCTION", "STAGING", "LEGACY", "MAINTENANCE"], s4 = [{ value: "planning", label: "Planificacion", color: "bg-violet-500" }, { value: "active", label: "En Desarrollo", color: "bg-solaria" }, { value: "paused", label: "Pausado", color: "bg-amber-500" }, { value: "completed", label: "Completado", color: "bg-emerald-500" }, { value: "cancelled", label: "Cancelado", color: "bg-red-500" }], a4 = [{ value: "critical", label: "Critica", color: "text-red-400" }, { value: "high", label: "Alta", color: "text-amber-400" }, { value: "medium", label: "Media", color: "text-blue-400" }, { value: "low", label: "Baja", color: "text-gray-400" }];
function l4() { const { id: l } = zl(), r = Lt(), { data: i, isLoading: c } = sc(Number(l)), u = Su(), [m, h] = R.useState({ name: "", code: "", description: "", status: "planning", priority: "medium", budgetAllocated: 0, startDate: "", endDate: "", tags: [], stack: [], clientName: "", clientEmail: "", clientPhone: "" }), [g, b] = R.useState(!1), [y, v] = R.useState(!1), [x, j] = R.useState(""), [k, N] = R.useState(""); R.useEffect(() => { var D; if (i) {
    let F = [], L = [];
    try {
        typeof i.tags == "string" ? F = JSON.parse(i.tags) : Array.isArray(i.tags) && (F = i.tags);
    }
    catch { }
    try {
        typeof i.stack == "string" ? L = JSON.parse(i.stack) : Array.isArray(i.stack) && (L = i.stack);
    }
    catch { }
    h({ name: i.name || "", code: i.code || "", description: i.description || "", status: i.status || "planning", priority: i.priority || "medium", budgetAllocated: i.budgetAllocated || 0, startDate: i.startDate ? new Date(i.startDate).toISOString().split("T")[0] : "", endDate: i.endDate ? new Date(i.endDate).toISOString().split("T")[0] : "", tags: F, stack: L, clientName: ((D = i.client) == null ? void 0 : D.name) || "", clientEmail: "", clientPhone: "" });
} }, [i]); const w = (D, F) => { h(L => ({ ...L, [D]: F })), b(!0); }, A = () => { const D = x.trim().toUpperCase(); D && !m.tags.includes(D) && (h(F => ({ ...F, tags: [...F.tags, D] })), j(""), b(!0)); }, M = D => { h(F => ({ ...F, tags: F.tags.filter(L => L !== D) })), b(!0); }, q = () => { const D = k.trim(); D && !m.stack.includes(D) && (h(F => ({ ...F, stack: [...F.stack, D] })), N(""), b(!0)); }, G = D => { h(F => ({ ...F, stack: F.stack.filter(L => L !== D) })), b(!0); }, X = async () => { await u.mutateAsync({ id: Number(l), data: { name: m.name, code: m.code, description: m.description, status: m.status, priority: m.priority, budgetAllocated: Number(m.budgetAllocated), startDate: m.startDate || void 0, endDate: m.endDate || void 0, tags: m.tags, stack: m.stack } }), b(!1); }; return c ? s.jsx("div", { className: "flex items-center justify-center min-h-[400px]", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : i ? s.jsxs("div", { className: "p-6 max-w-4xl mx-auto", children: [s.jsxs("div", { className: "flex items-center justify-between mb-8", children: [s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx("button", { onClick: () => r(`/projects/${l}`), className: "p-2 rounded-lg hover:bg-secondary transition-colors", children: s.jsx(pa, { className: "h-5 w-5" }) }), s.jsxs("div", { children: [s.jsxs("h1", { className: "text-2xl font-bold flex items-center gap-2", children: [s.jsx(Wi, { className: "h-6 w-6" }), "Configuracion del Proyecto"] }), s.jsx("p", { className: "text-muted-foreground", children: i.name })] })] }), g && s.jsxs("button", { onClick: X, disabled: u.isPending, className: "flex items-center gap-2 px-4 py-2 bg-solaria text-white rounded-lg hover:bg-solaria/90 disabled:opacity-50", children: [u.isPending ? s.jsx(_e, { className: "h-4 w-4 animate-spin" }) : s.jsx(vu, { className: "h-4 w-4" }), "Guardar Cambios"] })] }), s.jsxs("div", { className: "space-y-6", children: [s.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [s.jsx("h2", { className: "text-lg font-semibold mb-4", children: "Informacion Basica" }), s.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Nombre del Proyecto" }), s.jsx("input", { type: "text", value: m.name, onChange: D => w("name", D.target.value), className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Codigo" }), s.jsx("input", { type: "text", value: m.code, onChange: D => w("code", D.target.value.toUpperCase()), maxLength: 5, className: "w-full p-3 bg-secondary rounded-lg border border-border uppercase font-mono" })] }), s.jsxs("div", { className: "md:col-span-2", children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Descripcion" }), s.jsx("textarea", { value: m.description, onChange: D => w("description", D.target.value), rows: 3, className: "w-full p-3 bg-secondary rounded-lg border border-border resize-none" })] })] })] }), s.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [s.jsx("h2", { className: "text-lg font-semibold mb-4", children: "Estado y Prioridad" }), s.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Estado" }), s.jsx("div", { className: "flex flex-wrap gap-2", children: s4.map(D => s.jsx("button", { onClick: () => w("status", D.value), className: Z("px-3 py-1.5 rounded-full text-sm font-medium transition-all", m.status === D.value ? `${D.color} text-white` : "bg-secondary text-muted-foreground hover:text-foreground"), children: D.label }, D.value)) })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Prioridad" }), s.jsx("div", { className: "flex flex-wrap gap-2", children: a4.map(D => s.jsx("button", { onClick: () => w("priority", D.value), className: Z("px-3 py-1.5 rounded-full text-sm font-medium transition-all border", m.priority === D.value ? `${D.color} border-current bg-current/10` : "border-border text-muted-foreground hover:text-foreground"), children: D.label }, D.value)) })] })] })] }), s.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [s.jsx("h2", { className: "text-lg font-semibold mb-4", children: "Presupuesto y Fechas" }), s.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Presupuesto ($)" }), s.jsx("input", { type: "number", value: m.budgetAllocated, onChange: D => w("budgetAllocated", Number(D.target.value)), min: 0, step: 1e3, className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Fecha de Inicio" }), s.jsx("input", { type: "date", value: m.startDate, onChange: D => w("startDate", D.target.value), className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Fecha Limite" }), s.jsx("input", { type: "date", value: m.endDate, onChange: D => w("endDate", D.target.value), className: "w-full p-3 bg-secondary rounded-lg border border-border" })] })] })] }), s.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [s.jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [s.jsx(Nu, { className: "h-5 w-5 text-blue-400" }), "Etiquetas del Proyecto"] }), s.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [m.tags.map(D => s.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30", children: [D, s.jsx("button", { onClick: () => M(D), className: "p-0.5 hover:bg-blue-500/30 rounded-full transition-colors", children: s.jsx(rs, { className: "h-3 w-3" }) })] }, D)), m.tags.length === 0 && s.jsx("span", { className: "text-sm text-muted-foreground", children: "Sin etiquetas" })] }), s.jsxs("div", { className: "flex gap-2 mb-4", children: [s.jsx("input", { type: "text", value: x, onChange: D => j(D.target.value.toUpperCase()), onKeyDown: D => D.key === "Enter" && (D.preventDefault(), A()), placeholder: "Nueva etiqueta...", className: "flex-1 p-2 bg-secondary rounded-lg border border-border text-sm uppercase" }), s.jsx("button", { onClick: A, disabled: !x.trim(), className: "p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed", children: s.jsx(mt, { className: "h-4 w-4" }) })] }), s.jsx("div", { className: "flex flex-wrap gap-1.5", children: t4.filter(D => !m.tags.includes(D)).slice(0, 10).map(D => s.jsxs("button", { onClick: () => { h(F => ({ ...F, tags: [...F.tags, D] })), b(!0); }, className: "px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors", children: ["+ ", D] }, D)) })] }), s.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [s.jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [s.jsx(Bj, { className: "h-5 w-5 text-purple-400" }), "Stack Tecnico"] }), s.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [m.stack.map(D => s.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30", children: [D, s.jsx("button", { onClick: () => G(D), className: "p-0.5 hover:bg-purple-500/30 rounded-full transition-colors", children: s.jsx(rs, { className: "h-3 w-3" }) })] }, D)), m.stack.length === 0 && s.jsx("span", { className: "text-sm text-muted-foreground", children: "Sin tecnologias definidas" })] }), s.jsxs("div", { className: "flex gap-2 mb-4", children: [s.jsx("input", { type: "text", value: k, onChange: D => N(D.target.value), onKeyDown: D => D.key === "Enter" && (D.preventDefault(), q()), placeholder: "Nueva tecnologia...", className: "flex-1 p-2 bg-secondary rounded-lg border border-border text-sm" }), s.jsx("button", { onClick: q, disabled: !k.trim(), className: "p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed", children: s.jsx(mt, { className: "h-4 w-4" }) })] }), s.jsx("div", { className: "flex flex-wrap gap-1.5", children: e4.filter(D => !m.stack.includes(D)).slice(0, 12).map(D => s.jsxs("button", { onClick: () => { h(F => ({ ...F, stack: [...F.stack, D] })), b(!0); }, className: "px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors", children: ["+ ", D] }, D)) })] }), s.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [s.jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [s.jsx(ug, { className: "h-5 w-5 text-emerald-400" }), "Informacion del Cliente"] }), s.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Nombre del Cliente/Empresa" }), s.jsx("input", { type: "text", value: m.clientName, onChange: D => w("clientName", D.target.value), placeholder: "Ej: SOLARIA Agency", className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Email de Contacto" }), s.jsx("input", { type: "email", value: m.clientEmail, onChange: D => w("clientEmail", D.target.value), placeholder: "cliente@ejemplo.com", className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Telefono" }), s.jsx("input", { type: "tel", value: m.clientPhone, onChange: D => w("clientPhone", D.target.value), placeholder: "+52 555 123 4567", className: "w-full p-3 bg-secondary rounded-lg border border-border" })] })] })] }), s.jsxs("section", { className: "bg-card rounded-xl border border-red-500/20 p-6", children: [s.jsxs("h2", { className: "text-lg font-semibold text-red-400 mb-4 flex items-center gap-2", children: [s.jsx(Vn, { className: "h-5 w-5" }), "Zona de Peligro"] }), s.jsxs("div", { className: "flex items-center justify-between", children: [s.jsxs("div", { children: [s.jsx("p", { className: "font-medium", children: "Eliminar Proyecto" }), s.jsx("p", { className: "text-sm text-muted-foreground", children: "Esta accion no se puede deshacer. Se eliminaran todas las tareas asociadas." })] }), y ? s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("button", { onClick: () => v(!1), className: "px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground", children: "Cancelar" }), s.jsx("button", { className: "px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600", children: "Confirmar Eliminacion" })] }) : s.jsxs("button", { onClick: () => v(!0), className: "flex items-center gap-2 px-4 py-2 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors", children: [s.jsx(ec, { className: "h-4 w-4" }), "Eliminar"] })] })] })] })] }) : s.jsx("div", { className: "p-8 text-center text-muted-foreground", children: "Proyecto no encontrado" }); }
const fp = { critical: { color: "text-red-500", bg: "bg-red-500/10", label: "Critica" }, high: { color: "text-orange-500", bg: "bg-orange-500/10", label: "Alta" }, medium: { color: "text-yellow-500", bg: "bg-yellow-500/10", label: "Media" }, low: { color: "text-green-500", bg: "bg-green-500/10", label: "Baja" } }, hp = { feature: { color: "text-purple-500", bg: "bg-purple-500/10", label: "Feature" }, bug: { color: "text-red-500", bg: "bg-red-500/10", label: "Bug" }, enhancement: { color: "text-blue-500", bg: "bg-blue-500/10", label: "Mejora" }, documentation: { color: "text-gray-500", bg: "bg-gray-500/10", label: "Docs" }, research: { color: "text-cyan-500", bg: "bg-cyan-500/10", label: "Research" }, maintenance: { color: "text-amber-500", bg: "bg-amber-500/10", label: "Maint." } };
function n4({ task: l, onClick: r, showProject: i = !1, compact: c = !1 }) { const u = fp[l.priority] || fp.medium, m = hp[l.type] || hp.feature, h = l.itemsTotal || 0, g = l.itemsCompleted || 0, b = h > 0 ? Math.round(g / h * 100) : 0, y = l.dueDate && new Date(l.dueDate) < new Date && l.status !== "completed"; return c ? s.jsxs("div", { onClick: r, className: "task-card-compact", children: [s.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [s.jsx("span", { className: Z("task-badge", m.bg, m.color), children: m.label }), s.jsx("span", { className: "task-code", children: l.taskCode || `#${l.taskNumber}` })] }), s.jsx("div", { className: "task-title-compact", children: l.title }), h > 0 && s.jsxs("div", { className: "task-progress-mini", children: [s.jsx("div", { className: "task-progress-bar-mini", children: s.jsx("div", { className: "task-progress-fill-mini", style: { width: `${b}%` } }) }), s.jsxs("span", { className: "task-progress-text-mini", children: [g, "/", h] })] })] }) : s.jsxs("div", { onClick: r, className: Z("task-card", l.status === "blocked" && "blocked", y && "overdue"), children: [s.jsxs("div", { className: "task-card-header", children: [s.jsxs("div", { className: "task-badges", children: [s.jsx("span", { className: Z("task-badge", m.bg, m.color), children: m.label }), s.jsxs("span", { className: Z("task-badge", u.bg, u.color), children: [s.jsx(xg, { className: "h-3 w-3" }), u.label] })] }), s.jsx("span", { className: "task-code", children: l.taskCode || `#${l.taskNumber}` })] }), i && l.projectName && s.jsx("div", { className: "task-project-label", children: l.projectCode || l.projectName }), s.jsx("h4", { className: "task-card-title", children: l.title }), l.description && s.jsx("p", { className: "task-card-description", children: l.description }), h > 0 && s.jsxs("div", { className: "task-items-progress", children: [s.jsxs("div", { className: "flex items-center justify-between mb-1", children: [s.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [s.jsx(Ze, { className: "h-3 w-3" }), "Subtareas"] }), s.jsxs("span", { className: "text-xs font-medium", children: [g, "/", h] })] }), s.jsx("div", { className: "task-progress-bar", children: s.jsx("div", { className: Z("task-progress-fill", b === 100 && "complete"), style: { width: `${b}%` } }) })] }), s.jsxs("div", { className: "task-card-footer", children: [l.dueDate && s.jsxs("div", { className: Z("task-meta", y && "text-red-500"), children: [s.jsx(ns, { className: "h-3 w-3" }), s.jsx("span", { children: Be(l.dueDate) })] }), l.estimatedHours && s.jsxs("div", { className: "task-meta", children: [s.jsx(Qe, { className: "h-3 w-3" }), s.jsxs("span", { children: [l.estimatedHours, "h"] })] }), l.notes && s.jsx("div", { className: "task-meta", children: s.jsx(vg, { className: "h-3 w-3" }) }), s.jsx("div", { className: "flex-1" }), l.agentName && s.jsxs("div", { className: "task-assignee", children: [s.jsx("div", { className: "task-assignee-avatar", children: s.jsx(qs, { className: "h-3 w-3" }) }), s.jsx("span", { className: "task-assignee-name", children: l.agentName.split("-").pop() })] }), l.status === "blocked" && s.jsxs("div", { className: "task-blocked-badge", children: [s.jsx(xt, { className: "h-3 w-3" }), "Bloqueado"] })] })] }); }
const qd = { pending: { label: "Pendiente", color: "text-gray-500", bg: "bg-gray-500/10" }, in_progress: { label: "En Progreso", color: "text-blue-500", bg: "bg-blue-500/10" }, review: { label: "En Revision", color: "text-purple-500", bg: "bg-purple-500/10" }, completed: { label: "Completada", color: "text-green-500", bg: "bg-green-500/10" }, blocked: { label: "Bloqueada", color: "text-red-500", bg: "bg-red-500/10" } }, xp = { critical: { label: "Critica", color: "text-red-500", bg: "bg-red-500/10" }, high: { label: "Alta", color: "text-orange-500", bg: "bg-orange-500/10" }, medium: { label: "Media", color: "text-yellow-500", bg: "bg-yellow-500/10" }, low: { label: "Baja", color: "text-green-500", bg: "bg-green-500/10" } }, pp = { feature: { label: "Feature", color: "text-purple-500", bg: "bg-purple-500/10" }, bug: { label: "Bug", color: "text-red-500", bg: "bg-red-500/10" }, enhancement: { label: "Mejora", color: "text-blue-500", bg: "bg-blue-500/10" }, documentation: { label: "Documentacion", color: "text-gray-500", bg: "bg-gray-500/10" }, research: { label: "Investigacion", color: "text-cyan-500", bg: "bg-cyan-500/10" }, maintenance: { label: "Mantenimiento", color: "text-amber-500", bg: "bg-amber-500/10" } };
function r4({ taskId: l, isOpen: r, onClose: i, onNavigateToProject: c }) { const { data: u, isLoading: m } = Lg(l || 0), h = JN(), [g, b] = R.useState(!1), [y, v] = R.useState(""), [x, j] = R.useState(""); if (!r)
    return null; const k = () => { u && (v(u.notes || ""), j(u.status), b(!0)); }, N = async () => { u && (await h.mutateAsync({ id: u.id, data: { notes: y, status: x || void 0 } }), b(!1)); }, w = async (L) => { u && await h.mutateAsync({ id: u.id, data: { status: L } }); }, A = u ? qd[u.status] : qd.pending, M = u ? xp[u.priority] : xp.medium, q = u ? pp[u.type] : pp.feature, G = (u == null ? void 0 : u.dueDate) && new Date(u.dueDate) < new Date && u.status !== "completed", X = (u == null ? void 0 : u.itemsTotal) || 0, D = (u == null ? void 0 : u.itemsCompleted) || 0, F = X > 0 ? Math.round(D / X * 100) : (u == null ? void 0 : u.progress) || 0; return s.jsxs("div", { className: "drawer-container", children: [s.jsx("div", { className: Z("drawer-overlay", r && "active"), onClick: i }), s.jsx("div", { className: Z("drawer-panel max-w-xl", r && "active"), children: m ? s.jsx("div", { className: "flex items-center justify-center h-full", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : u ? s.jsxs(s.Fragment, { children: [s.jsxs("div", { className: "drawer-header", children: [s.jsxs("div", { className: "flex-1 min-w-0", children: [s.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [s.jsx("span", { className: Z("task-badge", q.bg, q.color), children: q.label }), s.jsx("span", { className: "task-code", children: u.taskCode || `#${u.taskNumber}` })] }), s.jsx("h2", { className: "drawer-title", children: u.title }), u.projectName && s.jsxs("button", { onClick: () => c == null ? void 0 : c(u.projectId), className: "drawer-subtitle flex items-center gap-1 hover:text-primary transition-colors", children: [u.projectCode || u.projectName, s.jsx(qt, { className: "h-3 w-3" })] })] }), s.jsx("button", { onClick: i, className: "drawer-close", children: s.jsx(rs, { className: "h-5 w-5" }) })] }), s.jsxs("div", { className: "drawer-content", children: [s.jsxs("div", { className: "task-detail-section", children: [s.jsxs("div", { className: "task-detail-row", children: [s.jsxs("div", { className: "task-detail-label", children: [s.jsx(Ze, { className: "h-4 w-4" }), "Estado"] }), s.jsx("div", { className: "task-detail-value", children: g ? s.jsx("select", { value: x, onChange: L => j(L.target.value), className: "task-detail-select", children: Object.entries(qd).map(([L, Y]) => s.jsx("option", { value: L, children: Y.label }, L)) }) : s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("span", { className: Z("status-badge", A.bg, A.color), children: A.label }), s.jsxs("div", { className: "task-status-actions", children: [u.status === "pending" && s.jsx("button", { onClick: () => w("in_progress"), className: "status-action-btn in_progress", children: "Iniciar" }), u.status === "in_progress" && s.jsxs(s.Fragment, { children: [s.jsx("button", { onClick: () => w("review"), className: "status-action-btn review", children: "A Revision" }), s.jsx("button", { onClick: () => w("completed"), className: "status-action-btn completed", children: "Completar" })] }), u.status === "review" && s.jsx("button", { onClick: () => w("completed"), className: "status-action-btn completed", children: "Aprobar" })] })] }) })] }), s.jsxs("div", { className: "task-detail-row", children: [s.jsxs("div", { className: "task-detail-label", children: [s.jsx(xg, { className: "h-4 w-4" }), "Prioridad"] }), s.jsx("div", { className: "task-detail-value", children: s.jsx("span", { className: Z("priority-badge", M.bg, M.color), children: M.label }) })] }), u.agentName && s.jsxs("div", { className: "task-detail-row", children: [s.jsxs("div", { className: "task-detail-label", children: [s.jsx(qs, { className: "h-4 w-4" }), "Asignado"] }), s.jsx("div", { className: "task-detail-value", children: s.jsxs("div", { className: "task-assignee-full", children: [s.jsx("div", { className: "task-assignee-avatar-lg", children: s.jsx(qs, { className: "h-4 w-4" }) }), s.jsx("span", { children: u.agentName })] }) })] }), u.dueDate && s.jsxs("div", { className: "task-detail-row", children: [s.jsxs("div", { className: "task-detail-label", children: [s.jsx(ns, { className: "h-4 w-4" }), "Fecha limite"] }), s.jsxs("div", { className: Z("task-detail-value", G && "text-red-500"), children: [ga(u.dueDate), G && s.jsxs("span", { className: "ml-2 text-xs", children: [s.jsx(xt, { className: "h-3 w-3 inline" }), " Vencida"] })] })] }), (u.estimatedHours || u.actualHours) && s.jsxs("div", { className: "task-detail-row", children: [s.jsxs("div", { className: "task-detail-label", children: [s.jsx(Qe, { className: "h-4 w-4" }), "Tiempo"] }), s.jsx("div", { className: "task-detail-value", children: u.actualHours ? s.jsxs("span", { children: [u.actualHours, "h / ", u.estimatedHours, "h est."] }) : s.jsxs("span", { children: [u.estimatedHours, "h estimadas"] }) })] })] }), s.jsxs("div", { className: "task-detail-section", children: [s.jsxs("div", { className: "task-detail-section-title", children: [s.jsx(Nu, { className: "h-4 w-4" }), "Progreso"] }), s.jsxs("div", { className: "task-progress-display", children: [s.jsx("div", { className: "task-progress-bar-lg", children: s.jsx("div", { className: Z("task-progress-fill-lg", F === 100 && "complete"), style: { width: `${F}%` } }) }), s.jsxs("span", { className: "task-progress-label", children: [F, "%"] })] })] }), u.description && s.jsxs("div", { className: "task-detail-section", children: [s.jsxs("div", { className: "task-detail-section-title", children: [s.jsx(hg, { className: "h-4 w-4" }), "Descripcion"] }), s.jsx("p", { className: "task-description-full", children: u.description })] }), s.jsx("div", { className: "task-detail-section", children: s.jsx(ku, { taskId: u.id, editable: u.status !== "completed", showAddForm: u.status !== "completed" }) }), s.jsxs("div", { className: "task-detail-section", children: [s.jsxs("div", { className: "task-detail-section-header", children: [s.jsxs("div", { className: "task-detail-section-title", children: [s.jsx(vg, { className: "h-4 w-4" }), "Notas"] }), !g && s.jsxs("button", { onClick: k, className: "edit-btn", children: [s.jsx(Gj, { className: "h-3 w-3" }), "Editar"] })] }), g ? s.jsxs("div", { className: "task-notes-edit", children: [s.jsx("textarea", { value: y, onChange: L => v(L.target.value), placeholder: "Agregar notas...", className: "task-notes-textarea", rows: 4 }), s.jsxs("div", { className: "task-notes-actions", children: [s.jsx("button", { onClick: () => b(!1), className: "cancel-btn", children: "Cancelar" }), s.jsx("button", { onClick: N, disabled: h.isPending, className: "save-btn", children: h.isPending ? s.jsx(_e, { className: "h-4 w-4 animate-spin" }) : s.jsxs(s.Fragment, { children: [s.jsx(vu, { className: "h-3 w-3" }), "Guardar"] }) })] })] }) : u.notes ? s.jsx("p", { className: "task-notes-content", children: u.notes }) : s.jsx("p", { className: "task-notes-empty", children: "Sin notas" })] }), s.jsxs("div", { className: "task-detail-meta", children: [s.jsxs("span", { children: ["Creada ", Be(u.createdAt)] }), s.jsx("span", { className: "meta-separator", children: "•" }), s.jsxs("span", { children: ["Actualizada ", Be(u.updatedAt)] }), u.completedAt && s.jsxs(s.Fragment, { children: [s.jsx("span", { className: "meta-separator", children: "•" }), s.jsxs("span", { className: "text-green-500", children: ["Completada ", Be(u.completedAt)] })] })] })] })] }) : s.jsx("div", { className: "flex items-center justify-center h-full text-muted-foreground", children: "Tarea no encontrada" }) })] }); }
const i4 = { pending: "gantt-bar-pending", in_progress: "gantt-bar-in_progress", review: "gantt-bar-review", completed: "gantt-bar-completed", blocked: "gantt-bar-blocked" };
function c4({ task: l, startDate: r, endDate: i, onClick: c }) { const u = l.createdAt ? new Date(l.createdAt) : r, m = l.dueDate ? new Date(l.dueDate) : new Date(u.getTime() + 10080 * 60 * 1e3), h = r.getTime(), g = i.getTime(), b = g - h, y = Math.max(u.getTime(), h), v = Math.min(m.getTime(), g), x = (y - h) / b * 100, j = (v - y) / b * 100; if (j <= 0 || x >= 100)
    return s.jsxs("div", { className: "gantt-row", onClick: c, children: [s.jsxs("div", { className: "gantt-row-info", children: [s.jsx("span", { className: "gantt-task-code", children: l.taskCode || `#${l.taskNumber}` }), s.jsx("span", { className: "gantt-task-title", children: l.title })] }), s.jsx("div", { className: "gantt-row-timeline", children: s.jsx("div", { className: "gantt-bar-empty", children: "Fuera del rango visible" }) })] }); const k = l.progress || 0, N = l.dueDate && new Date(l.dueDate) < new Date && l.status !== "completed"; return s.jsxs("div", { className: Z("gantt-row", c && "clickable"), onClick: c, children: [s.jsxs("div", { className: "gantt-row-info", children: [s.jsx("span", { className: "gantt-task-code", children: l.taskCode || `#${l.taskNumber}` }), s.jsx("span", { className: "gantt-task-title", children: l.title }), l.agentName && s.jsxs("span", { className: "gantt-task-agent", children: [s.jsx(qs, { className: "h-3 w-3" }), l.agentName.split("-").pop()] })] }), s.jsx("div", { className: "gantt-row-timeline", children: s.jsxs("div", { className: Z("gantt-bar", i4[l.status], N && "overdue"), style: { left: `${Math.max(0, x)}%`, width: `${Math.min(j, 100 - x)}%` }, children: [s.jsx("div", { className: "gantt-bar-progress", style: { width: `${k}%` } }), s.jsxs("div", { className: "gantt-bar-content", children: [j > 10 && s.jsx("span", { className: "gantt-bar-label", children: l.title.length > 20 ? l.title.substring(0, 20) + "..." : l.title }), N && s.jsx(xt, { className: "h-3 w-3 text-red-500" })] })] }) })] }); }
function o4(l) { const r = new Date(Date.UTC(l.getFullYear(), l.getMonth(), l.getDate())), i = r.getUTCDay() || 7; r.setUTCDate(r.getUTCDate() + 4 - i); const c = new Date(Date.UTC(r.getUTCFullYear(), 0, 1)); return Math.ceil(((r.getTime() - c.getTime()) / 864e5 + 1) / 7); }
function Ud(l) { const r = l.getDate(), i = l.toLocaleDateString("es", { month: "short" }); return `${r} ${i}`; }
function d4({ tasks: l, onTaskClick: r, weeksToShow: i = 8 }) { const [c, u] = R.useState(0), { startDate: m, endDate: h, weeks: g } = R.useMemo(() => { const k = new Date, N = k.getDay(), w = N === 0 ? -6 : 1 - N, A = new Date(k); A.setDate(k.getDate() + w + c * 7), A.setHours(0, 0, 0, 0); const M = new Date(A); M.setDate(A.getDate() + i * 7); const q = []; for (let G = 0; G < i; G++) {
    const X = new Date(A);
    X.setDate(A.getDate() + G * 7), q.push({ start: X, label: Ud(X), weekNum: o4(X) });
} return { startDate: A, endDate: M, weeks: q }; }, [c, i]), b = R.useMemo(() => { const k = new Date, N = m.getTime(), w = h.getTime(), A = k.getTime(); return A < N || A > w ? null : (A - N) / (w - N) * 100; }, [m, h]), y = R.useMemo(() => [...l].sort((k, N) => { const w = k.createdAt ? new Date(k.createdAt).getTime() : 0, A = N.createdAt ? new Date(N.createdAt).getTime() : 0; return w - A; }), [l]), v = () => u(c - i), x = () => u(c + i), j = () => u(0); return s.jsxs("div", { className: "gantt-container", children: [s.jsxs("div", { className: "gantt-nav", children: [s.jsxs("div", { className: "gantt-nav-buttons", children: [s.jsx("button", { onClick: v, className: "gantt-nav-btn", children: s.jsx(mg, { className: "h-4 w-4" }) }), s.jsxs("button", { onClick: j, className: "gantt-nav-btn today", children: [s.jsx(ns, { className: "h-4 w-4" }), "Hoy"] }), s.jsx("button", { onClick: x, className: "gantt-nav-btn", children: s.jsx(Ii, { className: "h-4 w-4" }) })] }), s.jsxs("div", { className: "gantt-date-range", children: [Ud(m), " - ", Ud(h)] })] }), s.jsxs("div", { className: "gantt-header", children: [s.jsx("div", { className: "gantt-header-info", children: "Tarea" }), s.jsx("div", { className: "gantt-header-timeline", children: g.map((k, N) => s.jsxs("div", { className: "gantt-week-column", style: { width: `${100 / i}%` }, children: [s.jsx("div", { className: "gantt-week-label", children: k.label }), s.jsxs("div", { className: "gantt-week-number", children: ["S", k.weekNum] })] }, N)) })] }), s.jsxs("div", { className: "gantt-body", children: [b !== null && s.jsx("div", { className: "gantt-today-marker", style: { left: `calc(200px + ${b}% * (100% - 200px) / 100)` }, children: s.jsx("div", { className: "gantt-today-label", children: "Hoy" }) }), s.jsx("div", { className: "gantt-grid", children: g.map((k, N) => s.jsx("div", { className: "gantt-grid-line", style: { left: `calc(200px + ${N / i * 100}% * (100% - 200px) / 100)` } }, N)) }), y.length > 0 ? y.map(k => s.jsx(c4, { task: k, startDate: m, endDate: h, onClick: () => r == null ? void 0 : r(k) }, k.id)) : s.jsxs("div", { className: "gantt-empty", children: [s.jsx(ns, { className: "h-12 w-12 text-muted-foreground/50" }), s.jsx("p", { children: "No hay tareas para mostrar en el Gantt" })] })] }), s.jsxs("div", { className: "gantt-legend", children: [s.jsxs("div", { className: "gantt-legend-item", children: [s.jsx("div", { className: "gantt-legend-color pending" }), s.jsx("span", { children: "Pendiente" })] }), s.jsxs("div", { className: "gantt-legend-item", children: [s.jsx("div", { className: "gantt-legend-color in_progress" }), s.jsx("span", { children: "En Progreso" })] }), s.jsxs("div", { className: "gantt-legend-item", children: [s.jsx("div", { className: "gantt-legend-color review" }), s.jsx("span", { children: "En Revision" })] }), s.jsxs("div", { className: "gantt-legend-item", children: [s.jsx("div", { className: "gantt-legend-color completed" }), s.jsx("span", { children: "Completada" })] }), s.jsxs("div", { className: "gantt-legend-item", children: [s.jsx("div", { className: "gantt-legend-color blocked" }), s.jsx("span", { children: "Bloqueada" })] })] })] }); }
const Ld = [{ id: "pending", label: "Pendiente", color: "border-t-yellow-500", icon: Qe }, { id: "in_progress", label: "En Progreso", color: "border-t-blue-500", icon: _e }, { id: "review", label: "Revision", color: "border-t-purple-500", icon: Ll }, { id: "completed", label: "Completado", color: "border-t-green-500", icon: Ze }, { id: "blocked", label: "Bloqueado", color: "border-t-red-500", icon: xt }];
function u4({ column: l, tasks: r, onTaskClick: i }) { const c = l.icon; return s.jsxs("div", { className: "kanban-column", children: [s.jsxs("div", { className: Z("kanban-column-header", l.color), children: [s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx(c, { className: Z("h-4 w-4", l.id === "in_progress" && "animate-spin") }), s.jsx("h3", { className: "font-medium", children: l.label })] }), s.jsx("span", { className: "kanban-column-count", children: r.length })] }), s.jsxs("div", { className: "kanban-column-body", children: [r.map(u => s.jsx(n4, { task: u, onClick: () => i(u), compact: !0 }, u.id)), r.length === 0 && s.jsx("div", { className: "kanban-empty", children: s.jsx("span", { children: "Sin tareas" }) })] })] }); }
function m4({ tasks: l, onTaskClick: r }) { return s.jsx("div", { className: "list-table-container", children: s.jsxs("table", { className: "list-table", children: [s.jsx("thead", { children: s.jsxs("tr", { children: [s.jsx("th", { children: "Tarea" }), s.jsx("th", { children: "Proyecto" }), s.jsx("th", { children: "Estado" }), s.jsx("th", { children: "Prioridad" }), s.jsx("th", { children: "Progreso" }), s.jsx("th", { children: "Subtareas" }), s.jsx("th", { children: "Actualizado" })] }) }), s.jsx("tbody", { children: l.map(i => s.jsxs("tr", { onClick: () => r(i), className: "cursor-pointer", children: [s.jsx("td", { children: s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("span", { className: "text-xs font-mono text-muted-foreground", children: i.taskCode || `#${i.taskNumber}` }), s.jsx("span", { className: "font-medium", children: i.title })] }) }), s.jsx("td", { className: "text-muted-foreground", children: i.projectCode || i.projectName }), s.jsx("td", { children: s.jsx("span", { className: Z("status-badge", qg(i.status)), children: i.status.replace("_", " ") }) }), s.jsx("td", { children: s.jsx("span", { className: Z("priority-badge", VN(i.priority)), children: i.priority }) }), s.jsx("td", { children: s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("div", { className: "h-1.5 w-16 rounded-full bg-muted", children: s.jsx("div", { className: "h-full rounded-full bg-primary", style: { width: `${i.progress}%` } }) }), s.jsxs("span", { className: "text-xs", children: [i.progress, "%"] })] }) }), s.jsx("td", { className: "text-center", children: s.jsxs("span", { className: "text-sm", children: [i.itemsCompleted || 0, "/", i.itemsTotal || 0] }) }), s.jsx("td", { className: "text-muted-foreground", children: Be(i.updatedAt) })] }, i.id)) })] }) }); }
function f4() { const l = Lt(), [r, i] = R.useState("kanban"), [c, u] = R.useState(""), [m, h] = R.useState(""), [g, b] = R.useState(""), [y, v] = R.useState(null), { data: x, isLoading: j } = er(), { data: k } = Wn(), N = x == null ? void 0 : x.filter(L => { var He, we; const Y = L.title.toLowerCase().includes(c.toLowerCase()) || ((He = L.taskCode) == null ? void 0 : He.toLowerCase().includes(c.toLowerCase())) || ((we = L.description) == null ? void 0 : we.toLowerCase().includes(c.toLowerCase())), re = !m || L.projectId.toString() === m, Le = !g || L.status === g; return Y && re && Le; }), w = Ld.reduce((L, Y) => (L[Y.id] = (N == null ? void 0 : N.filter(re => re.status === Y.id)) || [], L), {}), A = R.useCallback(L => { v(L.id); }, []), M = R.useCallback(() => { v(null); }, []), q = R.useCallback(L => { l(`/projects/${L}`); }, [l]), G = (x == null ? void 0 : x.length) || 0, X = (x == null ? void 0 : x.filter(L => L.status === "completed").length) || 0, D = (x == null ? void 0 : x.filter(L => L.status === "in_progress").length) || 0, F = (x == null ? void 0 : x.filter(L => L.status === "blocked").length) || 0; return j ? s.jsx("div", { className: "flex h-full items-center justify-center", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : s.jsxs("div", { className: "flex flex-col h-full gap-4", children: [s.jsxs("div", { className: "section-header shrink-0", children: [s.jsxs("div", { children: [s.jsx("h1", { className: "section-title", children: "Tareas" }), s.jsxs("p", { className: "section-subtitle", children: [G, " tareas • ", X, " completadas • ", D, " en progreso", F > 0 && s.jsxs("span", { className: "text-red-500", children: [" • ", F, " bloqueadas"] })] })] }), s.jsx("div", { className: "section-actions", children: s.jsxs("button", { className: "btn-primary", children: [s.jsx(mt, { className: "h-4 w-4" }), "Nueva Tarea"] }) })] }), s.jsxs("div", { className: "grid grid-cols-4 gap-4 shrink-0", children: [s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon tasks", children: s.jsx(Ze, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Total Tareas" }), s.jsx("div", { className: "stat-value", children: G })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon green", children: s.jsx(Ze, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Completadas" }), s.jsx("div", { className: "stat-value", children: X })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon active", children: s.jsx(_e, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "En Progreso" }), s.jsx("div", { className: "stat-value", children: D })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon", style: { background: "rgba(239, 68, 68, 0.1)", color: "#ef4444" }, children: s.jsx(xt, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Bloqueadas" }), s.jsx("div", { className: "stat-value", children: F })] })] })] }), s.jsxs("div", { className: "filters-row shrink-0", children: [s.jsxs("div", { className: "filter-search", children: [s.jsx(Ll, { className: "filter-search-icon" }), s.jsx("input", { type: "text", placeholder: "Buscar tareas...", value: c, onChange: L => u(L.target.value), className: "filter-search-input" })] }), s.jsxs("div", { className: "filter-selects", children: [s.jsxs("div", { className: "filter-select-wrapper", children: [s.jsx(_j, { className: "h-4 w-4 text-muted-foreground" }), s.jsxs("select", { value: m, onChange: L => h(L.target.value), className: "filter-select", children: [s.jsx("option", { value: "", children: "Todos los proyectos" }), k == null ? void 0 : k.map(L => s.jsxs("option", { value: L.id, children: [L.code, " - ", L.name] }, L.id))] })] }), s.jsxs("select", { value: g, onChange: L => b(L.target.value), className: "filter-select", children: [s.jsx("option", { value: "", children: "Todos los estados" }), Ld.map(L => s.jsx("option", { value: L.id, children: L.label }, L.id))] })] }), s.jsxs("div", { className: "view-toggle", children: [s.jsx("button", { onClick: () => i("kanban"), className: Z("view-toggle-btn", r === "kanban" && "active"), title: "Vista Kanban", children: s.jsx($n, { className: "h-4 w-4" }) }), s.jsx("button", { onClick: () => i("list"), className: Z("view-toggle-btn", r === "list" && "active"), title: "Vista Lista", children: s.jsx(Pn, { className: "h-4 w-4" }) }), s.jsx("button", { onClick: () => i("gantt"), className: Z("view-toggle-btn", r === "gantt" && "active"), title: "Vista Gantt", children: s.jsx(ju, { className: "h-4 w-4" }) })] })] }), s.jsxs("div", { className: "flex-1 min-h-0 flex flex-col", children: [r === "kanban" && s.jsx("div", { className: "kanban-container", children: Ld.map(L => s.jsx(u4, { column: L, tasks: w[L.id], onTaskClick: A }, L.id)) }), r === "list" && s.jsx("div", { className: "flex-1 min-h-0 overflow-auto", children: s.jsx(m4, { tasks: N || [], onTaskClick: A }) }), r === "gantt" && s.jsx("div", { className: "flex-1 min-h-0 overflow-auto", children: s.jsx(d4, { tasks: N || [], onTaskClick: A }) })] }), s.jsx(r4, { taskId: y, isOpen: y !== null, onClose: M, onNavigateToProject: q })] }); }
const Kn = { critical: { color: "#ef4444", label: "P0", bg: "rgba(239, 68, 68, 0.2)" }, high: { color: "#f59e0b", label: "P1", bg: "rgba(249, 115, 22, 0.2)" }, medium: { color: "#3b82f6", label: "P2", bg: "rgba(59, 130, 246, 0.2)" }, low: { color: "#64748b", label: "P3", bg: "rgba(100, 116, 139, 0.2)" } };
function h4({ taskId: l, isOpen: r, onClose: i }) { const c = r && l !== null && l > 0, { data: u, isLoading: m } = Lg(c ? l : 0); if (!r)
    return null; const h = u && Kn[u.priority] || Kn.medium; return s.jsx(tr, { isOpen: r, onClose: i, title: "", maxWidth: "max-w-2xl", children: !c || m ? s.jsx("div", { className: "flex items-center justify-center py-12", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : u ? s.jsxs(s.Fragment, { children: [s.jsxs("div", { className: "px-6 py-4 border-b border-border", style: { borderLeft: `4px solid ${h.color}` }, children: [s.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [s.jsx("span", { className: "px-2 py-1 rounded text-[11px] font-bold", style: { background: h.bg, color: h.color }, children: h.label }), s.jsx("span", { className: "px-2 py-1 rounded text-[11px] bg-green-500/10 text-green-500", children: "Completada" }), s.jsx("span", { className: "text-[11px] text-muted-foreground font-mono", children: u.taskCode || `#${u.id}` })] }), s.jsx("h3", { className: "text-lg font-semibold", children: u.title }), u.projectName && s.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [u.projectCode, " - ", u.projectName] })] }), s.jsxs("div", { className: "p-6 space-y-6 max-h-[60vh] overflow-y-auto", children: [u.description && s.jsxs("div", { children: [s.jsx("h4", { className: "text-sm font-medium mb-2", children: "Descripción" }), s.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: u.description })] }), s.jsxs("div", { children: [s.jsx("h4", { className: "text-sm font-medium mb-2", children: "Progreso" }), s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "flex-1 h-2 bg-secondary rounded-full overflow-hidden", children: s.jsx("div", { className: "h-full rounded-full bg-green-500", style: { width: `${u.progress || 100}%` } }) }), s.jsxs("span", { className: "text-sm font-semibold text-green-500", children: [u.progress || 100, "%"] })] })] }), s.jsx("div", { className: "border border-border rounded-lg p-4 bg-secondary/30", children: s.jsx(ku, { taskId: u.id, editable: !1, showAddForm: !1 }) }), s.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [s.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [s.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [s.jsx(qs, { className: "h-3 w-3" }), "Completado por"] }), s.jsx("p", { className: "text-sm font-medium flex items-center gap-1", children: u.agentName ? s.jsxs(s.Fragment, { children: [s.jsx(Us, { className: "h-3 w-3 text-solaria" }), u.agentName] }) : "Sin asignar" })] }), s.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [s.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [s.jsx(Qe, { className: "h-3 w-3" }), "Horas Estimadas"] }), s.jsxs("p", { className: "text-sm font-medium", children: [u.estimatedHours || 0, " horas"] })] }), s.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [s.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [s.jsx(ns, { className: "h-3 w-3 text-green-400" }), "Fecha Creación"] }), s.jsx("p", { className: "text-sm font-medium", children: u.createdAt ? ga(u.createdAt) : "N/A" })] }), s.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [s.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [s.jsx(Ze, { className: "h-3 w-3 text-green-500" }), "Completada"] }), s.jsx("p", { className: "text-sm font-medium text-green-500", children: u.completedAt ? Be(u.completedAt) : Be(u.updatedAt) })] })] })] }), s.jsx("div", { className: "px-6 py-4 border-t border-border flex items-center justify-end", children: s.jsx("button", { onClick: i, className: "px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm", children: "Cerrar" }) })] }) : s.jsx("div", { className: "py-12 text-center text-muted-foreground", children: "Tarea no encontrada" }) }); }
function x4() { const l = Lt(), [r, i] = R.useState(""), [c, u] = R.useState(""), [m, h] = R.useState(null), { data: g, isLoading: b } = er(), { data: y } = Wn(), v = (g == null ? void 0 : g.filter(q => q.status === "completed")) || [], j = [...v.filter(q => { var D, F; const G = q.title.toLowerCase().includes(r.toLowerCase()) || ((D = q.taskCode) == null ? void 0 : D.toLowerCase().includes(r.toLowerCase())) || ((F = q.description) == null ? void 0 : F.toLowerCase().includes(r.toLowerCase())), X = !c || q.projectId.toString() === c; return G && X; })].sort((q, G) => { const X = q.completedAt ? new Date(q.completedAt).getTime() : new Date(q.updatedAt).getTime(); return (G.completedAt ? new Date(G.completedAt).getTime() : new Date(G.updatedAt).getTime()) - X; }), k = R.useCallback(q => { h(q); }, []), N = R.useCallback(() => { h(null); }, []), w = j.reduce((q, G) => { const X = G.projectCode || G.projectName || "Sin Proyecto"; return q[X] || (q[X] = []), q[X].push(G), q; }, {}), A = v.length, M = v.filter(q => { const G = q.completedAt ? new Date(q.completedAt) : new Date(q.updatedAt), X = new Date; return X.setDate(X.getDate() - 7), G >= X; }).length; return b ? s.jsx("div", { className: "flex h-full items-center justify-center", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : s.jsxs("div", { className: "space-y-6", children: [s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx("button", { onClick: () => l(-1), className: "p-2 hover:bg-secondary rounded-lg transition-colors", children: s.jsx(pa, { className: "h-5 w-5" }) }), s.jsxs("div", { children: [s.jsxs("h1", { className: "text-xl font-bold flex items-center gap-2", children: [s.jsx(hs, { className: "h-6 w-6 text-solaria" }), "Tareas Archivadas"] }), s.jsxs("p", { className: "text-sm text-muted-foreground", children: [A, " tareas completadas • ", M, " esta semana"] })] })] }), s.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [s.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex items-center gap-4", children: [s.jsx("div", { className: "h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center", children: s.jsx(Ze, { className: "h-6 w-6 text-green-500" }) }), s.jsxs("div", { children: [s.jsx("div", { className: "text-sm text-muted-foreground", children: "Total Completadas" }), s.jsx("div", { className: "text-2xl font-bold", children: A })] })] }), s.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex items-center gap-4", children: [s.jsx("div", { className: "h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center", children: s.jsx(ns, { className: "h-6 w-6 text-blue-500" }) }), s.jsxs("div", { children: [s.jsx("div", { className: "text-sm text-muted-foreground", children: "Esta Semana" }), s.jsx("div", { className: "text-2xl font-bold", children: M })] })] }), s.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex items-center gap-4", children: [s.jsx("div", { className: "h-12 w-12 rounded-lg bg-solaria/10 flex items-center justify-center", children: s.jsx(hs, { className: "h-6 w-6 text-solaria" }) }), s.jsxs("div", { children: [s.jsx("div", { className: "text-sm text-muted-foreground", children: "Proyectos" }), s.jsx("div", { className: "text-2xl font-bold", children: Object.keys(w).length })] })] })] }), s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsxs("div", { className: "relative flex-1 max-w-md", children: [s.jsx(Ll, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), s.jsx("input", { type: "text", placeholder: "Buscar tareas completadas...", value: r, onChange: q => i(q.target.value), className: "w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-solaria transition-colors" })] }), s.jsxs("select", { value: c, onChange: q => u(q.target.value), className: "px-4 py-2 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-solaria transition-colors min-w-[200px]", children: [s.jsx("option", { value: "", children: "Todos los proyectos" }), y == null ? void 0 : y.map(q => s.jsxs("option", { value: q.id, children: [q.code, " - ", q.name] }, q.id))] })] }), s.jsxs("div", { className: "space-y-6", children: [Object.entries(w).map(([q, G]) => s.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [s.jsxs("div", { className: "p-4 border-b border-border bg-secondary/30", children: [s.jsx("h3", { className: "font-semibold text-lg", children: q }), s.jsxs("p", { className: "text-sm text-muted-foreground", children: [G.length, " tareas completadas"] })] }), s.jsx("div", { className: "divide-y divide-border", children: G.map(X => { const D = Kn[X.priority] || Kn.medium; return s.jsxs("div", { onClick: () => k(X.id), className: "flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer transition-colors", children: [s.jsx("div", { className: "w-1 h-12 rounded-full flex-shrink-0", style: { background: D.color } }), s.jsx(Ze, { className: "h-5 w-5 text-green-500 flex-shrink-0" }), s.jsxs("div", { className: "flex-1 min-w-0", children: [s.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [s.jsx("span", { className: "text-xs font-mono text-solaria font-semibold", children: X.taskCode || `#${X.taskNumber}` }), s.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded font-bold", style: { background: D.bg, color: D.color }, children: D.label })] }), s.jsx("h4", { className: "font-medium truncate", children: X.title }), X.description && s.jsx("p", { className: "text-sm text-muted-foreground line-clamp-1 mt-0.5", children: X.description })] }), s.jsxs("div", { className: "text-right flex-shrink-0", children: [s.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [s.jsx(Qe, { className: "h-3 w-3" }), Be(X.completedAt || X.updatedAt)] }), X.agentName && s.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground mt-1 justify-end", children: [s.jsx(Us, { className: "h-3 w-3 text-solaria" }), X.agentName.replace("SOLARIA-", "")] })] }), s.jsx(Ii, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" })] }, X.id); }) })] }, q)), j.length === 0 && s.jsxs("div", { className: "bg-card border border-border rounded-xl p-12 text-center", children: [s.jsx(hs, { className: "h-12 w-12 text-muted-foreground/50 mx-auto mb-4" }), s.jsx("h3", { className: "text-lg font-medium text-muted-foreground", children: "No hay tareas completadas" }), s.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Las tareas completadas aparecerán aquí" })] })] }), s.jsx(h4, { taskId: m, isOpen: m !== null, onClose: N })] }); }
const p4 = ["completed", "cancelled"], g4 = { completed: { label: "Completado", color: "#16a34a", icon: Ze }, cancelled: { label: "Cancelado", color: "#ef4444", icon: zi } };
function b4() { const l = Lt(), [r, i] = R.useState(""), [c, u] = R.useState(""), { data: m, isLoading: h } = Wn(), { data: g } = er({}), b = (m || []).filter(M => p4.includes(M.status)), v = [...b.filter(M => { var X, D; const q = M.name.toLowerCase().includes(r.toLowerCase()) || ((X = M.code) == null ? void 0 : X.toLowerCase().includes(r.toLowerCase())) || ((D = M.description) == null ? void 0 : D.toLowerCase().includes(r.toLowerCase())), G = !c || M.status === c; return q && G; })].sort((M, q) => { const G = new Date(M.updatedAt || M.createdAt).getTime(); return new Date(q.updatedAt || q.createdAt).getTime() - G; }), x = M => { const q = (g || []).filter(G => G.projectId === M); return { total: q.length, completed: q.filter(G => G.status === "completed").length }; }, j = b.length, k = b.filter(M => M.status === "completed").length, N = b.filter(M => M.status === "cancelled").length, w = b.reduce((M, q) => M + (q.budgetAllocated || 0), 0), A = M => { l(`/projects/${M}`); }; return h ? s.jsx("div", { className: "flex h-full items-center justify-center", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : s.jsxs("div", { className: "space-y-6", children: [s.jsx("div", { className: "section-header", children: s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx("button", { onClick: () => l(-1), className: "p-2 hover:bg-muted rounded-lg transition-colors", children: s.jsx(pa, { className: "h-5 w-5" }) }), s.jsxs("div", { children: [s.jsxs("h1", { className: "section-title flex items-center gap-2", children: [s.jsx(hs, { className: "h-6 w-6 text-primary" }), "Proyectos Archivados"] }), s.jsxs("p", { className: "section-subtitle", children: [j, " proyectos en archivo"] })] })] }) }), s.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon", children: s.jsx(hs, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Total Archivados" }), s.jsx("div", { className: "stat-value", children: j })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon green", children: s.jsx(Ze, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Completados" }), s.jsx("div", { className: "stat-value", children: k })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon red", children: s.jsx(zi, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Cancelados" }), s.jsx("div", { className: "stat-value", children: N })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon orange", children: s.jsx(Ri, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Budget Total" }), s.jsxs("div", { className: "stat-value", children: ["$", w >= 1e3 ? `${(w / 1e3).toFixed(0)}K` : w] })] })] })] }), s.jsxs("div", { className: "filters-row", children: [s.jsxs("div", { className: "filter-search", children: [s.jsx(Ll, { className: "filter-search-icon" }), s.jsx("input", { type: "text", placeholder: "Buscar proyectos archivados...", value: r, onChange: M => i(M.target.value), className: "filter-search-input" })] }), s.jsx("div", { className: "filter-selects", children: s.jsxs("select", { value: c, onChange: M => u(M.target.value), className: "filter-select", children: [s.jsx("option", { value: "", children: "Todos los estados" }), s.jsx("option", { value: "completed", children: "Completados" }), s.jsx("option", { value: "cancelled", children: "Cancelados" })] }) })] }), s.jsxs("div", { className: "space-y-4", children: [v.map(M => { const q = x(M.id), G = g4[M.status], X = (G == null ? void 0 : G.icon) || hs; return s.jsx("div", { className: "glass-card p-4 hover:bg-muted/50 cursor-pointer transition-colors", onClick: () => A(M.id), children: s.jsxs("div", { className: "flex items-start justify-between gap-4", children: [s.jsxs("div", { className: "flex items-start gap-4 min-w-0 flex-1", children: [s.jsx("div", { className: "p-2 rounded-lg bg-muted", children: s.jsx(xa, { className: "h-6 w-6 text-muted-foreground" }) }), s.jsxs("div", { className: "min-w-0 flex-1", children: [s.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [s.jsx("span", { className: "text-xs font-mono bg-muted px-1.5 py-0.5 rounded", children: M.code }), s.jsxs("span", { className: "text-xs px-2 py-0.5 rounded flex items-center gap-1", style: { backgroundColor: `${G == null ? void 0 : G.color}20`, color: G == null ? void 0 : G.color }, children: [s.jsx(X, { className: "h-3 w-3" }), G == null ? void 0 : G.label] })] }), s.jsx("h3", { className: "font-semibold text-lg", children: M.name }), M.description && s.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mt-1", children: M.description }), s.jsxs("div", { className: "flex items-center gap-4 mt-3 text-sm text-muted-foreground", children: [s.jsxs("div", { className: "flex items-center gap-1", children: [s.jsx(Ze, { className: "h-4 w-4 text-green-500" }), s.jsxs("span", { children: [q.completed, "/", q.total, " tareas"] })] }), M.budgetAllocated && s.jsxs("div", { className: "flex items-center gap-1", children: [s.jsx(Ri, { className: "h-4 w-4 text-orange-500" }), s.jsxs("span", { children: ["$", M.budgetAllocated >= 1e3 ? `${(M.budgetAllocated / 1e3).toFixed(0)}K` : M.budgetAllocated] })] }), M.endDate && s.jsxs("div", { className: "flex items-center gap-1", children: [s.jsx(ns, { className: "h-4 w-4 text-blue-500" }), s.jsx("span", { children: ga(M.endDate) })] }), s.jsxs("div", { className: "flex items-center gap-1", children: [s.jsx(Qe, { className: "h-4 w-4" }), s.jsxs("span", { children: ["Archivado: ", ga(M.updatedAt)] })] })] })] })] }), s.jsx("button", { className: "p-2 hover:bg-accent rounded-lg transition-colors shrink-0", onClick: D => { D.stopPropagation(), A(M.id); }, title: "Ver proyecto", children: s.jsx(Oi, { className: "h-5 w-5 text-muted-foreground" }) })] }) }, M.id); }), v.length === 0 && s.jsxs("div", { className: "glass-card p-12 text-center", children: [s.jsx(hs, { className: "h-12 w-12 text-muted-foreground/50 mx-auto mb-4" }), s.jsx("h3", { className: "text-lg font-medium text-muted-foreground", children: "No hay proyectos archivados" }), s.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Los proyectos completados o cancelados apareceran aqui" })] })] })] }); }
function y4() { var L; const l = Lt(), { user: r } = gs(), { theme: i, toggleTheme: c } = tc(), [u, m] = R.useState({ name: (r == null ? void 0 : r.name) || "", email: (r == null ? void 0 : r.email) || "" }), [h, g] = R.useState(!1), [b, y] = R.useState(null), [v, x] = R.useState({ currentPassword: "", newPassword: "", confirmPassword: "" }), [j, k] = R.useState({ current: !1, new: !1, confirm: !1 }), [N, w] = R.useState(!1), [A, M] = R.useState(null), [q, G] = R.useState(null), X = async (Y) => { Y.preventDefault(), g(!0), y(null); try {
    await new Promise(re => setTimeout(re, 1e3)), y({ type: "success", text: "Perfil actualizado correctamente" });
}
catch {
    y({ type: "error", text: "Error al actualizar el perfil" });
}
finally {
    g(!1);
} }, D = async (Y) => { if (Y.preventDefault(), M(null), v.newPassword !== v.confirmPassword) {
    M({ type: "error", text: "Las contrasenas no coinciden" });
    return;
} if (v.newPassword.length < 6) {
    M({ type: "error", text: "La contrasena debe tener al menos 6 caracteres" });
    return;
} w(!0); try {
    await new Promise(re => setTimeout(re, 1e3)), M({ type: "success", text: "Contrasena actualizada correctamente" }), x({ currentPassword: "", newPassword: "", confirmPassword: "" });
}
catch {
    M({ type: "error", text: "Error al actualizar la contrasena" });
}
finally {
    w(!1);
} }, F = Y => { var Le; const re = (Le = Y.target.files) == null ? void 0 : Le[0]; if (re) {
    const He = new FileReader;
    He.onload = we => { var Fe; G((Fe = we.target) == null ? void 0 : Fe.result); }, He.readAsDataURL(re);
} }; return s.jsxs("div", { className: "space-y-6 max-w-4xl mx-auto", children: [s.jsx("div", { className: "section-header", children: s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx("button", { onClick: () => l(-1), className: "p-2 hover:bg-muted rounded-lg transition-colors", children: s.jsx(pa, { className: "h-5 w-5" }) }), s.jsxs("div", { children: [s.jsx("h1", { className: "section-title", children: "Configuracion" }), s.jsx("p", { className: "section-subtitle", children: "Gestiona tu perfil y preferencias" })] })] }) }), s.jsxs("div", { className: "grid gap-6", children: [s.jsxs("div", { className: "glass-card", children: [s.jsx("div", { className: "p-6 border-b border-border", children: s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "p-2 rounded-lg bg-primary/10", children: s.jsx(qs, { className: "h-5 w-5 text-primary" }) }), s.jsxs("div", { children: [s.jsx("h2", { className: "font-semibold", children: "Perfil" }), s.jsx("p", { className: "text-sm text-muted-foreground", children: "Tu informacion personal" })] })] }) }), s.jsxs("form", { onSubmit: X, className: "p-6 space-y-6", children: [s.jsxs("div", { className: "flex items-center gap-6", children: [s.jsxs("div", { className: "relative", children: [s.jsx("div", { className: "h-20 w-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold overflow-hidden", children: q ? s.jsx("img", { src: q, alt: "Avatar", className: "h-full w-full object-cover" }) : ((L = r == null ? void 0 : r.name) == null ? void 0 : L.charAt(0).toUpperCase()) || "U" }), s.jsxs("label", { className: "absolute -bottom-1 -right-1 p-1.5 bg-muted rounded-full cursor-pointer hover:bg-accent transition-colors", children: [s.jsx(Nj, { className: "h-4 w-4" }), s.jsx("input", { type: "file", accept: "image/*", onChange: F, className: "hidden" })] })] }), s.jsxs("div", { children: [s.jsx("h3", { className: "font-medium", children: r == null ? void 0 : r.name }), s.jsx("p", { className: "text-sm text-muted-foreground capitalize", children: r == null ? void 0 : r.role })] })] }), s.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [s.jsxs("div", { className: "space-y-2", children: [s.jsx("label", { className: "text-sm font-medium", children: "Nombre" }), s.jsx("input", { type: "text", value: u.name, onChange: Y => m({ ...u, name: Y.target.value }), className: "w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" })] }), s.jsxs("div", { className: "space-y-2", children: [s.jsx("label", { className: "text-sm font-medium", children: "Email" }), s.jsx("input", { type: "email", value: u.email, onChange: Y => m({ ...u, email: Y.target.value }), className: "w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" })] })] }), b && s.jsx("div", { className: Z("px-4 py-3 rounded-lg text-sm", b.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"), children: b.text }), s.jsx("div", { className: "flex justify-end", children: s.jsx("button", { type: "submit", disabled: h, className: "btn-primary", children: h ? s.jsx(_e, { className: "h-4 w-4 animate-spin" }) : s.jsxs(s.Fragment, { children: [s.jsx(vu, { className: "h-4 w-4" }), "Guardar cambios"] }) }) })] })] }), s.jsxs("div", { className: "glass-card", children: [s.jsx("div", { className: "p-6 border-b border-border", children: s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "p-2 rounded-lg bg-orange-500/10", children: s.jsx(Lj, { className: "h-5 w-5 text-orange-500" }) }), s.jsxs("div", { children: [s.jsx("h2", { className: "font-semibold", children: "Seguridad" }), s.jsx("p", { className: "text-sm text-muted-foreground", children: "Cambia tu contrasena" })] })] }) }), s.jsxs("form", { onSubmit: D, className: "p-6 space-y-4", children: [s.jsxs("div", { className: "space-y-2", children: [s.jsx("label", { className: "text-sm font-medium", children: "Contrasena actual" }), s.jsxs("div", { className: "relative", children: [s.jsx("input", { type: j.current ? "text" : "password", value: v.currentPassword, onChange: Y => x({ ...v, currentPassword: Y.target.value }), className: "w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" }), s.jsx("button", { type: "button", onClick: () => k({ ...j, current: !j.current }), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: j.current ? s.jsx(_d, { className: "h-4 w-4" }) : s.jsx(Oi, { className: "h-4 w-4" }) })] })] }), s.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [s.jsxs("div", { className: "space-y-2", children: [s.jsx("label", { className: "text-sm font-medium", children: "Nueva contrasena" }), s.jsxs("div", { className: "relative", children: [s.jsx("input", { type: j.new ? "text" : "password", value: v.newPassword, onChange: Y => x({ ...v, newPassword: Y.target.value }), className: "w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" }), s.jsx("button", { type: "button", onClick: () => k({ ...j, new: !j.new }), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: j.new ? s.jsx(_d, { className: "h-4 w-4" }) : s.jsx(Oi, { className: "h-4 w-4" }) })] })] }), s.jsxs("div", { className: "space-y-2", children: [s.jsx("label", { className: "text-sm font-medium", children: "Confirmar contrasena" }), s.jsxs("div", { className: "relative", children: [s.jsx("input", { type: j.confirm ? "text" : "password", value: v.confirmPassword, onChange: Y => x({ ...v, confirmPassword: Y.target.value }), className: "w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" }), s.jsx("button", { type: "button", onClick: () => k({ ...j, confirm: !j.confirm }), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: j.confirm ? s.jsx(_d, { className: "h-4 w-4" }) : s.jsx(Oi, { className: "h-4 w-4" }) })] })] })] }), A && s.jsx("div", { className: Z("px-4 py-3 rounded-lg text-sm", A.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"), children: A.text }), s.jsx("div", { className: "flex justify-end", children: s.jsx("button", { type: "submit", disabled: N, className: "btn-primary", children: N ? s.jsx(_e, { className: "h-4 w-4 animate-spin" }) : s.jsxs(s.Fragment, { children: [s.jsx(Ng, { className: "h-4 w-4" }), "Cambiar contrasena"] }) }) })] })] }), s.jsxs("div", { className: "glass-card", children: [s.jsx("div", { className: "p-6 border-b border-border", children: s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "p-2 rounded-lg bg-blue-500/10", children: s.jsx(dg, { className: "h-5 w-5 text-blue-500" }) }), s.jsxs("div", { children: [s.jsx("h2", { className: "font-semibold", children: "Preferencias" }), s.jsx("p", { className: "text-sm text-muted-foreground", children: "Personaliza tu experiencia" })] })] }) }), s.jsxs("div", { className: "p-6 space-y-4", children: [s.jsxs("div", { className: "flex items-center justify-between", children: [s.jsxs("div", { children: [s.jsx("h3", { className: "font-medium", children: "Tema" }), s.jsx("p", { className: "text-sm text-muted-foreground", children: "Selecciona el tema de la interfaz" })] }), s.jsx("button", { onClick: c, className: "flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors", children: i === "dark" ? s.jsxs(s.Fragment, { children: [s.jsx(Wd, { className: "h-4 w-4" }), "Oscuro"] }) : s.jsxs(s.Fragment, { children: [s.jsx(Ui, { className: "h-4 w-4" }), "Claro"] }) })] }), s.jsxs("div", { className: "flex items-center justify-between", children: [s.jsxs("div", { children: [s.jsx("h3", { className: "font-medium", children: "Notificaciones" }), s.jsx("p", { className: "text-sm text-muted-foreground", children: "Recibe alertas en tiempo real" })] }), s.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [s.jsx("input", { type: "checkbox", defaultChecked: !0, className: "sr-only peer" }), s.jsx("div", { className: "w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" })] })] })] })] })] })] }); }
const gp = { active: { label: "Activo", icon: Qa }, busy: { label: "Ocupado", icon: Qe }, inactive: { label: "Inactivo", icon: xt }, error: { label: "Error", icon: xt }, maintenance: { label: "Mantenimiento", icon: Wi } };
function v4({ agent: l }) { const r = gp[l.status] || gp.inactive, i = r.icon; return s.jsxs("div", { className: "rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors", children: [s.jsxs("div", { className: "flex items-start gap-4", children: [s.jsxs("div", { className: "relative", children: [s.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary/10", children: l.avatar ? s.jsx("img", { src: l.avatar, alt: l.name, className: "h-16 w-16 rounded-full object-cover" }) : s.jsx(Us, { className: "h-8 w-8 text-primary" }) }), s.jsx("span", { className: Z("absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-card", qg(l.status)) })] }), s.jsxs("div", { className: "flex-1", children: [s.jsx("h3", { className: "font-semibold text-lg", children: l.name }), s.jsx("p", { className: "text-sm text-muted-foreground", children: l.role }), s.jsxs("div", { className: "mt-2 flex items-center gap-1.5", children: [s.jsx(i, { className: "h-3.5 w-3.5" }), s.jsx("span", { className: "text-sm capitalize", children: r.label })] })] })] }), l.currentTask && s.jsxs("div", { className: "mt-4 rounded-lg bg-muted/50 p-3", children: [s.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Tarea actual" }), s.jsx("p", { className: "text-sm font-medium", children: l.currentTask })] }), l.description && s.jsx("p", { className: "mt-4 text-sm text-muted-foreground line-clamp-2", children: l.description }), s.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-4 border-t border-border pt-4", children: [s.jsxs("div", { className: "text-center", children: [s.jsx("p", { className: "text-2xl font-bold text-green-500", children: l.tasksCompleted || 0 }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Completadas" })] }), s.jsxs("div", { className: "text-center", children: [s.jsx("p", { className: "text-2xl font-bold text-blue-500", children: l.tasksInProgress || 0 }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "En progreso" })] }), s.jsxs("div", { className: "text-center", children: [s.jsx("p", { className: "text-2xl font-bold", children: l.avgTaskTime ? `${l.avgTaskTime.toFixed(1)}h` : "-" }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Tiempo prom." })] })] }), s.jsxs("div", { className: "mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground", children: [s.jsxs("span", { children: ["Última actividad: ", l.lastActivity ? Be(l.lastActivity) : "Nunca"] }), l.lastHeartbeat && s.jsxs("span", { className: "flex items-center gap-1", children: [s.jsx(Qa, { className: "h-3 w-3" }), Be(l.lastHeartbeat)] })] })] }); }
function j4({ agents: l }) { const r = l.filter(m => m.status === "active").length, i = l.filter(m => m.status === "busy").length, c = l.filter(m => m.status === "inactive").length, u = l.filter(m => m.status === "error").length; return s.jsxs("div", { className: "grid gap-4 sm:grid-cols-4", children: [s.jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "rounded-lg bg-green-500/10 p-2", children: s.jsx(Qa, { className: "h-5 w-5 text-green-500" }) }), s.jsxs("div", { children: [s.jsx("p", { className: "text-2xl font-bold", children: r }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Activos" })] })] }) }), s.jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "rounded-lg bg-blue-500/10 p-2", children: s.jsx(Qe, { className: "h-5 w-5 text-blue-500" }) }), s.jsxs("div", { children: [s.jsx("p", { className: "text-2xl font-bold", children: i }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Ocupados" })] })] }) }), s.jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "rounded-lg bg-gray-500/10 p-2", children: s.jsx(Ze, { className: "h-5 w-5 text-gray-500" }) }), s.jsxs("div", { children: [s.jsx("p", { className: "text-2xl font-bold", children: c }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Inactivos" })] })] }) }), s.jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "rounded-lg bg-red-500/10 p-2", children: s.jsx(xt, { className: "h-5 w-5 text-red-500" }) }), s.jsxs("div", { children: [s.jsx("p", { className: "text-2xl font-bold", children: u }), s.jsx("p", { className: "text-xs text-muted-foreground", children: "Con errores" })] })] }) })] }); }
function N4() { const { data: l, isLoading: r } = Hg(); return r ? s.jsx("div", { className: "flex h-full items-center justify-center", children: s.jsx("div", { className: "text-muted-foreground", children: "Cargando agentes..." }) }) : s.jsxs("div", { className: "space-y-6", children: [s.jsxs("div", { children: [s.jsx("h1", { className: "text-2xl font-bold", children: "Agentes IA" }), s.jsxs("p", { className: "text-muted-foreground", children: [(l == null ? void 0 : l.length) || 0, " agentes configurados"] })] }), s.jsx(j4, { agents: l || [] }), s.jsx("div", { className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3", children: l && l.length > 0 ? l.map(i => s.jsx(v4, { agent: i }, i.id)) : s.jsx("div", { className: "col-span-full py-12 text-center text-muted-foreground", children: "No hay agentes configurados" }) })] }); }
const Hd = [{ id: 1, name: "Akademate Platform", description: "Plataforma SaaS para academias con 12 tenants activos pagando suscripcion", icon: "graduation-cap", status: "active", metrics: { mrr: 48e3, arr: 576e3, clients: 12, churn: 2.5, growth: 15, ticketPromedio: 4e3 }, billing: { nextInvoice: "2024-02-01", pendingAmount: 12e3 } }, { id: 2, name: "Inscouter", description: "Plataforma de scouting deportivo con suscripciones activas", icon: "search", status: "growing", metrics: { mrr: 25e3, arr: 3e5, clients: 8, churn: 1.5, growth: 25, ticketPromedio: 3125 } }, { id: 3, name: "NazcaTrade", description: "Sistema de trading algoritmico con licencias enterprise", icon: "chart", status: "active", metrics: { mrr: 85e3, arr: 102e4, clients: 5, churn: 0, growth: 8, ticketPromedio: 17e3 } }, { id: 4, name: "SOLARIA Agency", description: "Servicios de consultoria y desarrollo web", icon: "building", status: "active", metrics: { mrr: 35e3, arr: 42e4, clients: 15, churn: 5, growth: 12, ticketPromedio: 2333 } }], Gg = { "graduation-cap": s.jsx(gu, { className: "h-6 w-6" }), search: s.jsx(Ll, { className: "h-6 w-6" }), chart: s.jsx(wj, { className: "h-6 w-6" }), building: s.jsx(ug, { className: "h-6 w-6" }) };
function Qi(l) { return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(l); }
function w4({ metrics: l }) { const r = l || { mrr: 0, arr: 0, clients: 0, churn: 0, growth: 0 }; return s.jsxs("div", { className: "metrics-row", children: [s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: "MRR" }), s.jsx("div", { className: "metric-value", children: Qi(r.mrr) }), s.jsxs("span", { className: `metric-change ${r.growth > 0 ? "positive" : "negative"}`, children: [r.growth > 0 ? s.jsx(Qn, { className: "h-3 w-3" }) : s.jsx(fu, { className: "h-3 w-3" }), Math.abs(r.growth), "%"] })] }), s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: "ARR" }), s.jsx("div", { className: "metric-value", children: Qi(r.arr) })] }), s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: "Clientes" }), s.jsx("div", { className: "metric-value", children: r.clients })] }), s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: "Churn" }), s.jsxs("div", { className: "metric-value", children: [r.churn, "%"] }), s.jsx("span", { className: `metric-change ${r.churn <= 2 ? "positive" : "negative"}`, children: r.churn <= 2 ? "Saludable" : "Atención" })] })] }); }
function S4({ business: l, onClick: r }) { return s.jsxs("div", { onClick: r, className: "bg-card border border-border rounded-xl p-5 cursor-pointer hover:border-primary transition-all hover:-translate-y-1", children: [s.jsxs("div", { className: "flex items-start justify-between mb-4", children: [s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary", children: Gg[l.icon] || s.jsx(hu, { className: "h-6 w-6" }) }), s.jsxs("div", { children: [s.jsx("h3", { className: "font-semibold text-base", children: l.name }), s.jsx("p", { className: "text-xs text-muted-foreground line-clamp-1", children: l.description })] })] }), s.jsx("span", { className: `business-status ${l.status}`, children: l.status === "active" ? "Activo" : l.status === "growing" ? "Creciendo" : "Pausado" })] }), s.jsx(w4, { metrics: l.metrics })] }); }
function bp() { const { businessId: l } = zl(), r = Lt(), i = gs(k => k.token), [c, u] = R.useState([]), [m, h] = R.useState(!0), [g, b] = R.useState("grid"); R.useEffect(() => { async function k() { try {
    const N = await fetch("/api/businesses", { headers: { Authorization: `Bearer ${i}` } });
    if (N.ok) {
        const w = await N.json();
        u(w.businesses || Hd);
    }
    else
        u(Hd);
}
catch {
    u(Hd);
}
finally {
    h(!1);
} } k(); }, [i]); const y = c.reduce((k, N) => { var w; return k + (((w = N.metrics) == null ? void 0 : w.mrr) || 0); }, 0), v = c.reduce((k, N) => { var w; return k + (((w = N.metrics) == null ? void 0 : w.clients) || 0); }, 0), x = c.length ? Math.round(c.reduce((k, N) => { var w; return k + (((w = N.metrics) == null ? void 0 : w.growth) || 0); }, 0) / c.length) : 0, j = c.filter(k => k.status === "active").length; return m ? s.jsx("div", { className: "flex items-center justify-center h-96", children: s.jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" }) }) : s.jsxs("div", { className: "space-y-6", children: [s.jsxs("div", { className: "section-header", children: [s.jsxs("div", { children: [s.jsx("h1", { className: "section-title", children: "Negocios" }), s.jsxs("p", { className: "section-subtitle", children: [c.length, " negocios operativos"] })] }), s.jsxs("div", { className: "section-actions", children: [s.jsx("button", { onClick: () => b("grid"), className: `p-2 rounded-lg transition-colors ${g === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`, children: s.jsx($n, { className: "h-5 w-5" }) }), s.jsx("button", { onClick: () => b("list"), className: `p-2 rounded-lg transition-colors ${g === "list" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`, children: s.jsx(Pn, { className: "h-5 w-5" }) })] })] }), s.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon orange", children: s.jsx(Ri, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "MRR Total" }), s.jsx("div", { className: "stat-value", children: Qi(y) })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon green", children: s.jsx(Sg, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Clientes Totales" }), s.jsx("div", { className: "stat-value", children: v })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon projects", children: s.jsx(In, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Crecimiento Prom" }), s.jsxs("div", { className: "stat-value", children: [x, "%"] })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon agents", children: s.jsx(Tj, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Negocios Activos" }), s.jsx("div", { className: "stat-value", children: j })] })] })] }), g === "grid" ? s.jsx("div", { className: "grid grid-cols-2 gap-4", children: c.map(k => s.jsx(S4, { business: k, onClick: () => r(`/businesses/${k.id}`) }, k.id)) }) : s.jsx("div", { className: "space-y-3", children: c.map(k => { var N; return s.jsxs("div", { onClick: () => r(`/businesses/${k.id}`), className: "flex items-center gap-4 p-4 bg-card border border-border rounded-xl cursor-pointer hover:border-primary transition-all", children: [s.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary", children: Gg[k.icon] || s.jsx(hu, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "flex-1", children: [s.jsx("h3", { className: "font-semibold", children: k.name }), s.jsx("p", { className: "text-xs text-muted-foreground", children: k.description })] }), s.jsxs("div", { className: "text-right", children: [s.jsx("div", { className: "font-bold text-primary", children: Qi(((N = k.metrics) == null ? void 0 : N.mrr) || 0) }), s.jsx("div", { className: "text-xs text-muted-foreground", children: "MRR" })] }), s.jsx("span", { className: `business-status ${k.status}`, children: k.status === "active" ? "Activo" : k.status === "growing" ? "Creciendo" : "Pausado" })] }, k.id); }) })] }); }
const k4 = { vps: [{ id: 1, name: "SOLARIA Production", provider: "Hetzner", ip: "46.62.222.138", specs: "4 vCPU, 8GB RAM, 160GB SSD", status: "online", services: ["Apache", "PHP 8.4", "MariaDB", "Node.js"] }, { id: 2, name: "NEMESIS Server", provider: "Hostinger", ip: "148.230.118.124", specs: "2 vCPU, 4GB RAM, 100GB SSD", status: "online", services: ["Docker", "PM2", "Redis"] }], nemesis: [{ id: 1, name: "origin-command01", ip: "100.122.193.83", type: "macOS", status: "active" }, { id: 2, name: "Mac-Mini-DRAKE", ip: "100.79.246.5", type: "macOS (M2)", status: "active" }, { id: 3, name: "DRAKE-COMMAND01", ip: "100.64.226.80", type: "Linux", status: "active" }, { id: 4, name: "iPad-Drake-Command", ip: "100.87.12.24", type: "iOS", status: "active" }, { id: 5, name: "iPhone-400i", ip: "100.112.92.21", type: "iOS", status: "active" }], cloudflare: [{ id: 1, domain: "solaria.agency", status: "active", ssl: !0 }, { id: 2, domain: "dfo.solaria.agency", status: "active", ssl: !0 }, { id: 3, domain: "akademate.com", status: "active", ssl: !0 }], sshKeys: [{ id: 1, name: "nemesis_cmdr_key", type: "Ed25519", fingerprint: "SHA256:Gx7..." }, { id: 2, name: "id_ed25519", type: "Ed25519", fingerprint: "SHA256:Hy8..." }, { id: 3, name: "id_solaria_hetzner_prod", type: "Ed25519", fingerprint: "SHA256:Kz9..." }], databases: [{ id: 1, name: "solaria_construction", type: "MariaDB", size: "156 MB" }, { id: 2, name: "akademate_prod", type: "PostgreSQL", size: "2.4 GB" }, { id: 3, name: "cache_redis", type: "Redis", size: "128 MB" }] };
function yp({ status: l }) { const r = { online: { color: "text-green-400 bg-green-400/20", icon: Yn, label: "Online" }, active: { color: "text-green-400 bg-green-400/20", icon: Yn, label: "Activo" }, offline: { color: "text-red-400 bg-red-400/20", icon: zi, label: "Offline" }, inactive: { color: "text-gray-400 bg-gray-400/20", icon: zi, label: "Inactivo" }, maintenance: { color: "text-yellow-400 bg-yellow-400/20", icon: Qe, label: "Mantenimiento" }, pending: { color: "text-yellow-400 bg-yellow-400/20", icon: Qe, label: "Pendiente" } }, { color: i, icon: c, label: u } = r[l]; return s.jsxs("span", { className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${i}`, children: [s.jsx(c, { className: "h-3 w-3" }), u] }); }
function C4({ text: l }) { const [r, i] = R.useState(!1), c = () => { navigator.clipboard.writeText(l), i(!0), setTimeout(() => i(!1), 2e3); }; return s.jsx("button", { onClick: c, className: "p-1.5 rounded hover:bg-accent transition-colors", title: "Copiar", children: r ? s.jsx(Yn, { className: "h-4 w-4 text-green-400" }) : s.jsx(Ml, { className: "h-4 w-4 text-muted-foreground" }) }); }
function A4() { const { vps: l, nemesis: r, cloudflare: i, sshKeys: c, databases: u } = k4, m = l.length, h = l.filter(y => y.status === "online").length, g = r.filter(y => y.status === "active").length, b = i.filter(y => y.status === "active").length; return s.jsxs("div", { className: "space-y-6", children: [s.jsx("div", { className: "section-header", children: s.jsxs("div", { children: [s.jsx("h1", { className: "section-title", children: "Infraestructura" }), s.jsx("p", { className: "section-subtitle", children: "VPS, SSH, Cloudflare y accesos de gestion" })] }) }), s.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon green", children: s.jsx(Bi, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "VPS Online" }), s.jsxs("div", { className: "stat-value", children: [h, "/", m] })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon agents", children: s.jsx(np, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "NEMESIS Activos" }), s.jsx("div", { className: "stat-value", children: g })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon projects", children: s.jsx(sp, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Dominios CF" }), s.jsx("div", { className: "stat-value", children: b })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon orange", children: s.jsx(lp, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Claves SSH" }), s.jsx("div", { className: "stat-value", children: c.length })] })] })] }), s.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [s.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [s.jsx(Bi, { className: "h-4 w-4 text-green-400" }), "SERVIDORES VPS"] }), s.jsx("div", { className: "space-y-4", children: l.map(y => s.jsxs("div", { className: "bg-accent/30 rounded-lg p-4", children: [s.jsxs("div", { className: "flex items-start justify-between mb-3", children: [s.jsxs("div", { children: [s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("h4", { className: "font-medium", children: y.name }), s.jsx("span", { className: "text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded", children: y.provider })] }), s.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: y.specs })] }), s.jsx(yp, { status: y.status })] }), s.jsxs("div", { className: "flex items-center justify-between", children: [s.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [s.jsx(pu, { className: "h-4 w-4 text-muted-foreground" }), s.jsx("code", { className: "font-mono text-primary", children: y.ip }), s.jsx(C4, { text: `ssh root@${y.ip}` })] }), s.jsx("div", { className: "flex gap-1.5", children: y.services.map(v => s.jsx("span", { className: "project-tag blue", children: v }, v)) })] })] }, y.id)) })] }), s.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [s.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [s.jsx(np, { className: "h-4 w-4 text-purple-400" }), "RED NEMESIS (Tailscale VPN)"] }), s.jsx("div", { className: "grid grid-cols-5 gap-3", children: r.map(y => s.jsxs("div", { className: "bg-accent/30 rounded-lg p-3 text-center", children: [s.jsx("div", { className: `w-2 h-2 rounded-full mx-auto mb-2 ${y.status === "active" ? "bg-green-400" : "bg-gray-400"}` }), s.jsx("div", { className: "text-xs font-medium truncate", title: y.name, children: y.name }), s.jsx("div", { className: "text-[10px] text-muted-foreground", children: y.type }), s.jsx("code", { className: "text-[10px] text-primary font-mono", children: y.ip })] }, y.id)) })] }), s.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [s.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [s.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [s.jsx(sp, { className: "h-4 w-4 text-blue-400" }), "CLOUDFLARE DOMINIOS"] }), s.jsx("div", { className: "space-y-2", children: i.map(y => s.jsxs("div", { className: "flex items-center justify-between p-2 bg-accent/30 rounded-lg", children: [s.jsxs("div", { className: "flex items-center gap-2", children: [y.ssl && s.jsx(Ng, { className: "h-4 w-4 text-green-400" }), s.jsx("span", { className: "text-sm font-mono", children: y.domain })] }), s.jsx(yp, { status: y.status })] }, y.id)) })] }), s.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [s.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [s.jsx(lp, { className: "h-4 w-4 text-yellow-400" }), "CLAVES SSH"] }), s.jsx("div", { className: "space-y-2", children: c.map(y => s.jsxs("div", { className: "flex items-center justify-between p-2 bg-accent/30 rounded-lg", children: [s.jsxs("div", { children: [s.jsx("div", { className: "text-sm font-medium", children: y.name }), s.jsx("div", { className: "text-[10px] text-muted-foreground", children: y.fingerprint })] }), s.jsx("span", { className: "project-tag green", children: y.type })] }, y.id)) })] })] }), s.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [s.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [s.jsx(Mj, { className: "h-4 w-4 text-cyan-400" }), "BASES DE DATOS"] }), s.jsx("div", { className: "metrics-row", children: u.map(y => s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: y.type }), s.jsx("div", { className: "metric-value text-base", children: y.name }), s.jsx("span", { className: "metric-change neutral", children: y.size })] }, y.id)) })] }), s.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [s.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [s.jsx(Fj, { className: "h-4 w-4 text-green-400" }), "COMANDOS RAPIDOS"] }), s.jsxs("div", { className: "grid grid-cols-4 gap-2", children: [s.jsxs("button", { onClick: () => { navigator.clipboard.writeText("ssh root@46.62.222.138"), alert("Copiado!"); }, className: "btn-secondary text-sm", children: [s.jsx(Ml, { className: "h-4 w-4" }), "SSH SOLARIA"] }), s.jsxs("button", { onClick: () => { navigator.clipboard.writeText("ssh root@148.230.118.124"), alert("Copiado!"); }, className: "btn-secondary text-sm", children: [s.jsx(Ml, { className: "h-4 w-4" }), "SSH NEMESIS"] }), s.jsxs("button", { onClick: () => { navigator.clipboard.writeText("tailscale status"), alert("Copiado!"); }, className: "btn-secondary text-sm", children: [s.jsx(Ml, { className: "h-4 w-4" }), "Tailscale Status"] }), s.jsxs("button", { onClick: () => { navigator.clipboard.writeText("pm2 status"), alert("Copiado!"); }, className: "btn-secondary text-sm", children: [s.jsx(Ml, { className: "h-4 w-4" }), "PM2 Status"] })] })] })] }); }
function Rt({ title: l, icon: r, children: i }) { return s.jsxs("div", { className: "mb-8", children: [s.jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [s.jsx(r, { className: "h-5 w-5 text-primary" }), l] }), i] }); }
function Bt({ title: l, children: r }) { return s.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [l && s.jsx("h3", { className: "text-sm font-medium mb-4 text-muted-foreground", children: l }), r] }); }
function T4() { return s.jsxs("div", { className: "space-y-6 pb-8", children: [s.jsx("div", { className: "section-header", children: s.jsxs("div", { children: [s.jsx("h1", { className: "section-title", children: "Design Hub" }), s.jsx("p", { className: "section-subtitle", children: "Componentes UI, tipografias y elementos graficos" })] }) }), s.jsxs("div", { className: "space-y-8 overflow-y-auto pr-2", children: [s.jsx(Rt, { title: "Brand Identity", icon: Zj, children: s.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [s.jsx(Bt, { title: "Logo", children: s.jsx("div", { className: "text-center p-5 bg-accent rounded-lg", children: s.jsx("img", { src: "/solaria-logo.png", alt: "SOLARIA Logo", className: "w-20 h-20 mx-auto", onError: l => { l.currentTarget.style.display = "none"; } }) }) }), s.jsx(Bt, { title: "Brand Colors", children: s.jsxs("div", { className: "flex gap-2 flex-wrap", children: [s.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#f6921d]", title: "SOLARIA Orange" }), s.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#d97706]", title: "Orange Dark" }), s.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#0a0a0a]", title: "Background" }), s.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#141414]", title: "Secondary BG" })] }) }), s.jsx(Bt, { title: "Phase Colors", children: s.jsxs("div", { className: "flex gap-2 flex-wrap", children: [s.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#a855f7]", title: "Planning" }), s.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#22d3ee]", title: "Development" }), s.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#14b8a6]", title: "Testing" }), s.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#22c55e]", title: "Production" })] }) })] }) }), s.jsx(Rt, { title: "Typography", icon: $j, children: s.jsxs(Bt, { children: [s.jsxs("div", { className: "mb-4", children: [s.jsx("span", { className: "text-[10px] text-muted-foreground uppercase", children: "Font Family" }), s.jsx("div", { className: "text-2xl font-semibold", children: "Inter" })] }), s.jsxs("div", { className: "space-y-3", children: [s.jsxs("div", { className: "flex items-baseline gap-4", children: [s.jsx("span", { className: "text-3xl font-bold", children: "Heading H1" }), s.jsx("span", { className: "text-xs text-muted-foreground", children: "32px / 700" })] }), s.jsxs("div", { className: "flex items-baseline gap-4", children: [s.jsx("span", { className: "text-2xl font-semibold", children: "Heading H2" }), s.jsx("span", { className: "text-xs text-muted-foreground", children: "24px / 600" })] }), s.jsxs("div", { className: "flex items-baseline gap-4", children: [s.jsx("span", { className: "text-lg font-semibold", children: "Heading H3" }), s.jsx("span", { className: "text-xs text-muted-foreground", children: "18px / 600" })] }), s.jsxs("div", { className: "flex items-baseline gap-4", children: [s.jsx("span", { className: "text-sm font-medium", children: "Body Text" }), s.jsx("span", { className: "text-xs text-muted-foreground", children: "14px / 500" })] }), s.jsxs("div", { className: "flex items-baseline gap-4", children: [s.jsx("span", { className: "text-xs text-muted-foreground", children: "Small / Muted" }), s.jsx("span", { className: "text-xs text-muted-foreground", children: "12px / 400" })] }), s.jsxs("div", { className: "flex items-baseline gap-4", children: [s.jsx("span", { className: "text-[10px] uppercase font-semibold tracking-wide", children: "LABEL UPPERCASE" }), s.jsx("span", { className: "text-xs text-muted-foreground", children: "10px / 600 / Uppercase" })] })] })] }) }), s.jsx(Rt, { title: "Tags / Badges", icon: wg, children: s.jsxs(Bt, { children: [s.jsxs("div", { className: "mb-4", children: [s.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-2", children: "Project Tags (3 Categories)" }), s.jsxs("div", { className: "flex gap-2 flex-wrap", children: [s.jsx("span", { className: "project-tag blue", children: "SaaS" }), s.jsx("span", { className: "project-tag blue", children: "Platform" }), s.jsx("span", { className: "project-tag green", children: "React" }), s.jsx("span", { className: "project-tag green", children: "Node.js" }), s.jsx("span", { className: "project-tag purple", children: "Enterprise" }), s.jsx("span", { className: "project-tag purple", children: "B2B" })] })] }), s.jsxs("div", { children: [s.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-2", children: "Phase Badges" }), s.jsxs("div", { className: "flex gap-2 flex-wrap", children: [s.jsx("span", { className: "progress-phase-badge planning", children: "Planificacion" }), s.jsx("span", { className: "progress-phase-badge development", children: "Desarrollo" }), s.jsx("span", { className: "progress-phase-badge testing", children: "Testing" }), s.jsx("span", { className: "progress-phase-badge production", children: "Produccion" })] })] })] }) }), s.jsx(Rt, { title: "Progress Bars", icon: Sj, children: s.jsxs(Bt, { children: [s.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-3", children: "Segmented Phase Progress" }), s.jsxs("div", { className: "progress-segments mb-2", children: [s.jsx("div", { className: "progress-segment planning" }), s.jsx("div", { className: "progress-segment development" }), s.jsx("div", { className: "progress-segment testing" }), s.jsx("div", { className: "progress-segment inactive" })] }), s.jsxs("div", { className: "progress-labels", children: [s.jsx("span", { className: "progress-label-item completed", children: "Planificacion" }), s.jsx("span", { className: "progress-label-item completed", children: "Desarrollo" }), s.jsx("span", { className: "progress-label-item active", children: "Testing" }), s.jsx("span", { className: "progress-label-item", children: "Produccion" })] })] }) }), s.jsx(Rt, { title: "Mini Trello (Equalizer)", icon: Ej, children: s.jsx(Bt, { children: s.jsxs("div", { className: "mini-trello max-w-md", children: [s.jsxs("div", { className: "trello-column", children: [s.jsx("span", { className: "trello-label", children: "BL" }), s.jsx("div", { className: "trello-slots", children: [...Array(8)].map((l, r) => s.jsx("div", { className: `trello-slot ${r < 3 ? "filled" : ""}`, style: r < 3 ? { background: "#64748b", borderColor: "transparent" } : {} }, r)) }), s.jsx("span", { className: "trello-count", children: "3" })] }), s.jsxs("div", { className: "trello-column", children: [s.jsx("span", { className: "trello-label", children: "TD" }), s.jsx("div", { className: "trello-slots", children: [...Array(8)].map((l, r) => s.jsx("div", { className: `trello-slot ${r < 5 ? "filled" : ""}`, style: r < 5 ? { background: "#f59e0b", borderColor: "transparent" } : {} }, r)) }), s.jsx("span", { className: "trello-count", children: "5" })] }), s.jsxs("div", { className: "trello-column", children: [s.jsx("span", { className: "trello-label", children: "DO" }), s.jsx("div", { className: "trello-slots", children: [...Array(8)].map((l, r) => s.jsx("div", { className: `trello-slot ${r < 2 ? "filled" : ""}`, style: r < 2 ? { background: "#3b82f6", borderColor: "transparent" } : {} }, r)) }), s.jsx("span", { className: "trello-count", children: "2" })] }), s.jsxs("div", { className: "trello-column", children: [s.jsx("span", { className: "trello-label", children: "DN" }), s.jsx("div", { className: "trello-slots", children: [...Array(8)].map((l, r) => s.jsx("div", { className: `trello-slot ${r < 7 ? "filled" : ""}`, style: r < 7 ? { background: "#22c55e", borderColor: "transparent" } : {} }, r)) }), s.jsx("span", { className: "trello-count", children: "7" })] })] }) }) }), s.jsx(Rt, { title: "Buttons", icon: Vj, children: s.jsx(Bt, { children: s.jsxs("div", { className: "flex gap-3 flex-wrap items-center", children: [s.jsx("button", { className: "btn-primary", children: "Primary" }), s.jsx("button", { className: "btn-secondary", children: "Secondary" }), s.jsx("button", { className: "p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors", children: s.jsx(qi, { className: "h-4 w-4" }) }), s.jsxs("button", { className: "flex items-center gap-1.5 px-3 py-1.5 bg-accent rounded text-xs font-medium hover:bg-accent/80 transition-colors", children: [s.jsx(qi, { className: "h-3 w-3" }), " Editar"] }), s.jsx("button", { className: "w-7 h-7 rounded bg-primary/20 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors", children: s.jsx(mt, { className: "h-4 w-4" }) }), s.jsx("button", { className: "px-2 py-1 bg-accent rounded text-xs font-medium hover:bg-accent/80 transition-colors", children: "→ Task" })] }) }) }), s.jsx(Rt, { title: "URL Items", icon: yg, children: s.jsx(Bt, { children: s.jsxs("div", { className: "space-y-2 max-w-xs", children: [s.jsxs("a", { href: "#", className: "url-item", onClick: l => l.preventDefault(), children: [s.jsx("div", { className: "url-item-icon prod", children: s.jsx(pu, { className: "h-4 w-4" }) }), s.jsxs("div", { className: "url-item-text", children: [s.jsx("div", { className: "url-item-label", children: "Prod" }), s.jsx("div", { className: "url-item-url", children: "https://example.com" })] }), s.jsx(qt, { className: "h-3 w-3 text-muted-foreground" })] }), s.jsxs("a", { href: "#", className: "url-item", onClick: l => l.preventDefault(), children: [s.jsx("div", { className: "url-item-icon staging", children: s.jsx(Oj, { className: "h-4 w-4" }) }), s.jsxs("div", { className: "url-item-text", children: [s.jsx("div", { className: "url-item-label", children: "Staging" }), s.jsx("div", { className: "url-item-url", children: "https://staging.example.com" })] }), s.jsx(qt, { className: "h-3 w-3 text-muted-foreground" })] }), s.jsxs("a", { href: "#", className: "url-item", onClick: l => l.preventDefault(), children: [s.jsx("div", { className: "url-item-icon local", children: s.jsx(bg, { className: "h-4 w-4" }) }), s.jsxs("div", { className: "url-item-text", children: [s.jsx("div", { className: "url-item-label", children: "Local" }), s.jsx("div", { className: "url-item-url", children: "http://localhost:3000" })] }), s.jsx(qt, { className: "h-3 w-3 text-muted-foreground" })] }), s.jsxs("a", { href: "#", className: "url-item", onClick: l => l.preventDefault(), children: [s.jsx("div", { className: "url-item-icon repo", children: s.jsx(ap, { className: "h-4 w-4" }) }), s.jsxs("div", { className: "url-item-text", children: [s.jsx("div", { className: "url-item-label", children: "Repo" }), s.jsx("div", { className: "url-item-url", children: "github.com/user/repo" })] }), s.jsx(qt, { className: "h-3 w-3 text-muted-foreground" })] })] }) }) }), s.jsx(Rt, { title: "TODO Items", icon: Yj, children: s.jsx(Bt, { children: s.jsxs("div", { className: "max-w-xs", children: [s.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [s.jsx("input", { type: "text", placeholder: "Escribe una nota...", className: "flex-1 bg-accent border border-border rounded-lg px-3 py-2 text-sm" }), s.jsx("button", { className: "w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center", children: s.jsx(mt, { className: "h-4 w-4" }) })] }), s.jsxs("div", { className: "space-y-2", children: [s.jsxs("div", { className: "flex items-center gap-2 p-2 bg-accent/50 rounded-lg", children: [s.jsx("div", { className: "w-4 h-4 rounded border-2 border-primary" }), s.jsx("span", { className: "flex-1 text-xs", children: "Revisar diseno del dashboard" }), s.jsx("span", { className: "text-[9px] text-muted-foreground", children: "12 dic" }), s.jsx("button", { className: "text-[10px] px-1.5 py-0.5 bg-accent rounded", children: "→" })] }), s.jsxs("div", { className: "flex items-center gap-2 p-2 bg-accent/50 rounded-lg opacity-60", children: [s.jsx("div", { className: "w-4 h-4 rounded bg-primary flex items-center justify-center", children: s.jsx(_l, { className: "h-2.5 w-2.5 text-white" }) }), s.jsx("span", { className: "flex-1 text-xs line-through", children: "Aprobar colores del tema" }), s.jsx("span", { className: "text-[9px] text-muted-foreground", children: "08 dic" })] })] })] }) }) }), s.jsx(Rt, { title: "Activity Items", icon: Qe, children: s.jsx(Bt, { children: s.jsxs("div", { className: "space-y-2 max-w-xs", children: [s.jsxs("div", { className: "flex items-start gap-2 p-2 bg-accent/50 rounded-lg", children: [s.jsx("div", { className: "w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0", children: s.jsx(_l, { className: "h-3 w-3 text-green-400" }) }), s.jsxs("div", { className: "flex-1", children: [s.jsx("div", { className: "text-xs font-medium", children: "Tarea completada" }), s.jsx("div", { className: "text-[9px] text-muted-foreground", children: "Hace 2h" })] })] }), s.jsxs("div", { className: "flex items-start gap-2 p-2 bg-accent/50 rounded-lg", children: [s.jsx("div", { className: "w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0", children: s.jsx(ap, { className: "h-3 w-3 text-blue-400" }) }), s.jsxs("div", { className: "flex-1", children: [s.jsx("div", { className: "text-xs font-medium", children: "Nuevo commit" }), s.jsx("div", { className: "text-[9px] text-muted-foreground", children: "Hace 5h" })] })] })] }) }) }), s.jsx(Rt, { title: "Form Elements", icon: Qj, children: s.jsx(Bt, { children: s.jsxs("div", { className: "grid grid-cols-2 gap-4 max-w-lg", children: [s.jsxs("div", { children: [s.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Input Label" }), s.jsx("input", { type: "text", defaultValue: "Input value", className: "w-full bg-accent border border-border rounded-lg px-3 py-2 text-sm" })] }), s.jsxs("div", { children: [s.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Select" }), s.jsxs("select", { className: "w-full bg-accent border border-border rounded-lg px-3 py-2 text-sm", children: [s.jsx("option", { children: "Option 1" }), s.jsx("option", { children: "Option 2" })] })] }), s.jsxs("div", { className: "col-span-2", children: [s.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Textarea" }), s.jsx("textarea", { defaultValue: "Textarea content", className: "w-full bg-accent border border-border rounded-lg px-3 py-2 text-sm h-16 resize-none" })] })] }) }) }), s.jsx("div", { className: "p-5 rounded-xl border border-dashed border-primary bg-gradient-to-br from-primary/10 to-transparent", children: s.jsxs(Rt, { title: "METRICS ROW (Core Component)", icon: In, children: [s.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Componente central del sistema. Los cambios en CSS Variables se aplican automaticamente a todo el dashboard." }), s.jsxs("div", { className: "mb-6", children: [s.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-2", children: "5 Columns - Full Width" }), s.jsxs("div", { className: "metrics-row", children: [s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: "Seguidores ✓" }), s.jsxs("div", { className: "metric-value", children: ["1K ", s.jsx("span", { className: "secondary", children: "/ 4.2K" })] })] }), s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: "Impresiones" }), s.jsx("div", { className: "metric-value", children: "4.9M" }), s.jsxs("span", { className: "metric-change positive", children: [s.jsx(Qn, { className: "h-3 w-3" }), " 334%"] })] }), s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: "Engagement" }), s.jsx("div", { className: "metric-value", children: "4.2%" }), s.jsxs("span", { className: "metric-change negative", children: [s.jsx(fu, { className: "h-3 w-3" }), " 19%"] })] }), s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: "Engagements" }), s.jsx("div", { className: "metric-value", children: "209.2K" }), s.jsxs("span", { className: "metric-change positive", children: [s.jsx(Qn, { className: "h-3 w-3" }), " 248%"] })] }), s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: "Profile Visits" }), s.jsx("div", { className: "metric-value", children: "18.2K" }), s.jsxs("span", { className: "metric-change positive", children: [s.jsx(Qn, { className: "h-3 w-3" }), " 88%"] })] })] })] }), s.jsxs("div", { children: [s.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-2", children: "Compact Variant (3 Columns)" }), s.jsxs("div", { className: "metrics-row compact max-w-md", children: [s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: "Tareas" }), s.jsx("div", { className: "metric-value", children: "24" })] }), s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: "Completadas" }), s.jsx("div", { className: "metric-value", children: "18" })] }), s.jsxs("div", { className: "metric-cell", children: [s.jsx("div", { className: "metric-label", children: "Progreso" }), s.jsx("div", { className: "metric-value", children: "75%" })] })] })] })] }) }), s.jsx(Rt, { title: "Stat Cards", icon: Qa, children: s.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon projects", children: s.jsx(Xj, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Proyectos Activos" }), s.jsx("div", { className: "stat-value", children: "5" })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon tasks", children: s.jsx(_l, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Tareas Completadas" }), s.jsx("div", { className: "stat-value", children: "127" })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon active", children: s.jsx(Qe, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "En Progreso" }), s.jsx("div", { className: "stat-value", children: "12" })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon agents", children: s.jsx(Qa, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Agentes Activos" }), s.jsx("div", { className: "stat-value", children: "3" })] })] })] }) }), s.jsx(Rt, { title: "CSS Variables Reference", icon: jg, children: s.jsx(Bt, { children: s.jsxs("div", { className: "grid grid-cols-2 gap-6 text-xs font-mono", children: [s.jsxs("div", { children: [s.jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Colors" }), s.jsxs("div", { className: "space-y-1.5", children: [s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("div", { className: "w-4 h-4 rounded bg-[#f6921d]" }), s.jsx("span", { children: "--solaria-orange: #f6921d" })] }), s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("div", { className: "w-4 h-4 rounded bg-[#22c55e]" }), s.jsx("span", { children: "--color-positive: #22c55e" })] }), s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("div", { className: "w-4 h-4 rounded bg-[#ef4444]" }), s.jsx("span", { children: "--color-negative: #ef4444" })] }), s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("div", { className: "w-4 h-4 rounded bg-[#3b82f6]" }), s.jsx("span", { children: "--color-info: #3b82f6" })] }), s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("div", { className: "w-4 h-4 rounded bg-[#f59e0b]" }), s.jsx("span", { children: "--color-warning: #f59e0b" })] })] })] }), s.jsxs("div", { children: [s.jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Metrics" }), s.jsxs("div", { className: "space-y-1.5 text-muted-foreground", children: [s.jsx("div", { children: "--metric-card-radius: 12px" }), s.jsx("div", { children: "--metric-card-padding: 16px" }), s.jsx("div", { children: "--metric-label-size: 11px" }), s.jsx("div", { children: "--metric-value-size: 24px" }), s.jsx("div", { children: "--metric-value-weight: 700" })] })] })] }) }) })] })] }); }
const Qg = R.createContext(null);
function E4() { return R.useContext(Qg); }
function M4({ open: l, onOpenChange: r, children: i }) { const c = R.useRef(null), u = R.useId(); R.useEffect(() => { const g = c.current; if (g)
    return l ? (g.showModal(), document.body.style.overflow = "hidden") : (g.close(), document.body.style.overflow = ""), () => { document.body.style.overflow = ""; }; }, [l]); const m = g => { g.target === c.current && r(!1); }, h = g => { g.key === "Escape" && r(!1); }; return l ? s.jsx(Qg.Provider, { value: { dialogId: u }, children: s.jsx("dialog", { ref: c, onClick: m, onKeyDown: h, "aria-labelledby": `${u}-title`, "aria-describedby": `${u}-description`, className: Z("fixed inset-0 z-50 m-0 h-full w-full max-h-full max-w-full", "bg-black/80 backdrop:bg-transparent", "p-4 md:p-6 lg:p-8", "flex items-center justify-center", "open:animate-in open:fade-in-0", "overflow-y-auto"), children: i }) }) : null; }
function _4({ children: l, className: r }) { return s.jsx("div", { role: "document", className: Z("relative w-full max-w-lg max-h-[90vh]", "bg-background border border-border rounded-lg shadow-lg", "overflow-hidden", "animate-in fade-in-0 zoom-in-95", r), onClick: i => i.stopPropagation(), children: l }); }
function O4({ children: l, className: r }) { return s.jsx("div", { className: Z("flex flex-col space-y-1.5 p-6 pb-4", r), children: l }); }
function D4({ children: l, className: r }) { const i = E4(); return s.jsx("h2", { id: i ? `${i.dialogId}-title` : void 0, className: Z("text-lg font-semibold leading-none tracking-tight", r), children: l }); }
function z4({ onClose: l, label: r = "Cerrar" }) { return s.jsxs("button", { onClick: l, "aria-label": r, className: Z("absolute right-4 top-4 rounded-sm opacity-70", "ring-offset-background transition-opacity", "hover:opacity-100", "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", "disabled:pointer-events-none"), children: [s.jsx(rs, { className: "h-4 w-4", "aria-hidden": "true" }), s.jsx("span", { className: "sr-only", children: r })] }); }
function R4({ children: l, className: r }) { return s.jsx("div", { className: Z("px-6 pb-6 overflow-y-auto", r), children: l }); }
function B4({ children: l, className: r }) { return s.jsx("div", { className: Z("flex justify-end gap-2 p-6 pt-4 border-t border-border", r), children: l }); }
const q4 = { decision: { bg: "hsl(270 60% 50% / 0.1)", color: "hsl(270 60% 50%)" }, learning: { bg: "hsl(217 91% 60% / 0.1)", color: "hsl(217 91% 60%)" }, context: { bg: "hsl(142 71% 45% / 0.1)", color: "hsl(142 71% 45%)" }, requirement: { bg: "hsl(38 92% 50% / 0.1)", color: "hsl(38 92% 50%)" }, bug: { bg: "hsl(0 84% 60% / 0.1)", color: "hsl(0 84% 60%)" }, solution: { bg: "hsl(160 84% 39% / 0.1)", color: "hsl(160 84% 39%)" }, pattern: { bg: "hsl(239 84% 67% / 0.1)", color: "hsl(239 84% 67%)" }, config: { bg: "hsl(25 95% 53% / 0.1)", color: "hsl(25 95% 53%)" }, architecture: { bg: "hsl(263 70% 58% / 0.1)", color: "hsl(263 70% 58%)" }, session: { bg: "hsl(199 89% 48% / 0.1)", color: "hsl(199 89% 48%)" }, protocol: { bg: "hsl(280 65% 60% / 0.1)", color: "hsl(280 65% 60%)" }, "agent-instructions": { bg: "hsl(200 95% 45% / 0.1)", color: "hsl(200 95% 45%)" } }, U4 = { related: "Relacionada", depends_on: "Depende de", contradicts: "Contradice", supersedes: "Reemplaza", child_of: "Derivada de" };
function L4({ memoryId: l, isOpen: r, onClose: i, onTagClick: c }) { const u = r && l !== null && l > 0, { data: m, isLoading: h } = $N(u ? l : 0), { data: g } = t2(u ? l : 0), b = e2(), y = () => { l && b.mutate({ id: l, amount: .1 }); }, v = m ? Math.round(m.importance * 100) : 0, x = v >= 70 ? "high" : v >= 40 ? "medium" : "low"; return s.jsx(M4, { open: r, onOpenChange: i, children: s.jsxs(_4, { className: "max-w-2xl max-h-[85vh] flex flex-col", children: [s.jsx(z4, { onClose: i }), u ? h ? s.jsx("div", { className: "flex items-center justify-center py-12", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : m ? s.jsxs(s.Fragment, { children: [s.jsx(O4, { children: s.jsxs("div", { className: "flex items-start gap-3 pr-8", children: [s.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted", children: s.jsx(Ul, { className: "h-5 w-5 text-muted-foreground" }) }), s.jsxs("div", { className: "flex-1 min-w-0", children: [s.jsx(D4, { className: "text-base", children: m.summary || m.content.substring(0, 80) }), s.jsxs("div", { className: "flex items-center gap-2 mt-1 text-xs text-muted-foreground", children: [s.jsx(Rj, { className: "h-3 w-3" }), s.jsx("span", { className: "font-mono", children: m.id }), s.jsx("span", { className: "text-border", children: "|" }), s.jsx(ns, { className: "h-3 w-3" }), s.jsx("span", { children: ga(m.createdAt) })] })] })] }) }), s.jsxs(R4, { className: "flex-1 overflow-y-auto space-y-4", children: [s.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [s.jsxs("div", { className: Z("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium", x === "high" && "bg-green-500/10 text-green-600", x === "medium" && "bg-blue-500/10 text-blue-600", x === "low" && "bg-muted text-muted-foreground"), children: [s.jsx(In, { className: "h-3 w-3" }), s.jsxs("span", { children: [v, "% importancia"] })] }), s.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [s.jsx(Dl, { className: "h-3 w-3" }), s.jsxs("span", { children: [m.accessCount, " accesos"] })] }), m.lastAccessed && s.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [s.jsx(Qe, { className: "h-3 w-3" }), s.jsxs("span", { children: ["Accedida ", Be(m.lastAccessed)] })] })] }), m.tags && m.tags.length > 0 && s.jsx("div", { className: "flex flex-wrap gap-1.5", children: m.tags.map(j => { const k = q4[j] || { bg: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }; return s.jsx("button", { onClick: () => { c == null || c(j), i(); }, className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium transition-opacity hover:opacity-80", style: { backgroundColor: k.bg, color: k.color }, children: j }, j); }) }), s.jsx("div", { className: "rounded-lg border border-border bg-muted/30 p-4", children: s.jsx("pre", { className: "whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed", children: m.content }) }), g && g.length > 0 && s.jsxs("div", { className: "space-y-2", children: [s.jsxs("h4", { className: "text-sm font-medium flex items-center gap-2", children: [s.jsx(bu, { className: "h-4 w-4" }), "Memorias Relacionadas"] }), s.jsx("div", { className: "space-y-2", children: g.map(j => { var k, N, w, A; return s.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors", children: [s.jsxs("div", { className: "flex-1 min-w-0", children: [s.jsx("div", { className: "text-sm font-medium truncate", children: ((k = j.relatedMemory) == null ? void 0 : k.summary) || ((w = (N = j.relatedMemory) == null ? void 0 : N.content) == null ? void 0 : w.substring(0, 50)) }), s.jsxs("div", { className: "text-xs text-muted-foreground", children: [U4[j.relationshipType] || j.relationshipType, " ", "· #", (A = j.relatedMemory) == null ? void 0 : A.id] })] }), s.jsx(qt, { className: "h-4 w-4 text-muted-foreground flex-shrink-0 ml-2" })] }, j.id); }) })] })] }), s.jsxs(B4, { children: [s.jsxs("button", { onClick: y, disabled: b.isPending, className: Z("inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium", "bg-primary text-primary-foreground", "hover:bg-primary/90 transition-colors", "disabled:opacity-50 disabled:cursor-not-allowed"), children: [b.isPending ? s.jsx(_e, { className: "h-4 w-4 animate-spin" }) : s.jsx(Aj, { className: "h-4 w-4" }), "Boost +10%"] }), s.jsx("button", { onClick: i, className: Z("px-4 py-2 rounded-md text-sm font-medium", "border border-border bg-background", "hover:bg-muted transition-colors"), children: "Cerrar" })] })] }) : s.jsx("div", { className: "py-12 text-center text-muted-foreground", children: "Memoria no encontrada" }) : s.jsx("div", { className: "flex items-center justify-center py-12", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-muted-foreground" }) })] }) }); }
const Cu = { decision: { bg: "rgba(168, 85, 247, 0.15)", color: "#a855f7" }, learning: { bg: "rgba(59, 130, 246, 0.15)", color: "#3b82f6" }, context: { bg: "rgba(34, 197, 94, 0.15)", color: "#22c55e" }, requirement: { bg: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" }, bug: { bg: "rgba(239, 68, 68, 0.15)", color: "#ef4444" }, solution: { bg: "rgba(16, 185, 129, 0.15)", color: "#10b981" }, pattern: { bg: "rgba(99, 102, 241, 0.15)", color: "#6366f1" }, config: { bg: "rgba(249, 115, 22, 0.15)", color: "#f97316" }, architecture: { bg: "rgba(139, 92, 246, 0.15)", color: "#8b5cf6" }, session: { bg: "rgba(14, 165, 233, 0.15)", color: "#0ea5e9" } };
function H4({ memory: l, onClick: r }) { const i = Math.round(l.importance * 100), c = l.tags || [], u = i >= 70 ? "high" : i >= 40 ? "medium" : "low"; return s.jsxs("div", { onClick: r, className: "memory-card", children: [s.jsxs("div", { className: "memory-header", children: [s.jsx("div", { className: "memory-icon", children: s.jsx(Ul, { className: "h-4 w-4" }) }), s.jsxs("div", { className: "memory-title-group", children: [s.jsx("h3", { className: "memory-title", children: l.summary || l.content.substring(0, 60) }), s.jsxs("span", { className: "memory-id", children: ["#", l.id] })] }), s.jsxs("div", { className: Z("memory-importance", u), children: [s.jsx(In, { className: "h-3 w-3" }), s.jsxs("span", { children: [i, "%"] })] })] }), s.jsx("p", { className: "memory-content", children: l.content }), c.length > 0 && s.jsx("div", { className: "memory-tags", children: c.map(m => { const h = Cu[m] || { bg: "rgba(100, 116, 139, 0.15)", color: "#64748b" }; return s.jsx("span", { className: "memory-tag", style: { backgroundColor: h.bg, color: h.color }, children: m }, m); }) }), s.jsxs("div", { className: "memory-stats", children: [s.jsxs("div", { className: "memory-stat", children: [s.jsx(Dl, { className: "h-3 w-3" }), s.jsxs("span", { children: [l.accessCount, " accesos"] })] }), l.lastAccessed && s.jsxs("div", { className: "memory-stat", children: [s.jsx(Qe, { className: "h-3 w-3" }), s.jsx("span", { children: Be(l.lastAccessed) })] }), s.jsx("div", { className: "memory-stat created", children: Be(l.createdAt) })] })] }); }
function V4({ memory: l, onClick: r }) { const i = Math.round(l.importance * 100), c = l.tags || []; return s.jsxs("tr", { onClick: r, className: "memory-row", children: [s.jsx("td", { children: s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "memory-icon-sm", children: s.jsx(Ul, { className: "h-4 w-4" }) }), s.jsxs("div", { children: [s.jsx("div", { className: "memory-title-sm", children: l.summary || l.content.substring(0, 50) }), s.jsxs("div", { className: "memory-id-sm", children: ["#", l.id] })] })] }) }), s.jsx("td", { children: s.jsx("div", { className: "flex flex-wrap gap-1", children: c.slice(0, 3).map(u => { const m = Cu[u] || { bg: "rgba(100, 116, 139, 0.15)", color: "#64748b" }; return s.jsx("span", { className: "memory-tag-sm", style: { backgroundColor: m.bg, color: m.color }, children: u }, u); }) }) }), s.jsx("td", { className: "text-center", children: s.jsxs("span", { className: "stat-value-sm", children: [i, "%"] }) }), s.jsx("td", { className: "text-center", children: s.jsx("span", { className: "stat-value-sm", children: l.accessCount }) }), s.jsx("td", { className: "text-center text-muted-foreground text-sm", children: Be(l.createdAt) })] }); }
function G4() { const [l, r] = R.useState(""), [i, c] = R.useState([]), [u, m] = R.useState("grid"), [h, g] = R.useState(null), [b, y] = R.useState(!1), { data: v, isLoading: x, isError: j, error: k } = FN({ tags: i }), N = L => { g(L), y(!0); }, w = () => { y(!1), g(null); }, A = L => { i.includes(L) || c([...i, L]); }, { data: M } = WN(), { data: q } = IN(), { data: G } = PN(l, i), X = l.length > 2 ? G : v, D = (X == null ? void 0 : X.length) || 0, F = L => { c(Y => Y.includes(L) ? Y.filter(re => re !== L) : [...Y, L]); }; return x ? s.jsx("div", { className: "flex h-full items-center justify-center", children: s.jsx(_e, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : j ? s.jsxs("div", { className: "flex h-full flex-col items-center justify-center gap-4", children: [s.jsx(xt, { className: "h-12 w-12 text-destructive" }), s.jsx("p", { className: "text-muted-foreground", children: "Error al cargar memorias" }), s.jsx("pre", { className: "text-xs text-destructive", children: String(k) })] }) : s.jsxs("div", { className: "space-y-6", children: [s.jsxs("div", { className: "section-header", children: [s.jsxs("div", { children: [s.jsx("h1", { className: "section-title", children: "Memorias" }), s.jsx("p", { className: "section-subtitle", children: "Sistema de memoria persistente para agentes IA" })] }), s.jsx("div", { className: "section-actions", children: s.jsxs("div", { className: "view-toggle", children: [s.jsx("button", { className: Z("view-toggle-btn", u === "grid" && "active"), onClick: () => m("grid"), title: "Vista Grid", children: s.jsx($n, { className: "h-4 w-4" }) }), s.jsx("button", { className: Z("view-toggle-btn", u === "list" && "active"), onClick: () => m("list"), title: "Vista Lista", children: s.jsx(Pn, { className: "h-4 w-4" }) })] }) })] }), s.jsxs("div", { className: "dashboard-stats-row", children: [s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon projects", children: s.jsx(Ul, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Total Memorias" }), s.jsx("div", { className: "stat-value", children: zd((M == null ? void 0 : M.totalMemories) || 0) })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon green", children: s.jsx(In, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Importancia Prom." }), s.jsxs("div", { className: "stat-value", children: [(((M == null ? void 0 : M.avgImportance) || 0) * 100).toFixed(0), "%"] })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon active", children: s.jsx(Dl, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Accesos Totales" }), s.jsx("div", { className: "stat-value", children: zd((M == null ? void 0 : M.totalAccesses) || 0) })] })] }), s.jsxs("div", { className: "stat-card", children: [s.jsx("div", { className: "stat-icon agents", children: s.jsx(bu, { className: "h-5 w-5" }) }), s.jsxs("div", { className: "stat-content", children: [s.jsx("div", { className: "stat-label", children: "Proyectos" }), s.jsx("div", { className: "stat-value", children: zd((M == null ? void 0 : M.projectsWithMemories) || 0) })] })] })] }), s.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [s.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [s.jsxs("div", { className: "relative flex-1", children: [s.jsx(Ll, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), s.jsx("input", { type: "text", placeholder: "Buscar en memorias (min. 3 caracteres)...", value: l, onChange: L => r(L.target.value), className: "w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" })] }), s.jsxs("span", { className: "text-sm text-muted-foreground", children: [D, " memorias"] })] }), q && q.length > 0 && s.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [s.jsx(Nu, { className: "h-4 w-4 text-muted-foreground" }), q.map(L => { const Y = Cu[L.name] || { bg: "rgba(100, 116, 139, 0.15)", color: "#64748b" }, re = i.includes(L.name); return s.jsxs("button", { onClick: () => F(L.name), className: Z("memory-tag-filter", re && "selected"), style: re ? { backgroundColor: Y.color, color: "#fff" } : { backgroundColor: Y.bg, color: Y.color }, children: [L.name, " (", L.usageCount, ")"] }, L.name); })] })] }), u === "grid" ? s.jsx("div", { className: "memories-grid", children: X && X.length > 0 ? X.map(L => s.jsx(H4, { memory: L, onClick: () => N(L.id) }, L.id)) : s.jsxs("div", { className: "col-span-full py-12 text-center text-muted-foreground", children: [s.jsx(xt, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), s.jsx("p", { children: l.length > 2 ? "No se encontraron memorias con ese criterio" : "No hay memorias registradas" })] }) }) : s.jsx("div", { className: "bg-card border border-border rounded-xl", style: { padding: 0, overflow: "hidden" }, children: s.jsxs("table", { className: "list-table", children: [s.jsx("thead", { children: s.jsxs("tr", { children: [s.jsx("th", { style: { width: "35%" }, children: "Memoria" }), s.jsx("th", { style: { width: "25%" }, children: "Tags" }), s.jsx("th", { style: { width: "12%", textAlign: "center" }, children: "Importancia" }), s.jsx("th", { style: { width: "12%", textAlign: "center" }, children: "Accesos" }), s.jsx("th", { style: { width: "16%", textAlign: "center" }, children: "Creada" })] }) }), s.jsx("tbody", { children: X && X.length > 0 ? X.map(L => s.jsx(V4, { memory: L, onClick: () => N(L.id) }, L.id)) : s.jsx("tr", { children: s.jsx("td", { colSpan: 5, children: s.jsxs("div", { className: "py-12 text-center text-muted-foreground", children: [s.jsx(xt, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), s.jsx("p", { children: l.length > 2 ? "No se encontraron memorias" : "No hay memorias" })] }) }) }) })] }) }), s.jsx(L4, { memoryId: h, isOpen: b, onClose: w, onTagClick: A })] }); }
function Kg() { return s.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: s.jsxs("div", { className: "flex flex-col items-center gap-4", children: [s.jsx("div", { className: "h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" }), s.jsx("p", { className: "text-muted-foreground", children: "Verificando sesion..." })] }) }); }
function Q4({ children: l }) { const { isAuthenticated: r, _hasHydrated: i } = gs(); return i ? r ? s.jsx(s.Fragment, { children: l }) : s.jsx(vp, { to: "/login", replace: !0 }) : s.jsx(Kg, {}); }
function K4() { const { isChecking: l } = xj(); return l ? s.jsx(Kg, {}) : s.jsxs(Ny, { children: [s.jsx(st, { path: "/login", element: s.jsx(v2, {}) }), s.jsxs(st, { path: "/", element: s.jsx(Q4, { children: s.jsx(y2, {}) }), children: [s.jsx(st, { index: !0, element: s.jsx(vp, { to: "/dashboard", replace: !0 }) }), s.jsx(st, { path: "dashboard", element: s.jsx(S2, {}) }), s.jsx(st, { path: "projects", element: s.jsx(E2, {}) }), s.jsx(st, { path: "projects/archived", element: s.jsx(b4, {}) }), s.jsx(st, { path: "projects/:id", element: s.jsx(G2, {}) }), s.jsx(st, { path: "projects/:id/tasks", element: s.jsx(I2, {}) }), s.jsx(st, { path: "projects/:id/links", element: s.jsx(W2, {}) }), s.jsx(st, { path: "projects/:id/settings", element: s.jsx(l4, {}) }), s.jsx(st, { path: "tasks", element: s.jsx(f4, {}) }), s.jsx(st, { path: "tasks/archived", element: s.jsx(x4, {}) }), s.jsx(st, { path: "agents", element: s.jsx(N4, {}) }), s.jsx(st, { path: "businesses", element: s.jsx(bp, {}) }), s.jsx(st, { path: "businesses/:businessId", element: s.jsx(bp, {}) }), s.jsx(st, { path: "infrastructure", element: s.jsx(A4, {}) }), s.jsx(st, { path: "design-hub", element: s.jsx(T4, {}) }), s.jsx(st, { path: "memories", element: s.jsx(G4, {}) }), s.jsx(st, { path: "settings", element: s.jsx(y4, {}) })] })] }); }
const Y4 = new hy({ defaultOptions: { queries: { staleTime: 1e3 * 60 * 5, refetchOnWindowFocus: !1, retry: 1 } } });
My.createRoot(document.getElementById("root")).render(s.jsx(Ln.StrictMode, { children: s.jsx(xy, { client: Y4, children: s.jsx(_v, { children: s.jsx(zv, { children: s.jsx(wy, { children: s.jsx(K4, {}) }) }) }) }) }));
//# sourceMappingURL=index-D7g14T3M.js.map
//# sourceMappingURL=index-D7g14T3M.js.map