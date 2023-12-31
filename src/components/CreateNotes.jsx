import React, { useState } from 'react'
import { Icon } from '@iconify/react';

function CreateNotes() {

    const [onKeyDownEvent, setOnKeyDownEvent] = useState(false)


    return (
        <div id='CreateNotes' className=' mt-24  '>
            <div className=' rounded-xl shadow-md border block m-auto w-[35rem] px-4 py-3'>
                <input type="text"  onKeyDown={() => { console.log('input: key key key') }} placeholder='Title' className='font-semibold overflow-auto placeholder:text-gray-700 outline-none w-full' />

                <div className=''>
                    <input type="text" placeholder='Take a note...' className='my-4 font-sans overflow-auto placeholder:text-gray-600 outline-none w-full' />
                    <div className='flex items-center'>
                        <div className='mr-7'>
                            <Icon icon="bx:bell-plus" color='#4a5568' height={18} />
                        </div>
                        <div className='mr-7'>
                            <Icon icon="tabler:color-filter" color='#4a5568' height={18} />
                        </div>
                        <div className='mr-7'>
                            <Icon icon="fluent:image-24-regular" color='#4a5568' height={18} />
                        </div>
                        <div className='mr-7'>
                            <Icon icon="bi:archive" color='#4a5568' height={18} />
                        </div>
                        <div className='mr-7'>
                            <Icon icon="icon-park-outline:more-four" color='#4a5568' height={18} />
                        </div>
                        <div className='ml-[11.5rem] '>
                            <button className='bg-white hover:bg-gray-100 rounded-md text-[#4a5568] px-2 '>Save & Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNotes