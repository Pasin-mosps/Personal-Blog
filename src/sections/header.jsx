import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {data} from '../content/content'
import Image from "../assets/pasin.jpg";

const Header = () =>{
    return(
        <div>
          <img src={Image} alt="Description" className="w-48 h-48 object-cover rounded-full mb-7"/>
            <div className='text-3xl text-primaryTitle font font-semibold '>{data.name}</div>
            <div className='text-primaryAccent font-semibold'>{data.title}</div>
            <div className='text-sm  w-5/6'>{data.caption}</div>
            <div className='mt-4'>
              <a href={data.link} target='_blank'>
                <span className='rounded-md bg-primaryTitle text-gray-200 py-2 px-4'>
                    View Resume
                <span className='rotate-90 inline-block ml-2'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/></span>
                </span>
              </a>
            </div>
        </div>
    )
}
export default Header;