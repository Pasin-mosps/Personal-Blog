import About from "../sections/about";
import Image from "../assets/412566850_746593084022410_334064504988385556_n.jpg";
import Experience from "../sections/Experience";
import Skill from "../sections/skill";
import MyProject from "../sections/myproject";

const RightSection =() =>{
    return (
      <div>
        <div className="grid gap-5">
          <div className="grid grid-cols-1 justify-items-center items-center">
          <img src={Image} alt="Description" className="w-[100%] h-[65%] rounded-lg mb-10" />
        </div>
      </div>
       <About/>
      <Experience/>
      <Skill/>
     <MyProject/>
</div>
        
    )
}

export default RightSection;