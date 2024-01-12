// // removeTodo: (state, action) => {
// //     state.todos = state.todos.filter((todo) => todo.id !== action.payload )
// // },

// // onClick={() => dispatch(removeTodo(todo.id))}

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateNotes from '../CreateNotes/CreateNotes';
import { showCard } from '../../2.ReduxToolkit/Slice';
import { Icon } from '@iconify/react';
import PopupCard from '../SupportingComponents/PopupCard';
import TooltipItem from '../SupportingComponents/Tooltip';

function Notes() {
    const [lsi, setLsi] = useState([]);
    const refForId = useRef(null);
    const [cardText, setCardText] = useState('');
    const [cardTitle, setCardTitle] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);

    const value = useSelector((state) => state.clickToShow.clickValue[state.clickToShow.clickValue.length - 1]);

    const dispatch = useDispatch();

    useEffect(() => {
        if (value && value.payload) {
            const ls = { ...value.payload };
            setLsi((prevLsi) => [...prevLsi, ls]);
            console.log('lsi isi:', lsi);
        }
    }, [value]);

    const handleTriggerClick = () => {
        setIsPopupVisible(true);
    };

    const handleClick = (each) => {
        console.log(each.id);
        dispatch(showCard(each.id));
        setCardText(each.Text)
        setCardTitle(each.Title)
        handleTriggerClick()
    };

    // for card
    const handleOutsideClick = (event) => {
        if (refForId.current && !refForId.current.contains(event.target)) {
            setIsPopupVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
            setMouseOver(false)
        }
    }, [])

    const mouseOverfn = (condition, each) => {
        if (condition) {
            setMouseOver(true);
            document.getElementById(`${each.id}iconDiv`).style.opacity = '100%'
        } else if (!condition) {
            setMouseOver(false);
            document.getElementById(`${each.id}iconDiv`).style.opacity = '0%'
        };

        // console.log(each.id)

    }


    return (
        <div
            id="NoteDiv"
            className={`w-[calc(100%-4rem)] h-screen bigdiv ml-16 mt-24 `}
        >
            <CreateNotes />

            <div
                className={`w-full flex justify-center mt-6 px-10  ${isPopupVisible && 'opacity-20'} `}
            >
                <div
                    className={` w-fit columns-1 gap-x-2
                    sm:columns-2
                    md:columns-3
                    lg:columns-4
                    xl:columns-5`}
                >
                    {lsi.map((each) => (
                        <div
                            id={each.id}
                            ref={refForId}
                            className=" relative"
                            contentEditable="false"
                            onClick={() => handleClick(each)}
                        >

                            <div
                                id={`${each.id}innerDiv`}
                                onMouseEnter={() => mouseOverfn(true, each)}
                                onMouseLeave={() => mouseOverfn(false, each)}
                                className={`block border break-inside-avoid bg-white border-gray-200 w-full 
                                 rounded-md h-fit text-sm  mx-1 p-3 mb-2 leading-tight tracking-tight text-gray-700  transition-all rounded-scrollbar-container hover:shadow-md
                                 `}
                            >
                                <p className="mb-3  text-black text-[1.200rem]">{each.Title}</p>
                                <p>{each.Text}</p>
                                {/* all the icons are hear */}
                                {/* ${mouseOver ? 'opacity-100' : 'opacity-0'} */}
                                <div
                                    id={`${each.id}iconDiv`}
                                    className={`flex mt-3 bg-white opacity-0 transition-all`} >
                                    <div className="mr-5 ">
                                        <TooltipItem position="bottom" tooltipsText="Remind me">
                                            <Icon icon="bx:bell-plus" color="#4a5568" height={18} />
                                        </TooltipItem>
                                    </div>

                                    <div className="mr-5 ">
                                        <TooltipItem position="bottom" tooltipsText="Background options">
                                            <Icon icon="tabler:color-filter" color="#4a5568" height={18} />
                                        </TooltipItem>
                                    </div>

                                    <div className="mr-5 ">
                                        <TooltipItem position="bottom" tooltipsText="Add image">
                                            <Icon icon="fluent:image-24-regular" color="#4a5568" height={18} />
                                        </TooltipItem>
                                    </div>

                                    <div className="mr-5 ">
                                        <TooltipItem position="bottom" tooltipsText="Archive">
                                            <Icon icon="bi:archive" color="#4a5568" height={18} />
                                        </TooltipItem>
                                    </div>

                                    <div className="  ">
                                        <TooltipItem position="bottom" tooltipsText="More">
                                            <Icon icon="icon-park-outline:more-four" color="#4a5568" height={18} />
                                        </TooltipItem>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isPopupVisible && (<PopupCard ref={refForId} Title={cardTitle} Text={cardText} />)}
        </div>
    );
}

export default Notes;
