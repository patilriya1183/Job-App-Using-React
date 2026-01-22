
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import './style.css'


const emloymentArr = [
    {
        id : "FULLTIME",
        title : "Full Time"
    },
    {
        id : "PARTTIME",
        title : "Part Time"
    },
    {
        id : "FREELANCE",
        title : "Freelance"
    },
    {
        id : "INTERNSHIP",
        title : "Internship"
    }
]

const salaryArr = [
    {
        id : "1000000",
        title : "10 LPA and above"
    },
    {
        id : "2000000",
        title : "20 LPA and above"
    },
    {
        id : "3000000",
        title : "30 LPA and above"
    },
    {
        id : "4000000",
        title : "40 LPA and above"
    }
]


const FilterSection = ({changeEmpType, changeSalaryRange}) => {

    const [allValues, setValues] = useState({

        profile : {}
    });

    useEffect( () => {

        const fetchProfile = async () => {

            const token = Cookies.get("myToken");

            const api = "https://apis.ccbp.in/profile";

            const options  = {

                method : "Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            try {

                const response = await fetch(api, options);

                const data = await response.json();

                // console.log(data.profile_details);

                if (response.ok) {

                    setValues({...allValues, profile : data.profile_details})

                }
                
            } 
            catch (error) {
            
                console.log(error);
            }

        }

        fetchProfile();

    }, []);


    const displayProfile = () => (

        <div className='shadow rounded profileCard p-3'>

            <img src={allValues.profile.profile_image_url} width="80px"/>
            
            <h5 style={{fontWeight : "bold"}} className='mt-2'> {allValues.profile.name} </h5>

                <p style={{fontWeight : 500}}> {allValues.profile.short_bio} </p>

        </div>
    )

    const displayEmpFilter = () => {

        
        const changeType = (e) => {

            changeEmpType(e.target.value, e.target.checked)
        }

        return(

            <ul className='ulItemFilter mt-3'>
                {
                    emloymentArr.map( each => (

                        <li className='mt-2 liItem'  key = {each.id}>

                            <input onChange={changeType} type="checkbox" value={each.id} id={each.id} />
                            <label className='ml-2' htmlFor={each.id}> {each.title} </label>

                        </li>
                    ))
                }
            </ul>

        )

    }

    const displaySalaryFilter = () => {

        const changeSalary = (e) => {

            changeSalaryRange(e.target.value)
        }

        return(

            <ul className='ulItemFilter mt-3'>
                {
                    salaryArr.map( each => (

                        <li className='mt-2 liItem'  key = {each.id}>

                            <input onChange={changeSalary} name='salary' type="radio" value={each.id} id={each.id} />
                            <label className='ml-2' htmlFor={each.id}> {each.title} </label>

                        </li>
                    ))
                }
            </ul>

        )

    }


    return(

        <div className='p-3'>

            {displayProfile()}
            <hr className="hrTag" />

            <h5>Type of Employment</h5>
            {displayEmpFilter()}
            <hr className="hrTag" />

            <h5>Salary Range</h5>
            {displaySalaryFilter()}

        </div>
    )

}

export default FilterSection