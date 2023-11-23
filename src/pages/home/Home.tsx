import PieChartBox from '../../components/PieChartBox/PieChartBox';
import Barchartbox from '../../components/barchartbox/Barchartbox';
import Chartbox from '../../components/chartbox/Chartbox';
import Topbox from '../../components/topbox/Topbox';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data';
import './home.scss';

function Home() {
  return (
    <div className="home">
        <div className="box box1">
          <Topbox/>
        </div>
        <div className="box box2"><Chartbox {...chartBoxUser} /></div>
        <div className="box box3"><Chartbox {...chartBoxRevenue}/></div>
        <div className="box box4"><PieChartBox/></div>
        <div className="box box5"><Chartbox {...chartBoxProduct}/></div>
        <div className="box box6"><Chartbox {...chartBoxConversion}/></div>
        <div className="box box7"></div>
        <div className="box box8"><Barchartbox {...barChartBoxVisit}/></div>
        <div className="box box9"><Barchartbox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home