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


Vue.component('greeting', {
  template: '<p>Hey there, I am a reusable component</p>'
});


var app2 = new Vue({
  el: '#vue-app-one'
});