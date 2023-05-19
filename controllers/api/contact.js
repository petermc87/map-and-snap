const dataController = {
    async contactForm (req, res, next) {
        try{
            const name = req.body.name;
            const email = req.body.email;
            const message = req.body.message;
            const mail = {
                from: name,
                to: 'peter@mapandsnap.org',
                subject: 'Contact Form submission',
                html: `<p>Name: ${name}</p>
                       <p>Email: ${email}</p>
                       <p>Message: ${message}</p>`,
            }
            next()
            contactEmail.sendMail(mail, (error) => {
                if(error){
                    res.json({ status: 'ERROR'})
                } else {
                    res.json({ status: 'Message Sent'})
                }
            })
        } catch (e) {
            res.status(400).json(e)
        }
    }
}

module.exports =  dataController 


// //Require nodemailer here.
// const nodemailer = require()
// require('.env')

// //Authorizing the receving email address.
// const contactInstance = () => {
//     const contactForm = nodemailer.createTransport({
//         service: 'gmail',
//         auth:{
//             user: process.env.REACT_APP_GMAIL,
//             pass: process.env.REACT_APP_PASS
//         },
//     })
    
//     //Verify email.
//     contactForm.verify((error) => {
//         if(error) {
//             console.log(error)
//         } else {
//             console.log('Ready to send')
//         }
//     })
// }
