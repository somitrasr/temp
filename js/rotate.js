<!--

//*****************************************
// Blending Image Slide Show Script- 
// � Dynamic Drive (www.dynamicdrive.com)
// For full source code, visit http://www.dynamicdrive.com/
//*****************************************

//specify interval between slide (in mili seconds)
var slidespeed = 3000

//specify images
var slideimages = new Array("images/slide-1/1.jpg", "images/slide-1/2.jpg", "images/slide-1/3.jpg", "images/slide-1/4.jpg")

//specify corresponding links
var slidelinks = new Array("/products.php?cPath=7", "/calcareaphosproduct.php", "/coughproduct.php", "/product-details/R11-11.html")

var newwindow = 0 //open links in new window? 1=yes, 0=no

var imageholder = new Array()
var ie = document.all
for (i = 0; i < slideimages.length; i++) {
    imageholder[i] = new Image()
    imageholder[i].src = slideimages[i]
}

function gotoshow() {
    if (newwindow)
        window.open(slidelinks[whichlink])
    else
        window.location = slidelinks[whichlink]
}

//-->