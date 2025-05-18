"use client"

import { Bar, Line, Pie } from "react-chartjs-2"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

// Register the Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend)

export function EnhancedAnalyticsDashboard() {
  // Sample data for all charts
  const userGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "New Users",
        data: [530, 620, 750, 890, 960, 1100, 1250, 1380, 1480, 1650, 1750, 1900],
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
      {
        label: "Active Users",
        data: [1200, 1350, 1450, 1600, 1750, 1900, 2100, 2250, 2400, 2600, 2800, 3000],
        backgroundColor: "rgba(16, 185, 129, 0.5)",
        borderColor: "rgba(16, 185, 129, 1)",
        borderWidth: 1,
      },
    ],
  }

  const featureUsageData = {
    labels: ["News", "Flashcards", "PYQ Mapping", "Notes", "Analytics", "Study Plan"],
    datasets: [
      {
        label: "Usage Hours",
        data: [4500, 3200, 2800, 2100, 1800, 1500],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(139, 92, 246, 0.7)",
          "rgba(236, 72, 185,129,0.7)",
          "rgba(245,158,11,0.7)",
          "rgba(139,92,246,0.7)",
          "rgba(236,72,153,0.7)",
          "rgba(220,38,38,0.7)",
        ],
        borderColor: [
          "rgba(59,130,246,1)",
          "rgba(16,185,129,1)",
          "rgba(245,158,11,1)",
          "rgba(139,92,246,1)",
          "rgba(236,72,153,1)",
          "rgba(220,38,38,1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const deviceUsageData = {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        label: "Device Usage",
        data: [58, 35, 7],
        backgroundColor: ["rgba(59,130,246,0.7)", "rgba(16,185,129,0.7)", "rgba(245,158,11,0.7)"],
        borderColor: ["rgba(59,130,246,1)", "rgba(16,185,129,1)", "rgba(245,158,11,1)"],
        borderWidth: 1,
      },
    ],
  }

  const contentPerformanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "News Views",
        data: [4200, 4500, 5100, 5400, 5800, 6200, 6500, 6800, 7100, 7500, 7900, 8300],
        borderColor: "rgba(59,130,246,1)",
        backgroundColor: "rgba(59,130,246,0.5)",
        tension: 0.3,
      },
      {
        label: "Flashcard Usage",
        data: [3100, 3300, 3600, 3900, 4200, 4500, 4800, 5100, 5400, 5700, 6000, 6300],
        borderColor: "rgba(16,185,129,1)",
        backgroundColor: "rgba(16,185,129,0.5)",
        tension: 0.3,
      },
      {
        label: "PYQ Practice",
        data: [2200, 2400, 2700, 3000, 3200, 3500, 3700, 3900, 4100, 4300, 4500, 4700],
        borderColor: "rgba(245,158,11,1)",
        backgroundColor: "rgba(245,158,11,0.5)",
        tension: 0.3,
      },
    ],
  }

  const userRetentionData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
    datasets: [
      {
        label: "Retention Rate (%)",
        data: [100, 86, 74, 65, 58, 52, 48, 45],
        borderColor: "rgba(59,130,246,1)",
        backgroundColor: "rgba(59,130,246,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">User Analytics</TabsTrigger>
          <TabsTrigger value="content">Content Performance</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>New and active users over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <Bar
                    data={userGrowthData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature Usage</CardTitle>
                <CardDescription>Usage distribution across platform features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <Bar
                    data={featureUsageData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      indexAxis: "y",
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Distribution</CardTitle>
                <CardDescription>Platform usage by device type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <Pie
                    data={deviceUsageData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
                <CardDescription>Engagement with different content types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <Line
                    data={contentPerformanceData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Retention Analysis</CardTitle>
                <CardDescription>User retention rate over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <Line
                    data={userRetentionData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          min: 0,
                          max: 100,
                          title: {
                            display: true,
                            text: "Retention Percentage (%)",
                          },
                        },
                      },
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium">Content Performance Analytics</h3>
            <p className="text-muted-foreground mt-2">Detailed content analytics will be displayed here</p>
          </div>
        </TabsContent>

        <TabsContent value="engagement">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium">User Engagement Analytics</h3>
            <p className="text-muted-foreground mt-2">Detailed engagement metrics will be displayed here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
