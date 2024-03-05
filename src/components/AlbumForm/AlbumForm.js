import style from "./albumform.module.css";
import { useRef } from "react";

export const AlbumForm = (props) => {
  const albumNameInput = useRef();

  const handleClear = () => (albumNameInput.current.value = "");

  const handleSubmit = (e) => {
    const {onAdd}=props;
    e.preventDefault();
    const albumName = albumNameInput.current.value;
    onAdd(albumName);
    handleClear();
  };

  return (
    
    <div className={style.albumForm}>
      <span>Create an album</span>
      <form onSubmit={handleSubmit}>
        <input required placeholder="Album Name" ref={albumNameInput} />
        <button type="button" onClick={handleClear} disabled={props.loading}>
          Clear
        </button>
        <button disabled={props.loading}>Create</button>
      </form>
    </div>
  );
};
export default AlbumForm;