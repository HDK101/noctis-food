class HomeController {
  static async index(ctx) {
    return ctx.render('home');
  }
}

export default HomeController;
