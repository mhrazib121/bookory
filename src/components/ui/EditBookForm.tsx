/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useProfile from "../../hooks/useProfile";
import { IBook } from "../../redux/Fetaures/AddNewBook/addNewBookSlice";
import { useEditBookMutation } from "../../redux/Fetaures/Book/bookApi";
import CommonInput from "./Common/CommonInput";
import Error from "./Error";
import Success from "./Success";
interface FormProps {
  book?: IBook;
  editMode?: boolean;
}

const EditBookForm = ({ book, editMode }: FormProps) => {
  const { profile } = useProfile();
  const [editBook, { isSuccess: editSuccess, isError: isEditError }] =
    useEditBookMutation();
  const navigate = useNavigate();

  // State
  const [name, setName] = useState<string>(book?.title || "");
  const [author, setAuthor] = useState<string>(book?.author || "");
  const [genre, setGenre] = useState<string>(book?.genre || "");
  const [imgUrl, setImgUrl] = useState<string>(book?.imgUrl || "");
  const [publicationDate, setPublicationDate] = useState<string>(
    book?.publicationDate || ""
  );

  const resetFrom = () => {
    setName("");
    setAuthor("");
    setGenre("");
  };

  const date = new Date();

  const handleEditBook = async (e: React.FormEvent) => {
    e.preventDefault();
    await editBook({
      id: book?.id || "",
      data: {
        title: name,
        author,
        genre,
        id: book?.id || "",
        publicationDate,
        email: book?.email || "",
        imgUrl,
        reviews: book?.reviews || [],
      },
    });
    resetFrom();
    navigate("/");
  };

  useEffect(() => {
    if (editSuccess) {
      toast.success("Book edited successfully");
    }
  }, [isEditError, editSuccess]);

  return (
    <div>
      <form className="book-form" onSubmit={handleEditBook}>
        <div className="space-y-2">
          <CommonInput
            label="Book Name"
            placeholder="Enter the book name"
            type="text"
            key={1}
            value={name}
            handleOnChange={setName}
          />
        </div>
        <div className="space-y-2">
          <CommonInput
            label="Publication year"
            placeholder="Enter the publication year"
            type="text"
            key={1}
            value={publicationDate}
            handleOnChange={setPublicationDate}
          />
        </div>

        <div className="space-y-2">
          <CommonInput
            label="Author"
            placeholder="Enter the author name"
            type="text"
            key={1}
            value={author}
            handleOnChange={setAuthor}
          />
        </div>

        <div className="space-y-2">
          <CommonInput
            label="Genre"
            placeholder="Enter the genre"
            type="text"
            key={1}
            value={genre}
            handleOnChange={setGenre}
          />
        </div>
        <div className="space-y-2">
          <CommonInput
            label="Image URL"
            placeholder="Enter the book image url"
            type="text"
            key={1}
            value={imgUrl}
            handleOnChange={setImgUrl}
          />
        </div>
        <button type="submit" className="submit" id="mhr-submit">
          Submit
        </button>
      </form>

      {isEditError ? <Error /> : null}
      {editSuccess && <Success message="Book was edited successfully" />}
    </div>
  );
};

export default EditBookForm;
