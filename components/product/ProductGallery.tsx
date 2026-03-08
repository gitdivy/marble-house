"use client";

import Image from "next/image";

export default function ProductGallery() {
  return (
    <div className="space-y-4">

      <div className="relative w-full aspect-square bg-neutral-100">

        <Image
          src="/images/basin.jpg"
          alt="Lotus Luxe Basin"
          fill
          className="object-cover"
        />

      </div>

      <div className="grid grid-cols-3 gap-4">

        <div className="relative aspect-square bg-neutral-100">
          <Image
            src="/images/basin.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative aspect-square bg-neutral-100">
          <Image
            src="/images/basin.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative aspect-square bg-neutral-100">
          <Image
            src="/images/basin.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

      </div>

    </div>
  );
}