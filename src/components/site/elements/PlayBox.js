import React, { useState } from "react";
import styles from "./PlayBox.module.scss";
import { Button, Modal } from "react-bootstrap";

function PlayBox({ movie }) {
  const [lgShow, setLgShow] = useState(false);
  return (

    <>
    <Button onClick={() => setLgShow(true)}>نمایش فیلم</Button>
    <Modal
      size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}

      aria-labelledby="example-modal-sizes-title-lg"
    >

      <Modal.Body       className="bg-dark">
      <div className={styles.playBox}>
            <video controls>
              <source src={movie.movieVideoUrl} />
            </video>
          </div>
      </Modal.Body>
    </Modal>
  

    </>
  );
}

export default PlayBox;
