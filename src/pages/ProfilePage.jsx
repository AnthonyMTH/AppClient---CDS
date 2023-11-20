import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { updateUserRequest } from "../api/user";

function ProfilePage(){
  const { register, handleSubmit,setValue } = useForm(); 
  const { user, getUser } = useAuth()
  const params = useParams()
  const navigate  = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
      if(values.image[0]){
				const res = {
					email: values.email,
					address: values.address,
					phone:  values.phone,
					image: values.image[0]
				}
				updateUserRequest(user.id,res)
			} else {
				const res = {
					email: values.email,
					address: values.address,
					phone:  values.phone,
				}
				updateUserRequest(user.id,res)
			}
			console.log(user)
			navigate('/profile')
    }
  );


	useEffect(() =>{
		if(params.id){
			setValue('email',user.email)
			setValue('address',user.address)
			setValue('phone',user.phone)
		}	
	})

  return (
    <>
      <NavBar />
        { params.id ? (<>
        <form onSubmit={onSubmit}>
            <div className="flex flex-col font-mono">
                    <div className="flex max-h-full items-end">
                        <div className="bg-[#98fb98] flex h-72 w-72 flex-col justify-baseline ">
                            <div className="flex justify-center">
                                <div className="font-bold font-serif px-2 m-1 flex flex-col justify-between">
                                    <h1 className="flex justify-center">{user.username}</h1>
                                </div>
                            </div>
                            <div className="mr-2 ml-2 h-52 flex flex-col justify-between">
                                <div className="flex-col justify-center">
                                    { user.photo ? (<><img src={user.photo.url}/></>) : (<></>)}   
                                </div>
                            </div>
                            <div className="mr-2 ml-2 mt-2 h-52 flex  justify-between">
                                <div className="justify-between">
																		<label className="block">
																				<input type="file" className="block w-full text-xs text-slate-500 
																					file:mr-4 file:py-2 file:px-4
																					file:rounded-full file:border-0
																					file:text-xs file:font-semibold
																					file:bg-green-50 file:text-green-700
																					hover:file:bg-green-100
																				"
																				{...register("image")}
																				/>
																		</label>
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
                                        <h1>Email:</h1>
																				<input type="text" {...register('email')} className="ml-2 bg-[#2e8b57]"></input>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="m-2 flex items-start">
                                        <h1>Dirección:</h1>
                                        <input type="text" {...register('address')} className="ml-2 bg-[#2e8b57]"></input>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="m-2 flex items-start">
                                        <h1>Telefono:</h1>
                                        <input type="text" {...register('phone')} className="ml-2 bg-[#2e8b57]"></input>
                                    </div>
                                </div>
                                <div className=" m-2 flex flex-col justify-between mt-10">
                                    <div className="flex justify-center">
																			<button
																				className="rounded-lg border border-blue-900 bg-[#4169e1] px-2 hover:bg-[#5b78e6] "
																				type="submit" display="flex" justify-content="center"
																			>
																				Guardar Cambios
																			</button>
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
        </form>
        </>) : ((<>
            <div className="flex flex-col font-mono">
                <div className="flex max-h-full items-end">
                    <div className="bg-[#98fb98] flex h-72 w-72 flex-col justify-baseline ">
                        <div className="flex justify-center">
                            <div className="font-bold font-serif px-2 m-1 flex flex-col justify-between">
                                <h1 className="flex justify-center">{user.username}</h1>
                            </div>
                        </div>
                        <div className="mr-2 ml-2 h-52 flex flex-col justify-between">
                            <div className="flex-col justify-center">
                                { user.photo ? (<><img src={user.photo.url}/></>) : (<></>)}   
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
                            <div className=" m-2 flex flex-col justify-between mt-10">
                                <div className="flex justify-center">
                                    <Link to={`/profile/${user.id}`} className="rounded-lg border border-blue-900 bg-[#4169e1] px-2 hover:bg-[#5b78e6] ">
                                        Editar
                                    </Link>
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
        </>))
        }
		</>
    )
}

export default ProfilePage
