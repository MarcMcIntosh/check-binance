import { style } from "@vanilla-extract/css";
import { color, colors } from "../../styles/index.css";

export const tabs = style({
  display: "flex",
  padding: "24px",
  selectors: {
    "&[data-orientation=horizontal]": { flexDirection: "column" },
    "&[data-orientation=vertical]": { flexDirection: "row" },
  },
});

export const tab = style({
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
  paddingTop: "10px",
  borderRadius: "4px",
  outline: "none",
  selectors: {
    "&[data-focus-visible]": {
      boxShadow: `inset 0 0 0 2px ${color.highlight}`,
    },
  },
});
