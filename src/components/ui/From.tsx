/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IBook } from "../../redux/Fetaures/AddNewBook/addNewBookSlice";
import { useAddBookMutation } from "../../redux/Fetaures/Book/bookApi";
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
  //   const [
  //     editBook,
  //     { isLoading: editLoading, isError: editError, isSuccess: editSuccess },
  //   ] = useEditBookMutation();
  const navigate = useNavigate();

  // State
  const [name, setName] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [genre, setGenre] = useState<string>();
  // const [price, setPrice] = useState<number>();
  // const [rating, setRating] = useState<number>();
  // const [featured, setFeatured] = useState<boolean>();

  const resetFrom = () => {
    setName("");
    setAuthor("");
    setGenre("");
    // setPrice(0);
    // setRating(0);
    // setFeatured(false);
  };

  console.log("error", isError);

  const date = new Date();
  console.log(date);
  // const submittedData = {
  //   title: name,
  //   author,
  //   genre,
  //   publicationDate: date,
  // }

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("From", e);
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
  const handleEditBook = (e) => {
    // e.preventDefault();
    // editBook({
    //   id,
    //   data: {
    //     name,
    //     author,
    //     thumbnail: imgUrl,
    //     price,
    //     rating,
    //     featured,
    //   },
    // });
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
          <label for="mhr-bookName">Book Name</label>
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
          <label for="mhr-author">Author</label>
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

        {/* <div className="flex items-center">
          <input
            id="mhr-featured"
            onClick={() => setFeatured(!featured)}
            checked={featured === true}
            type="checkbox"
            name="featured"
            className="w-4 h-4"
          />
          <label for="mhr-featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div> */}

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
      {/* {editSuccess && <Success message="Book was edited successfully" />} */}
    </div>
  );
};

export default From;
