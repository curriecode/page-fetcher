const request = require('request');
const fs = require('fs');
const args = process.argv.splice(2);

request(args[0], (error, response, body) => {
  if (error) {
    throw new Error("woops file not found!");
  }
  fs.writeFile(args[1], body, (error) => {
    if (error) {
      throw new Error("woops file not found!");
    }
    console.log(`Downloaded and saved  ${response['headers']['content-length']} bytes to ${args[1]}`);
  });
});
