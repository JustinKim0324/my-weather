import { useState, useCallback } from 'react'

export function useGeolocation() {
  const [locating, setLocating] = useState(false)
  const [geoError, setGeoError] = useState(null)

  const getLocation = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('이 브라우저는 위치 서비스를 지원하지 않습니다.'))
        return
      }

      setLocating(true)
      setGeoError(null)

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocating(false)
          resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude })
        },
        (err) => {
          setLocating(false)
          const msg =
            err.code === 1 ? '위치 권한이 거부됐습니다.' :
            err.code === 2 ? '위치를 확인할 수 없습니다.' :
            '위치 요청 시간이 초과됐습니다.'
          setGeoError(msg)
          reject(new Error(msg))
        },
        { timeout: 10000 }
      )
    })
  }, [])

  return { locating, geoError, getLocation }
}
