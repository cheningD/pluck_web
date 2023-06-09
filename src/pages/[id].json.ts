import { Response } from 'node-fetch';

export async function get({ params }) {
    return new Response(JSON.stringify(params.id), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}