import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">inspire & invest</span>
        <span className="headerTitleLg">FundRise</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/free-vector/people-working-with-technology-isometric-design_52683-14118.jpg?w=996&t=st=1706404954~exp=1706405554~hmac=a72b553f790df14ee535818b943108516cf031fb5f5441525ea9eac2d8605c66"
        alt=""
      />
    </div>
  );
}
