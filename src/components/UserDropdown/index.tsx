import { useState, useRef, useEffect, useMemo } from "react";

import { useNavigate } from "react-router-dom";

import { getUsername, logoutUser } from "../../utils/auth";

import IconUser from "../../assets/user.svg";
import IconArrow from "../../assets/arrow.svg";

export const UserDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const userName = useMemo(() => getUsername(), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="relative flex items-center space-x-4" ref={dropdownRef}>
      <div
        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded-lg p-2"
        onClick={toggleDropdown}
        role="button"
        onKeyDown={(e) => e.key === "Enter" && toggleDropdown()}
      >
        <img
          src={IconUser}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-gray-200"
        />
        <span className="text-gray-800 font-semibold ml-2">{userName}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isDropdownOpen && (
        <div
          className="absolute right-0 top-14 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
          role="menu"
        >
          <div className="px-4 py-2 text-sm text-gray-700 border-b">
            {userName}
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700"
            role="menuitem"
          >
            <span className="flex items-center">
              Cerrar Sesión
              <img
                src={IconArrow}
                alt="Arrow Icon"
                className="w-4 h-4 ml-auto"
              />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};
