import React from "react"
import { useSelector } from "react-redux"


export default function Test() {

    const each = useSelector((state)=>state.clickToShow.id)

    return (
        <div className="w-full flex flex-col justify-center">
            <div className="text-center">{each.id}</div>
            <button className="border p-1 my-2">Show</button>
        </div>
    )
}