// // removeTodo: (state, action) => {
// //     state.todos = state.todos.filter((todo) => todo.id !== action.payload )
// // },

// // onClick={() => dispatch(removeTodo(todo.id))}

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateNotes from '../CreateNotes/CreateNotes';
import { idForColor, showCard } from '../../2.ReduxToolkit/Slice';
import { Icon } from '@iconify/react';
import PopupCard from '../SupportingComponents/PopupCard';
import TooltipItem from '../SupportingComponents/Tooltip';
import BackgroundOptions from '../SupportingComponents/BackgroundOptions';
// import { img1 } from '../../img/img';
import MoreOption from '../SupportingComponents/MoreOption';



function Notes() {

    const refForId = useRef([]);
    const [cardText, setCardText] = useState('');
    const [cardData, setCardData] = useState({});
    const [cardTitle, setCardTitle] = useState('');
    const [cardColor, setCardColor] = useState('');
    const [cardImg, setCardImg] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);
    const [bgVisible, setBgVisible] = useState(false);
    const [moreListVisible, setMoreListVisible] = useState(false);
    const value = useSelector((state) => state.clickToShow.clickValue);
    const dispatch = useDispatch();

    const handleClick = (each) => {
        // console.log(each.id);
        dispatch(showCard(each.id));
        setCardText(each.Text)
        setCardTitle(each.Title)
        setCardColor(each.color)
        setCardImg(each.Img)
        console.log(each)
        setCardData(each)
        handleTriggerClick()
    };


    const dispatchIdOnlick = () => {
        refForId && refForId.current.map((every) => {
            every?.addEventListener('click', () => {
                value.map((each) => {
                    // console.log(each.color)
                    if (each.id == every.id) {
                        // console.log("match :: each.id is: " + each.id + ' | every.id is: ' + every.id + "each.color is: " + each.color);
                        dispatch(idForColor(each.id))
                    }
                })
            })
        })
    }

    const BGOptionButton = (event) => {
        event.stopPropagation()
        !bgVisible ? setBgVisible(true) : setBgVisible(false)
        dispatchIdOnlick()
    }

    const moreOptionButton = (event) => {
        event.stopPropagation()
        !moreListVisible ? setMoreListVisible(true) : setMoreListVisible(false)
        dispatchIdOnlick()
    }

    // for Popup card
    const handleTriggerClick = () => {
        setIsPopupVisible(true);
    };

    const handleOutsideClick = (event) => {
        // if (refForId.current && !refForId.current.some((ref) => ref && ref.contains(event.target))) {
        //     setIsPopupVisible(false);
        // }
        setIsPopupVisible(false);
    };

    useEffect(() => {
        console.log(value)
    }, [value])

    const mouseOverfn = (condition, each) => {
        if (condition) {
            setMouseOver(true);
            document.getElementById(`${each.id}iconDiv`).style.opacity = '100%'
        } else if (!condition) {
            setMouseOver(false);
            document.getElementById(`${each.id}iconDiv`).style.opacity = '0%'
            setBgVisible(false)
            setMoreListVisible(false)
        };

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
                    className={`w-fit columns-1 gap-x-2 auto-cols-min
                    sm:columns-2
                    md:columns-3
                    lg:columns-4
                    xl:columns-5
                    2xl:columns-5`}
                >
                    {value.map((each, index) => (
                        <div
                            key={`${each.id}17-1-2024:05:03`}
                            id={each.id}
                            ref={(el) => refForId.current[index] = el}
                            className={``}
                            onClick={() => handleClick(each)}
                        >

                            <div
                                id={`${each.id}innerDiv`}
                                onMouseEnter={() => mouseOverfn(true, each)}
                                onMouseLeave={() => mouseOverfn(false, each)}
                                className={`
                                    ${each.color === "white" ? `border bg-[${each.color}] ` : `bg-[${each.color}]`} bg-cover bg-center
                                 block  break-inside-avoid  border-gray-200 w-full 
                                 rounded-md h-fit  mx-1 p-3 mb-2 leading-tight tracking-tight transition-all  hover:shadow-md
                                 `}
                            >
                                <p className="mb-3  text-black text-[1.200rem]">{each.Title}</p>
                                <p className=''>{each.Text}</p>

                                {/* all the icons are hear */}
                                <div
                                    id={`${each.id}iconDiv`}
                                    className={`flex mt-3 items-center justify-center bg-white rounded-md px-2 pt-1 opacity-0 transition-all`} >
                                    <div className="mr-5 ">
                                        <TooltipItem position="bottom" tooltipsText="Remind me">
                                            <Icon icon="bx:bell-plus" color="#4a5568" height={18} />
                                        </TooltipItem>
                                    </div>
                                    <div
                                        id='sakib'
                                        className="mr-5 relative"
                                        onClick={(event) => BGOptionButton(event)}
                                    >
                                        <TooltipItem position="bottom" tooltipsText="Background options">
                                            <Icon icon="tabler:color-filter" color="#4a5568" height={18} />
                                        </TooltipItem>

                                        {bgVisible ? (
                                            <BackgroundOptions />
                                        ) : null}
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

                                    <div
                                        className="relative"
                                        onClick={(event) => moreOptionButton(event)}
                                    >
                                        <TooltipItem position="bottom" tooltipsText="More">
                                            <Icon icon="icon-park-outline:more-four" color="#4a5568" height={18} />

                                            {moreListVisible ? (
                                                <MoreOption />
                                            ) : null}

                                        </TooltipItem>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isPopupVisible && (<PopupCard
                ref={refForId}
                Title={cardTitle}
                Text={cardText}
                Color={cardColor}
                img={cardImg}
                cardData={cardData}
                handleOutsideClick={handleOutsideClick}
            />)}
        </div>
    );
}

export default Notes;
