/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useProfile from "../../hooks/useProfile";
import { IBook } from "../../redux/Fetaures/AddNewBook/addNewBookSlice";
import {
  useAddBookMutation,
  useEditBookMutation,
} from "../../redux/Fetaures/Book/bookApi";
import Error from "./Error";
import Success from "./Success";
interface FormProps {
  book?: IBook;
  editMode?: boolean;
}

const From = ({ book, editMode }: FormProps) => {
  const { profile } = useProfile();
  const [addBook, { isError, isSuccess }] = useAddBookMutation();
  const [editBook, { isSuccess: editSuccess }] = useEditBookMutation();
  const navigate = useNavigate();

  // console.log("profile", profile);

  // State
  const [name, setName] = useState<string>(book?.title || "");
  const [author, setAuthor] = useState<string>(book?.author || "");
  const [genre, setGenre] = useState<string>(book?.genre || "");
  const [imgUrl, setImgUrl] = useState<string>(book?.imgUrl || "");

  const resetFrom = () => {
    setName("");
    setAuthor("");
    setGenre("");
  };

  const date = new Date();

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await addBook({
        data: {
          title: name || "",
          author: author || "",
          genre: genre || "",
          publisherEmail: profile?.data.getProfile.email || "",
          imgUrl,
          reviews: [{ name: "", email: "" }],
          publicationDate: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        },
      }).then((res) => {
        console.log(res);
        if (res?.data?.statusCode === 200) {
          toast.success(`${res?.data?.message}`);
          navigate("/");
        }
        if (res.error.status === 400) {
          console.log(res);
          toast.error(`${res?.error?.data.message}`);
        }
      });

      resetFrom();
    } catch (error) {
      console.log(error, "error");
    }
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
            // id="mhr-thumbnail"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            name="genre"
          />
        </div>
        <div className="space-y-2">
          <label>Image URL</label>
          <input
            // required
            className="text-input"
            type="text"
            // id="mhr-thumbnail"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            name="imgUrl"
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
