import Single from '../../components/single/Single';
import { singleUser } from '../../data';
import './user.scss';

function User() {
  return (
    <div className='product'>
        <Single {...singleUser}/>
    </div>
  )
}

export default User