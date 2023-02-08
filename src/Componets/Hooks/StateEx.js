import React, { useState } from 'react'

const StateEx = () => {


    //togle when user click on the click button  it will changed  {comment part 1}

    // const [studName, setStudName] = useState("UseState");

    // const val = studName;
    const handleSubmit = (e) => {
        // if (val === "UseState") {
        //     setStudName("change it");
        // } else {
        //     setStudName("UseState");
        // }



        //part 2
        const name = e.target.name;
        console.log(name)
        const val1 = e.target.value;
        console.log(val1)
        console.clear()
        setStudentList({ ...studentList, [name]: val1 })
        console.log(studentList)

    }

    const [studentList, setStudentList] = useState({

        studName: "",
        standerd: "",
        address: ""


    })


    return (
        <>
            {/* comment part 1 */}
            {/* <div>
                <h1>{studName}</h1>
                <button type='submit' onClick={handleSubmit}>Click Me</button>
            </div> */}

            <div>
                <div>
                    <label>Student Name</label>
                    <input type="text" name="studName" onChange={handleSubmit} />
                </div>
                <div>
                    <label>Standerd</label>
                    <input type="text" name="standerd" onChange={handleSubmit} />
                </div>
                <div>
                    <label>Address</label>
                    <textarea rows={5} name="address" onChange={handleSubmit} ></textarea>
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}> Insert </button>
                </div>

            </div>

            {/* output */}


        </>
    )
}

export default StateEx