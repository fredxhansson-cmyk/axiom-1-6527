import { loadStripe } from '@stripe/stripe-js';
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: [{
      price: 'price_1JXXXXXXXXXXXXXXXX',  // replace with your actual price id
      quantity: 1
    }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}`,
  });

  res.json({ id: session.id });
};