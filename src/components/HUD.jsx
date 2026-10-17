import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { ShieldCheck, PlayCircle, Radio } from "lucide-react";
const HUD = ({ score, hash, isVerified, tick, isReplay }) => /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-10 safe-area-inset-top", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-start w-full", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] font-bold text-emerald-500/80 uppercase tracking-widest mb-1 ml-1", children: "Current Score" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 11,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "text-6xl md:text-7xl font-black text-white leading-none tracking-tighter drop-shadow-2xl tabular-nums", children: Math.floor(score).toString().padStart(4, "0") }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 12,
        columnNumber: 17
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-end gap-3 pt-2", children: isReplay ? /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 bg-red-500/20 backdrop-blur-md border border-red-500/30 px-4 py-2 rounded-full text-red-400 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.2)]", children: [
      /* @__PURE__ */ jsxDEV(PlayCircle, { size: 14 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 21,
        columnNumber: 25
      }),
      /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-black tracking-widest uppercase", children: "Replay Mode" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 22,
        columnNumber: 25
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 20,
      columnNumber: 21
    }) : /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full", children: [
      /* @__PURE__ */ jsxDEV("div", { className: `relative flex h-2 w-2`, children: [
        /* @__PURE__ */ jsxDEV("span", { className: `animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isVerified ? "bg-emerald-400" : "bg-amber-400"}` }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 27,
          columnNumber: 27
        }),
        /* @__PURE__ */ jsxDEV("span", { className: `relative inline-flex rounded-full h-2 w-2 ${isVerified ? "bg-emerald-500" : "bg-amber-500"}` }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 28,
          columnNumber: 27
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 26,
        columnNumber: 25
      }),
      /* @__PURE__ */ jsxDEV("span", { className: `text-[10px] font-bold tracking-widest uppercase ${isVerified ? "text-emerald-400" : "text-amber-400"}`, children: isVerified ? "Live Verified" : "Syncing..." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 25
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 25,
      columnNumber: 21
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 18,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 7,
    columnNumber: 9
  }),
  /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-end w-full pb-safe opacity-80", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block", children: !isReplay && hash && /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-wider", children: [
        /* @__PURE__ */ jsxDEV(Radio, { size: 10, className: "text-emerald-500" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 45,
          columnNumber: 29
        }),
        "Latest Block Hash"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 44,
        columnNumber: 25
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "font-mono text-[10px] text-emerald-500/60 break-all max-w-xs bg-black/40 p-2 rounded border border-white/5 border-l-2 border-l-emerald-500/50", children: hash }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 48,
        columnNumber: 25
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 43,
      columnNumber: 21
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 41,
      columnNumber: 13
    }),
    isReplay && /* @__PURE__ */ jsxDEV("div", { className: "w-full text-center md:w-auto md:text-right", children: /* @__PURE__ */ jsxDEV("span", { className: "bg-black/60 backdrop-blur-md px-6 py-3 rounded-full text-white text-xs font-bold border border-white/10 shadow-xl", children: "Tap screen to exit replay" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 58,
      columnNumber: 21
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 57,
      columnNumber: 18
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 39,
    columnNumber: 9
  })
] }, void 0, true, {
  fileName: "<stdin>",
  lineNumber: 5,
  columnNumber: 5
});
export {
  HUD
};
