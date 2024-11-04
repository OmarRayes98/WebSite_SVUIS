
const Results = () => {
  return (
    <section className="h-full w-full sm:p-14 flex justify-center items-center">
      

<div className=" w-[250px] sm:w-full relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-base	 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    المعيار
                </th>
                <th scope="col" className="px-6 py-3">
                الانحدار اللوجستي	
                </th>
                <th scope="col" className="px-6 py-3">
                شجرة القرار	
                </th>
                <th scope="col" className="px-6 py-3">
                بايز
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    الصحة
                </th>
                <td className="px-6 py-4">
                0.85
                </td>
                <td className="px-6 py-4">
                0.82

                </td>
                <td className="px-6 py-4">
                0.78
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                الدقة
                </th>
                <td className="px-6 py-4">
                0.87
                </td>
                <td className="px-6 py-4">
                0.80
                </td>
                <td className="px-6 py-4">
                0.75

                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    الاستذكار
                </th>
                <td className="px-6 py-4">
                0.82
                </td>
                <td className="px-6 py-4">
                0.85
                </td>
                <td className="px-6 py-4">
                0.80

                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  F1
                </th>
                <td className="px-6 py-4">
                0.84
                </td>
                <td className="px-6 py-4">
                0.82
                </td>
                <td className="px-6 py-4">
                0.77
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </section>
  )
}

export default Results
