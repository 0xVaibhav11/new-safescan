"use client";
import styles from "./Card.module.scss";
// import "./page.css";
import { useState } from "react";
export default function Card() {
  const [addres, setaddres] = useState<string>(
    " 0x645d85678c2d4c56c17f3579a278c2be2d73119c"
  );

  const [copy, setCopy] = useState<Boolean>(false);
  //address copy to clipboard
  const handleAdresCopy = () => {
    navigator.clipboard.writeText(addres);
    setCopy(true);
    alert(`"copied" ${addres} `);
  };

  const handleEnsCopy = () => {
    navigator.clipboard.writeText(addres);
    setCopy(true);
    alert(`"copied" ${addres} `);
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <div className={styles.text}>hover me</div>
          </div>

          <div className={styles.content}>
            <h3>
              {" "}
              <p style={{ fontSize: "20px", color: "#707070	" }}>Address</p>
              {addres}{" "}
              {
                // <IconButton onClick={handleAdresCopy}>
                //   <ContentCopyIcon />
                // </IconButton>
              }
            </h3>
          </div>
          <div className={styles.content}>
            <h3>Hash</h3>
            <p>
              0x596104426ff8fd56e0488099cfe1829b45aaab323af1ef9cf8d610cae7af57ac
            </p>
          </div>
          <div className={styles.content}>
            <h3>ENS</h3>
            <p>vetalick.eth</p>
          </div>
        </div>
      </div>
    </>
  );
}
