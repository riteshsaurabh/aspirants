import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-10 w-[250px]" />
          <Skeleton className="h-4 w-full max-w-[450px]" />
        </div>

        <div className="flex overflow-auto pb-2">
          <Skeleton className="h-10 w-[100px] rounded-full mr-2" />
          <Skeleton className="h-10 w-[150px] rounded-full mr-2" />
          <Skeleton className="h-10 w-[100px] rounded-full mr-2" />
          <Skeleton className="h-10 w-[80px] rounded-full mr-2" />
          <Skeleton className="h-10 w-[80px] rounded-full mr-2" />
          <Skeleton className="h-10 w-[80px] rounded-full mr-2" />
          <Skeleton className="h-10 w-[80px] rounded-full" />
        </div>

        <div className="grid gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-[300px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                  <Skeleton className="h-6 w-[100px]" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex flex-wrap gap-2 mt-4">
                  <Skeleton className="h-6 w-[80px] rounded-full" />
                  <Skeleton className="h-6 w-[120px] rounded-full" />
                  <Skeleton className="h-6 w-[100px] rounded-full" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  <Skeleton className="h-9 w-[100px]" />
                  <Skeleton className="h-9 w-[100px]" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
