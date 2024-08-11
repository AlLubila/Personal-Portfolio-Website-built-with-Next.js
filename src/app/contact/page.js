"use client";

import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GrMailOption } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { RiMessage3Line } from "react-icons/ri";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("form data:", data);
  };

  return (
    <>
      <div className={styles.title}>
        <h1>Have some questions</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate gravida
          penatibus mus; nostra mollis fermentum. <br /> Vulputate gravida
          penatibus mus; nostra mollis fermentum.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.contact_illustration}>
            <Image src="/Hands_phone.png" alt="" fill />
          </div>
          <h1>Get in touch</h1>
          <div className={styles.contactInfos}>
            <div>
              <FaPhoneAlt color="white" size="25" />
              <p>+12 111-111-111 </p>
            </div>
            <div>
              <MdEmail color="white" size="25" />
              <p>hello@gmail.com</p>
            </div>
            <div>
              <IoLocationSharp color="white" size="25" />
              <p>street 12c, London</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <form
            className={styles.formContainer}
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.inputContainer}>
              <CiUser color="white" />
              <input
                placeholder="Full name*"
                {...register("fullName", { required: "Full Name is required" })}
              />
              
            </div>
            {errors.fullName && <p style={{color:'red', fontSize: 13}}>{errors.fullName.message}</p>}
            <div className={styles.inputContainer}>
              <FiPhoneCall color="white" />
              <input
                placeholder="Phone*"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9+\-\s]+$/i,
                    message: "Invalid phone number",
                  },
                })}
              />
              
            </div>
            {errors.phoneNumber && <p style={{color:'red', fontSize: 13}}>{errors.phoneNumber.message}</p>}
            <div className={styles.inputContainer}>
              <GrMailOption color="white" />
              <input
                placeholder="Mail*"
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              
            </div>
            {errors.email && <p style={{color:'red', fontSize:13}}>{errors.email.message}</p>}
            <div className={styles.inputContainer}>
              <RiMessage3Line color="white" className={styles.messageIcon} />
              <textarea
                rows={10}
                placeholder="Message*"
                {...register("message", { required: "Message is required" })}
              />
              
            </div>
            {errors.message && <p style={{color:'red', fontSize: 13}}>{errors.message.message}</p>}
            <button type="submit" className={styles.formBtn}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
