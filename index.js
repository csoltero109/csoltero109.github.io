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
            <h3>Christian Soltero</h3>
            <div class="has-text-weight-bold">You can't be a pro if you only have one trick...</div>
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
            <div class="has-text-weight-bold">Here's a list of my interests</div>
          </div>
        </div>
      </div>
  `;
}
function workExperienceDiv(){
  document.getElementById("mainPage").innerHTML = `
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h3>Christian Soltero</h3>
            <div class="has-text-weight-bold">My work experience is...</div>
          </div>
        </div>
      </div>
  `;
}