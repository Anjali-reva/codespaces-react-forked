// // removeTodo: (state, action) => {
// //     state.todos = state.todos.filter((todo) => todo.id !== action.payload )
// // },

// // onClick={() => dispatch(removeTodo(todo.id))}

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateNotes from '../CreateNotes/CreateNotes';
import { idForColor, showCard, toggleValue, deleteLabels } from '../../2.ReduxToolkit/Slice';
import { Icon } from '@iconify/react';
import PopupCard from '../SupportingComponents/PopupCard';
import TooltipItem from '../SupportingComponents/Tooltip';
import BackgroundOptions from '../SupportingComponents/BackgroundOptions';
// import { img1 } from '../../img/img';
import MoreOption from '../SupportingComponents/MoreOption';
import ClickOutsideComponent from '../../Test';



function Notes() {

    const refForId = useRef([]);
    const [cardText, setCardText] = useState('');
    const [cardData, setCardData] = useState({});
    const [cardTitle, setCardTitle] = useState('');
    const [cardColor, setCardColor] = useState('');
    const [cardImg, setCardImg] = useState('');
    const [mouseOver, setMouseOver] = useState(false);
    const [OnMHlabel, setOnMHlabel] = useState(false);
    const [bgVisible, setBgVisible] = useState(false);
    const [moreListVisible, setMoreListVisible] = useState(false);
    const value = useSelector((state) => state.clickToShow.clickValue);
    const toggleValue0 = useSelector((state) => state.clickToShow.toggleValue);
    const dispatch = useDispatch();

    const handleClick = (each) => {
        // console.log(each.id);
        dispatch(showCard(each.id));
        setCardText(each.Text)
        setCardTitle(each.Title)
        setCardColor(each.color)
        setCardImg(each.Img)
        // console.log(each)
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
        // !moreListVisible ? setMoreListVisible(true) : setMoreListVisible(false)
        setMoreListVisible(true)
        dispatchIdOnlick()
    }

    // for Popup card
    const handleTriggerClick = () => {
        dispatchIdOnlick()
        dispatch(toggleValue(true))
    };

    const handleOutsideClick = (event) => {
        // if (refForId.current && !refForId.current.some((ref) => ref && ref.contains(event.target))) {
        //     setIsPopupVisible(false);}
        dispatch(toggleValue(false))
    };


    const mouseOverfn = (condition, each) => {
        if (condition) {
            setMouseOver(true);
            document.getElementById(`${each.id}iconDiv`).style.opacity = '100%'
        } else if (moreListVisible && !condition) {
            setMouseOver(false);
            document.getElementById(`${each.id}iconDiv`).style.opacity = '0%'
            setBgVisible(false)
            setMoreListVisible(false)
        };

    }

    const mouseOverfnForLabel = (condition, id) => {

        if (condition) {
            setOnMHlabel(true);
            document.getElementById(`${id}closeBtn`).style.opacity = '100%'
            document.getElementById(`${id}text`).style.opacity = '0%'

        } else if (!condition) {
            setOnMHlabel(false);
            document.getElementById(`${id}closeBtn`).style.opacity = '0%'
            document.getElementById(`${id}text`).style.opacity = '100%'
        };

    }

    const deletelabelBtn = (e, noteID, id) => {
        e.stopPropagation()
        dispatch(deleteLabels({
            noteID: noteID,
            id: id,
            for: 'notes'
        }))
    }

    useEffect(() => {
        dispatch(toggleValue(false))
        dispatchIdOnlick()
    }, [])

    return (
        <div
            id="NoteDiv"
            className={`w-[calc(100%-4rem)] h-screen bigdiv ml-16 mt-24 `}
        >
            <CreateNotes />

            <div
                className={`w-full flex justify-center mt-6 px-10  ${toggleValue0 && 'opacity-20'} `}
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

                                {/* labels goes hear */}
                                <div className='flex flex-wrap mt-1 ' >
                                    {each.label.map((each1) => {
                                        if (each1.isChecked) {
                                            return (
                                                <button

                                                    key={each1.id}
                                                    className='transition-all text-xs text-black/70 font-bold m-1 px-3   
                                                    rounded-full bg-black/15 relative'
                                                    value={each1.name}
                                                    onMouseEnter={() => mouseOverfnForLabel(true, `${each.id}+${each1.id}`)}
                                                    onMouseLeave={() => mouseOverfnForLabel(false, `${each.id}+${each1.id}`)}
                                                >
                                                    <div className='flex'>
                                                        <div
                                                            id={`${each.id}+${each1.id}text`}
                                                            className={`transition-all py-1 opacity-100`}
                                                        >
                                                            {each1.name}
                                                        </div>
                                                        <div
                                                            onClick={(e) => deletelabelBtn(e, each.id, each1.id)}
                                                            id={`${each.id}+${each1.id}closeBtn`}
                                                            className={`transition-all  absolute opacity-0 right-0  p-1 mr-0 
                                                            bg-transparent w-full text-center rounded-full`}
                                                        >
                                                            &#x2715;
                                                        </div>
                                                    </div>
                                                </button>
                                            )
                                        }
                                    })}
                                </div>

                                {/* all the icons are hear */}
                                <div
                                    id={`${each.id}iconDiv`}
                                    className={`flex mt-1 items-center justify-center bg-white rounded-md px-2 pt-1 opacity-0 transition-all`} >
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

                                    <div className="relative" onClick={(event) => moreOptionButton(event)}>
                                        <TooltipItem position="bottom" tooltipsText="More">
                                            <Icon icon="icon-park-outline:more-four" color="#4a5568" height={18} />
                                        </TooltipItem>
                                        {moreListVisible ? (
                                            <MoreOption for1={'note'} noteID={each.id} />
                                        ):null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {toggleValue0 && (<PopupCard
                ref={refForId}
                Title={cardTitle}
                Text={cardText}
                Color={cardColor}
                img={cardImg}
                cardData={cardData}
            />)}
        </div>
    );
}

export default Notes;
