interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
  //una lista de observers que empieza vacia
  observers: Observer[] = [];

  constructor() {
    const el: HTMLInputElement = document.querySelector('#value');
    //cuando value cambia el valor
    el.addEventListener('input', () => {
      //se notifican
      this.notify(el.value);
    });
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    //encontrar el inidce de ese observer
    //llama una funcion
    const index = this.observers.findIndex(obs => {
      //y valida si es el mismo
      return obs === observer;
    });
    //a partir del indice se saca el elemento 1
    this.observers.splice(index, 1);
  }
//cuando cambia el precio se notifica a 
  notify(data: any) {
    //todos los subscriptores, se le pasa el dato que cambio
    this.observers.forEach(observer => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  //el elemento
  private el: HTMLElement;


  constructor() {
    //# porque se quiere identificar un id
    this.el = document.querySelector('#price');
  }

  update(data: any) {
    this.el.innerText = data;
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);
//ocurre despues de cierto tiempo 5segundos
setTimeout(() => value.unsubscribe(display), 5000);
