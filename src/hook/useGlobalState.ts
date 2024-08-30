import { createGlobalState } from "react-hooks-global-state";

interface stateType {
  isOpenLoader: boolean
}

const initialState: stateType = {
  isOpenLoader: false
};

const { useGlobalState } = createGlobalState(initialState);
export { useGlobalState }