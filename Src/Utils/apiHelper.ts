export function returnToDispatch(dispatch: any, type: any, payload?: any) {
  dispatch({
    type: type,
    payload: payload,
  });
}
