

const Table = ({ formData }) => {
    return (
        <div>
            <h2 className="text-2xl py-4 font-bold">Students Data</h2>

            <table className="min-w-[30%] shadow-md  border mx-auto border-gray-100 ">
                <thead>
                    <tr className="bg-[#333333] text-white">
                        <th className=" px-6 text-left border-b">Name</th>
                        <th className=" px-6 text-left border-b">Roll</th>
                        <th className=" px-6 text-left border-b">Age</th>

                    </tr>
                </thead>
                <tbody className="">
                    {
                        formData.map((data, index) => <tr key={index}>

                            <td className="px-6">{data.name}</td>
                            <td className="px-7">{data.roll}</td>
                            <td className="px-7">{data.age}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;