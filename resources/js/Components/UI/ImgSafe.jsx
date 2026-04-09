import { useEffect, useState } from 'react'
import { ImageOff } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ImgSafe({ src, alt, className = '' }) {
  const [ok, setOk] = useState(true)

  useEffect(() => {
    setOk(true)
  }, [src])

  if (!ok) {
    return (
      <div className={classNames('flex items-center justify-center bg-neutral-100 text-neutral-400', className)}>
        <ImageOff className="h-6 w-6" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setOk(false)}
    />
  )
}
