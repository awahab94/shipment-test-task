import React from "react";

interface Props {
  sortOrder?: "ascend" | "descend" | null;
}

const SortArrow = ({ sortOrder }: Props) => {
  const activeColor = "#1677ff";
  const inactiveColor = "#F3F6F9";

  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Up Arrow */}
      <path
        d="M7.5 5L3.5 9H11.5L7.5 5ZM7.5 5V19"
        stroke={sortOrder === "ascend" ? activeColor : inactiveColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Down Arrow */}
      <path
        d="M17.5 19L21.5 15H13.5L17.5 19ZM17.5 19V5"
        stroke={sortOrder === "descend" ? activeColor : inactiveColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SortArrow;
