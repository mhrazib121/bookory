/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BookCard from "./components/ui/BookCard";
import Error from "./components/ui/Error";
import BookCardLoader from "./components/ui/Loader/BookCardLoader";
import MainLayout from "./layouts/MainLayout";
import { IBook } from "./redux/Fetaures/AddNewBook/addNewBookSlice";
import { useGetBooksQuery } from "./redux/Fetaures/Book/bookApi";

function App() {
  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
