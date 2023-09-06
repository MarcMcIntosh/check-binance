import { style, globalStyle } from "@vanilla-extract/css";
import { color, colors } from "../../styles/index.css";

export const table = style({
  padding: "0.286rem",
  border: `1px solid ${colors.border}`,
  borderRadius: "6px",
  background: colors.background,
  outline: "none",
  borderSpacing: "0",
  minHeight: "100px",
  alignSelf: "start",
  maxWidth: "100%",
  wordBreak: "break-word",
  selectors: {
    "&[data-focus-visible]": {
      borderColor: colors.backGroundHighlight,
      boxShadow: `0 0 0 1px ${color.highlightBackground}`,
    },
  },
});

const columnAndCell = style({
  padding: "4px 8px",
  textAlign: "left",
  outline: "none",
  selectors: {
    "&[data-focus-visible]": {
      outline: `2px solid ${color.highlightBackground}`,
      outlineOffset: "-2px",
    },
  },
});

const sortIndicator = style({});

export const column = style([
  columnAndCell,
  {
    selectors: {
      ["&[colspan]"]: { textAlign: "center" },
      [`&${sortIndicator}`]: { padding: "0 2px" },
      [`&[aria-sort="none"] &${sortIndicator}`]: { visibility: "hidden" },
    },
  },
]);

export const cell = style([
  columnAndCell,
  {
    selectors: {
      "&:first-child": { borderRadius: "6px 0 0 6px" },
      "&:last-child": { borderRadius: "0 6px 6px 0" },
    },
  },
]);

export const tableHeader = style({
  color: colors.text,
  selectors: {
    "&:after": { content: '" "', display: "table-row", height: "2px" },
  },
});

globalStyle(`${tableHeader} tr:last-child ${column}`, {
  borderBottom: `1px solid ${colors.border}`,
  cursor: "default",
});

export const row = style({
  borderRadius: "6px",
  outline: "none",
  cursor: "default",
  color: colors.text,
  fontSize: "1.072rem",
  position: "relative",
  transform: "scale(1)",
  selectors: {
    [`${tableHeader} &:last-child`]: {
      [column]: {
        borderBottom: `1px solid ${colors.border}`,
        cursor: "default",
      },
    },
    "&[data-focus-visible]": {
      outline: `2px solid ${color.highlightBackground}`,
      outlineOffset: "-2px",
      [`${cell}[data-focus-visible]`]: {
        outlineColor: color.highlightForeground,
        outlineOffset: "-4px",
      },
    },
    [`&[data-pressed] `]: {
      [cell]: {
        background: color.grey200,
      },
    },
    '&[aria-selected="true"]': {
      [cell]: {
        background: color.highlightBackground,
        color: color.highlightForeground,
      },
    },
    "&[aria-disabled]": { color: colors.textDisabled },
  },
});

export const tableBody = style({
  selectors: {
    "&[data-empty]": { textAlign: "center", fontStyle: "italic" },
  },
});
