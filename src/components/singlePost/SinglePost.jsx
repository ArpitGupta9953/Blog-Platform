import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
         The Beautiful View
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Arpit Gupta
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
         There are some views that don’t just please your eyes — they touch your soul, and this was one of them. As I stood there, high above the world, everything felt still. The sky stretched endlessly, painted in strokes of orange, pink, and soft purple, as the sun slowly dipped behind the distant hills. Golden light spilled across the landscape, casting a magical glow over the trees and the gentle ripples of the lake below. The wind was cool, brushing against my skin with a quiet calm, carrying with it the fresh scent of pine and wildflowers. Birds flew lazily across the horizon, their silhouettes adding to the silent poetry of the moment. Far in the distance, the mountains stood tall and proud, their peaks kissed by the last rays of sunlight. It felt like nature was whispering — not loudly, but softly, as if sharing a secret with those who stood still enough to listen. For a while, everything else faded away — no noise, no stress, no rush. Just the breathtaking beauty of the world, reminding me how peaceful and alive the earth can feel when we simply pause to see it.
          <br />
          <br />
         The view before me was like a living painting, calm and untouched. A gentle river flowed through the valley, its surface smooth and clear, reflecting the soft colors of the sky like a mirror. Tall trees stood on either side, their leaves rustling quietly in the breeze, as if whispering stories to one another. Birds chirped in the distance, their songs blending perfectly with the silence of the scene. A few white clouds drifted lazily overhead, and the sunlight filtered through them, casting golden patches of light on the grassy hills. The whole place felt still — not empty, but peacefully alive. It was the kind of view that made you forget about your phone, your schedule, and everything else. It made you breathe a little deeper, smile without reason, and feel grateful just to be there, watching something so simple yet so perfect.
        </p>
      </div>
    </div>
  );
}
