class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }
  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can see now!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));


// let visibility = false;
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// }

// const appRoot = document.getElementById("app");

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>{visibility ? "Hide details" : "Show Details"}</button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can see now!</p>
//         </div>
//       )}
//     </div>
//   )
//   ReactDOM.render(template, appRoot);
// }
// render();
