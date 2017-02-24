// insert header content

setHeaderContent = function(heading, subheading, blockNumber) {
  var heading = document.getElementById(heading);
  var subheading = document.getElementById(subheading);
  heading.innerHTML = pageContent.blocks[blockNumber].heading;
  subheading.innerHTML = pageContent.blocks[blockNumber].subheading;
}

// insert youtube content

var youtubeVideo = document.getElementById("youtube-video");

setYoutubeContent = function() {
  var videoPoster = document.getElementById('video-poster');
  videoWrapper.innerHTML = '<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class="embed-container"><iframe id="youtube-video" src="https://www.youtube.com/embed/' + pageContent.blocks[1].videoId + '" frameborder="0" allowfullscreen></iframe></div>'
  videoPoster.innerHTML = '<img src="./images/' + pageContent.blocks[1].image + '">'
}

// insert grid content

setGridContent = function(elementId, blockNumber) {
  targetElement = document.getElementById(elementId);
  var gridItems = pageContent.blocks[blockNumber].items;
  gridItems.forEach(function(item) {
    targetElement.innerHTML += "<div class='grid-item'><a href='" + item.url.gben + "'><img src='./images/" + item.image + "'></a><p>" + item.text + "</p></div>";
  })
}

// insert carousel slide content

setSlidesContent = function(elementId, blockNumber) {
  targetElement = document.getElementById(elementId);
  var carouselItems = pageContent.blocks[blockNumber].items;
  carouselItems.forEach(function(item) {
    targetElement.innerHTML += '<div class="slide"><div class="tip-text"><h1 class="carousel-header">' + item.heading + '</h1><p>"' + item.text + '"</p></div><div class="tip-images"><img class="first-frame" src="./images/' + item.images[0] + '"><img class="second-frame" src="./images/' + item.images[1] + '"></div></div>';
  })
}
