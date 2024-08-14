const renderErrorPage = (req, res, next) => {
  res.status(404).render('404', {pageTitle: "404 - Not Found"})
}

module.exports = { renderErrorPage }