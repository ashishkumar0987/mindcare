import React, { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";  // Added serverTimestamp
import { auth, db } from "../components/firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [loading, setLoading] = useState(false);

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    if (!title || !postText.trim()) {
      alert("Title aur Post dono fill karo!");
      return;
    }

    // Extra check: Ensure user is authenticated
    if (!auth.currentUser ) {
      alert("You must be logged in to create a post!");
      navigate("/login");
      return;
    }

    setLoading(true);
    try {
      await addDoc(postsCollectionRef, {
        title,
        postText,
        author: { 
          name: auth.currentUser .displayName || "Anonymous",
          id: auth.currentUser .uid  // This matches your existing structure
        },
        createdAt: serverTimestamp(),  // Server-side timestamp for proper sorting
      });
      
      console.log("Post saved to Firestore!");
      
      // Clear form
      setTitle("");
      setPostText("");
      
      alert("Post created successfully! Redirecting to blogs...");
      navigate("/blogs");
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle specific errors
      if (error.code === 'permission-denied') {
        alert("Permission denied. Please log in again.");
        navigate("/login");
      } else {
        alert("Post create nahi hua. Error: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <form onSubmit={(e) => { e.preventDefault(); createPost(); }}>
          <div className="inputGp">
            <label>Title:</label>
            <input
              placeholder="Title... (e.g., Ashish)"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="inputGp">
            <label>Post:</label>
            <textarea
              placeholder="Post... (e.g., ...)"
              value={postText}
              onChange={(event) => setPostText(event.target.value)}
              rows={5}
              required
              disabled={loading}
            />
          </div>
          <button type="submit" disabled={loading || !auth.currentUser }>
            {loading ? "Creating..." : "Submit Post"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
