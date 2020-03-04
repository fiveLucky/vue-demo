import types from './types'

export default {
  getPeoples(context) {
    setTimeout(() => {
      context.commit(types.GET_PEOPLES, [
        {
          label: 'Jack',
          value: 28
        },
        {
          label: 'Bob',
          value: 35
        },
        {
          label: 'Jonece',
          value: 23
        },
        {
          label: 'White',
          value: 29
        },
      ])
    }, 1000);
  }
}
