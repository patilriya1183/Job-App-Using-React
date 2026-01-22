import Header from '../header';
import './style.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import FilterSection from '../filterSection';
import DisplayJobsCard from '../displayJobsCard';
import { BsSearch } from "react-icons/bs";

const Jobs = () =>{

    const [allValues, setAllValues] = useState({

        userArr : [],
        empType : [],
        salary : "",
        searchInp : ""
    });


    useEffect( () => {

        const fetchJobsData = async () => {

            const token = Cookies.get("myToken");

            // const api = "https://apis.ccbp.in/jobs";

            const { empType, salary, searchInp } = allValues;

            const api = `https://apis.ccbp.in/jobs?employment_type=${empType}&minimum_package=${salary}&search=${searchInp}`;

            const options = {
                
                method : "Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            try {

                const response = await fetch(api, options);

                const data = await response.json();

                if(response.ok){

                    // console.log(data.jobs);

                    setAllValues({...allValues, userArr : data.jobs});

                }
                else{

                }
                
            }
            catch (error) {

                console.log(error);
                
            }

        }
        

        fetchJobsData();

    },[allValues.searchInp, allValues.empType, allValues.salary] )



    const onChangeUserInput = (e) => {

        if(e.key === "Enter"){

            setAllValues({...allValues, searchInp : e.target.value});
        }

    }


    const changeEmpType = (value, isChecked ) => {

        if(isChecked){
            
            setAllValues({...allValues, empType : [...allValues.empType, value] });
        }
        else{

            setAllValues({...allValues, empType : allValues.empType.filter( each => each !== value )});

        }

    }

    const changeSalaryRange = (value) => {

        setAllValues({...allValues, salary : value})
        
    }



    return (

        <>

            <Header/>

             <div className='mainJob'>

                <div className='containerJob'>

                    <div className='newJobRow'>

                        <div className='sec1'>

                            <FilterSection changeEmpType = {changeEmpType} changeSalaryRange = {changeSalaryRange} />

                        </div>

                        <div className='sec2'>      

                            <ul className='jobUl'>

                                <li style={{listStyle : "none"}} className='mb-3'>

                                    <div className="iconInput mb-3">

                                        <input onKeyUp={onChangeUserInput} className="inpSearch" type="search" placeholder="Search..." />
                                        <BsSearch className="searchIcon" />

                                    </div>

                                </li>

                                {
                                    allValues.userArr.map( each => <DisplayJobsCard eachCard = {each} key = {each.id} /> )
                                }

                            </ul>

                        </div>

                    </div>

                </div>

             </div>

        </>
    );

}

export default Jobs