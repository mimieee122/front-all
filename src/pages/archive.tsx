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

    const goGit = () => {
        window.location.href = 'https://github.com/mimieee122'
    }

    const goTistory = () => {
        window.location.href = 'https://with-mimi.tistory.com/'
    }

    return (
        <>
            <div className="flex flex-row justify-end">
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

            <div className="mt-6  w-[1300px] h-[6px]   bg-blue-500"></div>

            <div className="flex flex-row  relative justify-center">
                <motion.p
                    initial="hidden"
                    animate="visible"
                    className="aboutMe  text-[#3b82f6]  mt-10  text-7xl"
                >
                    🔗Archieve
                </motion.p>
            </div>

            <div className="flex flex-row gap-6 justify-center mt-20">
                <div className="w-[500px] h-[400px] flex flex-col  items-center border-gray-300 border-[6px] bg-blue-500 rounded-3xl">
                    <div
                        onClick={goGit}
                        className="cursor-pointer github w-[200px] h-[200px] mt-3"
                    ></div>
                    <p className="site pr-2 pl-2 mt-8 underline text-white text-[20px]">
                        ⛓️ SITE :
                        <a
                            className="text-blue-200"
                            href="https://github.com/mimieee122"
                        >
                            https://github.com/mimieee122
                        </a>
                    </p>
                    <p className="last text-white mt-6">
                        소스 코드 저장소 입니다.
                    </p>
                </div>
                <div className="w-[500px] h-[400px] flex flex-col  items-center border-gray-300 border-[6px] bg-blue-500 rounded-3xl">
                    <div
                        onClick={goTistory}
                        className="cursor-pointer tistory w-[400px] h-[165px] mt-20"
                    ></div>
                    <p className="site pr-2 pl-2  underline text-white text-[20px]">
                        ⛓️ SITE :
                        <a
                            className="text-blue-200 "
                            href="https://with-mimi.tistory.com/"
                        >
                            https://with-mimi.tistory.com/
                        </a>
                    </p>
                    <p className="last text-white mt-6">
                        공부 및 지식 공유 목적의 블로그 입니다.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
