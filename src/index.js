// set content of main heading block
setHeaderContent('first-heading', 'first-subheading', 0);

// set content of youtube block
setYoutubeContent();

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
// showSecondFrame();
setHeaderContent('sleep-coach-heading', 'sleep-coach-subheading', 5);
setSlidesContent('sleep-coach-carousel-container', 6);
