import React, { useState, useEffect } from 'react'

const UseEffectEx = () => {
    const [Count, setCount] = useState(0)

    useEffect(() => {
        document.title = Count;
        return () => {
            console.log("cleanUp function")
        }
    })

    return (
        <>
            <div>
                <label>{Count}</label>
                <br></br>
                <button onClick={() => setCount(Count + 1)}>Click </button>

            </div>
        </>
    )
}

export default UseEffectEx