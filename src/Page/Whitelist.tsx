/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import BookCard from "../components/ui/BookCard";
import Error from "../components/ui/Error";
import BookCardLoader from "../components/ui/Loader/BookCardLoader";
import useProfile from "../hooks/useProfile";
import { IBook } from "../redux/Fetaures/AddNewBook/addNewBookSlice";
import { useGetWishListQuery } from "../redux/Fetaures/Whitelist/wishlistApi";

const Whitelist = () => {
  const { data, isLoading, isError } = useGetWishListQuery(undefined);
  const { profile } = useProfile();
  console.log("whitelist", data);
  let content = null;

  if (isLoading) {
    content = (
      <>
        <BookCardLoader />
        <BookCardLoader />
        <BookCardLoader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error />;
  }
  // if (!isLoading && !isError && data && data?.data?.length < 1) {
  //   content = <h1> You have not favorite book yet</h1>;
  // }
  if (!isLoading && !isError && data && data?.data?.length > 0) {
    const userBooks = data?.data?.filter(
      (p) => profile?.data.email === p.email
    )[0]?.data;
    if (userBooks && userBooks.length > 0) {
      content = (
        <>
          {userBooks.map((book: IBook) => (
            <>
              <BookCard key={book?.id} book={book} />
            </>
          ))}
        </>
      );
    } else {
      content = (
        <h1 className="text-center text-lg text-red-300">
          You did not add any book in your favorite list yet.
        </h1>
      );
    }
  }
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">My Favorite Book</h4>

          <div className="flex items-center space-x-4"></div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </main>
  );
};

export default Whitelist;
