import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Pagination = ({ page, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) return null;
  return /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-4 py-4 border-t border-white/5 bg-zinc-900/30 mt-auto", children: [
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: () => onPageChange(Math.max(0, page - 1)),
        disabled: page === 0,
        className: "p-2 rounded-lg hover:bg-white/10 text-zinc-400 disabled:opacity-30 disabled:hover:bg-transparent",
        children: /* @__PURE__ */ jsxDEV(ChevronLeft, { size: 20 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 15,
          columnNumber: 17
        })
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 10,
        columnNumber: 13
      }
    ),
    /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-mono text-zinc-500", children: [
      "PAGE ",
      page + 1,
      " ",
      /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-700", children: "/" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 18,
        columnNumber: 33
      }),
      " ",
      totalPages
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 17,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: () => onPageChange(Math.min(totalPages - 1, page + 1)),
        disabled: page === totalPages - 1,
        className: "p-2 rounded-lg hover:bg-white/10 text-zinc-400 disabled:opacity-30 disabled:hover:bg-transparent",
        children: /* @__PURE__ */ jsxDEV(ChevronRight, { size: 20 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 25,
          columnNumber: 17
        })
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 20,
        columnNumber: 13
      }
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 9,
    columnNumber: 9
  });
};
export {
  Pagination
};
