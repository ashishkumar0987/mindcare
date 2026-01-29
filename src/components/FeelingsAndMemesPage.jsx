import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp, deleteDoc, doc } from "firebase/firestore";
import { db, auth, checkAuthState } from "./firebase-config";
import ".././App.css";

function FeelingsAndMemesPage() {
  const [userPost, setUserPost] = useState("");
  const [postType, setPostType] = useState("feeling"); // feeling, motivation, experience
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check authentication state
  useEffect(() => {
    const unsubscribe = checkAuthState((user) => {
      setIsAuthenticated(!!user);
      setCurrentUser(user);
    });
    
    return () => unsubscribe();
  }, []);

  // Load posts from Firestore on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, "userPosts");
        const postsQuery = query(postsCollection, orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(postsQuery);
        
        const fetchedPosts = [];
        querySnapshot.forEach((doc) => {
          fetchedPosts.push({ id: doc.id, ...doc.data() });
        });
        
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    if (userPost.trim()) {
      try {
        const newPost = {
          type: postType,
          text: userPost,
          timestamp: serverTimestamp(),
          userId: isAuthenticated ? currentUser.uid : "anonymous",
          userName: isAuthenticated ? currentUser.displayName : "Anonymous User"
        };
        
        // Add document to Firestore
        const docRef = await addDoc(collection(db, "userPosts"), newPost);
        
        // Update local state with the new post (including the document ID)
        setPosts([{ id: docRef.id, ...newPost }, ...posts]);
        setUserPost("");
      } catch (error) {
        console.error("Error adding post:", error);
      }
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      // Check if the user is authenticated and is the author of the post
      const postToDelete = posts.find(post => post.id === postId);
      if (!isAuthenticated || (postToDelete.userId !== currentUser.uid && postToDelete.userId !== "anonymous")) {
        alert("You can only delete your own posts!");
        return;
      }
      
      // Delete document from Firestore
      await deleteDoc(doc(db, "userPosts", postId));
      
      // Update local state to remove the deleted post
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post. Please try again.");
    }
  };

  const getPostIcon = (type) => {
    switch(type) {
      case "feeling": return "💭";
      case "motivation": return "✨";
      case "experience": return "🌱";
      default: return "📝";
    }
  };

  const getPostTitle = (type) => {
    switch(type) {
      case "feeling": return "Feeling";
      case "motivation": return "Motivation";
      case "experience": return "Life Experience";
      default: return "Thought";
    }
  };

  // Check if the current user can delete a specific post
  const canDeletePost = (post) => {
    return isAuthenticated && currentUser && post.userId === currentUser.uid;
  };

  return (
    <div className="FeelingsAndMemesPage">
      <header className="App-header">
        <h1 className="app-title">Share Your Feelings & Experiences</h1>
        <p className="app-subtitle">
          Express yourself, share your journey, and connect with others
        </p>
        
        <div className="post-form-container">
          <form className="post-form" onSubmit={handleSubmitPost}>
            <div className="post-type-selector">
              <label>
                <input 
                  type="radio" 
                  value="feeling" 
                  checked={postType === "feeling"} 
                  onChange={(e) => setPostType(e.target.value)} 
                />
                Feeling
              </label>
              <label>
                <input 
                  type="radio" 
                  value="motivation" 
                  checked={postType === "motivation"} 
                  onChange={(e) => setPostType(e.target.value)} 
                />
                Motivation
              </label>
              <label>
                <input 
                  type="radio" 
                  value="experience" 
                  checked={postType === "experience"} 
                  onChange={(e) => setPostType(e.target.value)} 
                />
                Life Experience
              </label>
            </div>
            
            <textarea
              className="post-input"
              placeholder={`Share your ${postType}...`}
              value={userPost}
              onChange={(e) => setUserPost(e.target.value)}
              rows={4}
            />
            
            <button className="button submit-button" type="submit">
              <h3>Share Post</h3>
            </button>
          </form>
        </div>

        <div className="posts-container">
          <h2 className="posts-title">Community Posts</h2>
          {loading ? (
            <p className="loading-text">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="no-posts">No posts yet. Be the first to share!</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <span className="post-icon">{getPostIcon(post.type)}</span>
                  <span className="post-type">{getPostTitle(post.type)}</span>
                  <span className="post-date">
                    {post.timestamp && post.timestamp.toDate 
                      ? post.timestamp.toDate().toLocaleDateString() 
                      : new Date().toLocaleDateString()
                    }
                  </span>
                </div>
                <div className="post-content">
                  <p>{post.text}</p>
                </div>
                <div className="post-author">
                  <span className="author-label">Posted by: </span>
                  <span className="author-name">{post.userName || "Anonymous"}</span>
                </div>
                <div className="post-actions">
                  {canDeletePost(post) && (
                    <button 
                      className="delete-button" 
                      onClick={() => handleDeletePost(post.id)}
                      title="Delete this post"
                    >
                      🗑️ Delete
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </header>
    </div>
  );
}

export default FeelingsAndMemesPage;