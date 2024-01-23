import { Tabs } from 'antd';
import MultiChitChat from '../MultiChitChat';
import FakeStore from '../FakeStore';
import FilmFetch from '../FilmFetch';
import Tetris from '../Tetris';

const { TabPane } = Tabs;
export default function Javascript() {

    const handleTabChange = (activeKey) => {
        console.log(`Tab changed to ${activeKey}`);
    }

  return (
    <Tabs defaultActiveKey="1" onChange={handleTabChange}>

    <TabPane tab="FilmFetch" key="1">
        <FilmFetch/>
    </TabPane>

    <TabPane tab="FakeStore" key="2">
      <FakeStore/>
    </TabPane>
    
    <TabPane tab="Tetris" key="3">
      <Tetris/>
    </TabPane>

    <TabPane tab="MultiChitChat" key="4">
      <MultiChitChat/>
    </TabPane>


  </Tabs>
  )
}
