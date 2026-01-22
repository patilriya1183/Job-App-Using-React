import { FaStar, FaBriefcase, FaLocationDot } from "react-icons/fa6"
import './style.css'

const SimilarJobsCard = ({ job }) => {

  return (

    <li className="similarJobCard shadow rounded p-3">

      <div className="d-flex align-items-center mb-2">

        <img src={job.company_logo_url} className="logoUrlImg" />

        <div className="ml-3">

          <h5>{job.title}</h5>

          <div className="d-flex align-items-center">
            
            <span> Rating : </span>

            <FaStar className="starIcon" />

            <span>{job.rating}</span>

          </div>

        </div>

      </div>

      <b>Description</b>

      <p className="decText">{job.job_description}</p>

      <div className="d-flex mt-2">

        <div className="d-flex mr-3">

          <FaBriefcase className="allJobIcon" />

          <span>{job.employment_type} </span>

        </div>

        <div className="d-flex">

          <FaLocationDot className="allJobIcon" />

          <span>{job.location}</span>

        </div>

      </div>

    </li>

  )

}

export default SimilarJobsCard
