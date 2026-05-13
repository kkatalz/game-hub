import { useColorMode } from '@/components/ui/color-mode';
import { HStack, Switch, Text } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root
        checked={colorMode === 'dark'}
        onCheckedChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>

      <Text whiteSpace='nowrap'>
        {colorMode === 'light' ? 'Light Mode' : 'Dark Mode'}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
