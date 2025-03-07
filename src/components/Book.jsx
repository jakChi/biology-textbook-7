import PropTypes from "prop-types";

Book.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  setCurrentBook: PropTypes.func.isRequired,
};

function Book({ id, title, img, setCurrentBook }) {
  return (
    <>
      <h3 className="text-center text-sm font-semibold text-white mx-1">{title}</h3>
      <div
        className="my-10 w-28 border-2 border-white rounded-sm cursor-pointer"
        onClick={() => setCurrentBook(id)}
      >
        <img src={img} alt="book cover" className="w-full overflow-auto" />
      </div>
    </>
  );
}

export default Book;
