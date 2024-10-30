import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const {toastArray} = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toastArray.map(({ message, variantType, id }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast id={id} variant={variantType}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
