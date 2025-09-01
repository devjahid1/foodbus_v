import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Nav from "./Nav";
import { FaEdit, FaTrash } from "react-icons/fa";

const BookingAndItems = () => {
  const [items, setItems] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [pendingBookings, setPendingBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchItems = () => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  const fetchBookings = () => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  };

  useEffect(() => {
    fetchItems();
    fetchBookings();
    const storedPending = JSON.parse(localStorage.getItem("pendingBookings")) || [];
    setPendingBookings(storedPending);
  }, []);

  // --- Filtered Data ---
  const filteredItems = items.filter((item) =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPendingBookings = pendingBookings.filter((booking) =>
    booking.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(booking.phone || "").includes(searchTerm)
  );

  const filteredBookings = bookings.filter((booking) =>
    booking.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(booking.phone || "").includes(searchTerm)
  );

  // --- Item Handlers ---
  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BF0A13",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/menu/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            fetchItems();
            Swal.fire("Deleted!", "Item has been deleted.", "success");
          });
      }
    });
  };

  const handleEditItem = (item) => {
    Swal.fire({
      title: "Edit Item",
      html: `
        <input id="name" class="swal2-input" placeholder="Name" value="${item.name}" />
        <input id="price" class="swal2-input" placeholder="Price" value="${item.price}" />
        <input id="image" class="swal2-input" placeholder="Image URL" value="${item.image}" />
      `,
      preConfirm: () => {
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const image = document.getElementById("image").value;
        return { name, price, image };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedItem = result.value;
        fetch(`http://localhost:5000/menu/${item.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedItem),
        })
          .then((res) => res.json())
          .then(() => {
            fetchItems();
            Swal.fire("Updated!", "Item has been updated.", "success");
          });
      }
    });
  };

  // --- Booking Handlers ---
  const handleDeleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this booking!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BF0A13",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            fetchBookings();
            Swal.fire("Deleted!", "Booking has been deleted.", "success");
          });
      }
    });
  };

  const handleEditBooking = (booking) => {
    Swal.fire({
      title: "Edit Booking",
      html: `
        <input id="name" class="swal2-input" placeholder="Name" value="${booking.name}" />
        <input id="email" class="swal2-input" placeholder="Email" value="${booking.email}" />
        <input id="phone" class="swal2-input" placeholder="Phone" value="${booking.phone}" />
        <input id="date" type="date" class="swal2-input" value="${booking.date}" />
      `,
      preConfirm: () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;
        return { name, email, phone, date };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBooking = result.value;
        fetch(`http://localhost:5000/booking/${booking.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedBooking),
        })
          .then((res) => res.json())
          .then(() => {
            fetchBookings();
            Swal.fire("Updated!", "Booking has been updated.", "success");
          });
      }
    });
  };

  const handleConfirmBooking = (booking, index) => {
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then(() => {
        const updatedPending = [...pendingBookings];
        updatedPending.splice(index, 1);
        setPendingBookings(updatedPending);
        localStorage.setItem("pendingBookings", JSON.stringify(updatedPending));
        fetchBookings();
        Swal.fire("Confirmed!", "Booking has been saved.", "success");
      })
      .catch(() => {
        Swal.fire("Error!", "Failed to save booking.", "error");
      });
  };

  const handleDeletePendingBooking = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This pending booking will be removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#999",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedPending = [...pendingBookings];
        updatedPending.splice(index, 1);
        setPendingBookings(updatedPending);
        localStorage.setItem("pendingBookings", JSON.stringify(updatedPending));
        Swal.fire("Deleted!", "Pending booking removed.", "success");
      }
    });
  };

  return (
    <div>
      <div className="shadow text-black w-full max-w-screen[1440px] mx-auto h-[300px] bg-banner bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="absolute h-[300px] inset-0 bg-gradient-to-b from-black/60 to-gray/90 z-0"></div>
        <section className="relative z-10">
          <Nav />
        </section>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-[1440px] mx-auto px-4 mt-8 mb-6">
        <input
          type="text"
          placeholder="Search by name, email, or phone..."
          className="w-full p-3 border border-gray-600 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 mt-10">
        {/* Food Items */}
        <h2 className="text-2xl font-bold mb-6">All Food Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-green-200 shadow-md rounded-lg p-4 flex flex-col items-center">
              <img src={item.image} alt={item.name} className="w-[120px] h-[100px] object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-sm text-gray-600">৳ {item.price}</p>
              <div className="flex gap-2 mt-4">
                <button onClick={() => handleEditItem(item)} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                  <FaEdit />
                </button>
                <button onClick={() => handleDeleteItem(item.id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pending Bookings */}
        <h2 className="text-2xl font-bold mb-6">Pending Bookings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredPendingBookings.map((booking, index) => (
            <div key={index} className="bg-yellow-100 shadow-md rounded-lg p-4 space-y-2">
              <p><span className="font-semibold">Name:</span> {booking.name}</p>
              <p><span className="font-semibold">Email:</span> {booking.email}</p>
              <p><span className="font-semibold">Phone:</span> {booking.phone}</p>
              <p><span className="font-semibold">Date:</span> {booking.date}</p>
              <p><span className="font-semibold">Reason:</span> {booking.reason}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleConfirmBooking(booking, index)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Confirm
                </button>
                <button
                  onClick={() => handleDeletePendingBooking(index)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Confirmed Bookings */}
        <h2 className="text-2xl font-bold mb-6">Confirmed Bookings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-green-200 mb-5 shadow-md rounded-lg p-4 space-y-2">
              <p><span className="font-semibold">Name:</span> {booking.name}</p>
              <p><span className="font-semibold">Email:</span> {booking.email}</p>
              <p><span className="font-semibold">Phone:</span> {booking.phone}</p>
              <p><span className="font-semibold">Date:</span> {booking.date}</p>
              <div className="flex gap-2 mt-2">
                <button onClick={() => handleEditBooking(booking)} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                  <FaEdit />
                </button>
                <button onClick={() => handleDeleteBooking(booking.id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingAndItems;
