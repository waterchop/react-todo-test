import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodos = (props) => {
  const { todoText, onChangeText, onClickAddText, disabled } = props;
  return (
    <div style={style} className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeText}
        disabled={disabled}
      />
      <button onClick={onClickAddText} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
