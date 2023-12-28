function SkeletonTasks() {
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="min-h-32 bg-default animate-pulse" />
        ))
      }
    </div>
  )
  
}
export default SkeletonTasks