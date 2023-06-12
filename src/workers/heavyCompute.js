import { parentPort, workerData } from 'worker_threads';
parentPort.postMessage(heavyCompute(workerData.numberOfExecution))

function heavyCompute(numberOfExecution) {
  let i = 0;
  for (i; i < numberOfExecution; i++) {
    console.log(`i -> ${i}`);
  }
  return i;
}