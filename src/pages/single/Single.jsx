import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import Post from "../../components/post/Post";

import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      
      <Sidebar />
    </div>
  );
}
