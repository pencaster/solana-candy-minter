import { Theme } from "theme-ui"

import base from "./preset-base"

const theme: Theme = {
  ...base,
  colors: {
    background: "#232323",
    text: "#fff",
    primary: "#fff",
  },

  sizes: {
    container: "78rem",
  },
  config: {
    useLocalStorage: true,
  },

  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      border: "1px solid transparent",
      transition: "all .3s linear",
      "&:hover": {
        bg: "background",
        color: "primary",
        borderColor: "primary",
        cursor: "pointer",
      },
    },
  },

  styles: {
    ...base.styles,

    root: {
      ...base.styles?.root,
      fontSize: "62.5%",

      body: {
        fontSize: "1.5rem",
        lineHeight: 1.45,
      },

      img: {
        maxWidth: "100%",
        height: "auto",
      },

      p: {
        margin: 0,
      },
    },

    p: {
      margin: 0,
    },
  },
}

export default theme
