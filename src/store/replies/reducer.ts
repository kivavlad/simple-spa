import data from "../../json/data.json";

// Начальное состояние
const initialState: any = {
  reviews: data,
}

// Обработчик действий
function reducer(state = initialState) {
  return state
}

export default reducer;