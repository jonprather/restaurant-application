import React from 'react';
// https://tylermcginnis.com/react-router-url-parameters/   example
// class Profile extends React.Component {
//   state = {
//     user: null
//   }
//   componentDidMount () {
//     const { handle } = this.props.match.params

//     fetch(`https://api.twitter.com/user/${handle}`)
//       .then((user) => {
//         this.setState(() => ({ user }))
//       })
//   }
//   render() {
//     ...
//   }
// }
//  so we can use the logic up here to make an api call to the server with the handle from the url
// so the api call will fill in the blank for reuable items
const MenuItem = ({ match }) => (
  <div>
    <h3>{match.params.handle}</h3>
    <div className = "item__description">
    Filler text to be replaced by an api call to the db which will return the menu item details
    </div> 
    
  </div>
)
export default MenuItem;