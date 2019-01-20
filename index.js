var app = new Vue({el: '#appSpeak',
  data:{
    message: "Hello World"
  },
  methods: {
    myFunction: function(){
    responsiveVoice.speak(app.message)
    } 
  }
});

var paragraph = {
	company: 'Avery Dennison',
	position: 'IT Analyst',
	location: 'Glendale, CA',
	workPeriod: 'May 2018 - Present',
	text:'Managed the development of an application that detected duplicate employee accounts across multiple databases. Researched, identified, and referred an alternative course of action as opposed to original approach to project.  Configuring layout of applications and migrating data for the Identity and Access Management (IAM) department.  Wrote up a document that lays out machine learning concepts and how it can be applied in the workplace. This document references practices utilizing open source APIs from Google such as TensorFlow, TensorBoard, and Scikit Learn in combination with Python. Researching and developing a blockchain app to determine the pros and cons for implementing in the company.'
  } 


var paragraphSJ = {
  company: 'Saint Jospeh High School',
  position: 'IT Assistant',
  location: 'Lakewood, CA',
  workPeriod: 'April 2017 - May 2018',
  text:'Configuring, implementing, and integrating commercial off-the-shelf (COTS) software such as Dell SonicWALL and AirWatch. These help in managing over 400 devices for students and staff members on the school campus. Participates in Technology department meetings concerning issues with our worksite server, projects, operating systems, and back-end software. Researches, identifies, and refers complex technical problems related to platform management, network connectivity, and desktop support. Successfully configured Google Sheets API with Google Forms to create a ticket request program for school faculty members to communicate with supporting staff. This project was aimed to discourage the waste of paper forms.'
  }

var paragraphNASA = {
  company: 'NASA Robotics Programmer (Swarmathon)',
  position: 'Robot Programmer',
  location: 'Los Angeles, CA',
  workPeriod: 'August 2017 - May 2018',
  text:'Utilizing ROS framework to improve the mapping procedures on the Swarmathon rovers provided by NASA. Building a simulated Grid-Map of a rover\'s surroundings with the published sonar and odometry data. The simulation was made possible by integrating the ROS package rviz. The project was developed on Ubuntu 16.04 with the programming language being C++.'
  }




Vue.component('paragraph', {
  template: '<p>' + paragraph + '</p>'
});


var app2 = new Vue({
  el: '#vue-app-one'
});



Vue.component('display', {
  props: ['corp','pos','loc','period','details'],
  template: `
  <div class="columns is-half">
    <div class="box">
		  <div class="box">
			 <div class="level-left">
			   	{{ corp }}<br>
				  {{ pos }}<br>
				  {{ loc }}<br>
				  {{ period }}<br>
			 </div>
		  </div>
		<div class="container">
			<div class="level-right">
				{{ details }}
			</div>
		</div>
	</div>
  <br>
  </div>
  `
});



var app4 = new Vue({
  el: '#paragraphs',
  data: {
    posts: [
      { id: 1, corp: paragraph.company, pos: paragraph.position, loc: paragraph.location, period: paragraph.workPeriod, details:paragraph.text },
      { id: 2, corp: paragraphNASA.company, pos: paragraphNASA.position, loc: paragraphNASA.location, period: paragraphNASA.workPeriod, details:paragraphNASA.text },
      { id: 3, corp: paragraphSJ.company, pos: paragraphSJ.position, loc: paragraphSJ.location, period: paragraphSJ.workPeriod, details:paragraphSJ.text }
      
    ]
  }
});

function defaults(){
  document.getElementById("experienceTab").className = "";
  document.getElementById("interestsTab").className = "";
  document.getElementById("defaultTab").className = "is-active";
  aboutMeDiv();
}
function interests(){
  document.getElementById("experienceTab").className = "";
  document.getElementById("defaultTab").className = "";
  document.getElementById("interestsTab").className = "is-active";
  interestDiv();
}
function experience(){
  document.getElementById("defaultTab").className = "";
  document.getElementById("interestsTab").className = "";
  document.getElementById("experienceTab").className = "is-active";
  workExperienceDiv();
}
function aboutMeDiv(){
  document.getElementById("mainPage").innerHTML = `
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h1>Welcome! My name is Christian Soltero</h1>
            <p><b>Whether it's building PC's, making circuits, or programming scripts in various languages, I have done it all as a young IT professional.</b></p> <br>
            <div class="has-text-weight-bold">
              <div class="columns">
                <div class="column">
                  <p>
                    <span class="icon">
                      <a href="https://github.com/csoltero109" target="_blank"><i class="fab fa-github"></i></a>
                    </span>
                  </p>
                  <p>Github</p>
                </div>
                <div class="column">
                  <p>
                    <span class="icon">
                      <a href="https://www.linkedin.com/in/christian-soltero-34724a90/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </span>
                  </p>
                  <p>LinkedIn</p>
                </div>
                <div class="column">
                  <p>
                    <span class="icon">
                      <a href="Resume.pdf" target="_blank"><i class="fas fa-file"></i></a>
                    </span>
                  </p>
                  <p>Resume</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;
}
function interestDiv(){
  document.getElementById("mainPage").innerHTML = `
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h3>Christian Soltero</h3>
            <div class="has-text-weight-bold">

            </div>
          </div>
        </div>
      </div>
  `;
}
function workExperienceDiv(){
  document.getElementById("mainPage").innerHTML = `
  <div class="card scroll">  
  <br>  
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="has-text-left">
              <h4>Avery Dennison</h4>
            </div>
            <div class="has-text-left">
              <h6>Jr. Cloud Developer</h6>
            </div>
            <div class="has-text-weight-bold is-size-7 has-text-left">
              <ul>
                <li>Develop Google Appscript based programs to transform current business processes implemented on MS Excel to the Google Platform. </li>
                <li>Provide consulting services for business teams such as requirements gathering, business analysis, technical feasibility analysis, technical solution design for new application code to be developed.</li>
                <li>Assist in the development of tools and utilities to help employees complete tasks in a simple and efficient manner.</li>
                <li>Explore new technologies on the Google Cloud Platform, conduct experiments and carry out proof of concepts to educate key stakeholders and raise awareness on such technologies.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="has-text-left">
              <h4>NASA Swarmathon</h4>
            </div>
            <div class="has-text-left">
              <h6>Robot Programmer</h6>
            </div>
            <div class="has-text-weight-bold is-size-7 has-text-left">
              <ul>
                <li>Utilizing ROS framework to improve the mapping procedures on the Swarmathon rovers provided by NASA</li>
                <li>Building a simulated Grid-Map of a rover's surroundings with the published sonar and odometry data. The simulation was made possible by integrating the ROS package RVIZ.</li>
                <li>The project was developed on Ubuntu 16.04 with the programming language being C++.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="has-text-left">
              <h4>Saint Joseph High School</h4>
            </div>
            <div class="has-text-left">
              <h6>IT Assistant</h6>
            </div>
            <div class="has-text-weight-bold is-size-7 has-text-left">
              <ul>
                <li>Configuring, implementing, and integrating commercial off-the-shelf (COTS) software such as Dell SonicWALL and Air Watch. These help in managing over 400 devices for students and staff members on the school campus.</li>
                <li>Participates in Tech department meetings concerning issues with worksite servers, projects, operating systems, and software</li>
                <li>Researches, identifies, and refers complex technical problems related to platform management, network connectivity, and desktop support.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="has-text-left">
              <h4>Fast5Xpress</h4>
            </div>
            <div class="has-text-left">
              <h6>Backup Assistant Manager, Tunnel Guide</h6>
            </div>
            <div class="has-text-weight-bold is-size-7 has-text-left">
              <ul>
                <li>As a Backup Assistant Manager I would clean, troubleshoot, and work with the hydraulic, pneumatic, and eletrical machines on the worksite. I would also troubleshoot the computers and networking equipment when necessary.</li>
                <li>When I was in the Tunnel Guide position, my main duty is to wash a customer's car without damaging the vehicle.</li>
                <li>These positions have caused me to the become a good and creative problem solver.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="has-text-left">
              <h4>Your Entertainment System</h4>
            </div>
            <div class="has-text-left">
              <h6>Front End Java Developer</h6>
            </div>
            <div class="has-text-weight-bold is-size-7 has-text-left">
              <ul>
                <li>Designing an Entertainment Library module which was a centre for all the media a user may own</li>
                <li>Multiple modules were included to play music, videos, display photos, and even play games in one central hub.</li>
                <li>Utilized VLCJ and Apache Tika to parse through mp3 and mp4 data to playback and display media to the user. This was all contained within Java swing code.  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br>
  `;
}