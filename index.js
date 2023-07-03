const { default: axios } = require("axios");
const express = require("express");
const app = express();


app.listen(8800, () => {
  console.log("backend running");
});

app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response)
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json();
  }
});
