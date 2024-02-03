import React, { useState } from 'react';

function AddImg() {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = () => {
        setImage(null);
    };

    return (
        <div className="note absolute border p-2 rounded-md bg-white z-40 ">
            {image && (
                <div className="image-container">
                    <img src={image}  alt="Uploaded" />
                    <button onClick={handleDeleteImage}>Delete Image</button>
                </div>
            )}
            {!image && (
                <div className="upload-container">
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <p>Upload an image</p>
                </div>
            )}
        </div>
    );
}

export default AddImg;
