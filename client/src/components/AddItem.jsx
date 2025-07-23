import Swal from "sweetalert2";
import Nav from "./Nav";

const AddItem = () => {
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.img.value;
    const price = form.price.value;
    const food = { name, price, image };

    fetch("http://localhost:5000/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Food added:", data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Food item added!",
        });
        form.reset();
      })
      .catch((err) => {
        console.error("Failed:", err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add food item!",
        });
      });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full max-w-screen-[1440px] mx-auto h-[300px] bg-banner bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray/90 z-0"></div>
        <section className="relative z-10">
          <Nav />
        </section>
        <section className="relative w-full max-w-[1440px] mx-auto pt-3 lg:pt-3">
          <div className="w-full text-center text-white">
            <p className="text-[32px] lg:text-[60px] font-bold">Add Food</p>
          </div>
        </section>
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center bg-gray-50 px-1 mt-10 mb-10">
        <div className="bg-[#f5f5f5] shadow-2xl rounded-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Food</h2>
          <form onSubmit={handleAddFood} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="price">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="img">
                Image URL
              </label>
              <input
                type="text"
                name="img"
                id="img"
                placeholder="Image URL"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#E30814] text-white font-semibold py-2 rounded-lg hover:bg-[#BF0A13] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
