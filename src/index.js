// set content of main heading block
setHeaderContent('first-heading', 'first-subheading', 0);

// set content of youtube block
var video = document.getElementById('video');
var videoPoster = document.getElementById('video-poster');
video.innerHTML = '<iframe class="player" frameborder="0" allowfullscreen="1" title="YouTube video player" width="640" height="390" src="https://www.youtube.com/embed/' + pageContent.blocks[1].videoId + '?rel=0&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fwww.ikea.com&amp;widgetid=1" id="widget2"></iframe>'
videoPoster.innerHTML = '<img src="./images/' + pageContent.blocks[1].image + '">'

// sets content of second heading block
setHeaderContent('second-heading', 'second-subheading', 2);

// sets content of image grid block
setGridContent('image-grid-items', 3);
var cta = document.getElementById('cta');
cta.innerHTML = '<a href="' + pageContent.blocks[3].cta.url.gben + '">' + pageContent.blocks[3].cta.text + '</a>'

// sets content of product grid
var productHeading = document.getElementById('products-heading');
productHeading.innerHTML = pageContent.blocks[4].heading;
setGridContent('product-grid-items', 4);

// sets content of sleep coach block
setHeaderContent('sleep-coach-heading', 'sleep-coach-subheading', 5);
setSlidesContent('sleep-coach-carousel-container', 6);
