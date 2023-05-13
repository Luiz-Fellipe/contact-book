import ReactModal from 'react-modal';

export type ModalProps = React.ComponentProps<typeof ReactModal> & {
  $maxWidth?: React.CSSProperties['maxWidth'];
  $maxHeight?: React.CSSProperties['maxHeight'];
};

type HeaderCommonProps = {
  title: string;
  description?: string;
};

type HeaderConditionalProps =
  | {
      $withoutCloseButton: true;
      onClose?: undefined;
    }
  | {
      $withoutCloseButton?: false;
      onClose: () => void;
    };

export type ModalHeaderProps = HeaderCommonProps & HeaderConditionalProps;
