import { useState } from "react";
import uuid from 'react-uuid';



const Suppliers = () => {
  const [supplierNb, setSupplierNb] = useState("")
  const [supplierName, setSupplierName] = useState("")
  const [supplierAdress, setSupplierAdress] = useState("")
  const [supplierPhone, setSupplierPhone] = useState("")
  const [display, setDisplay] = useState(false)

  const handleSubmit = (event: any) => {
    setDisplay(!display)
  }

  return (
    <div className={"grid grid-cols-3 gap-10"}>
      <div className="grid-span-1 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <a className="text-xl text-black">Supplier create</a>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">No. Supplier
            <input className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" value={supplierNb} onChange={(e) => setSupplierNb(e.target.value)} required />
          </label>
        </div>
        <div className="form-group mb-6">
        <label className="form-label inline-block mb-2 text-gray-700">Name
          <input className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" value={supplierName} onChange={(e) => setSupplierName(e.target.value)} required />
        </label>
        </div>
        
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">Adress
            <input className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" value={supplierAdress} onChange={(e) => setSupplierAdress(e.target.value)} required />
          </label>
        </div>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">Phone
            <input type="text"
              className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={supplierPhone} onChange={(e) => setSupplierPhone(e.target.value)} required />
          </label>
        </div>

        <button onClick={handleSubmit} type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Supplier</button>
      </div>

      <div className="">
        <div className="mt-2 p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2">Transporters</h2>
          <h3>No. 66698</h3>
          <h3>Phone: +353688774411</h3>
          <h3>Adress: Circular square</h3>
        </div>
        {display ? <div className="mt-4 p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2">{supplierName}</h2>
          <h3>No. {supplierNb}</h3>
          <h3>Phone: {supplierPhone}</h3>
          <h3>Adress: {supplierAdress}</h3>
        </div> : <a/>
        }
      </div>
    </div>
  );
};

export default Suppliers;