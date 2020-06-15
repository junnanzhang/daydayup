将 React 组件从类转换到函数组件是相当简单的。 我们要做的就是
1
```
import React from "react";
import { connect } from "react-redux";
import { toggleSwitch } from "./UiReducer";

const Toggle = ({ ui, toggleSwitch }) => (
  <div>
    <div>{JSON.stringify(ui)}</div>
    <input type="checkbox" value={ui.toggle} onChange={toggleSwitch} />
  </div>
);

const mapStateToProps = ({ ui }) => ({
  ui
});

export default connect(
  mapStateToProps,
  { toggleSwitch }
)(Toggle);
```

2
```
import React from "react";
import { connect, useSelector } from "react-redux";
import { toggleSwitch } from "./UiReducer";

const Toggle = ({ toggleSwitch }) => {
  const ui = useSelector(state => state.ui);
  return (
    <div>
      <div>{JSON.stringify(ui)}</div>
      <input type="checkbox" value={ui.toggle} onChange={toggleSwitch} />
    </div>
  );
};

export default connect(
  null,
  { toggleSwitch }
)(Toggle);
```

第3步 - useDispatch
```
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE } from "./UiReducer";

const Toggle = () => {
  const ui = useSelector(state => state.ui);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{JSON.stringify(ui)}</div>
      <input
        type="checkbox"
        value={ui.toggle}
        onChange={() => dispatch({ type: TOGGLE })}
      />
    </div>
  );
};

export default Toggle;
```