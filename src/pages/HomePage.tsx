import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="bg-[#fdf8f3] overflow-hidden">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 py-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.8,
            }}
          >

            <p className="uppercase tracking-[6px] text-sm text-gray-500 font-semibold">

              Luxury Event Styling

            </p>

            <h1 className="text-6xl md:text-7xl font-bold mt-8 leading-tight">

              Elegant <br />

              Celebrations <br />

              Crafted Perfectly

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">

              Premium decorations, unforgettable styling,
              and luxury event experiences designed for weddings,
              birthdays, baby showers, and exclusive celebrations.

            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-6">

              <Link
                to="/products"
                className="bg-black text-white px-10 py-5 rounded-2xl font-semibold tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] active:scale-95"
              >

                Explore Products

              </Link>

              <Link
                to="/contact"
                className="border border-black px-10 py-5 rounded-2xl font-semibold tracking-wide transition-all duration-500 hover:bg-black hover:text-white hover:scale-105"
              >

                Contact Us

              </Link>

            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">

              <div>

                <h2 className="text-4xl font-bold">

                  250+

                </h2>

                <p className="mt-2 text-gray-500">

                  Events Styled

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold">

                  120+

                </h2>

                <p className="mt-2 text-gray-500">

                  Luxury Clients

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold">

                  5★

                </h2>

                <p className="mt-2 text-gray-500">

                  Client Rating

                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            {/* Main Image */}
            <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury Event"
              className="rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.2)] w-full h-[700px] object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl max-w-xs">

              <p className="text-sm uppercase tracking-[4px] text-gray-500">

                Premium Experience

              </p>

              <h3 className="text-2xl font-bold mt-3">

                Luxury Styling For Every Celebration

              </h3>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Services Section */}
      <section className="px-6 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-sm text-gray-500 font-semibold">

              Our Services

            </p>

            <h2 className="text-5xl font-bold mt-6">

              Crafted For Memorable Moments

            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">

            {/* Card */}
            <div className="bg-white rounded-[40px] p-10 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]">

              <h3 className="text-3xl font-bold">

                Weddings

              </h3>

              <p className="mt-6 text-gray-600 leading-8">

                Elegant wedding styling and premium floral decorations designed for unforgettable celebrations.

              </p>

            </div>

            {/* Card */}
            <div className="bg-white rounded-[40px] p-10 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]">

              <h3 className="text-3xl font-bold">

                Birthdays

              </h3>

              <p className="mt-6 text-gray-600 leading-8">

                Luxury birthday setups, balloons, premium themes, and unforgettable styling experiences.

              </p>

            </div>

            {/* Card */}
            <div className="bg-white rounded-[40px] p-10 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]">

              <h3 className="text-3xl font-bold">

                Baby Showers

              </h3>

              <p className="mt-6 text-gray-600 leading-8">

                Soft elegant decorations and premium baby shower styling crafted with luxury details.

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default HomePage;