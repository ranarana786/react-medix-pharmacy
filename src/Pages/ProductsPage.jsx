import { useEffect, useState, useMemo, useContext } from "react";
import { StoreContext } from "../components/store/store";
import Product from "../components/UI/Product";
import { UserProgressiveContext } from "../components/store/UserProgressinveContext";

export default function ProductsPage() {
  const { storeData, getMedicinceData, cart } = useContext(StoreContext);
  const { showAddProduct } = useContext(UserProgressiveContext);

  console.log("thr cart data are following", cart);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    category: [],
    price: 100,
  });

  useEffect(() => {
    const fetchMedicince = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://68d3dd32214be68f8c678194.mockapi.io/medicince"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch medicines");
        }

        const responseData = await response.json();

        console.log(responseData);

        const enrichedData = responseData.map((item) => ({
          ...item,
        }));

        getMedicinceData(enrichedData);
      } catch (err) {
        console.error("Error fetching medicine data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicince();
  }, []);

  // Filtering logic
  // const filteredProducts = useMemo(() => {
  //   return storeData.filter((product) => {
  //     if (
  //       filters.category.length > 0 &&
  //       !filters.category.includes(product.category)
  //     ) {
  //       return false;
  //     }
  //     if (product.price > filters.price) {
  //       return false;
  //     }
  //     return true;
  //   });
  // }, [filters, storeData]);

  // ✅ Conditional Rendering
  let content;
  if (loading) {
    content = <p>Data is being fetched...</p>;
  } else if (error) {
    content = <p className="text-red-500">Error: {error}</p>;
  } else {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {storeData.map((data, index) => (
          <Product key={index} data={data} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Category Filter */}
        {/* <div className="mb-6">
          <h3 className="font-semibold mb-2">Category</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.category.includes(cat)}
                    onChange={(event) => {
                      setFilters((prev) => {
                        if (event.target.checked) {
                          return {
                            ...prev,
                            category: [...prev.category, cat],
                          };
                        } else {
                          return {
                            ...prev,
                            category: prev.category.filter((c) => c !== cat),
                          };
                        }
                      });
                    }}
                  />
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Price Filter */}
        {/* <div className="mb-6">
          <h3 className="font-semibold mb-2">Price</h3>
          <input
            type="range"
            min="1"
            max="100"
            className="w-full"
            value={filters.price}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                price: Number(e.target.value),
              }))
            }
          />
          <div className="flex justify-between text-sm">
            <span>$1</span>
            <span>{filters.price}</span>
          </div>
        </div> */}
      </aside>

      {/* Products Grid */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Products</h1>
        {content}
        <button
          onClick={showAddProduct}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-yellow-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition duration-300"
        >
          <span className="text-2xl">+</span>
        </button>
      </main>
    </div>
  );
}
