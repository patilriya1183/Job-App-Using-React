import Header from '../header';
import './style.css';
import bgImg from '../../assets/bg.png';
import  { Link } from 'react-router-dom';

const Home = () =>{


    return (

        <>
            <Header/>

            <div className='homeCont'>

                <div className='sec-1'>

                    <h1 className='heading'> Find The Job That Fits Your Life </h1>
                    <br />

                    <p className='para'> Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential. </p>
                    <br />

                    <Link to= "/jobs"  className='btn btn-jobs'> Find Jobs </Link>

                </div>

                <div className='sec-2 '>

                    <img src={bgImg} className='bgImg2' /> 

                </div>

            </div>

        </>
    );

}

export default Home