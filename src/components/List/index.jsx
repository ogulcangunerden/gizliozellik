import React from "react";

const List = ({ items }) => {
  return (
    <ul className="mx-10 mb-10 list-none p-0 pl-4 sm:flex sm:flex-col">
      {items.map((item, index) => (
        <li key={index} className="py-3">
          {index + 1}. {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
