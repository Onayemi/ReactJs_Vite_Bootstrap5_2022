import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const user = localStorage.getItem('user')
    if(!user) navigate('/register')
  }, []);

  // const logout = () => {
  //   let rmv = localStorage.removeItem('user')
  //   if(!rmv) navigate('/register')
  // }

  return (
    <div>

       <section className='py-4 text-center bg-warning mt-5 py-3'>
        <h2 className="text-white">Dashboard</h2>
      </section>

      <section className='py-5'>
        <div className="container">
          <h2>Dashboard</h2>
          <input type="text" placeholder="Enter Value" onBlur={() => alert('Fetch record from database into textbox')} />
          <h3 onMouseOut={() => alert('Import Information alert!')}>{import.meta.env.VITE_SOME_KEY}</h3>
          {/* <button className="btn btn-primary" onClick={logout}>Logout</button> */}
        </div>
      </section>
    </div>
  )
}

export default Dashboard