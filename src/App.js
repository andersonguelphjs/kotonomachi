import logo from './logo.svg';
import classes from './App.module.css';

function App() {
  console.log(classes)
  return (
    <div className="App">


<div className={classes.bgimg1}>
  <div className={classes.caption}>
  <span className={classes.border}>KOTONOMACHI</span>
  </div>
</div>

<div style={{color: "#777",backgroundColor:"white",textAlign:"center",padding:"50px 80px",textAlign: "justify"}}>
  <h3 style={{textAlign:"center"}}>Parallax Demo</h3>
  <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
</div>

<div className={classes.bgimg2}>
  <div className={classes.caption}>
  <span className={classes.border} style={{backgroundColor:"transparent",fontSize:"25px",color: "#f7f7f7"}}>TRANSCRIPTION</span>
  </div>
</div>

<div style={{position:"relative"}}>
  <div style={{color:"#ddd",backgroundColor:"#282E34",textAlign:"center",padding:"50px 80px",textAlign: "justify"}}>
  <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
  </div>
</div>

<div className={classes.bgimg3}>
  <div className={classes.caption}>
  <span className={classes.border} style={{backgroundColor:"transparent",fontSize:"25px",color: "#f7f7f7"}}>TRANSLATION</span>
  </div>
</div>

<div style={{position:"relative"}}>
  <div style={{color:"#ddd",backgroundColor:"#282E34",textAlign:"center",padding:"50px 80px",textAlign: "justify"}}>
  <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
  </div>
</div>

<div className={classes.bgimg1}>
  <div className={classes.caption}>
  <span className={classes.border}>CONTACT</span>
  </div>
</div>


    </div>
  );
}

export default App;
