import React, { forwardRef, useEffect, useState, } from 'react'
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import TooltipItem from '../SupportingComponents/Tooltip'


function PopupCard({ Title, Text, refForId }) {


    const [cardText, setCardText] = useState('TEST :: this is a card');
    const [cardTitle, setCardTitle] = useState('TEST :: this is a card');
    const cardValue = useSelector((state) => state.clickToShow.cardValue);

    useEffect(() => {
        setCardText(Text)
        setCardTitle(Title)
    }, [Text, Title])

    return (
        <div
            ref={refForId}
            className='border shadow-lg rounded-md z-999 overflow-hidden w-[40%] min-h-40 max-h-96  p-3 bg-white absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'
        >
            <div className=''>
                <div className='text-xl mb-2 '>

                    {cardTitle}

                </div>

                <div className='text-gray-800 mb-11 overflow-y-auto'>
                    {cardText}
                </div>
            </div>
            <div className={`fixed left-0 bg-white bottom-0 shadow-[0px_0px_3px_3px_rgba(0,0,0,0.2)] flex w-full  py-3  transition-all `}
            >
                <div className=" mr-7 ml-3 ">
                        <Icon icon="bx:bell-plus" color="#4a5568" height={18} />
                </div>

                <div className="mr-7 ">
                    <Icon icon="tabler:color-filter" color="#4a5568" height={18} />

                </div>
                <div className="mr-7">
                    <Icon icon="fluent:image-24-regular" color="#4a5568" height={18} />
                </div>
                <div className="mr-7">
                    <Icon icon="bi:archive" color="#4a5568" height={18} />
                </div>
                <div className="mr-7">
                    <Icon icon="icon-park-outline:more-four" color="#4a5568" height={18} />
                </div>
                <div className=' flex flex-1 justify-end '>
                    <button
                        className='bg-white font-semibold hover:bg-gray-100 rounded-md text-[#4a5568] px-2 mr-7 '>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(PopupCard)