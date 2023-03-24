import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className="flex flex-row p-2 justify-center bg-black font-bold text-white md:text-xl ">
      <img
        src="/logo.svg"
        alt="logo"
        className="h-10 w-10 md:h-20 md:w-20 md:mr-20"
      />
      <div className="flex flex-row">
        <Link to="/" className="my-auto px-2">
          Reviews
        </Link>
        <Link to="/subways" className="my-auto px-2">
          Lines
        </Link>
        <Link to="/add-subway" className="my-auto px-2">
          Add Line
        </Link>
        <Link to="/write-review" className="my-auto px-2">
          Write Review
        </Link>
        {props.isLoggedIn ? (
          <div>Hello {props.firstName}, You are logged in</div>
        ) : (
          <div className="flex flex-row">
            <Link to="/users" className="my-auto ">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
