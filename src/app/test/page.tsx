"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestPage() {
  const generateCSVData = () => {
    const dummyData = [
      { name: "John Doe", email: "john.doe@example.com", phone: "+15550101" },
      { name: "Jane Smith", email: "jane.smith@example.com", phone: "+15550102" },
      { name: "Michael Johnson", email: "michael.johnson@example.com", phone: "+15550103" },
      { name: "Emily Davis", email: "emily.davis@example.com", phone: "+15550104" },
      { name: "David Wilson", email: "david.wilson@example.com", phone: "+15550105" },
      { name: "Sarah Brown", email: "sarah.brown@example.com", phone: "+15550106" },
      { name: "Chris Miller", email: "chris.miller@example.com", phone: "+15550107" },
      { name: "Jessica Taylor", email: "jessica.taylor@example.com", phone: "+15550108" },
      { name: "Robert Anderson", email: "robert.anderson@example.com", phone: "+15550109" },
      { name: "Amanda Martinez", email: "amanda.martinez@example.com", phone: "+15550110" }
    ];

    // Create CSV header
    const csvHeader = "Name,Email,Phone\n";
    
    // Create CSV rows
    const csvRows = dummyData.map(row => 
      `${row.name},${row.email},${row.phone}`
    ).join("\n");
    
    return csvHeader + csvRows;
  };

  const downloadCSV = () => {
    const csvData = generateCSVData();
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "dummy_contacts.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold">CSV Download Test</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Click the button below to download a CSV file with 10 rows of dummy contact data.
        </p>
        
        <Button 
          onClick={downloadCSV}
          className="px-8 py-3 text-lg"
          variant="default"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Sample CSV
        </Button>

        <div className="mt-8 max-w-md mx-auto">
          <h3 className="mb-4 text-lg font-semibold">CSV Content Preview:</h3>
          <div className="bg-muted p-4 rounded-lg text-left text-sm font-mono">
            <div className="mb-2 font-semibold">Name,Email,Phone</div>
            <div>&quot;John Doe&quot;,&quot;john.doe@example.com&quot;,&quot;+1-555-0101&quot;</div>
            <div>&quot;Jane Smith&quot;,&quot;jane.smith@example.com&quot;,&quot;+1-555-0102&quot;</div>
            <div className="text-muted-foreground">...and 8 more rows</div>
          </div>
        </div>
      </div>
    </div>
  );
}
