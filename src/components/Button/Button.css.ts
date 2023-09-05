import { style } from "@vanilla-extract/css";

import { colors, color } from "../../styles/index.css";

export const button = style({
  color: colors.text,
  background: color.grey50,
  border: `1px solid ${colors.border}`,
  borderRadius: "4px",
  appearance: "none",
  verticalAlign: "middle",
  fontSize: "1.2rem",
  textAlign: "center",
  margin: "0",
  outline: "none",
  padding: "4px 12px",
  selectors: {
    "&[data-pressed]": {
      boxShadow: "inset 0 1px 2px rgb(0 0 0 / 0.1)",
      background: colors.backgroundPressed,
      borderColor: colors.borderPressed,
    },
    "&[data-focus-visible]": {
      borderColor: colors.focusRing,
      boxShadow: `0 0 0 1px ${colors.focusRing}`,
    },
    "&:disabled": {
      borderColor: colors.borderDisabled,
      color: colors.textDisabled,
    },
  },
});
