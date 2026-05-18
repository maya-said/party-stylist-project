const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#fdf8f3]">

      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h1 className="text-6xl font-bold text-black">
          Luxury Event Styling
        </h1>

        <p className="mt-6 max-w-2xl text-gray-600 text-lg">
          Elegant decorations and unforgettable moments
          for weddings, birthdays, baby showers, and
          special events.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Explore Products
          </button>

          <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
            Contact Us
          </button>

        </div>

      </section>

    </div>
  );
};

export default HomePage;