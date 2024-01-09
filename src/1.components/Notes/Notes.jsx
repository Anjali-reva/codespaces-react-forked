// // removeTodo: (state, action) => {
// //     state.todos = state.todos.filter((todo) => todo.id !== action.payload )
// // },

// // onClick={() => dispatch(removeTodo(todo.id))}

// import React, { useEffect, useState, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CreateNotes from '../CreateNotes/CreateNotes';
// import { showCard } from '../../2.ReduxToolkit/Slice';
// import { Icon } from '@iconify/react';


// function Notes() {

//     const [lsi, setLsi] = useState([]);
//     const [card, setCard] = useState(false);
//     const refForId = useRef(null)
//     const [cardText, setCardText] = useState('TEST :: this is a card');
//     const [hover, setHover] = useState(false);

//     const value = useSelector((state) => state.clickToShow.clickValue[state.clickToShow.clickValue.length - 1]);
//     const cardValue = useSelector((state) => state.clickToShow.cardValue)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         if (value && value.payload) {
//             const ls = { ...value.payload };
//             setLsi((prevLsi) => [...prevLsi, ls]);
//             console.log('lsi isi:', lsi);
//         }
//     }, [value]);

//     const handleClick = (each) => {
//         console.log(each.id)
//         dispatch(showCard(each.id))
//         setCardText(each.Text)
//         if (card == false) {
//             setCard(true)
//         } else { setCard(false) }

//     }
// }
// return (

//     <div
//         id='NoteDiv'
//         className='w-[calc(100%-4rem)] ml-16 mt-24 '
//     >
//         <CreateNotes />

//         <div
//             className={`w-full flex justify-center bg-white mt-6  px-10 ${card == true ? 'opacity-45' : null}`}>
//             <div
//                 className=' w-fit  bg-white columns-1 gap-x-2
//                     sm:columns-2
//                     md:columns-3
//                     lg:columns-4
//                     xl:columns-5 '
//             >
//                 {lsi.map((each) => (
//                     <div
//                         id={each.id}
//                         ref={refForId}
//                         className='z-50'
//                         contentEditable={'false'}
//                         onClick={() => (handleClick(each))}
//                     >
//                         <div
//                             className={` block border break-inside-avoid border-gray-200 w-full rounded-md h-fit text-sm overflow-auto mx-1 p-3 mb-2 leading-tight tracking-tight text-gray-700
//                             `}
//                         >

//                             <p

//                                 className='mb-3 heading text-gray-700 text-[1.200rem]'>{each.Title}</p>
//                             <p
//                             >{each.Text}</p>
//                             <div className={`flex bg-white mt-3  transition-all'} >
//                                     <div className='mr-7 hover:bg-gray-500'>
//                                         <Icon icon="bx:bell-plus" color='#4a5568' height={18} />
//                                     </div>
//                                     <div className='mr-7'>
//                                         <Icon icon="tabler:color-filter" color='#4a5568' height={18} />
//                                     </div>
//                                     <div className='mr-7'>
//                                         <Icon icon="fluent:image-24-regular" color='#4a5568' height={18} />
//                                     </div>
//                                     <div className='mr-7'>
//                                         <Icon icon="bi:archive" color='#4a5568' height={18} />
//                                     </div>
//                                     <div className=''>
//                                         <Icon icon="icon-park-outline:more-four" color='#4a5568' height={18} />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//                 <div
//                     className={` ${card == true ? 'fixed' : 'hidden'} border shadow-lg rounded-md z-999 w-[40%] h-36 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3 bg-white`}
//                 >
//                             {cardText}
//                         </div>
//     </div>
//     );
// }

//                 export default Notes;

import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateNotes from '../CreateNotes/CreateNotes';
import { showCard } from '../../2.ReduxToolkit/Slice';
import { Icon } from '@iconify/react';

function Notes() {
    const [lsi, setLsi] = useState([]);
    const [card, setCard] = useState(false);
    const refForId = useRef(null);
    const [cardText, setCardText] = useState('TEST :: this is a card');
    const [hover, setHover] = useState(false);

    const value = useSelector((state) => state.clickToShow.clickValue[state.clickToShow.clickValue.length - 1]);
    const cardValue = useSelector((state) => state.clickToShow.cardValue);
    const dispatch = useDispatch();

    useEffect(() => {
        if (value && value.payload) {
            const ls = { ...value.payload };
            setLsi((prevLsi) => [...prevLsi, ls]);
            console.log('lsi isi:', lsi);
        }
    }, [value]);

    const handleClick = (each) => {
        console.log(each.id);
        dispatch(showCard(each.id));
        setCardText(each.Text);
        if (card == false) {
            setCard(true);
        } else {
            setCard(false);
        }
    };

    return (
        <div
            id="NoteDiv"
            className="w-[calc(100%-4rem)] ml-16 mt-24 "
        >
            <CreateNotes />

            <div
                className={`w-full flex justify-center bg-white mt-6  px-10 ${card == true ? 'opacity-45' : null}`}
            >
                <div
                    className=" w-fit  bg-white columns-1 gap-x-2
                    sm:columns-2
                    md:columns-3
                    lg:columns-4
                    xl:columns-5 "
                >
                    {lsi.map((each) => (
                        <div
                            id={each.id}
                            ref={refForId}
                            className="z-50"
                            contentEditable="false"
                            onClick={() => handleClick(each)}
                        >
                            <div
                                className={` block border break-inside-avoid border-gray-200 w-full rounded-md h-fit text-sm overflow-auto mx-1 p-3 mb-2 leading-tight tracking-tight text-gray-700`}
                            >
                                <p className="mb-3 heading text-gray-700 text-[1.200rem]">{each.Title}</p>
                                <p>{each.Text}</p>
                                <div className={`flex bg-white mt-3  transition-all`} >
                                    <div className="mr-7 hover:bg-gray-500">
                                        <Icon icon="bx:bell-plus" color="#4a5568" height={18} />
                                    </div>
                                    <div className="mr-7">
                                        <Icon icon="tabler:color-filter" color="#4a5568" height={18} />
                                    </div>
                                    <div className="mr-7">
                                        <Icon icon="fluent:image-24-regular" color="#4a5568" height={18} />
                                    </div>
                                    <div className="mr-7">
                                        <Icon icon="bi:archive" color="#4a5568" height={18} />
                                    </div>
                                    <div className="">
                                        <Icon icon="icon-park-outline:more-four" color="#4a5568" height={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Notes;
