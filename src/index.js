import express from "express";
import { Worker } from "worker_threads";
const app = express();


app.get('/', (req, res) => {
    console.log(`___________NORMAL_EXECUTION___________`);
    return res.status(200).json({
        data: new Date(),
    });
});

app.get('/block-execution', (req, res) => {
    console.log(`___________BLOCK_EXECUTION___________`);
    const numberOfExecution = 1_000_000;
    let i = 0;
    for (i; i < numberOfExecution; i++) {
        console.log(`i -> ${i}`);
    }
    return res.status(200).json({
        data: new Date(),
        i
    });
});

app.get('/non-block-execution', (req, res) => {
    console.log(`___________NON_BLOCK_EXECUTION___________`,req.query.number);
    let numberOfExecution = parseInt(req.query.number,10) || 1_000_000;
    const worker = new Worker('./src/workers/heavyCompute.js', { workerData: { numberOfExecution } });
    worker.once("message", result => {
        console.log(`Result: ${result}`);
        return res.status(200).json({
            data: new Date(),
            result
        });
    });
    worker.on("error", error => {
        console.log(error);
        return res.status(200).json({
            data: new Date(),
            error
        });
    });

    worker.on("exit", exitCode => {
        console.log(exitCode);
    });
});

app.listen(9090, () => {
    console.log(`server is running at 9090`);
})