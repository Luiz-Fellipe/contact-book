import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEye,
  faUserMinus,
  faUserPen,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';

//COMPONENTS
import { Button } from 'components/buttons';
import { Dropdown } from 'components/dropdowns';

interface IDropdownContact {
  onEdit: () => void;
}

export const DropdownContact = ({ onEdit }: IDropdownContact) => {
  const theme = useTheme();

  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <Button
          aria-label="Visualizar contato"
          icon={faEllipsisVertical}
          $fontSize="md"
          variant="link"
        />
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Dropdown.Item>
          <FontAwesomeIcon
            style={{ color: theme?.pallet.feedback.info }}
            icon={faEye}
          />
          <span>Visualizar</span>
        </Dropdown.Item>
        <Dropdown.Item onClick={onEdit}>
          <FontAwesomeIcon
            style={{ color: theme?.pallet.feedback.warning }}
            icon={faUserPen}
          />
          <span>Editar</span>
        </Dropdown.Item>
        <Dropdown.Item>
          <FontAwesomeIcon
            icon={faUserMinus}
            style={{ color: theme?.pallet.feedback.danger }}
          />
          <span>Deletar</span>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
};
