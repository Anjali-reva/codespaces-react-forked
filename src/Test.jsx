import React, { useState } from 'react';

const StateSelector = () => {
    const [selectedState, setSelectedState] = useState(null);

    const handleStateClick = (state) => {
        setSelectedState(state);
    };

    return (
        <div>
            {['State 1', 'State 2', 'State 3', 'State 4', 'State 5'].map((each, index) => (
                <div
                    key={index}
                    onClick={() => handleStateClick(each)}
                    style={{
                        padding: '10px',
                        margin: '5px',
                        backgroundColor: selectedState == each ? 'lightblue' : 'white',
                        cursor: 'pointer',
                    }}
                >
                    {state}
                </div>
            ))}
        </div>
    );
};

export default StateSelector;
