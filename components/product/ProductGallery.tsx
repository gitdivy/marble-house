"use client"

import { useState } from "react"
import Image from "next/image"
import { urlFor } from "@/lib/sanityClient"

export default function ProductGallery({ images }: any) {

  const [activeImage, setActiveImage] = useState(images?.[0])

  if (!images || images.length === 0) return null

  return (

    <div className="grid grid-cols-[90px_1fr] gap-6">

      {/* Thumbnails */}
      <div className="flex flex-col gap-4">

        {images.map((img: any, i: number) => (

          <button
            key={i}
            onClick={() => setActiveImage(img)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border
            ${activeImage === img ? "border-black" : "border-neutral-200"}`}
          >

            <Image
              src={urlFor(img).width(200).url()}
              alt="thumbnail"
              fill
              className="object-cover"
            />

          </button>

        ))}

      </div>

      {/* Main Image */}
      <div className="relative w-full aspect-square bg-neutral-100 rounded-xl overflow-hidden">

        <Image
          src={urlFor(activeImage).width(1200).url()}
          alt="product"
          fill
          className="object-cover transition duration-700 hover:scale-110"
        />

      </div>

    </div>

  )
}