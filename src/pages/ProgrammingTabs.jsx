import { Tabs } from 'antd';
import Javascript from '../components/Javascript/javascript';
import Python from '../components/Python/Python';
import All from '../components/All/All';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;

const ProgrammingTabs = () => {
  const handleTabChange = (activeKey) => {
    console.log(`Tab changed to ${activeKey}`);
  };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

      <div>
        Filter by:  
        <Link style={{textDecoration:"none",color:"blue"}} to="/"> Programming Languages</Link> | 
        <Link style={{textDecoration:"none",color:"blue"}} to="/side">Side</Link>
    </div>

    <Tabs defaultActiveKey="1" onChange={handleTabChange} style={{width:"60%"}}>
      <TabPane tab="All" key="1">
        <All/>    
      </TabPane>

      <TabPane tab="Python" key="2">
        <Python/>
      </TabPane>

      <TabPane tab="Javascript" key="3">
        <Javascript/>
      </TabPane>
    </Tabs>
    </div>
  );
};

export default ProgrammingTabs;