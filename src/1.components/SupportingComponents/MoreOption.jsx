import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, toggleValue } from "../../2.ReduxToolkit/Slice";


export default function MoreOption() {

    const [editlable, SetEditlable] = useState(false)
    const dispatch = useDispatch()
    const idForNote = useSelector((state => state.clickToShow.id))
    const toggleValue0 = useSelector((state) => state.clickToShow.toggleValue);

    const deleteBtn = () => {
        dispatch(deleteNote(idForNote))
        dispatch(toggleValue(false))
    }

    const lableBtn = () => {
        editlable ? SetEditlable(false) : SetEditlable(true)

    }
    const addLabel = () => {
        
    }

    return (
        <div className="absolute transition-all z-40 w-fit shadow-md">

            <ul className="border  text-left  rounded bg-white ">
                {!editlable ? (
                    <li
                        className={` mt-1 py-2 px-4 hover:bg-gray-100 text-gray-900 leading-tight tracking-tight transition-all cursor-pointer`}
                        onClick={() => deleteBtn()}
                    >
                        Delete note
                    </li>) : null}
                <li
                    className={` py-2 px-4 ${!editlable ? 'hover:bg-gray-100' : null}  text-gray-900 leading-tight tracking-tight transition-all cursor-pointer`}
                    onClick={() => !editlable ? SetEditlable(true) : null}
                >
                    <div className="flex justify-between">
                        <div
                            onClick={() => lableBtn()}
                            className={``}>Add label
                        </div>
                        <div
                            onClick={() => lableBtn()}
                            className={`${!editlable ? 'hidden' : 'block'}`}
                        >
                            &#10005;
                        </div>
                    </div>
                    {editlable ? (
                        <div>
                            <div className="flex mt-2 ">
                                <input
                                    type="text"
                                    placeholder="Enter label name"
                                    className="outline-none bg-transparent text-gray-700" />

                                <button onClick={() => addLabel()} className="ml-4 mr-0">&#10003;</button>
                            </div>
                            <div className="flex flex-col items-start mt-1">
                                <label htmlFor="HTML" className=" text-[0.9rem] mb-1 cursor-pointer ">
                                    <input type="checkbox" id="HTML" className="mr-2" />
                                    HTML
                                </label>

                                <label htmlFor="CSS" className=" text-[0.9rem] mb-1 ">
                                    <input type="checkbox" id="CSS" className="mr-2" />
                                    CSS
                                </label>

                                <label htmlFor="JavaScript" className=" text-[0.9rem] mb-1 ">
                                    <input type="checkbox" id="JavaScript" className="mr-2" />
                                    JavaScript
                                </label>
                                <label htmlFor="CSS" className=" text-[0.9rem] mb-1 ">
                                    <input type="checkbox" id="CSS" className="mr-2" />JavaScript
                                </label>
                            </div>
                        </div>
                    ) : null}
                </li>
                {!editlable ? (
                    <li
                        className=" mb-1 py-2 px-4 hover:bg-gray-100  text-gray-900 leading-tight tracking-tight transition-all">
                        Make a copy
                    </li>
                ) : null}

            </ul>
        </div >
    )
}
