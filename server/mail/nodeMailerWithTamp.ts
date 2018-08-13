var sender = 'nnnuuuooon@gmail.com'   
var password = 'Nuon0987' 

var nodeMailer = require("nodemailer");
var Email = require('email-templates');
const pug = require('pug');

var transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: sender, 
        pass: password 
    }
});


const e = new Email({
    views: { root: './templates/' },
    message: {
        from: sender
    },
    transport: {
      jsonTransport: true
    }
})


export const sendMail = function (email:string, username:string, name:string, tokenUrl:string) {
    
    const myTemplate = pug.compileFile('server/mail/templates/resetPassword/html.pug');
    let mailOptions = {
        from: '"Sample Mail 👻" <nnnuuuooon@gmail.com>', 
        to: 'dreamingdexiaoxiaohao@gmail.com', 
        subject: 'Hello ✔', 
        html: myTemplate({name: 'test'}),
    };
    transporter.sendMail(mailOptions, (error:any, info:any) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodeMailer.getTestMessageUrl(info));
    });

};
