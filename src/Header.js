import React from "react";
function Header(props) {
  return (
    <header className="text-center">
      <h1 className="bg-slate-500 text-white ">{props.title}</h1>
    </header>
  );
}
Header.defaultProps = {
  title: "TODO LIST TITLE",
};
export default Header;
