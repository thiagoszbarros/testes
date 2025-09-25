export class LoginController {
  login(req, res) {
    const { username, password } = req.body;
    username === 'admin' && password === 'password' ?
      res.status(200).json({ message: 'Login successful' }) :
      res.status(401).json({ message: 'Invalid credentials' });
  }
}

export default LoginController;