import { style } from "@vanilla-extract/css";

// use create theme to make the vars.

export const table = style({
  // "--highlight-background": "slateblue",
  // "--highlight-foreground": "white",
  // "--border-color": "var(--spectrum-global-color-gray-400)",
  // "--background-color": "var(--page-background)",
  // "--text-color": "var(--spectrum-alias-text-color)",
  // "--text-color-disabled": "var(--spectrum-alias-text-color-disabled)",
  padding: "0.286rem",
  border: "1px solid var(--border-color)",
  borderRadius: "6px",
  background: "var(--background-color)",
  outline: "none",
  borderSpacing: "0",
  minHeight: "100px",
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

const columnAndCell = style({
  padding: "4px 8px",
  textAlign: "left",
  outline: "none",
  selectors: {
    "&[data-focus-visible]": {
      outline: "2px solid var(--highlight-background)",
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
  selectors: {
    "&:after": { content: '""', display: "table-row", height: "2px" },
  },
});

export const row = style({
  borderRadius: "6px",
  outline: "none",
  cursor: "default",
  color: "var(--text-color)",
  fontSize: "1.072rem",
  position: "relative",
  transform: "scale(1)",
  selectors: {
    [`${tableHeader} &:last-child`]: {
      [column]: {
        borderBottom: "1px solid var(--border-color)",
        cursor: "default",
      },
    },
    "&[data-focus-visible]": {
      outline: "2px solid var(--highlight-background)",
      outlineOffset: "-2px",
      [`${cell}[data-focus-visible]`]: {
        outlineColor: "var(--highlight-foreground)",
        outlineOffset: "-4px",
      },
    },
    [`&[data-pressed] `]: {
      [cell]: {
        background: "var(--spectrum-global-color-gray-200)",
      },
    },
    '&[aria-selected="true"]': {
      [cell]: {
        background: "var(--highlight-background)",
        color: "var(--highlight-foreground)",
      },
    },

    //   ".react-aria-Button": {
    //     color: "var(--highlight-foreground)",
    //     "--focus-ring-color": "var(--highlight-foreground)",
    //     "--hover-highlight": "rgb(255 255 255 / 0.1)",
    //     "--active-highlight": "rgb(255 255 255 / 0.2)",
    //   },
    "&[aria-disabled]": { color: "var(--text-color-disabled)" },
  },
});

export const tableBody = style({
  selectors: {
    "&[data-empty]": { textAlign: "center", fontStyle: "italic" },
  },
});
