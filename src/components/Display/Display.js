import { useState, useEffect } from "react";
import DisplayAlbum from "./DisplayAlbum";

export default function Display(){
    const API_URL='http://localhost:8000/albums';
    const [albumData, setAlbumData] = useState([]);

    const getAlbums = async () => {
        try {
            const res = await fetch (API_URL);
            const data = await res.json();
            setAlbumData(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAlbums();
    }, []);

    return (
        <div className="album-container">
            {albumData.map((album) => {
                return(
                    <DisplayAlbum getAlbums={getAlbums} album={album} />
                )
            })}
        </div>
    )
}