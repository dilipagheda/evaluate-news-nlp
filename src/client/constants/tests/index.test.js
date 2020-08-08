import {baseUrl} from '../index'

test('verify that baseUrl is not empty', () => {
    expect(baseUrl).not.toBe(undefined)
    expect(baseUrl).not.toBe(null)
    expect(baseUrl.length).not.toBe(0)
    expect(baseUrl.includes('http')).toBe(true)
})

