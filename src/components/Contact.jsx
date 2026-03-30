/* eslint-disable react-refresh/only-export-components */
import React, { useState, useRef } from 'react'
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  // emailjs keys
  // template_f34moji
  // service_kpxhvkd
  // B9TRMlV35EZuvyQAC

  const handleSubmit = (e) => {
    e.preventDefault()

    // simple validation (don’t let empty ghosts through 👻)
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields")
      return
    }

    setLoading(true)

    emailjs.send(
      "service_21mus8a",
      "template_f34moji",
      {
        from_name: form.name,
        to_name: "Sanyog",
        from_email: form.email,
        to_email: "srajbhandari888@gmail.com",
        message: form.message,
      },
      "B9TRMlV35EZuvyQAC"
    )
      .then(() => {
        setLoading(false)
        alert("Thank you. Will get back to you asap.")

        // reset form properly
        setForm({
          name: "",
          email: "",
          message: ""
        })
      })
      .catch((error) => {
        setLoading(false)
        console.error(error)
        alert("Something went wrong")
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse overflow-hidden w-full'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl w-full'
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <div className='flex max-sm:flex-wrap gap-12'>

            <label className="flex w-full lg:shrink flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <label className="flex w-full lg:shrink flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

          </div>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="3"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl ms-auto'
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >

      </motion.div> */}
    </div>
  )
}

export default SectionWrapper(Contact, "contact")