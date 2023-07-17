/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useSingleBookQuery } from "../redux/Fetaures/Book/bookApi";
import { useLocation, useParams } from "react-router-dom";
import bookImg from "../assets/book.jpg";
import { IBook } from "../redux/Fetaures/AddNewBook/addNewBookSlice";

const Book = () => {
  const id = useParams();
  const { data, isLoading, isError } = useSingleBookQuery(id.id!);
  const result: IBook = data?.data;
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <img
            src={bookImg}
            alt={result?.title}
            className="w-64 h-auto mx-auto mb-4"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{result?.title}</h1>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Author:</span> {result?.author}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Genre:</span> {result?.genre}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Publication Date:</span>{" "}
            {result?.publicationDate}
          </p>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            quam adipisci molestias quia. Illum itaque ut, voluptatem ipsam non
            numquam dignissimos, ad eos assumenda consequuntur commodi
            recusandae officia dolores cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
