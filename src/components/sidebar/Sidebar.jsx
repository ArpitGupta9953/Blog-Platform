
import { Link } from "react-router-dom";
import blogGirlImage from "../../assets/blog_girl.jpg";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={blogGirlImage}
          alt="Blog author"
          className="sidebarImg"
        />
        <p className="sidebarDesc">
         Hi I'm Kate, I’m the kind of girl who finds joy in little things — a good book, quiet mornings, and long walks with music in my ears. I may not talk much at first, but once I’m comfortable, you’ll see the real me — a little messy, a little dreamy, but always real. I believe in kindness, deep conversations, and chasing what sets my soul on fire.
        </p>
      </div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport 
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">POPULAR POSTS</span>
        <div className="popularPosts">
          <div className="popularPost">
            <span className="popularPostTitle">How to Start a Blog in 2024</span>
            <span className="popularPostDate">2 days ago</span>
          </div>
          <div className="popularPost">
            <span className="popularPostTitle">React Best Practices Guide</span>
            <span className="popularPostDate">1 week ago</span>
          </div>
          <div className="popularPost">
            <span className="popularPostTitle">Modern CSS Techniques</span>
            <span className="popularPostDate">2 weeks ago</span>
          </div>
        </div>
      </div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
        <div className="socialStats">
          <div className="socialStat">
            <span className="statNumber">12.5K</span>
            <span className="statLabel">Followers</span>
          </div>
          <div className="socialStat">
            <span className="statNumber">8.2K</span>
            <span className="statLabel">Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
