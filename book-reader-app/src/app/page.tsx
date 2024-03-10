import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
    <div>
      <Header/>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quis provident optio voluptatum nemo impedit quae beatae nulla, totam rem hic sed aut perspiciatis officiis culpa earum numquam dolorum quo.</p>
    </div>
    </main>
  );
}
