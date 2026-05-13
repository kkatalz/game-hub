import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: '{colors.gray.50}', _dark: '#1f222e' },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
