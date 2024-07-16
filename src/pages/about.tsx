import React from 'react'

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

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-between w-[1100px] ">
                <div className="w-[550px] h-[30px] bg-gradient-to-r from-blue-400 to-pink-200 mt-10 "></div>
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
            <div className=" flex flex-row justify-center items-center w-[1100px] h-[600px] bg-pink-200 mt-9">
                <div
                    className=" 
                   bg-no-repeat bg-contain absolute z-30 w-[900px] h-[500px] "
                    style={{
                        backgroundImage: "url('')",
                    }}
                ></div>
            </div>
        </div>
    )
}

export default About
