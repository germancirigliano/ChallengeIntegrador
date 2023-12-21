const userCredentials = {
  email: 'pepe@gmail.com',
  password: 'pepe123'
}

module.exports = {
  getLogin: (req,res) => res.render('./auth/login'),
  postLogin:  (req, res) => {
    const { email, password } = req.body;
    const emailValidation = userCredentials.email == email;
    const passwordValidation = userCredentials.password == password;

    req.session.isLogged = emailValidation && passwordValidation ? true : false;

    if (req.session.isLogged) {
      res.locals.isLogged = true;
      return res.redirect('/admin');
    }

    return res.status(401).send('Credenciales inválidas');
  },

  getRegister: (req, res) => {
    res.render('./auth/register');
  },
  
  postRegister: (rec, res) => {
    res.send("Route for register post");
  },

getLogout: (req,res) => {
  req.session.isLogged = false;
  res.redirect('/')

},
};
    
    



