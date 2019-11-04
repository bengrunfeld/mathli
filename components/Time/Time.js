import { connect } from "react-redux";
import { InfoBox } from "../InfoBox";
import { TimeLeft, BoxTitle } from "./Time.styles";
import { updateTime, INCREMENT } from "../../store/reducers/time";

const Time = ({ time }) => (
  <InfoBox>
    <TimeLeft>{time}</TimeLeft>
    <BoxTitle>Time</BoxTitle>
  </InfoBox>
);

const mapStateToProps = state => ({ time: state.time });

export default connect(mapStateToProps)(Time);
