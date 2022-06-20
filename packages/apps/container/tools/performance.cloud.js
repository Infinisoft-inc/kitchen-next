const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

const formFactor = process.argv?.[2] ?? 'desktop';
const presets = {
  desktop: {
    extends: 'lighthouse:default',
    settings: {
      formFactor,
      throttling: {
        rttMs: 40,
        throughputKbps: 10240,
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0,
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0,
      },
      screenEmulation: {
        mobile: false,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1,
        disabled: false,
      },
      emulatedUserAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6)  AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4143.7 Safari/537.36 Chrome-Lighthouse',
    },
  },
  mobile: {
    extends: 'lighthouse:default',
    settings: {
      formFactor,
    },
  },
};
const config = presets[formFactor];
const url = 'https://app.micro.infini-soft.com/components/container/index.html';

// // Serve up public/ftp folder
// var serve = serveStatic('dist', { index: ['index.html', 'index.htm'] });

// // Create server
// var server = http.createServer(function onRequest(req, res) {
//   serve(req, res, finalhandler(req, res));
// });

// // Listen
// server.listen(5000);

(async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = { logLevel: 'info', output: 'html', port: chrome.port };

  const runnerResult = await lighthouse(url, options, config);

  const reportHtml = runnerResult.report;
  fs.writeFileSync(`analyze/performance/${formFactor}-${new Date().getTime().toFixed(0)}.html`, reportHtml);

  console.log(`
PERFORFMANCE ANALYSIS

Target: ${formFactor}
Powered 🚀 by Infinisoft
--------------------------
`);
  console.log('Report is done for', runnerResult.lhr.finalUrl);
  console.log(
    `Target: ${formFactor}`,
    'Performance score was',
    runnerResult.lhr.categories.performance.score * 100,
  );

  await chrome.kill();
})();
