import { resolve } from 'path';
const __dirname = resolve();
const mainControllers = {
  getHome: (req, res) => {
    // MISSION#5
    //EN la mission 5 usaremos res.render para renderizar una plantill
    console.log("La ruta relativa es," + __dirname);
    res.render("pages/index.ejs",{});
  }
}

export { mainControllers };