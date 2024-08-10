import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
      setSearch(response.data);
    } catch (error) {
      setError('Failed to fetch countries');
    } finally {
      setLoading(false);
    }
  };

  const getSearchHandler = (event) => {
    event.preventDefault();
    const filtered = countries.filter((item) =>
      item?.name?.common.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearch(filtered);
  };

  const getFilteredOpt = (event) => {
    event.preventDefault();
    const filtered = countries.filter((item) =>
      item?.region.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearch(filtered);
  };

  return (
    <div className='bg-very_dark_gray_light'>
      <Header />
      {/* Search Button */}
      <div className='md:flex justify-between items-center md:w-[100%]'>
        <div className='py-8 px-4 mx-auto relative md:mx-4 md:w-[35%]'>
          <CiSearch className='absolute mt-5 ml-4' />
          <input
            onChange={getSearchHandler}
            type='text'
            placeholder='Search for a country..'
            className='bg-white font-sans px-8 py-4 shadow-md placeholder-sm w-full focus:outline-none rounded-md'
          />
        </div>

        {/* Filter Button */}
        <div className='mx-auto py-8 px-4 md:mx-4 md:w-[25%]'>
          <select
            name='region'
            className='px-8 py-4 focus:outline-none rounded-md shadow-md w-[50%] md:w-[100%] font-sans'
            onChange={getFilteredOpt}
          >
            <option value='filter' disabled selected>Filter by Region</option>
            <option value='africa'>Africa</option>
            <option value='americas'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>
        </div>
      </div>

      {/* Countries Card */}
      <div className='grid grid-cols-1 space-y-8 md:grid-cols-3 lg:grid-cols-4 md:space-y-8'>
        {search.map((item) => (
          <Link to={`/details/${item.cca3}`} key={item.cca3}>
            <div className='mx-auto max-w-xs shadow-lg rounded-md pb-16 '>
              <img src={item?.flags?.svg} alt={`${item?.flags} flag`} className='rounded-t-md object-cover h-48 w-full' />
              <div className='py-6 px-6'>
                <h4 className='text-2xl font-black md:text-lg'>{item?.name?.common}</h4>
                <h4 className='text-lg flex font-semibold mt-4'>Population:<p className='text-lg font-light ml-2'>{item?.population}</p></h4>
                <h4 className='text-lg flex font-semibold'>Region:<p className='text-lg font-light ml-2'>{item?.region}</p></h4>
                <h4 className='text-lg flex font-semibold'>Capital:<p className='text-lg font-light ml-2'>{item?.capital}</p></h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
