(function(){
    
    function printFoundImages() {
        var imgs = document.getElementsByTagName('img');
    
        var newdiv = document.createElement('div');


        newdiv.style.cssText = "border: 1px solid #000;background-color: yellow;color: black";
        
        newdiv.appendChild(document.createTextNode("Trovate " + imgs.length + " immagini:"));
        newdiv.appendChild(document.createElement('br'));
   
        for(let i = 0; i < imgs.length; i++) {

            let element = imgs[i];

            newdiv.appendChild(document.createTextNode(element.src));
            newdiv.appendChild(document.createElement('br'));

        }
        
        
        document.body.appendChild(newdiv);

        externalLibrary();
    }
    
    printFoundImages();

}());

