export const x = { red: "red" }

export const colorsTech = {
  accentColor: "#FFFFFF",
  secondColor: "",
  bodyColor: "",
  bodyBg: "",
  white: "#FFFFFF",
  black: "#EEEEEE",
}
export const colors = {
  primary: colorsTech.accentColor, //deklaracja musi byc wyżej
  secondary: colorsTech.secondColor,
  danger: "",
  info: "",
  success: "",
  light: "",
  dark: "",
}

export const font = {
  firstFont: "Times New Roman",
  secondaryFont: "",
  thin: 300,
  regular: 400,
  bold: 800,
  fontBase: 1,
  small: 0.75,
  lead: 1.25,
}

//${({ theme }) => theme.breakpoints.xl}
export const breakpoints = {
  sm: "@media (min-width: 375px)",
  md: "@media (min-width: 728px)",
  lg: "@media (min-width: 992px)",
  xl: "@media (min-width: 1200px)",
}
