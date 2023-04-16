import ProfileClass from "./ProfileClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent-constructor: ");
  }

  componentDidMount() {
    console.log("parent-componentDidMount");
  }

  render() {
    console.log("parent-render");

    return (
      <div>
        <h1></h1>
          {({ user }) => (
            <h4 className="font-bold p-10 text-xl">
           
            </h4>
          )}
        {/* <Outlet  />  */}
        <ProfileClass name={"first child"} lastName={"pasarkar"} />
      </div>
    );
  }
}

export default About;
