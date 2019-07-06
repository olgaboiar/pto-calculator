import axios from "axios";
import HttpClient from "../HttpClient";

jest.mock('axios');
axios.mockResolvedValue();

describe("HttpClient.js", () => {

  it("calls axios#post with path, data and", () => {
    const testHttpClient = new HttpClient();
    const path = 'http://localhost:3000/test';
    const data = { foo: 'bar' };

    testHttpClient.post(path, data);

    expect(axios.post).toBeCalledWith(path, data);
  });
});
