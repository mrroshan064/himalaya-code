import React from 'react'



const Register = () => {
    return (
        <div>

            <form action="" method="post">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" name="" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="email" name="" id="password" />
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register