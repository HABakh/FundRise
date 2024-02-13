import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              CULTURAL
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              ENTREPRENEURIAL
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          Ethical Considerations in Autonomous Vehicles: Navigating the Moral Landscape of AI Decision-Making
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Explore algorithmic decision-making, ethical frameworks, legal aspects, human-AI collaboration, bias mitigation, public perception, and case studies to provide a comprehensive understanding of the ethical challenges in autonomous vehicles.
      </p>
    </div>
  );
}
