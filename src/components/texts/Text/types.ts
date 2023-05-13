import { SlotProps } from '@radix-ui/react-slot';
import type { fontSizeType, fontWeightType } from 'styles/themes/default';

/**
 * Props for the Text component
 *
 * @interface ITextProps
 * @extends {SlotProps}
 */

export interface ITextProps extends SlotProps {
  /**
   * Variant to use for the Text
   *
   * @type {Pick<TextVariantsType, 'primary' | 'secondary' | 'gray' | 'black' | 'danger'>}
   * @memberof ITextProps
   */
  color?: 'primary' | 'secondary' | 'gray' | 'black' | 'danger';
  /**
   * sets a font-weight for the text
   *
   * @type {fontWeightType}
   * @memberof ITextProps
   */
  $fontWeight?: fontWeightType;
  /**
   * If the Text should be rendered as a text or paragraph,
   *
   * @type {string}
   * @memberof ITextProps
   */
  type?: 'paragraph' | 'text';
  /**
   * truncates text at a specific number of lines
   *
   * @type {number}
   * @memberof ITextProps
   */
  $lineClamp?: number;
  /**
   * text font size
   *
   * @type {fontSizeType}
   * @memberof ITextProps
   */
  $fontSize?: fontSizeType;

  /**
   * if true the whole text is always displayed on the screen, if necessary it breaks lines
   *
   * @type {boolean}
   * @memberof ITextProps
   */

  $withoutTextEllipses?: boolean;
}
