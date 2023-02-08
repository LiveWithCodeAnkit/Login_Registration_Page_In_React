import React from 'react'


const NavBar = (props) => {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="row col-12 d-flex justify-content-center text-white">
                    <span className="h3">{props.tit1}</span>
                </div>
            </nav>
        </>
    )
}

export default NavBar
