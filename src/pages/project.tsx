import { useEffect } from 'react'
import { motion } from 'framer-motion'
import React from 'react'

function Project() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://tenor.com/embed.js'
        script.async = true
        document.body.appendChild(script)
    }, [])
    const goHome = () => {
        window.location.href = '/'
    }

    const goAbout = () => {
        window.location.href = '/about'
    }

    const goProject = () => {
        window.location.href = '/project'
    }

    const nameVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 1 },
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
                    <button className="hover:text-blue-500">Board</button>
                </div>
            </div>

            <div className="mt-6  w-[1300px] h-[6px]   bg-blue-500"></div>

            <div className="bubble mt-10 flex flex-row justify-center gap-10 h-[500px]">
                <div
                    className=" relative z-0 mt-10  w-[1000px] h-[500px]
                 flex flex-col  items-center "
                >
                    <div
                        className="tenor-gif-embed  w-[400px] h-[300px]"
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
                            className="name text-blue-500  mt-5 text-5xl"
                        >
                            PROJECTS
                        </motion.p>
                    </div>
                    <div className="w-[600px] h-[6px] mt-6 bg-blue-500"></div>
                </div>
            </div>

            <div className="flex flex-col gap-4 justify-start items-center  ">
                <div
                    className="w-[1100px] h-[1000px] mt-20
                 border-purple-400 border-[7px] rounded-lg flex flex-col gap-1 items-center"
                >
                    <p className="mt-10 mb-10 projectName text-white">
                        1. 로그인 화면 구현
                    </p>
                    <div className="login rounded-2xl w-[900px] h-[600px]"></div>
                    <div className="mb-5 rounded-3xl flex flex-col  justify-center items-center">
                        <div
                            style={{
                                boxShadow: '0 0 90px #7e22ce',
                            }}
                            className=" bg-white  explain 
                             flex flex-col justify-center items-center text-3xl w-[900px] h-[280px]  rounded-xl   border-[10px] border-purple-700  "
                        >
                            <p className="mt-3 mb-3">DESCRIPTION</p>
                            <div className="mb-5 rounded-xl w-[800px] h-[180px] bg-black flex flex-col justify-center items-center">
                                <p className="eXplain pr-2 pl-2 text-white text-[20px]">
                                    사용자 친화적인 인터페이스와 매력적인 3D
                                    그래픽을 통해 간편하고 즐거운 사용 경험을
                                    제공합니다. 기본 정보 입력, 비밀번호 설정,
                                    이메일 입력 및 검색 기능을 제공합니다.
                                    (*반응형)
                                </p>
                                <p className="h-5"></p>
                                <p className="eXplain pr-2 pl-2 text-white text-[20px]">
                                    ⛓️ SITE :{' '}
                                    <a
                                        className="text-purple-500 click"
                                        href="https://login-study.vercel.app/"
                                    >
                                        → CLICK ! ←
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1100px] h-[1000px] border-purple-700 border-[7px] mt-40 rounded-lg flex flex-col gap-1 items-center">
                    <p className="mt-10 mb-10 projectName text-white">
                        2. 투두리스트 구현
                    </p>
                    <div className="todoList rounded-2xl w-[900px] h-[600px]"></div>
                    <div className=" rounded-3xl flex flex-col   justify-center items-center">
                        <div
                            style={{
                                boxShadow: '0 0 90px #7e22ce',
                            }}
                            className=" bg-white mb-7 explain 
                             flex flex-col justify-center items-center text-3xl w-[900px] h-[280px]  rounded-xl   border-[10px] border-purple-700  "
                        >
                            <p className="mt-3 mb-3">DESCRIPTION</p>
                            <div className=" rounded-xl w-[800px] h-[180px] bg-black flex flex-col justify-center items-center">
                                <p className="eXplain pr-2 pl-2 text-white text-[20px]">
                                    공부, 쇼핑, 취미 카테고리로 나뉜 할 일
                                    목록을 관리할 수 있는 투두 리스트
                                    애플리케이션입니다. 할 일 추가 및 삭제
                                    기능과 함께 귀여운 캐릭터 이미지로 시각적인
                                    매력을 더했습니다 . (*반응형)
                                </p>
                                <p className="h-5"></p>
                                <p className="eXplain pr-2 pl-2 text-white text-[20px]">
                                    ⛓️ SITE :{' '}
                                    <a
                                        className="text-purple-500 click"
                                        href="https://todo-project-taupe-five.vercel.app/"
                                    >
                                        → CLICK ! ←
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[1100px] h-[1200px] mt-40
                 border-[#7e22ce] border-[7px] rounded-lg flex flex-col gap-1 justify-center items-center"
                >
                    <p className="mt-2 mb-10 projectName text-white">
                        3. 다양한 계산기 구현
                    </p>
                    <div className="calculator ml-40 -mr-20 mb-10 rounded-2xl w-[1000px] h-[700px]"></div>
                    <div className="mb-5 rounded-3xl flex flex-col  justify-center items-center">
                        <div
                            style={{
                                boxShadow: '0 0 90px #7e22ce',
                            }}
                            className=" bg-white  explain 
                             flex flex-col justify-center items-center text-3xl w-[900px] h-[280px]  rounded-xl   border-[10px] border-[#7e22ce]  "
                        >
                            <p className="mt-3 mb-3">DESCRIPTION</p>
                            <div className="mb-5 rounded-xl w-[800px] h-[180px] bg-black flex flex-col justify-center items-center">
                                <p className="eXplain pr-2 pl-2 text-white text-[20px]">
                                    단순 계산기, 조합 계산기, 글자 수 확인,
                                    퍼센트와 요일 계산 등 다양한 계산기를 한
                                    화면에 모두 구현한 애플리케이션입니다. 소개
                                    문장을 다양한 언어로 변경하는 기능도
                                    추가하였습니다. (반응형 반영 X)
                                </p>
                                <p className="h-5"></p>
                                <p className="eXplain pr-2 pl-2 text-white text-[20px]">
                                    ⛓️ SITE :{' '}
                                    <a
                                        className="text-[#7e22ce] click"
                                        href="https://mimieee122.github.io/calculator-study/"
                                    >
                                        → CLICK ! ←
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[100px]"></div>
            </div>
        </>
    )
}

export default Project
