exports.status404= (req, res, next) => {
  console.log("error");
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  };