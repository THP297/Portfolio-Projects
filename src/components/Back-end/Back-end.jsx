import { Tabs } from 'antd';
import KeepNotes from '../KeepNotes';
import Flask from '../Flask';
import MultiChitChat from '../MultiChitChat';

const { TabPane } = Tabs;
export default function Backend() {

    const handleTabChange = (activeKey) => {
        console.log(`Tab changed to ${activeKey}`);
    }

  return (
    <Tabs defaultActiveKey="1" onChange={handleTabChange}>

    <TabPane tab="KeepNotes" key="1">
        <KeepNotes/>
    </TabPane>

    <TabPane tab="Stock" key="2">
        <Flask/>
    </TabPane>

    <TabPane tab="MultiChitChat" key="3">
        <MultiChitChat/>
    </TabPane>
    
  </Tabs>
  )
}
