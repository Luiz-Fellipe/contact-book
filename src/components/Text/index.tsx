// TYPES
import { ITextProps } from './types';

// STYLES
import { StyledText } from './styles';

/**
 * Component to render a Text with different variants
 *
 * @param {ITextProps} props
 * @returns {JSX.Element}
 */
export const Text = ({
  color = 'black',
  type = 'text',
  $fontSize,
  $lineClamp,
  $withoutTextEllipses = false,
  ...rest
}: ITextProps) => {
  return (
    <StyledText
      type={type}
      color={color}
      $lineClamp={$lineClamp}
      $fontSize={$fontSize}
      $withoutTextEllipses={$withoutTextEllipses}
      {...rest}
    />
  );
};
