import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

export default function DisplayAlbum({ album, getAlbums }) {
    const API_URL='http://localhost:8000/albums';

    return (
        <Card
        id={album._id}
        style={{ width: '18rem' }}
        border="dark">
    <Card.Body>
        <Card.Title>{album.title}</Card.Title>
        <Card.Subtitle className='artist'>By: {album.artist_name}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{album.release_year}</Card.Subtitle>
    </Card.Body>
    </Card>
    )
}