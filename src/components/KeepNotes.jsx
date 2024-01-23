
export default function KeepNotes() {
    return (
        <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <p style={{fontStyle:"italic"}}>Description</p>
            <p>A Web application to noting text, images using python and its framework Django. </p>
            <p>Skills: Jquery, Django, SCSS, Bootstrap 5, ORM </p>
            <p>Achievements: <strong>Model-View-Controller (MVC) architecture</strong>. Learn how models display data structures, views handle queries and generate responses and templates work with the presentation layer.</p>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{fontStyle:"italic"}}>Demo Video</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/88bkYlZSv_o?si=_2FLLU82nuIvEjoE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <p style={{fontStyle:"italic"}}>May 2023 - July 2023</p>
      <a href="https://github.com/THP297/KeepNote">Github Repo</a>
        </>
    )
  }