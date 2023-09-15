
import React from "react"
function Card({empname,msg,btntext="Click Me"}) {
   
    return (


        <>
           
            <div className="relative h-[400px] w-[300px] rounded-md">
                <img
                    src="./src/assets/43836_1.jpg"

                    alt="shafiq"
                    className="z-0 h-full w-full rounded-xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white">{empname}</h1>
                    <p className="mt-2 text-sm text-gray-300">
                        {msg}
                    </p>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                        {btntext} →
                    </button>
                </div>
            </div>
        </>
    )
}
export default Card;