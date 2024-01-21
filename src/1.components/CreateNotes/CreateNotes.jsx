import React, { forwardRef, useEffect, useState, useRef } from 'react'
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBoth, chooseColor } from '../../2.ReduxToolkit/Slice';
import { nanoid } from '@reduxjs/toolkit';
import TooltipItem from "../SupportingComponents/Tooltip";
import BackgroundOptions from './BackgroundOptions';


function CreateNotes(props) {

    const dispatch = useDispatch()
    const color = useSelector((state) => state.clickToShow.color)

    const [input1Value, setInput1Value] = useState('')
    const [input2Value, setInput2Value] = useState('')
    const [colorValue, setColorValue] = useState('')
    const [isEditing, setIsEditing] = useState(false);
    const [bgVisible, setBgVisible] = useState(false)
    const inputRef = useRef();

    // For dispatching all the data and clear input field
    const submit = () => {
        dispatch(updateBoth({
            id: nanoid(),
            Title: input1Value,
            Text: input2Value,
            color: color,
        }))
        if (input1Value) setInput1Value('')
        if (input2Value) setInput2Value('')
        setColorValue('white')
        setIsEditing(false)
        dispatch(chooseColor('white'))

    }

    // funcnality of click to show title and text input field (line: 30-43)
    const handleInputClick = () => {
        setIsEditing(true);
    };

    const handleOutsideClick = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setIsEditing(false);
            setBgVisible(false);

        }

    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
    }, []);

    useEffect(() => {
        setColorValue(color)
    }, [color]);

    return (
        <div
            id='CreateNotes'
            className=' bg-white  w-full  '>
            <div className={`bg-[${colorValue}]  rounded-xl shadow-md border  justify-center transition-all
                    sm:w-[75%] sm:m-auto
                    lg:w-[45%] lg:m-auto
                    w-[calc(100%-5rem)] ml-[2.8rem] mr-4
                    px-4 py-3
                `}>
                <div className={``}>
                    {isEditing ? (
                        <div ref={inputRef}>
                            {/* Title is hear */}
                            <div className={``}>
                                <input
                                    type="text"
                                    id='input1'
                                    placeholder='Title'
                                    className={`bg-[${colorValue}] transition-all font-semibold overflow-auto placeholder:text-gray-700 outline-none w-full`}
                                    value={input1Value}
                                    onChange={e => setInput1Value(e.target.value)}
                                />
                            </div>

                            {/* Body text is hear */}
                            <div>
                                <div className={``}>
                                    <input
                                        type="text"
                                        id='input2'
                                        value={input2Value}
                                        onChange={e => setInput2Value(e.target.value)}
                                        placeholder='Take a note...'
                                        className={`my-4 font-sans overflow-auto placeholder:text-gray-600 outline-none w-full bg-[${colorValue}] transition-all`}
                                    />
                                </div>

                                {/* All the icons are hear */}
                                <div className='flex items-center'>

                                    <div className='mr-7'>
                                        <TooltipItem position="bottom" tooltipsText="Remind me">
                                            <Icon icon="bx:bell-plus" color='#4a5568' height={18} />
                                        </TooltipItem>
                                    </div>

                                    <div onClick={() => { !bgVisible ? setBgVisible(true) : setBgVisible(false) }} className='mr-7 relative'>

                                        {/* background options */}
                                        <TooltipItem position="bottom" tooltipsText="Background options">
                                            <Icon icon="tabler:color-filter" color='#4a5568' height={18} />
                                        </TooltipItem>
                                        {bgVisible ? (<BackgroundOptions />) : null}

                                    </div>

                                    <div className='mr-7'>
                                        <TooltipItem position="bottom" tooltipsText="Add image">
                                            <Icon icon="fluent:image-24-regular" color='#4a5568' height={18} />
                                        </TooltipItem>
                                    </div>

                                    <div className='mr-7'>
                                        <TooltipItem position="bottom" tooltipsText="Archive">
                                            <Icon icon="bi:archive" color='#4a5568' height={18} />
                                        </TooltipItem>
                                    </div>

                                    <div className='mr-7'>
                                        <TooltipItem position="bottom" tooltipsText="More">
                                            <Icon icon="icon-park-outline:more-four" color='#4a5568' height={18} />
                                        </TooltipItem>
                                    </div>

                                    <div className=' w-[100%] flex justify-end'>
                                        <button
                                            onClick={() => submit()}
                                            className={`bg-white font-semibold hover:bg-gray-100 rounded-md text-[#4a5568] px-2 bg-[${colorValue}] transition-all`}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (

                        <div onClick={handleInputClick}>
                            <input
                                ref={inputRef}
                                type="text"
                                id='input1'
                                placeholder='Title'
                                className={`bg-[${colorValue}] transition-all font-semibold overflow-auto placeholder:text-gray-700 outline-none w-full`}
                                value={input1Value}
                                onChange={e => setInput1Value(e.target.value)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default CreateNotes