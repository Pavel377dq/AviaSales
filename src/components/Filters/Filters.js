import React from "react";
import classes from "./Filters.module.scss";
import { connect } from "react-redux";
import * as actions from '../../actions'
const Filters = ({
  state,
  doAllOn,
  doAllOff,
  doNoTransferOn,
  doNoTransferOff,
  doOneTransferOn,
  doOneTransferOff,
  doTransferTwoOn,
  doTransferTwoOff,
  doTransferThreeOff,
  doTransferThreeOn
})=> {
  console.log(state)

  const {arr} =state
  return (


  <aside className={classes.filters}>
  <div className={classes["filters-header"]}>Количество пересадок</div>
  <div onClick={arr[0].isChecked ? doAllOff: doAllOn} className={classes["filter"]}>
    <div  className={classes["checkbox-wrap"]}>
      <input
        type="checkbox"
        checked={arr[0].isChecked}
        className={classes["custom-checkbox"]}
        id="1"
        name="happy"
        value="yes"
      />
      <label for="1" />
    </div>
    Все
  </div>
  <div onClick={!arr[1].isChecked ? doNoTransferOn: doNoTransferOff} className={classes["filter"]}>
    <div className={classes["checkbox-wrap"]}>
      <input
        type="checkbox"
        checked={arr[1].isChecked}
        className={classes["custom-checkbox"]}
        id="2"
        name="happy"
        value="yes"
      />
      <label for="2" />
    </div>
    Без пересадок
  </div>
  <div onClick={!arr[2].isChecked ? doOneTransferOn: doOneTransferOff} className={classes["filter"]}>
    <div className={classes["checkbox-wrap"]}>
      <input
        type="checkbox"
        checked={arr[2].isChecked}
        className={classes["custom-checkbox"]}
        id="3"
        name="happy"
        value="yes"
      />
      <label for="3" />
    </div>
    1 пересадка
  </div>
  <div onClick={!arr[3].isChecked ? doTransferTwoOn: doTransferTwoOff} className={classes["filter"]}>
    <div className={classes["checkbox-wrap"]}>
      <input
        type="checkbox"
        checked={arr[3].isChecked }
        className={classes["custom-checkbox"]}
        id="4"
        name="happy"
        value="yes"
      />
      <label for="4" />
    </div>
    2 пересадки
  </div>
  <div onClick={!arr[4].isChecked ? doTransferThreeOn: doTransferThreeOff} className={classes["filter"]}>
    <div className={classes["checkbox-wrap"]}>
      {" "}
      <input
        type="checkbox"
        checked={arr[4].isChecked}
        className={classes["custom-checkbox"]}
        id="5"
        name="happy"
        value="yes"
      />
      <label for="5" />
    </div>
    3 пересадки
  </div>
</aside>
  );
}

const mapStateToProps = (state)=>{

   return {state:state}
   
}

export default connect(mapStateToProps,actions)(Filters)