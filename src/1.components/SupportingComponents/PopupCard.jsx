import React, { forwardRef, useEffect, useState, } from 'react'
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import TooltipItem from '../SupportingComponents/Tooltip'
import BackgroundOptions from './BackgroundOptions';
import { img1 } from '../../img/img';
import MoreOption from './MoreOption';


function PopupCard({ Title, Text, refForId, handleOutsideClick, Color, img }) {

    const [bgOptionVisible, setBgOptionVisible] = useState(false)
    const [moreOption, setmoreOption] = useState('false');
    const [cardText, setCardText] = useState('TEST :: this is a card');
    const [cardTitle, setCardTitle] = useState('TEST :: this is a card');
    const [cardColor, setCardColor] = useState('white');
    const [cardImg, setCardImg] = useState('white');

    const closeBtnFn = () => {
        handleOutsideClick()
        setBgOptionVisible(false)
    }

    const handleClickForAllOption = (index) => {
        setBgOptionVisible(false)
        setmoreOption(false)

        if (index == 1) setBgOptionVisible(true)
        if (index == 2) setmoreOption(true)
        
    }

    useEffect(() => {
        setCardText(Text)
        setCardTitle(Title)
        setCardColor(Color)
        setCardImg(img)
    }, [Text, Title, Color, img])

    return (
        <div
            ref={refForId}
            className={`
                ${cardImg !== 'white' ? `bg-[url(${img1})]` : `bg-[${cardColor}]`} bg-cover bg-center
             bg-[${cardColor}] border shadow-lg rounded-md z-999  w-[44%] min-h-40 max-h-96  p-3  absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transition-all`}
        >
            <div className=''>
                <div className='text-xl mb-2 '>

                    {cardTitle}

                </div>

                <div className='text-gray-800 mb-11 overflow-y-auto'>
                    {cardText}
                </div>
            </div>

            {/* div for icons */}
            <div className={`bg-[${cardColor}] fixed left-0 bottom-0  rounded-b-md flex w-full  py-3 `}
            >
                <div className=" mr-7 ml-3 ">
                    <Icon icon="bx:bell-plus" color="#4a5568" height={18} />
                </div>

                <div
                    className="mr-7 relative"
                    onClick={() => handleClickForAllOption(1)}
                >
                    <Icon icon="tabler:color-filter" color="#4a5568" height={18} />
                    <div className='absolute top-[110%] -left-[120%]'>
                        {bgOptionVisible ? (<BackgroundOptions />) : null}

                    </div>
                </div>

                <div className="mr-7">
                    <Icon icon="fluent:image-24-regular" color="#4a5568" height={18} />
                </div>
                <div className="mr-7">
                    <Icon icon="bi:archive" color="#4a5568" height={18} />
                </div>
                <div className="relative mr-7"
                    onClick={() => handleClickForAllOption(2)}
                >
                    <Icon icon="icon-park-outline:more-four" color="#4a5568" height={18} />
                    {moreOption ? (
                        <MoreOption handleOutsideClick={handleOutsideClick} />
                    ) : null}

                </div>


                <div className=' flex flex-1 justify-end '>
                    <button
                        className={`bg-[${cardColor}] font-semibold hover:bg-gray-100 rounded-md text-[#4a5568] px-2 mr-7`}
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