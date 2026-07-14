import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
const Header = () => (
  <header style={{ padding: "1rem", backgroundColor: "#333", color: "white" }}>
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold">
        <Link href="/" className="flex items-center gap-3 w-fit">
          <Image
            src="/cabeca.png"
            alt="tourist BH"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span>tourist BH</span>
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;