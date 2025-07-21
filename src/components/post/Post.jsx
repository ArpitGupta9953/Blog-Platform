import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img, categories = [], title, date, description, postId }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt={title || "Blog post"}
      />
      <div className="postInfo">
        <div className="postCats">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <span className="postCat" key={index}>
                <Link className="link" to={`/posts?cat=${category}`}>
                  {category}
                </Link>
              </span>
            ))
          ) : (
            <>
              <span className="postCat">
                <Link className="link" to="/posts?cat=Music">
                  Music
                </Link>
              </span>
              <span className="postCat">
                <Link className="link" to="/posts?cat=Life">
                  Life
                </Link>
              </span>
            </>
          )}
        </div>
        <span className="postTitle">
          <Link to={`/post/${postId || 'abc'}`} className="link">
            {title || "Beatiful View"}
          </Link>
        </span>
        <hr />
        <span className="postDate">{date || "1 hour ago"}</span>
      </div>
      <p className="postDesc">
        {description || 
          "As I stood at the edge of the cliff, a breathtaking view unfolded before me — golden rays of the setting sun spilled across the sky, blending into hues of orange, pink, and purple. The calm river below sparkled like liquid glass, gently winding its way through the lush green valleys. Far in the distance, snow-capped mountains stood tall and silent, watching over the peaceful landscape. The cool breeze carried the scent of wildflowers, and the moment felt like a perfect painting come to life. It was a view that filled the heart with peace and the soul with wonder."
        }
      </p>
    </div>
  );
}
