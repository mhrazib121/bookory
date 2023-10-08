/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from "react";
import AccordionBasic from "../components/ui/AccordionBasic";
import BookCard from "../components/ui/BookCard";
import Error from "../components/ui/Error";
import BookCardLoader from "../components/ui/Loader/BookCardLoader";
import useProfile from "../hooks/useProfile";
import { IBook } from "../redux/Fetaures/AddNewBook/addNewBookSlice";
import { useGetWishListQuery } from "../redux/Fetaures/Whitelist/wishlistApi";

const Whitelist = () => {
  const [status, setStatus] = useState<string>("");
  const [wishlistData, setWishlistData] = useState<IBook[]>();
  const { data, isLoading, isError } = useGetWishListQuery({});
  const { profile } = useProfile();

  useEffect(() => {
    const loggedInUserData = data?.data.filter(
      (item) => item.email === profile?.data.email
    );

    if (loggedInUserData) {
      setWishlistData(loggedInUserData[0]?.data);

      // setWishlistData(filterdData)
    }
  }, [data?.data, profile?.data]);

  const filtersData = [
    {
      title: "Status",
      options: [
        "Wishlisted",
        "Reading soon",
        "Currently reading",
        "Finished reading",
      ],
    },
  ];
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
    if (wishlistData && wishlistData.length > 0) {
      content = (
        <>
          {status !== "Wishlisted"
            ? wishlistData
                .filter((p) => p.readingStatus?.includes(status))
                .map((book: IBook) => (
                  <>
                    <BookCard key={book?.id} book={book} isWishlist />
                  </>
                ))
            : wishlistData.map((book: IBook) => (
                <>
                  <BookCard key={book?.id} book={book} isWishlist />
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
  console.log(status);
  return (
    <main className="flex gap-3 container">
      <div className="md:flex">
        <div className="col-span-3 min-w-[250px] z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-4 self-start sticky top-[84px] h-[calc(100vh-100px)]">
          {/* Filters */}
          <div className="">
            <h1 className="text-xl uppercase">Filters</h1>
            <div className="mt-3 space-y-2 max-h-[calc(100vh-229px)] overflow-auto scrollbar-none">
              {filtersData.map((fd) => (
                <AccordionBasic key={fd.title} title={fd.title}>
                  <ul className="space-y-2">
                    {fd.options.map((o) => (
                      <li key={o}>
                        <label className="flex items-center cursor-pointer">
                          <input
                            checked={fd.title === "Status" && status === o}
                            onChange={(e) => {
                              if (e.target.checked) {
                                fd.title === "Status" && setStatus(o);
                              } else {
                                fd.title === "Status" && setStatus("");
                              }
                            }}
                            type="checkbox"
                            className="h-4 w-4 border border-gray-500 rounded text-violet-500 focus:ring-transparent cursor-pointer"
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {o}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionBasic>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">My Favorite Book</h4>

            <div className="flex items-center space-x-4"></div>
          </div>
          <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {content}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Whitelist;
