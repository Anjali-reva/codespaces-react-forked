import React from 'react'
import { Icon } from '@iconify/react';

function Header() {
    return (
        <div className=' w-full z-99 top-0 border-b fixed px-4 py-1 flex justify-between 
        items-center bg-white '>
            {/* left side */}
            <div className=' flex items-center  h-14'>
                <div className='hoverStyle1 rounded-full p-3'>
                    <Icon icon="mdi:menu" color='#4a5568' width={24} />
                </div>
                <div className='mx-5'>
                    <Icon icon="emojione-v1:note-pad" width={49} />
                </div>
                <p className='text-gray-700 text-xl font-semibold'>Notes.</p>
            </div>

            {/* center */}
            <div className='flex items-center rounded-full sm:rounded-full md:rounded-lg  sm:mx-0 sm:ml-48 md:mx-0 py-0 sm:py-0 md:py-1 px-0 md:px-4 sm:px-0  bg-gray-100'>
                <div className='rounded-full bg-gray-100 hoverStyle1'>
                    <div className='m-2 p-[2px] rounded-full  bg-gray-100'>
                        <Icon icon="material-symbols:search" color='#4a5568' width={23} />
                    </div>
                </div>
                <input type="text" placeholder='Search' className='w-[40rem] hidden sm:hidden md:block md:w-[10rem] lg:w-[22rem] xl:w-[35rem] 2xl:w-[40rem]  border-none outline-none bg-gray-100 placeholder:text-gray-400' />

                <div className='m-2 hidden sm:hidden md:block'>
                    <Icon icon="ic:baseline-clear" color='#4a5568' width={25} />
                </div>
            </div>

            {/* Right */}
            <div>
                <div className='flex items-center '>
                    <div className='px-2 py-2 sm:px-2 sm:py-2 rounded-full hoverStyle1'
                        data-tooltip="Refresh" data-tooltip-location="bottom"
                    >
                        <Icon icon="heroicons-solid:refresh" color='#4a5568' width={25} />
                    </div>
                    <div className='px-2 py-2  rounded-full hidden sm:block hoverStyle1'
                        data-tooltip="List View" data-tooltip-location="bottom"
                    >
                        <Icon icon="fa-solid:list" color='#4a5568' width={25} />
                    </div>
                    <div className='px-2 py-2  rounded-full hoverStyle1'
                        data-tooltip="Setting" data-tooltip-location="bottom"
                    >
                        <Icon icon="ant-design:setting-filled" color='#4a5568' width={25} />
                    </div>
                    <div className=' m-1 sm:ml-10 rounded-full flex items-center justify-center h-10 w-10 bg-orange-500'
                        data-tooltip="Account" data-tooltip-location="bottom"
                    >
                        <p className='font-mono text-xl text-white'>S</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header