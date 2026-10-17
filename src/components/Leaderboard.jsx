import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
import { Trophy, X, Loader2, ChevronLeft } from "lucide-react";
import { useLeaderboard } from "../hooks/useLeaderboard.js";
import { LeaderboardRow } from "./leaderboard/LeaderboardRow.jsx";
import { Pagination } from "./leaderboard/Pagination.jsx";
const Leaderboard = ({ onClose, onReplay }) => {
  const { allData, summaryList, loading, verifyScore } = useLeaderboard();
  const [viewMode, setViewMode] = useState("summary");
  const [selectedUsername, setSelectedUsername] = useState(null);
  const [page, setPage] = useState(0);
  const ITEMS_PER_PAGE = 5;
  const handleUserClick = (username) => {
    setSelectedUsername(username);
    setPage(0);
    setViewMode("detail");
  };
  const handleBack = () => {
    setViewMode("summary");
    setPage(0);
    setSelectedUsername(null);
  };
  const currentList = viewMode === "summary" ? summaryList : allData[selectedUsername]?.scores || [];
  const displayedItems = currentList.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);
  return /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-2xl bg-[#09090b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col", style: { height: "min(600px, 85vh)" }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "p-5 border-b border-white/5 bg-zinc-900/50 flex justify-between items-center shrink-0", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        viewMode === "detail" && /* @__PURE__ */ jsxDEV("button", { onClick: handleBack, className: "mr-2 p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors", children: /* @__PURE__ */ jsxDEV(ChevronLeft, { size: 20 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 50,
          columnNumber: 33
        }) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 49,
          columnNumber: 29
        }),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-bold text-white flex items-center gap-2", children: viewMode === "summary" ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-yellow-500", children: /* @__PURE__ */ jsxDEV(Trophy, { size: 18 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 57,
              columnNumber: 75
            }) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 57,
              columnNumber: 41
            }),
            "Leaderboard"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 56,
            columnNumber: 37
          }) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-6 h-6 rounded-full overflow-hidden bg-zinc-800", children: /* @__PURE__ */ jsxDEV("img", { src: allData[selectedUsername]?.avatarUrl, className: "w-full h-full object-cover", alt: "" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 63,
              columnNumber: 45
            }) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 62,
              columnNumber: 41
            }),
            selectedUsername
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 61,
            columnNumber: 37
          }) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 54,
            columnNumber: 29
          }),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-500 font-medium", children: viewMode === "summary" ? "GLOBAL RANKINGS \u2022 BEST SCORES" : "PLAYER HISTORY \u2022 ALL PROOFS" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 69,
            columnNumber: 29
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 53,
          columnNumber: 25
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 47,
        columnNumber: 21
      }),
      /* @__PURE__ */ jsxDEV("button", { onClick: onClose, className: "p-2 hover:bg-white/10 text-zinc-400 hover:text-white rounded-full transition-colors", children: /* @__PURE__ */ jsxDEV(X, { size: 20 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 75,
        columnNumber: 25
      }) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 74,
        columnNumber: 21
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 46,
      columnNumber: 17
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex flex-col min-h-0 bg-[#0c0c0e]", children: [
      loading ? /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex flex-col items-center justify-center gap-4 text-zinc-500", children: [
        /* @__PURE__ */ jsxDEV(Loader2, { size: 32, className: "animate-spin text-emerald-500" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 83,
          columnNumber: 29
        }),
        /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-bold tracking-widest uppercase", children: "Syncing Ledger" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 84,
          columnNumber: 29
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 82,
        columnNumber: 26
      }) : displayedItems.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex items-center justify-center text-zinc-600 text-xs", children: "No records found" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 87,
        columnNumber: 25
      }) : /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-y-auto no-scrollbar p-2 space-y-1", children: displayedItems.map((item, i) => {
        const rank = page * ITEMS_PER_PAGE + i + 1;
        return /* @__PURE__ */ jsxDEV(
          LeaderboardRow,
          {
            item,
            rank: viewMode === "summary" ? rank : i + 1,
            viewMode,
            onClick: () => viewMode === "summary" && handleUserClick(item.username),
            onReplay,
            onVerify: verifyScore,
            selectedUsername
          },
          item.id || item.username,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 93,
            columnNumber: 37
          }
        );
      }) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 89,
        columnNumber: 25
      }),
      /* @__PURE__ */ jsxDEV(
        Pagination,
        {
          page,
          totalItems: currentList.length,
          itemsPerPage: ITEMS_PER_PAGE,
          onPageChange: setPage
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 109,
          columnNumber: 21
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 80,
      columnNumber: 17
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 43,
    columnNumber: 13
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 42,
    columnNumber: 9
  });
};
export {
  Leaderboard
};
