import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Home = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://tenor.com/embed.js'
        script.async = true
        document.body.appendChild(script)
    }, [])

    const goAbout = () => {
        window.location.href = '/about'
    }

    const goHome = () => {
        window.location.href = '/'
    }
    const goProject = () => {
        window.location.href = '/project'
    }

    const goArchive = () => {
        window.location.href = '/archive'
    }

    const nameVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 1 },
        },
    }

    const helloVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, delay: 2 },
        },
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

            <div className="bubble mt-10 flex flex-row justify-center gap-6 h-[600px]">
                <div
                    className=" relative z-0 mt-3  w-[600px] h-[600px]
                 flex flex-col  items-center "
                >
                    <div
                        className="tenor-gif-embed  w-[500px] h-[400px]"
                        data-postid="14464540"
                        data-share-method="host"
                        data-aspect-ratio="1"
                        data-width="100%"
                    >
                        <a href="https://tenor.com/view/bubble-blue-abstract-surreal-physic-gif-14464540">
                            Bubble Blue GIF
                        </a>
                        from{' '}
                        <a href="https://tenor.com/search/bubble-gifs">
                            Bubble GIFs
                        </a>
                    </div>
                    <div>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={nameVariants}
                            className="name text-blue-500  mt-5 text-right text-7xl"
                        >
                            MISEONG WEBSITE
                        </motion.p>
                    </div>
                    <div className="w-[600px] h-[6px] mt-3 bg-blue-500"></div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="second border-blue-500 border-[4px] pr-3 mr-3 rounded-xl  w-[700px] h-[600px] "></div>
                </div>
            </div>

            <div
                className="flex flex-row mt-28
             mb-28 justify-center items-center"
            >
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={helloVariants}
                    className="hi  mt-5 text-right text-7xl hi text-white"
                >
                    안녕하세요. 예비 프론트앤드 개발자, 조미성 입니다.
                </motion.p>
            </div>

            <div className=" w-100% h-[400px] mb-8  flex flex-row justify-center items-center gap-10 ">
                <div
                    onClick={goHome}
                    className="home contact rounded-xl transition-opacity duration-300 ease-in-out hover:opacity-50 border-blue-200 border-[7px] w-[300px] h-[400px] bg-blue-500 flex flex-col items-center justify-center relative"
                >
                    <p className="cursor-pointer white text-6xl text-white">
                        Home
                    </p>
                </div>
                <div
                    onClick={goAbout}
                    className="cursor-pointer about transition-opacity duration-300 ease-in-out hover:opacity-50 rounded-xl  border-blue-200 border-[7px] w-[300px] h-[400px] bg-blue-500 flex flex-col items-center justify-center relative"
                >
                    <p className="white text-6xl text-white">About</p>
                </div>
                <div
                    onClick={goProject}
                    className="cursor-pointer project transition-opacity duration-300 ease-in-out hover:opacity-50 rounded-xl  border-blue-200 border-[7px] w-[300px] h-[400px] bg-blue-500 flex flex-col items-center justify-center relative"
                >
                    <p className="white text-6xl text-white">Project</p>
                </div>
                <div
                    onClick={goArchive}
                    className="cursor-pointer archive transition-opacity duration-300 ease-in-out hover:opacity-50 rounded-xl  border-blue-200 border-[7px] w-[300px] h-[400px] bg-blue-500 flex flex-col items-center justify-center relative"
                >
                    <p className="white text-6xl text-white">Archive</p>
                </div>
            </div>
            <div className="h-[50px]"></div>
            <div className="mt-6  w-[1300px] h-[6px]   bg-blue-500"></div>
            <div className="h-[100px]"></div>
        </>
    )
}

export default Home
