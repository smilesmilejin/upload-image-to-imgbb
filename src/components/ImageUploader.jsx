import { useState } from "react";

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // const API_KEY = "5c0ba91af9d4b25e84eeeafa2ef27ab6"; // Replace with your ImGBB API key
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = import.meta.env.VITE_API_KEY;
  // console.log(API_KEY);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadedUrl("");
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("key", API_KEY);
    formData.append("image", selectedFile);

    try {
      const response = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setUploadedUrl(data.data.display_url);
      } else {
        alert("Upload failed: " + JSON.stringify(data));
      }
    } catch (error) {
      alert("Error uploading: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload to ImGBB"}
      </button>

      {uploadedUrl && (
        <div style={{ marginTop: 20 }}>
          <p>Uploaded Image URL:</p>
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
            {uploadedUrl}
          </a>
          <br />
          <img src={uploadedUrl} alt="Uploaded" style={{ maxWidth: "300px" }} />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;