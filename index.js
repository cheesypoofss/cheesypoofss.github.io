function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

<button class="tablinks" onclick="openCity(event, 'About')" 
id="defaultOpen">About</button>

<button class="tablinks" onclick="openCity(event, 'Contact')" 
id="defaultOpen">Contact</button>

<button class="tablinks" onclick="openCity(event, 'Games')" 
id="defaultOpen">Games</button>

<button class="tablinks" onclick="openCity(event, 'Other Projects')" 
id="defaultOpen">Other Projects</button>

<button class="tablinks" onclick="openCity(event, 'Rania')" 
id="defaultOpen">Rania</button>

<script>
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>

<!-- Click on the <span> element to close the tab -->


