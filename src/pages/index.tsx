import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Home = () => {
    const router = useRouter()

    const goAbout = () => {
        router.push('/about')
    }
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://tenor.com/embed.js'
        script.async = true
        document.body.appendChild(script)
    }, [])

    const goHome = () => {
        window.location.href = '/'
    }
    const goProject = () => {
        window.location.href = '/project'
    }

    const helloVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 1 },
        },
    }

    const nameVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1 },
        },
    }

    return (
        <>
            <div className="flex flex-row justify-between ">
                <div className="w-[550px] h-[30px] bg-gradient-to-r from-blue-400 to-pink-200 mt-10"></div>
                <div className="bar text-[20px] mt-8 flex flex-row gap-20 font-bold  text-black">
                    <button onClick={goHome} className=" hover:text-pink-400">
                        Home
                    </button>
                    <button onClick={goAbout} className="hover:text-pink-400">
                        About
                    </button>
                    <button onClick={goProject} className="hover:text-pink-400">
                        Project
                    </button>
                    <button className="hover:text-pink-400">Board</button>
                </div>
            </div>
            <div className="flex flex-col items-center relative z-0 w-[1100px] h-[500px] ">
                <div className=" relative z-0 flex flex-col items-center ">
                    <div
                        className="absolute  z-70 tenor-gif-embed w-[700px] h-[350px]"
                        data-postid="13712021"
                        data-share-method="host"
                        data-aspect-ratio="1"
                    >
                        <a href="https://tenor.com/view/abstract-desert-rose-abstract-art-motion-design-virtual-gif-13712021"></a>
                    </div>
                    <div
                        className=" 
                 bg-no-repeat bg-cover opacity-50 absolute mt-20 z-30 w-[1200px] h-[300px] "
                        style={{
                            backgroundImage: "url('')",
                        }}
                    ></div>
                    <div className="absolute z-30 pt-10  mt-80 flex flex-col items-center bg-gradient-to-r from-pink-200 to-blue-500 bg-clip-text text-transparent">
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={helloVariants}
                            className="text-stroke-2 title  text-6xl"
                        >
                            HELLO
                        </motion.p>
                    </div>
                </div>
            </div>
            <div className=" w-[1100px] h-[30px] bg-gradient-to-r from-pink-200 to-blue-400   mt-14"></div>
            <div>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={nameVariants}
                    className="name text-pink-200 mt-5 text-right text-5xl"
                >
                    JO MISEONG
                </motion.p>
            </div>
        </>
    )
}

export default Home
