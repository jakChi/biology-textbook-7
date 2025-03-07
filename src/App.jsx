import { useState } from "react";

import Book from "./components/book";
import sevenImg from "./assets/images/biology-7.jpg";
import eightImg from "./assets/images/biology-8.jpg";
import nineImg from "./assets/images/biology-9.png";
import tenImg from "./assets/images/biology-10.png";

function App() {
  const books = [
    {
      title: "ბიოლოგია 7 კლასის მოსწავლეების წიგნი",
      url: "https://www.scribd.com/embeds/792798177/content?start_page=1&view_mode=scroll&access_key=key-hCCBspyijgt1y2ADfxw2",
      imgUrl: sevenImg,
    },
    {
      title: "ბიოლოგია 8 კლასის მოსწავლეების წიგნი ნაწილი I",
      imgUrl: eightImg,
      url: "https://www.scribd.com/embeds/498646559/content?start_page=1&view_mode=scroll&access_key=key-sFtyvjaRGVijpnPL1Yf5&scribd_rebrand=true",
    },
    {
      title: "ბიოლოგია 9 კლასის მოსწავლეების წიგნი ნაწილი I",
      imgUrl: nineImg,
      url: "https://www.scribd.com/embeds/683070928/content?start_page=1&view_mode=scroll&access_key=key-5g5vXbpKDEx3BZEycgVU&scribd_rebrand=true",
    },
    {
      title: "ბიოლოგია 9 კლასის მოსწავლეების წიგნი ნაწილი II",
      imgUrl: nineImg,
      url: "https://www.scribd.com/embeds/669942840/content?start_page=1&view_mode=scroll&access_key=key-QqXKvsFXpT6M2Ozn1sT6&scribd_rebrand=true",
    },
    {
      title: "ბიოლოგია 10 კლასის მოსწავლეების წიგნი ნაწილი I",
      imgUrl: tenImg,
      url: "https://www.scribd.com/embeds/612150373/content?start_page=1&view_mode=scroll&access_key=key-wbhBlGHSpvbu6Z8N3STU&scribd_rebrand=true",
    },
  ];

  const [currentBook, setCurrentBook] = useState(0);
  const [bookShelf, setBookShelf] = useState(false);

  return (
    <div className="w-full h-screen border flex relative overflow-hidden">
      <iframe
        title="ბიოლოგია-7-მოსწავლის-წიგნი"
        src={books[currentBook].url}
        data-auto-height="true"
        data-aspect-ratio="0.7088906372934697"
        width="100%"
        height="800"
        className="h-full border-2"
      ></iframe>
      <div
        className={`absolute right-0 flex items-center ${
          !bookShelf ? "translate-x-[80%]" : "translate-x-0"
        }`}
      >
        <button
          onClick={() => setBookShelf(!bookShelf)}
          className="bg-blue-500 text-white h-10 w-10 rounded-l-full"
        >
          {bookShelf ? "->" : "<-"}
        </button>
        <div
          id="book-list"
          className={`w-40 h-screen overflow-auto flex flex-col items-center bg-slate-200`}
        >
          {bookShelf &&
            books.map((book, idx) => (
              <Book
                key={book.bookId}
                id={idx}
                img={book.imgUrl}
                title={book.title}
                setCurrentBook={setCurrentBook}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
