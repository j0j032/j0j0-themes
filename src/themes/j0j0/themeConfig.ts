import * as $ from '../../radixPalettes';

const neutral = typeof $.sand
const neutralTransparent = typeof $.sandA
const primary = typeof $.blue
// Define all colors needed: neutral, primary, error, success, warning, info, etc.


export const themeConfig = {
  colors: {
    // Activity Bar
    "activityBar.background": neutral[1],
    "activityBar.border": neutralTransparent[2],
    "activityBar.foreground": primary[12],
    "activityBar.activeBackground": neutral[2],
  }
}