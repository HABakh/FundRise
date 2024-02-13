import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://img.freepik.com/premium-vector/modern-flat-design-isometric-concept-data-analysis_122058-796.jpg?w=1060" />
      <Post img="https://img.freepik.com/free-vector/isometric-gradient-3d-mobile-phone-background_52683-6227.jpg?w=740&t=st=1706404790~exp=1706405390~hmac=9f3b1299c0dfdf30897aff75203c122a206050fa72d0c8e41e4ce21f31309c73" />
      <Post img="https://img.freepik.com/free-vector/online-photography-editor-isometric-concept_52683-33742.jpg?w=740&t=st=1706404866~exp=1706405466~hmac=3041a23709d2d17cf2fa10b033fcb6495cb9215919f37cc38bead153d95ebcdb"/>
      <Post img="https://img.freepik.com/free-vector/programmers-work-isometric-template_1284-25047.jpg?w=740&t=st=1706457873~exp=1706458473~hmac=24ddc877c0c69602745d07916cb6ed458c9fc68a24cd514cd3af28389999ec58"/>
      <Post img="https://img.freepik.com/free-vector/mobile-texting-smartphone-concept_1284-19894.jpg?w=900&t=st=1706404998~exp=1706405598~hmac=2d0857da53d4406940c6f8c89c242f0151f4b617c53d20cacb0ec79805ebf3d6"/>
    </div>
  );
}
