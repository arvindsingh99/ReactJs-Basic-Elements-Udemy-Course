import React from 'react';


// Function based Structure

function HelloWorld(props) {
    return (
        <h1>Hello {props.name}</h1>
    )
}
export default HelloWorld;

// Class based Structure

// class HelloWorld extends React.Component{
//     render(){
//       return(
//         <h1>Hello {this.props.name}</h1>
//       )
//     }
//     }

// export default HelloWorld;