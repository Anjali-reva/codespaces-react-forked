import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../2.ReduxToolkit/Slice";


export default function MoreOption({ prps, handleOutsideClick }) {

    const dispatch = useDispatch()
    const idForNote = useSelector((state => state.clickToShow.id))

    const deleteBtn = () => {
        dispatch(deleteNote(idForNote))
        handleOutsideClick()
    }

    return (
        <div className="absolute z-40 w-28 shadow-md">

            <ul className="border rounded bg-white ">

                <li
                    className="mt-1 py-2 px-1 hover:bg-gray-100 text-gray-900 leading-tight tracking-tight"
                    onClick={() => deleteBtn()}
                >
                    Delete note</li>
                <li className=" py-2 px-1 hover:bg-gray-100  text-gray-900 leading-tight tracking-tight">Add label</li>
                <li className="mb-1 py-2 px-1 hover:bg-gray-100  text-gray-900 leading-tight tracking-tight">Make a copy</li>

            </ul>
        </div>
    )
}