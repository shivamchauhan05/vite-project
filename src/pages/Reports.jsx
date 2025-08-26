// pages/Reports.js
import React, { useState } from 'react';
import { FiDownload, FiPrinter, FiFilter, FiPieChart, FiBarChart, FiTrendingUp, FiDollarSign,FiShoppingCart, FiUser } from 'react-icons/fi';

const Reports = () => {
  const [activeReport, setActiveReport] = useState('sales');

  const reports = [
    { id: 'sales', label: 'Sales Report', icon: FiTrendingUp },
    { id: 'expenses', label: 'Expense Report', icon: FiBarChart },
    { id: 'profit', label: 'Profit & Loss', icon: FiPieChart },
    { id: 'inventory', label: 'Inventory Report', icon: FiBarChart }
  ];

  const timeRanges = [
    'Today', 'This Week', 'This Month', 'This Quarter', 'This Year', 'Custom'
  ];

  // Sample report data
  const salesData = {
    totalRevenue: 1256400,
    totalOrders: 245,
    averageOrderValue: 5128,
    growth: 12.5
  };

  const topProducts = [
    { name: 'Smartphone X', quantity: 45, revenue: 1125000 },
    { name: 'Laptop Pro', quantity: 32, revenue: 2875000 },
    { name: 'Wireless Earbuds', quantity: 67, revenue: 334500 },
    { name: 'Smartwatch', quantity: 28, revenue: 420000 },
    { name: 'Tablet Mini', quantity: 38, revenue: 570000 }
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Business Reports</h1>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
            <FiDownload className="mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
            <FiPrinter className="mr-2" />
            Print
          </button>
        </div>
      </div>

      {/* Report Selection */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex space-x-2 mb-4 md:mb-0">
              {reports.map(report => {
                const Icon = report.icon;
                return (
                  <button
                    key={report.id}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${activeReport === report.id ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveReport(report.id)}
                  >
                    <Icon className="mr-2" />
                    {report.label}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                {timeRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              <button className="flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">
                <FiFilter className="mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* Report Content */}
        <div className="p-6">
          {activeReport === 'sales' && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Sales Report - November 2023</h2>
              
              {/* Sales Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">₹{salesData.totalRevenue.toLocaleString()}</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FiDollarSign className="h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center text-green-600">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium ml-1">+{salesData.growth}%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">From last month</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Orders</p>
                      <p className="text-2xl font-bold text-gray-900">{salesData.totalOrders}</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <FiShoppingCart className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">Completed orders</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg. Order Value</p>
                      <p className="text-2xl font-bold text-gray-900">₹{salesData.averageOrderValue.toLocaleString()}</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <FiTrendingUp className="h-6 w-6 text-purple-500" />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">Across all orders</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                      <p className="text-2xl font-bold text-gray-900">24.8%</p>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <FiUser className="h-6 w-6 text-yellow-500" />
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center text-green-600">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium ml-1">+3.2%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">From last month</p>
                  </div>
                </div>
              </div>

              {/* Top Products */}
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Top Selling Products</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity Sold</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {topProducts.map((product, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.quantity}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{product.revenue.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sales Chart Placeholder */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Trend</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Sales chart will be displayed here</p>
                </div>
              </div>
            </div>
          )}

          {activeReport === 'expenses' && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Expense Report - November 2023</h2>
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Expense report content will be displayed here</p>
              </div>
            </div>
          )}

          {activeReport === 'profit' && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Profit & Loss Statement - November 2023</h2>
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Profit and loss report content will be displayed here</p>
              </div>
            </div>
          )}

          {activeReport === 'inventory' && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Inventory Report - November 2023</h2>
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Inventory report content will be displayed here</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;