
import { useParams } from 'react-router-dom'
import './style.css'
import Cookies from 'js-cookie';
import { FaStar, FaBriefcase, FaIndianRupeeSign, FaLocationDot  } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import Header from '../header';
import SimilarJobs from '../similarJobsCard';
import SimilarJobsCard from '../similarJobsCard';


const DetailedJobItem = () => {

    const {id} = useParams();

    const [allValue, setValue] = useState({

        jobDetails: {},
        skills: [],
        lifeAtCompany: {},
        similarJobs: []

    })

    useEffect( () => {
    
            const fetchJobsData = async () => {
    
                const token = Cookies.get("myToken");
    
                const api = `https://apis.ccbp.in/jobs/${id}`;
    
                const options = {
                    
                    method : "Get",
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                }
    
                try {
    
                    const response = await fetch(api, options);
    
                    const data = await response.json();

                    setValue({

                        jobDetails: data.job_details,
                        skills: data.job_details.skills,
                        lifeAtCompany: data.job_details.life_at_company,
                        similarJobs: data.similar_jobs

                    })
                    
                }
                catch (error) {
    
                    console.log(error);
                    
                }
    
            }
            
    
            fetchJobsData();
    
        },[id] )

        const { jobDetails, skills, lifeAtCompany, similarJobs } = allValue

    return(
        <>

            <Header/>

            <div className='mainDetailedJob'>      
            
                <ul className='jobUl2 mt-4'>

                    <li className='jobCard rounded shadow p-3 mb-3' >
                    
                        <div className="div-1">
        
                            <div>
                                <h4>  {jobDetails.title} </h4>
        
                                <div className="d-flex">
        
                                    <p> Rating : </p>
        
                                    <FaStar  className="starIcon"/>
        
                                    <p className="rating">  {jobDetails.rating} </p>
                                </div>
        
                            </div>
        
                            <div> 
        
                                <img src={jobDetails.company_logo_url} className="logoUrlImg" />
        
                            </div>
        
                        </div>
        
                        <div className="d-flex">
        
                            <div className="d-flex"> 
        
                                <FaBriefcase className="allJobIcon"/>
        
                                <p className="allParaIcon"> {jobDetails.employment_type}  | </p>
        
                            </div>
        
                            <div className="d-flex">
        
                                <FaIndianRupeeSign className="allJobIcon"/>
        
                                <p className="allParaIcon"> {jobDetails.package_per_annum}  | </p>
        
                            </div>
        
                            <div className="d-flex">
        
                                <FaLocationDot className="allJobIcon"/>
        
                                <p className="allParaIcon"> {jobDetails.location} </p>
        
                            </div>
        
                        </div>
                        <hr className="hrTag" />
        
                        <div className="mt-2">
        
                            <b> Description  </b>
        
                            <p className="decText mt-2"> {jobDetails.job_description} </p>
        
                        </div>

                        <div className="mt-4">
        
                            <b className='mt-2'> Skills  </b>
        
                            <ul className="skillsUl">
                                
                                {
                                    skills.map(eachSkill => (

                                        <li key={eachSkill.name} className="skillItem">
                                            
                                            <div className='mt-3 divSkill'>

                                                <img src={eachSkill.image_url} className="skillImg" />
                                            
                                                <span className='ml-3 mt-3'>{eachSkill.name}</span>

                                            </div>

                                        </li>

                                    ))
                                }

                            </ul>
        
                        </div>


                        <div className='mt-4'>

                            <b className='mt-2'> Life at Company </b>

                            <div className='lifeDiv'>

                                <div className='sec1Para'> 

                                    <p className='mt-2 lifePara'> {lifeAtCompany.description} </p>

                                </div>

                                <div className='sec2Img'>

                                    <img src={lifeAtCompany.image_url} className='imgLife'/>

                                </div>

                            </div>

                        </div>
        
                    </li>

                </ul>

                {/* <div className='mainSimilar'>

                    <ul>

                        {
                            allValue.userArr.map( each => < DisplayJobsCard eachCard = {each} key = {each.id} /> )
                        }

                    </ul>

                </div> */}

                <div className="mainSimilar">

                    <h4> Similar Jobs </h4>

                    <ul className="similarJobsUl">

                        {
                            similarJobs.map( eachJob => ( < SimilarJobsCard key={eachJob.id} job={eachJob} /> ))
                        }

                    </ul>

                </div>

            </div>

        </>
    )
}

export default DetailedJobItem