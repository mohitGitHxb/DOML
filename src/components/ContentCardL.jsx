import React from 'react'

const ContentCardL = ({imgUrl,altTxt}) => {
  return (
    <section className="w-3/4 mx-auto my-12 md:my-24">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-evenly items-center">
        <div className="flex flex-col h-full max-w-[715px] my-5 md:my-0">
          <h1 className="md:text-[40px] py-4 text-5xl colored mb-4 font-medium text-center md:text-left">
            AI Marketing.
          </h1>
          <h1 className="md:text-[40px] text-5xl font-medium mb-10 text-center md:text-left text-white">
            Optimized Reach
          </h1>
          <p className="md:text-xl text-base text-gray-400 text-center md:text-left">
          It's all about getting your message in front of the right audience
            and creating those valuable <span className="text-blue-600">relationships.</span>   Learn More about how DOML
            can help you do just that - all with a simple, easy-to-use platform.
            real time,{" "}
          </p>
          <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 min-h-[2px] w-100 my-10" />
          <button
            type="button"
            className="inline-flex border-gradient lg:w-2/5 md:w-3/4 items-center justify-center hover:justify-evenly h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle bg-transparent rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
          >
            <p className="hover:colored">Learn More</p>
            <span>
              <img
                src="./arrow_r.png"
                alt="arrow_r.png"
                className="w-8 h-7 ml-5"
              ></img>
            </span>
          </button>
        </div>
        <div className="flex justify-center md:justify-start">
          <img
            src={imgUrl}
            alt={altTxt}
            className="h-[283px] w-[295px] md:w-4/5 wobble-hor-bottom md:h-4/5"
          ></img>
        </div>
      </div>
    </section>
  )
}

export default ContentCardL