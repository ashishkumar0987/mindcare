import React from "react";
import { Link } from "react-router-dom";

const Blogs = ({ isAuth }) => {
  return (
    <>
      {/* CSS ISKE ANDAR HAI - DIRECT COPY PASTE KAREIN */}
      <style>{`
        .blogs-container {
          max-width: 900px;
          margin: 50px auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }

        .blogs-header {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 40px;
        }

        .create-blog-btn {
          display: block;
          width: 200px;
          margin: 0 auto 40px auto;
          padding: 12px;
          background-color: #4CAF50; /* Green for mental health positivity */
          color: white;
          text-align: center;
          text-decoration: none;
          border-radius: 25px;
          font-weight: bold;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: background-color 0.3s;
        }

        .create-blog-btn:hover {
          background-color: #45a049;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .blog-card {
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          background-color: #fff;
          transition: transform 0.2s;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .blog-content {
          padding: 20px;
        }

        .blog-title {
          font-size: 1.2rem;
          margin: 0 0 10px 0;
          color: #2c3e50;
        }

        .blog-text {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-author {
          margin-top: 15px;
          font-size: 0.85rem;
          color: #888;
          font-style: italic;
        }
      `}</style>

      <div className="blogs-container">
        <h1 className="blogs-header">Mind Care Community Blogs</h1>

        {/* Agar User Login hai to ye button dikhega */}
        {isAuth && (
          <Link to="/createpost" className="create-blog-btn">
            + Write a Blog
          </Link>
        )}

        <div className="blog-grid">
          {/* Dummy Blog Post 1 */}
          <div className="blog-card">
            <div className="blog-content">
              <h3 className="blog-title">5 Ways to Calm Anxiety Quickly</h3>
              <p className="blog-text">
                Anxiety can hit us at any moment. Here are some simple breathing techniques and grounding exercises that can help you find your center instantly...
              </p>
              <div className="blog-author">By Dr. Smith</div>
            </div>
          </div>

          {/* Dummy Blog Post 2 */}
          <div className="blog-card">
            <div className="blog-content">
              <h3 className="blog-title">My Journey with Depression</h3>
              <p className="blog-text">
                Sharing my personal story wasn't easy, but I hope it helps others know they are not alone. Recovery is a road, not a destination...
              </p>
              <div className="blog-author">By Sarah J.</div>
            </div>
          </div>

          {/* Dummy Blog Post 3 */}
          <div className="blog-card">
            <div className="blog-content">
              <h3 className="blog-title">The Importance of Sleep</h3>
              <p className="blog-text">
                Did you know that lack of sleep can directly impact your mood? Learn how to create a bedtime routine that works for you.
              </p>
              <div className="blog-author">By Mind Care Team</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;