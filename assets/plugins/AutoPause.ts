import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold:number;
  //tipo de la clase mediaPlayer
  player:MediaPlayer;
  constructor() {
    this.threshold = 0.25;
    //se establece this permanente a la instancia del objeto
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) {
    this.player = player;
    
    //handleIntersection recibe el anuncio si hubo una intersección en el elemtno observado
    //el segundo es un elemento de configuración
    //cuando llama handledintersecction le pasa un arreglo intersectionobserver
    const observer = new IntersectionObserver(this.handleIntersection, {
      //que porciento del elemento debe tener interseccion para que coíncida  0.25
      threshold: this.threshold,
    });
    //observa el media
    observer.observe(this.player.media);
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }
  //mejora se declaran privadas porque no se usan en otra parte a excepción de esta clase
  //lista de entries (todos los objetos que se están observando) se pasa esa lista
   private handleIntersection(entries:IntersectionObserverEntry[]) {     
   //solo hay uno observando, por eso se pone 0
    const entry = entries[0];
    
    //si lo que tiene intersección que el lumbrar, entonces es visible
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
  private handleVisibilityChange() {
    //si es visible se ve o no esto para cuando se cambie de tab hará que deje de reproducir el video
    const isVisible = document.visibilityState === 'visible';
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

}

export default AutoPause;
