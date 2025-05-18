import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Admin Documentation - UPSC Aspirants AI",
  description: "Comprehensive documentation on the UPSC Aspirants AI admin panel features and functionality",
}

export default function AdminDocsPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Admin Panel Documentation</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Comprehensive guide to the UPSC Aspirants AI admin panel features, functionality, and best practices.
      </p>

      <Tabs defaultValue="overview">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="api">API Management</TabsTrigger>
          <TabsTrigger value="sources">Source Management</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Admin Panel Overview
          </h2>
          <p className="leading-7">
            The UPSC Aspirants AI admin panel provides a comprehensive suite of tools for managing the platform,
            monitoring user activity, configuring APIs, and analyzing system performance.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Key Features</h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Centralized dashboard with key metrics and performance indicators</li>
            <li>API management for integrating with various data sources and services</li>
            <li>Source and file management for organizing educational content</li>
            <li>Database configuration and monitoring tools</li>
            <li>Comprehensive user management with role-based access control</li>
            <li>Advanced analytics for tracking platform usage and engagement</li>
            <li>System settings and configuration options</li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Access Control</h3>
          <p className="leading-7 mt-4">
            The admin panel implements role-based access control with the following privilege levels:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>Super Admin:</strong> Complete access to all features and functions
            </li>
            <li>
              <strong>Content Admin:</strong> Manage content, sources, and educational materials
            </li>
            <li>
              <strong>User Admin:</strong> Manage user accounts, permissions, and communication
            </li>
            <li>
              <strong>Analytics Admin:</strong> Access to reporting and analytics features
            </li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Navigation</h3>
          <p className="leading-7 mt-4">
            The admin panel is organized with a left sidebar navigation for quick access to all major sections. Each
            section contains relevant sub-sections and features.
          </p>
        </TabsContent>

        <TabsContent value="dashboard" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Admin Dashboard
          </h2>
          <p className="leading-7">
            The admin dashboard provides a high-level overview of platform activity, user engagement, and system
            performance.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Dashboard Components</h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>Key Metrics Cards:</strong> Display essential performance indicators like active users, content
              engagement, and system health
            </li>
            <li>
              <strong>Activity Timeline:</strong> Shows recent actions and events across the platform
            </li>
            <li>
              <strong>User Growth Chart:</strong> Visualizes user acquisition and retention trends
            </li>
            <li>
              <strong>Content Engagement:</strong> Tracks usage patterns for different content types
            </li>
            <li>
              <strong>System Health:</strong> Monitors API performance, database operations, and service status
            </li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Customizing the Dashboard</h3>
          <p className="leading-7 mt-4">Administrators can customize the dashboard layout and metrics displayed:</p>
          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>Click the "Customize" button in the top-right corner</li>
            <li>Drag and drop widgets to rearrange the layout</li>
            <li>Use the "Add Widget" button to include additional metrics</li>
            <li>Configure time periods and data sources for each widget</li>
            <li>Save your custom layout for future sessions</li>
          </ol>
        </TabsContent>

        <TabsContent value="api" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            API Management
          </h2>
          <p className="leading-7">
            The API Management section allows administrators to configure, monitor, and maintain integrations with
            external services and data sources.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">API Configuration</h3>
          <p className="leading-7 mt-4">This platform integrates with several key APIs:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>News APIs:</strong> For fetching current affairs content
            </li>
            <li>
              <strong>AI and ML Services:</strong> For content analysis and question generation
            </li>
            <li>
              <strong>Authentication Services:</strong> For secure user management
            </li>
            <li>
              <strong>Storage Services:</strong> For file management and content delivery
            </li>
            <li>
              <strong>Analytics Services:</strong> For tracking user behavior and engagement
            </li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">API Health Monitoring</h3>
          <p className="leading-7 mt-4">
            The API health dashboard provides real-time monitoring of all integrated services:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Response time tracking</li>
            <li>Error rate monitoring</li>
            <li>Usage quota management</li>
            <li>Cost optimization tools</li>
            <li>Automatic alerting for service disruptions</li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Adding New API Integrations</h3>
          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>Navigate to the "Add New API" section</li>
            <li>Select the API type from the dropdown menu</li>
            <li>Enter the required credentials and configuration parameters</li>
            <li>Set usage limits and monitoring thresholds</li>
            <li>Test the connection using the built-in diagnostic tools</li>
            <li>Enable the integration for production use</li>
          </ol>
        </TabsContent>

        <TabsContent value="sources" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Source Management
          </h2>
          <p className="leading-7">
            The Source Management module provides tools for organizing, categorizing, and maintaining educational
            content sources and files.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Content Sources</h3>
          <p className="leading-7 mt-4">Manage various content sources including:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>News Publications:</strong> Configure trusted news sources for current affairs
            </li>
            <li>
              <strong>Reference Materials:</strong> Manage study materials and syllabus documents
            </li>
            <li>
              <strong>Previous Year Papers:</strong> Organize and categorize past exam questions
            </li>
            <li>
              <strong>User-Generated Content:</strong> Review and moderate community contributions
            </li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">File Management</h3>
          <p className="leading-7 mt-4">The file management system provides:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Secure cloud storage for educational materials</li>
            <li>Version control for frequently updated documents</li>
            <li>Batch upload and processing tools</li>
            <li>Content tagging and categorization features</li>
            <li>Access control for premium or restricted content</li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Content Processing Workflows</h3>
          <p className="leading-7 mt-4">Configure automated workflows for content processing:</p>
          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>Automatic content extraction from various sources</li>
            <li>AI-based categorization and tagging</li>
            <li>Relevance scoring for UPSC preparation</li>
            <li>PYQ mapping and connection establishment</li>
            <li>Flashcard and question generation</li>
          </ol>
        </TabsContent>

        <TabsContent value="database" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Database Configuration
          </h2>
          <p className="leading-7">
            The Database Configuration section provides tools for managing database connections, monitoring performance,
            and maintaining data integrity.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Database Architecture</h3>
          <p className="leading-7 mt-4">The platform uses a multi-database architecture:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>User Database:</strong> Stores user accounts, profiles, and preferences
            </li>
            <li>
              <strong>Content Database:</strong> Manages educational materials and content metadata
            </li>
            <li>
              <strong>Analytics Database:</strong> Captures usage patterns and engagement metrics
            </li>
            <li>
              <strong>Cache Database:</strong> Improves performance for frequently accessed data
            </li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Performance Monitoring</h3>
          <p className="leading-7 mt-4">Monitor database performance metrics:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Query response times</li>
            <li>Connection pool utilization</li>
            <li>Storage usage and growth trends</li>
            <li>Index performance and optimization opportunities</li>
            <li>Read/write operation ratios</li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Data Management Tools</h3>
          <p className="leading-7 mt-4">Perform essential database administration tasks:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Run scheduled backups and verify backup integrity</li>
            <li>Configure data retention policies</li>
            <li>Manage database schema and migrations</li>
            <li>Import and export data between environments</li>
            <li>Implement data security and compliance measures</li>
          </ul>
        </TabsContent>

        <TabsContent value="users" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            User Management
          </h2>
          <p className="leading-7">
            The User Management section provides tools for managing user accounts, roles, permissions, and engagement.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">User Roles and Permissions</h3>
          <p className="leading-7 mt-4">The platform supports several user roles:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>Admin:</strong> Full access to admin functionality
            </li>
            <li>
              <strong>Editor:</strong> Can manage content and educational materials
            </li>
            <li>
              <strong>Moderator:</strong> Reviews user-generated content and community interactions
            </li>
            <li>
              <strong>Premium User:</strong> Access to all platform features
            </li>
            <li>
              <strong>Basic User:</strong> Access to free features only
            </li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">User Account Management</h3>
          <p className="leading-7 mt-4">Manage user accounts through the following functions:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Create, edit, and deactivate user accounts</li>
            <li>Reset passwords and manage security settings</li>
            <li>Assign and modify user roles and permissions</li>
            <li>Track account activity and login history</li>
            <li>Manage subscription and billing information</li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">User Communication Tools</h3>
          <p className="leading-7 mt-4">Engage with users through various communication channels:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Send targeted announcements and notifications</li>
            <li>Manage email campaigns and newsletters</li>
            <li>Configure automated onboarding sequences</li>
            <li>Track message delivery and engagement metrics</li>
            <li>Collect and analyze user feedback</li>
          </ul>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Analytics
          </h2>
          <p className="leading-7">
            The Analytics section provides powerful tools for tracking, analyzing, and visualizing platform performance
            and user engagement.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">User Analytics</h3>
          <p className="leading-7 mt-4">Track and analyze user behavior and demographics:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Active users (daily, weekly, monthly)</li>
            <li>User acquisition and retention metrics</li>
            <li>User demographics and segmentation</li>
            <li>Session duration and frequency</li>
            <li>Feature adoption and usage patterns</li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Content Analytics</h3>
          <p className="leading-7 mt-4">Measure content performance and engagement:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Most viewed and shared content</li>
            <li>Time spent on different content types</li>
            <li>Content effectiveness for exam preparation</li>
            <li>User-generated content metrics</li>
            <li>Search patterns and popular topics</li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Business Analytics</h3>
          <p className="leading-7 mt-4">Monitor business performance and growth:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Revenue and subscription metrics</li>
            <li>Conversion rates and funnel analysis</li>
            <li>Customer lifetime value</li>
            <li>Churn prediction and prevention</li>
            <li>Cost analysis and optimization</li>
          </ul>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Custom Reports and Dashboards</h3>
          <p className="leading-7 mt-4">Create and schedule custom analytics reports:</p>
          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>Select metrics and dimensions for your report</li>
            <li>Choose visualization types (charts, tables, etc.)</li>
            <li>Set up filtering and segmentation options</li>
            <li>Schedule automated report generation</li>
            <li>Configure distribution to stakeholders via email</li>
          </ol>
        </TabsContent>
      </Tabs>
    </div>
  )
}
