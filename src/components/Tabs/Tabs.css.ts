import { style } from "@vanilla-extract/css";

export const tabs = style({
  // "--highlight-color": "slateblue",
  // "--text-color": "var(--spectrum-global-color-gray-700)",
  // "--text-color-hover": "var(--spectrum-global-color-gray-800)",
  // "--text-color-selected": "var(--spectrum-global-color-gray-900)",
  // "--text-color-disabled": "var(--spectrum-alias-text-color-disabled)",
  display: "flex",
  selectors: {
    "&[data-orientation=horizontal]": { flexDirection: "column" },
    "&[data-orientation=vertical]": { flexDirection: "row" },
  },
});

export const tab = style({
  // "--highlight-background": "slateblue",
  // "--highlight-foreground": "white",
  // "--border-color": "var(--color-gray-400)",
  // "--background-color": "var(--page-background)",
  // "--text-color": "var(--alias-text-color)",
  // "--text-color-disabled": "var(--alias-text-color-disabled)",
  padding: "0.286rem",
  border: "1px solid var(--border-color)",
  borderRadius: "6px",
  background: "var(--background-color)",
  outline: "none",
  borderSpacing: "0",
  minHeight: "24px",
  alignSelf: "start",
  maxWidth: "100%",
  wordBreak: "break-word",
  selectors: {
    "&[data-focus-visible]": {
      borderColor: "var(--highlight-background)",
      boxShadow: "0 0 0 1px var(--highlight-background)",
    },
  },
});

export const tabList = style({
  display: "flex",
  selectors: {
    "&[aria-orientation=horizontal]": {
      borderBottom: "1px solid gray",
      [tab]: {
        borderBottom: "3px solid var(--border-color, transparent)",
      },
    },
    "&[aria-orientation=vertical]": {
      flexDirection: "column",
      borderRight: "1px solid gray",
      [tab]: {
        borderRight: "3px solid var(--border-color, transparent)",
      },
    },
  },
});

export const tabPanel = style({
  marginTop: "4px",
  padding: "10px",
  borderRadius: "4px",
  outline: "none",
  selectors: {
    "&[data-focus-visible]": {
      boxShadow: "inset 0 0 0 2px var(--highlight-color)",
    },
  },
});
