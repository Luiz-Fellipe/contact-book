import ReactModal from 'react-modal';
import { useTheme } from 'styled-components';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { Text } from 'components/texts';
import { Button } from 'components/buttons';

// TYPES
import { ModalHeaderProps, ModalProps } from './types';

// STYLES
import { StyledContent, StyledModalHeader } from './styles';

ReactModal.setAppElement('#root');

export const Root = ({
  children,
  $maxWidth = '640px',
  $maxHeight = '640px',
  ...props
}: ModalProps) => {
  const theme = useTheme();

  const customStyles: ReactModal.Styles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '95%',
      height: '95%',
      maxHeight: $maxHeight,
      maxWidth: $maxWidth,
      display: 'flex',
      flexDirection: 'column',
      gap: theme?.space[16],
      border: 'none',
      backgroundColor: theme?.pallet.primary,
      padding: theme?.space[16],
      position: 'relative',
    },
    overlay: {
      backgroundColor: theme?.pallet.overlay,
    },
  };

  return (
    <ReactModal
      {...props}
      style={customStyles}
      onAfterOpen={() => {
        document.body.style.overflow = 'hidden';
        props?.onAfterOpen?.();
      }}
      onAfterClose={() => {
        document.body.style.overflow = 'unset';
        props?.onAfterClose?.();
      }}
    >
      {children}
    </ReactModal>
  );
};

export const Header = ({
  $withoutCloseButton = false,
  title,
  description,
  onClose,
  ...props
}: ModalHeaderProps) => {
  const theme = useTheme();
  return (
    <StyledModalHeader {...props}>
      <div>
        <Text
          $fontWeight="bold"
          $fontSize="lg"
          color="secondary"
          $withoutTextEllipses
        >
          <h2>{title}</h2>
        </Text>
        {!!description && (
          <Text
            $fontWeight="regular"
            color="gray"
            $fontSize="sm"
            $withoutTextEllipses
          >
            <p>{description}</p>
          </Text>
        )}
      </div>

      {!$withoutCloseButton && (
        <Button
          icon={faXmark}
          variant="link"
          $fontSize="lg"
          onClick={onClose}
          styleIcon={{
            color: theme?.pallet.black.B500,
          }}
        />
      )}
    </StyledModalHeader>
  );
};

export const Content = StyledContent;
Content.displayName = 'Content';
