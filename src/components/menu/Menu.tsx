import { Link } from 'react-router-dom';
import './menu.scss';
import { menu } from '../../data';

function Menu() {
  return (
    <div className='menu'>
      {menu.map((item) => (
      <div className="item" key={item.id}>
      <span className='title'>{item.title}</span>
      {item.listItems.map((lists) => (
      <Link className='list-item' to={lists.url} key={lists.id}>
           <img src={`/${lists.icon}`} alt="listicons"/>
           <span className="list-item-title">{lists.title}</span>
      </Link>
      ))}
    </div>
      ))}


    </div>
  )
}

export default Menu