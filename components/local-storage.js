import { useState, useEffect } from 'react'

export default function useLocalStor(defaultValue, key) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const localStor = localStorage.getItem(key);
    if (localStor !== null) {
      setValue(JSON.parse(localStor));
    }
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue];
}