import { Tabs } from 'antd';
import KeepNotes from '../KeepNotes';
import Flask from '../Flask';

const { TabPane } = Tabs;
export default function Python() {

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

  </Tabs>
  )
}
