/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        plusjakarta: ["Plus Jakarta Sans", "sans-serif"],
        playwrite: ["Playwrite US Trad Guides", "cursive"],
      },
      backgroundImage: {
        banner: "url('/src/assets/vv1.png')",
        mBanner: "url('/src/assets/mobile-banner.png')",
        mMenu: "url('/src/assets/menu.png')",
        menu: "url('/src/assets/Rectangle 9.png')",
        test: "url('/src/assets/Group 1.png')",
        footerImg: "url('/src/assets/Rectangle 31.png')",
        m1: "url('/src/assets/1.png')",
        m2: "url('/src/assets/2.png')",
        m3: "url('/src/assets/3.png')",
        m4: "url('/src/assets/4.png')",
        menu1: "url('/src/assets/m1.png')",
        menu2: "url('/src/assets/m2.png')",
        menu3: "url('/src/assets/m3.png')",
        menu4: "url('/src/assets/m4.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};