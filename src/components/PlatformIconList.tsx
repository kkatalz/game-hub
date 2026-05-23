import type { Platform } from '@/hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe, BsNintendoSwitch } from 'react-icons/bs';
import type { IconType } from 'react-icons/lib';

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: BsNintendoSwitch,
  android: FaAndroid,
  ios: MdPhoneIphone,
  mac: FaApple,
  linux: FaLinux,
  web: BsGlobe,
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack>
      {platforms.map((platform) => {
        const PlatformIcon = iconMap[platform.slug];
        if (!PlatformIcon) return null;
        return <Icon key={platform.id} as={PlatformIcon} color='gray.500' />;
      })}
    </HStack>
  );
};

export default PlatformIconList;
