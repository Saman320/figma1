import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative w-[1440px] h-[67px] right-10 ">
      <ul className="absolute w-[283px] h-[24px] top-[66px]">
        <Link
          href="/"
          className="absolute left-[1088px] font-inter text-black text-sm md:text-xl lg:text-[20px] sm:text-xl font-[500]"
        >
          Works
        </Link>

        <Link
          href="/"
          className="absolute left-[1201px] text-black font-inter text-sm md:text-xl lg:text-xl sm:text-xl font-[500] "
        >
          Blog
        </Link>

        <Link
          href="/"
          className="absolute left-[1294px] text-black font-inter text-sm md:text-xl lg:text-xl sm:text-xl hover:text-customPink transition-colors duration-300 ease-in-out font-[500] "
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;