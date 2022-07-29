import { useEffect } from 'react'
import Hls from 'hls.js'
import './App.css'

function App() {

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.attachMedia(document.getElementById('video'));
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource("http://71.175.108.112:8080/hls/stream.m3u8");
      });
    }
  })

  return (
    <div className="App">
      <div className="header">
        <h1>Birdcam</h1>
        <p>Watch the baby birds grow!  ...or, get eaten by an Owl or something.</p>
      </div>
      <div className="videoContainer">
        <video id="video" autoPlay={true} controls="controls" type='application/x-mpegURL' />
      </div>
      <div className="content">
        <h2>What is this?</h2>
        <p>Some <a href="https://www.allaboutbirds.org/guide/House_Finch/overview">House finches</a> have decided to make a nest in ony of my window panes.  So, I did what any techie would do, I set up an old Raspberry Pi and an old webcam to keep tabs on them!</p>
        <h2>What will I see?</h2>
        <p>There are 2 baby birds, who are tended by the parent birds.  The female is gray colored, while the male has a red head.  Both of them seem to feed the birds.</p>
      </div>
    </div >
  )
}

export default App
