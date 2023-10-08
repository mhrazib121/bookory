/* eslint-disable @typescript-eslint/no-misused-promises */

import { useLocation, useNavigate, useParams } from "react-router-dom";
import BookDetails from "../components/BookDetails";
import useProfile from "../hooks/useProfile";
import { useDeleteBookMutation } from "../redux/Fetaures/Book/bookApi";
import { useGetSingleWishBookQuery } from "../redux/Fetaures/Whitelist/wishlistApi";

const WishlistBookDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const param = useParams();
  const [deleteBook] = useDeleteBookMutation();
  const { profile } = useProfile();
  const { data } = useGetSingleWishBookQuery({
    email: profile?.data.email || "",
    id: param.id || "",
  });
  const result = data?.data;

  const handleDelete = async (): Promise<void> => {
    if (profile) {
      await deleteBook(result?.id || "");
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  console.log("result", result);
  return (
    <>
      <BookDetails key={1} result={result!} />
    </>
  );
};

export default WishlistBookDetails;
