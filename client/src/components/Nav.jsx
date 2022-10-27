import { Link } from "react-router-dom"

const Nav = (props) => {
  console.log(props.isLoggedIn)
  return(
    <nav className ="navbar">
      <div className ="navcontainer">
        <Link to="/" className='navlink'>Reviews</Link>
        <Link to="/write-review" className='navlink'>Write Review</Link>
        {props.isLoggedIn ? (<div>Hello {props.firstName}, You are logged in</div>) 
        :  (<div>
              <Link to="/users" className='navlink'>Sign Up</Link>
            </div>)}
      </div>
    </nav>
  )
}

export default Nav