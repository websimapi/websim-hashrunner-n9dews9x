import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { RotateCcw, Trophy, ShieldCheck, FileJson, Home, Eye, Check, Loader2, Share2 } from "lucide-react";
const ResultScreen = ({ score, proof, onVerify, onSave, onRestart, onHome, onReplay, isHashing, hashProgress }) => {
  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(proof, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hashrunner-proof-${Date.now()}.json`;
    a.click();
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-50 flex flex-col items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-fade-in", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-sm glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/10", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "relative p-10 flex flex-col items-center justify-center bg-gradient-to-b from-white/5 to-transparent border-b border-white/5", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-bold text-emerald-500 tracking-widest uppercase mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Trophy, { size: 14 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 21,
          columnNumber: 25
        }),
        " Run Complete"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 20,
        columnNumber: 21
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]", children: Math.floor(score) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 23,
        columnNumber: 21
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex items-center gap-2", children: proof && !isHashing ? /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]", children: [
        /* @__PURE__ */ jsxDEV(Check, { size: 10, strokeWidth: 4 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 29,
          columnNumber: 33
        }),
        " Proof Secured"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 28,
        columnNumber: 29
      }) : /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-amber-500/20", children: [
        /* @__PURE__ */ jsxDEV(Loader2, { size: 10, className: "animate-spin" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 33,
          columnNumber: 33
        }),
        " Finalizing"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 32,
        columnNumber: 30
      }) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 26,
        columnNumber: 21
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 19,
      columnNumber: 17
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "p-6 space-y-6 bg-zinc-950/30", children: isHashing ? /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 py-8 px-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-[10px] font-bold text-emerald-400 uppercase tracking-widest", children: [
        /* @__PURE__ */ jsxDEV("span", { children: "Mining Proof" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 44,
          columnNumber: 33
        }),
        /* @__PURE__ */ jsxDEV("span", { children: [
          Math.floor(hashProgress * 100),
          "%"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 45,
          columnNumber: 33
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 43,
        columnNumber: 29
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "w-full h-2 bg-zinc-800 rounded-full overflow-hidden border border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "h-full bg-emerald-500 shadow-[0_0_10px_currentColor] transition-all duration-300", style: { width: `${hashProgress * 100}%` } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 48,
        columnNumber: 33
      }) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 47,
        columnNumber: 29
      }),
      /* @__PURE__ */ jsxDEV("p", { className: "text-center text-[10px] text-zinc-500 font-mono", children: "CALCULATING SHA-256 NONCES..." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 50,
        columnNumber: 29
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 42,
      columnNumber: 25
    }) : /* @__PURE__ */ jsxDEV("div", { className: "animate-slide-up space-y-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: onRestart, className: "h-14 bg-white hover:bg-zinc-200 text-black rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]", children: [
          /* @__PURE__ */ jsxDEV(RotateCcw, { size: 18, strokeWidth: 2.5 }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 59,
            columnNumber: 37
          }),
          " Play Again"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 58,
          columnNumber: 33
        }),
        /* @__PURE__ */ jsxDEV("button", { onClick: onReplay, className: "h-14 bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]", children: [
          /* @__PURE__ */ jsxDEV(Eye, { size: 18, strokeWidth: 2.5 }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 62,
            columnNumber: 37
          }),
          " Watch Replay"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 61,
          columnNumber: 33
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 57,
        columnNumber: 29
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: onSave, className: "h-20 flex flex-col items-center justify-center gap-2 bg-zinc-900/50 hover:bg-zinc-800 border border-white/5 rounded-xl transition-all group", children: [
          /* @__PURE__ */ jsxDEV(Share2, { size: 20, className: "text-zinc-500 group-hover:text-blue-400 transition-colors" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 69,
            columnNumber: 37
          }),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-medium text-zinc-400", children: "Submit" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 70,
            columnNumber: 37
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 68,
          columnNumber: 33
        }),
        /* @__PURE__ */ jsxDEV("button", { onClick: downloadJson, className: "h-20 flex flex-col items-center justify-center gap-2 bg-zinc-900/50 hover:bg-zinc-800 border border-white/5 rounded-xl transition-all group", children: [
          /* @__PURE__ */ jsxDEV(FileJson, { size: 20, className: "text-zinc-500 group-hover:text-white transition-colors" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 73,
            columnNumber: 37
          }),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-medium text-zinc-400", children: "Save JSON" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 74,
            columnNumber: 37
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 72,
          columnNumber: 33
        }),
        /* @__PURE__ */ jsxDEV("button", { onClick: onVerify, className: "h-20 flex flex-col items-center justify-center gap-2 bg-zinc-900/50 hover:bg-zinc-800 border border-white/5 rounded-xl transition-all group", children: [
          /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 20, className: "text-zinc-500 group-hover:text-emerald-400 transition-colors" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 77,
            columnNumber: 37
          }),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-medium text-zinc-400", children: "Verify" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 78,
            columnNumber: 37
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 76,
          columnNumber: 33
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 67,
        columnNumber: 29
      }),
      /* @__PURE__ */ jsxDEV("button", { onClick: onHome, className: "w-full py-2 text-zinc-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors", children: "Return to Menu" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 82,
        columnNumber: 29
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 55,
      columnNumber: 25
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 40,
      columnNumber: 17
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 16,
    columnNumber: 13
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 15,
    columnNumber: 9
  });
};
export {
  ResultScreen
};
