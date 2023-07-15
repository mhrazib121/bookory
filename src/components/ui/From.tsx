/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {
//   useAddBookMutation,
//   useEditBookMutation,
// } from "../features/Api/apiSlice";
import Error from "./Error";
import Success from "./Success";

interface FormProps {
  book: any;
  editMode: boolean;
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
  //   const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();
  //   const [
  //     editBook,
  //     { isLoading: editLoading, isError: editError, isSuccess: editSuccess },
  //   ] = useEditBookMutation();
  const navigate = useNavigate();

  // State
  const [name, setName] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [imgUrl, setImgUrl] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [rating, setRating] = useState<number>();
  const [featured, setFeatured] = useState<boolean>();

  const resetFrom = () => {
    setName("");
    setAuthor("");
    setImgUrl("");
    setPrice(0);
    setRating(0);
    setFeatured(false);
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    // addBook({
    //   name,
    //   author,
    //   thumbnail: imgUrl,
    //   price,
    //   rating,
    //   featured,
    // });
    resetFrom();
    navigate("/");
  };
  const handleEditBook = (e) => {
    e.preventDefault();
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
          <label for="mhr-thumbnail">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="mhr-thumbnail"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            name="thumbnail"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label for="mhr-price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="mhr-price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price"
            />
          </div>

          <div className="space-y-2">
            <label for="mhr-rating">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="mhr-rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              name="rating"
              min="1"
              max="5"
            />
          </div>
        </div>

        <div className="flex items-center">
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
      {isSuccess && <Success message="Video was added successfully" />}
      {isError || editError ? <Error /> : null}
      {editSuccess && <Success message="Video was edited successfully" />}
    </div>
  );
};

export default From;
