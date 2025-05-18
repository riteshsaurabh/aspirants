import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EnhancedAnalyticsDashboard } from "@/components/admin/enhanced-analytics-dashboard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analytics | Admin Dashboard",
  description: "Comprehensive analytics for the UPSC Aspirants AI platform",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Comprehensive analytics and insights for the UPSC Aspirants AI platform.
        </p>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <EnhancedAnalyticsDashboard />
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Generated Reports</CardTitle>
              <CardDescription>View and manage saved analytics reports.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Monthly User Growth Report</h3>
                    <p className="text-sm text-muted-foreground">Last generated: 2 days ago</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="text-sm text-primary underline">
                      Download PDF
                    </a>
                    <a href="#" className="text-sm text-primary underline">
                      View
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Content Engagement Analysis</h3>
                    <p className="text-sm text-muted-foreground">Last generated: 1 week ago</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="text-sm text-primary underline">
                      Download PDF
                    </a>
                    <a href="#" className="text-sm text-primary underline">
                      View
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Retention and User Journey Analysis</h3>
                    <p className="text-sm text-muted-foreground">Last generated: 2 weeks ago</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="text-sm text-primary underline">
                      Download PDF
                    </a>
                    <a href="#" className="text-sm text-primary underline">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Export Analytics Data</CardTitle>
              <CardDescription>Export platform analytics data in various formats.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <h3 className="text-lg font-medium">User Analytics</h3>
                  <p className="text-sm text-muted-foreground mb-4">Export user growth, retention, and behavior data</p>
                  <div className="flex gap-2">
                    <a href="#" className="text-sm text-primary underline">
                      Export CSV
                    </a>
                    <a href="#" className="text-sm text-primary underline">
                      Export Excel
                    </a>
                    <a href="#" className="text-sm text-primary underline">
                      Export JSON
                    </a>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <h3 className="text-lg font-medium">Content Analytics</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Export content performance and engagement metrics
                  </p>
                  <div className="flex gap-2">
                    <a href="#" className="text-sm text-primary underline">
                      Export CSV
                    </a>
                    <a href="#" className="text-sm text-primary underline">
                      Export Excel
                    </a>
                    <a href="#" className="text-sm text-primary underline">
                      Export JSON
                    </a>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <h3 className="text-lg font-medium">Performance Metrics</h3>
                  <p className="text-sm text-muted-foreground mb-4">Export system performance and health metrics</p>
                  <div className="flex gap-2">
                    <a href="#" className="text-sm text-primary underline">
                      Export CSV
                    </a>
                    <a href="#" className="text-sm text-primary underline">
                      Export Excel
                    </a>
                    <a href="#" className="text-sm text-primary underline">
                      Export JSON
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
