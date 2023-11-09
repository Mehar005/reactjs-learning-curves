import Login from "./components/Login";
import Profile from "./components/Profile";
import LoginProvider from "./context/LoginProvider";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 text-white flex justify-center items-center">
        <div>
          <h1 className=" text-3xl p-4 text-center">Context Api</h1>
          <LoginProvider>
            <Login />
            <Profile />
          </LoginProvider>
        </div>
      </div>
    </>
  );
}

export default App;
