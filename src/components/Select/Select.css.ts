import { style, globalStyle, keyframes } from "@vanilla-extract/css";
import { colors, color } from "../../styles/index.css";

const slideTop = keyframes({
  "0%": {
    transform: "translateY(-8px)",
    opacity: 0,
  },
  "100%": {
    transform: "translateY(0)",
    opacity: 1,
  },
});

const slideBottom = keyframes({
  "0%": {
    transform: "translateY(8px)",
    opacity: 0,
  },
  "100%": {
    transform: "translateY(0)",
    opacity: 1,
  },
});

export const button = style({
  color: colors.text,
  border: `1px solid ${colors.border}`,
  boxShadow: "0 1px 2px rgba(0 0 0 / 0.1)",
  borderRadius: "6px",
  appearance: "none",
  verticalAlign: "middle",
  fontSize: "1.072rem",
  padding: "0.286rem 0.286rem 0.286rem 0.571rem",
  margin: "0",
  outline: "none",
  display: "flex",
  alignItems: "center",
  maxWidth: "250px",
  selectors: {
    "&[data-focus-visible]": {
      borderColor: colors.focusRing,
      boxShadow: `0 0 0 1px ${colors.focusRing}`,
    },
    "&[data-pressed]": {
      background: colors.backgroundPressed,
    },
    "&:disabled": {
      borderColor: colors.backgroundDisabled,
      color: colors.textDisabled,
    },
  },
});

globalStyle(`${button}:disabled span[aria-hidden]`, {
  background: colors.borderDisabled,
});

export const selectValue = style({
  selectors: {
    "&[data-placeholder]": {
      fontStyle: "italic",
      color: color.grey700,
    },
    [`${button}  &[data-placeholder]`]: {
      color: colors.text,
    },
  },
});

globalStyle(`${selectValue} [slot="description"]`, { display: "none" });

export const select = style({
  selectors: {
    "&[data-placeholder]": {
      color: colors.textDisabled,
    },
  },
});

globalStyle(`${select} span[aria-hidden]`, {
  width: "1.5rem",
  lineHeight: "1.375rem",
  marginLeft: "1rem",
  padding: "1px",
  background: "slateblue",
  color: "white",
  borderRadius: "4px",
  fontSize: "0.857rem",
});

globalStyle(`${select} [slot="description"]`, { fontSize: "12px" });
globalStyle(`${select} [slot="errorMessage"]`, {
  fontSize: "12px",
  color: color.red600,
});

export const popover = style({
  border: `1px solid ${colors.border}`,
  minWidth: "48px",
  maxWidth: "250px",
  boxSizing: "border-box",
  boxShadow: "0 8px 20px rgba(0 0 0 / 0.1)",
  borderRadius: "6px",
  background: colors.background,
  outline: "none",
  selectors: {
    '&[data-placement="top"]': {
      transformOrigin: "translateY(8px)",
    },
    '&[data-placement="top"][data-entering]': {
      animation: `${slideTop} 200ms`,
    },
    '&[data-placement="top"][data-exiting]': {
      animation: `${slideTop} 200ms reverse ease-in`,
    },
    '&[data-placement="bottom"]': {
      transformOrigin: "translateY(8px)",
    },
    '&[data-placement="bottom"][data-entering]': {
      animation: `${slideBottom} 200ms`,
    },
    '&[data-placement="bottom"][data-exiting]': {
      animation: `${slideBottom} 200ms reverse ease-in`,
    },
  },
});
