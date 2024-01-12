import React, { forwardRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseColor } from '../../2.ReduxToolkit/Slice'

function BackgroundOptions({ bgVisible = false }) {

    const [Border, SetBorder] = useState(false)
    const [selection, setSelection] = useState()
    const dispatch = useDispatch()
    const color = useSelector((state)=>state.clickToShow.color)

    const selectionFn = (index_of_icon) => {
        switch (index_of_icon) {
            case 1:
                setSelection(1)
                dispatch(chooseColor('white'))
                break;
            case 2:
                setSelection(2)
                dispatch(chooseColor('#faaea8'))
                break;
            case 3:
                setSelection(3)
                break;
            case 4:
                setSelection(4)
                break;
            case 5:
                setSelection(5)
                break;
            case 6:
                setSelection(6)
                break;
            case 7:
                setSelection(7)
                break;
            case 8:
                setSelection(8)
                break;
            case 9:
                setSelection(9)
                break;
            case 10:
                setSelection(10)
                break;
            case 11:
                setSelection(11)
                break;
            case 12:
                setSelection(12)
                break;
            default:
                setSelection(1)
                break;
        }
        console.log(color)
    }

    return (
        <div
            className={`bg-white border rounded-2xl shadow-md z-40 ${bgVisible ? 'absolute' : 'hidden'} absolute  w-fit transition-all `}
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
                    className={`bg-[#b3bfdb] border 
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

export default forwardRef(BackgroundOptions)