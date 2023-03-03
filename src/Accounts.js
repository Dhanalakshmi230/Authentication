import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import{connect} from'react-redux';
function Accounts(props) {
console.log(props)
const {isLoggedIn}=props
const navigate=useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/login');
        }
        
        console.log(isLoggedIn);
      }, [isLoggedIn,navigate]);
    console.log(isLoggedIn)
    
    return (
        <div>{isLoggedIn ?
            <h6>this is account Page</h6>
            :
            <h6>this is private page</h6>}
        </div>
    )
}


const mapStateToProps = (state) => {
  return {
     isLoggedIn: state.isLoggedIn,
   };
 };
 export default connect (
  mapStateToProps,
)(Accounts);
