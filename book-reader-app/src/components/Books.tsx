"use client";
import { motion } from "framer-motion";
import { books } from "@/constants/mockData";
import styles from "@/app/page.module.css";
import BookCard from '@/components/BookCard';
const Books = () => {
  return (
    <ul className={styles.ulGroupStyle}>
      {books.map((book, i) => (
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", damping: 50, mass: 0.75 }}
          initial={{ opacity: 0, x: 200 * (i + 1) }}
          animate={{ opacity: 1, x: 0 }}
          key={i}
        >
          <a href={`/book/${book.id}`} style={{textDecoration:'none'}}>
            {/* Book cards component */}
          <BookCard title={book.title} coverImage={book.image} description={book.description} />
            <p>{book.title}</p>
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

export default Books;
