import NavBar from "../components/NavBar";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
function ProfilePage() {
  const { user, isAuthenticated } = useAuth();

  return (
    <>
    <div className="h-screen">
      <NavBar />
      <div className="flex flex-col font-mono h-full items-center">
        <div className="flex items-center mt-5">
          <div className="flex w-72 flex-col">
            <div className="flex justify-center">
              <div className="font-bold font-serif px-2 m-1 flex flex-col justify-between">
                <h1 className="flex justify-center text-xl">{user.username}</h1>
              </div>
            </div>
            <div className="bg-[#e6e6fa] mr-2 ml-2 h-52 flex flex-col justify-between">
              <div className="flex-col justify-center">
                <h1 className="flex justify-center">Foto Personal</h1>
              </div>
            </div>
            <div className=" m-2 flex flex-col justify-between">
              <div className="flex justify-center">
                <Link
                  to={`/posts/`}
                  className="bg-green-500 px-2 hover:bg-green-400 p-1"
                >
                  Editar
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-72 w-full ml-5">
            <div className="text-3xl font-serif m-2">
              <h1>Datos Personales:</h1>
            </div>
            <div className=" m-2 flex items-start">
              <h1>Email: {user.email}</h1>
            </div>
            <div className="m-2 flex items-start">
              <h1>Dirección: {user.address}</h1>
            </div>
            <div className="m-2 flex items-start">
              <h1>Telefono: {user.phone}</h1>
            </div>
          </div>
        </div>
        </div>
        </div>
			</>
    )
}

export default ProfilePage;
