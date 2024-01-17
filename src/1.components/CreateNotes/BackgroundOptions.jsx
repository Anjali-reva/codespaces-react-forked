import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseColor } from '../../2.ReduxToolkit/Slice'

function BackgroundOptions({ props, setNoteColor, noteColor }) {

    const [Border, SetBorder] = useState(false)
    const [selection, setSelection] = useState()
    const dispatch = useDispatch()

    const selectionFn = (index_of_icon) => {
        // console.log(eachID)
        switch (index_of_icon) {
            case 1:
                setSelection(1)
                dispatch(chooseColor('white'))
                noteColor = 'white'
                setNoteColor(noteColor)
                break;
            case 2:
                setSelection(2)
                dispatch(chooseColor('#faaea8'))
                setNoteColor('#faaea8')
                break;
            case 3:
                setSelection(3)
                dispatch(chooseColor('#f39f76'))
                break;
            case 4:
                setSelection(4)
                dispatch(chooseColor('#fff8b8'))
                break;
            case 5:
                setSelection(5)
                dispatch(chooseColor('#e2f6d3'))
                break;
            case 6:
                setSelection(6)
                dispatch(chooseColor('#baddd3'))
                break;
            case 7:
                setSelection(7)
                dispatch(chooseColor('#d4e4ed'))
                break;
            case 8:
                setSelection(8)
                dispatch(chooseColor('#aeccdc'))
                break;
            case 9:
                setSelection(9)
                dispatch(chooseColor('#d3bfdb'))
                break;
            case 10:
                setSelection(10)
                dispatch(chooseColor('#f6e2dd'))
                break;
            case 11:
                setSelection(11)
                dispatch(chooseColor('#e9e3d4'))
                break;
            case 12:
                setSelection(12)
                dispatch(chooseColor('#efeff1'))
                break;
            default:
                setSelection(1)
                dispatch(chooseColor('white'))
                break;
        }
    }

    return (
        <div

            className={`bg-white border rounded-2xl shadow-md z-40  absolute  w-fit transition-all `}
        >
            <div className='flex m-2'>
                <div
                    onClick={() => selectionFn(1)}
                    className={`bg-white border 
                    ${selection == 1 ? 'border-2 border-blue-600 hover:border-blue-900' : 'border hover:border-black'} h-8 w-8 rounded-full ml-1`}>
                </div>

                <div
                    onClick={() => selectionFn(2)}
                    className={`bg-[#faaea8] border 
                    ${selection == 2 ? 'border-2 border-blue-600 hover:border-blue-900' : 'border hover:border-black'} h-8 w-8 rounded-full ml-1`}>
                </div>

                <div
                    onClick={() => selectionFn(3)}
                    className={`bg-[#f39f76] border 
                    ${selection == 3 ? 'border-2 border-blue-600 hover:border-blue-900' : 'border hover:border-black'} h-8 w-8 rounded-full ml-1`}>
                </div>

                {/* bg-[#fff8b8] */}
                <div
                    onClick={() => selectionFn(4)}
                    className={`bg-[#fff8b8] border 
                    ${selection == 4 ? 'border-2 border-blue-600 hover:border-blue-900' : 'border hover:border-black'} h-8 w-8 rounded-full ml-1`}>
                </div>

                {/* bg-[#e2f6d3] */}
                <div
                    onClick={() => selectionFn(5)}
                    className={`bg-[#e2f6d3] border 
                    ${selection == 5 ? 'border-2 border-blue-600 hover:border-blue-900' : 'border hover:border-black'} h-8 w-8 rounded-full ml-1`}>
                </div>

                {/* bg-[#baddd3] */}
                <div
                    onClick={() => selectionFn(6)}
                    className={`bg-[#baddd3] border 
                    ${selection == 6 ? 'border-2 border-blue-600 hover:border-blue-900' : 'border hover:border-black'} h-8 w-8 rounded-full ml-1`}>
                </div>

                {/* bg-[#d4e4ed] */}
                <div
                    onClick={() => selectionFn(7)}
                    className={`bg-[#d4e4ed] border 
                    ${selection == 7 ? 'border-2 border-blue-600 hover:border-blue-900' : 'border hover:border-black'} h-8 w-8 rounded-full ml-1`}>
                </div>
                {/* bg-[#aeccdc] */}
                <div
                    onClick={() => selectionFn(8)}
                    className={`bg-[#aeccdc] border 
                    ${selection == 8 ? 'border-2 border-blue-600 hover:border-blue-900' : 'border hover:border-black'} h-8 w-8 rounded-full ml-1`}>
                </div>

                {/* bg-[#b3bfdb] */}
                <div
                    onClick={() => selectionFn(9)}
                    className={`bg-[#d3bfdb] border 
                    ${selection == 9 ? 'border-2 border-blue-600 hover:border-blue-900' : 'border hover:border-black'} h-8 w-8 rounded-full ml-1`}>
                </div>

                {/* bg-[#f6e2dd]  */}
                <div
                    onClick={() => selectionFn(10)}
                    className={`bg-[#f6e2dd] border 
                    ${selection == 10 ? 'border-2 border-blue-600 hover:border-blue-900' : 'border hover:border-black'} h-8 w-8 rounded-full ml-1`}>
                </div>

                {/* bg-[#e9e3d4]  */}
                <div
                    onClick={() => selectionFn(11)}
                    className={`bg-[#e9e3d4] border 
                    ${selection == 11 ? 'border-2 border-blue-600 hover:border-blue-900' : 'border hover:border-black'} h-8 w-8 rounded-full ml-1`}>
                </div>

                {/* bg-[#efeff1] */}
                <div
                    onClick={() => selectionFn(12)}
                    className={`bg-[#efeff1] border 
                    ${selection == 12 ? 'border-2 border-blue-600 hover:border-blue-900' : 'border hover:border-black'} h-8 w-8 rounded-full ml-1`}>
                </div>

            </div>
            <hr />
            <div className='flex m-2'>
                <div className='bg-white border hover:border-black h-10 w-10 rounded-full ml-1'></div>
                <div className='bg-white border hover:border-black h-10 w-10 rounded-full ml-1'></div>
                <div className='bg-white border hover:border-black h-10 w-10 rounded-full ml-1'></div>
                <div className='bg-white border hover:border-black h-10 w-10 rounded-full ml-1'></div>
                <div className='bg-white border hover:border-black h-10 w-10 rounded-full ml-1'></div>
                <div className='bg-white border hover:border-black h-10 w-10 rounded-full ml-1'></div>
                <div className='bg-white border hover:border-black h-10 w-10 rounded-full ml-1'></div>
                <div className='bg-white border hover:border-black h-10 w-10 rounded-full ml-1'></div>
                <div className='bg-white border hover:border-black h-10 w-10 rounded-full ml-1'></div>
                <div className='bg-white border hover:border-black h-10 w-10 rounded-full ml-1'></div>
            </div>
        </div>
    )
}

export default BackgroundOptions