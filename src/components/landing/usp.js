"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import planet from '../../assets/planet.png'
import Toast from '../../components/toast'
import { createUser } from './api'

function USP() {
  const [error, setError] = useState({ state: false, key: "", message: "" })
  const [showSuccessMessage, setShowSuccessMessage] = useState({state: false, message: ""})
  const emailElem = useRef()
  
  const submit = () => {
    setError({ state: false, key: "", message: "" })
    const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const emailValid = new RegExp(emailRegEx);
    if (!emailValid.test(emailElem.current.value)) {
      setError({ state: true, key: "email", message: "Please input a valid email" })
      return
    }
    createUser({email: emailElem.current.value})
    .then(res => {
      if (res) {
        setShowSuccessMessage({state: true, message: "Great! Coming with news soon! ❤️"})
      } else {
        setShowSuccessMessage({state: true, message: "We already have you on the list. Coming with news soon! ❤️"})
      }
    })
    emailElem.current.value = ""
    setTimeout(() => {
      setShowSuccessMessage({state: false, message: ""})
    }, 5000)
  }

  return (
    <div className="md:px-40 px-10 md:py-14 py-5 content-center w-screen">
      <div className="lg:grid lg:grid-cols-12 mb-16">
        <div className="col-span-7 text-center md:text-left">
          <div className="text-4xl sm:text-7xl mb-5 ">Borrow & Save.</div>
          <div className="text-4xl sm:text-7xl mb-8">Share & Earn.</div>
          <div className="text-2xl md:mb-16 mb-5 text-orange font-fairy-tale mx-5 md:mx-0">
            Reuse all sorts of things as a part of a global community of people
            advocating for sustainable living and creating a better future for
            our planet and each other!
          </div>
          <p className="mb-5 mt-16 md:mt-0">
            Stay in touch to be the first to use the beta version!
          </p>
          <div className="grid grid-cols-3 gap-2 w-fit mx-auto md:mx-0 sm:w-1/2 md:w-2/3">
            <input
              className="col-span-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-500 leading-tight outline outline-1 outline-neutralGrey focus:outline-orange-light focus:shadow-outline"
              id="email"
              ref={emailElem}
              type="email"
              placeholder="email"
            ></input>
            <button
              onClick={submit}
              className="col-span-1 bg-orange-dark hover:bg-orange text-white py-2 md:px-10 rounded"
            >
              Join
            </button>
          </div>
          {error.state && error.key === "email" ? (
            <p className="text-red text-xs mt-3">{error.message}</p>
          ) : (
            <p className="text-neutralGrey text-xs mt-3">
              By clicking this you agree to receive emails from Stuff Sharing
            </p>
          )}
        </div>
        <div className="col-span-5 mx-auto w-fit lg:mt-0 mt-20">
          <Image src={planet} alt="logo" className="max-h-full w-auto" />
        </div>
      </div>
      <Toast isShown={showSuccessMessage.state} text={showSuccessMessage.message}/>
    </div>
  );
}

export default USP