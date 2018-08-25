var app = new Vue({
  el: '#appSpeak',
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

Vue.component('paragraph', {
  template: '<p>' + paragraph + '</p>'
});


var app2 = new Vue({
  el: '#vue-app-one'
});



Vue.component('display', {
  props: ['corp','pos','loc','period','details'],
  template: `<div class="box">
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
			</div>`
});



var app4 = new Vue({
  el: '#paragraphs',
  data: {
    posts: [
      { id: 1, corp: paragraph.company, pos: paragraph.position, loc: paragraph.location, period: paragraph.workPeriod, details:paragraph.text }
    ]
  }
})