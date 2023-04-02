import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className=" text-center m-10 text-5xl md:text-7xl font-extrabold bg-gradient-to-b from-blue-400 to-sky-300 bg-clip-text text-transparent">
        JSONschema to SImple web forms
      </h1>
      <Link href="jsonschema">
        <button className="mt-5 ml-10 rounded-xl h-10 w-40  bg-sky-400 bg-gradient-to-b from-blue-400 to-sky-300   drop-shadow-3xl transition ease-in-out delay-100 hover: -translate-y-2 hover:scale-125 ">
          Click Here
        </button>
      </Link>
    </div>
  );
}
