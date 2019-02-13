import FormData from 'form-data';
import { server } from './server.js';
import streamToPromise from 'stream-to-promise';

describe('server at route "/post" with method "POST"', () => {
    let options;
    const sentData = { title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'};
    beforeAll(async () => {
        const form = new FormData();
        Object.keys(sentData).forEach((key) => form.append(key, sentData[key]));
        await streamToPromise(form).then((payload) => {
            options = {
            method: 'POST',
            url: '/post',
            payload: payload,
            headers: form.getHeaders(),
            };
        });
    })
    it('should respond with sent data', async () => {
        const serverResponse = await server.inject(options);
        expect(serverResponse.result).toEqual(`Received: ${JSON.stringify(sentData)}`);
    });
    it('should return status code 200', async () => {
        
        const serverResponse = await server.inject(options);
        expect(serverResponse.statusCode).toEqual(200);
    });
});
describe('server', () => {
    const options = {
        method: 'GET',
        url: '/ping',
    };
    it('should return pong on receiving "ping"', async () => {
        const serverResponse = await server.inject(options);
        expect(serverResponse.result).toEqual('pong');
    });
    it('should return status code 200', async () => {
        const serverResponse = await server.inject(options);
        expect(serverResponse.statusCode).toEqual(200);
    });
});
