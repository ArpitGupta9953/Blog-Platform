import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerContent">
        <div className="headerTitles">
          <span className="headerTitleSm">Welcome to My</span>
          <span className="headerTitleLg">BLOG</span>
          <span className="headerSubtitle">Discover stories, thinking, and expertise from writers on any topic.</span>
        </div>
        <div className="headerOverlay"></div>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Blog header background"
      />
    </div>
  );
}
