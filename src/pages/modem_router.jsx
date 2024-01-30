import React from 'react'
// import router from "./assets/router.avif";
import modem from "../assets/modem.jpg";
import modemVSrouter from "../assets/Modem-vs-Router.webp";
import Section from "../dividers/section.jsx";
import Points from "../dividers/points.jsx";

const modem_router = () => {
  return (
    <div className=' text-xl flex justify-center'>
      <main className="w-[80%] sm:w-[60%] my-32 ">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">
            Difference between Modem and Router ?
          </h1>

          <Section
            title="Modem"
            image={modem}
            fig="Fig.1 modem"
            des="Modem establish and maintain a dedicated connection with ISP to give you access to the internet. There are two types of signals:- Analog signal that used on internet and Digital signal that used on computer. Modem is used as Modulator and Demodulator that modulates an analog carrier signal to digital information, and also demodulates digital carrier signal to analog. Most used modem is DSL( Digital Subscriber Line ) modem that uses telephone line to connect to the internet. Also cable modem that uses coaxial cable to connect to the internet using cable TV line."
          />
          <Section
            title="Router"
            image={modem}
            fig="Fig.2 router"
            des="Talking about small office router that has built-in switch in it and have multiple ports to connect multiple devices to the internet. Router assign a IP address to devices to identify the unique device. If a wired router has n ports then it can connect to n devices through ethernet cables. To connect more devices to the internet, we can use a switch to connect to the router and router to the internet. Talking about wireless router, it has built-in wireless access point and switch in it. It can connect to multiple devices wirelessly and wiredly."
          />
          <Points
            title="Difference "
            image={modemVSrouter}
            p1="1. Modem connects to the internet while router connects to a
                  modem to allow multiple devices to connect to the internet."
            p2="2. Modem can connect to only one device while router can
                  connect to multiple devices."
            p3="3. Modem can't create a local network while router can create
                  a local network."
            p4="4. Modem can't share files and resources while router can
                  share files and resources."
            p5="5. Modem can't protect your network from outside threats while
                  router can protect your network from outside threats."
            p6="6. Modem can't assign IP address to devices while router can
                  assign IP address to devices."
          />

          <h1 className="text-4xl font-bold text-blue-800 mb-3 mt-10">
            Describe Router , Hub and Switch
          </h1>
          <p className="text-lg mb-8">
            All 3 devices work simillar but there is some difference how they
            handle data.
          </p>
          <Section
            title="Hub"
            des="It is a network device that connect multiple network devices together by a internal connection using ethernet cable. When a data packet arrives at one port, it is copied to the other ports so that all segments of the LAN can see all packets. 
                    Hub does not filter data, it just send data to all ports."
          />
          <Section
            title="Switch"
            des="It is a network device more inteligent than hub as it can filter the data. Switch can learn the physical address of the devices connected to it and store all these addresses i.e MAC address in a table called MAC cable. So, when a data packet is sent to switch, it's only intended to the destination port.
                    Hub detects that a device is connected to it but switch can detect which device is connected to which port.
                    "
          />
          <Section
            title="Router"
            des="So Hub and Switch can only transfer data within it's own network but Router can transfer data between differnet networks. Router reads the IP address of the data packet and transfer it to the destination network. 
                    IP is used for global identification for a device and MAC is used for local identification for a device. So, Router can transfer data globally between two or more networks."
          />
        </main>
    </div>
  )
}

export default modem_router
