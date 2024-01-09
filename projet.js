
function toggleButtons() {
    var buttonOptions = document.getElementById("buttonOptions");
    var introductionText = document.querySelector('.introduction-text');
    var introductionImage = document.querySelector('.introduction-image');
    var additionalButtonsContainer = document.getElementById("additionalButtonsContainer");
    var additionalButtonsContainer2 = document.getElementById('additionalButtonsContainer2');
    var additionalButtonsContainer3 = document.getElementById('additionalButtonsContainer3');
    var additionalButtonsContainer4 = document.getElementById('additionalButtonsContainer4');
    var additionalButtonsContainer5 = document.getElementById('additionalButtonsContainer5');
    var additionalButtonsContainer6 = document.getElementById('additionalButtonsContainer6');
    var additionalButtonsContainer7 = document.getElementById('additionalButtonsContainer7');
    var additionalButtonsContainer8 = document.getElementById('additionalButtonsContainer8');
    var additionalButtonsContainer9 = document.getElementById('additionalButtonsContainer9');
    var additionalButtonsContainerr = document.getElementById('additionalButtonsContainerr');
    var additionalButtonsContainerE = document.getElementById('additionalButtonsContainerE');
    var additionalButtonsContainerET = document.getElementById('additionalButtonsContainerET');
    var additionalButtonsContainerEP = document.getElementById('additionalButtonsContainerEP');
    var additionalButtonsContainerT = document.getElementById('additionalButtonsContainerT');
    var additionalButtonsContainerTT = document.getElementById('additionalButtonsContainerTT');
    var additionalButtonsContainerTP = document.getElementById('additionalButtonsContainerTP');
    if (buttonOptions.style.display === "none" || buttonOptions.style.display === "") {
     buttonOptions.style.display = "block";
     introductionText.style.display = "none";
     introductionImage.style.display = "none";
     additionalButtonsContainer.style.display = "none";
     additionalButtonsContainer2.style.display = "none";
     additionalButtonsContainer3.style.display = "none";
     additionalButtonsContainer4.style.display = "none";
     additionalButtonsContainer5.style.display = "none";
     additionalButtonsContainer6.style.display = "none";
     additionalButtonsContainer7.style.display = "none";
     additionalButtonsContainer8.style.display = "none";
     additionalButtonsContainer9.style.display = "none";
     additionalButtonsContainerr.style.display = "none";
     additionalButtonsContainerE.style.display = "none";
     additionalButtonsContainerET.style.display = "none";
     additionalButtonsContainerEP.style.display = "none";
     additionalButtonsContainerT.style.display = "none";
     additionalButtonsContainerTT.style.display = "none";
     additionalButtonsContainerTP.style.display = "none";
    } else {
     buttonOptions.style.display = "none";
     introductionText.style.display = "block";
     introductionImage.style.display = "block";
     additionalButtonsContainer.style.display = "none";
     additionalButtonsContainer2.style.display = "none";
     additionalButtonsContainer3.style.display = "none";
     additionalButtonsContainer4.style.display = "none";
     additionalButtonsContainer5.style.display = "none";
     additionalButtonsContainer6.style.display = "none";
     additionalButtonsContainer7.style.display = "none";
     additionalButtonsContainer8.style.display = "none";
     additionalButtonsContainer9.style.display = "none";
     additionalButtonsContainerr.style.display = "none";
     additionalButtonsContainerE.style.display = "none";
     additionalButtonsContainerET.style.display = "none";
     additionalButtonsContainerEP.style.display = "none";
     additionalButtonsContainerT.style.display = "none";
     additionalButtonsContainerTT.style.display = "none";
     additionalButtonsContainerTP.style.display = "none";
    
    
    }
    }
    
    
    function toggleModuleOptions(module) {
    var moduleOptions = document.getElementById(module + "Options");
    var allModuleOptions = document.querySelectorAll('.module-options');
    var introductionText = document.querySelector('.introduction-text');
    var introductionImage = document.querySelector('.introduction-image');
    var buttonOptions = document.getElementById("buttonOptions");
    var additionalButtonsContainer = document.getElementById('additionalButtonsContainer'); // New line
    var additionalButtonsContainer2 = document.getElementById('additionalButtonsContainer2');
    var additionalButtonsContainer3 = document.getElementById('additionalButtonsContainer3');
    var additionalButtonsContainer4 = document.getElementById('additionalButtonsContainer4');
    var additionalButtonsContainer5 = document.getElementById('additionalButtonsContainer5');
    var additionalButtonsContainer6 = document.getElementById('additionalButtonsContainer6');
    var additionalButtonsContainer7 = document.getElementById('additionalButtonsContainer7');
    var additionalButtonsContainer8 = document.getElementById('additionalButtonsContainer8');
    var additionalButtonsContainer9 = document.getElementById('additionalButtonsContainer9');
    var additionalButtonsContainerr = document.getElementById('additionalButtonsContainerr');
    var additionalButtonsContainerE = document.getElementById('additionalButtonsContainerE');
    var additionalButtonsContainerET = document.getElementById('additionalButtonsContainerET');
    var additionalButtonsContainerEP = document.getElementById('additionalButtonsContainerEP');
    var additionalButtonsContainerT = document.getElementById('additionalButtonsContainerT');
    var additionalButtonsContainerTT = document.getElementById('additionalButtonsContainerTT');
    var additionalButtonsContainerTP = document.getElementById('additionalButtonsContainerTP');
    allModuleOptions.forEach(function (options) {
     options.style.display = "none";
    });
    
    if (moduleOptions.style.display === "none" || moduleOptions.style.display === "") {
     moduleOptions.style.display = "block";
     introductionText.style.display = "none";
     introductionImage.style.display = "none";
     buttonOptions.style.display = "none";
     additionalButtonsContainer.style.display = "none"; // New line
     additionalButtonsContainer2.style.display = "none"; // New line
     additionalButtonsContainer3.style.display = "none"; // New line
     additionalButtonsContainer4.style.display = "none"; // New line
     additionalButtonsContainer5.style.display = "none"; // New line
     additionalButtonsContainer6.style.display = "none"; // New line
     additionalButtonsContainer7.style.display = "none"; // New line
     additionalButtonsContainer8.style.display = "none"; // New line
     additionalButtonsContainer9.style.display = "none"; // New line
     additionalButtonsContainerr.style.display = "none"; // New line
     additionalButtonsContainerE.style.display = "none";
     additionalButtonsContainerET.style.display = "none";
     additionalButtonsContainerEP.style.display = "none";
     additionalButtonsContainerT.style.display = "none";
     additionalButtonsContainerTT.style.display = "none";
     additionalButtonsContainerTP.style.display = "none";
    
    } else {
     moduleOptions.style.display = "none";
     introductionText.style.display = "block";
     introductionImage.style.display = "block";
     buttonOptions.style.display = "block";
     additionalButtonsContainer.style.display = "none"; // New line
     additionalButtonsContainer2.style.display = "none"; // New line
     additionalButtonsContainer3.style.display = "none"; // New line
     additionalButtonsContainer4.style.display = "none"; // New line
     additionalButtonsContainer5.style.display = "none"; // New line
     additionalButtonsContainer6.style.display = "none"; // New line
     additionalButtonsContainer7.style.display = "none"; // New line
     additionalButtonsContainer8.style.display = "none"; // New line
     additionalButtonsContainer9.style.display = "none"; // New line
     additionalButtonsContainerr.style.display = "none"; // New line
     additionalButtonsContainerE.style.display = "none";
     additionalButtonsContainerET.style.display = "none";
     additionalButtonsContainerEP.style.display = "none";
     additionalButtonsContainerT.style.display = "none";
     additionalButtonsContainerTT.style.display = "none";
     additionalButtonsContainerTP.style.display = "none";
    
    
    }
    }
    function toggleAdditionalButtons(containerId) {
    var additionalButtonsContainer = document.getElementById('additionalButtonsContainer');
    var additionalButtonsContainer2 = document.getElementById('additionalButtonsContainer2');
    var additionalButtonsContainer3 = document.getElementById('additionalButtonsContainer3');
    var additionalButtonsContainer4 = document.getElementById('additionalButtonsContainer4');
    var additionalButtonsContainer5 = document.getElementById('additionalButtonsContainer5');
    var additionalButtonsContainer6 = document.getElementById('additionalButtonsContainer6');
    var additionalButtonsContainer7 = document.getElementById('additionalButtonsContainer7');
    var additionalButtonsContainer8 = document.getElementById('additionalButtonsContainer8');
    var additionalButtonsContainer9 = document.getElementById('additionalButtonsContainer9');
    var additionalButtonsContainerr = document.getElementById('additionalButtonsContainerr');
    var additionalButtonsContainerE = document.getElementById('additionalButtonsContainerE');
    var additionalButtonsContainerET = document.getElementById('additionalButtonsContainerET');
    var additionalButtonsContainerEP = document.getElementById('additionalButtonsContainerEP');
    var additionalButtonsContainerT = document.getElementById('additionalButtonsContainerT');
    var additionalButtonsContainerTT = document.getElementById('additionalButtonsContainerTT');
    var additionalButtonsContainerTP = document.getElementById('additionalButtonsContainerTP');
    var coursButton = document.getElementById('coursButton');
    var tdButton = document.getElementById('tdButton');
    var coursButton2 = document.getElementById('coursButton2');
    var tdButton2 = document.getElementById('tdButton2');
    var tpButton = document.getElementById('tpButton');
    var coursButton3 = document.getElementById('coursButton3');
    var tdButton3 = document.getElementById('tdButton3');
    var tpButton2 = document.getElementById('tpButton2');
    var coursButton4 = document.getElementById('coursButton4');
    var tdButton4 = document.getElementById('tdButton4');
    var coursButton5 = document.getElementById('coursButton5');
    var tdButton5 = document.getElementById('tdButton5');
    var tpButton3 = document.getElementById('tpButton3');
    var coursButton6 = document.getElementById('coursButton6');
    var tdButton6 = document.getElementById('tdButton6');
    var tpButton4 = document.getElementById('tpButton4');
    if (containerId === 'additionalButtonsContainer') {
    additionalButtonsContainer.style.display = 'block';
    additionalButtonsContainer2.style.display = 'none';
    coursButton.style.display = 'none';
    tdButton.style.display = 'none';
    } else if (containerId === 'additionalButtonsContainer2') {
    additionalButtonsContainer2.style.display = 'block';
    additionalButtonsContainer.style.display = 'none';
    coursButton.style.display = 'none';
    tdButton.style.display = 'none';
    }
    if (containerId === 'additionalButtonsContainer3') {
    additionalButtonsContainer3.style.display = 'block';
    additionalButtonsContainer4.style.display = 'none';
    additionalButtonsContainer5.style.display = 'none';
    coursButton2.style.display = 'none';
    tdButton2.style.display = 'none';
    tpButton.style.display = 'none';
    
    } else if (containerId === 'additionalButtonsContainer4') {
    additionalButtonsContainer4.style.display = 'block';
    additionalButtonsContainer5.style.display = 'none';
    additionalButtonsContainer3.style.display = 'none';
    coursButton2.style.display = 'none';
    tdButton2.style.display = 'none';
    tpButton.style.display = 'none';
    }
    else if (containerId === 'additionalButtonsContainer5') {
    additionalButtonsContainer5.style.display = 'block';
    additionalButtonsContainer4.style.display = 'none';
    additionalButtonsContainer3.style.display = 'none';
    coursButton2.style.display = 'none';
    tdButton2.style.display = 'none';
    tpButton.style.display = 'none';
    }
    
    
    if (containerId === 'additionalButtonsContainer6') {
    additionalButtonsContainer6.style.display = 'block';
    additionalButtonsContainer7.style.display = 'none';
    additionalButtonsContainer8.style.display = 'none';
    coursButton3.style.display = 'none';
    tdButton3.style.display = 'none';
    tpButton2.style.display = 'none';
    
    } 
    else if (containerId === 'additionalButtonsContainer7') {
    additionalButtonsContainer7.style.display = 'block';
    additionalButtonsContainer8.style.display = 'none';
    additionalButtonsContainer6.style.display = 'none';
    coursButton3.style.display = 'none';
    tdButton3.style.display = 'none';
    tpButton2.style.display = 'none';
    }
    else if (containerId === 'additionalButtonsContainer8') {
    additionalButtonsContainer8.style.display = 'block';
    additionalButtonsContainer7.style.display = 'none';
    additionalButtonsContainer6.style.display = 'none';
    coursButton3.style.display = 'none';
    tdButton3.style.display = 'none';
    tpButton2.style.display = 'none';
    }
    if (containerId === 'additionalButtonsContainer9') {
    additionalButtonsContainer9.style.display = 'block';
    additionalButtonsContainerr.style.display = 'none';
    coursButton4.style.display = 'none';
    tdButton4.style.display = 'none';
    }
    else if (containerId === 'additionalButtonsContainerr') {
    additionalButtonsContainerr.style.display = 'block';
    additionalButtonsContainer9.style.display = 'none';
    coursButton4.style.display = 'none';
    tdButton4.style.display = 'none';
    }
    if (containerId === 'additionalButtonsContainerE') {
    additionalButtonsContainerE.style.display = 'block';
    additionalButtonsContainerET.style.display = 'none';
    additionalButtonsContainerEP.style.display = 'none';
    coursButton5.style.display = 'none';
    tdButton5.style.display = 'none';
    tpButton3.style.display = 'none';
    
    } 
    else if (containerId === 'additionalButtonsContainerET') {
    additionalButtonsContainerET.style.display = 'block';
    additionalButtonsContainerEP.style.display = 'none';
    additionalButtonsContainerE.style.display = 'none';
    coursButton5.style.display = 'none';
    tdButton5.style.display = 'none';
    tpButton3.style.display = 'none';
    }
    else if (containerId === 'additionalButtonsContainerEP') {
    additionalButtonsContainerEP.style.display = 'block';
    additionalButtonsContainerET.style.display = 'none';
    additionalButtonsContainerE.style.display = 'none';
    coursButton5.style.display = 'none';
    tdButton5.style.display = 'none';
    tpButton3.style.display = 'none';
    }
    if (containerId === 'additionalButtonsContainerT') {
    additionalButtonsContainerT.style.display = 'block';
    additionalButtonsContainerTT.style.display = 'none';
    additionalButtonsContainerTP.style.display = 'none';
    coursButton6.style.display = 'none';
    tdButton6.style.display = 'none';
    tpButton4.style.display = 'none';
    
    } 
    else if (containerId === 'additionalButtonsContainerTT') {
    additionalButtonsContainerTT.style.display = 'block';
    additionalButtonsContainerTP.style.display = 'none';
    additionalButtonsContainerT.style.display = 'none';
    coursButton6.style.display = 'none';
    tdButton6.style.display = 'none';
    tpButton4.style.display = 'none';
    
    }
    else if (containerId === 'additionalButtonsContainerTP') {
    additionalButtonsContainerTP.style.display = 'block';
    additionalButtonsContainerTT.style.display = 'none';
    additionalButtonsContainerT.style.display = 'none';
    coursButton6.style.display = 'none';
    tdButton6.style.display = 'none';
    tpButton4.style.display = 'none';
    
    }
    }
    function additionalButtonClick(buttonId) {
    console.log(buttonId + ' clicked');
    var pdfPath = ''; 
    window.open(pdfPath);
    }   
    function loadPDF(pdfPath){
    window.open(pdfPath);
    }
    
    function showAccueilPage() {
    hideAllPages();
    document.getElementById('accueilPage').style.display = 'block';
    }
    
    function showAboutPage() {
    hideAllPages();
    document.getElementById('aboutPage').style.display = 'block';
    }
    
    function showContactPage() {
    hideAllPages();
    document.getElementById('contactPage').style.display = 'block';
    }
    
    function hideAllPages() {
    document.getElementById('accueilPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('contactPage').style.display = 'none';
    }
    
    
    
    
    
    
    
    