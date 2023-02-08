import React, { useState } from 'react'

const Login2 = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [AllEntry, setAllEntry] = useState([]);

    const handlsubmit = (e) => {
        e.preventDefault();

        const newEntry = { id: new Date().getTime().toString(), email, password }
        setAllEntry([...AllEntry, newEntry])

        setEmail("")
        setPassword("")

    }




    return (
        <>
            <div className='container w-50' style={{ marginTop: '150px' }}>
                <form onSubmit={handlsubmit}>
                    <div className="form-outline mb-4">
                        <h1>Login</h1>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label className="form-label" >Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                        <label className="form-label" >Password</label>
                    </div>
                    <button type="Submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                </form>

                <div>
                    {
                        AllEntry.map((currInfo) => {
                            return (
                                <label key={currInfo.id} className="form-label" >{`Id ${currInfo.id} Email ${currInfo.email} Password ${currInfo.password}`}</label>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Login2