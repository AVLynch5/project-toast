import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastArray, dismissToast }) {
  return (
    <ol className={styles.wrapper}>
      {toastArray.map(({ message, variantType, id }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast id={id} variant={variantType} handleDismiss={dismissToast}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
