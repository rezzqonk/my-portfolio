export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
            {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">

        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-xl font-bold text-blue-400">
            Rizqa A.A
          </h1>

          <div className="flex gap-6 text-sm md:text-base">

            <a
              href="#about"
              className="hover:text-blue-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-blue-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-blue-400 transition"
            >
              Projects
            </a>

            <a
              href="https://github.com/rezzqonk"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              GitHub
            </a>

          </div>

        </div>

      </nav>


      {/* HERO SECTION */}
      <section id="hero" className="flex flex-col items-center justify-center text-center px-6 h-screen pt-20">

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

        <a href="#projects"
          className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
        >
          View Projects
        </a>

        </div>

      </section>

    {/* ABOUT ME SECTION */}
    <section id="about" className="py-24 px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          About Me
        </h2>

        <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
             I am a Telecommunications Engineering student at
              Politeknik Elektronika Negeri Surabaya (PENS)
              with strong interests in networking, RF systems,
              telecommunications infrastructure, and embedded communication technologies.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            I have hands-on experience in network analysis,
            IoT commissioning, Linux networking, socket programming,
            VPN configuration, and radio communication projects using Raspberry Pi and ALSA.
          </p>

         <p className="text-gray-300 leading-relaxed text-lg">
            Passionate about building reliable communication systems
            and continuously learning technologies related to ICT,
            network engineering, and cybersecurity.
          </p>

        </div>
      </div>
    </section>
    
            {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 bg-gray-900">

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

            {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 bg-gray-950">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* PROJECT 1 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">

              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                RTTY Modem Transmitter
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                Developed an RTTY modem transmitter using C and ALSA on Raspberry Pi 3.
                The system generates FSK-modulated audio signals for radio teletype communication,
                supporting real-time transmission and audio-based communication experiments.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  C
                </span>

                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  ALSA
                </span>

                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  Raspberry Pi
                </span>

                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  FSK
                </span>

                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  Linux
                </span>

              </div>

              <a
                href="https://github.com/rezzqonk/RTTY-MODEM-TRANSMITTER"
                target="_blank"
                className="inline-block px-5 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition"
              >
                View on GitHub
              </a>

            </div>

            {/* PROJECT 2 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">

              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                Network Monitoring & IoT Commissioning
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                Conducted monitoring and commissioning activities for IoT network devices,
                including Teltonika router configuration, VPN setup, NAT, firewall configuration,
                and connectivity testing across deployed systems.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  Networking
                </span>

                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  VPN
                </span>

                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  NAT
                </span>

                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  Teltonika
                </span>

                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  IoT
                </span>

              </div>

              <button
                className="inline-block px-5 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
              >
                Internship Experience
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}