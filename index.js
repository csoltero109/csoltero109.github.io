/*function openPage(pageName,elmnt,color) {
  
  
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  
  
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablink");
  
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
	
	if(pageName == "Home"){
		setHomeBackground()
	}
	else if(pageName == "News"){
		setNewsBackground();
	}
	
	
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

function setHomeBackground(){
	document.body.style.background = "url('Images/la_freeway.jpg')";
}

function setNewsBackground(){
	document.body.style.background = "url('Images/santa_monica1.jpg')";
}*/