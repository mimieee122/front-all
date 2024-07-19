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
                    <button className="hover:text-blue-500">Board</button>
                </div>
            </div>

            <div className="mt-6  w-[1300px] h-[6px]   bg-blue-500"></div>
        </>
    )
}

export default About
