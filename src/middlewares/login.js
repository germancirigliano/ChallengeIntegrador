const isLogged = (req,res,next) => {
  if(req.session.isLogged){
   return next();
  }

  res.status(401).send('Debes loguearte para ingresar a esta vista')
}

module.exports = {isLogged}