
//se convirtio en clase para el typescript
      class MediaPlayer {
  media: HTMLMediaElement; //se pone un tipo para el typescript no se pone import porque ya estan disponibles
  plugins: Array<any>;
  container: HTMLElement;
  
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer(){
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);

  }
  private initPlugins() {
    /*const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      //propiedad virtual
      get muted() {
        return this.media.muted;
      },

      set muted(value) {
        this.media.muted = value;
      },
    };*/
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  //Se añade un metodo a la función MediaPlayer
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute() {

    this.media.muted = true;

  }
  unmute() {
    this.media.muted = false;
  }
};

     
export default MediaPlayer;
