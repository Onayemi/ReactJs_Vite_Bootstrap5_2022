import React, {useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { FaBeer, FaHome } from 'react-icons/fa';
import { addUser, clearTotal, decrease, increase } from '../store/features/users/userSlice';

const Home = () => {
  const { isLoading, total } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearTotal());
  }, []);

  return (
    <div>
      <section className='py-4 text-center bg-warning mt-5 py-5'>
        <h2 className="text-white">Home </h2>
      </section>

      <section className='py-5 px-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3">
              <h3><FaHome color="56ff56" /> <FaBeer /> Our Mission { total }</h3>
              <div className="sub-underline my-3"></div>
              <button onClick={() => dispatch(decrease())}>-</button>Total { total } <button onClick={() => dispatch(increase())}>+</button> | <button onClick={() => dispatch(clearTotal())}>Clear Total</button>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem numquam ipsa aspernatur, maiores veritatis a temporibus consequuntur similique earum ad officia accusamus! Soluta minus molestias, voluptatem vitae quas iste?</p>
            </div>
            <div className="col-md-6">
              <h3>Our Vision</h3>
              <div className="sub-underline my-3"></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem numquam ipsa aspernatur, maiores veritatis a temporibus consequuntur similique earum ad officia accusamus! Soluta minus molestias, voluptatem vitae quas iste?</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home