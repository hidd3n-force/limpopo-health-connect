
import { useState } from 'react';
import { FileText, Pill, Clock, Download, Share, Eye } from 'lucide-react';

const mockLabResults = [
  {
    id: '1',
    testName: 'Full Blood Count',
    date: '12 Dec 2024',
    status: 'Ready',
    lab: 'Lancet Laboratories',
    urgent: false,
  },
  {
    id: '2',
    testName: 'Lipogram',
    date: '10 Dec 2024',
    status: 'Ready',
    lab: 'PathCare',
    urgent: false,
  },
  {
    id: '3',
    testName: 'HbA1c',
    date: '8 Dec 2024',
    status: 'Processing',
    lab: 'Lancet Laboratories',
    urgent: true,
  }
];

const mockPrescriptions = [
  {
    id: '1',
    medication: 'Amlodipine 5mg',
    prescribedBy: 'Dr. Sarah Molefe',
    date: '10 Dec 2024',
    instructions: 'Take once daily with food',
    refillsLeft: 2,
    status: 'active',
  },
  {
    id: '2',
    medication: 'Metformin 500mg',
    prescribedBy: 'Dr. John Mashego',
    date: '5 Dec 2024',
    instructions: 'Take twice daily with meals',
    refillsLeft: 0,
    status: 'needs-refill',
  }
];

export const HealthPage = () => {
  const [activeTab, setActiveTab] = useState<'lab-results' | 'prescriptions' | 'history'>('lab-results');

  const handleViewResult = (resultId: string) => {
    console.log('View lab result:', resultId);
  };

  const handleDownloadResult = (resultId: string) => {
    console.log('Download lab result:', resultId);
  };

  const handleShareResult = (resultId: string) => {
    console.log('Share lab result:', resultId);
  };

  const handleRefillPrescription = (prescriptionId: string) => {
    console.log('Refill prescription:', prescriptionId);
  };

  const renderLabResults = () => (
    <div className="space-y-4">
      {mockLabResults.map((result) => (
        <div key={result.id} className="healthcare-card">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-healthcare-h3 text-text-primary font-semibold">
                  {result.testName}
                </h3>
                {result.urgent && (
                  <span className="bg-warning text-white px-2 py-1 rounded-full text-xs font-medium">
                    Urgent
                  </span>
                )}
              </div>
              <p className="text-healthcare-small text-text-secondary">
                {result.lab} • {result.date}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-healthcare-small font-medium ${
              result.status === 'Ready' 
                ? 'bg-success text-white' 
                : 'bg-warning text-white'
            }`}>
              {result.status}
            </span>
          </div>
          
          {result.status === 'Ready' && (
            <div className="flex space-x-2">
              <button
                onClick={() => handleViewResult(result.id)}
                className="flex items-center space-x-2 flex-1 justify-center py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span className="text-healthcare-small font-medium">View</span>
              </button>
              
              <button
                onClick={() => handleDownloadResult(result.id)}
                className="flex items-center space-x-2 flex-1 justify-center py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="text-healthcare-small font-medium">Download</span>
              </button>
              
              <button
                onClick={() => handleShareResult(result.id)}
                className="flex items-center space-x-2 flex-1 justify-center py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Share className="w-4 h-4" />
                <span className="text-healthcare-small font-medium">Share</span>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderPrescriptions = () => (
    <div className="space-y-4">
      {mockPrescriptions.map((prescription) => (
        <div key={prescription.id} className="healthcare-card">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-healthcare-h3 text-text-primary font-semibold">
                  {prescription.medication}
                </h3>
                {prescription.status === 'needs-refill' && (
                  <span className="bg-warning text-white px-2 py-1 rounded-full text-xs font-medium">
                    Refill Needed
                  </span>
                )}
              </div>
              <p className="text-healthcare-small text-text-secondary mb-2">
                Prescribed by {prescription.prescribedBy} • {prescription.date}
              </p>
              <p className="text-healthcare-small text-text-primary">
                {prescription.instructions}
              </p>
              <p className="text-healthcare-small text-text-secondary mt-1">
                Refills remaining: {prescription.refillsLeft}
              </p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {prescription.status === 'needs-refill' ? (
              <button
                onClick={() => handleRefillPrescription(prescription.id)}
                className="healthcare-button-primary flex-1"
              >
                Request Refill
              </button>
            ) : (
              <button className="healthcare-button-secondary flex-1">
                Order Medication
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderHistory = () => (
    <div className="healthcare-card p-8 text-center">
      <Clock className="w-16 h-16 text-text-secondary mx-auto mb-4" />
      <h3 className="text-healthcare-h3 text-text-primary mb-2">
        Medical History Timeline
      </h3>
      <p className="text-healthcare-body text-text-secondary">
        Your complete medical history will be available here soon.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-bg-primary pb-20">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-4">
        <h1 className="text-healthcare-h1 text-text-primary mb-6">My Health</h1>
        
        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('lab-results')}
            className={`flex-1 px-2 py-3 rounded-lg text-healthcare-small font-medium transition-all duration-200 ${
              activeTab === 'lab-results'
                ? 'bg-white text-primary shadow-sm'
                : 'text-text-secondary'
            }`}
          >
            Lab Results
          </button>
          <button
            onClick={() => setActiveTab('prescriptions')}
            className={`flex-1 px-2 py-3 rounded-lg text-healthcare-small font-medium transition-all duration-200 ${
              activeTab === 'prescriptions'
                ? 'bg-white text-primary shadow-sm'
                : 'text-text-secondary'
            }`}
          >
            Prescriptions
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 px-2 py-3 rounded-lg text-healthcare-small font-medium transition-all duration-200 ${
              activeTab === 'history'
                ? 'bg-white text-primary shadow-sm'
                : 'text-text-secondary'
            }`}
          >
            History
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4">
        {activeTab === 'lab-results' && renderLabResults()}
        {activeTab === 'prescriptions' && renderPrescriptions()}
        {activeTab === 'history' && renderHistory()}
      </div>
    </div>
  );
};
