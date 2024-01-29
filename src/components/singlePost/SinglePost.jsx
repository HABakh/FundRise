import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://img.freepik.com/premium-vector/modern-flat-design-isometric-concept-data-analysis_122058-796.jpg?w=1060"
          alt=""
        />
        <h1 className="singlePostTitle">
        Ethical Considerations in Autonomous Vehicles: Navigating the Moral Landscape of AI Decision-Making
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
                Hamza BAKHTI
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        As autonomous vehicles become increasingly integrated into our transportation systems, they bring forth a host of ethical dilemmas that demand careful consideration. This AI subject delves into the complex intersection of artificial intelligence, morality, and decision-making in the context of self-driving cars.
The course covers various aspects, including the following:
<br/>
<br/>
1 - Algorithmic Decision-Making: Explore the algorithms and machine learning models used in autonomous vehicles and examine how they make split-second decisions in real-time situations.<br/><br/>
2 - Ethical Frameworks: Introduce students to different ethical frameworks and philosophical perspectives that can be applied to AI decision-making. Discuss consequentialism, deontology, and virtue ethics in the context of autonomous vehicles.<br/><br/>
3 - Legal and Regulatory Landscape: Examine the current and evolving legal and regulatory frameworks governing autonomous vehicles. Discuss challenges in adapting existing laws to the unique ethical challenges posed by AI in transportation.<br/><br/>
4 - Human-AI Collaboration: Explore the potential for human-AI collaboration in decision-making processes within autonomous vehicles. Discuss scenarios where human input may be necessary or desirable to address ethical concerns.<br/><br/>
5 - Bias and Fairness: Investigate the issues of bias in AI systems and how it can impact decision-making in autonomous vehicles. Discuss strategies for identifying and mitigating bias to ensure fair and equitable outcomes.<br/><br/>
6 - Public Perception and Acceptance: Analyze public attitudes towards AI-driven technologies, specifically autonomous vehicles. Discuss strategies for building trust and acceptance among the general population.<br/><br/>
7 - Case Studies: Examine real-world case studies of ethical challenges faced by autonomous vehicles. Analyze how different companies and researchers have addressed these challenges and the lessons learned.<br/><br/>
By the end of the course, students will have a comprehensive understanding of the ethical considerations surrounding autonomous vehicles and be equipped to engage in discussions and decision-making processes related to the responsible development and deployment of AI in the transportation sector.<br/><br/>
        </p>
      </div>
    </div>
  );
}
