import { Reporter } from "@parcel/plugin";

import { createRunner } from "./runner";

let runner;

export default new Reporter({
  async report({ event, options, logger }) {
    let { mode, hmrOptions } = options;

    // if (event.type !== "log") {
    //   console.info(event);
    // }

    if (mode === "production") {
      return;
    }

    if (!runner) {
      runner = createRunner();
    }

    switch (event.type) {
      // case "watchStart":
      //   break;
      // case "watchEnd":
      //   break;
      // case "buildStart":
      //   // console.log({ ...options });
      //   // console.log(options);
      // console.log(options.mode, hmrOptions);
      // break;
      case "buildSuccess": {
        runner(event);
        break;

        // {
        //   type: 'buildSuccess',
        //   changedAssets: Map(1) {
        //     'dd0e3b1957ee4b340eee5f52fb9bae51' => Asset(/Absolute/Path/parcel-reporter-node-runner/packages/tests/src/foo.js)
        //   },
        //   bundleGraph: BundleGraph {},
        //   buildTime: 72,
        //   requestBundle: [AsyncFunction: requestBundle]
        // }
        // const { changedAssets, bundleGraph, buildTime, requestBundle } = event;
        // console.log(bundleGraph.getMainEntry());
        // for (const changedAsset of changedAssets) {
        // .getCode() returns the compiled code
        // changedAsset[1].getCode().then(console.log);
        // }
        break;
      }
      // case "buildProgress":
      //   break;
      // case "buildFailure":
      //   break;
    }
  },
});
