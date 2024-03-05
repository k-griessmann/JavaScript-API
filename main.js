let art;
let showArt;

// Function to get Art Info when image figure is clicked
/**
 * @param img_index
 * 
 * 
 * @param item_index
 * 
 * Function gets art from the Art Institute of Chicago using the image index of gallery.
 * Then finds the correct item_index inside of the JSON response data from Art Institute of Chicago
 * which will produce a url that will be used to show art.
 */


 async function clickedEvent(img_index, item_index){
   let art_image = document.getElementsByTagName('img')[img_index].attributes[2].value;

   headers = new Headers([
      ['Content-type', 'application/json']
   ]);

   let request = new Request(`https://api.artic.edu/api/v1/artworks/search?q=${art_image}&fields=id,title,image_id`, {
     method: 'GET',
     headers: headers
   });
 
 
   let result = await fetch(request);
 
   let response = await result.json();
 
   console.log(response)
   let art = `https://www.artic.edu/iiif/2/${response.data[item_index].image_id}/full/843,/0/default.jpg`
 
   // Before we show art, first check if showArt is True, if so then stop it
     if (showArt){
        stopDisplay();
     }
     addImage(art);
   }

  /**
  * @param id
  * @param event
  * 
  * id = image id for gallery image
  * event = Mouse event given by the action from our user
  * 
  * Function produces Images from the clickedEvent based 
  * on index of image.
  */

  function getArt(id,event){
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            openModal(1);
            clickedEvent(0,0)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            openModal(2);
            clickedEvent(1,0)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            openModal(3);
            clickedEvent(2,0)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            openModal(4);
            clickedEvent(3,0)
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            openModal(5);
            clickedEvent(4,0)
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            openModal(6);
            clickedEvent(5,0)
            break;
        }
        case 'fig7': {
            event.stopPropagation();
            openModal(7);
            clickedEvent(6,0)
            break;
        }
        case 'fig8': {
            event.stopPropagation();
            openModal(8);
            clickedEvent(7,0)
            break;
        }
        case 'fig9': {
            event.stopPropagation();
            openModal(9);
            clickedEvent(8,0)
            break;
        }
        case 'fig10': {
            event.stopPropagation();
            openModal(10);
            clickedEvent(9,0)
            break;
        }
    }
  }

  /**
  * @param url
  * 
  * url = art
  * 
  * Function will display art given by the display_url
  */

  /**
  * NO PARAMS
  * 
  * Function returns event to stop art display
  */

  function openModal(img_index) {
    switch(img_index) {
      case 1: {
        document.getElementById("myModal01").style.display = "block";
        break;
      }
      case 2: {
        document.getElementById("myModal02").style.display = "block";
        break;
      }
      case 3: {
        document.getElementById("myModal03").style.display = "block";
        break;
      }
      case 4: {
        document.getElementById("myModal04").style.display = "block";
        break;
      }
      case 5: {
        document.getElementById("myModal05").style.display = "block";
        break;
      }
      case 6: {
        document.getElementById("myModal06").style.display = "block";
        break;
      }
      case 7: {
        document.getElementById("myModal07").style.display = "block";
        break;
      }
      case 8: {
        document.getElementById("myModal08").style.display = "block";
        break;
      }
      case 9: {
        document.getElementById("myModal09").style.display = "block";
        break;
      }
      case 10: {
        document.getElementById("myModal10").style.display = "block";
        break;
      }
    }
  }
  
  function addImage(url) {
    document.getElementById("img01").src = new URL(url);
    document.getElementById("img02").src = new URL(url);
    document.getElementById("img03").src = new URL(url);
    document.getElementById("img04").src = new URL(url);
    document.getElementById("img05").src = new URL(url);
    document.getElementById("img06").src = new URL(url);
    document.getElementById("img07").src = new URL(url);
    document.getElementById("img08").src = new URL(url);
    document.getElementById("img09").src = new URL(url);
    document.getElementById("img10").src = new URL(url);
  }

  function stopDisplay(img_index) {
    switch (img_index) {
      case 1: {
        document.getElementById("myModal01").style.display = "none";
        break;
      }
      case 2: {
        document.getElementById("myModal02").style.display = "none";
        break;
      }
      case 3: {
        document.getElementById("myModal03").style.display = "none";
        break;
      }
      case 4: {
        document.getElementById("myModal04").style.display = "none";
        break;
      }
      case 5: {
        document.getElementById("myModal05").style.display = "none";
        break;
      }
      case 6: {
        document.getElementById("myModal06").style.display = "none";
        break;
      }
      case 7: {
        document.getElementById("myModal07").style.display = "none";
        break;
      }
      case 8: {
        document.getElementById("myModal08").style.display = "none";
        break;
      }
      case 9: {
        document.getElementById("myModal09").style.display = "none";
        break;
      }
      case 10: {
        document.getElementById("myModal10").style.display = "none";
        break;
      }
    }  
  }