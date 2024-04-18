import nodemailer from "nodemailer";
import "dotenv/config";

const { PASSWORD, NAME } = process.env;

const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 465,
    secure: true,
    auth: {
        user: NAME,
        pass: PASSWORD,
    },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = data => {
    const email = {...data, from: NAME};
    return transport.sendMail(email)
}

export default sendEmail