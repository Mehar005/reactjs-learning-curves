import { useLoaderData } from "react-router-dom";

function Github() {
  const userData = useLoaderData();
  //   const [userData, setUserData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/mehar005")
  //       .then((response) => response.json())
  //       .then((data) => setUserData(data));
  //   }, []);
  return (
    <>
      <div className="bg-gray-700 p-4 text-3xl text-center">
        Followers: {userData?.followers}
      </div>
      <img src={userData?.avatar_url} width={300} />;
    </>
  );
}

export default Github;
