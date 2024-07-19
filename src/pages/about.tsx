import React from 'react'
import { motion } from 'framer-motion'

function About() {
    const goHome = () => {
        window.location.href = '/'
    }

    const goAbout = () => {
        window.location.href = '/about'
    }

    const goProject = () => {
        window.location.href = '/project'
    }

    const goArchive = () => {
        window.location.href = '/archive'
    }

    return (
        <>
            <div className="flex flex-row justify-end relative">
                <div className="bar text-[23px] mt-8 flex flex-row gap-20 font-bold  text-white">
                    <button onClick={goHome} className="hover:text-blue-500">
                        Home
                    </button>
                    <button onClick={goAbout} className="hover:text-blue-500">
                        About
                    </button>
                    <button onClick={goProject} className="hover:text-blue-500">
                        Project
                    </button>
                    <button onClick={goArchive} className="hover:text-blue-500">
                        Archive
                    </button>
                </div>
            </div>

            <div className="mt-6 mb-5 w-[1300px] h-[6px]   bg-blue-500"></div>

            <div className="flex flex-row  relative justify-center">
                <div className="aboutGirl absolute -z-10 right-0 w-[300px] h-[600px]"></div>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    className="aboutMe  text-[#3b82f6]  mt-5  text-7xl"
                >
                    🔗ABOUT ME
                </motion.p>
            </div>

            <div className="flex flex-col items-center gap-6 mt-10">
                <div className="flex flex-row justify-center gap-4">
                    <div className="w-[300px] h-[200px] rounded-3xl flex flex-row justify-center items-center">
                        <div
                            style={{
                                boxShadow: '0 0 30px #acccff',
                            }}
                            className="text-white flex flex-col items-center text-3xl w-[280px] h-[200px] rounded-3xl  bg-blue-500 border-[3px] border-black  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="60px"
                                viewBox="0 -960 960 960"
                                width="80px"
                                fill="#acccff"
                                className="mt-3"
                            >
                                <path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
                            </svg>
                            <p className="info ">NAME</p>

                            <div className="detail flex flex-col justify-center items-center mt-3 w-[240px] h-[60px] bg-black">
                                <p className="mt-4 ">조미성 / MI SEONG</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] h-[200px] rounded-3xl flex flex-row justify-center items-center">
                        <div
                            style={{
                                boxShadow: '0 0 30px #acccff',
                            }}
                            className="text-white flex flex-col items-center text-3xl w-[280px] h-[200px] rounded-3xl  bg-blue-500 border-[3px] border-black  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="60px"
                                viewBox="0 -960 960 960"
                                width="80px"
                                fill="#acccff"
                                className="mt-3"
                            >
                                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                            </svg>
                            <p className="info ">BIRTH</p>

                            <div className="detail flex flex-col justify-center items-center mt-3 w-[240px] h-[60px] bg-black">
                                <p className="mt-4 ">2001/08/16</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] h-[200px] rounded-3xl flex flex-row justify-center items-center">
                        <div
                            style={{
                                boxShadow: '0 0 30px #acccff',
                            }}
                            className="text-white flex flex-col items-center text-3xl w-[280px] h-[200px] rounded-3xl bg-blue-500 border-[3px] border-black  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="60px"
                                viewBox="0 -960 960 960"
                                width="80px"
                                fill="#acccff"
                                className="mt-3"
                            >
                                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                            </svg>
                            <p className="info ">ADDRESS</p>

                            <div className="detail flex flex-col justify-center items-center mt-3 w-[240px] h-[60px] bg-black">
                                <p className="mt-4 ">대구광역시 수성구</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-10 justify-center gap-4">
                    <div className="w-[300px] h-[200px] rounded-3xl flex flex-row justify-center items-center">
                        <div
                            style={{
                                boxShadow: '0 0 30px #acccff',
                            }}
                            className="text-white flex flex-col items-center text-3xl w-[280px] h-[200px] rounded-3xl  bg-blue-500 border-[3px] border-black  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="60px"
                                viewBox="0 -960 960 960"
                                width="80px"
                                fill="#acccff"
                                className="mt-3"
                            >
                                <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z" />
                            </svg>
                            <p className="info">PHONE</p>

                            <div className="detail flex flex-col justify-center items-center mt-3 w-[240px] h-[60px] bg-black">
                                <p className="mt-4 ">010-9159-8579</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] h-[200px] rounded-3xl flex flex-row justify-center items-center">
                        <div
                            style={{
                                boxShadow: '0 0 30px #acccff',
                            }}
                            className="text-white flex flex-col items-center text-3xl w-[280px] h-[200px] rounded-3xl  bg-blue-500 border-[3px] border-black  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="60px"
                                viewBox="0 -960 960 960"
                                width="80px"
                                fill="#acccff"
                                className="mt-3"
                            >
                                <path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
                            </svg>
                            <p className="info">EMAIL</p>

                            <div className="detail flex flex-col justify-center items-center mt-3 w-[240px] h-[60px] bg-black">
                                <p className="mt-4 ">giyomii030@naver.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] h-[200px] rounded-3xl flex flex-row justify-center items-center">
                        <div
                            style={{
                                boxShadow: '0 0 30px #acccff',
                            }}
                            className="text-white flex flex-col items-center text-3xl w-[280px] h-[200px] rounded-3xl  bg-blue-500 border-[3px] border-black  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="60px"
                                viewBox="0 -960 960 960"
                                width="80px"
                                fill="#acccff"
                                className="mt-3"
                            >
                                <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                            </svg>
                            <p className="info ">EDUCATION</p>

                            <div className="detail flex flex-col justify-center items-center mt-3 w-[240px] h-[60px] bg-black">
                                <p className="mt-4 ">경북대학교 컴공(복전중)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-3  w-[1300px] h-[6px]   bg-blue-500"></div>
            </div>

            <div className="h-[10px]"></div>
        </>
    )
}

export default About
