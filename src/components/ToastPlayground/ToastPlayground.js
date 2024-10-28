import React from "react";

import Button from "../Button";

import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  // create state for message textarea
  const [message, setMessage] = React.useState("");
  // create state for variant radiobuttons
  const [variantType, setVariantType] = React.useState(VARIANT_OPTIONS[0]);
  // create state to hold toast instances
  const [toastArray, setToastArray] = React.useState([]);

  // remove toast from toastArray
  const dismissToast = (toastId) => {
    const newToastArray = toastArray.filter((toast) => toast.id !== toastId);
    setToastArray(newToastArray);
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastArray={toastArray} dismissToast={dismissToast} />

      {/**
       * Message textarea content here
       */}
      <form
        className={styles.controlsWrapper}
        onSubmit={(event) => {
          event.preventDefault();
          const newToast = { message, variantType, id: crypto.randomUUID() };
          setToastArray((currentValue) => [...currentValue, newToast]);
          setMessage("");
          setVariantType(VARIANT_OPTIONS[0]);
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              required={true}
            />
          </div>
        </div>

        {/**
         * Variant radiobutton content here
         */}
        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <div key={variant}>
                <label htmlFor={`variant-${variant}`}>
                  <input
                    type="radio"
                    name="variant"
                    id={`variant-${variant}`}
                    value={variant}
                    checked={variant === variantType}
                    onChange={(event) => {
                      setVariantType(event.target.value);
                    }}
                    required={true}
                  />
                  {variant}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
