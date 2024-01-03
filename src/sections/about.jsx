const About =() =>{
    return(
        <div className="scroll-m-14" id="about">
            <h1 className="text-2xl font-bold grid grid-cols-1 justify-items-center items-center">About Me</h1>
            <div className="flex flex-col">
    <p className="mb-6">
        <span className="block">
            <span className="text-lg leading-relaxed mt-2">
                I'm a passionate and adaptable software developer with a keen interest in creating robust and user-friendly web applications. My journey into programming has equipped me with a solid foundation in JavaScript, ReactJS, and backend technologies like Node.js.
            </span>
        </span>
    </p>
    <ul className="list-disc ml-4">
        <li className="mb-4">
            <span className="font-semibold">Innovative Problem Solver</span>
            <span className="ml-2">Thrive in brainstorming and implementing innovative solutions that streamline processes and enhance user experiences.</span>
        </li>
        <li className="mb-4">
            <span className="font-semibold">Collaborative Team Player</span>
            <span className="ml-2">Enjoy collaborating within cross-functional teams, contributing diverse perspectives, and fostering a collaborative environment.</span>
        </li>
        <li className="mb-4">
            <span className="font-semibold">Continuous Learner</span>
            <span className="ml-2">Committed to staying updated with the latest technologies and industry trends, always eager to take on new challenges.</span>
        </li>
        <li className="mb-4">
            <span className="font-semibold">Professional Objective</span>
            <span className="ml-2">I'm seeking an opportunity that allows me to leverage my technical skills, creativity, and passion for software development to contribute meaningfully to a team dedicated to crafting cutting-edge solutions.</span>
        </li>
        <li className="mb-4">
            <span className="font-semibold">Beyond Work</span>
            <span className="ml-2">Apart from coding, I indulge in creative hobbies like composing music and playing the guitar, finding inspiration in art that fuels my innovative thinking.</span>
        </li>
    </ul>
</div>

        </div>
    )
}

export default About;