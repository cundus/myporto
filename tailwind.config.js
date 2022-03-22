module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#92745f",
        secondary: "#FFFBE9",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "bounce-in": {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
            "-webkit-transform": "translateY(20px)",
          },
          "60%": {
            opacity: 1,
            "-webkit-transform": "translateY(-10px)",
            transform: "translateY(-10px)",
          },
          "100%": {
            "-webkit-transform": "translateY(0)",
            transform: "translateY(0)",
          },
        },

        "slide-in": {
          "0%": {
            opacity: 0,
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            opacity: 1,
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "flip-in": {
          "0%": {
            opacity: 0,
            "-webkit-transform": "rotateY(90deg)",
            transform: "rotateY(90deg)",
          },
          "100%": {
            opacity: 1,
            "-webkit-transform": "rotateY(0deg)",
            transform: "rotateY(0deg)",
          },
        },
      },

      animation: {
        "flip-in": "flip-in 0.5s ease-in-out",
        "bounce-in": "bounce-in 0.6s ease-in-out",
        "slide-in": "slide-in 0.5s ease-out",
        "fade-in": "fade-in 1s ease-out",
      },
    },
  },
  plugins: [],
};
