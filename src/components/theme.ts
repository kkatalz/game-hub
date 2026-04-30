import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: '{colors.white}', _dark: '#12192a' },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
