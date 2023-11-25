import { resolve } from 'path';
const __dirname = resolve();
const mainControllers = {
  getHome: (req, res) => {
    // MISSION#4
    console.log("La ruta relativa es," + __dirname);
    res.sendFile(__dirname+"/public/index.html");

    // MISSION#5
    //EN la mission 5 usaremos res.render para renderizar una plantilla.
  }
}

export { mainControllers };