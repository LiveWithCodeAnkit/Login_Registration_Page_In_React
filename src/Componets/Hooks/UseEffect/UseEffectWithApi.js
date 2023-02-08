import React, { useState, useEffect } from 'react'

const UseEffectWithApi = () => {
    const [Qutos, setQutos] = useState([])
    const [loading, setLoding] = useState(false)


    useEffect(() => {
        getQutos();
    }, [])

    const getQutos = async () => {



        // fetch("http://localhost:8000/Quotaes").then((resp) => console.log("##data", resp)).then(json => console.log("##data", json)).catch((error) => console.log("#EER", error))

        try {
            const Qinfo = await fetch("http://localhost:8000/Quotes");

            if (Qinfo.status === 200) {
                // console.log("try block", Qinfo)
                setQutos(await Qinfo.json());
            }

        } catch (error) {
            console.err("Api Not Work" + error)
        }

    }

    // console.log("input  ", Qutos);
    return (
        <>
            <div className='flex' style={{ marginTop: '50px' }}>
                {
                    Qutos.map((cuurInfo) => {
                        return (

                            <div className='card' key={cuurInfo.id} style={{ width: '18rem' }}>
                                <img src={cuurInfo.imgUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{cuurInfo.qtxt}</p>
                                </div>
                            </div>
                        )

                    })
                }
            </div>



        </>
    )
}

export default UseEffectWithApi



// await fetch("http://localhost:8000/Quotes").then((resp) => {
//                 console.log("then console", resp);