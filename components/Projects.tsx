"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "TicTacToe",
    description: "It is a simple tic-tac-toe",
    image: "/TicTacToe.png",
    github: "https://github.com/aabhasxgurung/JS/tree/master/TicTacToe",
  },
  {
    name: "ToDo App",
    description: "It is a web application for todo tasks",
    image: "/Todo.png",
    github: "https://github.com/aabhasxgurung/JS/tree/master/Todo",
  },
  {
    name: "Portfolio",
    description: "It is a portfolio",
    image: "/portfolio.png",
    github: "https://github.com/aabhasxgurung/portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl ">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <Link href={project.github} target="_blank">
                    {" "}
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div
                  className="mt-12 md:w1/2 flex flex-col justify-center items-center md:items-start"
                  id="project"
                >
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
