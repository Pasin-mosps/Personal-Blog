import Header from '../sections/header'
import Navbar from '../sections/navbar';
import Link from '../sections/link';

const LeftSection =() =>{
    return (
        <div>
        <div className='sticky top-10 grid grid-rows-h[35%,45%,20%] h-[95vh]'>
          <div className='flex flex-col gap-2'>
            <Header/>
          </div>
            <Navbar/>
            <Link/>
        </div> 
      </div>
    )
}

export default LeftSection;