// set content of main heading block
setHeaderContent('first-heading', 'first-subheading', 0);

// set content of youtube block
var video = document.getElementById('video');
var videoPoster = document.getElementById('video-poster');
videoWrapper.innerHTML = '<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class="embed-container"><iframe src="https://www.youtube.com/embed/' + pageContent.blocks[1].videoId + '" frameborder="0" allowfullscreen></iframe></div>'
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
