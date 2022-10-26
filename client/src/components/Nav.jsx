import { Link } from "react-router-dom"

const Nav = (props) => {
  console.log(props.isLoggedIn)
  return(
    <nav className ="navbar">
      <div>
        <Link to="/">Reviews</Link>
        {props.isLoggedIn ? (<div>Hello {props.firstName}.You are logged in</div>) 
        :  (<div>
              <Link to="/users">Sign Up</Link>
              <Link to="/login">Login</Link>
            </div>)}
      </div>
    </nav>
  )
}

export default Nav