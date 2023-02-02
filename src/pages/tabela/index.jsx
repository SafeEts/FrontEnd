import React from "react";
import clientPromise from "../../lib/mongodb";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export async function getServerSideProps(){
  const client = await clientPromise;
  const db = client.db("EaseSafe");
  const posts = await db.collection("Registros").find({}).toArray();

  return{
    props: {posts}
  }
}

export default function Table({ posts }) {

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
                    className=" flex items-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">ID
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    EDV
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Data/Hour withdrawal
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                    Data/Hour devolution
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                    Status
                  </th>

                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">

                {posts.map((colaborador) => (
                  <tr key={colaborador._id}>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {colaborador._id}
                    </td>

                    <td className="pl-6 py-4 text-sm font-medium text-gray-800 ">
                      {colaborador.EDV}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {colaborador.Horario}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {colaborador.Horario}
                    </td>
                    <td className={classNames(
                      (!colaborador.situacao) ? 'text-yellow-500' : 'text-green-600', 'uppercase px-6 py-4 text-sm whitespace-nowrap'

                    )}>
                      {colaborador.status ? <>Carregando</> : <>Pendente</>}
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
