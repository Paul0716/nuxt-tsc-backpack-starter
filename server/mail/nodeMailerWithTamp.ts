var sender = 'nnnuuuooon@gmail.com'   // The emailto use in sending the email
//(Change the @ symbol to %40 or do a url encoding )
var password = 'Nuon0987'  // password of the email to use

var nodeMailer = require("nodemailer");
var Email = require('email-templates');
const pug = require('pug');

var transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: sender, // generated ethereal user
        pass: password // generated ethereal password
    }
});





// create template based sender function
// assumes text.{ext} and html.{ext} in template/directory
/*var sendResetPasswordLink = transporter.templateSender(
    new Email({
          views: { root: './templates/resetPassword' },
          message: {
              from: "dreamingdexiaoxiaohao@gmail.com"
          },
          transport: {
            jsonTransport: true
          }
    })
);*/

const e = new Email({
    views: { root: './templates/' },
    message: {
        from: sender
    },
    transport: {
      jsonTransport: true
    }
})


export const sendPasswordReset = function (email:string, username:string, name:string, tokenUrl:string) {
    // transporter.template
    /*sendResetPasswordLink({
        to: email,
        subject: 'Password Reset - YourDomain.com'
    }, {
        name: name,
        username: username,
        token: tokenUrl
    }, function (err:any, info:any) {
        if (err) {
            console.log(err)
        } else {
            console.log('Link sent\n'+ JSON.stringify(info));
        }
    });*/

    // send mail with defined transport object
    
const myTemplate = pug.compileFile('server/mail/templates/resetPassword/html.pug');
let mailOptions = {
    from: '"Fred Foo 👻" <nnnuuuooon@gmail.com>', // sender address
    to: 'dreamingdexiaoxiaohao@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    html: myTemplate({name: 'test'}), // plain text body
};
transporter.sendMail(mailOptions, (error:any, info:any) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodeMailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

};
