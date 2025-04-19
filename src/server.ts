import app from "./app";
import config from "./config";


async function main() {
  const server = app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}`);
  });
}

main();
