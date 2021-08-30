
      import MediaPlayer from './MediaPlayer';
      import AutoPlay from './plugins/AutoPlay';
      import AutoPause from './plugins/AutoPause';
      import Ads from './plugins/Ads';
      //para recibir otra variable se pone entre llaves
      //import MediaPlayer,{foo} from './MediaPlayer.js'
      const video = document.querySelector('video');
      // la forma de pasar el objeto es: {el:video}   donde "el" toma el valor de el objeto video
      // por ello la funcion media player recibe el objeto config que contiene la propiedad "el" que contiene "video"
      const player = new MediaPlayer({
            el : video,
            plugins:[
                  new AutoPlay(), new AutoPause(), new Ads()],
            });      
      const playButton:HTMLElement=document.querySelector('#playButton');
      playButton.onclick = () =>player.togglePlay();

      const muteButton:HTMLElement = document.querySelector('#muteButton');
      muteButton.onclick = ()=>{
            if(player.media.muted){
                  player.unmute();
            }else{
                  player.mute();
            }
      };
      //detectar si el navegador del usuario da apoyo a los serviceworker
      if('serviceWorker' in navigator){
            navigator.serviceWorker.register('sw.js').catch(error =>{
                  console.log(error.message);
            });


      }

      //global scope
      //function scope
      //block scope
      //mode scope