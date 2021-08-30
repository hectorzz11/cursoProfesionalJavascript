import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor() { }
    run(player:MediaPlayer) {
        if (player.media.muted) {
            player.media.muted = true; //los set no son una funcion se manda un parametro
        }
        //player.muted();
        player.play();

    }
}
export default AutoPlay;