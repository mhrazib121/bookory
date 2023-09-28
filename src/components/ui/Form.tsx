/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useProfile from "../../hooks/useProfile";
import { IBook } from "../../redux/Fetaures/AddNewBook/addNewBookSlice";
import { useAddBookMutation } from "../../redux/Fetaures/Book/bookApi";
import CommonInput from "./Common/CommonInput";
import Error from "./Error";
import Success from "./Success";
interface FormProps {
  book?: IBook;
  editMode?: boolean;
}

const Form = () => {
  const { profile } = useProfile();
  const [addBook, { isError, isSuccess, data }] = useAddBookMutation();
  const navigate = useNavigate();

  // State
  const [name, setName] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [genre, setGenre] = useState<string>();
  const [imgUrl, setImgUrl] = useState<string>();
  const [publicationDate, setPublicationDate] = useState<string>();

  const resetFrom = () => {
    setName("");
    setAuthor("");
    setGenre("");
    setImgUrl("");
    setPublicationDate("");
  };

  const date = new Date();
  // `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  console.log(isError);

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await addBook({
      data: {
        title: name || "",
        author: author || "",
        genre: genre || "",
        email: profile?.data.email || "",
        imgUrl: imgUrl || "",
        reviews: [],
        publicationDate: publicationDate || "",
      },
    });

    if (response.data && response.data.statusCode === 200) {
      navigate("/");
    }

    resetFrom();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book added successfully");
    }
    if (isError) {
      toast.error("Something wrong! try again");
    }
  }, [isError, isSuccess]);

  return (
    <div>
      <form className="book-form" onSubmit={handleAddBook}>
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
      {isSuccess && <Success message="Book was added successfully" />}
      {isError ? <Error /> : null}
    </div>
  );
};

export default Form;
