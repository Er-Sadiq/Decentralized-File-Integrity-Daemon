
function Footer() {
  return (
    <footer className="w-full text-white font-medium rounded-lg shadow-md mt-10">
      <div className="w-full mx-auto max-w-screen-xl px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="text-base text-white sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="https://yourwebsite.com" className="hover:underline font-semibold">
          Decentralized File Integrity Daemon Dapp™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center  text-white font-semibold mt-3 md:mt-0 gap-4 text-sm">
          <li>
            <a href="#" className="hover:text-gray-300 transition">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
