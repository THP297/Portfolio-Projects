
export default function FilmFetch() {
    return (
        <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <p style={{fontStyle:"italic"}}>Description</p>
          <p>This project appears to be a web application for a movie database.</p>
          <p>Skills: HTML, CSS, Javascript, OOP concepts</p>
          <p>Achievements: <br />

            - Developed the application using modern JavaScript, implementing over <strong>20+</strong> different classes and functions. <br />
            - Using design patterns such as <strong>Template Method</strong> to write reusable code that fetch API to create <strong>4</strong> different sections in index page. Observer pattern to notify the new action from user.</p>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{fontStyle:"italic"}}>Demo Video</p>   
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6ZPrVBxJ_ys?si=h52XpnuEbfsnblQh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <p style={{fontStyle:"italic"}}>October 2023 - November 2023</p>
      <a href="https://github.com/THP297/FilmFetch">Github Repo</a>
        </>
    )
  }