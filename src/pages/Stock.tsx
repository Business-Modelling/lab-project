import { useState } from "react";

const Stock = () => {
  const [productNb, setProductNb] = useState("")
  const [productName, setProductName] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productQuantity, setProductQuantity] = useState("")
  const [display, setDisplay] = useState(false)

  const handleSubmit = (event: any) => {
    setDisplay(!display)
  }

  return (
    <div className={"grid grid-cols-3 gap-10"}>
      <div className="grid-span-1 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <a className="text-xl text-black">Product create</a>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">No. Product
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" value={productNb} onChange={(e) => setProductNb(e.target.value)} required />
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </label>
        </div>
        
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">Description
            <textarea className="
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows={3} placeholder="Write the description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required></textarea>
          </label>
        </div>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">Price
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
          </label>
        </div>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">Quantity
            <input type="number"
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} required />
          </label>
        </div>

        <button onClick={handleSubmit} type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add product</button>
      </div>

      <div className="">
        <div className="mt-2 p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2">Wire Piece</h2>
          <h3>No. 587</h3>
          <h3>Description: Little piece of metal</h3>
          <h3>Price: 3,56 €</h3>
          <h3>Quantity: 56</h3>
        </div>
        {display ? <div className="mt-4 p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2">{productName}</h2>
          <h3>No. {productNb}</h3>
          <h3>Description: {productDescription}</h3>
          <h3>Price: {productPrice} €</h3>
          <h3>Quantity: {productQuantity}</h3>
        </div> : <a/>
        }
      </div>
    </div>
  );
  };
  
  export default Stock;