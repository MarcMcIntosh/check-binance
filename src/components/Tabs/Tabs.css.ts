import { style } from "@vanilla-extract/css";
import { color, colors } from "../../styles/index.css";

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
  //   padding: "10px",
  //   border: `1px solid ${colors.border}`,
  //   borderRadius: "6px",
  //   background: colors.background,
  //   outline: "none",
  //   borderSpacing: "0",
  //   minHeight: "24px",
  //   alignSelf: "start",
  //   maxWidth: "100%",
  //   wordBreak: "break-word",
  //   selectors: {
  //     "&[data-focus-visible]": {
  //       borderColor: color.highlightBackground,
  //       boxShadow: `0 0 0 1px ${color.highlightBackground}`,
  //     },
  //   },

  padding: "10px",
  cursor: "default",
  outline: "none",
  position: "relative",
  color: colors.text,
  transition: "color 200ms",
  selectors: {
    "&[data-hovered], &:focus": { color: "var(--text-color-hover)" },
    "&[aria-selected=true]": {
      color: "var(--text-color-selected)",
    },
    "&[aria-disabled]": {
      color: "var(--text-color-disabled)",
    },
    "&[data-focus-visible]:after": {
      content: "''",
      position: "absolute",
      inset: "4px",
      borderRadius: "4px",
      border: "2px solid var(--highlight-color)",
    },
  },
});

export const tabList = style({
  display: "flex",
  selectors: {
    "&[aria-orientation=horizontal]": {
      borderBottom: "1px solid gray",
      [`${tab}[aria-selected=true]`]: {
        borderBottom: `3px solid transparent`,
      },
    },
    "&[aria-orientation=vertical]": {
      flexDirection: "column",
      borderRight: "1px solid gray",
      [`${tab}[aria-selected=true]`]: {
        borderRight: `3px solid transparent`,
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
      boxShadow: `inset 0 0 0 2px ${color.highlight}`,
    },
  },
});
