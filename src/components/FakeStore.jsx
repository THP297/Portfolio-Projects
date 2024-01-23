
export default function FakeStore() {
    return (
        <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <p style={{fontStyle:"italic"}}>Description</p>
          <p>This is a project i used to learn Redux Toolkit. It appears as a e-commerce clothes store using 
            <a href="https://fakestoreapi.com/"> fakestore api</a></p>
            <p>Skills: Reactjs, Redux Toolkit, API call, Antd design.</p>
            <p>Achievements: <br />
              - Knowing <strong>Redux Toolkit</strong> to manage state in Reactjs. <br />
              - Handle case errors, loading products</p>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{fontStyle:"italic"}}>Demo Video</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GJxoN27_GrI?si=BuojKMa3hKogBl6N" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <p style={{fontStyle:"italic"}}>November 2023 - December 2023</p>
      <a href="https://github.com/THP297/FakeStore">Github Repo</a>
        </>
    )
  }