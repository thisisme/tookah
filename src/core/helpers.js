const randomBoolen = () => {
  return Math.random() <= 0.5
}

const getUniqueIndexes = (count, indexes) => {
  const tmp = indexes
  const ret = []
  for (var i = 0; i < count; i += 1) {
    const index = Math.floor(Math.random() * tmp.length)
    const removed = tmp.splice(index, 1)
    // Since we are only removing one element
    ret.push(removed[0])
  }
  return ret
}

export default {
  randomBoolen,
  getUniqueIndexes
}
