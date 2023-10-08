/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import HeroSection from "../components/HomePage/Hero";
import Subscription from "../components/Subscription";
import BookCard from "../components/ui/BookCard";
import Error from "../components/ui/Error";
import BookCardLoader from "../components/ui/Loader/BookCardLoader";
import { IBook } from "../redux/Fetaures/AddNewBook/addNewBookSlice";
import { useGetBooksQuery } from "../redux/Fetaures/Book/bookApi";

const Home = () => {
  const { data, isLoading, isError } = useGetBooksQuery({});
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
  if (!isLoading && !isError && data && data?.data?.length > 0) {
    content = (
      <>
        {data?.data?.map((book: IBook) => (
          <BookCard key={book?.id} book={book} />
        ))}
      </>
    );
  }
  return (
    <main className="py-12 2xl:px-6 container">
      <div className="mb-8">
        <HeroSection />
      </div>
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-3xl font-bold text-center">Book List</h4>

          <div className="flex items-center space-x-4"></div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
      <div className="my-10">
        <Subscription />
      </div>
    </main>
  );
};

export default Home;
