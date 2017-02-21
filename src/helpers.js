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
