import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="transition-all hover:scale-105 duration-300">
      <div className="max-w-sm p-6 z-10 dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-full w-16 h-16 max-w-xs" src={imgUrl} alt="image description" />
        <a href={gitUrl}>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
        <a href={gitUrl} className="inline-flex font-medium items-center text-gray-400 hover:underline">
            github.com
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;