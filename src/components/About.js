import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

// *** after ***
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor called");
  }
  async componentDidMount() {
    // console.log("Parent Did Mount called");
    // as the name suggests this will be called after the component is full mounted
    // the child did mount and everything will be called first this will be called only after the parent component has full mounted/loaded
    // do remember that first the constructor is called and then render and then DidMount
    // didMount is used to make API calls -> why? (basic principle -> Loads > Render > API-call > Render)
  }

  render() {
    // console.log("Parent Render called");
    return (
      <div>
        <h1 className="font-bold text-4xl">About Class Component</h1>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-lg font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is React Tutorial</h2>
        <UserClass name={"Subin Kumar (class)"} location={"Ranchi"} />
        {/* <UserClass name={"Elon Musk (class)"} location={"US"} /> */}
      </div>
    );
  }
}
// In case of two instance of child component is used (or multiple children comp)
// Parent Constructor called
// Parent Render called
//     -Subin Kumar (class)Child Constructor called
//     -Subin Kumar (class)Child Render called
//     -Elon Musk (class)Child Constructor called
//     -Elon Musk (class)Child Render called
//  Render phase ended and then commit phase starts (to optimize)
//   <DOM> updated --> in single phase
//     -Subin Kumar (class)Child Did Mount called
//     -Elon Musk (class)Child Did Mount called
// Parent Did Mount called

// Read this from react life cycle diagram

// **** before ***
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is React Tutorial</h2>
//             {/* <User name={"Subin Kumar (function)"}/> // We have already used functional comp a lot... */}

//             <UserClass name={"Subin Kumar (class)"} location={"Ranchi"} />
//         </div>
//     );
// };

export default About;
