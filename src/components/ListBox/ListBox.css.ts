import { style, globalStyle } from "@vanilla-extract/css";
import { color, colors } from "../../styles/index.css";

export const listBox = style({
  maxHeight: ["inherit", "300px"],
  overflow: "auto",
  padding: "2px",
  border: `"1px solid ${color.grey400}`,
  borderRadius: "6px",
  background: colors.background,
  outline: "none",
  maxWidth: "250px",
  boxSizing: "border-box",
});

export const item = style({
  margin: "2px",
  padding: "0.286rem 0.571rem",
  borderRadius: "6px",
  outline: "none",
  cursor: "default",
  color: color.grey800,
  fontSize: "1.072rem",
  selectors: {
    "&.selected": { background: color.highlightBackground, color: "white" },
    "&.focused": {
      boxShadow: `0 0 0 2px ${colors.background}, 0 0 0 4px ${color.highlight}`,
    },

    '&[aria-selected="true"]': {
      fontWeight: 600,
    },

    "&[data-focused], &[data-pressed]": {
      background: color.highlightBackground,
      color: color.highlightForeground,
    },
    "&[aria-disabled]": { color: colors.textDisabled },
  },
});

globalStyle(`${item} [slot="label"]`, { fontWeight: "bold" });
globalStyle(`${item} [slot="description"]`, { fontSize: "small" });
