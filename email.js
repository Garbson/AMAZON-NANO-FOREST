
const nodemailer = require('nodemailer');

// Configurar o Nodemailer com suas credenciais de e-mail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, 
  secure: true,
  auth: {
    user: 'garbsonsouza2602@gmail.com',
    pass: 'minhamae',
  }});


transporter.sendMail({
from: 'MAnual do DEV<garbsonsouza2602@gmail.com>',
to: 'garbson.santos@sou.ufac.br',
subject: 'Enviando email com Nodmailer',
html: '<H1>OLá, dev</H1>',
text: 'Olá, dev',
})
.then(() => console.log('email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar email:', err));

