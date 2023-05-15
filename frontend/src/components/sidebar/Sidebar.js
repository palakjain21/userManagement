import React, { useState } from "react";

export default function Sidebar() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    console.log("Menu clicked");
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-col w-96 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            src="https://avatars.githubusercontent.com/u/8186664?v=4"
            alt="Admin"
            className="object-cover w-24 h-24 mx-2 rounded-full"
          />
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
            Admin
          </h4>
          <div className="flex flex-col w-full mt-8 mb-6">
            <div
              className="flex items-center mt-4 py-2 px-6 bg-gray-200 bg-opacity-25 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
              onClick={handleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>

              <span className="mx-3">User Management</span>
              <span className="mr-28"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          {menu ? (
            <div className="flex flex-col w-full">
              <a
                href="/table"
                className="flex items-center -mt-6 py-2 px-6 bg-gray-200 bg-opacity-25 text-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray-200 dark:active:bg-gray-600 dark:active:text-gray-200 dark:focus:bg-gray-600 dark:focus:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>

                <span className="mx-3">User Grid</span>
              </a>
              <a
                href="/"
                className="flex items-center py-2 px-6 bg-gray-200 bg-opacity-25 text-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray-200 dark:active:bg-gray-600 dark:active:text-gray-200 dark:focus:bg-gray-600 dark:focus:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>

                <span className="mx-3">Add User</span>
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
