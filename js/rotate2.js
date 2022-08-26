<!--

//*****************************************
// Blending Image Slide Show Script- 
// � Dynamic Drive (www.dynamicdrive.com)
// For full source code, visit http://www.dynamicdrive.com/
//*****************************************

//specify interval between slide (in mili seconds)
var slidespeed2 = 3000

//specify images
var slideimages2 = new Array("images/slide-3/2.jpg", "images/slide-3/4.jpg", "images/slide-3/6.jpg", "images/slide-3/8.jpg", "images/slide-3/9.jpg", "images/slide-3/10.jpg")

//specify corresponding links
var slidelinks2 = new Array("/product-details/R84-80.html", "/product-details/R43-42.html", "/product-details/R88-84.html", "/product-details/R27-26.html", "/obesityproduct.php", "/respiratory.php")

var newwindow2 = 0 //open links in new window? 1=yes, 0=no

var imageholder2 = new Array()
var ie = document.all
for (i2 = 0; i2 < slideimages2.length; i2++) {
    imageholder2[i2] = new Image()
    imageholder2[i2].src = slideimages2[i2]
}

function gotoshow2() {
    if (newwindow2)
        window.open(slidelinks2[whichlink2])
    else
        window.location = slidelinks2[whichlink2]
}

//-->