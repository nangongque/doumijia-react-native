import R from 'ramda'
import * as RA from 'ramda-adjunct'

const toCamelCase = (str: string) =>
  str.replace(/[-_]([a-z])/g, (m) => m[1].toUpperCase())

const toSnakeCase = (str: string) =>
  str.replace(/([A-Z])/g, (x) => R.concat('_', x.toLowerCase()))

const isNotNilObject = R.allPass([RA.isNotNil, RA.isObj])

/**
 * Always returns null.
 *
 * @func
 * @category Object
 *
 * @example
 *
 *        mapKeysAndValues(([a, b]) => [b, a], { foo: "bar", baz: "boo" })
 *        // { bar: "foo", boo: "baz" }
 *
 * @sig ([a] -> [b]) -> Object -> Object
 */
const mapKeysAndValues = R.useWith(R.compose(R.fromPairs, R.map), [
  R.identity,
  R.toPairs,
])

// camelizeKeys
const camelizeObj = mapKeysAndValues(
  R.juxt([R.o(toCamelCase, R.head), R.o((x) => camelizeKeys(x), R.last)]),
)

const camelizeArray: (input: any[]) => any[] = R.map((x) => camelizeKeys(x))

export const camelizeKeys = R.cond([
  [RA.isArray, camelizeArray],
  [RA.isFunction, R.identity],
  [isNotNilObject, camelizeObj],
  [R.T, R.identity],
])

// snakelizeKeys
const snakelizeObj = mapKeysAndValues(
  R.juxt([R.o(toSnakeCase, R.head), R.o((x) => snakelizeKeys(x), R.last)]),
)

const snakelizeArray: (input: any[]) => any[] = R.map((x) => snakelizeKeys(x))

export const snakelizeKeys = R.cond([
  [RA.isArray, snakelizeArray],
  [RA.isFunction, R.identity],
  [isNotNilObject, snakelizeObj],
  [R.T, R.identity],
])

export const inTimeRange = (start: number, end: number) => {
  if (!start || !end) return true
  const now = Date.now()
  return now > start * 1000 && now < end * 1000
}

// TODO: fix type
export const filterTimeRangeAndSortByWeight = (arr: any[]) => {
  return arr
    .filter((item) =>
      inTimeRange(item.startedAtTimestamp, item.endedAtTimestamp),
    )
    .sort(weightSorter)
}

export const activityInTime = (start: number, end: number) => {
  const now = Date.now()
  return (
    (!start && !end) ||
    (now > start * 1000 && now < end * 1000) ||
    (!start && now < end * 1000) ||
    (!end && now > start * 1000)
  )
}

/**
 * 根据键值合并两个数组
 * example
 * mergeByKey([{a: 1, b:2}], [{a:1, c: 2}], ['a'])
 * [{a: 1, b: 2, c:2}]
 */
export const mergeByKey = (
  array1: object[],
  array2: object[],
  keys?: string[],
  targetKey?: string,
) => {
  let originKey = 'id',
    matchKey = 'id'
  if (keys) {
    if (keys.length === 1) {
      originKey = keys[0]
      matchKey = keys[0]
    }
    if (keys.length === 2) {
      originKey = keys[0]
      matchKey = keys[1]
    }
  }

  return array1.reduce((p, c) => {
    const matchValue = c[originKey]

    const matchObject = R.compose(
      R.dissoc(matchKey),
      R.find(R.propEq(matchKey, matchValue)),
    )(array2)

    if (targetKey) {
      return p.concat([Object.assign({}, c, { [targetKey]: matchObject })])
    } else {
      return p.concat([Object.assign({}, c, matchObject)])
    }
  }, [])
}

/**
 * 向数组对象对应的键值插入元素，若键值不存在则创建
 * objectPush({}, a, 1) => {a: [1]}
 */
function objectPush<T>(obj: { [key: string]: T[] }, key: string, item: T) {
  if (key in obj) {
    obj[key].push(item)
  } else {
    obj[key] = [item]
  }
  return obj
}

function weightSorter(a, b) {
  return b.weight - a.weight
}

export { objectPush, weightSorter }
