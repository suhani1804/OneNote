import React from 'react'
import Section from '../dividers/section'
import Points from '../dividers/points'
import osimodel from '../assets/osi.png'
const osi = () => {
  return (
    <div className=' text-xl flex justify-center'>
      <main className="w-[80%] sm:w-[60%] my-32 ">
          <h1 className="text-4xl font-bold text-blue-800">
            7 Layers of OSI Models
          </h1>
            <h2 className='my-8 '>
            Open System Interconnection model was developed by ISO in 1984. 
            
            </h2>
          <Section
            title="Application Layer"
            des="Application layer is used by network applications ( applications that uses internet like web browser )

            This layer provides services to the network applications ( like chrome, firefox browsers etc ) with the help of protocols to do user activities.
            
            Ex- HTTP, HTTPs, FTP, SMTP
            
            FTP used for file transfer, HTTP for web surfing (HTTPs for security), SMTP for email services."
          />
            <Points
                title="Presentation Layer"
                des= "Presentation layer receives data from the application layer."
                subtitle=" 3 main functionality of presentation layer are : "
                p1= "1. Translation - Converts char/number data to binary data for machine understanding."
                p2= "2. Data compression - Reduce the file space for speed transfer."
                p3= "3. Encryption/Decryption - Encrypt data using SSL(Secure Socket Layer) protocol."
                />
            <Points
                title="Session Layer"
                des="This layer set up and manage connection enabling sending and receiving of data along with terminating the connections."
                subtitle="3 main functionality of Session layer are :"
                p1="1. Session management - For example if the user request for a page consist of image and text file then this layer establish a separate session between user's browser and server. Requested data received in form of data packets. Session layer keeps a track of which data packet belongs to which file ( whether text or image file ) and also tracks where the data packet go."

                p2="2. Authentication - It is process of finding who you are. So in this layer checks if the user is already registered or not by using username and password."

                p3="3. Authorization - Checks if the user have access to the requested data or not."
            />   

            <h2 className='font-semibold mt-[-20px] pb-8 '>Above 3 layer functions are performed by the web browser.</h2>
          
            <Points
                title="Transport Layer"
                subtitle="3 main functionality of Transport layer are :"
                p1="1. Segmentation - Data receive from session layer is divided into segments. Each segment consists port number ( where the data to be sent ), payload ( actual data ), sequence number ( for rearranging the data units to form actual data )"
                p2="2. Flow control - Check the bandwidth of nodes to receive and send data without data loss. If a 10Mbps server is sending data to 5Mbps mobile at speed 7Mbps then 2Mbps data is lost. So mobile send request to server with the help of Transport layer to send data at 5Mbps speed only.
                Ex- Stop and wait , Sliding Window"
                p3="3. Error control - If some data unit is lost in the receiver end then Automatic Repeat Request scheme is used to send request to retransmit the data unit.
                Ex- Go back N ARQ , Selective Repeat. 
                A group of bits called checksum is added to each segment to check the corrupted segment. 
                Ex- Hamming code, CRC"
            />  
            <Points
                title="Network Layer"
                des="Transport layer passes data segment to Network layer. Network layer is responsible for passing data segments ( in form of packets ) from one computer to another computer resides in different networks."

                subtitle="3 main functionality of Network layer are :"
                p1="1. Logical addressing - In network layer sender and receiver's IP address attached with the data segments ( receive from transport layer ) to form data packets."
                p2="2. Routing - It is method of transferring data packets from one computer to another. Routing method decided based on Logical addressing + subnet mask. Find the destination by finding the network first using subnet mask and then send to the computer using logical address ( IP address ) in that particular network."
                p3="3. Path determination - Using the best possible path for efficient data delivery is called path determination. Protocols used are - OSPF (open shortest path first), BGP (broader gateway protocol), IS-IS (intermediate system to intermediate system)."
            />     
            <Points
                title="Physical Layer"
                des="Network layer passes data packets to Physical layer. It is a physical and electrical representation of the system. It primarily focuses on converting digital data (bits ) into signals and transmit over local media.
                For ex - electrical signal in copper / LAN cable, light signal in optical fiber, radio signal in Air."
                p1=""
                p2=""
            />
            <Points
                title="Total functional path"
                des="Application layer -> Presentation layer -> Session layer -> Transport layer -> Network layer -> Physical layer"
                image={osimodel}

                style={{marginTop : '-6em'}}
            />
        </main>
    </div>
  )
}

export default osi
