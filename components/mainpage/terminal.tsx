'use client'
import React, { useState, useEffect, useRef } from 'react'

import Typed from 'typed.js'
// Can also be included with a regular script tag
export const TypedReactHooksDemo = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    const options = {
    	strings: [
         'Hello, World!',
          'Transforming Ideas into Interactive Interfaces: My Front-End Story.',
          'I am a Front-end Developer with a passion for design and development.',

      ],
      typeSpeed: 50,
      backSpeed: 40,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      if (typed.current) {
        typed.current.destroy();
      }
    }
  }, []) 
  return  <span ref={el} />;
}

export default function Terminal() {
  const [text, setText] = useState( `Welcome to my website!`)
  const [cursorVisible, setCursorVisible] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 " onClick={handleClick}>
      <div className="bg-gray-200 rounded-t-lg p-2 text-sm text-gray-700">
         — bash — 
      </div>
      <div className="bg-black rounded-b-lg min-h-24 p-4 font-mono text-green-500 text-lg relative">

        {text}
        {/* <TypedReactHooksDemo /> */}
    
      </div>
    </div>
  )
}