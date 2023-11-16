import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {

    const {isAuthenticated, logout, user} = useAuth()

  return (
    <nav className="relative w-full h-[80px] bg-[#29b650] font-serif">
        <div className="flex justify-between">
            <div className="ml-10 mt-5">
                {/* foto de la página */}
                <p className="font-bold text-2xl text-white">Find Pets</p>
            </div>
            <ul className="flex gap-x-10 m-6 text-white text-lg font-bold">
                {isAuthenticated ? (
                    <>
                <li>
                    <Link to='/' className="hover:text-gray-800 transition duration-300">Home</Link>
                </li>
                <li>
                    <Link to='/my-posts' className="hover:text-gray-800 transition duration-300">Publicaciones</Link>
                </li>
                <li>
                    <Link to='/add-post' className="hover:text-gray-800 transition duration-300">Añadir</Link>
                </li>
                <li>
                    <Link to='/' className="text-red-400 hover:text-red-800 transition duration-300"
                    onClick={() => logout()}>Cerrar sesión</Link>
                </li>
                <li>
                    <Link to='/profile' className="hover:text-gray-800 transition duration-300">Perfil</Link>
                    {/* foto de perfil */}
                </li>
                    </>
                ) : (
                    <>
                <li>
                    <Link to='/login' className="hover:text-gray-800 transition duration-300">Iniciar sesión</Link>
                </li>
                <li>
                    <Link to='/register' className="hover:text-gray-800 transition duration-300">Registrarse</Link>
                </li>
                    </>

                )}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar