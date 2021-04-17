const { Worker } = require("worker_threads");

function startWorker(filePath) {
  return new Worker(filePath);
}

function endWorker(worker) {
  worker.terminate();
}

function* getEntryPoints(event) {
  const { bundleGraph } = event;
  const bundles = bundleGraph.getBundles();
  for (const bundle of bundles) {
    const entryPoint = bundle.filePath;
    if (!entryPoint) {
      continue;
    }
    yield entryPoint;
  }
}

export const createRunner = () => {
  let workers = [];
  return (event) => {
    for (const worker of workers) {
      endWorker(worker);
    }
    workers.length = 0;
    for (const entryPoint of getEntryPoints(event)) {
      workers.push(startWorker(entryPoint));
    }
  };
};
