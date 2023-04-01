import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Nav = (props) => {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="p-2 md:p-4 flex justify-between items-center">
            <img
              src="/logo.svg"
              alt="logo"
              className="h-10 w-10 md:h-20 md:w-20 md:mr-20"
            />
            <div className="-mr-2 flex md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white hover:text-gray-300 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </Disclosure.Button>
            </div>
            <div className="hidden md:flex flex-row md:justify-center md:items-center">
              {/* These links are always visible on larger screens */}
              {navLinks(props)}
            </div>
          </div>
          <Disclosure.Panel className={`${open ? '' : 'hidden'} md:hidden`}>
            <div className="flex flex-col">
              {/* These links are only visible when the menu is open on smaller screens */}
              {navLinks(props)}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

const navLinks = (props) => {
  return (
    <>
      <Link
        to="/"
        className="my-auto px-2 py-1 md:px-4 text-white font-bold md:text-xl hover:text-gray-300"
      >
        Reviews
      </Link>
      <Link
        to="/subways"
        className="my-auto px-2 py-1 md:px-4 text-white font-bold         md:text-xl hover:text-gray-300"
      >
        Lines
      </Link>
      <Link
        to="/add-subway"
        className="my-auto px-2 py-1 md:px-4 text-white font-bold md:text-xl hover:text-gray-300"
      >
        Add Line
      </Link>
      <Link
        to="/write-review"
        className="my-auto px-2 py-1 md:px-4 text-white font-bold md:text-xl hover:text-gray-300"
      >
        Write Review
      </Link>
      {props.isLoggedIn ? (
        <div className="p-2 my-auto text-white font-bold md:text-xl">
          Hello {props.firstName}, You are logged in
        </div>
      ) : (
        <div className="flex flex-row">
          <Link
            to="/users"
            className="my-auto px-2 py-1 md:px-4 text-white font-bold md:text-xl hover:text-gray-300"
          >
            Sign Up
          </Link>
        </div>
      )}
    </>
  )
}

export default Nav
