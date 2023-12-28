import ListTasks from "@/features/ListTasks";
import NavBar from "@/features/NavBar";
import SkeletonTasks from "@/features/SkeletonTasks";
import { Suspense } from "react";

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <NavBar />
      <Suspense fallback={<SkeletonTasks />}>
        <ListTasks />
      </Suspense>
    </div>
  )
}
