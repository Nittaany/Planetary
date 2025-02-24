import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative flex justify-center items-center mx-auto w-[80%] md:w-[60%] lg:w-[50%] bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 rounded-full shadow-2xl border border-gray-700 mt-10 mb-5 animate-glow">
      <div className="flex items-center space-x-6">
        <p className='text-emerald-400'>Made With 💻 by</p>
        
        <a
          href="https://linkedin.com/in/satyam-c"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition duration-300"
        >
          <FaLinkedin size={28} className="text-white hover:text-emerald-400" />
        </a>
        <a
          href="https://github.com/nittaany"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition duration-300"
        >
          <FaGithub size={28} className="text-white hover:text-teal-400" />
        </a>
      </div>
    </footer>
  );
}
