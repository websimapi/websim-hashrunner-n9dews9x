import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { Play, ShieldCheck, Trophy, Globe, Zap } from "lucide-react";
const Menu = ({ onStart, onLeaderboard, onVerify, gameVersion }) => /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-md glass-panel rounded-3xl p-8 flex flex-col gap-8 shadow-2xl shadow-black/50 border border-white/10 relative overflow-hidden", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none" }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 9,
    columnNumber: 13
  }),
  /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 13
  }),
  /* @__PURE__ */ jsxDEV("div", { className: "text-center space-y-4 relative z-10", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider uppercase", children: [
      /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 12 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 21
      }),
      /* @__PURE__ */ jsxDEV("span", { children: [
        "Protocol v",
        gameVersion,
        " Verified"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 16,
        columnNumber: 21
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 17
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-6xl font-black tracking-tighter text-white drop-shadow-lg", children: [
        "HASH",
        /* @__PURE__ */ jsxDEV("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600", children: "RUNNER" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 21,
          columnNumber: 29
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 20,
        columnNumber: 21
      }),
      /* @__PURE__ */ jsxDEV("p", { className: "text-zinc-400 font-medium text-sm tracking-wide", children: "Cryptographic Endless Runner" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 23,
        columnNumber: 21
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 19,
      columnNumber: 17
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 13,
    columnNumber: 13
  }),
  /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 relative z-10", children: [
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: onStart,
        className: "w-full group h-16 bg-white hover:bg-emerald-400 text-black rounded-2xl flex items-center justify-between px-6 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] hover:scale-[1.02] active:scale-[0.98]",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "font-black text-lg tracking-tight uppercase", children: "Start Mining" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 36,
              columnNumber: 25
            }),
            /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-bold opacity-60", children: "Generate Proof of Work" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 37,
              columnNumber: 25
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 35,
            columnNumber: 21
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-90 transition-transform duration-500", children: /* @__PURE__ */ jsxDEV(Play, { size: 18, fill: "currentColor", className: "ml-1" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 40,
            columnNumber: 25
          }) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 39,
            columnNumber: 21
          })
        ]
      },
      void 0,
      true,
      {
        fileName: "<stdin>",
        lineNumber: 31,
        columnNumber: 17
      }
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: onLeaderboard,
          className: "h-24 glass-panel hover:bg-white/5 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all hover:border-white/20 hover:-translate-y-1 group",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "p-2 rounded-full bg-zinc-800 text-zinc-400 group-hover:text-yellow-400 group-hover:bg-yellow-400/10 transition-colors", children: /* @__PURE__ */ jsxDEV(Trophy, { size: 20 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 50,
              columnNumber: 29
            }) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 49,
              columnNumber: 25
            }),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-zinc-400 group-hover:text-white", children: "Leaderboard" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 52,
              columnNumber: 25
            })
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 45,
          columnNumber: 21
        }
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: onVerify,
          className: "h-24 glass-panel hover:bg-white/5 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all hover:border-white/20 hover:-translate-y-1 group",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "p-2 rounded-full bg-zinc-800 text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-400/10 transition-colors", children: /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 20 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 60,
              columnNumber: 29
            }) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 59,
              columnNumber: 25
            }),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-zinc-400 group-hover:text-white", children: "Verify Proof" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 62,
              columnNumber: 25
            })
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 55,
          columnNumber: 21
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 44,
      columnNumber: 17
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 30,
    columnNumber: 13
  }),
  /* @__PURE__ */ jsxDEV("div", { className: "text-center relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center items-center gap-4 text-[10px] text-zinc-600 font-mono", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxDEV(Globe, { size: 10 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 70,
        columnNumber: 63
      }),
      " GLOBAL STATE"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 70,
      columnNumber: 21
    }),
    /* @__PURE__ */ jsxDEV("span", { className: "w-1 h-1 bg-zinc-700 rounded-full" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 71,
      columnNumber: 21
    }),
    /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxDEV(Zap, { size: 10 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 72,
        columnNumber: 63
      }),
      " SHA-256"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 72,
      columnNumber: 21
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 69,
    columnNumber: 17
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 68,
    columnNumber: 13
  })
] }, void 0, true, {
  fileName: "<stdin>",
  lineNumber: 6,
  columnNumber: 9
}) }, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 5,
  columnNumber: 5
});
export {
  Menu
};
