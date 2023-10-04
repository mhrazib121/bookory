import React from "react";
import AccordionBasic from "../AccordionBasic";

const SelectInput = ({
  options,
  title,
  value,
  setValue,
}: {
  title: string;
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
        {title}
      </label>
      <div className="mt-3 space-y-2 max-h-[calc(100vh-229px)] overflow-auto scrollbar-none">
        <AccordionBasic key={1} title={value ? value : `Select ${title}`}>
          <ul className="space-y-2">
            {options.map((option) => (
              <li key={option}>
                <label className="flex items-center cursor-pointer">
                  <input
                    checked={value === option}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setValue(option);
                      } else {
                        setValue("");
                      }
                    }}
                    type="checkbox"
                    className="h-4 w-4 border border-gray-500 rounded text-violet-500 focus:ring-transparent cursor-pointer"
                  />
                  <span className="text-sm text-slate-600 font-medium ml-2">
                    {option}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </AccordionBasic>
      </div>
    </div>
  );
};

export default SelectInput;
