import React, { useEffect, useState } from 'react'
import CreateNotes from '../CreateNotes/CreateNotes'
import { useSelector } from 'react-redux'


function Notes() {

    const [list, setList] = useState([])

    const value = useSelector(state => state.clickToShow.clickValue)

    console.log('this is from value:', value);

    useEffect(() => {
    }, [value])

    const add = () => {
        setList([...list, value])
    }
    return (

        <div className='w-[calc(100%-4rem)] ml-16  mt-24'>
            <CreateNotes />
            <div className='w-full h-32 my-6 border border-black flex flex-col items-center   '>
                <button onClick={add}>add</button>
                <ul>
                    {list.map((each) => {
                        return (
                            <li key={each.id}><p>{each.text}</p></li>
                        )
                    })}
                </ul>

            </div>

        </div>
    )
}

export default Notes