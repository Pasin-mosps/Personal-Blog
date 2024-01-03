const Experience =() =>{
    return(
        <div id="experience" className="mt-4 scroll-m-14">
           <h1 className="text-2xl font-bold mt-10 grid grid-cols-1 justify-items-center items-center mb-5">Experience</h1>
            <div className="ml-0 grid grid-cols-[30%_70%]">
                <div>2019-2020</div>
                <div>
                    <div className="font-bold">
                    Senior production Engineer at Ampol Food Procesing
                    </div>
                    <ul className="list-disc ml-4">
                        <li>Create and manage documents related to maintenance work.</li>
                        <li>Create machine trouble reports and countermeasures if necessary.</li>
                        <li>Maintenance of machine and production equipment</li>
                    </ul>
                </div>
           
                <div>2021-2022</div>
                <div>
                    <div className="font-bold"> 
                        Sales Engineer at Nas Equipment
                    </div>
                    <ul className="list-disc ml-4">
                        <li>negotiating, and closing deals. Ability to understand customer needs and offer appropriate solutions.</li>
                        <li> Ability to build and maintain relationships with clients.</li>
                        <li>Interpersonal Flexibility.</li>
                    </ul>
                </div>
                <div>2023-2023</div>
                <div>
                    <div className="font-bold">
                         Sales Responsive at Miracle International Technology
                    </div>
                    <ul className="list-disc ml-4">
                        <li>communication skills to interact with clients, understand their requirements.</li>
                        <li>identify and solve complex problems, troubleshoot issues, and provide technical support.</li>
                        <li>Working collaboratively with the team, engineers, and other departments.</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="text-xl font-bold mt-10 grid grid-cols-1 ml-3">
                    <div>
                        Coding Experience
                    </div>
                </div>
                <div className="ml-10 mt-2 mb-2">
                    <div>Student @ 42 Bangkok</div>
                    <a href="https://www.42bangkok.com/th/" target="blank">
                        <span className='text-xs rounded-md bg-primaryTitle text-gray-200 py-1 px-2 mt-3 mb-3'>
                        about 42 bangkok
                        </span>
                    </a>
                </div>
                    <div className="space-y-4">
                    <p className="font-semibold ml-5 mt-4">Self-Learning Experience:</p>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">Self-taught proficiency in Python programming language through online courses and practical projects.</li>
                        <li className="mb-2">Acquired advanced knowledge in data analysis and visualization using tools like Pandas, NumPy, and Matplotlib through self-guided learning.</li>
                        <li>Independently studied web development technologies including HTML, CSS, and JavaScript through online tutorials and hands-on projects.</li>
                    </ul>
                </div>

                
            </div>
            
            
        </div>
        
    )    
}
export default Experience;