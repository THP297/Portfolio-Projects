import { Tabs } from 'antd';
import { Link } from 'react-router-dom';

import All from '../components/All/All';
import Frontend from '../components/Front-end/Front-end';
import Backend from '../components/Back-end/Back-end';

const { TabPane } = Tabs;

const SideTabs = () => {
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

      <TabPane tab="Front-end" key="2">
        <Frontend/>
      </TabPane>

      <TabPane tab="Back-end" key="3">
        <Backend/>
      </TabPane>

    </Tabs>
    </div>
  );
};

export default SideTabs;