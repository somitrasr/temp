<!--

//*****************************************
// Blending Image Slide Show Script- 
// � Dynamic Drive (www.dynamicdrive.com)
// For full source code, visit http://www.dynamicdrive.com/
//*****************************************

//specify interval between slide (in mili seconds)
var slidespeed1 = 3000

//specify images
var slideimages1 = new Array("images/slide-2/1.jpg", "images/slide-2/2.jpg", "images/slide-2/3.jpg", "images/slide-2/4.jpg", "images/slide-2/5.jpg")

//specify corresponding links
var slidelinks1 = new Array("/product-details/R16-15.html", "/heartproduct.php", "/product-details/R89-85.html", "/diabetesproduct.php", "/urinary.php")

var newwindow1 = 0 //open links in new window? 1=yes, 0=no

var imageholder1 = new Array()
var ie1 = document.all
for (i1 = 0; i1 < slideimages1.length; i1++) {
    imageholder1[i1] = new Image()
    imageholder1[i1].src = slideimages1[i1]
}

function gotoshow1() {
    if (newwindow1)
        window.open(slidelinks1[whichlink1])
    else
        window.location = slidelinks1[whichlink1]
}

//-->