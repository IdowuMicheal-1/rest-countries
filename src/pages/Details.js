import React, { useEffect, useState } from 'react';
import Header from './Header';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams(); // `id` is the cca3 code

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
        setDetails(response.data[0]);
      } catch (error) {
        console.error('Failed to fetch country details', error);
      }
    };

    fetchCountryDetails();
  }, [id]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className='bg-very_dark_gray_light pb-28'>
      <Header />
      <div className="pt-6">
        <Link to='/'>
          <button className='bg-white ml-6 flex mt-6 shadow-md shadow-dark_gray_light rounded-md items-center px-4 py-1'>
            <IoIosArrowRoundBack /> Back
          </button>
        </Link>
        <div className='lg:flex lg:w-[100%]'>
          {/* Flag */}
          <img src={details.flags?.svg} alt={`${details.name?.common} flag`} className='mt-10 object-cover w-[88%] mx-auto lg:w-1/2 lg:ml-6' />

          {/* Text */}
          <div className='lg:flex lg:flex-col lg:w-[45%] mt-6 lg:pr-6'>
            <div className='lg:flex lg:flex-row'>
              <div className='pl-6 mt-10'>
                <h4 className='text-xl font-sans font-extrabold'>{details.name?.common}</h4>
                <h4 className='flex text-md mt-4 font-semibold font-sans'>Native Name:<p className='font-normal ml-1'>{details.name?.nativeName ? Object.values(details.name?.nativeName).map(name => name.common).join(', ') : 'N/A'}</p></h4>
                <h4 className='flex text-md mt-4 font-semibold font-sans'>Population:<p className='font-normal ml-1'>{details.population}</p></h4>
                <h4 className='flex text-md mt-4 font-semibold font-sans'>Region:<p className='font-normal ml-1'>{details.region}</p></h4>
                <h4 className='flex text-md mt-4 font-semibold font-sans'>Sub Region:<p className='font-normal ml-1'>{details.subregion || 'No Sub Region Available'}</p></h4>
                <h4 className='flex text-md mt-4 font-semibold font-sans'>Capital:<p className='font-normal ml-1'>{details.capital ? details.capital.join(', ') : 'N/A'}</p></h4>
              </div>

              {/* Top Level */}
              <div className='pl-6 mt-12'>
                <h4 className='flex text-md mt-4 font-semibold font-sans'>Top Level Domain:<p className='font-normal ml-1'>{details.tld ? details.tld.join(', ') : 'N/A'}</p></h4>
                <h4 className='flex text-md mt-4 font-semibold font-sans'>Currencies:<p className='font-normal ml-1'>{details.currencies ? Object.values(details.currencies).map(currency => currency.name).join(', ') : 'N/A'}</p></h4>
                <h4 className='flex text-md mt-4 font-semibold font-sans'>Languages:<p className='font-normal ml-1'>{details.languages ? Object.values(details.languages).join(', ') : 'N/A'}</p></h4>
              </div>
            </div>

            {/* Border Countries */}
            <div className='mt-12 px-6'>
              <h4 className='text-md font-sans font-bold'>Border Countries:</h4>
              <div className='flex space-x-4 mt-5 pb-16'>
                {details.borders && details.borders.length > 0 ? (
                  details.borders.map((border) => (
                    <button key={border} className='bg-white py-1 px-4 rounded-md shadow-md'>
                      {border}
                    </button>
                  ))
                ) : (
                  'No Border Countries Available'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
