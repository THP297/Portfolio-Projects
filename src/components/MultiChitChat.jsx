
export default function MultiChitChat() {
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: 1 }}>
        <p style={{fontStyle:"italic"}}>Description</p>
        <p>A real time chatting application with multiple chat room let users create and adding friends.</p>
        <p>Skills: Reactjs, Firebase, Antd design</p>
        <p>Achievements: knowing how to use react hooks <strong>useContext, useEffect, useMemo, useParams, state management</strong>. </p>
      </div>
      <div style={{ flex: 1 }}>
        <p style={{fontStyle:"italic"}}>Demo Video</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ImiuWnZPND4?si=Fc1VWwu-zbKRakku" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>
    </div>
    <p style={{fontStyle:"italic"}}>February 2023 - March 2023</p>
    <a href="https://github.com/THP297/KeepNote">Github Repo</a>
    </>
  )
}