import React from 'react'

const Button = (props) => {
  return (
    <div className="bg-violet-900 hover:bg-violet-500 hover:duration-200 mt-4 p-2 text-center m-auto  sm:m-0 rounded-xl cursor-pointer w-[150px] ">{props.title}</div>
  )
}

export default Button