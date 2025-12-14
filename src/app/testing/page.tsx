import { Button } from "@/components/ui/button";

export default function Testing() {
    return <div className="grid grid-cols-4 gap-4">
  {/* kiri: 3/4 */}
  <div className="col-span-3 bg-blue-500">
    kotak kiri (3/4)
  </div>

  {/* kanan: 1/4 */}
  <div className="col-span-1 bg-red-500">
    kotak kanan (1/4)
  </div>
</div>

} 