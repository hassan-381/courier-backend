import zod from "zod";
import { JOB_STATUS } from "../config/enums/enums.js";

const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});
