import { NextApiResponse } from "next/server";
// import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const from = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const { body } =await req.json();
    const { email, name, message } = body;
    const { data, error } = await resend.emails.send({
        from: from,
        to: ["kkverma30122001@gmail.com", email],
        name: name,
        react: (
            <>
                <h1>{name}</h1>
                <p>Thank you for contacting us</p>
                <p>New messgage submitted</p>
                <p>{message}</p>
            </>
        ),
    });

    if (error) {
        return res.status(400).json(error);
    }

    res.status(200).json(data);
}
