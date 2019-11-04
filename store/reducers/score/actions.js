import { UPDATE_SCORE } from "./types";

const updateScore = data => ({
  type: UPDATE_SCORE,
  data
});

export default updateScore;
