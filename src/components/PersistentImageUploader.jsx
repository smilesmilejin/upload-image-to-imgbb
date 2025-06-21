import React, { useState, useEffect } from "react";

export default function PersistentImageUploader() {
  // Store array of { name, base64 } images
  const [images, setImages] = useState([]);

  // Load images from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("uploadedImages");
    if (saved) {
      setImages(JSON.parse(saved));
    }
  }, []);

  // Save images array to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("uploadedImages", JSON.stringify(images));
  }, [images]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setImages((prev) => [...prev, { name: file.name, base64 }]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2>Upload Images - Persisted in localStorage</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />

      <div style={{ marginTop: 20 }}>
        {images.length === 0 && <p>No images uploaded yet.</p>}
        {images.map(({ name, base64 }, idx) => (
          <div key={idx} style={{ marginBottom: 20 }}>
            <p>
              <strong>{name}</strong>
            </p>
            <img
              src={base64}
              alt={name}
              style={{ maxWidth: "300px", border: "1px solid #ccc" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}