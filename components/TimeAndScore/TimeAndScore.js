import { TimeScoreContainer } from "./TimeAndScore.styles";
import { Time } from "../Time";
import { Score } from "../Score";

const TimeAndScore = () => (
  <TimeScoreContainer>
    <Time />
    <Score />
  </TimeScoreContainer>
);

export default TimeAndScore;
