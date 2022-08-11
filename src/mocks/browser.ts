import { setupWorker, SetupWorkerApi } from "msw";
import { handlers } from "./handlers";

const worker = setupWorker(...handlers);

export default worker;
