import React, { useState, useEffect } from 'react';
import DropdownList from '../DropdownList/DropdownList';
import './Dropdown.css';

const Dropdown = ({ optionsList = [], onSelect }) => {

    const [options, setOptions] = useState(optionsList)
    const [inputValue, setInputValue] = useState(options[0]?.value ?? '');
    const [showList, setShowList] = useState(false);

    const optionsClickHandler = ({ value }) => {
        setInputValue(value);
        setShowList(false);
        onSelect?.(value);
    }

    const onChangeHandler = (e) => {
        const newList = optionsList.filter((optionItem) => {
            if (optionItem?.value.toLowerCase().includes(e.target.value.toLowerCase())) return true
            return false;
        })
        console.log(newList)
        setOptions(newList);
        setInputValue(e.target.value);
    }

    return (
        <div className='dropdownWrapper'>
            <div className='inputWrapper'>
                <input className="input" value={inputValue} onFocus={() => setShowList(true)} onChange={onChangeHandler}/>
            </div>
            <div className='dropdownList'>
            {
                showList && (
                    <DropdownList
                        optionsList={options}
                        optionsClickHandler={optionsClickHandler}
                    />
                )
            }
            </div>
        </div>
    )
}

export default Dropdown;