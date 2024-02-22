export const queryElBySelect = (selector, instance) => {
  return new Promise((resolve, reject) => {
    uni.createSelectorQuery().in(instance).selectAll(selector).fields({
      rect: true,
      scrollOffset: true,
      size:true
    }, data => {
      resolve(data)
    }).exec()
  })
}

export const querySingleElBySelect = (selector, instance) => {
  return new Promise((resolve, reject) => {
    try {
      uni.createSelectorQuery().in(instance).select(selector).boundingClientRect((data) => {
        resolve(data)
      }).exec()
    } catch (error) {
      reject(error)
    }
  })
}