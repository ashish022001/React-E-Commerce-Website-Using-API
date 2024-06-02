import React, { useState } from 'react'

const Class = () => {
    const[cities, setCities] = useState(["Umarkhed","Nended","Hingoli","Pune","Nagpur","Latur","Yavatmal"])
    const[buttonClass, setbuttonClass] = useState('bi bi-sort-alpha-down');

    function handleChangeClick(e)
    {
        if(e.target.className == 'bi bi-sort-alpha-down')
        {
            setbuttonClass('bi bi-sort-alpha-up');
            cities.sort();
        }
        else
        {
            setbuttonClass('bi bi-sort-alpha-down');
            cities.sort();
            cities.reverse();
        }
    }
  return (
    <div className='m-5'>
        <h2>List Cities <button onClick={handleChangeClick} className='btn btn-success'> <span className={buttonClass}></span> </button></h2>
        <ol>
      {
        cities.map(city=>  
        <li key={city}>
            {city.toLocaleUpperCase()}
        </li>)

      }
      </ol>
    </div>
  )
}

export default Class
