import React from "react";

type Props = {};

export const IconReport = (props: Props) => {
  return (
    <svg
      className="h-5 w-5 text-black"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {" "}
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
};
