import s from "./Modal.module.css";

export const Modal = ({ children }) => {
  return (
    <>
      <div className={s.backdrop}>
        <div className={s.Modal}>
          {children}
        </div>
      </div>
    </>
  );
};
