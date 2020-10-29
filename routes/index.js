var express = require('express');
var router = express.Router();
var LCtrl = require('../controllers/leads')
const fse = require('fs-extra')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DPLYR CRM' });
});
router.get('/leads', async  function(req, res, next) {
  var file = await fse.readJSONSync('/Users/ahmedmgh/WORK/DPLYR/Tech/utils/crm/data.json')

  res.render('all', { title: 'DPLYR CRM', data: file });
});
router.post('/leads/add', LCtrl.addLead)
module.exports = router;
