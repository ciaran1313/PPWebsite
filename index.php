<!DOCTYPE html>
<html>
<head>
  <title>Pterodactyl Problems</title>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="stylesheets/general.css"></link>
  <link rel="stylesheet" type="text/css" href="stylesheets/desktop.css" id="size-specific-stylesheet"></link>
  <!--script src="http://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
  --><script src="jquery.js"></script>
  <script type="text/javascript" src="scripts/windowsize.js"></script>
  <script type="text/javascript" src="scripts/navbar.js"></script>
  <script type="text/javascript" src="scripts/main.js"></script>
</head>
<body>
  <div id="home">
    <ul id=social-media-links>
      <li><a href="https://www.facebook.com/PterodactylProblems/" class="fa fa-facebook"></a></li>
      <li><a href="https://www.instagram.com/pterodactylproblems" class="fa fa-instagram"></a></li>
      <li><a href="https://www.youtube.com/channel/UC26wz9wdeM-shOm8UV1fhuQ" class="fa fa-youtube"></a></li>
      <li><a href="https://pterodactylproblems.bandcamp.com" class="fa fa-bandcamp"></a></li>
    </ul>
    <div id="title">
      <span class="pterod-color">pterod</span><span class="actylpro-color">actylpro</span><span class="blems-color">blems</span>
    </div>
    <div id="navbar">
      <ul id="links">
        <li><a href="#home" id="home-link">Home</a></li>
        <li><a href="#about" id="about-link">About</a></li>
        <li><a href="#music" id="music-link">Music</a></li>
        <li><a href="#photos" id="photos-link">Photos</a></li>
      </ul>
      <div id="dropdown-button">
        <button class="fa fa-bars"></button>
      </div>
    </div>
  </div>
  <div id="content">
    <div id="about" class="section">
      <h1>About</h1>
      <div id="text">
        <?php echo file_get_contents("resources/bio.html");?>
      </div>
      <img id="band-photo" align="top" src="resources/band_photo.jpg"/>
    </div>
    <div id="music" class="section">
      <h1>Music</h1>
      <iframe id="spreadingfear-mv" width="560" height="315" src="https://www.youtube.com/embed/NHq1YXOPABk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <iframe id="ppep-bandcamp" style="border: 0; width: 400px; height: 274px;" align="top" src="https://bandcamp.com/EmbeddedPlayer/album=4247153247/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/" seamless><a href="http://pterodactylproblems.bandcamp.com/album/pterodactyl-problems">Pterodactyl Problems by Pterodactyl Problems</a></iframe>
    </div>
    <div id="photos" class="section" >
      <h1>Photos</h1>
      <ul>
        <li><img src="resources\spreadingfearmv.jpg"/></li>
        <li><img src="resources\spreadingfearmv1.jpg"/></li>
        <li><img src="resources\ppepstudiodavey.jpg"/></li>
        <li><img src="resources\ppepstudiociaran.jpg"/></li>
        <li><img src="resources\alphaopenhouse.jpg"/></li>
      </ul>
    </div>
  </div>
</body>
</html>
