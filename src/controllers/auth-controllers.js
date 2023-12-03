import { resolve } from 'path';
const __dirname = resolve();

const authControllers = {
  getRegister: (req, res) => {
    res.sendFile(__dirname+"/public/pages/admin/register.html");
  },
  postRegister: (rec, res) => {
    res.send("Route for register post");
  }
}

export { authControllers };
    
    



