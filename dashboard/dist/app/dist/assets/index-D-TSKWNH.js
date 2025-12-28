import { u as Gt, j as t, a as Ke, b as ss, Q as _y, c as zy } from "./query-CtOOYOp0.js";
import { a as Ry, b as By, g as qy, R as Xn, r as z, N as Ly, u as yt, c as Uy, O as Hy, d as Fa, e as Vy, f as $e, h as Bp, B as Gy } from "./vendor-CQ5bjC1m.js";
import { c as Qy } from "./charts-CWKQEDB1.js";
(function () { const n = document.createElement("link").relList; if (n && n.supports && n.supports("modulepreload"))
    return; for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
    c(u); new MutationObserver(u => { for (const m of u)
    if (m.type === "childList")
        for (const f of m.addedNodes)
            f.tagName === "LINK" && f.rel === "modulepreload" && c(f); }).observe(document, { childList: !0, subtree: !0 }); function i(u) { const m = {}; return u.integrity && (m.integrity = u.integrity), u.referrerPolicy && (m.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? m.credentials = "include" : u.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin", m; } function c(u) { if (u.ep)
    return; u.ep = !0; const m = i(u); fetch(u.href, m); } })();
var Ed = { exports: {} }, Gn = {}, Dd = { exports: {} }, Md = {}; /**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kx;
function Ky() { return Kx || (Kx = 1, (function (l) { function n(H, P) { var F = H.length; H.push(P); e: for (; 0 < F;) {
    var Ce = F - 1 >>> 1, ce = H[Ce];
    if (0 < u(ce, P))
        H[Ce] = P, H[F] = ce, F = Ce;
    else
        break e;
} } function i(H) { return H.length === 0 ? null : H[0]; } function c(H) { if (H.length === 0)
    return null; var P = H[0], F = H.pop(); if (F !== P) {
    H[0] = F;
    e: for (var Ce = 0, ce = H.length, ke = ce >>> 1; Ce < ke;) {
        var be = 2 * (Ce + 1) - 1, ne = H[be], me = be + 1, Ze = H[me];
        if (0 > u(ne, F))
            me < ce && 0 > u(Ze, ne) ? (H[Ce] = Ze, H[me] = F, Ce = me) : (H[Ce] = ne, H[be] = F, Ce = be);
        else if (me < ce && 0 > u(Ze, F))
            H[Ce] = Ze, H[me] = F, Ce = me;
        else
            break e;
    }
} return P; } function u(H, P) { var F = H.sortIndex - P.sortIndex; return F !== 0 ? F : H.id - P.id; } if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var m = performance;
    l.unstable_now = function () { return m.now(); };
}
else {
    var f = Date, x = f.now();
    l.unstable_now = function () { return f.now() - x; };
} var b = [], N = [], v = 1, p = null, j = 3, k = !1, w = !1, S = !1, E = !1, O = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null; function Z(H) { for (var P = i(N); P !== null;) {
    if (P.callback === null)
        c(N);
    else if (P.startTime <= H)
        c(N), P.sortIndex = P.expirationTime, n(b, P);
    else
        break;
    P = i(N);
} } function A(H) { if (S = !1, Z(H), !w)
    if (i(b) !== null)
        w = !0, L || (L = !0, I());
    else {
        var P = i(N);
        P !== null && ue(A, P.startTime - H);
    } } var L = !1, y = -1, M = 5, J = -1; function de() { return E ? !0 : !(l.unstable_now() - J < M); } function fe() { if (E = !1, L) {
    var H = l.unstable_now();
    J = H;
    var P = !0;
    try {
        e: {
            w = !1, S && (S = !1, D(y), y = -1), k = !0;
            var F = j;
            try {
                t: {
                    for (Z(H), p = i(b); p !== null && !(p.expirationTime > H && de());) {
                        var Ce = p.callback;
                        if (typeof Ce == "function") {
                            p.callback = null, j = p.priorityLevel;
                            var ce = Ce(p.expirationTime <= H);
                            if (H = l.unstable_now(), typeof ce == "function") {
                                p.callback = ce, Z(H), P = !0;
                                break t;
                            }
                            p === i(b) && c(b), Z(H);
                        }
                        else
                            c(b);
                        p = i(b);
                    }
                    if (p !== null)
                        P = !0;
                    else {
                        var ke = i(N);
                        ke !== null && ue(A, ke.startTime - H), P = !1;
                    }
                }
                break e;
            }
            finally {
                p = null, j = F, k = !1;
            }
            P = void 0;
        }
    }
    finally {
        P ? I() : L = !1;
    }
} } var I; if (typeof q == "function")
    I = function () { q(fe); };
else if (typeof MessageChannel < "u") {
    var le = new MessageChannel, ee = le.port2;
    le.port1.onmessage = fe, I = function () { ee.postMessage(null); };
}
else
    I = function () { O(fe, 0); }; function ue(H, P) { y = O(function () { H(l.unstable_now()); }, P); } l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function (H) { H.callback = null; }, l.unstable_forceFrameRate = function (H) { 0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < H ? Math.floor(1e3 / H) : 5; }, l.unstable_getCurrentPriorityLevel = function () { return j; }, l.unstable_next = function (H) { switch (j) {
    case 1:
    case 2:
    case 3:
        var P = 3;
        break;
    default: P = j;
} var F = j; j = P; try {
    return H();
}
finally {
    j = F;
} }, l.unstable_requestPaint = function () { E = !0; }, l.unstable_runWithPriority = function (H, P) { switch (H) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: H = 3;
} var F = j; j = H; try {
    return P();
}
finally {
    j = F;
} }, l.unstable_scheduleCallback = function (H, P, F) { var Ce = l.unstable_now(); switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? Ce + F : Ce) : F = Ce, H) {
    case 1:
        var ce = -1;
        break;
    case 2:
        ce = 250;
        break;
    case 5:
        ce = 1073741823;
        break;
    case 4:
        ce = 1e4;
        break;
    default: ce = 5e3;
} return ce = F + ce, H = { id: v++, callback: P, priorityLevel: H, startTime: F, expirationTime: ce, sortIndex: -1 }, F > Ce ? (H.sortIndex = F, n(N, H), i(b) === null && H === i(N) && (S ? (D(y), y = -1) : S = !0, ue(A, F - Ce))) : (H.sortIndex = ce, n(b, H), w || k || (w = !0, L || (L = !0, I()))), H; }, l.unstable_shouldYield = de, l.unstable_wrapCallback = function (H) { var P = j; return function () { var F = j; j = P; try {
    return H.apply(this, arguments);
}
finally {
    j = F;
} }; }; })(Md)), Md; }
var Yx;
function Yy() { return Yx || (Yx = 1, Dd.exports = Ky()), Dd.exports; } /**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Xx;
function Xy() {
    if (Xx)
        return Gn;
    Xx = 1;
    var l = Yy(), n = Ry(), i = By();
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
    function f(e) { if (e.tag === 13) {
        var s = e.memoizedState;
        if (s === null && (e = e.alternate, e !== null && (s = e.memoizedState)), s !== null)
            return s.dehydrated;
    } return null; }
    function x(e) { if (e.tag === 31) {
        var s = e.memoizedState;
        if (s === null && (e = e.alternate, e !== null && (s = e.memoizedState)), s !== null)
            return s.dehydrated;
    } return null; }
    function b(e) { if (m(e) !== e)
        throw Error(c(188)); }
    function N(e) { var s = e.alternate; if (!s) {
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
                    return b(o), e;
                if (d === r)
                    return b(o), s;
                d = d.sibling;
            }
            throw Error(c(188));
        }
        if (a.return !== r.return)
            a = o, r = d;
        else {
            for (var h = !1, g = o.child; g;) {
                if (g === a) {
                    h = !0, a = o, r = d;
                    break;
                }
                if (g === r) {
                    h = !0, r = o, a = d;
                    break;
                }
                g = g.sibling;
            }
            if (!h) {
                for (g = d.child; g;) {
                    if (g === a) {
                        h = !0, a = d, r = o;
                        break;
                    }
                    if (g === r) {
                        h = !0, r = d, a = o;
                        break;
                    }
                    g = g.sibling;
                }
                if (!h)
                    throw Error(c(189));
            }
        }
        if (a.alternate !== r)
            throw Error(c(190));
    } if (a.tag !== 3)
        throw Error(c(188)); return a.stateNode.current === a ? e : s; }
    function v(e) { var s = e.tag; if (s === 5 || s === 26 || s === 27 || s === 6)
        return e; for (e = e.child; e !== null;) {
        if (s = v(e), s !== null)
            return s;
        e = e.sibling;
    } return null; }
    var p = Object.assign, j = Symbol.for("react.element"), k = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), q = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), de = Symbol.for("react.memo_cache_sentinel"), fe = Symbol.iterator;
    function I(e) { return e === null || typeof e != "object" ? null : (e = fe && e[fe] || e["@@iterator"], typeof e == "function" ? e : null); }
    var le = Symbol.for("react.client.reference");
    function ee(e) { if (e == null)
        return null; if (typeof e == "function")
        return e.$$typeof === le ? null : e.displayName || e.name || null; if (typeof e == "string")
        return e; switch (e) {
        case S: return "Fragment";
        case O: return "Profiler";
        case E: return "StrictMode";
        case A: return "Suspense";
        case L: return "SuspenseList";
        case J: return "Activity";
    } if (typeof e == "object")
        switch (e.$$typeof) {
            case w: return "Portal";
            case q: return e.displayName || "Context";
            case D: return (e._context.displayName || "Context") + ".Consumer";
            case Z:
                var s = e.render;
                return e = e.displayName, e || (e = s.displayName || s.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case y: return s = e.displayName || null, s !== null ? s : ee(e.type) || "Memo";
            case M:
                s = e._payload, e = e._init;
                try {
                    return ee(e(s));
                }
                catch { }
        } return null; }
    var ue = Array.isArray, H = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = { pending: !1, data: null, method: null, action: null }, Ce = [], ce = -1;
    function ke(e) { return { current: e }; }
    function be(e) { 0 > ce || (e.current = Ce[ce], Ce[ce] = null, ce--); }
    function ne(e, s) { ce++, Ce[ce] = e.current, e.current = s; }
    var me = ke(null), Ze = ke(null), lt = ke(null), Ue = ke(null);
    function wa(e, s) { switch (ne(lt, s), ne(Ze, e), ne(me, null), s.nodeType) {
        case 9:
        case 11:
            e = (e = s.documentElement) && (e = e.namespaceURI) ? fx(e) : 0;
            break;
        default: if (e = s.tagName, s = s.namespaceURI)
            s = fx(s), e = hx(s, e);
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
    } be(me), ne(me, e); }
    function as() { be(me), be(Ze), be(lt); }
    function Xs(e) { e.memoizedState !== null && ne(Ue, e); var s = me.current, a = hx(s, e.type); s !== a && (ne(Ze, e), ne(me, a)); }
    function Zs(e) { Ze.current === e && (be(me), be(Ze)), Ue.current === e && (be(Ue), Ln._currentValue = F); }
    var Fs, Gu;
    function Sa(e) {
        if (Fs === void 0)
            try {
                throw Error();
            }
            catch (a) {
                var s = a.stack.trim().match(/\n( *(at )?)/);
                Fs = s && s[1] || "", Gu = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
        return `
` + Fs + e + Gu;
    }
    var uc = !1;
    function mc(e, s) {
        if (!e || uc)
            return "";
        uc = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = { DetermineComponentFrameRoot: function () { try {
                    if (s) {
                        var X = function () { throw Error(); };
                        if (Object.defineProperty(X.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                            try {
                                Reflect.construct(X, []);
                            }
                            catch (G) {
                                var U = G;
                            }
                            Reflect.construct(e, [], X);
                        }
                        else {
                            try {
                                X.call();
                            }
                            catch (G) {
                                U = G;
                            }
                            e.call(X.prototype);
                        }
                    }
                    else {
                        try {
                            throw Error();
                        }
                        catch (G) {
                            U = G;
                        }
                        (X = e()) && typeof X.catch == "function" && X.catch(function () { });
                    }
                }
                catch (G) {
                    if (G && U && typeof G.stack == "string")
                        return [G.stack, U.stack];
                } return [null, null]; } };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            o && o.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
            var d = r.DetermineComponentFrameRoot(), h = d[0], g = d[1];
            if (h && g) {
                var C = h.split(`
`), B = g.split(`
`);
                for (o = r = 0; r < C.length && !C[r].includes("DetermineComponentFrameRoot");)
                    r++;
                for (; o < B.length && !B[o].includes("DetermineComponentFrameRoot");)
                    o++;
                if (r === C.length || o === B.length)
                    for (r = C.length - 1, o = B.length - 1; 1 <= r && 0 <= o && C[r] !== B[o];)
                        o--;
                for (; 1 <= r && 0 <= o; r--, o--)
                    if (C[r] !== B[o]) {
                        if (r !== 1 || o !== 1)
                            do
                                if (r--, o--, 0 > o || C[r] !== B[o]) {
                                    var K = `
` + C[r].replace(" at new ", " at ");
                                    return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), K;
                                }
                            while (1 <= r && 0 <= o);
                        break;
                    }
            }
        }
        finally {
            uc = !1, Error.prepareStackTrace = a;
        }
        return (a = e ? e.displayName || e.name : "") ? Sa(a) : "";
    }
    function db(e, s) { switch (e.tag) {
        case 26:
        case 27:
        case 5: return Sa(e.type);
        case 16: return Sa("Lazy");
        case 13: return e.child !== s && s !== null ? Sa("Suspense Fallback") : Sa("Suspense");
        case 19: return Sa("SuspenseList");
        case 0:
        case 15: return mc(e.type, !1);
        case 11: return mc(e.type.render, !1);
        case 1: return mc(e.type, !0);
        case 31: return Sa("Activity");
        default: return "";
    } }
    function Qu(e) {
        try {
            var s = "", a = null;
            do
                s += db(e, a), a = e, e = e.return;
            while (e);
            return s;
        }
        catch (r) {
            return `
Error generating stack: ` + r.message + `
` + r.stack;
        }
    }
    var fc = Object.prototype.hasOwnProperty, hc = l.unstable_scheduleCallback, xc = l.unstable_cancelCallback, ub = l.unstable_shouldYield, mb = l.unstable_requestPaint, Dt = l.unstable_now, fb = l.unstable_getCurrentPriorityLevel, Ku = l.unstable_ImmediatePriority, Yu = l.unstable_UserBlockingPriority, or = l.unstable_NormalPriority, hb = l.unstable_LowPriority, Xu = l.unstable_IdlePriority, xb = l.log, pb = l.unstable_setDisableYieldValue, Jl = null, Mt = null;
    function Js(e) { if (typeof xb == "function" && pb(e), Mt && typeof Mt.setStrictMode == "function")
        try {
            Mt.setStrictMode(Jl, e);
        }
        catch { } }
    var Ot = Math.clz32 ? Math.clz32 : yb, gb = Math.log, bb = Math.LN2;
    function yb(e) { return e >>>= 0, e === 0 ? 32 : 31 - (gb(e) / bb | 0) | 0; }
    var dr = 256, ur = 262144, mr = 4194304;
    function Ca(e) { var s = e & 42; if (s !== 0)
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
    function fr(e, s, a) { var r = e.pendingLanes; if (r === 0)
        return 0; var o = 0, d = e.suspendedLanes, h = e.pingedLanes; e = e.warmLanes; var g = r & 134217727; return g !== 0 ? (r = g & ~d, r !== 0 ? o = Ca(r) : (h &= g, h !== 0 ? o = Ca(h) : a || (a = g & ~e, a !== 0 && (o = Ca(a))))) : (g = r & ~d, g !== 0 ? o = Ca(g) : h !== 0 ? o = Ca(h) : a || (a = r & ~e, a !== 0 && (o = Ca(a)))), o === 0 ? 0 : s !== 0 && s !== o && (s & d) === 0 && (d = o & -o, a = s & -s, d >= a || d === 32 && (a & 4194048) !== 0) ? s : o; }
    function $l(e, s) { return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & s) === 0; }
    function vb(e, s) { switch (e) {
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
    function Zu() { var e = mr; return mr <<= 1, (mr & 62914560) === 0 && (mr = 4194304), e; }
    function pc(e) { for (var s = [], a = 0; 31 > a; a++)
        s.push(e); return s; }
    function Pl(e, s) { e.pendingLanes |= s, s !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0); }
    function jb(e, s, a, r, o, d) { var h = e.pendingLanes; e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0; var g = e.entanglements, C = e.expirationTimes, B = e.hiddenUpdates; for (a = h & ~a; 0 < a;) {
        var K = 31 - Ot(a), X = 1 << K;
        g[K] = 0, C[K] = -1;
        var U = B[K];
        if (U !== null)
            for (B[K] = null, K = 0; K < U.length; K++) {
                var G = U[K];
                G !== null && (G.lane &= -536870913);
            }
        a &= ~X;
    } r !== 0 && Fu(e, r, 0), d !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(h & ~s)); }
    function Fu(e, s, a) { e.pendingLanes |= s, e.suspendedLanes &= ~s; var r = 31 - Ot(s); e.entangledLanes |= s, e.entanglements[r] = e.entanglements[r] | 1073741824 | a & 261930; }
    function Ju(e, s) { var a = e.entangledLanes |= s; for (e = e.entanglements; a;) {
        var r = 31 - Ot(a), o = 1 << r;
        o & s | e[r] & s && (e[r] |= s), a &= ~o;
    } }
    function $u(e, s) { var a = s & -s; return a = (a & 42) !== 0 ? 1 : gc(a), (a & (e.suspendedLanes | s)) !== 0 ? 0 : a; }
    function gc(e) { switch (e) {
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
    function bc(e) { return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2; }
    function Pu() { var e = P.p; return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : qx(e.type)); }
    function Iu(e, s) { var a = P.p; try {
        return P.p = e, s();
    }
    finally {
        P.p = a;
    } }
    var $s = Math.random().toString(36).slice(2), ot = "__reactFiber$" + $s, vt = "__reactProps$" + $s, $a = "__reactContainer$" + $s, yc = "__reactEvents$" + $s, Nb = "__reactListeners$" + $s, wb = "__reactHandles$" + $s, Wu = "__reactResources$" + $s, Il = "__reactMarker$" + $s;
    function vc(e) { delete e[ot], delete e[vt], delete e[yc], delete e[Nb], delete e[wb]; }
    function Pa(e) { var s = e[ot]; if (s)
        return s; for (var a = e.parentNode; a;) {
        if (s = a[$a] || a[ot]) {
            if (a = s.alternate, s.child !== null || a !== null && a.child !== null)
                for (e = jx(e); e !== null;) {
                    if (a = e[ot])
                        return a;
                    e = jx(e);
                }
            return s;
        }
        e = a, a = e.parentNode;
    } return null; }
    function Ia(e) { if (e = e[ot] || e[$a]) {
        var s = e.tag;
        if (s === 5 || s === 6 || s === 13 || s === 31 || s === 26 || s === 27 || s === 3)
            return e;
    } return null; }
    function Wl(e) { var s = e.tag; if (s === 5 || s === 26 || s === 27 || s === 6)
        return e.stateNode; throw Error(c(33)); }
    function Wa(e) { var s = e[Wu]; return s || (s = e[Wu] = { hoistableStyles: new Map, hoistableScripts: new Map }), s; }
    function it(e) { e[Il] = !0; }
    var em = new Set, tm = {};
    function ka(e, s) { el(e, s), el(e + "Capture", s); }
    function el(e, s) { for (tm[e] = s, e = 0; e < s.length; e++)
        em.add(s[e]); }
    var Sb = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), sm = {}, am = {};
    function Cb(e) { return fc.call(am, e) ? !0 : fc.call(sm, e) ? !1 : Sb.test(e) ? am[e] = !0 : (sm[e] = !0, !1); }
    function hr(e, s, a) { if (Cb(s))
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
    function xr(e, s, a) { if (a === null)
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
    function ws(e, s, a, r) { if (r === null)
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
    function Qt(e) { switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined": return e;
        case "object": return e;
        default: return "";
    } }
    function lm(e) { var s = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (s === "checkbox" || s === "radio"); }
    function kb(e, s, a) { var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, s); if (!e.hasOwnProperty(s) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var o = r.get, d = r.set;
        return Object.defineProperty(e, s, { configurable: !0, get: function () { return o.call(this); }, set: function (h) { a = "" + h, d.call(this, h); } }), Object.defineProperty(e, s, { enumerable: r.enumerable }), { getValue: function () { return a; }, setValue: function (h) { a = "" + h; }, stopTracking: function () { e._valueTracker = null, delete e[s]; } };
    } }
    function jc(e) { if (!e._valueTracker) {
        var s = lm(e) ? "checked" : "value";
        e._valueTracker = kb(e, s, "" + e[s]);
    } }
    function nm(e) { if (!e)
        return !1; var s = e._valueTracker; if (!s)
        return !0; var a = s.getValue(), r = ""; return e && (r = lm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== a ? (s.setValue(e), !0) : !1; }
    function pr(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null; try {
        return e.activeElement || e.body;
    }
    catch {
        return e.body;
    } }
    var Ab = /[\n"\\]/g;
    function Kt(e) { return e.replace(Ab, function (s) { return "\\" + s.charCodeAt(0).toString(16) + " "; }); }
    function Nc(e, s, a, r, o, d, h, g) { e.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.type = h : e.removeAttribute("type"), s != null ? h === "number" ? (s === 0 && e.value === "" || e.value != s) && (e.value = "" + Qt(s)) : e.value !== "" + Qt(s) && (e.value = "" + Qt(s)) : h !== "submit" && h !== "reset" || e.removeAttribute("value"), s != null ? wc(e, h, Qt(s)) : a != null ? wc(e, h, Qt(a)) : r != null && e.removeAttribute("value"), o == null && d != null && (e.defaultChecked = !!d), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + Qt(g) : e.removeAttribute("name"); }
    function rm(e, s, a, r, o, d, h, g) { if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), s != null || a != null) {
        if (!(d !== "submit" && d !== "reset" || s != null)) {
            jc(e);
            return;
        }
        a = a != null ? "" + Qt(a) : "", s = s != null ? "" + Qt(s) : a, g || s === e.value || (e.value = s), e.defaultValue = s;
    } r = r ?? o, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = g ? e.checked : !!r, e.defaultChecked = !!r, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.name = h), jc(e); }
    function wc(e, s, a) { s === "number" && pr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a); }
    function tl(e, s, a, r) { if (e = e.options, s) {
        s = {};
        for (var o = 0; o < a.length; o++)
            s["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
            o = s.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && r && (e[a].defaultSelected = !0);
    }
    else {
        for (a = "" + Qt(a), s = null, o = 0; o < e.length; o++) {
            if (e[o].value === a) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return;
            }
            s !== null || e[o].disabled || (s = e[o]);
        }
        s !== null && (s.selected = !0);
    } }
    function im(e, s, a) { if (s != null && (s = "" + Qt(s), s !== e.value && (e.value = s), a == null)) {
        e.defaultValue !== s && (e.defaultValue = s);
        return;
    } e.defaultValue = a != null ? "" + Qt(a) : ""; }
    function cm(e, s, a, r) { if (s == null) {
        if (r != null) {
            if (a != null)
                throw Error(c(92));
            if (ue(r)) {
                if (1 < r.length)
                    throw Error(c(93));
                r = r[0];
            }
            a = r;
        }
        a == null && (a = ""), s = a;
    } a = Qt(s), e.defaultValue = a, r = e.textContent, r === a && r !== "" && r !== null && (e.value = r), jc(e); }
    function sl(e, s) { if (s) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
            a.nodeValue = s;
            return;
        }
    } e.textContent = s; }
    var Tb = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function om(e, s, a) { var r = s.indexOf("--") === 0; a == null || typeof a == "boolean" || a === "" ? r ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "" : r ? e.setProperty(s, a) : typeof a != "number" || a === 0 || Tb.has(s) ? s === "float" ? e.cssFloat = a : e[s] = ("" + a).trim() : e[s] = a + "px"; }
    function dm(e, s, a) { if (s != null && typeof s != "object")
        throw Error(c(62)); if (e = e.style, a != null) {
        for (var r in a)
            !a.hasOwnProperty(r) || s != null && s.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
        for (var o in s)
            r = s[o], s.hasOwnProperty(o) && a[o] !== r && om(e, o, r);
    }
    else
        for (var d in s)
            s.hasOwnProperty(d) && om(e, d, s[d]); }
    function Sc(e) { if (e.indexOf("-") === -1)
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
    var Eb = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Db = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function gr(e) { return Db.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e; }
    function Ss() { }
    var Cc = null;
    function kc(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
    var al = null, ll = null;
    function um(e) { var s = Ia(e); if (s && (e = s.stateNode)) {
        var a = e[vt] || null;
        e: switch (e = s.stateNode, s.type) {
            case "input":
                if (Nc(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), s = a.name, a.type === "radio" && s != null) {
                    for (a = e; a.parentNode;)
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + Kt("" + s) + '"][type="radio"]'), s = 0; s < a.length; s++) {
                        var r = a[s];
                        if (r !== e && r.form === e.form) {
                            var o = r[vt] || null;
                            if (!o)
                                throw Error(c(90));
                            Nc(r, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
                        }
                    }
                    for (s = 0; s < a.length; s++)
                        r = a[s], r.form === e.form && nm(r);
                }
                break e;
            case "textarea":
                im(e, a.value, a.defaultValue);
                break e;
            case "select": s = a.value, s != null && tl(e, !!a.multiple, s, !1);
        }
    } }
    var Ac = !1;
    function mm(e, s, a) { if (Ac)
        return e(s, a); Ac = !0; try {
        var r = e(s);
        return r;
    }
    finally {
        if (Ac = !1, (al !== null || ll !== null) && (li(), al && (s = al, e = ll, ll = al = null, um(s), e)))
            for (s = 0; s < e.length; s++)
                um(e[s]);
    } }
    function en(e, s) { var a = e.stateNode; if (a === null)
        return null; var r = a[vt] || null; if (r === null)
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
    var Cs = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Tc = !1;
    if (Cs)
        try {
            var tn = {};
            Object.defineProperty(tn, "passive", { get: function () { Tc = !0; } }), window.addEventListener("test", tn, tn), window.removeEventListener("test", tn, tn);
        }
        catch {
            Tc = !1;
        }
    var Ps = null, Ec = null, br = null;
    function fm() { if (br)
        return br; var e, s = Ec, a = s.length, r, o = "value" in Ps ? Ps.value : Ps.textContent, d = o.length; for (e = 0; e < a && s[e] === o[e]; e++)
        ; var h = a - e; for (r = 1; r <= h && s[a - r] === o[d - r]; r++)
        ; return br = o.slice(e, 1 < r ? 1 - r : void 0); }
    function yr(e) { var s = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && s === 13 && (e = 13)) : e = s, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
    function vr() { return !0; }
    function hm() { return !1; }
    function jt(e) { function s(a, r, o, d, h) { this._reactName = a, this._targetInst = o, this.type = r, this.nativeEvent = d, this.target = h, this.currentTarget = null; for (var g in e)
        e.hasOwnProperty(g) && (a = e[g], this[g] = a ? a(d) : d[g]); return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? vr : hm, this.isPropagationStopped = hm, this; } return p(s.prototype, { preventDefault: function () { this.defaultPrevented = !0; var a = this.nativeEvent; a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = vr); }, stopPropagation: function () { var a = this.nativeEvent; a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = vr); }, persist: function () { }, isPersistent: vr }), s; }
    var Aa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, jr = jt(Aa), sn = p({}, Aa, { view: 0, detail: 0 }), Mb = jt(sn), Dc, Mc, an, Nr = p({}, sn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _c, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== an && (an && e.type === "mousemove" ? (Dc = e.screenX - an.screenX, Mc = e.screenY - an.screenY) : Mc = Dc = 0, an = e), Dc); }, movementY: function (e) { return "movementY" in e ? e.movementY : Mc; } }), xm = jt(Nr), Ob = p({}, Nr, { dataTransfer: 0 }), _b = jt(Ob), zb = p({}, sn, { relatedTarget: 0 }), Oc = jt(zb), Rb = p({}, Aa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bb = jt(Rb), qb = p({}, Aa, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), Lb = jt(qb), Ub = p({}, Aa, { data: 0 }), pm = jt(Ub), Hb = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Vb = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Gb = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Qb(e) { var s = this.nativeEvent; return s.getModifierState ? s.getModifierState(e) : (e = Gb[e]) ? !!s[e] : !1; }
    function _c() { return Qb; }
    var Kb = p({}, sn, { key: function (e) { if (e.key) {
            var s = Hb[e.key] || e.key;
            if (s !== "Unidentified")
                return s;
        } return e.type === "keypress" ? (e = yr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vb[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _c, charCode: function (e) { return e.type === "keypress" ? yr(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? yr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), Yb = jt(Kb), Xb = p({}, Nr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gm = jt(Xb), Zb = p({}, sn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _c }), Fb = jt(Zb), Jb = p({}, Aa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $b = jt(Jb), Pb = p({}, Nr, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Ib = jt(Pb), Wb = p({}, Aa, { newState: 0, oldState: 0 }), e0 = jt(Wb), t0 = [9, 13, 27, 32], zc = Cs && "CompositionEvent" in window, ln = null;
    Cs && "documentMode" in document && (ln = document.documentMode);
    var s0 = Cs && "TextEvent" in window && !ln, bm = Cs && (!zc || ln && 8 < ln && 11 >= ln), ym = " ", vm = !1;
    function jm(e, s) { switch (e) {
        case "keyup": return t0.indexOf(s.keyCode) !== -1;
        case "keydown": return s.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout": return !0;
        default: return !1;
    } }
    function Nm(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
    var nl = !1;
    function a0(e, s) { switch (e) {
        case "compositionend": return Nm(s);
        case "keypress": return s.which !== 32 ? null : (vm = !0, ym);
        case "textInput": return e = s.data, e === ym && vm ? null : e;
        default: return null;
    } }
    function l0(e, s) { if (nl)
        return e === "compositionend" || !zc && jm(e, s) ? (e = fm(), br = Ec = Ps = null, nl = !1, e) : null; switch (e) {
        case "paste": return null;
        case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                if (s.char && 1 < s.char.length)
                    return s.char;
                if (s.which)
                    return String.fromCharCode(s.which);
            }
            return null;
        case "compositionend": return bm && s.locale !== "ko" ? null : s.data;
        default: return null;
    } }
    var n0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
    function wm(e) { var s = e && e.nodeName && e.nodeName.toLowerCase(); return s === "input" ? !!n0[e.type] : s === "textarea"; }
    function Sm(e, s, a, r) { al ? ll ? ll.push(r) : ll = [r] : al = r, s = ui(s, "onChange"), 0 < s.length && (a = new jr("onChange", "change", null, a, r), e.push({ event: a, listeners: s })); }
    var nn = null, rn = null;
    function r0(e) { ix(e, 0); }
    function wr(e) { var s = Wl(e); if (nm(s))
        return e; }
    function Cm(e, s) { if (e === "change")
        return s; }
    var km = !1;
    if (Cs) {
        var Rc;
        if (Cs) {
            var Bc = "oninput" in document;
            if (!Bc) {
                var Am = document.createElement("div");
                Am.setAttribute("oninput", "return;"), Bc = typeof Am.oninput == "function";
            }
            Rc = Bc;
        }
        else
            Rc = !1;
        km = Rc && (!document.documentMode || 9 < document.documentMode);
    }
    function Tm() { nn && (nn.detachEvent("onpropertychange", Em), rn = nn = null); }
    function Em(e) { if (e.propertyName === "value" && wr(rn)) {
        var s = [];
        Sm(s, rn, e, kc(e)), mm(r0, s);
    } }
    function i0(e, s, a) { e === "focusin" ? (Tm(), nn = s, rn = a, nn.attachEvent("onpropertychange", Em)) : e === "focusout" && Tm(); }
    function c0(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return wr(rn); }
    function o0(e, s) { if (e === "click")
        return wr(s); }
    function d0(e, s) { if (e === "input" || e === "change")
        return wr(s); }
    function u0(e, s) { return e === s && (e !== 0 || 1 / e === 1 / s) || e !== e && s !== s; }
    var _t = typeof Object.is == "function" ? Object.is : u0;
    function cn(e, s) { if (_t(e, s))
        return !0; if (typeof e != "object" || e === null || typeof s != "object" || s === null)
        return !1; var a = Object.keys(e), r = Object.keys(s); if (a.length !== r.length)
        return !1; for (r = 0; r < a.length; r++) {
        var o = a[r];
        if (!fc.call(s, o) || !_t(e[o], s[o]))
            return !1;
    } return !0; }
    function Dm(e) { for (; e && e.firstChild;)
        e = e.firstChild; return e; }
    function Mm(e, s) { var a = Dm(e); e = 0; for (var r; a;) {
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
        a = Dm(a);
    } }
    function Om(e, s) { return e && s ? e === s ? !0 : e && e.nodeType === 3 ? !1 : s && s.nodeType === 3 ? Om(e, s.parentNode) : "contains" in e ? e.contains(s) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(s) & 16) : !1 : !1; }
    function _m(e) { e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window; for (var s = pr(e.document); s instanceof e.HTMLIFrameElement;) {
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
        s = pr(e.document);
    } return s; }
    function qc(e) { var s = e && e.nodeName && e.nodeName.toLowerCase(); return s && (s === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || s === "textarea" || e.contentEditable === "true"); }
    var m0 = Cs && "documentMode" in document && 11 >= document.documentMode, rl = null, Lc = null, on = null, Uc = !1;
    function zm(e, s, a) { var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument; Uc || rl == null || rl !== pr(r) || (r = rl, "selectionStart" in r && qc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), on && cn(on, r) || (on = r, r = ui(Lc, "onSelect"), 0 < r.length && (s = new jr("onSelect", "select", null, s, a), e.push({ event: s, listeners: r }), s.target = rl))); }
    function Ta(e, s) { var a = {}; return a[e.toLowerCase()] = s.toLowerCase(), a["Webkit" + e] = "webkit" + s, a["Moz" + e] = "moz" + s, a; }
    var il = { animationend: Ta("Animation", "AnimationEnd"), animationiteration: Ta("Animation", "AnimationIteration"), animationstart: Ta("Animation", "AnimationStart"), transitionrun: Ta("Transition", "TransitionRun"), transitionstart: Ta("Transition", "TransitionStart"), transitioncancel: Ta("Transition", "TransitionCancel"), transitionend: Ta("Transition", "TransitionEnd") }, Hc = {}, Rm = {};
    Cs && (Rm = document.createElement("div").style, "AnimationEvent" in window || (delete il.animationend.animation, delete il.animationiteration.animation, delete il.animationstart.animation), "TransitionEvent" in window || delete il.transitionend.transition);
    function Ea(e) { if (Hc[e])
        return Hc[e]; if (!il[e])
        return e; var s = il[e], a; for (a in s)
        if (s.hasOwnProperty(a) && a in Rm)
            return Hc[e] = s[a]; return e; }
    var Bm = Ea("animationend"), qm = Ea("animationiteration"), Lm = Ea("animationstart"), f0 = Ea("transitionrun"), h0 = Ea("transitionstart"), x0 = Ea("transitioncancel"), Um = Ea("transitionend"), Hm = new Map, Vc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Vc.push("scrollEnd");
    function ls(e, s) { Hm.set(e, s), ka(s, [e]); }
    var Sr = typeof reportError == "function" ? reportError : function (e) { if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var s = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
        if (!window.dispatchEvent(s))
            return;
    }
    else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
    } console.error(e); }, Yt = [], cl = 0, Gc = 0;
    function Cr() { for (var e = cl, s = Gc = cl = 0; s < e;) {
        var a = Yt[s];
        Yt[s++] = null;
        var r = Yt[s];
        Yt[s++] = null;
        var o = Yt[s];
        Yt[s++] = null;
        var d = Yt[s];
        if (Yt[s++] = null, r !== null && o !== null) {
            var h = r.pending;
            h === null ? o.next = o : (o.next = h.next, h.next = o), r.pending = o;
        }
        d !== 0 && Vm(a, o, d);
    } }
    function kr(e, s, a, r) { Yt[cl++] = e, Yt[cl++] = s, Yt[cl++] = a, Yt[cl++] = r, Gc |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r); }
    function Qc(e, s, a, r) { return kr(e, s, a, r), Ar(e); }
    function Da(e, s) { return kr(e, null, null, s), Ar(e); }
    function Vm(e, s, a) { e.lanes |= a; var r = e.alternate; r !== null && (r.lanes |= a); for (var o = !1, d = e.return; d !== null;)
        d.childLanes |= a, r = d.alternate, r !== null && (r.childLanes |= a), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (o = !0)), e = d, d = d.return; return e.tag === 3 ? (d = e.stateNode, o && s !== null && (o = 31 - Ot(a), e = d.hiddenUpdates, r = e[o], r === null ? e[o] = [s] : r.push(s), s.lane = a | 536870912), d) : null; }
    function Ar(e) { if (50 < Mn)
        throw Mn = 0, Wo = null, Error(c(185)); for (var s = e.return; s !== null;)
        e = s, s = e.return; return e.tag === 3 ? e.stateNode : null; }
    var ol = {};
    function p0(e, s, a, r) { this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
    function zt(e, s, a, r) { return new p0(e, s, a, r); }
    function Kc(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
    function ks(e, s) { var a = e.alternate; return a === null ? (a = zt(e.tag, s, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = s, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, s = e.dependencies, a.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a; }
    function Gm(e, s) { e.flags &= 65011714; var a = e.alternate; return a === null ? (e.childLanes = 0, e.lanes = s, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, s = a.dependencies, e.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }), e; }
    function Tr(e, s, a, r, o, d) { var h = 0; if (r = e, typeof e == "function")
        Kc(e) && (h = 1);
    else if (typeof e == "string")
        h = jy(e, a, me.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
        e: switch (e) {
            case J: return e = zt(31, a, s, o), e.elementType = J, e.lanes = d, e;
            case S: return Ma(a.children, o, d, s);
            case E:
                h = 8, o |= 24;
                break;
            case O: return e = zt(12, a, s, o | 2), e.elementType = O, e.lanes = d, e;
            case A: return e = zt(13, a, s, o), e.elementType = A, e.lanes = d, e;
            case L: return e = zt(19, a, s, o), e.elementType = L, e.lanes = d, e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case q:
                            h = 10;
                            break e;
                        case D:
                            h = 9;
                            break e;
                        case Z:
                            h = 11;
                            break e;
                        case y:
                            h = 14;
                            break e;
                        case M:
                            h = 16, r = null;
                            break e;
                    }
                h = 29, a = Error(c(130, e === null ? "null" : typeof e, "")), r = null;
        } return s = zt(h, a, s, o), s.elementType = e, s.type = r, s.lanes = d, s; }
    function Ma(e, s, a, r) { return e = zt(7, e, r, s), e.lanes = a, e; }
    function Yc(e, s, a) { return e = zt(6, e, null, s), e.lanes = a, e; }
    function Qm(e) { var s = zt(18, null, null, 0); return s.stateNode = e, s; }
    function Xc(e, s, a) { return s = zt(4, e.children !== null ? e.children : [], e.key, s), s.lanes = a, s.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, s; }
    var Km = new WeakMap;
    function Xt(e, s) { if (typeof e == "object" && e !== null) {
        var a = Km.get(e);
        return a !== void 0 ? a : (s = { value: e, source: s, stack: Qu(s) }, Km.set(e, s), s);
    } return { value: e, source: s, stack: Qu(s) }; }
    var dl = [], ul = 0, Er = null, dn = 0, Zt = [], Ft = 0, Is = null, fs = 1, hs = "";
    function As(e, s) { dl[ul++] = dn, dl[ul++] = Er, Er = e, dn = s; }
    function Ym(e, s, a) { Zt[Ft++] = fs, Zt[Ft++] = hs, Zt[Ft++] = Is, Is = e; var r = fs; e = hs; var o = 32 - Ot(r) - 1; r &= ~(1 << o), a += 1; var d = 32 - Ot(s) + o; if (30 < d) {
        var h = o - o % 5;
        d = (r & (1 << h) - 1).toString(32), r >>= h, o -= h, fs = 1 << 32 - Ot(s) + o | a << o | r, hs = d + e;
    }
    else
        fs = 1 << d | a << o | r, hs = e; }
    function Zc(e) { e.return !== null && (As(e, 1), Ym(e, 1, 0)); }
    function Fc(e) { for (; e === Er;)
        Er = dl[--ul], dl[ul] = null, dn = dl[--ul], dl[ul] = null; for (; e === Is;)
        Is = Zt[--Ft], Zt[Ft] = null, hs = Zt[--Ft], Zt[Ft] = null, fs = Zt[--Ft], Zt[Ft] = null; }
    function Xm(e, s) { Zt[Ft++] = fs, Zt[Ft++] = hs, Zt[Ft++] = Is, fs = s.id, hs = s.overflow, Is = e; }
    var dt = null, He = null, we = !1, Ws = null, Jt = !1, Jc = Error(c(519));
    function ea(e) { var s = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")); throw un(Xt(s, e)), Jc; }
    function Zm(e) { var s = e.stateNode, a = e.type, r = e.memoizedProps; switch (s[ot] = e, s[vt] = r, a) {
        case "dialog":
            ve("cancel", s), ve("close", s);
            break;
        case "iframe":
        case "object":
        case "embed":
            ve("load", s);
            break;
        case "video":
        case "audio":
            for (a = 0; a < _n.length; a++)
                ve(_n[a], s);
            break;
        case "source":
            ve("error", s);
            break;
        case "img":
        case "image":
        case "link":
            ve("error", s), ve("load", s);
            break;
        case "details":
            ve("toggle", s);
            break;
        case "input":
            ve("invalid", s), rm(s, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
            break;
        case "select":
            ve("invalid", s);
            break;
        case "textarea": ve("invalid", s), cm(s, r.value, r.defaultValue, r.children);
    } a = r.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || s.textContent === "" + a || r.suppressHydrationWarning === !0 || ux(s.textContent, a) ? (r.popover != null && (ve("beforetoggle", s), ve("toggle", s)), r.onScroll != null && ve("scroll", s), r.onScrollEnd != null && ve("scrollend", s), r.onClick != null && (s.onclick = Ss), s = !0) : s = !1, s || ea(e, !0); }
    function Fm(e) { for (dt = e.return; dt;)
        switch (dt.tag) {
            case 5:
            case 31:
            case 13:
                Jt = !1;
                return;
            case 27:
            case 3:
                Jt = !0;
                return;
            default: dt = dt.return;
        } }
    function ml(e) { if (e !== dt)
        return !1; if (!we)
        return Fm(e), we = !0, !1; var s = e.tag, a; if ((a = s !== 3 && s !== 27) && ((a = s === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || hd(e.type, e.memoizedProps)), a = !a), a && He && ea(e), Fm(e), s === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
            throw Error(c(317));
        He = vx(e);
    }
    else if (s === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
            throw Error(c(317));
        He = vx(e);
    }
    else
        s === 27 ? (s = He, ha(e.type) ? (e = yd, yd = null, He = e) : He = s) : He = dt ? Pt(e.stateNode.nextSibling) : null; return !0; }
    function Oa() { He = dt = null, we = !1; }
    function $c() { var e = Ws; return e !== null && (Ct === null ? Ct = e : Ct.push.apply(Ct, e), Ws = null), e; }
    function un(e) { Ws === null ? Ws = [e] : Ws.push(e); }
    var Pc = ke(null), _a = null, Ts = null;
    function ta(e, s, a) { ne(Pc, s._currentValue), s._currentValue = a; }
    function Es(e) { e._currentValue = Pc.current, be(Pc); }
    function Ic(e, s, a) { for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & s) !== s ? (e.childLanes |= s, r !== null && (r.childLanes |= s)) : r !== null && (r.childLanes & s) !== s && (r.childLanes |= s), e === a)
            break;
        e = e.return;
    } }
    function Wc(e, s, a, r) { var o = e.child; for (o !== null && (o.return = e); o !== null;) {
        var d = o.dependencies;
        if (d !== null) {
            var h = o.child;
            d = d.firstContext;
            e: for (; d !== null;) {
                var g = d;
                d = o;
                for (var C = 0; C < s.length; C++)
                    if (g.context === s[C]) {
                        d.lanes |= a, g = d.alternate, g !== null && (g.lanes |= a), Ic(d.return, a, e), r || (h = null);
                        break e;
                    }
                d = g.next;
            }
        }
        else if (o.tag === 18) {
            if (h = o.return, h === null)
                throw Error(c(341));
            h.lanes |= a, d = h.alternate, d !== null && (d.lanes |= a), Ic(h, a, e), h = null;
        }
        else
            h = o.child;
        if (h !== null)
            h.return = o;
        else
            for (h = o; h !== null;) {
                if (h === e) {
                    h = null;
                    break;
                }
                if (o = h.sibling, o !== null) {
                    o.return = h.return, h = o;
                    break;
                }
                h = h.return;
            }
        o = h;
    } }
    function fl(e, s, a, r) { e = null; for (var o = s, d = !1; o !== null;) {
        if (!d) {
            if ((o.flags & 524288) !== 0)
                d = !0;
            else if ((o.flags & 262144) !== 0)
                break;
        }
        if (o.tag === 10) {
            var h = o.alternate;
            if (h === null)
                throw Error(c(387));
            if (h = h.memoizedProps, h !== null) {
                var g = o.type;
                _t(o.pendingProps.value, h.value) || (e !== null ? e.push(g) : e = [g]);
            }
        }
        else if (o === Ue.current) {
            if (h = o.alternate, h === null)
                throw Error(c(387));
            h.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Ln) : e = [Ln]);
        }
        o = o.return;
    } e !== null && Wc(s, e, a, r), s.flags |= 262144; }
    function Dr(e) { for (e = e.firstContext; e !== null;) {
        if (!_t(e.context._currentValue, e.memoizedValue))
            return !0;
        e = e.next;
    } return !1; }
    function za(e) { _a = e, Ts = null, e = e.dependencies, e !== null && (e.firstContext = null); }
    function ut(e) { return Jm(_a, e); }
    function Mr(e, s) { return _a === null && za(e), Jm(e, s); }
    function Jm(e, s) { var a = s._currentValue; if (s = { context: s, memoizedValue: a, next: null }, Ts === null) {
        if (e === null)
            throw Error(c(308));
        Ts = s, e.dependencies = { lanes: 0, firstContext: s }, e.flags |= 524288;
    }
    else
        Ts = Ts.next = s; return a; }
    var g0 = typeof AbortController < "u" ? AbortController : function () { var e = [], s = this.signal = { aborted: !1, addEventListener: function (a, r) { e.push(r); } }; this.abort = function () { s.aborted = !0, e.forEach(function (a) { return a(); }); }; }, b0 = l.unstable_scheduleCallback, y0 = l.unstable_NormalPriority, Ie = { $$typeof: q, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function eo() { return { controller: new g0, data: new Map, refCount: 0 }; }
    function mn(e) { e.refCount--, e.refCount === 0 && b0(y0, function () { e.controller.abort(); }); }
    var fn = null, to = 0, hl = 0, xl = null;
    function v0(e, s) { if (fn === null) {
        var a = fn = [];
        to = 0, hl = nd(), xl = { status: "pending", value: void 0, then: function (r) { a.push(r); } };
    } return to++, s.then($m, $m), s; }
    function $m() { if (--to === 0 && fn !== null) {
        xl !== null && (xl.status = "fulfilled");
        var e = fn;
        fn = null, hl = 0, xl = null;
        for (var s = 0; s < e.length; s++)
            (0, e[s])();
    } }
    function j0(e, s) { var a = [], r = { status: "pending", value: null, reason: null, then: function (o) { a.push(o); } }; return e.then(function () { r.status = "fulfilled", r.value = s; for (var o = 0; o < a.length; o++)
        (0, a[o])(s); }, function (o) { for (r.status = "rejected", r.reason = o, o = 0; o < a.length; o++)
        (0, a[o])(void 0); }), r; }
    var Pm = H.S;
    H.S = function (e, s) { Rh = Dt(), typeof s == "object" && s !== null && typeof s.then == "function" && v0(e, s), Pm !== null && Pm(e, s); };
    var Ra = ke(null);
    function so() { var e = Ra.current; return e !== null ? e : qe.pooledCache; }
    function Or(e, s) { s === null ? ne(Ra, Ra.current) : ne(Ra, s.pool); }
    function Im() { var e = so(); return e === null ? null : { parent: Ie._currentValue, pool: e }; }
    var pl = Error(c(460)), ao = Error(c(474)), _r = Error(c(542)), zr = { then: function () { } };
    function Wm(e) { return e = e.status, e === "fulfilled" || e === "rejected"; }
    function ef(e, s, a) { switch (a = e[a], a === void 0 ? e.push(s) : a !== s && (s.then(Ss, Ss), s = a), s.status) {
        case "fulfilled": return s.value;
        case "rejected": throw e = s.reason, sf(e), e;
        default:
            if (typeof s.status == "string")
                s.then(Ss, Ss);
            else {
                if (e = qe, e !== null && 100 < e.shellSuspendCounter)
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
                case "rejected": throw e = s.reason, sf(e), e;
            }
            throw qa = s, pl;
    } }
    function Ba(e) { try {
        var s = e._init;
        return s(e._payload);
    }
    catch (a) {
        throw a !== null && typeof a == "object" && typeof a.then == "function" ? (qa = a, pl) : a;
    } }
    var qa = null;
    function tf() { if (qa === null)
        throw Error(c(459)); var e = qa; return qa = null, e; }
    function sf(e) { if (e === pl || e === _r)
        throw Error(c(483)); }
    var gl = null, hn = 0;
    function Rr(e) { var s = hn; return hn += 1, gl === null && (gl = []), ef(gl, e, s); }
    function xn(e, s) { s = s.props.ref, e.ref = s !== void 0 ? s : null; }
    function Br(e, s) { throw s.$$typeof === j ? Error(c(525)) : (e = Object.prototype.toString.call(s), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : e))); }
    function af(e) { function s(_, T) { if (e) {
        var R = _.deletions;
        R === null ? (_.deletions = [T], _.flags |= 16) : R.push(T);
    } } function a(_, T) { if (!e)
        return null; for (; T !== null;)
        s(_, T), T = T.sibling; return null; } function r(_) { for (var T = new Map; _ !== null;)
        _.key !== null ? T.set(_.key, _) : T.set(_.index, _), _ = _.sibling; return T; } function o(_, T) { return _ = ks(_, T), _.index = 0, _.sibling = null, _; } function d(_, T, R) { return _.index = R, e ? (R = _.alternate, R !== null ? (R = R.index, R < T ? (_.flags |= 67108866, T) : R) : (_.flags |= 67108866, T)) : (_.flags |= 1048576, T); } function h(_) { return e && _.alternate === null && (_.flags |= 67108866), _; } function g(_, T, R, Y) { return T === null || T.tag !== 6 ? (T = Yc(R, _.mode, Y), T.return = _, T) : (T = o(T, R), T.return = _, T); } function C(_, T, R, Y) { var re = R.type; return re === S ? K(_, T, R.props.children, Y, R.key) : T !== null && (T.elementType === re || typeof re == "object" && re !== null && re.$$typeof === M && Ba(re) === T.type) ? (T = o(T, R.props), xn(T, R), T.return = _, T) : (T = Tr(R.type, R.key, R.props, null, _.mode, Y), xn(T, R), T.return = _, T); } function B(_, T, R, Y) { return T === null || T.tag !== 4 || T.stateNode.containerInfo !== R.containerInfo || T.stateNode.implementation !== R.implementation ? (T = Xc(R, _.mode, Y), T.return = _, T) : (T = o(T, R.children || []), T.return = _, T); } function K(_, T, R, Y, re) { return T === null || T.tag !== 7 ? (T = Ma(R, _.mode, Y, re), T.return = _, T) : (T = o(T, R), T.return = _, T); } function X(_, T, R) { if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = Yc("" + T, _.mode, R), T.return = _, T; if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
            case k: return R = Tr(T.type, T.key, T.props, null, _.mode, R), xn(R, T), R.return = _, R;
            case w: return T = Xc(T, _.mode, R), T.return = _, T;
            case M: return T = Ba(T), X(_, T, R);
        }
        if (ue(T) || I(T))
            return T = Ma(T, _.mode, R, null), T.return = _, T;
        if (typeof T.then == "function")
            return X(_, Rr(T), R);
        if (T.$$typeof === q)
            return X(_, Mr(_, T), R);
        Br(_, T);
    } return null; } function U(_, T, R, Y) { var re = T !== null ? T.key : null; if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return re !== null ? null : g(_, T, "" + R, Y); if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
            case k: return R.key === re ? C(_, T, R, Y) : null;
            case w: return R.key === re ? B(_, T, R, Y) : null;
            case M: return R = Ba(R), U(_, T, R, Y);
        }
        if (ue(R) || I(R))
            return re !== null ? null : K(_, T, R, Y, null);
        if (typeof R.then == "function")
            return U(_, T, Rr(R), Y);
        if (R.$$typeof === q)
            return U(_, T, Mr(_, R), Y);
        Br(_, R);
    } return null; } function G(_, T, R, Y, re) { if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
        return _ = _.get(R) || null, g(T, _, "" + Y, re); if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
            case k: return _ = _.get(Y.key === null ? R : Y.key) || null, C(T, _, Y, re);
            case w: return _ = _.get(Y.key === null ? R : Y.key) || null, B(T, _, Y, re);
            case M: return Y = Ba(Y), G(_, T, R, Y, re);
        }
        if (ue(Y) || I(Y))
            return _ = _.get(R) || null, K(T, _, Y, re, null);
        if (typeof Y.then == "function")
            return G(_, T, R, Rr(Y), re);
        if (Y.$$typeof === q)
            return G(_, T, R, Mr(T, Y), re);
        Br(T, Y);
    } return null; } function W(_, T, R, Y) { for (var re = null, Te = null, ae = T, pe = T = 0, Ne = null; ae !== null && pe < R.length; pe++) {
        ae.index > pe ? (Ne = ae, ae = null) : Ne = ae.sibling;
        var Ee = U(_, ae, R[pe], Y);
        if (Ee === null) {
            ae === null && (ae = Ne);
            break;
        }
        e && ae && Ee.alternate === null && s(_, ae), T = d(Ee, T, pe), Te === null ? re = Ee : Te.sibling = Ee, Te = Ee, ae = Ne;
    } if (pe === R.length)
        return a(_, ae), we && As(_, pe), re; if (ae === null) {
        for (; pe < R.length; pe++)
            ae = X(_, R[pe], Y), ae !== null && (T = d(ae, T, pe), Te === null ? re = ae : Te.sibling = ae, Te = ae);
        return we && As(_, pe), re;
    } for (ae = r(ae); pe < R.length; pe++)
        Ne = G(ae, _, pe, R[pe], Y), Ne !== null && (e && Ne.alternate !== null && ae.delete(Ne.key === null ? pe : Ne.key), T = d(Ne, T, pe), Te === null ? re = Ne : Te.sibling = Ne, Te = Ne); return e && ae.forEach(function (ya) { return s(_, ya); }), we && As(_, pe), re; } function oe(_, T, R, Y) { if (R == null)
        throw Error(c(151)); for (var re = null, Te = null, ae = T, pe = T = 0, Ne = null, Ee = R.next(); ae !== null && !Ee.done; pe++, Ee = R.next()) {
        ae.index > pe ? (Ne = ae, ae = null) : Ne = ae.sibling;
        var ya = U(_, ae, Ee.value, Y);
        if (ya === null) {
            ae === null && (ae = Ne);
            break;
        }
        e && ae && ya.alternate === null && s(_, ae), T = d(ya, T, pe), Te === null ? re = ya : Te.sibling = ya, Te = ya, ae = Ne;
    } if (Ee.done)
        return a(_, ae), we && As(_, pe), re; if (ae === null) {
        for (; !Ee.done; pe++, Ee = R.next())
            Ee = X(_, Ee.value, Y), Ee !== null && (T = d(Ee, T, pe), Te === null ? re = Ee : Te.sibling = Ee, Te = Ee);
        return we && As(_, pe), re;
    } for (ae = r(ae); !Ee.done; pe++, Ee = R.next())
        Ee = G(ae, _, pe, Ee.value, Y), Ee !== null && (e && Ee.alternate !== null && ae.delete(Ee.key === null ? pe : Ee.key), T = d(Ee, T, pe), Te === null ? re = Ee : Te.sibling = Ee, Te = Ee); return e && ae.forEach(function (Oy) { return s(_, Oy); }), we && As(_, pe), re; } function Be(_, T, R, Y) { if (typeof R == "object" && R !== null && R.type === S && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
            case k:
                e: {
                    for (var re = R.key; T !== null;) {
                        if (T.key === re) {
                            if (re = R.type, re === S) {
                                if (T.tag === 7) {
                                    a(_, T.sibling), Y = o(T, R.props.children), Y.return = _, _ = Y;
                                    break e;
                                }
                            }
                            else if (T.elementType === re || typeof re == "object" && re !== null && re.$$typeof === M && Ba(re) === T.type) {
                                a(_, T.sibling), Y = o(T, R.props), xn(Y, R), Y.return = _, _ = Y;
                                break e;
                            }
                            a(_, T);
                            break;
                        }
                        else
                            s(_, T);
                        T = T.sibling;
                    }
                    R.type === S ? (Y = Ma(R.props.children, _.mode, Y, R.key), Y.return = _, _ = Y) : (Y = Tr(R.type, R.key, R.props, null, _.mode, Y), xn(Y, R), Y.return = _, _ = Y);
                }
                return h(_);
            case w:
                e: {
                    for (re = R.key; T !== null;) {
                        if (T.key === re)
                            if (T.tag === 4 && T.stateNode.containerInfo === R.containerInfo && T.stateNode.implementation === R.implementation) {
                                a(_, T.sibling), Y = o(T, R.children || []), Y.return = _, _ = Y;
                                break e;
                            }
                            else {
                                a(_, T);
                                break;
                            }
                        else
                            s(_, T);
                        T = T.sibling;
                    }
                    Y = Xc(R, _.mode, Y), Y.return = _, _ = Y;
                }
                return h(_);
            case M: return R = Ba(R), Be(_, T, R, Y);
        }
        if (ue(R))
            return W(_, T, R, Y);
        if (I(R)) {
            if (re = I(R), typeof re != "function")
                throw Error(c(150));
            return R = re.call(R), oe(_, T, R, Y);
        }
        if (typeof R.then == "function")
            return Be(_, T, Rr(R), Y);
        if (R.$$typeof === q)
            return Be(_, T, Mr(_, R), Y);
        Br(_, R);
    } return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, T !== null && T.tag === 6 ? (a(_, T.sibling), Y = o(T, R), Y.return = _, _ = Y) : (a(_, T), Y = Yc(R, _.mode, Y), Y.return = _, _ = Y), h(_)) : a(_, T); } return function (_, T, R, Y) { try {
        hn = 0;
        var re = Be(_, T, R, Y);
        return gl = null, re;
    }
    catch (ae) {
        if (ae === pl || ae === _r)
            throw ae;
        var Te = zt(29, ae, null, _.mode);
        return Te.lanes = Y, Te.return = _, Te;
    }
    finally { } }; }
    var La = af(!0), lf = af(!1), sa = !1;
    function lo(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null }; }
    function no(e, s) { e = e.updateQueue, s.updateQueue === e && (s.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null }); }
    function aa(e) { return { lane: e, tag: 0, payload: null, callback: null, next: null }; }
    function la(e, s, a) { var r = e.updateQueue; if (r === null)
        return null; if (r = r.shared, (Me & 2) !== 0) {
        var o = r.pending;
        return o === null ? s.next = s : (s.next = o.next, o.next = s), r.pending = s, s = Ar(e), Vm(e, null, a), s;
    } return kr(e, r, s, a), Ar(e); }
    function pn(e, s, a) { if (s = s.updateQueue, s !== null && (s = s.shared, (a & 4194048) !== 0)) {
        var r = s.lanes;
        r &= e.pendingLanes, a |= r, s.lanes = a, Ju(e, a);
    } }
    function ro(e, s) { var a = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, a === r)) {
        var o = null, d = null;
        if (a = a.firstBaseUpdate, a !== null) {
            do {
                var h = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
                d === null ? o = d = h : d = d.next = h, a = a.next;
            } while (a !== null);
            d === null ? o = d = s : d = d.next = s;
        }
        else
            o = d = s;
        a = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: d, shared: r.shared, callbacks: r.callbacks }, e.updateQueue = a;
        return;
    } e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = s : e.next = s, a.lastBaseUpdate = s; }
    var io = !1;
    function gn() { if (io) {
        var e = xl;
        if (e !== null)
            throw e;
    } }
    function bn(e, s, a, r) { io = !1; var o = e.updateQueue; sa = !1; var d = o.firstBaseUpdate, h = o.lastBaseUpdate, g = o.shared.pending; if (g !== null) {
        o.shared.pending = null;
        var C = g, B = C.next;
        C.next = null, h === null ? d = B : h.next = B, h = C;
        var K = e.alternate;
        K !== null && (K = K.updateQueue, g = K.lastBaseUpdate, g !== h && (g === null ? K.firstBaseUpdate = B : g.next = B, K.lastBaseUpdate = C));
    } if (d !== null) {
        var X = o.baseState;
        h = 0, K = B = C = null, g = d;
        do {
            var U = g.lane & -536870913, G = U !== g.lane;
            if (G ? (je & U) === U : (r & U) === U) {
                U !== 0 && U === hl && (io = !0), K !== null && (K = K.next = { lane: 0, tag: g.tag, payload: g.payload, callback: null, next: null });
                e: {
                    var W = e, oe = g;
                    U = s;
                    var Be = a;
                    switch (oe.tag) {
                        case 1:
                            if (W = oe.payload, typeof W == "function") {
                                X = W.call(Be, X, U);
                                break e;
                            }
                            X = W;
                            break e;
                        case 3: W.flags = W.flags & -65537 | 128;
                        case 0:
                            if (W = oe.payload, U = typeof W == "function" ? W.call(Be, X, U) : W, U == null)
                                break e;
                            X = p({}, X, U);
                            break e;
                        case 2: sa = !0;
                    }
                }
                U = g.callback, U !== null && (e.flags |= 64, G && (e.flags |= 8192), G = o.callbacks, G === null ? o.callbacks = [U] : G.push(U));
            }
            else
                G = { lane: U, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, K === null ? (B = K = G, C = X) : K = K.next = G, h |= U;
            if (g = g.next, g === null) {
                if (g = o.shared.pending, g === null)
                    break;
                G = g, g = G.next, G.next = null, o.lastBaseUpdate = G, o.shared.pending = null;
            }
        } while (!0);
        K === null && (C = X), o.baseState = C, o.firstBaseUpdate = B, o.lastBaseUpdate = K, d === null && (o.shared.lanes = 0), oa |= h, e.lanes = h, e.memoizedState = X;
    } }
    function nf(e, s) { if (typeof e != "function")
        throw Error(c(191, e)); e.call(s); }
    function rf(e, s) { var a = e.callbacks; if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
            nf(a[e], s); }
    var bl = ke(null), qr = ke(0);
    function cf(e, s) { e = Ls, ne(qr, e), ne(bl, s), Ls = e | s.baseLanes; }
    function co() { ne(qr, Ls), ne(bl, bl.current); }
    function oo() { Ls = qr.current, be(bl), be(qr); }
    var Rt = ke(null), $t = null;
    function na(e) { var s = e.alternate; ne(Fe, Fe.current & 1), ne(Rt, e), $t === null && (s === null || bl.current !== null || s.memoizedState !== null) && ($t = e); }
    function uo(e) { ne(Fe, Fe.current), ne(Rt, e), $t === null && ($t = e); }
    function of(e) { e.tag === 22 ? (ne(Fe, Fe.current), ne(Rt, e), $t === null && ($t = e)) : ra(); }
    function ra() { ne(Fe, Fe.current), ne(Rt, Rt.current); }
    function Bt(e) { be(Rt), $t === e && ($t = null), be(Fe); }
    var Fe = ke(0);
    function Lr(e) { for (var s = e; s !== null;) {
        if (s.tag === 13) {
            var a = s.memoizedState;
            if (a !== null && (a = a.dehydrated, a === null || gd(a) || bd(a)))
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
    var Ds = 0, he = null, ze = null, We = null, Ur = !1, yl = !1, Ua = !1, Hr = 0, yn = 0, vl = null, N0 = 0;
    function Ye() { throw Error(c(321)); }
    function mo(e, s) { if (s === null)
        return !1; for (var a = 0; a < s.length && a < e.length; a++)
        if (!_t(e[a], s[a]))
            return !1; return !0; }
    function fo(e, s, a, r, o, d) { return Ds = d, he = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, H.H = e === null || e.memoizedState === null ? Xf : To, Ua = !1, d = a(r, o), Ua = !1, yl && (d = uf(s, a, r, o)), df(e), d; }
    function df(e) { H.H = Nn; var s = ze !== null && ze.next !== null; if (Ds = 0, We = ze = he = null, Ur = !1, yn = 0, vl = null, s)
        throw Error(c(300)); e === null || et || (e = e.dependencies, e !== null && Dr(e) && (et = !0)); }
    function uf(e, s, a, r) { he = e; var o = 0; do {
        if (yl && (vl = null), yn = 0, yl = !1, 25 <= o)
            throw Error(c(301));
        if (o += 1, We = ze = null, e.updateQueue != null) {
            var d = e.updateQueue;
            d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
        }
        H.H = Zf, d = s(a, r);
    } while (yl); return d; }
    function w0() { var e = H.H, s = e.useState()[0]; return s = typeof s.then == "function" ? vn(s) : s, e = e.useState()[0], (ze !== null ? ze.memoizedState : null) !== e && (he.flags |= 1024), s; }
    function ho() { var e = Hr !== 0; return Hr = 0, e; }
    function xo(e, s, a) { s.updateQueue = e.updateQueue, s.flags &= -2053, e.lanes &= ~a; }
    function po(e) { if (Ur) {
        for (e = e.memoizedState; e !== null;) {
            var s = e.queue;
            s !== null && (s.pending = null), e = e.next;
        }
        Ur = !1;
    } Ds = 0, We = ze = he = null, yl = !1, yn = Hr = 0, vl = null; }
    function bt() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return We === null ? he.memoizedState = We = e : We = We.next = e, We; }
    function Je() { if (ze === null) {
        var e = he.alternate;
        e = e !== null ? e.memoizedState : null;
    }
    else
        e = ze.next; var s = We === null ? he.memoizedState : We.next; if (s !== null)
        We = s, ze = e;
    else {
        if (e === null)
            throw he.alternate === null ? Error(c(467)) : Error(c(310));
        ze = e, e = { memoizedState: ze.memoizedState, baseState: ze.baseState, baseQueue: ze.baseQueue, queue: ze.queue, next: null }, We === null ? he.memoizedState = We = e : We = We.next = e;
    } return We; }
    function Vr() { return { lastEffect: null, events: null, stores: null, memoCache: null }; }
    function vn(e) { var s = yn; return yn += 1, vl === null && (vl = []), e = ef(vl, e, s), s = he, (We === null ? s.memoizedState : We.next) === null && (s = s.alternate, H.H = s === null || s.memoizedState === null ? Xf : To), e; }
    function Gr(e) { if (e !== null && typeof e == "object") {
        if (typeof e.then == "function")
            return vn(e);
        if (e.$$typeof === q)
            return ut(e);
    } throw Error(c(438, String(e))); }
    function go(e) { var s = null, a = he.updateQueue; if (a !== null && (s = a.memoCache), s == null) {
        var r = he.alternate;
        r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (s = { data: r.data.map(function (o) { return o.slice(); }), index: 0 })));
    } if (s == null && (s = { data: [], index: 0 }), a === null && (a = Vr(), he.updateQueue = a), a.memoCache = s, a = s.data[s.index], a === void 0)
        for (a = s.data[s.index] = Array(e), r = 0; r < e; r++)
            a[r] = de; return s.index++, a; }
    function Ms(e, s) { return typeof s == "function" ? s(e) : s; }
    function Qr(e) { var s = Je(); return bo(s, ze, e); }
    function bo(e, s, a) { var r = e.queue; if (r === null)
        throw Error(c(311)); r.lastRenderedReducer = a; var o = e.baseQueue, d = r.pending; if (d !== null) {
        if (o !== null) {
            var h = o.next;
            o.next = d.next, d.next = h;
        }
        s.baseQueue = o = d, r.pending = null;
    } if (d = e.baseState, o === null)
        e.memoizedState = d;
    else {
        s = o.next;
        var g = h = null, C = null, B = s, K = !1;
        do {
            var X = B.lane & -536870913;
            if (X !== B.lane ? (je & X) === X : (Ds & X) === X) {
                var U = B.revertLane;
                if (U === 0)
                    C !== null && (C = C.next = { lane: 0, revertLane: 0, gesture: null, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), X === hl && (K = !0);
                else if ((Ds & U) === U) {
                    B = B.next, U === hl && (K = !0);
                    continue;
                }
                else
                    X = { lane: 0, revertLane: B.revertLane, gesture: null, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }, C === null ? (g = C = X, h = d) : C = C.next = X, he.lanes |= U, oa |= U;
                X = B.action, Ua && a(d, X), d = B.hasEagerState ? B.eagerState : a(d, X);
            }
            else
                U = { lane: X, revertLane: B.revertLane, gesture: B.gesture, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }, C === null ? (g = C = U, h = d) : C = C.next = U, he.lanes |= X, oa |= X;
            B = B.next;
        } while (B !== null && B !== s);
        if (C === null ? h = d : C.next = g, !_t(d, e.memoizedState) && (et = !0, K && (a = xl, a !== null)))
            throw a;
        e.memoizedState = d, e.baseState = h, e.baseQueue = C, r.lastRenderedState = d;
    } return o === null && (r.lanes = 0), [e.memoizedState, r.dispatch]; }
    function yo(e) { var s = Je(), a = s.queue; if (a === null)
        throw Error(c(311)); a.lastRenderedReducer = e; var r = a.dispatch, o = a.pending, d = s.memoizedState; if (o !== null) {
        a.pending = null;
        var h = o = o.next;
        do
            d = e(d, h.action), h = h.next;
        while (h !== o);
        _t(d, s.memoizedState) || (et = !0), s.memoizedState = d, s.baseQueue === null && (s.baseState = d), a.lastRenderedState = d;
    } return [d, r]; }
    function mf(e, s, a) { var r = he, o = Je(), d = we; if (d) {
        if (a === void 0)
            throw Error(c(407));
        a = a();
    }
    else
        a = s(); var h = !_t((ze || o).memoizedState, a); if (h && (o.memoizedState = a, et = !0), o = o.queue, No(xf.bind(null, r, o, e), [e]), o.getSnapshot !== s || h || We !== null && We.memoizedState.tag & 1) {
        if (r.flags |= 2048, jl(9, { destroy: void 0 }, hf.bind(null, r, o, a, s), null), qe === null)
            throw Error(c(349));
        d || (Ds & 127) !== 0 || ff(r, s, a);
    } return a; }
    function ff(e, s, a) { e.flags |= 16384, e = { getSnapshot: s, value: a }, s = he.updateQueue, s === null ? (s = Vr(), he.updateQueue = s, s.stores = [e]) : (a = s.stores, a === null ? s.stores = [e] : a.push(e)); }
    function hf(e, s, a, r) { s.value = a, s.getSnapshot = r, pf(s) && gf(e); }
    function xf(e, s, a) { return a(function () { pf(s) && gf(e); }); }
    function pf(e) { var s = e.getSnapshot; e = e.value; try {
        var a = s();
        return !_t(e, a);
    }
    catch {
        return !0;
    } }
    function gf(e) { var s = Da(e, 2); s !== null && kt(s, e, 2); }
    function vo(e) { var s = bt(); if (typeof e == "function") {
        var a = e;
        if (e = a(), Ua) {
            Js(!0);
            try {
                a();
            }
            finally {
                Js(!1);
            }
        }
    } return s.memoizedState = s.baseState = e, s.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ms, lastRenderedState: e }, s; }
    function bf(e, s, a, r) { return e.baseState = a, bo(e, ze, typeof r == "function" ? r : Ms); }
    function S0(e, s, a, r, o) { if (Xr(e))
        throw Error(c(485)); if (e = s.action, e !== null) {
        var d = { payload: o, action: e, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function (h) { d.listeners.push(h); } };
        H.T !== null ? a(!0) : d.isTransition = !1, r(d), a = s.pending, a === null ? (d.next = s.pending = d, yf(s, d)) : (d.next = a.next, s.pending = a.next = d);
    } }
    function yf(e, s) { var a = s.action, r = s.payload, o = e.state; if (s.isTransition) {
        var d = H.T, h = {};
        H.T = h;
        try {
            var g = a(o, r), C = H.S;
            C !== null && C(h, g), vf(e, s, g);
        }
        catch (B) {
            jo(e, s, B);
        }
        finally {
            d !== null && h.types !== null && (d.types = h.types), H.T = d;
        }
    }
    else
        try {
            d = a(o, r), vf(e, s, d);
        }
        catch (B) {
            jo(e, s, B);
        } }
    function vf(e, s, a) { a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function (r) { jf(e, s, r); }, function (r) { return jo(e, s, r); }) : jf(e, s, a); }
    function jf(e, s, a) { s.status = "fulfilled", s.value = a, Nf(s), e.state = a, s = e.pending, s !== null && (a = s.next, a === s ? e.pending = null : (a = a.next, s.next = a, yf(e, a))); }
    function jo(e, s, a) { var r = e.pending; if (e.pending = null, r !== null) {
        r = r.next;
        do
            s.status = "rejected", s.reason = a, Nf(s), s = s.next;
        while (s !== r);
    } e.action = null; }
    function Nf(e) { e = e.listeners; for (var s = 0; s < e.length; s++)
        (0, e[s])(); }
    function wf(e, s) { return s; }
    function Sf(e, s) { if (we) {
        var a = qe.formState;
        if (a !== null) {
            e: {
                var r = he;
                if (we) {
                    if (He) {
                        t: {
                            for (var o = He, d = Jt; o.nodeType !== 8;) {
                                if (!d) {
                                    o = null;
                                    break t;
                                }
                                if (o = Pt(o.nextSibling), o === null) {
                                    o = null;
                                    break t;
                                }
                            }
                            d = o.data, o = d === "F!" || d === "F" ? o : null;
                        }
                        if (o) {
                            He = Pt(o.nextSibling), r = o.data === "F!";
                            break e;
                        }
                    }
                    ea(r);
                }
                r = !1;
            }
            r && (s = a[0]);
        }
    } return a = bt(), a.memoizedState = a.baseState = s, r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: wf, lastRenderedState: s }, a.queue = r, a = Qf.bind(null, he, r), r.dispatch = a, r = vo(!1), d = Ao.bind(null, he, !1, r.queue), r = bt(), o = { state: s, dispatch: null, action: e, pending: null }, r.queue = o, a = S0.bind(null, he, o, d, a), o.dispatch = a, r.memoizedState = e, [s, a, !1]; }
    function Cf(e) { var s = Je(); return kf(s, ze, e); }
    function kf(e, s, a) { if (s = bo(e, s, wf)[0], e = Qr(Ms)[0], typeof s == "object" && s !== null && typeof s.then == "function")
        try {
            var r = vn(s);
        }
        catch (h) {
            throw h === pl ? _r : h;
        }
    else
        r = s; s = Je(); var o = s.queue, d = o.dispatch; return a !== s.memoizedState && (he.flags |= 2048, jl(9, { destroy: void 0 }, C0.bind(null, o, a), null)), [r, d, e]; }
    function C0(e, s) { e.action = s; }
    function Af(e) { var s = Je(), a = ze; if (a !== null)
        return kf(s, a, e); Je(), s = s.memoizedState, a = Je(); var r = a.queue.dispatch; return a.memoizedState = e, [s, r, !1]; }
    function jl(e, s, a, r) { return e = { tag: e, create: a, deps: r, inst: s, next: null }, s = he.updateQueue, s === null && (s = Vr(), he.updateQueue = s), a = s.lastEffect, a === null ? s.lastEffect = e.next = e : (r = a.next, a.next = e, e.next = r, s.lastEffect = e), e; }
    function Tf() { return Je().memoizedState; }
    function Kr(e, s, a, r) { var o = bt(); he.flags |= e, o.memoizedState = jl(1 | s, { destroy: void 0 }, a, r === void 0 ? null : r); }
    function Yr(e, s, a, r) { var o = Je(); r = r === void 0 ? null : r; var d = o.memoizedState.inst; ze !== null && r !== null && mo(r, ze.memoizedState.deps) ? o.memoizedState = jl(s, d, a, r) : (he.flags |= e, o.memoizedState = jl(1 | s, d, a, r)); }
    function Ef(e, s) { Kr(8390656, 8, e, s); }
    function No(e, s) { Yr(2048, 8, e, s); }
    function k0(e) { he.flags |= 4; var s = he.updateQueue; if (s === null)
        s = Vr(), he.updateQueue = s, s.events = [e];
    else {
        var a = s.events;
        a === null ? s.events = [e] : a.push(e);
    } }
    function Df(e) { var s = Je().memoizedState; return k0({ ref: s, nextImpl: e }), function () { if ((Me & 2) !== 0)
        throw Error(c(440)); return s.impl.apply(void 0, arguments); }; }
    function Mf(e, s) { return Yr(4, 2, e, s); }
    function Of(e, s) { return Yr(4, 4, e, s); }
    function _f(e, s) { if (typeof s == "function") {
        e = e();
        var a = s(e);
        return function () { typeof a == "function" ? a() : s(null); };
    } if (s != null)
        return e = e(), s.current = e, function () { s.current = null; }; }
    function zf(e, s, a) { a = a != null ? a.concat([e]) : null, Yr(4, 4, _f.bind(null, s, e), a); }
    function wo() { }
    function Rf(e, s) { var a = Je(); s = s === void 0 ? null : s; var r = a.memoizedState; return s !== null && mo(s, r[1]) ? r[0] : (a.memoizedState = [e, s], e); }
    function Bf(e, s) { var a = Je(); s = s === void 0 ? null : s; var r = a.memoizedState; if (s !== null && mo(s, r[1]))
        return r[0]; if (r = e(), Ua) {
        Js(!0);
        try {
            e();
        }
        finally {
            Js(!1);
        }
    } return a.memoizedState = [r, s], r; }
    function So(e, s, a) { return a === void 0 || (Ds & 1073741824) !== 0 && (je & 261930) === 0 ? e.memoizedState = s : (e.memoizedState = a, e = qh(), he.lanes |= e, oa |= e, a); }
    function qf(e, s, a, r) { return _t(a, s) ? a : bl.current !== null ? (e = So(e, a, r), _t(e, s) || (et = !0), e) : (Ds & 42) === 0 || (Ds & 1073741824) !== 0 && (je & 261930) === 0 ? (et = !0, e.memoizedState = a) : (e = qh(), he.lanes |= e, oa |= e, s); }
    function Lf(e, s, a, r, o) { var d = P.p; P.p = d !== 0 && 8 > d ? d : 8; var h = H.T, g = {}; H.T = g, Ao(e, !1, s, a); try {
        var C = o(), B = H.S;
        if (B !== null && B(g, C), C !== null && typeof C == "object" && typeof C.then == "function") {
            var K = j0(C, r);
            jn(e, s, K, Ut(e));
        }
        else
            jn(e, s, r, Ut(e));
    }
    catch (X) {
        jn(e, s, { then: function () { }, status: "rejected", reason: X }, Ut());
    }
    finally {
        P.p = d, h !== null && g.types !== null && (h.types = g.types), H.T = h;
    } }
    function A0() { }
    function Co(e, s, a, r) { if (e.tag !== 5)
        throw Error(c(476)); var o = Uf(e).queue; Lf(e, o, s, F, a === null ? A0 : function () { return Hf(e), a(r); }); }
    function Uf(e) { var s = e.memoizedState; if (s !== null)
        return s; s = { memoizedState: F, baseState: F, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ms, lastRenderedState: F }, next: null }; var a = {}; return s.next = { memoizedState: a, baseState: a, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ms, lastRenderedState: a }, next: null }, e.memoizedState = s, e = e.alternate, e !== null && (e.memoizedState = s), s; }
    function Hf(e) { var s = Uf(e); s.next === null && (s = e.alternate.memoizedState), jn(e, s.next.queue, {}, Ut()); }
    function ko() { return ut(Ln); }
    function Vf() { return Je().memoizedState; }
    function Gf() { return Je().memoizedState; }
    function T0(e) { for (var s = e.return; s !== null;) {
        switch (s.tag) {
            case 24:
            case 3:
                var a = Ut();
                e = aa(a);
                var r = la(s, e, a);
                r !== null && (kt(r, s, a), pn(r, s, a)), s = { cache: eo() }, e.payload = s;
                return;
        }
        s = s.return;
    } }
    function E0(e, s, a) { var r = Ut(); a = { lane: r, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }, Xr(e) ? Kf(s, a) : (a = Qc(e, s, a, r), a !== null && (kt(a, e, r), Yf(a, s, r))); }
    function Qf(e, s, a) { var r = Ut(); jn(e, s, a, r); }
    function jn(e, s, a, r) { var o = { lane: r, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }; if (Xr(e))
        Kf(s, o);
    else {
        var d = e.alternate;
        if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = s.lastRenderedReducer, d !== null))
            try {
                var h = s.lastRenderedState, g = d(h, a);
                if (o.hasEagerState = !0, o.eagerState = g, _t(g, h))
                    return kr(e, s, o, 0), qe === null && Cr(), !1;
            }
            catch { }
            finally { }
        if (a = Qc(e, s, o, r), a !== null)
            return kt(a, e, r), Yf(a, s, r), !0;
    } return !1; }
    function Ao(e, s, a, r) { if (r = { lane: 2, revertLane: nd(), gesture: null, action: r, hasEagerState: !1, eagerState: null, next: null }, Xr(e)) {
        if (s)
            throw Error(c(479));
    }
    else
        s = Qc(e, a, r, 2), s !== null && kt(s, e, 2); }
    function Xr(e) { var s = e.alternate; return e === he || s !== null && s === he; }
    function Kf(e, s) { yl = Ur = !0; var a = e.pending; a === null ? s.next = s : (s.next = a.next, a.next = s), e.pending = s; }
    function Yf(e, s, a) { if ((a & 4194048) !== 0) {
        var r = s.lanes;
        r &= e.pendingLanes, a |= r, s.lanes = a, Ju(e, a);
    } }
    var Nn = { readContext: ut, use: Gr, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useLayoutEffect: Ye, useInsertionEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useSyncExternalStore: Ye, useId: Ye, useHostTransitionStatus: Ye, useFormState: Ye, useActionState: Ye, useOptimistic: Ye, useMemoCache: Ye, useCacheRefresh: Ye };
    Nn.useEffectEvent = Ye;
    var Xf = { readContext: ut, use: Gr, useCallback: function (e, s) { return bt().memoizedState = [e, s === void 0 ? null : s], e; }, useContext: ut, useEffect: Ef, useImperativeHandle: function (e, s, a) { a = a != null ? a.concat([e]) : null, Kr(4194308, 4, _f.bind(null, s, e), a); }, useLayoutEffect: function (e, s) { return Kr(4194308, 4, e, s); }, useInsertionEffect: function (e, s) { Kr(4, 2, e, s); }, useMemo: function (e, s) { var a = bt(); s = s === void 0 ? null : s; var r = e(); if (Ua) {
            Js(!0);
            try {
                e();
            }
            finally {
                Js(!1);
            }
        } return a.memoizedState = [r, s], r; }, useReducer: function (e, s, a) { var r = bt(); if (a !== void 0) {
            var o = a(s);
            if (Ua) {
                Js(!0);
                try {
                    a(s);
                }
                finally {
                    Js(!1);
                }
            }
        }
        else
            o = s; return r.memoizedState = r.baseState = o, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: o }, r.queue = e, e = e.dispatch = E0.bind(null, he, e), [r.memoizedState, e]; }, useRef: function (e) { var s = bt(); return e = { current: e }, s.memoizedState = e; }, useState: function (e) { e = vo(e); var s = e.queue, a = Qf.bind(null, he, s); return s.dispatch = a, [e.memoizedState, a]; }, useDebugValue: wo, useDeferredValue: function (e, s) { var a = bt(); return So(a, e, s); }, useTransition: function () { var e = vo(!1); return e = Lf.bind(null, he, e.queue, !0, !1), bt().memoizedState = e, [!1, e]; }, useSyncExternalStore: function (e, s, a) { var r = he, o = bt(); if (we) {
            if (a === void 0)
                throw Error(c(407));
            a = a();
        }
        else {
            if (a = s(), qe === null)
                throw Error(c(349));
            (je & 127) !== 0 || ff(r, s, a);
        } o.memoizedState = a; var d = { value: a, getSnapshot: s }; return o.queue = d, Ef(xf.bind(null, r, d, e), [e]), r.flags |= 2048, jl(9, { destroy: void 0 }, hf.bind(null, r, d, a, s), null), a; }, useId: function () { var e = bt(), s = qe.identifierPrefix; if (we) {
            var a = hs, r = fs;
            a = (r & ~(1 << 32 - Ot(r) - 1)).toString(32) + a, s = "_" + s + "R_" + a, a = Hr++, 0 < a && (s += "H" + a.toString(32)), s += "_";
        }
        else
            a = N0++, s = "_" + s + "r_" + a.toString(32) + "_"; return e.memoizedState = s; }, useHostTransitionStatus: ko, useFormState: Sf, useActionState: Sf, useOptimistic: function (e) { var s = bt(); s.memoizedState = s.baseState = e; var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return s.queue = a, s = Ao.bind(null, he, !0, a), a.dispatch = s, [e, s]; }, useMemoCache: go, useCacheRefresh: function () { return bt().memoizedState = T0.bind(null, he); }, useEffectEvent: function (e) { var s = bt(), a = { impl: e }; return s.memoizedState = a, function () { if ((Me & 2) !== 0)
            throw Error(c(440)); return a.impl.apply(void 0, arguments); }; } }, To = { readContext: ut, use: Gr, useCallback: Rf, useContext: ut, useEffect: No, useImperativeHandle: zf, useInsertionEffect: Mf, useLayoutEffect: Of, useMemo: Bf, useReducer: Qr, useRef: Tf, useState: function () { return Qr(Ms); }, useDebugValue: wo, useDeferredValue: function (e, s) { var a = Je(); return qf(a, ze.memoizedState, e, s); }, useTransition: function () { var e = Qr(Ms)[0], s = Je().memoizedState; return [typeof e == "boolean" ? e : vn(e), s]; }, useSyncExternalStore: mf, useId: Vf, useHostTransitionStatus: ko, useFormState: Cf, useActionState: Cf, useOptimistic: function (e, s) { var a = Je(); return bf(a, ze, e, s); }, useMemoCache: go, useCacheRefresh: Gf };
    To.useEffectEvent = Df;
    var Zf = { readContext: ut, use: Gr, useCallback: Rf, useContext: ut, useEffect: No, useImperativeHandle: zf, useInsertionEffect: Mf, useLayoutEffect: Of, useMemo: Bf, useReducer: yo, useRef: Tf, useState: function () { return yo(Ms); }, useDebugValue: wo, useDeferredValue: function (e, s) { var a = Je(); return ze === null ? So(a, e, s) : qf(a, ze.memoizedState, e, s); }, useTransition: function () { var e = yo(Ms)[0], s = Je().memoizedState; return [typeof e == "boolean" ? e : vn(e), s]; }, useSyncExternalStore: mf, useId: Vf, useHostTransitionStatus: ko, useFormState: Af, useActionState: Af, useOptimistic: function (e, s) { var a = Je(); return ze !== null ? bf(a, ze, e, s) : (a.baseState = e, [e, a.queue.dispatch]); }, useMemoCache: go, useCacheRefresh: Gf };
    Zf.useEffectEvent = Df;
    function Eo(e, s, a, r) { s = e.memoizedState, a = a(r, s), a = a == null ? s : p({}, s, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a); }
    var Do = { enqueueSetState: function (e, s, a) { e = e._reactInternals; var r = Ut(), o = aa(r); o.payload = s, a != null && (o.callback = a), s = la(e, o, r), s !== null && (kt(s, e, r), pn(s, e, r)); }, enqueueReplaceState: function (e, s, a) { e = e._reactInternals; var r = Ut(), o = aa(r); o.tag = 1, o.payload = s, a != null && (o.callback = a), s = la(e, o, r), s !== null && (kt(s, e, r), pn(s, e, r)); }, enqueueForceUpdate: function (e, s) { e = e._reactInternals; var a = Ut(), r = aa(a); r.tag = 2, s != null && (r.callback = s), s = la(e, r, a), s !== null && (kt(s, e, a), pn(s, e, a)); } };
    function Ff(e, s, a, r, o, d, h) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, d, h) : s.prototype && s.prototype.isPureReactComponent ? !cn(a, r) || !cn(o, d) : !0; }
    function Jf(e, s, a, r) { e = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(a, r), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(a, r), s.state !== e && Do.enqueueReplaceState(s, s.state, null); }
    function Ha(e, s) { var a = s; if ("ref" in s) {
        a = {};
        for (var r in s)
            r !== "ref" && (a[r] = s[r]);
    } if (e = e.defaultProps) {
        a === s && (a = p({}, a));
        for (var o in e)
            a[o] === void 0 && (a[o] = e[o]);
    } return a; }
    function $f(e) { Sr(e); }
    function Pf(e) { console.error(e); }
    function If(e) { Sr(e); }
    function Zr(e, s) { try {
        var a = e.onUncaughtError;
        a(s.value, { componentStack: s.stack });
    }
    catch (r) {
        setTimeout(function () { throw r; });
    } }
    function Wf(e, s, a) { try {
        var r = e.onCaughtError;
        r(a.value, { componentStack: a.stack, errorBoundary: s.tag === 1 ? s.stateNode : null });
    }
    catch (o) {
        setTimeout(function () { throw o; });
    } }
    function Mo(e, s, a) { return a = aa(a), a.tag = 3, a.payload = { element: null }, a.callback = function () { Zr(e, s); }, a; }
    function eh(e) { return e = aa(e), e.tag = 3, e; }
    function th(e, s, a, r) { var o = a.type.getDerivedStateFromError; if (typeof o == "function") {
        var d = r.value;
        e.payload = function () { return o(d); }, e.callback = function () { Wf(s, a, r); };
    } var h = a.stateNode; h !== null && typeof h.componentDidCatch == "function" && (e.callback = function () { Wf(s, a, r), typeof o != "function" && (da === null ? da = new Set([this]) : da.add(this)); var g = r.stack; this.componentDidCatch(r.value, { componentStack: g !== null ? g : "" }); }); }
    function D0(e, s, a, r, o) { if (a.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
        if (s = a.alternate, s !== null && fl(s, a, o, !0), a = Rt.current, a !== null) {
            switch (a.tag) {
                case 31:
                case 13: return $t === null ? ni() : a.alternate === null && Xe === 0 && (Xe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, r === zr ? a.flags |= 16384 : (s = a.updateQueue, s === null ? a.updateQueue = new Set([r]) : s.add(r), sd(e, r, o)), !1;
                case 22: return a.flags |= 65536, r === zr ? a.flags |= 16384 : (s = a.updateQueue, s === null ? (s = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }, a.updateQueue = s) : (a = s.retryQueue, a === null ? s.retryQueue = new Set([r]) : a.add(r)), sd(e, r, o)), !1;
            }
            throw Error(c(435, a.tag));
        }
        return sd(e, r, o), ni(), !1;
    } if (we)
        return s = Rt.current, s !== null ? ((s.flags & 65536) === 0 && (s.flags |= 256), s.flags |= 65536, s.lanes = o, r !== Jc && (e = Error(c(422), { cause: r }), un(Xt(e, a)))) : (r !== Jc && (s = Error(c(423), { cause: r }), un(Xt(s, a))), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, r = Xt(r, a), o = Mo(e.stateNode, r, o), ro(e, o), Xe !== 4 && (Xe = 2)), !1; var d = Error(c(520), { cause: r }); if (d = Xt(d, a), Dn === null ? Dn = [d] : Dn.push(d), Xe !== 4 && (Xe = 2), s === null)
        return !0; r = Xt(r, a), a = s; do {
        switch (a.tag) {
            case 3: return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Mo(a.stateNode, r, e), ro(a, e), !1;
            case 1: if (s = a.type, d = a.stateNode, (a.flags & 128) === 0 && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (da === null || !da.has(d))))
                return a.flags |= 65536, o &= -o, a.lanes |= o, o = eh(o), th(o, e, a, r), ro(a, o), !1;
        }
        a = a.return;
    } while (a !== null); return !1; }
    var Oo = Error(c(461)), et = !1;
    function mt(e, s, a, r) { s.child = e === null ? lf(s, null, a, r) : La(s, e.child, a, r); }
    function sh(e, s, a, r, o) { a = a.render; var d = s.ref; if ("ref" in r) {
        var h = {};
        for (var g in r)
            g !== "ref" && (h[g] = r[g]);
    }
    else
        h = r; return za(s), r = fo(e, s, a, h, d, o), g = ho(), e !== null && !et ? (xo(e, s, o), Os(e, s, o)) : (we && g && Zc(s), s.flags |= 1, mt(e, s, r, o), s.child); }
    function ah(e, s, a, r, o) { if (e === null) {
        var d = a.type;
        return typeof d == "function" && !Kc(d) && d.defaultProps === void 0 && a.compare === null ? (s.tag = 15, s.type = d, lh(e, s, d, r, o)) : (e = Tr(a.type, null, r, s, s.mode, o), e.ref = s.ref, e.return = s, s.child = e);
    } if (d = e.child, !Ho(e, o)) {
        var h = d.memoizedProps;
        if (a = a.compare, a = a !== null ? a : cn, a(h, r) && e.ref === s.ref)
            return Os(e, s, o);
    } return s.flags |= 1, e = ks(d, r), e.ref = s.ref, e.return = s, s.child = e; }
    function lh(e, s, a, r, o) { if (e !== null) {
        var d = e.memoizedProps;
        if (cn(d, r) && e.ref === s.ref)
            if (et = !1, s.pendingProps = r = d, Ho(e, o))
                (e.flags & 131072) !== 0 && (et = !0);
            else
                return s.lanes = e.lanes, Os(e, s, o);
    } return _o(e, s, a, r, o); }
    function nh(e, s, a, r) { var o = r.children, d = e !== null ? e.memoizedState : null; if (e === null && s.stateNode === null && (s.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r.mode === "hidden") {
        if ((s.flags & 128) !== 0) {
            if (d = d !== null ? d.baseLanes | a : a, e !== null) {
                for (r = s.child = e.child, o = 0; r !== null;)
                    o = o | r.lanes | r.childLanes, r = r.sibling;
                r = o & ~d;
            }
            else
                r = 0, s.child = null;
            return rh(e, s, d, a, r);
        }
        if ((a & 536870912) !== 0)
            s.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Or(s, d !== null ? d.cachePool : null), d !== null ? cf(s, d) : co(), of(s);
        else
            return r = s.lanes = 536870912, rh(e, s, d !== null ? d.baseLanes | a : a, a, r);
    }
    else
        d !== null ? (Or(s, d.cachePool), cf(s, d), ra(), s.memoizedState = null) : (e !== null && Or(s, null), co(), ra()); return mt(e, s, o, a), s.child; }
    function wn(e, s) { return e !== null && e.tag === 22 || s.stateNode !== null || (s.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), s.sibling; }
    function rh(e, s, a, r, o) { var d = so(); return d = d === null ? null : { parent: Ie._currentValue, pool: d }, s.memoizedState = { baseLanes: a, cachePool: d }, e !== null && Or(s, null), co(), of(s), e !== null && fl(e, s, r, !0), s.childLanes = o, null; }
    function Fr(e, s) { return s = $r({ mode: s.mode, children: s.children }, e.mode), s.ref = e.ref, e.child = s, s.return = e, s; }
    function ih(e, s, a) { return La(s, e.child, null, a), e = Fr(s, s.pendingProps), e.flags |= 2, Bt(s), s.memoizedState = null, e; }
    function M0(e, s, a) { var r = s.pendingProps, o = (s.flags & 128) !== 0; if (s.flags &= -129, e === null) {
        if (we) {
            if (r.mode === "hidden")
                return e = Fr(s, r), s.lanes = 536870912, wn(null, e);
            if (uo(s), (e = He) ? (e = yx(e, Jt), e = e !== null && e.data === "&" ? e : null, e !== null && (s.memoizedState = { dehydrated: e, treeContext: Is !== null ? { id: fs, overflow: hs } : null, retryLane: 536870912, hydrationErrors: null }, a = Qm(e), a.return = s, s.child = a, dt = s, He = null)) : e = null, e === null)
                throw ea(s);
            return s.lanes = 536870912, null;
        }
        return Fr(s, r);
    } var d = e.memoizedState; if (d !== null) {
        var h = d.dehydrated;
        if (uo(s), o)
            if (s.flags & 256)
                s.flags &= -257, s = ih(e, s, a);
            else if (s.memoizedState !== null)
                s.child = e.child, s.flags |= 128, s = null;
            else
                throw Error(c(558));
        else if (et || fl(e, s, a, !1), o = (a & e.childLanes) !== 0, et || o) {
            if (r = qe, r !== null && (h = $u(r, a), h !== 0 && h !== d.retryLane))
                throw d.retryLane = h, Da(e, h), kt(r, e, h), Oo;
            ni(), s = ih(e, s, a);
        }
        else
            e = d.treeContext, He = Pt(h.nextSibling), dt = s, we = !0, Ws = null, Jt = !1, e !== null && Xm(s, e), s = Fr(s, r), s.flags |= 4096;
        return s;
    } return e = ks(e.child, { mode: r.mode, children: r.children }), e.ref = s.ref, s.child = e, e.return = s, e; }
    function Jr(e, s) { var a = s.ref; if (a === null)
        e !== null && e.ref !== null && (s.flags |= 4194816);
    else {
        if (typeof a != "function" && typeof a != "object")
            throw Error(c(284));
        (e === null || e.ref !== a) && (s.flags |= 4194816);
    } }
    function _o(e, s, a, r, o) { return za(s), a = fo(e, s, a, r, void 0, o), r = ho(), e !== null && !et ? (xo(e, s, o), Os(e, s, o)) : (we && r && Zc(s), s.flags |= 1, mt(e, s, a, o), s.child); }
    function ch(e, s, a, r, o, d) { return za(s), s.updateQueue = null, a = uf(s, r, a, o), df(e), r = ho(), e !== null && !et ? (xo(e, s, d), Os(e, s, d)) : (we && r && Zc(s), s.flags |= 1, mt(e, s, a, d), s.child); }
    function oh(e, s, a, r, o) { if (za(s), s.stateNode === null) {
        var d = ol, h = a.contextType;
        typeof h == "object" && h !== null && (d = ut(h)), d = new a(r, d), s.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Do, s.stateNode = d, d._reactInternals = s, d = s.stateNode, d.props = r, d.state = s.memoizedState, d.refs = {}, lo(s), h = a.contextType, d.context = typeof h == "object" && h !== null ? ut(h) : ol, d.state = s.memoizedState, h = a.getDerivedStateFromProps, typeof h == "function" && (Eo(s, a, h, r), d.state = s.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (h = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), h !== d.state && Do.enqueueReplaceState(d, d.state, null), bn(s, r, d, o), gn(), d.state = s.memoizedState), typeof d.componentDidMount == "function" && (s.flags |= 4194308), r = !0;
    }
    else if (e === null) {
        d = s.stateNode;
        var g = s.memoizedProps, C = Ha(a, g);
        d.props = C;
        var B = d.context, K = a.contextType;
        h = ol, typeof K == "object" && K !== null && (h = ut(K));
        var X = a.getDerivedStateFromProps;
        K = typeof X == "function" || typeof d.getSnapshotBeforeUpdate == "function", g = s.pendingProps !== g, K || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (g || B !== h) && Jf(s, d, r, h), sa = !1;
        var U = s.memoizedState;
        d.state = U, bn(s, r, d, o), gn(), B = s.memoizedState, g || U !== B || sa ? (typeof X == "function" && (Eo(s, a, X, r), B = s.memoizedState), (C = sa || Ff(s, a, C, r, U, B, h)) ? (K || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = r, s.memoizedState = B), d.props = r, d.state = B, d.context = h, r = C) : (typeof d.componentDidMount == "function" && (s.flags |= 4194308), r = !1);
    }
    else {
        d = s.stateNode, no(e, s), h = s.memoizedProps, K = Ha(a, h), d.props = K, X = s.pendingProps, U = d.context, B = a.contextType, C = ol, typeof B == "object" && B !== null && (C = ut(B)), g = a.getDerivedStateFromProps, (B = typeof g == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (h !== X || U !== C) && Jf(s, d, r, C), sa = !1, U = s.memoizedState, d.state = U, bn(s, r, d, o), gn();
        var G = s.memoizedState;
        h !== X || U !== G || sa || e !== null && e.dependencies !== null && Dr(e.dependencies) ? (typeof g == "function" && (Eo(s, a, g, r), G = s.memoizedState), (K = sa || Ff(s, a, K, r, U, G, C) || e !== null && e.dependencies !== null && Dr(e.dependencies)) ? (B || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, G, C), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, G, C)), typeof d.componentDidUpdate == "function" && (s.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || h === e.memoizedProps && U === e.memoizedState || (s.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && U === e.memoizedState || (s.flags |= 1024), s.memoizedProps = r, s.memoizedState = G), d.props = r, d.state = G, d.context = C, r = K) : (typeof d.componentDidUpdate != "function" || h === e.memoizedProps && U === e.memoizedState || (s.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && U === e.memoizedState || (s.flags |= 1024), r = !1);
    } return d = r, Jr(e, s), r = (s.flags & 128) !== 0, d || r ? (d = s.stateNode, a = r && typeof a.getDerivedStateFromError != "function" ? null : d.render(), s.flags |= 1, e !== null && r ? (s.child = La(s, e.child, null, o), s.child = La(s, null, a, o)) : mt(e, s, a, o), s.memoizedState = d.state, e = s.child) : e = Os(e, s, o), e; }
    function dh(e, s, a, r) { return Oa(), s.flags |= 256, mt(e, s, a, r), s.child; }
    var zo = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Ro(e) { return { baseLanes: e, cachePool: Im() }; }
    function Bo(e, s, a) { return e = e !== null ? e.childLanes & ~a : 0, s && (e |= Lt), e; }
    function uh(e, s, a) { var r = s.pendingProps, o = !1, d = (s.flags & 128) !== 0, h; if ((h = d) || (h = e !== null && e.memoizedState === null ? !1 : (Fe.current & 2) !== 0), h && (o = !0, s.flags &= -129), h = (s.flags & 32) !== 0, s.flags &= -33, e === null) {
        if (we) {
            if (o ? na(s) : ra(), (e = He) ? (e = yx(e, Jt), e = e !== null && e.data !== "&" ? e : null, e !== null && (s.memoizedState = { dehydrated: e, treeContext: Is !== null ? { id: fs, overflow: hs } : null, retryLane: 536870912, hydrationErrors: null }, a = Qm(e), a.return = s, s.child = a, dt = s, He = null)) : e = null, e === null)
                throw ea(s);
            return bd(e) ? s.lanes = 32 : s.lanes = 536870912, null;
        }
        var g = r.children;
        return r = r.fallback, o ? (ra(), o = s.mode, g = $r({ mode: "hidden", children: g }, o), r = Ma(r, o, a, null), g.return = s, r.return = s, g.sibling = r, s.child = g, r = s.child, r.memoizedState = Ro(a), r.childLanes = Bo(e, h, a), s.memoizedState = zo, wn(null, r)) : (na(s), qo(s, g));
    } var C = e.memoizedState; if (C !== null && (g = C.dehydrated, g !== null)) {
        if (d)
            s.flags & 256 ? (na(s), s.flags &= -257, s = Lo(e, s, a)) : s.memoizedState !== null ? (ra(), s.child = e.child, s.flags |= 128, s = null) : (ra(), g = r.fallback, o = s.mode, r = $r({ mode: "visible", children: r.children }, o), g = Ma(g, o, a, null), g.flags |= 2, r.return = s, g.return = s, r.sibling = g, s.child = r, La(s, e.child, null, a), r = s.child, r.memoizedState = Ro(a), r.childLanes = Bo(e, h, a), s.memoizedState = zo, s = wn(null, r));
        else if (na(s), bd(g)) {
            if (h = g.nextSibling && g.nextSibling.dataset, h)
                var B = h.dgst;
            h = B, r = Error(c(419)), r.stack = "", r.digest = h, un({ value: r, source: null, stack: null }), s = Lo(e, s, a);
        }
        else if (et || fl(e, s, a, !1), h = (a & e.childLanes) !== 0, et || h) {
            if (h = qe, h !== null && (r = $u(h, a), r !== 0 && r !== C.retryLane))
                throw C.retryLane = r, Da(e, r), kt(h, e, r), Oo;
            gd(g) || ni(), s = Lo(e, s, a);
        }
        else
            gd(g) ? (s.flags |= 192, s.child = e.child, s = null) : (e = C.treeContext, He = Pt(g.nextSibling), dt = s, we = !0, Ws = null, Jt = !1, e !== null && Xm(s, e), s = qo(s, r.children), s.flags |= 4096);
        return s;
    } return o ? (ra(), g = r.fallback, o = s.mode, C = e.child, B = C.sibling, r = ks(C, { mode: "hidden", children: r.children }), r.subtreeFlags = C.subtreeFlags & 65011712, B !== null ? g = ks(B, g) : (g = Ma(g, o, a, null), g.flags |= 2), g.return = s, r.return = s, r.sibling = g, s.child = r, wn(null, r), r = s.child, g = e.child.memoizedState, g === null ? g = Ro(a) : (o = g.cachePool, o !== null ? (C = Ie._currentValue, o = o.parent !== C ? { parent: C, pool: C } : o) : o = Im(), g = { baseLanes: g.baseLanes | a, cachePool: o }), r.memoizedState = g, r.childLanes = Bo(e, h, a), s.memoizedState = zo, wn(e.child, r)) : (na(s), a = e.child, e = a.sibling, a = ks(a, { mode: "visible", children: r.children }), a.return = s, a.sibling = null, e !== null && (h = s.deletions, h === null ? (s.deletions = [e], s.flags |= 16) : h.push(e)), s.child = a, s.memoizedState = null, a); }
    function qo(e, s) { return s = $r({ mode: "visible", children: s }, e.mode), s.return = e, e.child = s; }
    function $r(e, s) { return e = zt(22, e, null, s), e.lanes = 0, e; }
    function Lo(e, s, a) { return La(s, e.child, null, a), e = qo(s, s.pendingProps.children), e.flags |= 2, s.memoizedState = null, e; }
    function mh(e, s, a) { e.lanes |= s; var r = e.alternate; r !== null && (r.lanes |= s), Ic(e.return, s, a); }
    function Uo(e, s, a, r, o, d) { var h = e.memoizedState; h === null ? e.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: r, tail: a, tailMode: o, treeForkCount: d } : (h.isBackwards = s, h.rendering = null, h.renderingStartTime = 0, h.last = r, h.tail = a, h.tailMode = o, h.treeForkCount = d); }
    function fh(e, s, a) { var r = s.pendingProps, o = r.revealOrder, d = r.tail; r = r.children; var h = Fe.current, g = (h & 2) !== 0; if (g ? (h = h & 1 | 2, s.flags |= 128) : h &= 1, ne(Fe, h), mt(e, s, r, a), r = we ? dn : 0, !g && e !== null && (e.flags & 128) !== 0)
        e: for (e = s.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && mh(e, a, s);
            else if (e.tag === 19)
                mh(e, a, s);
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
                e = a.alternate, e !== null && Lr(e) === null && (o = a), a = a.sibling;
            a = o, a === null ? (o = s.child, s.child = null) : (o = a.sibling, a.sibling = null), Uo(s, !1, o, a, d, r);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (a = null, o = s.child, s.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Lr(e) === null) {
                    s.child = o;
                    break;
                }
                e = o.sibling, o.sibling = a, a = o, o = e;
            }
            Uo(s, !0, a, null, d, r);
            break;
        case "together":
            Uo(s, !1, null, null, void 0, r);
            break;
        default: s.memoizedState = null;
    } return s.child; }
    function Os(e, s, a) { if (e !== null && (s.dependencies = e.dependencies), oa |= s.lanes, (a & s.childLanes) === 0)
        if (e !== null) {
            if (fl(e, s, a, !1), (a & s.childLanes) === 0)
                return null;
        }
        else
            return null; if (e !== null && s.child !== e.child)
        throw Error(c(153)); if (s.child !== null) {
        for (e = s.child, a = ks(e, e.pendingProps), s.child = a, a.return = s; e.sibling !== null;)
            e = e.sibling, a = a.sibling = ks(e, e.pendingProps), a.return = s;
        a.sibling = null;
    } return s.child; }
    function Ho(e, s) { return (e.lanes & s) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Dr(e))); }
    function O0(e, s, a) { switch (s.tag) {
        case 3:
            wa(s, s.stateNode.containerInfo), ta(s, Ie, e.memoizedState.cache), Oa();
            break;
        case 27:
        case 5:
            Xs(s);
            break;
        case 4:
            wa(s, s.stateNode.containerInfo);
            break;
        case 10:
            ta(s, s.type, s.memoizedProps.value);
            break;
        case 31:
            if (s.memoizedState !== null)
                return s.flags |= 128, uo(s), null;
            break;
        case 13:
            var r = s.memoizedState;
            if (r !== null)
                return r.dehydrated !== null ? (na(s), s.flags |= 128, null) : (a & s.child.childLanes) !== 0 ? uh(e, s, a) : (na(s), e = Os(e, s, a), e !== null ? e.sibling : null);
            na(s);
            break;
        case 19:
            var o = (e.flags & 128) !== 0;
            if (r = (a & s.childLanes) !== 0, r || (fl(e, s, a, !1), r = (a & s.childLanes) !== 0), o) {
                if (r)
                    return fh(e, s, a);
                s.flags |= 128;
            }
            if (o = s.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ne(Fe, Fe.current), r)
                break;
            return null;
        case 22: return s.lanes = 0, nh(e, s, a, s.pendingProps);
        case 24: ta(s, Ie, e.memoizedState.cache);
    } return Os(e, s, a); }
    function hh(e, s, a) { if (e !== null)
        if (e.memoizedProps !== s.pendingProps)
            et = !0;
        else {
            if (!Ho(e, a) && (s.flags & 128) === 0)
                return et = !1, O0(e, s, a);
            et = (e.flags & 131072) !== 0;
        }
    else
        et = !1, we && (s.flags & 1048576) !== 0 && Ym(s, dn, s.index); switch (s.lanes = 0, s.tag) {
        case 16:
            e: {
                var r = s.pendingProps;
                if (e = Ba(s.elementType), s.type = e, typeof e == "function")
                    Kc(e) ? (r = Ha(e, r), s.tag = 1, s = oh(null, s, e, r, a)) : (s.tag = 0, s = _o(null, s, e, r, a));
                else {
                    if (e != null) {
                        var o = e.$$typeof;
                        if (o === Z) {
                            s.tag = 11, s = sh(null, s, e, r, a);
                            break e;
                        }
                        else if (o === y) {
                            s.tag = 14, s = ah(null, s, e, r, a);
                            break e;
                        }
                    }
                    throw s = ee(e) || e, Error(c(306, s, ""));
                }
            }
            return s;
        case 0: return _o(e, s, s.type, s.pendingProps, a);
        case 1: return r = s.type, o = Ha(r, s.pendingProps), oh(e, s, r, o, a);
        case 3:
            e: {
                if (wa(s, s.stateNode.containerInfo), e === null)
                    throw Error(c(387));
                r = s.pendingProps;
                var d = s.memoizedState;
                o = d.element, no(e, s), bn(s, r, null, a);
                var h = s.memoizedState;
                if (r = h.cache, ta(s, Ie, r), r !== d.cache && Wc(s, [Ie], a, !0), gn(), r = h.element, d.isDehydrated)
                    if (d = { element: r, isDehydrated: !1, cache: h.cache }, s.updateQueue.baseState = d, s.memoizedState = d, s.flags & 256) {
                        s = dh(e, s, r, a);
                        break e;
                    }
                    else if (r !== o) {
                        o = Xt(Error(c(424)), s), un(o), s = dh(e, s, r, a);
                        break e;
                    }
                    else {
                        switch (e = s.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                        }
                        for (He = Pt(e.firstChild), dt = s, we = !0, Ws = null, Jt = !0, a = lf(s, null, r, a), s.child = a; a;)
                            a.flags = a.flags & -3 | 4096, a = a.sibling;
                    }
                else {
                    if (Oa(), r === o) {
                        s = Os(e, s, a);
                        break e;
                    }
                    mt(e, s, r, a);
                }
                s = s.child;
            }
            return s;
        case 26: return Jr(e, s), e === null ? (a = Cx(s.type, null, s.pendingProps, null)) ? s.memoizedState = a : we || (a = s.type, e = s.pendingProps, r = mi(lt.current).createElement(a), r[ot] = s, r[vt] = e, ft(r, a, e), it(r), s.stateNode = r) : s.memoizedState = Cx(s.type, e.memoizedProps, s.pendingProps, e.memoizedState), null;
        case 27: return Xs(s), e === null && we && (r = s.stateNode = Nx(s.type, s.pendingProps, lt.current), dt = s, Jt = !0, o = He, ha(s.type) ? (yd = o, He = Pt(r.firstChild)) : He = o), mt(e, s, s.pendingProps.children, a), Jr(e, s), e === null && (s.flags |= 4194304), s.child;
        case 5: return e === null && we && ((o = r = He) && (r = cy(r, s.type, s.pendingProps, Jt), r !== null ? (s.stateNode = r, dt = s, He = Pt(r.firstChild), Jt = !1, o = !0) : o = !1), o || ea(s)), Xs(s), o = s.type, d = s.pendingProps, h = e !== null ? e.memoizedProps : null, r = d.children, hd(o, d) ? r = null : h !== null && hd(o, h) && (s.flags |= 32), s.memoizedState !== null && (o = fo(e, s, w0, null, null, a), Ln._currentValue = o), Jr(e, s), mt(e, s, r, a), s.child;
        case 6: return e === null && we && ((e = a = He) && (a = oy(a, s.pendingProps, Jt), a !== null ? (s.stateNode = a, dt = s, He = null, e = !0) : e = !1), e || ea(s)), null;
        case 13: return uh(e, s, a);
        case 4: return wa(s, s.stateNode.containerInfo), r = s.pendingProps, e === null ? s.child = La(s, null, r, a) : mt(e, s, r, a), s.child;
        case 11: return sh(e, s, s.type, s.pendingProps, a);
        case 7: return mt(e, s, s.pendingProps, a), s.child;
        case 8: return mt(e, s, s.pendingProps.children, a), s.child;
        case 12: return mt(e, s, s.pendingProps.children, a), s.child;
        case 10: return r = s.pendingProps, ta(s, s.type, r.value), mt(e, s, r.children, a), s.child;
        case 9: return o = s.type._context, r = s.pendingProps.children, za(s), o = ut(o), r = r(o), s.flags |= 1, mt(e, s, r, a), s.child;
        case 14: return ah(e, s, s.type, s.pendingProps, a);
        case 15: return lh(e, s, s.type, s.pendingProps, a);
        case 19: return fh(e, s, a);
        case 31: return M0(e, s, a);
        case 22: return nh(e, s, a, s.pendingProps);
        case 24: return za(s), r = ut(Ie), e === null ? (o = so(), o === null && (o = qe, d = eo(), o.pooledCache = d, d.refCount++, d !== null && (o.pooledCacheLanes |= a), o = d), s.memoizedState = { parent: r, cache: o }, lo(s), ta(s, Ie, o)) : ((e.lanes & a) !== 0 && (no(e, s), bn(s, null, null, a), gn()), o = e.memoizedState, d = s.memoizedState, o.parent !== r ? (o = { parent: r, cache: r }, s.memoizedState = o, s.lanes === 0 && (s.memoizedState = s.updateQueue.baseState = o), ta(s, Ie, r)) : (r = d.cache, ta(s, Ie, r), r !== o.cache && Wc(s, [Ie], a, !0))), mt(e, s, s.pendingProps.children, a), s.child;
        case 29: throw s.pendingProps;
    } throw Error(c(156, s.tag)); }
    function _s(e) { e.flags |= 4; }
    function Vo(e, s, a, r, o) { if ((s = (e.mode & 32) !== 0) && (s = !1), s) {
        if (e.flags |= 16777216, (o & 335544128) === o)
            if (e.stateNode.complete)
                e.flags |= 8192;
            else if (Vh())
                e.flags |= 8192;
            else
                throw qa = zr, ao;
    }
    else
        e.flags &= -16777217; }
    function xh(e, s) { if (s.type !== "stylesheet" || (s.state.loading & 4) !== 0)
        e.flags &= -16777217;
    else if (e.flags |= 16777216, !Dx(s))
        if (Vh())
            e.flags |= 8192;
        else
            throw qa = zr, ao; }
    function Pr(e, s) { s !== null && (e.flags |= 4), e.flags & 16384 && (s = e.tag !== 22 ? Zu() : 536870912, e.lanes |= s, Cl |= s); }
    function Sn(e, s) { if (!we)
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
    function Ve(e) { var s = e.alternate !== null && e.alternate.child === e.child, a = 0, r = 0; if (s)
        for (var o = e.child; o !== null;)
            a |= o.lanes | o.childLanes, r |= o.subtreeFlags & 65011712, r |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;)
            a |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling; return e.subtreeFlags |= r, e.childLanes = a, s; }
    function _0(e, s, a) { var r = s.pendingProps; switch (Fc(s), s.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14: return Ve(s), null;
        case 1: return Ve(s), null;
        case 3: return a = s.stateNode, r = null, e !== null && (r = e.memoizedState.cache), s.memoizedState.cache !== r && (s.flags |= 2048), Es(Ie), as(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ml(s) ? _s(s) : e === null || e.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, $c())), Ve(s), null;
        case 26:
            var o = s.type, d = s.memoizedState;
            return e === null ? (_s(s), d !== null ? (Ve(s), xh(s, d)) : (Ve(s), Vo(s, o, null, r, a))) : d ? d !== e.memoizedState ? (_s(s), Ve(s), xh(s, d)) : (Ve(s), s.flags &= -16777217) : (e = e.memoizedProps, e !== r && _s(s), Ve(s), Vo(s, o, e, r, a)), null;
        case 27:
            if (Zs(s), a = lt.current, o = s.type, e !== null && s.stateNode != null)
                e.memoizedProps !== r && _s(s);
            else {
                if (!r) {
                    if (s.stateNode === null)
                        throw Error(c(166));
                    return Ve(s), null;
                }
                e = me.current, ml(s) ? Zm(s) : (e = Nx(o, r, a), s.stateNode = e, _s(s));
            }
            return Ve(s), null;
        case 5:
            if (Zs(s), o = s.type, e !== null && s.stateNode != null)
                e.memoizedProps !== r && _s(s);
            else {
                if (!r) {
                    if (s.stateNode === null)
                        throw Error(c(166));
                    return Ve(s), null;
                }
                if (d = me.current, ml(s))
                    Zm(s);
                else {
                    var h = mi(lt.current);
                    switch (d) {
                        case 1:
                            d = h.createElementNS("http://www.w3.org/2000/svg", o);
                            break;
                        case 2:
                            d = h.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                            break;
                        default: switch (o) {
                            case "svg":
                                d = h.createElementNS("http://www.w3.org/2000/svg", o);
                                break;
                            case "math":
                                d = h.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                                break;
                            case "script":
                                d = h.createElement("div"), d.innerHTML = "<script><\/script>", d = d.removeChild(d.firstChild);
                                break;
                            case "select":
                                d = typeof r.is == "string" ? h.createElement("select", { is: r.is }) : h.createElement("select"), r.multiple ? d.multiple = !0 : r.size && (d.size = r.size);
                                break;
                            default: d = typeof r.is == "string" ? h.createElement(o, { is: r.is }) : h.createElement(o);
                        }
                    }
                    d[ot] = s, d[vt] = r;
                    e: for (h = s.child; h !== null;) {
                        if (h.tag === 5 || h.tag === 6)
                            d.appendChild(h.stateNode);
                        else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                            h.child.return = h, h = h.child;
                            continue;
                        }
                        if (h === s)
                            break e;
                        for (; h.sibling === null;) {
                            if (h.return === null || h.return === s)
                                break e;
                            h = h.return;
                        }
                        h.sibling.return = h.return, h = h.sibling;
                    }
                    s.stateNode = d;
                    e: switch (ft(d, o, r), o) {
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
            return Ve(s), Vo(s, s.type, e === null ? null : e.memoizedProps, s.pendingProps, a), null;
        case 6:
            if (e && s.stateNode != null)
                e.memoizedProps !== r && _s(s);
            else {
                if (typeof r != "string" && s.stateNode === null)
                    throw Error(c(166));
                if (e = lt.current, ml(s)) {
                    if (e = s.stateNode, a = s.memoizedProps, r = null, o = dt, o !== null)
                        switch (o.tag) {
                            case 27:
                            case 5: r = o.memoizedProps;
                        }
                    e[ot] = s, e = !!(e.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || ux(e.nodeValue, a)), e || ea(s, !0);
                }
                else
                    e = mi(e).createTextNode(r), e[ot] = s, s.stateNode = e;
            }
            return Ve(s), null;
        case 31:
            if (a = s.memoizedState, e === null || e.memoizedState !== null) {
                if (r = ml(s), a !== null) {
                    if (e === null) {
                        if (!r)
                            throw Error(c(318));
                        if (e = s.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                            throw Error(c(557));
                        e[ot] = s;
                    }
                    else
                        Oa(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
                    Ve(s), e = !1;
                }
                else
                    a = $c(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
                if (!e)
                    return s.flags & 256 ? (Bt(s), s) : (Bt(s), null);
                if ((s.flags & 128) !== 0)
                    throw Error(c(558));
            }
            return Ve(s), null;
        case 13:
            if (r = s.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (o = ml(s), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(c(318));
                        if (o = s.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                            throw Error(c(317));
                        o[ot] = s;
                    }
                    else
                        Oa(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
                    Ve(s), o = !1;
                }
                else
                    o = $c(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
                if (!o)
                    return s.flags & 256 ? (Bt(s), s) : (Bt(s), null);
            }
            return Bt(s), (s.flags & 128) !== 0 ? (s.lanes = a, s) : (a = r !== null, e = e !== null && e.memoizedState !== null, a && (r = s.child, o = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (o = r.alternate.memoizedState.cachePool.pool), d = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (d = r.memoizedState.cachePool.pool), d !== o && (r.flags |= 2048)), a !== e && a && (s.child.flags |= 8192), Pr(s, s.updateQueue), Ve(s), null);
        case 4: return as(), e === null && od(s.stateNode.containerInfo), Ve(s), null;
        case 10: return Es(s.type), Ve(s), null;
        case 19:
            if (be(Fe), r = s.memoizedState, r === null)
                return Ve(s), null;
            if (o = (s.flags & 128) !== 0, d = r.rendering, d === null)
                if (o)
                    Sn(r, !1);
                else {
                    if (Xe !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = s.child; e !== null;) {
                            if (d = Lr(e), d !== null) {
                                for (s.flags |= 128, Sn(r, !1), e = d.updateQueue, s.updateQueue = e, Pr(s, e), s.subtreeFlags = 0, e = a, a = s.child; a !== null;)
                                    Gm(a, e), a = a.sibling;
                                return ne(Fe, Fe.current & 1 | 2), we && As(s, r.treeForkCount), s.child;
                            }
                            e = e.sibling;
                        }
                    r.tail !== null && Dt() > si && (s.flags |= 128, o = !0, Sn(r, !1), s.lanes = 4194304);
                }
            else {
                if (!o)
                    if (e = Lr(d), e !== null) {
                        if (s.flags |= 128, o = !0, e = e.updateQueue, s.updateQueue = e, Pr(s, e), Sn(r, !0), r.tail === null && r.tailMode === "hidden" && !d.alternate && !we)
                            return Ve(s), null;
                    }
                    else
                        2 * Dt() - r.renderingStartTime > si && a !== 536870912 && (s.flags |= 128, o = !0, Sn(r, !1), s.lanes = 4194304);
                r.isBackwards ? (d.sibling = s.child, s.child = d) : (e = r.last, e !== null ? e.sibling = d : s.child = d, r.last = d);
            }
            return r.tail !== null ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Dt(), e.sibling = null, a = Fe.current, ne(Fe, o ? a & 1 | 2 : a & 1), we && As(s, r.treeForkCount), e) : (Ve(s), null);
        case 22:
        case 23: return Bt(s), oo(), r = s.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (s.flags |= 8192) : r && (s.flags |= 8192), r ? (a & 536870912) !== 0 && (s.flags & 128) === 0 && (Ve(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : Ve(s), a = s.updateQueue, a !== null && Pr(s, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), r = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (r = s.memoizedState.cachePool.pool), r !== a && (s.flags |= 2048), e !== null && be(Ra), null;
        case 24: return a = null, e !== null && (a = e.memoizedState.cache), s.memoizedState.cache !== a && (s.flags |= 2048), Es(Ie), Ve(s), null;
        case 25: return null;
        case 30: return null;
    } throw Error(c(156, s.tag)); }
    function z0(e, s) { switch (Fc(s), s.tag) {
        case 1: return e = s.flags, e & 65536 ? (s.flags = e & -65537 | 128, s) : null;
        case 3: return Es(Ie), as(), e = s.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (s.flags = e & -65537 | 128, s) : null;
        case 26:
        case 27:
        case 5: return Zs(s), null;
        case 31:
            if (s.memoizedState !== null) {
                if (Bt(s), s.alternate === null)
                    throw Error(c(340));
                Oa();
            }
            return e = s.flags, e & 65536 ? (s.flags = e & -65537 | 128, s) : null;
        case 13:
            if (Bt(s), e = s.memoizedState, e !== null && e.dehydrated !== null) {
                if (s.alternate === null)
                    throw Error(c(340));
                Oa();
            }
            return e = s.flags, e & 65536 ? (s.flags = e & -65537 | 128, s) : null;
        case 19: return be(Fe), null;
        case 4: return as(), null;
        case 10: return Es(s.type), null;
        case 22:
        case 23: return Bt(s), oo(), e !== null && be(Ra), e = s.flags, e & 65536 ? (s.flags = e & -65537 | 128, s) : null;
        case 24: return Es(Ie), null;
        case 25: return null;
        default: return null;
    } }
    function ph(e, s) { switch (Fc(s), s.tag) {
        case 3:
            Es(Ie), as();
            break;
        case 26:
        case 27:
        case 5:
            Zs(s);
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
            be(Fe);
            break;
        case 10:
            Es(s.type);
            break;
        case 22:
        case 23:
            Bt(s), oo(), e !== null && be(Ra);
            break;
        case 24: Es(Ie);
    } }
    function Cn(e, s) { try {
        var a = s.updateQueue, r = a !== null ? a.lastEffect : null;
        if (r !== null) {
            var o = r.next;
            a = o;
            do {
                if ((a.tag & e) === e) {
                    r = void 0;
                    var d = a.create, h = a.inst;
                    r = d(), h.destroy = r;
                }
                a = a.next;
            } while (a !== o);
        }
    }
    catch (g) {
        _e(s, s.return, g);
    } }
    function ia(e, s, a) { try {
        var r = s.updateQueue, o = r !== null ? r.lastEffect : null;
        if (o !== null) {
            var d = o.next;
            r = d;
            do {
                if ((r.tag & e) === e) {
                    var h = r.inst, g = h.destroy;
                    if (g !== void 0) {
                        h.destroy = void 0, o = s;
                        var C = a, B = g;
                        try {
                            B();
                        }
                        catch (K) {
                            _e(o, C, K);
                        }
                    }
                }
                r = r.next;
            } while (r !== d);
        }
    }
    catch (K) {
        _e(s, s.return, K);
    } }
    function gh(e) { var s = e.updateQueue; if (s !== null) {
        var a = e.stateNode;
        try {
            rf(s, a);
        }
        catch (r) {
            _e(e, e.return, r);
        }
    } }
    function bh(e, s, a) { a.props = Ha(e.type, e.memoizedProps), a.state = e.memoizedState; try {
        a.componentWillUnmount();
    }
    catch (r) {
        _e(e, s, r);
    } }
    function kn(e, s) { try {
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
        _e(e, s, o);
    } }
    function xs(e, s) { var a = e.ref, r = e.refCleanup; if (a !== null)
        if (typeof r == "function")
            try {
                r();
            }
            catch (o) {
                _e(e, s, o);
            }
            finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
        else if (typeof a == "function")
            try {
                a(null);
            }
            catch (o) {
                _e(e, s, o);
            }
        else
            a.current = null; }
    function yh(e) { var s = e.type, a = e.memoizedProps, r = e.stateNode; try {
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
        _e(e, e.return, o);
    } }
    function Go(e, s, a) { try {
        var r = e.stateNode;
        sy(r, e.type, a, s), r[vt] = s;
    }
    catch (o) {
        _e(e, e.return, o);
    } }
    function vh(e) { return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ha(e.type) || e.tag === 4; }
    function Qo(e) { e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || vh(e.return))
                return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.tag === 27 && ha(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
            return e.stateNode;
    } }
    function Ko(e, s, a) { var r = e.tag; if (r === 5 || r === 6)
        e = e.stateNode, s ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, s) : (s = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, s.appendChild(e), a = a._reactRootContainer, a != null || s.onclick !== null || (s.onclick = Ss));
    else if (r !== 4 && (r === 27 && ha(e.type) && (a = e.stateNode, s = null), e = e.child, e !== null))
        for (Ko(e, s, a), e = e.sibling; e !== null;)
            Ko(e, s, a), e = e.sibling; }
    function Ir(e, s, a) { var r = e.tag; if (r === 5 || r === 6)
        e = e.stateNode, s ? a.insertBefore(e, s) : a.appendChild(e);
    else if (r !== 4 && (r === 27 && ha(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (Ir(e, s, a), e = e.sibling; e !== null;)
            Ir(e, s, a), e = e.sibling; }
    function jh(e) { var s = e.stateNode, a = e.memoizedProps; try {
        for (var r = e.type, o = s.attributes; o.length;)
            s.removeAttributeNode(o[0]);
        ft(s, r, a), s[ot] = e, s[vt] = a;
    }
    catch (d) {
        _e(e, e.return, d);
    } }
    var zs = !1, tt = !1, Yo = !1, Nh = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
    function R0(e, s) { if (e = e.containerInfo, md = yi, e = _m(e), qc(e)) {
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
                    var h = 0, g = -1, C = -1, B = 0, K = 0, X = e, U = null;
                    t: for (;;) {
                        for (var G; X !== a || o !== 0 && X.nodeType !== 3 || (g = h + o), X !== d || r !== 0 && X.nodeType !== 3 || (C = h + r), X.nodeType === 3 && (h += X.nodeValue.length), (G = X.firstChild) !== null;)
                            U = X, X = G;
                        for (;;) {
                            if (X === e)
                                break t;
                            if (U === a && ++B === o && (g = h), U === d && ++K === r && (C = h), (G = X.nextSibling) !== null)
                                break;
                            X = U, U = X.parentNode;
                        }
                        X = G;
                    }
                    a = g === -1 || C === -1 ? null : { start: g, end: C };
                }
                else
                    a = null;
            }
        a = a || { start: 0, end: 0 };
    }
    else
        a = null; for (fd = { focusedElem: e, selectionRange: a }, yi = !1, ct = s; ct !== null;)
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
                                var W = Ha(a.type, o);
                                e = r.getSnapshotBeforeUpdate(W, d), r.__reactInternalSnapshotBeforeUpdate = e;
                            }
                            catch (oe) {
                                _e(a, a.return, oe);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = s.stateNode.containerInfo, a = e.nodeType, a === 9)
                                pd(e);
                            else if (a === 1)
                                switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        pd(e);
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
    function wh(e, s, a) { var r = a.flags; switch (a.tag) {
        case 0:
        case 11:
        case 15:
            Bs(e, a), r & 4 && Cn(5, a);
            break;
        case 1:
            if (Bs(e, a), r & 4)
                if (e = a.stateNode, s === null)
                    try {
                        e.componentDidMount();
                    }
                    catch (h) {
                        _e(a, a.return, h);
                    }
                else {
                    var o = Ha(a.type, s.memoizedProps);
                    s = s.memoizedState;
                    try {
                        e.componentDidUpdate(o, s, e.__reactInternalSnapshotBeforeUpdate);
                    }
                    catch (h) {
                        _e(a, a.return, h);
                    }
                }
            r & 64 && gh(a), r & 512 && kn(a, a.return);
            break;
        case 3:
            if (Bs(e, a), r & 64 && (e = a.updateQueue, e !== null)) {
                if (s = null, a.child !== null)
                    switch (a.child.tag) {
                        case 27:
                        case 5:
                            s = a.child.stateNode;
                            break;
                        case 1: s = a.child.stateNode;
                    }
                try {
                    rf(e, s);
                }
                catch (h) {
                    _e(a, a.return, h);
                }
            }
            break;
        case 27: s === null && r & 4 && jh(a);
        case 26:
        case 5:
            Bs(e, a), s === null && r & 4 && yh(a), r & 512 && kn(a, a.return);
            break;
        case 12:
            Bs(e, a);
            break;
        case 31:
            Bs(e, a), r & 4 && kh(e, a);
            break;
        case 13:
            Bs(e, a), r & 4 && Ah(e, a), r & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = K0.bind(null, a), dy(e, a))));
            break;
        case 22:
            if (r = a.memoizedState !== null || zs, !r) {
                s = s !== null && s.memoizedState !== null || tt, o = zs;
                var d = tt;
                zs = r, (tt = s) && !d ? qs(e, a, (a.subtreeFlags & 8772) !== 0) : Bs(e, a), zs = o, tt = d;
            }
            break;
        case 30: break;
        default: Bs(e, a);
    } }
    function Sh(e) { var s = e.alternate; s !== null && (e.alternate = null, Sh(s)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (s = e.stateNode, s !== null && vc(s)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
    var Ge = null, Nt = !1;
    function Rs(e, s, a) { for (a = a.child; a !== null;)
        Ch(e, s, a), a = a.sibling; }
    function Ch(e, s, a) { if (Mt && typeof Mt.onCommitFiberUnmount == "function")
        try {
            Mt.onCommitFiberUnmount(Jl, a);
        }
        catch { } switch (a.tag) {
        case 26:
            tt || xs(a, s), Rs(e, s, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
            break;
        case 27:
            tt || xs(a, s);
            var r = Ge, o = Nt;
            ha(a.type) && (Ge = a.stateNode, Nt = !1), Rs(e, s, a), Rn(a.stateNode), Ge = r, Nt = o;
            break;
        case 5: tt || xs(a, s);
        case 6:
            if (r = Ge, o = Nt, Ge = null, Rs(e, s, a), Ge = r, Nt = o, Ge !== null)
                if (Nt)
                    try {
                        (Ge.nodeType === 9 ? Ge.body : Ge.nodeName === "HTML" ? Ge.ownerDocument.body : Ge).removeChild(a.stateNode);
                    }
                    catch (d) {
                        _e(a, s, d);
                    }
                else
                    try {
                        Ge.removeChild(a.stateNode);
                    }
                    catch (d) {
                        _e(a, s, d);
                    }
            break;
        case 18:
            Ge !== null && (Nt ? (e = Ge, gx(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), _l(e)) : gx(Ge, a.stateNode));
            break;
        case 4:
            r = Ge, o = Nt, Ge = a.stateNode.containerInfo, Nt = !0, Rs(e, s, a), Ge = r, Nt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            ia(2, a, s), tt || ia(4, a, s), Rs(e, s, a);
            break;
        case 1:
            tt || (xs(a, s), r = a.stateNode, typeof r.componentWillUnmount == "function" && bh(a, s, r)), Rs(e, s, a);
            break;
        case 21:
            Rs(e, s, a);
            break;
        case 22:
            tt = (r = tt) || a.memoizedState !== null, Rs(e, s, a), tt = r;
            break;
        default: Rs(e, s, a);
    } }
    function kh(e, s) { if (s.memoizedState === null && (e = s.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
            _l(e);
        }
        catch (a) {
            _e(s, s.return, a);
        }
    } }
    function Ah(e, s) { if (s.memoizedState === null && (e = s.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
            _l(e);
        }
        catch (a) {
            _e(s, s.return, a);
        } }
    function B0(e) { switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var s = e.stateNode;
            return s === null && (s = e.stateNode = new Nh), s;
        case 22: return e = e.stateNode, s = e._retryCache, s === null && (s = e._retryCache = new Nh), s;
        default: throw Error(c(435, e.tag));
    } }
    function Wr(e, s) { var a = B0(e); s.forEach(function (r) { if (!a.has(r)) {
        a.add(r);
        var o = Y0.bind(null, e, r);
        r.then(o, o);
    } }); }
    function wt(e, s) { var a = s.deletions; if (a !== null)
        for (var r = 0; r < a.length; r++) {
            var o = a[r], d = e, h = s, g = h;
            e: for (; g !== null;) {
                switch (g.tag) {
                    case 27:
                        if (ha(g.type)) {
                            Ge = g.stateNode, Nt = !1;
                            break e;
                        }
                        break;
                    case 5:
                        Ge = g.stateNode, Nt = !1;
                        break e;
                    case 3:
                    case 4:
                        Ge = g.stateNode.containerInfo, Nt = !0;
                        break e;
                }
                g = g.return;
            }
            if (Ge === null)
                throw Error(c(160));
            Ch(d, h, o), Ge = null, Nt = !1, d = o.alternate, d !== null && (d.return = null), o.return = null;
        } if (s.subtreeFlags & 13886)
        for (s = s.child; s !== null;)
            Th(s, e), s = s.sibling; }
    var ns = null;
    function Th(e, s) { var a = e.alternate, r = e.flags; switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            wt(s, e), St(e), r & 4 && (ia(3, e, e.return), Cn(3, e), ia(5, e, e.return));
            break;
        case 1:
            wt(s, e), St(e), r & 512 && (tt || a === null || xs(a, a.return)), r & 64 && zs && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
            break;
        case 26:
            var o = ns;
            if (wt(s, e), St(e), r & 512 && (tt || a === null || xs(a, a.return)), r & 4) {
                var d = a !== null ? a.memoizedState : null;
                if (r = e.memoizedState, a === null)
                    if (r === null)
                        if (e.stateNode === null) {
                            e: {
                                r = e.type, a = e.memoizedProps, o = o.ownerDocument || o;
                                t: switch (r) {
                                    case "title":
                                        d = o.getElementsByTagName("title")[0], (!d || d[Il] || d[ot] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = o.createElement(r), o.head.insertBefore(d, o.querySelector("head > title"))), ft(d, r, a), d[ot] = e, it(d), r = d;
                                        break e;
                                    case "link":
                                        var h = Tx("link", "href", o).get(r + (a.href || ""));
                                        if (h) {
                                            for (var g = 0; g < h.length; g++)
                                                if (d = h[g], d.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && d.getAttribute("rel") === (a.rel == null ? null : a.rel) && d.getAttribute("title") === (a.title == null ? null : a.title) && d.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                    h.splice(g, 1);
                                                    break t;
                                                }
                                        }
                                        d = o.createElement(r), ft(d, r, a), o.head.appendChild(d);
                                        break;
                                    case "meta":
                                        if (h = Tx("meta", "content", o).get(r + (a.content || ""))) {
                                            for (g = 0; g < h.length; g++)
                                                if (d = h[g], d.getAttribute("content") === (a.content == null ? null : "" + a.content) && d.getAttribute("name") === (a.name == null ? null : a.name) && d.getAttribute("property") === (a.property == null ? null : a.property) && d.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && d.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                    h.splice(g, 1);
                                                    break t;
                                                }
                                        }
                                        d = o.createElement(r), ft(d, r, a), o.head.appendChild(d);
                                        break;
                                    default: throw Error(c(468, r));
                                }
                                d[ot] = e, it(d), r = d;
                            }
                            e.stateNode = r;
                        }
                        else
                            Ex(o, e.type, e.stateNode);
                    else
                        e.stateNode = Ax(o, r, e.memoizedProps);
                else
                    d !== r ? (d === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : d.count--, r === null ? Ex(o, e.type, e.stateNode) : Ax(o, r, e.memoizedProps)) : r === null && e.stateNode !== null && Go(e, e.memoizedProps, a.memoizedProps);
            }
            break;
        case 27:
            wt(s, e), St(e), r & 512 && (tt || a === null || xs(a, a.return)), a !== null && r & 4 && Go(e, e.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (wt(s, e), St(e), r & 512 && (tt || a === null || xs(a, a.return)), e.flags & 32) {
                o = e.stateNode;
                try {
                    sl(o, "");
                }
                catch (W) {
                    _e(e, e.return, W);
                }
            }
            r & 4 && e.stateNode != null && (o = e.memoizedProps, Go(e, o, a !== null ? a.memoizedProps : o)), r & 1024 && (Yo = !0);
            break;
        case 6:
            if (wt(s, e), St(e), r & 4) {
                if (e.stateNode === null)
                    throw Error(c(162));
                r = e.memoizedProps, a = e.stateNode;
                try {
                    a.nodeValue = r;
                }
                catch (W) {
                    _e(e, e.return, W);
                }
            }
            break;
        case 3:
            if (xi = null, o = ns, ns = fi(s.containerInfo), wt(s, e), ns = o, St(e), r & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    _l(s.containerInfo);
                }
                catch (W) {
                    _e(e, e.return, W);
                }
            Yo && (Yo = !1, Eh(e));
            break;
        case 4:
            r = ns, ns = fi(e.stateNode.containerInfo), wt(s, e), St(e), ns = r;
            break;
        case 12:
            wt(s, e), St(e);
            break;
        case 31:
            wt(s, e), St(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Wr(e, r)));
            break;
        case 13:
            wt(s, e), St(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ti = Dt()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Wr(e, r)));
            break;
        case 22:
            o = e.memoizedState !== null;
            var C = a !== null && a.memoizedState !== null, B = zs, K = tt;
            if (zs = B || o, tt = K || C, wt(s, e), tt = K, zs = B, St(e), r & 8192)
                e: for (s = e.stateNode, s._visibility = o ? s._visibility & -2 : s._visibility | 1, o && (a === null || C || zs || tt || Va(e)), a = null, s = e;;) {
                    if (s.tag === 5 || s.tag === 26) {
                        if (a === null) {
                            C = a = s;
                            try {
                                if (d = C.stateNode, o)
                                    h = d.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                                else {
                                    g = C.stateNode;
                                    var X = C.memoizedProps.style, U = X != null && X.hasOwnProperty("display") ? X.display : null;
                                    g.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                                }
                            }
                            catch (W) {
                                _e(C, C.return, W);
                            }
                        }
                    }
                    else if (s.tag === 6) {
                        if (a === null) {
                            C = s;
                            try {
                                C.stateNode.nodeValue = o ? "" : C.memoizedProps;
                            }
                            catch (W) {
                                _e(C, C.return, W);
                            }
                        }
                    }
                    else if (s.tag === 18) {
                        if (a === null) {
                            C = s;
                            try {
                                var G = C.stateNode;
                                o ? bx(G, !0) : bx(C.stateNode, !1);
                            }
                            catch (W) {
                                _e(C, C.return, W);
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
            r & 4 && (r = e.updateQueue, r !== null && (a = r.retryQueue, a !== null && (r.retryQueue = null, Wr(e, a))));
            break;
        case 19:
            wt(s, e), St(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Wr(e, r)));
            break;
        case 30: break;
        case 21: break;
        default: wt(s, e), St(e);
    } }
    function St(e) { var s = e.flags; if (s & 2) {
        try {
            for (var a, r = e.return; r !== null;) {
                if (vh(r)) {
                    a = r;
                    break;
                }
                r = r.return;
            }
            if (a == null)
                throw Error(c(160));
            switch (a.tag) {
                case 27:
                    var o = a.stateNode, d = Qo(e);
                    Ir(e, d, o);
                    break;
                case 5:
                    var h = a.stateNode;
                    a.flags & 32 && (sl(h, ""), a.flags &= -33);
                    var g = Qo(e);
                    Ir(e, g, h);
                    break;
                case 3:
                case 4:
                    var C = a.stateNode.containerInfo, B = Qo(e);
                    Ko(e, B, C);
                    break;
                default: throw Error(c(161));
            }
        }
        catch (K) {
            _e(e, e.return, K);
        }
        e.flags &= -3;
    } s & 4096 && (e.flags &= -4097); }
    function Eh(e) { if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
            var s = e;
            Eh(s), s.tag === 5 && s.flags & 1024 && s.stateNode.reset(), e = e.sibling;
        } }
    function Bs(e, s) { if (s.subtreeFlags & 8772)
        for (s = s.child; s !== null;)
            wh(e, s.alternate, s), s = s.sibling; }
    function Va(e) { for (e = e.child; e !== null;) {
        var s = e;
        switch (s.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ia(4, s, s.return), Va(s);
                break;
            case 1:
                xs(s, s.return);
                var a = s.stateNode;
                typeof a.componentWillUnmount == "function" && bh(s, s.return, a), Va(s);
                break;
            case 27: Rn(s.stateNode);
            case 26:
            case 5:
                xs(s, s.return), Va(s);
                break;
            case 22:
                s.memoizedState === null && Va(s);
                break;
            case 30:
                Va(s);
                break;
            default: Va(s);
        }
        e = e.sibling;
    } }
    function qs(e, s, a) { for (a = a && (s.subtreeFlags & 8772) !== 0, s = s.child; s !== null;) {
        var r = s.alternate, o = e, d = s, h = d.flags;
        switch (d.tag) {
            case 0:
            case 11:
            case 15:
                qs(o, d, a), Cn(4, d);
                break;
            case 1:
                if (qs(o, d, a), r = d, o = r.stateNode, typeof o.componentDidMount == "function")
                    try {
                        o.componentDidMount();
                    }
                    catch (B) {
                        _e(r, r.return, B);
                    }
                if (r = d, o = r.updateQueue, o !== null) {
                    var g = r.stateNode;
                    try {
                        var C = o.shared.hiddenCallbacks;
                        if (C !== null)
                            for (o.shared.hiddenCallbacks = null, o = 0; o < C.length; o++)
                                nf(C[o], g);
                    }
                    catch (B) {
                        _e(r, r.return, B);
                    }
                }
                a && h & 64 && gh(d), kn(d, d.return);
                break;
            case 27: jh(d);
            case 26:
            case 5:
                qs(o, d, a), a && r === null && h & 4 && yh(d), kn(d, d.return);
                break;
            case 12:
                qs(o, d, a);
                break;
            case 31:
                qs(o, d, a), a && h & 4 && kh(o, d);
                break;
            case 13:
                qs(o, d, a), a && h & 4 && Ah(o, d);
                break;
            case 22:
                d.memoizedState === null && qs(o, d, a), kn(d, d.return);
                break;
            case 30: break;
            default: qs(o, d, a);
        }
        s = s.sibling;
    } }
    function Xo(e, s) { var a = null; e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (e = s.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && mn(a)); }
    function Zo(e, s) { e = null, s.alternate !== null && (e = s.alternate.memoizedState.cache), s = s.memoizedState.cache, s !== e && (s.refCount++, e != null && mn(e)); }
    function rs(e, s, a, r) { if (s.subtreeFlags & 10256)
        for (s = s.child; s !== null;)
            Dh(e, s, a, r), s = s.sibling; }
    function Dh(e, s, a, r) { var o = s.flags; switch (s.tag) {
        case 0:
        case 11:
        case 15:
            rs(e, s, a, r), o & 2048 && Cn(9, s);
            break;
        case 1:
            rs(e, s, a, r);
            break;
        case 3:
            rs(e, s, a, r), o & 2048 && (e = null, s.alternate !== null && (e = s.alternate.memoizedState.cache), s = s.memoizedState.cache, s !== e && (s.refCount++, e != null && mn(e)));
            break;
        case 12:
            if (o & 2048) {
                rs(e, s, a, r), e = s.stateNode;
                try {
                    var d = s.memoizedProps, h = d.id, g = d.onPostCommit;
                    typeof g == "function" && g(h, s.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                }
                catch (C) {
                    _e(s, s.return, C);
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
            d = s.stateNode, h = s.alternate, s.memoizedState !== null ? d._visibility & 2 ? rs(e, s, a, r) : An(e, s) : d._visibility & 2 ? rs(e, s, a, r) : (d._visibility |= 2, Nl(e, s, a, r, (s.subtreeFlags & 10256) !== 0 || !1)), o & 2048 && Xo(h, s);
            break;
        case 24:
            rs(e, s, a, r), o & 2048 && Zo(s.alternate, s);
            break;
        default: rs(e, s, a, r);
    } }
    function Nl(e, s, a, r, o) { for (o = o && ((s.subtreeFlags & 10256) !== 0 || !1), s = s.child; s !== null;) {
        var d = e, h = s, g = a, C = r, B = h.flags;
        switch (h.tag) {
            case 0:
            case 11:
            case 15:
                Nl(d, h, g, C, o), Cn(8, h);
                break;
            case 23: break;
            case 22:
                var K = h.stateNode;
                h.memoizedState !== null ? K._visibility & 2 ? Nl(d, h, g, C, o) : An(d, h) : (K._visibility |= 2, Nl(d, h, g, C, o)), o && B & 2048 && Xo(h.alternate, h);
                break;
            case 24:
                Nl(d, h, g, C, o), o && B & 2048 && Zo(h.alternate, h);
                break;
            default: Nl(d, h, g, C, o);
        }
        s = s.sibling;
    } }
    function An(e, s) { if (s.subtreeFlags & 10256)
        for (s = s.child; s !== null;) {
            var a = e, r = s, o = r.flags;
            switch (r.tag) {
                case 22:
                    An(a, r), o & 2048 && Xo(r.alternate, r);
                    break;
                case 24:
                    An(a, r), o & 2048 && Zo(r.alternate, r);
                    break;
                default: An(a, r);
            }
            s = s.sibling;
        } }
    var Tn = 8192;
    function wl(e, s, a) { if (e.subtreeFlags & Tn)
        for (e = e.child; e !== null;)
            Mh(e, s, a), e = e.sibling; }
    function Mh(e, s, a) { switch (e.tag) {
        case 26:
            wl(e, s, a), e.flags & Tn && e.memoizedState !== null && Ny(a, ns, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            wl(e, s, a);
            break;
        case 3:
        case 4:
            var r = ns;
            ns = fi(e.stateNode.containerInfo), wl(e, s, a), ns = r;
            break;
        case 22:
            e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Tn, Tn = 16777216, wl(e, s, a), Tn = r) : wl(e, s, a));
            break;
        default: wl(e, s, a);
    } }
    function Oh(e) { var s = e.alternate; if (s !== null && (e = s.child, e !== null)) {
        s.child = null;
        do
            s = e.sibling, e.sibling = null, e = s;
        while (e !== null);
    } }
    function En(e) { var s = e.deletions; if ((e.flags & 16) !== 0) {
        if (s !== null)
            for (var a = 0; a < s.length; a++) {
                var r = s[a];
                ct = r, zh(r, e);
            }
        Oh(e);
    } if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;)
            _h(e), e = e.sibling; }
    function _h(e) { switch (e.tag) {
        case 0:
        case 11:
        case 15:
            En(e), e.flags & 2048 && ia(9, e, e.return);
            break;
        case 3:
            En(e);
            break;
        case 12:
            En(e);
            break;
        case 22:
            var s = e.stateNode;
            e.memoizedState !== null && s._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (s._visibility &= -3, ei(e)) : En(e);
            break;
        default: En(e);
    } }
    function ei(e) { var s = e.deletions; if ((e.flags & 16) !== 0) {
        if (s !== null)
            for (var a = 0; a < s.length; a++) {
                var r = s[a];
                ct = r, zh(r, e);
            }
        Oh(e);
    } for (e = e.child; e !== null;) {
        switch (s = e, s.tag) {
            case 0:
            case 11:
            case 15:
                ia(8, s, s.return), ei(s);
                break;
            case 22:
                a = s.stateNode, a._visibility & 2 && (a._visibility &= -3, ei(s));
                break;
            default: ei(s);
        }
        e = e.sibling;
    } }
    function zh(e, s) { for (; ct !== null;) {
        var a = ct;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                ia(8, a, s);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var r = a.memoizedState.cachePool.pool;
                    r != null && r.refCount++;
                }
                break;
            case 24: mn(a.memoizedState.cache);
        }
        if (r = a.child, r !== null)
            r.return = a, ct = r;
        else
            e: for (a = e; ct !== null;) {
                r = ct;
                var o = r.sibling, d = r.return;
                if (Sh(r), r === a) {
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
    var q0 = { getCacheForType: function (e) { var s = ut(Ie), a = s.data.get(e); return a === void 0 && (a = e(), s.data.set(e, a)), a; }, cacheSignal: function () { return ut(Ie).controller.signal; } }, L0 = typeof WeakMap == "function" ? WeakMap : Map, Me = 0, qe = null, ye = null, je = 0, Oe = 0, qt = null, ca = !1, Sl = !1, Fo = !1, Ls = 0, Xe = 0, oa = 0, Ga = 0, Jo = 0, Lt = 0, Cl = 0, Dn = null, Ct = null, $o = !1, ti = 0, Rh = 0, si = 1 / 0, ai = null, da = null, nt = 0, ua = null, kl = null, Us = 0, Po = 0, Io = null, Bh = null, Mn = 0, Wo = null;
    function Ut() { return (Me & 2) !== 0 && je !== 0 ? je & -je : H.T !== null ? nd() : Pu(); }
    function qh() { if (Lt === 0)
        if ((je & 536870912) === 0 || we) {
            var e = ur;
            ur <<= 1, (ur & 3932160) === 0 && (ur = 262144), Lt = e;
        }
        else
            Lt = 536870912; return e = Rt.current, e !== null && (e.flags |= 32), Lt; }
    function kt(e, s, a) { (e === qe && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null) && (Al(e, 0), ma(e, je, Lt, !1)), Pl(e, a), ((Me & 2) === 0 || e !== qe) && (e === qe && ((Me & 2) === 0 && (Ga |= a), Xe === 4 && ma(e, je, Lt, !1)), ps(e)); }
    function Lh(e, s, a) { if ((Me & 6) !== 0)
        throw Error(c(327)); var r = !a && (s & 127) === 0 && (s & e.expiredLanes) === 0 || $l(e, s), o = r ? V0(e, s) : td(e, s, !0), d = r; do {
        if (o === 0) {
            Sl && !r && ma(e, s, 0, !1);
            break;
        }
        else {
            if (a = e.current.alternate, d && !U0(a)) {
                o = td(e, s, !1), d = !1;
                continue;
            }
            if (o === 2) {
                if (d = s, e.errorRecoveryDisabledLanes & d)
                    var h = 0;
                else
                    h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
                if (h !== 0) {
                    s = h;
                    e: {
                        var g = e;
                        o = Dn;
                        var C = g.current.memoizedState.isDehydrated;
                        if (C && (Al(g, h).flags |= 256), h = td(g, h, !1), h !== 2) {
                            if (Fo && !C) {
                                g.errorRecoveryDisabledLanes |= d, Ga |= d, o = 4;
                                break e;
                            }
                            d = Ct, Ct = o, d !== null && (Ct === null ? Ct = d : Ct.push.apply(Ct, d));
                        }
                        o = h;
                    }
                    if (d = !1, o !== 2)
                        continue;
                }
            }
            if (o === 1) {
                Al(e, 0), ma(e, s, 0, !0);
                break;
            }
            e: {
                switch (r = e, d = o, d) {
                    case 0:
                    case 1: throw Error(c(345));
                    case 4: if ((s & 4194048) !== s)
                        break;
                    case 6:
                        ma(r, s, Lt, !ca);
                        break e;
                    case 2:
                        Ct = null;
                        break;
                    case 3:
                    case 5: break;
                    default: throw Error(c(329));
                }
                if ((s & 62914560) === s && (o = ti + 300 - Dt(), 10 < o)) {
                    if (ma(r, s, Lt, !ca), fr(r, 0, !0) !== 0)
                        break e;
                    Us = s, r.timeoutHandle = xx(Uh.bind(null, r, a, Ct, ai, $o, s, Lt, Ga, Cl, ca, d, "Throttled", -0, 0), o);
                    break e;
                }
                Uh(r, a, Ct, ai, $o, s, Lt, Ga, Cl, ca, d, null, -0, 0);
            }
        }
        break;
    } while (!0); ps(e); }
    function Uh(e, s, a, r, o, d, h, g, C, B, K, X, U, G) { if (e.timeoutHandle = -1, X = s.subtreeFlags, X & 8192 || (X & 16785408) === 16785408) {
        X = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: Ss }, Mh(s, d, X);
        var W = (d & 62914560) === d ? ti - Dt() : (d & 4194048) === d ? Rh - Dt() : 0;
        if (W = wy(X, W), W !== null) {
            Us = d, e.cancelPendingCommit = W(Zh.bind(null, e, s, d, a, r, o, h, g, C, K, X, null, U, G)), ma(e, d, h, !B);
            return;
        }
    } Zh(e, s, d, a, r, o, h, g, C); }
    function U0(e) { for (var s = e;;) {
        var a = s.tag;
        if ((a === 0 || a === 11 || a === 15) && s.flags & 16384 && (a = s.updateQueue, a !== null && (a = a.stores, a !== null)))
            for (var r = 0; r < a.length; r++) {
                var o = a[r], d = o.getSnapshot;
                o = o.value;
                try {
                    if (!_t(d(), o))
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
    function ma(e, s, a, r) { s &= ~Jo, s &= ~Ga, e.suspendedLanes |= s, e.pingedLanes &= ~s, r && (e.warmLanes |= s), r = e.expirationTimes; for (var o = s; 0 < o;) {
        var d = 31 - Ot(o), h = 1 << d;
        r[d] = -1, o &= ~h;
    } a !== 0 && Fu(e, a, s); }
    function li() { return (Me & 6) === 0 ? (On(0), !1) : !0; }
    function ed() { if (ye !== null) {
        if (Oe === 0)
            var e = ye.return;
        else
            e = ye, Ts = _a = null, po(e), gl = null, hn = 0, e = ye;
        for (; e !== null;)
            ph(e.alternate, e), e = e.return;
        ye = null;
    } }
    function Al(e, s) { var a = e.timeoutHandle; a !== -1 && (e.timeoutHandle = -1, ny(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Us = 0, ed(), qe = e, ye = a = ks(e.current, null), je = s, Oe = 0, qt = null, ca = !1, Sl = $l(e, s), Fo = !1, Cl = Lt = Jo = Ga = oa = Xe = 0, Ct = Dn = null, $o = !1, (s & 8) !== 0 && (s |= s & 32); var r = e.entangledLanes; if (r !== 0)
        for (e = e.entanglements, r &= s; 0 < r;) {
            var o = 31 - Ot(r), d = 1 << o;
            s |= e[o], r &= ~d;
        } return Ls = s, Cr(), a; }
    function Hh(e, s) { he = null, H.H = Nn, s === pl || s === _r ? (s = tf(), Oe = 3) : s === ao ? (s = tf(), Oe = 4) : Oe = s === Oo ? 8 : s !== null && typeof s == "object" && typeof s.then == "function" ? 6 : 1, qt = s, ye === null && (Xe = 1, Zr(e, Xt(s, e.current))); }
    function Vh() { var e = Rt.current; return e === null ? !0 : (je & 4194048) === je ? $t === null : (je & 62914560) === je || (je & 536870912) !== 0 ? e === $t : !1; }
    function Gh() { var e = H.H; return H.H = Nn, e === null ? Nn : e; }
    function Qh() { var e = H.A; return H.A = q0, e; }
    function ni() { Xe = 4, ca || (je & 4194048) !== je && Rt.current !== null || (Sl = !0), (oa & 134217727) === 0 && (Ga & 134217727) === 0 || qe === null || ma(qe, je, Lt, !1); }
    function td(e, s, a) { var r = Me; Me |= 2; var o = Gh(), d = Qh(); (qe !== e || je !== s) && (ai = null, Al(e, s)), s = !1; var h = Xe; e: do
        try {
            if (Oe !== 0 && ye !== null) {
                var g = ye, C = qt;
                switch (Oe) {
                    case 8:
                        ed(), h = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Rt.current === null && (s = !0);
                        var B = Oe;
                        if (Oe = 0, qt = null, Tl(e, g, C, B), a && Sl) {
                            h = 0;
                            break e;
                        }
                        break;
                    default: B = Oe, Oe = 0, qt = null, Tl(e, g, C, B);
                }
            }
            H0(), h = Xe;
            break;
        }
        catch (K) {
            Hh(e, K);
        }
    while (!0); return s && e.shellSuspendCounter++, Ts = _a = null, Me = r, H.H = o, H.A = d, ye === null && (qe = null, je = 0, Cr()), h; }
    function H0() { for (; ye !== null;)
        Kh(ye); }
    function V0(e, s) { var a = Me; Me |= 2; var r = Gh(), o = Qh(); qe !== e || je !== s ? (ai = null, si = Dt() + 500, Al(e, s)) : Sl = $l(e, s); e: do
        try {
            if (Oe !== 0 && ye !== null) {
                s = ye;
                var d = qt;
                t: switch (Oe) {
                    case 1:
                        Oe = 0, qt = null, Tl(e, s, d, 1);
                        break;
                    case 2:
                    case 9:
                        if (Wm(d)) {
                            Oe = 0, qt = null, Yh(s);
                            break;
                        }
                        s = function () { Oe !== 2 && Oe !== 9 || qe !== e || (Oe = 7), ps(e); }, d.then(s, s);
                        break e;
                    case 3:
                        Oe = 7;
                        break e;
                    case 4:
                        Oe = 5;
                        break e;
                    case 7:
                        Wm(d) ? (Oe = 0, qt = null, Yh(s)) : (Oe = 0, qt = null, Tl(e, s, d, 7));
                        break;
                    case 5:
                        var h = null;
                        switch (ye.tag) {
                            case 26: h = ye.memoizedState;
                            case 5:
                            case 27:
                                var g = ye;
                                if (h ? Dx(h) : g.stateNode.complete) {
                                    Oe = 0, qt = null;
                                    var C = g.sibling;
                                    if (C !== null)
                                        ye = C;
                                    else {
                                        var B = g.return;
                                        B !== null ? (ye = B, ri(B)) : ye = null;
                                    }
                                    break t;
                                }
                        }
                        Oe = 0, qt = null, Tl(e, s, d, 5);
                        break;
                    case 6:
                        Oe = 0, qt = null, Tl(e, s, d, 6);
                        break;
                    case 8:
                        ed(), Xe = 6;
                        break e;
                    default: throw Error(c(462));
                }
            }
            G0();
            break;
        }
        catch (K) {
            Hh(e, K);
        }
    while (!0); return Ts = _a = null, H.H = r, H.A = o, Me = a, ye !== null ? 0 : (qe = null, je = 0, Cr(), Xe); }
    function G0() { for (; ye !== null && !ub();)
        Kh(ye); }
    function Kh(e) { var s = hh(e.alternate, e, Ls); e.memoizedProps = e.pendingProps, s === null ? ri(e) : ye = s; }
    function Yh(e) { var s = e, a = s.alternate; switch (s.tag) {
        case 15:
        case 0:
            s = ch(a, s, s.pendingProps, s.type, void 0, je);
            break;
        case 11:
            s = ch(a, s, s.pendingProps, s.type.render, s.ref, je);
            break;
        case 5: po(s);
        default: ph(a, s), s = ye = Gm(s, Ls), s = hh(a, s, Ls);
    } e.memoizedProps = e.pendingProps, s === null ? ri(e) : ye = s; }
    function Tl(e, s, a, r) { Ts = _a = null, po(s), gl = null, hn = 0; var o = s.return; try {
        if (D0(e, o, s, a, je)) {
            Xe = 1, Zr(e, Xt(a, e.current)), ye = null;
            return;
        }
    }
    catch (d) {
        if (o !== null)
            throw ye = o, d;
        Xe = 1, Zr(e, Xt(a, e.current)), ye = null;
        return;
    } s.flags & 32768 ? (we || r === 1 ? e = !0 : Sl || (je & 536870912) !== 0 ? e = !1 : (ca = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Rt.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Xh(s, e)) : ri(s); }
    function ri(e) { var s = e; do {
        if ((s.flags & 32768) !== 0) {
            Xh(s, ca);
            return;
        }
        e = s.return;
        var a = _0(s.alternate, s, Ls);
        if (a !== null) {
            ye = a;
            return;
        }
        if (s = s.sibling, s !== null) {
            ye = s;
            return;
        }
        ye = s = e;
    } while (s !== null); Xe === 0 && (Xe = 5); }
    function Xh(e, s) { do {
        var a = z0(e.alternate, e);
        if (a !== null) {
            a.flags &= 32767, ye = a;
            return;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !s && (e = e.sibling, e !== null)) {
            ye = e;
            return;
        }
        ye = e = a;
    } while (e !== null); Xe = 6, ye = null; }
    function Zh(e, s, a, r, o, d, h, g, C) { e.cancelPendingCommit = null; do
        ii();
    while (nt !== 0); if ((Me & 6) !== 0)
        throw Error(c(327)); if (s !== null) {
        if (s === e.current)
            throw Error(c(177));
        if (d = s.lanes | s.childLanes, d |= Gc, jb(e, a, d, h, g, C), e === qe && (ye = qe = null, je = 0), kl = s, ua = e, Us = a, Po = d, Io = o, Bh = r, (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, X0(or, function () { return Ih(), null; })) : (e.callbackNode = null, e.callbackPriority = 0), r = (s.flags & 13878) !== 0, (s.subtreeFlags & 13878) !== 0 || r) {
            r = H.T, H.T = null, o = P.p, P.p = 2, h = Me, Me |= 4;
            try {
                R0(e, s, a);
            }
            finally {
                Me = h, P.p = o, H.T = r;
            }
        }
        nt = 1, Fh(), Jh(), $h();
    } }
    function Fh() { if (nt === 1) {
        nt = 0;
        var e = ua, s = kl, a = (s.flags & 13878) !== 0;
        if ((s.subtreeFlags & 13878) !== 0 || a) {
            a = H.T, H.T = null;
            var r = P.p;
            P.p = 2;
            var o = Me;
            Me |= 4;
            try {
                Th(s, e);
                var d = fd, h = _m(e.containerInfo), g = d.focusedElem, C = d.selectionRange;
                if (h !== g && g && g.ownerDocument && Om(g.ownerDocument.documentElement, g)) {
                    if (C !== null && qc(g)) {
                        var B = C.start, K = C.end;
                        if (K === void 0 && (K = B), "selectionStart" in g)
                            g.selectionStart = B, g.selectionEnd = Math.min(K, g.value.length);
                        else {
                            var X = g.ownerDocument || document, U = X && X.defaultView || window;
                            if (U.getSelection) {
                                var G = U.getSelection(), W = g.textContent.length, oe = Math.min(C.start, W), Be = C.end === void 0 ? oe : Math.min(C.end, W);
                                !G.extend && oe > Be && (h = Be, Be = oe, oe = h);
                                var _ = Mm(g, oe), T = Mm(g, Be);
                                if (_ && T && (G.rangeCount !== 1 || G.anchorNode !== _.node || G.anchorOffset !== _.offset || G.focusNode !== T.node || G.focusOffset !== T.offset)) {
                                    var R = X.createRange();
                                    R.setStart(_.node, _.offset), G.removeAllRanges(), oe > Be ? (G.addRange(R), G.extend(T.node, T.offset)) : (R.setEnd(T.node, T.offset), G.addRange(R));
                                }
                            }
                        }
                    }
                    for (X = [], G = g; G = G.parentNode;)
                        G.nodeType === 1 && X.push({ element: G, left: G.scrollLeft, top: G.scrollTop });
                    for (typeof g.focus == "function" && g.focus(), g = 0; g < X.length; g++) {
                        var Y = X[g];
                        Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
                    }
                }
                yi = !!md, fd = md = null;
            }
            finally {
                Me = o, P.p = r, H.T = a;
            }
        }
        e.current = s, nt = 2;
    } }
    function Jh() { if (nt === 2) {
        nt = 0;
        var e = ua, s = kl, a = (s.flags & 8772) !== 0;
        if ((s.subtreeFlags & 8772) !== 0 || a) {
            a = H.T, H.T = null;
            var r = P.p;
            P.p = 2;
            var o = Me;
            Me |= 4;
            try {
                wh(e, s.alternate, s);
            }
            finally {
                Me = o, P.p = r, H.T = a;
            }
        }
        nt = 3;
    } }
    function $h() { if (nt === 4 || nt === 3) {
        nt = 0, mb();
        var e = ua, s = kl, a = Us, r = Bh;
        (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0 ? nt = 5 : (nt = 0, kl = ua = null, Ph(e, e.pendingLanes));
        var o = e.pendingLanes;
        if (o === 0 && (da = null), bc(a), s = s.stateNode, Mt && typeof Mt.onCommitFiberRoot == "function")
            try {
                Mt.onCommitFiberRoot(Jl, s, void 0, (s.current.flags & 128) === 128);
            }
            catch { }
        if (r !== null) {
            s = H.T, o = P.p, P.p = 2, H.T = null;
            try {
                for (var d = e.onRecoverableError, h = 0; h < r.length; h++) {
                    var g = r[h];
                    d(g.value, { componentStack: g.stack });
                }
            }
            finally {
                H.T = s, P.p = o;
            }
        }
        (Us & 3) !== 0 && ii(), ps(e), o = e.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? e === Wo ? Mn++ : (Mn = 0, Wo = e) : Mn = 0, On(0);
    } }
    function Ph(e, s) { (e.pooledCacheLanes &= s) === 0 && (s = e.pooledCache, s != null && (e.pooledCache = null, mn(s))); }
    function ii() { return Fh(), Jh(), $h(), Ih(); }
    function Ih() { if (nt !== 5)
        return !1; var e = ua, s = Po; Po = 0; var a = bc(Us), r = H.T, o = P.p; try {
        P.p = 32 > a ? 32 : a, H.T = null, a = Io, Io = null;
        var d = ua, h = Us;
        if (nt = 0, kl = ua = null, Us = 0, (Me & 6) !== 0)
            throw Error(c(331));
        var g = Me;
        if (Me |= 4, _h(d.current), Dh(d, d.current, h, a), Me = g, On(0, !1), Mt && typeof Mt.onPostCommitFiberRoot == "function")
            try {
                Mt.onPostCommitFiberRoot(Jl, d);
            }
            catch { }
        return !0;
    }
    finally {
        P.p = o, H.T = r, Ph(e, s);
    } }
    function Wh(e, s, a) { s = Xt(a, s), s = Mo(e.stateNode, s, 2), e = la(e, s, 2), e !== null && (Pl(e, 2), ps(e)); }
    function _e(e, s, a) { if (e.tag === 3)
        Wh(e, e, a);
    else
        for (; s !== null;) {
            if (s.tag === 3) {
                Wh(s, e, a);
                break;
            }
            else if (s.tag === 1) {
                var r = s.stateNode;
                if (typeof s.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (da === null || !da.has(r))) {
                    e = Xt(a, e), a = eh(2), r = la(s, a, 2), r !== null && (th(a, r, s, e), Pl(r, 2), ps(r));
                    break;
                }
            }
            s = s.return;
        } }
    function sd(e, s, a) { var r = e.pingCache; if (r === null) {
        r = e.pingCache = new L0;
        var o = new Set;
        r.set(s, o);
    }
    else
        o = r.get(s), o === void 0 && (o = new Set, r.set(s, o)); o.has(a) || (Fo = !0, o.add(a), e = Q0.bind(null, e, s, a), s.then(e, e)); }
    function Q0(e, s, a) { var r = e.pingCache; r !== null && r.delete(s), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, qe === e && (je & a) === a && (Xe === 4 || Xe === 3 && (je & 62914560) === je && 300 > Dt() - ti ? (Me & 2) === 0 && Al(e, 0) : Jo |= a, Cl === je && (Cl = 0)), ps(e); }
    function ex(e, s) { s === 0 && (s = Zu()), e = Da(e, s), e !== null && (Pl(e, s), ps(e)); }
    function K0(e) { var s = e.memoizedState, a = 0; s !== null && (a = s.retryLane), ex(e, a); }
    function Y0(e, s) { var a = 0; switch (e.tag) {
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
    } r !== null && r.delete(s), ex(e, a); }
    function X0(e, s) { return hc(e, s); }
    var ci = null, El = null, ad = !1, oi = !1, ld = !1, fa = 0;
    function ps(e) { e !== El && e.next === null && (El === null ? ci = El = e : El = El.next = e), oi = !0, ad || (ad = !0, F0()); }
    function On(e, s) { if (!ld && oi) {
        ld = !0;
        do
            for (var a = !1, r = ci; r !== null;) {
                if (e !== 0) {
                    var o = r.pendingLanes;
                    if (o === 0)
                        var d = 0;
                    else {
                        var h = r.suspendedLanes, g = r.pingedLanes;
                        d = (1 << 31 - Ot(42 | e) + 1) - 1, d &= o & ~(h & ~g), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
                    }
                    d !== 0 && (a = !0, lx(r, d));
                }
                else
                    d = je, d = fr(r, r === qe ? d : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (d & 3) === 0 || $l(r, d) || (a = !0, lx(r, d));
                r = r.next;
            }
        while (a);
        ld = !1;
    } }
    function Z0() { tx(); }
    function tx() { oi = ad = !1; var e = 0; fa !== 0 && ly() && (e = fa); for (var s = Dt(), a = null, r = ci; r !== null;) {
        var o = r.next, d = sx(r, s);
        d === 0 ? (r.next = null, a === null ? ci = o : a.next = o, o === null && (El = a)) : (a = r, (e !== 0 || (d & 3) !== 0) && (oi = !0)), r = o;
    } nt !== 0 && nt !== 5 || On(e), fa !== 0 && (fa = 0); }
    function sx(e, s) { for (var a = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d;) {
        var h = 31 - Ot(d), g = 1 << h, C = o[h];
        C === -1 ? ((g & a) === 0 || (g & r) !== 0) && (o[h] = vb(g, s)) : C <= s && (e.expiredLanes |= g), d &= ~g;
    } if (s = qe, a = je, a = fr(e, e === s ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, a === 0 || e === s && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null)
        return r !== null && r !== null && xc(r), e.callbackNode = null, e.callbackPriority = 0; if ((a & 3) === 0 || $l(e, a)) {
        if (s = a & -a, s === e.callbackPriority)
            return s;
        switch (r !== null && xc(r), bc(a)) {
            case 2:
            case 8:
                a = Yu;
                break;
            case 32:
                a = or;
                break;
            case 268435456:
                a = Xu;
                break;
            default: a = or;
        }
        return r = ax.bind(null, e), a = hc(a, r), e.callbackPriority = s, e.callbackNode = a, s;
    } return r !== null && r !== null && xc(r), e.callbackPriority = 2, e.callbackNode = null, 2; }
    function ax(e, s) { if (nt !== 0 && nt !== 5)
        return e.callbackNode = null, e.callbackPriority = 0, null; var a = e.callbackNode; if (ii() && e.callbackNode !== a)
        return null; var r = je; return r = fr(e, e === qe ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Lh(e, r, s), sx(e, Dt()), e.callbackNode != null && e.callbackNode === a ? ax.bind(null, e) : null); }
    function lx(e, s) { if (ii())
        return null; Lh(e, s, !0); }
    function F0() { ry(function () { (Me & 6) !== 0 ? hc(Ku, Z0) : tx(); }); }
    function nd() { if (fa === 0) {
        var e = hl;
        e === 0 && (e = dr, dr <<= 1, (dr & 261888) === 0 && (dr = 256)), fa = e;
    } return fa; }
    function nx(e) { return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : gr("" + e); }
    function rx(e, s) { var a = s.ownerDocument.createElement("input"); return a.name = s.name, a.value = s.value, e.id && a.setAttribute("form", e.id), s.parentNode.insertBefore(a, s), e = new FormData(e), a.parentNode.removeChild(a), e; }
    function J0(e, s, a, r, o) { if (s === "submit" && a && a.stateNode === o) {
        var d = nx((o[vt] || null).action), h = r.submitter;
        h && (s = (s = h[vt] || null) ? nx(s.formAction) : h.getAttribute("formAction"), s !== null && (d = s, h = null));
        var g = new jr("action", "action", null, r, o);
        e.push({ event: g, listeners: [{ instance: null, listener: function () { if (r.defaultPrevented) {
                        if (fa !== 0) {
                            var C = h ? rx(o, h) : new FormData(o);
                            Co(a, { pending: !0, data: C, method: o.method, action: d }, null, C);
                        }
                    }
                    else
                        typeof d == "function" && (g.preventDefault(), C = h ? rx(o, h) : new FormData(o), Co(a, { pending: !0, data: C, method: o.method, action: d }, d, C)); }, currentTarget: o }] });
    } }
    for (var rd = 0; rd < Vc.length; rd++) {
        var id = Vc[rd], $0 = id.toLowerCase(), P0 = id[0].toUpperCase() + id.slice(1);
        ls($0, "on" + P0);
    }
    ls(Bm, "onAnimationEnd"), ls(qm, "onAnimationIteration"), ls(Lm, "onAnimationStart"), ls("dblclick", "onDoubleClick"), ls("focusin", "onFocus"), ls("focusout", "onBlur"), ls(f0, "onTransitionRun"), ls(h0, "onTransitionStart"), ls(x0, "onTransitionCancel"), ls(Um, "onTransitionEnd"), el("onMouseEnter", ["mouseout", "mouseover"]), el("onMouseLeave", ["mouseout", "mouseover"]), el("onPointerEnter", ["pointerout", "pointerover"]), el("onPointerLeave", ["pointerout", "pointerover"]), ka("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ka("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ka("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ka("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ka("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ka("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var _n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), I0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_n));
    function ix(e, s) { s = (s & 4) !== 0; for (var a = 0; a < e.length; a++) {
        var r = e[a], o = r.event;
        r = r.listeners;
        e: {
            var d = void 0;
            if (s)
                for (var h = r.length - 1; 0 <= h; h--) {
                    var g = r[h], C = g.instance, B = g.currentTarget;
                    if (g = g.listener, C !== d && o.isPropagationStopped())
                        break e;
                    d = g, o.currentTarget = B;
                    try {
                        d(o);
                    }
                    catch (K) {
                        Sr(K);
                    }
                    o.currentTarget = null, d = C;
                }
            else
                for (h = 0; h < r.length; h++) {
                    if (g = r[h], C = g.instance, B = g.currentTarget, g = g.listener, C !== d && o.isPropagationStopped())
                        break e;
                    d = g, o.currentTarget = B;
                    try {
                        d(o);
                    }
                    catch (K) {
                        Sr(K);
                    }
                    o.currentTarget = null, d = C;
                }
        }
    } }
    function ve(e, s) { var a = s[yc]; a === void 0 && (a = s[yc] = new Set); var r = e + "__bubble"; a.has(r) || (cx(s, e, 2, !1), a.add(r)); }
    function cd(e, s, a) { var r = 0; s && (r |= 4), cx(a, e, r, s); }
    var di = "_reactListening" + Math.random().toString(36).slice(2);
    function od(e) { if (!e[di]) {
        e[di] = !0, em.forEach(function (a) { a !== "selectionchange" && (I0.has(a) || cd(a, !1, e), cd(a, !0, e)); });
        var s = e.nodeType === 9 ? e : e.ownerDocument;
        s === null || s[di] || (s[di] = !0, cd("selectionchange", !1, s));
    } }
    function cx(e, s, a, r) { switch (qx(s)) {
        case 2:
            var o = ky;
            break;
        case 8:
            o = Ay;
            break;
        default: o = Sd;
    } a = o.bind(null, s, a, e), o = void 0, !Tc || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(s, a, { capture: !0, passive: o }) : e.addEventListener(s, a, !0) : o !== void 0 ? e.addEventListener(s, a, { passive: o }) : e.addEventListener(s, a, !1); }
    function dd(e, s, a, r, o) { var d = r; if ((s & 1) === 0 && (s & 2) === 0 && r !== null)
        e: for (;;) {
            if (r === null)
                return;
            var h = r.tag;
            if (h === 3 || h === 4) {
                var g = r.stateNode.containerInfo;
                if (g === o)
                    break;
                if (h === 4)
                    for (h = r.return; h !== null;) {
                        var C = h.tag;
                        if ((C === 3 || C === 4) && h.stateNode.containerInfo === o)
                            return;
                        h = h.return;
                    }
                for (; g !== null;) {
                    if (h = Pa(g), h === null)
                        return;
                    if (C = h.tag, C === 5 || C === 6 || C === 26 || C === 27) {
                        r = d = h;
                        continue e;
                    }
                    g = g.parentNode;
                }
            }
            r = r.return;
        } mm(function () { var B = d, K = kc(a), X = []; e: {
        var U = Hm.get(e);
        if (U !== void 0) {
            var G = jr, W = e;
            switch (e) {
                case "keypress": if (yr(a) === 0)
                    break e;
                case "keydown":
                case "keyup":
                    G = Yb;
                    break;
                case "focusin":
                    W = "focus", G = Oc;
                    break;
                case "focusout":
                    W = "blur", G = Oc;
                    break;
                case "beforeblur":
                case "afterblur":
                    G = Oc;
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
                    G = xm;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    G = _b;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    G = Fb;
                    break;
                case Bm:
                case qm:
                case Lm:
                    G = Bb;
                    break;
                case Um:
                    G = $b;
                    break;
                case "scroll":
                case "scrollend":
                    G = Mb;
                    break;
                case "wheel":
                    G = Ib;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    G = Lb;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    G = gm;
                    break;
                case "toggle":
                case "beforetoggle": G = e0;
            }
            var oe = (s & 4) !== 0, Be = !oe && (e === "scroll" || e === "scrollend"), _ = oe ? U !== null ? U + "Capture" : null : U;
            oe = [];
            for (var T = B, R; T !== null;) {
                var Y = T;
                if (R = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || R === null || _ === null || (Y = en(T, _), Y != null && oe.push(zn(T, Y, R))), Be)
                    break;
                T = T.return;
            }
            0 < oe.length && (U = new G(U, W, null, a, K), X.push({ event: U, listeners: oe }));
        }
    } if ((s & 7) === 0) {
        e: {
            if (U = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", U && a !== Cc && (W = a.relatedTarget || a.fromElement) && (Pa(W) || W[$a]))
                break e;
            if ((G || U) && (U = K.window === K ? K : (U = K.ownerDocument) ? U.defaultView || U.parentWindow : window, G ? (W = a.relatedTarget || a.toElement, G = B, W = W ? Pa(W) : null, W !== null && (Be = m(W), oe = W.tag, W !== Be || oe !== 5 && oe !== 27 && oe !== 6) && (W = null)) : (G = null, W = B), G !== W)) {
                if (oe = xm, Y = "onMouseLeave", _ = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (oe = gm, Y = "onPointerLeave", _ = "onPointerEnter", T = "pointer"), Be = G == null ? U : Wl(G), R = W == null ? U : Wl(W), U = new oe(Y, T + "leave", G, a, K), U.target = Be, U.relatedTarget = R, Y = null, Pa(K) === B && (oe = new oe(_, T + "enter", W, a, K), oe.target = R, oe.relatedTarget = Be, Y = oe), Be = Y, G && W)
                    t: {
                        for (oe = W0, _ = G, T = W, R = 0, Y = _; Y; Y = oe(Y))
                            R++;
                        Y = 0;
                        for (var re = T; re; re = oe(re))
                            Y++;
                        for (; 0 < R - Y;)
                            _ = oe(_), R--;
                        for (; 0 < Y - R;)
                            T = oe(T), Y--;
                        for (; R--;) {
                            if (_ === T || T !== null && _ === T.alternate) {
                                oe = _;
                                break t;
                            }
                            _ = oe(_), T = oe(T);
                        }
                        oe = null;
                    }
                else
                    oe = null;
                G !== null && ox(X, U, G, oe, !1), W !== null && Be !== null && ox(X, Be, W, oe, !0);
            }
        }
        e: {
            if (U = B ? Wl(B) : window, G = U.nodeName && U.nodeName.toLowerCase(), G === "select" || G === "input" && U.type === "file")
                var Te = Cm;
            else if (wm(U))
                if (km)
                    Te = d0;
                else {
                    Te = c0;
                    var ae = i0;
                }
            else
                G = U.nodeName, !G || G.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? B && Sc(B.elementType) && (Te = Cm) : Te = o0;
            if (Te && (Te = Te(e, B))) {
                Sm(X, Te, a, K);
                break e;
            }
            ae && ae(e, U, B), e === "focusout" && B && U.type === "number" && B.memoizedProps.value != null && wc(U, "number", U.value);
        }
        switch (ae = B ? Wl(B) : window, e) {
            case "focusin":
                (wm(ae) || ae.contentEditable === "true") && (rl = ae, Lc = B, on = null);
                break;
            case "focusout":
                on = Lc = rl = null;
                break;
            case "mousedown":
                Uc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Uc = !1, zm(X, a, K);
                break;
            case "selectionchange": if (m0)
                break;
            case "keydown":
            case "keyup": zm(X, a, K);
        }
        var pe;
        if (zc)
            e: {
                switch (e) {
                    case "compositionstart":
                        var Ne = "onCompositionStart";
                        break e;
                    case "compositionend":
                        Ne = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        Ne = "onCompositionUpdate";
                        break e;
                }
                Ne = void 0;
            }
        else
            nl ? jm(e, a) && (Ne = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ne = "onCompositionStart");
        Ne && (bm && a.locale !== "ko" && (nl || Ne !== "onCompositionStart" ? Ne === "onCompositionEnd" && nl && (pe = fm()) : (Ps = K, Ec = "value" in Ps ? Ps.value : Ps.textContent, nl = !0)), ae = ui(B, Ne), 0 < ae.length && (Ne = new pm(Ne, e, null, a, K), X.push({ event: Ne, listeners: ae }), pe ? Ne.data = pe : (pe = Nm(a), pe !== null && (Ne.data = pe)))), (pe = s0 ? a0(e, a) : l0(e, a)) && (Ne = ui(B, "onBeforeInput"), 0 < Ne.length && (ae = new pm("onBeforeInput", "beforeinput", null, a, K), X.push({ event: ae, listeners: Ne }), ae.data = pe)), J0(X, e, B, a, K);
    } ix(X, s); }); }
    function zn(e, s, a) { return { instance: e, listener: s, currentTarget: a }; }
    function ui(e, s) { for (var a = s + "Capture", r = []; e !== null;) {
        var o = e, d = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || d === null || (o = en(e, a), o != null && r.unshift(zn(e, o, d)), o = en(e, s), o != null && r.push(zn(e, o, d))), e.tag === 3)
            return r;
        e = e.return;
    } return []; }
    function W0(e) { if (e === null)
        return null; do
        e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27); return e || null; }
    function ox(e, s, a, r, o) { for (var d = s._reactName, h = []; a !== null && a !== r;) {
        var g = a, C = g.alternate, B = g.stateNode;
        if (g = g.tag, C !== null && C === r)
            break;
        g !== 5 && g !== 26 && g !== 27 || B === null || (C = B, o ? (B = en(a, d), B != null && h.unshift(zn(a, B, C))) : o || (B = en(a, d), B != null && h.push(zn(a, B, C)))), a = a.return;
    } h.length !== 0 && e.push({ event: s, listeners: h }); }
    var ey = /\r\n?/g, ty = /\u0000|\uFFFD/g;
    function dx(e) {
        return (typeof e == "string" ? e : "" + e).replace(ey, `
`).replace(ty, "");
    }
    function ux(e, s) { return s = dx(s), dx(e) === s; }
    function Re(e, s, a, r, o, d) { switch (a) {
        case "children":
            typeof r == "string" ? s === "body" || s === "textarea" && r === "" || sl(e, r) : (typeof r == "number" || typeof r == "bigint") && s !== "body" && sl(e, "" + r);
            break;
        case "className":
            xr(e, "class", r);
            break;
        case "tabIndex":
            xr(e, "tabindex", r);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            xr(e, a, r);
            break;
        case "style":
            dm(e, r, d);
            break;
        case "data": if (s !== "object") {
            xr(e, "data", r);
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
            r = gr("" + r), e.setAttribute(a, r);
            break;
        case "action":
        case "formAction":
            if (typeof r == "function") {
                e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break;
            }
            else
                typeof d == "function" && (a === "formAction" ? (s !== "input" && Re(e, s, "name", o.name, o, null), Re(e, s, "formEncType", o.formEncType, o, null), Re(e, s, "formMethod", o.formMethod, o, null), Re(e, s, "formTarget", o.formTarget, o, null)) : (Re(e, s, "encType", o.encType, o, null), Re(e, s, "method", o.method, o, null), Re(e, s, "target", o.target, o, null)));
            if (r == null || typeof r == "symbol" || typeof r == "boolean") {
                e.removeAttribute(a);
                break;
            }
            r = gr("" + r), e.setAttribute(a, r);
            break;
        case "onClick":
            r != null && (e.onclick = Ss);
            break;
        case "onScroll":
            r != null && ve("scroll", e);
            break;
        case "onScrollEnd":
            r != null && ve("scrollend", e);
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
            a = gr("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
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
            ve("beforetoggle", e), ve("toggle", e), hr(e, "popover", r);
            break;
        case "xlinkActuate":
            ws(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
            break;
        case "xlinkArcrole":
            ws(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
            break;
        case "xlinkRole":
            ws(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
            break;
        case "xlinkShow":
            ws(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
            break;
        case "xlinkTitle":
            ws(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
            break;
        case "xlinkType":
            ws(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
            break;
        case "xmlBase":
            ws(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
            break;
        case "xmlLang":
            ws(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
            break;
        case "xmlSpace":
            ws(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
            break;
        case "is":
            hr(e, "is", r);
            break;
        case "innerText":
        case "textContent": break;
        default: (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Eb.get(a) || a, hr(e, a, r));
    } }
    function ud(e, s, a, r, o, d) { switch (a) {
        case "style":
            dm(e, r, d);
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
            typeof r == "string" ? sl(e, r) : (typeof r == "number" || typeof r == "bigint") && sl(e, "" + r);
            break;
        case "onScroll":
            r != null && ve("scroll", e);
            break;
        case "onScrollEnd":
            r != null && ve("scrollend", e);
            break;
        case "onClick":
            r != null && (e.onclick = Ss);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref": break;
        case "innerText":
        case "textContent": break;
        default: if (!tm.hasOwnProperty(a))
            e: {
                if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), s = a.slice(2, o ? a.length - 7 : void 0), d = e[vt] || null, d = d != null ? d[a] : null, typeof d == "function" && e.removeEventListener(s, d, o), typeof r == "function")) {
                    typeof d != "function" && d !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(s, r, o);
                    break e;
                }
                a in e ? e[a] = r : r === !0 ? e.setAttribute(a, "") : hr(e, a, r);
            }
    } }
    function ft(e, s, a) { switch (s) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li": break;
        case "img":
            ve("error", e), ve("load", e);
            var r = !1, o = !1, d;
            for (d in a)
                if (a.hasOwnProperty(d)) {
                    var h = a[d];
                    if (h != null)
                        switch (d) {
                            case "src":
                                r = !0;
                                break;
                            case "srcSet":
                                o = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML": throw Error(c(137, s));
                            default: Re(e, s, d, h, a, null);
                        }
                }
            o && Re(e, s, "srcSet", a.srcSet, a, null), r && Re(e, s, "src", a.src, a, null);
            return;
        case "input":
            ve("invalid", e);
            var g = d = h = o = null, C = null, B = null;
            for (r in a)
                if (a.hasOwnProperty(r)) {
                    var K = a[r];
                    if (K != null)
                        switch (r) {
                            case "name":
                                o = K;
                                break;
                            case "type":
                                h = K;
                                break;
                            case "checked":
                                C = K;
                                break;
                            case "defaultChecked":
                                B = K;
                                break;
                            case "value":
                                d = K;
                                break;
                            case "defaultValue":
                                g = K;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (K != null)
                                    throw Error(c(137, s));
                                break;
                            default: Re(e, s, r, K, a, null);
                        }
                }
            rm(e, d, g, C, B, h, o, !1);
            return;
        case "select":
            ve("invalid", e), r = h = d = null;
            for (o in a)
                if (a.hasOwnProperty(o) && (g = a[o], g != null))
                    switch (o) {
                        case "value":
                            d = g;
                            break;
                        case "defaultValue":
                            h = g;
                            break;
                        case "multiple": r = g;
                        default: Re(e, s, o, g, a, null);
                    }
            s = d, a = h, e.multiple = !!r, s != null ? tl(e, !!r, s, !1) : a != null && tl(e, !!r, a, !0);
            return;
        case "textarea":
            ve("invalid", e), d = o = r = null;
            for (h in a)
                if (a.hasOwnProperty(h) && (g = a[h], g != null))
                    switch (h) {
                        case "value":
                            r = g;
                            break;
                        case "defaultValue":
                            o = g;
                            break;
                        case "children":
                            d = g;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (g != null)
                                throw Error(c(91));
                            break;
                        default: Re(e, s, h, g, a, null);
                    }
            cm(e, r, o, d);
            return;
        case "option":
            for (C in a)
                if (a.hasOwnProperty(C) && (r = a[C], r != null))
                    switch (C) {
                        case "selected":
                            e.selected = r && typeof r != "function" && typeof r != "symbol";
                            break;
                        default: Re(e, s, C, r, a, null);
                    }
            return;
        case "dialog":
            ve("beforetoggle", e), ve("toggle", e), ve("cancel", e), ve("close", e);
            break;
        case "iframe":
        case "object":
            ve("load", e);
            break;
        case "video":
        case "audio":
            for (r = 0; r < _n.length; r++)
                ve(_n[r], e);
            break;
        case "image":
            ve("error", e), ve("load", e);
            break;
        case "details":
            ve("toggle", e);
            break;
        case "embed":
        case "source":
        case "link": ve("error", e), ve("load", e);
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
                        default: Re(e, s, B, r, a, null);
                    }
            return;
        default: if (Sc(s)) {
            for (K in a)
                a.hasOwnProperty(K) && (r = a[K], r !== void 0 && ud(e, s, K, r, a, void 0));
            return;
        }
    } for (g in a)
        a.hasOwnProperty(g) && (r = a[g], r != null && Re(e, s, g, r, a, null)); }
    function sy(e, s, a, r) { switch (s) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li": break;
        case "input":
            var o = null, d = null, h = null, g = null, C = null, B = null, K = null;
            for (G in a) {
                var X = a[G];
                if (a.hasOwnProperty(G) && X != null)
                    switch (G) {
                        case "checked": break;
                        case "value": break;
                        case "defaultValue": C = X;
                        default: r.hasOwnProperty(G) || Re(e, s, G, null, r, X);
                    }
            }
            for (var U in r) {
                var G = r[U];
                if (X = a[U], r.hasOwnProperty(U) && (G != null || X != null))
                    switch (U) {
                        case "type":
                            d = G;
                            break;
                        case "name":
                            o = G;
                            break;
                        case "checked":
                            B = G;
                            break;
                        case "defaultChecked":
                            K = G;
                            break;
                        case "value":
                            h = G;
                            break;
                        case "defaultValue":
                            g = G;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (G != null)
                                throw Error(c(137, s));
                            break;
                        default: G !== X && Re(e, s, U, G, r, X);
                    }
            }
            Nc(e, h, g, C, B, K, d, o);
            return;
        case "select":
            G = h = g = U = null;
            for (d in a)
                if (C = a[d], a.hasOwnProperty(d) && C != null)
                    switch (d) {
                        case "value": break;
                        case "multiple": G = C;
                        default: r.hasOwnProperty(d) || Re(e, s, d, null, r, C);
                    }
            for (o in r)
                if (d = r[o], C = a[o], r.hasOwnProperty(o) && (d != null || C != null))
                    switch (o) {
                        case "value":
                            U = d;
                            break;
                        case "defaultValue":
                            g = d;
                            break;
                        case "multiple": h = d;
                        default: d !== C && Re(e, s, o, d, r, C);
                    }
            s = g, a = h, r = G, U != null ? tl(e, !!a, U, !1) : !!r != !!a && (s != null ? tl(e, !!a, s, !0) : tl(e, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            G = U = null;
            for (g in a)
                if (o = a[g], a.hasOwnProperty(g) && o != null && !r.hasOwnProperty(g))
                    switch (g) {
                        case "value": break;
                        case "children": break;
                        default: Re(e, s, g, null, r, o);
                    }
            for (h in r)
                if (o = r[h], d = a[h], r.hasOwnProperty(h) && (o != null || d != null))
                    switch (h) {
                        case "value":
                            U = o;
                            break;
                        case "defaultValue":
                            G = o;
                            break;
                        case "children": break;
                        case "dangerouslySetInnerHTML":
                            if (o != null)
                                throw Error(c(91));
                            break;
                        default: o !== d && Re(e, s, h, o, r, d);
                    }
            im(e, U, G);
            return;
        case "option":
            for (var W in a)
                if (U = a[W], a.hasOwnProperty(W) && U != null && !r.hasOwnProperty(W))
                    switch (W) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default: Re(e, s, W, null, r, U);
                    }
            for (C in r)
                if (U = r[C], G = a[C], r.hasOwnProperty(C) && U !== G && (U != null || G != null))
                    switch (C) {
                        case "selected":
                            e.selected = U && typeof U != "function" && typeof U != "symbol";
                            break;
                        default: Re(e, s, C, U, r, G);
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
            for (var oe in a)
                U = a[oe], a.hasOwnProperty(oe) && U != null && !r.hasOwnProperty(oe) && Re(e, s, oe, null, r, U);
            for (B in r)
                if (U = r[B], G = a[B], r.hasOwnProperty(B) && U !== G && (U != null || G != null))
                    switch (B) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (U != null)
                                throw Error(c(137, s));
                            break;
                        default: Re(e, s, B, U, r, G);
                    }
            return;
        default: if (Sc(s)) {
            for (var Be in a)
                U = a[Be], a.hasOwnProperty(Be) && U !== void 0 && !r.hasOwnProperty(Be) && ud(e, s, Be, void 0, r, U);
            for (K in r)
                U = r[K], G = a[K], !r.hasOwnProperty(K) || U === G || U === void 0 && G === void 0 || ud(e, s, K, U, r, G);
            return;
        }
    } for (var _ in a)
        U = a[_], a.hasOwnProperty(_) && U != null && !r.hasOwnProperty(_) && Re(e, s, _, null, r, U); for (X in r)
        U = r[X], G = a[X], !r.hasOwnProperty(X) || U === G || U == null && G == null || Re(e, s, X, U, r, G); }
    function mx(e) { switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link": return !0;
        default: return !1;
    } }
    function ay() { if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, s = 0, a = performance.getEntriesByType("resource"), r = 0; r < a.length; r++) {
            var o = a[r], d = o.transferSize, h = o.initiatorType, g = o.duration;
            if (d && g && mx(h)) {
                for (h = 0, g = o.responseEnd, r += 1; r < a.length; r++) {
                    var C = a[r], B = C.startTime;
                    if (B > g)
                        break;
                    var K = C.transferSize, X = C.initiatorType;
                    K && mx(X) && (C = C.responseEnd, h += K * (C < g ? 1 : (g - B) / (C - B)));
                }
                if (--r, s += 8 * (d + h) / (o.duration / 1e3), e++, 10 < e)
                    break;
            }
        }
        if (0 < e)
            return s / e / 1e6;
    } return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5; }
    var md = null, fd = null;
    function mi(e) { return e.nodeType === 9 ? e : e.ownerDocument; }
    function fx(e) { switch (e) {
        case "http://www.w3.org/2000/svg": return 1;
        case "http://www.w3.org/1998/Math/MathML": return 2;
        default: return 0;
    } }
    function hx(e, s) { if (e === 0)
        switch (s) {
            case "svg": return 1;
            case "math": return 2;
            default: return 0;
        } return e === 1 && s === "foreignObject" ? 0 : e; }
    function hd(e, s) { return e === "textarea" || e === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.children == "bigint" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null; }
    var xd = null;
    function ly() { var e = window.event; return e && e.type === "popstate" ? e === xd ? !1 : (xd = e, !0) : (xd = null, !1); }
    var xx = typeof setTimeout == "function" ? setTimeout : void 0, ny = typeof clearTimeout == "function" ? clearTimeout : void 0, px = typeof Promise == "function" ? Promise : void 0, ry = typeof queueMicrotask == "function" ? queueMicrotask : typeof px < "u" ? function (e) { return px.resolve(null).then(e).catch(iy); } : xx;
    function iy(e) { setTimeout(function () { throw e; }); }
    function ha(e) { return e === "head"; }
    function gx(e, s) { var a = s, r = 0; do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
            if (a = o.data, a === "/$" || a === "/&") {
                if (r === 0) {
                    e.removeChild(o), _l(s);
                    return;
                }
                r--;
            }
            else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
                r++;
            else if (a === "html")
                Rn(e.ownerDocument.documentElement);
            else if (a === "head") {
                a = e.ownerDocument.head, Rn(a);
                for (var d = a.firstChild; d;) {
                    var h = d.nextSibling, g = d.nodeName;
                    d[Il] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            else
                a === "body" && Rn(e.ownerDocument.body);
        a = o;
    } while (a); _l(s); }
    function bx(e, s) { var a = e; e = 0; do {
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
    function pd(e) { var s = e.firstChild; for (s && s.nodeType === 10 && (s = s.nextSibling); s;) {
        var a = s;
        switch (s = s.nextSibling, a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                pd(a), vc(a);
                continue;
            case "SCRIPT":
            case "STYLE": continue;
            case "LINK": if (a.rel.toLowerCase() === "stylesheet")
                continue;
        }
        e.removeChild(a);
    } }
    function cy(e, s, a, r) { for (; e.nodeType === 1;) {
        var o = a;
        if (e.nodeName.toLowerCase() !== s.toLowerCase()) {
            if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                break;
        }
        else if (r) {
            if (!e[Il])
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
        if (e = Pt(e.nextSibling), e === null)
            break;
    } return null; }
    function oy(e, s, a) { if (s === "")
        return null; for (; e.nodeType !== 3;)
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Pt(e.nextSibling), e === null))
            return null; return e; }
    function yx(e, s) { for (; e.nodeType !== 8;)
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !s || (e = Pt(e.nextSibling), e === null))
            return null; return e; }
    function gd(e) { return e.data === "$?" || e.data === "$~"; }
    function bd(e) { return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"; }
    function dy(e, s) { var a = e.ownerDocument; if (e.data === "$~")
        e._reactRetry = s;
    else if (e.data !== "$?" || a.readyState !== "loading")
        s();
    else {
        var r = function () { s(), a.removeEventListener("DOMContentLoaded", r); };
        a.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
    } }
    function Pt(e) { for (; e != null; e = e.nextSibling) {
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
    var yd = null;
    function vx(e) { e = e.nextSibling; for (var s = 0; e;) {
        if (e.nodeType === 8) {
            var a = e.data;
            if (a === "/$" || a === "/&") {
                if (s === 0)
                    return Pt(e.nextSibling);
                s--;
            }
            else
                a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || s++;
        }
        e = e.nextSibling;
    } return null; }
    function jx(e) { e = e.previousSibling; for (var s = 0; e;) {
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
    function Nx(e, s, a) { switch (s = mi(a), e) {
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
    function Rn(e) { for (var s = e.attributes; s.length;)
        e.removeAttributeNode(s[0]); vc(e); }
    var It = new Map, wx = new Set;
    function fi(e) { return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument; }
    var Hs = P.d;
    P.d = { f: uy, r: my, D: fy, C: hy, L: xy, m: py, X: by, S: gy, M: yy };
    function uy() { var e = Hs.f(), s = li(); return e || s; }
    function my(e) { var s = Ia(e); s !== null && s.tag === 5 && s.type === "form" ? Hf(s) : Hs.r(e); }
    var Dl = typeof document > "u" ? null : document;
    function Sx(e, s, a) { var r = Dl; if (r && typeof s == "string" && s) {
        var o = Kt(s);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), wx.has(o) || (wx.add(o), e = { rel: e, crossOrigin: a, href: s }, r.querySelector(o) === null && (s = r.createElement("link"), ft(s, "link", e), it(s), r.head.appendChild(s)));
    } }
    function fy(e) { Hs.D(e), Sx("dns-prefetch", e, null); }
    function hy(e, s) { Hs.C(e, s), Sx("preconnect", e, s); }
    function xy(e, s, a) { Hs.L(e, s, a); var r = Dl; if (r && e && s) {
        var o = 'link[rel="preload"][as="' + Kt(s) + '"]';
        s === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Kt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Kt(a.imageSizes) + '"]')) : o += '[href="' + Kt(e) + '"]';
        var d = o;
        switch (s) {
            case "style":
                d = Ml(e);
                break;
            case "script": d = Ol(e);
        }
        It.has(d) || (e = p({ rel: "preload", href: s === "image" && a && a.imageSrcSet ? void 0 : e, as: s }, a), It.set(d, e), r.querySelector(o) !== null || s === "style" && r.querySelector(Bn(d)) || s === "script" && r.querySelector(qn(d)) || (s = r.createElement("link"), ft(s, "link", e), it(s), r.head.appendChild(s)));
    } }
    function py(e, s) { Hs.m(e, s); var a = Dl; if (a && e) {
        var r = s && typeof s.as == "string" ? s.as : "script", o = 'link[rel="modulepreload"][as="' + Kt(r) + '"][href="' + Kt(e) + '"]', d = o;
        switch (r) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script": d = Ol(e);
        }
        if (!It.has(d) && (e = p({ rel: "modulepreload", href: e }, s), It.set(d, e), a.querySelector(o) === null)) {
            switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script": if (a.querySelector(qn(d)))
                    return;
            }
            r = a.createElement("link"), ft(r, "link", e), it(r), a.head.appendChild(r);
        }
    } }
    function gy(e, s, a) { Hs.S(e, s, a); var r = Dl; if (r && e) {
        var o = Wa(r).hoistableStyles, d = Ml(e);
        s = s || "default";
        var h = o.get(d);
        if (!h) {
            var g = { loading: 0, preload: null };
            if (h = r.querySelector(Bn(d)))
                g.loading = 5;
            else {
                e = p({ rel: "stylesheet", href: e, "data-precedence": s }, a), (a = It.get(d)) && vd(e, a);
                var C = h = r.createElement("link");
                it(C), ft(C, "link", e), C._p = new Promise(function (B, K) { C.onload = B, C.onerror = K; }), C.addEventListener("load", function () { g.loading |= 1; }), C.addEventListener("error", function () { g.loading |= 2; }), g.loading |= 4, hi(h, s, r);
            }
            h = { type: "stylesheet", instance: h, count: 1, state: g }, o.set(d, h);
        }
    } }
    function by(e, s) { Hs.X(e, s); var a = Dl; if (a && e) {
        var r = Wa(a).hoistableScripts, o = Ol(e), d = r.get(o);
        d || (d = a.querySelector(qn(o)), d || (e = p({ src: e, async: !0 }, s), (s = It.get(o)) && jd(e, s), d = a.createElement("script"), it(d), ft(d, "link", e), a.head.appendChild(d)), d = { type: "script", instance: d, count: 1, state: null }, r.set(o, d));
    } }
    function yy(e, s) { Hs.M(e, s); var a = Dl; if (a && e) {
        var r = Wa(a).hoistableScripts, o = Ol(e), d = r.get(o);
        d || (d = a.querySelector(qn(o)), d || (e = p({ src: e, async: !0, type: "module" }, s), (s = It.get(o)) && jd(e, s), d = a.createElement("script"), it(d), ft(d, "link", e), a.head.appendChild(d)), d = { type: "script", instance: d, count: 1, state: null }, r.set(o, d));
    } }
    function Cx(e, s, a, r) { var o = (o = lt.current) ? fi(o) : null; if (!o)
        throw Error(c(446)); switch (e) {
        case "meta":
        case "title": return null;
        case "style": return typeof a.precedence == "string" && typeof a.href == "string" ? (s = Ml(a.href), a = Wa(o).hoistableStyles, r = a.get(s), r || (r = { type: "style", instance: null, count: 0, state: null }, a.set(s, r)), r) : { type: "void", instance: null, count: 0, state: null };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                e = Ml(a.href);
                var d = Wa(o).hoistableStyles, h = d.get(e);
                if (h || (o = o.ownerDocument || o, h = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, d.set(e, h), (d = o.querySelector(Bn(e))) && !d._p && (h.instance = d, h.state.loading = 5), It.has(e) || (a = { rel: "preload", as: "style", href: a.href, crossOrigin: a.crossOrigin, integrity: a.integrity, media: a.media, hrefLang: a.hrefLang, referrerPolicy: a.referrerPolicy }, It.set(e, a), d || vy(o, e, a, h.state))), s && r === null)
                    throw Error(c(528, ""));
                return h;
            }
            if (s && r !== null)
                throw Error(c(529, ""));
            return null;
        case "script": return s = a.async, a = a.src, typeof a == "string" && s && typeof s != "function" && typeof s != "symbol" ? (s = Ol(a), a = Wa(o).hoistableScripts, r = a.get(s), r || (r = { type: "script", instance: null, count: 0, state: null }, a.set(s, r)), r) : { type: "void", instance: null, count: 0, state: null };
        default: throw Error(c(444, e));
    } }
    function Ml(e) { return 'href="' + Kt(e) + '"'; }
    function Bn(e) { return 'link[rel="stylesheet"][' + e + "]"; }
    function kx(e) { return p({}, e, { "data-precedence": e.precedence, precedence: null }); }
    function vy(e, s, a, r) { e.querySelector('link[rel="preload"][as="style"][' + s + "]") ? r.loading = 1 : (s = e.createElement("link"), r.preload = s, s.addEventListener("load", function () { return r.loading |= 1; }), s.addEventListener("error", function () { return r.loading |= 2; }), ft(s, "link", a), it(s), e.head.appendChild(s)); }
    function Ol(e) { return '[src="' + Kt(e) + '"]'; }
    function qn(e) { return "script[async]" + e; }
    function Ax(e, s, a) { if (s.count++, s.instance === null)
        switch (s.type) {
            case "style":
                var r = e.querySelector('style[data-href~="' + Kt(a.href) + '"]');
                if (r)
                    return s.instance = r, it(r), r;
                var o = p({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null });
                return r = (e.ownerDocument || e).createElement("style"), it(r), ft(r, "style", o), hi(r, a.precedence, e), s.instance = r;
            case "stylesheet":
                o = Ml(a.href);
                var d = e.querySelector(Bn(o));
                if (d)
                    return s.state.loading |= 4, s.instance = d, it(d), d;
                r = kx(a), (o = It.get(o)) && vd(r, o), d = (e.ownerDocument || e).createElement("link"), it(d);
                var h = d;
                return h._p = new Promise(function (g, C) { h.onload = g, h.onerror = C; }), ft(d, "link", r), s.state.loading |= 4, hi(d, a.precedence, e), s.instance = d;
            case "script": return d = Ol(a.src), (o = e.querySelector(qn(d))) ? (s.instance = o, it(o), o) : (r = a, (o = It.get(d)) && (r = p({}, a), jd(r, o)), e = e.ownerDocument || e, o = e.createElement("script"), it(o), ft(o, "link", r), e.head.appendChild(o), s.instance = o);
            case "void": return null;
            default: throw Error(c(443, s.type));
        }
    else
        s.type === "stylesheet" && (s.state.loading & 4) === 0 && (r = s.instance, s.state.loading |= 4, hi(r, a.precedence, e)); return s.instance; }
    function hi(e, s, a) { for (var r = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = r.length ? r[r.length - 1] : null, d = o, h = 0; h < r.length; h++) {
        var g = r[h];
        if (g.dataset.precedence === s)
            d = g;
        else if (d !== o)
            break;
    } d ? d.parentNode.insertBefore(e, d.nextSibling) : (s = a.nodeType === 9 ? a.head : a, s.insertBefore(e, s.firstChild)); }
    function vd(e, s) { e.crossOrigin == null && (e.crossOrigin = s.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = s.referrerPolicy), e.title == null && (e.title = s.title); }
    function jd(e, s) { e.crossOrigin == null && (e.crossOrigin = s.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = s.referrerPolicy), e.integrity == null && (e.integrity = s.integrity); }
    var xi = null;
    function Tx(e, s, a) { if (xi === null) {
        var r = new Map, o = xi = new Map;
        o.set(a, r);
    }
    else
        o = xi, r = o.get(a), r || (r = new Map, o.set(a, r)); if (r.has(e))
        return r; for (r.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var d = a[o];
        if (!(d[Il] || d[ot] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
            var h = d.getAttribute(s) || "";
            h = e + h;
            var g = r.get(h);
            g ? g.push(d) : r.set(h, [d]);
        }
    } return r; }
    function Ex(e, s, a) { e = e.ownerDocument || e, e.head.insertBefore(a, s === "title" ? e.querySelector("head > title") : null); }
    function jy(e, s, a) { if (a === 1 || s.itemProp != null)
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
    function Dx(e) { return !(e.type === "stylesheet" && (e.state.loading & 3) === 0); }
    function Ny(e, s, a, r) { if (a.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (a.state.loading & 4) === 0) {
        if (a.instance === null) {
            var o = Ml(r.href), d = s.querySelector(Bn(o));
            if (d) {
                s = d._p, s !== null && typeof s == "object" && typeof s.then == "function" && (e.count++, e = pi.bind(e), s.then(e, e)), a.state.loading |= 4, a.instance = d, it(d);
                return;
            }
            d = s.ownerDocument || s, r = kx(r), (o = It.get(o)) && vd(r, o), d = d.createElement("link"), it(d);
            var h = d;
            h._p = new Promise(function (g, C) { h.onload = g, h.onerror = C; }), ft(d, "link", r), a.instance = d;
        }
        e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(a, s), (s = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = pi.bind(e), s.addEventListener("load", a), s.addEventListener("error", a));
    } }
    var Nd = 0;
    function wy(e, s) { return e.stylesheets && e.count === 0 && bi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function (a) { var r = setTimeout(function () { if (e.stylesheets && bi(e, e.stylesheets), e.unsuspend) {
        var d = e.unsuspend;
        e.unsuspend = null, d();
    } }, 6e4 + s); 0 < e.imgBytes && Nd === 0 && (Nd = 62500 * ay()); var o = setTimeout(function () { if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && bi(e, e.stylesheets), e.unsuspend)) {
        var d = e.unsuspend;
        e.unsuspend = null, d();
    } }, (e.imgBytes > Nd ? 50 : 800) + s); return e.unsuspend = a, function () { e.unsuspend = null, clearTimeout(r), clearTimeout(o); }; } : null; }
    function pi() { if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
            bi(this, this.stylesheets);
        else if (this.unsuspend) {
            var e = this.unsuspend;
            this.unsuspend = null, e();
        }
    } }
    var gi = null;
    function bi(e, s) { e.stylesheets = null, e.unsuspend !== null && (e.count++, gi = new Map, s.forEach(Sy, e), gi = null, pi.call(e)); }
    function Sy(e, s) { if (!(s.state.loading & 4)) {
        var a = gi.get(e);
        if (a)
            var r = a.get(null);
        else {
            a = new Map, gi.set(e, a);
            for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), d = 0; d < o.length; d++) {
                var h = o[d];
                (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (a.set(h.dataset.precedence, h), r = h);
            }
            r && a.set(null, r);
        }
        o = s.instance, h = o.getAttribute("data-precedence"), d = a.get(h) || r, d === r && a.set(null, o), a.set(h, o), this.count++, r = pi.bind(this), o.addEventListener("load", r), o.addEventListener("error", r), d ? d.parentNode.insertBefore(o, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), s.state.loading |= 4;
    } }
    var Ln = { $$typeof: q, Provider: null, Consumer: null, _currentValue: F, _currentValue2: F, _threadCount: 0 };
    function Cy(e, s, a, r, o, d, h, g, C) { this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = pc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pc(0), this.hiddenUpdates = pc(null), this.identifierPrefix = r, this.onUncaughtError = o, this.onCaughtError = d, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = C, this.incompleteTransitions = new Map; }
    function Mx(e, s, a, r, o, d, h, g, C, B, K, X) { return e = new Cy(e, s, a, h, C, B, K, X, g), s = 1, d === !0 && (s |= 24), d = zt(3, null, null, s), e.current = d, d.stateNode = e, s = eo(), s.refCount++, e.pooledCache = s, s.refCount++, d.memoizedState = { element: r, isDehydrated: a, cache: s }, lo(d), e; }
    function Ox(e) { return e ? (e = ol, e) : ol; }
    function _x(e, s, a, r, o, d) { o = Ox(o), r.context === null ? r.context = o : r.pendingContext = o, r = aa(s), r.payload = { element: a }, d = d === void 0 ? null : d, d !== null && (r.callback = d), a = la(e, r, s), a !== null && (kt(a, e, s), pn(a, e, s)); }
    function zx(e, s) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < s ? a : s;
    } }
    function wd(e, s) { zx(e, s), (e = e.alternate) && zx(e, s); }
    function Rx(e) { if (e.tag === 13 || e.tag === 31) {
        var s = Da(e, 67108864);
        s !== null && kt(s, e, 67108864), wd(e, 67108864);
    } }
    function Bx(e) { if (e.tag === 13 || e.tag === 31) {
        var s = Ut();
        s = gc(s);
        var a = Da(e, s);
        a !== null && kt(a, e, s), wd(e, s);
    } }
    var yi = !0;
    function ky(e, s, a, r) { var o = H.T; H.T = null; var d = P.p; try {
        P.p = 2, Sd(e, s, a, r);
    }
    finally {
        P.p = d, H.T = o;
    } }
    function Ay(e, s, a, r) { var o = H.T; H.T = null; var d = P.p; try {
        P.p = 8, Sd(e, s, a, r);
    }
    finally {
        P.p = d, H.T = o;
    } }
    function Sd(e, s, a, r) { if (yi) {
        var o = Cd(r);
        if (o === null)
            dd(e, s, r, vi, a), Lx(e, r);
        else if (Ey(o, e, s, a, r))
            r.stopPropagation();
        else if (Lx(e, r), s & 4 && -1 < Ty.indexOf(e)) {
            for (; o !== null;) {
                var d = Ia(o);
                if (d !== null)
                    switch (d.tag) {
                        case 3:
                            if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                                var h = Ca(d.pendingLanes);
                                if (h !== 0) {
                                    var g = d;
                                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; h;) {
                                        var C = 1 << 31 - Ot(h);
                                        g.entanglements[1] |= C, h &= ~C;
                                    }
                                    ps(d), (Me & 6) === 0 && (si = Dt() + 500, On(0));
                                }
                            }
                            break;
                        case 31:
                        case 13: g = Da(d, 2), g !== null && kt(g, d, 2), li(), wd(d, 2);
                    }
                if (d = Cd(r), d === null && dd(e, s, r, vi, a), d === o)
                    break;
                o = d;
            }
            o !== null && r.stopPropagation();
        }
        else
            dd(e, s, r, null, a);
    } }
    function Cd(e) { return e = kc(e), kd(e); }
    var vi = null;
    function kd(e) { if (vi = null, e = Pa(e), e !== null) {
        var s = m(e);
        if (s === null)
            e = null;
        else {
            var a = s.tag;
            if (a === 13) {
                if (e = f(s), e !== null)
                    return e;
                e = null;
            }
            else if (a === 31) {
                if (e = x(s), e !== null)
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
    } return vi = e, null; }
    function qx(e) { switch (e) {
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
        case "message": switch (fb()) {
            case Ku: return 2;
            case Yu: return 8;
            case or:
            case hb: return 32;
            case Xu: return 268435456;
            default: return 32;
        }
        default: return 32;
    } }
    var Ad = !1, xa = null, pa = null, ga = null, Un = new Map, Hn = new Map, ba = [], Ty = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Lx(e, s) { switch (e) {
        case "focusin":
        case "focusout":
            xa = null;
            break;
        case "dragenter":
        case "dragleave":
            pa = null;
            break;
        case "mouseover":
        case "mouseout":
            ga = null;
            break;
        case "pointerover":
        case "pointerout":
            Un.delete(s.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture": Hn.delete(s.pointerId);
    } }
    function Vn(e, s, a, r, o, d) { return e === null || e.nativeEvent !== d ? (e = { blockedOn: s, domEventName: a, eventSystemFlags: r, nativeEvent: d, targetContainers: [o] }, s !== null && (s = Ia(s), s !== null && Rx(s)), e) : (e.eventSystemFlags |= r, s = e.targetContainers, o !== null && s.indexOf(o) === -1 && s.push(o), e); }
    function Ey(e, s, a, r, o) { switch (s) {
        case "focusin": return xa = Vn(xa, e, s, a, r, o), !0;
        case "dragenter": return pa = Vn(pa, e, s, a, r, o), !0;
        case "mouseover": return ga = Vn(ga, e, s, a, r, o), !0;
        case "pointerover":
            var d = o.pointerId;
            return Un.set(d, Vn(Un.get(d) || null, e, s, a, r, o)), !0;
        case "gotpointercapture": return d = o.pointerId, Hn.set(d, Vn(Hn.get(d) || null, e, s, a, r, o)), !0;
    } return !1; }
    function Ux(e) { var s = Pa(e.target); if (s !== null) {
        var a = m(s);
        if (a !== null) {
            if (s = a.tag, s === 13) {
                if (s = f(a), s !== null) {
                    e.blockedOn = s, Iu(e.priority, function () { Bx(a); });
                    return;
                }
            }
            else if (s === 31) {
                if (s = x(a), s !== null) {
                    e.blockedOn = s, Iu(e.priority, function () { Bx(a); });
                    return;
                }
            }
            else if (s === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                return;
            }
        }
    } e.blockedOn = null; }
    function ji(e) { if (e.blockedOn !== null)
        return !1; for (var s = e.targetContainers; 0 < s.length;) {
        var a = Cd(e.nativeEvent);
        if (a === null) {
            a = e.nativeEvent;
            var r = new a.constructor(a.type, a);
            Cc = r, a.target.dispatchEvent(r), Cc = null;
        }
        else
            return s = Ia(a), s !== null && Rx(s), e.blockedOn = a, !1;
        s.shift();
    } return !0; }
    function Hx(e, s, a) { ji(e) && a.delete(s); }
    function Dy() { Ad = !1, xa !== null && ji(xa) && (xa = null), pa !== null && ji(pa) && (pa = null), ga !== null && ji(ga) && (ga = null), Un.forEach(Hx), Hn.forEach(Hx); }
    function Ni(e, s) { e.blockedOn === s && (e.blockedOn = null, Ad || (Ad = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Dy))); }
    var wi = null;
    function Vx(e) { wi !== e && (wi = e, l.unstable_scheduleCallback(l.unstable_NormalPriority, function () { wi === e && (wi = null); for (var s = 0; s < e.length; s += 3) {
        var a = e[s], r = e[s + 1], o = e[s + 2];
        if (typeof r != "function") {
            if (kd(r || a) === null)
                continue;
            break;
        }
        var d = Ia(a);
        d !== null && (e.splice(s, 3), s -= 3, Co(d, { pending: !0, data: o, method: a.method, action: r }, r, o));
    } })); }
    function _l(e) { function s(C) { return Ni(C, e); } xa !== null && Ni(xa, e), pa !== null && Ni(pa, e), ga !== null && Ni(ga, e), Un.forEach(s), Hn.forEach(s); for (var a = 0; a < ba.length; a++) {
        var r = ba[a];
        r.blockedOn === e && (r.blockedOn = null);
    } for (; 0 < ba.length && (a = ba[0], a.blockedOn === null);)
        Ux(a), a.blockedOn === null && ba.shift(); if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (r = 0; r < a.length; r += 3) {
            var o = a[r], d = a[r + 1], h = o[vt] || null;
            if (typeof d == "function")
                h || Vx(a);
            else if (h) {
                var g = null;
                if (d && d.hasAttribute("formAction")) {
                    if (o = d, h = d[vt] || null)
                        g = h.formAction;
                    else if (kd(o) !== null)
                        continue;
                }
                else
                    g = h.action;
                typeof g == "function" ? a[r + 1] = g : (a.splice(r, 3), r -= 3), Vx(a);
            }
        } }
    function Gx() { function e(d) { d.canIntercept && d.info === "react-transition" && d.intercept({ handler: function () { return new Promise(function (h) { return o = h; }); }, focusReset: "manual", scroll: "manual" }); } function s() { o !== null && (o(), o = null), r || setTimeout(a, 20); } function a() { if (!r && !navigation.transition) {
        var d = navigation.currentEntry;
        d && d.url != null && navigation.navigate(d.url, { state: d.getState(), info: "react-transition", history: "replace" });
    } } if (typeof navigation == "object") {
        var r = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", s), navigation.addEventListener("navigateerror", s), setTimeout(a, 100), function () { r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", s), navigation.removeEventListener("navigateerror", s), o !== null && (o(), o = null); };
    } }
    function Td(e) { this._internalRoot = e; }
    Si.prototype.render = Td.prototype.render = function (e) { var s = this._internalRoot; if (s === null)
        throw Error(c(409)); var a = s.current, r = Ut(); _x(a, r, e, s, null, null); }, Si.prototype.unmount = Td.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
        this._internalRoot = null;
        var s = e.containerInfo;
        _x(e.current, 2, null, e, null, null), li(), s[$a] = null;
    } };
    function Si(e) { this._internalRoot = e; }
    Si.prototype.unstable_scheduleHydration = function (e) { if (e) {
        var s = Pu();
        e = { blockedOn: null, target: e, priority: s };
        for (var a = 0; a < ba.length && s !== 0 && s < ba[a].priority; a++)
            ;
        ba.splice(a, 0, e), a === 0 && Ux(e);
    } };
    var Qx = n.version;
    if (Qx !== "19.2.3")
        throw Error(c(527, Qx, "19.2.3"));
    P.findDOMNode = function (e) { var s = e._reactInternals; if (s === void 0)
        throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e))); return e = N(s), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e; };
    var My = { bundleType: 0, version: "19.2.3", rendererPackageName: "react-dom", currentDispatcherRef: H, reconcilerVersion: "19.2.3" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ci.isDisabled && Ci.supportsFiber)
            try {
                Jl = Ci.inject(My), Mt = Ci;
            }
            catch { }
    }
    return Gn.createRoot = function (e, s) { if (!u(e))
        throw Error(c(299)); var a = !1, r = "", o = $f, d = Pf, h = If; return s != null && (s.unstable_strictMode === !0 && (a = !0), s.identifierPrefix !== void 0 && (r = s.identifierPrefix), s.onUncaughtError !== void 0 && (o = s.onUncaughtError), s.onCaughtError !== void 0 && (d = s.onCaughtError), s.onRecoverableError !== void 0 && (h = s.onRecoverableError)), s = Mx(e, 1, !1, null, null, a, r, null, o, d, h, Gx), e[$a] = s.current, od(e), new Td(s); }, Gn.hydrateRoot = function (e, s, a) { if (!u(e))
        throw Error(c(299)); var r = !1, o = "", d = $f, h = Pf, g = If, C = null; return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (d = a.onUncaughtError), a.onCaughtError !== void 0 && (h = a.onCaughtError), a.onRecoverableError !== void 0 && (g = a.onRecoverableError), a.formState !== void 0 && (C = a.formState)), s = Mx(e, 1, !0, s, a ?? null, r, o, C, d, h, g, Gx), s.context = Ox(null), a = s.current, r = Ut(), r = gc(r), o = aa(r), o.callback = null, la(a, o, r), a = r, s.current.lanes = a, Pl(s, a), ps(s), e[$a] = s.current, od(e), new Si(s); }, Gn.version = "19.2.3", Gn;
}
var Zx;
function Zy() { if (Zx)
    return Ed.exports; Zx = 1; function l() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
    }
    catch (n) {
        console.error(n);
    } } return l(), Ed.exports = Xy(), Ed.exports; }
var Fy = Zy();
const Jy = qy(Fy), vs = Object.create(null);
vs.open = "0";
vs.close = "1";
vs.ping = "2";
vs.pong = "3";
vs.message = "4";
vs.upgrade = "5";
vs.noop = "6";
const Oi = Object.create(null);
Object.keys(vs).forEach(l => { Oi[vs[l]] = l; });
const Jd = { type: "error", data: "parser error" }, qp = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Lp = typeof ArrayBuffer == "function", Up = l => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(l) : l && l.buffer instanceof ArrayBuffer, ou = ({ type: l, data: n }, i, c) => qp && n instanceof Blob ? i ? c(n) : Fx(n, c) : Lp && (n instanceof ArrayBuffer || Up(n)) ? i ? c(n) : Fx(new Blob([n]), c) : c(vs[l] + (n || "")), Fx = (l, n) => { const i = new FileReader; return i.onload = function () { const c = i.result.split(",")[1]; n("b" + (c || "")); }, i.readAsDataURL(l); };
function Jx(l) { return l instanceof Uint8Array ? l : l instanceof ArrayBuffer ? new Uint8Array(l) : new Uint8Array(l.buffer, l.byteOffset, l.byteLength); }
let Od;
function $y(l, n) { if (qp && l.data instanceof Blob)
    return l.data.arrayBuffer().then(Jx).then(n); if (Lp && (l.data instanceof ArrayBuffer || Up(l.data)))
    return n(Jx(l.data)); ou(l, !1, i => { Od || (Od = new TextEncoder), n(Od.encode(i)); }); }
const $x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Zn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let l = 0; l < $x.length; l++)
    Zn[$x.charCodeAt(l)] = l;
const Py = l => { let n = l.length * .75, i = l.length, c, u = 0, m, f, x, b; l[l.length - 1] === "=" && (n--, l[l.length - 2] === "=" && n--); const N = new ArrayBuffer(n), v = new Uint8Array(N); for (c = 0; c < i; c += 4)
    m = Zn[l.charCodeAt(c)], f = Zn[l.charCodeAt(c + 1)], x = Zn[l.charCodeAt(c + 2)], b = Zn[l.charCodeAt(c + 3)], v[u++] = m << 2 | f >> 4, v[u++] = (f & 15) << 4 | x >> 2, v[u++] = (x & 3) << 6 | b & 63; return N; }, Iy = typeof ArrayBuffer == "function", du = (l, n) => { if (typeof l != "string")
    return { type: "message", data: Hp(l, n) }; const i = l.charAt(0); return i === "b" ? { type: "message", data: Wy(l.substring(1), n) } : Oi[i] ? l.length > 1 ? { type: Oi[i], data: l.substring(1) } : { type: Oi[i] } : Jd; }, Wy = (l, n) => { if (Iy) {
    const i = Py(l);
    return Hp(i, n);
}
else
    return { base64: !0, data: l }; }, Hp = (l, n) => { switch (n) {
    case "blob": return l instanceof Blob ? l : new Blob([l]);
    case "arraybuffer":
    default: return l instanceof ArrayBuffer ? l : l.buffer;
} }, Vp = "", ev = (l, n) => { const i = l.length, c = new Array(i); let u = 0; l.forEach((m, f) => { ou(m, !1, x => { c[f] = x, ++u === i && n(c.join(Vp)); }); }); }, tv = (l, n) => { const i = l.split(Vp), c = []; for (let u = 0; u < i.length; u++) {
    const m = du(i[u], n);
    if (c.push(m), m.type === "error")
        break;
} return c; };
function sv() { return new TransformStream({ transform(l, n) { $y(l, i => { const c = i.length; let u; if (c < 126)
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
let _d;
function ki(l) { return l.reduce((n, i) => n + i.length, 0); }
function Ai(l, n) { if (l[0].length === n)
    return l.shift(); const i = new Uint8Array(n); let c = 0; for (let u = 0; u < n; u++)
    i[u] = l[0][c++], c === l[0].length && (l.shift(), c = 0); return l.length && c < l[0].length && (l[0] = l[0].slice(c)), i; }
function av(l, n) { _d || (_d = new TextDecoder); const i = []; let c = 0, u = -1, m = !1; return new TransformStream({ transform(f, x) { for (i.push(f);;) {
        if (c === 0) {
            if (ki(i) < 1)
                break;
            const b = Ai(i, 1);
            m = (b[0] & 128) === 128, u = b[0] & 127, u < 126 ? c = 3 : u === 126 ? c = 1 : c = 2;
        }
        else if (c === 1) {
            if (ki(i) < 2)
                break;
            const b = Ai(i, 2);
            u = new DataView(b.buffer, b.byteOffset, b.length).getUint16(0), c = 3;
        }
        else if (c === 2) {
            if (ki(i) < 8)
                break;
            const b = Ai(i, 8), N = new DataView(b.buffer, b.byteOffset, b.length), v = N.getUint32(0);
            if (v > Math.pow(2, 21) - 1) {
                x.enqueue(Jd);
                break;
            }
            u = v * Math.pow(2, 32) + N.getUint32(4), c = 3;
        }
        else {
            if (ki(i) < u)
                break;
            const b = Ai(i, u);
            x.enqueue(du(m ? b : _d.decode(b), n)), c = 0;
        }
        if (u === 0 || u > l) {
            x.enqueue(Jd);
            break;
        }
    } } }); }
const Gp = 4;
function at(l) { if (l)
    return lv(l); }
function lv(l) { for (var n in at.prototype)
    l[n] = at.prototype[n]; return l; }
at.prototype.on = at.prototype.addEventListener = function (l, n) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + l] = this._callbacks["$" + l] || []).push(n), this; };
at.prototype.once = function (l, n) { function i() { this.off(l, i), n.apply(this, arguments); } return i.fn = n, this.on(l, i), this; };
at.prototype.off = at.prototype.removeListener = at.prototype.removeAllListeners = at.prototype.removeEventListener = function (l, n) { if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this; var i = this._callbacks["$" + l]; if (!i)
    return this; if (arguments.length == 1)
    return delete this._callbacks["$" + l], this; for (var c, u = 0; u < i.length; u++)
    if (c = i[u], c === n || c.fn === n) {
        i.splice(u, 1);
        break;
    } return i.length === 0 && delete this._callbacks["$" + l], this; };
at.prototype.emit = function (l) { this._callbacks = this._callbacks || {}; for (var n = new Array(arguments.length - 1), i = this._callbacks["$" + l], c = 1; c < arguments.length; c++)
    n[c - 1] = arguments[c]; if (i) {
    i = i.slice(0);
    for (var c = 0, u = i.length; c < u; ++c)
        i[c].apply(this, n);
} return this; };
at.prototype.emitReserved = at.prototype.emit;
at.prototype.listeners = function (l) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + l] || []; };
at.prototype.hasListeners = function (l) { return !!this.listeners(l).length; };
const $i = typeof Promise == "function" && typeof Promise.resolve == "function" ? n => Promise.resolve().then(n) : (n, i) => i(n, 0), es = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), nv = "arraybuffer";
function Qp(l, ...n) { return n.reduce((i, c) => (l.hasOwnProperty(c) && (i[c] = l[c]), i), {}); }
const rv = es.setTimeout, iv = es.clearTimeout;
function Pi(l, n) { n.useNativeTimers ? (l.setTimeoutFn = rv.bind(es), l.clearTimeoutFn = iv.bind(es)) : (l.setTimeoutFn = es.setTimeout.bind(es), l.clearTimeoutFn = es.clearTimeout.bind(es)); }
const cv = 1.33;
function ov(l) { return typeof l == "string" ? dv(l) : Math.ceil((l.byteLength || l.size) * cv); }
function dv(l) { let n = 0, i = 0; for (let c = 0, u = l.length; c < u; c++)
    n = l.charCodeAt(c), n < 128 ? i += 1 : n < 2048 ? i += 2 : n < 55296 || n >= 57344 ? i += 3 : (c++, i += 4); return i; }
function Kp() { return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5); }
function uv(l) { let n = ""; for (let i in l)
    l.hasOwnProperty(i) && (n.length && (n += "&"), n += encodeURIComponent(i) + "=" + encodeURIComponent(l[i])); return n; }
function mv(l) { let n = {}, i = l.split("&"); for (let c = 0, u = i.length; c < u; c++) {
    let m = i[c].split("=");
    n[decodeURIComponent(m[0])] = decodeURIComponent(m[1]);
} return n; }
class fv extends Error {
    constructor(n, i, c) { super(n), this.description = i, this.context = c, this.type = "TransportError"; }
}
class uu extends at {
    constructor(n) { super(), this.writable = !1, Pi(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64; }
    onError(n, i, c) { return super.emitReserved("error", new fv(n, i, c)), this; }
    open() { return this.readyState = "opening", this.doOpen(), this; }
    close() { return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this; }
    send(n) { this.readyState === "open" && this.write(n); }
    onOpen() { this.readyState = "open", this.writable = !0, super.emitReserved("open"); }
    onData(n) { const i = du(n, this.socket.binaryType); this.onPacket(i); }
    onPacket(n) { super.emitReserved("packet", n); }
    onClose(n) { this.readyState = "closed", super.emitReserved("close", n); }
    pause(n) { }
    createUri(n, i = {}) { return n + "://" + this._hostname() + this._port() + this.opts.path + this._query(i); }
    _hostname() { const n = this.opts.hostname; return n.indexOf(":") === -1 ? n : "[" + n + "]"; }
    _port() { return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""; }
    _query(n) { const i = uv(n); return i.length ? "?" + i : ""; }
}
class hv extends uu {
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
        return this.onClose({ description: "transport closed by the server" }), !1; this.onPacket(c); }; tv(n, this.socket.binaryType).forEach(i), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll()); }
    doClose() { const n = () => { this.write([{ type: "close" }]); }; this.readyState === "open" ? n() : this.once("open", n); }
    write(n) { this.writable = !1, ev(n, i => { this.doWrite(i, () => { this.writable = !0, this.emitReserved("drain"); }); }); }
    uri() { const n = this.opts.secure ? "https" : "http", i = this.query || {}; return this.opts.timestampRequests !== !1 && (i[this.opts.timestampParam] = Kp()), !this.supportsBinary && !i.sid && (i.b64 = 1), this.createUri(n, i); }
}
let Yp = !1;
try {
    Yp = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest;
}
catch { }
const xv = Yp;
function pv() { }
class gv extends hv {
    constructor(n) { if (super(n), typeof location < "u") {
        const i = location.protocol === "https:";
        let c = location.port;
        c || (c = i ? "443" : "80"), this.xd = typeof location < "u" && n.hostname !== location.hostname || c !== n.port;
    } }
    doWrite(n, i) { const c = this.request({ method: "POST", data: n }); c.on("success", i), c.on("error", (u, m) => { this.onError("xhr post error", u, m); }); }
    doPoll() { const n = this.request(); n.on("data", this.onData.bind(this)), n.on("error", (i, c) => { this.onError("xhr poll error", i, c); }), this.pollXhr = n; }
}
class ys extends at {
    constructor(n, i, c) { super(), this.createRequest = n, Pi(this, c), this._opts = c, this._method = c.method || "GET", this._uri = i, this._data = c.data !== void 0 ? c.data : null, this._create(); }
    _create() { var n; const i = Qp(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref"); i.xdomain = !!this._opts.xd; const c = this._xhr = this.createRequest(i); try {
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
    } typeof document < "u" && (this._index = ys.requestsCount++, ys.requests[this._index] = this); }
    _onError(n) { this.emitReserved("error", n, this._xhr), this._cleanup(!0); }
    _cleanup(n) { if (!(typeof this._xhr > "u" || this._xhr === null)) {
        if (this._xhr.onreadystatechange = pv, n)
            try {
                this._xhr.abort();
            }
            catch { }
        typeof document < "u" && delete ys.requests[this._index], this._xhr = null;
    } }
    _onLoad() { const n = this._xhr.responseText; n !== null && (this.emitReserved("data", n), this.emitReserved("success"), this._cleanup()); }
    abort() { this._cleanup(); }
}
ys.requestsCount = 0;
ys.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", Px);
    else if (typeof addEventListener == "function") {
        const l = "onpagehide" in es ? "pagehide" : "unload";
        addEventListener(l, Px, !1);
    }
}
function Px() { for (let l in ys.requests)
    ys.requests.hasOwnProperty(l) && ys.requests[l].abort(); }
const bv = (function () { const l = Xp({ xdomain: !1 }); return l && l.responseType !== null; })();
class yv extends gv {
    constructor(n) { super(n); const i = n && n.forceBase64; this.supportsBinary = bv && !i; }
    request(n = {}) { return Object.assign(n, { xd: this.xd }, this.opts), new ys(Xp, this.uri(), n); }
}
function Xp(l) { const n = l.xdomain; try {
    if (typeof XMLHttpRequest < "u" && (!n || xv))
        return new XMLHttpRequest;
}
catch { } if (!n)
    try {
        return new es[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    }
    catch { } }
const Zp = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class vv extends uu {
    get name() { return "websocket"; }
    doOpen() { const n = this.uri(), i = this.opts.protocols, c = Zp ? {} : Qp(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity"); this.opts.extraHeaders && (c.headers = this.opts.extraHeaders); try {
        this.ws = this.createSocket(n, i, c);
    }
    catch (u) {
        return this.emitReserved("error", u);
    } this.ws.binaryType = this.socket.binaryType, this.addEventListeners(); }
    addEventListeners() { this.ws.onopen = () => { this.opts.autoUnref && this.ws._socket.unref(), this.onOpen(); }, this.ws.onclose = n => this.onClose({ description: "websocket connection closed", context: n }), this.ws.onmessage = n => this.onData(n.data), this.ws.onerror = n => this.onError("websocket error", n); }
    write(n) { this.writable = !1; for (let i = 0; i < n.length; i++) {
        const c = n[i], u = i === n.length - 1;
        ou(c, this.supportsBinary, m => { try {
            this.doWrite(c, m);
        }
        catch { } u && $i(() => { this.writable = !0, this.emitReserved("drain"); }, this.setTimeoutFn); });
    } }
    doClose() { typeof this.ws < "u" && (this.ws.onerror = () => { }, this.ws.close(), this.ws = null); }
    uri() { const n = this.opts.secure ? "wss" : "ws", i = this.query || {}; return this.opts.timestampRequests && (i[this.opts.timestampParam] = Kp()), this.supportsBinary || (i.b64 = 1), this.createUri(n, i); }
}
const zd = es.WebSocket || es.MozWebSocket;
class jv extends vv {
    createSocket(n, i, c) { return Zp ? new zd(n, i, c) : i ? new zd(n, i) : new zd(n); }
    doWrite(n, i) { this.ws.send(i); }
}
class Nv extends uu {
    get name() { return "webtransport"; }
    doOpen() { try {
        this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    }
    catch (n) {
        return this.emitReserved("error", n);
    } this._transport.closed.then(() => { this.onClose(); }).catch(n => { this.onError("webtransport error", n); }), this._transport.ready.then(() => { this._transport.createBidirectionalStream().then(n => { const i = av(Number.MAX_SAFE_INTEGER, this.socket.binaryType), c = n.readable.pipeThrough(i).getReader(), u = sv(); u.readable.pipeTo(n.writable), this._writer = u.writable.getWriter(); const m = () => { c.read().then(({ done: x, value: b }) => { x || (this.onPacket(b), m()); }).catch(x => { }); }; m(); const f = { type: "open" }; this.query.sid && (f.data = `{"sid":"${this.query.sid}"}`), this._writer.write(f).then(() => this.onOpen()); }); }); }
    write(n) { this.writable = !1; for (let i = 0; i < n.length; i++) {
        const c = n[i], u = i === n.length - 1;
        this._writer.write(c).then(() => { u && $i(() => { this.writable = !0, this.emitReserved("drain"); }, this.setTimeoutFn); });
    } }
    doClose() { var n; (n = this._transport) === null || n === void 0 || n.close(); }
}
const wv = { websocket: jv, webtransport: Nv, polling: yv }, Sv = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Cv = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function $d(l) { if (l.length > 8e3)
    throw "URI too long"; const n = l, i = l.indexOf("["), c = l.indexOf("]"); i != -1 && c != -1 && (l = l.substring(0, i) + l.substring(i, c).replace(/:/g, ";") + l.substring(c, l.length)); let u = Sv.exec(l || ""), m = {}, f = 14; for (; f--;)
    m[Cv[f]] = u[f] || ""; return i != -1 && c != -1 && (m.source = n, m.host = m.host.substring(1, m.host.length - 1).replace(/;/g, ":"), m.authority = m.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), m.ipv6uri = !0), m.pathNames = kv(m, m.path), m.queryKey = Av(m, m.query), m; }
function kv(l, n) { const i = /\/{2,9}/g, c = n.replace(i, "/").split("/"); return (n.slice(0, 1) == "/" || n.length === 0) && c.splice(0, 1), n.slice(-1) == "/" && c.splice(c.length - 1, 1), c; }
function Av(l, n) { const i = {}; return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (c, u, m) { u && (i[u] = m); }), i; }
const Pd = typeof addEventListener == "function" && typeof removeEventListener == "function", _i = [];
Pd && addEventListener("offline", () => { _i.forEach(l => l()); }, !1);
class ja extends at {
    constructor(n, i) { if (super(), this.binaryType = nv, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (i = n, n = null), n) {
        const c = $d(n);
        i.hostname = c.host, i.secure = c.protocol === "https" || c.protocol === "wss", i.port = c.port, c.query && (i.query = c.query);
    }
    else
        i.host && (i.hostname = $d(i.host).host); Pi(this, i), this.secure = i.secure != null ? i.secure : typeof location < "u" && location.protocol === "https:", i.hostname && !i.port && (i.port = this.secure ? "443" : "80"), this.hostname = i.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = i.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, i.transports.forEach(c => { const u = c.prototype.name; this.transports.push(u), this._transportsByName[u] = c; }), this.opts = Object.assign({ path: "/engine.io", agent: !1, withCredentials: !1, upgrade: !0, timestampParam: "t", rememberUpgrade: !1, addTrailingSlash: !0, rejectUnauthorized: !0, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: !1 }, i), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = mv(this.opts.query)), Pd && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => { this.transport && (this.transport.removeAllListeners(), this.transport.close()); }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => { this._onClose("transport close", { description: "network connection lost" }); }, _i.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open(); }
    createTransport(n) { const i = Object.assign({}, this.opts.query); i.EIO = Gp, i.transport = n, this.id && (i.sid = this.id); const c = Object.assign({}, this.opts, { query: i, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[n]); return new this._transportsByName[n](c); }
    _open() { if (this.transports.length === 0) {
        this.setTimeoutFn(() => { this.emitReserved("error", "No transports available"); }, 0);
        return;
    } const n = this.opts.rememberUpgrade && ja.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0]; this.readyState = "opening"; const i = this.createTransport(n); i.open(), this.setTransport(i); }
    setTransport(n) { this.transport && this.transport.removeAllListeners(), this.transport = n, n.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", i => this._onClose("transport close", i)); }
    onOpen() { this.readyState = "open", ja.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(); }
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
        if (u && (i += ov(u)), c > 0 && i > this._maxPayload)
            return this.writeBuffer.slice(0, c);
        i += 2;
    } return this.writeBuffer; }
    _hasPingExpired() { if (!this._pingTimeoutTime)
        return !0; const n = Date.now() > this._pingTimeoutTime; return n && (this._pingTimeoutTime = 0, $i(() => { this._onClose("ping timeout"); }, this.setTimeoutFn)), n; }
    write(n, i, c) { return this._sendPacket("message", n, i, c), this; }
    send(n, i, c) { return this._sendPacket("message", n, i, c), this; }
    _sendPacket(n, i, c, u) { if (typeof i == "function" && (u = i, i = void 0), typeof c == "function" && (u = c, c = null), this.readyState === "closing" || this.readyState === "closed")
        return; c = c || {}, c.compress = c.compress !== !1; const m = { type: n, data: i, options: c }; this.emitReserved("packetCreate", m), this.writeBuffer.push(m), u && this.once("flush", u), this.flush(); }
    close() { const n = () => { this._onClose("forced close"), this.transport.close(); }, i = () => { this.off("upgrade", i), this.off("upgradeError", i), n(); }, c = () => { this.once("upgrade", i), this.once("upgradeError", i); }; return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => { this.upgrading ? c() : n(); }) : this.upgrading ? c() : n()), this; }
    _onError(n) { if (ja.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
        return this.transports.shift(), this._open(); this.emitReserved("error", n), this._onClose("transport error", n); }
    _onClose(n, i) { if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
        if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Pd && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
            const c = _i.indexOf(this._offlineEventListener);
            c !== -1 && _i.splice(c, 1);
        }
        this.readyState = "closed", this.id = null, this.emitReserved("close", n, i), this.writeBuffer = [], this._prevBufferLen = 0;
    } }
}
ja.protocol = Gp;
class Tv extends ja {
    constructor() { super(...arguments), this._upgrades = []; }
    onOpen() { if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
        for (let n = 0; n < this._upgrades.length; n++)
            this._probe(this._upgrades[n]); }
    _probe(n) { let i = this.createTransport(n), c = !1; ja.priorWebsocketSuccess = !1; const u = () => { c || (i.send([{ type: "ping", data: "probe" }]), i.once("packet", p => { if (!c)
        if (p.type === "pong" && p.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", i), !i)
                return;
            ja.priorWebsocketSuccess = i.name === "websocket", this.transport.pause(() => { c || this.readyState !== "closed" && (v(), this.setTransport(i), i.send([{ type: "upgrade" }]), this.emitReserved("upgrade", i), i = null, this.upgrading = !1, this.flush()); });
        }
        else {
            const j = new Error("probe error");
            j.transport = i.name, this.emitReserved("upgradeError", j);
        } })); }; function m() { c || (c = !0, v(), i.close(), i = null); } const f = p => { const j = new Error("probe error: " + p); j.transport = i.name, m(), this.emitReserved("upgradeError", j); }; function x() { f("transport closed"); } function b() { f("socket closed"); } function N(p) { i && p.name !== i.name && m(); } const v = () => { i.removeListener("open", u), i.removeListener("error", f), i.removeListener("close", x), this.off("close", b), this.off("upgrading", N); }; i.once("open", u), i.once("error", f), i.once("close", x), this.once("close", b), this.once("upgrading", N), this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport" ? this.setTimeoutFn(() => { c || i.open(); }, 200) : i.open(); }
    onHandshake(n) { this._upgrades = this._filterUpgrades(n.upgrades), super.onHandshake(n); }
    _filterUpgrades(n) { const i = []; for (let c = 0; c < n.length; c++)
        ~this.transports.indexOf(n[c]) && i.push(n[c]); return i; }
}
let Ev = class extends Tv {
    constructor(n, i = {}) { const c = typeof n == "object" ? n : i; (!c.transports || c.transports && typeof c.transports[0] == "string") && (c.transports = (c.transports || ["polling", "websocket", "webtransport"]).map(u => wv[u]).filter(u => !!u)), super(n, c); }
};
function Dv(l, n = "", i) { let c = l; i = i || typeof location < "u" && location, l == null && (l = i.protocol + "//" + i.host), typeof l == "string" && (l.charAt(0) === "/" && (l.charAt(1) === "/" ? l = i.protocol + l : l = i.host + l), /^(https?|wss?):\/\//.test(l) || (typeof i < "u" ? l = i.protocol + "//" + l : l = "https://" + l), c = $d(l)), c.port || (/^(http|ws)$/.test(c.protocol) ? c.port = "80" : /^(http|ws)s$/.test(c.protocol) && (c.port = "443")), c.path = c.path || "/"; const m = c.host.indexOf(":") !== -1 ? "[" + c.host + "]" : c.host; return c.id = c.protocol + "://" + m + ":" + c.port + n, c.href = c.protocol + "://" + m + (i && i.port === c.port ? "" : ":" + c.port), c; }
const Mv = typeof ArrayBuffer == "function", Ov = l => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(l) : l.buffer instanceof ArrayBuffer, Fp = Object.prototype.toString, _v = typeof Blob == "function" || typeof Blob < "u" && Fp.call(Blob) === "[object BlobConstructor]", zv = typeof File == "function" || typeof File < "u" && Fp.call(File) === "[object FileConstructor]";
function mu(l) { return Mv && (l instanceof ArrayBuffer || Ov(l)) || _v && l instanceof Blob || zv && l instanceof File; }
function zi(l, n) { if (!l || typeof l != "object")
    return !1; if (Array.isArray(l)) {
    for (let i = 0, c = l.length; i < c; i++)
        if (zi(l[i]))
            return !0;
    return !1;
} if (mu(l))
    return !0; if (l.toJSON && typeof l.toJSON == "function" && arguments.length === 1)
    return zi(l.toJSON(), !0); for (const i in l)
    if (Object.prototype.hasOwnProperty.call(l, i) && zi(l[i]))
        return !0; return !1; }
function Rv(l) { const n = [], i = l.data, c = l; return c.data = Id(i, n), c.attachments = n.length, { packet: c, buffers: n }; }
function Id(l, n) { if (!l)
    return l; if (mu(l)) {
    const i = { _placeholder: !0, num: n.length };
    return n.push(l), i;
}
else if (Array.isArray(l)) {
    const i = new Array(l.length);
    for (let c = 0; c < l.length; c++)
        i[c] = Id(l[c], n);
    return i;
}
else if (typeof l == "object" && !(l instanceof Date)) {
    const i = {};
    for (const c in l)
        Object.prototype.hasOwnProperty.call(l, c) && (i[c] = Id(l[c], n));
    return i;
} return l; }
function Bv(l, n) { return l.data = Wd(l.data, n), delete l.attachments, l; }
function Wd(l, n) { if (!l)
    return l; if (l && l._placeholder === !0) {
    if (typeof l.num == "number" && l.num >= 0 && l.num < n.length)
        return n[l.num];
    throw new Error("illegal attachments");
}
else if (Array.isArray(l))
    for (let i = 0; i < l.length; i++)
        l[i] = Wd(l[i], n);
else if (typeof l == "object")
    for (const i in l)
        Object.prototype.hasOwnProperty.call(l, i) && (l[i] = Wd(l[i], n)); return l; }
const qv = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"], Lv = 5;
var Se;
(function (l) { l[l.CONNECT = 0] = "CONNECT", l[l.DISCONNECT = 1] = "DISCONNECT", l[l.EVENT = 2] = "EVENT", l[l.ACK = 3] = "ACK", l[l.CONNECT_ERROR = 4] = "CONNECT_ERROR", l[l.BINARY_EVENT = 5] = "BINARY_EVENT", l[l.BINARY_ACK = 6] = "BINARY_ACK"; })(Se || (Se = {}));
class Uv {
    constructor(n) { this.replacer = n; }
    encode(n) { return (n.type === Se.EVENT || n.type === Se.ACK) && zi(n) ? this.encodeAsBinary({ type: n.type === Se.EVENT ? Se.BINARY_EVENT : Se.BINARY_ACK, nsp: n.nsp, data: n.data, id: n.id }) : [this.encodeAsString(n)]; }
    encodeAsString(n) { let i = "" + n.type; return (n.type === Se.BINARY_EVENT || n.type === Se.BINARY_ACK) && (i += n.attachments + "-"), n.nsp && n.nsp !== "/" && (i += n.nsp + ","), n.id != null && (i += n.id), n.data != null && (i += JSON.stringify(n.data, this.replacer)), i; }
    encodeAsBinary(n) { const i = Rv(n), c = this.encodeAsString(i.packet), u = i.buffers; return u.unshift(c), u; }
}
function Ix(l) { return Object.prototype.toString.call(l) === "[object Object]"; }
class fu extends at {
    constructor(n) { super(), this.reviver = n; }
    add(n) { let i; if (typeof n == "string") {
        if (this.reconstructor)
            throw new Error("got plaintext data when reconstructing a packet");
        i = this.decodeString(n);
        const c = i.type === Se.BINARY_EVENT;
        c || i.type === Se.BINARY_ACK ? (i.type = c ? Se.EVENT : Se.ACK, this.reconstructor = new Hv(i), i.attachments === 0 && super.emitReserved("decoded", i)) : super.emitReserved("decoded", i);
    }
    else if (mu(n) || n.base64)
        if (this.reconstructor)
            i = this.reconstructor.takeBinaryData(n), i && (this.reconstructor = null, super.emitReserved("decoded", i));
        else
            throw new Error("got binary data when not reconstructing a packet");
    else
        throw new Error("Unknown type: " + n); }
    decodeString(n) { let i = 0; const c = { type: Number(n.charAt(0)) }; if (Se[c.type] === void 0)
        throw new Error("unknown packet type " + c.type); if (c.type === Se.BINARY_EVENT || c.type === Se.BINARY_ACK) {
        const m = i + 1;
        for (; n.charAt(++i) !== "-" && i != n.length;)
            ;
        const f = n.substring(m, i);
        if (f != Number(f) || n.charAt(i) !== "-")
            throw new Error("Illegal attachments");
        c.attachments = Number(f);
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
            const f = n.charAt(i);
            if (f == null || Number(f) != f) {
                --i;
                break;
            }
            if (i === n.length)
                break;
        }
        c.id = Number(n.substring(m, i + 1));
    } if (n.charAt(++i)) {
        const m = this.tryParse(n.substr(i));
        if (fu.isPayloadValid(c.type, m))
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
        case Se.CONNECT: return Ix(i);
        case Se.DISCONNECT: return i === void 0;
        case Se.CONNECT_ERROR: return typeof i == "string" || Ix(i);
        case Se.EVENT:
        case Se.BINARY_EVENT: return Array.isArray(i) && (typeof i[0] == "number" || typeof i[0] == "string" && qv.indexOf(i[0]) === -1);
        case Se.ACK:
        case Se.BINARY_ACK: return Array.isArray(i);
    } }
    destroy() { this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null); }
}
class Hv {
    constructor(n) { this.packet = n, this.buffers = [], this.reconPack = n; }
    takeBinaryData(n) { if (this.buffers.push(n), this.buffers.length === this.reconPack.attachments) {
        const i = Bv(this.reconPack, this.buffers);
        return this.finishedReconstruction(), i;
    } return null; }
    finishedReconstruction() { this.reconPack = null, this.buffers = []; }
}
const Vv = Object.freeze(Object.defineProperty({ __proto__: null, Decoder: fu, Encoder: Uv, get PacketType() { return Se; }, protocol: Lv }, Symbol.toStringTag, { value: "Module" }));
function is(l, n, i) { return l.on(n, i), function () { l.off(n, i); }; }
const Gv = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
class Jp extends at {
    constructor(n, i, c) { super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = n, this.nsp = i, c && c.auth && (this.auth = c.auth), this._opts = Object.assign({}, c), this.io._autoConnect && this.open(); }
    get disconnected() { return !this.connected; }
    subEvents() { if (this.subs)
        return; const n = this.io; this.subs = [is(n, "open", this.onopen.bind(this)), is(n, "packet", this.onpacket.bind(this)), is(n, "error", this.onerror.bind(this)), is(n, "close", this.onclose.bind(this))]; }
    get active() { return !!this.subs; }
    connect() { return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this); }
    open() { return this.connect(); }
    send(...n) { return n.unshift("message"), this.emit.apply(this, n), this; }
    emit(n, ...i) { var c, u, m; if (Gv.hasOwnProperty(n))
        throw new Error('"' + n.toString() + '" is a reserved event name'); if (i.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
        return this._addToQueue(i), this; const f = { type: Se.EVENT, data: i }; if (f.options = {}, f.options.compress = this.flags.compress !== !1, typeof i[i.length - 1] == "function") {
        const v = this.ids++, p = i.pop();
        this._registerAckCallback(v, p), f.id = v;
    } const x = (u = (c = this.io.engine) === null || c === void 0 ? void 0 : c.transport) === null || u === void 0 ? void 0 : u.writable, b = this.connected && !(!((m = this.io.engine) === null || m === void 0) && m._hasPingExpired()); return this.flags.volatile && !x || (b ? (this.notifyOutgoingListeners(f), this.packet(f)) : this.sendBuffer.push(f)), this.flags = {}, this; }
    _registerAckCallback(n, i) { var c; const u = (c = this.flags.timeout) !== null && c !== void 0 ? c : this._opts.ackTimeout; if (u === void 0) {
        this.acks[n] = i;
        return;
    } const m = this.io.setTimeoutFn(() => { delete this.acks[n]; for (let x = 0; x < this.sendBuffer.length; x++)
        this.sendBuffer[x].id === n && this.sendBuffer.splice(x, 1); i.call(this, new Error("operation has timed out")); }, u), f = (...x) => { this.io.clearTimeoutFn(m), i.apply(this, x); }; f.withError = !0, this.acks[n] = f; }
    emitWithAck(n, ...i) { return new Promise((c, u) => { const m = (f, x) => f ? u(f) : c(x); m.withError = !0, i.push(m), this.emit(n, ...i); }); }
    _addToQueue(n) { let i; typeof n[n.length - 1] == "function" && (i = n.pop()); const c = { id: this._queueSeq++, tryCount: 0, pending: !1, args: n, flags: Object.assign({ fromQueue: !0 }, this.flags) }; n.push((u, ...m) => c !== this._queue[0] ? void 0 : (u !== null ? c.tryCount > this._opts.retries && (this._queue.shift(), i && i(u)) : (this._queue.shift(), i && i(null, ...m)), c.pending = !1, this._drainQueue())), this._queue.push(c), this._drainQueue(); }
    _drainQueue(n = !1) { if (!this.connected || this._queue.length === 0)
        return; const i = this._queue[0]; i.pending && !n || (i.pending = !0, i.tryCount++, this.flags = i.flags, this.emit.apply(this, i.args)); }
    packet(n) { n.nsp = this.nsp, this.io._packet(n); }
    onopen() { typeof this.auth == "function" ? this.auth(n => { this._sendConnectPacket(n); }) : this._sendConnectPacket(this.auth); }
    _sendConnectPacket(n) { this.packet({ type: Se.CONNECT, data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, n) : n }); }
    onerror(n) { this.connected || this.emitReserved("connect_error", n); }
    onclose(n, i) { this.connected = !1, delete this.id, this.emitReserved("disconnect", n, i), this._clearAcks(); }
    _clearAcks() { Object.keys(this.acks).forEach(n => { if (!this.sendBuffer.some(c => String(c.id) === n)) {
        const c = this.acks[n];
        delete this.acks[n], c.withError && c.call(this, new Error("socket has been disconnected"));
    } }); }
    onpacket(n) { if (n.nsp === this.nsp)
        switch (n.type) {
            case Se.CONNECT:
                n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Se.EVENT:
            case Se.BINARY_EVENT:
                this.onevent(n);
                break;
            case Se.ACK:
            case Se.BINARY_ACK:
                this.onack(n);
                break;
            case Se.DISCONNECT:
                this.ondisconnect();
                break;
            case Se.CONNECT_ERROR:
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
    ack(n) { const i = this; let c = !1; return function (...u) { c || (c = !0, i.packet({ type: Se.ACK, id: n, data: u })); }; }
    onack(n) { const i = this.acks[n.id]; typeof i == "function" && (delete this.acks[n.id], i.withError && n.data.unshift(null), i.apply(this, n.data)); }
    onconnect(n, i) { this.id = n, this.recovered = i && this._pid === i, this._pid = i, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0); }
    emitBuffered() { this.receiveBuffer.forEach(n => this.emitEvent(n)), this.receiveBuffer = [], this.sendBuffer.forEach(n => { this.notifyOutgoingListeners(n), this.packet(n); }), this.sendBuffer = []; }
    ondisconnect() { this.destroy(), this.onclose("io server disconnect"); }
    destroy() { this.subs && (this.subs.forEach(n => n()), this.subs = void 0), this.io._destroy(this); }
    disconnect() { return this.connected && this.packet({ type: Se.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this; }
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
function Ul(l) { l = l || {}, this.ms = l.min || 100, this.max = l.max || 1e4, this.factor = l.factor || 2, this.jitter = l.jitter > 0 && l.jitter <= 1 ? l.jitter : 0, this.attempts = 0; }
Ul.prototype.duration = function () { var l = this.ms * Math.pow(this.factor, this.attempts++); if (this.jitter) {
    var n = Math.random(), i = Math.floor(n * this.jitter * l);
    l = (Math.floor(n * 10) & 1) == 0 ? l - i : l + i;
} return Math.min(l, this.max) | 0; };
Ul.prototype.reset = function () { this.attempts = 0; };
Ul.prototype.setMin = function (l) { this.ms = l; };
Ul.prototype.setMax = function (l) { this.max = l; };
Ul.prototype.setJitter = function (l) { this.jitter = l; };
class eu extends at {
    constructor(n, i) { var c; super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (i = n, n = void 0), i = i || {}, i.path = i.path || "/socket.io", this.opts = i, Pi(this, i), this.reconnection(i.reconnection !== !1), this.reconnectionAttempts(i.reconnectionAttempts || 1 / 0), this.reconnectionDelay(i.reconnectionDelay || 1e3), this.reconnectionDelayMax(i.reconnectionDelayMax || 5e3), this.randomizationFactor((c = i.randomizationFactor) !== null && c !== void 0 ? c : .5), this.backoff = new Ul({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(i.timeout == null ? 2e4 : i.timeout), this._readyState = "closed", this.uri = n; const u = i.parser || Vv; this.encoder = new u.Encoder, this.decoder = new u.Decoder, this._autoConnect = i.autoConnect !== !1, this._autoConnect && this.open(); }
    reconnection(n) { return arguments.length ? (this._reconnection = !!n, n || (this.skipReconnect = !0), this) : this._reconnection; }
    reconnectionAttempts(n) { return n === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = n, this); }
    reconnectionDelay(n) { var i; return n === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = n, (i = this.backoff) === null || i === void 0 || i.setMin(n), this); }
    randomizationFactor(n) { var i; return n === void 0 ? this._randomizationFactor : (this._randomizationFactor = n, (i = this.backoff) === null || i === void 0 || i.setJitter(n), this); }
    reconnectionDelayMax(n) { var i; return n === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = n, (i = this.backoff) === null || i === void 0 || i.setMax(n), this); }
    timeout(n) { return arguments.length ? (this._timeout = n, this) : this._timeout; }
    maybeReconnectOnOpen() { !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect(); }
    open(n) { if (~this._readyState.indexOf("open"))
        return this; this.engine = new Ev(this.uri, this.opts); const i = this.engine, c = this; this._readyState = "opening", this.skipReconnect = !1; const u = is(i, "open", function () { c.onopen(), n && n(); }), m = x => { this.cleanup(), this._readyState = "closed", this.emitReserved("error", x), n ? n(x) : this.maybeReconnectOnOpen(); }, f = is(i, "error", m); if (this._timeout !== !1) {
        const x = this._timeout, b = this.setTimeoutFn(() => { u(), m(new Error("timeout")), i.close(); }, x);
        this.opts.autoUnref && b.unref(), this.subs.push(() => { this.clearTimeoutFn(b); });
    } return this.subs.push(u), this.subs.push(f), this; }
    connect(n) { return this.open(n); }
    onopen() { this.cleanup(), this._readyState = "open", this.emitReserved("open"); const n = this.engine; this.subs.push(is(n, "ping", this.onping.bind(this)), is(n, "data", this.ondata.bind(this)), is(n, "error", this.onerror.bind(this)), is(n, "close", this.onclose.bind(this)), is(this.decoder, "decoded", this.ondecoded.bind(this))); }
    onping() { this.emitReserved("ping"); }
    ondata(n) { try {
        this.decoder.add(n);
    }
    catch (i) {
        this.onclose("parse error", i);
    } }
    ondecoded(n) { $i(() => { this.emitReserved("packet", n); }, this.setTimeoutFn); }
    onerror(n) { this.emitReserved("error", n); }
    socket(n, i) { let c = this.nsps[n]; return c ? this._autoConnect && !c.active && c.connect() : (c = new Jp(this, n, i), this.nsps[n] = c), c; }
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
const Qn = {};
function Ri(l, n) { typeof l == "object" && (n = l, l = void 0), n = n || {}; const i = Dv(l, n.path || "/socket.io"), c = i.source, u = i.id, m = i.path, f = Qn[u] && m in Qn[u].nsps, x = n.forceNew || n["force new connection"] || n.multiplex === !1 || f; let b; return x ? b = new eu(c, n) : (Qn[u] || (Qn[u] = new eu(c, n)), b = Qn[u]), i.query && !n.query && (n.query = i.queryKey), b.socket(i.path, n); }
Object.assign(Ri, { Manager: eu, Socket: Jp, io: Ri, connect: Ri });
const Wx = l => { let n; const i = new Set, c = (N, v) => { const p = typeof N == "function" ? N(n) : N; if (!Object.is(p, n)) {
    const j = n;
    n = v ?? (typeof p != "object" || p === null) ? p : Object.assign({}, n, p), i.forEach(k => k(n, j));
} }, u = () => n, x = { setState: c, getState: u, getInitialState: () => b, subscribe: N => (i.add(N), () => i.delete(N)) }, b = n = l(c, u, x); return x; }, Qv = (l => l ? Wx(l) : Wx), Kv = l => l;
function Yv(l, n = Kv) { const i = Xn.useSyncExternalStore(l.subscribe, Xn.useCallback(() => n(l.getState()), [l, n]), Xn.useCallback(() => n(l.getInitialState()), [l, n])); return Xn.useDebugValue(i), i; }
const ep = l => { const n = Qv(l), i = c => Yv(n, c); return Object.assign(i, n), i; }, $p = (l => l ? ep(l) : ep);
function Xv(l, n) { let i; try {
    i = l();
}
catch {
    return;
} return { getItem: u => { var m; const f = b => b === null ? null : JSON.parse(b, void 0), x = (m = i.getItem(u)) != null ? m : null; return x instanceof Promise ? x.then(f) : f(x); }, setItem: (u, m) => i.setItem(u, JSON.stringify(m, void 0)), removeItem: u => i.removeItem(u) }; }
const tu = l => n => { try {
    const i = l(n);
    return i instanceof Promise ? i : { then(c) { return tu(c)(i); }, catch(c) { return this; } };
}
catch (i) {
    return { then(c) { return this; }, catch(c) { return tu(c)(i); } };
} }, Zv = (l, n) => (i, c, u) => { let m = { storage: Xv(() => localStorage), partialize: S => S, version: 0, merge: (S, E) => ({ ...E, ...S }), ...n }, f = !1; const x = new Set, b = new Set; let N = m.storage; if (!N)
    return l((...S) => { console.warn(`[zustand persist middleware] Unable to update item '${m.name}', the given storage is currently unavailable.`), i(...S); }, c, u); const v = () => { const S = m.partialize({ ...c() }); return N.setItem(m.name, { state: S, version: m.version }); }, p = u.setState; u.setState = (S, E) => (p(S, E), v()); const j = l((...S) => (i(...S), v()), c, u); u.getInitialState = () => j; let k; const w = () => { var S, E; if (!N)
    return; f = !1, x.forEach(D => { var q; return D((q = c()) != null ? q : j); }); const O = ((E = m.onRehydrateStorage) == null ? void 0 : E.call(m, (S = c()) != null ? S : j)) || void 0; return tu(N.getItem.bind(N))(m.name).then(D => { if (D)
    if (typeof D.version == "number" && D.version !== m.version) {
        if (m.migrate) {
            const q = m.migrate(D.state, D.version);
            return q instanceof Promise ? q.then(Z => [!0, Z]) : [!0, q];
        }
        console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
    }
    else
        return [!1, D.state]; return [!1, void 0]; }).then(D => { var q; const [Z, A] = D; if (k = m.merge(A, (q = c()) != null ? q : j), i(k, !0), Z)
    return v(); }).then(() => { O == null || O(k, void 0), k = c(), f = !0, b.forEach(D => D(k)); }).catch(D => { O == null || O(void 0, D); }); }; return u.persist = { setOptions: S => { m = { ...m, ...S }, S.storage && (N = S.storage); }, clearStorage: () => { N == null || N.removeItem(m.name); }, getOptions: () => m, rehydrate: () => w(), hasHydrated: () => f, onHydrate: S => (x.add(S), () => { x.delete(S); }), onFinishHydration: S => (b.add(S), () => { b.delete(S); }) }, m.skipHydration || w(), k || j; }, Fv = Zv, js = $p()(Fv(l => ({ user: null, token: null, isAuthenticated: !1, _hasHydrated: !1, login: (n, i) => l({ user: n, token: i, isAuthenticated: !0 }), logout: () => l({ user: null, token: null, isAuthenticated: !1 }), updateUser: n => l(i => ({ user: i.user ? { ...i.user, ...n } : null })), setHasHydrated: n => l({ _hasHydrated: n }) }), { name: "solaria-auth", partialize: l => ({ user: l.user, token: l.token, isAuthenticated: l.isAuthenticated }), onRehydrateStorage: () => l => { l == null || l.setHasHydrated(!0); } })), Pp = z.createContext(null), Jv = "";
function $v({ children: l }) { const n = z.useRef(null), [i, c] = z.useState(!1), u = js(v => v.token), m = js(v => v.isAuthenticated), f = Gt(); z.useEffect(() => { if (!m || !u) {
    n.current && (n.current.disconnect(), n.current = null, c(!1));
    return;
} n.current = Ri(Jv, { auth: { token: u }, reconnection: !0, reconnectionAttempts: 5, reconnectionDelay: 1e3, reconnectionDelayMax: 5e3 }); const v = n.current; return v.on("connect", () => { console.log("[Socket] Connected:", v.id), c(!0); }), v.on("disconnect", p => { console.log("[Socket] Disconnected:", p), c(!1); }), v.on("connect_error", p => { console.error("[Socket] Connection error:", p.message), c(!1); }), v.on("agent:status", p => { f.invalidateQueries({ queryKey: ["agents"] }), p != null && p.agentId && f.invalidateQueries({ queryKey: ["agents", p.agentId] }); }), v.on("task:updated", p => { f.invalidateQueries({ queryKey: ["tasks"] }), f.invalidateQueries({ queryKey: ["dashboard"] }), p != null && p.taskId && f.invalidateQueries({ queryKey: ["tasks", p.taskId] }), p != null && p.projectId && (f.invalidateQueries({ queryKey: ["projects", p.projectId, "tasks"] }), f.invalidateQueries({ queryKey: ["projects", p.projectId] })); }), v.on("task:created", p => { f.invalidateQueries({ queryKey: ["tasks"] }), f.invalidateQueries({ queryKey: ["dashboard"] }), p != null && p.projectId && f.invalidateQueries({ queryKey: ["projects", p.projectId, "tasks"] }); }), v.on("task:completed", p => { f.invalidateQueries({ queryKey: ["tasks"] }), f.invalidateQueries({ queryKey: ["dashboard"] }), p != null && p.taskId && f.invalidateQueries({ queryKey: ["tasks", p.taskId] }), p != null && p.projectId && (f.invalidateQueries({ queryKey: ["projects", p.projectId, "tasks"] }), f.invalidateQueries({ queryKey: ["projects", p.projectId] })); }), v.on("task:deleted", p => { f.invalidateQueries({ queryKey: ["tasks"] }), p != null && p.projectId && f.invalidateQueries({ queryKey: ["projects", p.projectId, "tasks"] }); }), v.on("project:updated", p => { f.invalidateQueries({ queryKey: ["projects"] }), f.invalidateQueries({ queryKey: ["dashboard"] }), p != null && p.projectId && f.invalidateQueries({ queryKey: ["projects", p.projectId] }); }), v.on("project:progress", p => { p != null && p.projectId && (f.invalidateQueries({ queryKey: ["projects", p.projectId] }), f.invalidateQueries({ queryKey: ["projects"] })); }), v.on("memory:created", () => { f.invalidateQueries({ queryKey: ["memories"] }); }), v.on("memory:updated", p => { f.invalidateQueries({ queryKey: ["memories"] }), p != null && p.memoryId && f.invalidateQueries({ queryKey: ["memories", p.memoryId] }); }), v.on("alert:critical", () => { f.invalidateQueries({ queryKey: ["dashboard", "alerts"] }), f.invalidateQueries({ queryKey: ["dashboard"] }); }), v.on("taskItem:completed", p => { p != null && p.taskId && (f.invalidateQueries({ queryKey: ["tasks", p.taskId, "items"] }), f.invalidateQueries({ queryKey: ["tasks", p.taskId] }), f.invalidateQueries({ queryKey: ["tasks"] })); }), v.on("taskItem:created", p => { p != null && p.taskId && (f.invalidateQueries({ queryKey: ["tasks", p.taskId, "items"] }), f.invalidateQueries({ queryKey: ["tasks", p.taskId] })); }), v.on("taskItem:updated", p => { p != null && p.taskId && (f.invalidateQueries({ queryKey: ["tasks", p.taskId, "items"] }), f.invalidateQueries({ queryKey: ["tasks", p.taskId] })); }), v.on("activity:new", () => { f.invalidateQueries({ queryKey: ["activity"] }); }), () => { v.disconnect(), n.current = null; }; }, [m, u, f]); const x = z.useCallback((v, p) => { var j; (j = n.current) != null && j.connected && n.current.emit(v, p); }, []), b = z.useCallback((v, p) => { var j; return (j = n.current) == null || j.on(v, p), () => { var k; (k = n.current) == null || k.off(v, p); }; }, []), N = z.useCallback((v, p) => { var j, k; p ? (j = n.current) == null || j.off(v, p) : (k = n.current) == null || k.removeAllListeners(v); }, []); return t.jsx(Pp.Provider, { value: { socket: n.current, isConnected: i, emit: x, on: b, off: N }, children: l }); }
function Pv() { const l = z.useContext(Pp); if (!l)
    throw new Error("useSocketContext must be used within a SocketProvider"); return l; }
const Ip = z.createContext(null), Iv = 50;
function Wv(l, n) { const c = { "task:created": () => ({ type: "task", action: "created", title: "Nueva tarea creada", message: n.title ? `Tarea: ${n.title}` : `Proyecto #${n.projectId}` }), "task:updated": () => ({ type: "task", action: "updated", title: "Tarea actualizada", message: n.title ? `${n.title}` : `Tarea #${n.taskId}` }), "task:completed": () => ({ type: "task", action: "completed", title: "Tarea completada", message: n.title ? `${n.title}` : `Tarea #${n.taskId}` }), "task:deleted": () => ({ type: "task", action: "deleted", title: "Tarea eliminada", message: "Tarea removida del proyecto" }), "project:created": () => ({ type: "project", action: "created", title: "Nuevo proyecto", message: n.name ? `${n.name}` : "Proyecto creado" }), "project:updated": () => ({ type: "project", action: "updated", title: "Proyecto actualizado", message: n.name ? `${n.name}` : `Proyecto #${n.projectId}` }), "project:deleted": () => ({ type: "project", action: "deleted", title: "Proyecto eliminado", message: n.name ? `${n.name}` : "Proyecto removido" }), "project:progress": () => ({ type: "project", action: "updated", title: "Progreso actualizado", message: n.progress !== void 0 ? `Nuevo progreso: ${n.progress}%` : "Progreso modificado" }), "agent:status": () => ({ type: "agent", action: "status", title: "Estado de agente", message: n.status ? `${n.agentName || "Agente"}: ${n.status}` : "Estado actualizado" }), "memory:created": () => ({ type: "memory", action: "created", title: "Nueva memoria", message: n.content ? `${String(n.content).substring(0, 50)}...` : "Memoria registrada" }), "memory:updated": () => ({ type: "memory", action: "updated", title: "Memoria actualizada", message: `Memoria #${n.memoryId} modificada` }), "alert:critical": () => ({ type: "alert", action: "info", title: "Alerta crítica", message: typeof n.message == "string" ? n.message : "Se requiere atención inmediata" }), "taskItem:completed": () => ({ type: "task", action: "completed", title: "Subtarea completada", message: n.title ? `${n.title}` : `En tarea #${n.taskId}` }), "taskItem:created": () => ({ type: "task", action: "created", title: "Subtarea agregada", message: `Nueva subtarea en tarea #${n.taskId}` }), "activity:new": () => ({ type: "system", action: "info", title: "Nueva actividad", message: typeof n.description == "string" ? n.description : "Actividad registrada" }) }[l]; return c ? c() : { type: "system", action: "info", title: l.replace(":", " ").replace(/([A-Z])/g, " $1").trim(), message: JSON.stringify(n).substring(0, 100) }; }
function ej({ children: l }) { const { on: n, isConnected: i } = Pv(), [c, u] = z.useState([]), m = z.useCallback(p => { const j = { ...p, id: crypto.randomUUID(), timestamp: new Date, read: !1 }; u(k => [j, ...k].slice(0, Iv)); }, []), f = z.useCallback(p => { u(j => j.map(k => k.id === p ? { ...k, read: !0 } : k)); }, []), x = z.useCallback(() => { u(p => p.map(j => ({ ...j, read: !0 }))); }, []), b = z.useCallback(() => { u([]); }, []), N = z.useCallback(p => { u(j => j.filter(k => k.id !== p)); }, []); z.useEffect(() => { if (!i)
    return; const p = ["task:created", "task:updated", "task:completed", "task:deleted", "project:created", "project:updated", "project:deleted", "project:progress", "agent:status", "memory:created", "memory:updated", "alert:critical", "taskItem:completed", "taskItem:created", "activity:new"], j = []; return p.forEach(k => { const w = n(k, S => { const E = S || {}, O = Wv(k, E); m({ ...O, data: E }); }); j.push(w); }), () => { j.forEach(k => k()); }; }, [n, i, m]); const v = c.filter(p => !p.read).length; return t.jsx(Ip.Provider, { value: { notifications: c, unreadCount: v, addNotification: m, markAsRead: f, markAllAsRead: x, clearAll: b, dismissNotification: N }, children: l }); }
function tj() { const l = z.useContext(Ip); if (!l)
    throw new Error("useNotifications must be used within a NotificationProvider"); return l; }
function Wp(l, n) { return function () { return l.apply(n, arguments); }; }
const { toString: sj } = Object.prototype, { getPrototypeOf: hu } = Object, { iterator: Ii, toStringTag: eg } = Symbol, Wi = (l => n => { const i = sj.call(n); return l[i] || (l[i] = i.slice(8, -1).toLowerCase()); })(Object.create(null)), ds = l => (l = l.toLowerCase(), n => Wi(n) === l), ec = l => n => typeof n === l, { isArray: Hl } = Array, ql = ec("undefined");
function tr(l) { return l !== null && !ql(l) && l.constructor !== null && !ql(l.constructor) && Tt(l.constructor.isBuffer) && l.constructor.isBuffer(l); }
const tg = ds("ArrayBuffer");
function aj(l) { let n; return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(l) : n = l && l.buffer && tg(l.buffer), n; }
const lj = ec("string"), Tt = ec("function"), sg = ec("number"), sr = l => l !== null && typeof l == "object", nj = l => l === !0 || l === !1, Bi = l => { if (Wi(l) !== "object")
    return !1; const n = hu(l); return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(eg in l) && !(Ii in l); }, rj = l => { if (!sr(l) || tr(l))
    return !1; try {
    return Object.keys(l).length === 0 && Object.getPrototypeOf(l) === Object.prototype;
}
catch {
    return !1;
} }, ij = ds("Date"), cj = ds("File"), oj = ds("Blob"), dj = ds("FileList"), uj = l => sr(l) && Tt(l.pipe), mj = l => { let n; return l && (typeof FormData == "function" && l instanceof FormData || Tt(l.append) && ((n = Wi(l)) === "formdata" || n === "object" && Tt(l.toString) && l.toString() === "[object FormData]")); }, fj = ds("URLSearchParams"), [hj, xj, pj, gj] = ["ReadableStream", "Request", "Response", "Headers"].map(ds), bj = l => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ar(l, n, { allOwnKeys: i = !1 } = {}) { if (l === null || typeof l > "u")
    return; let c, u; if (typeof l != "object" && (l = [l]), Hl(l))
    for (c = 0, u = l.length; c < u; c++)
        n.call(null, l[c], c, l);
else {
    if (tr(l))
        return;
    const m = i ? Object.getOwnPropertyNames(l) : Object.keys(l), f = m.length;
    let x;
    for (c = 0; c < f; c++)
        x = m[c], n.call(null, l[x], x, l);
} }
function ag(l, n) { if (tr(l))
    return null; n = n.toLowerCase(); const i = Object.keys(l); let c = i.length, u; for (; c-- > 0;)
    if (u = i[c], n === u.toLowerCase())
        return u; return null; }
const Ka = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, lg = l => !ql(l) && l !== Ka;
function su() { const { caseless: l, skipUndefined: n } = lg(this) && this || {}, i = {}, c = (u, m) => { const f = l && ag(i, m) || m; Bi(i[f]) && Bi(u) ? i[f] = su(i[f], u) : Bi(u) ? i[f] = su({}, u) : Hl(u) ? i[f] = u.slice() : (!n || !ql(u)) && (i[f] = u); }; for (let u = 0, m = arguments.length; u < m; u++)
    arguments[u] && ar(arguments[u], c); return i; }
const yj = (l, n, i, { allOwnKeys: c } = {}) => (ar(n, (u, m) => { i && Tt(u) ? l[m] = Wp(u, i) : l[m] = u; }, { allOwnKeys: c }), l), vj = l => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), jj = (l, n, i, c) => { l.prototype = Object.create(n.prototype, c), l.prototype.constructor = l, Object.defineProperty(l, "super", { value: n.prototype }), i && Object.assign(l.prototype, i); }, Nj = (l, n, i, c) => { let u, m, f; const x = {}; if (n = n || {}, l == null)
    return n; do {
    for (u = Object.getOwnPropertyNames(l), m = u.length; m-- > 0;)
        f = u[m], (!c || c(f, l, n)) && !x[f] && (n[f] = l[f], x[f] = !0);
    l = i !== !1 && hu(l);
} while (l && (!i || i(l, n)) && l !== Object.prototype); return n; }, wj = (l, n, i) => { l = String(l), (i === void 0 || i > l.length) && (i = l.length), i -= n.length; const c = l.indexOf(n, i); return c !== -1 && c === i; }, Sj = l => { if (!l)
    return null; if (Hl(l))
    return l; let n = l.length; if (!sg(n))
    return null; const i = new Array(n); for (; n-- > 0;)
    i[n] = l[n]; return i; }, Cj = (l => n => l && n instanceof l)(typeof Uint8Array < "u" && hu(Uint8Array)), kj = (l, n) => { const c = (l && l[Ii]).call(l); let u; for (; (u = c.next()) && !u.done;) {
    const m = u.value;
    n.call(l, m[0], m[1]);
} }, Aj = (l, n) => { let i; const c = []; for (; (i = l.exec(n)) !== null;)
    c.push(i); return c; }, Tj = ds("HTMLFormElement"), Ej = l => l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, c, u) { return c.toUpperCase() + u; }), tp = (({ hasOwnProperty: l }) => (n, i) => l.call(n, i))(Object.prototype), Dj = ds("RegExp"), ng = (l, n) => { const i = Object.getOwnPropertyDescriptors(l), c = {}; ar(i, (u, m) => { let f; (f = n(u, m, l)) !== !1 && (c[m] = f || u); }), Object.defineProperties(l, c); }, Mj = l => { ng(l, (n, i) => { if (Tt(l) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
    return !1; const c = l[i]; if (Tt(c)) {
    if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
    }
    n.set || (n.set = () => { throw Error("Can not rewrite read-only method '" + i + "'"); });
} }); }, Oj = (l, n) => { const i = {}, c = u => { u.forEach(m => { i[m] = !0; }); }; return Hl(l) ? c(l) : c(String(l).split(n)), i; }, _j = () => { }, zj = (l, n) => l != null && Number.isFinite(l = +l) ? l : n;
function Rj(l) { return !!(l && Tt(l.append) && l[eg] === "FormData" && l[Ii]); }
const Bj = l => { const n = new Array(10), i = (c, u) => { if (sr(c)) {
    if (n.indexOf(c) >= 0)
        return;
    if (tr(c))
        return c;
    if (!("toJSON" in c)) {
        n[u] = c;
        const m = Hl(c) ? [] : {};
        return ar(c, (f, x) => { const b = i(f, u + 1); !ql(b) && (m[x] = b); }), n[u] = void 0, m;
    }
} return c; }; return i(l, 0); }, qj = ds("AsyncFunction"), Lj = l => l && (sr(l) || Tt(l)) && Tt(l.then) && Tt(l.catch), rg = ((l, n) => l ? setImmediate : n ? ((i, c) => (Ka.addEventListener("message", ({ source: u, data: m }) => { u === Ka && m === i && c.length && c.shift()(); }, !1), u => { c.push(u), Ka.postMessage(i, "*"); }))(`axios@${Math.random()}`, []) : i => setTimeout(i))(typeof setImmediate == "function", Tt(Ka.postMessage)), Uj = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ka) : typeof process < "u" && process.nextTick || rg, Hj = l => l != null && Tt(l[Ii]), V = { isArray: Hl, isArrayBuffer: tg, isBuffer: tr, isFormData: mj, isArrayBufferView: aj, isString: lj, isNumber: sg, isBoolean: nj, isObject: sr, isPlainObject: Bi, isEmptyObject: rj, isReadableStream: hj, isRequest: xj, isResponse: pj, isHeaders: gj, isUndefined: ql, isDate: ij, isFile: cj, isBlob: oj, isRegExp: Dj, isFunction: Tt, isStream: uj, isURLSearchParams: fj, isTypedArray: Cj, isFileList: dj, forEach: ar, merge: su, extend: yj, trim: bj, stripBOM: vj, inherits: jj, toFlatObject: Nj, kindOf: Wi, kindOfTest: ds, endsWith: wj, toArray: Sj, forEachEntry: kj, matchAll: Aj, isHTMLForm: Tj, hasOwnProperty: tp, hasOwnProp: tp, reduceDescriptors: ng, freezeMethods: Mj, toObjectSet: Oj, toCamelCase: Ej, noop: _j, toFiniteNumber: zj, findKey: ag, global: Ka, isContextDefined: lg, isSpecCompliantForm: Rj, toJSONObject: Bj, isAsyncFn: qj, isThenable: Lj, setImmediate: rg, asap: Uj, isIterable: Hj };
function xe(l, n, i, c, u) { Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", n && (this.code = n), i && (this.config = i), c && (this.request = c), u && (this.response = u, this.status = u.status ? u.status : null); }
V.inherits(xe, Error, { toJSON: function () { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: V.toJSONObject(this.config), code: this.code, status: this.status }; } });
const ig = xe.prototype, cg = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(l => { cg[l] = { value: l }; });
Object.defineProperties(xe, cg);
Object.defineProperty(ig, "isAxiosError", { value: !0 });
xe.from = (l, n, i, c, u, m) => { const f = Object.create(ig); V.toFlatObject(l, f, function (v) { return v !== Error.prototype; }, N => N !== "isAxiosError"); const x = l && l.message ? l.message : "Error", b = n == null && l ? l.code : n; return xe.call(f, x, b, i, c, u), l && f.cause == null && Object.defineProperty(f, "cause", { value: l, configurable: !0 }), f.name = l && l.name || "Error", m && Object.assign(f, m), f; };
const Vj = null;
function au(l) { return V.isPlainObject(l) || V.isArray(l); }
function og(l) { return V.endsWith(l, "[]") ? l.slice(0, -2) : l; }
function sp(l, n, i) { return l ? l.concat(n).map(function (u, m) { return u = og(u), !i && m ? "[" + u + "]" : u; }).join(i ? "." : "") : n; }
function Gj(l) { return V.isArray(l) && !l.some(au); }
const Qj = V.toFlatObject(V, {}, null, function (n) { return /^is[A-Z]/.test(n); });
function tc(l, n, i) { if (!V.isObject(l))
    throw new TypeError("target must be an object"); n = n || new FormData, i = V.toFlatObject(i, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (S, E) { return !V.isUndefined(E[S]); }); const c = i.metaTokens, u = i.visitor || v, m = i.dots, f = i.indexes, b = (i.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(n); if (!V.isFunction(u))
    throw new TypeError("visitor must be a function"); function N(w) { if (w === null)
    return ""; if (V.isDate(w))
    return w.toISOString(); if (V.isBoolean(w))
    return w.toString(); if (!b && V.isBlob(w))
    throw new xe("Blob is not supported. Use a Buffer instead."); return V.isArrayBuffer(w) || V.isTypedArray(w) ? b && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w; } function v(w, S, E) { let O = w; if (w && !E && typeof w == "object") {
    if (V.endsWith(S, "{}"))
        S = c ? S : S.slice(0, -2), w = JSON.stringify(w);
    else if (V.isArray(w) && Gj(w) || (V.isFileList(w) || V.endsWith(S, "[]")) && (O = V.toArray(w)))
        return S = og(S), O.forEach(function (q, Z) { !(V.isUndefined(q) || q === null) && n.append(f === !0 ? sp([S], Z, m) : f === null ? S : S + "[]", N(q)); }), !1;
} return au(w) ? !0 : (n.append(sp(E, S, m), N(w)), !1); } const p = [], j = Object.assign(Qj, { defaultVisitor: v, convertValue: N, isVisitable: au }); function k(w, S) { if (!V.isUndefined(w)) {
    if (p.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
    p.push(w), V.forEach(w, function (O, D) { (!(V.isUndefined(O) || O === null) && u.call(n, O, V.isString(D) ? D.trim() : D, S, j)) === !0 && k(O, S ? S.concat(D) : [D]); }), p.pop();
} } if (!V.isObject(l))
    throw new TypeError("data must be an object"); return k(l), n; }
function ap(l) { const n = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" }; return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g, function (c) { return n[c]; }); }
function xu(l, n) { this._pairs = [], l && tc(l, this, n); }
const dg = xu.prototype;
dg.append = function (n, i) { this._pairs.push([n, i]); };
dg.toString = function (n) { const i = n ? function (c) { return n.call(this, c, ap); } : ap; return this._pairs.map(function (u) { return i(u[0]) + "=" + i(u[1]); }, "").join("&"); };
function Kj(l) { return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+"); }
function ug(l, n, i) { if (!n)
    return l; const c = i && i.encode || Kj; V.isFunction(i) && (i = { serialize: i }); const u = i && i.serialize; let m; if (u ? m = u(n, i) : m = V.isURLSearchParams(n) ? n.toString() : new xu(n, i).toString(c), m) {
    const f = l.indexOf("#");
    f !== -1 && (l = l.slice(0, f)), l += (l.indexOf("?") === -1 ? "?" : "&") + m;
} return l; }
class lp {
    constructor() { this.handlers = []; }
    use(n, i, c) { return this.handlers.push({ fulfilled: n, rejected: i, synchronous: c ? c.synchronous : !1, runWhen: c ? c.runWhen : null }), this.handlers.length - 1; }
    eject(n) { this.handlers[n] && (this.handlers[n] = null); }
    clear() { this.handlers && (this.handlers = []); }
    forEach(n) { V.forEach(this.handlers, function (c) { c !== null && n(c); }); }
}
const mg = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, Yj = typeof URLSearchParams < "u" ? URLSearchParams : xu, Xj = typeof FormData < "u" ? FormData : null, Zj = typeof Blob < "u" ? Blob : null, Fj = { isBrowser: !0, classes: { URLSearchParams: Yj, FormData: Xj, Blob: Zj }, protocols: ["http", "https", "file", "blob", "url", "data"] }, pu = typeof window < "u" && typeof document < "u", lu = typeof navigator == "object" && navigator || void 0, Jj = pu && (!lu || ["ReactNative", "NativeScript", "NS"].indexOf(lu.product) < 0), $j = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Pj = pu && window.location.href || "http://localhost", Ij = Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: pu, hasStandardBrowserEnv: Jj, hasStandardBrowserWebWorkerEnv: $j, navigator: lu, origin: Pj }, Symbol.toStringTag, { value: "Module" })), pt = { ...Ij, ...Fj };
function Wj(l, n) { return tc(l, new pt.classes.URLSearchParams, { visitor: function (i, c, u, m) { return pt.isNode && V.isBuffer(i) ? (this.append(c, i.toString("base64")), !1) : m.defaultVisitor.apply(this, arguments); }, ...n }); }
function e1(l) { return V.matchAll(/\w+|\[(\w*)]/g, l).map(n => n[0] === "[]" ? "" : n[1] || n[0]); }
function t1(l) { const n = {}, i = Object.keys(l); let c; const u = i.length; let m; for (c = 0; c < u; c++)
    m = i[c], n[m] = l[m]; return n; }
function fg(l) { function n(i, c, u, m) { let f = i[m++]; if (f === "__proto__")
    return !0; const x = Number.isFinite(+f), b = m >= i.length; return f = !f && V.isArray(u) ? u.length : f, b ? (V.hasOwnProp(u, f) ? u[f] = [u[f], c] : u[f] = c, !x) : ((!u[f] || !V.isObject(u[f])) && (u[f] = []), n(i, c, u[f], m) && V.isArray(u[f]) && (u[f] = t1(u[f])), !x); } if (V.isFormData(l) && V.isFunction(l.entries)) {
    const i = {};
    return V.forEachEntry(l, (c, u) => { n(e1(c), u, i, 0); }), i;
} return null; }
function s1(l, n, i) { if (V.isString(l))
    try {
        return (n || JSON.parse)(l), V.trim(l);
    }
    catch (c) {
        if (c.name !== "SyntaxError")
            throw c;
    } return (i || JSON.stringify)(l); }
const lr = { transitional: mg, adapter: ["xhr", "http", "fetch"], transformRequest: [function (n, i) { const c = i.getContentType() || "", u = c.indexOf("application/json") > -1, m = V.isObject(n); if (m && V.isHTMLForm(n) && (n = new FormData(n)), V.isFormData(n))
            return u ? JSON.stringify(fg(n)) : n; if (V.isArrayBuffer(n) || V.isBuffer(n) || V.isStream(n) || V.isFile(n) || V.isBlob(n) || V.isReadableStream(n))
            return n; if (V.isArrayBufferView(n))
            return n.buffer; if (V.isURLSearchParams(n))
            return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString(); let x; if (m) {
            if (c.indexOf("application/x-www-form-urlencoded") > -1)
                return Wj(n, this.formSerializer).toString();
            if ((x = V.isFileList(n)) || c.indexOf("multipart/form-data") > -1) {
                const b = this.env && this.env.FormData;
                return tc(x ? { "files[]": n } : n, b && new b, this.formSerializer);
            }
        } return m || u ? (i.setContentType("application/json", !1), s1(n)) : n; }], transformResponse: [function (n) { const i = this.transitional || lr.transitional, c = i && i.forcedJSONParsing, u = this.responseType === "json"; if (V.isResponse(n) || V.isReadableStream(n))
            return n; if (n && V.isString(n) && (c && !this.responseType || u)) {
            const f = !(i && i.silentJSONParsing) && u;
            try {
                return JSON.parse(n, this.parseReviver);
            }
            catch (x) {
                if (f)
                    throw x.name === "SyntaxError" ? xe.from(x, xe.ERR_BAD_RESPONSE, this, null, this.response) : x;
            }
        } return n; }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: pt.classes.FormData, Blob: pt.classes.Blob }, validateStatus: function (n) { return n >= 200 && n < 300; }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
V.forEach(["delete", "get", "head", "post", "put", "patch"], l => { lr.headers[l] = {}; });
const a1 = V.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), l1 = l => {
    const n = {};
    let i, c, u;
    return l && l.split(`
`).forEach(function (f) { u = f.indexOf(":"), i = f.substring(0, u).trim().toLowerCase(), c = f.substring(u + 1).trim(), !(!i || n[i] && a1[i]) && (i === "set-cookie" ? n[i] ? n[i].push(c) : n[i] = [c] : n[i] = n[i] ? n[i] + ", " + c : c); }), n;
}, np = Symbol("internals");
function Kn(l) { return l && String(l).trim().toLowerCase(); }
function qi(l) { return l === !1 || l == null ? l : V.isArray(l) ? l.map(qi) : String(l); }
function n1(l) { const n = Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; let c; for (; c = i.exec(l);)
    n[c[1]] = c[2]; return n; }
const r1 = l => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function Rd(l, n, i, c, u) { if (V.isFunction(c))
    return c.call(this, n, i); if (u && (n = i), !!V.isString(n)) {
    if (V.isString(c))
        return n.indexOf(c) !== -1;
    if (V.isRegExp(c))
        return c.test(n);
} }
function i1(l) { return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, i, c) => i.toUpperCase() + c); }
function c1(l, n) { const i = V.toCamelCase(" " + n); ["get", "set", "has"].forEach(c => { Object.defineProperty(l, c + i, { value: function (u, m, f) { return this[c].call(this, n, u, m, f); }, configurable: !0 }); }); }
let Et = class {
    constructor(n) { n && this.set(n); }
    set(n, i, c) { const u = this; function m(x, b, N) { const v = Kn(b); if (!v)
        throw new Error("header name must be a non-empty string"); const p = V.findKey(u, v); (!p || u[p] === void 0 || N === !0 || N === void 0 && u[p] !== !1) && (u[p || b] = qi(x)); } const f = (x, b) => V.forEach(x, (N, v) => m(N, v, b)); if (V.isPlainObject(n) || n instanceof this.constructor)
        f(n, i);
    else if (V.isString(n) && (n = n.trim()) && !r1(n))
        f(l1(n), i);
    else if (V.isObject(n) && V.isIterable(n)) {
        let x = {}, b, N;
        for (const v of n) {
            if (!V.isArray(v))
                throw TypeError("Object iterator must return a key-value pair");
            x[N = v[0]] = (b = x[N]) ? V.isArray(b) ? [...b, v[1]] : [b, v[1]] : v[1];
        }
        f(x, i);
    }
    else
        n != null && m(i, n, c); return this; }
    get(n, i) { if (n = Kn(n), n) {
        const c = V.findKey(this, n);
        if (c) {
            const u = this[c];
            if (!i)
                return u;
            if (i === !0)
                return n1(u);
            if (V.isFunction(i))
                return i.call(this, u, c);
            if (V.isRegExp(i))
                return i.exec(u);
            throw new TypeError("parser must be boolean|regexp|function");
        }
    } }
    has(n, i) { if (n = Kn(n), n) {
        const c = V.findKey(this, n);
        return !!(c && this[c] !== void 0 && (!i || Rd(this, this[c], c, i)));
    } return !1; }
    delete(n, i) { const c = this; let u = !1; function m(f) { if (f = Kn(f), f) {
        const x = V.findKey(c, f);
        x && (!i || Rd(c, c[x], x, i)) && (delete c[x], u = !0);
    } } return V.isArray(n) ? n.forEach(m) : m(n), u; }
    clear(n) { const i = Object.keys(this); let c = i.length, u = !1; for (; c--;) {
        const m = i[c];
        (!n || Rd(this, this[m], m, n, !0)) && (delete this[m], u = !0);
    } return u; }
    normalize(n) { const i = this, c = {}; return V.forEach(this, (u, m) => { const f = V.findKey(c, m); if (f) {
        i[f] = qi(u), delete i[m];
        return;
    } const x = n ? i1(m) : String(m).trim(); x !== m && delete i[m], i[x] = qi(u), c[x] = !0; }), this; }
    concat(...n) { return this.constructor.concat(this, ...n); }
    toJSON(n) { const i = Object.create(null); return V.forEach(this, (c, u) => { c != null && c !== !1 && (i[u] = n && V.isArray(c) ? c.join(", ") : c); }), i; }
    [Symbol.iterator]() { return Object.entries(this.toJSON())[Symbol.iterator](); }
    toString() {
        return Object.entries(this.toJSON()).map(([n, i]) => n + ": " + i).join(`
`);
    }
    getSetCookie() { return this.get("set-cookie") || []; }
    get [Symbol.toStringTag]() { return "AxiosHeaders"; }
    static from(n) { return n instanceof this ? n : new this(n); }
    static concat(n, ...i) { const c = new this(n); return i.forEach(u => c.set(u)), c; }
    static accessor(n) { const c = (this[np] = this[np] = { accessors: {} }).accessors, u = this.prototype; function m(f) { const x = Kn(f); c[x] || (c1(u, f), c[x] = !0); } return V.isArray(n) ? n.forEach(m) : m(n), this; }
};
Et.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(Et.prototype, ({ value: l }, n) => { let i = n[0].toUpperCase() + n.slice(1); return { get: () => l, set(c) { this[i] = c; } }; });
V.freezeMethods(Et);
function Bd(l, n) { const i = this || lr, c = n || i, u = Et.from(c.headers); let m = c.data; return V.forEach(l, function (x) { m = x.call(i, m, u.normalize(), n ? n.status : void 0); }), u.normalize(), m; }
function hg(l) { return !!(l && l.__CANCEL__); }
function Vl(l, n, i) { xe.call(this, l ?? "canceled", xe.ERR_CANCELED, n, i), this.name = "CanceledError"; }
V.inherits(Vl, xe, { __CANCEL__: !0 });
function xg(l, n, i) { const c = i.config.validateStatus; !i.status || !c || c(i.status) ? l(i) : n(new xe("Request failed with status code " + i.status, [xe.ERR_BAD_REQUEST, xe.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4], i.config, i.request, i)); }
function o1(l) { const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l); return n && n[1] || ""; }
function d1(l, n) { l = l || 10; const i = new Array(l), c = new Array(l); let u = 0, m = 0, f; return n = n !== void 0 ? n : 1e3, function (b) { const N = Date.now(), v = c[m]; f || (f = N), i[u] = b, c[u] = N; let p = m, j = 0; for (; p !== u;)
    j += i[p++], p = p % l; if (u = (u + 1) % l, u === m && (m = (m + 1) % l), N - f < n)
    return; const k = v && N - v; return k ? Math.round(j * 1e3 / k) : void 0; }; }
function u1(l, n) { let i = 0, c = 1e3 / n, u, m; const f = (N, v = Date.now()) => { i = v, u = null, m && (clearTimeout(m), m = null), l(...N); }; return [(...N) => { const v = Date.now(), p = v - i; p >= c ? f(N, v) : (u = N, m || (m = setTimeout(() => { m = null, f(u); }, c - p))); }, () => u && f(u)]; }
const Hi = (l, n, i = 3) => { let c = 0; const u = d1(50, 250); return u1(m => { const f = m.loaded, x = m.lengthComputable ? m.total : void 0, b = f - c, N = u(b), v = f <= x; c = f; const p = { loaded: f, total: x, progress: x ? f / x : void 0, bytes: b, rate: N || void 0, estimated: N && x && v ? (x - f) / N : void 0, event: m, lengthComputable: x != null, [n ? "download" : "upload"]: !0 }; l(p); }, i); }, rp = (l, n) => { const i = l != null; return [c => n[0]({ lengthComputable: i, total: l, loaded: c }), n[1]]; }, ip = l => (...n) => V.asap(() => l(...n)), m1 = pt.hasStandardBrowserEnv ? ((l, n) => i => (i = new URL(i, pt.origin), l.protocol === i.protocol && l.host === i.host && (n || l.port === i.port)))(new URL(pt.origin), pt.navigator && /(msie|trident)/i.test(pt.navigator.userAgent)) : () => !0, f1 = pt.hasStandardBrowserEnv ? { write(l, n, i, c, u, m, f) { if (typeof document > "u")
        return; const x = [`${l}=${encodeURIComponent(n)}`]; V.isNumber(i) && x.push(`expires=${new Date(i).toUTCString()}`), V.isString(c) && x.push(`path=${c}`), V.isString(u) && x.push(`domain=${u}`), m === !0 && x.push("secure"), V.isString(f) && x.push(`SameSite=${f}`), document.cookie = x.join("; "); }, read(l) { if (typeof document > "u")
        return null; const n = document.cookie.match(new RegExp("(?:^|; )" + l + "=([^;]*)")); return n ? decodeURIComponent(n[1]) : null; }, remove(l) { this.write(l, "", Date.now() - 864e5, "/"); } } : { write() { }, read() { return null; }, remove() { } };
function h1(l) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l); }
function x1(l, n) { return n ? l.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : l; }
function pg(l, n, i) { let c = !h1(n); return l && (c || i == !1) ? x1(l, n) : n; }
const cp = l => l instanceof Et ? { ...l } : l;
function Xa(l, n) { n = n || {}; const i = {}; function c(N, v, p, j) { return V.isPlainObject(N) && V.isPlainObject(v) ? V.merge.call({ caseless: j }, N, v) : V.isPlainObject(v) ? V.merge({}, v) : V.isArray(v) ? v.slice() : v; } function u(N, v, p, j) { if (V.isUndefined(v)) {
    if (!V.isUndefined(N))
        return c(void 0, N, p, j);
}
else
    return c(N, v, p, j); } function m(N, v) { if (!V.isUndefined(v))
    return c(void 0, v); } function f(N, v) { if (V.isUndefined(v)) {
    if (!V.isUndefined(N))
        return c(void 0, N);
}
else
    return c(void 0, v); } function x(N, v, p) { if (p in n)
    return c(N, v); if (p in l)
    return c(void 0, N); } const b = { url: m, method: m, data: m, baseURL: f, transformRequest: f, transformResponse: f, paramsSerializer: f, timeout: f, timeoutMessage: f, withCredentials: f, withXSRFToken: f, adapter: f, responseType: f, xsrfCookieName: f, xsrfHeaderName: f, onUploadProgress: f, onDownloadProgress: f, decompress: f, maxContentLength: f, maxBodyLength: f, beforeRedirect: f, transport: f, httpAgent: f, httpsAgent: f, cancelToken: f, socketPath: f, responseEncoding: f, validateStatus: x, headers: (N, v, p) => u(cp(N), cp(v), p, !0) }; return V.forEach(Object.keys({ ...l, ...n }), function (v) { const p = b[v] || u, j = p(l[v], n[v], v); V.isUndefined(j) && p !== x || (i[v] = j); }), i; }
const gg = l => { const n = Xa({}, l); let { data: i, withXSRFToken: c, xsrfHeaderName: u, xsrfCookieName: m, headers: f, auth: x } = n; if (n.headers = f = Et.from(f), n.url = ug(pg(n.baseURL, n.url, n.allowAbsoluteUrls), l.params, l.paramsSerializer), x && f.set("Authorization", "Basic " + btoa((x.username || "") + ":" + (x.password ? unescape(encodeURIComponent(x.password)) : ""))), V.isFormData(i)) {
    if (pt.hasStandardBrowserEnv || pt.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
    else if (V.isFunction(i.getHeaders)) {
        const b = i.getHeaders(), N = ["content-type", "content-length"];
        Object.entries(b).forEach(([v, p]) => { N.includes(v.toLowerCase()) && f.set(v, p); });
    }
} if (pt.hasStandardBrowserEnv && (c && V.isFunction(c) && (c = c(n)), c || c !== !1 && m1(n.url))) {
    const b = u && m && f1.read(m);
    b && f.set(u, b);
} return n; }, p1 = typeof XMLHttpRequest < "u", g1 = p1 && function (l) { return new Promise(function (i, c) { const u = gg(l); let m = u.data; const f = Et.from(u.headers).normalize(); let { responseType: x, onUploadProgress: b, onDownloadProgress: N } = u, v, p, j, k, w; function S() { k && k(), w && w(), u.cancelToken && u.cancelToken.unsubscribe(v), u.signal && u.signal.removeEventListener("abort", v); } let E = new XMLHttpRequest; E.open(u.method.toUpperCase(), u.url, !0), E.timeout = u.timeout; function O() { if (!E)
    return; const q = Et.from("getAllResponseHeaders" in E && E.getAllResponseHeaders()), A = { data: !x || x === "text" || x === "json" ? E.responseText : E.response, status: E.status, statusText: E.statusText, headers: q, config: l, request: E }; xg(function (y) { i(y), S(); }, function (y) { c(y), S(); }, A), E = null; } "onloadend" in E ? E.onloadend = O : E.onreadystatechange = function () { !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(O); }, E.onabort = function () { E && (c(new xe("Request aborted", xe.ECONNABORTED, l, E)), E = null); }, E.onerror = function (Z) { const A = Z && Z.message ? Z.message : "Network Error", L = new xe(A, xe.ERR_NETWORK, l, E); L.event = Z || null, c(L), E = null; }, E.ontimeout = function () { let Z = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded"; const A = u.transitional || mg; u.timeoutErrorMessage && (Z = u.timeoutErrorMessage), c(new xe(Z, A.clarifyTimeoutError ? xe.ETIMEDOUT : xe.ECONNABORTED, l, E)), E = null; }, m === void 0 && f.setContentType(null), "setRequestHeader" in E && V.forEach(f.toJSON(), function (Z, A) { E.setRequestHeader(A, Z); }), V.isUndefined(u.withCredentials) || (E.withCredentials = !!u.withCredentials), x && x !== "json" && (E.responseType = u.responseType), N && ([j, w] = Hi(N, !0), E.addEventListener("progress", j)), b && E.upload && ([p, k] = Hi(b), E.upload.addEventListener("progress", p), E.upload.addEventListener("loadend", k)), (u.cancelToken || u.signal) && (v = q => { E && (c(!q || q.type ? new Vl(null, l, E) : q), E.abort(), E = null); }, u.cancelToken && u.cancelToken.subscribe(v), u.signal && (u.signal.aborted ? v() : u.signal.addEventListener("abort", v))); const D = o1(u.url); if (D && pt.protocols.indexOf(D) === -1) {
    c(new xe("Unsupported protocol " + D + ":", xe.ERR_BAD_REQUEST, l));
    return;
} E.send(m || null); }); }, b1 = (l, n) => { const { length: i } = l = l ? l.filter(Boolean) : []; if (n || i) {
    let c = new AbortController, u;
    const m = function (N) { if (!u) {
        u = !0, x();
        const v = N instanceof Error ? N : this.reason;
        c.abort(v instanceof xe ? v : new Vl(v instanceof Error ? v.message : v));
    } };
    let f = n && setTimeout(() => { f = null, m(new xe(`timeout ${n} of ms exceeded`, xe.ETIMEDOUT)); }, n);
    const x = () => { l && (f && clearTimeout(f), f = null, l.forEach(N => { N.unsubscribe ? N.unsubscribe(m) : N.removeEventListener("abort", m); }), l = null); };
    l.forEach(N => N.addEventListener("abort", m));
    const { signal: b } = c;
    return b.unsubscribe = () => V.asap(x), b;
} }, y1 = function* (l, n) { let i = l.byteLength; if (i < n) {
    yield l;
    return;
} let c = 0, u; for (; c < i;)
    u = c + n, yield l.slice(c, u), c = u; }, v1 = async function* (l, n) { for await (const i of j1(l))
    yield* y1(i, n); }, j1 = async function* (l) { if (l[Symbol.asyncIterator]) {
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
} }, op = (l, n, i, c) => { const u = v1(l, n); let m = 0, f, x = b => { f || (f = !0, c && c(b)); }; return new ReadableStream({ async pull(b) { try {
        const { done: N, value: v } = await u.next();
        if (N) {
            x(), b.close();
            return;
        }
        let p = v.byteLength;
        if (i) {
            let j = m += p;
            i(j);
        }
        b.enqueue(new Uint8Array(v));
    }
    catch (N) {
        throw x(N), N;
    } }, cancel(b) { return x(b), u.return(); } }, { highWaterMark: 2 }); }, dp = 64 * 1024, { isFunction: Ti } = V, N1 = (({ Request: l, Response: n }) => ({ Request: l, Response: n }))(V.global), { ReadableStream: up, TextEncoder: mp } = V.global, fp = (l, ...n) => { try {
    return !!l(...n);
}
catch {
    return !1;
} }, w1 = l => { l = V.merge.call({ skipUndefined: !0 }, N1, l); const { fetch: n, Request: i, Response: c } = l, u = n ? Ti(n) : typeof fetch == "function", m = Ti(i), f = Ti(c); if (!u)
    return !1; const x = u && Ti(up), b = u && (typeof mp == "function" ? (w => S => w.encode(S))(new mp) : async (w) => new Uint8Array(await new i(w).arrayBuffer())), N = m && x && fp(() => { let w = !1; const S = new i(pt.origin, { body: new up, method: "POST", get duplex() { return w = !0, "half"; } }).headers.has("Content-Type"); return w && !S; }), v = f && x && fp(() => V.isReadableStream(new c("").body)), p = { stream: v && (w => w.body) }; u && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(w => { !p[w] && (p[w] = (S, E) => { let O = S && S[w]; if (O)
    return O.call(S); throw new xe(`Response type '${w}' is not supported`, xe.ERR_NOT_SUPPORT, E); }); }); const j = async (w) => { if (w == null)
    return 0; if (V.isBlob(w))
    return w.size; if (V.isSpecCompliantForm(w))
    return (await new i(pt.origin, { method: "POST", body: w }).arrayBuffer()).byteLength; if (V.isArrayBufferView(w) || V.isArrayBuffer(w))
    return w.byteLength; if (V.isURLSearchParams(w) && (w = w + ""), V.isString(w))
    return (await b(w)).byteLength; }, k = async (w, S) => { const E = V.toFiniteNumber(w.getContentLength()); return E ?? j(S); }; return async (w) => { let { url: S, method: E, data: O, signal: D, cancelToken: q, timeout: Z, onDownloadProgress: A, onUploadProgress: L, responseType: y, headers: M, withCredentials: J = "same-origin", fetchOptions: de } = gg(w), fe = n || fetch; y = y ? (y + "").toLowerCase() : "text"; let I = b1([D, q && q.toAbortSignal()], Z), le = null; const ee = I && I.unsubscribe && (() => { I.unsubscribe(); }); let ue; try {
    if (L && N && E !== "get" && E !== "head" && (ue = await k(M, O)) !== 0) {
        let ke = new i(S, { method: "POST", body: O, duplex: "half" }), be;
        if (V.isFormData(O) && (be = ke.headers.get("content-type")) && M.setContentType(be), ke.body) {
            const [ne, me] = rp(ue, Hi(ip(L)));
            O = op(ke.body, dp, ne, me);
        }
    }
    V.isString(J) || (J = J ? "include" : "omit");
    const H = m && "credentials" in i.prototype, P = { ...de, signal: I, method: E.toUpperCase(), headers: M.normalize().toJSON(), body: O, duplex: "half", credentials: H ? J : void 0 };
    le = m && new i(S, P);
    let F = await (m ? fe(le, de) : fe(S, P));
    const Ce = v && (y === "stream" || y === "response");
    if (v && (A || Ce && ee)) {
        const ke = {};
        ["status", "statusText", "headers"].forEach(Ze => { ke[Ze] = F[Ze]; });
        const be = V.toFiniteNumber(F.headers.get("content-length")), [ne, me] = A && rp(be, Hi(ip(A), !0)) || [];
        F = new c(op(F.body, dp, ne, () => { me && me(), ee && ee(); }), ke);
    }
    y = y || "text";
    let ce = await p[V.findKey(p, y) || "text"](F, w);
    return !Ce && ee && ee(), await new Promise((ke, be) => { xg(ke, be, { data: ce, headers: Et.from(F.headers), status: F.status, statusText: F.statusText, config: w, request: le }); });
}
catch (H) {
    throw ee && ee(), H && H.name === "TypeError" && /Load failed|fetch/i.test(H.message) ? Object.assign(new xe("Network Error", xe.ERR_NETWORK, w, le), { cause: H.cause || H }) : xe.from(H, H && H.code, w, le);
} }; }, S1 = new Map, bg = l => { let n = l && l.env || {}; const { fetch: i, Request: c, Response: u } = n, m = [c, u, i]; let f = m.length, x = f, b, N, v = S1; for (; x--;)
    b = m[x], N = v.get(b), N === void 0 && v.set(b, N = x ? new Map : w1(n)), v = N; return N; };
bg();
const gu = { http: Vj, xhr: g1, fetch: { get: bg } };
V.forEach(gu, (l, n) => { if (l) {
    try {
        Object.defineProperty(l, "name", { value: n });
    }
    catch { }
    Object.defineProperty(l, "adapterName", { value: n });
} });
const hp = l => `- ${l}`, C1 = l => V.isFunction(l) || l === null || l === !1;
function k1(l, n) {
    l = V.isArray(l) ? l : [l];
    const { length: i } = l;
    let c, u;
    const m = {};
    for (let f = 0; f < i; f++) {
        c = l[f];
        let x;
        if (u = c, !C1(c) && (u = gu[(x = String(c)).toLowerCase()], u === void 0))
            throw new xe(`Unknown adapter '${x}'`);
        if (u && (V.isFunction(u) || (u = u.get(n))))
            break;
        m[x || "#" + f] = u;
    }
    if (!u) {
        const f = Object.entries(m).map(([b, N]) => `adapter ${b} ` + (N === !1 ? "is not supported by the environment" : "is not available in the build"));
        let x = i ? f.length > 1 ? `since :
` + f.map(hp).join(`
`) : " " + hp(f[0]) : "as no adapter specified";
        throw new xe("There is no suitable adapter to dispatch the request " + x, "ERR_NOT_SUPPORT");
    }
    return u;
}
const yg = { getAdapter: k1, adapters: gu };
function qd(l) { if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new Vl(null, l); }
function xp(l) { return qd(l), l.headers = Et.from(l.headers), l.data = Bd.call(l, l.transformRequest), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), yg.getAdapter(l.adapter || lr.adapter, l)(l).then(function (c) { return qd(l), c.data = Bd.call(l, l.transformResponse, c), c.headers = Et.from(c.headers), c; }, function (c) { return hg(c) || (qd(l), c && c.response && (c.response.data = Bd.call(l, l.transformResponse, c.response), c.response.headers = Et.from(c.response.headers))), Promise.reject(c); }); }
const vg = "1.13.2", sc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, n) => { sc[l] = function (c) { return typeof c === l || "a" + (n < 1 ? "n " : " ") + l; }; });
const pp = {};
sc.transitional = function (n, i, c) { function u(m, f) { return "[Axios v" + vg + "] Transitional option '" + m + "'" + f + (c ? ". " + c : ""); } return (m, f, x) => { if (n === !1)
    throw new xe(u(f, " has been removed" + (i ? " in " + i : "")), xe.ERR_DEPRECATED); return i && !pp[f] && (pp[f] = !0, console.warn(u(f, " has been deprecated since v" + i + " and will be removed in the near future"))), n ? n(m, f, x) : !0; }; };
sc.spelling = function (n) { return (i, c) => (console.warn(`${c} is likely a misspelling of ${n}`), !0); };
function A1(l, n, i) { if (typeof l != "object")
    throw new xe("options must be an object", xe.ERR_BAD_OPTION_VALUE); const c = Object.keys(l); let u = c.length; for (; u-- > 0;) {
    const m = c[u], f = n[m];
    if (f) {
        const x = l[m], b = x === void 0 || f(x, m, l);
        if (b !== !0)
            throw new xe("option " + m + " must be " + b, xe.ERR_BAD_OPTION_VALUE);
        continue;
    }
    if (i !== !0)
        throw new xe("Unknown option " + m, xe.ERR_BAD_OPTION);
} }
const Li = { assertOptions: A1, validators: sc }, gs = Li.validators;
let Ya = class {
    constructor(n) { this.defaults = n || {}, this.interceptors = { request: new lp, response: new lp }; }
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
    _request(n, i) { typeof n == "string" ? (i = i || {}, i.url = n) : i = n || {}, i = Xa(this.defaults, i); const { transitional: c, paramsSerializer: u, headers: m } = i; c !== void 0 && Li.assertOptions(c, { silentJSONParsing: gs.transitional(gs.boolean), forcedJSONParsing: gs.transitional(gs.boolean), clarifyTimeoutError: gs.transitional(gs.boolean) }, !1), u != null && (V.isFunction(u) ? i.paramsSerializer = { serialize: u } : Li.assertOptions(u, { encode: gs.function, serialize: gs.function }, !0)), i.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : i.allowAbsoluteUrls = !0), Li.assertOptions(i, { baseUrl: gs.spelling("baseURL"), withXsrfToken: gs.spelling("withXSRFToken") }, !0), i.method = (i.method || this.defaults.method || "get").toLowerCase(); let f = m && V.merge(m.common, m[i.method]); m && V.forEach(["delete", "get", "head", "post", "put", "patch", "common"], w => { delete m[w]; }), i.headers = Et.concat(f, m); const x = []; let b = !0; this.interceptors.request.forEach(function (S) { typeof S.runWhen == "function" && S.runWhen(i) === !1 || (b = b && S.synchronous, x.unshift(S.fulfilled, S.rejected)); }); const N = []; this.interceptors.response.forEach(function (S) { N.push(S.fulfilled, S.rejected); }); let v, p = 0, j; if (!b) {
        const w = [xp.bind(this), void 0];
        for (w.unshift(...x), w.push(...N), j = w.length, v = Promise.resolve(i); p < j;)
            v = v.then(w[p++], w[p++]);
        return v;
    } j = x.length; let k = i; for (; p < j;) {
        const w = x[p++], S = x[p++];
        try {
            k = w(k);
        }
        catch (E) {
            S.call(this, E);
            break;
        }
    } try {
        v = xp.call(this, k);
    }
    catch (w) {
        return Promise.reject(w);
    } for (p = 0, j = N.length; p < j;)
        v = v.then(N[p++], N[p++]); return v; }
    getUri(n) { n = Xa(this.defaults, n); const i = pg(n.baseURL, n.url, n.allowAbsoluteUrls); return ug(i, n.params, n.paramsSerializer); }
};
V.forEach(["delete", "get", "head", "options"], function (n) { Ya.prototype[n] = function (i, c) { return this.request(Xa(c || {}, { method: n, url: i, data: (c || {}).data })); }; });
V.forEach(["post", "put", "patch"], function (n) { function i(c) { return function (m, f, x) { return this.request(Xa(x || {}, { method: n, headers: c ? { "Content-Type": "multipart/form-data" } : {}, url: m, data: f })); }; } Ya.prototype[n] = i(), Ya.prototype[n + "Form"] = i(!0); });
let T1 = class jg {
    constructor(n) { if (typeof n != "function")
        throw new TypeError("executor must be a function."); let i; this.promise = new Promise(function (m) { i = m; }); const c = this; this.promise.then(u => { if (!c._listeners)
        return; let m = c._listeners.length; for (; m-- > 0;)
        c._listeners[m](u); c._listeners = null; }), this.promise.then = u => { let m; const f = new Promise(x => { c.subscribe(x), m = x; }).then(u); return f.cancel = function () { c.unsubscribe(m); }, f; }, n(function (m, f, x) { c.reason || (c.reason = new Vl(m, f, x), i(c.reason)); }); }
    throwIfRequested() { if (this.reason)
        throw this.reason; }
    subscribe(n) { if (this.reason) {
        n(this.reason);
        return;
    } this._listeners ? this._listeners.push(n) : this._listeners = [n]; }
    unsubscribe(n) { if (!this._listeners)
        return; const i = this._listeners.indexOf(n); i !== -1 && this._listeners.splice(i, 1); }
    toAbortSignal() { const n = new AbortController, i = c => { n.abort(c); }; return this.subscribe(i), n.signal.unsubscribe = () => this.unsubscribe(i), n.signal; }
    static source() { let n; return { token: new jg(function (u) { n = u; }), cancel: n }; }
};
function E1(l) { return function (i) { return l.apply(null, i); }; }
function D1(l) { return V.isObject(l) && l.isAxiosError === !0; }
const nu = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511, WebServerIsDown: 521, ConnectionTimedOut: 522, OriginIsUnreachable: 523, TimeoutOccurred: 524, SslHandshakeFailed: 525, InvalidSslCertificate: 526 };
Object.entries(nu).forEach(([l, n]) => { nu[n] = l; });
function Ng(l) { const n = new Ya(l), i = Wp(Ya.prototype.request, n); return V.extend(i, Ya.prototype, n, { allOwnKeys: !0 }), V.extend(i, n, null, { allOwnKeys: !0 }), i.create = function (u) { return Ng(Xa(l, u)); }, i; }
const Pe = Ng(lr);
Pe.Axios = Ya;
Pe.CanceledError = Vl;
Pe.CancelToken = T1;
Pe.isCancel = hg;
Pe.VERSION = vg;
Pe.toFormData = tc;
Pe.AxiosError = xe;
Pe.Cancel = Pe.CanceledError;
Pe.all = function (n) { return Promise.all(n); };
Pe.spread = E1;
Pe.isAxiosError = D1;
Pe.mergeConfig = Xa;
Pe.AxiosHeaders = Et;
Pe.formToJSON = l => fg(V.isHTMLForm(l) ? new FormData(l) : l);
Pe.getAdapter = yg.getAdapter;
Pe.HttpStatusCode = nu;
Pe.default = Pe;
const { Axios: jw, AxiosError: Nw, CanceledError: ww, isCancel: Sw, CancelToken: Cw, VERSION: kw, all: Aw, Cancel: Tw, isAxiosError: Ew, spread: Dw, toFormData: Mw, AxiosHeaders: Ow, HttpStatusCode: _w, formToJSON: zw, getAdapter: Rw, mergeConfig: Bw } = Pe, M1 = "/api";
function O1(l) { return l.replace(/_([a-z])/g, (n, i) => i.toUpperCase()); }
function ru(l) { if (Array.isArray(l))
    return l.map(ru); if (l !== null && typeof l == "object" && !(l instanceof Date)) {
    const n = {};
    for (const [i, c] of Object.entries(l)) {
        const u = O1(i);
        n[u] = ru(c);
    }
    return n;
} return l; }
const ie = Pe.create({ baseURL: M1, headers: { "Content-Type": "application/json" } });
ie.interceptors.request.use(l => { const n = js.getState().token; return n && (l.headers.Authorization = `Bearer ${n}`), l; }, l => Promise.reject(l));
ie.interceptors.response.use(l => (l.data && (l.data = ru(l.data)), l), l => { var n; return ((n = l.response) == null ? void 0 : n.status) === 401 && (js.getState().logout(), window.location.href = "/login"), Promise.reject(l); });
const wg = { login: (l, n) => ie.post("/auth/login", { username: l, password: n }), verify: () => ie.get("/auth/verify"), logout: () => ie.post("/auth/logout") }, ac = { getAll: () => ie.get("/projects"), getById: l => ie.get(`/projects/${l}`), create: l => ie.post("/projects", l), update: (l, n) => ie.put(`/projects/${l}`, n), delete: l => ie.delete(`/projects/${l}`), checkCode: l => ie.get(`/projects/check-code/${l}`) }, lc = { getByProject: l => ie.get(`/projects/${l}/epics`), getById: l => ie.get(`/epics/${l}`), create: (l, n) => ie.post(`/projects/${l}/epics`, n), update: (l, n) => ie.put(`/epics/${l}`, n), delete: l => ie.delete(`/epics/${l}`) }, nc = { getByProject: l => ie.get(`/projects/${l}/sprints`), getById: l => ie.get(`/sprints/${l}`), getFullHierarchy: l => ie.get(`/sprints/${l}/full`), create: (l, n) => ie.post(`/projects/${l}/sprints`, n), update: (l, n) => ie.put(`/sprints/${l}`, n), delete: l => ie.delete(`/sprints/${l}`) }, us = { getAll: l => ie.get("/tasks", { params: l }), getById: l => ie.get(`/tasks/${l}`), create: l => ie.post("/tasks", l), update: (l, n) => ie.put(`/tasks/${l}`, n), complete: (l, n) => ie.put(`/tasks/${l}/complete`, { notes: n }), delete: l => ie.delete(`/tasks/${l}`), getItems: l => ie.get(`/tasks/${l}/items`), createItems: (l, n) => ie.post(`/tasks/${l}/items`, { items: n }), completeItem: (l, n, i) => ie.put(`/tasks/${l}/items/${n}/complete`, i), getTags: l => ie.get(`/tasks/${l}/tags`), addTag: (l, n) => ie.post(`/tasks/${l}/tags`, { tag_id: n }), addTagByName: (l, n) => ie.post(`/tasks/${l}/tags`, { tag_name: n }), removeTag: (l, n) => ie.delete(`/tasks/${l}/tags/${n}`) }, _1 = { getAll: () => ie.get("/tags"), getTasksByTag: (l, n) => ie.get(`/tasks/by-tag/${l}`, { params: n }) }, z1 = { getAll: () => ie.get("/agents"), getById: l => ie.get(`/agents/${l}`), updateStatus: (l, n, i) => ie.put(`/agents/${l}/status`, { status: n, currentTask: i }), getTasks: (l, n) => ie.get(`/agents/${l}/tasks`, { params: { status: n } }) }, Ja = { getAll: l => ie.get("/memories", { params: l }), getById: l => ie.get(`/memories/${l}`), search: (l, n) => ie.get("/memories/search", { params: { q: l, tags: n == null ? void 0 : n.join(",") } }), create: l => ie.post("/memories", l), update: (l, n) => ie.put(`/memories/${l}`, n), delete: l => ie.delete(`/memories/${l}`), boost: (l, n) => ie.post(`/memories/${l}/boost`, { amount: n }), getRelated: l => ie.get(`/memories/${l}/related`), getTags: () => ie.get("/memories/tags"), getStats: () => ie.get("/memories/stats") }, bu = { getOverview: () => ie.get("/dashboard/overview"), getAlerts: () => ie.get("/dashboard/alerts"), getActivity: l => ie.get("/activity", { params: { limit: l } }) };
function R1() { const [l, n] = z.useState(!0), { token: i, isAuthenticated: c, logout: u, login: m, _hasHydrated: f } = js(); return z.useEffect(() => { if (!f)
    return; async function x() { if (!i) {
    n(!1);
    return;
} try {
    const { data: b } = await wg.verify();
    b.valid && b.user ? m(b.user, i) : u();
}
catch {
    u();
}
finally {
    n(!1);
} } x(); }, [f]), { isChecking: l, isAuthenticated: c }; } /**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B1 = l => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Sg = (...l) => l.filter((n, i, c) => !!n && n.trim() !== "" && c.indexOf(n) === i).join(" ").trim(); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var q1 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }; /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const L1 = z.forwardRef(({ color: l = "currentColor", size: n = 24, strokeWidth: i = 2, absoluteStrokeWidth: c, className: u = "", children: m, iconNode: f, ...x }, b) => z.createElement("svg", { ref: b, ...q1, width: n, height: n, stroke: l, strokeWidth: c ? Number(i) * 24 / Number(n) : i, className: Sg("lucide", u), ...x }, [...f.map(([N, v]) => z.createElement(N, v)), ...Array.isArray(m) ? m : [m]])); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $ = (l, n) => { const i = z.forwardRef(({ className: c, ...u }, m) => z.createElement(L1, { ref: m, iconNode: n, className: Sg(`lucide-${B1(l)}`, c), ...u })); return i.displayName = `${l}`, i; }; /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Za = $("Activity", [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const U1 = $("AlignLeft", [["path", { d: "M15 12H3", key: "6jk70r" }], ["path", { d: "M17 18H3", key: "1amg6g" }], ["path", { d: "M21 6H3", key: "1jwq7v" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bs = $("Archive", [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }], ["path", { d: "M10 12h4", key: "a56b0p" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yu = $("ArrowDown", [["path", { d: "M12 5v14", key: "s699le" }], ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ns = $("ArrowLeft", [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const H1 = $("ArrowUpDown", [["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }], ["path", { d: "M17 20V4", key: "1ejh1v" }], ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }], ["path", { d: "M7 4v16", key: "1glfcx" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $n = $("ArrowUp", [["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }], ["path", { d: "M12 19V5", key: "x0mq9r" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Cg = $("Bell", [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }], ["path", { d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326", key: "11g9vi" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ks = $("Bot", [["path", { d: "M12 8V4H8", key: "hb8ula" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M15 13v2", key: "1xurst" }], ["path", { d: "M9 13v2", key: "rq6x2g" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gl = $("Brain", [["path", { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z", key: "l5xja" }], ["path", { d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z", key: "ep3f8r" }], ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }], ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }], ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }], ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }], ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }], ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }], ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ql = $("Briefcase", [["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const kg = $("Building2", [["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }], ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }], ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }], ["path", { d: "M10 6h4", key: "1itunk" }], ["path", { d: "M10 10h4", key: "tcdvrf" }], ["path", { d: "M10 14h4", key: "kelpxr" }], ["path", { d: "M10 18h4", key: "1ulq68" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const V1 = $("CalendarDays", [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 14h.01", key: "6423bh" }], ["path", { d: "M12 14h.01", key: "1etili" }], ["path", { d: "M16 14h.01", key: "1gbofw" }], ["path", { d: "M8 18h.01", key: "lrp35t" }], ["path", { d: "M12 18h.01", key: "mhygvu" }], ["path", { d: "M16 18h.01", key: "kzsmim" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gt = $("Calendar", [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const G1 = $("Camera", [["path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z", key: "1tc9qg" }], ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Q1 = $("ChartColumn", [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M18 17V9", key: "2bz60n" }], ["path", { d: "M13 17V5", key: "1frdt8" }], ["path", { d: "M8 17v-3", key: "17ska0" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const K1 = $("ChartNoAxesColumnIncreasing", [["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }], ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }], ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Y1 = $("CheckCheck", [["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }], ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bl = $("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ag = $("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Tg = $("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Kl = $("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const X1 = $("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ht = $("CircleAlert", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const In = $("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Le = $("CircleCheck", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vu = $("CircleDot", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Eg = $("CirclePlus", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M12 8v8", key: "napkw2" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vi = $("CircleX", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ll = $("Circle", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const De = $("Clock", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gp = $("Cloud", [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Z1 = $("Columns3", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["path", { d: "M15 3v18", key: "14nvp0" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Rl = $("Copy", [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const F1 = $("Database", [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }], ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }], ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gi = $("DollarSign", [["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }], ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const At = $("ExternalLink", [["path", { d: "M15 3h6v6", key: "1q9fwt" }], ["path", { d: "M10 14 21 3", key: "gplh6r" }], ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ld = $("EyeOff", [["path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49", key: "ct8e1f" }], ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }], ["path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143", key: "13bj9a" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ui = $("Eye", [["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Dg = $("FileText", [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const J1 = $("Filter", [["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Mg = $("Flag", [["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }], ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $1 = $("FlaskConical", [["path", { d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2", key: "18mbvz" }], ["path", { d: "M6.453 15h11.094", key: "3shlmq" }], ["path", { d: "M8.5 2h7", key: "csnxdl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gs = $("FolderKanban", [["path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z", key: "1fr9dc" }], ["path", { d: "M8 10v4", key: "tgpxqk" }], ["path", { d: "M12 10v2", key: "hh53o1" }], ["path", { d: "M16 10v6", key: "1d6xys" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ju = $("Folder", [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bp = $("GitBranch", [["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }], ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }], ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }], ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const P1 = $("Github", [["path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4", key: "tonef" }], ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nu = $("Globe", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }], ["path", { d: "M2 12h20", key: "9i4pu4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wu = $("GraduationCap", [["path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z", key: "j76jl0" }], ["path", { d: "M22 10v6", key: "1lu8f3" }], ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const I1 = $("GripVertical", [["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }], ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }], ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }], ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }], ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }], ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Su = $("Hash", [["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }], ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }], ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }], ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Og = $("Hourglass", [["path", { d: "M5 22h14", key: "ehvnwv" }], ["path", { d: "M5 2h14", key: "pdyrp9" }], ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22", key: "1d314k" }], ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _g = $("Info", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yp = $("Key", [["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }], ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }], ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const zg = $("Laptop", [["path", { d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16", key: "tarvll" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const W1 = $("Layers", [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key: "zw3jo" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const eN = $("LayoutDashboard", [["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }], ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }], ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }], ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Yl = $("LayoutGrid", [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const tN = $("LayoutTemplate", [["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }], ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }], ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Cu = $("Link2", [["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }], ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Rg = $("Link", [["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }], ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Wn = $("ListChecks", [["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }], ["path", { d: "M13 6h8", key: "15sg57" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 18h8", key: "oe0vm4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ku = $("ListTodo", [["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }], ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["path", { d: "M13 6h8", key: "15sg57" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 18h8", key: "oe0vm4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Xl = $("List", [["path", { d: "M3 12h.01", key: "nlz23k" }], ["path", { d: "M3 18h.01", key: "1tta3j" }], ["path", { d: "M3 6h.01", key: "1rqtza" }], ["path", { d: "M8 12h13", key: "1za7za" }], ["path", { d: "M8 18h13", key: "1lx6n3" }], ["path", { d: "M8 6h13", key: "ik3vkj" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ae = $("LoaderCircle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const sN = $("Lock", [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const aN = $("LogOut", [["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }], ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }], ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bg = $("MessageSquare", [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const iu = $("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const lN = $("MousePointer", [["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }], ["path", { d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z", key: "277e5u" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vp = $("Network", [["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }], ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }], ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }], ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }], ["path", { d: "M12 12V8", key: "2874zd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qg = $("Palette", [["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }], ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }], ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }], ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }], ["path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z", key: "12rzf8" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const nN = $("Pause", [["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }], ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const rN = $("PenLine", [["path", { d: "M12 20h9", key: "t2du7b" }], ["path", { d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z", key: "1ykcvy" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xt = $("Plus", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const iN = $("RectangleEllipsis", [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M17 12h.01", key: "1m0b6t" }], ["path", { d: "M7 12h.01", key: "eqddd0" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Au = $("Save", [["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", key: "1c8476" }], ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }], ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ms = $("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const cN = $("Send", [["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z", key: "1ffxy3" }], ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qi = $("Server", [["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }], ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }], ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const rc = $("Settings", [["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", key: "1qme2f" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Lg = $("Shield", [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Tu = $("SquareChartGantt", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 8h7", key: "kbo1nt" }], ["path", { d: "M8 12h6", key: "ikassy" }], ["path", { d: "M11 16h5", key: "oq65wt" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const oN = $("SquareCheckBig", [["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ki = $("SquarePen", [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }], ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", key: "ohrbg2" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const dN = $("Square", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const uN = $("Star", [["path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z", key: "r04s7s" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Yi = $("Sun", [["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }], ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }], ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ic = $("Tag", [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", key: "vktsd0" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ug = $("Tags", [["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" }], ["path", { d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z", key: "135mg7" }], ["circle", { cx: "6.5", cy: "9.5", r: ".5", fill: "currentColor", key: "5pm5xn" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const cs = $("Target", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mN = $("Terminal", [["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }], ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fN = $("Timer", [["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }], ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }], ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const cc = $("Trash2", [["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ys = $("TrendingUp", [["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }], ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Fn = $("TriangleAlert", [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hN = $("Type", [["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }], ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }], ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qs = $("User", [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }], ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Eu = $("Users", [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const os = $("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]); /**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const st = $("Zap", [["path", { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z", key: "1xq2db" }]]), nr = $p(l => ({ sidebarOpen: !0, theme: "dark", toggleSidebar: () => l(n => ({ sidebarOpen: !n.sidebarOpen })), setSidebarOpen: n => l({ sidebarOpen: n }), setTheme: n => l({ theme: n }), toggleTheme: () => l(n => ({ theme: n.theme === "light" ? "dark" : "light" })) })), xN = (l, n) => { const i = new Array(l.length + n.length); for (let c = 0; c < l.length; c++)
    i[c] = l[c]; for (let c = 0; c < n.length; c++)
    i[l.length + c] = n[c]; return i; }, pN = (l, n) => ({ classGroupId: l, validator: n }), Hg = (l = new Map, n = null, i) => ({ nextPart: l, validators: n, classGroupId: i }), Xi = "-", jp = [], gN = "arbitrary..", bN = l => { const n = vN(l), { conflictingClassGroups: i, conflictingClassGroupModifiers: c } = l; return { getClassGroupId: f => { if (f.startsWith("[") && f.endsWith("]"))
        return yN(f); const x = f.split(Xi), b = x[0] === "" && x.length > 1 ? 1 : 0; return Vg(x, b, n); }, getConflictingClassGroupIds: (f, x) => { if (x) {
        const b = c[f], N = i[f];
        return b ? N ? xN(N, b) : b : N || jp;
    } return i[f] || jp; } }; }, Vg = (l, n, i) => { if (l.length - n === 0)
    return i.classGroupId; const u = l[n], m = i.nextPart.get(u); if (m) {
    const N = Vg(l, n + 1, m);
    if (N)
        return N;
} const f = i.validators; if (f === null)
    return; const x = n === 0 ? l.join(Xi) : l.slice(n).join(Xi), b = f.length; for (let N = 0; N < b; N++) {
    const v = f[N];
    if (v.validator(x))
        return v.classGroupId;
} }, yN = l => l.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => { const n = l.slice(1, -1), i = n.indexOf(":"), c = n.slice(0, i); return c ? gN + c : void 0; })(), vN = l => { const { theme: n, classGroups: i } = l; return jN(i, n); }, jN = (l, n) => { const i = Hg(); for (const c in l) {
    const u = l[c];
    Du(u, i, c, n);
} return i; }, Du = (l, n, i, c) => { const u = l.length; for (let m = 0; m < u; m++) {
    const f = l[m];
    NN(f, n, i, c);
} }, NN = (l, n, i, c) => { if (typeof l == "string") {
    wN(l, n, i);
    return;
} if (typeof l == "function") {
    SN(l, n, i, c);
    return;
} CN(l, n, i, c); }, wN = (l, n, i) => { const c = l === "" ? n : Gg(n, l); c.classGroupId = i; }, SN = (l, n, i, c) => { if (kN(l)) {
    Du(l(c), n, i, c);
    return;
} n.validators === null && (n.validators = []), n.validators.push(pN(i, l)); }, CN = (l, n, i, c) => { const u = Object.entries(l), m = u.length; for (let f = 0; f < m; f++) {
    const [x, b] = u[f];
    Du(b, Gg(n, x), i, c);
} }, Gg = (l, n) => { let i = l; const c = n.split(Xi), u = c.length; for (let m = 0; m < u; m++) {
    const f = c[m];
    let x = i.nextPart.get(f);
    x || (x = Hg(), i.nextPart.set(f, x)), i = x;
} return i; }, kN = l => "isThemeGetter" in l && l.isThemeGetter === !0, AN = l => { if (l < 1)
    return { get: () => { }, set: () => { } }; let n = 0, i = Object.create(null), c = Object.create(null); const u = (m, f) => { i[m] = f, n++, n > l && (n = 0, c = i, i = Object.create(null)); }; return { get(m) { let f = i[m]; if (f !== void 0)
        return f; if ((f = c[m]) !== void 0)
        return u(m, f), f; }, set(m, f) { m in i ? i[m] = f : u(m, f); } }; }, cu = "!", Np = ":", TN = [], wp = (l, n, i, c, u) => ({ modifiers: l, hasImportantModifier: n, baseClassName: i, maybePostfixModifierPosition: c, isExternal: u }), EN = l => { const { prefix: n, experimentalParseClassName: i } = l; let c = u => { const m = []; let f = 0, x = 0, b = 0, N; const v = u.length; for (let S = 0; S < v; S++) {
    const E = u[S];
    if (f === 0 && x === 0) {
        if (E === Np) {
            m.push(u.slice(b, S)), b = S + 1;
            continue;
        }
        if (E === "/") {
            N = S;
            continue;
        }
    }
    E === "[" ? f++ : E === "]" ? f-- : E === "(" ? x++ : E === ")" && x--;
} const p = m.length === 0 ? u : u.slice(b); let j = p, k = !1; p.endsWith(cu) ? (j = p.slice(0, -1), k = !0) : p.startsWith(cu) && (j = p.slice(1), k = !0); const w = N && N > b ? N - b : void 0; return wp(m, k, j, w); }; if (n) {
    const u = n + Np, m = c;
    c = f => f.startsWith(u) ? m(f.slice(u.length)) : wp(TN, !1, f, void 0, !0);
} if (i) {
    const u = c;
    c = m => i({ className: m, parseClassName: u });
} return c; }, DN = l => { const n = new Map; return l.orderSensitiveModifiers.forEach((i, c) => { n.set(i, 1e6 + c); }), i => { const c = []; let u = []; for (let m = 0; m < i.length; m++) {
    const f = i[m], x = f[0] === "[", b = n.has(f);
    x || b ? (u.length > 0 && (u.sort(), c.push(...u), u = []), c.push(f)) : u.push(f);
} return u.length > 0 && (u.sort(), c.push(...u)), c; }; }, MN = l => ({ cache: AN(l.cacheSize), parseClassName: EN(l), sortModifiers: DN(l), ...bN(l) }), ON = /\s+/, _N = (l, n) => { const { parseClassName: i, getClassGroupId: c, getConflictingClassGroupIds: u, sortModifiers: m } = n, f = [], x = l.trim().split(ON); let b = ""; for (let N = x.length - 1; N >= 0; N -= 1) {
    const v = x[N], { isExternal: p, modifiers: j, hasImportantModifier: k, baseClassName: w, maybePostfixModifierPosition: S } = i(v);
    if (p) {
        b = v + (b.length > 0 ? " " + b : b);
        continue;
    }
    let E = !!S, O = c(E ? w.substring(0, S) : w);
    if (!O) {
        if (!E) {
            b = v + (b.length > 0 ? " " + b : b);
            continue;
        }
        if (O = c(w), !O) {
            b = v + (b.length > 0 ? " " + b : b);
            continue;
        }
        E = !1;
    }
    const D = j.length === 0 ? "" : j.length === 1 ? j[0] : m(j).join(":"), q = k ? D + cu : D, Z = q + O;
    if (f.indexOf(Z) > -1)
        continue;
    f.push(Z);
    const A = u(O, E);
    for (let L = 0; L < A.length; ++L) {
        const y = A[L];
        f.push(q + y);
    }
    b = v + (b.length > 0 ? " " + b : b);
} return b; }, zN = (...l) => { let n = 0, i, c, u = ""; for (; n < l.length;)
    (i = l[n++]) && (c = Qg(i)) && (u && (u += " "), u += c); return u; }, Qg = l => { if (typeof l == "string")
    return l; let n, i = ""; for (let c = 0; c < l.length; c++)
    l[c] && (n = Qg(l[c])) && (i && (i += " "), i += n); return i; }, RN = (l, ...n) => { let i, c, u, m; const f = b => { const N = n.reduce((v, p) => p(v), l()); return i = MN(N), c = i.cache.get, u = i.cache.set, m = x, x(b); }, x = b => { const N = c(b); if (N)
    return N; const v = _N(b, i); return u(b, v), v; }; return m = f, (...b) => m(zN(...b)); }, BN = [], rt = l => { const n = i => i[l] || BN; return n.isThemeGetter = !0, n; }, Kg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Yg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qN = /^\d+\/\d+$/, LN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, UN = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, HN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, VN = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, GN = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, zl = l => qN.test(l), ge = l => !!l && !Number.isNaN(Number(l)), va = l => !!l && Number.isInteger(Number(l)), Ud = l => l.endsWith("%") && ge(l.slice(0, -1)), Vs = l => LN.test(l), QN = () => !0, KN = l => UN.test(l) && !HN.test(l), Xg = () => !1, YN = l => VN.test(l), XN = l => GN.test(l), ZN = l => !te(l) && !se(l), FN = l => Zl(l, Jg, Xg), te = l => Kg.test(l), Qa = l => Zl(l, $g, KN), Hd = l => Zl(l, WN, ge), Sp = l => Zl(l, Zg, Xg), JN = l => Zl(l, Fg, XN), Ei = l => Zl(l, Pg, YN), se = l => Yg.test(l), Yn = l => Fl(l, $g), $N = l => Fl(l, e2), Cp = l => Fl(l, Zg), PN = l => Fl(l, Jg), IN = l => Fl(l, Fg), Di = l => Fl(l, Pg, !0), Zl = (l, n, i) => { const c = Kg.exec(l); return c ? c[1] ? n(c[1]) : i(c[2]) : !1; }, Fl = (l, n, i = !1) => { const c = Yg.exec(l); return c ? c[1] ? n(c[1]) : i : !1; }, Zg = l => l === "position" || l === "percentage", Fg = l => l === "image" || l === "url", Jg = l => l === "length" || l === "size" || l === "bg-size", $g = l => l === "length", WN = l => l === "number", e2 = l => l === "family-name", Pg = l => l === "shadow", t2 = () => { const l = rt("color"), n = rt("font"), i = rt("text"), c = rt("font-weight"), u = rt("tracking"), m = rt("leading"), f = rt("breakpoint"), x = rt("container"), b = rt("spacing"), N = rt("radius"), v = rt("shadow"), p = rt("inset-shadow"), j = rt("text-shadow"), k = rt("drop-shadow"), w = rt("blur"), S = rt("perspective"), E = rt("aspect"), O = rt("ease"), D = rt("animate"), q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Z = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"], A = () => [...Z(), se, te], L = () => ["auto", "hidden", "clip", "visible", "scroll"], y = () => ["auto", "contain", "none"], M = () => [se, te, b], J = () => [zl, "full", "auto", ...M()], de = () => [va, "none", "subgrid", se, te], fe = () => ["auto", { span: ["full", va, se, te] }, va, se, te], I = () => [va, "auto", se, te], le = () => ["auto", "min", "max", "fr", se, te], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ue = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], H = () => ["auto", ...M()], P = () => [zl, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...M()], F = () => [l, se, te], Ce = () => [...Z(), Cp, Sp, { position: [se, te] }], ce = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }], ke = () => ["auto", "cover", "contain", PN, FN, { size: [se, te] }], be = () => [Ud, Yn, Qa], ne = () => ["", "none", "full", N, se, te], me = () => ["", ge, Yn, Qa], Ze = () => ["solid", "dashed", "dotted", "double"], lt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Ue = () => [ge, Ud, Cp, Sp], wa = () => ["", "none", w, se, te], as = () => ["none", ge, se, te], Xs = () => ["none", ge, se, te], Zs = () => [ge, se, te], Fs = () => [zl, "full", ...M()]; return { cacheSize: 500, theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [Vs], breakpoint: [Vs], color: [QN], container: [Vs], "drop-shadow": [Vs], ease: ["in", "out", "in-out"], font: [ZN], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [Vs], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [Vs], shadow: [Vs], spacing: ["px", ge], text: [Vs], "text-shadow": [Vs], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] }, classGroups: { aspect: [{ aspect: ["auto", "square", zl, te, se, E] }], container: ["container"], columns: [{ columns: [ge, te, se, x] }], "break-after": [{ "break-after": q() }], "break-before": [{ "break-before": q() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], sr: ["sr-only", "not-sr-only"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: A() }], overflow: [{ overflow: L() }], "overflow-x": [{ "overflow-x": L() }], "overflow-y": [{ "overflow-y": L() }], overscroll: [{ overscroll: y() }], "overscroll-x": [{ "overscroll-x": y() }], "overscroll-y": [{ "overscroll-y": y() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: J() }], "inset-x": [{ "inset-x": J() }], "inset-y": [{ "inset-y": J() }], start: [{ start: J() }], end: [{ end: J() }], top: [{ top: J() }], right: [{ right: J() }], bottom: [{ bottom: J() }], left: [{ left: J() }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [va, "auto", se, te] }], basis: [{ basis: [zl, "full", "auto", x, ...M()] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }], flex: [{ flex: [ge, zl, "auto", "initial", "none", te] }], grow: [{ grow: ["", ge, se, te] }], shrink: [{ shrink: ["", ge, se, te] }], order: [{ order: [va, "first", "last", "none", se, te] }], "grid-cols": [{ "grid-cols": de() }], "col-start-end": [{ col: fe() }], "col-start": [{ "col-start": I() }], "col-end": [{ "col-end": I() }], "grid-rows": [{ "grid-rows": de() }], "row-start-end": [{ row: fe() }], "row-start": [{ "row-start": I() }], "row-end": [{ "row-end": I() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": le() }], "auto-rows": [{ "auto-rows": le() }], gap: [{ gap: M() }], "gap-x": [{ "gap-x": M() }], "gap-y": [{ "gap-y": M() }], "justify-content": [{ justify: [...ee(), "normal"] }], "justify-items": [{ "justify-items": [...ue(), "normal"] }], "justify-self": [{ "justify-self": ["auto", ...ue()] }], "align-content": [{ content: ["normal", ...ee()] }], "align-items": [{ items: [...ue(), { baseline: ["", "last"] }] }], "align-self": [{ self: ["auto", ...ue(), { baseline: ["", "last"] }] }], "place-content": [{ "place-content": ee() }], "place-items": [{ "place-items": [...ue(), "baseline"] }], "place-self": [{ "place-self": ["auto", ...ue()] }], p: [{ p: M() }], px: [{ px: M() }], py: [{ py: M() }], ps: [{ ps: M() }], pe: [{ pe: M() }], pt: [{ pt: M() }], pr: [{ pr: M() }], pb: [{ pb: M() }], pl: [{ pl: M() }], m: [{ m: H() }], mx: [{ mx: H() }], my: [{ my: H() }], ms: [{ ms: H() }], me: [{ me: H() }], mt: [{ mt: H() }], mr: [{ mr: H() }], mb: [{ mb: H() }], ml: [{ ml: H() }], "space-x": [{ "space-x": M() }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": M() }], "space-y-reverse": ["space-y-reverse"], size: [{ size: P() }], w: [{ w: [x, "screen", ...P()] }], "min-w": [{ "min-w": [x, "screen", "none", ...P()] }], "max-w": [{ "max-w": [x, "screen", "none", "prose", { screen: [f] }, ...P()] }], h: [{ h: ["screen", "lh", ...P()] }], "min-h": [{ "min-h": ["screen", "lh", "none", ...P()] }], "max-h": [{ "max-h": ["screen", "lh", ...P()] }], "font-size": [{ text: ["base", i, Yn, Qa] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: [c, se, Hd] }], "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ud, te] }], "font-family": [{ font: [$N, te, n] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: [u, se, te] }], "line-clamp": [{ "line-clamp": [ge, "none", se, Hd] }], leading: [{ leading: [m, ...M()] }], "list-image": [{ "list-image": ["none", se, te] }], "list-style-position": [{ list: ["inside", "outside"] }], "list-style-type": [{ list: ["disc", "decimal", "none", se, te] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "placeholder-color": [{ placeholder: F() }], "text-color": [{ text: F() }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...Ze(), "wavy"] }], "text-decoration-thickness": [{ decoration: [ge, "from-font", "auto", se, Qa] }], "text-decoration-color": [{ decoration: F() }], "underline-offset": [{ "underline-offset": [ge, "auto", se, te] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: M() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se, te] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], wrap: [{ wrap: ["break-word", "anywhere", "normal"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", se, te] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: Ce() }], "bg-repeat": [{ bg: ce() }], "bg-size": [{ bg: ke() }], "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, va, se, te], radial: ["", se, te], conic: [va, se, te] }, IN, JN] }], "bg-color": [{ bg: F() }], "gradient-from-pos": [{ from: be() }], "gradient-via-pos": [{ via: be() }], "gradient-to-pos": [{ to: be() }], "gradient-from": [{ from: F() }], "gradient-via": [{ via: F() }], "gradient-to": [{ to: F() }], rounded: [{ rounded: ne() }], "rounded-s": [{ "rounded-s": ne() }], "rounded-e": [{ "rounded-e": ne() }], "rounded-t": [{ "rounded-t": ne() }], "rounded-r": [{ "rounded-r": ne() }], "rounded-b": [{ "rounded-b": ne() }], "rounded-l": [{ "rounded-l": ne() }], "rounded-ss": [{ "rounded-ss": ne() }], "rounded-se": [{ "rounded-se": ne() }], "rounded-ee": [{ "rounded-ee": ne() }], "rounded-es": [{ "rounded-es": ne() }], "rounded-tl": [{ "rounded-tl": ne() }], "rounded-tr": [{ "rounded-tr": ne() }], "rounded-br": [{ "rounded-br": ne() }], "rounded-bl": [{ "rounded-bl": ne() }], "border-w": [{ border: me() }], "border-w-x": [{ "border-x": me() }], "border-w-y": [{ "border-y": me() }], "border-w-s": [{ "border-s": me() }], "border-w-e": [{ "border-e": me() }], "border-w-t": [{ "border-t": me() }], "border-w-r": [{ "border-r": me() }], "border-w-b": [{ "border-b": me() }], "border-w-l": [{ "border-l": me() }], "divide-x": [{ "divide-x": me() }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": me() }], "divide-y-reverse": ["divide-y-reverse"], "border-style": [{ border: [...Ze(), "hidden", "none"] }], "divide-style": [{ divide: [...Ze(), "hidden", "none"] }], "border-color": [{ border: F() }], "border-color-x": [{ "border-x": F() }], "border-color-y": [{ "border-y": F() }], "border-color-s": [{ "border-s": F() }], "border-color-e": [{ "border-e": F() }], "border-color-t": [{ "border-t": F() }], "border-color-r": [{ "border-r": F() }], "border-color-b": [{ "border-b": F() }], "border-color-l": [{ "border-l": F() }], "divide-color": [{ divide: F() }], "outline-style": [{ outline: [...Ze(), "none", "hidden"] }], "outline-offset": [{ "outline-offset": [ge, se, te] }], "outline-w": [{ outline: ["", ge, Yn, Qa] }], "outline-color": [{ outline: F() }], shadow: [{ shadow: ["", "none", v, Di, Ei] }], "shadow-color": [{ shadow: F() }], "inset-shadow": [{ "inset-shadow": ["none", p, Di, Ei] }], "inset-shadow-color": [{ "inset-shadow": F() }], "ring-w": [{ ring: me() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: F() }], "ring-offset-w": [{ "ring-offset": [ge, Qa] }], "ring-offset-color": [{ "ring-offset": F() }], "inset-ring-w": [{ "inset-ring": me() }], "inset-ring-color": [{ "inset-ring": F() }], "text-shadow": [{ "text-shadow": ["none", j, Di, Ei] }], "text-shadow-color": [{ "text-shadow": F() }], opacity: [{ opacity: [ge, se, te] }], "mix-blend": [{ "mix-blend": [...lt(), "plus-darker", "plus-lighter"] }], "bg-blend": [{ "bg-blend": lt() }], "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"], "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }], "mask-image-linear-pos": [{ "mask-linear": [ge] }], "mask-image-linear-from-pos": [{ "mask-linear-from": Ue() }], "mask-image-linear-to-pos": [{ "mask-linear-to": Ue() }], "mask-image-linear-from-color": [{ "mask-linear-from": F() }], "mask-image-linear-to-color": [{ "mask-linear-to": F() }], "mask-image-t-from-pos": [{ "mask-t-from": Ue() }], "mask-image-t-to-pos": [{ "mask-t-to": Ue() }], "mask-image-t-from-color": [{ "mask-t-from": F() }], "mask-image-t-to-color": [{ "mask-t-to": F() }], "mask-image-r-from-pos": [{ "mask-r-from": Ue() }], "mask-image-r-to-pos": [{ "mask-r-to": Ue() }], "mask-image-r-from-color": [{ "mask-r-from": F() }], "mask-image-r-to-color": [{ "mask-r-to": F() }], "mask-image-b-from-pos": [{ "mask-b-from": Ue() }], "mask-image-b-to-pos": [{ "mask-b-to": Ue() }], "mask-image-b-from-color": [{ "mask-b-from": F() }], "mask-image-b-to-color": [{ "mask-b-to": F() }], "mask-image-l-from-pos": [{ "mask-l-from": Ue() }], "mask-image-l-to-pos": [{ "mask-l-to": Ue() }], "mask-image-l-from-color": [{ "mask-l-from": F() }], "mask-image-l-to-color": [{ "mask-l-to": F() }], "mask-image-x-from-pos": [{ "mask-x-from": Ue() }], "mask-image-x-to-pos": [{ "mask-x-to": Ue() }], "mask-image-x-from-color": [{ "mask-x-from": F() }], "mask-image-x-to-color": [{ "mask-x-to": F() }], "mask-image-y-from-pos": [{ "mask-y-from": Ue() }], "mask-image-y-to-pos": [{ "mask-y-to": Ue() }], "mask-image-y-from-color": [{ "mask-y-from": F() }], "mask-image-y-to-color": [{ "mask-y-to": F() }], "mask-image-radial": [{ "mask-radial": [se, te] }], "mask-image-radial-from-pos": [{ "mask-radial-from": Ue() }], "mask-image-radial-to-pos": [{ "mask-radial-to": Ue() }], "mask-image-radial-from-color": [{ "mask-radial-from": F() }], "mask-image-radial-to-color": [{ "mask-radial-to": F() }], "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }], "mask-image-radial-pos": [{ "mask-radial-at": Z() }], "mask-image-conic-pos": [{ "mask-conic": [ge] }], "mask-image-conic-from-pos": [{ "mask-conic-from": Ue() }], "mask-image-conic-to-pos": [{ "mask-conic-to": Ue() }], "mask-image-conic-from-color": [{ "mask-conic-from": F() }], "mask-image-conic-to-color": [{ "mask-conic-to": F() }], "mask-mode": [{ mask: ["alpha", "luminance", "match"] }], "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }], "mask-position": [{ mask: Ce() }], "mask-repeat": [{ mask: ce() }], "mask-size": [{ mask: ke() }], "mask-type": [{ "mask-type": ["alpha", "luminance"] }], "mask-image": [{ mask: ["none", se, te] }], filter: [{ filter: ["", "none", se, te] }], blur: [{ blur: wa() }], brightness: [{ brightness: [ge, se, te] }], contrast: [{ contrast: [ge, se, te] }], "drop-shadow": [{ "drop-shadow": ["", "none", k, Di, Ei] }], "drop-shadow-color": [{ "drop-shadow": F() }], grayscale: [{ grayscale: ["", ge, se, te] }], "hue-rotate": [{ "hue-rotate": [ge, se, te] }], invert: [{ invert: ["", ge, se, te] }], saturate: [{ saturate: [ge, se, te] }], sepia: [{ sepia: ["", ge, se, te] }], "backdrop-filter": [{ "backdrop-filter": ["", "none", se, te] }], "backdrop-blur": [{ "backdrop-blur": wa() }], "backdrop-brightness": [{ "backdrop-brightness": [ge, se, te] }], "backdrop-contrast": [{ "backdrop-contrast": [ge, se, te] }], "backdrop-grayscale": [{ "backdrop-grayscale": ["", ge, se, te] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ge, se, te] }], "backdrop-invert": [{ "backdrop-invert": ["", ge, se, te] }], "backdrop-opacity": [{ "backdrop-opacity": [ge, se, te] }], "backdrop-saturate": [{ "backdrop-saturate": [ge, se, te] }], "backdrop-sepia": [{ "backdrop-sepia": ["", ge, se, te] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": M() }], "border-spacing-x": [{ "border-spacing-x": M() }], "border-spacing-y": [{ "border-spacing-y": M() }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", se, te] }], "transition-behavior": [{ transition: ["normal", "discrete"] }], duration: [{ duration: [ge, "initial", se, te] }], ease: [{ ease: ["linear", "initial", O, se, te] }], delay: [{ delay: [ge, se, te] }], animate: [{ animate: ["none", D, se, te] }], backface: [{ backface: ["hidden", "visible"] }], perspective: [{ perspective: [S, se, te] }], "perspective-origin": [{ "perspective-origin": A() }], rotate: [{ rotate: as() }], "rotate-x": [{ "rotate-x": as() }], "rotate-y": [{ "rotate-y": as() }], "rotate-z": [{ "rotate-z": as() }], scale: [{ scale: Xs() }], "scale-x": [{ "scale-x": Xs() }], "scale-y": [{ "scale-y": Xs() }], "scale-z": [{ "scale-z": Xs() }], "scale-3d": ["scale-3d"], skew: [{ skew: Zs() }], "skew-x": [{ "skew-x": Zs() }], "skew-y": [{ "skew-y": Zs() }], transform: [{ transform: [se, te, "", "none", "gpu", "cpu"] }], "transform-origin": [{ origin: A() }], "transform-style": [{ transform: ["3d", "flat"] }], translate: [{ translate: Fs() }], "translate-x": [{ "translate-x": Fs() }], "translate-y": [{ "translate-y": Fs() }], "translate-z": [{ "translate-z": Fs() }], "translate-none": ["translate-none"], accent: [{ accent: F() }], appearance: [{ appearance: ["none", "auto"] }], "caret-color": [{ caret: F() }], "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", se, te] }], "field-sizing": [{ "field-sizing": ["fixed", "content"] }], "pointer-events": [{ "pointer-events": ["auto", "none"] }], resize: [{ resize: ["none", "", "y", "x"] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": M() }], "scroll-mx": [{ "scroll-mx": M() }], "scroll-my": [{ "scroll-my": M() }], "scroll-ms": [{ "scroll-ms": M() }], "scroll-me": [{ "scroll-me": M() }], "scroll-mt": [{ "scroll-mt": M() }], "scroll-mr": [{ "scroll-mr": M() }], "scroll-mb": [{ "scroll-mb": M() }], "scroll-ml": [{ "scroll-ml": M() }], "scroll-p": [{ "scroll-p": M() }], "scroll-px": [{ "scroll-px": M() }], "scroll-py": [{ "scroll-py": M() }], "scroll-ps": [{ "scroll-ps": M() }], "scroll-pe": [{ "scroll-pe": M() }], "scroll-pt": [{ "scroll-pt": M() }], "scroll-pr": [{ "scroll-pr": M() }], "scroll-pb": [{ "scroll-pb": M() }], "scroll-pl": [{ "scroll-pl": M() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", se, te] }], fill: [{ fill: ["none", ...F()] }], "stroke-w": [{ stroke: [ge, Yn, Qa, Hd] }], stroke: [{ stroke: ["none", ...F()] }], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] }, orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"] }; }, s2 = RN(t2);
function Q(...l) { return s2(Qy(l)); }
function ts(l) { return new Intl.DateTimeFormat("es-ES", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(l)); }
function Qe(l) { const n = new Date, i = new Date(l), c = n.getTime() - i.getTime(), u = Math.floor(c / 1e3), m = Math.floor(u / 60), f = Math.floor(m / 60), x = Math.floor(f / 24); return x > 7 ? ts(l) : x > 0 ? `hace ${x}d` : f > 0 ? `hace ${f}h` : m > 0 ? `hace ${m}m` : "ahora"; }
function Vd(l) { return new Intl.NumberFormat("es-MX").format(l); }
function Ig(l) { return { active: "bg-green-500", in_progress: "bg-blue-500", pending: "bg-yellow-500", completed: "bg-green-500", blocked: "bg-red-500", review: "bg-purple-500", inactive: "bg-gray-500", error: "bg-red-500", busy: "bg-orange-500" }[l] || "bg-gray-500"; }
function a2(l) { return { critical: "text-red-500 bg-red-500/10", high: "text-orange-500 bg-orange-500/10", medium: "text-yellow-500 bg-yellow-500/10", low: "text-green-500 bg-green-500/10" }[l] || "text-gray-500 bg-gray-500/10"; }
const l2 = { full: "v3.5.1-8d03708" }, n2 = [{ name: "Dashboard", href: "/dashboard", icon: eN }, { name: "Proyectos", href: "/projects", icon: Gs }, { name: "Negocios", href: "/businesses", icon: Ql }, { name: "Infraestructura", href: "/infrastructure", icon: Qi }, { name: "Design Hub", href: "/design-hub", icon: qg }, { name: "Memorias", href: "/memories", icon: Gl }, { name: "Oficina", href: "/office", icon: tN }, { name: "Archivo", href: "/projects/archived", icon: bs }], r2 = [{ name: "n8n Workflows", href: "https://n8n.solaria.agency", icon: At, color: "text-orange-400" }, { name: "VibeSDK", href: "https://docs.vibe-sdk.com", icon: At, color: "text-purple-400" }];
function i2() { const { sidebarOpen: l, toggleSidebar: n } = nr(); return t.jsxs("aside", { className: Q("fixed left-0 top-0 z-40 h-screen border-r border-border bg-card transition-all duration-300 flex flex-col", l ? "w-64" : "w-16"), children: [t.jsx("div", { className: Q("flex h-16 items-center border-b border-border px-4", l ? "justify-start" : "justify-center"), children: l ? t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("img", { src: "/solaria-logo.png", alt: "SOLARIA", className: "h-9 w-9", onError: i => { i.currentTarget.style.display = "none"; } }), t.jsx("span", { className: "font-bold text-lg solaria-text-gradient", children: "SOLARIA" })] }) : t.jsx("img", { src: "/solaria-logo.png", alt: "S", className: "h-8 w-8", onError: i => { i.currentTarget.style.display = "none"; } }) }), t.jsxs("nav", { className: "flex flex-col gap-1 p-2 flex-1", children: [l && t.jsx("div", { className: "px-3 py-2 text-[10px] font-semibold uppercase text-muted-foreground tracking-wider", children: "Navegacion" }), n2.map(i => t.jsxs(Ly, { to: i.href, className: ({ isActive: c }) => Q("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"), children: [t.jsx(i.icon, { className: "h-5 w-5 flex-shrink-0" }), l && t.jsx("span", { children: i.name })] }, i.name)), l && t.jsx("div", { className: "my-2 border-t border-border" }), l && t.jsx("div", { className: "px-3 py-2 text-[10px] font-semibold uppercase text-muted-foreground tracking-wider", children: "Enlaces" }), r2.map(i => t.jsxs("a", { href: i.href, target: "_blank", rel: "noopener noreferrer", className: Q("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", "text-muted-foreground hover:bg-accent hover:text-accent-foreground"), children: [t.jsx(i.icon, { className: Q("h-5 w-5 flex-shrink-0", i.color) }), l && t.jsxs(t.Fragment, { children: [t.jsx("span", { children: i.name }), t.jsx(At, { className: "h-3 w-3 ml-auto opacity-50" })] })] }, i.name))] }), t.jsx("div", { className: "border-t border-border", children: l ? t.jsxs("div", { className: "flex flex-col", children: [t.jsx("div", { className: "p-4 pb-2", children: t.jsxs("div", { className: "rounded-lg bg-accent/50 p-3 text-center", children: [t.jsxs("div", { className: "text-xs text-muted-foreground", children: [t.jsx("span", { className: "solaria-text-gradient font-semibold", children: "SOLARIA" }), t.jsx("span", { children: " DFO" })] }), t.jsx("div", { className: "mt-1 text-[10px] text-muted-foreground font-mono", children: l2.full })] }) }), t.jsx("div", { className: "h-10 border-t border-border flex items-center px-4", children: t.jsx("button", { onClick: n, className: "ml-auto flex items-center justify-center rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground p-1", "aria-label": "Colapsar sidebar", children: t.jsx(Tg, { className: "h-4 w-4" }) }) })] }) : t.jsx("div", { className: "h-10 flex items-center justify-center", children: t.jsx("button", { onClick: n, className: "flex items-center justify-center p-1 rounded-lg hover:bg-accent transition-colors", "aria-label": "Expandir sidebar", children: t.jsx(Kl, { className: "h-4 w-4" }) }) }) })] }); }
function Wg(l) { return { ...l, tasksTotal: l.totalTasks ?? l.total_tasks ?? 0, tasksCompleted: l.completedTasks ?? l.completed_tasks ?? 0, tasksPending: l.pendingTasks ?? l.pending_tasks ?? 0, activeAgents: l.agentsAssigned ?? l.agents_assigned ?? 0, budgetAllocated: l.budgetAllocated ?? l.budget ?? 0, budgetSpent: l.actualCost ?? l.actual_cost ?? 0 }; }
function c2() { return Ke({ queryKey: ["dashboard", "overview"], queryFn: async () => { var i, c, u, m, f, x, b, N, v, p, j; const { data: l } = await bu.getOverview(), n = l.data || l; return { totalProjects: ((i = n.projects) == null ? void 0 : i.total_projects) || 0, activeProjects: ((c = n.projects) == null ? void 0 : c.active_projects) || 0, completedProjects: ((u = n.projects) == null ? void 0 : u.completed_projects) || 0, totalTasks: ((m = n.tasks) == null ? void 0 : m.total_tasks) || 0, completedTasks: ((f = n.tasks) == null ? void 0 : f.completed_tasks) || 0, pendingTasks: ((x = n.tasks) == null ? void 0 : x.pending_tasks) || 0, inProgressTasks: ((b = n.tasks) == null ? void 0 : b.in_progress_tasks) || 0, totalAgents: ((N = n.agents) == null ? void 0 : N.total_agents) || 0, activeAgents: ((v = n.agents) == null ? void 0 : v.active_agents) || 0, totalMemories: ((p = n.memories) == null ? void 0 : p.total_memories) || 0, criticalAlerts: ((j = n.alerts) == null ? void 0 : j.critical_alerts) || 0 }; }, refetchInterval: 3e4 }); }
function o2() { return Ke({ queryKey: ["dashboard", "alerts"], queryFn: async () => { const { data: l } = await bu.getAlerts(), n = l.data || l.alerts || l; return Array.isArray(n) ? n : []; }, refetchInterval: 15e3 }); }
function rr() { return Ke({ queryKey: ["projects"], queryFn: async () => { const { data: l } = await ac.getAll(); return (l.projects || l.data || []).map(i => Wg(i)); } }); }
function ir(l) { return Ke({ queryKey: ["projects", l], queryFn: async () => { const { data: n } = await ac.getById(l), i = n.project || n.data || n; return Wg(i); }, enabled: !!l }); }
function Mu() { const l = Gt(); return ss({ mutationFn: ({ id: n, data: i }) => ac.update(n, i), onSuccess: (n, { id: i }) => { l.invalidateQueries({ queryKey: ["projects"] }), l.invalidateQueries({ queryKey: ["projects", i] }); } }); }
function oc(l) { return Ke({ queryKey: ["tasks", l], queryFn: async () => { const { data: n } = await us.getAll(l); return n.tasks || n.data || n || []; } }); }
function eb(l) { return Ke({ queryKey: ["tasks", l], queryFn: async () => { const { data: n } = await us.getById(l); return n.task || n.data || n; }, enabled: !!l && l > 0 }); }
function d2() { const l = Gt(); return ss({ mutationFn: n => us.create(n), onSuccess: () => { l.invalidateQueries({ queryKey: ["tasks"] }); } }); }
function u2() { const l = Gt(); return ss({ mutationFn: ({ id: n, data: i }) => us.update(n, i), onSuccess: (n, { id: i }) => { l.invalidateQueries({ queryKey: ["tasks"] }), l.invalidateQueries({ queryKey: ["tasks", i] }); } }); }
function tb() { return Ke({ queryKey: ["agents"], queryFn: async () => { const { data: l } = await z1.getAll(); return l.agents || l.data || l || []; }, refetchInterval: 1e4 }); }
function m2(l) { var c; const n = (c = l == null ? void 0 : l.tags) != null && c.length ? l.tags.join(",") : "", i = l == null ? void 0 : l.projectId; return Ke({ queryKey: ["memories", { projectId: i, tags: n }], queryFn: async () => { const u = {}; i && (u.projectId = i), n && (u.tags = JSON.stringify(l.tags)); const { data: m } = await Ja.getAll(Object.keys(u).length > 0 ? u : void 0), f = (m == null ? void 0 : m.memories) || (m == null ? void 0 : m.data) || m || []; return Array.isArray(f) ? f : []; } }); }
function f2(l) { return Ke({ queryKey: ["memories", l], queryFn: async () => { const { data: n } = await Ja.getById(l); return n.memory || n.data || n; }, enabled: !!l && l > 0 }); }
function h2(l, n) { return Ke({ queryKey: ["memories", "search", l, n], queryFn: async () => { const { data: i } = await Ja.search(l, n); return i.memories || i.data || i || []; }, enabled: l.length > 2 }); }
function x2() { return Ke({ queryKey: ["memories", "tags"], queryFn: async () => { const { data: l } = await Ja.getTags(); return l.tags || l.data || l || []; } }); }
function p2() { return Ke({ queryKey: ["memories", "stats"], queryFn: async () => { const { data: l } = await Ja.getStats(); return l.data || l; } }); }
function g2() { const l = Gt(); return ss({ mutationFn: ({ id: n, amount: i }) => Ja.boost(n, i), onSuccess: (n, { id: i }) => { l.invalidateQueries({ queryKey: ["memories"] }), l.invalidateQueries({ queryKey: ["memories", i] }); } }); }
function b2(l) { return Ke({ queryKey: ["memories", l, "related"], queryFn: async () => { const { data: n } = await Ja.getRelated(l); return n.related || n.data || n || []; }, enabled: !!l }); }
function y2(l) { return Ke({ queryKey: ["tasks", l, "items"], queryFn: async () => { const { data: n } = await us.getItems(l); return n.items || n.data || n || []; }, enabled: !!l }); }
function v2() { const l = Gt(); return ss({ mutationFn: ({ taskId: n, items: i }) => us.createItems(n, i), onSuccess: (n, { taskId: i }) => { l.invalidateQueries({ queryKey: ["tasks", i, "items"] }), l.invalidateQueries({ queryKey: ["tasks", i] }), l.invalidateQueries({ queryKey: ["tasks"] }); } }); }
function j2() { const l = Gt(); return ss({ mutationFn: ({ taskId: n, itemId: i, notes: c, actualMinutes: u }) => us.completeItem(n, i, { notes: c, actual_minutes: u }), onSuccess: (n, { taskId: i }) => { l.invalidateQueries({ queryKey: ["tasks", i, "items"] }), l.invalidateQueries({ queryKey: ["tasks", i] }), l.invalidateQueries({ queryKey: ["tasks"] }), l.invalidateQueries({ queryKey: ["dashboard"] }); } }); }
function N2() { return Ke({ queryKey: ["tags"], queryFn: async () => { const { data: l } = await _1.getAll(); return l.tags || l.data || l || []; }, staleTime: 1e3 * 60 * 5 }); }
function w2(l) { return Ke({ queryKey: ["tasks", l, "tags"], queryFn: async () => { const { data: n } = await us.getTags(l); return n.tags || n.data || n || []; }, enabled: !!l }); }
function S2() { const l = Gt(); return ss({ mutationFn: ({ taskId: n, tagId: i }) => us.addTag(n, i), onSuccess: (n, { taskId: i }) => { l.invalidateQueries({ queryKey: ["tasks", i, "tags"] }), l.invalidateQueries({ queryKey: ["tags"] }); } }); }
function C2() { const l = Gt(); return ss({ mutationFn: ({ taskId: n, tagId: i }) => us.removeTag(n, i), onSuccess: (n, { taskId: i }) => { l.invalidateQueries({ queryKey: ["tasks", i, "tags"] }), l.invalidateQueries({ queryKey: ["tags"] }); } }); }
function k2(l, n) { return Ke({ queryKey: ["projects", l, "activity", n], queryFn: async () => { const { data: i } = await bu.getActivity(n); return (i.logs || i.data || i || []).filter(u => u.projectId === l); }, enabled: !!l, refetchInterval: 15e3 }); }
function sb(l) { return Ke({ queryKey: ["projects", l, "tasks"], queryFn: async () => { const { data: n } = await us.getAll({ project_id: l }); return n.tasks || n.data || n || []; }, enabled: !!l, refetchInterval: 1e4 }); }
function A2(l) { return Ke({ queryKey: ["projects", "check-code", l], queryFn: async () => { const { data: n } = await ac.checkCode(l); return n; }, enabled: l.length === 3 && /^[A-Za-z]{3}$/.test(l), staleTime: 1e3 * 30 }); }
function ab(l) { return Ke({ queryKey: ["projects", l, "epics"], queryFn: async () => { const { data: n } = await lc.getByProject(l); return n.epics || n.data || n || []; }, enabled: !!l }); }
function T2() { const l = Gt(); return ss({ mutationFn: ({ projectId: n, data: i }) => lc.create(n, i), onSuccess: (n, { projectId: i }) => { l.invalidateQueries({ queryKey: ["projects", i, "epics"] }); } }); }
function E2() { const l = Gt(); return ss({ mutationFn: ({ id: n }) => lc.delete(n), onSuccess: (n, i) => { l.invalidateQueries({ queryKey: ["projects", i.projectId, "epics"] }), l.invalidateQueries({ queryKey: ["tasks"] }); } }); }
function D2(l) { return Ke({ queryKey: ["epics", l], queryFn: async () => { if (!l)
        return null; const { data: n } = await lc.getById(l); return n; }, enabled: !!l }); }
function lb(l) { return Ke({ queryKey: ["projects", l, "sprints"], queryFn: async () => { const { data: n } = await nc.getByProject(l); return n.sprints || n.data || n || []; }, enabled: !!l }); }
function M2() { const l = Gt(); return ss({ mutationFn: ({ projectId: n, data: i }) => nc.create(n, i), onSuccess: (n, { projectId: i }) => { l.invalidateQueries({ queryKey: ["projects", i, "sprints"] }); } }); }
function O2() { const l = Gt(); return ss({ mutationFn: ({ id: n }) => nc.delete(n), onSuccess: (n, i) => { l.invalidateQueries({ queryKey: ["projects", i.projectId, "sprints"] }), l.invalidateQueries({ queryKey: ["tasks"] }); } }); }
function _2(l) { return Ke({ queryKey: ["sprints", l], queryFn: async () => { if (!l)
        return null; const { data: n } = await nc.getById(l); return n; }, enabled: !!l }); }
function z2() { const l = yt(), { user: n, logout: i } = js(), { theme: c, toggleTheme: u } = nr(), { data: m } = o2(), { notifications: f, unreadCount: x, markAllAsRead: b, dismissNotification: N, clearAll: v } = tj(), [p, j] = z.useState(!1), [k, w] = z.useState(!1), [S, E] = z.useState(new Set), [O, D] = z.useState("activity"), q = z.useRef(null), Z = z.useRef(null), A = (ee, ue) => { ue.stopPropagation(), E(H => new Set([...H, ee])); }, L = () => { const ee = y.map(ue => ue.id); E(new Set(ee)); }; z.useEffect(() => { function ee(ue) { q.current && !q.current.contains(ue.target) && j(!1), Z.current && !Z.current.contains(ue.target) && w(!1); } return document.addEventListener("mousedown", ee), () => document.removeEventListener("mousedown", ee); }, []); const y = (m || []).filter(ee => !S.has(ee.id)), M = y.filter(ee => ee.severity === "critical" || ee.severity === "high"), J = y.length, de = () => { i(), l("/login"); }, fe = ee => { switch (ee) {
    case "critical":
    case "high": return t.jsx(Fn, { className: "h-4 w-4 text-red-500" });
    case "medium": return t.jsx(Fn, { className: "h-4 w-4 text-yellow-500" });
    case "info": return t.jsx(_g, { className: "h-4 w-4 text-blue-500" });
    default: return t.jsx(In, { className: "h-4 w-4 text-green-500" });
} }, I = ee => { const ue = "h-4 w-4", P = { created: "text-green-500", completed: "text-green-500", updated: "text-blue-500", deleted: "text-red-500", status: "text-yellow-500", info: "text-muted-foreground" }[ee.action] || "text-muted-foreground"; switch (ee.type) {
    case "task": return t.jsx(ku, { className: Q(ue, P) });
    case "project": return t.jsx(Gs, { className: Q(ue, P) });
    case "agent": return t.jsx(Ks, { className: Q(ue, P) });
    case "memory": return t.jsx(Gl, { className: Q(ue, P) });
    case "alert": return t.jsx(Fn, { className: Q(ue, "text-red-500") });
    default: return t.jsx(st, { className: Q(ue, P) });
} }, le = J + x; return t.jsxs("header", { className: "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card/80 px-6 backdrop-blur", children: [t.jsx("div", { className: "flex items-center gap-4", children: t.jsx("h1", { className: "text-lg font-semibold", children: "Digital Field Operations" }) }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsxs("div", { className: "relative", ref: q, children: [t.jsxs("button", { onClick: () => j(!p), className: Q("relative rounded-lg p-2 transition-colors hover:bg-accent", (M.length > 0 || x > 0) && "text-primary"), children: [t.jsx(Cg, { className: "h-5 w-5" }), le > 0 && t.jsx("span", { className: Q("absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white", M.length > 0 ? "bg-red-500" : "bg-primary"), children: le > 9 ? "9+" : le })] }), p && t.jsxs("div", { className: "absolute right-0 top-full mt-2 w-96 rounded-xl border border-border bg-card shadow-lg", children: [t.jsxs("div", { className: "flex border-b border-border", children: [t.jsxs("button", { onClick: () => D("activity"), className: Q("flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors", O === "activity" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"), children: [t.jsx(Za, { className: "h-4 w-4" }), "Actividad", x > 0 && t.jsx("span", { className: "bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5 rounded-full", children: x })] }), t.jsxs("button", { onClick: () => D("alerts"), className: Q("flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors", O === "alerts" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"), children: [t.jsx(Fn, { className: "h-4 w-4" }), "Alertas", J > 0 && t.jsx("span", { className: Q("text-[10px] px-1.5 py-0.5 rounded-full", M.length > 0 ? "bg-red-500 text-white" : "bg-muted text-muted-foreground"), children: J })] })] }), t.jsx("div", { className: "max-h-80 overflow-y-auto", children: O === "activity" ? t.jsx(t.Fragment, { children: f.length > 0 ? t.jsxs(t.Fragment, { children: [t.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-muted/30", children: [t.jsx("span", { className: "text-xs text-muted-foreground", children: "Eventos en tiempo real" }), t.jsxs("div", { className: "flex gap-2", children: [x > 0 && t.jsx("button", { onClick: b, className: "text-xs text-primary hover:underline", children: "Marcar leídas" }), t.jsx("button", { onClick: v, className: "text-xs text-muted-foreground hover:text-foreground", children: "Limpiar" })] })] }), f.slice(0, 15).map(ee => t.jsxs("div", { className: Q("flex gap-3 px-4 py-3 hover:bg-accent/50 cursor-pointer border-b border-border last:border-0 group relative transition-colors", !ee.read && "bg-primary/5"), children: [t.jsx("div", { className: "flex-shrink-0 mt-0.5", children: I(ee) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("span", { className: "font-medium text-sm truncate", children: ee.title }), !ee.read && t.jsx("span", { className: "h-2 w-2 rounded-full bg-primary flex-shrink-0" })] }), t.jsx("div", { className: "text-xs text-muted-foreground truncate", children: ee.message }), t.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: Qe(ee.timestamp.toISOString()) })] }), t.jsx("button", { onClick: ue => { ue.stopPropagation(), N(ee.id); }, className: "opacity-0 group-hover:opacity-100 p-1 hover:bg-muted rounded transition-all absolute right-2 top-2", title: "Descartar", children: t.jsx(os, { className: "h-3.5 w-3.5 text-muted-foreground" }) })] }, ee.id))] }) : t.jsxs("div", { className: "px-4 py-8 text-center", children: [t.jsx(Za, { className: "h-8 w-8 text-muted-foreground mx-auto mb-2" }), t.jsx("div", { className: "text-sm text-muted-foreground", children: "Sin actividad reciente" }), t.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Los eventos aparecerán aquí en tiempo real" })] }) }) : t.jsx(t.Fragment, { children: y.length > 0 ? t.jsxs(t.Fragment, { children: [t.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-muted/30", children: [t.jsxs("span", { className: "text-xs text-muted-foreground", children: [J, " alertas activas"] }), t.jsx("button", { onClick: L, className: "text-xs text-muted-foreground hover:text-foreground", children: "Descartar todas" })] }), y.slice(0, 10).map(ee => t.jsxs("div", { className: "flex gap-3 px-4 py-3 hover:bg-accent/50 cursor-pointer border-b border-border last:border-0 group relative", children: [fe(ee.severity), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx("div", { className: "font-medium text-sm truncate", children: ee.title }), t.jsx("div", { className: "text-xs text-muted-foreground truncate", children: ee.message }), t.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: Qe(ee.createdAt) })] }), t.jsx("button", { onClick: ue => A(ee.id, ue), className: "opacity-0 group-hover:opacity-100 p-1 hover:bg-muted rounded transition-all absolute right-2 top-2", title: "Descartar", children: t.jsx(os, { className: "h-3.5 w-3.5 text-muted-foreground" }) })] }, ee.id))] }) : t.jsxs("div", { className: "px-4 py-8 text-center", children: [t.jsx(In, { className: "h-8 w-8 text-green-500 mx-auto mb-2" }), t.jsx("div", { className: "text-sm text-muted-foreground", children: "Sin alertas activas" }), t.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Todo está funcionando correctamente" })] }) }) })] })] }), t.jsx("button", { onClick: u, className: "rounded-lg p-2 transition-colors hover:bg-accent", title: c === "dark" ? "Modo claro" : "Modo oscuro", children: c === "dark" ? t.jsx(Yi, { className: "h-5 w-5" }) : t.jsx(iu, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "relative", ref: Z, children: [t.jsxs("button", { onClick: () => w(!k), className: "flex items-center gap-3 border-l border-border pl-4 ml-2 hover:bg-accent/50 rounded-lg pr-2 py-1 transition-colors", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground", children: t.jsx(Qs, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "text-sm text-left", children: [t.jsx("div", { className: "font-medium", children: n == null ? void 0 : n.name }), t.jsx("div", { className: "text-xs text-muted-foreground capitalize", children: n == null ? void 0 : n.role })] })] }), t.jsx(Ag, { className: Q("h-4 w-4 text-muted-foreground transition-transform", k && "rotate-180") })] }), k && t.jsxs("div", { className: "absolute right-0 top-full mt-2 w-56 rounded-xl border border-border bg-card shadow-lg overflow-hidden", children: [t.jsxs("div", { className: "px-4 py-3 border-b border-border", children: [t.jsx("div", { className: "font-medium text-sm", children: n == null ? void 0 : n.name }), t.jsx("div", { className: "text-xs text-muted-foreground", children: n == null ? void 0 : n.email })] }), t.jsxs("div", { className: "py-1", children: [t.jsxs("button", { onClick: () => { w(!1), l("/settings"); }, className: "flex w-full items-center gap-3 px-4 py-2.5 text-sm hover:bg-accent transition-colors", children: [t.jsx(rc, { className: "h-4 w-4 text-muted-foreground" }), "Configuración"] }), t.jsxs("button", { onClick: u, className: "flex w-full items-center gap-3 px-4 py-2.5 text-sm hover:bg-accent transition-colors", children: [c === "dark" ? t.jsx(Yi, { className: "h-4 w-4 text-muted-foreground" }) : t.jsx(iu, { className: "h-4 w-4 text-muted-foreground" }), c === "dark" ? "Modo claro" : "Modo oscuro"] })] }), t.jsx("div", { className: "border-t border-border py-1", children: t.jsxs("button", { onClick: de, className: "flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-500/10 transition-colors", children: [t.jsx(aN, { className: "h-4 w-4" }), "Cerrar sesión"] }) })] })] })] })] }); }
function R2() { const [l, n] = z.useState(new Date), { sidebarOpen: i } = nr(); z.useEffect(() => { const u = setInterval(() => { n(new Date); }, 6e4); return () => clearInterval(u); }, []); const c = u => u.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }); return t.jsxs("footer", { className: Q("fixed bottom-0 right-0 h-10 bg-[#1a1a1a] border-t border-border flex items-center justify-between px-6 text-xs text-muted-foreground z-30 transition-all duration-300", i ? "left-64" : "left-16"), children: [t.jsx("div", { className: "flex items-center gap-2", children: t.jsxs("div", { className: "relative flex items-center gap-2", children: [t.jsxs("span", { className: "relative flex h-2 w-2", children: [t.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }), t.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-green-500" })] }), t.jsx("span", { className: "text-green-400 font-medium", children: "En vivo" })] }) }), t.jsxs("div", { className: "text-center", children: ["Última sincronización: ", c(l)] }), t.jsx("div", { className: "flex items-center gap-4", children: t.jsx("a", { href: "https://docs.solaria.agency", target: "_blank", rel: "noopener noreferrer", className: "hover:text-foreground transition-colors", children: "Documentación" }) })] }); }
const B2 = ["/tasks", "/projects"];
function q2() { const l = nr(c => c.sidebarOpen), n = Uy(), i = B2.some(c => n.pathname === c || n.pathname.startsWith(`${c}/`)); return t.jsxs("div", { className: "flex h-screen overflow-hidden bg-background", children: [t.jsx(i2, {}), t.jsxs("div", { className: Q("flex flex-1 flex-col transition-all duration-300", l ? "ml-64" : "ml-16"), children: [t.jsx(z2, {}), t.jsx("main", { className: Q("main-content flex-1 overflow-auto pb-12", i ? "p-3 pb-12" : "p-6 pb-12"), children: t.jsx(Hy, {}) }), t.jsx(R2, {})] })] }); }
function L2() { const l = yt(), n = js(p => p.login), [i, c] = z.useState(""), [u, m] = z.useState(""), [f, x] = z.useState(""), [b, N] = z.useState(!1), v = async (p) => { var j, k; p.preventDefault(), x(""), N(!0); try {
    const { data: w } = await wg.login(i, u);
    w.token && w.user ? (n(w.user, w.token), l("/dashboard")) : x(w.message || "Error de autenticación");
}
catch (w) {
    x(((k = (j = w.response) == null ? void 0 : j.data) == null ? void 0 : k.message) || "Error de conexión");
}
finally {
    N(!1);
} }; return t.jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-accent/20", children: t.jsxs("div", { className: "w-full max-w-md space-y-8 rounded-xl border border-border bg-card p-8 shadow-xl", children: [t.jsxs("div", { className: "text-center", children: [t.jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full solaria-gradient", children: t.jsx(Yi, { className: "h-10 w-10 text-white" }) }), t.jsx("h1", { className: "mt-4 text-2xl font-bold", children: "SOLARIA DFO" }), t.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Digital Field Operations" })] }), t.jsxs("form", { onSubmit: v, className: "mt-8 space-y-4", children: [f && t.jsx("div", { className: "rounded-lg bg-destructive/10 p-3 text-sm text-destructive", children: f }), t.jsxs("div", { children: [t.jsx("label", { htmlFor: "username", className: "block text-sm font-medium mb-2", children: "Usuario" }), t.jsx("input", { id: "username", type: "text", value: i, onChange: p => c(p.target.value), className: "w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", placeholder: "Ingresa tu usuario", autoComplete: "username", required: !0 })] }), t.jsxs("div", { children: [t.jsx("label", { htmlFor: "password", className: "block text-sm font-medium mb-2", children: "Contraseña" }), t.jsx("input", { id: "password", type: "password", value: u, onChange: p => m(p.target.value), className: "w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", placeholder: "Ingresa tu contraseña", autoComplete: "current-password", required: !0 })] }), t.jsx("button", { type: "submit", disabled: b, className: "w-full rounded-lg solaria-gradient py-2.5 font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50", children: b ? t.jsxs("span", { className: "flex items-center justify-center gap-2", children: [t.jsx(Ae, { className: "h-4 w-4 animate-spin" }), "Ingresando..."] }) : "Ingresar" })] }), t.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "© 2024-2025 SOLARIA AGENCY" })] }) }); }
function Mi({ title: l, value: n, icon: i, iconClass: c, onClick: u }) { return t.jsxs("div", { onClick: u, className: `stat-card ${u ? "cursor-pointer" : ""}`, title: u ? `Ver ${l.toLowerCase()}` : void 0, children: [t.jsx("div", { className: `stat-icon ${c}`, children: t.jsx(i, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: l }), t.jsx("div", { className: "stat-value", children: n })] })] }); }
function U2({ task: l, onClick: n }) { return t.jsxs("div", { className: "completed-task-item", onClick: n, children: [t.jsx("div", { className: "task-check-icon", style: { background: "rgba(34, 197, 94, 0.15)", color: "#22c55e" }, children: t.jsx(Le, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "task-content", children: [t.jsxs("div", { className: "task-title-row", children: [t.jsx("span", { className: "text-xs font-mono bg-muted px-1.5 py-0.5 rounded mr-2", children: l.taskCode || `#${l.taskNumber}` }), t.jsx("span", { className: "task-title", children: l.title })] }), t.jsxs("div", { className: "task-meta", children: [l.projectName && t.jsxs("span", { className: "task-meta-item", children: [t.jsx(ju, { className: "h-3 w-3" }), l.projectName] }), t.jsxs("span", { className: "task-meta-item", children: [t.jsx(De, { className: "h-3 w-3" }), Qe(l.completedAt || l.updatedAt)] })] })] })] }); }
function H2({ project: l, onClick: n }) { const i = l.status === "completed" ? "low" : l.status === "development" ? "high" : "medium", c = l.tasksTotal || 0, u = l.tasksCompleted || 0, m = c > 0 ? Math.round(u / c * 100) : l.progress || 0; return t.jsxs("div", { className: "completed-task-item", onClick: n, style: { cursor: "pointer" }, children: [t.jsx("div", { className: "task-check-icon", style: { background: "rgba(59, 130, 246, 0.15)", color: "#60a5fa" }, children: t.jsx(ju, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "task-content", children: [t.jsxs("div", { className: "task-title-row", children: [t.jsx("span", { className: "task-title", children: l.name }), t.jsx("span", { className: `task-priority-badge ${i}`, children: l.status || "activo" })] }), t.jsxs("div", { className: "task-meta", children: [t.jsxs("span", { className: "task-meta-item", children: [t.jsx(ku, { className: "h-3 w-3" }), c, " tareas"] }), t.jsxs("span", { className: "task-meta-item", children: [t.jsx(Le, { className: "h-3 w-3" }), m, "%"] })] })] })] }); }
function V2({ task: l, onClick: n }) { const i = l.priority === "high" || l.priority === "critical" ? "high" : l.priority === "medium" ? "medium" : "low"; return t.jsxs("div", { className: "completed-task-item", onClick: n, style: { cursor: "pointer" }, children: [t.jsx("div", { className: "task-check-icon", style: { background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" }, children: t.jsx(Eg, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "task-content", children: [t.jsxs("div", { className: "task-title-row", children: [t.jsx("span", { className: "text-xs font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded mr-2 font-semibold", children: l.taskCode || `#${l.taskNumber}` }), t.jsx("span", { className: "task-title", children: l.title }), t.jsx("span", { className: `task-priority-badge ${i}`, children: l.priority || "normal" })] }), t.jsxs("div", { className: "task-meta", children: [t.jsxs("span", { className: "task-meta-item", children: [t.jsx(De, { className: "h-3 w-3" }), Qe(l.createdAt)] }), l.projectName && t.jsxs("span", { className: "task-meta-item", children: [t.jsx(ju, { className: "h-3 w-3" }), l.projectName] })] })] })] }); }
function Gd() { return t.jsxs("div", { className: "feed-loading", children: [t.jsx(Ae, { className: "h-5 w-5 animate-spin" }), t.jsx("p", { children: "Cargando..." })] }); }
function Qd({ icon: l, message: n }) { return t.jsxs("div", { className: "feed-empty", children: [t.jsx(l, { className: "h-8 w-8" }), t.jsx("p", { children: n })] }); }
function G2() { const l = yt(), { data: n, isLoading: i } = c2(), { data: c, isLoading: u } = rr(), { data: m, isLoading: f } = oc({}), [x, b] = z.useState(""), [N, v] = z.useState([]), [p, j] = z.useState([]), [k, w] = z.useState([]), S = D => { v(q => q.includes(D) ? q.filter(Z => Z !== D) : [...q, D]); }; z.useEffect(() => { if (m) {
    const D = new Date;
    D.setDate(D.getDate() - 7);
    const q = L => { var y, M; if (x && x.length >= 3) {
        const J = x.toLowerCase();
        if (!(L.title.toLowerCase().includes(J) || ((y = L.taskCode) == null ? void 0 : y.toLowerCase().includes(J)) || ((M = L.description) == null ? void 0 : M.toLowerCase().includes(J))))
            return !1;
    } return !(N.length > 0 && !N.includes(L.priority || "low")); }, Z = m.filter(L => new Date(L.createdAt) >= D && q(L)).slice(0, 10), A = m.filter(L => L.status === "completed" && q(L)).sort((L, y) => { const M = new Date(L.completedAt || L.updatedAt); return new Date(y.completedAt || y.updatedAt).getTime() - M.getTime(); }).slice(0, 15).map(L => { const y = c == null ? void 0 : c.find(M => M.id === L.projectId); return { ...L, projectName: y == null ? void 0 : y.name }; });
    j(Z), w(A);
} }, [m, c, x, N]); const E = () => l("/projects"), O = D => l(`/projects/${D}`); return t.jsxs("div", { className: "space-y-6", children: [t.jsx("div", { className: "section-header", children: t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Dashboard" }), t.jsx("p", { className: "section-subtitle", children: "Vista ejecutiva del estado de operaciones" })] }) }), t.jsxs("div", { className: "dashboard-stats-row", children: [t.jsx(Mi, { title: "Proyectos Activos", value: i ? "-" : (n == null ? void 0 : n.activeProjects) || (c == null ? void 0 : c.length) || 0, icon: Gs, iconClass: "projects", onClick: E }), t.jsx(Mi, { title: "Tareas Completadas", value: i ? "-" : (n == null ? void 0 : n.completedTasks) || 0, icon: Le, iconClass: "tasks" }), t.jsx(Mi, { title: "En Progreso", value: i ? "-" : (n == null ? void 0 : n.inProgressTasks) || 0, icon: De, iconClass: "active" }), t.jsx(Mi, { title: "Agentes Activos", value: i ? "-" : (n == null ? void 0 : n.activeAgents) || 0, icon: Ks, iconClass: "agents" })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [t.jsxs("div", { className: "relative flex-1", children: [t.jsx(ms, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), t.jsx("input", { type: "text", placeholder: "Buscar en feeds (mínimo 3 caracteres)...", value: x, onChange: D => b(D.target.value), className: "w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" })] }), t.jsxs("span", { className: "text-sm text-muted-foreground", children: [k.length + p.length, " items"] })] }), t.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [t.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Prioridad:" }), ["critical", "high", "medium", "low"].map(D => { const q = N.includes(D), Z = (m || []).filter(L => (L.priority || "low") === D).length; if (Z === 0)
                            return null; const A = { critical: { label: "🔴 Crítica", color: "#ef4444", bg: "rgba(239, 68, 68, 0.15)" }, high: { label: "🟠 Alta", color: "#f97316", bg: "rgba(249, 115, 22, 0.15)" }, medium: { label: "🟡 Media", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)" }, low: { label: "🟢 Baja", color: "#22c55e", bg: "rgba(34, 197, 94, 0.15)" } }[D]; return t.jsxs("button", { onClick: () => S(D), className: "memory-tag-filter", style: q ? { backgroundColor: A.color, color: "#fff" } : { backgroundColor: A.bg, color: A.color }, children: [A.label, " (", Z, ")"] }, D); })] })] }), t.jsxs("div", { className: "dashboard-grid", children: [t.jsxs("div", { className: "completed-tasks-widget", children: [t.jsxs("div", { className: "widget-header", children: [t.jsxs("div", { className: "widget-header-left", children: [t.jsx("div", { className: "widget-icon success", children: t.jsx(Y1, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "widget-title", children: "Tareas Completadas" }), t.jsx("div", { className: "widget-subtitle", children: "Feed global en tiempo real" })] })] }), t.jsxs("button", { onClick: () => l("/tasks/archived"), className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-muted hover:bg-accent rounded-lg transition-colors", children: [t.jsx(bs, { className: "h-3.5 w-3.5" }), "Ver todas"] })] }), t.jsx("div", { className: "completed-tasks-feed", children: f ? t.jsx(Gd, {}) : k.length > 0 ? k.map(D => t.jsx(U2, { task: D, onClick: () => D.projectId && O(D.projectId) }, D.id)) : t.jsx(Qd, { icon: Le, message: "No hay tareas completadas todavia" }) })] }), t.jsxs("div", { className: "completed-tasks-widget", children: [t.jsx("div", { className: "widget-header", children: t.jsxs("div", { className: "widget-header-left", children: [t.jsx("div", { className: "widget-icon info", children: t.jsx(Gs, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "widget-title", children: "Proyectos Recientes" }), t.jsx("div", { className: "widget-subtitle", children: "Actividad de proyectos" })] })] }) }), t.jsx("div", { className: "completed-tasks-feed", children: u ? t.jsx(Gd, {}) : c && c.length > 0 ? c.slice(0, 5).map(D => t.jsx(H2, { project: D, onClick: () => O(D.id) }, D.id)) : t.jsx(Qd, { icon: Gs, message: "No hay proyectos" }) })] }), t.jsxs("div", { className: "completed-tasks-widget", children: [t.jsxs("div", { className: "widget-header", children: [t.jsxs("div", { className: "widget-header-left", children: [t.jsx("div", { className: "widget-icon warning", children: t.jsx(Eg, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "widget-title", children: "Nuevas Tareas por Proyecto" }), t.jsx("div", { className: "widget-subtitle", children: "Ultimos 7 dias" })] })] }), t.jsx("div", { className: "widget-badge", children: p.length })] }), t.jsx("div", { className: "completed-tasks-feed", children: f ? t.jsx(Gd, {}) : p.length > 0 ? p.map(D => t.jsx(V2, { task: D, onClick: () => D.projectId && O(D.projectId) }, D.id)) : t.jsx(Qd, { icon: ht, message: "No hay tareas nuevas esta semana" }) })] })] })] }); }
const er = { planning: { label: "Planificacion", color: "#7c3aed" }, active: { label: "Desarrollo", color: "#0891b2" }, paused: { label: "Pausado", color: "#f59e0b" }, completed: { label: "Produccion", color: "#16a34a" }, cancelled: { label: "Cancelado", color: "#ef4444" } };
function Q2({ board: l }) { const i = (c, u) => { const m = Math.min(c, 8); return Array.from({ length: 8 }, (f, x) => t.jsx("div", { className: Q("trello-slot", x < m && `filled ${u}`) }, x)); }; return t.jsxs("div", { className: "mini-trello", children: [t.jsxs("div", { className: "trello-column backlog", children: [t.jsxs("div", { className: "trello-column-header", children: ["BL (", l.backlog, ")"] }), t.jsx("div", { className: "trello-slots", children: i(l.backlog, "backlog") })] }), t.jsxs("div", { className: "trello-column todo", children: [t.jsxs("div", { className: "trello-column-header", children: ["TODO (", l.todo, ")"] }), t.jsx("div", { className: "trello-slots", children: i(l.todo, "todo") })] }), t.jsxs("div", { className: "trello-column doing", children: [t.jsxs("div", { className: "trello-column-header", children: ["DOING (", l.doing, ")"] }), t.jsx("div", { className: "trello-slots", children: i(l.doing, "doing") })] }), t.jsxs("div", { className: "trello-column done", children: [t.jsxs("div", { className: "trello-column-header", children: ["DONE (", l.done, ")"] }), t.jsx("div", { className: "trello-slots", children: i(l.done, "done") })] })] }); }
function K2({ status: l }) { const n = ["planning", "active", "paused", "completed"], i = l === "completed" ? 3 : l === "paused" ? 2 : l === "active" ? 1 : 0; return t.jsx("div", { className: "progress-segments", children: n.map((c, u) => t.jsx("div", { className: Q("progress-segment", u <= i ? c : "inactive") }, c)) }); }
function Y2({ project: l, board: n, onClick: i }) { const c = er[l.status] || er.planning, u = l.tasksTotal || 0, m = l.tasksCompleted || 0, f = u - m, x = l.budgetAllocated ? l.budgetAllocated >= 1e3 ? `$${(l.budgetAllocated / 1e3).toFixed(0)}K` : `$${l.budgetAllocated}` : "-"; return t.jsxs("div", { className: "project-card", onClick: i, children: [t.jsxs("div", { className: "project-header", children: [t.jsx("div", { className: "project-icon-wrapper", children: t.jsx(Gs, { className: "project-icon" }) }), t.jsxs("div", { className: "project-title-group", children: [t.jsx("h3", { className: "project-name", children: l.name }), t.jsx("span", { className: "project-code", children: l.code })] }), t.jsx("button", { className: "project-edit-btn", onClick: b => { b.stopPropagation(); }, title: "Editar proyecto", children: t.jsx(xt, { className: "h-4 w-4" }) })] }), t.jsxs("div", { className: "project-tags", children: [t.jsx("span", { className: "project-tag", style: { backgroundColor: `${c.color}20`, color: c.color }, children: c.label }), l.priority && t.jsx("span", { className: Q("project-tag", l.priority === "critical" && "red", l.priority === "high" && "orange", l.priority === "medium" && "yellow", l.priority === "low" && "green"), children: l.priority })] }), t.jsx(Q2, { board: n }), t.jsx(K2, { status: l.status }), t.jsxs("div", { className: "project-stats", children: [t.jsxs("div", { className: "stat-item", children: [t.jsx("div", { className: "stat-icon blue", children: t.jsx(Le, { className: "h-3 w-3" }) }), t.jsx("div", { className: "stat-value", children: u }), t.jsx("div", { className: "stat-label", children: "Tareas" })] }), t.jsxs("div", { className: "stat-item", children: [t.jsx("div", { className: "stat-icon yellow", children: t.jsx(De, { className: "h-3 w-3" }) }), t.jsx("div", { className: "stat-value", children: f }), t.jsx("div", { className: "stat-label", children: "Pend." })] }), t.jsxs("div", { className: "stat-item", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx(Le, { className: "h-3 w-3" }) }), t.jsx("div", { className: "stat-value", children: m }), t.jsx("div", { className: "stat-label", children: "Compl." })] }), t.jsxs("div", { className: "stat-item", children: [t.jsx("div", { className: "stat-icon orange", children: t.jsx(Gi, { className: "h-3 w-3" }) }), t.jsx("div", { className: "stat-value", children: x }), t.jsx("div", { className: "stat-label", children: "Budget" })] }), t.jsxs("div", { className: "stat-item", children: [t.jsx("div", { className: "stat-icon purple", children: t.jsx(Eu, { className: "h-3 w-3" }) }), t.jsx("div", { className: "stat-value", children: l.activeAgents || 0 }), t.jsx("div", { className: "stat-label", children: "Agentes" })] }), t.jsxs("div", { className: "stat-item", children: [t.jsx("div", { className: "stat-icon indigo", children: t.jsx(gt, { className: "h-3 w-3" }) }), t.jsx("div", { className: "stat-value", children: l.endDate ? ts(l.endDate) : "-" }), t.jsx("div", { className: "stat-label", children: "Entrega" })] })] })] }); }
function X2({ project: l, onClick: n }) { const i = er[l.status] || er.planning, c = l.tasksTotal || 0, u = l.tasksCompleted || 0, m = c - u, f = l.progress || 0, x = l.budgetAllocated ? l.budgetAllocated >= 1e3 ? `$${(l.budgetAllocated / 1e3).toFixed(0)}K` : `$${l.budgetAllocated}` : "-"; return t.jsxs("tr", { onClick: n, className: "project-row", children: [t.jsx("td", { children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "project-icon-sm", children: t.jsx(Gs, { className: "h-4 w-4" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "project-name-sm", children: l.name }), t.jsx("div", { className: "project-code-sm", children: l.code })] })] }) }), t.jsx("td", { children: t.jsx("span", { className: "phase-badge", style: { backgroundColor: `${i.color}20`, color: i.color }, children: i.label }) }), t.jsx("td", { className: "text-center hide-sm", children: t.jsx("span", { className: "stat-blue", children: c }) }), t.jsx("td", { className: "text-center hide-md", children: t.jsx("span", { className: "stat-yellow", children: m }) }), t.jsx("td", { className: "text-center hide-md", children: t.jsx("span", { className: "stat-green", children: u }) }), t.jsx("td", { className: "text-center hide-lg", children: t.jsx("span", { className: "stat-orange", children: x }) }), t.jsx("td", { className: "text-center hide-lg", children: t.jsx("span", { className: "stat-purple", children: l.activeAgents || 0 }) }), t.jsx("td", { className: "text-center hide-sm", children: t.jsx("span", { className: "stat-indigo", children: l.endDate ? ts(l.endDate) : "-" }) }), t.jsxs("td", { className: "text-center", children: [t.jsx("div", { className: "progress-bar-sm", children: t.jsx("div", { className: "progress-fill", style: { width: `${f}%` } }) }), t.jsxs("span", { className: "progress-text", children: [f, "%"] })] })] }); }
function Z2() { const { projectId: l } = Fa(), n = yt(), { data: i, isLoading: c } = rr(), [u, m] = z.useState("grid"), [f, x] = z.useState("name"), [b, N] = z.useState(""), [v, p] = z.useState([]), j = (i == null ? void 0 : i.length) || 0, k = (i == null ? void 0 : i.filter(A => ["planning", "development", "testing", "deployment"].includes(A.status)).length) || 0, w = (i == null ? void 0 : i.filter(A => A.status === "completed").length) || 0, S = (i == null ? void 0 : i.filter(A => ["on_hold", "cancelled"].includes(A.status)).length) || 0, E = (i || []).reduce((A, L) => (A[L.id] = { backlog: 0, todo: L.tasksPending || 0, doing: L.tasksInProgress || 0, done: L.tasksCompleted || 0, blocked: L.tasksBlocked || 0 }, A), {}), D = [...(i || []).filter(A => { var L; if (b && b.length >= 3) {
        const y = b.toLowerCase();
        if (!(A.name.toLowerCase().includes(y) || A.code.toLowerCase().includes(y) || ((L = A.description) == null ? void 0 : L.toLowerCase().includes(y)) || !1))
            return !1;
    } return !(v.length > 0 && !v.includes(A.status)); })].sort((A, L) => { switch (f) {
    case "name": return A.name.localeCompare(L.name);
    case "deadline": return new Date(A.endDate || 0).getTime() - new Date(L.endDate || 0).getTime();
    case "budget": return (L.budgetAllocated || 0) - (A.budgetAllocated || 0);
    case "completion": return (L.progress || 0) - (A.progress || 0);
    case "status": return A.status.localeCompare(L.status);
    default: return 0;
} }), q = A => { n(`/projects/${A}`); }, Z = A => { p(L => L.includes(A) ? L.filter(y => y !== A) : [...L, A]); }; if (c)
    return t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }); if (l) {
    const A = i == null ? void 0 : i.find(L => L.id === parseInt(l));
    if (A)
        return t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { className: "section-header", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: A.name }), t.jsxs("p", { className: "section-subtitle", children: [A.code, " - ", A.description] })] }), t.jsx("button", { onClick: () => n("/projects"), className: "btn-secondary", children: "Volver" })] }), t.jsx("div", { className: "bg-card border border-border rounded-xl p-6", children: t.jsx("p", { className: "text-muted-foreground", children: "Vista detallada del proyecto (en desarrollo)" }) })] });
} return t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { className: "dashboard-stats-row", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon projects", children: t.jsx(Gs, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Total Proyectos" }), t.jsx("div", { className: "stat-value", children: j })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon active", children: t.jsx(cs, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Activos" }), t.jsx("div", { className: "stat-value", children: k })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx(Le, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Completados" }), t.jsx("div", { className: "stat-value", children: w })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon yellow", children: t.jsx(nN, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "En Pausa" }), t.jsx("div", { className: "stat-value", children: S })] })] })] }), t.jsxs("div", { className: "section-header", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Proyectos" }), t.jsxs("p", { className: "section-subtitle", children: [j, " proyectos en el pipeline"] })] }), t.jsxs("div", { className: "section-actions", children: [t.jsxs("div", { className: "sort-buttons", children: [t.jsx("button", { className: Q("sort-btn", f === "name" && "active"), onClick: () => x("name"), children: "NOMBRE" }), t.jsx("button", { className: Q("sort-btn", f === "deadline" && "active"), onClick: () => x("deadline"), children: "FECHA" }), t.jsx("button", { className: Q("sort-btn", f === "budget" && "active"), onClick: () => x("budget"), children: "$$$" }), t.jsx("button", { className: Q("sort-btn", f === "completion" && "active"), onClick: () => x("completion"), children: "%" }), t.jsx("button", { className: Q("sort-btn", f === "status" && "active"), onClick: () => x("status"), children: "FASE" })] }), t.jsxs("div", { className: "view-toggle", children: [t.jsx("button", { className: Q("view-toggle-btn", u === "grid" && "active"), onClick: () => m("grid"), title: "Vista Grid", children: t.jsx(Yl, { className: "h-4 w-4" }) }), t.jsx("button", { className: Q("view-toggle-btn", u === "list" && "active"), onClick: () => m("list"), title: "Vista Lista", children: t.jsx(Xl, { className: "h-4 w-4" }) })] })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [t.jsxs("div", { className: "relative flex-1", children: [t.jsx(ms, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), t.jsx("input", { type: "text", placeholder: "Buscar proyectos (mínimo 3 caracteres)...", value: b, onChange: A => N(A.target.value), className: "w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" })] }), t.jsxs("span", { className: "text-sm text-muted-foreground", children: [D.length, " ", D.length === 1 ? "proyecto" : "proyectos"] })] }), t.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [t.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Fase:" }), Object.entries(er).map(([A, L]) => { const y = v.includes(A), M = (i == null ? void 0 : i.filter(J => J.status === A).length) || 0; return M === 0 ? null : t.jsxs("button", { onClick: () => Z(A), className: Q("memory-tag-filter", y && "selected"), style: y ? { backgroundColor: L.color, color: "#fff" } : { backgroundColor: `${L.color}20`, color: L.color }, children: [L.label, " (", M, ")"] }, A); })] })] }), u === "grid" ? t.jsxs("div", { className: "projects-grid", children: [D.map(A => t.jsx(Y2, { project: A, board: E[A.id] || { backlog: 0, todo: 0, doing: 0, done: 0, blocked: 0 }, onClick: () => q(A.id) }, A.id)), D.length === 0 && t.jsxs("div", { className: "col-span-full py-12 text-center text-muted-foreground", children: [t.jsx(ht, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), t.jsx("p", { children: "No hay proyectos todavia" })] })] }) : t.jsxs("div", { className: "project-card", style: { padding: 0 }, children: [t.jsxs("table", { className: "list-table", style: { width: "100%", tableLayout: "fixed" }, children: [t.jsx("thead", { children: t.jsxs("tr", { children: [t.jsx("th", { style: { width: "25%" }, children: "Proyecto" }), t.jsx("th", { style: { width: "12%" }, children: "Fase" }), t.jsx("th", { className: "hide-sm", style: { width: "9%", textAlign: "center" }, children: "Tareas" }), t.jsx("th", { className: "hide-md", style: { width: "8%", textAlign: "center" }, children: "Pend." }), t.jsx("th", { className: "hide-md", style: { width: "8%", textAlign: "center" }, children: "Compl." }), t.jsx("th", { className: "hide-lg", style: { width: "10%", textAlign: "center" }, children: "Budget" }), t.jsx("th", { className: "hide-lg", style: { width: "9%", textAlign: "center" }, children: "Agentes" }), t.jsx("th", { className: "hide-sm", style: { width: "11%", textAlign: "center" }, children: "Entrega" }), t.jsx("th", { style: { width: "8%", textAlign: "center" }, children: "Progreso" })] }) }), t.jsx("tbody", { children: D.map(A => t.jsx(X2, { project: A, onClick: () => q(A.id) }, A.id)) })] }), D.length === 0 && t.jsxs("div", { className: "py-12 text-center text-muted-foreground", children: [t.jsx(ht, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), t.jsx("p", { children: "No hay proyectos todavia" })] })] })] }); }
function cr({ isOpen: l, onClose: n, title: i, children: c, maxWidth: u = "max-w-xl", className: m }) { const f = z.useCallback(x => { x.key === "Escape" && n(); }, [n]); return z.useEffect(() => (l && (document.addEventListener("keydown", f), document.body.style.overflow = "hidden"), () => { document.removeEventListener("keydown", f), document.body.style.overflow = "unset"; }), [l, f]), l ? t.jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4", onClick: x => { x.target === x.currentTarget && n(); }, children: t.jsxs("div", { className: Q("bg-card rounded-2xl border border-border w-full max-h-[90vh] overflow-y-auto", u, m), children: [i && t.jsxs("div", { className: "p-6 border-b border-border flex items-center justify-between sticky top-0 bg-card z-10", children: [t.jsx("h2", { className: "text-xl font-bold text-foreground", children: i }), t.jsx("button", { onClick: n, className: "p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors", children: t.jsx(os, { className: "h-5 w-5" }) })] }), !i && t.jsx("button", { onClick: n, className: "absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors z-10", children: t.jsx(os, { className: "h-5 w-5" }) }), c] }) }) : null; }
const F2 = [{ key: "backlog", alt: "pending", label: "BL", fullLabel: "BACKLOG", color: "#6b7280" }, { key: "todo", alt: "pending", label: "TD", fullLabel: "TODO", color: "#f59e0b" }, { key: "doing", alt: "in_progress", label: "DO", fullLabel: "DOING", color: "#3b82f6" }, { key: "done", alt: "completed", label: "DN", fullLabel: "DONE", color: "#22c55e" }], kp = 8;
function J2({ label: l, fullLabel: n, count: i, color: c, showLabel: u = !0, showCount: m = !0, compact: f = !1 }) { const x = Math.min(i, kp), b = []; for (let N = 0; N < kp; N++) {
    const v = N < x;
    b.push(t.jsx("div", { className: Q("trello-slot", v && "filled"), style: v ? { background: c, borderColor: "transparent" } : void 0 }, N));
} return t.jsxs("div", { className: "trello-column", children: [u && t.jsx("span", { className: "trello-label", children: f ? l : n }), t.jsx("div", { className: "trello-slots", children: b }), m && t.jsx("span", { className: "trello-count", children: i })] }); }
function $2({ board: l, showLabels: n = !0, showCounts: i = !0, compact: c = !1, className: u }) { const m = f => { const x = l[f.key] ?? 0, b = l[f.alt] ?? 0; return x || b; }; return t.jsx("div", { className: Q("mini-trello", c && "compact", u), children: F2.map(f => t.jsx(J2, { label: f.label, fullLabel: f.fullLabel, count: m(f), color: f.color, showLabel: n, showCount: i, compact: c }, f.key)) }); }
const nb = z.createContext(null);
function P2() { return z.useContext(nb); }
function Ou({ open: l, onOpenChange: n, children: i }) { const c = z.useRef(null), u = z.useId(); z.useEffect(() => { const x = c.current; if (x)
    return l ? (x.showModal(), document.body.style.overflow = "hidden") : (x.close(), document.body.style.overflow = ""), () => { document.body.style.overflow = ""; }; }, [l]); const m = x => { x.target === c.current && n(!1); }, f = x => { x.key === "Escape" && n(!1); }; return l ? t.jsx(nb.Provider, { value: { dialogId: u }, children: t.jsx("dialog", { ref: c, onClick: m, onKeyDown: f, "aria-labelledby": `${u}-title`, "aria-describedby": `${u}-description`, className: Q("fixed inset-0 z-50 m-0 h-full w-full max-h-full max-w-full", "bg-black/80 backdrop:bg-transparent", "p-4 md:p-6 lg:p-8", "flex items-center justify-center", "open:animate-in open:fade-in-0", "overflow-y-auto"), children: i }) }) : null; }
function _u({ children: l, className: n }) { return t.jsx("div", { role: "document", className: Q("relative w-full max-w-lg max-h-[90vh]", "bg-background border border-border rounded-lg shadow-lg", "overflow-hidden", "animate-in fade-in-0 zoom-in-95", n), onClick: i => i.stopPropagation(), children: l }); }
function zu({ children: l, className: n }) { return t.jsx("div", { className: Q("flex flex-col space-y-1.5 p-6 pb-4", n), children: l }); }
function Ru({ children: l, className: n }) { const i = P2(); return t.jsx("h2", { id: i ? `${i.dialogId}-title` : void 0, className: Q("text-lg font-semibold leading-none tracking-tight", n), children: l }); }
function Bu({ onClose: l, label: n = "Cerrar" }) { return t.jsxs("button", { onClick: l, "aria-label": n, className: Q("absolute right-4 top-4 rounded-sm opacity-70", "ring-offset-background transition-opacity", "hover:opacity-100", "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", "disabled:pointer-events-none"), children: [t.jsx(os, { className: "h-4 w-4", "aria-hidden": "true" }), t.jsx("span", { className: "sr-only", children: n })] }); }
function qu({ children: l, className: n }) { return t.jsx("div", { className: Q("px-6 pb-6 overflow-y-auto", n), children: l }); }
function Lu({ children: l, className: n }) { return t.jsx("div", { className: Q("flex justify-end gap-2 p-6 pt-4 border-t border-border", n), children: l }); }
const I2 = { open: { label: "Abierto", bg: "bg-blue-500/10", color: "text-blue-600", icon: Ll }, in_progress: { label: "En Progreso", bg: "bg-purple-500/10", color: "text-purple-600", icon: vu }, completed: { label: "Completado", bg: "bg-green-500/10", color: "text-green-600", icon: Le }, cancelled: { label: "Cancelado", bg: "bg-red-500/10", color: "text-red-600", icon: Ll } }, W2 = { critical: { label: "Crítico", color: "text-red-500" }, high: { label: "Alto", color: "text-orange-500" }, medium: { label: "Medio", color: "text-yellow-500" }, low: { label: "Bajo", color: "text-blue-500" } };
function rb({ epicId: l, isOpen: n, onClose: i, onTaskClick: c }) { const u = n && l !== null && l > 0, { data: m, isLoading: f } = D2(u ? l : null), x = m == null ? void 0 : m.epic, b = (m == null ? void 0 : m.tasks) || [], N = x ? I2[x.status] : null, v = (x == null ? void 0 : x.tasksCount) || (x == null ? void 0 : x.tasks_count) || 0, p = (x == null ? void 0 : x.tasksCompleted) || (x == null ? void 0 : x.tasks_completed) || 0, j = v > 0 ? Math.round(p / v * 100) : 0, w = (() => { if (!(x != null && x.startDate) || !(x != null && x.targetDate))
    return null; const S = new Date(x.startDate).getTime(), E = new Date(x.targetDate).getTime(), O = Date.now(); return O < S ? 0 : O > E ? 100 : Math.round((O - S) / (E - S) * 100); })(); return t.jsx(Ou, { open: n, onOpenChange: i, children: t.jsxs(_u, { className: "max-w-2xl max-h-[85vh] flex flex-col", children: [t.jsx(Bu, { onClose: i }), u ? f ? t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : x ? t.jsxs(t.Fragment, { children: [t.jsx(zu, { children: t.jsxs("div", { className: "flex items-start gap-3 pr-8", children: [t.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg", style: { backgroundColor: x.color ? `${x.color}20` : "hsl(var(--muted))" }, children: t.jsx(cs, { className: "h-5 w-5", style: { color: x.color || "hsl(var(--muted-foreground))" } }) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx(Ru, { className: "text-base", children: x.name }), t.jsxs("div", { className: "flex items-center gap-2 mt-1 text-xs text-muted-foreground", children: [t.jsx(Su, { className: "h-3 w-3" }), t.jsxs("span", { className: "font-mono", children: ["EPIC-", String(x.id).padStart(3, "0")] }), t.jsx("span", { className: "text-border", children: "|" }), t.jsx("span", { children: x.projectName || x.project_name || x.projectCode || x.project_code })] })] })] }) }), t.jsxs(qu, { className: "flex-1 overflow-y-auto space-y-4", children: [t.jsxs("div", { className: "flex items-center gap-4 text-sm flex-wrap", children: [N && t.jsxs("div", { className: Q("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium", N.bg, N.color), children: [t.jsx(N.icon, { className: "h-3 w-3" }), t.jsx("span", { children: N.label })] }), x.status === "in_progress" && t.jsx("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500 text-white animate-pulse", children: "ACTIVO" }), t.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [t.jsx(Wn, { className: "h-3 w-3" }), t.jsxs("span", { children: [p, "/", v, " tareas"] })] })] }), (x.startDate || x.targetDate) && t.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-4 space-y-3", children: [t.jsxs("div", { className: "flex items-center justify-between text-sm", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx(gt, { className: "h-4 w-4 text-muted-foreground" }), t.jsx("span", { className: "font-medium", children: "Timeline" })] }), w !== null && t.jsxs("span", { className: "text-xs text-muted-foreground", children: [w, "% del tiempo transcurrido"] })] }), t.jsxs("div", { className: "flex items-center gap-3 text-xs", children: [t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx(De, { className: "h-3 w-3 text-muted-foreground" }), t.jsxs("span", { children: ["Inicio: ", x.startDate ? ts(x.startDate) : "-"] })] }), t.jsx("span", { className: "text-muted-foreground", children: "→" }), t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx(cs, { className: "h-3 w-3 text-muted-foreground" }), t.jsxs("span", { children: ["Meta: ", x.targetDate ? ts(x.targetDate) : "-"] })] })] }), t.jsxs("div", { className: "space-y-1", children: [t.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: t.jsx("div", { className: "h-full rounded-full transition-all", style: { width: `${j}%`, backgroundColor: x.color || "hsl(var(--primary))" } }) }), t.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [t.jsxs("span", { children: ["Progreso: ", j, "%"] }), t.jsxs("span", { children: [p, " completadas"] })] })] })] }), x.description && t.jsxs("div", { className: "space-y-2", children: [t.jsx("h4", { className: "text-sm font-medium", children: "Descripción" }), t.jsx("div", { className: "rounded-lg border border-border bg-muted/30 p-4", children: t.jsx("pre", { className: "whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed", children: x.description }) })] }), b.length > 0 && t.jsxs("div", { className: "space-y-2", children: [t.jsxs("h4", { className: "text-sm font-medium flex items-center gap-2", children: [t.jsx(Wn, { className: "h-4 w-4" }), "Tareas del Epic (", b.length, ")"] }), t.jsx("div", { className: "space-y-2 max-h-60 overflow-y-auto", children: b.map(S => { const E = W2[S.priority], O = S.status === "completed"; return t.jsxs("div", { onClick: () => c == null ? void 0 : c(S.id), className: Q("flex items-center justify-between p-3 rounded-lg border border-border bg-card transition-colors", c && "cursor-pointer hover:bg-muted/50", O && "opacity-60"), children: [t.jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [O ? t.jsx(Le, { className: "h-4 w-4 text-green-500 flex-shrink-0" }) : t.jsx(Ll, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx("div", { className: Q("text-sm font-medium truncate", O && "line-through"), children: S.title }), t.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [E && t.jsx("span", { className: E.color, children: E.label }), S.estimatedHours && t.jsxs(t.Fragment, { children: [t.jsx("span", { children: "•" }), t.jsxs("span", { children: [S.estimatedHours, "h est."] })] })] })] })] }), t.jsxs("div", { className: "text-xs text-muted-foreground", children: [S.progress, "%"] })] }, S.id); }) })] })] }), t.jsx(Lu, { children: t.jsx("button", { onClick: i, className: Q("px-4 py-2 rounded-md text-sm font-medium", "border border-border bg-background", "hover:bg-muted transition-colors"), children: "Cerrar" }) })] }) : t.jsx("div", { className: "py-12 text-center text-muted-foreground", children: "Epic no encontrado" }) : t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) })] }) }); }
const e4 = { planned: { label: "Planificado", bg: "bg-blue-500/10", color: "text-blue-600", icon: Ll }, active: { label: "Activo", bg: "bg-green-500/10", color: "text-green-600", icon: vu }, completed: { label: "Completado", bg: "bg-gray-500/10", color: "text-gray-600", icon: Le }, cancelled: { label: "Cancelado", bg: "bg-red-500/10", color: "text-red-600", icon: Ll } }, t4 = { critical: { label: "Crítico", color: "text-red-500" }, high: { label: "Alto", color: "text-orange-500" }, medium: { label: "Medio", color: "text-yellow-500" }, low: { label: "Bajo", color: "text-blue-500" } };
function ib({ sprintId: l, isOpen: n, onClose: i, onTaskClick: c }) { const u = n && l !== null && l > 0, { data: m, isLoading: f } = _2(u ? l : null), x = m == null ? void 0 : m.sprint, b = (m == null ? void 0 : m.tasks) || [], N = x ? e4[x.status] : null, v = (x == null ? void 0 : x.tasksCount) || (x == null ? void 0 : x.tasks_count) || 0, p = (x == null ? void 0 : x.tasksCompleted) || (x == null ? void 0 : x.tasks_completed) || 0, j = v > 0 ? Math.round(p / v * 100) : 0, w = (() => { if (!(x != null && x.endDate))
    return null; const O = new Date(x.endDate).getTime(), D = Date.now(); return Math.ceil((O - D) / (1e3 * 60 * 60 * 24)); })(), E = (() => { if (!(x != null && x.startDate) || !(x != null && x.endDate))
    return null; const O = new Date(x.startDate).getTime(), D = new Date(x.endDate).getTime(), q = Date.now(); return q < O ? 0 : q > D ? 100 : Math.round((q - O) / (D - O) * 100); })(); return t.jsx(Ou, { open: n, onOpenChange: i, children: t.jsxs(_u, { className: "max-w-2xl max-h-[85vh] flex flex-col", children: [t.jsx(Bu, { onClose: i }), u ? f ? t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : x ? t.jsxs(t.Fragment, { children: [t.jsx(zu, { children: t.jsxs("div", { className: "flex items-start gap-3 pr-8", children: [t.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10", children: t.jsx(st, { className: "h-5 w-5 text-green-600" }) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx(Ru, { className: "text-base", children: x.name }), t.jsxs("div", { className: "flex items-center gap-2 mt-1 text-xs text-muted-foreground", children: [t.jsx(Su, { className: "h-3 w-3" }), t.jsxs("span", { className: "font-mono", children: ["SPRINT-", String(x.id).padStart(3, "0")] }), t.jsx("span", { className: "text-border", children: "|" }), t.jsx("span", { children: x.projectName || x.project_name || x.projectCode || x.project_code })] })] })] }) }), t.jsxs(qu, { className: "flex-1 overflow-y-auto space-y-4", children: [t.jsxs("div", { className: "flex items-center gap-4 text-sm flex-wrap", children: [N && t.jsxs("div", { className: Q("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium", N.bg, N.color), children: [t.jsx(N.icon, { className: "h-3 w-3" }), t.jsx("span", { children: N.label })] }), x.status === "active" && t.jsx("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500 text-white animate-pulse", children: "ACTIVO" }), t.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [t.jsx(Wn, { className: "h-3 w-3" }), t.jsxs("span", { children: [p, "/", v, " tareas"] })] }), w !== null && x.status === "active" && t.jsxs("div", { className: Q("flex items-center gap-1.5", w < 0 ? "text-red-500" : w <= 3 ? "text-orange-500" : "text-muted-foreground"), children: [t.jsx(fN, { className: "h-3 w-3" }), t.jsx("span", { children: w < 0 ? `${Math.abs(w)}d vencido` : `${w}d restantes` })] })] }), t.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [x.velocity !== null && x.velocity !== void 0 && t.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-3 text-center", children: [t.jsxs("div", { className: "flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1", children: [t.jsx(Ys, { className: "h-3 w-3" }), "Velocidad"] }), t.jsx("div", { className: "text-lg font-semibold", children: x.velocity }), t.jsx("div", { className: "text-xs text-muted-foreground", children: "puntos" })] }), x.capacity !== null && x.capacity !== void 0 && t.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-3 text-center", children: [t.jsxs("div", { className: "flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1", children: [t.jsx(De, { className: "h-3 w-3" }), "Capacidad"] }), t.jsx("div", { className: "text-lg font-semibold", children: x.capacity }), t.jsx("div", { className: "text-xs text-muted-foreground", children: "horas" })] }), (x.totalEstimatedHours ?? x.total_estimated_hours) !== null && t.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-3 text-center", children: [t.jsxs("div", { className: "flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1", children: [t.jsx(cs, { className: "h-3 w-3" }), "Estimado"] }), t.jsx("div", { className: "text-lg font-semibold", children: x.totalEstimatedHours || x.total_estimated_hours }), t.jsx("div", { className: "text-xs text-muted-foreground", children: "horas" })] })] }), (x.startDate || x.endDate) && t.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-4 space-y-3", children: [t.jsxs("div", { className: "flex items-center justify-between text-sm", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx(gt, { className: "h-4 w-4 text-muted-foreground" }), t.jsx("span", { className: "font-medium", children: "Timeline" })] }), E !== null && t.jsxs("span", { className: "text-xs text-muted-foreground", children: [E, "% del tiempo transcurrido"] })] }), t.jsxs("div", { className: "flex items-center gap-3 text-xs", children: [t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx(De, { className: "h-3 w-3 text-muted-foreground" }), t.jsxs("span", { children: ["Inicio: ", x.startDate ? ts(x.startDate) : "-"] })] }), t.jsx("span", { className: "text-muted-foreground", children: "→" }), t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx(cs, { className: "h-3 w-3 text-muted-foreground" }), t.jsxs("span", { children: ["Fin: ", x.endDate ? ts(x.endDate) : "-"] })] })] }), t.jsxs("div", { className: "space-y-1", children: [t.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: t.jsx("div", { className: "h-full rounded-full bg-green-500 transition-all", style: { width: `${j}%` } }) }), t.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [t.jsxs("span", { children: ["Progreso: ", j, "%"] }), t.jsxs("span", { children: [p, " completadas"] })] })] })] }), x.goal && t.jsxs("div", { className: "space-y-2", children: [t.jsxs("h4", { className: "text-sm font-medium flex items-center gap-2", children: [t.jsx(cs, { className: "h-4 w-4" }), "Meta del Sprint"] }), t.jsx("div", { className: "rounded-lg border border-border bg-muted/30 p-4", children: t.jsx("pre", { className: "whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed", children: x.goal }) })] }), b.length > 0 && t.jsxs("div", { className: "space-y-2", children: [t.jsxs("h4", { className: "text-sm font-medium flex items-center gap-2", children: [t.jsx(Wn, { className: "h-4 w-4" }), "Backlog del Sprint (", b.length, ")"] }), t.jsx("div", { className: "space-y-2 max-h-60 overflow-y-auto", children: b.map(O => { const D = t4[O.priority], q = O.status === "completed"; return t.jsxs("div", { onClick: () => c == null ? void 0 : c(O.id), className: Q("flex items-center justify-between p-3 rounded-lg border border-border bg-card transition-colors", c && "cursor-pointer hover:bg-muted/50", q && "opacity-60"), children: [t.jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [q ? t.jsx(Le, { className: "h-4 w-4 text-green-500 flex-shrink-0" }) : t.jsx(Ll, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx("div", { className: Q("text-sm font-medium truncate", q && "line-through"), children: O.title }), t.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [D && t.jsx("span", { className: D.color, children: D.label }), O.estimatedHours && t.jsxs(t.Fragment, { children: [t.jsx("span", { children: "•" }), t.jsxs("span", { children: [O.estimatedHours, "h est."] })] })] })] })] }), t.jsxs("div", { className: "text-xs text-muted-foreground", children: [O.progress, "%"] })] }, O.id); }) })] })] }), t.jsx(Lu, { children: t.jsx("button", { onClick: i, className: Q("px-4 py-2 rounded-md text-sm font-medium", "border border-border bg-background", "hover:bg-muted transition-colors"), children: "Cerrar" }) })] }) : t.jsx("div", { className: "py-12 text-center text-muted-foreground", children: "Sprint no encontrado" }) : t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) })] }) }); }
function s4({ epics: l, sprints: n, projectId: i, onEpicClick: c, onSprintClick: u }) { const m = yt(), f = l.find(j => j.status === "in_progress"), x = n.find(j => j.status === "active"), b = l.filter(j => j.status === "open").sort((j, k) => !j.startDate && !k.startDate ? 0 : j.startDate ? k.startDate ? new Date(j.startDate).getTime() - new Date(k.startDate).getTime() : -1 : 1).slice(0, 2), N = n.filter(j => j.status === "planned").sort((j, k) => !j.startDate && !k.startDate ? 0 : j.startDate ? k.startDate ? new Date(j.startDate).getTime() - new Date(k.startDate).getTime() : -1 : 1).slice(0, 2), v = j => { if (!j)
    return null; const k = new Date(j).getTime(), w = Date.now(); return Math.ceil((k - w) / (1e3 * 60 * 60 * 24)); }, p = f || x || b.length > 0 || N.length > 0; return t.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [t.jsxs("div", { className: "flex items-center justify-between mb-3", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2", children: [t.jsx(Ys, { className: "h-4 w-4 text-solaria" }), "Roadmap"] }), t.jsxs("button", { onClick: () => m(`/projects/${i}/roadmap`), className: "text-xs text-muted-foreground hover:text-solaria transition-colors flex items-center gap-1", children: ["Ver timeline", t.jsx(Kl, { className: "h-3 w-3" })] })] }), p ? t.jsxs("div", { className: "space-y-3", children: [x && t.jsxs("div", { onClick: () => u == null ? void 0 : u(x.id), className: "p-2.5 rounded-lg bg-green-500/10 border border-green-500/30 cursor-pointer hover:bg-green-500/20 transition-colors", children: [t.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [t.jsx(st, { className: "h-3.5 w-3.5 text-green-400 animate-pulse" }), t.jsx("span", { className: "text-green-400 font-medium text-xs", children: "SPRINT ACTIVO" })] }), t.jsx("p", { className: "text-sm font-medium text-foreground mt-1 truncate", children: x.name }), x.endDate && t.jsxs("div", { className: "flex items-center gap-2 mt-1.5 text-xs text-muted-foreground", children: [t.jsx(De, { className: "h-3 w-3" }), (() => { const j = v(x.endDate); return j === null ? "Sin fecha fin" : j < 0 ? t.jsxs("span", { className: "text-red-400", children: [Math.abs(j), "d vencido"] }) : j <= 3 ? t.jsxs("span", { className: "text-orange-400", children: [j, "d restantes"] }) : `${j}d restantes`; })()] })] }), f && t.jsxs("div", { onClick: () => c == null ? void 0 : c(f.id), className: "p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 cursor-pointer hover:bg-purple-500/20 transition-colors", children: [t.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [t.jsx(cs, { className: "h-3.5 w-3.5 text-purple-400 animate-pulse" }), t.jsx("span", { className: "text-purple-400 font-medium text-xs", children: "EPIC ACTIVO" })] }), t.jsx("p", { className: "text-sm font-medium text-foreground mt-1 truncate", children: f.name }), f.targetDate && t.jsxs("div", { className: "flex items-center gap-2 mt-1.5 text-xs text-muted-foreground", children: [t.jsx(gt, { className: "h-3 w-3" }), "Meta: ", new Date(f.targetDate).toLocaleDateString("es-ES")] })] }), (N.length > 0 || b.length > 0) && t.jsxs("div", { className: "pt-2 border-t border-border", children: [t.jsx("p", { className: "text-[10px] font-semibold uppercase text-muted-foreground tracking-wider mb-2", children: "Próximos" }), t.jsxs("div", { className: "space-y-1.5", children: [N.map(j => t.jsxs("div", { onClick: () => u == null ? void 0 : u(j.id), className: "flex items-center gap-2 p-1.5 rounded bg-secondary/50 cursor-pointer hover:bg-secondary transition-colors", children: [t.jsx(st, { className: "h-3 w-3 text-muted-foreground" }), t.jsx("span", { className: "text-xs text-foreground truncate flex-1", children: j.name }), j.startDate && t.jsx("span", { className: "text-[10px] text-muted-foreground", children: new Date(j.startDate).toLocaleDateString("es-ES", { month: "short", day: "numeric" }) })] }, j.id)), b.map(j => t.jsxs("div", { onClick: () => c == null ? void 0 : c(j.id), className: "flex items-center gap-2 p-1.5 rounded bg-secondary/50 cursor-pointer hover:bg-secondary transition-colors", children: [t.jsx("div", { className: "w-2.5 h-2.5 rounded-full", style: { backgroundColor: j.color || "#6366f1" } }), t.jsx("span", { className: "text-xs text-foreground truncate flex-1", children: j.name }), j.startDate && t.jsx("span", { className: "text-[10px] text-muted-foreground", children: new Date(j.startDate).toLocaleDateString("es-ES", { month: "short", day: "numeric" }) })] }, j.id))] })] })] }) : t.jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "Sin epics o sprints activos" })] }); }
function a4({ project: l, metrics: n, onClick: i }) { var c; return t.jsxs("div", { onClick: i, className: "bg-card rounded-xl border border-border p-4 sm:p-6 cursor-pointer hover:bg-secondary/30 transition-colors", title: "Click para ver informacion completa del proyecto", children: [t.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 sm:gap-6", children: [t.jsx("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-solaria to-solaria-dark flex items-center justify-center shrink-0", children: t.jsx(wu, { className: "text-white h-8 w-8 sm:h-10 sm:w-10" }) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-2 flex-wrap", children: [t.jsx("span", { className: "px-2 py-0.5 rounded text-xs bg-blue-500/20 text-blue-400 uppercase", children: "SAAS" }), t.jsx("span", { className: "px-2 py-0.5 rounded text-xs bg-purple-500/20 text-purple-400 uppercase", children: "REACT" }), t.jsx("span", { className: "px-2 py-0.5 rounded text-xs bg-green-500/20 text-green-400 uppercase", children: "B2B" })] }), t.jsx("p", { className: "text-muted-foreground text-sm line-clamp-2", children: l.description || "Sin descripcion" }), t.jsxs("div", { className: "flex items-center gap-2 mt-2 text-sm text-muted-foreground", children: [t.jsx("span", { className: "text-solaria", children: "●" }), t.jsx("span", { children: ((c = l.client) == null ? void 0 : c.name) || "Sin cliente" })] })] }), t.jsx("div", { className: "hidden sm:flex items-start", children: t.jsx(At, { className: "h-5 w-5 text-muted-foreground" }) })] }), t.jsxs("div", { className: "mt-4 pt-4 border-t border-border", children: [t.jsxs("div", { className: "flex items-center justify-between mb-2", children: [t.jsx("span", { className: "text-sm text-muted-foreground", children: "Fase" }), t.jsx("span", { className: Q("px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide", l.status === "development" ? "bg-solaria/20 text-solaria border border-solaria/30" : l.status === "planning" ? "bg-violet-500/20 text-violet-400 border border-violet-500/30" : l.status === "completed" || l.status === "deployment" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : l.status === "on_hold" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : l.status === "testing" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "bg-gray-500/20 text-gray-400 border border-gray-500/30"), children: l.status === "development" ? "Desarrollo" : l.status === "planning" ? "Planificacion" : l.status === "completed" || l.status === "deployment" ? "Produccion" : l.status === "on_hold" ? "Pausado" : l.status === "testing" ? "Testing" : l.status })] }), t.jsxs("div", { className: "flex gap-1 mt-2", children: [t.jsx("div", { className: Q("flex-1 h-2 rounded-full transition-colors", l.status === "planning" ? "bg-violet-500" : "bg-solaria") }), t.jsx("div", { className: Q("flex-1 h-2 rounded-full transition-colors", ["active", "development", "testing", "deployment", "completed"].includes(l.status) ? "bg-solaria" : "bg-secondary") }), t.jsx("div", { className: Q("flex-1 h-2 rounded-full transition-colors", ["testing", "deployment", "completed"].includes(l.status) ? "bg-blue-500" : "bg-secondary") }), t.jsx("div", { className: Q("flex-1 h-2 rounded-full transition-colors", ["deployment", "completed"].includes(l.status) ? "bg-emerald-500" : "bg-secondary") })] }), t.jsxs("div", { className: "flex justify-between text-xs mt-1.5", children: [t.jsx("span", { className: Q("font-medium", l.status === "planning" ? "text-violet-400" : "text-muted-foreground"), children: "PLAN" }), t.jsx("span", { className: Q("font-medium", ["active", "development"].includes(l.status) ? "text-solaria" : "text-muted-foreground"), children: "DEV" }), t.jsx("span", { className: Q("font-medium", l.status === "testing" ? "text-blue-400" : "text-muted-foreground"), children: "TEST" }), t.jsx("span", { className: Q("font-medium", ["completed", "production"].includes(l.status) ? "text-emerald-400" : "text-muted-foreground"), children: "PROD" })] })] }), t.jsxs("div", { className: "grid grid-cols-4 gap-2 mt-4", children: [t.jsxs("div", { className: "text-center p-2 rounded-lg bg-secondary/50", children: [t.jsxs("p", { className: "text-lg font-bold text-foreground", children: ["$", Math.round((l.budgetAllocated || 0) / 1e3), "K"] }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Presupuesto" })] }), t.jsxs("div", { className: "text-center p-2 rounded-lg bg-secondary/50", children: [t.jsx("p", { className: "text-lg font-bold text-foreground", children: n.total }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Tareas" })] }), t.jsxs("div", { className: "text-center p-2 rounded-lg bg-secondary/50", children: [t.jsxs("p", { className: "text-lg font-bold text-green-400", children: [n.progress, "%"] }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Completado" })] }), t.jsxs("div", { className: "text-center p-2 rounded-lg bg-secondary/50", children: [t.jsxs("p", { className: Q("text-lg font-bold", n.daysRemaining < 0 ? "text-red-400" : "text-foreground"), children: [n.daysRemaining, "d"] }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Restantes" })] })] })] }); }
function l4({ metrics: l, tasksByStatus: n, onClick: i }) { return t.jsxs("div", { onClick: i, className: "bg-card rounded-xl border border-border p-4 cursor-pointer hover:bg-secondary/30 transition-colors", title: "Click para gestionar tareas", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [t.jsx(Le, { className: "h-4 w-4 text-solaria" }), "TAREAS", t.jsx(At, { className: "h-3 w-3 text-muted-foreground ml-auto" })] }), t.jsxs("div", { className: "grid grid-cols-4 gap-2 mb-4", children: [t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-xl font-bold text-foreground", children: l.total }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Total" })] }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-xl font-bold text-yellow-400", children: l.pending }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Pend" })] }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-xl font-bold text-blue-400", children: l.inProgress }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Doing" })] }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-xl font-bold text-green-400", children: l.completed }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Done" })] })] }), t.jsx($2, { board: n, showLabels: !0, showCounts: !0, compact: !1 })] }); }
function n4({ project: l, onClick: n }) { const i = [l.productionUrl && { label: "Produccion", url: l.productionUrl }, l.stagingUrl && { label: "Staging", url: l.stagingUrl }, l.localUrl && { label: "Local", url: l.localUrl }, l.repoUrl && { label: "Repo", url: l.repoUrl }].filter(Boolean); return t.jsxs("div", { onClick: n, className: "bg-card rounded-xl border border-border p-4 cursor-pointer hover:bg-secondary/30 transition-colors", title: "Click para gestionar URLs", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [t.jsx(Cu, { className: "h-4 w-4 text-solaria" }), "DIRECCIONES", t.jsx(At, { className: "h-3 w-3 text-muted-foreground ml-auto" })] }), i.length > 0 ? t.jsxs("div", { className: "space-y-2", children: [i.slice(0, 3).map((c, u) => t.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground truncate", children: [t.jsx(At, { className: "h-3 w-3 shrink-0" }), t.jsxs("span", { className: "text-xs text-solaria", children: [c.label, ":"] }), t.jsx("span", { className: "truncate", children: c.url })] }, u)), i.length > 3 && t.jsxs("p", { className: "text-xs text-solaria", children: ["+", i.length - 3, " mas..."] })] }) : t.jsx("p", { className: "text-sm text-muted-foreground", children: "No hay URLs configuradas" })] }); }
function r4({ activities: l }) { const n = l.slice(0, 5), i = c => c.includes("complete") || c.includes("done") ? t.jsx(Le, { className: "h-4 w-4 text-green-400" }) : c.includes("create") || c.includes("new") ? t.jsx(xt, { className: "h-4 w-4 text-blue-400" }) : c.includes("update") || c.includes("edit") ? t.jsx(Ki, { className: "h-4 w-4 text-yellow-400" }) : t.jsx(De, { className: "h-4 w-4 text-muted-foreground" }); return t.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [t.jsx(De, { className: "h-4 w-4 text-solaria" }), "Actividad"] }), n.length > 0 ? t.jsx("div", { className: "space-y-3", children: n.map(c => t.jsxs("div", { className: "flex items-start gap-3", children: [i(c.action), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx("p", { className: "text-sm text-foreground truncate", children: c.description || c.action }), t.jsx("p", { className: "text-xs text-muted-foreground", children: Qe(c.createdAt) })] })] }, c.id)) }) : t.jsx("p", { className: "text-sm text-muted-foreground", children: "Sin actividad reciente" })] }); }
function i4({ notes: l, onAddNote: n }) { const [i, c] = z.useState(""), u = m => { m.preventDefault(), i.trim() && (n(i.trim()), c("")); }; return t.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [t.jsx(Dg, { className: "h-4 w-4 text-solaria" }), "Notas", t.jsx("span", { className: "text-xs text-muted-foreground font-normal", children: "(Agentes leen)" })] }), t.jsxs("form", { onSubmit: u, className: "flex gap-2 mb-3", children: [t.jsx("input", { type: "text", value: i, onChange: m => c(m.target.value), placeholder: "Escribe una nota...", className: "flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-solaria" }), t.jsx("button", { type: "submit", disabled: !i.trim(), className: Q("p-2 rounded-lg transition-colors", i.trim() ? "bg-solaria text-white hover:bg-solaria-dark" : "bg-secondary text-muted-foreground cursor-not-allowed"), children: t.jsx(cN, { className: "h-4 w-4" }) })] }), l.length > 0 ? t.jsx("div", { className: "space-y-2 max-h-32 overflow-y-auto", children: l.map((m, f) => t.jsx("div", { className: "p-2 rounded bg-secondary/50 text-sm text-foreground", children: m }, f)) }) : t.jsx("p", { className: "text-sm text-muted-foreground", children: "Sin notas" })] }); }
function c4({ epics: l, onCreateEpic: n, onDeleteEpic: i, onEpicClick: c }) { const [u, m] = z.useState(!1), [f, x] = z.useState(""), b = z.useMemo(() => l.length === 0 ? 1 : Math.max(...l.map(k => k.epicNumber || 0)) + 1, [l]), N = `EPIC${String(b).padStart(3, "0")}`, v = () => { x(N), m(!0); }, p = () => { f.trim() && (n(f.trim()), x(""), m(!1)); }; return t.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [t.jsx(cs, { className: "h-4 w-4 text-purple-400" }), "Epics", t.jsxs("span", { className: "text-xs text-muted-foreground font-normal ml-auto", children: [l.length, " total"] })] }), t.jsxs("div", { className: "space-y-2 mb-3 max-h-40 overflow-y-auto", children: [l.map(j => { const k = j.status === "in_progress"; return t.jsxs("div", { onClick: () => c == null ? void 0 : c(j.id), className: Q("flex items-center gap-2 p-2 rounded-lg group transition-colors", k ? "bg-purple-500/10 border-l-3 border-purple-500 cursor-pointer hover:bg-purple-500/20" : "bg-secondary/50 cursor-pointer hover:bg-secondary/80"), children: [t.jsx("div", { className: "w-3 h-3 rounded-full shrink-0", style: { backgroundColor: j.color || "#6366f1" } }), t.jsxs("span", { className: "flex-1 text-sm text-foreground truncate", children: ["EPIC", String(j.epicNumber).padStart(2, "0"), ": ", j.name] }), k && t.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-purple-500 text-white font-medium animate-pulse", children: "ACTIVO" }), t.jsx("span", { className: Q("text-xs px-1.5 py-0.5 rounded", j.status === "completed" ? "bg-green-500/20 text-green-400" : j.status === "in_progress" ? "bg-purple-500/20 text-purple-400" : "bg-gray-500/20 text-gray-400"), children: j.status }), t.jsx("button", { onClick: w => { w.stopPropagation(), i(j.id); }, className: "opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-all", children: t.jsx(cc, { className: "h-3 w-3" }) })] }, j.id); }), l.length === 0 && t.jsx("p", { className: "text-sm text-muted-foreground text-center py-2", children: "Sin epics" })] }), u ? t.jsxs("div", { className: "flex gap-2", children: [t.jsx("input", { type: "text", value: f, onChange: j => x(j.target.value), placeholder: N, className: "flex-1 px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-purple-500 font-mono", autoFocus: !0, onKeyDown: j => j.key === "Enter" && p() }), t.jsx("button", { onClick: p, disabled: !f.trim(), className: "p-1.5 rounded-lg bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed", children: t.jsx(xt, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: () => { m(!1), x(""); }, className: "p-1.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground", children: t.jsx(os, { className: "h-4 w-4" }) })] }) : t.jsxs("button", { onClick: v, className: "w-full py-1.5 rounded-lg border border-dashed border-border text-muted-foreground text-sm hover:border-purple-500 hover:text-purple-400 transition-colors flex items-center justify-center gap-2", children: [t.jsx(xt, { className: "h-4 w-4" }), "Crear Epic (", N, ")"] })] }); }
function o4({ sprints: l, onCreateSprint: n, onDeleteSprint: i, onSprintClick: c }) { const [u, m] = z.useState(!1), [f, x] = z.useState(""), b = z.useMemo(() => l.length === 0 ? 1 : Math.max(...l.map(w => w.sprintNumber || 0)) + 1, [l]), N = `SPRINT${String(b).padStart(3, "0")}`, v = () => { x(N), m(!0); }, p = () => { f.trim() && (n(f.trim()), x(""), m(!1)); }, j = l.find(k => k.status === "active"); return t.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [t.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2 mb-3", children: [t.jsx(st, { className: "h-4 w-4 text-yellow-400" }), "Sprints", t.jsxs("span", { className: "text-xs text-muted-foreground font-normal ml-auto", children: [l.length, " total"] })] }), j && t.jsxs("div", { onClick: () => c == null ? void 0 : c(j.id), className: "mb-3 p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 cursor-pointer hover:bg-yellow-500/20 transition-colors", children: [t.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [t.jsx(st, { className: "h-3 w-3 text-yellow-400 animate-pulse" }), t.jsx("span", { className: "text-yellow-400 font-medium", children: "Activo:" }), t.jsx("span", { className: "text-foreground", children: j.name })] }), j.endDate && t.jsxs("p", { className: "text-xs text-muted-foreground mt-1 flex items-center gap-1", children: [t.jsx(V1, { className: "h-3 w-3" }), "Termina: ", new Date(j.endDate).toLocaleDateString("es-ES")] })] }), t.jsxs("div", { className: "space-y-2 mb-3 max-h-32 overflow-y-auto", children: [l.filter(k => k.id !== (j == null ? void 0 : j.id)).map(k => t.jsxs("div", { onClick: () => c == null ? void 0 : c(k.id), className: "flex items-center gap-2 p-2 rounded-lg bg-secondary/50 group cursor-pointer hover:bg-secondary/80 transition-colors", children: [t.jsxs("span", { className: "text-xs font-mono text-muted-foreground", children: ["SP", String(k.sprintNumber).padStart(2, "0")] }), t.jsx("span", { className: "flex-1 text-sm text-foreground truncate", children: k.name }), t.jsx("span", { className: Q("text-xs px-1.5 py-0.5 rounded", k.status === "completed" ? "bg-green-500/20 text-green-400" : k.status === "active" ? "bg-yellow-500/20 text-yellow-400" : "bg-gray-500/20 text-gray-400"), children: k.status }), t.jsx("button", { onClick: w => { w.stopPropagation(), i(k.id); }, className: "opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-all", children: t.jsx(cc, { className: "h-3 w-3" }) })] }, k.id)), l.length === 0 && t.jsx("p", { className: "text-sm text-muted-foreground text-center py-2", children: "Sin sprints" })] }), u ? t.jsxs("div", { className: "flex gap-2", children: [t.jsx("input", { type: "text", value: f, onChange: k => x(k.target.value), placeholder: N, className: "flex-1 px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-yellow-500 font-mono", autoFocus: !0, onKeyDown: k => k.key === "Enter" && p() }), t.jsx("button", { onClick: p, disabled: !f.trim(), className: "p-1.5 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed", children: t.jsx(xt, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: () => { m(!1), x(""); }, className: "p-1.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground", children: t.jsx(os, { className: "h-4 w-4" }) })] }) : t.jsxs("button", { onClick: v, className: "w-full py-1.5 rounded-lg border border-dashed border-border text-muted-foreground text-sm hover:border-yellow-500 hover:text-yellow-400 transition-colors flex items-center justify-center gap-2", children: [t.jsx(xt, { className: "h-4 w-4" }), "Crear Sprint (", N, ")"] })] }); }
function d4({ project: l, isOpen: n, onClose: i, onEdit: c }) { var u; return t.jsxs(cr, { isOpen: n, onClose: i, title: "Informacion del Proyecto", maxWidth: "max-w-2xl", children: [t.jsxs("div", { className: "p-6 space-y-6", children: [t.jsxs("div", { className: "flex items-start gap-4", children: [t.jsx("div", { className: "w-16 h-16 rounded-xl bg-gradient-to-br from-solaria to-solaria-dark flex items-center justify-center", children: t.jsx(wu, { className: "text-white h-8 w-8" }) }), t.jsxs("div", { className: "flex-1", children: [t.jsx("h2", { className: "text-xl font-bold text-foreground", children: l.name }), t.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: l.code })] })] }), t.jsxs("div", { children: [t.jsx("h4", { className: "text-sm font-medium text-muted-foreground mb-2", children: "Descripcion" }), t.jsx("p", { className: "text-foreground", children: l.description || "Sin descripcion" })] }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [t.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50", children: [t.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Cliente" }), t.jsx("p", { className: "text-foreground font-medium", children: ((u = l.client) == null ? void 0 : u.name) || "Sin cliente" })] }), t.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50", children: [t.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Presupuesto" }), t.jsxs("p", { className: "text-foreground font-medium", children: ["$", (l.budgetAllocated || 0).toLocaleString()] })] }), t.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50", children: [t.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Fecha Inicio" }), t.jsx("p", { className: "text-foreground font-medium", children: l.startDate ? new Date(l.startDate).toLocaleDateString("es-ES") : "No definida" })] }), t.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50", children: [t.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Deadline" }), t.jsx("p", { className: "text-foreground font-medium", children: l.endDate ? new Date(l.endDate).toLocaleDateString("es-ES") : "No definida" })] })] }), t.jsxs("div", { children: [t.jsx("h4", { className: "text-sm font-medium text-muted-foreground mb-2", children: "Stack Tecnico" }), t.jsxs("div", { className: "flex flex-wrap gap-2", children: [t.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400", children: "React 19" }), t.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400", children: "Node.js" }), t.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400", children: "PostgreSQL" }), t.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-orange-500/20 text-orange-400", children: "TailwindCSS" })] })] })] }), t.jsxs("div", { className: "p-6 border-t border-border flex justify-end gap-3", children: [t.jsx("button", { onClick: i, className: "px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors", children: "Cerrar" }), t.jsxs("button", { onClick: () => { i(), c(); }, className: "px-4 py-2 rounded-lg bg-solaria text-white hover:bg-solaria-dark transition-colors flex items-center gap-2", children: [t.jsx(Ki, { className: "h-4 w-4" }), "Editar"] })] })] }); }
function u4({ project: l, isOpen: n, onClose: i, onSave: c }) { var w, S, E, O; const [u, m] = z.useState({ name: l.name, code: l.code || "", description: l.description || "", budgetAllocated: l.budgetAllocated || 0, startDate: ((w = l.startDate) == null ? void 0 : w.split("T")[0]) || "", endDate: ((S = l.endDate) == null ? void 0 : S.split("T")[0]) || "" }), f = u.code.length === 3 && u.code.toUpperCase() !== ((E = l.code) == null ? void 0 : E.toUpperCase()), { data: x, isLoading: b } = A2(f ? u.code : ""), N = u.code.length === 3 && /^[A-Za-z]{3}$/.test(u.code), v = u.code.toUpperCase() === ((O = l.code) == null ? void 0 : O.toUpperCase()), p = v || ((x == null ? void 0 : x.available) ?? !0), j = D => { const q = D.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 3); m({ ...u, code: q }); }, k = () => { !N || !v && !p || (c(u), i()); }; return t.jsxs(cr, { isOpen: n, onClose: i, title: "Editar Proyecto", children: [t.jsxs("div", { className: "p-6 space-y-4", children: [t.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [t.jsxs("div", { className: "col-span-2", children: [t.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Nombre" }), t.jsx("input", { type: "text", value: u.name, onChange: D => m({ ...u, name: D.target.value }), className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Codigo (3 letras)" }), t.jsxs("div", { className: "relative", children: [t.jsx("input", { type: "text", value: u.code, onChange: j, maxLength: 3, placeholder: "ABC", className: Q("w-full px-3 py-2 rounded-lg bg-secondary border text-foreground font-mono text-center uppercase tracking-wider", !N && u.code.length > 0 ? "border-red-500" : N && !b && !v && p ? "border-green-500" : N && !b && !p ? "border-red-500" : "border-border") }), b && t.jsx("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground", children: "..." })] }), !N && u.code.length > 0 && t.jsx("p", { className: "text-xs text-red-400 mt-1", children: "Solo 3 letras A-Z" }), N && !v && !b && !p && t.jsx("p", { className: "text-xs text-red-400 mt-1", children: "Codigo en uso" }), N && !v && !b && p && t.jsx("p", { className: "text-xs text-green-400 mt-1", children: "Disponible ✓" })] })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Presupuesto" }), t.jsx("input", { type: "number", value: u.budgetAllocated, onChange: D => m({ ...u, budgetAllocated: Number(D.target.value) }), className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground" })] }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Fecha Inicio" }), t.jsx("input", { type: "date", value: u.startDate, onChange: D => m({ ...u, startDate: D.target.value }), className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Deadline" }), t.jsx("input", { type: "date", value: u.endDate, onChange: D => m({ ...u, endDate: D.target.value }), className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground" })] })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium text-muted-foreground mb-1", children: "Descripcion" }), t.jsx("textarea", { value: u.description, onChange: D => m({ ...u, description: D.target.value }), rows: 4, className: "w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground resize-none" })] })] }), t.jsxs("div", { className: "p-6 border-t border-border flex justify-end gap-3", children: [t.jsx("button", { onClick: i, className: "px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors", children: "Cancelar" }), t.jsx("button", { onClick: k, disabled: !N || !v && !p || b, className: Q("px-4 py-2 rounded-lg transition-colors", !N || !v && !p || b ? "bg-secondary text-muted-foreground cursor-not-allowed" : "bg-solaria text-white hover:bg-solaria-dark"), children: "Guardar" })] })] }); }
function m4() { const { id: l } = Fa(), n = yt(), i = Number(l), [c, u] = z.useState(!1), [m, f] = z.useState(!1), [x, b] = z.useState([]), [N, v] = z.useState(null), [p, j] = z.useState(null), { data: k, isLoading: w, error: S } = ir(i), { data: E = [] } = sb(i), { data: O = [] } = ab(i), { data: D = [] } = lb(i), { data: q = [] } = k2(i, 10), Z = Mu(), A = T2(), L = E2(), y = M2(), M = O2(), J = z.useMemo(() => { const ce = E.length, ke = E.filter(lt => lt.status === "pending").length, be = E.filter(lt => lt.status === "in_progress").length, ne = E.filter(lt => lt.status === "completed").length, me = ce > 0 ? Math.round(ne / ce * 100) : 0; let Ze = 0; if (k != null && k.endDate) {
    const lt = new Date(k.endDate), Ue = new Date;
    Ze = Math.ceil((lt.getTime() - Ue.getTime()) / (1e3 * 60 * 60 * 24));
} return { total: ce, pending: ke, inProgress: be, completed: ne, progress: me, daysRemaining: Ze }; }, [E, k]), de = z.useMemo(() => { const ke = E.filter(me => me.status === "pending").length, be = E.filter(me => me.status === "in_progress").length, ne = E.filter(me => me.status === "completed").length; return { backlog: 0, todo: ke, doing: be, done: ne }; }, [E]), fe = z.useCallback(() => { u(!0); }, []), I = z.useCallback(() => { n(`/projects/${i}/tasks`); }, [n, i]), le = z.useCallback(() => { n(`/projects/${i}/links`); }, [n, i]), ee = z.useCallback(ce => { b(ke => [ce, ...ke]); }, []), ue = z.useCallback(ce => { Z.mutate({ id: i, data: ce }); }, [i, Z]), H = z.useCallback(ce => { A.mutate({ projectId: i, data: { name: ce } }); }, [i, A]), P = z.useCallback(ce => { L.mutate({ id: ce, projectId: i }); }, [i, L]), F = z.useCallback(ce => { y.mutate({ projectId: i, data: { name: ce } }); }, [i, y]), Ce = z.useCallback(ce => { M.mutate({ id: ce, projectId: i }); }, [i, M]); return w ? t.jsx("div", { className: "flex items-center justify-center h-64", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-solaria" }) }) : S || !k ? t.jsxs("div", { className: "flex flex-col items-center justify-center h-64 gap-4", children: [t.jsx(ht, { className: "h-12 w-12 text-red-500" }), t.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Proyecto no encontrado" }), t.jsxs("p", { className: "text-muted-foreground", children: ["El proyecto con ID ", i, " no existe o no tienes acceso."] }), t.jsxs("button", { onClick: () => n("/projects"), className: "px-4 py-2 rounded-lg bg-solaria text-white flex items-center gap-2", children: [t.jsx(Ns, { className: "h-4 w-4" }), "Volver a Proyectos"] })] }) : t.jsxs("div", { className: "p-4 sm:p-6 space-y-4 sm:space-y-6", children: [t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: () => n("/projects"), className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Volver al listado", children: t.jsx(Ns, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("h1", { className: "text-xl sm:text-2xl font-bold text-foreground", children: k.name }), t.jsx("p", { className: "text-sm text-muted-foreground", children: k.description })] })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsxs("button", { onClick: () => u(!0), className: "px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground flex items-center gap-2 transition-colors", children: [t.jsx(_g, { className: "h-4 w-4" }), t.jsx("span", { className: "hidden sm:inline", children: "Info" })] }), t.jsx("button", { onClick: () => n(`/projects/${i}/settings`), className: "p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors", title: "Configuracion", children: t.jsx(rc, { className: "h-4 w-4" }) })] })] }), t.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6", children: [t.jsxs("div", { className: "lg:col-span-2 space-y-4 sm:space-y-6", children: [t.jsx(a4, { project: k, metrics: J, onClick: fe }), t.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [t.jsx(l4, { metrics: J, tasksByStatus: de, onClick: I }), t.jsx(n4, { project: k, onClick: le })] }), t.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [t.jsx(c4, { epics: O, onCreateEpic: H, onDeleteEpic: P, onEpicClick: v }), t.jsx(o4, { sprints: D, onCreateSprint: F, onDeleteSprint: Ce, onSprintClick: j })] })] }), t.jsxs("div", { className: "space-y-4 sm:space-y-6", children: [t.jsx(r4, { activities: q.map(ce => ({ id: ce.id, action: ce.action, description: ce.message || ce.action, createdAt: ce.createdAt })) }), t.jsx(i4, { notes: x, onAddNote: ee }), t.jsx(s4, { epics: O, sprints: D, projectId: i, onEpicClick: v, onSprintClick: j })] })] }), t.jsx(d4, { project: k, isOpen: c, onClose: () => u(!1), onEdit: () => f(!0) }), t.jsx(u4, { project: k, isOpen: m, onClose: () => f(!1), onSave: ue }), t.jsx(rb, { epicId: N, isOpen: N !== null, onClose: () => v(null) }), t.jsx(ib, { sprintId: p, isOpen: p !== null, onClose: () => j(null) })] }); }
function f4({ item: l, onComplete: n, disabled: i = !1, showDragHandle: c = !1 }) { const [u, m] = z.useState(!1), [f, x] = z.useState(!1), [b, N] = z.useState(""), [v, p] = z.useState(l.estimatedMinutes || 0), j = async () => { if (!(l.isCompleted || i || u)) {
    if (!f && l.estimatedMinutes) {
        x(!0);
        return;
    }
    m(!0);
    try {
        await n(l.id, b || void 0, v || void 0);
    }
    finally {
        m(!1), x(!1);
    }
} }, k = async () => { if (!(l.isCompleted || i || u)) {
    m(!0);
    try {
        await n(l.id);
    }
    finally {
        m(!1);
    }
} }; return t.jsxs("div", { className: Q("task-item-row", l.isCompleted && "completed"), children: [c && t.jsx("div", { className: "task-item-handle", children: t.jsx(I1, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: k, disabled: l.isCompleted || i || u, className: Q("task-item-checkbox", l.isCompleted && "checked", u && "loading"), children: u ? t.jsx(Ae, { className: "h-3 w-3 animate-spin" }) : l.isCompleted ? t.jsx(Bl, { className: "h-3 w-3" }) : null }), t.jsxs("div", { className: "task-item-content", children: [t.jsx("span", { className: Q("task-item-title", l.isCompleted && "completed"), children: l.title }), l.description && t.jsx("span", { className: "task-item-description", children: l.description }), f && !l.isCompleted && t.jsxs("div", { className: "task-item-complete-form", children: [t.jsx("input", { type: "number", value: v, onChange: w => p(Number(w.target.value)), placeholder: "Minutos reales", className: "task-item-minutes-input", min: 0 }), t.jsx("input", { type: "text", value: b, onChange: w => N(w.target.value), placeholder: "Notas (opcional)", className: "task-item-notes-input" }), t.jsx("button", { onClick: j, disabled: u, className: "task-item-complete-btn", children: u ? t.jsx(Ae, { className: "h-3 w-3 animate-spin" }) : "Completar" }), t.jsx("button", { onClick: () => x(!1), className: "task-item-cancel-btn", children: "Cancelar" })] })] }), t.jsx("div", { className: "task-item-time", children: l.isCompleted && l.completedAt ? t.jsxs("span", { className: "task-item-completed-at", children: [t.jsx(Bl, { className: "h-3 w-3" }), Qe(l.completedAt)] }) : l.estimatedMinutes ? t.jsxs("span", { className: "task-item-estimate", children: [t.jsx(De, { className: "h-3 w-3" }), l.estimatedMinutes, "m"] }) : null })] }); }
function Uu({ taskId: l, editable: n = !0, showAddForm: i = !0 }) { const { data: c, isLoading: u, error: m } = y2(l), f = v2(), x = j2(), [b, N] = z.useState([{ title: "", estimatedMinutes: 30 }]), [v, p] = z.useState(!1), [j, k] = z.useState(!1), w = (c == null ? void 0 : c.filter(L => L.isCompleted).length) || 0, S = (c == null ? void 0 : c.length) || 0, E = S > 0 ? Math.round(w / S * 100) : 0, O = () => { N([...b, { title: "", estimatedMinutes: 30 }]); }, D = L => { b.length > 1 && N(b.filter((y, M) => M !== L)); }, q = (L, y, M) => { const J = [...b]; y === "title" ? J[L].title = M : J[L].estimatedMinutes = M, N(J); }, Z = async () => { const L = b.filter(y => y.title.trim()); if (L.length !== 0) {
    p(!0);
    try {
        await f.mutateAsync({ taskId: l, items: L.map(y => ({ title: y.title.trim(), estimatedMinutes: y.estimatedMinutes })) }), N([{ title: "", estimatedMinutes: 30 }]), k(!1);
    }
    finally {
        p(!1);
    }
} }, A = async (L, y, M) => { await x.mutateAsync({ taskId: l, itemId: L, notes: y, actualMinutes: M }); }; return u ? t.jsxs("div", { className: "task-items-loading", children: [t.jsx(Ae, { className: "h-5 w-5 animate-spin" }), t.jsx("span", { children: "Cargando subtareas..." })] }) : m ? t.jsx("div", { className: "task-items-error", children: "Error al cargar subtareas" }) : t.jsxs("div", { className: "task-items-list", children: [t.jsxs("div", { className: "task-items-header", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx(ku, { className: "h-4 w-4 text-muted-foreground" }), t.jsx("span", { className: "font-medium", children: "Subtareas" }), t.jsxs("span", { className: "text-xs text-muted-foreground", children: ["(", w, "/", S, ")"] })] }), S > 0 && t.jsx("div", { className: "task-items-progress-bar", children: t.jsx("div", { className: Q("task-items-progress-fill", E === 100 && "complete"), style: { width: `${E}%` } }) })] }), t.jsx("div", { className: "task-items-body", children: c && c.length > 0 ? c.sort((L, y) => L.sortOrder - y.sortOrder).map(L => t.jsx(f4, { item: L, onComplete: A, disabled: !n }, L.id)) : t.jsxs("div", { className: "task-items-empty", children: [t.jsx(Le, { className: "h-8 w-8 text-muted-foreground/50" }), t.jsx("p", { children: "No hay subtareas definidas" })] }) }), n && i && t.jsx("div", { className: "task-items-add", children: j ? t.jsxs("div", { className: "add-items-form", children: [b.map((L, y) => t.jsxs("div", { className: "add-item-row", children: [t.jsx("input", { type: "text", value: L.title, onChange: M => q(y, "title", M.target.value), placeholder: "Titulo de la subtarea...", className: "add-item-title", autoFocus: y === b.length - 1 }), t.jsx("input", { type: "number", value: L.estimatedMinutes, onChange: M => q(y, "estimatedMinutes", Number(M.target.value)), className: "add-item-minutes", min: 5, step: 5 }), t.jsx("span", { className: "add-item-minutes-label", children: "min" }), b.length > 1 && t.jsx("button", { onClick: () => D(y), className: "add-item-remove", children: "×" })] }, y)), t.jsxs("div", { className: "add-items-actions", children: [t.jsxs("button", { onClick: O, className: "add-another-btn", children: [t.jsx(xt, { className: "h-3 w-3" }), "Agregar otra"] }), t.jsxs("div", { className: "flex gap-2", children: [t.jsx("button", { onClick: () => { k(!1), N([{ title: "", estimatedMinutes: 30 }]); }, className: "cancel-btn", children: "Cancelar" }), t.jsx("button", { onClick: Z, disabled: v || !b.some(L => L.title.trim()), className: "submit-items-btn", children: v ? t.jsx(Ae, { className: "h-4 w-4 animate-spin" }) : "Guardar" })] })] })] }) : t.jsxs("button", { onClick: () => k(!0), className: "add-items-trigger", children: [t.jsx(xt, { className: "h-4 w-4" }), "Agregar subtareas"] }) })] }); }
const Zi = { critical: 0, high: 1, medium: 2, low: 3 }, Fi = { pending: 0, in_progress: 1, blocked: 2, completed: 3 }, Jn = { pending: "todo", blocked: "backlog", in_progress: "doing", review: "doing", completed: "done", cancelled: "done" }, h4 = [{ key: "backlog", label: "Backlog", color: "#64748b" }, { key: "todo", label: "Por Hacer", color: "#f59e0b" }, { key: "doing", label: "En Progreso", color: "#3b82f6" }, { key: "done", label: "Completadas", color: "#22c55e" }], Na = { critical: { color: "#ef4444", label: "P0", bg: "rgba(239, 68, 68, 0.2)" }, high: { color: "#f59e0b", label: "P1", bg: "rgba(249, 115, 22, 0.2)" }, medium: { color: "#3b82f6", label: "P2", bg: "rgba(59, 130, 246, 0.2)" }, low: { color: "#64748b", label: "P3", bg: "rgba(100, 116, 139, 0.2)" } }, dc = { pending: "Pendiente", in_progress: "En Progreso", review: "En Revision", completed: "Completada", blocked: "Bloqueada", cancelled: "Cancelada" };
function x4({ task: l, agent: n, onClick: i }) { const c = Na[l.priority] || Na.medium, u = l.status === "in_progress", m = l.taskCode || `#${l.id}`; return t.jsxs("div", { onClick: i, className: "task-card bg-secondary border border-border rounded-lg p-3 cursor-pointer transition-all hover:border-solaria hover:-translate-y-0.5", children: [t.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [t.jsxs("span", { className: "text-[13px] font-medium text-foreground leading-tight", children: [t.jsx("span", { className: "text-solaria font-semibold mr-1.5", children: m }), l.title] }), t.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [t.jsx("span", { className: "px-1.5 py-0.5 rounded text-[9px] font-bold uppercase", style: { background: c.bg, color: c.color }, children: c.label }), l.estimatedHours && l.estimatedHours > 0 && t.jsxs("span", { className: "text-[9px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded flex items-center gap-1", children: [t.jsx(Og, { className: "h-2.5 w-2.5" }), l.estimatedHours, "h"] })] })] }), u && l.progress > 0 && t.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [t.jsx("div", { className: "flex-1 h-1 bg-background/50 rounded overflow-hidden", children: t.jsx("div", { className: "h-full rounded transition-all", style: { width: `${l.progress}%`, background: `linear-gradient(90deg, ${c.color}, ${c.color}dd)` } }) }), t.jsxs("span", { className: "text-[10px] font-bold min-w-[32px] text-right", style: { color: l.progress >= 100 ? "#22c55e" : c.color }, children: [l.progress, "%"] })] }), t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [n ? t.jsxs("span", { className: "flex items-center gap-1 text-[10px] text-solaria bg-solaria/10 px-1.5 py-0.5 rounded", children: [t.jsx(Ks, { className: "h-3 w-3" }), n.name.replace("SOLARIA-", "")] }) : t.jsxs("span", { className: "flex items-center gap-1 text-[10px] text-muted-foreground", children: [t.jsx(Qs, { className: "h-3 w-3" }), "Sin asignar"] }), l.status && l.status !== "in_progress" && t.jsx("span", { className: "text-[8px] px-1 py-0.5 bg-secondary rounded text-muted-foreground", children: dc[l.status] || l.status })] }), l.createdAt && t.jsxs("span", { className: "text-[9px] text-muted-foreground flex items-center gap-1", children: [t.jsx(De, { className: "h-2.5 w-2.5" }), Qe(l.createdAt)] })] })] }); }
function p4({ column: l, tasks: n, agents: i, onTaskClick: c, onAddTask: u }) { const m = f => i.find(x => x.id === f); return t.jsxs("div", { className: Q("flex-1 min-w-0 bg-secondary/30 rounded-xl flex flex-col h-full overflow-hidden", `kanban-column-${l.key}`), children: [t.jsxs("div", { className: "px-4 py-3 flex items-center justify-between border-b border-border", children: [t.jsxs("span", { className: "text-xs font-semibold uppercase tracking-wide flex items-center gap-2", children: [t.jsx("span", { className: "w-2 h-2 rounded-full", style: { background: l.color } }), l.label] }), t.jsx("span", { className: "text-[11px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full", children: n.length })] }), t.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto p-2.5 space-y-2", children: [n.map(f => t.jsx(x4, { task: f, agent: m(f.assignedAgentId), onClick: () => c(f.id) }, f.id)), l.key === "backlog" && u && t.jsxs("button", { onClick: u, className: "w-full p-2.5 border-2 border-dashed border-border rounded-lg text-muted-foreground text-xs hover:border-solaria hover:text-solaria transition-colors flex items-center justify-center gap-1.5", children: [t.jsx(xt, { className: "h-3.5 w-3.5" }), "Agregar tarea"] }), n.length === 0 && l.key !== "backlog" && t.jsx("div", { className: "text-center py-8 text-muted-foreground text-xs", children: "Sin tareas" })] })] }); }
function g4({ tasks: l, agents: n, onTaskClick: i, onCreateTask: c }) { const u = z.useMemo(() => { const m = { backlog: [], todo: [], doing: [], done: [] }; return l.forEach(f => { const x = Jn[f.status] || "todo"; m[x].push(f); }), m; }, [l]); return t.jsx("div", { className: "kanban-board flex gap-3 h-[calc(100vh-320px)] min-h-[400px]", children: h4.map(m => t.jsx(p4, { column: m, tasks: u[m.key] || [], agents: n, onTaskClick: i, onAddTask: m.key === "backlog" ? c : void 0 }, m.key)) }); }
function Wt({ label: l, column: n, currentColumn: i, currentDirection: c, onSort: u, className: m = "" }) { const f = i === n; return t.jsxs("button", { onClick: () => u(n), className: Q("flex items-center gap-1 text-xs font-semibold uppercase tracking-wide transition-colors group", f ? "text-solaria" : "text-muted-foreground hover:text-foreground", m), children: [l, t.jsx("span", { className: "text-muted-foreground group-hover:text-foreground", children: f ? c === "asc" ? t.jsx($n, { className: "h-3 w-3" }) : t.jsx(yu, { className: "h-3 w-3" }) : t.jsx(H1, { className: "h-3 w-3 opacity-50" }) })] }); }
function b4({ tasks: l, agents: n, onTaskClick: i }) { const [c, u] = z.useState("priority"), [m, f] = z.useState("asc"), x = v => n.find(p => p.id === v), b = z.useCallback(v => { c === v ? f(p => p === "asc" ? "desc" : "asc") : (u(v), f("asc")); }, [c]), N = z.useMemo(() => [...l].sort((p, j) => { var w, S; let k = 0; switch (c) {
    case "code":
        const E = p.taskCode || `#${p.id}`, O = j.taskCode || `#${j.id}`;
        k = E.localeCompare(O);
        break;
    case "title":
        k = p.title.localeCompare(j.title);
        break;
    case "priority":
        k = (Zi[p.priority] ?? 3) - (Zi[j.priority] ?? 3);
        break;
    case "status":
        k = (Fi[p.status] ?? 0) - (Fi[j.status] ?? 0);
        break;
    case "progress":
        k = (p.progress || 0) - (j.progress || 0);
        break;
    case "agent":
        const D = ((w = n.find(L => L.id === p.assignedAgentId)) == null ? void 0 : w.name) || "ZZZ", q = ((S = n.find(L => L.id === j.assignedAgentId)) == null ? void 0 : S.name) || "ZZZ";
        k = D.localeCompare(q);
        break;
    case "date":
        const Z = new Date(p.updatedAt || p.createdAt || 0).getTime(), A = new Date(j.updatedAt || j.createdAt || 0).getTime();
        k = Z - A;
        break;
} return m === "asc" ? k : -k; }), [l, c, m, n]); return t.jsxs("div", { className: "bg-card rounded-xl border border-border overflow-hidden h-full flex flex-col", children: [t.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border sticky top-0 z-10", children: [t.jsx("div", { className: "w-1 flex-shrink-0" }), " ", t.jsx(Wt, { label: "Código", column: "code", currentColumn: c, currentDirection: m, onSort: b, className: "w-20" }), t.jsx(Wt, { label: "Tarea", column: "title", currentColumn: c, currentDirection: m, onSort: b, className: "flex-1 min-w-0" }), t.jsx(Wt, { label: "Estado", column: "status", currentColumn: c, currentDirection: m, onSort: b, className: "w-24" }), t.jsx(Wt, { label: "Prioridad", column: "priority", currentColumn: c, currentDirection: m, onSort: b, className: "w-20" }), t.jsx(Wt, { label: "Progreso", column: "progress", currentColumn: c, currentDirection: m, onSort: b, className: "w-28" }), t.jsx(Wt, { label: "Agente", column: "agent", currentColumn: c, currentDirection: m, onSort: b, className: "w-28" }), t.jsx(Wt, { label: "Fecha", column: "date", currentColumn: c, currentDirection: m, onSort: b, className: "w-24" }), t.jsx("div", { className: "w-6 flex-shrink-0" }), " "] }), t.jsxs("div", { className: "flex-1 overflow-y-auto", children: [N.map(v => { const p = x(v.assignedAgentId), j = v.status === "completed", k = Na[v.priority] || Na.medium; return t.jsxs("div", { onClick: () => i(v.id), className: "flex items-center gap-2 px-4 py-3 bg-card border-b border-border last:border-b-0 hover:bg-secondary/30 cursor-pointer transition-colors", children: [t.jsx("div", { className: "w-1 h-10 rounded-full flex-shrink-0", style: { background: k.color } }), t.jsx("div", { className: "w-20 flex-shrink-0", children: t.jsx("span", { className: "text-xs text-solaria font-mono font-semibold", children: v.taskCode || `#${v.id}` }) }), t.jsx("div", { className: "flex-1 min-w-0", children: t.jsx("span", { className: Q("text-sm font-medium truncate block", j && "line-through opacity-70"), children: v.title }) }), t.jsx("div", { className: "w-24 flex-shrink-0", children: t.jsx("span", { className: "inline-block px-2 py-1 rounded text-[10px] font-medium", style: { background: k.bg, color: k.color }, children: dc[v.status] || v.status }) }), t.jsx("div", { className: "w-20 flex-shrink-0", children: t.jsx("span", { className: "inline-block px-2 py-1 rounded text-[10px] font-bold", style: { background: k.bg, color: k.color }, children: k.label }) }), t.jsx("div", { className: "w-28 flex-shrink-0", children: t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "flex-1 h-2 bg-secondary rounded-full overflow-hidden", children: t.jsx("div", { className: Q("h-full rounded-full transition-all", j ? "bg-green-500" : "bg-solaria"), style: { width: `${v.progress}%` } }) }), t.jsxs("span", { className: "text-xs text-muted-foreground w-8 text-right", children: [v.progress, "%"] })] }) }), t.jsx("div", { className: "w-28 flex-shrink-0", children: t.jsx("div", { className: "flex items-center gap-1", children: p ? t.jsxs(t.Fragment, { children: [t.jsx(Ks, { className: "h-3 w-3 text-solaria" }), t.jsx("span", { className: "text-xs truncate", children: p.name.replace("SOLARIA-", "") })] }) : t.jsx("span", { className: "text-xs text-muted-foreground", children: "Sin asignar" }) }) }), t.jsx("div", { className: "w-24 flex-shrink-0 text-xs text-muted-foreground", children: v.updatedAt ? Qe(v.updatedAt) : v.createdAt ? Qe(v.createdAt) : "-" }), t.jsx(Kl, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" })] }, v.id); }), N.length === 0 && t.jsx("div", { className: "text-center py-12 text-muted-foreground", children: "No hay tareas" })] })] }); }
function y4({ tasks: l, agents: n, onTaskClick: i }) { const [c, u] = z.useState("priority"), [m, f] = z.useState("asc"), x = j => n.find(k => k.id === j), b = z.useCallback(j => { c === j ? f(k => k === "asc" ? "desc" : "asc") : (u(j), f("asc")); }, [c]), N = z.useMemo(() => [...l].sort((k, w) => { var E, O; let S = 0; switch (c) {
    case "code":
        const D = k.taskCode || `#${k.id}`, q = w.taskCode || `#${w.id}`;
        S = D.localeCompare(q);
        break;
    case "title":
        S = k.title.localeCompare(w.title);
        break;
    case "priority":
        S = (Zi[k.priority] ?? 3) - (Zi[w.priority] ?? 3);
        break;
    case "status":
        S = (Fi[k.status] ?? 0) - (Fi[w.status] ?? 0);
        break;
    case "progress":
        S = (k.progress || 0) - (w.progress || 0);
        break;
    case "agent":
        const Z = ((E = n.find(M => M.id === k.assignedAgentId)) == null ? void 0 : E.name) || "ZZZ", A = ((O = n.find(M => M.id === w.assignedAgentId)) == null ? void 0 : O.name) || "ZZZ";
        S = Z.localeCompare(A);
        break;
    case "date":
        const L = new Date(k.updatedAt || k.createdAt || 0).getTime(), y = new Date(w.updatedAt || w.createdAt || 0).getTime();
        S = L - y;
        break;
} return m === "asc" ? S : -S; }), [l, c, m, n]), v = z.useMemo(() => Math.max(...l.map(j => j.estimatedHours || 0), 8), [l]), p = j => { switch (j) {
    case "critical": return "linear-gradient(to right, #ef4444, #dc2626)";
    case "high": return "linear-gradient(to right, #f97316, #ea580c)";
    case "medium": return "linear-gradient(to right, #f6921d, #d97b0d)";
    case "low": return "linear-gradient(to right, #6b7280, #4b5563)";
    default: return "linear-gradient(to right, #f6921d, #d97b0d)";
} }; return t.jsxs("div", { className: "bg-card rounded-xl border border-border overflow-hidden h-full flex flex-col", children: [t.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between flex-shrink-0", children: [t.jsxs("h3", { className: "font-semibold flex items-center gap-2", children: [t.jsx(Tu, { className: "h-5 w-5 text-solaria" }), "Vista Gantt"] }), t.jsxs("div", { className: "flex gap-4 text-xs", children: [t.jsxs("span", { className: "flex items-center gap-1.5", children: [t.jsx("span", { className: "w-3 h-3 rounded", style: { background: "#ef4444" } }), "P0"] }), t.jsxs("span", { className: "flex items-center gap-1.5", children: [t.jsx("span", { className: "w-3 h-3 rounded", style: { background: "#f97316" } }), "P1"] }), t.jsxs("span", { className: "flex items-center gap-1.5", children: [t.jsx("span", { className: "w-3 h-3 rounded", style: { background: "#f6921d" } }), "P2"] }), t.jsxs("span", { className: "flex items-center gap-1.5", children: [t.jsx("span", { className: "w-3 h-3 rounded", style: { background: "#6b7280" } }), "P3"] })] })] }), t.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border flex-shrink-0 sticky top-0 z-10", children: [t.jsx(Wt, { label: "Código", column: "code", currentColumn: c, currentDirection: m, onSort: b, className: "w-20" }), t.jsx(Wt, { label: "Tarea", column: "title", currentColumn: c, currentDirection: m, onSort: b, className: "w-48" }), t.jsx(Wt, { label: "Agente", column: "agent", currentColumn: c, currentDirection: m, onSort: b, className: "w-24" }), t.jsx(Wt, { label: "Estado", column: "status", currentColumn: c, currentDirection: m, onSort: b, className: "w-24" }), t.jsx(Wt, { label: "Prioridad", column: "priority", currentColumn: c, currentDirection: m, onSort: b, className: "w-20" }), t.jsx("div", { className: "flex-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Timeline / Progreso" })] }), t.jsxs("div", { className: "flex-1 overflow-y-auto divide-y divide-border", children: [N.map(j => { const k = x(j.assignedAgentId), w = j.status === "completed", S = Na[j.priority] || Na.medium, E = (j.estimatedHours || 0) / v * 100, O = j.progress || 0; return t.jsxs("div", { onClick: () => i(j.id), className: "flex items-center gap-2 py-3 px-4 hover:bg-secondary/30 cursor-pointer transition-colors", children: [t.jsx("div", { className: "w-20 flex-shrink-0", children: t.jsx("span", { className: "text-xs text-solaria font-mono font-semibold", children: j.taskCode || `#${j.id}` }) }), t.jsx("div", { className: "w-48 flex-shrink-0 min-w-0", children: t.jsx("span", { className: Q("text-sm truncate font-medium block", w && "line-through opacity-70"), children: j.title }) }), t.jsx("div", { className: "w-24 flex-shrink-0", children: t.jsx("div", { className: "flex items-center gap-1", children: k ? t.jsxs(t.Fragment, { children: [t.jsx(Ks, { className: "h-3 w-3 text-solaria" }), t.jsx("span", { className: "text-xs truncate", children: k.name.replace("SOLARIA-", "") })] }) : t.jsx("span", { className: "text-xs text-muted-foreground", children: "Sin asignar" }) }) }), t.jsx("div", { className: "w-24 flex-shrink-0", children: t.jsx("span", { className: "inline-block px-2 py-1 rounded text-[10px] font-medium", style: { background: S.bg, color: S.color }, children: dc[j.status] || j.status }) }), t.jsx("div", { className: "w-20 flex-shrink-0", children: t.jsx("span", { className: "inline-block px-2 py-1 rounded text-[10px] font-bold", style: { background: S.bg, color: S.color }, children: S.label }) }), t.jsxs("div", { className: "flex-1 h-7 bg-secondary/50 rounded relative overflow-hidden", children: [E > 0 && t.jsxs("div", { className: "absolute inset-y-0 left-0 rounded flex items-center transition-all", style: { width: `${Math.max(E, 10)}%`, background: p(j.priority) }, children: [t.jsx("div", { className: "absolute inset-y-0 left-0 bg-white/30 rounded", style: { width: `${O}%` } }), t.jsxs("span", { className: "text-[10px] text-white px-2 font-medium relative z-10 drop-shadow whitespace-nowrap", children: [j.estimatedHours || 0, "h - ", O, "%"] })] }), E === 0 && t.jsx("div", { className: "h-full flex items-center justify-center text-xs text-muted-foreground", children: "Sin estimación" })] })] }, j.id); }), N.length === 0 && t.jsx("div", { className: "text-center py-12 text-muted-foreground", children: "No hay tareas" })] })] }); }
function v4({ task: l, agent: n, isOpen: i, onClose: c }) { const [u, m] = z.useState(!1), { data: f = [], isLoading: x } = w2((l == null ? void 0 : l.id) || 0), { data: b = [] } = N2(), N = S2(), v = C2(), p = z.useMemo(() => { const O = new Set(f.map(D => D.id)); return b.filter(D => !O.has(D.id)); }, [f, b]), j = z.useCallback(O => { l && (N.mutate({ taskId: l.id, tagId: O }), m(!1)); }, [l, N]), k = z.useCallback(O => { l && v.mutate({ taskId: l.id, tagId: O }); }, [l, v]); if (!l)
    return null; const w = Na[l.priority] || Na.medium, S = dc[l.status] || l.status, E = l.taskCode || `#${l.id}`; return t.jsxs(cr, { isOpen: i, onClose: c, title: "", maxWidth: "max-w-2xl", children: [t.jsxs("div", { className: "px-6 py-4 border-b border-border", style: { borderLeft: `4px solid ${w.color}` }, children: [t.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [t.jsx("span", { className: "px-2 py-1 rounded text-[11px] font-bold", style: { background: w.bg, color: w.color }, children: w.label }), t.jsx("span", { className: "px-2 py-1 rounded text-[11px] bg-secondary", children: S }), t.jsx("span", { className: "text-[11px] text-muted-foreground", children: E })] }), t.jsx("h3", { className: "text-lg font-semibold", children: l.title })] }), t.jsxs("div", { className: "p-6 space-y-6", children: [t.jsxs("div", { children: [t.jsxs("h4", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [t.jsx(U1, { className: "h-4 w-4 text-solaria" }), "Descripcion"] }), t.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: l.description || "Sin descripcion disponible" })] }), l.progress > 0 && t.jsxs("div", { children: [t.jsxs("h4", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [t.jsx(Wn, { className: "h-4 w-4 text-solaria" }), "Progreso"] }), t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "flex-1 h-2 bg-secondary rounded-full overflow-hidden", children: t.jsx("div", { className: "h-full rounded-full", style: { width: `${l.progress}%`, background: w.color } }) }), t.jsxs("span", { className: "text-sm font-semibold", style: { color: w.color }, children: [l.progress, "%"] })] })] }), t.jsx("div", { className: "border border-border rounded-lg p-4 bg-secondary/30", children: t.jsx(Uu, { taskId: l.id, editable: l.status !== "completed", showAddForm: l.status !== "completed" }) }), t.jsxs("div", { children: [t.jsxs("h4", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [t.jsx(Ug, { className: "h-4 w-4 text-solaria" }), "Etiquetas"] }), t.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [x ? t.jsx(Ae, { className: "h-4 w-4 animate-spin text-muted-foreground" }) : f.length === 0 ? t.jsx("span", { className: "text-xs text-muted-foreground", children: "Sin etiquetas" }) : f.map(O => t.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium group", style: { backgroundColor: `${O.color}20`, color: O.color }, children: [O.name, t.jsx("button", { onClick: () => k(O.id), className: "opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 rounded p-0.5", title: "Eliminar etiqueta", children: t.jsx(os, { className: "h-3 w-3" }) })] }, O.id)), u ? t.jsx("div", { className: "relative", children: t.jsxs("div", { className: "absolute top-full left-0 mt-1 z-50 bg-card border border-border rounded-lg shadow-lg p-2 min-w-[160px] max-h-[200px] overflow-y-auto", children: [p.length === 0 ? t.jsx("p", { className: "text-xs text-muted-foreground p-2", children: "No hay etiquetas disponibles" }) : p.map(O => t.jsxs("button", { onClick: () => j(O.id), className: "w-full text-left px-2 py-1.5 rounded hover:bg-secondary transition-colors flex items-center gap-2", children: [t.jsx("span", { className: "w-3 h-3 rounded-full", style: { backgroundColor: O.color } }), t.jsx("span", { className: "text-sm", children: O.name })] }, O.id)), t.jsx("button", { onClick: () => m(!1), className: "w-full text-left px-2 py-1.5 rounded hover:bg-secondary transition-colors text-xs text-muted-foreground mt-1 border-t border-border", children: "Cancelar" })] }) }) : t.jsx("button", { onClick: () => m(!0), className: "px-2 py-1 rounded text-xs border border-dashed border-muted-foreground/50 text-muted-foreground hover:border-solaria hover:text-solaria transition-colors", children: "+ Agregar" })] })] }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(Qs, { className: "h-3 w-3 text-blue-400" }), "Asignado a"] }), t.jsx("p", { className: "text-sm font-medium", children: (n == null ? void 0 : n.name) || "Sin asignar" })] }), t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(Og, { className: "h-3 w-3 text-yellow-400" }), "Horas Estimadas"] }), t.jsxs("p", { className: "text-sm font-medium", children: [l.estimatedHours || 0, " horas"] })] }), t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(gt, { className: "h-3 w-3 text-green-400" }), "Fecha Creacion"] }), t.jsx("p", { className: "text-sm font-medium", children: l.createdAt ? new Date(l.createdAt).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" }) : "N/A" })] }), t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(gt, { className: "h-3 w-3 text-red-400" }), "Ultima Actualizacion"] }), t.jsx("p", { className: "text-sm font-medium", children: l.updatedAt ? Qe(l.updatedAt) : "N/A" })] })] })] }), t.jsxs("div", { className: "px-6 py-4 border-t border-border flex items-center justify-between", children: [t.jsx("button", { onClick: c, className: "px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm", children: "Cerrar" }), t.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground bg-secondary px-3 py-2 rounded-lg", children: [t.jsx(Ks, { className: "h-3.5 w-3.5" }), "Solo el agente puede completar"] })] })] }); }
function j4({ isOpen: l, onClose: n, projectId: i, onTaskCreated: c }) { const [u, m] = z.useState(""), [f, x] = z.useState(""), [b, N] = z.useState("medium"), [v, p] = z.useState(1), j = d2(), k = async (w) => { if (w.preventDefault(), !!u.trim())
    try {
        await j.mutateAsync({ projectId: i, title: u.trim(), description: f.trim(), priority: b, status: "pending", estimatedHours: v }), m(""), x(""), N("medium"), p(1), c(), n();
    }
    catch (S) {
        console.error("Error creating task:", S);
    } }; return t.jsx(cr, { isOpen: l, onClose: n, title: "Nueva Tarea", maxWidth: "max-w-lg", children: t.jsxs("form", { onSubmit: k, className: "p-6 space-y-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium mb-2", children: "Titulo *" }), t.jsx("input", { type: "text", value: u, onChange: w => m(w.target.value), placeholder: "Nombre de la tarea...", className: "w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-solaria focus:outline-none", required: !0, autoFocus: !0 })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium mb-2", children: "Descripcion" }), t.jsx("textarea", { value: f, onChange: w => x(w.target.value), placeholder: "Describe la tarea...", rows: 4, className: "w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-solaria focus:outline-none resize-none" })] }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium mb-2", children: "Prioridad" }), t.jsxs("select", { value: b, onChange: w => N(w.target.value), className: "w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-solaria focus:outline-none", children: [t.jsx("option", { value: "low", children: "P3 - Baja" }), t.jsx("option", { value: "medium", children: "P2 - Media" }), t.jsx("option", { value: "high", children: "P1 - Alta" }), t.jsx("option", { value: "critical", children: "P0 - Critica" })] })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm font-medium mb-2", children: "Horas Estimadas" }), t.jsx("input", { type: "number", value: v, onChange: w => p(Number(w.target.value)), min: .5, step: .5, className: "w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-solaria focus:outline-none" })] })] }), t.jsxs("div", { className: "flex justify-end gap-3 pt-4 border-t border-border", children: [t.jsx("button", { type: "button", onClick: n, className: "px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors", children: "Cancelar" }), t.jsx("button", { type: "submit", disabled: !u.trim() || j.isPending, className: "px-4 py-2 rounded-lg bg-solaria hover:bg-solaria/90 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: j.isPending ? "Creando..." : "Crear Tarea" })] })] }) }); }
function N4() { const { id: l } = Fa(), n = yt(), i = parseInt(l || "0"), [c, u] = z.useState("kanban"), [m, f] = z.useState(!1), [x, b] = z.useState(null), { data: N, isLoading: v } = ir(i), { data: p, isLoading: j, refetch: k } = sb(i), { data: w } = tb(), S = z.useMemo(() => p ? { backlog: p.filter(A => Jn[A.status] === "backlog").length, todo: p.filter(A => Jn[A.status] === "todo").length, doing: p.filter(A => Jn[A.status] === "doing").length, done: p.filter(A => Jn[A.status] === "done").length } : { backlog: 0, todo: 0, doing: 0, done: 0 }, [p]), E = z.useMemo(() => !x || !p ? null : p.find(A => A.id === x) || null, [x, p]), O = z.useMemo(() => { if (!(!E || !w))
    return w.find(A => A.id === E.assignedAgentId); }, [E, w]), D = z.useCallback(A => { b(A); }, []), q = z.useCallback(() => { k(); }, [k]), Z = () => { n(`/projects/${i}`); }; return v || j ? t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : N ? t.jsxs("div", { className: "h-full flex flex-col", children: [t.jsxs("div", { className: "flex items-center justify-between mb-4 flex-shrink-0", children: [t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: Z, className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Volver al proyecto", children: t.jsx(Ns, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsxs("h1", { className: "text-xl font-bold", children: ["Tareas - ", N.name] }), t.jsxs("p", { className: "text-sm text-muted-foreground", children: [(p == null ? void 0 : p.length) || 0, " tareas en total"] })] })] }), t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsxs("div", { className: "flex bg-secondary rounded-lg overflow-hidden", children: [t.jsxs("button", { onClick: () => u("kanban"), className: Q("px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2", c === "kanban" ? "bg-solaria text-white" : "text-muted-foreground hover:text-foreground"), children: [t.jsx(Yl, { className: "h-4 w-4" }), "Kanban"] }), t.jsxs("button", { onClick: () => u("list"), className: Q("px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2", c === "list" ? "bg-solaria text-white" : "text-muted-foreground hover:text-foreground"), children: [t.jsx(Xl, { className: "h-4 w-4" }), "Lista"] }), t.jsxs("button", { onClick: () => u("gantt"), className: Q("px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2", c === "gantt" ? "bg-solaria text-white" : "text-muted-foreground hover:text-foreground"), children: [t.jsx(Tu, { className: "h-4 w-4" }), "Gantt"] })] }), t.jsxs("button", { onClick: () => f(!0), className: "px-4 py-2 rounded-lg bg-solaria hover:bg-solaria/90 text-white font-medium flex items-center gap-2 transition-colors", children: [t.jsx(xt, { className: "h-4 w-4" }), "Nueva Tarea"] })] })] }), t.jsxs("div", { className: "flex items-center gap-1 mb-3 flex-shrink-0 bg-secondary/50 rounded-lg p-2", children: [t.jsxs("div", { className: "flex-1 text-center px-3 py-1", children: [t.jsx("div", { className: "text-base font-bold", style: { color: "#64748b" }, children: S.backlog }), t.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: "Backlog" })] }), t.jsx("div", { className: "w-px h-8 bg-border" }), t.jsxs("div", { className: "flex-1 text-center px-3 py-1", children: [t.jsx("div", { className: "text-base font-bold", style: { color: "#f59e0b" }, children: S.todo }), t.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: "Por Hacer" })] }), t.jsx("div", { className: "w-px h-8 bg-border" }), t.jsxs("div", { className: "flex-1 text-center px-3 py-1", children: [t.jsx("div", { className: "text-base font-bold", style: { color: "#3b82f6" }, children: S.doing }), t.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: "En Progreso" })] }), t.jsx("div", { className: "w-px h-8 bg-border" }), t.jsxs("div", { className: "flex-1 text-center px-3 py-1", children: [t.jsx("div", { className: "text-base font-bold", style: { color: "#22c55e" }, children: S.done }), t.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: "Completadas" })] })] }), t.jsxs("div", { className: "flex-1 min-h-0", children: [c === "kanban" && t.jsx(g4, { tasks: p || [], agents: w || [], onTaskClick: D, onCreateTask: () => f(!0) }), c === "list" && t.jsx("div", { className: "h-full", children: t.jsx(b4, { tasks: p || [], agents: w || [], onTaskClick: D }) }), c === "gantt" && t.jsx("div", { className: "h-full", children: t.jsx(y4, { tasks: p || [], agents: w || [], onTaskClick: D }) })] }), S.done > 0 && t.jsx("div", { className: "flex items-center justify-center py-3 border-t border-border flex-shrink-0", children: t.jsxs("button", { onClick: () => n("/tasks/archived"), className: "flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors", children: [t.jsx(bs, { className: "h-4 w-4" }), "Ver ", S.done, " tareas archivadas"] }) }), t.jsx(j4, { isOpen: m, onClose: () => f(!1), projectId: i, onTaskCreated: q }), t.jsx(v4, { task: E, agent: O, isOpen: !!x, onClose: () => b(null) })] }) : t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx("p", { className: "text-muted-foreground", children: "Proyecto no encontrado" }) }); }
const Ap = { production: { label: "Producción", icon: Nu, color: "text-emerald-400", bgColor: "bg-emerald-500/10" }, staging: { label: "Staging/Dev", icon: Qi, color: "text-amber-400", bgColor: "bg-amber-500/10" }, local: { label: "Local", icon: zg, color: "text-blue-400", bgColor: "bg-blue-500/10" }, repository: { label: "Repositorio", icon: P1, color: "text-violet-400", bgColor: "bg-violet-500/10" } };
function w4() { const { id: l } = Fa(), n = yt(), { data: i, isLoading: c } = ir(Number(l)), u = Mu(), [m, f] = z.useState(!1), [x, b] = z.useState({ type: "production", label: "", url: "" }), [N, v] = z.useState(null), p = [(i == null ? void 0 : i.productionUrl) && { id: "prod", type: "production", label: "Produccion", url: i.productionUrl }, (i == null ? void 0 : i.stagingUrl) && { id: "staging", type: "staging", label: "Staging", url: i.stagingUrl }, (i == null ? void 0 : i.localUrl) && { id: "local", type: "local", label: "Local", url: i.localUrl }, (i == null ? void 0 : i.repoUrl) && { id: "repo", type: "repository", label: "GitHub", url: i.repoUrl }].filter(Boolean), j = async (S, E) => { await navigator.clipboard.writeText(S), v(E), setTimeout(() => v(null), 2e3); }, k = async () => { if (!x.url.trim())
    return; const S = { production: "productionUrl", staging: "stagingUrl", local: "localUrl", repository: "repoUrl" }; await u.mutateAsync({ id: Number(l), data: { [S[x.type]]: x.url.trim() } }), b({ type: "production", label: "", url: "" }), f(!1); }, w = async (S) => { const E = { prod: "productionUrl", staging: "stagingUrl", local: "localUrl", repo: "repoUrl" }; E[S] && await u.mutateAsync({ id: Number(l), data: { [E[S]]: null } }); }; return c ? t.jsx("div", { className: "flex items-center justify-center min-h-[400px]", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : i ? t.jsxs("div", { className: "p-6 max-w-4xl mx-auto", children: [t.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [t.jsx("button", { onClick: () => n(`/projects/${l}`), className: "p-2 rounded-lg hover:bg-secondary transition-colors", children: t.jsx(Ns, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("h1", { className: "text-2xl font-bold", children: "Direcciones del Proyecto" }), t.jsx("p", { className: "text-muted-foreground", children: i.name })] })] }), t.jsx("div", { className: "space-y-3 mb-6", children: p.length === 0 ? t.jsxs("div", { className: "text-center py-12 bg-card rounded-xl border border-border", children: [t.jsx(Rg, { className: "h-12 w-12 mx-auto text-muted-foreground/50 mb-4" }), t.jsx("p", { className: "text-muted-foreground mb-4", children: "No hay direcciones configuradas para este proyecto" }), t.jsxs("button", { onClick: () => f(!0), className: "px-4 py-2 bg-solaria text-white rounded-lg hover:bg-solaria/90 transition-colors", children: [t.jsx(xt, { className: "h-4 w-4 inline mr-2" }), "Agregar primera dirección"] })] }) : p.map(S => { const E = Ap[S.type], O = E.icon; return t.jsxs("div", { className: "flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-border/80 transition-colors", children: [t.jsx("div", { className: Q("p-2.5 rounded-lg", E.bgColor, E.color), children: t.jsx(O, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("span", { className: "font-medium", children: S.label }), t.jsx("span", { className: "text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground", children: E.label })] }), t.jsx("p", { className: "text-sm text-muted-foreground truncate", children: S.url })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("button", { onClick: () => j(S.url, S.id), className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Copiar URL", children: N === S.id ? t.jsx(Bl, { className: "h-4 w-4 text-emerald-400" }) : t.jsx(Rl, { className: "h-4 w-4 text-muted-foreground" }) }), t.jsx("a", { href: S.url, target: "_blank", rel: "noopener noreferrer", className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Abrir en nueva pestana", children: t.jsx(At, { className: "h-4 w-4 text-muted-foreground" }) }), t.jsx("button", { onClick: () => w(S.id), className: "p-2 rounded-lg hover:bg-red-500/10 transition-colors", title: "Eliminar", children: t.jsx(cc, { className: "h-4 w-4 text-red-400" }) })] })] }, S.id); }) }), p.length > 0 && !m && t.jsxs("button", { onClick: () => f(!0), className: "w-full p-4 border border-dashed border-border rounded-xl text-muted-foreground hover:border-solaria hover:text-solaria transition-colors flex items-center justify-center gap-2", children: [t.jsx(xt, { className: "h-5 w-5" }), "Agregar dirección"] }), m && t.jsxs("div", { className: "p-6 bg-card rounded-xl border border-border", children: [t.jsx("h3", { className: "font-medium mb-4", children: "Nueva Dirección" }), t.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Tipo" }), t.jsx("select", { value: x.type, onChange: S => b({ ...x, type: S.target.value }), className: "w-full p-2.5 bg-secondary rounded-lg border border-border text-sm", children: Object.entries(Ap).map(([S, { label: E }]) => t.jsx("option", { value: S, children: E }, S)) })] }), t.jsxs("div", { className: "md:col-span-2", children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "URL" }), t.jsx("input", { type: "url", value: x.url, onChange: S => b({ ...x, url: S.target.value }), placeholder: "https://...", className: "w-full p-2.5 bg-secondary rounded-lg border border-border text-sm" })] })] }), t.jsxs("div", { className: "flex justify-end gap-3", children: [t.jsx("button", { onClick: () => { f(!1), b({ type: "production", label: "", url: "" }); }, className: "px-4 py-2 text-sm text-muted-foreground hover:text-foreground", children: "Cancelar" }), t.jsx("button", { onClick: k, disabled: !x.url.trim() || u.isPending, className: "px-4 py-2 bg-solaria text-white rounded-lg text-sm hover:bg-solaria/90 disabled:opacity-50", children: u.isPending ? t.jsx(Ae, { className: "h-4 w-4 animate-spin" }) : "Guardar" })] })] })] }) : t.jsx("div", { className: "p-8 text-center text-muted-foreground", children: "Proyecto no encontrado" }); }
const S4 = ["React", "Vue", "Angular", "Next.js", "Nuxt", "Svelte", "Node.js", "Express", "Fastify", "NestJS", "Python", "Django", "FastAPI", "Flask", "TypeScript", "JavaScript", "Go", "Rust", "PHP", "Laravel", "PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Redis", "SQLite", "Docker", "Kubernetes", "AWS", "GCP", "Azure", "Vercel", "TailwindCSS", "Sass", "styled-components", "Payload CMS", "GraphQL", "REST API", "Drizzle ORM", "Prisma"], C4 = ["SAAS", "B2B", "B2C", "E-COMMERCE", "LANDING", "DASHBOARD", "REACT", "VUE", "MOBILE", "API", "CMS", "INTERNAL", "MVP", "PRODUCTION", "STAGING", "LEGACY", "MAINTENANCE"], k4 = [{ value: "planning", label: "Planificacion", color: "bg-violet-500" }, { value: "active", label: "En Desarrollo", color: "bg-solaria" }, { value: "paused", label: "Pausado", color: "bg-amber-500" }, { value: "completed", label: "Completado", color: "bg-emerald-500" }, { value: "cancelled", label: "Cancelado", color: "bg-red-500" }], A4 = [{ value: "critical", label: "Critica", color: "text-red-400" }, { value: "high", label: "Alta", color: "text-amber-400" }, { value: "medium", label: "Media", color: "text-blue-400" }, { value: "low", label: "Baja", color: "text-gray-400" }];
function T4() { const { id: l } = Fa(), n = yt(), { data: i, isLoading: c } = ir(Number(l)), u = Mu(), [m, f] = z.useState({ name: "", code: "", description: "", status: "planning", priority: "medium", budgetAllocated: 0, startDate: "", endDate: "", tags: [], stack: [], clientName: "", clientEmail: "", clientPhone: "" }), [x, b] = z.useState(!1), [N, v] = z.useState(!1), [p, j] = z.useState(""), [k, w] = z.useState(""); z.useEffect(() => { var A; if (i) {
    let L = [], y = [];
    try {
        typeof i.tags == "string" ? L = JSON.parse(i.tags) : Array.isArray(i.tags) && (L = i.tags);
    }
    catch { }
    try {
        typeof i.stack == "string" ? y = JSON.parse(i.stack) : Array.isArray(i.stack) && (y = i.stack);
    }
    catch { }
    f({ name: i.name || "", code: i.code || "", description: i.description || "", status: i.status || "planning", priority: i.priority || "medium", budgetAllocated: i.budgetAllocated || 0, startDate: i.startDate ? new Date(i.startDate).toISOString().split("T")[0] : "", endDate: i.endDate ? new Date(i.endDate).toISOString().split("T")[0] : "", tags: L, stack: y, clientName: ((A = i.client) == null ? void 0 : A.name) || "", clientEmail: "", clientPhone: "" });
} }, [i]); const S = (A, L) => { f(y => ({ ...y, [A]: L })), b(!0); }, E = () => { const A = p.trim().toUpperCase(); A && !m.tags.includes(A) && (f(L => ({ ...L, tags: [...L.tags, A] })), j(""), b(!0)); }, O = A => { f(L => ({ ...L, tags: L.tags.filter(y => y !== A) })), b(!0); }, D = () => { const A = k.trim(); A && !m.stack.includes(A) && (f(L => ({ ...L, stack: [...L.stack, A] })), w(""), b(!0)); }, q = A => { f(L => ({ ...L, stack: L.stack.filter(y => y !== A) })), b(!0); }, Z = async () => { await u.mutateAsync({ id: Number(l), data: { name: m.name, code: m.code, description: m.description, status: m.status, priority: m.priority, budgetAllocated: Number(m.budgetAllocated), startDate: m.startDate || void 0, endDate: m.endDate || void 0, tags: m.tags, stack: m.stack } }), b(!1); }; return c ? t.jsx("div", { className: "flex items-center justify-center min-h-[400px]", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : i ? t.jsxs("div", { className: "p-6 max-w-4xl mx-auto", children: [t.jsxs("div", { className: "flex items-center justify-between mb-8", children: [t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: () => n(`/projects/${l}`), className: "p-2 rounded-lg hover:bg-secondary transition-colors", children: t.jsx(Ns, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsxs("h1", { className: "text-2xl font-bold flex items-center gap-2", children: [t.jsx(rc, { className: "h-6 w-6" }), "Configuracion del Proyecto"] }), t.jsx("p", { className: "text-muted-foreground", children: i.name })] })] }), x && t.jsxs("button", { onClick: Z, disabled: u.isPending, className: "flex items-center gap-2 px-4 py-2 bg-solaria text-white rounded-lg hover:bg-solaria/90 disabled:opacity-50", children: [u.isPending ? t.jsx(Ae, { className: "h-4 w-4 animate-spin" }) : t.jsx(Au, { className: "h-4 w-4" }), "Guardar Cambios"] })] }), t.jsxs("div", { className: "space-y-6", children: [t.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [t.jsx("h2", { className: "text-lg font-semibold mb-4", children: "Informacion Basica" }), t.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Nombre del Proyecto" }), t.jsx("input", { type: "text", value: m.name, onChange: A => S("name", A.target.value), className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Codigo" }), t.jsx("input", { type: "text", value: m.code, onChange: A => S("code", A.target.value.toUpperCase()), maxLength: 5, className: "w-full p-3 bg-secondary rounded-lg border border-border uppercase font-mono" })] }), t.jsxs("div", { className: "md:col-span-2", children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Descripcion" }), t.jsx("textarea", { value: m.description, onChange: A => S("description", A.target.value), rows: 3, className: "w-full p-3 bg-secondary rounded-lg border border-border resize-none" })] })] })] }), t.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [t.jsx("h2", { className: "text-lg font-semibold mb-4", children: "Estado y Prioridad" }), t.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Estado" }), t.jsx("div", { className: "flex flex-wrap gap-2", children: k4.map(A => t.jsx("button", { onClick: () => S("status", A.value), className: Q("px-3 py-1.5 rounded-full text-sm font-medium transition-all", m.status === A.value ? `${A.color} text-white` : "bg-secondary text-muted-foreground hover:text-foreground"), children: A.label }, A.value)) })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Prioridad" }), t.jsx("div", { className: "flex flex-wrap gap-2", children: A4.map(A => t.jsx("button", { onClick: () => S("priority", A.value), className: Q("px-3 py-1.5 rounded-full text-sm font-medium transition-all border", m.priority === A.value ? `${A.color} border-current bg-current/10` : "border-border text-muted-foreground hover:text-foreground"), children: A.label }, A.value)) })] })] })] }), t.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [t.jsx("h2", { className: "text-lg font-semibold mb-4", children: "Presupuesto y Fechas" }), t.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Presupuesto ($)" }), t.jsx("input", { type: "number", value: m.budgetAllocated, onChange: A => S("budgetAllocated", Number(A.target.value)), min: 0, step: 1e3, className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Fecha de Inicio" }), t.jsx("input", { type: "date", value: m.startDate, onChange: A => S("startDate", A.target.value), className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Fecha Limite" }), t.jsx("input", { type: "date", value: m.endDate, onChange: A => S("endDate", A.target.value), className: "w-full p-3 bg-secondary rounded-lg border border-border" })] })] })] }), t.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [t.jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [t.jsx(ic, { className: "h-5 w-5 text-blue-400" }), "Etiquetas del Proyecto"] }), t.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [m.tags.map(A => t.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30", children: [A, t.jsx("button", { onClick: () => O(A), className: "p-0.5 hover:bg-blue-500/30 rounded-full transition-colors", children: t.jsx(os, { className: "h-3 w-3" }) })] }, A)), m.tags.length === 0 && t.jsx("span", { className: "text-sm text-muted-foreground", children: "Sin etiquetas" })] }), t.jsxs("div", { className: "flex gap-2 mb-4", children: [t.jsx("input", { type: "text", value: p, onChange: A => j(A.target.value.toUpperCase()), onKeyDown: A => A.key === "Enter" && (A.preventDefault(), E()), placeholder: "Nueva etiqueta...", className: "flex-1 p-2 bg-secondary rounded-lg border border-border text-sm uppercase" }), t.jsx("button", { onClick: E, disabled: !p.trim(), className: "p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed", children: t.jsx(xt, { className: "h-4 w-4" }) })] }), t.jsx("div", { className: "flex flex-wrap gap-1.5", children: C4.filter(A => !m.tags.includes(A)).slice(0, 10).map(A => t.jsxs("button", { onClick: () => { f(L => ({ ...L, tags: [...L.tags, A] })), b(!0); }, className: "px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors", children: ["+ ", A] }, A)) })] }), t.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [t.jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [t.jsx(W1, { className: "h-5 w-5 text-purple-400" }), "Stack Tecnico"] }), t.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [m.stack.map(A => t.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30", children: [A, t.jsx("button", { onClick: () => q(A), className: "p-0.5 hover:bg-purple-500/30 rounded-full transition-colors", children: t.jsx(os, { className: "h-3 w-3" }) })] }, A)), m.stack.length === 0 && t.jsx("span", { className: "text-sm text-muted-foreground", children: "Sin tecnologias definidas" })] }), t.jsxs("div", { className: "flex gap-2 mb-4", children: [t.jsx("input", { type: "text", value: k, onChange: A => w(A.target.value), onKeyDown: A => A.key === "Enter" && (A.preventDefault(), D()), placeholder: "Nueva tecnologia...", className: "flex-1 p-2 bg-secondary rounded-lg border border-border text-sm" }), t.jsx("button", { onClick: D, disabled: !k.trim(), className: "p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed", children: t.jsx(xt, { className: "h-4 w-4" }) })] }), t.jsx("div", { className: "flex flex-wrap gap-1.5", children: S4.filter(A => !m.stack.includes(A)).slice(0, 12).map(A => t.jsxs("button", { onClick: () => { f(L => ({ ...L, stack: [...L.stack, A] })), b(!0); }, className: "px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors", children: ["+ ", A] }, A)) })] }), t.jsxs("section", { className: "bg-card rounded-xl border border-border p-6", children: [t.jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [t.jsx(kg, { className: "h-5 w-5 text-emerald-400" }), "Informacion del Cliente"] }), t.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Nombre del Cliente/Empresa" }), t.jsx("input", { type: "text", value: m.clientName, onChange: A => S("clientName", A.target.value), placeholder: "Ej: SOLARIA Agency", className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Email de Contacto" }), t.jsx("input", { type: "email", value: m.clientEmail, onChange: A => S("clientEmail", A.target.value), placeholder: "cliente@ejemplo.com", className: "w-full p-3 bg-secondary rounded-lg border border-border" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-sm text-muted-foreground mb-2", children: "Telefono" }), t.jsx("input", { type: "tel", value: m.clientPhone, onChange: A => S("clientPhone", A.target.value), placeholder: "+52 555 123 4567", className: "w-full p-3 bg-secondary rounded-lg border border-border" })] })] })] }), t.jsxs("section", { className: "bg-card rounded-xl border border-red-500/20 p-6", children: [t.jsxs("h2", { className: "text-lg font-semibold text-red-400 mb-4 flex items-center gap-2", children: [t.jsx(Fn, { className: "h-5 w-5" }), "Zona de Peligro"] }), t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsxs("div", { children: [t.jsx("p", { className: "font-medium", children: "Eliminar Proyecto" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Esta accion no se puede deshacer. Se eliminaran todas las tareas asociadas." })] }), N ? t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("button", { onClick: () => v(!1), className: "px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground", children: "Cancelar" }), t.jsx("button", { className: "px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600", children: "Confirmar Eliminacion" })] }) : t.jsxs("button", { onClick: () => v(!0), className: "flex items-center gap-2 px-4 py-2 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors", children: [t.jsx(cc, { className: "h-4 w-4" }), "Eliminar"] })] })] })] })] }) : t.jsx("div", { className: "p-8 text-center text-muted-foreground", children: "Proyecto no encontrado" }); }
function E4({ sprints: l, onSprintClick: n }) { const [i, c] = z.useState(new Set), u = m => { const f = new Set(i); f.has(m) ? f.delete(m) : f.add(m), c(f); }; return t.jsx("div", { className: "space-y-2", children: l.map(m => { const f = i.has(m.id), x = m.status === "active", b = m.progress || 0; return t.jsxs("div", { className: "border border-border rounded-lg overflow-hidden bg-card", children: [t.jsxs("div", { className: Q("flex items-center gap-3 p-4 cursor-pointer transition-colors", x ? "bg-green-500/10" : "hover:bg-muted/50"), onClick: () => u(m.id), children: [t.jsx("button", { className: "p-0.5", children: f ? t.jsx(Ag, { className: "h-4 w-4" }) : t.jsx(Kl, { className: "h-4 w-4" }) }), t.jsx(st, { className: Q("h-5 w-5", x && "text-green-500 animate-pulse") }), t.jsxs("div", { className: "flex-1", children: [t.jsx("h3", { className: "font-semibold", children: m.name }), m.goal && t.jsx("p", { className: "text-sm text-muted-foreground truncate", children: m.goal })] }), t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsxs("span", { className: "text-xs text-muted-foreground", children: [m.epicsTotal || 0, " epics · ", m.tasksCompleted || 0, "/", m.tasksTotal || 0, " tasks"] }), t.jsx("div", { className: "w-24 h-2 bg-muted rounded-full overflow-hidden", children: t.jsx("div", { className: Q("h-full transition-all", b === 100 ? "bg-green-500" : "bg-blue-500"), style: { width: `${b}%` } }) }), t.jsxs("span", { className: "text-sm font-medium w-12 text-right", children: [b, "%"] })] }), t.jsx("span", { className: Q("text-xs px-2 py-1 rounded-full", x ? "bg-green-500/20 text-green-400" : "bg-muted text-muted-foreground"), children: m.status })] }), f && t.jsx("div", { className: "border-t border-border bg-muted/30 p-4", children: t.jsx("button", { onClick: () => n == null ? void 0 : n(m.id), className: "text-sm text-solaria hover:underline", children: "Ver detalles completos →" }) })] }, m.id); }) }); }
function D4({ months: l }) { return t.jsxs("div", { className: "flex border-b border-border bg-muted/30 sticky top-0 z-10", children: [t.jsx("div", { className: "w-64 flex-shrink-0 p-3 border-r border-border font-medium text-sm", children: "Elementos" }), t.jsx("div", { className: "flex-1 flex", children: l.map((n, i) => t.jsx("div", { className: "border-r border-border p-2 text-xs font-medium text-muted-foreground text-center", style: { width: `${n.width}px`, minWidth: `${n.width}px` }, children: n.label }, i)) })] }); }
function Tp({ item: l, type: n, startDate: i, endDate: c, timelineStart: u, dayWidth: m, onClick: f }) { if (!i || !c)
    return t.jsxs("div", { className: "flex border-b border-border hover:bg-muted/30 transition-colors", children: [t.jsxs("div", { onClick: f, className: "w-64 flex-shrink-0 p-3 border-r border-border flex items-center gap-2 cursor-pointer", children: [n === "epic" ? t.jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: l.color || "#6366f1" } }) : t.jsx(st, { className: "h-3 w-3 text-green-400" }), t.jsx("span", { className: "text-sm truncate", children: l.name }), t.jsx("span", { className: Q("text-[10px] px-1 py-0.5 rounded ml-auto", l.status === "completed" || l.status === "active" ? "bg-green-500/20 text-green-400" : l.status === "in_progress" ? "bg-purple-500/20 text-purple-400" : "bg-gray-500/20 text-gray-400"), children: l.status })] }), t.jsx("div", { className: "flex-1 p-3 flex items-center", children: t.jsx("span", { className: "text-xs text-muted-foreground italic", children: "Sin fechas definidas" }) })] }); const x = Math.max(0, (i.getTime() - u.getTime()) / (1e3 * 60 * 60 * 24)), b = Math.max(1, (c.getTime() - i.getTime()) / (1e3 * 60 * 60 * 24)), N = x * m, v = b * m, p = l.status === "active" || l.status === "in_progress", j = l.status === "completed"; return t.jsxs("div", { className: "flex border-b border-border hover:bg-muted/30 transition-colors", children: [t.jsxs("div", { onClick: f, className: "w-64 flex-shrink-0 p-3 border-r border-border flex items-center gap-2 cursor-pointer", children: [n === "epic" ? t.jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: l.color || "#6366f1" } }) : t.jsx(st, { className: Q("h-3 w-3", p ? "text-green-400 animate-pulse" : "text-muted-foreground") }), t.jsx("span", { className: "text-sm truncate flex-1", children: l.name }), p && t.jsx("span", { className: Q("text-[10px] px-1.5 py-0.5 rounded text-white font-medium", n === "epic" ? "bg-purple-500" : "bg-green-500"), children: "ACTIVO" })] }), t.jsxs("div", { className: "flex-1 relative h-12 overflow-hidden", children: [t.jsx("div", { className: "absolute top-0 bottom-0 w-0.5 bg-red-500 z-10", style: { left: `${(Date.now() - u.getTime()) / (1e3 * 60 * 60 * 24) * m}px` } }), t.jsx("div", { onClick: f, className: Q("absolute top-2 h-8 rounded-md cursor-pointer transition-all hover:ring-2 hover:ring-offset-2", n === "epic" ? j ? "bg-purple-300 dark:bg-purple-800" : p ? "bg-purple-500" : "bg-purple-500/50" : j ? "bg-green-300 dark:bg-green-800" : p ? "bg-green-500" : "bg-green-500/50", p && "ring-2 ring-offset-1", n === "epic" ? "hover:ring-purple-400" : "hover:ring-green-400"), style: { left: `${N}px`, width: `${Math.max(v, 4)}px` }, children: t.jsx("div", { className: "px-2 py-1 text-[10px] text-white font-medium truncate", children: v > 60 ? l.name : "" }) })] })] }); }
function M4() { const { id: l } = Fa(), n = yt(), i = Number(l), [c, u] = z.useState("all"), [m, f] = z.useState("timeline"), [x, b] = z.useState(null), [N, v] = z.useState(null), { data: p, isLoading: j, error: k } = ir(i), { data: w = [] } = ab(i), { data: S = [] } = lb(i), { timelineStart: E, months: O, dayWidth: D } = z.useMemo(() => { const y = []; w.forEach(le => { le.startDate && y.push(new Date(le.startDate)), le.targetDate && y.push(new Date(le.targetDate)); }), S.forEach(le => { le.startDate && y.push(new Date(le.startDate)), le.endDate && y.push(new Date(le.endDate)); }); let M = new Date, J = new Date; y.length > 0 && (M = new Date(Math.min(...y.map(le => le.getTime()))), J = new Date(Math.max(...y.map(le => le.getTime())))), M.setMonth(M.getMonth() - 1), M.setDate(1), J.setMonth(J.getMonth() + 2), J.setDate(0); const de = [], fe = new Date(M), I = 8; for (; fe <= J;) {
    const le = fe.getFullYear(), ee = fe.getMonth(), ue = new Date(le, ee + 1, 0).getDate();
    de.push({ label: fe.toLocaleDateString("es-ES", { month: "short", year: "2-digit" }), width: ue * I }), fe.setMonth(fe.getMonth() + 1);
} return { timelineStart: M, timelineEnd: J, months: de, dayWidth: I }; }, [w, S]), q = c === "sprints" ? [] : w, Z = c === "epics" ? [] : S, A = [...q].sort((y, M) => !y.startDate && !M.startDate ? 0 : y.startDate ? M.startDate ? new Date(y.startDate).getTime() - new Date(M.startDate).getTime() : -1 : 1), L = [...Z].sort((y, M) => !y.startDate && !M.startDate ? 0 : y.startDate ? M.startDate ? new Date(y.startDate).getTime() - new Date(M.startDate).getTime() : -1 : 1); return j ? t.jsx("div", { className: "flex items-center justify-center h-64", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-solaria" }) }) : k || !p ? t.jsxs("div", { className: "flex flex-col items-center justify-center h-64 gap-4", children: [t.jsx(ht, { className: "h-12 w-12 text-red-500" }), t.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Proyecto no encontrado" }), t.jsxs("button", { onClick: () => n("/projects"), className: "px-4 py-2 rounded-lg bg-solaria text-white flex items-center gap-2", children: [t.jsx(Ns, { className: "h-4 w-4" }), "Volver a Proyectos"] })] }) : t.jsxs("div", { className: "p-4 sm:p-6 space-y-4", children: [t.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-4", children: [t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: () => n(`/projects/${i}`), className: "p-2 rounded-lg hover:bg-secondary transition-colors", title: "Volver al proyecto", children: t.jsx(Ns, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsxs("h1", { className: "text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2", children: [t.jsx(gt, { className: "h-6 w-6 text-solaria" }), "Roadmap"] }), t.jsx("p", { className: "text-sm text-muted-foreground", children: p.name })] })] }), t.jsxs("div", { className: "flex items-center gap-2 bg-secondary rounded-lg p-1", children: [t.jsx("button", { onClick: () => u("all"), className: Q("px-3 py-1.5 rounded-md text-sm font-medium transition-colors", c === "all" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"), children: "Todos" }), t.jsxs("button", { onClick: () => u("epics"), className: Q("px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5", c === "epics" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"), children: [t.jsx(cs, { className: "h-3 w-3" }), "Epics"] }), t.jsxs("button", { onClick: () => u("sprints"), className: Q("px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5", c === "sprints" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"), children: [t.jsx(st, { className: "h-3 w-3" }), "Sprints"] })] })] }), t.jsxs("div", { className: "flex items-center gap-2 bg-secondary rounded-lg p-1 w-fit", children: [t.jsx("button", { onClick: () => f("timeline"), className: Q("px-3 py-1.5 rounded-md text-sm font-medium transition-colors", m === "timeline" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"), children: "Timeline" }), t.jsx("button", { onClick: () => f("hierarchy"), className: Q("px-3 py-1.5 rounded-md text-sm font-medium transition-colors", m === "hierarchy" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"), children: "Jerarquía" })] }), m === "timeline" ? t.jsx("div", { className: "bg-card rounded-xl border border-border overflow-hidden", children: t.jsx("div", { className: "overflow-x-auto", children: t.jsxs("div", { style: { minWidth: "800px" }, children: [t.jsx(D4, { months: O }), A.length > 0 && t.jsxs(t.Fragment, { children: [t.jsxs("div", { className: "flex bg-muted/50 border-b border-border", children: [t.jsxs("div", { className: "w-64 flex-shrink-0 p-2 px-3 border-r border-border flex items-center gap-2", children: [t.jsx(cs, { className: "h-4 w-4 text-purple-400" }), t.jsx("span", { className: "text-xs font-semibold uppercase text-muted-foreground", children: "Epics" }), t.jsx("span", { className: "text-xs text-muted-foreground ml-auto", children: A.length })] }), t.jsx("div", { className: "flex-1" })] }), A.map(y => t.jsx(Tp, { item: y, type: "epic", startDate: y.startDate ? new Date(y.startDate) : null, endDate: y.targetDate ? new Date(y.targetDate) : null, timelineStart: E, dayWidth: D, onClick: () => b(y.id) }, `epic-${y.id}`))] }), L.length > 0 && t.jsxs(t.Fragment, { children: [t.jsxs("div", { className: "flex bg-muted/50 border-b border-border", children: [t.jsxs("div", { className: "w-64 flex-shrink-0 p-2 px-3 border-r border-border flex items-center gap-2", children: [t.jsx(st, { className: "h-4 w-4 text-green-400" }), t.jsx("span", { className: "text-xs font-semibold uppercase text-muted-foreground", children: "Sprints" }), t.jsx("span", { className: "text-xs text-muted-foreground ml-auto", children: L.length })] }), t.jsx("div", { className: "flex-1" })] }), L.map(y => t.jsx(Tp, { item: y, type: "sprint", startDate: y.startDate ? new Date(y.startDate) : null, endDate: y.endDate ? new Date(y.endDate) : null, timelineStart: E, dayWidth: D, onClick: () => v(y.id) }, `sprint-${y.id}`))] }), A.length === 0 && L.length === 0 && t.jsxs("div", { className: "p-8 text-center text-muted-foreground", children: [t.jsx(gt, { className: "h-12 w-12 mx-auto mb-3 opacity-50" }), t.jsx("p", { children: "No hay elementos para mostrar en el timeline" }), t.jsx("p", { className: "text-sm mt-1", children: "Crea epics y sprints con fechas para visualizarlos aquí" })] })] }) }) }) : t.jsx("div", { className: "bg-card rounded-xl border border-border p-4", children: t.jsx(E4, { sprints: L, onSprintClick: y => v(y) }) }), t.jsxs("div", { className: "flex items-center gap-6 text-xs text-muted-foreground", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-0.5 h-4 bg-red-500" }), t.jsx("span", { children: "Hoy" })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-3 rounded-sm bg-purple-500" }), t.jsx("span", { children: "Epic Activo" })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-3 rounded-sm bg-green-500" }), t.jsx("span", { children: "Sprint Activo" })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-3 rounded-sm bg-gray-400/50" }), t.jsx("span", { children: "Planificado/Completado" })] })] }), t.jsx(rb, { epicId: x, isOpen: x !== null, onClose: () => b(null) }), t.jsx(ib, { sprintId: N, isOpen: N !== null, onClose: () => v(null) })] }); }
const Ep = { critical: { color: "text-red-500", bg: "bg-red-500/10", label: "Critica" }, high: { color: "text-orange-500", bg: "bg-orange-500/10", label: "Alta" }, medium: { color: "text-yellow-500", bg: "bg-yellow-500/10", label: "Media" }, low: { color: "text-green-500", bg: "bg-green-500/10", label: "Baja" } }, Dp = { feature: { color: "text-purple-500", bg: "bg-purple-500/10", label: "Feature" }, bug: { color: "text-red-500", bg: "bg-red-500/10", label: "Bug" }, enhancement: { color: "text-blue-500", bg: "bg-blue-500/10", label: "Mejora" }, documentation: { color: "text-gray-500", bg: "bg-gray-500/10", label: "Docs" }, research: { color: "text-cyan-500", bg: "bg-cyan-500/10", label: "Research" }, maintenance: { color: "text-amber-500", bg: "bg-amber-500/10", label: "Maint." } };
function O4({ task: l, onClick: n, showProject: i = !1, compact: c = !1 }) { const u = Ep[l.priority] || Ep.medium, m = Dp[l.type] || Dp.feature, f = l.itemsTotal || 0, x = l.itemsCompleted || 0, b = f > 0 ? Math.round(x / f * 100) : 0, N = l.dueDate && new Date(l.dueDate) < new Date && l.status !== "completed"; return c ? t.jsxs("div", { onClick: n, className: "task-card-compact", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [t.jsx("span", { className: Q("task-badge", m.bg, m.color), children: m.label }), t.jsx("span", { className: "task-code", children: l.taskCode || `#${l.taskNumber}` })] }), t.jsx("div", { className: "task-title-compact", children: l.title }), f > 0 && t.jsxs("div", { className: "task-progress-mini", children: [t.jsx("div", { className: "task-progress-bar-mini", children: t.jsx("div", { className: "task-progress-fill-mini", style: { width: `${b}%` } }) }), t.jsxs("span", { className: "task-progress-text-mini", children: [x, "/", f] })] })] }) : t.jsxs("div", { onClick: n, className: Q("task-card", l.status === "blocked" && "blocked", N && "overdue"), children: [t.jsxs("div", { className: "task-card-header", children: [t.jsxs("div", { className: "task-badges", children: [t.jsx("span", { className: Q("task-badge", m.bg, m.color), children: m.label }), t.jsxs("span", { className: Q("task-badge", u.bg, u.color), children: [t.jsx(Mg, { className: "h-3 w-3" }), u.label] })] }), t.jsx("span", { className: "task-code", children: l.taskCode || `#${l.taskNumber}` })] }), i && l.projectName && t.jsx("div", { className: "task-project-label", children: l.projectCode || l.projectName }), t.jsx("h4", { className: "task-card-title", children: l.title }), l.description && t.jsx("p", { className: "task-card-description", children: l.description }), f > 0 && t.jsxs("div", { className: "task-items-progress", children: [t.jsxs("div", { className: "flex items-center justify-between mb-1", children: [t.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [t.jsx(Le, { className: "h-3 w-3" }), "Subtareas"] }), t.jsxs("span", { className: "text-xs font-medium", children: [x, "/", f] })] }), t.jsx("div", { className: "task-progress-bar", children: t.jsx("div", { className: Q("task-progress-fill", b === 100 && "complete"), style: { width: `${b}%` } }) })] }), t.jsxs("div", { className: "task-card-footer", children: [l.dueDate && t.jsxs("div", { className: Q("task-meta", N && "text-red-500"), children: [t.jsx(gt, { className: "h-3 w-3" }), t.jsx("span", { children: Qe(l.dueDate) })] }), l.estimatedHours && t.jsxs("div", { className: "task-meta", children: [t.jsx(De, { className: "h-3 w-3" }), t.jsxs("span", { children: [l.estimatedHours, "h"] })] }), l.notes && t.jsx("div", { className: "task-meta", children: t.jsx(Bg, { className: "h-3 w-3" }) }), t.jsx("div", { className: "flex-1" }), l.agentName && t.jsxs("div", { className: "task-assignee", children: [t.jsx("div", { className: "task-assignee-avatar", children: t.jsx(Qs, { className: "h-3 w-3" }) }), t.jsx("span", { className: "task-assignee-name", children: l.agentName.split("-").pop() })] }), l.status === "blocked" && t.jsxs("div", { className: "task-blocked-badge", children: [t.jsx(ht, { className: "h-3 w-3" }), "Bloqueado"] })] })] }); }
const Kd = { pending: { label: "Pendiente", color: "text-gray-500", bg: "bg-gray-500/10" }, in_progress: { label: "En Progreso", color: "text-blue-500", bg: "bg-blue-500/10" }, review: { label: "En Revision", color: "text-purple-500", bg: "bg-purple-500/10" }, completed: { label: "Completada", color: "text-green-500", bg: "bg-green-500/10" }, blocked: { label: "Bloqueada", color: "text-red-500", bg: "bg-red-500/10" } }, Mp = { critical: { label: "Critica", color: "text-red-500", bg: "bg-red-500/10" }, high: { label: "Alta", color: "text-orange-500", bg: "bg-orange-500/10" }, medium: { label: "Media", color: "text-yellow-500", bg: "bg-yellow-500/10" }, low: { label: "Baja", color: "text-green-500", bg: "bg-green-500/10" } }, Op = { feature: { label: "Feature", color: "text-purple-500", bg: "bg-purple-500/10" }, bug: { label: "Bug", color: "text-red-500", bg: "bg-red-500/10" }, enhancement: { label: "Mejora", color: "text-blue-500", bg: "bg-blue-500/10" }, documentation: { label: "Documentacion", color: "text-gray-500", bg: "bg-gray-500/10" }, research: { label: "Investigacion", color: "text-cyan-500", bg: "bg-cyan-500/10" }, maintenance: { label: "Mantenimiento", color: "text-amber-500", bg: "bg-amber-500/10" } };
function _4({ taskId: l, isOpen: n, onClose: i, onNavigateToProject: c }) { const { data: u, isLoading: m } = eb(l || 0), f = u2(), [x, b] = z.useState(!1), [N, v] = z.useState(""), [p, j] = z.useState(""); if (!n)
    return null; const k = () => { u && (v(u.notes || ""), j(u.status), b(!0)); }, w = async () => { u && (await f.mutateAsync({ id: u.id, data: { notes: N, status: p || void 0 } }), b(!1)); }, S = async (y) => { u && await f.mutateAsync({ id: u.id, data: { status: y } }); }, E = u ? Kd[u.status] : Kd.pending, O = u ? Mp[u.priority] : Mp.medium, D = u ? Op[u.type] : Op.feature, q = (u == null ? void 0 : u.dueDate) && new Date(u.dueDate) < new Date && u.status !== "completed", Z = (u == null ? void 0 : u.itemsTotal) || 0, A = (u == null ? void 0 : u.itemsCompleted) || 0, L = Z > 0 ? Math.round(A / Z * 100) : (u == null ? void 0 : u.progress) || 0; return t.jsxs("div", { className: "drawer-container", children: [t.jsx("div", { className: Q("drawer-overlay", n && "active"), onClick: i }), t.jsx("div", { className: Q("drawer-panel max-w-xl", n && "active"), children: m ? t.jsx("div", { className: "flex items-center justify-center h-full", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : u ? t.jsxs(t.Fragment, { children: [t.jsxs("div", { className: "drawer-header", children: [t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [t.jsx("span", { className: Q("task-badge", D.bg, D.color), children: D.label }), t.jsx("span", { className: "task-code", children: u.taskCode || `#${u.taskNumber}` })] }), t.jsx("h2", { className: "drawer-title", children: u.title }), u.projectName && t.jsxs("button", { onClick: () => c == null ? void 0 : c(u.projectId), className: "drawer-subtitle flex items-center gap-1 hover:text-primary transition-colors", children: [u.projectCode || u.projectName, t.jsx(At, { className: "h-3 w-3" })] })] }), t.jsx("button", { onClick: i, className: "drawer-close", children: t.jsx(os, { className: "h-5 w-5" }) })] }), t.jsxs("div", { className: "drawer-content", children: [t.jsxs("div", { className: "task-detail-section", children: [t.jsxs("div", { className: "task-detail-row", children: [t.jsxs("div", { className: "task-detail-label", children: [t.jsx(Le, { className: "h-4 w-4" }), "Estado"] }), t.jsx("div", { className: "task-detail-value", children: x ? t.jsx("select", { value: p, onChange: y => j(y.target.value), className: "task-detail-select", children: Object.entries(Kd).map(([y, M]) => t.jsx("option", { value: y, children: M.label }, y)) }) : t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("span", { className: Q("status-badge", E.bg, E.color), children: E.label }), t.jsxs("div", { className: "task-status-actions", children: [u.status === "pending" && t.jsx("button", { onClick: () => S("in_progress"), className: "status-action-btn in_progress", children: "Iniciar" }), u.status === "in_progress" && t.jsxs(t.Fragment, { children: [t.jsx("button", { onClick: () => S("review"), className: "status-action-btn review", children: "A Revision" }), t.jsx("button", { onClick: () => S("completed"), className: "status-action-btn completed", children: "Completar" })] }), u.status === "review" && t.jsx("button", { onClick: () => S("completed"), className: "status-action-btn completed", children: "Aprobar" })] })] }) })] }), t.jsxs("div", { className: "task-detail-row", children: [t.jsxs("div", { className: "task-detail-label", children: [t.jsx(Mg, { className: "h-4 w-4" }), "Prioridad"] }), t.jsx("div", { className: "task-detail-value", children: t.jsx("span", { className: Q("priority-badge", O.bg, O.color), children: O.label }) })] }), u.agentName && t.jsxs("div", { className: "task-detail-row", children: [t.jsxs("div", { className: "task-detail-label", children: [t.jsx(Qs, { className: "h-4 w-4" }), "Asignado"] }), t.jsx("div", { className: "task-detail-value", children: t.jsxs("div", { className: "task-assignee-full", children: [t.jsx("div", { className: "task-assignee-avatar-lg", children: t.jsx(Qs, { className: "h-4 w-4" }) }), t.jsx("span", { children: u.agentName })] }) })] }), u.dueDate && t.jsxs("div", { className: "task-detail-row", children: [t.jsxs("div", { className: "task-detail-label", children: [t.jsx(gt, { className: "h-4 w-4" }), "Fecha limite"] }), t.jsxs("div", { className: Q("task-detail-value", q && "text-red-500"), children: [ts(u.dueDate), q && t.jsxs("span", { className: "ml-2 text-xs", children: [t.jsx(ht, { className: "h-3 w-3 inline" }), " Vencida"] })] })] }), (u.estimatedHours || u.actualHours) && t.jsxs("div", { className: "task-detail-row", children: [t.jsxs("div", { className: "task-detail-label", children: [t.jsx(De, { className: "h-4 w-4" }), "Tiempo"] }), t.jsx("div", { className: "task-detail-value", children: u.actualHours ? t.jsxs("span", { children: [u.actualHours, "h / ", u.estimatedHours, "h est."] }) : t.jsxs("span", { children: [u.estimatedHours, "h estimadas"] }) })] })] }), t.jsxs("div", { className: "task-detail-section", children: [t.jsxs("div", { className: "task-detail-section-title", children: [t.jsx(ic, { className: "h-4 w-4" }), "Progreso"] }), t.jsxs("div", { className: "task-progress-display", children: [t.jsx("div", { className: "task-progress-bar-lg", children: t.jsx("div", { className: Q("task-progress-fill-lg", L === 100 && "complete"), style: { width: `${L}%` } }) }), t.jsxs("span", { className: "task-progress-label", children: [L, "%"] })] })] }), u.description && t.jsxs("div", { className: "task-detail-section", children: [t.jsxs("div", { className: "task-detail-section-title", children: [t.jsx(Dg, { className: "h-4 w-4" }), "Descripcion"] }), t.jsx("p", { className: "task-description-full", children: u.description })] }), t.jsx("div", { className: "task-detail-section", children: t.jsx(Uu, { taskId: u.id, editable: u.status !== "completed", showAddForm: u.status !== "completed" }) }), t.jsxs("div", { className: "task-detail-section", children: [t.jsxs("div", { className: "task-detail-section-header", children: [t.jsxs("div", { className: "task-detail-section-title", children: [t.jsx(Bg, { className: "h-4 w-4" }), "Notas"] }), !x && t.jsxs("button", { onClick: k, className: "edit-btn", children: [t.jsx(rN, { className: "h-3 w-3" }), "Editar"] })] }), x ? t.jsxs("div", { className: "task-notes-edit", children: [t.jsx("textarea", { value: N, onChange: y => v(y.target.value), placeholder: "Agregar notas...", className: "task-notes-textarea", rows: 4 }), t.jsxs("div", { className: "task-notes-actions", children: [t.jsx("button", { onClick: () => b(!1), className: "cancel-btn", children: "Cancelar" }), t.jsx("button", { onClick: w, disabled: f.isPending, className: "save-btn", children: f.isPending ? t.jsx(Ae, { className: "h-4 w-4 animate-spin" }) : t.jsxs(t.Fragment, { children: [t.jsx(Au, { className: "h-3 w-3" }), "Guardar"] }) })] })] }) : u.notes ? t.jsx("p", { className: "task-notes-content", children: u.notes }) : t.jsx("p", { className: "task-notes-empty", children: "Sin notas" })] }), t.jsxs("div", { className: "task-detail-meta", children: [t.jsxs("span", { children: ["Creada ", Qe(u.createdAt)] }), t.jsx("span", { className: "meta-separator", children: "•" }), t.jsxs("span", { children: ["Actualizada ", Qe(u.updatedAt)] }), u.completedAt && t.jsxs(t.Fragment, { children: [t.jsx("span", { className: "meta-separator", children: "•" }), t.jsxs("span", { className: "text-green-500", children: ["Completada ", Qe(u.completedAt)] })] })] })] })] }) : t.jsx("div", { className: "flex items-center justify-center h-full text-muted-foreground", children: "Tarea no encontrada" }) })] }); }
const z4 = { pending: "gantt-bar-pending", in_progress: "gantt-bar-in_progress", review: "gantt-bar-review", completed: "gantt-bar-completed", blocked: "gantt-bar-blocked" };
function R4({ task: l, startDate: n, endDate: i, onClick: c }) { const u = l.createdAt ? new Date(l.createdAt) : n, m = l.dueDate ? new Date(l.dueDate) : new Date(u.getTime() + 10080 * 60 * 1e3), f = n.getTime(), x = i.getTime(), b = x - f, N = Math.max(u.getTime(), f), v = Math.min(m.getTime(), x), p = (N - f) / b * 100, j = (v - N) / b * 100; if (j <= 0 || p >= 100)
    return t.jsxs("div", { className: "gantt-row", onClick: c, children: [t.jsxs("div", { className: "gantt-row-info", children: [t.jsx("span", { className: "gantt-task-code", children: l.taskCode || `#${l.taskNumber}` }), t.jsx("span", { className: "gantt-task-title", children: l.title })] }), t.jsx("div", { className: "gantt-row-timeline", children: t.jsx("div", { className: "gantt-bar-empty", children: "Fuera del rango visible" }) })] }); const k = l.progress || 0, w = l.dueDate && new Date(l.dueDate) < new Date && l.status !== "completed"; return t.jsxs("div", { className: Q("gantt-row", c && "clickable"), onClick: c, children: [t.jsxs("div", { className: "gantt-row-info", children: [t.jsx("span", { className: "gantt-task-code", children: l.taskCode || `#${l.taskNumber}` }), t.jsx("span", { className: "gantt-task-title", children: l.title }), l.agentName && t.jsxs("span", { className: "gantt-task-agent", children: [t.jsx(Qs, { className: "h-3 w-3" }), l.agentName.split("-").pop()] })] }), t.jsx("div", { className: "gantt-row-timeline", children: t.jsxs("div", { className: Q("gantt-bar", z4[l.status], w && "overdue"), style: { left: `${Math.max(0, p)}%`, width: `${Math.min(j, 100 - p)}%` }, children: [t.jsx("div", { className: "gantt-bar-progress", style: { width: `${k}%` } }), t.jsxs("div", { className: "gantt-bar-content", children: [j > 10 && t.jsx("span", { className: "gantt-bar-label", children: l.title.length > 20 ? l.title.substring(0, 20) + "..." : l.title }), w && t.jsx(ht, { className: "h-3 w-3 text-red-500" })] })] }) })] }); }
function B4(l) { const n = new Date(Date.UTC(l.getFullYear(), l.getMonth(), l.getDate())), i = n.getUTCDay() || 7; n.setUTCDate(n.getUTCDate() + 4 - i); const c = new Date(Date.UTC(n.getUTCFullYear(), 0, 1)); return Math.ceil(((n.getTime() - c.getTime()) / 864e5 + 1) / 7); }
function Yd(l) { const n = l.getDate(), i = l.toLocaleDateString("es", { month: "short" }); return `${n} ${i}`; }
function q4({ tasks: l, onTaskClick: n, weeksToShow: i = 8 }) { const [c, u] = z.useState(0), { startDate: m, endDate: f, weeks: x } = z.useMemo(() => { const k = new Date, w = k.getDay(), S = w === 0 ? -6 : 1 - w, E = new Date(k); E.setDate(k.getDate() + S + c * 7), E.setHours(0, 0, 0, 0); const O = new Date(E); O.setDate(E.getDate() + i * 7); const D = []; for (let q = 0; q < i; q++) {
    const Z = new Date(E);
    Z.setDate(E.getDate() + q * 7), D.push({ start: Z, label: Yd(Z), weekNum: B4(Z) });
} return { startDate: E, endDate: O, weeks: D }; }, [c, i]), b = z.useMemo(() => { const k = new Date, w = m.getTime(), S = f.getTime(), E = k.getTime(); return E < w || E > S ? null : (E - w) / (S - w) * 100; }, [m, f]), N = z.useMemo(() => [...l].sort((k, w) => { const S = k.createdAt ? new Date(k.createdAt).getTime() : 0, E = w.createdAt ? new Date(w.createdAt).getTime() : 0; return S - E; }), [l]), v = () => u(c - i), p = () => u(c + i), j = () => u(0); return t.jsxs("div", { className: "gantt-container", children: [t.jsxs("div", { className: "gantt-nav", children: [t.jsxs("div", { className: "gantt-nav-buttons", children: [t.jsx("button", { onClick: v, className: "gantt-nav-btn", children: t.jsx(Tg, { className: "h-4 w-4" }) }), t.jsxs("button", { onClick: j, className: "gantt-nav-btn today", children: [t.jsx(gt, { className: "h-4 w-4" }), "Hoy"] }), t.jsx("button", { onClick: p, className: "gantt-nav-btn", children: t.jsx(Kl, { className: "h-4 w-4" }) })] }), t.jsxs("div", { className: "gantt-date-range", children: [Yd(m), " - ", Yd(f)] })] }), t.jsxs("div", { className: "gantt-header", children: [t.jsx("div", { className: "gantt-header-info", children: "Tarea" }), t.jsx("div", { className: "gantt-header-timeline", children: x.map((k, w) => t.jsxs("div", { className: "gantt-week-column", style: { width: `${100 / i}%` }, children: [t.jsx("div", { className: "gantt-week-label", children: k.label }), t.jsxs("div", { className: "gantt-week-number", children: ["S", k.weekNum] })] }, w)) })] }), t.jsxs("div", { className: "gantt-body", children: [b !== null && t.jsx("div", { className: "gantt-today-marker", style: { left: `calc(200px + ${b}% * (100% - 200px) / 100)` }, children: t.jsx("div", { className: "gantt-today-label", children: "Hoy" }) }), t.jsx("div", { className: "gantt-grid", children: x.map((k, w) => t.jsx("div", { className: "gantt-grid-line", style: { left: `calc(200px + ${w / i * 100}% * (100% - 200px) / 100)` } }, w)) }), N.length > 0 ? N.map(k => t.jsx(R4, { task: k, startDate: m, endDate: f, onClick: () => n == null ? void 0 : n(k) }, k.id)) : t.jsxs("div", { className: "gantt-empty", children: [t.jsx(gt, { className: "h-12 w-12 text-muted-foreground/50" }), t.jsx("p", { children: "No hay tareas para mostrar en el Gantt" })] })] }), t.jsxs("div", { className: "gantt-legend", children: [t.jsxs("div", { className: "gantt-legend-item", children: [t.jsx("div", { className: "gantt-legend-color pending" }), t.jsx("span", { children: "Pendiente" })] }), t.jsxs("div", { className: "gantt-legend-item", children: [t.jsx("div", { className: "gantt-legend-color in_progress" }), t.jsx("span", { children: "En Progreso" })] }), t.jsxs("div", { className: "gantt-legend-item", children: [t.jsx("div", { className: "gantt-legend-color review" }), t.jsx("span", { children: "En Revision" })] }), t.jsxs("div", { className: "gantt-legend-item", children: [t.jsx("div", { className: "gantt-legend-color completed" }), t.jsx("span", { children: "Completada" })] }), t.jsxs("div", { className: "gantt-legend-item", children: [t.jsx("div", { className: "gantt-legend-color blocked" }), t.jsx("span", { children: "Bloqueada" })] })] })] }); }
const Xd = [{ id: "pending", label: "Pendiente", color: "border-t-yellow-500", icon: De }, { id: "in_progress", label: "En Progreso", color: "border-t-blue-500", icon: Ae }, { id: "review", label: "Revision", color: "border-t-purple-500", icon: ms }, { id: "completed", label: "Completado", color: "border-t-green-500", icon: Le }, { id: "blocked", label: "Bloqueado", color: "border-t-red-500", icon: ht }];
function L4({ column: l, tasks: n, onTaskClick: i }) { const c = l.icon; return t.jsxs("div", { className: "kanban-column", children: [t.jsxs("div", { className: Q("kanban-column-header", l.color), children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx(c, { className: Q("h-4 w-4", l.id === "in_progress" && "animate-spin") }), t.jsx("h3", { className: "font-medium", children: l.label })] }), t.jsx("span", { className: "kanban-column-count", children: n.length })] }), t.jsxs("div", { className: "kanban-column-body", children: [n.map(u => t.jsx(O4, { task: u, onClick: () => i(u), compact: !0 }, u.id)), n.length === 0 && t.jsx("div", { className: "kanban-empty", children: t.jsx("span", { children: "Sin tareas" }) })] })] }); }
function U4({ tasks: l, onTaskClick: n }) { return t.jsx("div", { className: "list-table-container", children: t.jsxs("table", { className: "list-table", children: [t.jsx("thead", { children: t.jsxs("tr", { children: [t.jsx("th", { children: "Tarea" }), t.jsx("th", { children: "Proyecto" }), t.jsx("th", { children: "Estado" }), t.jsx("th", { children: "Prioridad" }), t.jsx("th", { children: "Progreso" }), t.jsx("th", { children: "Subtareas" }), t.jsx("th", { children: "Actualizado" })] }) }), t.jsx("tbody", { children: l.map(i => t.jsxs("tr", { onClick: () => n(i), className: "cursor-pointer", children: [t.jsx("td", { children: t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("span", { className: "text-xs font-mono text-muted-foreground", children: i.taskCode || `#${i.taskNumber}` }), t.jsx("span", { className: "font-medium", children: i.title })] }) }), t.jsx("td", { className: "text-muted-foreground", children: i.projectCode || i.projectName }), t.jsx("td", { children: t.jsx("span", { className: Q("status-badge", Ig(i.status)), children: i.status.replace("_", " ") }) }), t.jsx("td", { children: t.jsx("span", { className: Q("priority-badge", a2(i.priority)), children: i.priority }) }), t.jsx("td", { children: t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "h-1.5 w-16 rounded-full bg-muted", children: t.jsx("div", { className: "h-full rounded-full bg-primary", style: { width: `${i.progress}%` } }) }), t.jsxs("span", { className: "text-xs", children: [i.progress, "%"] })] }) }), t.jsx("td", { className: "text-center", children: t.jsxs("span", { className: "text-sm", children: [i.itemsCompleted || 0, "/", i.itemsTotal || 0] }) }), t.jsx("td", { className: "text-muted-foreground", children: Qe(i.updatedAt) })] }, i.id)) })] }) }); }
function H4() { const l = yt(), [n, i] = z.useState("kanban"), [c, u] = z.useState(""), [m, f] = z.useState(""), [x, b] = z.useState(""), [N, v] = z.useState(null), { data: p, isLoading: j } = oc(), { data: k } = rr(), w = p == null ? void 0 : p.filter(y => { var fe, I; const M = y.title.toLowerCase().includes(c.toLowerCase()) || ((fe = y.taskCode) == null ? void 0 : fe.toLowerCase().includes(c.toLowerCase())) || ((I = y.description) == null ? void 0 : I.toLowerCase().includes(c.toLowerCase())), J = !m || y.projectId.toString() === m, de = !x || y.status === x; return M && J && de; }), S = Xd.reduce((y, M) => (y[M.id] = (w == null ? void 0 : w.filter(J => J.status === M.id)) || [], y), {}), E = z.useCallback(y => { v(y.id); }, []), O = z.useCallback(() => { v(null); }, []), D = z.useCallback(y => { l(`/projects/${y}`); }, [l]), q = (p == null ? void 0 : p.length) || 0, Z = (p == null ? void 0 : p.filter(y => y.status === "completed").length) || 0, A = (p == null ? void 0 : p.filter(y => y.status === "in_progress").length) || 0, L = (p == null ? void 0 : p.filter(y => y.status === "blocked").length) || 0; return j ? t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : t.jsxs("div", { className: "flex flex-col h-full gap-4", children: [t.jsxs("div", { className: "section-header shrink-0", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Tareas" }), t.jsxs("p", { className: "section-subtitle", children: [q, " tareas • ", Z, " completadas • ", A, " en progreso", L > 0 && t.jsxs("span", { className: "text-red-500", children: [" • ", L, " bloqueadas"] })] })] }), t.jsx("div", { className: "section-actions", children: t.jsxs("button", { className: "btn-primary", children: [t.jsx(xt, { className: "h-4 w-4" }), "Nueva Tarea"] }) })] }), t.jsxs("div", { className: "grid grid-cols-4 gap-4 shrink-0", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon tasks", children: t.jsx(Le, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Total Tareas" }), t.jsx("div", { className: "stat-value", children: q })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx(Le, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Completadas" }), t.jsx("div", { className: "stat-value", children: Z })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon active", children: t.jsx(Ae, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "En Progreso" }), t.jsx("div", { className: "stat-value", children: A })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon", style: { background: "rgba(239, 68, 68, 0.1)", color: "#ef4444" }, children: t.jsx(ht, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Bloqueadas" }), t.jsx("div", { className: "stat-value", children: L })] })] })] }), t.jsxs("div", { className: "filters-row shrink-0", children: [t.jsxs("div", { className: "filter-search", children: [t.jsx(ms, { className: "filter-search-icon" }), t.jsx("input", { type: "text", placeholder: "Buscar tareas...", value: c, onChange: y => u(y.target.value), className: "filter-search-input" })] }), t.jsxs("div", { className: "filter-selects", children: [t.jsxs("div", { className: "filter-select-wrapper", children: [t.jsx(J1, { className: "h-4 w-4 text-muted-foreground" }), t.jsxs("select", { value: m, onChange: y => f(y.target.value), className: "filter-select", children: [t.jsx("option", { value: "", children: "Todos los proyectos" }), k == null ? void 0 : k.map(y => t.jsxs("option", { value: y.id, children: [y.code, " - ", y.name] }, y.id))] })] }), t.jsxs("select", { value: x, onChange: y => b(y.target.value), className: "filter-select", children: [t.jsx("option", { value: "", children: "Todos los estados" }), Xd.map(y => t.jsx("option", { value: y.id, children: y.label }, y.id))] })] }), t.jsxs("div", { className: "view-toggle", children: [t.jsx("button", { onClick: () => i("kanban"), className: Q("view-toggle-btn", n === "kanban" && "active"), title: "Vista Kanban", children: t.jsx(Yl, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: () => i("list"), className: Q("view-toggle-btn", n === "list" && "active"), title: "Vista Lista", children: t.jsx(Xl, { className: "h-4 w-4" }) }), t.jsx("button", { onClick: () => i("gantt"), className: Q("view-toggle-btn", n === "gantt" && "active"), title: "Vista Gantt", children: t.jsx(Tu, { className: "h-4 w-4" }) })] })] }), t.jsxs("div", { className: "flex-1 min-h-0 flex flex-col", children: [n === "kanban" && t.jsx("div", { className: "kanban-container", children: Xd.map(y => t.jsx(L4, { column: y, tasks: S[y.id], onTaskClick: E }, y.id)) }), n === "list" && t.jsx("div", { className: "flex-1 min-h-0 overflow-auto", children: t.jsx(U4, { tasks: w || [], onTaskClick: E }) }), n === "gantt" && t.jsx("div", { className: "flex-1 min-h-0 overflow-auto", children: t.jsx(q4, { tasks: w || [], onTaskClick: E }) })] }), t.jsx(_4, { taskId: N, isOpen: N !== null, onClose: O, onNavigateToProject: D })] }); }
const Pn = { critical: { color: "#ef4444", label: "P0", bg: "rgba(239, 68, 68, 0.2)" }, high: { color: "#f59e0b", label: "P1", bg: "rgba(249, 115, 22, 0.2)" }, medium: { color: "#3b82f6", label: "P2", bg: "rgba(59, 130, 246, 0.2)" }, low: { color: "#64748b", label: "P3", bg: "rgba(100, 116, 139, 0.2)" } };
function V4({ taskId: l, isOpen: n, onClose: i }) { const c = n && l !== null && l > 0, { data: u, isLoading: m } = eb(c ? l : 0); if (!n)
    return null; const f = u && Pn[u.priority] || Pn.medium; return t.jsx(cr, { isOpen: n, onClose: i, title: "", maxWidth: "max-w-2xl", children: !c || m ? t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : u ? t.jsxs(t.Fragment, { children: [t.jsxs("div", { className: "px-6 py-4 border-b border-border", style: { borderLeft: `4px solid ${f.color}` }, children: [t.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [t.jsx("span", { className: "px-2 py-1 rounded text-[11px] font-bold", style: { background: f.bg, color: f.color }, children: f.label }), t.jsx("span", { className: "px-2 py-1 rounded text-[11px] bg-green-500/10 text-green-500", children: "Completada" }), t.jsx("span", { className: "text-[11px] text-muted-foreground font-mono", children: u.taskCode || `#${u.id}` })] }), t.jsx("h3", { className: "text-lg font-semibold", children: u.title }), u.projectName && t.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [u.projectCode, " - ", u.projectName] })] }), t.jsxs("div", { className: "p-6 space-y-6 max-h-[60vh] overflow-y-auto", children: [u.description && t.jsxs("div", { children: [t.jsx("h4", { className: "text-sm font-medium mb-2", children: "Descripción" }), t.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: u.description })] }), t.jsxs("div", { children: [t.jsx("h4", { className: "text-sm font-medium mb-2", children: "Progreso" }), t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "flex-1 h-2 bg-secondary rounded-full overflow-hidden", children: t.jsx("div", { className: "h-full rounded-full bg-green-500", style: { width: `${u.progress || 100}%` } }) }), t.jsxs("span", { className: "text-sm font-semibold text-green-500", children: [u.progress || 100, "%"] })] })] }), t.jsx("div", { className: "border border-border rounded-lg p-4 bg-secondary/30", children: t.jsx(Uu, { taskId: u.id, editable: !1, showAddForm: !1 }) }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(Qs, { className: "h-3 w-3" }), "Completado por"] }), t.jsx("p", { className: "text-sm font-medium flex items-center gap-1", children: u.agentName ? t.jsxs(t.Fragment, { children: [t.jsx(Ks, { className: "h-3 w-3 text-solaria" }), u.agentName] }) : "Sin asignar" })] }), t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(De, { className: "h-3 w-3" }), "Horas Estimadas"] }), t.jsxs("p", { className: "text-sm font-medium", children: [u.estimatedHours || 0, " horas"] })] }), t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(gt, { className: "h-3 w-3 text-green-400" }), "Fecha Creación"] }), t.jsx("p", { className: "text-sm font-medium", children: u.createdAt ? ts(u.createdAt) : "N/A" })] }), t.jsxs("div", { className: "p-4 bg-secondary/50 rounded-lg", children: [t.jsxs("h4", { className: "text-xs text-muted-foreground mb-1 flex items-center gap-1", children: [t.jsx(Le, { className: "h-3 w-3 text-green-500" }), "Completada"] }), t.jsx("p", { className: "text-sm font-medium text-green-500", children: u.completedAt ? Qe(u.completedAt) : Qe(u.updatedAt) })] })] })] }), t.jsx("div", { className: "px-6 py-4 border-t border-border flex items-center justify-end", children: t.jsx("button", { onClick: i, className: "px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm", children: "Cerrar" }) })] }) : t.jsx("div", { className: "py-12 text-center text-muted-foreground", children: "Tarea no encontrada" }) }); }
function G4() { const l = yt(), [n, i] = z.useState(""), [c, u] = z.useState(""), [m, f] = z.useState(null), { data: x, isLoading: b } = oc(), { data: N } = rr(), v = (x == null ? void 0 : x.filter(D => D.status === "completed")) || [], j = [...v.filter(D => { var A, L; const q = D.title.toLowerCase().includes(n.toLowerCase()) || ((A = D.taskCode) == null ? void 0 : A.toLowerCase().includes(n.toLowerCase())) || ((L = D.description) == null ? void 0 : L.toLowerCase().includes(n.toLowerCase())), Z = !c || D.projectId.toString() === c; return q && Z; })].sort((D, q) => { const Z = D.completedAt ? new Date(D.completedAt).getTime() : new Date(D.updatedAt).getTime(); return (q.completedAt ? new Date(q.completedAt).getTime() : new Date(q.updatedAt).getTime()) - Z; }), k = z.useCallback(D => { f(D); }, []), w = z.useCallback(() => { f(null); }, []), S = j.reduce((D, q) => { const Z = q.projectCode || q.projectName || "Sin Proyecto"; return D[Z] || (D[Z] = []), D[Z].push(q), D; }, {}), E = v.length, O = v.filter(D => { const q = D.completedAt ? new Date(D.completedAt) : new Date(D.updatedAt), Z = new Date; return Z.setDate(Z.getDate() - 7), q >= Z; }).length; return b ? t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: () => l(-1), className: "p-2 hover:bg-secondary rounded-lg transition-colors", children: t.jsx(Ns, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsxs("h1", { className: "text-xl font-bold flex items-center gap-2", children: [t.jsx(bs, { className: "h-6 w-6 text-solaria" }), "Tareas Archivadas"] }), t.jsxs("p", { className: "text-sm text-muted-foreground", children: [E, " tareas completadas • ", O, " esta semana"] })] })] }), t.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [t.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex items-center gap-4", children: [t.jsx("div", { className: "h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center", children: t.jsx(Le, { className: "h-6 w-6 text-green-500" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "text-sm text-muted-foreground", children: "Total Completadas" }), t.jsx("div", { className: "text-2xl font-bold", children: E })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex items-center gap-4", children: [t.jsx("div", { className: "h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center", children: t.jsx(gt, { className: "h-6 w-6 text-blue-500" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "text-sm text-muted-foreground", children: "Esta Semana" }), t.jsx("div", { className: "text-2xl font-bold", children: O })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex items-center gap-4", children: [t.jsx("div", { className: "h-12 w-12 rounded-lg bg-solaria/10 flex items-center justify-center", children: t.jsx(bs, { className: "h-6 w-6 text-solaria" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "text-sm text-muted-foreground", children: "Proyectos" }), t.jsx("div", { className: "text-2xl font-bold", children: Object.keys(S).length })] })] })] }), t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsxs("div", { className: "relative flex-1 max-w-md", children: [t.jsx(ms, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), t.jsx("input", { type: "text", placeholder: "Buscar tareas completadas...", value: n, onChange: D => i(D.target.value), className: "w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-solaria transition-colors" })] }), t.jsxs("select", { value: c, onChange: D => u(D.target.value), className: "px-4 py-2 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-solaria transition-colors min-w-[200px]", children: [t.jsx("option", { value: "", children: "Todos los proyectos" }), N == null ? void 0 : N.map(D => t.jsxs("option", { value: D.id, children: [D.code, " - ", D.name] }, D.id))] })] }), t.jsxs("div", { className: "space-y-6", children: [Object.entries(S).map(([D, q]) => t.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [t.jsxs("div", { className: "p-4 border-b border-border bg-secondary/30", children: [t.jsx("h3", { className: "font-semibold text-lg", children: D }), t.jsxs("p", { className: "text-sm text-muted-foreground", children: [q.length, " tareas completadas"] })] }), t.jsx("div", { className: "divide-y divide-border", children: q.map(Z => { const A = Pn[Z.priority] || Pn.medium; return t.jsxs("div", { onClick: () => k(Z.id), className: "flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer transition-colors", children: [t.jsx("div", { className: "w-1 h-12 rounded-full flex-shrink-0", style: { background: A.color } }), t.jsx(Le, { className: "h-5 w-5 text-green-500 flex-shrink-0" }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [t.jsx("span", { className: "text-xs font-mono text-solaria font-semibold", children: Z.taskCode || `#${Z.taskNumber}` }), t.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded font-bold", style: { background: A.bg, color: A.color }, children: A.label })] }), t.jsx("h4", { className: "font-medium truncate", children: Z.title }), Z.description && t.jsx("p", { className: "text-sm text-muted-foreground line-clamp-1 mt-0.5", children: Z.description })] }), t.jsxs("div", { className: "text-right flex-shrink-0", children: [t.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [t.jsx(De, { className: "h-3 w-3" }), Qe(Z.completedAt || Z.updatedAt)] }), Z.agentName && t.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground mt-1 justify-end", children: [t.jsx(Ks, { className: "h-3 w-3 text-solaria" }), Z.agentName.replace("SOLARIA-", "")] })] }), t.jsx(Kl, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" })] }, Z.id); }) })] }, D)), j.length === 0 && t.jsxs("div", { className: "bg-card border border-border rounded-xl p-12 text-center", children: [t.jsx(bs, { className: "h-12 w-12 text-muted-foreground/50 mx-auto mb-4" }), t.jsx("h3", { className: "text-lg font-medium text-muted-foreground", children: "No hay tareas completadas" }), t.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Las tareas completadas aparecerán aquí" })] })] }), t.jsx(V4, { taskId: m, isOpen: m !== null, onClose: w })] }); }
const Q4 = ["completed", "cancelled"], K4 = { completed: { label: "Completado", color: "#16a34a", icon: Le }, cancelled: { label: "Cancelado", color: "#ef4444", icon: Vi } };
function Y4() { const l = yt(), [n, i] = z.useState(""), [c, u] = z.useState(""), { data: m, isLoading: f } = rr(), { data: x } = oc({}), b = (m || []).filter(O => Q4.includes(O.status)), v = [...b.filter(O => { var Z, A; const D = O.name.toLowerCase().includes(n.toLowerCase()) || ((Z = O.code) == null ? void 0 : Z.toLowerCase().includes(n.toLowerCase())) || ((A = O.description) == null ? void 0 : A.toLowerCase().includes(n.toLowerCase())), q = !c || O.status === c; return D && q; })].sort((O, D) => { const q = new Date(O.updatedAt || O.createdAt).getTime(); return new Date(D.updatedAt || D.createdAt).getTime() - q; }), p = O => { const D = (x || []).filter(q => q.projectId === O); return { total: D.length, completed: D.filter(q => q.status === "completed").length }; }, j = b.length, k = b.filter(O => O.status === "completed").length, w = b.filter(O => O.status === "cancelled").length, S = b.reduce((O, D) => O + (D.budgetAllocated || 0), 0), E = O => { l(`/projects/${O}`); }; return f ? t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : t.jsxs("div", { className: "space-y-6", children: [t.jsx("div", { className: "section-header", children: t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: () => l(-1), className: "p-2 hover:bg-muted rounded-lg transition-colors", children: t.jsx(Ns, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsxs("h1", { className: "section-title flex items-center gap-2", children: [t.jsx(bs, { className: "h-6 w-6 text-primary" }), "Proyectos Archivados"] }), t.jsxs("p", { className: "section-subtitle", children: [j, " proyectos en archivo"] })] })] }) }), t.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon", children: t.jsx(bs, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Total Archivados" }), t.jsx("div", { className: "stat-value", children: j })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx(Le, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Completados" }), t.jsx("div", { className: "stat-value", children: k })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon red", children: t.jsx(Vi, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Cancelados" }), t.jsx("div", { className: "stat-value", children: w })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon orange", children: t.jsx(Gi, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Budget Total" }), t.jsxs("div", { className: "stat-value", children: ["$", S >= 1e3 ? `${(S / 1e3).toFixed(0)}K` : S] })] })] })] }), t.jsxs("div", { className: "filters-row", children: [t.jsxs("div", { className: "filter-search", children: [t.jsx(ms, { className: "filter-search-icon" }), t.jsx("input", { type: "text", placeholder: "Buscar proyectos archivados...", value: n, onChange: O => i(O.target.value), className: "filter-search-input" })] }), t.jsx("div", { className: "filter-selects", children: t.jsxs("select", { value: c, onChange: O => u(O.target.value), className: "filter-select", children: [t.jsx("option", { value: "", children: "Todos los estados" }), t.jsx("option", { value: "completed", children: "Completados" }), t.jsx("option", { value: "cancelled", children: "Cancelados" })] }) })] }), t.jsxs("div", { className: "space-y-4", children: [v.map(O => { const D = p(O.id), q = K4[O.status], Z = (q == null ? void 0 : q.icon) || bs; return t.jsx("div", { className: "glass-card p-4 hover:bg-muted/50 cursor-pointer transition-colors", onClick: () => E(O.id), children: t.jsxs("div", { className: "flex items-start justify-between gap-4", children: [t.jsxs("div", { className: "flex items-start gap-4 min-w-0 flex-1", children: [t.jsx("div", { className: "p-2 rounded-lg bg-muted", children: t.jsx(Gs, { className: "h-6 w-6 text-muted-foreground" }) }), t.jsxs("div", { className: "min-w-0 flex-1", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [t.jsx("span", { className: "text-xs font-mono bg-muted px-1.5 py-0.5 rounded", children: O.code }), t.jsxs("span", { className: "text-xs px-2 py-0.5 rounded flex items-center gap-1", style: { backgroundColor: `${q == null ? void 0 : q.color}20`, color: q == null ? void 0 : q.color }, children: [t.jsx(Z, { className: "h-3 w-3" }), q == null ? void 0 : q.label] })] }), t.jsx("h3", { className: "font-semibold text-lg", children: O.name }), O.description && t.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mt-1", children: O.description }), t.jsxs("div", { className: "flex items-center gap-4 mt-3 text-sm text-muted-foreground", children: [t.jsxs("div", { className: "flex items-center gap-1", children: [t.jsx(Le, { className: "h-4 w-4 text-green-500" }), t.jsxs("span", { children: [D.completed, "/", D.total, " tareas"] })] }), O.budgetAllocated && t.jsxs("div", { className: "flex items-center gap-1", children: [t.jsx(Gi, { className: "h-4 w-4 text-orange-500" }), t.jsxs("span", { children: ["$", O.budgetAllocated >= 1e3 ? `${(O.budgetAllocated / 1e3).toFixed(0)}K` : O.budgetAllocated] })] }), O.endDate && t.jsxs("div", { className: "flex items-center gap-1", children: [t.jsx(gt, { className: "h-4 w-4 text-blue-500" }), t.jsx("span", { children: ts(O.endDate) })] }), t.jsxs("div", { className: "flex items-center gap-1", children: [t.jsx(De, { className: "h-4 w-4" }), t.jsxs("span", { children: ["Archivado: ", ts(O.updatedAt)] })] })] })] })] }), t.jsx("button", { className: "p-2 hover:bg-accent rounded-lg transition-colors shrink-0", onClick: A => { A.stopPropagation(), E(O.id); }, title: "Ver proyecto", children: t.jsx(Ui, { className: "h-5 w-5 text-muted-foreground" }) })] }) }, O.id); }), v.length === 0 && t.jsxs("div", { className: "glass-card p-12 text-center", children: [t.jsx(bs, { className: "h-12 w-12 text-muted-foreground/50 mx-auto mb-4" }), t.jsx("h3", { className: "text-lg font-medium text-muted-foreground", children: "No hay proyectos archivados" }), t.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Los proyectos completados o cancelados apareceran aqui" })] })] })] }); }
function X4() { var y; const l = yt(), { user: n } = js(), { theme: i, toggleTheme: c } = nr(), [u, m] = z.useState({ name: (n == null ? void 0 : n.name) || "", email: (n == null ? void 0 : n.email) || "" }), [f, x] = z.useState(!1), [b, N] = z.useState(null), [v, p] = z.useState({ currentPassword: "", newPassword: "", confirmPassword: "" }), [j, k] = z.useState({ current: !1, new: !1, confirm: !1 }), [w, S] = z.useState(!1), [E, O] = z.useState(null), [D, q] = z.useState(null), Z = async (M) => { M.preventDefault(), x(!0), N(null); try {
    await new Promise(J => setTimeout(J, 1e3)), N({ type: "success", text: "Perfil actualizado correctamente" });
}
catch {
    N({ type: "error", text: "Error al actualizar el perfil" });
}
finally {
    x(!1);
} }, A = async (M) => { if (M.preventDefault(), O(null), v.newPassword !== v.confirmPassword) {
    O({ type: "error", text: "Las contrasenas no coinciden" });
    return;
} if (v.newPassword.length < 6) {
    O({ type: "error", text: "La contrasena debe tener al menos 6 caracteres" });
    return;
} S(!0); try {
    await new Promise(J => setTimeout(J, 1e3)), O({ type: "success", text: "Contrasena actualizada correctamente" }), p({ currentPassword: "", newPassword: "", confirmPassword: "" });
}
catch {
    O({ type: "error", text: "Error al actualizar la contrasena" });
}
finally {
    S(!1);
} }, L = M => { var de; const J = (de = M.target.files) == null ? void 0 : de[0]; if (J) {
    const fe = new FileReader;
    fe.onload = I => { var le; q((le = I.target) == null ? void 0 : le.result); }, fe.readAsDataURL(J);
} }; return t.jsxs("div", { className: "space-y-6 max-w-4xl mx-auto", children: [t.jsx("div", { className: "section-header", children: t.jsxs("div", { className: "flex items-center gap-4", children: [t.jsx("button", { onClick: () => l(-1), className: "p-2 hover:bg-muted rounded-lg transition-colors", children: t.jsx(Ns, { className: "h-5 w-5" }) }), t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Configuracion" }), t.jsx("p", { className: "section-subtitle", children: "Gestiona tu perfil y preferencias" })] })] }) }), t.jsxs("div", { className: "grid gap-6", children: [t.jsxs("div", { className: "glass-card", children: [t.jsx("div", { className: "p-6 border-b border-border", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "p-2 rounded-lg bg-primary/10", children: t.jsx(Qs, { className: "h-5 w-5 text-primary" }) }), t.jsxs("div", { children: [t.jsx("h2", { className: "font-semibold", children: "Perfil" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Tu informacion personal" })] })] }) }), t.jsxs("form", { onSubmit: Z, className: "p-6 space-y-6", children: [t.jsxs("div", { className: "flex items-center gap-6", children: [t.jsxs("div", { className: "relative", children: [t.jsx("div", { className: "h-20 w-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold overflow-hidden", children: D ? t.jsx("img", { src: D, alt: "Avatar", className: "h-full w-full object-cover" }) : ((y = n == null ? void 0 : n.name) == null ? void 0 : y.charAt(0).toUpperCase()) || "U" }), t.jsxs("label", { className: "absolute -bottom-1 -right-1 p-1.5 bg-muted rounded-full cursor-pointer hover:bg-accent transition-colors", children: [t.jsx(G1, { className: "h-4 w-4" }), t.jsx("input", { type: "file", accept: "image/*", onChange: L, className: "hidden" })] })] }), t.jsxs("div", { children: [t.jsx("h3", { className: "font-medium", children: n == null ? void 0 : n.name }), t.jsx("p", { className: "text-sm text-muted-foreground capitalize", children: n == null ? void 0 : n.role })] })] }), t.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [t.jsxs("div", { className: "space-y-2", children: [t.jsx("label", { className: "text-sm font-medium", children: "Nombre" }), t.jsx("input", { type: "text", value: u.name, onChange: M => m({ ...u, name: M.target.value }), className: "w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" })] }), t.jsxs("div", { className: "space-y-2", children: [t.jsx("label", { className: "text-sm font-medium", children: "Email" }), t.jsx("input", { type: "email", value: u.email, onChange: M => m({ ...u, email: M.target.value }), className: "w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" })] })] }), b && t.jsx("div", { className: Q("px-4 py-3 rounded-lg text-sm", b.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"), children: b.text }), t.jsx("div", { className: "flex justify-end", children: t.jsx("button", { type: "submit", disabled: f, className: "btn-primary", children: f ? t.jsx(Ae, { className: "h-4 w-4 animate-spin" }) : t.jsxs(t.Fragment, { children: [t.jsx(Au, { className: "h-4 w-4" }), "Guardar cambios"] }) }) })] })] }), t.jsxs("div", { className: "glass-card", children: [t.jsx("div", { className: "p-6 border-b border-border", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "p-2 rounded-lg bg-orange-500/10", children: t.jsx(sN, { className: "h-5 w-5 text-orange-500" }) }), t.jsxs("div", { children: [t.jsx("h2", { className: "font-semibold", children: "Seguridad" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Cambia tu contrasena" })] })] }) }), t.jsxs("form", { onSubmit: A, className: "p-6 space-y-4", children: [t.jsxs("div", { className: "space-y-2", children: [t.jsx("label", { className: "text-sm font-medium", children: "Contrasena actual" }), t.jsxs("div", { className: "relative", children: [t.jsx("input", { type: j.current ? "text" : "password", value: v.currentPassword, onChange: M => p({ ...v, currentPassword: M.target.value }), className: "w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" }), t.jsx("button", { type: "button", onClick: () => k({ ...j, current: !j.current }), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: j.current ? t.jsx(Ld, { className: "h-4 w-4" }) : t.jsx(Ui, { className: "h-4 w-4" }) })] })] }), t.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [t.jsxs("div", { className: "space-y-2", children: [t.jsx("label", { className: "text-sm font-medium", children: "Nueva contrasena" }), t.jsxs("div", { className: "relative", children: [t.jsx("input", { type: j.new ? "text" : "password", value: v.newPassword, onChange: M => p({ ...v, newPassword: M.target.value }), className: "w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" }), t.jsx("button", { type: "button", onClick: () => k({ ...j, new: !j.new }), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: j.new ? t.jsx(Ld, { className: "h-4 w-4" }) : t.jsx(Ui, { className: "h-4 w-4" }) })] })] }), t.jsxs("div", { className: "space-y-2", children: [t.jsx("label", { className: "text-sm font-medium", children: "Confirmar contrasena" }), t.jsxs("div", { className: "relative", children: [t.jsx("input", { type: j.confirm ? "text" : "password", value: v.confirmPassword, onChange: M => p({ ...v, confirmPassword: M.target.value }), className: "w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" }), t.jsx("button", { type: "button", onClick: () => k({ ...j, confirm: !j.confirm }), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: j.confirm ? t.jsx(Ld, { className: "h-4 w-4" }) : t.jsx(Ui, { className: "h-4 w-4" }) })] })] })] }), E && t.jsx("div", { className: Q("px-4 py-3 rounded-lg text-sm", E.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"), children: E.text }), t.jsx("div", { className: "flex justify-end", children: t.jsx("button", { type: "submit", disabled: w, className: "btn-primary", children: w ? t.jsx(Ae, { className: "h-4 w-4 animate-spin" }) : t.jsxs(t.Fragment, { children: [t.jsx(Lg, { className: "h-4 w-4" }), "Cambiar contrasena"] }) }) })] })] }), t.jsxs("div", { className: "glass-card", children: [t.jsx("div", { className: "p-6 border-b border-border", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "p-2 rounded-lg bg-blue-500/10", children: t.jsx(Cg, { className: "h-5 w-5 text-blue-500" }) }), t.jsxs("div", { children: [t.jsx("h2", { className: "font-semibold", children: "Preferencias" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Personaliza tu experiencia" })] })] }) }), t.jsxs("div", { className: "p-6 space-y-4", children: [t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsxs("div", { children: [t.jsx("h3", { className: "font-medium", children: "Tema" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Selecciona el tema de la interfaz" })] }), t.jsx("button", { onClick: c, className: "flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors", children: i === "dark" ? t.jsxs(t.Fragment, { children: [t.jsx(iu, { className: "h-4 w-4" }), "Oscuro"] }) : t.jsxs(t.Fragment, { children: [t.jsx(Yi, { className: "h-4 w-4" }), "Claro"] }) })] }), t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsxs("div", { children: [t.jsx("h3", { className: "font-medium", children: "Notificaciones" }), t.jsx("p", { className: "text-sm text-muted-foreground", children: "Recibe alertas en tiempo real" })] }), t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [t.jsx("input", { type: "checkbox", defaultChecked: !0, className: "sr-only peer" }), t.jsx("div", { className: "w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" })] })] })] })] })] })] }); }
const _p = { active: { label: "Activo", icon: Za }, busy: { label: "Ocupado", icon: De }, inactive: { label: "Inactivo", icon: ht }, error: { label: "Error", icon: ht }, maintenance: { label: "Mantenimiento", icon: rc } };
function Z4({ agent: l }) { const n = _p[l.status] || _p.inactive, i = n.icon; return t.jsxs("div", { className: "rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors", children: [t.jsxs("div", { className: "flex items-start gap-4", children: [t.jsxs("div", { className: "relative", children: [t.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary/10", children: l.avatar ? t.jsx("img", { src: l.avatar, alt: l.name, className: "h-16 w-16 rounded-full object-cover" }) : t.jsx(Ks, { className: "h-8 w-8 text-primary" }) }), t.jsx("span", { className: Q("absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-card", Ig(l.status)) })] }), t.jsxs("div", { className: "flex-1", children: [t.jsx("h3", { className: "font-semibold text-lg", children: l.name }), t.jsx("p", { className: "text-sm text-muted-foreground", children: l.role }), t.jsxs("div", { className: "mt-2 flex items-center gap-1.5", children: [t.jsx(i, { className: "h-3.5 w-3.5" }), t.jsx("span", { className: "text-sm capitalize", children: n.label })] })] })] }), l.currentTask && t.jsxs("div", { className: "mt-4 rounded-lg bg-muted/50 p-3", children: [t.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Tarea actual" }), t.jsx("p", { className: "text-sm font-medium", children: l.currentTask })] }), l.description && t.jsx("p", { className: "mt-4 text-sm text-muted-foreground line-clamp-2", children: l.description }), t.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-4 border-t border-border pt-4", children: [t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-2xl font-bold text-green-500", children: l.tasksCompleted || 0 }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Completadas" })] }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-2xl font-bold text-blue-500", children: l.tasksInProgress || 0 }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "En progreso" })] }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-2xl font-bold", children: l.avgTaskTime ? `${l.avgTaskTime.toFixed(1)}h` : "-" }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Tiempo prom." })] })] }), t.jsxs("div", { className: "mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground", children: [t.jsxs("span", { children: ["Última actividad: ", l.lastActivity ? Qe(l.lastActivity) : "Nunca"] }), l.lastHeartbeat && t.jsxs("span", { className: "flex items-center gap-1", children: [t.jsx(Za, { className: "h-3 w-3" }), Qe(l.lastHeartbeat)] })] })] }); }
function F4({ agents: l }) { const n = l.filter(m => m.status === "active").length, i = l.filter(m => m.status === "busy").length, c = l.filter(m => m.status === "inactive").length, u = l.filter(m => m.status === "error").length; return t.jsxs("div", { className: "grid gap-4 sm:grid-cols-4", children: [t.jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "rounded-lg bg-green-500/10 p-2", children: t.jsx(Za, { className: "h-5 w-5 text-green-500" }) }), t.jsxs("div", { children: [t.jsx("p", { className: "text-2xl font-bold", children: n }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Activos" })] })] }) }), t.jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "rounded-lg bg-blue-500/10 p-2", children: t.jsx(De, { className: "h-5 w-5 text-blue-500" }) }), t.jsxs("div", { children: [t.jsx("p", { className: "text-2xl font-bold", children: i }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Ocupados" })] })] }) }), t.jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "rounded-lg bg-gray-500/10 p-2", children: t.jsx(Le, { className: "h-5 w-5 text-gray-500" }) }), t.jsxs("div", { children: [t.jsx("p", { className: "text-2xl font-bold", children: c }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Inactivos" })] })] }) }), t.jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "rounded-lg bg-red-500/10 p-2", children: t.jsx(ht, { className: "h-5 w-5 text-red-500" }) }), t.jsxs("div", { children: [t.jsx("p", { className: "text-2xl font-bold", children: u }), t.jsx("p", { className: "text-xs text-muted-foreground", children: "Con errores" })] })] }) })] }); }
function J4() { const { data: l, isLoading: n } = tb(); return n ? t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx("div", { className: "text-muted-foreground", children: "Cargando agentes..." }) }) : t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "text-2xl font-bold", children: "Agentes IA" }), t.jsxs("p", { className: "text-muted-foreground", children: [(l == null ? void 0 : l.length) || 0, " agentes configurados"] })] }), t.jsx(F4, { agents: l || [] }), t.jsx("div", { className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3", children: l && l.length > 0 ? l.map(i => t.jsx(Z4, { agent: i }, i.id)) : t.jsx("div", { className: "col-span-full py-12 text-center text-muted-foreground", children: "No hay agentes configurados" }) })] }); }
const Zd = [{ id: 1, name: "Akademate Platform", description: "Plataforma SaaS para academias con 12 tenants activos pagando suscripcion", icon: "graduation-cap", status: "active", metrics: { mrr: 48e3, arr: 576e3, clients: 12, churn: 2.5, growth: 15, ticketPromedio: 4e3 }, billing: { nextInvoice: "2024-02-01", pendingAmount: 12e3 } }, { id: 2, name: "Inscouter", description: "Plataforma de scouting deportivo con suscripciones activas", icon: "search", status: "growing", metrics: { mrr: 25e3, arr: 3e5, clients: 8, churn: 1.5, growth: 25, ticketPromedio: 3125 } }, { id: 3, name: "NazcaTrade", description: "Sistema de trading algoritmico con licencias enterprise", icon: "chart", status: "active", metrics: { mrr: 85e3, arr: 102e4, clients: 5, churn: 0, growth: 8, ticketPromedio: 17e3 } }, { id: 4, name: "SOLARIA Agency", description: "Servicios de consultoria y desarrollo web", icon: "building", status: "active", metrics: { mrr: 35e3, arr: 42e4, clients: 15, churn: 5, growth: 12, ticketPromedio: 2333 } }], cb = { "graduation-cap": t.jsx(wu, { className: "h-6 w-6" }), search: t.jsx(ms, { className: "h-6 w-6" }), chart: t.jsx(Q1, { className: "h-6 w-6" }), building: t.jsx(kg, { className: "h-6 w-6" }) };
function Ji(l) { return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(l); }
function $4({ metrics: l }) { const n = l || { mrr: 0, arr: 0, clients: 0, churn: 0, growth: 0 }; return t.jsxs("div", { className: "metrics-row", children: [t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "MRR" }), t.jsx("div", { className: "metric-value", children: Ji(n.mrr) }), t.jsxs("span", { className: `metric-change ${n.growth > 0 ? "positive" : "negative"}`, children: [n.growth > 0 ? t.jsx($n, { className: "h-3 w-3" }) : t.jsx(yu, { className: "h-3 w-3" }), Math.abs(n.growth), "%"] })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "ARR" }), t.jsx("div", { className: "metric-value", children: Ji(n.arr) })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Clientes" }), t.jsx("div", { className: "metric-value", children: n.clients })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Churn" }), t.jsxs("div", { className: "metric-value", children: [n.churn, "%"] }), t.jsx("span", { className: `metric-change ${n.churn <= 2 ? "positive" : "negative"}`, children: n.churn <= 2 ? "Saludable" : "Atención" })] })] }); }
function P4({ business: l, onClick: n }) { return t.jsxs("div", { onClick: n, className: "bg-card border border-border rounded-xl p-5 cursor-pointer hover:border-primary transition-all hover:-translate-y-1", children: [t.jsxs("div", { className: "flex items-start justify-between mb-4", children: [t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary", children: cb[l.icon] || t.jsx(Ql, { className: "h-6 w-6" }) }), t.jsxs("div", { children: [t.jsx("h3", { className: "font-semibold text-base", children: l.name }), t.jsx("p", { className: "text-xs text-muted-foreground line-clamp-1", children: l.description })] })] }), t.jsx("span", { className: `business-status ${l.status}`, children: l.status === "active" ? "Activo" : l.status === "growing" ? "Creciendo" : "Pausado" })] }), t.jsx($4, { metrics: l.metrics })] }); }
function zp() { const { businessId: l } = Fa(), n = yt(), i = js(y => y.token), [c, u] = z.useState([]), [m, f] = z.useState(!0), [x, b] = z.useState("grid"), [N, v] = z.useState(""), [p, j] = z.useState([]), [k, w] = z.useState([]); z.useEffect(() => { async function y() { try {
    const M = await fetch("/api/businesses", { headers: { Authorization: `Bearer ${i}` } });
    if (M.ok) {
        const J = await M.json();
        u(J.businesses || Zd);
    }
    else
        u(Zd);
}
catch {
    u(Zd);
}
finally {
    f(!1);
} } y(); }, [i]); const S = y => { const { churn: M, growth: J } = y.metrics || { churn: 0, growth: 0 }; return M <= 2 && J > 10 ? "healthy" : M > 5 || J < 5 ? "critical" : "warning"; }, E = y => { j(M => M.includes(y) ? M.filter(J => J !== y) : [...M, y]); }, O = y => { w(M => M.includes(y) ? M.filter(J => J !== y) : [...M, y]); }, D = c.filter(y => { if (N && N.length >= 3) {
    const M = N.toLowerCase();
    if (!(y.name.toLowerCase().includes(M) || y.description.toLowerCase().includes(M)))
        return !1;
} if (p.length > 0 && !p.includes(y.status))
    return !1; if (k.length > 0) {
    const M = S(y);
    if (!k.includes(M))
        return !1;
} return !0; }), q = D.reduce((y, M) => { var J; return y + (((J = M.metrics) == null ? void 0 : J.mrr) || 0); }, 0), Z = D.reduce((y, M) => { var J; return y + (((J = M.metrics) == null ? void 0 : J.clients) || 0); }, 0), A = D.length ? Math.round(D.reduce((y, M) => { var J; return y + (((J = M.metrics) == null ? void 0 : J.growth) || 0); }, 0) / D.length) : 0, L = D.filter(y => y.status === "active").length; return m ? t.jsx("div", { className: "flex items-center justify-center h-96", children: t.jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" }) }) : t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { className: "section-header", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Negocios" }), t.jsxs("p", { className: "section-subtitle", children: [c.length, " negocios operativos"] })] }), t.jsxs("div", { className: "section-actions", children: [t.jsx("button", { onClick: () => b("grid"), className: `p-2 rounded-lg transition-colors ${x === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`, children: t.jsx(Yl, { className: "h-5 w-5" }) }), t.jsx("button", { onClick: () => b("list"), className: `p-2 rounded-lg transition-colors ${x === "list" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`, children: t.jsx(Xl, { className: "h-5 w-5" }) })] })] }), t.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon orange", children: t.jsx(Gi, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "MRR Total" }), t.jsx("div", { className: "stat-value", children: Ji(q) })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx(Eu, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Clientes Totales" }), t.jsx("div", { className: "stat-value", children: Z })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon projects", children: t.jsx(Ys, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Crecimiento Prom" }), t.jsxs("div", { className: "stat-value", children: [A, "%"] })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon agents", children: t.jsx(vu, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Negocios Activos" }), t.jsx("div", { className: "stat-value", children: L })] })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [t.jsxs("div", { className: "relative flex-1", children: [t.jsx(ms, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), t.jsx("input", { type: "text", placeholder: "Buscar negocios (mínimo 3 caracteres)...", value: N, onChange: y => v(y.target.value), className: "w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" })] }), t.jsxs("span", { className: "text-sm text-muted-foreground", children: [D.length, " ", D.length === 1 ? "negocio" : "negocios"] })] }), t.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-3", children: [t.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Estado:" }), ["active", "growing", "paused"].map(y => { const M = p.includes(y), J = c.filter(fe => fe.status === y).length; if (J === 0)
                            return null; const de = { active: { label: "Activo", color: "#22c55e", bg: "rgba(34, 197, 94, 0.15)" }, growing: { label: "Creciendo", color: "#3b82f6", bg: "rgba(59, 130, 246, 0.15)" }, paused: { label: "Pausado", color: "#64748b", bg: "rgba(100, 116, 139, 0.15)" } }[y]; return t.jsxs("button", { onClick: () => E(y), className: "memory-tag-filter", style: M ? { backgroundColor: de.color, color: "#fff" } : { backgroundColor: de.bg, color: de.color }, children: [de.label, " (", J, ")"] }, y); })] }), t.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [t.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Salud:" }), ["healthy", "warning", "critical"].map(y => { const M = k.includes(y), J = c.filter(fe => S(fe) === y).length; if (J === 0)
                            return null; const de = { healthy: { label: "🟢 Saludable", color: "#22c55e", bg: "rgba(34, 197, 94, 0.15)" }, warning: { label: "🟡 Advertencia", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)" }, critical: { label: "🔴 Crítico", color: "#ef4444", bg: "rgba(239, 68, 68, 0.15)" } }[y]; return t.jsxs("button", { onClick: () => O(y), className: "memory-tag-filter", style: M ? { backgroundColor: de.color, color: "#fff" } : { backgroundColor: de.bg, color: de.color }, children: [de.label, " (", J, ")"] }, y); })] })] }), x === "grid" ? t.jsx("div", { className: "grid grid-cols-2 gap-4", children: D.map(y => t.jsx(P4, { business: y, onClick: () => n(`/businesses/${y.id}`) }, y.id)) }) : t.jsx("div", { className: "space-y-3", children: D.map(y => { var M; return t.jsxs("div", { onClick: () => n(`/businesses/${y.id}`), className: "flex items-center gap-4 p-4 bg-card border border-border rounded-xl cursor-pointer hover:border-primary transition-all", children: [t.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary", children: cb[y.icon] || t.jsx(Ql, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "flex-1", children: [t.jsx("h3", { className: "font-semibold", children: y.name }), t.jsx("p", { className: "text-xs text-muted-foreground", children: y.description })] }), t.jsxs("div", { className: "text-right", children: [t.jsx("div", { className: "font-bold text-primary", children: Ji(((M = y.metrics) == null ? void 0 : M.mrr) || 0) }), t.jsx("div", { className: "text-xs text-muted-foreground", children: "MRR" })] }), t.jsx("span", { className: `business-status ${y.status}`, children: y.status === "active" ? "Activo" : y.status === "growing" ? "Creciendo" : "Pausado" })] }, y.id); }) })] }); }
const I4 = { vps: [{ id: 1, name: "SOLARIA Production", provider: "Hetzner", ip: "46.62.222.138", specs: "4 vCPU, 8GB RAM, 160GB SSD", status: "online", services: ["Apache", "PHP 8.4", "MariaDB", "Node.js"] }, { id: 2, name: "NEMESIS Server", provider: "Hostinger", ip: "148.230.118.124", specs: "2 vCPU, 4GB RAM, 100GB SSD", status: "online", services: ["Docker", "PM2", "Redis"] }], nemesis: [{ id: 1, name: "origin-command01", ip: "100.122.193.83", type: "macOS", status: "active" }, { id: 2, name: "Mac-Mini-DRAKE", ip: "100.79.246.5", type: "macOS (M2)", status: "active" }, { id: 3, name: "DRAKE-COMMAND01", ip: "100.64.226.80", type: "Linux", status: "active" }, { id: 4, name: "iPad-Drake-Command", ip: "100.87.12.24", type: "iOS", status: "active" }, { id: 5, name: "iPhone-400i", ip: "100.112.92.21", type: "iOS", status: "active" }], cloudflare: [{ id: 1, domain: "solaria.agency", status: "active", ssl: !0 }, { id: 2, domain: "dfo.solaria.agency", status: "active", ssl: !0 }, { id: 3, domain: "akademate.com", status: "active", ssl: !0 }], sshKeys: [{ id: 1, name: "nemesis_cmdr_key", type: "Ed25519", fingerprint: "SHA256:Gx7..." }, { id: 2, name: "id_ed25519", type: "Ed25519", fingerprint: "SHA256:Hy8..." }, { id: 3, name: "id_solaria_hetzner_prod", type: "Ed25519", fingerprint: "SHA256:Kz9..." }], databases: [{ id: 1, name: "solaria_construction", type: "MariaDB", size: "156 MB" }, { id: 2, name: "akademate_prod", type: "PostgreSQL", size: "2.4 GB" }, { id: 3, name: "cache_redis", type: "Redis", size: "128 MB" }] };
function Rp({ status: l }) { const n = { online: { color: "text-green-400 bg-green-400/20", icon: In, label: "Online" }, active: { color: "text-green-400 bg-green-400/20", icon: In, label: "Activo" }, offline: { color: "text-red-400 bg-red-400/20", icon: Vi, label: "Offline" }, inactive: { color: "text-gray-400 bg-gray-400/20", icon: Vi, label: "Inactivo" }, maintenance: { color: "text-yellow-400 bg-yellow-400/20", icon: De, label: "Mantenimiento" }, pending: { color: "text-yellow-400 bg-yellow-400/20", icon: De, label: "Pendiente" } }, { color: i, icon: c, label: u } = n[l]; return t.jsxs("span", { className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${i}`, children: [t.jsx(c, { className: "h-3 w-3" }), u] }); }
function W4({ text: l }) { const [n, i] = z.useState(!1), c = () => { navigator.clipboard.writeText(l), i(!0), setTimeout(() => i(!1), 2e3); }; return t.jsx("button", { onClick: c, className: "p-1.5 rounded hover:bg-accent transition-colors", title: "Copiar", children: n ? t.jsx(In, { className: "h-4 w-4 text-green-400" }) : t.jsx(Rl, { className: "h-4 w-4 text-muted-foreground" }) }); }
function ew() { const { vps: l, nemesis: n, cloudflare: i, sshKeys: c, databases: u } = I4, [m, f] = z.useState(""), [x, b] = z.useState([]), [N, v] = z.useState([]), [p, j] = z.useState([]), k = y => { b(M => M.includes(y) ? M.filter(J => J !== y) : [...M, y]); }, w = y => { v(M => M.includes(y) ? M.filter(J => J !== y) : [...M, y]); }, S = y => { j(M => M.includes(y) ? M.filter(J => J !== y) : [...M, y]); }, E = l.filter(y => { if (m && m.length >= 3) {
    const M = m.toLowerCase();
    if (!(y.name.toLowerCase().includes(M) || y.ip.toLowerCase().includes(M)))
        return !1;
} return !(x.length > 0 && !x.includes("vps") || N.length > 0 && !N.includes(y.status) || p.length > 0 && !p.includes(y.provider.toLowerCase())); }), O = n.filter(y => { if (m && m.length >= 3) {
    const M = m.toLowerCase();
    if (!(y.name.toLowerCase().includes(M) || y.ip.toLowerCase().includes(M)))
        return !1;
} return !(x.length > 0 && !x.includes("nemesis") || N.length > 0 && !N.includes(y.status)); }), D = i.filter(y => { if (m && m.length >= 3) {
    const M = m.toLowerCase();
    if (!y.domain.toLowerCase().includes(M))
        return !1;
} return !(x.length > 0 && !x.includes("cloudflare") || N.length > 0 && !N.includes(y.status)); }), q = E.length, Z = E.filter(y => y.status === "online").length, A = O.filter(y => y.status === "active").length, L = D.filter(y => y.status === "active").length; return t.jsxs("div", { className: "space-y-6", children: [t.jsx("div", { className: "section-header", children: t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Infraestructura" }), t.jsx("p", { className: "section-subtitle", children: "VPS, SSH, Cloudflare y accesos de gestion" })] }) }), t.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx(Qi, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "VPS Online" }), t.jsxs("div", { className: "stat-value", children: [Z, "/", q] })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon agents", children: t.jsx(vp, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "NEMESIS Activos" }), t.jsx("div", { className: "stat-value", children: A })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon projects", children: t.jsx(gp, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Dominios CF" }), t.jsx("div", { className: "stat-value", children: L })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon orange", children: t.jsx(yp, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Claves SSH" }), t.jsx("div", { className: "stat-value", children: c.length })] })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [t.jsxs("div", { className: "relative flex-1", children: [t.jsx(ms, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), t.jsx("input", { type: "text", placeholder: "Buscar por nombre o IP (mínimo 3 caracteres)...", value: m, onChange: y => f(y.target.value), className: "w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" })] }), t.jsxs("span", { className: "text-sm text-muted-foreground", children: [q + A + L, " recursos"] })] }), t.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-3", children: [t.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Tipo:" }), ["vps", "nemesis", "cloudflare"].map(y => { const M = x.includes(y), J = { vps: l.length, nemesis: n.length, cloudflare: i.length }, de = { vps: { label: "VPS", color: "#22c55e", bg: "rgba(34, 197, 94, 0.15)" }, nemesis: { label: "NEMESIS", color: "#a855f7", bg: "rgba(168, 85, 247, 0.15)" }, cloudflare: { label: "Cloudflare", color: "#3b82f6", bg: "rgba(59, 130, 246, 0.15)" } }[y]; return t.jsxs("button", { onClick: () => k(y), className: "memory-tag-filter", style: M ? { backgroundColor: de.color, color: "#fff" } : { backgroundColor: de.bg, color: de.color }, children: [de.label, " (", J[y], ")"] }, y); })] }), t.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-3", children: [t.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Estado:" }), ["online", "active", "offline", "inactive", "maintenance", "pending"].map(y => { const M = N.includes(y), J = [...l.filter(fe => fe.status === y), ...n.filter(fe => fe.status === y), ...i.filter(fe => fe.status === y)].length; if (J === 0)
                            return null; const de = { online: { label: "🟢 Online", color: "#22c55e", bg: "rgba(34, 197, 94, 0.15)" }, active: { label: "🟢 Activo", color: "#22c55e", bg: "rgba(34, 197, 94, 0.15)" }, offline: { label: "🔴 Offline", color: "#ef4444", bg: "rgba(239, 68, 68, 0.15)" }, inactive: { label: "🔴 Inactivo", color: "#ef4444", bg: "rgba(239, 68, 68, 0.15)" }, maintenance: { label: "🟡 Mantenimiento", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)" }, pending: { label: "🟡 Pendiente", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)" } }[y]; return t.jsxs("button", { onClick: () => w(y), className: "memory-tag-filter", style: M ? { backgroundColor: de.color, color: "#fff" } : { backgroundColor: de.bg, color: de.color }, children: [de.label, " (", J, ")"] }, y); })] }), t.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [t.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Proveedor:" }), ["hetzner", "hostinger"].map(y => { const M = p.includes(y), J = l.filter(fe => fe.provider.toLowerCase() === y).length; if (J === 0)
                            return null; const de = { hetzner: { label: "Hetzner", color: "#ef4444", bg: "rgba(239, 68, 68, 0.15)" }, hostinger: { label: "Hostinger", color: "#6366f1", bg: "rgba(99, 102, 241, 0.15)" } }[y]; return t.jsxs("button", { onClick: () => S(y), className: "memory-tag-filter", style: M ? { backgroundColor: de.color, color: "#fff" } : { backgroundColor: de.bg, color: de.color }, children: [de.label, " (", J, ")"] }, y); })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [t.jsx(Qi, { className: "h-4 w-4 text-green-400" }), "SERVIDORES VPS"] }), t.jsx("div", { className: "space-y-4", children: E.map(y => t.jsxs("div", { className: "bg-accent/30 rounded-lg p-4", children: [t.jsxs("div", { className: "flex items-start justify-between mb-3", children: [t.jsxs("div", { children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("h4", { className: "font-medium", children: y.name }), t.jsx("span", { className: "text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded", children: y.provider })] }), t.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: y.specs })] }), t.jsx(Rp, { status: y.status })] }), t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [t.jsx(Nu, { className: "h-4 w-4 text-muted-foreground" }), t.jsx("code", { className: "font-mono text-primary", children: y.ip }), t.jsx(W4, { text: `ssh root@${y.ip}` })] }), t.jsx("div", { className: "flex gap-1.5", children: y.services.map(M => t.jsx("span", { className: "project-tag blue", children: M }, M)) })] })] }, y.id)) })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [t.jsx(vp, { className: "h-4 w-4 text-purple-400" }), "RED NEMESIS (Tailscale VPN)"] }), t.jsx("div", { className: "grid grid-cols-5 gap-3", children: O.map(y => t.jsxs("div", { className: "bg-accent/30 rounded-lg p-3 text-center", children: [t.jsx("div", { className: `w-2 h-2 rounded-full mx-auto mb-2 ${y.status === "active" ? "bg-green-400" : "bg-gray-400"}` }), t.jsx("div", { className: "text-xs font-medium truncate", title: y.name, children: y.name }), t.jsx("div", { className: "text-[10px] text-muted-foreground", children: y.type }), t.jsx("code", { className: "text-[10px] text-primary font-mono", children: y.ip })] }, y.id)) })] }), t.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [t.jsx(gp, { className: "h-4 w-4 text-blue-400" }), "CLOUDFLARE DOMINIOS"] }), t.jsx("div", { className: "space-y-2", children: D.map(y => t.jsxs("div", { className: "flex items-center justify-between p-2 bg-accent/30 rounded-lg", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [y.ssl && t.jsx(Lg, { className: "h-4 w-4 text-green-400" }), t.jsx("span", { className: "text-sm font-mono", children: y.domain })] }), t.jsx(Rp, { status: y.status })] }, y.id)) })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [t.jsx(yp, { className: "h-4 w-4 text-yellow-400" }), "CLAVES SSH"] }), t.jsx("div", { className: "space-y-2", children: c.map(y => t.jsxs("div", { className: "flex items-center justify-between p-2 bg-accent/30 rounded-lg", children: [t.jsxs("div", { children: [t.jsx("div", { className: "text-sm font-medium", children: y.name }), t.jsx("div", { className: "text-[10px] text-muted-foreground", children: y.fingerprint })] }), t.jsx("span", { className: "project-tag green", children: y.type })] }, y.id)) })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [t.jsx(F1, { className: "h-4 w-4 text-cyan-400" }), "BASES DE DATOS"] }), t.jsx("div", { className: "metrics-row", children: u.map(y => t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: y.type }), t.jsx("div", { className: "metric-value text-base", children: y.name }), t.jsx("span", { className: "metric-change neutral", children: y.size })] }, y.id)) })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("h3", { className: "text-sm font-semibold mb-4 flex items-center gap-2", children: [t.jsx(mN, { className: "h-4 w-4 text-green-400" }), "COMANDOS RAPIDOS"] }), t.jsxs("div", { className: "grid grid-cols-4 gap-2", children: [t.jsxs("button", { onClick: () => { navigator.clipboard.writeText("ssh root@46.62.222.138"), alert("Copiado!"); }, className: "btn-secondary text-sm", children: [t.jsx(Rl, { className: "h-4 w-4" }), "SSH SOLARIA"] }), t.jsxs("button", { onClick: () => { navigator.clipboard.writeText("ssh root@148.230.118.124"), alert("Copiado!"); }, className: "btn-secondary text-sm", children: [t.jsx(Rl, { className: "h-4 w-4" }), "SSH NEMESIS"] }), t.jsxs("button", { onClick: () => { navigator.clipboard.writeText("tailscale status"), alert("Copiado!"); }, className: "btn-secondary text-sm", children: [t.jsx(Rl, { className: "h-4 w-4" }), "Tailscale Status"] }), t.jsxs("button", { onClick: () => { navigator.clipboard.writeText("pm2 status"), alert("Copiado!"); }, className: "btn-secondary text-sm", children: [t.jsx(Rl, { className: "h-4 w-4" }), "PM2 Status"] })] })] })] }); }
function Ht({ title: l, icon: n, children: i }) { return t.jsxs("div", { className: "mb-8", children: [t.jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [t.jsx(n, { className: "h-5 w-5 text-primary" }), l] }), i] }); }
function Vt({ title: l, children: n }) { return t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [l && t.jsx("h3", { className: "text-sm font-medium mb-4 text-muted-foreground", children: l }), n] }); }
function tw() { return t.jsxs("div", { className: "space-y-6 pb-8", children: [t.jsx("div", { className: "section-header", children: t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Design Hub" }), t.jsx("p", { className: "section-subtitle", children: "Componentes UI, tipografias y elementos graficos" })] }) }), t.jsxs("div", { className: "space-y-8 overflow-y-auto pr-2", children: [t.jsx(Ht, { title: "Brand Identity", icon: uN, children: t.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [t.jsx(Vt, { title: "Logo", children: t.jsx("div", { className: "text-center p-5 bg-accent rounded-lg", children: t.jsx("img", { src: "/solaria-logo.png", alt: "SOLARIA Logo", className: "w-20 h-20 mx-auto", onError: l => { l.currentTarget.style.display = "none"; } }) }) }), t.jsx(Vt, { title: "Brand Colors", children: t.jsxs("div", { className: "flex gap-2 flex-wrap", children: [t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#f6921d]", title: "SOLARIA Orange" }), t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#d97706]", title: "Orange Dark" }), t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#0a0a0a]", title: "Background" }), t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#141414]", title: "Secondary BG" })] }) }), t.jsx(Vt, { title: "Phase Colors", children: t.jsxs("div", { className: "flex gap-2 flex-wrap", children: [t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#a855f7]", title: "Planning" }), t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#22d3ee]", title: "Development" }), t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#14b8a6]", title: "Testing" }), t.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#22c55e]", title: "Production" })] }) })] }) }), t.jsx(Ht, { title: "Typography", icon: hN, children: t.jsxs(Vt, { children: [t.jsxs("div", { className: "mb-4", children: [t.jsx("span", { className: "text-[10px] text-muted-foreground uppercase", children: "Font Family" }), t.jsx("div", { className: "text-2xl font-semibold", children: "Inter" })] }), t.jsxs("div", { className: "space-y-3", children: [t.jsxs("div", { className: "flex items-baseline gap-4", children: [t.jsx("span", { className: "text-3xl font-bold", children: "Heading H1" }), t.jsx("span", { className: "text-xs text-muted-foreground", children: "32px / 700" })] }), t.jsxs("div", { className: "flex items-baseline gap-4", children: [t.jsx("span", { className: "text-2xl font-semibold", children: "Heading H2" }), t.jsx("span", { className: "text-xs text-muted-foreground", children: "24px / 600" })] }), t.jsxs("div", { className: "flex items-baseline gap-4", children: [t.jsx("span", { className: "text-lg font-semibold", children: "Heading H3" }), t.jsx("span", { className: "text-xs text-muted-foreground", children: "18px / 600" })] }), t.jsxs("div", { className: "flex items-baseline gap-4", children: [t.jsx("span", { className: "text-sm font-medium", children: "Body Text" }), t.jsx("span", { className: "text-xs text-muted-foreground", children: "14px / 500" })] }), t.jsxs("div", { className: "flex items-baseline gap-4", children: [t.jsx("span", { className: "text-xs text-muted-foreground", children: "Small / Muted" }), t.jsx("span", { className: "text-xs text-muted-foreground", children: "12px / 400" })] }), t.jsxs("div", { className: "flex items-baseline gap-4", children: [t.jsx("span", { className: "text-[10px] uppercase font-semibold tracking-wide", children: "LABEL UPPERCASE" }), t.jsx("span", { className: "text-xs text-muted-foreground", children: "10px / 600 / Uppercase" })] })] })] }) }), t.jsx(Ht, { title: "Tags / Badges", icon: Ug, children: t.jsxs(Vt, { children: [t.jsxs("div", { className: "mb-4", children: [t.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-2", children: "Project Tags (3 Categories)" }), t.jsxs("div", { className: "flex gap-2 flex-wrap", children: [t.jsx("span", { className: "project-tag blue", children: "SaaS" }), t.jsx("span", { className: "project-tag blue", children: "Platform" }), t.jsx("span", { className: "project-tag green", children: "React" }), t.jsx("span", { className: "project-tag green", children: "Node.js" }), t.jsx("span", { className: "project-tag purple", children: "Enterprise" }), t.jsx("span", { className: "project-tag purple", children: "B2B" })] })] }), t.jsxs("div", { children: [t.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-2", children: "Phase Badges" }), t.jsxs("div", { className: "flex gap-2 flex-wrap", children: [t.jsx("span", { className: "progress-phase-badge planning", children: "Planificacion" }), t.jsx("span", { className: "progress-phase-badge development", children: "Desarrollo" }), t.jsx("span", { className: "progress-phase-badge testing", children: "Testing" }), t.jsx("span", { className: "progress-phase-badge production", children: "Produccion" })] })] })] }) }), t.jsx(Ht, { title: "Progress Bars", icon: K1, children: t.jsxs(Vt, { children: [t.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-3", children: "Segmented Phase Progress" }), t.jsxs("div", { className: "progress-segments mb-2", children: [t.jsx("div", { className: "progress-segment planning" }), t.jsx("div", { className: "progress-segment development" }), t.jsx("div", { className: "progress-segment testing" }), t.jsx("div", { className: "progress-segment inactive" })] }), t.jsxs("div", { className: "progress-labels", children: [t.jsx("span", { className: "progress-label-item completed", children: "Planificacion" }), t.jsx("span", { className: "progress-label-item completed", children: "Desarrollo" }), t.jsx("span", { className: "progress-label-item active", children: "Testing" }), t.jsx("span", { className: "progress-label-item", children: "Produccion" })] })] }) }), t.jsx(Ht, { title: "Mini Trello (Equalizer)", icon: Z1, children: t.jsx(Vt, { children: t.jsxs("div", { className: "mini-trello max-w-md", children: [t.jsxs("div", { className: "trello-column", children: [t.jsx("span", { className: "trello-label", children: "BL" }), t.jsx("div", { className: "trello-slots", children: [...Array(8)].map((l, n) => t.jsx("div", { className: `trello-slot ${n < 3 ? "filled" : ""}`, style: n < 3 ? { background: "#64748b", borderColor: "transparent" } : {} }, n)) }), t.jsx("span", { className: "trello-count", children: "3" })] }), t.jsxs("div", { className: "trello-column", children: [t.jsx("span", { className: "trello-label", children: "TD" }), t.jsx("div", { className: "trello-slots", children: [...Array(8)].map((l, n) => t.jsx("div", { className: `trello-slot ${n < 5 ? "filled" : ""}`, style: n < 5 ? { background: "#f59e0b", borderColor: "transparent" } : {} }, n)) }), t.jsx("span", { className: "trello-count", children: "5" })] }), t.jsxs("div", { className: "trello-column", children: [t.jsx("span", { className: "trello-label", children: "DO" }), t.jsx("div", { className: "trello-slots", children: [...Array(8)].map((l, n) => t.jsx("div", { className: `trello-slot ${n < 2 ? "filled" : ""}`, style: n < 2 ? { background: "#3b82f6", borderColor: "transparent" } : {} }, n)) }), t.jsx("span", { className: "trello-count", children: "2" })] }), t.jsxs("div", { className: "trello-column", children: [t.jsx("span", { className: "trello-label", children: "DN" }), t.jsx("div", { className: "trello-slots", children: [...Array(8)].map((l, n) => t.jsx("div", { className: `trello-slot ${n < 7 ? "filled" : ""}`, style: n < 7 ? { background: "#22c55e", borderColor: "transparent" } : {} }, n)) }), t.jsx("span", { className: "trello-count", children: "7" })] })] }) }) }), t.jsx(Ht, { title: "Buttons", icon: lN, children: t.jsx(Vt, { children: t.jsxs("div", { className: "flex gap-3 flex-wrap items-center", children: [t.jsx("button", { className: "btn-primary", children: "Primary" }), t.jsx("button", { className: "btn-secondary", children: "Secondary" }), t.jsx("button", { className: "p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors", children: t.jsx(Ki, { className: "h-4 w-4" }) }), t.jsxs("button", { className: "flex items-center gap-1.5 px-3 py-1.5 bg-accent rounded text-xs font-medium hover:bg-accent/80 transition-colors", children: [t.jsx(Ki, { className: "h-3 w-3" }), " Editar"] }), t.jsx("button", { className: "w-7 h-7 rounded bg-primary/20 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors", children: t.jsx(xt, { className: "h-4 w-4" }) }), t.jsx("button", { className: "px-2 py-1 bg-accent rounded text-xs font-medium hover:bg-accent/80 transition-colors", children: "→ Task" })] }) }) }), t.jsx(Ht, { title: "URL Items", icon: Rg, children: t.jsx(Vt, { children: t.jsxs("div", { className: "space-y-2 max-w-xs", children: [t.jsxs("a", { href: "#", className: "url-item", onClick: l => l.preventDefault(), children: [t.jsx("div", { className: "url-item-icon prod", children: t.jsx(Nu, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "url-item-text", children: [t.jsx("div", { className: "url-item-label", children: "Prod" }), t.jsx("div", { className: "url-item-url", children: "https://example.com" })] }), t.jsx(At, { className: "h-3 w-3 text-muted-foreground" })] }), t.jsxs("a", { href: "#", className: "url-item", onClick: l => l.preventDefault(), children: [t.jsx("div", { className: "url-item-icon staging", children: t.jsx($1, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "url-item-text", children: [t.jsx("div", { className: "url-item-label", children: "Staging" }), t.jsx("div", { className: "url-item-url", children: "https://staging.example.com" })] }), t.jsx(At, { className: "h-3 w-3 text-muted-foreground" })] }), t.jsxs("a", { href: "#", className: "url-item", onClick: l => l.preventDefault(), children: [t.jsx("div", { className: "url-item-icon local", children: t.jsx(zg, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "url-item-text", children: [t.jsx("div", { className: "url-item-label", children: "Local" }), t.jsx("div", { className: "url-item-url", children: "http://localhost:3000" })] }), t.jsx(At, { className: "h-3 w-3 text-muted-foreground" })] }), t.jsxs("a", { href: "#", className: "url-item", onClick: l => l.preventDefault(), children: [t.jsx("div", { className: "url-item-icon repo", children: t.jsx(bp, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "url-item-text", children: [t.jsx("div", { className: "url-item-label", children: "Repo" }), t.jsx("div", { className: "url-item-url", children: "github.com/user/repo" })] }), t.jsx(At, { className: "h-3 w-3 text-muted-foreground" })] })] }) }) }), t.jsx(Ht, { title: "TODO Items", icon: oN, children: t.jsx(Vt, { children: t.jsxs("div", { className: "max-w-xs", children: [t.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [t.jsx("input", { type: "text", placeholder: "Escribe una nota...", className: "flex-1 bg-accent border border-border rounded-lg px-3 py-2 text-sm" }), t.jsx("button", { className: "w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center", children: t.jsx(xt, { className: "h-4 w-4" }) })] }), t.jsxs("div", { className: "space-y-2", children: [t.jsxs("div", { className: "flex items-center gap-2 p-2 bg-accent/50 rounded-lg", children: [t.jsx("div", { className: "w-4 h-4 rounded border-2 border-primary" }), t.jsx("span", { className: "flex-1 text-xs", children: "Revisar diseno del dashboard" }), t.jsx("span", { className: "text-[9px] text-muted-foreground", children: "12 dic" }), t.jsx("button", { className: "text-[10px] px-1.5 py-0.5 bg-accent rounded", children: "→" })] }), t.jsxs("div", { className: "flex items-center gap-2 p-2 bg-accent/50 rounded-lg opacity-60", children: [t.jsx("div", { className: "w-4 h-4 rounded bg-primary flex items-center justify-center", children: t.jsx(Bl, { className: "h-2.5 w-2.5 text-white" }) }), t.jsx("span", { className: "flex-1 text-xs line-through", children: "Aprobar colores del tema" }), t.jsx("span", { className: "text-[9px] text-muted-foreground", children: "08 dic" })] })] })] }) }) }), t.jsx(Ht, { title: "Activity Items", icon: De, children: t.jsx(Vt, { children: t.jsxs("div", { className: "space-y-2 max-w-xs", children: [t.jsxs("div", { className: "flex items-start gap-2 p-2 bg-accent/50 rounded-lg", children: [t.jsx("div", { className: "w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0", children: t.jsx(Bl, { className: "h-3 w-3 text-green-400" }) }), t.jsxs("div", { className: "flex-1", children: [t.jsx("div", { className: "text-xs font-medium", children: "Tarea completada" }), t.jsx("div", { className: "text-[9px] text-muted-foreground", children: "Hace 2h" })] })] }), t.jsxs("div", { className: "flex items-start gap-2 p-2 bg-accent/50 rounded-lg", children: [t.jsx("div", { className: "w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0", children: t.jsx(bp, { className: "h-3 w-3 text-blue-400" }) }), t.jsxs("div", { className: "flex-1", children: [t.jsx("div", { className: "text-xs font-medium", children: "Nuevo commit" }), t.jsx("div", { className: "text-[9px] text-muted-foreground", children: "Hace 5h" })] })] })] }) }) }), t.jsx(Ht, { title: "Form Elements", icon: iN, children: t.jsx(Vt, { children: t.jsxs("div", { className: "grid grid-cols-2 gap-4 max-w-lg", children: [t.jsxs("div", { children: [t.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Input Label" }), t.jsx("input", { type: "text", defaultValue: "Input value", className: "w-full bg-accent border border-border rounded-lg px-3 py-2 text-sm" })] }), t.jsxs("div", { children: [t.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Select" }), t.jsxs("select", { className: "w-full bg-accent border border-border rounded-lg px-3 py-2 text-sm", children: [t.jsx("option", { children: "Option 1" }), t.jsx("option", { children: "Option 2" })] })] }), t.jsxs("div", { className: "col-span-2", children: [t.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Textarea" }), t.jsx("textarea", { defaultValue: "Textarea content", className: "w-full bg-accent border border-border rounded-lg px-3 py-2 text-sm h-16 resize-none" })] })] }) }) }), t.jsx("div", { className: "p-5 rounded-xl border border-dashed border-primary bg-gradient-to-br from-primary/10 to-transparent", children: t.jsxs(Ht, { title: "METRICS ROW (Core Component)", icon: Ys, children: [t.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Componente central del sistema. Los cambios en CSS Variables se aplican automaticamente a todo el dashboard." }), t.jsxs("div", { className: "mb-6", children: [t.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-2", children: "5 Columns - Full Width" }), t.jsxs("div", { className: "metrics-row", children: [t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Seguidores ✓" }), t.jsxs("div", { className: "metric-value", children: ["1K ", t.jsx("span", { className: "secondary", children: "/ 4.2K" })] })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Impresiones" }), t.jsx("div", { className: "metric-value", children: "4.9M" }), t.jsxs("span", { className: "metric-change positive", children: [t.jsx($n, { className: "h-3 w-3" }), " 334%"] })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Engagement" }), t.jsx("div", { className: "metric-value", children: "4.2%" }), t.jsxs("span", { className: "metric-change negative", children: [t.jsx(yu, { className: "h-3 w-3" }), " 19%"] })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Engagements" }), t.jsx("div", { className: "metric-value", children: "209.2K" }), t.jsxs("span", { className: "metric-change positive", children: [t.jsx($n, { className: "h-3 w-3" }), " 248%"] })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Profile Visits" }), t.jsx("div", { className: "metric-value", children: "18.2K" }), t.jsxs("span", { className: "metric-change positive", children: [t.jsx($n, { className: "h-3 w-3" }), " 88%"] })] })] })] }), t.jsxs("div", { children: [t.jsx("span", { className: "text-[10px] text-muted-foreground uppercase block mb-2", children: "Compact Variant (3 Columns)" }), t.jsxs("div", { className: "metrics-row compact max-w-md", children: [t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Tareas" }), t.jsx("div", { className: "metric-value", children: "24" })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Completadas" }), t.jsx("div", { className: "metric-value", children: "18" })] }), t.jsxs("div", { className: "metric-cell", children: [t.jsx("div", { className: "metric-label", children: "Progreso" }), t.jsx("div", { className: "metric-value", children: "75%" })] })] })] })] }) }), t.jsx(Ht, { title: "Stat Cards", icon: Za, children: t.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon projects", children: t.jsx(dN, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Proyectos Activos" }), t.jsx("div", { className: "stat-value", children: "5" })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon tasks", children: t.jsx(Bl, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Tareas Completadas" }), t.jsx("div", { className: "stat-value", children: "127" })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon active", children: t.jsx(De, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "En Progreso" }), t.jsx("div", { className: "stat-value", children: "12" })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon agents", children: t.jsx(Za, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Agentes Activos" }), t.jsx("div", { className: "stat-value", children: "3" })] })] })] }) }), t.jsx(Ht, { title: "CSS Variables Reference", icon: qg, children: t.jsx(Vt, { children: t.jsxs("div", { className: "grid grid-cols-2 gap-6 text-xs font-mono", children: [t.jsxs("div", { children: [t.jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Colors" }), t.jsxs("div", { className: "space-y-1.5", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-4 rounded bg-[#f6921d]" }), t.jsx("span", { children: "--solaria-orange: #f6921d" })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-4 rounded bg-[#22c55e]" }), t.jsx("span", { children: "--color-positive: #22c55e" })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-4 rounded bg-[#ef4444]" }), t.jsx("span", { children: "--color-negative: #ef4444" })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-4 rounded bg-[#3b82f6]" }), t.jsx("span", { children: "--color-info: #3b82f6" })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("div", { className: "w-4 h-4 rounded bg-[#f59e0b]" }), t.jsx("span", { children: "--color-warning: #f59e0b" })] })] })] }), t.jsxs("div", { children: [t.jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Metrics" }), t.jsxs("div", { className: "space-y-1.5 text-muted-foreground", children: [t.jsx("div", { children: "--metric-card-radius: 12px" }), t.jsx("div", { children: "--metric-card-padding: 16px" }), t.jsx("div", { children: "--metric-label-size: 11px" }), t.jsx("div", { children: "--metric-value-size: 24px" }), t.jsx("div", { children: "--metric-value-weight: 700" })] })] })] }) }) })] })] }); }
const sw = { decision: { bg: "hsl(270 60% 50% / 0.1)", color: "hsl(270 60% 50%)" }, learning: { bg: "hsl(217 91% 60% / 0.1)", color: "hsl(217 91% 60%)" }, context: { bg: "hsl(142 71% 45% / 0.1)", color: "hsl(142 71% 45%)" }, requirement: { bg: "hsl(38 92% 50% / 0.1)", color: "hsl(38 92% 50%)" }, bug: { bg: "hsl(0 84% 60% / 0.1)", color: "hsl(0 84% 60%)" }, solution: { bg: "hsl(160 84% 39% / 0.1)", color: "hsl(160 84% 39%)" }, pattern: { bg: "hsl(239 84% 67% / 0.1)", color: "hsl(239 84% 67%)" }, config: { bg: "hsl(25 95% 53% / 0.1)", color: "hsl(25 95% 53%)" }, architecture: { bg: "hsl(263 70% 58% / 0.1)", color: "hsl(263 70% 58%)" }, session: { bg: "hsl(199 89% 48% / 0.1)", color: "hsl(199 89% 48%)" }, protocol: { bg: "hsl(280 65% 60% / 0.1)", color: "hsl(280 65% 60%)" }, "agent-instructions": { bg: "hsl(200 95% 45% / 0.1)", color: "hsl(200 95% 45%)" } }, aw = { related: "Relacionada", depends_on: "Depende de", contradicts: "Contradice", supersedes: "Reemplaza", child_of: "Derivada de" };
function lw({ memoryId: l, isOpen: n, onClose: i, onTagClick: c }) { const u = n && l !== null && l > 0, { data: m, isLoading: f } = f2(u ? l : 0), { data: x } = b2(u ? l : 0), b = g2(), N = () => { l && b.mutate({ id: l, amount: .1 }); }, v = m ? Math.round(m.importance * 100) : 0, p = v >= 70 ? "high" : v >= 40 ? "medium" : "low"; return t.jsx(Ou, { open: n, onOpenChange: i, children: t.jsxs(_u, { className: "max-w-2xl max-h-[85vh] flex flex-col", children: [t.jsx(Bu, { onClose: i }), u ? f ? t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : m ? t.jsxs(t.Fragment, { children: [t.jsx(zu, { children: t.jsxs("div", { className: "flex items-start gap-3 pr-8", children: [t.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted", children: t.jsx(Gl, { className: "h-5 w-5 text-muted-foreground" }) }), t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx(Ru, { className: "text-base", children: m.summary || m.content.substring(0, 80) }), t.jsxs("div", { className: "flex items-center gap-2 mt-1 text-xs text-muted-foreground", children: [t.jsx(Su, { className: "h-3 w-3" }), t.jsx("span", { className: "font-mono", children: m.id }), t.jsx("span", { className: "text-border", children: "|" }), t.jsx(gt, { className: "h-3 w-3" }), t.jsx("span", { children: ts(m.createdAt) })] })] })] }) }), t.jsxs(qu, { className: "flex-1 overflow-y-auto space-y-4", children: [t.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [t.jsxs("div", { className: Q("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium", p === "high" && "bg-green-500/10 text-green-600", p === "medium" && "bg-blue-500/10 text-blue-600", p === "low" && "bg-muted text-muted-foreground"), children: [t.jsx(Ys, { className: "h-3 w-3" }), t.jsxs("span", { children: [v, "% importancia"] })] }), t.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [t.jsx(st, { className: "h-3 w-3" }), t.jsxs("span", { children: [m.accessCount, " accesos"] })] }), m.lastAccessed && t.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [t.jsx(De, { className: "h-3 w-3" }), t.jsxs("span", { children: ["Accedida ", Qe(m.lastAccessed)] })] })] }), m.tags && m.tags.length > 0 && t.jsx("div", { className: "flex flex-wrap gap-1.5", children: m.tags.map(j => { const k = sw[j] || { bg: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }; return t.jsx("button", { onClick: () => { c == null || c(j), i(); }, className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium transition-opacity hover:opacity-80", style: { backgroundColor: k.bg, color: k.color }, children: j }, j); }) }), t.jsx("div", { className: "rounded-lg border border-border bg-muted/30 p-4", children: t.jsx("pre", { className: "whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed", children: m.content }) }), x && x.length > 0 && t.jsxs("div", { className: "space-y-2", children: [t.jsxs("h4", { className: "text-sm font-medium flex items-center gap-2", children: [t.jsx(Cu, { className: "h-4 w-4" }), "Memorias Relacionadas"] }), t.jsx("div", { className: "space-y-2", children: x.map(j => { var k, w, S, E; return t.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors", children: [t.jsxs("div", { className: "flex-1 min-w-0", children: [t.jsx("div", { className: "text-sm font-medium truncate", children: ((k = j.relatedMemory) == null ? void 0 : k.summary) || ((S = (w = j.relatedMemory) == null ? void 0 : w.content) == null ? void 0 : S.substring(0, 50)) }), t.jsxs("div", { className: "text-xs text-muted-foreground", children: [aw[j.relationshipType] || j.relationshipType, " ", "· #", (E = j.relatedMemory) == null ? void 0 : E.id] })] }), t.jsx(At, { className: "h-4 w-4 text-muted-foreground flex-shrink-0 ml-2" })] }, j.id); }) })] })] }), t.jsxs(Lu, { children: [t.jsxs("button", { onClick: N, disabled: b.isPending, className: Q("inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium", "bg-primary text-primary-foreground", "hover:bg-primary/90 transition-colors", "disabled:opacity-50 disabled:cursor-not-allowed"), children: [b.isPending ? t.jsx(Ae, { className: "h-4 w-4 animate-spin" }) : t.jsx(X1, { className: "h-4 w-4" }), "Boost +10%"] }), t.jsx("button", { onClick: i, className: Q("px-4 py-2 rounded-md text-sm font-medium", "border border-border bg-background", "hover:bg-muted transition-colors"), children: "Cerrar" })] })] }) : t.jsx("div", { className: "py-12 text-center text-muted-foreground", children: "Memoria no encontrada" }) : t.jsx("div", { className: "flex items-center justify-center py-12", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) })] }) }); }
const Hu = { decision: { bg: "rgba(168, 85, 247, 0.15)", color: "#a855f7" }, learning: { bg: "rgba(59, 130, 246, 0.15)", color: "#3b82f6" }, context: { bg: "rgba(34, 197, 94, 0.15)", color: "#22c55e" }, requirement: { bg: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" }, bug: { bg: "rgba(239, 68, 68, 0.15)", color: "#ef4444" }, solution: { bg: "rgba(16, 185, 129, 0.15)", color: "#10b981" }, pattern: { bg: "rgba(99, 102, 241, 0.15)", color: "#6366f1" }, config: { bg: "rgba(249, 115, 22, 0.15)", color: "#f97316" }, architecture: { bg: "rgba(139, 92, 246, 0.15)", color: "#8b5cf6" }, session: { bg: "rgba(14, 165, 233, 0.15)", color: "#0ea5e9" } };
function nw({ memory: l, onClick: n }) { const i = Math.round(l.importance * 100), c = l.tags || [], u = i >= 70 ? "high" : i >= 40 ? "medium" : "low"; return t.jsxs("div", { onClick: n, className: "memory-card", children: [t.jsxs("div", { className: "memory-header", children: [t.jsx("div", { className: "memory-icon", children: t.jsx(Gl, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "memory-title-group", children: [t.jsx("h3", { className: "memory-title", children: l.summary || l.content.substring(0, 60) }), t.jsxs("span", { className: "memory-id", children: ["#", l.id] })] }), t.jsxs("div", { className: Q("memory-importance", u), children: [t.jsx(Ys, { className: "h-3 w-3" }), t.jsxs("span", { children: [i, "%"] })] })] }), t.jsx("p", { className: "memory-content", children: l.content }), c.length > 0 && t.jsx("div", { className: "memory-tags", children: c.map(m => { const f = Hu[m] || { bg: "rgba(100, 116, 139, 0.15)", color: "#64748b" }; return t.jsx("span", { className: "memory-tag", style: { backgroundColor: f.bg, color: f.color }, children: m }, m); }) }), t.jsxs("div", { className: "memory-stats", children: [t.jsxs("div", { className: "memory-stat", children: [t.jsx(st, { className: "h-3 w-3" }), t.jsxs("span", { children: [l.accessCount, " accesos"] })] }), l.lastAccessed && t.jsxs("div", { className: "memory-stat", children: [t.jsx(De, { className: "h-3 w-3" }), t.jsx("span", { children: Qe(l.lastAccessed) })] }), t.jsx("div", { className: "memory-stat created", children: Qe(l.createdAt) })] })] }); }
function rw({ memory: l, onClick: n }) { const i = Math.round(l.importance * 100), c = l.tags || []; return t.jsxs("tr", { onClick: n, className: "memory-row", children: [t.jsx("td", { children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "memory-icon-sm", children: t.jsx(Gl, { className: "h-4 w-4" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "memory-title-sm", children: l.summary || l.content.substring(0, 50) }), t.jsxs("div", { className: "memory-id-sm", children: ["#", l.id] })] })] }) }), t.jsx("td", { children: t.jsx("div", { className: "flex flex-wrap gap-1", children: c.slice(0, 3).map(u => { const m = Hu[u] || { bg: "rgba(100, 116, 139, 0.15)", color: "#64748b" }; return t.jsx("span", { className: "memory-tag-sm", style: { backgroundColor: m.bg, color: m.color }, children: u }, u); }) }) }), t.jsx("td", { className: "text-center", children: t.jsxs("span", { className: "stat-value-sm", children: [i, "%"] }) }), t.jsx("td", { className: "text-center", children: t.jsx("span", { className: "stat-value-sm", children: l.accessCount }) }), t.jsx("td", { className: "text-center text-muted-foreground text-sm", children: Qe(l.createdAt) })] }); }
function iw() { const [l, n] = z.useState(""), [i, c] = z.useState([]), [u, m] = z.useState([]), [f, x] = z.useState("grid"), [b, N] = z.useState(null), [v, p] = z.useState(!1), { data: j, isLoading: k, isError: w, error: S } = m2({ tags: i }), E = I => { N(I), p(!0); }, O = () => { p(!1), N(null); }, D = I => { i.includes(I) || c([...i, I]); }, { data: q } = p2(), { data: Z } = x2(), { data: A } = h2(l, i), L = l.length > 2 ? A : j, y = (L || []).filter(I => { if (u.length > 0) {
    const le = fe(I.importance);
    if (!u.includes(le))
        return !1;
} return !0; }), M = (y == null ? void 0 : y.length) || 0, J = I => { c(le => le.includes(I) ? le.filter(ee => ee !== I) : [...le, I]); }, de = I => { m(le => le.includes(I) ? le.filter(ee => ee !== I) : [...le, I]); }, fe = I => { const le = I * 100; return le >= 70 ? "high" : le >= 40 ? "medium" : "low"; }; return k ? t.jsx("div", { className: "flex h-full items-center justify-center", children: t.jsx(Ae, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : w ? t.jsxs("div", { className: "flex h-full flex-col items-center justify-center gap-4", children: [t.jsx(ht, { className: "h-12 w-12 text-destructive" }), t.jsx("p", { className: "text-muted-foreground", children: "Error al cargar memorias" }), t.jsx("pre", { className: "text-xs text-destructive", children: String(S) })] }) : t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { className: "section-header", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Memorias" }), t.jsx("p", { className: "section-subtitle", children: "Sistema de memoria persistente para agentes IA" })] }), t.jsx("div", { className: "section-actions", children: t.jsxs("div", { className: "view-toggle", children: [t.jsx("button", { className: Q("view-toggle-btn", f === "grid" && "active"), onClick: () => x("grid"), title: "Vista Grid", children: t.jsx(Yl, { className: "h-4 w-4" }) }), t.jsx("button", { className: Q("view-toggle-btn", f === "list" && "active"), onClick: () => x("list"), title: "Vista Lista", children: t.jsx(Xl, { className: "h-4 w-4" }) })] }) })] }), t.jsxs("div", { className: "dashboard-stats-row", children: [t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon projects", children: t.jsx(Gl, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Total Memorias" }), t.jsx("div", { className: "stat-value", children: Vd((q == null ? void 0 : q.totalMemories) || 0) })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon green", children: t.jsx(Ys, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Importancia Prom." }), t.jsxs("div", { className: "stat-value", children: [(((q == null ? void 0 : q.avgImportance) || 0) * 100).toFixed(0), "%"] })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon active", children: t.jsx(st, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Accesos Totales" }), t.jsx("div", { className: "stat-value", children: Vd((q == null ? void 0 : q.totalAccesses) || 0) })] })] }), t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: "stat-icon agents", children: t.jsx(Cu, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: "Proyectos" }), t.jsx("div", { className: "stat-value", children: Vd((q == null ? void 0 : q.projectsWithMemories) || 0) })] })] })] }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [t.jsxs("div", { className: "relative flex-1", children: [t.jsx(ms, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), t.jsx("input", { type: "text", placeholder: "Buscar en memorias (min. 3 caracteres)...", value: l, onChange: I => n(I.target.value), className: "w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" })] }), t.jsxs("span", { className: "text-sm text-muted-foreground", children: [M, " memorias"] })] }), Z && Z.length > 0 && t.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-3", children: [t.jsx(ic, { className: "h-4 w-4 text-muted-foreground" }), Z.map(I => { const le = Hu[I.name] || { bg: "rgba(100, 116, 139, 0.15)", color: "#64748b" }, ee = i.includes(I.name); return t.jsxs("button", { onClick: () => J(I.name), className: Q("memory-tag-filter", ee && "selected"), style: ee ? { backgroundColor: le.color, color: "#fff" } : { backgroundColor: le.bg, color: le.color }, children: [I.name, " (", I.usageCount, ")"] }, I.name); })] }), t.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [t.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Importancia:" }), ["high", "medium", "low"].map(I => { const le = u.includes(I), ee = (L || []).filter(H => fe(H.importance) === I).length; if (ee === 0)
                            return null; const ue = { high: { label: "🔴 Alta (≥70%)", color: "#ef4444", bg: "rgba(239, 68, 68, 0.15)" }, medium: { label: "🟡 Media (40-69%)", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)" }, low: { label: "🟢 Baja (<40%)", color: "#22c55e", bg: "rgba(34, 197, 94, 0.15)" } }[I]; return t.jsxs("button", { onClick: () => de(I), className: "memory-tag-filter", style: le ? { backgroundColor: ue.color, color: "#fff" } : { backgroundColor: ue.bg, color: ue.color }, children: [ue.label, " (", ee, ")"] }, I); })] })] }), f === "grid" ? t.jsx("div", { className: "memories-grid", children: y && y.length > 0 ? y.map(I => t.jsx(nw, { memory: I, onClick: () => E(I.id) }, I.id)) : t.jsxs("div", { className: "col-span-full py-12 text-center text-muted-foreground", children: [t.jsx(ht, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), t.jsx("p", { children: l.length > 2 ? "No se encontraron memorias con ese criterio" : "No hay memorias registradas" })] }) }) : t.jsx("div", { className: "bg-card border border-border rounded-xl", style: { padding: 0, overflow: "hidden" }, children: t.jsxs("table", { className: "list-table", children: [t.jsx("thead", { children: t.jsxs("tr", { children: [t.jsx("th", { style: { width: "35%" }, children: "Memoria" }), t.jsx("th", { style: { width: "25%" }, children: "Tags" }), t.jsx("th", { style: { width: "12%", textAlign: "center" }, children: "Importancia" }), t.jsx("th", { style: { width: "12%", textAlign: "center" }, children: "Accesos" }), t.jsx("th", { style: { width: "16%", textAlign: "center" }, children: "Creada" })] }) }), t.jsx("tbody", { children: y && y.length > 0 ? y.map(I => t.jsx(rw, { memory: I, onClick: () => E(I.id) }, I.id)) : t.jsx("tr", { children: t.jsx("td", { colSpan: 5, children: t.jsxs("div", { className: "py-12 text-center text-muted-foreground", children: [t.jsx(ht, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), t.jsx("p", { children: l.length > 2 ? "No se encontraron memorias" : "No hay memorias" })] }) }) }) })] }) }), t.jsx(lw, { memoryId: b, isOpen: v, onClose: O, onTagClick: D })] }); }
const cw = [{ icon: Ql, label: "Total Items", value: "127", iconClass: "projects" }, { icon: cs, label: "En Progreso", value: "45", iconClass: "active" }, { icon: Eu, label: "Asignados", value: "12", iconClass: "agents" }, { icon: Ys, label: "Completados", value: "82", iconClass: "green" }], Vu = [{ name: "activo", count: 15, bg: "rgba(34, 197, 94, 0.15)", color: "#22c55e" }, { name: "pendiente", count: 8, bg: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" }, { name: "crítico", count: 3, bg: "rgba(239, 68, 68, 0.15)", color: "#ef4444" }, { name: "normal", count: 24, bg: "rgba(59, 130, 246, 0.15)", color: "#3b82f6" }, { name: "bajo", count: 10, bg: "rgba(100, 116, 139, 0.15)", color: "#64748b" }], Fd = [{ id: 1, title: "Ejemplo de Item con Título Largo que Se Trunca en Dos Líneas Máximo", subtitle: "ITEM-001", status: "activo", importance: 85, description: "Este es un ejemplo de descripción de contenido que muestra cómo se ve el texto en el card. La descripción se trunca a 3 líneas máximo para mantener un diseño limpio y consistente.", tags: ["activo", "crítico"], stats: [{ icon: st, value: "12 accesos" }, { icon: De, value: "hace 2h" }] }, { id: 2, title: "Segundo Ejemplo de Item", subtitle: "ITEM-002", status: "pendiente", importance: 60, description: "Otro ejemplo de card con diferente nivel de importancia y tags.", tags: ["pendiente", "normal"], stats: [{ icon: st, value: "5 accesos" }, { icon: De, value: "hace 1d" }] }, { id: 3, title: "Tercer Item de Ejemplo", subtitle: "ITEM-003", status: "normal", importance: 40, description: "Un ejemplo con importancia baja para mostrar los diferentes estados visuales.", tags: ["bajo"], stats: [{ icon: st, value: "0 accesos" }, { icon: De, value: "hace 3d" }] }, { id: 4, title: "Cuarto Ejemplo", subtitle: "ITEM-004", status: "activo", importance: 95, description: "Item con importancia muy alta para demostrar el indicador verde.", tags: ["activo", "crítico", "pendiente"], stats: [{ icon: st, value: "45 accesos" }, { icon: De, value: "hace 30m" }] }, { id: 5, title: "Quinto Item", subtitle: "ITEM-005", status: "normal", importance: 50, description: "Ejemplo con importancia media para mostrar el badge azul.", tags: ["normal"], stats: [{ icon: st, value: "8 accesos" }, { icon: De, value: "hace 5h" }] }, { id: 6, title: "Sexto Ejemplo de Item", subtitle: "ITEM-006", status: "bajo", importance: 25, description: "Card con baja prioridad para completar la demostración de estados.", tags: ["bajo", "normal"], stats: [{ icon: st, value: "2 accesos" }, { icon: De, value: "hace 1w" }] }];
function ow({ item: l, onClick: n }) { const i = l.importance, c = i >= 70 ? "high" : i >= 40 ? "medium" : "low"; return t.jsxs("div", { onClick: n, className: "memory-card", children: [t.jsxs("div", { className: "memory-header", children: [t.jsx("div", { className: "memory-icon", children: t.jsx(Ql, { className: "h-4 w-4" }) }), t.jsxs("div", { className: "memory-title-group", children: [t.jsx("h3", { className: "memory-title", children: l.title }), t.jsxs("span", { className: "memory-id", children: ["#", l.subtitle] })] }), t.jsxs("div", { className: Q("memory-importance", c), children: [t.jsx(Ys, { className: "h-3 w-3" }), t.jsxs("span", { children: [i, "%"] })] })] }), t.jsx("p", { className: "memory-content", children: l.description }), t.jsx("div", { className: "memory-tags", children: l.tags.map(u => { const m = Vu.find(f => f.name === u); return t.jsx("span", { className: "memory-tag", style: { backgroundColor: m == null ? void 0 : m.bg, color: m == null ? void 0 : m.color }, children: u }, u); }) }), t.jsxs("div", { className: "memory-stats", children: [l.stats.map((u, m) => { const f = u.icon; return t.jsxs("div", { className: "memory-stat", children: [t.jsx(f, { className: "h-3 w-3" }), t.jsx("span", { children: u.value })] }, m); }), t.jsx("div", { className: "memory-stat created", children: "Item de ejemplo" })] })] }); }
function dw({ item: l, onClick: n }) { const i = l.importance; return t.jsxs("tr", { onClick: n, className: "memory-row", children: [t.jsx("td", { children: t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("div", { className: "memory-icon-sm", children: t.jsx(Ql, { className: "h-4 w-4" }) }), t.jsxs("div", { children: [t.jsx("div", { className: "memory-title-sm", children: l.title }), t.jsxs("div", { className: "memory-id-sm", children: ["#", l.subtitle] })] })] }) }), t.jsx("td", { children: t.jsx("div", { className: "flex flex-wrap gap-1", children: l.tags.slice(0, 3).map(c => { const u = Vu.find(m => m.name === c); return t.jsx("span", { className: "memory-tag-sm", style: { backgroundColor: u == null ? void 0 : u.bg, color: u == null ? void 0 : u.color }, children: c }, c); }) }) }), t.jsx("td", { className: "text-center", children: t.jsxs("span", { className: "stat-value-sm", children: [i, "%"] }) }), t.jsx("td", { className: "text-center", children: t.jsx("span", { className: "stat-value-sm", children: l.stats[0].value.split(" ")[0] }) }), t.jsx("td", { className: "text-center text-muted-foreground text-sm", children: l.stats[1].value })] }); }
function uw() { const [l, n] = z.useState(""), [i, c] = z.useState([]), [u, m] = z.useState("grid"), f = x => { c(b => b.includes(x) ? b.filter(N => N !== x) : [...b, x]); }; return t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { className: "section-header", children: [t.jsxs("div", { children: [t.jsx("h1", { className: "section-title", children: "Oficina - Plantilla de Diseño" }), t.jsx("p", { className: "section-subtitle", children: "Página de referencia con todos los elementos estándar del sistema" })] }), t.jsx("div", { className: "section-actions", children: t.jsxs("div", { className: "view-toggle", children: [t.jsx("button", { className: Q("view-toggle-btn", u === "grid" && "active"), onClick: () => m("grid"), title: "Vista Grid", children: t.jsx(Yl, { className: "h-4 w-4" }) }), t.jsx("button", { className: Q("view-toggle-btn", u === "list" && "active"), onClick: () => m("list"), title: "Vista Lista", children: t.jsx(Xl, { className: "h-4 w-4" }) })] }) })] }), t.jsx("div", { className: "dashboard-stats-row", children: cw.map((x, b) => { const N = x.icon; return t.jsxs("div", { className: "stat-card", children: [t.jsx("div", { className: Q("stat-icon", x.iconClass), children: t.jsx(N, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "stat-content", children: [t.jsx("div", { className: "stat-label", children: x.label }), t.jsx("div", { className: "stat-value", children: x.value })] })] }, b); }) }), t.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [t.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [t.jsxs("div", { className: "relative flex-1", children: [t.jsx(ms, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), t.jsx("input", { type: "text", placeholder: "Buscar items (mínimo 3 caracteres)...", value: l, onChange: x => n(x.target.value), className: "w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" })] }), t.jsxs("span", { className: "text-sm text-muted-foreground", children: [Fd.length, " items"] })] }), t.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [t.jsx(ic, { className: "h-4 w-4 text-muted-foreground" }), Vu.map(x => { const b = i.includes(x.name); return t.jsxs("button", { onClick: () => f(x.name), className: Q("memory-tag-filter", b && "selected"), style: b ? { backgroundColor: x.color, color: "#fff" } : { backgroundColor: x.bg, color: x.color }, children: [x.name, " (", x.count, ")"] }, x.name); })] })] }), u === "grid" ? t.jsx("div", { className: "memories-grid", children: Fd.map(x => t.jsx(ow, { item: x }, x.id)) }) : t.jsx("div", { className: "bg-card border border-border rounded-xl", style: { padding: 0, overflow: "hidden" }, children: t.jsxs("table", { className: "list-table", style: { width: "100%", tableLayout: "fixed" }, children: [t.jsx("thead", { children: t.jsxs("tr", { children: [t.jsx("th", { style: { width: "35%" }, children: "Item" }), t.jsx("th", { style: { width: "25%" }, children: "Tags" }), t.jsx("th", { style: { width: "12%", textAlign: "center" }, children: "Importancia" }), t.jsx("th", { style: { width: "12%", textAlign: "center" }, children: "Accesos" }), t.jsx("th", { style: { width: "16%", textAlign: "center" }, children: "Fecha" })] }) }), t.jsx("tbody", { children: Fd.map(x => t.jsx(dw, { item: x }, x.id)) })] }) }), t.jsx("div", { className: "bg-card border border-border rounded-xl p-5", children: t.jsxs("div", { className: "flex items-start gap-3", children: [t.jsx(ht, { className: "h-5 w-5 text-solaria flex-shrink-0 mt-0.5" }), t.jsxs("div", { className: "flex-1", children: [t.jsx("h3", { className: "font-semibold text-sm mb-2", children: "Página Plantilla de Referencia" }), t.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Esta página muestra todos los elementos estándar del sistema de diseño SOLARIA DFO. Incluye cards de estadísticas, barra de búsqueda, selectores de tags, vista Grid/List, y todos los tamaños y espaciados estándar. Usa esta página como referencia visual al implementar nuevas páginas en el dashboard." }), t.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground", children: [t.jsx("div", { children: "• Título: 24px, font-weight 700" }), t.jsx("div", { children: "• Subtítulo: 13px, color muted" }), t.jsx("div", { children: "• Card padding: 16px" }), t.jsx("div", { children: "• Icon size: 32x32px (cards), 48x48px (stats)" }), t.jsx("div", { children: "• Card title: 14px, font-weight 600" }), t.jsx("div", { children: "• Card content: 13px, line-clamp 3" }), t.jsx("div", { children: "• Tag padding: 3px 8px, font-size 11px" }), t.jsx("div", { children: "• Grid gap: 16px" })] })] })] }) })] }); }
function ob() { return t.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: t.jsxs("div", { className: "flex flex-col items-center gap-4", children: [t.jsx("div", { className: "h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" }), t.jsx("p", { className: "text-muted-foreground", children: "Verificando sesion..." })] }) }); }
function mw({ children: l }) { const { isAuthenticated: n, _hasHydrated: i } = js(); return i ? n ? t.jsx(t.Fragment, { children: l }) : t.jsx(Bp, { to: "/login", replace: !0 }) : t.jsx(ob, {}); }
function fw() { const { isChecking: l } = R1(); return l ? t.jsx(ob, {}) : t.jsxs(Vy, { children: [t.jsx($e, { path: "/login", element: t.jsx(L2, {}) }), t.jsxs($e, { path: "/", element: t.jsx(mw, { children: t.jsx(q2, {}) }), children: [t.jsx($e, { index: !0, element: t.jsx(Bp, { to: "/dashboard", replace: !0 }) }), t.jsx($e, { path: "dashboard", element: t.jsx(G2, {}) }), t.jsx($e, { path: "projects", element: t.jsx(Z2, {}) }), t.jsx($e, { path: "projects/archived", element: t.jsx(Y4, {}) }), t.jsx($e, { path: "projects/:id", element: t.jsx(m4, {}) }), t.jsx($e, { path: "projects/:id/tasks", element: t.jsx(N4, {}) }), t.jsx($e, { path: "projects/:id/links", element: t.jsx(w4, {}) }), t.jsx($e, { path: "projects/:id/settings", element: t.jsx(T4, {}) }), t.jsx($e, { path: "projects/:id/roadmap", element: t.jsx(M4, {}) }), t.jsx($e, { path: "tasks", element: t.jsx(H4, {}) }), t.jsx($e, { path: "tasks/archived", element: t.jsx(G4, {}) }), t.jsx($e, { path: "agents", element: t.jsx(J4, {}) }), t.jsx($e, { path: "businesses", element: t.jsx(zp, {}) }), t.jsx($e, { path: "businesses/:businessId", element: t.jsx(zp, {}) }), t.jsx($e, { path: "infrastructure", element: t.jsx(ew, {}) }), t.jsx($e, { path: "design-hub", element: t.jsx(tw, {}) }), t.jsx($e, { path: "memories", element: t.jsx(iw, {}) }), t.jsx($e, { path: "office", element: t.jsx(uw, {}) }), t.jsx($e, { path: "settings", element: t.jsx(X4, {}) })] })] }); }
const hw = new _y({ defaultOptions: { queries: { staleTime: 1e3 * 60 * 5, refetchOnWindowFocus: !1, retry: 1 } } });
Jy.createRoot(document.getElementById("root")).render(t.jsx(Xn.StrictMode, { children: t.jsx(zy, { client: hw, children: t.jsx($v, { children: t.jsx(ej, { children: t.jsx(Gy, { children: t.jsx(fw, {}) }) }) }) }) }));
//# sourceMappingURL=index-D-TSKWNH.js.map
//# sourceMappingURL=index-D-TSKWNH.js.map