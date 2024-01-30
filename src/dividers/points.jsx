import React from "react";

export default function Points(props) {
  return (
    <div style={props.style}>
      <div>
        <section className="flex">
          <div className="gap-2 ">
            <h1 className="text-3xl font-semibold mb-4">{props.title}</h1>
            <p>{props.des}</p>
            <section className=" flex flex-col items-center justify-center gap-6 ">
            <img src={props.image} alt="" className="mt-4 border-3 rounded-lg" />
              <div className="text-lg ">
              <h6 className="text-xl mt-[-10px] mb-2 font-medium ">{props.subtitle}</h6>
                {props.p1}
                <br />
                {props.p2}
                <br />
                {props.p3}
                <br />
                {props.p4}
                <br />
                {props.p5}
                <br />
                {props.p6}
                <br />
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
