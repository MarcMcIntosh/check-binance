import { globalStyle } from "@vanilla-extract/css";
import { colors } from "./styles/index.css";

globalStyle(":root", {
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  lineHeight: 1.5,
  fontWeight: 400,
  colorScheme: "light dark",
  color: colors.text,
  backgroundColor: colors.background, //"#242424",
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTextSizeAdjust: "100%",
});

globalStyle("body", {
  margin: "0",
  display: "flex",
  // placeItems: "center",
  minWidth: "320px",
  minHeight: "100vh",
});
