import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import React from "react";
import { useState } from "react";
import swal from "sweetalert"


export async function getServerSideProps(context) {
  const session = await getSession(context)
  // console.log(session)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      },
    }
  }

  const retorno = await fetch('http://localhost:3000/api/form')
  const data = await retorno.json()
  const cadastros = data.data

  return {
    props: { cadastros }
  }
}



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Table({ cadastros }) {
  const route = useRouter()

  async function deleteAluno(id) {

    const retorno = await fetch(`/api/form/${id}`, {
      method: 'DELETE'
    })
    const result = await retorno.json()
    retorno.ok ? swal(result.resultado, { icon: "success" }).then((value) => { route.reload() }) : swal(result.resultado, { icon: "error" }).then((value) => { route.reload() });

  }





  async function handleEdit(id){
    const retorno = await fetch(`/api/form/${id}`,{
    method: 'GET'})
    const res = (await retorno.json()).resultado
    
    swal({
      title: "Editar Matricula",
      content: "input",
      value: res.nome
    })
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="py-3 pl-2">
          <div className="relative max-w-xs">
            <label htmlFor="hs-table-search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              name="hs-table-search"
              id="hs-table-search"
              className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">




            <table className="min-w-full divide-y divide-gray-200">




              <thead className="bg-gray-50">
                <tr>

                  <th
                    scope="col"
                    className=" flex items-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    ID
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 13l-5 5m0 0l-5-5m5 5V6"
                      />
                    </svg>
                  </th>




                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    <span className="inline-flex items-center">
                      Nome
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 11l5-5m0 0l5 5m-5-5v12"
                        />
                      </svg>
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    <span className="inline-flex items-center">
                      Email
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 13l-5 5m0 0l-5-5m5 5V6"
                        />
                      </svg>
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                    Curso
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                    Situação
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>



              <tbody className="divide-y divide-gray-200">





                {/* {
                  arquivoJSON.map((item)=>{
                      <h1>{item.tag}</h1>
                  })
                } */}

                {cadastros.map((aluno) => (
                  <tr key={aluno._id}>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {aluno.nome}
                    </td>
                    
                    
                    
                    <td className="pl-6 py-4 text-sm font-medium text-gray-800 ">
                      {aluno._id}
                    </td>
                    
                    
                    
                    
                    
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {aluno.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {aluno.curso}
                    </td>
                    <td className={classNames(
                      (aluno.situacao == 'pendente') ? 'text-yellow-500' : 'text-gray-800', 'uppercase px-6 py-4 text-sm whitespace-nowrap'

                    )}>
                      {aluno.situacao}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button
                        className="text-green-500 hover:text-green-700"
                        onClick={()=> handleEdit(aluno._id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => deleteAluno(aluno._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}