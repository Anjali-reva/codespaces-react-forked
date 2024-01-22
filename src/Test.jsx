import React, { useState } from "react"



export default function Test({ valuefn }) {

    const [value, setValue] = useState(false)

    const add = () => {
        console.log(value)
        if (value == true) {
            valuefn('true')
            setValue(false)
        } else if (value == false) {
            valuefn('false')
            setValue(true)
        }

    }

    return (
        <div className="">
            <p>Test hear.</p>

            {/* <input className="border" type="text" value={value} onChange={(e) => setValue(e.target.value)} /> */}

            <button className="border" onClick={() => add()}>add</button>
        </div>
    )
}