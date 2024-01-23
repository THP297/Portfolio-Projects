import { Tabs } from 'antd';
import KeepNotes from '../KeepNotes';
import FilmFetch from '../FilmFetch';
import MultiChitChat from '../MultiChitChat';
import FakeStore from '../FakeStore';
import Tetris from '../Tetris';
import Flask from '../Flask';
const { TabPane } = Tabs;   
export default function All() {

    const handleTabChange = (activeKey) => {
        console.log(`Tab changed to ${activeKey}`);
    }

  return (
    <Tabs defaultActiveKey="1" onChange={handleTabChange}>

    <TabPane tab="KeepNotes" key="1">
        <KeepNotes/>
    </TabPane>

    <TabPane tab="FilmFetch" key="2">
        <FilmFetch/>
    </TabPane>

    <TabPane tab="Stock" key="3">
        <Flask/>
    </TabPane>

    <TabPane tab="FakeStore" key="4">
      <FakeStore/>
    </TabPane>

    <TabPane tab="Tetris" key="6">
      <Tetris/>
    </TabPane>

    <TabPane tab="MultiChitChat" key="5">
      <MultiChitChat/>
    </TabPane>


  </Tabs>
  )
}
