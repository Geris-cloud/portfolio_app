import { useState, useEffect } from 'react'

export default function useLocalStor(value, storageKey) {
  const [state, setState] = useState(value);

  useEffect(() => {
    if (localStorage.getItem(storageKey) !== null) {
      setState(JSON.parse(localStorage.getItem(storageKey)));
    }
  }, [storageKey])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state))
  }, [storageKey, state])

  return [state, setState];
}