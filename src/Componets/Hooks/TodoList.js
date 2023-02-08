import React, { useState } from 'react'

const TodoList = () => {


    const myArray = [{
        idtodo: 101,
        texttodo: "Go to collage at tommorow"
    },
    {
        idtodo: 102,
        texttodo: "Go to Temple"
    }]

    const [todoInfo, settodoInfo] = useState(myArray)

    const handleRemove = (id) => {

        const newArray = todoInfo.filter((tinfo) => {
            // console.log(id);
            return (tinfo.idtodo !== id);

        })
        settodoInfo([...newArray]);
    }


    return (
        <>
            {
                todoInfo.map((currInfo) => {
                    return (
                        <div key={currInfo.idtodo} style={{ width: '1000px' }}>
                            <textarea cols={50} rows={3} style={{ background: 'yellow' }} defaultValue={currInfo.texttodo} />
                            <button type='submit' onClick={() => { handleRemove(currInfo.idtodo) }}>Delete</button>
                        </div>
                    )
                })
            }
        </>

    )
}

export default TodoList


// Short Circuit Evaluation with React