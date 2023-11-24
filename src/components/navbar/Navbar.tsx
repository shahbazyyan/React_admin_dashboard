import './navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="/pie-chart.png" alt="logo"/>
        <span>dashbordian</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/app.svg" alt="app" className="icon" />
        <img src="/expand.svg" alt="expand" className="icon" />
        <div className="notification">
           <img src="/notifications.svg" alt="notification" />
           <span>1</span>
        </div>
        <div className="user">
          <img src="/userpic.jpeg" alt="user"/>
          <span>David</span>
        </div>
        <img src="/settings.svg" alt="settings" className="icon" />
      </div>
    </div>
  )
}

export default Navbar