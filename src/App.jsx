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
            {/* SKILLS SECTION */}
      <section className="py-24 px-6 bg-gray-900">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-gray-800 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Networking
              </h3>

              <ul className="space-y-2 text-gray-300">
                <li>TCP/IP</li>
                <li>Routing & Switching</li>
                <li>VPN IPsec</li>
                <li>VLAN</li>
                <li>NAT & ACL</li>
                <li>QoS</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Telecommunications & RF
              </h3>

              <ul className="space-y-2 text-gray-300">
                <li>RTTY Communication</li>
                <li>FSK Modulation</li>
                <li>Access Network</li>
                <li>RF Coverage Analysis</li>
                <li>Signal Processing</li>
                <li>Radio Communication</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Programming & Tools
              </h3>

              <ul className="space-y-2 text-gray-300">
                <li>C Programming</li>
                <li>Linux</li>
                <li>Raspberry Pi</li>
                <li>Git & GitHub</li>
                <li>Wireshark</li>
                <li>VS Code</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}