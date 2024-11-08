import { useState} from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from  './usegif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

  const [tag, setTag] = useState('');

const {gif,loading, fetchData} = useGif(tag);

  return (
    <div className="w-1/2  bg-blue-800 rounded-lg mt-28 ">
      <h1 className='mt-[15px] font-bold text-white ml-52 text-2xl'>A Random {tag} Gif</h1>

    {
      loading ? (<Spinner className='ml-24'/>) : ( <img src={gif} width="450" className='ml-24 '/>)
    }

     <input
     className=' ml-12 mt-14 w-10/12 bg-yellow-300 text-lg py-2 rounded-lg text-center'
     onChange={(event) => setTag(event.target.value)} value={tag}/>

      <button className= 'ml-12 mt-14 w-10/12 bg-white text-lg py-2 rounded-lg mb-10'
      onClick={() => fetchData(tag)}>
        Generator
      </button>
    </div>
  )
}
export default Tag

