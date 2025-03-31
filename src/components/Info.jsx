import React from "react";

export const Info = ({quantity, completed}) => {
  return (
    <div>
      <p>Загальна кількість завдань: {quantity}</p>
      <p>Виконано завдань: {completed}</p>
    </div>
  );
};