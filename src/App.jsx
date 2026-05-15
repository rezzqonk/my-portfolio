export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 h-screen">

        <p className="text-blue-400 mb-3 tracking-widest">
          HELLO, I'M
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Rizqa Amalia Ananda
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          ICT Enthusiast • Network & Telecommunications
        </h2>

        <p className="max-w-2xl text-gray-400 leading-relaxed mb-8">
          a Telecommunication Engineering graduate, 
          Passionate about networking, radio communication, and ICT infrastructure.
          Experienced in telecommunications projects, network analysis,
          RF systems, and embedded communication development using Raspberry Pi and C programming.
        </p>

        <div className="flex gap-4">

          <a
            href="https://github.com/rezzqonk"
            target="_blank"
            className="px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition"
          >
            GitHub
          </a>

          <button
            className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
          >
            View Projects
          </button>

        </div>

      </section>

    </div>
  );
}