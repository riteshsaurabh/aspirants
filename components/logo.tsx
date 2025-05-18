import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 48, height: 48 },
  }

  const { width, height } = sizes[size]

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative overflow-hidden rounded-md">
        <Image
          src="/placeholder.svg?height=100&width=100"
          alt="UPSC Aspirants AI Logo"
          width={width}
          height={height}
          className="object-contain"
          priority
        />
      </div>
      <span className="font-bold text-xl hidden sm:inline-block">UPSC Aspirants AI</span>
    </Link>
  )
}
