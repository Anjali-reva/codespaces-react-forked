import React, { forwardRef, useEffect, useRef, useState } from 'react'
import CreateNotes from '../CreateNotes/CreateNotes'
import { useSelector } from 'react-redux'

function Notes() {

    const [list, setList] = useState([])
    const [onFocus, setOnFocus] = useState(false)

    const value = useSelector(state => state.clickToShow.clickValue)

    // console.log('ref.current is:' ,ref.current);

    return (
        <div
            id='NoteDiv'
            className='w-[calc(100%-4rem)] ml-16 mt-24'>

            <CreateNotes />

            <div className='w-full h-32 my-2 flex flex-col items-center'>
                <div className='w-full justify-start
                 grid grid-rows-5 grid-cols-5 flex-wrap
                '>
                    {value &&
                        value.map(each => (
                            <div
                                key={each.id}
                                className='inline-block border border-gray-200 w-60 rounded-md h-fit text-sm
                                m-2 p-3 leading-tight tracking-tight text-gray-700'
                            >
                                <p className='mb-3 heading text-gray-700 text-[1.250rem]'>It ends with us.</p>
                                {each.Text}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Notes
