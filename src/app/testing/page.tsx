import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
export default function Testing() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Link href="/testingHal">Ke halaman testingHal</Link>
      <Input />
    </div>
  );
}
