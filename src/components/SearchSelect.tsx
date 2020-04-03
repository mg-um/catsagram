import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Card from './Card';
import { sizeToPx } from './Box';
import { ClickAwayListener } from './ClickAwayListener';


const Menu = styled(Card)`
  position: absolute;
  padding: 0px;
  width: 100%;
`

const Option = styled.div`
  background-color: white;
  padding: ${sizeToPx('sm')}px;
  
  &:not(:last-child){
    border-bottom: 1px solid rgba(219,219,219);
  }

  &:hover{
    background-color: #f3f3f3
  }
`

interface OptionValue {
  id: string;
  value: any;
  label: string;
}

interface SearchSelectProps {
  inputProps: InputHTMLAttributes<any>;
  options: OptionValue[];
  onSelect: (value: string | undefined) => void;
}

const SearchSelect: React.FC<SearchSelectProps> = ({ inputProps, options = [], onSelect }) => {

  const [isDropdownOpen, setIsDropDownOpen] = React.useState(false);
  const [filteredOptions, setFilteredOptions] = React.useState(options);
  const [inputSearchValue, setInputSearchValue] = React.useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value) {
      setIsDropDownOpen(true);
      setFilteredOptions(options.filter(opt => opt.label.toLowerCase().includes(value.toLowerCase())))
    } else {
      setIsDropDownOpen(false);
      onSelect(undefined);
    }
    setInputSearchValue(value)
  }

  const handleSelect = (option: OptionValue) => {
    setInputSearchValue(option.label)
    onSelect(option.value)
  }

  const handleClickAway = () => {
    setIsDropDownOpen(false);
  }

  return (
    <>
      <Input {...inputProps} value={inputSearchValue} onChange={handleOnChange} />
      {isDropdownOpen && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Menu>
            {filteredOptions.map(option =>
              <Option key={option.id} onClick={() => handleSelect(option)} >{option.label}</Option>
            )}
          </Menu>
        </ClickAwayListener>
      )}
    </>
  )
}

export default SearchSelect;