const VERSION = 'v1';
//self es como this pero para servicesworkers, esto se llamara para cuaando el navegador
//instale el sw , tambien recibe un evento
self.addEventListener('install', event => {
  //el precache da una lista de recursos
  //espera a que el precache se acomplete (la promesa)
  event.waitUntil(precache());
});
//CADA VEZ QUE OCURRE UNA PETICION QUIERO QUE EL SERVICE WORKER HAGA ALGO
self.addEventListener('fetch', event => {
  //SE EXTRAE LA PETICIÓN
  const request = event.request;
  // get SOLO QUEREMOS LOS GET
  if (request.method !== 'GET') {
    return;
  }

  // buscar en cache RESPONDER CON UNA RESPUESTA CACHADA
  event.respondWith(cachedResponse(request));

  // actualizar el cache SE PASA EL REQUEST
  event.waitUntil(updateCache(request));
});
//SE PONE ASYNC PORQUE SE USA AWAIT
async function precache() {
  //se abre un cache que es la instancia del cache
  const cache = await caches.open(VERSION);

  //se añaden los recursos
  //regresa una promesa
  return cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/index.js',
    // '/assets/MediaPlayer.js',
    // '/assets/plugins/AutoPlay.js',
    // '/assets/plugins/AutoPause.js',
    // '/assets/index.css',
    // '/assets/BigBuckBunny.mp4',
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  //YA TIENES UNA COPIA QUE LE CORRESPONDE AL REQUEST, UNDEFINED SI NO TIENE LA COPIA VA A RESPONDER
  const response = await cache.match(request);
  //COMO ES POSIBLE QUE SEA UNDIFINED SE TIENE QUE CONTESTAR CON LO QUE DA LA RED
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  //consigue copia actualizada
  const response = await fetch(request);
  //se añade el nuevo contenido al cache
  return cache.put(request, response);
}
