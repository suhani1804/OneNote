import React from 'react'

export default function Section(props) {
  return (
    <div className={props.bg}>
      <section className=" flex mb-10" >
            <div className="gap-2 ">
              <h1 className="text-3xl font-semibold mb-4">
                {props.title}
              </h1>
              <section className=" flex flex-col md:flex-row items-center justify-center gap-10 ">
                <div className=" mb-2">
                  <img src={props.image} alt="" className="border-3 " />
                  <h3 className="flex justify-center font-medium">
                    {props.fig}
                  </h3>
                </div>
              </section>
              <div className="mt-2">
                <p className="text-lg  ">
                  {props.des}
                </p>
              </div>
            </div>
          </section>
    </div>
  )
}
