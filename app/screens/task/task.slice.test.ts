import reducer, { add, remove, toogleDone } from './task.slice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    entities: [],
  })
})

test('should handle a task being added to an empty list', () => {
  const previousState = {
    entities: [],
  }

  expect(reducer(previousState, add('Run the tests'))).toHaveProperty(
    'entities[0].title',
    'Run the tests',
  )
})

test('should handle a task being added to an existing list', () => {
  const previousState = {
    entities: [
      {
        id: 'ef96f017-e7bd-4787-9785-3ec1fbea39dd',
        title: 'Run the tests',
        done: false,
      },
    ],
  }

  expect(reducer(previousState, add('Use Redux'))).toHaveProperty('entities[1].title', 'Use Redux')
})

test('should handle a task being marked as done', () => {
  const previousState = {
    entities: [
      {
        id: 'ef96f017-e7bd-4787-9785-3ec1fbea39dd',
        title: 'Run the tests',
        done: false,
      },
    ],
  }

  expect(reducer(previousState, toogleDone('ef96f017-e7bd-4787-9785-3ec1fbea39dd'))).toHaveProperty(
    'entities[0].done',
    true,
  )
})

test('should handle a task being removed', () => {
  const previousState = {
    entities: [
      {
        id: 'ef96f017-e7bd-4787-9785-3ec1fbea39dd',
        title: 'Run the tests',
        done: false,
      },
    ],
  }

  expect(reducer(previousState, remove('ef96f017-e7bd-4787-9785-3ec1fbea39dd'))).toEqual({
    entities: [],
  })
})
