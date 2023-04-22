import React from "react";

interface SwitchProps {
  value: boolean;
  onChange: () => void;
}

export function SwitchTest(props: SwitchProps) {
  const toggleClass = "transform translate-x-6";
  return (
    <div className="bg-[#fce6e7] p-2 rounded">
      <div
        onClick={props.onChange}
        className={`md:w-14 md:h-7 w-12 h-6 items-center $(props.value === true ? "bg-blue-200" : "bg-gray-300") rounded-full p-1 cursor-pointer`}
      >
        <div
          className={`$(props.value === true? "bg-blue-600" : "bg-white")
            md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transition transform${
              props.value === true ? toggleClass : null
            }`}
        ></div>
      </div>
    </div>
  );
}
