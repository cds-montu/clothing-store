import React, { useState } from "react";
import axios from "axios";

const ProductBulkUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/api/products/bulk-upload", formData);
      alert("✅ Bulk upload successful!");
    } catch (err) {
      alert("❌ Bulk upload failed");
    }
  };

  return (
    <div>
      <h3 style={{ marginBottom: "15px" }}>📁 Bulk Upload via CSV</h3>
      <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} style={{ ...styles.button, marginLeft: "10px" }}>
        Upload
      </button>
    </div>
  );
};

const styles = {
  button: {
    padding: "10px 16px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ProductBulkUpload;
