import React from "react";
import { useSingleBookQuery } from "../redux/Fetaures/Book/bookApi";
import { useLocation, useParams } from "react-router-dom";

const Book = () => {
  const id = useParams().id;
  const { data, isLoading, isError } = useSingleBookQuery(id!);
  console.log("object", data);
  return <div>book</div>;
};

export default Book;
