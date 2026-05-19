import { toast } from "sonner";

const ContactPage = () => {

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    toast.success("Message sent successfully");
  };

  return (
    <div className="min-h-screen bg-[#fdf8f3] px-6 py-24">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* Left Content */}
        <div>

          <p className="uppercase tracking-[6px] text-sm text-gray-500 font-semibold">

            Contact Us

          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">

            Let’s Plan Your <br />

            Dream Celebration

          </h1>

          <p className="mt-8 text-gray-600 text-lg leading-8">

            Contact our luxury event styling team and let’s create unforgettable moments together.

          </p>

          {/* Contact Cards */}
          <div className="mt-12 flex flex-col gap-6">

            <div className="bg-white rounded-3xl p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <h3 className="text-2xl font-semibold">

                Phone

              </h3>

              <p className="mt-3 text-gray-500">

                +961 70 248 397 

              </p>

            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <h3 className="text-2xl font-semibold">

                Email

              </h3>

              <p className="mt-3 text-gray-500">

                contact@partystylist.com

              </p>

            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <h3 className="text-2xl font-semibold">

                Location

              </h3>

              <p className="mt-3 text-gray-500">

                Tripoli, Lebanon

              </p>

            </div>

          </div>

        </div>

        {/* Form */}
        <div className="bg-white rounded-[40px] shadow-2xl p-10">

          <h2 className="text-4xl font-bold">

            Send A Message

          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-black transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-black transition"
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              className="border border-gray-300 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-black transition resize-none"
            />

            <button
              type="submit"
              className="bg-black text-white py-4 rounded-2xl transition-all duration-500 hover:bg-gray-900 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] active:scale-95 font-semibold tracking-wide"
            >

              Send Message

            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default ContactPage;