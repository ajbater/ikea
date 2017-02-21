setHeaderContent = function(heading, subheading, blockNumber) {
  var heading = document.getElementById(heading);
  var subheading = document.getElementById(subheading);
  heading.innerHTML = pageContent.blocks[blockNumber].heading;
  subheading.innerHTML = pageContent.blocks[blockNumber].subheading;
}
