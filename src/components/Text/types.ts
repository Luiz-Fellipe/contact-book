import { SlotProps } from '@radix-ui/react-slot';
import { defaultTheme } from '../../styles/themes/default';

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
   * @type {Pick<TextVariantsType, 'primary' | 'secondary' | 'gray' | 'black'>}
   * @memberof ITextProps
   */
  color?: 'primary' | 'secondary' | 'gray' | 'black';
  /**
   * sets a font-weight for the text
   *
   * @type {keyof typeof defaultTheme.fontWeight}
   * @memberof ITextProps
   */
  $fontWeight?: keyof typeof defaultTheme.fontWeight;
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
   * @type {keyof typeof defaultTheme.fontSize}
   * @memberof ITextProps
   */
  $fontSize?: keyof typeof defaultTheme.fontSize;

  /**
   * if true the whole text is always displayed on the screen, if necessary it breaks lines
   *
   * @type {boolean}
   * @memberof ITextProps
   */

  $withoutTextEllipses?: boolean;
}
