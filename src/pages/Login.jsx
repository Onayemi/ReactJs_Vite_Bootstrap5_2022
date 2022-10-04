import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };

    const login = (e) => {
        e.preventDefault();
        const { email, password } = values;
        // const { name, email, password, isMember } = values;
        if (!email || !password) {
        // if (!email || !password || (!isMember && !name)) {
        // toast.error('Please fill out all fields');
            alert('Please fill out all fields');
            return;
        }
        localStorage.setItem('user', JSON.stringify({ name: 'Samuel', token: 'query-pill!' }))
        navigate('/dashboard')
    }

    return (
        <div>

            <section className='my-5 py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 mb-2">
                            <div className="card shadow">
                            <div className="card-header bg-primary"><h5 className='text-center text-white'>Sign In</h5></div>
                                <div className="card-body py-2">
                                    <p className='text-center mt-3'>Not register yet <Link to="/register"> Sign Up </Link> </p>
                                    <div className="mb-3"></div>

                                    <form onSubmit={login}>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control mb-2" 
                                            placeholder="email@example.com" aria-label="Email" 
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            required="required"
                                        />
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control mb-2" 
                                            placeholder="********" aria-label="Password" 
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            required="required"
                                        />
                                        <button className="btn btn-sm btn-primary w-100" type="submit">Submit</button>
                                        
                                    </form>
                                    <p className='text-center mt-3'>Forgot  <Link to="/register"> Password? </Link> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login