import './topbox.scss';
import { topDealUsers } from '../../data';

function Topbox() {
  return (
    <div className='top-box'>
        <h1>Top Clients</h1>
        <div className="list">
            {topDealUsers.map(user => (
                <div className="list-item" key={user.id}>
                    <div className="user">
                        <img src={user.img} alt="user"/>
                        <div className="user-text">
                            <span className="username">{user.username}</span>
                            <span className='email'>{user.email}</span>
                        </div>
                    </div>
                    <span className="amount">${user.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Topbox