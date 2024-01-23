
export default function Tetris() {
    return (
        <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
        <p style={{fontStyle:"italic"}}>Description</p>
        <p>An informal Tetris game with multiple color tetromino, rotate and moving feature </p>
        <p>Skills: Typescript, OOP concepts</p>
        <p>Achievements: Knowing how to define types using Typescript, handling collision of Blocks in 2d Array </p>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{fontStyle:"italic"}}>Demo Video</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LiVpEEcEnwU?si=05qOu6EI5SUgeVKM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <p style={{fontStyle:"italic"}}>December 2023 - January 2024</p>
      <a href="https://github.com/THP297/Tetris">Github Repo</a>
        </>
    )
  }