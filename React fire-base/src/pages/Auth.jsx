import React from 'react'

function Auth() {
    return (
        <div className='auth'>
            <h3 style={{ fontFamily: "arial", fontSize: "25px", marginBottom: "30px" }}>Login / Signup</h3>
            <div>
                <input className='input1' type='text' placeholder='Email adress' />
                <input className="input2" type='password' placeholder='Password' />
            </div>
            <div>
                <button className='buton1'>Login</button>
                <button className='buton2'>Signup</button>
            </div>
        </div>

    )
}

export default Auth
