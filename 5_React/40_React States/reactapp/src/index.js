import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
// import userImage from './images/him.jpeg';

// class App extends React.Component {
//   state = {
//     count: 0,
//   }

//   render() {
//     const count = this.state.count

//     return (
//       <div>
//         <h1>{ count }</h1>
//         <button 
//           onClick={() => this.setState({ count: this.state.count + 1 })} >
//           Plus One
//         </button>
//         <button 
//           onClick={() => this.setState({ count: this.state.count - 1 })} >
//           Minus One
//         </button>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     count: 0,
//   }

//   // method for plus one
//   plusOne = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   //method for minus one
//   minusOne = () => {
//     this.setState({ count: this.state.count - 1 })
//   }



//   render() {
//     const count = this.state.count

//     return (
//       <div>
//         <h1>{ count }</h1>
//         <button onClick={this.plusOne} className="btn btn-add">
//           +1
//         </button>
//         {'  '}
//         <button onClick={this.minusOne} className="btn btn-minus">
//           -1
//         </button>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  state = {
    image: 'https://placekitten.com/200/300',
  };

  catUrl = 'https://placekitten.com/200/300';
  dogUrl = 'https://placekitten.com/200/287';

  toggleAnimal = () => {
    this.setState((prevState) => ({
      image: prevState.image === this.catUrl ? this.dogUrl : this.catUrl,
    }));
  };

  render() {
    const { image } = this.state;
    const isCat = image === this.catUrl;
    const altText = isCat ? 'Cat' : 'Dog';

    return (
      <main className="animal-switcher">
        <h1>Cat and Dog Viewer</h1>

        <figure>
          <img src={image} alt={altText} width={200} height={300} />
          <figcaption>Currently showing a {altText.toLowerCase()}</figcaption>
        </figure>

        <button onClick={this.toggleAnimal} className="btn btn-toggle">
          Show {isCat ? 'Dog' : 'Cat'}
        </button>
      </main>
    );
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
