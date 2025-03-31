import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Dropdown.css';
import { IoIosArrowDown } from "react-icons/io";
const CustomDropdown = () => {
  return (
    <>
      
          <DropdownButton
            as={ButtonGroup}
            id={`dropdown-variants-primary`}
            variant={'primary'}
            title={<IoIosArrowDown />}
            className='dropdown-button'
          >
            <Dropdown.Item eventKey="1">Notícias</Dropdown.Item>
            <Dropdown.Item eventKey="2">História</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>Calendário</Dropdown.Item>
            <Dropdown.Item eventKey="4">Seja Sócio</Dropdown.Item>
            <Dropdown.Item eventKey="4">Elenco</Dropdown.Item>
          </DropdownButton>
        
    </>
  );
}

export default CustomDropdown;
