import { useEffect, useState } from "react";

const Demo = () => {
    const[country, setCountry] = useState("");
    const[tip, setTip] = useState("");
    const[regExp, setRegExp] = useState(/ /);
    const[mobile ,setMobile] = useState('');
    const[mobileError, setMobileError] = useState('');

    const handleCountrChange = (e) =>
    {
        setCountry(e.target.value);
        console.log(country);
        switch(e.target.value)
        {
            case "India":
                setTip("+91 10 digit numbers");
                setRegExp(/\+91\d{10}/);
                break;
            case "US":
                setTip("+(1) (20) (460) 345 3210")
                setRegExp(/\+\(1\)\(\d{2}\)\(\d{3}\)\s\d{3}\d{4}/)
                break;
            case "UK":
                setTip("+(44) (230) 4670 3450")
                setRegExp(/\+\(44\)\(\d{3}\)\s\d{4}\s\d{4}/);
                break;

        }
    }

    const handleMobileChange = (e) =>
    {
        setMobile(e.target.value)
    }

    const hanldeSubmitClick = () =>
    {
        if(mobile.match(regExp))
        {
            document.write("Verify Successfully");
        }
        else
        {
            setMobileError(`Invalid Mobile ${tip}`);
        }
    }

  return (
    <div className="container mt-3">
      <h3>User Register</h3>
      <dl>
        <dt>Your Country</dt>
        <dd>
          <select name="" value={country} onChange={handleCountrChange} id="">
            <option>select Country</option>
            <option>India</option>
            <option>US</option>
            <option>UK</option>
          </select>
          </dd>
          <dt>Mobile</dt>
          <dd><input type="text" name="" onChange={handleMobileChange} placeholder={tip} id="" /></dd>
          <dd className="text-danger">{mobileError}</dd>     
      </dl>
      <div>
        <button onClick={hanldeSubmitClick} className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};
export default Demo;
