import { MdArrowDropDown } from "react-icons/md";
import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://img.freepik.com/premium-vector/isometric-concept-idea-business-meeting-brainstorming-start-up-team-meeting-creative-teamwork_589019-4547.jpg?w=900"
        alt=""
      />
      <form className="writeForm" style={{ padding: "5px 50px 5px 100px" }} >
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="box">
            <select id="dropdown" style={{"border-radius":"20px"}}>
            <option value="Cultural">Cultural</option>
            <option value="Entrepreneurial">Entrepreneurial</option>
            <option value="Social">Social</option>
            <option value="Environmental">Environmental</option>
          </select>
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Details of your project..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
       
      </form>
    </div>
  );
}
