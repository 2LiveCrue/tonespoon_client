import { useEffect, useState } from "react";
import AddAlbum from "../Add/AddAlbum";

const Edit = ({ id, getAlbums }) => {
  const API_URL = `http://localhost:8000/albums`;
  const [values, setValues] = useState({
    title: "",
    artist_name: "",
    release_year: "",
  });

  const getAlbum = async () => {
    try {
      const album = await fetch(`${API_URL}/${id}`);
      const data = await album.json();
      setValues({
        title: data.title,
        artist_name: data.artist_name,
        release_year: data.release_year,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAlbum();
  }, []);

  const updateAlbum = async (e, values) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        // history.push(`/`);
        getAlbums();
      } else {
        alert("Something went wrong. Please try again");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AddAlbum
      handleSubmit={updateAlbum}
      values={values}
      setValues={setValues}
      type="Update"
    />
  );
};

export default Edit;
