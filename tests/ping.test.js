const axios = require("axios");

test("ping returns pong", async () => {
  const res = await axios.get("http://localhost:3000/ping");
  expect(res.data).toBe("pong");
});
