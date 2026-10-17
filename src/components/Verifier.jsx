import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import { ShieldCheck, X, AlertTriangle, FileCode, CheckCircle2 } from "lucide-react";
import { verifyProof } from "../verifier.js";
const Verifier = ({ onClose, initialProof, gameVersion }) => {
  const [jsonInput, setJsonInput] = useState(initialProof ? JSON.stringify(initialProof, null, 2) : "");
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  useEffect(() => {
    if (initialProof) {
      runVerify();
    }
  }, []);
  const runVerify = async () => {
    try {
      const proof = typeof jsonInput === "object" ? jsonInput : JSON.parse(jsonInput);
      setStatus("verifying");
      setTimeout(async () => {
        const res = await verifyProof(proof, (p) => setProgress(p));
        setResult(res);
        setStatus(res.valid ? "success" : "fail");
      }, 100);
    } catch (e) {
      setStatus("fail");
      setResult({ reason: "Invalid JSON format" });
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-lg bg-[#09090b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[70vh]", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "p-4 border-b border-white/5 flex justify-between items-center bg-zinc-900/50", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(FileCode, { className: "text-emerald-500", size: 16 }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 41,
            columnNumber: 29
          }),
          "Proof Verifier"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 40,
          columnNumber: 25
        }),
        /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-500 font-mono mt-0.5", children: "SHA-256 STATE VALIDATION" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 44,
          columnNumber: 25
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 39,
        columnNumber: 21
      }),
      /* @__PURE__ */ jsxDEV("button", { onClick: onClose, className: "p-2 hover:bg-white/10 text-zinc-400 hover:text-white rounded-full transition-colors", children: /* @__PURE__ */ jsxDEV(X, { size: 18 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 46,
        columnNumber: 143
      }) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 46,
        columnNumber: 21
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 38,
      columnNumber: 17
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 relative bg-[#0c0c0e]", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 p-4", children: /* @__PURE__ */ jsxDEV(
        "textarea",
        {
          className: "w-full h-full bg-transparent border-0 font-mono text-[10px] md:text-xs text-zinc-400 resize-none focus:ring-0 focus:outline-none custom-scrollbar",
          placeholder: "// Paste proof object here...",
          value: jsonInput,
          onChange: (e) => setJsonInput(e.target.value),
          spellCheck: "false"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 52,
          columnNumber: 25
        }
      ) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 51,
        columnNumber: 21
      }),
      status === "verifying" && /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-4 left-4 right-4 bg-zinc-900/90 backdrop-blur border border-white/10 p-3 rounded-lg shadow-xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-[10px] font-bold text-emerald-400 mb-2", children: [
          /* @__PURE__ */ jsxDEV("span", { children: "VERIFYING HASH CHAIN" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 65,
            columnNumber: 33
          }),
          /* @__PURE__ */ jsxDEV("span", { children: [
            Math.floor(progress * 100),
            "%"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 66,
            columnNumber: 33
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 64,
          columnNumber: 29
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "w-full h-1 bg-zinc-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "h-full bg-emerald-500 transition-all duration-100", style: { width: `${progress * 100}%` } }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 69,
          columnNumber: 33
        }) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 68,
          columnNumber: 29
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 63,
        columnNumber: 25
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 50,
      columnNumber: 17
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-zinc-900/50 border-t border-white/5 p-4 space-y-4", children: [
      status === "success" && /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl animate-slide-up", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "p-1.5 bg-emerald-500 rounded-full text-black", children: /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 16 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 80,
          columnNumber: 33
        }) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 79,
          columnNumber: 29
        }),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-bold text-emerald-400", children: "Verification Successful" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 83,
            columnNumber: 33
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-emerald-500/60 font-mono", children: [
            "SCORE: ",
            Math.floor(result.score),
            " \u2022 VALID HASH"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 84,
            columnNumber: 33
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 82,
          columnNumber: 29
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 78,
        columnNumber: 25
      }),
      status === "fail" && /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 bg-red-500/10 border border-red-500/20 p-3 rounded-xl animate-slide-up", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "p-1.5 bg-red-500 rounded-full text-white", children: /* @__PURE__ */ jsxDEV(AlertTriangle, { size: 16 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 94,
          columnNumber: 33
        }) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 93,
          columnNumber: 29
        }),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-bold text-red-400", children: "Verification Failed" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 97,
            columnNumber: 33
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-red-400/60 font-mono", children: result?.reason || "Invalid Proof Data" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 98,
            columnNumber: 33
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 96,
          columnNumber: 29
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 92,
        columnNumber: 25
      }),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: runVerify,
          disabled: status === "verifying" || !jsonInput,
          className: "w-full bg-white hover:bg-emerald-400 hover:text-black text-black font-bold text-sm py-3 rounded-xl disabled:opacity-50 transition-all shadow-lg active:scale-[0.98]",
          children: status === "verifying" ? "Processing..." : "Run Validation"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 105,
          columnNumber: 21
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 76,
      columnNumber: 17
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 35,
    columnNumber: 14
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 34,
    columnNumber: 9
  });
};
export {
  Verifier
};
