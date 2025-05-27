
import { User, Edit, Bell, Shield, HelpCircle, LogOut, Phone, Mail, MapPin, CreditCard } from 'lucide-react';

export const ProfilePage = () => {
  const userProfile = {
    name: 'Thabo Molefe',
    email: 'thabo.molefe@email.com',
    phone: '+27 82 555 0123',
    location: 'Polokwane, Limpopo',
    memberNumber: 'DIS001234567',
    medicalAid: 'Discovery Health',
    emergencyContact: 'Sarah Molefe (+27 83 444 0098)',
  };

  const handleEditProfile = () => {
    console.log('Edit profile');
  };

  const handleNotificationSettings = () => {
    console.log('Notification settings');
  };

  const handlePrivacySettings = () => {
    console.log('Privacy settings');
  };

  const handleHelpSupport = () => {
    console.log('Help & support');
  };

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      console.log('Logout');
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary pb-20">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-6">
        <h1 className="text-healthcare-h1 text-text-primary mb-6">Profile</h1>
        
        {/* User Info Card */}
        <div className="healthcare-card">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-healthcare-h2 text-text-primary font-semibold">
                {userProfile.name}
              </h2>
              <p className="text-healthcare-body text-text-secondary">
                Patient ID: #{userProfile.memberNumber.slice(-6)}
              </p>
            </div>
            <button
              onClick={handleEditProfile}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Edit className="w-5 h-5 text-text-secondary" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Personal Information */}
        <section>
          <h3 className="text-healthcare-h3 text-text-primary mb-4">Personal Information</h3>
          
          <div className="healthcare-card space-y-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <Mail className="w-5 h-5 text-text-secondary" />
              <div className="flex-1">
                <p className="text-healthcare-small text-text-secondary">Email</p>
                <p className="text-healthcare-body text-text-primary">{userProfile.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <Phone className="w-5 h-5 text-text-secondary" />
              <div className="flex-1">
                <p className="text-healthcare-small text-text-secondary">Phone</p>
                <p className="text-healthcare-body text-text-primary">{userProfile.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <MapPin className="w-5 h-5 text-text-secondary" />
              <div className="flex-1">
                <p className="text-healthcare-small text-text-secondary">Location</p>
                <p className="text-healthcare-body text-text-primary">{userProfile.location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Aid Information */}
        <section>
          <h3 className="text-healthcare-h3 text-text-primary mb-4">Medical Aid</h3>
          
          <div className="healthcare-card">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <CreditCard className="w-5 h-5 text-text-secondary" />
              <div className="flex-1">
                <p className="text-healthcare-body text-text-primary font-medium">{userProfile.medicalAid}</p>
                <p className="text-healthcare-small text-text-secondary">Member: {userProfile.memberNumber}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section>
          <h3 className="text-healthcare-h3 text-text-primary mb-4">Emergency Contact</h3>
          
          <div className="healthcare-card">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <Phone className="w-5 h-5 text-error" />
              <div className="flex-1">
                <p className="text-healthcare-small text-text-secondary">Emergency Contact</p>
                <p className="text-healthcare-body text-text-primary">{userProfile.emergencyContact}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Settings */}
        <section>
          <h3 className="text-healthcare-h3 text-text-primary mb-4">Settings</h3>
          
          <div className="healthcare-card space-y-2">
            <button
              onClick={handleNotificationSettings}
              className="flex items-center space-x-3 p-3 w-full rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <Bell className="w-5 h-5 text-text-secondary" />
              <div className="flex-1">
                <p className="text-healthcare-body text-text-primary">Notifications</p>
                <p className="text-healthcare-small text-text-secondary">Manage your notification preferences</p>
              </div>
            </button>
            
            <button
              onClick={handlePrivacySettings}
              className="flex items-center space-x-3 p-3 w-full rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <Shield className="w-5 h-5 text-text-secondary" />
              <div className="flex-1">
                <p className="text-healthcare-body text-text-primary">Privacy & Security</p>
                <p className="text-healthcare-small text-text-secondary">Control your data and privacy settings</p>
              </div>
            </button>
            
            <button
              onClick={handleHelpSupport}
              className="flex items-center space-x-3 p-3 w-full rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <HelpCircle className="w-5 h-5 text-text-secondary" />
              <div className="flex-1">
                <p className="text-healthcare-body text-text-primary">Help & Support</p>
                <p className="text-healthcare-small text-text-secondary">Get help and contact support</p>
              </div>
            </button>
          </div>
        </section>

        {/* Logout */}
        <section>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center space-x-3 w-full p-4 bg-white rounded-healthcare border border-error text-error hover:bg-error hover:text-white transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-healthcare-body font-medium">Log Out</span>
          </button>
        </section>
      </div>
    </div>
  );
};
