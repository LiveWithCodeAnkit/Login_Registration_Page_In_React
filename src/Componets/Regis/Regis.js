import React, { useState, useEffect } from 'react'



function Regis(props) {
    const [RegisInfo, setInfo] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Password: "",
        Gender: "",
        Address: ""

    });

    const [RegisData, setRegisData] = useState([]);

    const handleInputChange = (e) => {
        console.log(e.target.name)
        const name = e.target.name;
        console.log(e.target.value);
        const value = e.target.value;

        setInfo({ ...RegisInfo, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newInfo = { ...RegisInfo, id: new Date().getTime().toString() }

        console.log(RegisData);

        setRegisData([...RegisData, newInfo]);

        console.log(RegisData);



        setInfo({ Name: "", Email: "", Address: "", Password: "", Phone: "" })

        setTimeout(() => {
            props.currPa(1)
        }, 8000)
    }

    useEffect(() => {
        console.log(RegisData)
    }, [RegisData])





    return (
        <>
            <form onSubmit={handleSubmit}>
                <div style={{ marginLeft: "483px", marginTop: "63px" }}>
                    <table style={{ textAlign: 'center' }}>

                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="Name" id="Name" value={RegisInfo.Name} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="email" id="Email" name="Email" value={RegisInfo.Email} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td><input type="text" id='Phone' name="Phone" value={RegisInfo.Phone} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="Password" id='Password' name="Password" value={RegisInfo.Password} onChange={handleInputChange} /></td>
                        </tr>

                        <tr>
                            <td>Gender</td>
                            <td><input type="radio" name="Gender" value="Male" checked={RegisInfo.Gender === 'Male'} onChange={handleInputChange} />Male</td>
                            <td><input type="radio" name="Gender" value="Female" checked={RegisInfo.Gender === 'Female'} onChange={handleInputChange} />Female</td>
                        </tr>{/*
                        <tr>
                            <td>Hobby</td>
                            <td>
                                <input type="checkbox" id="Hobby" name="Hobby" value="Study"  />Study
                            </td>
                            <td>
                                <input type="checkbox" id="Hobby" name="Hobby" value="Traval" />Traval
                            </td>
                          </tr> */}
                        <tr>
                            <td>Addres</td>
                            <td><textarea name="Address" rows="5" value={RegisInfo.Address} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td><button type='submit'  >Submit</button></td>
                        </tr>
                    </table>
                </div>

            </form>
            <div className='yy'>
                <table style={{ padding: '100px ' }}>
                    {
                        RegisData.map((currInfo) => {

                            return (

                                <tr key={currInfo.id}>
                                    <td>{currInfo.Name}</td>
                                    <td>{currInfo.Email}</td>
                                    <td>{currInfo.Phone}</td>
                                    <td>{currInfo.Address}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            {/* <div>
                <Login Email={RegisInfo.Email} Password={RegisInfo.Password} />
            </div> */}

        </>
    )
}

export default Regis



