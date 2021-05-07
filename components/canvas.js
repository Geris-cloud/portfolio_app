import { createRef, useEffect } from "react";

export default function Canvas({ anim }, props) {
  const canvasStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1',
    width: '100%',
    height: '100vh',
  }

  const canvasRef = createRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

  }, [])

  // if (anim) {
  return (
    //  - do atrybutów canvas ? 
    <canvas ref={canvasRef} style={canvasStyle}  {...props} />
  )
  // } else {
  // return ('')
  // }
}