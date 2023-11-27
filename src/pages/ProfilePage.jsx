import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getProfileRequest } from "../api/auth";
import { useEffect, useState } from "react";
import { updateUserRequest, getUserRequest } from "../api/user";

function ProfilePage(){
  const { register, handleSubmit,setValue } = useForm(); 
  const { user,loading} = useAuth()
  const [ newUser, setnewUser ] = useState([])
  const [ Validator, setValidator ] = useState(false)

  const params = useParams()
  const navigate  = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
	console.log(values)
		if(values.image){
			const res = {
				username: values.username,
				email: values.email,
				address: values.address,
				phone:  values.phone,
				image: values.image[0]
			}
			updateUserRequest(user.id,res)
			await VerificadorEdit()
		} else {
			const res = {
				username: values.username,
				email: values.email,
				address: values.address,
				phone:  values.phone,
			}
			updateUserRequest(user.id,res)
			await VerificadorEdit()
		}
		setValidator(false)
    });

	async function VerificadorEdit(){
		const gg = await getUserRequest(user.id)
		setnewUser(gg.data)
		setValidator(true)
	}

	useEffect( () =>{
		setValue('username',newUser.username)
		setValue('email',newUser.email)
		setValue('address',newUser.address)
		setValue('phone',newUser.phone)
		async function getProfile(){
			const gg = await getUserRequest(user.id)
			setnewUser(gg.data)
		}
		getProfile()
	},[Validator])

  return (
		<>
        <form onSubmit={onSubmit}>
					<div className="h-screen">
						<NavBar />
						<div className="flex flex-col font-mono h-full items-center">
							<div className="flex items-center mt-5">
								<div className="flex w-72 flex-col">
									<div className="flex justify-center">
										<div className="font-bold font-serif px-2 m-1 flex flex-col justify-between">
											{ Validator ? (<>
												<input className=" bg-[#b0e0e6] w-20" {...register("username")}></input>
											</>):(<>
												<h1 className="flex justify-center text-xl">{newUser.username}</h1>	
											</>)}
										</div>
									</div>
									<div className="bg-[#e6e6fa] mr-2 ml-2 h-52 flex flex-col justify-between">
										<div className="flex justify-center">
											<h1 className="flex justify-center">Foto Personal</h1>
										</div>
										<div className="w-full h-full">
											{ newUser.photo ? (<><img src={newUser.photo.url}/></>) : (<>
											<img src="https://res.cloudinary.com/disi3bzmx/image/upload/v1701121341/posts/bhbua911khdfqpupieap.jpg"/></>)}
										</div>
										
									</div>
									<div className=" m-2 flex flex-col justify-center">
										{ Validator ? (<>
											<div>
												<input type="file" className="block w-full text-sm text-slate-500 ml-1
																		file:mr-4 file:py-2 file:px-4
																		file:rounded-full file:border-0
																		file:text-xs file:font-semibold
																		file:bg-green-50 file:text-green-700
																		hover:file:bg-green-100"
																		{...register("image")}
												></input>
											</div>
											</>):(<></>)}	
										<div className="flex justify-center">
											{ Validator ? (<>
												<button
												className="text-sm font-bold bg-green-600 text-slate-200 rounded-md p-1.5 px-2.5 m-2 ml-0 hover:bg-green-400 hover:text-white"
												>
													Guardar Perfil
												</button>	
											</>):(<>
												<Link
												to={`/profile`}
												className="text-sm font-bold bg-green-600 rounded-md p-1.5 px-2.5 m-2 ml-0 hover:bg-green-400 hover:text-white"
												onClick={VerificadorEdit}
											>
												Editar
											</Link>
											</>)}

											
										</div>
									</div>
								</div>
								<div className="flex flex-col h-72 w-full ml-5">
									<div className="text-3xl font-serif m-2">
										<h1>Datos Personales:</h1>
									</div>
									<div className=" m-2 flex items-start">
										<h1>Email: </h1>
										{ Validator ? (<>
												<input className="ml-2 bg-[#b0e0e6] w-40" {...register("email")}></input>
											</>):(<>
												<h1 className="ml-2">{newUser.email}</h1>
										</>)}
									</div>
									<div className="m-2 flex items-start">
										<h1>Dirección: </h1>
										{ Validator ? (<>
												<input className="ml-2 bg-[#b0e0e6] w-32" {...register("address")}></input>
											</>):(<>
												<h1 className="ml-2">{newUser.address}</h1>
										</>)}
									</div>
									<div className="m-2 flex items-start">
										<h1>Telefono: </h1>
										{ Validator ? (<>
												<input className="ml-2 bg-[#b0e0e6] w-32	" {...register("phone")}></input>
											</>):(<>
												<h1 className="ml-2">{newUser.phone}</h1>
										</>)}
									</div>
								</div>
							</div>
							</div>
							</div>
        </form>
        </>
		/*
					<div className="h-screen">
						<NavBar />
						<div className="flex flex-col font-mono h-full items-center">
							<div className="flex items-center mt-5">
								<div className="flex w-72 flex-col">
									<div className="flex justify-center">
										<div className="font-bold font-serif px-2 m-1 flex flex-col justify-between">
											
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
												to={`/profile`}
												className="text-sm font-bold bg-green-600 rounded-md p-1.5 px-2.5 m-2 ml-0 hover:bg-green-400 hover:text-white"
												onClick={VerificadorEdit}
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
										<h1>Email: </h1>
										<h1 className="ml-2">{newUser.email}</h1>
									</div>
									<div className="m-2 flex items-start">
										<h1>Dirección: </h1>
										<h1 className="ml-2">{newUser.address}</h1>
									</div>
									<div className="m-2 flex items-start">
										<h1>Telefono: </h1>
										<h1 className="ml-2">{newUser.phone}</h1>
									</div>
								</div>
							</div>
							</div>
							</div>
						</>))
        }
				</>*/
    )
}

export default ProfilePage;


/*
    return (
		<>
        { Validator ? (<>
        <form onSubmit={onSubmit}>
					<div className="h-screen">
						<NavBar />
						<div className="flex flex-col font-mono h-full items-center">
							<div className="flex items-center mt-5">
								<div className="flex w-72 flex-col">
									<div className="flex justify-center">
										<div className="font-bold font-serif px-2 m-1 flex flex-col justify-between">
											
											<h1 className="flex justify-center text-xl">{newUser.username}</h1>
										</div>
									</div>
									<div className="bg-[#e6e6fa] mr-2 ml-2 h-52 flex flex-col justify-between">
										<div className="flex-col justify-center">
											<h1 className="flex justify-center">Foto Personal</h1>
										</div>
									</div>
									<div className=" m-2 flex flex-col justify-between">
										<div className="flex justify-center">
											
											<button
												className="text-sm font-bold bg-green-600 text-slate-200 rounded-md p-1.5 px-2.5 m-2 ml-0 hover:bg-green-400 hover:text-white"
											>
												Guardar Perfil
											</button>
										</div>
									</div>
								</div>
								<div className="flex flex-col h-72 w-full ml-5">
									<div className="text-3xl font-serif m-2">
										<h1>Datos Personales:</h1>
									</div>
									<div className=" m-2 flex items-start">
										<h1>Email: </h1>
										<input className="ml-2 bg-[#b0e0e6]" {...register("email")}></input>
									</div>
									<div className="m-2 flex items-start">
										<h1>Dirección: </h1>
										<input className="ml-2 bg-[#b0e0e6]" {...register("address")}></input>
									</div>
									<div className="m-2 flex items-start">
										<h1>Telefono: </h1>
										<input className="ml-2 bg-[#b0e0e6]" {...register("phone")}></input>
									</div>
									
								</div>
							</div>
							</div>
							</div>
        </form>
        </>) : ((<>
					<div className="h-screen">
						<NavBar />
						<div className="flex flex-col font-mono h-full items-center">
							<div className="flex items-center mt-5">
								<div className="flex w-72 flex-col">
									<div className="flex justify-center">
										<div className="font-bold font-serif px-2 m-1 flex flex-col justify-between">
											<h1 className="flex justify-center text-xl">{newUser.username}</h1>
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
												to={`/profile`}
												className="text-sm font-bold bg-green-600 rounded-md p-1.5 px-2.5 m-2 ml-0 hover:bg-green-400 hover:text-white"
												onClick={VerificadorEdit}
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
										<h1>Email: </h1>
										<h1 className="ml-2">{newUser.email}</h1>
									</div>
									<div className="m-2 flex items-start">
										<h1>Dirección: </h1>
										<h1 className="ml-2">{newUser.address}</h1>
									</div>
									<div className="m-2 flex items-start">
										<h1>Telefono: </h1>
										<h1 className="ml-2">{newUser.phone}</h1>
									</div>
								</div>
							</div>
							</div>
							</div>
						</>))
        }
				</>
    )
}

export default ProfilePage;
*/