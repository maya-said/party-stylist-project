import Button from "../components/Button";

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

          <Button text="Explore Products" />

          <Button text="Contact Us" />

        </div>

      </section>

    </div>
  );
};

export default HomePage;