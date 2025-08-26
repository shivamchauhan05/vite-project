// CustomerPage.js
import React, { useState } from 'react';
import { FiPlus, FiFilter, FiDownload, FiPrinter, FiSearch, FiEdit, FiTrash2, FiUser, FiMail, FiPhone, FiMapPin, FiDollarSign } from 'react-icons/fi';

const CustomerPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const customerData = {
    totalCustomers: 1245,
    newThisMonth: 45,
    activeCustomers: 892,
    owedAmount: 125600
  };

  const filters = [
    { id: 'all', label: 'All Customers' },
    { id: 'active', label: 'Active' },
    { id: 'new', label: 'New' },
    { id: 'owing', label: 'Owing Money' }
  ];

  const customers = [
    { 
      id: 'C001', 
      name: 'Rajesh Traders', 
      email: 'rajesh@example.com', 
      phone: '+91 9876543210', 
      address: '123 MG Road, Bangalore',
      since: '10 Nov 2020',
      orders: 45,
      lastOrder: '10 Nov 2023',
      owed: 0,
      status: 'Active'
    },
    { 
      id: 'C002', 
      name: 'Mohan Stores', 
      email: 'mohan@example.com', 
      phone: '+91 9876543211', 
      address: '456 Brigade Road, Bangalore',
      since: '15 Jan 2021',
      orders: 32,
      lastOrder: '9 Nov 2023',
      owed: 0,
      status: 'Active'
    },
    { 
      id: 'C003', 
      name: 'Sanjay Enterprises', 
      email: 'sanjay@example.com', 
      phone: '+91 9876543212', 
      address: '789 Commercial Street, Bangalore',
      since: '20 Mar 2021',
      orders: 28,
      lastOrder: '8 Nov 2023',
      owed: 12500,
      status: 'Owing'
    },
    { 
      id: 'C004', 
      name: 'RK Suppliers', 
      email: 'rk@example.com', 
      phone: '+91 9876543213', 
      address: '321 Residency Road, Bangalore',
      since: '5 May 2021',
      orders: 38,
      lastOrder: '7 Nov 2023',
      owed: 0,
      status: 'Active'
    },
    { 
      id: 'C005', 
      name: 'Global Electronics', 
      email: 'global@example.com', 
      phone: '+91 9876543214', 
      address: '654 Cunningham Road, Bangalore',
      since: '12 Jul 2021',
      orders: 52,
      lastOrder: '6 Nov 2023',
      owed: 0,
      status: 'Active'
    },
    { 
      id: 'C006', 
      name: 'Tech Gadgets Inc.', 
      email: 'tech@example.com', 
      phone: '+91 9876543215', 
      address: '987 Infantry Road, Bangalore',
      since: '25 Aug 2021',
      orders: 67,
      lastOrder: '5 Nov 2023',
      owed: 8500,
      status: 'Owing'
    },
    { 
      id: 'C007', 
      name: 'Prime Retailers', 
      email: 'prime@example.com', 
      phone: '+91 9876543216', 
      address: '147 Lavelle Road, Bangalore',
      since: '3 Oct 2023',
      orders: 5,
      lastOrder: '4 Nov 2023',
      owed: 0,
      status: 'New'
    },
    { 
      id: 'C008', 
      name: 'Elite Solutions', 
      email: 'elite@example.com', 
      phone: '+91 9876543217', 
      address: '258 St. Marks Road, Bangalore',
      since: '8 Sep 2021',
      orders: 41,
      lastOrder: '3 Nov 2023',
      owed: 0,
      status: 'Active'
    }
  ];

  const statusClass = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Owing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCustomers = customers.filter(customer => {
    // Filter by status
    if (activeFilter === 'active' && customer.status !== 'Active') return false;
    if (activeFilter === 'new' && customer.status !== 'New') return false;
    if (activeFilter === 'owing' && customer.owed <= 0) return false;
    
    // Filter by search query
    if (searchQuery && !customer.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !customer.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !customer.phone.includes(searchQuery)) return false;
    
    return true;
  });

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Customer Management</h1>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
            <FiDownload className="mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
            <FiPrinter className="mr-2" />
            Print
          </button>
          <button className="flex items-center px-4 py-2 bg-primary border border-transparent rounded-md text-white hover:bg-secondary  bg-blue-600">
            <FiPlus className="mr-2" />
            Add Customer
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900">{customerData.totalCustomers}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FiUser className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs text-gray-500">All time customers</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New This Month</p>
              <p className="text-2xl font-bold text-gray-900">{customerData.newThisMonth}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FiUser className="h-6 w-6 text-green-500" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center text-green-600">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium ml-1">+12.5%</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">From last month</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Customers</p>
              <p className="text-2xl font-bold text-gray-900">{customerData.activeCustomers}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FiUser className="h-6 w-6 text-purple-500" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs text-gray-500">Active in last 30 days</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Amount Owed</p>
              <p className="text-2xl font-bold text-gray-900">₹{customerData.owedAmount.toLocaleString()}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FiDollarSign className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs text-gray-500">Total outstanding payments</p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex space-x-2 mb-4 md:mb-0">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === filter.id ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search customers..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Customers Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Since</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Order</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owed</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {customer.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.email}</div>
                    <div className="text-sm text-gray-500">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.since}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.orders}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.lastOrder}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.owed > 0 ? `₹${customer.owed.toLocaleString()}` : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass(customer.status)}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary hover:text-secondary mr-3">
                      <FiEdit className="inline mr-1" /> Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <FiTrash2 className="inline mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
                <span className="font-medium">{filteredCustomers.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">1</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">2</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">8</a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;