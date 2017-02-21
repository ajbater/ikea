setHeaderContent = function(heading, subheading, blockNumber) {
  var heading = document.getElementById(heading);
  var subheading = document.getElementById(subheading);
  heading.innerHTML = pageContent.blocks[blockNumber].heading;
  subheading.innerHTML = pageContent.blocks[blockNumber].subheading;
}

createGridHtml = function(blockNumber) {
  var gridItems = pageContent.blocks[blockNumber].items;
  var output = "<div>";
  gridItems.forEach(function(item) {
    output += "<div class='grid-item'><a href='" + item.url.gben + "'><img src='./images/" + item.image + "'></a><p>" + item.text + "</p></div>";
  })
  return output + "</div>"
}

setGridContent = function(elementId, blockNumber) {
  targetElement = document.getElementById(elementId);
  targetElement.innerHTML = createGridHtml(blockNumber);
}
