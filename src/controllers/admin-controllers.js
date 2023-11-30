import { resolve } from 'path';
const __dirname = resolve();
const adminController = {
  getEditPage: (req, res) => {
    res.sendFile(__dirname + "/public/pages/admin/edit.html");
  }
}

export default adminController;