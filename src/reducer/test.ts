export const INCREMENT = "INCREMENT";
export const REDUCE = "REDUCE";

export const incrementAction = {type: INCREMENT, count: 2};
export const reduceAction = {type: REDUCE, count: 1};

interface ReduxState{
  num: Number
}

interface Action{
  type: String,
  count: Number
}

const initData = {
  num: 0
}

const test = (state: ReduxState = initData, action: Action) => {}

export { test }