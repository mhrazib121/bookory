/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { send } from "../../assets/Social Icon";
import useProfile from "../../hooks/useProfile";
import { useAddReviewMutation } from "../../redux/Fetaures/Book/bookApi";
import CommonInput from "../ui/Common/CommonInput";

const ReviewBox = ({ id }: { id: string }) => {
  const [message, setMessage] = useState<string>("");
  const [addReview, { isSuccess, isError }] = useAddReviewMutation();
  const { profile } = useProfile();
  const handleSubmit = async () => {
    await addReview({
      id: id,
      data: {
        email: profile?.data.getProfile.email || "",
        name: `${profile?.data.getProfile.name.firstName || ""} ${
          profile?.data.getProfile.name.lastName || ""
        }`,
        message,
      },
    });
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Review added successfully");
      setMessage("");
    }
    if (isError) {
      toast.error("Something wrong! try again");
    }
  }, [isError, isSuccess]);

  return (
    <div className="flex gap-4 items-center my-8 justify-center">
      <div className="w-[50%]">
        <CommonInput
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          key={1}
          value={message}
          handleOnChange={setMessage}
        />
      </div>
      <div className="bg-blue-500 hover:bg-blue-700 cursor-pointer p-2 mt-4 rounded-[45%]">
        <img onClick={() => handleSubmit()} src={send} alt="" />
      </div>
    </div>
  );
};

export default ReviewBox;
