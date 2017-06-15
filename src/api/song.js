/**
 * Created by Ben on 2017/6/9.
 */
import axios from 'axios'
import { commonParams } from './config'

export function getLyric (mid) {
  const url = 'https://ftbx.majy999.com/api/Qmusic/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 67232076,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((response) => {
    let ret = response.data
    if (typeof ret === 'string') {
      const reg = /^\w+\(({[^()]+})\)$/
      const mathes = ret.match(reg)
      if (mathes) {
        ret = JSON.parse(mathes[1])
      }
    }
    return Promise.resolve(ret)
  })
}
