import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapsible from 'react-collapsible';
import { Container, Row, Col, UncontrolledCollapse, Button  } from 'reactstrap';
import Footer from '../Footer/footer'

class About extends React.Component{
  render(){
    document.body.style.backgroundColor= "white";
    //document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";
        return (
      <div>
   
        <div className="boxabout">
        <h1 className="subLinks">About Me</h1>
        <hr className="hrstyleblack"/>
      
       {/* <Container fluid>
          <Row>
            <Col md="2">
              <h1 className="aboutlinks">
              <AnchorLink className="anchor1" offset="200"  href='#Education'>Education</AnchorLink>
              </h1>
            </Col>
            <Col md="2">
            <h1 className="aboutlinks"><AnchorLink  className="anchor1" offset="200"  href='#Experience'>Experience</AnchorLink>
            </h1>
            </Col> 
            <Col md="2">
            <h1 className="aboutlinks"><AnchorLink  className="anchor1" offset="200"  href='#Experience'>Experience</AnchorLink>
            </h1>
            </Col> 
            <Col md="2">
            <h1 className="aboutlinks"><AnchorLink  className="anchor1" offset="200"  href='#Experience'>Experience</AnchorLink>
            </h1>
            </Col> 
            <Col md="2">
            <h1 className="aboutlinks"><AnchorLink  className="anchor1" offset="200"  href='#Experience'>Experience</AnchorLink>
            </h1>
            </Col> 
          </Row>
        </Container>
       */}

          <p className="aboutme">
        I am a third year Computer Science student studying at Ryerson University. In terms of my studies I am currently interested in the fields of artificial intelligence, data sciences, software development, and computer graphics. My dream job in computer science would be to create or help the development of an indie game, as I love the fresh and unique aspects that are just missing in many mainstream games today. As for myself, I am always eager and excited to learn new things and create new projects that both further my learning and help others. In my spare time you can find me enjoying walks with my dog, practicing martial arts, playing Frisbee, and weightlifting. 
        </p>   
          <div>
            <h1 className="subabouthead">Goals</h1>
           <p className="aboutme"> I always like to set goals for myself to track personal progress and try to achieve bigger feats! For this term I had several academic and personal goals.</p>
         
           <Container fluid>
           <Row>
             <Col md="6">
             <p className="aboutme">Academic Goals</p>
          <ul>
            <li>Try and find a Summer Internship Experience.</li>
            <li>Try and obtain a 3.5 GPA for this semester.</li>
            <li>Create better studying habits before exams.</li>
          </ul>
             </Col>
             <Col md="6">
             <p className="aboutme">Personal Goals</p>
          <ul>
            <li>Maintain and continue my gym routine for the school year.</li>
            <li>Lift More!</li>
            <li>Play more volleyball.</li>
          </ul>
             </Col>
           </Row>
         </Container> 
         
          </div> 
          <div>
          <h1 className="subabouthead">Interests</h1>
          </div>
          <div className="centeralign">

        <Container fluid>
                  <Row className="spacer1">
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF" icon={['fab', 'dev']} size="2x"/>
                    <p className="iconsT"> &emsp;Web Dev</p>
                    <br/>
                    <p>On my spare time I like to create webpages.</p>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF" icon={['fas', 'medal']} size="2x"/>
                    <p className="iconsT"> &emsp;Sports</p>
                    <br/>
                    <p>I play many sports such as karate, frisbee, basketball, and volleyball.</p>                    
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF"icon={['fas', 'dumbbell']} size="2x"/>
                    <p className="iconsT"> &emsp;Fitness</p>
                    <br/>                
                    <p>Growing up as a very skinny kid, I try to change that with weightlifting.</p>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF" icon={['fab', 'java']} size="2x"/>
                    <p className="iconsT"> &emsp;Coding</p>
                    <br/>
                   <p>Fluent in many coding languages such as Java, C, Bash, etc.</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                    <Button className="btn-custom1" id="webdev" style={{ marginBottom: '1rem' }}>
                      More
                    </Button>
                    <UncontrolledCollapse  toggler="#webdev">
                    <p>In the past during high school all I have played around with basic HTML and CSS websites and it was not until University where I have taken a course which specializes in this. During, second year I took a course called CPS530 which was an introductory course to web development. Here is where I learned the basics of different front-end and back-end frameworks and how the whole process worked. Then I saw some of my other friends creating their own web portfolios and thought it would’ve been a good idea to make one for myself and taaadaa this is how this site became into existence. Now I work on my web development skills in my spare time, creating web applications here and there and always trying to update my portfolio. Next steps for me in this field is to learn better ways to create a more user friendly UI. </p>   
                    </UncontrolledCollapse>
                    </Col>
                    <Col md="3">
                    <Button className="btn-custom1" id="sports" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#sports">
                    <p>I would like to identify as an active individual who enjoys a lot of team sports. Growing up I always played basketball and volleyball with my friends during recess and I still enjoy playing recreationally today. In addition, as a child I was enrolled into Karate classes since I had a love for Bruce Lee and Jackie Chan movies and I immediately fell in love with it. Karate has been a staple in my life since 2007 till now and for personal achievement I have gotten up to the rank of third dan black belt (3rd-degree black belt). Karate has taught me many life skills such as self-confidence, responsibility, perseverance, and many social skills. Today, I still teach part time as it is something that I enjoy doing and it always challenges me to problem solve as I try to organize and instruct large classes of many ages. As for competitive team sports, ultimate frisbee was a sport that I accidently tried out for during high school and really enjoyed. It taught me how valuable communication is in a team dynamic and how to win as a team. </p>
                    </UncontrolledCollapse>
                    </Col>
                    <Col md="3">
                    <Button className="btn-custom1" id="fitness" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#fitness">
                    <p>Growing up I was always a lean and skinny boy which has always somewhat bothered me. So, one day one of my best friends Patrick introduced me to lifting and going to the gym and that really is what pushed me to try and change my physical appearance. In one summer, I gained 20lbs and slowly integrated going to the gym into my daily routine. I gone from not being able to lift even the bar all the way to hitting 155lbs for bench press, 315 for deadlift, and 225 for squatting. Being able to hit these numbers in such a short period of time really reassured me that I was on the right track and was a huge confidence booster to myself. These numbers are definitely not something to brag about, but it is a start and I am continuing to try to best these numbers every school term.</p>
                    </UncontrolledCollapse>
                    </Col>
                    <Col md="3">
                    <Button className="btn-custom1" id="java" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#java">
                    <p>As a computer science student, it is clear that I love to code! Personally, I like the problem-solving aspect of coding and it is the most satisfying feeling to finally solve a hard problem or to make a program that helps someone with some task no matter how simple it is.</p>
                    </UncontrolledCollapse>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF" icon={['fas', 'dog']} size="2x"/>
                    <p className="iconsT">&emsp; Pets</p>
                    <br/>
                    <p>I love animals, and I am a Chow Chow owner.</p>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF"icon={['fas', 'car']} size="2x" />
                    <p className="iconsT">&emsp; Cars</p>
                    <br/>     
                    <p>Car enthusiast and excited to work on my own car.</p>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF"icon={['fas', 'gamepad']} size="2x" />
                    <p className="iconsT">&emsp; Gaming</p>
                    <br/>
                    <p>Very big fan of indie games and love to explore more niche games.</p>                  
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF"icon={['fas', 'plane']} size="2x" />
                    <p className="iconsT"> &emsp;Travel</p>
                    <br/>
                    <p>My dream is to travel the world and explore new things and cultures.</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                    <Button className="btn-custom1" id="pets" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#pets">
                    <p>I love playing with my dog Pumpkin, who is currently 2 years old. Unfortunately, she suffers from a rare form of canine cancer and will not be with the family very soon. So for the next year I will be trying to provide everything and anything to make her last year a very memorable one!</p>
                    </UncontrolledCollapse>
                    </Col>
                    <Col md="3">
                    <Button className="btn-custom1" id="music" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#music">
                    <p>I recently got interested in DIY car modifying and am a proud owner of a 2019 Subaru WRX. Some future modifications that I would like to do are: adding in a new cold air intake, adding a cat-back exhaust system, and a stage 1 tune!</p>
                    </UncontrolledCollapse>
                    </Col>
                    <Col md="3">
                    <Button className="btn-custom1" id="gaming" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#gaming">
                    <p>I have always been a supporter of indie games as I find the quality of the gameplay and storylines are usually better thought of and implemented. Game mechanics are unique and different from bigger title games, which always make them refreshing and new to play. Some games I am currently playing are: The Binding of Isaac, Slay the Spire, Dead Cells, Dicey Dungeons, Streets of Rouge, and many more! It would be a dream of mine to one day be part of a development team for a project like this.</p>
                    </UncontrolledCollapse>
                    </Col>
                    <Col md="3">
                    <Button className="btn-custom1" id="travel" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#travel">
                    <p>Last year was my first solo trip without my family to Los Angeles and it was a blast. One day I would like to travel and photograph the world!</p>
                    </UncontrolledCollapse>
                    </Col>
                  </Row>
                </Container>
                </div>

        </div>

        <div className="javaBox">
          <Collapsible open="true" trigger="Education">
          <Container className="RU" fluid>
            <Row>
               <Col md="4"/> 
               <Col md="4"><img src="https://i.imgur.com/6dXhSzX.png" alt="ryersonlogo"/></Col> 
               <Col md="4"/> 
            </Row>
          </Container>
          <p className="text">I am currently a third year student studying Computer Science at Ryerson University. Here I gain the proper experience for coding languages while learning about core concepts such as data structures, algorithms, networks, and operating systems. This semester I am currently enrolled in Computer Security, Database Systems, Artificial Intelligence, and Computer Graphics. Some projects that I will be working on are: A clothing store database system with SQL and Java, a submarine battle simulator with GLU and C++, the further development of this webpage, and a weather app with Angular.</p>
          </Collapsible>
        </div>
        <div className="javaBox">
        <Collapsible open="true" trigger="Experience">
          <p className="text">Currently I am working part-time for Northern Karate where I: </p>
          <ul>
            <li>Bring in a new dynamic of high energy classes that engages the students in a positive learning environment, which increases the development speed of students by 25% and overall class attendance by 30%. </li>
            <li>Am in charge of the organization of large classes that maximize the use of all resources and to ensure a high level of efficiency at all times. </li>
            <li>Utilize strong interpersonal and communication skills to instruct students of all levels.</li>
          </ul>
          <p className="text"> <strong>A major career goal of mine is to:</strong> find an internship experience for the Summer of 2020 in the Computer Science field so I can further broaden my studies as I get a glimpse into a possible field that I may be working post-graduation.</p>
          </Collapsible>
        </div>
       <Footer/>
    </div>
    )
  }
}
export default About;