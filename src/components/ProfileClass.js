import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userInfo:{
        name: "Prasad",
        email: "pmapasarkar10@gmail.com",
      },
    };
    
  }
 async componentDidMount(){
  // API call
   
  }
  render(props) {
    

    const {count} =this.state
    return (
      <div className="">
        <h1 className="font-semibold">Developer Info</h1>
        <h3>Name: {this.state.userInfo.name}</h3>
        <h3>Email Address: {this.state.userInfo.email}</h3>
      </div>
    );
  }
}

export default ProfileClass;
