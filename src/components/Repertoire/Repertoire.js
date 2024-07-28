import React from "react";
import styles from "./Repertoire.module.css";
import Track from "../Track/Track";

function repertoire(props) {
  return (
    <div className={styles.header}>
      <h2>Repertoire</h2>
      <div>
        {props.repertoire.length === 0 ? (
          <p>Your repertoire is empty. Click on a song to add it.</p>
        ) : (
          props.repertoire.map((song) => (
            <Track song={song} action={props.action} />
          ))
        )}
      </div>
    </div>
  );
}

export default repertoire;
