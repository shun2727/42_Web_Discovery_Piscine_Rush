
//yeah this is ai, idk how to do it 
document.addEventListener("DOMContentLoaded", function() {
  // 1. Create a new network request object
  var xhr = new XMLHttpRequest();
  
  // 2. Configure the request (Method, File Path, Asynchronous flag)
  xhr.open("GET", "navbar.html", true);
  
  // 3. Set up a listener to watch for status changes
  xhr.onreadystatechange = function() {
    // 4. Check if the request is finished and successful
    if (xhr.readyState === 4 && xhr.status === 200) {
      // 5. Inject the HTML into the page
      document.getElementById("home_nav").innerHTML = xhr.responseText;
    }
  };
  
  // 6. Fire off the request
  xhr.send();
});
