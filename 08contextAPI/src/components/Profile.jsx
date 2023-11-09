import { useLoginContext } from "../context/LoginContext";

function Profile() {
  const { user } = useLoginContext();
  if (!user) return <div>Please Login</div>;
  return <div>Welcom {user.userName}</div>;
}

export default Profile;
