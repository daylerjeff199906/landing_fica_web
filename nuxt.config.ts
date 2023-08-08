// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  target: "static",
  router: {
    base: "/landing_fica_web/",
  },
  css: [
    "@/assets/css/main.css",
    "@/assets/css/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};

// export default {
//   build: {
//     postcss: {
//       postcssOptions: {
//         plugins: {
//           tailwindcss: {},
//           autoprefixer: {},
//         },
//       },
//     },
//   },
//   css: [
//     '@/assets/css/main.css',
//     '@/assets/css/tailwind.css'
//   ],
//   devtools: { enabled: true }
// }
