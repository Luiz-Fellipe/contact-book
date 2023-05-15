import { CSSProperties } from 'react';

// TYPES
import { fontSizeType } from 'styles/themes/default';

export interface IAvatarInitialsProps {
  name: string;
  size?: CSSProperties['width'];
  $fontSize?: fontSizeType;
}
