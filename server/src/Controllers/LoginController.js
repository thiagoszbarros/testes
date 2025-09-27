import UsersSchema from "../Schemas/UsersSchema.js";

export class LoginController {
  async login(req, res) {
    const { username, password } = req.body;
 
    const User = await UsersSchema.findOne({ username });

    User && User.password === password ?
      res.status(200).json({ message: 'Login successful' }) :
      res.status(401).json({ message: 'Invalid credentials' });
  }
}

export default LoginController;