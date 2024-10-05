import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import type { RequiredConfig } from "tailwindcss/types/config";

const srcDir = ".";

export default (<RequiredConfig>{
  theme: {
    extend: {
      colors: {
        primary: colors.green,
      },
    },
  },
  plugins: [],
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/app.config.{js,ts}`,
  ],
}) satisfies Config;
