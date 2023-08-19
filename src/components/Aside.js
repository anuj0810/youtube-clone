import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Aside = () => {

  const ismenuClicked = useSelector(Store => Store.menuClick.isMenuClicked);

  return ismenuClicked ? null:  (
    <div className='p-8 shadow-md fixed bg-white w-1/6 absolute h-full'>
      <ul className='mb-8'>
       <li className=''><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul className='mb-8'>
        <li>Library</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Your Movies</li>
        <li>watch later</li>
        <li>Linked Video</li>

      </ul>
      <ul className='mb-8'>
        <p>Subscriptions</p>
        <li>Cricket</li>
        <li>Football</li>
        <li>Hocky</li>
      </ul>
      <ul className='mb-8'>
        <p>Explore</p>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live </li>
        <li>Gaming</li>
      </ul>
    </div>
  )
}

export default Aside