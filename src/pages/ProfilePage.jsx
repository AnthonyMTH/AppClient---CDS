import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar";

function ProfilePage(){
  const { user, isAuthenticated } = useAuth()
  console.log(user)

  return (
    <>
      <NavBar />
        <div className="flex flex-col font-mono">
            <div className="flex max-h-full items-end">
                <div className="bg-[#98fb98] flex h-72 w-72 flex-col justify-baseline ">
                    <div className="flex justify-center">
                        <div className="font-bold font-serif px-2 m-1 flex flex-col justify-between">
                            <h1 className="flex justify-center">{user.username}</h1>
                        </div>
                    </div>
                    <div className="bg-[#e6e6fa] mr-2 ml-2 h-52 flex flex-col justify-between">
                        <div className="flex-col justify-center">
                            <h1 className="flex justify-center">Foto Personal</h1>
                        </div>
                    </div>
                    <div className=" m-2 flex flex-col justify-between">
                        <div className="flex justify-center">
                            <Link to={`/posts/`} className="rounded-lg border border-blue-300 bg-[#4169e1] px-2 hover:bg-[#5b78e6] ">
                                Editar
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-[#3cb371] flex flex-col h-72 w-full">
                    <div className="flex justify-between ">
                        <div className="text-3xl font-serif m-2 flex justify-between ">
                            <h1>Datos Personales:</h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between m-2">
                        <div className="flex justify-between">
                            <div className=" m-2 flex items-start">
                                <h1>Email: {user.email}</h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="m-2 flex items-start">
                                <h1>Dirección: {user.address}</h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="m-2 flex items-start">
                                <h1>Telefono: {user.phone}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#8fbc8f] flex-1 justify-center">
                <div className="m-2 flex flex-col justify-between">
                    <div className="flex justify-center">
                        <div className="font-serif text-2xl px-2 flex justify-center">
                            <h1 className="flex justify-center">Fotos de mis mascotas desaparecidas</h1>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="bg-blue-200 m-2 h-48 w-64 flex-1 flex flex-col justify-center">
                            <div className="flex justify-center">
                                <h1>Foto 1</h1>
                            </div>
                        </div>
                        <div className="bg-blue-200 m-2 h-48 w-64 flex-1 flex flex-col justify-center">
                            <div className="flex justify-center">
                                <h1>Foto 2</h1>
                            </div>
                        </div>
                        <div className="bg-blue-200 m-2 h-48 w-64 flex-1 flex flex-col justify-center">
                            <div className="flex justify-center">
                                <h1>Foto 3</h1>
                            </div>
                        </div>
                        <div className="bg-blue-200 m-2 h-48 w-64 flex-1 flex flex-col justify-center">
                            <div className="flex justify-center">
                                <h1>Foto 4</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
			</>
    )
}

export default ProfilePage
