import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { menuClickAction } from '../utils/menuSlice';
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_SUGGESTION } from '../constant';
import {searchCacheAction} from '../utils/searchSlice'


const Header = () => {

  const searchCacheData = useSelector(State => State.searchCache)

  const [searchText, setSearchText] = useState("");
  const [suggestionList, setsuggestionList] = useState([])
  const [suggestionVisible, setSuggestionvisible] = useState(false)
  useEffect(() => {
    if(searchText in searchCacheData){  // finding search result stored the redux store to misimise the search api call
      setsuggestionList(searchCacheData[searchText][0])
    }
    else{
    // adding debounsing serch api will call when time difference will be more then 200 after every keypress 
    const timer = setTimeout(() => { getSearchSuggestion() }, 200)
    return () => {
      clearTimeout(timer)
    }}
  }, [searchText])

  const getSearchSuggestion = async () => {
 
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION + searchText);
    const json = await data.json();
    dispatch(searchCacheAction({[searchText]:[json[1]]}))
    setsuggestionList(json[1])
  }


  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(menuClickAction())
  }
  return (
    <div className='flex h-20  justify-between bg-white shadow-md pr-8 pl-8'>
      <div className='flex h-12 m-auto'>
        <img onClick={() => handleMenuClick()}
          className='h-12 pr-8' alt='hamburger' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vawsLAdHR3b29v8/PzExMQzMzOEhIRzc3MPDw+hoaGysrLq6uo8PDwXFxfh4eFkZGRXV1fGxsZGRkaHh4fX19d6enqnp6e7u7sLhoRgAAAChUlEQVR4nO3di1LCQAyF4eWOCIgIqPWC7/+UWhm8jZNs2Z3JJP2/J8gZK+1u02xKAAAAAAAAAAAAAAAAABDfcjWZjfyYTVbLTvl2rwN/Nrv8gBPrYi80ycw33VtXerH9NCvgwbrOAoeciGvrKous9YA31jUWutEC3ltXWOxeSfhgXWCxBzng3Lq+CuZiwivr8iq4EhNurMurYCMm9H2rOJFvGNbVVdHzhJ6f2M4WYsJH6/IqeBQTel03/SSvoYbW5VUwFBOmW+v6it3KAdPRusBiRyVhWlhXWEj+JW29WJdY6EVN6PzhW71GW1vrKgtscwKm1FjXebEmL+DHOtjjhvDHskle+/7JOPa2abofd9jyPpleD/24ztoKBgAAAAAAAAAAPs2b49iPY9PlvVPrbWT9Lqmz0VuHfEOf7QoLpZPm27N1qRdT29hPZtZ1FpjlBPTdJiw3CH+6s66x0J0W0H+zvnbb8P7JzGDwLAdcWtdXgfyp5cq6vApWwS9S7ab4ZF1eBU9iQv8twlqTsHV1VfT8bxj//zD+b2n8+2GEZxoxoOfV75nyXBpgbaH20vr+GCFjfdiDNX4P9mk8/9povzJfwu+Xpvh73q3o7y0AAAAAAAAAAIAjwedE7cbeZiavO836mvt8050/r83vzD25WehL+LmJvme0Zsy+jD+/1GeTwjd1Bq3va7SlXaf+m4SVWdDx53nHn8kef65+hLMRDmJC6+qq6HlCb2um/8jnzPhcNv0mtwl77/JuyZ3e/lv11Q+Bw5+71oOz89x/25UxOML3DSPjDMsenEMa/yzZ5HcNlXsecHJ6pvNrtwMulo2zc7mbbudyAwAAAAAAAAAAAAAAAIBP7y86VZGfUH/eAAAAAElFTkSuQmCC' />

        <Link to="/"><img className='h-12' alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7Up4608NVAODkE9eTxTmPzR6nD0BXq7gLg&usqp=CAU' /></Link>
      </div>
      <div className='grow m-auto flex justify-center h-12 '>
        <input onChange={(e) => {
          setSearchText(e.target.value)
        }} onFocus={() => { setSuggestionvisible(true) }} onBlur={() => { setSuggestionvisible(false) }} className="w-1/2 border-2 rounded-l-full p-1" type='text' />
        <button className=' border-2 rounded-r-full p-2'>Search</button>
        {
          suggestionList.length !== 0 && suggestionVisible && <div className='fixed top-16 w-[45%] bg-white rounded-lg shadow-lg p-2'><ul>{suggestionList.map((item) => {
            return (<><li key={item} className='p-1 border-b-2 border-gray-100'>{item}</li></>)
          })}</ul></div>
        }
      </div>


      <div className='m-auto'>
        <img className='h-12' alt='hamburger' src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg' />
      </div>
    </div>
  )
}

export default Header