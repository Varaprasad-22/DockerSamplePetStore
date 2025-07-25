import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './addItem.css';

const AddItem = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
            setPreview(reader.result);
        };
        if (file) reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) {
            alert("Image is required!");
            return;
        }
        try {
            const formData = {
                name,
                price,
                description,
                image
            };
            const res = await axios.post('/pets/addItems', formData);
            console.log("Data Submitted Successfully", res.data);

            // Reset all fields
            setName("");
            setPrice("");
            setDescription("");
            setImage(null);
            setPreview(null);
            window.alert("Data Submitted Successfully");
        } catch (err) {
            console.error("Error submitting data:", err);
        }
    };

    useEffect(() => {
        setName("");
        setPrice("");
        setDescription("");
        setImage(null);
        setPreview(null);
    }, []);

    return (
        <div className="addItem_container">
            <div className="heading">
                <h2>Submit Data</h2>
                <h4>Submit Your Pet Details here</h4>
            </div>
            <hr />
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows={5} value={description} onChange={(e) => setDescription(e.target.value)} required />

                    <label htmlFor="image">Upload Image</label>
                    {!preview && (
                        <input type="file" id="image" accept="image/*" onChange={handleImageChange} required />
                    )}
                    {preview && (
                        <img src={preview} alt="Preview" className="preview" style={{ width: "30px", height: "50px", margin: "auto" }} />
                    )}

                    <p>Do You Agree to Our Terms And Conditions?</p>
                    <div className="checkboxes">
                        <input type="radio" id="agree" name="terms" required />
                        <label htmlFor="agree">Yes</label><br />
                        <input type="radio" id="not" name="terms" />
                        <label htmlFor="not">No</label><br />
                    </div>

                    <button type="submit" className="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;
