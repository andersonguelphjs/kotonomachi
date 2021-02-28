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
  <h3 style={{textAlign:"center"}}>コトノマチ（言の真知）</h3>
  <p>私たちは音声を文字にするサービスを提供しています。お客様のニーズにお答えするために、文字起こしのエキスパートが低価格で迅速な納品を心がけております。インタビュー、ロケ素材、番組収録、講演会、AI技術向上のための音声データ、映像音声の文字起こしなどを承ります。英語音声から日本語の翻訳文字起こし、書類、文字からの翻訳も承ります。短い尺のものから、大きなプロジェクトまでお気軽にお問い合わせください。</p>
</div>

<div className={classes.bgimg2}>
  <div className={classes.caption}>
  <span className={classes.border} style={{backgroundColor:"transparent",fontSize:"25px",color: "#f7f7f7"}}>TRANSCRIPTION</span>
  </div>
</div>

<div style={{position:"relative"}}>
  <div style={{color:"#ddd",backgroundColor:"#282E34",textAlign:"center",padding:"50px 80px",textAlign: "justify"}}>
  <p className={classes.subText}>Voice &nbsp; Film &nbsp; Text &nbsp; AI Learning</p>
  </div>
</div>

<div className={classes.bgimg3}>
  <div className={classes.caption}>
  <span className={classes.border} style={{backgroundColor:"transparent",fontSize:"25px",color: "#f7f7f7"}}>TRANSLATION</span>
  </div>
</div>

<div style={{position:"relative"}}>
  <div style={{color:"#ddd",backgroundColor:"#282E34",textAlign:"center",padding:"50px 80px",textAlign: "justify"}}>
  <p className={classes.subText}>Fast &nbsp; accurate &nbsp; service</p>
  </div>
</div>

<div className={classes.bgimg1}>
  <div className={classes.caption}>
  <span className={classes.border}>お問い合わせ<br></br>
  &nbsp;anderson@kotonomachi.com<br></br>
  &nbsp;050-5277-5381<br></br>
  &nbsp;+1-416-912-5931<br></br>
</span>
  </div>
</div>


    </div>
  );
}

export default App;
