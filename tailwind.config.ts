import type { Config } from 'tailwindcss'

import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        general: ['general', ...fontFamily.sans],
        zentry: ['zentry', ...fontFamily.sans],
        'circular-web': ['circular-web', ...fontFamily.sans],
        'robert-medium': ['robert-medium', ...fontFamily.sans],
        'robert-regular': ['robert-regular', ...fontFamily.sans],
      },
      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD',
        },
        violet: {
          300: '#5724FF',
        },
        yellow: {
          100: '#8E983F',
          300: '#EDFF66',
        },
      },
    },
  },
  plugins: [],
}

export default config
