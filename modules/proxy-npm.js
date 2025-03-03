const { exec } = require('child_process');

function Proxy() {}

function setupProxy() {
  console.log("called pm2")
  
  exec('./modules/connect-proxy.sh start_proxy', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing Proxy: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(stdout)
  });
};

function stopProxy() {
  exec('./modules/connect-proxy.sh stop_proxy', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error stopping Proxy: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
  });
};

module.exports = { setupProxy, stopProxy };
