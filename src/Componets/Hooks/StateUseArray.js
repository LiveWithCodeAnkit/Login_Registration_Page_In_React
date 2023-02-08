import React, { useState } from 'react'

const StateUseArray = () => {
    const studentinfo = [
        {
            id: 101,
            studName: "qwert",
            age: 27
        },
        {
            id: 102,
            studName: "robert",
            age: 23

        }
    ]

    const [StudentArray, setstudentArray] = useState(studentinfo);

    const handleClear = () => {
        console.log("clear");
        setstudentArray([]);
    }
    return (
        <>
            {
                StudentArray.map((currInfo) => {
                    return (
                        <div key={currInfo.id}>
                            <p>{`Your id ${currInfo.id} , Name is ${currInfo.studName} and Age ${currInfo.age}`}</p>

                        </div>
                    )
                })

            }
            <button type='submit' onClick={handleClear}>clear</button>
        </>
    )
}

export default StateUseArray