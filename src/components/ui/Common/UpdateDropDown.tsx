/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import * as React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUpdateReadingStatusMutation } from "../../../redux/Fetaures/Whitelist/wishlistApi";
import Spinner from "../Loader/Spinner";
import useProfile from "../../../hooks/useProfile";

interface IProp {
  options: string[];
  //   status: string;
  wishlistId: string;
}

export function UpdateDropdown({ options, wishlistId }: IProp) {
  const [open, setOpen] = useState<boolean>();
  const { profile } = useProfile();
  const [updateReadingStatus, { isSuccess, isLoading }] =
    useUpdateReadingStatusMutation();

  const handleUpdateStatus = async (data: string) => {
    await updateReadingStatus({
      id: wishlistId,
      data: { status: data, email: profile?.data?.email as string },
    });
    setOpen(false);
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Status update successfully");
    }
  }, [isSuccess]);

  return (
    <div className="relative inline-block text-left">
      {isLoading ? (
        <Spinner color="text-green" />
      ) : (
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setOpen(!open)}
          >
            <p> Update status</p>
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}

      {open && (
        <div
          className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {options.map((option, i) => (
              <div
                key={i}
                onClick={() => handleUpdateStatus(option)}
                className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-violet-200"
              >
                <p className="whitespace-nowrap">{option}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
