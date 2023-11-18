import { useAuth } from "../context/AuthContext"

function ProfilePage(){
    const { user, isAuthenticated } = useAuth()
    console.log(user)

    return (
        <div className="flex flex-col">
            <div className="bg-blue-300 flex max-h-full items-end">
                <div className="bg-green-200 flex h-72 w-72 flex-col justify-baseline ">
                    <div className="bg-red-200 m-2 flex flex-col justify-between">
                        <h1 className="flex justify-center">{user.username}</h1>
                    </div>
                    <div className="bg-red-200 mr-2 ml-2 h-52 flex flex-col justify-between">
                        <h1 className="flex justify-center">Foto Personal</h1>
                    </div>
                    <div className="bg-red-200 m-2 flex flex-col justify-between">
                        <h1 className="flex justify-center">Editar Esto sera boton</h1>
                    </div>
                </div>
                <div className="bg-green-900 flex flex-col h-72 w-full">
                    <div className="bg-red-900 m-2 flex justify-between ">
                        <h1>Datos Personales:</h1>
                    </div>
                    <div className="flex flex-col justify-between m-2">
                        <div className="flex justify-between">
                            <div className="bg-red-500 m-2 flex items-start">
                                <h1>Email: {user.email}</h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="bg-red-500 m-2 flex items-start">
                                <h1>Dirección: {user.address}</h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="bg-red-500 m-2 flex items-start">
                                <h1>Telefono: {user.phone}</h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="m-2 flex items-start">
                                <h1>Tico no tengo creatividad GG :'v</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-red-300 flex-1 justify-center">
                <div className="m-2 flex flex-col justify-between">
                    <div className="flex justify-center">
                        <div className="bg-blue-200 px-2 flex justify-center">
                            <h1 className="flex justify-center">Fotos de mis mascotas</h1>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="bg-blue-200 m-2 h-48 w-64 flex-1 flex justify-center">
                            <h1>Foto 1</h1>
                        </div>
                        <div className="bg-blue-200 m-2 h-48 w-64 flex-1 flex justify-center">
                            <h1>Foto 2</h1>
                        </div>
                        <div className="bg-blue-200 m-2 h-48 w-64 flex-1 flex justify-center">
                            <h1>Foto 3</h1>
                        </div>
                        <div className="bg-blue-200 m-2 h-48 w-64 flex-1 flex justify-center">
                            <h1>Foto 4</h1>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default ProfilePage
