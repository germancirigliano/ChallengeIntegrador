import path from 'node:path';

const authControllers = {

    getRegister: (req, res) => {
        res.send("Route for register View");
      },
     postRegister: (rec, res)  => {
        res.send("Route for register post");
      },

      }
    
    export { authControllers };
    
    



