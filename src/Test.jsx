import React, { useState, useEffect, useRef } from 'react';

const ClickOutsideComponent = ({ children, setIsVisiblefn }) => {
    const [isVisible, setIsVisible] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsVisible(false);

            }else if(setIsVisiblefn){
                setIsVisible(true)

            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsVisiblefn]);

    return (
        <>
            {isVisible && (
                <div ref={ref}>
                    {children}
                </div>
            )}
        </>
    );
};

export default ClickOutsideComponent;


// const [isVisible, setIsVisible] = useState(true);

// const handleOutsideClick = () => {
//     setIsVisible(false);
// };

 
//<ClickOutsideComponent onOutsideClick={handleOutsideClick}>
//             ###
//</ClickOutsideComponent>
//<button onClick={() => setIsVisible(true)}>Show Component</button>
