/* This example requires Tailwind CSS v2.0+ */
import React from 'react'

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <img
              className="h-8 w-auto sm:h-10"
              src="/movie.png"
              alt=""
            />
          </a>
        </div>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="/sign_in" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            Sign in
          </a>
          <a
            href="/sign_up"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  )
}
