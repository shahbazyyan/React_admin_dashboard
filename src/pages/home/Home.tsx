import Chartbox from '../../components/chartbox/Chartbox';
import Topbox from '../../components/topbox/Topbox';
import { chartBoxUser } from '../../data';
import './home.scss';

function Home() {
  return (
    <div className="home">
        <div className="box box1">
          <Topbox/>
        </div>
        <div className="box box2"><Chartbox {...chartBoxUser} /></div>
        {/* <div className="box box3"><Chartbox/></div> */}
        <div className="box box4">box4</div>
        {/* <div className="box box5"><Chartbox/></div>
        <div className="box box6"><Chartbox/></div> */}
        <div className="box box7">Box7</div>
        <div className="box box8">Box8</div>
        <div className="box box9">Box9</div>
    </div>
  )
}

export default Home