import React, { useState } from "react";

export default function DropDown({ name }) {
    const [rotate, setRotate] = useState(0);

    return (
        <div>
            <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="font-bold flex items-center gap-1 duration-200 text-sm text-primary group hover:text-secondary"
                type="button"
                onClick={() => setRotate(rotate === 0 ? 180 : 0)}
            >
                {name}
                <svg
                    className={`w-3.5 h-3.5 ms-3 duration-200 group-hover:text-secondary ${rotate ? "rotate-180 text-secondary" : "rotate-0"}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            <div
                id="dropdown"
                className="z-50 hidden bg-white shadow-lg divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700"
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                >
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-semibold"
                        >
                            Games
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-semibold"
                        >
                            Hardware
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-semibold"
                        >
                            Merchandise
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-semibold"
                        >
                            Support
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
