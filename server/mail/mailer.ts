import nodeMailer from 'nodemailer'
import pug from 'pug'

const sender = 'nnnuuuooon@gmail.com'   
const password = 'Nuon0987' 
const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: sender, 
        pass: password 
    }
});

export const sendMail = () => {
    
    const myTemplate = pug.compileFile('server/mail/templates/contact/html.pug')
    const mySubject = pug.compileFile('server/mail/templates/contact/subject.pug')
    const mailOptions = {
        from: '"Sample Mail 👻" <nnnuuuooon@gmail.com>', 
        to: 'dreamingdexiaoxiaohao@gmail.com', 
        subject: mySubject({name: 'test'}),
        html: myTemplate({name: 'test'})
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodeMailer.getTestMessageUrl(info));
    })

}
