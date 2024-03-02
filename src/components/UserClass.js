import React from "react";

// This is how we create Class Based Component 
// and how we get props inside it (using constructor) and to call the prop we use this.props keyword

class UserClass extends React.Component {
    constructor(props){
        super(props);
        // console.log(props);

        // State Variable in Class Based Component (this.state ->object)
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                // avatar_url: "http://dummy-photo",
            },
            // count: 0,
            // count2: 1,
        };

        // console.log(this.props.name + "Child Constructor called");
    }

    async componentDidMount(){
        // console.log(this.props.name + "Child Did Mount called");

        const data = await fetch("https://api.github.com/users/isubinkr");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){
        // console.log("Component Did Update called");
        // this gets triggered after the components gets updated by api
    }

    componentWillUnmount(){
        // console.log("Component Will Unmount called");
        // this is called when the component disappers from the page like when we go to other page{home, contact us}
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        // const { name, location } = this.props;
        // const { count } = this.state;
        // console.log(this.props.name + "Child Render called");
        return (
            <div className="user-card">
                {/* <h1>Count: {count}</h1> */}
                {/* <h1>Count2: {count2}</h1> */}
                {/* <h1>Count2: {this.state.count2}</h1>       // this is without destructuring
                <h1>Count: {this.state.count}</h1>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3> */}

                {/* <button onClick={() => {
                    // this.state.count++; -> Never update state variables directly we never did this in functional component as well
                    this.setState({
                        count: this.state.count + 1, //this is an object
                        // count2: this.state.count2 +1,
                        // react chekcs this and changes the state var (just the ones which should change and leave the other var untouched)
                    })
                    // Same as functional comp. whenever we change the value of state var react rerenders the component
                }}>Count Increase</button> */}
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @isubinkr</h4>
            </div>
        );
    }
}

// const { name, location } = this.props -> this is how we destructure
// const { count } = this.state;  -> destructuring again for state variable

export default UserClass;

/**
 *  --- Mounting ---
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API call>
 *      <this.setState> -> State variable is updated
 * 
 * ---- UPDATE
 * 
 *      render(API Data)
 *      <HTML new API Data>
 *      Component Did Update
 * 
 */