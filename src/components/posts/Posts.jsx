import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts = [] }) {

  const defaultPosts = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Getting Started with React",
      content: "Learn the fundamentals of React development and build amazing user interfaces. This comprehensive guide covers everything you need to know about components, state, and props.",
      date: "2 days ago",
      categories: ["Tech", "React"]
    },
 
    {
      id: 2,
      image: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Life Balance Tips",
      content: "Discover effective strategies for maintaining work-life balance in today's fast-paced world. Tips for productivity and mental wellness.",
      date: "5 days ago",
      categories: ["Life", "Wellness"]
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Music Production Basics",
      content: "Start your journey into music production with these essential tips and tools. From recording to mixing, learn the fundamentals.",
      date: "1 week ago",
      categories: ["Music", "Production"]
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Sports Psychology",
      content: "Mental preparation techniques used by professional athletes. Learn how to develop focus, confidence, and peak performance mindset.",
      date: "1 week ago",
      categories: ["Sport", "Psychology"]
    },
       {
      id: 5,
      image: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Modern CSS Techniques",
      content: "Explore the latest CSS features including Grid, Flexbox, and custom properties. Master responsive design and create beautiful layouts.",
      date: "3 days ago",
      categories: ["Style", "CSS"]
    },
   
  ];


  const allPosts = [...posts, ...defaultPosts];

  return (
    <div className="posts">
      {allPosts.length > 0 ? (
        allPosts.map(post => (
          <Post 
            key={post.id}
            img={post.image}
            title={post.title}
            description={post.content}
            date={post.date}
            categories={post.categories || ["General"]}
            postId={post.id}
          />
        ))
      ) : (
        <div className="noPosts">
          <p>No posts available. Start writing your first post!</p>
        </div>
      )}
    </div>
  );
}
