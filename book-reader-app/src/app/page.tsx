import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Books from "@/components/Books";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        {/* Header component */}
        <Header />
        <div className={styles.containerStyle}>
          <section className={styles.content}>
            {/* Side bar component */}
            <Sidebar />
          </section>
          <div className={styles.grouper}>
            {/* Books Header */}
            <h1 className={styles.title}>All Books</h1>
            {/* Books component */}
            <Books />
          </div>
        </div>
      </div>
    </main>
  );
}
