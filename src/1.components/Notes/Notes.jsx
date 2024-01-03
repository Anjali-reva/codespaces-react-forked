// npm install react-responsive-masonry
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import CreateNotes from '../CreateNotes/CreateNotes'
import { useSelector } from 'react-redux'
import Masonry from 'react-masonry-css';


function Notes() {

    const [list, setList] = useState([])
    const value = useSelector(state => state.clickToShow.clickValue)

    const breakpoints = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
      };

    return (
        <div
            id='NoteDiv'
            className='w-[calc(100%-4rem)] ml-16 mt-24
        '>
            <CreateNotes />

            <div className='w-full mt-6  px-10'>
                <div className=' w-full flex flex-wrap
                '>

                    {value && value.map(each => (
                        <Masonry                                
                            breakpointCols={breakpoints}
                            className="my-masonry-grid "
                            columnClassName="my-masonry-grid_column"
                        >
                            <div
                                key={each.id}
                                className='inline-block border border-gray-200 w-56 rounded-md h-fit text-sm overflow-auto
                                mx-1 p-3 leading-tight tracking-tight text-gray-700'
                            >
                                <p className='mb-3 heading text-gray-700 text-[1.250rem]'>It ends with us.</p>
                                {each.Text}
                            </div>
                        </Masonry>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Notes

