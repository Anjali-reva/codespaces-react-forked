import React, { forwardRef, useEffect, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import TooltipItem from '../SupportingComponents/Tooltip'
import BackgroundOptions from './BackgroundOptions';
import { img1 } from '../../img/img'
import MoreOption from './MoreOption';
import { chooseTitleAndText, toggleValue } from '../../2.ReduxToolkit/Slice';
import AdjusInput from './AdjusInput';


function PopupCard({ cardData, Title, Text, refForId, Color }) {

    const [bgOptionVisible, setBgOptionVisible] = useState(false)
    const [moreOption, setmoreOption] = useState(false);
    const [cardText, setCardText] = useState('TEST :: this is a card');
    const [cardTitle, setCardTitle] = useState('TEST :: this is a card');
    const [isNoteEditable, setIsNoteEditable] = useState(false)
    const color = useSelector((state) => state.clickToShow.color)
    const dispatch = useDispatch()



    const closeBtnFn = () => {
        dispatch(toggleValue(false))
        setBgOptionVisible(false)
        dispatch(chooseTitleAndText({
            id: cardData.id,
            Title: cardTitle,
            Text: cardText
        }))
    }

    const handleClickForAllOption = (index) => {
        setBgOptionVisible(false)
        setmoreOption(false)

        if (index == 1) {
            bgOptionVisible ? setBgOptionVisible(false) : setBgOptionVisible(true)
        }
        if (index == 2) {
            moreOption ? setmoreOption(false) : setmoreOption(true)
        }

    }

    useEffect(() => {
        setCardTitle(cardData.Title)
        setCardText(cardData.Text)
    }, [cardData])
    return (
        <div
            ref={refForId}
            className={`
             bg-[${color}] bg-white bg-right-bottom bg-cover 
               shadow-lg border rounded-md z-999 w-[70%] sm:w-[44%] min-h-fit p-3  absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transition-all
               `}
        >
            <div className=''>
                <div className='text-xl mb-2 '>

                    {/* {cardData.Title} */}
                    <input
                        type="text"
                        value={cardTitle}
                        onChange={(e) => setCardTitle(e.target.value)}
                        className='w-full bg-transparent outline-none '
                    />

                </div>

                <div className='text-gray-800 mb-11 overflow-y-auto relative'>
                    {/* {cardData.Text} */}

                    <AdjusInput
                        value={cardText}
                        onChangeValue={setCardText}
                        classname={`bg-transparent outline-none transition-all w-full`}
                        showPopup={isNoteEditable}

                    />
                </div>
            </div>

            {/* div for icons */}
            <div
                style={{ left: '1.3%' }}
                className={`bg-white absolute bottom-0  rounded-md w-[97.5%]
            flex justify-center items-center
            py-1 my-2 
            `}
            >
                <div className=" mr-3 ml-1 sm:mr-7 sm:ml-3 ">
                    <Icon icon="bx:bell-plus" color="#4a5568" height={18} />
                </div>

                <div
                    className="mr-3 sm:mr-7 relative "
                    onClick={() => handleClickForAllOption(1)}
                >
                    <Icon icon="tabler:color-filter" color="#4a5568" height={18} />
                    <div className='absolute top-[110%] -left-[120%]'>
                        {bgOptionVisible ? (<BackgroundOptions />) : null}

                    </div>
                </div>

                <div className="mr-3 sm:mr-7">
                    <Icon icon="fluent:image-24-regular" color="#4a5568" height={18} />
                </div>
                <div className="mr-3 sm:mr-7">
                    <Icon icon="bi:archive" color="#4a5568" height={18} />
                </div>
                <div className="mr-3 sm:mr-7 relative"
                    onClick={() => handleClickForAllOption(2)}
                >
                    <Icon icon="icon-park-outline:more-four" color="#4a5568" height={18} />
                    {moreOption ? (
                        <MoreOption />
                    ) : null}

                </div>

                <div className=' flex flex-1 justify-end '>
                    <button
                        className={`bg-transparent font-semibold hover:bg-gray-100 rounded-md text-[#4a5568] px-2 mr-2`}
                        onClick={() => closeBtnFn()}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(PopupCard)
