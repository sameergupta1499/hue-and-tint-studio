/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

// export async function loadFonts () {
//   const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

//   webFontLoader.load({
//     google: {
//       families: ['Roboto:100,300,400,500,700,900&display=swap'],
//     },
//   })
// }

import WebFont from 'webfontloader'

export async function loadFonts() {
  WebFont.load({
    custom: {
      families: ['Josefin Sans'],
      urls: ['https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700;800&display=swap'],
    },
  })
}