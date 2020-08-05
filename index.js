const express = require('express');
const app = express();
const mailer = require('@sendgrid/mail');
mailer.setApiKey('<API-Key>');
// Setting configurations
const msg = {
    to: ['arpittrivedi2425@gmail.com', 'jaanbabu0225@gmail.com'],
    from: 'noreply@example.com',
    subject: 'Message sent for demo purpose',
    html: `<h1>New message </h1>  
         <p>Some demo text .</p>`,
};
app.get('/', (req, res) => {
    mailer.send(msg, function (err, json) {
        if (err) {
            console.log(err);

            // Writing error message
            res.send('Failed');
        } else {
            // Writing success message
            res.send('success');
        }
    });
});
app.listen(3000, (req, res) => {
    console.log('server');
});
