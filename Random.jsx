import Spinner from './Spinner'
import useGif from './usegif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {


const {gif,loading, fetchData} = useGif();
  

  return (
    <div className="w-1/2  bg-blue-800 rounded-lg mt-28 ml-36">
      <h1 className='mt-[15px] font-bold text-white ml-60 text-2xl'>A Random Gif</h1>

    {
      loading ? (<Spinner className='ml-24'/>) : ( <img src={gif} width="450" className='ml-28 items-center justify-center'/>)
    }

     

      <button className= 'ml-12 mt-14 w-10/12 bg-white text-lg py-2 rounded-lg mb-10'
      onClick={() => fetchData()}>
        Generator
      </button>
    </div>
  )
}
export default Random
