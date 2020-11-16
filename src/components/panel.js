import PropTypes from 'prop-types';
import ButtonKey from './button';

export default function Panel(props) {
  const { clickHandler } = props;
  return (
    <fragment>
      <div className="button-row">
        <ButtonKey value="AC" type="button type3" clickCallBack={clickHandler} />
        <ButtonKey value="+/-" type="button type3" clickCallBack={clickHandler} />
        <ButtonKey value="%" type="button type3" clickCallBack={clickHandler} />
        <ButtonKey value="/" type="button type2" clickCallBack={clickHandler} />
      </div>
      <div className="button-row">
        <ButtonKey value="7" type="button type1" clickCallBack={clickHandler} />
        <ButtonKey value="8" type="button type1" clickCallBack={clickHandler} />
        <ButtonKey value="9" type="button type1" clickCallBack={clickHandler} />
        <ButtonKey value="X" type="button type2" clickCallBack={clickHandler} />
      </div>
      <div className="button-row">
        <ButtonKey value="4" type="button type1" />
        <ButtonKey value="5" type="button type1" />
        <ButtonKey value="6" type="button type1" />
        <ButtonKey value="-" type="button type2" />
      </div>
      <div className="button-row">
        <ButtonKey value="1" type="button type1" clickCallBack={clickHandler} />
        <ButtonKey value="2" type="button type1" clickCallBack={clickHandler} />
        <ButtonKey value="3" type="button type1" clickCallBack={clickHandler} />
        <ButtonKey value="+" type="button type2" clickCallBack={clickHandler} />
      </div>
      <div className="button-row last-row">
        <ButtonKey value="0" type="button type1" clickCallBack={clickHandler} />
        <ButtonKey value="." type="button type1" clickCallBack={clickHandler} />
        <ButtonKey value="=" type="button type2" clickCallBack={clickHandler} />
      </div>
    </fragment>
  );
}

Panel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
