import nodeMailer from 'nodemailer'
import pug from 'pug'

const transporter = nodeMailer.createTransport({
    host: process.env.MAIL_SMTP,
    port: process.env.MAIL_PORT as any,
    secure: false, 
    auth: {
        user: process.env.MAIL_USERNAME, 
        pass: process.env.MAIL_PASSWORD 
    }
});

export const sendMail = (receiver: string) => {
    const myTemplate = pug.compileFile('server/mail/templates/contact/html.pug')
    const mySubject = pug.compileFile('server/mail/templates/contact/subject.pug')
    const mailOptions = {
        from: `"Sample Mail 👻" <${process.env.MAIL_USERNAME}>`, 
        to: receiver, 
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
