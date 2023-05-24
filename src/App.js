
import me from '../src/images/me.jpg';
import gmail from '../src/images/gmail.png';
import linkedin from '../src/images/linkedin.png';
import twitter from '../src/images/twitter.png';
import instagram from '../src/images/instagram.png';
import mockups from '../src/images/mockups.png';
import mywork from '../src/images/mywork.png';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';

let mySkills = [
  "SEO,",
  "Digital Marketing,",
  "Microsoft 365,",
  "Social Media Marketing,",
  "Mockup Design,",
  "Copywriting,", 
  "Front End Development,"
];

let myExperience = [
  "I have worked on many real world on site projects in the land surveying and construction fields, and am very accustomed to persistant, hard work.",

  "I am a beginner in the Digital Marketing, Inbound Sales and SEO fields.",

  "I have a little experience in freelance front end development.",
  
  "I am experienced in constructing mockups for small startups, and have experience in social media inbound marketing, and, video editing."
];



function MySkills(props) {
  return (
      <>
        <h3 className='my-skills-head'>{props.head}</h3>
        <ul> 
              {props.list.map(i => <li>{i}</li>)}
        </ul> 
      </>
  );
}

function SocialButton(props) {
  return (
    <img src={props.src} className={props.classNames} onClick={props.click} alt='img'/>
  );
}

function Button(props) {
  return (
    <button type='button' onClick={props.click} className={props.classNames}>{props.txt}</button>
  );
}

function MyDivider(props) {
  return (
    <div className='top-of-page-two'></div>
  )
}

let redirectToPage = ref => () => {
  window.location.href = ref; 
}; 


let twitterPage = redirectToPage("https://twitter.com/AJ091019");
let linkedinPage = redirectToPage("https://www.linkedin.com/in/anthony-schemmer-9b42a226a/");
let instagramPage = redirectToPage("https://www.instagram.com/justaj18_/");


 function App() {
  return (
    <div className="App">
      <header className="main-head">
        <div className='intro'>
          <h1 style={{ fontSize: 100 }}>Hi I'm <br></br> Anthony</h1>
        </div>

        <div className='contacts'>
          <SocialButton src={gmail} 
          className={"b gmail-logo"} 
          click={() => alert("gmail")} /> 

          <SocialButton src={twitter} 
          className={"b twitter-logo"} 
          click={twitterPage} /> 

          <SocialButton src={linkedin} 
          className={"b linkedin-logo"} 
          click={linkedinPage} /> 

          <SocialButton src={instagram} 
          className={"b instagram-logo"} 
          click={instagramPage} /> 
        </div>
      </header>
      <body>


        <div className= 'center-line'>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </div>


        <div className= 'left-right-body'>
          <div className='left'>
            <div className='picture'>
              <SocialButton src={me}
              className={" my-picture "} 
              click={() => {}} />
            </div>

            <div className='button-lineup'>
              <a href='#page-1'>
                <Button click={() => {}} classNames={"btn btn-primary btn-lg"} txt={'Mockups'}/> 
              </a>
              <a href='#page-2'>
              <Button click={() => {}} classNames={"btn btn-primary btn-lg"} txt={'Copy'}/> 
              </a>

              <Button click={() => {}} classNames={"btn btn-primary btn-lg"} txt={'Certifications'}/> 
            </div>
          </div>

          <div className='right'>
            <div className='skills'> 
              <MySkills head={'Skills'} list={mySkills}/>
            </div>
            <div className='exp'>
              <MySkills head={'Experience'} list={myExperience}/>
            </div>
          </div>
       </div>
       
  <div className='page-two'>
        <MyDivider />

        <div className= 'mockups-title-section'>
          <div className='mockups-title'>
            <h1 style={{ fontSize: 135 }}>Mockups (Logos) </h1>
            <div className='line-space'> 
              <MyDivider />
            </div>
        </div>
    </div>

      <div id='page-1' className='mockup-section'>
        <SocialButton src={mockups}
        className={" my-mockups "} 
        click={() => {}} />
      <div></div>
    </div>
 </div>

    <div className= 'page-three'> 
      <MyDivider />

        <div className= 'copy-section' id='page-2'>
          <div className='copy-title'>
            <h1 style={{ fontSize: 135 }}>Copy + Charts </h1>

          <div className='line-space'> 
            <MyDivider />
          </div>
        </div>

      <div className='my-work-page'>
        <SocialButton src={mywork}
        className={" my-work "} 
        click={() => {}} />
        </div>
      </div>
    </div>

      </body>
      <footer>
      </footer>
    </div>
  );
}

export default App;


/* <button type="button" 
class="js-scroll btn btn-lg btn-default m-t-1" 
data-scroll-to="#speakers">Learn More</button> */
