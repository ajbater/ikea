setHeaderContent = function(heading, subheading, blockNumber) {
  var heading = document.getElementById(heading);
  var subheading = document.getElementById(subheading);
  heading.innerHTML = pageContent.blocks[blockNumber].heading;
  subheading.innerHTML = pageContent.blocks[blockNumber].subheading;
}

setGridContent = function(elementId, blockNumber) {
  targetElement = document.getElementById(elementId);
  var gridItems = pageContent.blocks[blockNumber].items;
  gridItems.forEach(function(item) {
    targetElement.innerHTML += "<div class='grid-item'><a href='" + item.url.gben + "'><img src='./images/" + item.image + "'></a><p>" + item.text + "</p></div>";
  })
}

setSlidesContent = function(elementId, blockNumber) {
  targetElement = document.getElementById(elementId);
  var carouselItems = pageContent.blocks[blockNumber].items;
  carouselItems.forEach(function(item) {
    targetElement.innerHTML += "<div class='slide'><h1 class='carousel-header'>" + item.heading + "</h1><p>" + item.text + "</p><img src='./images/" + item.images[0] + "'><img src='./images/" + item.images[1] + "'></div>";
  })
}
