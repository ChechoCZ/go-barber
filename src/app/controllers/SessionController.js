const { User } = require('../models');
const flash = require('connect-flash');

class SessionController {
  async create(req, res) {
    return res.render('auth/signin');
  }

  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.flash('error', 'User not found!');
      return res.redirect('/');
    }

    if (!(await user.checkPassword(password))) {
      res.flash('error', 'Password did not match');
      return res.redirect('/');
    }

    req.session.user = user;

    return res.redirect('/app/dashboard')
  }

  destroy(req, res) {
    req.session.destroy(() => {
      res.clearCookie('root');
      return res.redirect('/');
    })
  }
}

module.exports = new SessionController();
