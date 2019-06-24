import types from './types'

export default {
  getPeoples(context) {
    setTimeout(() => {
      context.commit(types.GET_PEOPLES, [
        {
          name: 'Jack',
          age: 28
        },
        {
          name: 'Bob',
          age: 35
        },
        {
          name: 'Jonece',
          age: 23
        },
        {
          name: 'White',
          age: 29
        },
      ])
    }, 1000);
  }
}
