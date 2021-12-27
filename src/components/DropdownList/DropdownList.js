import React, { useState } from 'react';
import './DropdownList.css';

const DropdownList = ({ optionsList = [], optionsClickHandler= () => {} }) => {

    return (
        <>
        {
            optionsList.length ? (
                <div className='dropdownListWrapper'>
                    <ul className='listWrapper'>
                        {
                            optionsList.map((optionsListItem) => {
                                return (
                                    <li key={optionsListItem.id} className='optionsListItem' onClick={() => optionsClickHandler(optionsListItem)}>
                                        {optionsListItem.value}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            ) : null
    }
    </> 
    )
}

export default DropdownList;