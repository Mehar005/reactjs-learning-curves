import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Outlet } from 'react-router-dom'
import {
  // handleLogin,
  handleGetCurrentUser,
} from "./store/auth/authAsyncActions";

// import { Header, Footer } from "./components";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(
      // handleLogin({ email: "asimali35.aa@gmail.com", password: "password12" })
      handleGetCurrentUser()
    );
  }, [dispatch]);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        {/* <Header /> */}
        <main>
          TODO: {/* <Outlet /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  ) : null
}

export default App;
