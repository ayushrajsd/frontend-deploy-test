const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const { fork } = require("child_process");

// function calculateFibonacci(number) {
//   if (number <= 1) {
//     return number;
//   } else {
//     return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
//   }
// }

app.use(cors());
app.get("/fib", (req, res) => {
  const { number, requestNumber } = req.query;
  console.log("handler fn ran for req", requestNumber);
  if (!number || isNaN(number)) {
    res.status(400).send("invalid input");
  }
  // const answer = calculateFibonacci(number);
  /** forking the child process */
  const fiboRes = fork(path.join(__dirname, "fiboworker.js"));
  /** passing param / data to the child process */
  fiboRes.send({number:parseInt(number)});
  fiboRes.on("message", (answer) => {
    console.log("sending response for req" ,requestNumber )
    res.status(200).json({
      staus: "success",
      message: answer,
      requestNumber,
    });
    // fiboRes.kill();
    })
});

app.listen(3000, () => {
    console.log("server started at 3000");
});
