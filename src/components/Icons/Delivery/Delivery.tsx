import React from "react";

type Props = {
  stroke?: string;
  width?: number;
  height?: number;
};

const Delivery = ({ stroke = "#212529", width = 22, height = 19 }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M3.84896 15.2402C2.62071 15.2402 1.625 14.2445 1.625 13.0162V5.86519C1.625 3.50817 1.625 2.32965 2.35723 1.59742C3.08946 0.865194 4.26798 0.865194 6.625 0.865194H9.33333C11.6904 0.865194 12.8689 0.865194 13.6011 1.59742C14.3333 2.32965 14.3333 3.50817 14.3333 5.86519V15.2402H7.25"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <path
          d="M14.0749 6.49023H15.7384C16.809 6.49023 17.3444 6.49023 17.821 6.69734C18.2976 6.90444 18.6629 7.29578 19.3935 8.07846L19.9487 8.67336C20.3208 9.07184 20.5066 9.27109 20.6427 9.49788C20.7841 9.73384 20.8858 9.99153 20.9433 10.2606C20.9987 10.5192 20.9987 10.7917 20.9987 11.3368V13.1924C20.9987 14.3234 20.0818 15.2402 18.9508 15.2402M11.832 15.2402H15.3914"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <path
          d="M5.27214 17.3236C6.3652 17.3236 7.2513 16.4375 7.2513 15.3444C7.2513 14.2513 6.3652 13.3652 5.27214 13.3652C4.17907 13.3652 3.29297 14.2513 3.29297 15.3444C3.29297 16.4375 4.17907 17.3236 5.27214 17.3236Z"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <path
          d="M17.5612 17.3236C18.6543 17.3236 19.5404 16.4375 19.5404 15.3444C19.5404 14.2513 18.6543 13.3652 17.5612 13.3652C16.4681 13.3652 15.582 14.2513 15.582 15.3444C15.582 16.4375 16.4681 17.3236 17.5612 17.3236Z"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <path d="M1 11.4902H2.25" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M6 8.29515L6.85094 9.161C7.09585 9.41023 7.49754 9.41023 7.74246 9.161L9.95833 6.90625"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Delivery;
