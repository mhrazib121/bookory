/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IBook } from "../../redux/Fetaures/AddNewBook/addNewBookSlice";
import {
  useAddBookMutation,
  useEditBookMutation,
} from "../../redux/Fetaures/Book/bookApi";
import Error from "./Error";
import Success from "./Success";
// import {
//   useAddBookMutation,
//   useEditBookMutation,
// } from "../features/Api/apiSlice";

interface FormProps {
  book?: IBook;
  editMode?: boolean;
}

const From = ({ book, editMode }: FormProps) => {
  //   const {
  //     id,
  //     name: initialName,
  //     author: initialAuthor,
  //     thumbnail: initialThumbnail,
  //     price: initialPrice,
  //     rating: initialRating,
  //     featured: initialFeatured,
  //   } = book || {};
  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();
  const [
    editBook,
    { isLoading: editLoading, isError: editError, isSuccess: editSuccess },
  ] = useEditBookMutation();
  const navigate = useNavigate();

  // State
  const [name, setName] = useState<string>(book?.title || "");
  const [author, setAuthor] = useState<string>(book?.author || "");
  const [genre, setGenre] = useState<string>(book?.genre || "");

  const resetFrom = () => {
    setName("");
    setAuthor("");
    setGenre("");
  };

  console.log("error", isError);

  const date = new Date();
  console.log(date);

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault();
    await addBook({
      data: {
        title: name || "",
        author: author || "",
        genre: genre || "",
        publicationDate: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      },
    });
    resetFrom();
    // navigate("/");
  };
  const handleEditBook = async (e: React.FormEvent) => {
    e.preventDefault();
    await editBook({
      id: book?.id || "",
      data: {
        title: name,
        author,
        genre,
        id: book?.id || "",
        publicationDate: book?.publicationDate || "",
      },
    });
    resetFrom();
    navigate("/");
  };

  return (
    <div>
      <form
        className="book-form"
        onSubmit={editMode ? handleEditBook : handleAddBook}
      >
        <div className="space-y-2">
          <label>Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="mhr-bookName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        </div>

        <div className="space-y-2">
          <label>Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="mhr-author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            name="author"
          />
        </div>

        <div className="space-y-2">
          <label>Genre</label>
          <input
            required
            className="text-input"
            type="text"
            id="mhr-thumbnail"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            name="genre"
          />
        </div>

        {editMode ? (
          <button type="submit" className="submit" id="mhr-submit">
            Update Book
          </button>
        ) : (
          <button type="submit" className="submit" id="mhr-submit">
            Add Book
          </button>
        )}
      </form>
      {isSuccess && <Success message="Book was added successfully" />}
      {isError ? <Error /> : null}
      {editSuccess && <Success message="Book was edited successfully" />}
    </div>
  );
};

export default From;
