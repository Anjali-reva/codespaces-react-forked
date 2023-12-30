import React from 'react'
import { Icon } from '@iconify/react';

function Header() {
    return (
        <div className='w-full border-b  px-4 py-1 flex justify-between items-center '>

            {/* left side */}
            <div className=' flex  items-center  h-14'>
                <Icon icon="mdi:menu" color='#4a5568' width={24} />
                <div className='mx-5'>
                    <Icon icon="emojione-v1:note-pad" width={49} />
                </div>
                <p className='text-gray-700 text-xl font-semibold'>Notes.</p>
            </div>

            {/* center */}
            <div className='flex items-center mx-24 py-1 px-4 rounded-lg bg-gray-100'>
                <div className='m-2'>
                    <Icon icon="material-symbols:search" color='#4a5568' width={25} />
                </div>

                <input type="text" placeholder='Search' className='w-[37rem]  border-none outline-none bg-gray-100 placeholder:text-gray-400' />

                <div className='m-2'>
                    <Icon icon="ic:baseline-clear" color='#4a5568' width={25} />
                </div>
            </div>

            {/* Right */}
            <div>
                <div className='flex items-center '>
                    <div className='px-2'>
                        <Icon icon="solar:refresh-bold" color='#4a5568' width={25} />
                    </div>
                    <div className='px-2'>
                        <Icon icon="bi:view-list" color='#4a5568' width={25} />
                    </div>
                    <div className='px-2 pr-0' >
                        <Icon icon="ep:setting" color='#4a5568' width={25} />
                    </div>
                    <div className='ml-10 rounded-full flex items-center justify-center h-10 w-10 bg-orange-400'>
                        <p className='font-mono text-xl text-white'>S</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header