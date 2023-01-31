import { Disclosure, Menu, Transition } from '@headlessui/react'
import logo from "../../public/favicon.png"
import Image from 'next/image'
import logo_bosch from "../../public/logo-bosch.png"
import styles from '../../styles/Nav.module.css'
import { useRouter } from 'next/router'

export default function NavBar() {
  const route = useRouter()
  return (
    // Returna a nav bar, biblioteca faz o gerenciamento da renderização
    <Disclosure as="nav" className="bg-slate-800">
      {() => (

        // começa o fragment onde o retorno é renderizado
        <>
          {/* div geral que envelopa toda a nav */}
          <div className={`h-fit before:block before:w-full before:h-3 imagemDeFundo ${styles.imagemDeFundo}`}>

            <div className="relative flex h-20   items-center justify-between">

              {/* Div que envelopa o branding */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div onClick={() => { route.push('/') }} className="flex flex-shrink-0 items-center cursor-pointer">
                  <Image
                    className="w-auto block"
                    src={logo}
                    alt="EaseSafe"
                  />
                  <span className='hidden sm:inline text-gray-100 font-medium uppercase'>EaseSafe</span>
                </div>
                
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* div que envelopa setor */}

                <div className='flex align-baseline'>
                  <Image
                    className="h-32 w-auto block"
                    src={logo_bosch}
                    alt="Bosch"
                  />
                </div>

              </div>

            </div>

          </div>
        </>
      )}
    </Disclosure>
  )
}