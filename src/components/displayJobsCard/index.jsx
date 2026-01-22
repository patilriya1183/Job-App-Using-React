

import { FaStar, FaBriefcase, FaIndianRupeeSign, FaLocationDot } from "react-icons/fa6";
import './style.css'
import { Link } from "react-router-dom";



const DisplayJobsCard = ({eachCard}) => {

    return(        

        <Link to = {`/jobs/${eachCard.id}`} style={{textDecoration : "none", color : "white"}}>

            <li className='jobCard rounded shadow p-3 mb-3' >

                <div className="div-1">

                    <div>
                        <h4>  {eachCard.title} </h4>

                        <div className="d-flex">

                            <p> Rating : </p>

                            <FaStar  className="starIcon"/>

                            <p className="rating">  {eachCard.rating} </p>
                        </div>

                    </div>

                    <div> 

                        <img src={eachCard.company_logo_url} className="logoUrlImg" />

                    </div>

                </div>

                <div className="d-flex">

                    <div className="d-flex"> 

                        <FaBriefcase className="allJobIcon"/>

                        <p className="allParaIcon"> {eachCard.employment_type}  | </p>

                    </div>

                    <div className="d-flex">

                        <FaIndianRupeeSign className="allJobIcon"/>

                        <p className="allParaIcon"> {eachCard.package_per_annum}  | </p>

                    </div>

                    <div className="d-flex">

                        <FaLocationDot className="allJobIcon"/>

                        <p className="allParaIcon"> {eachCard.location} </p>

                    </div>

                </div>
                <hr className="hrTag" />

                <div className="mt-2">

                    <b> Description  </b>

                    <p className="decText mt-2"> {eachCard.job_description} </p>

                </div>

            </li>

        </Link>
    )

}

export default DisplayJobsCard