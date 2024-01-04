// // npm install react-responsive-masonry
// import React, { forwardRef, useEffect, useRef, useState } from 'react'
// import CreateNotes from '../CreateNotes/CreateNotes'
// import { useSelector } from 'react-redux'



// function Notes() {

//     const [list, setList] = useState([])
//     const value = useSelector(state => state.clickToShow.clickValue)
//     const Title = useSelector(state => state.clickToShow.Title)

//     setList({
//         Title: Title.Title,
//         Text: value.Text,
//         id: value.id,
//     }, ...list)

//     return (
//         <div
//             id='NoteDiv'
//             className='w-[calc(100%-4rem)] ml-16 mt-24
//         '>
//             <CreateNotes />

//             <div className='w-full flex justify-center bg-white mt-6  px-10'>
//                 <div className=' w-fit bg-white columns-5 gap-x-1 

//                 '>
//                     {list.map(each => (
//                         <div
//                             key={each.id}
//                             className='block border break-inside-avoid border-gray-200 w-56 rounded-md h-fit text-sm overflow-auto
//                             mx-1 p-3 mb-2 leading-tight tracking-tight text-gray-700'
//                         >
//                             <p className='mb-3 heading text-gray-700 text-[1.250rem]'>title</p>
//                             <p>{each.Text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Notes

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CreateNotes from '../CreateNotes/CreateNotes';

function Notes() {
    const [list, setList] = useState([]);
    const value = useSelector((state) => state.clickToShow.clickValue);
    const Title = useSelector((state) => state.clickToShow.Title);

    return (
        <div
            id='NoteDiv'
            className='w-[calc(100%-4rem)] ml-16 mt-24'
        >
            <CreateNotes />

            <div className='w-full flex justify-center bg-white mt-6  px-10'>
                <div
                    className=' w-fit bg-white columns-5 gap-x-1'
                >
                    {value.map((each) => (
                        <div
                            key={each.id}
                            className='block border break-inside-avoid border-gray-200 w-56 rounded-md h-fit text-sm overflow-auto mx-1 p-3 mb-2 leading-tight tracking-tight text-gray-700'
                        >
                            <p className='mb-3 heading text-gray-700 text-[1.250rem]'>{each.Title}</p>
                            <p>{each.Text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Notes;
