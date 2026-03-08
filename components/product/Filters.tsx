import { SlidersHorizontal } from "lucide-react";

export default function Filters() {

  return (

    <div className="flex items-center justify-between border-b pb-6">

      {/* Filters */}
      <div className="flex items-center gap-8">

        <button className="text-sm">Category</button>

        <button className="text-sm">Material</button>

        <button className="text-sm">Color</button>

        <button className="text-sm">Price</button>

      </div>

      {/* Sort */}
      <div className="flex items-center gap-2 text-sm">

        <SlidersHorizontal size={16} />

        Sort

      </div>

    </div>
  );
}