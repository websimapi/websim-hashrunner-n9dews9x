import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { Medal, History, Calendar, ChevronRight, Eye, ShieldCheck, Loader2 } from "lucide-react";
import { decompressProof } from "../../compression.js";
const LeaderboardRow = ({ item, rank, viewMode, onClick, onReplay, onVerify, selectedUsername }) => {
  const isSummary = viewMode === "summary";
  const handleReplay = (e) => {
    e.stopPropagation();
    onReplay(decompressProof(item.proof));
  };
  const handleVerify = (e) => {
    e.stopPropagation();
    onVerify(item.id, selectedUsername);
  };
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      onClick,
      className: `flex items-center gap-3 p-3 rounded-xl border border-transparent transition-all group ${isSummary ? "hover:bg-white/5 hover:border-white/5 cursor-pointer active:scale-[0.99]" : "bg-white/[0.02] border-white/[0.02]"}`,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: `w-8 text-center font-black text-lg ${isSummary && rank === 1 ? "text-yellow-400" : isSummary && rank === 2 ? "text-zinc-300" : isSummary && rank === 3 ? "text-amber-600" : "text-zinc-700"}`, children: isSummary ? rank <= 3 ? /* @__PURE__ */ jsxDEV(Medal, { size: 20, className: "mx-auto" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 33,
          columnNumber: 43
        }) : rank : rank }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 28,
          columnNumber: 13
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: isSummary ? /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-9 h-9 rounded-full bg-zinc-800 border border-white/10 overflow-hidden shrink-0", children: /* @__PURE__ */ jsxDEV("img", { src: item.avatarUrl, className: "w-full h-full object-cover", alt: "" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 41,
            columnNumber: 29
          }) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 40,
            columnNumber: 25
          }),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-bold text-zinc-200 truncate", children: item.username }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 44,
              columnNumber: 29
            }),
            /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-zinc-600 font-bold uppercase tracking-wide flex items-center gap-1", children: [
              /* @__PURE__ */ jsxDEV(History, { size: 10 }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 46,
                columnNumber: 33
              }),
              " ",
              item.scores.length,
              " Runs"
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 45,
              columnNumber: 29
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 43,
            columnNumber: 25
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 39,
          columnNumber: 21
        }) : /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-zinc-500 font-mono flex items-center gap-2 mb-0.5", children: [
            /* @__PURE__ */ jsxDEV(Calendar, { size: 10 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 53,
              columnNumber: 29
            }),
            new Date(item.timestamp).toLocaleString(void 0, {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 52,
            columnNumber: 25
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-medium text-zinc-400 truncate w-32 md:w-auto", children: [
            "v",
            item.proof.version,
            " \u2022 ",
            item.tickCount,
            " Ticks"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 58,
            columnNumber: 25
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 51,
          columnNumber: 21
        }) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 13
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "text-right px-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-lg font-black text-emerald-400 tabular-nums leading-none", children: isSummary ? item.bestScore : item.score }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 67,
            columnNumber: 17
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "text-[9px] text-zinc-600 font-bold uppercase tracking-wider", children: "PTS" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 70,
            columnNumber: 17
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 66,
          columnNumber: 13
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 pl-2 border-l border-white/5", children: isSummary ? /* @__PURE__ */ jsxDEV("button", { className: "p-2 text-zinc-500 group-hover:text-white transition-colors", children: /* @__PURE__ */ jsxDEV(ChevronRight, { size: 18 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 77,
          columnNumber: 25
        }) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 76,
          columnNumber: 21
        }) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: handleReplay,
              className: "p-2 bg-zinc-900 hover:bg-emerald-500/20 hover:text-emerald-400 text-zinc-400 rounded-lg transition-colors border border-white/5",
              title: "Replay",
              children: /* @__PURE__ */ jsxDEV(Eye, { size: 16 }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 86,
                columnNumber: 29
              })
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 81,
              columnNumber: 25
            }
          ),
          item.verified_local ? /* @__PURE__ */ jsxDEV("div", { className: "p-2 bg-emerald-500/10 text-emerald-500 rounded-lg border border-emerald-500/20", children: /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 16 }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 90,
            columnNumber: 33
          }) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 89,
            columnNumber: 29
          }) : /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: handleVerify,
              disabled: item.verifying,
              className: "p-2 bg-zinc-900 hover:bg-white hover:text-black text-zinc-400 rounded-lg transition-colors border border-white/5 disabled:opacity-50",
              title: "Verify",
              children: item.verifying ? /* @__PURE__ */ jsxDEV(Loader2, { size: 16, className: "animate-spin" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 99,
                columnNumber: 51
              }) : /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 16 }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 99,
                columnNumber: 100
              })
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 93,
              columnNumber: 29
            }
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 80,
          columnNumber: 21
        }) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 74,
          columnNumber: 13
        })
      ]
    },
    void 0,
    true,
    {
      fileName: "<stdin>",
      lineNumber: 19,
      columnNumber: 9
    }
  );
};
export {
  LeaderboardRow
};
