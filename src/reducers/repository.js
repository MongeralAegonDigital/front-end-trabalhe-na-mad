const initialState = {
  data: []
}

export default function update(state = initialState, action) {
  if (action.type === 'ADD') {
    var data = action.amount;

    return { data: data }
  }

  return state
}
