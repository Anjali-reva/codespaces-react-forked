import React, { useState } from 'react';

function DynamicCheckbox() {
    const [checkboxes, setCheckboxes] = useState([{ id: 1, isChecked: false }]); // Initial state with one checkbox

    const handleAddCheckbox = () => {
        const newCheckboxId = checkboxes.length + 1;
        setCheckboxes([...checkboxes, { id: newCheckboxId, isChecked: false }]);
    };

    const handleRemoveCheckbox = (idToRemove) => {
        const updatedCheckboxes = checkboxes.filter((checkbox) => checkbox.id !== idToRemove);
        setCheckboxes(updatedCheckboxes);
    };

    const handleCheckboxChange = (id) => {
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, isChecked: !checkbox.isChecked } : checkbox
        );
        setCheckboxes(updatedCheckboxes);
    };

    const checkedCheckboxes = checkboxes.filter((checkbox) => checkbox.isChecked);

    return (
        <div>
            <h2>Dynamic Checkbox</h2>
            {checkboxes.map((checkbox) => (
                <div key={checkbox.id}>
                    <input
                        type="checkbox"
                        id={`checkbox-${checkbox.id}`}
                        checked={checkbox.isChecked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    <label htmlFor={`checkbox-${checkbox.id}`}>Checkbox {checkbox.id}</label>
                    <button onClick={() => handleRemoveCheckbox(checkbox.id)}>Remove</button>
                </div>
            ))}
            <button onClick={handleAddCheckbox}>Add Checkbox</button>

            
            <div className='border m-1 p-1'>
                <h3>Checked Checkboxes:</h3>
                <ul>
                    {checkedCheckboxes.map((checkbox) => (
                        <li key={checkbox.id}>Checkbox {checkbox.id}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DynamicCheckbox;
