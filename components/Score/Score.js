import { connect } from "react-redux";
import { InfoBox } from "../InfoBox";
import { ScoreCount, BoxTitle } from "./Score.styles";

const Score = ({ score, sendUpdateTime }) => (
  <InfoBox>
    <ScoreCount>{score}</ScoreCount>
    <BoxTitle>Score</BoxTitle>
  </InfoBox>
);

const mapStateToProps = state => ({ score: state.score });

export default connect(mapStateToProps)(Score);
