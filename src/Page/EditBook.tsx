import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/Fetaures/Book/bookApi";
import EditBookForm from "../components/ui/EditBookForm";

const EditBook = () => {
  const params = useParams();
  const { data } = useSingleBookQuery(params.id!);
  const result = data?.data;
  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Your Book</h4>
          <EditBookForm key={result?.id} book={result} editMode />
        </div>
      </div>
    </main>
  );
};

export default EditBook;
