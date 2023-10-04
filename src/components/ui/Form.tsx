/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useProfile from "../../hooks/useProfile";
import { useAddBookMutation } from "../../redux/Fetaures/Book/bookApi";
import CommonInput from "./Common/CommonInput";
import Error from "./Error";
import Success from "./Success";
import SelectInput from "./Common/SelectInput";

const Form = () => {
  const { profile } = useProfile();
  const [addBook, { isError, isSuccess }] = useAddBookMutation();
  const navigate = useNavigate();

  // State
  const [name, setName] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [genre, setGenre] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>();
  const [publicationDate, setPublicationDate] = useState<string>();

  const resetFrom = () => {
    setName("");
    setAuthor("");
    setGenre("");
    setImgUrl("");
    setPublicationDate("");
  };

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault();
    await addBook({
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
    resetFrom();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book added successfully");
      navigate("/");
    }
    if (isError) {
      toast.error("Something wrong! try again");
    }
  }, [isError, isSuccess, navigate]);

  const options = [
    "Computer and Programming",
    "Motivational",
    "Self-Development",
    "Fiction",
    "Islamic",
    "Fantasy romance",
    "Science Fiction",
    "Novels",
    "Liberation War",
    "Story",
    "Romantic, Novels",
    "Poetry",
    "Essay",
  ];

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
          <SelectInput
            title="Genre"
            options={options}
            value={genre}
            setValue={setGenre}
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
