import {request} from './request'

export function getCarriers() {
  return request({
    url: '/v3/trackings/carriers',
    method: 'get',
    data: {
      lang: 'cn'
    }
  })
}
export function addOrder(tracking_numbers, courier_code) {
  return request({
    url: '/v3/trackings/create',
    // method: 'post',
    data: {
      tracking_numbers,
      courier_code
    }
  })
}
export function getOrder(tracking_numbers) {
  return request({
    url: '/v3/trackings/get?tracking_numbers=' + tracking_numbers,
    method: 'get',

  })
}


