import Image from 'next/image'
import iconUser from '../../public/user.svg'
import iconLock from '../../public/lock-closed.svg'
import { useRouter } from 'next/router'
import swal from 'sweetalert'

export default function Home() {

  const route = useRouter()

  async function handleSubmit(e){
    e.preventDefault()
    const user = e.target.usuario.value
    const senha = e.target.senha.value
    console.log(user, senha)
    if (user == "admin" && senha == "admin") {
      route.push("/tabela")
    }else{
      swal("Usuario ou senha incorretos",{icon:"error"})
    }
  }
  return (
    <>
      <div className="w-4/12 rounded-2xl m-auto flex flex-col font-sans mt-24 bg-gray-200">
        <p className='text-2xl text-left p-8'>SEJA BEM-VINDO!</p>

        <p className='text-base pl-8'>Preencha as informações para realizar seu login!</p>

            <form onSubmit={handleSubmit} className='p-8 flex-col'>

              <div className='pb-8'>
                  <label htmlFor="usuario" className='text-sm block'>User</label>
                  <div className='flex'>
                    <input type="text" name="usuario" id="usuario" className='bg-transparent border-b-2 border-black w-5/6 focus:outline-none'/>
                    <Image
                      className="w-6"
                      src={iconUser}
                      alt="Icone usuário"
                    />
                  </div>

              </div>

              <div className='pb-8'>
                  <label htmlFor="senha"className='text-sm block'>Password</label>
                  <div className='flex'>
                  <input type="password" name="senha" id="senha" className='bg-transparent border-b-2 border-black w-5/6 focus:outline-none'/>
                  <Image
                      className="w-6"
                      src={iconLock}
                      alt="Icone cadeado"
                    />
                  </div>
              </div>

                  <button type="submit" className='text-sm text-right p-2 px-12 bg-slate-800 text-white rounded-xl hover:bg-slate-700'>Login</button>
              </form>
        </div>
    </>
  )
}
