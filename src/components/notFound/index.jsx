import './style.css';
import img from '../../assets/pageNotFound.jpg'

const NotFound = () =>{

    return (

        <div>

            <img src={img} alt="" className='w-100' style={{height : "100vh"}} />

            {/* <br /><br />

            <h1> Please correct the path you want to access!!! </h1> */}

        </div>
    );

}

export default NotFound