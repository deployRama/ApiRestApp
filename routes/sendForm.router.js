const express = require('express');
const sendFormService = require('../services/sendForm.service');

const service = new sendFormService();
const router = express.Router();


router.post('/',
  async (req, res, next) => {
    try {
      const data = req.body;
      const rta = await service.sendMail(data);
      res.status(201).json(rta);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;

