import { useState } from "react"

import { useHistory } from "react-router"


export default function AddReview() {

    const API_URL = 'http://localhost:8000/albums';

    const initialFormState = {
        title: '',
        artist_name: '',
        release_year: ''
    }

    const history = useHistory();

    const [values, setValues] = useState(initialFormState)

    function handleChange(event) {
        setValues({ ...values, [event.target.id]: event.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.status === 201) {
                // history.push('/');
                setValues(initialFormState)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="add-form">
            <div className="addContainer">
                <label htmlFor="title">Title</label>
                <input type="text" required id="title" value={values.title} onChange={handleChange}/>
            </div>
            <div className="addContainer">
                <label htmlFor="artist_name">Artist Name</label>
                <input type="text" required id="artist_name" value={values.artist_name} onChange={handleChange}/>
            </div>
            <div className="addContainer">
                <label htmlFor='release_year'>Release Year</label>
                <input type="text" required id='release_year' value={values.release_year} onChange={handleChange}/>
            </div>
            <div className="submit">
            <input type='submit' value='Add Album' />
            </div>
        </form>
    )
}