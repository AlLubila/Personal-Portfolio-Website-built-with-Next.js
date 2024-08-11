"use client";

import React, { useState } from "react";
import styles from "./project.module.css";
import Image from "next/image";
import Modal from "../components/modal/Modal";

export default function Project() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "TITLE1",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate gravida penatibus mus; nostra mollis fermentum",
      detail:
        "Phasellus quis porta dolor. Maecenas tincidunt dui augue. Morbi sit amet nisi ac tortor dapibus pharetra. Vivamus vel posuere tellus. Nulla tincidunt sapien quis tellus imperdiet varius. Quisque rutrum accumsan ex, eget imperdiet ipsum commodo eget. Nunc odio nulla, pulvinar non metus id, accumsan lacinia justo. Nullam at lacinia risus, eu accumsan tellus. Phasellus rutrum sem faucibus orci placerat pretium. Curabitur efficitur tristique risus ac aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis mattis quam ac nisl vestibulum dictum. Pellentesque accumsan varius risus eu ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis sapien ac mauris ornare accumsan. Pellentesque ultricies mollis diam eget pulvinar.",
      src: "/projectPic.jpg",
      id: 1,
    },
    {
      title: "TITLE2",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate gravida penatibus mus; nostra mollis fermentum",
        detail:
        "Phasellus quis porta dolor. Maecenas tincidunt dui augue. Morbi sit amet nisi ac tortor dapibus pharetra. Vivamus vel posuere tellus. Nulla tincidunt sapien quis tellus imperdiet varius. Quisque rutrum accumsan ex, eget imperdiet ipsum commodo eget. Nunc odio nulla, pulvinar non metus id, accumsan lacinia justo. Nullam at lacinia risus, eu accumsan tellus. Phasellus rutrum sem faucibus orci placerat pretium. Curabitur efficitur tristique risus ac aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis mattis quam ac nisl vestibulum dictum. Pellentesque accumsan varius risus eu ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis sapien ac mauris ornare accumsan. Pellentesque ultricies mollis diam eget pulvinar.",
      src: "/projectPic.jpg",
      id: 2,
    },
    {
      title: "TITLE3",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate gravida penatibus mus; nostra mollis fermentum",
        detail:
        "Phasellus quis porta dolor. Maecenas tincidunt dui augue. Morbi sit amet nisi ac tortor dapibus pharetra. Vivamus vel posuere tellus. Nulla tincidunt sapien quis tellus imperdiet varius. Quisque rutrum accumsan ex, eget imperdiet ipsum commodo eget. Nunc odio nulla, pulvinar non metus id, accumsan lacinia justo. Nullam at lacinia risus, eu accumsan tellus. Phasellus rutrum sem faucibus orci placerat pretium. Curabitur efficitur tristique risus ac aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis mattis quam ac nisl vestibulum dictum. Pellentesque accumsan varius risus eu ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis sapien ac mauris ornare accumsan. Pellentesque ultricies mollis diam eget pulvinar.",
      src: "/projectPic.jpg",
      id: 3,
    },
  ];

  const handleModal = (id) => {
    setSelectedProject(id);
    setOpen(true);
  };

  return (
    <>
      <div className={styles.projectContainer}>
        <h1>Projects</h1>
        <div className={styles.container}>
          <div className={styles.projects}>
            {projects.map((project) => (
              <div
                className={styles.project}
                onClick={() => handleModal(project.id)}
              >
                <Image
                  className={styles.projectImg}
                  src={project.src}
                  alt=""
                  width={1000}
                  height={1000}
                />
                <div className={styles.text}>
                  <h1>{project.title}</h1>
                  <p>{project.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Modal
          project={projects.find((p) => p.id === selectedProject)}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </>
  );
}
