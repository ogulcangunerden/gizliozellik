'use client'
 
import ReactDOM from 'react-dom'
 
export function PreloadResources() {
  ReactDOM.preload('images/hero/hero.webp', { as: 'image' })
 
  return null
}