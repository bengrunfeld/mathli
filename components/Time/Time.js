import { connect } from "react-redux";
import { InfoBox } from "../InfoBox";
import { TimeLeft, BoxTitle } from "./Time.styles";
import { updateTime, INCREMENT } from "../../store/reducers/time";

const Time = ({ time, sendUpdateTime }) => {
  setTimeout(() => sendUpdateTime(INCREMENT), 1000);

  return (
    <InfoBox>
      <TimeLeft>{time}</TimeLeft>
      <BoxTitle>Time</BoxTitle>
    </InfoBox>
  );
};

const mapStateToProps = state => ({ time: state.time });
const mapDispatchToProps = { sendUpdateTime: updateTime };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Time);
