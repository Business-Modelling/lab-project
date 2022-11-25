import { useState } from "react";

const Customers = () => {
  const [customerNb, setCustomerNb] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [customerAdress, setCustomerAdress] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [customerGender, setCustomerGender] = useState("")
  const [display, setDisplay] = useState(false)

  const handleSubmit = (event: any) => {
    setDisplay(!display)
  }

  return (
    <div className={"grid grid-cols-3 gap-10"}>
      <div className="grid-span-1 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <a className="text-xl text-black">Customer create</a>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">No. Customer
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" value={customerNb} onChange={(e) => setCustomerNb(e.target.value)} required />
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" value={customerAdress} onChange={(e) => setCustomerAdress(e.target.value)} required />
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} required />
          </label>
        </div>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">Gender
            <select className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={customerGender} onChange={(e) => setCustomerGender(e.target.value)}>
              <option selected>Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>

        <button onClick={handleSubmit} type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Supplier</button>
      </div>

      <div className="">
        <div className="mt-2 p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2">Henry Henricks</h2>
          <h3>No. 66</h3>
          <h3>Phone: +3536666666</h3>
          <h3>Adress: Circular square</h3>
          <h3>Gender: Male</h3>
        </div>
        <div className="mt-2 p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2">Pj Beaugendre</h2>
          <h3>No. 967</h3>
          <h3>Phone: +35366666666</h3>
          <h3>Adress: Lille</h3>
          <h3>Gender: Male</h3>
        </div>
        {display ? <div className="mt-4 p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2">{customerName}</h2>
          <h3>No. {customerNb}</h3>
          <h3>Phone: {customerPhone}</h3>
          <h3>Adress: {customerAdress}</h3>
          <h3>Gender: {customerGender}</h3>
        </div> : <a />
        }
      </div>
    </div>
  );
};

export default Customers;