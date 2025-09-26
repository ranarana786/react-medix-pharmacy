import { useRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { UserProgressiveContext } from "../store/UserProgressinveContext";
import medImage from "../../assets/images/med-img.jpg";
import { addNewMedicince } from "../http";
import { StoreContext } from "../store/store";

const categories = [
  "Pain Relief",
  "Antibiotics",
  "Vitamins",
  "Cough & Cold",
  "Allergy",
  "Diabetes",
  "Heart",
  "Skin Care",
];

export default function ProductForm({}) {
  const { hideAddProduct } = useContext(UserProgressiveContext);
  const { getMedicinceData, storeData } = useContext(StoreContext);

  const nameRef = useRef();
  //   const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const stockRef = useRef();
  const companyRef = useRef();
  const countryRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      //   id: uuidv4(),
      name: nameRef.current.value,
      //   image: medImage,
      category: categoryRef.current.value,
      description: descriptionRef.current.value,
      price: Number(priceRef.current.value),
      stock: Number(stockRef.current.value),
      company: companyRef.current.value,
      country: countryRef.current.value,
      createdAt: new Date().toISOString(),
    };

    // onAdd(newProduct);

    console.log(newProduct);

    const created = await addNewMedicince(newProduct);

    if (created) {
      // 👇 bina refresh ke storeData update
      getMedicinceData([...storeData, created]);
    }

    e.target.reset();
    hideAddProduct();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow rounded"
    >
      <h2 className="text-xl font-bold mb-4">Add Medicine</h2>

      <input
        ref={nameRef}
        type="text"
        placeholder="Name"
        className="w-full border p-2 mb-2 rounded"
        required
      />
      {/* <input
        ref={imageRef}
        value={medImage}
        type="text"
        placeholder="Image URL"
        className="w-full border p-2 mb-2 rounded"
      /> */}

      <select ref={categoryRef} className="w-full border p-2 mb-2 rounded">
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <textarea
        ref={descriptionRef}
        placeholder="Description"
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        ref={priceRef}
        type="number"
        placeholder="Price"
        className="w-full border p-2 mb-2 rounded"
        required
      />
      <input
        ref={stockRef}
        type="number"
        placeholder="Stock"
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        ref={companyRef}
        type="text"
        placeholder="Company"
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        ref={countryRef}
        type="text"
        placeholder="Country"
        className="w-full border p-2 mb-2 rounded"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded mt-2 w-full"
      >
        Add Product
      </button>
    </form>
  );
}
