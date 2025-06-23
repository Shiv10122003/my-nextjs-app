import React from 'react';
import Dashboard from '../../components/Dashboard';
import Head from 'next/head';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Dashboard | MyApp</title>
        <meta name="description" content="Your personalized analytics dashboard" />
      </Head>

      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center">
              <img 
                className="w-8 h-8 rounded-full border border-gray-300" 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="User profile"
              />
              <span className="ml-2 text-sm font-medium text-gray-800">John Doe</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-all">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-gray-100">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total {item === 1 ? 'Revenue' : item === 2 ? 'Users' : item === 3 ? 'Orders' : 'Conversion'}</p>
                  <p className="text-2xl font-semibold text-black">${(item * 1245).toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black p-6 rounded-lg border border-gray-200 mb-8">
          <Dashboard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-black mb-4">Performance Metrics</h2>
            <div className="h-64 bg-gray-50 rounded flex items-center justify-center border border-gray-200">
              <p className="text-gray-600">Performance Chart</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-black mb-4">Recent Activity</h2>
            <ul className="space-y-4">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
                      <svg className="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-black">Activity {item}</p>
                    <p className="text-sm text-gray-600">About {item} hour{item !== 1 ? 's' : ''} ago</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;