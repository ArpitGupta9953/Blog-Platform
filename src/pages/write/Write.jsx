import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./write.css";

export default function Write({ onAddPost }) {
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      toast.error("❌ Please fill in both title and content", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

  
    const newPost = {
      id: Date.now(),
      title: formData.title,
      content: formData.content,
      date: "Just now",
      image: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    };

   
    if (onAddPost) {
      onAddPost(newPost);
    }

    setFormData({ title: "", content: "" });
    navigate("/");
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            type="text"
            autoFocus={true}
            required
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Tell your story..."
            required
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
